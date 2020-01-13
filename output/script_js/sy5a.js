setDialogBoxColor(BLUE);
varop(`(28 0a a4) b0 := (00) 5`);
varop(`(28 0a a4) b1 := (00) 5`);
varop(`(28 0a a4) b2 := (00) 5`);
bgload({ name: `BG04B1`, transition: 20 });
setSceneTitle({ index: 77 });
clock(`0:3`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The Lemurian Ruins.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just like I had the day before, I visited 
the ruins.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I figured I would find You there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It felt like I had traveled through time and 
opened the door to an ancient time.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Speaking of time travel...`;
   waitForClick; clearText; marker; appendText; 
   Narr`You had scoffed at it, but I still hadn't 
given up on the theory.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was the only one that made sense to me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no other way to explain things.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 5, volume: 100 });
bgload({ name: `BG40B1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I entered the ruins.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I continued through the maze-like passages.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Trying not to get lost, I wracked my memory...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Fortunately, I remembered the path I'd taken 
the day before.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was still fresh in my mind.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was like I had been through the area 
dozens of times.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Finally...`;
   waitForClick; clearText; marker; sound(`Y5A000`); appendText; 
   //You
   You`"Hey there."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU03C`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I found You.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was in the same spot as the day before - 
the Sun Temple.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And she was sitting on the same obelisk, 
sitting hugging her knees.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I sat down next to her.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Do you feel better now?"`;
   waitForClick; clearText; marker; sound(`Y5A001`); appendText; 
   //You
   You`"Yeah. Thanks to you."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"That's good to hear."`;
   waitForClick; clearText; marker; sound(`Y5A002`); appendText; 
   //You
   You`"You did a good job of finding this place 
again."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"It was the only place I could think of."`;
   waitForClick; clearText; marker; sound(`Y5A003`); appendText; 
   //You
   You`"That's not what I mean...I mean you 
remembered the route here."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"What are you talking about? You called me 
here, right?"`;
   waitForClick; clearText; marker; sound(`Y5A004`); appendText; 
   //You
   You`"That's right."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Don't tell me, you thought that I wouldn't 
find my way back!"`;
   waitForClick; clearText; marker; sound(`Y5A005`); appendText; 
   //You
   You`"Well, yeah."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`Y5A006`); appendText; 
   //You
   You`"I'm kidding. It's a joke!"`;
   waitForClick; clearText; marker; sound(`Y5A007`); appendText; 
   //You
   You`"To tell you the truth, I just wanted to test 
you."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Test? Me?"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU03A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`Y5A008`); appendText; 
   //You
   You`"Yup."`;
   waitForClick; clearText; marker; sound(`Y5A009`); appendText; 
   //You
   You`"I wanted to see if you could navigate the 
labyrinth, slay the evil dragon and rescue the 
princess held captive here."`;
   waitForClick; clearText; marker; sound(`Y5A010`); appendText; 
   //You
   You`"To see whether the hero would show up or not."`;
   waitForClick; clearText; marker; sound(`Y5A011`); appendText; 
   //You
   You`"I wanted to test the knight in shining armor."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"You...you heard that from Sara, right?"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU03C`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`Y5A012`); appendText; 
   //You
   You`"Right."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"And you are supposed to be the princess?"`;
   waitForClick; clearText; marker; sound(`Y5A013`); appendText; 
   //You
   You`"Well, I don't want to sound to full of 
myself, but..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I'm going back."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I stood up.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU03B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`Y5A014`); appendText; 
   //You
   You`"Oh! You're mean! What? I'm not good enough 
for you?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"That's not it at all. I just can't handle 
this kind of game right now."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I'm completely worn out. And I've got this 
broken arm."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU03A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`Y5A015`); appendText; 
   //You
   You`"Oh, your arm..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You belatedly noticed my arm...`;
   waitForClick; clearText; 
});
bgload({ name: `BG40B1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Standing, I went to return on the road that 
I had used in coming.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But You came after me.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A016`); appendText; 
   //You
   You`"Hey, I said wait just a second!"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Leave me alone! If all you want to do is talk 
about your stupid fantasies, I'd rather get 
some sleep."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU03BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A017`); appendText; 
   //You
   You`"You got hurt... trying to help me..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A018`); appendText; 
   //You
   You`"It's a battle scar you can be proud of."`;
   waitForClick; clearText; marker; appendText; 
   Narr`(She just won't give up...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`As I was about to complain...`;
   waitForClick; clearText; marker; appendText; 
   Narr`You gently laid her hand on my hard cast.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A019`); appendText; 
   //You
   You`"Does it still hurt?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"...Only a little."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I lied.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Thanks to the medicine it didn't really hurt 
at all.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A020`); appendText; 
   //You
   You`"You want me to cast a spell on it for you?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"A spell?"`;
   waitForClick; clearText; marker; sound(`Y5A021`); appendText; 
   //You
   You`"Yup. I learned it straight from my mom. It's 
guaranteed to work."`;
   waitForClick; clearText; marker; sound(`Y5A022`); appendText; 
   //You
   You`"It's my way of saying I'm sorry."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You put both her hands on my cast, gently, as 
if enveloping it and gently started rubbing it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I just stood there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could feel the heat from her palms through 
the cast.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As she gently stroked my arm, You started 
whispering.`;
   waitForClick; clearText; marker; sound(`Y5A023`); appendText; 
   //You
   You`"Chichin puipui, pain, pain go fly away! To a 
galaxy far, far away..."`;
   waitForClick; clearText; 
});
hideTextbox();
delay({ interval: 60 });
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"...Chichin puipui?"`;
   waitForClick; clearText; marker; sound(`Y5A024`); appendText; 
   //You
   You`"How is it? The pain stopped, right?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"...A galaxy far, far away?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A025`); appendText; 
   //You
   You`"W-what? You gotta problem with the charm?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Ha...hee, hee...nope...nope...heeeee..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`All of the sudden, I had a wild urge to laugh.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was something I never thought I'd hear come 
out of You's mouth.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And it tickled incredibly.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Yeah...it looks like you completely fixed it."`;
   waitForClick; clearText; marker; appendText; 
   Narr`My irritation vanished.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A026`); appendText; 
   //You
   You`"Oh, good. I hoped I would!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`We decided to go back to the hall.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU11BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A027`); appendText; 
   //You
   You`"I'm glad that you came."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Huh?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A028`); appendText; 
   //You
   You`"That you made your way through the labyrinth 
to find me."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`Y5A029`); appendText; 
   //You
   You`"Now all you have to do is rescue the 
princess. Right, white knight?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"You just don't quit..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Alright then, I guess I am off to dispose of 
some evil dragon."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Finally I understand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The evil dragon that was holding You...`;
   waitForClick; clearText; marker; appendText; 
   Narr`...It was You's past.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And she needed to be saved.`;
   waitForClick; clearText; 
});
showDimOverlay();
showTextbox();
text(() => {
   marker; sound(`Y4A483`); appendText; 
   //Sara
   Sara`"Listen...no matter how much a girl pretends 
to be strong, she is always waiting for 
the guy."`;
   waitForClick; clearText; 
});
varop(`(28 0a a0) ac := (00) 0`);
closeDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I thought maybe even for me.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A030`); appendText; 
   //You
   You`"Alright, now let's restart our detective 
work!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Suddenly, I noticed a tart, refreshing aroma 
tickling my nose mixed, cutting through the 
mildew smell of the ruins.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was the scent of not yet ripened fruit.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was familiar...it smelled like the sun 
in spring.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeFG({ id: 1, useAnim: false });
bgload({ name: `EV_YU03A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We decided to reorganize the information 
we had.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We thought about the data we had on 
her parents.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora's files had You's mother, Yukie Tanaka as 
dying 15 years ago.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The company LAN had a chat log that had You's 
father, Yoichi Tanaka, as dying 34 years ago.`;
   waitForClick; clearText; marker; appendText; 
   Narr`However, You's mom had told her that her 
father had gone missing 17 years before.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There were pictures and movies, but they 
could not be completely trusted as reliable. 
You had even said so herself.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And what was most suspicious...`;
   waitForClick; clearText; marker; appendText; 
   Narr`...was the lady who You had always thought 
of as her mom.`;
   waitForClick; clearText; marker; appendText; 
   Narr`From what we could gather, the death of her 
parents Yoichi and Yukie were facts.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That meant that her mother - or the lady who 
called herself that - could have been lying 
all along.`;
   waitForClick; clearText; marker; appendText; 
   Narr`...Based on all of the information, we 
narrowed it down to the two most likely 
possibilities.`;
   waitForClick; clearText; marker; appendText; 
   Narr`'4.Yoichi had died 34 years before and Yukie 
15 years before.'`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Hey, I bet this is what happened."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Assuming that your mom and dad did die is a 
fact, then the person working at LeMU..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I mean the person that you thought was your 
mom up to now, isn't your mom, but..."`;
   waitForClick; clearText; marker; sound(`Y5A031`); appendText; 
   //You
   You`"A foster parent?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Yeah."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Then your real dad could have died 34 years 
ago and your mom 15 years ago."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"So somebody that took pity on the orphaned 
daughter, took you in and raised you..."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU03B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`Y5A032`); appendText; 
   //You
   You`"But...that's impossible."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Why?"`;
   waitForClick; clearText; marker; sound(`Y5A033`); appendText; 
   //You
   You`"Because Yoichi Tanaka isn't my real father."`;
   waitForClick; clearText; marker; sound(`Y5A034`); appendText; 
   //You
   You`"I mean it has to be true."`;
   waitForClick; clearText; marker; sound(`Y5A035`); appendText; 
   //You
   You`"He died 34 years ago, right?"`;
   waitForClick; clearText; marker; sound(`Y5A036`); appendText; 
   //You
   You`"And I was born 18 years ago."`;
   waitForClick; clearText; marker; sound(`Y5A037`); appendText; 
   //You
   You`"To be precise, I was born on September 22, 19 
years ago."`;
   waitForClick; clearText; marker; sound(`Y5A038`); appendText; 
   //You
   You`"In either case, my father would have had to 
have been alive until December of 
20 years ago."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I figured that was an area I didn't really 
know much about, so I held my tongue...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But she was right. It did sound fishy.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The question was how to fill in the 
missing years...`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"No way..."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU03A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`Y5A039`); appendText; 
   //You
   You`"What?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Uh...nothing."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU03B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`Y5A040`); appendText; 
   //You
   You`"What? Tell me? You can't start to say 
something and stop like that."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I don't think this could ever happen, but..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"What if you were actually 33-years-old..."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU03C`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`Y5A041`); appendText; 
   //You
   You`"Kyaaa, ha, ha! Me? 33?"`;
   waitForClick; clearText; marker; sound(`Y5A042`); appendText; 
   //You
   You`"You think with my skin I look like I could be 
in my 30s?"`;
   waitForClick; 
});
choice(
   `You look it`
   `You don't look it`
);
switch (choice) {
   case 0: goto(lbl_000002d7);
   case 1: goto(lbl_000002ef);
}
let lbl_000002d7;
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"You look it."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU03B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`Y5A043`); appendText; 
   //You
   You`"Whaaaaat?"`;
   waitForClick; clearText; 
});
let lbl_000002ef;
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"You don't look it."`;
   waitForClick; clearText; 
});
goto(lbl_00000317).if(var_b3 != 0);
bgload({ name: `EV_YU03C`, transition: 20 });
let lbl_00000317;
showTextbox();
text(() => {
   marker; sound(`Y5A044`); appendText; 
   //You
   You`"Right?"`;
   waitForClick; clearText; marker; sound(`Y5A045`); appendText; 
   //You
   You`"Now, jokes aside..."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU03A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`Y5A046`); appendText; 
   //You
   You`"If I were 33-years-old, that would mean 
there was 15 year gap in my memory."`;
   waitForClick; clearText; marker; sound(`Y5A047`); appendText; 
   //You
   You`"Where in the world could those 15 years 
have gone?"`;
   waitForClick; clearText; marker; sound(`Y5A048`); appendText; 
   //You
   You`"I've never had amnesia like you, don't 
remember being abducted by aliens and haven't 
had any Rip Van Winkle like experiences 
either."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Rip Van what...?)`;
   waitForClick; clearText; marker; sound(`Y5A049`); appendText; 
   //You
   You`"That would mean when I was 12, I was 
really 27?"`;
   waitForClick; clearText; marker; sound(`Y5A050`); appendText; 
   //You
   You`"That couldn't be, right?"`;
   waitForClick; clearText; marker; sound(`Y5A051`); appendText; 
   //You
   You`"Or that when I was five, I was actually 20. 
That's even more impossible."`;
   waitForClick; clearText; marker; sound(`Y5A052`); appendText; 
   //You
   You`"In the 18 years and seven months of my life 
I've never once felt a gap of 15 years."`;
   waitForClick; clearText; marker; appendText; 
   Narr`(A 15 year gap...?)`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Listen. Sorry to stop you, but let's get 
back on topic..."`;
   waitForClick; clearText; marker; sound(`Y5A053`); appendText; 
   //You
   You`"?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"You were just talking about Rip Van Winkle, 
right?"`;
   waitForClick; clearText; marker; sound(`Y5A054`); appendText; 
   //You
   You`"And?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"He falls asleep and..."`;
   waitForClick; clearText; marker; sound(`Y5A055`); appendText; 
   //You
   You`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Rip Van Winkle...he falls asleep...and when 
he returns home...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(When he returns home...)`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I got it! I got it!"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"This is probably what happened."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU03B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`Y5A056`); appendText; 
   //You
   You`"You probably traveled through time!"`;
   waitForClick; clearText; marker; sound(`Y5A057`); appendText; 
   //You
   You`"...Would you stop talking about these stupid 
theories of yours?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"But it would explain everything!"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Somewhere along the line, maybe when you were 
small before you can even remember, I'll bet 
you jumped 15 years into the future."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"You were probably really born 33 years ago..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"That would mean that if Yoichi died 34 years 
ago it all makes sense."`;
   waitForClick; clearText; marker; sound(`Y5A058`); appendText; 
   //You
   You`"Geez...how many times are you going to have 
to say that before you are satisfied?"`;
   waitForClick; clearText; marker; sound(`Y5A059`); appendText; 
   //You
   You`"Time travel is a physical impossibility."`;
   waitForClick; clearText; marker; sound(`Y5A060`); appendText; 
   //You
   You`"Just like...."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"...Water flows downhill..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"BUT, if you use a siphon, you can move water 
up hill!"`;
   waitForClick; clearText; marker; sound(`Y5A061`); appendText; 
   //You
   You`"That's not what I mean."`;
   waitForClick; clearText; marker; sound(`Y5A062`); appendText; 
   //You
   You`"It's just an example, an analogy..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"But...but..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"But you're not the only one that experienced 
time travel!"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I...I did too..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"But my time travel was different..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"And I think it is probably the reason that 
I get premonitions about things."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I was trapped here in LeMU before."`;
   waitForClick; clearText; marker; sound(`Y5A063`); appendText; 
   //You
   You`"How can you be so sure about it?"`;
   waitForClick; clearText; marker; sound(`Y5A064`); appendText; 
   //You
   You`"How can you be so absolutely confident about 
it?"`;
   waitForClick; clearText; marker; sound(`Y5A065`); appendText; 
   //You
   You`"Even if...IF..."`;
   waitForClick; clearText; marker; sound(`Y5A066`); appendText; 
   //You
   You`"Just suppose that you did travel through 
time..."`;
   waitForClick; clearText; marker; sound(`Y5A067`); appendText; 
   //You
   You`"Where is the other Kid, the other you?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"The other me?"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: WHITE });
showDimOverlay();
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`



`;
   appendText; delay(0); 
   Narr`              'Life readings: 7'`;
   waitForClick; nextPage(04); 
});
hideTextbox();
varop(`(28 0a a0) ac := (00) 0`);
closeDimOverlay();
bgload({ name: `EV_YU03B`, transition: 10 });
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I remembered on the night of May 1, when the 
numbers for the life scan kept changing. `;
   waitForClick; clearText; marker; sound(`Y5A068`); appendText; 
   //You
   You`"Yes, the other you."`;
   waitForClick; clearText; marker; sound(`Y5A069`); appendText; 
   //You
   You`"You're saying that you have been repeating 
the several days of being trapped here, right?"`;
   waitForClick; clearText; marker; sound(`Y5A070`); appendText; 
   //You
   You`"If so, then the past you should be here as 
well."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"That's...uh...I..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I know! Only my memory is going back 
through time!"`;
   waitForClick; clearText; marker; sound(`Y5A071`); appendText; 
   //You
   You`"Even though you forgot everything?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"That's exactly why I've lost my memory!"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Normally anything like a memory going back 
through time would defy common sense."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"But this time common sense is being defied..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"My brain couldn't deal with the situation and 
started to panic. So it tried to logically 
explain or deal with the situation."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"And so it erased all of my memories."`;
   waitForClick; clearText; marker; appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`Y5A072`); appendText; 
   //You
   You`"Uh...I don't mean to take the air out of you 
after your enthusiastic speech, but..."`;
   waitForClick; clearText; marker; sound(`Y5A073`); appendText; 
   //You
   You`"We don't call that logical."`;
   waitForClick; clearText; marker; sound(`Y5A074`); appendText; 
   //You
   You`"I'm pretty sure the word is pathological. And 
sometimes they add the word delusional for 
good measure."`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 01 });
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`....`;
   waitForClick; clearText; marker; appendText; 
   Narr`....`;
   waitForClick; clearText; marker; appendText; 
   Narr`....`;
   waitForClick; clearText; marker; appendText; 
   Narr`So the day ended without us finding any 
answers.`;
   waitForClick; clearText; 
});
hideTextbox();
setSceneTitle({ index: 78 });
delay({ interval: 60 });
chapterCutin({ name: `00000000` });
playBGM({ num: 1, volume: 100 });
bgload({ name: `IMG01A`, transition: 20 });
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The next morning -`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Everybody slept in.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`It looked like everyone was pretty beat.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`When You and I saw each other we exchanged 
good mornings as if everything were normal.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`It seemed like she wanted to act as if things 
were the same as always in front of everybody 
else.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`So I did my best to follow suit.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
bgload({ name: `BG21B1`, transition: 20 });
hideTextbox();
AVL_Mode();
clock(`8:37`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sleeping in made breakfast later than usual.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora had put in a request and we were going to 
have another picnic.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She really seemed to enjoy them.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We spread out the same Myumyun blanket near 
the rest area.`;
   waitForClick; clearText; 
});
bgload({ name: `BG07B1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I went to go check on the trap that we had set 
the night before, while everyone was 
preparing, just in case we'd caught something.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But just as I got to where we'd set it, I saw 
Takeshi breaking down the trap.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"Huh? You're cleaning it up?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi nodded silently.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Meaning...that...?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi's shoulders slumped and he let out 
a big sigh.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He looked so pathetic...I couldn't say 
anything else.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
removeFG({ id: 1, useAnim: false });
bgload({ name: `BG21B1`, transition: 26 });
playBGM({ num: 18, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`When we had finally got everything ready, 
Tsugumi appeared out of nowhere.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She again plopped herself down on the sheet 
and started munching away.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know if Takeshi had matured over 
night, but he held his tongue, though it was 
clear he was in a sulky mood.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara and Tsugumi didn't look at each other. It 
seemed like they were ignoring each other.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Apparently they still weren't getting along.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But everybody tried to make the best of it, 
eating, chatting and having fun.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 4, name1: `SA01ADM`, name2: `YU01BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A075`); appendText; 
   //Sara
   Sara`"Rock, paper, scissors!"`;
   waitForClick; clearText; marker; sound(`Y5A076`); appendText; 
   //Sara
   Sara`"Ready go!"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I lost again!"`;
   waitForClick; clearText; marker; sound(`Y5A077`); appendText; 
   //You
   You`"Kid, you're terrible at this. What is that? 
Sixteen losses in a row?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Weird..."`;
   waitForClick; clearText; marker; sound(`Y5A078`); appendText; 
   //You
   You`"You're too nice. You have to just throw out 
what you feel - rock, paper or scissors."`;
   waitForClick; clearText; marker; sound(`Y5A079`); appendText; 
   //Sara
   Sara`"He's the gullible type."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I am not. I'm trying to win."`;
   waitForClick; clearText; marker; sound(`Y5A080`); appendText; 
   //You
   You`"Rock, paper, scissors. Ready go!"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Dang it!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I just kept losing.`;
   waitForClick; clearText; marker; sound(`Y5A081`); appendText; 
   //You
   You`"Could be, that with your amnesia, your 
ability to make decisions isn't so good 
right now."`;
   waitForClick; clearText; marker; sound(`Y5A082`); appendText; 
   //You
   You`"Don't get too caught up with the trivial 
things that you can't control."`;
   waitForClick; clearText; marker; sound(`Y5A083`); appendText; 
   //You
   You`"You need to be strong. Make up your own mind. 
Or you'll just end up following everybody else."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I know..."`;
   waitForClick; clearText; marker; sound(`Y5A084`); appendText; 
   //You
   You`"That being as it is..."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 4, name1: `SA02ADM`, name2: `YU02BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A085`); appendText; 
   //Sara
   Sara`"Time for the LOSER'S PENALTY!"`;
   waitForClick; clearText; marker; sound(`Y5A086`); appendText; 
   //You
   You`"Hand over your sandwich."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Silently, I held out my sandwich.`;
   waitForClick; clearText; marker; sound(`Y5A087`); appendText; 
   //Sara
   Sara`"All righty!"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 4, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She squeezed a ton of mustard on to 
my sandwich.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The penalty was mustard. And my sandwich was 
already drenched in the stuff.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My mouth felt like it was on fire before 
I even took a bite.`;
   waitForClick; clearText; marker; appendText; 
   Narr`...Maybe thanks to that exchange, I was able 
to get through the whole thing without 
thinking about it too much.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Suddenly, someone cut across my field of 
vision.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was Tsugumi.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi was walking toward Takeshi. 
She extended her hand.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `TU15ADM`, name2: `KB14ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A088`); appendText; 
   //Takeshi
   Takeshi`"Huh? What's with the hand?"`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"..."`;
   waitForClick; clearText; marker; sound(`Y5A089`); appendText; 
   //Takeshi
   Takeshi`"You're like a dog. Shake girl."`;
   waitForClick; clearText; marker; sound(`Y5A090`); appendText; 
   //Takeshi
   Takeshi`"And you'll probably say 'don't make fun 
of me!'"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU18ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A091`); appendText; 
   //Tsugumi
   Tsugumi`"You're really dumb, you know that?"`;
   waitForClick; clearText; marker; sound(`Y5A092`); appendText; 
   //Sora
   Sora`"Are you trying to say that you want another 
helping?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi nodded at Sora's extra explanation.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She had already wolfed down her first one.`;
   waitForClick; clearText; marker; sound(`Y5A093`); appendText; 
   //Takeshi
   Takeshi`"Hey...you've gotta lot of nerve...you only 
show your face at meal time and now you're 
demanding seconds..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A094`); appendText; 
   //Takeshi
   Takeshi`"Well, I suppose..."`;
   waitForClick; clearText; marker; sound(`Y5A095`); appendText; 
   //Tsugumi
   Tsugumi`"So do you have more or not?"`;
   waitForClick; clearText; marker; sound(`Y5A096`); appendText; 
   //Takeshi
   Takeshi`"I do. I thought you might want more so 
I made a SPECIAL one for you."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Special?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had a bad feeling about the whole thing.`;
   waitForClick; clearText; marker; sound(`Y5A097`); appendText; 
   //Takeshi
   Takeshi`"Eat this. And no leftovers."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi took the sandwich without saying 
anything.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi stared at Tsugumi as she took 
the wrap off of the sandwich.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU18ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A098`); appendText; 
   //Tsugumi
   Tsugumi`"...What?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A099`); appendText; 
   //Takeshi
   Takeshi`"Nothing. It's just that you're so beautiful. 
I can't take my eyes off of you even when 
you're just removing a sandwich wrapper..."`;
   waitForClick; clearText; marker; sound(`Y5A100`); appendText; 
   //Tsugumi
   Tsugumi`"Your stupidity is terminal."`;
   waitForClick; clearText; marker; sound(`Y5A101`); appendText; 
   //Tsugumi
   Tsugumi`"Maybe if you died 50 times it would help."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought Takeshi would get angry.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But he was just grinning as he watched Tsugumi 
start in on her sandwich.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Something was definitely not right here. 
I sucked in my breath and watched.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi bit into the sandwich.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Munch.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Chomp. Chew.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A102`); appendText; 
   //Tsugumi
   Tsugumi`"Hmmm?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A103`); appendText; 
   //Takeshi
   Takeshi`"Hee, heee..."`;
   waitForClick; clearText; marker; sound(`Y5A104`); appendText; 
   //Takeshi
   Takeshi`"Fwaaa, ha, ha, ha, ha, ha..."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"..."`;
   waitForClick; clearText; marker; sound(`Y5A105`); appendText; 
   //Takeshi
   Takeshi`"It's got quite a flavor, huh? That 
sandwich...ha, ha,ha..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi laughed so hard he cried.`;
   waitForClick; clearText; marker; sound(`Y5A106`); appendText; 
   //Takeshi
   Takeshi`"It's packed with mustard, Tabasco, pepper, 
sage, nutmeg, cinnamon, mint and a dose of 
curry powder..."`;
   waitForClick; clearText; marker; sound(`Y5A107`); appendText; 
   //Takeshi
   Takeshi`"For good measure I added a dose of 
mayonnaise, ketchup, sugar, salt, soy sauce, 
vinegar and vanilla..."`;
   waitForClick; clearText; marker; sound(`Y5A108`); appendText; 
   //Takeshi
   Takeshi`"And...what else? Oh, I forget..."`;
   waitForClick; clearText; marker; sound(`Y5A109`); appendText; 
   //Takeshi
   Takeshi`"Anyway, I threw in every ingredient and spice 
that I could find. It's my secret 34 
ingredient sauce."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"..."`;
   waitForClick; clearText; marker; sound(`Y5A110`); appendText; 
   //You
   You`"H...hey! That's just too cruel!"`;
   waitForClick; clearText; marker; sound(`Y5A111`); appendText; 
   //Sara
   Sara`"Yeah...!"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"That's going too far, Takeshi!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB04ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A112`); appendText; 
   //Takeshi
   Takeshi`"Shut up! I'm the cook here."`;
   waitForClick; clearText; marker; sound(`Y5A113`); appendText; 
   //Sora
   Sora`"Tsugumi...I highly recommend inducing 
vomiting immediately...!"`;
   waitForClick; clearText; marker; sound(`Y5A114`); appendText; 
   //Sora
   Sora`"Get water quickly! N...no...we'll need 
medicine first...!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A115`); appendText; 
   //Takeshi
   Takeshi`"She'll be fine. She'll get the runs, 
but she won't die."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"That's not something you should do to a girl."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I went to grab Takeshi with my left hand.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A116`); appendText; 
   //Tsugumi
   Tsugumi`"Wait. I'm fine."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi mumbled this, stopping us.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A117`); appendText; 
   //Takeshi
   Takeshi`"Huh, well aren't you tough!"`;
   waitForClick; clearText; marker; sound(`Y5A118`); appendText; 
   //Tsugumi
   Tsugumi`"I'm perfectly fine."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A119`); appendText; 
   //Takeshi
   Takeshi`"But it still tastes terrible, right? Right? 
Tell the truth."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A120`); appendText; 
   //Tsugumi
   Tsugumi`"I'm totally fine..."`;
   waitForClick; clearText; 
});
stopBGM();
showTextbox();
text(() => {
   marker; sound(`Y5A121`); appendText; 
   //Tsugumi
   Tsugumi`"It tastes kind of like pizza."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"........"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Sara
   Sara`"..............."`;
   waitForClick; clearText; marker; appendText; 
   //Sora
   Sora`"..............."`;
   waitForClick; clearText; 
});
playBGM({ num: 18, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`What?`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A122`); appendText; 
   //Takeshi
   Takeshi`"What did you just say? What's it taste like?"`;
   waitForClick; clearText; marker; sound(`Y5A123`); appendText; 
   //Tsugumi
   Tsugumi`"Pizza."`;
   waitForClick; clearText; marker; sound(`Y5A124`); appendText; 
   //Takeshi
   Takeshi`"Are you serious?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi nodded.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`Y5A125`); appendText; 
   //Tsugumi
   Tsugumi`"Munch, munch..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A126`); appendText; 
   //Takeshi
   Takeshi`"Hey...let me see that! That can't be!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU02ADM`, x: 128, useAnim: true });
removeFG({ id: 2, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi went to grab the sandwich, but Tsugumi 
was too quick for him. Not only that, Takeshi 
caught his foot and fell to the floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In that instant, Tsugumi polished off the 
sandwich.`;
   waitForClick; clearText; marker; sound(`Y5A127`); appendText; 
   //Tsugumi
   Tsugumi`"Thanks for the sandwich."`;
   waitForClick; clearText; marker; sound(`Y5A128`); appendText; 
   //Tsugumi
   Tsugumi`"You made it specially for me, right?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`".................."`;
   waitForClick; clearText; marker; appendText; 
   Narr`So the event ended with Tsugumi turning the 
tables on Takeshi.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
delay({ interval: 120 });
bgload({ name: `BG21B1`, transition: 26 });
playBGM({ num: 2, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
clock(`9:19`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I ended up cleaning the area up afterward.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I separated the cans and sandwich wrappers 
and put them in garbage bags.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You and Sara helped.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi said he was going to start getting 
ready for lunch and headed to the kiosk.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora said she had to do some maintenance 
on LeMMIH and left for the Control Room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi disappeared to somewhere unknown.`;
   waitForClick; clearText; marker; appendText; 
   Narr`....`;
   waitForClick; clearText; marker; appendText; 
   Narr`But something happened when I was picking up 
garbage.`;
   waitForClick; clearText; 
});
stopBGM();
showTextbox();
text(() => {
   marker; sound(`T5B003`); appendText; 
   //??
   Unk`"Hello there!"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Huh?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 4, name1: `SA06ADM`, name2: `YU06BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A129`); appendText; 
   //You
   You`"What? What's the matter?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Nothing..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Did somebody just call out?"`;
   waitForClick; clearText; marker; sound(`Y5A130`); appendText; 
   //You
   You`"What?"`;
   waitForClick; clearText; marker; sound(`Y5A131`); appendText; 
   //Sara
   Sara`"Nobody said anything."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Really? Must be my imagination..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A132`); appendText; 
   //Sara
   Sara`"I'll bet you're just trying to find a way 
to get out of helping."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I'm not. It's not that at all."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU03BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A133`); appendText; 
   //You
   You`"You hearing your mystery voices again?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Well, I..."`;
   waitForClick; clearText; marker; sound(`Y5A134`); appendText; 
   //You
   You`"Please, don't do that again. Get a hold of 
yourself already."`;
   waitForClick; clearText; marker; sound(`Y5A135`); appendText; 
   //You
   You`"I know you're tired, but..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 4, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We started picking up garbage again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We finally finished with the trash, folded the 
blanket and were done cleaning up.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 4, name1: `SA01ADM`, name2: `YU01BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A136`); appendText; 
   //You
   You`"Now we'll just sweep the area."`;
   waitForClick; clearText; marker; sound(`Y5A137`); appendText; 
   //You
   You`"Mayo. Can you do me a favor and get me a 
broom and dustpan? I think they are at the 
kiosk."`;
   waitForClick; clearText; marker; sound(`Y5A138`); appendText; 
   //Sara
   Sara`"Roger that!"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 4, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara set out for the kiosk.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I was just thinking. This must be a nightmare 
for the people that clean this place."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A139`); appendText; 
   //You
   You`"It would be if 'people' had to do it."`;
   waitForClick; clearText; marker; sound(`Y5A140`); appendText; 
   //You
   You`"But LeMMIH usually uses a cleaning robot that 
automatically cleans the whole complex."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Wow."`;
   waitForClick; clearText; marker; sound(`Y5A141`); appendText; 
   //You
   You`"Well, what with the accident and all, 
I imagine the robot is a rusted pile of 
junk metal at the bottom of the ocean right 
about now."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I'll bet."`;
   waitForClick; clearText; marker; sound(`T5B017`); appendText; 
   //??
   Unk`"Heave ho, heave ho!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`(...What?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I...I was hearing voices again.`;
   waitForClick; clearText; marker; sound(`Y5A142`); appendText; 
   //You
   You`"Thinking about it, I guess that LeMU is just 
one massive pile of scrap metal."`;
   waitForClick; clearText; marker; sound(`Y5A143`); appendText; 
   //You
   You`"I suppose it's just of matter of how it's 
destroyed..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A144`); appendText; 
   //You
   You`"What? What's the matter?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Um..."`;
   waitForClick; clearText; marker; sound(`Y5A145`); appendText; 
   //You
   You`"You're not...not again?"`;
   waitForClick; clearText; 
});
playBGM({ num: 13, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A146`); appendText; 
   //You
   You`"Oh...alright. You've done enough. Just go to 
the infirmary or somewhere and rest."`;
   waitForClick; clearText; marker; sound(`Y5A147`); appendText; 
   //You
   You`"You've got a serious condition of 
something..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was sure I'd heard something...`;
   waitForClick; clearText; marker; appendText; 
   Narr`This time, I was sure it wasn't my imagination.`;
   waitForClick; clearText; marker; sound(`T5B019`); appendText; 
   //??
   Unk`"I'm carving."`;
   waitForClick; clearText; marker; sound(`T5B020`); appendText; 
   //??
   Unk`"Can't you see. I'm carving..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`(See, I really can hear something.)`;
   waitForClick; clearText; marker; sound(`T5B021`); appendText; 
   //??
   Unk`"I'm etching some marks into the stone."`;
   waitForClick; clearText; marker; appendText; 
   Narr`(...Stone statue?)`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I looked around the four stone statues at the 
edge of the open area.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And there....`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO19C`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Atop the pedestal of a stone statue was a girl.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was standing there next to the figure as 
if clinging to the statue.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Oh! It's that girl...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was the girl that I had seen and who had 
then vanished on the first day.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Look, You! Right there!"`;
   waitForClick; clearText; 
});
bgload({ name: `BG21B1`, transition: 20 });
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A148`); appendText; 
   //You
   You`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Look! Over on that statue!"`;
   waitForClick; clearText; marker; sound(`Y5A149`); appendText; 
   //You
   You`"What about the statue?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Look! That stone statue! There's a girl 
there! See?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A150`); appendText; 
   //You
   You`"Huh? I don't see anybody."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Not there! Over there!"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Oh, forget it! I'll go call to her!"`;
   waitForClick; clearText; marker; sound(`Y5A151`); appendText; 
   //You
   You`"Kid!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I sprinted toward the stone statue.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(What could the girl be doing up there?)`;
   waitForClick; clearText; marker; sound(`T5B023`); appendText; 
   //??
   Unk`"Well, it's because..."`;
   waitForClick; clearText; marker; sound(`T5B024`); appendText; 
   //??
   Unk`"I was feeling lonesome."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Lonesome?`;
   waitForClick; clearText; marker; sound(`T5B025`); appendText; 
   //??
   Unk`"And anyway, I was..."`;
   waitForClick; clearText; marker; sound(`T5B026`); appendText; 
   //??
   Unk`"...feeling sad..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sad?`;
   waitForClick; clearText; marker; appendText; 
   Narr`(What is she talking about?)`;
   waitForClick; clearText; marker; sound(`T5B043`); appendText; 
   //??
   Unk`"And next..."`;
   waitForClick; clearText; marker; sound(`T5B044`); appendText; 
   //??
   Unk`"Uh oh!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just then the girl lost her balance, falling 
from her awkward place on the pedestal.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO19D`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"L-look out!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I ran toward her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The water caught on my feet and sprayed 
everywhere as I ran all out to where she was.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Will I make it?)`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I closed my eyes, mustered all of my 
power and sprinted.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I threw out my free left hand to where the 
girl would be falling to catch her.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE02_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Splash!`;
   waitForClick; clearText; marker; appendText; 
   Narr`....`;
   waitForClick; clearText; marker; appendText; 
   Narr`....`;
   waitForClick; clearText; marker; appendText; 
   Narr`....`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't feel anything.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought maybe I hadn't reached her in time.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Scared, I opened my eyes.`;
   waitForClick; clearText; 
});
hideTextbox();
stopSFX()
bgload({ name: `BG21B1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(...What?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no one in my arms.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Or even around me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Only the water sloshing about gently around me.`;
   waitForClick; clearText; marker; sound(`Y5A152`); appendText; 
   //You
   You`"Hey, are you alright? It looks like you took 
a pretty nasty spill..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"..."`;
   waitForClick; clearText; 
});
bgload({ name: `IT05E`, transition: 00 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I looked above me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Of course there was no one on the pedestal 
supporting the statue.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Without saying anything, I got up and went 
behind the statue.`;
   waitForClick; clearText; 
});
bgload({ name: `IT05F`, transition: 00 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`There were scratches in the statue.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There were deep notches that looked like they 
had been carved there by something hard and 
sharp.`;
   waitForClick; clearText; marker; appendText; 
   Narr`They were the shape of people.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Really simple looking like stick people.`;
   waitForClick; clearText; marker; appendText; 
   Narr`At the end of each stick was a little round 
face...`;
   waitForClick; clearText; marker; appendText; 
   Narr`There were six in all.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Looking closer, I saw that next to the people 
figures were two carvings of animals that I'd 
never seen.`;
   waitForClick; clearText; 
});
bgload({ name: `IT05E`, transition: 00 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I looked up at the statue.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The statue was pointing diagonal and 
up...toward the east.`;
   waitForClick; clearText; 
});
bgload({ name: `BG21B1`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`Y5A153`); appendText; 
   //Sara
   Sara`"Hey, what are you two doing?"`;
   waitForClick; clearText; marker; sound(`Y5A154`); appendText; 
   //You
   You`"That's a good question..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I ignored them and gently touched the 
carvings on the statue.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Without thinking I blurted out - `;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Watch your step, okay?"`;
   waitForClick; clearText; marker; sound(`T5B048`); appendText; 
   //??
   Unk`"Okay!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`That answer could have been my imagination 
that time...`;
   waitForClick; clearText; 
});
hideTextbox();
removeBG({ mode: BLACK, transition: 02 });
stopBGM();
delay({ interval: 120 });
playBGM({ num: 3, volume: 100 });
showDimOverlay();
bgload({ name: `BG09A1`, transition: 20 });
hideTextbox();
NVL_Mode();
setSceneTitle({ index: 79 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`After that I decided to go to the infirmary 
and sleep.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`It wasn't that I was feeling ill.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`It was simply that I was not getting enough 
sleep. I wanted some quality rest.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I slept so deeply that I didn't even dream...`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`When I awoke it was already around evening.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`There was a memo by the bed.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`'We will be in the Conference Room until 
dinner.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`If you wake up by then, please come along.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I'm sorry for making you hang out with me 
the last couple days.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Please make sure that you get enough rest.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`You'`;
   waitForClick; 
   Narr`
`;
   
});
showTextbox();
text(() => {
   appendText; 
   Narr`
`;
   appendText; 
   Narr`Judging from the signature, it seemed that 
You had left it.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
varop(`(28 0a a0) ac := (00) 0`);
closeDimOverlay();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I got out of bed, stretched and left the room.`;
   waitForClick; clearText; 
});
bgload({ name: `BG26A3L`, transition: 20 });
clock(`16:22`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I started walking in the direction opposite 
of the Conference Room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I decided to take a walk around the complex 
for fun.`;
   waitForClick; clearText; 
});
bgload({ name: `BG23A1`, transition: 20 });
bgload({ name: `BG24A1`, transition: 20 });
playSFX({ name: `SE00_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I got into EI.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought that it might make for a good 
change of pace to walk around a floor 
I hadn't spent much time on.`;
   waitForClick; clearText; marker; appendText; 
   Narr`...That was my thinking.`;
   waitForClick; clearText; 
});
bgload({ name: `BG24A2`, transition: 20 });
stopSFX()
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
playSFX({ name: `SE00_02`, a1: 0, volume: 100 });
bgload({ name: `BG23B1`, transition: 20 });
stopSFX()
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I got off on the flooded third floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered where I should go...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked around, thinking.`;
   waitForClick; clearText; 
});
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`...It was then that it happened.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I saw 'the girl' again!`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Oh!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I saw her small figure cutting across 
the corridor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was sure of it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was that girl!`;
   waitForClick; clearText; marker; appendText; 
   Narr`I chased after her.`;
   waitForClick; clearText; 
});
stopBGM();
playBGM({ num: 11, volume: 100 });
bgload({ name: `BG26B3L`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Her skirt shook back and forth as she walked 
further and further away.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was almost as if she were trying to get 
away from me.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Hey! Wait a minute!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She might not have heard me and she didn't 
show any sign of stopping.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered what it was all about.`;
   waitForClick; clearText; marker; appendText; 
   Narr`This girl that kept appearing out of nowhere 
and then disappearing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`This girl that didn't register on LeMMIH's 
bio scan.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No, she had registered once...`;
   waitForClick; clearText; 
});
removeBG({ mode: WHITE, transition: 02 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`'Life readings: 7'`;
   waitForClick; clearText; 
});
bgload({ name: `BG26B3L`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But the more I thought about it, the stranger 
everything seemed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She only appeared in front of me and we hardly 
communicated...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Well, I couldn't worry about it. I knew it 
wouldn't help.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was something that I could only solve by 
asking her directly.`;
   waitForClick; clearText; 
});
bgload({ name: `BG25B3`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She headed into the Cosmic Whale Room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I followed in soon after her.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `BG05A1`, transition: 26 });
stopBGM();
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The room was dimly lit.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A massive whale floated like a majestic 
phantasm, in the cosmic room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The girl was in the middle of the room.`;
   waitForClick; clearText; 
});
playBGM({ num: 22, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She was facing away from me, sitting and 
hugging her knees.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I finally...caught up..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I approached her as I caught my breath.`;
   waitForClick; clearText; marker; appendText; 
   Narr`...I heard singing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It sounded like phrases from a children's song.`;
   waitForClick; clearText; marker; sound(`Y5A155`); appendText; 
   //??
   Unk`"Moon sprite...shouldering a...long bow."`;
   waitForClick; clearText; marker; sound(`Y5A156`); appendText; 
   //??
   Unk`"Waiting inside a dream."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt like...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had heard the lyrics somewhere before.`;
   waitForClick; clearText; 
});
goto(lbl_00000ad4).if(var_e3 == 0);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And recently...`;
   waitForClick; clearText; 
});
goto(lbl_00000ad9);
let lbl_00000ad4;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Somewhere, I was sure...`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the distant, distant past...`;
   waitForClick; clearText; 
});
let lbl_00000ad9;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I wondered if it was my missing memory that 
was making me feel that way...?`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Hey, you."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her shoulders jumped with shock and she 
stopped singing.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Slowly, she turned back to look at me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was the girl after all.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Why do you run away from me?"`;
   waitForClick; clearText; marker; appendText; 
   //??
   Unk`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Oh, well. I guess it doesn't matter."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It really did matter to me, but since I had 
finally been able to confront the girl, 
I felt a surge of relief.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Well, why don't we go where everyone else is?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I held out my hand as I said this.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Finally, she stood up and spoke.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`Y5A158`); appendText; 
   //??
   Unk`"Brother..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"...What?"`;
   waitForClick; clearText; marker; appendText; 
   //??
   Unk`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The girl just stared at my face.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"L...let's go!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I took her hand and tugged it as I began 
to walk.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The inside of my mind was churning...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was because of what she had just said.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Inside of me it felt like another me was 
screaming.`;
   waitForClick; clearText; marker; appendText; 
   Narr`...That was how I felt.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
stopBGM();
delay({ interval: 120 });
bgload({ name: `BG17A1`, transition: 26 });
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"I found another girl!"`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I burst into the Conference Room as 
I shouted this.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Of course, I was still leading the girl 
by the hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone turned to look at me at once.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU06BDM`, name2: `TU06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A159`); appendText; 
   //Tsugumi
   Tsugumi`"Huh?"`;
   waitForClick; clearText; marker; sound(`Y5A160`); appendText; 
   //You
   You`"Another what?"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `KB07ADM`, name2: `SO06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A161`); appendText; 
   //Takeshi
   Takeshi`"Who are you talking about?"`;
   waitForClick; clearText; marker; sound(`Y5A162`); appendText; 
   //Sora
   Sora`"Are you talking about...THAT girl?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Yeah. I found her in the Cosmic Whale Room 
and brought her here."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU07BDM`, name2: `TU06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `KB07ADM`, name2: `SO07ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Sora
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"W...what's the matter with everyone?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Why aren't you surprised?"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU07BDM`, name2: `TU07ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A163`); appendText; 
   //Tsugumi
   Tsugumi`"Maybe you better rest for a while."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"What?"`;
   waitForClick; clearText; marker; sound(`Y5A164`); appendText; 
   //??
   Unk`"Hey, hey!"`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The girl was tugging at my sleeve.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I turned to look at her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The girl that I had brought back was...`;
   waitForClick; clearText; 
});
playBGM({ num: 4, volume: 100 });
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A165`); appendText; 
   //Sara
   Sara`"What are you doing...dragging me here all 
of the sudden?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"S-Sara...?"`;
   waitForClick; clearText; marker; sound(`Y5A166`); appendText; 
   //Sara
   Sara`"???"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked back at everyone.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU07BDM`, name2: `TU06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"T-this isn't right! I swear, I saw her!"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"We were walking here hand-in-hand. It wasn't 
Sara..."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SO17ADM`, name2: `SA11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A167`); appendText; 
   //Sora
   Sora`"Is that right? Sara?"`;
   waitForClick; clearText; marker; sound(`Y5A168`); appendText; 
   //Sara
   Sara`"No. I didn't see anybody else."`;
   waitForClick; clearText; marker; sound(`Y5A169`); appendText; 
   //Sara
   Sara`"The Kid just suddenly grabbed my hand..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"What?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Sara...why are you lying...?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SO03ADM`, name2: `SA04ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A170`); appendText; 
   //Sara
   Sara`"Huh? What're you talking about? You're 
the one that's lying?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"W-what...?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"The girl was in the Whale Room...she was 
sitting down hugging her knees."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"She was singing some kind of phrases to 
a kid's song."`;
   waitForClick; clearText; marker; sound(`Y5A171`); appendText; 
   //Sara
   Sara`"I'm telling you that was me!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara was red-faced and shouting.`;
   waitForClick; clearText; marker; sound(`Y5A172`); appendText; 
   //Sara
   Sara`"You don't have to tell everybody about it!"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(Geez, what's with her...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(What's going on here...)`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A173`); appendText; 
   //You
   You`"Oh my!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You groaned as she slapped her forehead 
with her hand.`;
   waitForClick; clearText; marker; sound(`Y5A174`); appendText; 
   //You
   You`"Kid? Just forget about everything else and 
get some rest."`;
   waitForClick; clearText; marker; sound(`Y5A175`); appendText; 
   //You
   You`"I'll bring you some dinner later."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"..............."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y5A176`); appendText; 
   //You
   You`"What is going on with this guy...?"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
removeFG({ id: 1, useAnim: false });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I thought about a lot of things as I plodded 
to the infirmary.`;
   waitForClick; clearText; 
});
hideTextbox();
bgload({ name: `BG25A3`, transition: 26 });
showDimOverlay();
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Things leading to that point.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Things to come.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`The odd things going on.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Things I couldn't figure out.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Things I needed to find out.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Things I needed to decide.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Everything I had been trying to avoid thinking 
about all rushed in to my mind at once, making 
it a confused mess.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I couldn't help thinking...and 
worrying...about things.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`About You.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`What if the man who had died 34 years before 
wasn't You's father?`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Then who was her real father?`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Was the woman that died 15 years before really 
You's mother?`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`If not, then who was?`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`About me.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Why did I keep having premonitions of 
the future? What did it mean?`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Who was the girl? Why had I mistaken 
Sara for her?`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Why had I even lost my memory in the 
first place?`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`What had happened to me in my past?`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`What did Tsugumi know about all of this?`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Why were we all trapped in LeMU?`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Was it just an accident?`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Or something else...`;
   waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
varop(`(28 0a a0) ac := (00) 0`);
closeDimOverlay();
bgload({ name: `IMG01A`, transition: 26 });
hideTextbox();
AVL_Mode();
delay({ interval: 120 });
stopBGM();
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`20:19`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`A few hours later, the installation started to 
flood again.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`'Dritte stock - from the partition to the 
Cosmic Whale was submerged.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Casualties: None'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Flooding to other rooms: None'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Chance of damage spreading: None...'`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora's voice conveyed the situation over the 
intercom in a matter-of-fact tone.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Cosmic Whale Room...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had been there until just shortly before the 
flooding.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But somehow it felt like some event that 
had taken place thousands of miles away.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I covered my head with the blanket, 
closed my eyes and tried to sleep.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tried to search.`;
   waitForClick; clearText; marker; appendText; 
   Narr`...For the world I should be in.`;
   waitForClick; clearText; marker; appendText; 
   Narr`...For the place I should return to.`;
   waitForClick; clearText; marker; appendText; 
   Narr`...And for myself.`;
   waitForClick; clearText; 
});
varop(`(28 0a a4) b3 := (00) 0`);
jump(`SY6A`);
