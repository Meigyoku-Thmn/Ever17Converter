varop(`(28 0a a4) b0 := (00) 5`);
varop(`(28 0a a4) b1 := (00) 4`);
varop(`(28 0a a4) b2 := (00) 4`);
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
stopBGM();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
hideTextbox();
setChangePerspectiveDirection(FROM_RIGHT);
triggerChangePerspectiveAnim();
unSkippableDelay(30);
monoColorOverlay({ interval: 3, color: WHITE });
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
setDialogBoxColor(BLUE);
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `BG04B1`, transition: 26 });
playBGM({ num: 18, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
setSceneTitle({ index: 112 });
clock(`15:20`);
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Rip Van Winkle DID exist!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I screamed out.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A426`); appendText; 
   You`"You are so silly."`;
   waitForClick; clearText; marker; sound(`C4A427`); appendText; 
   You`"It's just a fairy tale!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Look, not all fairy tales are fiction!"`;
   waitForClick; clearText; marker; sound(`C4A428`); appendText; 
   You`"That doesn't mean that Rip Van Winkle 
actually existed, does it?"`;
   waitForClick; clearText; marker; sound(`C4A429`); appendText; 
   You`"Besides, even if the tale of Rip Van Winkle 
was real, that has nothing to do with you, 
Kid."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It does, too."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"We're talking about whether people could 
actually travel through time, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A430`); appendText; 
   You`"That's what I mean! Don't you get it?"`;
   waitForClick; clearText; marker; sound(`C4A431`); appendText; 
   You`"I'm saying even if someone could actually 
travel in time, that doesn't necessary mean 
that you did."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Then how come I can see the future?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A432`); appendText; 
   You`"Don't ask me. How should I know..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It has to be because I'm experiencing the 
same moment in time over and over again."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I must have been stuck in LeMU in the past, 
also..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Three days passed, and then four, five 
days...and after that, I must have slipped 
through time for some reason."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Meaning, I must have traveled back in time, 
to the moment I fell into that pond."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"That must be why I can look into the future."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No, I mean, I must be remembering things I've 
already experienced in the past, instead of 
looking into the future to be exact."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I don't know how, but I'm probably carrying 
memories of the past."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU14ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A433`); appendText; 
   You`"Really...well that must be it, then."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh, c'mon, I'm being serious here!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A434`); appendText; 
   You`"I'm sorry...but I've got far more serious, 
urgent problems."`;
   waitForClick; clearText; marker; sound(`C4A435`); appendText; 
   You`"I've got tons of things to think about."`;
   waitForClick; clearText; marker; sound(`C4A436`); appendText; 
   You`"You know what I'm talking about, Kid?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`C4A437`); appendText; 
   You`"I don't know what the reason is, but you can 
predict the future."`;
   waitForClick; clearText; marker; sound(`C4A438`); appendText; 
   You`"So what...?"`;
   waitForClick; clearText; marker; sound(`C4A439`); appendText; 
   You`"It's not like it's a bad ability to have. As 
a matter of fact, I can imagine that it would 
really come in handy."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You make it sound so simple...but in my 
case, I don't think it is the ability to see 
the future, I'm pretty sure I traveled 
through time."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I might even be repeating the same moment in 
history over and over again."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"And what's more, I'm pretty sure the amnesia 
has something to do with the time travel..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A440`); appendText; 
   You`"Look, how many times do I have to tell you?"`;
   waitForClick; clearText; marker; sound(`C4A441`); appendText; 
   You`"Time travel is NOT possible."`;
   waitForClick; clearText; marker; sound(`C4A442`); appendText; 
   You`"And as far as your amnesia, I'm sure you'll 
regain your memories in time!"`;
   waitForClick; clearText; marker; sound(`C4A443`); appendText; 
   You`"You're already beginning to remember things, 
right?"`;
   waitForClick; clearText; marker; sound(`C4A444`); appendText; 
   You`"I mean, you've actually remembered most 
everything, haven't you?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Not everything."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I just remembered things about Sara."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Just childhood memories."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I still don't have any memories from the 
last few years..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I have no idea how I got to LeMU, why or with 
whom."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I still don't remember anything before May 
1st, the day I came to LeMU."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Where I was...what I was doing..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Or who I am..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A445`); appendText; 
   You`"Huh?"`;
   waitForClick; clearText; marker; sound(`C4A446`); appendText; 
   You`"Wa-wa-wait a second."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A447`); appendText; 
   You`"You're Mayo's brother, right? You did 
remember that, don't you?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Uh, yeah."`;
   waitForClick; clearText; marker; sound(`C4A448`); appendText; 
   You`"So you have to at least know 'who you are.'"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But...I don't..."`;
   waitForClick; clearText; marker; sound(`C4A449`); appendText; 
   You`"...?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"How can I explain this..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"If someone were to ask me 'who are you?' All 
I could say is, 'I'm Sara Matsunaga's 
brother.'"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I don't know any other way to answer."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Then all of the sudden ...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A450`); appendText; 
   You`"Oh! Oh, oh, oh!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You raised her voice and pointed her finger 
at me.`;
   waitForClick; clearText; marker; sound(`C4A451`); appendText; 
   You`"Oh, that reminds me - I keep forgetting to 
ask you something important!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Something important?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A452`); appendText; 
   You`"Name! Your name!"`;
   waitForClick; clearText; marker; sound(`C4A453`); appendText; 
   You`"Your name, Kid!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`C4A454`); appendText; 
   You`"Mayo told you, didn't she?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A455`); appendText; 
   You`"You DID ask her, didn't you?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A456`); appendText; 
   You`"You haven't asked her your name!?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Um...no...I haven't."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You shook her head, looked up at the ceiling, 
and chewed on her lips.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She clenched her fist, went to shake it into 
the air, then rethought it and pulled it back 
down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You then proceeded to stomp around in a puddle 
of water.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She crouched down and hopped up swiftly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She took a deep breath.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought she was going to blow it out, but 
she continued to take one long breath in.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And then she said...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU10ADM`, x: 320, useAnim: true });
varop(`(28 0a a2) 4f := (00) 0`);
varop(`(28 0a a2) 3b := (00) 1`);
varop(`(28 0a a2) 3c := (00) VAR_ca_0_6`);
varop(`(28 0a a2) 3d := (00) 6`);
varop(`(28 0a a2) 3e := (00) 2`);
varop(`(28 0a a2) 3f := (00) VAR_c6_0_6`);
varop(`(28 0a a2) 40 := (00) 3`);
openShakeScreenAnim();
showTextbox();
text(() => {
   marker; sound(`C4A457`); appendText; 
   You`"ARE YOU STUPID OR WHAAAAAAAAAAAT??"`;
   waitForClick; clearText; 
});
closeShakeScreenAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Her voice was so loud it shook LeMU like an 
earthquake.`;
   waitForClick; clearText; marker; appendText; 
   Narr`"I was a bit frightened that it would tear the 
partition walls."`;
   waitForClick; clearText; marker; sound(`C4A458`); appendText; 
   You`"That's the first thing you should ask her 
before anything else!!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Well...you probably wouldn't understand this, 
but..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara and I had so much else to talk about."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"We had endless things to talk about...and I 
just didn't have the presence of mind or 
chance to think about myself."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"For us, the first priority was to regain the 
time we had lost."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"And to be honest, I could care less about my 
name."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A459`); appendText; 
   You`"Listen, Kid...just think about it."`;
   waitForClick; clearText; marker; sound(`C4A460`); appendText; 
   You`"It's YOUR own name. Aren't you curious to 
know?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Now that you've brought it up, I'm starting 
to wonder..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"When I was talking to Sara, it didn't even 
flash through my mind."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A461`); appendText; 
   You`"*Sigh*..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You sighed with an exaggerated gesture.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Well just put yourself in our position, You?" `;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara and I saw each other for the first time 
in nine years."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"We were just so happy, caught up in the 
memories..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But on the other hand, we were scared, in 
pain and our hearts ached..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"All these emotions were mixed up and jumbled 
together and came flooding over us."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sara and I were overwhelmed just trying to 
understand one another."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Like I said, names didn't seem so important 
at that time."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"She just called me 'brother,' and I just 
wanted to call her Sara."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Do you understand?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A462`); appendText; 
   You`"No, not at all."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You said that and started to walk off.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey, wait a second! Where are you going?"`;
   waitForClick; clearText; 
});
bgload({ name: `BG25B3`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Splashing water, You walked down the long 
straight corridor ...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tagged along beside her and asked her again.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey, where are you going?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A463`); appendText; 
   You`"I'm going to ask Mayo."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A464`); appendText; 
   You`"Well, helloooo? Your name of course, Kid!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Look, you don't have to do that..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A465`); appendText; 
   You`"Huh? Why not?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A466`); appendText; 
   You`"What you've been saying doesn't make sense."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A467`); appendText; 
   You`"Don't you want to regain your full memory? 
Don't you want to know who you are?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh, of course I do, but... "`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A468`); appendText; 
   You`"Well then, instead of talking about stupid, 
outrageous things like seeing the future or 
time travel..."`;
   waitForClick; clearText; marker; sound(`C4A469`); appendText; 
   You`"Don't you think it'd just be faster to ask 
Mayo?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought back briefly to the sight of myself 
in that mirror.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had been so confused at that time because 
'my face' didn't look like 'my face.' `;
   waitForClick; clearText; marker; appendText; 
   Narr`If the same thing happened when Sara told me 
my name...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was afraid that I might feel like 'my name' 
wasn't really 'my name,' and end up all 
confused again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`To tell the truth, it was a bit scary.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Besides ...`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Is a name really all that important?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A470`); appendText; 
   You`"...What?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Look, names are just a way people give 
themselves to make identifying one another 
more convenient."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It's just for convenience...so while living 
without a name certainly has its own 
challenges, I don't think a name is an 
absolute necessity."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Take dolphins. They are highly intelligent 
creatures, but they don't go around calling 
one another by name."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"And they seem to be getting along just fine."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"They seem to be able to identify one dolphin 
from the others, too..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"They know which one is a son, which one is a 
wife and the difference between a gray whale 
and a killer whale..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"They don't have names, yet they can recognize 
things correctly."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"And...this is just a speculation, but...they 
seem to recognize individual identities."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"A dolphin seems to have its own sense of 
self, separate from that of the dolphin 
swimming next to it. And it is aware that it 
is a separate entity.."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"They don't have to depend on names to 
recognize all these things..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"My name is James, this one next to me is 
Ling Ling and that one chasing after a fish 
is Yumemi ..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I don't think they do that."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It may sound kind of cocky, but sometimes I 
feel humans depend on names too much."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"If one day, this girl you've known as Ling 
Ling tells you 'Oh, by the way my name is 
Lang Lang,' wouldn't that throw you off?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It'd cause confusion...and you might think..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"'You know, Ling Ling and Lang Lang are really 
similar, but they're probably just two 
different people.'"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It seems stupid to get confused just because 
of a name."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Meaning people value, trust and depend on 
names, more than the actual individual 
differences..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I bet dolphins don't think like that."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Because, to begin with, they don't have 
names to identify individuals."`;
   waitForClick; clearText; marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I realized that for the first time once I 
lost my name."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I noticed that a name really isn't all that 
important."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You didn't stop walking.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't tell whether she was listening to 
me or not, because she didn't respond to me 
at all.`;
   waitForClick; clearText; 
});
bgload({ name: `BG26B3R`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Hey, are you listening to me?" `;
   waitForClick; clearText; marker; appendText; 
   Narr`As we turned around a corner, I asked her.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A471`); appendText; 
   You`"Yup, I'm listening, I'm listening."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A472`); appendText; 
   You`"I've been thinking about what you were just 
saying..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A473`); appendText; 
   You`"I feel like I understand what you mean."`;
   waitForClick; clearText; marker; sound(`C4A474`); appendText; 
   You`"You know, I've had a complex about my name 
for a long time, and I've actually thought 
quite a lot about this issue."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Complex?"`;
   waitForClick; clearText; marker; sound(`C4A475`); appendText; 
   You`"Yeah."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You don't like your own name, You?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A476`); appendText; 
   You`"Of course I don't."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Why?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A477`); appendText; 
   You`"I'm embarrassed about it."`;
   waitForClick; clearText; marker; sound(`C4A478`); appendText; 
   You`"People introduce themselves to one another 
when they meet, right?"`;
   waitForClick; clearText; marker; sound(`C4A479`); appendText; 
   You`"Every time a new year at school would start 
I would just cringe..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I murmured.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I remember you said something about your 
full name being much longer, right?"`;
   waitForClick; clearText; marker; sound(`C4A480`); appendText; 
   You`"Yeah."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Well, would that have something to do with 
the fact that you don't like your name?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A481`); appendText; 
   You`"Something to do with it? ... that IS WHY I 
don't like it."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You stopped walking.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She had a bitter smile on her face.`;
   waitForClick; clearText; marker; sound(`C4A482`); appendText; 
   You`"Do you want to know?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A483`); appendText; 
   You`"I still haven't told you my full name yet."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Uh, I guess."`;
   waitForClick; clearText; marker; sound(`C4A484`); appendText; 
   You`"Will you promise that you won't laugh?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"...Sure."`;
   waitForClick; clearText; marker; sound(`C4A485`); appendText; 
   You`"Okay, I'll tell you."`;
   waitForClick; clearText; marker; sound(`C4A486`); appendText; 
   You`"My name is..."`;
   waitForClick; clearText; marker; sound(`C4A487`); appendText; 
   You`"Tanaka..."`;
   waitForClick; clearText; marker; sound(`C4A488`); appendText; 
   You`"Yubiseiakikana."`;
   waitForClick; clearText; 
});
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"What ...?"`;
   waitForClick; clearText; marker; sound(`C4A489`); appendText; 
   You`"It means 'gentle', 'beautiful', 'pure', 
'autumn', 'fragrant', 'green', 'blossom'."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What!?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yubiseiakikana!?"`;
   waitForClick; clearText; 
});
playBGM({ num: 13, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`All the sudden, it was as if I felt a heavy 
thud in the bottom of my heart.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A strange feeling started to take over my body.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A sense of something out of place...`;
   waitForClick; clearText; marker; appendText; 
   Narr`That's it! That's right!`;
   waitForClick; clearText; marker; appendText; 
   Narr`I must have known You's real name!`;
   waitForClick; clearText; marker; appendText; 
   Narr`Wait...but...I've never heard it from You 
directly...`;
   waitForClick; clearText; marker; appendText; 
   Narr`What is going on!?`;
   waitForClick; clearText; marker; appendText; 
   Narr`This is just like the situation with Sara...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I already knew You's real name, from before...`;
   waitForClick; clearText; marker; appendText; 
   Narr`You's real name was...`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Your...real...name is..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yubisei 'haru' kana."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A490`); appendText; 
   You`"What?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You said it wrong, didn't you?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You actually meant to say 'harukana', right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A491`); appendText; 
   You`"Look, I don't think I'd say my own name 
incorrectly."`;
   waitForClick; clearText; marker; sound(`C4A492`); appendText; 
   You`"Well, 'haru' or 'aki', either one is fine 
with me."`;
   waitForClick; clearText; marker; sound(`C4A493`); appendText; 
   You`"But on the birth certificate, it says 
'aki'..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A494`); appendText; 
   You`"What?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Your full name has to be Yubisei 'haru' kana!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It's not 'aki'!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A495`); appendText; 
   You`"Ha, ha, ha, ha, ha..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU12ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A496`); appendText; 
   You`"A, ha, ha, ha, ha."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What are you laughing about? This isn't 
funny at all!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You don't remember your own name!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A497`); appendText; 
   You`"Yeah, yeah, that just may be it."`;
   waitForClick; clearText; marker; sound(`C4A498`); appendText; 
   You`"My real name is...oh, was it Ling Ling? No 
wait, maybe it was Lang Lang?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`C4A499`); appendText; 
   You`"Kid, listen up."`;
   waitForClick; clearText; marker; sound(`C4A500`); appendText; 
   You`"My name is Yubiseiakikana."`;
   waitForClick; clearText; marker; sound(`C4A501`); appendText; 
   You`"It's been that way since I was born, and it 
will be that way as long as I live."`;
   waitForClick; clearText; marker; sound(`C4A502`); appendText; 
   You`"You got it?"`;
   waitForClick; clearText; marker; sound(`C4A503`); appendText; 
   You`"It's neither, haru, or natsu, or fuyu, but 
aki."`;
   waitForClick; clearText; marker; sound(`C4A504`); appendText; 
   You`"Do you know why?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`C4A505`); appendText; 
   You`"I was born 18 years and seven months ago."`;
   waitForClick; clearText; marker; sound(`C4A506`); appendText; 
   You`"A little more than seven months, to be exact."`;
   waitForClick; clearText; marker; sound(`C4A507`); appendText; 
   You`"My birthday is September 22."`;
   waitForClick; clearText; marker; sound(`C4A508`); appendText; 
   You`"I was born in Japan."`;
   waitForClick; clearText; marker; sound(`C4A509`); appendText; 
   You`"I wasn't born in the southern hemisphere."`;
   waitForClick; clearText; marker; sound(`C4A510`); appendText; 
   You`"Let's see...was September spring in Japan!?"`;
   waitForClick; clearText; marker; sound(`C4A511`); appendText; 
   You`"No, it's autumn, isn't it?"`;
   waitForClick; clearText; marker; sound(`C4A512`); appendText; 
   You`"So, my name is 'akikana' - 'aki', as in 
autumn - you got that?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was already starting to lose my sense of 
reality.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A bottomless fear crept up from the bit of my 
stomach and threatened to leap out of my 
throat.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My head started to ache.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And then -`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A513`); appendText; 
   Sara`"Brother! Nakkyu!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I glanced as I put my hand on my temple.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Splashing water in all directions, Sara came 
toward us.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU15ADM`, name2: `SA11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A514`); appendText; 
   You`"Good timing..."`;
   waitForClick; clearText; marker; sound(`C4A515`); appendText; 
   Sara`"Good timing?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara stood in front of us, tilting her head 
quizzically.`;
   waitForClick; clearText; marker; sound(`C4A516`); appendText; 
   You`"Actually, I had a question for you, Mayo."`;
   waitForClick; clearText; marker; sound(`C4A517`); appendText; 
   Sara`"What is it?"`;
   waitForClick; clearText; marker; sound(`C4A518`); appendText; 
   You`"The Kid's name."`;
   waitForClick; clearText; marker; sound(`C4A519`); appendText; 
   You`"Will you tell me his real name?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You put her hand over my shoulder.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I knew her hand was touching my shoulder, but 
I couldn't feel it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was dizzy and about to faint.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought to myself 'This'll probably be a lot 
easier if I just faint.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`But both my feet stood soundly on the floor 
and I braced myself.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked at Sara.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara's mouth opened up like an empty hollow.`;
   waitForClick; clearText; 
});
hideTextbox();
fgload({ id: 2, name: `SA12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Sara`"   !"`;
   waitForClick; clearText; marker; appendText; 
   Sara`"   ,   ?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't hear her voice. `;
   waitForClick; clearText; marker; appendText; 
   Narr`I saw Sara's lips were moving, but I couldn't 
hear her voice for some reason.`;
   waitForClick; clearText; marker; appendText; 
   You`"   ,   "`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   You`"   ,   ..."`;
   waitForClick; clearText; marker; appendText; 
   You`"   ,   '   '   "`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't hear You's voice, either.`;
   waitForClick; clearText; marker; appendText; 
   Narr`All I could hear was just the sound of my 
blood flowing through my ears...`;
   waitForClick; clearText; marker; appendText; 
   Narr`In that moment, my sight crashed into pieces.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The scenery before me was stripped of all 
color...`;
   waitForClick; clearText; marker; appendText; 
   Narr`A voice...a voice ...`;
   waitForClick; clearText; marker; appendText; 
   Narr`A voice...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could heard a voice from far...`;
   waitForClick; clearText; marker; appendText; 
   Narr`From far away darkness...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Somebody whispering to me...`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Who are you?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Who am I?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`"Who..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`"...am I?"`;
   waitForClick; clearText; 
});
bgload({ name: `BG26B3R`, transition: 26 });
multifgload2({ id1: 1, id2: 2, name1: `YU15ADM`, name2: `SA12ADM`, x1: 128, x2: 512, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; sound(`C4A520`); appendText; 
   Sara`"Hokuto!"`;
   waitForClick; clearText; marker; sound(`C4A521`); appendText; 
   Sara`"Your name is Hokuto!"`;
   waitForClick; clearText; marker; sound(`C4A522`); appendText; 
   You`"Hokuto, huh?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A523`); appendText; 
   You`"So that's what he's called..."`;
   waitForClick; clearText; marker; sound(`C4A524`); appendText; 
   You`"Now that you mention it, he does look kind 
of look like a 'Hokuto' to me."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hokuto..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"That is..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"...my..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"...name...?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A525`); appendText; 
   Sara`"That's right, brother."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hokuto...Hokuto...Hokuto..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I repeated it aloud over and over again.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hokuto...Hokuto...Hokuto..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`My hunch had been right.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had never heard the name 'Hokuto' before.`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Hokuto'....That couldn't possibly be my name. `;
   waitForClick; clearText; marker; appendText; 
   Narr`It didn't feel real to me at all.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But Sara wouldn't lie to me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`So I figured 'Hokuto' must be my name.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Hokuto...Hokuto...Hokuto...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Name...name...name...`;
   waitForClick; clearText; marker; appendText; 
   Narr`You's name is Yubiseiakikana.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My name is Hokuto.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was too much to think about.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt I was close to my mental limit.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was dizzy.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My head ached.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked at my palm.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had five fingers...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everything seemed out of place to me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I still couldn't regain the 'real' me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Is this me who's looking at my palm? Or is it 
somebody that isn't me?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Is Hokuto really me? Or is it me who's not 
Hokuto?)`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hokuto...Hokuto...Hokuto..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Is it really...?"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
stopBGM();
hideTextbox();
setChangePerspectiveDirection(FROM_LEFT);
triggerChangePerspectiveAnim();
unSkippableDelay(30);
monoColorOverlay({ interval: 3, color: WHITE });
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
setDialogBoxColor(GREEN);
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `EV_TU02A`, transition: 26 });
playBGM({ num: 19, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
clock(`19:44`);
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Is that really his name?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi slightly nodded her head.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her face was all red.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"So you're Chami. Because you're charming."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That's cute. What a good name!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`How....cute.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That was what I thought.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I did my best to stifle my laughter.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU02B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`C4A526`); appendText; 
   Tsugumi`"Ah c'mon! You promised not to laugh!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'm not laughing!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tried to keep a straight face...but the 
corners of my mouth started to twitch.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could just imagine Tsugumi baby-talking to 
it. 'Chami-poo, Chami-poo it's din-din time.'`;
   waitForClick; clearText; marker; sound(`C4A527`); appendText; 
   Tsugumi`"Aaaargh!"`;
   waitForClick; clearText; marker; sound(`C4A528`); appendText; 
   Tsugumi`"That's why I didn't want to tell you!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sullen, Tsugumi was red-faced...`;
   waitForClick; clearText; marker; appendText; 
   Narr`...but she held out the bath towel she had 
behind her back.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh, thanks."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took the towel and wiped myself down.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Phew..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I breathed deeply, feeling reborn, as I 
glanced at Tsugumi's profile.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU02A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She was playing with the hamster in her hand, 
and her cheeks were bright.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She looked so happy ...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was the first time I'd ever seen her smile 
like she meant it.`;
   waitForClick; clearText; marker; sound(`C4A529`); appendText; 
   Tsugumi`"Takeshi..."`;
   waitForClick; clearText; marker; sound(`C4A530`); appendText; 
   Tsugumi`"Thank you."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi said it in a whisper without looking 
at my face.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `BG25B3`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
clock(`19:49`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I headed towards the EI area with Tsugumi.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Since we were in the area with the Generator 
Room, we had to take one of the egg-like 
elevators to get back.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt excited, maybe from the feeling of 
accomplishment of rescuing Chami.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But...my feet were heavy. My body just 
couldn't keep up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was exhausted.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Five hours earlier, I had been running with 
You on my back, who had started suffering 
from something all of a sudden.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And with this to rescue Chami, I swam 
over 300 feet from underwater ...`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Is this really just fatigue?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(This heaviness...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I feel a bit feverish, too.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I have a slight headache...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Maybe I caught a cold?)`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A531`); appendText; 
   Tsugumi`"What's wrong?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi must have noticed my slow steps, and 
looked at my face, worried.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'm just tired."`;
   waitForClick; clearText; marker; sound(`C4A532`); appendText; 
   Tsugumi`"Are you alright?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Ha-ha, yeah, I'm fine."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'm just tired is all."`;
   waitForClick; clearText; marker; sound(`C4A533`); appendText; 
   Tsugumi`"Okay."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi was worried about me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a funny feeling.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"By the way, how about yourself?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A534`); appendText; 
   Tsugumi`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Your leg...you know, your injury."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi was dragging her right foot.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A535`); appendText; 
   Tsugumi`"I'm alright."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Are you really? The wound didn't open up or 
anything, did it?"`;
   waitForClick; clearText; marker; sound(`C4A536`); appendText; 
   Tsugumi`"Do you wanna see?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi stopped walking.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She quickly flipped up her skirt with her 
hands.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"C-cut it out!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`In shock, I slapped Tsugumi's hand and 
stopped her.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A537`); appendText; 
   Tsugumi`"Ha, ha, ha, ha..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi chuckled gleefully.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My feet felt much lighter all of the sudden.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeFG({ id: 1, useAnim: false });
bgload({ name: `BG23B1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`As for You...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It turned out she wasn't as bad as I thought.`;
   waitForClick; clearText; marker; appendText; 
   Narr`After resting for about an hour in the 
infirmary, You regained a surprising amount 
of her strength. `;
   waitForClick; clearText; marker; appendText; 
   Narr`'But why did you start suffering like that 
all the sudden?'`;
   waitForClick; clearText; marker; appendText; 
   Narr`I asked You, but she changed the subject and 
didn't tell me anything.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I also asked Sora, but her answer was the same.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora must have known something, since she had 
examined You with the repaired L-MRI.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That thought still bothered me.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `BG24A2`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It was still such that only one person at a 
time could ride the egg.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi went up first.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I rode up shortly after. `;
   waitForClick; clearText; marker; appendText; 
   Narr`The egg zipped upward, quickly arriving at 
Zweite stock.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
bgload({ name: `BG23A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`As soon as I got there, Tsugumi was waiting 
for me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Chami was sitting on her hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi stuck out both of her arms to the side.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Chami walked from one hand to the other 
crossing Tsugumi's arms.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi had such a happy smile on her face...`;
   waitForClick; clearText; marker; appendText; 
   Narr`That I couldn't help from smiling, too...`;
   waitForClick; clearText; marker; appendText; 
   Narr`For no particular reason, Tsugumi and I 
stared at each other for a while.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A538`); appendText; 
   Tsugumi`"Do you want to try?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Saying so, Tsugumi put Chami on my shoulder.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I stretched out my arms...`;
   waitForClick; clearText; marker; appendText; 
   Narr`And suddenly Chami charged onto my arms.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It tickled so much that I couldn't help but 
wriggle my body.`;
   waitForClick; clearText; marker; sound(`C4A539`); appendText; 
   Tsugumi`"Ha, ha, ha."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Chami looked hesitant when he got to the end, 
which was the tip of my hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I held Chami gently in my palm and looked at 
him closely.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Chami, huh...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Are you Chami? Well are you? C'mon answer 
me!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Of course, Chami didn't answer.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe he was frightened I would eat him.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah...he sure is charming."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"He's Chami because he's so darn charming."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Curious, I decided to ask Tsugumi a question.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Why are you called Tsugumi?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A540`); appendText; 
   Tsugumi`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Your name, I mean."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Does it come from Chinese character for the 
bird, the redwing?"`;
   waitForClick; clearText; marker; sound(`C4A541`); appendText; 
   Tsugumi`"The bird?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"If I remember correct, they migrate, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A542`); appendText; 
   Tsugumi`"Oh, redwings?"`;
   waitForClick; clearText; marker; sound(`C4A543`); appendText; 
   Tsugumi`"Not to disappoint you, but..."`;
   waitForClick; clearText; marker; sound(`C4A544`); appendText; 
   Tsugumi`"Nope, my name has nothing to do with birds."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Then what does your name mean?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`As I asked Tsugumi, I passed Chami back into 
her hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi picked up Chami, and told me.`;
   waitForClick; clearText; marker; sound(`C4A545`); appendText; 
   Tsugumi`"'Satellite of the earth' and 'where we are 
at.'"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Huh?"`;
   waitForClick; clearText; marker; sound(`C4A546`); appendText; 
   Tsugumi`"What's the one satellite this earth has?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"The moon?"`;
   waitForClick; clearText; marker; sound(`C4A547`); appendText; 
   Tsugumi`"And where are we right now?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"LeMU."`;
   waitForClick; clearText; marker; sound(`C4A548`); appendText; 
   Tsugumi`"What's all around us here at LeMU?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Uh...around us....the ocean?"`;
   waitForClick; clearText; marker; sound(`C4A549`); appendText; 
   Tsugumi`"Yup."`;
   waitForClick; clearText; marker; sound(`C4A550`); appendText; 
   Tsugumi`"In Japanese you write it 'moon' and then 
'ocean,' and read it 'Tsugumi.'"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh, I see."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Come to think of it, I didn't know which 
Chinese characters your name used."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"'Moon' and 'ocean', huh...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hmm, that's a really pretty name."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi's cheeks turned pink.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And then...`;
   waitForClick; clearText; 
});
playBGM({ num: 18, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`C4A551`); appendText; 
   Coco`"Daddy! Mommy!"`;
   waitForClick; clearText; marker; sound(`PIPI_10`); appendText; 
   Pipi`"Bow-wow! Bow-wow!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco and Pipi came rushing in.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `CO02ADM`, name2: `TU14ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"I told you NOT to call me daddy!"`;
   waitForClick; clearText; marker; sound(`C4A552`); appendText; 
   Tsugumi`"I told you NOT to call me mommy!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `TU07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A553`); appendText; 
   Tsugumi`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi and I looked at each other.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Coco's been calling you mommy, Tsugumi?"`;
   waitForClick; clearText; marker; sound(`C4A554`); appendText; 
   Tsugumi`"And she's calling you daddy, Takeshi?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"She keeps doing it no matter what I say!"`;
   waitForClick; clearText; marker; sound(`C4A555`); appendText; 
   Coco`"Hey, daddy? Mommy? Let's play!"`;
   waitForClick; clearText; marker; sound(`PIPI_01`); appendText; 
   Pipi`"Bow-wow!"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: WHITE });
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: false });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`After a while...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi and I had begged Coco 'not to call us 
daddy or mommy.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`It took us about three hours to finally 
convince her. `;
   waitForClick; clearText; marker; appendText; 
   Narr`It was three times more exhausting to 
convince Coco than to dash with You on my 
back, AND swim underwater 102 meters.`;
   waitForClick; clearText; marker; appendText; 
   Narr`By the way, Coco's reason for calling Tsugumi 
'mommy' was...`;
   waitForClick; clearText; marker; sound(`C4A556`); appendText; 
   Coco`"A girl who doesn't have a mommy can call 
somebody who reminds her of mommy 'mommy.'"`;
   waitForClick; clearText; marker; sound(`C4A557`); appendText; 
   Coco`"It's written in the Naacal Tablet, wasn't it?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`... So she said.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Needless to say, Coco already had a real 
mother.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
bgload({ name: `BG26B3R`, transition: 20 });
clock(`23:6`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`After finally convincing Coco, I went to see 
You.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Even before I had gone to rescue Chami, You 
had seemed to be recovering her strength.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But the way she looked when she had first 
started feeling pain, didn't seem normal.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was still concerned about her even though 
she looked better.`;
   waitForClick; clearText; marker; appendText; 
   Narr`So I decided to make sure You was alright.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora told me I could find You in the Security 
Office.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
playBGM({ num: 5, volume: 100 });
bgload({ name: `EV_YU04A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I entered into the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You was sitting in front of the console, 
staring blankly at the screen.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hi."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I called out a greeting as I sat down in the 
seat next to her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You grabbed a coffee cup, took big a gulp, and 
said...`;
   waitForClick; clearText; marker; sound(`C4A558`); appendText; 
   You`"Thank you."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Huh?"`;
   waitForClick; clearText; marker; sound(`C4A559`); appendText; 
   You`"I didn't have a chance to say it earlier, 
right?"`;
   waitForClick; clearText; marker; sound(`C4A560`); appendText; 
   You`"So, thank you."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You's eyes were fixed on the display.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Are you talking about when I carried you to 
the infirmary, earlier?"`;
   waitForClick; clearText; marker; sound(`C4A561`); appendText; 
   You`"Yes."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You don't have to thank me."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I just want to ask you a question."`;
   waitForClick; clearText; marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What caused it, anyway?"`;
   waitForClick; clearText; marker; sound(`C4A562`); appendText; 
   You`"Cause? What are you talking about?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You still wouldn't look at me.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"A normal, healthy person wouldn't just 
suddenly clutch their chest in pain, you know?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"And besides..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You said 'It happens all the time'."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What is it all about?"`;
   waitForClick; clearText; 
});
bgload({ name: `BG11A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`When I asked, she turned the seat halfway and 
stood up.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A563`); appendText; 
   You`"Hey Takeshi? Do you remember why I came to 
LeMU?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You changed the subject all of the sudden.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't understand why she was asking the 
question, but I answered her anyway.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah, I do."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You came to get a part-time job for the 
holidays..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"But it was just an excuse to search for your 
father who's been missing for 17 years, 
right?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I remembered the story You told me in front 
of the merry-go-round the first day..`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: WHITE });
removeFG({ id: 1, useAnim: false });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; sound(`S1C122`); appendText; 
   You`"My mom seems to think my dad is already 
dead..."`;
   waitForClick; clearText; marker; sound(`S1C123`); appendText; 
   You`"But you know?"`;
   waitForClick; clearText; marker; sound(`S1C124`); appendText; 
   You`"I believe!"`;
   waitForClick; clearText; marker; sound(`S1C125`); appendText; 
   You`"I know that my dad is still alive somewhere!"`;
   waitForClick; clearText; marker; sound(`S1C126`); appendText; 
   You`"He's got to be!"`;
   waitForClick; clearText; marker; sound(`S1C127`); appendText; 
   You`"He just went missing. They never found his 
body."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `BG11A1`, transition: 26 });
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; sound(`C4A564`); appendText; 
   You`"I just had to find out."`;
   waitForClick; clearText; marker; sound(`C4A565`); appendText; 
   You`"If he was alive...or...dead..."`;
   waitForClick; clearText; marker; sound(`C4A566`); appendText; 
   You`"If he's alive, of course I want to see 
him..."`;
   waitForClick; clearText; marker; sound(`C4A567`); appendText; 
   You`"And if he's dead, I wanted to find some kind 
of evidence."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A568`); appendText; 
   You`"Otherwise I won't give up...I just can't 
accept it."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Just like that time, I didn't know what to 
say to her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The story of the 800-year-old nun came to my 
mind.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You believed that 'the 800 year-old nun' 
actually existed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`How in the story, the sound of the bell had 
stopped one day, but nobody actually found 
her body. `;
   waitForClick; clearText; marker; appendText; 
   Narr`When I came to think of it then, I realized 
that was probably You's wish.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was probably mixing her feelings about her 
father's situation with the story of the nun.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It occurred to me that way.`;
   waitForClick; clearText; marker; sound(`C4A569`); appendText; 
   You`"And so that's what I was researching just 
now."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...And...did you...find out anything?"`;
   waitForClick; clearText; marker; sound(`C4A570`); appendText; 
   You`"Nothing."`;
   waitForClick; clearText; marker; sound(`C4A571`); appendText; 
   You`"I can't figure out the password...I give up."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I looked at the monitor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`An authentication window was being displayed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The cursor was flashing without a sound. `;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I see..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Biting her lip, You glanced down, dejectedly. `;
   waitForClick; clearText; marker; appendText; 
   Narr`She was wrapped in a hazy blue light from the 
display.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I picked up the cup from the table and sipped 
some of You's leftover coffee.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was cold.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It's alright."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I know you'll...see him again..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked down into the cup.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The black coffee hid the bottom of the 
cup from my view.`;
   waitForClick; clearText; marker; sound(`C4A572`); appendText; 
   You`"Thank you..."`;
   waitForClick; clearText; marker; sound(`C4A573`); appendText; 
   You`"But...I don't think I'll ever see him 
again..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked up in surprise.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You was forcing herself to smile.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She squinted her eyes and looked off into the 
distance. `;
   waitForClick; clearText; marker; sound(`C4A574`); appendText; 
   You`"I came here because I thought I wanted to 
find out about my dad..."`;
   waitForClick; clearText; marker; sound(`C4A575`); appendText; 
   You`"But...I realize actually that wasn't it at 
all ... "`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...... ?"`;
   waitForClick; clearText; marker; sound(`C4A576`); appendText; 
   You`"I'm running out of time."`;
   waitForClick; clearText; marker; sound(`C4A577`); appendText; 
   You`"I've gone way past my limit."`;
   waitForClick; clearText; marker; sound(`C4A578`); appendText; 
   You`"So that's why..."`;
   waitForClick; clearText; marker; sound(`C4A579`); appendText; 
   You`"Before the time comes...I had to know..."`;
   waitForClick; clearText; marker; sound(`C4A580`); appendText; 
   You`"The truth..."`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(She's running out of time?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(She doesn't think she'll ever see him 
again...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`'It happens all the time.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`(She'd been suffering with her hand on her 
chest.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`No, it can't be ...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't even want to think about it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Closing my eyes, I took a deep breath and 
tried to shake bad thoughts from my mind.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, You?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What do you mean by that...?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You crossed her arms behind her back and 
started walking slowly away, head down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She stopped in front of the wall, turned 
around and walked back in front of me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The sound of her shoes echoed on the hard 
floor...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The cursor silently flashing on the display...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The cold coffee in my hand...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked into the cup again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The glossy liquid was rippling with small 
waves. `;
   waitForClick; clearText; marker; sound(`C4A581`); appendText; 
   You`"I can't tell you."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The sound of her shoes stopped abruptly.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Why?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She raised her face quietly and said.`;
   waitForClick; clearText; marker; sound(`C4A582`); appendText; 
   You`"If I start telling you now, I might talk 
about things I don't want to talk about."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"But..."`;
   waitForClick; clearText; 
});
playBGM({ num: 19, volume: 100 });
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A583`); appendText; 
   You`"Takeshi..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You interrupted my words and went on.`;
   waitForClick; clearText; marker; sound(`C4A584`); appendText; 
   You`"Have you ever...done something wrong or 
sinned, Takeshi?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sinned?"`;
   waitForClick; clearText; marker; sound(`C4A585`); appendText; 
   You`"Yes..."`;
   waitForClick; clearText; marker; sound(`C4A586`); appendText; 
   You`"A massive sin..."`;
   waitForClick; clearText; marker; sound(`C4A587`); appendText; 
   You`"I don't care whether you believe in god or 
not."`;
   waitForClick; clearText; marker; sound(`C4A588`); appendText; 
   You`"I'm asking you if you ever committed a sin 
that was morally wrong and there was nothing 
you could do to mend it."`;
   waitForClick; clearText; 
});
choice(
   `Yes`
   `No`
);
switch (choice) {
   case 0: goto(lbl_00000afa);
   case 1: goto(lbl_00000b03);
}
let lbl_00000afa;
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Well..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I guess I might have..."`;
   waitForClick; clearText; marker; sound(`C4A589`); appendText; 
   You`"What have you done?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well...different things, I guess..."`;
   waitForClick; clearText; marker; sound(`C4A590`); appendText; 
   You`"Things you can't tell me?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Uhhh..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I don't really want to talk about it, to be 
honest."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I think that sins are something you carry 
through life by yourself."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It seems cowardly to me to unburden it onto 
someone else, and beg for pity and compassion."`;
   waitForClick; clearText; marker; sound(`C4A591`); appendText; 
   You`"I feel the same way."`;
   waitForClick; clearText; marker; sound(`C4A592`); appendText; 
   You`"That's why I can't tell you."`;
   waitForClick; clearText; marker; sound(`C4A593`); appendText; 
   You`"If I tell you now, it would just be an 
excuse..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`C4A594`); appendText; 
   You`"I crossed a line that should've never been 
crossed."`;
   waitForClick; clearText; marker; sound(`C4A595`); appendText; 
   You`"I turned my back on god..."`;
   waitForClick; clearText; 
});
goto(lbl_00000b4c);
let lbl_00000b03;
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Come on."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I've made lots of mistakes. And you know why? 
Because I'm human."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'd be lying if I told you I'd never hurt 
people I cared about or broke their hearts."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"But I don't know if those are 'godless, 
massive sins'..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A596`); appendText; 
   You`"Well ...you are admirable."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A597`); appendText; 
   You`"No, I mean it."`;
   waitForClick; clearText; marker; sound(`C4A598`); appendText; 
   You`"On the other hand..."`;
   waitForClick; clearText; marker; sound(`C4A599`); appendText; 
   You`"I'm..."`;
   waitForClick; clearText; marker; sound(`C4A600`); appendText; 
   You`"I'm not human anymore."`;
   waitForClick; clearText; marker; sound(`C4A601`); appendText; 
   You`"I crossed a line that should've never been 
crossed. "`;
   waitForClick; clearText; marker; sound(`C4A602`); appendText; 
   You`"I turned my back on god..."`;
   waitForClick; clearText; marker; sound(`C4A603`); appendText; 
   You`"That's why I can't tell you."`;
   waitForClick; clearText; marker; sound(`C4A604`); appendText; 
   You`"If I tell you now, it would just be an 
excuse..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; 
});
goto(lbl_00000b4c);
let lbl_00000b4c;
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A605`); appendText; 
   You`"It's like an original sin to me."`;
   waitForClick; clearText; marker; sound(`C4A606`); appendText; 
   You`"I could never escape from it, and I don't 
intend to."`;
   waitForClick; clearText; marker; sound(`C4A607`); appendText; 
   You`"As long as I live..."`;
   waitForClick; clearText; marker; sound(`C4A608`); appendText; 
   You`"Yes, as long as I live, I must carry this 
sin with me."`;
   waitForClick; clearText; marker; sound(`C4A609`); appendText; 
   You`"But you know what...?"`;
   waitForClick; clearText; marker; sound(`C4A610`); appendText; 
   You`"You might think I'm horrible, but I don't 
regret anything."`;
   waitForClick; clearText; marker; sound(`C4A611`); appendText; 
   You`"It is probably better this way..."`;
   waitForClick; clearText; marker; sound(`C4A612`); appendText; 
   You`"Because this way I'm the only one who has 
sinned..."`;
   waitForClick; clearText; marker; sound(`C4A613`); appendText; 
   You`"That means I'm the only one who will be 
punished..."`;
   waitForClick; clearText; marker; sound(`C4A614`); appendText; 
   You`"She has no sin to carry on."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"She...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Who are you talking about?"`;
   waitForClick; clearText; marker; sound(`C4A615`); appendText; 
   You`"About myself..."`;
   waitForClick; clearText; marker; sound(`C4A616`); appendText; 
   You`"My other self..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Your other self...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Are you telling me you have split 
personality?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You didn't say anything and took the cup from 
my hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She sipped the cold coffee. `;
   waitForClick; clearText; marker; appendText; 
   Narr`For some reason, You suddenly tilted the cup. `;
   waitForClick; clearText; marker; appendText; 
   Narr`The black liquid, overtaken by the force of 
gravity, went splashing to the floor. `;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Y-You..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You's eyes were fixed on me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no expression on her face.`;
   waitForClick; clearText; marker; appendText; 
   Narr`All the emotion had gone from her face and I 
couldn't read what she was thinking.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her eyes were dark, dull, and without a 
spark, like a pair of ash gray glass beads. `;
   waitForClick; clearText; marker; appendText; 
   Narr`Eventually You whispered.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; sound(`C4A617`); appendText; 
   You`"She is ..."`;
   waitForClick; clearText; marker; sound(`C4A618`); appendText; 
   You`"My sister."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Your sister...?"`;
   waitForClick; clearText; marker; sound(`C4A619`); appendText; 
   You`"Yes ..."`;
   waitForClick; clearText; marker; sound(`C4A620`); appendText; 
   You`"And at the same time she is me."`;
   waitForClick; clearText; marker; sound(`C4A621`); appendText; 
   You`"She and I are..."`;
   waitForClick; clearText; marker; sound(`C4A622`); appendText; 
   You`"...twins, you see."`;
   waitForClick; clearText; marker; sound(`C4A623`); appendText; 
   You`"She is my..."`;
   waitForClick; clearText; marker; sound(`C4A624`); appendText; 
   You`"...twin sister ..."`;
   waitForClick; clearText; 
});
varop(`(28 0a a4) b3 := (00) 0`);
jump(`YC5A`);
