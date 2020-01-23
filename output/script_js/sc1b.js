l_b0 = 5;
l_dayA = 1;
l_dayB = 1;
showTextbox();
text(() => {
   `'Life readings: 6'`;
   `And the exact number of humans trapped was...`;

});
choice(
   `'6'`,
   `'5'`,
);
switch (l_choice) {
   case 0: goto(lbl_00000065);
   case 1: goto(lbl_000000e0);
}
let lbl_00000065;
showTextbox();
text(() => {
   `Six people.`;
   `You, Sara, Tsugumi, Takeshi, me...and Sora.`;
   `No matter how many times I checked, the number 
stayed the same.`;
   `It was probably like You said - the sensor was 
just malfunctioning.`;

});
fgload({ id: 2, name: `KB08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S114)`"Well, either way, it is something we can 
check by walking around the complex, right?"`;

});
fgload({ id: 2, name: `KB05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S115)`"But first we need to go secure Tsugumi!"`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU05BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C1S116)`"Get? You mean save?"`;

});
fgload({ id: 2, name: `KB08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S117)`"Saving is removing an object from danger."`;
   Takeshi(C1S118)`"Securing is removing danger itself."`;

});
l_choice = 1;
jump(`S_1B`);
let lbl_000000e0;
l_coco_point += 1;
l_know_sora_is_an_ai = 1;
showTextbox();
text(() => {
   Kid`"Wait! That's not right! It's definitely 
weird!"`;

});
multifgload2({ id1: 1, id2: 2, name1: `SA08ADM`, name2: `KB07ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   `I protested.`;
   Kid`"There are only five people that didn't 
escape in time!"`;
   Kid`"But the bio scan is showing six."`;
   Kid`"So there has to be somebody else in LeMU!"`;

});
multifgload2({ id1: 1, id2: 2, name1: `SA06ADM`, name2: `KB06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S119)`"Huh? Why do you say there are five people?"`;

});
fgload({ id: 1, name: `SA05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S120)`"Sora, Tsugumi, Takeshi, the Kid, Nakkyu...and 
me."`;
   Sara(C1S121)`"That's six."`;
   Kid`"No. Sara...that's wrong..."`;

});
fgload({ id: 2, name: `KB07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid`"The thing is, Sora is..."`;
   `The words jumped out of my mouth.`;
   Kid`"The thing is, Sora is..."`;

});
fgload({ id: 2, name: `KB08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid`"Sora is..."`;
   Kid`"She's not really here."`;

});
fgload({ id: 1, name: `SA08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S122)`"She's not here...?"`;

});
fgload({ id: 2, name: `KB03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S123)`"What're you talking about, Kid?"`;
   Kid`"Sora is...she's an RSD-generated image."`;

});
fgload({ id: 1, name: `SA06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S124)`"W-what?"`;

});
fgload({ id: 2, name: `KB06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S125)`"RSD!?"`;
   Kid`"It's a system that uses semiconductor lasers 
to project an image directly onto a person's 
retina."`;
   Kid`"In other words, the Sora that we are seeing 
is just an image."`;
   `Sara and Takeshi's jaws dropped and they 
blinked again and again.`;
   `Being an employee of LeMU, I figured that You 
had known this from the start. She didn't 
look surprised, but just gazed off into 
the distance.`;
   `As for Sora...`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(C1S126)`"Yes. It is exactly as the Kid states."`;
   Sora(C1S127)`"I am not flesh and blood."`;
   Sora(C1S128)`"I have no form...I am merely an image."`;
   Sora(C1S129)`"My thoughts and personality are all 
controlled by an AI program." `;

});
fgload({ id: 2, name: `KB03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S130)`"No way..."`;

});
fgload({ id: 1, name: `SO03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(C1S131)`"You don't believe me?"`;

});
fgload({ id: 2, name: `KB04ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S132)`"Of course not! I mean, Sora, you're here..."`;

});
fgload({ id: 1, name: `SO01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(C1S133)`"Actually your disbelief is really quite a 
compliment."`;

});
fgload({ id: 1, name: `SO10ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(C1S134)`"But Takeshi...it is a fact."`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SA03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S135)`"R-really...?"`;

});
fgload({ id: 1, name: `SO01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   `Looking scared, Sara reached her right hand 
out toward Sora.`;
   `Her arm met no resistance as it plunged into 
Sora's body.`;

});
fgload({ id: 2, name: `SA06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S136)`"Wow..."`;
   `"Sara reflexively snapped her hand back..."`;

});
fgload({ id: 1, name: `SO09ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(C1S137)`"Now do you understand?"`;
   Sara`"........."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KB06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"........."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `Takeshi and Sara froze, immobile like they 
were cutout pictures.`;
   Kid`"Hey. You got it, right?"`;
   Kid`"So Sora isn't detected by the bio scan 
sensors."`;

});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C1S138)`"That's right..."`;
   `You finally broke her silence.`;
   You(C1S139)`"Sora shouldn't be counted by the bio scan 
sensors so this number... '6' can't be 
the right number."`;
   Kid`"I told you so."`;
   Kid`"So that means that somebody else is here 
besides us."`;

});
fgload({ id: 1, name: `YU04BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C1S140)`"Stop!"`;

});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C1S141)`"Were you listening to what I just said?"`;
   Kid`"???"`;
   You(C1S142)`"By 'can't be the right number,' I mean that 
there is some kind of malfunction."`;

});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C1S143)`"Think about it."`;
   You(C1S144)`"It didn't just display the number six, right?"`;

});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C1S145)`"The first time we looked, it was saying 
seven, too."`;
   You(C1S146)`"Then it would jump between five, and six and 
seven."`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C1S147)`"How do you explain that?"`;
   Kid`"........."`;

});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C1S148)`"Even if, like you say, there were other 
people that didn't get out of here in time..."`;
   You(C1S149)`"You think somebody would suddenly appear, 
disappear or split into two people?"`;
   Kid`"Well...how am I supposed to know...?"`;

});
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C1S150)`"See."`;
   Kid`"But if somebody else were here, what would 
you do?"`;
   Kid`"Why don't we just search, and if we don't 
find anyone then we can call it quits."`;
   Kid`"I don't see any reason that you could have 
against searching."`;

});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C1S151)`"I'm not against it."`;
   You(C1S152)`"But this is just a computer glitch and 
I don't think we should let it go controlling 
us and making us all upset."`;
   Kid`"So you really are against it."`;

});
fgload({ id: 1, name: `YU04BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C1S153)`"I said I'm not."`;
   Kid`"........."`;

});
fgload({ id: 1, name: `YU03BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C1S154)`"Geez...fine. I got it. Enough of this..."`;
   You(C1S155)`"Alright, shall we go search for 
this 'someone'?"`;
   `I gave a big nod.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `At that point...`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU07BDM`, name2: `SO03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(C1S156)`"Uh...what about Tsugumi..."`;
   `Sora said it hesitantly.`;

});
fgload({ id: 1, name: `YU01BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C1S157)`"Oh, that's right."`;

});
fgload({ id: 1, name: `YU05BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C1S158)`"The reason we all came here was to find out 
where Tsugumi went."`;

});
fgload({ id: 2, name: `SO01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(C1S159)`"Correct."`;
   Sora(C1S160)`"So wouldn't it be logical to search LeMU 
while we determine the location of Tsugumi?"`;
   Kid`"Okay. Sounds good."`;
   Kid`"Well, let's get started then."`;
   Kid`"Tsugumi was on Zweite stock, right?"`;

});
fgload({ id: 2, name: `SO10ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(C1S161)`"Yes."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `Sara and Takeshi didn't react at all.`;
   `I imagined they still couldn't quite swallow 
the idea that Sora was an image.`;
   `The two were frozen stiff with their eyes 
completely absorbed by Sora.`;
   Kid`"What are you doing? Hurry up! Let's get 
going!"`;
   `I tugged Sara and Takeshi by the arm, leading 
them from the control room.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
bgload({ name: `BG29A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `We climbed the emergency stairs, aiming for 
the floor that Tsugumi was on.`;
   `Only Sora remained in the control room, 
thinking of ways to escape, establishing 
communications, rechecking the complex and 
trying to get the malfunctioning systems back 
on-line.`;

});
bgload({ name: `BG25A3`, transition: 20 });
playBGM({ num: 3, volume: 100 });
clock(`20:52`);
showTextbox();
text(() => {
   `We arrived at Zweite stock...`;
   `And when we did, a voice came from the speaker 
above the corridor.`;
   Sora(C1S162)`"Right now, Tsugumi..."`;
   Sora(C1S163)`"...seems to be in the Security Office."`;
   `I figured Sora was using the complex 
intercom system to announce 
Tsugumi's location.`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C1S164)`"Alright. The Security Office, huh?"`;
   `You said this toward the ceiling.`;

});
bgload({ name: `BG26A3R`, transition: 20 });
showTextbox();
text(() => {
   `On the way to the office...`;
   `Takeshi said -`;

});
multifgload2({ id1: 1, id2: 2, name1: `SA02ADM`, name2: `KB02ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S165)`"Hey, that surprised the heck outta me... 
Sora being AI."`;
   Sara(C1S166)`"I know, it's crazy to think that she's 
only an image."`;
   Sara(C1S167)`"I mean...she said something about a laser 
projected on to the retina or something..."`;
   `Takeshi and Sara were as excited as two kids 
experiencing Halloween for the first time.`;

});
fgload({ id: 2, name: `KB01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S168)`"But You knew, right? That Sora is 
RSD-generated."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU01BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C1S169)`"Yeah. I work here after all."`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SA05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S170)`"Well, why didn't you tell us?"`;

});
fgload({ id: 1, name: `YU07BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C1S171)`"Well...basically..."`;

});
fgload({ id: 1, name: `YU03BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C1S172)`"I didn't think it was what Sora wanted."`;

});
fgload({ id: 2, name: `SA08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(C1S173)`"Sora herself didn't say anything about being 
AI or RSD, right?"`;
   You(C1S174)`"The fact that she has been quiet about it 
tells me she probably wanted to keep it 
a secret from everybody."`;

});
fgload({ id: 1, name: `YU05BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C1S175)`"If she didn't, than she would have told you 
all about it long ago. Don't you think?"`;

});
fgload({ id: 1, name: `YU07BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C1S176)`"So I didn't tell you."`;

});
fgload({ id: 2, name: `SA01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(C1S177)`"I didn't think I should be the one to tell 
you."`;

});
fgload({ id: 2, name: `SA05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S178)`"Hmmmm...."`;
   Takeshi(C1S179)`"I get it..."`;
   Kid`"So I shouldn't have said that?"`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU06BDM`, name2: `SA06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(C1S180)`"What?"`;
   Kid`"You said that Sora wanted to keep all of 
the AI and RSD stuff a secret, right?"`;

});
fgload({ id: 2, name: `SA03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid`"And I went and told everybody all about it..."`;
   Kid`"Sora might be mad..."`;

});
fgload({ id: 1, name: `YU03BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C1S181)`"That's silly..."`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SO02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(C1S182)`"Not in the least, Kid."`;

});
fgload({ id: 1, name: `YU06BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Kid`"S-Sora...!"`;
   `Suddenly Sora appeared before everyone.`;
   `We stopped, surprised...`;

});
fgload({ id: 2, name: `SO01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(C1S183)`"It is something that I thought that I needed 
to tell you..."`;

});
fgload({ id: 1, name: `YU07BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(C1S184)`"Besides, it is not something that I was 
desperately trying to hide."`;

});
fgload({ id: 2, name: `SO02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(C1S185)`"So please, try not to worry about it."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SA06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S186)`"Wait just a second..."`;

});
multifgload2({ id1: 1, id2: 2, name1: `SA05ADM`, name2: `SO07ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S187)`"So how did the Kid know about Sora's 
identity?"`;

});
stopBGM();
showTextbox();
text(() => {
   Kid`"...Uh...I...?"`;
   Sora(C1S188)`"Kid, you should not have any memories from 
before you fell into the pond, correct?"`;
   Kid`"Uh, yeah..."`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `KB08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S189)`"So that means that somebody must've told you 
about Sora after that."`;
   Kid`"No one...told...me..."`;
   Sara(C1S190)`"So how did you know?"`;
   Kid`"That...uh...I...um...."`;

});
hideTextbox();
showDimOverlay();
playBGM({ num: 13, volume: 100 });
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `(Not again...)`;
   `I thought about it.`;
   `It was the same as the time I had blurted out 
Sara's name.`;
   `I knew something that there was no way 
I could know.`;
   `The fact that Sora was an RSD image.`;
   `When, where, why, from whom and how could 
I have heard that...?`;
   `It was like one memory had broken free from 
the frozen iceberg of my past...`;
   `I was confused by the memory's image...`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   Kid`"I don't know..."`;
   Kid`"I don't know how I know..."`;
   Kid`"How could I know? What is there in my past?"`;
   Kid`"Somebody...tell me..."`;

});
multifgload2({ id1: 1, id2: 2, name1: `SA08ADM`, name2: `KB03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sara`"........."`;
   You`"........."`;
   Takeshi`"........."`;
   Sora`"..."`;
   `The four of them looked at each other.`;

});
fgload({ id: 1, name: `SA04ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S191)`"You guys, this is really WEIRD for SURE!"`;
   Sara(C1S192)`"And it's not just this...the Kid knew 
my name, too."`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SO06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(C1S193)`"He knew your name, Sara?"`;
   Sara(C1S194)`"Yup."`;

});
fgload({ id: 1, name: `SA07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S195)`"What was it he had? Life amnesia or 
something?"`;

});
fgload({ id: 1, name: `SA05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S196)`"That has to do only with the loss of memories 
that are directly related to the person, 
right?"`;

});
fgload({ id: 2, name: `SO07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S197)`"But he knew about me and Sora..."`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `YU04BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(C1S198)`"Wait a second, Mayo."`;
   You(C1S199)`"I told you not to pressure the Kid."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KB05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S200)`"But...maybe it's just the opposite. Maybe he 
needs it."`;
   Takeshi(C1S201)`"I mean...he found the cut-off point of 
his memory."`;
   Takeshi(C1S202)`"Maybe if he doesn't try to pull stuff back 
from the other side it'll disappear for good."`;

});
fgload({ id: 2, name: `YU07BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(C1S203)`"Takeshi, I know what you are talking about."`;
   You(C1S204)`"But think about our situation right now."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO10ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(C1S205)`"I agree with You."`;
   Sora(C1S206)`"There is no one here with specialty knowledge 
of this disorder nor capable of counseling."`;

});
fgload({ id: 1, name: `SO03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(C1S207)`"In other words...if the Kid's condition were 
to worsen, there is nothing we could do to 
help him."`;

});
fgload({ id: 2, name: `YU01BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(C1S208)`"So we have to stick with what we've got."`;
   You(C1S209)`"He can still get his memory back after we get 
out of here."`;
   `Sara and Takeshi didn't looked satisfied.`;
   `Maybe I had gotten used to this kind of thing. 
My head didn't hurt and I didn't feel confused.`;
   `But I was terribly tired.`;
   `I was absolutely beat and there was no way 
I was getting any closer to my memory.`;
   `My memory was like a lone island shrouded 
in a fog.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SA03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S210)`"Well, if that's what you think... 
then that's fine."`;

});
fgload({ id: 1, name: `SA05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S211)`"Besides...we've got things to find before his 
memory."`;

});
fgload({ id: 2, name: `YU05BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(C1S212)`"Things to find?"`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(C1S213)`"She is referring to Tsugumi."`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
bgload({ name: `BG11A1`, transition: 20 });
playBGM({ num: 15, volume: 100 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   `The five of us went in the Security Office.`;
   `Tsugumi was there.`;

});
multifgload2({ id1: 1, id2: 2, name1: `TU08ADM`, name2: `KB07ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(C1S214)`"What are you guys doing here?"`;
   Takeshi(C1S215)`"What are YOU doing here?"`;
   Tsugumi(C1S216)`"Do you want me to tell you?"`;

});
fgload({ id: 2, name: `KB05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S217)`"Yeah."`;

});
fgload({ id: 1, name: `TU05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(C1S218)`"I was trying to find out what you are 
plotting."`;

});
fgload({ id: 2, name: `KB03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S219)`"Oh...you're still stuck on that, huh?"`;

});
fgload({ id: 2, name: `KB08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S220)`"Are you sick in the head? Paranoid maybe?"`;
   Tsugumi`"........."`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `YU05BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(C1S221)`"Let her look. That'll be the best anyway."`;
   You(C1S222)`"Then she'll realize that we are not scheming 
anything."`;
   Tsugumi`"........."`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SA05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S223)`"Tsugumi, what is it you are so suspicious 
about?"`;
   Sara(C1S224)`"What do you think we did?"`;

});
fgload({ id: 1, name: `TU08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(C1S225)`"It has nothing to do with you."`;

});
fgload({ id: 2, name: `SA04ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S226)`"Don't say that!"`;

});
fgload({ id: 2, name: `SA03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S227)`"I wish you...wouldn't talk like that..."`;
   `Sara clenched her fist and her shoulders shook.`;

});
fgload({ id: 1, name: `TU07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(C1S228)`"That's not what I meant."`;

});
fgload({ id: 2, name: `SA06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S229)`"...Huh?"`;

});
fgload({ id: 1, name: `TU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(C1S230)`"You...your name is Sara, right?"`;

});
fgload({ id: 2, name: `SA08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S231)`"Y...yes."`;
   Tsugumi(C1S232)`"I'm not suspicious of you, Sara."`;
   Tsugumi(C1S233)`"So this thing has nothing to do with you."`;

});
fgload({ id: 2, name: `SA05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S234)`"What do you mean?"`;
   Tsugumi(C1S235)`"You came here on a field trip or something, 
right?"`;

});
fgload({ id: 1, name: `TU08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(C1S236)`"So...you are here by chance."`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SO07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(C1S237)`"It would also seem that You, Takeshi, the 
Kid, and everyone also failed to 
escape 'by chance.'"`;

});
fgload({ id: 1, name: `TU05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(C1S238)`"What are you saying?"`;

});
fgload({ id: 1, name: `TU04ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(C1S239)`"There is no way that something like this 
could occur by chance."`;

});
fgload({ id: 2, name: `SO06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid`"What do you mean 'something like this'?"`;
   Tsugumi(C1S240)`"Everything! Everything that is happening 
here!"`;
   Kid`"So, you're saying that the accident and all 
didn't happen by chance?"`;
   Tsugumi(C1S241)`"Of course that's what I mean."`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `KB08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S242)`"You mean, like, somebody planned it?"`;

});
fgload({ id: 1, name: `TU05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(C1S243)`"Not somebody.... YOU ALL did."`;

});
stopBGM();
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `YU09BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(C1S244)`"AH, HA, HA, HA...."`;

});
fgload({ id: 1, name: `TU03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(C1S245)`"W-what is so funny?"`;

});
fgload({ id: 2, name: `YU01BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(C1S246)`"It's...I mean..."`;

});
fgload({ id: 2, name: `YU08BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(C1S247)`"You have to laugh."`;
   Tsugumi`"........."`;

});
fgload({ id: 2, name: `YU01BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(C1S248)`"Hey, Takeshi. How old are you?"`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KB07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S249)`"Who? Me? I'm 20."`;
   You(C1S250)`"I'm 18."`;

});
fgload({ id: 2, name: `YU07BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(C1S251)`"Nobody knows the Kid's age...but he's 
definitely younger than me."`;
   You(C1S252)`"You think the three of us could cause this 
kind of massive accident?"`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU05ADM`, x: 128, useAnim: true });
playBGM({ num: 4, volume: 100 });
showTextbox();
text(() => {
   Tsugumi(C1S253)`"Well, with just the three of you it might be 
impossible."`;
   Tsugumi(C1S254)`"But..."`;

});
fgload({ id: 1, name: `TU08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(C1S255)`"But Sora ? Sora could do it."`;
   Sara(C1S256)`"Sora?"`;

});
fgload({ id: 2, name: `YU06BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(C1S257)`"Sora?"`;
   Takeshi(C1S258)`"Sora?"`;
   Kid`"Sora could?"`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SO06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora`"..............."`;
   Tsugumi(C1S259)`"Sora is one of LeMMIH's programs."`;
   Tsugumi(C1S260)`"The only one that could do whatever they 
wanted with the LeMU system is you, Sora."`;

});
fgload({ id: 2, name: `SO03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(C1S261)`"I...I...I..."`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SA04ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S262)`"Tsugumi! Don't be stupid!"`;

});
fgload({ id: 1, name: `TU04ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(C1S263)`"I've already told you, I'm not saying this 
has anything to do with you Sara."`;
   Sara(C1S264)`"Of course it has to do with me!"`;
   Sara(C1S265)`"Everybody that is here right now is working 
together to get out of here!"`;

});
fgload({ id: 2, name: `SA05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S266)`"We're not just strangers anymore!"`;

});
fgload({ id: 2, name: `SA03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S267)`"But...but you just..."`;

});
fgload({ id: 1, name: `TU03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;

});
fgload({ id: 2, name: `SA01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S268)`"Anyway, I want you to quit spouting out these 
crazy ideas to everyone."`;

});
fgload({ id: 2, name: `SA02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S269)`"You've got it all wrong..."`;
   `Sara stared intensely at Tsugumi.`;
   `Tsugumi avoided her eyes.`;
   `It was a period of awkward silence...`;
   `Everyone scanned each other's faces trying to 
gauge what the others were thinking.`;
   Tsugumi(C1S270)`"I'm sorry, Sara..."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 2, name: `SA08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi left the Security Office with her eyes 
down.`;

});
fgload({ id: 1, name: `YU04BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C1S271)`"Tsugumi, wait!"`;

});
fgload({ id: 2, name: `SA04ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(C1S272)`"Tsugumi!"`;

});
hideTextbox();
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
stopBGM();
showTextbox();
text(() => {
   `You and Sara dashed out of the room after 
Tsugumi.`;
   `That left Sora, Takeshi and I.`;
   `Again silence enveloped us.`;
   `We tried to get rid of the awkwardness by 
staring at the monitors, picking our nails and 
fiddling with the lint on our clothes.`;

});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C1S273)`"Well...I'll go back to the Control Room."`;
   Sora(C1S274)`"As soon as I learn anything, I will contact 
everyone..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Sora left Takeshi and I, leaving us with those 
words.`;
   `Takeshi looked at me and shrugged.`;

});
hideTextbox();
playBGM({ num: 2, volume: 100 });
fgload({ id: 1, name: `KB03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S275)`"Here we go again..."`;
   Kid`"..."`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S276)`"Okay, whaddya wanna do?"`;
   Kid`"What do you mean?"`;
   Takeshi(C1S277)`"Should we go after Tsugumi?"`;
   Kid`"I think the same thing would just happen 
again..."`;

});
fgload({ id: 1, name: `KB07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S278)`"Then, what?"`;
   Kid`"I don't know..."`;

});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S279)`"For now, we could take a look around."`;
   Kid`"Yeah. We still haven't figured out the 
problem with the life scan number."`;
   Takeshi(C1S280)`"You mean that mystery somebody, the one who 
didn't escape?"`;
   Kid`"Yeah. So let's check around LeMU one more 
time..."`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C1S281)`"You wanna split up and look?"`;
   Takeshi(C1S282)`"I could take the bottom floor and you could 
take Zweite stock..."`;
   Kid`"Sounds good."`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `So Takeshi and I split up to search.`;
   `We agreed to meet up at 9:30 p.m.`;
   `We were to meet in front of the 
Security Office.`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
setSceneTitle({ index: 53 });
bgload({ name: `BG26A3L`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`21:21`);
showTextbox();
text(() => {
   `I looked around Zweite stock.`;
   Kid`"Is there anybody there? If so, answer me!"`;
   `I made the rounds of all the rooms...`;
   `...But I didn't find anyone.`;
   `And it was about time to meet up with Takeshi.`;

});
bgload({ name: `BG29A1`, transition: 20 });
clock(`21:35`);
showTextbox();
text(() => {
   `I headed to in front of the Security Office.`;
   `But...`;

});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `Takeshi was nowhere to be seen.`;
   Kid`"Hey! Takeshi!"`;
   `I called out to him, but there was no answer.`;
   `Glancing at the door of the Security Office, 
I saw that it was open.`;
   `I decided to peek inside.`;

});
hideTextbox();
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
bgload({ name: `BG11A1`, transition: 20 });
showTextbox();
text(() => {
   `But there was no one there...`;
   Kid`"Hey! Sora! Do you know where Takeshi went?"`;
   `I called out to the empty ceiling.`;
   `I was betting that Sora might be monitoring me 
from the Control Room.`;
   `But it didn't pan out...`;
   `The speakers in the ceiling remained painfully 
silent.`;

});
l_choice = 1;
jump(`S_1C`);
