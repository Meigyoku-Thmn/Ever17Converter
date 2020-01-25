l_b0 = 5;
l_dayA = 6;
l_dayB = 6;
setDialogBoxColor(GREEN);
playSFX({ name: `SE00_00`, a1: 0, volume: 90 });
bgload({ name: `BG09A1`, transition: 20 });
setSceneTitle({ index: 40 });
clock(`13:50`);
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6B000)`"I'm going to scan her, so put her up on the table!"`;
   `You pointed to the "L-MRI."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi and I laid Coco down on the flat table.`;
   `Coco continued to breathe in her short, shallow manner. Although she had stopped coughing up blood, she seemed to be in a lot of pain.`;
   `Her body lay still.`;

});
playSFX({ name: `SE03_07`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `The arm of the "L-MRI" soon came to life and started a laser scan.`;
   `The Kid came up to the side of the table and stared at Coco, looking as if he would burst into tears.`;
   Takeshi`"Sora, put the results up on the screen, so everyone can see them."`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6B001)`"Okay..."`;

});
hideTextbox();
playSFX({ name: `SE03_02`, a1: 0, volume: 95 });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Suddenly a few holographic windows appeared in the air.`;
   `Images, including a thermal scan, ultrasound analysis, showing cross-sectional representations of her body, and a laser sampling, were all displayed, one after another.`;
   `Of course, none of us were doctors, so there was little we could understand about her condition by looking at the pictures.`;
   `All we could do was wait for the scanning equipment and LeMMIH's system to give us an answer.`;
   `We stared as the images that flashed by on the screen and prayed.`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   `Then...`;
   `The results suddenly appeared.`;
   `"Tief Blau 2017-Rev.17"`;

});
hideTextbox();
playBGM({ num: 16, volume: 100 });
showTextbox();
text(() => {
   Sora(T6B002)`"Tief Blau...!"`;
   You(T6B003)`"...Huh?"`;
   Takeshi`"What'd you say?"`;
   Sora(T6B004)`"No...."`;
   `Sora hurriedly shut down the holographic window.`;
   `She bit her lip and stared down in shock.`;

});
multifgload2({ id1: 1, id2: 2, name1: `SO13ADM`, name2: `YU14ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora`"........."`;
   `Her expression showed how serious the situation was.`;
   Takeshi`"Sora...?"`;
   You(T6B005)`"What's wrong, Sora? If you don't tell us..."`;

});
fgload({ id: 2, name: `YU13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(T6B006)`"If you don't tell us, we don't know what's going on..."`;
   Sora`"........."`;
   Sora(T6B007)`"...I can't believe it."`;
   Sora(T6B008)`"I just can't believe it..."`;
   Takeshi`"What...what don't you believe?"`;
   Sora(T6B009)`"Coco's been..."`;

});
fgload({ id: 1, name: `SO03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(T6B010)`"Coco has been infected."`;
   You(T6B011)`"Infected...?"`;
   Takeshi`"What!?"`;
   Sora(T6B012)`"...it's..."`;
   `Sora was unable to suppress her agitation and opened her mouth hesitantly.`;

});
fgload({ id: 1, name: `SO05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(T6B013)`"Tief Blau."`;
   Sora(T6B014)`"It is a powerful virus with a very high mortality rate."`;
   You(T6B015)`"Tief...Blau..."`;
   `Tief Blau...?`;

});
if (l_tsugumi_flag == 0) goto(lbl_000001b0);
showTextbox();
text(() => {
   `A virus that was totally different than the one Tsugumi had...?`;

});
let lbl_000001b0;
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `KA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T6B016)`"Coco, Coco!"`;
   `The Kid ran over to Coco's side, and held on to the table.`;
   Kid(T6B017)`"Coco, hold on!"`;
   Kid(T6B018)`"... No! Don't you die on me!"`;
   `He held onto Coco's arm as she lay there unconscious.`;

});
fgload({ id: 1, name: `KA09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T6B019)`"Open your eyes, Coco!"`;
   Coco`"........."`;
   Kid(T6B020)`"Please! Get up!"`;
   Coco`"........."`;
   `The Kid grabbed a hold of Coco's shoulders and shook her violently.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Hey, cut it out! Stop it Kid!"`;
   `I pried his hands off Coco, and pulled him away from her.`;

});
fgload({ id: 1, name: `KA04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T6B021)`"What are you doing?"`;
   Takeshi`"Jackass! Calm the hell down!"`;
   Takeshi`"What do you think that's going to accomplish, huh!?"`;

});
fgload({ id: 1, name: `KA03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T6B022)`"But, Coco's gonna...she's gonna!"`;

});
fgload({ id: 1, name: `KA04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T6B023)`"If we don't do anything, Coco's...going to die!"`;
   `The Kid groaned in despair.`;
   Takeshi`"Calm down. There's got to be something we can do..."`;
   Kid`"........."`;
   Takeshi`"Don't get crazy. Let's just calm down and think..."`;

});
fgload({ id: 1, name: `KA05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid`"........."`;
   `The Kid somehow quieted down.`;
   `He breathed heavily and glared at me.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"What do you think we should do, You?"`;

});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6B024)`"Don't ask me...I have no idea."`;
   You(T6B025)`"Sora, isn't there anything we can do?"`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SO17ADM`, name2: `YU13ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T6B026)`"...If we take emergency measures, it is possible."`;
   Sora(T6B027)`"But in order to do this..."`;

});
fgload({ id: 2, name: `YU14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(T6B028)`"Whatever it takes! If we don't hurry, then...!"`;
   `You stopped herself just short of screaming out.`;

});
fgload({ id: 2, name: `YU13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(T6B029)`"Please Sora...you're the only one who can help us."`;
   You(T6B030)`"Please tell us what to do."`;

});
fgload({ id: 1, name: `SO05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(T6B031)`"You'll need serum. A serum to lessen the symptoms."`;
   You(T6B032)`"Serum? What kind?"`;

});
fgload({ id: 1, name: `SO17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(T6B033)`"It's...I don't know if it is here or not..."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   You(T6B034)`"W-what...!"`;
   `You ran up to the wall and opened up a shelf filled with medical tools.`;
   `You repeatedly asked Sora about the contents as she tore through them.`;

});
fgload({ id: 1, name: `YU18ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6B035)`"What about this!?"`;
   Sora(T6B036)`"No..."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU04ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6B037)`"It isn't this one!?"`;
   Sora(T6B038)`"No, it is not..."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU13ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6B039)`"How about this one!?"`;
   Sora(T6B040)`"Not that one either..."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You`"......."`;
   Sora(T6B041)`"That one...isn't it either..."`;

});
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE07_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `You dropped bottle after bottle of medicine onto the floor.`;

});
playSFX({ name: `SE07_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Many of them exploded into pieces when they hit.`;
   You(T6B042)`"What are we going to do...!?"`;
   You(T6B043)`"What should we do? Answer me, Sora...!"`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora`"........."`;

});
fgload({ id: 1, name: `SO13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6B044)`"I am sorry......"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Pipi`"........."`;
   Pipi(PIPI_06)`"*Whine*"`;
   `Pipi came over to me and whined softly.`;

});
fgload({ id: 1, name: `SO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6B045)`"....Oh!"`;
   `Sora's face suddenly changed colors.`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6B046)`"Pipi, bring that over here!! Quickly!!"`;
   You(T6B047)`"Eh!?"`;
   Sora(T6B048)`"That thing that Pipi has in his mouth! That's it!"`;
   Takeshi`"What!?"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I quickly snatched whatever it was out of Pipi's mouth and lifted it up.`;
   Takeshi`"T-this!?"`;

});
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6B049)`"It's the serum...!"`;
   `It was a transparent capsule with orange liquid inside of it.`;
   Takeshi`"How do we use it?"`;
   Sora(T6B050)`"Break off the tip, and inject the contents into Coco!"`;
   Takeshi`"O-okay!!"`;
   Takeshi`"You, do your magic!"`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `You ran over to where I was, and grabbed the serum out of my hand.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Coco held out a shaking arm.`;
   `You silently inserted the syringe into her arm and administered the serum.`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   `After a few minutes......`;
   `Although it was gradual, Coco's breathing became more even, and the tremors in her body settled down.`;

});
hideTextbox();
playBGM({ num: 3, volume: 100 });
multifgload2({ id1: 1, id2: 2, name1: `SO10ADM`, name2: `YU03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T6B051)`"It looks like it is taking effect."`;
   Sora(T6B052)`"Her condition has improved somewhat. The danger seems over for now..."`;
   You(T6B053)`"Thank goodness..."`;
   `Both You and Sora looked relieved.`;
   `You looked as if she could cry.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU13ADM`, name2: `KA03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Kid`"........."`;
   Tsugumi`"........."`;
   `The Kid looked up and let out a big sigh of relief.`;
   `Tsugumi stared at Coco in silence.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Hey Pipi.."`;
   Takeshi`"Who would've thought you'd find the serum.... When did you get this?"`;
   Takeshi`"Where'd you find it?"`;
   Pipi(PIPI_07)`"*whine* *whiiiine*..."`;
   `Pipi whined pitifully.`;

});
removeBG({ mode: BLACK, transition: 2 });
stopBGM();
playBGM({ num: 4, volume: 100 });
bgload({ name: `BG09A1`, transition: 20 });
clock(`13:58`);
showTextbox();
text(() => {
   Takeshi`"Alright..."`;
   `Everyone gathered around the "L-MRI" where Coco slept.`;
   Takeshi`"Sora, tell us what you can about the Tief Blau virus."`;
   Takeshi`"That's the first time I've ever heard of it."`;
   Takeshi`"Does anyone else know anything about it?"`;

});
multifgload3({ name1: `YU03ADS`, name2: `KA08ADS`, name3: `TU03ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   `When I asked the question, You, the Kid, Tsugumi, even Pipi... all shook their heads. `;
   Takeshi`"You said it has a high mortality rate..."`;
   Takeshi`"You don't have any idea when or how Coco got this do you?"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora`".........."`;
   Takeshi`"I don't care if it is only a guess. Or, if you give me only the limited data you have."`;
   Takeshi`"I just want to know."`;
   Takeshi`"Coco came down with this out of nowhere. It doesn't help the rest of us to be ignorant."`;

});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6B054)`"You are right..."`;
   `Sora got a strange expression on her face.`;
   `After thinking for a moment, she gave us a wholehearted explanation.`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6B055)`"Alright. I will tell you everything I know about the Tief Blau virus."`;
   `A heavy silence descended upon the emergency room.`;
   `Every once in a while the sensor from the "L-MRI" would sound out Coco's vital signs, the only noise to echo through the room.`;
   Sora(T6B056)`"Tief Blau, or TB was..."`;
   `Sora started talking softly.`;
   Sora(T6B057)`"TB was developed at a research facility under LeMU. It is an extremely deadly virus."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6B058)`"At a research facility? Under us...?"`;
   `You's eyes opened wide.`;
   Sora(T6B059)`"Yes..."`;
   Sora(T6B060)`"There's an installation called IBF, right below us."`;

});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6B061)`"IBF..."`;
   Tsugumi(T6B062)`"I knew it..."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi frowned.`;
   Tsugumi(T6B063)`"Well, it looks like this AI's programming CAN change after all. If the situation gets critical enough...we can actually get information we need..."`;
   Tsugumi(T6B064)`"I guess it isn't in your programming to keep a secret when someone's life is on the line."`;
   Sora`"........."`;

});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6B065)`"I'm sorry. Please continue Sora..."`;
   `After shaking her head lightly, Tsugumi let out a sigh.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6B066)`"Okay..."`;
   Sora(T6B067)`"The management company that built LeMU is Leiblich Pharmaceutical. Its research facility is IBF."`;

});
removeFG({ id: 1, useAnim: true });
bgload({ name: `IMG02B`, transition: 20 });
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `357 feet beneath LeMU there are thermal seafloor vents.${wait(30)}`;
   `Living there are special microbes, which cannot be found in any other environment and Leiblich Pharmaceutical created a research institute in order to study them.${wait(30)}`;
   `It is called 'IBF'—${wait(30)}`;

});
showTextbox();
text(() => {
   `Institute für Biologische Forschung.${wait(30)}`;
   `Translated it means the Institute for Biological Research.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `LeMU and the research facility...of the two, the first to be built was the research facility.${wait(30)}`;
   `Building a theme park was apparently just a front.${wait(30)}`;
   `The researchers at IBF were listed as managers of LeMU and were able to come and go as they pleased.${wait(30)}`;
   `That way, nobody would suspect that there was actually a research facility.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `At the same time, they could also get much-needed funds for research.${wait(30)}`;
   `If they set up a successful theme park, they could get pretty much all the money they needed to run the research facility...${wait(30)}`;
   `So Leiblich Pharmaceutical continued to carry out research into bacteria and viruses on the bottom of the ocean...357 feet under water.`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
ADV_Mode();
bgload({ name: `BG09A1`, transition: 20 });
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6B068)`"The existence of IBF is highly confidential."`;
   Sora(T6B069)`"Only a select number of people know about it at Leiblich, even at LeMU..."`;

});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6B070)`"IBF and LeMU are controlled by separate computer systems..."`;
   Sora(T6B071)`"Even I am only given limited information."`;
   Sora(T6B072)`"I only became sure of IBF's existence after connecting together fragments of information from this accident...."`;
   Takeshi`"Oh..."`;
   You(T6B073)`"Anyway, there is a strange and deadly virus called TB they're doing research about at some research center under LeMU."`;
   You(T6B074)`"That is probably in order to find a cure for TB, right?"`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6B075)`"Yes, you are probably correct. In addition..."`;
   Sora(T6B076)`"There is a medical center there that is far superior to this one."`;
   Sora(T6B077)`"At least from the information I can gather from LeMMIH's database..."`;
   Sora(T6B078)`"It appears that they have a new type of 'High-pressure Oxygen Treatment Device' there..."`;
   Sora(T6B079)`"And if we can treat her with that, her leukocyte, er, white blood cell activity should increase..."`;
   Sora(T6B080)`"That should ease Coco's condition somewhat."`;
   Sora(T6B081)`"We might even encounter more of the serum that is effective in stabilizing the symptoms.... the orange one that we found previously."`;
   Takeshi`"IBF, huh...?"`;
   Takeshi`"Can we go there? How do we get there?"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Kid(T6B082)`"W-wait...!"`;
   `The Kid interrupted with a shout.`;

});
fgload({ id: 1, name: `KA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T6B083)`"Wait! This is crazy..."`;
   Kid(T6B084)`"Why would Coco suddenly come down with TB?"`;

});
fgload({ id: 1, name: `KA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T6B085)`"It doesn't make sense that she'd come down with that awful virus all of a sudden..."`;
   Kid(T6B086)`"You don't think that's strange?"`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;

});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6B087)`"Yeah. But..."`;

});
fgload({ id: 1, name: `TU18ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6B088)`"Even if we want to help Coco, there isn't any equipment here to do that."`;
   Tsugumi(T6B089)`"The only lead we have for treating her is that research facility - IBF."`;
   Tsugumi(T6B090)`"We'll have to look for reasons afterward."`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6B091)`"All we can do is trust what Sora tells us for now."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora`"........."`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SO05ADM`, name2: `TU13ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6B092)`"She isn't good enough at lying to make up something like this, right?"`;
   Tsugumi(T6B093)`"I'm sorry for doubting you earlier..."`;

});
fgload({ id: 2, name: `TU10ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6B094)`"I believe what Sora's telling us."`;
   `Tsugumi smiled slightly.`;

});
fgload({ id: 1, name: `SO10ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(T6B095)`"...Thank you."`;
   `Sora nodded sincerely.`;
   You(T6B096)`"Yeah, I believe her too."`;
   You(T6B097)`"We can't just sit back twiddling our thumbs."`;
   You(T6B098)`"Let's consider the best option."`;
   `I looked at You and Sora and nodded.`;
   You(T6B099)`"Does that sound good to you? Kid?"`;
   Kid(T6B100)`"Y-yeah. Okay."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Alright, then..."`;
   Takeshi`"So it's decided then. We're going to IBF."`;
   Takeshi`"It's the only chance we've got at saving Coco."`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6B101)`"However, in order to get to IBF, we have to get through HIMMEL... And HIMMEL's door isn't opening."`;
   Takeshi`"I don't care, we're going! We don't have any other options. Show me the way."`;
   Takeshi`"It might not work..."`;
   Takeshi`"But we don't know that unless we try, right?"`;
   Sora`"........."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Hey Kid...give me a hand!"`;
   Kid(T6B102)`"O-okay."`;
   `I picked up Coco's inert body and carried her piggyback.`;

});
hideTextbox();
stopBGM();
bgload({ name: `BG28A3R`, transition: 20 });
playBGM({ num: 11, volume: 100 });
showTextbox();
text(() => {
   `We went down the lift and to the cramped emergency corridor.`;

});
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   `Tsugumi and the Kid supported Coco, who was on my back, from both sides.`;
   `Sora and Pipi went on ahead. You brought along a first-aid kit just in case.`;
   `We were headed for Dritte Stock some 17 meters below...`;

});
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG26B1R`, transition: 20 });
showTextbox();
text(() => {
   `We made it to the third floor.`;

});
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
bgload({ name: `EV_CO08B`, transition: 20 });
showTextbox();
text(() => {
   `We ran as quickly as we could go.`;
   `To where the locked door was waiting for us.`;
   `Using all the strength we had.`;
   `And all the power of our prayers.`;
   `We flew forward.`;

});
bgload({ name: `BG30B1`, transition: 20 });
stopSFX()
setSceneTitle({ index: 41 });
showTextbox();
text(() => {
   Takeshi`"Here we are..."`;
   `We all stopped in front of the door.`;
   `I briefly put Coco down, and leaned her up against the wall.`;
   `The Kid went up to Coco, and lent her his shoulder.`;
   `'HIMMEL'—`;
   `The door that wouldn't open.`;
   Takeshi`"Sora, I'm just asking to make sure..."`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6B103)`"What...?"`;
   Takeshi`"What does HIMMEL mean?"`;
   Sora(T6B104)`"It means 'Sky' in German."`;
   Sora(T6B105)`"Or 'Heaven'..."`;
   Takeshi`"Heaven, huh...?"`;
   `They sure had given it an ironic name.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `So...the question was, how in the world were we going to open that door?`;

});
l_counter = 0;
l_selection_0_available = 1;
l_selection_1_available = 1;
l_selection_2_available = 1;
let lbl_000008eb;
choice(
   cond(l_selection_0_available != 0)`Ask Sora.`,
   cond(l_selection_1_available != 0)`Ask You.`,
   cond(l_selection_2_available != 0)`Ask Tsugumi.`,
);
switch (l_choice) {
   case 0: goto(lbl_00000915);
   case 1: goto(lbl_00000b96);
   case 2: goto(lbl_00000d3c);
}
let lbl_00000915;
l_sora_point += 1;
l_selection_0_available = 0;
l_counter += 1;
showTextbox();
text(() => {
   Takeshi`"Can you tell me what the access code to the electronic lock is?"`;
   `I asked Sora again.`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6B106)`"It is unknown to me. It was only given to the IBF researchers, and exclusive staff."`;
   Takeshi`"Even a hint would help..."`;

});
fgload({ id: 1, name: `SO04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6B107)`"I will try to find what it is!"`;

});
playSFX({ name: `SE03_02`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `As soon as she said this, a transparent keyboard and console appeared in front of her.`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6B108)`"Accessing the security block for LeMMIH's system..."`;
   Sora(T6B109)`"Bypassing HIMMEL's protection key."`;

});
playSFX({ name: `SE03_01`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `The buttons on the electronic lock started to flash.`;

});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6B110)`"LeMMIH, please listen to me..."`;
   Sora(T6B111)`"Please don't fight me..."`;
   `Sora was tapping furiously on the keyboard, battling with the system that was locking the door.`;

});
fgload({ id: 1, name: `SO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6B112)`"Ah!"`;

});
hideTextbox();
monoColorOverlay({ interval: 1, color: WHITE });
playSFX({ name: `SE07_02`, a1: 0, volume: 100 });
fgload({ id: 1, name: `SO17ADM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
shakeScreen();
showTextbox();
text(() => {
   `Snap!`;
   `It looked to me almost as if sparks were flying in the air...`;
   `Sora's hands flew across the virtual keyboard.`;

});
fgload({ id: 1, name: `SO04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6B113)`"Agh...!"`;
   `Unfazed, she continued to type.`;

});
hideTextbox();
monoColorOverlay({ interval: 1, color: WHITE });
playSFX({ name: `SE07_02`, a1: 0, volume: 100 });
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
shakeScreen();
showTextbox();
text(() => {
   `Crack!`;

});
hideTextbox();
monoColorOverlay({ interval: 1, color: WHITE });
playSFX({ name: `SE07_02`, a1: 0, volume: 100 });
fgload({ id: 1, name: `SO04ADM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
shakeScreen();
showTextbox();
text(() => {
   `SNAP!`;
   `Sparks violently scattered out one after another.`;

});
hideTextbox();
monoColorOverlay({ interval: 1, color: WHITE });
playSFX({ name: `SE07_03`, a1: 0, volume: 100 });
fgload({ id: 1, name: `SO17ADM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
shakeScreenHard();
showTextbox();
text(() => {
   Sora(T6B114)`"Ow!"`;

});
makeFGTransparent({ id: 1 });
fgload({ id: 1, name: `SO17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Her RSD image wavered, and the virtual keyboard disappeared.`;
   Takeshi`"Sora, are you okay!?"`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6B115)`"I'm sorry, I was denied access..."`;
   `Her image continued to flicker for a while.`;

});
removeFG({ id: 1, useAnim: true });
makeFGNormal({ id: 1 });
if (l_counter > 1) goto(lbl_00000eb7);
showTextbox();
text(() => {
   `The next thing to try was...`;

});
goto(lbl_000008eb);
let lbl_00000b96;
l_selection_1_available = 0;
l_counter += 1;
showTextbox();
text(() => {
   Takeshi`"Hey You, is there any way to get around this lock that you know of?"`;
   Takeshi`"...Huh? Where'd You go?"`;
   You(T6B116)`"Takeshi! Outta the way!"`;
   Takeshi`"Eh?"`;

});
hideTextbox();
playSFX({ name: `SE02_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Turning toward the voice coming from behind, a few yards away I saw You throw down the first-aid kit she had been carrying.`;
   Takeshi`"Huh? Uwwaaaah!"`;
   `She immediately came hurtling toward me as if possessed.`;

});
hideTextbox();
playSFX({ name: `SE01_00`, a1: 0, volume: 95 });
fgload({ id: 1, name: `YU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6B117)`"Wwoooooooooooooooaaaah!!"`;
   `She looked furious.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I stumbled back away from the door.`;

});
hideTextbox();
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
fgload({ id: 1, name: `YU10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6B118)`"Aaaaaiiiiii!"`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE05_04`, a1: 0, volume: 100 });
shakeScreenHard();
showTextbox();
text(() => {
   `——CRASH!`;
   `With a perfect flying drop-kick, she threw open the panel to the electronic lock.`;
   Takeshi`"W-w-what are you doing! This isn't the time to be goofing off!"`;

});
fgload({ id: 1, name: `YU04ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6B119)`"If it won't open any other way, I'm going to break it down!"`;
   `You shouted, as she leaned over panting.`;
   Takeshi`"That's a little extreme..."`;
   Takeshi`"Well, how about it? Does it look like it's going to open?"`;

});
fgload({ id: 1, name: `YU14ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You`"........."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU10ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6B120)`"Aaagh! It won't budge an inch!"`;
   `Neither the door, nor the panel had changed at all.`;

});
hideTextbox();
playSFX({ name: `SE04_03`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   You(T6B121)`"Ai! Ya! Hai! Wah! WachoO!"`;

});
playSFX({ name: `SE04_03`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `You began hitting the lock with a renewed vigor, uttering strange noises.`;

});
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `But, all the lock did was make error sounds, and ask politely for her to re-enter the password.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6B122)`"*sigh*..."`;

});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6B123)`"Ouch..."`;
   `In the end, You ended up with a sprained finger and went back to the first-aid kit.`;

});
removeFG({ id: 1, useAnim: true });
if (l_counter > 1) goto(lbl_00000eb7);
showTextbox();
text(() => {
   `Next I...`;

});
goto(lbl_000008eb);
let lbl_00000d3c;
l_tsugumi_point += 1;
l_selection_2_available = 0;
l_counter += 1;
showTextbox();
text(() => {
   Takeshi`"Tsugumi, do you think there's a way to open it up?"`;

});
fgload({ id: 1, name: `TU14ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6B124)`"What are you talking about, Takeshi..."`;
   Tsugumi(T6B125)`"I'm wracking my brains thinking about the same thing."`;
   Takeshi`"Ah, oooh...yeah, right."`;

});
fgload({ id: 1, name: `TU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   `After thinking for a bit, Tsugumi asked Sora a question.`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU18ADM`, name2: `SO05ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6B126)`"Do you know what kind of process this door goes through when it opens?"`;
   Sora(T6B127)`"Okay, let me see..."`;
   Sora(T6B128)`"After the correct keys are input, a lever embedded inside the hatch should start to raise."`;
   Sora(T6B129)`"As that lever turns, the lock on the door is released."`;

});
fgload({ id: 2, name: `SO10ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T6B130)`"However the lever is nothing more than an ornament now. It is turned automatically using electricity...and the motor is usually locked in place."`;

});
fgload({ id: 1, name: `TU17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6B131)`"Yeah...I suppose they designed it so that you couldn't open it up during an emergency on purpose."`;
   Tsugumi(T6B132)`"In that case—"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `She pulled out a flat-head screwdriver.`;
   `(Where'd she get that from...?)`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6B133)`"If we can get that lever off, maybe we can open this up manually."`;
   `She began to insert the tip of the screwdriver into the gap between the door's panel lines.`;
   `And...`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6B134)`"Haaa!"`;

});
playSFX({ name: `SE05_07`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Tsugumi jammed the screwdriver in with all her might.`;
   `She tried to dig out the lever buried in the hatch by force.`;

});
playSFX({ name: `SE07_09`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `The alloy screwdriver crushed like a piece of candy.`;
   `The lever budged slightly towards the surface of the door.`;
   `However...`;

});
hideTextbox();
playSFX({ name: `SE07_05`, a1: 0, volume: 100 });
shakeScreen();
showTextbox();
text(() => {
   `Slam!!`;
   `The screwdriver bent into two equal parts from it's handle.`;
   `And the lever snapped back into place.`;

});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   Tsugumi(T6B135)`"There's nothing I can do."`;

});
playSFX({ name: `SE02_04`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `Tsugumi threw the bent screwdriver on the floor.`;

});
removeFG({ id: 1, useAnim: true });
if (l_counter > 1) goto(lbl_00000eb7);
showTextbox();
text(() => {
   `What next...`;

});
goto(lbl_000008eb);
let lbl_00000eb7;
l_counter = 0;
l_selection_0_available = 0;
l_selection_1_available = 0;
l_selection_2_available = 0;
showTextbox();
text(() => {
   Takeshi`"Damn! What are we going to do!?"`;
   Kid`"........."`;
   You`"........."`;
   Tsugumi`"........."`;
   Sora`"........."`;
   Coco`"........."`;
   Pipi(PIPI_06)`"*whine*..."`;

});
multifgload2({ id1: 1, id2: 2, name1: `CO08AWM`, name2: `KA13ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   `Coco was being supported by the Kid. She couldn't stand by herself.`;
   `She soon was hunched over on the floor.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `I tried pulling her up again but...her face quickly drained of all color.`;
   `(This is bad...if we don't...get in there quickly...!)`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   Announcement(T6B136A)`"Öffnen Sie ${waitVoice}${voice(T6B136B)}die Tür von HIMMEL"`;

});
showTextbox();
text(() => {
   `Suddenly a voice that I hadn't heard before sounded from the corridor.`;
   Takeshi`"What's it saying?"`;

});
fgload({ id: 1, name: `SO04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6B137)`"Someone is trying to access LeMMIH's system!"`;
   `Sora flashed open her eyes and shouted.`;
   Sora(T6B138)`"From inside the room...from a terminal inside HIMMEL!"`;
   Takeshi`"What!?"`;

});
removeFG({ id: 1, useAnim: true });
hideTextbox();
playSFX({ name: `SE03_01`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `The access indicator light for the electronic lock turned green.`;

});
playSFX({ name: `SE03_07`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `The hatch's lever raised and turned automatically...`;

});
playSFX({ name: `SE00_02`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `The door opened suddenly....`;

});
hideTextbox();
l_ce = 0;
monoColorOverlay({ interval: 4, color: WHITE });
tweenZoom({ x: 320, y: 197, hx: 200, hy: 150, duration: 20 });
playSFX({ name: `SE00_04`, a1: 1, volume: 100 });
waitForSFX();
removeBG({ mode: WHITE, transition: 62 });
playBGM({ num: 15, volume: 100 });
bgloadCrop({ name: `BG31A1`, transition: 26, x: 0, y: 0, hx: 800, hy: 600 });
setMonoColorOverlayFadeOutDuration(61);
fadeOutMonoColorOverlay();
unSkippableDelay(48);
clock(`14:19`);
l_ce = 0;
tweenZoom({ x: 400, y: 0, hx: 800, hy: 600, duration: 120 });
tweenZoom({ x: 240, y: 0, hx: 800, hy: 600, duration: 120 });
bgloadCrop({ name: `BG31A1`, transition: 26, x: 240, y: 0, hx: 800, hy: 600 });
delay({ interval: 60 });
showTextbox();
text(() => {
   `Stagnant air poured out of the room.`;
   `For some reason the humidity felt like it was lower than outside. The air-conditioning was humming quietly.`;
   `It was white...`;
   `It was pure white inside.`;
   `The whiteness of the wall and floor was emphasized by the brightness of the lighting and seemed to leap out at us.`;
   `HIMMEL - It didn't necessarily seem like a mistake to have named the room heaven.`;
   `There were nameplates on the machines with 'HIMMEL' written on them.`;
   `It seemed that we were in the computer control room.`;
   Takeshi`"H-hey! There's someone here..."`;
   Takeshi`"Did he open up the door just now?"`;
   `There was a single person in the room.`;
   `He was a man who appeared to be in his 40's, dressed in a white lab coat.`;
   `And...`;
   `Blood was coming from his mouth and he had passed out at a console.`;
   Takeshi`"Hey mister! Are you alright!?"`;
   //??
   Unk`"........."`;
   `The man didn't reply to me. He just lay there motionless.`;
   Takeshi`"Who is this guy...?"`;
   Takeshi`"Sora, do you have any idea who this is?"`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6B139)`"No, I am unable to verify his ID..."`;
   Sora(T6B140)`"But judging from the way he is dressed, it is safe to assume he was a researcher at the IBF Facility."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I put my hands on his shoulder and raised him into a sitting position.`;
   `I looked over his white clothing to see if he had any name tags, or other way to determine his name.`;
   `But he didn't have any ID card, or nameplate to check.`;
   Researcher(T6B141)`"Uuugh..."`;
   Takeshi`"Hey, are you one of the staff from the research facility?"`;
   Researcher(T6B142)`"Y-yeah...that's right..."`;
   `Breathing faintly, the researcher replied.`;
   `He seemed to be unable to open his eyes, and searched for me by my voice.`;
   Researcher(T6B143)`"Doesn't seem like you're...here to rescue me..."`;
   `He grabbed onto me with shaking hands.`;
   `They were covered in blood...`;
   Researcher(T6B144)`"So there were still people in LeMU...and it's been six days since..."`;
   Researcher(T6B145)`"Ha, ha, ha, what a surprise.... *Gagh*"`;
   `Blood trickled from his mouth, and he smiled, wryly.`;
   Takeshi`"H-hey! Don't strain yourself. You don't have to talk!"`;
   Researcher(T6B146)`"I'm so sorry...it's all our fault..."`;
   Takeshi`"What happened? Did something happen down there?"`;
   Researcher`"........."`;
   Researcher(T6B147)`"But, why all this..."`;
   Researcher(T6B148)`"This..."`;
   `After that he was silent.`;
   Takeshi`"Hey! Hey! Hang in there!"`;
   Researcher`"........."`;
   `I shook his shoulders, but he didn't reply.`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6B149)`"Takeshi, cut it out, you're shaking him too hard."`;
   Tsugumi(T6B150)`"He's unconscious. Just leave him alone for now."`;
   Takeshi`"O-okay..."`;

});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6B151)`"We'll...we'll have to bring him with us."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I wondered what was going on.`;
   `(...Wait, more importantly, we've got to hurry.) `;
   `(I don't have a clue what's going on, but I can't worry about that now.)`;
   `(We've got to get Coco to IBF right away...)`;

});
fgload({ id: 1, name: `YU03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `You, who had been waiting at the entrance to HIMMEL, went inside with Pipi.`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `CO08AWS`, name2: `KA08ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   `The Kid followed behind, carrying Coco.`;
   `The door had an electronic lock on it, so we left it open.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `SO18ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6B152)`"Everyone, at the far end of this room is another room, can you see it?"`;
   Takeshi`"Yeah..."`;
   Tsugumi(T6B153)`"Yes, I see it."`;
   `We all nodded.`;
   `There was a room on the other side of the glass in front of us.`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6B154)`"That is the compression chamber for IBF."`;
   `Sora straightened up and explained the situation without emotion.`;

});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6B155)`"Judging from my incomplete data..."`;
   Sora(T6B156)`"IBF is enclosed in higher-pressure gas than LeMU. The IBF area is set to what is known as 'saturated diving specifications'."`;
   Sora(T6B157)`"This type of area is also probably more suitable for research with bacteria.... The atmospheric pressure of IBF is actually at about 12.5 atmospheres."`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6B158)`"I want all of you to enter that room."`;
   Sora(T6B159)`"And after you spend about one hour in the compression chamber, you'll take the access elevator down to IBF."`;
   Sora(T6B160)`"And I should tell you this as a precaution, but..."`;
   Sora(T6B161)`"You will not be able to retrace your steps easily from this point on. Please give this due consideration."`;
   Takeshi`"Ahhh..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `We can't go back...`;
   `We've got to make a decision.`;

});
choice(
   `Alright, we're going!`,
   `Wait just a second`,
);
switch (l_choice) {
   case 0: goto(lbl_000011a7);
   case 1: goto(lbl_000011bb);
}
let lbl_000011a7;
l_sora_point += 1;
showTextbox();
text(() => {
   Takeshi`"Alright, we're going!"`;
   `I looked at everyone.`;
   `You, the Kid, Tsugumi, Sora and Pipi...all nodded.`;

});
goto(lbl_0000123f);
let lbl_000011bb;
l_tsugumi_point += 1;
showTextbox();
text(() => {
   Takeshi`"Hey, wait just a second!"`;
   `As soon as I said that Tsugumi glared needles at me.`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6B162)`"What's the matter, Takeshi? You aren't chickening out now, are you?"`;
   Takeshi`"No, that's not it..."`;
   Takeshi`"If we're going to spend an hour stuffed into that little room, I just wanted to make sure everyone was ready."`;
   Takeshi`"You know, check to see if everyone had gone to the bathroom,"`;
   Takeshi`"Brushed their teeth, taken a shower."`;
   Takeshi`"And if you're going to bring a snack, make sure it's reasonable..."`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SO07ADM`, name2: `TU05ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6B163)`"*sigh*..."`;
   Sora(T6B164)`"*sigh*..."`;
   `I heard two rather large sighs.`;

});
multifgload2({ id1: 1, id2: 2, name1: `SO01ADM`, name2: `TU17ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6B165)`"Saying something like that at a time like this...you really are a moron."`;
   Sora(T6B166)`"Takeshi, it will only take one hour. I'm sure everyone can wait."`;
   Sora(T6B167)`"More importantly, we need to hurry, okay?"`;
   `It seemed that everyone was tired of my jokes.`;
   `I had just wanted to put everyone at ease...`;
   Takeshi`"Okay, okay, I'm sorry."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"So let's get moving then!"`;
   `When I said this again, You, the Kid, Tsugumi, Sora, and Pipi...all nodded in unison.`;

});
let lbl_0000123f;
multifgload3({ name1: `YU18ADS`, name2: `CO08AWS`, name3: `KA08ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   `The Kid and You held the unconscious Coco between them.`;
   `Tsugumi and I picked up the researcher, and Pipi took up the rear.`;
   `Everyone lined up at the transparent sliding door on the far side of the room.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
fgload({ id: 1, name: `SO10ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Sora used the control panel on a terminal to open it up.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `All of us entered the room together.`;
   `A single panel of reinforced glass lay in between the control room and the compression chamber.`;
   `More precisely, a chamber was set in the middle of the room...had been constructed there.`;

});
bgload({ name: `BG32A1`, transition: 20 });
showTextbox();
text(() => {
   `We brought Coco and the researcher into the room first and sat them down on chairs.`;
   `Both of their breathing was ragged, and they looked in pain. Their faces were extremely pale and sickly.`;
   `We needed to hurry...`;
   `I hated to waste an hour here.`;

});
multifgload3({ name1: `YU03ADS`, name2: `KA08ADS`, name3: `TU15ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   `You, the Kid, Tsugumi and Pipi all stood in the open space available.`;
   `With everyone in there it was fairly crowded.`;
   Sora(T6B168)`"Once the compression is completed, the door on the far side should open, and you can enter the elevator."`;
   `For some reason Sora didn't enter the room, but spoke to us from in front of the entrance.`;
   Sora(T6B169)`"I will expedite the compression process. It may be a little uncomfortable, but please bear with it."`;
   `And saying this, Sora went to close the door.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Sora, what's wrong? You aren't coming with us?"`;
   Sora(T6B170)`"Uh, no, I..."`;
   Takeshi`"Come on, let's get started. What are you waiting for?"`;
   `I casually reached out toward Sora.`;
   `I knew I couldn't grab her, but I did it anyway.`;
   `However...`;

});
hideTextbox();
monoColorOverlay({ interval: 1, color: WHITE });
playSFX({ name: `SE07_03`, a1: 0, volume: 100 });
eff_41 = 13;
eff_42 = 7;
eff_50 = 144;
showDimInAndOutAnim();
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   Sora(T6B171)`"Kyaaa!"`;
   `As soon as I tried to touch her, sparks flew into the air.`;
   `It felt as though a shock had gone through me.`;
   `A transparent wall suddenly appeared in front of the door.`;
   `There was a red wall of flame...`;
   Takeshi`"What!?"`;

});
hideTextbox();
closeDimInAndOutAndFilterAnim();
playSFX({ name: `SE00_02`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `Alarmed, I drew back my hand, and the door closed.`;
   Takeshi`"Sora! Sora! What was...?"`;
   Sora(T6B172)`"From this point on, this is the jurisdiction of a different computer system."`;
   `I heard Sora's voice talking to us calmly over the speaker of the compression chamber's intercom.`;
   Sora(T6B173)`"I am but a single part of the LeMMIH system, therefore...I am unable to go to IBF. I do not have the authority to access the area."`;
   Sora(T6B174)`"I am sorry, but I will have to see you off."`;
   `The wall of fire had vanished.`;

});
hideTextbox();
stopBGM();
playSFX({ name: `SE09_02L`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `We were in the compression chamber shut off from the rest of the world.`;
   `The sound of pumping gas, which was slowly raising the air pressure, could be heard throughout the chamber.`;
   Takeshi`"Hey...everyone take out your voice converters. They get in the way when you're adjusting to the pressure."`;
   `Everyone did as I said, and removed their voice alternators.`;
   `I took out Coco's, myself.`;
   `I checked the researcher, but it didn't seem he was wearing any.`;
   `After that...`;
   `Hardly anyone said a word.`;
   `We were all waiting for the time to pass.`;
   `Sora could be seen outside of the chamber's window.`;
   `She didn't move, only stood and watched us.`;

});
clock(`15:32`);
showTextbox();
text(() => {
   `And then...`;

});
hideTextbox();
playSFX({ name: `SE00_18`, a1: 1, volume: 100 });
waitForSFX();
playSFX({ name: `SE00_09`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `The lock from the door on the far side of the chamber clicked, and released.`;
   `I felt a subtle change in pressure and the lift down to IBF opened.`;
   `We all filed into it one by one.`;
   Sora(T6B175)`"Everyone...take care."`;
   `We could hear her voice from the speaker on the other side of the room.`;
   `But we couldn't see her.`;
   `I wondered if I would ever see her up close again...?`;
   `Cocking my head to one side, I thrust the voice alternators back in my ears.`;

});
removeBG({ mode: WHITE, transition: 2 });
stopSFX()
playBGM({ num: 13, volume: 100 });
showTextbox();
text(() => {
   `Everyone got aboard the lift.`;
   `And as soon as the doors closed, the elevator started sliding down.`;
   Announcement(T6B176)`"Depth 210 feet..."`;
   Announcement(T6B177)`"Depth 240 feet..."`;
   Announcement(T6B178)`"Depth 270 feet..."`;
   `What could be below Heaven?`;
   `More heaven, or...`;
   Announcement(T6B179)`"Depth 357 feet"`;

});
playSFX({ name: `SE00_00`, a1: 0, volume: 95 });
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `The door to the elevator opened.`;
   `The passage extended in two directions from the elevator room. I went in one of these.`;

});
bgload({ name: `BG33A8`, transition: 10 });
setSceneTitle({ index: 42 });
showTextbox();
text(() => {
   `Everything was totally dark, and I could hardly tell where I was headed.`;
   `Fearfully I took a step forward.`;

});
playSFX({ name: `SE03_11`, a1: 0, volume: 90 });
bgload({ name: `BG33A4`, transition: 20 });
showTextbox();
text(() => {
   `And suddenly, as if someone had noticed our arrival, the lights went on in the room.`;
   Takeshi`"Is someone there?"`;
   You(T6B180)`"Umm, I think they just turned on by themselves..."`;
   Tsugumi(T6B181)`"The sensors reacted, and the computer activated the lights?"`;
   Kid(T6B182)`"I'm not sure, but...it's possible."`;
   `It seemed that there was a pool where a small submarine could dock.`;
   `The pool was a two-layer structure, but there was no sign that seawater would flow in.`;
   `It felt a little hot in there, but it seemed as if the air-conditioning was still working properly.`;
   `Perhaps the place was even more comfortable than the flooded Dritte stock.`;
   `But...there was no sign of anyone.`;
   Takeshi`"Anyway, let's get to where we have to go."`;
   `We opened a watertight door at the other side of the room and continued deeper into the installation.`;

});
bgload({ name: `BG35A2`, transition: 10 });
playSFX({ name: `SE03_11`, a1: 0, volume: 90 });
bgload({ name: `BG35A1`, transition: 20 });
showTextbox();
text(() => {
   `A passageway the same size as LeMU's emergency corridors...no, maybe even smaller led off into the distance.`;
   `For some reason the whole place seemed colder, less alive than the structure above.`;
   `As we continued down the corridor, lights would go on automatically, a few feet in front of us.`;
   `(Well...it certainly seems computer controlled).`;
   `As we continued moving, the lights followed us, lighting up the only the areas around us.`;
   `The corridor branched off in a few directions, but all of them ended at watertight doors that were closed.`;
   `I wondered if IBF had flooded except for one part?`;
   `Anyway, the number of areas that we could enter was limited.`;
   `Luckily we found the examination room, right away.`;
   `I quickly turned the handle and opened the door.`;

});
playSFX({ name: `SE00_07`, a1: 0, volume: 100 });
bgload({ name: `BG34A2`, transition: 10 });
playSFX({ name: `SE03_11`, a1: 0, volume: 90 });
bgload({ name: `BG34A1`, transition: 20 });
showTextbox();
text(() => {
   `You and the Kid laid Coco down on a nearby table.`;
   `Tsugumi and I put the researcher down in a chair, slowly.`;
   `There were a few ordinary beds in the examination room, and the same kind of 'L-MRI' that we had found in LeMU's infirmary.`;
   `There were numerous medical instruments that looked like things that you might only see in a science fiction movie.`;
   `I wondered what in the world they were for?`;
   `I had no idea.`;
   Takeshi`"Hey, You? Where is that 'high-pressure oxygen' thing that Sora was talking about?"`;
   You(T6B183)`"H-how should I know...?"`;
   Takeshi`"Tsugumi, what should we do?"`;
   Tsugumi(T6B184)`"Well, we'll have to look for it. None of us knows a thing about this place."`;
   Researcher(T6B185)`"Gagh.... W-wait!"`;
   `The researcher coughed as he spoke.`;
   Takeshi`"H-hey, don't move! Are you okay!?"`;
   Researcher(T6B186)`"I've been better...but at least I'm alive..."`;
   `With his eyes closed, he raised his hands weakly in response.`;
   Researcher(T6B187)`"This smell...this is IBF?"`;
   Researcher(T6B188)`"So I'm back where I started... *cough*"`;
   Takeshi`"So, you WERE working here...."`;
   Takeshi`"Well then, there's something I want to ask you. We're looking for something called a 'high-pressure oxygen treatment device.'"`;
   Takeshi`"We've come as far as the examination room, but we don't have a clue what to look for. Can you help us? Please!"`;
   Researcher(T6B189)`"Oxygen treatment...yeah, you're looking for the pods."`;
   Researcher(T6B190)`"There should be some alloy capsules, with a mat set inside of them."`;
   Researcher(T6B191)`"They look like a bunch of cylinders stuck to a pillar.... You see them?"`;

});
bgload({ name: `EV_CO09B`, transition: 20 });
showTextbox();
text(() => {
   Takeshi`"Yeah, they're right in front of me."`;
   Researcher(T6B192)`"That's them... *cough*"`;
   Takeshi`"Hang in there! ...We found them. So, don't waste your energy talking anymore, okay?"`;
   `New blood appeared on the researcher's closed hand, as he wiped his mouth.`;
   Researcher(T6B193)`"Just take a look at the manual...they should be...easy to operate."`;
   Takeshi`"Okay, I gotcha..."`;
   `The strength left the researcher's hand...`;
   `Just before he collapsed, I grabbed onto his shoulder to support his body.`;
   Takeshi`"Let's put him in a pod. And Coco too..."`;
   Tsugumi(T6B194)`"Yeah..."`;
   `Tsugumi and I got on either side of the researcher and supported him.`;
   `We brought him over to where the three pods were.`;
   `When I pressed the button on the side of one, its hatch opened.`;
   `I put him down gently inside.`;
   `When I pressed the button again, the capsule pod closed again silently.`;

});
bgload({ name: `EV_CO09A`, transition: 20 });
showTextbox();
text(() => {
   `The Kid and You laid Coco down in another pod.`;
   `The hatch to the pod closed soon after.`;

});
bgload({ name: `EV_CO09C`, transition: 20 });
showTextbox();
text(() => {
   Takeshi`"Did you find the manual?"`;
   You(T6B195)`"Yeah. This is the control panel..."`;
   `You started operating a terminal a short distance away.`;
   You(T6B196)`"High-pressure oxygen treatment...set..."`;
   `The screens on the monitors attached to the tubes flickered, and both of the pods seemed to be functioning normally.`;
   You(T6B197)`"That should do it."`;
   Takeshi`"Okay......"`;
   `The condition of the people inside the pods was monitored and appeared on the control panel.`;
   `Blood pressure, heart rate, respiration rate...`;
   `The expressions on their faces were even visible.`;
   `I watched them for a few minutes.`;
   `Coco and the researcher whose name we didn't know.`;
   `It was a slow process, but they both seemed to be gradually returning to normal.`;

});
bgload({ name: `BG34A1`, transition: 20 });
multifgload3({ name1: `YU17ADS`, name2: `KA08ADS`, name3: `TU11ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   You(T6B198)`"I'm so relieved..."`;
   Tsugumi(T6B199)`"Yeah...tell me about it."`;
   Kid(T6B200)`"Yeah..."`;
   Takeshi`"Looks like we made it in time."`;
   Pipi(PIPI_00)`"*Woof*"`;
   `We let out a collective sigh of relief.`;
   `It seemed as if we had escaped the worst, for the moment.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Well......"`;
   Takeshi`"We don't have time to hang around, you know?"`;
   `We didn't know if the situation here at IBF was any different than LeMU.`;
   `There might be other survivors, or a way out, even communications...`;
   `We could possibly even find information about TB.`;
   `It was best to search as much as time would allow.`;
   `Everyone agreed, so Tsugumi, the Kid and I went looking around IBF.`;
   `You had the most medical knowledge, so she stayed in the examination room with Pipi, to look after Coco and the researcher.`;

});
removeBG({ mode: BLACK, transition: 2 });
stopBGM();
bgload({ name: `BG35A1`, transition: 20 });
playBGM({ num: 4, volume: 100 });
clock(`15:54`);
showTextbox();
text(() => {
   `Because we were unfamiliar with the area the three of us set out together to look around.`;
   `We walked all around IBF.`;
   `But...`;
   `Since there were only a few places, there wasn't much to see.`;
   `Almost all of the corridors had been blocked off.`;
   `And there were many doors that didn't open.`;
   `When I tried forcing open one of the doors...`;
   `A terrible smell started pouring out, so I hurriedly closed it again.`;
   `From what I had seen during the brief moment the door was open...`;
   `A few researchers covered in blood had died clawing at their throats.`;
   `I didn't really want to think of what had happened there.`;
   `It wasn't hard to imagine that the situation had been the same or worse than what happened at LeMU.`;

});
bgload({ name: `IMG02B`, transition: 20 });
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `Another room was empty of people and there were a few computer terminals there.`;
   `Operating the terminals, we were able to scan through some of the information left there.`;
   `There was some information about Tief Blau—`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Name : Tief Blau.`;

});
showTextbox();
text(() => {
   `Symptoms: Fever, chills, headache, aching muscles, loss of appetite, vomiting, diarrhea, stomach pains, etc.`;
   `As it progresses, the patient begins to hemorrhage from the mouth, gums, conjunctiva, nasal cavity, the skin, as well as the alimentary canal, and has a high probability of dying.`;
   `Death rate after contracting the disease: over 85%.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Symptoms first appear similar that of a common cold, and while they may temporarily improve, the patient's condition will again rapidly deteriorate, resulting in hemorrhaging.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Incubation Period: normally 2-7 days.`;

});
showTextbox();
text(() => {
   `.........`;
   `After that point all the data was corrupted and it was not clear what else was written.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Other than that, we came across some interesting information by accident.`;
   `In the corner of a business log...`;
   `"IBF Visitor Registry: Coco Yagami"`;
   `Coco's name had been listed.`;
   `Looking further into the file was what seemed like a personal memo written by somebody.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `'I get to see my daughter for the first time in a while.'`;
   `'Her school is on vacation, so she has a 10-day break.'`;
   `'I've been trapped for so long in this tin can doing virus research that I'm jealous....'`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `'That aside, when I told her that special permission had been granted for her to come down and see IBF, she sent me a happy reply saying she would.'`;
   `'We've exchanged mail every once in a while, but I wonder how long it's been since we've actually seen each other?'`;
   `'I'll just be happy if she hasn't forgotten what I look like.'`;
   `'T.Y'`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `T.Y.... I thought they were probably the initials of Mr. Yagami, Coco's dad.`;
   `Which meant that Coco had been to IBF once before May 1.`;
   `To meet her father...`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
ADV_Mode();
removeBG({ mode: BLACK, transition: 2 });
playSFX({ name: `SE00_07`, a1: 0, volume: 100 });
bgload({ name: `BG34A1`, transition: 20 });
clock(`16:23`);
showTextbox();
text(() => {
   `We didn't find any other survivors in IBF.`;
   `The Kid, Tsugumi and I all went back to the examination room.`;
   Takeshi`"You, how're they doing?"`;

});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6B201)`"Ah...yeah. It looks like they're doing okay for now."`;
   `You looked tired as she sat down and faced the pod's control panel.`;
   `I looked at the monitor showing vital signs. `;
   `Blood pressure, heart rate, respiration rate...they all seemed to have stabilized for the moment...`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6B202)`"Oh yeah, Takeshi. I checked the medical database on this terminal earlier, but..."`;
   `I hesitantly asked You...`;
   Takeshi`"Yeah, did you find something?"`;
   You(T6B203)`"Yeah..."`;

});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6B204)`"It looks as if they still haven't found any definite way...to treat the Tief Blau virus."`;
   You(T6B205)`"Although the symptoms can be temporarily treated by injecting that orange serum..."`;
   You(T6B206)`"Otherwise, the only option is to hope for the small chance that it will clear up by itself."`;
   Takeshi`"Oh..."`;
   Takeshi`"That sucks..."`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU17ADM`, name2: `KA03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Kid(T6B207)`"Huh?"`;
   Kid(T6B208)`"What do you mean?"`;
   You(T6B209)`"Um..."`;
   `You had trouble finding the words, so Tsugumi took over for her.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6B210)`"Well, basically..."`;
   Tsugumi(T6B211)`"If Coco is going to heal, her immune system is going to have to work a little harder."`;
   Tsugumi(T6B212)`"We've brought her to the treatment pod, all we can do now is hope."`;
   You(T6B213)`"Yeah, that's all we can do."`;
   Kid(T6B214)`"No..."`;
   Kid(T6B215)`"Coco isn't going to get better?"`;
   `The Kid looked like he was about to cry.`;
   Takeshi`"Nobody said that."`;
   Takeshi`"Whether she gets better or not...is up to Coco's will to live."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   Kid`"........."`;
   `The Kid walked up next to the capsule pod.`;
   Kid(T6B216)`"Coco..."`;
   Kid(T6B217)`"Coco..."`;
   `He latched firmly onto the pod, as though he would embrace it and started to cry.`;

});
bgload({ name: `EV_CO09C`, transition: 20 });
showTextbox();
text(() => {
   You(T6B218)`"We still don't know how much this pod is going to help Coco."`;
   `You murmured softly as she read the life signs on the monitor.`;
   You(T6B219)`"It seems that this pod can also do laser disinfecting as well as simple surgery, in addition to the oxygen treatment."`;
   You(T6B220)`"And depending on how you use it, even cryogenic suspension..."`;
   Tsugumi(T6B221)`"Suspension?"`;
   Takeshi`"What's that...You?"`;
   You(T6B222)`"I'm not sure. It was just in the manual..."`;
   You(T6B223)`"We don't really know is going to happen to us."`;
   You(T6B224)`"All we can do is have faith and wait."`;
   Tsugumi`"........."`;
   Takeshi`"........."`;
   Pipi(PIPI_06)`"*Whine*..."`;

});
hideTextbox();
stopBGM();
playSFX({ name: `SE03_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `—Beeep!`;
   `A sharp alarm sounded from control panel monitor.`;
   `Not knowing what it was, we all looked at the monitor at once.`;

});
playSFX({ name: `SE01_05`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `The Kid ran over to where we were.`;

});
hideTextbox();
playBGM({ num: 24, volume: 100 });
bgload({ name: `BG34A1`, transition: 20 });
showTextbox();
text(() => {
   Researcher(T6B225)`"Aagh....!"`;
   `An agonized expression came over the face of the researcher.`;
   `He thrashed and contorted inside of the cramped capsule.`;

});
fgload({ id: 1, name: `YU06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6B226)`"Aaah!"`;
   Takeshi`"H-hey mister!!!"`;
   `The researcher coughed violently and clawed at his throat.`;
   `His hand and the area around his mouth were stained red.`;
   Researcher(T6B227)`"Aaaaaaghhh...!"`;
   `The color quickly drained from his skin.`;
   `His breathing became shallow, and he groaned in a low voice.`;

});
fgload({ id: 1, name: `YU14ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6B228)`"No! I can't believe his condition would change like this!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Hey mister! Stop grabbing at your throat like that! You'll crush it!"`;
   Researcher(T6B229)`"Gaaguh..."`;
   Researcher(T6B230)`"Huuugh...huuugh...huuugh..."`;
   `He slowly lowered the hands, which he been thrashing at his throat with.`;
   Takeshi`"Hey mister, are you alright!?"`;
   Researcher(T6B231)`"No..."`;
   Researcher(T6B232)`"This...is as far...as I make it."`;
   `The researcher was barely breathing.`;
   `He was trying to breathe.`;
   `He let out a gasp....`;
   `But wasn't able to bring in air.`;
   Researcher(T6B233)`"So this...is...my...reward..."`;
   You(T6B234)`"!!"`;
   Takeshi`"........."`;
   `You poured over the manual, and desperately searched the control panel.`;
   `But...`;
   `There was nothing she could do.`;
   `There was no way for her to keep him alive.`;

});
playSFX({ name: `SE05_01`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `She pounded on the manual.`;

});
playSFX({ name: `SE05_04`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `Then placed both elbows on the panel and covered her face with her hands.`;
   You(T6B235)`"Aaah...."`;
   `She burst into tears.`;

});
multifgload2({ id1: 1, id2: 2, name1: `TU08ADM`, name2: `KA03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   Kid`"........."`;
   `Tsugumi and the Kid gazed at the monitor with strained expressions.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `The researcher's vital signs were getting weaker.`;
   Researcher(T6B236)`"...My daughter..."`;
   Researcher(T6B237)`"Daughter...take care...of her..."`;
   Researcher`"........."`;
   `He looked as though he were smiling.`;
   `And...`;
   `His eyes closed...`;
   `He would never move again.`;

});
playSFX({ name: `SE03_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Beeeeeeeeep......`;
   `The life readings from the capsule pod went blank, and an electronic alarm sounded what seemed like forever.`;
   Takeshi`"........."`;
   `We couldn't save him.`;
   `We didn't have the power to save that man, whose name we didn't even know.`;
   Takeshi`"........."`;
   You`"........."`;
   Tsugumi`"........."`;
   Kid`"........."`;
   Pipi`"........."`;

});
hideTextbox();
stopSFX()
showTextbox();
text(() => {
   `I reached out my hand and turned off the alarm on the panel.`;
   Takeshi`"How is...Coco?"`;
   You(T6B238)`"Normal..."`;
   `You replied in a voice filled with tears.`;
   You(T6B239)`"There doesn't seem to be anything wrong, for the moment..."`;
   Takeshi`"Okay...thanks."`;
   Takeshi`"We'll have to make sure...he gets a proper burial..."`;
   You(T6B240)`"...Yeah."`;

});
bgload({ name: `IMG02A`, transition: 20 });
showTextbox();
text(() => {
   `Everyone was motionless for a while.`;
   `Proof of how serious the situation was lay right before our eyes...`;
   `But time rolled ever forward.`;
   `We didn't have any more room to play around.`;
   `Dragging my legs, which seemed suddenly very heavy, I went to check all the areas in IBF once again.`;
   `We had to find a way out as soon as possible.`;
   `After searching again...`;
   `The only thing we realized was...`;
   `That all of the escape pods were gone.`;
   `The researchers had probably used them to get out.`;
   `There was no deepwater diving gear, no oxygen tanks.`;
   `Meaning—`;
   `All routes of escape had been cut off.`;
   `We were quickly approaching the earliest estimated time for LeMU's implosion....it was almost May 6, 4:30 p.m.`;

});
removeBG({ mode: BLACK, transition: 1 });
stopBGM();
delay({ interval: 120 });
if (l_tsugumi_flag != 0) goto(lbl_000017f7);
if (l_sora_flag != 0) goto(lbl_0000181f);
goto(lbl_00001846);
let lbl_000017f7;
if (l_tsugumi_point < 17) goto(lbl_00001846);
l_choice = 0;
jump(`TT6A`);
let lbl_0000181f;
if (l_sora_point < 14) goto(lbl_00001846);
l_choice = 0;
jump(`TL6A`);
let lbl_00001846;
l_choice = 0;
jump(`T_BD`);
