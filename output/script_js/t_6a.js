l_b0 = 5;
l_dayA = 6;
l_dayB = 6;
setDialogBoxColor(GREEN);
if (l_sora_flag != 0) goto(lbl_00000091);
setSceneTitle({ index: 37 });
goto(lbl_0000009d);
let lbl_00000091;
setSceneTitle({ index: 38 });
let lbl_0000009d;
chapterCutin({ name: `00000000` });
playBGM({ num: 2, volume: 100 });
bgload({ name: `BG07B1`, transition: 20 });
clock(`7:26`);
showTextbox();
text(() => {
   Takeshi`"........."`;
   `The sound of boiling, bubbling oil filled the room.`;
   `I fried the chicken in silence.`;
   `After getting up, we all gathered in front of the sandwich shop as usual.`;
   `As luck would have it, everyone showed up at the same time.`;
   `I guess I could have called it lucky...`;

});
multifgload3({ name1: `CO13ADS`, name2: `KA03ADS`, name3: `YU17ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   You`"........."`;
   Coco`"........."`;
   Kid`"........."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SO13ADS`, name2: `TU17ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   Sora`"........."`;
   Tsugumi`"........."`;
   Pipi`"........."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `Hardly anyone said a thing.`;
   `Everyone had glum expressions on their faces and ate silently.`;
   `There was a strange atmosphere surrounding us. For some reason it had become hard for us to look one another in the eyes.`;
   `It felt like the beginning of a bottomless rift amongst us.`;
   `And at the same time, there was a strange smell in the air...`;

});
hideTextbox();
playSFX({ name: `SE02_13`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Sizzle!`;
   Takeshi`"Aggghh!"`;
   `There was smoke coming from the tip of my finger!`;
   Takeshi`"Smoke! Smoke! Aaaggggh that's hot....!"`;
   `I had been firmly pressing it against the grill.`;
   `I hastily cut the power.`;
   `A juicy smell, not unlike sausage, was coming from the burnt tip of my finger.`;
   Takeshi`"Ooooooww, that hurts...."`;
   Takeshi`"I'm such an idiot..."`;
   `As I blew on my finger to cool it off, I looked around at everyone.`;

});
multifgload3({ name1: `CO03ADS`, name2: `KA03ADS`, name3: `YU03ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   You`"........."`;
   Coco`"........."`;
   Kid`"........."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SO03ADS`, name2: `TU03ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   Sora`"........."`;
   Tsugumi`"........."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `They had noticed, but they all turned their gazes down.`;
   Pipi(PIPI_06)`"*whine*"`;
   `Only Pipi was kind enough to acknowledge me.`;
   Takeshi`"Yeah Pipi, I burnt myself pretty good, ha, ha, ha."`;
   Pipi`"........."`;
   `But soon, even Pipi turned his face away from me.`;
   Takeshi`"Hey..."`;
   `It seemed like everyone hated me. I felt totally alone.`;
   `The sandwich I had just finished cooled and soon it no longer tasted palatable.`;
   `It felt like the morning after a funeral.`;

});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `Everyone knew why things had sunk so low.`;
   `Everyone knew, but nobody wanted to say anything.`;
   `A moment of carelessness had opened our hearts up to despair...`;
   `They shoveled the chicken sandwiches into their mouths in silence.`;

});
hideTextbox();
stopBGM();
bgload({ name: `BG17A1`, transition: 20 });
showTextbox();
text(() => {
   `After we were all finished eating, everyone went to the Conference Room.`;

});
clock(`8:9`);
hideTextbox();
playBGM({ num: 3, volume: 100 });
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6A000)`"There is an important reason why I've called all of you here."`;
   Sora(T6A001)`"There is something that I wanted to inform you about as soon as possible."`;
   Sora(T6A002)`"I know it is difficult, but it is important for you to accurately realize the full gravity of this situation."`;
   Sora(T6A003)`"Please don't panic, settle down...and listen carefully."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Sora paused for a second.`;
   `Sora looked at all five of us in turn....You, Tsugumi, Coco, the Kid and me.`;
   `The Conference Room was silent.`;
   `But I could hear the sound of water, faintly coming from somewhere.`;
   `Was it water lapping in the hallways...?`;
   `Moments later I couldn't hear it anymore.`;
   `As if Sora was waiting for this cue, she slowly opened her mouth.`;

});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6A004)`"The situation...is not good."`;

});
playSFX({ name: `SE03_02`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `Sora extended her hand and a holographic window appeared in the space in front of us.`;
   `I felt like I hadn't seen her do that for a while.`;

});
removeFG({ id: 1, useAnim: true });
bgload({ name: `IMG03A`, transition: 20 });
showTextbox();
text(() => {
   Sora(T6A005)`"Currently, there are no areas that show signs of new flooding."`;
   Sora(T6A006)`"Since the flooding of the Cosmic Whale area in Dritte stock last night, there have been no further reports of significant damage."`;
   Sora(T6A007)`"The burden being placed on LeMU's support columns has increased, due to the flooding." `;
   Sora(T6A008)`"The structural distortion between floors is increasing."`;
   Sora(T6A009)`"As this continues, LeMU will eventually lose its equilibrium and tilt dramatically."`;
   Sora(T6A010)`"If the damage to the areas connecting the floors of different sectors increases, there is the possibility that pipe leaks could flood the dry sectors."`;
   Sora(T6A011)`"In other words...we can't afford to be careless. Things are critical."`;

});
bgload({ name: `IMG01B`, transition: 20 });
showTextbox();
text(() => {
   Sora(T6A012)`"I think that I told you this before..."`;
   Sora(T6A013)`"Implosion of LeMU is estimated to occur at 4:30 a.m. on May 7."`;
   Sora(T6A014)`"The calculation has a margin of error of +/- 12 hours."`;
   Sora(T6A015)`"There has been no significant change in this prediction."`;
   Sora(T6A016)`"In one area, the strength limits of partitions have already been exceeded."`;
   Sora(T6A017)`"The destruction of LeMU will be gradual, but it will inevitably and steadily occur."`;
   Sora(T6A018)`"It is...only a matter of time."`;

});
bgload({ name: `BG17A1`, transition: 20 });
showTextbox();
text(() => {
   `Sora told all of us this with a calm look on her face.`;
   `We all swallowed and held our breath as we listened.`;
   `We knew we were reaching our time limit.`;
   `We had no choice but to accept the reality.`;
   `There was no avoiding the situation.`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6A019)`"Presently, the power generator is functioning normally."`;
   Sora(T6A020)`"However, if by chance there is a blackout...we will switch to the emergency power source battery."`;
   Sora(T6A021)`"This is generally meant for supporting the emergency lighting and the maintenance for LeMU's system...it should last for about two hours."`;

});
if (l_sora_flag == 0) goto(lbl_000002bc);
showTextbox();
text(() => {
   `However...`;
   `As I listened to Sora's report, I couldn't help thinking about yesterday...`;
   `...with Sora.`;
   `How much of her thought processing had been 'repaired'?`;

});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Speaking in front of me was a Sora who was practical, businesslike and simply responding to the situation at hand.`;
   `She looked at me as if nothing had transpired, and I was of little importance to her.`;
   `Which Sora is she? The real one or the fake one...?`;
   `This sucks...`;
   `It wasn't the time to be thinking about that.`;

});
goto(lbl_00000304);
let lbl_000002bc;
showTextbox();
text(() => {
   `I needed to be listening more attentively to Sora's report.`;
   `Just like You, Coco, Kid, Pipi...`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `...and even Tsugumi.`;
   `Everyone was listening calmly to what Sora had to say. No one was panicking, yet.`;
   `Last night, Tsugumi's yells had pierced my heart. Yet her bitter bullet didn't come out my back—it remained lodged inside as a constant reminder.`;

});
fgload({ id: 1, name: `TU18ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `She refused to look at me.`;
   `Instead, Tsugumi just stared blankly in front of her.`;
   `Perhaps that was for the best...`;
   `No, that wasn't just it...`;
   `...Something else was bothering me.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I tuned back in to the affairs at hand, listening carefully to Sora's report.`;

});
let lbl_00000304;
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6A022)`"The normal communication channels are still not functioning." `;
   Sora(T6A023)`"Neither have I found an escape route."`;
   Sora(T6A024)`"However..."`;
   Sora(T6A025)`"I have made protecting you my top priority and LeMMIH is devoting all of its resources to that objective."`;

});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6A026)`"I am also using all sensors, lights, manipulators and means at my disposal outside of the complex..."`;
   Sora(T6A027)`"And I am still investigating whether there are any means of communicating with the outside using light, radio or sound."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Sora nodded her head, straightened her back, and surveyed the room. We were all silent.`;
   `There was a look of determination in her eyes.`;

});
fgload({ id: 1, name: `SO10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6A028)`"Let me say one thing more..."`;
   Sora(T6A029)`"That as long as I...Sora Akanegasaki exist..."`;
   Sora(T6A030)`"And while my powers are limited, as long as you are here..."`;
   Sora(T6A031)`"I will do my utmost to find a way for you to escape to safety."`;

});
fgload({ id: 1, name: `SO05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6A032)`"We do not have much longer together, but I Sora Akanegasaki, am at your service."`;
   `She concluded with a serious nod.`;
   `We also nodded in agreement.`;

});
fgload({ id: 1, name: `SO09ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6A033)`"We must wait...and believe that help is on its way."`;
   `Sora's serious expression gave way to a smile.`;
   Sora(T6A034)`"Everyone, let's pray for a safe rescue."`;

});
removeFG({ id: 1, useAnim: true });
if (l_sora_flag == 0) goto(lbl_000003ce);
showTextbox();
text(() => {
   `Her calmness was the result of her efficiently functioning A.I..`;
   `Thankfully, nobody panicked.`;
   `But...`;

});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Was that a genuine smile from Sora?`;
   `I was pretty sure it was.`;
   `Because if that were fake smile...`;
   `No, even if were Sora's real smile...`;
   `Thinking about it there was something sad about it.`;
   `Not wanting anyone to realize my thoughts, I bit my lip. `;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `The gloomy atmosphere that had been hanging over the gathering lightened and everyone started thinking about how they should spend their time.`;

});
goto(lbl_000003d3);
let lbl_000003ce;
showTextbox();
text(() => {
   `The gloomy atmosphere that had been hanging over the gathering lightened and everyone started thinking about how they should spend their time.`;
   `Sora's smile instilled everyone with courage.`;
   `I was grateful for that piece of code in Sora's A.I.—the function that allowed her to be calm in times of trouble.`;

});
let lbl_000003d3;
removeBG({ mode: BLACK, transition: 2 });
stopBGM();
bgload({ name: `BG21B1`, transition: 20 });
clock(`10:51`);
playBGM({ num: 4, volume: 100 });
showTextbox();
text(() => {
   `We transferred to the rest area.`;
   `Everyone found a seat around the central stage.`;
   `A ripple ran through the water on the floor.`;
   `A wave swashed back and forth, from wall to wall.`;
   Takeshi`"This is serious..."`;
   Takeshi`"What are we going we do...?"`;
   `I didn't have any ideas. `;
   `A few quiet discussions were going on.`;
   `Yet from where I stood, it seemed the more people spoke, the murkier the answers became.`;
   `From the beginning it was the same debate repeated over and over again.`;
   `Should we wait for help?`;
   `Should we seek an escape route?`;
   `All I could do was look to the ceiling.`;
   `There was no sign that any bright ideas were on their way to my head.`;
   `We were just waiting for the walls and ceiling to come crumbling down.`;

});
fgload({ id: 1, name: `KA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T6A035)`"Ahhhh!"`;
   You(T6A036)`"Kid, what happened?"`;

});
fgload({ id: 1, name: `KA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T6A037)`"Everyone, be careful!"`;
   Kid(T6A038)`"Don't move! Don't stand up!"`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE06_01`, a1: 0, volume: 100 });
eff_4f = 153;
eff_3b = 1;
eff_3c = VAR_c3_0_6;
eff_3d = 1;
eff_3e = 2;
eff_3f = VAR_c3_0_6;
eff_40 = 1;
openShakeScreenAnim();
showTextbox();
text(() => {
   `A deep moan rumbled through the room as the floor began to shake.`;
   `A wave of fear ran through us.`;

});
hideTextbox();
closeShakeScreenAnim();
showTextbox();
text(() => {
   `Soon the shaking ceased.`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU15ADM`, name2: `KA13ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Kid(T6A039)`"Y-You..."`;
   You(T6A040)`"Don't worry! It's okay."`;
   You(T6A041)`"Right, Sora?"`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SO11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T6A042)`"Yes. The shaking right now was..."`;
   Sora(T6A043)`"I believe it was only due to a large amount of activity from the thermal vents, on the ocean floor. It should only be temporary."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `KA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid`"........."`;
   `But her facial coloring still hadn't returned to normal.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Everyone looked around the room, exchanging glances.`;
   `And just like that, nervous tension refilled the room again.`;
   Takeshi`"Not again..."`;
   `I decided to take charge.`;

});
hideTextbox();
stopBGM();
playSFX({ name: `SE05_11`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   Takeshi`"Alright! Listen up everyone!"`;
   `I rose to my feet and shouted to everyone.`;

});
hideTextbox();
playBGM({ num: 18, volume: 100 });
showTextbox();
text(() => {
   Takeshi`"Listen, just stay where you all are!"`;
   Takeshi`"I'm going to check the kiosk on the second floor!"`;

});
multifgload3({ name1: `KA07ADS`, name2: `CO06ADS`, name3: `YU06ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   `Everyone looked shocked as I yelled.`;
   `Some jaws even dropped.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SO07ADS`, name2: `TU06ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   `They may have been half put off by me.`;
   `Still, I didn't concern myself with that.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `No matter how stupid it seemed, I continued...`;
   Takeshi`"I'm going above to grab some snacks for everybody. There is plenty up there, and we still should be able to eat it."`;
   Takeshi`"It'll be a pain to go get it later, and it doesn't make sense to let them go to waste."`;
   Takeshi`"Alright? We're going to eat here."`;
   Takeshi`"And let's have a good time..."`;
   Takeshi`"Oh, that's right. Does anybody want beer...?"`;

});
fgload({ id: 1, name: `YU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6A044)`"What? B-but..."`;
   `You raised her hand timidly.`;
   You(T6A045)`"But we don't sell alcohol at the LeMU kiosks."`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6A046)`"We've had a lot of complaints about customers having bad hangovers due to the differences in air pressure down here."`;
   Takeshi`"That's too bad."`;
   Takeshi`"Well, hardly any of you look like you could hold your drink anyway. I guess it'll have to be juice..."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T6A047)`"Excuse me, Takeshi?"`;
   `Now it was Kid who raised his hand.`;

});
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T6A048)`"There are probably plenty of drinks at the chicken sandwich shop. That way you won't have to go above."`;
   Kid(T6A049)`"There's canned juice and paper cups.... Why don't I go and get them?"`;
   Takeshi`"Alright, Kid, you do that."`;

});
fgload({ id: 1, name: `KA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T6A050)`"Alright. Leave it to me!"`;
   `The Kid laughed. It seemed he was over the events from the day before. `;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T6A051)`"Hey, let me help!"`;
   `An excited Coco raised her hand, volunteering.`;
   Pipi(PIPI_04)`"Bow-wow!"`;
   Coco(T6A052)`"I think Pipi wants to help too!"`;
   Takeshi`"Great! Alright, let's go and get the supplies."`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU15ADS`, name2: `SO11ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   You(T6A053)`"Sora, do we still have time?"`;
   `You asked Sora this in a small voice.`;
   Sora(T6A054)`"I am sorry. I am not able to run an accurate simulation..."`;
   Sora(T6A055)`"There may not be much time, but we will be safe until 2 p.m. That I can guarantee."`;
   `Sora replied casually.`;

});
fgload({ id: 1, name: `YU01ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   You(T6A056)`"Alright..."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `You nodded and looked up.`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU16ADM`, name2: `KA12ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T6A057)`"Kid, are you ready? Let's grab all the drinks we can carry."`;
   Kid(T6A058)`"Okay, let's go."`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU15ADM`, name2: `KA11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T6A059)`"Oh, that's right!"`;
   `You slammed her fist into her hand excitedly and looked about the room.`;

});
fgload({ id: 1, name: `YU02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T6A060)`"What about Tsugumi?" `;

});
fgload({ id: 1, name: `YU07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T6A061)`"Tsugumi? H-huh...?"`;
   You(T6A062)`"She's not here..."`;

});
fgload({ id: 2, name: `KA06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"What!?"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `I frantically surveyed the room as well, but Tsugumi was nowhere in sight.`;
   Takeshi`"Where the heck did she go? And when'd she leave?"`;

});
multifgload2({ id1: 1, id2: 2, name1: `SO09ADM`, name2: `YU11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T6A063)`"I believe Tsugumi slipped out of here just a short while ago."`;
   Sora(T6A064)`"She seems to have left for the second floor..."`;
   Takeshi`"........."`;

});
fgload({ id: 2, name: `YU05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(T6A065)`"There's nothing we can do."`;

});
fgload({ id: 2, name: `YU01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(T6A066)`"She'll be back soon, right Takeshi?"`;
   Takeshi`"Aah, yeah..."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6A067)`"Okay everyone, let's get ready to party!"`;

});
removeFG({ id: 1, useAnim: true });
setFGRenderOrder(1, 4, 2);
multifgload3({ name1: `SO02ADS`, name2: `CO02ADS`, name3: `KA02ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   Coco(T6A068)`"Okay!"`;
   Kid(T6A069)`"Alright!"`;
   Sora(T6A070)`"Yes!"`;
   Pipi(PIPI_01)`"Woof!"`;
   Takeshi`"Y-yeah!"`;
   Coco(T6A071)`"Let's party! Party!"`;
   Pipi(PIPI_04)`"Bow-wow!"`;
   `I had only thrown out the idea as a way to lighten the mood...`;
   `And before I knew it, we had ourselves a full-blown party in the making.`;
   `...Well, whatever.`;
   `It was better than having everyone moping around.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
setFGRenderOrder(4, 2, 1);
bgload({ name: `BG25B3`, transition: 20 });
showTextbox();
text(() => {
   `Soon, Coco, Pipi, and I left to get food. We took the emergency stairs.`;

});
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   Coco(T6A072)`"Laaaa,la la, la la la la."`;
   Coco(T6A073)`"Fa la la la la, la la la la."`;
   Coco(T6A074)`"Fa la la fa la la."`;
   Coco(T6A075)`"LA LA LA!" `;
   Pipi(PIPI_01)`"Woof!"`;
   `As we climbed the stairs, Coco sang some crazy song.`;
   Takeshi`"You seem like you're in a good mood, Coco."`;

});
fgload({ id: 1, name: `CO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T6A076)`"Well, you know, I just get excited sometimes..."`;

});
fgload({ id: 1, name: `CO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T6A077)`"Looks like we've come to the climax!"`;

});
fgload({ id: 1, name: `CO04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T6A078)`"The damsel in distress is in a pinch and in waltzes our dashing hero!"`;

});
fgload({ id: 1, name: `CO14ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T6A079)`"Young lady, are you alright? Are you not injured?"`;

});
fgload({ id: 1, name: `CO18ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T6A080)`"And there is our masked villain. I can't forgive you this, you evil scoundrel!"`;
   Coco(T6A081)`"Using my neutrino energy power...I'll kill you! Ayah!"`;

});
fgload({ id: 1, name: `CO16ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T6A082)`"Oh I can pretend can't I?"`;
   Takeshi`"........."`;

});
fgload({ id: 1, name: `CO07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T6A083)`"Huh, Takepyon? Are you fed up with me?"`;
   Takeshi`"N-no..."`;

});
fgload({ id: 1, name: `CO05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T6A084)`"You think I'm just a silly girl, don't you? Ah! So sad! But you want to see what kind of parents could have raised me."`;
   Takeshi`"No, no. It's not that...Not at all!"`;
   `I mussed up her hair affectionately.`;

});
fgload({ id: 1, name: `CO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T6A085)`"Heh, heh, he..."`;

});
fgload({ id: 1, name: `CO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T6A086)`"If I were in a pinch like that, I'm sure someone would come to my rescue!"`;
   Coco(T6A087)`"I just can't help but think of how wonderful that would be..."`;

});
fgload({ id: 1, name: `CO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T6A088)`"You know? What's wrong with dreaming like that?"`;
   Takeshi`"Yeah, you're right."`;
   Takeshi`"You know...to tell you the truth, I'm thinking the same way."`;
   Takeshi`"I think that someone might come to rescue us!"`;
   Takeshi`"I don't know about the neutrino stuff though."`;

});
fgload({ id: 1, name: `CO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T6A089)`"Yeah yeah! You're right!"`;
   Pipi(PIPI_04)`"Bow-wow!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `We wanted to believe that a hero was on the way...`;
   `...and that went for Coco, Pipi and me, too.`;

});
bgload({ name: `BG25A3`, transition: 20 });
showTextbox();
text(() => {
   `We reached the second floor.`;
   `We turned down the corridor and entered the souvenir shop.`;

});
bgload({ name: `BG06A1`, transition: 20 });
showTextbox();
text(() => {
   `Someone had beaten us there.`;
   Coco(T6A090)`"Hey, is that you? Tsugumi?"`;

});
if (l_tsugumi_flag == 0) goto(lbl_00000a30);
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6A091)`"Hi..."`;
   `I was shocked to see her.`;
   `I totally blanked and went speechless.`;
   Tsugumi(T6A092)`"Is there a reason I shouldn't be here?"`;
   `Tsugumi spit out her words coldly...`;
   `It was typical Tsugumi.`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU17ADM`, name2: `CO13ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T6A093)`"No, not at all..."`;

});
fgload({ id: 2, name: `CO12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T6A094)`"Tsugumi, how about you help us out?"`;
   Tsugumi`"........."`;

});
fgload({ id: 1, name: `TU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6A095)`"Well, alright. I don't suppose I really have a choice."`;
   `Tsugumi nodded reluctantly.`;
   Tsugumi(T6A096)`"So what should I do, Coco?"`;

});
fgload({ id: 2, name: `CO11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T6A097)`"Well...let's see..."`;
   Takeshi`"........."`;

});
fgload({ id: 1, name: `TU08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi glanced at me...`;

});
fgload({ id: 1, name: `TU17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   `She didn't say anything and looked away quickly.`;
   `Her eyes seemed dead.`;
   `Thinking about it made me sad.`;

});
goto(lbl_00000a75);
let lbl_00000a30;
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6A098)`"You're taking too long..."`;
   `Tsugumi looked a little miffed.`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6A099)`"Well, what is it you want me to carry?"`;
   Takeshi`"........."`;

});
fgload({ id: 1, name: `TU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6A100)`"What is it, Takeshi? You look like a pigeon caught in a shotgun blast."`;
   Takeshi`"Oh, it's nothing. Nothing."`;
   `I was surprised she even said anything to me.`;
   Takeshi`"Okay, let's get started!"`;

});
let lbl_00000a75;
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
stopBGM();
bgload({ name: `IMG01B`, transition: 20 });
playBGM({ num: 1, volume: 100 });
hideTextbox();
NVL_Mode();
clock(`11:43`);
showTextbox();
text(() => {
   `One hour later—${wait(30)}`;
   `We began our party in an elevated part of the rest area.${wait(30)}`;
   `Even without alcohol, the party was lively.${wait(30)}`;
   `The Kid and I distributed the snacks and drinks to everyone.${wait(30)}`;
   `It was then that You volunteered to provide some entertainment.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `First she performed an impersonation of a strange old archaeologist, who had a talent for cracking a whip..${wait(30)}`;
   `Then Coco came out in a makeshift sumo outfit and stomped her feet on the stage...${wait(30)}`;
   `Sora kept busy filling the room with hologram projections of rainbows.${wait(30)}`;
   `The rainbow-colored bubbles that floated from the water surface through the air were particularly pretty.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `After that Tsugumi joined us...${wait(30)}`;
   `She added a little magic to the show as she dropped her hamster in her skirt pocket only to have it reappear in her breast pocket.${wait(30)}`;
   `That really impressed the crowd. ${wait(30)}`;
   `Although I knew about her hamster, Chami, many didn't even know Tsugumi kept a pet.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Then Kid and I performed a comedy skit.${wait(30)}`;
   `We pulled out one-liners and impromptu gags which got huge laughter from everyone.`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
ADV_Mode();
bgload({ name: `BG21B1`, transition: 20 });
clock(`12:55`);
fgload({ id: 1, name: `KA02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T6A101)`"Thank you! Thank you very much!"`;
   Takeshi`"Thanks!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Kid and I exited the stage to thunderous applause.`;

});
multifgload2({ id1: 1, id2: 2, name1: `CO09ADM`, name2: `YU09ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T6A102)`"Ha ha ha ha ha! That was great!"`;
   You(T6A103)`"That was absolutely wonderful!"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SO08ADM`, name2: `TU07ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6A104)`"Better than I expected..."`;
   Sora(T6A105)`"Those two were perfect together."`;
   Takeshi`"Thank you, thank you..."`;
   Kid(T6A106)`"Thank you everyone..."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Actually, I was surprised too that you poked fun at yourself using the truth about you losing your memory as a gag." `;

});
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T6A107)`"Well, that's just how the skit flowed. It fit perfectly into our act."`;
   Takeshi`"Yeah, I guess you're right..."`;
   Takeshi`"Well, it looks like I've got nothing more to teach you! So, go ahead and follow in my comedy footsteps!"`;

});
fgload({ id: 1, name: `KA07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T6A108)`"Ah, sorry. I've already forgot everything you taught me."`;
   Takeshi`"Well, that's too bad...you should at least take notes. Notes!"`;
   Takeshi`"But never fear! I ain't taught you nothin' yet!"`;

});
fgload({ id: 1, name: `KA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T6A109)`"Is that true?"`;
   `And that was about it...`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `The party gradually wound down.`;

});
bgload({ name: `BG07B1`, transition: 20 });
showTextbox();
text(() => {
   `I then took a trip back to the chicken sandwich stand and brought sandwiches back for everyone.`;

});
bgload({ name: `BG21B1`, transition: 20 });
multifgload3({ name1: `YU16ADS`, name2: `CO02ADS`, name3: `KA12ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   `We all munched on hot sandwiches.`;
   `(These...are so good!)`;
   `It wasn't exactly the ideal breakfast food.`;
   `Everyone happily downed their food.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   `Food...`;
   `If LeMU collapsed soon...`;
   `I thought that could be everyone's last meal...`;
   `Everyone understood that, yet said nothing.`;
   `No...`;
   `Everyone understood, which is why they said nothing.`;
   `...............`;
   `.........`;

});
hideTextbox();
stopBGM();
delay({ interval: 60 });
if (l_tsugumi_flag == 0) goto(lbl_00000d5e);
playBGM({ num: 7, volume: 100 });
showTextbox();
text(() => {
   Takeshi`"Tsugumi..."`;
   `After finishing my sandwich, I got up the nerve to speak to Tsugumi.`;

});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6A110)`"What?"`;
   Tsugumi(T6A111)`"What do you want, Takeshi...?"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi crouched on the stage.`;
   `I crouched beside her, and looked to see what she was doing.`;

});
fgload({ id: 1, name: `TU15ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `There, Tsugumi was drawing something on the stage with a thick marker.`;
   `As usual, Tsugumi didn't look at me.`;
   Takeshi`"Ah, well...it's..."`;
   `She stopped scribbling for a moment. I decided to come out and say what I had to say.`;
   Takeshi`"About yesterday..."`;
   Takeshi`"I'm sorry. I didn't know what to say...but..."`;

});
fgload({ id: 1, name: `TU17ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6A112)`"About what?"`;
   Tsugumi(T6A113)`"I don't really know what you're talking about."`;
   `Tsugumi was curt in her response.`;
   Takeshi`"Tsu-Tsugumi!"`;
   Takeshi`"You're joking, right?"`;
   Takeshi`"There's no way you could've forgotten."`;
   Takeshi`"I know I haven't."`;
   Takeshi`"That's not just something you can...just simply forget about."`;
   Takeshi`"I realize it's not something you can talk about casually, but..."`;

});
fgload({ id: 1, name: `TU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   `Her eyes wandered around the room for a moment.`;
   `Then, she looked down again at the scribbles she had been drawing.`;

});
fgload({ id: 1, name: `TU17ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6A114)`"I don't really care."`;
   Tsugumi(T6A115)`"I don't care about what happened yesterday..."`;

});
fgload({ id: 1, name: `TU15ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6A116)`"So, would you please stop talking about it?"`;
   Tsugumi(T6A117)`"Don't say anything."`;
   Takeshi`"........."`;
   `Tsugumi was back to her drawing on the stage floor.`;
   Tsugumi(T6A118)`"I..."`;

});
fgload({ id: 1, name: `TU17ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6A119)`"I'm trying to think of a way to get out of here, too."`;
   Tsugumi(T6A120)`"So don't...bother me."`;
   Takeshi`"........."`;
   `Tsugumi refused to look at me as she spoke.`;
   `After that I felt a little gun-shy.`;
   Takeshi`"Okaaaay, then."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I stood up and left her there.`;
   `I walked over toward where Sora was.`;
   Takeshi`"Hey, Sora."`;

});
fgload({ id: 1, name: `SO02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6A121)`"Hello. What may I help you with, Takeshi?"`;
   `Sora smiled softly when she looked at me.`;
   Takeshi`"Nothing much...I just have a lot on my mind."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6A122)`"Right now LeMMIH is handling operations and will alert me if any troubles arise."`;
   Sora(T6A123)`"LeMMIH is also currently continuing investigation of means of escape as well as communication with the outside."`;
   Sora(T6A124)`"Please do not worry."`;
   Takeshi`"Thanks, Sora.... That helps."`;
   Takeshi`"Can I ask what time it is? I need to set it on my..."`;
   Sora(T6A125)`"No problem. The current time is——."`;
   Takeshi`"Hold on for a second."`;
   `I took my PDA from my pocket.`;

});
goto(lbl_00000e0d);
let lbl_00000d5e;
playBGM({ num: 8, volume: 100 });
showTextbox();
text(() => {
   Takeshi`"Sora..."`;
   `I made up my mind to speak to her about the important things I had on my mind...right after finishing my sandwich.`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6A126)`"Yes, what is it?"`;
   `With a slight smile, Sora gazed at me.`;
   `Her eyes were like a clear, cloudless sky.`;
   Takeshi`"Ah, well, it's just that..."`;
   `When I saw her smile, I wavered slightly. Yet, I continued to speak.`;
   Takeshi`"Um, about yesterday..."`;
   Takeshi`"I'm sorry. I don't know what to say but..."`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6A127)`"What is it?"`;
   Sora(T6A128)`"I am not quite sure what you are talking about."`;
   `Sora spoke brusquely.`;
   Takeshi`"S-Sora!"`;
   Takeshi`"You're lying, right?"`;
   Takeshi`"You haven't forgotten, right?"`;
   Takeshi`"I know I haven't forgotten."`;
   Takeshi`"That's not just something you...just forget about."`;
   Takeshi`"I realize it's not something you can casually address, but..."`;

});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6A129)`"Ha ha ha..."`;
   `Sora gave me a bitter smile.`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6A130)`"I'm sorry, Takeshi. I really do not remember the events of last night."`;
   Takeshi`"What?"`;
   Sora(T6A131)`"I...do not remember."`;
   Sora(T6A132)`I am sorry.`;
   Sora(T6A133)`"I forgot them. There is a gap in my memory of a few hours."`;
   Takeshi`"How...why?"`;
   Takeshi`"You're lying...you've got to be..."`;
   `I didn't want to believe it.`;

});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6A134)`"Listen, Takeshi...I..."`;
   `She laughed again and gazed out at the others around the stage.`;
   Sora(T6A135)`"I love this."`;
   Sora(T6A136)`"Seeing the people around me laugh...I love that."`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6A137)`"Right now LeMMIH is handling operations and will alert me if any troubles arise."`;
   Sora(T6A138)`"I have been hoping that no trouble befalls us..."`;
   Sora(T6A139)`"It is my duty to watch over you all."`;
   Sora(T6A140)`"When people return a smile, it warms my heart..."`;
   Sora(T6A141)`"And for that very reason..."`;
   Sora(T6A142)`"That is why I am always able to laugh."`;
   Sora(T6A143)`"That was how my creator made me..."`;
   Takeshi`"........."`;
   `I didn't want to talk about herself as something 'made,' or how she was 'manufactured.' `;

});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6A144)`"Takeshi, please do not look at me as if you are going to cry."`;
   Takeshi`"Yeah, right...fine."`;
   `I wished that I hadn't gone overboard last night.`;
   `But I was wishing for the impossible...`;

});
let lbl_00000e0d;
showTextbox();
text(() => {
   `...what I did.`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SO15ADM`, name2: `TU13ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6A145)`"Excuse me, Sora."`;
   Sora(T6A146)`"Ah, yes. Tsugumi.... What is on your mind?"`;
   `Tsugumi was suddenly standing right between Sora and I.`;
   `Tsugumi let out a nervous laugh.`;

});
fgload({ id: 2, name: `TU12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6A147)`"There's something I want to tell you, in private..."`;

});
fgload({ id: 1, name: `SO17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(T6A148)`"In private?"`;
   Tsugumi(T6A149)`"Yes...Please."`;

});
fgload({ id: 2, name: `TU11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6A150)`"It's about escaping this place. I have a proposal for you."`;

});
fgload({ id: 1, name: `SO15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(T6A151)`"Is that so? What is it? You know of a way?"`;
   Tsugumi(T6A152)`"Yes. I might be able to help in some way."`;
   Tsugumi(T6A153)`"I want to hear from you whether or not my idea is feasible."`;
   Takeshi`"What? Wait a second, Tsugumi. Sora and I..."`;

});
fgload({ id: 2, name: `TU08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6A154)`"Shut up, Takeshi."`;
   `Tsugumi held out her hand as if stopping my mouth in one motion.`;
   Takeshi`"........."`;
   Tsugumi(T6A155)`"I want to speak to Sora. Alone."`;

});
fgload({ id: 2, name: `TU12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6A156)`"You don't mind, do you Sora?"`;
   Sora(T6A157)`"No. Let's go talk in the Central Control Room."`;
   Tsugumi(T6A158)`"Right, let's go."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `The two got down from the stage and set off with very serious looks on their faces.`;
   Takeshi`"Wait! Hold up you two! Don't go starting something without telling everyone!"`;
   Takeshi`"Why can't you just talk here!?"`;

});
fgload({ id: 1, name: `TU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6A159)`"Takeshi...!"`;
   `Tsugumi turned around and shot a sharp glare at me.`;
   `Her eyes were ice.`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6A160)`"I told you to shut up, didn't I?"`;
   Takeshi`"........."`;

});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Sora and Tsugumi turned their backs to me and left together.`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   `Things around me got quiet.`;
   Takeshi`"What the hell."`;
   Takeshi`"What the hell is going on here...?"`;
   `I felt alone. Balling up the sandwich wrapper, I threw it as hard as I could.`;

});
playSFX({ name: `SE02_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Splash.`;
   `The wrapper fell in the water, creating a series of ripples.`;

});
hideTextbox();
playBGM({ num: 19, volume: 100 });
setSceneTitle({ index: 39 });
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6A161)`"Takeshi...what do you think you're doing?"`;
   You(T6A162)`"You shouldn't litter, you know?"`;
   `You picked the wrapper out of the water and twisted it around her finger.`;
   Takeshi`"Wh-who cares? It doesn't matter at this point anyway..."`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6A163)`"Oh, not that again. Quit your sulking, mister!"`;
   Takeshi`"I'm not sulking."`;
   You(T6A164)`"If you saaay so..."`;
   `You shrugged and let out a deep sigh.`;

});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6A165)`"*siiiigggggghhhhhh*"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   You(T6A166)`"Alright!"`;
   `I glanced over to the corner of the room and saw Coco and Kid climbing a statue.`;
   `Looking over at them...`;
   `You and I sat down on the circular stage.`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6A167)`"The reason is totally obvious."`;
   You(T6A168)`"You don't have to say anything."`;
   You(T6A169)`"Even if you look fine, I know it's just for show."`;
   You(T6A170)`"I know you're depressed, Takeshi."`;
   Takeshi`"W-well because! I mean, i-it isn't like that at all...!"`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6A171)`"Because? What's this 'because'?"`;
   You(T6A172)`"Obviously you're hiding something. You said 'because.'"`;
   You(T6A173)`"That's a little strange, don't you think?"`;

});
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6A174)`"Come on, try to prove me wrong."`;
   Takeshi`"........."`;
   `I was pretending I was fine.`;
   `Even I knew the reason was obvious.`;
   `I was worried about 'her'...`;

});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6A175)`"*siiiigggggghhhhhh*"`;
   `You let out another fake sigh again.`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6A176)`"Well, if you're not going to tell me, do you mind if I ask a question?"`;
   Takeshi`"Go ahead..."`;
   Takeshi`"As you wish..."`;
   Takeshi`"*sigh*"`;
   `This time I was the one to sigh.`;

});
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6A177)`"Okay! Here I go!"`;
   Takeshi`"Well, hurry up already."`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6A178)`"What are you so angry about?"`;
   Takeshi`"I'm not angry about anything."`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T6A179)`"Okay, okay..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `The Kid and Pipi were playing sumo. Coco was the referee.`;
   `I watching them...`;
   `...as You spoke.`;

});
if (l_sora_flag == 0) goto(lbl_00001090);
showTextbox();
text(() => {
   You(T6A180)`"Hey, Takeshi..."`;
   You(T6A181)`"Do you know about the malfunction in Sora's thought process?"`;
   Takeshi`"I don't know."`;
   Takeshi`"No, wait, maybe I do know."`;
   You(T6A182)`"Well, which one is it?"`;
   Takeshi`"I can't say either way."`;
   You(T6A183)`"Ah, so you're one of those indecisive types, huh?"`;
   Takeshi`"Alright, alright..."`;
   Takeshi`"But I can't talk about it."`;
   Takeshi`"It's a secret, between Sora and me."`;
   `It was likely that Sora was jealous of Tsugumi and me.`;
   `But I was pretty sure A.I. didn't understand emotions like jealousy.`;
   `Always bothered by emotions that she didn't understand. Sora...`;
   `Asking me to explain them to her. Sora...`;
   `Sharp twinges nagged at my heart.`;
   You(T6A184)`"Oh really? I see. It's a secret, huh?"`;
   Takeshi`"........."`;
   You(T6A185)`"By the way..."`;
   You(T6A186)`"When I was searching through LeMMIH I found this out... "`;
   You(T6A187)`"One feature of Sora's system is the ability to engage in self-study, but she is unable to manipulate memories."`;
   Takeshi`"What?"`;
   Takeshi`"What did you just say?"`;
   You(T6A188)`"She is able to - by herself - store information she accumulates through self-study."`;
   Takeshi`"No, the part after that..."`;
   You(T6A189)`"She isn't able to manipulate or delete memories...by herself. The only thing that can change is the priority she puts on information in her database."`;
   You(T6A190)`"The only way to perform a system recovery is when the system crashes. As a last resort..."`;
   You(T6A191)`"And only humans approved by the system can restart her."`;
   Takeshi`"........."`;
   `Meaning that she couldn't have undergone a system recovery last night.`;
   `Sora...`;
   `She told me the truth.`;
   `But at the same time she lied.`;
   `A computer program that could only accept 'yes' or 'no,' 'ones' and 'zeros,' had tried desperately to accept a contradiction.`;
   You(T6A192)`"In a sense, A.I. is similar to people."`;
   You(T6A193)`"It can pretend that it didn't notice something, but it's not easy for it to forget things..."`;
   Takeshi`"Why are you telling me this?"`;
   You(T6A194)`"I wonder...?"`;
   `You said this sarcastically, playing dumb.`;
   `Then she laughed mischievously.`;
   Takeshi`"Listen...You..."`;
   You(T6A195)`"Whaaat?"`;
   Takeshi`"Even if Sora's memory was being stored somewhere above us, do you think she really wants to be rescued with the rest of us?"`;
   You(T6A196)`"What do you think Takeshi?"`;
   Takeshi`"Of course I...I want her to be saved along with everyone."`;
   Takeshi`"LeMU is Sora's eyes, her body. Even if her mind is in another section, if this part sinks, part of her will go down with it."`;
   Takeshi`"And if that's the case, no matter what we do, there's no way to rescue her from here completely..."`;
   You(T6A197)`"Yeah. I really hope that we can all escape together."`;
   Takeshi`"It sure would be nice for that wish to come true..."`;
   You(T6A198)`"Yeah...it would."`;
   `Coco and Pipi...`;
   `I could hear splashes as they ran.`;
   You(T6A199)`"Actually, a close friend of mine told me this once, but..."`;
   You(T6A200)`"Believe it, desire it and it can come true..."`;
   Takeshi`"Believe it, desire it, and it can..."`;
   Takeshi`"What is that, something you read in a book?"`;
   You(T6A201)`"Well...not exactly."`;
   You(T6A202)`"It's a sort of phenomenon. I don't know if it's true or not. It's just a kind of hypothesis."`;
   Takeshi`"Hypothesis?"`;
   You(T6A203)`"Yeah."`;
   You(T6A204)`"It's called..."`;
   You(T6A205)`"Cure."`;
   Takeshi`"Cure?"`;
   `Cure...`;
   `I pondered the word for a moment.`;

});
goto(lbl_00001095);
let lbl_00001090;
showTextbox();
text(() => {
   You(T6A206)`"Hey...Takeshi..."`;
   You(T6A207)`"About Tsugumi's injury..."`;
   You(T6A208)`"It is healing really quickly..."`;
   You(T6A209)`"She didn't even need stitches, you know."`;
   Takeshi`"........."`;
   You(T6A210)`"Tsugumi seems like she leads a normal life, just like you and me..."`;
   You(T6A211)`"And I try not to worry too much about her and just accept things as I see them, but..."`;
   You(T6A212)`"But that just isn't normal."`;
   `She looked down at her feet when she spoke.`;
   You(T6A213)`"Have you heard about Tsugumi's condition?"`;
   Takeshi`"No I haven't..."`;
   Takeshi`"Wait, I might have."`;
   You(T6A214)`"You can really be vague, sometimes, you know?"`;
   You(T6A215)`"Which one is it?"`;
   Takeshi`"I'm sorry...I forgot."`;
   You(T6A216)`"You forgot!?"`;
   Takeshi`"........."`;
   You(T6A217)`"So you're one of those indecisive type of guys, hmmm?"`;
   Takeshi`"........."`;
   You(T6A218)`"Come on! Say something..."`;
   `I was silent.`;
   `I figured it was something just between Tsugumi and me.`;
   `And...`;
   `I didn't really know enough about her condition to say 'yeah, I know something.'`;
   `Plus, I was still having a difficult time believing the whole thing.`;
   `Even when I saw it with my own eyes, part of my brain refused to accept it.`;
   You(T6A219)`"Let's just drop it..."`;
   You(T6A220)`"Ha ha. You really forgot didn't you?"`;
   Takeshi`"........."`;
   You(T6A221)`"Well I guess there's nothing we can do about it."`;
   Takeshi`"........."`;
   Takeshi`"How come you asked me about it?"`;
   You(T6A222)`"I wonder why?"`;
   `You said this sarcastically, playing dumb.`;
   `And then a serious look formed on her face.`;
   You(T6A223)`"The truth is..."`;
   You(T6A224)`"When I was looking at LeMMIH, I came upon some interesting information in the medical database."`;
   You(T6A225)`"It was from the Leiblich Pharmaceutical database..."`;
   Takeshi`"Leiblich Pharmaceutical?"`;
   You`"........."`;
   Takeshi`"Database?"`;
   You(T6A226)`"I think they use it during treatment in the infirmary, but..."`;
   `Coco and Pipi...`;
   `I could hear the splashes from their running echo.`;
   You(T6A227)`"When I scoured the database...I couldn't believe what I read."`;
   You(T6A228)`"A body that doesn't grow old..."`;
   You(T6A229)`"A mutated body type because of a virus..."`;
   You(T6A230)`"It shakes the foundations of modern science..."`;
   Takeshi`"........."`;
   You(T6A231)`"I might have found something related to Tsugumi's condition."`;
   You(T6A232)`"In the database I searched through a number of old medical records."`;
   You(T6A233)`"I found one that mirrors Tsugumi's condition."`;
   You(T6A234)`"Generally speaking, the number of cases of victims of this virus known is very small.."`;
   Takeshi`"What...?"`;
   Takeshi`"Hey hey! Hold on a sec..."`;
   Takeshi`"How come LeMU has that kind of information?"`;
   You(T6A235)`"I don't know! Why ask me?"`;
   You(T6A236)`"All I do know is that data and the name of the virus."`;
   Takeshi`"The name of the...virus?"`;
   You(T6A237)`"Yeah, the name."`;
   You(T6A238)`"It's called..."`;
   You(T6A239)`"Cure."`;
   Takeshi`"Cure?"`;
   `Cure.`;
   `I pondered the name for a moment.`;

});
let lbl_00001095;
hideTextbox();
playSFX({ name: `SE01_00`, a1: 0, volume: 90 });
stopBGM();
showTextbox();
text(() => {
   `Just then...`;
   Kid(T6A240)`"Everyone! We've got trouble!"`;

});
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Kid came running into the room yelling.`;

});
hideTextbox();
fgload({ id: 1, name: `KA04ADM`, x: 320, useAnim: true });
stopSFX()
showTextbox();
text(() => {
   Takeshi`"Kid? Where the heck did you just go?"`;
   You(T6A241)`"Problem? What kind of problem?"`;

});
hideTextbox();
playBGM({ num: 12, volume: 100 });
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU06ADM`, name2: `KA08ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Kid(T6A242)`"C-come on! We've gotta go and stop it!"`;
   `Kid was breathing heavily, yelling between breaths.`;
   Takeshi`"Stop what? Hey, explain what's going on."`;
   Coco(T6A243)`"W-what happened?"`;
   Pipi(PIPI_00)`"Woof!"`;
   `Coco and Pipi came over to see what all the commotion was about.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload3({ name1: `YU18ADS`, name2: `CO06ADS`, name3: `KA08ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   Kid(T6A244)`"The Central Control Room...!"`;
   Kid(T6A245)`"Sora and Tsugumi were gone for such a long time, I..."`;
   Kid(T6A246)`"I went to go find them..."`;
   Kid(T6A247)`"And they were in a brutal argument!!"`;
   Takeshi`"!!"`;
   Kid(T6A248)`"I just couldn't watch, so I..."`;
   You(T6A249)`"This is bad news...at a time like this."`;
   Coco(T6A250)`"L-let's go! We've got to stop them!"`;
   Takeshi`"Y-yeah! We'd better hurry!"`;
   Pipi(PIPI_04)`"Bow wow!"`;

});
hideTextbox();
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
bgload({ name: `BG25B3`, transition: 20 });
clock(`13:27`);
showTextbox();
text(() => {
   `The Kid, Coco, Pipi, You and myself...`;
   `We sped along the wet floor to the Central Control Room.`;

});
bgload({ name: `BG15B1`, transition: 20 });
showTextbox();
text(() => {
   You(T6A251)`"Sora!"`;
   Coco(T6A252)`"Tsugumi!"`;
   `I pushed the button to open the door.`;

});
removeBG({ mode: BLACK, transition: 2 });
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   Tsugumi(T6A253)`".........!"`;
   Sora(T6A254)`".........!"`;

});
hideTextbox();
stopBGM();
playBGM({ num: 15, volume: 100 });
bgload({ name: `BG16A1`, transition: 10 });
showTextbox();
text(() => {
   `We burst into the room...`;

});
multifgload2({ id1: 1, id2: 2, name1: `TU18ADM`, name2: `SO14ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   `...We found Tsugumi and Sora screaming at each other.`;
   `Neither one would give an inch. They just glared at one another.`;
   `It looked as though they had been fighting for several minutes. The room was filled with tension.`;
   Sora(T6A255)`"Beneath us?"`;
   Sora(T6A256)`"There aren't any floors underneath Dritte stock. We can't go down any further."`;

});
fgload({ id: 1, name: `TU05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6A257)`"Liar..."`;
   Tsugumi(T6A258)`"You're lying..."`;
   Tsugumi(T6A259)`"I saw down from Qualle, and borrowing your eyes, I was able to access LeMMIH, it took a while though..."`;

});
fgload({ id: 1, name: `TU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6A260)`"I finally got proof. There is more to LeMU below us."`;
   Tsugumi(T6A261)`"Um, there's another installation other than LeMU...and it's right below us. Really far down."`;
   Tsugumi(T6A262)`"I'm right, aren't I?"`;

});
fgload({ id: 2, name: `SO13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora`".........."`;

});
fgload({ id: 2, name: `SO14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T6A263)`"I can't answer that question..."`;

});
fgload({ id: 1, name: `TU17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6A264)`"Don't tell me that, just answer me!"`;
   Tsugumi(T6A265)`"I did a Turing test, and I found out that you really are A.I."`;

});
fgload({ id: 1, name: `TU18ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6A266)`"As long as you aren't blocked by a protect routine, you have to answer humans honestly."`;
   Tsugumi(T6A267)`"That's part of your functioning."`;

});
fgload({ id: 2, name: `SO13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora`"........"`;
   Tsugumi(T6A268)`"It isn't possible to get there using normal elevators."`;
   Tsugumi(T6A269)`"The only way there is through a locked door."`;

});
fgload({ id: 1, name: `TU17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6A270)`"That room..."`;
   Tsugumi(T6A271)`"HIMMEL...That's your name, isn't it Sora?"`;
   Sora`"........."`;

});
fgload({ id: 1, name: `TU05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6A272)`"We aren't getting anywhere just sitting around."`;

});
fgload({ id: 1, name: `TU18ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6A273)`"We're fighting against time!"`;
   Tsugumi(T6A274)`"The truth is behind that door."`;
   Tsugumi(T6A275)`"Tell us the password to that door...the one leading to HIMMEL, Sora!"`;
   Sora(T6A276)`"It is true..."`;
   Sora(T6A277)`"That HIMMEL...in German means sky, or 'Sora' in Japanese..."`;
   Sora(T6A278)`"But Tsugumi, I..."`;
   Sora(T6A279)`"I don't have the security access to open that door."`;
   Sora(T6A280)`"I'm sorry..."`;

});
fgload({ id: 1, name: `TU04ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6A281)`"That's a lie!"`;

});
fgload({ id: 2, name: `SO14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T6A282)`"It is not!"`;

});
fgload({ id: 1, name: `TU18ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6A283)`"Some A.I. you are! You think I'm stupid? You think you can fool me?"`;
   Sora(T6A284)`"It is not a lie! I am telling the truth!!"`;
   Sora(T6A285)`"I don't have any information of what's behind that door..."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `CO04ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T6A286)`"Stop it!!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Coco jumped between them.`;

});
fgload({ id: 1, name: `CO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T6A287)`"Stop it, both of you!"`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU06ADM`, name2: `SO06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   `Both of them flinched for a moment, but continued to look bitter.`;

});
multifgload2({ id1: 1, id2: 2, name1: `TU05ADM`, name2: `SO17ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T6A288)`"Coco..."`;
   Tsugumi(T6A289)`"Coco..."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `CO04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T6A290)`"Stop it...okay? Please!"`;

});
removeFG({ id: 1, useAnim: true });
multifgload3({ name1: `TU05ADS`, name2: `CO05ADS`, name3: `SO13ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   Sora(T6A291)`"Coco, this is between Tsugumi and me."`;
   Tsugumi(T6A292)`"Get back Coco...or I'm really going to get mad."`;
   Coco(T6A293)`"Why?"`;
   Coco(T6A294)`"Tsugumi, Sora, stop it!"`;
   Coco(T6A295)`"Why are you arguing?"`;
   Sora(T6A296)`"This isn't an argument."`;
   Tsugumi(T6A297)`"We aren't."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
fgload({ id: 1, name: `CO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T6A298)`"You're lying...it's a lie...!"`;

});
fgload({ id: 1, name: `CO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T6A299)`"We shouldn't be fighting...!"`;
   `Large tears welled and flowed from Coco's eyes.`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU03ADM`, name2: `SO17ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora`"........."`;
   Tsugumi`"........."`;
   `The tears had a freezing effect on Sora and Tsugumi.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `CO10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T6A300)`"Agh..."`;
   Coco(T6A301)`"Aaaghh...."`;
   Coco(T6A302)`"Waagghh...."`;

});
hideTextbox();
playSFX({ name: `SE01_05`, a1: 0, volume: 95 });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Coco started gasping.`;
   `She suddenly ran to the corner of the console.`;

});
playSFX({ name: `SE05_10`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `Or...rather fell there.`;
   `She leaned against the console, barely able to support herself.`;
   `Coco's body was shaking slightly.`;
   `Her lips trembled.`;
   `I could see that her lips had gone pale quickly.`;
   `It was different than crying... `;
   Takeshi`"Coco..."`;
   Takeshi`"H-hey, what...?"`;
   Takeshi`"What's up with you all of a sudden...?"`;

});
removeBG({ mode: RED, transition: 2 });
stopBGM();
showTextbox();
text(() => {
   Coco(T6A303)`"Agh...!!"${noWait}`;

});
bgload_keepFg({ name: `IMG04A`, transition: 10 });
bgload_keepFg({ name: `KURO_BG`, transition: 20 });
showTextbox();
text(() => {
   Append``;

});
showTextbox();
text(() => {
   `Coco's lips were suddenly...stained red.`;
   Kid(T6A304)`"Coco!!"`;
   `The Kid opened his eyes wide, looking shocked.`;

});
hideTextbox();
playBGM({ num: 11, volume: 100 });
bgload({ name: `EV_CO06A`, transition: 20 });
showTextbox();
text(() => {
   Coco(T6A305)`"Ugh...uh...uuugh..."`;
   Coco(T6A306)`"Gah...uuuugh...uuugh..."`;
   Coco(T6A307)`"Nngagh...uuuh...uuugh..."`;
   You(T6A308)`"Coco!"`;
   `Blood was flowing onto the floor of the Control Room.`;
   `It wouldn't stop.`;
   `It kept falling from her mouth.`;
   Tsugumi(T6A309)`"What's happening!?"`;
   Sora(T6A310)`"Coco!"`;
   `Coco shook her head and trembled violently.`;
   `She had her hand to her mouth, desperately trying not to cough.`;
   Sora(T6A311)`"It can't be...!"`;
   Sora(T6A312)`"These...these symptoms are...!"`;
   `Sora looked as if she were about to panic.`;
   Tsugumi(T6A313)`"Symptoms!? Who cares about that!"`;
   `Tsugumi screamed, furious.`;
   Tsugumi(T6A314)`"Can't you tell! If this keeps up, Coco's going to...!!"`;
   Kid(T6A315)`"Coco, hang in there!"`;
   You(T6A316)`"Ta-Takeshi...what are we going to do!?"`;
   Takeshi`"Hang on! Everyone don't panic! You've got to stay calm!!"`;
   `I screamed out in a loud voice to everyone.`;
   Takeshi`"Just calm the heck down, okay!?"`;
   Takeshi`"Oh wait...maybe I need to calm down too..."`;
   Takeshi`"Whew..."`;
   `Everyone took deep breaths trying to settle down.`;
   Takeshi`"Coco, just relax. You're going to be okay..."`;
   Coco(T6A317)`"Ugh..."`;
   Coco(T6A318)`"I'm...Al...right...Take...pyon."`;
   `Steadying her trembling eyes, Coco looked at me firmly.`;
   Takeshi`"Good girl..."`;
   Takeshi`"Now hang onto me, Coco!"`;
   `I turned around and thrust out my back toward her.`;
   Takeshi`"Can you get on?"`;
   Coco(T6A319)`"Ye...yeah."`;
   Pipi(PIPI_06)`"*Whine*"`;
   `Pipi looked up worriedly at Coco.`;
   Takeshi`"We're going to the infirmary on Zweite."`;
   You(T6A320)`"O-okay!"`;
   Pipi(PIPI_04)`"Woof, woof!"`;
   `I realized that I was holding onto Coco.`;

});
removeBG({ mode: BLACK, transition: 2 });
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
bgload({ name: `BG26B1L`, transition: 20 });
removeBG({ mode: BLACK, transition: 2 });
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   `We were rushing up to Zweite stock some 56 feet above us.`;
   `I held Coco on my back, with You and Tsugumi supporting her from the sides.`;
   `Sora went ahead to guide us, and the kid followed a short distance behind.`;

});
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG29A1`, transition: 10 });
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
bgload({ name: `BG28A3L`, transition: 20 });
showTextbox();
text(() => {
   `We emerged at the second floor emergency corridor.`;
   Takeshi`"Which was is it, left or right!?"`;

});
fgload({ id: 1, name: `SO10ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6A321)`"Straight ahead!"`;
   Takeshi`"Okay!"`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6A322)`"Don't run so fast! Stop shaking her so much!"`;
   Takeshi`"I know! Just pipe down, would you?"`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Coco was groaning in pain on my back.`;
   `But I could still make it.`;
   `There was no way I was going to fail.`;
   `I wasn't going to say 'It's no use, we're too late,' and I wasn't going to let anyone else say it either.`;
   `As long as there was some hope left, I wouldn't give up.`;

});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `I took a shortcut to the nearest elevator, and rushed Coco to the infirmary.`;

});
l_choice = 0;
jump(`T_6B`);
