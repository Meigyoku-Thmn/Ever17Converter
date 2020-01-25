l_b0 = 5;
l_dayA = 5;
l_dayB = 5;
setDialogBoxColor(GREEN);
playBGM({ num: 3, volume: 100 });
bgload({ name: `BG07B1`, transition: 20 });
setSceneTitle({ index: 34 });
clock(`19:1`);
showTextbox();
text(() => {
   `It was time for dinner.`;
   `I made enough sandwiches for everyone and passed them out.`;
   `Everyone moved with them to the rest area.`;

});
bgload({ name: `BG21B1`, transition: 20 });
showTextbox();
text(() => {
   `We gathered on the circular stage in the center of the room, and began eating.`;

});
fgload({ id: 1, name: `SO15ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `At a wave of Sora's hand, a gentle rain started pouring from the ceiling sprinklers onto the flowerbeds.`;
   `There was even a small rainbow.`;

});
fgload({ id: 1, name: `SO16ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Smiling, Sora stared at the fresh flowers and the sparkling rainbow.`;

});
removeFG({ id: 1, useAnim: true });
if (l_sora_flag == 0) goto(lbl_000000f6);
showTextbox();
text(() => {
   `Her smile was so carefree...`;
   `I didn't want to think it wasn't real.`;
   `I didn't want to think she was just pretending for our benefit.`;
   `But...`;
   `Was she really smiling because she wanted to, or was she just trying to cheer us up?`;
   `'We don't need to try to help Sora, she will save herself.'`;
   `This thought wouldn't leave my mind.`;

});
goto(lbl_000000fb);
let lbl_000000f6;
showTextbox();
text(() => {
   `I wondered how long I could watch the little peaceful world she had created.`;
   `How long could I keep looking at her smiling face?`;
   `Thinking about it made me feel lonely.`;

});
let lbl_000000fb;
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   `Then again there were others here too - one of them opening her mouth so wide, it didn't seem it would open any more.`;
   `Now, SHE looked right happy.`;

});
hideTextbox();
playBGM({ num: 18, volume: 100 });
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T5C000)`"Takeshiiiii!"`;
   `And had flipped off the wrapping paper...`;
   You(T5C001)`"I want another sandwich. Pleeeeeeaaase!"`;

});
fgload({ id: 1, name: `YU08BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T5C002)`"Would you be so kind as to make another one and bring it here....? Pretty pleeeeaaase?"`;
   `She called out to me in a voice that seemed just a little TOO sweet.`;
   `It seemed to me that she had been crying earlier, but it must have been my imagination...`;
   Takeshi`"Alright, alright. You're such a slave-driver...heh, heh."`;

});
fgload({ id: 1, name: `YU15BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T5C003)`"What was that? Did you say something?"`;
   Takeshi`"Nothing at all, milady."`;

});
fgload({ id: 1, name: `YU16BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T5C004)`"Just as long as you realize who's in charge. Oh, ho, ho, ho, ho..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Reluctantly, I trudged back into the kitchen.`;

});
bgload({ name: `BG07B1`, transition: 20 });
showTextbox();
text(() => {
   `(I can't believe that girl...)`;
   `It wasn't like they were that hard to make.`;
   `We had plenty of provisions.`;
   `Still I was irritated somehow, as I waited for the cold oil to heat up again.`;
   `I anxiously fidgeted as I waited.`;
   `The wire basket struck the frying pan with a clang.`;
   `(I'll just get this done as soon as I can...)`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5C005)`"Hey..."`;
   `A 'customer' had showed up without warning.`;
   Tsugumi(T5C006)`"I'd like to ask for another one, if that's okay."`;
   Takeshi`"GEEEZ!"`;

});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5C007)`"W-what, Takeshi..."`;
   Tsugumi(T5C008)`"Did I catch you at a bad time...?"`;
   `Tsugumi looked annoyed.`;
   Takeshi`"Eh? T-Tsugumi!?"`;
   Tsugumi(T5C009)`"...Um...."`;

});
fgload({ id: 1, name: `TU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5C010)`"You don't want to make one?"`;
   Takeshi`"Huh? Uh, no it's just..."`;
   Takeshi`"Don't worry about it. It's okay."`;
   `(Alright, settle down...) `;
   `I'd allowed myself to get worked up...`;
   `Trying to shake off my frustration, I replied...`;
   Takeshi`"You just want one?"`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5C011)`"Yeah, thanks. Oh, yeah, one more thing..."`;
   `Tsugumi said this as she turned around.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5C012)`"What about you, Coco?"`;

});
multifgload2({ id1: 1, id2: 2, name1: `CO15ADM`, name2: `TU11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T5C013)`"Hmm, I'm not sure..."`;
   `Coco peeked out from behind Tsugumi.`;
   Tsugumi(T5C014)`"What do you want?"`;
   Coco(T5C015)`"Maybe I'll eat just a little something."`;

});
fgload({ id: 2, name: `TU12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5C016)`"Well... How about some bread?"`;
   Coco(T5C017)`"Okay, sounds good!"`;

});
fgload({ id: 1, name: `CO02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Coco(T5C018)`"Takepyon, I'd like some bread, please."`;
   Takeshi`"Okay, okay. Gotcha."`;
   Coco(T5C019)`"Thanks. Heh, heh...."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `TU11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5C020)`"Um, by the way, Takeshi."`;

});
fgload({ id: 1, name: `TU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5C021)`"Were you upset a little bit earlier?"`;
   Tsugumi(T5C022)`"Are you feeling okay? Or is it...?"`;
   Takeshi`"Nah, it's not like that."`;
   Takeshi`"It just takes a while for the oil to get warmed up, so I was irritated, is all."`;

});
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5C023)`"Oh, was that it?"`;
   `She flashed me a smile.`;

});
fgload({ id: 1, name: `TU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5C024)`"Okay. Don't worry, just take your time."`;
   Tsugumi(T5C025)`"I'll be waiting."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi grabbed on to Coco's hand and started walking slowly away.`;
   `She was smiling so gently...`;

});
if (l_tsugumi_flag == 0) goto(lbl_000002d6);
showTextbox();
text(() => {
   `She had surprised me when she started talking to me all of a sudden...`;
   `The Tsugumi right then seemed like she would never talk about 'dying,' even by accident.`;
   `I wondered if she had resolved her feelings?`;
   `If that was the case, then it seemed like talking with her had been the right thing to do.`;
   `I had chased after her constantly...`;
   `Been hit by her...`;
   `Been put down by her...`;
   `But the Tsugumi before me was unmistakably one of us.`;

});
goto(lbl_000002db);
let lbl_000002d6;
showTextbox();
text(() => {
   `It didn't seem like she cared about my troubles...`;
   `Every time we met I never know how to react....and it bothered me some.`;
   `Had she totally forgotten about the events of the other night? I had to wonder.`;
   `(Well, if she doesn't care, then I suppose that's best...)`;
   `The Tsugumi before me then seemed like she would never talk about 'dying,' even by accident.`;
   `I decided to believe that her smile was real.`;

});
let lbl_000002db;
multifgload2({ id1: 1, id2: 2, name1: `CO15ADS`, name2: `TU11ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   Coco(T5C026)`"And guess what? You wanna know what? I had a dream last night!"`;
   `Tsugumi was listening to Coco intently.`;
   Tsugumi(T5C027)`"What kind of dream?"`;

});
fgload({ id: 1, name: `CO16ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   Coco(T5C028)`"I was riding a whale!"`;
   `Coco seemed to be truly enjoying herself.`;
   Coco(T5C029)`"And Kiddo was riding on it with me..."`;

});
fgload({ id: 1, name: `CO15ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   Coco(T5C030)`"And the whale was like totally bouncing all over the place..."`;
   Coco(T5C031)`"I just kept hopping and jumping....!"`;
   Coco(T5C032)`"And we were in outer space going to this place called Planet Squid, and were flying all around."`;
   Coco(T5C033)`"And then guess what?"`;

});
fgload({ id: 1, name: `CO16ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   Coco(T5C034)`"I met someone from planet Kuikui!"`;

});
fgload({ id: 2, name: `TU12ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5C035)`"Hmmm....oh really..."`;
   Tsugumi(T5C036)`"So you met someone from planet Kuikui, eh?"`;
   Coco(T5C037)`"Yup, yup!"`;
   Coco(T5C038)`"Kiddo and me, we both met him."`;

});
showTextbox();
text(() => {
   Tsugumi(T5C039)`"Is that so...?"`;
   Tsugumi(T5C040)`"That's GREAT Coco..."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi listened to Coco's nonsense with a smile on her face.`;
   `I watched their interaction quietly...`;
   `I tried to sense what they were feeling...`;

});
bgload({ name: `BG21B1`, transition: 20 });
clock(`19:13`);
showTextbox();
text(() => {
   `And...`;

});
fgload({ id: 1, name: `YU04BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T5C041)`"Takeshiii, what's taking you so looong...!"`;
   `I went into the rest area and You was lounging about lazily.`;
   Takeshi`"What the hell are you all worked up about!"`;

});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T5C042)`"I'm not 'worked up' about anything."`;
   You(T5C043)`"It's just that you're so slow that I was wondering 'what's taking Takeshi so long,' is all..."`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T5C044)`"And, so? How'd it turn out, chef?"`;
   Takeshi`"........."`;
   Takeshi`"You really don't know when to shut up, do you..."`;
   Takeshi`"Look, it's right here, so stop worrying."`;

});
fgload({ id: 1, name: `YU08BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `When I showed You the package, she shrugged.`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `CO02ADS`, name2: `TU10ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi and Coco had already finished theirs, and were following behind me.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `I headed over to the circle in the center of the room.`;
   Takeshi`"Here. It's the Tanaka special. Take it!"`;
   `I got up on the round dais, and threw the package directly at You.`;

});
fgload({ id: 1, name: `YU06BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T5C045)`"What are you doing...!!"`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE08_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Splat.`;
   `The package flew over You's knees and landed softly in the center of the stage.`;
   Takeshi`"Hey, come on. Wake up, will you...?"`;
   `I pretended to show surprise.`;
   Takeshi`"Be careful, those're some gourmet goods you know?"`;

});
fgload({ id: 1, name: `YU04BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T5C046)`"W-well, you're the one who threw it all of a sudden!"`;
   `You's cheeks puffed up.`;
   `She picked up the package and dusted it off.`;
   Takeshi`"Sorry, I was just joking..."`;
   `I lifted both hands in mock apology.`;
   Takeshi`"I was worried it would fall into the water there for a second."`;
   You(T5C047)`"Oh, stop it..."`;

});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T5C048)`"You don't have to pick on me you know..."`;
   `Grumbling to herself she undid the string around the wrapping.`;

});
fgload({ id: 1, name: `YU06BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T5C049)`"Ah!"`;
   `You looked at the contents, and puffed up again, `;
   You(T5C050)`"Hey, this sandwich is burnt!"`;
   Takeshi`"Not THAT badly. You should still be able to eat it!"`;

});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T5C051)`"I suppose..."`;
   Takeshi`"Gimme a break."`;
   `We carried on needling each other like this for a while...`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `When suddenly someone came up and stood in front of You and me.`;
   `No...maybe he'd been there for a long time.`;

});
fgload({ id: 1, name: `KA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `The Kid was staring at both of us with a leaden gaze.`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU15BDM`, name2: `KA05ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T5C052)`"Hey, what's wrong, Kid?"`;
   You(T5C053)`"...You don't want it?"`;
   `The Kid held an unopened fried chicken sandwich in his hand.`;
   Takeshi`"You gotta eat to stay healthy, Kid."`;
   Takeshi`"It's probably cold by now. You want me to heat it up again for you?"`;
   `I put out my hand.`;
   `But he pulled the sandwich close to himself and tried to get away.`;
   `He looked at me with a hard expression...`;
   `And...`;

});
hideTextbox();
fgload({ id: 1, name: `YU06BDM`, x: 128, useAnim: true });
stopBGM();
showTextbox();
text(() => {
   You(T5C054)`"What!?"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
hideTextbox();
playBGM({ num: 16, volume: 100 });
showTextbox();
text(() => {
   `The Kid...`;
   `Crushed the sandwich in his hand.`;

});
playSFX({ name: `SE10_03`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `Using all his strength.`;
   `The wrapping paper burst and sauce flew every which way.`;
   `It got on his clothes as well, but he didn't seem to notice.`;
   `He didn't stop there...`;
   `He took the mangled package and...`;

});
playSFX({ name: `SE02_04`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `Threw it with all of his might against the water on the ground.`;
   Takeshi`"W-what!?"`;
   Takeshi`"What the hell are you doing!!?"`;

});
fgload({ id: 1, name: `KA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid`"......."`;
   `His shoulders trembling, the Kid kept his face down.`;
   `He was finally able to drag out some words.`;

});
fgload({ id: 1, name: `KA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T5C055)`"Sick..."`;

});
fgload({ id: 1, name: `KA09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T5C056)`"I'm sick of it...!!"`;

});
fgload({ id: 1, name: `KA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T5C057)`"That's all I can take!"`;

});
playSFX({ name: `SE02_02`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `The kid kicked at the thin layer of water at his feet.`;
   `Everyone looked at him at once.`;
   Kid(T5C058)`"I can't stand it anymore!"`;
   Kid(T5C059)`"I don't want any more fried chicken sandwiches!"`;
   Kid(T5C060)`"I'm sick of them!"`;
   Kid(T5C061)`"I want to eat something else!!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `He screamed.`;
   `Everyone's breath caught in their throats.`;

});
multifgload2({ id1: 1, id2: 2, name1: `CO05ADM`, name2: `TU14ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   Coco`"........."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU03BDM`, name2: `SO13ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora`"........."`;
   You`"........."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"........."`;
   Pipi`"........."`;
   `But nobody had anything to say in reply.`;

});
fgload({ id: 1, name: `KA09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T5C062)`"I'm sick..."`;
   Kid(T5C063)`"And tired..."`;
   Kid(T5C064)`"So what if we're still alive..."`;
   Kid(T5C065)`"There isn't any proof that anyone is going to save us!"`;
   Kid(T5C066)`"What we're doing here..."`;

});
fgload({ id: 1, name: `KA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T5C067)`"Everything that we're doing here..."`;

});
fgload({ id: 1, name: `KA09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T5C068)`"There's no point..."`;
   Kid(T5C069)`"There isn't any point for us being here."`;
   `The Kid raised a shaking fist.`;
   `But not finding any direction to launch it, he lowered it again.`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `CO13ADM`, name2: `TU18ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Coco`"........."`;
   Tsugumi`"........."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU13BDM`, name2: `SO17ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora`"........."`;
   You`"........."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   Pipi(PIPI_06)`"....*whine*..."`;
   `Everyone tried to keep their eyes from meeting. `;
   `It seemed like they were afraid of what we might see...`;
   `They tried desperately to avert their gazes.`;
   `Nobody moved.`;
   `People pressed their lips firmly together and dared not speak.`;
   Takeshi`"St..."`;
   Takeshi`"Stupid fool!! What the hell are you talking about!!"`;
   `Finally I looked up, shouting.`;
   Takeshi`"Don't ask for the impossible!"`;
   Takeshi`"Do you have any idea what you're asking!?"`;
   Takeshi`"The only food we have to eat is this sandwich, and the snack shop upstairs, you know that!"`;

});
fgload({ id: 1, name: `KA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid`"........."`;
   Takeshi`"And you tell me you're 'sick' of it!?"`;
   Takeshi`"You still have to eat it!"`;
   Takeshi`"It's the only way to survive!!"`;
   Takeshi`"So you'd better be thankful for it!"`;

});
fgload({ id: 1, name: `KA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid`"........."`;
   Takeshi`"We're all putting up with it the best we can!"`;
   Takeshi`"You're one of the gang, right?"`;
   Takeshi`"You should be a little more cooperative..."`;
   Takeshi`"They're all being patient."`;
   Takeshi`"They're helping out."`;
   Takeshi`"Even if they don't like it, they eat, and they're surviving..."`;
   Takeshi`"If we don't...then we're finished!"`;
   Kid`"........."`;
   Takeshi`"Wake up..."`;
   Takeshi`"We're all going to get through this together..."`;
   Takeshi`"As long as we're alive, there's still hope."`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE06_04`, a1: 0, volume: 95 });
eff_4f = 51;
eff_3b = 1;
eff_3c = VAR_c6_0_6;
eff_3d = 4;
eff_3e = 2;
eff_3f = VAR_c3_0_6;
eff_40 = 2;
openShakeScreenAnim();
showTextbox();
text(() => {
   `BOOOOooom!!`;
   `A loud metallic sound echoed throughout the room.`;
   `It was a blunt sound.`;

});
hideTextbox();
closeShakeScreenAnim();
showTextbox();
text(() => {
   `The floor shook slightly.`;
   `Everyone staggered slightly and struggled to regain their balance.`;
   `But nobody tried to do anything else.`;

});
fgload({ id: 1, name: `KA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T5C070)`"...I know."`;

});
fgload({ id: 1, name: `KA09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T5C071)`"I know that, Takeshi...I know..."`;
   Kid(T5C072)`"But, still."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KA04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T5C073)`"But even though I know, what can I do!?"`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU06BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T5C074)`"Ahh...!"`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE05_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Just then the Kid knocked the sandwich out of You's hand.`;
   `She hadn't even taken a bite out of her 'Tanaka Special'......`;

});
playSFX({ name: `SE02_01`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `It fell into the water with a splash, and sank slowly.`;
   You(T5C075)`".........!!"`;

});
hideTextbox();
stopBGM();
playBGM({ num: 12, volume: 100 });
showTextbox();
text(() => {
   Takeshi`"Bastard! What do you think you're doing!!"`;
   `I went over and grabbed onto the Kid and raised my hand!`;

});
choice(
   `Hit the kid`,
   `Don't hit him`,
);
switch (l_choice) {
   case 0: goto(lbl_0000086f);
   case 1: goto(lbl_000008dd);
}
let lbl_0000086f;
l_tsugumi_point += 1;
showTextbox();
text(() => {
   Takeshi`"You better brace yourself...!"`;

});
fgload({ id: 1, name: `KA06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T5C076)`"!"`;

});
hideTextbox();
playSFX({ name: `SE05_00`, a1: 0, volume: 100 });
shakeScreen();
showTextbox();
text(() => {
   `—Whack!!`;
   `I struck the Kid hard on his cheek.`;

});
fgload({ id: 1, name: `KA09ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T5C077)`"Agh..."`;
   Takeshi`"........."`;
   `It hurt...`;
   `It had to have hurt him.`;
   `My hand even hurt.`;
   `But more than the pain in hand, my heart hurt.`;
   `I let go of the Kid's collar, and he backed away slowly.`;
   `Everyone watched us silently.`;
   Kid(T5C078)`"You hit me..."`;
   Kid(T5C079)`"Ouuch..."`;
   Kid(T5C080)`"Aaghh...."`;
   Kid(T5C081)`"Damn it, damn it..."`;
   `Tears welled up in his eyes.`;

});
removeFG({ id: 1, useAnim: true });
goto(lbl_0000093c);
let lbl_000008dd;
l_sora_point += 1;
showTextbox();
text(() => {
   Takeshi`"You....!"`;

});
fgload({ id: 1, name: `KA06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T5C082)`"!"`;
   `Cowed, the Kid froze.`;

});
fgload({ id: 1, name: `KA03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid`"........."`;
   Takeshi`"........."`;
   `I pulled back the hand that I had raised.`;
   `It all felt so stupid...`;
   `And so terribly sad.`;

});
fgload({ id: 1, name: `KA09ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `The Kid looked up at me all hunched up and trembling.`;
   `I was disappointed in myself for having tried to hit someone like him.`;
   `My heart ached with sadness.`;
   `I let go of the Kid's collar, and he backed away slowly.`;
   `Everyone watched us silently.`;
   Kid(T5C083)`"Aaghh...."`;
   Kid(T5C084)`"Damn it, damn it..."`;
   `Tears welled up in his eyes.`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
let lbl_0000093c;
if (l_sora_flag == 0) goto(lbl_00000963);
l_choice = 0;
jump(`T_5D`);
let lbl_00000963;
showTextbox();
text(() => {
   Takeshi`"Kid...look over at Tsugumi."`;
   Takeshi`"She injured her leg terribly and almost drowned..."`;
   Takeshi`"She had surgery...If it were me, I'd have probably died, but she pulled through it."`;
   `I pointed at Tsugumi.`;

});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi stood silently.`;
   `The kid timidly raised his eyes to look at her.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `But, he soon stared at the floor again.`;

});
fgload({ id: 1, name: `KA09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T5C085)`"But..."`;
   Kid(T5C086)`"Takeshi, you can say that, but..."`;

});
fgload({ id: 1, name: `KA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T5C087)`"I'm not Tsugumi..."`;
   Kid(T5C088)`"We're not all the same."`;
   Tsugumi`"........."`;
   Takeshi`"........."`;

});
fgload({ id: 1, name: `KA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T5C089)`"I can't do it."`;
   Kid(T5C090)`"I can't do it..."`;

});
fgload({ id: 1, name: `KA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T5C091)`"I'm just not that strong."`;
   Kid(T5C092)`"And I never will be...!"`;

});
fgload({ id: 1, name: `KA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T5C093)`"I can't go on living."`;
   Kid(T5C094)`"I don't want to go on living...!"`;

});
fgload({ id: 1, name: `KA09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T5C095)`"So, then...."`;
   Kid(T5C096)`"I should just..."`;
   Takeshi`"........."`;
   `I didn't want to make him say the rest.`;
   `But I couldn't stop him.`;
   `I knew how hard it would be for him to say.`;
   `Even I wasn't that strong.`;
   `Everyone waited for the Kid's next words in silence...`;
   `They were probably unthinkable.`;

});
hideTextbox();
stopBGM();
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5C097)`"So, what do you want to do?"`;
   Takeshi`"!?"`;
   You(T5C098)`"!!"`;
   Sora(T5C099)`"?"`;
   Coco(T5C100)`".........!?"`;
   Kid(T5C101)`"......What!?"`;

});
hideTextbox();
playBGM({ num: 15, volume: 100 });
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5C102)`"What do you want to do...Kid?"`;
   `Tsugumi took a step forward and stared at the kid.`;
   `Those eyes were unfeeling, and quiet.`;
   Tsugumi(T5C103)`"Come on, you can tell me."`;
   Tsugumi(T5C104)`"I want to know what you want to do..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Softly she approached the Kid one step at a time.`;
   `Everyone was so caught off guard that they couldn't move. Couldn't say a word.`;

});
multifgload2({ id1: 1, id2: 2, name1: `TU15ADS`, name2: `KA03ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   Kid`"........."`;
   Tsugumi(T5C105)`"What? You can't say it?"`;
   Kid(T5C106)`"..........u."`;
   `He tried to say something, but no words would come out of his mouth.`;
   `He had also forgotten how to back away.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi went up to the Kid and touched him.`;

});
multifgload2({ id1: 1, id2: 2, name1: `TU15ADM`, name2: `KA13ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5C107)`"You don't want to live?"`;
   Kid(T5C108)`"...Ugh..."`;
   `The Kid tried to nod, but his head wouldn't budge.`;

});
multifgload2({ id1: 1, id2: 2, name1: `TU16ADM`, name2: `KA03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5C109)`"So, you want to die then?"`;
   Kid(T5C110)`"...Uuugh..."`;
   `The Kid couldn't respond either. `;

});
fgload({ id: 1, name: `TU17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5C111)`"Say something, please..."`;
   Tsugumi(T5C112)`"I don't know what you mean...?"`;

});
fgload({ id: 2, name: `KA13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid`"........."`;
   `Tsugumi asked the Kid, her tone neutral.`;

});
fgload({ id: 1, name: `TU16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5C113)`"So, which is it...?"`;
   Tsugumi(T5C114)`"Do you want to die?"`;
   Tsugumi(T5C115)`"Do you want to live?"`;

});
fgload({ id: 2, name: `KA03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid(T5C116)`"...Aaggh..."`;

});
fgload({ id: 1, name: `TU17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   Tsugumi(T5C117)`"So...you can't answer?"`;
   Tsugumi(T5C118)`"Well then..."`;
   Tsugumi(T5C119)`"Don't ever...say that again."`;

});
fgload({ id: 1, name: `TU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5C120)`"Okay?"`;

});
fgload({ id: 2, name: `KA09ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid(T5C121)`"Ah......!!"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `The Kid broke down in tears, and fell to floor covered in water.`;
   Kid(T5C122)`"Aaaagh......"`;
   Kid(T5C123)`"I'm sorry..."`;
   Kid(T5C124)`"I'm so...sorryyy...."`;

});
multifgload2({ id1: 1, id2: 2, name1: `KA09ADS`, name2: `YU13BDS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   `You, suddenly spurred into action, ran over to the Kid and wrapped her arms around his shoulders.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `CO03ADS`, name2: `SO13ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   `Sora looked down and covered her face with her hands. She was trembling.`;
   `Coco and Pipi were staring at everyone, speechless.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Tsu-Tsugumi...!?"`;
   `Not knowing what else to say, I just stood there.`;
   `I looked at her face.`;

});
fgload({ id: 1, name: `TU17ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `But I couldn't read what she was thinking from her expression.`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   Tsugumi(T5C125)`"Takeshi..."`;

});
fgload({ id: 1, name: `TU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5C126)`"Come here for a second..."`;
   Takeshi`"?"`;

});
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Seeing that I was confused, Tsugumi ran over to me.`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
stopSFX()
showTextbox();
text(() => {
   `Eyebrows raised she glared at me strongly.`;
   `What was she thinking...?`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playBGM({ num: 4, volume: 100 });
showTextbox();
text(() => {
   Takeshi`"Ouch!"`;
   Takeshi`"W-w-w-what are you doing...that hurts!"`;

});
fgload({ id: 1, name: `TU04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5C127)`"Stop whining and get over here!"`;
   Tsugumi(T5C128)`"Come on, hurry up!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Totally clueless, I followed along behind her.`;
   `She had grabbed my ear and mercilessly tugged...`;

});
bgload({ name: `BG26B3L`, transition: 20 });
clock(`19:27`);
showTextbox();
text(() => {
   Takeshi`"L-let me go! Tsugumi!"`;
   Takeshi`"Why are you doing this! Ouch..."`;

});
fgload({ id: 1, name: `TU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   `Wordlessly, she doggedly moved forward.`;
   `She kept a firm grip on me and kept pulling, so that I couldn't get away.`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE01_07`, a1: 0, volume: 90 });
bgload({ name: `BG29A1`, transition: 20 });
fgload({ id: 1, name: `TU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"You'll rip my ear off! It's seriously going to come off."`;
   Takeshi`"Aaaaaagh, sheriff..."`;
   Takeshi`"This is killing meeee. Let go of me. Pleeeasee."`;
   Tsugumi`".........."`;
   `We kept climbing the stairs.`;
   `She wouldn't let go no matter how I pleaded, so I finally shut up.`;

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
   `And when we finally made it to the 2nd floor, she let go of my ear.`;
   Takeshi`"Wheeeew....thank heavens..."`;
   Takeshi`"I mean...what are you doing!! Are you crazy!?"`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5C129)`"Quit your bitching..."`;
   Tsugumi(T5C130)`"Just when I thought you'd FINALLY shut up..."`;
   `Tsugumi let out a big sigh.`;
   Takeshi`"W-what's that face supposed to mean!?"`;

});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5C131)`"Just what it looks like..."`;
   Tsugumi(T5C132)`"I'm so disappointed in you."`;
   `She furrowed her brow and looked at me.`;
   `She pinched the bridge of her nose, and shook her head.`;
   `She looked completely fed up.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi turned and she started walking away from me.`;
   Takeshi`"H-hey! Wait a second!"`;

});
playSFX({ name: `SE01_04`, a1: 0, volume: 95 });
bgload({ name: `BG25A3`, transition: 20 });
showTextbox();
text(() => {
   Takeshi`"Why?"`;
   Takeshi`"What's with you!? Did I do something to you?"`;
   `I hurried over to her and insisted that she answer me.`;

});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5C133)`"No..."`;

});
fgload({ id: 1, name: `TU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5C134)`"No, it's not like that...you don't understand anything."`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `And throwing back her shoulders, she picked up her pace.`;
   Takeshi`"What don't I understand?"`;
   Takeshi`"I mean...er..."`;
   Takeshi`"Things were getting out of hand back there...if you hadn't said something, I don't know how it would have turned out."`;
   Takeshi`"I'm glad you did. I'm...really sorry. And, thanks..."`;

});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"......."`;

});
removeFG({ id: 1, useAnim: true });
bgload({ name: `BG03A1`, transition: 20 });
showTextbox();
text(() => {
   Takeshi`"Hey, wait! Tsugumi...!"`;
   `I kept yelling as I chased after her.`;
   Takeshi`"You of all people know how serious this situation is, right? So how come you are..."`;
   Takeshi`"No, that's not it..."`;
   Takeshi`"That's not it...That's not it!"`;
   Takeshi`"You're angry at ME right?"`;
   Takeshi`"Why are you so mad...please tell me!"`;

});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   `Tsugumi stopped at the entrance to Qualle.`;
   Tsugumi(T5C135)`"Okay, I will..."`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5C136)`"It's a stupid question, but I'll answer it for you anyway."`;
   Takeshi`"O-okay..."`;

});
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `All of a sudden Tsugumi smiled at me.`;
   `I flinched.`;
   Tsugumi(T5C137)`"Do you remember what you said earlier?"`;
   Takeshi`"Me? I...let's see..."`;
   Takeshi`"...I was fairly angry...so I really don't remember that well..."`;
   Takeshi`"And might not have been all 'there' at the time..."`;
   Takeshi`"B-but, you know!"`;
   Takeshi`"I really don't think I said anything wrong to the Kid!"`;
   Takeshi`"And I'm sure about that..."`;

});
fgload({ id: 1, name: `TU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5C138)`"Yeah..."`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5C139)`"I guess it looks like you weren't wrong."`;

});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5C140)`"That's why..."`;

});
fgload({ id: 1, name: `TU18ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T5C141)`"That's why I'm mad."`;

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
   `Tsugumi jumped onto the Jellyfish Gondola.`;

});
playSFX({ name: `SE00_02`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `I got on soon after her and closed the door.`;
   `The gondola zipped into the tube, and out into the ocean.`;

});
playBGM({ num: 12, volume: 100 });
bgload({ name: `BG36A1`, transition: 20 });
setSceneTitle({ index: 35 });
showTextbox();
text(() => {
   Tsugumi(T5C142)`"I get so frustrated!"`;

});
hideTextbox();
playSFX({ name: `SE05_07`, a1: 0, volume: 100 });
eff_4f = 51;
eff_3b = 1;
eff_3c = VAR_c6_0_6;
eff_3d = 4;
eff_3e = 2;
eff_3f = VAR_c3_0_6;
eff_40 = 2;
openShakeScreenAnim();
showTextbox();
text(() => {
   `Bam!`;
   `Tsugumi pounded the shell of the jellyfish with her fist.`;
   `Her expression was one of annoyance again.`;
   `The gondola swayed slightly, as it moved forward slowly.`;

});
hideTextbox();
closeShakeScreenAnim();
showTextbox();
text(() => {
   Tsugumi(T5C143)`"Is it really just 'enough to be alive'?"`;
   Tsugumi(T5C144)`"You say, 'You're one of us, so you should cooperate'?'"`;
   Tsugumi(T5C145)`"And that's how you keep pushing him to agree with you, and buy into all your fake ideals."`;
   Tsugumi(T5C146)`"I can't believe how irresponsible you can be..."`;
   Tsugumi(T5C147)`"Who the hell do you think you are?"`;
   Tsugumi(T5C148)`"You've really got some nerve talking like that..."`;
   Takeshi`"So! What else could I do!?"`;
   Takeshi`"It's better than just standing by and watching him sink in despair, it's better to have a little hope than nothing at all, right?"`;
   Tsugumi(T5C149)`"You're such a hypocrite."`;
   Takeshi`"Well, you know what? You're selfish and self-righteous...and you're always faking like you don't care about anyone!"`;
   Takeshi`"You go around hurting people on purpose, and making them feel like crap..."`;
   Takeshi`"And now you're trying to make me look bad...!"`;
   Tsugumi(T5C150)`"I do not...I'm not doing it on purpose."`;
   Tsugumi(T5C151)`"There's just a lot that I don't agree with."`;
   Takeshi`"Liar."`;
   Takeshi`"That's not the way you want things to happen in your heart, and you know that!"`;
   Takeshi`"Why do you have to lash out at everything!?"`;
   Takeshi`"Why can't you just be yourself for once?"`;
   Tsugumi(T5C152)`"You're wrong...you're the one who isn't being yourself!"`;
   Takeshi`"I'm always myself."`;
   Tsugumi(T5C153)`"You're so twisted."`;
   Takeshi`"That's funny coming from you."`;
   Tsugumi`"........."`;
   Takeshi`"This isn't what we were talking about, anyway."`;
   Takeshi`"Why are you so angry?"`;
   Tsugumi`"........."`;
   Takeshi`"If I did something wrong, then I guess I deserve it..."`;
   Takeshi`"If there really is a good reason, then hey, I won't complain."`;
   Takeshi`"So, come on, tell me."`;
   Takeshi`"I won't argue with you, just tell me what it is."`;
   Tsugumi`"........."`;

});
hideTextbox();
stopBGM();
playBGM({ num: 7, volume: 100 });
bgload({ name: `EV_TU11A`, transition: 10 });
showTextbox();
text(() => {
   Tsugumi(T5C154)`"You really want to know...?"`;
   `Tsugumi sat back down in the gondola.`;
   `Her tone had almost returned to normal.`;
   Takeshi`"Y-yeah. Of course."`;
   `She hesitated a bit, but soon came to sit next to me.`;
   `Tsugumi looked straight ahead.`;
   `She didn't try to look at me.`;
   Tsugumi(T5C155)`"Why?"`;
   Takeshi`"Because...I want to know."`;
   Takeshi`"Because I want to know what my friends are thinking."`;
   `I put my hand lightly on her shoulder.`;
   `I was becoming more and more worried.`;
   `Maybe she was still trying to be stubborn...`;
   `Tsugumi didn't try to shake off my hand, but just sat there.`;
   Tsugumi(T5C156)`"That's right..."`;
   Tsugumi(T5C157)`"You had made me 'one of the gang,' hadn't you...?"`;
   Takeshi`"........."`;
   Tsugumi(T5C158)`"If you want to know, then here goes."`;
   Tsugumi(T5C159)`"I'll tell you.... It's because in the end, I've become 'Your Friend.'"`;
   Takeshi`"....."`;
   Takeshi`"Why do you have to say it like that! You're not still..."`;
   `Tsugumi thrust her hand into her pocket and took something out.`;

});
bgload({ name: `EV_TU11B`, transition: 10 });
showTextbox();
text(() => {
   Tsugumi(T5C160)`"Takeshi, you know what this is right?"`;
   Takeshi`"Chami."`;
   Takeshi`"Djungarian hamster..."`;
   Takeshi`"Who cares, where the heck did you pull that from?"`;
   Tsugumi(T5C161)`"My pocket..."`;
   Takeshi`"I know that. That's not what I'm asking..."`;
   Takeshi`"Don't just shove him out and talk about him as a 'this.'"`;
   Takeshi`"Hamsters are delicate living creatures, and you should be careful with him."`;
   Tsugumi(T5C162)`"Yeah, you're right..."`;
   Tsugumi(T5C163)`"But what else can I do?"`;
   Tsugumi(T5C164)`"He doesn't have anywhere else to go."`;
   Takeshi`"........."`;
   `Chami stood in Tsugumi's hand.`;
   `He twitched his nose and looked up at both of our faces inquisitively.`;
   `Tsugumi stroked Chami softly with the tip of her finger.`;

});
hideTextbox();
stopBGM();
playBGM({ num: 24, volume: 100 });
bgload({ name: `EV_TU11C`, transition: 0 });
showTextbox();
text(() => {
   Tsugumi(T5C165)`"Heeey Takeshi, do you know what will happen if I go like THIS?"`;
   Takeshi`"!?"`;
   `Tsugumi...`;
   `Grasped both of her hands tightly together.`;
   `In between the cracks of her fingers, I could see Chami's soft, warm-looking gray fur.`;
   `Soon, his body disappeared entirely in her hands.`;
   Tsugumi(T5C166)`"Do you know what will happen?"`;
   Takeshi`"I-idiot! Cut it out!!"`;
   Tsugumi(T5C167)`"Come on, answer me..."`;
   `Tsugumi started to squeeze harder.`;
   `Chami, who only the tip of his nose was visible, turned his beady eyes toward Tsugumi.`;
   Takeshi`"W-what are you talking about!?"`;
   Takeshi`"It's totally obvious! What a stupid question!"`;
   Takeshi`"You want to talk about stupid questions? There's one for you!!"`;
   `She started squeezing more.`;
   `The space between her fingers got smaller and smaller.`;
   `Chami twisted his body and started to struggle.`;
   Takeshi`"Cut it out!! Tsugumi, if you go on like this...Chami's going to..."`;
   `The hamster looked at Tsugumi and me.`;
   `At the end I thought he even let out a small breath.`;

});
removeBG({ mode: RED, transition: 2 });
playSFX({ name: `SE10_03`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Squish.${noWait}`;

});
bgload_keepFg({ name: `KURO_BG`, transition: 0 });
showTextbox();
text(() => {
   Append``;

});
showTextbox();
text(() => {
   `Tsugumi crushed her hands together with all of her might.`;
   `They pressed together.`;
   `Her hands were shaking with the effort.`;
   `From the cracks of her fingers, red droplets started to fall.`;
   Tsugumi(T5C168)`"Well, Takeshi..."`;
   Tsugumi(T5C169)`"What do you think happened... to Chami?"`;
   Takeshi`"........."`;
   `Tsugumi's voice was also shaking.`;
   Tsugumi(T5C170)`"Tell me..."`;
   Tsugumi(T5C171)`"TELL ME!"`;
   Takeshi`"........."`;
   Takeshi`"No."`;
   Takeshi`"You think I'm going to answer you that?"`;
   Tsugumi`"........."`;
   Takeshi`"Open your hands."`;
   Takeshi`"Tsugumi.... Open up your hands!"`;
   Takeshi`"Please, just open them up..."`;
   Takeshi`"Now!"`;
   Tsugumi`"........."`;
   `Her hands were shaking heavily as they opened.`;

});
eff_41 = 6;
eff_42 = 68;
eff_50 = 0;
showDimInAndOutAnim();
bgload({ name: `IMG04A`, transition: 10 });
showTextbox();
text(() => {
   Takeshi`"Chami..."`;
   Takeshi`"Tsugumi...what have you done...!!"`;
   `He was dead.`;
   `And his fur was slightly wet.`;
   `Chami looked like a dirty old dishrag.`;
   `Probably all of the bones in his body were broken.`;
   `All of the blood had probably been squeezed from his body.`;
   `He probably hadn't had anytime to wonder, it had happened so fast...`;
   `His life had been...extinguished...`;
   Tsugumi(T5C172)`"So..."`;
   Tsugumi(T5C173)`"Takeshi, do you know...?"`;
   Tsugumi(T5C174)`"What do you think...is going to happen now?"`;
   Takeshi`"Tsugumi!"`;
   Takeshi`"Cut it out!!"`;
   `I shook Tsugumi's shoulders violently.`;
   `I thought for sure that I would knock her down.`;
   `I forced her to look at me.`;
   `But...`;
   `Tsugumi...`;
   `Was crying, and her lips trembled as she bit down on them.`;
   Tsugumi(T5C175)`"Takeshi..."`;
   Tsugumi(T5C176)`"Why won't you answer me..."`;
   Tsugumi(T5C177)`"Aaaahh..."`;
   Takeshi`"........."`;
   Takeshi`"Chami is..."`;
   Takeshi`"Chami is..."`;

});
removeBG({ mode: BLACK, transition: 2 });
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   Takeshi`"Dead."`;
   Takeshi`"He won't ever move again."`;
   Takeshi`"........."`;

});
removeBG({ mode: WHITE, transition: 2 });
showTextbox();
text(() => {
   Takeshi`"!?"`;
   `In her hand Chami seemed to move faintly.`;
   `As if he had woken up suddenly.`;
   `His movements were stiff, and barely visible and...`;
   `Extremely slow, but...`;
   `He was actually moving.`;
   `His heart had started beating again, he had started thinking again, breathing again.`;
   `He shook himself off slightly...`;
   `Fluttered his ears...`;
   `And twitched his nose.`;
   `He got up on shaking legs and even tried to stand.`;
   `However...`;
   `There was still blood on her hand.`;

});
bgload({ name: `EV_TU11B`, transition: 0 });
showTextbox();
text(() => {
   Tsugumi(T5C178)`"So, Takeshi..."`;
   Tsugumi(T5C179)`"What happened to Chami?"`;
   Takeshi`"........."`;
   `Our gondola at Qualle had already passed the entrance to the ride twice, and was just starting to make its third pass.`;
   `One pass really wasn't that long.`;
   `All together we had only been on it between just over 10 minutes.`;
   `In that brief time, he had returned to normal and was sitting up on her palm...staring at the two of us inquisitively.`;

});
showTextbox();
text(() => {
   Tsugumi(T5C180)`"He's..."`;
   `Tsugumi was petting Chami softly again with the tip of her finger.`;
   Tsugumi(T5C181)`"Different than the Kid."`;
   Tsugumi(T5C182)`"Different than you."`;
   Tsugumi(T5C183)`"You saw, didn't you?"`;
   Tsugumi(T5C184)`"That was real."`;
   Tsugumi(T5C185)`"Chami has the virus."`;

});
showTextbox();
text(() => {
   Tsugumi(T5C186)`"The first time I tried to pet him, he got spooked."`;
   Tsugumi(T5C187)`"He bit my finger, and my blood got all over him..."`;
   Tsugumi(T5C188)`"So Chami's just like me now."`;

});
showTextbox();
text(() => {
   Takeshi`"No..."`;
   Takeshi`"No way..."`;
   Takeshi`"No way...I don't believe you..."`;
   `I still couldn't believe her.`;
   `Or what she had told me about the virus earlier.`;
   `Or what had happened right in front of me then.`;

});
bgload({ name: `EV_TU11D`, transition: 10 });
showTextbox();
text(() => {
   Tsugumi(T5C189)`"See...this little guy's alive."`;
   `Tsugumi murmured as she looked down.`;
   Tsugumi(T5C190)`"He's alive..."`;
   Tsugumi(T5C191)`"He's breathing. His heart is beating..."`;
   Tsugumi(T5C192)`"But it hurt, didn't it little guy? It was painful, wasn't it...?"`;
   Tsugumi(T5C193)`"I did something terrible..."`;
   Tsugumi(T5C194)`"I'm sorry Chami. I'm so sorry."`;
   Tsugumi(T5C195)`"Forgive me...I was wrong..."`;
   Tsugumi(T5C196)`"But, it's okay, because...you're alive right...?"`;
   Takeshi`"!!"`;
   `I started shaking Tsugumi's shoulders again.`;
   Takeshi`"W-what the hell are you talking about!!?"`;
   Takeshi`"H-how can you say something like that!?"`;
   Takeshi`"You just put him through something unimaginable and now you just say 'It's okay, because you're alive!'"`;

});
hideTextbox();
bgload({ name: `EV_TU11E`, transition: 20 });
showTextbox();
text(() => {
   Tsugumi(T5C197)`"No!"`;
   `Tsugumi brushed my hands off.`;
   Tsugumi(T5C198)`"That's what YOU said!"`;
   Tsugumi(T5C199)`"That's exactly what you said back there!"`;
   Tsugumi(T5C200)`"'It's 'enough to be alive' - you're the one who said that!"`;
   Tsugumi(T5C201)`"So how about it! You saw what happened right!?"`;
   Tsugumi(T5C202)`"You saw what happened to Chami, right? What I did to him?.... You SAW it Takeshi!"`;
   Tsugumi(T5C203)`"And you can say it's 'enough to still be alive'...? Well it isn't."`;
   Tsugumi(T5C204)`"It isn't. No matter what you say...!"`;
   Tsugumi(T5C205)`"I won't believe it!"`;
   Tsugumi(T5C206)`"It isn't enough to just have life...you can't say that's living!"`;
   Takeshi`"........."`;
   Tsugumi(T5C207)`"So...do you understand?"`;
   Tsugumi(T5C208)`"...Or don't you?"`;
   Tsugumi(T5C209)`"Takeshi, tell me...?"`;
   Tsugumi(T5C210)`"How about you Chami..."`;
   Tsugumi(T5C211)`"Do you understand...?"`;
   Takeshi`"........."`;
   `Her face was pointing down.`;
   `I couldn't see her expression...`;
   `But I didn't have to. I knew what it was...`;
   `Tsugumi was crying silently.`;
   `Countless tears fell from her face.`;
   `Like raindrops falling one by one onto the red-stained floor of Qualle.`;

});
hideTextbox();
stopBGM();
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   Takeshi`"........."`;
   `I didn't know what to say.`;
   `No words seemed adequate.`;
   Tsugumi(T5C212)`"Hey......"`;
   Tsugumi(T5C213)`"Do you know...how many times I've died?"`;
   `She was trying to stay as calm as she could.`;
   Takeshi`"I have no idea..."`;
   `I scarcely could move my lips as I replied.`;
   Tsugumi(T5C214)`"I don't remember anymore, anyway."`;
   Takeshi`"........."`;
   Tsugumi(T5C215)`"In the beginning there were said to be only a few of us carriers."`;
   Tsugumi(T5C216)`"But out of all of them, I was special..."`;
   `................`;
   `........`;

});
hideTextbox();
playBGM({ num: 7, volume: 100 });
removeBG({ mode: WHITE, transition: 2 });
showTextbox();
text(() => {
   Tsugumi(T5C217)`"August, 2005."`;
   Tsugumi(T5C218)`"I was 12 at the time, and my family went to America because of my father's job."`;
   Tsugumi(T5C219)`"A friend of mine then..."`;
   Tsugumi(T5C220)`"Julia..."`;
   Tsugumi(T5C221)`"She and I were the same age and she had to go to the hospital."`;
   Tsugumi(T5C222)`"They said it was a terminal disease..."`;
   Tsugumi(T5C223)`"She had leukemia.... and was transferred back and forth to different places, but nobody could help her...."`;
   Tsugumi(T5C224)`"But I kept going to see her. To keep up her spirits."`;
   Tsugumi(T5C225)`"Watching her smiling face, I couldn't believe that she didn't have long to live."`;
   Tsugumi(T5C226)`"I thought there would be a miracle..."`;
   Tsugumi(T5C227)`"I thought if I prayed enough, she'd get better..."`;
   Tsugumi(T5C228)`"If I cared enough, her pain and suffering would be less."`;
   Tsugumi(T5C229)`"I believed that..."`;
   Tsugumi(T5C230)`"Then one day..."`;
   Tsugumi(T5C231)`"I got in an accident."`;
   Takeshi`"...An accident?"`;
   Takeshi`"Is that how you got the virus...?"`;
   Tsugumi(T5C232)`"No..."`;

});
removeBG({ mode: RED, transition: 2 });
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   Tsugumi(T5C233)`"Right after I left the hospital, I got hit by a semi-trailer."`;
   Tsugumi(T5C234)`"Broken bones throughout my body, torn muscles everywhere. I went into a coma. I even stopped breathing."`;
   Tsugumi(T5C235)`"It was hopeless."`;
   Tsugumi(T5C236)`"But..."`;
   Tsugumi(T5C237)`"For some reason I didn't die."`;
   Tsugumi(T5C238)`"And a few months later..."`;
   Tsugumi(T5C239)`"I woke up in an unfamiliar place."`;

});
bgload({ name: `EV_TU12A`, transition: 0 });
showTextbox();
text(() => {
   `Where am I?`;
   `It's a hospital.`;
   `Which one...?`;
   `Well...I don't really know either.`;
   `You don't know?`;
   `Ha, ha, ha...I don't know why, but I don't know.`;
   `My name's...Tsugumi. Tsugumi Komachi. You?`;
   `Huh?`;
   `What is your name?`;
   `....Well, I don't know that either. Sucks, huh?`;

});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   Tsugumi(T5C240)`"I woke up next to a boy with amnesia."`;
   Tsugumi(T5C241)`"Outside the window, was unfamiliar scenery..."`;
   Tsugumi(T5C242)`"I was pretty sure it was somewhere in America."`;
   Tsugumi(T5C243)`"But in order to find out just where I was..."`;
   Tsugumi(T5C244)`"It would take another eight years."`;
   Takeshi`"Eight years?"`;
   Tsugumi(T5C245)`"I was there the whole time..."`;
   Tsugumi(T5C246)`"I was at that 'hospital'..."`;

});
bgload({ name: `EV_TU12A`, transition: 20 });
showTextbox();
text(() => {
   `Who are you?`;
   `I'm the physician who will be attending to you. `;
   `Physician? Oh, you mean you're a doctor.`;
   `Yes. I'm going to find a cure for your sickness and make you all better.`;
   `Cure me? ...I got in an accident, and got hurt...`;
   `No. It's a little different than that.`;
   `....Different?`;
   `You have a new disease. One that we've never seen before.`;

});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   Takeshi`"A new kind of disease?"`;
   Takeshi`"So that was...?"`;
   Tsugumi(T5C247)`"Yes."`;
   Tsugumi(T5C248)`"I don't know how I got it or when."`;
   Tsugumi(T5C249)`"But by the time I woke up...no, probably before I got in the accident."`;
   Tsugumi(T5C250)`"I was already in the process of becoming 'immortal.'"`;

});
bgload({ name: `EV_TU12A`, transition: 20 });
showTextbox();
text(() => {
   `Alright, I'd like to take a little of your blood.`;
   `Why?`;
   `Well, it's for research, to find a way to cure you, of course.`;
   `Research?`;
   `Your illness is very rare.`;
   `Rare?`;
   `There are very few people in the world who have it and of all those people you're special.`;
   `Special?`;
   `Your genetic code is being rewritten. It is truly fascinating. You are the talk of our whole medical center.`;
   `I don't understand...what you are talking about...`;
   `Hey, don't worry about it. We're going to find a way to make you better, I promise.`;
   `Um? How are you going to get some blood?`;
   `Weeell, princess...We just...Hey, don't you worry yourself about it.`;
   `.........`;
   `Just give me your arm, and we'll be done before you know it. It won't hurt.`;

});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   Tsugumi(T5C251)`"They came to take blood samples again and again."`;
   Tsugumi(T5C252)`"I didn't think much about it at the time. Why they would do that..."`;
   Tsugumi(T5C253)`"The doctors kept telling me, 'It's so we can find a cure for you,' 'It's so we can help you, and people like you.'"`;
   Takeshi`"........."`;

});
bgload({ name: `EV_TU12A`, transition: 20 });
showTextbox();
text(() => {
   `Hey, you there next to me...`;
   `What?`;
   `You're sick too, aren't you?`;
   `Me? Uh, well I...`;
   `The same sickness as me?`;
   `No. Ummm....I mean probably not, anyway.`;
   `You mean...you aren't sure?`;
   `Yeah, I'm fine. I know. I can...`;
   `Um, you can?`;
   `I can see the future.`;

});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   Tsugumi(T5C254)`"This is what he told me."`;
   Tsugumi(T5C255)`"'You are going to have many tragedies in your life.'"`;
   Tsugumi(T5C256)`"'But I don't want you to be sad.'"`;
   Tsugumi(T5C257)`"'The first one in five years, then three years later, then another three years...'"`;

});
showTextbox();
text(() => {
   Tsugumi(T5C258)`"'But you're going to...live through all of them.'"`;
   Tsugumi(T5C259)`"That's pretty much what he told me."`;
   Tsugumi(T5C260)`"It didn't take long for me to understand what he was saying, even at my young age."`;
   Takeshi`"........."`;

});
bgload({ name: `EV_TU13A`, transition: 20 });
showTextbox();
text(() => {
   `Tsugumi, take a look, there's a cat and mouse over there.`;
   `Oh yeah. They're so cute...`;
   `I wonder why they're in a place like this?`;
   `Yeah...Those cages are so small, it looks painful...`;
   `You want to let them out?`;
   `I wonder if it'd be alright...?`;
   `It should be, come on, let's do it!`;
   `Hey, wait...`;

});
bgload({ name: `EV_TU13B`, transition: 20 });
showTextbox();
text(() => {
   `Okay, everyone out! Run while you can!`;

});
removeBG({ mode: WHITE, transition: 2 });
playSFX({ name: `SE00_11`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Crash!`;
   `...Hey! What do you think you two are doing!`;

});
playSFX({ name: `SE09_03L`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `Oh no! The experiment!`;
   `Everyone be careful! Whatever you do don't let them bite you!`;
   `Watch out, they're contagious!`;

});
removeBG({ mode: BLACK, transition: 1 });
showTextbox();
text(() => {
   `............`;

});
hideTextbox();
stopSFX()
bgload({ name: `EV_TU13A`, transition: 20 });
showTextbox();
text(() => {
   `They were really mad at us.`;
   `You opened up those cages so fast, you surprised me.`;
   `They caught all of the animals again.`;
   `Yeah, they're right back where they were before.`;
   `In those cramped, small cages...`;
   `They're trapped again...`;
   `Why do they have to be locked up that way?`;
   `Why...?`;
   `I wonder...`;
   `Why?`;

});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   Tsugumi(T5C261)`"I slowly started to realize why."`;
   Tsugumi(T5C262)`"I began to understand bit by bit, that I wasn't being kept at a hospital, but a research facility."`;
   Tsugumi(T5C263)`"Nobody came to see me..."`;
   Tsugumi(T5C264)`"And none of the 'patients' ever left..."`;
   Tsugumi(T5C265)`"And there were hardly ever any new patients..."`;
   Tsugumi(T5C266)`"And the whole time, I never knew where I was."`;

});
bgload({ name: `EV_TU13B`, transition: 20 });
showTextbox();
text(() => {
   `Huh? They're all gone.`;
   `........`;
   `You didn't let them out again, did you?`;
   `... No.`;
   `Oh. Well, I wonder where they went, then?`;
   `...I don't know...`;
   `Hmmm. But they shouldn't have been kept in such a cramped space anyway.`;
   `...Yeah...`;
   `Maybe the researchers thought the same thing and let them go then?`;
   `...No idea...`;

});
removeBG({ mode: WHITE, transition: 2 });
showTextbox();
text(() => {
   `It's no good. We still haven't been able to discover the reason or mechanism behind it.`;
   `It happened right in front of me, but I still can't believe it.`;
   `The only explanation I can come up with is genetic transfer....It goes against everything we know about science.`;
   `They withstood up to 4 splicings. I think maybe they could take 8...`;
   `Let's keep testing.`;
   `No, if we continue...`;
   `There is no mistaking it they're still alive. They might still even react at 16...`;
   `But, they're not...!`;
   `These aren't living creatures anymore...is that what you want to say?`;
   `........`;
   `Perhaps...that way of thinking might have been correct, according to our old way of thinking. But we have no idea of the possibilities this entails.`;
   `That's...that's not right...it's crazy.`;

});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `........`;

});
bgload({ name: `EV_TU13C`, transition: 20 });
showTextbox();
text(() => {
   `Ah! The mice are still there! They're so cute.`;
   `........`;
   `Wait, something's strange. One, two, three...`;
   `........`;
   `Huh? Are there more of them? Or less?`;
   `........`;
   `Did they put the cats back in their cages?`;
   `.........`;
   `The cover is locked.... Umph... I can't get it off.`;
   `.........`;
   `Huh? What?`;
   `.........`;
   `Hey kid...? Where did the kid go?`;
   `.........`;
   `Answer me.`;
   `.........`;

});
hideTextbox();
stopBGM();
removeBG({ mode: WHITE, transition: 2 });
showTextbox();
text(() => {
   `Get out of here. It's time for you to leave.`;

});
hideTextbox();
playBGM({ num: 19, volume: 100 });
bgload({ name: `EV_TU11D`, transition: 10 });
showTextbox();
text(() => {
   Tsugumi(T5C267)`"That's what it was like for eight years, day in and day out."`;
   Tsugumi(T5C268)`"Every single day..."`;
   Tsugumi(T5C269)`"The researcher called for me."`;
   Tsugumi(T5C270)`"Telling me, 'I'm your friend.'"`;
   Tsugumi(T5C271)`"But the truth is, he wasn't."`;
   Tsugumi(T5C272)`"I was being forced to do all of these tests and experiments."`;
   Tsugumi(T5C273)`"And they just used me like some tool."`;
   Tsugumi(T5C274)`"I stopped being able to feel pain, or to suffer."`;
   Tsugumi(T5C275)`"When I went back to bed, all I could do is cry."`;
   Tsugumi(T5C276)`"Then one day the kid next to me didn't come back."`;
   Tsugumi`"........."`;
   Tsugumi(T5C277)`"Takeshi...do you know why?"`;
   Takeshi`"...Yeah..."`;
   Takeshi`"I mean, no, I don't know, but..."`;
   Tsugumi(T5C278)`"So I don't have to explain to you...?"`;
   Takeshi`"Yeah..."`;
   Takeshi`"If it's too painful for you...you don't have to say anything more."`;
   `Tsugumi was stroking Chami with a trembling fingers.`;
   `I put my hand lightly on Tsugumi's shoulder.`;
   `To suddenly get hit by a virulent disease...`;
   `And become someone who would never age...`;
   `Spend eight years trapped in a research facility...`;
   `I couldn't imagine how it must have been to go through that.`;
   Tsugumi(T5C279)`"I hate it..."`;
   Tsugumi(T5C280)`"And I hate myself for talking about it..."`;
   Tsugumi(T5C281)`"It's funny, isn't it..."`;
   Tsugumi(T5C282)`"Whenever I'm with you, I find myself talking about the stupidest things..."`;
   Takeshi`"It's okay, you don't have to talk."`;
   Tsugumi`"........."`;
   Takeshi`"I'm so sorry..."`;
   Takeshi`"It was totally irresponsible what I said back there."`;
   Takeshi`"It was careless of me to talk about being alive like it is just a given."`;
   Tsugumi(T5C283)`"I don't want your pity."`;
   Tsugumi(T5C284)`"It's too late..."`;
   Takeshi`"It isn't like that. It's not like that!"`;
   Tsugumi`"........."`;
   Takeshi`"Tsugumi......"`;
   Takeshi`"I was wrong, okay?"`;

});
bgload({ name: `EV_TU11E`, transition: 20 });
showTextbox();
text(() => {
   Tsugumi(T5C285)`"You were wrong!?"`;
   `She screamed suddenly.`;
   Tsugumi(T5C286)`"Don't tell me that!!"`;
   Tsugumi(T5C287)`"You don't just take back what you say. Not that easily...!"`;
   Tsugumi(T5C288)`"You want irresponsible, THAT's irresponsible...!"`;
   Takeshi`".........!!"`;
   `I didn't know what to tell her.`;
   Tsugumi(T5C289)`"You're just like them."`;
   Tsugumi(T5C290)`"You don't understand anything..."`;
   Tsugumi(T5C291)`"You throw around words like 'friend' without really meaning it."`;
   Tsugumi(T5C292)`"You don't understand anything about how I'm feeling."`;
   Tsugumi(T5C293)`"You don't understand anything about what the Kid's feeling!"`;
   Takeshi`"........."`;
   `She was making me feel it had been a mistake to say, 'I'd been wrong.'`;
   `No...that wasn't it either.`;
   `The truth was...`;
   `There was no such thing as right and wrong.`;
   Tsugumi(T5C294)`"'People who are alive, should live as long as they can,' you said that didn't you...?"`;
   Tsugumi(T5C295)`"I'll survive."`;
   Tsugumi(T5C296)`"I'll probably die many times more and I'll still be alive."`;
   Tsugumi(T5C297)`"Chami here too..."`;
   Tsugumi(T5C298)`"But Takeshi, can you say that you're really alive right now?"`;
   Tsugumi(T5C299)`"Are you REALLY there, in front of me now?"`;
   Takeshi`"........."`;
   Tsugumi(T5C300)`"...What's wrong?"`;
   Tsugumi(T5C301)`"You said...you'd accept everything I had to say, right...?"`;
   Tsugumi(T5C302)`"You said that...right Takeshi?"`;
   `She bit her lip.`;
   `Her shoulders were shaking.`;
   `She looked bitterly disappointed.`;
   `Disappointed.`;
   `That when she tried to live, she ended up dying.`;
   `And when she tried to die, she ended up living.`;
   `It was a process that repeated itself over and over without end.`;
   `It wasn't right or wrong - it was her reality.`;
   `And it was something that she had no choice but to accept.`;
   `But I still wasn't able to accept it.`;
   Tsugumi(T5C303)`"This is so stupid..."`;
   Tsugumi(T5C304)`"I'm stupid..."`;
   Tsugumi(T5C305)`"Uumm.... But you know what? You're way stupider than me..."`;

});
hideTextbox();
playSFX({ name: `SE06_00`, a1: 0, volume: 95 });
shakeScreenHard();
showTextbox();
text(() => {
   `The gondola swayed.`;
   `We had arrived at the end of the ride.`;
   `I had no idea how many times we'd passed by Qualle.`;

});
playSFX({ name: `SE00_02`, a1: 0, volume: 95 });
removeBG({ mode: WHITE, transition: 2 });
delay({ interval: 60 });
playSFX({ name: `SE00_00`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `The door opened suddenly.`;
   `She got up quickly and opened the door.`;
   Takeshi`"Tsugumi!!"`;

});
hideTextbox();
playSFX({ name: `SE05_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I stuck out my hand to grab her but she swatted it away immediately.`;
   Tsugumi(T5C306)`"Don't touch me!"`;
   Tsugumi(T5C307)`"Don't...touch me..."`;

});
playSFX({ name: `SE00_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Slam!`;
   `She closed the door from outside.`;
   `The jellyfish I was riding on started moving again.`;

});
bgload({ name: `BG36A1`, transition: 10 });
showTextbox();
text(() => {
   Takeshi`"Stupid..."`;
   `I muttered to myself.`;
   Takeshi`"Stupid idiot..."`;
   `I said it myself.`;
   `I said it to her.`;
   `I said it to no one and nothing in particular.`;
   `To everything....`;
   `Outside the window was the ocean.`;
   `An ocean closed off from the light.`;
   `When I passed under the shadow of the installation, the gondola became dark.`;

});
bgload({ name: `BG36A2`, transition: 20 });
showTextbox();
text(() => {
   `And inside of the darkness...`;
   `All alone in the darkness...`;
   `I bit hard down on my lip as I cried.`;

});
removeBG({ mode: BLACK, transition: 1 });
delay({ interval: 120 });
bgload({ name: `BG17A1`, transition: 10 });
clock(`20:19`);
showTextbox();
text(() => {
   `Soon it was night.`;
   `In the Conference Room, You, Coco and Pipi were waiting.`;
   `Even the Kid...`;
   `It looked like the Kid had calmed down some.`;
   `While I'd been gone, it seemed that You and Coco had been able to talk some sense into him.`;
   `You told me that he'd probably been upset by a reoccurring memory, and had gotten worked up in spite of himself.`;
   `I felt that I'd gotten out of hand and had said some terrible things myself.`;
   `I went around to everyone there and apologized.`;
   `Soon afterward...`;
   `A report came to us in the Conference Room directly from LeMMIH's terminal.`;
   `You read out the contents to all of us.`;

});
hideTextbox();
bgload({ name: `MAP3F_A2`, transition: 30 });
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 3 });
openMapCommentAnim();
delay({ interval: 120 });
showTextbox();
text(() => {
   `Third floor: Dritte stock partition schematic`;
   `The 'Cosmic Whale' room, had flooded completely.`;

});
hideTextbox();
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP3F_A2`, transition: 30 });
unSkippableDelay(1);
bgload({ name: `MAP3F_B2`, transition: 20 });
delay({ interval: 120 });
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG17A2`, transition: 20 });
showTextbox();
text(() => {
   `Casualties: None`;
   `Flooding to other rooms: None`;
   `Chance of damage spreading: None...`;
   `Shivering slightly in the cold, I wrapped my arms around my knees and we all went to sleep.`;

});
removeBG({ mode: BLACK, transition: 1 });
stopBGM();
delay({ interval: 150 });
l_choice = 0;
jump(`T_6A`);
