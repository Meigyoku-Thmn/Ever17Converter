l_b0 = 5;
l_dayA = 4;
l_dayB = 4;
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
   Kid`"Rip Van Winkle DID exist!"`;
   `I screamed out.`;

});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A426)`"You are so silly."`;
   You(C4A427)`"It's just a fairy tale!"`;
   Kid`"Look, not all fairy tales are fiction!"`;
   You(C4A428)`"That doesn't mean that Rip Van Winkle actually existed, does it?"`;
   You(C4A429)`"Besides, even if the tale of Rip Van Winkle was real, that has nothing to do with you, Kid."`;
   Kid`"It does, too."`;
   Kid`"We're talking about whether people could actually travel through time, right?"`;

});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A430)`"That's what I mean! Don't you get it?"`;
   You(C4A431)`"I'm saying even if someone could actually travel in time, that doesn't necessary mean that you did."`;
   Kid`"Then how come I can see the future?"`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A432)`"Don't ask me. How should I know..."`;
   Kid`"It has to be because I'm experiencing the same moment in time over and over again."`;
   Kid`"I must have been stuck in LeMU in the past, also..."`;
   Kid`"Three days passed, and then four, five days...and after that, I must have slipped through time for some reason."`;
   Kid`"Meaning, I must have traveled back in time, to the moment I fell into that pond."`;
   Kid`"That must be why I can look into the future."`;
   Kid`"No, I mean, I must be remembering things I've already experienced in the past, instead of looking into the future to be exact."`;
   Kid`"I don't know how, but I'm probably carrying memories of the past."`;

});
fgload({ id: 1, name: `YU14ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A433)`"Really...well that must be it, then."`;
   Kid`"Oh, c'mon, I'm being serious here!"`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A434)`"I'm sorry...but I've got far more serious, urgent problems."`;
   You(C4A435)`"I've got tons of things to think about."`;
   You(C4A436)`"You know what I'm talking about, Kid?"`;
   Kid`"........."`;
   You(C4A437)`"I don't know what the reason is, but you can predict the future."`;
   You(C4A438)`"So what...?"`;
   You(C4A439)`"It's not like it's a bad ability to have. As a matter of fact, I can imagine that it would really come in handy."`;
   Kid`"You make it sound so simple...but in my case, I don't think it is the ability to see the future, I'm pretty sure I traveled through time."`;
   Kid`"I might even be repeating the same moment in history over and over again."`;
   Kid`"And what's more, I'm pretty sure the amnesia has something to do with the time travel..."`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A440)`"Look, how many times do I have to tell you?"`;
   You(C4A441)`"Time travel is NOT possible."`;
   You(C4A442)`"And as far as your amnesia, I'm sure you'll regain your memories in time!"`;
   You(C4A443)`"You're already beginning to remember things, right?"`;
   You(C4A444)`"I mean, you've actually remembered most everything, haven't you?"`;
   Kid`"Not everything."`;
   Kid`"I just remembered things about Sara."`;
   Kid`"Just childhood memories."`;
   Kid`"I still don't have any memories from the last few years..."`;
   Kid`"I have no idea how I got to LeMU, why or with whom."`;
   Kid`"I still don't remember anything before May 1st, the day I came to LeMU."`;
   Kid`"Where I was...what I was doing..."`;
   Kid`"Or who I am..."`;

});
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A445)`"Huh?"`;
   You(C4A446)`"Wa-wa-wait a second."`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A447)`"You're Mayo's brother, right? You did remember that, don't you?"`;
   Kid`"Uh, yeah."`;
   You(C4A448)`"So you have to at least know 'who you are.'"`;
   Kid`"But...I don't..."`;
   You(C4A449)`"...?"`;
   Kid`"How can I explain this..."`;
   Kid`"If someone were to ask me 'who are you?' All I could say is, 'I'm Sara Matsunaga's brother.'"`;
   Kid`"I don't know any other way to answer."`;
   `Then all of the sudden ...`;

});
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A450)`"Oh! Oh, oh, oh!"`;
   `You raised her voice and pointed her finger at me.`;
   You(C4A451)`"Oh, that reminds me - I keep forgetting to ask you something important!"`;
   Kid`"Something important?"`;

});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A452)`"Name! Your name!"`;
   You(C4A453)`"Your name, Kid!"`;
   Kid`"........."`;
   You(C4A454)`"Mayo told you, didn't she?"`;
   Kid`"........."`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A455)`"You DID ask her, didn't you?"`;
   Kid`"........."`;

});
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A456)`"You haven't asked her your name!?"`;
   Kid`"Um...no...I haven't."`;

});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `You shook her head, looked up at the ceiling, and chewed on her lips.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `She clenched her fist, went to shake it into the air, then rethought it and pulled it back down.`;
   `You then proceeded to stomp around in a puddle of water.`;
   `She crouched down and hopped up swiftly.`;
   `She took a deep breath.`;
   `I thought she was going to blow it out, but she continued to take one long breath in.`;
   `And then she said...`;

});
fgload({ id: 1, name: `YU10ADM`, x: 320, useAnim: true });
eff_4f = 0;
eff_3b = 1;
eff_3c = VAR_ca_0_6;
eff_3d = 6;
eff_3e = 2;
eff_3f = VAR_c6_0_6;
eff_40 = 3;
openShakeScreenAnim();
showTextbox();
text(() => {
   You(C4A457)`"ARE YOU STUPID OR WHAAAAAAAAAAAT??"`;

});
closeShakeScreenAnim();
showTextbox();
text(() => {
   `Her voice was so loud it shook LeMU like an earthquake.`;
   `"I was a bit frightened that it would tear the partition walls."`;
   You(C4A458)`"That's the first thing you should ask her before anything else!!"`;
   Kid`"Well...you probably wouldn't understand this, but..."`;
   Kid`"Sara and I had so much else to talk about."`;
   Kid`"We had endless things to talk about...and I just didn't have the presence of mind or chance to think about myself."`;
   Kid`"For us, the first priority was to regain the time we had lost."`;
   Kid`"And to be honest, I could care less about my name."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A459)`"Listen, Kid...just think about it."`;
   You(C4A460)`"It's YOUR own name. Aren't you curious to know?"`;
   Kid`"Now that you've brought it up, I'm starting to wonder..."`;
   Kid`"When I was talking to Sara, it didn't even flash through my mind."`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A461)`"*Sigh*..."`;
   `You sighed with an exaggerated gesture.`;
   Kid`"Well just put yourself in our position, You?" `;
   Kid`"Sara and I saw each other for the first time in nine years."`;
   Kid`"We were just so happy, caught up in the memories..."`;
   Kid`"But on the other hand, we were scared, in pain and our hearts ached..."`;
   Kid`"All these emotions were mixed up and jumbled together and came flooding over us."`;
   Kid`"Sara and I were overwhelmed just trying to understand one another."`;
   Kid`"Like I said, names didn't seem so important at that time."`;
   Kid`"She just called me 'brother,' and I just wanted to call her Sara."`;
   Kid`"Do you understand?"`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A462)`"No, not at all."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `You said that and started to walk off.`;
   Kid`"Hey, wait a second! Where are you going?"`;

});
bgload({ name: `BG25B3`, transition: 20 });
showTextbox();
text(() => {
   `Splashing water, You walked down the long straight corridor ...`;
   `I tagged along beside her and asked her again.`;
   Kid`"Hey, where are you going?"`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A463)`"I'm going to ask Mayo."`;
   Kid`"What?"`;

});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A464)`"Well, helloooo? Your name of course, Kid!"`;
   Kid`"Look, you don't have to do that..."`;

});
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A465)`"Huh? Why not?"`;
   Kid`"........."`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A466)`"What you've been saying doesn't make sense."`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A467)`"Don't you want to regain your full memory? Don't you want to know who you are?"`;
   Kid`"Oh, of course I do, but... "`;

});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A468)`"Well then, instead of talking about stupid, outrageous things like seeing the future or time travel..."`;
   You(C4A469)`"Don't you think it'd just be faster to ask Mayo?"`;
   `I thought back briefly to the sight of myself in that mirror.`;
   `I had been so confused at that time because 'my face' didn't look like 'my face.' `;
   `If the same thing happened when Sara told me my name...`;
   `I was afraid that I might feel like 'my name' wasn't really 'my name,' and end up all confused again.`;
   `To tell the truth, it was a bit scary.`;
   `Besides ...`;
   Kid`"Is a name really all that important?"`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A470)`"...What?"`;
   Kid`"Look, names are just a way people give themselves to make identifying one another more convenient."`;
   Kid`"It's just for convenience...so while living without a name certainly has its own challenges, I don't think a name is an absolute necessity."`;
   Kid`"Take dolphins. They are highly intelligent creatures, but they don't go around calling one another by name."`;
   Kid`"And they seem to be getting along just fine."`;
   Kid`"They seem to be able to identify one dolphin from the others, too..."`;
   Kid`"They know which one is a son, which one is a wife and the difference between a gray whale and a killer whale..."`;
   Kid`"They don't have names, yet they can recognize things correctly."`;
   Kid`"And...this is just a speculation, but...they seem to recognize individual identities."`;
   Kid`"A dolphin seems to have its own sense of self, separate from that of the dolphin swimming next to it. And it is aware that it is a separate entity.."`;
   Kid`"They don't have to depend on names to recognize all these things..."`;
   Kid`"My name is James, this one next to me is Ling Ling and that one chasing after a fish is Yumemi ..."`;
   Kid`"I don't think they do that."`;
   Kid`"It may sound kind of cocky, but sometimes I feel humans depend on names too much."`;
   Kid`"If one day, this girl you've known as Ling Ling tells you 'Oh, by the way my name is Lang Lang,' wouldn't that throw you off?"`;
   Kid`"It'd cause confusion...and you might think..."`;
   Kid`"'You know, Ling Ling and Lang Lang are really similar, but they're probably just two different people.'"`;
   Kid`"It seems stupid to get confused just because of a name."`;
   Kid`"Meaning people value, trust and depend on names, more than the actual individual differences..."`;
   Kid`"I bet dolphins don't think like that."`;
   Kid`"Because, to begin with, they don't have names to identify individuals."`;
   You`"........."`;
   Kid`"I realized that for the first time once I lost my name."`;
   Kid`"I noticed that a name really isn't all that important."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `You didn't stop walking.`;
   `I couldn't tell whether she was listening to me or not, because she didn't respond to me at all.`;

});
bgload({ name: `BG26B3R`, transition: 20 });
showTextbox();
text(() => {
   Kid`"Hey, are you listening to me?" `;
   `As we turned around a corner, I asked her.`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A471)`"Yup, I'm listening, I'm listening."`;

});
fgload({ id: 1, name: `YU11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A472)`"I've been thinking about what you were just saying..."`;
   Kid`"?"`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A473)`"I feel like I understand what you mean."`;
   You(C4A474)`"You know, I've had a complex about my name for a long time, and I've actually thought quite a lot about this issue."`;
   Kid`"Complex?"`;
   You(C4A475)`"Yeah."`;
   Kid`"You don't like your own name, You?"`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A476)`"Of course I don't."`;
   Kid`"Why?"`;

});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A477)`"I'm embarrassed about it."`;
   You(C4A478)`"People introduce themselves to one another when they meet, right?"`;
   You(C4A479)`"Every time a new year at school would start I would just cringe..."`;
   Kid`"Oh."`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `I murmured.`;
   Kid`"I remember you said something about your full name being much longer, right?"`;
   You(C4A480)`"Yeah."`;
   Kid`"Well, would that have something to do with the fact that you don't like your name?"`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A481)`"Something to do with it? ... that IS WHY I don't like it."`;

});
fgload({ id: 1, name: `YU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `You stopped walking.`;
   `She had a bitter smile on her face.`;
   You(C4A482)`"Do you want to know?"`;
   Kid`"What?"`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A483)`"I still haven't told you my full name yet."`;
   Kid`"Uh, I guess."`;
   You(C4A484)`"Will you promise that you won't laugh?"`;
   Kid`"...Sure."`;
   You(C4A485)`"Okay, I'll tell you."`;
   You(C4A486)`"My name is..."`;
   You(C4A487)`"Tanaka..."`;
   You(C4A488)`"Yubiseiakikana."`;

});
stopBGM();
showTextbox();
text(() => {
   Kid`"What ...?"`;
   You(C4A489)`"It means 'gentle', 'beautiful', 'pure', 'autumn', 'fragrant', 'green', 'blossom'."`;
   Kid`"What!?"`;
   Kid`"Yubiseiakikana!?"`;

});
playBGM({ num: 13, volume: 100 });
showTextbox();
text(() => {
   `All the sudden, it was as if I felt a heavy thud in the bottom of my heart.`;
   `A strange feeling started to take over my body.`;
   `A sense of something out of place...`;
   `That's it! That's right!`;
   `I must have known You's real name!`;
   `Wait...but...I've never heard it from You directly...`;
   `What is going on!?`;
   `This is just like the situation with Sara...`;
   `I already knew You's real name, from before...`;
   `You's real name was...`;
   Kid`"Your...real...name is..."`;
   Kid`"Yubisei 'haru' kana."`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A490)`"What?"`;
   Kid`"You said it wrong, didn't you?"`;
   Kid`"You actually meant to say 'harukana', right?"`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A491)`"Look, I don't think I'd say my own name incorrectly."`;
   You(C4A492)`"Well, 'haru' or 'aki', either one is fine with me."`;
   You(C4A493)`"But on the birth certificate, it says 'aki'..."`;
   Kid`"No!"`;

});
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A494)`"What?"`;
   Kid`"Your full name has to be Yubisei 'haru' kana!"`;
   Kid`"It's not 'aki'!"`;

});
fgload({ id: 1, name: `YU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A495)`"Ha, ha, ha, ha, ha..."`;

});
fgload({ id: 1, name: `YU12ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A496)`"A, ha, ha, ha, ha."`;
   Kid`"What are you laughing about? This isn't funny at all!"`;
   Kid`"You don't remember your own name!"`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A497)`"Yeah, yeah, that just may be it."`;
   You(C4A498)`"My real name is...oh, was it Ling Ling? No wait, maybe it was Lang Lang?"`;
   Kid`"........."`;
   You(C4A499)`"Kid, listen up."`;
   You(C4A500)`"My name is Yubiseiakikana."`;
   You(C4A501)`"It's been that way since I was born, and it will be that way as long as I live."`;
   You(C4A502)`"You got it?"`;
   You(C4A503)`"It's neither, haru, or natsu, or fuyu, but aki."`;
   You(C4A504)`"Do you know why?"`;
   Kid`"........."`;
   You(C4A505)`"I was born 18 years and seven months ago."`;
   You(C4A506)`"A little more than seven months, to be exact."`;
   You(C4A507)`"My birthday is September 22."`;
   You(C4A508)`"I was born in Japan."`;
   You(C4A509)`"I wasn't born in the southern hemisphere."`;
   You(C4A510)`"Let's see...was September spring in Japan!?"`;
   You(C4A511)`"No, it's autumn, isn't it?"`;
   You(C4A512)`"So, my name is 'akikana' - 'aki', as in autumn - you got that?"`;
   `I was already starting to lose my sense of reality.`;
   `A bottomless fear crept up from the bit of my stomach and threatened to leap out of my throat.`;
   `My head started to ache.`;
   `And then -`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Sara(C4A513)`"Brother! Nakkyu!"`;
   `I glanced as I put my hand on my temple.`;

});
fgload({ id: 1, name: `SA02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Splashing water in all directions, Sara came toward us.`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU15ADM`, name2: `SA11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(C4A514)`"Good timing..."`;
   Sara(C4A515)`"Good timing?"`;
   `Sara stood in front of us, tilting her head quizzically.`;
   You(C4A516)`"Actually, I had a question for you, Mayo."`;
   Sara(C4A517)`"What is it?"`;
   You(C4A518)`"The Kid's name."`;
   You(C4A519)`"Will you tell me his real name?"`;
   `You put her hand over my shoulder.`;
   `I knew her hand was touching my shoulder, but I couldn't feel it.`;
   `I was dizzy and about to faint.`;
   `I thought to myself 'This'll probably be a lot easier if I just faint.'`;
   `But both my feet stood soundly on the floor and I braced myself.`;
   `I looked at Sara.`;
   `Sara's mouth opened up like an empty hollow.`;

});
hideTextbox();
fgload({ id: 2, name: `SA12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara`"   !"`;
   Sara`"   ,   ?"`;
   `I couldn't hear her voice. `;
   `I saw Sara's lips were moving, but I couldn't hear her voice for some reason.`;
   You`"   ,   "`;

});
fgload({ id: 1, name: `YU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You`"   ,   ..."`;
   You`"   ,   '   '   "`;
   `I couldn't hear You's voice, either.`;
   `All I could hear was just the sound of my blood flowing through my ears...`;
   `In that moment, my sight crashed into pieces.`;
   `The scenery before me was stripped of all color...`;
   `A voice...a voice ...`;
   `A voice...`;
   `I could heard a voice from far...`;
   `From far away darkness...`;
   `Somebody whispering to me...`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   Kid`"Who are you?"`;
   Kid`"Who am I?"`;
   `"Who..."`;
   `"...am I?"`;

});
bgload({ name: `BG26B3R`, transition: 26 });
multifgload2({ id1: 1, id2: 2, name1: `YU15ADM`, name2: `SA12ADM`, x1: 128, x2: 512, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   Sara(C4A520)`"Hokuto!"`;
   Sara(C4A521)`"Your name is Hokuto!"`;
   You(C4A522)`"Hokuto, huh?"`;

});
fgload({ id: 1, name: `YU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C4A523)`"So that's what he's called..."`;
   You(C4A524)`"Now that you mention it, he does look kind of look like a 'Hokuto' to me."`;
   Kid`"Hokuto..."`;
   Kid`"That is..."`;
   Kid`"...my..."`;
   Kid`"...name...?"`;

});
fgload({ id: 2, name: `SA01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C4A525)`"That's right, brother."`;
   Kid`"Hokuto...Hokuto...Hokuto..."`;
   `I repeated it aloud over and over again.`;
   Kid`"Hokuto...Hokuto...Hokuto..."`;
   `My hunch had been right.`;
   `I had never heard the name 'Hokuto' before.`;
   `'Hokuto'....That couldn't possibly be my name. `;
   `It didn't feel real to me at all.`;
   `But Sara wouldn't lie to me.`;
   `So I figured 'Hokuto' must be my name.`;
   `Hokuto...Hokuto...Hokuto...`;
   `Name...name...name...`;
   `You's name is Yubiseiakikana.`;
   `My name is Hokuto.`;
   `There was too much to think about.`;
   `I felt I was close to my mental limit.`;
   `I was dizzy.`;
   `My head ached.`;
   `I looked at my palm.`;
   `I had five fingers...`;
   `Everything seemed out of place to me.`;
   `I still couldn't regain the 'real' me.`;
   `(Is this me who's looking at my palm? Or is it somebody that isn't me?)`;
   `(Is Hokuto really me? Or is it me who's not Hokuto?)`;
   Kid`"Hokuto...Hokuto...Hokuto..."`;
   Kid`"Is it really...?"`;

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
   Takeshi`"Is that really his name?"`;
   `Tsugumi slightly nodded her head.`;
   `Her face was all red.`;
   Takeshi`"So you're Chami. Because you're charming."`;
   Takeshi`"That's cute. What a good name!"`;
   `How....cute.`;
   `That was what I thought.`;
   `I did my best to stifle my laughter.`;

});
bgload({ name: `EV_TU02B`, transition: 20 });
showTextbox();
text(() => {
   Tsugumi(C4A526)`"Ah c'mon! You promised not to laugh!"`;
   Takeshi`"I'm not laughing!"`;
   `I tried to keep a straight face...but the corners of my mouth started to twitch.`;
   `I could just imagine Tsugumi baby-talking to it. 'Chami-poo, Chami-poo it's din-din time.'`;
   Tsugumi(C4A527)`"Aaaargh!"`;
   Tsugumi(C4A528)`"That's why I didn't want to tell you!"`;
   `Sullen, Tsugumi was red-faced...`;
   `...but she held out the bath towel she had behind her back.`;
   Takeshi`"Oh, thanks."`;
   `I took the towel and wiped myself down.`;
   Takeshi`"Phew..."`;
   `I breathed deeply, feeling reborn, as I glanced at Tsugumi's profile.`;

});
bgload({ name: `EV_TU02A`, transition: 20 });
showTextbox();
text(() => {
   `She was playing with the hamster in her hand, and her cheeks were bright.`;
   `She looked so happy ...`;
   `It was the first time I'd ever seen her smile like she meant it.`;
   Tsugumi(C4A529)`"Takeshi..."`;
   Tsugumi(C4A530)`"Thank you."`;
   `Tsugumi said it in a whisper without looking at my face.`;

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
   `I headed towards the EI area with Tsugumi.`;
   `Since we were in the area with the Generator Room, we had to take one of the egg-like elevators to get back.`;
   `I felt excited, maybe from the feeling of accomplishment of rescuing Chami.`;
   `But...my feet were heavy. My body just couldn't keep up.`;
   `I was exhausted.`;
   `Five hours earlier, I had been running with You on my back, who had started suffering from something all of a sudden.`;
   `And with this to rescue Chami, I swam over 300 feet from underwater ...`;
   `(Is this really just fatigue?)`;
   `(This heaviness...)`;
   `(I feel a bit feverish, too.)`;
   `(I have a slight headache...)`;
   `(Maybe I caught a cold?)`;

});
fgload({ id: 1, name: `TU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(C4A531)`"What's wrong?"`;
   `Tsugumi must have noticed my slow steps, and looked at my face, worried.`;
   Takeshi`"I'm just tired."`;
   Tsugumi(C4A532)`"Are you alright?"`;
   Takeshi`"Ha-ha, yeah, I'm fine."`;
   Takeshi`"I'm just tired is all."`;
   Tsugumi(C4A533)`"Okay."`;
   `Tsugumi was worried about me.`;
   `It was a funny feeling.`;
   Takeshi`"By the way, how about yourself?"`;

});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(C4A534)`"Huh?"`;
   Takeshi`"Your leg...you know, your injury."`;
   `Tsugumi was dragging her right foot.`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(C4A535)`"I'm alright."`;
   Takeshi`"Are you really? The wound didn't open up or anything, did it?"`;
   Tsugumi(C4A536)`"Do you wanna see?"`;
   `Tsugumi stopped walking.`;
   `She quickly flipped up her skirt with her hands.`;
   Takeshi`"C-cut it out!"`;
   `In shock, I slapped Tsugumi's hand and stopped her.`;

});
fgload({ id: 1, name: `TU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(C4A537)`"Ha, ha, ha, ha..."`;
   `Tsugumi chuckled gleefully.`;
   `My feet felt much lighter all of the sudden.`;

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
   `As for You...`;
   `It turned out she wasn't as bad as I thought.`;
   `After resting for about an hour in the infirmary, You regained a surprising amount of her strength. `;
   `'But why did you start suffering like that all the sudden?'`;
   `I asked You, but she changed the subject and didn't tell me anything.`;
   `I also asked Sora, but her answer was the same.`;
   `Sora must have known something, since she had examined You with the repaired L-MRI.`;
   `That thought still bothered me.`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `BG24A2`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `It was still such that only one person at a time could ride the egg.`;
   `Tsugumi went up first.`;
   `I rode up shortly after. `;
   `The egg zipped upward, quickly arriving at Zweite stock.`;

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
   `As soon as I got there, Tsugumi was waiting for me.`;
   `Chami was sitting on her hand.`;
   `Tsugumi stuck out both of her arms to the side.`;
   `Chami walked from one hand to the other crossing Tsugumi's arms.`;
   `Tsugumi had such a happy smile on her face...`;
   `That I couldn't help from smiling, too...`;
   `For no particular reason, Tsugumi and I stared at each other for a while.`;

});
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(C4A538)`"Do you want to try?"`;
   `Saying so, Tsugumi put Chami on my shoulder.`;
   `I stretched out my arms...`;
   `And suddenly Chami charged onto my arms.`;
   `It tickled so much that I couldn't help but wriggle my body.`;
   Tsugumi(C4A539)`"Ha, ha, ha."`;
   `Chami looked hesitant when he got to the end, which was the tip of my hand.`;
   `I held Chami gently in my palm and looked at him closely.`;
   Takeshi`"Chami, huh...?"`;
   Takeshi`"Are you Chami? Well are you? C'mon answer me!!"`;
   `Of course, Chami didn't answer.`;
   `Maybe he was frightened I would eat him.`;
   Takeshi`"Yeah...he sure is charming."`;
   Takeshi`"He's Chami because he's so darn charming."`;
   `Curious, I decided to ask Tsugumi a question.`;
   Takeshi`"Why are you called Tsugumi?"`;

});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(C4A540)`"Huh?"`;
   Takeshi`"Your name, I mean."`;
   Takeshi`"Does it come from Chinese character for the bird, the redwing?"`;
   Tsugumi(C4A541)`"The bird?"`;
   Takeshi`"If I remember correct, they migrate, right?"`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(C4A542)`"Oh, redwings?"`;
   Tsugumi(C4A543)`"Not to disappoint you, but..."`;
   Tsugumi(C4A544)`"Nope, my name has nothing to do with birds."`;
   Takeshi`"Then what does your name mean?"`;
   `As I asked Tsugumi, I passed Chami back into her hand.`;
   `Tsugumi picked up Chami, and told me.`;
   Tsugumi(C4A545)`"'Satellite of the earth' and 'where we are at.'"`;
   Takeshi`"Huh?"`;
   Tsugumi(C4A546)`"What's the one satellite this earth has?"`;
   Takeshi`"The moon?"`;
   Tsugumi(C4A547)`"And where are we right now?"`;
   Takeshi`"LeMU."`;
   Tsugumi(C4A548)`"What's all around us here at LeMU?"`;
   Takeshi`"Uh...around us....the ocean?"`;
   Tsugumi(C4A549)`"Yup."`;
   Tsugumi(C4A550)`"In Japanese you write it 'moon' and then 'ocean,' and read it 'Tsugumi.'"`;
   Takeshi`"Oh, I see."`;
   Takeshi`"Come to think of it, I didn't know which Chinese characters your name used."`;
   Takeshi`"'Moon' and 'ocean', huh...?"`;
   Takeshi`"Hmm, that's a really pretty name."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi's cheeks turned pink.`;
   `And then...`;

});
playBGM({ num: 18, volume: 100 });
showTextbox();
text(() => {
   Coco(C4A551)`"Daddy! Mommy!"`;
   Pipi(PIPI_10)`"Bow-wow! Bow-wow!"`;
   `Coco and Pipi came rushing in.`;

});
multifgload2({ id1: 1, id2: 2, name1: `CO02ADM`, name2: `TU14ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"I told you NOT to call me daddy!"`;
   Tsugumi(C4A552)`"I told you NOT to call me mommy!"`;
   Takeshi`"What?"`;

});
fgload({ id: 2, name: `TU07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(C4A553)`"Huh?"`;
   `Tsugumi and I looked at each other.`;
   Takeshi`"Coco's been calling you mommy, Tsugumi?"`;
   Tsugumi(C4A554)`"And she's calling you daddy, Takeshi?"`;
   Takeshi`"She keeps doing it no matter what I say!"`;
   Coco(C4A555)`"Hey, daddy? Mommy? Let's play!"`;
   Pipi(PIPI_01)`"Bow-wow!"`;

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
   `After a while...`;
   `Tsugumi and I had begged Coco 'not to call us daddy or mommy.'`;
   `It took us about three hours to finally convince her. `;
   `It was three times more exhausting to convince Coco than to dash with You on my back, AND swim underwater 102 meters.`;
   `By the way, Coco's reason for calling Tsugumi 'mommy' was...`;
   Coco(C4A556)`"A girl who doesn't have a mommy can call somebody who reminds her of mommy 'mommy.'"`;
   Coco(C4A557)`"It's written in the Naacal Tablet, wasn't it?"`;
   `... So she said.`;
   `Needless to say, Coco already had a real mother.`;

});
hideTextbox();
stopBGM();
bgload({ name: `BG26B3R`, transition: 20 });
clock(`23:6`);
showTextbox();
text(() => {
   `After finally convincing Coco, I went to see You.`;
   `Even before I had gone to rescue Chami, You had seemed to be recovering her strength.`;
   `But the way she looked when she had first started feeling pain, didn't seem normal.`;
   `I was still concerned about her even though she looked better.`;
   `So I decided to make sure You was alright.`;
   `Sora told me I could find You in the Security Office.`;

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
   `I entered into the room.`;
   `You was sitting in front of the console, staring blankly at the screen.`;
   Takeshi`"Hi."`;
   `I called out a greeting as I sat down in the seat next to her.`;
   `You grabbed a coffee cup, took big a gulp, and said...`;
   You(C4A558)`"Thank you."`;
   Takeshi`"Huh?"`;
   You(C4A559)`"I didn't have a chance to say it earlier, right?"`;
   You(C4A560)`"So, thank you."`;
   `You's eyes were fixed on the display.`;
   Takeshi`"Are you talking about when I carried you to the infirmary, earlier?"`;
   You(C4A561)`"Yes."`;
   Takeshi`"You don't have to thank me."`;
   Takeshi`"I just want to ask you a question."`;
   You`"........."`;
   Takeshi`"What caused it, anyway?"`;
   You(C4A562)`"Cause? What are you talking about?"`;
   `You still wouldn't look at me.`;
   Takeshi`"A normal, healthy person wouldn't just suddenly clutch their chest in pain, you know?"`;
   Takeshi`"And besides..."`;
   Takeshi`"You said 'It happens all the time'."`;
   Takeshi`"What is it all about?"`;

});
bgload({ name: `BG11A1`, transition: 20 });
showTextbox();
text(() => {
   `When I asked, she turned the seat halfway and stood up.`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A563)`"Hey Takeshi? Do you remember why I came to LeMU?"`;
   `You changed the subject all of the sudden.`;
   `I didn't understand why she was asking the question, but I answered her anyway.`;
   Takeshi`"Yeah, I do."`;
   Takeshi`"You came to get a part-time job for the holidays..."`;
   Takeshi`"But it was just an excuse to search for your father who's been missing for 17 years, right?"`;
   `I remembered the story You told me in front of the merry-go-round the first day..`;

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
   You(S1C122)`"My mom seems to think my dad is already dead..."`;
   You(S1C123)`"But you know?"`;
   You(S1C124)`"I believe!"`;
   You(S1C125)`"I know that my dad is still alive somewhere!"`;
   You(S1C126)`"He's got to be!"`;
   You(S1C127)`"He just went missing. They never found his body."`;

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
   You(C4A564)`"I just had to find out."`;
   You(C4A565)`"If he was alive...or...dead..."`;
   You(C4A566)`"If he's alive, of course I want to see him..."`;
   You(C4A567)`"And if he's dead, I wanted to find some kind of evidence."`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A568)`"Otherwise I won't give up...I just can't accept it."`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Just like that time, I didn't know what to say to her.`;
   `The story of the 800-year-old nun came to my mind.`;
   `You believed that 'the 800 year-old nun' actually existed.`;
   `How in the story, the sound of the bell had stopped one day, but nobody actually found her body. `;
   `When I came to think of it then, I realized that was probably You's wish.`;
   `She was probably mixing her feelings about her father's situation with the story of the nun.`;
   `It occurred to me that way.`;
   You(C4A569)`"And so that's what I was researching just now."`;
   Takeshi`"...And...did you...find out anything?"`;
   You(C4A570)`"Nothing."`;
   You(C4A571)`"I can't figure out the password...I give up."`;

});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `I looked at the monitor.`;
   `An authentication window was being displayed.`;
   `The cursor was flashing without a sound. `;
   Takeshi`"I see..."`;
   `Biting her lip, You glanced down, dejectedly. `;
   `She was wrapped in a hazy blue light from the display.`;
   `I picked up the cup from the table and sipped some of You's leftover coffee.`;
   `It was cold.`;
   Takeshi`"It's alright."`;
   Takeshi`"I know you'll...see him again..."`;
   `I looked down into the cup.`;
   `The black coffee hid the bottom of the cup from my view.`;
   You(C4A572)`"Thank you..."`;
   You(C4A573)`"But...I don't think I'll ever see him again..."`;
   Takeshi`"What?"`;
   `I looked up in surprise.`;
   `You was forcing herself to smile.`;
   `She squinted her eyes and looked off into the distance. `;
   You(C4A574)`"I came here because I thought I wanted to find out about my dad..."`;
   You(C4A575)`"But...I realize actually that wasn't it at all ... "`;
   Takeshi`"...... ?"`;
   You(C4A576)`"I'm running out of time."`;
   You(C4A577)`"I've gone way past my limit."`;
   You(C4A578)`"So that's why..."`;
   You(C4A579)`"Before the time comes...I had to know..."`;
   You(C4A580)`"The truth..."`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   `(She's running out of time?)`;
   `(She doesn't think she'll ever see him again...?)`;
   `'It happens all the time.'`;
   `(She'd been suffering with her hand on her chest.)`;
   `No, it can't be ...`;
   `I didn't even want to think about it.`;
   `Closing my eyes, I took a deep breath and tried to shake bad thoughts from my mind.`;
   Takeshi`"Hey, You?"`;
   Takeshi`"What do you mean by that...?"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `You crossed her arms behind her back and started walking slowly away, head down.`;
   `She stopped in front of the wall, turned around and walked back in front of me.`;
   `The sound of her shoes echoed on the hard floor...`;
   `The cursor silently flashing on the display...`;
   `The cold coffee in my hand...`;
   `I looked into the cup again.`;
   `The glossy liquid was rippling with small waves. `;
   You(C4A581)`"I can't tell you."`;
   `The sound of her shoes stopped abruptly.`;

});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Why?"`;
   `She raised her face quietly and said.`;
   You(C4A582)`"If I start telling you now, I might talk about things I don't want to talk about."`;
   Takeshi`"But..."`;

});
playBGM({ num: 19, volume: 100 });
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A583)`"Takeshi..."`;
   `You interrupted my words and went on.`;
   You(C4A584)`"Have you ever...done something wrong or sinned, Takeshi?"`;
   Takeshi`"Sinned?"`;
   You(C4A585)`"Yes..."`;
   You(C4A586)`"A massive sin..."`;
   You(C4A587)`"I don't care whether you believe in god or not."`;
   You(C4A588)`"I'm asking you if you ever committed a sin that was morally wrong and there was nothing you could do to mend it."`;

});
choice(
   `Yes`,
   `No`,
);
switch (l_choice) {
   case 0: goto(lbl_00000afa);
   case 1: goto(lbl_00000b03);
}
let lbl_00000afa;
showTextbox();
text(() => {
   Takeshi`"Well..."`;
   Takeshi`"I guess I might have..."`;
   You(C4A589)`"What have you done?"`;
   Takeshi`"Well...different things, I guess..."`;
   You(C4A590)`"Things you can't tell me?"`;
   Takeshi`"Uhhh..."`;
   Takeshi`"I don't really want to talk about it, to be honest."`;
   Takeshi`"I think that sins are something you carry through life by yourself."`;
   Takeshi`"It seems cowardly to me to unburden it onto someone else, and beg for pity and compassion."`;
   You(C4A591)`"I feel the same way."`;
   You(C4A592)`"That's why I can't tell you."`;
   You(C4A593)`"If I tell you now, it would just be an excuse..."`;
   Takeshi`"........."`;
   You(C4A594)`"I crossed a line that should've never been crossed."`;
   You(C4A595)`"I turned my back on god..."`;

});
goto(lbl_00000b4c);
let lbl_00000b03;
showTextbox();
text(() => {
   Takeshi`"Come on."`;
   Takeshi`"I've made lots of mistakes. And you know why? Because I'm human."`;
   Takeshi`"I'd be lying if I told you I'd never hurt people I cared about or broke their hearts."`;
   Takeshi`"But I don't know if those are 'godless, massive sins'..."`;

});
fgload({ id: 1, name: `YU11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A596)`"Well ...you are admirable."`;
   Takeshi`"What?"`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A597)`"No, I mean it."`;
   You(C4A598)`"On the other hand..."`;
   You(C4A599)`"I'm..."`;
   You(C4A600)`"I'm not human anymore."`;
   You(C4A601)`"I crossed a line that should've never been crossed. "`;
   You(C4A602)`"I turned my back on god..."`;
   You(C4A603)`"That's why I can't tell you."`;
   You(C4A604)`"If I tell you now, it would just be an excuse..."`;
   Takeshi`"........."`;

});
goto(lbl_00000b4c);
let lbl_00000b4c;
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A605)`"It's like an original sin to me."`;
   You(C4A606)`"I could never escape from it, and I don't intend to."`;
   You(C4A607)`"As long as I live..."`;
   You(C4A608)`"Yes, as long as I live, I must carry this sin with me."`;
   You(C4A609)`"But you know what...?"`;
   You(C4A610)`"You might think I'm horrible, but I don't regret anything."`;
   You(C4A611)`"It is probably better this way..."`;
   You(C4A612)`"Because this way I'm the only one who has sinned..."`;
   You(C4A613)`"That means I'm the only one who will be punished..."`;
   You(C4A614)`"She has no sin to carry on."`;
   Takeshi`"She...?"`;
   Takeshi`"Who are you talking about?"`;
   You(C4A615)`"About myself..."`;
   You(C4A616)`"My other self..."`;
   Takeshi`"Your other self...?"`;
   Takeshi`"Are you telling me you have split personality?"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `You didn't say anything and took the cup from my hand.`;
   `She sipped the cold coffee. `;
   `For some reason, You suddenly tilted the cup. `;
   `The black liquid, overtaken by the force of gravity, went splashing to the floor. `;
   Takeshi`"Y-You..."`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `You's eyes were fixed on me.`;
   `There was no expression on her face.`;
   `All the emotion had gone from her face and I couldn't read what she was thinking.`;
   `Her eyes were dark, dull, and without a spark, like a pair of ash gray glass beads. `;
   `Eventually You whispered.`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   You(C4A617)`"She is ..."`;
   You(C4A618)`"My sister."`;
   Takeshi`"Your sister...?"`;
   You(C4A619)`"Yes ..."`;
   You(C4A620)`"And at the same time she is me."`;
   You(C4A621)`"She and I are..."`;
   You(C4A622)`"...twins, you see."`;
   You(C4A623)`"She is my..."`;
   You(C4A624)`"...twin sister ..."`;

});
l_choice = 0;
jump(`YC5A`);
