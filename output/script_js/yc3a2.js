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
   `The Conference Room.`;
   `I was sitting in a chair, stuffing my mouth with a 'chicken-wich-sand.'`;
   `I'd grown bored of the chicken sandwiches, so I invented my own version - a slice of bread between two pieces of meat.`;
   `It was definitely a needed change of pace.`;
   `Sara was sitting directly in front of me.`;

});
bgload({ name: `EV_SA16A`, transition: 26 });
showTextbox();
text(() => {
   `Sara was eating straight from a head of lettuce, with nothing but ketchup as a topping.`;
   `Muttering in voice so small I could barely hear, she was saying "I'm not getting enough vegetables. I'm just not getting enough vegetables."`;
   Kid`"Say, where'd everybody else run off to?"`;
   `With ketchup smeared around her lips, Sara answered me.`;

});
bgload({ name: `EV_SA16B`, transition: 20 });
showTextbox();
text(() => {
   Sara(C3A171)`"Sora's in the Control Room. Nakkyu's in the Security Office."`;
   Sara(C3A172)`"As for Takeshi, I saw him riding the merry-go-round, goofing off by himself."`;
   Sara(C3A173)`"And as for Tsugumi, MIA, as usual."`;
   Sara(C3A174)`"Now that the repairs on the warehouse are finished, I guess everybody's taking a breather."`;
   Kid`"Hmm..."`;
   Kid`"So what do you have planned next, Sara?"`;
   Sara(C3A175)`"Nothing special really."`;
   Sara(C3A176)`"Maybe I'll just sit here and wait to be rescued while I eat this lettuce."`;

});
bgload({ name: `EV_SA16A`, transition: 20 });
showTextbox();
text(() => {
   `Sara kept munching the lettuce, making a crunching sound as she bit into the core.`;
   Kid`"By the way, Sara, what where you doing up till now?"`;

});
showTextbox();
text(() => {
   Sara(C3A177)`"Watching over you, Kid."`;
   Kid`"Watching over me?"`;

});
bgload({ name: `EV_SA16B`, transition: 20 });
showTextbox();
text(() => {
   Sara(C3A178)`"Last night, after we carried you to the infirmary, we all took turns watching you."`;
   Sara(C3A179)`"We were worried you might suddenly go on a rampage or something...so we took every precaution."`;
   Sara(C3A180)`"And until a minute ago, it was my turn to watch."`;
   Sara(C3A181)`"Except in the split second I turned my back and you up and disappeared... "`;
   Sara(C3A182)`"I wondered what was going on, and left the infirmary to find you when..."`;
   Kid`"When you found me crying?"`;

});
showTextbox();
text(() => {
   Sara(C3A183)`"That's right."`;

});
bgload({ name: `BG17A1`, transition: 20 });
showTextbox();
text(() => {
   `Finishing off my sandwich, I reached over to the lettuce in Sara's hands and ripped off a leaf.`;
   `Using my index finger, I wiped off some excess ketchup smeared around Sara's mouth, dabbed it on my lettuce and ate it.`;
   Kid`"What should I do next?"`;
   `I muttered to myself.`;
   Kid`"Just sitting here's getting boring."`;

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
   `(Might as well go to the Security Office.)`;
   `I wasn't exactly sure why, but I somehow felt visiting You would be the safest bet.`;
   `Sora was probably too hard at work in the Control Room to be bothered. Tsugumi's whereabouts were unknown. Takashi was off riding a dolphin.`;
   `But what about Sara...?`;

});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A184)`"Hey you? What are you looking at?"`;
   Kid`"Can I hang out with you for awhile?"`;

});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A185)`"Yeah, sure. No problem."`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A186)`"Might be good to show your face around. Everyone's been worried about you."`;
   `Sara said this, her face covered with ketchup.`;
   `'Why was she using ketchup and not salad dressing?'`;
   `The question nagged at me but I didn't venture to ask.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I wiped the ketchup off her cheeks with my fingertips, and we left for the Conference Room together.`;

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
   `As we climbed the stairs, I licked some ketchup from my fingers.`;
   `It tasted of tomatoes. I supposed it only made sense...`;
   `——It made sense???`;
   `Since arriving at LeMU, I hadn't eaten a tomato. `;
   `I wasn't sure I had ever tasted a tomato before coming to LeMU.`;
   `Basically, I totally lacked all memory of 'eating tomatoes'.`;
   `But still I had knowledge of 'what a tomato is supposed to taste like,' and that 'ketchup has the flavor of tomatoes.'`;
   `According to Sora, evidently I have only lost the memory of my personal past.`;
   `Amnesia.`;
   `Apparently, even if I didn't possess a memory of eating tomatoes, I still possessed knowledge of the connection between tomatoes and ketchup. `;
   `What was more, it wasn't just tomatoes.`;
   `In every moment of life that I encountered and that passed me by...`;
   `For every scene to reach my eyes, or words to reach my ears, I was able to distinguish correctly between the reasonable and the absurd.`;
   `For example, I knew that the sky was blue, the clouds were white and that leaves were green.`;
   `I knew all about man-made things as well, such as electrical appliances...`;
   `...cars, trains, bicycles, roads, bridges, skyscrapers, houses, furniture, toys, clothes, food, movies, art, music, books...I knew about all of them.`;
   `When people are happy they smile, when they are sad they cry. I possessed full knowledge about the range of human emotions.`;

});
playBGM({ num: 16, volume: 100 });
showTextbox();
text(() => {
   `Furthermore, I knew that I was alive and I knew what it took to die.`;
   `I would die without oxygen. I would die without food or water. And exposure to extreme heat or cold would kill me...`;
   `If I drank poison, it would kill me. If I jumped from a high place, it would kill me. If my heart stopped, my life would end...`;
   `If I lost a large quantity of blood, or if my brain stopped functioning, or even if I was lonely beyond despair...I would die.`;
   `I knew the boundaries between life and death.`;
   `Common sense and the absurd...`;
   `Somehow unconsciously, I could judge between what was 'true' and what was false.'`;
   `But how...?`;
   `I was probably able to objectively compare things with my various life experiences and episodes...`;
   `But if that was the case...`;
   `Then there was something that bothered me.`;
   `'Mirrors'...`;
   `I knew that when I looked in a mirror, the image projected was myself.`;
   `But despite that knowledge, I had fallen into a delirious state of confusion the night before.`;
   `Why...?`;
   `When I saw the image, my immediate reaction was, 'NO! This is wrong!'`;
   `In other words, my instant reaction was, 'this isn't what I should look like! It can't be right!!'`;
   `Or to put it more simply...`;
   `When I tasted the ketchup, I could tell it was made from tomatoes. It seemed like a natural conclusion.`;
   `It was because the flavor matched my image of 'what tomatoes should taste like.'`;
   `The previous night's experience, however, was entirely different.`;
   `When I saw my own face in the mirror, I thought it was clearly a different person.`;
   `This was mainly because the face I saw did not match my image of what I thought that my face should look like.`;
   `Before I looked in the mirror, if there had been no image in my mind of what my face should have looked like, then surely I would not have fallen into such a state of shock.`;
   `Only when there is a basis for comparison is it possible to tell whether something is common sense.. Otherwise it is impossible to know.`;
   `The only choice left to me, would be to accept the face I saw.`;
   `Sara's words to me...`;

});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   Sara(C3A161)`"I would think that you'd just be relieved to know, 'At least I have a normal face?'"`;

});
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
showTextbox();
text(() => {
   `I supposed that might be true.`;
   `But that was all the more reason for me to be concerned.`;
   `Before looking into that mirror...I definitely had held a certain image of what my face should look like.`;
   `But my mental image and reality were different.`;
   `I began to wonder it was the image that was false, or a mistaken memory.`;
   `In that case, I wondered how a false memory could creep into my mind.`;
   Kid`"Ah...!"`;

});
makeFGTransparent({ id: 1 });
fgload({ id: 1, name: `KA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(C3A187)`"Who...are...you?"`;
   Kid(C3A188)`"Who...am...I?"`;

});
hideTextbox();
monoColorOverlay({ interval: 3, color: BLACK });
removeFG({ id: 1, useAnim: true });
makeFGNormal({ id: 1 });
showTextbox();
text(() => {
   `I closed my eyes tightly and shook my head.`;

});
hideTextbox();
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `When I opened my eyes, no one was there.`;
   `In a wild panic, I ran up the remaining stairs and burst onto Zweite stock.`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `BG25A3`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `'I know what my face should look like!' `;
   `But the apparition which had shown itself to me, looked entirely different...`;
   `For an instant, I could have sworn that I had witnessed my own self.`;
   `(But it can't be.)`;
   `(That person isn't me.)`;
   `(But if he isn't me...who the is he?)`;
   Kid`"*sigh*..."`;
   `My head pounded with pain.`;
   `My overall mental state seemed solid enough, but somehow one part seemed stuck.`;
   `Exactly what was jammed, and how, I didn't know.`;
   `But as soon as I tried to force through the memories, the pain in my head became blistering.`;
   `(Who is he??)`;
   `(Who am I??)`;
   `But, no matter how hard I thought about it, I didn't seem to make any progress.`;
   `So I...`;
   `...decided not to think about it anymore.`;
   `I turned the off the switch inside my brain and headed for the Security Office.`;
   `I wondered if I could let it go so quickly, because I'd learned such a hard lesson of what happened when I tried to hold on...?`;
   `Or was it just because I'd become indifferent to things by nature?`;
   `Whatever the reason, I was suddenly so calm and collected I surprised even myself.`;

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
   `I went into the Security Office.`;
   `You was sitting in her chair drinking coffee.`;
   Kid`"What are you doing here all by yourself?"`;
   `I asked as I sat down beside her.`;
   You(S3A295)`"I'm doing some research."`;
   Kid`"Research?"`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A299)`"I told you before, right? About why I got this job at LeMU..."`;
   You(S3A300)`"I'm looking for clues about my father, who disappeared."`;
   You(S3A301)`"He went missing 17 years ago and I came hoping to find a hint as to why."`;
   `I thought maybe I'd heard her mention it before.`;
   Kid`"You said that the last place he was seen was in LeMU, right?"`;
   Kid`"Oh. Are you investigating that...?"`;
   You(S3A302)`"Yes..."`;
   `You nodded and shifted the cup to her other hand.`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A303)`"Information about my father."`;
   Kid`"........."`;
   You(S3A304)`"It was 17 years ago..."`;
   You(S3A305)`"They say there was a big accident here."`;
   Kid`"Accident?"`;
   You(S3A306)`"I don't really know that much about it."`;
   You(S3A307)`"Even looking at old news clippings, I wasn't able to gather much information."`;
   Kid`"What do you mean?"`;
   You(S3A308)`"The cause of the accident, specific damage, what happened afterward...all the coverage was vague..."`;
   You(S3A309)`"I figure that the media didn't really know the details about what happened either."`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A310)`"Somebody or something powerful clamped down on information."`;
   Kid`"Hmmm. That's interesting..."`;
   You(S3A311)`"An accident 17 years ago shrouded in mystery."`;
   You(S3A312)`"And my father that disappeared 17 years ago."`;
   You(S3A313)`"He worked here until right before the accident."`;
   You(S3A314)`"I can guess about some of what happened from what we already know..."`;
   Kid`"You think that the accident had something to do with the disappearance of your father...?"`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A315)`"That's right."`;
   You(S3A316)`"I thought that here...that in LeMMIH there would be some trace...that's why I came."`;

});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A317)`"But since I started working I haven't had any time to look into it..."`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A318)`"I couldn't even get close to LeMMIH's database."`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A319)`"I guess it makes sense. I was pretty naive."`;
   `The chair squeaked as You slumped back in it.`;
   `She just stared at the ceiling.`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A320)`"But...but...you know what? Opportunity knocked."`;
   Kid`"Opportunity..."`;
   Kid`"You...you don't mean this accident?"`;
   You(S3A321)`"Yup."`;
   You(S3A322)`"Now I have access to LeMMIH."`;
   You(S3A323)`"Thanks to the accident, I have been able to get a step closer to my goal."`;
   Kid`"........."`;

});
fgload({ id: 1, name: `YU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A324)`"Well, I suppose it has also given me a chance to live on the edge...?"`;
   `You joked as she shrugged her shoulders.`;
   Kid`"So? Did you find anything out?"`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A333)`"That...that's the problem."`;

});
bgload({ name: `EV_YU04A`, transition: 20 });
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Tap, tap, tap...`;
   `Saying that, You started manipulating the keyboard.`;
   `One of the monitors on the wall shifted from footage of an observation camera to an image of a computer desktop.`;
   `In the upper left corner of the screen, two dolphin icons were displayed, showing that the OS had begun to operate.`;
   `It the middle of it one window was open.`;
   `Gazing at the new window, You began to explain further.`;
   You(S3A334)`"This is the authorization screen to connect to the network."`;
   You(S3A335)`"This is where the system assesses the user for proper authorization."`;
   You(S3A336)`"I'm attempting to connect to LeMMIH's C level...meaning I'm trying to access classified information."`;
   You(S3A337)`"But if anyone could easily access important data, it would be a security disaster, right?"`;
   Kid`"Okay."`;
   You(S3A338)`"That's why there is a screen where the computer asks 'Hey, who's trying to look at this?'"`;
   `As she spoke, You used the mouse to click on the box for "Name."`;
   `Inside the box were written the words, 'YUKIE TANAKA.'`;
   You(S3A339)`"Of course there is no way I could access the system using my name, so I'm using someone else's name to get me in."`;
   You(S3A340)`"But anyone might think to try that, right?"`;
   Kid`"I suppose so."`;
   You(S3A341)`"Obviously the people who programmed this aren't stupid. So to prevent false authorization they use methods to check identity."`;
   You(S3A342)`"The screen then says, 'If you really are YUKIE TANAKA, please show me your password.'"`;

});
stopBGM();
playSFX({ name: `SE10_11`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `——Password???`;
   `When I heard that word, for some reason my chest began to tingle.`;

});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Click, click, click...`;
   `Without saying anything more, You silently typed on the keyboard.`;
   `From her fingertips, a password was entered into the entry field.`;

});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Tap, tap, tap...`;
   `"*${wait(10)}*${wait(5)}*${wait(20)}*${wait(4)}*${wait(5)}*${wait(15)}*${wait(3)}*"`;

});
playSFX({ name: `SE04_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Tap!`;
   `With a quick snap of her wrist she hit the enter key.`;

});
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Beep!`;
   `"Access denied. Invalid name or password."`;
   `Without blinking an eye, You entered a different string of letters.`;

});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Tap, tap, tap...`;
   `"*${wait(15)}*${wait(5)}*${wait(20)}*${wait(15)}*${wait(5)}*${wait(3)}*${wait(10)}*"`;

});
playSFX({ name: `SE04_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Tap!`;

});
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Beeeeeeeep!`;
   `"Access denied. Invalid name or password."`;

});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Tap, tap, tap...`;
   Kid`"Hey, You?"`;
   `I asked while watching her fingers dance across the keyboard.`;
   You(S3A347)`"Yes?"`;
   Kid`"It may be a silly thing to ask, but..."`;
   Kid`"The thing that you are hung up on is the password, right?"`;
   You(S3A409)`"Right..."`;
   `And then to my surprise——suddenly words started flying out of my mouth!`;
   Kid`"The empty fall sky...A single cuckoo calls out...Brings a chill to me."`;
   `Even as I heard the words come out, I doubted my own ears.`;
   `Physically, there are certain spasmodic actions such as coughing, sneezing, or throwing-up that are simply beyond our ability to control.`;
   `As I uttered those words, that was exactly how I felt `;
   `Before I could even think, I was driven by the impulse to blurt the words out. `;
   You`".............................."`;
   `You's fingers stopped, her breathing stopped, she had completely frozen.`;
   `Even as I watched You in this condition from the corner of my eye, I continued spasmodically speaking.`;
   `I reached up and grabbed a piece of scrap paper lying on top of the console.`;

});
bgload({ name: `IT03A`, transition: 20 });
showTextbox();
text(() => {
   Kid`"Look! It's written right here..."`;
   Kid`"The empty fall sky...A single cuckoo calls out...Brings a chill to me."`;
   Kid`"I bet this is the password you're looking for."`;
   You(S3A470)`"What! Let me see that!"`;

});
bgload({ name: `BG11A1`, transition: 20 });
showTextbox();
text(() => {
   `You bounced up from the chair and tore the paper from my hand.`;
   Kid`"Lay the paper down and take a look at it from an angle."`;
   Kid`"You should be able to see it."`;
   `Although the words were bursting out of my mouth against my will...`;
   `You seemed not to be unaware of my state.... She simply did as I suggested and gazed at the paper from an angle.`;

});
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A471)`"You...you're right!"`;
   You(S3A472)`"Amazing—! Really amazing, Kid!"`;
   `You grabbed my hand and shook it happily.`;
   `...But she didn't stop there...She pulled me close in a big bear hug.`;
   `Squeeze—!!!`;
   `My face was pressed hard against her bust.`;
   `It was a nice fit...a little too nice...I struggled for air.`;
   Kid`"I...give up...give...mercy..."`;
   `I almost felt dangerously excited by the softness of her.`;
   You(S3A473)`"We did it We did it Yeah"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Finally, You let me go.`;
   `She jumped around gleefully like a rabbit.`;
   `(I was glad she was happy...even if she did almost crush me.)`;
   `Watching You all happy like that seemed to wash away all my irritation and fatigue.`;
   `The stress I was feeling simply faded away.`;

});
bgload({ name: `IT03F`, transition: 20 });
showTextbox();
text(() => {
   You(S3A474)`"I get it now. You can't see it from right above it."`;
   You(S3A475)`"But if you look from the side...I see it now."`;
   You(S3A481)`"The empty fall sky...A single cuckoo calls out...Brings a chill to me."`;

});
bgload({ name: `BG11A1`, transition: 20 });
fgload({ id: 1, name: `YU02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A482)`"Alright! Let's try this for a password."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `A recharged You faced the screen triumphantly.`;

});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `But...`;

});
bgload({ name: `EV_YU04A`, transition: 20 });
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Tap, tap, tap...`;
   You(S3A483)`"The empty fall sky...A single cuckoo calls out...Brings a chill to me. Okay then!"`;

});
playSFX({ name: `SE04_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Tap!`;

});
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Beeeeeeeep!`;
   `"Access denied. Invalid name or password."`;
   `But she still couldn't get into the C Level information.`;
   `And then, suddenly—!`;

});
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Beeeeeeeep!`;

});
hideTextbox();
playSFX({ name: `SE03_02`, a1: 0, volume: 90 });
bgload({ name: `BG11A1`, transition: 20 });
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A494)`"Wh-what in the...?"`;
   `The screen went black.`;
   Kid`"What happened...?"`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A495)`"I don't know but it looks like it automatically shut down the authorization screen..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `After a moment, the screen returned to normal.`;
   `You pecked away at the keyboard and called up the authorization screen again.`;

});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Tap, tap, tap...`;

});
playSFX({ name: `SE04_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Tap!`;

});
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Beeeeeeeep!`;
   `"Access denied. Currently this name cannot be logged in."`;
   You(S3A496)`"What? ! What is this?!"`;

});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `She tried it again.`;

});
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Beeeeeeeep!`;
   `The result was the same.`;
   Kid`"What does this mean?"`;

});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A497)`"Maybe I entered the wrong password too many times and it activated some kind of protection."`;
   You(S3A498)`"In other words, LeMMIH has completely denied access to my mom's name."`;
   Kid`"So..."`;

});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A499)`"So we'll have to give up for the time being, I guess."`;
   Kid`"..."`;

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
   `Even so...`;
   `How could I have possibly known her mother's password?`;
   `But at the time, possibly due to her intense excitement, this suspicion never crossed my mind.`;
   `The strange feeling of knowing what I shouldn't be able to know...`;
   `In the first place, I didn't even know what that haiku poem meant...`;
   `Five - seven - five. What kind of meaning was hidden in those seventeen syllables?`;
   `So many questions!`;

});
goto(lbl_00000b29);
let lbl_000006a2;
l_went_with_sara_in_3rd_day = 1;
showTextbox();
text(() => {
   `(Well, I guess I'll take Sara to visit the warehouse.)`;
   `Had there really been an accident, which had flooded the warehouse? I wanted to see for myself.`;
   Kid`"Sara?"`;

});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A189)`"Yeah?"`;
   Kid`"Think you could join me for a bit...?"`;
   Sara(C3A190)`"Okay, but..."`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A191)`"Do you mind waiting until I'm through with my lettuce?"`;
   `Sara spoke with her face still covered in ketchup.`;
   Kid`"Sure."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I decided to wait for Sara to finish her 'meal.'`;
   `While waiting I asked her a question.`;
   Kid`"So tell me...why ketchup and not dressing?"`;
   `Her answer was straightforward.`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A192)`"Because I like tomatoes."`;
   Sara(C3A193)`"They taste like the sun, don't you think?"`;

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
   `Inside of the warehouse, the air was filled with a sticky humid smell.`;
   `And the floor was covered with enough water to just cover our shoes...`;
   `Around the room lay pipes, many of which look to have been recently welded to repair damage.`;
   Kid`"So there really was some kind of flooding here..."`;

});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A194)`"Huh? Didn't you believe me when I told you...?"`;
   Kid`"Of course I believed you, but..."`;
   Kid`"There's a difference between hearing something and seeing it for yourself...I mean...there's way more impact."`;
   Sara(C3A195)`"Impact?"`;
   Kid`"You know, the impact from realizing I saw this all in a dream."`;
   Sara(C3A196)`"Like a premonition..."`;
   Kid`"Well, I don't know if I could really call it a premonition or not, but..."`;
   Sara(C3A197)`"?"`;
   Kid`"I mean, Tsugumi didn't get hurt, right?"`;
   Sara(C3A198)`"Yeah."`;
   Kid`"And besides..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I said this and stopped, sweeping my eyes across the room.`;
   `The scene was almost exactly as I had dreamed it but...one thing was different.`;
   `There had been a pile of scrap material stacked high, but now it was stacked on the floor.`;
   Kid`"In my dream, the warehouse was completely submerged in water."`;
   Kid`"But by the looks of it here, everything seems fine..."`;
   Kid`"I wonder if you could still call that a premonition?"`;

});
fgload({ id: 1, name: `SA13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A199)`"Beats me...I have no idea about things like that..."`;
   Kid`"Sara?"`;
   Kid`"Was the warehouse arranged like this from the start?"`;

});
fgload({ id: 1, name: `SA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A200)`"Huh?"`;
   Kid`"See those containers and metal pipes lined up over there?"`;
   `I asked her while pointing to the rows of scrap metal.`;
   Kid`"Were those stacked up in one tall pile before?"`;

});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A201)`"Uuumm.."`;

});
fgload({ id: 1, name: `SA07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A202)`"You can't expect me to remember all the details."`;
   Kid`"Yeah...I guess you're right..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Besides that one point, nothing else seemed out of place.`;
   `Except, I was amazed how calm I felt analyzing the situation.`;
   `Premonitions, the phantom girl, the mirror affair, amnesia.... Considering the countless number of strange things I had experienced, I was surprisingly calm.`;
   `Not thinking such strange events as strange was in itself...strange...`;
   `Was I just desensitized to everything?`;
   `Or maybe I just had never been the type to think too deeply about things.`;
   `I didn't know why, but I felt fine about the situation.`;

});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `I walked a loop through around the entire warehouse and returned to where I started.`;
   `Only to find...`;

});
stopBGM();
playSFX({ name: `SE00_13`, a1: 0, volume: 89 });
bgload({ name: `BG13B1`, transition: 20 });
showTextbox();
text(() => {
   `Sara was gone.`;
   `At that same moment I heard a sound— 'Bang! Bang! Bang!.'`;
   `Like something pounding powerfully against a steel wall.`;
   `I searched for the origin of the sound.`;
   `A small door suddenly jumped into my field of vision.`;
   `In front of the door stood Sara.`;
   Kid`"Sara!"`;
   `I let out a yell and ran to her.`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
showTextbox();
text(() => {
   `..................`;
   `............`;
   `......`;

});
playSFX({ name: `SE00_13`, a1: 0, volume: 100 });
hideTextbox();
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   Kid`"What happened?"`;
   `I asked, standing at Sara's side.`;

});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A203)`"Nothing. What do you mean?"`;
   `Sara acted like there was nothing out of the ordinary.`;
   `In fact, she seemed so normal that normal didn't begin to describe it well enough. `;
   `The bashing sound continued unabated. It was coming from beyond the door.`;
   `Someone was...`;
   `It sounded like someone was throwing their body against the door.`;
   `And they weren't holding back.`;
   `It was an explosive force, almost animal in intensity...`;
   `The sound reverberated to the core of my body, rattling my brain.`;
   Kid`"Who...is it...?"`;
   Kid`"Hey! Who's there!"`;
   `I yelled at the door.`;

});
fgload({ id: 1, name: `SA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A204)`"What...?"`;
   `Confused, Sara reached out and touched the door panel.`;

});
hideTextbox();
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
monoColorOverlay({ interval: 6, color: BLACK });
showTextbox();
text(() => {
   `The door opened.`;

});
removeFG({ id: 1, useAnim: false });
bgload({ name: `BG14A3`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   Kid`"..........................Nobody's in here..."`;
   `The room inside was dark.`;
   `But even before I could turn on the lights, I could tell there was no one inside.`;
   Kid`"So then, what was that noise just now!?"`;
   `I turned around and looked at Sara.`;

});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A205)`"Hey? What is it THIS time? I have had no clue what you're talking about."`;
   Kid`"What do you mean, no clue!?"`;
   Kid`"I'm just asking, what that noise was just now!"`;
   Sara(C3A206)`"What noise?"`;
   Kid`"A noise...you know...noise!?"`;
   Kid`"The sound of someone ramming into the door. That noise."`;

});
fgload({ id: 1, name: `SA07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A207)`"*Sigh*...I'm tired."`;
   Kid`"What?"`;
   Sara(C3A208)`"No really, I'm tired of putting up with your..."`;
   `Sara said this to me with a scornful look on her face..`;
   Kid`"What are you talking about?"`;

});
fgload({ id: 1, name: `SA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A209)`"That's exactly what I want to ask you. What are you talking about?"`;
   Kid`"........."`;
   Sara(C3A210)`"First you knew my name. Then you predict the future..."`;
   Sara(C3A211)`"And you see little girls who aren't there?"`;
   Sara(C3A212)`"And when you look in the mirror, you think you're a different person?"`;
   Sara(C3A213)`"And now you're hearing sounds that aren't there..."`;
   Sara(C3A214)`"I'm sorry but I just can't keep putting up with this..."`;
   Kid`"Hearing sounds that aren't there...?"`;
   Kid`"You mean, you couldn't hear it Sara?"`;
   Sara(C3A215)`"Uugh...I shouldn't have to answer, but..."`;
   Sara(C3A216)`"No I didn't hear it."`;
   Kid`"So, why were you standing in front of that door?"`;

});
fgload({ id: 1, name: `SA07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A217)`"Like I've been saying, no special reason."`;

});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A218)`"I was just wondering what's beyond that door, that's all."`;
   Kid`"Are you serious?"`;

});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A219)`"Why would I lie about something like that?"`;

});
fgload({ id: 1, name: `SA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A220)`"If there was a place on a map you'd never been to, wouldn't you want to go there?"`;
   Sara(C3A221)`"If there was an unopened treasure box, wouldn't you want to open it?"`;
   Sara(C3A222)`"If there was a person in the town that you lived in who you'd never talked to before, wouldn't you want to say something to that person?"`;
   Kid`"Ah, I see..."`;
   `Sara's discomfort showed clearly on her face.`;
   `Her eyes were frightened.`;
   `So I...`;

});
playBGM({ num: 18, volume: 100 });
showTextbox();
text(() => {
   Kid`"Really! I don't know what came over me!"`;
   Kid`"Ha, ha, ha."`;
   Kid`"Ha, ha, ha, ha, ha, ha!"`;

});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `...I decided to try to play it off by laughing.`;
   `Not thinking strange events as 'strange' was becoming...not so strange after all.`;
   `When enough coincidences happen one after the other, they stop being 'coincidence' and start to become unavoidable. `;
   `What's more, having encountered strange phenomena so often they seemed like old acquaintances, I started to think that nothing could faze me. `;
   `What a time to suddenly become philosophical!`;
   `Spiritual awakening! Enlightenment! Nirvana!`;
   `I felt like there was nothing left to be afraid of...`;
   Kid`"Haaaaaaa, ha, ha, ha, ha, ha!"`;
   `My laughing voice reverberated throughout the room.`;

});
fgload({ id: 1, name: `SA07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A223)`"Ouch...that really hurts..."`;
   `It seems my laughing had only proved to increase Sara's frustration and doubt in me, but I didn't care.`;
   `And the look she gave me, like I was some kind of weirdo...well, that didn't bother me either.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I began to dance lightly, circling around the small room like some Polynesian tribal dancer.`;

});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
stopBGM();
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   `But it made me dizzy, so I stopped.`;
   `Out of breath, I leaned against the nearest wall for support.`;
   `In front of me I noticed a small square window.`;
   `From outside the window, faint moonlight shone in.`;
   `(Huh...? Moonlight...?)`;
   `Sara must have notice the direction of my gaze because she began to walk toward the window.`;
   `Speaking toward her backside I said, `;
   Kid`"Why would there be a window in a place like this?"`;

});
fgload({ id: 1, name: `SA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A224)`"...Huh?"`;
   `Sara's feet stopped.`;
   Sara(C3A225)`"This looks like...a window to you...?"`;
   `She said as she spun around.`;
   Kid`"Isn't it...a window?"`;
   Sara`"........."`;
   Kid`"Because...the light..."`;
   Sara(C3A226)`"Light?"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Sara shuffled backwards and planted her back against the wall.`;

});
fgload({ id: 1, name: `SA03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A227)`"You just said 'light' didn't you?"`;
   Kid`"Uh, yeah..."`;
   Sara(C3A228)`"It looks like it's shining light to you?"`;
   `As if being called by the light, I began to walk toward it.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I knocked a few times against the window with my knuckles.`;
   `I stopped in front of the window.`;
   `Except...it was not a window at all.`;
   `It was...a steel door buried in the wall.`;

});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A229)`"Hey? Will you answer my question?"`;
   Sara(C3A230)`"Does it look like a light is shining?"`;
   Kid`"Yeah, it does."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Sara stood beside me and put her hand on the steel door.`;
   `I also reached out and placed the flat of my hand on the door.`;
   `The door seemed to sizzle with a penetrating heat.`;
   `Without changing our pose, our eyes met. `;
   `Sara started to speak but hesitated.`;
   `She then opened her lips to try again but stammered.`;
   `Her breathing became rough.`;
   `She seemed a little agitated.`;
   `A red light seemed to emanate form her body.`;
   Kid`"So why does it look like it's shining?"`;
   `It was a very innocent, almost naive question.`;
   `Without answering me, Sara removed her hand from the door.`;
   `I removed mine as well.`;
   `Two faint handprints were left imprinted on the square steel door.`;

});
fgload({ id: 2, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C3A231)`"Kid...can you see this?"`;
   `Muttering, Sara gently removed something from her pocket.`;
   `Shick!`;

});
makeFGHasYellowAmbient({ id: 1 });
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
removeFG({ id: 2, useAnim: true });
showTextbox();
text(() => {
   `A flame burned.`;
   `In an instant the whole scene changed and Sara's face was lit up in red.`;
   `I realized that what Sara had taken out was a pendant and a lighter.`;
   Sara`"........."`;
   `Without saying a word, Sara brought the flame and the pendant in front of my eyes.`;

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
   `Inside the pendant floated a holographic image of a man who I had never seen before.`;
   Kid`"Who's this?"`;
   `When I asked this, Sara's hand began to quiver.`;
   `The flame shimmered.`;
   `And from this a large shadow was projected on the wall, which also flickered.`;
   Sara(C3A232)`"So..."`;
   Sara(C3A233)`"You can see it, too..."`;
   `Click.`;
   `Sara shut the lighter.`;

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
   Sara(C3A234)`"Kid, the other day..."`;
   Sara(C3A235)`"When Nakkyu tried to open the door to the Generator Room...you stopped her, right?"`;
   Kid`"Yeah."`;
   Sara(C3A236)`"How come? Why did you stop her?"`;
   Kid`"Wait, hold on a second."`;
   Kid`"Weren't you just telling me how tired you were of all my 'premonitions and illusions'?"`;
   Sara(C3A237)`"Premonitions...?"`;
   Sara(C3A238)`"So that was...a premonition?"`;
   Kid`"I can't say. I mean I don't really know..."`;
   Kid`"It's just that, I thought it would be dangerous for her to open the door..."`;

});
fgload({ id: 1, name: `SA15ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Sara looked at the ceiling.`;
   `She then looked at the square door in the wall, then the pendant held tightly in her hand, then finally looked slightly upward into my eyes.`;
   `There was a long silence.`;
   `Sara looked deep in thought, or maybe as though she wasn't thinking anything...`;
   `The only sound was her steady measured breaths.`;
   `At last she spoke...`;
   Sara(C3A239)`"Yeah, it couldn't be, right?"`;
   Sara(C3A240)`"*sigh*..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Sara took a deep breath, and put away the lighter and pendant.`;

});
bgload({ name: `BG13B1`, transition: 20 });
showTextbox();
text(() => {
   `We left the room.`;
   `Sara took a big stretch.`;
   `I repeated my question to her.`;
   Kid`"Sara? Who's image was that in the pendant?"`;
   `As she walked toward the exit, she answered.`;
   Sara(C3A241)`"A person from the Sun."`;

});
goto(lbl_00000b29);
let lbl_00000b29;
l_choice = 0;
jump(`YC3B`);
