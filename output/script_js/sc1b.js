varop(`(28 0a a4) b0 := (00) 5`);
varop(`(28 0a a4) b1 := (00) 1`);
varop(`(28 0a a4) b2 := (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`'Life readings: 6'`;
   waitForClick; clearText; marker; appendText; 
   Narr`And the exact number of humans trapped was...`;
   waitForClick; 
});
choice(
   `'6'`
   `'5'`
);
switch (choice) {
   case 0: goto(lbl_00000065);
   case 1: goto(lbl_000000e0);
}
let lbl_00000065;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Six people.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You, Sara, Tsugumi, Takeshi, me...and Sora.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No matter how many times I checked, the number 
stayed the same.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was probably like You said - the sensor was 
just malfunctioning.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S114`); appendText; 
   Takeshi`"Well, either way, it is something we can 
check by walking around the complex, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S115`); appendText; 
   Takeshi`"But first we need to go secure Tsugumi!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU05BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S116`); appendText; 
   You`"Get? You mean save?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S117`); appendText; 
   Takeshi`"Saving is removing an object from danger."`;
   waitForClick; clearText; marker; sound(`C1S118`); appendText; 
   Takeshi`"Securing is removing danger itself."`;
   waitForClick; clearText; 
});
varop(`(28 0a a4) b3 := (00) 1`);
jump(`S_1B`);
let lbl_000000e0;
varop(`(28 0a a4) ba += (00) 1`);
varop(`(28 0a a4) f0 := (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Wait! That's not right! It's definitely 
weird!"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SA08ADM`, name2: `KB07ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I protested.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"There are only five people that didn't 
escape in time!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But the bio scan is showing six."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So there has to be somebody else in LeMU!"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SA06ADM`, name2: `KB06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S119`); appendText; 
   Sara`"Huh? Why do you say there are five people?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S120`); appendText; 
   Sara`"Sora, Tsugumi, Takeshi, the Kid, Nakkyu...and 
me."`;
   waitForClick; clearText; marker; sound(`C1S121`); appendText; 
   Sara`"That's six."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No. Sara...that's wrong..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"The thing is, Sora is..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The words jumped out of my mouth.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"The thing is, Sora is..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Sora is..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"She's not really here."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S122`); appendText; 
   Sara`"She's not here...?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S123`); appendText; 
   Takeshi`"What're you talking about, Kid?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sora is...she's an RSD-generated image."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S124`); appendText; 
   Sara`"W-what?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S125`); appendText; 
   Takeshi`"RSD!?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It's a system that uses semiconductor lasers 
to project an image directly onto a person's 
retina."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"In other words, the Sora that we are seeing 
is just an image."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara and Takeshi's jaws dropped and they 
blinked again and again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Being an employee of LeMU, I figured that You 
had known this from the start. She didn't 
look surprised, but just gazed off into 
the distance.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As for Sora...`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S126`); appendText; 
   Sora`"Yes. It is exactly as the Kid states."`;
   waitForClick; clearText; marker; sound(`C1S127`); appendText; 
   Sora`"I am not flesh and blood."`;
   waitForClick; clearText; marker; sound(`C1S128`); appendText; 
   Sora`"I have no form...I am merely an image."`;
   waitForClick; clearText; marker; sound(`C1S129`); appendText; 
   Sora`"My thoughts and personality are all 
controlled by an AI program." `;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S130`); appendText; 
   Takeshi`"No way..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S131`); appendText; 
   Sora`"You don't believe me?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB04ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S132`); appendText; 
   Takeshi`"Of course not! I mean, Sora, you're here..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S133`); appendText; 
   Sora`"Actually your disbelief is really quite a 
compliment."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S134`); appendText; 
   Sora`"But Takeshi...it is a fact."`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SA03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S135`); appendText; 
   Sara`"R-really...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Looking scared, Sara reached her right hand 
out toward Sora.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her arm met no resistance as it plunged into 
Sora's body.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S136`); appendText; 
   Sara`"Wow..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`"Sara reflexively snapped her hand back..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S137`); appendText; 
   Sora`"Now do you understand?"`;
   waitForClick; clearText; marker; appendText; 
   Sara`"........."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KB06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi and Sara froze, immobile like they 
were cutout pictures.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey. You got it, right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So Sora isn't detected by the bio scan 
sensors."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S138`); appendText; 
   You`"That's right..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You finally broke her silence.`;
   waitForClick; clearText; marker; sound(`C1S139`); appendText; 
   You`"Sora shouldn't be counted by the bio scan 
sensors so this number... '6' can't be 
the right number."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I told you so."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So that means that somebody else is here 
besides us."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S140`); appendText; 
   You`"Stop!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S141`); appendText; 
   You`"Were you listening to what I just said?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"???"`;
   waitForClick; clearText; marker; sound(`C1S142`); appendText; 
   You`"By 'can't be the right number,' I mean that 
there is some kind of malfunction."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S143`); appendText; 
   You`"Think about it."`;
   waitForClick; clearText; marker; sound(`C1S144`); appendText; 
   You`"It didn't just display the number six, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S145`); appendText; 
   You`"The first time we looked, it was saying 
seven, too."`;
   waitForClick; clearText; marker; sound(`C1S146`); appendText; 
   You`"Then it would jump between five, and six and 
seven."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S147`); appendText; 
   You`"How do you explain that?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S148`); appendText; 
   You`"Even if, like you say, there were other 
people that didn't get out of here in time..."`;
   waitForClick; clearText; marker; sound(`C1S149`); appendText; 
   You`"You think somebody would suddenly appear, 
disappear or split into two people?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Well...how am I supposed to know...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S150`); appendText; 
   You`"See."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But if somebody else were here, what would 
you do?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Why don't we just search, and if we don't 
find anyone then we can call it quits."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I don't see any reason that you could have 
against searching."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S151`); appendText; 
   You`"I'm not against it."`;
   waitForClick; clearText; marker; sound(`C1S152`); appendText; 
   You`"But this is just a computer glitch and 
I don't think we should let it go controlling 
us and making us all upset."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So you really are against it."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S153`); appendText; 
   You`"I said I'm not."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S154`); appendText; 
   You`"Geez...fine. I got it. Enough of this..."`;
   waitForClick; clearText; marker; sound(`C1S155`); appendText; 
   You`"Alright, shall we go search for 
this 'someone'?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I gave a big nod.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`At that point...`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU07BDM`, name2: `SO03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S156`); appendText; 
   Sora`"Uh...what about Tsugumi..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora said it hesitantly.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S157`); appendText; 
   You`"Oh, that's right."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S158`); appendText; 
   You`"The reason we all came here was to find out 
where Tsugumi went."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S159`); appendText; 
   Sora`"Correct."`;
   waitForClick; clearText; marker; sound(`C1S160`); appendText; 
   Sora`"So wouldn't it be logical to search LeMU 
while we determine the location of Tsugumi?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Okay. Sounds good."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Well, let's get started then."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Tsugumi was on Zweite stock, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO10ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S161`); appendText; 
   Sora`"Yes."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara and Takeshi didn't react at all.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I imagined they still couldn't quite swallow 
the idea that Sora was an image.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The two were frozen stiff with their eyes 
completely absorbed by Sora.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What are you doing? Hurry up! Let's get 
going!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tugged Sara and Takeshi by the arm, leading 
them from the control room.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`We climbed the emergency stairs, aiming for 
the floor that Tsugumi was on.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Only Sora remained in the control room, 
thinking of ways to escape, establishing 
communications, rechecking the complex and 
trying to get the malfunctioning systems back 
on-line.`;
   waitForClick; clearText; 
});
bgload({ name: `BG25A3`, transition: 20 });
playBGM({ num: 3, volume: 100 });
clock(`20:52`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We arrived at Zweite stock...`;
   waitForClick; clearText; marker; appendText; 
   Narr`And when we did, a voice came from the speaker 
above the corridor.`;
   waitForClick; clearText; marker; sound(`C1S162`); appendText; 
   Sora`"Right now, Tsugumi..."`;
   waitForClick; clearText; marker; sound(`C1S163`); appendText; 
   Sora`"...seems to be in the Security Office."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I figured Sora was using the complex 
intercom system to announce 
Tsugumi's location.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S164`); appendText; 
   You`"Alright. The Security Office, huh?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You said this toward the ceiling.`;
   waitForClick; clearText; 
});
bgload({ name: `BG26A3R`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`On the way to the office...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi said -`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SA02ADM`, name2: `KB02ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S165`); appendText; 
   Takeshi`"Hey, that surprised the heck outta me... 
Sora being AI."`;
   waitForClick; clearText; marker; sound(`C1S166`); appendText; 
   Sara`"I know, it's crazy to think that she's 
only an image."`;
   waitForClick; clearText; marker; sound(`C1S167`); appendText; 
   Sara`"I mean...she said something about a laser 
projected on to the retina or something..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi and Sara were as excited as two kids 
experiencing Halloween for the first time.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S168`); appendText; 
   Takeshi`"But You knew, right? That Sora is 
RSD-generated."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU01BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S169`); appendText; 
   You`"Yeah. I work here after all."`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SA05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S170`); appendText; 
   Sara`"Well, why didn't you tell us?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S171`); appendText; 
   You`"Well...basically..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S172`); appendText; 
   You`"I didn't think it was what Sora wanted."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S173`); appendText; 
   You`"Sora herself didn't say anything about being 
AI or RSD, right?"`;
   waitForClick; clearText; marker; sound(`C1S174`); appendText; 
   You`"The fact that she has been quiet about it 
tells me she probably wanted to keep it 
a secret from everybody."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S175`); appendText; 
   You`"If she didn't, than she would have told you 
all about it long ago. Don't you think?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S176`); appendText; 
   You`"So I didn't tell you."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S177`); appendText; 
   You`"I didn't think I should be the one to tell 
you."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S178`); appendText; 
   Sara`"Hmmmm...."`;
   waitForClick; clearText; marker; sound(`C1S179`); appendText; 
   Takeshi`"I get it..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So I shouldn't have said that?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `YU06BDM`, name2: `SA06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S180`); appendText; 
   You`"What?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You said that Sora wanted to keep all of 
the AI and RSD stuff a secret, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"And I went and told everybody all about it..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sora might be mad..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S181`); appendText; 
   You`"That's silly..."`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SO02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S182`); appendText; 
   Sora`"Not in the least, Kid."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"S-Sora...!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Suddenly Sora appeared before everyone.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We stopped, surprised...`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S183`); appendText; 
   Sora`"It is something that I thought that I needed 
to tell you..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S184`); appendText; 
   Sora`"Besides, it is not something that I was 
desperately trying to hide."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S185`); appendText; 
   Sora`"So please, try not to worry about it."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SA06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S186`); appendText; 
   Sara`"Wait just a second..."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SA05ADM`, name2: `SO07ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S187`); appendText; 
   Sara`"So how did the Kid know about Sora's 
identity?"`;
   waitForClick; clearText; 
});
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"...Uh...I...?"`;
   waitForClick; clearText; marker; sound(`C1S188`); appendText; 
   Sora`"Kid, you should not have any memories from 
before you fell into the pond, correct?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Uh, yeah..."`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `KB08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S189`); appendText; 
   Takeshi`"So that means that somebody must've told you 
about Sora after that."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No one...told...me..."`;
   waitForClick; clearText; marker; sound(`C1S190`); appendText; 
   Sara`"So how did you know?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"That...uh...I...um...."`;
   waitForClick; clearText; 
});
hideTextbox();
showDimOverlay();
playBGM({ num: 13, volume: 100 });
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(Not again...)`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I thought about it.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`It was the same as the time I had blurted out 
Sara's name.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I knew something that there was no way 
I could know.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`The fact that Sora was an RSD image.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`When, where, why, from whom and how could 
I have heard that...?`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`It was like one memory had broken free from 
the frozen iceberg of my past...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I was confused by the memory's image...`;
   waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
varop(`(28 0a a0) ac := (00) 0`);
closeDimOverlay();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"I don't know..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I don't know how I know..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"How could I know? What is there in my past?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Somebody...tell me..."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SA08ADM`, name2: `KB03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Sara`"........."`;
   waitForClick; clearText; marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Sora`"..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The four of them looked at each other.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA04ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S191`); appendText; 
   Sara`"You guys, this is really WEIRD for SURE!"`;
   waitForClick; clearText; marker; sound(`C1S192`); appendText; 
   Sara`"And it's not just this...the Kid knew 
my name, too."`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SO06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S193`); appendText; 
   Sora`"He knew your name, Sara?"`;
   waitForClick; clearText; marker; sound(`C1S194`); appendText; 
   Sara`"Yup."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S195`); appendText; 
   Sara`"What was it he had? Life amnesia or 
something?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S196`); appendText; 
   Sara`"That has to do only with the loss of memories 
that are directly related to the person, 
right?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S197`); appendText; 
   Sara`"But he knew about me and Sora..."`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `YU04BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S198`); appendText; 
   You`"Wait a second, Mayo."`;
   waitForClick; clearText; marker; sound(`C1S199`); appendText; 
   You`"I told you not to pressure the Kid."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KB05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S200`); appendText; 
   Takeshi`"But...maybe it's just the opposite. Maybe he 
needs it."`;
   waitForClick; clearText; marker; sound(`C1S201`); appendText; 
   Takeshi`"I mean...he found the cut-off point of 
his memory."`;
   waitForClick; clearText; marker; sound(`C1S202`); appendText; 
   Takeshi`"Maybe if he doesn't try to pull stuff back 
from the other side it'll disappear for good."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU07BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S203`); appendText; 
   You`"Takeshi, I know what you are talking about."`;
   waitForClick; clearText; marker; sound(`C1S204`); appendText; 
   You`"But think about our situation right now."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO10ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S205`); appendText; 
   Sora`"I agree with You."`;
   waitForClick; clearText; marker; sound(`C1S206`); appendText; 
   Sora`"There is no one here with specialty knowledge 
of this disorder nor capable of counseling."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S207`); appendText; 
   Sora`"In other words...if the Kid's condition were 
to worsen, there is nothing we could do to 
help him."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU01BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S208`); appendText; 
   You`"So we have to stick with what we've got."`;
   waitForClick; clearText; marker; sound(`C1S209`); appendText; 
   You`"He can still get his memory back after we get 
out of here."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara and Takeshi didn't looked satisfied.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe I had gotten used to this kind of thing. 
My head didn't hurt and I didn't feel confused.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I was terribly tired.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was absolutely beat and there was no way 
I was getting any closer to my memory.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My memory was like a lone island shrouded 
in a fog.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SA03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S210`); appendText; 
   Sara`"Well, if that's what you think... 
then that's fine."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S211`); appendText; 
   Sara`"Besides...we've got things to find before his 
memory."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU05BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S212`); appendText; 
   You`"Things to find?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S213`); appendText; 
   Sora`"She is referring to Tsugumi."`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`The five of us went in the Security Office.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi was there.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `TU08ADM`, name2: `KB07ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S214`); appendText; 
   Tsugumi`"What are you guys doing here?"`;
   waitForClick; clearText; marker; sound(`C1S215`); appendText; 
   Takeshi`"What are YOU doing here?"`;
   waitForClick; clearText; marker; sound(`C1S216`); appendText; 
   Tsugumi`"Do you want me to tell you?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S217`); appendText; 
   Takeshi`"Yeah."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S218`); appendText; 
   Tsugumi`"I was trying to find out what you are 
plotting."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S219`); appendText; 
   Takeshi`"Oh...you're still stuck on that, huh?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S220`); appendText; 
   Takeshi`"Are you sick in the head? Paranoid maybe?"`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `YU05BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S221`); appendText; 
   You`"Let her look. That'll be the best anyway."`;
   waitForClick; clearText; marker; sound(`C1S222`); appendText; 
   You`"Then she'll realize that we are not scheming 
anything."`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SA05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S223`); appendText; 
   Sara`"Tsugumi, what is it you are so suspicious 
about?"`;
   waitForClick; clearText; marker; sound(`C1S224`); appendText; 
   Sara`"What do you think we did?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S225`); appendText; 
   Tsugumi`"It has nothing to do with you."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA04ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S226`); appendText; 
   Sara`"Don't say that!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S227`); appendText; 
   Sara`"I wish you...wouldn't talk like that..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara clenched her fist and her shoulders shook.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S228`); appendText; 
   Tsugumi`"That's not what I meant."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S229`); appendText; 
   Sara`"...Huh?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S230`); appendText; 
   Tsugumi`"You...your name is Sara, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S231`); appendText; 
   Sara`"Y...yes."`;
   waitForClick; clearText; marker; sound(`C1S232`); appendText; 
   Tsugumi`"I'm not suspicious of you, Sara."`;
   waitForClick; clearText; marker; sound(`C1S233`); appendText; 
   Tsugumi`"So this thing has nothing to do with you."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S234`); appendText; 
   Sara`"What do you mean?"`;
   waitForClick; clearText; marker; sound(`C1S235`); appendText; 
   Tsugumi`"You came here on a field trip or something, 
right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S236`); appendText; 
   Tsugumi`"So...you are here by chance."`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SO07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S237`); appendText; 
   Sora`"It would also seem that You, Takeshi, the 
Kid, and everyone also failed to 
escape 'by chance.'"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S238`); appendText; 
   Tsugumi`"What are you saying?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU04ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S239`); appendText; 
   Tsugumi`"There is no way that something like this 
could occur by chance."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"What do you mean 'something like this'?"`;
   waitForClick; clearText; marker; sound(`C1S240`); appendText; 
   Tsugumi`"Everything! Everything that is happening 
here!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So, you're saying that the accident and all 
didn't happen by chance?"`;
   waitForClick; clearText; marker; sound(`C1S241`); appendText; 
   Tsugumi`"Of course that's what I mean."`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `KB08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S242`); appendText; 
   Takeshi`"You mean, like, somebody planned it?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S243`); appendText; 
   Tsugumi`"Not somebody.... YOU ALL did."`;
   waitForClick; clearText; 
});
stopBGM();
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `YU09BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S244`); appendText; 
   You`"AH, HA, HA, HA...."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S245`); appendText; 
   Tsugumi`"W-what is so funny?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU01BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S246`); appendText; 
   You`"It's...I mean..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU08BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S247`); appendText; 
   You`"You have to laugh."`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU01BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S248`); appendText; 
   You`"Hey, Takeshi. How old are you?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KB07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S249`); appendText; 
   Takeshi`"Who? Me? I'm 20."`;
   waitForClick; clearText; marker; sound(`C1S250`); appendText; 
   You`"I'm 18."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU07BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S251`); appendText; 
   You`"Nobody knows the Kid's age...but he's 
definitely younger than me."`;
   waitForClick; clearText; marker; sound(`C1S252`); appendText; 
   You`"You think the three of us could cause this 
kind of massive accident?"`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU05ADM`, x: 128, useAnim: true });
playBGM({ num: 4, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`C1S253`); appendText; 
   Tsugumi`"Well, with just the three of you it might be 
impossible."`;
   waitForClick; clearText; marker; sound(`C1S254`); appendText; 
   Tsugumi`"But..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S255`); appendText; 
   Tsugumi`"But Sora ? Sora could do it."`;
   waitForClick; clearText; marker; sound(`C1S256`); appendText; 
   Sara`"Sora?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU06BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S257`); appendText; 
   You`"Sora?"`;
   waitForClick; clearText; marker; sound(`C1S258`); appendText; 
   Takeshi`"Sora?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sora could?"`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SO06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Sora`"..............."`;
   waitForClick; clearText; marker; sound(`C1S259`); appendText; 
   Tsugumi`"Sora is one of LeMMIH's programs."`;
   waitForClick; clearText; marker; sound(`C1S260`); appendText; 
   Tsugumi`"The only one that could do whatever they 
wanted with the LeMU system is you, Sora."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S261`); appendText; 
   Sora`"I...I...I..."`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SA04ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S262`); appendText; 
   Sara`"Tsugumi! Don't be stupid!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU04ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S263`); appendText; 
   Tsugumi`"I've already told you, I'm not saying this 
has anything to do with you Sara."`;
   waitForClick; clearText; marker; sound(`C1S264`); appendText; 
   Sara`"Of course it has to do with me!"`;
   waitForClick; clearText; marker; sound(`C1S265`); appendText; 
   Sara`"Everybody that is here right now is working 
together to get out of here!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S266`); appendText; 
   Sara`"We're not just strangers anymore!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S267`); appendText; 
   Sara`"But...but you just..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S268`); appendText; 
   Sara`"Anyway, I want you to quit spouting out these 
crazy ideas to everyone."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S269`); appendText; 
   Sara`"You've got it all wrong..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara stared intensely at Tsugumi.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi avoided her eyes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a period of awkward silence...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone scanned each other's faces trying to 
gauge what the others were thinking.`;
   waitForClick; clearText; marker; sound(`C1S270`); appendText; 
   Tsugumi`"I'm sorry, Sara..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 2, name: `SA08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi left the Security Office with her eyes 
down.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S271`); appendText; 
   You`"Tsugumi, wait!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA04ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S272`); appendText; 
   Sara`"Tsugumi!"`;
   waitForClick; clearText; 
});
hideTextbox();
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You and Sara dashed out of the room after 
Tsugumi.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That left Sora, Takeshi and I.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Again silence enveloped us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We tried to get rid of the awkwardness by 
staring at the monitors, picking our nails and 
fiddling with the lint on our clothes.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S273`); appendText; 
   Sora`"Well...I'll go back to the Control Room."`;
   waitForClick; clearText; marker; sound(`C1S274`); appendText; 
   Sora`"As soon as I learn anything, I will contact 
everyone..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora left Takeshi and I, leaving us with those 
words.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi looked at me and shrugged.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 2, volume: 100 });
fgload({ id: 1, name: `KB03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S275`); appendText; 
   Takeshi`"Here we go again..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S276`); appendText; 
   Takeshi`"Okay, whaddya wanna do?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What do you mean?"`;
   waitForClick; clearText; marker; sound(`C1S277`); appendText; 
   Takeshi`"Should we go after Tsugumi?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I think the same thing would just happen 
again..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S278`); appendText; 
   Takeshi`"Then, what?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I don't know..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S279`); appendText; 
   Takeshi`"For now, we could take a look around."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah. We still haven't figured out the 
problem with the life scan number."`;
   waitForClick; clearText; marker; sound(`C1S280`); appendText; 
   Takeshi`"You mean that mystery somebody, the one who 
didn't escape?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah. So let's check around LeMU one more 
time..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C1S281`); appendText; 
   Takeshi`"You wanna split up and look?"`;
   waitForClick; clearText; marker; sound(`C1S282`); appendText; 
   Takeshi`"I could take the bottom floor and you could 
take Zweite stock..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sounds good."`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`So Takeshi and I split up to search.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We agreed to meet up at 9:30 p.m.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We were to meet in front of the 
Security Office.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`I looked around Zweite stock.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Is there anybody there? If so, answer me!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I made the rounds of all the rooms...`;
   waitForClick; clearText; marker; appendText; 
   Narr`...But I didn't find anyone.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And it was about time to meet up with Takeshi.`;
   waitForClick; clearText; 
});
bgload({ name: `BG29A1`, transition: 20 });
clock(`21:35`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I headed to in front of the Security Office.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But...`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi was nowhere to be seen.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey! Takeshi!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I called out to him, but there was no answer.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Glancing at the door of the Security Office, 
I saw that it was open.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I decided to peek inside.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
bgload({ name: `BG11A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But there was no one there...`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey! Sora! Do you know where Takeshi went?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I called out to the empty ceiling.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was betting that Sora might be monitoring me 
from the Control Room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But it didn't pan out...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The speakers in the ceiling remained painfully 
silent.`;
   waitForClick; clearText; 
});
varop(`(28 0a a4) b3 := (00) 1`);
jump(`S_1C`);
