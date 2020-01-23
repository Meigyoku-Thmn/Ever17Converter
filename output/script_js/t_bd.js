l_b0 = 5;
l_dayA = 6;
l_dayB = 6;
setDialogBoxColor(GREEN);
playBGM({ num: 21, volume: 100 });
removeBG({ mode: BLACK, transition: 2 });
setSceneTitle({ index: 47 });
showTextbox();
text(() => {
   `A few more hours later...`;
   `We'd tried everything.`;
   `There was nothing we else could do to get out 
of here.`;
   `There were no paths left for us to take.`;
   `Hit by that reality, all of my remaining 
strength drained away. All I could do was 
watch the seconds on the clock slip by.`;
   `The kid's condition had gotten worse, and he 
was sleeping in a capsule pod.`;
   `We had tried contacting the outside using the 
communication lines.`;
   `But...`;
   `Nothing had changed since we were at LeMU. `;
   `All sonic, and electrical communications were 
down.`;
   `Every once in a while, static would come 
through the receiver from the outside.`;
   `Which meant that the lines were 
functioning...but the computer's 
communication software wasn't working.`;
   `We had been trapped here by Leiblich 
Pharmaceutical to hide the existence of IBF 
and its records from the outside world.`;
   `Our reality was a nightmare.`;
   `How I wished...`;
   `That it all had only been a long dream...`;
   `Thinking that, I closed my eyes slowly.`;

});
bgload({ name: `BG34A1`, transition: 20 });
playSFX({ name: `SE06_00`, a1: 0, volume: 95 });
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
   `${voice(TBD000A)}"Three minutes ${waitVoice}${voice(TBD000B)}before implosion."`;

});
showTextbox();
text(() => {
   `An announcement grated mechanically from the 
room's speakers.`;

});
playSFX({ name: `SE06_01`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `I could hear sharp metallic sounds echoing 
from somewhere.`;
   `The walls creaked ominously and the floor 
shook.`;

});
showTextbox();
text(() => {
   Tsugumi(TBD001)`"Looks like...it's started."`;
   `Tsugumi looked at the ceiling, and murmured 
this.`;
   Takeshi`"Started...?"`;
   Tsugumi(TBD002)`"Or I guess you could say, it's finished."`;
   Takeshi`"Finished..."`;
   `I looked up at the ceiling.`;

});
playSFX({ name: `SE06_01`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `And I couldn't see anything.`;
   `The heavy reverberations were coming from 
somewhere far away in the water.`;

});
showTextbox();
text(() => {
   Tsugumi(TBD003)`"In the end..."`;
   Tsugumi(TBD004)`"It looks like this is my place."`;
   `Tsugumi let these words fall from her lips 
without any expression.`;
   You(TBD005)`"Tsugumi...what are you talking about?"`;
   You(TBD006)`"Place? What place?"`;
   `From her spot on the floor, You raised her 
head feebly.`;

});
showTextbox();
text(() => {
   Tsugumi(TBD007)`"I've been searching for so long. Now I've 
finally found it."`;
   Tsugumi(TBD008)`"This is my..."`;
   Tsugumi(TBD009)`"Place to die."`;

});
fgload({ id: 1, name: `TU09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi stood unsteadily.`;
   `She dragged...her right leg....`;
   Takeshi`"Tsugumi, what happened to your...leg?"`;
   Tsugumi(TBD010)`"Oh, this?"`;
   Tsugumi`"......"`;
   `Tsugumi looked at her leg as if it was the 
first time that she had noticed.`;
   Tsugumi(TBD011)`"It really wasn't anything."`;
   Tsugumi(TBD012)`"I kept telling myself I couldn't die no 
matter what..."`;
   Tsugumi(TBD013)`"But it looks like I was wrong again..."`;

});
hideTextbox();
playSFX({ name: `SE06_00`, a1: 0, volume: 100 });
eff_4f = 153;
eff_3b = 1;
eff_3c = VAR_c6_0_6;
eff_3d = 2;
eff_3e = 2;
eff_3f = VAR_c6_0_6;
eff_40 = 2;
openShakeScreenAnim();
showTextbox();
text(() => {
   `${voice(TBD014A)}"Two minutes ${waitVoice}${voice(TBD014B)}before implosion". `;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU09ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Dragging her leg, Tsugumi hobbled toward the 
door.`;
   Takeshi`"Tsugumi..."`;
   Takeshi`"W-wait!"`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE05_11`, a1: 0, volume: 100 });
shakeScreen();
showTextbox();
text(() => {
   `I tried to chase after her, but tripped 
awkwardly.`;

});
hideTextbox();
playSFX({ name: `SE05_11`, a1: 0, volume: 95 });
shakeScreenHard();
showTextbox();
text(() => {
   `My hands hit the floor. When I tried to 
stand...I fell to the floor again.`;
   `My legs wouldn't move as I wanted.`;
   `Sprawled out on the floor, my whole body was 
numb and I couldn't move.`;
   Takeshi`"...!?"`;
   Takeshi`"W-what's happening...to me."`;
   You`"......"`;

});
fgload({ id: 1, name: `TU09ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"......"`;

});
playSFX({ name: `SE02_01`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   Takeshi`*cough*`;
   `I started coughing, suddenly, and put my hand 
to my mouth.`;
   `Removing it slowly...`;
   `I noticed my palm was sticky with blood.`;
   Takeshi`"Tsugumi...where are...you going?"`;

});
showTextbox();
text(() => {
   `My vision began to grow dim.`;
   `The distance separating us became distorted.`;
   Tsugumi`"......"`;

});
fgload({ id: 1, name: `TU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(TBD015)`"Who knows...?"`;
   `Tsugumi tilted her head.`;

});
fgload({ id: 1, name: `TU17ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(TBD016)`"Pretending to be friends wasn't so bad, 
but..."`;
   `She opened up the flood hatch, and went into 
the infirmary.`;

});
fgload({ id: 1, name: `TU10ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(TBD017)`"This is probably the last time we'll see each 
other."`;
   `Her outline seemed to flicker faintly.`;

});
fgload({ id: 1, name: `TU02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(TBD018)`"Good-bye..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `As Tsugumi walked down the hallway...I lost 
sight of her.`;

});
playSFX({ name: `SE00_06`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `She closed the hatch from the outside.`;
   `She turned the handle so I knew that the door 
was sealed.`;

});
hideTextbox();
stopSFX()
showTextbox();
text(() => {
   `In that instant—`;

});
hideTextbox();
playSFX({ name: `SE02_10`, a1: 0, volume: 100 });
eff_4f = 0;
eff_3b = 1;
eff_3c = VAR_cb_0_6;
eff_3d = 7;
eff_3e = 2;
eff_3f = VAR_c6_0_6;
eff_40 = 4;
openShakeScreenAnim();
delay({ interval: 120 });
showTextbox();
text(() => {
   `I heard the terrible roar of water from the 
passageway on the other side of the wall.`;
   `The watertight hatch groaned and buckled 
under the tremendous force of the water, but 
somehow withstood the pressure.`;

});
hideTextbox();
showTextbox();
text(() => {
   Takeshi`"Tsu...Tsugumi...!!"`;
   You(TBD019)`"Tsugumi...!!"`;

});
hideTextbox();
stopSFX()
eff_4f = 0;
eff_3b = 1;
eff_3c = VAR_c2_0_6;
eff_3d = 1;
eff_3e = 2;
eff_3f = VAR_c2_0_6;
eff_40 = 1;
showTextbox();
text(() => {
   `${voice(TBD020A)}"One minute ${waitVoice}${voice(TBD020B)}before implosion."`;

});
playSFX({ name: `SE03_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Beeeeeeeeeeep......`;
   `The alarm from the pod's control panel started 
shrieking a high-pitched warning.`;
   `I turned my head to look over at the source 
of the noise.`;
   `The vital signs, which should had been 
displayed on the monitor, were no longer 
moving.`;

});
hideTextbox();
closeShakeScreenAnim();
playSFX({ name: `SE09_00L`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   You(TBD021)`"Kid..."`;
   Takeshi`"Kid...no..."`;
   `The alarm wouldn't stop,`;
   `Its cold, flat tone, drowned out the silence.`;
   `The lines weren't moving. No heartbeat. No 
breathing. Nothing.`;
   You(TBD022)`"It can't be..."`;
   You(TBD023)`"It's got to be wrong... "`;
   You(TBD024)`"Aaagh...."`;

});
hideTextbox();
showTextbox();
text(() => {
   You(TBD025)`"Somebody tell me this is all just a bad 
joke..."`;
   You(TBD026)`"Takeshi..."`;
   You(TBD027)`"Tell me it's a lie..."`;
   `Lying flat on the floor, You started sobbing.`;

});
hideTextbox();
playSFX({ name: `SE09_00L`, a1: 0, volume: 95 });
eff_4f = 0;
eff_3b = 1;
eff_3c = VAR_c5_0_6;
eff_3d = 3;
eff_3e = 2;
eff_3f = VAR_c5_0_6;
eff_40 = 3;
showTextbox();
text(() => {
   `The terrible roaring from overhead gradually 
became louder.`;
   `It seemed as if the whole floor were trembling.`;
   `Ignoring the complaints from my body, I used 
the rest of my strength to pull myself close 
to You.`;
   You(TBD028)`"Takeshi...where are you...?"`;
   Takeshi`"I'm...here..."`;

});
hideTextbox();
showTextbox();
text(() => {
   You(TBD029)`"Where are you?"`;
   You(TBD030)`"Give me your hand..."`;
   `The floor was wet with blood.`;
   `I somehow slid my arm over to her.`;
   `Both of You's hands took my right hand, 
closing around it gently.`;

});
bgload({ name: `EV_YU15A`, transition: 20 });
showTextbox();
text(() => {
   `Her small hands were icy cold.`;

});
hideTextbox();
showTextbox();
text(() => {
   You(TBD031)`"Takeshi..."`;
   `You came crawling over to me, pulling closer 
the hand in her grasp.`;
   `She hugged my hand close and held it to her 
chest.`;
   `Squeezing it closely, firmly.`;
   `The palm of my hand covered her chest.`;

});
hideTextbox();
showTextbox();
text(() => {
   You(TBD032)`"I hate this..."`;
   You(TBD033)`"It's so cold..."`;
   You(TBD034)`"I..."`;
   You(TBD035)`"I don't want to die..."`;

});
hideTextbox();
showTextbox();
text(() => {
   `You's body was starting to shake.`;
   `I could tell from my hand pressed against her 
that she was rapidly losing energy.`;

});
showTextbox();
text(() => {
   You(TBD036)`"Takeshiii...."`;
   You(TBD037)`"My heart..."`;
   You(TBD038)`"My heart...feels like it's going to burst..."`;
   `Her skin and clothes were freezing cold.`;
   `The only place where warmth remained was her 
chest, where our hands were touching.`;
   `You's heart was beating so hard, it felt like 
it would explode.`;

});
hideTextbox();
showTextbox();
text(() => {
   You(TBD039)`"I'm scared..."`;
   You(TBD040)`"Help me..."`;
   You(TBD041)`"Help me Takeshi."`;
   `Her voice was getting hoarse, and she was 
having trouble breathing.`;
   `I couldn't move anymore either.`;
   `I tried to breathe - to comfort her - but all 
that came from my mouth were red drops of 
blood.`;
   `Extending my fingers toward You, I ran them 
over her body to check if she were still alive.`;

});
hideTextbox();
showTextbox();
text(() => {
   You(TBD042)`"Aagh..."`;
   You(TBD043)`"It hurts..."`;
   `Her whole body was wracked with spasms,`;
   `Her frame bent, twitching backward...`;

});
hideTextbox();
playSFX({ name: `SE09_00L`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `But soon, even her shaking became weaker.`;
   `She became colder and colder with each passing 
moment.`;
   `Only her heart remained beating ferociously.`;
   `It sounded far away, as though it could 
almost be my imagination.`;

});
hideTextbox();
bgload({ name: `EV_YU15B`, transition: 20 });
showTextbox();
text(() => {
   You(TBD044)`"Takeshi..."`;
   You(TBD045)`"You probably didn't...feel anything about me, 
but..."`;
   `Her voice was devoid of strength.`;
   `A single tear followed these words.`;
   You(TBD046)`"But I...really liked...."`;

});
hideTextbox();
showTextbox();
text(() => {
   `You's heart made one last frantic burst.`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
closeShakeScreenAnim();
eff_4f = 0;
eff_3b = 1;
eff_3c = VAR_c1_0_6;
eff_3d = 1;
eff_3e = 2;
eff_3f = VAR_c1_0_6;
eff_40 = 1;
bgload({ name: `BG34A1`, transition: 0 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `And after that—`;
   `I heard nothing.`;
   `The warmth of her hand was totally gone.`;
   `The beating of her heart lost forever.`;

});
playSFX({ name: `SE10_03`, a1: 0, volume: 100 });
removeBG({ mode: RED, transition: 3 });
bgload({ name: `IMG04A`, transition: 20 });
showTextbox();
text(() => {
   Takeshi`"!!"`;
   `In that moment my vision went red.`;

});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   `Panicking, I wiped my face with my hands`;
   `Red.`;
   `Everything was red......`;
   `I couldn't see anything`;
   `All I could feel was slippery warmth.`;
   `My face was pressed into the floor so hard 
that I thought it would become part of it.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
dimOff_ac = 1;
closeDimOverlay();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `My breathing had stopped.`;
   `I couldn't move.`;
   `I couldn't support myself.`;
   `The floor was cold and hard.`;
   `My body stiffened and became cold as well.`;
   `My consciousness faded, disappearing...`;
   `And...`;
   `From somewhere...`;

});
hideTextbox();
playSFX({ name: `SE03_06`, a1: 0, volume: 90 });
stopBGM();
showTextbox();
text(() => {
   `The crackling sounds of the communication 
lines faded away.`;

});
bgload({ name: `BG34A2`, transition: 20 });
removeBG({ mode: BLACK, transition: 0 });
showTextbox();
text(() => {
   `That was the last sound I heard.`;

});
hideTextbox();
stopSFX()
delay({ interval: 180 });
g_tsugumi_sora_bd__cleared = 1;
l_ending = `takeshi_bd`;
l_choice = 0;
jump(`Y_ED`);
