if (l_choice == 1) goto(lbl_0000104c);
setDialogBoxColor(BLUE);
l_b0 = 5;
l_dayA = 2;
l_dayB = 2;
setSceneTitle({ index: 59 });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `Before going for repairs, we had to secure tools.`;
   `When the four of us ascended from Zweite stock we stopped by the warehouse first.`;
   `Fortunately, we found the tools we needed right away.`;
   `Pliers, a spanner, a screwdriver, hammer, a small welding machine...etc., etc...`;
   `We packed all of the tools we imagined we might need into a toolbox and headed for the neutral buoyancy elevator.`;

});
bgload({ name: `BG23A2`, transition: 20 });
playBGM({ num: 3, volume: 100 });
clock(`7:5`);
showTextbox();
text(() => {
   `- The neutral buoyancy elevator 'EI.'`;
   `'EI' meant egg in German.`;
   `It was also a literal take on the egg-shaped elevator that traveled up and down rails into the ocean on the side of LeMU.`;
   `A ballast tank was attached to the floor.`;
   `It would take in or release seawater from the tank as necessary to increase or reduce buoyancy, making the elevator rise or sink.`;

});
bgload({ name: `BG24A3`, transition: 20 });
playSFX({ name: `SE00_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Once we were inside, we sealed the watertight doors on the LeMU side of the elevator.`;
   `All we had to do was release the lock connecting us to LeMU and the 'egg' would sink away.`;

});
playSFX({ name: `SE10_10`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `You pulled the operating lever next to the door.`;
   Kid`"........."`;
   Takeshi`"........."`;
   Sara`"..."`;
   You`"..."`;
   `Nothing happened.`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU07ADM`, name2: `KB05ADM`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2B000)`"What's going on? We're not sinking at all."`;
   You(S2B001)`"No...it doesn't seem like it."`;
   Kid`"Do you think it is because the power is out?"`;

});
fgload({ id: 1, name: `YU05ADM`, x: 176, useAnim: true });
showTextbox();
text(() => {
   You(S2B002)`"No. The EI elevator is a neutral buoyancy elevator so it basically doesn't require outside power."`;
   You(S2B003)`"But it does need power for the intake and release of water for the ballast tank...this is the only time it needs power."`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SA05ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Sara(S2B004)`"But we're in a blackout right now..."`;
   Kid`"...So there's no way to control the ballast valve - is that the problem?"`;
   You(S2B005)`"Yes."`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `KB04ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2B006)`"Oh, great. So that means we can't move this thing at all then!"`;

});
fgload({ id: 1, name: `YU04ADM`, x: 176, useAnim: true });
showTextbox();
text(() => {
   You(S2B007)`"Stupid. That's wrong. And you're supposed to be a college student?"`;

});
fgload({ id: 2, name: `KB03ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2B008)`"Well, excuse me! So put it in terms I can understand."`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SA02ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Sara(S2B009)`"Teacher! I know, I know!"`;

});
fgload({ id: 1, name: `YU02ADM`, x: 176, useAnim: true });
showTextbox();
text(() => {
   You(S2B010)`"Alright Ms. Matsunaga."`;

});
fgload({ id: 2, name: `SA01ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Sara(S2B011)`"In order to use buoyancy to rise or sink, the weight of the elevator must exceed the buoyancy for the object to sink, or vice versa."`;

});
fgload({ id: 1, name: `YU01ADM`, x: 176, useAnim: true });
showTextbox();
text(() => {
   You(S2B012)`"That's correct."`;
   You(S2B013)`"You figured it out too, Kid, right?"`;

});
choice(
   `I got it`,
   `I don't understand`,
);
switch (l_choice) {
   case 0: goto(lbl_0000027d);
   case 1: goto(lbl_000002af);
}
let lbl_0000027d;
showTextbox();
text(() => {
   Kid`"Yeah. You mean Archimedes principle, right?"`;
   Kid`"The buoyancy of a submerged object is equal to the weight of the liquid displaced by the object."`;
   Kid`"Right now, the buoyancy of the elevator is exactly balanced with the elevator's weight."`;
   Kid`"So if we make the elevator heavier, it will outweigh the buoyancy and the elevator will sink..."`;

});
fgload({ id: 1, name: `YU02ADM`, x: 176, useAnim: true });
showTextbox();
text(() => {
   You(S2B014)`"Wow! Good work you two! What brains!"`;
   `You patted our heads as she praised us.`;

});
fgload({ id: 2, name: `SA02ADM`, x: 464, useAnim: true });
goto(lbl_00000342);
let lbl_000002af;
showTextbox();
text(() => {
   Kid`"Sorry...I don't get it at all."`;

});
fgload({ id: 1, name: `YU03ADM`, x: 176, useAnim: true });
showTextbox();
text(() => {
   You(S2B015)`"Well, the Kid's lost his memory so it's to be expected."`;

});
fgload({ id: 1, name: `YU01ADM`, x: 176, useAnim: true });
showTextbox();
text(() => {
   You(S2B016)`"Alright then, Mayo, how about an explanation?"`;

});
fgload({ id: 2, name: `SA02ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Sara(S2B017)`"Okay."`;

});
fgload({ id: 2, name: `SA01ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Sara(S2B018)`"Archimedes principle states that the buoyant force on a submerged object is equal to the weight of the liquid displaced by the object."`;
   Sara(S2B019)`"That means that right now the buoyancy of the elevator is exactly balanced with the elevator's weight."`;
   Sara(S2B020)`"So if we make the elevator heavier, it will outweigh the buoyancy..."`;
   Kid`"And so the elevator will sink, right?"`;

});
fgload({ id: 2, name: `SA02ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Sara(S2B021)`"You got it."`;

});
fgload({ id: 1, name: `YU02ADM`, x: 176, useAnim: true });
showTextbox();
text(() => {
   You(S2B022)`"Wow! Good work! Mayo you're so bright!"`;
   `You patted Sara's head as she praised her.`;

});
goto(lbl_00000342);
let lbl_00000342;
showTextbox();
text(() => {
   You(S2B023)`"Smart, smart girl!"`;

});
fgload({ id: 1, name: `YU13ADM`, x: 176, useAnim: true });
showTextbox();
text(() => {
   You(S2B024)`"...Not like some other people here."`;

});
fgload({ id: 2, name: `SA07ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"........."`;
   Kid`"So the reason that EI won't sink yet is that it is not heavy enough, right?"`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU01ADM`, name2: `SA02ADM`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   You(S2B025)`"Yes. We need to find something heavy..."`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `We split up and went in search of thing we could use as weights.`;
   `And several minutes later...`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG23A2`, transition: 26 });
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: false });
playBGM({ num: 18, volume: 100 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
showTextbox();
text(() => {
   Takeshi(S2B026)`"Gggrrrrppphh!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Takeshi was carrying a massive planting pot.`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B027)`"Heave-ho, heave-ho..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `You brought a plaster ornament.`;
   `And I brought a magazine holder and a bundle of magazines from the Security Office.`;
   `And Sara...`;

});
multifgload2({ id1: 1, id2: 2, name1: `SA08ADM`, name2: `KB06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S2B028)`"Heave...heave..."`;
   `Pull, pull...`;
   Kid`"S-Sara? That's..."`;
   Takeshi(S2B029)`"What in the name of..."`;
   `Sara...was dragging a massive tuna.`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `YU06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2B030)`"What...happened to that?"`;

});
fgload({ id: 1, name: `SA02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S2B031)`"It was in the corridor over there."`;
   Sara(S2B032)`"I guess it probably washed out from the kitchen fridge during the flood."`;
   Kid`"........."`;

});
fgload({ id: 2, name: `YU07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You`"........."`;
   Takeshi`"........."`;

});
fgload({ id: 1, name: `SA05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S2B033)`"It's a little cold, but it's okay, right?"`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
playSFX({ name: `SE00_02`, a1: 0, volume: 100 });
bgload({ name: `EV_SA02A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   `So, the four of us packed ourselves into EI and cradling a frozen tuna headed down to Dritte stock.`;
   `EI began to inch down ever so slowly ...`;
   `Peeking through the window and into the blue we could see the outside of LeMU.`;
   `The blue gradually got darker and the steel bulkhead appeared to move further away upward.`;
   Kid`"........."`;
   Sara`"........."`;
   You`"........."`;
   Takeshi`"........."`;
   `We were silent during that time.`;
   `What was there really to talk about?`;
   `No, actually, You did say one thing...`;
   You(S2B034)`"Hey, wasn't catching dolphins for food banned under some international treaty?"`;
   `It seemed that You was having trouble with the difference between a dolphin and a tuna.`;
   `No one tried to answer her.`;
   `I...decided not to think about anything.`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
stopBGM();
playSFX({ name: `SE10_07`, a1: 1, volume: 100 });
waitForSFX();
playSFX({ name: `SE00_06`, a1: 1, volume: 100 });
waitForSFX();
playSFX({ name: `SE00_00`, a1: 1, volume: 100 });
waitForSFX();
playSFX({ name: `SE00_02`, a1: 0, volume: 100 });
bgload({ name: `BG23B2`, transition: 26 });
playBGM({ num: 4, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `Dritte stock Sector 7 was another area sealed off because of flooding.`;
   `That was where we got off.`;
   `Once the four of us holding the tuna got off, EI lost its baggage and floated up to Zweite stock again.`;
   Kid`"Oh, no. What'll we do?.... We can't get back now."`;

});
multifgload3({ name1: `SA01ADS`, name2: `KB06ADS`, name3: `YU01ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   You(S2B035)`"No problem. There is one more EI. I checked and it is stopped on this floor."`;
   Kid`"Oh...that surprised the heck out of me..."`;

});
fgload({ id: 2, name: `KB07ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2B036)`"HA,HA,HA.... If there wasn't another one, there is no way the four of us would ever come down here."`;

});
multifgload2({ id1: 1, id2: 4, name1: `SA05ADS`, name2: `YU07ADS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2B037)`"You sure? You seemed pretty petrified with fear yourself." `;

});
fgload({ id: 2, name: `KB04ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2B038)`"Zip it! I don't want any more lip from you!"`;

});
fgload({ id: 4, name: `YU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B039)`"Alright, alright...enough of that. Let's get going."`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `BG25B4`, transition: 26 });
playSFX({ name: `SE01_03`, a1: 0, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
clock(`7:32`);
showTextbox();
text(() => {
   `We put the frozen tuna down and began walking toward the Generator Room.`;
   `This side of the area was also inundated with water from the flood.`;
   `It was still bathed in darkness.`;
   `Blue light from the surface dimly pierced through the small round windows making a wave-like shadow on the floor.`;
   `The four of us relied on that and our flashlight as we proceeded deeper and deeper into the complex.`;

});
bgload({ name: `BG26B4L`, transition: 20 });
showTextbox();
text(() => {
   Takeshi(S2B040)`"Hey...wait up!"`;
   `When we turned a corner, we heard Takeshi call out from behind us.`;

});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B041)`"What are you doing? Hurry up. No dawdling or we'll leave you behind."`;
   Takeshi(S2B042)`"I'll show you dawdling! This toolbox weighs a ton!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Looking back there was Takeshi with the toolbox on the floor and breathing hard.`;
   You(S2B043)`"Geez. Gimme a break. Kid, give him a hand."`;
   Kid`"A...alright."`;

});
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I hurried to where Takeshi was.`;

});
stopSFX()
fgload({ id: 1, name: `KB03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid`"Takeshi, I'll help you."`;

});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2B044)`"Thanks. Take it from that side."`;
   Kid`"Okay."`;
   `The two of us took the toolbox from both sides.`;

});
fgload({ id: 1, name: `KB03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2B045)`"Whew! Thanks. I thought my arms would fall off carrying it all alone."`;
   Kid`"Quit exaggerating..." `;
   Kid`"Oh, Takeshi! Watch out! There's a bump sticking out there!"`;

});
fgload({ id: 1, name: `KB06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2B046)`"Whoa! Th-that was close!"`;
   `Takeshi was just able to right himself.`;

});
fgload({ id: 1, name: `KB07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2B047)`"Whew. That surprised the bejeezers outta me... I just about fell down..."`;
   Takeshi(S2B048)`"Glad you noticed that, Kid. It being so dark and everything...good job."`;
   Kid`"Huh? You really think it's that dark...?"`;
   Kid`"Takeshi, maybe you've got bad night vision."`;
   Takeshi(S2B049)`"Hmmm...could be."`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2B050)`"What is it that causes that? Lack of vitamin A or something? I hate liver and carrots."`;
   Kid`"You shouldn't be so picky."`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeFG({ id: 1, useAnim: false });
bgload({ name: `BG18B2`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`7:44`);
showTextbox();
text(() => {
   `Finally as we caught up with You and Sara we reached our destination.`;
   `Yellow and black stripes appeared dimly ahead.`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2B051)`"This it? This the Generator Room...?"`;
   `There was a plate with information on the front of the door, but it was too dark to read.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B052)`"I'll take a look."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `You reached toward the door handle...`;

});
stopBGM();
showTextbox();
text(() => {
   `(!?)`;
   Kid`"Wa-wait!"`;
   `Instinctively I grabbed You's arm.`;

});
multifgload3({ name1: `SA08ADS`, name2: `KB07ADS`, name3: `YU06ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   You(S2B053)`"Wh-what? What is it...?"`;
   Takeshi(S2B054)`"?"`;
   Sara(S2B055)`"??"`;
   `Takeshi and Sara stared at me questioningly.`;

});
fgload({ id: 4, name: `YU07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B056)`"What's the matter?"`;
   Kid`"Uh...um...the thing is..."`;

});
hideTextbox();
showDimOverlay();
playBGM({ num: 16, volume: 100 });
showTextbox();
text(() => {
   `I couldn't find the words to reply.`;
   `I wondered why I had said what I had.`;
   `I really didn't know.`;
   `Yet, somehow...`;

});
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
showTextbox();
text(() => {
   Kid`"If you don't know what's going on inside, don't you think it might be dangerous to just open the door?"`;
   `...I was just rattling off what popped into my mind.`;
   `No, I hadn't even thought it. It just seemed to jump from my throat before anything else.`;
   `Kind of like when you snap your hand back after touching a hot stove.`;
   `I just reflexively blurted it out.`;

});
fgload({ id: 4, name: `YU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B057)`"What do you mean?"`;
   `You wasn't buying it.`;
   `I took my hand from You's arm and searched for words.`;
   `At that moment...`;

});
fgload({ id: 1, name: `SA02ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S2B058)`"It's kind of like this..."`;
   Sara(S2B059)`"If a pipe carrying hot water burst, then the room could be full of hot steam maybe..."`;
   `Sara took up the slack in my explanation.`;

});
multifgload2({ id1: 4, id2: 2, name1: `YU02ADS`, name2: `KB01ADS`, x1: 320, x2: 512, useAnim: true });
showTextbox();
text(() => {
   `(Oh, I see...)`;
   `While I sensed danger, I couldn't express in words what it might be.`;
   `The three of us nodded, satisfied.`;

});
fgload({ id: 2, name: `KB08ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2B060)`"Okay, let's give it a try."`;
   `Takeshi touched his hand to the wet floor. He went to place his damp fingers on the door.`;

});
hideTextbox();
playSFX({ name: `SE02_13`, a1: 0, volume: 100 });
multifgload3({ name1: `SA05ADS`, name2: `KB06ADS`, name3: `YU06ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   `The droplets sizzled, evaporating away.`;
   Takeshi(S2B061)`"It's true."`;
   `It was just like Sara had said.`;

});
fgload({ id: 2, name: `KB01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2B062)`"Wow...that was pretty sharp, Kid."`;
   Kid`"Uh...yeah."`;
   `I replied, but I hadn't really known it would be dangerous either.`;
   `The one who had known was a separate someone inside me.`;
   `That someone had simply borrowed my voice.`;
   `What had happened was so strange that it made me feel out of place in my own skin.`;
   Sara(S2B063)`"Anyway, with things as they stand, there's no going inside."`;

});
multifgload2({ id1: 4, id2: 2, name1: `YU07ADS`, name2: `KB05ADS`, x1: 320, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2B064)`"Ooh, shoot."`;

});
fgload({ id: 4, name: `YU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B065)`"I'll say..."`;
   You(S2B066)`"First off let's close off all valves for pipes sending hot water to the Generator Room."`;
   You(S2B067)`"If we stop the flow of hot water, then steam should stop flowing to the room."`;

});
multifgload2({ id1: 1, id2: 2, name1: `SA01ADS`, name2: `KB07ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S2B068)`"Valves? Where are those?"`;

});
fgload({ id: 4, name: `YU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B069)`"In the room next door. Down one more corridor that way."`;
   You(S2B070)`"It won't require that many people...just me and...one more person to help."`;

});
fgload({ id: 2, name: `KB02ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2B071)`"Alright, leave it to me!"`;

});
fgload({ id: 4, name: `YU04ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B072)`"Huh? Takeshi?"`;

});
fgload({ id: 2, name: `KB04ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2B073)`"Hey! What's wrong with me?"`;

});
fgload({ id: 4, name: `YU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B074)`"It's just...that if we were alone I'm afraid you'll do something."`;

});
multifgload2({ id1: 1, id2: 2, name1: `SA02ADS`, name2: `KB07ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2B075)`"Uh, that's..."`;

});
fgload({ id: 1, name: `SA08ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S2B076)`"Uh...maybe I should help?"`;

});
fgload({ id: 4, name: `YU02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B077)`"Oh, no, that's okay. Mayo you wait here."`;
   Sara`"........."`;

});
if (l_coco_point != 4) goto(lbl_00000a43);
l_choice = 0;
jump(`SC2B`);
let lbl_00000a43;
fgload({ id: 2, name: `KB01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2B078)`"Hey, Kid. So what're you gonna do?"`;
   Kid`"Huh? Me...?"`;

});
choice(
   `I'll help You`,
   `I'll wait here`,
);
switch (l_choice) {
   case 0: goto(lbl_00000a7d);
   case 1: goto(lbl_00000ce2);
}
let lbl_00000a7d;
showTextbox();
text(() => {
   Kid`"I'll help You."`;

});
fgload({ id: 1, name: `SA03ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2B079)`"Okay. In that case, Sara and I will hold down the fort here."`;

});
fgload({ id: 2, name: `KB05ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2B080)`"You can't complain about that, right?"`;
   You(S2B081)`"Okay."`;

});
removeFG({ id: 4, useAnim: true });
fgload({ id: 2, name: `KB03ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2B082)`"Geez. Damned if I do, damned if I don't."`;
   `It seemed that Takeshi was oblivious to his disturbing dream the night before.`;
   Kid`"I figure that You is concerned about you in her own way."`;
   Kid`"Like when she had you carry the heavy toolbox...maybe it was her way of saying 'rest a bit' or 'take it easy.'"`;

});
fgload({ id: 2, name: `KB01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2B083)`"You think so? That's a pretty generous interpretation, I'd say."`;
   Takeshi(S2B084)`"Oh well. In that case, I guess Sara and I will just have sit back and relax - together."`;

});
showTextbox();
text(() => {
   `Takeshi tried to pat Sara on the shoulder...but she dodged the advance.`;

});
fgload({ id: 1, name: `SA05ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S2B085)`"Oh! You probably don't want to do that."`;

});
fgload({ id: 2, name: `KB07ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2B086)`"Huh?"`;
   Sara(S2B087)`"I'm a licensed Iga Ninja!"`;

});
fgload({ id: 2, name: `KB06ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2B088)`"Wh-what's that?"`;

});
fgload({ id: 1, name: `SA18ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S2B089)`"It means, if you value your life, you'd better stay back!"`;

});
fgload({ id: 2, name: `KB03ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi`".........."`;

});
setFGRenderOrder(1, 2, 4);
fgload({ id: 4, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B090)`"Kid, should we get going?"`;
   Kid`"Uh, yeah..."`;
   `You and I left the increasingly tense atmosphere behind.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
setFGRenderOrder(4, 2, 1);
stopBGM();
setSceneTitle({ index: 60 });
bgload({ name: `BG20B2`, transition: 26 });
playBGM({ num: 13, volume: 100 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   `The room was covered in a massive web of pipes.`;
   `The pipes continued into the adjacent Generator Room. It seemed that by opening and closing the valves, the water and oil pressure could be adjusted.`;

});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   `'Normally LeMMIH is responsible for maintaining the Generator Room, but even LeMMIH can't do much when the generator itself goes out.'`;
   `'Anyhow, this is all because the power supply is down.'`;
   `'This room is designed so that maintenance can be performed manually at times like this, or during blackouts.'`;

});
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
showTextbox();
text(() => {
   `...That was what You told me.`;
   `You selected one pipe from the countless rows of them and instructed me to close its valve.`;

});
playSFX({ name: `SE10_16`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `As ordered, I turned the valve around and around.`;
   Kid`"Hey, You?"`;
   `I said this as I was closing the valve.`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B091)`"What?"`;
   Kid`"It's about the girl from yesterday."`;
   You(S2B092)`"Yesterday? You mean the seventh survivor you said you saw?"`;
   Kid`"Yeah."`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B093)`"You're sure your eyes weren't playing tricks on you?"`;
   Kid`"I'm positive. These eyes saw her."`;
   You(S2B094)`"Maybe you've got some kind of eye disease."`;
   Kid`"Huh? Dis....disease...?"`;

});
fgload({ id: 1, name: `YU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B095)`"I'm kidding...it's a joke. Why do you always take everything seriously?"`;
   Kid`"Enough already!"`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B096)`"Alright, alright.... I'll listen to your stories of unidentified survivors later."`;
   You(S2B097)`"Right now we have to work."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Kid`"........."`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
showTextbox();
text(() => {
   `Finally the valve was completely shut.`;

});
hideTextbox();
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   You(S2B098)`"That should do it."`;
   Kid`"You, can we talk now...?"`;

});
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B099)`"Let's get back to Takeshi and Sara."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `You took off from the room as if she were a fugitive on the run.`;
   `I was left in the room alone...`;
   `I felt an unclear mess of feelings stewing inside my mind.`;

});
goto(lbl_00000f95);
let lbl_00000ce2;
l_chose_to_wait_there_in_2nd_day = 1;
showTextbox();
text(() => {
   Kid`"I'll...wait here..."`;

});
multifgload2({ id1: 1, id2: 4, name1: `SA02ADS`, name2: `YU07ADS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2B100)`"So what are we going to do?"`;
   You(S2B101)`"Oh well...then I'll have to make do with Takeshi."`;

});
fgload({ id: 2, name: `KB05ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2B102)`"Geez. You're a piece of work. Can't you let your real feelings show?"`;

});
fgload({ id: 4, name: `YU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B103)`"Don't be getting any strange ideas. You do and I'll knock you down. Got it?"`;

});
fgload({ id: 2, name: `KB08ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2B104)`"...Take it easy. There's no way I'd try anything, even by mistake."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   `When the two of them disappeared at the far end of the corridor they were still going at it.`;

});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2B105)`"Those two..."`;
   Kid`"Yeah?"`;

});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2B106)`"I don't know, I think they make a pretty good couple, don't you?"`;
   Kid`"Think so?"`;
   Sara(S2B107)`"Yeah. Nakkyu is the kind of person who tells people she likes what she really thinks...she speaks her mind."`;
   Kid`"Hmmmm."`;

});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2B108)`"Takeshi kind of seems like that, too."`;
   `I wasn't sure why...but somehow I was a little jealous of You and Takeshi.`;
   `Even if I wanted to, I couldn't open up to anyone like that...I had nothing to share...`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
setSceneTitle({ index: 61 });
bgload({ name: `BG18B2`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   `A while after the two had disappeared...`;
   `Sara and I hadn't spoken another word.`;
   `The two of us just leaned against a wall and stared into the darkness.`;
   `I was desperately trying to think of some way to break through the wall that had formed between us.`;
   Kid`"Sara, how old are you?"`;
   `Finally the words tumbled out of my mouth.`;

});
hideTextbox();
playBGM({ num: 6, volume: 100 });
fgload({ id: 1, name: `SA06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2B109)`"Where did that come from...? I thought I told you?"`;
   Kid`"I don't think so."`;

});
fgload({ id: 1, name: `SA01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2B110)`"I'm a junior. I'm 16 and was born January 21. Oh, and I'm an Aquarius."`;
   `Sara rattled it off so smoothly she might have been singing a song she knew.`;

});
fgload({ id: 1, name: `SA05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2B111)`"And you, Kid?"`;
   Kid`"I'm..."`;
   `I didn't know.`;
   `When I tried to remember, it was like my mind would fog over.`;
   `I couldn't get close to it. It was like a mirage in the desert.`;
   Kid`"I...wonder how old I am."`;
   Sara(S2B112)`"You don't know that either?"`;
   Kid`"Nope."`;

});
fgload({ id: 1, name: `SA08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2B113)`"Hmmm, that's kind of sad."`;
   Kid`"Yeah..."`;

});
fgload({ id: 1, name: `SA01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2B114)`"But maybe it's good in a way."`;
   Kid`"What do you mean?"`;

});
fgload({ id: 1, name: `SA17ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2B115)`"Well, maybe it was something that you wanted to forget about......"`;
   Kid`"........."`;

});
fgload({ id: 1, name: `SA09ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2B116)`"Just kidding."`;
   `Sara's expression relaxed into a silly look.`;
   Kid`"Wh-what...don't scare me like that."`;

});
fgload({ id: 1, name: `SA02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2B117)`"Sorry."`;

});
fgload({ id: 1, name: `SA01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2B118)`"I know. Maybe if I chopped you down, we'd find out how old you are."`;
   Kid`"Huh?"`;
   Sara(S2B119)`"You know, maybe you've got rings like a tree stump."`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   Kid`"........."`;
   `For some reason my eyes strayed to the palms of my hands.`;
   `In the darkness only dimly illuminated by the emergency lights my fingers appeared to glow slightly white.`;
   `I still didn't know what had happened to my finger...`;

});
fgload({ id: 1, name: `SA03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2B120)`"Your finger..."`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeFG({ id: 1, useAnim: false });
bgload({ name: `EV_SA03A`, transition: 26 });
playBGM({ num: 22, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `Muttering this, Sara grabbed my finger.`;
   Kid`"........."`;
   `It was so sudden it put me at a loss for words.`;
   `In the darkness Sara whispered words as if confirming something as she gripped my thumb.`;
   Sara(S2B121)`"Moon sprite...shouldering...a long bow..."`;
   Sara(S2B122)`"Waiting...inside a dream..."`;
   `............`;
   Kid`"What does that mean?"`;
   `Sara just shook her head. There was no sign that she was going to answer me.`;
   `She just murmured the words like a spell or a nursery rhyme as she held my thumb gently.`;
   `(A moon sprite...)`;
   `I wondered why Sara had suddenly grabbed my thumb.`;
   `Still, I didn't have any urge to pull it away from her...`;
   `As I remained aware of my thumb, I searched for an answer from Sara's slightly sweaty, warm palm.`;

});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
bgload({ name: `BG18B2`, transition: 26 });
delay({ interval: 90 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
stopBGM();
showTextbox();
text(() => {
   You(S2B123)`"We're back."`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU02ADM`, name2: `KB01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2B124)`"I think we'll be okay now."`;
   You(S2B125)`"It was a hassle looking for the valve, but..."`;

});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   `With the two back, Sara finally released my thumb.`;
   `In the darkness I couldn't very well make out Sara's expression.`;
   `The area around Sara's mouth pulled slightly down, as if she were sad.`;
   `Warmth lingered around my thumb....`;
   `I don't know why, but I hesitated to wipe the warmth away and gently inserted my hand into my pocket leaving my thumb extended.`;

});
goto(lbl_00000f95);
let lbl_00000f95;
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
dimOff_ac = 0;
closeDimOverlay();
stopBGM();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `With this we would be able to shut off the hot water flowing to the Generator Room.`;
   `Even so, on the other side of the door, it was still hot enough to scald.`;
   `The four of us waited outside the Generator Room until we could be sure that the temperature inside had cooled enough.`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG18B2`, transition: 26 });
playBGM({ num: 4, volume: 100 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`9:42`);
showTextbox();
text(() => {
   `When we thought the time had come, we timidly opened the door.`;
   `It was like opening the door to a steam bath - a cloud of steam hissed out of the door.`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `BG19B2`, transition: 26 });
showFog2();
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   `The heat inside just about defied imagination.`;
   `The air in the steam-filled room was heavy and stuck to the skin.`;
   `Inhaling felt like swallowing globs of sticky hot steam.`;
   `Takeshi was opening and closing his mouth like a fish out of water.`;

});
let lbl_0000104c;
multifgload2({ id1: 1, id2: 2, name1: `YU05ADM`, name2: `KB07ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2B126)`"Isn't it hard to breathe?"`;
   You(S2B127)`"Stop pointing out the obvious! Talking about it just makes it worse!"`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SA05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S2B128)`"Nakkyu...let's just do what we have to do and get out of here."`;

});
fgload({ id: 1, name: `YU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S2B129)`"Alright. Let's divide up what we have to do and be efficient about this."`;

});
fgload({ id: 2, name: `SA01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2B130)`"I'll be here. Takeshi, can I get you to go over there? Kid, I want you to..."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `And so we got to work fixing the generator.`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
stopBGM();
closeFog2();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
if (l_chose_to_wait_there_in_2nd_day == 0) goto(lbl_00001116);
showTextbox();
text(() => {
   `Takeshi and You tackled the main work.`;
   `There was hardly anything for Sara and myself to do as we knew squat about machines.`;
   `We functioned as assistants, shining flashlights, handing over tools and loosening valves as instructed.`;
   `After this and that, we succeeded in repairing the generator.`;

});
goto(lbl_0000164f);
let lbl_00001116;
showTextbox();
text(() => {
   `Takeshi and You did the bulk of the work.`;
   `There wasn't much for Sara or me to do, because we were helpless when it came to machines.`;
   `Takeshi and Sara were working on the other side of the generator.`;
   `You was doing battle with the machine and depending on my flashlight wielding skills. `;
   `With nothing much to do, my mind started wandering.`;
   `And of course they led right to the girl that had disappeared.`;
   `I just couldn't believe that I had imagined the whole thing.`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `EV_YU02A`, transition: 26 });
playBGM({ num: 5, volume: 100 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   Kid`"Hey, you know, I've thought a lot about it..."`;
   You(S2B131)`"What?"`;
   Kid`"About the girl."`;
   You(S2B132)`"What? You still stuck on that?"`;
   Kid`"Just listen."`;
   Kid`"Maybe that girl..."`;
   Kid`"Maybe she is a ghost."`;

});
bgload({ name: `EV_YU02B`, transition: 20 });
showTextbox();
text(() => {
   You(S2B133)`"Huh?"`;

});
bgload({ name: `EV_YU02A`, transition: 20 });
showTextbox();
text(() => {
   `You gave me a fed up look, shook her head and went back to work.`;
   Kid`"That's gotta be it!"`;
   Kid`"That would explain why the numbers change so irregularly and why she vanished all of the sudden."`;
   You(S2B134)`"That's stupid..."`;
   Kid`"Listen! I'm serious."`;
   You(S2B135)`"No."`;
   You(S2B136)`"If you were talking about something serious, I would take you serious."`;
   You(S2B137)`"But I'm not listening seriously to something like this. Stupidity is contagious."`;
   You(S2B138)`"It's like multiplication of plusses and minuses..."`;
   You(S2B139)`"A plus times a plus is a plus."`;
   You(S2B140)`"But a minus times a plus is a minus..."`;
   You(S2B141)`"So, pass me that minus-like screwdriver, would you?"`;
   `I suppressed my anger and put the flat-head screwdriver in You's hand.`;
   Kid`"Okay then, you don't have to listen seriously."`;
   Kid`"Just listen to me stupidly."`;

});
bgload({ name: `EV_YU02B`, transition: 20 });
showTextbox();
text(() => {
   You(S2B142)`"What's that mean? Listen stupidly..."`;
   Kid`"It's multiplication, right?"`;
   Kid`"A minus times a minus is a plus, right?"`;
   You(S2B143)`"I see."`;

});
bgload({ name: `EV_YU02C`, transition: 20 });
showTextbox();
text(() => {
   You(S2B144)`"Alright, then. I'll listen to the stupid stuff you've got to say until I finish screwing in these screws."`;
   You(S2B145)`"So? What is it you're dying to say?"`;
   Kid`"It's about the girl that disappeared."`;
   Kid`"If she were a ghost..."`;
   You(S2B146)`"Hold on. Now, do you really believe in ghosts?"`;
   Kid`"I wouldn't say believe. But believe in the possibility..."`;
   You(S2B147)`"Zero. That is what possibility there is. 0.00000000000000001 percent, maybe."`;
   Kid`"How do you know?" `;

});
bgload({ name: `EV_YU02A`, transition: 20 });
showTextbox();
text(() => {
   `You sighed and started turning the next screw.`;
   You(S2B148)`"Listen. Ghost stories now and forever are almost all made up."`;
   You(S2B149)`"They are just fiction with the goal of entertaining people."`;
   Kid`"But haven't you ever felt somebody's eyes on you when you were in a room all alone?"`;
   You(S2B150)`"Eyes?"`;
   Kid`"Yeah. Like someone was watching you from behind..."`;
   You(S2B151)`"You mean your mom?"`;
   Kid`"I'm being serious...oh, never mind."`;
   You(S2B152)`"Things like that are just your imagination."`;
   You(S2B153)`"A product of an overzealous mind. An illusion spawned by the mental state of the person."`;
   Kid`"You mean, my mind is playing tricks on me?"`;
   You(S2B154)`"To be perfectly blunt - yes."`;
   You(S2B155)`"UFOs and goblins are the same thing. People like to imagine stuff."`;
   You(S2B156)`"Thanks to the power of imagination, people have been able to evolve to where we are, but it's kind of a curse, too."`;
   You(S2B157)`"Taken to extremes, there is no distinguishing between reality and illusions."`;
   Kid`"........."`;
   You(S2B158)`"When you turn on the lights, the ghost is only a shirt on a chair."`;
   You(S2B159)`"People who want to be scared see what they want."`;
   You(S2B160)`"If you really want to believe that something exists, even if it doesn't, then you still feel that it does."`;
   You(S2B161)`"If you are scared of something, you'll scare yourself even if there is nothing there."`;

});
choice(
   `Keep arguing`,
   `Give up`,
);
switch (l_choice) {
   case 0: goto(lbl_000011d6);
   case 1: goto(lbl_000011df);
}
let lbl_000011d6;
showTextbox();
text(() => {
   Kid`"What about kanashibari? How do you explain that?"`;
   You(S2B162)`"Kanashibari?"`;
   Kid`"When you wake up and you can't move."`;
   Kid`"Is that just a person's mind, too?"`;
   You(S2B163)`"They probably can't move because somebody tied them up when they were asleep."`;
   Kid`"Who?"`;
   You(S2B164)`"Some S&M freak."`;
   Kid`"As if that could happen!"`;
   You(S2B165)`"I'm kidding..."`;
   You(S2B166)`"You're talking about when your body is still asleep, but your mind is awake."`;
   You(S2B167)`"So that even though you're conscious, your body won't move."`;
   Kid`"What about the people that say they wake up and saw a ghost on top of them?"`;
   You(S2B168)`"They think their eyes are open, but it's really just a dream."`;
   You(S2B169)`"Because the brain is fully awake and the body won't do what it's told, a person feels fear. These two things happen at the same time..."`;
   You(S2B170)`"So even the most incredible dream seems like reality."`;
   Kid`"........."`;
   You(S2B171)`"I just told you, right? If you really, really believe something then even reality seems like an illusion."`;

});
goto(lbl_000011e8);
let lbl_000011df;
showTextbox();
text(() => {
   Kid`"........."`;
   `I wasn't satisfied, but I had learned something - `;
   `I couldn't beat You in a debate.`;

});
goto(lbl_000011e8);
let lbl_000011e8;
bgload({ name: `EV_YU02C`, transition: 20 });
showTextbox();
text(() => {
   You(S2B172)`"So? Doesn't look like you're convinced."`;
   Kid`"You can't convince me. I know...I saw her."`;
   Kid`"At least I saw something."`;
   You(S2B173)`"Don't go telling me you have special powers to see spirits or anything either."`;
   Kid`"........."`;

});
bgload({ name: `EV_YU02B`, transition: 20 });
showTextbox();
text(() => {
   You(S2B174)`"You're not gonna say it, right?"`;
   Kid`"........."`;

});
bgload({ name: `EV_YU02A`, transition: 20 });
showTextbox();
text(() => {
   You(S2B175)`"Alright, alright."`;
   You(S2B176)`"But no spinning your head around 360 degrees or spewing out ectoplasmic goo. Alright?"`;
   You(S2B177)`"And no supernatural tricks or channeling spirits either."`;
   You(S2B178)`"Because if a poltergeist gets loose around here, the screws I just put in could fall out."`;
   Kid`"For not believing this stuff, you sure know a lot about it."`;
   You(S2B179)`"It's because I don't believe in it, that I know a lot."`;
   You(S2B180)`"My knowledge is not for defensive purposes."`;
   You(S2B181)`"It's for offensive ones."`;
   Kid`"Huh?"`;
   You(S2B182)`"I mean, there are those people that swear by ghosts, the supernatural, UFOs and that occult stuff. They're completely loony."`;
   You(S2B183)`"My knowledge is so I can take them down, when I meet them."`;
   You(S2B184)`"I've stocked up on enemy information for my verbal assaults."`;
   You(S2B185)`"That's the reason I majored in archaeology."`;
   Kid`"Archaeology?"`;
   Kid`"Archaeology...I thought that was about digging, looking for artifacts, ruins and deciphering ancient letters. That kind of stuff, right?"`;
   You(S2B186)`"Well, maybe."`;
   `You studying archaeology...it just didn't click.`;
   Kid`"So what are you studying?"`;
   You(S2B187)`"I'm not doing anything that big. I'm still a freshmen so I'm only taking basic stuff."`;
   You(S2B188)`"I just listen to professors lecture and go on excavation surveys. I'm still getting the fundamentals of 'What is archaeology?' pounded into my head."`;
   Kid`"Hmmm."`;
   Kid`"Oh, that reminds me. Speaking of archaeology...You, have you ever heard of the continent Lemuria?"`;
   Kid`"It seems like it is the origin of LeMU's name."`;
   You(S2B189)`"Have I heard of it?.... I know so much about it that it makes me nuts."`;
   Kid`"??"`;
   You(S2B190)`"Lemuria is the phantom continent that is said to have existed from 200 million to 50 million years B.C."`;
   You(S2B191)`"On it thrived an advanced civilization that was more advanced than what we have today. But overnight it just slipped down to the bottom of the ocean."`;
   `You recited it off so fluently that it sounded like she was reading from a textbook.`;
   `(Advanced civilization...overnight...huh?)`;
   `(That sounds just like...)`;
   You(S2B192)`"There are some scholars that contend that this continent was the origin of mankind."`;
   You(S2B193)`"But what could they be talking about? That could never happen."`;
   Kid`"You don't believe it?"`;

});
bgload({ name: `EV_YU02C`, transition: 20 });
showTextbox();
text(() => {
   You(S2B194)`"Of course not. Archaeologically and geologically the idea has no basis."`;
   You(S2B195)`"The more real research is conducted, the more the theory is shot full of holes...it's no longer a legitimate field of study."`;
   Kid`"Is that right...?"`;

});
bgload({ name: `EV_YU02A`, transition: 20 });
showTextbox();
text(() => {
   You(S2B196)`"Reality is different than a fairy tale."`;
   You(S2B197)`"Religion is like that, too. Any and all those mysterious things that people get all worked up about. They're mostly all make believe."`;
   You(S2B198)`"'They're all impossible to prove, so who cares what they say?' - that's the philosophy behind it."`;
   Kid`"........."`;
   `I thought that maybe precisely because there was no evidence for or against that what people said was actually packed with meaning.`;
   `I felt like that because those words were the only foothold, the only way to really nail down reality.`;
   `I absently thought about this for a minute.`;
   You(S2B199)`"Hmmmmgggr...this screw is really tight."`;
   Kid`"Let me try."`;

});
bgload({ name: `BG19B2`, transition: 20 });
stopBGM();
showTextbox();
text(() => {
   `We switched places and I tried twisting the screw into place.`;

});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B200)`"Ohhhh. I'm beat...my shoulders are stiff and everything."`;
   `You twisted and stretched. Her back popped loudly.`;
   Kid`"Hey. You know what we were just talking about..."`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B201)`"What was that? Oh, Lemuria?"`;
   Kid`"Yeah."`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B202)`"Kid...you're not one of those people that get all into these stories, are you?"`;
   Kid`"I...I don't know about that. But since we've got time to kill, just humor me."`;
   You(S2B203)`"Alright, alright. What is it?"`;
   Kid`"Okay. I wonder if Lemuria angered God and he sent it to the bottom of the ocean?"`;
   You`"........."`;
   Kid`"I mean, if the people of Lemuria had such an advanced civilization, maybe God struck them down for their pride or something..."`;
   Kid`"Huh? You?"`;
   You`"..............."`;
   Kid`"Hellllllllloooooo?"`;

});
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B204)`"This is bad. DANGER, DANGER! I'm putting myself in danger of being dragged into lunacy with you."`;

});
fgload({ id: 1, name: `YU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B205)`"Stupid...stupid..."`;

});
fgload({ id: 1, name: `YU18ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B206)`"Alright. I should be fine now."`;
   Kid`"..."`;

});
hideTextbox();
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
playBGM({ num: 14, volume: 100 });
showTextbox();
text(() => {
   You(S2B207)`"Okay, okay. I see what you're saying. You are saying that it was like the Tower of Babel, right?"`;
   Kid`"Tower of Babel?"`;
   You(S2B208)`"In the old testament, in Genesis there is this story about this tower."`;
   You(S2B209)`"In it, people are so proud of their achievements that they build this super high tower...this massive structure that almost reached to heaven."`;
   You(S2B210)`"But God was angered by their behavior."`;
   You(S2B211)`"God said, 'I will bring down their pride together with the trickery of their hands. They are impudent.'"`;
   You(S2B212)`"So God took it upon himself to destroy the tower and the building stopped, and people spread to all corners of the earth."`;
   You(S2B213)`"That's the story of the Tower of Babel."`;
   Kid`"Yeah. That's what I'm talking about."`;
   `I nodded without stopping my work.`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B214)`"That would have to be the work of a God like Shiva."`;
   Kid`"Shiva?"`;
   You(S2B215)`"The God of destruction and creation."`;
   You(S2B216)`"One of the main three Hindu gods. He has more than a thousand names, four arms, four faces and three eyes."`;
   You(S2B217)`"He destroys the world for purposes of creation..."`;
   You(S2B218)`"The destruction is so thorough that in it is contained the seeds or possibility of the next generation."`;
   Kid`"Kind of like starting from square one is better than fixing something halfway?"`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B219)`"Probably something like that."`;
   You(S2B220)`"So if Lemuria had pissed off a god enough to sink it into the ocean, then that god would probably have demolished it."`;
   Kid`"Oh, I see..."`;
   `(A god that would purge the world of filth by destroying it...)`;
   `(A god that damned people drunk with pride, and forced rebirth...)`;

});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B221)`"Look! You're slowing down. Hurry up and finish up."`;
   Kid`"I'm already done."`;
   `I had finished putting in all of the screws.`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B222)`"Next tighten these bolts."`;
   `I handed the screwdriver to her and took the wrench.`;
   `Somewhere along the line, I had been put in charge of the work.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `When You pointed the flashlight near me, I saw three bolts in the shape of a triangle.`;
   Kid`"Did you say that Shiva has three eyes?"`;
   You(S2B223)`"Yup."`;
   Kid`"That means..."`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `I put the wrench between my eyebrows.`;
   Kid`"He'd have another eye right here then?"`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B224)`"That's right."`;
   You(S2B225)`"The light from that third eye burns all in the world, purifying it."`;
   Kid`"Wow.... That sounds pretty cool."`;
   `I said that as I tightened the top bolt.`;
   Kid`"But, I bet a visit to the optometrist would be a pain."`;

});
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B226)`"You'd have to buy another lens so the optometrist would love it."`;
   `I thought to myself that making the custom frame is what would cost a fortune. But I didn't dare say it.`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B227)`"That is enough of that..."`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B228)`"But the idea of a third eye is not limited to Shiva. It also exists in the world of Buddhism and Yoga."`;
   You(S2B229)`"Clairvoyance, telescopic vision, ghost sense, the gift of the prophet, the power of seeing the past or future..."`;
   You(S2B230)`"There are a lot of explanations behind it. Some say it is a gift from the gods, others that you can acquire it from intensive training. But what they all have in common is.."`;
   `When the third eye opens, true wisdom is apparent and all becomes visible.`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B231)`"They all have something to do with transcending the realm of the human...becoming superhuman somehow."`;
   Kid`"Real wisdom..."`;
   `Muttering that I turned to face the bolt again.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `(If I had that, I'd be able to get back my memory...yeah right...)`;
   Kid`"If there really is such a thing, I want one."`;

});
showTextbox();
text(() => {
   You(S2B232)`"You want what? .... A third eye?"`;
   Kid`"Yeah. If I had one, maybe I could see my past. And maybe I'd know who that girl is."`;
   You`"........."`;
   Kid`"Anyway, I'd like to see what it is like."`;

});
showTextbox();
text(() => {
   You(S2B233)`"You want to see?"`;
   Kid`"Yeah. Maybe I could see something."`;

});
showTextbox();
text(() => {
   You(S2B234)`"Shall I give you a look then?"`;
   Kid`"What?"`;
   `I looked up.`;
   `And there...`;

});
hideTextbox();
fgload({ id: 1, name: `YU01ADL`, x: 320, useAnim: true });
stopBGM();
showTextbox();
text(() => {
   `Was You's face.`;
   `(Wh-when did she get so close?)`;
   `We were at a distance where could just about feel each other's breath.`;
   `The tips of our noses just about touched - that's how close her face was.`;
   Kid`"Y-You...?"`;

});
showTextbox();
text(() => {
   You(S2B235)`"You want to see, right?"`;
   `You stared me in the eye as she said this.`;
   Kid`"........."`;
   `I couldn't speak. My legs shook.`;
   `My heart was beating as fast as it would go. It felt like it would jump right out of my chest.`;

});
showTextbox();
text(() => {
   You(S2B236)`"Now take a good look."`;
   `You lifted up her bangs and placed her finger on her forehead.`;
   You(S2B237)`"Right here, isn't it?"`;
   You(S2B238)`"The third eye..."`;
   Kid`"........."`;
   `On You's face...`;
   `There was nothing.`;
   `All I could think about was her nice skin and sweet smell.`;
   You`"........."`;
   Kid`"........."`;

});
fgload({ id: 1, name: `YU09ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B239)`"Ah! Ha, ha, ha, ha!"`;

});
playBGM({ num: 5, volume: 100 });
showTextbox();
text(() => {
   `You grabbed her stomach, laughing.`;
   Kid`"Huh? What?"`;
   You(S2B240)`"It's a JOKE! A JOKE!"`;
   Kid`"What...?"`;
   You(S2B241)`"Ha, ha, ha! That was too funny."`;
   You(S2B242)`"Who else would take that completely seriously...you're the best."`;
   Kid`"You're...you're so mean...You."`;
   Kid`"You tease me even though you know how serious I am."`;

});
fgload({ id: 1, name: `YU08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B243)`"Sorry! Oh, I'm sorry! But you keep saying one bizarre thing after another, so I just couldn't help playing a joke on you."`;

});
fgload({ id: 1, name: `YU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B244)`"Besides...what I said wasn't really a lie anyway."`;
   `Saying that, You pointed to her forehead again.`;
   Kid`"What do you mean?"`;

});
hideTextbox();
hideTextbox();
NVL_Mode();
showDimOverlay();
showTextbox();
text(() => {
   `I wondered why we had two eyes.`;
   `Common knowledge had it that physically two eyes were enough for gauging the distance to a point or focusing on something.`;
   `But what would it be like if we really used to have three eyes?`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Actually...`;
   `The animal ancestors of vertebrates had three eyes.`;
   `Early species of primitive reptiles...`;
   `Like the tuatara lizard that still has a third eye on the top of its head.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `The third eye...`;
   `${noWait}`;

});
showTextbox();
text(() => {
   `The organ has a similar function to the eyeball and lies on the top of the head.`;
   `This organ would be sensitive to the light of the outside world and control internal hormone secretion and balance based on light.`;
   `An eye on the crest of one's head would stare straight up. It seemed safe to say that it would sense the difference in light between day and night.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `A right eye, a left eye and one above...`;
   `An eye on the top of the head to stare at the sky.`;
   `Only we people and higher vertebrates had lost the third eye over a long process of evolution. It had been covered over by the cerebrum and we lost our ability to sense light directly.`;
   `Therefore we had two light sensitive eyeballs, one on each side, instead.`;
   `This lost third eye was called a 'pineal body.'`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `This had functioned in the brain for eons and was responsible for secreting hormones that helped carve out our 24-hour rhythm.`;
   `What we called our internal clocks existed because of this pineal body. `;
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
   `...that was essentially the rundown that You gave me as I was tightening the bolts.`;
   You(S2B245)`"So the third eye in terms of human anatomical science is really no big deal."`;
   You(S2B246)`"It's just an organ we lost through evolution..."`;
   Kid`"You mean like an appendix or the webbing between fingers?"`;
   You(S2B247)`"That's exactly what I mean."`;
   Kid`"I finished with the bolt."`;

});
fgload({ id: 1, name: `YU02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B248)`"Okay. Well then our work here is done."`;

});
fgload({ id: 1, name: `YU12ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B249)`"Oh...I'm tired."`;
   `You stretched as she said this.`;
   `I put both hands on my waist and stretched.`;
   `We were both drenched in sweat.`;

});
showTextbox();
text(() => {
   Kid`"Hey, I was wondering..."`;

});
fgload({ id: 1, name: `YU07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B250)`"What?"`;
   Kid`"So that occult stuff that you were just telling me about is for offensive purposes, too?"`;

});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B251)`"Well...it's not really for offensive or defensive use."`;

});
fgload({ id: 1, name: `YU08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B252)`"It's just a load of useless knowledge."`;

});
fgload({ id: 1, name: `YU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B253)`"Still, I can't very well just throw it away."`;
   You(S2B254)`"Maybe it has completely rooted itself into my brain."`;
   Kid`"But you planted it there yourself, right?"`;

});
fgload({ id: 1, name: `YU04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B255)`"No way!"`;

});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B256)`"My mom's the guilty one."`;
   Kid`"Your mom?"`;

});
fgload({ id: 1, name: `YU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B257)`"Yes. My mom's an archaeology researcher."`;
   You(S2B258)`"Apparently she's an expert in the ancient concept of the third eye..."`;
   You(S2B259)`"Anyway, when I was little, instead of lullabies she told me all these third eye stories."`;
   Kid`"Wow..."`;
   `(Hmmm? The third eye?)`;
   `How about that? I wondered if the third eye could be related to something.`;
   `I thought I would ask about possible connections, but my mind and body were completely drained.`;
   `(Oh well...I'll save it for next time.)`;

});
fgload({ id: 1, name: `YU13ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B260)`"I used to hate archaeology..."`;
   `You sighed as she said this.`;

});
fgload({ id: 1, name: `YU07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B261)`"But one day I just woke up and found myself in the archaeology department."`;
   Kid`"Like mother, like daughter?"`;

});
fgload({ id: 1, name: `YU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B262)`"It's not that simple."`;
   `You's shoulders slumped and she let go a deep sigh again.`;

});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B263)`"It's like some kind of curse."`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `Soon after that, it looked like Takeshi and Sara had finished their work as well.`;
   `Well, it had turned into an adventure, but at least we had finished the repairs.`;

});
let lbl_0000164f;
showTextbox();
text(() => {
   `It was just like Sara had said. The cause of the blackout was the opening of the safety valve due to the drop in air pressure.`;
   `'When pressure from the steam becomes excessive, the valve automatically opens to release the gas and prevent damage.'`;
   `'Normally after a release of surplus gas, the valve is designed to shut naturally...but we're only at 1 atmosphere.'`;
   `'Because the safety valve never closed, the steam continued leaking.'`;
   `...Anyway, that was the gist of the explanation.`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
setSceneTitle({ index: 62 });
bgload({ name: `BG20B2`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`10:21`);
showTextbox();
text(() => {
   `We left the Generator Room and went to the pipe room...`;

});
playSFX({ name: `SE10_16`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `There we opened the valve we had closed before the repairs...`;

});
stopSFX()
bgload({ name: `BG19B2`, transition: 20 });
showTextbox();
text(() => {
   `And returned to the Generator Room.`;

});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2B264)`"So should we try to fire it up?"`;
   `Takeshi whispered the question as we stood in front of the generator switch.`;
   Takeshi(S2B265)`"I'm turning it on."`;
   `Sara, You and I nodded silently.`;
   Takeshi(S2B266)`"You ready?"`;
   Kid`"Just do it."`;

});
fgload({ id: 1, name: `KB04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2B267)`"Pipe down, Kid."`;

});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2B268)`"How about a countdown..."`;
   Takeshi(S2B269)`"50 seconds to..."`;
   Sara(S2B270)`"Huh? From 50?"`;
   Takeshi(S2B271)`"45 seconds to..."`;
   `Takeshi continued, ignoring her.`;
   You(S2B272)`"Takeshi, that's too long..."`;
   Takeshi(S2B273)`"40...39...38..."`;
   `It was irritating.`;
   Takeshi(S2B274)`"37...36...35..."`;
   `So irritating....`;
   Takeshi(S2B275)`"34"`;

});
playSFX({ name: `SE04_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Click.`;

});
fgload({ id: 1, name: `KB06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `All three of us - except Takeshi - pushed the button.`;

});
playSFX({ name: `SE03_08`, a1: 0, volume: 100 });
fgload({ id: 1, name: `KB04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2B276)`"Hey! What're you doing? We still have 34 seconds to go!"`;
   Kid`"Nobody wants to wait 34 seconds. Somebody had to push it!"`;
   Takeshi(S2B277)`"You guys can't even wait a little more than a simple 30 seconds?"`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `KB06ADM`, name2: `YU04ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2B278)`"Why wait?"`;

});
fgload({ id: 1, name: `KB03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2B279)`"This...this is kind of like, a ritual...anyway, it's very important..."`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
playSFX({ name: `SE03_11`, a1: 0, volume: 100 });
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: false });
bgload({ name: `BG19B1`, transition: 26 });
multifgload2({ id1: 1, id2: 2, name1: `KB06ADM`, name2: `YU06ADM`, x1: 128, x2: 512, useAnim: false });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
setNumberOfFlash(2);
setFlashRGBColor(255, 255, 255);
triggerFlash();
showTextbox();
text(() => {
   `The lights lit up all at once.`;
   `The light poured down, illuminating even the corners of the room.`;
   `It was like our field of vision had expanded in an instant.`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SA05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S2B280)`"17..."`;

});
fgload({ id: 1, name: `KB07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2B281)`"What?"`;
   Sara(S2B282)`"The lights came on with 17 seconds left in the countdown."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S2B283)`"What are you talking about?"`;

});
fgload({ id: 2, name: `SA01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S2B284)`"You don't understand? The power came back on with 17 seconds left to count."`;
   Kid`"Oh, I see..."`;
   `I understood what she was saying.`;
   Kid`"You mean if we would have pushed it at 17 seconds, it would have been just right?"`;

});
fgload({ id: 2, name: `SA02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S2B285)`"Yeah."`;

});
fgload({ id: 1, name: `YU02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S2B286)`"Ah, ha, ha! That would have been something."`;
   Takeshi(S2B287)`"Tsk."`;
   `I wasn't sure if Takeshi was over his anger, but he shouldered the heavy toolbox and left the room.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `BG23B1`, transition: 26 });
playBGM({ num: 1, volume: 100 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
clock(`10:50`);
showTextbox();
text(() => {
   `We retraced our path until we were in front of the neutral buoyancy elevator.`;
   `The frozen tuna's empty eyes were waiting for us.`;
   `The elevator we had used coming down had already floated up to Zweite stock.`;
   `But to the left...the floor display was lit up with a number three.`;

});
bgload({ name: `BG24A2`, transition: 20 });
multifgload2({ id1: 1, id2: 2, name1: `SA01ADM`, name2: `KB01ADM`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2B288)`"Ummpmhh. That's heavy!"`;
   `Takeshi groaned as he put the toolbox on the floor of the elevator.`;

});
fgload({ id: 1, name: `SA07ADM`, x: 176, useAnim: true });
showTextbox();
text(() => {
   Sara(S2B289)`"You sound like an old man..."`;

});
fgload({ id: 2, name: `KB04ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2B290)`"Shut up. I AM an old man compared to you."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `While they needled each other I pushed the up button next to the door.`;
   `The internal and external watertight doors had already sealed automatically.`;

});
playSFX({ name: `SE10_17`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `We could hear air being sent into the ballast tank under the floor.`;
   `Finally, the egg-shaped elevator...`;

});
stopSFX()
showTextbox();
text(() => {
   `...didn't start to float up.`;

});
multifgload2({ id1: 1, id2: 2, name1: `SA07ADM`, name2: `KB06ADM`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2B291)`"Huh? Are you serious?"`;
   `The sound beneath the floor had stopped and silence had returned.`;
   Sara(S2B292)`"Not again..."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU07ADM`, x: 176, useAnim: true });
showTextbox();
text(() => {
   You(S2B293)`"Why do we keep running into problem after problem..."`;

});
playSFX({ name: `SE04_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Knowing it was useless, I pushed the up button repeatedly.`;

});
fgload({ id: 1, name: `YU03ADM`, x: 176, useAnim: true });
showTextbox();
text(() => {
   `Of course, EI didn't move an inch.`;

});
fgload({ id: 2, name: `KB03ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Kid`"Alright, so what do we do...?"`;
   `Just as I said that...`;

});
playSFX({ name: `SE03_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `A monitor just to the right of the round window flickered to life.`;
   Sora(S2B294)`"Takeshi, You, Sara, Kid."`;

});
if (l_know_sora_is_an_ai != 0) goto(lbl_00001aa0);
multifgload2({ id1: 1, id2: 2, name1: `YU02ADM`, name2: `KB04ADM`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2B295)`"Sora! Where have you been? We looked everywhere for you!"`;
   Sora(S2B296)`"I'm terribly sorry. Please accept my apologies."`;
   `The image of Sora in the monitor bowed deeply.`;

});
fgload({ id: 1, name: `YU07ADM`, x: 176, useAnim: true });
showTextbox();
text(() => {
   You(S2B297)`"That's not important right now."`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU01ADM`, name2: `KB05ADM`, x1: 176, x2: 464, useAnim: true });
goto(lbl_00001ac4);
let lbl_00001aa0;
multifgload2({ id1: 1, id2: 2, name1: `YU02ADM`, name2: `KB01ADM`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   `I didn't have any major suspicions about Sora's disappearance during the blackout.`;
   `I knew that she was an RSD-generated image.`;

});
let lbl_00001ac4;
showTextbox();
text(() => {
   You(S2B298)`"Sora? So we fixed the generator?"`;
   Sora(S2B299)`"It would appear so."`;
   Sora(S2B300)`"Thank you so much. Thank you..."`;

});
fgload({ id: 2, name: `KB01ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2B301)`"I think you know this, but we are in this egg...uh, this EI..."`;
   Sora(S2B302)`"Yes, I know."`;

});
fgload({ id: 1, name: `YU07ADM`, x: 176, useAnim: true });
showTextbox();
text(() => {
   Sora(S2B303)`"The EI is not moving, correct?"`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SA08ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Sara(S2B304)`"What should we do?"`;
   Sora(S2B305)`"First, in regard to the cause..."`;
   Sora(S2B306)`"It is likely the result of a decrease in internal air pressure that has made the device incapable of sufficiently expelling the seawater in the ballast tank."`;

});
fgload({ id: 2, name: `SA05ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Sora(S2B307)`"In other words..."`;
   Kid`"You mean it isn't buoyant enough?"`;

});
fgload({ id: 1, name: `YU05ADM`, x: 176, useAnim: true });
showTextbox();
text(() => {
   Sora(S2B308)`"Correct."`;
   Sora(S2B309)`"There are a number of feasible methods for making it rise, but..."`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `In the end, we decided to split into pairs to ride the elevator.`;
   `In line with the principle of Archimedes...if the buoyancy was insufficient, we had to lighten the load.`;
   `First, Sara and I got in EI.`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG23A1`, transition: 26 });
multifgload2({ id1: 1, id2: 2, name1: `TU08ADM`, name2: `SO02ADM`, x1: 128, x2: 512, useAnim: false });
playSFX({ name: `SE00_02`, a1: 0, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `Sora and Tsugumi were waiting at Zweite stock.`;
   Sora(S2B310)`"Good work you two."`;
   Tsugumi`"........."`;
   `Sora beamed a welcoming smile at us.`;
   `Tsugumi just stood there staring at Sara and me.`;

});
playSFX({ name: `SE00_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Next came You...`;
   `And then the Tuna took the elevator to return to our floor.`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `YU03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2B311)`"This is...c-c-cold..."`;

});
fgload({ id: 1, name: `TU10ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   `I noticed that when Tsugumi saw You cradling the frozen fish, she grinned for the first time.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `Sora on the other hand...`;

});
fgload({ id: 1, name: `SO03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S2B312)`"Takeshi! Are you alright?"`;
   `...Sora ran up next to the fish in a panic.`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SA08ADM`, name2: `YU03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S2B313)`"Uh, Nakkyu...you brought along the fish?"`;

});
fgload({ id: 2, name: `YU05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2B314)`"Of course. It's food after all. Waste not, want not, right?"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `SO03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S2B315)`"Forget that for now...more importantly...Takeshi..."`;
   `Sora was still flustered and babbling next to the fish.`;
   `I wondered if she really thought that Takeshi had turned into a tuna.`;

});
playSFX({ name: `SE00_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   Sora(S2B316)`"This is all my fault.... Oh my gosh! What can I do?"`;

});
fgload({ id: 2, name: `KB03ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2B317)`"Uh...I know you are occupied, but..."`;

});
fgload({ id: 1, name: `SO06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S2B318)`"Huh?"`;

});
fgload({ id: 2, name: `KB07ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2B319)`"I think the question is more what should I do."`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
delay({ interval: 120 });
if (l_know_sora_is_an_ai != 0) goto(lbl_00001d35);
l_choice = 0;
jump(`S_2C`);
let lbl_00001d35;
l_choice = 0;
jump(`SC2C`);
