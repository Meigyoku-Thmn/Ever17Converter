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
   marker; appendText; 
   Narr`Daybreak. The date had changed to Sunday, 
May 7.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Since that time, we hadn't slept at all.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was starting to feel badly again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A headache, dizziness, nausea and coldness 
felt like they were seeping from deep 
in the core of my body.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt a dull, severe fatigue sweep over 
me...I was only half-conscious.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Exhaustion...I had reached my limit.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I tried to keep my energy 
from being sapped away.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Surrounded by darkness...and endless fear, we 
had fought our way this far...`;
   waitForClick; clearText; marker; appendText; 
   Narr`And there was no sign that 
things were going to get better.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Communication lines with the 
outside were still down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And...`;
   waitForClick; clearText; marker; appendText; 
   Narr`We had yet to find a clue leading to possible 
escape.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 4, volume: 100 });
bgload({ name: `BG11A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You remained distant and spacey. `;
   waitForClick; clearText; marker; appendText; 
   Narr`Our optimistic leader that helped us through 
the days of distress was nowhere to be seen.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Someone had to save her...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But who?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Of course, it was up to me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`At this point, I was the only person who could 
help her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Yet still...`;
   waitForClick; clearText; 
});
removeBG({ mode: WHITE, transition: 2 });
showTextbox();
text(() => {
   marker; sound(`Y4A061`); appendText; 
   You`"Promise?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah, I promise."`;
   waitForClick; clearText; 
});
bgload({ name: `BG11A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The memory of that pledge remained stark in my 
mind.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Uh, Sora...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y7A000`); appendText; 
   Sora`"Yes, what can I do for you?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I'm sorry to ask, but could you leave me 
alone with You for a second?"`;
   waitForClick; clearText; marker; sound(`Y7A001`); appendText; 
   Sora`"Certainly."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"When we're done I'll call you."`;
   waitForClick; clearText; marker; sound(`Y7A002`); appendText; 
   Sora`"Okay."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I'm really sorry."`;
   waitForClick; clearText; marker; sound(`Y7A003`); appendText; 
   Sora`"Please, don't worry about it."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Thanks."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora vanished.`;
   waitForClick; clearText; marker; appendText; 
   Narr`All traces of her completely disappeared.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora, who had no dimensional limits, had 
removed herself from our field of vision.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Now then...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Before continuing, I went to set the coffee 
machine to make fresh coffee.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You? You're drinking coffee, right?"`;
   waitForClick; clearText; marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Ignoring her lack of response, I set it to 
prepare two cups.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Then I sat down beside her.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 19, volume: 100 });
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"About your mother...I mean, I don't know what 
to say but..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Don't you think you it's important to talk 
things over with her?"`;
   waitForClick; clearText; marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"There may have been some reason why she did 
what she did..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Look, she did say she'd explain everything 
once you're back on the floating island."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y7A004`); appendText; 
   You`"How dare you say that...like you know how 
this feels."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`Y7A005`); appendText; 
   You`"There's nothing left for me to say to her."`;
   waitForClick; clearText; marker; sound(`Y7A006`); appendText; 
   You`"Besides, it doesn't matter anymore..."`;
   waitForClick; clearText; marker; sound(`Y7A007`); appendText; 
   You`"I don't care what happens..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Look, we've still got to find a way to escape 
this place...somehow."`;
   waitForClick; clearText; marker; sound(`Y7A008`); appendText; 
   You`"Yeah, why?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Because I made you a promise."`;
   waitForClick; clearText; marker; sound(`Y7A009`); appendText; 
   You`"How are you going to keep it? Do you have 
some great plan to get us out of here?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Well that's...what I want to figure out..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y7A010`); appendText; 
   You`"I bet..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Look, we have to survive."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You, over these last seven days, I've learned 
so much from you."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"In so many ways I can't even begin to count."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But out of everything I've learned from you, 
the most important thing is..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"How to live."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You have to live life to the fullest - that's 
what you've taught me."`;
   waitForClick; clearText; marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So I want to put that lesson into practice."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I want to live! To the fullest, to the end!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a heartfelt plea.`;
   waitForClick; clearText; marker; sound(`Y7A011`); appendText; 
   You`"Listen, Kid..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah?"`;
   waitForClick; clearText; marker; sound(`Y7A012`); appendText; 
   You`"What does it mean... to live, anyway?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Well, living means..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"To learn and to know, I think."`;
   waitForClick; clearText; marker; appendText; 
   Narr`A child is born in innocence...gains knowledge 
through the years...only to forget it all when 
it is old...and dies. `;
   waitForClick; clearText; marker; appendText; 
   Narr`Over the previous seven days, my life had been 
filled with things that I had learned.`;
   waitForClick; clearText; marker; appendText; 
   Narr`From amnesia and emptiness my life began.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But looking back over the last seven days, 
there was one more thing...`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I also think that to live also means...to 
lose something."`;
   waitForClick; clearText; marker; appendText; 
   Narr`They say "nothing ventured, nothing gained," 
but to gain something you must lose something.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Like me losing the past by losing my memory.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Even though I had lost much...I had also 
gained...`;
   waitForClick; clearText; marker; sound(`Y7A013`); appendText; 
   You`"To learn? To lose something?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y7A014`); appendText; 
   You`"So you're saying, that we live only to get 
hurt?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Maybe. I don't know."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y7A015`); appendText; 
   You`"Well..."`;
   waitForClick; clearText; marker; sound(`Y7A016`); appendText; 
   You`"If living means to be hurt..."`;
   waitForClick; clearText; marker; sound(`Y7A017`); appendText; 
   You`"Then I've had enough..."`;
   waitForClick; clearText; marker; sound(`Y7A018`); appendText; 
   You`"I've had more than my share of hurt."`;
   waitForClick; clearText; marker; sound(`Y7A019`); appendText; 
   You`"And I've had enough of life...so..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"H-hey, wait a second!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What are you trying to say, You...!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You're not saying you want to die...?"`;
   waitForClick; clearText; marker; appendText; 
   You`"............"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"............"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You can't be serious! What the hell's that 
all about!?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I can't believe you're saying that! It's not 
like you at all!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What happened to the You a little while 
ago... who was so ready to get out of here? 
What happened to that You?"`;
   waitForClick; clearText; marker; appendText; 
   You`".........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Come on, what gives...?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What came over you all of a sudden...?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Why do you think you were born anyway...!?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y7A020`); appendText; 
   You`"Stop it..."`;
   waitForClick; clearText; marker; sound(`Y7A021`); appendText; 
   You`"Would you stop with the stupid, two-bit 
sermon... "`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No, it's you who's talking stupid..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"All this selfish crap, as if your life 
belongs only to you!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y7A022`); appendText; 
   You`"That's not what I was thinking!"`;
   waitForClick; clearText; marker; sound(`Y7A023`); appendText; 
   You`"I don't think that, it's just..."`;
   waitForClick; clearText; marker; sound(`Y7A024`); appendText; 
   You`"All this time, the mother who I thought 
brought me into this world...she's gone."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But that other lady said she was your real 
mother."`;
   waitForClick; clearText; marker; sound(`Y7A025`); appendText; 
   You`"Well she's obviously lying!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"How do you know?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y7A026`); appendText; 
   You`"Because..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y7A027`); appendText; 
   You`"...she's been lying to me from the start..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Don't you think that's a little pointless 
right now?"`;
   waitForClick; clearText; marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I mean, you do understand, don't you...?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"That until you hear her side of the 
story...you can't go jumping to conclusions."`;
   waitForClick; clearText; marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I think you should live the best life you 
can, for all the people around you who care 
about you."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"For your mother...and for Sara and Takeshi as 
well..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"And for me..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y7A028`); appendText; 
   You`"...For you?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I said it before, but there's so much that 
I've learned from you."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I'm so very grateful to you."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Really."`;
   waitForClick; clearText; marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You, you're a friend, a guardian, a 
teacher... "`;
   waitForClick; clearText; marker; appendText; 
   Kid`"And..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"And..."`;
   waitForClick; clearText; marker; appendText; 
   You`"......"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I walked back to the coffee machine and poured 
two cups of coffee.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You said earlier that you've already lived 
enough, right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But I don't think it's enough."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Because I think there is still stuff you need 
to learn."`;
   waitForClick; clearText; marker; sound(`Y7A029`); appendText; 
   You`"...you mean about my mother?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"That's one thing, yes."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"By the way, how much sugar do you take?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y7A030`); appendText; 
   You`"Ah, I..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Not listening, I added two spoonfuls.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I was thinking...don't you think sugar in 
coffee reminds you of something?"`;
   waitForClick; clearText; marker; sound(`Y7A031`); appendText; 
   You`"??"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You know, something that life depends on."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`Y7A032`); appendText; 
   You`"Huh...?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Do you have any idea?"`;
   waitForClick; clearText; marker; sound(`Y7A033`); appendText; 
   You`"I guess not."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"See...that's two things? Things you don't 
know that you should learn."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Makes you want to know, doesn't it?"`;
   waitForClick; clearText; marker; sound(`Y7A034`); appendText; 
   You`"A little...I guess."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Well, if we get out of here alive, I'll tell 
you what it is."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I added milk and sugar and carried the two 
cups over.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"There you go."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y7A035`); appendText; 
   You`"...Thanks."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You took the cup and silently sipped from it.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"How does it taste?"`;
   waitForClick; clearText; marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Were my feelings...`;
   waitForClick; clearText; marker; appendText; 
   Narr`...Finally getting across to her?`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`Y7A036`); appendText; 
   You`"It's...very sweet."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She had a clear gentle smile, like the sun 
shining just after a rain.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`I called Sora back into the room. All 
survivors remaining inside the park were 
now present.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The three of us began to discuss new 
strategies.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The walls of LeMU would only hold two more 
hours at most.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Our last possible escape route had been shut 
off, filling with floodwater just a few hours 
earlier.`;
   waitForClick; clearText; marker; appendText; 
   Narr`All hope of communicating with the outside was 
gone.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The situation had become so desperate that I 
could no longer expect You or Sora to find an 
escape route.`;
   waitForClick; clearText; marker; sound(`Y7A037`); appendText; 
   You`"Isn't there anything we can do...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You lifted the coffee cup to her lips as she 
spoke.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her cup now contained only black coffee. 
She had refilled it herself.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Watching her drink I went to take a sip from 
my own cup, but found it empty.`;
   waitForClick; clearText; marker; appendText; 
   Narr`To pour myself more, I walked back to the 
coffee machine.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The machine...was an interesting contraption 
with a lower chamber containing boiling water 
heated from an alcohol lamp.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The steam from the boiling water was siphoned 
into the upper chamber through a central pipe. `;
   waitForClick; clearText; marker; appendText; 
   Narr`Siphon...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Siphon......`;
   waitForClick; clearText; marker; appendText; 
   Narr`Siphon.........`;
   waitForClick; clearText; 
});
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"I got it!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sora? Could you show me that cross-sectional 
diagram again!"`;
   waitForClick; clearText; 
});
bgload({ name: `MAP06A`, transition: 20 });
playBGM({ num: 15, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"What's this perpendicular line coming 
straight down from the floating island?"`;
   waitForClick; clearText; marker; sound(`Y7A038`); appendText; 
   Sora`"It's an emergency stairwell."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"This area wasn't dry earlier...?"`;
   waitForClick; clearText; marker; sound(`Y7A039`); appendText; 
   Sora`"No, but I was able to drain it yesterday 
so..."`;
   waitForClick; clearText; marker; sound(`Y7A040`); appendText; 
   Sora`"When the flooding started, the watertight 
doors in the emergency stairwell automatically 
closed."`;
   waitForClick; clearText; marker; sound(`Y7A041`); appendText; 
   Sora`"Therefore, the emergency stairs did not allow 
water in after it had finished draining."`;
   waitForClick; clearText; marker; sound(`Y7A042`); appendText; 
   Sora`"It was thanks to the safety doors closing 
automatically that Takeshi, Sara and Tsugumi 
survived."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"How far is it from this room to the emergency 
stairwell?"`;
   waitForClick; clearText; 
});
bgload_keepFg({ name: `MAP06B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`Y7A043`); appendText; 
   Sora`"Approximately 240 feet."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Really...... 240 feet...huh...?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I just want to confirm this but...if you were 
to climb those emergency stairs, you could 
escape up to the floating island, right?"`;
   waitForClick; clearText; marker; sound(`Y7A044`); appendText; 
   Sora`"That is correct."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"And...the safety doors to the emergency 
stairwell can be opened manually..."`;
   waitForClick; clearText; marker; sound(`Y7A045`); appendText; 
   Sora`"It is possible."`;
   waitForClick; clearText; marker; sound(`Y7A046`); appendText; 
   You`"S-slow down Kid! What are you saying?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What I'm saying is..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"To escape by going through the emergency 
stairwell...maybe..."`;
   waitForClick; clearText; marker; sound(`Y7A047`); appendText; 
   You`"There you go again! Coming up with another 
stupid idea!"`;
   waitForClick; clearText; marker; sound(`Y7A048`); appendText; 
   You`"Look right here!"`;
   waitForClick; clearText; marker; sound(`Y7A049`); appendText; 
   You`"Can't you see the blue color there?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So?"`;
   waitForClick; clearText; marker; sound(`Y7A050`); appendText; 
   You`"That means the corridor leading to the 
emergency stairs is totally under water!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah, I know that."`;
   waitForClick; clearText; marker; sound(`Y7A051`); appendText; 
   You`"Come on! You can't be serious..."`;
   waitForClick; clearText; marker; sound(`Y7A052`); appendText; 
   You`"There's no way you're thinking about swimming 
there, are you?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Ah...I think that's the first time I've ever 
heard you make a mistake."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I wasn't going to say that."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"There's no way I can swim 240 feet under 
water!"`;
   waitForClick; clearText; marker; sound(`Y7A053`); appendText; 
   You`"Well, how do you expect to reach the 
emergency stairs then?"`;
   waitForClick; clearText; 
});
bgload_keepFg({ name: `MAP06C`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"First, let's call the emergency stairwell 
that connects to the floating island, 
'Staircase A'."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Then lets call the Sector 4 emergency 
stairwell here, 'Staircase B'..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"And the emergency corridor connecting to 
'Staircase A' will be 'Corridor C.'"`;
   waitForClick; clearText; marker; sound(`Y7A054`); appendText; 
   You`"And?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"The point is, we need to drain the water 
out of the corridor, right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Once that's done we could just skip our 
way to 'Staircase A.'"`;
   waitForClick; clearText; marker; sound(`Y7A055`); appendText; 
   You`"You say it as if it is the easiest thing 
in the world, but... there's no way we can 
do it if you ask me."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"We can do it!"`;
   waitForClick; clearText; marker; sound(`Y7A056`); appendText; 
   You`"Yeah, how?"`;
   waitForClick; clearText; marker; sound(`Y7A057`); appendText; 
   You`"First of all, there isn't anywhere to drain 
the floodwater in 'Corridor C.'"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But there IS a place."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"The dry area in Sector 4."`;
   waitForClick; clearText; marker; sound(`Y7A058`); appendText; 
   You`"*sigh*... Are you really that dumb?"`;
   waitForClick; clearText; marker; sound(`Y7A059`); appendText; 
   You`"Water only flows from high to low with the 
help of gravity."`;
   waitForClick; clearText; marker; sound(`Y7A060`); appendText; 
   You`"This is the third time you've made me say 
that."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I know, I know."`;
   waitForClick; clearText; marker; sound(`Y7A061`); appendText; 
   You`"So why do you keep up this stupid argument..."`;
   waitForClick; clearText; marker; sound(`Y7A062`); appendText; 
   You`"What? Are you thinking about scooping out all 
that water with a bucket?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Not scooping it out."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Just the opposite."`;
   waitForClick; clearText; marker; sound(`Y7A063`); appendText; 
   You`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"We're going to release the floodwater from 
Sector 8!"`;
   waitForClick; clearText; marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
bgload({ name: `BG11A1`, transition: 20 });
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y7A064`); appendText; 
   You`"Kid...can I ask you one simple little 
question?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sure."`;
   waitForClick; clearText; marker; sound(`Y7A065`); appendText; 
   You`"Wouldn't doing that put this Security Office 
and the entire surrounding area completely 
under water...?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"That's right."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y7A066`); appendText; 
   You`"*sigh*...I should have noticed the warning 
signs..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y7A067`); appendText; 
   You`"It's okay. There, there, Kid..."`;
   waitForClick; clearText; marker; sound(`Y7A068`); appendText; 
   You`"There's nothing to worry about now..."`;
   waitForClick; clearText; marker; sound(`Y7A069`); appendText; 
   You`"Everything's going to be okay..."`;
   waitForClick; clearText; marker; sound(`Y7A070`); appendText; 
   You`"I'll take care of you..."`;
   waitForClick; clearText; marker; sound(`Y7A071`); appendText; 
   You`"Now be a good little boy..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You started patting my head.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I snapped with anger.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Alright then! I'll prove it to you!"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeFG({ id: 1, useAnim: false });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I dashed out and ran to the warehouse.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I found a bucket and a clear plastic hose, and 
drilled a hole in the bucket.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sticking the hose into the hole, I used duct 
tape to wrap and seal it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I then hunted up two more buckets.`;
   waitForClick; clearText; marker; appendText; 
   Narr`With the goods in hand, I returned to the 
Security Office.`;
   waitForClick; clearText; 
});
bgload({ name: `IT02A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; sound(`Y7A072`); appendText; 
   You`"Huh? What's...that...?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It's something I threw together to test my 
idea."`;
   waitForClick; clearText; marker; sound(`Y7A073`); appendText; 
   You`"I don't get it. What does that thing have 
to do with what we were talking about?"`;
   waitForClick; clearText; 
});
bgload_keepFg({ name: `IT02E`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Listen. First, this bucket up here, the one 
with the hose stuck in it...it represents 
Sector 8 where we are, okay?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Next, the hose part that's filled with water 
represents Corridor C leading to Staircase A."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Finally, the bucket set down low represents 
the fourth block on the third floor. And the 
empty hose part hanging down to it is 
Staircase B."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Just to let you know, the bent hose part 
represents the connecting the corridor joining 
up Corridor C with Staircase B, okay?"`;
   waitForClick; clearText; marker; sound(`Y7A074`); appendText; 
   You`"Uh...okay."`;
   waitForClick; clearText; marker; sound(`Y7A075`); appendText; 
   You`"I got you so far...so then what?"`;
   waitForClick; clearText; 
});
bgload_keepFg({ name: `IT02A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Before I show you, I want to make sure of one 
thing. If we drain the water filling the hose 
here, then we can move safely to the emergency 
stairs, right?"`;
   waitForClick; clearText; marker; sound(`Y7A076`); appendText; 
   You`"Yeah, I guess."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Alright! Let the draining begin!"`;
   waitForClick; clearText; marker; sound(`Y7A077`); appendText; 
   You`"????"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Remember what I said earlier?"`;
   waitForClick; clearText; marker; sound(`Y7A078`); appendText; 
   You`"I think you said...'We're going to release 
the floodwater from Sector 8, right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So let's release it."`;
   waitForClick; clearText; 
});
bgload({ name: `IT02B`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Next, I began to pour water into the top 
bucket from a second bucket, which I had 
filled with water from the corridor.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE02_12`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Glug, glug, glug...`;
   waitForClick; clearText; marker; appendText; 
   Narr`In no time at all, the top bucket was full.`;
   waitForClick; clearText; 
});
bgload({ name: `IT02C`, transition: 20 });
stopSFX()
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Next, the water from the top bucket flowed 
down the hose, pushing the air out of the hose 
and flowing into the lower bucket.`;
   waitForClick; clearText; 
});
bgload({ name: `IT02D`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Before long...all the water was drained.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Except for a negligible amount left in the 
hose, all the water from the top bucket 
drained completely to the lower bucket. `;
   waitForClick; clearText; 
});
bgload({ name: `BG11A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"And that's how it works."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"This is how a siphon works."`;
   waitForClick; clearText; marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Okay, let's prove this one more time by 
looking at the map."`;
   waitForClick; clearText; 
});
bgload({ name: `MAP06C`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"The walls of Staircase A, Staircase B, 
Corridor C, and the area in Sector 4 are all 
intact without cracks or damage."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So we can assume that all these areas are 
protected from outside seawater."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Isn't that right, Sora?"`;
   waitForClick; clearText; marker; sound(`Y7A079`); appendText; 
   Sora`"Yes."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What will happen if we simultaneously open 
all the watertight doors in this submerged 
area in Sector 8 of Zweite stock...this room 
without any cracks or damage...?"`;
   waitForClick; clearText; marker; sound(`Y7A080`); appendText; 
   You`"So an enormous amount of water is going to 
flow into Corridor C?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"And then, what next?"`;
   waitForClick; clearText; marker; sound(`Y7A081`); appendText; 
   You`"The water accumulated in Corridor C will 
drain into the dry area in Sector 4?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"And then what will happen?"`;
   waitForClick; clearText; marker; sound(`Y7A082`); appendText; 
   You`"Probably something like your experiment just 
now..."`;
   waitForClick; clearText; marker; sound(`Y7A083`); appendText; 
   You`"All the water in Corridor C, as well as 
Sector 8, will flow into Sector 4, I guess."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yep, that's the plan."`;
   waitForClick; clearText; marker; sound(`Y7A084`); appendText; 
   You`"But do you really think it'll work?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It's a hell of a lot better than nothing."`;
   waitForClick; clearText; marker; appendText; 
   Kid`" I'm pretty sure it'll work."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 36, color: BLACK });
removeBG({ mode: BLACK, transition: 2 });
stopBGM();
playSFX({ name: `SE02_07`, a1: 1, volume: 100 });
waitForSFX();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And then...`;
   waitForClick; clearText; 
});
playBGM({ num: 11, volume: 100 });
bgload({ name: `BG11A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`3:40`);
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Are you ready to go?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SO01ADM`, name2: `YU01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y7A085`); appendText; 
   You`"Sure."`;
   waitForClick; clearText; marker; appendText; 
   Narr`According to the color-coded map on the 
monitor, Zweite stock's Sector 8 and Corridor 
C had changed to green.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The color green meant it was a dry area.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Meaning the drainage...had worked perfectly.`;
   waitForClick; clearText; marker; sound(`Y7A086`); appendText; 
   Sora`"There is very little time left before the 
estimated implosion time. You must hurry."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah, we know."`;
   waitForClick; clearText; marker; sound(`Y7A087`); appendText; 
   Sora`"Well, be careful."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"...Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What about you, Sora? You're not coming?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SO03ADM`, name2: `YU03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y7A088`); appendText; 
   You`"Listen Kid. Sora.... She can't leave LeMU."`;
   waitForClick; clearText; marker; appendText; 
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"...What?"`;
   waitForClick; clearText; marker; sound(`Y7A089`); appendText; 
   Sora`"Have you forgotten? I am an RSD-generated 
image.... I'm just a computer program."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`Y7A090`); appendText; 
   Sora`"I am not able to join you."`;
   waitForClick; clearText; marker; sound(`Y7A091`); appendText; 
   Sora`"So I wanted to say goodbye and wish you the 
best of luck."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sora..."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SO01ADM`, name2: `YU11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y7A092`); appendText; 
   Sora`"Every encounter must have a parting."`;
   waitForClick; clearText; marker; sound(`Y7A093`); appendText; 
   Sora`"And even if I accompanied you as far as the 
floating island, we would eventually have to 
say goodbye there."`;
   waitForClick; clearText; marker; sound(`Y7A094`); appendText; 
   Sora`"In my case, the parting comes a little 
earlier than with everyone else."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But..."`;
   waitForClick; clearText; marker; sound(`Y7A095`); appendText; 
   Sora`"Kid, think about it like this. When you go to 
visit a friend's house..."`;
   waitForClick; clearText; marker; sound(`Y7A096`); appendText; 
   Sora`"When it's time to leave, the friend may see 
you to the door, but the friend can't 
accompany you home, right?"`;
   waitForClick; clearText; marker; sound(`Y7A097`); appendText; 
   Sora`"This place..."`;
   waitForClick; clearText; marker; sound(`Y7A098`); appendText; 
   Sora`"LeMU is...my home."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"We'll meet again, won't we?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`Y7A099`); appendText; 
   Sora`"Yes."`;
   waitForClick; clearText; marker; sound(`Y7A100`); appendText; 
   Sora`"I am here, and I am also elsewhere at the 
same time."`;
   waitForClick; clearText; marker; sound(`Y7A101`); appendText; 
   Sora`"Even if the 'me' here disappears, the 'me' 
there will still go on existing."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Don't talk about disappearing."`;
   waitForClick; clearText; marker; sound(`Y7A102`); appendText; 
   Sora`"Heh, heh. This is merely an example, you see."`;
   waitForClick; clearText; marker; sound(`Y7A103`); appendText; 
   Sora`"Don't worry. I'm sure that, yourself, 
You and I will meet again."`;
   waitForClick; clearText; marker; sound(`Y7A104`); appendText; 
   Sora`"And it may be sooner than you think..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Do you promise?"`;
   waitForClick; clearText; marker; sound(`Y7A105`); appendText; 
   Sora`"Yes."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It's a promise then?"`;
   waitForClick; clearText; marker; sound(`Y7A106`); appendText; 
   Sora`"Yes, it's a promise."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Looking over Sora's shoulder at the monitor, I 
could see the number of life readings 
displayed there.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`You and I opened the Security Room doors and 
exited into the corridor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Giving a wave to the smiling Sora as she saw 
us off, we climbed the stairs to the emergency 
corridor.`;
   waitForClick; clearText; 
});
bgload({ name: `BG27A3`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We then walked down Corridor C, which was no 
longer flooded.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey, I was just thinking but..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y7A107`); appendText; 
   You`"What about?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Surely Sora isn't planning to take 
responsibility for the accident by dying 
here..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y7A108`); appendText; 
   You`"Don't be stupid...Sora doesn't plan to 
sacrifice herself."`;
   waitForClick; clearText; marker; sound(`Y7A109`); appendText; 
   You`"Sora, you know, is different from us."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No way! Sora's not..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y7A110`); appendText; 
   You`"Umm...I don't mean it that way, umm..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y7A111`); appendText; 
   You`"Anyway, what you're worried about isn't going 
to happen to her."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"How can you be so sure?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Maybe that's the way Leiblich programmed her?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y7A112`); appendText; 
   You`"...*sigh* Here we go again..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y7A113`); appendText; 
   You`"Listen, this is what I heard from Mayo, 
but..."`;
   waitForClick; clearText; marker; sound(`Y7A114`); appendText; 
   You`"Before, when she was hacking the source data, 
Mayo said she rewrote one line of code."`;
   waitForClick; clearText; marker; sound(`Y7A115`); appendText; 
   You`"In Sora's programming there is a priority 
list of preferential actions. Mayo rewrote 
one of these."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What was that?"`;
   waitForClick; clearText; marker; sound(`Y7A116`); appendText; 
   You`"She must protect above all else...herself. "`;
   waitForClick; clearText; marker; sound(`Y7A117`); appendText; 
   You`"She must value herself most."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`At last we arrived at the door leading to the 
emergency stairs.`;
   waitForClick; clearText; marker; sound(`Y7A118`); appendText; 
   You`"Alright, I'm going to open it!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Okay."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You put her hand on the door's handle.`;
   waitForClick; clearText; marker; sound(`Y7A119`); appendText; 
   You`"Come on! Help me turn it!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh...right."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Together we gripped the handle.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was then that it happened!`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
playSFX({ name: `SE08_05`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Claaaaang...`;
   waitForClick; clearText; marker; appendText; 
   Narr`A sudden metallic sound resounded behind us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I turned around quickly.`;
   waitForClick; clearText; 
});
hideTextbox();
stopSFX()
playBGM({ num: 24, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Ah!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`At the end of the corridor...stood the girl.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Our eyes met.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And then a name flashed in my mind, as clear 
as a bell.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"...Coco!"`;
   waitForClick; clearText; marker; sound(`Y7A120`); appendText; 
   You`"Huh!?"`;
   waitForClick; clearText; marker; sound(`Y7A121`); appendText; 
   You`"Coco...who's Coco!?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Turning on her heels, Coco ran off in the 
other direction.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I turned to chase after her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But You grabbed my arm, holding me back.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"C'mon, let go!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"There's still someone here!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"We can't just leave her here!"`;
   waitForClick; clearText; marker; sound(`Y7A122`); appendText; 
   You`"You're just imagining things! Forget about 
it!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The walls began to creak and groan.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Here and there, water began to leak in.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Cocoooo!"`;
   waitForClick; clearText; marker; sound(`Y7A123`); appendText; 
   You`"Kid! Stop!"`;
   waitForClick; clearText; 
});
bgload({ name: `BG28A3R`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tearing myself away from You's grasp, I ran 
after the girl.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You came dashing after me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Through the voice alternator came Sora's 
warning voice.`;
   waitForClick; clearText; marker; sound(`Y7A124`); appendText; 
   Sora`"The pressure on the partitions has increased 
beyond their limit!"`;
   waitForClick; clearText; marker; sound(`Y7A125`); appendText; 
   Sora`"You must return quickly!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No way!"`;
   waitForClick; clearText; marker; sound(`Y7A126`); appendText; 
   You`"How long!? How much longer will they hold?"`;
   waitForClick; clearText; marker; sound(`Y7A127`); appendText; 
   Sora`"10 to 15 minutes!"`;
   waitForClick; clearText; marker; sound(`Y7A128`); appendText; 
   Sora`"But there is no way to be sure. The wall 
could collapse at any moment!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`For one instant, I saw the back of the girl.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She continued to running down the corridor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`With all my strength, I burst after her.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`The main building lights flickered and went 
out, but were replaced by dim emergency lights.`;
   waitForClick; clearText; marker; appendText; 
   Narr`With the help of the pale lights I kept up 
chase.`;
   waitForClick; clearText; 
});
bgload({ name: `BG29A2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I bounded down the emergency staircase...`;
   waitForClick; clearText; 
});
bgload({ name: `BG26B4R`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And burst out onto a normal corridor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I ran and ran with all my power.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`I ran to the end of the narrow corridor, in 
front of a small door.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was there that I caught up to her.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO11A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She stood with her back to the door.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had caught her.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Come on, we're going together!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The girl shook her head.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Inching forward, I pressed close to her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But to my surprise...!`;
   waitForClick; clearText; marker; appendText; 
   Kid`"...Huh!?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`After a moment...`;
   delay(0); 
});
bgload_keepFg({ name: `EV_CO11B`, transition: 10 });
showTextbox();
text(() => {
   appendText; 
   Narr`As if being absorbed into the door, the girl 
disappeared...`;
   waitForClick; clearText; 
});
bgload({ name: `BG30B2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Out of breath, You closed in on me.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y7A129`); appendText; 
   You`"Whew! I finally caught up with you..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y7A130`); appendText; 
   You`"And? What about the girl, or whatever?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"............"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I stood there as if in a trance.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coming back to myself, I tried to open the 
door to HIMMEL.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But the door wouldn't budge.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sora! Open this door!"`;
   waitForClick; clearText; marker; sound(`Y7A131`); appendText; 
   Sora`"That is impossible. That door is out of 
my jurisdiction."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I pounded on the door.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Coco—!"`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE02_07`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Ssssssss—!`;
   waitForClick; clearText; marker; appendText; 
   Narr`From the surface of the walls, water began to 
gush in.`;
   waitForClick; clearText; marker; sound(`Y7A132`); appendText; 
   Sora`"Less than five minutes left! They won't hold 
much longer!"`;
   waitForClick; clearText; marker; sound(`Y7A133`); appendText; 
   Announcement`"Emergency warning...all patrons in the 
park...and all staff...are advised to evacuate 
immediately."`;
   waitForClick; clearText; marker; sound(`Y7A134`); appendText; 
   Announcement`"Five minutes...until...implosion."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The announcement repeated itself in German, 
French, and Japanese.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Damn it! Open up! Open this door!!"`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE00_15`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Boom! Boom! Boom! I struck with my fists.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Open up—————!!"`;
   waitForClick; clearText; marker; sound(`Y7A135`); appendText; 
   You`"Listen, Kid, you've got to snap out of it!"`;
   waitForClick; clearText; marker; sound(`Y7A136`); appendText; 
   You`"Wake up!!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Ugh...!!"`;
   waitForClick; clearText; 
});
stopSFX()
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I pounded fiercely against the door again with 
my clinched fists.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But no matter how hard I tried, it was in vain.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Is she just...just my imagination?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(...if I keep this up, what's going to happen 
to You...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought that You would die if I don't do 
something!`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y7A137`); appendText; 
   You`"Kid...?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I'm so sorry...You."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I strained to speak, squeezing out my words.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"OKAY, LET'S GO!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I reached out my hand to You.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y7A138`); appendText; 
   You`"Whew, finally..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You gave my hand a squeeze back.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`One last time, I looked back at the door...`;
   waitForClick; clearText; marker; appendText; 
   Narr`And then turned and ran with all my might.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We sprinted as hard as our legs would carry us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Splashing through the water as it gushed like 
a waterfall, I ran with everything I had, 
You's hand gripped tightly in mine.`;
   waitForClick; clearText; marker; sound(`Y7A139`); appendText; 
   Announcement`"Three minutes...until...implosion."`;
   waitForClick; clearText; 
});
playBGM({ num: 10, volume: 100 });
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Bounding up the emergency stairs, we reached 
Zweite Stock.`;
   waitForClick; clearText; 
});
bgload({ name: `BG27A4`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We ran hard down the emergency corridor.`;
   waitForClick; clearText; marker; sound(`Y7A140`); appendText; 
   Announcement`"Two minutes...until...implosion."`;
   waitForClick; clearText; marker; appendText; 
   Narr`We applied our strength together and pushed 
open the emergency stairwell door.`;
   waitForClick; clearText; 
});
bgload({ name: `BG29A2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Closing the door tightly, we then headed up 
the long set of stairs.`;
   waitForClick; clearText; marker; sound(`Y7A141`); appendText; 
   Announcement`"One minute...until...implosion."`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the distance the sign read Erste boden. 
First floor!`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just 50 more feet!`;
   waitForClick; clearText; marker; sound(`Y7A142`); appendText; 
   Announcement`"Thirty seconds..."`;
   waitForClick; clearText; marker; sound(`Y7A143`); appendText; 
   Announcement`"Twenty seconds..."`;
   waitForClick; clearText; marker; sound(`Y7A144`); appendText; 
   Announcement`"Ten,Nine,Eight,Seven..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`We ran toward the final door...`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE04_03`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Clink, clank. Clink, clank.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The door...the door would not open!`;
   waitForClick; clearText; marker; sound(`Y7A145`); appendText; 
   Announcement`"Six,Five,Four,Three"`;
   waitForClick; clearText; marker; sound(`Y7A146`); appendText; 
   Announcement`"...Two...One......"`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 2 });
stopSFX()
playSFX({ name: `SE07_12`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Grrrrrrrr...groannnnnnnnnnn!`;
   waitForClick; clearText; marker; appendText; 
   Narr`The darkness was pierced by a ferocious 
sound...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Like the roar of a dragon.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Or possibly...the last agonizing cry before 
death.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`On the floating island!`;
   waitForClick; clearText; marker; appendText; 
   Narr`The morning sun stained the sky, land and 
ocean...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was the first time we had laid eyes on the 
blue sky and bright sunlight in seven days!`;
   waitForClick; clearText; 
});
bgload({ name: `BG39A1`, transition: 20 });
clock(`5:36`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`In the distance, Sara and Takeshi played 
together.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It appeared as if they were pretending to 
swordfight with a couple of sticks.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Apparently, Takeshi had been routed by Sara's 
sword.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I gazed dreamily at the two as they played.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi was nowhere to be seen. After the 
escape, she had disappeared.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And as for You...?`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU13A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She sat beside me, gazing at the morning sun. `;
   waitForClick; clearText; marker; appendText; 
   Narr`Her eyes misted with tears...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was her first time to see the sun in seven 
days.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Long shadows, from her figure and mine, 
cast at length behind us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Yes, we had successfully escaped from that 
water entrenched labyrinth.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I kept my promise...don't you think?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I turned and asked You.`;
   waitForClick; clearText; marker; sound(`Y7A147`); appendText; 
   You`"Well, the first one at least."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You kept her gaze on the rising sun as she 
answered.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The first one...`;
   waitForClick; clearText; marker; appendText; 
   Narr`...To protect her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And the second?`;
   waitForClick; clearText; marker; sound(`Y7A148`); appendText; 
   You`"The thing that reminds you about life, sugar 
in coffee."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Ah...that..."`;
   waitForClick; clearText; marker; sound(`Y7A149`); appendText; 
   You`"The thing that life depends on, didn't you 
say?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Uh, huh."`;
   waitForClick; clearText; marker; sound(`Y7A150`); appendText; 
   You`"You promised to tell me."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Okay, in that case let me ask you. What are 
some things on which life depends?"`;
   waitForClick; clearText; marker; sound(`Y7A151`); appendText; 
   You`"Water, air, food, housing, 
clothing...money..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Okay, what else?"`;
   waitForClick; clearText; marker; sound(`Y7A152`); appendText; 
   You`"Knowledge, maybe."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Well, I guess there's that, too."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Humans can't live forever in innocence, 
though."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"To live comfortably, humans also need certain 
impurities, things that are granted by 
knowledge."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I guess you could compare those things with 
the milk you put in coffee."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But there's one more thing..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Like the sugar in coffee, we need one more 
thing..."`;
   waitForClick; clearText; marker; sound(`Y7A153`); appendText; 
   You`"What could it be?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"How does sugar taste?"`;
   waitForClick; clearText; marker; sound(`Y7A154`); appendText; 
   You`"Sweet."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It's a wonderful taste, right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So humans...can never live entirely alone."`;
   waitForClick; clearText; marker; sound(`Y7A155`); appendText; 
   You`"????"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You still don't get it?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"People can only know sweetness when they join 
together..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Love."`;
   waitForClick; clearText; 
});
bgload({ name: `IMG05B`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You then squeezed my right hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And I pulled her close to me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You buried her face in my chest.`;
   waitForClick; clearText; marker; appendText; 
   Narr`From You's long hair I could smell her 
fragrance.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The fragrance of sunlight.`;
   waitForClick; clearText; marker; sound(`Y7A036`); appendText; 
   You`"It is sweet...isn't it."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The sun, my sun, which was clear and fresh, 
flowing with brilliance...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tinged with sweetness the smell of spring 
enveloped us completely.`;
   waitForClick; clearText; 
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
