setDialogBoxColor(BLUE);
setSceneTitle({ index: 49 });
l_b0 = 5;
l_dayA = 1;
l_dayB = 1;
removeBG({ mode: WHITE, transition: 0 });
showTextbox();
text(() => {
   `The next thing I knew, I was on a bed.`;
   `The ceiling was so white it was slightly blinding...`;
   `It smelled of disinfectant...`;
   `I wondered where I was?`;
   //??
   Unk(S1A000)`"Are you awake now?"`;

});
playBGM({ num: 4, volume: 100 });
clock(`15:17`);
showTextbox();
text(() => {
   `A shadow passed above me on the bed.`;
   `I wondered who it could be...?`;
   `(No...wait a minute...)`;
   `Somewhere...`;
   `I felt like...I had met this person somewhere before.`;
   //??
   Unk(S1A001)`"How are you doing?"`;
   //??
   Unk(S1A002)`"You look...alright anyway."`;
   `Who? Who was it?`;
   `I knew her.`;
   `I was sure that I knew her.`;
   `Still, I couldn't put my finger on any one thing about her that I knew.`;
   `The more I thought about it, the more the area around my temples pounded with pain.`;

});
bgload({ name: `EV_YU01B`, transition: 20 });
showTextbox();
text(() => {
   //??
   Unk(S1A003)`"Oh? I guess it's no good then?"`;
   //??
   Unk(S1A004)`"Does your head...hurt?"`;
   `I pressed my temples with the fingers of both hands, nodding slightly.`;

});
bgload({ name: `EV_YU01A`, transition: 20 });
showTextbox();
text(() => {
   //??
   Unk(S1A005)`"I see. Just wait a second, alright?"`;
   //??
   Unk(S1A006)`"I'll try to find some painkillers."`;
   `She laughed sweetly and stepped away from me.`;

});
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   `I raised myself up and looked around.`;
   `The room was completely white...`;
   `With a number of beds tidily lined up in a row...`;
   `Looking behind me there was a curved glass window in the wall.`;
   `I got off the bed and put on my shoes, which were neatly arranged below me. I approached the window.`;

});
bgload({ name: `EV_SA13D`, transition: 20 });
showTextbox();
text(() => {
   `Outside, as far as the eye could see, was one endless sheet of blue.`;
   `Transparent waves of light swayed gently in the deep, dense navy mist.`;
   `I put both of my hands on the wall and pushed my face up against the glass.`;
   `Just then - a flash of silver light dart across my vision.`;
   `For an instant, I was afraid. Then I noticed it was just a fish.`;
   Kid`"This is..."`;
   Kid`"...the middle of the ocean."`;
   //??
   Unk(S1A007)`"What's the matter?"`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `BG09A1`, transition: 26 });
fgload({ id: 1, name: `YU06BDM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
showTextbox();
text(() => {
   `At some point the girl had come to stand beside me.`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //??
   Unk(S1A008)`"Of course it is!?"`;
   //??
   Unk(S1A009)`"This is the LeMU infirmary."`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
playSFX({ name: `SE10_11`, a1: 0, volume: 100 });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `—LeMU!`;
   `The instant I heard that word, a flash of searing light reappeared in the back of my mind.`;
   `That's right! That's right!`;
   `I had come to LeMU!`;

});
bgload({ name: `BG38A2`, transition: 10 });
showTextbox();
text(() => {
   `The theme park LeMU floating in the ocean!`;
   `And I had been walking around LeMU with her.`;

});
bgload({ name: `BG04A3`, transition: 20 });
showTextbox();
text(() => {
   `There were ancient ruins...${wait(30)}${noWait}`;

});
bgload_keepFg({ name: `BG05A4`, transition: 20 });
showTextbox();
text(() => {
   Append`And the whale floating in the darkness...${wait(30)}${noWait}`;

});
bgload_keepFg({ name: `BG36A1`, transition: 20 });
showTextbox();
text(() => {
   Append`The Jellyfish Gondola...${wait(30)}${noWait}`;

});
bgload_keepFg({ name: `BG02A3`, transition: 20 });
showTextbox();
text(() => {
   Append`And merry-go-round...`;

});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `But...`;

});
bgload({ name: `IMG01A`, transition: 20 });
showTextbox();
text(() => {
   `But...why had I come to this place...to LeMU?`;
   `Had I come for fun?`;
   `Of course I had. This was a theme park after all...`;
   `But was that right? Was that really the reason?`;
   `Violent head pains struck me again.`;
   `I shook my head again and again, my face distorted from the pain.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: WHITE });
bgload({ name: `BG09A1`, transition: 26 });
fgload({ id: 1, name: `YU06BDM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   //??
   Unk(S1A010)`"Hey...are you alright?"`;

});
fgload({ id: 1, name: `YU03BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //??
   Unk(S1A011)`"Shouldn't you rest a little more?"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `She helped support me as I returned to the bed.`;

});
bgload({ name: `EV_YU01A`, transition: 20 });
showTextbox();
text(() => {
   //??
   Unk(S1A012)`"I brought you some headache medicine."`;
   `She held two white pills in her left hand. In her right was a cup filled with water.`;
   `White, white pills, two of them...`;

});
choice(
   `Thanks`,
   `No thanks`,
);
switch (l_choice) {
   case 0: goto(lbl_0000028f);
   case 1: goto(lbl_000002a3);
}
let lbl_0000028f;
l_you_point += 1;
showTextbox();
text(() => {
   Kid`"Thanks..."`;
   `I took the pills and gulped them down.`;

});
goto(lbl_000002d2);
let lbl_000002a3;
showTextbox();
text(() => {
   Kid`"No thanks..."`;
   `I replied instantly.`;
   `I looked away from her hand.`;

});
bgload({ name: `EV_YU01B`, transition: 20 });
showTextbox();
text(() => {
   //??
   Unk(S1A013)`"What's the matter? Your head hurts, right?"`;
   Kid`"Yeah..."`;
   //??
   Unk(S1A014)`"Then if you don't take these...the pain won't go away."`;
   Kid`"..."`;
   `Pain continued to throb through my skull.`;
   `The pills in her hand would help to ease that pain...`;
   `I understood all of that.`;
   `Yet for some reason...`;
   `For some reason I wanted to look away from the medicine...`;

});
bgload({ name: `EV_YU01A`, transition: 20 });
showTextbox();
text(() => {
   //??
   Unk(S1A015)`"Oh, I get it!"`;
   //??
   Unk(S1A016)`"I see, you..."`;
   //??
   Unk(S1A017)`"You don't like the taste, right?"`;
   Kid`"..."`;
   //??
   Unk(S1A018)`"That's kind of sad."`;
   //??
   Unk(S1A019)`"But that's okay. This medicine isn't bitter at all."`;
   //??
   Unk(S1A020)`"It's more than not bitter. It's got a mellow, sweet, full flavor that floods throughout the mouth without an aftertaste..."`;
   Kid`"Ooouccch..."`;
   `My headache had gotten worse.`;
   //??
   Unk(S1A021)`"I told you so."`;
   //??
   Unk(S1A022)`"If you REALLY can't drink it then I can give it to you anally via a suppository."`;
   `For an instant I feared my chastity might be violated and grabbed the belt of my pants.`;
   Kid`"A-alright. I'll drink it...I'll drink it."`;
   `Feeling half-threatened, I drank the medicine even though I didn't want to.`;
   `It was super bitter.`;

});
goto(lbl_000002d2);
let lbl_000002d2;
showTextbox();
text(() => {
   `${voice(S1A023)}"It's probably just mild barotrauma, or decompression sickness."`;
   //??
   Unk(S1A024)`"It happens a lot to visitors..."`;
   //??
   Unk(S1A025)`"They just feel ill all of the sudden and get carted in here..."`;
   `As she said this she slyly took the cup from my hand.`;
   `I sank my head back into the fluffy pillow.`;
   //??
   Unk(S1A026)`"It's a bit of a stretch coming down here anyway."`;
   //??
   Unk(S1A027)`"People with no experience just jumping to 6 atmospheres for long periods of time. Sheesh."`;
   //??
   Unk(S1A028)`"The air pressure in the earth's atmosphere is made for people to live comfortably."`;
   //??
   Unk(S1A029)`"Of course people are going to have bad reactions to breathing air this thick."`;
   //??
   Unk(S1A030)`"Air and first love - both should be light. No doubt about that."`;
   //??
   Unk(S1A031)`"Coffee and your first TIME... well those of course are better thick."`;
   Kid`"...Huh?"`;
   `She touched my face with the palm of her hand.`;
   `The backs of her slender fingers stroked my cheek.`;
   `The smooth texture of her skin slipped down from my neck to above my chest, stopping there.`;
   //??
   Unk(S1A032)`"It's alright. You don't seem to have a fever."`;
   `She smiled at me.`;
   `Somehow I felt all embarrassed. I pulled the bedcover up to my eyes and hid my face.`;
   //??
   Unk(S1A033)`"Just rest like that for a while. Okay?"`;
   //??
   Unk(S1A034)`"I'll go see what is going on outside."`;
   Kid`"Outside?"`;

});
bgload({ name: `EV_YU01B`, transition: 20 });
showTextbox();
text(() => {
   //??
   Unk(S1A035)`"Yes.... How should I put this?"`;
   //??
   Unk(S1A036)`"While you were asleep it seems that there was a bit of trouble..."`;
   Kid`"???"`;

});
bgload({ name: `EV_YU01A`, transition: 20 });
showTextbox();
text(() => {
   //??
   Unk(S1A037)`"Well, I'll explain it later."`;
   //??
   Unk(S1A038)`"Anyway, for now just rest and don't worry about anything. Okay?"`;
   `Seeing me nod, she walked away from the bed.`;
   Kid`"Uh, hey! Wait a second!"`;
   //??
   Unk(S1A039)`"What?"`;
   Kid`"Just let me ask you one thing."`;
   //??
   Unk(S1A040)`"What might that be?"`;
   Kid`"Why...am I here?"`;
   Kid`"You just told me that this is the LeMU infirmary...right?"`;
   //??
   Unk(S1A041)`"You passed out all of the sudden at the kiosk on Zweite stock."`;
   //??
   Unk(S1A042)`"And then some guy and I...hauled you here..."`;
   //??
   Unk(S1A043)`"You don't remember what happened?"`;
   `Kiosk...at the kiosk...`;
   `In front of a big window...`;
   `A sweet...a sweet smell...`;
   `Something covering my body...`;
   `The lemur mascot...`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
showTextbox();
text(() => {
   //??
   Unk(S1A044)`"It was you, you're the one that hit me"${waitVoice}${noWait}`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `EV_YU01A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
showTextbox();
text(() => {
   `That's right! I remember!`;
   `And I was struck dizzy...`;
   `Like something being stolen away...I lost consciousness...and...`;
   //??
   Unk(S1A045)`"So? Do you remember?"`;
   Kid`"Y...yes..."`;
   //??
   Unk(S1A046)`"Do you have any other questions?"`;
   `I shook my head and answered.`;
   //??
   Unk(S1A047)`"Well be a good boy wait here, alright?"`;
   //??
   Unk(S1A048)`"I'll be right back."`;

});
bgload({ name: `BG09A1`, transition: 20 });
stopBGM();
showTextbox();
text(() => {
   `She patted my head gently and began walking for the door.`;
   `While I turned my head to stare at her back...`;

});
removeBG({ mode: WHITE, transition: 1 });
showTextbox();
text(() => {
   `'My name's You...'`;
   `'My last name is Tanaka...'`;
   `'My real name is much longer, though.'`;
   `'But, it's such a pain...just call me 'You.''`;
   `I remembered her words.`;

});
bgload({ name: `BG09A1`, transition: 10 });
showTextbox();
text(() => {
   `You turned at the door and looked back at me, lifting her hand to wave and left the infirmary.`;

});
hideTextbox();
delay({ interval: 60 });
showTextbox();
text(() => {
   `All alone inside the room, it was quiet like time had stopped.`;
   `I didn't know if the medicine had started to work or not, but my headache was completely gone.`;
   `As I stared at the ceiling I thought.`;
   `I thought about the events leading to my being in that bed...`;
   `....`;

});
hideTextbox();
showDimOverlay();
hideTextbox();
NVL_Mode();
playBGM({ num: 16, volume: 100 });
showTextbox();
text(() => {
   `Before I passed out,`;
   `I had been walking around LeMU with You.`;
   `We had gone to a shop and were talking...`;
   `Then we rode an egg-shaped elevator up two floors.`;
   `Before I had met You, I had been in a small park.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `I was on a bench in that park...`;
   `I was...waiting for someone.`;
   `Who? Who was I waiting for?`;
   `${noWait}`;
   `${nextPage(0)}I didn't know.${nextPage(1)}`;
   `${noWait}`;
   `My memory was a fog and thinking about events after that my mind just seemed to cloud over.`;
   `I shook my head several times trying to clear it and concentrate.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Why was I here?`;
   `Why had I come to LeMU?`;
   `Did I come alone? Or was I with someone else?`;
   `What was I doing before I came to LeMU?`;
   `How had I arrived at this amusement park?`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   `....................................`;
   Kid`"It's no use..."`;
   Kid`"I can't remember..."`;
   `The thread of my memory was cut off right there.`;
   `That time on the park bench enjoying ice cream...I couldn't get beyond that.`;
   `It was like getting lost in a forest and going to turn back, only to discover that everything had gone dark...`;
   `I felt very strange.`;
   `It felt just like I was in the middle of a dream.`;
   `I felt like I had lost something, something very important.`;
   `But I didn't know what that 'something' was.`;
   `And not being able to move forward made me feel that it was specifically because I had lost something important.`;
   `I felt an unpleasant sense of something lacking...`;
   `And this sense of something not quite right irritated me.`;
   `I took my right hand out from under the blanket and stared dreamily at the palm of my hand.`;
   `The countless wrinkles etched there... intertwining, reaching out like the branches of a tree in complicated patterns...`;
   `The pinkish skin...and buried deeper the slightly blue veins...`;
   `And...five fingers...`;
   `(Had my hand had always had this strange shape?)`;
   `Bizarre thoughts hit me from nowhere.`;
   `No, my right palm was no different than it had ever been.`;
   `Yet, for some reason I felt that I had to doubt even that most natural of facts.`;
   `Maybe, just possibly, until a few hours ago I might have had six fingers...`;
   `Or seven, or maybe even eight...`;
   `I felt like something was wrong.`;
   `Could I have been feeling this way because... I lost 'something special?'`;
   `I opened and closed and opened and closed my hand...just repeating that meaningless, simple exercise.`;
   `I wandered in the forest.`;
   `Searching for that one lost finger...`;

});
removeBG({ mode: BLACK, transition: 1 });
stopBGM();
delay({ interval: 60 });
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG09A1`, transition: 20 });
clock(`15:42`);
showTextbox();
text(() => {
   `The door to the infirmary opened and You returned.`;
   `You dashed into the room and ran toward me as if she were going to bowl me over...`;

});
fgload({ id: 1, name: `YU04BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A049)`"What are you doing? This is no time to be sleeping!"`;
   `She shouted at me suddenly.`;
   Kid`"???"`;
   `Completely clueless, I simply laid there, stunned.`;
   You(S1A050)`"Get up quickly!"`;
   `You peeled away the blanket and dragged me off of the bed.`;
   Kid`"What...what's the matter?"`;
   You(S1A051)`"I dunno!"`;

});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A052)`"I dunno, but...anyway, we've gotta escape out of here!"`;
   `You had a panicked expression.`;
   `The relaxed look that had been on her face just a while ago had vanished completely.`;
   Kid`"Escape...to where?"`;

});
fgload({ id: 1, name: `YU04BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A053)`"There's only one place!"`;
   You(S1A054)`"The floating island on the ocean!"`;
   Kid`"Why?"`;
   You(S1A055)`"Because I say! Don't ask questions!"`;
   You(S1A056)`"We're escaping because we have to escape!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `There was something urgent and powerful in You's words. `;
   `You dragged me along...`;
   `From her powerful grip I felt a sharp sense of crisis.`;
   `I hurriedly slipped on my sneakers and fled out of the room with her.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `BG25A3`, transition: 26 });
playBGM({ num: 15, volume: 97 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `The instant we emerged into the sprawling corridor, my feet stopped.`;
   `I sucked in my breath, my body froze and I just stared at the light spreading before me.`;
   `There was something missing.`;
   `People...sound...warmth...`;
   Kid`"No way...this can't be..."`;
   `The words I muttered were devoured by the eerie silence.`;
   `Looking back and forth in the corridor... even in the furthest direction, there was no sign of people.`;
   `Just the man-made walls on both sides... `;
   `Unnatural light, whiter than white, shone from the ceiling and gave off a cold light.`;
   Kid`"Wh-why..."`;
   Kid`"Why...isn't anyone here...?"`;

});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A057)`"You get it now?"`;
   You(S1A058)`"That's why we have to escape."`;
   Kid`"Everyone...where could everyone be...?"`;

});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A059)`"Do you think they're playing hide-and-seek?"`;
   Kid`"........."`;

});
fgload({ id: 1, name: `YU04BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A060)`"Anyway, there is no time to think about it now."`;
   You(S1A061)`"We need to get out of here ASAP, or..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Saying that, You again tugged my arm.`;
   `Hunched over and on the verge of tripping I let You lead me through the wide corridors  as we ran.`;

});
bgload({ name: `BG26A3R`, transition: 20 });
playSFX({ name: `SE01_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Our footsteps were the only sound echoing in the quiet complex.`;
   `The more we ran, the more out of breath I became. My heart was pounding.`;
   `Really everything just felt like a dream.`;
   `A nightmare in which some unknown monster was chasing us everywhere...`;
   `With no clue as to the identity of the monster, nor why we needed to escape.`;
   `Hair-raising fear rose within me, and I was powerless to do anything. I simply cowered.`;
   `In a world devoid of people...`;
   `Among faded colors...`;
   `Just You's palms grasped my arm...`;
   `Only the certainty of her touch - that one point of contact - allowed me to retain any connection with reality.`;

});
bgload({ name: `BG22A3`, transition: 20 });
stopSFX()
showTextbox();
text(() => {
   `Finally, we arrived in front of the elevator.`;
   `You rushed to the front of the door and pushed the up button.`;

});
fgload({ id: 1, name: `YU11BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You`"........."`;
   Kid`"........."`;
   `The button was unlit.`;

});
fgload({ id: 1, name: `YU14BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A062)`"Oh, no way! You've got to be kidding!?"`;
   You(S1A063)`"Why is this thing stopped?"`;

});
playSFX({ name: `SE04_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `You struck the button repeatedly.`;
   `But nothing happened. The light stayed off.`;
   `There was no sign that the floor display above the elevator doors was functioning either.`;
   Kid`"Hey! Aren't there any emergency stairs or anything?"`;

});
hideTextbox();
fgload({ id: 1, name: `YU17BDM`, x: 320, useAnim: true });
delay({ interval: 30 });
fgload({ id: 1, name: `YU13BDM`, x: 320, useAnim: true });
delay({ interval: 60 });
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `You looked back and shifted her eyes around as if she were thinking...`;

});
fgload({ id: 1, name: `YU04BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A064)`"Follow me!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Saying only that, she dashed off.`;

});
bgload({ name: `BG25A3`, transition: 20 });
playSFX({ name: `SE01_04`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `—Straight down that long, stretching corridor.`;
   `You turned her head to the left and right looking for something.`;
   `It looked like she soon found what she was looking for.`;
   `And she headed toward it single-mindedly.`;
   `A ladder...next to it was written in straight red letters 'Emergency exit' with an arrow pointing upward.`;
   `At the other end of the ladder was the ceiling and a sturdy looking door, with a round-shaped handle attached to it.`;
   Kid`"Are there emergency stairs on the other side?"`;
   `Without answering, You started climbing the ladder.`;

});
playSFX({ name: `SE10_16`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `She turned the handle and opened the door.`;

});
playSFX({ name: `SE00_07`, a1: 0, volume: 100 });
fgload({ id: 1, name: `YU04BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A065)`"Now hurry!"`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeFG({ id: 1, useAnim: false });
bgload({ name: `BG28A3R`, transition: 26 });
playSFX({ name: `SE01_06`, a1: 0, volume: 95 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   You(S1A066)`"This is an emergency escape corridor."`;
   You(S1A067)`"There are emergency stairs that run along it." `;
   `You told me this quickly while we ran.`;
   `The corridor stretched in a gentle arc so that the far end was not visible.`;
   `The scenery was repetitive and I began to have delusions that I was running in place.`;
   `(Where in the world am I right now?)`;
   `(How far do I have to run?)`;
   `I just had to trust in You and chase after her back.`;

});
bgload({ name: `BG27A3`, transition: 20 });
showTextbox();
text(() => {
   `Suddenly, You turned right.`;
   `Inertia kept me going forward. Afraid I would miss the turn I grabbed the corner with my hand, yanking myself around and chasing after You again.`;
   `The route had become straight.`;
   `Immediately to the left, a green colored sign for emergency stairs was lit up.`;
   `Below the light was a closed door...`;
   `You jumped toward the door's handle.`;

});
stopSFX()
showTextbox();
text(() => {
   You(S1A068)`"Hurrfff...hurrffff..."`;
   You(S1A069)`"This is stiff.... This is so..."`;
   `You was desperately trying to turn the handle...`;
   Kid`"It won't open?"`;

});
fgload({ id: 1, name: `YU05BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A070)`"It'll open! It'll open for sure! I'll make it open!"`;

});
fgload({ id: 1, name: `YU04BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A071)`"Well, don't just stand there. Get over here and help me!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Spurred by her words, I firmly grabbed on to the handle.`;
   `I tried with all my might to turn it in the direction of the arrow that said 'open.' `;
   Kid`"Damn...what's with this..."`;
   Kid`"It...won't budge...an inch..."`;
   `It was stuck fast, almost as if it had been welded shut. It didn't look like it would move to the right or left.`;

});
fgload({ id: 1, name: `YU01BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A072)`"We'll try to turn it when I say 'Ready, go.'"`;
   You(S1A073)`"Okay? Here we go."`;
   You(S1A074)`"Ready, go!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `With that I threw my complete weight onto the handle.`;
   Kid`"Ummmpphh.... Damn..."`;
   Kid`"O-P-E-NNNNNNNN!!!"`;

});
stopBGM();
showTextbox();
text(() => {
   `—Just then it happened.`;

});
hideTextbox();
playSFX({ name: `SE09_00L`, a1: 0, volume: 100 });
eff_4f = 0;
eff_3b = 1;
eff_3c = VAR_c1_0_6;
eff_3d = 1;
eff_3e = 2;
eff_3f = VAR_c2_0_6;
eff_40 = 2;
openShakeScreenAnim();
showTextbox();
text(() => {
   `A sound arose up as if from inside the earth, echoing heavily from somewhere.`;
   `You and I relaxed our grips and looked at each other.`;

});
fgload({ id: 1, name: `YU06BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A075)`"What...? What was that sound...?"`;

});
eff_41 = 9;
eff_42 = 6;
eff_50 = 0;
showDimInAndOutAnim();
showTextbox();
text(() => {
   `The walls shook.`;
   `A small vibration shook the handle we had grabbed.`;
   `The lights on the ceiling...flashed irregularly...`;
   `The metal mesh floor was clanging against itself.`;
   Kid`"An...earthquake...?"`;

});
fgload({ id: 1, name: `YU05BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A076)`"It couldn't be..."`;
   You(S1A077)`"We're..."`;

});
showTextbox();
text(() => {
   You(S1A078)`"We're..."`;

});
fgload({ id: 1, name: `YU04BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A079)`"In the middle of the ocean, after all..."`;

});
hideTextbox();
eff_4f = 0;
eff_3b = 1;
eff_3c = VAR_c3_0_6;
eff_3d = 2;
eff_3e = 2;
eff_3f = VAR_c6_0_6;
eff_40 = 6;
showTextbox();
text(() => {
   `The vibration gradually increased in intensity.`;

});
fgload({ id: 1, name: `YU03BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `The squeaking sound of steel against steel shocked our ears.`;
   `You and I held our breath, waiting still.`;
   `We tried to focus, sharpening our senses, our eyes wandering the void.`;
   `A low growling sound...`;
   `Like the groan of a monster...`;
   `A monster...approaching...`;
   `A voice filled hate and rage turned to a howling roar, sending shivers up my spine.`;
   Kid`"Where is that coming from?!"`;

});
fgload({ id: 1, name: `YU06BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A080)`"Huh?"`;
   Kid`"Where? Where is it coming from?"`;
   You(S1A081)`"What?!"`;
   `You's voice approached a scream.`;
   `Her face lost all color...and her lips went dry...`;
   `The eyes behind her silky, swaying bangs looked as if they were about to cry.`;
   `(...Silky...swaying...bangs?)`;
   Kid`"Wind..."`;
   Kid`"It's wind..."`;
   `Muttering this I looked in the direction of the wind.`;
   `Down the extremely long corridor.`;
   `Something appeared pushing and vying for space.`;

});
hideTextbox();
eff_4f = 0;
eff_3b = 1;
eff_3c = VAR_c7_0_6;
eff_3d = 4;
eff_3e = 2;
eff_3f = VAR_ca_0_6;
eff_40 = 10;
showTextbox();
text(() => {
   You(S1A082)`"No way..."`;

});
fgload({ id: 1, name: `YU03BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A083)`"You're kidding..."`;

});
fgload({ id: 1, name: `YU05BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A084)`"It couldn't be..."`;

});
fgload({ id: 1, name: `YU04BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A085)`"Water?!"`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
showTextbox();
text(() => {
   `A monster came crashing toward us at a terrifying speed, mixed in a roiled spray of water...`;

});
closeDimInAndOutAndFilterAnim();
closeShakeScreenAnim();
stopSFX()
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
unSkippableDelay(3);
unSkippableDelay(1);
playMovie(`MOV02A`);
unSkippableDelay(1);
unSkippableDelay(1);
monoColorOverlay({ interval: 12, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
playBGM({ num: 10, volume: 100 });
showTextbox();
text(() => {
   `There was no doubt!`;
   `It was a rushing behemoth of water...`;
   `A massive froth of waves!`;
   Kid`"Ah!!!"`;
   `It was not the time to be shouting.`;
   `You and I started sprinting desperately.`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG28A3L`, transition: 26 });
eff_4f = 0;
eff_3b = 1;
eff_3c = VAR_c3_0_6;
eff_3d = 2;
eff_3e = 2;
eff_3f = VAR_c6_0_6;
eff_40 = 6;
openShakeScreenAnim();
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
showTextbox();
text(() => {
   `We turned left at the corner and ran.`;
   `And ran and ran.`;
   `The voice of the monster was right on our heels.`;
   `But we couldn't look back.`;
   `If we looked back, we felt like we would be swallowed up.`;
   `Something beyond fear, or terror had made our minds go completely blank.`;
   `We couldn't even think.`;
   `We could only run desperately for our lives.`;
   `My shoulder bumped against the wall of the narrow corridor.`;
   `It looked like my foot would get caught up in the bent metal flooring.`;
   `Avoiding the pipes that hung down, we leaped over the raised entrance of the watertight door and ran.`;
   `We just ran on and on.`;
   `(This has got to be a dream...)`;
   `For an instant, that thought cut across my mind.`;
   `In a world without people...`;
   `And faded colors...`;
   `A drooling monster was reaching its bluish-white arms out toward my neck.`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
playSFX({ name: `SE02_06`, a1: 0, volume: 100 });
bgload({ name: `BG25B3`, transition: 26 });
closeShakeScreenAnim();
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
showTextbox();
text(() => {
   `We were spit out with the mass of water into a sprawling room.`;
   `We were turned head over heel in the violent water.`;
   `Several times, maybe several dozen times, over and over again...`;
   `Until finally my body stopped moving.`;
   Kid`"Ouch...owwwwooouch..."`;
   `I peeled my body from the soaked floor.`;
   `Water was still pouring in from the far side of the open emergency entrance.`;
   `Water was flowing down like a waterfall and spreading smoothly toward the far corridor as if it were crawling across the floor.`;
   `(That's right! What about You!?)`;

});
fgload({ id: 1, name: `YU03BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Just as I thought that and looked back, You was standing up.`;
   Kid`"You okay?"`;
   `I shook the soaked You's shoulders and looked into her eyes.`;
   `They were empty...`;
   `Here purplish-blue lips were quivering.`;
   `You was completely dazed.`;
   Kid`"You! You! Hang on!"`;
   You`"........................."`;
   `The level of water had continued to rise during this short time.`;
   Kid`"Ah! What should I do? What should I..."`;
   `—Just then it happened!`;

});
playSFX({ name: `SE00_03`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `The watertight doors at the four sides of the room began to close at once.`;
   `(The doors are closing...)`;
   `Ever so slowly, letting off a dull sound...`;
   Kid`"You!! You!!"`;
   `I tried shouting, and even shaking her harder, but there was no response.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Rather, You's body went limp and she collapsed to the floor.`;
   Kid`"Hey! Quit goofing around! Come on!"`;
   `I took You's arm and put it over my shoulder, lifting her up.`;
   `I started walking toward the nearest watertight door.`;
   `You was heavy like a stone.`;
   `Water pooled around both my legs and I couldn't move forward as fast as I wanted.`;

});
playSFX({ name: `SE00_03`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `Gradually a steel partition slid down from above.`;
   `Another one came up from below, pushing away water as it moved.`;
   `The stopped up water swirled around.`;
   `As the width between the doors narrowed, the water level increased.`;
   `(Come on! Make it in time! Please just make in time...!)`;

});
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `Sadly, the door didn't stop moving.`;
   `There was only a small opening left for us to escape.`;
   Kid`"Whoooaaaaa!!!"`;
   Kid`"There's no way I'm going to die here!!!"`;
   `Giving a shout, I ran, pushing the water out  of the way.`;
   `You's slumping body weighed heavily on my shoulder.`;
   `But I couldn't let go of her arm.`;
   `I pulled together all my power.`;
   `(Almost there...!)`;

});
playSFX({ name: `SE00_03`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `(Almost...right there...!)`;
   `—Thwump!`;
   `—With one hand I had grabbed hold of the edge of the `;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: WHITE });
stopBGM();
playSFX({ name: `SE00_04`, a1: 0, volume: 100 });
bgload({ name: `BG26B1L`, transition: 26 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
showTextbox();
text(() => {
   `Just barely.`;
   `Just a few seconds after I had squeezed our bodies through that narrow gap, the watertight door closed completely.`;
   `We placed our backs against the closed door and collapsed.`;
   `There was almost no sense of relief.`;
   `Both of my legs were shaking, and my heart was beating like it would explode.`;
   `We spent a few moments there in a stupor.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `BG26A1L`, transition: 26 });
playBGM({ num: 3, volume: 100 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
clock(`16:15`);
showTextbox();
text(() => {
   `The next thing I knew, the seawater had mostly disappeared from the floor.`;
   `That's not to say that it was completely dry. It was still wet.`;
   `And my body and You's body...`;
   You(S1A086)`"Ah..ah...achhhooo!"`;
   `...We were still soaked.`;
   Kid`"Are you alright?"`;

});
fgload({ id: 1, name: `YU06BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A087)`"Huh? What?"`;
   Kid`"You were really out of it until just a second ago..."`;

});
fgload({ id: 1, name: `YU07BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A088)`"Who was?"`;
   Kid`"You were."`;
   You(S1A089)`"Me? I was?"`;
   `You stood up and took her wet hair in hand.`;
   `Wiping away the water droplets around her eyes with the palm of her hand...`;

});
fgload({ id: 1, name: `YU06BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A090)`"Oh! That's right!"`;

});
fgload({ id: 1, name: `YU04BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A091)`"The water carried us away!"`;
   You(S1A092)`"Carried! And carried! And carried us away!"`;

});
fgload({ id: 1, name: `YU07BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A093)`"...And...and what happened?"`;
   Kid`"We got swept into the next corridor over."`;
   Kid`"And then all of a sudden the watertight doors started to close..."`;
   Kid`"But You, you were all spacey..."`;
   Kid`"And to make things worse, you fainted..."`;

});
fgload({ id: 1, name: `YU06BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A094)`"So how did we get out?"`;
   Kid`"I got us out!"`;

});
fgload({ id: 1, name: `YU07BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A095)`"You?"`;
   Kid`"Yup..."`;
   You(S1A096)`"Really?"`;
   Kid`"What? You don't believe me?"`;
   You(S1A097)`"But..."`;

});
fgload({ id: 1, name: `YU01BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A098)`"You...well, you seem more like the type that needs help rather than dishes help out."`;
   Kid`"What? What's that supposed to mean?"`;

});
fgload({ id: 1, name: `YU02BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A099)`"Oh, it's a joke. I'm just kidding..."`;
   You(S1A100)`"If you really did save us, I suppose I should thank you."`;
   You(S1A101)`"Thank you."`;
   `You bowed her head slightly.`;
   Kid`"Do you really mean it?"`;

});
fgload({ id: 1, name: `YU08BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A102)`"Of course...I guess."`;
   Kid`"You guess?"`;
   You(S1A103)`"I said I was joking."`;

});
fgload({ id: 1, name: `YU02BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A104)`"You take everything so seriously.... You're just an innocent young'un!"`;
   Kid`"........."`;

});
fgload({ id: 1, name: `YU08BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You`"........."`;
   Kid`"Oh, whatever..."`;
   Kid`"Well, I suppose I owed you one anyway..."`;

});
fgload({ id: 1, name: `YU05BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A105)`"Owe me?"`;
   Kid`"When I collapsed at the shop, you helped me right?"`;
   Kid`"So now we're even..."`;

});
fgload({ id: 1, name: `YU02BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `When I said that, You's face lit up in a smile.`;
   Kid`"Anyway, enough of that. Let's hurry up and find an exit!"`;

});
fgload({ id: 1, name: `YU01BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A106)`"Yeah..."`;
   You(S1A107)`"You never know when there might be another flooding..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `You was checking the ceiling and walls as she started walking.`;
   `I followed along behind her.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
bgload({ name: `BG02A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`16:20`);
showTextbox();
text(() => {
   `We cut across the wide room heading for the exit.`;
   `There was a big empty, mechanical merry-go-round.`;
   `Without music or the voices of children playing...`;
   `Only its bright lights glowed in a lonely sort of way.`;

});
fgload({ id: 1, name: `YU01BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A108)`"Hey."`;
   You(S1A109)`"That reminds me, I haven't even asked your name yet?"`;
   Kid`"...Huh?"`;
   You(S1A110)`"Name. Your name."`;
   Kid`"Oh...yeah..that..."`;
   Kid`"Um...I'm..."`;
   Kid`"...My...name is..."`;
   Kid`"...name...is..."`;
   Kid`"..."`;

});
fgload({ id: 1, name: `YU07BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A111)`"And?"`;

});
hideTextbox();
playBGM({ num: 13, volume: 100 });
showTextbox();
text(() => {
   `I...I didn't know.`;
   `I didn't know...my name...`;
   `My name...`;
   `There's no way! It couldn't be!`;
   `(I should know it.)`;
   `It's my name! My very own name!`;
   `Name...name...name...name...`;
   `—Then all of the sudden a shock shot through my whole body.`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
playSFX({ name: `SE10_11`, a1: 0, volume: 100 });
bgload({ name: `IMG04A`, transition: 26 });
eff_41 = 21;
eff_42 = 4;
eff_50 = 0;
showDimInAndOutAnim();
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
showTextbox();
text(() => {
   Kid`"Oooh...arggh..."`;
   You(S1A112)`"What's the matter?"`;
   `My head hurt...`;
   `It seemed like it would split right open...`;
   `I held my head in both arms and crumpled forward.`;
   You(S1A113)`"Are you alright?"`;
   `Grinding my teeth, I desperately tried to endure the pain.`;
   `Darkness blanketed my eyes...`;
   `I couldn't see anything. I couldn't hear anything.`;
   `The darkness invaded my brain and glommed together.`;
   `It was a glob that would devour my brain...`;
   `And dissolve it...into...mush...`;
   You(S1A114)`"Hey! Hang in there! Hey!"`;
   `I didn't know...`;
   `I didn't know...my name...`;
   `Who could I...`;

});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
closeDimInAndOutAndFilterAnim();
stopBGM();
removeBG({ mode: BLACK, transition: 62 });
hideTextbox();
NVL_Mode();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `


${noWait}`;
   `${center}${nextPage(0)}possibly be...?${nextPage(1)}${wait(60)}${noWait}`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
delay({ interval: 120 });
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG09A1`, transition: 26 });
hideTextbox();
ADV_Mode();
setMonoColorOverlayFadeOutDuration(46);
fadeOutMonoColorOverlay();
unSkippableDelay(33);
clock(`16:53`);
showTextbox();
text(() => {
   `The next thing I knew, I was on a bed.`;
   `The ceiling was so white it was slightly blinding...`;
   `It smelled of disinfectant...`;

});
hideTextbox();
playBGM({ num: 2, volume: 100 });
fgload({ id: 1, name: `YU03BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A115)`"Are you awake now?"`;
   `A shadow passed above me on the bed.`;
   Kid`"You..."`;
   `You looked at me as if she were worried.`;
   Kid`"This is..."`;

});
fgload({ id: 1, name: `YU07BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A116)`"Back to the beginning...thanks to you."`;
   Kid`"The beginning...?"`;
   Kid`"The infirmary, huh..."`;

});
fgload({ id: 1, name: `YU05BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A117)`"Hey, next time you decide to go and keel over, can you do it somewhere a little closer to this room?"`;
   You(S1A118)`"Because it was really a pain hauling you piggyback all the way here..."`;
   Kid`"S...sorry..."`;

});
fgload({ id: 1, name: `YU07BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A119)`"Oh, it's alright. You don't have to apologize..."`;

});
fgload({ id: 1, name: `YU01BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A120)`"By the way..."`;
   You(S1A121)`"Did you remember? Your name."`;
   `Name...`;

});
playBGM({ num: 16, volume: 100 });
showTextbox();
text(() => {
   `That's right...My name...`;

});
fgload({ id: 1, name: `YU06BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A122)`"Oh! Hold on a sec!"`;

});
fgload({ id: 1, name: `YU03BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A123)`"You don't have to try to force yourself to remember!"`;
   Kid`"..."`;
   You(S1A124)`"I don't want you getting like you did before...alright?"`;
   `You said it very carefully.`;

});
fgload({ id: 1, name: `YU01BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A125)`"I'm gonna ask you a couple of questions..."`;
   You(S1A126)`"So just calm down...I want you to relax and answer them."`;

});
fgload({ id: 1, name: `YU02BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A127)`"Alright?"`;
   Kid`"S-sure..."`;

});
fgload({ id: 1, name: `YU01BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A128)`"First, do you know...today's date?"`;
   Kid`"Today is..."`;
   Kid`"...the first..."`;
   Kid`"May first, right?"`;

});
fgload({ id: 1, name: `YU07BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A129)`"You remember the date..."`;

});
fgload({ id: 1, name: `YU01BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A130)`"So how about your age?"`;
   Kid`"Age...?"`;
   You(S1A131)`"Your birthday will do...either way."`;
   `I tried hard to pull together the threads of my memory.`;
   `My age...my birthday...`;
   `When I started to think about it, my temples began to throb.`;

});
fgload({ id: 1, name: `YU05BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A132)`"Hey, no straining yourself!"`;
   You(S1A133)`"If you can't remember, then you can't remember. Just say so."`;
   `But that didn't mean I could just stop thinking about it.`;
   `I endured the headache as I felt like I wandered lost through a forest.`;
   `There had to be an exit hidden somewhere.`;
   `I just didn't know where...`;

});
fgload({ id: 1, name: `YU01BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A134)`"Okay, I got it."`;
   You(S1A135)`"So you don't remember your name, age or birthday, right?"`;

});
fgload({ id: 1, name: `YU07BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A136)`"How about your address or telephone number?"`;
   You(S1A137)`"If not those, then how about your family, friends...or anything..."`;
   Kid`"..."`;

});
fgload({ id: 1, name: `YU03BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A138)`"So you can't remember?"`;

});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   `It was just like You said.`;
   `I didn't have any memories of anything.`;
   `A sense of something not being right gnawed at my mind.`;
   `No, it was something closer to a sense of loss.`;
   `I felt that I had lost the bulk of my existence.`;
   `Like someone had stolen 'Me' away. And the 'Me' that was left was just an empty shell.`;
   `The 'Me' that was here...who knew if it was even the real me?`;
   `The instant that thought went through my mind, I was frozen by an icy wave of unease.`;
   `Scared, isolated, lonely,...`;

});
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
showTextbox();
text(() => {
   Kid`"You..."`;
   `I grabbed firmly on to You's hand.`;

});
fgload({ id: 1, name: `YU06BWL`, x: 320, useAnim: true });
fgload({ id: 1, name: `YU02BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Her warm palm...`;
   `That warmth was the only thing saving me.`;
   You(S1A139)`"It's alright now."`;
   You(S1A140)`"What are you a baby? Stop with that sad face."`;
   `She shot me a smile as she squeezed my hand back.`;
   You(S1A141)`"I don't think that amnesia is all that uncommon."`;
   Kid`"Amnesia...?"`;

});
fgload({ id: 1, name: `YU07BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A142)`"You don't have any memory, so that's memory loss or amnesia, right? Of course it is."`;
   You(S1A143)`"I wonder what caused it..."`;
   You(S1A144)`"The air pressure change...or maybe you hit your head somewhere..."`;
   You(S1A145)`"Or some severe mental shock maybe."`;

});
fgload({ id: 1, name: `YU05BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A146)`"Like riding a crazy ride and maybe you panicked, or something."`;
   Kid`"..."`;

});
fgload({ id: 1, name: `YU01BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A147)`"But don't worry."`;
   You(S1A148)`"It's probably just temporary. It'll come back "`;
   Kid`"Think so?"`;

});
fgload({ id: 1, name: `YU02BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A149)`"For sure!"`;
   You(S1A150)`"Of course if you were in a major accident and had severe trauma to the brain, that would be a whole different thing."`;
   You(S1A151)`"But that doesn't seem to be the case..."`;
   `You put her hand on my hair and gave me a smile so bright I almost needed sunglasses.`;
   `That smile flooded into my heart, wiping away the remains of the unease that was swirling there.`;

});
hideTextbox();
stopBGM();
fgload({ id: 1, name: `YU01BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A152)`"So, do you want to get going?"`;
   You(S1A153)`"I could sing you a lullaby and tuck you in, but..."`;
   You(S1A154)`"Unfortunately, we don't have time to relax."`;
   You(S1A155)`"You understand, right?"`;
   `I nodded and got off of the bed.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `You started walking for the door.`;
   `My eyes stopped on the bluish ribbon on You's back.`;
   `The ribbon seemed to have taken on water and glittered brightly, like the wings of a newborn fairy.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `BG29A1`, transition: 26 });
delay({ interval: 90 });
playSFX({ name: `SE00_15`, a1: 1, volume: 100 });
waitForSFX();
fgload({ id: 1, name: `YU07BWM`, x: 320, useAnim: false });
playBGM({ num: 3, volume: 100 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
clock(`17:1`);
showTextbox();
text(() => {
   You(S1A156)`"It's no good...it doesn't seem to open..."`;
   `You said that after trying to move the door with her weight several times.`;
   `These were the emergency stairs.`;
   `Or more accurately, it was the passage on the way there.`;
   `The emergency stairs wound spiral-like around a fat pipe.`;
   `If we followed these stairs, they would take us to the floating island...at least in theory.`;
   `But now right in front of us stood a thick steel wall.`;
   `The wall had a small watertight door and if we couldn't squeeze through that, then we couldn't make our way any higher.`;
   Kid`"This isn't...the floating island yet, is it...?"`;

});
fgload({ id: 1, name: `YU04BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A157)`"It's pretty obvious, isn't it?"`;
   You(S1A158)`"Not even. I mean we haven't even hit Erste boden, so we've still got a long way to go..."`;
   Kid`"Erste boden, was that the basement floor one?"`;

});
fgload({ id: 1, name: `YU05BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `You nodded...`;
   Kid`"What does that mean in terms of depth? How deep is it?"`;
   You(S1A159)`"Let's see...Zweite stock is 102 feet deep, so..."`;
   You(S1A160)`"Around 90 feet, give or take I guess..."`;
   You(S1A161)`"We've only climbed around 12 or 15 feet on these stairs."`;
   `90 feet deep...`;
   `90 feet sounded so close, but...`;
   `But, in any event, if the door didn't open up, then that was it.`;
   Kid`"Hey. I wonder why it won't open."`;

});
fgload({ id: 1, name: `YU07BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A162)`"Who knows...?"`;
   You(S1A163)`"Maybe there is a secret spell or something."`;
   Kid`"Spell...you mean like 'Open sesame?' That kinda spell?"`;

});
fgload({ id: 1, name: `YU08BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A164)`"There you go taking me seriously..."`;
   Kid`"Well what then?"`;

});
fgload({ id: 1, name: `YU01BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A165)`"You really wanna know?"`;
   Kid`"Yeah..."`;

});
fgload({ id: 1, name: `YU07BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A166)`"Maybe you'd better not ask."`;
   Kid`"...Huh?"`;
   You(S1A167)`"So what're you gonna do? Do you wanna hear it? Or not? Which is it?"`;

});
choice(
   `Ask`,
   `Don't ask`,
);
switch (l_choice) {
   case 0: goto(lbl_0000122a);
   case 1: goto(lbl_00001255);
}
let lbl_0000122a;
l_you_point += 1;
showTextbox();
text(() => {
   Kid`"Ask"`;

});
fgload({ id: 1, name: `YU02BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A168)`"Alright then. I'll tell you."`;
   Kid`"..."`;

});
goto(lbl_000012e1);
let lbl_00001255;
showTextbox();
text(() => {
   Kid`"I don't want to know."`;
   You(S1A169)`"Huh?"`;

});
fgload({ id: 1, name: `YU04BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A170)`"Why not? Ask away!"`;
   Kid`"But you said that I'd better not ask, right?"`;

});
fgload({ id: 1, name: `YU08BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A171)`"You are so naive."`;
   Kid`"What's wrong with being naive?"`;

});
fgload({ id: 1, name: `YU07BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A172)`"Nothing's wrong with it...but you miss out...somehow."`;
   Kid`"........."`;

});
fgload({ id: 1, name: `YU01BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A173)`"Whatever. Anyway I'll tell ya."`;
   Kid`"I said, I don't want to hear."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU10BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A174)`"Be quiet! Shut up and listen already!"`;
   Kid`"........."`;

});
removeFG({ id: 1, useAnim: true });
goto(lbl_000012e1);
let lbl_000012e1;
fgload({ id: 1, name: `YU01BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A175)`"You just were talking about how the watertight doors started closing all of the sudden, right?"`;
   Kid`"Yeah."`;
   You(S1A176)`"That means that the doors closed automatically..."`;
   Kid`"Closed automatically?"`;
   You(S1A177)`"LeMMIH detected flooding and automatically shut the doors in the areas that were in danger."`;
   Kid`"Uh...what's 'LeMMIH?'"`;
   You(S1A178)`"That's what we call the main computer that supervises and manages all of the electronic systems in LeMU."`;
   Kid`"Hmmmm."`;
   Kid`"...So what?"`;

});
fgload({ id: 1, name: `YU07BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A179)`"So what? So probably this..."`;

});
playSFX({ name: `SE00_14`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `Clang, clang. You knocked on the steel door with her lightly closed fist.`;

});
fgload({ id: 1, name: `YU01BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A180)`"This...was probably closed by 'LeMMIH' as well."`;
   Kid`"I see..."`;
   Kid`"So in other words, the other side of this door is flooded with water."`;

});
fgload({ id: 1, name: `YU03BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A181)`"Probably."`;
   `She had been right. It really wasn't something I had wanted to hear.`;
   `If the door were simply locked, all we had to do was find a way to open it and we could climb up to freedom.`;
   `But if the other side was full of seawater, then...`;
   `Thinking beyond that was no fun.`;
   Kid`"So what do we do now?"`;

});
fgload({ id: 1, name: `YU05BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A182)`"So we check out the other emergency stairs..."`;

});
fgload({ id: 1, name: `YU07BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A183)`"That's all we can do, right?" `;
   `You said it with a sigh and started heading down the stairs.`;

});
l_choice = 0;
jump(`S_1A2`);
