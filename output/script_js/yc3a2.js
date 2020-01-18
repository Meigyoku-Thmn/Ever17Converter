hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
stopBGM();
removeFG({ id: 1, useAnim: false });
bgload({ name: `BG17A1`, transition: 26 });
playBGM({ num: 2, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
clock(`7:58`);
showTextbox();
text(() => {
   marker; appendText; 
   `The Conference Room.`;
   waitForClick; clearText; marker; appendText; 
   `I was sitting in a chair, stuffing my mouth 
with a 'chicken-wich-sand.'`;
   waitForClick; clearText; marker; appendText; 
   `I'd grown bored of the chicken sandwiches, so 
I invented my own version - a slice of bread 
between two pieces of meat.`;
   waitForClick; clearText; marker; appendText; 
   `It was definitely a needed change of pace.`;
   waitForClick; clearText; marker; appendText; 
   `Sara was sitting directly in front of me.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SA16A`, transition: 26 });
showTextbox();
text(() => {
   marker; appendText; 
   `Sara was eating straight from a head of 
lettuce, with nothing but ketchup as a topping.`;
   waitForClick; clearText; marker; appendText; 
   `Muttering in voice so small I could barely 
hear, she was saying "I'm not getting enough 
vegetables. I'm just not getting enough 
vegetables."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Say, where'd everybody else run off to?"`;
   waitForClick; clearText; marker; appendText; 
   `With ketchup smeared around her lips, Sara 
answered me.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SA16B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`C3A171`); appendText; 
   Sara`"Sora's in the Control Room. Nakkyu's in the 
Security Office."`;
   waitForClick; clearText; marker; sound(`C3A172`); appendText; 
   Sara`"As for Takeshi, I saw him riding the 
merry-go-round, goofing off by himself."`;
   waitForClick; clearText; marker; sound(`C3A173`); appendText; 
   Sara`"And as for Tsugumi, MIA, as usual."`;
   waitForClick; clearText; marker; sound(`C3A174`); appendText; 
   Sara`"Now that the repairs on the warehouse are 
finished, I guess everybody's taking a 
breather."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hmm..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So what do you have planned next, Sara?"`;
   waitForClick; clearText; marker; sound(`C3A175`); appendText; 
   Sara`"Nothing special really."`;
   waitForClick; clearText; marker; sound(`C3A176`); appendText; 
   Sara`"Maybe I'll just sit here and wait to be 
rescued while I eat this lettuce."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SA16A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `Sara kept munching the lettuce, making a 
crunching sound as she bit into the core.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"By the way, Sara, what where you doing up 
till now?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`C3A177`); appendText; 
   Sara`"Watching over you, Kid."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Watching over me?"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SA16B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`C3A178`); appendText; 
   Sara`"Last night, after we carried you to the 
infirmary, we all took turns watching you."`;
   waitForClick; clearText; marker; sound(`C3A179`); appendText; 
   Sara`"We were worried you might suddenly go on a 
rampage or something...so we took every 
precaution."`;
   waitForClick; clearText; marker; sound(`C3A180`); appendText; 
   Sara`"And until a minute ago, it was my turn to 
watch."`;
   waitForClick; clearText; marker; sound(`C3A181`); appendText; 
   Sara`"Except in the split second I turned my back 
and you up and disappeared... "`;
   waitForClick; clearText; marker; sound(`C3A182`); appendText; 
   Sara`"I wondered what was going on, and left the 
infirmary to find you when..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"When you found me crying?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`C3A183`); appendText; 
   Sara`"That's right."`;
   waitForClick; clearText; 
});
bgload({ name: `BG17A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `Finishing off my sandwich, I reached over to 
the lettuce in Sara's hands and ripped off a 
leaf.`;
   waitForClick; clearText; marker; appendText; 
   `Using my index finger, I wiped off some excess 
ketchup smeared around Sara's mouth, dabbed it 
on my lettuce and ate it.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What should I do next?"`;
   waitForClick; clearText; marker; appendText; 
   `I muttered to myself.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Just sitting here's getting boring."`;
   waitForClick; clearText; 
});
choice(
   `Go see You in the Security Office`,
   `Go to the warehouse with Sara`,
);
switch (l_choice) {
   case 0: goto(lbl_000000fa);
   case 1: goto(lbl_000006a2);
}
let lbl_000000fa;
showTextbox();
text(() => {
   marker; appendText; 
   `(Might as well go to the Security Office.)`;
   waitForClick; clearText; marker; appendText; 
   `I wasn't exactly sure why, but I somehow felt 
visiting You would be the safest bet.`;
   waitForClick; clearText; marker; appendText; 
   `Sora was probably too hard at work in the 
Control Room to be bothered. Tsugumi's 
whereabouts were unknown. Takashi was off 
riding a dolphin.`;
   waitForClick; clearText; marker; appendText; 
   `But what about Sara...?`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A184`); appendText; 
   Sara`"Hey you? What are you looking at?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Can I hang out with you for awhile?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A185`); appendText; 
   Sara`"Yeah, sure. No problem."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A186`); appendText; 
   Sara`"Might be good to show your face around. 
Everyone's been worried about you."`;
   waitForClick; clearText; marker; appendText; 
   `Sara said this, her face covered with ketchup.`;
   waitForClick; clearText; marker; appendText; 
   `'Why was she using ketchup and not salad 
dressing?'`;
   waitForClick; clearText; marker; appendText; 
   `The question nagged at me but I didn't venture 
to ask.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `I wiped the ketchup off her cheeks with my 
fingertips, and we left for the Conference 
Room together.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
bgload({ name: `BG29A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`8:16`);
showTextbox();
text(() => {
   marker; appendText; 
   `As we climbed the stairs, I licked some 
ketchup from my fingers.`;
   waitForClick; clearText; marker; appendText; 
   `It tasted of tomatoes. I supposed it only made 
sense...`;
   waitForClick; clearText; marker; appendText; 
   `——It made sense???`;
   waitForClick; clearText; marker; appendText; 
   `Since arriving at LeMU, I hadn't eaten a 
tomato. `;
   waitForClick; clearText; marker; appendText; 
   `I wasn't sure I had ever tasted a tomato 
before coming to LeMU.`;
   waitForClick; clearText; marker; appendText; 
   `Basically, I totally lacked all memory of 
'eating tomatoes'.`;
   waitForClick; clearText; marker; appendText; 
   `But still I had knowledge of 'what a tomato is 
supposed to taste like,' and that 'ketchup has 
the flavor of tomatoes.'`;
   waitForClick; clearText; marker; appendText; 
   `According to Sora, evidently I have only lost 
the memory of my personal past.`;
   waitForClick; clearText; marker; appendText; 
   `Amnesia.`;
   waitForClick; clearText; marker; appendText; 
   `Apparently, even if I didn't possess a memory 
of eating tomatoes, I still possessed 
knowledge of the connection between tomatoes 
and ketchup. `;
   waitForClick; clearText; marker; appendText; 
   `What was more, it wasn't just tomatoes.`;
   waitForClick; clearText; marker; appendText; 
   `In every moment of life that I encountered and 
that passed me by...`;
   waitForClick; clearText; marker; appendText; 
   `For every scene to reach my eyes, or words to 
reach my ears, I was able to distinguish 
correctly between the reasonable and the 
absurd.`;
   waitForClick; clearText; marker; appendText; 
   `For example, I knew that the sky was blue, the 
clouds were white and that leaves were green.`;
   waitForClick; clearText; marker; appendText; 
   `I knew all about man-made things as well, such 
as electrical appliances...`;
   waitForClick; clearText; marker; appendText; 
   `...cars, trains, bicycles, roads, bridges, 
skyscrapers, houses, furniture, toys, clothes, 
food, movies, art, music, books...I knew about 
all of them.`;
   waitForClick; clearText; marker; appendText; 
   `When people are happy they smile, when they 
are sad they cry. I possessed full knowledge 
about the range of human emotions.`;
   waitForClick; clearText; 
});
playBGM({ num: 16, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `Furthermore, I knew that I was alive and I 
knew what it took to die.`;
   waitForClick; clearText; marker; appendText; 
   `I would die without oxygen. I would die 
without food or water. And exposure to 
extreme heat or cold would kill me...`;
   waitForClick; clearText; marker; appendText; 
   `If I drank poison, it would kill me. If I 
jumped from a high place, it would kill me. If 
my heart stopped, my life would end...`;
   waitForClick; clearText; marker; appendText; 
   `If I lost a large quantity of blood, or if my 
brain stopped functioning, or even if I was 
lonely beyond despair...I would die.`;
   waitForClick; clearText; marker; appendText; 
   `I knew the boundaries between life and death.`;
   waitForClick; clearText; marker; appendText; 
   `Common sense and the absurd...`;
   waitForClick; clearText; marker; appendText; 
   `Somehow unconsciously, I could judge between 
what was 'true' and what was false.'`;
   waitForClick; clearText; marker; appendText; 
   `But how...?`;
   waitForClick; clearText; marker; appendText; 
   `I was probably able to objectively compare 
things with my various life experiences and 
episodes...`;
   waitForClick; clearText; marker; appendText; 
   `But if that was the case...`;
   waitForClick; clearText; marker; appendText; 
   `Then there was something that bothered me.`;
   waitForClick; clearText; marker; appendText; 
   `'Mirrors'...`;
   waitForClick; clearText; marker; appendText; 
   `I knew that when I looked in a mirror, the 
image projected was myself.`;
   waitForClick; clearText; marker; appendText; 
   `But despite that knowledge, I had fallen into 
a delirious state of confusion the night 
before.`;
   waitForClick; clearText; marker; appendText; 
   `Why...?`;
   waitForClick; clearText; marker; appendText; 
   `When I saw the image, my immediate reaction 
was, 'NO! This is wrong!'`;
   waitForClick; clearText; marker; appendText; 
   `In other words, my instant reaction was, 'this 
isn't what I should look like! It can't be 
right!!'`;
   waitForClick; clearText; marker; appendText; 
   `Or to put it more simply...`;
   waitForClick; clearText; marker; appendText; 
   `When I tasted the ketchup, I could tell it was 
made from tomatoes. It seemed like a natural 
conclusion.`;
   waitForClick; clearText; marker; appendText; 
   `It was because the flavor matched my image of 
'what tomatoes should taste like.'`;
   waitForClick; clearText; marker; appendText; 
   `The previous night's experience, however, was 
entirely different.`;
   waitForClick; clearText; marker; appendText; 
   `When I saw my own face in the mirror, I 
thought it was clearly a different person.`;
   waitForClick; clearText; marker; appendText; 
   `This was mainly because the face I saw did not 
match my image of what I thought that my face 
should look like.`;
   waitForClick; clearText; marker; appendText; 
   `Before I looked in the mirror, if there had 
been no image in my mind of what my face 
should have looked like, then surely I would 
not have fallen into such a state of shock.`;
   waitForClick; clearText; marker; appendText; 
   `Only when there is a basis for comparison is 
it possible to tell whether something is 
common sense.. Otherwise it is impossible to 
know.`;
   waitForClick; clearText; marker; appendText; 
   `The only choice left to me, would be to accept 
the face I saw.`;
   waitForClick; clearText; marker; appendText; 
   `Sara's words to me...`;
   waitForClick; clearText; 
});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   marker; sound(`C3A161`); appendText; 
   Sara`"I would think that you'd just be relieved to 
know, 'At least I have a normal face?'"`;
   waitForClick; clearText; 
});
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   `I supposed that might be true.`;
   waitForClick; clearText; marker; appendText; 
   `But that was all the more reason for me to be 
concerned.`;
   waitForClick; clearText; marker; appendText; 
   `Before looking into that mirror...I definitely 
had held a certain image of what my face 
should look like.`;
   waitForClick; clearText; marker; appendText; 
   `But my mental image and reality were different.`;
   waitForClick; clearText; marker; appendText; 
   `I began to wonder it was the image that was 
false, or a mistaken memory.`;
   waitForClick; clearText; marker; appendText; 
   `In that case, I wondered how a false memory 
could creep into my mind.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Ah...!"`;
   waitForClick; clearText; 
});
makeFGTransparent({ id: 1 });
fgload({ id: 1, name: `KA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A187`); appendText; 
   Kid`"Who...are...you?"`;
   waitForClick; clearText; marker; sound(`C3A188`); appendText; 
   Kid`"Who...am...I?"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 3, color: BLACK });
removeFG({ id: 1, useAnim: true });
makeFGNormal({ id: 1 });
showTextbox();
text(() => {
   marker; appendText; 
   `I closed my eyes tightly and shook my head.`;
   waitForClick; clearText; 
});
hideTextbox();
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   `When I opened my eyes, no one was there.`;
   waitForClick; clearText; marker; appendText; 
   `In a wild panic, I ran up the remaining stairs 
and burst onto Zweite stock.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `BG25A3`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   `'I know what my face should look like!' `;
   waitForClick; clearText; marker; appendText; 
   `But the apparition which had shown itself to 
me, looked entirely different...`;
   waitForClick; clearText; marker; appendText; 
   `For an instant, I could have sworn that I had 
witnessed my own self.`;
   waitForClick; clearText; marker; appendText; 
   `(But it can't be.)`;
   waitForClick; clearText; marker; appendText; 
   `(That person isn't me.)`;
   waitForClick; clearText; marker; appendText; 
   `(But if he isn't me...who the is he?)`;
   waitForClick; clearText; marker; appendText; 
   Kid`"*sigh*..."`;
   waitForClick; clearText; marker; appendText; 
   `My head pounded with pain.`;
   waitForClick; clearText; marker; appendText; 
   `My overall mental state seemed solid enough, 
but somehow one part seemed stuck.`;
   waitForClick; clearText; marker; appendText; 
   `Exactly what was jammed, and how, I didn't 
know.`;
   waitForClick; clearText; marker; appendText; 
   `But as soon as I tried to force through the 
memories, the pain in my head became 
blistering.`;
   waitForClick; clearText; marker; appendText; 
   `(Who is he??)`;
   waitForClick; clearText; marker; appendText; 
   `(Who am I??)`;
   waitForClick; clearText; marker; appendText; 
   `But, no matter how hard I thought about it, I 
didn't seem to make any progress.`;
   waitForClick; clearText; marker; appendText; 
   `So I...`;
   waitForClick; clearText; marker; appendText; 
   `...decided not to think about it anymore.`;
   waitForClick; clearText; marker; appendText; 
   `I turned the off the switch inside my brain 
and headed for the Security Office.`;
   waitForClick; clearText; marker; appendText; 
   `I wondered if I could let it go so quickly, 
because I'd learned such a hard lesson of what 
happened when I tried to hold on...?`;
   waitForClick; clearText; marker; appendText; 
   `Or was it just because I'd become indifferent 
to things by nature?`;
   waitForClick; clearText; marker; appendText; 
   `Whatever the reason, I was suddenly so calm 
and collected I surprised even myself.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
bgload({ name: `BG11A1`, transition: 26 });
playBGM({ num: 5, volume: 100 });
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
clock(`8:34`);
showTextbox();
text(() => {
   marker; appendText; 
   `I went into the Security Office.`;
   waitForClick; clearText; marker; appendText; 
   `You was sitting in her chair drinking coffee.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What are you doing here all by yourself?"`;
   waitForClick; clearText; marker; appendText; 
   `I asked as I sat down beside her.`;
   waitForClick; clearText; marker; sound(`S3A295`); appendText; 
   You`"I'm doing some research."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Research?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A299`); appendText; 
   You`"I told you before, right? About why I got 
this job at LeMU..."`;
   waitForClick; clearText; marker; sound(`S3A300`); appendText; 
   You`"I'm looking for clues about my father, who 
disappeared."`;
   waitForClick; clearText; marker; sound(`S3A301`); appendText; 
   You`"He went missing 17 years ago and I came 
hoping to find a hint as to why."`;
   waitForClick; clearText; marker; appendText; 
   `I thought maybe I'd heard her mention it 
before.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You said that the last place he was seen was 
in LeMU, right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh. Are you investigating that...?"`;
   waitForClick; clearText; marker; sound(`S3A302`); appendText; 
   You`"Yes..."`;
   waitForClick; clearText; marker; appendText; 
   `You nodded and shifted the cup to her other 
hand.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A303`); appendText; 
   You`"Information about my father."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`S3A304`); appendText; 
   You`"It was 17 years ago..."`;
   waitForClick; clearText; marker; sound(`S3A305`); appendText; 
   You`"They say there was a big accident here."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Accident?"`;
   waitForClick; clearText; marker; sound(`S3A306`); appendText; 
   You`"I don't really know that much about it."`;
   waitForClick; clearText; marker; sound(`S3A307`); appendText; 
   You`"Even looking at old news clippings, I wasn't 
able to gather much information."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What do you mean?"`;
   waitForClick; clearText; marker; sound(`S3A308`); appendText; 
   You`"The cause of the accident, specific damage, 
what happened afterward...all the coverage was 
vague..."`;
   waitForClick; clearText; marker; sound(`S3A309`); appendText; 
   You`"I figure that the media didn't really know 
the details about what happened either."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A310`); appendText; 
   You`"Somebody or something powerful clamped down 
on information."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hmmm. That's interesting..."`;
   waitForClick; clearText; marker; sound(`S3A311`); appendText; 
   You`"An accident 17 years ago shrouded in 
mystery."`;
   waitForClick; clearText; marker; sound(`S3A312`); appendText; 
   You`"And my father that disappeared 17 years 
ago."`;
   waitForClick; clearText; marker; sound(`S3A313`); appendText; 
   You`"He worked here until right before the 
accident."`;
   waitForClick; clearText; marker; sound(`S3A314`); appendText; 
   You`"I can guess about some of what happened from 
what we already know..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You think that the accident had something to 
do with the disappearance of your father...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A315`); appendText; 
   You`"That's right."`;
   waitForClick; clearText; marker; sound(`S3A316`); appendText; 
   You`"I thought that here...that in LeMMIH there 
would be some trace...that's why I came."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A317`); appendText; 
   You`"But since I started working I haven't had 
any time to look into it..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A318`); appendText; 
   You`"I couldn't even get close to LeMMIH's 
database."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A319`); appendText; 
   You`"I guess it makes sense. I was pretty naive."`;
   waitForClick; clearText; marker; appendText; 
   `The chair squeaked as You slumped back in it.`;
   waitForClick; clearText; marker; appendText; 
   `She just stared at the ceiling.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A320`); appendText; 
   You`"But...but...you know what? Opportunity 
knocked."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Opportunity..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You...you don't mean this accident?"`;
   waitForClick; clearText; marker; sound(`S3A321`); appendText; 
   You`"Yup."`;
   waitForClick; clearText; marker; sound(`S3A322`); appendText; 
   You`"Now I have access to LeMMIH."`;
   waitForClick; clearText; marker; sound(`S3A323`); appendText; 
   You`"Thanks to the accident, I have been able to 
get a step closer to my goal."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A324`); appendText; 
   You`"Well, I suppose it has also given me a chance 
to live on the edge...?"`;
   waitForClick; clearText; marker; appendText; 
   `You joked as she shrugged her shoulders.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So? Did you find anything out?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A333`); appendText; 
   You`"That...that's the problem."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU04A`, transition: 20 });
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `Tap, tap, tap...`;
   waitForClick; clearText; marker; appendText; 
   `Saying that, You started manipulating the 
keyboard.`;
   waitForClick; clearText; marker; appendText; 
   `One of the monitors on the wall shifted from 
footage of an observation camera to an image 
of a computer desktop.`;
   waitForClick; clearText; marker; appendText; 
   `In the upper left corner of the screen, two 
dolphin icons were displayed, showing that the 
OS had begun to operate.`;
   waitForClick; clearText; marker; appendText; 
   `It the middle of it one window was open.`;
   waitForClick; clearText; marker; appendText; 
   `Gazing at the new window, You began to explain 
further.`;
   waitForClick; clearText; marker; sound(`S3A334`); appendText; 
   You`"This is the authorization screen to connect 
to the network."`;
   waitForClick; clearText; marker; sound(`S3A335`); appendText; 
   You`"This is where the system assesses the user 
for proper authorization."`;
   waitForClick; clearText; marker; sound(`S3A336`); appendText; 
   You`"I'm attempting to connect to LeMMIH's C 
level...meaning I'm trying to access 
classified information."`;
   waitForClick; clearText; marker; sound(`S3A337`); appendText; 
   You`"But if anyone could easily access important 
data, it would be a security disaster, right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Okay."`;
   waitForClick; clearText; marker; sound(`S3A338`); appendText; 
   You`"That's why there is a screen where the 
computer asks 'Hey, who's trying to look at 
this?'"`;
   waitForClick; clearText; marker; appendText; 
   `As she spoke, You used the mouse to click on 
the box for "Name."`;
   waitForClick; clearText; marker; appendText; 
   `Inside the box were written the words, 'YUKIE 
TANAKA.'`;
   waitForClick; clearText; marker; sound(`S3A339`); appendText; 
   You`"Of course there is no way I could access the 
system using my name, so I'm using someone 
else's name to get me in."`;
   waitForClick; clearText; marker; sound(`S3A340`); appendText; 
   You`"But anyone might think to try that, right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I suppose so."`;
   waitForClick; clearText; marker; sound(`S3A341`); appendText; 
   You`"Obviously the people who programmed this 
aren't stupid. So to prevent false 
authorization they use methods to check 
identity."`;
   waitForClick; clearText; marker; sound(`S3A342`); appendText; 
   You`"The screen then says, 'If you really are 
YUKIE TANAKA, please show me your password.'"`;
   waitForClick; clearText; 
});
stopBGM();
playSFX({ name: `SE10_11`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `——Password???`;
   waitForClick; clearText; marker; appendText; 
   `When I heard that word, for some reason my 
chest began to tingle.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `Click, click, click...`;
   waitForClick; clearText; marker; appendText; 
   `Without saying anything more, You silently 
typed on the keyboard.`;
   waitForClick; clearText; marker; appendText; 
   `From her fingertips, a password was entered 
into the entry field.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `Tap, tap, tap...`;
   waitForClick; clearText; marker; appendText; 
   `"*`;
   delay(10); 
   `*`;
   delay(5); 
   `*`;
   delay(20); 
   `*`;
   delay(4); 
   `*`;
   delay(5); 
   `*`;
   delay(15); 
   `*`;
   delay(3); 
   `*"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `Tap!`;
   waitForClick; clearText; marker; appendText; 
   `With a quick snap of her wrist she hit the 
enter key.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `Beep!`;
   waitForClick; clearText; marker; appendText; 
   `"Access denied. Invalid name or password."`;
   waitForClick; clearText; marker; appendText; 
   `Without blinking an eye, You entered a 
different string of letters.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `Tap, tap, tap...`;
   waitForClick; clearText; marker; appendText; 
   `"*`;
   delay(15); 
   `*`;
   delay(5); 
   `*`;
   delay(20); 
   `*`;
   delay(15); 
   `*`;
   delay(5); 
   `*`;
   delay(3); 
   `*`;
   delay(10); 
   `*"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `Tap!`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `Beeeeeeeep!`;
   waitForClick; clearText; marker; appendText; 
   `"Access denied. Invalid name or password."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `Tap, tap, tap...`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey, You?"`;
   waitForClick; clearText; marker; appendText; 
   `I asked while watching her fingers dance 
across the keyboard.`;
   waitForClick; clearText; marker; sound(`S3A347`); appendText; 
   You`"Yes?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It may be a silly thing to ask, but..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"The thing that you are hung up on is the 
password, right?"`;
   waitForClick; clearText; marker; sound(`S3A409`); appendText; 
   You`"Right..."`;
   waitForClick; clearText; marker; appendText; 
   `And then to my surprise——suddenly words 
started flying out of my mouth!`;
   waitForClick; clearText; marker; appendText; 
   Kid`"The empty fall sky...A single cuckoo calls 
out...Brings a chill to me."`;
   waitForClick; clearText; marker; appendText; 
   `Even as I heard the words come out, I doubted 
my own ears.`;
   waitForClick; clearText; marker; appendText; 
   `Physically, there are certain spasmodic 
actions such as coughing, sneezing, or 
throwing-up that are simply beyond our 
ability to control.`;
   waitForClick; clearText; marker; appendText; 
   `As I uttered those words, that was exactly how 
I felt `;
   waitForClick; clearText; marker; appendText; 
   `Before I could even think, I was driven by the 
impulse to blurt the words out. `;
   waitForClick; clearText; marker; appendText; 
   You`".............................."`;
   waitForClick; clearText; marker; appendText; 
   `You's fingers stopped, her breathing stopped, 
she had completely frozen.`;
   waitForClick; clearText; marker; appendText; 
   `Even as I watched You in this condition from 
the corner of my eye, I continued 
spasmodically speaking.`;
   waitForClick; clearText; marker; appendText; 
   `I reached up and grabbed a piece of scrap 
paper lying on top of the console.`;
   waitForClick; clearText; 
});
bgload({ name: `IT03A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Look! It's written right here..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"The empty fall sky...A single cuckoo calls 
out...Brings a chill to me."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I bet this is the password you're looking 
for."`;
   waitForClick; clearText; marker; sound(`S3A470`); appendText; 
   You`"What! Let me see that!"`;
   waitForClick; clearText; 
});
bgload({ name: `BG11A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `You bounced up from the chair and tore the 
paper from my hand.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Lay the paper down and take a look at it from 
an angle."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You should be able to see it."`;
   waitForClick; clearText; marker; appendText; 
   `Although the words were bursting out of my 
mouth against my will...`;
   waitForClick; clearText; marker; appendText; 
   `You seemed not to be unaware of my state.... 
She simply did as I suggested and gazed at the 
paper from an angle.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A471`); appendText; 
   You`"You...you're right!"`;
   waitForClick; clearText; marker; sound(`S3A472`); appendText; 
   You`"Amazing—! Really amazing, Kid!"`;
   waitForClick; clearText; marker; appendText; 
   `You grabbed my hand and shook it happily.`;
   waitForClick; clearText; marker; appendText; 
   `...But she didn't stop there...She pulled me 
close in a big bear hug.`;
   waitForClick; clearText; marker; appendText; 
   `Squeeze—!!!`;
   waitForClick; clearText; marker; appendText; 
   `My face was pressed hard against her bust.`;
   waitForClick; clearText; marker; appendText; 
   `It was a nice fit...a little too nice...I 
struggled for air.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I...give up...give...mercy..."`;
   waitForClick; clearText; marker; appendText; 
   `I almost felt dangerously excited by the 
softness of her.`;
   waitForClick; clearText; marker; sound(`S3A473`); appendText; 
   You`"We did it We did it Yeah"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Finally, You let me go.`;
   waitForClick; clearText; marker; appendText; 
   `She jumped around gleefully like a rabbit.`;
   waitForClick; clearText; marker; appendText; 
   `(I was glad she was happy...even if she did 
almost crush me.)`;
   waitForClick; clearText; marker; appendText; 
   `Watching You all happy like that seemed to 
wash away all my irritation and fatigue.`;
   waitForClick; clearText; marker; appendText; 
   `The stress I was feeling simply faded away.`;
   waitForClick; clearText; 
});
bgload({ name: `IT03F`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`S3A474`); appendText; 
   You`"I get it now. You can't see it from right 
above it."`;
   waitForClick; clearText; marker; sound(`S3A475`); appendText; 
   You`"But if you look from the side...I see it now."`;
   waitForClick; clearText; marker; sound(`S3A481`); appendText; 
   You`"The empty fall sky...A single cuckoo calls 
out...Brings a chill to me."`;
   waitForClick; clearText; 
});
bgload({ name: `BG11A1`, transition: 20 });
fgload({ id: 1, name: `YU02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A482`); appendText; 
   You`"Alright! Let's try this for a password."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `A recharged You faced the screen triumphantly.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   marker; appendText; 
   `But...`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU04A`, transition: 20 });
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `Tap, tap, tap...`;
   waitForClick; clearText; marker; sound(`S3A483`); appendText; 
   You`"The empty fall sky...A single cuckoo calls 
out...Brings a chill to me. Okay then!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `Tap!`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `Beeeeeeeep!`;
   waitForClick; clearText; marker; appendText; 
   `"Access denied. Invalid name or password."`;
   waitForClick; clearText; marker; appendText; 
   `But she still couldn't get into the C Level 
information.`;
   waitForClick; clearText; marker; appendText; 
   `And then, suddenly—!`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `Beeeeeeeep!`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE03_02`, a1: 0, volume: 90 });
bgload({ name: `BG11A1`, transition: 20 });
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A494`); appendText; 
   You`"Wh-what in the...?"`;
   waitForClick; clearText; marker; appendText; 
   `The screen went black.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What happened...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A495`); appendText; 
   You`"I don't know but it looks like it 
automatically shut down the authorization 
screen..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `After a moment, the screen returned to normal.`;
   waitForClick; clearText; marker; appendText; 
   `You pecked away at the keyboard and called up 
the authorization screen again.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `Tap, tap, tap...`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `Tap!`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `Beeeeeeeep!`;
   waitForClick; clearText; marker; appendText; 
   `"Access denied. Currently this name cannot be 
logged in."`;
   waitForClick; clearText; marker; sound(`S3A496`); appendText; 
   You`"What? ! What is this?!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `She tried it again.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   `Beeeeeeeep!`;
   waitForClick; clearText; marker; appendText; 
   `The result was the same.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What does this mean?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A497`); appendText; 
   You`"Maybe I entered the wrong password too many 
times and it activated some kind of 
protection."`;
   waitForClick; clearText; marker; sound(`S3A498`); appendText; 
   You`"In other words, LeMMIH has completely denied 
access to my mom's name."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A499`); appendText; 
   You`"So we'll have to give up for the time being, 
I guess."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"..."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeFG({ id: 1, useAnim: false });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   `Even so...`;
   waitForClick; clearText; marker; appendText; 
   `How could I have possibly known her mother's 
password?`;
   waitForClick; clearText; marker; appendText; 
   `But at the time, possibly due to her intense 
excitement, this suspicion never crossed my 
mind.`;
   waitForClick; clearText; marker; appendText; 
   `The strange feeling of knowing what I 
shouldn't be able to know...`;
   waitForClick; clearText; marker; appendText; 
   `In the first place, I didn't even know what 
that haiku poem meant...`;
   waitForClick; clearText; marker; appendText; 
   `Five - seven - five. What kind of meaning was 
hidden in those seventeen syllables?`;
   waitForClick; clearText; marker; appendText; 
   `So many questions!`;
   waitForClick; clearText; 
});
goto(lbl_00000b29);
let lbl_000006a2;
l_went_with_sara_in_3rd_day = 1;
showTextbox();
text(() => {
   marker; appendText; 
   `(Well, I guess I'll take Sara to visit the 
warehouse.)`;
   waitForClick; clearText; marker; appendText; 
   `Had there really been an accident, which had 
flooded the warehouse? I wanted to see for 
myself.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A189`); appendText; 
   Sara`"Yeah?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Think you could join me for a bit...?"`;
   waitForClick; clearText; marker; sound(`C3A190`); appendText; 
   Sara`"Okay, but..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A191`); appendText; 
   Sara`"Do you mind waiting until I'm through with my 
lettuce?"`;
   waitForClick; clearText; marker; appendText; 
   `Sara spoke with her face still covered in 
ketchup.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sure."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `I decided to wait for Sara to finish her 
'meal.'`;
   waitForClick; clearText; marker; appendText; 
   `While waiting I asked her a question.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So tell me...why ketchup and not dressing?"`;
   waitForClick; clearText; marker; appendText; 
   `Her answer was straightforward.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A192`); appendText; 
   Sara`"Because I like tomatoes."`;
   waitForClick; clearText; marker; sound(`C3A193`); appendText; 
   Sara`"They taste like the sun, don't you think?"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeFG({ id: 1, useAnim: false });
bgload({ name: `BG13B1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
clock(`8:34`);
showTextbox();
text(() => {
   marker; appendText; 
   `Inside of the warehouse, the air was filled 
with a sticky humid smell.`;
   waitForClick; clearText; marker; appendText; 
   `And the floor was covered with enough water to 
just cover our shoes...`;
   waitForClick; clearText; marker; appendText; 
   `Around the room lay pipes, many of which look 
to have been recently welded to repair damage.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So there really was some kind of flooding 
here..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A194`); appendText; 
   Sara`"Huh? Didn't you believe me when I told 
you...?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Of course I believed you, but..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"There's a difference between hearing 
something and seeing it for yourself...I 
mean...there's way more impact."`;
   waitForClick; clearText; marker; sound(`C3A195`); appendText; 
   Sara`"Impact?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You know, the impact from realizing I saw 
this all in a dream."`;
   waitForClick; clearText; marker; sound(`C3A196`); appendText; 
   Sara`"Like a premonition..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Well, I don't know if I could really call it 
a premonition or not, but..."`;
   waitForClick; clearText; marker; sound(`C3A197`); appendText; 
   Sara`"?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I mean, Tsugumi didn't get hurt, right?"`;
   waitForClick; clearText; marker; sound(`C3A198`); appendText; 
   Sara`"Yeah."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"And besides..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `I said this and stopped, sweeping my eyes 
across the room.`;
   waitForClick; clearText; marker; appendText; 
   `The scene was almost exactly as I had dreamed 
it but...one thing was different.`;
   waitForClick; clearText; marker; appendText; 
   `There had been a pile of scrap material 
stacked high, but now it was stacked on the 
floor.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"In my dream, the warehouse was completely 
submerged in water."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But by the looks of it here, everything seems 
fine..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I wonder if you could still call that a 
premonition?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A199`); appendText; 
   Sara`"Beats me...I have no idea about things like 
that..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Was the warehouse arranged like this from the 
start?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A200`); appendText; 
   Sara`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"See those containers and metal pipes lined up 
over there?"`;
   waitForClick; clearText; marker; appendText; 
   `I asked her while pointing to the rows of 
scrap metal.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Were those stacked up in one tall pile 
before?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A201`); appendText; 
   Sara`"Uuumm.."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A202`); appendText; 
   Sara`"You can't expect me to remember all the 
details."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah...I guess you're right..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Besides that one point, nothing else seemed 
out of place.`;
   waitForClick; clearText; marker; appendText; 
   `Except, I was amazed how calm I felt analyzing 
the situation.`;
   waitForClick; clearText; marker; appendText; 
   `Premonitions, the phantom girl, the mirror 
affair, amnesia.... Considering the countless 
number of strange things I had experienced, I 
was surprisingly calm.`;
   waitForClick; clearText; marker; appendText; 
   `Not thinking such strange events as strange 
was in itself...strange...`;
   waitForClick; clearText; marker; appendText; 
   `Was I just desensitized to everything?`;
   waitForClick; clearText; marker; appendText; 
   `Or maybe I just had never been the type to 
think too deeply about things.`;
   waitForClick; clearText; marker; appendText; 
   `I didn't know why, but I felt fine about the 
situation.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   marker; appendText; 
   `I walked a loop through around the entire 
warehouse and returned to where I started.`;
   waitForClick; clearText; marker; appendText; 
   `Only to find...`;
   waitForClick; clearText; 
});
stopBGM();
playSFX({ name: `SE00_13`, a1: 0, volume: 89 });
bgload({ name: `BG13B1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `Sara was gone.`;
   waitForClick; clearText; marker; appendText; 
   `At that same moment I heard a sound—
'Bang! Bang! Bang!.'`;
   waitForClick; clearText; marker; appendText; 
   `Like something pounding powerfully against a 
steel wall.`;
   waitForClick; clearText; marker; appendText; 
   `I searched for the origin of the sound.`;
   waitForClick; clearText; marker; appendText; 
   `A small door suddenly jumped into my field of 
vision.`;
   waitForClick; clearText; marker; appendText; 
   `In front of the door stood Sara.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara!"`;
   waitForClick; clearText; marker; appendText; 
   `I let out a yell and ran to her.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
showTextbox();
text(() => {
   marker; appendText; 
   `..................`;
   waitForClick; clearText; marker; appendText; 
   `............`;
   waitForClick; clearText; marker; appendText; 
   `......`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_13`, a1: 0, volume: 100 });
hideTextbox();
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"What happened?"`;
   waitForClick; clearText; marker; appendText; 
   `I asked, standing at Sara's side.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A203`); appendText; 
   Sara`"Nothing. What do you mean?"`;
   waitForClick; clearText; marker; appendText; 
   `Sara acted like there was nothing out of the 
ordinary.`;
   waitForClick; clearText; marker; appendText; 
   `In fact, she seemed so normal that normal 
didn't begin to describe it well enough. `;
   waitForClick; clearText; marker; appendText; 
   `The bashing sound continued unabated. It was 
coming from beyond the door.`;
   waitForClick; clearText; marker; appendText; 
   `Someone was...`;
   waitForClick; clearText; marker; appendText; 
   `It sounded like someone was throwing their 
body against the door.`;
   waitForClick; clearText; marker; appendText; 
   `And they weren't holding back.`;
   waitForClick; clearText; marker; appendText; 
   `It was an explosive force, almost animal in 
intensity...`;
   waitForClick; clearText; marker; appendText; 
   `The sound reverberated to the core of my body, 
rattling my brain.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Who...is it...?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey! Who's there!"`;
   waitForClick; clearText; marker; appendText; 
   `I yelled at the door.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A204`); appendText; 
   Sara`"What...?"`;
   waitForClick; clearText; marker; appendText; 
   `Confused, Sara reached out and touched the 
door panel.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
monoColorOverlay({ interval: 6, color: BLACK });
showTextbox();
text(() => {
   marker; appendText; 
   `The door opened.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: false });
bgload({ name: `BG14A3`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"..........................Nobody's in 
here..."`;
   waitForClick; clearText; marker; appendText; 
   `The room inside was dark.`;
   waitForClick; clearText; marker; appendText; 
   `But even before I could turn on the lights, I 
could tell there was no one inside.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So then, what was that noise just now!?"`;
   waitForClick; clearText; marker; appendText; 
   `I turned around and looked at Sara.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A205`); appendText; 
   Sara`"Hey? What is it THIS time? I have had no clue 
what you're talking about."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What do you mean, no clue!?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I'm just asking, what that noise was just 
now!"`;
   waitForClick; clearText; marker; sound(`C3A206`); appendText; 
   Sara`"What noise?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"A noise...you know...noise!?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"The sound of someone ramming into the door. 
That noise."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A207`); appendText; 
   Sara`"*Sigh*...I'm tired."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What?"`;
   waitForClick; clearText; marker; sound(`C3A208`); appendText; 
   Sara`"No really, I'm tired of putting up with 
your..."`;
   waitForClick; clearText; marker; appendText; 
   `Sara said this to me with a scornful look on 
her face..`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What are you talking about?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A209`); appendText; 
   Sara`"That's exactly what I want to ask you. What 
are you talking about?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`C3A210`); appendText; 
   Sara`"First you knew my name. Then you predict the 
future..."`;
   waitForClick; clearText; marker; sound(`C3A211`); appendText; 
   Sara`"And you see little girls who aren't there?"`;
   waitForClick; clearText; marker; sound(`C3A212`); appendText; 
   Sara`"And when you look in the mirror, you think 
you're a different person?"`;
   waitForClick; clearText; marker; sound(`C3A213`); appendText; 
   Sara`"And now you're hearing sounds that aren't 
there..."`;
   waitForClick; clearText; marker; sound(`C3A214`); appendText; 
   Sara`"I'm sorry but I just can't keep putting up 
with this..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hearing sounds that aren't there...?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You mean, you couldn't hear it Sara?"`;
   waitForClick; clearText; marker; sound(`C3A215`); appendText; 
   Sara`"Uugh...I shouldn't have to answer, but..."`;
   waitForClick; clearText; marker; sound(`C3A216`); appendText; 
   Sara`"No I didn't hear it."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So, why were you standing in front of that 
door?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A217`); appendText; 
   Sara`"Like I've been saying, no special reason."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A218`); appendText; 
   Sara`"I was just wondering what's beyond that door, 
that's all."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Are you serious?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A219`); appendText; 
   Sara`"Why would I lie about something like that?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A220`); appendText; 
   Sara`"If there was a place on a map you'd never 
been to, wouldn't you want to go there?"`;
   waitForClick; clearText; marker; sound(`C3A221`); appendText; 
   Sara`"If there was an unopened treasure box, 
wouldn't you want to open it?"`;
   waitForClick; clearText; marker; sound(`C3A222`); appendText; 
   Sara`"If there was a person in the town that you 
lived in who you'd never talked to before, 
wouldn't you want to say something to that 
person?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Ah, I see..."`;
   waitForClick; clearText; marker; appendText; 
   `Sara's discomfort showed clearly on her face.`;
   waitForClick; clearText; marker; appendText; 
   `Her eyes were frightened.`;
   waitForClick; clearText; marker; appendText; 
   `So I...`;
   waitForClick; clearText; 
});
playBGM({ num: 18, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Really! I don't know what came over me!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Ha, ha, ha."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Ha, ha, ha, ha, ha, ha!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `...I decided to try to play it off by laughing.`;
   waitForClick; clearText; marker; appendText; 
   `Not thinking strange events as 'strange' was 
becoming...not so strange after all.`;
   waitForClick; clearText; marker; appendText; 
   `When enough coincidences happen one after the 
other, they stop being 'coincidence' and 
start to become unavoidable. `;
   waitForClick; clearText; marker; appendText; 
   `What's more, having encountered strange 
phenomena so often they seemed like old 
acquaintances, I started to think that nothing 
could faze me. `;
   waitForClick; clearText; marker; appendText; 
   `What a time to suddenly become philosophical!`;
   waitForClick; clearText; marker; appendText; 
   `Spiritual awakening! Enlightenment! Nirvana!`;
   waitForClick; clearText; marker; appendText; 
   `I felt like there was nothing left to be 
afraid of...`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Haaaaaaa, ha, ha, ha, ha, ha!"`;
   waitForClick; clearText; marker; appendText; 
   `My laughing voice reverberated throughout the 
room.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A223`); appendText; 
   Sara`"Ouch...that really hurts..."`;
   waitForClick; clearText; marker; appendText; 
   `It seems my laughing had only proved to 
increase Sara's frustration and doubt in me, 
but I didn't care.`;
   waitForClick; clearText; marker; appendText; 
   `And the look she gave me, like I was some kind 
of weirdo...well, that didn't bother me either.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `I began to dance lightly, circling around the 
small room like some Polynesian tribal dancer.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
stopBGM();
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; appendText; 
   `But it made me dizzy, so I stopped.`;
   waitForClick; clearText; marker; appendText; 
   `Out of breath, I leaned against the nearest 
wall for support.`;
   waitForClick; clearText; marker; appendText; 
   `In front of me I noticed a small square window.`;
   waitForClick; clearText; marker; appendText; 
   `From outside the window, faint moonlight shone 
in.`;
   waitForClick; clearText; marker; appendText; 
   `(Huh...? Moonlight...?)`;
   waitForClick; clearText; marker; appendText; 
   `Sara must have notice the direction of my gaze 
because she began to walk toward the window.`;
   waitForClick; clearText; marker; appendText; 
   `Speaking toward her backside I said, `;
   waitForClick; clearText; marker; appendText; 
   Kid`"Why would there be a window in a place like 
this?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A224`); appendText; 
   Sara`"...Huh?"`;
   waitForClick; clearText; marker; appendText; 
   `Sara's feet stopped.`;
   waitForClick; clearText; marker; sound(`C3A225`); appendText; 
   Sara`"This looks like...a window to you...?"`;
   waitForClick; clearText; marker; appendText; 
   `She said as she spun around.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Isn't it...a window?"`;
   waitForClick; clearText; marker; appendText; 
   Sara`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Because...the light..."`;
   waitForClick; clearText; marker; sound(`C3A226`); appendText; 
   Sara`"Light?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Sara shuffled backwards and planted her back 
against the wall.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A227`); appendText; 
   Sara`"You just said 'light' didn't you?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Uh, yeah..."`;
   waitForClick; clearText; marker; sound(`C3A228`); appendText; 
   Sara`"It looks like it's shining light to you?"`;
   waitForClick; clearText; marker; appendText; 
   `As if being called by the light, I began to 
walk toward it.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `I knocked a few times against the window with 
my knuckles.`;
   waitForClick; clearText; marker; appendText; 
   `I stopped in front of the window.`;
   waitForClick; clearText; marker; appendText; 
   `Except...it was not a window at all.`;
   waitForClick; clearText; marker; appendText; 
   `It was...a steel door buried in the wall.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A229`); appendText; 
   Sara`"Hey? Will you answer my question?"`;
   waitForClick; clearText; marker; sound(`C3A230`); appendText; 
   Sara`"Does it look like a light is shining?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah, it does."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Sara stood beside me and put her hand on the 
steel door.`;
   waitForClick; clearText; marker; appendText; 
   `I also reached out and placed the flat of my 
hand on the door.`;
   waitForClick; clearText; marker; appendText; 
   `The door seemed to sizzle with a penetrating 
heat.`;
   waitForClick; clearText; marker; appendText; 
   `Without changing our pose, our eyes met. `;
   waitForClick; clearText; marker; appendText; 
   `Sara started to speak but hesitated.`;
   waitForClick; clearText; marker; appendText; 
   `She then opened her lips to try again but 
stammered.`;
   waitForClick; clearText; marker; appendText; 
   `Her breathing became rough.`;
   waitForClick; clearText; marker; appendText; 
   `She seemed a little agitated.`;
   waitForClick; clearText; marker; appendText; 
   `A red light seemed to emanate form her body.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So why does it look like it's shining?"`;
   waitForClick; clearText; marker; appendText; 
   `It was a very innocent, almost naive question.`;
   waitForClick; clearText; marker; appendText; 
   `Without answering me, Sara removed her hand 
from the door.`;
   waitForClick; clearText; marker; appendText; 
   `I removed mine as well.`;
   waitForClick; clearText; marker; appendText; 
   `Two faint handprints were left imprinted on 
the square steel door.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C3A231`); appendText; 
   Sara`"Kid...can you see this?"`;
   waitForClick; clearText; marker; appendText; 
   `Muttering, Sara gently removed something from 
her pocket.`;
   waitForClick; clearText; marker; appendText; 
   `Shick!`;
   waitForClick; clearText; 
});
makeFGHasYellowAmbient({ id: 1 });
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
removeFG({ id: 2, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `A flame burned.`;
   waitForClick; clearText; marker; appendText; 
   `In an instant the whole scene changed and 
Sara's face was lit up in red.`;
   waitForClick; clearText; marker; appendText; 
   `I realized that what Sara had taken out was a 
pendant and a lighter.`;
   waitForClick; clearText; marker; appendText; 
   Sara`"........."`;
   waitForClick; clearText; marker; appendText; 
   `Without saying a word, Sara brought the flame 
and the pendant in front of my eyes.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeFG({ id: 2, useAnim: false });
bgload({ name: `EV_ET02B`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   `Inside the pendant floated a holographic image 
of a man who I had never seen before.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Who's this?"`;
   waitForClick; clearText; marker; appendText; 
   `When I asked this, Sara's hand began to quiver.`;
   waitForClick; clearText; marker; appendText; 
   `The flame shimmered.`;
   waitForClick; clearText; marker; appendText; 
   `And from this a large shadow was projected on 
the wall, which also flickered.`;
   waitForClick; clearText; marker; sound(`C3A232`); appendText; 
   Sara`"So..."`;
   waitForClick; clearText; marker; sound(`C3A233`); appendText; 
   Sara`"You can see it, too..."`;
   waitForClick; clearText; marker; appendText; 
   `Click.`;
   waitForClick; clearText; marker; appendText; 
   `Sara shut the lighter.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `BG14A3`, transition: 26 });
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; sound(`C3A234`); appendText; 
   Sara`"Kid, the other day..."`;
   waitForClick; clearText; marker; sound(`C3A235`); appendText; 
   Sara`"When Nakkyu tried to open the door to the 
Generator Room...you stopped her, right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah."`;
   waitForClick; clearText; marker; sound(`C3A236`); appendText; 
   Sara`"How come? Why did you stop her?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Wait, hold on a second."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Weren't you just telling me how tired you 
were of all my 'premonitions and illusions'?"`;
   waitForClick; clearText; marker; sound(`C3A237`); appendText; 
   Sara`"Premonitions...?"`;
   waitForClick; clearText; marker; sound(`C3A238`); appendText; 
   Sara`"So that was...a premonition?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I can't say. I mean I don't really know..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It's just that, I thought it would be 
dangerous for her to open the door..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA15ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Sara looked at the ceiling.`;
   waitForClick; clearText; marker; appendText; 
   `She then looked at the square door in the 
wall, then the pendant held tightly in her 
hand, then finally looked slightly upward 
into my eyes.`;
   waitForClick; clearText; marker; appendText; 
   `There was a long silence.`;
   waitForClick; clearText; marker; appendText; 
   `Sara looked deep in thought, or maybe as 
though she wasn't thinking anything...`;
   waitForClick; clearText; marker; appendText; 
   `The only sound was her steady measured breaths.`;
   waitForClick; clearText; marker; appendText; 
   `At last she spoke...`;
   waitForClick; clearText; marker; sound(`C3A239`); appendText; 
   Sara`"Yeah, it couldn't be, right?"`;
   waitForClick; clearText; marker; sound(`C3A240`); appendText; 
   Sara`"*sigh*..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   `Sara took a deep breath, and put away the 
lighter and pendant.`;
   waitForClick; clearText; 
});
bgload({ name: `BG13B1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   `We left the room.`;
   waitForClick; clearText; marker; appendText; 
   `Sara took a big stretch.`;
   waitForClick; clearText; marker; appendText; 
   `I repeated my question to her.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara? Who's image was that in the pendant?"`;
   waitForClick; clearText; marker; appendText; 
   `As she walked toward the exit, she answered.`;
   waitForClick; clearText; marker; sound(`C3A241`); appendText; 
   Sara`"A person from the Sun."`;
   waitForClick; clearText; 
});
goto(lbl_00000b29);
let lbl_00000b29;
l_choice = 0;
jump(`YC3B`);
