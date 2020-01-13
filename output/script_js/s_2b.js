goto(lbl_0000104c).if(g_b3 == 1);
setDialogBoxColor(BLUE);
g_b0 = 5;
g_b1 = 2;
g_b2 = 2;
setSceneTitle({ index: 59 });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Before going for repairs, we had to secure 
tools.`;
   waitForClick; clearText; marker; appendText; 
   Narr`When the four of us ascended from Zweite stock 
we stopped by the warehouse first.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Fortunately, we found the tools we needed 
right away.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pliers, a spanner, a screwdriver, hammer, 
a small welding machine...etc., etc...`;
   waitForClick; clearText; marker; appendText; 
   Narr`We packed all of the tools we imagined we 
might need into a toolbox and headed for the 
neutral buoyancy elevator.`;
   waitForClick; clearText; 
});
bgload({ name: `BG23A2`, transition: 20 });
playBGM({ num: 3, volume: 100 });
clock(`7:5`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`- The neutral buoyancy elevator 'EI.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'EI' meant egg in German.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was also a literal take on the egg-shaped 
elevator that traveled up and down rails into 
the ocean on the side of LeMU.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A ballast tank was attached to the floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It would take in or release seawater from the 
tank as necessary to increase or reduce 
buoyancy, making the elevator rise or sink.`;
   waitForClick; clearText; 
});
bgload({ name: `BG24A3`, transition: 20 });
playSFX({ name: `SE00_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Once we were inside, we sealed the watertight 
doors on the LeMU side of the elevator.`;
   waitForClick; clearText; marker; appendText; 
   Narr`All we had to do was release the lock 
connecting us to LeMU and the 'egg' would 
sink away.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_10`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You pulled the operating lever next to the 
door.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Sara`"..."`;
   waitForClick; clearText; marker; appendText; 
   You`"..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Nothing happened.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU07ADM`, name2: `KB05ADM`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B000`); appendText; 
   Takeshi`"What's going on? We're not sinking at all."`;
   waitForClick; clearText; marker; sound(`S2B001`); appendText; 
   You`"No...it doesn't seem like it."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Do you think it is because the power is out?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B002`); appendText; 
   You`"No. The EI elevator is a neutral buoyancy 
elevator so it basically doesn't require 
outside power."`;
   waitForClick; clearText; marker; sound(`S2B003`); appendText; 
   You`"But it does need power for the intake and 
release of water for the ballast tank...this 
is the only time it needs power."`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SA05ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B004`); appendText; 
   Sara`"But we're in a blackout right now..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"...So there's no way to control the ballast 
valve - is that the problem?"`;
   waitForClick; clearText; marker; sound(`S2B005`); appendText; 
   You`"Yes."`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `KB04ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B006`); appendText; 
   Takeshi`"Oh, great. So that means we can't move this 
thing at all then!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADM`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B007`); appendText; 
   You`"Stupid. That's wrong. And you're supposed to 
be a college student?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB03ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B008`); appendText; 
   Takeshi`"Well, excuse me! So put it in terms I can 
understand."`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SA02ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B009`); appendText; 
   Sara`"Teacher! I know, I know!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02ADM`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B010`); appendText; 
   You`"Alright Ms. Matsunaga."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA01ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B011`); appendText; 
   Sara`"In order to use buoyancy to rise or sink, 
the weight of the elevator must exceed the 
buoyancy for the object to sink, or vice 
versa."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B012`); appendText; 
   You`"That's correct."`;
   waitForClick; clearText; marker; sound(`S2B013`); appendText; 
   You`"You figured it out too, Kid, right?"`;
   waitForClick; 
});
choice(
   `I got it`
   `I don't understand`
);
switch (choice) {
   case 0: goto(lbl_0000027d);
   case 1: goto(lbl_000002af);
}
let lbl_0000027d;
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Yeah. You mean Archimedes principle, right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"The buoyancy of a submerged object is equal 
to the weight of the liquid displaced by the 
object."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Right now, the buoyancy of the elevator is 
exactly balanced with the elevator's weight."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So if we make the elevator heavier, it will 
outweigh the buoyancy and the elevator will 
sink..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02ADM`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B014`); appendText; 
   You`"Wow! Good work you two! What brains!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You patted our heads as she praised us.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA02ADM`, x: 464, useAnim: true });
goto(lbl_00000342);
let lbl_000002af;
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Sorry...I don't get it at all."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADM`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B015`); appendText; 
   You`"Well, the Kid's lost his memory so it's to be 
expected."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B016`); appendText; 
   You`"Alright then, Mayo, how about an explanation?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA02ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B017`); appendText; 
   Sara`"Okay."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA01ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B018`); appendText; 
   Sara`"Archimedes principle states that the buoyant 
force on a submerged object is equal to the 
weight of the liquid displaced by the object."`;
   waitForClick; clearText; marker; sound(`S2B019`); appendText; 
   Sara`"That means that right now the buoyancy of the 
elevator is exactly balanced with the 
elevator's weight."`;
   waitForClick; clearText; marker; sound(`S2B020`); appendText; 
   Sara`"So if we make the elevator heavier, it will 
outweigh the buoyancy..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"And so the elevator will sink, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA02ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B021`); appendText; 
   Sara`"You got it."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02ADM`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B022`); appendText; 
   You`"Wow! Good work! Mayo you're so bright!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You patted Sara's head as she praised her.`;
   waitForClick; clearText; 
});
goto(lbl_00000342);
let lbl_00000342;
showTextbox();
text(() => {
   marker; sound(`S2B023`); appendText; 
   You`"Smart, smart girl!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13ADM`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B024`); appendText; 
   You`"...Not like some other people here."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA07ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So the reason that EI won't sink yet is that 
it is not heavy enough, right?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU01ADM`, name2: `SA02ADM`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B025`); appendText; 
   You`"Yes. We need to find something heavy..."`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`We split up and went in search of thing we 
could use as weights.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And several minutes later...`;
   waitForClick; clearText; 
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
   marker; sound(`S2B026`); appendText; 
   Takeshi`"Gggrrrrppphh!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi was carrying a massive planting pot.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B027`); appendText; 
   You`"Heave-ho, heave-ho..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You brought a plaster ornament.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And I brought a magazine holder and a bundle 
of magazines from the Security Office.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And Sara...`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SA08ADM`, name2: `KB06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B028`); appendText; 
   Sara`"Heave...heave..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pull, pull...`;
   waitForClick; clearText; marker; appendText; 
   Kid`"S-Sara? That's..."`;
   waitForClick; clearText; marker; sound(`S2B029`); appendText; 
   Takeshi`"What in the name of..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara...was dragging a massive tuna.`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `YU06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B030`); appendText; 
   You`"What...happened to that?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B031`); appendText; 
   Sara`"It was in the corridor over there."`;
   waitForClick; clearText; marker; sound(`S2B032`); appendText; 
   Sara`"I guess it probably washed out from the 
kitchen fridge during the flood."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B033`); appendText; 
   Sara`"It's a little cold, but it's okay, right?"`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`So, the four of us packed ourselves into EI 
and cradling a frozen tuna headed down to 
Dritte stock.`;
   waitForClick; clearText; marker; appendText; 
   Narr`EI began to inch down ever so slowly ...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Peeking through the window and into the blue 
we could see the outside of LeMU.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The blue gradually got darker and the steel 
bulkhead appeared to move further away upward.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Sara`"........."`;
   waitForClick; clearText; marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`We were silent during that time.`;
   waitForClick; clearText; marker; appendText; 
   Narr`What was there really to talk about?`;
   waitForClick; clearText; marker; appendText; 
   Narr`No, actually, You did say one thing...`;
   waitForClick; clearText; marker; sound(`S2B034`); appendText; 
   You`"Hey, wasn't catching dolphins for food banned 
under some international treaty?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed that You was having trouble with the 
difference between a dolphin and a tuna.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No one tried to answer her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I...decided not to think about anything.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`Dritte stock Sector 7 was another area sealed 
off because of flooding.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That was where we got off.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Once the four of us holding the tuna got off, 
EI lost its baggage and floated up to Zweite 
stock again.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh, no. What'll we do?.... We can't get back 
now."`;
   waitForClick; clearText; 
});
multifgload3({ name1: `SA01ADS`, name2: `KB06ADS`, name3: `YU01ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`S2B035`); appendText; 
   You`"No problem. There is one more EI. I checked 
and it is stopped on this floor."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh...that surprised the heck out of me..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB07ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B036`); appendText; 
   Takeshi`"HA,HA,HA.... If there wasn't another one, 
there is no way the four of us would ever 
come down here."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 4, name1: `SA05ADS`, name2: `YU07ADS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B037`); appendText; 
   Sara`"You sure? You seemed pretty petrified with 
fear yourself." `;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB04ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B038`); appendText; 
   Takeshi`"Zip it! I don't want any more lip from you!"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B039`); appendText; 
   You`"Alright, alright...enough of that. Let's get 
going."`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`We put the frozen tuna down and began walking 
toward the Generator Room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`This side of the area was also inundated with 
water from the flood.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was still bathed in darkness.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Blue light from the surface dimly pierced 
through the small round windows making 
a wave-like shadow on the floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The four of us relied on that and our 
flashlight as we proceeded deeper and deeper 
into the complex.`;
   waitForClick; clearText; 
});
bgload({ name: `BG26B4L`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`S2B040`); appendText; 
   Takeshi`"Hey...wait up!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`When we turned a corner, we heard Takeshi 
call out from behind us.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B041`); appendText; 
   You`"What are you doing? Hurry up. No dawdling or 
we'll leave you behind."`;
   waitForClick; clearText; marker; sound(`S2B042`); appendText; 
   Takeshi`"I'll show you dawdling! This toolbox weighs 
a ton!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Looking back there was Takeshi with the 
toolbox on the floor and breathing hard.`;
   waitForClick; clearText; marker; sound(`S2B043`); appendText; 
   You`"Geez. Gimme a break. Kid, give him a hand."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"A...alright."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I hurried to where Takeshi was.`;
   waitForClick; clearText; 
});
stopSFX()
fgload({ id: 1, name: `KB03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Takeshi, I'll help you."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B044`); appendText; 
   Takeshi`"Thanks. Take it from that side."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Okay."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The two of us took the toolbox from both sides.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B045`); appendText; 
   Takeshi`"Whew! Thanks. I thought my arms would fall 
off carrying it all alone."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Quit exaggerating..." `;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh, Takeshi! Watch out! There's a bump 
sticking out there!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B046`); appendText; 
   Takeshi`"Whoa! Th-that was close!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi was just able to right himself.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B047`); appendText; 
   Takeshi`"Whew. That surprised the bejeezers outta 
me... I just about fell down..."`;
   waitForClick; clearText; marker; sound(`S2B048`); appendText; 
   Takeshi`"Glad you noticed that, Kid. It being so dark 
and everything...good job."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Huh? You really think it's that dark...?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Takeshi, maybe you've got bad night vision."`;
   waitForClick; clearText; marker; sound(`S2B049`); appendText; 
   Takeshi`"Hmmm...could be."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B050`); appendText; 
   Takeshi`"What is it that causes that? Lack of vitamin 
A or something? I hate liver and carrots."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You shouldn't be so picky."`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`Finally as we caught up with You and Sara we 
reached our destination.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Yellow and black stripes appeared dimly ahead.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B051`); appendText; 
   Takeshi`"This it? This the Generator Room...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was a plate with information on the 
front of the door, but it was too dark to read.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B052`); appendText; 
   You`"I'll take a look."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You reached toward the door handle...`;
   waitForClick; clearText; 
});
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(!?)`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Wa-wait!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Instinctively I grabbed You's arm.`;
   waitForClick; clearText; 
});
multifgload3({ name1: `SA08ADS`, name2: `KB07ADS`, name3: `YU06ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`S2B053`); appendText; 
   You`"Wh-what? What is it...?"`;
   waitForClick; clearText; marker; sound(`S2B054`); appendText; 
   Takeshi`"?"`;
   waitForClick; clearText; marker; sound(`S2B055`); appendText; 
   Sara`"??"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi and Sara stared at me questioningly.`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B056`); appendText; 
   You`"What's the matter?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Uh...um...the thing is..."`;
   waitForClick; clearText; 
});
hideTextbox();
showDimOverlay();
playBGM({ num: 16, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I couldn't find the words to reply.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered why I had said what I had.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I really didn't know.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Yet, somehow...`;
   waitForClick; clearText; 
});
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"If you don't know what's going on inside, 
don't you think it might be dangerous to just 
open the door?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`...I was just rattling off what popped into 
my mind.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No, I hadn't even thought it. It just seemed 
to jump from my throat before anything else.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Kind of like when you snap your hand back 
after touching a hot stove.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I just reflexively blurted it out.`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B057`); appendText; 
   You`"What do you mean?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You wasn't buying it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took my hand from You's arm and searched 
for words.`;
   waitForClick; clearText; marker; appendText; 
   Narr`At that moment...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B058`); appendText; 
   Sara`"It's kind of like this..."`;
   waitForClick; clearText; marker; sound(`S2B059`); appendText; 
   Sara`"If a pipe carrying hot water burst, then the 
room could be full of hot steam maybe..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara took up the slack in my explanation.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 4, id2: 2, name1: `YU02ADS`, name2: `KB01ADS`, x1: 320, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(Oh, I see...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`While I sensed danger, I couldn't express 
in words what it might be.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The three of us nodded, satisfied.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB08ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B060`); appendText; 
   Takeshi`"Okay, let's give it a try."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi touched his hand to the wet floor. 
He went to place his damp fingers on the door.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE02_13`, a1: 0, volume: 100 });
multifgload3({ name1: `SA05ADS`, name2: `KB06ADS`, name3: `YU06ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The droplets sizzled, evaporating away.`;
   waitForClick; clearText; marker; sound(`S2B061`); appendText; 
   Takeshi`"It's true."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was just like Sara had said.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B062`); appendText; 
   Takeshi`"Wow...that was pretty sharp, Kid."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Uh...yeah."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I replied, but I hadn't really known it would 
be dangerous either.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The one who had known was a separate someone 
inside me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That someone had simply borrowed my voice.`;
   waitForClick; clearText; marker; appendText; 
   Narr`What had happened was so strange that it made 
me feel out of place in my own skin.`;
   waitForClick; clearText; marker; sound(`S2B063`); appendText; 
   Sara`"Anyway, with things as they stand, there's no 
going inside."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 4, id2: 2, name1: `YU07ADS`, name2: `KB05ADS`, x1: 320, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B064`); appendText; 
   Takeshi`"Ooh, shoot."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B065`); appendText; 
   You`"I'll say..."`;
   waitForClick; clearText; marker; sound(`S2B066`); appendText; 
   You`"First off let's close off all valves for 
pipes sending hot water to the Generator Room."`;
   waitForClick; clearText; marker; sound(`S2B067`); appendText; 
   You`"If we stop the flow of hot water, then steam 
should stop flowing to the room."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SA01ADS`, name2: `KB07ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B068`); appendText; 
   Sara`"Valves? Where are those?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B069`); appendText; 
   You`"In the room next door. Down one more corridor 
that way."`;
   waitForClick; clearText; marker; sound(`S2B070`); appendText; 
   You`"It won't require that many people...just me 
and...one more person to help."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB02ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B071`); appendText; 
   Takeshi`"Alright, leave it to me!"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU04ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B072`); appendText; 
   You`"Huh? Takeshi?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB04ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B073`); appendText; 
   Takeshi`"Hey! What's wrong with me?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B074`); appendText; 
   You`"It's just...that if we were alone I'm afraid 
you'll do something."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SA02ADS`, name2: `KB07ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B075`); appendText; 
   Takeshi`"Uh, that's..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B076`); appendText; 
   Sara`"Uh...maybe I should help?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B077`); appendText; 
   You`"Oh, no, that's okay. Mayo you wait here."`;
   waitForClick; clearText; marker; appendText; 
   Sara`"........."`;
   waitForClick; clearText; 
});
goto(lbl_00000a43).if(g_ba != 4);
g_b3 = 0;
jump(`SC2B`);
let lbl_00000a43;
fgload({ id: 2, name: `KB01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B078`); appendText; 
   Takeshi`"Hey, Kid. So what're you gonna do?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Huh? Me...?"`;
   waitForClick; 
});
choice(
   `I'll help You`
   `I'll wait here`
);
switch (choice) {
   case 0: goto(lbl_00000a7d);
   case 1: goto(lbl_00000ce2);
}
let lbl_00000a7d;
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"I'll help You."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA03ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B079`); appendText; 
   Takeshi`"Okay. In that case, Sara and I will hold down 
the fort here."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB05ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B080`); appendText; 
   Takeshi`"You can't complain about that, right?"`;
   waitForClick; clearText; marker; sound(`S2B081`); appendText; 
   You`"Okay."`;
   waitForClick; clearText; 
});
removeFG({ id: 4, useAnim: true });
fgload({ id: 2, name: `KB03ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B082`); appendText; 
   Takeshi`"Geez. Damned if I do, damned if I don't."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed that Takeshi was oblivious to his 
disturbing dream the night before.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I figure that You is concerned about you in 
her own way."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Like when she had you carry the heavy 
toolbox...maybe it was her way of saying 'rest 
a bit' or 'take it easy.'"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B083`); appendText; 
   Takeshi`"You think so? That's a pretty generous 
interpretation, I'd say."`;
   waitForClick; clearText; marker; sound(`S2B084`); appendText; 
   Takeshi`"Oh well. In that case, I guess Sara and 
I will just have sit back and relax - together."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi tried to pat Sara on the 
shoulder...but she dodged the advance.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B085`); appendText; 
   Sara`"Oh! You probably don't want to do that."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB07ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B086`); appendText; 
   Takeshi`"Huh?"`;
   waitForClick; clearText; marker; sound(`S2B087`); appendText; 
   Sara`"I'm a licensed Iga Ninja!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB06ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B088`); appendText; 
   Takeshi`"Wh-what's that?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA18ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B089`); appendText; 
   Sara`"It means, if you value your life, you'd 
better stay back!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB03ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`".........."`;
   waitForClick; clearText; 
});
setFGRenderOrder(1, 2, 4);
fgload({ id: 4, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B090`); appendText; 
   You`"Kid, should we get going?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Uh, yeah..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You and I left the increasingly tense 
atmosphere behind.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`The room was covered in a massive web of pipes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The pipes continued into the adjacent 
Generator Room. It seemed that by opening 
and closing the valves, the water and oil 
pressure could be adjusted.`;
   waitForClick; clearText; 
});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`'Normally LeMMIH is responsible for 
maintaining the Generator Room, but even 
LeMMIH can't do much when the generator 
itself goes out.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Anyhow, this is all because the power supply 
is down.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'This room is designed so that maintenance can 
be performed manually at times like this, or 
during blackouts.'`;
   waitForClick; clearText; 
});
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`...That was what You told me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You selected one pipe from the countless rows 
of them and instructed me to close its valve.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_16`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`As ordered, I turned the valve around and 
around.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey, You?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I said this as I was closing the valve.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B091`); appendText; 
   You`"What?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It's about the girl from yesterday."`;
   waitForClick; clearText; marker; sound(`S2B092`); appendText; 
   You`"Yesterday? You mean the seventh survivor you 
said you saw?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B093`); appendText; 
   You`"You're sure your eyes weren't playing tricks 
on you?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I'm positive. These eyes saw her."`;
   waitForClick; clearText; marker; sound(`S2B094`); appendText; 
   You`"Maybe you've got some kind of eye disease."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Huh? Dis....disease...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B095`); appendText; 
   You`"I'm kidding...it's a joke. Why do you always 
take everything seriously?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Enough already!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B096`); appendText; 
   You`"Alright, alright.... I'll listen to your 
stories of unidentified survivors later."`;
   waitForClick; clearText; marker; sound(`S2B097`); appendText; 
   You`"Right now we have to work."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Finally the valve was completely shut.`;
   waitForClick; clearText; 
});
hideTextbox();
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; sound(`S2B098`); appendText; 
   You`"That should do it."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You, can we talk now...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B099`); appendText; 
   You`"Let's get back to Takeshi and Sara."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You took off from the room as if she were a 
fugitive on the run.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was left in the room alone...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt an unclear mess of feelings stewing 
inside my mind.`;
   waitForClick; clearText; 
});
goto(lbl_00000f95);
let lbl_00000ce2;
g_e3 = 1;
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"I'll...wait here..."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 4, name1: `SA02ADS`, name2: `YU07ADS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B100`); appendText; 
   Takeshi`"So what are we going to do?"`;
   waitForClick; clearText; marker; sound(`S2B101`); appendText; 
   You`"Oh well...then I'll have to make do with 
Takeshi."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB05ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B102`); appendText; 
   Takeshi`"Geez. You're a piece of work. Can't you let 
your real feelings show?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B103`); appendText; 
   You`"Don't be getting any strange ideas. You do 
and I'll knock you down. Got it?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB08ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B104`); appendText; 
   Takeshi`"...Take it easy. There's no way I'd try 
anything, even by mistake."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`When the two of them disappeared at the far 
end of the corridor they were still going at 
it.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B105`); appendText; 
   Sara`"Those two..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B106`); appendText; 
   Sara`"I don't know, I think they make a pretty good 
couple, don't you?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Think so?"`;
   waitForClick; clearText; marker; sound(`S2B107`); appendText; 
   Sara`"Yeah. Nakkyu is the kind of person who tells 
people she likes what she really thinks...she 
speaks her mind."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hmmmm."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B108`); appendText; 
   Sara`"Takeshi kind of seems like that, too."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wasn't sure why...but somehow I was a little 
jealous of You and Takeshi.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Even if I wanted to, I couldn't open up to 
anyone like that...I had nothing to share...`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`A while after the two had disappeared...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara and I hadn't spoken another word.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The two of us just leaned against a wall and 
stared into the darkness.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was desperately trying to think of some way 
to break through the wall that had formed 
between us.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara, how old are you?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Finally the words tumbled out of my mouth.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 6, volume: 100 });
fgload({ id: 1, name: `SA06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B109`); appendText; 
   Sara`"Where did that come from...? I thought 
I told you?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I don't think so."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B110`); appendText; 
   Sara`"I'm a junior. I'm 16 and was born January 21. 
Oh, and I'm an Aquarius."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara rattled it off so smoothly she might have 
been singing a song she knew.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B111`); appendText; 
   Sara`"And you, Kid?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I'm..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know.`;
   waitForClick; clearText; marker; appendText; 
   Narr`When I tried to remember, it was like my mind 
would fog over.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't get close to it. It was like a 
mirage in the desert.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I...wonder how old I am."`;
   waitForClick; clearText; marker; sound(`S2B112`); appendText; 
   Sara`"You don't know that either?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Nope."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B113`); appendText; 
   Sara`"Hmmm, that's kind of sad."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B114`); appendText; 
   Sara`"But maybe it's good in a way."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What do you mean?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA17ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B115`); appendText; 
   Sara`"Well, maybe it was something that you wanted 
to forget about......"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA09ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B116`); appendText; 
   Sara`"Just kidding."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara's expression relaxed into a silly look.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Wh-what...don't scare me like that."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B117`); appendText; 
   Sara`"Sorry."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B118`); appendText; 
   Sara`"I know. Maybe if I chopped you down, we'd 
find out how old you are."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Huh?"`;
   waitForClick; clearText; marker; sound(`S2B119`); appendText; 
   Sara`"You know, maybe you've got rings like a tree 
stump."`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`For some reason my eyes strayed to the palms 
of my hands.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the darkness only dimly illuminated by the 
emergency lights my fingers appeared to glow 
slightly white.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I still didn't know what had happened to my 
finger...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B120`); appendText; 
   Sara`"Your finger..."`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`Muttering this, Sara grabbed my finger.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was so sudden it put me at a loss for words.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the darkness Sara whispered words as if 
confirming something as she gripped my thumb.`;
   waitForClick; clearText; marker; sound(`S2B121`); appendText; 
   Sara`"Moon sprite...shouldering...a long bow..."`;
   waitForClick; clearText; marker; sound(`S2B122`); appendText; 
   Sara`"Waiting...inside a dream..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`............`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What does that mean?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara just shook her head. There was no sign 
that she was going to answer me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She just murmured the words like a spell or a 
nursery rhyme as she held my thumb gently.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(A moon sprite...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered why Sara had suddenly grabbed my 
thumb.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Still, I didn't have any urge to pull it away 
from her...`;
   waitForClick; clearText; marker; appendText; 
   Narr`As I remained aware of my thumb, I searched 
for an answer from Sara's slightly sweaty, 
warm palm.`;
   waitForClick; clearText; 
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
   marker; sound(`S2B123`); appendText; 
   You`"We're back."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU02ADM`, name2: `KB01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B124`); appendText; 
   Takeshi`"I think we'll be okay now."`;
   waitForClick; clearText; marker; sound(`S2B125`); appendText; 
   You`"It was a hassle looking for the valve, but..."`;
   waitForClick; clearText; 
});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`With the two back, Sara finally released my 
thumb.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the darkness I couldn't very well make out 
Sara's expression.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The area around Sara's mouth pulled slightly 
down, as if she were sad.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Warmth lingered around my thumb....`;
   waitForClick; clearText; marker; appendText; 
   Narr`I don't know why, but I hesitated to wipe the 
warmth away and gently inserted my hand into 
my pocket leaving my thumb extended.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`With this we would be able to shut off the 
hot water flowing to the Generator Room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Even so, on the other side of the door, it was 
still hot enough to scald.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The four of us waited outside the Generator 
Room until we could be sure that the 
temperature inside had cooled enough.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`When we thought the time had come, we timidly 
opened the door.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was like opening the door to a steam bath - 
a cloud of steam hissed out of the door.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`The heat inside just about defied imagination.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The air in the steam-filled room was heavy and 
stuck to the skin.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Inhaling felt like swallowing globs of sticky 
hot steam.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi was opening and closing his mouth like 
a fish out of water.`;
   waitForClick; clearText; 
});
let lbl_0000104c;
multifgload2({ id1: 1, id2: 2, name1: `YU05ADM`, name2: `KB07ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B126`); appendText; 
   Takeshi`"Isn't it hard to breathe?"`;
   waitForClick; clearText; marker; sound(`S2B127`); appendText; 
   You`"Stop pointing out the obvious! Talking about 
it just makes it worse!"`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SA05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B128`); appendText; 
   Sara`"Nakkyu...let's just do what we have to do and 
get out of here."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B129`); appendText; 
   You`"Alright. Let's divide up what we have to do 
and be efficient about this."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B130`); appendText; 
   You`"I'll be here. Takeshi, can I get you to go 
over there? Kid, I want you to..."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And so we got to work fixing the generator.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
stopBGM();
closeFog2();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
goto(lbl_00001116).if(g_e3 == 0);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi and You tackled the main work.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was hardly anything for Sara and myself 
to do as we knew squat about machines.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We functioned as assistants, shining 
flashlights, handing over tools and loosening 
valves as instructed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`After this and that, we succeeded in repairing 
the generator.`;
   waitForClick; clearText; 
});
goto(lbl_0000164f);
let lbl_00001116;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi and You did the bulk of the work.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There wasn't much for Sara or me to do, 
because we were helpless when it came to 
machines.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi and Sara were working on the other 
side of the generator.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You was doing battle with the machine and 
depending on my flashlight wielding skills. `;
   waitForClick; clearText; marker; appendText; 
   Narr`With nothing much to do, my mind started 
wandering.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And of course they led right to the girl that 
had disappeared.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I just couldn't believe that I had imagined 
the whole thing.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Kid`"Hey, you know, I've thought a lot about it..."`;
   waitForClick; clearText; marker; sound(`S2B131`); appendText; 
   You`"What?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"About the girl."`;
   waitForClick; clearText; marker; sound(`S2B132`); appendText; 
   You`"What? You still stuck on that?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Just listen."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Maybe that girl..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Maybe she is a ghost."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU02B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`S2B133`); appendText; 
   You`"Huh?"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU02A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You gave me a fed up look, shook her head and 
went back to work.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"That's gotta be it!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"That would explain why the numbers change so 
irregularly and why she vanished all of the 
sudden."`;
   waitForClick; clearText; marker; sound(`S2B134`); appendText; 
   You`"That's stupid..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Listen! I'm serious."`;
   waitForClick; clearText; marker; sound(`S2B135`); appendText; 
   You`"No."`;
   waitForClick; clearText; marker; sound(`S2B136`); appendText; 
   You`"If you were talking about something serious, 
I would take you serious."`;
   waitForClick; clearText; marker; sound(`S2B137`); appendText; 
   You`"But I'm not listening seriously to something 
like this. Stupidity is contagious."`;
   waitForClick; clearText; marker; sound(`S2B138`); appendText; 
   You`"It's like multiplication of plusses and 
minuses..."`;
   waitForClick; clearText; marker; sound(`S2B139`); appendText; 
   You`"A plus times a plus is a plus."`;
   waitForClick; clearText; marker; sound(`S2B140`); appendText; 
   You`"But a minus times a plus is a minus..."`;
   waitForClick; clearText; marker; sound(`S2B141`); appendText; 
   You`"So, pass me that minus-like screwdriver, 
would you?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I suppressed my anger and put the flat-head 
screwdriver in You's hand.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Okay then, you don't have to listen 
seriously."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Just listen to me stupidly."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU02B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`S2B142`); appendText; 
   You`"What's that mean? Listen stupidly..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It's multiplication, right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"A minus times a minus is a plus, right?"`;
   waitForClick; clearText; marker; sound(`S2B143`); appendText; 
   You`"I see."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU02C`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`S2B144`); appendText; 
   You`"Alright, then. I'll listen to the stupid 
stuff you've got to say until I finish 
screwing in these screws."`;
   waitForClick; clearText; marker; sound(`S2B145`); appendText; 
   You`"So? What is it you're dying to say?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It's about the girl that disappeared."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"If she were a ghost..."`;
   waitForClick; clearText; marker; sound(`S2B146`); appendText; 
   You`"Hold on. Now, do you really believe in 
ghosts?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I wouldn't say believe. But believe in the 
possibility..."`;
   waitForClick; clearText; marker; sound(`S2B147`); appendText; 
   You`"Zero. That is what possibility there is. 
0.00000000000000001 percent, maybe."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"How do you know?" `;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU02A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You sighed and started turning the next screw.`;
   waitForClick; clearText; marker; sound(`S2B148`); appendText; 
   You`"Listen. Ghost stories now and forever are 
almost all made up."`;
   waitForClick; clearText; marker; sound(`S2B149`); appendText; 
   You`"They are just fiction with the goal of 
entertaining people."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But haven't you ever felt somebody's eyes on 
you when you were in a room all alone?"`;
   waitForClick; clearText; marker; sound(`S2B150`); appendText; 
   You`"Eyes?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah. Like someone was watching you from 
behind..."`;
   waitForClick; clearText; marker; sound(`S2B151`); appendText; 
   You`"You mean your mom?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I'm being serious...oh, never mind."`;
   waitForClick; clearText; marker; sound(`S2B152`); appendText; 
   You`"Things like that are just your imagination."`;
   waitForClick; clearText; marker; sound(`S2B153`); appendText; 
   You`"A product of an overzealous mind. An illusion 
spawned by the mental state of the person."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You mean, my mind is playing tricks on me?"`;
   waitForClick; clearText; marker; sound(`S2B154`); appendText; 
   You`"To be perfectly blunt - yes."`;
   waitForClick; clearText; marker; sound(`S2B155`); appendText; 
   You`"UFOs and goblins are the same thing. People 
like to imagine stuff."`;
   waitForClick; clearText; marker; sound(`S2B156`); appendText; 
   You`"Thanks to the power of imagination, people 
have been able to evolve to where we are, but 
it's kind of a curse, too."`;
   waitForClick; clearText; marker; sound(`S2B157`); appendText; 
   You`"Taken to extremes, there is no distinguishing 
between reality and illusions."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`S2B158`); appendText; 
   You`"When you turn on the lights, the ghost is 
only a shirt on a chair."`;
   waitForClick; clearText; marker; sound(`S2B159`); appendText; 
   You`"People who want to be scared see what they 
want."`;
   waitForClick; clearText; marker; sound(`S2B160`); appendText; 
   You`"If you really want to believe that something 
exists, even if it doesn't, then you still 
feel that it does."`;
   waitForClick; clearText; marker; sound(`S2B161`); appendText; 
   You`"If you are scared of something, you'll scare 
yourself even if there is nothing there."`;
   waitForClick; 
});
choice(
   `Keep arguing`
   `Give up`
);
switch (choice) {
   case 0: goto(lbl_000011d6);
   case 1: goto(lbl_000011df);
}
let lbl_000011d6;
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"What about kanashibari? How do you explain 
that?"`;
   waitForClick; clearText; marker; sound(`S2B162`); appendText; 
   You`"Kanashibari?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"When you wake up and you can't move."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Is that just a person's mind, too?"`;
   waitForClick; clearText; marker; sound(`S2B163`); appendText; 
   You`"They probably can't move because somebody 
tied them up when they were asleep."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Who?"`;
   waitForClick; clearText; marker; sound(`S2B164`); appendText; 
   You`"Some S&M freak."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"As if that could happen!"`;
   waitForClick; clearText; marker; sound(`S2B165`); appendText; 
   You`"I'm kidding..."`;
   waitForClick; clearText; marker; sound(`S2B166`); appendText; 
   You`"You're talking about when your body is still 
asleep, but your mind is awake."`;
   waitForClick; clearText; marker; sound(`S2B167`); appendText; 
   You`"So that even though you're conscious, your 
body won't move."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What about the people that say they wake up 
and saw a ghost on top of them?"`;
   waitForClick; clearText; marker; sound(`S2B168`); appendText; 
   You`"They think their eyes are open, but it's 
really just a dream."`;
   waitForClick; clearText; marker; sound(`S2B169`); appendText; 
   You`"Because the brain is fully awake and the 
body won't do what it's told, a person feels 
fear. These two things happen at the same 
time..."`;
   waitForClick; clearText; marker; sound(`S2B170`); appendText; 
   You`"So even the most incredible dream seems like 
reality."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`S2B171`); appendText; 
   You`"I just told you, right? If you really, really 
believe something then even reality seems like 
an illusion."`;
   waitForClick; clearText; 
});
goto(lbl_000011e8);
let lbl_000011df;
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wasn't satisfied, but I had learned 
something - `;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't beat You in a debate.`;
   waitForClick; clearText; 
});
goto(lbl_000011e8);
let lbl_000011e8;
bgload({ name: `EV_YU02C`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`S2B172`); appendText; 
   You`"So? Doesn't look like you're convinced."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You can't convince me. I know...I saw her."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"At least I saw something."`;
   waitForClick; clearText; marker; sound(`S2B173`); appendText; 
   You`"Don't go telling me you have special powers 
to see spirits or anything either."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU02B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`S2B174`); appendText; 
   You`"You're not gonna say it, right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU02A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`S2B175`); appendText; 
   You`"Alright, alright."`;
   waitForClick; clearText; marker; sound(`S2B176`); appendText; 
   You`"But no spinning your head around 360 degrees 
or spewing out ectoplasmic goo. Alright?"`;
   waitForClick; clearText; marker; sound(`S2B177`); appendText; 
   You`"And no supernatural tricks or channeling 
spirits either."`;
   waitForClick; clearText; marker; sound(`S2B178`); appendText; 
   You`"Because if a poltergeist gets loose around 
here, the screws I just put in could fall out."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"For not believing this stuff, you sure know a 
lot about it."`;
   waitForClick; clearText; marker; sound(`S2B179`); appendText; 
   You`"It's because I don't believe in it, that 
I know a lot."`;
   waitForClick; clearText; marker; sound(`S2B180`); appendText; 
   You`"My knowledge is not for defensive purposes."`;
   waitForClick; clearText; marker; sound(`S2B181`); appendText; 
   You`"It's for offensive ones."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Huh?"`;
   waitForClick; clearText; marker; sound(`S2B182`); appendText; 
   You`"I mean, there are those people that swear by 
ghosts, the supernatural, UFOs and that occult 
stuff. They're completely loony."`;
   waitForClick; clearText; marker; sound(`S2B183`); appendText; 
   You`"My knowledge is so I can take them down, when 
I meet them."`;
   waitForClick; clearText; marker; sound(`S2B184`); appendText; 
   You`"I've stocked up on enemy information for 
my verbal assaults."`;
   waitForClick; clearText; marker; sound(`S2B185`); appendText; 
   You`"That's the reason I majored in archaeology."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Archaeology?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Archaeology...I thought that was about 
digging, looking for artifacts, ruins and 
deciphering ancient letters. That kind of 
stuff, right?"`;
   waitForClick; clearText; marker; sound(`S2B186`); appendText; 
   You`"Well, maybe."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You studying archaeology...it just didn't click.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So what are you studying?"`;
   waitForClick; clearText; marker; sound(`S2B187`); appendText; 
   You`"I'm not doing anything that big. I'm still a 
freshmen so I'm only taking basic stuff."`;
   waitForClick; clearText; marker; sound(`S2B188`); appendText; 
   You`"I just listen to professors lecture and go on 
excavation surveys. I'm still getting the 
fundamentals of 'What is archaeology?' pounded 
into my head."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hmmm."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh, that reminds me. Speaking of 
archaeology...You, have you ever 
heard of the continent Lemuria?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It seems like it is the origin of LeMU's 
name."`;
   waitForClick; clearText; marker; sound(`S2B189`); appendText; 
   You`"Have I heard of it?.... I know so much about 
it that it makes me nuts."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"??"`;
   waitForClick; clearText; marker; sound(`S2B190`); appendText; 
   You`"Lemuria is the phantom continent that is said 
to have existed from 200 million to 50 million 
years B.C."`;
   waitForClick; clearText; marker; sound(`S2B191`); appendText; 
   You`"On it thrived an advanced civilization that 
was more advanced than what we have today. 
But overnight it just slipped down to 
the bottom of the ocean."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You recited it off so fluently that it 
sounded like she was reading from a textbook.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Advanced civilization...overnight...huh?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(That sounds just like...)`;
   waitForClick; clearText; marker; sound(`S2B192`); appendText; 
   You`"There are some scholars that contend that 
this continent was the origin of mankind."`;
   waitForClick; clearText; marker; sound(`S2B193`); appendText; 
   You`"But what could they be talking about? 
That could never happen."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You don't believe it?"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU02C`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`S2B194`); appendText; 
   You`"Of course not. Archaeologically and 
geologically the idea has no basis."`;
   waitForClick; clearText; marker; sound(`S2B195`); appendText; 
   You`"The more real research is conducted, the more 
the theory is shot full of holes...it's no 
longer a legitimate field of study."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Is that right...?"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU02A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`S2B196`); appendText; 
   You`"Reality is different than a fairy tale."`;
   waitForClick; clearText; marker; sound(`S2B197`); appendText; 
   You`"Religion is like that, too. Any and all those 
mysterious things that people get all worked 
up about. They're mostly all make believe."`;
   waitForClick; clearText; marker; sound(`S2B198`); appendText; 
   You`"'They're all impossible to prove, so who 
cares what they say?' - that's the 
philosophy behind it."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought that maybe precisely because there 
was no evidence for or against that what 
people said was actually packed with meaning.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt like that because those words were the 
only foothold, the only way to really nail 
down reality.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I absently thought about this for a minute.`;
   waitForClick; clearText; marker; sound(`S2B199`); appendText; 
   You`"Hmmmmgggr...this screw is really tight."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Let me try."`;
   waitForClick; clearText; 
});
bgload({ name: `BG19B2`, transition: 20 });
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We switched places and I tried twisting the 
screw into place.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B200`); appendText; 
   You`"Ohhhh. I'm beat...my shoulders are stiff and 
everything."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You twisted and stretched. Her back popped 
loudly.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey. You know what we were just talking 
about..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B201`); appendText; 
   You`"What was that? Oh, Lemuria?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B202`); appendText; 
   You`"Kid...you're not one of those people that get 
all into these stories, are you?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I...I don't know about that. But since we've 
got time to kill, just humor me."`;
   waitForClick; clearText; marker; sound(`S2B203`); appendText; 
   You`"Alright, alright. What is it?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Okay. I wonder if Lemuria angered God and he 
sent it to the bottom of the ocean?"`;
   waitForClick; clearText; marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I mean, if the people of Lemuria had such an 
advanced civilization, maybe God struck them 
down for their pride or something..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Huh? You?"`;
   waitForClick; clearText; marker; appendText; 
   You`"..............."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hellllllllloooooo?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B204`); appendText; 
   You`"This is bad. DANGER, DANGER! I'm putting 
myself in danger of being dragged into lunacy 
with you."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B205`); appendText; 
   You`"Stupid...stupid..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU18ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B206`); appendText; 
   You`"Alright. I should be fine now."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"..."`;
   waitForClick; clearText; 
});
hideTextbox();
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
playBGM({ num: 14, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`S2B207`); appendText; 
   You`"Okay, okay. I see what you're saying. You are 
saying that it was like the Tower of Babel, 
right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Tower of Babel?"`;
   waitForClick; clearText; marker; sound(`S2B208`); appendText; 
   You`"In the old testament, in Genesis there is 
this story about this tower."`;
   waitForClick; clearText; marker; sound(`S2B209`); appendText; 
   You`"In it, people are so proud of their 
achievements that they build this super high 
tower...this massive structure that almost 
reached to heaven."`;
   waitForClick; clearText; marker; sound(`S2B210`); appendText; 
   You`"But God was angered by their behavior."`;
   waitForClick; clearText; marker; sound(`S2B211`); appendText; 
   You`"God said, 'I will bring down their pride 
together with the trickery of their hands. 
They are impudent.'"`;
   waitForClick; clearText; marker; sound(`S2B212`); appendText; 
   You`"So God took it upon himself to destroy the 
tower and the building stopped, and people 
spread to all corners of the earth."`;
   waitForClick; clearText; marker; sound(`S2B213`); appendText; 
   You`"That's the story of the Tower of Babel."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah. That's what I'm talking about."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I nodded without stopping my work.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B214`); appendText; 
   You`"That would have to be the work of a God like 
Shiva."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Shiva?"`;
   waitForClick; clearText; marker; sound(`S2B215`); appendText; 
   You`"The God of destruction and creation."`;
   waitForClick; clearText; marker; sound(`S2B216`); appendText; 
   You`"One of the main three Hindu gods. He has 
more than a thousand names, four arms, four 
faces and three eyes."`;
   waitForClick; clearText; marker; sound(`S2B217`); appendText; 
   You`"He destroys the world for purposes of 
creation..."`;
   waitForClick; clearText; marker; sound(`S2B218`); appendText; 
   You`"The destruction is so thorough that in it is 
contained the seeds or possibility of the next 
generation."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Kind of like starting from square one is 
better than fixing something halfway?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B219`); appendText; 
   You`"Probably something like that."`;
   waitForClick; clearText; marker; sound(`S2B220`); appendText; 
   You`"So if Lemuria had pissed off a god enough to 
sink it into the ocean, then that god would 
probably have demolished it."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh, I see..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`(A god that would purge the world of filth by 
destroying it...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(A god that damned people drunk with pride, 
and forced rebirth...)`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B221`); appendText; 
   You`"Look! You're slowing down. Hurry up and 
finish up."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I'm already done."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had finished putting in all of the screws.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B222`); appendText; 
   You`"Next tighten these bolts."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I handed the screwdriver to her and took 
the wrench.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Somewhere along the line, I had been put in 
charge of the work.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`When You pointed the flashlight near me, I saw 
three bolts in the shape of a triangle.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Did you say that Shiva has three eyes?"`;
   waitForClick; clearText; marker; sound(`S2B223`); appendText; 
   You`"Yup."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"That means..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I put the wrench between my eyebrows.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"He'd have another eye right here then?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B224`); appendText; 
   You`"That's right."`;
   waitForClick; clearText; marker; sound(`S2B225`); appendText; 
   You`"The light from that third eye burns all in 
the world, purifying it."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Wow.... That sounds pretty cool."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I said that as I tightened the top bolt.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But, I bet a visit to the optometrist would 
be a pain."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B226`); appendText; 
   You`"You'd have to buy another lens so the 
optometrist would love it."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought to myself that making the custom 
frame is what would cost a fortune. 
But I didn't dare say it.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B227`); appendText; 
   You`"That is enough of that..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B228`); appendText; 
   You`"But the idea of a third eye is not limited to 
Shiva. It also exists in the world of Buddhism 
and Yoga."`;
   waitForClick; clearText; marker; sound(`S2B229`); appendText; 
   You`"Clairvoyance, telescopic vision, ghost sense, 
the gift of the prophet, the power of seeing 
the past or future..."`;
   waitForClick; clearText; marker; sound(`S2B230`); appendText; 
   You`"There are a lot of explanations behind it. 
Some say it is a gift from the gods, others 
that you can acquire it from intensive 
training. But what they all have in common is.."`;
   waitForClick; clearText; marker; appendText; 
   Narr`When the third eye opens, true wisdom is 
apparent and all becomes visible.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B231`); appendText; 
   You`"They all have something to do with 
transcending the realm of the human...becoming 
superhuman somehow."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Real wisdom..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Muttering that I turned to face the bolt again.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(If I had that, I'd be able to get back my 
memory...yeah right...)`;
   waitForClick; clearText; marker; appendText; 
   Kid`"If there really is such a thing, I want one."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S2B232`); appendText; 
   You`"You want what? .... A third eye?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah. If I had one, maybe I could see my 
past. And maybe I'd know who that girl is."`;
   waitForClick; clearText; marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Anyway, I'd like to see what it is like."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S2B233`); appendText; 
   You`"You want to see?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah. Maybe I could see something."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S2B234`); appendText; 
   You`"Shall I give you a look then?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And there...`;
   waitForClick; clearText; 
});
hideTextbox();
fgload({ id: 1, name: `YU01ADL`, x: 320, useAnim: true });
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Was You's face.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Wh-when did she get so close?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`We were at a distance where could just about 
feel each other's breath.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The tips of our noses just about touched - 
that's how close her face was.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Y-You...?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S2B235`); appendText; 
   You`"You want to see, right?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You stared me in the eye as she said this.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't speak. My legs shook.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My heart was beating as fast as it would go. 
It felt like it would jump right out of 
my chest.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S2B236`); appendText; 
   You`"Now take a good look."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You lifted up her bangs and placed her 
finger on her forehead.`;
   waitForClick; clearText; marker; sound(`S2B237`); appendText; 
   You`"Right here, isn't it?"`;
   waitForClick; clearText; marker; sound(`S2B238`); appendText; 
   You`"The third eye..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`On You's face...`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was nothing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`All I could think about was her nice skin and 
sweet smell.`;
   waitForClick; clearText; marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU09ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B239`); appendText; 
   You`"Ah! Ha, ha, ha, ha!"`;
   waitForClick; clearText; 
});
playBGM({ num: 5, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You grabbed her stomach, laughing.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Huh? What?"`;
   waitForClick; clearText; marker; sound(`S2B240`); appendText; 
   You`"It's a JOKE! A JOKE!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What...?"`;
   waitForClick; clearText; marker; sound(`S2B241`); appendText; 
   You`"Ha, ha, ha! That was too funny."`;
   waitForClick; clearText; marker; sound(`S2B242`); appendText; 
   You`"Who else would take that completely 
seriously...you're the best."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You're...you're so mean...You."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You tease me even though you know how serious 
I am."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B243`); appendText; 
   You`"Sorry! Oh, I'm sorry! But you keep saying one 
bizarre thing after another, so I just 
couldn't help playing a joke on you."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B244`); appendText; 
   You`"Besides...what I said wasn't really a lie 
anyway."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Saying that, You pointed to her forehead again.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What do you mean?"`;
   waitForClick; clearText; 
});
hideTextbox();
hideTextbox();
NVL_Mode();
showDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I wondered why we had two eyes.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Common knowledge had it that physically two 
eyes were enough for gauging the distance to 
a point or focusing on something.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`But what would it be like if we really used 
to have three eyes?`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Actually...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`The animal ancestors of vertebrates had 
three eyes.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Early species of primitive reptiles...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Like the tuatara lizard that still has a 
third eye on the top of its head.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The third eye...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`
`;
   
});
showTextbox();
text(() => {
   appendText; 
   Narr`The organ has a similar function to the 
eyeball and lies on the top of the head.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`This organ would be sensitive to the light of 
the outside world and control internal hormone 
secretion and balance based on light.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`An eye on the crest of one's head would stare 
straight up. It seemed safe to say that it 
would sense the difference in light between 
day and night.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`A right eye, a left eye and one above...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`An eye on the top of the head to stare at the 
sky.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Only we people and higher vertebrates had lost 
the third eye over a long process of 
evolution. It had been covered over by the 
cerebrum and we lost our ability to sense 
light directly.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Therefore we had two light sensitive eyeballs, 
one on each side, instead.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`This lost third eye was called a 'pineal body.'`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`This had functioned in the brain for eons and 
was responsible for secreting hormones that 
helped carve out our 24-hour rhythm.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`What we called our internal clocks existed 
because of this pineal body. `;
   waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`...that was essentially the rundown that You 
gave me as I was tightening the bolts.`;
   waitForClick; clearText; marker; sound(`S2B245`); appendText; 
   You`"So the third eye in terms of human anatomical 
science is really no big deal."`;
   waitForClick; clearText; marker; sound(`S2B246`); appendText; 
   You`"It's just an organ we lost through 
evolution..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You mean like an appendix or the webbing 
between fingers?"`;
   waitForClick; clearText; marker; sound(`S2B247`); appendText; 
   You`"That's exactly what I mean."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I finished with the bolt."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B248`); appendText; 
   You`"Okay. Well then our work here is done."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU12ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B249`); appendText; 
   You`"Oh...I'm tired."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You stretched as she said this.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I put both hands on my waist and stretched.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We were both drenched in sweat.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Hey, I was wondering..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B250`); appendText; 
   You`"What?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So that occult stuff that you were just 
telling me about is for offensive purposes, 
too?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B251`); appendText; 
   You`"Well...it's not really for offensive or 
defensive use."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B252`); appendText; 
   You`"It's just a load of useless knowledge."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B253`); appendText; 
   You`"Still, I can't very well just throw it away."`;
   waitForClick; clearText; marker; sound(`S2B254`); appendText; 
   You`"Maybe it has completely rooted itself into my 
brain."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But you planted it there yourself, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B255`); appendText; 
   You`"No way!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B256`); appendText; 
   You`"My mom's the guilty one."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Your mom?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B257`); appendText; 
   You`"Yes. My mom's an archaeology researcher."`;
   waitForClick; clearText; marker; sound(`S2B258`); appendText; 
   You`"Apparently she's an expert in the ancient 
concept of the third eye..."`;
   waitForClick; clearText; marker; sound(`S2B259`); appendText; 
   You`"Anyway, when I was little, instead of 
lullabies she told me all these third eye 
stories."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Wow..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Hmmm? The third eye?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`How about that? I wondered if the third eye 
could be related to something.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought I would ask about possible 
connections, but my mind and body were 
completely drained.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Oh well...I'll save it for next time.)`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B260`); appendText; 
   You`"I used to hate archaeology..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You sighed as she said this.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B261`); appendText; 
   You`"But one day I just woke up and found myself 
in the archaeology department."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Like mother, like daughter?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B262`); appendText; 
   You`"It's not that simple."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You's shoulders slumped and she let go a deep 
sigh again.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B263`); appendText; 
   You`"It's like some kind of curse."`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`Soon after that, it looked like Takeshi and 
Sara had finished their work as well.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Well, it had turned into an adventure, but at 
least we had finished the repairs.`;
   waitForClick; clearText; 
});
let lbl_0000164f;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It was just like Sara had said. The cause of 
the blackout was the opening of the safety 
valve due to the drop in air pressure.`;
   waitForClick; clearText; marker; appendText; 
   Narr`'When pressure from the steam becomes 
excessive, the valve automatically opens to 
release the gas and prevent damage.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Normally after a release of surplus gas, the 
valve is designed to shut naturally...but 
we're only at 1 atmosphere.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Because the safety valve never closed, the 
steam continued leaking.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`...Anyway, that was the gist of the 
explanation.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`We left the Generator Room and went to the 
pipe room...`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_16`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`There we opened the valve we had closed 
before the repairs...`;
   waitForClick; clearText; 
});
stopSFX()
bgload({ name: `BG19B2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And returned to the Generator Room.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B264`); appendText; 
   Takeshi`"So should we try to fire it up?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi whispered the question as we stood in 
front of the generator switch.`;
   waitForClick; clearText; marker; sound(`S2B265`); appendText; 
   Takeshi`"I'm turning it on."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara, You and I nodded silently.`;
   waitForClick; clearText; marker; sound(`S2B266`); appendText; 
   Takeshi`"You ready?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Just do it."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B267`); appendText; 
   Takeshi`"Pipe down, Kid."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B268`); appendText; 
   Takeshi`"How about a countdown..."`;
   waitForClick; clearText; marker; sound(`S2B269`); appendText; 
   Takeshi`"50 seconds to..."`;
   waitForClick; clearText; marker; sound(`S2B270`); appendText; 
   Sara`"Huh? From 50?"`;
   waitForClick; clearText; marker; sound(`S2B271`); appendText; 
   Takeshi`"45 seconds to..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi continued, ignoring her.`;
   waitForClick; clearText; marker; sound(`S2B272`); appendText; 
   You`"Takeshi, that's too long..."`;
   waitForClick; clearText; marker; sound(`S2B273`); appendText; 
   Takeshi`"40...39...38..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was irritating.`;
   waitForClick; clearText; marker; sound(`S2B274`); appendText; 
   Takeshi`"37...36...35..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`So irritating....`;
   waitForClick; clearText; marker; sound(`S2B275`); appendText; 
   Takeshi`"34"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Click.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`All three of us - except Takeshi - pushed the 
button.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_08`, a1: 0, volume: 100 });
fgload({ id: 1, name: `KB04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B276`); appendText; 
   Takeshi`"Hey! What're you doing? We still have 34 
seconds to go!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Nobody wants to wait 34 seconds. Somebody had 
to push it!"`;
   waitForClick; clearText; marker; sound(`S2B277`); appendText; 
   Takeshi`"You guys can't even wait a little more than 
a simple 30 seconds?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `KB06ADM`, name2: `YU04ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B278`); appendText; 
   You`"Why wait?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B279`); appendText; 
   Takeshi`"This...this is kind of like, 
a ritual...anyway, it's very important..."`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`The lights lit up all at once.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The light poured down, illuminating even the 
corners of the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was like our field of vision had expanded 
in an instant.`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SA05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B280`); appendText; 
   Sara`"17..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B281`); appendText; 
   Takeshi`"What?"`;
   waitForClick; clearText; marker; sound(`S2B282`); appendText; 
   Sara`"The lights came on with 17 seconds left in 
the countdown."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B283`); appendText; 
   You`"What are you talking about?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B284`); appendText; 
   Sara`"You don't understand? The power came back on 
with 17 seconds left to count."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh, I see..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I understood what she was saying.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You mean if we would have pushed it at 17 
seconds, it would have been just right?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B285`); appendText; 
   Sara`"Yeah."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B286`); appendText; 
   You`"Ah, ha, ha! That would have been something."`;
   waitForClick; clearText; marker; sound(`S2B287`); appendText; 
   Takeshi`"Tsk."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wasn't sure if Takeshi was over his anger, 
but he shouldered the heavy toolbox and left 
the room.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`We retraced our path until we were in front 
of the neutral buoyancy elevator.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The frozen tuna's empty eyes were waiting 
for us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The elevator we had used coming down had 
already floated up to Zweite stock.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But to the left...the floor display was lit 
up with a number three.`;
   waitForClick; clearText; 
});
bgload({ name: `BG24A2`, transition: 20 });
multifgload2({ id1: 1, id2: 2, name1: `SA01ADM`, name2: `KB01ADM`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B288`); appendText; 
   Takeshi`"Ummpmhh. That's heavy!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi groaned as he put the toolbox on the 
floor of the elevator.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA07ADM`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B289`); appendText; 
   Sara`"You sound like an old man..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB04ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B290`); appendText; 
   Takeshi`"Shut up. I AM an old man compared to you."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`While they needled each other I pushed the up 
button next to the door.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The internal and external watertight doors had 
already sealed automatically.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_17`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We could hear air being sent into the ballast 
tank under the floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Finally, the egg-shaped elevator...`;
   waitForClick; clearText; 
});
stopSFX()
showTextbox();
text(() => {
   marker; appendText; 
   Narr`...didn't start to float up.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SA07ADM`, name2: `KB06ADM`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B291`); appendText; 
   Takeshi`"Huh? Are you serious?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The sound beneath the floor had stopped and 
silence had returned.`;
   waitForClick; clearText; marker; sound(`S2B292`); appendText; 
   Sara`"Not again..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU07ADM`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B293`); appendText; 
   You`"Why do we keep running into problem after 
problem..."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Knowing it was useless, I pushed the up button 
repeatedly.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADM`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Of course, EI didn't move an inch.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB03ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Alright, so what do we do...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just as I said that...`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`A monitor just to the right of the round 
window flickered to life.`;
   waitForClick; clearText; marker; sound(`S2B294`); appendText; 
   Sora`"Takeshi, You, Sara, Kid."`;
   waitForClick; clearText; 
});
goto(lbl_00001aa0).if(g_f0 != 0);
multifgload2({ id1: 1, id2: 2, name1: `YU02ADM`, name2: `KB04ADM`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B295`); appendText; 
   Takeshi`"Sora! Where have you been? We looked 
everywhere for you!"`;
   waitForClick; clearText; marker; sound(`S2B296`); appendText; 
   Sora`"I'm terribly sorry. Please accept 
my apologies."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The image of Sora in the monitor bowed deeply.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B297`); appendText; 
   You`"That's not important right now."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU01ADM`, name2: `KB05ADM`, x1: 176, x2: 464, useAnim: true });
goto(lbl_00001ac4);
let lbl_00001aa0;
multifgload2({ id1: 1, id2: 2, name1: `YU02ADM`, name2: `KB01ADM`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I didn't have any major suspicions about 
Sora's disappearance during the blackout.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I knew that she was an RSD-generated image.`;
   waitForClick; clearText; 
});
let lbl_00001ac4;
showTextbox();
text(() => {
   marker; sound(`S2B298`); appendText; 
   You`"Sora? So we fixed the generator?"`;
   waitForClick; clearText; marker; sound(`S2B299`); appendText; 
   Sora`"It would appear so."`;
   waitForClick; clearText; marker; sound(`S2B300`); appendText; 
   Sora`"Thank you so much. Thank you..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB01ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B301`); appendText; 
   Takeshi`"I think you know this, but we are in this 
egg...uh, this EI..."`;
   waitForClick; clearText; marker; sound(`S2B302`); appendText; 
   Sora`"Yes, I know."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B303`); appendText; 
   Sora`"The EI is not moving, correct?"`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SA08ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B304`); appendText; 
   Sara`"What should we do?"`;
   waitForClick; clearText; marker; sound(`S2B305`); appendText; 
   Sora`"First, in regard to the cause..."`;
   waitForClick; clearText; marker; sound(`S2B306`); appendText; 
   Sora`"It is likely the result of a decrease in 
internal air pressure that has made the 
device incapable of sufficiently expelling 
the seawater in the ballast tank."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA05ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B307`); appendText; 
   Sora`"In other words..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You mean it isn't buoyant enough?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B308`); appendText; 
   Sora`"Correct."`;
   waitForClick; clearText; marker; sound(`S2B309`); appendText; 
   Sora`"There are a number of feasible methods for 
making it rise, but..."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`In the end, we decided to split into pairs to 
ride the elevator.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In line with the principle of Archimedes...if 
the buoyancy was insufficient, we had to 
lighten the load.`;
   waitForClick; clearText; marker; appendText; 
   Narr`First, Sara and I got in EI.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`Sora and Tsugumi were waiting at Zweite stock.`;
   waitForClick; clearText; marker; sound(`S2B310`); appendText; 
   Sora`"Good work you two."`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora beamed a welcoming smile at us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi just stood there staring at Sara 
and me.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Next came You...`;
   waitForClick; clearText; marker; appendText; 
   Narr`And then the Tuna took the elevator to 
return to our floor.`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `YU03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B311`); appendText; 
   You`"This is...c-c-cold..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU10ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I noticed that when Tsugumi saw You cradling 
the frozen fish, she grinned for the first 
time.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora on the other hand...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B312`); appendText; 
   Sora`"Takeshi! Are you alright?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`...Sora ran up next to the fish in a panic.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SA08ADM`, name2: `YU03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B313`); appendText; 
   Sara`"Uh, Nakkyu...you brought along the fish?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B314`); appendText; 
   You`"Of course. It's food after all. Waste not, 
want not, right?"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `SO03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B315`); appendText; 
   Sora`"Forget that for now...more 
importantly...Takeshi..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora was still flustered and babbling next 
to the fish.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered if she really thought that Takeshi 
had turned into a tuna.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`S2B316`); appendText; 
   Sora`"This is all my fault.... Oh my gosh! 
What can I do?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB03ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B317`); appendText; 
   Takeshi`"Uh...I know you are occupied, but..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B318`); appendText; 
   Sora`"Huh?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB07ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B319`); appendText; 
   Takeshi`"I think the question is more what should I 
do."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
delay({ interval: 120 });
goto(lbl_00001d35).if(g_f0 != 0);
g_b3 = 0;
jump(`S_2C`);
let lbl_00001d35;
g_b3 = 0;
jump(`SC2C`);
