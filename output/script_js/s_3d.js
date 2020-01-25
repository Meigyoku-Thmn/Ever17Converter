setDialogBoxColor(BLUE);
l_b0 = 5;
l_dayA = 3;
l_dayB = 3;
setSceneTitle({ index: 71 });
bgload({ name: `EV_SA13D`, transition: 10 });
playBGM({ num: 2, volume: 100 });
showTextbox();
text(() => {
   `We finally gathered again in the Conference Room.`;

});
if (l_repaired_with_sara == 0) goto(lbl_000000b4);
showTextbox();
text(() => {
   `Even though I had just embarrassed myself in front of everyone, they all acted as if nothing had happened.`;

});
let lbl_000000b4;
showTextbox();
text(() => {
   `We were killing time...`;
   `We still couldn't think of any way to escape.`;
   `Still, we didn't want to feel like we were completely wasting our time.`;
   `So we all decided to wander around LeMU one more time.`;
   `As we made the rounds Takeshi said - `;
   `'Whaddya think the record is for running from one end of LeMU to the other?'`;
   `'I think we should try to give the chicken sandwiches a completely new flavor, somehow!'`;
   `He made a number of stupid comments.`;
   `We all (with the exception of Tsugumi of course) listened half exasperated and half interested.`;
   `We all knew...`;
   `As long as we were doing something, it kept our minds off things we couldn't change...`;
   `Like about how there was no way out, or remembering where we were.`;

});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
stopBGM();
bgload({ name: `BG25A3`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   `We decided to meet at 8 p.m. for dinner.`;
   `Everyone was left to wander around freely until then.`;
   `I decided to help You try to repair the infirmary scanning machine.`;

});
if (l_repaired_with_sara != 0) goto(lbl_0000010a);
showTextbox();
text(() => {
   `Of course, it was kind of an indirect thank you to her for looking after me when I was feeling down two days before.`;

});
goto(lbl_0000010f);
let lbl_0000010a;
showTextbox();
text(() => {
   `Of course, it was kind of an indirect thank you for her looking after me twice and worrying about my lost memory.`;

});
let lbl_0000010f;
bgload({ name: `BG09A1`, transition: 20 });
playBGM({ num: 1, volume: 100 });
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
clock(`18:34`);
showTextbox();
text(() => {
   You(S3C000)`"Alright then...shall we get started?"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `You plopped down on the floor with the tools and parts, spreading out the repair manual.`;
   `Of course the repairs were You's job ? I was just there to help.`;
   `I was getting used to handing her the tools, and was getting better at predicting which tool would be used next.`;
   `I thought that if there were an exam for expertise in handing pliers or screws, I would pass with flying colors.`;
   `But the repairs were tougher than I imagined.`;

});
fgload({ id: 1, name: `YU14ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3C001)`"Ummmphhh!"`;
   `You grunted as she stared at the diagram.`;
   Kid`"You still haven't figured it out?"`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3C002)`"Maybe if you'd be quiet I might!"`;

});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3C003)`"It's not here..."`;
   Kid`"........."`;
   `She searched all over, but couldn't find the cause of the problem.`;
   `You said everything looked normal.`;
   `In other words, there was no sign of anything broken.`;

});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3C004)`"Geez! This good for nothing! Stupid, idiotic....!"`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3C005)`"Argghhh!"`;
   `All of the sudden, You lost her cool, pounded on the diagram and kicked the toolbox.`;

});
playSFX({ name: `SE07_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Wham!`;
   You(S3C006)`"Pant, pant, pant..."`;
   Kid`"Hey, that's not very grown-up of you."`;
   You`"........."`;
   Kid`"You know, you could ask Sora about how to fix it later."`;
   You`"........."`;
   Kid`"You want to clean up for now?"`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3C007)`"Oh...sorry."`;

});
hideTextbox();
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU03ADM`, name2: `KB07ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3C008)`"Hey, so here the two of you are."`;
   Kid`"Oh, hey Takeshi."`;

});
fgload({ id: 1, name: `YU05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S3C009)`"What are you doing here, Takeshi?"`;

});
fgload({ id: 2, name: `KB11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3C010)`"Nothing really. I just thought I'd get some coffee or something to wake me up."`;
   Takeshi(S3C011)`"What about you two? What are you and the Kid up to?"`;
   You(S3C012)`"You can't tell by looking?"`;

});
fgload({ id: 2, name: `KB13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3C013)`"If I could, do you think I'd be asking?"`;
   Kid`"Takeshi, do you think you could lend us a hand?"`;

});
fgload({ id: 2, name: `KB07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3C014)`"Sure...I can do that. You want help picking up this stuff?"`;
   Kid`"Yeah."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `We split up and started picking up the tools strewn around the room.`;
   `Screwdrivers and screws had flown all the way to the walls.`;
   `....................`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3C015)`"Uh, do you think we got everything?"`;
   Kid`"No. There's one more right there..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `There was something in the corner.`;

});
fgload({ id: 1, name: `KB07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3C016)`"Hey, what's this?"`;
   `Takeshi picked up something that looked like an electric plug...`;
   `No, it WAS an electric plug.`;
   `The cable continued, disappearing under the floor. It was embedded there.`;
   You`"........."`;
   Kid`"........."`;

});
fgload({ id: 1, name: `KB01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3C017)`"I wonder what this is supposed to power."`;
   `In the wall was an outlet the same as in the home.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Takeshi stuck the plug into the wall.`;

});
playSFX({ name: `SE03_07`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Whiiiiiiiiiiir....`;

});
showTextbox();
text(() => {
   Kid`"Hey, something is moving!"`;
   Takeshi(S3C018)`"Oh. Hey, looks like it was for that machine over there."`;

});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You`"........."`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   Kid`"Which means..."`;
   You(S3C019)`"...It would appear unplugged."`;
   Kid`"..."`;
   You`"..."`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU03ADM`, name2: `KB07ADM`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3C020)`"Hey...by the way..."`;
   `Takeshi shot a question at me and You who were speechless.`;
   Takeshi(S3C021)`"What were you doing here anyway?"`;
   Kid`"........."`;

});
fgload({ id: 1, name: `YU13ADM`, x: 176, useAnim: true });
showTextbox();
text(() => {
   You`".........."`;

});
fgload({ id: 2, name: `KB07ADM`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3C022)`"???"`;

});
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
delay({ interval: 30 });
showTextbox();
text(() => {
   `Just then somebody else appeared.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
setSceneTitle({ index: 72 });
showTextbox();
text(() => {
   `...It was Tsugumi.`;
   `But when she saw us she...`;

});
fgload({ id: 1, name: `TU08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3C023)`"Tsk."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `She clicked her tongue in an irritated way and turned to leave the room.`;

});
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `The door opened again immediately.`;

});
hideTextbox();
playBGM({ num: 4, volume: 100 });
multifgload2({ id1: 1, id2: 2, name1: `TU18ADS`, name2: `SA14ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   `...This time it was Sara.`;
   `It could have been my imagination, but she looked kind of angry about something.`;
   `Sara stood her ground, blocking the exit so that Tsugumi couldn't leave.`;
   Tsugumi(S3C024)`"Get outta the way."`;
   Sara(S3C025)`"Quit running away and answer."`;
   Tsugumi(S3C026)`"I said, outta the way."`;
   Sara(S3C027)`"I said give me an answer!"`;
   `It seemed like the two of them were fighting.`;
   `(But I wonder why...)`;
   `I couldn't think of any reason for the two of them would want to fight.`;

});
fgload({ id: 1, name: `TU17ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3C028)`"If you keep shouting, the three of them will hear."`;
   Sara(S3C029)`"I don't care!"`;
   Tsugumi`"........."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload3({ name1: `KB07ADS`, name2: `SA14ADS`, name3: `TU17ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   Takeshi(S3C030)`"Hey...you two, what's up?"`;
   `Takeshi asked this as he approached them.`;

});
fgload({ id: 4, name: `TU07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3C031)`"That's what I want to know."`;
   `Tsugumi said this mixed with a sigh.`;
   `And then she gave Takeshi the evil eye.`;

});
fgload({ id: 4, name: `TU08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3C032)`"What are you all planning anyway?"`;

});
fgload({ id: 1, name: `KB05ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3C033)`"Wh-what...are we? What are YOU planning? Stop with the nonsense already."`;
   Tsugumi`"........."`;
   You(S3C034)`"Hey, Mayo, what happened?"`;
   Sara`"........."`;
   `You said it as if to calm Sara's nerves.`;
   `She still looked pretty riled up.`;
   `She was staring at Tsugumi bitterly.`;
   Kid`"Tsugumi..."`;

});
fgload({ id: 4, name: `TU03ADS`, x: 320, useAnim: true });
fgload({ id: 4, name: `TU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"............"`;
   `(...Huh?)`;
   `For an instant I thought that...Tsugumi drew up her face up sadly.`;

});
fgload({ id: 4, name: `TU18ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3C035)`"Now get outta my way!"`;
   `As she turned around, Tsugumi tried to push Sara out of the way.`;
   `Sara resisted.`;

});
fgload({ id: 2, name: `SA04ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S3C036)`"So what? Did you run away from him the same as you are trying to run from me now?"`;
   `Sara said that as the two of them wrestled.`;

});
showTextbox();
text(() => {
   Tsugumi`"..."`;
   `Tsugumi stopped moving.`;

});
fgload({ id: 2, name: `SA03ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S3C037)`"So you did..."`;

});
fgload({ id: 4, name: `TU03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"..."`;
   `Sara crossed her arms tightly.`;

});
fgload({ id: 2, name: `SA10ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S3C038)`"You suck..."`;

});
fgload({ id: 2, name: `SA14ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S3C039)`"You are inhuman!"`;

});
multifgload2({ id1: 1, id2: 4, name1: `KB06ADS`, name2: `TU04ADS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3C040)`"!"`;
   `Tsugumi lifted up her right hand as if to hit Sara.`;

});
fgload({ id: 1, name: `KB08ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   `But Takeshi grabbed her hand.`;
   Takeshi(S3C041)`"Hey! Calm down!"`;
   `Sara didn't miss her chance.`;

});
playSFX({ name: `SE05_00`, a1: 0, volume: 100 });
fgload({ id: 4, name: `TU18ADS`, x: 320, useAnim: false });
showTextbox();
text(() => {
   `Slap!`;

});
fgload({ id: 1, name: `KB06ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   `Sara's open palm echoed on Tsugumi's cheek.`;

});
fgload({ id: 4, name: `TU04ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3C042)`"You little!"`;

});
fgload({ id: 2, name: `SA06ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S3C043)`"Ah!"`;
   `The raging Tsugumi, threw off Takeshi and stole from Sara whatever it was she was holding.`;
   `She went to throw whatever it was she had against the wall...`;

});
fgload({ id: 4, name: `TU09ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3C044)`"Agh!"`;
   `But she stopped an instant before.`;

});
fgload({ id: 1, name: `KB04ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3C045)`"Stop!"`;
   `Takeshi went to grab her arm.`;
   `Tsugumi's arm went slack and something slipped to the floor.`;

});
stopBGM();
playSFX({ name: `SE08_07`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `It clattered loudly...`;
   `Something glittered as it bounced.`;
   `...It looked like a pendant.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   `Sara scooped up the pendant as if she were picking up a fragile piece of ice.`;
   Sara`"..."`;
   `Sara's back quivered tensely.`;
   `Sara looked down, dropping her head.`;
   `The she squeezed her fist around the pendant.`;
   You(S3C046)`"Mayo?"`;
   `You said it softly, but Sara didn't appear to hear.`;

});
bgload({ name: `EV_SA04A`, transition: 20 });
showTextbox();
text(() => {
   `Sara lifted her face.`;
   `Biting her lip she glared at Tsugumi.`;
   `Both of her eyes were welling up with tears.`;
   Sara`"............"`;
   Tsugumi`"............"`;
   `Tsugumi stared coldly at Sara as if looking down at her from far above.`;
   `Sara withstood the glare, and stared back at Tsugumi, enraged. She continued to resist silently, trying not to shed tears, not to sob.  `;
   `The scene was just like...`;
   `Just like...`;

});
if (l_repaired_with_sara != 0) goto(lbl_000006e2);
hideTextbox();
delay({ interval: 120 });
showTextbox();
text(() => {
   `Just like...how to put it?`;
   `It was like the emotion that was about to explode to the surface had sunk away to nothingness.`;

});
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   `The next thing I knew, Tsugumi had turned to leave the room.`;
   `Sara still focused her glare on Tsugumi.`;
   `I looked back and forth between the two of them...`;
   `Finally I let my eyes trail off after Tsugumi.`;
   `You was there to help Sara.`;
   `But first I wanted to find out what the fight was all about.`;

});
l_choice = 0;
jump(`S_3E`);
let lbl_000006e2;
showTextbox();
text(() => {
   `It was just like...`;

});
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `${voice(S3B095)}



${noWait}`;
   Append`${center}It's all your fault${waitVoice}${noWait}`;
   clearPage();
});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `IMG04A`, transition: 26 });
hideTextbox();
ADV_Mode();
showDimOverlay();
playSFX({ name: `SE10_11`, a1: 1, volume: 100 });
waitForSFX();
setMonoColorOverlayFadeOutDuration(21);
fadeOutMonoColorOverlay();
unSkippableDelay(8);
monoColorOverlay({ interval: 4, color: WHITE });
dimOff_ac = 0;
closeDimOverlay();
bgload({ name: `EV_SA04A`, transition: 26 });
playBGM({ num: 17, volume: 97 });
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
showTextbox();
text(() => {
   Kid`"Y...you..."`;
   `A hot surge of hate raced through me.`;
   Kid`"Who the hell do you think you are! You good for nothing...!"`;

});
bgload({ name: `BG09A1`, transition: 20 });
fgload({ id: 1, name: `TU06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `I screamed and grabbed Tsugumi by the collar.`;
   You(S3C047)`"What are you doing? Stop it!"`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `You grabbed me from behind and pulled me away from Tsugumi.`;
   Kid`"Let go! Let go! I said, let go of me!"`;
   `I continued to struggle violently.`;
   `I was like a desperate beast, devoid of all reason.`;
   `With my fangs bared and a thirst for blood.`;

});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
stopBGM();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `What was left of my mind had ceased to be 'me.'`;
   `.......`;
   `....`;
   `...`;

});
hideTextbox();
l_choice = 0;
jump(`SS4A`);
