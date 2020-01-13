varop(`(28 0a a4) b0 := (00) 5`);
varop(`(28 0a a4) b1 := (00) 3`);
varop(`(28 0a a4) b2 := (00) 3`);
setDialogBoxColor(GREEN);
playBGM({ num: 1, volume: 100 });
bgload({ name: `BG07B1`, transition: 20 });
setSceneTitle({ index: 19 });
clock(`20:37`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We met at the chicken sandwich stand and ate 
as scheduled.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the end, I didn't fix anything for dinner...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C000`); appendText; 
   Kid`"Hey, Takeshi."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Whaaaat?"`;
   waitForClick; clearText; marker; sound(`T3C001`); appendText; 
   Kid`"Can't you fix anything besides chicken 
sandwiches?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hmm, well there's not much I can do 'bout 
that..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"There wasn't much at this kiosk except 
chicken sandwiches to start with."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I cooked all the hot dogs this morning so 
they're finished. The owner probably just 
kept them for a little variation." `;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C002`); appendText; 
   Kid`"Oh really..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid held the sandwich wrapping in his 
right hand and twisted it around his 
fingertip. `;
   waitForClick; clearText; marker; appendText; 
   Narr`The half-eaten sandwich remained in his left 
hand, not getting any smaller.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It didn't seem like he couldn't finish it.... `;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU15ADM`, name2: `KA13ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C003`); appendText; 
   You`"What's the deal? Eat up before it gets cold."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You was done eating, and she peered at the 
Kid's face.`;
   waitForClick; clearText; marker; sound(`T3C004`); appendText; 
   Kid`"Yeah..." `;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C005`); appendText; 
   You`"You must have walked all over looking 
something else to eat. But it was no use 
after all, huh?"`;
   waitForClick; clearText; marker; sound(`T3C006`); appendText; 
   You`"The food washed into the corridors during the 
flooding is almost all spoiled anyway..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C007`); appendText; 
   You`"But that's okay because we've more stuff to 
make chicken sandwiches than you could 
imagine."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C008`); appendText; 
   Kid`"I guess that's true..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The kid tore off a piece of the sandwich and 
shoved it in his mouth.`;
   waitForClick; clearText; marker; sound(`T3C009`); appendText; 
   You`"To survive, it's crucial that you have 
something you can eat."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, it looks like he got the picture."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah, looks like we've got a real survivor 
on our hands."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C010`); appendText; 
   You`"Yep, that's right."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You answered shortly.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Huh?"`;
   waitForClick; clearText; marker; sound(`T3C011`); appendText; 
   You`"Yeah, just a little hobby of mine. Sometimes 
I go into the mountains alone."`;
   waitForClick; clearText; marker; sound(`T3C012`); appendText; 
   You`"I carve my own path...sometimes I even get a 
bit lost..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Into the mountains alone?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What? Are you training some ancient fighting 
art on the sly!"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU04ADM`, name2: `KA01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C013`); appendText; 
   You`"Geez, Takeshi. Why do you have to get like 
that?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah, out fighting the black bears under the 
winter moon!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C014`); appendText; 
   You`"Nope. I hunt out hot springs that nobody 
knows about."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU16ADM`, name2: `KA11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C015`); appendText; 
   You`"Yeah, deep in the mountains, someplace no 
one else has ever been. Oh, now THAT is this 
girl's idea of romantic!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You wriggled as if intoxicated by the image.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh now I get it. You were soaking in the hot 
springs with a bear." `;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `YU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C016`); appendText; 
   You`"No, no, no. Would you shut up about bears 
already!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Heh, heh..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"So, despite appearances, you're really wild 
at heart."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU16ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C017`); appendText; 
   You`"Oh, what might you be suggesting? Oh, heh, 
heh. "`;
   waitForClick; clearText; marker; appendText; 
   Narr`You drew herself up in an exaggerated fashion.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh yeah, you talked about stitching up your 
own finger. I suppose that was also while you 
were out searching for hot springs?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C018`); appendText; 
   You`"Huh? Oh...yeah...I suppose."`;
   waitForClick; clearText; marker; sound(`T3C019`); appendText; 
   You`"But it was just a surface scratch and I only 
needed a few stitches."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hmph."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Just like I thought ? bear wrestling."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C020`); appendText; 
   You`"Just give it up!" `;
   waitForClick; clearText; marker; appendText; 
   Narr`You turned red-faced as she exploded.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Wee, hee, hee..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C021`); appendText; 
   You`"Aaagghhh...I can't take this anymore."`;
   waitForClick; clearText; marker; appendText; 
   You`"......"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You let out a sigh and turned away from me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I supposed she was fed up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Maybe I got a little carried away...?)`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But You's face clouded over a bit. `;
   waitForClick; clearText; marker; appendText; 
   Narr`(Teasing her could have gotten her THAT 
down...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just as I was thinking that, You avoided my 
eyes and muttered - `;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T3C022`); appendText; 
   You`"Hey, Takeshi...?"`;
   waitForClick; clearText; marker; sound(`T3C023`); appendText; 
   You`"Umm, about Tsugumi..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed like she wanted to say something 
but she didn't know what to say.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What's up? What is it?"`;
   waitForClick; clearText; marker; sound(`T3C024`); appendText; 
   You`"Um, what I mean is, uh..."`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE01_00`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Just then we heard the sounds of people 
running through the water toward us. `;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Splish, splash, splish, splash.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 18, volume: 100 });
fgload({ id: 1, name: `CO02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C025`); appendText; 
   Coco`"Hey, what's up?" `;
   waitForClick; clearText; marker; sound(`PIPI_04`); appendText; 
   Pipi`"Bow wow!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey Coco, you about ready to eat?"`;
   waitForClick; clearText; marker; sound(`T3C026`); appendText; 
   Coco`"Yeah, all that running around's made me 
starved!"`;
   waitForClick; clearText; marker; sound(`PIPI_00`); appendText; 
   Pipi`"Warf!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`That's right, I remembered she was the only 
one who hadn't eaten yet.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I handed Coco the last chicken sandwich I had 
kept in the food warmer.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `CO01ADM`, name2: `KA13ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C027`); appendText; 
   Coco`"Alright, time to eat!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C028`); appendText; 
   Coco`"Yay! Chow time!"`;
   waitForClick; clearText; marker; appendText; 
   Coco`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C029`); appendText; 
   Coco`"Oh, this is yummy!"`;
   waitForClick; clearText; marker; sound(`T3C030`); appendText; 
   Coco`"Mmm. This blend of soy sauce, mayonnaise and 
fried chicken is perfect. Yum. Supreme...."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C031`); appendText; 
   Coco`"Yeah, Kiddo. This is divine, isn't it?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco shot the question to the Kid, who was 
standing in front of the store.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C032`); appendText; 
   Kid`"Uh, yeah. Sure."`;
   waitForClick; clearText; marker; sound(`T3C033`); appendText; 
   Kid`"But I'm getting a little tired of it."`;
   waitForClick; clearText; marker; appendText; 
   Narr`A last bit of unfinished sandwich remained in 
his left hand.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C034`); appendText; 
   Coco`"Really?"`;
   waitForClick; clearText; marker; sound(`T3C035`); appendText; 
   Coco`"Put some of this on, it'll be even better."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `CO16ADM`, name2: `KA14ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C036`); appendText; 
   Kid`"Huh? What is that?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C037`); appendText; 
   Coco`"Here it comes, ooey-gooey."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco pulled out a tube she had hidden behind 
her back, held it over the Kid's sandwich and 
squeezed.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What the heck is that?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C038`); appendText; 
   Coco`"Sour cream!"`;
   waitForClick; clearText; marker; sound(`T3C039`); appendText; 
   Coco`"It's supposed to be for salads. It was the 
last one at the gift shop."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hmmmmm..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The tube said: "Add some spice to your life" 
and "Crab-flavored cream sauce: mild."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That could really broaden your culinary 
horizons."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C040`); appendText; 
   Coco`"Yep. Munch. Gobble..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She doused her sandwich with the sour cream, 
opened her mouth wide and shoved it in. `;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C041`); appendText; 
   Coco`"Delicious!"`;
   waitForClick; clearText; marker; sound(`T3C042`); appendText; 
   Coco`"It doesn't get any better than this!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The kid looked at her doubtfully before 
taking a bite.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C043`); appendText; 
   Kid`"Hmmm...not bad."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C044`); appendText; 
   Kid`"This might be what it needed."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C045`); appendText; 
   Coco`"I told you! Yummy, yummy!"`;
   waitForClick; clearText; marker; sound(`PIPI_00`); appendText; 
   Pipi`"Woof!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`With that, both Coco and the Kid covered their 
sandwiches with cream before polishing them 
off.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `CO01ADM`, name2: `KA01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C046`); appendText; 
   Coco`"Hey Takepyon."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco called to Takeshi while crumpling up her 
sandwich wrapping.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Huh?"`;
   waitForClick; clearText; marker; sound(`T3C047`); appendText; 
   Coco`"What're we gonna do with Tsugumi's sandwich?"`;
   waitForClick; clearText; marker; sound(`T3C048`); appendText; 
   Coco`"How's about I hold onto it for her?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Uh, well...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had made it for her and I had stuck it in 
the warmer to keep for her. `;
   waitForClick; clearText; marker; appendText; 
   Narr`But then again...`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `YU11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C049`); appendText; 
   You`"Sorry Coco."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C050`); appendText; 
   You`"Tsugumi's still asleep. She won't wake up for 
awhile, so..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You gave Coco a pat on the head.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C051`); appendText; 
   Coco`"Is that right?"`;
   waitForClick; clearText; marker; sound(`T3C052`); appendText; 
   You`"Yep, I'll bet she's pretty tired. Let's let 
her sleep a bit longer."`;
   waitForClick; clearText; marker; sound(`T3C053`); appendText; 
   Coco`"Sigh..."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `CO01ADM`, name2: `YU01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C054`); appendText; 
   Coco`"Okay then. So she can eat it later, after 
she wakes up."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Huh?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C055`); appendText; 
   Coco`"Let's save it for her. No snacking on it on 
either!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco pointed to the sandwich nestled deep in 
the food warmer.`;
   waitForClick; clearText; marker; appendText; 
   Narr`...So she'd noticed it.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Alright. Roger that."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C056`); appendText; 
   Coco`"Great!"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `CO16ADM`, name2: `YU11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C057`); appendText; 
   Coco`"Okay, time for some after meal exercise"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`PIPI_04`); appendText; 
   Pipi`"Bow wow! Woof!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C058`); appendText; 
   Kid`"Hey, hold on. I wanna go too."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Splish, splash, splish...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco, the Kid and Pipi ran toward the rest 
area together.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You and I watched them from behind. `;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
removeFG({ id: 1, useAnim: true });
playBGM({ num: 3, volume: 100 });
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Oh, by the way, You..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Is Tsugumi resting up?"`;
   waitForClick; clearText; marker; sound(`T3C059`); appendText; 
   You`"Yeah, actually, I just stopped by the 
infirmary to check on her."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"How was she?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C060`); appendText; 
   You`"I'm not a medical expert or anything, so I 
can't say anything specific."`;
   waitForClick; clearText; marker; sound(`T3C061`); appendText; 
   You`"But she seems to be recuperating. 
Satisfactory progress, I think"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C062`); appendText; 
   You`"Maybe too satisfactory..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What do you mean by, 'too satisfactory?'"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C063`); appendText; 
   You`"I really don't know how to put it..."`;
   waitForClick; clearText; marker; appendText; 
   You`"..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You suddenly stopped talking and let her head 
fall forward.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, if her condition is stable, that's 
good isn't it? The operation went well, right?"`;
   waitForClick; clearText; marker; sound(`T3C064`); appendText; 
   You`"....Yeeeaaah..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What's up with you? Lose your confidence 
somewhere or something?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C065`); appendText; 
   You`"No, it's not that..."`;
   waitForClick; clearText; marker; appendText; 
   You`"..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C066`); appendText; 
   You`"Hmmm...yeah, yeah. That's it!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"??"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You lifted her head as if she had just 
realized something.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU15ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C067`); appendText; 
   You`"Perhaps I've lost some of my confidence, but 
I know Tsugumi is recovering."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C068`); appendText; 
   You`"Life force is an amazing thing, huh?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C069`); appendText; 
   You`"You know, humans don't die so easily."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You smiled when she said that.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeFG({ id: 1, useAnim: true });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
stopBGM();
playBGM({ num: 2, volume: 100 });
bgload({ name: `BG21B1`, transition: 20 });
clock(`21:13`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`After dinner, when we finished cleaning up, 
we made our way to the rest area.. `;
   waitForClick; clearText; marker; appendText; 
   Narr`Four stone statues were lined up in one 
corner of the area.`;
   waitForClick; clearText; 
});
bgload({ name: `IT05A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`One of them extended a hand, pointing toward 
the south.`;
   waitForClick; clearText; 
});
bgload_keepFg({ name: `IT05E`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Another reached toward the east.`;
   waitForClick; clearText; 
});
bgload({ name: `IT05C`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Yet another looked to the heavens while 
reaching a hand upward.`;
   waitForClick; clearText; 
});
bgload({ name: `IT05G`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The remaining figure...had both hands pressed 
to its chest and eyes closed. `;
   waitForClick; clearText; 
});
bgload({ name: `BG21B1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I wondered if there were some kind of meaning 
to all of it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I asked You, but she just shook her head 
unknowingly. `;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked like Coco, the Kid and Pipi were 
running amongst the figures as they played.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C070`); appendText; 
   You`"By the way, I wonder where Sora went..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, you're right. Now that you mention it, 
Sora was here until just before we ate."`;
   waitForClick; clearText; marker; sound(`T3C071`); appendText; 
   You`"Maybe she's still in the Control Room?"`;
   waitForClick; clearText; marker; sound(`T3C072`); appendText; 
   You`"It only happens once in a while, but 
sometimes she'll dive into LeMMIH's main 
console and not come out for quite a while."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Really?"`;
   waitForClick; clearText; marker; sound(`T3C073`); appendText; 
   You`"Seems like she can get pretty caught up in 
her work..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered if that was that all it was.`;
   waitForClick; clearText; marker; sound(`T3C074`); appendText; 
   You`"Well, I'll go check it out."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Alright, you do that."`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`With that, she ran out a nearby exit and down 
the corridor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As for me, after a quick stretch I let my 
eyes follow Coco and the others.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The same two people and one critter were 
circling about the stone statues.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed they were playing a game of 
chase, not really caring who was "it."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Without seeming to get bored, they kept 
running around and around in the same place.`;
   waitForClick; clearText; marker; appendText; 
   Narr`On the other hand, I got restless watching 
them. `;
   waitForClick; clearText; marker; appendText; 
   Narr`(Phew, what a sight...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked kind of fun, but I didn't quite 
feel like asking to join in.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I let my eyes roam around.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Whoa!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sora, so that's where you were?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`After her unexplained disappearance, Sora was 
now standing next to a nearby flowerbed.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C075`); appendText; 
   Sora`"Yes, I have been here for a little while."`;
   waitForClick; clearText; marker; sound(`T3C076`); appendText; 
   Sora`"I've been looking at the flowers."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked around at the flowers.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the flowerbed, short roses, marigolds and 
marguerites were all planted together.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah, but they sure don't seem to be doing 
very well."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3C077`); appendText; 
   Sora`"I see what you mean."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Nobody had watered them for the past several 
days.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The soil was dry, its surface cracked.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The flowers had wilted and the plants were 
beginning to dry up.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
bgload({ name: `EV_SO06A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T3C078`); appendText; 
   Sora`"Life is sure a strange phenomenon."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora muttered to herself as she gazed at the 
flowers. `;
   waitForClick; clearText; marker; sound(`T3C079`); appendText; 
   Sora`"A bud sprouts from a seed. A flower blossoms, 
reproduces, a seed matures and returns to the 
earth."`;
   waitForClick; clearText; marker; sound(`T3C080`); appendText; 
   Sora`"From that seed comes another bud, another 
flower, which blossoms and reproduces, a new 
seed which in turn returns to the earth."`;
   waitForClick; clearText; marker; sound(`T3C081`); appendText; 
   Sora`"And on and on just like that..."`;
   waitForClick; clearText; marker; sound(`T3C082`); appendText; 
   Sora`"What is the purpose of life?"`;
   waitForClick; clearText; marker; sound(`T3C083`); appendText; 
   Sora`"Why do flowers bloom?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was unable to reply at once.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Why, indeed, did flowers bloom?`;
   waitForClick; clearText; marker; sound(`T3C084`); appendText; 
   Sora`"Whatever the reason or purpose, I think life 
is a wonderful thing."`;
   waitForClick; clearText; marker; sound(`T3C085`); appendText; 
   Sora`"When I see a flower struggling to exist, 
growing from a crack in the concrete, I have 
a strange and wonderful feeling."`;
   waitForClick; clearText; marker; sound(`T3C086`); appendText; 
   Sora`"Flowers are always striving desperately to 
live."`;
   waitForClick; clearText; marker; sound(`T3C087`); appendText; 
   Sora`"Even in an environment such as this, in the 
depths of the ocean, without enough light or 
carbon dioxide..."`;
   waitForClick; clearText; marker; sound(`T3C088`); appendText; 
   Sora`"Even in such parched and cracked soil..."`;
   waitForClick; clearText; marker; sound(`T3C089`); appendText; 
   Sora`"They never even think of giving up, but just 
struggle courageously to live."`;
   waitForClick; clearText; marker; sound(`T3C090`); appendText; 
   Sora`"Doesn't it inspire you?"`;
   waitForClick; clearText; marker; sound(`T3C091`); appendText; 
   Sora`"...Or, maybe not."`;
   waitForClick; clearText; marker; sound(`T3C092`); appendText; 
   Sora`"Maybe it's no use contemplating the meaning 
or purpose of flowers..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora glanced up at the ceiling.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I followed suit also looking up.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE09_03L`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The shrill sound of a siren rang out loudly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tiny sensors hidden in openings of the ceiling 
panels were moving wildly. `;
   waitForClick; clearText; marker; appendText; 
   Narr`Once again, I heard the sound of flowing water 
coming from somewhere.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"No way. It can't be another flood!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_00`, a1: 0, volume: 100 });
bgload({ name: `EV_SO06B`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Fwwwaaaaaaaashhhh....`;
   waitForClick; clearText; marker; appendText; 
   Narr`Massive amounts of water rained down from the 
ceiling.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The drops poured down upon us mercilessly.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_00`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Soon after, we were suffused in a heavy mist...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora's appearance changed to that of a rainbow.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What in the world?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, Sora, what's going on?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tried to steady myself while asking.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_00`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`However, it seemed that a smile hovered about 
Sora's mouth.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sora?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked up again, checking the ceiling. `;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_00`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The drops of water were everywhere....`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't see much due to the fine mist.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But....`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_00`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Oh, its sprinklers, huh!?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora nodded without speaking.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Water..."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_00`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I sipped water from my cupped hands, both 
tasting and testing it in my mouth.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The water from the sprinklers was neither a 
liquid to extinguish fires nor seawater.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Ah...this is filtered water!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_00`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; sound(`T3C093`); appendText; 
   Sora`"Yes..."`;
   waitForClick; clearText; marker; sound(`T3C094`); appendText; 
   Sora`"This complex uses the purest possible water."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That means..."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_00`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Perhaps its...meant for watering these 
flowers?"`;
   waitForClick; clearText; marker; sound(`T3C095`); appendText; 
   Sora`Sora gave a small grin and laughed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She laughed but didn't answer...`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_00`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The ceiling was designed so the water sprayed 
down perfectly on the roses and other flowers 
below.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Not long after that...`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`T3C096`); appendText; 
   You`"Hey, what's going on over here?"`;
   waitForClick; clearText; marker; sound(`T3C097`); appendText; 
   Coco`"Sora! There's an alarm, an alarm!"`;
   waitForClick; clearText; marker; sound(`T3C098`); appendText; 
   Kid`"Sora, Takeshi...are you guys okay?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone came running over in a frenzy, 
splashing water with every step.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_00`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; sound(`T3C099`); appendText; 
   Kid`"Don't tell me there's another flood!?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"No, no, no."`;
   waitForClick; clearText; marker; sound(`T3C100`); appendText; 
   Coco`"So what is it?"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_00`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; sound(`T3C101`); appendText; 
   Coco`"I mean...everything is totally soaked."`;
   waitForClick; clearText; marker; sound(`T3C102`); appendText; 
   Coco`"Takepyon, you're drenched..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Don't worry about me."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_00`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The drops of water were still pouring down 
from the ceiling.`;
   waitForClick; clearText; marker; sound(`T3C103`); appendText; 
   You`"Oh man, we ran over here as soon as we saw 
the warning on the monitor!!"`;
   waitForClick; clearText; marker; sound(`T3C104`); appendText; 
   You`"We were expecting a fire or something..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That's what I keep telling everyone - there's 
nothing to worry about."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_00`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Uh, let me explain..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Wait, first, You, could you put that away?"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_00`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She held a fire extinguisher in both hands as 
if braced to use it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She had pulled the safety pin and held out 
the nozzle, ready to spray at any instant's 
notice.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a pretty clumsy looking attempt.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_00`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   You`"........."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO06C`, transition: 10 });
stopSFX()
showTextbox();
text(() => {
   marker; appendText; 
   Narr`After a while the water stopped.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora smiled and gazed at the flowerbed.`;
   waitForClick; clearText; marker; sound(`T3C105`); appendText; 
   You`"Uhhh..."`;
   waitForClick; clearText; marker; sound(`T3C106`); appendText; 
   You`"You don't suppose this was just a prank?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Uh, you know..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Now it was my turn to smile.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah, I guess it was something like that..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Over on that wall there's some kind of weird 
shaped and colored button..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I thought 'What the heck does this do?'"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I couldn't help giving it a little push..."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`When I said that, You tossed the fire 
extinguisher aside.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Then she turned to hide her face to try to 
contain her laughter.`;
   waitForClick; clearText; marker; sound(`T3C107`); appendText; 
   You`"Hee....heeeee...."`;
   waitForClick; clearText; marker; sound(`T3C108`); appendText; 
   You`"Taaaaakkeeeeeeeesssshiiii!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She balled up a fist and swung it in my 
direction.`;
   waitForClick; clearText; marker; sound(`T3C109`); appendText; 
   You`"Listen here! You're not a kid, you know!"`;
   waitForClick; clearText; marker; sound(`T3C110`); appendText; 
   You`"Just who broke the group rules the other 
day, huh?"`;
   waitForClick; clearText; marker; sound(`T3C111`); appendText; 
   You`"What ARE you thinking?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You was poised to launch into a sermon. `;
   waitForClick; clearText; marker; appendText; 
   Narr`She rambled on, but the words didn't reach my 
ears. I was gazing in wonder at the flowers.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The previously wilted and drooping flowers 
had, in such a short time, become full of 
life and seemed to be dancing about. `;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 01 });
stopBGM();
delay({ interval: 150 });
varop(`(28 0a a4) b3 := (00) 0`);
jump(`T_4A`);
