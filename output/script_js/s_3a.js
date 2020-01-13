setDialogBoxColor(BLUE);
setSceneTitle({ index: 65 });
l_b0 = 5;
l_dayA = 3;
l_dayB = 3;
chapterCutin({ name: `00000000` });
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
clock(`5:34`);
playSFX({ name: `SE02_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Splash`;
   waitForClick; clearText; marker; appendText; 
   Narr`I scooped up water with both hands and 
splashed it on my face.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The instant it made contact, it sent a sharp 
shock to my brain.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Gaaaah!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I snapped open my eyes, completely awake.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought I had (probably) repeated this 
ritual several thousands of times. It was my 
way of refreshing myself in the morning.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I lifted my face and wiped it with the towel.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A smooth white counter, a sink...and a finely 
cracked mirror.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I stared foggily at my reflection in the 
mirror.`;
   waitForClick; clearText; 
});
bgload({ name: `BG25B3`, transition: 20 });
playBGM({ num: 2, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I passed Takeshi as I was returning to the 
corridor.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A000`); appendText; 
   Takeshi`"...Morning, Kid."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey, don't look so depressed Takeshi."`;
   waitForClick; clearText; marker; sound(`S3A001`); appendText; 
   Takeshi`"Nah. I'm just tired is all."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Well, a lot's happened in the last couple of 
days. Are you tired?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A002`); appendText; 
   Takeshi`"I'm alright. I just need to wake up is all. 
See ya."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Saying that he headed off to the bathroom.`;
   waitForClick; clearText; 
});
bgload({ name: `BG17A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara and You were waiting in the Conference 
Room.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU09ADM`, name2: `SA09ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A003`); appendText; 
   You`"GOOD MORNING!"`;
   waitForClick; clearText; marker; sound(`S3A004`); appendText; 
   Sara`"GOOD MOOOORNING!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The two of them seemed wired.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Morning..."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU02ADM`, name2: `SA08ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A005`); appendText; 
   You`"Hey, Kid. You don't seem very good? You 
having trouble waking up?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No. I'm awake."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A006`); appendText; 
   You`"You sure?"`;
   waitForClick; clearText; marker; sound(`S3A007`); appendText; 
   Sara`"I know. He's not a morning person or maybe 
he's got low blood pressure. Like me."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I don't know about that..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara sure didn't seem to have a problem with 
mornings.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was just glad that Sara appeared to be in a 
good mood.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A008`); appendText; 
   Sara`"I know all about it. I hate mornings. They 
are like hell on earth. I have destroyed more 
alarm clocks than I can count..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A009`); appendText; 
   You`"Mayo is always in the worst mood in the 
morning. I thought she might kill me today."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A010`); appendText; 
   Sara`"But Nakkyu got me in this wrestling hold..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A011`); appendText; 
   You`"Enough. There are children around."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`...I was getting a headache.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe it WAS low blood pressure that made me 
not a morning person....`;
   waitForClick; clearText; marker; appendText; 
   Narr`....`;
   waitForClick; clearText; marker; appendText; 
   Narr`Finally, when Takeshi came back conversation 
turned to breakfast.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 2, id2: 1, name1: `YU01ADM`, name2: `KB07ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A012`); appendText; 
   Takeshi`"But Tsugumi and Sora aren't here."`;
   waitForClick; clearText; marker; sound(`S3A013`); appendText; 
   You`"That's true...but they'll probably show up 
eventually."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A014`); appendText; 
   Takeshi`"With those two you're probably right."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `BG07B1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We all made our way to the kiosk.`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KB01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A015`); appendText; 
   Takeshi`"Everyone okay with hotdogs?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SA08ADS`, name2: `YU02ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A016`); appendText; 
   Sara`"Hotdogs?"`;
   waitForClick; clearText; marker; sound(`S3A017`); appendText; 
   You`"They have hotdogs here?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KB02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A018`); appendText; 
   Takeshi`"Well, I found a few in the back of 
the fridge. Must've been on the 
'stealth menu.'"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`With that, Takeshi disappeared inside the 
kiosk.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked like Takeshi would be chef for 
another day.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But...`;
   waitForClick; clearText; marker; sound(`S3A019`); appendText; 
   Takeshi`"What in the...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi had let out a surprised yelp from 
inside.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Looking into the shop, there was Takeshi 
frozen in front of the freezer with the door 
open.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What's wrong?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `KB04ADM`, name2: `SA06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A020`); appendText; 
   Takeshi`"What's wrong is they're gone!"`;
   waitForClick; clearText; marker; sound(`S3A021`); appendText; 
   Sara`"Gone? What are?"`;
   waitForClick; clearText; marker; sound(`S3A022`); appendText; 
   Takeshi`"The stuff. The hotdog stuff. The sausages 
that were in here are gone."`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `YU05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A023`); appendText; 
   You`"I'll bet they weren't there to start with."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A024`); appendText; 
   Takeshi`"No. They were here when I checked last night. 
I found them when I made dinner last night."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You think they were stolen?"`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SA05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A025`); appendText; 
   Sara`"By whom?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I dunno..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB04ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A026`); appendText; 
   Takeshi`"Damn! Who would do something like that?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi slammed the door violently shut.`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `YU01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A027`); appendText; 
   You`"Calm down. We're not out of food. We'll just 
go with the regular menu."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A028`); appendText; 
   Takeshi`"Geez..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A029`); appendText; 
   You`"Just forget about it and start cookiiiing. 
I'm starviiiing."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SA07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A030`); appendText; 
   Sara`"Me too."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You and I were of the same opinion.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We weren't expecting hotdogs to begin 
with...and I was hungry.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi still looked peeved. Maybe it was 
because he was hungry too.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The first thing we had to do was fill our 
stomachs.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the end, we gave up on hotdogs and went 
with our standby menu - chicken sandwiches - 
for breakfast.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
delay({ interval: 60 });
setSceneTitle({ index: 66 });
bgload({ name: `BG07B1`, transition: 26 });
playBGM({ num: 18, volume: 100 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`6:21`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`When everyone had a Takeshi-made sandwich in 
hand we sat down for a lively and fun 
breakfast together.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You and Sara were especially boisterous.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi said that the two of them easily made 
as much noise as three or more people.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But that was just Takeshi being himself...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The two of them never seemed to run out of 
things to talk about and kept jabbering away 
cheerfully about the most meaningless things.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SA16ADM`, name2: `YU11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A031`); appendText; 
   Sara`"Hey, Nakkyu. Do you remember Mr. Konishi, 
that teacher at our school."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S3A032`); appendText; 
   You`"Konishi? Oh, you mean Konnie? The music 
teacher that was built like a tank and a 
completely crazy animal lover."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S3A033`); appendText; 
   Sara`"Yeah. That Konnie."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A034`); appendText; 
   You`"He's still there. He's been around for ages."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S3A035`); appendText; 
   Sara`"You know what? The other day he bought a 
robotic dog."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A036`); appendText; 
   You`"No kidding? He did? That mechanic phobe?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A037`); appendText; 
   Sara`"Yeah. But his pets kept dying on him. And 
he'd take time off...I think it just wore him 
down."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A038`); appendText; 
   You`"When I was still going to that school, he was 
trying to bring one of his pets back through 
cloning."`;
   waitForClick; clearText; marker; sound(`S3A039`); appendText; 
   Sara`"But that clone got sick and died, too. I 
swear he's cursed."`;
   waitForClick; clearText; marker; sound(`S3A040`); appendText; 
   You`"But really, that Konnie...I tell you, that 
robot dog looks so much like the real thing 
that I'll bet he is treating it like a normal 
pet."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A041`); appendText; 
   Sara`"Hey, didn't you have a robotic dog at your 
house?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A042`); appendText; 
   You`"Yup, sure do. Actually, it's my mom's 
though..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A043`); appendText; 
   You`"I think it's one of those really old types, 
but it just keeps ticking along happily. It 
never breaks."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S3A044`); appendText; 
   You`"Thinking back on it, Mayo, you never came 
over to my house to play, did you? You have to 
next time. I'll show you it."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A045`); appendText; 
   Sara`"Really? Sounds good. If I get a chance..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A046`); appendText; 
   You`"You can come over anytime. We're friends, 
right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A047`); appendText; 
   Sara`"Yes...of course."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU12ADM`, name2: `KB11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A048`); appendText; 
   Takeshi`"Hey, can I ask you something?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Just then Takeshi jumped into their 
conversation.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A049`); appendText; 
   You`"Eh? What?"`;
   waitForClick; clearText; marker; sound(`S3A050`); appendText; 
   Takeshi`"You two seem to be close, but how do you know 
each other?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A051`); appendText; 
   You`"Oh? We didn't tell you?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi shook his head as he gulped down cola.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You and Sara are from the same school. You 
graduated already."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I think she said she was at Kyumeikan Girls 
High School until this last March..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I answered for them, but You nodded.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And when You was a senior, Sara entered the 
school as a scholarship student, You added.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"A scholarship student?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I'd never heard that word before.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A054`); appendText; 
   Takeshi`"Do...do you mean one of those people that 
sneaks in the backdoor?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A055`); appendText; 
   You`"You always have such a twisted take on 
everything."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A056`); appendText; 
   Takeshi`"No I don't! I'm not half as mean-spirited as 
you."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A057`); appendText; 
   Sara`"Due to my situation at home, I never really 
planned on going to high school..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A058`); appendText; 
   Sara`"But the principal of Kyumeikan was a friend 
of the family and helped get me in as a 
scholarship student."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU02ADM`, name2: `KB07ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A060`); appendText; 
   You`"He didn't want her unpolished genius to go to 
waste."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It sounded like Sara was a bit of a protege 
and sort of famous.`;
   waitForClick; clearText; marker; sound(`S3A061`); appendText; 
   Takeshi`"Whoa."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"S-Sara's amazing."`;
   waitForClick; clearText; marker; appendText; 
   Narr`This and the information from the day before 
about Sara's computer skills made me think 
that she was might be on a different level 
than the rest of us.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `SA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A062`); appendText; 
   Sara`"It's no..."`;
   waitForClick; clearText; marker; sound(`S3A063`); appendText; 
   Sara`"It's no big deal. Really."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara looked bored as she said it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe it was no big deal for her...`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU01ADM`, name2: `KB01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A064`); appendText; 
   Takeshi`"So you went to the same school but were in 
different classes?"`;
   waitForClick; clearText; marker; sound(`S3A065`); appendText; 
   Takeshi`"Were you on a team or in a club together or 
something?"`;
   waitForClick; clearText; marker; sound(`S3A066`); appendText; 
   You`"Yup."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A067`); appendText; 
   Sara`"Nakkyu was leader of the school club I joined 
as a freshman." `;
   waitForClick; clearText; marker; appendText; 
   Narr`After eating the sandwiches, Sara held the pop 
can with both hands and gazed at the ceiling 
with a distant look in her eyes.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA15ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A068`); appendText; 
   Sara`"That was a year ago."`;
   waitForClick; clearText; marker; sound(`S3A069`); appendText; 
   Sara`"Right after I had entered Kyumeikan..."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 24, color: WHITE });
stopBGM();
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`....`;
   waitForClick; clearText; marker; appendText; 
   Narr`....`;
   waitForClick; clearText; marker; appendText; 
   Narr`....`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 6, volume: 100 });
openCherryBlossomAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It was a sunny spring afternoon after class.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A light wind made the cherry blossoms dance in 
the schoolyard as and dust gently tickled the 
nose.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There were groups of new students walking 
packaged in starched new school uniforms and 
expressions full of nervousness and 
expectations.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There were senior students eagerly calling out 
to them to join their clubs.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was probably a scene played out on most 
school campuses.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As I let my imagination run wild I was looking 
around the campus trying to get a feel for my 
new surroundings. `;
   waitForClick; clearText; marker; appendText; 
   Narr`All of the sudden, from among the din of 
voices and activity someone called out to me.`;
   waitForClick; clearText; marker; sound(`S3A070`); appendText; 
   //??
   Unk`"Hey, you there!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I stopped.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Looking in the direction of the voice was a 
girl student, her face one big smile.`;
   waitForClick; clearText; marker; appendText; 
   Narr`From the ribbon on her uniform it was clear 
she was a senior.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her hair was cut short enough that it just hid 
her ears. It also made her look like a 
go-getter.`;
   waitForClick; clearText; marker; appendText; 
   Narr`When I pointed at myself to see if she meant 
me, she nodded smiling.`;
   waitForClick; clearText; marker; sound(`S3A071`); appendText; 
   //??
   Unk`"Yeah. I mean you."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The smiling girl approached me.`;
   waitForClick; clearText; marker; sound(`S3A072`); appendText; 
   //??
   Unk`"Do you have a minute? Sure you do, right?"`;
   waitForClick; clearText; marker; sound(`S3A073`); appendText; 
   //??
   Unk`"If you are up for it, can I talk with you?"`;
   waitForClick; clearText; marker; sound(`S3A074`); appendText; 
   //??
   Unk`"Don't worry. It won't take much of your time."`;
   waitForClick; clearText; marker; appendText; 
   Narr`What was it with this person? I wondered if 
she were trying to pick me up...or...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had a bad feeling about the situation.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Seeing my skeptical face, the girl with the 
bobbed haircut tried to explain herself.`;
   waitForClick; clearText; marker; sound(`S3A075`); appendText; 
   //??
   Unk`"Don't get me wrong. I'm not trying to...I 
simply wanted to..."`;
   waitForClick; clearText; marker; sound(`S3A076`); appendText; 
   //??
   Unk`"I was just wandering if you would like to 
join our club."`;
   waitForClick; clearText; marker; appendText; 
   Narr`...So that was it. I wonder how many people 
had asked me the same question.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was pretty sick of the whole thing.`;
   waitForClick; clearText; marker; sound(`S3A077`); appendText; 
   Sara`"No thank you. I'm not interested."`;
   waitForClick; clearText; marker; sound(`S3A078`); appendText; 
   //??
   Unk`"Oh really? Have you already decided to join 
somewhere?"`;
   waitForClick; clearText; marker; sound(`S3A079`); appendText; 
   Sara`"No."`;
   waitForClick; clearText; marker; sound(`S3A080`); appendText; 
   //??
   Unk`"Well then!"`;
   waitForClick; clearText; marker; sound(`S3A081`); appendText; 
   Sara`"I've decided not to join anything."`;
   waitForClick; clearText; marker; sound(`S3A082`); appendText; 
   //??
   Unk`"Oh, don't say that...won't you just come take 
a look at our club room?"`;
   waitForClick; clearText; marker; sound(`S3A083`); appendText; 
   Sara`"No thank you."`;
   waitForClick; clearText; marker; sound(`S3A084`); appendText; 
   //??
   Unk`"I'll bet you are wondering what our club is 
all about."`;
   waitForClick; clearText; marker; sound(`S3A085`); appendText; 
   Sara`"Not in the least."`;
   waitForClick; clearText; marker; sound(`S3A086`); appendText; 
   //??
   Unk`"Okay, okay. Just come take a look. We don't 
bite."`;
   waitForClick; clearText; marker; sound(`S3A087`); appendText; 
   Sara`"I said..."`;
   waitForClick; clearText; marker; sound(`S3A088`); appendText; 
   //??
   Unk`"Listen! Stop talking, shut up and come with 
me!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`So that persistent senior dragged me to their 
club room half by force.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 24, color: WHITE });
closeCherryBlossomAnim();
stopBGM();
bgload({ name: `BG07B1`, transition: 26 });
multifgload3({ name1: `SA02ADS`, name2: `KB06ADS`, name3: `YU08ADS`, x1: 128, x2: 512, x3: 320, useAnim: 0 });
playBGM({ num: 1, volume: 100 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"So You...was that girl?"`;
   waitForClick; clearText; marker; sound(`S3A089`); appendText; 
   Sara`"You got it."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB11ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A090`); appendText; 
   Takeshi`"She hasn't changed a bit. I mean you're 
exactly the same, You."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU04ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A091`); appendText; 
   You`"Be quiet. I was desperate then. There was 
nothing else I could do!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Why were you so eager to get Sara to join?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A092`); appendText; 
   You`"It...it was a matter of life or death for the 
club."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB07ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"?"`;
   waitForClick; clearText; marker; sound(`S3A093`); appendText; 
   You`"It could have been the end of us."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"???"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A094`); appendText; 
   Sara`"She means they were short on members and were 
about to fold."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB02ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A095`); appendText; 
   Takeshi`"Oh, I see."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A096`); appendText; 
   Sara`"I mean, including Nakkyu there were only 
three members."`;
   waitForClick; clearText; marker; sound(`S3A097`); appendText; 
   Takeshi`"Ha, ha, ha! That's pretty grim."`;
   waitForClick; clearText; marker; sound(`S3A098`); appendText; 
   You`"I was going to graduate that year so we had 
to get new members or we would have had to 
close."`;
   waitForClick; clearText; marker; sound(`S3A099`); appendText; 
   You`"I just couldn't stand by and watch the club 
that we had built go to waste."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB08ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A100`); appendText; 
   Takeshi`"Well, I guess I see what you mean."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A101`); appendText; 
   You`"So, it was the only choice I had if our club 
was going to survive."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So exactly what kind of club was it?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A102`); appendText; 
   You`"We were a robust model of an intelligent 
beacon of education while working in the 
public interest."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A103`); appendText; 
   Takeshi`"Wow..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi took a swig of his cola.`;
   waitForClick; clearText; marker; sound(`S3A104`); appendText; 
   Takeshi`"And? What did you guys do?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A105`); appendText; 
   You`"We were hackers."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB13ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A106`); appendText; 
   Takeshi`"Cough...!!"`;
   waitForSound; clearText; 
});
multifgload2({ id1: 4, id2: 1, name1: `YU04ADS`, name2: `SA06ADS`, x1: 320, x2: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A107`); appendText; 
   You`"Geez! That's gross...you spewed cola 
everywhere!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB04ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A108`); appendText; 
   Takeshi`"Stupid! Hacking is not robust and certainly 
isn't in 'the public interest'!"`;
   waitForClick; clearText; marker; sound(`S3A109`); appendText; 
   You`"What are you talking about?"`;
   waitForClick; clearText; marker; sound(`S3A110`); appendText; 
   Takeshi`"It's a crime, that's why."`;
   waitForClick; clearText; marker; sound(`S3A111`); appendText; 
   You`"You don't know what you're talking about! 
Hacking isn't crime!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB07ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A112`); appendText; 
   Takeshi`"Huh? You sure?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 4, id2: 1, name1: `YU07ADS`, name2: `SA07ADS`, x1: 320, x2: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi looked at me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`His eyes said, 'What the heck is she talking 
about?'`;
   waitForClick; 
});
choice(
   `I get it.`
   `I have no clue.`
);
switch (l_choice) {
   case 0: goto(lbl_00000970);
   case 1: goto(lbl_000009bf);
}
let lbl_00000970;
l_you_point += 1;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Oh well...I figured that I'd have to explain 
it.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Takeshi, listen."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Originally hacking as a word meant the 
rhythmical manipulation of a computer."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"People that could do this were called 
hackers. That evolved into the word hacker for 
technicians and research computer experts."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Probably what you're thinking about is the 
hacking they talk about on the news, meaning a 
crime committed using a computer..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Like when somebody steals secret information, 
or destroys data via computer..."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 4, id2: 1, name1: `YU06ADS`, name2: `SA08ADS`, x1: 320, x2: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"But that's a mistake."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"That kind of thing is called 'cracking.' It's 
completely different."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"And the people that do this are known as 
'crackers.' You need to make a distinction 
between them."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Sara`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Uh, what's the matter everybody?"`;
   waitForClick; clearText; marker; sound(`S3A113`); appendText; 
   Sara`"Hey, Kid..."`;
   waitForClick; clearText; marker; sound(`S3A114`); appendText; 
   Takeshi`"Are you sure you've lost your memory?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A115`); appendText; 
   You`"Well...anyway, you get it now. There is 
really no connection whatsoever between the 
word hacking and criminal activity."`;
   waitForClick; clearText; 
});
goto(lbl_00000a8d);
let lbl_000009bf;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Of course, I had no clue.`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A116`); appendText; 
   You`"Geez...Mayo, explain it so that this idiot 
can understand it."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A117`); appendText; 
   Sara`"Okay."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara cleared her throat, put on her 
explanation face and started speaking.`;
   waitForClick; clearText; marker; sound(`S3A118`); appendText; 
   Sara`"Originally hacking as a word meant the 
rhythmical manipulation of a computer."`;
   waitForClick; clearText; marker; sound(`S3A119`); appendText; 
   Sara`"People that could do this were called 
hackers. That evolved into the word hacker for 
technicians and research computer experts."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A120`); appendText; 
   Sara`"Probably what you're thinking about is the 
hacking they talk about on the news meaning a 
crime committed using a computer..."`;
   waitForClick; clearText; marker; sound(`S3A121`); appendText; 
   Sara`"Like when somebody steals secret information, 
or destroys data via computer..."`;
   waitForClick; clearText; marker; sound(`S3A122`); appendText; 
   Sara`"But that's a mistake."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A123`); appendText; 
   Sara`"That kind of thing is called 'cracking.' It's 
completely different."`;
   waitForClick; clearText; marker; sound(`S3A124`); appendText; 
   Sara`"And the people that do this are known as 
crackers. You need to make a distinction 
between them."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A125`); appendText; 
   Sara`"There you go!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You clapped loudly.`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU18ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A126`); appendText; 
   You`"Got it? There is really no connection 
whatsoever between the word hacking and 
criminal activity."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU01ADS`, x: 320, useAnim: true });
let lbl_00000a8d;
showTextbox();
text(() => {
   marker; sound(`S3A127`); appendText; 
   You`"It was an intelligent gathering for us to 
gather to try to boost our computer skills."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB03ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A128`); appendText; 
   Takeshi`"Oops. Excuse my ignorance!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I'm just surprised that You was involved in 
an indoor club."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 4, id2: 1, name1: `YU08ADS`, name2: `SA01ADS`, x1: 320, x2: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A129`); appendText; 
   You`"Oh, I was doing all kinds of things. All 
said...I must have been involved with seven 
groups."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Wow...I see."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A130`); appendText; 
   Takeshi`"And Sara just joined right up then, huh?"`;
   waitForClick; clearText; marker; sound(`S3A131`); appendText; 
   Sara`"Nope."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB07ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"You didn't?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A132`); appendText; 
   You`"She didn't join the club without a fight. 
Mayo is Mayo after all."`;
   waitForClick; clearText; marker; appendText; 
   Narr`With that ambiguous comment, You got a distant 
look in her eye and started to speak.`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU11ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A133`); appendText; 
   You`"That day I could have taken Mayo to our club 
room..."`;
   waitForClick; clearText; marker; sound(`S3A134`); appendText; 
   You`"But...but..."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 24, color: WHITE });
stopBGM();
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`....`;
   waitForClick; clearText; marker; appendText; 
   Narr`....`;
   waitForClick; clearText; marker; appendText; 
   Narr`....`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_12`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Slide.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 5, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`S3A135`); appendText; 
   You`"So this is our hacking club room. Go on in."`;
   waitForClick; clearText; marker; appendText; 
   Matsunaga`"..."`;
   waitForClick; clearText; marker; sound(`S3A136`); appendText; 
   You`"Huh? What's the matter? It's kind of cramped, 
but ahead."`;
   waitForClick; clearText; marker; sound(`S3A137`); appendText; 
   Matsunaga`"It really is...cramped."`;
   waitForClick; clearText; marker; sound(`S3A138`); appendText; 
   You`"Well, I suppose."`;
   waitForClick; clearText; marker; sound(`S3A139`); appendText; 
   Matsunaga`"And you have tons of stuff."`;
   waitForClick; clearText; marker; sound(`S3A140`); appendText; 
   You`"I suppose."`;
   waitForClick; clearText; marker; sound(`S3A141`); appendText; 
   Matsunaga`"I mean, there is no way I'll fit in here."`;
   waitForClick; clearText; marker; sound(`S3A142`); appendText; 
   You`"I suppose not...Ah, ha, ha."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Like always, our little one-room clubroom was 
so cluttered there was nowhere to even walk.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Several computers and a steel rack covered the 
three walls and the floor was covered in a 
tangle of cables.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In what open space there was, computers 
without covers and bound up printouts were 
piled high.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A stuffed animal bumblebee, a button with a 
picture of a nuclear missile blasting off, an 
unidentified object X and other stuff were 
scattered around almost completely covering 
the floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If Mayo had been a clean freak, we would have 
lost her right there.`;
   waitForClick; clearText; marker; sound(`S3A143`); appendText; 
   //??
   Unk`"Oh? Nakkyu, is that a new member?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`A girl stood from in front of a computer, her 
chair nearly buried. `;
   waitForClick; clearText; marker; appendText; 
   Narr`She was the head of the club. She always wore 
glasses with black frames and kept her hair in 
two braids.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her name was...uh...I forgot.`;
   waitForClick; clearText; marker; sound(`S3A144`); appendText; 
   You`"That's right. We just barely avoided having 
our club fold..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`So as I answered her I hopped from one open 
inch of floor space to the next and into the 
room.`;
   waitForClick; clearText; marker; sound(`S3A145`); appendText; 
   Matsunaga`"Um, I, uh, haven't decided to join yet..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara was still contemplating how best to enter 
the room.`;
   waitForClick; clearText; marker; sound(`S3A146`); appendText; 
   You`"So where is your partner?"`;
   waitForClick; clearText; marker; sound(`S3A147`); appendText; 
   //Club President
   Club_President`"Out with a cold."`;
   waitForClick; clearText; marker; sound(`S3A148`); appendText; 
   You`"I heard one is going around. You gotta be 
careful."`;
   waitForClick; clearText; marker; sound(`S3A149`); appendText; 
   Matsunaga`"Hanging out in a place like this it'd be even 
more strange if you didn't get ill..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara gingerly entered the room as if searching 
for one foothold and then another.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Every step she took her footsteps were 
punctuated with a crunching noise, as if 
something were breaking. Of course, we didn't 
pay any attention to it.`;
   waitForClick; clearText; marker; sound(`S3A150`); appendText; 
   You`"Okay. Now is your chance to get a sense of 
what our club is all about. Please sit down."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I unearthed a chair from the pile of junk and 
gestured to Sara to sit.`;
   waitForClick; clearText; marker; sound(`S3A151`); appendText; 
   Matsunaga`"I'm only here to look."`;
   waitForClick; clearText; marker; sound(`S3A152`); appendText; 
   You`"Alright, alright. If you still have doubts, 
just give it a try. It's pretty fun."`;
   waitForClick; clearText; marker; sound(`S3A153`); appendText; 
   Matsunaga`"Can I ask you something first?"`;
   waitForClick; clearText; marker; sound(`S3A154`); appendText; 
   You`"Anything."`;
   waitForClick; clearText; marker; sound(`S3A155`); appendText; 
   Matsunaga`"This is a hacking club, right?"`;
   waitForClick; clearText; marker; sound(`S3A156`); appendText; 
   You`"Right."`;
   waitForClick; clearText; marker; sound(`S3A157`); appendText; 
   Matsunaga`"But it looks like the only thing on the 
screens are games."`;
   waitForClick; clearText; marker; sound(`S3A158`); appendText; 
   You`"Uh, well, that's true..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I crossed my arms and nodded seriously several 
times.`;
   waitForClick; clearText; marker; sound(`S3A159`); appendText; 
   You`"Actually, we just call ourselves a hacking 
club. None of our current members can really 
program."`;
   waitForClick; clearText; marker; sound(`S3A160`); appendText; 
   //Club President
   Club_President`"Everybody that could graduated."`;
   waitForClick; clearText; marker; appendText; 
   Matsunaga`"........."`;
   waitForClick; clearText; marker; sound(`S3A161`); appendText; 
   You`"Even games can have meaning. Uh, they aren't 
bad for helping you get used to computers..."`;
   waitForClick; clearText; marker; sound(`S3A162`); appendText; 
   Matsunaga`"Um..."`;
   waitForClick; clearText; marker; sound(`S3A163`); appendText; 
   You`"Yes? What is it?"`;
   waitForClick; clearText; marker; sound(`S3A164`); appendText; 
   Matsunaga`"I'll be upfront about this. Getting involved 
with me will only get you into trouble."`;
   waitForClick; clearText; marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; sound(`S3A165`); appendText; 
   Matsunaga`"I mean..."`;
   waitForClick; clearText; marker; sound(`S3A166`); appendText; 
   You`"...Oh, mornin' Kid."`;
   waitForClick; clearText; marker; sound(`S3A167`); appendText; 
   You`"Look we're in danger of losing our club as it 
is...nothing could be WORSE than you not 
joining."`;
   waitForClick; clearText; marker; sound(`S3A168`); appendText; 
   Matsunaga`"Do you mind if I touch this?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara pointed at the keyboard.`;
   waitForClick; clearText; marker; sound(`S3A169`); appendText; 
   You`"Oh, be my guest. You operate it by, um..."`;
   waitForClick; clearText; marker; sound(`S3A170`); appendText; 
   Matsunaga`"I'm fine. I know how to use it."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She sat in the chair, took the mouse and 
stared at the monitor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She opened several files. Finding the one she 
was looking for, she opened it up and started 
editing it.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She didn't even glance at the keyboard. She 
just tapped nonstop.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The speed of her touch-typing was incredible.`;
   waitForClick; clearText; marker; sound(`S3A171`); appendText; 
   You`"Wow!"`;
   waitForClick; clearText; marker; sound(`S3A172`); appendText; 
   //Club President
   Club_President`"Amazing..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`When she had finished typing, Sara opened a 
different piece of software and started typing 
in commands.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The hard disk whirred to life and finally...`;
   waitForClick; clearText; marker; sound(`S3A173`); appendText; 
   You`"Wow!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Suddenly the face of a bumblebee appeared on 
all of the monitors in the room. `;
   waitForClick; clearText; marker; appendText; 
   Narr`That face stared out at us and winked. Then 
all of the faces stuck out their tongues at us.`;
   waitForClick; clearText; marker; sound(`S3A174`); appendText; 
   You`"Wh-wh-what...!"`;
   waitForClick; clearText; marker; sound(`S3A175`); appendText; 
   //Club President
   Club_President`"What's going on? I can't get this computer to 
listen to me...!?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The next instant...`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_10`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Snap!`;
   waitForClick; clearText; marker; appendText; 
   Narr`All of the computers suddenly shut down at 
once.`;
   waitForClick; clearText; marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Club President
   Club_President`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The two of us stood there stunned.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Finished, Sara stood up and said quietly -`;
   waitForClick; clearText; marker; sound(`S3A176`); appendText; 
   Matsunaga`"You get it now?"`;
   waitForClick; clearText; marker; sound(`S3A177`); appendText; 
   Matsunaga`"Nothing good can come of hooking up with me."`;
   waitForClick; clearText; marker; sound(`S3A178`); appendText; 
   Matsunaga`"So...don't."`;
   waitForClick; clearText; marker; appendText; 
   Narr`And then she left.`;
   waitForClick; clearText; marker; sound(`S3A179`); appendText; 
   //Club President
   Club_President`"What in the...?"`;
   waitForClick; clearText; marker; sound(`S3A180`); appendText; 
   You`"What happened?"`;
   waitForClick; clearText; marker; sound(`S3A181`); appendText; 
   //Club President
   Club_President`"The computer won't boot up."`;
   waitForClick; clearText; marker; sound(`S3A182`); appendText; 
   You`"You sure it's not unplugged?"`;
   waitForClick; clearText; marker; sound(`S3A183`); appendText; 
   //Club President
   Club_President`"That's not it...it's plugged in, but it won't 
start up."`;
   waitForClick; clearText; marker; sound(`S3A184`); appendText; 
   You`"Huh...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She meant that the software had been destroyed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And the problem wasn't limited to just one 
machine.`;
   waitForClick; clearText; marker; appendText; 
   Narr`All of the computers in that room that were 
connected to the network were in the same 
state.`;
   waitForClick; clearText; marker; sound(`S3A185`); appendText; 
   You`"No way. That girl..."`;
   waitForClick; clearText; marker; sound(`S3A186`); appendText; 
   You`"Could she have cracked the whole system that 
quickly?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Looking down there was a stuffed animal 
bumblebee glaring up nastily at me.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
stopBGM();
bgload({ name: `BG07B1`, transition: 26 });
multifgload3({ name1: `SA08ADS`, name2: `KB13ADS`, name3: `YU18ADS`, x1: 128, x2: 512, x3: 320, useAnim: 0 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; sound(`S3A187`); appendText; 
   Takeshi`"No kidding...?"`;
   waitForClick; clearText; marker; sound(`S3A188`); appendText; 
   You`"No kidding."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB07ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A189`); appendText; 
   Takeshi`"Geez. That's crazy."`;
   waitForClick; clearText; marker; sound(`S3A190`); appendText; 
   Sara`"Well Nakkyu was so persistent it was 
annoying!"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A191`); appendText; 
   Takeshi`"Y-yeah, but you didn't have to..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So Sara didn't join?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What? Then that would mean that..."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A192`); appendText; 
   You`"No. You've got it backwards. I didn't say she 
didn't join, did I?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A193`); appendText; 
   Sara`"After that Nakkyu came bothering me, like 
every day."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Even though she did that to your computers?"`;
   waitForClick; clearText; marker; sound(`S3A194`); appendText; 
   You`"Because she did that."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Basically, You had been taken by Sara's genius.`;
   waitForClick; clearText; marker; appendText; 
   Narr`By her genius for programming.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Day after day her fixation drove her to call 
on Sara.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Finally, Sara was overwhelmed by You's 
enthusiasm and joined the club.`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A195`); appendText; 
   You`"That was how Mayo and I became friends."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A196`); appendText; 
   Sara`"Okey-dokey!"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
delay({ interval: 60 });
playBGM({ num: 2, volume: 100 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`With that long, long story finally over, we 
all stretched.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A197`); appendText; 
   Takeshi`"Well, we finished eating. Whaddya say? Should 
we head back to the Conference Room?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sure."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi hadn't eaten, but there was no point 
in waiting around for her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We took her sandwich back to the Conference 
Room.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU07ADM`, name2: `KB01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A198`); appendText; 
   You`"I'm going to step out for a bit."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A199`); appendText; 
   Takeshi`"Huh? Where to?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A200`); appendText; 
   You`"Uh, just a little walk..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"???"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A201`); appendText; 
   You`"Hey you keep poking your nose into a girl's 
privacy, and she just might start disliking 
you."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You shrugged and patted me on the head.`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SA01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A202`); appendText; 
   Sara`"What about me?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A203`); appendText; 
   You`"Sorry Mayo, but I think I'll go alone."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A204`); appendText; 
   Sara`"Okay..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A205`); appendText; 
   You`"I'm sorry. I'll be right back."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You shot the dejected Sara a smile as she 
headed quickly toward the door.`;
   waitForClick; clearText; marker; sound(`S3A206`); appendText; 
   Takeshi`"Hey I don't care where you go, but if 
something happens you come right back!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You shot Takeshi a thumbs-up on the way out 
the door.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
setSceneTitle({ index: 67 });
bgload({ name: `BG26B3L`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`6:38`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She was on the way to the Conference Room.`;
   waitForClick; clearText; 
});
setNumberOfFlash(1);
setFlashRGBColor(0, 0, 0);
triggerFlash();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Ah...!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked up at the ceiling.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Wh-what's that...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had thought I had seen something for a 
second.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But when I had done a double take I didn't see 
anything.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A207`); appendText; 
   Takeshi`"H-hey, what's wrong?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Even with Takeshi calling out to me, I 
couldn't tear my eyes from the ceiling.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I wonder..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I don't know what it was, but I swear I saw 
something."`;
   waitForClick; clearText; marker; sound(`S3A208`); appendText; 
   Takeshi`"Saw something? Like what?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Uhh...well, I didn't really see it..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I just have a bad feeling...about the second 
floor...somewhere."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A209`); appendText; 
   Takeshi`"What the heck are you talking about?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Um, I think we should check that floor one 
more time..."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Saying that Takeshi slapped me on the shoulder.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Suddenly I came back to myself.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A210`); appendText; 
   Takeshi`"Don't worry about it. If something's up, Sora 
would warn us about it, right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah...you're right...but still..."`;
   waitForClick; clearText; marker; sound(`S3A211`); appendText; 
   Takeshi`"Looks like I'm not the only one who's tired."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I wondered if that was really all it was.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tried to remember what I had seen while I 
was walking.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But it was like waking up after a dream and 
having the dream slip away...I couldn't 
remember it.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `BG17A1`, transition: 26 });
fgload({ id: 4, name: `TU01ADS`, x: 320, useAnim: false });
playBGM({ num: 1, volume: 100 });
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`When we returned to the Conference Room 
Tsugumi was there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And - to our surprise - she was eating.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh!"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S3A212`); appendText; 
   Sara`"Oh my!"`;
   waitForClick; clearText; marker; sound(`S3A213`); appendText; 
   Takeshi`"Ahhhh!!!!"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `TU07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The reason we were all so surprised...`;
   waitForClick; clearText; marker; appendText; 
   Narr`was because...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi was eating a...hotdog.`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Sara`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; 
});
removeFG({ id: 4, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU07ADM`, name2: `KB05ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A214`); appendText; 
   Tsugumi`"What?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S3A215`); appendText; 
   Takeshi`"You...you...you..."`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB04ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A216`); appendText; 
   Takeshi`"You thief!"`;
   waitForClick; clearText; marker; sound(`S3A217`); appendText; 
   Tsugumi`"What're you so mad about?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi was indifferent.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`That just served to fuel Takeshi's fury.`;
   waitForClick; clearText; marker; sound(`S3A218`); appendText; 
   Takeshi`"I thought everyone was sick of chicken 
sandwiches...and here I was going to 
make...and you...you...!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Just...calm down."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tried to calm him down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But Tsugumi just continued to munch on her 
hotdog without a care.`;
   waitForClick; clearText; marker; sound(`S3A219`); appendText; 
   Sara`"I think that's pretty selfish of you to keep 
them all to yourself."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A220`); appendText; 
   Takeshi`"You selfish pig!"`;
   waitForClick; clearText; marker; sound(`S3A221`); appendText; 
   Takeshi`"I hope you get fat like a whale and drown in 
the Mariana Trench, you hog!" `;
   waitForClick; clearText; marker; sound(`S3A222`); appendText; 
   Tsugumi`"All to myself?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi polished off the last bite and turned 
to face Takeshi as she wiped her hands.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A223`); appendText; 
   Tsugumi`"I'm not sure what you're talking about. This 
is the only one I ate."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S3A224`); appendText; 
   Takeshi`"What? When I looked there was enough for 
everyone."`;
   waitForClick; clearText; marker; sound(`S3A225`); appendText; 
   Takeshi`"And now they're all gone. In that soon-to-be 
fat stomach of yours!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A226`); appendText; 
   Tsugumi`"Well...I didn't really count how many there 
were."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S3A227`); appendText; 
   Tsugumi`"Maybe the rats got them."`;
   waitForClick; clearText; marker; sound(`S3A228`); appendText; 
   Takeshi`"You pathetic liar! The only rat here is you!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi's fury only grew while Tsugumi stayed 
calm. `;
   waitForClick; clearText; marker; appendText; 
   Narr`She brushed away the hair from her forehead 
and stood up quietly.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A229`); appendText; 
   Tsugumi`"I'll ask you one more time. Why are you so 
mad?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S3A230`); appendText; 
   Takeshi`"I told you! It's because you ate everyone's 
food."`;
   waitForClick; clearText; marker; sound(`S3A231`); appendText; 
   Tsugumi`"And I told you - this was all I ate."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU18ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A232`); appendText; 
   Tsugumi`"And besides..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi glared at Takeshi.`;
   waitForClick; clearText; marker; sound(`S3A233`); appendText; 
   Tsugumi`"Are you sure that is the real reason that you 
are angry?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A234`); appendText; 
   Takeshi`"What? What are you talking about?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A235`); appendText; 
   Tsugumi`"You sure it wasn't just because it threw off 
your schedule?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Schedule...?`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A236`); appendText; 
   Takeshi`"We-well yeah! Because the hotdogs that I 
wanted everyone to eat are gone now!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi stared unflinchingly at Takeshi.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The two glared at each other.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara and I were in no position to step in 
between the two. All we could do was watch to 
see what happened.`;
   waitForClick; clearText; 
});
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It was then that - `;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE06_03`, a1: 0, volume: 100 });
shakeScreenHard();
multifgload2({ id1: 1, id2: 2, name1: `TU06ADM`, name2: `KB06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Suddenly, a low metallic sound reverberated 
throughout the installation.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a dull, muffled sound.`;
   waitForClick; clearText; 
});
playBGM({ num: 16, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`S3A237`); appendText; 
   Takeshi`"Wh-what was that!?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A238`); appendText; 
   Tsugumi`"This whole place just shook...a little."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The two turned their attention to the new 
situation, forgetting their fight.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A239`); appendText; 
   Takeshi`"Hey, Kid, what was that?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Uh, I don't know..."`;
   waitForClick; clearText; marker; sound(`S3A240`); appendText; 
   Takeshi`"Hey, this doesn't have anything to do 
with that 'bad feeling' you had earlier, 
does it?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I shook my head.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I don't know. Maybe we should ask Sora..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A064`); appendText; 
   Sora`"Did you call for me?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora appeared into the air out of nowhere and 
descended in front of us.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S3A241`); appendText; 
   Sara`"Oh, Sora!"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S3A242`); appendText; 
   Takeshi`"Hey, Sora! Where were you?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A066`); appendText; 
   Sora`"I'm terribly sorry. I overslept."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora looked embarrassed.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S3A243`); appendText; 
   Takeshi`"Overslept? But you're..."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S3A244`); appendText; 
   Takeshi`"...Nah, we'll save that for later."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Hey, did something just happen? 
There was an awful noise just now."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A068`); appendText; 
   Sora`"One of the shafts that supports this floor 
has started to warp."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"We didn't see any signs of it yesterday..."`;
   waitForClick; clearText; marker; sound(`T3A070`); appendText; 
   Sora`"Yes, well, it wasn't in my calculations. 
It appears as if the ocean currents may 
have influenced this outcome."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S3A245`); appendText; 
   Takeshi`"How dangerous are we talking about here?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A071`); appendText; 
   Sora`"Well it should be within the margin of error, 
but...no, wait a second."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A072`); appendText; 
   Sora`"There is an anomaly in one the of 
pressure-regulating pipelines, at Zweite 
stock's warehouse."`;
   waitForClick; clearText; marker; sound(`S3A246`); appendText; 
   Takeshi`"What are pressure-regulating pipes?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3A073`); appendText; 
   Sora`"These pipelines are responsible for adjusting 
the pressure inside the multi-layered 
bulkheads comprising LeMU."`;
   waitForClick; clearText; marker; sound(`T3A074`); appendText; 
   Sora`"If any of them should rupture, for whatever 
reason, I am incapable of repairing them."`;
   waitForClick; clearText; marker; sound(`T3A075`); appendText; 
   Sora`"The anomaly is only slight, so you shouldn't 
have to hurry, but...I think it is best if 
someone goes to check on it. Would you please 
go for me?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU05ADM`, name2: `KB08ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A247`); appendText; 
   Takeshi`"Sure, leave it to me."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi nodded right away.`;
   waitForClick; clearText; marker; sound(`S3A248`); appendText; 
   Tsugumi`"...I guess that's that then."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"What?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't quite make out what Tsugumi had 
said. Then...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A249`); appendText; 
   Tsugumi`"I'll go, too."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She unexpectedly volunteered for the task.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A250`); appendText; 
   Takeshi`"Tsugumi..."`;
   waitForClick; clearText; marker; sound(`S3A251`); appendText; 
   Tsugumi`"What? You got a problem with me tagging 
along?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A252`); appendText; 
   Takeshi`"No...that's not it...it's just..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A253`); appendText; 
   Tsugumi`"Don't get me wrong. We've got a situation on 
our hands, so you and I will call a truce."`;
   waitForClick; clearText; marker; sound(`S3A254`); appendText; 
   Tsugumi`"Well, if we're going to fix something, 
we'll need tools, right? I know my 
way around a workshop."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A255`); appendText; 
   Takeshi`"Alright.... Let's go."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S3A256`); appendText; 
   Sara`"I'll help, too."`;
   waitForClick; clearText; marker; sound(`S3A257`); appendText; 
   Takeshi`"Okay, you can come too Sara."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A258`); appendText; 
   Takeshi`"So what happened with You anyway? She's not 
back yet?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I wonder if she didn't notice the shaking 
just now."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `SO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A259`); appendText; 
   Sora`"There's no way she could have missed that..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Do you know where she is?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A260`); appendText; 
   Sora`"I'm sorry. Unfortunately, right now some 
sensors are out of order. I can't scan the 
whole complex."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(I wonder what happened to You.)`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A261`); appendText; 
   Sara`"Hey, Kid. Will you go look for Nakkyu?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Huh? Me?"`;
   waitForClick; clearText; marker; sound(`S3A262`); appendText; 
   Sara`"Yeah. I'm a little worried about her."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was also worried about Sara and everyone 
going off suddenly like that.`;
   waitForClick; clearText; marker; appendText; 
   Narr`An extra set of hands couldn't hurt...`;
   waitForClick; clearText; 
});
if (l_chose_to_wait_there_in_2nd_day == 0) goto(lbl_0000139a);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I had to decide what to do.`;
   waitForClick; 
});
choice(
   `Look for You`
   `Repairs with Sara`
);
switch (l_choice) {
   case 0: goto(lbl_0000139a);
   case 1: goto(lbl_000012e9);
}
let lbl_000012e9;
l_repaired_with_sara = 1;
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Takeshi, I'll come along and help with the 
repairs."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A263`); appendText; 
   Sara`"What about Nakkyu?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You's tougher than the rest of us. She'll be 
fine."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Besides, if something was wrong, she would 
use LeMMIH to contact us."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A264`); appendText; 
   Sara`"But if something happened to her during that 
shaking..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SA03ADM`, name2: `SO10ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A265`); appendText; 
   Sora`"You needn't worry about that."`;
   waitForClick; clearText; marker; sound(`S3A266`); appendText; 
   Sora`"Currently, there appears to be no direct 
damage inside LeMU."`;
   waitForClick; clearText; marker; sound(`S3A267`); appendText; 
   Sora`"As for You's whereabouts, the sensors should 
be online in a moment and then I will be able 
to detect her."`;
   waitForClick; clearText; marker; sound(`S3A268`); appendText; 
   Takeshi`"Alright. We'll forget about You for now. 
Let's go check the warehouse and then we'll 
worry about everything else."`;
   waitForClick; clearText; marker; sound(`S3A269`); appendText; 
   Sara`"Alright..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"She's fine. I promise."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Promise? How could I promise that?`;
   waitForClick; clearText; marker; appendText; 
   Narr`But somehow I was sure of it.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A270`); appendText; 
   Sara`"Okay."`;
   waitForClick; clearText; marker; appendText; 
   Narr`With that one word, the tension seemed to 
leave Sara.`;
   waitForClick; clearText; marker; sound(`S3A271`); appendText; 
   Tsugumi`"What are you doing? You're gonna get left 
behind."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The next thing I noticed, we were the only 
people left in the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara and I chased after everyone.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
l_choice = 0;
jump(`S_3C`);
let lbl_0000139a;
l_looked_for_you = 1;
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Takeshi, I'll go have a look around for You."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `KB01ADM`, name2: `SO10ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A272`); appendText; 
   Takeshi`"Alright. It's in your hands then, Kid."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S3A273`); appendText; 
   Sora`"If something should happen, use LeMMIH to 
contact me."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Alright. See you later!!"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I ran through the corridor kicking up spray as 
I went.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
l_choice = 0;
jump(`S_3B`);
