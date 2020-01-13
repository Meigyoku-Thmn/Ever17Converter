varop(`(28 0a a4) b0 := (00) 5`);
varop(`(28 0a a4) b1 := (00) 5`);
varop(`(28 0a a4) b2 := (00) 5`);
setDialogBoxColor(GREEN);
playBGM({ num: 3, volume: 100 });
bgload({ name: `BG07B1`, transition: 20 });
setSceneTitle({ index: 34 });
clock(`19:1`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It was time for dinner.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I made enough sandwiches for everyone and 
passed them out.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone moved with them to the rest area.`;
   waitForClick; clearText; 
});
bgload({ name: `BG21B1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We gathered on the circular stage in the 
center of the room, and began eating.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO15ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`At a wave of Sora's hand, a gentle rain 
started pouring from the ceiling sprinklers 
onto the flowerbeds.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was even a small rainbow.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO16ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Smiling, Sora stared at the fresh flowers and 
the sparkling rainbow.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
goto(lbl_000000f6).if(var_da == 0);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Her smile was so carefree...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't want to think it wasn't real.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't want to think she was just 
pretending for our benefit.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Was she really smiling because she wanted to, 
or was she just trying to cheer us up?`;
   waitForClick; clearText; marker; appendText; 
   Narr`'We don't need to try to help Sora, she will 
save herself.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`This thought wouldn't leave my mind.`;
   waitForClick; clearText; 
});
goto(lbl_000000fb);
let lbl_000000f6;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I wondered how long I could watch the little 
peaceful world she had created.`;
   waitForClick; clearText; marker; appendText; 
   Narr`How long could I keep looking at her smiling 
face?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Thinking about it made me feel lonely.`;
   waitForClick; clearText; 
});
let lbl_000000fb;
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Then again there were others here too - one of 
them opening her mouth so wide, it didn't 
seem it would open any more.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Now, SHE looked right happy.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 18, volume: 100 });
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C000`); appendText; 
   //You
   You`"Takeshiiiii!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`And had flipped off the wrapping paper...`;
   waitForClick; clearText; marker; sound(`T5C001`); appendText; 
   //You
   You`"I want another sandwich. Pleeeeeeaaase!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C002`); appendText; 
   //You
   You`"Would you be so kind as to make another one 
and bring it here....? Pretty pleeeeaaase?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She called out to me in a voice that seemed 
just a little TOO sweet.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed to me that she had been crying 
earlier, but it must have been my 
imagination...`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Alright, alright. You're such a 
slave-driver...heh, heh."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU15BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C003`); appendText; 
   //You
   You`"What was that? Did you say something?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Nothing at all, milady."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU16BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C004`); appendText; 
   //You
   You`"Just as long as you realize who's in charge. 
Oh, ho, ho, ho, ho..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Reluctantly, I trudged back into the kitchen.`;
   waitForClick; clearText; 
});
bgload({ name: `BG07B1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(I can't believe that girl...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`It wasn't like they were that hard to make.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We had plenty of provisions.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Still I was irritated somehow, as I waited 
for the cold oil to heat up again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I anxiously fidgeted as I waited.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The wire basket struck the frying pan with a 
clang.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I'll just get this done as soon as I can...)`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C005`); appendText; 
   //Tsugumi
   Tsugumi`"Hey..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`A 'customer' had showed up without warning.`;
   waitForClick; clearText; marker; sound(`T5C006`); appendText; 
   //Tsugumi
   Tsugumi`"I'd like to ask for another one, if that's 
okay."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"GEEEZ!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C007`); appendText; 
   //Tsugumi
   Tsugumi`"W-what, Takeshi..."`;
   waitForClick; clearText; marker; sound(`T5C008`); appendText; 
   //Tsugumi
   Tsugumi`"Did I catch you at a bad time...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi looked annoyed.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Eh? T-Tsugumi!?"`;
   waitForClick; clearText; marker; sound(`T5C009`); appendText; 
   //Tsugumi
   Tsugumi`"...Um...."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C010`); appendText; 
   //Tsugumi
   Tsugumi`"You don't want to make one?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh? Uh, no it's just..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Don't worry about it. It's okay."`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Alright, settle down...) `;
   waitForClick; clearText; marker; appendText; 
   Narr`I'd allowed myself to get worked up...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Trying to shake off my frustration, I 
replied...`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You just want one?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C011`); appendText; 
   //Tsugumi
   Tsugumi`"Yeah, thanks. Oh, yeah, one more thing..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi said this as she turned around.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C012`); appendText; 
   //Tsugumi
   Tsugumi`"What about you, Coco?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `CO15ADM`, name2: `TU11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C013`); appendText; 
   //Coco
   Coco`"Hmm, I'm not sure..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco peeked out from behind Tsugumi.`;
   waitForClick; clearText; marker; sound(`T5C014`); appendText; 
   //Tsugumi
   Tsugumi`"What do you want?"`;
   waitForClick; clearText; marker; sound(`T5C015`); appendText; 
   //Coco
   Coco`"Maybe I'll eat just a little something."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C016`); appendText; 
   //Tsugumi
   Tsugumi`"Well... How about some bread?"`;
   waitForClick; clearText; marker; sound(`T5C017`); appendText; 
   //Coco
   Coco`"Okay, sounds good!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C018`); appendText; 
   //Coco
   Coco`"Takepyon, I'd like some bread, please."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Okay, okay. Gotcha."`;
   waitForClick; clearText; marker; sound(`T5C019`); appendText; 
   //Coco
   Coco`"Thanks. Heh, heh...."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `TU11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C020`); appendText; 
   //Tsugumi
   Tsugumi`"Um, by the way, Takeshi."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C021`); appendText; 
   //Tsugumi
   Tsugumi`"Were you upset a little bit earlier?"`;
   waitForClick; clearText; marker; sound(`T5C022`); appendText; 
   //Tsugumi
   Tsugumi`"Are you feeling okay? Or is it...?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Nah, it's not like that."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It just takes a while for the oil to get 
warmed up, so I was irritated, is all."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C023`); appendText; 
   //Tsugumi
   Tsugumi`"Oh, was that it?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She flashed me a smile.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C024`); appendText; 
   //Tsugumi
   Tsugumi`"Okay. Don't worry, just take your time."`;
   waitForClick; clearText; marker; sound(`T5C025`); appendText; 
   //Tsugumi
   Tsugumi`"I'll be waiting."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi grabbed on to Coco's hand and started 
walking slowly away.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was smiling so gently...`;
   waitForClick; clearText; 
});
goto(lbl_000002d6).if(var_d9 == 0);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She had surprised me when she started talking 
to me all of a sudden...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Tsugumi right then seemed like she would 
never talk about 'dying,' even by accident.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered if she had resolved her feelings?`;
   waitForClick; clearText; marker; appendText; 
   Narr`If that was the case, then it seemed like 
talking with her had been the right thing to 
do.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had chased after her constantly...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Been hit by her...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Been put down by her...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But the Tsugumi before me was unmistakably 
one of us.`;
   waitForClick; clearText; 
});
goto(lbl_000002db);
let lbl_000002d6;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It didn't seem like she cared about my 
troubles...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Every time we met I never know how to 
react....and it bothered me some.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Had she totally forgotten about the events of 
the other night? I had to wonder.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Well, if she doesn't care, then I suppose 
that's best...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Tsugumi before me then seemed like she 
would never talk about 'dying,' even by 
accident.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I decided to believe that her smile was real.`;
   waitForClick; clearText; 
});
let lbl_000002db;
multifgload2({ id1: 1, id2: 2, name1: `CO15ADS`, name2: `TU11ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C026`); appendText; 
   //Coco
   Coco`"And guess what? You wanna know what? I had a 
dream last night!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi was listening to Coco intently.`;
   waitForClick; clearText; marker; sound(`T5C027`); appendText; 
   //Tsugumi
   Tsugumi`"What kind of dream?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO16ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C028`); appendText; 
   //Coco
   Coco`"I was riding a whale!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco seemed to be truly enjoying herself.`;
   waitForClick; clearText; marker; sound(`T5C029`); appendText; 
   //Coco
   Coco`"And Kiddo was riding on it with me..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO15ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C030`); appendText; 
   //Coco
   Coco`"And the whale was like totally bouncing all 
over the place..."`;
   waitForClick; clearText; marker; sound(`T5C031`); appendText; 
   //Coco
   Coco`"I just kept hopping and jumping....!"`;
   waitForClick; clearText; marker; sound(`T5C032`); appendText; 
   //Coco
   Coco`"And we were in outer space going to this 
place called Planet Squid, and were flying 
all around."`;
   waitForClick; clearText; marker; sound(`T5C033`); appendText; 
   //Coco
   Coco`"And then guess what?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO16ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C034`); appendText; 
   //Coco
   Coco`"I met someone from planet Kuikui!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU12ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C035`); appendText; 
   //Tsugumi
   Tsugumi`"Hmmm....oh really..."`;
   waitForClick; clearText; marker; sound(`T5C036`); appendText; 
   //Tsugumi
   Tsugumi`"So you met someone from planet Kuikui, eh?"`;
   waitForClick; clearText; marker; sound(`T5C037`); appendText; 
   //Coco
   Coco`"Yup, yup!"`;
   waitForClick; clearText; marker; sound(`T5C038`); appendText; 
   //Coco
   Coco`"Kiddo and me, we both met him."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T5C039`); appendText; 
   //Tsugumi
   Tsugumi`"Is that so...?"`;
   waitForClick; clearText; marker; sound(`T5C040`); appendText; 
   //Tsugumi
   Tsugumi`"That's GREAT Coco..."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi listened to Coco's nonsense with a 
smile on her face.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I watched their interaction quietly...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tried to sense what they were feeling...`;
   waitForClick; clearText; 
});
bgload({ name: `BG21B1`, transition: 20 });
clock(`19:13`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C041`); appendText; 
   //You
   You`"Takeshiii, what's taking you so looong...!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I went into the rest area and You was 
lounging about lazily.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What the hell are you all worked up about!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C042`); appendText; 
   //You
   You`"I'm not 'worked up' about anything."`;
   waitForClick; clearText; marker; sound(`T5C043`); appendText; 
   //You
   You`"It's just that you're so slow that I was 
wondering 'what's taking Takeshi so long,' is 
all..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C044`); appendText; 
   //You
   You`"And, so? How'd it turn out, chef?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You really don't know when to shut up, do 
you..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Look, it's right here, so stop worrying."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`When I showed You the package, she shrugged.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `CO02ADS`, name2: `TU10ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi and Coco had already finished theirs, 
and were following behind me.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I headed over to the circle in the center of 
the room.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Here. It's the Tanaka special. Take it!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I got up on the round dais, and threw the 
package directly at You.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C045`); appendText; 
   //You
   You`"What are you doing...!!"`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE08_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Splat.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The package flew over You's knees and landed 
softly in the center of the stage.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, come on. Wake up, will you...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I pretended to show surprise.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Be careful, those're some gourmet goods you 
know?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C046`); appendText; 
   //You
   You`"W-well, you're the one who threw it all of a 
sudden!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You's cheeks puffed up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She picked up the package and dusted it off.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Sorry, I was just joking..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I lifted both hands in mock apology.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I was worried it would fall into the water 
there for a second."`;
   waitForClick; clearText; marker; sound(`T5C047`); appendText; 
   //You
   You`"Oh, stop it..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C048`); appendText; 
   //You
   You`"You don't have to pick on me you know..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Grumbling to herself she undid the string 
around the wrapping.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C049`); appendText; 
   //You
   You`"Ah!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You looked at the contents, and puffed up 
again, `;
   waitForClick; clearText; marker; sound(`T5C050`); appendText; 
   //You
   You`"Hey, this sandwich is burnt!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Not THAT badly. You should still be able to 
eat it!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C051`); appendText; 
   //You
   You`"I suppose..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Gimme a break."`;
   waitForClick; clearText; marker; appendText; 
   Narr`We carried on needling each other like this 
for a while...`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`When suddenly someone came up and stood in 
front of You and me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No...maybe he'd been there for a long time.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The Kid was staring at both of us with a 
leaden gaze.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU15BDM`, name2: `KA05ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C052`); appendText; 
   //You
   You`"Hey, what's wrong, Kid?"`;
   waitForClick; clearText; marker; sound(`T5C053`); appendText; 
   //You
   You`"...You don't want it?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid held an unopened fried chicken 
sandwich in his hand.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You gotta eat to stay healthy, Kid."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It's probably cold by now. You want me to 
heat it up again for you?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I put out my hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But he pulled the sandwich close to himself 
and tried to get away.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He looked at me with a hard expression...`;
   waitForClick; clearText; marker; appendText; 
   Narr`And...`;
   waitForClick; clearText; 
});
hideTextbox();
fgload({ id: 1, name: `YU06BDM`, x: 128, useAnim: true });
stopBGM();
showTextbox();
text(() => {
   marker; sound(`T5C054`); appendText; 
   //You
   You`"What!?"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
hideTextbox();
playBGM({ num: 16, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The Kid...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Crushed the sandwich in his hand.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_03`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Using all his strength.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The wrapping paper burst and sauce flew every 
which way.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It got on his clothes as well, but he didn't 
seem to notice.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He didn't stop there...`;
   waitForClick; clearText; marker; appendText; 
   Narr`He took the mangled package and...`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_04`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Threw it with all of his might against the 
water on the ground.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"W-what!?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What the hell are you doing!!?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"......."`;
   waitForClick; clearText; marker; appendText; 
   Narr`His shoulders trembling, the Kid kept his 
face down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He was finally able to drag out some words.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C055`); appendText; 
   //Kid
   Kid`"Sick..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C056`); appendText; 
   //Kid
   Kid`"I'm sick of it...!!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C057`); appendText; 
   //Kid
   Kid`"That's all I can take!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_02`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The kid kicked at the thin layer of water at 
his feet.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone looked at him at once.`;
   waitForClick; clearText; marker; sound(`T5C058`); appendText; 
   //Kid
   Kid`"I can't stand it anymore!"`;
   waitForClick; clearText; marker; sound(`T5C059`); appendText; 
   //Kid
   Kid`"I don't want any more fried chicken 
sandwiches!"`;
   waitForClick; clearText; marker; sound(`T5C060`); appendText; 
   //Kid
   Kid`"I'm sick of them!"`;
   waitForClick; clearText; marker; sound(`T5C061`); appendText; 
   //Kid
   Kid`"I want to eat something else!!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`He screamed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone's breath caught in their throats.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `CO05ADM`, name2: `TU14ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Coco
   Coco`"........."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU03BDM`, name2: `SO13ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Sora
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Pipi
   Pipi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`But nobody had anything to say in reply.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C062`); appendText; 
   //Kid
   Kid`"I'm sick..."`;
   waitForClick; clearText; marker; sound(`T5C063`); appendText; 
   //Kid
   Kid`"And tired..."`;
   waitForClick; clearText; marker; sound(`T5C064`); appendText; 
   //Kid
   Kid`"So what if we're still alive..."`;
   waitForClick; clearText; marker; sound(`T5C065`); appendText; 
   //Kid
   Kid`"There isn't any proof that anyone is going 
to save us!"`;
   waitForClick; clearText; marker; sound(`T5C066`); appendText; 
   //Kid
   Kid`"What we're doing here..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C067`); appendText; 
   //Kid
   Kid`"Everything that we're doing here..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C068`); appendText; 
   //Kid
   Kid`"There's no point..."`;
   waitForClick; clearText; marker; sound(`T5C069`); appendText; 
   //Kid
   Kid`"There isn't any point for us being here."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid raised a shaking fist.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But not finding any direction to launch it, he 
lowered it again.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `CO13ADM`, name2: `TU18ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Coco
   Coco`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU13BDM`, name2: `SO17ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Sora
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`PIPI_06`); appendText; 
   //Pipi
   Pipi`"....*whine*..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone tried to keep their eyes from 
meeting. `;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed like they were afraid of what we 
might see...`;
   waitForClick; clearText; marker; appendText; 
   Narr`They tried desperately to avert their gazes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Nobody moved.`;
   waitForClick; clearText; marker; appendText; 
   Narr`People pressed their lips firmly together and 
dared not speak.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"St..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Stupid fool!! What the hell are you talking 
about!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Finally I looked up, shouting.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Don't ask for the impossible!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Do you have any idea what you're asking!?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"The only food we have to eat is this 
sandwich, and the snack shop upstairs, you 
know that!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"And you tell me you're 'sick' of it!?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You still have to eat it!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It's the only way to survive!!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So you'd better be thankful for it!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"We're all putting up with it the best we can!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You're one of the gang, right?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You should be a little more cooperative..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"They're all being patient."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"They're helping out."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Even if they don't like it, they eat, and 
they're surviving..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"If we don't...then we're finished!"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Wake up..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"We're all going to get through this 
together..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"As long as we're alive, there's still hope."`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE06_04`, a1: 0, volume: 95 });
varop(`(28 0a a2) 4f := (00) 51`);
varop(`(28 0a a2) 3b := (00) 1`);
varop(`(28 0a a2) 3c := (00) VAR_c6_0_6`);
varop(`(28 0a a2) 3d := (00) 4`);
varop(`(28 0a a2) 3e := (00) 2`);
varop(`(28 0a a2) 3f := (00) VAR_c3_0_6`);
varop(`(28 0a a2) 40 := (00) 2`);
openShakeScreenAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`BOOOOooom!!`;
   waitForClick; clearText; marker; appendText; 
   Narr`A loud metallic sound echoed throughout the 
room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a blunt sound.`;
   waitForClick; clearText; 
});
hideTextbox();
closeShakeScreenAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The floor shook slightly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone staggered slightly and struggled to 
regain their balance.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But nobody tried to do anything else.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C070`); appendText; 
   //Kid
   Kid`"...I know."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C071`); appendText; 
   //Kid
   Kid`"I know that, Takeshi...I know..."`;
   waitForClick; clearText; marker; sound(`T5C072`); appendText; 
   //Kid
   Kid`"But, still."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KA04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C073`); appendText; 
   //Kid
   Kid`"But even though I know, what can I do!?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU06BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C074`); appendText; 
   //You
   You`"Ahh...!"`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE05_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Just then the Kid knocked the sandwich out of 
You's hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She hadn't even taken a bite out of her 
'Tanaka Special'......`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_01`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It fell into the water with a splash, and sank 
slowly.`;
   waitForClick; clearText; marker; sound(`T5C075`); appendText; 
   //You
   You`".........!!"`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
playBGM({ num: 12, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Bastard! What do you think you're doing!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I went over and grabbed onto the Kid and 
raised my hand!`;
   waitForClick; 
});
choice(
   `Hit the kid`
   `Don't hit him`
);
switch (choice) {
   case 0: goto(lbl_0000086f);
   case 1: goto(lbl_000008dd);
}
let lbl_0000086f;
varop(`(28 0a a4) b7 += (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"You better brace yourself...!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C076`); appendText; 
   //Kid
   Kid`"!"`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE05_00`, a1: 0, volume: 100 });
shakeScreen();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`—Whack!!`;
   waitForClick; clearText; marker; appendText; 
   Narr`I struck the Kid hard on his cheek.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA09ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C077`); appendText; 
   //Kid
   Kid`"Agh..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It hurt...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It had to have hurt him.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My hand even hurt.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But more than the pain in hand, my heart hurt.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I let go of the Kid's collar, and he backed 
away slowly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone watched us silently.`;
   waitForClick; clearText; marker; sound(`T5C078`); appendText; 
   //Kid
   Kid`"You hit me..."`;
   waitForClick; clearText; marker; sound(`T5C079`); appendText; 
   //Kid
   Kid`"Ouuch..."`;
   waitForClick; clearText; marker; sound(`T5C080`); appendText; 
   //Kid
   Kid`"Aaghh...."`;
   waitForClick; clearText; marker; sound(`T5C081`); appendText; 
   //Kid
   Kid`"Damn it, damn it..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tears welled up in his eyes.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
goto(lbl_0000093c);
let lbl_000008dd;
varop(`(28 0a a4) b8 += (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"You....!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C082`); appendText; 
   //Kid
   Kid`"!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Cowed, the Kid froze.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I pulled back the hand that I had raised.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It all felt so stupid...`;
   waitForClick; clearText; marker; appendText; 
   Narr`And so terribly sad.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA09ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The Kid looked up at me all hunched up and 
trembling.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was disappointed in myself for having tried 
to hit someone like him.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My heart ached with sadness.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I let go of the Kid's collar, and he backed 
away slowly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone watched us silently.`;
   waitForClick; clearText; marker; sound(`T5C083`); appendText; 
   //Kid
   Kid`"Aaghh...."`;
   waitForClick; clearText; marker; sound(`T5C084`); appendText; 
   //Kid
   Kid`"Damn it, damn it..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tears welled up in his eyes.`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
let lbl_0000093c;
goto(lbl_00000963).if(var_da == 0);
varop(`(28 0a a4) b3 := (00) 0`);
jump(`T_5D`);
let lbl_00000963;
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Kid...look over at Tsugumi."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"She injured her leg terribly and almost 
drowned..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"She had surgery...If it were me, I'd have 
probably died, but she pulled through it."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I pointed at Tsugumi.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi stood silently.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The kid timidly raised his eyes to look at her.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But, he soon stared at the floor again.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C085`); appendText; 
   //Kid
   Kid`"But..."`;
   waitForClick; clearText; marker; sound(`T5C086`); appendText; 
   //Kid
   Kid`"Takeshi, you can say that, but..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C087`); appendText; 
   //Kid
   Kid`"I'm not Tsugumi..."`;
   waitForClick; clearText; marker; sound(`T5C088`); appendText; 
   //Kid
   Kid`"We're not all the same."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C089`); appendText; 
   //Kid
   Kid`"I can't do it."`;
   waitForClick; clearText; marker; sound(`T5C090`); appendText; 
   //Kid
   Kid`"I can't do it..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C091`); appendText; 
   //Kid
   Kid`"I'm just not that strong."`;
   waitForClick; clearText; marker; sound(`T5C092`); appendText; 
   //Kid
   Kid`"And I never will be...!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C093`); appendText; 
   //Kid
   Kid`"I can't go on living."`;
   waitForClick; clearText; marker; sound(`T5C094`); appendText; 
   //Kid
   Kid`"I don't want to go on living...!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C095`); appendText; 
   //Kid
   Kid`"So, then...."`;
   waitForClick; clearText; marker; sound(`T5C096`); appendText; 
   //Kid
   Kid`"I should just..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't want to make him say the rest.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I couldn't stop him.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I knew how hard it would be for him to say.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Even I wasn't that strong.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone waited for the Kid's next words in 
silence...`;
   waitForClick; clearText; marker; appendText; 
   Narr`They were probably unthinkable.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C097`); appendText; 
   //Tsugumi
   Tsugumi`"So, what do you want to do?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"!?"`;
   waitForClick; clearText; marker; sound(`T5C098`); appendText; 
   //You
   You`"!!"`;
   waitForClick; clearText; marker; sound(`T5C099`); appendText; 
   //Sora
   Sora`"?"`;
   waitForClick; clearText; marker; sound(`T5C100`); appendText; 
   //Coco
   Coco`".........!?"`;
   waitForClick; clearText; marker; sound(`T5C101`); appendText; 
   //Kid
   Kid`"......What!?"`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 15, volume: 100 });
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C102`); appendText; 
   //Tsugumi
   Tsugumi`"What do you want to do...Kid?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi took a step forward and stared at the 
kid.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Those eyes were unfeeling, and quiet.`;
   waitForClick; clearText; marker; sound(`T5C103`); appendText; 
   //Tsugumi
   Tsugumi`"Come on, you can tell me."`;
   waitForClick; clearText; marker; sound(`T5C104`); appendText; 
   //Tsugumi
   Tsugumi`"I want to know what you want to do..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Softly she approached the Kid one step at a 
time.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone was so caught off guard that they 
couldn't move. Couldn't say a word.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `TU15ADS`, name2: `KA03ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`T5C105`); appendText; 
   //Tsugumi
   Tsugumi`"What? You can't say it?"`;
   waitForClick; clearText; marker; sound(`T5C106`); appendText; 
   //Kid
   Kid`"..........u."`;
   waitForClick; clearText; marker; appendText; 
   Narr`He tried to say something, but no words would 
come out of his mouth.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He had also forgotten how to back away.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi went up to the Kid and touched him.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `TU15ADM`, name2: `KA13ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C107`); appendText; 
   //Tsugumi
   Tsugumi`"You don't want to live?"`;
   waitForClick; clearText; marker; sound(`T5C108`); appendText; 
   //Kid
   Kid`"...Ugh..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid tried to nod, but his head wouldn't 
budge.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `TU16ADM`, name2: `KA03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C109`); appendText; 
   //Tsugumi
   Tsugumi`"So, you want to die then?"`;
   waitForClick; clearText; marker; sound(`T5C110`); appendText; 
   //Kid
   Kid`"...Uuugh..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid couldn't respond either. `;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C111`); appendText; 
   //Tsugumi
   Tsugumi`"Say something, please..."`;
   waitForClick; clearText; marker; sound(`T5C112`); appendText; 
   //Tsugumi
   Tsugumi`"I don't know what you mean...?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi asked the Kid, her tone neutral.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C113`); appendText; 
   //Tsugumi
   Tsugumi`"So, which is it...?"`;
   waitForClick; clearText; marker; sound(`T5C114`); appendText; 
   //Tsugumi
   Tsugumi`"Do you want to die?"`;
   waitForClick; clearText; marker; sound(`T5C115`); appendText; 
   //Tsugumi
   Tsugumi`"Do you want to live?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C116`); appendText; 
   //Kid
   Kid`"...Aaggh..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; sound(`T5C117`); appendText; 
   //Tsugumi
   Tsugumi`"So...you can't answer?"`;
   waitForClick; clearText; marker; sound(`T5C118`); appendText; 
   //Tsugumi
   Tsugumi`"Well then..."`;
   waitForClick; clearText; marker; sound(`T5C119`); appendText; 
   //Tsugumi
   Tsugumi`"Don't ever...say that again."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C120`); appendText; 
   //Tsugumi
   Tsugumi`"Okay?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA09ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C121`); appendText; 
   //Kid
   Kid`"Ah......!!"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The Kid broke down in tears, and fell to floor 
covered in water.`;
   waitForClick; clearText; marker; sound(`T5C122`); appendText; 
   //Kid
   Kid`"Aaaagh......"`;
   waitForClick; clearText; marker; sound(`T5C123`); appendText; 
   //Kid
   Kid`"I'm sorry..."`;
   waitForClick; clearText; marker; sound(`T5C124`); appendText; 
   //Kid
   Kid`"I'm so...sorryyy...."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `KA09ADS`, name2: `YU13BDS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You, suddenly spurred into action, ran over 
to the Kid and wrapped her arms around his 
shoulders.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `CO03ADS`, name2: `SO13ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora looked down and covered her face with 
her hands. She was trembling.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco and Pipi were staring at everyone, 
speechless.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Tsu-Tsugumi...!?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Not knowing what else to say, I just stood 
there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked at her face.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But I couldn't read what she was thinking 
from her expression.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; sound(`T5C125`); appendText; 
   //Tsugumi
   Tsugumi`"Takeshi..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C126`); appendText; 
   //Tsugumi
   Tsugumi`"Come here for a second..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Seeing that I was confused, Tsugumi ran over 
to me.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
stopSFX()
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Eyebrows raised she glared at me strongly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`What was she thinking...?`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playBGM({ num: 4, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Ouch!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"W-w-w-what are you doing...that hurts!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C127`); appendText; 
   //Tsugumi
   Tsugumi`"Stop whining and get over here!"`;
   waitForClick; clearText; marker; sound(`T5C128`); appendText; 
   //Tsugumi
   Tsugumi`"Come on, hurry up!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Totally clueless, I followed along behind her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She had grabbed my ear and mercilessly 
tugged...`;
   waitForClick; clearText; 
});
bgload({ name: `BG26B3L`, transition: 20 });
clock(`19:27`);
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"L-let me go! Tsugumi!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Why are you doing this! Ouch..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Wordlessly, she doggedly moved forward.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She kept a firm grip on me and kept pulling, 
so that I couldn't get away.`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE01_07`, a1: 0, volume: 90 });
bgload({ name: `BG29A1`, transition: 20 });
fgload({ id: 1, name: `TU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"You'll rip my ear off! It's seriously going 
to come off."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Aaaaaagh, sheriff..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"This is killing meeee. Let go of me. 
Pleeeasee."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`".........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`We kept climbing the stairs.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She wouldn't let go no matter how I pleaded, 
so I finally shut up.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeFG({ id: 1, useAnim: false });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
bgload({ name: `BG26A3R`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And when we finally made it to the 2nd floor, 
she let go of my ear.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Wheeeew....thank heavens..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I mean...what are you doing!! Are you 
crazy!?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C129`); appendText; 
   //Tsugumi
   Tsugumi`"Quit your bitching..."`;
   waitForClick; clearText; marker; sound(`T5C130`); appendText; 
   //Tsugumi
   Tsugumi`"Just when I thought you'd FINALLY shut up..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi let out a big sigh.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"W-what's that face supposed to mean!?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C131`); appendText; 
   //Tsugumi
   Tsugumi`"Just what it looks like..."`;
   waitForClick; clearText; marker; sound(`T5C132`); appendText; 
   //Tsugumi
   Tsugumi`"I'm so disappointed in you."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She furrowed her brow and looked at me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She pinched the bridge of her nose, and shook 
her head.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She looked completely fed up.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi turned and she started walking away 
from me.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"H-hey! Wait a second!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_04`, a1: 0, volume: 95 });
bgload({ name: `BG25A3`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Why?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What's with you!? Did I do something to you?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I hurried over to her and insisted that she 
answer me.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C133`); appendText; 
   //Tsugumi
   Tsugumi`"No..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C134`); appendText; 
   //Tsugumi
   Tsugumi`"No, it's not like that...you don't understand 
anything."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And throwing back her shoulders, she picked 
up her pace.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What don't I understand?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I mean...er..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Things were getting out of hand back 
there...if you hadn't said something, I don't 
know how it would have turned out."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'm glad you did. I'm...really sorry. And, 
thanks..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"......."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG03A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Hey, wait! Tsugumi...!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I kept yelling as I chased after her.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You of all people know how serious this 
situation is, right? So how come you are..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"No, that's not it..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"That's not it...That's not it!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You're angry at ME right?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Why are you so mad...please tell me!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi stopped at the entrance to Qualle.`;
   waitForClick; clearText; marker; sound(`T5C135`); appendText; 
   //Tsugumi
   Tsugumi`"Okay, I will..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C136`); appendText; 
   //Tsugumi
   Tsugumi`"It's a stupid question, but I'll answer it 
for you anyway."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"O-okay..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`All of a sudden Tsugumi smiled at me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I flinched.`;
   waitForClick; clearText; marker; sound(`T5C137`); appendText; 
   //Tsugumi
   Tsugumi`"Do you remember what you said earlier?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Me? I...let's see..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...I was fairly angry...so I really don't 
remember that well..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"And might not have been all 'there' at the 
time..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"B-but, you know!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I really don't think I said anything wrong 
to the Kid!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"And I'm sure about that..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C138`); appendText; 
   //Tsugumi
   Tsugumi`"Yeah..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C139`); appendText; 
   //Tsugumi
   Tsugumi`"I guess it looks like you weren't wrong."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C140`); appendText; 
   //Tsugumi
   Tsugumi`"That's why..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU18ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C141`); appendText; 
   //Tsugumi
   Tsugumi`"That's why I'm mad."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
stopBGM();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi jumped onto the Jellyfish Gondola.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_02`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I got on soon after her and closed the door.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The gondola zipped into the tube, and out 
into the ocean.`;
   waitForClick; clearText; 
});
playBGM({ num: 12, volume: 100 });
bgload({ name: `BG36A1`, transition: 20 });
setSceneTitle({ index: 35 });
showTextbox();
text(() => {
   marker; sound(`T5C142`); appendText; 
   //Tsugumi
   Tsugumi`"I get so frustrated!"`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE05_07`, a1: 0, volume: 100 });
varop(`(28 0a a2) 4f := (00) 51`);
varop(`(28 0a a2) 3b := (00) 1`);
varop(`(28 0a a2) 3c := (00) VAR_c6_0_6`);
varop(`(28 0a a2) 3d := (00) 4`);
varop(`(28 0a a2) 3e := (00) 2`);
varop(`(28 0a a2) 3f := (00) VAR_c3_0_6`);
varop(`(28 0a a2) 40 := (00) 2`);
openShakeScreenAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Bam!`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi pounded the shell of the jellyfish 
with her fist.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her expression was one of annoyance again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The gondola swayed slightly, as it moved 
forward slowly.`;
   waitForClick; clearText; 
});
hideTextbox();
closeShakeScreenAnim();
showTextbox();
text(() => {
   marker; sound(`T5C143`); appendText; 
   //Tsugumi
   Tsugumi`"Is it really just 'enough to be alive'?"`;
   waitForClick; clearText; marker; sound(`T5C144`); appendText; 
   //Tsugumi
   Tsugumi`"You say, 'You're one of us, so you should 
cooperate'?'"`;
   waitForClick; clearText; marker; sound(`T5C145`); appendText; 
   //Tsugumi
   Tsugumi`"And that's how you keep pushing him to agree 
with you, and buy into all your fake ideals."`;
   waitForClick; clearText; marker; sound(`T5C146`); appendText; 
   //Tsugumi
   Tsugumi`"I can't believe how irresponsible you can 
be..."`;
   waitForClick; clearText; marker; sound(`T5C147`); appendText; 
   //Tsugumi
   Tsugumi`"Who the hell do you think you are?"`;
   waitForClick; clearText; marker; sound(`T5C148`); appendText; 
   //Tsugumi
   Tsugumi`"You've really got some nerve talking like 
that..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So! What else could I do!?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It's better than just standing by and 
watching him sink in despair, it's better to 
have a little hope than nothing at all, right?"`;
   waitForClick; clearText; marker; sound(`T5C149`); appendText; 
   //Tsugumi
   Tsugumi`"You're such a hypocrite."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well, you know what? You're selfish and 
self-righteous...and you're always faking 
like you don't care about anyone!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You go around hurting people on purpose, and 
making them feel like crap..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"And now you're trying to make me look bad...!"`;
   waitForClick; clearText; marker; sound(`T5C150`); appendText; 
   //Tsugumi
   Tsugumi`"I do not...I'm not doing it on purpose."`;
   waitForClick; clearText; marker; sound(`T5C151`); appendText; 
   //Tsugumi
   Tsugumi`"There's just a lot that I don't agree with."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Liar."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"That's not the way you want things to happen 
in your heart, and you know that!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Why do you have to lash out at everything!?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Why can't you just be yourself for once?"`;
   waitForClick; clearText; marker; sound(`T5C152`); appendText; 
   //Tsugumi
   Tsugumi`"You're wrong...you're the one who isn't being 
yourself!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'm always myself."`;
   waitForClick; clearText; marker; sound(`T5C153`); appendText; 
   //Tsugumi
   Tsugumi`"You're so twisted."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"That's funny coming from you."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"This isn't what we were talking about, 
anyway."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Why are you so angry?"`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"If I did something wrong, then I guess I 
deserve it..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"If there really is a good reason, then hey, I 
won't complain."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So, come on, tell me."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I won't argue with you, just tell me what it 
is."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
playBGM({ num: 7, volume: 100 });
bgload({ name: `EV_TU11A`, transition: 10 });
showTextbox();
text(() => {
   marker; sound(`T5C154`); appendText; 
   //Tsugumi
   Tsugumi`"You really want to know...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi sat back down in the gondola.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her tone had almost returned to normal.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Y-yeah. Of course."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She hesitated a bit, but soon came to sit 
next to me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi looked straight ahead.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She didn't try to look at me.`;
   waitForClick; clearText; marker; sound(`T5C155`); appendText; 
   //Tsugumi
   Tsugumi`"Why?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Because...I want to know."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Because I want to know what my friends are 
thinking."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I put my hand lightly on her shoulder.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was becoming more and more worried.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe she was still trying to be stubborn...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi didn't try to shake off my hand, but 
just sat there.`;
   waitForClick; clearText; marker; sound(`T5C156`); appendText; 
   //Tsugumi
   Tsugumi`"That's right..."`;
   waitForClick; clearText; marker; sound(`T5C157`); appendText; 
   //Tsugumi
   Tsugumi`"You had made me 'one of the gang,' hadn't 
you...?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`T5C158`); appendText; 
   //Tsugumi
   Tsugumi`"If you want to know, then here goes."`;
   waitForClick; clearText; marker; sound(`T5C159`); appendText; 
   //Tsugumi
   Tsugumi`"I'll tell you.... It's because in the end, 
I've become 'Your Friend.'"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"....."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Why do you have to say it like that! You're 
not still..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi thrust her hand into her pocket and 
took something out.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU11B`, transition: 10 });
showTextbox();
text(() => {
   marker; sound(`T5C160`); appendText; 
   //Tsugumi
   Tsugumi`"Takeshi, you know what this is right?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Chami."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Djungarian hamster..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Who cares, where the heck did you pull that 
from?"`;
   waitForClick; clearText; marker; sound(`T5C161`); appendText; 
   //Tsugumi
   Tsugumi`"My pocket..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I know that. That's not what I'm asking..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Don't just shove him out and talk about him 
as a 'this.'"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hamsters are delicate living creatures, and 
you should be careful with him."`;
   waitForClick; clearText; marker; sound(`T5C162`); appendText; 
   //Tsugumi
   Tsugumi`"Yeah, you're right..."`;
   waitForClick; clearText; marker; sound(`T5C163`); appendText; 
   //Tsugumi
   Tsugumi`"But what else can I do?"`;
   waitForClick; clearText; marker; sound(`T5C164`); appendText; 
   //Tsugumi
   Tsugumi`"He doesn't have anywhere else to go."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Chami stood in Tsugumi's hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He twitched his nose and looked up at both of 
our faces inquisitively.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi stroked Chami softly with the tip of 
her finger.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
playBGM({ num: 24, volume: 100 });
bgload({ name: `EV_TU11C`, transition: 00 });
showTextbox();
text(() => {
   marker; sound(`T5C165`); appendText; 
   //Tsugumi
   Tsugumi`"Heeey Takeshi, do you know what will happen 
if I go like THIS?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"!?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Grasped both of her hands tightly together.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In between the cracks of her fingers, I could 
see Chami's soft, warm-looking gray fur.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Soon, his body disappeared entirely in her 
hands.`;
   waitForClick; clearText; marker; sound(`T5C166`); appendText; 
   //Tsugumi
   Tsugumi`"Do you know what will happen?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I-idiot! Cut it out!!"`;
   waitForClick; clearText; marker; sound(`T5C167`); appendText; 
   //Tsugumi
   Tsugumi`"Come on, answer me..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi started to squeeze harder.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Chami, who only the tip of his nose was 
visible, turned his beady eyes toward Tsugumi.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"W-what are you talking about!?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It's totally obvious! What a stupid question!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You want to talk about stupid questions? 
There's one for you!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She started squeezing more.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The space between her fingers got smaller and 
smaller.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Chami twisted his body and started to struggle.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Cut it out!! Tsugumi, if you go on like 
this...Chami's going to..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The hamster looked at Tsugumi and me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`At the end I thought he even let out a small 
breath.`;
   waitForClick; clearText; 
});
removeBG_unk(3, 0, 2);
playSFX({ name: `SE10_03`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Squish.`;
   delay(0); 
});
bgload_keepFg({ name: `KURO_BG`, transition: 00 });
showTextbox();
text(() => {
   appendText; waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi crushed her hands together with all 
of her might.`;
   waitForClick; clearText; marker; appendText; 
   Narr`They pressed together.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her hands were shaking with the effort.`;
   waitForClick; clearText; marker; appendText; 
   Narr`From the cracks of her fingers, red droplets 
started to fall.`;
   waitForClick; clearText; marker; sound(`T5C168`); appendText; 
   //Tsugumi
   Tsugumi`"Well, Takeshi..."`;
   waitForClick; clearText; marker; sound(`T5C169`); appendText; 
   //Tsugumi
   Tsugumi`"What do you think happened... to Chami?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi's voice was also shaking.`;
   waitForClick; clearText; marker; sound(`T5C170`); appendText; 
   //Tsugumi
   Tsugumi`"Tell me..."`;
   waitForClick; clearText; marker; sound(`T5C171`); appendText; 
   //Tsugumi
   Tsugumi`"TELL ME!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"No."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You think I'm going to answer you that?"`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Open your hands."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Tsugumi.... Open up your hands!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Please, just open them up..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Now!"`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her hands were shaking heavily as they opened.`;
   waitForClick; clearText; 
});
varop(`(28 0a a2) 41 := (00) 6`);
varop(`(28 0a a2) 42 := (00) 68`);
varop(`(28 0a a2) 50 := (00) 0`);
showDimInAndOutAnim();
bgload({ name: `IMG04A`, transition: 10 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Chami..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Tsugumi...what have you done...!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`He was dead.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And his fur was slightly wet.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Chami looked like a dirty old dishrag.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Probably all of the bones in his body were 
broken.`;
   waitForClick; clearText; marker; appendText; 
   Narr`All of the blood had probably been squeezed 
from his body.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He probably hadn't had anytime to wonder, it 
had happened so fast...`;
   waitForClick; clearText; marker; appendText; 
   Narr`His life had been...extinguished...`;
   waitForClick; clearText; marker; sound(`T5C172`); appendText; 
   //Tsugumi
   Tsugumi`"So..."`;
   waitForClick; clearText; marker; sound(`T5C173`); appendText; 
   //Tsugumi
   Tsugumi`"Takeshi, do you know...?"`;
   waitForClick; clearText; marker; sound(`T5C174`); appendText; 
   //Tsugumi
   Tsugumi`"What do you think...is going to happen now?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Tsugumi!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Cut it out!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I shook Tsugumi's shoulders violently.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought for sure that I would knock her down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I forced her to look at me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Was crying, and her lips trembled as she bit 
down on them.`;
   waitForClick; clearText; marker; sound(`T5C175`); appendText; 
   //Tsugumi
   Tsugumi`"Takeshi..."`;
   waitForClick; clearText; marker; sound(`T5C176`); appendText; 
   //Tsugumi
   Tsugumi`"Why won't you answer me..."`;
   waitForClick; clearText; marker; sound(`T5C177`); appendText; 
   //Tsugumi
   Tsugumi`"Aaaahh..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Chami is..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Chami is..."`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Dead."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"He won't ever move again."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; 
});
removeBG({ mode: WHITE, transition: 02 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"!?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`In her hand Chami seemed to move faintly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As if he had woken up suddenly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`His movements were stiff, and barely visible 
and...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Extremely slow, but...`;
   waitForClick; clearText; marker; appendText; 
   Narr`He was actually moving.`;
   waitForClick; clearText; marker; appendText; 
   Narr`His heart had started beating again, he had 
started thinking again, breathing again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He shook himself off slightly...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Fluttered his ears...`;
   waitForClick; clearText; marker; appendText; 
   Narr`And twitched his nose.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He got up on shaking legs and even tried to 
stand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`However...`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was still blood on her hand.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU11B`, transition: 00 });
showTextbox();
text(() => {
   marker; sound(`T5C178`); appendText; 
   //Tsugumi
   Tsugumi`"So, Takeshi..."`;
   waitForClick; clearText; marker; sound(`T5C179`); appendText; 
   //Tsugumi
   Tsugumi`"What happened to Chami?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Our gondola at Qualle had already passed the 
entrance to the ride twice, and was just 
starting to make its third pass.`;
   waitForClick; clearText; marker; appendText; 
   Narr`One pass really wasn't that long.`;
   waitForClick; clearText; marker; appendText; 
   Narr`All together we had only been on it between 
just over 10 minutes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In that brief time, he had returned to normal 
and was sitting up on her palm...staring at 
the two of us inquisitively.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T5C180`); appendText; 
   //Tsugumi
   Tsugumi`"He's..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi was petting Chami softly again with 
the tip of her finger.`;
   waitForClick; clearText; marker; sound(`T5C181`); appendText; 
   //Tsugumi
   Tsugumi`"Different than the Kid."`;
   waitForClick; clearText; marker; sound(`T5C182`); appendText; 
   //Tsugumi
   Tsugumi`"Different than you."`;
   waitForClick; clearText; marker; sound(`T5C183`); appendText; 
   //Tsugumi
   Tsugumi`"You saw, didn't you?"`;
   waitForClick; clearText; marker; sound(`T5C184`); appendText; 
   //Tsugumi
   Tsugumi`"That was real."`;
   waitForClick; clearText; marker; sound(`T5C185`); appendText; 
   //Tsugumi
   Tsugumi`"Chami has the virus."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T5C186`); appendText; 
   //Tsugumi
   Tsugumi`"The first time I tried to pet him, he got 
spooked."`;
   waitForClick; clearText; marker; sound(`T5C187`); appendText; 
   //Tsugumi
   Tsugumi`"He bit my finger, and my blood got all over 
him..."`;
   waitForClick; clearText; marker; sound(`T5C188`); appendText; 
   //Tsugumi
   Tsugumi`"So Chami's just like me now."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"No..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"No way..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"No way...I don't believe you..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I still couldn't believe her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Or what she had told me about the virus 
earlier.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Or what had happened right in front of me 
then.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU11D`, transition: 10 });
showTextbox();
text(() => {
   marker; sound(`T5C189`); appendText; 
   //Tsugumi
   Tsugumi`"See...this little guy's alive."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi murmured as she looked down.`;
   waitForClick; clearText; marker; sound(`T5C190`); appendText; 
   //Tsugumi
   Tsugumi`"He's alive..."`;
   waitForClick; clearText; marker; sound(`T5C191`); appendText; 
   //Tsugumi
   Tsugumi`"He's breathing. His heart is beating..."`;
   waitForClick; clearText; marker; sound(`T5C192`); appendText; 
   //Tsugumi
   Tsugumi`"But it hurt, didn't it little guy? It was 
painful, wasn't it...?"`;
   waitForClick; clearText; marker; sound(`T5C193`); appendText; 
   //Tsugumi
   Tsugumi`"I did something terrible..."`;
   waitForClick; clearText; marker; sound(`T5C194`); appendText; 
   //Tsugumi
   Tsugumi`"I'm sorry Chami. I'm so sorry."`;
   waitForClick; clearText; marker; sound(`T5C195`); appendText; 
   //Tsugumi
   Tsugumi`"Forgive me...I was wrong..."`;
   waitForClick; clearText; marker; sound(`T5C196`); appendText; 
   //Tsugumi
   Tsugumi`"But, it's okay, because...you're alive 
right...?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I started shaking Tsugumi's shoulders again.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"W-what the hell are you talking about!!?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"H-how can you say something like that!?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You just put him through something 
unimaginable and now you just say 'It's okay, 
because you're alive!'"`;
   waitForClick; clearText; 
});
hideTextbox();
bgload({ name: `EV_TU11E`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T5C197`); appendText; 
   //Tsugumi
   Tsugumi`"No!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi brushed my hands off.`;
   waitForClick; clearText; marker; sound(`T5C198`); appendText; 
   //Tsugumi
   Tsugumi`"That's what YOU said!"`;
   waitForClick; clearText; marker; sound(`T5C199`); appendText; 
   //Tsugumi
   Tsugumi`"That's exactly what you said back there!"`;
   waitForClick; clearText; marker; sound(`T5C200`); appendText; 
   //Tsugumi
   Tsugumi`"'It's 'enough to be alive' - you're the one 
who said that!"`;
   waitForClick; clearText; marker; sound(`T5C201`); appendText; 
   //Tsugumi
   Tsugumi`"So how about it! You saw what happened 
right!?"`;
   waitForClick; clearText; marker; sound(`T5C202`); appendText; 
   //Tsugumi
   Tsugumi`"You saw what happened to Chami, right? What 
I did to him?.... You SAW it Takeshi!"`;
   waitForClick; clearText; marker; sound(`T5C203`); appendText; 
   //Tsugumi
   Tsugumi`"And you can say it's 'enough to still be 
alive'...? Well it isn't."`;
   waitForClick; clearText; marker; sound(`T5C204`); appendText; 
   //Tsugumi
   Tsugumi`"It isn't. No matter what you say...!"`;
   waitForClick; clearText; marker; sound(`T5C205`); appendText; 
   //Tsugumi
   Tsugumi`"I won't believe it!"`;
   waitForClick; clearText; marker; sound(`T5C206`); appendText; 
   //Tsugumi
   Tsugumi`"It isn't enough to just have life...you 
can't say that's living!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`T5C207`); appendText; 
   //Tsugumi
   Tsugumi`"So...do you understand?"`;
   waitForClick; clearText; marker; sound(`T5C208`); appendText; 
   //Tsugumi
   Tsugumi`"...Or don't you?"`;
   waitForClick; clearText; marker; sound(`T5C209`); appendText; 
   //Tsugumi
   Tsugumi`"Takeshi, tell me...?"`;
   waitForClick; clearText; marker; sound(`T5C210`); appendText; 
   //Tsugumi
   Tsugumi`"How about you Chami..."`;
   waitForClick; clearText; marker; sound(`T5C211`); appendText; 
   //Tsugumi
   Tsugumi`"Do you understand...?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her face was pointing down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't see her expression...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I didn't have to. I knew what it was...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi was crying silently.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Countless tears fell from her face.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Like raindrops falling one by one onto the 
red-stained floor of Qualle.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
removeBG({ mode: BLACK, transition: 02 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know what to say.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No words seemed adequate.`;
   waitForClick; clearText; marker; sound(`T5C212`); appendText; 
   //Tsugumi
   Tsugumi`"Hey......"`;
   waitForClick; clearText; marker; sound(`T5C213`); appendText; 
   //Tsugumi
   Tsugumi`"Do you know...how many times I've died?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was trying to stay as calm as she could.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I have no idea..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I scarcely could move my lips as I replied.`;
   waitForClick; clearText; marker; sound(`T5C214`); appendText; 
   //Tsugumi
   Tsugumi`"I don't remember anymore, anyway."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`T5C215`); appendText; 
   //Tsugumi
   Tsugumi`"In the beginning there were said to be only 
a few of us carriers."`;
   waitForClick; clearText; marker; sound(`T5C216`); appendText; 
   //Tsugumi
   Tsugumi`"But out of all of them, I was special..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`................`;
   waitForClick; clearText; marker; appendText; 
   Narr`........`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 7, volume: 100 });
removeBG({ mode: WHITE, transition: 02 });
showTextbox();
text(() => {
   marker; sound(`T5C217`); appendText; 
   //Tsugumi
   Tsugumi`"August, 2005."`;
   waitForClick; clearText; marker; sound(`T5C218`); appendText; 
   //Tsugumi
   Tsugumi`"I was 12 at the time, and my family went to 
America because of my father's job."`;
   waitForClick; clearText; marker; sound(`T5C219`); appendText; 
   //Tsugumi
   Tsugumi`"A friend of mine then..."`;
   waitForClick; clearText; marker; sound(`T5C220`); appendText; 
   //Tsugumi
   Tsugumi`"Julia..."`;
   waitForClick; clearText; marker; sound(`T5C221`); appendText; 
   //Tsugumi
   Tsugumi`"She and I were the same age and she had to 
go to the hospital."`;
   waitForClick; clearText; marker; sound(`T5C222`); appendText; 
   //Tsugumi
   Tsugumi`"They said it was a terminal disease..."`;
   waitForClick; clearText; marker; sound(`T5C223`); appendText; 
   //Tsugumi
   Tsugumi`"She had leukemia.... and was transferred 
back and forth to different places, but 
nobody could help her...."`;
   waitForClick; clearText; marker; sound(`T5C224`); appendText; 
   //Tsugumi
   Tsugumi`"But I kept going to see her. To keep up her 
spirits."`;
   waitForClick; clearText; marker; sound(`T5C225`); appendText; 
   //Tsugumi
   Tsugumi`"Watching her smiling face, I couldn't 
believe that she didn't have long to live."`;
   waitForClick; clearText; marker; sound(`T5C226`); appendText; 
   //Tsugumi
   Tsugumi`"I thought there would be a miracle..."`;
   waitForClick; clearText; marker; sound(`T5C227`); appendText; 
   //Tsugumi
   Tsugumi`"I thought if I prayed enough, she'd get 
better..."`;
   waitForClick; clearText; marker; sound(`T5C228`); appendText; 
   //Tsugumi
   Tsugumi`"If I cared enough, her pain and suffering 
would be less."`;
   waitForClick; clearText; marker; sound(`T5C229`); appendText; 
   //Tsugumi
   Tsugumi`"I believed that..."`;
   waitForClick; clearText; marker; sound(`T5C230`); appendText; 
   //Tsugumi
   Tsugumi`"Then one day..."`;
   waitForClick; clearText; marker; sound(`T5C231`); appendText; 
   //Tsugumi
   Tsugumi`"I got in an accident."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...An accident?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Is that how you got the virus...?"`;
   waitForClick; clearText; marker; sound(`T5C232`); appendText; 
   //Tsugumi
   Tsugumi`"No..."`;
   waitForClick; clearText; 
});
removeBG_unk(3, 0, 2);
removeBG({ mode: BLACK, transition: 02 });
showTextbox();
text(() => {
   marker; sound(`T5C233`); appendText; 
   //Tsugumi
   Tsugumi`"Right after I left the hospital, I got hit 
by a semi-trailer."`;
   waitForClick; clearText; marker; sound(`T5C234`); appendText; 
   //Tsugumi
   Tsugumi`"Broken bones throughout my body, torn muscles 
everywhere. I went into a coma. I even stopped 
breathing."`;
   waitForClick; clearText; marker; sound(`T5C235`); appendText; 
   //Tsugumi
   Tsugumi`"It was hopeless."`;
   waitForClick; clearText; marker; sound(`T5C236`); appendText; 
   //Tsugumi
   Tsugumi`"But..."`;
   waitForClick; clearText; marker; sound(`T5C237`); appendText; 
   //Tsugumi
   Tsugumi`"For some reason I didn't die."`;
   waitForClick; clearText; marker; sound(`T5C238`); appendText; 
   //Tsugumi
   Tsugumi`"And a few months later..."`;
   waitForClick; clearText; marker; sound(`T5C239`); appendText; 
   //Tsugumi
   Tsugumi`"I woke up in an unfamiliar place."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU12A`, transition: 00 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Where am I?`;
   waitForClick; clearText; marker; appendText; 
   Narr`It's a hospital.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Which one...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Well...I don't really know either.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You don't know?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Ha, ha, ha...I don't know why, but I don't 
know.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My name's...Tsugumi. Tsugumi Komachi. You?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Huh?`;
   waitForClick; clearText; marker; appendText; 
   Narr`What is your name?`;
   waitForClick; clearText; marker; appendText; 
   Narr`....Well, I don't know that either. Sucks, huh?`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
showTextbox();
text(() => {
   marker; sound(`T5C240`); appendText; 
   //Tsugumi
   Tsugumi`"I woke up next to a boy with amnesia."`;
   waitForClick; clearText; marker; sound(`T5C241`); appendText; 
   //Tsugumi
   Tsugumi`"Outside the window, was unfamiliar scenery..."`;
   waitForClick; clearText; marker; sound(`T5C242`); appendText; 
   //Tsugumi
   Tsugumi`"I was pretty sure it was somewhere in 
America."`;
   waitForClick; clearText; marker; sound(`T5C243`); appendText; 
   //Tsugumi
   Tsugumi`"But in order to find out just where I was..."`;
   waitForClick; clearText; marker; sound(`T5C244`); appendText; 
   //Tsugumi
   Tsugumi`"It would take another eight years."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Eight years?"`;
   waitForClick; clearText; marker; sound(`T5C245`); appendText; 
   //Tsugumi
   Tsugumi`"I was there the whole time..."`;
   waitForClick; clearText; marker; sound(`T5C246`); appendText; 
   //Tsugumi
   Tsugumi`"I was at that 'hospital'..."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU12A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Who are you?`;
   waitForClick; clearText; marker; appendText; 
   Narr`I'm the physician who will be attending to 
you. `;
   waitForClick; clearText; marker; appendText; 
   Narr`Physician? Oh, you mean you're a doctor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Yes. I'm going to find a cure for your 
sickness and make you all better.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Cure me? ...I got in an accident, and got 
hurt...`;
   waitForClick; clearText; marker; appendText; 
   Narr`No. It's a little different than that.`;
   waitForClick; clearText; marker; appendText; 
   Narr`....Different?`;
   waitForClick; clearText; marker; appendText; 
   Narr`You have a new disease. One that we've never 
seen before.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"A new kind of disease?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So that was...?"`;
   waitForClick; clearText; marker; sound(`T5C247`); appendText; 
   //Tsugumi
   Tsugumi`"Yes."`;
   waitForClick; clearText; marker; sound(`T5C248`); appendText; 
   //Tsugumi
   Tsugumi`"I don't know how I got it or when."`;
   waitForClick; clearText; marker; sound(`T5C249`); appendText; 
   //Tsugumi
   Tsugumi`"But by the time I woke up...no, probably 
before I got in the accident."`;
   waitForClick; clearText; marker; sound(`T5C250`); appendText; 
   //Tsugumi
   Tsugumi`"I was already in the process of becoming 
'immortal.'"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU12A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Alright, I'd like to take a little of your 
blood.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Why?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Well, it's for research, to find a way to 
cure you, of course.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Research?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Your illness is very rare.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Rare?`;
   waitForClick; clearText; marker; appendText; 
   Narr`There are very few people in the world who 
have it and of all those people you're special.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Special?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Your genetic code is being rewritten. It is 
truly fascinating. You are the talk of our 
whole medical center.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I don't understand...what you are talking 
about...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Hey, don't worry about it. We're going to 
find a way to make you better, I promise.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Um? How are you going to get some blood?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Weeell, princess...We just...Hey, don't you 
worry yourself about it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`.........`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just give me your arm, and we'll be done 
before you know it. It won't hurt.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
showTextbox();
text(() => {
   marker; sound(`T5C251`); appendText; 
   //Tsugumi
   Tsugumi`"They came to take blood samples again and 
again."`;
   waitForClick; clearText; marker; sound(`T5C252`); appendText; 
   //Tsugumi
   Tsugumi`"I didn't think much about it at the time. 
Why they would do that..."`;
   waitForClick; clearText; marker; sound(`T5C253`); appendText; 
   //Tsugumi
   Tsugumi`"The doctors kept telling me, 'It's so we can 
find a cure for you,' 'It's so we can help 
you, and people like you.'"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU12A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Hey, you there next to me...`;
   waitForClick; clearText; marker; appendText; 
   Narr`What?`;
   waitForClick; clearText; marker; appendText; 
   Narr`You're sick too, aren't you?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Me? Uh, well I...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The same sickness as me?`;
   waitForClick; clearText; marker; appendText; 
   Narr`No. Ummm....I mean probably not, anyway.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You mean...you aren't sure?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Yeah, I'm fine. I know. I can...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Um, you can?`;
   waitForClick; clearText; marker; appendText; 
   Narr`I can see the future.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
showTextbox();
text(() => {
   marker; sound(`T5C254`); appendText; 
   //Tsugumi
   Tsugumi`"This is what he told me."`;
   waitForClick; clearText; marker; sound(`T5C255`); appendText; 
   //Tsugumi
   Tsugumi`"'You are going to have many tragedies in your 
life.'"`;
   waitForClick; clearText; marker; sound(`T5C256`); appendText; 
   //Tsugumi
   Tsugumi`"'But I don't want you to be sad.'"`;
   waitForClick; clearText; marker; sound(`T5C257`); appendText; 
   //Tsugumi
   Tsugumi`"'The first one in five years, then three 
years later, then another three years...'"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T5C258`); appendText; 
   //Tsugumi
   Tsugumi`"'But you're going to...live through all of 
them.'"`;
   waitForClick; clearText; marker; sound(`T5C259`); appendText; 
   //Tsugumi
   Tsugumi`"That's pretty much what he told me."`;
   waitForClick; clearText; marker; sound(`T5C260`); appendText; 
   //Tsugumi
   Tsugumi`"It didn't take long for me to understand 
what he was saying, even at my young age."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU13A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi, take a look, there's a cat and mouse 
over there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Oh yeah. They're so cute...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wonder why they're in a place like this?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Yeah...Those cages are so small, it looks 
painful...`;
   waitForClick; clearText; marker; appendText; 
   Narr`You want to let them out?`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wonder if it'd be alright...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`It should be, come on, let's do it!`;
   waitForClick; clearText; marker; appendText; 
   Narr`Hey, wait...`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU13B`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Okay, everyone out! Run while you can!`;
   waitForClick; clearText; 
});
removeBG({ mode: WHITE, transition: 02 });
playSFX({ name: `SE00_11`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Crash!`;
   waitForClick; clearText; marker; appendText; 
   Narr`...Hey! What do you think you two are doing!`;
   waitForClick; clearText; 
});
playSFX({ name: `SE09_03L`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Oh no! The experiment!`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone be careful! Whatever you do don't 
let them bite you!`;
   waitForClick; clearText; marker; appendText; 
   Narr`Watch out, they're contagious!`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 01 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`............`;
   waitForClick; clearText; 
});
hideTextbox();
stopSFX()
bgload({ name: `EV_TU13A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`They were really mad at us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You opened up those cages so fast, you 
surprised me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`They caught all of the animals again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Yeah, they're right back where they were 
before.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In those cramped, small cages...`;
   waitForClick; clearText; marker; appendText; 
   Narr`They're trapped again...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Why do they have to be locked up that way?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Why...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wonder...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Why?`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
showTextbox();
text(() => {
   marker; sound(`T5C261`); appendText; 
   //Tsugumi
   Tsugumi`"I slowly started to realize why."`;
   waitForClick; clearText; marker; sound(`T5C262`); appendText; 
   //Tsugumi
   Tsugumi`"I began to understand bit by bit, that I 
wasn't being kept at a hospital, but a 
research facility."`;
   waitForClick; clearText; marker; sound(`T5C263`); appendText; 
   //Tsugumi
   Tsugumi`"Nobody came to see me..."`;
   waitForClick; clearText; marker; sound(`T5C264`); appendText; 
   //Tsugumi
   Tsugumi`"And none of the 'patients' ever left..."`;
   waitForClick; clearText; marker; sound(`T5C265`); appendText; 
   //Tsugumi
   Tsugumi`"And there were hardly ever any new 
patients..."`;
   waitForClick; clearText; marker; sound(`T5C266`); appendText; 
   //Tsugumi
   Tsugumi`"And the whole time, I never knew where I was."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU13B`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Huh? They're all gone.`;
   waitForClick; clearText; marker; appendText; 
   Narr`........`;
   waitForClick; clearText; marker; appendText; 
   Narr`You didn't let them out again, did you?`;
   waitForClick; clearText; marker; appendText; 
   Narr`... No.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Oh. Well, I wonder where they went, then?`;
   waitForClick; clearText; marker; appendText; 
   Narr`...I don't know...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Hmmm. But they shouldn't have been kept in 
such a cramped space anyway.`;
   waitForClick; clearText; marker; appendText; 
   Narr`...Yeah...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe the researchers thought the same thing 
and let them go then?`;
   waitForClick; clearText; marker; appendText; 
   Narr`...No idea...`;
   waitForClick; clearText; 
});
removeBG({ mode: WHITE, transition: 02 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It's no good. We still haven't been able to 
discover the reason or mechanism behind it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It happened right in front of me, but I still 
can't believe it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The only explanation I can come up with is 
genetic transfer....It goes against 
everything we know about science.`;
   waitForClick; clearText; marker; appendText; 
   Narr`They withstood up to 4 splicings. I think 
maybe they could take 8...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Let's keep testing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No, if we continue...`;
   waitForClick; clearText; marker; appendText; 
   Narr`There is no mistaking it they're still alive. 
They might still even react at 16...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But, they're not...!`;
   waitForClick; clearText; marker; appendText; 
   Narr`These aren't living creatures anymore...is 
that what you want to say?`;
   waitForClick; clearText; marker; appendText; 
   Narr`........`;
   waitForClick; clearText; marker; appendText; 
   Narr`Perhaps...that way of thinking might have been 
correct, according to our old way of 
thinking. But we have no idea of the 
possibilities this entails.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That's...that's not right...it's crazy.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`........`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU13C`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Ah! The mice are still there! They're so cute.`;
   waitForClick; clearText; marker; appendText; 
   Narr`........`;
   waitForClick; clearText; marker; appendText; 
   Narr`Wait, something's strange. One, two, three...`;
   waitForClick; clearText; marker; appendText; 
   Narr`........`;
   waitForClick; clearText; marker; appendText; 
   Narr`Huh? Are there more of them? Or less?`;
   waitForClick; clearText; marker; appendText; 
   Narr`........`;
   waitForClick; clearText; marker; appendText; 
   Narr`Did they put the cats back in their cages?`;
   waitForClick; clearText; marker; appendText; 
   Narr`.........`;
   waitForClick; clearText; marker; appendText; 
   Narr`The cover is locked.... Umph... I can't get 
it off.`;
   waitForClick; clearText; marker; appendText; 
   Narr`.........`;
   waitForClick; clearText; marker; appendText; 
   Narr`Huh? What?`;
   waitForClick; clearText; marker; appendText; 
   Narr`.........`;
   waitForClick; clearText; marker; appendText; 
   Narr`Hey kid...? Where did the kid go?`;
   waitForClick; clearText; marker; appendText; 
   Narr`.........`;
   waitForClick; clearText; marker; appendText; 
   Narr`Answer me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`.........`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
removeBG({ mode: WHITE, transition: 02 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Get out of here. It's time for you to leave.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 19, volume: 100 });
bgload({ name: `EV_TU11D`, transition: 10 });
showTextbox();
text(() => {
   marker; sound(`T5C267`); appendText; 
   //Tsugumi
   Tsugumi`"That's what it was like for eight years, day 
in and day out."`;
   waitForClick; clearText; marker; sound(`T5C268`); appendText; 
   //Tsugumi
   Tsugumi`"Every single day..."`;
   waitForClick; clearText; marker; sound(`T5C269`); appendText; 
   //Tsugumi
   Tsugumi`"The researcher called for me."`;
   waitForClick; clearText; marker; sound(`T5C270`); appendText; 
   //Tsugumi
   Tsugumi`"Telling me, 'I'm your friend.'"`;
   waitForClick; clearText; marker; sound(`T5C271`); appendText; 
   //Tsugumi
   Tsugumi`"But the truth is, he wasn't."`;
   waitForClick; clearText; marker; sound(`T5C272`); appendText; 
   //Tsugumi
   Tsugumi`"I was being forced to do all of these tests 
and experiments."`;
   waitForClick; clearText; marker; sound(`T5C273`); appendText; 
   //Tsugumi
   Tsugumi`"And they just used me like some tool."`;
   waitForClick; clearText; marker; sound(`T5C274`); appendText; 
   //Tsugumi
   Tsugumi`"I stopped being able to feel pain, or to 
suffer."`;
   waitForClick; clearText; marker; sound(`T5C275`); appendText; 
   //Tsugumi
   Tsugumi`"When I went back to bed, all I could do is 
cry."`;
   waitForClick; clearText; marker; sound(`T5C276`); appendText; 
   //Tsugumi
   Tsugumi`"Then one day the kid next to me didn't come 
back."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; sound(`T5C277`); appendText; 
   //Tsugumi
   Tsugumi`"Takeshi...do you know why?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...Yeah..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I mean, no, I don't know, but..."`;
   waitForClick; clearText; marker; sound(`T5C278`); appendText; 
   //Tsugumi
   Tsugumi`"So I don't have to explain to you...?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Yeah..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"If it's too painful for you...you don't have 
to say anything more."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi was stroking Chami with a trembling 
fingers.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I put my hand lightly on Tsugumi's shoulder.`;
   waitForClick; clearText; marker; appendText; 
   Narr`To suddenly get hit by a virulent disease...`;
   waitForClick; clearText; marker; appendText; 
   Narr`And become someone who would never age...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Spend eight years trapped in a research 
facility...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't imagine how it must have been to go 
through that.`;
   waitForClick; clearText; marker; sound(`T5C279`); appendText; 
   //Tsugumi
   Tsugumi`"I hate it..."`;
   waitForClick; clearText; marker; sound(`T5C280`); appendText; 
   //Tsugumi
   Tsugumi`"And I hate myself for talking about it..."`;
   waitForClick; clearText; marker; sound(`T5C281`); appendText; 
   //Tsugumi
   Tsugumi`"It's funny, isn't it..."`;
   waitForClick; clearText; marker; sound(`T5C282`); appendText; 
   //Tsugumi
   Tsugumi`"Whenever I'm with you, I find myself talking 
about the stupidest things..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It's okay, you don't have to talk."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'm so sorry..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It was totally irresponsible what I said back 
there."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It was careless of me to talk about being 
alive like it is just a given."`;
   waitForClick; clearText; marker; sound(`T5C283`); appendText; 
   //Tsugumi
   Tsugumi`"I don't want your pity."`;
   waitForClick; clearText; marker; sound(`T5C284`); appendText; 
   //Tsugumi
   Tsugumi`"It's too late..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It isn't like that. It's not like that!"`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Tsugumi......"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I was wrong, okay?"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU11E`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T5C285`); appendText; 
   //Tsugumi
   Tsugumi`"You were wrong!?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She screamed suddenly.`;
   waitForClick; clearText; marker; sound(`T5C286`); appendText; 
   //Tsugumi
   Tsugumi`"Don't tell me that!!"`;
   waitForClick; clearText; marker; sound(`T5C287`); appendText; 
   //Tsugumi
   Tsugumi`"You don't just take back what you say. Not 
that easily...!"`;
   waitForClick; clearText; marker; sound(`T5C288`); appendText; 
   //Tsugumi
   Tsugumi`"You want irresponsible, THAT's 
irresponsible...!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`".........!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know what to tell her.`;
   waitForClick; clearText; marker; sound(`T5C289`); appendText; 
   //Tsugumi
   Tsugumi`"You're just like them."`;
   waitForClick; clearText; marker; sound(`T5C290`); appendText; 
   //Tsugumi
   Tsugumi`"You don't understand anything..."`;
   waitForClick; clearText; marker; sound(`T5C291`); appendText; 
   //Tsugumi
   Tsugumi`"You throw around words like 'friend' without 
really meaning it."`;
   waitForClick; clearText; marker; sound(`T5C292`); appendText; 
   //Tsugumi
   Tsugumi`"You don't understand anything about how I'm 
feeling."`;
   waitForClick; clearText; marker; sound(`T5C293`); appendText; 
   //Tsugumi
   Tsugumi`"You don't understand anything about what the 
Kid's feeling!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was making me feel it had been a mistake 
to say, 'I'd been wrong.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`No...that wasn't it either.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The truth was...`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no such thing as right and wrong.`;
   waitForClick; clearText; marker; sound(`T5C294`); appendText; 
   //Tsugumi
   Tsugumi`"'People who are alive, should live as long 
as they can,' you said that didn't you...?"`;
   waitForClick; clearText; marker; sound(`T5C295`); appendText; 
   //Tsugumi
   Tsugumi`"I'll survive."`;
   waitForClick; clearText; marker; sound(`T5C296`); appendText; 
   //Tsugumi
   Tsugumi`"I'll probably die many times more and I'll 
still be alive."`;
   waitForClick; clearText; marker; sound(`T5C297`); appendText; 
   //Tsugumi
   Tsugumi`"Chami here too..."`;
   waitForClick; clearText; marker; sound(`T5C298`); appendText; 
   //Tsugumi
   Tsugumi`"But Takeshi, can you say that you're really 
alive right now?"`;
   waitForClick; clearText; marker; sound(`T5C299`); appendText; 
   //Tsugumi
   Tsugumi`"Are you REALLY there, in front of me now?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`T5C300`); appendText; 
   //Tsugumi
   Tsugumi`"...What's wrong?"`;
   waitForClick; clearText; marker; sound(`T5C301`); appendText; 
   //Tsugumi
   Tsugumi`"You said...you'd accept everything I had to 
say, right...?"`;
   waitForClick; clearText; marker; sound(`T5C302`); appendText; 
   //Tsugumi
   Tsugumi`"You said that...right Takeshi?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She bit her lip.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her shoulders were shaking.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She looked bitterly disappointed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Disappointed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That when she tried to live, she ended up 
dying.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And when she tried to die, she ended up living.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a process that repeated itself over 
and over without end.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It wasn't right or wrong - it was her reality.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And it was something that she had no choice 
but to accept.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I still wasn't able to accept it.`;
   waitForClick; clearText; marker; sound(`T5C303`); appendText; 
   //Tsugumi
   Tsugumi`"This is so stupid..."`;
   waitForClick; clearText; marker; sound(`T5C304`); appendText; 
   //Tsugumi
   Tsugumi`"I'm stupid..."`;
   waitForClick; clearText; marker; sound(`T5C305`); appendText; 
   //Tsugumi
   Tsugumi`"Uumm.... But you know what? You're way 
stupider than me..."`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE06_00`, a1: 0, volume: 95 });
shakeScreenHard();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The gondola swayed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We had arrived at the end of the ride.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had no idea how many times we'd passed by 
Qualle.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_02`, a1: 0, volume: 95 });
removeBG({ mode: WHITE, transition: 02 });
delay({ interval: 60 });
playSFX({ name: `SE00_00`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The door opened suddenly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She got up quickly and opened the door.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Tsugumi!!"`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE05_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I stuck out my hand to grab her but she 
swatted it away immediately.`;
   waitForClick; clearText; marker; sound(`T5C306`); appendText; 
   //Tsugumi
   Tsugumi`"Don't touch me!"`;
   waitForClick; clearText; marker; sound(`T5C307`); appendText; 
   //Tsugumi
   Tsugumi`"Don't...touch me..."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Slam!`;
   waitForClick; clearText; marker; appendText; 
   Narr`She closed the door from outside.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The jellyfish I was riding on started moving 
again.`;
   waitForClick; clearText; 
});
bgload({ name: `BG36A1`, transition: 10 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Stupid..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I muttered to myself.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Stupid idiot..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I said it myself.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I said it to her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I said it to no one and nothing in particular.`;
   waitForClick; clearText; marker; appendText; 
   Narr`To everything....`;
   waitForClick; clearText; marker; appendText; 
   Narr`Outside the window was the ocean.`;
   waitForClick; clearText; marker; appendText; 
   Narr`An ocean closed off from the light.`;
   waitForClick; clearText; marker; appendText; 
   Narr`When I passed under the shadow of the 
installation, the gondola became dark.`;
   waitForClick; clearText; 
});
bgload({ name: `BG36A2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And inside of the darkness...`;
   waitForClick; clearText; marker; appendText; 
   Narr`All alone in the darkness...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I bit hard down on my lip as I cried.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 01 });
delay({ interval: 120 });
bgload({ name: `BG17A1`, transition: 10 });
clock(`20:19`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Soon it was night.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the Conference Room, You, Coco and Pipi 
were waiting.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Even the Kid...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked like the Kid had calmed down some.`;
   waitForClick; clearText; marker; appendText; 
   Narr`While I'd been gone, it seemed that You and 
Coco had been able to talk some sense into him.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You told me that he'd probably been upset by a 
reoccurring memory, and had gotten worked up 
in spite of himself.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt that I'd gotten out of hand and had 
said some terrible things myself.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I went around to everyone there and apologized.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Soon afterward...`;
   waitForClick; clearText; marker; appendText; 
   Narr`A report came to us in the Conference Room 
directly from LeMMIH's terminal.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You read out the contents to all of us.`;
   waitForClick; clearText; 
});
hideTextbox();
bgload({ name: `MAP3F_A2`, transition: 30 });
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 3 });
openMapCommentAnim();
delay({ interval: 120 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Third floor: Dritte stock partition schematic`;
   waitForClick; clearText; marker; appendText; 
   Narr`The 'Cosmic Whale' room, had flooded 
completely.`;
   waitForClick; clearText; 
});
hideTextbox();
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP3F_A2`, transition: 30 });
unSkippableDelay(1);
bgload({ name: `MAP3F_B2`, transition: 20 });
delay({ interval: 120 });
removeBG({ mode: BLACK, transition: 02 });
bgload({ name: `BG17A2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Casualties: None`;
   waitForClick; clearText; marker; appendText; 
   Narr`Flooding to other rooms: None`;
   waitForClick; clearText; marker; appendText; 
   Narr`Chance of damage spreading: None...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Shivering slightly in the cold, I wrapped my 
arms around my knees and we all went to sleep.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 01 });
stopBGM();
delay({ interval: 150 });
varop(`(28 0a a4) b3 := (00) 0`);
jump(`T_6A`);
