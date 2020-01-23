if (l_choice == 1) goto(lbl_000005fa);
if (l_choice == 2) goto(lbl_000011d2);
if (l_choice == 3) goto(lbl_000018ec);
setDialogBoxColor(BLUE);
l_b0 = 5;
l_dayA = 1;
l_dayB = 1;
bgload({ name: `BG25A3`, transition: 20 });
playBGM({ num: 3, volume: 100 });
clock(`20:52`);
showTextbox();
text(() => {
   `We arrived at Zweite stock...`;
   `And when we did, a voice came from the speaker 
above the corridor.`;
   Sora(S1C000)`"Right now, Tsugumi..."`;
   Sora(S1C001)`"...seems to be in the Security Office."`;
   `I figured Sora was using the complex intercom 
system to announce Tsugumi's location.`;

});
fgload({ id: 1, name: `KB11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C002)`"Got it. The Security Office, huh?"`;
   `Takeshi said this toward the ceiling.`;

});
bgload({ name: `BG26A3R`, transition: 20 });
showTextbox();
text(() => {
   `On the way to the office...`;
   `You said - `;

});
multifgload3({ name1: `SA01ADS`, name2: `YU01BDS`, name3: `KB01ADS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   You(S1C003)`"Hey, Takeshi, I've got an idea..."`;

});
fgload({ id: 1, name: `SA08ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C004)`"?"`;
   You(S1C005)`"I think this kinda thing is, well, better 
with just girls."`;

});
fgload({ id: 4, name: `KB07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C006)`"Just girls?"`;

});
fgload({ id: 2, name: `YU05BDS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S1C007)`"I think just Mayo and I should go."`;

});
fgload({ id: 1, name: `SA02ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1C008)`"That way it might be easier to talk to 
Tsugumi..."`;

});
fgload({ id: 2, name: `YU01BDS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S1C009)`"Mayo, you're okay with that, yeah?"`;
   Sara(S1C010)`"Sure, I'm fine with that."`;
   Kid`"Why can't Takeshi and I come along?"`;

});
fgload({ id: 2, name: `YU05BDS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S1C011)`"This kinda thing gets messy when there are 
guys around."`;

});
fgload({ id: 1, name: `SA01ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S1C012)`"Four against one triggers fear, you know? 
Fight or flight reactions."`;

});
fgload({ id: 2, name: `YU01BDS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S1C013)`"That and...let's call it female intuition."`;
   Kid`"Intuition?"`;

});
fgload({ id: 2, name: `YU02BDS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S1C014)`"I've gotta hunch that Mayo and I can fix this 
misunderstanding."`;

});
fgload({ id: 4, name: `KB08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C015)`"Misunderstanding, huh...?"`;

});
fgload({ id: 2, name: `YU05BDS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S1C016)`"That's what it is, isn't it? We haven't done 
anything to make her angry, so..."`;
   Kid`"That's true."`;
   Kid`"It might be better to just let the two girls 
go, instead of going in a group."`;
   `For some reason, I didn't have any confidence 
in my ability to get Tsugumi to open up to us, 
and I was sure that type of thing wasn't one 
of Takeshi's strong points either.`;

});
fgload({ id: 4, name: `KB02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C017)`"Then, I guess we'll leave it up to you."`;

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
   `So with that, You and Sara headed to the 
Security Office.`;
   `Takeshi and I were left in the middle of the 
corridor...`;

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
   `...at a loss of what to do.`;
   Takeshi(S1C018)`"So...what now?"`;
   Kid`"What do you say?"`;
   Takeshi(S1C019)`"Wanna wait in front of the Security Office?"`;
   Kid`"I don't think that would accomplish anything, 
but..."`;
   Takeshi(S1C020)`"Then, what?"`;
   Kid`"I don't know..."`;

});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C021)`"For now, we could take a look around."`;
   Kid`"I've had enough of that."`;

});
fgload({ id: 1, name: `KB05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C022)`"Well I haven't."`;
   Kid`"You, Sara and I walked so much that we just 
about wore holes in our shoes."`;
   Kid`"Zweite stock and Dritte stock - everything."`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C023)`"In that case, why don't we give the 
merry-go-round a shot?"`;
   Kid`"I don't know. Two guys on the 
merry-go-round sounds kinda..."`;

});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C024)`"Yeah..."`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C025)`"Well anyway, I've decided to take a look 
around inside LeMU."`;
   Takeshi(S1C026)`"I'm the kind of guy that just has to see 
things with his own two eyes."`;

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
   `So Takeshi and I split up to search.`;
   `We agreed to meet up at 9:30 p.m.`;
   `We were to meet in front of the Security 
Office.`;

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
   Sora(S1C027)`"LeMU has three layers below the ocean's 
surface."`;
   Sora(S1C028)`"Erste boden, Zweite stock, Dritte stock..."`;
   Sora(S1C029)`"There are 17 meters between each floor. 
If you go down a floor, then you go 17 
meters or 51 feet deeper."`;

});
showTextbox();
text(() => {
   Sora(S1C030)`"Thus, the third floor, Dritte stock, 
is located at 51 meters or 103 feet depth."`;
   `With all of this time on my hands, I visited 
Sora in the Control Room.`;
   `Sora politely and in an easy to understand way 
explained to me about LeMU which I knew almost 
nothing.`;
   Sora(S1C031)`"Outside of Dritte is a total of 6 atmospheres 
of pressure, 5 atmospheres water pressure 
and 1 atmosphere air pressure."`;
   Sora(S1C032)`"Even if hypothetically, you were to suddenly 
go out into the ocean from Dritte..."`;

});
showTextbox();
text(() => {
   Sora(S1C033)`"Your lungs would be crushed to about 
one-sixth of their size, and approximately 
five-sixth of your lungs would be flooded. 
You would likely die in a matter of minutes."`;
   Kid`"Uh, can I ask a question?"`;

});
showTextbox();
text(() => {
   Sora(S1C034)`"Go ahead..."`;
   Kid`"How much pressure exactly is 5 atmospheres of 
water pressure? It is hard to imagine..."`;
   Sora(S1C035)`"1 atmosphere is one kilogram of weight per 
square centimeter."`;
   Sora(S1C036)`"The difference in pressure inside and outside 
of LeMU is 5 atmospheres, or a multiple of 
five. Please think of it as five kilograms or 
around 11 pounds of weight per square inch."`;
   Kid`"Five kilograms of weight per square inch..."`;
   Kid`"So for each meter it would be 100 times 
100 or..."`;
   Kid`"Fifty tons!?"`;

});
showTextbox();
text(() => {
   Sora(S1C037)`"That's correct."`;
   Kid`"B-but..."`;
   Kid`"What about those people that skin dive?"`;
   Kid`"They can dive to depths of about 90 feet, 
right?"`;

});
showTextbox();
text(() => {
   Sora(S1C038)`"The current world record for free diving is 
150 meters or around 450 feet."`;
   Sora(S1C039)`"With an aqualung and pauses along the way, 
probably just about anyone could dive around 
105 feet."`;
   Sora(S1C040)`"However, the air sent to your lungs would be 
highly pressurized gas."`;
   Sora(S1C041)`"But with skin diving, they don't stop to 
breathe along the way. Amateurs can't 
make it past 65 feet."`;
   Sora(S1C042)`"Any deeper than that requires intensive 
training."`;
   Kid`"Wow. Is that right...?"`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1C043)`"And there is one other important thing."`;
   Sora(S1C044)`"Even if you can withstand the water 
pressure..."`;
   Sora(S1C045)`"Could you really swim the 167 feet to 
the surface?"`;
   Kid`"51 meters?"`;
   Kid`"How high is that...51 meters?"`;

});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1C046)`"Imagine a 15-story building."`;
   Sora(S1C047)`"Or five three-story school buildings stacked 
upon each other."`;
   Kid`"Five schools stacked..."`;
   Kid`"No way. I couldn't swim that."`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1C048)`"Well, then how about a building with 
10 stories?"`;
   Sora(S1C049)`"A depth of 34 meters or just over 
100 feet...that is the depth of Zweite stock."`;
   Kid`"34 meters, huh?"`;

});
choice(
   `Even that would be impossible`,
   `I might be able to handle that`,
);
switch (l_choice) {
   case 0: goto(lbl_000004b3);
   case 1: goto(lbl_000004ea);
}
let lbl_000004b3;
showTextbox();
text(() => {
   Kid`"I think even that would be impossible."`;

});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1C050)`"I think you are probably correct."`;
   Kid`"So basically, what you're trying to say is 
that we can't escape by swimming. Right, Sora?"`;
   Sora(S1C051)`"Yes."`;
   Kid`"I guess in the end all we can do is wait 
for help to arrive."`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1C052)`"That's what it comes down to."`;

});
goto(lbl_0000058d);
let lbl_000004ea;
l_thought_you_can_swim_34_meters_regardless_water_pressure = 1;
showTextbox();
text(() => {
   Kid`"Well...somehow I think I could..."`;

});
fgload({ id: 1, name: `SO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1C053)`"What? You'd have to swim it, you know. 
This isn't walking or running."`;
   Kid`"But...34 meters or 102 feet...that is like 
right over there..."`;
   Kid`"Well I would float...actually I think it 
would be easier than climbing the distance 
on land."`;

});
fgload({ id: 1, name: `SO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1C054)`"You don't have any idea how severe water 
pressure is at 34 meters depth, do you Kid?"`;
   Kid`"Huh? N-now hold on just a minute..."`;
   Kid`"Just a second ago...you were talking about 
even if one could endure the water pressure."`;

});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1C055)`"That type of hypothetical talk is 
meaningless."`;
   Sora(S1C056)`"You can't discuss this problem without water 
pressure."`;
   Kid`"But, Sora, you said..."`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1C057)`"Listen. Try to imagine it just one more time."`;
   Sora(S1C058)`"You are 102 feet deep...could you swim to 
the top of a 10 floor building?"`;
   `There was a severe edge to Sora's way of 
putting it.`;
   `I felt like there was something of a warning 
contained within her words.`;
   Kid`"...S-Sora, you don't..."`;
   Kid`"You don't really think that I would try 
to break out of Zweite stock and swim to 
freedom, do you?"`;

});
showTextbox();
text(() => {
   Sora(S1C059)`"You wouldn't, would you?"`;
   Kid`"Ha,ha,ha. No way."`;
   Kid`"Why would I do anything that reckless and 
crazy?"`;

});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1C060)`"Well, I should hope not..."`;
   Kid`"It's fine. I understand."`;
   Kid`"Right now all we can do is patiently wait for 
help...right?"`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1C061)`"That's right."`;
   `Saying that, Sora gave a big nod.`;

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
   `As I was so involved in my chat with Sora, 
I had missed the appointed meeting time.`;
   `I left the Control Room and headed toward the 
meeting point ? in front of the Security 
Office.`;
   `But...`;

});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `Takeshi wasn't there.`;
   Kid`"Hey! Takeshi!"`;
   `I tried to call out to him, but there 
was no reply.`;
   `Glancing at the Security Office, I noticed 
that the door was wide open.`;
   `I decided to take a peek in the room.`;

});
bgload({ name: `BG11A1`, transition: 20 });
showTextbox();
text(() => {
   `No one was there.`;
   `Not You, Sara, nor Tsugumi.`;
   Kid`"Hey Sora! Sora, everybody? Where are you?"`;
   `I looked up at the bare ceiling and called out.`;
   `I figured Sora would be in the Control Room 
monitoring me.`;
   `But apparently she wasn't...`;
   `There were no sounds from the speakers on the 
ceiling.`;

});
let lbl_000005fa;
bgload({ name: `BG26A3R`, transition: 20 });
playBGM({ num: 1, volume: 100 });
showTextbox();
text(() => {
   Kid`"Hmmm. I wonder what I should do."`;
   `I thought as I wandered walking through the 
corridors.`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `First...`;

});
l_selection_0_available = 1;
l_selection_1_available = 1;
l_selection_2_available = 1;
l_selection_3_available = 1;
l_selection_4_available = 0;
l_counter = 0;
l_choice_flag1 = 0;
goto(lbl_0000073a);
let lbl_00000693;
if (l_counter == 0) goto(lbl_000006c8);
if (l_choice_flag1 != 0) goto(lbl_000006c8);
l_selection_4_available = 1;
let lbl_000006c8;
if (l_selection_0_available != 0) goto(lbl_00000735);
if (l_selection_1_available != 0) goto(lbl_00000735);
if (l_selection_2_available != 0) goto(lbl_00000735);
if (l_selection_3_available != 0) goto(lbl_00000735);
if (l_selection_4_available != 0) goto(lbl_00000735);
goto(lbl_00001538);
let lbl_00000735;
showTextbox();
text(() => {
   `I thought I would go somewhere else.`;

});
let lbl_0000073a;
choice(
   cond(l_selection_0_available != 0)`To the merry-go-round`,
   cond(l_selection_1_available != 0)`To the Jellyfish Gondola`,
   cond(l_selection_2_available != 0)`To the warehouse`,
   cond(l_selection_3_available != 0)`To the Control Room`,
   cond(l_selection_4_available != 0)`To the Security Office`,
);
showTextbox();
text(() => {
   `${noWait}`;

});
hideTextbox();
switch (l_choice) {
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
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG02A1`, transition: 20 });
l_went_to_merry_go_round = 1;
l_selection_0_available = 0;
l_counter = 1;
showTextbox();
text(() => {
   `The merry-go-round`;
   `Several dozen dolphins were connected in a 
circle.`;
   `There were no horses. No carriages. 
There were no children's voices.`;
   `And the blue ocean was just one paneling 
of wall away...`;
   `We were all trapped in this place...`;
   `Thinking this, it was hard to believe that the 
scenery spreading before me was reality.`;
   `(What...what am I doing here...?)`;
   `That thought popped into my mind.`;
   `What I was experiencing right now seemed much 
more bizarre to me than the fact that I'd lost 
my memory.`;
   `In other words, my doubts about the past were 
less than my sense of unease about the present.`;
   `I was overcome by a sense that my existence 
was floating away.`;

});
hideTextbox();
playBGM({ num: 5, volume: 100 });
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1C062)`"Hey, Kid."`;
   You(S1C063)`"Are you spacing out there?"`;
   `You was peeking out at me from the shadow of 
a rock.`;
   Kid`"Uh, not exactly..."`;

});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1C064)`"Really?"`;

});
if (l_went_to_warehouse == 0) goto(lbl_0000087b);
showTextbox();
text(() => {
   Kid`"Oh. I talked to Sara and she said that things 
were no good with Tsugumi."`;

});
fgload({ id: 1, name: `YU03BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1C065)`"Well...you could say that."`;
   Kid`"What exactly happened?"`;

});
goto(lbl_00000880);
let lbl_0000087b;
showTextbox();
text(() => {
   Kid`"That reminds me, so how were things with 
Tsugumi?"`;

});
let lbl_00000880;
showTextbox();
text(() => {
   You(S1C066)`"Well..."`;

});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1C067)`"In a nutshell, it was like we whiffed."`;
   Kid`"What do you mean?"`;
   You(S1C068)`"We started with light conversation about how 
old she was, where she lived, if she was 
hungry. We were biding our time waiting 
for the right pitch."`;
   You(S1C069)`"Ultimately...Mayo asked her straight out 'Why 
are you so mad?'..."`;
   Kid`"And? What did she say?"`;
   You(S1C070)`"I said we whiffed, right?"`;

});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1C071)`"It was like we waited and waited for a good 
pitch. But we didn't get anything 
so we swung."`;
   Kid`"So it was a big zero?"`;
   You(S1C072)`"I don't know if it was a zero. 
But we sure didn't hit a home run."`;
   You(S1C073)`"All we can do is wait for her to get careless 
and throw the right pitch."`;
   Kid`And get her out...`;

});
fgload({ id: 1, name: `YU08BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1C074)`No, get a hit.`;
   Kid`"???"`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1C075)`"I just wanted to get a sense...to feel what 
she is all about."`;
   You(S1C076)`"Reasons aside, there is just something not 
pleasant about being disliked."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Saying that, You started walking.`;
   `She got on the platform of the merry-go-round 
and petted the fin of a dolphin.`;
   `I followed after You and jumped on the back 
of a dolphin.`;

});
fgload({ id: 1, name: `YU01BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1C077)`"Kid, incidentally, what were you doing here?"`;
   Kid`"I was looking for everyone. When I went to 
the Security Office, nobody was there..."`;
   Kid`"What about you, You? What were you doing?"`;
   You(S1C078)`"I was just hanging around this area, near the 
merry-go-round."`;

});
fgload({ id: 1, name: `YU03BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1C079)`"I just wanted to be alone, so..."`;
   Kid`"Alone?"`;
   `You cast a lonely look at the dolphin as she 
patted its smooth skin.`;

});
fgload({ id: 1, name: `YU07BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1C080)`"Hey. Why doesn't this dolphin move?"`;
   Kid`"Probably because it's not turned on. There 
should be an operating panel around somewhere."`;
   You(S1C081)`"You think if we turn it on, then the dolphin 
will move?"`;
   Kid`"Yeah, probably."`;

});
fgload({ id: 1, name: `YU05BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1C082)`"And swim in the ocean and catch fish and 
stuff?"`;
   Kid`"...What?"`;

});
fgload({ id: 1, name: `YU03BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1C083)`"I was just thinking..."`;
   You(S1C084)`"Because inside LeMU there are dolphins and 
whales and fish and clams and octopus. 
There are even jellyfish and sea anemones, 
but..."`;
   You(S1C085)`"But none of them are real living creatures."`;
   Kid`"Of course not. They were all made 
by people..."`;

});
fgload({ id: 1, name: `YU07BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1C086)`"I wonder?"`;
   Kid`"?"`;

});
fgload({ id: 1, name: `YU01BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1C087)`"For example, deep in a forest it would be 
harder to find something that is not alive 
than something that is, right?"`;
   You(S1C088)`"There are trees and grass, birds and bugs, 
soil and little living creatures inside of it. 
Everything is alive."`;

});
fgload({ id: 1, name: `YU03BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1C089)`"But how about here?"`;
   You(S1C090)`"The only thing that is alive in this vast 
space is us."`;
   You(S1C091)`"And they call this an underwater paradise? A 
'Utopia'?"`;
   You(S1C092)`"So in this 'Utopia' living things are 
outnumbered by nonliving things."`;
   You(S1C093)`"Which in a way means we are..."`;
   You(S1C094)`"We are 'intruders' in this world of the dead."`;
   `You petted the dolphin.`;
   `The dolphin's deformed, plastic smile didn't 
move at all.`;
   `A steel rod was stuck into its belly.`;
   Kid`"Do you hate LeMU, You?"`;

});
fgload({ id: 1, name: `YU07BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1C095)`"Well..."`;
   You(S1C096)`"It's hard to say..."`;
   You(S1C097)`"It's not that I like or dislike it..."`;
   Kid`"But you liked it enough to start working 
here, right?"`;

});
fgload({ id: 1, name: `YU05BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1C098)`"No."`;
   Kid`"No? You didn't?"`;
   You(S1C099)`"No."`;
   Kid`"Well, then why...?"`;

});
fgload({ id: 1, name: `YU17BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `With my question, You tilted her head.`;
   `Then she just clammed up and started wandering 
around one of the dolphins.`;
   `Finally her feet stopped and You quietly 
faced me.`;

});
fgload({ id: 1, name: `YU03BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1C100)`"I'm looking for something important."`;
   Kid`"Something important?"`;
   You(S1C101)`"A clue about my father."`;
   Kid`"???"`;

});
fgload({ id: 1, name: `YU07BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1C102)`"Actually, my father worked in the Research 
and Development Division of LeMU."`;
   Kid`"Research and development?"`;
   You(S1C103)`"I don't know the details..."`;
   You(S1C104)`"It seems like my father made the LeMMIH 
program."`;
   Kid`"LeMMIH...LeMMIH? Wasn't that LeMU's central 
computer?"`;
   You(S1C105)`"Yeah."`;

});
fgload({ id: 1, name: `YU01BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1C106)`"Of course, he didn't do it alone."`;
   You(S1C107)`"He was one of the members involved in 
developing the project."`;
   Kid`"Huh? Is that so...?_"`;
   Kid`"But what did you mean by clue?"`;

});
fgload({ id: 1, name: `YU07BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1C108)`"My father..."`;

});
fgload({ id: 1, name: `YU03BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1C109)`"My father...disappeared one day."`;

});
stopBGM();
showTextbox();
text(() => {
   Kid`"...What?"`;
   You(S1C110)`"He just went missing..."`;
   Kid`"W-when?"`;
   You(S1C111)`"He...."`;

});
fgload({ id: 1, name: `YU17BDL`, x: 320, useAnim: true });
playBGM({ num: 19, volume: 97 });
showTextbox();
text(() => {
   You(S1C112)`"He has been missing as long as I can 
remember..."`;
   You(S1C113)`"It was when I was one year old, 17 years 
ago..."`;
   Kid`"So you don't remember...your father?"`;

});
fgload({ id: 1, name: `YU03BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1C114)`"No..."`;
   You(S1C115)`"I've only seen pictures and movies of him..."`;
   You(S1C116)`"I don't really have any memories..."`;
   You(S1C117)`"Everything I just told you I heard from my 
mother..."`;
   Kid`"But why? Why did he disappear?"`;

});
fgload({ id: 1, name: `YU05BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1C118)`"If I knew that, I wouldn't have come here."`;
   Kid`"What do you mean?"`;

});
fgload({ id: 1, name: `YU13BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1C119)`"The last time my father was seen was in LeMU."`;
   You(S1C120)`"So I thought that if I came here maybe 
I would find some clue about my father..."`;
   You(S1C121)`"It seems like my mom has already given up, 
so I can't count on her..."`;
   Kid`"...?"`;
   You(S1C122)`"My mom has convinced herself that my dad is 
dead..."`;
   `The word 'dead' had a heavy ring to it.`;
   `You looked straight at me as her eyes watered.`;

});
fgload({ id: 1, name: `YU07BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1C123)`"But...but..."`;

});
fgload({ id: 1, name: `YU04BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1C124)`"I believe!"`;
   You(S1C125)`"I believe that he is alive somewhere!"`;
   You(S1C126)`"He has to be!"`;

});
fgload({ id: 1, name: `YU03BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1C127)`"My father just went missing...and his remains 
were never found...!"`;
   `I couldn't find any words.`;
   `I didn't know what to say to her.`;
   `She might have been waiting for me say 
something like: 'You're right! He's probably 
alive somewhere!'`;
   `But I couldn't say it.`;
   `I just nodded and couldn't even look back 
into her eyes.`;

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
   `Finally...we promised to meet later in the 
Conference Room and split up.`;

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
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG03A1`, transition: 20 });
l_selection_1_available = 0;
l_counter = 1;
showTextbox();
text(() => {
   `Next I went to the Jellyfish Gondola.`;
   `Tsugumi was there.`;
   `Her back was to me and she was looking at the 
entrance.`;
   `I called out to her loudly.`;
   Kid`"Want to ride the gondola?"`;
   `Tsugumi turned to look at me.`;
   `But she immediately turned on her heel and 
walked away.`;
   Kid`"Wait a minute..."`;

});
hideTextbox();
playBGM({ num: 7, volume: 100 });
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S1C128)`"I already told you."`;
   Kid`"?"`;
   Tsugumi(S1C129)`"I said don't ever talk to me again."`;
   Kid`"But..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi started walking again.`;
   Kid`"Hey! I said wait!"`;

});
fgload({ id: 1, name: `TU04ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S1C130)`"What is it? You are so irritating!"`;
   Kid`"You met You and Sara, right?"`;

});
fgload({ id: 1, name: `TU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S1C131)`"So what?"`;

});
if (l_went_to_merry_go_round != 0) goto(lbl_00000c5b);
if (l_went_to_warehouse != 0) goto(lbl_00000c5b);
showTextbox();
text(() => {
   Kid`"What did you talk about?"`;

});
goto(lbl_00000c60);
let lbl_00000c5b;
showTextbox();
text(() => {
   Kid`"Why didn't you listen to them?"`;

});
let lbl_00000c60;
showTextbox();
text(() => {
   Tsugumi(S1C132)`"It's none of your business..."`;

});
fgload({ id: 1, name: `TU07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S1C133)`"Is that why you stopped me?"`;
   Kid`"No..."`;
   Kid`"The real reason is something else..."`;
   Tsugumi`"........."`;
   Kid`"Before you said something about 'those guys' 
or something, right?"`;
   Kid`"What...did you mean by that?"`;

});
fgload({ id: 1, name: `TU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi stared at me intently.`;
   `She narrowed her eyes almost as if 
appraising me.`;
   `Intimidated by her intense glare, my body 
stiffened and I swallowed.`;

});
fgload({ id: 1, name: `TU08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S1C134)`"What is with you...?"`;
   Kid`"I don't know."`;
   Kid`"I wish I did know..."`;
   Tsugumi`"........."`;
   Kid`"........."`;
   Tsugumi`"..............."`;
   Kid`"..............."`;

});
fgload({ id: 1, name: `TU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S1C135)`"Fine."`;
   Tsugumi(S1C136)`"Well, if you aren't lying...then I'll 
warn you about one thing."`;

});
fgload({ id: 1, name: `TU10ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S1C137)`"Those guys...they are probably using you."`;
   Kid`"U...using me?"`;
   Kid`"So...so who do you mean when you say 
those guys?"`;

});
fgload({ id: 1, name: `TU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S1C138)`"I can't say more than that."`;
   Tsugumi(S1C139)`"I still don't trust you 100 percent yet."`;

});
fgload({ id: 1, name: `TU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S1C140)`"And I don't want you trusting me either..."`;
   Kid`"........."`;

});
fgload({ id: 1, name: `TU08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S1C141)`"Anyway, look after yourself."`;
   Tsugumi(S1C142)`"If something happens, I'm not going to 
help you..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Saying only that, Tsugumi turned and left.`;
   `Having no idea what had just happened, 
I simply stood there.`;

});
removeBG({ mode: BLACK, transition: 1 });
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
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG25A3`, transition: 20 });
l_went_to_warehouse = 1;
l_selection_2_available = 0;
l_counter = 1;
showTextbox();
text(() => {
   `I wound up in front of the warehouse.`;
   `(I don't expect anybody is here, but...)`;
   `(...What's that?)`;
   `The watertight door at the entrance was 
slightly open.`;
   `I was sure it was closed when I had come 
by here with You and everyone.`;
   Kid`"Is anyone there?"`;
   `I softly opened the door.`;

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
   Sara(S1C143)`"Ah."`;
   Kid`"Huh? Sara?"`;
   `Sara was inside.`;
   `She was sitting on top of a pile of boxes.`;
   `I didn't know if I'd surprised her, 
but her face seemed to stiffen.`;

});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S1C144)`"Oh, Kid...don't scare me like that."`;
   Kid`"S-sorry..."`;
   `After shooting me a slight glare, Sara stuck 
her hands in her pockets and dropped to the 
floor.`;
   Kid`"But what are you doing here?"`;

});
fgload({ id: 1, name: `SA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S1C145)`"Huh? Oh...I just wanted some time alone."`;
   Kid`"Alone?"`;

});
if (l_went_to_merry_go_round == 0) goto(lbl_00000e8d);
showTextbox();
text(() => {
   `(You had said almost the same thing...)`;
   Kid`"What happened with Tsugumi?"`;
   Sara(S1C146)`"Nothing really."`;
   Kid`"Well, you seem pretty down..."`;

});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S1C147)`"In the end, she didn't tell us anything. 
We were just running in circles...and it wore 
me out..."`;
   Kid`"I see..."`;

});
goto(lbl_00000ebb);
let lbl_00000e8d;
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S1C148)`"Actually, Nakkyu said that she wanted to be 
alone, so we just went our separate ways."`;
   Kid`"Hmmm."`;
   Kid`"Oh, that reminds me, how was Tsugumi?"`;

});
fgload({ id: 1, name: `SA07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara`"..."`;
   `Sara sighed slightly and held her hands out, 
palms facing up.`;
   Kid`"I see..."`;

});
let lbl_00000ebb;
showTextbox();
text(() => {
   `Feminine intuition aside, not even the two 
girls had been able to get through to her. 
Even though there was no apparent reason for 
Tsugumi to hold a grudge...`;
   `What could Tsugumi have been so angry with 
us about?`;

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
   `Finally...we promised to meet later in the 
Conference Room and split up.`;

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
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG16A1`, transition: 20 });
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
l_selection_3_available = 0;
l_counter = 1;
showTextbox();
text(() => {
   `I went to the Control Room again.`;
   Kid`"What's up? Any progress?"`;

});
hideTextbox();
playBGM({ num: 8, volume: 100 });
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1C149)`"Unfortunately, no..."`;
   Sora(S1C150)`"It appears that even LeMMIH is not able to 
accurately gauge the situation."`;
   Sora(S1C151)`"This is...it is something that would 
normally be unthinkable."`;

});
if (l_went_to_merry_go_round == 0) goto(lbl_00001011);
showTextbox();
text(() => {
   Kid`"Oh, that reminds me. Sora, did you know...?"`;

});
fgload({ id: 1, name: `SO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1C152)`"Know? Know what?"`;
   Kid`"That You's father made LeMMIH."`;

});
fgload({ id: 1, name: `SO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1C153)`"Huh? Is that right? That's...news to me."`;
   Kid`"Of course, he didn't make it all by himself."`;
   Kid`"She said her dad was a member of the 
development project team."`;
   Sora(S1C154)`"Is that right...?"`;

});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1C155)`"That's very interesting."`;

});
goto(lbl_0000101e);
let lbl_00001011;
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I turned my eyes to the massive monitor behind 
Sora.`;
   `A flat map of LeMU's Zweite stock and Dritte 
stock floors was displayed.`;
   `LeMMIH was monitoring LeMU, wall-to-wall, 
24 hours a day.`;
   `If LeMMIH, couldn't survey the situation, then 
what in the world...?`;

});
let lbl_0000101e;
showTextbox();
text(() => {
   Kid`"By the way.... Why is LeMMIH called LeMMIH?"`;

});
fgload({ id: 1, name: `SO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1C156)`"Oh, haven't I told you?"`;
   Kid`"No. I haven't heard..."`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1C157)`LeMMIH's proper name is...`;

});
showTextbox();
text(() => {
   `${voice(S1C158A)}"'Leiblich Medizin:Multiverfahren
${waitVoice}${voice(S1C158B)}Intelligent Hirn System.'
${waitVoice}${voice(S1C158C)}...actually indicates it."`;

});
showTextbox();
text(() => {
   Kid`"Uh...what was that? Can you give it to me one 
more time?"`;

});
showTextbox();
text(() => {
   `${voice(S1C159A)}"'Leiblich Medizin:Multiverfahren
${waitVoice}${voice(S1C159B)}Intelligent Hirn System.'
${waitVoice}${voice(S1C159C)}...actually indicates it."`;

});
showTextbox();
text(() => {
   Kid`"What language is that?"`;
   Sora(S1C160)`"It's German."`;
   Kid`"What does it mean?"`;

});
showTextbox();
text(() => {
   `${voice(S1C161A)}"The first part,${waitVoice}${voice(S1C161B)}Leiblich Medizin, indicates
${waitVoice}${voice(S1C161C)}the name of a pharmaceutical company."`;

});
showTextbox();
text(() => {
   Sora(S1C162)`"The bit after that means something along the 
lines of 'parallel processing artificial 
intelligence system.'"`;
   Sora(S1C163)`"The first letter of each word created the 
acronym 'LeMMIH' so they called the 
system 'LeMMIH'."`;
   Kid`"Uh-huh.... I see."`;
   Kid`"Hey, there are two things I wanted to 
ask you..."`;

});
showTextbox();
text(() => {
   Sora(S1C164)`"What might they be?"`;
   Kid`"That Leibl...,uh...what was it again?"`;

});
showTextbox();
text(() => {
   Sora(S1C165)`"'Leiblich Medizin'...In Japan it is known as 
Leiblich Pharmaceuticals."`;
   Kid`"So what is the relationship between Leiblich 
and LeMU?"`;
   Sora(S1C166)`"The company managing this theme park is 
called LeMU."`;
   Sora(S1C167)`"And the largest stockholder is Leiblich 
Medicine."`;
   Kid`"I see..."`;
   Kid`"So essentially I guess that Leiblich has the 
right to say whatever happens at LeMU."`;

});
showTextbox();
text(() => {
   Sora(S1C168)`"I suppose that is a reasonable 
interpretation."`;

});
showTextbox();
text(() => {
   Sora(S1C169)`"The origin of the name of this theme park..."`;
   Sora(S1C170)`"The official line is that it was 
named after the phantom or lost 
continent Lemuria."`;
   Sora(S1C171)`"But actually I've heard that it's just a 
combination of the first letters of 'Leiblich 
Medizin' and 'Utopie.'"`;
   Sora(S1C172)`"'Utopie' means utopia."`;

});
showTextbox();
text(() => {
   Sora(S1C173)`"In other words, Leiblich created this place 
to be a dream-like utopia..."`;
   Sora(S1C174)`"So that is why they named it that."`;
   Kid`"A utopia, huh...?"`;

});
showTextbox();
text(() => {
   Sora(S1C175)`"And what was your second question?"`;
   Kid`"Uh, well..."`;
   Kid`"It's about German..."`;

});
fgload({ id: 1, name: `SO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1C176)`"German?"`;
   Kid`"Yeah."`;
   Kid`"You just said that LeMMIH's official name is 
German, right?"`;
   Kid`"And all around LeMU are these German signs 
and stuff..."`;
   Kid`"I just...I wondered why German..."`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1C177)`"That's because Leiblich Pharmaceutical is a 
joint venture between a Japanese and a 
German company."`;
   Sora(S1C178)`"It's headquarters are in Frankfurt and the 
majority of officials are German."`;
   Kid`"So that's why it's all in German..."`;
   Kid`"So Leiblich Pharmaceutical had a pretty 
strong relationship with LeMU then?"`;
   Sora`"........."`;
   Kid`"Since I'm asking, can I ask one more thing?"`;

});
showTextbox();
text(() => {
   Sora(S1C179)`"Go ahead."`;
   Kid`"Why did Leiblich Pharmaceutical want to run a 
theme park anyhow?"`;
   Kid`"I mean, we're talking about Leiblich 
Pharmaceutical. They make medicine , right? 
That doesn't seem to have anything to do 
with a theme park."`;
   Kid`"And, and this is right in the middle of the 
ocean, right? Why go to all of the 
trouble of..."`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1C180)`"Because..."`;
   Sora(S1C181)`"Because..."`;
   Sora(S1C182)`"I'm sorry."`;
   Sora(S1C183)`"I can't answer that question."`;
   Kid`"...What?...Why not?"`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1C184)`"It is confidential information."`;

});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid`"Confidential?"`;
   Kid`"Ha, ha. What in the..."`;
   Kid`"Who could I possibly tell?"`;
   Sora`"........."`;
   Kid`"I can't imagine that a 'kid' like me finding 
out could cause any damage."`;
   Sora`"........."`;
   Kid`"You really can't even tell little old me?"`;
   Sora`"........."`;
   `Sora had gone quiet and wasn't answering.`;
   Kid`"Okay. I understand."`;
   Kid`"We'll just forget about it..."`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1C185)`"I'm really sorry."`;
   Kid`"It's alright. You don't have to apologize..."`;
   Kid`"You have to keep the secret as part of your 
job, right? There's nothing you can do about 
it..."`;
   Sora`"........."`;
   Kid`"........."`;
   Sora`"..............."`;
   Kid`"..............."`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1C186)`"Alright. I'll tell you one thing."`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1C187)`"LeMu does not rely on energy provided from 
the outside, but generates all of its energy 
in this complex."`;
   Sora(S1C188)`"And directly under us at a depth of 119 
meters or 357 feet is the seafloor..."`;

});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1C189)`"There is a thermal vent on the surface of the 
sea floor, where water several hundred degrees 
is pumped out and heat from that is used to 
operate generators."`;

});
if (l_coco_point != 2) goto(lbl_00001188);
l_choice = 0;
jump(`SC1C`);
let lbl_00001188;
showTextbox();
text(() => {
   `I waited for the rest of the explanation.`;
   `But Sora didn't say anything more.`;
   Kid`"And? What does that have to do with what we 
were just talking about?"`;
   `Sora let the question go...`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1C190)`"Do you mind if I get back to work?"`;
   Kid`"Oh? Uh...sorry to bother you."`;
   Sora`"........."`;
   `I gave up and left.`;

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
   `LeMU was controlled by a Japanese-German joint 
venture called Leiblich Pharmaceutical...`;
   `Why would they build a theme park here?`;
   `And what could it have to do with the fact 
that they generated their own energy...?`;
   `I left with this mystery spinning in my mind.`;

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
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG11A1`, transition: 20 });
playSFX({ name: `SE00_01`, a1: 1, volume: 100 });
waitForSFX();
l_selection_4_available = 0;
l_choice_flag1 = 1;
showTextbox();
text(() => {
   `(Oh...Takeshi!)`;
   `I was surprised upon returning to the Security 
Office.`;
   `Takeshi was there.`;
   `(I wonder what he is up to...)`;
   `He had both hands on the operating panel and 
was staring into the monitor intently.`;
   `I was about to call out to him...`;
   `But I hesitated.`;
   `The gaze that Takeshi had leveled on the 
monitor...`;
   `It was so intense that it made my spine 
tingle...`;
   `He had the eyes of a hawk scouring the 
horizon for prey.`;
   Kid`"...Take...shi..."`;
   `I finally got out the words.`;
   `Takeshi slowly looked back at me.`;
   Kid`"........."`;

});
hideTextbox();
playBGM({ num: 18, volume: 100 });
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C191)`"Hey, Kid, you finally made it. I'm beat from 
waiting."`;
   `The look on Takeshi's face was his normal old 
goofy expression.`;
   `I felt relieved.`;
   Kid`"What were you doing? You looked so intense 
it was scary."`;

});
fgload({ id: 1, name: `KB07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C192)`"Huh? Scary?"`;
   Kid`"Yeah. Just now. You looked scary."`;

});
fgload({ id: 1, name: `KB05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C193)`"That's kind of rude. What's so scary about 
my face?"`;
   Kid`"It's different now, but before it was scary."`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C194)`"Then how about you show me how scary it was?"`;
   Kid`"Huh? Uh...um..."`;
   Kid`"I think your face was kind of like 
this...glaring at the monitor..."`;
   `I tried to mimic how Takeshi had looked by 
using my fingers to pull up both of my eyes.`;

});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C195)`"GA, HA,HA,HA...That? That's not scary at all."`;
   Kid`"Don't try to pretend it was nothing!"`;
   Takeshi(S1C196)`"Oh, sorry, sorry. I..."`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C197)`"...I was looking for you."`;
   Kid`"For me?"`;
   Takeshi(S1C198)`"Because you didn't show up forever. I thought 
I'd call you on the complex intercom system."`;
   Kid`"Huh?"`;
   Takeshi(S1C199)`"I figured you were probably lost somewhere 
and crying yourself silly..."`;
   Kid`"What are you talking about? I was about to 
say the same thing to you!" `;
   Kid`"You weren't here at the time we set up. Where 
have you been until now?"`;

});
fgload({ id: 1, name: `KB04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C200)`"Stupid! You're the one that wasn't here, 
right? You're totally late."`;
   Kid`"Oh...sorry..about that. B-but you could have 
waited a little longer."`;

});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C201)`"Hey, I'm a busy guy. I'm not here to look 
after you."`;
   Kid`"Busy?...You??"`;
   Takeshi(S1C202)`"Yup. I'm horribly busy."`;
   Kid`"Liar. Until a while ago you we were wasting 
time together."`;

});
fgload({ id: 1, name: `KB05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C203)`"........."`;
   Kid`"........."`;
   Takeshi(S1C204)`"........."`;
   Kid`".............."`;

});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C205)`"......Hey."`;
   Kid`"?"`;
   Takeshi(S1C206)`"Can we stop this meaningless conversation?"`;
   Kid`"Y...yeah. It is kind of stupid."`;

});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C207)`"Isn't it?"`;
   `We both laughed wryly.`;
   `That dissolved any tension that was in the 
atmosphere.`;
   `I didn't get it...`;
   `But at some point I had began to feel 
comfortable with him.`;
   `I thought there was something about 
him...something like me maybe...`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C208)`"So how's your condition coming along? 
Any changes?"`;
   `Saying that Takeshi sat down in a chair.`;
   `His eyes were at the same height as mine.`;
   Kid`"Any changes...you mean my memory?"`;
   `Takeshi nodded.`;
   `I shook my head.`;

});
fgload({ id: 1, name: `KB03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C209)`"I see."`;

});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C210)`"Well, don't force it. It's like Sora said. 
Memory loss can heal at just the slightest 
thing."`;
   Kid`"Easy for you to say. It's not your problem..."`;

});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C211)`"Sure. It's not my problem."`;
   Kid`"You say it like you've seen it happen."`;

});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C212)`"Well, I've been around the block a few times."`;
   Kid`"Sure, sure...tell me about it. And?"`;
   `I didn't feel like prying.`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C213)`"Well, for now...why don't you just try to 
remember things starting with stuff familiar 
to you?"`;
   Takeshi(S1C214)`"Yeah, things like your birthday..."`;
   `(My birthday...)`;
   Kid`"........."`;

});
fgload({ id: 1, name: `KB07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C215)`"Huh? What's wrong?"`;
   Kid`"Hey, what year is it?"`;

});
fgload({ id: 1, name: `KB06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C216)`"You forgot that, too?"`;
   Kid`"Yeah..."`;

});
fgload({ id: 1, name: `KB05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C217)`"It's two thousand..."`;

});
fgload({ id: 1, name: `KB07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C218)`"...Uh, what year IS it?"`;
   `Saying that Takeshi fished his entrance ticket 
stub from his pocket...`;

});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C219)`"Oh, that's right."`;
   Takeshi(S1C220)`"It's 2017."`;
   `Takeshi crumpled the stub back up and pushed 
it back into his pocket.`;
   Kid`"2017..."`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C221)`"Is there something about it?"`;
   Kid`"Yeah, kind of."`;

});
fgload({ id: 1, name: `KB07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C222)`"Kind of?"`;
   Kid`"I thought that if I heard the year then 
I might be able to remember at least 
my birthday."`;
   Takeshi(S1C223)`"I see. Come to think of it, you don't even 
know how old you are, huh?"`;
   Kid`"No..."`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C224)`"By the looks of it, I'd say you're not 
a day over 42."`;
   Kid`"What!?"`;

});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C225)`"HA, HA, HA. I'm kidding! Relax!"`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C226)`"There's no way."`;
   Takeshi(S1C227)`"You're probably in the neighborhood 
of 14 or 15."`;
   Takeshi(S1C228)`"If you are 18, then you've got a baby face."`;
   Kid`"14 or 15, huh...?"`;
   `I muttered this.`;

});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C229)`"Well, I'm getting out of here. Actually, 
I haven't finished looking around."`;
   Kid`"Oh, hey, Takeshi! It seems like everybody is 
scattered all over right now..."`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C230)`"Yeah? We'll have to arrange to meet somewhere 
sooner or later."`;
   Kid`"I think the Conference Room would be good."`;
   Takeshi(S1C231)`"Got it. If I see the others, then 
I'll give em' the word."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Takeshi left.`;
   `I also decided to go somewhere else.`;

});
removeBG({ mode: BLACK, transition: 1 });
stopBGM();
goto(lbl_00000693);
let lbl_00001538;
setSceneTitle({ index: 54 });
bgload({ name: `BG26A3L`, transition: 20 });
showTextbox();
text(() => {
   `On the way down the corridor...`;
   `I noticed a sound.`;
   `I looked for the source of the sound.`;
   `Someone was crossing the corridor where it 
came to a T up ahead.`;
   `A girl!?`;
   `It was a girl that I had never seen before.`;
   `I followed after her as if 
I were being pulled in by her.`;
   Kid`"Hey! Hey! Wait! You there!"`;

});
hideTextbox();
playSFX({ name: `SE01_04`, a1: 0, volume: 95 });
bgload({ name: `BG08A1`, transition: 20 });
stopSFX()
showTextbox();
text(() => {
   `The girl went into the infirmary.`;

});
hideTextbox();
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   `No one was inside...`;
   `I carefully went deeper into the room.`;
   `There I noticed a square space cut out.`;
   `I peeked inside.`;
   `Down below a small lift was stopped.`;
   `It looked like there was another room 
directly below the infirmary.`;
   `I pushed the button calling the lift 
and hopped in.`;

});
bgload({ name: `BG10A2`, transition: 20 });
if (l_is_coco_route == 0) goto(lbl_000015dc);
l_choice = 0;
jump(`SC1D`);
let lbl_000015dc;
showTextbox();
text(() => {
   `In the darkness a girl sat on a bed.`;

});
bgload({ name: `EV_CO03A`, transition: 20 });
playBGM({ num: 13, volume: 100 });
showTextbox();
text(() => {
   Kid`"Uh, um...I..."`;
   `I was at a loss for words.`;
   `I didn't know where to start.`;
   //Young Girl
   Young_Girl`"........."`;
   `She just stared at me.`;
   Kid`"It's..al-alright..."`;
   Kid`"Don't worry...everything is alright..."`;
   `She didn't answer.`;
   Kid`"Uh...um..."`;
   Kid`"Anyway, let's go where everybody else is!"`;
   //Young Girl
   Young_Girl(S1C232)`"Everybody?"`;
   Kid`"Yeah, it's not just me."`;
   Kid`"There are lots of other people..."`;
   //Young Girl
   Young_Girl(S1C233)`"Help?...Did you come to help?"`;
   Kid`"Y-yeah...that's right."`;

});
bgload({ name: `EV_CO03B`, transition: 20 });
showTextbox();
text(() => {
   //Young Girl
   Young_Girl(S1C234)`"But...it's probably impossible..."`;
   Kid`"Huh?"`;
   //Young Girl
   Young_Girl(C1S299)`"There is...no way out anymore..."`;
   `The girl's eyes were sad and moist.`;
   Kid`"Why do you say that?"`;
   Kid`"We'll be fine! A rescue team should be here 
any time!"`;

});
bgload({ name: `EV_CO03A`, transition: 20 });
showTextbox();
text(() => {
   //Young Girl
   Young_Girl(S1C236)`"Liar..."`;
   Kid`"It's not a lie!"`;
   Kid`"The people that escaped know 
that we're here..."`;
   Kid`"Someone will come for sure!"`;
   //Young Girl
   Young_Girl`"........."`;
   Kid`"Why do you say that?"`;
   //Young Girl
   Young_Girl(S1C237)`"Because...because..."${waitVoice}${noWait}`;

});
bgload({ name: `EV_CO03C`, transition: 30 });
showTextbox();
text(() => {
   `Then suddenly a shocked look appeared on the 
girl's face as her eyes focused behind me.`;
   `I followed her gaze.`;

});
bgload({ name: `BG10A2`, transition: 20 });
showTextbox();
text(() => {
   `On the other side of the door...was Takeshi 
peeking in.`;

});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C238)`"Who are you talking to?"`;
   Kid`"Takeshi! What great timing...!"`;
   Kid`"It seems like this girl here didn't get out 
either..."`;

});
fgload({ id: 1, name: `KB07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C239)`"Girl?"`;
   Takeshi(S1C240)`"What girl...?"`;

});
fgload({ id: 1, name: `KB05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C241)`"...There's nobody there."`;
   Kid`"Huh!?"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I looked back.`;
   `The girl had vanished and there was no sign 
that anyone had been sitting where she had 
been.`;
   Kid`"Im...impossible..."`;

});
fgload({ id: 1, name: `KB03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C242)`"Hey cut it out, will you? .... You get tired 
of memory loss and are working on 
hallucinating now?"`;
   Takeshi(S1C243)`"You're worse off than we thought..."`;
   Kid`"No! No! I'm not seeing things!"`;
   Kid`"There was a girl here! She was sitting on 
this bed!"`;

});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C244)`"Listen, Kid..."`;
   Kid`"Wh-what...?"`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C245)`"Aren't you hungry?"`;
   Kid`"Hungry...?"`;
   Kid`"Wh-who cares about that right now?"`;
   Kid`"There was a girl here...a girl I tell you..."`;

});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C246)`"I know, I know."`;
   Takeshi(S1C247)`"There was a girl there. I heard you..."`;
   Kid`"You don't get it at all!"`;
   Takeshi(S1C248)`"Alright, alright. I'll listen to the whole 
story later."`;
   Kid`"But..."`;

});
fgload({ id: 1, name: `KB04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C249)`"But nothing! You're going to piss me off 
if you keep this up!"`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C250)`"Everyone is waiting for you...to eat 
together..."`;
   Kid`"Well, then, what are we going to do about 
the girl?"`;
   Kid`"I'm sure the girl is probably starving, 
too..."`;

});
fgload({ id: 1, name: `KB03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C251)`"Oh man...you've completely lost it..."`;
   Kid`"I'm not crazy!"`;
   Kid`"There was a girl...a girl...right here..."`;
   `In the end, I couldn't get Takeshi to 
listen to me.`;

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
   `Before going to the Conference Room I peeked 
into the Control Room.`;
   `The bio scan figure was eating at my mind.`;

});
bgload({ name: `IT04C`, transition: 20 });
showTextbox();
text(() => {
   `'Life readings: 5'`;
   `The number had dropped from six to five.`;

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
   `Everyone was in the Conference Room.`;
   `There were fried chicken sandwiches and drinks 
secured from the sandwich shop for everyone.`;
   `Only Tsugumi was absent.`;
   `I wondered where she had gone....but more than 
that, I was worried about her.`;
   `I told everyone about the girl.`;
   `But...`;
   `Everyone just laughed and no one listened.`;
   `No one else had seen the girl.`;
   `Then I remembered the bio scan figure.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: WHITE });
bgload({ name: `IT04E`, transition: 26 });
showFilter2();
unSkippableDelay(1);
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
dimOff_ac = 0;
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   `'7'`;
   `That girl was probably person number seven.`;
   `But the number had been five and six as well.`;

});
hideTextbox();
showFilter2();
unSkippableDelay(1);
monoColorOverlay({ interval: 18, color: WHITE });
dimOff_ac = 0;
closeDimInAndOutAndFilterAnim();
bgload({ name: `BG17A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `What could it mean?`;
   `The image of the girl had been burned into 
my mind and there was no getting away from it.`;
   `I wondered if it was, like Takeshi said - a 
hallucination.`;
   `If not, then...a ghost?`;
   `Ha, ha. That was crazy.`;
   `I shook my head at my own silliness.`;
   `Maybe I was losing it...`;
   `Something had to be wrong with me.`;
   `I needed to calm down, collect myself.`;
   `While I thought this I flipped up the tab on 
the can of cola. `;

});
stopBGM();
playSFX({ name: `SE02_15`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Fushaaaww!`;
   `At first I didn't know what had happened.`;
   `I licked the liquid around my lips.`;
   `It was sweet.`;
   `It seemed as if the cola had exploded 
into my face.`;

});
multifgload3({ name1: `SA09ADS`, name2: `SO02ADS`, name3: `YU09BDS`, x1: 128, x2: 512, x3: 320, useAnim: 3 });
showTextbox();
text(() => {
   Sara(S1C252)`"KYA, HA, HA, HA"`;
   You(S1C253)`"AH, HA, HA, HA"`;
   Sora(S1C254)`"FU, FU, FU, FU, FU"`;
   Everyone(S1C255)`"GA, HA, HA, HA, HA"`;
   `Everyone exploded in a chorus of laughter.`;

});
fgload({ id: 4, name: `YU02BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1C256)`"Hey, what the heck are you doing, Kid?"`;
   `You said this laughing.`;
   You(S1C257)`"These cans contain pop made with special gas 
so that they are made at 6 atmospheres."`;
   You(S1C258)`"But right now we are at 1 atmosphere, right?"`;
   You(S1C259)`"So if you don't hold it down when you open 
it, the carbonation inside explodes..."`;

});
fgload({ id: 1, name: `SA02ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   `As she laughed, Sara took out a handkerchief.`;
   `I took it and wiped my face.`;
   `I was enveloped in laughter...`;
   `Without noticing, I'd forgotten about 
everything that had been weighing on my mind.`;

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
   `Almost an hour had passed.`;
   `No help had come. There was no contact.`;
   `The people on the floating island should have 
known that we were all trapped down here.`;
   `So why didn't anyone come?`;
   `Even if they couldn't open the watertight 
doors, there should be divers that could tap 
on the window glass or something...`;

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
   Sora(S1C260)`"Everyone, I think it is best that we go to 
sleep this evening."`;

});
fgload({ id: 4, name: `SO02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1C261)`"Please leave the rest to me."`;
   `Saying this Sora grinned.`;

});
multifgload2({ id1: 1, id2: 2, name1: `SA05ADS`, name2: `KB13ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C262)`"Sleep...but where?"`;
   Sara(S1C263)`"Are there any places to lie down or anything?"`;

});
fgload({ id: 4, name: `SO03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1C264)`"In the sectors that were submerged in water, 
but unfortunately not in the dry areas..."`;

});
fgload({ id: 4, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S1C265)`"Instead, I have prepared another place for 
you."`;

});
fgload({ id: 2, name: `KB07ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid`"Another..."`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `YU07BDS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S1C266)`"...Place?"`;

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
   You(S1C267)`"Wa-wait a second, Sora!"`;
   Kid`"You're not saying that four people have to 
sleep in this cramped space?"`;
   `It was the place was where I had seen the girl.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SA08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S1C268)`"What is this room anyway?"`;

});
fgload({ id: 2, name: `SO10ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S1C269)`"Let me explain."`;
   Sora(S1C270)`"This is a decompression room for medical 
purposes."`;
   Sora(S1C271)`"Here people suffering from decompression 
sickness, or the bends, are treated."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KB07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C272)`"The bends?"`;

});
fgload({ id: 2, name: `SO05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S1C273)`"Yes."`;
   Sora(S1C274)`"Normally when people leave LeMU they spend an 
extended period of time going through 
decompression and adjusting from 6 atmospheres 
to 1 atmosphere."`;
   Sora(S1C275)`"However, as a result of the accident, 
everyone has experienced a sudden change 
in pressure."`;
   Sora(S1C276)`"You may be suffering from the bends."`;

});
fgload({ id: 2, name: `SO10ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S1C277)`"So, just to be safe, I want to have everyone 
undergo repressurization in this room..."`;
   Kid`"But...there is nothing wrong with us."`;
   Sora(S1C278)`"In cases of light decompression sickness, 
you are not necessarily aware of it 
immediately."`;
   Sora(S1C279)`"There are cases where the pain doesn't start 
for a day or two."`;

});
fgload({ id: 1, name: `KB08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C280)`"After you figure out you're in trouble, 
it's too late...?"`;

});
fgload({ id: 2, name: `SO01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S1C281)`"Correct."`;
   Sora(S1C282)`"In other words, this is just to be completely 
safe."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU07BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1C283)`"Hey, Sora. What about 
the...uh...that...thing...in the infirmary?"`;
   You(S1C284)`"There was a device there to diagnose all 
kind of illnesses, right?"`;

});
fgload({ id: 2, name: `SO07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S1C285)`"Do you mean the L-MRI perhaps?"`;

});
fgload({ id: 1, name: `YU02BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1C286)`"Yeah, that."`;

});
fgload({ id: 1, name: `YU05BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1C287)`"If you do a scan with that, can't you tell 
right away if you've got decompression 
sickness?"`;

});
fgload({ id: 2, name: `SO05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S1C288)`"Unfortunately, no, we cannot."`;

});
fgload({ id: 1, name: `YU06BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1C289)`"Why?"`;
   Sora(S1C290)`"As you saw before, that device is out of 
order. Discovering the problem and repairing 
it would take time and energy."`;

});
fgload({ id: 1, name: `YU03BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1C291)`"Oh..."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SA05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S1C292)`"Sora, can I ask you something?"`;

});
fgload({ id: 2, name: `SO01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S1C293)`"What?"`;
   Sara(S1C294)`"I want to know more about this decompression 
sickness..."`;

});
showTextbox();
text(() => {
   Sora(S1C295)`"I see."`;

});
showTextbox();
text(() => {
   Sora(S1C296)`"Decompression sickness occurs when there is a 
sudden change in the surrounding air pressure 
and gas bubbles that can't be discharged 
accrue in the body." `;
   Sora(S1C297)`"Gas becomes air bubbles and these gather 
in tissues or veins."`;
   Sora(S1C298)`"When gas bubbles remain inside the body, 
the oxygen respiration efficiency drops 
dramatically."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KB03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C299)`"So...no matter how many deep breaths you 
take it feels like you are suffocating?"`;

});
showTextbox();
text(() => {
   Sora(S1C300)`"Yes."`;

});
fgload({ id: 2, name: `SO10ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S1C301)`"So we will seal this room and pump in a high 
concentration of oxygen, raising the level to 
approximately 3 atmospheres..."`;
   Sora(S1C302)`"Then we slowly decompress you back down to 1 
atmosphere." `;
   Sora(S1C303)`"Using this difference in pressure we dissolve 
the gas bubbles in your body back into your 
blood, where you get rid of them naturally by 
breathing."`;

});
fgload({ id: 1, name: `KB08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C304)`"You mean you make us like a can of cola that 
won't blow up..."`;

});
fgload({ id: 2, name: `SO02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S1C305)`"Yes, precisely."`;

});
fgload({ id: 1, name: `KB02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S1C306)`"Okay, I got it."`;

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
   `The decompression process took place over 
several hours.`;
   `But, boy, it was....cramped...`;

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
   `I wondered where in the world Tsugumi could 
have gone.`;

});
if (l_know_sora_is_an_ai != 0) goto(lbl_00001d1b);
showTextbox();
text(() => {
   `And shouldn't Sora have been undergoing 
decompression as well?`;

});
let lbl_00001d1b;
showTextbox();
text(() => {
   `I was so tired that my mind and body felt 
numb, but strangely sleep didn't come for me.`;
   `Takeshi had monopolized the bed.`;
   `He was breathing deeply and peacefully.`;
   `Sleeping so well in an emergency like that...`;
   `You, Sara and I sat on the floor.`;
   `I gradually got annoyed with Takeshi sleeping 
like a log.`;
   `There were still four hours until the 
decompression was complete.`;
   `The night was long...`;

});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
stopSFX()
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
delay({ interval: 90 });
l_choice = 0;
jump(`S_2A`);
