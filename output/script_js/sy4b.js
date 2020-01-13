g_b0 = 5;
g_b1 = 4;
g_b2 = 4;
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
setDialogBoxColor(BLUE);
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
playBGM({ num: 3, volume: 100 });
setSceneTitle({ index: 76 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I tried to organize my thoughts as I looked 
for You.`;
   waitForClick; clearText; 
});
bgload({ name: `IMG01B`, transition: 20 });
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I realized there were six things I knew 
for sure.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`1. You's father, Yoichi Tanaka, had apparently 
died 34 years before.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`2. And You's mother, Yukie Tanaka, had died 15 
years before.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`3. You had heard from her mother that Yoichi 
had disappeared 17 years before.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`4. You's mother was still researching 
archaeology at LeMU.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`5. From the written records of A and B, I knew 
that Yoichi and Yukie had a daughter.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`6. Last, both of her parents' deaths had 
something to do with the Tief Blau Virus.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I wondered what we could possibly find out 
about these facts.. `;
   waitForClick; clearText; 
});
hideTextbox();
bgload({ name: `BG26A3L`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
clock(`10:24`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`As I was walking the corridor, Sara suddenly 
appeared from around a corner.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A477`); appendText; 
   Sara`"Hey, Kid..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Where's You?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara shook her head.`;
   waitForClick; clearText; marker; sound(`Y4A478`); appendText; 
   Sara`"She told me she wanted to be alone."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I see...I wonder what I should do."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A479`); appendText; 
   Sara`"Kid, maybe you could go keep her company?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Of course I will."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But I wonder what I should do?"`;
   waitForClick; clearText; marker; sound(`Y4A480`); appendText; 
   Sara`"Go and cheer her up."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Huh? I thought you said that she wanted to be 
alone."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A481`); appendText; 
   Sara`"That's exactly when a guy needs to go to a 
girl and give her a shoulder to cry on."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But you went and it didn't help, right?"`;
   waitForClick; clearText; marker; sound(`Y4A482`); appendText; 
   Sara`"We are different. I'm a girl. 
You're a boy...Got it?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It shouldn't matter."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A483`); appendText; 
   Sara`"Listen...No matter how much a girl pretends 
to be strong, she is always waiting."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"For what?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A484`); appendText; 
   Sara`"It's obvious, isn't it?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"?"`;
   waitForClick; clearText; marker; sound(`Y4A485`); appendText; 
   Sara`"The hero who comes to save her!!" `;
   waitForClick; clearText; marker; appendText; 
   Narr`(Say what?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was astounded.`;
   waitForClick; clearText; marker; sound(`Y4A486`); appendText; 
   Sara`"Waiting and waiting and waiting!"`;
   waitForClick; clearText; marker; sound(`Y4A487`); appendText; 
   Sara`"Waiting for our knights in shining armor!"`;
   waitForClick; clearText; marker; sound(`Y4A488`); appendText; 
   Sara`"That's just the way that girls are!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Numbed by the conversation, I tried to argue.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I'm no hero and I'm sure not a knight."`;
   waitForClick; clearText; 
});
goto(lbl_000001d3).if(g_df == 0);
fgload({ id: 1, name: `SA11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A489`); appendText; 
   Sara`"What? Who said that they liked the name 
Prince anyway?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Would you forget about that already..."`;
   waitForClick; clearText; 
});
let lbl_000001d3;
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A490`); appendText; 
   Sara`"Maybe you just don't like You."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"That's a stupid thing to say."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A491`); appendText; 
   Sara`"Then go to her!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara pointed down the corridor.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh, alright."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Worn down by the powers of Sara's persuasion, 
I gave in. `;
   waitForClick; clearText; marker; appendText; 
   Kid`"But just let me ask you one more thing."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Why me?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`If it has to be a guy, why not Takeshi?`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A492`); appendText; 
   Sara`"Because it's settled."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Huh?"`;
   waitForClick; clearText; marker; sound(`Y4A493`); appendText; 
   Sara`"I decided. Because I like you better."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"????"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A494`); appendText; 
   Sara`"And I don't have many favorites. So count 
yourself lucky."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara let out a defiant laugh.`;
   waitForClick; clearText; marker; sound(`Y4A495`); appendText; 
   Sara`"Listen up so you don't get lost."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
bgload({ name: `BG02A1`, transition: 26 });
playBGM({ num: 19, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
clock(`10:31`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara told me where You was and I went to 
find her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I spotted You's back from behind the 
merry-go-round.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was looking down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was sitting, her hand clutching the ride...`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Calling out to her, I went closer.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You turned her face toward me and gave me an 
agonized look and spoke.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A496`); appendText; 
   You`"Please...don't talk to me right now."`;
   waitForClick; clearText; marker; sound(`Y4A497`); appendText; 
   You`"Stay away from me."`;
   waitForClick; clearText; marker; sound(`Y4A498`); appendText; 
   You`"Something isn't right with me right 
now...I might say something awful..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I can't leave you alone."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was the honest truth.`;
   waitForClick; clearText; marker; appendText; 
   You`"......"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I sat down near You.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU03BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I spoke exactly what came into my mind.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I remember what you said when we first met."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You said, 'I am You.'"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I am you."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You are me."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"We are the same."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You're not alone."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was no knight in shining armor... 
and there wasn't much I could do by myself...`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So don't struggle with this alone. Let's 
think through it together."`;
   waitForClick; clearText; marker; appendText; 
   Narr`...but I thought that we could get through it 
together.`;
   waitForClick; clearText; marker; sound(`Y4A499`); appendText; 
   You`"Kid..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I nodded firmly.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So, what do we know so far?"`;
   waitForClick; clearText; marker; sound(`Y4A500`); appendText; 
   You`"That my dad...might be dead."`;
   waitForClick; clearText; marker; sound(`Y4A501`); appendText; 
   You`"But that can't be true! Because...because it 
happened 17 years before what my mom told me!"`;
   waitForClick; clearText; marker; sound(`Y4A502`); appendText; 
   You`"And it was 16 years before I was born!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"That's not all, is it?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A503`); appendText; 
   You`"No! There's more. My mom might be already 
dead, too!"`;
   waitForClick; clearText; marker; sound(`Y4A504`); appendText; 
   You`"It can't be! How could it? It doesn't make 
any sense!"`;
   waitForClick; clearText; marker; sound(`Y4A505`); appendText; 
   You`"Fifteen years ago! When I was three! Before 
I was even aware of anything!"`;
   waitForClick; clearText; marker; sound(`Y4A506`); appendText; 
   You`"I saw my mom running around just fine right 
before I came here!" `;
   waitForClick; clearText; marker; appendText; 
   Kid`"That's what you said."`;
   waitForClick; clearText; marker; sound(`Y4A507`); appendText; 
   You`"It's not just what I said - it's a fact!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`Y4A508`); appendText; 
   You`"What in the world...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A509`); appendText; 
   You`"I don't know what is right or wrong anymore."`;
   waitForClick; clearText; marker; sound(`Y4A510`); appendText; 
   You`"So who raised me all this time?"`;
   waitForClick; clearText; marker; sound(`Y4A511`); appendText; 
   You`"Who was my...real father? Where did he go...?"`;
   waitForClick; clearText; marker; sound(`Y4A512`); appendText; 
   You`"I...I just don't know anymore..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Like a dam bursting, You spewed out all of the 
bad feelings that had brewing inside of her.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Wait. Just calm down."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A513`); appendText; 
   You`"I'm calm enough!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You're losing your composure and ability 
judge."`;
   waitForClick; clearText; marker; sound(`Y4A514`); appendText; 
   You`"I'm always composed!"`;
   waitForClick; clearText; marker; sound(`Y4A515`); appendText; 
   You`"Are you ready! The answer is clear!"`;
   waitForClick; clearText; marker; sound(`Y4A516`); appendText; 
   You`"The whereabouts of my father have been 
unknown since he disappeared 17 years ago, 
but today he is alive somewhere."`;
   waitForClick; clearText; marker; sound(`Y4A517`); appendText; 
   You`"My mom is alive, too. She is at home waiting 
for me."`;
   waitForClick; clearText; marker; sound(`Y4A518`); appendText; 
   You`"This is the truth! And it's unchangeable! 
So I don't have to prove it!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Look, you're jumping to conclusions."`;
   waitForClick; clearText; marker; sound(`Y4A519`); appendText; 
   You`"Shut up! You're as messed up as LeMMIH is!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Idiot! You're the one who's messed up!" `;
   waitForClick; clearText; marker; sound(`Y4A520`); appendText; 
   You`"What'd you just say!?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You, you're pretty smart, right?"`;
   waitForClick; clearText; marker; sound(`Y4A521`); appendText; 
   You`"Well, which one is it?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"And I thought you were strong."`;
   waitForClick; clearText; 
});
goto(lbl_00000323).if(g_e3 != 0);
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"You were the one who said that you're 
knowledge wasn't for defense, it was for 
offense."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It was the first time that I've ever met a 
girl who said anything like that." `;
   waitForClick; clearText; marker; appendText; 
   Kid`"I never thought you'd be weak like this."`;
   waitForClick; clearText; 
});
goto(lbl_00000328);
let lbl_00000323;
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"You said that scholarship is futile."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But you're the kind of person who wants more 
knowledge even knowing that."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"That's not something a weak person could do."`;
   waitForClick; clearText; 
});
let lbl_00000328;
fgload({ id: 1, name: `YU05BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So why are you acting like this now?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"C'mon let's just be logical and think this 
through one point at a time."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"The way you always do."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"The reason you're confused is the information 
is conflicting, right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Because you think that part of it can't be 
right."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So let's start by sorting fact from fiction 
beginning with what you know."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You, you know a lot about a lot of things."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You have the materials in your head to sort 
this thing out."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You out of anyone should be able to tell 
what is a lie."`;
   waitForClick; clearText; marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Right?"`;
   waitForClick; clearText; marker; appendText; 
   You`"..............."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You turned her eyes away from me, she bit down 
hard on her lip.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She finally looked down and closed her eyes as 
if she were thinking.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could tell that she was trying hard to 
accept the possibility that maybe the 
facts might be true.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU11BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A522`); appendText; 
   You`"You're right...I don't know what was the 
wrong with me."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Finally You lifted her face...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A523`); appendText; 
   You`"I don't know what was the matter with me."`;
   waitForClick; clearText; marker; sound(`Y4A524`); appendText; 
   You`"I'm sorry."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You gave a little nod.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Alright."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
stopBGM();
playBGM({ num: 15, volume: 100 });
removeFG({ id: 1, useAnim: false });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Finally it was time to start deducing things.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`We decided to start breaking things down with 
the things that were clear.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
bgload({ name: `BG02A2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Like what was Tief Blau, or TB?`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`You explained that it was a malignant virus 
that had an extremely high death rate, which 
had ravaged the world in the past.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`She said that it was first discovered more 
than 30 years before.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`So, time-wise there was nothing strange if her 
father had died of TB 34 years ago and her 
mother died 15 years ago.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Furthermore, the world was now free of TB, 
and a decade earlier the World Health 
Organization had officially declared 
the disease eradicated.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`What You didn't know was when her parents were 
supposed to have died.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`You didn't know what she was to make of this 
information since it was 16 years before she 
was born.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`And the mother that had raised her...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`She said she had just seen her face just the 
other day, but she was supposed to have died 
15 years before.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`We figured that there were four possibilities.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`1. Yoichi had not actually died, but only 
disappeared 17 years before.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`And Yukie was still alive.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`2. Yoichi had not actually died, but only 
disappeared 17 years before.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`However, Yukie had passed away 15 years before.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`3. Yoichi had died 34 years before, but Yukie 
was still alive and well.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`4.Yoichi had died 34 years before and Yukie 15 
years before.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We didn't know which was truth and which 
fiction.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`It was incredibly confusing.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`We decided to consider the possibilities one 
by one.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`These theories were based on information from 
the following four sources.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`A. A file compiled by Sora concerning the 
death of Yukie Tanaka.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`B. The chat log from A and B (the only source 
of information about Yoichi's death)`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`C. What You's mom had told her (The only 
source of information about Yoichi's 
disappearance)`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`D. The existence of You's mom`;
   waitForClick; nextPage(04); 
});
hideTextbox();
bgload({ name: `BG11A2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We moved to the Security Office and checked 
the 'File Concerning the Death of Yukie 
Tanaka' again.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`With as much evidence as there was in the 
file, it looked like Yukie's death was 
indeed a fact.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`We set aside the question of whether she were 
actually You's real mother for the time 
being...`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`So we were able to narrow it down to 
possibilities two and four.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`'2. Yoichi had not actually died, but only 
disappeared 17 years before. However, Yukie 
had passed away 15 years before.'`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`'4. Yoichi had died 34 years before and Yukie 
15 years before.'`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We deduced that that would mean that if Yukie 
were dead, then that meant that You's mother 
had been lying to her all these years.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`We didn't bother ourselves about the 
possibility of two women having the same name.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`If we could determine that Yukie was lying, 
then the reliability of her information about 
Yoichi's disappearance would drop dramatically.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`That would strongly boost the possibility that 
the fourth theory was right.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`'4. Yoichi had died 34 years before and Yukie 
15 years before.'`;
   waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
playBGM({ num: 3, volume: 100 });
bgload({ name: `BG11A1`, transition: 26 });
fgload({ id: 1, name: `YU03BDM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Hmmmmmmmm!"`;
   waitForClick; clearText; marker; sound(`Y4A525`); appendText; 
   You`"That would mean that...both of them are..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No, I said wait! Quit jumping to conclusions."`;
   waitForClick; clearText; marker; sound(`Y4A526`); appendText; 
   You`"But..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You're so impatient. We're still trying to 
sort this out, right?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just then...`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
eff_41 = 11;
eff_42 = 4;
eff_50 = 0;
showDimInAndOutAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The lights started flickering on and off.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"See, the lights agree with me."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A527`); appendText; 
   You`"Whoa...ha, ha."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 3, color: BLACK });
closeDimInAndOutAndFilterAnim();
removeFG({ id: 1, useAnim: false });
bgload_keepFg({ name: `BG11A2`, transition: 26 });
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"The lights went out..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A528`); appendText; 
   You`"Maybe they're agreeing with me." `;
   waitForClick; clearText; marker; appendText; 
   Kid`"..."`;
   waitForClick; clearText; 
});
bgload({ name: `BG11A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Finally, they flashed back on.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It seems like the lights are in bad shape." `;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 18, volume: 100 });
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A529`); appendText; 
   You`"It sure does."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I wonder if it's another blackout."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A530`); appendText; 
   You`"Eh? Are we going to have to make repairs 
again?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Well, I don't want to either..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A531`); appendText; 
   You`"This time should we have Takeshi fix it 
himself?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Uh, that'd be pretty low."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A532`); appendText; 
   You`"Ah, ha, ha!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The light conversation seemed to lift You's 
spirits.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Okay then..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"...Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I heard a voice far off.`;
   waitForClick; clearText; marker; sound(`Y4A533`); appendText; 
   Takeshi`"Heeeey! Yooooou! Where are yooooou?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A534`); appendText; 
   You`"What's that? Is that Takeshi?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It sounds like he's looking for you."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU02BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A535`); appendText; 
   You`"Heeeey! Takeshi! I'm over here!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`After a bit, Takeshi appeared.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 4, name1: `YU15BDS`, name2: `KB11ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A536`); appendText; 
   Takeshi`"There you are. I looked all over for you."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KB01ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A537`); appendText; 
   Takeshi`"Oh, and there's the Kid, too. You two sure 
seem to be together a lot recently."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I don't know about that."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU16BDS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A538`); appendText; 
   You`"What? Are you jealous?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KB08ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A539`); appendText; 
   Takeshi`"Nope. Not a bit."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU18BDS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A540`); appendText; 
   You`"What? Well, you should be!"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KB11ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A541`); appendText; 
   Takeshi`"Alright. I'm jealous then."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU16BDS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A542`); appendText; 
   You`"Hee, hee. This will blow your mind, but 
actually..."`;
   waitForClick; clearText; marker; sound(`Y4A543`); appendText; 
   You`"Me and the Kid are dating."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KB06ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A544`); appendText; 
   Takeshi`"Whoooooa!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Whaaaaaat?!"`;
   waitForClick; clearText; marker; sound(`Y4A545`); appendText; 
   Takeshi`"R...really?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No, no, no, no, no. I'm not touching that."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I shook my head vigorously.`;
   waitForClick; clearText; marker; sound(`Y4A546`); appendText; 
   Takeshi`"NO way, that absolutely blows my mind."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KB11ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A547`); appendText; 
   Takeshi`"Okay, I'll stop pretending to be surprised 
now..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU18BDS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A548`); appendText; 
   You`"Hey! Don't interrupt me! I'm supposed to give 
the punch line."`;
   waitForClick; clearText; marker; sound(`Y4A549`); appendText; 
   Takeshi`"I know what's coming next. 'I'm kidding. 
It's a joke.' Right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU17BDS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A550`); appendText; 
   You`"Yup."`;
   waitForClick; clearText; marker; sound(`Y4A551`); appendText; 
   Takeshi`"Alright, enough of that. Let's get back 
on topic."`;
   waitForClick; clearText; marker; sound(`Y4A552`); appendText; 
   You`"Alright..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"And? What was it you came for?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KB01ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A553`); appendText; 
   Takeshi`"Uh, I'm going to go make some repairs on the 
generator. You wanna help?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Repair the generator?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU15BDS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A554`); appendText; 
   You`"I don't believe this. Are you saying there's 
been a blackout again?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't believe it.`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KB11ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A555`); appendText; 
   Takeshi`"No, it's not that serious. But the generator 
isn't in the best of shape."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah. The lights did just go out a little bit 
ago."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 4, name1: `YU01BDS`, name2: `KB01ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A556`); appendText; 
   Takeshi`"See?"`;
   waitForClick; clearText; marker; sound(`Y4A557`); appendText; 
   Takeshi`"Well, it's no big deal, but I've got to do 
some maintenance."`;
   waitForClick; clearText; marker; sound(`Y4A558`); appendText; 
   Takeshi`"Sora's orders."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I see..."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KB11ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A559`); appendText; 
   Takeshi`"You, will you help?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU17BDS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A560`); appendText; 
   You`"S-sure...I suppose..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed that You still wasn't back to normal.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could tell that she was just pretending 
she was fine.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought that if I let her go to make 
repairs in this state of mind, she might 
get hurt.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey, Takeshi? I'll go with you to do the 
repairs."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 4, name1: `YU03BDS`, name2: `KB07ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A561`); appendText; 
   Takeshi`"What? You will Kid?"`;
   waitForClick; clearText; marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It looks like You is...a bit worn out."`;
   waitForClick; clearText; marker; sound(`Y4A562`); appendText; 
   Takeshi`"But you don't know a thing about machines, 
right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It'll be fine. I'll try hard."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So let me help."`;
   waitForClick; clearText; marker; sound(`Y4A563`); appendText; 
   Takeshi`"Hmmmm..."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
multiremoveFG({ id1: 1, id2: 4, id3: 0, useAnim: false });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`My desperate attempt at persuasion succeeded 
and I had to help.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We started the work after lunch.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But...`;
   waitForClick; clearText; 
});
hideTextbox();
delay({ interval: 120 });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Ouch. Takeshi, that hurts."`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 1, volume: 100 });
bgload({ name: `BG09A1`, transition: 26 });
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
clock(`16:7`);
showTextbox();
text(() => {
   marker; sound(`S4A099`); appendText; 
   Takeshi`"You can take that. You're a man after all."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi grinned sadistically as he patted my 
right arm, which was supported by a cast.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The cast was made of a specially formulated 
plastic. It was lighter than I had expected 
and not too cumbersome.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi had put the cast on me with 
instructions from Sora.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora said she had something else to do and 
left the work to Takeshi.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S4A100`); appendText; 
   Takeshi`"Wow. That dive you took was really something 
else. Pretty impressive stuff."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Be quiet! I told you my leg slipped. You're 
the one that forced the tools on me."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S4A101`); appendText; 
   Takeshi`"Don't try to pin this on me. I never said to 
bring the tools along."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You're the one that jumped off without 
anything."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S4A102`); appendText; 
   Takeshi`"If we have to make repairs again, then we'll 
need the tools. So I left them there."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi was making excuses.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Okay, fine. It was all my stupid fault..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked at the cast wrapped around my right 
arm.`;
   waitForClick; clearText; marker; appendText; 
   Narr`While we were repairing the generator I had 
lost my balance holding the heavy toolbox and 
fallen off the machine.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S4A103`); appendText; 
   Takeshi`"Well, don't get down about it. Sora said it's 
a clean break so you'll be back in business 
in no time."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Easy for you to say..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S4A104`); appendText; 
   Takeshi`"Alright, now it's time..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi took a transparent object that could 
easily be mistaken for a gun at a glance. It 
was a syringe used to inject a cartridge 
filled with a cocktail of antibiotics, fever 
medicine, painkillers and vitamins.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S4A105`); appendText; 
   Takeshi`"Gimme your arm."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi put the needle against my left arm.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
delay({ interval: 120 });
bgload({ name: `BG21B1`, transition: 26 });
playBGM({ num: 2, volume: 100 });
showDimOverlay();
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
hideTextbox();
NVL_Mode();
clock(`19:35`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It turned to night.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Dinnertime rolled around.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Just like always, we filled our empty bellies 
with chicken sandwiches made by Takeshi.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We wanted a change of pace, to do something 
fun, so we spread out a blanket in the 
park's rest area.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`We thought it would kind of put us in 
a picnic mood.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`The blanket was from a shop stocking them on 
the same floor. `;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`So it had LeMU's Myumyun label printed on it.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora couldn't eat, but she sat with us, 
smiling just the same.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`It seemed that was fun for her.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Sara had just gone to get more drinks from the 
kiosk.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`You wasn't around.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`She didn't feel well and was resting in the 
infirmary.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`So Sara was going to take her a sandwich later.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`As if drawn by the scent, Tsugumi appeared.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`As if she didn't notice or didn't care, 
Tsugumi parked herself on Myumyun's face 
and started munching a sandwich.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Of course Takeshi started complaining, but 
Tsugumi just ignored him.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`She simply sat there eating and drinking 
by herself.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I stared at her absentmindedly.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`"........."`;
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
   Narr`I wondered if I were still stuck on those 
words.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`


`;
   sound(`S3D025`); appendText; delay(0); 
   Narr`                 On the 7th...`;
   waitForClick; 
   Narr`
`;
   sound(`S3D026`); appendText; delay(0); 
   Narr`                 You will die.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Ever since then, Tsugumi had left me mostly 
alone.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I wondered what she was thinking about just 
then.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I was mulling that when...`;
   waitForClick; nextPage(04); 
});
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
stopBGM();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; sound(`Y4A564`); appendText; 
   Sara`"Kyaaaaaa!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`All of the sudden Sara screamed from the 
direction of the kiosk.`;
   waitForClick; clearText; marker; sound(`Y4A565`); appendText; 
   Sara`"R-rat! T-t-there's a rat!!!"`;
   waitForClick; clearText; 
});
playBGM({ num: 18, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Hearing that, Takeshi forgot about Tsugumi 
for an instant and ran to the kiosk.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora and I followed him.`;
   waitForClick; clearText; 
});
bgload({ name: `BG07B1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Some of the food in boxes in the kiosk had 
been damaged.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"WHOA...what a mess!" `;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 4, name1: `SA05ADM`, name2: `KB05ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A566`); appendText; 
   Sara`"Looks like these are totally damaged."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I wonder if the hotdogs were the work of 
the rat, too."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A567`); appendText; 
   Sara`"Huh? But those were in the fridge."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was right. The stuff in the fridge was 
fine.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked like we were in no immediate danger 
of starving.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A568`); appendText; 
   Sora`"Still, I'm surprised that there are rats...in 
LeMU."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi, our de facto cook, was livid.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He was so mad he couldn't speak. His face went 
bright red and his whole body shook with anger.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 4, id3: 0, useAnim: true });
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A569`); appendText; 
   Tsugumi`"Ha, ha, ha, ha..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi was enjoying it though.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What's so funny?"`;
   waitForClick; clearText; marker; sound(`Y4A570`); appendText; 
   Tsugumi`"Why his face..."`;
   waitForClick; clearText; marker; sound(`Y4A571`); appendText; 
   Tsugumi`"...of course."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She pointed at Takeshi as she said this.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB04ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi snapped.`;
   waitForClick; clearText; marker; sound(`Y4A572`); appendText; 
   Takeshi`"That lousy rodent! He pissed me off!"`;
   waitForClick; clearText; marker; sound(`Y4A573`); appendText; 
   Takeshi`"If I catch that rat, I'm gonna feed him to 
the fish outside!"`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`So a raging Takeshi set about trying to rig up 
a trap to catch the rat.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And he ended up making me help him try to 
design and set it up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Going along with him was the only way to calm 
him down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Somehow I was able to help him, using my one 
good arm to cover for my lame one.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The trap he tried to make was a useless 
contraption pieced together from stuff in the 
warehouse.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I won't go the pain of trying to describe it.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
bgload({ name: `BG26B3L`, transition: 20 });
clock(`23:51`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We didn't finish until the middle of the night.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My mind and body were both worn out.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I headed to where You was.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was worried about her and wanted to touch 
base on the theories about her parents.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A574`); appendText; 
   Sara`"Hey, there you are, Kid!"`;
   waitForClick; clearText; 
});
playBGM({ num: 2, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"What? Do you need something?"`;
   waitForClick; clearText; marker; sound(`Y4A575`); appendText; 
   Sara`"Yeah. I got a message for you from Nakkyu."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"From You?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I was just going to see her."`;
   waitForClick; clearText; marker; sound(`Y4A576`); appendText; 
   Sara`"I don't think she is in the infirmary. 
I think she headed out."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Is she feeling better?"`;
   waitForClick; clearText; marker; sound(`Y4A577`); appendText; 
   Sara`"Yup. She said she was feeling tons better."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh, well that's good."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"And? What's the message?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A578`); appendText; 
   Sara`"Uh. Oh...yeah..it's...um..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A579`); appendText; 
   Sara`"She said she's going to THE place and you 
should come, too."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"THE place?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A580`); appendText; 
   Sara`"She said you'd know what she meant."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`(THE place...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Did that mean...?)`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A581`); appendText; 
   Sara`"Hey."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"What?"`;
   waitForClick; clearText; marker; sound(`Y4A582`); appendText; 
   Sara`"I don't know but you seem to be doing alright 
for yourself."`;
   waitForClick; clearText; marker; sound(`Y4A583`); appendText; 
   Sara`"You're already sneaking dates at night 
and all."`;
   waitForClick; clearText; marker; sound(`Y4A584`); appendText; 
   Sara`"You sly guy you!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't think I knew what she was talking 
about.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The theory was half-baked...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A585`); appendText; 
   Sara`"By the way, what trick did you use to calm 
You down?"`;
   waitForClick; clearText; marker; sound(`Y4A586`); appendText; 
   Sara`"She fell for you in the blink of an eye, 
so you must be good."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"She didn't fall. I fell and that's how 
I hurt my arm."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA12ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A587`); appendText; 
   Sara`"Oh, I see now. You're playing dumb."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A588`); appendText; 
   Sara`"Come on. Just tell me a little."`;
   waitForClick; clearText; marker; sound(`Y4A589`); appendText; 
   Sara`"What you said or what you did."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A590`); appendText; 
   Sara`"Or I guess to hear the juicy details you 
have to be over 18 maybe."`;
   waitForClick; clearText; marker; appendText; 
   Narr`What was she talking about?`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I don't know what you are talking about. 
I just gave her a helping hand..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A591`); appendText; 
   Sara`"Wh-what? You skipped first base?" `;
   waitForClick; clearText; marker; appendText; 
   Kid`"Huh?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A592`); appendText; 
   Sara`"And?"`;
   waitForClick; clearText; marker; sound(`Y4A593`); appendText; 
   Sara`"Come on! It's okay! I won't tell anybody 
else."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A594`); appendText; 
   Sara`"You don't want to tell me?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought it was risky to continue the 
conversation and decided to take a hint 
from history and...`;
   waitForClick; clearText; marker; appendText; 
   Narr`And 'see no more, speak no more, hear no more.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara finally got the idea.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
stopBGM();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Ultimately Sara gave up and, since I figured 
that You was waiting for me, I started walking.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought about what You meant by THE place.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I figured it was probably...`;
   waitForClick; clearText; 
});
g_b3 = 0;
jump(`SY5A`);
