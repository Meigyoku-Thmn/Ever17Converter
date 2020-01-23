if (l_choice == 1) goto(lbl_00002436);
setDialogBoxColor(BLUE);
l_b0 = 5;
l_dayA = 1;
l_dayB = 1;
setSceneTitle({ index: 51 });
bgload({ name: `BG26B3R`, transition: 26 });
playBGM({ num: 4, volume: 100 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`18:30`);
showTextbox();
text(() => {
   `I decided to check Dritte stock from end to 
end.`;
   `You and Sara were probably investigating 
upstairs.`;

});
bgload({ name: `BG21B1`, transition: 20 });
showTextbox();
text(() => {
   `The rest area.`;
   `I noticed immediately that the scenery was 
different from the morning.`;
   `The pond in the middle was covered with a lid.`;
   `Or more a partition of sorts than a lid.`;
   `In either case, the pond was no longer 
connected to the ocean.`;
   `The LeMMIH computer that You had talked about 
might have automatically sealed it off.`;

});
bgload({ name: `BG07B1`, transition: 20 });
showTextbox();
text(() => {
   `- Fried chicken sandwich shop.`;
   `There was still a slight scent of cooked 
chicken in the air.`;
   `The second I smelled it, my stomach started to 
growl.`;
   `I glanced around.`;
   `There was no one there...`;
   `I thought I might eat...`;
   `But I didn't want to do anything criminal.`;
   `I swallowed once and left that area behind.`;

});
bgload({ name: `BG17A1`, transition: 20 });
showTextbox();
text(() => {
   `The Conference Room.`;
   `There was nothing really out of the ordinary 
here, but I did pick up on one thing.`;
   `This room was not flooded with seawater.`;
   `The elevated entrance had stopped the water.`;

});
bgloadCrop({ name: `BG07B1`, transition: 20, x: 61, y: 22, hx: 632, hy: 475 });
showTextbox();
text(() => {
   `That darn chicken sandwich stand.`;
   `The fragrance of food was tickling my nose.`;

});
bgload({ name: `BG16A1`, transition: 20 });
showTextbox();
text(() => {
   `- The Control Room.`;
   `This room to was spared flooding by its 
elevated entrance. `;
   `The chair that You had knocked over was as 
she had left it.`;
   `I put it back where it should be, checked 
the room and left.`;

});
bgloadCrop({ name: `BG07B1`, transition: 20, x: 150, y: 37, hx: 550, hy: 412 });
showTextbox();
text(() => {
   `That chicken sandwich stand.`;
   `The smell just wouldn't quit teasing me.`;

});
bgload({ name: `BG04B1`, transition: 20 });
showTextbox();
text(() => {
   `The Ruins of Lemuria.`;
   `You had passed through here just a while 
before.`;
   `Just to be sure, I peeked in the shadows 
of the stone pillars and behind buildings, 
but couldn't find anything resembling a 
pathway.`;

});
bgloadCrop({ name: `BG07B1`, transition: 20, x: 281, y: 85, hx: 382, hy: 287 });
showTextbox();
text(() => {
   `- The chicken sandwich stand.`;
   `That smell.... Ohh! I couldn't take it 
any move.`;
   `I slyly extended my hand toward the case 
holding the warm chicken sandwiches.`;
   `This situation called for extreme measures!`;
   `I kept telling myself that as I munched and 
swallowed down the sandwich.`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `BG25B3`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `With that, I had finished checking 
Dritte stock.`;
   `It didn't look like there were any hidden 
corridors to be found, or anyone trapped here 
besides the three of us.`;
   `I wondered how things were above.`;
   `Maybe it was just like You had said. 
Maybe there was no more point in looking...`;
   `It was still before our meeting time, 
but I went back to our rendezvous point 
in front of the Control Room.`;

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
   `And when I got there...`;
   `There was a surprise waiting for me!`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG15B1`, transition: 26 });
multifgload2({ id1: 2, id2: 1, name1: `SO02ADS`, name2: `KB02ADS`, x1: 128, x2: 320, useAnim: false });
playBGM({ num: 3, volume: 100 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`19:6`);
showTextbox();
text(() => {
   Man(S1B000)`"Hey!"`;
   Woman(S1B001)`"Hello."`;
   Kid`"Huh!?!?"`;
   Kid`"Who...who..."`;
   Kid`"...Who are you?"`;

});
multifgload2({ id1: 2, id2: 1, name1: `SO07ADS`, name2: `KB07ADS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   Man(S1B002)`"What, you forget us already?"`;
   `What in the world?`;
   `I felt like I had met them before.`;
   `I was pretty sure of it, but...`;
   Kid`"Uh, um, your name is...?"`;
   `I couldn't remember it.`;

});
fgload({ id: 1, name: `KB01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Man(S1B003)`"Nah, I don't think I've introduced myself 
yet."`;
   Takeshi(S1B004)`"I'm Takeshi Kuranari. And this here is..."`;
   `The guy named Takeshi indicated the girl.`;

});
fgload({ id: 2, name: `SO01ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B005)`"I'm Sora Akanegasaki."`;
   `She gave a slight nod.`;
   Kid`"Takeshi and Sora..."`;
   `I repeated the words.`;
   `They both nodded.`;
   Kid`"But what are you doing here?"`;

});
fgload({ id: 4, name: `YU02BDS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S1B006)`"Yahoo"`;
   Kid`"Huh? What's going on here?"`;

});
fgload({ id: 4, name: `YU05BDS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S1B007)`"You don't have to be so surprised, do you?"`;

});
fgload({ id: 4, name: `YU01BDS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S1B008)`"Just a bit ago, when I was walking around 
Zweite stock with Mayo...we bumped into 
these three..."`;
   Kid`"So, you're stuck here too, huh?"`;

});
fgload({ id: 2, name: `SO03ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B009)`"Y-yes..."`;
   Takeshi(S1B010)`"That's right."`;
   Kid`"Huh? Wait a sec... 
didn't you just say 'three people'?"`;
   You(S1B011)`"Yeah."`;
   You(S1B012)`"See. Right over there."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   `I followed the direction of You's finger.`;

});
fgload({ id: 1, name: `TU17ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Someone was standing on the opposite end of 
the wall along the corridor.`;
   `I could only make out half of the person's 
back, but I saw long hair and black clothes 
and it left an impression.`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SO01ADM`, name2: `KB01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Kid`"Who's that...?"`;
   Sora(S1B013)`"You mean Tsugumi?"`;
   Takeshi(S1B014)`"Oh. Tsugumi Komachi, I think it was."`;
   `Tsugumi...so that was her name. 
She wore all black.`;
   `It didn't sound familiar. But, still...`;
   Kid`"I feel like I've met her somewhere before."`;
   Sora(S1B015)`"Do you know her?"`;
   Kid`"No, it's not that. It's probably just my 
imagination..."`;
   Kid`"It's just somehow...something..."`;

});
fgload({ id: 2, name: `KB03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B016)`"Something? Anyway, she's pretty tough to get 
along with."`;
   Takeshi(S1B017)`"I'm not sure why, but it seems like she 
doesn't like me very much."`;
   Kid`"Doesn't like you?"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `I could feel a slight animosity emanating from 
Tsugumi's back.`;
   `She didn't have to say anything, there was a 
definite atmosphere which made approaching her 
difficult.`;
   `(Maybe I'll go talk to her...)`;

});
fgload({ id: 1, name: `TU08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Just as that thought crossed my mind, 
Tsugumi shot a glance in our direction.`;
   `She had piercing eyes...and an intimidating 
gaze...`;
   `With her glare eating into me, I couldn't take 
even one step forward.`;
   `There was no way I could talk with her.`;
   `(W-what that's all about...?)`;
   `(Why is she so angry...?)`;
   `(I haven't done anything to make her 
hate me...)`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi's gaze returned to normal.`;
   `Cold beads of sweat appeared on my forehead.`;
   Kid`"Oh, that reminds me - where's Sara?"`;
   `Having realized she wasn't around, I glanced 
around the room.`;

});
fgload({ id: 1, name: `SA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Without my noticing it, Sara had come to stand 
behind me at some point.`;
   Sara`"........."`;

});
choice(
   `Worry`,
   `Don't worry`,
);
switch (l_choice) {
   case 0: goto(lbl_000003fa);
   case 1: goto(lbl_0000048e);
}
let lbl_000003fa;
l_sara_point += 1;
showTextbox();
text(() => {
   Kid`"Huh? What's wrong?"`;
   `I couldn't help but notice a dark 
look in her eyes.`;
   `There was nothing left of the 'ninja' attitude 
that she had departed with.`;

});
showTextbox();
text(() => {
   Kid`"Did something happen?"`;
   Sara`"........."`;
   Kid`"Sara?"`;
   Sara`"........."`;
   Kid`"Sara???"`;
   Sara`"........."`;
   Kid`"Hey!"`;

});
fgload({ id: 1, name: `SA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S1B018)`"Huh? Wh...what?"`;
   Kid`"You alright?"`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S1B019)`"Sure. Fine. Great."`;

});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S1B020)`"Why do you ask?"`;
   Kid`"Well...I mean you look so depressed..."`;
   Sara(S1B021)`"No, it's not that at all."`;

});
fgload({ id: 1, name: `SA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S1B022)`"It's just..."`;
   Kid`"Just?"`;
   Sara(S1B023)`"We didn't find an exit...so I'm feeling kinda 
down..."`;
   Kid`"Is that really all that's bothering you?"`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S1B024)`"Yeah. That's all."`;
   `Sara's spirits seemed to lift a little.`;
   `Seeing her smile made me feel a bit relieved.`;

});
removeFG({ id: 1, useAnim: true });
goto(lbl_000004a4);
let lbl_0000048e;
showTextbox();
text(() => {
   `But, her expression somehow didn't seem fine...`;
   `It was probably to be expected, though.`;
   `All kinds of things had happened, and 
in the end we hadn't found an exit.`;
   `Mentally we were pretty well done in.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I thought that I should probably leave her 
alone for the time being.`;

});
goto(lbl_000004a4);
let lbl_000004a4;
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B025)`"Anyway, just standing around isn't going to 
get us anywhere..."`;
   Sora(S1B026)`"Let's see what the situation in LeMU is 
right now via the Control Room."`;
   `Sora said this and pointed to the Control Room 
right across from us.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Encouraged by Sora, we all shuffled into 
the room.`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
stopBGM();
bgload({ name: `BG16A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`19:13`);
showTextbox();
text(() => {
   You(S1B027)`"So, Sora, do you understand this?"`;
   Sora(S1B028)`"Well, let's see..."`;
   `Sora faced the monitor and held up both hands.`;
   `Instantly the content of the screen began to 
change, with a number of windows opening, 
closing and searches for data underway.`;
   `I stared dully at her rapidly moving hands.`;
   `It looked like Sora was fairly used to 
handling this computer.`;
   `For one thing there weren't any flying chairs 
or heel stomping...`;
   `It was completely different from the way You 
handled things a while ago...`;

});
hideTextbox();
playBGM({ num: 14, volume: 100 });
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B029)`"...I've learned something."`;
   `Finally, Sora said this in a matter-of-fact 
way.`;
   `Everyone looked in her direction.`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B030)`"Everyone, please calm down and listen 
to me..."`;
   Sora(S1B031)`"Please don't get hysterical or depressed."`;
   `Saying this her face seemed pale.`;
   `All eyes were glued to her in silence.`;

});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B032)`"I have a report on the current status of 
LeMU."`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: WHITE });
removeFG({ id: 1, useAnim: false });
bgload({ name: `IMG03A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   Sora(S1B033)`"First, the first floor, Erste boden..."`;
   Sora(S1B034)`"Is completely flooded."`;
   You(S1B035)`"Co-completely!?"`;
   Sora(S1B036)`"Yeah. All of the partitions have dropped 
and it isn't possible to get through 
any of its corridors."`;
   Sara(S1B037)`"So what you mean is...all the paths leading 
up are completely shut off?"`;
   Sora(S1B038)`"That is correct."`;
   Sora(S1B039)`"Furthermore..."`;

});
bgload({ name: `MAP2F_A1`, transition: 30 });
showTextbox();
text(() => {
   Sora(S1B040)`"Here is the status of Zweite stock."`;
   Sora(S1B041)`"This is the floor above, the floor with the 
infirmary."`;

});
bgload({ name: `MAP3F_A1`, transition: 30 });
showTextbox();
text(() => {
   Sora(S1B042)`"This is Dritte stock..."`;
   Sora(S1B043)`"The blinking area is our current location."`;

});
hideTextbox();
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 6 });
openMapCommentAnim();
waitForClick();
showTextbox();
text(() => {
   Kid`"..."`;
   Takeshi(S1B044)`"You serious...?"`;
   Sara(S1B045)`"No...way..."`;
   You(S1B046)`"Almost half of LeMU is submerged!"`;
   `Sora nodded somberly with a pained expression 
on her face.`;

});
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP3F_A1`, transition: 30 });
unSkippableDelay(1);
showTextbox();
text(() => {
   Sora(S1B047)`"This floor's dry areas are divided into three 
sections."`;
   Kid`"Dry areas...?"`;
   Sora(S1B048)`"The areas that have no flooding and that 
people are able to pass through."`;
   Sora(S1B049)`"The central area displayed on this map is 
where we currently are in Sector 8."`;
   Kid`"Huh? It looks like the map is divided in to 
two areas...so where is the third?"`;
   Sora(S1B050)`"Actually, due to a flaw in the system, we are 
unable to call up a detailed map..."`;
   Sora(S1B051)`"Sector 4 above the corner of Sector 8 
looks fine."`;
   Sora(S1B052)`"However..."`;
   Sara(S1B053)`"There's no way to get there?"`;
   Sora(S1B054)`"Correct. It is impossible."`;
   Kid`"Why?"`;
   Sora(S1B055)`"All of the corridors connecting the sectors 
have flooded."`;
   Sora(S1B056)`"In terms of distance, it is roughly 
100 yards."`;
   Sora(S1B057)`"I don't think there is anyone among you that 
is capable of swimming 100 yards without 
breathing."`;
   Sora(S1B058)`"Therefore, I say it is impossible."`;
   Sora(S1B059)`"Furthermore...even if someone did reach 
Sector 4, I don't think it would improve our 
situation at all."`;
   Kid`"?"`;
   Sora(S1B060)`"Section 4 is in the same predicament as here."`;
   Sora(S1B061)`"All of the emergency stairs leading up to the 
floating island have completely flooded."`;
   Takeshi(S1B062)`"So, even if we could make it there, we'd be 
wasting our time?"`;
   Sora(S1B063)`"That's correct."`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeBG({ mode: BLACK, transition: 2 });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `Everyone went quiet.`;
   `For a while, we just stared at the LeMU map 
that was floating in the darkness.`;
   `And then...`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG16A1`, transition: 26 });
multifgload3({ name1: `SA15ADS`, name2: `YU11BDS`, name3: `SO05ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   You(S1B064)`"Hey, I just thought of something..."`;
   `You opened her mouth silently.`;
   You(S1B065)`"Isn't there something like a wastewater 
pump in LeMU?"`;

});
fgload({ id: 4, name: `SO10ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B066)`"Of course there is."`;

});
showTextbox();
text(() => {
   Sara(S1B067)`"Well, why don't we use that to pump the flood 
water out of those areas..."`;

});
fgload({ id: 4, name: `SO03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B068)`"It appears to be...out of order."`;

});
multifgload2({ id1: 1, id2: 2, name1: `SA06ADS`, name2: `YU06BDS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(S1B069)`"Why? We've got electricity..."`;
   Sora(S1B070)`"I am not yet certain...of the cause."`;
   Sora(S1B071)`"Some electrical systems, including the 
elevators are malfunctioning."`;
   Sora(S1B072)`"Disconnected wiring in each sector might be 
affecting the situation, but..."`;

});
multifgload2({ id1: 2, id2: 1, name1: `YU03BDS`, name2: `SA03ADS`, x1: 512, x2: 128, useAnim: true });
showTextbox();
text(() => {
   Kid`"........."`;
   You`"........."`;
   Sara`"..."`;
   Takeshi`"........."`;

});
fgload({ id: 4, name: `SO10ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B073)`"By the way, a life readings search or bio 
scan for life inside of LeMU indicates that 
the people present are the only people 
remaining here."`;

});
multifgload2({ id1: 2, id2: 1, name1: `YU06BDS`, name2: `SA06ADS`, x1: 512, x2: 128, useAnim: true });
showTextbox();
text(() => {
   `The people here....`;
   `You, Sara, Sora, Tsugumi, Takeshi and I...a 
total of six people...`;

});
fgload({ id: 4, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B074)`"Furthermore, the current internal air 
pressure is 1 atmosphere."`;
   Sora(S1B075)`"Oxygen concentration 22%, nitrogen 
concentration 75%, helium concentration 
3%, temperature 75.2 degrees..."`;

});
fgload({ id: 1, name: `SA01ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S1B076)`"You mean the environment is suitable for us 
to stay here for a while?"`;

});
fgload({ id: 4, name: `SO03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B077)`"Yes. That is the current situation..."`;

});
fgload({ id: 2, name: `YU07BDS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B078)`"Everyone, we will be forced to wait inside 
the complex for a while."`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `KB08ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B079)`"For a while? How long is that?"`;

});
fgload({ id: 4, name: `SO05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B080)`"Until help comes."`;
   Sora(S1B081)`"I am continuously sending out a request 
for assistance. However..."`;

});
fgload({ id: 4, name: `SO10ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B082)`"Currently, there is no guarantee that they 
will reach anyone."`;

});
fgload({ id: 1, name: `SA05ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B083)`"All communication lines to Insel null, 
including the emergency ones, have been 
physically severed and are unusable."`;
   Sora(S1B084)`"I have also been attempting to make contact 
via a seafloor cable network, using sonar..."`;
   Sora(S1B085)`"Right now I cannot estimate when the 
network will be back online."`;

});
multifgload2({ id1: 1, id2: 2, name1: `SA03ADS`, name2: `KB05ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B086)`"So we're like little kids lost smack in the 
middle of the ocean and nobody can hear our 
SOS..."`;

});
fgload({ id: 4, name: `SO05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B087)`"Exactly."`;

});
fgload({ id: 2, name: `KB03ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   `The gravity of the situation was 
descending on us.`;
   `There was no reason to be upbeat.`;
   `Takeshi and You let loose with sighs almost 
simultaneously.`;
   `Sara and I slumped our shoulders.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   `(That reminds me, what happened to Tsugumi?)`;
   `(She hasn't said anything at all...)`;
   `I looked back.`;

});
fgload({ id: 1, name: `TU08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi was standing in a corner of the room 
glaring at us.`;
   `Like before, there was an atmosphere around 
her that seemed impenetrable.`;
   `(Really, why is she so peeved...?)`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeFG({ id: 1, useAnim: false });
stopBGM();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `A little while later...`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG16A1`, transition: 26 });
fgload({ id: 4, name: `YU02BDS`, x: 320, useAnim: false });
playBGM({ num: 1, volume: 100 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
showTextbox();
text(() => {
   You(S1B088)`"But, well...getting depressed isn't going 
to do solve anything, is it?"`;
   You(S1B089)`"Let's be positive. Positive is the word! 
Alright everybody?!"`;
   `You broke the silence with her energetic 
pep talk.`;
   `But no one responded.`;

});
fgload({ id: 4, name: `YU05BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1B090)`"Now quit looking so depressed."`;
   You(S1B091)`"Even if we are floating in the middle of the 
Pacific, it's not as if we're lost in a 
blizzard."`;
   Kid`"So what?"`;

});
fgload({ id: 4, name: `YU01BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1B092)`"So, I mean if we wait a few hours, help will 
probably come."`;

});
fgload({ id: 1, name: `SA15ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S1B093)`"How do you know that?"`;

});
fgload({ id: 4, name: `YU11BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1B094)`"Well...think about it."`;
   You(S1B095)`"We don't know why, but we've been trapped 
inside this cramped complex."`;
   You(S1B096)`"On top of that, we don't have any way to 
contact the outside."`;

});
fgload({ id: 4, name: `YU14BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1B097)`"But, but...listen."`;
   You(S1B098)`"Even if we can't contact anyone, somebody 
else probably will."`;
   Kid`"Like who?"`;

});
showTextbox();
text(() => {
   Kid`"Ooooh, that's right."`;
   Kid`"You mean like your colleagues...or Sara's 
classmates, or teacher..."`;

});
fgload({ id: 4, name: `YU02BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `You gave a big nod as if to say, 
"That's right."`;

});
multifgload2({ id1: 1, id2: 4, name1: `SA16ADS`, name2: `YU16BDS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1B100)`"And Takeshi, you weren't alone when you got 
here either, right?"`;

});
fgload({ id: 2, name: `KB11ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B101)`"Well, that's true."`;
   Takeshi(S1B102)`"The people on the floating island should have 
noticed a long time ago that we're still 
down here."`;

});
fgload({ id: 4, name: `YU01BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1B103)`"Yup."`;
   You(S1B104)`"So I don't know if it will be a rescue 
team or a search team or what, but anyway 
somebody should come to help us soon."`;

});
fgload({ id: 4, name: `YU02BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1B105)`"So? Satisfied?"`;

});
fgload({ id: 2, name: `KB12ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   `Sara, Sora, Takeshi and I all nodded.`;
   `Hope returned to everybody's face.`;
   `Only Tsugumi...only she kept her cold gaze 
trained on us.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
delay({ interval: 30 });
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
bgload({ name: `BG17A1`, transition: 26 });
playBGM({ num: 2, volume: 100 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`19:25`);
showTextbox();
text(() => {
   `We all moved to the Conference Room together.`;
   `There was something unnerving about waiting 
for help in the dimly lit Control Room, and 
there weren't that many chairs to start with.`;
   `I wondered if there were a place in one of 
the dry areas that everyone could relax.`;
   `The closest one was the Conference Room we 
were at.`;
   Kid`"Hey...Sora, how come you know so much about 
LeMU?"`;
   `I asked Sora, who was sitting next to me.`;

});
fgload({ id: 4, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B106)`"Probably because I am a system engineer at 
LeMU's research and development division."`;
   Sora(S1B107)`"Actually...I am the assistant chief."`;

});
fgload({ id: 2, name: `KB12ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B108)`"Assistant chief...so you're pretty high up 
then?"`;

});
fgload({ id: 4, name: `SO15ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B109)`"Only in name, I'm really just an assistant. 
It's no big deal."`;

});
fgload({ id: 2, name: `KB11ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B110)`"But, hey, Sora weren't you up at the gate 
above ground?"`;
   Takeshi(S1B111)`"You were giving some kind of explanation at 
the entrance, right? I only heard half of 
it, but..."`;
   Sora(S1B112)`"That's right. So you noticed..."`;

});
fgload({ id: 4, name: `SO16ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B113)`"We are short of staff here. So from time to 
time I do that kind of work."`;
   `Sora smiled.`;
   `I wondered what the 'gate above ground' was.`;
   `I didn't understand what Takeshi and Sora were 
talking about, but for now I knew the reason 
why Sora knew so much about LeMU.`;

});
fgload({ id: 2, name: `KB01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B114)`"So that means...there are two employees from 
LeMU here then."`;

});
multifgload2({ id1: 4, id2: 1, name1: `SO07ADS`, name2: `YU05BDS`, x1: 320, x2: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1B115)`"Two?"`;
   Takeshi(S1B116)`"I mean You."`;

});
fgload({ id: 1, name: `YU07BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1B117)`"Well, I'm not really an employee. It's just a 
part-time thing..."`;

});
fgload({ id: 1, name: `YU02BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1B118)`"And Takeshi? You just came for fun?"`;

});
fgload({ id: 2, name: `KB07ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B119)`"What other reason would someone have for 
coming to a theme park?"`;
   Takeshi(S1B120)`"And Sara?"`;

});
removeFG({ id: 4, useAnim: true });
fgload({ id: 4, name: `SA01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S1B121)`"I'm...well, I'm here as a volunteer."`;

});
fgload({ id: 2, name: `KB06ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B122)`"Huh? Volunteer?"`;

});
fgload({ id: 1, name: `YU01BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1B123)`"It's an event for juniors at Kyumeikan."`;

});
fgload({ id: 4, name: `SA02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S1B124)`"But, it's basically just for fun."`;

});
fgload({ id: 2, name: `KB01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B125)`"Hmmmph."`;
   Kid`"Huh?"`;
   `Without thinking I let out a cry.`;
   `For some reason, something bothered me.`;
   Kid`"Everybody here...you're not all friends, 
right?"`;

});
multifgload3({ name1: `YU05BDS`, name2: `KB07ADS`, name3: `SA08ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   You(S1B126)`"No way. We just met."`;
   Kid`"So then why are You talking to Takeshi like 
you're old friends?"`;
   Kid`"And Takeshi is talking to you guys the 
same way."`;

});
multifgload2({ id1: 4, id2: 2, name1: `SA02ADS`, name2: `KB02ADS`, x1: 320, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B127)`"Oh, that's right, you don't know..."`;
   Kid`"What?"`;

});
removeFG({ id: 4, useAnim: true });
fgload({ id: 4, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B128)`"When we all met up on Zweite stock we 
introduced ourselves."`;
   Kid`"Oh, so that's it..."`;

});
fgload({ id: 2, name: `KB01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B129)`"Yup. That's it..."`;
   `(Hm? Still it seems strange how they are all 
so friendly for having just met...)`;
   `That was what I thought.`;
   Takeshi(S1B130)`"What about you? What's your name anyway?"`;

});
fgload({ id: 1, name: `YU06BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Kid`"...Huh?"`;
   Takeshi(S1B131)`"I'm pretty sure we haven't heard yet."`;
   Kid`"I'm..."`;
   Kid`"I'm......"`;

});
fgload({ id: 1, name: `YU03BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Kid`"I'm........."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SA02ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S1B132)`"An assassin, that's what he is."`;

});
multifgload2({ id1: 4, id2: 2, name1: `SO06ADS`, name2: `KB06ADS`, x1: 320, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B133)`"A...."${waitVoice}${noWait}`;
   Sora(S1B134)`"Assassin...!?"`;
   Sara(S1B135)`"He's being hunted by the underworld."`;
   Kid`"I'm not being h...h...hunted!"`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU04BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1B136)`"I told you to quit taking things so 
seriously. You just don't get it."`;

});
multifgload2({ id1: 4, id2: 2, name1: `SO07ADS`, name2: `KB07ADS`, x1: 320, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B137)`"???"`;
   Sora(S1B138)`"???"`;

});
fgload({ id: 1, name: `YU01BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1B139)`"Alright. I'll explain for him."`;
   You(S1B140)`"Actually he..."`;
   You(S1B141)`"He's got amnesia."`;

});
fgload({ id: 4, name: `SO06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B142)`"Am..."${waitVoice}${noWait}`;

});
fgload({ id: 2, name: `KB06ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B143)`"...nesia?"`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: WHITE });
stopBGM();
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `You gave them a brief explanation of my 
situation.`;
   `She told them how I'd forgotten my name, 
address, family and friends.`;
   `And that I only remembered the date and 
everything after meeting You.`;
   `After listening to the explanation, 
Sora said - `;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `BG17A1`, transition: 26 });
multifgload3({ name1: `YU01BDS`, name2: `KB07ADS`, name3: `SO01ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
playBGM({ num: 14, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   Sora(S1B144)`"It sounds like it's probably complete 
amnesia, a type of retrograde block."`;

});
fgload({ id: 1, name: `YU05BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Kid`"???"`;
   Sora(S1B145)`"Complete amnesia. It's also called retrograde 
life amnesia..."`;
   Sora(S1B146)`"While general education and knowledge remain 
intact..."`;
   Sora(S1B147)`"One's name, background, family and friends, 
all aspects of one's life history are wiped 
completely from one's memory."`;
   Sora(S1B148)`"Normally, one's memory returns within a 
few days or months."`;

});
fgload({ id: 4, name: `SO05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B149)`"Hypnotism and electric shock therapy are also 
said to be effective means..."`;

});
fgload({ id: 1, name: `YU06BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Kid`"E-electric shock..."`;

});
fgload({ id: 4, name: `SO02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B150)`"Ha, ha, ha. Relax."`;

});
fgload({ id: 4, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B151)`"To put it another way...this type of amnesia 
usually solves itself naturally."`;

});
fgload({ id: 1, name: `YU01BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B152)`"So for now..."`;
   Sora(S1B153)`"You really shouldn't worry or think too much 
about it. That's really the best medicine 
for you."`;

});
fgload({ id: 1, name: `YU02BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1B154)`"See? It's just like I said, right?"`;
   You(S1B155)`"Don't worry. Things'll be fine."`;
   Kid`"........."`;

});
fgload({ id: 2, name: `KB02ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B156)`"So there you have it."`;
   Kid`"You say it like it's somebody else's problem."`;

});
fgload({ id: 2, name: `KB03ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B157)`"That's not what I meant..."`;

});
fgload({ id: 2, name: `KB01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B158)`"I mean, memory's a weird thing. Sometimes 
when you're thinking about something entirely 
different, boom, you just remember."`;
   Takeshi(S1B159)`"Like with celebrities...you know their face, 
but you just can't remember their name..."`;
   Kid`"Yeah...I wonder if that's just the way it 
works..."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SA05ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S1B160)`"So, how far back do you remember, anyway?"`;
   Kid`"How far back?"`;
   Takeshi(S1B161)`"Yeah. You knew Sora's and my faces, right?"`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU01BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1B162)`"And you remembered my name..."`;
   Kid`"...how far.. how far back?"`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: WHITE });
bgload({ name: `EV_SO11D`, transition: 26 });
showDimOverlay();
hideTextbox();
NVL_Mode();
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `I searched back in time through for the edge 
of my memory.`;
   `Was there a point where I could still remember 
and a point where I had forgotten?`;
   `Different images floated through my mind as if 
to provide an answer.`;
   `${noWait}`;
   `That was it. I'd lost my memory when I fell 
into the pond at the rest area!`;
   `That had to be it.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `I couldn't remember anything before that.`;
   `And, I remembered everything after that.`;
   `So that tumble into the pond was the line 
between my memory and non-memory.`;
   `
${wait(30)}${noWait}`;
   Append`${nextPage(0)}My consciousness was cut off at that moment.${nextPage(1)}${wait(60)}${noWait}`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
monoColorOverlay({ interval: 6, color: WHITE });
dimOff_ac = 0;
closeDimOverlay();
bgload({ name: `BG17A1`, transition: 26 });
hideTextbox();
ADV_Mode();
multifgload3({ name1: `YU01BDS`, name2: `KB01ADS`, name3: `SO01ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   Kid`"I think it probably happened when I fell in 
the pond."`;
   `I announced this to everyone.`;

});
fgload({ id: 4, name: `SO03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B163)`"By 'pond' do you mean...the 'pond' at the 
rest area?"`;
   Kid`"I think so..."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SA05ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S1B164)`"You don't remember anything before that?"`;

});
fgload({ id: 2, name: `KB07ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B165)`"No vague images or anything come to mind?"`;

});
fgload({ id: 1, name: `SA03ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S1B166)`"Like the scenery around your house or..."`;

});
fgload({ id: 2, name: `KB02ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B167)`"The girl you like..."`;

});
fgload({ id: 1, name: `SA01ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S1B168)`"On TV there you sometimes see dramas about 
people who don't remember anything, but who 
instinctively know things."`;

});
fgload({ id: 2, name: `KB01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B169)`"I get it. Like the guy that paints like 
a pro the instant he takes up a brush?"`;

});
fgload({ id: 1, name: `SA02ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S1B170)`"Yeah. Like that."`;
   Sara(S1B171)`"So maybe you should try to see and touch 
lots of things?"`;

});
fgload({ id: 2, name: `KB02ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B172)`"Yeah...what should we have him do first?"`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   `The conversation about me went on around me...`;
   `My temples were throbbing.`;
   `My face was distorted with the pain.`;

});
removeFG({ id: 4, useAnim: true });
fgload({ id: 4, name: `YU06BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1B173)`"Wa...wait a second!"`;

});
fgload({ id: 1, name: `SA08ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S1B174)`"?"`;

});
fgload({ id: 2, name: `KB07ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B175)`"?"`;

});
fgload({ id: 4, name: `YU05BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1B176)`"Sora just said it, right?"`;
   You(S1B177)`"'You really shouldn't worry or think too much 
about it.'"`;
   You(S1B178)`"If you put too much pressure on him, the 
mental stress will turn him into a wreck."`;
   Sara(S1B179)`"A wreck?"`;
   You(S1B180)`"Like mental overload, maybe?"`;
   You(S1B181)`"Sometimes he starts groaning like he's in 
pain...then he suddenly collapses."`;

});
fgload({ id: 2, name: `KB03ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B182)`"Is that right...?"`;

});
fgload({ id: 4, name: `YU01BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1B183)`"So when it comes to things having to do with 
his memory, take it easy or..."`;

});
fgload({ id: 4, name: `YU02BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `You gently placed her hands on my head.`;

});
playBGM({ num: 2, volume: 100 });
showTextbox();
text(() => {
   `When she did, it was strange, but it seemed to 
suck away the pain.`;

});
multifgload2({ id1: 1, id2: 2, name1: `SA02ADS`, name2: `KB02ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B184)`"Okay. Got it."`;
   Takeshi(S1B185)`"Now let's talk about something else."`;

});
setFGRenderOrder(2, 1, 4);
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO03ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B186)`"Um..."`;
   Sora(S1B187)`"Something has been bothering me for a 
while..."`;
   Sara(S1B188)`"?"`;

});
fgload({ id: 2, name: `KB07ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B189)`"?"`;

});
fgload({ id: 4, name: `YU07BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1B190)`"?"`;
   Sora(S1B191)`"What do you suppose we should call him?"`;
   You(S1B192)`"Oh, yeah. We should probably decide to 
call him something or else it'll kind 
of be a pain."`;

});
fgload({ id: 2, name: `KB11ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B193)`"How about John?"`;
   Takeshi(S1B194)`"Don't you think that would be a little 
rude to all of the people named John?"`;

});
fgload({ id: 1, name: `SO17ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B195)`"'Or, it's kinda of random, but how about 
John Doe?' Don't you think that's kind of rude 
to the other Johns?"`;
   Takeshi(S1B196)`"Well, it's only for a little while, 
so it doesn't have to be perfect."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SA16ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S1B197)`"Let's call him sniper."`;

});
fgload({ id: 4, name: `YU05BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1B198)`"Why are you all so hung up on that?"`;
   You(S1B199)`"He's not that kind of guy at all."`;

});
fgload({ id: 1, name: `SA15ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S1B200)`"Well, how about John Mitochondria?"`;

});
fgload({ id: 4, name: `YU07BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1B201)`"I don't get it."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO15ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B202)`"Let's see. Let me think of another one."`;
   Sora(S1B203)`"How about Melos?"`;

});
fgload({ id: 2, name: `KB13ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B204)`"What? What's Melos supposed to mean?"`;

});
fgload({ id: 4, name: `YU11BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1B205)`"Short for Mr. Memory Loss."`;
   Takeshi(S1B206)`"Nah, it's bad luck to name him that..."`;

});
fgload({ id: 1, name: `SO17ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B207)`"Sorry. I didn't mean to be so direct..."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SA15ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S1B208)`"Nakkyu, don't you have any ideas?"`;

});
fgload({ id: 4, name: `YU07BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1B209)`"Well..."`;

});
fgload({ id: 4, name: `YU05BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1B210)`"How about Mr. A?"`;

});
fgload({ id: 2, name: `KB11ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B211)`"That makes him sound like a convict or 
something."`;

});
fgload({ id: 4, name: `YU01BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1B212)`"Then how about Mr. B."`;

});
fgload({ id: 2, name: `KB14ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B213)`"What's the difference?!"`;

});
fgload({ id: 1, name: `SA16ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S1B214)`"How about Astiane Kumegawa?"`;
   Sora(S1B215)`"How about Memory On?"`;

});
fgload({ id: 2, name: `KB11ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B216)`"Enough with this! Something simple is 
just fine."`;

});
fgload({ id: 4, name: `YU02BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1B217)`"We could call him Kid Q."`;
   Kid`"......."`;

});
fgload({ id: 2, name: `KB01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B218)`"Hey, you. Which one do you like?"`;

});
fgload({ id: 1, name: `SA02ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Kid`"All of them..."`;
   Kid`"...stink."`;

});
multifgload2({ id1: 1, id2: 4, name1: `SA04ADS`, name2: `YU07BDS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S1B219)`"Don't be so picky! These are tough times for 
everybody!"`;
   Kid`"Well..."`;

});
choice(
   `Tomoya Mikami`,
   `Makoto Ishihara`,
   `Naoto Fukayama`,
   `Shiina Hayasegawa`,
   `Motoki Inamura`,
   `Ken Inami`,
   `Kyosuke Watarase`,
   `Prince`,
);
switch (l_choice) {
   case 0: goto(lbl_0000142c);
   case 1: goto(lbl_0000145d);
   case 2: goto(lbl_0000148e);
   case 3: goto(lbl_000014bf);
   case 4: goto(lbl_000014f0);
   case 5: goto(lbl_00001521);
   case 6: goto(lbl_00001552);
   case 7: goto(lbl_00001583);
}
let lbl_0000142c;
showTextbox();
text(() => {
   Kid`"'Tomoya' sounds good."`;

});
multifgload3({ name1: `SA06ADS`, name2: `KB06ADS`, name3: `YU06BDS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   Everyone(S1B220)`"Tomoya!?"`;

});
goto(lbl_000015bf);
let lbl_0000145d;
showTextbox();
text(() => {
   Kid`"'Makoto' is good."`;

});
multifgload3({ name1: `SA06ADS`, name2: `KB06ADS`, name3: `YU06BDS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   Everyone(S1B221)`"Makoto!?"`;

});
goto(lbl_000015bf);
let lbl_0000148e;
showTextbox();
text(() => {
   Kid`"'Naoto' has a nice ring."`;

});
multifgload3({ name1: `SA06ADS`, name2: `KB06ADS`, name3: `YU06BDS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   Everyone(S1B222)`"Naoto!?"`;

});
goto(lbl_000015bf);
let lbl_000014bf;
showTextbox();
text(() => {
   Kid`"'Shiina' works."`;

});
multifgload3({ name1: `SA06ADS`, name2: `KB06ADS`, name3: `YU06BDS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   Everyone(S1B223)`"Shiina!?"`;

});
goto(lbl_000015bf);
let lbl_000014f0;
showTextbox();
text(() => {
   Kid`"'Motoki' sounds nice."`;

});
multifgload3({ name1: `SA06ADS`, name2: `KB06ADS`, name3: `YU06BDS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   Everyone(S1B224)`"'Motoki!?"`;

});
goto(lbl_000015bf);
let lbl_00001521;
showTextbox();
text(() => {
   Kid`"'Inaken' is good."`;

});
multifgload3({ name1: `SA06ADS`, name2: `KB06ADS`, name3: `YU06BDS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   Everyone(S1B225)`"Inaken!?"`;

});
goto(lbl_000015bf);
let lbl_00001552;
showTextbox();
text(() => {
   Kid`"I like 'Kyosuke.'"`;

});
multifgload3({ name1: `SA06ADS`, name2: `KB06ADS`, name3: `YU06BDS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   Everyone(S1B226)`"Kyosuke!?"`;

});
goto(lbl_000015bf);
let lbl_00001583;
l_wanted_to_be_called_prince = 1;
showTextbox();
text(() => {
   Kid`"I like 'Prince.'"`;

});
multifgload3({ name1: `SA06ADS`, name2: `KB06ADS`, name3: `YU06BDS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   Everyone(S1B227)`"Prince!?"`;

});
goto(lbl_000015bf);
let lbl_000015bf;
fgload({ id: 4, name: `YU05BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1B228)`"No way."`;

});
fgload({ id: 1, name: `SA05ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S1B229)`"Forget it."`;

});
fgload({ id: 2, name: `KB05ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B230)`"You gotta be kidding."`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SO04ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B231)`"I can't concur."`;

});
multifgload3({ name1: `SA02ADS`, name2: `SO02ADS`, name3: `YU02BDS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   Everyone(S1B232)`"I mean, it doesn't suit you."`;
   Kid`"......"`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `KB04ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B233)`"Oh, this is a pain. We'll just 
call him 'Kid.'"`;

});
stopBGM();
showTextbox();
text(() => {
   `Just then - `;

});
playSFX({ name: `SE05_08`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Crash.`;

});
multifgload3({ name1: `SA06ADS`, name2: `KB06ADS`, name3: `YU06BDS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   Tsugumi(S1B234)`"Enough!"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
setFGRenderOrder(4, 2, 1);
showTextbox();
text(() => {
   `Tsugumi pounded the table and stood up.`;

});
fgload({ id: 1, name: `TU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S1B235)`"Just what are you trying to do?"`;
   Tsugumi(S1B236)`"What are you all thinking?"`;

});
showTextbox();
text(() => {
   Takeshi(S1B237)`"What..we're thinking of a name..."`;
   Tsugumi(S1B238)`"Stop goofing off!"`;

});
showTextbox();
text(() => {
   `The room went quiet...`;

});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `We all looked at each other.`;

});
hideTextbox();
playBGM({ num: 19, volume: 97 });
showTextbox();
text(() => {
   You(S1B239)`"Ye-yeah...she's right..."`;
   `The first one to open her mouth was You.`;
   You(S1B240)`"We're not thinking about his feelings at 
all...we just got a little carried away..."`;

});
fgload({ id: 1, name: `TU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S1B241)`"That's not what I mean!"`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B242)`"Well, Tsugumi, what would you suggest that 
we call him?"`;
   Tsugumi`"........."`;
   Everyone`"........."`;

});
showTextbox();
text(() => {
   Sara(S1B243)`"See? It's tough to think of a name."`;

});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S1B244)`"Fine...do what you want."`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE00_01`, a1: 1, volume: 100 });
waitForSFX();
showTextbox();
text(() => {
   `Tsugumi said this in disgust and left the 
room. `;

});
multifgload2({ id1: 1, id2: 2, name1: `KB07ADM`, name2: `SA05ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B245)`"What's up with her?"`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `YU07BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S1B246)`"Why is she so angry?"`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SA07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S1B247)`"Takeshi...did you do something to make 
her mad at you?"`;

});
fgload({ id: 1, name: `KB04ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B248)`"I didn't!"`;

});
fgload({ id: 1, name: `KB05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B249)`"I don't get it. She's been like that since we 
met..."`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SO03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B250)`"It appears that we should be a little bit 
careful about how we treat Tsugumi."`;
   Sora(S1B251)`"Let's just be patient. Once she sees that 
we don't have any ill will or hostile 
feelings, things will probably resolve 
themselves..."`;
   `I felt as if something was controlling me...`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
stopBGM();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `The next thing I knew, I found I was rushing 
out of the room.`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG25B3`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   `Down the corridor Tsugumi was kicking water 
as she walked.`;
   `I didn't know where she was heading.`;
   `I called out to her back.`;
   Kid`"Hey! Wait!"`;
   `Tsugumi didn't stop. There was no sign that 
she would look back.`;
   Kid`"Tsugumi! Tsugumi!"`;
   `When I finally caught up with her, I put 
my hand on her shoulder.`;

});
hideTextbox();
playBGM({ num: 7, volume: 100 });
fgload({ id: 1, name: `TU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S1B252)`"Don't touch me..."`;

});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S1B253)`"Can you please not touch me...?"`;
   `Tsugumi stopped walking and said it in a small 
voice.`;
   Kid`"So...sorry..."`;
   `Apologizing, I took my hand from her shoulder.`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S1B254)`"What? What do you want?"`;

});
choice(
   `Why are you so angry?`,
   `I haven't even introduced myself...`,
);
switch (l_choice) {
   case 0: goto(lbl_000018fc);
   case 1: goto(lbl_0000191c);
}
let lbl_000018fc;
showTextbox();
text(() => {
   Kid`"I wondered....why are you so angry...and..."`;
   `I jumped directly to the point.`;

});
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S1B255)`"Why? Ha, ha. You are funny..."`;
   Tsugumi(S1B256)`"You don't know why I am angry?"`;
   Kid`"I don't."`;

});
goto(lbl_0000193c);
let lbl_0000191c;
showTextbox();
text(() => {
   Kid`"I haven't even introduced myself..."`;
   `Somehow I couldn't look Tsugumi in the eye.`;
   `Just our eyes meeting sent my heart pounding.`;

});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S1B257)`"There's no need."`;
   Tsugumi(S1B258)`"I don't want to talk to you."`;
   Kid`"Why not...?"`;
   Kid`"Did I do something to make you angry?"`;

});
goto(lbl_0000193c);
let lbl_0000193c;
fgload({ id: 1, name: `TU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S1B259)`"*sigh*...."`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S1B260)`"Listen. Cut it out. I've had enough of that. 
Just drop it..."`;
   Kid`"Of this?"`;
   Tsugumi(S1B261)`"Don't pretend like you don't know. Please..."`;
   Kid`"I'm not pretending..."`;

});
fgload({ id: 1, name: `TU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S1B262)`"I see through you..."`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S1B263)`"I know everything."`;
   Tsugumi(S1B264)`"I don't believe it. I never thought that 
you'd join up with those guys..."`;
   Kid`"Those guys? Join up?"`;
   Tsugumi(S1B265)`"You were just talking about amnesia, right?"`;
   Kid`"Y...yeah..."`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S1B266)`"So how do you know those guys?"`;
   Kid`"We...explained all that just a bit ago..."`;
   Kid`"I remember meeting You."`;
   Kid`"Weren't you listening?"`;

});
fgload({ id: 1, name: `TU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S1B267)`"Don't lie to me!"`;
   `Suddenly Tsugumi raised her voice.`;

});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S1B268)`"That's stupid..."`;
   Tsugumi(S1B269)`"Anyway, I'm not falling for it..."`;
   Tsugumi(S1B270)`"Don't you ever talk to me again.... Got it?"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `With that, Tsugumi strolled away.`;
   `I couldn't find the words to stop her. 
I stared after her shrinking back in silence.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
bgload({ name: `BG17A1`, transition: 26 });
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
clock(`19:48`);
showTextbox();
text(() => {
   `When I returned to the Conference Room, in the 
center of the table was a three-dimensional 
image of LeMU.`;
   `You, Sara, Sora and Takeshi were looking at 
it and discussing something intensely.`;
   Kid`"Hey. What are you talking about?"`;

});
multifgload3({ name1: `YU02BDS`, name2: `KB01ADS`, name3: `SA01ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   You(S1B271)`"Oh, hey, welcome back, Kid."`;
   Sara(S1B272)`"What happened to Tsugumi?"`;
   `I shook my head.`;

});
multifgload2({ id1: 1, id2: 4, name1: `YU07BDS`, name2: `SA08ADS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B273)`"I told you. She's difficult, huh?"`;
   `This time I nodded.`;
   `Tsugumi was difficult for sure. I had no idea 
what she was thinking. `;
   `There was no point in prying any more into 
Tsugumi's situation.`;
   `I asked them again.`;
   Kid`"So? What were you talking about? 
I mean just now."`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SO01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B274)`"The cause of the current situation..."`;

});
fgload({ id: 1, name: `YU05BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1B275)`"And what steps we...should take from now."`;

});
fgload({ id: 4, name: `SA05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S1B276)`"That's what we were discussing."`;
   Kid`"Oh. The cause of the accident and steps to 
take, huh...?"`;
   Kid`"Hey, do you mind filling me in on what you 
came up with? You can keep it simple."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B277)`"Sure."`;
   Sora(S1B278)`"Well then, allow me to explain about 
the accident one more time."`;
   `Saying that Sora touched program image 
above the table.`;

});
bgload({ name: `IMG03A`, transition: 20 });
playBGM({ num: 14, volume: 100 });
showTextbox();
text(() => {
   `Then she said the following - `;
   `'12:45 p.m. - LeMU was suddenly struck by 
a blackout. The cause is unclear.'`;
   `'Immediately after that an emergency 
evacuation order was issued...The cause of 
this was unclear as well.'`;
   `'In any case, the evacuation of LeMU by 
visitors and employees was initiated at 
this point.'`;
   `'12:54 p.m. ? The emergency doors 
were activated.'`;

});
bgload({ name: `BG17A1`, transition: 20 });
showTextbox();
text(() => {
   Kid`"What does that mean?"`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B279)`"That is referring to the emergency 
escape exits connected directly to 
the floating island."`;
   Sora(S1B280)`"These are located at the very upper part of 
the emergency stairs."`;
   Sora(S1B281)`"Normally, except under extreme circumstances, 
this door is not opened..."`;
   Kid`"But you're saying that it was opened?"`;

});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B282)`"Yes..."`;
   Kid`"What exactly does 'except in extreme 
circumstances' mean?"`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B283)`"I'm not sure that I can say for sure, but..."`;
   Kid`"???"`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B284)`"In the manual, it is written that -"`;
   Sora(S1B285)`"'In the case of an emergency, it is 
necessary to temporarily hold visitors 
in the decompression chamber.'"`;
   Kid`"Why? But what if you have to escape in a 
hurry? Why do you have to stop in the 
decompression chamber?"`;

});
showTextbox();
text(() => {
   Sora(S1B286)`"In order to prevent decompression sickness."`;
   Kid`"Decompression sickness?"`;
   Sora(S1B287)`"When there is a sudden decrease in pressure, 
the nitrogen that has dissolved in a person's 
blood gasifies and can cause blood clots that 
interfere with circulation."`;
   Kid`"???"`;

});
fgload({ id: 1, name: `SO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B288)`"Uh...I'll explain that later...for now let me 
continue on this topic, alright?"`;
   Kid`"Sure..."`;
   Kid`"Anyway, what you are saying is that these 
doors that shouldn't be opened were opened. 
Is that it?"`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B289)`"That's correct."`;

});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B290)`"This is only my best educated guess, but..."`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B291)`"It would appear that probably one of the 
visitors panicked and in the confusion 
manually opened the emergency airtight doors."`;
   Sora(S1B292)`"And then the door was not closed, but was 
left open."`;
   Sora(S1B293)`"Accordingly, the roughly 6 atmosphere mixture 
of gas inside suddenly was released outside 
the room."`;
   `Sora continued her explanation.`;

});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   `'2:39 p.m. ? Helium, since it is lighter than 
oxygen and nitrogen, was released first...and 
internal pressure dropped to the equivalent of 
the external pressure of one atmosphere.'`;
   `'3:55 p.m.—Water leak occurs.'`;

});
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B294)`"LeMU is a structure designed based upon 
saturation diving specifications..."`;
   Kid`"Saturation diving specifications? What's that 
mean?"`;
   Sora(S1B295)`"To equalize the internal air pressure with, 
or to set it at levels above, the external 
water pressure, to keep the unit from being 
crushed by seawater..."`;
   Sora(S1B296)`"...That is what it means. Do you understand?"`;

});
choice(
   `I get it`,
   `Not really`,
);
switch (l_choice) {
   case 0: goto(lbl_00001c35);
   case 1: goto(lbl_00001c9a);
}
let lbl_00001c35;
showTextbox();
text(() => {
   Kid`"Yeah, I think I get it."`;

});
fgload({ id: 1, name: `SO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B297)`"Well, then the question becomes why the water 
leakage..."`;
   Kid`"Yeah...that's right..."`;
   Kid`"Couldn't it be that..."`;
   Kid`"LeMU was made to keep the internal air 
pressure and external water pressure the 
same so it won't be crushed, right?"`;
   Kid`"But if the air inside completely escaped, 
and the air pressure dropped to 1 
atmosphere..."`;
   Kid`"Then wouldn't the pressure of the seawater 
push in and..."`;
   Kid`"Finally, there would be a tear somewhere and 
seawater would come rushing in..."`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B298)`"You are almost correct."`;

});
fgload({ id: 1, name: `SO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B299)`"Impressive, Kid. Are you sure you're 
suffering from amnesia?"`;
   Kid`"Huh? Y-yeah...pretty sure..."`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B300)`"I have nothing left to add."`;
   Sora(S1B301)`"The sudden decrease in air pressure is the 
major cause of this flood mishap."`;

});
goto(lbl_00001cd8);
let lbl_00001c9a;
showTextbox();
text(() => {
   Kid`"Hmmm."`;
   `I tilted my head.`;

});
showTextbox();
text(() => {
   Sora(S1B302)`"Think about what would happen if you took a 
plastic bottle capped and filled with air and 
put it deep in water?"`;
   Kid`"What would happen...the side of the bottle 
would dimple in, right?"`;

});
showTextbox();
text(() => {
   Sora(S1B303)`"Exactly."`;
   Sora(S1B304)`"This phenomenon is due to the air inside the 
bottle being pushed in by the water pressure."`;

});
showTextbox();
text(() => {
   Sora(S1B305)`"So to keep the bottle from being compressed, 
what do you have to do?"`;
   Kid`"Oh, I see..."`;

});
showTextbox();
text(() => {
   Sora(S1B306)`"The answer is simple."`;
   Sora(S1B307)`"You pack more air into the bottle."`;
   Sora(S1B308)`"If the pressure from the outside and the 
pressure from the inside are in balance, 
then the bottle's shape will not change."`;
   Sora(S1B309)`"This is what is meant by saturation diving 
specifications. That's a little bit of a rough 
example..."`;
   Kid`"I think I get it..."`;

});
showTextbox();
text(() => {
   Sora(S1B310)`"By the way, in this bottle that we were 
talking about that is filled with air..."`;
   Sora(S1B311)`"...And immersed in water. What happens 
when you open a hole in the top?"`;
   Kid`"The air will leak."`;
   Sora(S1B312)`"And then?"`;
   Kid`"The air will escape out..."`;
   Kid`"Oh. And when the balance of pressure is lost, 
the bottle will be crushed."`;

});
showTextbox();
text(() => {
   Sora(S1B313)`"That's right."`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B314)`"And that is precisely what occurred and the 
primary cause of the flooding here at LeMU."`;
   Sora(S1B315)`"Due to the drop in internal pressure to 1 
atmosphere, the weakest area of the structure, 
the glass, cracked, letting in massive 
quantities of water."`;

});
goto(lbl_00001cd8);
let lbl_00001cd8;
showTextbox();
text(() => {
   Sora(S1B316)`"Subsequently...in order to minimize damage, 
LeMMIH automatically closed the watertight 
doors."`;
   Kid`"And so we're all trapped in here..."`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B317)`"Yes..."`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `EV_SA13D`, transition: 26 });
showDimOverlay();
hideTextbox();
NVL_Mode();
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `Maybe it was because I had jumped into a 
complicated discussion, but somewhere in 
my head felt like it was tearing.`;
   `But thinking back on Sora's explanation there 
were two key points.`;
   `${noWait}`;
   `1: The reason for the complex blackout was 
unclear.`;
   `2: The reason for the drop in air pressure 
was that we had sprung a leak.`;
   fadeClearPage();
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
dimOff_ac = 0;
closeDimOverlay();
bgload({ name: `BG17A1`, transition: 26 });
hideTextbox();
ADV_Mode();
multifgload2({ id1: 2, id2: 1, name1: `SO01ADM`, name2: `KB11ADM`, x1: 128, x2: 512, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   Takeshi(S1B318)`"Huh? Hold on a second."`;

});
fgload({ id: 2, name: `SO15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   `Takeshi, who had been listening quietly until 
now, spoke.`;

});
showTextbox();
text(() => {
   Takeshi(S1B319)`"So this here is 1 atmosphere of pressure?"`;

});
showTextbox();
text(() => {
   Sora(S1B320)`"Yes that's correct, why do you...?"`;
   Takeshi(S1B321)`"So does that mean that this...voice 
alternator thing that we're wearing, 
that we don't need it anymore?"`;

});
fgload({ id: 2, name: `SO17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B322)`"No...that..."`;
   Sora(S1B323)`"Please...keep...wearing it."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SA11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S1B324)`"Why? The helium gas is mostly gone, right?"`;
   You`"........."`;
   `Only You remained silent.`;
   `It looked like she was awkwardly avoiding 
my gaze.`;

});
fgload({ id: 2, name: `SO09ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B325)`"A-Anyway...please just don't take them off."`;
   Kid`"Why not? What reason is...?"`;

});
fgload({ id: 2, name: `SO03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B326)`"The reason...reason is..."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU01BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S1B327)`"Well, if Sora says so, that should 
be good enough."`;
   You(S1B328)`"I'm still wearing it and I don't have any 
problem with it...this voice alternator."`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SA07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S1B329)`"Well, that's for sure. I had almost forgot 
I was wearing it..."`;

});
fgload({ id: 1, name: `YU02BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S1B330)`"See?"`;

});
fgload({ id: 1, name: `YU01BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S1B331)`"Anyway, more importantly...we should be 
talking about...'What are we going to do 
now?'...and talking about our next step...at 
least that's my opinion..."`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `KB01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B332)`"Next step, huh...?"`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
delay({ interval: 30 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   `After that...`;
   `We crossed our arms, and started 
brainstorming...but we couldn't come up with 
even a single good idea.`;
   `In the end...`;

});
multifgload2({ id1: 1, id2: 2, name1: `SA03ADM`, name2: `YU03BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(S1B333)`"I guess all we can do is wait for help to 
come..."`;
   `Of course, there was no reason to expect 
a differing opinion.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
setSceneTitle({ index: 52 });
bgload({ name: `BG17A1`, transition: 26 });
multifgload3({ name1: `SA03ADS`, name2: `KB07ADS`, name3: `YU03BDS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
playBGM({ num: 2, volume: 100 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
clock(`20:36`);
showTextbox();
text(() => {
   `Nearly an hour had passed since Tsugumi had 
left the room.`;
   `Sora had said that she was going to try 
to 'think of a plan' and went back to the 
Control Room. `;
   `The remaining four of us didn't have anything 
to say or do and continued to wait for contact 
or help from the outside.`;
   Sara(S1B334)`"Tsugumi hasn't come back..."`;
   `Sara muttered this.`;
   Sara(S1B335)`"I wonder if it is good to leave her alone 
like this..."`;

});
fgload({ id: 2, name: `KB08ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B336)`"I don't think there is anything good about 
it..."`;

});
fgload({ id: 1, name: `SA05ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S1B337)`"Hey, Kid. You followed after Tsugumi a bit 
ago, right?"`;
   Kid`"Yeah."`;
   Sara(S1B338)`"She didn't say where she was going or 
anything?"`;
   Kid`"Nope, she didn't mention anything."`;

});
fgload({ id: 4, name: `YU05BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1B339)`"Oh well..."`;
   You(S1B340)`"You want to look for her?"`;
   `As if You's words were a sign, I stood up.`;

});
bgload({ name: `BG15B1`, transition: 20 });
showTextbox();
text(() => {
   `For some reason, You made straight for the 
Control Room.`;
   Kid`"Huh? Why the Control Room?"`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1B341)`"You don't remember?"`;

});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1B342)`"When we gathered in the Control Room 
before, Sora said something, right?"`;
   You(S1B343)`"By searching for the life readings or bio 
signs of such and such..."`;
   Kid`"She said that?"`;

});
showTextbox();
text(() => {
   Takeshi(S1B344)`"Yup, she for sure did say that."`;
   Takeshi(S1B345)`"Weren't you listening?"`;
   Kid`"I thought I was, but..."`;

});
showTextbox();
text(() => {
   You(S1B346)`"So why don't we do a bio scan for life?" `;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1B347)`"We'll probably know where Tsugumi is right 
away."`;
   Kid`"Hmmm."`;
   `Bio scan.`;
   `It seemed like one difficult word after 
another was being thrown at me.`;
   `I wondered if this was part of amnesia. 
There were so many words and phenomena and 
systems and stuff here that I was at a loss.`;
   Kid`"*Sigh*...."`;
   `Without thinking I let go a sigh.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Incidentally, there was another thing that 
I had not been able to understand.`;
   `Somewhere along the line everyone had taken to 
calling me 'Kid.'`;
   `That random decision-making process to find a 
consensus on my name had ended up with me 
being called 'Kid.'`;
   `Well it was better than 'John Mitochondria' 
anyway.`;
   `But still it was all hard for me to understand.`;
   Kid`"*Sigh*...."`;
   `I sighed again and shaking my head followed 
everyone into the Control Room.`;

});
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
bgload({ name: `BG16A1`, transition: 20 });
fgload({ id: 4, name: `SO07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B348)`"Hey? Is something wrong?"`;
   `Sora tilted her head, looking at us 
quizzically as we shuffled into the room.`;

});
multifgload2({ id1: 1, id2: 2, name1: `SA15ADS`, name2: `YU11BDS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S1B349)`"Well, we just didn't think we could leave 
Tsugumi alone like this..."`;

});
fgload({ id: 2, name: `YU12BDS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S1B350)`"Yeah. So we thought if we could get you to do 
another bio scan..."`;

});
fgload({ id: 4, name: `SO02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B351)`"Oh, I see. So that's it."`;

});
fgload({ id: 4, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B352)`"You want me to investigate the location of 
Tsugumi then?"`;
   Sora(S1B353)`"Please wait a moment..."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   `A map of LeMU was displayed on the monitor.`;
   `It enlarged and reduced in size, slid, 
spun...the image switched and changed in a 
dizzying way.`;
   Kid`"Uh, Sora."`;
   Kid`"Will you really know where Tsugumi is just by 
running a bio search for her?"`;

});
fgload({ id: 4, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B354)`"Yes."`;
   Sora(S1B355)`"Humans are homeothermic animals meaning that 
they constantly maintain a temperature of 
around 98.6 degrees Fahrenheit."`;
   Sora(S1B356)`"That body temperature can be detected using 
infrared radiation."`;
   Sora(S1B357)`"Via this technique we can affirm the 
location and number of humans in the LeMU 
complex..."`;

});
fgload({ id: 4, name: `SO02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B358)`"See, there it is."`;
   `See that uncertain bit of light in Zweite 
stock.`;
   Sora(S1B359)`"There's no mistake. That's Tsugumi."`;
   `Below that in a room in Dritte stock there 
were also a number of light-emitting points 
overlapping.`;
   `I figured that was probably the Control Room.`;

});
stopBGM();
showTextbox();
text(() => {
   `(...Huh? What is...?)`;
   `Just then I noticed something strange.`;
   `In a corner of the monitor 'Life readings: 7' 
was displayed in small letters.`;
   Kid`"U...um...?"`;

});
fgload({ id: 2, name: `YU05BDS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S1B360)`"What is it?"`;
   Kid`"Isn't there something strange about this 
number?"`;
   Kid`"See..."`;
   `I pointed to the corner of the monitor.`;

});
bgload({ name: `IT04E`, transition: 20 });
playBGM({ num: 16, volume: 100 });
showTextbox();
text(() => {
   `'Life readings: 7'`;
   You(S1B361)`"Seven!?"`;
   Sara(S1B362)`"Seven!?"`;
   Takeshi(S1B363)`"Seven!?"`;
   Sora(S1B364)`"Wh...what..."`;
   `There should have been a total of six people 
trapped in LeMU - You, Sara, Sora, Tsugumi, 
Takeshi and me.`;
   `Yet, the main computer LeMMIH was indicating 
that there were seven people.`;
   Sora(S1B365)`"What...what in the world...?"`;
   `And then...`;

});
bgload({ name: `IT04C`, transition: 20 });
showTextbox();
text(() => {
   `'Life readings: 5'${wait(30)}
${noWait}`;

});
bgload_keepFg({ name: `IT04E`, transition: 30 });
showTextbox();
text(() => {
   Append`'Life readings: 7'${wait(30)}
${noWait}`;

});
bgload_keepFg({ name: `IT04D`, transition: 30 });
showTextbox();
text(() => {
   Append`'Life readings: 6'`;

});
bgload({ name: `IT04C`, transition: 20 });
showTextbox();
text(() => {
   `5${noWait}`;

});
bgload_keepFg({ name: `IT04E`, transition: 30 });
showTextbox();
text(() => {
   Append`7${noWait}`;

});
bgload_keepFg({ name: `IT04D`, transition: 30 });
showTextbox();
text(() => {
   Append`6${noWait}`;

});
bgload_keepFg({ name: `IT04C`, transition: 30 });
showTextbox();
text(() => {
   Append`5${noWait}`;

});
bgload_keepFg({ name: `IT04E`, transition: 30 });
showTextbox();
text(() => {
   Append`7${noWait}`;

});
bgload_keepFg({ name: `IT04D`, transition: 30 });
showTextbox();
text(() => {
   Append`6...`;

});
showTextbox();
text(() => {
   `The numbers changed by the second.`;

});
bgload({ name: `IT04E`, transition: 30 });
showTextbox();
text(() => {
   `And always the number '6' plus or minus one.`;
   Sora(S1B366)`"Why? Why is this happening...?"`;
   `Flustered and out of character, Sora was 
busily operating the console.`;

});
bgload({ name: `IT04D`, transition: 30 });
showTextbox();
text(() => {
   `But...the numbers continued to fluctuate and 
there was no sign that they would stop.`;
   `I shifted my eyes to the points of light 
on the map.`;

});
bgload({ name: `IT04C`, transition: 30 });
showTextbox();
text(() => {
   `Even if the life reading numbers changed, 
the points of light didn't increase or 
decrease.`;

});
bgload({ name: `BG16A1`, transition: 20 });
multifgload2({ id1: 1, id2: 2, name1: `SA05ADM`, name2: `YU05BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S1B367)`"If the number really is '7' then..."`;
   Kid`"That would mean that there is another person 
here that didn't get out in time!"`;
   You(S1B368)`"Yeah, assuming that seven is the right 
number..."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KB08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B369)`"Hold on everybody..."`;
   Takeshi(S1B370)`"Calm down..."`;

});
bgload({ name: `IT04E`, transition: 20 });
showTextbox();
text(() => {
   `For a while I watched the number switch.`;
   `Finally...`;

});
bgload({ name: `IT04E`, transition: 30 });
bgload({ name: `IT04C`, transition: 30 });
delay({ interval: 10 });
bgload({ name: `IT04D`, transition: 30 });
bgload({ name: `IT04C`, transition: 30 });
delay({ interval: 30 });
bgload({ name: `IT04D`, transition: 20 });
showTextbox();
text(() => {
   `It stopped on the number '6.'`;
   `'Life readings: 6'`;

});
bgload({ name: `BG16A1`, transition: 20 });
multifgload2({ id1: 1, id2: 2, name1: `SA05ADM`, name2: `YU05BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Kid`"H-huh?...It stopped on six."`;
   You(S1B371)`"It's probably broken or something."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(S1B372)`"No...no, it shouldn't be..."`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `KB01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B373)`"Anyway, it looks like it settled on six...so 
that's probably the right number. Right?"`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SA08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S1B374)`"Makes sense..."`;

});
fgload({ id: 1, name: `SA01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S1B375)`"Thinking about it, it's hard to imagine 
anyone else is here..."`;
   Kid`"But..."`;

});
fgload({ id: 1, name: `SA05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S1B376)`"'But' what Kid? We looked all over LeMU."`;
   Sara(S1B377)`"And we didn't meet anyone."`;
   Kid`"That's true, but..."`;

});
if (l_coco_point != 1) goto(lbl_000023d2);
l_choice = 0;
jump(`SC1B`);
let lbl_000023d2;
fgload({ id: 2, name: `KB08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B378)`"Well, either way, it's something we can solve 
by walking around the complex, right?"`;
   Kid`"........."`;

});
fgload({ id: 2, name: `KB05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B379)`"But more important is securing Tsugumi!"`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU05BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1B380)`"Securing? You mean saving?"`;

});
fgload({ id: 2, name: `KB08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B381)`"Saving is removing an object from danger."`;
   Takeshi(S1B382)`"Securing is removing danger itself."`;

});
let lbl_00002436;
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SA08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S1B383)`"Is Tsugumi...really that dangerous?"`;

});
fgload({ id: 2, name: `KB01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B384)`"Oh, that's right. I haven't told Sara, You 
and all about everything and that crazy 
girl, have I?"`;

});
fgload({ id: 1, name: `SA03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S1B385)`"N-no."`;
   You(S1B386)`"No..."`;

});
fgload({ id: 2, name: `KB02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1B387)`"Alright. It's time to think of a way of 
securing Tsugumi."`;
   Takeshi(S1B388)`"Are you ready?"`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
bgload({ name: `BG29A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `We climbed the emergency stairs to the floor 
where Tsugumi was.`;
   `Only Sora remained in the Control Room, 
thinking of ways to escape, trying to 
re-establish communications, rechecking 
the complex, and trying to get other 
systems that were down back online.`;

});
hideTextbox();
l_choice = 0;
jump(`S_1C`);
