setDialogBoxColor(BLUE);
l_b0 = 5;
l_dayA = 3;
l_dayB = 3;
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG08A1`, transition: 20 });
clock(`18:53`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I ran out of the infirmary and called out to 
Tsugumi.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey, Tsugumi!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`But she ignored me and headed for the corridor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Ahhh!.... Why does it always turn out like 
this?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`Even if I was tired of everything, I had no 
choice but to chase after her.`;
   waitForClick; clearText; 
});
bgload({ name: `BG25A3`, transition: 20 });
playBGM({ num: 7, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Hey, wait!"`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She shot me a glance but did not slow her step.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I said wait!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I caught up to her and grabbed her arm, trying 
to stop her.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But she shook off my hand.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D000`); appendText; 
   Tsugumi`"I told you never to touch me."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"S-sorry..."`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Then Tsugumi started walking again as if 
nothing had happened.`;
   waitForClick; clearText; 
});
bgload({ name: `BG26A3R`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Still, I continued after her without giving up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I started talking to her as I walked next to 
her, peering at her face.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Why are you fighting with Sara?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU18ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D001`); appendText; 
   Tsugumi`"It's none of your business."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi answered without looking at me, 
letting me know my questions were unwanted.`;
   waitForClick; clearText; marker; sound(`S3D002`); appendText; 
   Tsugumi`"Don't go poking your nose into things that 
don't concern you."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"How can this not concern me?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought I had said enough.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(It really probably doesn't have anything to 
do with me.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I don't have any right to go involving myself 
in people's private affairs.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(But still...)`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D003`); appendText; 
   Tsugumi`"No...well, actually it might have something 
to do with you."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi strode away.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I stood stunned for a moment. I soon pulled 
myself together and started after her again.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`No matter how much I called out to her, 
Tsugumi didn't respond.`;
   waitForClick; clearText; marker; appendText; 
   Narr`At last I caught up with her again...`;
   waitForClick; clearText; 
});
bgload({ name: `BG03A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`...we were at the gate for boarding the 
Jellyfish Gondola.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Finally, Tsugumi pulled up there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And it didn't look as though she had stopped 
there with any intention of riding the gondola.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But it didn't look like she was going to move 
elsewhere either, or even sit down for that 
matter.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her eyes were just trained on the 
half-transparent gondola which was partially 
visible beyond the gate.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey..."`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked like she was completely ignoring me.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You don't have to respond. Just listen to 
what I'm going to say."`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I won't ask you to trust us anymore."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But that doesn't mean that you have to fight 
with anyone."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"We're all in the same situation here. We have 
to help each other."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi turned and faced me...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D004`); appendText; 
   Tsugumi`"What an insightful comment!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Do-don't joke around."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D005`); appendText; 
   Tsugumi`"I'm just telling you exactly how I feel."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I figured that I should take the fact that she 
responded to me as a slight change in attitude.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I shot her another question.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Why do you think we're your enemies? What 
reason could you possibly have?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D006`); appendText; 
   Tsugumi`"I've already told you. I can't trust you."`;
   waitForClick; clearText; marker; sound(`S3D007`); appendText; 
   Tsugumi`"You are all acting suspiciously."`;
   waitForClick; clearText; marker; sound(`S3D008`); appendText; 
   Tsugumi`"I don't know whether you are acting of your 
own will, but still."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I don't get you. What EXACTLY is suspicious?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D009`); appendText; 
   Tsugumi`"You are trying to do the exact same thing 
that you did before."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"The same as what before?"`;
   waitForClick; clearText; marker; sound(`S3D010`); appendText; 
   Tsugumi`"If you really have lost your memory, then 
maybe you don't know..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D011`); appendText; 
   Tsugumi`"There has got to be something going on behind 
the scenes with this accident as well."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You mean..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You mean to tell me, you've experienced the 
same thing as this before?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi stared at me intensely.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took her look as a 'Yes.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`In that case...`;
   waitForClick; clearText; marker; appendText; 
   Narr`In that case...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered if the same held true for me.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So that means you can foresee what is going 
to happen, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D012`); appendText; 
   Tsugumi`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I'm right, aren't I?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So it's not just me then."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But then, how come I can see into the future 
all of the sudden...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Tsugumi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hmmm...hmmm..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`See...the future...`;
   waitForClick; clearText; marker; appendText; 
   Narr`No, the feeling I had was less one of seeing 
it and more like...`;
   waitForClick; clearText; marker; appendText; 
   Narr`...knowing the future, or possible having 
experienced it before...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Did I know it? Had I experienced it?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Why?`;
   waitForClick; clearText; marker; appendText; 
   Narr`That was...`;
   waitForClick; clearText; 
});
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`...because the same thing was happening again.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Th-that's it!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You and I must have traveled to the past, 
Tsugumi!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D013`); appendText; 
   Tsugumi`"...Traveled...to the past?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yup."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The theory I had hit upon excited me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was sure, it almost had to be...`;
   waitForClick; clearText; 
});
playBGM({ num: 14, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"I have the same sense."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I know the future."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Back at the Generator Room, I knew that the 
room had built up heat."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"And take this morning, I had a feeling that 
there would be trouble in the warehouse."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"And when I first met Sara I felt like I had 
experienced something like it before."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I think I've probably experienced this same 
thing in my past..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi just stared at me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could clearly see that she was flustered.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey. Tell me your story."`;
   waitForClick; clearText; marker; appendText; 
   Narr`When I asked Tsugumi that, it was as if she 
snapped back to reality, her expression and 
the look in her eyes back to normal.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D014`); appendText; 
   Tsugumi`"My story? What? Are you kidding?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D015`); appendText; 
   Tsugumi`"As long as I can't tell if you're in this 
with the others, I won't tell you anything."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt dejected. Like I had finally found 
someone that could share my feelings, but 
wouldn't.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D016`); appendText; 
   Tsugumi`"Listen. I told you before, it would be best 
for you if you stayed away from them."`;
   waitForClick; clearText; marker; sound(`S3D017`); appendText; 
   Tsugumi`"And me, too."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"...Why?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D018`); appendText; 
   Tsugumi`"You really get bogged down in the why of 
things, don't you? The why is not important."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She crossed her arms and said this forcefully.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D019`); appendText; 
   Tsugumi`"But if there is a reason...it is so that 
things turn out the best for you."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`S3D020`); appendText; 
   Tsugumi`"For example..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D021`); appendText; 
   Tsugumi`"Your memory loss could be because of them."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"...Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`That was a shocking idea.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her words just about stopped my heart for a 
moment.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(What...there's no way....)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had never even entertained that idea.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi turned to walk away from me, ignoring 
me in my state of dismayed confusion.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't have any power left to chase after 
her.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D022`); appendText; 
   Tsugumi`"Oh...and there is one more thing."`;
   waitForClick; clearText; marker; sound(`S3D023`); appendText; 
   Tsugumi`"As long as we are shooting the breeze, shall 
I predict a bit of the future for you?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"............"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I slowly lifted up my face and looked at 
Tsugumi.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She looked serious all of the sudden.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi predicted that - `;
   waitForClick; clearText; marker; sound(`S3D024`); appendText; 
   Tsugumi`"If you continue to let yourself be used by 
them..."`;
   waitForClick; clearText; marker; sound(`S3D025`); appendText; 
   Tsugumi`"On the 7th..."`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
fgload({ id: 1, name: `TU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D026`); appendText; 
   Tsugumi`"You will die."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
delay({ interval: 60 });
setSceneTitle({ index: 73 });
bgload({ name: `BG26A3L`, transition: 26 });
playBGM({ num: 16, volume: 100 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`19:21`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I trudged along looking down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The light reflected cold and hard off the 
walls and floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi's words echoed in my mind.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi said not to trust Takeshi, You and the 
others.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That my lost memory was their fault as well.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That their behavior was suspect?`;
   waitForClick; clearText; marker; appendText; 
   Narr`But...I wondered if that could really be true.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't see how it could be.`;
   waitForClick; clearText; marker; appendText; 
   Narr`They all seemed trustworthy to me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The type of people you could really depend on.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had only spent a few days with them, but I 
was sure.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Besides, even if she were right, there were 
lots of things that were inexplicable.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If Takeshi and the others were scheming 
something...`;
   waitForClick; clearText; marker; appendText; 
   Narr`If they were trying to deceive Tsugumi and me, 
then it should be visible in their words and 
actions.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no way that normal people could put 
on an act as elaborate as this.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If one or two were trying to lie, it might be 
possible, but even with my memory impaired I 
would still be able to tell if they were all 
trying to do it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed that You, Sara and everyone were 
reacting naturally, as one might expect in 
each situation.`;
   waitForClick; clearText; marker; appendText; 
   Narr`So it didn't seem possible. It wasn't possible.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The most impossible thing to explain was why 
cause this accident? Why lie to Tsugumi and me?`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no reason and it would have been 
impossible anyway.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered if I were going to die.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That was stupid!`;
   waitForClick; clearText; marker; appendText; 
   Narr`If that was the case, we would have to be 
smart to help each other more than ever.`;
   waitForClick; clearText; 
});
bgload({ name: `BG25A3`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(The problem is probably with Tsugumi.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`That was what I thought.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe she had some grudge against Takeshi and 
the others from before...or maybe she was 
imagining everything and just paranoid...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Or maybe she was trying to make ME paranoid 
about the others and draw us into 
conflict...or something else?`;
   waitForClick; clearText; marker; appendText; 
   Narr`No, I had to stop this!`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was too crazy.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If nothing else, THIS was...all just my 
imagination working overtime and nothing but 
paranoia.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It had to be that the difficulty of the 
situation was putting incredible mental strain 
on everyone.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I...I wanted to trust everyone, and to be 
trusted.`;
   waitForClick; clearText; marker; appendText; 
   Narr`So I would continue to treat everyone as I had 
up until then.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That is what I decided.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Rather than worrying about who to trust, we 
needed to worry about how something like this 
could have happened.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If we knew the cause, we might be able to 
figure out a way out.`;
   waitForClick; clearText; marker; appendText; 
   Narr`...I remembered that Tsugumi had said 
something else.`;
   waitForClick; clearText; marker; sound(`S3D009`); appendText; 
   Tsugumi`"You are trying to do the exact same thing 
that you did before."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered about my ability to foresee 
events....`;
   waitForClick; clearText; marker; appendText; 
   Narr`Was I repeating the past?`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I wonder if I really did travel in time?)`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `BG09A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Finally I arrived back at the infirmary.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But there was no longer anyone there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Huh? Where did everybody go?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Maybe they're in the Conference Room?)`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey, Sora?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I called out to her through the microphones in 
the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But there was no reply.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora had said that the complex's sensors were 
not yet functioning everywhere.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I figured that I'd just have to go searching 
myself...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I sighed and headed out into the corridor.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG08A1`, transition: 20 });
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(Oh, that's right...!)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had an idea.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Security Office was nearby. I could use 
the observation monitors there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I might be able to see what was going on.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And maybe find out where everyone was.`;
   waitForClick; clearText; marker; appendText; 
   Narr`So I made for the Security Office.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `BG11A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
clock(`19:37`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`When I entered the office, I saw You.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was slouching loosely in a chair.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You? What are you doing here?"`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 5, volume: 100 });
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D027`); appendText; 
   You`"Hey, Kid. How you doing?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You swiveled her neck around and greeted me. 
She couldn't be bothered to shift her body.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Where's everybody else? What happened to 
Sara?"`;
   waitForClick; clearText; marker; sound(`S3D028`); appendText; 
   You`"She's resting in the decompression chamber 
below the infirmary."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You straightened up.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She added that Sara said 'she wanted to be 
alone so I best not bother her.'`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I see..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D030`); appendText; 
   You`"Sora had work to do in the Control Room. 
She's checking and adjusting the complex."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What about Takeshi?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D031`); appendText; 
   You`"I don't know what's up with Takeshi."`;
   waitForClick; clearText; marker; sound(`S3D032`); appendText; 
   You`"When he left, he was saying something about 
wanting a drink. He might be having a beer or 
something."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Huh? A beer in LeMU?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You shrugged as if to say, 'Who knows?'`;
   waitForClick; clearText; marker; sound(`S3D033`); appendText; 
   You`"What about you? How did things go with 
Tsugumi?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Not good. She wouldn't listen."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"She just took off somewhere."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I decided not to say anything about Tsugumi's 
silly suspicions.`;
   waitForClick; clearText; marker; sound(`S3D034`); appendText; 
   You`"Well, I guess that's how things stand then."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So what are you doing here, You? You can't 
access the database for a while, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D035`); appendText; 
   You`"Right. So I'm taking a break."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D036`); appendText; 
   You`"Right now I'm looking at LeMU through the 
monitors and trying to think of a way to 
escape."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D037`); appendText; 
   You`"I haven't thought of anything yet."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You went back to typing on the keyboard.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tap, tap, tap...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The images on the monitors changed again and 
again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi appeared in one of them.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey, that's Takeshi."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D038`); appendText; 
   You`"Looks like it."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Is that the rest area?"`;
   waitForClick; clearText; marker; sound(`S3D039`); appendText; 
   You`"Looks like it."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I wonder what he is doing."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D040`); appendText; 
   You`"Who knows?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Takeshi was sitting on a bench.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He had a can of beer in his hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As You had said, it looked like he was having 
a drink.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So there really is...beer here."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Thinking about it, I realized that Takeshi 
knew the kiosk's freezers by heart now.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe it was something that an employee or 
someone had sneaked in.`;
   waitForClick; clearText; marker; appendText; 
   Narr`What I didn't understand was why there was one 
more beer.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Or I should say that the can was opened and 
sitting next to Takeshi.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(It'll get flat if he leaves it like that...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`Of course, there was no one there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi lifted his can in the direction of the 
can next to him and muttered something.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But we couldn't hear the what.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered if he was drunk.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He looked dangerous.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU14ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D041`); appendText; 
   You`"Geez...what is that fool up to?"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tap, tap, tap...`;
   waitForClick; clearText; marker; appendText; 
   Narr`You punched some keys and switched to a less 
unsightly scene.`;
   waitForClick; clearText; 
});
stopSFX()
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D042`); appendText; 
   You`"Okay. Time to take a break."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You jumped out of her chair and headed for the 
coffee machine.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Uh, I want one, too."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D043`); appendText; 
   You`"Alright."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Where's the sugar and milk?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D044`); appendText; 
   You`"What? You take sugar and milk? You're like a 
kid with a sweet tooth."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I can drink however I want, can't I?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D045`); appendText; 
   You`"Sure, whatever. I think they're in that 
drawer."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took the sugar pot and milk bottle out from 
the drawer.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D046`); appendText; 
   You`"Coffee is coffee because it's bitter."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You said this as she poured coffee into our 
cups.`;
   waitForClick; clearText; marker; sound(`S3D047`); appendText; 
   You`"Coffee defiled with other stuff is like a 
hamburger made out of chicken."`;
   waitForClick; clearText; marker; sound(`S3D048`); appendText; 
   You`"Someday you'll understand, Kid."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D049`); appendText; 
   You`"Here is your wittle milwk dwink...baby."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh shut up..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I dribbled a little milk into the cup that she 
gave me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I went to add sugar...but there was no spoon, 
so I decided to pour from the sugar pot.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You know that black coffee is bad for your 
stomach, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D050`); appendText; 
   You`"I know that and a hundred other things that 
are bad. But smoking is bad for you and there 
are still smokers."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Besides...when you are tired, sweet things 
give you a surge of energy."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was in an argumentative mode.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But...then my hand slipped...and sugar went 
cascading into my cup.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh, no!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D051`); appendText; 
   You`"There you go. That should give you a surge of 
energy until tomorrow."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
delay({ interval: 60 });
bgload({ name: `BG11A1`, transition: 26 });
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: false });
playBGM({ num: 2, volume: 100 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Hey, I was thinking."`;
   waitForClick; clearText; marker; sound(`S3D052`); appendText; 
   You`"Thinking what?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I didn't tell you?"`;
   waitForClick; clearText; marker; sound(`S3D053`); appendText; 
   You`"It's so boring."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You said that and sipped her coffee 
indifferently.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What I said is that...!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I can sense the future."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I decided to tell You about my theory.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I really wanted to hear what she thought.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I mean, yesterday in the Generator Room, the 
trouble this morning with Takeshi and when I 
first met Sara..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D054`); appendText; 
   You`"That's just deja vu."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Deja vu?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D055`); appendText; 
   You`"When you've never done something, but you 
can't shake the feeling that you have seen or 
done it before."`;
   waitForClick; clearText; marker; sound(`S3D056`); appendText; 
   You`"But, ya' know, that's really just when you 
have some memory deep in your mind that makes 
something feel familiar..."`;
   waitForClick; clearText; marker; sound(`S3D057`); appendText; 
   You`"It's just a kind of hallucination."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It's not! This wasn't like that!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I think I've experienced the same kind of 
thing in the past..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D058`); appendText; 
   You`"And? What's your point?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I think that...maybe I traveled through time."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"And that I came back here to the past...from 
the future."`;
   waitForClick; clearText; marker; appendText; 
   You`"............"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I think it helps to explain my lost memory 
somehow."`;
   waitForClick; clearText; marker; sound(`S3D059`); appendText; 
   You`"Hmmph. And? How does it explain your memory?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Eh? Th...that's...uh...hard to explain, 
but..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D060`); appendText; 
   You`"What is going on in that head of yours?"`;
   waitForClick; clearText; marker; sound(`S3D061`); appendText; 
   You`"What got all twisted up in there to make you 
come up with some crazy idea about traveling 
through time?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D062`); appendText; 
   You`"Or are you one of those people that believe 
the sun circles around the earth?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But...but.... Right now...this..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D063`); appendText; 
   You`"Okay!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You held her palm out at me like a traffic cop.`;
   waitForClick; clearText; marker; sound(`S3D064`); appendText; 
   You`"Okay, let's say for argument's sake that you 
did travel through time. So what?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D065`); appendText; 
   You`"What connection could that possibly have with 
your missing memory?" `;
   waitForClick; clearText; marker; sound(`S3D066`); appendText; 
   You`"You make absolutely no sense."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D067`); appendText; 
   You`"Listen. There is NO such thing as 
time travel."`;
   waitForClick; clearText; marker; sound(`S3D068`); appendText; 
   You`"Theoretically and scientifically it's 
impossible."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I decided to drink my coffee.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Ugghhhhhh!)`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was so sweet that it made me almost want to 
vomit. `;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D069`); appendText; 
   You`"Water flows downhill and time flows forward. 
It's simple."`;
   waitForClick; clearText; marker; sound(`S3D070`); appendText; 
   You`"It's like a river."`;
   waitForClick; clearText; marker; sound(`S3D071`); appendText; 
   You`"There is no going backward."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I groaned. But I wasn't giving in without a 
fight.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Are you sure?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D072`); appendText; 
   You`"......"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Water doesn't always flow down, does it?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D073`); appendText; 
   You`"Ha.... Now what? Are you going to explain it 
all with some anti-gravity substance?"`;
   waitForClick; clearText; marker; sound(`S3D074`); appendText; 
   You`"Or something like space isn't a vacuum, but 
is full of ether?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"That's not what I mean."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It's not like that.... What I mean is..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I looked around the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There had to be something...something to 
convince You...like...`;
   waitForClick; clearText; marker; appendText; 
   Narr`My eyes stopped on the coffee machine.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The water in the lower container was boiling, 
warmed by the flame of the alcohol lamp.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That water was pushed by the pressure of the 
steam through a pipe in the center and 
percolated into the pot.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(This is it!)`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Look! Water doesn't always flow down. See!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   You`"..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You didn't say anything. She simply looked at 
the gurgling water.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey? Are you listening?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D075`); appendText; 
   You`"That's it!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You suddenly stood up shouting.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh! Ouch!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You bumped my arm and spilled my coffee 
everywhere.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It got on my arm and her coat.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But You ignored it, handed her cup to me and 
went bursting out of the room.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She shot out of there like a rocket.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I quickly put the cups down and went after her.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
bgload({ name: `BG25A3`, transition: 20 });
playSFX({ name: `SE01_04`, a1: 0, volume: 100 });
stopBGM();
bgload({ name: `BG26A3L`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You was heading to the west...`;
   waitForClick; clearText; 
});
bgload({ name: `BG27A3`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She climbed the emergency corridor...`;
   waitForClick; clearText; 
});
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And ran down the spiral staircase...`;
   waitForClick; clearText; 
});
bgload({ name: `BG26B3R`, transition: 20 });
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`When I finally caught up with her...`;
   waitForClick; clearText; 
});
bgload({ name: `BG15B1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`...I found myself in the Central Control Room.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
bgload({ name: `BG16A1`, transition: 20 });
playBGM({ num: 18, volume: 100 });
clock(`20:10`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You and I dashed into the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was Sora.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was in front of the console with both 
hands together. She was quiet, her eyes 
closed. It was like she were meditating.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The LED of computers in the room were 
responding and flickering.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But when Sora noticed our presence she opened 
her eyes and smiled.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `SO02ADM`, name2: `YU04ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D076`); appendText; 
   Sora`"What is it, you two?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S3D077`); appendText; 
   You`"PANT, PANT.... I thought of a way to escape!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You shouted in between breaths.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D078`); appendText; 
   Sora`"A way to escape?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"R-really? You did?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D079`); appendText; 
   You`"Well...PANT, PANT..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D080`); appendText; 
   You`"PANT, PANT, PANT...Harrrph, haaaaa!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Are you alright...?"`;
   waitForClick; clearText; marker; sound(`S3D081`); appendText; 
   You`"I'm f...fine...PANT...I'll be fine...after I 
rest..."`;
   waitForClick; clearText; marker; sound(`S3D082`); appendText; 
   You`"Deep...b-breath....deeep...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You put her hand on her chest as she breathed 
deeply trying to catch her breath.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Then...`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D083`); appendText; 
   You`"Hey, Sora? Why can't we escape from here?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Stupid! It's because LeMU is flooded with 
water!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU04ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D084`); appendText; 
   You`"Enough. I'm not asking you. Be quiet!"!`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`S3D085`); appendText; 
   You`"Sora, answer me."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D086`); appendText; 
   Sora`"It is as Kid said. It is because LeMU is 
inundated with seawater."`;
   waitForClick; clearText; marker; sound(`S3D087`); appendText; 
   Sora`"The water has blocked passage to Insel null 
via the elevator and emergency stairs."`;
   waitForClick; clearText; marker; sound(`S3D088`); appendText; 
   Sora`"Thus all avenues of escape have been closed 
off."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D089`); appendText; 
   You`"Okay then. So you mean that if we could get 
rid of all of that water, we could escape?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D090`); appendText; 
   Sora`"Yes. However, with the limited wastewater 
pumps still functioning, it is impossible..."`;
   waitForClick; clearText; marker; sound(`S3D091`); appendText; 
   You`"It's no problem."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You stopped Sora at that point.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D092`); appendText; 
   You`"The floating island has to have a 
high-pressure intake fan, right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"A high-pressure fan?"`;
   waitForClick; clearText; marker; sound(`S3D093`); appendText; 
   You`"A device to send in a mix of high pressure 
gas to increase air pressure in the complex."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D094`); appendText; 
   Sora`"Yes. It is exactly as you say."`;
   waitForClick; clearText; marker; sound(`S3D095`); appendText; 
   You`"In that case, why don't we use the 
high-pressure fan to pump in high pressure gas 
which will then push out the water?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"???"`;
   waitForClick; clearText; marker; sound(`S3D096`); appendText; 
   You`"If you blow air into a straw that's in water, 
the water comes out of the straw, right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh...I get it..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO10ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D097`); appendText; 
   Sora`"Theoretically it is possible."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D098`); appendText; 
   You`"I told you! Let's do it!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D099`); appendText; 
   Sora`"And it is one of the methods that I 
considered initially."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D100`); appendText; 
   You`"Huh...?"`;
   waitForClick; clearText; marker; sound(`S3D101`); appendText; 
   Sora`"In other words, unfortunately, it is 
impossible."`;
   waitForClick; clearText; marker; sound(`S3D102`); appendText; 
   You`"Why?"`;
   waitForClick; clearText; marker; sound(`S3D103`); appendText; 
   Sora`"Because we can't activate the fan from here."`;
   waitForClick; clearText; marker; sound(`S3D104`); appendText; 
   Sora`"It is the same as with the reason the 
elevator is out of order - the cause is 
unclear."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   You`"......"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D105`); appendText; 
   Sora`"It is very unfortunate."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   You`"......"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You's shoulders slumped dejectedly.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I put my hand on You's back. She turned and 
smiled an empty smile.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU17ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D106`); appendText; 
   You`"Ha...Damn...I thought it was a good idea, 
too."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D107`); appendText; 
   You`"I guess I'll have to rethink it."`;
   waitForClick; clearText; marker; appendText; 
   Narr`But her words sounded empty of the spark she'd 
shown earlier.`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D108`); appendText; 
   You`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Only then did You finally notice the coffee 
stains.`;
   waitForClick; clearText; marker; sound(`S3D109`); appendText; 
   You`"Oh...yuck...this is gonna stain for sure!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D110`); appendText; 
   Sora`"There is a laundry room right next to the 
changing room. Why don't you wash it there?" `;
   waitForClick; clearText; marker; sound(`S3D111`); appendText; 
   Sora`"Fortunately, you have a change of clothes as 
well."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D112`); appendText; 
   You`"That's true..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You took an area of her coat that was stained 
black and held it to her nose.`;
   waitForClick; clearText; marker; sound(`S3D113`); appendText; 
   You`"Sniff, sniff..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `YU05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3D114`); appendText; 
   You`"Yuck! This stinks like sugar..."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(You mean it smells like coffee!) `;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`...That was what I wanted to say, but I just 
barely held my tongue.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
stopBGM();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
l_choice = 0;
jump(`SY4A`);
