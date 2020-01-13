varop(`(28 0a a4) b0 := (00) 5`);
varop(`(28 0a a4) b1 := (00) 3`);
varop(`(28 0a a4) b2 := (00) 3`);
setDialogBoxColor(GREEN);
playBGM({ num: 2, volume: 100 });
bgload({ name: `IMG01A`, transition: 20 });
setSceneTitle({ index: 17 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We were just killing time...`;
   waitForClick; clearText; marker; appendText; 
   Narr`We still couldn't think of any way to escape.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Still, we didn't want to feel like we were 
completely wasting our time.`;
   waitForClick; clearText; marker; appendText; 
   Narr`So we all decided to wander around LeMU one 
more time. `;
   waitForClick; clearText; marker; appendText; 
   Narr`As we made the rounds, I said things like...`;
   waitForClick; clearText; marker; appendText; 
   Narr`"Let's find something decent to eat - no more 
of those chicken sandwiches from the kiosk!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`And, "How many people can really ride on an 
EI that doesn't have enough buoyancy?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I also made other ridiculous propositions. `;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone was getting a little sick of me, but 
they still laughed along.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We all knew...`;
   waitForClick; clearText; marker; appendText; 
   Narr`As long as we were doing something, it kept 
our minds off things we couldn't change...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Like about how there was no way out, or 
remembering where we were.`;
   waitForClick; clearText; 
});
bgload({ name: `BG25A3`, transition: 20 });
clock(`18:51`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We decided to meet at 8 p.m. for dinner.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone was left to wander around freely 
until then.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Still an hour to go...)`;
   waitForClick; clearText; 
});
bgload({ name: `BG08A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`As I walked around the second floor, still 
thinking about what to do, I found myself in 
front of the infirmary.  `;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought Tsugumi would still be sleeping in 
bed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Maybe I should check on her...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`As I stood in front of the sliding door, it 
opened.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I could smell the faint but harsh odor of 
disinfectant.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU06ADM`, name2: `KA06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B000`); appendText; 
   //You
   You`"Takeshi, what are you doing here?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You greeted me with slight surprise as I 
entered the room.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Nothing really. I just thought I'd get some 
coffee to wake me up."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What about you two? 
What are you and the Kid up to?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked like she was in the middle of 
spreading out tools and parts next to the 
'L-MRI' scanner.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid was crouched down by the scanner as 
well, looking at what appeared to be pages of 
data.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU01ADM`, name2: `KA01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B001`); appendText; 
   //You
   You`"Well...you know, I thought I'd try to fix 
this machine after all."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Wow. And the Kid's helping?"`;
   waitForClick; clearText; marker; sound(`T3B002`); appendText; 
   //Kid
   Kid`"You got it."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B003`); appendText; 
   //You
   You`"He's much more helpful than he looks. He's 
really quick at reading blueprints...."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Sometimes that happens, where the Kid'll be 
strangely good at something. I wonder why 
that is?"`;
   waitForClick; clearText; marker; sound(`T3B004`); appendText; 
   //Kid
   Kid`"That's what I'd like to know."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You have no idea?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B005`); appendText; 
   //Kid
   Kid`"Nope...not a clue."`;
   waitForClick; clearText; marker; sound(`T3B006`); appendText; 
   //Kid
   Kid`"There might be some reason, but..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid hung his head, thinking.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B007`); appendText; 
   //You
   You`"Hey, hey, don't worry about it. No use 
wondering about it now."`;
   waitForClick; clearText; marker; sound(`T3B008`); appendText; 
   //You
   You`"It'll all make sense anyway when your memory 
comes back."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B009`); appendText; 
   //You
   You`"Hey Kid, can you hand me that wrench?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B010`); appendText; 
   //Kid
   Kid`"This one?"`;
   waitForClick; clearText; marker; sound(`T3B011`); appendText; 
   //You
   You`"Yeah, thanks. Here we go."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You sat cross-legged on the floor and began to 
unscrew the cover of the scanner.  `;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, I can see up your skirt when you sit 
like that."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B012`); appendText; 
   //You
   You`"Cut that out! Quit looking, this isn't a 
peep show!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Alright, alright, I was just joking..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I raised both hands and backed away.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"But you know, while the Kid's head is clear, 
maybe we should tackle some of the trickier 
problems."  `;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU01ADM`, name2: `KA01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B013`); appendText; 
   //You
   You`"Huh? Why?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Because, what if he hit his head or 
something, and he's only going to be good at 
this stuff for a little bit?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Maybe it jostled some brains cells into 
action that don't usually get used..."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU16ADM`, name2: `KA13ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B014`); appendText; 
   //You
   You`"Oh, please. This is not a comic book. Right, 
Kid?"`;
   waitForClick; clearText; marker; sound(`T3B015`); appendText; 
   //Kid
   Kid`"Listen, don't ask me..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B016`); appendText; 
   //You
   You`"Hm? Oh...that's right."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B017`); appendText; 
   //Kid
   Kid`"So, what's a comic book again?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B018`); appendText; 
   //You
   You`"What?! You've even forgotten comics?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B019`); appendText; 
   //Kid
   Kid`"Well I have a vague sense that I've heard 
the word before..."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU17ADM`, name2: `KA11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B020`); appendText; 
   //You
   You`"Wow, to forget about comic books...you know, 
you're missing out on about 20 percent of 
life right there..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid and You continued their strange 
conversation...`;
   waitForClick; clearText; marker; appendText; 
   Narr`...and I started to feel like there was no 
real reason for me to be there at all.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well, hang in there."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I turned my back to leave.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B021`); appendText; 
   //You
   You`"Hey, Takeshi..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You stood up abruptly and came to stand in 
front of me.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B022`); appendText; 
   //You
   You`"You came to check on Tsugumi, right?"`;
   waitForClick; clearText; marker; sound(`T3B023`); appendText; 
   //You
   You`"She's sleeping in that bed over there."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B024`); appendText; 
   //You
   You`"She isn't conscious yet, and of course she 
can't move her body...she really just needs 
to rest."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You was speaking slowly, her eyes cast down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`For some reason, her expression hardened. `;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B025`); appendText; 
   //You
   You`"And - it's not that I'm so sure of myself, 
but...still, I've done my very best for her..."`;
   waitForClick; clearText; marker; sound(`T3B026`); appendText; 
   //You
   You`"I can't guarantee that she will, but I want 
her to get better...."`;
   waitForClick; clearText; marker; sound(`T3B027`); appendText; 
   //You
   You`"So we'll just..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I know, You. And I'm really grateful for what 
you've done."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked her straight in the eyes.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"If you hadn't done the surgery, Tsugumi 
wouldn't have made it."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU17ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B028`); appendText; 
   //You
   You`"But we still don't know if she will really 
recover..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You worry too much. What? Don't you trust 
yourself?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B029`); appendText; 
   //You
   You`"No."`;
   waitForClick; clearText; marker; sound(`T3B030`); appendText; 
   //You
   You`"I'm not a trained doctor or anything..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I don't think that Tsugumi will give up so 
easily."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"She'll pull through...I know it."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"She'll be just like she was before in no 
time, and giving me a hard time as usual for 
sure."`;
   waitForClick; clearText; marker; appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B031`); appendText; 
   //You
   You`"I guess so. Actually, I'm starting to feel 
the same way."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She gave me a small smile.  `;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well then, I guess I'm off to see that 
mean-spirited girl's face..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So fix that scanner, okay?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B032`); appendText; 
   //You
   You`"Just leave it to me!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You plopped down again, and she and the Kid 
began grappling with the now-coverless scanner.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I went toward the bed in the back.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
bgload({ name: `EV_TU10A`, transition: 10 });
playBGM({ num: 19, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi was stretched out peacefully.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was probably due to the serious nature of 
the operation, but she was getting an IV.`;
   waitForClick; clearText; marker; appendText; 
   Narr`At least she wasn't hooked up to a 
respirator. Then again, that could have been 
because the infirmary didn't have a 
respirator...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Thankfully, she didn't look like she was in 
pain. `;
   waitForClick; clearText; marker; appendText; 
   Narr`She was sleeping so serenely,`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could almost believe that she would recover 
quickly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I remembered how she dragged me behind her as 
she ran through the aquarium. How tough she 
was, so much stamina.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She lay under a white blanket.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Her right foot was completely covered with a 
brace and bandages.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't tell what kind of condition it was 
in.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Ah...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I realized something as I neared the bed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That smell of antiseptic that I had first 
recognized when I came into the room...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was still strong and harsh around the bed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked down at the floor, and it was as if 
the tiles were blurring, changing color.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(It's the color......of her blood...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was the raw, brutal traces of the surgery.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I gently squeezed Tsugumi's hand, which was 
peeping out from under the blanket.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'm sorry."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was my fault that this had happened to her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If she doesn't make it......`;
   waitForClick; clearText; marker; appendText; 
   Narr`It wasn't the kind of thing made better by an 
apology.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And even if she did recover...`;
   waitForClick; clearText; marker; appendText; 
   Narr`What would I say to her face?`;
   waitForClick; clearText; marker; appendText; 
   Narr`It would only be natural for her to hit me, 
or yell at me.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...so sorry."`;
   waitForClick; clearText; marker; appendText; 
   Narr`All I could do was repeat it over and over to 
Tsugumi, who couldn't even answer.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T3B033`); appendText; 
   //Sora
   Sora`"Takeshi."`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was a voice behind me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Letting go of Tsugumi's hand, I quickly 
whirled around.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 3, volume: 100 });
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Oh hey, Sora..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora had suddenly appeared behind me.`;
   waitForClick; clearText; marker; sound(`T3B034`); appendText; 
   //Sora
   Sora`"It is unlikely that Tsugumi will wake up for 
a while."`;
   waitForClick; clearText; marker; sound(`T3B035`); appendText; 
   //Sora
   Sora`"The anesthetic is still in effect...it is 
probably best to leave her alone right now."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Yeah, I suppose you're right..."`;
   waitForClick; clearText; marker; sound(`T3B036`); appendText; 
   //Sora
   Sora`"So, Takeshi, are you free right now?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Who, me?"`;
   waitForClick; clearText; marker; sound(`T3B037`); appendText; 
   //Sora
   Sora`"Yes. If it is all right, I would like to 
talk to you."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Talk about what?"`;
   waitForClick; clearText; marker; sound(`T3B038`); appendText; 
   //Sora
   Sora`"Well, you see..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B039`); appendText; 
   //Sora
   Sora`"It's um, um, a secret." `;
   waitForClick; clearText; marker; appendText; 
   Narr`She laughed a little.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Sora wants to keep something secret?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was a little shocked..`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B040`); appendText; 
   //Sora
   Sora`"This room is...well, why don't we go outside?"`;
   waitForClick; 
});
choice(
   `Don't go`
   `Go`
);
switch (choice) {
   case 0: goto(lbl_00000434);
   case 1: goto(lbl_0000061e);
}
let lbl_00000434;
varop(`(28 0a a4) b7 += (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Actually, I want to stay here a little bit 
longer, if you don't mind."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It isn't often that you get to see Tsugumi 
being so still and docile."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B041`); appendText; 
   //Sora
   Sora`"Really..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Yeah. Can't you talk to me here? Now 
you've got me wondering what the big secret 
is."  `;
   waitForClick; clearText; marker; sound(`T3B042`); appendText; 
   //Sora
   Sora`"Takeshi..."`;
   waitForClick; clearText; marker; sound(`T3B043`); appendText; 
   //Sora
   Sora`"I can't talk to you here because it's 
confidential."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh, right. That makes sense...let's see."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B044`); appendText; 
   //Sora
   Sora`"...Never mind, it's not a big deal. We can 
discuss it later."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Ah."`;
   waitForClick; clearText; marker; sound(`T3B045`); appendText; 
   //Sora
   Sora`"If you'll excuse me, then."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora left, smiling.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU10A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I turned my attention again to Tsugumi's 
sleeping face.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She didn't say anything.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Of course, it was normal for Tsugumi not to 
talk about herself...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But now she wasn't saying anything at all.`;
   waitForClick; clearText; marker; appendText; 
   Narr`...I wanted to hear something.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As soon as possible.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Anything, I didn't care, I just wanted to hear 
Tsugumi's voice again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I began to believe that I could bear even her 
harshest, most cutting words.`;
   waitForClick; clearText; 
});
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(What?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I turned my head, sure I had been mistaken.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The lift to the decompression chamber was 
moving on its own...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sure enough, it was moving.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I ran over and peered into the square hole 
where the lift was.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The lift had gone down, then stopped.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(That's strange...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I pushed the button to call the lift, and 
jumped in.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I would go down to the decompression chamber.`;
   waitForClick; clearText; 
});
bgload({ name: `BG10A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`No one was in the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Was the lift malfunctioning?`;
   waitForClick; clearText; marker; appendText; 
   Narr`I reached out my hand to push the button to 
take me back up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In that second, something crossed my line of 
vision.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The sound of tiny footsteps was growing 
fainter...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Very tiny.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could tell that they were running through 
the emergency corridor.`;
   waitForClick; clearText; 
});
bgload({ name: `BG28A3R`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I turned into the corridor and followed the 
sound.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't think they were human footsteps.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Maybe it's Pipi?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`But if Pipi had separated from Coco, he surely 
wouldn't be in a place like this.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I sensed that the owner of the footsteps was 
something smaller.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed to be running with quite some 
momentum.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sometimes even crashing into walls.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was in a desperate hurry.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(In any case, it's an animal of some kind.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(But...what is it?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`It bothered me that it had run out of the 
infirmary.`;
   waitForClick; clearText; 
});
bgload({ name: `BG27A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The footsteps turned off the corridor and 
straight into a dead end.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had followed right up until that point...but 
somehow I lost it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe it fell down the stairs along the 
corridor, or climbed into a duct and jumped 
down a floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(That clever little...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe it was...a rat?`;
   waitForClick; clearText; marker; appendText; 
   Narr`...Could be. It wouldn't be so strange for 
LeMU to have rats.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In which case—`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"This is stupid."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What the hell am I doing, chasing after a 
rat?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Scratching my head, I retraced my steps.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
stopBGM();
bgload({ name: `BG10A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Before I got back in the lift, I glanced back 
into the decompression chamber and noticed 
for the first time that the bed was looking 
dirty.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, who ate their dinner here...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`There were small breadcrumbs on the bed.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 2, volume: 100 });
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Hey, You!"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 4, name1: `YU01ADS`, name2: `KA01ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B046`); appendText; 
   //You
   You`"Yeah?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I got out of the lift and stomped over to 
where You and the Kid were still in the 
middle of their repair efforts.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 4, id3: 0, useAnim: true });
multifgload2({ id1: 1, id2: 4, name1: `YU01ADM`, name2: `KA01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Who was eating bread in the decompression 
chamber?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 4, name1: `YU07ADM`, name2: `KA07ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B047`); appendText; 
   //You
   You`"Huh? What are you talking about?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You frowned and turned the hand holding the 
screwdriver toward me.  `;
   waitForClick; clearText; marker; sound(`T3B048`); appendText; 
   //You
   You`"How would I know?"`;
   waitForClick; clearText; marker; sound(`T3B049`); appendText; 
   //Kid
   Kid`"I don't know either."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid had insulation tape wrapped around his 
fingers.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B050`); appendText; 
   //You
   You`"Takeshi, you sure it wasn't you?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Why would it be me, if I'm the one asking 
about it..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I mean, it doesn't really matter who it was, 
but don't you think we'd better be a little 
more careful?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KA01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B051`); appendText; 
   //Kid
   Kid`"Careful of what?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I think there was a rat in here just now."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"If we leave food laying around, it might get 
eaten."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B052`); appendText; 
   //You
   You`"Oh...in that case I guess we should be more 
careful."`;
   waitForClick; clearText; marker; sound(`T3B053`); appendText; 
   //You
   You`"We've got plenty of food in the kiosk, for 
now, but it would be awful if it was broken 
into."`;
   waitForClick; clearText; marker; sound(`T3B054`); appendText; 
   //Kid
   Kid`"Do you think we should try to catch it?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I don't think we need to go that far."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B055`); appendText; 
   //You
   You`"Hey Kid, you don't happen to know how to 
make a rat trap do you?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KA11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B056`); appendText; 
   //Kid
   Kid`"Who knows...?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KA12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B057`); appendText; 
   //Kid
   Kid`"I don't really know if I know how or not."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid laughed and shrugged his shoulders 
exaggeratedly.`;
   waitForClick; clearText; 
});
goto(lbl_00000e81);
let lbl_0000061e;
varop(`(28 0a a4) b8 += (00) 1`);
varop(`(28 0a a4) ec := (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Okay, where are you going?"`;
   waitForClick; clearText; marker; sound(`T3B058`); appendText; 
   //Sora
   Sora`"To the dolphins..."`;
   waitForClick; clearText; marker; sound(`T3B059`); appendText; 
   //Sora
   Sora`"To the Dolphin Carousel. I like that place."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"All right. Let's go."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG08A1`, transition: 20 });
bgload({ name: `BG25A3`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`As we left the infirmary, You and the Kid were 
looking at me with curious expressions on 
their faces.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What's up with them, looking like they were 
just bit on the butt by something?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B060`); appendText; 
   //Sora
   Sora`"Hee hee..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora answered me with an amused laugh.`;
   waitForClick; clearText; marker; sound(`T3B061`); appendText; 
   //Sora
   Sora`"They thought that you were talking to 
yourself."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh, okay..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"No wait, why? I was talking with you?"`;
   waitForClick; clearText; marker; sound(`T3B062`); appendText; 
   //Sora
   Sora`"Didn't I say that I wanted to talk to you 
about something secret?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...Oh, now I get it..." `;
   waitForClick; clearText; marker; appendText; 
   Narr`Apparently You and the Kid couldn't see Sora.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeFG({ id: 1, useAnim: true });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
stopBGM();
bgload({ name: `BG02A1`, transition: 20 });
setSceneTitle({ index: 18 });
clock(`19:25`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We reached the Dolphin Carousel.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The circling dolphins stood still in the 
silence.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 19, volume: 100 });
fgload({ id: 1, name: `SO11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B063`); appendText; 
   //Sora
   Sora`"It's so quiet..."`;
   waitForClick; clearText; marker; sound(`T3B064`); appendText; 
   //Sora
   Sora`"Sometimes it seems that the everyday hubbub 
is all an empty lie..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora spoke quietly.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B065`); appendText; 
   //Sora
   Sora`"I apologize, that was inappropriate. It 
doesn't fit the moment."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"No, I don't mind. If I had known about this 
place days before..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...yeah, and if I'd seen it back in the days 
when it was full of people, I'd probably be 
thinking the same thing."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Sora, how long have you been here at LeMU?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B066`); appendText; 
   //Sora
   Sora`"I started working at a functional level in 
April of 2011."`;
   waitForClick; clearText; marker; sound(`T3B067`); appendText; 
   //Sora
   Sora`"So, since then."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Six years, huh..."`;
   waitForClick; clearText; marker; sound(`T3B068`); appendText; 
   //Sora
   Sora`"Yes, that is correct."`;
   waitForClick; clearText; marker; sound(`T3B069`); appendText; 
   //Sora
   Sora`"2223 days..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora narrowed her eyes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was nearly overcome by some feeling.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Could it be nostalgia?`;
   waitForClick; clearText; marker; appendText; 
   Narr`It didn't seem like a programmed emotion.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She must treasure memories of this place.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We gazed at the figures of the silent 
dolphins for a while.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So listen, Sora."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I broke in, hoping it was the right moment.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B070`); appendText; 
   //Sora
   Sora`"Yes? What is it?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You said you had to talk to me about a 
secret."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Are you ready to tell me about it?"`;
   waitForClick; clearText; marker; sound(`T3B071`); appendText; 
   //Sora
   Sora`"Ah yes, that's right."`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She straightened, and turned to face me.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 8, volume: 100 });
fgload({ id: 1, name: `SO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Then suddenly her face shone as she said,`;
   waitForClick; clearText; marker; sound(`T3B072`); appendText; 
   //Sora
   Sora`"Takeshi, shall we play tag?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Uh..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B073`); appendText; 
   //Sora
   Sora`"Kick-the-can was so much fun yesterday!"`;
   waitForClick; clearText; marker; sound(`T3B074`); appendText; 
   //Sora
   Sora`"So, won't you play tag with me?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Tag!?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't quite grasp the connection.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B075`); appendText; 
   //Sora
   Sora`"Come on, Takeshi, you have to -"`;
   waitForClick; clearText; marker; sound(`T3B076`); appendText; 
   //Sora
   Sora`"Try and catch me!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She casually floated up off the ground, and 
moved off as if she were gliding.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, wait a minute, Sora..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
bgload({ name: `EV_SO09K`, transition: 10 });
showTextbox();
text(() => {
   marker; sound(`T3B077`); appendText; 
   //Sora
   Sora`"Come on, this way!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Where did you go?!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I immediately looked around for her.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO09A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T3B078`); appendText; 
   //Sora
   Sora`"Right here!"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO09B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T3B079`); appendText; 
   //Sora
   Sora`"Over here!"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO09C`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T3B080`); appendText; 
   //Sora
   Sora`"Where are you looking?"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO09K`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She would flicker into view here and there 
and then disappear again.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey! You!"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO09D`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T3B081`); appendText; 
   //Sora
   Sora`"This way, this way!"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO09E`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T3B082`); appendText; 
   //Sora
   Sora`"What's the matter?"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO09F`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T3B083`); appendText; 
   //Sora
   Sora`"I'm right here!"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO09K`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Laughing, she would show herself in one 
place, and then disappear. `;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh, come on! What IS this!?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You know as well as I do -"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"There's no way I can catch you..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"No matter what I do, I can't grab hold of 
you!"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO09G`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T3B084`); appendText; 
   //Sora-A
   Sora_A`"What?! Really?"`;
   waitForClick; clearText; marker; sound(`T3B085`); appendText; 
   //Sora-B
   Sora_B`"No, surely not...!"`;
   waitForClick; clearText; marker; sound(`T3B086`); appendText; 
   //Sora-C
   Sora_C`"I see...hee hee, I didn't realize that."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was playing dumb.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora had split into three images...`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What the heck..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What's happened to you, Sora?"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO09H`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T3B087`); appendText; 
   //Sora-A
   Sora_A`"Hm, what could it be?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She shrugged exaggeratedly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`All three leaned toward me at the same time...`;
   waitForClick; clearText; marker; sound(`T3B088`); appendText; 
   //Sora-B
   Sora_B`"Do you think I am strange?"`;
   waitForClick; clearText; marker; sound(`T3B089`); appendText; 
   //Sora-C
   Sora_C`"Is there something wrong with me?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'm the one that should be asking that 
question!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What the heck is going on here!?"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO09I`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T3B090`); appendText; 
   //Sora-B
   Sora_B`"Hee hee!"`;
   waitForClick; clearText; marker; sound(`T3B091`); appendText; 
   //Sora-A
   Sora_A`"I don't even know myself anymore what's going 
on..."`;
   waitForClick; clearText; marker; sound(`T3B092`); appendText; 
   //Sora-C
   Sora_C`"I feel all happy and fluffy..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was floating around like someone who was 
slightly drunk.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I started to worry.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"S-Sora! Are you okay?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You're sure you're not sick? Or tired?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Nothing bad's happened, has it?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Maybe we should get LeMMIH to check you 
out...to make sure there's not some serious 
error..."`;
   waitForClick; clearText; marker; sound(`T3B093`); appendText; 
   //Sora
   Sora`"Why, Takeshi!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She pursed her mouth and took a huge sigh.`;
   waitForClick; clearText; 
});
bgload({ name: `BG02A1`, transition: 20 });
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Then suddenly she appeared right in front of 
me, in a slightly troubled pose.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She didn't move, and there was only one of her.`;
   waitForClick; clearText; marker; sound(`T3B094`); appendText; 
   //Sora
   Sora`"All right."`;
   waitForClick; clearText; marker; sound(`T3B095`); appendText; 
   //Sora
   Sora`"I will stop playing around with you."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Playing around...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B096`); appendText; 
   //Sora
   Sora`"Yes."`;
   waitForClick; clearText; marker; sound(`T3B097`); appendText; 
   //Sora
   Sora`"That was just a little joke..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"......"`;
   waitForClick; clearText; marker; sound(`T3B098`); appendText; 
   //Sora
   Sora`"Now for the reason I brought you here."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I shook my head, putting my fingers against my 
temples.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Seeing that, Sora smiled at me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Without making any noise at all, the dolphins 
began quietly circling again.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I leaned against a handy artificial rock with 
a mascot pasted to it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora stood at attention once again, and began 
speaking slowly.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 14, volume: 100 });
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B099`); appendText; 
   //Sora
   Sora`"This is the continuation of our conversation 
yesterday."`;
   waitForClick; clearText; marker; sound(`T3B100`); appendText; 
   //Sora
   Sora`"The reason that there is only one being like 
me in the world..."`;
   waitForClick; clearText; marker; sound(`T3B101`); appendText; 
   //Sora
   Sora`"I think I told you that it was the policy of 
my creator."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B102`); appendText; 
   //Sora
   Sora`"In order to give me a unified, individual 
personality, there are restrictions on my 
faculties."`;
   waitForClick; clearText; marker; sound(`T3B103`); appendText; 
   //Sora
   Sora`"However, according to theory, several of me 
can exist at the same time."`;
   waitForClick; clearText; marker; sound(`T3B104`); appendText; 
   //Sora
   Sora`"Just like I showed you before."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B105`); appendText; 
   //Sora
   Sora`"...Shall I show you again?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"No thanks. I'm still recovering..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B106`); appendText; 
   //Sora
   Sora`"Hee hee...all right, I won't do it anymore."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She stopped there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She seemed to be thinking about something, 
then took a deep breath and continued.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B107`); appendText; 
   //Sora
   Sora`"Just now..."`;
   waitForClick; clearText; marker; sound(`T3B108`); appendText; 
   //Sora
   Sora`"Could you tell which one was me?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Huh?"`;
   waitForClick; clearText; marker; sound(`T3B109`); appendText; 
   //Sora
   Sora`"Which one was me?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well, which...uh..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So...the several versions of you...they're 
all different?"`;
   waitForClick; clearText; marker; sound(`T3B110`); appendText; 
   //Sora
   Sora`"No."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well then, they're all the same."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"They're all the same Sora."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B111`); appendText; 
   //Sora
   Sora`"Correct."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She smiled.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B112`); appendText; 
   //Sora
   Sora`"Yes, they're all me..."`;
   waitForClick; clearText; marker; sound(`T3B113`); appendText; 
   //Sora
   Sora`"Perfect copies...no, perhaps it is easier to 
understand if I use the word 'clones.'"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B114`); appendText; 
   //Sora
   Sora`"Takeshi, are you aware of the "Clone Law" 
that was officially amended in 2010?"`;
   waitForClick; 
});
choice(
   `Yes`
   `No`
);
switch (choice) {
   case 0: goto(lbl_00000a13);
   case 1: goto(lbl_00000a1c);
}
let lbl_00000a13;
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Yes, I know of it. In 2010 -"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Human cloning, which had been prohibited 
until then, was recognized under law."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Once they had the approval of the 
authorities, anyone could undergo clone 
fertilization as a way to treat infertility."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"The nucleus is taken from an already-
cultivated somatic cell, and inserted it 
into an egg that has had its original 
nucleus removed."`;
   waitForClick; clearText; appendText; 
   //Takeshi
   Takeshi`"Then it is implanted into 
the mother's womb..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"One of my friend's relatives went through it."`;
   waitForClick; clearText; marker; sound(`T3B115`); appendText; 
   //Sora
   Sora`"Well then, you don't need an explanation 
about cloning."`;
   waitForClick; clearText; 
});
goto(lbl_00000a21);
let lbl_00000a1c;
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"No, I don't know. I mean...I forget."`;
   waitForClick; clearText; marker; sound(`T3B116`); appendText; 
   //Sora
   Sora`"In 2010?"`;
   waitForClick; clearText; marker; sound(`T3B117`); appendText; 
   //Sora
   Sora`"Human cloning, which had been illegal up 
until then, was allowed by law."`;
   waitForClick; clearText; marker; sound(`T3B118`); appendText; 
   //Sora
   Sora`"Currently, as long as anyone receives the 
approval of the authorities, cloning may be 
used as a method to treat infertility."`;
   waitForClick; clearText; marker; sound(`T3B901`); appendText; 
   //Sora
   Sora`"They take the nucleus from an 
already-cultivated somatic cell, and then 
insert it into an egg that has had its 
original nucleus removed. `;
   waitForClick; clearText; sound(`T3B9019012`); appendText; 
   //Sora
   Sora`Then they implant 
it into the mother's womb..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh, that's right, I remember now!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"One of my friend's relatives went through it."`;
   waitForClick; clearText; marker; sound(`T3B120`); appendText; 
   //Sora
   Sora`"Do you understand?"`;
   waitForClick; clearText; 
});
let lbl_00000a21;
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Uh...uhm...well..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"But what does that have to do with this?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Clones develop separately. In other words 
they are different entities."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"They're not the same person. They're more 
like twins..."`;
   waitForClick; clearText; marker; sound(`T3B121`); appendText; 
   //Sora
   Sora`"But, their source is the same."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She spoke almost casually.`;
   waitForClick; clearText; marker; sound(`T3B122`); appendText; 
   //Sora
   Sora`"Let's go back to what we were talking 
about..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
bgload({ name: `EV_SO09K`, transition: 20 });
bgload({ name: `EV_SO09J`, transition: 10 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Then she branched into her several selves 
again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And she'd said she wouldn't do it anymore...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sure enough, I was dizzy.`;
   waitForClick; clearText; marker; sound(`T3B123`); appendText; 
   //Sora
   Sora`"This 'Me', evenly divided..."`;
   waitForClick; clearText; marker; sound(`T3B124`); appendText; 
   //Sora
   Sora`"...are all Sora Akanegasaki."`;
   waitForClick; clearText; marker; sound(`T3B125`); appendText; 
   //Sora
   Sora`"That 'me' is over there, and at the same 
time this 'me' is not there."`;
   waitForClick; clearText; marker; sound(`T3B126`); appendText; 
   //Sora
   Sora`"I am here, but the 'me' over there is a 
different 'me.'"`;
   waitForClick; clearText; marker; sound(`T3B127`); appendText; 
   //Sora
   Sora`"But they are all me, the same, 'Me'..."`;
   waitForClick; clearText; marker; sound(`T3B128`); appendText; 
   //Sora
   Sora`"All me."`;
   waitForClick; clearText; marker; sound(`T3B129`); appendText; 
   //Sora
   Sora`"Which means..."`;
   waitForClick; clearText; marker; sound(`T3B130`); appendText; 
   //Sora
   Sora`"I am one, yet at the same time I am many."`;
   waitForClick; clearText; marker; sound(`T3B131`); appendText; 
   //Sora
   Sora`"I can be in any place, exist everywhere."`;
   waitForClick; clearText; marker; sound(`T3B132`); appendText; 
   //Sora
   Sora`"I am—omnipresent."`;
   waitForClick; clearText; marker; sound(`T3B133`); appendText; 
   //Sora
   Sora`"Yes, that's right."`;
   waitForClick; clearText; marker; sound(`T3B134`); appendText; 
   //Sora
   Sora`"There can be several of me existing in the 
same space, at the same time."`;
   waitForClick; clearText; marker; sound(`T3B135`); appendText; 
   //Sora
   Sora`"For example, in front of you and in front of 
Coco."`;
   waitForClick; clearText; marker; sound(`T3B136`); appendText; 
   //Sora
   Sora`"There and here, there are two of me."`;
   waitForClick; clearText; marker; sound(`T3B137`); appendText; 
   //Sora
   Sora`"But they are definitely not 'W'..."`;
   waitForClick; clearText; marker; sound(`T3B138`); appendText; 
   //Sora
   Sora`"but 'Y'."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`" 'Y' ? "`;
   waitForClick; clearText; marker; sound(`T3B139`); appendText; 
   //Sora
   Sora`"'Y' because we split from our source 
branching off."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora danced around in midair.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her other images multiplied and disappeared.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was impossible even to tell their size, 
amount, or distance.`;
   waitForClick; clearText; marker; sound(`T3B140`); appendText; 
   //Sora
   Sora`"You see...please think of it this way."`;
   waitForClick; clearText; marker; sound(`T3B141`); appendText; 
   //Sora
   Sora`"What if you could be copied exactly, just 
the way you are?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"??"`;
   waitForClick; clearText; marker; appendText; 
   Narr`"...What is she saying...?"`;
   waitForClick; clearText; marker; sound(`T3B142`); appendText; 
   //Sora
   Sora`"For instance..."`;
   waitForClick; clearText; marker; sound(`T3B143`); appendText; 
   //Sora
   Sora`"For instance, what if every recollection, 
thought, feeling, character trait, 
personality, and emotion that is etched into 
your mind..."`;
   waitForClick; clearText; marker; sound(`T3B144`); appendText; 
   //Sora
   Sora`"In other words, your whole intelligence, 
could be perfectly, exactly extracted..."`;
   waitForClick; clearText; marker; sound(`T3B145`); appendText; 
   //Sora
   Sora`"...and then duplicated in some kind of 
storage medium, even reproducing all your 
abilities..." `;
   waitForClick; clearText; marker; sound(`T3B146`); appendText; 
   //Sora
   Sora`"Then, where is the real you?"`;
   waitForClick; clearText; marker; sound(`T3B147`); appendText; 
   //Sora
   Sora`"The you who stays in your body, is that the 
real you?"`;
   waitForClick; clearText; marker; sound(`T3B148`); appendText; 
   //Sora
   Sora`"Or is the duplicate character in fact you?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`T3B149`); appendText; 
   //Sora
   Sora`"The answer is, in any case, 
the real you does exist in both."`;
   waitForClick; clearText; marker; sound(`T3B150`); appendText; 
   //Sora
   Sora`"If such a thing were possible..."`;
   waitForClick; clearText; marker; sound(`T3B151`); appendText; 
   //Sora
   Sora`"You would split in a form of non-meiotic 
division."`;
   waitForClick; clearText; marker; sound(`T3B152`); appendText; 
   //Sora
   Sora`"In other words, it is not the same as 
splitting an apple into two..."`;
   waitForClick; clearText; marker; sound(`T3B153`); appendText; 
   //Sora
   Sora`"It is as if another apple with the exact 
mass, shape, and composition comes into being."`;
   waitForClick; clearText; marker; sound(`T3B154`); appendText; 
   //Sora
   Sora`"When that happens, you become two."`;
   waitForClick; clearText; 
});
bgload({ name: `BG02A1`, transition: 20 });
multifgload2({ id1: 1, id2: 2, name1: `SO01ADM`, name2: `SO01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora got rid of all but one extra body, and 
stood in front of me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Now, there were two copies of Sora before me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no way to tell which was the 
original...`;
   waitForClick; 
});
choice(
   `Hear more`
   `Struggle`
);
switch (choice) {
   case 0: goto(lbl_00000aa4);
   case 1: goto(lbl_00000ab8);
}
let lbl_00000aa4;
varop(`(28 0a a4) b8 += (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(But why is Sora telling me all this...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered, but kept quiet and listened.`;
   waitForClick; clearText; 
});
goto(lbl_00000b4d);
let lbl_00000ab8;
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...I -"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I don't get it."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wanted to scratch my head.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No, I actually did scratch my head.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"There's two of me!?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What are you saying?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Who am I?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Who am I!?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Is there another me!?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"If you're out there, answer me!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wanted to rage, to hit something.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had to grind my teeth together to keep 
myself still.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SO03ADM`, name2: `SO03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B155`); appendText; 
   //Sora
   Sora`"Calm down, Takeshi...."`;
   waitForClick; clearText; marker; sound(`T3B156`); appendText; 
   //Sora
   Sora`"Listen to me...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She arched her eyebrow.`;
   waitForClick; clearText; marker; sound(`T3B157`); appendText; 
   //Sora
   Sora`"I'm saying, what if..."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SO10ADM`, name2: `SO10ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B158`); appendText; 
   //Sora
   Sora`"If there were such a thing as true cloning, 
not just cellular cloning."`;
   waitForClick; clearText; marker; sound(`T3B159`); appendText; 
   //Sora
   Sora`"If there were a copy that could exist in the 
world with absolutely no difference from the 
original."`;
   waitForClick; clearText; marker; sound(`T3B160`); appendText; 
   //Sora
   Sora`"I am simply speaking hypothetically..."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SO03ADM`, name2: `SO03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B161`); appendText; 
   //Sora
   Sora`"Please, just listen to me..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Alright, alright!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Alright. I'll listen."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took the voice adapter out for a moment, 
rubbed my ear, and put it back.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Then I took a deep breath.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Haaaaaaaa, Hoooooo......"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"All right, bring it on!"`;
   waitForClick; clearText; marker; appendText; 
   //Sora
   Sora`"........."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SO01ADM`, name2: `SO01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B162`); appendText; 
   //Sora
   Sora`"Very well, I will continue."`;
   waitForClick; clearText; 
});
let lbl_00000b4d;
showTextbox();
text(() => {
   marker; sound(`T3B163`); appendText; 
   //Sora
   Sora`"Yes...you became two."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The two Soras were speaking in unison.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SO10ADM`, name2: `SO10ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B164`); appendText; 
   //Sora
   Sora`"Historically, and from that moment forward, 
the two of you are traveling down the time 
axis as separate entities."`;
   waitForClick; clearText; marker; sound(`T3B165`); appendText; 
   //Sora
   Sora`"But, if you turn around and look at the 
journey you have taken, you will see that at 
one point the two of you were joined together."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T3B166`); appendText; 
   //Sora
   Sora`"It is split like a 'Y,' with two points 
emerging from one line. Not a 'W,' with two 
separate points of origin."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T3B167`); appendText; 
   //Sora
   Sora`"You may be unable to imagine two of yourself, 
splitting apart and going different ways at a 
particular moment which we will use as a 
reference point."`;
   waitForClick; clearText; marker; sound(`T3B168`); appendText; 
   //Sora
   Sora`"But that is something that has already 
happened."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SO01ADM`, name2: `SO01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B169`); appendText; 
   //Sora
   Sora`"You are always, incessantly, approaching a 
choice in each present moment that becomes 
the past the instant you visit it." `;
   waitForClick; clearText; marker; sound(`T3B170`); appendText; 
   //Sora
   Sora`"Will you choose path A? Will you choose 
path B?"`;
   waitForClick; clearText; marker; sound(`T3B171`); appendText; 
   //Sora
   Sora`"The you that is standing here may have come 
down path A, but in another time axis, there 
may be a you who is going down path B."`;
   waitForClick; clearText; marker; sound(`T3B172`); appendText; 
   //Sora
   Sora`"And both the you on path A and the you on 
path B are both still you."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SO03ADM`, name2: `SO03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B173`); appendText; 
   //Sora
   Sora`"Except that, the 'you' on path A doesn't know 
about the 'you' on path B."`;
   waitForClick; clearText; marker; sound(`T3B174`); appendText; 
   //Sora
   Sora`"Because there is no way to know."`;
   waitForClick; clearText; marker; sound(`T3B175`); appendText; 
   //Sora
   Sora`"In the same way, the 'you' on path B 
probably isn't aware of the 'you' on path A, 
either."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SO09ADM`, name2: `SO09ADM`, x1: 128, x2: 512, useAnim: true });
goto(lbl_00000c05).if(var_b3 == 0);
showTextbox();
text(() => {
   marker; sound(`T3B176`); appendText; 
   //Sora
   Sora`"Do you know why that is?"`;
   waitForClick; clearText; 
});
goto(lbl_00000c2d);
let lbl_00000c05;
showTextbox();
text(() => {
   marker; sound(`T3B176`); appendText; 
   //Sora
   Sora`"Do you?"`;
   waitForClick; 
});
choice(
   `I don't know`
   `I do know`
);
switch (choice) {
   case 0: goto(lbl_00000c2d);
   case 1: goto(lbl_00000cf0);
}
let lbl_00000c2d;
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"I don't know..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I answered honestly.`;
   waitForClick; clearText; marker; sound(`T3B177`); appendText; 
   //Sora
   Sora`"It is because you only have the ability to 
perceive three dimensions."`;
   waitForClick; clearText; marker; sound(`T3B178`); appendText; 
   //Sora
   Sora`"Takeshi, do I look corporeal to you?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Of course."`;
   waitForClick; clearText; marker; sound(`T3B179`); appendText; 
   //Sora
   Sora`"In that case, please take out just one of the 
earphones of your voice adaptor, and come 
around here to my side."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I carefully removed an earphone, and did as 
she said.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"......!!??"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, Sora, you..."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Naturally, Sora had become invisible.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Where did you go?"`;
   waitForClick; clearText; marker; sound(`T3B180`); appendText; 
   //Sora
   Sora`"I am here."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I can't see you..."`;
   waitForClick; clearText; marker; sound(`T3B181`); appendText; 
   //Sora
   Sora`"I haven't moved. And I haven't made myself 
invisible."`;
   waitForClick; clearText; marker; sound(`T3B182`); appendText; 
   //Sora
   Sora`"Will you please return to where you were?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Ah, yeah...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Hesitantly, I moved back toward where I had 
been standing.`;
   waitForClick; clearText; 
});
makeFGTransparent({ id: 1 });
makeFGTransparent({ id: 2 });
multifgload2({ id1: 1, id2: 2, name1: `SO01ADM`, name2: `SO01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora's body...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was like watching something flutter into 
an empty space. She slowly came into my line 
of vision...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I went back to where I was.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I put the voice adaptor back in my ear.`;
   waitForClick; clearText; 
});
makeFGNormal({ id: 1 });
makeFGNormal({ id: 2 });
multifgload2({ id1: 1, id2: 2, name1: `SO01ADM`, name2: `SO01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora was standing on both sides of my line of 
vision as if nothing had happened at all.`;
   waitForClick; clearText; marker; sound(`T3B183`); appendText; 
   //Sora
   Sora`"Now, please close your right eye."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Like this?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I closed my right eye.`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The Sora standing on the right side vanished.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Only the Sora standing on the left side was 
still there.`;
   waitForClick; clearText; marker; sound(`T3B184`); appendText; 
   //Sora
   Sora`"Next, open your right eye, and close your 
left."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I opened my right eye, and closed my left...`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO01ADM`, x: 512, useAnim: true });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`This time the Sora on the left vanished, and 
the Sora on the right sprang into view.`;
   waitForClick; clearText; marker; sound(`T3B185`); appendText; 
   //Sora
   Sora`"Now, open both your eyes."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Just like before, two Soras stood at either 
edge of my vision.`;
   waitForClick; clearText; marker; sound(`T3B186`); appendText; 
   //Sora
   Sora`"To 'see' a 3-dimensional figure..."`;
   waitForClick; clearText; marker; sound(`T3B187`); appendText; 
   //Sora
   Sora`"You take 2-dimensional information acquired 
from both of your eyes, and your brain 
analyzes and processes it accordingly to gain 
the correct depth."`;
   waitForClick; clearText; marker; sound(`T3B188`); appendText; 
   //Sora
   Sora`"So, to see a 3-dimensional space from the 
outside, and be able to recognize it...?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...I don't get it. I don't get it, but..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Somehow I think DO get it."`;
   waitForClick; clearText; 
});
goto(lbl_00000d38);
let lbl_00000cf0;
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"It's obvious."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I answered.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You just stated that 'there is no way to 
know.'"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"There is no means in existence to let my 'A' 
self see my 'B' self."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"For a person to see a 3-dimensional body, 
they have to receive flattened visual 
information from two eyes, and the brain has 
to make sense of it."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"In the same way..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"To know that both 'A' and 'B' of yourself 
exist, you'd have to move to a perspective 
completely outside the 'Y'."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Even if you understand it intellectually, you 
can't actually confirm that 'A' and 'B' both 
exist."`;
   waitForClick; clearText; marker; sound(`T3B189`); appendText; 
   //Sora
   Sora`"That's right."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SO02ADM`, name2: `SO02ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B190`); appendText; 
   //Sora
   Sora`"Wonderful...Takeshi, you might be a natural 
at this."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"At what?"`;
   waitForClick; clearText; marker; sound(`T3B191`); appendText; 
   //Sora
   Sora`"At physics...or perhaps even philosophy."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You don't have to flatter me."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SO01ADM`, name2: `SO01ADM`, x1: 128, x2: 512, useAnim: true });
let lbl_00000d38;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora held her hand up in the air.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could see a holograph...`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
bgload({ name: `IT01D`, transition: 00 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`A board appeared in midair and neatly folded 
itself into a square.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Then a point of light appeared, and started 
moving.`;
   waitForClick; clearText; marker; sound(`T3B192`); appendText; 
   //Sora
   Sora`"Let's say that there are intelligent beings 
in a 2-dimensional world."`;
   waitForClick; clearText; marker; sound(`T3B193`); appendText; 
   //Sora
   Sora`"Can they see a 3-dimensional object?"`;
   waitForClick; clearText; 
});
bgload({ name: `IT01E`, transition: 00 });
showTextbox();
text(() => {
   marker; sound(`T3B194`); appendText; 
   //Sora
   Sora`"No, they cannot."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The square changed into a cube.`;
   waitForClick; clearText; marker; sound(`T3B195`); appendText; 
   //Sora
   Sora`"The reason is, since they only exist in two 
dimensions, they can only perceive those 
things which happen on a plane."`;
   waitForClick; clearText; marker; sound(`T3B196`); appendText; 
   //Sora
   Sora`"In a 2-dimensional field of vision, only 
straight lines (one dimension) can be 
reflected."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The dots of light were now on all six faces 
of the cube.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But each light only moved around the surface 
of its own square, never intersecting with 
the other lights.`;
   waitForClick; clearText; 
});
bgload({ name: `IT01F`, transition: 00 });
showTextbox();
text(() => {
   marker; sound(`T3B197`); appendText; 
   //Sora
   Sora`"Now then, let's say that for some reason they 
become 3-dimensional."`;
   waitForClick; clearText; marker; sound(`T3B198`); appendText; 
   //Sora
   Sora`"Then, in their 3-dimensional range of 
vision, only planes - two dimensions - can be 
reflected."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The lights from the six surfaces gathered 
together to become one and moved to the 
center of the cube.`;
   waitForClick; clearText; 
});
bgload({ name: `IT01G`, transition: 00 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And in every direction, new holograms of cubes 
appeared.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The cubes lined up surface to surface, 
without even a crevice between them.`;
   waitForClick; clearText; marker; sound(`T3B199`); appendText; 
   //Sora
   Sora`"With 3-dimensional sight, all that happens 
is that the plane reflected in the right eye 
and the plane reflected in the left eye are 
synthesized into one image."`;
   waitForClick; clearText; marker; sound(`T3B200`); appendText; 
   //Sora
   Sora`"It would be impossible to achieve something 
close to the real image of Mount Fuji, for 
example, even with a finely-drawn backdrop."`;
   waitForClick; clearText; marker; appendText; 
   Narr`A light floated in each of the cubes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`These lights moved incessantly, vigorously 
colliding into the six faces of the cubes and 
moving.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But each light never left its cube, and never 
intersected with any of the other lights.`;
   waitForClick; clearText; marker; sound(`T3B201`); appendText; 
   //Sora
   Sora`"Shall we go over it again?"`;
   waitForClick; clearText; marker; sound(`T3B202`); appendText; 
   //Sora
   Sora`"By combining 2-dimensional information 
coming in at the same time from two different 
sources, you are really just hallucinating 
that you are perceiving a solid form."`;
   waitForClick; clearText; marker; sound(`T3B203`); appendText; 
   //Sora
   Sora`"That is not true 3-dimensional vision."`;
   waitForClick; clearText; marker; sound(`T3B204`); appendText; 
   //Sora
   Sora`"3-dimensional vision is when you can see all 
six sides of a cube, at the same time."`;
   waitForClick; clearText; marker; sound(`T3B205`); appendText; 
   //Sora
   Sora`"In an 'n' dimension, you can only obtain 
visual information in the dimension of 'n-1'."`;
   waitForClick; clearText; marker; sound(`T3B206`); appendText; 
   //Sora
   Sora`"This is why if you are on one tip of the 'Y' 
shape, it means that you cannot be aware of 
what is happening at the other tip."`;
   waitForClick; clearText; marker; sound(`T3B207`); appendText; 
   //Sora
   Sora`"Let's say that you did obtain a 3-dimensional 
range of vision..."`;
   waitForClick; clearText; marker; sound(`T3B208`); appendText; 
   //Sora
   Sora`"So if you escaped the plane of 
2-dimensionality, and when you looked 'down' 
from a 3-dimensional space at the 
2-dimensional plane?"`;
   waitForClick; clearText; marker; sound(`T3B209`); appendText; 
   //Sora
   Sora`"You would realize for the first time that 
you were at a particular point on the 'Y'..."`;
   waitForClick; clearText; marker; sound(`T3B210`); appendText; 
   //Sora
   Sora`"...and realize too that there could be 
another you that took a different path on the 
'Y'."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 00 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The holographic cubes broke apart, and then 
disappeared.`;
   waitForClick; clearText; 
});
removeBG({ mode: WHITE, transition: 02 });
openSnowFallingAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Suddenly my field of vision was filled with a 
dazzling white light.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora looked distorted.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Then she split into countless versions of 
herself.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't see anything but Soras.`;
   waitForClick; clearText; 
});
showDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I couldn't stand to hold my eyes open.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Which one was she?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Was she all of them?...`;
   waitForClick; clearText; marker; sound(`T3B211`); appendText; 
   //Sora
   Sora`"You see, it's the same for a 3-dimensional 
space..."`;
   waitForClick; clearText; marker; sound(`T3B212`); appendText; 
   //Sora
   Sora`"When you acquire 4-dimensional vision."`;
   waitForClick; clearText; marker; sound(`T3B213`); appendText; 
   //Sora
   Sora`"In other words, if you escape this 
3rd-dimensional space, and look 'down' at it 
from a 4th-dimensional space..."`;
   waitForClick; clearText; marker; sound(`T3B214`); appendText; 
   //Sora
   Sora`"You will realize for the first time that you 
were on one point of the 'Y'..."`;
   waitForClick; clearText; marker; sound(`T3B215`); appendText; 
   //Sora
   Sora`"...and realize too that there is another you 
who took a different branch of the 'Y'."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`T3B216`); appendText; 
   //Sora
   Sora`"In a different history, in a different 
world, in a different place..."`;
   waitForClick; clearText; marker; sound(`T3B217`); appendText; 
   //Sora
   Sora`"...another you exists. Do you understand 
this?"`;
   waitForClick; clearText; marker; sound(`T3B218`); appendText; 
   //Sora
   Sora`"You are omnipresent in the world."`;
   waitForClick; clearText; marker; sound(`T3B219`); appendText; 
   //Sora
   Sora`"And in the same way, so am I."`;
   waitForClick; clearText; marker; sound(`T3B220`); appendText; 
   //Sora
   Sora`"You and I..."`;
   waitForClick; clearText; marker; sound(`T3B221`); appendText; 
   //Sora
   Sora`"We are just branches of the 'Y'..."`;
   waitForClick; clearText; marker; sound(`T3B222`); appendText; 
   //Sora
   Sora`"However..."`;
   waitForClick; clearText; marker; sound(`T3B223`); appendText; 
   //Sora
   Sora`"These divided selves can become one..."`;
   waitForClick; clearText; 
});
hideTextbox();
varop(`(28 0a a0) ac := (00) 0`);
closeDimOverlay();
monoColorOverlay({ interval: 18, color: WHITE });
closeSnowFallingAnim();
bgload({ name: `BG02A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(61);
fadeOutMonoColorOverlay();
unSkippableDelay(48);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora stopped dividing herself.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The brightness faded and then was gone.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The single Sora quietly fluttered down to 
stand before me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The dolphins behind us had stopped their 
revolutions at some point.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B224`); appendText; 
   //Sora
   Sora`"If the self you don't know were to become 
inseparably bound with you?"`;
   waitForClick; clearText; marker; sound(`T3B225`); appendText; 
   //Sora
   Sora`"If you could stand in a place where you 
could see and understand all the others that 
were 'you'?"`;
   waitForClick; clearText; marker; sound(`T3B226`); appendText; 
   //Sora
   Sora`"Then all the experiences of your other selves 
would become like your own experiences."`;
   waitForClick; clearText; marker; sound(`T3B227`); appendText; 
   //Sora
   Sora`"In the truest sense, you would become one 
being with one experience."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I let out a long sigh.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Listen..."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Can I just ask you one thing?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B228`); appendText; 
   //Sora
   Sora`"Please do."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Why are you telling all this to me?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B229`); appendText; 
   //Sora
   Sora`"Hmm...that's a good question..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora turned in a full circle right where she 
was, and smiled.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B230`); appendText; 
   //Sora
   Sora`"It is a legend."`;
   waitForClick; clearText; marker; sound(`T3B231`); appendText; 
   //Sora
   Sora`"Of the origins of LeMU...it's the legend 
passed down through the Lemurian continent."`;
   waitForClick; clearText; marker; sound(`T3B232`); appendText; 
   //Sora
   Sora`"Let's just leave it at that."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T3B233`); appendText; 
   //Sora
   Sora`"...and you must understand, it's a secret."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora put a finger to her lips and smiled once 
again.`;
   waitForClick; clearText; 
});
let lbl_00000e81;
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
stopBGM();
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
delay({ interval: 120 });
varop(`(28 0a a4) b3 := (00) 0`);
jump(`T_3C`);
