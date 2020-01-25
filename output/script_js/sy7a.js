setDialogBoxColor(BLUE);
l_b0 = 5;
l_dayA = 7;
l_dayB = 0;
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
setSceneTitle({ index: 87 });
clock(`1:39`);
showTextbox();
text(() => {
   `Daybreak. The date had changed to Sunday, May 7.`;
   `Since that time, we hadn't slept at all.`;
   `I was starting to feel badly again.`;
   `A headache, dizziness, nausea and coldness felt like they were seeping from deep in the core of my body.`;
   `I felt a dull, severe fatigue sweep over me...I was only half-conscious.`;
   `Exhaustion...I had reached my limit.`;
   `But I tried to keep my energy from being sapped away.`;
   `Surrounded by darkness...and endless fear, we had fought our way this far...`;
   `And there was no sign that things were going to get better.`;
   `Communication lines with the outside were still down.`;
   `And...`;
   `We had yet to find a clue leading to possible escape.`;

});
hideTextbox();
playBGM({ num: 4, volume: 100 });
bgload({ name: `BG11A1`, transition: 20 });
showTextbox();
text(() => {
   `You remained distant and spacey. `;
   `Our optimistic leader that helped us through the days of distress was nowhere to be seen.`;
   `Someone had to save her...`;
   `But who?`;
   `Of course, it was up to me.`;
   `At this point, I was the only person who could help her.`;
   `Yet still...`;

});
removeBG({ mode: WHITE, transition: 2 });
showTextbox();
text(() => {
   You(Y4A061)`"Promise?"`;
   Kid`"Yeah, I promise."`;

});
bgload({ name: `BG11A1`, transition: 20 });
showTextbox();
text(() => {
   `The memory of that pledge remained stark in my mind.`;
   Kid`"Uh, Sora...?"`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(Y7A000)`"Yes, what can I do for you?"`;
   Kid`"I'm sorry to ask, but could you leave me alone with You for a second?"`;
   Sora(Y7A001)`"Certainly."`;
   Kid`"When we're done I'll call you."`;
   Sora(Y7A002)`"Okay."`;
   Kid`"I'm really sorry."`;
   Sora(Y7A003)`"Please, don't worry about it."`;
   Kid`"Thanks."`;

});
removeFG({ id: 1, useAnim: true });
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   `Sora vanished.`;
   `All traces of her completely disappeared.`;
   `Sora, who had no dimensional limits, had removed herself from our field of vision.`;
   `Now then...`;
   `Before continuing, I went to set the coffee machine to make fresh coffee.`;
   Kid`"You? You're drinking coffee, right?"`;
   You`"........."`;
   `Ignoring her lack of response, I set it to prepare two cups.`;
   `Then I sat down beside her.`;

});
hideTextbox();
playBGM({ num: 19, volume: 100 });
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid`"About your mother...I mean, I don't know what to say but..."`;
   Kid`"Don't you think you it's important to talk things over with her?"`;
   You`"........."`;
   Kid`"There may have been some reason why she did what she did..."`;
   Kid`"Look, she did say she'd explain everything once you're back on the floating island."`;
   Kid`"So..."`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y7A004)`"How dare you say that...like you know how this feels."`;
   Kid`"........."`;
   You(Y7A005)`"There's nothing left for me to say to her."`;
   You(Y7A006)`"Besides, it doesn't matter anymore..."`;
   You(Y7A007)`"I don't care what happens..."`;
   Kid`"Look, we've still got to find a way to escape this place...somehow."`;
   You(Y7A008)`"Yeah, why?"`;
   Kid`"Because I made you a promise."`;
   You(Y7A009)`"How are you going to keep it? Do you have some great plan to get us out of here?"`;
   Kid`"Well that's...what I want to figure out..."`;

});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y7A010)`"I bet..."`;
   Kid`"Look, we have to survive."`;
   Kid`"You, over these last seven days, I've learned so much from you."`;
   Kid`"In so many ways I can't even begin to count."`;
   Kid`"But out of everything I've learned from you, the most important thing is..."`;
   Kid`"How to live."`;
   Kid`"You have to live life to the fullest - that's what you've taught me."`;
   You`"........."`;
   Kid`"So I want to put that lesson into practice."`;
   Kid`"I want to live! To the fullest, to the end!"`;
   `It was a heartfelt plea.`;
   You(Y7A011)`"Listen, Kid..."`;
   Kid`"Yeah?"`;
   You(Y7A012)`"What does it mean... to live, anyway?"`;
   Kid`"........."`;
   Kid`"Well, living means..."`;
   Kid`"To learn and to know, I think."`;
   `A child is born in innocence...gains knowledge through the years...only to forget it all when it is old...and dies. `;
   `Over the previous seven days, my life had been filled with things that I had learned.`;
   `From amnesia and emptiness my life began.`;
   `But looking back over the last seven days, there was one more thing...`;
   Kid`"I also think that to live also means...to lose something."`;
   `They say "nothing ventured, nothing gained," but to gain something you must lose something.`;
   `Like me losing the past by losing my memory.`;
   `Even though I had lost much...I had also gained...`;
   You(Y7A013)`"To learn? To lose something?"`;

});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y7A014)`"So you're saying, that we live only to get hurt?"`;
   Kid`"........."`;
   Kid`"Maybe. I don't know."`;

});
fgload({ id: 1, name: `YU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y7A015)`"Well..."`;
   You(Y7A016)`"If living means to be hurt..."`;
   You(Y7A017)`"Then I've had enough..."`;
   You(Y7A018)`"I've had more than my share of hurt."`;
   You(Y7A019)`"And I've had enough of life...so..."`;
   Kid`"H-hey, wait a second!"`;
   Kid`"What are you trying to say, You...!"`;
   Kid`"You're not saying you want to die...?"`;
   You`"............"`;
   Kid`"............"`;
   Kid`"You can't be serious! What the hell's that all about!?"`;
   Kid`"I can't believe you're saying that! It's not like you at all!"`;
   Kid`"What happened to the You a little while ago... who was so ready to get out of here? What happened to that You?"`;
   You`".........."`;
   Kid`"Come on, what gives...?"`;
   Kid`"What came over you all of a sudden...?"`;
   Kid`"Why do you think you were born anyway...!?"`;

});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y7A020)`"Stop it..."`;
   You(Y7A021)`"Would you stop with the stupid, two-bit sermon... "`;
   Kid`"No, it's you who's talking stupid..."`;
   Kid`"All this selfish crap, as if your life belongs only to you!"`;

});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y7A022)`"That's not what I was thinking!"`;
   You(Y7A023)`"I don't think that, it's just..."`;
   You(Y7A024)`"All this time, the mother who I thought brought me into this world...she's gone."`;
   Kid`"But that other lady said she was your real mother."`;
   You(Y7A025)`"Well she's obviously lying!"`;
   Kid`"How do you know?"`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y7A026)`"Because..."`;

});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y7A027)`"...she's been lying to me from the start..."`;
   Kid`"Don't you think that's a little pointless right now?"`;
   You`"........."`;
   Kid`"I mean, you do understand, don't you...?"`;
   Kid`"That until you hear her side of the story...you can't go jumping to conclusions."`;
   You`"........."`;
   Kid`"I think you should live the best life you can, for all the people around you who care about you."`;
   Kid`"For your mother...and for Sara and Takeshi as well..."`;
   Kid`"And for me..."`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y7A028)`"...For you?"`;
   Kid`"I said it before, but there's so much that I've learned from you."`;
   Kid`"I'm so very grateful to you."`;
   Kid`"Really."`;
   You`"........."`;
   Kid`"You, you're a friend, a guardian, a teacher... "`;
   Kid`"And..."`;
   Kid`"And..."`;
   You`"......"`;
   `I walked back to the coffee machine and poured two cups of coffee.`;
   Kid`"You said earlier that you've already lived enough, right?"`;
   Kid`"But I don't think it's enough."`;
   Kid`"Because I think there is still stuff you need to learn."`;
   You(Y7A029)`"...you mean about my mother?"`;
   Kid`"That's one thing, yes."`;
   Kid`"By the way, how much sugar do you take?"`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y7A030)`"Ah, I..."`;
   `Not listening, I added two spoonfuls.`;
   Kid`"I was thinking...don't you think sugar in coffee reminds you of something?"`;
   You(Y7A031)`"??"`;
   Kid`"You know, something that life depends on."`;

});
showTextbox();
text(() => {
   You(Y7A032)`"Huh...?"`;
   Kid`"Do you have any idea?"`;
   You(Y7A033)`"I guess not."`;
   Kid`"See...that's two things? Things you don't know that you should learn."`;

});
showTextbox();
text(() => {
   You`"........."`;
   Kid`"Makes you want to know, doesn't it?"`;
   You(Y7A034)`"A little...I guess."`;
   Kid`"Well, if we get out of here alive, I'll tell you what it is."`;
   `I added milk and sugar and carried the two cups over.`;
   Kid`"There you go."`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y7A035)`"...Thanks."`;
   `You took the cup and silently sipped from it.`;
   Kid`"How does it taste?"`;
   You`"........."`;
   `Were my feelings...`;
   `...Finally getting across to her?`;

});
showTextbox();
text(() => {
   You(Y7A036)`"It's...very sweet."`;
   `She had a clear gentle smile, like the sun shining just after a rain.`;

});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
stopBGM();
delay({ interval: 120 });
playBGM({ num: 14, volume: 100 });
bgload({ name: `BG11A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
setSceneTitle({ index: 88 });
clock(`2:21`);
showTextbox();
text(() => {
   `I called Sora back into the room. All survivors remaining inside the park were now present.`;
   `The three of us began to discuss new strategies.`;
   `The walls of LeMU would only hold two more hours at most.`;
   `Our last possible escape route had been shut off, filling with floodwater just a few hours earlier.`;
   `All hope of communicating with the outside was gone.`;
   `The situation had become so desperate that I could no longer expect You or Sora to find an escape route.`;
   You(Y7A037)`"Isn't there anything we can do...?"`;
   `You lifted the coffee cup to her lips as she spoke.`;
   `Her cup now contained only black coffee. She had refilled it herself.`;
   `Watching her drink I went to take a sip from my own cup, but found it empty.`;
   `To pour myself more, I walked back to the coffee machine.`;
   `The machine...was an interesting contraption with a lower chamber containing boiling water heated from an alcohol lamp.`;
   `The steam from the boiling water was siphoned into the upper chamber through a central pipe. `;
   `Siphon...`;
   `Siphon......`;
   `Siphon.........`;

});
stopBGM();
showTextbox();
text(() => {
   Kid`"I got it!"`;
   Kid`"Sora? Could you show me that cross-sectional diagram again!"`;

});
bgload({ name: `MAP06A`, transition: 20 });
playBGM({ num: 15, volume: 100 });
showTextbox();
text(() => {
   Kid`"What's this perpendicular line coming straight down from the floating island?"`;
   Sora(Y7A038)`"It's an emergency stairwell."`;
   Kid`"This area wasn't dry earlier...?"`;
   Sora(Y7A039)`"No, but I was able to drain it yesterday so..."`;
   Sora(Y7A040)`"When the flooding started, the watertight doors in the emergency stairwell automatically closed."`;
   Sora(Y7A041)`"Therefore, the emergency stairs did not allow water in after it had finished draining."`;
   Sora(Y7A042)`"It was thanks to the safety doors closing automatically that Takeshi, Sara and Tsugumi survived."`;
   Kid`"How far is it from this room to the emergency stairwell?"`;

});
bgload_keepFg({ name: `MAP06B`, transition: 20 });
showTextbox();
text(() => {
   Sora(Y7A043)`"Approximately 240 feet."`;
   Kid`"Really...... 240 feet...huh...?"`;
   Kid`"I just want to confirm this but...if you were to climb those emergency stairs, you could escape up to the floating island, right?"`;
   Sora(Y7A044)`"That is correct."`;
   Kid`"And...the safety doors to the emergency stairwell can be opened manually..."`;
   Sora(Y7A045)`"It is possible."`;
   You(Y7A046)`"S-slow down Kid! What are you saying?"`;
   Kid`"What I'm saying is..."`;
   Kid`"To escape by going through the emergency stairwell...maybe..."`;
   You(Y7A047)`"There you go again! Coming up with another stupid idea!"`;
   You(Y7A048)`"Look right here!"`;
   You(Y7A049)`"Can't you see the blue color there?"`;
   Kid`"So?"`;
   You(Y7A050)`"That means the corridor leading to the emergency stairs is totally under water!"`;
   Kid`"Yeah, I know that."`;
   You(Y7A051)`"Come on! You can't be serious..."`;
   You(Y7A052)`"There's no way you're thinking about swimming there, are you?"`;
   Kid`"Ah...I think that's the first time I've ever heard you make a mistake."`;
   Kid`"I wasn't going to say that."`;
   Kid`"There's no way I can swim 240 feet under water!"`;
   You(Y7A053)`"Well, how do you expect to reach the emergency stairs then?"`;

});
bgload_keepFg({ name: `MAP06C`, transition: 20 });
showTextbox();
text(() => {
   Kid`"First, let's call the emergency stairwell that connects to the floating island, 'Staircase A'."`;
   Kid`"Then lets call the Sector 4 emergency stairwell here, 'Staircase B'..."`;
   Kid`"And the emergency corridor connecting to 'Staircase A' will be 'Corridor C.'"`;
   You(Y7A054)`"And?"`;
   Kid`"The point is, we need to drain the water out of the corridor, right?"`;
   Kid`"Once that's done we could just skip our way to 'Staircase A.'"`;
   You(Y7A055)`"You say it as if it is the easiest thing in the world, but... there's no way we can do it if you ask me."`;
   Kid`"We can do it!"`;
   You(Y7A056)`"Yeah, how?"`;
   You(Y7A057)`"First of all, there isn't anywhere to drain the floodwater in 'Corridor C.'"`;
   Kid`"But there IS a place."`;
   Kid`"The dry area in Sector 4."`;
   You(Y7A058)`"*sigh*... Are you really that dumb?"`;
   You(Y7A059)`"Water only flows from high to low with the help of gravity."`;
   You(Y7A060)`"This is the third time you've made me say that."`;
   Kid`"I know, I know."`;
   You(Y7A061)`"So why do you keep up this stupid argument..."`;
   You(Y7A062)`"What? Are you thinking about scooping out all that water with a bucket?"`;
   Kid`"Not scooping it out."`;
   Kid`"Just the opposite."`;
   You(Y7A063)`"Huh?"`;
   Kid`"We're going to release the floodwater from Sector 8!"`;
   You`"........."`;
   Kid`"........."`;

});
bgload({ name: `BG11A1`, transition: 20 });
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y7A064)`"Kid...can I ask you one simple little question?"`;
   Kid`"Sure."`;
   You(Y7A065)`"Wouldn't doing that put this Security Office and the entire surrounding area completely under water...?"`;
   Kid`"That's right."`;

});
fgload({ id: 1, name: `YU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y7A066)`"*sigh*...I should have noticed the warning signs..."`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y7A067)`"It's okay. There, there, Kid..."`;
   You(Y7A068)`"There's nothing to worry about now..."`;
   You(Y7A069)`"Everything's going to be okay..."`;
   You(Y7A070)`"I'll take care of you..."`;
   You(Y7A071)`"Now be a good little boy..."`;
   `You started patting my head.`;
   `I snapped with anger.`;
   Kid`"Alright then! I'll prove it to you!"`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeFG({ id: 1, useAnim: false });
showTextbox();
text(() => {
   `I dashed out and ran to the warehouse.`;
   `I found a bucket and a clear plastic hose, and drilled a hole in the bucket.`;
   `Sticking the hose into the hole, I used duct tape to wrap and seal it.`;
   `I then hunted up two more buckets.`;
   `With the goods in hand, I returned to the Security Office.`;

});
bgload({ name: `IT02A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   You(Y7A072)`"Huh? What's...that...?"`;
   Kid`"It's something I threw together to test my idea."`;
   You(Y7A073)`"I don't get it. What does that thing have to do with what we were talking about?"`;

});
bgload_keepFg({ name: `IT02E`, transition: 20 });
showTextbox();
text(() => {
   Kid`"Listen. First, this bucket up here, the one with the hose stuck in it...it represents Sector 8 where we are, okay?"`;
   Kid`"Next, the hose part that's filled with water represents Corridor C leading to Staircase A."`;
   Kid`"Finally, the bucket set down low represents the fourth block on the third floor. And the empty hose part hanging down to it is Staircase B."`;
   Kid`"Just to let you know, the bent hose part represents the connecting the corridor joining up Corridor C with Staircase B, okay?"`;
   You(Y7A074)`"Uh...okay."`;
   You(Y7A075)`"I got you so far...so then what?"`;

});
bgload_keepFg({ name: `IT02A`, transition: 20 });
showTextbox();
text(() => {
   Kid`"Before I show you, I want to make sure of one thing. If we drain the water filling the hose here, then we can move safely to the emergency stairs, right?"`;
   You(Y7A076)`"Yeah, I guess."`;
   Kid`"Alright! Let the draining begin!"`;
   You(Y7A077)`"????"`;
   Kid`"Remember what I said earlier?"`;
   You(Y7A078)`"I think you said...'We're going to release the floodwater from Sector 8, right?"`;
   Kid`"So let's release it."`;

});
bgload({ name: `IT02B`, transition: 20 });
showTextbox();
text(() => {
   `Next, I began to pour water into the top bucket from a second bucket, which I had filled with water from the corridor.`;

});
hideTextbox();
playSFX({ name: `SE02_12`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Glug, glug, glug...`;
   `In no time at all, the top bucket was full.`;

});
bgload({ name: `IT02C`, transition: 20 });
stopSFX()
showTextbox();
text(() => {
   `Next, the water from the top bucket flowed down the hose, pushing the air out of the hose and flowing into the lower bucket.`;

});
bgload({ name: `IT02D`, transition: 20 });
showTextbox();
text(() => {
   `Before long...all the water was drained.`;
   `Except for a negligible amount left in the hose, all the water from the top bucket drained completely to the lower bucket. `;

});
bgload({ name: `BG11A1`, transition: 20 });
showTextbox();
text(() => {
   Kid`"And that's how it works."`;
   Kid`"This is how a siphon works."`;
   You`"........."`;
   Kid`"Okay, let's prove this one more time by looking at the map."`;

});
bgload({ name: `MAP06C`, transition: 20 });
showTextbox();
text(() => {
   Kid`"The walls of Staircase A, Staircase B, Corridor C, and the area in Sector 4 are all intact without cracks or damage."`;
   Kid`"So we can assume that all these areas are protected from outside seawater."`;
   Kid`"Isn't that right, Sora?"`;
   Sora(Y7A079)`"Yes."`;
   Kid`"What will happen if we simultaneously open all the watertight doors in this submerged area in Sector 8 of Zweite stock...this room without any cracks or damage...?"`;
   You(Y7A080)`"So an enormous amount of water is going to flow into Corridor C?"`;
   Kid`"And then, what next?"`;
   You(Y7A081)`"The water accumulated in Corridor C will drain into the dry area in Sector 4?"`;
   Kid`"And then what will happen?"`;
   You(Y7A082)`"Probably something like your experiment just now..."`;
   You(Y7A083)`"All the water in Corridor C, as well as Sector 8, will flow into Sector 4, I guess."`;
   Kid`"Yep, that's the plan."`;
   You(Y7A084)`"But do you really think it'll work?"`;
   Kid`"It's a hell of a lot better than nothing."`;
   Kid`" I'm pretty sure it'll work."`;

});
hideTextbox();
monoColorOverlay({ interval: 36, color: BLACK });
removeBG({ mode: BLACK, transition: 2 });
stopBGM();
playSFX({ name: `SE02_07`, a1: 1, volume: 100 });
waitForSFX();
showTextbox();
text(() => {
   `And then...`;

});
playBGM({ num: 11, volume: 100 });
bgload({ name: `BG11A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`3:40`);
showTextbox();
text(() => {
   Kid`"Are you ready to go?"`;

});
multifgload2({ id1: 1, id2: 2, name1: `SO01ADM`, name2: `YU01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(Y7A085)`"Sure."`;
   `According to the color-coded map on the monitor, Zweite stock's Sector 8 and Corridor C had changed to green.`;
   `The color green meant it was a dry area.`;
   `Meaning the drainage...had worked perfectly.`;
   Sora(Y7A086)`"There is very little time left before the estimated implosion time. You must hurry."`;
   Kid`"Yeah, we know."`;
   Sora(Y7A087)`"Well, be careful."`;
   Kid`"...Huh?"`;
   Kid`"What about you, Sora? You're not coming?"`;

});
multifgload2({ id1: 1, id2: 2, name1: `SO03ADM`, name2: `YU03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(Y7A088)`"Listen Kid. Sora.... She can't leave LeMU."`;
   Sora`"........."`;
   Kid`"...What?"`;
   Sora(Y7A089)`"Have you forgotten? I am an RSD-generated image.... I'm just a computer program."`;
   Kid`"........."`;
   Sora(Y7A090)`"I am not able to join you."`;
   Sora(Y7A091)`"So I wanted to say goodbye and wish you the best of luck."`;
   Kid`"Sora..."`;

});
multifgload2({ id1: 1, id2: 2, name1: `SO01ADM`, name2: `YU11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(Y7A092)`"Every encounter must have a parting."`;
   Sora(Y7A093)`"And even if I accompanied you as far as the floating island, we would eventually have to say goodbye there."`;
   Sora(Y7A094)`"In my case, the parting comes a little earlier than with everyone else."`;
   Kid`"But..."`;
   Sora(Y7A095)`"Kid, think about it like this. When you go to visit a friend's house..."`;
   Sora(Y7A096)`"When it's time to leave, the friend may see you to the door, but the friend can't accompany you home, right?"`;
   Sora(Y7A097)`"This place..."`;
   Sora(Y7A098)`"LeMU is...my home."`;
   Kid`"We'll meet again, won't we?"`;

});
showTextbox();
text(() => {
   Sora(Y7A099)`"Yes."`;
   Sora(Y7A100)`"I am here, and I am also elsewhere at the same time."`;
   Sora(Y7A101)`"Even if the 'me' here disappears, the 'me' there will still go on existing."`;
   Kid`"Don't talk about disappearing."`;
   Sora(Y7A102)`"Heh, heh. This is merely an example, you see."`;
   Sora(Y7A103)`"Don't worry. I'm sure that, yourself, You and I will meet again."`;
   Sora(Y7A104)`"And it may be sooner than you think..."`;
   Kid`"Do you promise?"`;
   Sora(Y7A105)`"Yes."`;
   Kid`"It's a promise then?"`;
   Sora(Y7A106)`"Yes, it's a promise."`;
   `Looking over Sora's shoulder at the monitor, I could see the number of life readings displayed there.`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: false });
bgload({ name: `IT04B`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
delay({ interval: 120 });
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
bgload({ name: `BG25A3`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   `You and I opened the Security Room doors and exited into the corridor.`;
   `Giving a wave to the smiling Sora as she saw us off, we climbed the stairs to the emergency corridor.`;

});
bgload({ name: `BG27A3`, transition: 20 });
showTextbox();
text(() => {
   `We then walked down Corridor C, which was no longer flooded.`;
   Kid`"Hey, I was just thinking but..."`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y7A107)`"What about?"`;
   Kid`"Surely Sora isn't planning to take responsibility for the accident by dying here..."`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y7A108)`"Don't be stupid...Sora doesn't plan to sacrifice herself."`;
   You(Y7A109)`"Sora, you know, is different from us."`;
   Kid`"No way! Sora's not..."`;

});
fgload({ id: 1, name: `YU11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y7A110)`"Umm...I don't mean it that way, umm..."`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y7A111)`"Anyway, what you're worried about isn't going to happen to her."`;
   Kid`"How can you be so sure?"`;
   Kid`"Maybe that's the way Leiblich programmed her?"`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y7A112)`"...*sigh* Here we go again..."`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y7A113)`"Listen, this is what I heard from Mayo, but..."`;
   You(Y7A114)`"Before, when she was hacking the source data, Mayo said she rewrote one line of code."`;
   You(Y7A115)`"In Sora's programming there is a priority list of preferential actions. Mayo rewrote one of these."`;
   Kid`"What was that?"`;
   You(Y7A116)`"She must protect above all else...herself. "`;
   You(Y7A117)`"She must value herself most."`;

});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
showTextbox();
text(() => {
   `At last we arrived at the door leading to the emergency stairs.`;
   You(Y7A118)`"Alright, I'm going to open it!"`;
   Kid`"Okay."`;
   `You put her hand on the door's handle.`;
   You(Y7A119)`"Come on! Help me turn it!"`;
   Kid`"Oh...right."`;
   `Together we gripped the handle.`;
   `It was then that it happened!`;

});
hideTextbox();
stopBGM();
playSFX({ name: `SE08_05`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Claaaaang...`;
   `A sudden metallic sound resounded behind us.`;
   `I turned around quickly.`;

});
hideTextbox();
stopSFX()
playBGM({ num: 24, volume: 100 });
showTextbox();
text(() => {
   Kid`"Ah!"`;
   `At the end of the corridor...stood the girl.`;
   `Our eyes met.`;
   `And then a name flashed in my mind, as clear as a bell.`;
   Kid`"...Coco!"`;
   You(Y7A120)`"Huh!?"`;
   You(Y7A121)`"Coco...who's Coco!?"`;
   `Turning on her heels, Coco ran off in the other direction.`;
   `I turned to chase after her.`;
   `But You grabbed my arm, holding me back.`;
   Kid`"C'mon, let go!"`;
   Kid`"There's still someone here!"`;
   Kid`"We can't just leave her here!"`;
   You(Y7A122)`"You're just imagining things! Forget about it!"`;
   `The walls began to creak and groan.`;
   `Here and there, water began to leak in.`;
   Kid`"Cocoooo!"`;
   You(Y7A123)`"Kid! Stop!"`;

});
bgload({ name: `BG28A3R`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `Tearing myself away from You's grasp, I ran after the girl.`;
   `You came dashing after me.`;
   `Through the voice alternator came Sora's warning voice.`;
   Sora(Y7A124)`"The pressure on the partitions has increased beyond their limit!"`;
   Sora(Y7A125)`"You must return quickly!"`;
   Kid`"No way!"`;
   You(Y7A126)`"How long!? How much longer will they hold?"`;
   Sora(Y7A127)`"10 to 15 minutes!"`;
   Sora(Y7A128)`"But there is no way to be sure. The wall could collapse at any moment!"`;
   `For one instant, I saw the back of the girl.`;
   `She continued to running down the corridor.`;
   `With all my strength, I burst after her.`;

});
hideTextbox();
playSFX({ name: `SE01_04`, a1: 0, volume: 100 });
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `BG28A4R`, transition: 26 });
stopSFX()
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   `The main building lights flickered and went out, but were replaced by dim emergency lights.`;
   `With the help of the pale lights I kept up chase.`;

});
bgload({ name: `BG29A2`, transition: 20 });
showTextbox();
text(() => {
   `I bounded down the emergency staircase...`;

});
bgload({ name: `BG26B4R`, transition: 20 });
showTextbox();
text(() => {
   `And burst out onto a normal corridor.`;
   `I ran and ran with all my power.`;

});
hideTextbox();
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
monoColorOverlay({ interval: 18, color: BLACK });
bgload({ name: `BG30B2`, transition: 26 });
stopSFX()
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   `I ran to the end of the narrow corridor, in front of a small door.`;
   `It was there that I caught up to her.`;

});
bgload({ name: `EV_CO11A`, transition: 20 });
showTextbox();
text(() => {
   `She stood with her back to the door.`;
   `I had caught her.`;
   Kid`"Come on, we're going together!"`;
   `The girl shook her head.`;
   `Inching forward, I pressed close to her.`;
   `But to my surprise...!`;
   Kid`"...Huh!?"`;

});
showTextbox();
text(() => {
   `After a moment...${noWait}`;

});
bgload_keepFg({ name: `EV_CO11B`, transition: 10 });
showTextbox();
text(() => {
   Append`As if being absorbed into the door, the girl disappeared...`;

});
bgload({ name: `BG30B2`, transition: 20 });
showTextbox();
text(() => {
   `Out of breath, You closed in on me.`;

});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y7A129)`"Whew! I finally caught up with you..."`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y7A130)`"And? What about the girl, or whatever?"`;
   Kid`"............"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I stood there as if in a trance.`;
   `Coming back to myself, I tried to open the door to HIMMEL.`;
   `But the door wouldn't budge.`;
   Kid`"Sora! Open this door!"`;
   Sora(Y7A131)`"That is impossible. That door is out of my jurisdiction."`;
   `I pounded on the door.`;
   Kid`"Coco—!"`;

});
hideTextbox();
playSFX({ name: `SE02_07`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Ssssssss—!`;
   `From the surface of the walls, water began to gush in.`;
   Sora(Y7A132)`"Less than five minutes left! They won't hold much longer!"`;
   Announcement(Y7A133)`"Emergency warning...all patrons in the park...and all staff...are advised to evacuate immediately."`;
   Announcement(Y7A134)`"Five minutes...until...implosion."`;
   `The announcement repeated itself in German, French, and Japanese.`;
   Kid`"Damn it! Open up! Open this door!!"`;

});
hideTextbox();
playSFX({ name: `SE00_15`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Boom! Boom! Boom! I struck with my fists.`;
   Kid`"Open up—————!!"`;
   You(Y7A135)`"Listen, Kid, you've got to snap out of it!"`;
   You(Y7A136)`"Wake up!!"`;
   Kid`"Ugh...!!"`;

});
stopSFX()
showTextbox();
text(() => {
   `I pounded fiercely against the door again with my clinched fists.`;
   `But no matter how hard I tried, it was in vain.`;
   `(Is she just...just my imagination?)`;
   `(...if I keep this up, what's going to happen to You...?)`;
   `I thought that You would die if I don't do something!`;
   Kid`"........."`;

});
hideTextbox();
stopBGM();
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y7A137)`"Kid...?"`;
   Kid`"I'm so sorry...You."`;
   `I strained to speak, squeezing out my words.`;
   Kid`"OKAY, LET'S GO!"`;
   `I reached out my hand to You.`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y7A138)`"Whew, finally..."`;
   `You gave my hand a squeeze back.`;
   Kid`"........."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `One last time, I looked back at the door...`;
   `And then turned and ran with all my might.`;
   `We sprinted as hard as our legs would carry us.`;
   `Splashing through the water as it gushed like a waterfall, I ran with everything I had, You's hand gripped tightly in mine.`;
   Announcement(Y7A139)`"Three minutes...until...implosion."`;

});
playBGM({ num: 10, volume: 100 });
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `Bounding up the emergency stairs, we reached Zweite Stock.`;

});
bgload({ name: `BG27A4`, transition: 20 });
showTextbox();
text(() => {
   `We ran hard down the emergency corridor.`;
   Announcement(Y7A140)`"Two minutes...until...implosion."`;
   `We applied our strength together and pushed open the emergency stairwell door.`;

});
bgload({ name: `BG29A2`, transition: 20 });
showTextbox();
text(() => {
   `Closing the door tightly, we then headed up the long set of stairs.`;
   Announcement(Y7A141)`"One minute...until...implosion."`;
   `In the distance the sign read Erste boden. First floor!`;
   `Just 50 more feet!`;
   Announcement(Y7A142)`"Thirty seconds..."`;
   Announcement(Y7A143)`"Twenty seconds..."`;
   Announcement(Y7A144)`"Ten,Nine,Eight,Seven..."`;
   `We ran toward the final door...`;

});
hideTextbox();
playSFX({ name: `SE04_03`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Clink, clank. Clink, clank.`;
   `The door...the door would not open!`;
   Announcement(Y7A145)`"Six,Five,Four,Three"`;
   Announcement(Y7A146)`"...Two...One......"`;

});
removeBG({ mode: BLACK, transition: 2 });
stopSFX()
playSFX({ name: `SE07_12`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Grrrrrrrr...groannnnnnnnnnn!`;
   `The darkness was pierced by a ferocious sound...`;
   `Like the roar of a dragon.`;
   `Or possibly...the last agonizing cry before death.`;

});
hideTextbox();
stopBGM();
waitForSFX();
stopSFX()
delay({ interval: 240 });
playBGM({ num: 20, volume: 100 });
setSceneTitle({ index: 89 });
chapterCutin({ name: `00000000` });
bgload({ name: `BG38A1`, transition: 0 });
showTextbox();
text(() => {
   `On the floating island!`;
   `The morning sun stained the sky, land and ocean...`;
   `It was the first time we had laid eyes on the blue sky and bright sunlight in seven days!`;

});
bgload({ name: `BG39A1`, transition: 20 });
clock(`5:36`);
showTextbox();
text(() => {
   `In the distance, Sara and Takeshi played together.`;
   `It appeared as if they were pretending to swordfight with a couple of sticks.`;
   `Apparently, Takeshi had been routed by Sara's sword.`;
   `I gazed dreamily at the two as they played.`;
   `Tsugumi was nowhere to be seen. After the escape, she had disappeared.`;
   `And as for You...?`;

});
bgload({ name: `EV_YU13A`, transition: 20 });
showTextbox();
text(() => {
   `She sat beside me, gazing at the morning sun. `;
   `Her eyes misted with tears...`;
   `It was her first time to see the sun in seven days.`;
   `Long shadows, from her figure and mine, cast at length behind us.`;
   `Yes, we had successfully escaped from that water entrenched labyrinth.`;
   Kid`"I kept my promise...don't you think?"`;
   `I turned and asked You.`;
   You(Y7A147)`"Well, the first one at least."`;
   `You kept her gaze on the rising sun as she answered.`;
   `The first one...`;
   `...To protect her.`;
   `And the second?`;
   You(Y7A148)`"The thing that reminds you about life, sugar in coffee."`;
   Kid`"Ah...that..."`;
   You(Y7A149)`"The thing that life depends on, didn't you say?"`;
   Kid`"Uh, huh."`;
   You(Y7A150)`"You promised to tell me."`;
   Kid`"Okay, in that case let me ask you. What are some things on which life depends?"`;
   You(Y7A151)`"Water, air, food, housing, clothing...money..."`;
   Kid`"Okay, what else?"`;
   You(Y7A152)`"Knowledge, maybe."`;
   Kid`"Well, I guess there's that, too."`;
   Kid`"Humans can't live forever in innocence, though."`;
   Kid`"To live comfortably, humans also need certain impurities, things that are granted by knowledge."`;
   Kid`"I guess you could compare those things with the milk you put in coffee."`;
   Kid`"But there's one more thing..."`;
   Kid`"Like the sugar in coffee, we need one more thing..."`;
   You(Y7A153)`"What could it be?"`;
   Kid`"How does sugar taste?"`;
   You(Y7A154)`"Sweet."`;
   Kid`"It's a wonderful taste, right?"`;
   Kid`"So humans...can never live entirely alone."`;
   You(Y7A155)`"????"`;
   Kid`"You still don't get it?"`;
   Kid`"People can only know sweetness when they join together..."`;
   Kid`"Love."`;

});
bgload({ name: `IMG05B`, transition: 20 });
showTextbox();
text(() => {
   `You then squeezed my right hand.`;
   `And I pulled her close to me.`;
   `You buried her face in my chest.`;
   `From You's long hair I could smell her fragrance.`;
   `The fragrance of sunlight.`;
   You(Y7A036)`"It is sweet...isn't it."`;
   `The sun, my sun, which was clear and fresh, flowing with brilliance...`;
   `Tinged with sweetness the smell of spring enveloped us completely.`;

});
hideTextbox();
monoColorOverlay({ interval: 48, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
stopBGM();
l_ending = `you_gd`;
l_choice = 0;
jump(`Y_ED`);
