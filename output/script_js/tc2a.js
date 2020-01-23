showTextbox();
text(() => {
   Sora(C2T000)`"Someone sees me."`;
   Sora(C2T001)`"That action allows me to manifest myself for 
the first time."`;
   Sora(C2T002)`"On that eye, that visual point."`;
   Sora(C2T003)`"That someone's eye actually creates me."`;
   Sora(C2T004)`"Takeshi..."`;
   Sora(C2T005)`"When you close your eyes, I disappear."`;

});
l_selection_0_available = 1;
if (l_is_coco_route == 0) goto(lbl_0000008c);
if (l_coco_point != 3) goto(lbl_0000008c);
goto(lbl_00000097);
let lbl_0000008c;
l_selection_0_available = 0;
let lbl_00000097;
choice(
   cond(l_selection_0_available != 0)`Try it.`,
   `......`,
);
switch (l_choice) {
   case 0: goto(lbl_000000ba);
   case 1: goto(lbl_000000c9);
}
let lbl_000000ba;
l_coco_point += 1;
goto(lbl_0000012b);
let lbl_000000c9;
showTextbox();
text(() => {
   Takeshi`"......."`;
   `I said nothing, and nothing happened.`;
   `No, it would be better to say that I couldn't 
say or do anything more.`;
   `It was hard for me to grasp the meaning of 
Sora's words.`;

});
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
bgload({ name: `BG16A3`, transition: 20 });
playSFX({ name: `SE03_01`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `Going into the room, I could hear the beeping 
of the console, indicating someone was 
calling. `;

});
fgload({ id: 1, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T2C238)`"Well, Takeshi..."`;
   Sora(T2C239)`"LeMMIH is calling for me, so I will leave 
and then come back shortly."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `And saying that, Sora disappeared.`;
   `Only the three-dimensional hologram 
depicting LeMU hovered silently in the 
darkness.`;

});
goto(lbl_00000311);
let lbl_0000012b;
showTextbox();
text(() => {
   Takeshi`"When I close my eyes...?"`;
   `I tried closing my eyelids halfway.`;

});
hideTextbox();
makeFGTransparent({ id: 1 });
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
delay({ interval: 60 });
removeFG({ id: 1, useAnim: true });
makeFGNormal({ id: 1 });
showTextbox();
text(() => {
   `Instantly, Sora vanished.`;
   `If Sora did exist, I should have been able to 
see her head above my hand and her feet below.`;
   `But Sora wasn't there.`;
   `My hand kept the laser from reaching my eye, 
so I couldn't see Sora.`;
   `Something about it made her seem fragile and 
temporary. It scared me.`;
   `I quickly put down my hand.`;

});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `And suddenly, without a sound, Sora returned.`;
   `She smiled gently.`;
   Takeshi`"Sora...?"`;
   Sora(C2T006)`"Yes...?"`;
   `There was no real meaning in my question.`;
   `Maybe it was just that I wanted to see 
whether or not she would answer me.`;
   `Given her fragile existence, there seemed to 
be a danger that she might slip away at any 
moment...`;
   `I was uneasy about it, and at the same time 
felt a sort of awe about the mystery of it.`;

});
fgload({ id: 1, name: `SO08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C2T007)`"Is there anything else? Please don't stare 
at me like that."`;
   `Sora was blushing.`;
   Takeshi`"Oh...no. Nothing else."`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Sora pinched her lips closed, as if she were 
slightly embarrassed.`;
   Sora(C2T008)`"By the way, Takeshi..."`;
   Takeshi`"Yeah?"`;

});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C2T009)`"Takeshi...have you ever seen the moon?"`;
   `The question came out of nowhere.`;
   `But it was one that caused me to burst out 
laughing.`;
   Takeshi`"Ha, ha, ha! Yeah, of course I have."`;
   `I replied, immediately.`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C2T010)`"Well, now let's say that you have seen a full 
moon."`;
   Sora(C2T011)`"And let's say that you closed your eyes. Do 
you think that moon would still be there?"`;
   Takeshi`"Why are you asking such obvious questions?"`;
   Takeshi`"Of course it would."`;

});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C2T012)`"And how about if everyone in the world 
closed their eyes all at the same time?"`;
   Takeshi`"I don't know what your point is, but...even if 
everyone in the world closed their eyes, the 
moon wouldn't disappear."`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C2T013)`"Really?"`;
   Takeshi`"Yeah."`;
   Sora(C2T014)`"How can you be sure?"`;
   Takeshi`"Just open your eyes and check, right?"`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C2T015)`"That goes against the purpose of this 
exercise."`;
   Sora(C2T016)`"My question was whether there is any way 
of measuring whether or not the moon 
exists, if someone closes their eyes."`;
   Takeshi`"?"`;
   Sora(C2T017)`"When you close your eyes, do you think this 
world still exists?"`;
   Sora(C2T018)`"What if I told you that not only myself, but 
all of LeMU was nothing but an RSD-generated 
illusion.....what would you do then?"`;
   Takeshi`"... Huh?"`;
   Sora(C2T019)`"Can you prove that the walls, the ceiling 
and all of the scenery that you are 
witnessing actually exist?"`;
   `(Is everything I'm looking at...is it 
RSD...???)`;
   `I panicked, glancing around at my surroundings.`;

});
fgload({ id: 1, name: `SO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C2T020)`"Ha, ha, I'm sorry, I was only joking."`;
   Takeshi`"That's a joke?"`;
   Sora(C2T021)`"Yes, LeMU really does exist."`;
   Sora(C2T022)`"You sounded so full of confidence when you 
answered...I thought I would tease you 
just a bit."`;
   `Sora giggled, covering her mouth.`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C2T023)`"However, I can say this..."`;
   Sora(C2T024)`"For humans to know the world around them 
they must use one of their five senses."`;
   Sora(C2T025)`"If they lose all of these, they lose the 
ability to tell whether this world exists, 
or not."`;

});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C2T026)`"Another way of putting it might be to say 
that the perspective is in the eye of the 
beholder."`;
   Sora(C2T027)`"In this instance, I don't mean just sight, 
but hearing, smell, taste, touch - all of the 
senses."`;
   Sora(C2T028)`"The point at which we perceive the world - 
that is perspective."`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C2T029)`"And I..."`;

});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C2T030)`"I....I am the same as the moon."`;
   Sora(C2T031)`"Do you understand?"`;
   `I felt like I had been able to get the gist 
of what she meant.`;
   `Still...I didn't know exactly what she meant 
by... 'I am the same as the moon.'`;
   `I mustered an image of a silvery blue moon, 
its light piercing through the dark night.`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeFG({ id: 1, useAnim: true });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
bgload({ name: `IMG05C`, transition: 20 });
showTextbox();
text(() => {
   `(I see...that's what she means.)`;
   `The answer came to me surprisingly quickly.`;
   `The moon didn't bark like a dog, it didn't 
smell, and it didn't taste tart like an 
apple - at least not as far as I knew.`;
   `The only way to be sure of the existence of 
the moon was through its small gravitational 
pull and its blue-white light.`;
   `Thinking of it in that way, the mysterious 
charm of the moon and its transience were 
things that Sora shared.`;
   `I believed the moon was there, so it was 
there...`;
   `I believed that Sora was there, and she was 
there...`;
   `Maybe that was what Sora wanted to say.`;

});
bgload({ name: `BG15B1`, transition: 20 });
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Aah, I got it."`;
   `That was how I answered.`;

});
fgload({ id: 1, name: `SO08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Sora's eyes lit up and her cheeks wrinkled 
into a big smile.`;
   `And, it may have been my imagination, 
but from somewhere I thought I smelled 
the tart scent of an apple.`;

});
let lbl_00000311;
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeFG({ id: 1, useAnim: true });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
stopBGM();
playBGM({ num: 2, volume: 100 });
bgload({ name: `BG26B3R`, transition: 20 });
clock(`19:5`);
showTextbox();
text(() => {
   `After seeing Sora off to the Control Room...`;
   `I didn't have anything in particular to do, 
so I wandered aimlessly down the corridors of 
Dritte stock.`;
   `Ahead of me I could see the door leading to 
the Lemurian Ruins. The door was open.`;
   `Walking by, I glanced briefly inside.`;
   `I saw someone.`;

});
if (l_is_coco_route == 0) goto(lbl_000003cd);
if (l_coco_point != 4) goto(lbl_000003cd);
showTextbox();
text(() => {
   `(Huh? Who's that?)`;

});
choice(
   `I was curious`,
   `I didn't really care`,
);
switch (l_choice) {
   case 0: goto(lbl_000003b9);
   case 1: goto(lbl_000003d2);
}
let lbl_000003b9;
l_coco_point += 1;
showTextbox();
text(() => {
   `I was curious, so I ducked inside the room 
with the ruins.`;

});
goto(lbl_000003eb);
let lbl_000003cd;
showTextbox();
text(() => {
   `(Hmm. Who is in here?)`;

});
let lbl_000003d2;
showTextbox();
text(() => {
   `(Ah... who cares.)`;
   `Not paying it any more of my attention, I 
quickly passed by the entrance.`;

});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `And, letting my legs lead the way, I roamed 
without any destination in mind. Eventually I 
ended up resting on a bed in the infirmary 
staring out into the ocean depths...`;
   `And before I knew it a few hours had passed...`;

});
goto(lbl_0000079c);
let lbl_000003eb;
bgload({ name: `BG04B1`, transition: 20 });
setSceneTitle({ index: 104 });
showTextbox();
text(() => {
   `It turned out the figures in the room were 
You and Coco.`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU15ADS`, name2: `CO12ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   `You had been leaning up against the stone wall.`;
   `In the palm of You's hand was...some kind of 
journal or notebook. She had it opened and 
was staring at a page.`;
   `Coco was standing next to her, busily peering 
over her shoulder.`;
   `The two of them were flush up against one 
another, speaking in two and three word 
sentences. They looked like they were having 
fun.`;
   Pipi(PIPI_09)`"Wow! Wow! Woof!"`;
   `From out of nowhere Pipi appeared and rushed 
up to my legs.`;
   `I lifted up the sopping wet Pipi, and went 
over to stand by the two girls.`;
   Takeshi`"What'cha looking at?"`;
   `I stood beside them and asked.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU01ADM`, name2: `CO02ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   `You and Coco looked up and noticed me.`;
   Coco(C2T032)`"Um, uh, we were um, looking at these 
pictures."`;
   Takeshi`"Pictures?"`;
   You(C2T033)`"You want to see them?"`;
   Takeshi`"Sure."`;
   You(C2T034)`"Okay, I'll show you."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `What You handed over to me was neither 
journal, nor notebook - it was a single file.`;
   `One small enough to fit in the palm of a hand.`;
   `It was already open, and had several pictures 
taken from an instant camera stuffed between 
the pages. `;
   `They were baby pictures.`;
   Takeshi`"It can't be..."`;
   Takeshi`"Your baby!?"`;

});
fgload({ id: 1, name: `YU04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C2T035)`"Nooo stupid!"`;

});
hideTextbox();
playSFX({ name: `SE05_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `You rapped me on the head.`;

});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C2T036)`"I'm 18, okay? And I'm single. Single!"`;
   Takeshi`"Yeah, right..."`;
   Takeshi`"Which means that this baby is...?"`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU05ADM`, name2: `CO01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(C2T037)`"It's Nakkyu, dummy."`;
   Coco(C2T038)`"These are from when Nakkyu was a little bitty 
baby!"`;
   Takeshi`"So this is what you were laughing about?"`;
   You(C2T039)`"Something wrong with that?"`;

});
fgload({ id: 1, name: `YU02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C2T040)`"I mean they're adorable, right? My baby 
pictures."`;
   You(C2T041)`"Uh, and of course, the fact that I'm cute 
hasn't changed a bit, you know."`;
   Takeshi`"......"`;

});
fgload({ id: 1, name: `YU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C2T042)`"Oh and...um...can you hand those back?"`;
   `And saying that You snatched the file out of 
my hands...`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU15ADM`, name2: `CO12ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(C2T043)`"This picture is from when I was dressed up 
in a kimono as a kid..."`;
   You(C2T044)`"And in this, I was head cheerleader for an 
all school athletic event."`;
   You(C2T045)`"And.... Oh, this one's from my first day of 
middle school."`;
   `You continued to flip through the pages.`;

});
fgload({ id: 1, name: `YU16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C2T046)`"And here's one that I took at the talent 
show my freshman year in High School."`;
   You(C2T047)`"Here's Keiko, Min-min, Betty, Chi-chan, Beef 
Yamamoto.... Oh, and couldn't forget my 
teacher, right?"`;
   You(C2T048)`"And the firework competition....here's my 
trip to the hot springs... Oh! And one from 
that time I stayed at Ami-chan's!"`;

});
fgload({ id: 1, name: `YU17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C2T049)`"And here we have... Huh? What is this?"`;

});
fgload({ id: 1, name: `YU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C2T050)`"Oooh, that's riiight. This is when we 
sneaked into school that one night..."`;
   You(C2T051)`"And of course the graduation ceremony.... 
There was one more...uuummm..."`;

});
fgload({ id: 1, name: `YU16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C2T052)`"Here it is, heh, heh, it's hideous, right? 
I'd been crying and crying..."`;
   `So much of You's history was there...`;
   `Smiling faces, sad faces, silly faces, 
surprised faces, even shy faces...`;
   `There were girlfriends, boyfriends, teachers, 
people, afternoons, nights, good times and 
hard times...`;
   `It goes without saying, but shown in those 
photos were people I didn't know, places I 
didn't know, and a You that I didn't know.`;
   You(C2T053)`"Oh, and, and..."`;
   `You looked like she had no intention of 
stopping, so I rushed to get a word in.`;
   Takeshi`"Um, You? So what is this like your life's 
history album or something?"`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU01ADM`, name2: `CO01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(C2T054)`"A history album...Well I've never called it 
that before..."`;
   You(C2T055)`"But if you had to label it, I guess you 
could call it that."`;
   Takeshi`"Uh, so why are you carrying that with you?"`;
   You(C2T056)`"Huh? Why do you even need to ask?"`;

});
fgload({ id: 2, name: `CO02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(C2T057)`"Takepyon, you don't know? All girls carry 
around things like this. It's normal."`;
   Takeshi`"You don't say?"`;

});
fgload({ id: 1, name: `YU02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C2T058)`"Yeah."`;
   Coco(C2T059)`"Well, all the girls I know carry them around."`;

});
showTextbox();
text(() => {
   `Come to think about it, I'd heard rumors of 
something like that before.`;
   `But I wouldn't have expected it to be 
anything more than a fleeting fad. There was 
no way I had any idea it was a deep-rooted 
girl tradition.`;
   `This album had probably been in with You's 
things from the changing room.`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU03ADM`, name2: `CO11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(C2T060)`You murmured softly to herself as she flipped 
through the pages.`;
   `I wonder what everyone is doing right about 
now...`;
   You(C2T061)`"Do any of these people ever worry about me?"`;
   Takeshi`"........."`;

});
fgload({ id: 2, name: `CO01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(C2T062)`"Oh, yeah..."`;
   Coco(C2T063)`"Do you live with your mom and dad, Takepyon?"`;
   Takeshi`"Eh?"`;
   Coco(C2T064)`"Or do you live by yourself?"`;

});
choice(
   `I'm living with my parents`,
   `I live alone`,
);
switch (l_choice) {
   case 0: goto(lbl_0000063e);
   case 1: goto(lbl_00000647);
}
let lbl_0000063e;
showTextbox();
text(() => {
   Takeshi`"I'm living with my parents."`;
   Coco(C2T065)`"So, I'll bet your mom and dad are worried 
about you?"`;
   Takeshi`"Well, they're parents. Parents worry, it's 
what they're good at..."`;
   Takeshi`"Buuut, that's only if they know we're stuck 
in here."`;
   Coco(C2T066)`"Well, they've got to know."`;
   Coco(C2T067)`"An accident as big as this? It's probably 
all over the news. They might even be doing a 
huge TV special about it."`;

});
goto(lbl_00000663);
let lbl_00000647;
showTextbox();
text(() => {
   Takeshi`"I live by myself."`;
   Takeshi`"I get a phone call every couple of months 
from home and I don't really call them much 
myself."`;
   Takeshi`"So....there's probably no way that my 
parents know that I'm trapped in a place like 
this."`;

});
fgload({ id: 1, name: `YU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C2T068)`"That's not true! They've got to know."`;
   You(C2T069)`"An accident as big as this? It's probably 
all over the newspapers and television."`;

});
let lbl_00000663;
showTextbox();
text(() => {
   Takeshi`"You think so? I'm not sure about that..."`;

});
fgload({ id: 1, name: `YU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   `You kept flipping through the pages.`;
   `It didn't seem like she was very interested 
in what I had to say.`;
   Takeshi`"How about you, Coco? You're probably still 
living with your parents, aren't you?"`;

});
fgload({ id: 2, name: `CO02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(C2T070)`"Well I'm 14 aren't I? Of course I am."`;

});
fgload({ id: 2, name: `CO07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(C2T071)`"Ah, well, right now my dad isn't at home, 
but..."`;
   Takeshi`"Hmm? Why not?"`;

});
fgload({ id: 2, name: `CO05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(C2T072)`"Because he's on a 'business trip,' that's 
why."`;
   Takeshi`"Oh, I see."`;

});
fgload({ id: 2, name: `CO01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"And what about you, You? Are you living with 
your parents or...?"`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU17ADM`, name2: `CO06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   `(Oh! Duh! Why did I ask that!?) ? I realized 
it'd been a mistake to ask that.`;
   `You's dad had been missing for 17 years.`;
   `I checked You's expression.`;
   `But it didn't seem as if she cared one way or 
another.`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU01ADM`, name2: `CO11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(C2T073)`"I'm living with my mom."`;
   You(C2T074)`"But I doubt she's really worried about me."`;
   You(C2T075)`"That's just the kind of person she is, my 
mom..."`;
   Takeshi`"What do you mean?"`;
   You(C2T076)`"I guess you could call her a positive 
thinker.... She isn't the type to really let 
herself get caught up in things."`;
   You(C2T077)`"She doesn't care if I stay out all night..."`;
   You(C2T078)`"I've been living with her for 18 years... but 
she's never raised her voice at me once."`;
   You(C2T079)`"I grew up pretty much doing whatever I 
wanted."`;

});
fgload({ id: 1, name: `YU07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C2T080)`"I suppose that's why I turned out the way I 
did."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `You showed me a page from her album that she'd 
turned to.`;
   `There was You with putting the hurt on some 
wrestler.`;
   `And the guy looked like a bulky jock of sorts.`;
   You(C2T081)`"So..."`;
   `You said this as she snapped the album shut.`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU17ADM`, name2: `CO13ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(C2T082)`"Hey, Coco? You want to go take a nap?"`;
   You(C2T083)`"I don't know why, but....yaaawn....I'm kind 
of tired all of a sudden..."`;
   Coco(C2T084)`"Okay, let's take a nap."`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU05ADM`, name2: `CO05ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(C2T085)`"I wonder why I'm so tired this early?"`;
   You(C2T086)`"Right, Coco?"`;
   Coco(C2T087)`"Right, Nakkyu?"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `You and Coco looked over at me disapprovingly 
and, fighting off yawns...they both left the 
room.`;
   `Holding Pipi, I watched the two disappear from 
sight.`;

});
let lbl_0000079c;
removeBG({ mode: BLACK, transition: 1 });
stopBGM();
delay({ interval: 150 });
l_choice = 0;
jump(`T_2D`);
