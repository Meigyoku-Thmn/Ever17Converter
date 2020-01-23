l_b0 = 5;
l_dayA = 3;
l_dayB = 3;
setDialogBoxColor(GREEN);
playBGM({ num: 2, volume: 100 });
bgload({ name: `IMG01A`, transition: 20 });
setSceneTitle({ index: 17 });
showTextbox();
text(() => {
   `We were just killing time...`;
   `We still couldn't think of any way to escape.`;
   `Still, we didn't want to feel like we were 
completely wasting our time.`;
   `So we all decided to wander around LeMU one 
more time. `;
   `As we made the rounds, I said things like...`;
   `"Let's find something decent to eat - no more 
of those chicken sandwiches from the kiosk!"`;
   `And, "How many people can really ride on an 
EI that doesn't have enough buoyancy?"`;
   `I also made other ridiculous propositions. `;
   `Everyone was getting a little sick of me, but 
they still laughed along.`;
   `We all knew...`;
   `As long as we were doing something, it kept 
our minds off things we couldn't change...`;
   `Like about how there was no way out, or 
remembering where we were.`;

});
bgload({ name: `BG25A3`, transition: 20 });
clock(`18:51`);
showTextbox();
text(() => {
   `We decided to meet at 8 p.m. for dinner.`;
   `Everyone was left to wander around freely 
until then.`;
   `(Still an hour to go...)`;

});
bgload({ name: `BG08A1`, transition: 20 });
showTextbox();
text(() => {
   `As I walked around the second floor, still 
thinking about what to do, I found myself in 
front of the infirmary.  `;
   `I thought Tsugumi would still be sleeping in 
bed.`;
   `(Maybe I should check on her...?)`;
   `As I stood in front of the sliding door, it 
opened.`;

});
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   `I could smell the faint but harsh odor of 
disinfectant.`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU06ADM`, name2: `KA06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T3B000)`"Takeshi, what are you doing here?"`;
   `You greeted me with slight surprise as I 
entered the room.`;
   Takeshi`"Nothing really. I just thought I'd get some 
coffee to wake me up."`;
   Takeshi`"What about you two? 
What are you and the Kid up to?"`;
   `It looked like she was in the middle of 
spreading out tools and parts next to the 
'L-MRI' scanner.`;
   `The Kid was crouched down by the scanner as 
well, looking at what appeared to be pages of 
data.`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU01ADM`, name2: `KA01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T3B001)`"Well...you know, I thought I'd try to fix 
this machine after all."`;
   Takeshi`"Wow. And the Kid's helping?"`;
   Kid(T3B002)`"You got it."`;

});
fgload({ id: 1, name: `YU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T3B003)`"He's much more helpful than he looks. He's 
really quick at reading blueprints...."`;
   Takeshi`"Sometimes that happens, where the Kid'll be 
strangely good at something. I wonder why 
that is?"`;
   Kid(T3B004)`"That's what I'd like to know."`;
   Takeshi`"You have no idea?"`;

});
fgload({ id: 2, name: `KA03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid(T3B005)`"Nope...not a clue."`;
   Kid(T3B006)`"There might be some reason, but..."`;
   `The Kid hung his head, thinking.`;

});
fgload({ id: 1, name: `YU16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T3B007)`"Hey, hey, don't worry about it. No use 
wondering about it now."`;
   You(T3B008)`"It'll all make sense anyway when your memory 
comes back."`;

});
fgload({ id: 1, name: `YU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T3B009)`"Hey Kid, can you hand me that wrench?"`;

});
fgload({ id: 2, name: `KA11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid(T3B010)`"This one?"`;
   You(T3B011)`"Yeah, thanks. Here we go."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `You sat cross-legged on the floor and began to 
unscrew the cover of the scanner.  `;
   Takeshi`"Hey, I can see up your skirt when you sit 
like that."`;

});
fgload({ id: 1, name: `YU04ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T3B012)`"Cut that out! Quit looking, this isn't a 
peep show!"`;
   Takeshi`"Alright, alright, I was just joking..."`;
   `I raised both hands and backed away.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"But you know, while the Kid's head is clear, 
maybe we should tackle some of the trickier 
problems."  `;

});
multifgload2({ id1: 1, id2: 2, name1: `YU01ADM`, name2: `KA01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T3B013)`"Huh? Why?"`;
   Takeshi`"Because, what if he hit his head or 
something, and he's only going to be good at 
this stuff for a little bit?"`;
   Takeshi`"Maybe it jostled some brains cells into 
action that don't usually get used..."`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU16ADM`, name2: `KA13ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T3B014)`"Oh, please. This is not a comic book. Right, 
Kid?"`;
   Kid(T3B015)`"Listen, don't ask me..."`;

});
fgload({ id: 1, name: `YU17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T3B016)`"Hm? Oh...that's right."`;

});
fgload({ id: 2, name: `KA11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid(T3B017)`"So, what's a comic book again?"`;

});
fgload({ id: 1, name: `YU06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T3B018)`"What?! You've even forgotten comics?"`;

});
fgload({ id: 2, name: `KA01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid(T3B019)`"Well I have a vague sense that I've heard 
the word before..."`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU17ADM`, name2: `KA11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T3B020)`"Wow, to forget about comic books...you know, 
you're missing out on about 20 percent of 
life right there..."`;
   `The Kid and You continued their strange 
conversation...`;
   `...and I started to feel like there was no 
real reason for me to be there at all.`;
   Takeshi`"Well, hang in there."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `I turned my back to leave.`;

});
fgload({ id: 1, name: `YU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T3B021)`"Hey, Takeshi..."`;
   `You stood up abruptly and came to stand in 
front of me.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T3B022)`"You came to check on Tsugumi, right?"`;
   You(T3B023)`"She's sleeping in that bed over there."`;

});
fgload({ id: 1, name: `YU13ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T3B024)`"She isn't conscious yet, and of course she 
can't move her body...she really just needs 
to rest."`;
   `You was speaking slowly, her eyes cast down.`;
   `For some reason, her expression hardened. `;

});
fgload({ id: 1, name: `YU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T3B025)`"And - it's not that I'm so sure of myself, 
but...still, I've done my very best for her..."`;
   You(T3B026)`"I can't guarantee that she will, but I want 
her to get better...."`;
   You(T3B027)`"So we'll just..."`;
   Takeshi`"I know, You. And I'm really grateful for what 
you've done."`;
   `I looked her straight in the eyes.`;
   Takeshi`"If you hadn't done the surgery, Tsugumi 
wouldn't have made it."`;

});
fgload({ id: 1, name: `YU17ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T3B028)`"But we still don't know if she will really 
recover..."`;
   Takeshi`"You worry too much. What? Don't you trust 
yourself?"`;

});
fgload({ id: 1, name: `YU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T3B029)`"No."`;
   You(T3B030)`"I'm not a trained doctor or anything..."`;
   Takeshi`"I don't think that Tsugumi will give up so 
easily."`;
   Takeshi`"She'll pull through...I know it."`;
   Takeshi`"She'll be just like she was before in no 
time, and giving me a hard time as usual for 
sure."`;
   You`"........."`;

});
fgload({ id: 1, name: `YU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T3B031)`"I guess so. Actually, I'm starting to feel 
the same way."`;
   `She gave me a small smile.  `;
   Takeshi`"Well then, I guess I'm off to see that 
mean-spirited girl's face..."`;
   Takeshi`"So fix that scanner, okay?"`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T3B032)`"Just leave it to me!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `You plopped down again, and she and the Kid 
began grappling with the now-coverless scanner.`;
   `I went toward the bed in the back.`;

});
hideTextbox();
stopBGM();
bgload({ name: `EV_TU10A`, transition: 10 });
playBGM({ num: 19, volume: 100 });
showTextbox();
text(() => {
   `Tsugumi was stretched out peacefully.`;
   `It was probably due to the serious nature of 
the operation, but she was getting an IV.`;
   `At least she wasn't hooked up to a 
respirator. Then again, that could have been 
because the infirmary didn't have a 
respirator...`;
   `Thankfully, she didn't look like she was in 
pain. `;
   `She was sleeping so serenely,`;
   `I could almost believe that she would recover 
quickly.`;
   `I remembered how she dragged me behind her as 
she ran through the aquarium. How tough she 
was, so much stamina.`;
   `She lay under a white blanket.`;

});
showTextbox();
text(() => {
   `Her right foot was completely covered with a 
brace and bandages.`;
   `I couldn't tell what kind of condition it was 
in.`;
   `(Ah...)`;
   `I realized something as I neared the bed.`;
   `That smell of antiseptic that I had first 
recognized when I came into the room...`;
   `It was still strong and harsh around the bed.`;
   `I looked down at the floor, and it was as if 
the tiles were blurring, changing color.`;
   `(It's the color......of her blood...)`;
   `It was the raw, brutal traces of the surgery.`;
   `I gently squeezed Tsugumi's hand, which was 
peeping out from under the blanket.`;
   Takeshi`"I'm sorry."`;
   `It was my fault that this had happened to her.`;
   `If she doesn't make it......`;
   `It wasn't the kind of thing made better by an 
apology.`;
   `And even if she did recover...`;
   `What would I say to her face?`;
   `It would only be natural for her to hit me, 
or yell at me.`;
   Takeshi`"...so sorry."`;
   `All I could do was repeat it over and over to 
Tsugumi, who couldn't even answer.`;

});
hideTextbox();
stopBGM();
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   Sora(T3B033)`"Takeshi."`;
   `There was a voice behind me.`;
   `Letting go of Tsugumi's hand, I quickly 
whirled around.`;

});
hideTextbox();
playBGM({ num: 3, volume: 100 });
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Oh hey, Sora..."`;
   `Sora had suddenly appeared behind me.`;
   Sora(T3B034)`"It is unlikely that Tsugumi will wake up for 
a while."`;
   Sora(T3B035)`"The anesthetic is still in effect...it is 
probably best to leave her alone right now."`;
   Takeshi`"Yeah, I suppose you're right..."`;
   Sora(T3B036)`"So, Takeshi, are you free right now?"`;
   Takeshi`"Who, me?"`;
   Sora(T3B037)`"Yes. If it is all right, I would like to 
talk to you."`;
   Takeshi`"Talk about what?"`;
   Sora(T3B038)`"Well, you see..."`;

});
fgload({ id: 1, name: `SO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3B039)`"It's um, um, a secret." `;
   `She laughed a little.`;
   `(Sora wants to keep something secret?)`;
   `I was a little shocked..`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3B040)`"This room is...well, why don't we go outside?"`;

});
choice(
   `Don't go`,
   `Go`,
);
switch (l_choice) {
   case 0: goto(lbl_00000434);
   case 1: goto(lbl_0000061e);
}
let lbl_00000434;
l_tsugumi_point += 1;
showTextbox();
text(() => {
   Takeshi`"Actually, I want to stay here a little bit 
longer, if you don't mind."`;
   Takeshi`"It isn't often that you get to see Tsugumi 
being so still and docile."`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3B041)`"Really..."`;
   Takeshi`"Yeah. Can't you talk to me here? Now 
you've got me wondering what the big secret 
is."  `;
   Sora(T3B042)`"Takeshi..."`;
   Sora(T3B043)`"I can't talk to you here because it's 
confidential."`;
   Takeshi`"Oh, right. That makes sense...let's see."`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3B044)`"...Never mind, it's not a big deal. We can 
discuss it later."`;
   Takeshi`"Ah."`;
   Sora(T3B045)`"If you'll excuse me, then."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Sora left, smiling.`;

});
bgload({ name: `EV_TU10A`, transition: 20 });
showTextbox();
text(() => {
   `I turned my attention again to Tsugumi's 
sleeping face.`;
   `She didn't say anything.`;
   `Of course, it was normal for Tsugumi not to 
talk about herself...`;
   `But now she wasn't saying anything at all.`;
   `...I wanted to hear something.`;
   `As soon as possible.`;
   `Anything, I didn't care, I just wanted to hear 
Tsugumi's voice again.`;
   `I began to believe that I could bear even her 
harshest, most cutting words.`;

});
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   `(What?)`;
   `I turned my head, sure I had been mistaken.`;
   `The lift to the decompression chamber was 
moving on its own...`;
   `Sure enough, it was moving.`;
   `I ran over and peered into the square hole 
where the lift was.`;
   `The lift had gone down, then stopped.`;
   `(That's strange...)`;
   `I pushed the button to call the lift, and 
jumped in.`;
   `I would go down to the decompression chamber.`;

});
bgload({ name: `BG10A1`, transition: 20 });
showTextbox();
text(() => {
   `No one was in the room.`;
   `Was the lift malfunctioning?`;
   `I reached out my hand to push the button to 
take me back up.`;
   `In that second, something crossed my line of 
vision.`;
   `The sound of tiny footsteps was growing 
fainter...`;
   `Very tiny.`;
   `I could tell that they were running through 
the emergency corridor.`;

});
bgload({ name: `BG28A3R`, transition: 20 });
showTextbox();
text(() => {
   `I turned into the corridor and followed the 
sound.`;
   `I didn't think they were human footsteps.`;
   `(Maybe it's Pipi?)`;
   `But if Pipi had separated from Coco, he surely 
wouldn't be in a place like this.`;
   `I sensed that the owner of the footsteps was 
something smaller.`;
   `It seemed to be running with quite some 
momentum.`;
   `Sometimes even crashing into walls.`;
   `It was in a desperate hurry.`;
   `(In any case, it's an animal of some kind.)`;
   `(But...what is it?)`;
   `It bothered me that it had run out of the 
infirmary.`;

});
bgload({ name: `BG27A1`, transition: 20 });
showTextbox();
text(() => {
   `The footsteps turned off the corridor and 
straight into a dead end.`;
   `I had followed right up until that point...but 
somehow I lost it.`;
   `Maybe it fell down the stairs along the 
corridor, or climbed into a duct and jumped 
down a floor.`;
   `(That clever little...)`;
   `Maybe it was...a rat?`;
   `...Could be. It wouldn't be so strange for 
LeMU to have rats.`;
   `In which case—`;
   Takeshi`"This is stupid."`;
   Takeshi`"What the hell am I doing, chasing after a 
rat?"`;
   `Scratching my head, I retraced my steps.`;

});
removeBG({ mode: BLACK, transition: 2 });
stopBGM();
bgload({ name: `BG10A1`, transition: 20 });
showTextbox();
text(() => {
   `Before I got back in the lift, I glanced back 
into the decompression chamber and noticed 
for the first time that the bed was looking 
dirty.`;
   Takeshi`"Hey, who ate their dinner here...?"`;
   `There were small breadcrumbs on the bed.`;

});
hideTextbox();
playBGM({ num: 2, volume: 100 });
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   Takeshi`"Hey, You!"`;

});
multifgload2({ id1: 1, id2: 4, name1: `YU01ADS`, name2: `KA01ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   You(T3B046)`"Yeah?"`;
   `I got out of the lift and stomped over to 
where You and the Kid were still in the 
middle of their repair efforts.`;

});
multiremoveFG({ id1: 1, id2: 4, id3: 0, useAnim: true });
multifgload2({ id1: 1, id2: 4, name1: `YU01ADM`, name2: `KA01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Who was eating bread in the decompression 
chamber?"`;

});
multifgload2({ id1: 1, id2: 4, name1: `YU07ADM`, name2: `KA07ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(T3B047)`"Huh? What are you talking about?"`;
   `You frowned and turned the hand holding the 
screwdriver toward me.  `;
   You(T3B048)`"How would I know?"`;
   Kid(T3B049)`"I don't know either."`;
   `The Kid had insulation tape wrapped around his 
fingers.`;

});
fgload({ id: 1, name: `YU05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T3B050)`"Takeshi, you sure it wasn't you?"`;
   Takeshi`"Why would it be me, if I'm the one asking 
about it..."`;
   Takeshi`"I mean, it doesn't really matter who it was, 
but don't you think we'd better be a little 
more careful?"`;

});
fgload({ id: 4, name: `KA01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid(T3B051)`"Careful of what?"`;
   Takeshi`"I think there was a rat in here just now."`;
   Takeshi`"If we leave food laying around, it might get 
eaten."`;

});
fgload({ id: 1, name: `YU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T3B052)`"Oh...in that case I guess we should be more 
careful."`;
   You(T3B053)`"We've got plenty of food in the kiosk, for 
now, but it would be awful if it was broken 
into."`;
   Kid(T3B054)`"Do you think we should try to catch it?"`;
   Takeshi`"I don't think we need to go that far."`;

});
fgload({ id: 1, name: `YU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(T3B055)`"Hey Kid, you don't happen to know how to 
make a rat trap do you?"`;

});
fgload({ id: 4, name: `KA11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid(T3B056)`"Who knows...?"`;

});
fgload({ id: 4, name: `KA12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid(T3B057)`"I don't really know if I know how or not."`;
   `The Kid laughed and shrugged his shoulders 
exaggeratedly.`;

});
goto(lbl_00000e81);
let lbl_0000061e;
l_sora_point += 1;
l_went_outside_as_sora_suggests_in_3rd_day = 1;
showTextbox();
text(() => {
   Takeshi`"Okay, where are you going?"`;
   Sora(T3B058)`"To the dolphins..."`;
   Sora(T3B059)`"To the Dolphin Carousel. I like that place."`;
   Takeshi`"All right. Let's go."`;

});
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG08A1`, transition: 20 });
bgload({ name: `BG25A3`, transition: 20 });
showTextbox();
text(() => {
   `As we left the infirmary, You and the Kid were 
looking at me with curious expressions on 
their faces.`;
   Takeshi`"What's up with them, looking like they were 
just bit on the butt by something?"`;

});
fgload({ id: 1, name: `SO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3B060)`"Hee hee..."`;
   `Sora answered me with an amused laugh.`;
   Sora(T3B061)`"They thought that you were talking to 
yourself."`;
   Takeshi`"Huh, okay..."`;
   Takeshi`"No wait, why? I was talking with you?"`;
   Sora(T3B062)`"Didn't I say that I wanted to talk to you 
about something secret?"`;
   Takeshi`"Huh?"`;
   Takeshi`"...Oh, now I get it..." `;
   `Apparently You and the Kid couldn't see Sora.`;

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
   `We reached the Dolphin Carousel.`;
   `The circling dolphins stood still in the 
silence.`;

});
hideTextbox();
playBGM({ num: 19, volume: 100 });
fgload({ id: 1, name: `SO11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3B063)`"It's so quiet..."`;
   Sora(T3B064)`"Sometimes it seems that the everyday hubbub 
is all an empty lie..."`;
   `Sora spoke quietly.`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3B065)`"I apologize, that was inappropriate. It 
doesn't fit the moment."`;
   Takeshi`"No, I don't mind. If I had known about this 
place days before..."`;
   Takeshi`"...yeah, and if I'd seen it back in the days 
when it was full of people, I'd probably be 
thinking the same thing."`;
   Takeshi`"Sora, how long have you been here at LeMU?"`;

});
fgload({ id: 1, name: `SO11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3B066)`"I started working at a functional level in 
April of 2011."`;
   Sora(T3B067)`"So, since then."`;
   Takeshi`"Six years, huh..."`;
   Sora(T3B068)`"Yes, that is correct."`;
   Sora(T3B069)`"2223 days..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Sora narrowed her eyes.`;
   `She was nearly overcome by some feeling.`;
   `Could it be nostalgia?`;
   `It didn't seem like a programmed emotion.`;
   `She must treasure memories of this place.`;
   `We gazed at the figures of the silent 
dolphins for a while.`;
   Takeshi`"So listen, Sora."`;
   `I broke in, hoping it was the right moment.`;

});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3B070)`"Yes? What is it?"`;
   Takeshi`"You said you had to talk to me about a 
secret."`;
   Takeshi`"Are you ready to tell me about it?"`;
   Sora(T3B071)`"Ah yes, that's right."`;

});
hideTextbox();
stopBGM();
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `She straightened, and turned to face me.`;

});
hideTextbox();
playBGM({ num: 8, volume: 100 });
fgload({ id: 1, name: `SO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Then suddenly her face shone as she said,`;
   Sora(T3B072)`"Takeshi, shall we play tag?"`;
   Takeshi`"Uh..."`;
   Takeshi`"What...?"`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3B073)`"Kick-the-can was so much fun yesterday!"`;
   Sora(T3B074)`"So, won't you play tag with me?"`;
   Takeshi`"Tag!?"`;
   `I couldn't quite grasp the connection.`;

});
fgload({ id: 1, name: `SO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3B075)`"Come on, Takeshi, you have to -"`;
   Sora(T3B076)`"Try and catch me!"`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `She casually floated up off the ground, and 
moved off as if she were gliding.`;
   Takeshi`"Hey, wait a minute, Sora..."`;

});
removeFG({ id: 1, useAnim: true });
bgload({ name: `EV_SO09K`, transition: 10 });
showTextbox();
text(() => {
   Sora(T3B077)`"Come on, this way!"`;
   Takeshi`"Where did you go?!"`;
   `I immediately looked around for her.`;

});
bgload({ name: `EV_SO09A`, transition: 20 });
showTextbox();
text(() => {
   Sora(T3B078)`"Right here!"`;

});
bgload({ name: `EV_SO09B`, transition: 20 });
showTextbox();
text(() => {
   Sora(T3B079)`"Over here!"`;

});
bgload({ name: `EV_SO09C`, transition: 20 });
showTextbox();
text(() => {
   Sora(T3B080)`"Where are you looking?"`;

});
bgload({ name: `EV_SO09K`, transition: 20 });
showTextbox();
text(() => {
   `She would flicker into view here and there 
and then disappear again.`;
   Takeshi`"Hey! You!"`;

});
bgload({ name: `EV_SO09D`, transition: 20 });
showTextbox();
text(() => {
   Sora(T3B081)`"This way, this way!"`;

});
bgload({ name: `EV_SO09E`, transition: 20 });
showTextbox();
text(() => {
   Sora(T3B082)`"What's the matter?"`;

});
bgload({ name: `EV_SO09F`, transition: 20 });
showTextbox();
text(() => {
   Sora(T3B083)`"I'm right here!"`;

});
bgload({ name: `EV_SO09K`, transition: 20 });
showTextbox();
text(() => {
   `Laughing, she would show herself in one 
place, and then disappear. `;
   Takeshi`"Oh, come on! What IS this!?"`;
   Takeshi`"You know as well as I do -"`;
   Takeshi`"There's no way I can catch you..."`;
   Takeshi`"No matter what I do, I can't grab hold of 
you!"`;

});
bgload({ name: `EV_SO09G`, transition: 20 });
showTextbox();
text(() => {
   //Sora-A
   Sora_A(T3B084)`"What?! Really?"`;
   //Sora-B
   Sora_B(T3B085)`"No, surely not...!"`;
   //Sora-C
   Sora_C(T3B086)`"I see...hee hee, I didn't realize that."`;
   `She was playing dumb.`;
   `Sora had split into three images...`;
   Takeshi`"What the heck..."`;
   Takeshi`"What's happened to you, Sora?"`;

});
bgload({ name: `EV_SO09H`, transition: 20 });
showTextbox();
text(() => {
   //Sora-A
   Sora_A(T3B087)`"Hm, what could it be?"`;
   `She shrugged exaggeratedly.`;
   `All three leaned toward me at the same time...`;
   //Sora-B
   Sora_B(T3B088)`"Do you think I am strange?"`;
   //Sora-C
   Sora_C(T3B089)`"Is there something wrong with me?"`;
   Takeshi`"I'm the one that should be asking that 
question!"`;
   Takeshi`"What the heck is going on here!?"`;

});
bgload({ name: `EV_SO09I`, transition: 20 });
showTextbox();
text(() => {
   //Sora-B
   Sora_B(T3B090)`"Hee hee!"`;
   //Sora-A
   Sora_A(T3B091)`"I don't even know myself anymore what's going 
on..."`;
   //Sora-C
   Sora_C(T3B092)`"I feel all happy and fluffy..."`;
   `She was floating around like someone who was 
slightly drunk.`;
   `I started to worry.`;
   Takeshi`"S-Sora! Are you okay?"`;
   Takeshi`"You're sure you're not sick? Or tired?"`;
   Takeshi`"Nothing bad's happened, has it?"`;
   Takeshi`"Maybe we should get LeMMIH to check you 
out...to make sure there's not some serious 
error..."`;
   Sora(T3B093)`"Why, Takeshi!"`;
   `She pursed her mouth and took a huge sigh.`;

});
bgload({ name: `BG02A1`, transition: 20 });
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Then suddenly she appeared right in front of 
me, in a slightly troubled pose.`;
   `She didn't move, and there was only one of her.`;
   Sora(T3B094)`"All right."`;
   Sora(T3B095)`"I will stop playing around with you."`;
   Takeshi`"Playing around...?"`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3B096)`"Yes."`;
   Sora(T3B097)`"That was just a little joke..."`;
   Takeshi`"......"`;
   Sora(T3B098)`"Now for the reason I brought you here."`;
   `I shook my head, putting my fingers against my 
temples.`;

});
fgload({ id: 1, name: `SO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Seeing that, Sora smiled at me.`;
   `Without making any noise at all, the dolphins 
began quietly circling again.`;

});
hideTextbox();
stopBGM();
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I leaned against a handy artificial rock with 
a mascot pasted to it.`;
   `Sora stood at attention once again, and began 
speaking slowly.`;

});
hideTextbox();
playBGM({ num: 14, volume: 100 });
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3B099)`"This is the continuation of our conversation 
yesterday."`;
   Sora(T3B100)`"The reason that there is only one being like 
me in the world..."`;
   Sora(T3B101)`"I think I told you that it was the policy of 
my creator."`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3B102)`"In order to give me a unified, individual 
personality, there are restrictions on my 
faculties."`;
   Sora(T3B103)`"However, according to theory, several of me 
can exist at the same time."`;
   Sora(T3B104)`"Just like I showed you before."`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3B105)`"...Shall I show you again?"`;
   Takeshi`"No thanks. I'm still recovering..."`;

});
fgload({ id: 1, name: `SO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3B106)`"Hee hee...all right, I won't do it anymore."`;
   `She stopped there.`;
   `She seemed to be thinking about something, 
then took a deep breath and continued.`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3B107)`"Just now..."`;
   Sora(T3B108)`"Could you tell which one was me?"`;
   Takeshi`"Huh?"`;
   Sora(T3B109)`"Which one was me?"`;
   Takeshi`"Well, which...uh..."`;
   Takeshi`"So...the several versions of you...they're 
all different?"`;
   Sora(T3B110)`"No."`;
   Takeshi`"Well then, they're all the same."`;
   Takeshi`"They're all the same Sora."`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3B111)`"Correct."`;
   `She smiled.`;

});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3B112)`"Yes, they're all me..."`;
   Sora(T3B113)`"Perfect copies...no, perhaps it is easier to 
understand if I use the word 'clones.'"`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3B114)`"Takeshi, are you aware of the "Clone Law" 
that was officially amended in 2010?"`;

});
choice(
   `Yes`,
   `No`,
);
switch (l_choice) {
   case 0: goto(lbl_00000a13);
   case 1: goto(lbl_00000a1c);
}
let lbl_00000a13;
showTextbox();
text(() => {
   Takeshi`"Yes, I know of it. In 2010 -"`;
   Takeshi`"Human cloning, which had been prohibited 
until then, was recognized under law."`;
   Takeshi`"Once they had the approval of the 
authorities, anyone could undergo clone 
fertilization as a way to treat infertility."`;
   Takeshi`"The nucleus is taken from an already-
cultivated somatic cell, and inserted it 
into an egg that has had its original 
nucleus removed."`;
   Takeshi`"Then it is implanted into 
the mother's womb..."`;
   Takeshi`"One of my friend's relatives went through it."`;
   Sora(T3B115)`"Well then, you don't need an explanation 
about cloning."`;

});
goto(lbl_00000a21);
let lbl_00000a1c;
showTextbox();
text(() => {
   Takeshi`"No, I don't know. I mean...I forget."`;
   Sora(T3B116)`"In 2010?"`;
   Sora(T3B117)`"Human cloning, which had been illegal up 
until then, was allowed by law."`;
   Sora(T3B118)`"Currently, as long as anyone receives the 
approval of the authorities, cloning may be 
used as a method to treat infertility."`;
   Sora(T3B901)`"They take the nucleus from an 
already-cultivated somatic cell, and then 
insert it into an egg that has had its 
original nucleus removed. `;
   Sora(T3B9019012)`Then they implant 
it into the mother's womb..."`;
   Takeshi`"Oh, that's right, I remember now!"`;
   Takeshi`"One of my friend's relatives went through it."`;
   Sora(T3B120)`"Do you understand?"`;

});
let lbl_00000a21;
showTextbox();
text(() => {
   Takeshi`"Uh...uhm...well..."`;
   Takeshi`"But what does that have to do with this?"`;
   Takeshi`"Clones develop separately. In other words 
they are different entities."`;
   Takeshi`"They're not the same person. They're more 
like twins..."`;
   Sora(T3B121)`"But, their source is the same."`;
   `She spoke almost casually.`;
   Sora(T3B122)`"Let's go back to what we were talking 
about..."`;

});
removeFG({ id: 1, useAnim: true });
bgload({ name: `EV_SO09K`, transition: 20 });
bgload({ name: `EV_SO09J`, transition: 10 });
showTextbox();
text(() => {
   `Then she branched into her several selves 
again.`;
   `And she'd said she wouldn't do it anymore...`;
   `Sure enough, I was dizzy.`;
   Sora(T3B123)`"This 'Me', evenly divided..."`;
   Sora(T3B124)`"...are all Sora Akanegasaki."`;
   Sora(T3B125)`"That 'me' is over there, and at the same 
time this 'me' is not there."`;
   Sora(T3B126)`"I am here, but the 'me' over there is a 
different 'me.'"`;
   Sora(T3B127)`"But they are all me, the same, 'Me'..."`;
   Sora(T3B128)`"All me."`;
   Sora(T3B129)`"Which means..."`;
   Sora(T3B130)`"I am one, yet at the same time I am many."`;
   Sora(T3B131)`"I can be in any place, exist everywhere."`;
   Sora(T3B132)`"I am—omnipresent."`;
   Sora(T3B133)`"Yes, that's right."`;
   Sora(T3B134)`"There can be several of me existing in the 
same space, at the same time."`;
   Sora(T3B135)`"For example, in front of you and in front of 
Coco."`;
   Sora(T3B136)`"There and here, there are two of me."`;
   Sora(T3B137)`"But they are definitely not 'W'..."`;
   Sora(T3B138)`"but 'Y'."`;
   Takeshi`" 'Y' ? "`;
   Sora(T3B139)`"'Y' because we split from our source 
branching off."`;
   `Sora danced around in midair.`;
   `Her other images multiplied and disappeared.`;
   `It was impossible even to tell their size, 
amount, or distance.`;
   Sora(T3B140)`"You see...please think of it this way."`;
   Sora(T3B141)`"What if you could be copied exactly, just 
the way you are?"`;
   Takeshi`"??"`;
   `"...What is she saying...?"`;
   Sora(T3B142)`"For instance..."`;
   Sora(T3B143)`"For instance, what if every recollection, 
thought, feeling, character trait, 
personality, and emotion that is etched into 
your mind..."`;
   Sora(T3B144)`"In other words, your whole intelligence, 
could be perfectly, exactly extracted..."`;
   Sora(T3B145)`"...and then duplicated in some kind of 
storage medium, even reproducing all your 
abilities..." `;
   Sora(T3B146)`"Then, where is the real you?"`;
   Sora(T3B147)`"The you who stays in your body, is that the 
real you?"`;
   Sora(T3B148)`"Or is the duplicate character in fact you?"`;
   Takeshi`"........."`;
   Sora(T3B149)`"The answer is, in any case, 
the real you does exist in both."`;
   Sora(T3B150)`"If such a thing were possible..."`;
   Sora(T3B151)`"You would split in a form of non-meiotic 
division."`;
   Sora(T3B152)`"In other words, it is not the same as 
splitting an apple into two..."`;
   Sora(T3B153)`"It is as if another apple with the exact 
mass, shape, and composition comes into being."`;
   Sora(T3B154)`"When that happens, you become two."`;

});
bgload({ name: `BG02A1`, transition: 20 });
multifgload2({ id1: 1, id2: 2, name1: `SO01ADM`, name2: `SO01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   `Sora got rid of all but one extra body, and 
stood in front of me.`;
   `Now, there were two copies of Sora before me.`;
   `There was no way to tell which was the 
original...`;

});
choice(
   `Hear more`,
   `Struggle`,
);
switch (l_choice) {
   case 0: goto(lbl_00000aa4);
   case 1: goto(lbl_00000ab8);
}
let lbl_00000aa4;
l_sora_point += 1;
showTextbox();
text(() => {
   `(But why is Sora telling me all this...?)`;
   `I wondered, but kept quiet and listened.`;

});
goto(lbl_00000b4d);
let lbl_00000ab8;
showTextbox();
text(() => {
   Takeshi`"........."`;
   Takeshi`"...I -"`;
   Takeshi`"I don't get it."`;
   `I wanted to scratch my head.`;
   `No, I actually did scratch my head.`;
   Takeshi`"There's two of me!?"`;
   Takeshi`"What are you saying?"`;
   Takeshi`"Who am I?"`;
   Takeshi`"Who am I!?"`;
   Takeshi`"Is there another me!?"`;
   Takeshi`"If you're out there, answer me!!"`;
   `I wanted to rage, to hit something.`;
   `I had to grind my teeth together to keep 
myself still.`;

});
multifgload2({ id1: 1, id2: 2, name1: `SO03ADM`, name2: `SO03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T3B155)`"Calm down, Takeshi...."`;
   Sora(T3B156)`"Listen to me...."`;
   `She arched her eyebrow.`;
   Sora(T3B157)`"I'm saying, what if..."`;

});
multifgload2({ id1: 1, id2: 2, name1: `SO10ADM`, name2: `SO10ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T3B158)`"If there were such a thing as true cloning, 
not just cellular cloning."`;
   Sora(T3B159)`"If there were a copy that could exist in the 
world with absolutely no difference from the 
original."`;
   Sora(T3B160)`"I am simply speaking hypothetically..."`;

});
multifgload2({ id1: 1, id2: 2, name1: `SO03ADM`, name2: `SO03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T3B161)`"Please, just listen to me..."`;
   Takeshi`"Alright, alright!"`;
   Takeshi`"Alright. I'll listen."`;
   `I took the voice adapter out for a moment, 
rubbed my ear, and put it back.`;
   `Then I took a deep breath.`;
   Takeshi`"Haaaaaaaa, Hoooooo......"`;
   Takeshi`"All right, bring it on!"`;
   Sora`"........."`;

});
multifgload2({ id1: 1, id2: 2, name1: `SO01ADM`, name2: `SO01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T3B162)`"Very well, I will continue."`;

});
let lbl_00000b4d;
showTextbox();
text(() => {
   Sora(T3B163)`"Yes...you became two."`;
   `The two Soras were speaking in unison.`;

});
multifgload2({ id1: 1, id2: 2, name1: `SO10ADM`, name2: `SO10ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T3B164)`"Historically, and from that moment forward, 
the two of you are traveling down the time 
axis as separate entities."`;
   Sora(T3B165)`"But, if you turn around and look at the 
journey you have taken, you will see that at 
one point the two of you were joined together."`;

});
showTextbox();
text(() => {
   Sora(T3B166)`"It is split like a 'Y,' with two points 
emerging from one line. Not a 'W,' with two 
separate points of origin."`;

});
showTextbox();
text(() => {
   Sora(T3B167)`"You may be unable to imagine two of yourself, 
splitting apart and going different ways at a 
particular moment which we will use as a 
reference point."`;
   Sora(T3B168)`"But that is something that has already 
happened."`;

});
multifgload2({ id1: 1, id2: 2, name1: `SO01ADM`, name2: `SO01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T3B169)`"You are always, incessantly, approaching a 
choice in each present moment that becomes 
the past the instant you visit it." `;
   Sora(T3B170)`"Will you choose path A? Will you choose 
path B?"`;
   Sora(T3B171)`"The you that is standing here may have come 
down path A, but in another time axis, there 
may be a you who is going down path B."`;
   Sora(T3B172)`"And both the you on path A and the you on 
path B are both still you."`;

});
multifgload2({ id1: 1, id2: 2, name1: `SO03ADM`, name2: `SO03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T3B173)`"Except that, the 'you' on path A doesn't know 
about the 'you' on path B."`;
   Sora(T3B174)`"Because there is no way to know."`;
   Sora(T3B175)`"In the same way, the 'you' on path B 
probably isn't aware of the 'you' on path A, 
either."`;

});
multifgload2({ id1: 1, id2: 2, name1: `SO09ADM`, name2: `SO09ADM`, x1: 128, x2: 512, useAnim: true });
if (l_choice == 0) goto(lbl_00000c05);
showTextbox();
text(() => {
   Sora(T3B176)`"Do you know why that is?"`;

});
goto(lbl_00000c2d);
let lbl_00000c05;
showTextbox();
text(() => {
   Sora(T3B176)`"Do you?"`;

});
choice(
   `I don't know`,
   `I do know`,
);
switch (l_choice) {
   case 0: goto(lbl_00000c2d);
   case 1: goto(lbl_00000cf0);
}
let lbl_00000c2d;
showTextbox();
text(() => {
   Takeshi`"I don't know..."`;
   `I answered honestly.`;
   Sora(T3B177)`"It is because you only have the ability to 
perceive three dimensions."`;
   Sora(T3B178)`"Takeshi, do I look corporeal to you?"`;
   Takeshi`"Of course."`;
   Sora(T3B179)`"In that case, please take out just one of the 
earphones of your voice adaptor, and come 
around here to my side."`;
   `I carefully removed an earphone, and did as 
she said.`;
   Takeshi`"......!!??"`;
   Takeshi`"Hey, Sora, you..."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `Naturally, Sora had become invisible.`;
   Takeshi`"Where did you go?"`;
   Sora(T3B180)`"I am here."`;
   Takeshi`"I can't see you..."`;
   Sora(T3B181)`"I haven't moved. And I haven't made myself 
invisible."`;
   Sora(T3B182)`"Will you please return to where you were?"`;
   Takeshi`"Ah, yeah...."`;
   `Hesitantly, I moved back toward where I had 
been standing.`;

});
makeFGTransparent({ id: 1 });
makeFGTransparent({ id: 2 });
multifgload2({ id1: 1, id2: 2, name1: `SO01ADM`, name2: `SO01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   `Sora's body...`;
   `It was like watching something flutter into 
an empty space. She slowly came into my line 
of vision...`;
   `I went back to where I was.`;
   `I put the voice adaptor back in my ear.`;

});
makeFGNormal({ id: 1 });
makeFGNormal({ id: 2 });
multifgload2({ id1: 1, id2: 2, name1: `SO01ADM`, name2: `SO01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   `Sora was standing on both sides of my line of 
vision as if nothing had happened at all.`;
   Sora(T3B183)`"Now, please close your right eye."`;
   Takeshi`"Like this?"`;
   `I closed my right eye.`;

});
removeFG({ id: 2, useAnim: true });
showTextbox();
text(() => {
   `The Sora standing on the right side vanished.`;
   `Only the Sora standing on the left side was 
still there.`;
   Sora(T3B184)`"Next, open your right eye, and close your 
left."`;
   `I opened my right eye, and closed my left...`;

});
fgload({ id: 2, name: `SO01ADM`, x: 512, useAnim: true });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `This time the Sora on the left vanished, and 
the Sora on the right sprang into view.`;
   Sora(T3B185)`"Now, open both your eyes."`;
   Takeshi`"........."`;

});
fgload({ id: 1, name: `SO01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   `Just like before, two Soras stood at either 
edge of my vision.`;
   Sora(T3B186)`"To 'see' a 3-dimensional figure..."`;
   Sora(T3B187)`"You take 2-dimensional information acquired 
from both of your eyes, and your brain 
analyzes and processes it accordingly to gain 
the correct depth."`;
   Sora(T3B188)`"So, to see a 3-dimensional space from the 
outside, and be able to recognize it...?"`;
   Takeshi`"...I don't get it. I don't get it, but..."`;
   Takeshi`"Somehow I think DO get it."`;

});
goto(lbl_00000d38);
let lbl_00000cf0;
showTextbox();
text(() => {
   Takeshi`"It's obvious."`;
   `I answered.`;
   Takeshi`"You just stated that 'there is no way to 
know.'"`;
   Takeshi`"There is no means in existence to let my 'A' 
self see my 'B' self."`;
   Takeshi`"For a person to see a 3-dimensional body, 
they have to receive flattened visual 
information from two eyes, and the brain has 
to make sense of it."`;
   Takeshi`"In the same way..."`;
   Takeshi`"To know that both 'A' and 'B' of yourself 
exist, you'd have to move to a perspective 
completely outside the 'Y'."`;
   Takeshi`"Even if you understand it intellectually, you 
can't actually confirm that 'A' and 'B' both 
exist."`;
   Sora(T3B189)`"That's right."`;

});
multifgload2({ id1: 1, id2: 2, name1: `SO02ADM`, name2: `SO02ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T3B190)`"Wonderful...Takeshi, you might be a natural 
at this."`;
   Takeshi`"At what?"`;
   Sora(T3B191)`"At physics...or perhaps even philosophy."`;
   Takeshi`"You don't have to flatter me."`;

});
multifgload2({ id1: 1, id2: 2, name1: `SO01ADM`, name2: `SO01ADM`, x1: 128, x2: 512, useAnim: true });
let lbl_00000d38;
showTextbox();
text(() => {
   `Sora held her hand up in the air.`;
   `I could see a holograph...`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
bgload({ name: `IT01D`, transition: 0 });
showTextbox();
text(() => {
   `A board appeared in midair and neatly folded 
itself into a square.`;
   `Then a point of light appeared, and started 
moving.`;
   Sora(T3B192)`"Let's say that there are intelligent beings 
in a 2-dimensional world."`;
   Sora(T3B193)`"Can they see a 3-dimensional object?"`;

});
bgload({ name: `IT01E`, transition: 0 });
showTextbox();
text(() => {
   Sora(T3B194)`"No, they cannot."`;
   `The square changed into a cube.`;
   Sora(T3B195)`"The reason is, since they only exist in two 
dimensions, they can only perceive those 
things which happen on a plane."`;
   Sora(T3B196)`"In a 2-dimensional field of vision, only 
straight lines (one dimension) can be 
reflected."`;
   `The dots of light were now on all six faces 
of the cube.`;
   `But each light only moved around the surface 
of its own square, never intersecting with 
the other lights.`;

});
bgload({ name: `IT01F`, transition: 0 });
showTextbox();
text(() => {
   Sora(T3B197)`"Now then, let's say that for some reason they 
become 3-dimensional."`;
   Sora(T3B198)`"Then, in their 3-dimensional range of 
vision, only planes - two dimensions - can be 
reflected."`;

});
showTextbox();
text(() => {
   `The lights from the six surfaces gathered 
together to become one and moved to the 
center of the cube.`;

});
bgload({ name: `IT01G`, transition: 0 });
showTextbox();
text(() => {
   `And in every direction, new holograms of cubes 
appeared.`;
   `The cubes lined up surface to surface, 
without even a crevice between them.`;
   Sora(T3B199)`"With 3-dimensional sight, all that happens 
is that the plane reflected in the right eye 
and the plane reflected in the left eye are 
synthesized into one image."`;
   Sora(T3B200)`"It would be impossible to achieve something 
close to the real image of Mount Fuji, for 
example, even with a finely-drawn backdrop."`;
   `A light floated in each of the cubes.`;
   `These lights moved incessantly, vigorously 
colliding into the six faces of the cubes and 
moving.`;
   `But each light never left its cube, and never 
intersected with any of the other lights.`;
   Sora(T3B201)`"Shall we go over it again?"`;
   Sora(T3B202)`"By combining 2-dimensional information 
coming in at the same time from two different 
sources, you are really just hallucinating 
that you are perceiving a solid form."`;
   Sora(T3B203)`"That is not true 3-dimensional vision."`;
   Sora(T3B204)`"3-dimensional vision is when you can see all 
six sides of a cube, at the same time."`;
   Sora(T3B205)`"In an 'n' dimension, you can only obtain 
visual information in the dimension of 'n-1'."`;
   Sora(T3B206)`"This is why if you are on one tip of the 'Y' 
shape, it means that you cannot be aware of 
what is happening at the other tip."`;
   Sora(T3B207)`"Let's say that you did obtain a 3-dimensional 
range of vision..."`;
   Sora(T3B208)`"So if you escaped the plane of 
2-dimensionality, and when you looked 'down' 
from a 3-dimensional space at the 
2-dimensional plane?"`;
   Sora(T3B209)`"You would realize for the first time that 
you were at a particular point on the 'Y'..."`;
   Sora(T3B210)`"...and realize too that there could be 
another you that took a different path on the 
'Y'."`;
   Takeshi`"........."`;

});
removeBG({ mode: BLACK, transition: 0 });
showTextbox();
text(() => {
   `The holographic cubes broke apart, and then 
disappeared.`;

});
removeBG({ mode: WHITE, transition: 2 });
openSnowFallingAnim();
showTextbox();
text(() => {
   `Suddenly my field of vision was filled with a 
dazzling white light.`;
   `Sora looked distorted.`;
   `Then she split into countless versions of 
herself.`;
   `I couldn't see anything but Soras.`;

});
showDimOverlay();
showTextbox();
text(() => {
   `I couldn't stand to hold my eyes open.`;
   `Which one was she?`;
   `Was she all of them?...`;
   Sora(T3B211)`"You see, it's the same for a 3-dimensional 
space..."`;
   Sora(T3B212)`"When you acquire 4-dimensional vision."`;
   Sora(T3B213)`"In other words, if you escape this 
3rd-dimensional space, and look 'down' at it 
from a 4th-dimensional space..."`;
   Sora(T3B214)`"You will realize for the first time that you 
were on one point of the 'Y'..."`;
   Sora(T3B215)`"...and realize too that there is another you 
who took a different branch of the 'Y'."`;
   Takeshi`"........."`;
   Sora(T3B216)`"In a different history, in a different 
world, in a different place..."`;
   Sora(T3B217)`"...another you exists. Do you understand 
this?"`;
   Sora(T3B218)`"You are omnipresent in the world."`;
   Sora(T3B219)`"And in the same way, so am I."`;
   Sora(T3B220)`"You and I..."`;
   Sora(T3B221)`"We are just branches of the 'Y'..."`;
   Sora(T3B222)`"However..."`;
   Sora(T3B223)`"These divided selves can become one..."`;

});
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
monoColorOverlay({ interval: 18, color: WHITE });
closeSnowFallingAnim();
bgload({ name: `BG02A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(61);
fadeOutMonoColorOverlay();
unSkippableDelay(48);
showTextbox();
text(() => {
   `Sora stopped dividing herself.`;
   `The brightness faded and then was gone.`;
   `The single Sora quietly fluttered down to 
stand before me.`;
   `The dolphins behind us had stopped their 
revolutions at some point.`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3B224)`"If the self you don't know were to become 
inseparably bound with you?"`;
   Sora(T3B225)`"If you could stand in a place where you 
could see and understand all the others that 
were 'you'?"`;
   Sora(T3B226)`"Then all the experiences of your other selves 
would become like your own experiences."`;
   Sora(T3B227)`"In the truest sense, you would become one 
being with one experience."`;
   Takeshi`"........."`;
   `I let out a long sigh.`;
   Takeshi`"Listen..."`;
   Takeshi`"Can I just ask you one thing?"`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3B228)`"Please do."`;
   Takeshi`"Why are you telling all this to me?"`;

});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3B229)`"Hmm...that's a good question..."`;
   `Sora turned in a full circle right where she 
was, and smiled.`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3B230)`"It is a legend."`;
   Sora(T3B231)`"Of the origins of LeMU...it's the legend 
passed down through the Lemurian continent."`;
   Sora(T3B232)`"Let's just leave it at that."`;

});
fgload({ id: 1, name: `SO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3B233)`"...and you must understand, it's a secret."`;
   `Sora put a finger to her lips and smiled once 
again.`;

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
l_choice = 0;
jump(`T_3C`);
