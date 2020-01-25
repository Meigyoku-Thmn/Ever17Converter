hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
stopBGM();
delay({ interval: 120 });
setDialogBoxColor(BLUE);
l_b0 = 5;
l_dayA = 6;
l_dayB = 6;
playBGM({ num: 19, volume: 100 });
bgload({ name: `BG12A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
setSceneTitle({ index: 84 });
clock(`17:18`);
showTextbox();
text(() => {
   `You and I sat on the bench in the changing room, facing opposite directions.`;
   `Finally, the two of us were alone.`;
   `It was a situation I had been trying to avoid...`;
   `I fidgeted as I thought of the touch of her lips the day before.`;
   `I wondered why we had stayed there.`;
   `It was because You didn't try to go anywhere.`;
   `With what Sara had said, I couldn't just say 'see you' and leave.`;
   `If I did that, she'd be able to tell that I was still hung up on the day before.`;
   `I tried not to think about it.`;
   `But the more I tried not to think about it, the more I did.`;
   `There was a part of me that knew all of this, and pretended I wasn't thinking about it and acted like I was actually thinking about it, but then doing that actually did make me think about it.`;
   `So I tried to pretend not to think about it, as I was pretending to think about it...`;
   `Huh?`;
   `Then I realized that it was all meaningless!`;
   `The more I thought about it, the more confused I got.`;

});
fgload({ id: 1, name: `YU11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You`"........."`;
   `I sat down next to You and stared at the ceiling.`;
   Kid`"........."`;
   You`"........."`;
   Kid`".................."`;
   You`".................."`;
   Kid`"...................................."`;
   You`"...................................."`;
   `(Oh, that's right...this silence is bad.)`;
   `(I better break it somehow.)`;
   `I thought I would try to say something and calm myself down.`;
   Kid`"Uh...um..."`;
   Kid`"Th-those clothes really suit you."`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A211)`"Huh?"`;
   Kid`"N-no, I mean...why did you change?"`;
   `Unfortunately my mind was still in a state of confusion and wouldn't follow orders.`;

});
fgload({ id: 1, name: `YU11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A212)`"Hmmm...I guess maybe you could call it an expression of my resolution." `;
   Kid`"Huh?"`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A213)`"The reason that I changed!"`;
   You(Y6A214)`"You asked me, right?"`;
   Kid`"Oh...yeah..."`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A215)`"I decided to dump the LeMU uniform...for the clothes I normally wear."`;
   You(Y6A216)`"It's a way of saying goodbye to my LeMU self and hello to the normal me."`;
   You(Y6A217)`"I just wanna get out of here and get back to my regular life."`;
   You(Y6A218)`"That's what I decided."`;
   Kid`"Hmmm...so that's why."`;

});
fgload({ id: 1, name: `YU11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A219)`"Yeah."`;
   Kid`"........."`;
   You`"........."`;
   Kid`".................."`;
   You`".................."`;
   Kid`"...................................."`;
   You`"...................................."`;
   `At that rate I figured the conversation was sure to fizzle out.`;
   `Uh, I needed something to talk about...`;

});
choice(
   `The third eye`,
   `Lemuria`,
   `You's past`,
);
switch (l_choice) {
   case 0: goto(lbl_000001cf);
   case 1: goto(lbl_00000207);
   case 2: goto(lbl_0000023f);
}
let lbl_000001cf;
l_talked_to_you_about_her_father_in_6th_day = 0;
showTextbox();
text(() => {
   Kid`"Oh, that reminds me! I wanted to ask you about the third eye..."`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A220)`"The third eye?"`;
   Kid`"Yeah."`;
   Kid`"...Uh."`;

});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   You(Y6A057)`"Last time..."`;
   You(Y6A058)`"I told you...the third eye is here..."`;

});
goto(lbl_00000273);
let lbl_00000207;
l_talked_to_you_about_her_father_in_6th_day = 0;
showTextbox();
text(() => {
   Kid`"Oh, that reminds me! I wanted to ask you about Lemuria."`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A221)`"Lemuria?"`;
   Kid`"Yeah. I mean I've been there with you several times, but every time I go there I feel like I have traveled back through time..."`;
   Kid`"...Oh."`;

});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   You(Y6A040)`"You traveled through time, right?"`;
   You(Y6A041)`"You said you've experienced the same thing before, right?"`;
   You(Y6A042)`"In that case, you should know what I'm about to do."`;

});
goto(lbl_00000273);
let lbl_0000023f;
l_talked_to_you_about_her_father_in_6th_day = 1;
showTextbox();
text(() => {
   Kid`"Oh, that reminds me! I wanted to talk to your about you father."`;

});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You`"........."`;
   You(Y6A222)`"I told you I didn't want to talk about that, didn't I?"`;
   Kid`"Huh? Oh, yeah..."`;
   Kid`"...Uh"`;

});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   You(Y6A013)`"I'm sorry, but could we just forget about that today?"`;
   You(Y6A015)`"That wasn't the reason that I invited you here today."`;
   You(Y6A037)`"There something about being with you that relaxes me..."`;

});
let lbl_00000273;
hideTextbox();
monoColorOverlay({ interval: 6, color: WHITE });
dimOff_ac = 0;
closeDimOverlay();
removeFG({ id: 1, useAnim: false });
bgload({ name: `EV_YU06A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
monoColorOverlay({ interval: 6, color: WHITE });
bgload({ name: `BG12A1`, transition: 26 });
if (l_talked_to_you_about_her_father_in_6th_day == 1) goto(lbl_000002f7);
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: false });
goto(lbl_00000309);
let lbl_000002f7;
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: false });
let lbl_00000309;
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `Suddenly, I remembered and vividly relived the feeling of our lips touching the night before.`;

});
fgload({ id: 1, name: `YU11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You`"..........................."`;
   Kid`"..........................."`;
   `I was sorely regretting that I had brought up this topic.`;
   You(Y6A223)`"Th-that reminds me..."`;
   Kid`"Eh? Y-yeah?"`;
   You(Y6A224)`"I didn't really tell you about the meaning of the concept behind the third eye, did I?"`;
   Kid`"Uh...no."`;
   Kid`"You always say 'I'll tell you next time.'"`;
   You(Y6A225)`"You're right."`;

});
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A226)`"Well, this is a good chance for me to tell you the whole story."`;
   Kid`"Really?"`;
   Kid`"Well, you can skip the boring stuff."`;

});
removeFG({ id: 1, useAnim: true });
hideTextbox();
showTextbox();
text(() => {
   `You stood up and turned to face me.`;

});
fgload({ id: 1, name: `YU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A227)`"Ahem..."`;
   You(Y6A228)`"It is time to start Nakkyu's seminar on the third eye."`;

});
playSFX({ name: `SE10_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I clapped for her half-heartedly.`;

});
stopSFX()
showTextbox();
text(() => {
   You(Y6A229)`"First, we'll start with something that is blatantly obvious. People have two eyes, right?"`;
   You(Y6A230)`"One on the right, one on the left."`;
   `You winked with one eye and then the other.`;
   You(Y6A231)`"With these two eyes, people are aware of the three dimensional world around them."`;
   You(Y6A232)`"If you lost the sight in one of your eyes, I won't say it would be impossible, but it would be difficult to get a sense of the world, its depth and dimensions."`;
   You(Y6A233)`"Close one eye for a second."`;
   `I closed my right eye as she said.`;
   You(Y6A234)`"When you look at the world that way, the information you get is only enough to basically form a flat image of the world."`;
   You(Y6A235)`"Of course, by focusing on different areas or moving your eyes you could get a sense of the three-dimensional image of things, but..."`;
   You(Y6A236)`"But it wouldn't give you anything close to the perspective or 'dimensional awareness' that you would have using both eyes."`;

});
fgload({ id: 1, name: `YU07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A237)`"Do you understand what I'm talking about?"`;
   Kid`"..."`;

});
fgload({ id: 1, name: `YU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A238)`"Alright, I'll leave out the unnecessary stuff..."`;
   You(Y6A239)`"In other words, this is what I mean -"`;
   You(Y6A240)`"If a person looks at the world through one eye, they only get enough information for a flat or two dimensional view."`;
   You(Y6A241)`"Essentially, it's like a picture."`;
   You(Y6A242)`"If you are looking at a photograph of scenery, you have the trees in the foreground, a lake in the middle and a string of mountains in the background..."`;
   You(Y6A243)`"...thus you get a sense of distance in the picture."`;
   You(Y6A244)`"But that picture is still only two dimensional, right?"`;
   You(Y6A245)`"It was developed on a flat surface."`;
   You(Y6A246)`"So a photograph is actually a three-dimensional image recreated two dimensionally. Now that I think you understand that..."`;
   Kid`"........."`;

});
fgload({ id: 1, name: `YU07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A247)`"What? You still don't get it?"`;
   Kid`"I don't get it and my left eye is tired."`;
   You(Y6A248)`"Oh well..."`;
   You(Y6A249)`"Okay, this time close your left eye..."`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
showTextbox();
text(() => {
   You(Y6A250)`"Hey! What are you going to see with both eyes closed?"`;

});
hideTextbox();
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `I held the eyelid of my left eye shut with my left hand as I opened my right eye.`;

});
fgload({ id: 1, name: `YU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A251)`"That's it."`;
   You(Y6A252)`"Now, how about we do a little experiment?"`;
   Kid`"Experiment?"`;
   `Nodding, You took a marker out of her pocket.`;
   `She took the cap off and handed the marker to me.`;
   Kid`"So? What do I do?"`;
   You(Y6A253)`"Try to put the pen in the cap that I'm holding."`;

});
bgload({ name: `EV_YU07A`, transition: 20 });
showTextbox();
text(() => {
   `You turned the cap sideways and held it in front of me.`;
   Kid`"So you want me to put the tip of this in that hole of yours?"`;
   You(Y6A254)`"Yeah. Hurry up."`;
   Kid`"You want me to put it in?"`;
   You(Y6A255)`"Yeah..."`;
   `I took the shiny black pen, lifted it toward the little cap that You held...trying to put it in...`;
   Kid`"Huh? That's weird..."`;
   Kid`"I can't find the hole..."`;
   `The slightly slippery tip wouldn't slip into the hole.`;
   `I tried again and again, but it wouldn't go where You wanted it to go.`;
   Kid`"It should be easier than this..."`;
   You(Y6A256)`"Geez you're really bad at this."`;
   Kid`"Well, whaddya expect me to do?"`;
   Kid`"It's my first time doing this."`;

});
bgload({ name: `EV_YU07B`, transition: 20 });
showTextbox();
text(() => {
   You(Y6A257)`"Ow..."`;
   Kid`"S...sorry..."`;
   You(Y6A258)`"Where are you poking that thing?...That's the wrong spot."`;
   You(Y6A259)`"It's a little closer to you."`;
   Kid`"Here?"`;
   You(Y6A260)`"No, no. Further back."`;
   You(Y6A261)`"Yeah! Right there! Stick it in! Hurry!"`;
   `Click!`;

});
bgload({ name: `EV_YU07C`, transition: 20 });
showTextbox();
text(() => {
   Kid`"I got it! Finally, it's in!"`;
   You(Y6A262)`"Oh good, you did it, and it's your first time!"`;
   Kid`"........."`;
   You`"........."`;
   Kid`"........."`;
   You`"........."`;
   Kid`"........."`;

});
bgload({ name: `BG12A1`, transition: 20 });
fgload({ id: 1, name: `YU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A263)`"Ahem...so that is how that works."`;
   You(Y6A264)`"I think you've seen how hard it is to be aware of the different dimensions of things from just one perspective..."`;
   Kid`"So?"`;
   You(Y6A265)`"To review, this is what I mean."`;
   You(Y6A266)`"The information that you get from one point is flat or two-dimensional information."`;
   You(Y6A267)`"To get enough information for a three-dimensional view you have to have at least two perspectives."`;
   You(Y6A268)`"So, your right and left eyes..."`;
   You(Y6A269)`"If you don't use two viewpoints, then you won't be able to register what is going on around you in three dimensions."`;
   Kid`"?"`;

});
fgload({ id: 1, name: `YU07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A270)`"Do you still NOT get it?"`;
   Kid`"I see what you're saying, but..."`;
   Kid`"What does this have to do with the third eye?"`;
   You(Y6A271)`"It doesn't have anything to do with it."`;
   You(Y6A272)`"I've already just about explained the whole thing."`;
   Kid`"???"`;

});
fgload({ id: 1, name: `YU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A273)`"Alright, let me try something else. Let me ask you a question..."`;
   You(Y6A274)`"What kind of information can you get from one perspective?"`;
   Kid`"You said two-dimensional information, right?"`;
   You(Y6A275)`"And what kind of information can you get from two perspectives?"`;
   Kid`"I think you said three-dimensional information."`;
   You(Y6A276)`"And so from three perspectives what kind of information could you get?"`;
   Kid`"Hmmm...four-dimensional information maybe?"`;

});
stopBGM();
showTextbox();
text(() => {
   Kid`"Huh? The fourth dimension!"`;
   `You nodded slowly, listening to me.`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
playBGM({ num: 14, volume: 100 });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `So, the fourth dimension was...`;
   `Wait. What was a dimension anyway?`;
   `You took a notebook out of her locker and started illustrating her points with diagrams using the familiar pen.`;

});
bgload({ name: `IT01A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `${nextPage(0)}Zero dimension.${nextPage(1)}${noWait}`;

});
showTextbox();
text(() => {
   `${noWait}`;
   `A world made of points.`;
   `With zero dimensions, there is no mass nor area.`;
   `It is depicted using coordinates.`;
   `Or we might call it 'nothingness,' or even zero.`;
   fadeClearPage();
});
hideTextbox();
bgload({ name: `IT01B`, transition: 20 });
showTextbox();
text(() => {
   `${nextPage(0)}One dimension.${nextPage(1)}${noWait}`;

});
showTextbox();
text(() => {
   `${noWait}`;
   `This is an extension of the point - it is a straight line.`;
   `In other words, a cross section of a straight line is a point.`;
   `One way of indicating this is through length.`;
   fadeClearPage();
});
hideTextbox();
bgload({ name: `IT01C`, transition: 20 });
bgload({ name: `IT01D`, transition: 20 });
showTextbox();
text(() => {
   `${nextPage(0)}Two dimension.${nextPage(1)}${noWait}`;

});
showTextbox();
text(() => {
   `${noWait}`;
   `This is an extension of the straight line - this is a flat world.`;
   `In other words, a cross section of a plane, or flat world, is a straight line.`;
   `This is indicated using two concepts...length and width.`;
   fadeClearPage();
});
hideTextbox();
bgload({ name: `IT01E`, transition: 20 });
bgload({ name: `IT01F`, transition: 20 });
showTextbox();
text(() => {
   `${nextPage(0)}Three dimension.${nextPage(1)}${noWait}`;

});
showTextbox();
text(() => {
   `${noWait}`;
   `This is an extension of the flat world - it is the three-dimensional world.`;
   `In other words, a cross section of the solid world is a plane or flat surface.`;
   `This is depicted using three concepts...length, width and height.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `This isn't the most precise way of putting it, but you can think of three dimensions as an area in space composed of length, width and height.`;
   `(By depicting length, width and height on x, y, and z axis one axis adds a vertical element to the other two.)`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `


${noWait}`;
   `                     And...`;
   fadeClearPage();
});
hideTextbox();
bgload({ name: `IT01G`, transition: 20 });
showTextbox();
text(() => {
   `The fourth dimension adds a 't' axis, or time, to these three and because four dimensions is no longer just space, it is called space-time.`;
   `One of the x, y, z and t axis adds a vertical element, crossing perpendicularly to the other three.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `${nextPage(0)}Four dimension.${nextPage(1)}${noWait}`;

});
showTextbox();
text(() => {
   `${noWait}`;
   `This is an extension of three dimensions - a world of space and time.`;
   `In other words a cross section of space-time is three-dimensional.`;
   `Four dimensions are depicted using four concepts...length, width, height and time.`;
   fadeClearPage();
});
hideTextbox();
monoColorOverlay({ interval: 6, color: WHITE });
bgload({ name: `BG12A1`, transition: 26 });
fgload({ id: 1, name: `YU01ADS`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   Kid`"So basically, if you are able to gain the third eye then you have enough information to experience four dimensions."`;
   You(Y6A277)`"Yup. It's space plus time."`;
   You(Y6A278)`"Just like we can use our two eyes to constantly have an image of the space in the world before us..."`;
   Kid`"So with three perspectives, we can also be aware of the cross-cutting element of time."`;

});
fgload({ id: 1, name: `YU02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A279)`"Yup. That's it."`;
   `You put the cap on the pen. `;
   Kid`"I feel like I kinda understand."`;

});
fgload({ id: 1, name: `YU07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A280)`"What?"`;
   Kid`"My premonitions."`;
   Kid`"I didn't travel through time."`;

});
fgload({ id: 1, name: `YU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A281)`"I know! You've gained the third eye!"`;
   You(Y6A282)`"That's why you know the future!"`;
   You(Y6A283)`"...Why do you keep saying such stupid things?"`;
   Kid`"You don't think so?"`;
   You(Y6A284)`"Nope!"`;

});
fgload({ id: 1, name: `YU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A285)`"I mean, there's no evidence."`;
   You(Y6A286)`"Why would your third eye suddenly open?"`;
   You(Y6A287)`"For what reason? By what method?"`;
   Kid`"I'll bet...if I get my memory back...then I'll..."`;
   You(Y6A288)`"That again? You always fall back on your amnesia."`;
   You(Y6A289)`"You were looking for the cause of your memory loss in the first place, right?"`;
   You(Y6A290)`"So, what do amnesia and the third eye have to do with each other?"`;
   Kid`"........."`;
   You(Y6A291)`"And what about that ghost girl that you said you saw?"`;
   Kid`"........."`;
   You(Y6A292)`"I mean it's so naive, stupid and childish..."`;
   Kid`"But your mom believed in it, right?"`;

});
fgload({ id: 1, name: `YU04ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A293)`"We're not going there!"`;
   You(Y6A294)`"I don't want to think about the past!"`;

});
if (l_talked_to_you_about_her_father_in_6th_day == 0) goto(lbl_00000677);
showTextbox();
text(() => {
   You(Y6A295)`"I told you that already!"`;

});
goto(lbl_0000067c);
let lbl_00000677;
showTextbox();
text(() => {
   You(Y6A296)`"I told you yesterday as well!"`;

});
let lbl_0000067c;
showTextbox();
text(() => {
   Kid`"But..."`;
   Kid`"Do you like things the way they are?"`;
   Kid`"You don't care if you never find out who your mom and dad were for the rest of your life?"`;
   You(Y6A297)`"Stop it!"`;
   `You had covered both of her ears in denial.`;
   Kid`".................."`;
   You`".................."`;
   Kid`"I...I wanted to know about my past."`;
   Kid`"I still hope to find it out."`;
   Kid`"But I don't have my memory nor any clue to go by so..."`;
   You`"........."`;
   Kid`"You have...your memory, right?"`;

});
fgload({ id: 1, name: `YU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A298)`"—!"`;
   Kid`"So that means that you have something that I don't have. You have a clue."`;
   Kid`"And more than that, you were able to get information from LeMMIH."`;
   Kid`"So how come you still don't want to think about it?"`;
   You`"........."`;
   Kid`"I thought you came to LeMU because you wanted to find out the truth."`;
   Kid`"Why'd you change your mind?"`;
   Kid`"Did something make you change?"`;
   You`".................."`;
   Kid`"Why are you denying your past?"`;
   Kid`"Isn't that the same as denying yourself?"`;
   Kid`"With your own two eyes..."`;

});
hideTextbox();
delay({ interval: 60 });
showTextbox();
text(() => {
   Kid`"Why don't you try to face truth directly?"`;
   You`"..........................."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid`"You!!"`;
   `I grabbed You's arms and pulled them away from her ears.`;
   Kid`"Answer me! Why?!"`;
   Kid`"Why do you want to give up when you are almost there?"`;
   Kid`"Why throw away everything that you have worked so hard for?"`;
   `I shouted at her.`;
   `Because I couldn't believe what she was doing.`;
   `It was something that she would be hard pressed to find in her wildest dreams...`;
   `And just as she was about to attain it, she had suddenly changed her mind.`;
   `I was nowhere near reaching my dream. `;
   `But You's was almost within her reach. `;
   `So I felt...terribly...terribly...`;
   `...disappointed.`;
   You`"........."`;
   Kid`"I don't get it."`;
   Kid`"What you have longed to know is right in front of you, and..."`;
   Kid`"I was so jealous...and so happy for you."`;
   Kid`"Why...?"`;
   You`"........."`;

});
stopBGM();
showTextbox();
text(() => {
   You(Y6A299)`"I got scared."`;
   Kid`"Huh?"`;

});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A300)`"I got scared of learning the truth!"`;
   Kid`"........."`;
   You(Y6A301)`"Think about it! Everything that I've believed for so long has turned out to be lies."`;
   You(Y6A302)`"It's all just fiction...!"`;
   You(Y6A303)`"Tell me! Is that supposed to happen? Is it normal?"`;
   You(Y6A304)`"I can't believe anymore...I can't believe anything."`;
   Kid`".................."`;

});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A305)`"I didn't know...that the truth was this painful."`;
   `You put her hand on her chest.`;
   You(Y6A306)`"It hurts."`;
   You(Y6A307)`"My heart hurts."`;
   You(Y6A308)`"The closer I get to the truth, the more my heart gets shredded to bits..."`;
   You(Y6A309)`"I can't take it anymore...!"`;
   Kid`"............................................."`;
   You(Y6A310)`"I don't want to know anymore..."`;
   You(Y6A311)`"I don't want to know...what is real!"`;

});
hideTextbox();
delay({ interval: 120 });
playSFX({ name: `SE07_12`, a1: 0, volume: 100 });
eff_4f = 120;
eff_3b = 1;
eff_3c = VAR_cc_0_6;
eff_3d = 12;
eff_3e = 2;
eff_3f = VAR_c8_0_6;
eff_40 = 5;
openShakeScreenAnim();
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `At that sound and shaking we looked up in surprise.`;

});
hideTextbox();
playBGM({ num: 4, volume: 100 });
playSFX({ name: `SE09_03L`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `The next instant, warning alarms started shrieking.`;
   `All around me the squeal of straining metal echoed from the structure.`;
   `The shaking continued on and off.`;
   `W-what...`;
   You(Y6A312)`"No...no way...!"`;
   Kid`"Could implosion already have started...?"`;
   `It was 5:45 p.m.`;
   `The estimated time of implosion was 4:30 p.m. May 7.`;
   `But given the 12-hour margin of error, I thought it could well be the implosion.`;
   `We burst out of the room.`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeFG({ id: 1, useAnim: false });
bgload({ name: `BG25B3`, transition: 26 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
clock(`17:46`);
showTextbox();
text(() => {
   `The corridor was flooded and the water level was rising.`;
   `I was stunned by how high the water already was...`;

});
stopSFX()
showTextbox();
text(() => {
   `In a little while, the alarm ceased.`;
   `It looked like the flooding had been stopped just in time.`;
   Kid`"It looks like it's under control..."`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A313)`"Yeah..."`;
   Kid`"I wonder if everybody is alright."`;
   You(Y6A314)`"Let's go check."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   You(Y6A315)`"Sora? Sora? Can you hear me?"`;
   `But there was no response.`;
   Kid`"It's no good...I bet the sensors are out of whack..."`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A316)`"Should we go find Sora first? She's probably in the Control Room."`;
   Kid`"Yeah."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `We put our argument aside for the moment and concentrated on handling the situation at hand.`;
   `You and I headed down to the third floor.`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `BG27A3`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
delay({ interval: 60 });
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   You(Y6A317)`"We have to find a way out of here fast!"`;
   `You sprinted down the stairs.`;
   Kid`"..."`;
   `Even though we were in the middle of a crisis, I couldn't get my mind off of what we were talking about.`;
   `The mystery surrounding You's parents.`;
   `And my inexplicable premonitions.`;
   `I just had this feeling that these two things were somehow connected to the third eye.`;
   `(Why? Why can't I shake this feeling?)`;

});
bgload({ name: `BG26B3R`, transition: 20 });
showTextbox();
text(() => {
   `We reached and stood on the third floor.`;
   Kid`"Hey, You."`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A318)`"What? What's wrong?"`;
   Kid`"I was just thinking..."`;
   Kid`"I was thinking that the thing about your parents and the stuff that has been happening to me might have something in common."`;
   You`"........."`;
   Kid`"I got the feeling that...'the third eye' ties them together somehow."`;

});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A319)`"What're you talking about? Do you know what kind of situation we're in right now?"`;
   You(Y6A320)`"This is about whether we live or die!"`;
   You(Y6A321)`"That's not important now!"`;
   Kid`"It is!"`;
   Kid`"But you said your mom said the third eye..."`;
   You(Y6A322)`"Don't you talk to me about my mom!"`;

});
if (l_chose_almost_completely_vertical == 0) goto(lbl_00000931);
if (l_you_point < 7) goto(lbl_00000931);
l_you_gd_flag = 1;
showTextbox();
text(() => {
   You(Y6A323)`"That person...is not my...!"`;

});
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `You stopped in mid sentence.`;

});
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Suddenly, she lifted her head and started running.`;
   `I hurriedly went after her.`;

});
goto(lbl_00000943);
let lbl_00000931;
showTextbox();
text(() => {
   You(Y6A324)`"That person...is not my mother."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `After saying that, You turned and started walking.`;
   `Looking straight ahead, she made for the Control Room.`;
   `I followed her.`;

});
let lbl_00000943;
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopSFX()
stopBGM();
bgload({ name: `BG16A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
setSceneTitle({ index: 85 });
clock(`17:53`);
showTextbox();
text(() => {
   `Sora wasn't inside.`;
   `I looked at the life reading numbers.`;

});
bgload({ name: `IT04C`, transition: 20 });
delay({ interval: 90 });
showTextbox();
text(() => {
   `Not being human, Sora shouldn't register on the bio scan, so the number five matched with the number of us that we knew to be stuck in LeMU.`;
   `In other words, everyone was alive.`;

});
bgload({ name: `BG16A1`, transition: 20 });
if (l_you_gd_flag == 0) goto(lbl_00000c14);
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `You sat in the chair, typed on the keyboard calling up the login page for the database.`;
   `Incidentally, Sora had removed the login restriction that had kept us from accessing it before.`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A325)`"I figured it out. I know how to do it."`;
   Kid`"What?"`;
   You(Y6A326)`"How to get authorization clearance."`;
   Kid`"So you figured out the password mystery?"`;

});
stopSFX()
showTextbox();
text(() => {
   `You shook her head.`;
   You(Y6A327)`"That's not what I mean."`;
   Kid`"What then?"`;
   You(Y6A328)`"The empty fall sky/ A single cuckoo calls out/ Brings a chill to me."`;
   You(Y6A329)`"That should be the password."`;
   Kid`"But you couldn't get through with that before, right?"`;

});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `You input the password.`;

});
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `''Access denied/ Invalid name or password.'`;
   Kid`"See?"`;
   You(Y6A330)`"No, that's not what I mean."`;
   You(Y6A331)`"It wasn't the password that was wrong."`;
   You(Y6A332)`"It was the name."`;
   `You moved the cursor to the name column.`;
   `It read Yukie Tanaka.`;
   You(Y6A333)`"That person wasn't my real mother..."`;
   You(Y6A334)`"So her name wasn't Yukie Tanaka..."`;
   You(Y6A335)`"So she wasn't registered under that name at all!"`;
   You(Y6A336)`"So..."`;
   You(Y6A337)`"So if I can figure out what her real name is..."`;
   Kid`"Her name..."`;
   Kid`"Name..."`;

});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A338)`"Hmmmm...hmmmm..."`;
   Kid`"You never saw a drivers license or any document with your mom's name on it?"`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A339)`"Nope. Not even once."`;
   Kid`"I see..."`;
   You(Y6A340)`"Until now, I never even dreamed that that person was lying about being my mother."`;
   You(Y6A341)`"I always thought that she was my mom...that she was 'Yukie Tanaka'..."`;
   You(Y6A342)`"That was what she said.... Normally no one would ever think that their parent is lying about their name."`;
   Kid`"That's true..."`;

});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A343)`"Hmmm..."`;

});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A344)`"It's no good...! I've got no clue."`;
   `You put her arms around her head and bowed it down.`;
   You(Y6A345)`"There are just so many possible patterns..."`;
   Kid`"But you could narrow it down a certain degree, right?"`;
   Kid`"Even if she were using a fake name, I'll bet it has something in common with her real one."`;
   Kid`"Like the initials are the same or something..."`;
   You(Y6A346)`"I don't think that's very likely."`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A347)`"I mean, she was impersonating my mom, Yukie Tanaka, after all. It's not like she made up some Miss virtual somebody."`;
   You(Y6A348)`"So I think it makes more sense to assume that their names won't have anything in common."`;
   You(Y6A349)`"If she was a complete stranger, there is no reason for her last name to even be Tanaka."`;
   Kid`"Yeah...I guess you're right."`;
   You(Y6A350)`"Besides, even if the letter of her name were the same..."`;
   You(Y6A351)`"She could be called Yui, Yuka, Yuki, Yuko, Yuna, Yuno, Yuma, Yumi, Yuri, Yue, Yukari, Yukiko, Yukina, Yukino..."`;
   You(Y6A352)`"...Yukimi, Yusako, Yutaka, Yuzuki, Yuho, Yuma, Yumika, Yumiko, Yumina, Yumeko, Yumemi, Yuyu, Yuria, Yuriko..."`;
   Kid`"..............."`;
   You(Y6A353)`"And those are all just off the top of my head."`;
   You(Y6A354)`"The chances are slim, and she could have a bizarre name like mine."`;
   Kid`"A bizarre name..."`;
   Kid`"That reminds me, you still haven't told me your full name..."`;
   Kid`"I remember you saying it was really long."`;
   You(Y6A355)`"Yeah...it goes on forever."`;
   You(Y6A356)`"So people always get it wrong."`;
   Kid`"No kidding?"`;
   You(Y6A357)`"...Do you want me to tell you?"`;
   Kid`"Your full name?"`;
   You(Y6A358)`"Yeah."`;
   Kid`"Course I do."`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A359)`"It's kinda embarrassing, so I don't usually tell people, but..."`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A360)`"Since it's you, I'll tell you."`;
   Kid`"............"`;
   You(Y6A361)`"But you have to promise not to laugh. Okay?"`;
   Kid`"S-sure..."`;
   You(Y6A362)`"Alright! Here I go!"`;
   You(Y6A363)`"My name is..."`;
   You(Y6A364)`"Yu..."`;
   You(Y6A365)`"bisei...akikana..."`;
   You(Y6A366)`"...Tanaka."`;
   Kid`"Uh..."`;
   You(Y6A367)`"The 'Yu' means gentle. The 'bi' means beautiful, the 'sei' means pure. The 'aki' and 'ka' mean autumn and scent and 'na' means flower."`;
   Kid`"..............."`;
   `(Yubiseiakikana ...Tanaka...)`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A368)`"So? Whaddya think?"`;
   Kid`"............"`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A369)`"I know. It's such a long name you don't know what to do with it."`;
   Kid`"No...it's not exactly...that...It's the aki..."`;
   Kid`"Aki...?"`;
   `Yubisei'aki'kana.`;
   Kid`"Is that really it?"`;

});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A370)`"Geez! Really! You don't believe me? It's my name. It is!"`;
   Kid`"That's not what I meant..."`;
   You(Y6A371)`"Anyway, come with me."`;
   `You took my hand and led me out of the Control Room.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeFG({ id: 1, useAnim: false });
bgload({ name: `BG04B1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   `We headed into the Lemurian Ruins.`;
   Kid`"Listen, I don't think now is the time for this!"`;

});
fgload({ id: 1, name: `YU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A372)`"Be quiet!"`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A373)`"Even if YOU don't like it, it is still my name so..."`;
   You(Y6A374)`"It's the name that my mom gave me..."`;
   You(Y6A375)`"So you have to believe me!"`;
   Kid`"........."`;
   `You stood in front of a door at the edge of the room.`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A376)`"This is the room for operators to run the theme park."`;
   You(Y6A377)`"This room is used to adjust the lighting, the air conditioning, observation cameras and other stuff..."`;
   You(Y6A378)`"This door is set up so that park visitors can't accidentally open it. Only registered staff can open it."`;
   You(Y6A379)`"You have to undergo a fingerprint and voice check to open it."`;
   Kid`"So what?"`;
   You(Y6A380)`"I'm a member of the staff, so of course I am registered here."`;
   You(Y6A381)`"That means that if I don't say my proper name, the door won't open."`;
   You(Y6A382)`"So if the name I just told you is a lie then it won't open the door."`;
   You(Y6A383)`"Get it?"`;
   Kid`"Yeah. I got it."`;
   You(Y6A384)`"Seeing is believing, right? Let me show you."`;
   You(Y6A385)`"You ready? Watch closely."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `You put her hand on the panel next to the door.`;
   `The panel had a lamp that was shining red.`;
   You(Y6A386)`"Yubiseiakikana Tanaka."`;

});
hideTextbox();
playSFX({ name: `SE00_18`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Beep!`;
   `Responding to her voice, the lamp turned green and then...`;

});
hideTextbox();
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Whiiiir!`;
   `The door opened.`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A387)`"So? Believe me now?"`;
   Kid`"...Yeah."`;
   `With that I thought I had to believe her.`;

});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
removeFG({ id: 1, useAnim: false });
stopSFX()
showTextbox();
text(() => {
   `We returned back to the Control Room.`;
   `That whole time, You's name kept churning through my mind.`;
   `"Yubiseiakikana..."`;
   `"...Akikana..."`;
   `(...Aki...)`;
   `The truth was a lie.`;
   `The lie was true.`;
   `My mind was confused with what might be true and what false.`;
   `...But...`;
   `(I thought that if a name had autumn, or 'aki' in it, there might as well be one with spring, or 'haru' in it.)`;
   `Gradually I became convinced that this could be right.`;

});
hideTextbox();
delay({ interval: 60 });
showTextbox();
text(() => {
   `When we got back to the Control Room, we decided to review escape routes.`;
   `...But we didn't really think we would come up with anything new.`;

});
goto(lbl_00000c28);
let lbl_00000c14;
showTextbox();
text(() => {
   `We didn't think it was a good idea to move from where we were.`;
   `People on the outside might have found out what had happened and be on the way.`;
   `So we decided to try to think of a way out.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
showTextbox();
text(() => {
   `We looked at a map of the complex and talked about this and that possibility.`;
   `...But at that point, we really didn't expect to find anything new.`;

});
let lbl_00000c28;
hideTextbox();
delay({ interval: 120 });
bgload({ name: `BG16A1`, transition: 26 });
playSFX({ name: `SE03_05`, a1: 0, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
clock(`18:24`);
waitForSFX();
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A388)`"Oh!"`;
   Kid`"W-what...what's that exclamation mean..."`;
   You(Y6A389)`"Could it be...that this..."`;
   You(Y6A390)`"Could this be a message from the outside?"`;
   Kid`"What...!?"`;

});
bgload({ name: `EV_YU08D`, transition: 20 });
showTextbox();
text(() => {
   `Suddenly the monitor displayed an image.`;
   `It was a shaky video mixed with static...`;
   `When the screen finally settled down...`;

});
bgload({ name: `EV_YU08A`, transition: 20 });
showTextbox();
text(() => {
   `It showed the face of a girl that I did not recognize.`;
   You`"........."`;

});
playBGM({ num: 24, volume: 100 });
showTextbox();
text(() => {
   You(Y6A391)`"M-mother..."`;
   `Was this person...?`;
   `Was she...You's mother...?`;
   You(Y6A392)`"No..."`;
   You(Y6A393)`"You're not...are you?"`;
   You(Y6A394)`"You're not really my mother, are you?"`;
   Woman(Y6A395)`"That's right..."`;
   Woman(Y6A396)`"I am not your mother..."`;
   You(Y6A397)`"—!!"`;
   You(Y6A398)`"You are...terrible..."`;
   You(Y6A399)`"How could you lie to me all this time..."`;
   Woman(Y6A400)`"I can't talk about that yet."`;

});
bgload({ name: `EV_YU08B`, transition: 20 });
showTextbox();
text(() => {
   You(Y6A401)`"Why not?!"`;
   You(Y6A402)`"You've deceived me all along and..."`;
   You(Y6A403)`"You even want hide the truth now!?"`;
   Woman(Y6A404)`"I never deceived you..."`;
   Woman(Y6A405)`"I may not be able to call myself your mother."`;
   Woman(Y6A406)`"But...but You, you are really my child."`;
   Woman(Y6A407)`"You were born of my body..."`;
   You(Y6A408)`"Don't lie to me!"`;
   Woman(Y6A409)`"I'm sorry...You..."`;
   Woman(Y6A410)`"After you come up here, I will tell you..."`;
   You(Y6A411)`"Here? Where is here? Where are you?"`;
   Woman(Y6A412)`"I am on Insel null, the floating island."`;
   You(Y6A413)`"Huh? What are you talking about?"`;
   You(Y6A414)`"...What are you...?"`;

});
bgload({ name: `EV_YU08D`, transition: 20 });
showTextbox();
text(() => {
   `The woman vanished from the screen.`;
   `Then a man appeared.`;

});
bgload({ name: `EV_YU08C`, transition: 20 });
showTextbox();
text(() => {
   Man(Y6A901)`"We are about to start operating the high pressure gas input fan from the floating island.`;
   Man(Y6A902)`It will remove the water from the emergency stairs near the central area and the emergency corridor connected to them."`;
   Man(Y6A416)`"The estimated time of completion is 9:30 p.m., three hours from now."`;
   Man(Y6A417)`"When the water is cleared, we want you to climb the emergency stairs to the surface island."`;
   Man(Y6A418)`"Please remain where you are until then."`;
   You(Y6A419)`"Who...are you?"`;
   Man(Y6A420)`"I will explain everything once you are up here."`;
   Man(Y6A421)`"It's not the kind of thing we should talk about via a display."`;
   You`"........."`;
   Man(Y6A422)`"But You, there is one thing I want you to know."`;
   Man(Y6A423)`"Your mother loves you more than anything."`;
   Man(Y6A424)`"Please don't forget that."`;

});
removeBG({ mode: BLACK, transition: 2 });
delay({ interval: 120 });
bgload({ name: `IMG01A`, transition: 20 });
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `Eventually the others straggled into the Control Room.`;
   `Takeshi, Sara, Tsugumi...and Sora.`;
   `I told them about the message we had just had.`;
   `The others couldn't hide their surprise.`;
   `It was such sudden, unexpected good news.`;
   `Some of them even thought it might be a trap.`;
   `Of course, that was what I thought at first, too.`;
   `My skeptical mind wanted to ask, "Why now...?"`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `We felt like a trick might still be being played on us, but we had no other choice but to go along with it.`;
   `There were only a few hours left until LeMU imploded.`;
   `There were no other options left for us.`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
bgload({ name: `BG17A1`, transition: 26 });
stopBGM();
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
hideTextbox();
ADV_Mode();
clock(`19:7`);
showTextbox();
text(() => {
   `We moved to the Conference Room and waited for the time that the water would be cleared.`;
   `The six of us said hardly anything.`;
   `Everyone just stared off in space waiting impatiently for time to pass.`;
   `You slumped back in a chair and stared blankly at the ceiling.`;
   `She looked like a puppet with its strings cut.`;
   `The room was tense with anticipation.`;
   `I couldn't handle it and decided to...`;

});
choice(
   `Talk to Takeshi`,
   `Talk to You`,
   `Talk to Tsugumi`,
   `Talk to Sora`,
   `Talk to Sara`,
);
switch (l_choice) {
   case 0: goto(lbl_00000dac);
   case 1: goto(lbl_00000e28);
   case 2: goto(lbl_00000e5f);
   case 3: goto(lbl_00000ec4);
   case 4: goto(lbl_00000efb);
}
let lbl_00000dac;
showTextbox();
text(() => {
   Kid`"Hey, Takeshi?"`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(Y6A425)`"Yeah? What?"`;
   Kid`"What were you so busy doing before?"`;
   Takeshi(Y6A426)`"Oh...that was..."`;
   Takeshi(Y6A427)`"Well, I guess you could say...I was looking for something."`;
   Kid`"Looking for something?"`;
   Takeshi(Y6A428)`"Yeah."`;
   Kid`"Did you find it?"`;

});
fgload({ id: 1, name: `KB03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(Y6A429)`"No...unfortunately, not yet."`;
   Takeshi(Y6A430)`"I...haven't found it..."`;
   Kid`"Did you give up?"`;

});
fgload({ id: 1, name: `KB04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(Y6A431)`"You kidding? Think I'd give up?"`;
   Takeshi(Y6A432)`"I can't give up."`;
   Kid`"........."`;

});
fgload({ id: 1, name: `KB05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(Y6A433)`"But right now I'll have to take a break from the search."`;
   Kid`"I see..."`;
   Kid`"I hope you find whatever you're looking for."`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(Y6A434)`"Yeah."`;
   Takeshi(Y6A435)`"...Thanks."`;

});
goto(lbl_00000fb8);
let lbl_00000e28;
showTextbox();
text(() => {
   Kid`"Hey, You?"`;

});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You`"........."`;
   Kid`"Hey, YOU!"`;

});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A436)`"Eh? What...? Did you just call me?"`;
   Kid`"Yeah."`;
   You(Y6A437)`"Uh...would you mind leaving me alone right now?"`;
   You(Y6A438)`"I don't really feel like talking about anything."`;
   Kid`"........."`;
   You(Y6A439)`"I'm sorry...but there is something that I want to think through."`;
   Kid`"I understand...I'm sorry to bug you."`;
   You`"........."`;
   `I figured that it must have been a real shock for her... to find out that the lady had been pretending to be her mother.`;
   `It looked like all of our guesses had been right on target....`;

});
goto(lbl_00000fb8);
let lbl_00000e5f;
showTextbox();
text(() => {
   Kid`"Hey, Tsugumi?"`;

});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   Kid`"Hey, TSUGUMI!"`;

});
fgload({ id: 1, name: `TU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(Y6A440)`"Shut up!"`;
   Kid`"........."`;
   Tsugumi(Y6A441)`"Don't talk to me."`;
   Tsugumi(Y6A442)`"Do me a favor and just sit still."`;
   Tsugumi(Y6A443)`"Because there is nothing left to worry about."`;
   Tsugumi(Y6A444)`"There can't possibly be anything else you want to ask me about, right?"`;
   Kid`"........."`;
   Tsugumi(Y6A445)`"It's a good thing that my prediction was off, huh?"`;
   Kid`"Th-that's what I wanted to ask..."`;

});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   `But, after that, Tsugumi didn't say anything more.`;
   `Well, just one more thing...`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(Y6A446)`"Geez..."`;
   Tsugumi(Y6A447)`"What the heck is going on...?"`;

});
goto(lbl_00000fb8);
let lbl_00000ec4;
showTextbox();
text(() => {
   Kid`"Hey, Sora?"`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(Y6A448)`"Yes, what is it?"`;
   Kid`"Where were you before?"`;
   Sora(Y6A449)`"LeMMIH called me."`;
   Kid`"LeMMIH?"`;
   Sora(Y6A450)`"Yes."`;
   Kid`"..."`;
   Sora`"..."`;
   Kid`"Does it have to do with that industrial secret?"`;
   `No, that would have been strange. `;
   `Sora was already free from obeying the Leiblich's restrictions.`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(Y6A451)`"No, it had nothing to do with that..."`;
   Sora(Y6A452)`"I don't think I can tell you about it yet."`;
   Kid`"You mean you'll tell me when the time is right?"`;
   Sora(Y6A453)`"Yes."`;
   Kid`"Okay. Then I won't ask you anymore."`;
   Sora(Y6A454)`"I'm sorry."`;
   `And saying that, Sora dropped her head.`;

});
goto(lbl_00000fb8);
let lbl_00000efb;
showTextbox();
text(() => {
   Kid`"Hey, Sara?"`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y6A455)`"What?"`;
   Kid`"What was it that you had to do after that?"`;
   `Of course, I meant after we split up in the changing room.`;
   `The expression she had had on her face had bothered me every since.`;
   Kid`"I think you said that you had to settle something or other."`;

});
fgload({ id: 1, name: `SA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y6A456)`"That's..."`;
   Sara(Y6A457)`"...a secret."`;
   Kid`"Really?"`;
   Sara(Y6A458)`"Why? I wish you wouldn't invade my privacy."`;
   Kid`"...I'm sorry."`;
   Sara(Y6A459)`"Well, it's no big deal."`;
   Kid`"Will you tell me this much? Did you finish whatever it was?"`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y6A460)`"Of course I did."`;
   Kid`"Oh, well that's good."`;

});
fgload({ id: 1, name: `SA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara`"........."`;
   Sara(Y6A461)`"I'm not gonna go along with what everybody wants anymore." `;
   Kid`"Huh?"`;
   Sara`"........."`;
   Kid`"You mean your mom and your dad?"`;
   Sara(Y6A462)`"No...that's different...but it might be kinda similar."`;
   Sara(Y6A463)`"I've decided that I am going to live the way that I want to live from now on."`;
   Kid`"........."`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y6A464)`"I wonder where I'll go when we're out."`;
   Kid`"You're not going home?"`;
   Sara(Y6A465)`"I'm not. That place isn't my home anyway."`;
   Kid`"...?"`;
   Sara(Y6A466)`"So I'll look for the place that I should be going back to."`;
   Kid`"Well, that's the same as me."`;
   Kid`"I know! Will you take me with you?"`;

});
fgload({ id: 1, name: `SA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y6A467)`"Huh? You?"`;
   Kid`"Yeah. I mean, I don't have anywhere to go either. I'll look with you."`;
   Sara`"........."`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y6A468)`"Thanks."`;
   Sara(Y6A469)`"But I think not."`;
   Kid`"What? Why not?"`;
   Sara(Y6A470)`"Because...I'm pretty sure someone'll hold it against me."`;
   Kid`"But who?"`;

});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `But Sara just grinned at me without answering.`;
   Sara(Y6A471)`"Nin! Nin! Ninja!"`;

});
let lbl_00000fb8;
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
stopBGM();
removeFG({ id: 1, useAnim: false });
delay({ interval: 180 });
setSceneTitle({ index: 86 });
clock(`21:30`);
showTextbox();
text(() => {
   `Finally the appointed time arrived.`;

});
playBGM({ num: 11, volume: 100 });
bgload({ name: `BG27A1`, transition: 20 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `We climbed to the second floor and stood at the emergency corridor.`;
   `Then we began walking to the central core.`;
   `...Finally we reached a dead end.`;
   `The watertight door was shut from there, because the area had been filled with seawater before.`;

});
hideTextbox();
playSFX({ name: `SE00_03`, a1: 1, volume: 100 });
waitForSFX();
playSFX({ name: `SE00_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `The door swung open.`;

});
bgload({ name: `BG27A3`, transition: 20 });
stopSFX()
showTextbox();
text(() => {
   `The water was gone.`;
   `The corridor was dry and we continued heading toward the center.`;
   `....`;
   `Sara, Takeshi and Tsugumi walked ahead....`;
   `You, Sora and I walked a few dozen meters behind them.`;
   `....`;
   Takeshi(Y6A472)`"Hey! We're going ahead!"`;
   `It seemed like Takeshi had already reached the emergency stairs.`;
   `Sara, Takeshi and Tsugumi disappeared up the stairs.`;

});
playBGM({ num: 10, volume: 100 });
showTextbox();
text(() => {
   `But immediately after that - `;

});
playSFX({ name: `SE02_10`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   Kid`"Oh no!"`;

});
eff_41 = 11;
eff_42 = 8;
eff_50 = 144;
showDimInAndOutAnim();
playSFX({ name: `SE09_03L`, a1: 0, volume: 100 });
fgload({ id: 1, name: `SO04ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(Y6A473)`"This is bad! Water is flooding in!"`;
   Sora(Y6A474)`"...Sector 3...the partition on the emergency corridor is collapsing...!"`;
   Sora(Y6A475)`"Water is rushing in 103 feet ahead!"`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
closeDimInAndOutAndFilterAnim();
removeFG({ id: 1, useAnim: true });
removeBG({ mode: BLACK, transition: 62 });
showTextbox();
text(() => {
   `The sound of rushing water could be heard in the distance!`;

});
hideTextbox();
stopSFX()
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
unSkippableDelay(3);
unSkippableDelay(1);
playMovie(`MOV02A`);
unSkippableDelay(1);
unSkippableDelay(1);
monoColorOverlay({ interval: 0, color: BLACK });
playSFX({ name: `SE09_03L`, a1: 0, volume: 100 });
bgload({ name: `BG27A1`, transition: 26 });
fgload({ id: 1, name: `SO04ADS`, x: 320, useAnim: false });
eff_41 = 11;
eff_42 = 8;
eff_50 = 144;
showDimInAndOutAnim();
eff_4f = 0;
eff_3b = 1;
eff_3c = VAR_c2_0_6;
eff_3d = 1;
eff_3e = 2;
eff_3f = VAR_c1_0_6;
eff_40 = 1;
openShakeScreenAnim();
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   Sora(Y6A476)`"It's no good! We won't make it! Go back now!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `The door leading to the emergency stairs was swallowed in water.`;
   Kid`"You, what're you doing? Run! Now!"`;

});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y6A477)`"...Okay..."`;
   Kid`"Now hang on!"`;
   `I grabbed You's hand and doubled back.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
closeDimInAndOutAndFilterAnim();
closeShakeScreenAnim();
delay({ interval: 120 });
playBGM({ num: 12, volume: 100 });
bgload({ name: `BG11A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`21:49`);
showTextbox();
text(() => {
   `We fled to the Security Office.`;
   `You, Sora and I were there.`;
   `It looked like the flooding had subsided....`;
   `According to Sora, there were only a few dry areas left in the complex.`;

});
hideTextbox();
playSFX({ name: `SE03_05`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `A message came from outside.`;
   Man(Y6A478)`"The other three are fine!"`;
   Man(Y6A479)`"Are you alright?"`;
   Kid`"Yeah, I think so..."`;
   Man(Y6A480)`"That flooding was apparently a miscalculation on our part."`;
   Man(Y6A481)`"I don't think we got the partition strength wrong."`;
   Man(Y6A482)`"So...we don't know what caused it."`;
   Kid`"What do you want us to do now?"`;
   Man(Y6A483)`"For now, you wait there. We'll come up with something soon."`;
   Kid`"Can't you use the high pressure gas fan to get rid of the water again?"`;
   Man(Y6A484)`"Actually....no..."`;
   Man(Y6A485)`"The thing won't work.... And we're not sure why..."`;
   Kid`"Huh? What? I'm having trouble hearing you."`;
   `Static had broken up part of the message and I hadn't caught it.`;
   `It looked like another crisis had struck.`;
   `From the speaker on their side we heard a lot of hurried noise and a rush of air.`;
   Man(Y6A486)`"What is...is that...real...?"`;
   Man(Y6A487)`"Is that..."`;
   Man(Y6A488)`"...lick...kel..."`;
   Man(Y6A489)`"...Blick Winkel...is...here..."`;
   `And then communications were cut off.`;
   Kid`"Sora...?"`;
   `With a solemn look, Sora shook her head.`;
   Kid`"............"`;
   Kid`"Damn it! We were almost there!"`;
   Kid`"Why this? Why did this happen to us...?"`;
   `I punched the console.`;
   Kid`"I don't get any of this..."`;
   Kid`"What is that...? Blick Winkel?"`;
   Kid`"Hey, Sora...what does this mean...?"`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora`"............"`;
   `Sora shook her head again.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I sighed and sat down in a chair.`;
   `You sat slumped in the chair next to me.`;
   `I looked at the monitor.`;

});
bgload({ name: `IT04B`, transition: 20 });
showTextbox();
text(() => {
   `It displayed the life reading for the complex.`;
   `'Life readings: 3'`;
   Kid`".........Huh?"`;
   `Three?`;
   `I wondered why. Only You, Sara and I were left in LeMU...`;
   `And Sora...the bio scan shouldn't pick her up...`;

});
bgload({ name: `BG11A1`, transition: 20 });
showTextbox();
text(() => {
   Kid`"What is this? Is this broken...?"`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid`"What does this mean? Sora?"`;
   Sora(Y6A490)`"I...I don't know..."`;
   Sora(Y6A491)`"...I know that something is happening..."`;
   Sora(Y6A492)`"But I haven't been informed what..."`;
   Kid`"........."`;
   `I stood up from the chair.`;
   `Just then, my elbow bumped an empty can on the table.`;

});
hideTextbox();
playSFX({ name: `SE08_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Kabang!`;

});
hideTextbox();
playSFX({ name: `SE08_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Clatter, clatter, clatter....`;
   `The can fell to the floor and rolled to the wall.`;
   Kid`"........."`;
   Kid`"Is the floor...?"`;
   `(The floor is tilting!)`;
   Kid`"Hey, Sora, can you display the map of LeMU?"`;
   Kid`"Something that has a cross-sectional display of the structure."`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(Y6A493)`"Yes."`;

});
bgload({ name: `MAP06A`, transition: 20 });
showTextbox();
text(() => {
   `A map of LeMU appeared on the monitor.`;
   Kid`"It's like I thought..."`;
   Kid`"LeMU is...slanting..."`;
   `But the tilt of the complex didn't really mean anything.`;
   `Thankfully it didn't look like it was affecting our chances of survival.`;

});
bgload({ name: `BG11A1`, transition: 20 });
showTextbox();
text(() => {
   Kid`"Hey, You...whaddya think we should do now?"`;

});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You`"...................................."`;
   Kid`"You...?"`;
   `You was completely spaced out.`;
   `It didn't even look like my voice was reaching her brain....`;
   `It seemed that the light from this world had been extinguished from her eyes.`;

});
if (l_you_gd_flag == 0) goto(lbl_000013f5);
l_choice = 0;
jump(`SY7A`);
let lbl_000013f5;
l_choice = 0;
jump(`SYBD`);
