setDialogBoxColor(BLUE);
setSceneTitle({ index: 56 });
l_b0 = 5;
l_dayA = 2;
l_dayB = 2;
bgload({ name: `BG10A2`, transition: 10 });
playBGM({ num: 2, volume: 97 });
clock(`1:39`);
setFGRenderOrder(4, 1, 2);
showTextbox();
text(() => {
   `I wondered how much time had passed since the 
pressurization had started.`;
   `I noticed that the date had already changed.`;
   `I waited on the hard floor for the treatment 
to finish.`;
   Takeshi(S2A000)`"Um...ummmna...myuna...myuna."`;
   `...He was the only one of us...`;

});
multifgload2({ id1: 1, id2: 2, name1: `SA03ADM`, name2: `YU04BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2A001)`"Geez, he's so loud...that idiot."`;
   Sara(S2A002)`"Nakkyu...I can't sleep...at all...."`;
   `Takeshi's talking in his sleep echoed 
throughout the room.`;
   `We were mentally drained and the three of us 
were in no state to sleep.`;
   `No, it was worse than that. Gradually 
we had started to go mad.`;
   Kid`"Why don't we just wake him up and tell him?"`;
   You(S2A003)`"It's no use. Snoring and talking in your 
sleep aren't something that people can 
control."`;
   Kid`"We could tape his mouth shut...?"`;

});
fgload({ id: 1, name: `SA08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A004)`"Or even better, we could drape a wet towel 
over his face..."`;
   Kid`"...Wouldn't that kill him?"`;

});
fgload({ id: 2, name: `YU05BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2A005)`"Yeah, you're right..."`;

});
fgload({ id: 2, name: `YU04BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2A006)`"Why is HE the only one that gets to sleep on 
the bed?"`;

});
playSFX({ name: `SE05_03`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `You let the bed have a swift kick as 
she said this.`;

});
l_choice = 51;
random(7);
ifRandomIs(0).jump(lbl_000001d6);
ifRandomIs(1).jump(lbl_000001df);
ifRandomIs(2).jump(lbl_000001e8);
ifRandomIs(3).jump(lbl_000001f1);
ifRandomIs(4).jump(lbl_000001fa);
ifRandomIs(5).jump(lbl_00000203);
ifRandomIs(6).jump(lbl_0000020c);
let lbl_000001d6;
showTextbox();
text(() => {
   Takeshi(S2A007)`"...'Stop it,'...I said that tickles...."`;

});
goto(lbl_00000215);
let lbl_000001df;
showTextbox();
text(() => {
   Takeshi(S2A008)`"...Ah, HA...Woo, hoo, hoo...."`;

});
goto(lbl_00000215);
let lbl_000001e8;
showTextbox();
text(() => {
   Takeshi(S2A009)`"...No....no...not there...."`;

});
goto(lbl_00000215);
let lbl_000001f1;
showTextbox();
text(() => {
   Takeshi(S2A010)`"...Oh...yeah...oh...I...like...that..."`;

});
goto(lbl_00000215);
let lbl_000001fa;
showTextbox();
text(() => {
   Takeshi(S2A011)`"...More...more...ple...ase..."`;

});
goto(lbl_00000215);
let lbl_00000203;
showTextbox();
text(() => {
   Takeshi(S2A012)`"...Ooooh...right there...."`;

});
goto(lbl_00000215);
let lbl_0000020c;
showTextbox();
text(() => {
   Takeshi(S2A013)`"...Oh...no...I'm...coming..."`;

});
goto(lbl_00000215);
let lbl_00000215;
showTextbox();
text(() => {
   `Takeshi shamelessly carried on like that, 
looking happily asleep.`;
   Sara(S2A014)`"I wonder what kind of dream he is having."`;
   Kid`"Who knows...?"`;

});
fgload({ id: 2, name: `YU05BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2A015)`"I'll bet it's something sexual, judging 
from his stupid expression."`;
   `You reached out toward Takeshi's face and 
pinched his cheek.`;
   `And then...`;

});
stopBGM();
showTextbox();
text(() => {
   Takeshi(S2A016)`"Y...You...You..."`;

});
multifgload2({ id1: 1, id2: 2, name1: `SA06ADM`, name2: `YU06BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2A017)`"Huh?"`;
   Sara(S2A018)`"Huh?"`;
   Kid`"..."`;
   Takeshi(S2A019)`"...Smack, numya, mumya..."`;
   Kid`"It seems...like he is talking in his sleep."`;
   Sara(S2A020)`"He's not dreaming of You, is he...?"`;

});
fgload({ id: 2, name: `YU14BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2A021)`"Stop that...there's no way."`;

});
l_choice = 51;
random(3);
ifRandomIs(0).jump(lbl_0000029d);
ifRandomIs(1).jump(lbl_000002a6);
ifRandomIs(2).jump(lbl_000002af);
let lbl_0000029d;
showTextbox();
text(() => {
   Takeshi(S2A022)`"Ooon....nyumm...You's body....nyum...myum..."`;

});
goto(lbl_000002b8);
let lbl_000002a6;
showTextbox();
text(() => {
   Takeshi(S2A023)`"Ooonyumm...You....nyum...myum..."`;

});
goto(lbl_000002b8);
let lbl_000002af;
showTextbox();
text(() => {
   Takeshi(S2A024)`"Oon...nyum...hey, You...myumya..."`;

});
goto(lbl_000002b8);
let lbl_000002b8;
fgload({ id: 2, name: `YU04BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2A025)`"Hey, Takeshi! How dare you have dreams 
about me!"`;

});
l_choice = 51;
random(7);
ifRandomIs(0).jump(lbl_00000315);
ifRandomIs(1).jump(lbl_0000031e);
ifRandomIs(2).jump(lbl_00000327);
ifRandomIs(3).jump(lbl_00000330);
ifRandomIs(4).jump(lbl_00000339);
ifRandomIs(5).jump(lbl_00000342);
ifRandomIs(6).jump(lbl_0000034b);
let lbl_00000315;
showTextbox();
text(() => {
   Takeshi(S2A026)`"...She's got a long name...wants to see her 
dad...myumyum."`;

});
goto(lbl_00000354);
let lbl_0000031e;
showTextbox();
text(() => {
   Takeshi(S2A027)`"...and she's way too rough...that's why 
she can't get a guy...myumyum."`;

});
goto(lbl_00000354);
let lbl_00000327;
showTextbox();
text(() => {
   Takeshi(S2A028)`"...and flat...as a board...myumyum."`;

});
goto(lbl_00000354);
let lbl_00000330;
showTextbox();
text(() => {
   Takeshi(S2A029)`"...and talks and talks...like an old bag 
that likes to gossip...myumyum."`;

});
goto(lbl_00000354);
let lbl_00000339;
showTextbox();
text(() => {
   Takeshi(S2A030)`"...Ow! Idiot! I'll kick you into next 
week!...myumyum."`;

});
goto(lbl_00000354);
let lbl_00000342;
showTextbox();
text(() => {
   Takeshi(S2A031)`"...You...oh, no...please...no 
more...sssstop...OooOoh that's...myumyum."`;

});
goto(lbl_00000354);
let lbl_0000034b;
showTextbox();
text(() => {
   Takeshi(S2A032)`"...You...stop...don't eat...that's not 
food...just stop...myumyum."`;

});
goto(lbl_00000354);
let lbl_00000354;
multifgload2({ id1: 1, id2: 2, name1: `SA08ADM`, name2: `YU06BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2A033)`"Huh?"`;
   Sara(S2A034)`"What?"`;
   Kid`"........."`;
   Takeshi(S2A035)`"Oooow...ooon......You.......dummy......"`;

});
fgload({ id: 2, name: `YU10BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2A036)`"H...hey,hey, hey - Takeshi! Wake up!"`;

});
playBGM({ num: 18, volume: 100 });
showTextbox();
text(() => {
   `You had grabbed hold of Takeshi's collar.`;
   `If we didn't stop her, she might have 
strangled him.`;

});
fgload({ id: 1, name: `SA17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A037)`"Take it easy, Nakkyu. He's just talking in 
his sleep."`;
   Kid`"She's right. He doesn't mean anything by 
it...probably not anyway."`;
   `Takeshi continued to blabber with a dumb, 
blissful look as he slept, oblivious to our 
troubles.`;

});
fgload({ id: 2, name: `YU04BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2A038)`"I've had it! I have no choice but to...!"`;

});
fgload({ id: 1, name: `SA03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Kid`"Wh-what are you going to do?"`;
   `You put her hand in her pocket and pulled out 
the marker from before.`;

});
playSFX({ name: `SE10_08`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `She popped the cap off of the pen and prepared 
to...`;

});
fgload({ id: 2, name: `YU02BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2A039)`"Giggle!"`;

});
fgload({ id: 1, name: `SA06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A040)`"No...you're not going to...?"`;
   You(S2A041)`"You bet I am."`;

});
fgload({ id: 1, name: `SA01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A042)`"You're gonna chop his head off..."`;

});
fgload({ id: 2, name: `YU04BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2A043)`"Not with a pen!"`;

});
bgload({ name: `EV_ET05A`, transition: 20 });
showTextbox();
text(() => {
   You(S2A044)`"Watch this. This is what'll do."`;

});
playSFX({ name: `SE10_09`, a1: 0, volume: 100 });
bgload({ name: `EV_ET05B`, transition: 20 });
showTextbox();
text(() => {
   `As she said this, You took the pen and started 
drawing big round eyes - like a girl from a 
comic - on Takeshi's eyelids. `;
   Takeshi(S2A045)`"Zzzz...zzz..."`;

});
showTextbox();
text(() => {
   You(S2A046)`"He, he, he...what goes around, comes around. 
Take that."`;
   Kid`"Heee, heee.... It's a masterpiece..."`;

});
showTextbox();
text(() => {
   Sara(S2A047)`"Ha, that's funny. Let me try, Nakkyu."`;

});
playSFX({ name: `SE10_09`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Scribble, scribble, scribble.`;

});
bgload({ name: `EV_ET05C`, transition: 20 });
showTextbox();
text(() => {
   `Sara sketched a whirlpool on Takeshi's cheek.`;
   Sara(S2A048)`"Nin! Nin! Ninja!"`;
   Takeshi(S2A049)`"Ooon...nyum..."`;

});
showTextbox();
text(() => {
   Kid`"HA, HA, HA, HA! I'm laughing so hard my gut 
hurts..."`;
   You(S2A050)`"Hey, Kid. Why don't you draw something on 
this idiot? You'll feel loads better."`;
   Kid`"Alright. Let's see. Um..."`;

});
playSFX({ name: `SE10_09`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Scribble, scribble, scribble.`;

});
bgload({ name: `EV_ET05D`, transition: 20 });
showTextbox();
text(() => {
   `I drew meat on his forehead.`;
   `And the three of us kept taking turns doing 
graffiti on his face.`;

});
hideTextbox();
removeBG({ mode: BLACK, transition: 2 });
playSFX({ name: `SE10_09`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Scribble, scribble, scribble.`;

});
playSFX({ name: `SE10_09`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Scribble, scribble, scribble.`;

});
playSFX({ name: `SE10_09`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Scribble, scribble, scribble.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
showTextbox();
text(() => {
   `...Dozens of minutes later.`;
   `Takeshi had been further transformed into a 
much-decorated creature, miserable, disfigured 
and hard-to-describe.`;

});
hideTextbox();
delay({ interval: 90 });
stopBGM();
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
chapterCutin({ name: `00000000` });
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
setFGRenderOrder(4, 2, 1);
bgload({ name: `BG10A1`, transition: 26 });
fgload({ id: 4, name: `SO02ADS`, x: 320, useAnim: false });
playBGM({ num: 1, volume: 100 });
playSFX({ name: `SE00_04`, a1: 0, volume: 90 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`5:15`);
showTextbox();
text(() => {
   Sora(S2A051)`"Good morning everyone."`;
   Sora(S2A052)`"Did you sleep well?"`;

});
multifgload2({ id1: 1, id2: 2, name1: `SA03ADS`, name2: `YU05BDS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2A053)`"Thanks to somebody, I was up all night."`;

});
fgload({ id: 4, name: `SO06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S2A054)`"Huh? You didn't sleep a wink?"`;
   You(S2A055)`"Nope, because of this idiot."`;

});
playSFX({ name: `SE05_03`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `You lifted her foot and kicked Takeshi who was 
lying on the bed.`;
   Takeshi(S2A056)`"Ooon...nyum...I'd like a 
perm...please...nyuma..."`;
   `Takeshi was still dreaming.`;

});
fgload({ id: 4, name: `SO02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S2A057)`"Ha, ha, haaaaaa...."`;
   `It looked like Sora had noticed the graffiti 
and was trying to keep from exploding with 
laughter.`;
   Sora(S2A058)`"What happened to his face?"`;

});
fgload({ id: 1, name: `SA05ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A059)`"We got so mad..."`;
   Kid`"We took turns drawing on him."`;

});
fgload({ id: 2, name: `YU02BDS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2A060)`"We scribbled the night away with this marker."`;
   `Saying that, You laughed loudly.`;

});
fgload({ id: 4, name: `SO03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S2A061)`"Even so, maybe you went a little too far..."`;

});
fgload({ id: 1, name: `SA07ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A062)`"No, no. We didn't sleep at all because of 
this noisy beast."`;
   Kid`"It's poetic justice."`;

});
fgload({ id: 2, name: `YU01BDS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2A063)`"So Sora, hold off on telling him for a while, 
alright?"`;

});
fgload({ id: 4, name: `SO07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S2A064)`"You mean...you want me to pretend that 
I don't notice?"`;

});
fgload({ id: 1, name: `SA02ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A065)`"That's it."`;
   Takeshi(S2A066)`"Ooon...nyuum...it's all 
white...curlies...nyumanya..."`;

});
fgload({ id: 2, name: `YU05BDS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2A067)`"Enough of that. Sora, what about the 
decompression...?"`;

});
fgload({ id: 4, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S2A068)`"You are all done of course."`;
   Sora(S2A069)`"Is there anyone that feels ill?"`;

});
fgload({ id: 1, name: `SA01ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A070)`"I feel fine."`;
   Kid`"Me, too."`;

});
fgload({ id: 2, name: `YU07BDS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2A071)`"Well, we were up all night so I feel groggy."`;
   Sora(S2A072)`"And Takeshi...?"`;

});
fgload({ id: 1, name: `SA05ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A073)`"Just look at him."`;
   Takeshi(S2A074)`"Ummmh...ummmh...math, social studies, 
science, English class, music......I can't 
play that...zzz..."`;

});
fgload({ id: 4, name: `SO02ADS`, x: 320, useAnim: true });
fgload({ id: 4, name: `SO10ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S2A075)`"Alright everyone. I would like to have you 
all gather in the Control Room at once."`;

});
multifgload2({ id1: 1, id2: 2, name1: `SA06ADS`, name2: `YU01BDS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S2A076)`"I'll go on ahead."`;
   Kid`"Has...anything happened...?"`;

});
fgload({ id: 4, name: `SO05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S2A077)`"I will tell you all about it in the Control 
Room..."`;
   Sora(S2A078)`"Now if you'll excuse me."`;

});
hideTextbox();
removeFG({ id: 4, useAnim: true });
playSFX({ name: `SE00_04`, a1: 1, volume: 90 });
waitForSFX();
showTextbox();
text(() => {
   `Sora ducked and left the pressurization 
chamber.`;
   `Sora's face as she left was devoid of humor.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `BG26B3R`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`5:29`);
showTextbox();
text(() => {
   `We got Takeshi up and made for the Control 
Room.`;
   `Sara was next to me...`;
   `Ahead You and Takeshi were talking about 
something as they walked.`;
   `I couldn't quite make out what they were 
saying.`;
   `Eventually Takeshi slowed down, separated 
from You and came back to us.`;
   Takeshi(S2A079)`"Hey, you got any idea what You's all miffed 
about?"`;

});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid`"Who knows?"`;
   Sara(S2A080)`"You don't have any ideas?"`;
   Takeshi(S2A081)`"If I did, you think I'd be asking you?"`;
   Takeshi(S2A082)`"You told me to 'look in the mirror,' but..."`;
   Kid`"Huh?"`;
   Takeshi(S2A083)`"What?"`;

});
fgload({ id: 1, name: `SA07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A084)`"That's no fun..."`;
   `When Sara said that, it seemed like Takeshi 
finally figured it out. He wiped his face 
with his hand.`;
   Takeshi(S2A085)`"What's this?"`;
   `He stared at the black ink on the palm of 
his hand.`;
   Takeshi(S2A086)`"Damn that girl..."`;
   `Clicking his tongue, Takeshi hurried back up 
ahead to You.`;

});
fgload({ id: 1, name: `SA09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Sara and I laughed as we watched Takeshi 
and You exchange words.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `BG15B1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`5:36`);
showTextbox();
text(() => {
   `Tsugumi was in front of the Control Room.`;
   `She was leaning against the wall, her arms 
folded and facing down.`;
   Kid`"Morning."`;

});
multifgload2({ id1: 1, id2: 2, name1: `TU05ADM`, name2: `SA02ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A087)`"Morning."`;

});
fgload({ id: 1, name: `TU08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   `With our greetings, Tsugumi slowly raised 
her head.`;

});
fgload({ id: 2, name: `SA01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A088)`"Hey, Tsugumi, where did you go last night?"`;
   Tsugumi`"........."`;
   Kid`"Are you alright?"`;
   Tsugumi`"........."`;

});
fgload({ id: 2, name: `SA03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A089)`"Sora was telling us about when there is a 
sudden change in air pressure..."`;

});
fgload({ id: 1, name: `TU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S2A090)`"The bends? I know."`;
   Tsugumi(S2A091)`"Don't worry about me. I'm fine."`;
   `(Huh?) Flashed through my mind.`;
   `...it seemed like something about Tsugumi had 
changed from the day before.`;
   `Maybe it was loneliness, but her attitude and 
way of talking had been toned down.`;
   Sara(S2A092)`"Are you really fine?"`;
   Tsugumi(S2A093)`"Yeah..."`;
   Tsugumi(S2A094)`"Let's get inside."`;
   Tsugumi(S2A095)`"Sora is waiting for us."`;

});
fgload({ id: 2, name: `SA02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   `At Tsugumi's urging, Sara and I entered the 
Control Room.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
setSceneTitle({ index: 57 });
playSFX({ name: `SE00_00`, a1: 1, volume: 100 });
waitForSFX();
bgload({ name: `BG16A1`, transition: 26 });
fgload({ id: 4, name: `SO10ADS`, x: 320, useAnim: false });
playBGM({ num: 14, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
clock(`5:40`);
showTextbox();
text(() => {
   Sora(S2A096)`"I'm sorry that I had to have you gather so 
early. There was no other way."`;
   Sora(S2A097)`"Actually, everyone, there is something 
I need to tell you right away."`;

});
fgload({ id: 4, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Sora paused for a second.`;
   `Sora looked over all five of us...You, Sara, 
Tsugumi, Takeshi and finally me.`;
   `The cooling fan whirred away in the silence.`;
   `Occasionally the sound of metal on metal 
would ring through the room.`;
   `The five of us waited on Sora's next words.`;

});
fgload({ id: 4, name: `SO10ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S2A098)`"Last night, after the four of you, apart from 
Tsugumi, entered the pressurization chamber..."`;
   Sora(S2A099)`"I was in the Control Room here thinking about 
ways to escape or contact the outside."`;

});
fgload({ id: 4, name: `SO05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S2A100)`"And..."`;
   Sora(S2A101)`"While I was checking the internal status of 
LeMU, I discovered something."`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU16BDS`, name2: `SA12ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2A102)`"You found a way to escape?!"`;

});
fgload({ id: 4, name: `SO03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S2A103)`"No."`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU17BDS`, name2: `SA11ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A104)`"Then a way to contact the outside?"`;
   Sora(S2A105)`"Not yet."`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `KB11ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2A106)`"Then what did you figure out?"`;

});
fgload({ id: 4, name: `SO10ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S2A107)`"I discovered the strength of pressure the 
bulkheads can withstand...I found their 
limits."`;
   `Saying that, Sora turned her eyes to the 
side of the console.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   `In the darkness, a three-dimensional image of 
LeMU sprung up.`;

});
bgload({ name: `IMG03A`, transition: 20 });
showTextbox();
text(() => {
   Kid`"Pressure bulkhead...what?"`;
   Sora(S2A108)`"I mean LeMU's walls. The partitions between 
the outer seawater and the inner air."`;

});
hideTextbox();
playSFX({ name: `SE03_01`, a1: 0, volume: 100 });
setNumberOfFlash(1);
setFlashRGBColor(255, 255, 255);
triggerFlash();
l_accumulator = 0;
tweenZoom({ x: 440, y: 170, hx: 400, hy: 300, duration: 40 });
delay({ interval: 30 });
playSFX({ name: `SE03_01`, a1: 0, volume: 100 });
setNumberOfFlash(1);
setFlashRGBColor(255, 255, 255);
triggerFlash();
bgloadCrop({ name: `IMG03A`, transition: 20, x: 440, y: 170, hx: 400, hy: 300 });
showTextbox();
text(() => {
   Sara(S2A109)`"What do you mean...when you say you found the 
limit?"`;
   Sora(S2A110)`"Like I said yesterday, LeMU is a structure 
basically constructed on a saturation diving 
specification design."`;
   Sora(S2A111)`"In other words, the internal air pressure 
equals or is greater than the external water 
pressure."`;
   Sora(S2A112)`"However, the complex's internal air pressure 
is currently at 1 atmosphere..."`;
   Sora(S2A113)`"Therefore..."`;
   You(S2A114)`"LeMU's outer shell is constantly being 
subjected to severe water pressure."`;
   Sora(S2A115)`"Correct."`;
   You(S2A116)`"But LeMU is not constructed to endure this 
situation for a long period of time."`;
   You(S2A117)`"Inevitably it will, at some point, reach its 
limit..."`;
   Sora(S2A118)`"Well put, You."`;
   Takeshi(S2A119)`"So...when is this limit...?"`;
   Sora(S2A120)`"According to LeMMIH's calculations..."`;
   Tsugumi(S2A121)`"In 119 hours...or five days from now, right?"`;
   `We stared in tandem at Tsugumi.`;

});
bgload({ name: `BG16A1`, transition: 30 });
multifgload3({ name1: `TU05ADS`, name2: `SA06ADS`, name3: `SO06ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   Sora(S2A122)`"You are well informed. Did you look that 
up on the Security Office terminal?"`;
   Tsugumi`"........."`;

});
fgload({ id: 4, name: `SO10ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S2A123)`"It is exactly as Tsugumi says..."`;
   Sora(S2A124)`"The estimated time of implosion is 
approximately 4:30 a.m. on May 7."`;

});
fgload({ id: 2, name: `SA03ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S2A125)`"Of course, it is only a calculation and 
there is a margin of error."`;

});
fgload({ id: 1, name: `TU08ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S2A126)`"Plus or minus 12 hours...is that the margin 
of error?"`;

});
fgload({ id: 4, name: `SO03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S2A127)`"That is correct, but..."`;

});
fgload({ id: 1, name: `TU05ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   `That pushed us into silence.`;
   `It seemed like everyone was lost in thought.`;
   `We knew for sure that we were in serious 
trouble.`;
   `Sora's words had shaken us a bit.`;
   `But five days sounded like a long time and 
it really didn't register with me.`;
   `I kept thinking that a rescue team would 
arrive at anytime...`;
   `So I didn't really feel that it was worth 
worrying about.`;
   Kid`"Sora."`;
   Kid`"Can I summarize what you said to make sure 
I got it?"`;

});
multifgload2({ id1: 4, id2: 2, name1: `SO07ADS`, name2: `SA08ADS`, x1: 320, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S2A128)`"?"`;
   Kid`"At 4:30 a.m. on May 7, the walls of LeMU 
will reach the limit of the pressure that 
they can handle."`;

});
fgload({ id: 1, name: `TU08ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Kid`"But that might happen at 4:30 p.m. on the 
sixth or at 4:30 p.m. on the seventh."`;

});
fgload({ id: 2, name: `SA05ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid`"Is that right so far?"`;

});
fgload({ id: 4, name: `SO03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S2A129)`"Yes..."`;
   Kid`"So doesn't the opposite also hold true?"`;
   Kid`"I mean, at the worst LeMU will be fine 
until 4:30 p.m. on May 6."`;

});
fgload({ id: 1, name: `TU05ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Kid`"So we're fine until then and have nothing 
to worry about."`;

});
fgload({ id: 4, name: `SO10ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S2A130)`"We can't be absolutely certain that we will 
be safe..."`;
   Sora(S2A131)`"But judging from the results of LeMMIH's 
calculations, that would appear to be 
the case."`;

});
fgload({ id: 2, name: `SA08ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A132)`"Oh, so that's it..."`;

});
fgload({ id: 2, name: `SA11ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A133)`"So as long as help comes by the sixth, then 
we are okay?"`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU01BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S2A134)`"I see.... If you had said 'We only have one 
more day,' or something I might have burst out 
crying."`;

});
fgload({ id: 4, name: `SO05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2A135)`"So we still have lots of time.... Someone 
will surely come to help us before that."`;
   `The tension in the air broke and sighs of 
relief could be heard around the room.`;
   `Tsugumi, having gotten the information 
somewhere before us was smiling to herself, 
smugly.`;
   `It was 5:50 a.m.`;
   Takeshi(S2A136)`"Yaaaaaaaaawwwwwwn."`;
   `Takeshi gave a large yawn.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
delay({ interval: 30 });
setSceneTitle({ index: 58 });
bgload({ name: `BG21B1`, transition: 26 });
playBGM({ num: 18, volume: 100 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
clock(`6:26`);
showTextbox();
text(() => {
   `Sara and I sat cross-legged on a bench in 
the rest area.`;
   `The floor was covered with water.`;
   Kid`"That was good!"`;

});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A137)`"I'll say!"`;
   `We had just polished off fried chicken 
sandwiches that Takeshi had made for us.`;
   `As for the other four...`;
   `Sora was, as usual, cooped up in the Control 
Room trying to make contact with LeMMIH.`;
   `Tsugumi had vanished without saying where she 
was going.`;

});
if (l_know_sora_is_an_ai != 0) goto(lbl_00000d7f);
showTextbox();
text(() => {
   `Takeshi had gone to deliver sandwiches to Sora 
and Tsugumi.`;

});
goto(lbl_00000d84);
let lbl_00000d7f;
showTextbox();
text(() => {
   `Takeshi had gone to deliver a sandwich to 
Tsugumi.`;

});
let lbl_00000d84;
showTextbox();
text(() => {
   `You was changing clothes. Apparently she had 
spilled something on them while eating.`;
   `Fortunately, her normal clothes were safe in 
the changing room in the dry area.`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A138)`"Hey, I'm full now. Why don't we play a game?"`;
   Kid`"A game?"`;
   Sara(S2A139)`"Yeah. The Yamanote Line game or a word 
game..."`;

});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A140)`"I know! Rock, paper, scissors charades!"`;
   Kid`"........."`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A141)`"We play and the winner gets to choose 
something."`;
   Sara(S2A142)`"And then the loser has to mimic it, okay?"`;
   Kid`"........."`;
   Sara(S2A143)`"Ready, jyan, ken, poi!"`;
   Kid`"........."`;

});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A144)`"Come on! Put your hand out."`;
   Kid`"I haven't said I'm going to play. And what 
is that jyan-ken-poi?"`;

});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A145)`"It's what you say when you play rock, paper, 
scissors."`;

});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A146)`"And as to whether or not you are going to 
play...you are!"`;
   Kid`"Who said YOU could decide?"`;

});
fgload({ id: 1, name: `SA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A147)`"Be quiet! Now let's play!"`;
   Sara(S2A148)`"Not doing anything is boring, right?"`;
   Kid`"Oh...alright..."`;

});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A149)`"That's more like it."`;
   Kid`"........."`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A150)`"Okay, here we go."`;
   Sara(S2A151)`"Ready, jyan-ken-poi!"`;
   `I was paper and Sara went scissors.`;

});
fgload({ id: 1, name: `SA09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A152)`"Ha, ha. I won!"`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A153)`"So...I pick..."`;
   Sara(S2A154)`"Salmon."`;
   Kid`"S...salmon? You mean like a fish?"`;
   Sara(S2A155)`"Yup."`;

});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A156)`"So let's see it!"`;
   Kid`"Salmon...salmon..."`;
   Kid`"Salmon salmon salmon salmon salmon..."`;
   `I opened and closed by mouth like a fish, 
gyrating my hips around and doing my best to 
become a salmon.`;

});
fgload({ id: 1, name: `SA09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A157)`"Kya, ha, ha, ha, ha!"`;
   `Sara was laughing and holding her stomach.`;
   `It looked like I had been a good salmon.`;
   Kid`"Alright. Now I'm warmed up! Let's go again!"`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A158)`"Ready, jyan-ken-poi!"`;
   `I went scissors and Sara was paper.`;

});
fgload({ id: 1, name: `SA07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A159)`"Ooooh, I lost."`;

});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A160)`"Don't give me a weird one, okay? Please, 
please."`;
   `I decided to make her act like...`;

});
choice(
   `Mynnie Mousey`,
   `Caesar`,
   `You`,
   `A spoiled baby`,
);
switch (l_choice) {
   case 0: goto(lbl_00000f2a);
   case 1: goto(lbl_00000f8f);
   case 2: goto(lbl_00001022);
   case 3: goto(lbl_000010b5);
}
let lbl_00000f2a;
showTextbox();
text(() => {
   Kid`"I choose Mynnie!"`;

});
fgload({ id: 1, name: `SA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A161)`"What? I can't do that!"`;
   Kid`"Those are the rules."`;

});
fgload({ id: 1, name: `SA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A162)`"Oh...alright. I'll do it..."`;
   Kid`"Okay then. Sara Matsunaga...become Mynnie!"`;

});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A163)`"M-I-C...K-E-Y...M-O-U-S-E-Y...Mickey Mousey 
Mickey Mousey"`;

});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A164)`"Who's the leader of the club That's made 
for you and me"`;
   Kid`"He, he, he..."`;

});
goto(lbl_0000111a);
let lbl_00000f8f;
showTextbox();
text(() => {
   Kid`"Caesar, please."`;

});
fgload({ id: 1, name: `SA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A165)`"How can I be Caesar, you idiot!"`;
   Sara(S2A166)`"I don't think there is anyone who can 
become him!"`;
   Kid`"Those are the rules."`;

});
fgload({ id: 1, name: `SA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A167)`"Hey, no way..."`;
   Kid`"Then, Sara Matsunaga...become 'Caesar'."`;

});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A168)`"Ah...hem."`;

});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A169)`"My name is Caesar."`;
   Sara(S2A170)`"Doth you Hamlet defy you lord? Et tu, my 
friend, Hamlet? Lend me some ears. Not in 
my empire!"`;

});
fgload({ id: 1, name: `SA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A171)`"Then it's war!"`;
   Sara(S2A172)`"Giddy up, giddy up, giddy up..."`;
   Kid`"Kya, ha, ha, ha, ha..."`;
   Kid`"Heeee, my stomach hurts. It really hurts. 
You are too funny..."`;

});
fgload({ id: 1, name: `SA07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A173)`"You don't have to laugh that much..."`;
   Kid`"But...because...that's..."`;
   Kid`"That wasn't...Caesar...but a mixed up 
Hamlet..."`;
   Kid`"Heee, he, he...."`;

});
goto(lbl_0000111a);
let lbl_00001022;
showTextbox();
text(() => {
   Kid`"I choose for you to act out 'You.'"`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A174)`"By You...you mean Nakkyu?"`;
   Kid`"Yup."`;

});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A175)`"What? That's easy."`;
   Kid`"Easy?"`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A176)`"Okay, here I go."`;

});
fgload({ id: 1, name: `SA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A177)`"I am, You Tanaka! The seventh leader of 
the Crimson motorcycle gang! The baddest 
group of Kanto hooligans!"`;
   Kid`"........."`;
   Sara`"........."`;
   Kid`"............"`;

});
fgload({ id: 1, name: `SA07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara`"............"`;
   Kid`"You is..."`;
   Kid`"...that?"`;

});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A178)`"Well just until just the other day."`;
   Sara(S2A179)`"Now she seems to be leading a normal, 
decent life."`;
   Kid`"I see..."`;

});
goto(lbl_0000111a);
let lbl_000010b5;
showTextbox();
text(() => {
   Kid`"I'll have you act out a spoiled baby."`;

});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A180)`"Oh, I might be good at that."`;
   Kid`"Really?"`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A181)`"Yup."`;
   Kid`"Alright then. Sara Matsunaga...become a 
spoiled baby!"`;
   Sara(S2A182)`"I'm little Sara..."`;

});
fgload({ id: 1, name: `SA07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A183)`"That milk's cold."`;
   Sara(S2A184)`"I won't drink that milk unless you warm it 
up to body temperature!"`;
   Kid`"........."`;

});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara`"........."`;
   Kid`"Uh..."`;
   Kid`"Sorry, sorry...I can't remember what babies 
are like, so I don't know if that was close..."`;

});
goto(lbl_0000111a);
let lbl_0000111a;
showTextbox();
text(() => {
   `And then...`;
   You(S2A185)`"What are you doing?"`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SA06ADM`, name2: `YU07ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   `You appeared in her changed clothes.`;
   Kid`"Uh...we...um...we're playing rock, paper, 
scissors charades..."`;

});
fgload({ id: 2, name: `YU02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2A186)`"You're playin rock, paper, scissors charades? 
That sounds fun - can I play?"`;

});
fgload({ id: 1, name: `SA02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A187)`"Sure."`;
   `Sara explained the rules to You.`;

});
fgload({ id: 2, name: `YU01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2A188)`"Okay, I got it."`;

});
fgload({ id: 1, name: `SA01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A189)`"Alright then. Let's play."`;
   Sara(S2A190)`"Ready, Jyan-ken-poi!"`;

});
stopBGM();
showTextbox();
text(() => {
   `Just then...`;

});
eff_41 = 13;
eff_42 = 7;
eff_50 = 0;
showDimInAndOutAnim();
multifgload2({ id1: 1, id2: 2, name1: `SA06ADM`, name2: `YU06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   `The lights illuminating the room started to 
flicker.`;
   `Instinctively we looked to the ceiling.`;

});
playSFX({ name: `SE06_01`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `Listening carefully, I heard a sound like the 
rumble of thunder far away. `;
   Sara(S2A191)`"What could that be...?"`;
   `Tiny waves formed in the water pooled on the floor.`;

});
playSFX({ name: `SE06_02`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `The walls and ceiling trembled slightly. 
Metal screeched on metal.`;

});
fgload({ id: 2, name: `YU03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2A192)`"No...it couldn't be..."`;
   Kid`"Couldn't be what?"`;
   You(S2A193)`"Doesn't that sound a lot like when the water 
that flooded in yesterday?"`;

});
fgload({ id: 1, name: `SA03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   `The blood appeared to drain from the faces of 
You and Sara in the flickering light.`;
   `Immediately after that...`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
playSFX({ name: `SE03_09`, a1: 0, volume: 100 });
closeDimInAndOutAndFilterAnim();
bgload({ name: `BG21B2`, transition: 26 });
multifgload2({ id1: 1, id2: 2, name1: `SA06ADM`, name2: `YU06ADM`, x1: 128, x2: 512, useAnim: false });
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
showTextbox();
text(() => {
   `We were blanketed in darkness.`;
   `The tremors and sounds stopped, but an eerie 
silence filled the area.`;
   `Only the emergency lights showed weakly.`;

});
fgload({ id: 1, name: `SA03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A194)`"A blackout...it's a blackout..."`;

});
fgload({ id: 2, name: `YU05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2A195)`"What about everybody else?"`;

});
if (l_know_sora_is_an_ai != 0) goto(lbl_00001303);
showTextbox();
text(() => {
   Kid`"Where are Takeshi, Tsugumi and Sora...?"`;
   You(S2A197)`"Tsugumi and...Sora..."`;

});
goto(lbl_00001308);
let lbl_00001303;
showTextbox();
text(() => {
   Kid`"Takeshi went to look for Tsugumi..."`;

});
let lbl_00001308;
fgload({ id: 2, name: `YU04ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2A198)`"Well, where is Tsugumi?"`;
   `Sara and I shook our heads in the darkness.`;

});
if (l_is_coco_route == 0) goto(lbl_00001346);
l_choice = 0;
jump(`SC2A`);
let lbl_00001346;
showTextbox();
text(() => {
   You(S2A199)`"Anyway, let's go looking for Takeshi and 
Tsugumi."`;

});
fgload({ id: 1, name: `SA08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A200)`"And Sora...?"`;

});
fgload({ id: 2, name: `YU07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2A201)`"Sora is..."`;
   You(S2A202)`"...Let's not worry about her for now."`;

});
fgload({ id: 1, name: `SA06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Kid`"What?"`;

});
fgload({ id: 2, name: `YU05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2A203)`"I'll tell you later. Looking for those two
 is the top priority right now."`;

});
removeFG({ id: 2, useAnim: true });
showTextbox();
text(() => {
   `You started running.`;

});
fgload({ id: 1, name: `SA08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   `Sara and I followed her without knowing 
what was going on.`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `BG15B2`, transition: 26 });
playBGM({ num: 4, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
clock(`6:34`);
showTextbox();
text(() => {
   `Until we arrived in front of the Control Room.`;
   `The power was out, so the door didn't open 
automatically.`;
   `You pulled the lever next to the door and 
opened it manually.`;

});
bgload({ name: `BG16A2`, transition: 10 });
showTextbox();
text(() => {
   `The three of us went inside...`;

});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2A204)`"Takeshi! Tsugumi! 
If you are there, then answer!"`;
   `You shouted out into the darkness.`;
   `I wondered why she was only calling out to 
Takeshi and Tsugumi.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Kid`"Sora! Sora!"`;
   `I called to Sora but there was no answer.`;
   Kid`"Sora should have been here. I wonder where 
she could have gone."`;
   `You had picked up a flashlight at some point.`;
   `I imagined she had gotten it somewhere in the 
Control Room.`;
   `You turned on it...`;
   `A white circle of light appeared on the wall.`;
   `You shined the flashlight right and left, 
lighting up all corners of the room.`;
   `The electrical system was completely down.`;
   `Like an abandoned castle, there was no sign of 
warmth left.`;
   `There was clearly nobody there.`;

});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A205)`"It doesn't seem...like there is anyone 
here..."`;

});
bgload({ name: `BG15B2`, transition: 20 });
showTextbox();
text(() => {
   `We left the room.`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2A206)`"Can you carry this?"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `You handed me the flashlight and shut the 
Control Room door.`;
   `Just then...`;

});
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Splash, splash, splash...`;
   `We heard the sounds of someone running toward 
us through water.`;
   `After a short while, two figures emerged 
from the darkness.`;
   Kid`"Oh, Takeshi!"`;
   Sara(S2A207)`"Tsugumi!"`;
   `Takeshi and Tsugumi approached, 
walking through water.`;

});
stopSFX()
multifgload3({ name1: `SA03ADS`, name2: `TU01ADS`, name3: `KB01ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   Kid`"Hey, have you seen Sora?"`;

});
fgload({ id: 4, name: `KB07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2A208)`"I thought she was in the Control Room."`;
   Sara(S2A209)`"It was empty..."`;

});
fgload({ id: 4, name: `KB06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2A210)`"Really?"`;

});
removeFG({ id: 4, useAnim: true });
showTextbox();
text(() => {
   `Takeshi used the manual 
lever to open the door.`;
   `He looked inside...`;
   Kid`"Do you want a flashlight?"`;

});
fgload({ id: 4, name: `KB01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2A211)`"Yeah, thanks."`;

});
removeFG({ id: 4, useAnim: true });
showTextbox();
text(() => {
   `Takeshi took the flashlight, turned it on 
and went into the room.`;
   `.....................`;

});
fgload({ id: 4, name: `KB05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2A212)`"Geez...Where would Sora go at a time 
like this?"`;
   `Takeshi said that when he emerged 
from the Control Room.`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `YU01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2A213)`"So...what are we going to do?"`;
   `You said this calmly.`;
   `It had been a series of emergencies 
since the day before...`;
   `Maybe we were all completely used to it. 
In any case, none of us were freaking out.`;

});
fgload({ id: 1, name: `SA05ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A214)`"For now..."`;
   Sara(S2A215)`"All we can do is split up and look for Sora."`;

});
fgload({ id: 1, name: `SA07ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A216)`"Without Sora, we won't know why there's been 
this blackout..."`;
   Kid`"Yeah. Sora knows more about LeMU than 
anyone."`;

});
fgload({ id: 2, name: `YU05ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2A217)`"Uh...Sora..."`;

});
fgload({ id: 4, name: `KB07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2A218)`"Sora..."`;

});
fgload({ id: 1, name: `SA08ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A219)`"?"`;
   Kid`"?"`;
   Takeshi(S2A220)`"?"`;

});
fgload({ id: 2, name: `YU03ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2A221)`"Maybe it's time..."`;

});
fgload({ id: 2, name: `YU07ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2A222)`"Since it has come to this, I'll tell you..."`;
   You(S2A223)`"I don't think we'll find Sora, 
even if we look."`;

});
multifgload2({ id1: 1, id2: 4, name1: `SA06ADS`, name2: `KB06ADS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A224)`"Huh?"`;
   Kid`"What?"`;
   Takeshi(S2A225)`"Why not?"`;

});
fgload({ id: 2, name: `YU05ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2A226)`"I can't tell you the reason."`;
   You(S2A227)`"That's something that you should 
hear from Sora herself..."`;

});
fgload({ id: 1, name: `SA05ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A228)`"???"`;
   Kid`"???"`;

});
fgload({ id: 4, name: `KB08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2A229)`"???"`;

});
fgload({ id: 2, name: `YU01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2A230)`"Anyway, just take my word for it."`;
   You(S2A231)`"You don't have to worry. 
Sora is just fine."`;
   You(S2A232)`"And she will come back for sure."`;
   Kid`"Come back?"`;
   `You ignored my question.`;

});
removeFG({ id: 4, useAnim: true });
fgload({ id: 4, name: `TU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S2A233)`"I see..."`;
   Tsugumi(S2A234)`"So, what are you going to do?"`;

});
fgload({ id: 2, name: `YU11ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2A235)`"I think we should try 
the Generator Room..."`;

});
fgload({ id: 1, name: `SA08ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A236)`"The Generator Room?"`;
   You(S2A237)`"I figure that the cause of this blackout is 
trouble in the Generator Room."`;
   `That reminded me of something Sora had 
said the day before...`;
   `LeMU didn't receive any power from the 
outside, but had an in-house generating 
system.`;
   `There was a thermal seafloor vent where hot 
water was pumped out of the seabed and heat 
from that was used to operate generators.`;

});
showTextbox();
text(() => {
   You(S2A238)`"Tsugumi, you'll come along, won't you?"`;

});
fgload({ id: 4, name: `TU10ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S2A239)`"Sorry, but I'm not up for it."`;

});
multifgload2({ id1: 1, id2: 2, name1: `SA06ADS`, name2: `YU06ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2A240)`"What?"`;

});
showTextbox();
text(() => {
   Tsugumi(S2A241)`"I'm not going."`;
   Tsugumi(S2A242)`"If you want to go, be my guest."`;

});
removeFG({ id: 4, useAnim: true });
showTextbox();
text(() => {
   `Saying that Tsugumi left.`;
   `It didn't look like it would be any use 
calling after her.`;

});
fgload({ id: 4, name: `KB05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2A243)`"Geez. I have no clue what is going on in that 
girl's head."`;

});
fgload({ id: 2, name: `YU13ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2A244)`"Oh well. The four of us will have to go."`;

});
fgload({ id: 1, name: `SA15ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S2A245)`"Nakkyu, where is the Generator Room?"`;
   You(C2S065)`"The Generator Room is here - in 
Dritte stock."`;

});
fgload({ id: 4, name: `KB02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2A247)`"Alright! Let's get a move on. You, can you 
lead the way?"`;

});
removeFG({ id: 4, useAnim: true });
showTextbox();
text(() => {
   `Takeshi started walking toward the corridor.`;

});
fgload({ id: 2, name: `YU14ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2A248)`"Hey Takeshi, where do you think 
you are going?"`;

});
multifgload2({ id1: 1, id2: 4, name1: `SA08ADS`, name2: `KB07ADS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2A249)`"Where? To the Generator Room of course. 
It was your idea to start with, right?"`;
   You(S2A250)`"And just how do you intend to get there?"`;

});
fgload({ id: 4, name: `KB05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2A251)`"Huh? By walking through the corridors dummy."`;

});
fgload({ id: 2, name: `YU17ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2A252)`"Oh please...you really don't get 
anything, do you?"`;

});
multifgload2({ id1: 1, id2: 4, name1: `SA05ADS`, name2: `KB06ADS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2A253)`"Huh? What's that supposed to mean?"`;
   Kid`"Hey, You. I don't think 
I get it either..."`;
   Sara(S2A254)`"Me neither."`;

});
fgload({ id: 2, name: `YU05ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S2A255)`"You guys don't remember the map of LeMU 
we saw yesterday?"`;

});
fgload({ id: 4, name: `KB01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S2A256)`"Map? Map...map..."`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: WHITE });
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
bgload({ name: `MAP3F_A1`, transition: 30 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
setMapCommentToDisplay({ slot: 1 });
pickMapComment2({ index: 6 });
openMapCommentAnim();
waitForClick();
showTextbox();
text(() => {
   Sara(S2A257)`"Oh...you mean the three story map that had 
the areas split into two areas?"`;
   Kid`"Oh, that's right..."`;
   You(S2A258)`"You remember it too, Takeshi?"`;

});
hideTextbox();
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 7 });
openMapCommentAnim();
waitForClick();
showTextbox();
text(() => {
   Takeshi(S2A259)`"I can't say I remember it exactly...
but kinda, yeah."`;

});
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP3F_A1`, transition: 30 });
unSkippableDelay(1);
showTextbox();
text(() => {
   You(S2A260)`"And what was between those two areas?"`;
   Takeshi(S2A261)`"Between them? How am I supposed to know...?"`;
   Kid`"Hmmm...I don't think that 
there was anything."`;

});
hideTextbox();
show_map_root_image_blinking_Anim();
show_map_root_image_blinking_Anim();
waitForClick();
showTextbox();
text(() => {
   You(S2A262)`"Exactly."`;
   You(S2A263)`"Which means?"`;
   Kid`"The two areas are divided by a block 
which is now under water...?"`;
   You(S2A264)`"So?"`;
   Sara(S2A265)`"We can't go directly from the Control Room 
area to the Generator Room area."`;
   Kid`"Besides that, the emergency stairs of 
one of those areas was also flooded..."`;

});
closeMapIndicatorAnim();
showTextbox();
text(() => {
   You(S2A266)`"Meaning what?"`;
   Takeshi(S2A267)`"Oh, I get it..."`;
   Takeshi(S2A268)`"To get to the Generator Room's area, we have 
to access the second floor..."`;

});
bgload({ name: `MAP2F_A1`, transition: 30 });
showTextbox();
text(() => {
   Takeshi(S2A269)`"And the only way we can do that is by using 
the neutral buoyancy elevator."`;

});
hideTextbox();
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 4 });
openMapCommentAnim();
waitForClick();
showTextbox();
text(() => {
   You(S2A270)`"Correct."`;
   You(S2A271)`"So we have to go to the..."`;
   Kid`"To the entrance to the neutral buoyancy 
elevator."`;

});
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP2F_A1`, transition: 30 });
unSkippableDelay(1);
showTextbox();
text(() => {
   You(S2A272)`"That's right."`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: WHITE });
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG15B2`, transition: 26 });
multifgload2({ id1: 1, id2: 2, name1: `SA02ADM`, name2: `YU01ADM`, x1: 128, x2: 512, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   You(S2A273)`"Now that you've got it...let's get going!"`;
   Sara(S2A274)`"Ready, set, go! Nin! Nin! Ninja!"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `Sara took a bizarre kung fu pose and started 
spinning like a top.`;
   `But I had no clue what she was trying to do.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
l_choice = 0;
jump(`S_2B`);
