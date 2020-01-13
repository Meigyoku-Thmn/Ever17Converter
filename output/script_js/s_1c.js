goto(lbl_000005fa).if(var_b3 == 1);
goto(lbl_000011d2).if(var_b3 == 2);
goto(lbl_000018ec).if(var_b3 == 3);
setDialogBoxColor(BLUE);
varop(`(28 0a a4) b0 := (00) 5`);
varop(`(28 0a a4) b1 := (00) 1`);
varop(`(28 0a a4) b2 := (00) 1`);
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
   waitForClick; clearText; marker; sound(`S1C000`); appendText; 
   //Sora
   Sora`"Right now, Tsugumi..."`;
   waitForClick; clearText; marker; sound(`S1C001`); appendText; 
   //Sora
   Sora`"...seems to be in the Security Office."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I figured Sora was using the complex intercom 
system to announce Tsugumi's location.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C002`); appendText; 
   //Takeshi
   Takeshi`"Got it. The Security Office, huh?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi said this toward the ceiling.`;
   waitForClick; clearText; 
});
bgload({ name: `BG26A3R`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`On the way to the office...`;
   waitForClick; clearText; marker; appendText; 
   Narr`You said - `;
   waitForClick; clearText; 
});
multifgload3({ name1: `SA01ADS`, name2: `YU01BDS`, name3: `KB01ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`S1C003`); appendText; 
   //You
   You`"Hey, Takeshi, I've got an idea..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C004`); appendText; 
   //Takeshi
   Takeshi`"?"`;
   waitForClick; clearText; marker; sound(`S1C005`); appendText; 
   //You
   You`"I think this kinda thing is, well, better 
with just girls."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KB07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C006`); appendText; 
   //Takeshi
   Takeshi`"Just girls?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU05BDS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C007`); appendText; 
   //You
   You`"I think just Mayo and I should go."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C008`); appendText; 
   //You
   You`"That way it might be easier to talk to 
Tsugumi..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU01BDS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C009`); appendText; 
   //You
   You`"Mayo, you're okay with that, yeah?"`;
   waitForClick; clearText; marker; sound(`S1C010`); appendText; 
   //Sara
   Sara`"Sure, I'm fine with that."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Why can't Takeshi and I come along?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU05BDS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C011`); appendText; 
   //You
   You`"This kinda thing gets messy when there are 
guys around."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C012`); appendText; 
   //Sara
   Sara`"Four against one triggers fear, you know? 
Fight or flight reactions."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU01BDS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C013`); appendText; 
   //You
   You`"That and...let's call it female intuition."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Intuition?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU02BDS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C014`); appendText; 
   //You
   You`"I've gotta hunch that Mayo and I can fix this 
misunderstanding."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KB08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C015`); appendText; 
   //Takeshi
   Takeshi`"Misunderstanding, huh...?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU05BDS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C016`); appendText; 
   //You
   You`"That's what it is, isn't it? We haven't done 
anything to make her angry, so..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"That's true."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"It might be better to just let the two girls 
go, instead of going in a group."`;
   waitForClick; clearText; marker; appendText; 
   Narr`For some reason, I didn't have any confidence 
in my ability to get Tsugumi to open up to us, 
and I was sure that type of thing wasn't one 
of Takeshi's strong points either.`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `KB02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C017`); appendText; 
   //Takeshi
   Takeshi`"Then, I guess we'll leave it up to you."`;
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
   Narr`So with that, You and Sara headed to the 
Security Office.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi and I were left in the middle of the 
corridor...`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG25A3`, transition: 26 });
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: false });
playBGM({ num: 2, volume: 100 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`...at a loss of what to do.`;
   waitForClick; clearText; marker; sound(`S1C018`); appendText; 
   //Takeshi
   Takeshi`"So...what now?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"What do you say?"`;
   waitForClick; clearText; marker; sound(`S1C019`); appendText; 
   //Takeshi
   Takeshi`"Wanna wait in front of the Security Office?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I don't think that would accomplish anything, 
but..."`;
   waitForClick; clearText; marker; sound(`S1C020`); appendText; 
   //Takeshi
   Takeshi`"Then, what?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I don't know..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C021`); appendText; 
   //Takeshi
   Takeshi`"For now, we could take a look around."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I've had enough of that."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C022`); appendText; 
   //Takeshi
   Takeshi`"Well I haven't."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"You, Sara and I walked so much that we just 
about wore holes in our shoes."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Zweite stock and Dritte stock - everything."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C023`); appendText; 
   //Takeshi
   Takeshi`"In that case, why don't we give the 
merry-go-round a shot?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I don't know. Two guys on the 
merry-go-round sounds kinda..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C024`); appendText; 
   //Takeshi
   Takeshi`"Yeah..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C025`); appendText; 
   //Takeshi
   Takeshi`"Well anyway, I've decided to take a look 
around inside LeMU."`;
   waitForClick; clearText; marker; sound(`S1C026`); appendText; 
   //Takeshi
   Takeshi`"I'm the kind of guy that just has to see 
things with his own two eyes."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
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
   Narr`We were to meet in front of the Security 
Office.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG16A1`, transition: 26 });
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: false });
playBGM({ num: 14, volume: 100 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`21:19`);
showTextbox();
text(() => {
   marker; sound(`S1C027`); appendText; 
   //Sora
   Sora`"LeMU has three layers below the ocean's 
surface."`;
   waitForClick; clearText; marker; sound(`S1C028`); appendText; 
   //Sora
   Sora`"Erste boden, Zweite stock, Dritte stock..."`;
   waitForClick; clearText; marker; sound(`S1C029`); appendText; 
   //Sora
   Sora`"There are 17 meters between each floor. 
If you go down a floor, then you go 17 
meters or 51 feet deeper."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S1C030`); appendText; 
   //Sora
   Sora`"Thus, the third floor, Dritte stock, 
is located at 51 meters or 103 feet depth."`;
   waitForClick; clearText; marker; appendText; 
   Narr`With all of this time on my hands, I visited 
Sora in the Control Room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora politely and in an easy to understand way 
explained to me about LeMU which I knew almost 
nothing.`;
   waitForClick; clearText; marker; sound(`S1C031`); appendText; 
   //Sora
   Sora`"Outside of Dritte is a total of 6 atmospheres 
of pressure, 5 atmospheres water pressure 
and 1 atmosphere air pressure."`;
   waitForClick; clearText; marker; sound(`S1C032`); appendText; 
   //Sora
   Sora`"Even if hypothetically, you were to suddenly 
go out into the ocean from Dritte..."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S1C033`); appendText; 
   //Sora
   Sora`"Your lungs would be crushed to about 
one-sixth of their size, and approximately 
five-sixth of your lungs would be flooded. 
You would likely die in a matter of minutes."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Uh, can I ask a question?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S1C034`); appendText; 
   //Sora
   Sora`"Go ahead..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"How much pressure exactly is 5 atmospheres of 
water pressure? It is hard to imagine..."`;
   waitForClick; clearText; marker; sound(`S1C035`); appendText; 
   //Sora
   Sora`"1 atmosphere is one kilogram of weight per 
square centimeter."`;
   waitForClick; clearText; marker; sound(`S1C036`); appendText; 
   //Sora
   Sora`"The difference in pressure inside and outside 
of LeMU is 5 atmospheres, or a multiple of 
five. Please think of it as five kilograms or 
around 11 pounds of weight per square inch."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Five kilograms of weight per square inch..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"So for each meter it would be 100 times 
100 or..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Fifty tons!?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S1C037`); appendText; 
   //Sora
   Sora`"That's correct."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"B-but..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"What about those people that skin dive?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"They can dive to depths of about 90 feet, 
right?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S1C038`); appendText; 
   //Sora
   Sora`"The current world record for free diving is 
150 meters or around 450 feet."`;
   waitForClick; clearText; marker; sound(`S1C039`); appendText; 
   //Sora
   Sora`"With an aqualung and pauses along the way, 
probably just about anyone could dive around 
105 feet."`;
   waitForClick; clearText; marker; sound(`S1C040`); appendText; 
   //Sora
   Sora`"However, the air sent to your lungs would be 
highly pressurized gas."`;
   waitForClick; clearText; marker; sound(`S1C041`); appendText; 
   //Sora
   Sora`"But with skin diving, they don't stop to 
breathe along the way. Amateurs can't 
make it past 65 feet."`;
   waitForClick; clearText; marker; sound(`S1C042`); appendText; 
   //Sora
   Sora`"Any deeper than that requires intensive 
training."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Wow. Is that right...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C043`); appendText; 
   //Sora
   Sora`"And there is one other important thing."`;
   waitForClick; clearText; marker; sound(`S1C044`); appendText; 
   //Sora
   Sora`"Even if you can withstand the water 
pressure..."`;
   waitForClick; clearText; marker; sound(`S1C045`); appendText; 
   //Sora
   Sora`"Could you really swim the 167 feet to 
the surface?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"51 meters?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"How high is that...51 meters?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C046`); appendText; 
   //Sora
   Sora`"Imagine a 15-story building."`;
   waitForClick; clearText; marker; sound(`S1C047`); appendText; 
   //Sora
   Sora`"Or five three-story school buildings stacked 
upon each other."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Five schools stacked..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"No way. I couldn't swim that."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C048`); appendText; 
   //Sora
   Sora`"Well, then how about a building with 
10 stories?"`;
   waitForClick; clearText; marker; sound(`S1C049`); appendText; 
   //Sora
   Sora`"A depth of 34 meters or just over 
100 feet...that is the depth of Zweite stock."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"34 meters, huh?"`;
   waitForClick; 
});
choice(
   `Even that would be impossible`
   `I might be able to handle that`
);
switch (choice) {
   case 0: goto(lbl_000004b3);
   case 1: goto(lbl_000004ea);
}
let lbl_000004b3;
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"I think even that would be impossible."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C050`); appendText; 
   //Sora
   Sora`"I think you are probably correct."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"So basically, what you're trying to say is 
that we can't escape by swimming. Right, Sora?"`;
   waitForClick; clearText; marker; sound(`S1C051`); appendText; 
   //Sora
   Sora`"Yes."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I guess in the end all we can do is wait 
for help to arrive."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C052`); appendText; 
   //Sora
   Sora`"That's what it comes down to."`;
   waitForClick; clearText; 
});
goto(lbl_0000058d);
let lbl_000004ea;
varop(`(28 0a a4) e0 := (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"Well...somehow I think I could..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C053`); appendText; 
   //Sora
   Sora`"What? You'd have to swim it, you know. 
This isn't walking or running."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"But...34 meters or 102 feet...that is like 
right over there..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Well I would float...actually I think it 
would be easier than climbing the distance 
on land."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C054`); appendText; 
   //Sora
   Sora`"You don't have any idea how severe water 
pressure is at 34 meters depth, do you Kid?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Huh? N-now hold on just a minute..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Just a second ago...you were talking about 
even if one could endure the water pressure."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C055`); appendText; 
   //Sora
   Sora`"That type of hypothetical talk is 
meaningless."`;
   waitForClick; clearText; marker; sound(`S1C056`); appendText; 
   //Sora
   Sora`"You can't discuss this problem without water 
pressure."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"But, Sora, you said..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C057`); appendText; 
   //Sora
   Sora`"Listen. Try to imagine it just one more time."`;
   waitForClick; clearText; marker; sound(`S1C058`); appendText; 
   //Sora
   Sora`"You are 102 feet deep...could you swim to 
the top of a 10 floor building?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was a severe edge to Sora's way of 
putting it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt like there was something of a warning 
contained within her words.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"...S-Sora, you don't..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"You don't really think that I would try 
to break out of Zweite stock and swim to 
freedom, do you?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S1C059`); appendText; 
   //Sora
   Sora`"You wouldn't, would you?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Ha,ha,ha. No way."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Why would I do anything that reckless and 
crazy?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C060`); appendText; 
   //Sora
   Sora`"Well, I should hope not..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"It's fine. I understand."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Right now all we can do is patiently wait for 
help...right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C061`); appendText; 
   //Sora
   Sora`"That's right."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Saying that, Sora gave a big nod.`;
   waitForClick; clearText; 
});
goto(lbl_0000058d);
let lbl_0000058d;
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
setSceneTitle({ index: 53 });
bgload({ name: `BG29A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`21:35`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`As I was so involved in my chat with Sora, 
I had missed the appointed meeting time.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I left the Control Room and headed toward the 
meeting point ? in front of the Security 
Office.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But...`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi wasn't there.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Hey! Takeshi!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tried to call out to him, but there 
was no reply.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Glancing at the Security Office, I noticed 
that the door was wide open.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I decided to take a peek in the room.`;
   waitForClick; clearText; 
});
bgload({ name: `BG11A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`No one was there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Not You, Sara, nor Tsugumi.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Hey Sora! Sora, everybody? Where are you?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked up at the bare ceiling and called out.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I figured Sora would be in the Control Room 
monitoring me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But apparently she wasn't...`;
   waitForClick; clearText; marker; appendText; 
   Narr`There were no sounds from the speakers on the 
ceiling.`;
   waitForClick; clearText; 
});
let lbl_000005fa;
bgload({ name: `BG26A3R`, transition: 20 });
playBGM({ num: 1, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"Hmmm. I wonder what I should do."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought as I wandered walking through the 
corridors.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`First...`;
   waitForClick; 
});
varop(`(28 0a a4) d0 := (00) 1`);
varop(`(28 0a a4) d1 := (00) 1`);
varop(`(28 0a a4) d2 := (00) 1`);
varop(`(28 0a a4) d3 := (00) 1`);
varop(`(28 0a a4) d4 := (00) 0`);
varop(`(28 0a a4) bb := (00) 0`);
varop(`(28 0a a4) bc := (00) 0`);
goto(lbl_0000073a);
let lbl_00000693;
goto(lbl_000006c8).if(var_bb == 0);
goto(lbl_000006c8).if(var_bc != 0);
varop(`(28 0a a4) d4 := (00) 1`);
let lbl_000006c8;
goto(lbl_00000735).if(var_d0 != 0);
goto(lbl_00000735).if(var_d1 != 0);
goto(lbl_00000735).if(var_d2 != 0);
goto(lbl_00000735).if(var_d3 != 0);
goto(lbl_00000735).if(var_d4 != 0);
goto(lbl_00001538);
let lbl_00000735;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I thought I would go somewhere else.`;
   waitForClick; 
});
let lbl_0000073a;
choice(
   cond(`[cond (28 0a a4) d0 14 (00)]To the merry-go-round`, var_d0)
   cond(`[cond (28 0a a4) d1 14 (00)]To the Jellyfish Gondola`, var_d1)
   cond(`[cond (28 0a a4) d2 14 (00)]To the warehouse`, var_d2)
   cond(`[cond (28 0a a4) d3 14 (00)]To the Control Room`, var_d3)
   cond(`[cond (28 0a a4) d4 14 (00)]To the Security Office`, var_d4)
);
showTextbox();
text(() => {
   marker; appendText; clearText; 
});
hideTextbox();
switch (choice) {
   case 0: goto(lbl_00000779);
   case 1: goto(lbl_00000b42);
   case 2: goto(lbl_00000d3b);
   case 3: goto(lbl_00000ef2);
   case 4: goto(lbl_000011d6);
}
let lbl_00000779;
bgload({ name: `MAP2F_A1`, transition: 30 });
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 0 });
openMapCommentAnim();
waitForClick();
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP2F_A1`, transition: 30 });
unSkippableDelay(1);
removeBG({ mode: BLACK, transition: 02 });
bgload({ name: `BG02A1`, transition: 20 });
varop(`(28 0a a4) e1 := (00) 1`);
varop(`(28 0a a4) d0 := (00) 0`);
varop(`(28 0a a4) bb := (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The merry-go-round`;
   waitForClick; clearText; marker; appendText; 
   Narr`Several dozen dolphins were connected in a 
circle.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There were no horses. No carriages. 
There were no children's voices.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And the blue ocean was just one paneling 
of wall away...`;
   waitForClick; clearText; marker; appendText; 
   Narr`We were all trapped in this place...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Thinking this, it was hard to believe that the 
scenery spreading before me was reality.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(What...what am I doing here...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`That thought popped into my mind.`;
   waitForClick; clearText; marker; appendText; 
   Narr`What I was experiencing right now seemed much 
more bizarre to me than the fact that I'd lost 
my memory.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In other words, my doubts about the past were 
less than my sense of unease about the present.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was overcome by a sense that my existence 
was floating away.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 5, volume: 100 });
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C062`); appendText; 
   //You
   You`"Hey, Kid."`;
   waitForClick; clearText; marker; sound(`S1C063`); appendText; 
   //You
   You`"Are you spacing out there?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You was peeking out at me from the shadow of 
a rock.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Uh, not exactly..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C064`); appendText; 
   //You
   You`"Really?"`;
   waitForClick; clearText; 
});
goto(lbl_0000087b).if(var_e2 == 0);
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"Oh. I talked to Sara and she said that things 
were no good with Tsugumi."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C065`); appendText; 
   //You
   You`"Well...you could say that."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"What exactly happened?"`;
   waitForClick; clearText; 
});
goto(lbl_00000880);
let lbl_0000087b;
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"That reminds me, so how were things with 
Tsugumi?"`;
   waitForClick; clearText; 
});
let lbl_00000880;
showTextbox();
text(() => {
   marker; sound(`S1C066`); appendText; 
   //You
   You`"Well..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C067`); appendText; 
   //You
   You`"In a nutshell, it was like we whiffed."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"What do you mean?"`;
   waitForClick; clearText; marker; sound(`S1C068`); appendText; 
   //You
   You`"We started with light conversation about how 
old she was, where she lived, if she was 
hungry. We were biding our time waiting 
for the right pitch."`;
   waitForClick; clearText; marker; sound(`S1C069`); appendText; 
   //You
   You`"Ultimately...Mayo asked her straight out 'Why 
are you so mad?'..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"And? What did she say?"`;
   waitForClick; clearText; marker; sound(`S1C070`); appendText; 
   //You
   You`"I said we whiffed, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C071`); appendText; 
   //You
   You`"It was like we waited and waited for a good 
pitch. But we didn't get anything 
so we swung."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"So it was a big zero?"`;
   waitForClick; clearText; marker; sound(`S1C072`); appendText; 
   //You
   You`"I don't know if it was a zero. 
But we sure didn't hit a home run."`;
   waitForClick; clearText; marker; sound(`S1C073`); appendText; 
   //You
   You`"All we can do is wait for her to get careless 
and throw the right pitch."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`And get her out...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C074`); appendText; 
   //You
   You`No, get a hit.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"???"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C075`); appendText; 
   //You
   You`"I just wanted to get a sense...to feel what 
she is all about."`;
   waitForClick; clearText; marker; sound(`S1C076`); appendText; 
   //You
   You`"Reasons aside, there is just something not 
pleasant about being disliked."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Saying that, You started walking.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She got on the platform of the merry-go-round 
and petted the fin of a dolphin.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I followed after You and jumped on the back 
of a dolphin.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C077`); appendText; 
   //You
   You`"Kid, incidentally, what were you doing here?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I was looking for everyone. When I went to 
the Security Office, nobody was there..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"What about you, You? What were you doing?"`;
   waitForClick; clearText; marker; sound(`S1C078`); appendText; 
   //You
   You`"I was just hanging around this area, near the 
merry-go-round."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C079`); appendText; 
   //You
   You`"I just wanted to be alone, so..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Alone?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You cast a lonely look at the dolphin as she 
patted its smooth skin.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C080`); appendText; 
   //You
   You`"Hey. Why doesn't this dolphin move?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Probably because it's not turned on. There 
should be an operating panel around somewhere."`;
   waitForClick; clearText; marker; sound(`S1C081`); appendText; 
   //You
   You`"You think if we turn it on, then the dolphin 
will move?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Yeah, probably."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C082`); appendText; 
   //You
   You`"And swim in the ocean and catch fish and 
stuff?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"...What?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C083`); appendText; 
   //You
   You`"I was just thinking..."`;
   waitForClick; clearText; marker; sound(`S1C084`); appendText; 
   //You
   You`"Because inside LeMU there are dolphins and 
whales and fish and clams and octopus. 
There are even jellyfish and sea anemones, 
but..."`;
   waitForClick; clearText; marker; sound(`S1C085`); appendText; 
   //You
   You`"But none of them are real living creatures."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Of course not. They were all made 
by people..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C086`); appendText; 
   //You
   You`"I wonder?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C087`); appendText; 
   //You
   You`"For example, deep in a forest it would be 
harder to find something that is not alive 
than something that is, right?"`;
   waitForClick; clearText; marker; sound(`S1C088`); appendText; 
   //You
   You`"There are trees and grass, birds and bugs, 
soil and little living creatures inside of it. 
Everything is alive."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C089`); appendText; 
   //You
   You`"But how about here?"`;
   waitForClick; clearText; marker; sound(`S1C090`); appendText; 
   //You
   You`"The only thing that is alive in this vast 
space is us."`;
   waitForClick; clearText; marker; sound(`S1C091`); appendText; 
   //You
   You`"And they call this an underwater paradise? A 
'Utopia'?"`;
   waitForClick; clearText; marker; sound(`S1C092`); appendText; 
   //You
   You`"So in this 'Utopia' living things are 
outnumbered by nonliving things."`;
   waitForClick; clearText; marker; sound(`S1C093`); appendText; 
   //You
   You`"Which in a way means we are..."`;
   waitForClick; clearText; marker; sound(`S1C094`); appendText; 
   //You
   You`"We are 'intruders' in this world of the dead."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You petted the dolphin.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The dolphin's deformed, plastic smile didn't 
move at all.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A steel rod was stuck into its belly.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Do you hate LeMU, You?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C095`); appendText; 
   //You
   You`"Well..."`;
   waitForClick; clearText; marker; sound(`S1C096`); appendText; 
   //You
   You`"It's hard to say..."`;
   waitForClick; clearText; marker; sound(`S1C097`); appendText; 
   //You
   You`"It's not that I like or dislike it..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"But you liked it enough to start working 
here, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C098`); appendText; 
   //You
   You`"No."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"No? You didn't?"`;
   waitForClick; clearText; marker; sound(`S1C099`); appendText; 
   //You
   You`"No."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Well, then why...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU17BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`With my question, You tilted her head.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Then she just clammed up and started wandering 
around one of the dolphins.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Finally her feet stopped and You quietly 
faced me.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C100`); appendText; 
   //You
   You`"I'm looking for something important."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Something important?"`;
   waitForClick; clearText; marker; sound(`S1C101`); appendText; 
   //You
   You`"A clue about my father."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"???"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C102`); appendText; 
   //You
   You`"Actually, my father worked in the Research 
and Development Division of LeMU."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Research and development?"`;
   waitForClick; clearText; marker; sound(`S1C103`); appendText; 
   //You
   You`"I don't know the details..."`;
   waitForClick; clearText; marker; sound(`S1C104`); appendText; 
   //You
   You`"It seems like my father made the LeMMIH 
program."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"LeMMIH...LeMMIH? Wasn't that LeMU's central 
computer?"`;
   waitForClick; clearText; marker; sound(`S1C105`); appendText; 
   //You
   You`"Yeah."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C106`); appendText; 
   //You
   You`"Of course, he didn't do it alone."`;
   waitForClick; clearText; marker; sound(`S1C107`); appendText; 
   //You
   You`"He was one of the members involved in 
developing the project."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Huh? Is that so...?_"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"But what did you mean by clue?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C108`); appendText; 
   //You
   You`"My father..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C109`); appendText; 
   //You
   You`"My father...disappeared one day."`;
   waitForClick; clearText; 
});
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"...What?"`;
   waitForClick; clearText; marker; sound(`S1C110`); appendText; 
   //You
   You`"He just went missing..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"W-when?"`;
   waitForClick; clearText; marker; sound(`S1C111`); appendText; 
   //You
   You`"He...."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU17BDL`, x: 320, useAnim: true });
playBGM({ num: 19, volume: 97 });
showTextbox();
text(() => {
   marker; sound(`S1C112`); appendText; 
   //You
   You`"He has been missing as long as I can 
remember..."`;
   waitForClick; clearText; marker; sound(`S1C113`); appendText; 
   //You
   You`"It was when I was one year old, 17 years 
ago..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"So you don't remember...your father?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C114`); appendText; 
   //You
   You`"No..."`;
   waitForClick; clearText; marker; sound(`S1C115`); appendText; 
   //You
   You`"I've only seen pictures and movies of him..."`;
   waitForClick; clearText; marker; sound(`S1C116`); appendText; 
   //You
   You`"I don't really have any memories..."`;
   waitForClick; clearText; marker; sound(`S1C117`); appendText; 
   //You
   You`"Everything I just told you I heard from my 
mother..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"But why? Why did he disappear?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C118`); appendText; 
   //You
   You`"If I knew that, I wouldn't have come here."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"What do you mean?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C119`); appendText; 
   //You
   You`"The last time my father was seen was in LeMU."`;
   waitForClick; clearText; marker; sound(`S1C120`); appendText; 
   //You
   You`"So I thought that if I came here maybe 
I would find some clue about my father..."`;
   waitForClick; clearText; marker; sound(`S1C121`); appendText; 
   //You
   You`"It seems like my mom has already given up, 
so I can't count on her..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"...?"`;
   waitForClick; clearText; marker; sound(`S1C122`); appendText; 
   //You
   You`"My mom has convinced herself that my dad is 
dead..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The word 'dead' had a heavy ring to it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You looked straight at me as her eyes watered.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C123`); appendText; 
   //You
   You`"But...but..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C124`); appendText; 
   //You
   You`"I believe!"`;
   waitForClick; clearText; marker; sound(`S1C125`); appendText; 
   //You
   You`"I believe that he is alive somewhere!"`;
   waitForClick; clearText; marker; sound(`S1C126`); appendText; 
   //You
   You`"He has to be!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C127`); appendText; 
   //You
   You`"My father just went missing...and his remains 
were never found...!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't find any words.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know what to say to her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She might have been waiting for me say 
something like: 'You're right! He's probably 
alive somewhere!'`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I couldn't say it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I just nodded and couldn't even look back 
into her eyes.`;
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
   Narr`Finally...we promised to meet later in the 
Conference Room and split up.`;
   waitForClick; clearText; 
});
goto(lbl_00000693);
let lbl_00000b42;
bgload({ name: `MAP2F_A1`, transition: 30 });
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 1 });
openMapCommentAnim();
waitForClick();
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP2F_A1`, transition: 30 });
unSkippableDelay(1);
removeBG({ mode: BLACK, transition: 02 });
bgload({ name: `BG03A1`, transition: 20 });
varop(`(28 0a a4) d1 := (00) 0`);
varop(`(28 0a a4) bb := (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Next I went to the Jellyfish Gondola.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi was there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her back was to me and she was looking at the 
entrance.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I called out to her loudly.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Want to ride the gondola?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi turned to look at me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But she immediately turned on her heel and 
walked away.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Wait a minute..."`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 7, volume: 100 });
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C128`); appendText; 
   //Tsugumi
   Tsugumi`"I already told you."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"?"`;
   waitForClick; clearText; marker; sound(`S1C129`); appendText; 
   //Tsugumi
   Tsugumi`"I said don't ever talk to me again."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"But..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi started walking again.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Hey! I said wait!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU04ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C130`); appendText; 
   //Tsugumi
   Tsugumi`"What is it? You are so irritating!"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"You met You and Sara, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C131`); appendText; 
   //Tsugumi
   Tsugumi`"So what?"`;
   waitForClick; clearText; 
});
goto(lbl_00000c5b).if(var_e1 != 0);
goto(lbl_00000c5b).if(var_e2 != 0);
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"What did you talk about?"`;
   waitForClick; clearText; 
});
goto(lbl_00000c60);
let lbl_00000c5b;
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"Why didn't you listen to them?"`;
   waitForClick; clearText; 
});
let lbl_00000c60;
showTextbox();
text(() => {
   marker; sound(`S1C132`); appendText; 
   //Tsugumi
   Tsugumi`"It's none of your business..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C133`); appendText; 
   //Tsugumi
   Tsugumi`"Is that why you stopped me?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"No..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"The real reason is something else..."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Before you said something about 'those guys' 
or something, right?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"What...did you mean by that?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi stared at me intently.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She narrowed her eyes almost as if 
appraising me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Intimidated by her intense glare, my body 
stiffened and I swallowed.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C134`); appendText; 
   //Tsugumi
   Tsugumi`"What is with you...?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I don't know."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I wish I did know..."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Tsugumi
   Tsugumi`"..............."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"..............."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C135`); appendText; 
   //Tsugumi
   Tsugumi`"Fine."`;
   waitForClick; clearText; marker; sound(`S1C136`); appendText; 
   //Tsugumi
   Tsugumi`"Well, if you aren't lying...then I'll 
warn you about one thing."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU10ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C137`); appendText; 
   //Tsugumi
   Tsugumi`"Those guys...they are probably using you."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"U...using me?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"So...so who do you mean when you say 
those guys?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C138`); appendText; 
   //Tsugumi
   Tsugumi`"I can't say more than that."`;
   waitForClick; clearText; marker; sound(`S1C139`); appendText; 
   //Tsugumi
   Tsugumi`"I still don't trust you 100 percent yet."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C140`); appendText; 
   //Tsugumi
   Tsugumi`"And I don't want you trusting me either..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C141`); appendText; 
   //Tsugumi
   Tsugumi`"Anyway, look after yourself."`;
   waitForClick; clearText; marker; sound(`S1C142`); appendText; 
   //Tsugumi
   Tsugumi`"If something happens, I'm not going to 
help you..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Saying only that, Tsugumi turned and left.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Having no idea what had just happened, 
I simply stood there.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 01 });
stopBGM();
goto(lbl_00000693);
let lbl_00000d3b;
bgload({ name: `MAP2F_A1`, transition: 30 });
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 10 });
openMapCommentAnim();
waitForClick();
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP2F_A1`, transition: 30 });
unSkippableDelay(1);
removeBG({ mode: BLACK, transition: 02 });
bgload({ name: `BG25A3`, transition: 20 });
varop(`(28 0a a4) e2 := (00) 1`);
varop(`(28 0a a4) d2 := (00) 0`);
varop(`(28 0a a4) bb := (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I wound up in front of the warehouse.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I don't expect anybody is here, but...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(...What's that?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`The watertight door at the entrance was 
slightly open.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was sure it was closed when I had come 
by here with You and everyone.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Is anyone there?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I softly opened the door.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
playSFX({ name: `SE00_01`, a1: 0, volume: 95 });
bgload({ name: `BG13A1`, transition: 26 });
fgload({ id: 1, name: `SA06ADM`, x: 320, useAnim: false });
playBGM({ num: 6, volume: 100 });
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
showTextbox();
text(() => {
   marker; sound(`S1C143`); appendText; 
   //Sara
   Sara`"Ah."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Huh? Sara?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara was inside.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was sitting on top of a pile of boxes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know if I'd surprised her, 
but her face seemed to stiffen.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C144`); appendText; 
   //Sara
   Sara`"Oh, Kid...don't scare me like that."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"S-sorry..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`After shooting me a slight glare, Sara stuck 
her hands in her pockets and dropped to the 
floor.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"But what are you doing here?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C145`); appendText; 
   //Sara
   Sara`"Huh? Oh...I just wanted some time alone."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Alone?"`;
   waitForClick; clearText; 
});
goto(lbl_00000e8d).if(var_e1 == 0);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(You had said almost the same thing...)`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"What happened with Tsugumi?"`;
   waitForClick; clearText; marker; sound(`S1C146`); appendText; 
   //Sara
   Sara`"Nothing really."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Well, you seem pretty down..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C147`); appendText; 
   //Sara
   Sara`"In the end, she didn't tell us anything. 
We were just running in circles...and it wore 
me out..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I see..."`;
   waitForClick; clearText; 
});
goto(lbl_00000ebb);
let lbl_00000e8d;
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C148`); appendText; 
   //Sara
   Sara`"Actually, Nakkyu said that she wanted to be 
alone, so we just went our separate ways."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Hmmm."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Oh, that reminds me, how was Tsugumi?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Sara
   Sara`"..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara sighed slightly and held her hands out, 
palms facing up.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I see..."`;
   waitForClick; clearText; 
});
let lbl_00000ebb;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Feminine intuition aside, not even the two 
girls had been able to get through to her. 
Even though there was no apparent reason for 
Tsugumi to hold a grudge...`;
   waitForClick; clearText; marker; appendText; 
   Narr`What could Tsugumi have been so angry with 
us about?`;
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
   Narr`Finally...we promised to meet later in the 
Conference Room and split up.`;
   waitForClick; clearText; 
});
goto(lbl_00000693);
let lbl_00000ef2;
bgload({ name: `MAP3F_A1`, transition: 30 });
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 6 });
openMapCommentAnim();
waitForClick();
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP3F_A1`, transition: 30 });
unSkippableDelay(1);
removeBG({ mode: BLACK, transition: 02 });
bgload({ name: `BG16A1`, transition: 20 });
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
varop(`(28 0a a4) d3 := (00) 0`);
varop(`(28 0a a4) bb := (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I went to the Control Room again.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"What's up? Any progress?"`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 8, volume: 100 });
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C149`); appendText; 
   //Sora
   Sora`"Unfortunately, no..."`;
   waitForClick; clearText; marker; sound(`S1C150`); appendText; 
   //Sora
   Sora`"It appears that even LeMMIH is not able to 
accurately gauge the situation."`;
   waitForClick; clearText; marker; sound(`S1C151`); appendText; 
   //Sora
   Sora`"This is...it is something that would 
normally be unthinkable."`;
   waitForClick; clearText; 
});
goto(lbl_00001011).if(var_e1 == 0);
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"Oh, that reminds me. Sora, did you know...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C152`); appendText; 
   //Sora
   Sora`"Know? Know what?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"That You's father made LeMMIH."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C153`); appendText; 
   //Sora
   Sora`"Huh? Is that right? That's...news to me."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Of course, he didn't make it all by himself."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"She said her dad was a member of the 
development project team."`;
   waitForClick; clearText; marker; sound(`S1C154`); appendText; 
   //Sora
   Sora`"Is that right...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C155`); appendText; 
   //Sora
   Sora`"That's very interesting."`;
   waitForClick; clearText; 
});
goto(lbl_0000101e);
let lbl_00001011;
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I turned my eyes to the massive monitor behind 
Sora.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A flat map of LeMU's Zweite stock and Dritte 
stock floors was displayed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`LeMMIH was monitoring LeMU, wall-to-wall, 
24 hours a day.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If LeMMIH, couldn't survey the situation, then 
what in the world...?`;
   waitForClick; clearText; 
});
let lbl_0000101e;
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"By the way.... Why is LeMMIH called LeMMIH?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C156`); appendText; 
   //Sora
   Sora`"Oh, haven't I told you?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"No. I haven't heard..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C157`); appendText; 
   //Sora
   Sora`LeMMIH's proper name is...`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S1C158A`); appendText; 
   //Sora
   Sora`"'Leiblich Medizin:Multiverfahren
`;
   waitForSound; sound(`S1C158B`); 
   Narr`Intelligent Hirn System.'
`;
   waitForSound; sound(`S1C158C`); 
   Narr`...actually indicates it."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"Uh...what was that? Can you give it to me one 
more time?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S1C159A`); appendText; 
   //Sora
   Sora`"'Leiblich Medizin:Multiverfahren
`;
   waitForSound; sound(`S1C159B`); appendText; 
   Narr`Intelligent Hirn System.'
`;
   waitForSound; sound(`S1C159C`); appendText; 
   Narr`...actually indicates it."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"What language is that?"`;
   waitForClick; clearText; marker; sound(`S1C160`); appendText; 
   //Sora
   Sora`"It's German."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"What does it mean?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S1C161A`); appendText; 
   //Sora
   Sora`"The first part,`;
   waitForSound; sound(`S1C161B`); appendText; 
   Narr`Leiblich Medizin, indicates
`;
   waitForSound; sound(`S1C161C`); appendText; 
   Narr`the name of a pharmaceutical company."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S1C162`); appendText; 
   //Sora
   Sora`"The bit after that means something along the 
lines of 'parallel processing artificial 
intelligence system.'"`;
   waitForClick; clearText; marker; sound(`S1C163`); appendText; 
   //Sora
   Sora`"The first letter of each word created the 
acronym 'LeMMIH' so they called the 
system 'LeMMIH'."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Uh-huh.... I see."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Hey, there are two things I wanted to 
ask you..."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S1C164`); appendText; 
   //Sora
   Sora`"What might they be?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"That Leibl...,uh...what was it again?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S1C165`); appendText; 
   //Sora
   Sora`"'Leiblich Medizin'...In Japan it is known as 
Leiblich Pharmaceuticals."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"So what is the relationship between Leiblich 
and LeMU?"`;
   waitForClick; clearText; marker; sound(`S1C166`); appendText; 
   //Sora
   Sora`"The company managing this theme park is 
called LeMU."`;
   waitForClick; clearText; marker; sound(`S1C167`); appendText; 
   //Sora
   Sora`"And the largest stockholder is Leiblich 
Medicine."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I see..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"So essentially I guess that Leiblich has the 
right to say whatever happens at LeMU."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S1C168`); appendText; 
   //Sora
   Sora`"I suppose that is a reasonable 
interpretation."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S1C169`); appendText; 
   //Sora
   Sora`"The origin of the name of this theme park..."`;
   waitForClick; clearText; marker; sound(`S1C170`); appendText; 
   //Sora
   Sora`"The official line is that it was 
named after the phantom or lost 
continent Lemuria."`;
   waitForClick; clearText; marker; sound(`S1C171`); appendText; 
   //Sora
   Sora`"But actually I've heard that it's just a 
combination of the first letters of 'Leiblich 
Medizin' and 'Utopie.'"`;
   waitForClick; clearText; marker; sound(`S1C172`); appendText; 
   //Sora
   Sora`"'Utopie' means utopia."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S1C173`); appendText; 
   //Sora
   Sora`"In other words, Leiblich created this place 
to be a dream-like utopia..."`;
   waitForClick; clearText; marker; sound(`S1C174`); appendText; 
   //Sora
   Sora`"So that is why they named it that."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"A utopia, huh...?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S1C175`); appendText; 
   //Sora
   Sora`"And what was your second question?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Uh, well..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"It's about German..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C176`); appendText; 
   //Sora
   Sora`"German?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Yeah."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"You just said that LeMMIH's official name is 
German, right?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"And all around LeMU are these German signs 
and stuff..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I just...I wondered why German..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C177`); appendText; 
   //Sora
   Sora`"That's because Leiblich Pharmaceutical is a 
joint venture between a Japanese and a 
German company."`;
   waitForClick; clearText; marker; sound(`S1C178`); appendText; 
   //Sora
   Sora`"It's headquarters are in Frankfurt and the 
majority of officials are German."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"So that's why it's all in German..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"So Leiblich Pharmaceutical had a pretty 
strong relationship with LeMU then?"`;
   waitForClick; clearText; marker; appendText; 
   //Sora
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Since I'm asking, can I ask one more thing?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S1C179`); appendText; 
   //Sora
   Sora`"Go ahead."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Why did Leiblich Pharmaceutical want to run a 
theme park anyhow?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I mean, we're talking about Leiblich 
Pharmaceutical. They make medicine , right? 
That doesn't seem to have anything to do 
with a theme park."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"And, and this is right in the middle of the 
ocean, right? Why go to all of the 
trouble of..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C180`); appendText; 
   //Sora
   Sora`"Because..."`;
   waitForClick; clearText; marker; sound(`S1C181`); appendText; 
   //Sora
   Sora`"Because..."`;
   waitForClick; clearText; marker; sound(`S1C182`); appendText; 
   //Sora
   Sora`"I'm sorry."`;
   waitForClick; clearText; marker; sound(`S1C183`); appendText; 
   //Sora
   Sora`"I can't answer that question."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"...What?...Why not?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C184`); appendText; 
   //Sora
   Sora`"It is confidential information."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"Confidential?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Ha, ha. What in the..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Who could I possibly tell?"`;
   waitForClick; clearText; marker; appendText; 
   //Sora
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I can't imagine that a 'kid' like me finding 
out could cause any damage."`;
   waitForClick; clearText; marker; appendText; 
   //Sora
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"You really can't even tell little old me?"`;
   waitForClick; clearText; marker; appendText; 
   //Sora
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora had gone quiet and wasn't answering.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Okay. I understand."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"We'll just forget about it..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C185`); appendText; 
   //Sora
   Sora`"I'm really sorry."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"It's alright. You don't have to apologize..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"You have to keep the secret as part of your 
job, right? There's nothing you can do about 
it..."`;
   waitForClick; clearText; marker; appendText; 
   //Sora
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Sora
   Sora`"..............."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"..............."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C186`); appendText; 
   //Sora
   Sora`"Alright. I'll tell you one thing."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C187`); appendText; 
   //Sora
   Sora`"LeMu does not rely on energy provided from 
the outside, but generates all of its energy 
in this complex."`;
   waitForClick; clearText; marker; sound(`S1C188`); appendText; 
   //Sora
   Sora`"And directly under us at a depth of 119 
meters or 357 feet is the seafloor..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C189`); appendText; 
   //Sora
   Sora`"There is a thermal vent on the surface of the 
sea floor, where water several hundred degrees 
is pumped out and heat from that is used to 
operate generators."`;
   waitForClick; clearText; 
});
goto(lbl_00001188).if(var_ba != 2);
varop(`(28 0a a4) b3 := (00) 0`);
jump(`SC1C`);
let lbl_00001188;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I waited for the rest of the explanation.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But Sora didn't say anything more.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"And? What does that have to do with what we 
were just talking about?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora let the question go...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C190`); appendText; 
   //Sora
   Sora`"Do you mind if I get back to work?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Oh? Uh...sorry to bother you."`;
   waitForClick; clearText; marker; appendText; 
   //Sora
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I gave up and left.`;
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
   Narr`LeMU was controlled by a Japanese-German joint 
venture called Leiblich Pharmaceutical...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Why would they build a theme park here?`;
   waitForClick; clearText; marker; appendText; 
   Narr`And what could it have to do with the fact 
that they generated their own energy...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`I left with this mystery spinning in my mind.`;
   waitForClick; clearText; 
});
let lbl_000011d2;
goto(lbl_00000693);
let lbl_000011d6;
bgload({ name: `MAP2F_A1`, transition: 30 });
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 17 });
openMapCommentAnim();
waitForClick();
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP2F_A1`, transition: 30 });
unSkippableDelay(1);
removeBG({ mode: BLACK, transition: 02 });
bgload({ name: `BG11A1`, transition: 20 });
playSFX({ name: `SE00_01`, a1: 1, volume: 100 });
waitForSFX();
varop(`(28 0a a4) d4 := (00) 0`);
varop(`(28 0a a4) bc := (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(Oh...Takeshi!)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was surprised upon returning to the Security 
Office.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi was there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I wonder what he is up to...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`He had both hands on the operating panel and 
was staring into the monitor intently.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was about to call out to him...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I hesitated.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The gaze that Takeshi had leveled on the 
monitor...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was so intense that it made my spine 
tingle...`;
   waitForClick; clearText; marker; appendText; 
   Narr`He had the eyes of a hawk scouring the 
horizon for prey.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"...Take...shi..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I finally got out the words.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi slowly looked back at me.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 18, volume: 100 });
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C191`); appendText; 
   //Takeshi
   Takeshi`"Hey, Kid, you finally made it. I'm beat from 
waiting."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The look on Takeshi's face was his normal old 
goofy expression.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt relieved.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"What were you doing? You looked so intense 
it was scary."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C192`); appendText; 
   //Takeshi
   Takeshi`"Huh? Scary?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Yeah. Just now. You looked scary."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C193`); appendText; 
   //Takeshi
   Takeshi`"That's kind of rude. What's so scary about 
my face?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"It's different now, but before it was scary."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C194`); appendText; 
   //Takeshi
   Takeshi`"Then how about you show me how scary it was?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Huh? Uh...um..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I think your face was kind of like 
this...glaring at the monitor..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tried to mimic how Takeshi had looked by 
using my fingers to pull up both of my eyes.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C195`); appendText; 
   //Takeshi
   Takeshi`"GA, HA,HA,HA...That? That's not scary at all."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Don't try to pretend it was nothing!"`;
   waitForClick; clearText; marker; sound(`S1C196`); appendText; 
   //Takeshi
   Takeshi`"Oh, sorry, sorry. I..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C197`); appendText; 
   //Takeshi
   Takeshi`"...I was looking for you."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"For me?"`;
   waitForClick; clearText; marker; sound(`S1C198`); appendText; 
   //Takeshi
   Takeshi`"Because you didn't show up forever. I thought 
I'd call you on the complex intercom system."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Huh?"`;
   waitForClick; clearText; marker; sound(`S1C199`); appendText; 
   //Takeshi
   Takeshi`"I figured you were probably lost somewhere 
and crying yourself silly..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"What are you talking about? I was about to 
say the same thing to you!" `;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"You weren't here at the time we set up. Where 
have you been until now?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C200`); appendText; 
   //Takeshi
   Takeshi`"Stupid! You're the one that wasn't here, 
right? You're totally late."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Oh...sorry..about that. B-but you could have 
waited a little longer."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C201`); appendText; 
   //Takeshi
   Takeshi`"Hey, I'm a busy guy. I'm not here to look 
after you."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Busy?...You??"`;
   waitForClick; clearText; marker; sound(`S1C202`); appendText; 
   //Takeshi
   Takeshi`"Yup. I'm horribly busy."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Liar. Until a while ago you we were wasting 
time together."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C203`); appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`S1C204`); appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`".............."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C205`); appendText; 
   //Takeshi
   Takeshi`"......Hey."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"?"`;
   waitForClick; clearText; marker; sound(`S1C206`); appendText; 
   //Takeshi
   Takeshi`"Can we stop this meaningless conversation?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Y...yeah. It is kind of stupid."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C207`); appendText; 
   //Takeshi
   Takeshi`"Isn't it?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`We both laughed wryly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That dissolved any tension that was in the 
atmosphere.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't get it...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But at some point I had began to feel 
comfortable with him.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought there was something about 
him...something like me maybe...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C208`); appendText; 
   //Takeshi
   Takeshi`"So how's your condition coming along? 
Any changes?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Saying that Takeshi sat down in a chair.`;
   waitForClick; clearText; marker; appendText; 
   Narr`His eyes were at the same height as mine.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Any changes...you mean my memory?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi nodded.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I shook my head.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C209`); appendText; 
   //Takeshi
   Takeshi`"I see."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C210`); appendText; 
   //Takeshi
   Takeshi`"Well, don't force it. It's like Sora said. 
Memory loss can heal at just the slightest 
thing."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Easy for you to say. It's not your problem..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C211`); appendText; 
   //Takeshi
   Takeshi`"Sure. It's not my problem."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"You say it like you've seen it happen."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C212`); appendText; 
   //Takeshi
   Takeshi`"Well, I've been around the block a few times."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Sure, sure...tell me about it. And?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't feel like prying.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C213`); appendText; 
   //Takeshi
   Takeshi`"Well, for now...why don't you just try to 
remember things starting with stuff familiar 
to you?"`;
   waitForClick; clearText; marker; sound(`S1C214`); appendText; 
   //Takeshi
   Takeshi`"Yeah, things like your birthday..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`(My birthday...)`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C215`); appendText; 
   //Takeshi
   Takeshi`"Huh? What's wrong?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Hey, what year is it?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C216`); appendText; 
   //Takeshi
   Takeshi`"You forgot that, too?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Yeah..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C217`); appendText; 
   //Takeshi
   Takeshi`"It's two thousand..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C218`); appendText; 
   //Takeshi
   Takeshi`"...Uh, what year IS it?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Saying that Takeshi fished his entrance ticket 
stub from his pocket...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C219`); appendText; 
   //Takeshi
   Takeshi`"Oh, that's right."`;
   waitForClick; clearText; marker; sound(`S1C220`); appendText; 
   //Takeshi
   Takeshi`"It's 2017."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi crumpled the stub back up and pushed 
it back into his pocket.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"2017..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C221`); appendText; 
   //Takeshi
   Takeshi`"Is there something about it?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Yeah, kind of."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C222`); appendText; 
   //Takeshi
   Takeshi`"Kind of?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I thought that if I heard the year then 
I might be able to remember at least 
my birthday."`;
   waitForClick; clearText; marker; sound(`S1C223`); appendText; 
   //Takeshi
   Takeshi`"I see. Come to think of it, you don't even 
know how old you are, huh?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"No..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C224`); appendText; 
   //Takeshi
   Takeshi`"By the looks of it, I'd say you're not 
a day over 42."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"What!?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C225`); appendText; 
   //Takeshi
   Takeshi`"HA, HA, HA. I'm kidding! Relax!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C226`); appendText; 
   //Takeshi
   Takeshi`"There's no way."`;
   waitForClick; clearText; marker; sound(`S1C227`); appendText; 
   //Takeshi
   Takeshi`"You're probably in the neighborhood 
of 14 or 15."`;
   waitForClick; clearText; marker; sound(`S1C228`); appendText; 
   //Takeshi
   Takeshi`"If you are 18, then you've got a baby face."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"14 or 15, huh...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I muttered this.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C229`); appendText; 
   //Takeshi
   Takeshi`"Well, I'm getting out of here. Actually, 
I haven't finished looking around."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Oh, hey, Takeshi! It seems like everybody is 
scattered all over right now..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C230`); appendText; 
   //Takeshi
   Takeshi`"Yeah? We'll have to arrange to meet somewhere 
sooner or later."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I think the Conference Room would be good."`;
   waitForClick; clearText; marker; sound(`S1C231`); appendText; 
   //Takeshi
   Takeshi`"Got it. If I see the others, then 
I'll give em' the word."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi left.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I also decided to go somewhere else.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 01 });
stopBGM();
goto(lbl_00000693);
let lbl_00001538;
setSceneTitle({ index: 54 });
bgload({ name: `BG26A3L`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`On the way down the corridor...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I noticed a sound.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked for the source of the sound.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Someone was crossing the corridor where it 
came to a T up ahead.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A girl!?`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a girl that I had never seen before.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I followed after her as if 
I were being pulled in by her.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Hey! Hey! Wait! You there!"`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE01_04`, a1: 0, volume: 95 });
bgload({ name: `BG08A1`, transition: 20 });
stopSFX()
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The girl went into the infirmary.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`No one was inside...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I carefully went deeper into the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There I noticed a square space cut out.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I peeked inside.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Down below a small lift was stopped.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked like there was another room 
directly below the infirmary.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I pushed the button calling the lift 
and hopped in.`;
   waitForClick; clearText; 
});
bgload({ name: `BG10A2`, transition: 20 });
goto(lbl_000015dc).if(var_f1 == 0);
varop(`(28 0a a4) b3 := (00) 0`);
jump(`SC1D`);
let lbl_000015dc;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`In the darkness a girl sat on a bed.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO03A`, transition: 20 });
playBGM({ num: 13, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"Uh, um...I..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was at a loss for words.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know where to start.`;
   waitForClick; clearText; marker; appendText; 
   //Young Girl
   Young_Girl`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She just stared at me.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"It's..al-alright..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Don't worry...everything is alright..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She didn't answer.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Uh...um..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Anyway, let's go where everybody else is!"`;
   waitForClick; clearText; marker; sound(`S1C232`); appendText; 
   //Young Girl
   Young_Girl`"Everybody?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Yeah, it's not just me."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"There are lots of other people..."`;
   waitForClick; clearText; marker; sound(`S1C233`); appendText; 
   //Young Girl
   Young_Girl`"Help?...Did you come to help?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Y-yeah...that's right."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO03B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`S1C234`); appendText; 
   //Young Girl
   Young_Girl`"But...it's probably impossible..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Huh?"`;
   waitForClick; clearText; marker; sound(`C1S299`); appendText; 
   //Young Girl
   Young_Girl`"There is...no way out anymore..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The girl's eyes were sad and moist.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Why do you say that?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"We'll be fine! A rescue team should be here 
any time!"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO03A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`S1C236`); appendText; 
   //Young Girl
   Young_Girl`"Liar..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"It's not a lie!"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"The people that escaped know 
that we're here..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Someone will come for sure!"`;
   waitForClick; clearText; marker; appendText; 
   //Young Girl
   Young_Girl`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Why do you say that?"`;
   waitForClick; clearText; marker; sound(`S1C237`); appendText; 
   //Young Girl
   Young_Girl`"Because...because..."`;
   waitForSound; clearText; 
});
bgload({ name: `EV_CO03C`, transition: 30 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Then suddenly a shocked look appeared on the 
girl's face as her eyes focused behind me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I followed her gaze.`;
   waitForClick; clearText; 
});
bgload({ name: `BG10A2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`On the other side of the door...was Takeshi 
peeking in.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C238`); appendText; 
   //Takeshi
   Takeshi`"Who are you talking to?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Takeshi! What great timing...!"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"It seems like this girl here didn't get out 
either..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C239`); appendText; 
   //Takeshi
   Takeshi`"Girl?"`;
   waitForClick; clearText; marker; sound(`S1C240`); appendText; 
   //Takeshi
   Takeshi`"What girl...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C241`); appendText; 
   //Takeshi
   Takeshi`"...There's nobody there."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Huh!?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I looked back.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The girl had vanished and there was no sign 
that anyone had been sitting where she had 
been.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Im...impossible..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C242`); appendText; 
   //Takeshi
   Takeshi`"Hey cut it out, will you? .... You get tired 
of memory loss and are working on 
hallucinating now?"`;
   waitForClick; clearText; marker; sound(`S1C243`); appendText; 
   //Takeshi
   Takeshi`"You're worse off than we thought..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"No! No! I'm not seeing things!"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"There was a girl here! She was sitting on 
this bed!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C244`); appendText; 
   //Takeshi
   Takeshi`"Listen, Kid..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Wh-what...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C245`); appendText; 
   //Takeshi
   Takeshi`"Aren't you hungry?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Hungry...?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Wh-who cares about that right now?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"There was a girl here...a girl I tell you..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C246`); appendText; 
   //Takeshi
   Takeshi`"I know, I know."`;
   waitForClick; clearText; marker; sound(`S1C247`); appendText; 
   //Takeshi
   Takeshi`"There was a girl there. I heard you..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"You don't get it at all!"`;
   waitForClick; clearText; marker; sound(`S1C248`); appendText; 
   //Takeshi
   Takeshi`"Alright, alright. I'll listen to the whole 
story later."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"But..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C249`); appendText; 
   //Takeshi
   Takeshi`"But nothing! You're going to piss me off 
if you keep this up!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C250`); appendText; 
   //Takeshi
   Takeshi`"Everyone is waiting for you...to eat 
together..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Well, then, what are we going to do about 
the girl?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I'm sure the girl is probably starving, 
too..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C251`); appendText; 
   //Takeshi
   Takeshi`"Oh man...you've completely lost it..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I'm not crazy!"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"There was a girl...a girl...right here..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the end, I couldn't get Takeshi to 
listen to me.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
stopBGM();
bgload({ name: `BG16A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
clock(`22:24`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Before going to the Conference Room I peeked 
into the Control Room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The bio scan figure was eating at my mind.`;
   waitForClick; clearText; 
});
bgload({ name: `IT04C`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`'Life readings: 5'`;
   waitForClick; clearText; marker; appendText; 
   Narr`The number had dropped from six to five.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `BG17A1`, transition: 26 });
playBGM({ num: 1, volume: 100 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`22:28`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Everyone was in the Conference Room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There were fried chicken sandwiches and drinks 
secured from the sandwich shop for everyone.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Only Tsugumi was absent.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered where she had gone....but more than 
that, I was worried about her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I told everyone about the girl.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone just laughed and no one listened.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No one else had seen the girl.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Then I remembered the bio scan figure.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: WHITE });
bgload({ name: `IT04E`, transition: 26 });
showFilter2();
unSkippableDelay(1);
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
varop(`(28 0a a0) ac := (00) 0`);
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`'7'`;
   waitForClick; clearText; marker; appendText; 
   Narr`That girl was probably person number seven.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But the number had been five and six as well.`;
   waitForClick; clearText; 
});
hideTextbox();
showFilter2();
unSkippableDelay(1);
monoColorOverlay({ interval: 18, color: WHITE });
varop(`(28 0a a0) ac := (00) 0`);
closeDimInAndOutAndFilterAnim();
bgload({ name: `BG17A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`What could it mean?`;
   waitForClick; clearText; marker; appendText; 
   Narr`The image of the girl had been burned into 
my mind and there was no getting away from it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered if it was, like Takeshi said - a 
hallucination.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If not, then...a ghost?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Ha, ha. That was crazy.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I shook my head at my own silliness.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe I was losing it...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Something had to be wrong with me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I needed to calm down, collect myself.`;
   waitForClick; clearText; marker; appendText; 
   Narr`While I thought this I flipped up the tab on 
the can of cola. `;
   waitForClick; clearText; 
});
stopBGM();
playSFX({ name: `SE02_15`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Fushaaaww!`;
   waitForClick; clearText; marker; appendText; 
   Narr`At first I didn't know what had happened.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I licked the liquid around my lips.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was sweet.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed as if the cola had exploded 
into my face.`;
   waitForClick; clearText; 
});
multifgload3({ name1: `SA09ADS`, name2: `SO02ADS`, name3: `YU09BDS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`S1C252`); appendText; 
   //Sara
   Sara`"KYA, HA, HA, HA"`;
   waitForClick; clearText; marker; sound(`S1C253`); appendText; 
   //You
   You`"AH, HA, HA, HA"`;
   waitForClick; clearText; marker; sound(`S1C254`); appendText; 
   //Sora
   Sora`"FU, FU, FU, FU, FU"`;
   waitForClick; clearText; marker; sound(`S1C255`); appendText; 
   //Everyone
   Everyone`"GA, HA, HA, HA, HA"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone exploded in a chorus of laughter.`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU02BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C256`); appendText; 
   //You
   You`"Hey, what the heck are you doing, Kid?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You said this laughing.`;
   waitForClick; clearText; marker; sound(`S1C257`); appendText; 
   //You
   You`"These cans contain pop made with special gas 
so that they are made at 6 atmospheres."`;
   waitForClick; clearText; marker; sound(`S1C258`); appendText; 
   //You
   You`"But right now we are at 1 atmosphere, right?"`;
   waitForClick; clearText; marker; sound(`S1C259`); appendText; 
   //You
   You`"So if you don't hold it down when you open 
it, the carbonation inside explodes..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`As she laughed, Sara took out a handkerchief.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took it and wiped my face.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was enveloped in laughter...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Without noticing, I'd forgotten about 
everything that had been weighing on my mind.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
delay({ interval: 60 });
removeBG({ mode: BLACK, transition: 62 });
let lbl_000018ec;
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
clock(`23:27`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Almost an hour had passed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No help had come. There was no contact.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The people on the floating island should have 
known that we were all trapped down here.`;
   waitForClick; clearText; marker; appendText; 
   Narr`So why didn't anyone come?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Even if they couldn't open the watertight 
doors, there should be divers that could tap 
on the window glass or something...`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
setSceneTitle({ index: 55 });
bgload({ name: `BG17A1`, transition: 26 });
fgload({ id: 4, name: `SO01ADS`, x: 320, useAnim: false });
playBGM({ num: 2, volume: 97 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; sound(`S1C260`); appendText; 
   //Sora
   Sora`"Everyone, I think it is best that we go to 
sleep this evening."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `SO02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C261`); appendText; 
   //Sora
   Sora`"Please leave the rest to me."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Saying this Sora grinned.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SA05ADS`, name2: `KB13ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C262`); appendText; 
   //Takeshi
   Takeshi`"Sleep...but where?"`;
   waitForClick; clearText; marker; sound(`S1C263`); appendText; 
   //Sara
   Sara`"Are there any places to lie down or anything?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `SO03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C264`); appendText; 
   //Sora
   Sora`"In the sectors that were submerged in water, 
but unfortunately not in the dry areas..."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C265`); appendText; 
   //Sora
   Sora`"Instead, I have prepared another place for 
you."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KB07ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"Another..."`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `YU07BDS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C266`); appendText; 
   //You
   You`"...Place?"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
playSFX({ name: `SE00_04`, a1: 0, volume: 100 });
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
bgload({ name: `BG10A1`, transition: 26 });
multifgload2({ id1: 1, id2: 2, name1: `YU04BDM`, name2: `SO01ADM`, x1: 128, x2: 512, useAnim: false });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; sound(`S1C267`); appendText; 
   //You
   You`"Wa-wait a second, Sora!"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"You're not saying that four people have to 
sleep in this cramped space?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was the place was where I had seen the girl.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SA08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C268`); appendText; 
   //Sara
   Sara`"What is this room anyway?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO10ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C269`); appendText; 
   //Sora
   Sora`"Let me explain."`;
   waitForClick; clearText; marker; sound(`S1C270`); appendText; 
   //Sora
   Sora`"This is a decompression room for medical 
purposes."`;
   waitForClick; clearText; marker; sound(`S1C271`); appendText; 
   //Sora
   Sora`"Here people suffering from decompression 
sickness, or the bends, are treated."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KB07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C272`); appendText; 
   //Takeshi
   Takeshi`"The bends?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C273`); appendText; 
   //Sora
   Sora`"Yes."`;
   waitForClick; clearText; marker; sound(`S1C274`); appendText; 
   //Sora
   Sora`"Normally when people leave LeMU they spend an 
extended period of time going through 
decompression and adjusting from 6 atmospheres 
to 1 atmosphere."`;
   waitForClick; clearText; marker; sound(`S1C275`); appendText; 
   //Sora
   Sora`"However, as a result of the accident, 
everyone has experienced a sudden change 
in pressure."`;
   waitForClick; clearText; marker; sound(`S1C276`); appendText; 
   //Sora
   Sora`"You may be suffering from the bends."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO10ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C277`); appendText; 
   //Sora
   Sora`"So, just to be safe, I want to have everyone 
undergo repressurization in this room..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"But...there is nothing wrong with us."`;
   waitForClick; clearText; marker; sound(`S1C278`); appendText; 
   //Sora
   Sora`"In cases of light decompression sickness, 
you are not necessarily aware of it 
immediately."`;
   waitForClick; clearText; marker; sound(`S1C279`); appendText; 
   //Sora
   Sora`"There are cases where the pain doesn't start 
for a day or two."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C280`); appendText; 
   //Takeshi
   Takeshi`"After you figure out you're in trouble, 
it's too late...?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C281`); appendText; 
   //Sora
   Sora`"Correct."`;
   waitForClick; clearText; marker; sound(`S1C282`); appendText; 
   //Sora
   Sora`"In other words, this is just to be completely 
safe."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU07BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C283`); appendText; 
   //You
   You`"Hey, Sora. What about 
the...uh...that...thing...in the infirmary?"`;
   waitForClick; clearText; marker; sound(`S1C284`); appendText; 
   //You
   You`"There was a device there to diagnose all 
kind of illnesses, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C285`); appendText; 
   //Sora
   Sora`"Do you mean the L-MRI perhaps?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C286`); appendText; 
   //You
   You`"Yeah, that."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C287`); appendText; 
   //You
   You`"If you do a scan with that, can't you tell 
right away if you've got decompression 
sickness?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C288`); appendText; 
   //Sora
   Sora`"Unfortunately, no, we cannot."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C289`); appendText; 
   //You
   You`"Why?"`;
   waitForClick; clearText; marker; sound(`S1C290`); appendText; 
   //Sora
   Sora`"As you saw before, that device is out of 
order. Discovering the problem and repairing 
it would take time and energy."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C291`); appendText; 
   //You
   You`"Oh..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SA05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C292`); appendText; 
   //Sara
   Sara`"Sora, can I ask you something?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C293`); appendText; 
   //Sora
   Sora`"What?"`;
   waitForClick; clearText; marker; sound(`S1C294`); appendText; 
   //Sara
   Sara`"I want to know more about this decompression 
sickness..."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S1C295`); appendText; 
   //Sora
   Sora`"I see."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S1C296`); appendText; 
   //Sora
   Sora`"Decompression sickness occurs when there is a 
sudden change in the surrounding air pressure 
and gas bubbles that can't be discharged 
accrue in the body." `;
   waitForClick; clearText; marker; sound(`S1C297`); appendText; 
   //Sora
   Sora`"Gas becomes air bubbles and these gather 
in tissues or veins."`;
   waitForClick; clearText; marker; sound(`S1C298`); appendText; 
   //Sora
   Sora`"When gas bubbles remain inside the body, 
the oxygen respiration efficiency drops 
dramatically."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KB03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C299`); appendText; 
   //Takeshi
   Takeshi`"So...no matter how many deep breaths you 
take it feels like you are suffocating?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S1C300`); appendText; 
   //Sora
   Sora`"Yes."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO10ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C301`); appendText; 
   //Sora
   Sora`"So we will seal this room and pump in a high 
concentration of oxygen, raising the level to 
approximately 3 atmospheres..."`;
   waitForClick; clearText; marker; sound(`S1C302`); appendText; 
   //Sora
   Sora`"Then we slowly decompress you back down to 1 
atmosphere." `;
   waitForClick; clearText; marker; sound(`S1C303`); appendText; 
   //Sora
   Sora`"Using this difference in pressure we dissolve 
the gas bubbles in your body back into your 
blood, where you get rid of them naturally by 
breathing."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C304`); appendText; 
   //Takeshi
   Takeshi`"You mean you make us like a can of cola that 
won't blow up..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C305`); appendText; 
   //Sora
   Sora`"Yes, precisely."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KB02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1C306`); appendText; 
   //Takeshi
   Takeshi`"Okay, I got it."`;
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
   Narr`The decompression process took place over 
several hours.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But, boy, it was....cramped...`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG10A2`, transition: 26 });
playSFX({ name: `SE09_02L`, a1: 0, volume: 90 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
clock(`23:54`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I wondered where in the world Tsugumi could 
have gone.`;
   waitForClick; clearText; 
});
goto(lbl_00001d1b).if(var_f0 != 0);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And shouldn't Sora have been undergoing 
decompression as well?`;
   waitForClick; clearText; 
});
let lbl_00001d1b;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I was so tired that my mind and body felt 
numb, but strangely sleep didn't come for me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi had monopolized the bed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He was breathing deeply and peacefully.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sleeping so well in an emergency like that...`;
   waitForClick; clearText; marker; appendText; 
   Narr`You, Sara and I sat on the floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I gradually got annoyed with Takeshi sleeping 
like a log.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There were still four hours until the 
decompression was complete.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The night was long...`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
stopSFX()
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
delay({ interval: 90 });
varop(`(28 0a a4) b3 := (00) 0`);
jump(`S_2A`);
