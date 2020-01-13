setDialogBoxColor(BLUE);
setSceneTitle({ index: 56 });
l_b0 = 5;
l_dayA = 2;
l_dayB = 2;
bgload({ name: `BG10A2`, transition: 10 });
playBGM({ num: 2, volume: 97 });
clock(`1:39`);
setFGOrder_Unk(1, 0, 255);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I wondered how much time had passed since the 
pressurization had started.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I noticed that the date had already changed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I waited on the hard floor for the treatment 
to finish.`;
   waitForClick; clearText; marker; sound(`S2A000`); appendText; 
   Takeshi`"Um...ummmna...myuna...myuna."`;
   waitForClick; clearText; marker; appendText; 
   Narr`...He was the only one of us...`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SA03ADM`, name2: `YU04BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A001`); appendText; 
   You`"Geez, he's so loud...that idiot."`;
   waitForClick; clearText; marker; sound(`S2A002`); appendText; 
   Sara`"Nakkyu...I can't sleep...at all...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi's talking in his sleep echoed 
throughout the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We were mentally drained and the three of us 
were in no state to sleep.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No, it was worse than that. Gradually 
we had started to go mad.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Why don't we just wake him up and tell him?"`;
   waitForClick; clearText; marker; sound(`S2A003`); appendText; 
   You`"It's no use. Snoring and talking in your 
sleep aren't something that people can 
control."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"We could tape his mouth shut...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A004`); appendText; 
   Sara`"Or even better, we could drape a wet towel 
over his face..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"...Wouldn't that kill him?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU05BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A005`); appendText; 
   You`"Yeah, you're right..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU04BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A006`); appendText; 
   You`"Why is HE the only one that gets to sleep on 
the bed?"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE05_03`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You let the bed have a swift kick as 
she said this.`;
   waitForClick; clearText; 
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
   marker; sound(`S2A007`); appendText; 
   Takeshi`"...'Stop it,'...I said that tickles...."`;
   waitForClick; clearText; 
});
goto(lbl_00000215);
let lbl_000001df;
showTextbox();
text(() => {
   marker; sound(`S2A008`); appendText; 
   Takeshi`"...Ah, HA...Woo, hoo, hoo...."`;
   waitForClick; clearText; 
});
goto(lbl_00000215);
let lbl_000001e8;
showTextbox();
text(() => {
   marker; sound(`S2A009`); appendText; 
   Takeshi`"...No....no...not there...."`;
   waitForClick; clearText; 
});
goto(lbl_00000215);
let lbl_000001f1;
showTextbox();
text(() => {
   marker; sound(`S2A010`); appendText; 
   Takeshi`"...Oh...yeah...oh...I...like...that..."`;
   waitForClick; clearText; 
});
goto(lbl_00000215);
let lbl_000001fa;
showTextbox();
text(() => {
   marker; sound(`S2A011`); appendText; 
   Takeshi`"...More...more...ple...ase..."`;
   waitForClick; clearText; 
});
goto(lbl_00000215);
let lbl_00000203;
showTextbox();
text(() => {
   marker; sound(`S2A012`); appendText; 
   Takeshi`"...Ooooh...right there...."`;
   waitForClick; clearText; 
});
goto(lbl_00000215);
let lbl_0000020c;
showTextbox();
text(() => {
   marker; sound(`S2A013`); appendText; 
   Takeshi`"...Oh...no...I'm...coming..."`;
   waitForClick; clearText; 
});
goto(lbl_00000215);
let lbl_00000215;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi shamelessly carried on like that, 
looking happily asleep.`;
   waitForClick; clearText; marker; sound(`S2A014`); appendText; 
   Sara`"I wonder what kind of dream he is having."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Who knows...?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU05BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A015`); appendText; 
   You`"I'll bet it's something sexual, judging 
from his stupid expression."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You reached out toward Takeshi's face and 
pinched his cheek.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And then...`;
   waitForClick; clearText; 
});
stopBGM();
showTextbox();
text(() => {
   marker; sound(`S2A016`); appendText; 
   Takeshi`"Y...You...You..."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SA06ADM`, name2: `YU06BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A017`); appendText; 
   You`"Huh?"`;
   waitForClick; clearText; marker; sound(`S2A018`); appendText; 
   Sara`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"..."`;
   waitForClick; clearText; marker; sound(`S2A019`); appendText; 
   Takeshi`"...Smack, numya, mumya..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It seems...like he is talking in his sleep."`;
   waitForClick; clearText; marker; sound(`S2A020`); appendText; 
   Sara`"He's not dreaming of You, is he...?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU14BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A021`); appendText; 
   You`"Stop that...there's no way."`;
   waitForClick; clearText; 
});
l_choice = 51;
random(3);
ifRandomIs(0).jump(lbl_0000029d);
ifRandomIs(1).jump(lbl_000002a6);
ifRandomIs(2).jump(lbl_000002af);
let lbl_0000029d;
showTextbox();
text(() => {
   marker; sound(`S2A022`); appendText; 
   Takeshi`"Ooon....nyumm...You's body....nyum...myum..."`;
   waitForClick; clearText; 
});
goto(lbl_000002b8);
let lbl_000002a6;
showTextbox();
text(() => {
   marker; sound(`S2A023`); appendText; 
   Takeshi`"Ooonyumm...You....nyum...myum..."`;
   waitForClick; clearText; 
});
goto(lbl_000002b8);
let lbl_000002af;
showTextbox();
text(() => {
   marker; sound(`S2A024`); appendText; 
   Takeshi`"Oon...nyum...hey, You...myumya..."`;
   waitForClick; clearText; 
});
goto(lbl_000002b8);
let lbl_000002b8;
fgload({ id: 2, name: `YU04BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A025`); appendText; 
   You`"Hey, Takeshi! How dare you have dreams 
about me!"`;
   waitForClick; clearText; 
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
   marker; sound(`S2A026`); appendText; 
   Takeshi`"...She's got a long name...wants to see her 
dad...myumyum."`;
   waitForClick; clearText; 
});
goto(lbl_00000354);
let lbl_0000031e;
showTextbox();
text(() => {
   marker; sound(`S2A027`); appendText; 
   Takeshi`"...and she's way too rough...that's why 
she can't get a guy...myumyum."`;
   waitForClick; clearText; 
});
goto(lbl_00000354);
let lbl_00000327;
showTextbox();
text(() => {
   marker; sound(`S2A028`); appendText; 
   Takeshi`"...and flat...as a board...myumyum."`;
   waitForClick; clearText; 
});
goto(lbl_00000354);
let lbl_00000330;
showTextbox();
text(() => {
   marker; sound(`S2A029`); appendText; 
   Takeshi`"...and talks and talks...like an old bag 
that likes to gossip...myumyum."`;
   waitForClick; clearText; 
});
goto(lbl_00000354);
let lbl_00000339;
showTextbox();
text(() => {
   marker; sound(`S2A030`); appendText; 
   Takeshi`"...Ow! Idiot! I'll kick you into next 
week!...myumyum."`;
   waitForClick; clearText; 
});
goto(lbl_00000354);
let lbl_00000342;
showTextbox();
text(() => {
   marker; sound(`S2A031`); appendText; 
   Takeshi`"...You...oh, no...please...no 
more...sssstop...OooOoh that's...myumyum."`;
   waitForClick; clearText; 
});
goto(lbl_00000354);
let lbl_0000034b;
showTextbox();
text(() => {
   marker; sound(`S2A032`); appendText; 
   Takeshi`"...You...stop...don't eat...that's not 
food...just stop...myumyum."`;
   waitForClick; clearText; 
});
goto(lbl_00000354);
let lbl_00000354;
multifgload2({ id1: 1, id2: 2, name1: `SA08ADM`, name2: `YU06BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A033`); appendText; 
   You`"Huh?"`;
   waitForClick; clearText; marker; sound(`S2A034`); appendText; 
   Sara`"What?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`S2A035`); appendText; 
   Takeshi`"Oooow...ooon......You.......dummy......"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU10BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A036`); appendText; 
   You`"H...hey,hey, hey - Takeshi! Wake up!"`;
   waitForClick; clearText; 
});
playBGM({ num: 18, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You had grabbed hold of Takeshi's collar.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If we didn't stop her, she might have 
strangled him.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A037`); appendText; 
   Sara`"Take it easy, Nakkyu. He's just talking in 
his sleep."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"She's right. He doesn't mean anything by 
it...probably not anyway."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi continued to blabber with a dumb, 
blissful look as he slept, oblivious to our 
troubles.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU04BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A038`); appendText; 
   You`"I've had it! I have no choice but to...!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Wh-what are you going to do?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You put her hand in her pocket and pulled out 
the marker from before.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_08`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She popped the cap off of the pen and prepared 
to...`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU02BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A039`); appendText; 
   You`"Giggle!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A040`); appendText; 
   Sara`"No...you're not going to...?"`;
   waitForClick; clearText; marker; sound(`S2A041`); appendText; 
   You`"You bet I am."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A042`); appendText; 
   Sara`"You're gonna chop his head off..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU04BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A043`); appendText; 
   You`"Not with a pen!"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_ET05A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`S2A044`); appendText; 
   You`"Watch this. This is what'll do."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_09`, a1: 0, volume: 100 });
bgload({ name: `EV_ET05B`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`As she said this, You took the pen and started 
drawing big round eyes - like a girl from a 
comic - on Takeshi's eyelids. `;
   waitForClick; clearText; marker; sound(`S2A045`); appendText; 
   Takeshi`"Zzzz...zzz..."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S2A046`); appendText; 
   You`"He, he, he...what goes around, comes around. 
Take that."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Heee, heee.... It's a masterpiece..."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S2A047`); appendText; 
   Sara`"Ha, that's funny. Let me try, Nakkyu."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_09`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Scribble, scribble, scribble.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_ET05C`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara sketched a whirlpool on Takeshi's cheek.`;
   waitForClick; clearText; marker; sound(`S2A048`); appendText; 
   Sara`"Nin! Nin! Ninja!"`;
   waitForClick; clearText; marker; sound(`S2A049`); appendText; 
   Takeshi`"Ooon...nyum..."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"HA, HA, HA, HA! I'm laughing so hard my gut 
hurts..."`;
   waitForClick; clearText; marker; sound(`S2A050`); appendText; 
   You`"Hey, Kid. Why don't you draw something on 
this idiot? You'll feel loads better."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Alright. Let's see. Um..."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_09`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Scribble, scribble, scribble.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_ET05D`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I drew meat on his forehead.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And the three of us kept taking turns doing 
graffiti on his face.`;
   waitForClick; clearText; 
});
hideTextbox();
removeBG({ mode: BLACK, transition: 2 });
playSFX({ name: `SE10_09`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Scribble, scribble, scribble.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_09`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Scribble, scribble, scribble.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_09`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Scribble, scribble, scribble.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`...Dozens of minutes later.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi had been further transformed into a 
much-decorated creature, miserable, disfigured 
and hard-to-describe.`;
   waitForClick; clearText; 
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
   marker; sound(`S2A051`); appendText; 
   Sora`"Good morning everyone."`;
   waitForClick; clearText; marker; sound(`S2A052`); appendText; 
   Sora`"Did you sleep well?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SA03ADS`, name2: `YU05BDS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A053`); appendText; 
   You`"Thanks to somebody, I was up all night."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `SO06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A054`); appendText; 
   Sora`"Huh? You didn't sleep a wink?"`;
   waitForClick; clearText; marker; sound(`S2A055`); appendText; 
   You`"Nope, because of this idiot."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE05_03`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You lifted her foot and kicked Takeshi who was 
lying on the bed.`;
   waitForClick; clearText; marker; sound(`S2A056`); appendText; 
   Takeshi`"Ooon...nyum...I'd like a 
perm...please...nyuma..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi was still dreaming.`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `SO02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A057`); appendText; 
   Sora`"Ha, ha, haaaaaa...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked like Sora had noticed the graffiti 
and was trying to keep from exploding with 
laughter.`;
   waitForClick; clearText; marker; sound(`S2A058`); appendText; 
   Sora`"What happened to his face?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A059`); appendText; 
   Sara`"We got so mad..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"We took turns drawing on him."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU02BDS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A060`); appendText; 
   You`"We scribbled the night away with this marker."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Saying that, You laughed loudly.`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `SO03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A061`); appendText; 
   Sora`"Even so, maybe you went a little too far..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA07ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A062`); appendText; 
   Sara`"No, no. We didn't sleep at all because of 
this noisy beast."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It's poetic justice."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU01BDS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A063`); appendText; 
   You`"So Sora, hold off on telling him for a while, 
alright?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `SO07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A064`); appendText; 
   Sora`"You mean...you want me to pretend that 
I don't notice?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A065`); appendText; 
   Sara`"That's it."`;
   waitForClick; clearText; marker; sound(`S2A066`); appendText; 
   Takeshi`"Ooon...nyuum...it's all 
white...curlies...nyumanya..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU05BDS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A067`); appendText; 
   You`"Enough of that. Sora, what about the 
decompression...?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A068`); appendText; 
   Sora`"You are all done of course."`;
   waitForClick; clearText; marker; sound(`S2A069`); appendText; 
   Sora`"Is there anyone that feels ill?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A070`); appendText; 
   Sara`"I feel fine."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Me, too."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU07BDS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A071`); appendText; 
   You`"Well, we were up all night so I feel groggy."`;
   waitForClick; clearText; marker; sound(`S2A072`); appendText; 
   Sora`"And Takeshi...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A073`); appendText; 
   Sara`"Just look at him."`;
   waitForClick; clearText; marker; sound(`S2A074`); appendText; 
   Takeshi`"Ummmh...ummmh...math, social studies, 
science, English class, music......I can't 
play that...zzz..."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `SO02ADS`, x: 320, useAnim: true });
fgload({ id: 4, name: `SO10ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A075`); appendText; 
   Sora`"Alright everyone. I would like to have you 
all gather in the Control Room at once."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SA06ADS`, name2: `YU01BDS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A076`); appendText; 
   Sora`"I'll go on ahead."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Has...anything happened...?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `SO05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A077`); appendText; 
   Sora`"I will tell you all about it in the Control 
Room..."`;
   waitForClick; clearText; marker; sound(`S2A078`); appendText; 
   Sora`"Now if you'll excuse me."`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 4, useAnim: true });
playSFX({ name: `SE00_04`, a1: 1, volume: 90 });
waitForSFX();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora ducked and left the pressurization 
chamber.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora's face as she left was devoid of humor.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`We got Takeshi up and made for the Control 
Room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara was next to me...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Ahead You and Takeshi were talking about 
something as they walked.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't quite make out what they were 
saying.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Eventually Takeshi slowed down, separated 
from You and came back to us.`;
   waitForClick; clearText; marker; sound(`S2A079`); appendText; 
   Takeshi`"Hey, you got any idea what You's all miffed 
about?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Who knows?"`;
   waitForClick; clearText; marker; sound(`S2A080`); appendText; 
   Sara`"You don't have any ideas?"`;
   waitForClick; clearText; marker; sound(`S2A081`); appendText; 
   Takeshi`"If I did, you think I'd be asking you?"`;
   waitForClick; clearText; marker; sound(`S2A082`); appendText; 
   Takeshi`"You told me to 'look in the mirror,' but..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Huh?"`;
   waitForClick; clearText; marker; sound(`S2A083`); appendText; 
   Takeshi`"What?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A084`); appendText; 
   Sara`"That's no fun..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`When Sara said that, it seemed like Takeshi 
finally figured it out. He wiped his face 
with his hand.`;
   waitForClick; clearText; marker; sound(`S2A085`); appendText; 
   Takeshi`"What's this?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`He stared at the black ink on the palm of 
his hand.`;
   waitForClick; clearText; marker; sound(`S2A086`); appendText; 
   Takeshi`"Damn that girl..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Clicking his tongue, Takeshi hurried back up 
ahead to You.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara and I laughed as we watched Takeshi 
and You exchange words.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`Tsugumi was in front of the Control Room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was leaning against the wall, her arms 
folded and facing down.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Morning."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `TU05ADM`, name2: `SA02ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A087`); appendText; 
   Sara`"Morning."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`With our greetings, Tsugumi slowly raised 
her head.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A088`); appendText; 
   Sara`"Hey, Tsugumi, where did you go last night?"`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Are you alright?"`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A089`); appendText; 
   Sara`"Sora was telling us about when there is a 
sudden change in air pressure..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A090`); appendText; 
   Tsugumi`"The bends? I know."`;
   waitForClick; clearText; marker; sound(`S2A091`); appendText; 
   Tsugumi`"Don't worry about me. I'm fine."`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Huh?) Flashed through my mind.`;
   waitForClick; clearText; marker; appendText; 
   Narr`...it seemed like something about Tsugumi had 
changed from the day before.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe it was loneliness, but her attitude and 
way of talking had been toned down.`;
   waitForClick; clearText; marker; sound(`S2A092`); appendText; 
   Sara`"Are you really fine?"`;
   waitForClick; clearText; marker; sound(`S2A093`); appendText; 
   Tsugumi`"Yeah..."`;
   waitForClick; clearText; marker; sound(`S2A094`); appendText; 
   Tsugumi`"Let's get inside."`;
   waitForClick; clearText; marker; sound(`S2A095`); appendText; 
   Tsugumi`"Sora is waiting for us."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`At Tsugumi's urging, Sara and I entered the 
Control Room.`;
   waitForClick; clearText; 
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
   marker; sound(`S2A096`); appendText; 
   Sora`"I'm sorry that I had to have you gather so 
early. There was no other way."`;
   waitForClick; clearText; marker; sound(`S2A097`); appendText; 
   Sora`"Actually, everyone, there is something 
I need to tell you right away."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora paused for a second.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora looked over all five of us...You, Sara, 
Tsugumi, Takeshi and finally me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The cooling fan whirred away in the silence.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Occasionally the sound of metal on metal 
would ring through the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The five of us waited on Sora's next words.`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `SO10ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A098`); appendText; 
   Sora`"Last night, after the four of you, apart from 
Tsugumi, entered the pressurization chamber..."`;
   waitForClick; clearText; marker; sound(`S2A099`); appendText; 
   Sora`"I was in the Control Room here thinking about 
ways to escape or contact the outside."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `SO05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A100`); appendText; 
   Sora`"And..."`;
   waitForClick; clearText; marker; sound(`S2A101`); appendText; 
   Sora`"While I was checking the internal status of 
LeMU, I discovered something."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU16BDS`, name2: `SA12ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A102`); appendText; 
   You`"You found a way to escape?!"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `SO03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A103`); appendText; 
   Sora`"No."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU17BDS`, name2: `SA11ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A104`); appendText; 
   Sara`"Then a way to contact the outside?"`;
   waitForClick; clearText; marker; sound(`S2A105`); appendText; 
   Sora`"Not yet."`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `KB11ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A106`); appendText; 
   Takeshi`"Then what did you figure out?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `SO10ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A107`); appendText; 
   Sora`"I discovered the strength of pressure the 
bulkheads can withstand...I found their 
limits."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Saying that, Sora turned her eyes to the 
side of the console.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`In the darkness, a three-dimensional image of 
LeMU sprung up.`;
   waitForClick; clearText; 
});
bgload({ name: `IMG03A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Pressure bulkhead...what?"`;
   waitForClick; clearText; marker; sound(`S2A108`); appendText; 
   Sora`"I mean LeMU's walls. The partitions between 
the outer seawater and the inner air."`;
   waitForClick; clearText; 
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
   marker; sound(`S2A109`); appendText; 
   Sara`"What do you mean...when you say you found the 
limit?"`;
   waitForClick; clearText; marker; sound(`S2A110`); appendText; 
   Sora`"Like I said yesterday, LeMU is a structure 
basically constructed on a saturation diving 
specification design."`;
   waitForClick; clearText; marker; sound(`S2A111`); appendText; 
   Sora`"In other words, the internal air pressure 
equals or is greater than the external water 
pressure."`;
   waitForClick; clearText; marker; sound(`S2A112`); appendText; 
   Sora`"However, the complex's internal air pressure 
is currently at 1 atmosphere..."`;
   waitForClick; clearText; marker; sound(`S2A113`); appendText; 
   Sora`"Therefore..."`;
   waitForClick; clearText; marker; sound(`S2A114`); appendText; 
   You`"LeMU's outer shell is constantly being 
subjected to severe water pressure."`;
   waitForClick; clearText; marker; sound(`S2A115`); appendText; 
   Sora`"Correct."`;
   waitForClick; clearText; marker; sound(`S2A116`); appendText; 
   You`"But LeMU is not constructed to endure this 
situation for a long period of time."`;
   waitForClick; clearText; marker; sound(`S2A117`); appendText; 
   You`"Inevitably it will, at some point, reach its 
limit..."`;
   waitForClick; clearText; marker; sound(`S2A118`); appendText; 
   Sora`"Well put, You."`;
   waitForClick; clearText; marker; sound(`S2A119`); appendText; 
   Takeshi`"So...when is this limit...?"`;
   waitForClick; clearText; marker; sound(`S2A120`); appendText; 
   Sora`"According to LeMMIH's calculations..."`;
   waitForClick; clearText; marker; sound(`S2A121`); appendText; 
   Tsugumi`"In 119 hours...or five days from now, right?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`We stared in tandem at Tsugumi.`;
   waitForClick; clearText; 
});
bgload({ name: `BG16A1`, transition: 30 });
multifgload3({ name1: `TU05ADS`, name2: `SA06ADS`, name3: `SO06ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`S2A122`); appendText; 
   Sora`"You are well informed. Did you look that 
up on the Security Office terminal?"`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `SO10ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A123`); appendText; 
   Sora`"It is exactly as Tsugumi says..."`;
   waitForClick; clearText; marker; sound(`S2A124`); appendText; 
   Sora`"The estimated time of implosion is 
approximately 4:30 a.m. on May 7."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA03ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A125`); appendText; 
   Sora`"Of course, it is only a calculation and 
there is a margin of error."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A126`); appendText; 
   Tsugumi`"Plus or minus 12 hours...is that the margin 
of error?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `SO03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A127`); appendText; 
   Sora`"That is correct, but..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`That pushed us into silence.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed like everyone was lost in thought.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We knew for sure that we were in serious 
trouble.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora's words had shaken us a bit.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But five days sounded like a long time and 
it really didn't register with me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I kept thinking that a rescue team would 
arrive at anytime...`;
   waitForClick; clearText; marker; appendText; 
   Narr`So I didn't really feel that it was worth 
worrying about.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sora."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Can I summarize what you said to make sure 
I got it?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 4, id2: 2, name1: `SO07ADS`, name2: `SA08ADS`, x1: 320, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A128`); appendText; 
   Sora`"?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"At 4:30 a.m. on May 7, the walls of LeMU 
will reach the limit of the pressure that 
they can handle."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"But that might happen at 4:30 p.m. on the 
sixth or at 4:30 p.m. on the seventh."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA05ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Is that right so far?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `SO03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A129`); appendText; 
   Sora`"Yes..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So doesn't the opposite also hold true?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I mean, at the worst LeMU will be fine 
until 4:30 p.m. on May 6."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"So we're fine until then and have nothing 
to worry about."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `SO10ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A130`); appendText; 
   Sora`"We can't be absolutely certain that we will 
be safe..."`;
   waitForClick; clearText; marker; sound(`S2A131`); appendText; 
   Sora`"But judging from the results of LeMMIH's 
calculations, that would appear to be 
the case."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA08ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A132`); appendText; 
   Sara`"Oh, so that's it..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA11ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A133`); appendText; 
   Sara`"So as long as help comes by the sixth, then 
we are okay?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU01BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A134`); appendText; 
   You`"I see.... If you had said 'We only have one 
more day,' or something I might have burst out 
crying."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `SO05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A135`); appendText; 
   You`"So we still have lots of time.... Someone 
will surely come to help us before that."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The tension in the air broke and sighs of 
relief could be heard around the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi, having gotten the information 
somewhere before us was smiling to herself, 
smugly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was 5:50 a.m.`;
   waitForClick; clearText; marker; sound(`S2A136`); appendText; 
   Takeshi`"Yaaaaaaaaawwwwwwn."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi gave a large yawn.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`Sara and I sat cross-legged on a bench in 
the rest area.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The floor was covered with water.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"That was good!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A137`); appendText; 
   Sara`"I'll say!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`We had just polished off fried chicken 
sandwiches that Takeshi had made for us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As for the other four...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora was, as usual, cooped up in the Control 
Room trying to make contact with LeMMIH.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi had vanished without saying where she 
was going.`;
   waitForClick; clearText; 
});
if (l_know_sora_is_an_ai != 0) goto(lbl_00000d7f);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi had gone to deliver sandwiches to Sora 
and Tsugumi.`;
   waitForClick; clearText; 
});
goto(lbl_00000d84);
let lbl_00000d7f;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi had gone to deliver a sandwich to 
Tsugumi.`;
   waitForClick; clearText; 
});
let lbl_00000d84;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You was changing clothes. Apparently she had 
spilled something on them while eating.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Fortunately, her normal clothes were safe in 
the changing room in the dry area.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A138`); appendText; 
   Sara`"Hey, I'm full now. Why don't we play a game?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"A game?"`;
   waitForClick; clearText; marker; sound(`S2A139`); appendText; 
   Sara`"Yeah. The Yamanote Line game or a word 
game..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A140`); appendText; 
   Sara`"I know! Rock, paper, scissors charades!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A141`); appendText; 
   Sara`"We play and the winner gets to choose 
something."`;
   waitForClick; clearText; marker; sound(`S2A142`); appendText; 
   Sara`"And then the loser has to mimic it, okay?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`S2A143`); appendText; 
   Sara`"Ready, jyan, ken, poi!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A144`); appendText; 
   Sara`"Come on! Put your hand out."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I haven't said I'm going to play. And what 
is that jyan-ken-poi?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A145`); appendText; 
   Sara`"It's what you say when you play rock, paper, 
scissors."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A146`); appendText; 
   Sara`"And as to whether or not you are going to 
play...you are!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Who said YOU could decide?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A147`); appendText; 
   Sara`"Be quiet! Now let's play!"`;
   waitForClick; clearText; marker; sound(`S2A148`); appendText; 
   Sara`"Not doing anything is boring, right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh...alright..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A149`); appendText; 
   Sara`"That's more like it."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A150`); appendText; 
   Sara`"Okay, here we go."`;
   waitForClick; clearText; marker; sound(`S2A151`); appendText; 
   Sara`"Ready, jyan-ken-poi!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was paper and Sara went scissors.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A152`); appendText; 
   Sara`"Ha, ha. I won!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A153`); appendText; 
   Sara`"So...I pick..."`;
   waitForClick; clearText; marker; sound(`S2A154`); appendText; 
   Sara`"Salmon."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"S...salmon? You mean like a fish?"`;
   waitForClick; clearText; marker; sound(`S2A155`); appendText; 
   Sara`"Yup."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A156`); appendText; 
   Sara`"So let's see it!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Salmon...salmon..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Salmon salmon salmon salmon salmon..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I opened and closed by mouth like a fish, 
gyrating my hips around and doing my best to 
become a salmon.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A157`); appendText; 
   Sara`"Kya, ha, ha, ha, ha!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara was laughing and holding her stomach.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked like I had been a good salmon.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Alright. Now I'm warmed up! Let's go again!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A158`); appendText; 
   Sara`"Ready, jyan-ken-poi!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I went scissors and Sara was paper.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A159`); appendText; 
   Sara`"Ooooh, I lost."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A160`); appendText; 
   Sara`"Don't give me a weird one, okay? Please, 
please."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I decided to make her act like...`;
   waitForClick; 
});
choice(
   `Mynnie Mousey`
   `Caesar`
   `You`
   `A spoiled baby`
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
   marker; appendText; 
   Kid`"I choose Mynnie!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A161`); appendText; 
   Sara`"What? I can't do that!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Those are the rules."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A162`); appendText; 
   Sara`"Oh...alright. I'll do it..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Okay then. Sara Matsunaga...become Mynnie!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A163`); appendText; 
   Sara`"M-I-C...K-E-Y...M-O-U-S-E-Y...Mickey Mousey 
Mickey Mousey"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A164`); appendText; 
   Sara`"Who's the leader of the club That's made 
for you and me"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"He, he, he..."`;
   waitForClick; clearText; 
});
goto(lbl_0000111a);
let lbl_00000f8f;
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Caesar, please."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A165`); appendText; 
   Sara`"How can I be Caesar, you idiot!"`;
   waitForClick; clearText; marker; sound(`S2A166`); appendText; 
   Sara`"I don't think there is anyone who can 
become him!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Those are the rules."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A167`); appendText; 
   Sara`"Hey, no way..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Then, Sara Matsunaga...become 'Caesar'."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A168`); appendText; 
   Sara`"Ah...hem."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A169`); appendText; 
   Sara`"My name is Caesar."`;
   waitForClick; clearText; marker; sound(`S2A170`); appendText; 
   Sara`"Doth you Hamlet defy you lord? Et tu, my 
friend, Hamlet? Lend me some ears. Not in 
my empire!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A171`); appendText; 
   Sara`"Then it's war!"`;
   waitForClick; clearText; marker; sound(`S2A172`); appendText; 
   Sara`"Giddy up, giddy up, giddy up..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Kya, ha, ha, ha, ha..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Heeee, my stomach hurts. It really hurts. 
You are too funny..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A173`); appendText; 
   Sara`"You don't have to laugh that much..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But...because...that's..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"That wasn't...Caesar...but a mixed up 
Hamlet..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Heee, he, he...."`;
   waitForClick; clearText; 
});
goto(lbl_0000111a);
let lbl_00001022;
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"I choose for you to act out 'You.'"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A174`); appendText; 
   Sara`"By You...you mean Nakkyu?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yup."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A175`); appendText; 
   Sara`"What? That's easy."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Easy?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A176`); appendText; 
   Sara`"Okay, here I go."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A177`); appendText; 
   Sara`"I am, You Tanaka! The seventh leader of 
the Crimson motorcycle gang! The baddest 
group of Kanto hooligans!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Sara`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"............"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Sara`"............"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You is..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"...that?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A178`); appendText; 
   Sara`"Well just until just the other day."`;
   waitForClick; clearText; marker; sound(`S2A179`); appendText; 
   Sara`"Now she seems to be leading a normal, 
decent life."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I see..."`;
   waitForClick; clearText; 
});
goto(lbl_0000111a);
let lbl_000010b5;
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"I'll have you act out a spoiled baby."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A180`); appendText; 
   Sara`"Oh, I might be good at that."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Really?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A181`); appendText; 
   Sara`"Yup."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Alright then. Sara Matsunaga...become a 
spoiled baby!"`;
   waitForClick; clearText; marker; sound(`S2A182`); appendText; 
   Sara`"I'm little Sara..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A183`); appendText; 
   Sara`"That milk's cold."`;
   waitForClick; clearText; marker; sound(`S2A184`); appendText; 
   Sara`"I won't drink that milk unless you warm it 
up to body temperature!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Sara`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Uh..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sorry, sorry...I can't remember what babies 
are like, so I don't know if that was close..."`;
   waitForClick; clearText; 
});
goto(lbl_0000111a);
let lbl_0000111a;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And then...`;
   waitForClick; clearText; marker; sound(`S2A185`); appendText; 
   You`"What are you doing?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SA06ADM`, name2: `YU07ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You appeared in her changed clothes.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Uh...we...um...we're playing rock, paper, 
scissors charades..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A186`); appendText; 
   You`"You're playin rock, paper, scissors charades? 
That sounds fun - can I play?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A187`); appendText; 
   Sara`"Sure."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara explained the rules to You.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A188`); appendText; 
   You`"Okay, I got it."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A189`); appendText; 
   Sara`"Alright then. Let's play."`;
   waitForClick; clearText; marker; sound(`S2A190`); appendText; 
   Sara`"Ready, Jyan-ken-poi!"`;
   waitForClick; clearText; 
});
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Just then...`;
   waitForClick; clearText; 
});
eff_41 = 13;
eff_42 = 7;
eff_50 = 0;
showDimInAndOutAnim();
multifgload2({ id1: 1, id2: 2, name1: `SA06ADM`, name2: `YU06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The lights illuminating the room started to 
flicker.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Instinctively we looked to the ceiling.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE06_01`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Listening carefully, I heard a sound like the 
rumble of thunder far away. `;
   waitForClick; clearText; marker; sound(`S2A191`); appendText; 
   Sara`"What could that be...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tiny waves formed in the water pooled on the floor.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE06_02`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The walls and ceiling trembled slightly. 
Metal screeched on metal.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A192`); appendText; 
   You`"No...it couldn't be..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Couldn't be what?"`;
   waitForClick; clearText; marker; sound(`S2A193`); appendText; 
   You`"Doesn't that sound a lot like when the water 
that flooded in yesterday?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The blood appeared to drain from the faces of 
You and Sara in the flickering light.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Immediately after that...`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`We were blanketed in darkness.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The tremors and sounds stopped, but an eerie 
silence filled the area.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Only the emergency lights showed weakly.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A194`); appendText; 
   Sara`"A blackout...it's a blackout..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A195`); appendText; 
   You`"What about everybody else?"`;
   waitForClick; clearText; 
});
if (l_know_sora_is_an_ai != 0) goto(lbl_00001303);
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Where are Takeshi, Tsugumi and Sora...?"`;
   waitForClick; clearText; marker; sound(`S2A197`); appendText; 
   You`"Tsugumi and...Sora..."`;
   waitForClick; clearText; 
});
goto(lbl_00001308);
let lbl_00001303;
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Takeshi went to look for Tsugumi..."`;
   waitForClick; clearText; 
});
let lbl_00001308;
fgload({ id: 2, name: `YU04ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A198`); appendText; 
   You`"Well, where is Tsugumi?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara and I shook our heads in the darkness.`;
   waitForClick; clearText; 
});
if (l_is_coco_route == 0) goto(lbl_00001346);
l_choice = 0;
jump(`SC2A`);
let lbl_00001346;
showTextbox();
text(() => {
   marker; sound(`S2A199`); appendText; 
   You`"Anyway, let's go looking for Takeshi and 
Tsugumi."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A200`); appendText; 
   Sara`"And Sora...?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A201`); appendText; 
   You`"Sora is..."`;
   waitForClick; clearText; marker; sound(`S2A202`); appendText; 
   You`"...Let's not worry about her for now."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"What?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A203`); appendText; 
   You`"I'll tell you later. Looking for those two
 is the top priority right now."`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You started running.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara and I followed her without knowing 
what was going on.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`Until we arrived in front of the Control Room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The power was out, so the door didn't open 
automatically.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You pulled the lever next to the door and 
opened it manually.`;
   waitForClick; clearText; 
});
bgload({ name: `BG16A2`, transition: 10 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The three of us went inside...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A204`); appendText; 
   You`"Takeshi! Tsugumi! 
If you are there, then answer!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You shouted out into the darkness.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered why she was only calling out to 
Takeshi and Tsugumi.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Sora! Sora!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I called to Sora but there was no answer.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sora should have been here. I wonder where 
she could have gone."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You had picked up a flashlight at some point.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I imagined she had gotten it somewhere in the 
Control Room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You turned on it...`;
   waitForClick; clearText; marker; appendText; 
   Narr`A white circle of light appeared on the wall.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You shined the flashlight right and left, 
lighting up all corners of the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The electrical system was completely down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Like an abandoned castle, there was no sign of 
warmth left.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was clearly nobody there.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A205`); appendText; 
   Sara`"It doesn't seem...like there is anyone 
here..."`;
   waitForClick; clearText; 
});
bgload({ name: `BG15B2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We left the room.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A206`); appendText; 
   You`"Can you carry this?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You handed me the flashlight and shut the 
Control Room door.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just then...`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Splash, splash, splash...`;
   waitForClick; clearText; marker; appendText; 
   Narr`We heard the sounds of someone running toward 
us through water.`;
   waitForClick; clearText; marker; appendText; 
   Narr`After a short while, two figures emerged 
from the darkness.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh, Takeshi!"`;
   waitForClick; clearText; marker; sound(`S2A207`); appendText; 
   Sara`"Tsugumi!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi and Tsugumi approached, 
walking through water.`;
   waitForClick; clearText; 
});
stopSFX()
multifgload3({ name1: `SA03ADS`, name2: `TU01ADS`, name3: `KB01ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Hey, have you seen Sora?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KB07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A208`); appendText; 
   Takeshi`"I thought she was in the Control Room."`;
   waitForClick; clearText; marker; sound(`S2A209`); appendText; 
   Sara`"It was empty..."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KB06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A210`); appendText; 
   Takeshi`"Really?"`;
   waitForClick; clearText; 
});
removeFG({ id: 4, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi used the manual 
lever to open the door.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He looked inside...`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Do you want a flashlight?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KB01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A211`); appendText; 
   Takeshi`"Yeah, thanks."`;
   waitForClick; clearText; 
});
removeFG({ id: 4, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi took the flashlight, turned it on 
and went into the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`.....................`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KB05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A212`); appendText; 
   Takeshi`"Geez...Where would Sora go at a time 
like this?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi said that when he emerged 
from the Control Room.`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `YU01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A213`); appendText; 
   You`"So...what are we going to do?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You said this calmly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It had been a series of emergencies 
since the day before...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe we were all completely used to it. 
In any case, none of us were freaking out.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A214`); appendText; 
   Sara`"For now..."`;
   waitForClick; clearText; marker; sound(`S2A215`); appendText; 
   Sara`"All we can do is split up and look for Sora."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA07ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A216`); appendText; 
   Sara`"Without Sora, we won't know why there's been 
this blackout..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah. Sora knows more about LeMU than 
anyone."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU05ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A217`); appendText; 
   You`"Uh...Sora..."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KB07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A218`); appendText; 
   You`"Sora..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A219`); appendText; 
   Sara`"?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"?"`;
   waitForClick; clearText; marker; sound(`S2A220`); appendText; 
   Takeshi`"?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU03ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A221`); appendText; 
   You`"Maybe it's time..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU07ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A222`); appendText; 
   You`"Since it has come to this, I'll tell you..."`;
   waitForClick; clearText; marker; sound(`S2A223`); appendText; 
   You`"I don't think we'll find Sora, 
even if we look."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 4, name1: `SA06ADS`, name2: `KB06ADS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A224`); appendText; 
   Sara`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What?"`;
   waitForClick; clearText; marker; sound(`S2A225`); appendText; 
   Takeshi`"Why not?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU05ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A226`); appendText; 
   You`"I can't tell you the reason."`;
   waitForClick; clearText; marker; sound(`S2A227`); appendText; 
   You`"That's something that you should 
hear from Sora herself..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A228`); appendText; 
   Sara`"???"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"???"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KB08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A229`); appendText; 
   Takeshi`"???"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A230`); appendText; 
   You`"Anyway, just take my word for it."`;
   waitForClick; clearText; marker; sound(`S2A231`); appendText; 
   You`"You don't have to worry. 
Sora is just fine."`;
   waitForClick; clearText; marker; sound(`S2A232`); appendText; 
   You`"And she will come back for sure."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Come back?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You ignored my question.`;
   waitForClick; clearText; 
});
removeFG({ id: 4, useAnim: true });
fgload({ id: 4, name: `TU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A233`); appendText; 
   Tsugumi`"I see..."`;
   waitForClick; clearText; marker; sound(`S2A234`); appendText; 
   Tsugumi`"So, what are you going to do?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU11ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A235`); appendText; 
   You`"I think we should try 
the Generator Room..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A236`); appendText; 
   Sara`"The Generator Room?"`;
   waitForClick; clearText; marker; sound(`S2A237`); appendText; 
   You`"I figure that the cause of this blackout is 
trouble in the Generator Room."`;
   waitForClick; clearText; marker; appendText; 
   Narr`That reminded me of something Sora had 
said the day before...`;
   waitForClick; clearText; marker; appendText; 
   Narr`LeMU didn't receive any power from the 
outside, but had an in-house generating 
system.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was a thermal seafloor vent where hot 
water was pumped out of the seabed and heat 
from that was used to operate generators.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S2A238`); appendText; 
   You`"Tsugumi, you'll come along, won't you?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `TU10ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A239`); appendText; 
   Tsugumi`"Sorry, but I'm not up for it."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SA06ADS`, name2: `YU06ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A240`); appendText; 
   You`"What?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S2A241`); appendText; 
   Tsugumi`"I'm not going."`;
   waitForClick; clearText; marker; sound(`S2A242`); appendText; 
   Tsugumi`"If you want to go, be my guest."`;
   waitForClick; clearText; 
});
removeFG({ id: 4, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Saying that Tsugumi left.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It didn't look like it would be any use 
calling after her.`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KB05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A243`); appendText; 
   Takeshi`"Geez. I have no clue what is going on in that 
girl's head."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU13ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A244`); appendText; 
   You`"Oh well. The four of us will have to go."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA15ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A245`); appendText; 
   Sara`"Nakkyu, where is the Generator Room?"`;
   waitForClick; clearText; marker; sound(`C2S065`); appendText; 
   You`"The Generator Room is here - in 
Dritte stock."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KB02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A247`); appendText; 
   Takeshi`"Alright! Let's get a move on. You, can you 
lead the way?"`;
   waitForClick; clearText; 
});
removeFG({ id: 4, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi started walking toward the corridor.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU14ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A248`); appendText; 
   You`"Hey Takeshi, where do you think 
you are going?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 4, name1: `SA08ADS`, name2: `KB07ADS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A249`); appendText; 
   Takeshi`"Where? To the Generator Room of course. 
It was your idea to start with, right?"`;
   waitForClick; clearText; marker; sound(`S2A250`); appendText; 
   You`"And just how do you intend to get there?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KB05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A251`); appendText; 
   Takeshi`"Huh? By walking through the corridors dummy."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU17ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A252`); appendText; 
   You`"Oh please...you really don't get 
anything, do you?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 4, name1: `SA05ADS`, name2: `KB06ADS`, x1: 128, x2: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A253`); appendText; 
   Takeshi`"Huh? What's that supposed to mean?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey, You. I don't think 
I get it either..."`;
   waitForClick; clearText; marker; sound(`S2A254`); appendText; 
   Sara`"Me neither."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU05ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A255`); appendText; 
   You`"You guys don't remember the map of LeMU 
we saw yesterday?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KB01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2A256`); appendText; 
   Takeshi`"Map? Map...map..."`;
   waitForClick; clearText; 
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
   marker; sound(`S2A257`); appendText; 
   Sara`"Oh...you mean the three story map that had 
the areas split into two areas?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh, that's right..."`;
   waitForClick; clearText; marker; sound(`S2A258`); appendText; 
   You`"You remember it too, Takeshi?"`;
   waitForClick; clearText; 
});
hideTextbox();
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 7 });
openMapCommentAnim();
waitForClick();
showTextbox();
text(() => {
   marker; sound(`S2A259`); appendText; 
   Takeshi`"I can't say I remember it exactly...
but kinda, yeah."`;
   waitForClick; clearText; 
});
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP3F_A1`, transition: 30 });
unSkippableDelay(1);
showTextbox();
text(() => {
   marker; sound(`S2A260`); appendText; 
   You`"And what was between those two areas?"`;
   waitForClick; clearText; marker; sound(`S2A261`); appendText; 
   Takeshi`"Between them? How am I supposed to know...?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hmmm...I don't think that 
there was anything."`;
   waitForClick; clearText; 
});
hideTextbox();
show_map_root_image_blinking_Anim();
show_map_root_image_blinking_Anim();
waitForClick();
showTextbox();
text(() => {
   marker; sound(`S2A262`); appendText; 
   You`"Exactly."`;
   waitForClick; clearText; marker; sound(`S2A263`); appendText; 
   You`"Which means?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"The two areas are divided by a block 
which is now under water...?"`;
   waitForClick; clearText; marker; sound(`S2A264`); appendText; 
   You`"So?"`;
   waitForClick; clearText; marker; sound(`S2A265`); appendText; 
   Sara`"We can't go directly from the Control Room 
area to the Generator Room area."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Besides that, the emergency stairs of 
one of those areas was also flooded..."`;
   waitForClick; clearText; 
});
closeMapIndicatorAnim();
showTextbox();
text(() => {
   marker; sound(`S2A266`); appendText; 
   You`"Meaning what?"`;
   waitForClick; clearText; marker; sound(`S2A267`); appendText; 
   Takeshi`"Oh, I get it..."`;
   waitForClick; clearText; marker; sound(`S2A268`); appendText; 
   Takeshi`"To get to the Generator Room's area, we have 
to access the second floor..."`;
   waitForClick; clearText; 
});
bgload({ name: `MAP2F_A1`, transition: 30 });
showTextbox();
text(() => {
   marker; sound(`S2A269`); appendText; 
   Takeshi`"And the only way we can do that is by using 
the neutral buoyancy elevator."`;
   waitForClick; clearText; 
});
hideTextbox();
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 4 });
openMapCommentAnim();
waitForClick();
showTextbox();
text(() => {
   marker; sound(`S2A270`); appendText; 
   You`"Correct."`;
   waitForClick; clearText; marker; sound(`S2A271`); appendText; 
   You`"So we have to go to the..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"To the entrance to the neutral buoyancy 
elevator."`;
   waitForClick; clearText; 
});
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP2F_A1`, transition: 30 });
unSkippableDelay(1);
showTextbox();
text(() => {
   marker; sound(`S2A272`); appendText; 
   You`"That's right."`;
   waitForClick; clearText; 
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
   marker; sound(`S2A273`); appendText; 
   You`"Now that you've got it...let's get going!"`;
   waitForClick; clearText; marker; sound(`S2A274`); appendText; 
   Sara`"Ready, set, go! Nin! Nin! Ninja!"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara took a bizarre kung fu pose and started 
spinning like a top.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I had no clue what she was trying to do.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
l_choice = 0;
jump(`S_2B`);
