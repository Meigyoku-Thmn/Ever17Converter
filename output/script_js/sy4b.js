l_b0 = 5;
l_dayA = 4;
l_dayB = 4;
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
   `I tried to organize my thoughts as I looked for You.`;

});
bgload({ name: `IMG01B`, transition: 20 });
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `I realized there were six things I knew for sure.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `1. You's father, Yoichi Tanaka, had apparently died 34 years before.`;
   `2. And You's mother, Yukie Tanaka, had died 15 years before.`;
   `3. You had heard from her mother that Yoichi had disappeared 17 years before.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `4. You's mother was still researching archaeology at LeMU.`;
   `5. From the written records of A and B, I knew that Yoichi and Yukie had a daughter.`;
   `6. Last, both of her parents' deaths had something to do with the Tief Blau Virus.`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   `I wondered what we could possibly find out about these facts.. `;

});
hideTextbox();
bgload({ name: `BG26A3L`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
clock(`10:24`);
showTextbox();
text(() => {
   `As I was walking the corridor, Sara suddenly appeared from around a corner.`;

});
fgload({ id: 1, name: `SA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A477)`"Hey, Kid..."`;
   Kid`"Where's You?"`;

});
fgload({ id: 1, name: `SA17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Sara shook her head.`;
   Sara(Y4A478)`"She told me she wanted to be alone."`;
   Kid`"I see...I wonder what I should do."`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A479)`"Kid, maybe you could go keep her company?"`;
   Kid`"Of course I will."`;
   Kid`"But I wonder what I should do?"`;
   Sara(Y4A480)`"Go and cheer her up."`;
   Kid`"Huh? I thought you said that she wanted to be alone."`;

});
fgload({ id: 1, name: `SA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A481)`"That's exactly when a guy needs to go to a girl and give her a shoulder to cry on."`;
   Kid`"But you went and it didn't help, right?"`;
   Sara(Y4A482)`"We are different. I'm a girl. You're a boy...Got it?"`;
   Kid`"It shouldn't matter."`;

});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A483)`"Listen...No matter how much a girl pretends to be strong, she is always waiting."`;
   Kid`"For what?"`;

});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A484)`"It's obvious, isn't it?"`;
   Kid`"?"`;
   Sara(Y4A485)`"The hero who comes to save her!!" `;
   `(Say what?)`;
   `I was astounded.`;
   Sara(Y4A486)`"Waiting and waiting and waiting!"`;
   Sara(Y4A487)`"Waiting for our knights in shining armor!"`;
   Sara(Y4A488)`"That's just the way that girls are!"`;
   `Numbed by the conversation, I tried to argue.`;
   Kid`"I'm no hero and I'm sure not a knight."`;

});
if (l_wanted_to_be_called_prince == 0) goto(lbl_000001d3);
fgload({ id: 1, name: `SA11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A489)`"What? Who said that they liked the name Prince anyway?"`;
   Kid`"Would you forget about that already..."`;

});
let lbl_000001d3;
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A490)`"Maybe you just don't like You."`;
   Kid`"That's a stupid thing to say."`;

});
fgload({ id: 1, name: `SA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A491)`"Then go to her!"`;
   `Sara pointed down the corridor.`;
   Kid`"Oh, alright."`;
   `Worn down by the powers of Sara's persuasion, I gave in. `;
   Kid`"But just let me ask you one more thing."`;

});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid`"Why me?"`;
   `If it has to be a guy, why not Takeshi?`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A492)`"Because it's settled."`;
   Kid`"Huh?"`;
   Sara(Y4A493)`"I decided. Because I like you better."`;
   Kid`"????"`;

});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A494)`"And I don't have many favorites. So count yourself lucky."`;
   `Sara let out a defiant laugh.`;
   Sara(Y4A495)`"Listen up so you don't get lost."`;

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
   `Sara told me where You was and I went to find her.`;
   `I spotted You's back from behind the merry-go-round.`;
   `She was looking down.`;
   `She was sitting, her hand clutching the ride...`;
   Kid`"You..."`;
   `Calling out to her, I went closer.`;
   `You turned her face toward me and gave me an agonized look and spoke.`;

});
fgload({ id: 1, name: `YU03BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y4A496)`"Please...don't talk to me right now."`;
   You(Y4A497)`"Stay away from me."`;
   You(Y4A498)`"Something isn't right with me right now...I might say something awful..."`;
   Kid`"I can't leave you alone."`;
   `It was the honest truth.`;
   You`"......"`;
   `I sat down near You.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU03BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `I spoke exactly what came into my mind.`;
   Kid`"I remember what you said when we first met."`;
   Kid`"You said, 'I am You.'"`;
   Kid`"I am you."`;
   Kid`"You are me."`;
   Kid`"We are the same."`;
   Kid`"You're not alone."`;
   `I was no knight in shining armor... and there wasn't much I could do by myself...`;
   Kid`"So don't struggle with this alone. Let's think through it together."`;
   `...but I thought that we could get through it together.`;
   You(Y4A499)`"Kid..."`;
   `I nodded firmly.`;
   Kid`"So, what do we know so far?"`;
   You(Y4A500)`"That my dad...might be dead."`;
   You(Y4A501)`"But that can't be true! Because...because it happened 17 years before what my mom told me!"`;
   You(Y4A502)`"And it was 16 years before I was born!"`;
   Kid`"That's not all, is it?"`;

});
fgload({ id: 1, name: `YU04BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y4A503)`"No! There's more. My mom might be already dead, too!"`;
   You(Y4A504)`"It can't be! How could it? It doesn't make any sense!"`;
   You(Y4A505)`"Fifteen years ago! When I was three! Before I was even aware of anything!"`;
   You(Y4A506)`"I saw my mom running around just fine right before I came here!" `;
   Kid`"That's what you said."`;
   You(Y4A507)`"It's not just what I said - it's a fact!"`;
   Kid`"........."`;
   You(Y4A508)`"What in the world...?"`;

});
fgload({ id: 1, name: `YU13BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y4A509)`"I don't know what is right or wrong anymore."`;
   You(Y4A510)`"So who raised me all this time?"`;
   You(Y4A511)`"Who was my...real father? Where did he go...?"`;
   You(Y4A512)`"I...I just don't know anymore..."`;
   `Like a dam bursting, You spewed out all of the bad feelings that had brewing inside of her.`;
   Kid`"Wait. Just calm down."`;

});
fgload({ id: 1, name: `YU04BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y4A513)`"I'm calm enough!"`;
   Kid`"You're losing your composure and ability judge."`;
   You(Y4A514)`"I'm always composed!"`;
   You(Y4A515)`"Are you ready! The answer is clear!"`;
   You(Y4A516)`"The whereabouts of my father have been unknown since he disappeared 17 years ago, but today he is alive somewhere."`;
   You(Y4A517)`"My mom is alive, too. She is at home waiting for me."`;
   You(Y4A518)`"This is the truth! And it's unchangeable! So I don't have to prove it!"`;
   Kid`"Look, you're jumping to conclusions."`;
   You(Y4A519)`"Shut up! You're as messed up as LeMMIH is!"`;
   Kid`"Idiot! You're the one who's messed up!" `;
   You(Y4A520)`"What'd you just say!?"`;
   Kid`"You, you're pretty smart, right?"`;
   You(Y4A521)`"Well, which one is it?"`;
   Kid`"And I thought you were strong."`;

});
if (l_chose_to_wait_there_in_2nd_day != 0) goto(lbl_00000323);
showTextbox();
text(() => {
   Kid`"You were the one who said that you're knowledge wasn't for defense, it was for offense."`;
   Kid`"It was the first time that I've ever met a girl who said anything like that." `;
   Kid`"I never thought you'd be weak like this."`;

});
goto(lbl_00000328);
let lbl_00000323;
showTextbox();
text(() => {
   Kid`"You said that scholarship is futile."`;
   Kid`"But you're the kind of person who wants more knowledge even knowing that."`;
   Kid`"That's not something a weak person could do."`;

});
let lbl_00000328;
fgload({ id: 1, name: `YU05BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You`"........."`;
   Kid`"So why are you acting like this now?"`;
   Kid`"C'mon let's just be logical and think this through one point at a time."`;
   Kid`"The way you always do."`;
   Kid`"The reason you're confused is the information is conflicting, right?"`;
   Kid`"Because you think that part of it can't be right."`;
   Kid`"So let's start by sorting fact from fiction beginning with what you know."`;
   Kid`"You, you know a lot about a lot of things."`;
   Kid`"You have the materials in your head to sort this thing out."`;
   Kid`"You out of anyone should be able to tell what is a lie."`;
   You`"........."`;
   Kid`"Right?"`;
   You`"..............."`;

});
fgload({ id: 1, name: `YU13BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `You turned her eyes away from me, she bit down hard on her lip.`;
   `She finally looked down and closed her eyes as if she were thinking.`;
   `I could tell that she was trying hard to accept the possibility that maybe the facts might be true.`;

});
fgload({ id: 1, name: `YU11BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y4A522)`"You're right...I don't know what was the wrong with me."`;
   `Finally You lifted her face...`;

});
fgload({ id: 1, name: `YU01BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y4A523)`"I don't know what was the matter with me."`;
   You(Y4A524)`"I'm sorry."`;
   `You gave a little nod.`;
   Kid`"Alright."`;

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
   `Finally it was time to start deducing things.`;
   `We decided to start breaking things down with the things that were clear.`;
   fadeClearPage();
});
hideTextbox();
bgload({ name: `BG02A2`, transition: 20 });
showTextbox();
text(() => {
   `Like what was Tief Blau, or TB?`;
   `You explained that it was a malignant virus that had an extremely high death rate, which had ravaged the world in the past.`;
   `She said that it was first discovered more than 30 years before.`;
   `So, time-wise there was nothing strange if her father had died of TB 34 years ago and her mother died 15 years ago.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Furthermore, the world was now free of TB, and a decade earlier the World Health Organization had officially declared the disease eradicated.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `What You didn't know was when her parents were supposed to have died.`;
   `You didn't know what she was to make of this information since it was 16 years before she was born.`;
   `And the mother that had raised her...`;
   `She said she had just seen her face just the other day, but she was supposed to have died 15 years before.`;
   `We figured that there were four possibilities.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `1. Yoichi had not actually died, but only disappeared 17 years before.`;
   `And Yukie was still alive.`;
   `2. Yoichi had not actually died, but only disappeared 17 years before.`;
   `However, Yukie had passed away 15 years before.`;
   `3. Yoichi had died 34 years before, but Yukie was still alive and well.`;
   `4.Yoichi had died 34 years before and Yukie 15 years before.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `We didn't know which was truth and which fiction.`;
   `It was incredibly confusing.`;
   `We decided to consider the possibilities one by one.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `These theories were based on information from the following four sources.`;
   `A. A file compiled by Sora concerning the death of Yukie Tanaka.`;
   `B. The chat log from A and B (the only source of information about Yoichi's death)`;
   `C. What You's mom had told her (The only source of information about Yoichi's disappearance)`;
   `D. The existence of You's mom`;
   fadeClearPage();
});
hideTextbox();
bgload({ name: `BG11A2`, transition: 20 });
showTextbox();
text(() => {
   `We moved to the Security Office and checked the 'File Concerning the Death of Yukie Tanaka' again.`;
   `With as much evidence as there was in the file, it looked like Yukie's death was indeed a fact.`;
   `We set aside the question of whether she were actually You's real mother for the time being...`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `So we were able to narrow it down to possibilities two and four.`;
   `'2. Yoichi had not actually died, but only disappeared 17 years before. However, Yukie had passed away 15 years before.'`;
   `'4. Yoichi had died 34 years before and Yukie 15 years before.'`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `We deduced that that would mean that if Yukie were dead, then that meant that You's mother had been lying to her all these years.`;
   `We didn't bother ourselves about the possibility of two women having the same name.`;
   `If we could determine that Yukie was lying, then the reliability of her information about Yoichi's disappearance would drop dramatically.`;
   `That would strongly boost the possibility that the fourth theory was right.`;
   `'4. Yoichi had died 34 years before and Yukie 15 years before.'`;
   fadeClearPage();
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
ADV_Mode();
showTextbox();
text(() => {
   Kid`"Hmmmmmmmm!"`;
   You(Y4A525)`"That would mean that...both of them are..."`;
   Kid`"No, I said wait! Quit jumping to conclusions."`;
   You(Y4A526)`"But..."`;
   Kid`"You're so impatient. We're still trying to sort this out, right?"`;
   `Just then...`;

});
hideTextbox();
stopBGM();
eff_41 = 11;
eff_42 = 4;
eff_50 = 0;
showDimInAndOutAnim();
showTextbox();
text(() => {
   `The lights started flickering on and off.`;
   Kid`"See, the lights agree with me."`;

});
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y4A527)`"Whoa...ha, ha."`;

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
   Kid`"The lights went out..."`;

});
fgload({ id: 1, name: `YU03BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y4A528)`"Maybe they're agreeing with me." `;
   Kid`"..."`;

});
bgload({ name: `BG11A1`, transition: 20 });
showTextbox();
text(() => {
   `Finally, they flashed back on.`;
   Kid`"It seems like the lights are in bad shape." `;

});
hideTextbox();
playBGM({ num: 18, volume: 100 });
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y4A529)`"It sure does."`;
   Kid`"I wonder if it's another blackout."`;

});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y4A530)`"Eh? Are we going to have to make repairs again?"`;
   Kid`"Well, I don't want to either..."`;

});
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y4A531)`"This time should we have Takeshi fix it himself?"`;
   Kid`"Uh, that'd be pretty low."`;

});
fgload({ id: 1, name: `YU08BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y4A532)`"Ah, ha, ha!"`;
   `The light conversation seemed to lift You's spirits.`;
   Kid`"Okay then..."`;
   Kid`"...Huh?"`;
   `I heard a voice far off.`;
   Takeshi(Y4A533)`"Heeeey! Yooooou! Where are yooooou?"`;

});
fgload({ id: 1, name: `YU06BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y4A534)`"What's that? Is that Takeshi?"`;
   Kid`"It sounds like he's looking for you."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU02BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y4A535)`"Heeeey! Takeshi! I'm over here!"`;
   `After a bit, Takeshi appeared.`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 4, name1: `YU15BDS`, name2: `KB11ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   Takeshi(Y4A536)`"There you are. I looked all over for you."`;

});
fgload({ id: 4, name: `KB01ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Takeshi(Y4A537)`"Oh, and there's the Kid, too. You two sure seem to be together a lot recently."`;
   Kid`"I don't know about that."`;

});
fgload({ id: 1, name: `YU16BDS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   You(Y4A538)`"What? Are you jealous?"`;

});
fgload({ id: 4, name: `KB08ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Takeshi(Y4A539)`"Nope. Not a bit."`;

});
fgload({ id: 1, name: `YU18BDS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   You(Y4A540)`"What? Well, you should be!"`;

});
fgload({ id: 4, name: `KB11ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Takeshi(Y4A541)`"Alright. I'm jealous then."`;

});
fgload({ id: 1, name: `YU16BDS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   You(Y4A542)`"Hee, hee. This will blow your mind, but actually..."`;
   You(Y4A543)`"Me and the Kid are dating."`;

});
fgload({ id: 4, name: `KB06ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Takeshi(Y4A544)`"Whoooooa!"`;
   Kid`"Whaaaaaat?!"`;
   Takeshi(Y4A545)`"R...really?"`;
   Kid`"No, no, no, no, no. I'm not touching that."`;
   `I shook my head vigorously.`;
   Takeshi(Y4A546)`"NO way, that absolutely blows my mind."`;

});
fgload({ id: 4, name: `KB11ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Takeshi(Y4A547)`"Okay, I'll stop pretending to be surprised now..."`;

});
fgload({ id: 1, name: `YU18BDS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   You(Y4A548)`"Hey! Don't interrupt me! I'm supposed to give the punch line."`;
   Takeshi(Y4A549)`"I know what's coming next. 'I'm kidding. It's a joke.' Right?"`;

});
fgload({ id: 1, name: `YU17BDS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   You(Y4A550)`"Yup."`;
   Takeshi(Y4A551)`"Alright, enough of that. Let's get back on topic."`;
   You(Y4A552)`"Alright..."`;
   Kid`"And? What was it you came for?"`;

});
fgload({ id: 4, name: `KB01ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Takeshi(Y4A553)`"Uh, I'm going to go make some repairs on the generator. You wanna help?"`;
   Kid`"Repair the generator?"`;

});
fgload({ id: 1, name: `YU15BDS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   You(Y4A554)`"I don't believe this. Are you saying there's been a blackout again?"`;
   `I didn't believe it.`;

});
fgload({ id: 4, name: `KB11ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Takeshi(Y4A555)`"No, it's not that serious. But the generator isn't in the best of shape."`;
   Kid`"Yeah. The lights did just go out a little bit ago."`;

});
multifgload2({ id1: 1, id2: 4, name1: `YU01BDS`, name2: `KB01ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   Takeshi(Y4A556)`"See?"`;
   Takeshi(Y4A557)`"Well, it's no big deal, but I've got to do some maintenance."`;
   Takeshi(Y4A558)`"Sora's orders."`;
   Kid`"I see..."`;

});
fgload({ id: 4, name: `KB11ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Takeshi(Y4A559)`"You, will you help?"`;

});
fgload({ id: 1, name: `YU17BDS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   You(Y4A560)`"S-sure...I suppose..."`;
   Kid`"........."`;
   `It seemed that You still wasn't back to normal.`;
   `I could tell that she was just pretending she was fine.`;
   `I thought that if I let her go to make repairs in this state of mind, she might get hurt.`;
   Kid`"Hey, Takeshi? I'll go with you to do the repairs."`;

});
multifgload2({ id1: 1, id2: 4, name1: `YU03BDS`, name2: `KB07ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   Takeshi(Y4A561)`"What? You will Kid?"`;
   You`"........."`;
   Kid`"It looks like You is...a bit worn out."`;
   Takeshi(Y4A562)`"But you don't know a thing about machines, right?"`;
   Kid`"It'll be fine. I'll try hard."`;
   Kid`"So let me help."`;
   Takeshi(Y4A563)`"Hmmmm..."`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
multiremoveFG({ id1: 1, id2: 4, id3: 0, useAnim: false });
showTextbox();
text(() => {
   `My desperate attempt at persuasion succeeded and I had to help.`;
   `We started the work after lunch.`;
   `But...`;

});
hideTextbox();
delay({ interval: 120 });
showTextbox();
text(() => {
   Kid`"Ouch. Takeshi, that hurts."`;

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
   Takeshi(S4A099)`"You can take that. You're a man after all."`;
   `Takeshi grinned sadistically as he patted my right arm, which was supported by a cast.`;
   `The cast was made of a specially formulated plastic. It was lighter than I had expected and not too cumbersome.`;
   `Takeshi had put the cast on me with instructions from Sora.`;
   `Sora said she had something else to do and left the work to Takeshi.`;

});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A100)`"Wow. That dive you took was really something else. Pretty impressive stuff."`;
   Kid`"Be quiet! I told you my leg slipped. You're the one that forced the tools on me."`;

});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A101)`"Don't try to pin this on me. I never said to bring the tools along."`;
   Kid`"You're the one that jumped off without anything."`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A102)`"If we have to make repairs again, then we'll need the tools. So I left them there."`;
   `Takeshi was making excuses.`;
   Kid`"Okay, fine. It was all my stupid fault..."`;
   `I looked at the cast wrapped around my right arm.`;
   `While we were repairing the generator I had lost my balance holding the heavy toolbox and fallen off the machine.`;

});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A103)`"Well, don't get down about it. Sora said it's a clean break so you'll be back in business in no time."`;
   Kid`"Easy for you to say..."`;

});
fgload({ id: 1, name: `KB11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A104)`"Alright, now it's time..."`;
   `Takeshi took a transparent object that could easily be mistaken for a gun at a glance. It was a syringe used to inject a cartridge filled with a cocktail of antibiotics, fever medicine, painkillers and vitamins.`;

});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A105)`"Gimme your arm."`;
   `Takeshi put the needle against my left arm.`;

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
   `It turned to night.`;
   `Dinnertime rolled around.`;
   `Just like always, we filled our empty bellies with chicken sandwiches made by Takeshi.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `We wanted a change of pace, to do something fun, so we spread out a blanket in the park's rest area.`;
   `We thought it would kind of put us in a picnic mood.`;
   `The blanket was from a shop stocking them on the same floor. `;
   `So it had LeMU's Myumyun label printed on it.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Sora couldn't eat, but she sat with us, smiling just the same.`;
   `It seemed that was fun for her.`;
   `Sara had just gone to get more drinks from the kiosk.`;
   `You wasn't around.`;
   `She didn't feel well and was resting in the infirmary.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `So Sara was going to take her a sandwich later.`;
   `As if drawn by the scent, Tsugumi appeared.`;
   `As if she didn't notice or didn't care, Tsugumi parked herself on Myumyun's face and started munching a sandwich.`;
   `Of course Takeshi started complaining, but Tsugumi just ignored him.`;
   `She simply sat there eating and drinking by herself.`;
   `I stared at her absentmindedly.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `"........."`;
   `${noWait}`;

});
showTextbox();
text(() => {
   `I wondered if I were still stuck on those words.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `${voice(S3D025)}


${noWait}`;
   Append(S3D026)`${center}On the 7th...${wait} ${noWait}`;
   Append`${center}You will die.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Ever since then, Tsugumi had left me mostly alone.`;
   `I wondered what she was thinking about just then.`;
   `I was mulling that when...`;
   fadeClearPage();
});
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
stopBGM();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   Sara(Y4A564)`"Kyaaaaaa!"`;
   `All of the sudden Sara screamed from the direction of the kiosk.`;
   Sara(Y4A565)`"R-rat! T-t-there's a rat!!!"`;

});
playBGM({ num: 18, volume: 100 });
showTextbox();
text(() => {
   `Hearing that, Takeshi forgot about Tsugumi for an instant and ran to the kiosk.`;
   `Sora and I followed him.`;

});
bgload({ name: `BG07B1`, transition: 20 });
showTextbox();
text(() => {
   `Some of the food in boxes in the kiosk had been damaged.`;
   Kid`"WHOA...what a mess!" `;

});
multifgload2({ id1: 1, id2: 4, name1: `SA05ADM`, name2: `KB05ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A566)`"Looks like these are totally damaged."`;
   Kid`"I wonder if the hotdogs were the work of the rat, too."`;

});
fgload({ id: 1, name: `SA06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A567)`"Huh? But those were in the fridge."`;
   `She was right. The stuff in the fridge was fine.`;
   `It looked like we were in no immediate danger of starving.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(Y4A568)`"Still, I'm surprised that there are rats...in LeMU."`;
   Takeshi`"........."`;
   `Takeshi, our de facto cook, was livid.`;
   `He was so mad he couldn't speak. His face went bright red and his whole body shook with anger.`;

});
multiremoveFG({ id1: 1, id2: 4, id3: 0, useAnim: true });
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(Y4A569)`"Ha, ha, ha, ha..."`;
   `Tsugumi was enjoying it though.`;
   Kid`"What's so funny?"`;
   Tsugumi(Y4A570)`"Why his face..."`;
   Tsugumi(Y4A571)`"...of course."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `She pointed at Takeshi as she said this.`;

});
fgload({ id: 1, name: `KB04ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Takeshi snapped.`;
   Takeshi(Y4A572)`"That lousy rodent! He pissed me off!"`;
   Takeshi(Y4A573)`"If I catch that rat, I'm gonna feed him to the fish outside!"`;

});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `So a raging Takeshi set about trying to rig up a trap to catch the rat.`;
   `And he ended up making me help him try to design and set it up.`;
   `Going along with him was the only way to calm him down.`;
   `Somehow I was able to help him, using my one good arm to cover for my lame one.`;
   `The trap he tried to make was a useless contraption pieced together from stuff in the warehouse.`;
   `I won't go the pain of trying to describe it.`;

});
hideTextbox();
stopBGM();
bgload({ name: `BG26B3L`, transition: 20 });
clock(`23:51`);
showTextbox();
text(() => {
   `We didn't finish until the middle of the night.`;
   `My mind and body were both worn out.`;
   `I headed to where You was.`;
   `I was worried about her and wanted to touch base on the theories about her parents.`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A574)`"Hey, there you are, Kid!"`;

});
playBGM({ num: 2, volume: 100 });
showTextbox();
text(() => {
   Kid`"What? Do you need something?"`;
   Sara(Y4A575)`"Yeah. I got a message for you from Nakkyu."`;
   Kid`"From You?"`;
   Kid`"I was just going to see her."`;
   Sara(Y4A576)`"I don't think she is in the infirmary. I think she headed out."`;
   Kid`"Is she feeling better?"`;
   Sara(Y4A577)`"Yup. She said she was feeling tons better."`;
   Kid`"Oh, well that's good."`;
   Kid`"And? What's the message?"`;

});
fgload({ id: 1, name: `SA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A578)`"Uh. Oh...yeah..it's...um..."`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A579)`"She said she's going to THE place and you should come, too."`;
   Kid`"THE place?"`;

});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A580)`"She said you'd know what she meant."`;
   Kid`"........."`;
   `(THE place...)`;
   `(Did that mean...?)`;

});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A581)`"Hey."`;

});
showTextbox();
text(() => {
   Kid`"What?"`;
   Sara(Y4A582)`"I don't know but you seem to be doing alright for yourself."`;
   Sara(Y4A583)`"You're already sneaking dates at night and all."`;
   Sara(Y4A584)`"You sly guy you!"`;
   Kid`"...?"`;
   `I didn't think I knew what she was talking about.`;
   `The theory was half-baked...`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A585)`"By the way, what trick did you use to calm You down?"`;
   Sara(Y4A586)`"She fell for you in the blink of an eye, so you must be good."`;
   Kid`"She didn't fall. I fell and that's how I hurt my arm."`;

});
fgload({ id: 1, name: `SA12ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A587)`"Oh, I see now. You're playing dumb."`;

});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A588)`"Come on. Just tell me a little."`;
   Sara(Y4A589)`"What you said or what you did."`;

});
fgload({ id: 1, name: `SA09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A590)`"Or I guess to hear the juicy details you have to be over 18 maybe."`;
   `What was she talking about?`;
   Kid`"I don't know what you are talking about. I just gave her a helping hand..."`;

});
fgload({ id: 1, name: `SA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A591)`"Wh-what? You skipped first base?" `;
   Kid`"Huh?"`;

});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A592)`"And?"`;
   Sara(Y4A593)`"Come on! It's okay! I won't tell anybody else."`;
   Kid`"..."`;

});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A594)`"You don't want to tell me?"`;
   `I thought it was risky to continue the conversation and decided to take a hint from history and...`;
   `And 'see no more, speak no more, hear no more.'`;
   `Sara finally got the idea.`;

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
   `Ultimately Sara gave up and, since I figured that You was waiting for me, I started walking.`;
   `I thought about what You meant by THE place.`;
   `I figured it was probably...`;

});
l_choice = 0;
jump(`SY5A`);
