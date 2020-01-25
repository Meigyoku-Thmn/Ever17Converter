setDialogBoxColor(BLUE);
l_b0 = 5;
l_dayA = 5;
l_dayB = 5;
bgload({ name: `BG04B1`, transition: 20 });
setSceneTitle({ index: 77 });
clock(`0:3`);
showTextbox();
text(() => {
   `The Lemurian Ruins.`;
   `Just like I had the day before, I visited the ruins.`;
   `I figured I would find You there.`;
   `It felt like I had traveled through time and opened the door to an ancient time.`;
   `Speaking of time travel...`;
   `You had scoffed at it, but I still hadn't given up on the theory.`;
   `It was the only one that made sense to me.`;
   `There was no other way to explain things.`;

});
hideTextbox();
playBGM({ num: 5, volume: 100 });
bgload({ name: `BG40B1`, transition: 20 });
showTextbox();
text(() => {
   `I entered the ruins.`;
   `I continued through the maze-like passages.`;
   `Trying not to get lost, I wracked my memory...`;
   `Fortunately, I remembered the path I'd taken the day before.`;
   `It was still fresh in my mind.`;
   `It was like I had been through the area dozens of times.`;
   `Finally...`;
   You(Y5A000)`"Hey there."`;

});
bgload({ name: `EV_YU03C`, transition: 20 });
showTextbox();
text(() => {
   `I found You.`;
   `She was in the same spot as the day before - the Sun Temple.`;
   `And she was sitting on the same obelisk, sitting hugging her knees.`;
   `I sat down next to her.`;
   Kid`"Do you feel better now?"`;
   You(Y5A001)`"Yeah. Thanks to you."`;
   Kid`"That's good to hear."`;
   You(Y5A002)`"You did a good job of finding this place again."`;
   Kid`"It was the only place I could think of."`;
   You(Y5A003)`"That's not what I mean...I mean you remembered the route here."`;
   Kid`"What are you talking about? You called me here, right?"`;
   You(Y5A004)`"That's right."`;
   Kid`"Don't tell me, you thought that I wouldn't find my way back!"`;
   You(Y5A005)`"Well, yeah."`;
   Kid`"........."`;
   You(Y5A006)`"I'm kidding. It's a joke!"`;
   You(Y5A007)`"To tell you the truth, I just wanted to test you."`;
   Kid`"Test? Me?"`;

});
bgload({ name: `EV_YU03A`, transition: 20 });
showTextbox();
text(() => {
   You(Y5A008)`"Yup."`;
   You(Y5A009)`"I wanted to see if you could navigate the labyrinth, slay the evil dragon and rescue the princess held captive here."`;
   You(Y5A010)`"To see whether the hero would show up or not."`;
   You(Y5A011)`"I wanted to test the knight in shining armor."`;
   Kid`"........."`;
   Kid`"You...you heard that from Sara, right?"`;

});
bgload({ name: `EV_YU03C`, transition: 20 });
showTextbox();
text(() => {
   You(Y5A012)`"Right."`;
   Kid`"And you are supposed to be the princess?"`;
   You(Y5A013)`"Well, I don't want to sound to full of myself, but..."`;
   Kid`"........."`;
   Kid`"I'm going back."`;
   `I stood up.`;

});
bgload({ name: `EV_YU03B`, transition: 20 });
showTextbox();
text(() => {
   You(Y5A014)`"Oh! You're mean! What? I'm not good enough for you?"`;
   Kid`"That's not it at all. I just can't handle this kind of game right now."`;
   Kid`"I'm completely worn out. And I've got this broken arm."`;

});
bgload({ name: `EV_YU03A`, transition: 20 });
showTextbox();
text(() => {
   You(Y5A015)`"Oh, your arm..."`;
   `You belatedly noticed my arm...`;

});
bgload({ name: `BG40B1`, transition: 20 });
showTextbox();
text(() => {
   `Standing, I went to return on the road that I had used in coming.`;
   `But You came after me.`;

});
fgload({ id: 1, name: `YU04BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y5A016)`"Hey, I said wait just a second!"`;
   Kid`"Leave me alone! If all you want to do is talk about your stupid fantasies, I'd rather get some sleep."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU03BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y5A017)`"You got hurt... trying to help me..."`;
   Kid`"........."`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y5A018)`"It's a battle scar you can be proud of."`;
   `(She just won't give up...)`;
   `As I was about to complain...`;
   `You gently laid her hand on my hard cast.`;

});
fgload({ id: 1, name: `YU03BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y5A019)`"Does it still hurt?"`;
   Kid`"...Only a little."`;
   `I lied.`;
   `Thanks to the medicine it didn't really hurt at all.`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y5A020)`"You want me to cast a spell on it for you?"`;
   Kid`"A spell?"`;
   You(Y5A021)`"Yup. I learned it straight from my mom. It's guaranteed to work."`;
   You(Y5A022)`"It's my way of saying I'm sorry."`;
   Kid`"........."`;
   `You put both her hands on my cast, gently, as if enveloping it and gently started rubbing it.`;
   `I just stood there.`;
   `I could feel the heat from her palms through the cast.`;
   `As she gently stroked my arm, You started whispering.`;
   You(Y5A023)`"Chichin puipui, pain, pain go fly away! To a galaxy far, far away..."`;

});
hideTextbox();
delay({ interval: 60 });
showTextbox();
text(() => {
   Kid`"...Chichin puipui?"`;
   You(Y5A024)`"How is it? The pain stopped, right?"`;
   Kid`"...A galaxy far, far away?"`;

});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y5A025)`"W-what? You gotta problem with the charm?"`;
   Kid`"Ha...hee, hee...nope...nope...heeeee..."`;
   `All of the sudden, I had a wild urge to laugh.`;
   `It was something I never thought I'd hear come out of You's mouth.`;
   `And it tickled incredibly.`;
   Kid`"Yeah...it looks like you completely fixed it."`;
   `My irritation vanished.`;

});
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y5A026)`"Oh, good. I hoped I would!"`;
   `We decided to go back to the hall.`;

});
fgload({ id: 1, name: `YU11BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y5A027)`"I'm glad that you came."`;
   Kid`"Huh?"`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y5A028)`"That you made your way through the labyrinth to find me."`;
   Kid`"........."`;
   You(Y5A029)`"Now all you have to do is rescue the princess. Right, white knight?"`;
   Kid`"........."`;
   Kid`"You just don't quit..."`;
   Kid`"Alright then, I guess I am off to dispose of some evil dragon."`;
   `Finally I understand.`;
   `The evil dragon that was holding You...`;
   `...It was You's past.`;
   `And she needed to be saved.`;

});
showDimOverlay();
showTextbox();
text(() => {
   Sara(Y4A483)`"Listen...no matter how much a girl pretends to be strong, she is always waiting for the guy."`;

});
dimOff_ac = 0;
closeDimOverlay();
showTextbox();
text(() => {
   `I thought maybe even for me.`;

});
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y5A030)`"Alright, now let's restart our detective work!"`;
   `Suddenly, I noticed a tart, refreshing aroma tickling my nose mixed, cutting through the mildew smell of the ruins.`;
   `It was the scent of not yet ripened fruit.`;
   `It was familiar...it smelled like the sun in spring.`;

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
   `We decided to reorganize the information we had.`;
   `We thought about the data we had on her parents.`;
   `Sora's files had You's mother, Yukie Tanaka as dying 15 years ago.`;
   `The company LAN had a chat log that had You's father, Yoichi Tanaka, as dying 34 years ago.`;
   `However, You's mom had told her that her father had gone missing 17 years before.`;
   `There were pictures and movies, but they could not be completely trusted as reliable. You had even said so herself.`;
   `And what was most suspicious...`;
   `...was the lady who You had always thought of as her mom.`;
   `From what we could gather, the death of her parents Yoichi and Yukie were facts.`;
   `That meant that her mother - or the lady who called herself that - could have been lying all along.`;
   `...Based on all of the information, we narrowed it down to the two most likely possibilities.`;
   `'4.Yoichi had died 34 years before and Yukie 15 years before.'`;
   Kid`"Hey, I bet this is what happened."`;
   Kid`"Assuming that your mom and dad did die is a fact, then the person working at LeMU..."`;
   Kid`"I mean the person that you thought was your mom up to now, isn't your mom, but..."`;
   You(Y5A031)`"A foster parent?"`;
   Kid`"Yeah."`;
   Kid`"Then your real dad could have died 34 years ago and your mom 15 years ago."`;
   Kid`"So somebody that took pity on the orphaned daughter, took you in and raised you..."`;

});
bgload({ name: `EV_YU03B`, transition: 20 });
showTextbox();
text(() => {
   You(Y5A032)`"But...that's impossible."`;
   Kid`"Why?"`;
   You(Y5A033)`"Because Yoichi Tanaka isn't my real father."`;
   You(Y5A034)`"I mean it has to be true."`;
   You(Y5A035)`"He died 34 years ago, right?"`;
   You(Y5A036)`"And I was born 18 years ago."`;
   You(Y5A037)`"To be precise, I was born on September 22, 19 years ago."`;
   You(Y5A038)`"In either case, my father would have had to have been alive until December of 20 years ago."`;
   `I figured that was an area I didn't really know much about, so I held my tongue...`;
   `But she was right. It did sound fishy.`;
   `The question was how to fill in the missing years...`;
   Kid`"No way..."`;

});
bgload({ name: `EV_YU03A`, transition: 20 });
showTextbox();
text(() => {
   You(Y5A039)`"What?"`;
   Kid`"Uh...nothing."`;

});
bgload({ name: `EV_YU03B`, transition: 20 });
showTextbox();
text(() => {
   You(Y5A040)`"What? Tell me? You can't start to say something and stop like that."`;
   Kid`"I don't think this could ever happen, but..."`;
   Kid`"What if you were actually 33-years-old..."`;

});
bgload({ name: `EV_YU03C`, transition: 20 });
showTextbox();
text(() => {
   You(Y5A041)`"Kyaaa, ha, ha! Me? 33?"`;
   You(Y5A042)`"You think with my skin I look like I could be in my 30s?"`;

});
choice(
   `You look it`,
   `You don't look it`,
);
switch (l_choice) {
   case 0: goto(lbl_000002d7);
   case 1: goto(lbl_000002ef);
}
let lbl_000002d7;
showTextbox();
text(() => {
   Kid`"You look it."`;

});
bgload({ name: `EV_YU03B`, transition: 20 });
showTextbox();
text(() => {
   You(Y5A043)`"Whaaaaat?"`;

});
let lbl_000002ef;
showTextbox();
text(() => {
   Kid`"You don't look it."`;

});
if (l_choice != 0) goto(lbl_00000317);
bgload({ name: `EV_YU03C`, transition: 20 });
let lbl_00000317;
showTextbox();
text(() => {
   You(Y5A044)`"Right?"`;
   You(Y5A045)`"Now, jokes aside..."`;

});
bgload({ name: `EV_YU03A`, transition: 20 });
showTextbox();
text(() => {
   You(Y5A046)`"If I were 33-years-old, that would mean there was 15 year gap in my memory."`;
   You(Y5A047)`"Where in the world could those 15 years have gone?"`;
   You(Y5A048)`"I've never had amnesia like you, don't remember being abducted by aliens and haven't had any Rip Van Winkle like experiences either."`;
   Kid`"........."`;
   `(Rip Van what...?)`;
   You(Y5A049)`"That would mean when I was 12, I was really 27?"`;
   You(Y5A050)`"That couldn't be, right?"`;
   You(Y5A051)`"Or that when I was five, I was actually 20. That's even more impossible."`;
   You(Y5A052)`"In the 18 years and seven months of my life I've never once felt a gap of 15 years."`;
   `(A 15 year gap...?)`;
   Kid`"Listen. Sorry to stop you, but let's get back on topic..."`;
   You(Y5A053)`"?"`;
   Kid`"You were just talking about Rip Van Winkle, right?"`;
   You(Y5A054)`"And?"`;
   Kid`"He falls asleep and..."`;
   You(Y5A055)`"Huh?"`;
   `(Rip Van Winkle...he falls asleep...and when he returns home...)`;
   `(When he returns home...)`;
   Kid`"I got it! I got it!"`;
   Kid`"This is probably what happened."`;

});
bgload({ name: `EV_YU03B`, transition: 20 });
showTextbox();
text(() => {
   You(Y5A056)`"You probably traveled through time!"`;
   You(Y5A057)`"...Would you stop talking about these stupid theories of yours?"`;
   Kid`"But it would explain everything!"`;
   Kid`"Somewhere along the line, maybe when you were small before you can even remember, I'll bet you jumped 15 years into the future."`;
   Kid`"You were probably really born 33 years ago..."`;
   Kid`"That would mean that if Yoichi died 34 years ago it all makes sense."`;
   You(Y5A058)`"Geez...how many times are you going to have to say that before you are satisfied?"`;
   You(Y5A059)`"Time travel is a physical impossibility."`;
   You(Y5A060)`"Just like...."`;
   Kid`"...Water flows downhill..."`;
   Kid`"BUT, if you use a siphon, you can move water up hill!"`;
   You(Y5A061)`"That's not what I mean."`;
   You(Y5A062)`"It's just an example, an analogy..."`;
   Kid`"But...but..."`;
   Kid`"But you're not the only one that experienced time travel!"`;
   Kid`"I...I did too..."`;
   Kid`"But my time travel was different..."`;
   Kid`"And I think it is probably the reason that I get premonitions about things."`;
   Kid`"I was trapped here in LeMU before."`;
   You(Y5A063)`"How can you be so sure about it?"`;
   You(Y5A064)`"How can you be so absolutely confident about it?"`;
   You(Y5A065)`"Even if...IF..."`;
   You(Y5A066)`"Just suppose that you did travel through time..."`;
   You(Y5A067)`"Where is the other Kid, the other you?"`;
   Kid`"The other me?"`;

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
   `


${noWait}`;
   `              'Life readings: 7'`;
   fadeClearPage();
});
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
bgload({ name: `EV_YU03B`, transition: 10 });
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   `I remembered on the night of May 1, when the numbers for the life scan kept changing. `;
   You(Y5A068)`"Yes, the other you."`;
   You(Y5A069)`"You're saying that you have been repeating the several days of being trapped here, right?"`;
   You(Y5A070)`"If so, then the past you should be here as well."`;
   Kid`"That's...uh...I..."`;
   Kid`"I know! Only my memory is going back through time!"`;
   You(Y5A071)`"Even though you forgot everything?"`;
   Kid`"That's exactly why I've lost my memory!"`;
   Kid`"Normally anything like a memory going back through time would defy common sense."`;
   Kid`"But this time common sense is being defied..."`;
   Kid`"My brain couldn't deal with the situation and started to panic. So it tried to logically explain or deal with the situation."`;
   Kid`"And so it erased all of my memories."`;
   You`"........."`;
   Kid`"........."`;
   You(Y5A072)`"Uh...I don't mean to take the air out of you after your enthusiastic speech, but..."`;
   You(Y5A073)`"We don't call that logical."`;
   You(Y5A074)`"I'm pretty sure the word is pathological. And sometimes they add the word delusional for good measure."`;

});
removeBG({ mode: BLACK, transition: 1 });
stopBGM();
showTextbox();
text(() => {
   `....`;
   `....`;
   `....`;
   `So the day ended without us finding any answers.`;

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
   `The next morning -`;
   `Everybody slept in.`;
   `It looked like everyone was pretty beat.`;
   `When You and I saw each other we exchanged good mornings as if everything were normal.`;
   `It seemed like she wanted to act as if things were the same as always in front of everybody else.`;
   `So I did my best to follow suit.`;
   fadeClearPage();
});
hideTextbox();
bgload({ name: `BG21B1`, transition: 20 });
hideTextbox();
ADV_Mode();
clock(`8:37`);
showTextbox();
text(() => {
   `Sleeping in made breakfast later than usual.`;
   `Sora had put in a request and we were going to have another picnic.`;
   `She really seemed to enjoy them.`;
   `We spread out the same Myumyun blanket near the rest area.`;

});
bgload({ name: `BG07B1`, transition: 20 });
showTextbox();
text(() => {
   `I went to go check on the trap that we had set the night before, while everyone was preparing, just in case we'd caught something.`;
   `But just as I got to where we'd set it, I saw Takeshi breaking down the trap.`;

});
fgload({ id: 1, name: `KB08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid`"Huh? You're cleaning it up?"`;
   `Takeshi nodded silently.`;
   Kid`"Meaning...that...?"`;
   Takeshi`"........."`;
   `Takeshi's shoulders slumped and he let out a big sigh.`;
   `He looked so pathetic...I couldn't say anything else.`;

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
   `When we had finally got everything ready, Tsugumi appeared out of nowhere.`;
   `She again plopped herself down on the sheet and started munching away.`;
   `I didn't know if Takeshi had matured over night, but he held his tongue, though it was clear he was in a sulky mood.`;
   `Sara and Tsugumi didn't look at each other. It seemed like they were ignoring each other.`;
   `Apparently they still weren't getting along.`;
   `But everybody tried to make the best of it, eating, chatting and having fun.`;

});
multifgload2({ id1: 1, id2: 4, name1: `SA01ADM`, name2: `YU01BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(Y5A075)`"Rock, paper, scissors!"`;
   Sara(Y5A076)`"Ready go!"`;
   Kid`"I lost again!"`;
   You(Y5A077)`"Kid, you're terrible at this. What is that? Sixteen losses in a row?"`;
   Kid`"Weird..."`;
   You(Y5A078)`"You're too nice. You have to just throw out what you feel - rock, paper or scissors."`;
   Sara(Y5A079)`"He's the gullible type."`;
   Kid`"I am not. I'm trying to win."`;
   You(Y5A080)`"Rock, paper, scissors. Ready go!"`;
   Kid`"Dang it!"`;
   `I just kept losing.`;
   You(Y5A081)`"Could be, that with your amnesia, your ability to make decisions isn't so good right now."`;
   You(Y5A082)`"Don't get too caught up with the trivial things that you can't control."`;
   You(Y5A083)`"You need to be strong. Make up your own mind. Or you'll just end up following everybody else."`;
   Kid`"I know..."`;
   You(Y5A084)`"That being as it is..."`;

});
multifgload2({ id1: 1, id2: 4, name1: `SA02ADM`, name2: `YU02BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(Y5A085)`"Time for the LOSER'S PENALTY!"`;
   You(Y5A086)`"Hand over your sandwich."`;
   Kid`"..."`;
   `Silently, I held out my sandwich.`;
   Sara(Y5A087)`"All righty!"`;

});
multiremoveFG({ id1: 1, id2: 4, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `She squeezed a ton of mustard on to my sandwich.`;
   `The penalty was mustard. And my sandwich was already drenched in the stuff.`;
   `My mouth felt like it was on fire before I even took a bite.`;
   `...Maybe thanks to that exchange, I was able to get through the whole thing without thinking about it too much.`;
   `Suddenly, someone cut across my field of vision.`;
   `It was Tsugumi.`;
   `Tsugumi was walking toward Takeshi. She extended her hand.`;

});
multifgload2({ id1: 1, id2: 2, name1: `TU15ADM`, name2: `KB14ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(Y5A088)`"Huh? What's with the hand?"`;
   Tsugumi`"..."`;
   Takeshi(Y5A089)`"You're like a dog. Shake girl."`;
   Takeshi(Y5A090)`"And you'll probably say 'don't make fun of me!'"`;

});
fgload({ id: 1, name: `TU18ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(Y5A091)`"You're really dumb, you know that?"`;
   Sora(Y5A092)`"Are you trying to say that you want another helping?"`;

});
fgload({ id: 1, name: `TU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi nodded at Sora's extra explanation.`;
   `She had already wolfed down her first one.`;
   Takeshi(Y5A093)`"Hey...you've gotta lot of nerve...you only show your face at meal time and now you're demanding seconds..."`;

});
fgload({ id: 2, name: `KB11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(Y5A094)`"Well, I suppose..."`;
   Tsugumi(Y5A095)`"So do you have more or not?"`;
   Takeshi(Y5A096)`"I do. I thought you might want more so I made a SPECIAL one for you."`;
   Kid`"Special?"`;
   `I had a bad feeling about the whole thing.`;
   Takeshi(Y5A097)`"Eat this. And no leftovers."`;
   Tsugumi`"..."`;
   `Tsugumi took the sandwich without saying anything.`;
   Takeshi`"..."`;
   `Takeshi stared at Tsugumi as she took the wrap off of the sandwich.`;

});
fgload({ id: 1, name: `TU18ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(Y5A098)`"...What?"`;

});
fgload({ id: 2, name: `KB12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(Y5A099)`"Nothing. It's just that you're so beautiful. I can't take my eyes off of you even when you're just removing a sandwich wrapper..."`;
   Tsugumi(Y5A100)`"Your stupidity is terminal."`;
   Tsugumi(Y5A101)`"Maybe if you died 50 times it would help."`;
   Takeshi`"..."`;
   `I thought Takeshi would get angry.`;
   `But he was just grinning as he watched Tsugumi start in on her sandwich.`;
   `Something was definitely not right here. I sucked in my breath and watched.`;
   `Tsugumi bit into the sandwich.`;
   `Munch.`;
   `Chomp. Chew.`;

});
fgload({ id: 1, name: `TU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(Y5A102)`"Hmmm?"`;

});
fgload({ id: 2, name: `KB12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(Y5A103)`"Hee, heee..."`;
   Takeshi(Y5A104)`"Fwaaa, ha, ha, ha, ha, ha..."`;
   Tsugumi`"..."`;
   Takeshi(Y5A105)`"It's got quite a flavor, huh? That sandwich...ha, ha,ha..."`;
   `Takeshi laughed so hard he cried.`;
   Takeshi(Y5A106)`"It's packed with mustard, Tabasco, pepper, sage, nutmeg, cinnamon, mint and a dose of curry powder..."`;
   Takeshi(Y5A107)`"For good measure I added a dose of mayonnaise, ketchup, sugar, salt, soy sauce, vinegar and vanilla..."`;
   Takeshi(Y5A108)`"And...what else? Oh, I forget..."`;
   Takeshi(Y5A109)`"Anyway, I threw in every ingredient and spice that I could find. It's my secret 34 ingredient sauce."`;
   Tsugumi`"..."`;
   You(Y5A110)`"H...hey! That's just too cruel!"`;
   Sara(Y5A111)`"Yeah...!"`;
   Kid`"That's going too far, Takeshi!"`;

});
fgload({ id: 2, name: `KB04ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(Y5A112)`"Shut up! I'm the cook here."`;
   Sora(Y5A113)`"Tsugumi...I highly recommend inducing vomiting immediately...!"`;
   Sora(Y5A114)`"Get water quickly! N...no...we'll need medicine first...!"`;

});
fgload({ id: 2, name: `KB11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(Y5A115)`"She'll be fine. She'll get the runs, but she won't die."`;
   Kid`"That's not something you should do to a girl."`;
   `I went to grab Takeshi with my left hand.`;

});
fgload({ id: 1, name: `TU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(Y5A116)`"Wait. I'm fine."`;
   `Tsugumi mumbled this, stopping us.`;

});
fgload({ id: 2, name: `KB14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(Y5A117)`"Huh, well aren't you tough!"`;
   Tsugumi(Y5A118)`"I'm perfectly fine."`;

});
fgload({ id: 2, name: `KB12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(Y5A119)`"But it still tastes terrible, right? Right? Tell the truth."`;

});
fgload({ id: 1, name: `TU16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(Y5A120)`"I'm totally fine..."`;

});
stopBGM();
showTextbox();
text(() => {
   Tsugumi(Y5A121)`"It tastes kind of like pizza."`;

});
fgload({ id: 2, name: `KB11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid`"........"`;
   Takeshi`"........."`;
   You`"........."`;
   Sara`"..............."`;
   Sora`"..............."`;

});
playBGM({ num: 18, volume: 100 });
showTextbox();
text(() => {
   `What?`;

});
fgload({ id: 2, name: `KB13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(Y5A122)`"What did you just say? What's it taste like?"`;
   Tsugumi(Y5A123)`"Pizza."`;
   Takeshi(Y5A124)`"Are you serious?"`;
   `Tsugumi nodded.`;
   Takeshi`"........."`;
   Tsugumi(Y5A125)`"Munch, munch..."`;

});
fgload({ id: 2, name: `KB14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(Y5A126)`"Hey...let me see that! That can't be!"`;

});
fgload({ id: 1, name: `TU02ADM`, x: 128, useAnim: true });
removeFG({ id: 2, useAnim: true });
showTextbox();
text(() => {
   `Takeshi went to grab the sandwich, but Tsugumi was too quick for him. Not only that, Takeshi caught his foot and fell to the floor.`;
   `In that instant, Tsugumi polished off the sandwich.`;
   Tsugumi(Y5A127)`"Thanks for the sandwich."`;
   Tsugumi(Y5A128)`"You made it specially for me, right?"`;
   Takeshi`".................."`;
   `So the event ended with Tsugumi turning the tables on Takeshi.`;

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
   `I ended up cleaning the area up afterward.`;
   `I separated the cans and sandwich wrappers and put them in garbage bags.`;
   `You and Sara helped.`;
   `Takeshi said he was going to start getting ready for lunch and headed to the kiosk.`;
   `Sora said she had to do some maintenance on LeMMIH and left for the Control Room.`;
   `Tsugumi disappeared to somewhere unknown.`;
   `....`;
   `But something happened when I was picking up garbage.`;

});
stopBGM();
showTextbox();
text(() => {
   //??
   Unk(T5B003)`"Hello there!"`;
   Kid`"Huh?"`;

});
multifgload2({ id1: 1, id2: 4, name1: `SA06ADM`, name2: `YU06BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(Y5A129)`"What? What's the matter?"`;
   Kid`"Nothing..."`;
   Kid`"Did somebody just call out?"`;
   You(Y5A130)`"What?"`;
   Sara(Y5A131)`"Nobody said anything."`;
   Kid`"Really? Must be my imagination..."`;

});
fgload({ id: 1, name: `SA05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(Y5A132)`"I'll bet you're just trying to find a way to get out of helping."`;
   Kid`"I'm not. It's not that at all."`;

});
fgload({ id: 4, name: `YU03BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(Y5A133)`"You hearing your mystery voices again?"`;
   Kid`"Well, I..."`;
   You(Y5A134)`"Please, don't do that again. Get a hold of yourself already."`;
   You(Y5A135)`"I know you're tired, but..."`;
   Kid`"........."`;

});
multiremoveFG({ id1: 1, id2: 4, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `We started picking up garbage again.`;
   `We finally finished with the trash, folded the blanket and were done cleaning up.`;

});
multifgload2({ id1: 1, id2: 4, name1: `SA01ADM`, name2: `YU01BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(Y5A136)`"Now we'll just sweep the area."`;
   You(Y5A137)`"Mayo. Can you do me a favor and get me a broom and dustpan? I think they are at the kiosk."`;
   Sara(Y5A138)`"Roger that!"`;

});
multiremoveFG({ id1: 1, id2: 4, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `Sara set out for the kiosk.`;
   Kid`"I was just thinking. This must be a nightmare for the people that clean this place."`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y5A139)`"It would be if 'people' had to do it."`;
   You(Y5A140)`"But LeMMIH usually uses a cleaning robot that automatically cleans the whole complex."`;
   Kid`"Wow."`;
   You(Y5A141)`"Well, what with the accident and all, I imagine the robot is a rusted pile of junk metal at the bottom of the ocean right about now."`;
   Kid`"I'll bet."`;
   //??
   Unk(T5B017)`"Heave ho, heave ho!"`;
   `(...What?)`;
   `I...I was hearing voices again.`;
   You(Y5A142)`"Thinking about it, I guess that LeMU is just one massive pile of scrap metal."`;
   You(Y5A143)`"I suppose it's just of matter of how it's destroyed..."`;

});
fgload({ id: 1, name: `YU06BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y5A144)`"What? What's the matter?"`;
   Kid`"Um..."`;
   You(Y5A145)`"You're not...not again?"`;

});
playBGM({ num: 13, volume: 100 });
showTextbox();
text(() => {
   Kid`"..."`;

});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y5A146)`"Oh...alright. You've done enough. Just go to the infirmary or somewhere and rest."`;
   You(Y5A147)`"You've got a serious condition of something..."`;
   `I was sure I'd heard something...`;
   `This time, I was sure it wasn't my imagination.`;
   //??
   Unk(T5B019)`"I'm carving."`;
   //??
   Unk(T5B020)`"Can't you see. I'm carving..."`;
   `(See, I really can hear something.)`;
   //??
   Unk(T5B021)`"I'm etching some marks into the stone."`;
   `(...Stone statue?)`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I looked around the four stone statues at the edge of the open area.`;
   `And there....`;

});
bgload({ name: `EV_CO19C`, transition: 20 });
showTextbox();
text(() => {
   `Atop the pedestal of a stone statue was a girl.`;
   `She was standing there next to the figure as if clinging to the statue.`;
   `(Oh! It's that girl...)`;
   `It was the girl that I had seen and who had then vanished on the first day.`;
   Kid`"Look, You! Right there!"`;

});
bgload({ name: `BG21B1`, transition: 20 });
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y5A148)`"Huh?"`;
   Kid`"Look! Over on that statue!"`;
   You(Y5A149)`"What about the statue?"`;
   Kid`"Look! That stone statue! There's a girl there! See?"`;

});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y5A150)`"Huh? I don't see anybody."`;
   Kid`"Not there! Over there!"`;
   Kid`"Oh, forget it! I'll go call to her!"`;
   You(Y5A151)`"Kid!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I sprinted toward the stone statue.`;
   `(What could the girl be doing up there?)`;
   //??
   Unk(T5B023)`"Well, it's because..."`;
   //??
   Unk(T5B024)`"I was feeling lonesome."`;
   `Lonesome?`;
   //??
   Unk(T5B025)`"And anyway, I was..."`;
   //??
   Unk(T5B026)`"...feeling sad..."`;
   `Sad?`;
   `(What is she talking about?)`;
   //??
   Unk(T5B043)`"And next..."`;
   //??
   Unk(T5B044)`"Uh oh!"`;
   `Just then the girl lost her balance, falling from her awkward place on the pedestal.`;

});
bgload({ name: `EV_CO19D`, transition: 20 });
showTextbox();
text(() => {
   Kid`"L-look out!"`;
   `I ran toward her.`;
   `The water caught on my feet and sprayed everywhere as I ran all out to where she was.`;
   `(Will I make it?)`;

});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `I closed my eyes, mustered all of my power and sprinted.`;
   `I threw out my free left hand to where the girl would be falling to catch her.`;

});
hideTextbox();
playSFX({ name: `SE02_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Splash!`;
   `....`;
   `....`;
   `....`;
   `I didn't feel anything.`;
   `I thought maybe I hadn't reached her in time.`;
   `Scared, I opened my eyes.`;

});
hideTextbox();
stopSFX()
bgload({ name: `BG21B1`, transition: 20 });
showTextbox();
text(() => {
   `(...What?)`;
   `There was no one in my arms.`;
   `Or even around me.`;
   `Only the water sloshing about gently around me.`;
   You(Y5A152)`"Hey, are you alright? It looks like you took a pretty nasty spill..."`;
   Kid`"..."`;

});
bgload({ name: `IT05E`, transition: 0 });
showTextbox();
text(() => {
   `I looked above me.`;
   `Of course there was no one on the pedestal supporting the statue.`;
   `Without saying anything, I got up and went behind the statue.`;

});
bgload({ name: `IT05F`, transition: 0 });
showTextbox();
text(() => {
   `There were scratches in the statue.`;
   `There were deep notches that looked like they had been carved there by something hard and sharp.`;
   `They were the shape of people.`;
   `Really simple looking like stick people.`;
   `At the end of each stick was a little round face...`;
   `There were six in all.`;
   `Looking closer, I saw that next to the people figures were two carvings of animals that I'd never seen.`;

});
bgload({ name: `IT05E`, transition: 0 });
showTextbox();
text(() => {
   `I looked up at the statue.`;
   `The statue was pointing diagonal and up...toward the east.`;

});
bgload({ name: `BG21B1`, transition: 20 });
showTextbox();
text(() => {
   Sara(Y5A153)`"Hey, what are you two doing?"`;
   You(Y5A154)`"That's a good question..."`;
   `I ignored them and gently touched the carvings on the statue.`;
   `Without thinking I blurted out - `;
   Kid`"Watch your step, okay?"`;
   //??
   Unk(T5B048)`"Okay!"`;
   `That answer could have been my imagination that time...`;

});
hideTextbox();
removeBG({ mode: BLACK, transition: 2 });
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
   `After that I decided to go to the infirmary and sleep.`;
   `It wasn't that I was feeling ill.`;
   `It was simply that I was not getting enough sleep. I wanted some quality rest.`;
   `I slept so deeply that I didn't even dream...`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `When I awoke it was already around evening.`;
   `There was a memo by the bed.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `'We will be in the Conference Room until dinner.`;
   `If you wake up by then, please come along.`;
   `I'm sorry for making you hang out with me the last couple days.`;
   `Please make sure that you get enough rest.`;
   `You'`;

});
showTextbox();
text(() => {
   `${noWait}`;
   `Judging from the signature, it seemed that You had left it.`;
   fadeClearPage();
});
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   `I got out of bed, stretched and left the room.`;

});
bgload({ name: `BG26A3L`, transition: 20 });
clock(`16:22`);
showTextbox();
text(() => {
   `I started walking in the direction opposite of the Conference Room.`;
   `I decided to take a walk around the complex for fun.`;

});
bgload({ name: `BG23A1`, transition: 20 });
bgload({ name: `BG24A1`, transition: 20 });
playSFX({ name: `SE00_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I got into EI.`;
   `I thought that it might make for a good change of pace to walk around a floor I hadn't spent much time on.`;
   `...That was my thinking.`;

});
bgload({ name: `BG24A2`, transition: 20 });
stopSFX()
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
playSFX({ name: `SE00_02`, a1: 0, volume: 100 });
bgload({ name: `BG23B1`, transition: 20 });
stopSFX()
showTextbox();
text(() => {
   `I got off on the flooded third floor.`;
   `I wondered where I should go...`;
   `I looked around, thinking.`;

});
stopBGM();
showTextbox();
text(() => {
   `...It was then that it happened.`;
   `I saw 'the girl' again!`;
   Kid`"Oh!"`;
   `I saw her small figure cutting across the corridor.`;
   `I was sure of it.`;
   `It was that girl!`;
   `I chased after her.`;

});
stopBGM();
playBGM({ num: 11, volume: 100 });
bgload({ name: `BG26B3L`, transition: 20 });
showTextbox();
text(() => {
   `Her skirt shook back and forth as she walked further and further away.`;
   `It was almost as if she were trying to get away from me.`;
   Kid`"Hey! Wait a minute!"`;
   `She might not have heard me and she didn't show any sign of stopping.`;
   `I wondered what it was all about.`;
   `This girl that kept appearing out of nowhere and then disappearing.`;
   `This girl that didn't register on LeMMIH's bio scan.`;
   `No, she had registered once...`;

});
removeBG({ mode: WHITE, transition: 2 });
showTextbox();
text(() => {
   `'Life readings: 7'`;

});
bgload({ name: `BG26B3L`, transition: 20 });
showTextbox();
text(() => {
   `But the more I thought about it, the stranger everything seemed.`;
   `She only appeared in front of me and we hardly communicated...`;
   `Well, I couldn't worry about it. I knew it wouldn't help.`;
   `It was something that I could only solve by asking her directly.`;

});
bgload({ name: `BG25B3`, transition: 20 });
showTextbox();
text(() => {
   `She headed into the Cosmic Whale Room.`;
   `I followed in soon after her.`;

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
   `The room was dimly lit.`;
   `A massive whale floated like a majestic phantasm, in the cosmic room.`;
   `The girl was in the middle of the room.`;

});
playBGM({ num: 22, volume: 100 });
showTextbox();
text(() => {
   `She was facing away from me, sitting and hugging her knees.`;
   Kid`"I finally...caught up..."`;
   `I approached her as I caught my breath.`;
   `...I heard singing.`;
   `It sounded like phrases from a children's song.`;
   //??
   Unk(Y5A155)`"Moon sprite...shouldering a...long bow."`;
   //??
   Unk(Y5A156)`"Waiting inside a dream."`;
   `I felt like...`;
   `I had heard the lyrics somewhere before.`;

});
if (l_chose_to_wait_there_in_2nd_day == 0) goto(lbl_00000ad4);
showTextbox();
text(() => {
   `And recently...`;

});
goto(lbl_00000ad9);
let lbl_00000ad4;
showTextbox();
text(() => {
   `Somewhere, I was sure...`;
   `In the distant, distant past...`;

});
let lbl_00000ad9;
showTextbox();
text(() => {
   `I wondered if it was my missing memory that was making me feel that way...?`;
   Kid`"Hey, you."`;
   `Her shoulders jumped with shock and she stopped singing.`;

});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Slowly, she turned back to look at me.`;
   `It was the girl after all.`;
   Kid`"Why do you run away from me?"`;
   //??
   Unk`"........."`;
   Kid`"Oh, well. I guess it doesn't matter."`;
   `It really did matter to me, but since I had finally been able to confront the girl, I felt a surge of relief.`;
   Kid`"Well, why don't we go where everyone else is?"`;
   `I held out my hand as I said this.`;
   `Finally, she stood up and spoke.`;

});
showTextbox();
text(() => {
   //??
   Unk(Y5A158)`"Brother..."`;
   Kid`"...What?"`;
   //??
   Unk`"........."`;
   `The girl just stared at my face.`;
   Kid`"L...let's go!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I took her hand and tugged it as I began to walk.`;
   `The inside of my mind was churning...`;
   `It was because of what she had just said.`;
   `Inside of me it felt like another me was screaming.`;
   `...That was how I felt.`;

});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
stopBGM();
delay({ interval: 120 });
bgload({ name: `BG17A1`, transition: 26 });
showTextbox();
text(() => {
   Kid`"I found another girl!"`;

});
hideTextbox();
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `I burst into the Conference Room as I shouted this.`;
   `Of course, I was still leading the girl by the hand.`;
   `Everyone turned to look at me at once.`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU06BDM`, name2: `TU06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(Y5A159)`"Huh?"`;
   You(Y5A160)`"Another what?"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `KB07ADM`, name2: `SO06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(Y5A161)`"Who are you talking about?"`;
   Sora(Y5A162)`"Are you talking about...THAT girl?"`;
   Kid`"Yeah. I found her in the Cosmic Whale Room and brought her here."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU07BDM`, name2: `TU06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   You`"........."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `KB07ADM`, name2: `SO07ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"........."`;
   Sora`"........."`;
   Kid`"W...what's the matter with everyone?"`;
   Kid`"Why aren't you surprised?"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU07BDM`, name2: `TU07ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(Y5A163)`"Maybe you better rest for a while."`;
   Kid`"What?"`;
   //??
   Unk(Y5A164)`"Hey, hey!"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `The girl was tugging at my sleeve.`;
   `I turned to look at her.`;
   `But...`;
   `The girl that I had brought back was...`;

});
playBGM({ num: 4, volume: 100 });
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y5A165)`"What are you doing...dragging me here all of the sudden?"`;
   Kid`"S-Sara...?"`;
   Sara(Y5A166)`"???"`;
   `I looked back at everyone.`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU07BDM`, name2: `TU06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Kid`"T-this isn't right! I swear, I saw her!"`;
   Kid`"We were walking here hand-in-hand. It wasn't Sara..."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SO17ADM`, name2: `SA11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(Y5A167)`"Is that right? Sara?"`;
   Sara(Y5A168)`"No. I didn't see anybody else."`;
   Sara(Y5A169)`"The Kid just suddenly grabbed my hand..."`;
   Kid`"What?"`;
   Kid`"Sara...why are you lying...?"`;

});
multifgload2({ id1: 1, id2: 2, name1: `SO03ADM`, name2: `SA04ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(Y5A170)`"Huh? What're you talking about? You're the one that's lying?"`;
   Kid`"W-what...?"`;
   Kid`"The girl was in the Whale Room...she was sitting down hugging her knees."`;
   Kid`"She was singing some kind of phrases to a kid's song."`;
   Sara(Y5A171)`"I'm telling you that was me!"`;
   `Sara was red-faced and shouting.`;
   Sara(Y5A172)`"You don't have to tell everybody about it!"`;
   Kid`"........."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `(Geez, what's with her...?)`;
   `(What's going on here...)`;

});
fgload({ id: 1, name: `YU03BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y5A173)`"Oh my!"`;
   `You groaned as she slapped her forehead with her hand.`;
   You(Y5A174)`"Kid? Just forget about everything else and get some rest."`;
   You(Y5A175)`"I'll bring you some dinner later."`;
   Kid`"..............."`;

});
fgload({ id: 1, name: `YU13BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y5A176)`"What is going on with this guy...?"`;

});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
removeFG({ id: 1, useAnim: false });
showTextbox();
text(() => {
   `I thought about a lot of things as I plodded to the infirmary.`;

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
   `Things leading to that point.`;
   `Things to come.`;
   `The odd things going on.`;
   `Things I couldn't figure out.`;
   `Things I needed to find out.`;
   `Things I needed to decide.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Everything I had been trying to avoid thinking about all rushed in to my mind at once, making it a confused mess.`;
   `I couldn't help thinking...and worrying...about things.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `About You.`;
   `What if the man who had died 34 years before wasn't You's father?`;
   `Then who was her real father?`;
   `Was the woman that died 15 years before really You's mother?`;
   `If not, then who was?`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `About me.`;
   `Why did I keep having premonitions of the future? What did it mean?`;
   `Who was the girl? Why had I mistaken Sara for her?`;
   `Why had I even lost my memory in the first place?`;
   `What had happened to me in my past?`;
   `What did Tsugumi know about all of this?`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `And...`;
   `Why were we all trapped in LeMU?`;
   `Was it just an accident?`;
   `Or something else...`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
dimOff_ac = 0;
closeDimOverlay();
bgload({ name: `IMG01A`, transition: 26 });
hideTextbox();
ADV_Mode();
delay({ interval: 120 });
stopBGM();
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`20:19`);
showTextbox();
text(() => {
   `A few hours later, the installation started to flood again.`;

});
showTextbox();
text(() => {
   `'Dritte stock - from the partition to the Cosmic Whale was submerged.'`;
   `'Casualties: None'`;
   `'Flooding to other rooms: None'`;
   `'Chance of damage spreading: None...'`;
   `Sora's voice conveyed the situation over the intercom in a matter-of-fact tone.`;
   `The Cosmic Whale Room...`;
   `I had been there until just shortly before the flooding.`;
   `But somehow it felt like some event that had taken place thousands of miles away.`;
   `I covered my head with the blanket, closed my eyes and tried to sleep.`;
   `I tried to search.`;
   `...For the world I should be in.`;
   `...For the place I should return to.`;
   `...And for myself.`;

});
l_choice = 0;
jump(`SY6A`);
