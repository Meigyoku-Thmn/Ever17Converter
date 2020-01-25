l_b0 = 5;
l_dayA = 3;
l_dayB = 3;
setDialogBoxColor(GREEN);
playBGM({ num: 1, volume: 100 });
bgload({ name: `BG07B1`, transition: 20 });
setSceneTitle({ index: 19 });
clock(`20:37`);
showTextbox();
text(() => {
   `We met at the chicken sandwich stand and ate as scheduled.`;
   `In the end, I didn't fix anything for dinner...`;

});
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T3C000)`"Hey, Takeshi."`;
   Takeshi`"Whaaaat?"`;
   Kid(T3C001)`"Can't you fix anything besides chicken sandwiches?"`;
   Takeshi`"Hmm, well there's not much I can do 'bout that..."`;
   Takeshi`"There wasn't much at this kiosk except chicken sandwiches to start with."`;
   Takeshi`"I cooked all the hot dogs this morning so they're finished. The owner probably just kept them for a little variation." `;

});
fgload({ id: 1, name: `KA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T3C002)`"Oh really..."`;
   `The Kid held the sandwich wrapping in his right hand and twisted it around his fingertip. `;
   `The half-eaten sandwich remained in his left hand, not getting any smaller.`;
   `It didn't seem like he couldn't finish it.... `;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU15ADM`, name2: `KA13ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T3C003)`"What's the deal? Eat up before it gets cold."`;
   `You was done eating, and she peered at the Kid's face.`;
   Kid(T3C004)`"Yeah..." `;

});
fgload({ id: 1, name: `YU17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T3C005)`"You must have walked all over looking something else to eat. But it was no use after all, huh?"`;
   You(T3C006)`"The food washed into the corridors during the flooding is almost all spoiled anyway..."`;

});
fgload({ id: 1, name: `YU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T3C007)`"But that's okay because we've more stuff to make chicken sandwiches than you could imagine."`;

});
fgload({ id: 2, name: `KA11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid(T3C008)`"I guess that's true..."`;
   `The kid tore off a piece of the sandwich and shoved it in his mouth.`;
   You(T3C009)`"To survive, it's crucial that you have something you can eat."`;
   Takeshi`"Hey, it looks like he got the picture."`;
   Takeshi`"Yeah, looks like we've got a real survivor on our hands."`;

});
fgload({ id: 1, name: `YU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T3C010)`"Yep, that's right."`;
   `You answered shortly.`;

});
fgload({ id: 2, name: `KA06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Huh?"`;
   You(T3C011)`"Yeah, just a little hobby of mine. Sometimes I go into the mountains alone."`;
   You(T3C012)`"I carve my own path...sometimes I even get a bit lost..."`;

});
fgload({ id: 2, name: `KA13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Into the mountains alone?"`;
   Takeshi`"What? Are you training some ancient fighting art on the sly!"`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU04ADM`, name2: `KA01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T3C013)`"Geez, Takeshi. Why do you have to get like that?"`;
   Takeshi`"Yeah, out fighting the black bears under the winter moon!"`;

});
fgload({ id: 1, name: `YU05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T3C014)`"Nope. I hunt out hot springs that nobody knows about."`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU16ADM`, name2: `KA11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T3C015)`"Yeah, deep in the mountains, someplace no one else has ever been. Oh, now THAT is this girl's idea of romantic!"`;
   `You wriggled as if intoxicated by the image.`;
   Takeshi`"Oh now I get it. You were soaking in the hot springs with a bear." `;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `YU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T3C016)`"No, no, no. Would you shut up about bears already!"`;
   Takeshi`"Heh, heh..."`;
   Takeshi`"So, despite appearances, you're really wild at heart."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU16ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T3C017)`"Oh, what might you be suggesting? Oh, heh, heh. "`;
   `You drew herself up in an exaggerated fashion.`;
   Takeshi`"Oh yeah, you talked about stitching up your own finger. I suppose that was also while you were out searching for hot springs?"`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T3C018)`"Huh? Oh...yeah...I suppose."`;
   You(T3C019)`"But it was just a surface scratch and I only needed a few stitches."`;
   Takeshi`"Hmph."`;
   Takeshi`"Just like I thought ? bear wrestling."`;

});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T3C020)`"Just give it up!" `;
   `You turned red-faced as she exploded.`;
   Takeshi`"Wee, hee, hee..."`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T3C021)`"Aaagghhh...I can't take this anymore."`;
   You`"......"`;

});
fgload({ id: 1, name: `YU11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `You let out a sigh and turned away from me.`;
   `I supposed she was fed up.`;
   `(Maybe I got a little carried away...?)`;

});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `But You's face clouded over a bit. `;
   `(Teasing her could have gotten her THAT down...)`;
   `Just as I was thinking that, You avoided my eyes and muttered - `;

});
showTextbox();
text(() => {
   You(T3C022)`"Hey, Takeshi...?"`;
   You(T3C023)`"Umm, about Tsugumi..."`;
   `It seemed like she wanted to say something but she didn't know what to say.`;
   Takeshi`"What's up? What is it?"`;
   You(T3C024)`"Um, what I mean is, uh..."`;

});
hideTextbox();
stopBGM();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE01_00`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `Just then we heard the sounds of people running through the water toward us. `;

});
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Splish, splash, splish, splash.`;

});
hideTextbox();
playBGM({ num: 18, volume: 100 });
fgload({ id: 1, name: `CO02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T3C025)`"Hey, what's up?" `;
   Pipi(PIPI_04)`"Bow wow!"`;
   Takeshi`"Hey Coco, you about ready to eat?"`;
   Coco(T3C026)`"Yeah, all that running around's made me starved!"`;
   Pipi(PIPI_00)`"Warf!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `That's right, I remembered she was the only one who hadn't eaten yet.`;
   `I handed Coco the last chicken sandwich I had kept in the food warmer.`;

});
multifgload2({ id1: 1, id2: 2, name1: `CO01ADM`, name2: `KA13ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T3C027)`"Alright, time to eat!"`;

});
fgload({ id: 1, name: `CO06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Coco(T3C028)`"Yay! Chow time!"`;
   Coco`"........."`;

});
fgload({ id: 1, name: `CO02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Coco(T3C029)`"Oh, this is yummy!"`;
   Coco(T3C030)`"Mmm. This blend of soy sauce, mayonnaise and fried chicken is perfect. Yum. Supreme...."`;

});
fgload({ id: 1, name: `CO16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Coco(T3C031)`"Yeah, Kiddo. This is divine, isn't it?"`;
   `Coco shot the question to the Kid, who was standing in front of the store.`;

});
fgload({ id: 2, name: `KA03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid(T3C032)`"Uh, yeah. Sure."`;
   Kid(T3C033)`"But I'm getting a little tired of it."`;
   `A last bit of unfinished sandwich remained in his left hand.`;

});
fgload({ id: 1, name: `CO15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Coco(T3C034)`"Really?"`;
   Coco(T3C035)`"Put some of this on, it'll be even better."`;

});
multifgload2({ id1: 1, id2: 2, name1: `CO16ADM`, name2: `KA14ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Kid(T3C036)`"Huh? What is that?"`;

});
fgload({ id: 2, name: `KA13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T3C037)`"Here it comes, ooey-gooey."`;
   `Coco pulled out a tube she had hidden behind her back, held it over the Kid's sandwich and squeezed.`;
   Takeshi`"What the heck is that?"`;

});
fgload({ id: 1, name: `CO02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Coco(T3C038)`"Sour cream!"`;
   Coco(T3C039)`"It's supposed to be for salads. It was the last one at the gift shop."`;
   Takeshi`"Hmmmmm..."`;
   `The tube said: "Add some spice to your life" and "Crab-flavored cream sauce: mild."`;
   Takeshi`"That could really broaden your culinary horizons."`;

});
fgload({ id: 1, name: `CO01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Coco(T3C040)`"Yep. Munch. Gobble..."`;
   `She doused her sandwich with the sour cream, opened her mouth wide and shoved it in. `;

});
fgload({ id: 1, name: `CO02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Coco(T3C041)`"Delicious!"`;
   Coco(T3C042)`"It doesn't get any better than this!"`;

});
fgload({ id: 2, name: `KA07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid`"........."`;
   `The kid looked at her doubtfully before taking a bite.`;

});
fgload({ id: 2, name: `KA06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid(T3C043)`"Hmmm...not bad."`;

});
fgload({ id: 2, name: `KA12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid(T3C044)`"This might be what it needed."`;

});
fgload({ id: 1, name: `CO16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Coco(T3C045)`"I told you! Yummy, yummy!"`;
   Pipi(PIPI_00)`"Woof!"`;
   `With that, both Coco and the Kid covered their sandwiches with cream before polishing them off.`;

});
multifgload2({ id1: 1, id2: 2, name1: `CO01ADM`, name2: `KA01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T3C046)`"Hey Takepyon."`;
   `Coco called to Takeshi while crumpling up her sandwich wrapping.`;
   Takeshi`"Huh?"`;
   Coco(T3C047)`"What're we gonna do with Tsugumi's sandwich?"`;
   Coco(T3C048)`"How's about I hold onto it for her?"`;
   Takeshi`"Uh, well...."`;
   `I had made it for her and I had stuck it in the warmer to keep for her. `;
   `But then again...`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `YU11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(T3C049)`"Sorry Coco."`;

});
fgload({ id: 1, name: `CO15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T3C050)`"Tsugumi's still asleep. She won't wake up for awhile, so..."`;
   `You gave Coco a pat on the head.`;

});
fgload({ id: 1, name: `CO17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Coco(T3C051)`"Is that right?"`;
   You(T3C052)`"Yep, I'll bet she's pretty tired. Let's let her sleep a bit longer."`;
   Coco(T3C053)`"Sigh..."`;

});
multifgload2({ id1: 1, id2: 2, name1: `CO01ADM`, name2: `YU01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T3C054)`"Okay then. So she can eat it later, after she wakes up."`;
   Takeshi`"Huh?"`;

});
fgload({ id: 1, name: `CO02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Coco(T3C055)`"Let's save it for her. No snacking on it on either!"`;
   `Coco pointed to the sandwich nestled deep in the food warmer.`;
   `...So she'd noticed it.`;
   Takeshi`"Alright. Roger that."`;

});
fgload({ id: 1, name: `CO01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Coco(T3C056)`"Great!"`;

});
multifgload2({ id1: 1, id2: 2, name1: `CO16ADM`, name2: `YU11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T3C057)`"Okay, time for some after meal exercise"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Pipi(PIPI_04)`"Bow wow! Woof!"`;

});
fgload({ id: 1, name: `KA06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Kid(T3C058)`"Hey, hold on. I wanna go too."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Splish, splash, splish...`;
   `Coco, the Kid and Pipi ran toward the rest area together.`;
   `You and I watched them from behind. `;

});
hideTextbox();
stopBGM();
removeFG({ id: 1, useAnim: true });
playBGM({ num: 3, volume: 100 });
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Oh, by the way, You..."`;
   Takeshi`"Is Tsugumi resting up?"`;
   You(T3C059)`"Yeah, actually, I just stopped by the infirmary to check on her."`;
   Takeshi`"How was she?"`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T3C060)`"I'm not a medical expert or anything, so I can't say anything specific."`;
   You(T3C061)`"But she seems to be recuperating. Satisfactory progress, I think"`;

});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T3C062)`"Maybe too satisfactory..."`;
   Takeshi`"What do you mean by, 'too satisfactory?'"`;

});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T3C063)`"I really don't know how to put it..."`;
   You`"..."`;
   `You suddenly stopped talking and let her head fall forward.`;
   Takeshi`"Well, if her condition is stable, that's good isn't it? The operation went well, right?"`;
   You(T3C064)`"....Yeeeaaah..."`;
   Takeshi`"What's up with you? Lose your confidence somewhere or something?"`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T3C065)`"No, it's not that..."`;
   You`"..."`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T3C066)`"Hmmm...yeah, yeah. That's it!"`;
   Takeshi`"??"`;
   `You lifted her head as if she had just realized something.`;

});
fgload({ id: 1, name: `YU15ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T3C067)`"Perhaps I've lost some of my confidence, but I know Tsugumi is recovering."`;

});
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T3C068)`"Life force is an amazing thing, huh?"`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T3C069)`"You know, humans don't die so easily."`;
   `You smiled when she said that.`;

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
   `After dinner, when we finished cleaning up, we made our way to the rest area.. `;
   `Four stone statues were lined up in one corner of the area.`;

});
bgload({ name: `IT05A`, transition: 20 });
showTextbox();
text(() => {
   `One of them extended a hand, pointing toward the south.`;

});
bgload_keepFg({ name: `IT05E`, transition: 20 });
showTextbox();
text(() => {
   `Another reached toward the east.`;

});
bgload({ name: `IT05C`, transition: 20 });
showTextbox();
text(() => {
   `Yet another looked to the heavens while reaching a hand upward.`;

});
bgload({ name: `IT05G`, transition: 20 });
showTextbox();
text(() => {
   `The remaining figure...had both hands pressed to its chest and eyes closed. `;

});
bgload({ name: `BG21B1`, transition: 20 });
showTextbox();
text(() => {
   `I wondered if there were some kind of meaning to all of it.`;
   `I asked You, but she just shook her head unknowingly. `;
   `It looked like Coco, the Kid and Pipi were running amongst the figures as they played.`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T3C070)`"By the way, I wonder where Sora went..."`;
   Takeshi`"Hey, you're right. Now that you mention it, Sora was here until just before we ate."`;
   You(T3C071)`"Maybe she's still in the Control Room?"`;
   You(T3C072)`"It only happens once in a while, but sometimes she'll dive into LeMMIH's main console and not come out for quite a while."`;
   Takeshi`"Really?"`;
   You(T3C073)`"Seems like she can get pretty caught up in her work..."`;
   `I wondered if that was that all it was.`;
   You(T3C074)`"Well, I'll go check it out."`;
   Takeshi`"Alright, you do that."`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `With that, she ran out a nearby exit and down the corridor.`;
   `As for me, after a quick stretch I let my eyes follow Coco and the others.`;
   `The same two people and one critter were circling about the stone statues.`;
   `It seemed they were playing a game of chase, not really caring who was "it."`;
   `Without seeming to get bored, they kept running around and around in the same place.`;
   `On the other hand, I got restless watching them. `;
   `(Phew, what a sight...)`;
   `It looked kind of fun, but I didn't quite feel like asking to join in.`;
   `I let my eyes roam around.`;

});
fgload({ id: 1, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Whoa!"`;
   Takeshi`"Sora, so that's where you were?"`;
   `After her unexplained disappearance, Sora was now standing next to a nearby flowerbed.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3C075)`"Yes, I have been here for a little while."`;
   Sora(T3C076)`"I've been looking at the flowers."`;
   `I looked around at the flowers.`;
   `In the flowerbed, short roses, marigolds and marguerites were all planted together.`;
   Takeshi`"Yeah, but they sure don't seem to be doing very well."`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3C077)`"I see what you mean."`;
   `Nobody had watered them for the past several days.`;
   `The soil was dry, its surface cracked.`;
   `The flowers had wilted and the plants were beginning to dry up.`;

});
removeFG({ id: 1, useAnim: true });
bgload({ name: `EV_SO06A`, transition: 20 });
showTextbox();
text(() => {
   Sora(T3C078)`"Life is sure a strange phenomenon."`;
   `Sora muttered to herself as she gazed at the flowers. `;
   Sora(T3C079)`"A bud sprouts from a seed. A flower blossoms, reproduces, a seed matures and returns to the earth."`;
   Sora(T3C080)`"From that seed comes another bud, another flower, which blossoms and reproduces, a new seed which in turn returns to the earth."`;
   Sora(T3C081)`"And on and on just like that..."`;
   Sora(T3C082)`"What is the purpose of life?"`;
   Sora(T3C083)`"Why do flowers bloom?"`;
   Takeshi`"..."`;
   `I was unable to reply at once.`;
   `Why, indeed, did flowers bloom?`;
   Sora(T3C084)`"Whatever the reason or purpose, I think life is a wonderful thing."`;
   Sora(T3C085)`"When I see a flower struggling to exist, growing from a crack in the concrete, I have a strange and wonderful feeling."`;
   Sora(T3C086)`"Flowers are always striving desperately to live."`;
   Sora(T3C087)`"Even in an environment such as this, in the depths of the ocean, without enough light or carbon dioxide..."`;
   Sora(T3C088)`"Even in such parched and cracked soil..."`;
   Sora(T3C089)`"They never even think of giving up, but just struggle courageously to live."`;
   Sora(T3C090)`"Doesn't it inspire you?"`;
   Sora(T3C091)`"...Or, maybe not."`;
   Sora(T3C092)`"Maybe it's no use contemplating the meaning or purpose of flowers..."`;
   `Sora glanced up at the ceiling.`;
   `I followed suit also looking up.`;

});
playSFX({ name: `SE09_03L`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   Takeshi`"Huh?"`;
   `The shrill sound of a siren rang out loudly.`;
   `Tiny sensors hidden in openings of the ceiling panels were moving wildly. `;
   `Once again, I heard the sound of flowing water coming from somewhere.`;
   Takeshi`"No way. It can't be another flood!"`;

});
playSFX({ name: `SE02_00`, a1: 0, volume: 100 });
bgload({ name: `EV_SO06B`, transition: 20 });
showTextbox();
text(() => {
   `Fwwwaaaaaaaashhhh....`;
   `Massive amounts of water rained down from the ceiling.`;
   `The drops poured down upon us mercilessly.`;

});
playSFX({ name: `SE02_00`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `Soon after, we were suffused in a heavy mist...`;
   `Sora's appearance changed to that of a rainbow.`;
   Takeshi`"What in the world?"`;
   Takeshi`"Hey, Sora, what's going on?"`;
   `I tried to steady myself while asking.`;

});
playSFX({ name: `SE02_00`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `However, it seemed that a smile hovered about Sora's mouth.`;
   Takeshi`"Sora?"`;
   `I looked up again, checking the ceiling. `;

});
playSFX({ name: `SE02_00`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `The drops of water were everywhere....`;
   `I couldn't see much due to the fine mist.`;
   `But....`;

});
playSFX({ name: `SE02_00`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   Takeshi`"Oh, its sprinklers, huh!?"`;
   `Sora nodded without speaking.`;
   Takeshi`"Water..."`;

});
playSFX({ name: `SE02_00`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `I sipped water from my cupped hands, both tasting and testing it in my mouth.`;
   `The water from the sprinklers was neither a liquid to extinguish fires nor seawater.`;
   Takeshi`"Ah...this is filtered water!"`;

});
playSFX({ name: `SE02_00`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   Sora(T3C093)`"Yes..."`;
   Sora(T3C094)`"This complex uses the purest possible water."`;
   Takeshi`"That means..."`;

});
playSFX({ name: `SE02_00`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   Takeshi`"Perhaps its...meant for watering these flowers?"`;
   Sora(T3C095)`Sora gave a small grin and laughed.`;
   `She laughed but didn't answer...`;

});
playSFX({ name: `SE02_00`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `The ceiling was designed so the water sprayed down perfectly on the roses and other flowers below.`;
   `Not long after that...`;

});
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   You(T3C096)`"Hey, what's going on over here?"`;
   Coco(T3C097)`"Sora! There's an alarm, an alarm!"`;
   Kid(T3C098)`"Sora, Takeshi...are you guys okay?"`;
   `Everyone came running over in a frenzy, splashing water with every step.`;

});
playSFX({ name: `SE02_00`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   Kid(T3C099)`"Don't tell me there's another flood!?"`;
   Takeshi`"No, no, no."`;
   Coco(T3C100)`"So what is it?"`;

});
playSFX({ name: `SE02_00`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   Coco(T3C101)`"I mean...everything is totally soaked."`;
   Coco(T3C102)`"Takepyon, you're drenched..."`;
   Takeshi`"Don't worry about me."`;

});
playSFX({ name: `SE02_00`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `The drops of water were still pouring down from the ceiling.`;
   You(T3C103)`"Oh man, we ran over here as soon as we saw the warning on the monitor!!"`;
   You(T3C104)`"We were expecting a fire or something..."`;
   Takeshi`"That's what I keep telling everyone - there's nothing to worry about."`;

});
playSFX({ name: `SE02_00`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   Takeshi`"Uh, let me explain..."`;
   Takeshi`"Wait, first, You, could you put that away?"`;

});
playSFX({ name: `SE02_00`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `She held a fire extinguisher in both hands as if braced to use it.`;
   `She had pulled the safety pin and held out the nozzle, ready to spray at any instant's notice.`;
   `It was a pretty clumsy looking attempt.`;

});
playSFX({ name: `SE02_00`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   Takeshi`"........."`;
   You`"........."`;

});
bgload({ name: `EV_SO06C`, transition: 10 });
stopSFX()
showTextbox();
text(() => {
   `After a while the water stopped.`;
   `Sora smiled and gazed at the flowerbed.`;
   You(T3C105)`"Uhhh..."`;
   You(T3C106)`"You don't suppose this was just a prank?"`;
   Takeshi`"Uh, you know..."`;
   `Now it was my turn to smile.`;
   Takeshi`"Yeah, I guess it was something like that..."`;
   Takeshi`"Over on that wall there's some kind of weird shaped and colored button..."`;
   Takeshi`"I thought 'What the heck does this do?'"`;
   Takeshi`"I couldn't help giving it a little push..."`;

});
playSFX({ name: `SE02_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `When I said that, You tossed the fire extinguisher aside.`;
   `Then she turned to hide her face to try to contain her laughter.`;
   You(T3C107)`"Hee....heeeee...."`;
   You(T3C108)`"Taaaaakkeeeeeeeesssshiiii!"`;
   `She balled up a fist and swung it in my direction.`;
   You(T3C109)`"Listen here! You're not a kid, you know!"`;
   You(T3C110)`"Just who broke the group rules the other day, huh?"`;
   You(T3C111)`"What ARE you thinking?"`;

});
showTextbox();
text(() => {
   `You was poised to launch into a sermon. `;
   `She rambled on, but the words didn't reach my ears. I was gazing in wonder at the flowers.`;
   `The previously wilted and drooping flowers had, in such a short time, become full of life and seemed to be dancing about. `;

});
removeBG({ mode: BLACK, transition: 1 });
stopBGM();
delay({ interval: 150 });
l_choice = 0;
jump(`T_4A`);
