setDialogBoxColor(BLUE);
l_b0 = 5;
l_dayA = 3;
l_dayB = 3;
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG08A1`, transition: 20 });
clock(`18:53`);
showTextbox();
text(() => {
   `I ran out of the infirmary and called out to 
Tsugumi.`;
   Kid`"Hey, Tsugumi!"`;
   `But she ignored me and headed for the corridor.`;
   `(Ahhh!.... Why does it always turn out like 
this?)`;
   `Even if I was tired of everything, I had no 
choice but to chase after her.`;

});
bgload({ name: `BG25A3`, transition: 20 });
playBGM({ num: 7, volume: 100 });
showTextbox();
text(() => {
   Kid`"Hey, wait!"`;
   Tsugumi`"........."`;
   `She shot me a glance but did not slow her step.`;
   Kid`"I said wait!"`;
   `I caught up to her and grabbed her arm, trying 
to stop her.`;

});
showTextbox();
text(() => {
   `But she shook off my hand.`;

});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3D000)`"I told you never to touch me."`;
   Kid`"S-sorry..."`;
   Tsugumi`"........."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Then Tsugumi started walking again as if 
nothing had happened.`;

});
bgload({ name: `BG26A3R`, transition: 20 });
showTextbox();
text(() => {
   `Still, I continued after her without giving up.`;
   `I started talking to her as I walked next to 
her, peering at her face.`;
   Kid`"Why are you fighting with Sara?"`;

});
fgload({ id: 1, name: `TU18ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3D001)`"It's none of your business."`;
   `Tsugumi answered without looking at me, 
letting me know my questions were unwanted.`;
   Tsugumi(S3D002)`"Don't go poking your nose into things that 
don't concern you."`;
   Kid`"How can this not concern me?"`;
   `I thought I had said enough.`;
   `(It really probably doesn't have anything to 
do with me.)`;
   `(I don't have any right to go involving myself 
in people's private affairs.)`;
   `(But still...)`;

});
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3D003)`"No...well, actually it might have something 
to do with you."`;
   Kid`"What?"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   `Tsugumi strode away.`;
   `I stood stunned for a moment. I soon pulled 
myself together and started after her again.`;

});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `No matter how much I called out to her, 
Tsugumi didn't respond.`;
   `At last I caught up with her again...`;

});
bgload({ name: `BG03A1`, transition: 20 });
showTextbox();
text(() => {
   `...we were at the gate for boarding the 
Jellyfish Gondola.`;

});
fgload({ id: 1, name: `TU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Finally, Tsugumi pulled up there.`;
   `And it didn't look as though she had stopped 
there with any intention of riding the gondola.`;
   `But it didn't look like she was going to move 
elsewhere either, or even sit down for that 
matter.`;
   `Her eyes were just trained on the 
half-transparent gondola which was partially 
visible beyond the gate.`;
   Kid`"Hey..."`;
   Tsugumi`"........."`;
   `It looked like she was completely ignoring me.`;
   Kid`"You don't have to respond. Just listen to 
what I'm going to say."`;
   Tsugumi`"........."`;
   Kid`"I won't ask you to trust us anymore."`;
   Kid`"But that doesn't mean that you have to fight 
with anyone."`;
   Kid`"We're all in the same situation here. We have 
to help each other."`;
   `Tsugumi turned and faced me...`;

});
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3D004)`"What an insightful comment!"`;
   Kid`"Do-don't joke around."`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3D005)`"I'm just telling you exactly how I feel."`;
   `I figured that I should take the fact that she 
responded to me as a slight change in attitude.`;
   `I shot her another question.`;
   Kid`"Why do you think we're your enemies? What 
reason could you possibly have?"`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3D006)`"I've already told you. I can't trust you."`;
   Tsugumi(S3D007)`"You are all acting suspiciously."`;
   Tsugumi(S3D008)`"I don't know whether you are acting of your 
own will, but still."`;
   Kid`"I don't get you. What EXACTLY is suspicious?"`;

});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3D009)`"You are trying to do the exact same thing 
that you did before."`;
   Kid`"The same as what before?"`;
   Tsugumi(S3D010)`"If you really have lost your memory, then 
maybe you don't know..."`;

});
fgload({ id: 1, name: `TU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3D011)`"There has got to be something going on behind 
the scenes with this accident as well."`;
   Kid`"You mean..."`;
   Kid`"You mean to tell me, you've experienced the 
same thing as this before?"`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   `Tsugumi stared at me intensely.`;
   `I took her look as a 'Yes.'`;
   `In that case...`;
   `In that case...`;
   `I wondered if the same held true for me.`;
   Kid`"So that means you can foresee what is going 
to happen, right?"`;

});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3D012)`"Huh?"`;
   Kid`"I'm right, aren't I?"`;
   Kid`"So it's not just me then."`;
   Kid`"But then, how come I can see into the future 
all of the sudden...?"`;

});
fgload({ id: 1, name: `TU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi`"........."`;
   Kid`"Hmmm...hmmm..."`;
   `See...the future...`;
   `No, the feeling I had was less one of seeing 
it and more like...`;
   `...knowing the future, or possible having 
experienced it before...`;
   `Did I know it? Had I experienced it?`;
   `Why?`;
   `That was...`;

});
stopBGM();
showTextbox();
text(() => {
   `...because the same thing was happening again.`;
   Kid`"Th-that's it!"`;
   Kid`"You and I must have traveled to the past, 
Tsugumi!"`;

});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3D013)`"...Traveled...to the past?"`;
   Kid`"Yup."`;
   `The theory I had hit upon excited me.`;
   `I was sure, it almost had to be...`;

});
playBGM({ num: 14, volume: 100 });
showTextbox();
text(() => {
   Kid`"I have the same sense."`;
   Kid`"I know the future."`;
   Kid`"Back at the Generator Room, I knew that the 
room had built up heat."`;
   Kid`"And take this morning, I had a feeling that 
there would be trouble in the warehouse."`;
   Kid`"And when I first met Sara I felt like I had 
experienced something like it before."`;
   Kid`"I think I've probably experienced this same 
thing in my past..."`;
   `Tsugumi just stared at me.`;
   `I could clearly see that she was flustered.`;
   Kid`"Hey. Tell me your story."`;
   `When I asked Tsugumi that, it was as if she 
snapped back to reality, her expression and 
the look in her eyes back to normal.`;

});
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3D014)`"My story? What? Are you kidding?"`;

});
fgload({ id: 1, name: `TU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3D015)`"As long as I can't tell if you're in this 
with the others, I won't tell you anything."`;
   Kid`"........."`;
   `I felt dejected. Like I had finally found 
someone that could share my feelings, but 
wouldn't.`;

});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3D016)`"Listen. I told you before, it would be best 
for you if you stayed away from them."`;
   Tsugumi(S3D017)`"And me, too."`;
   Kid`"...Why?"`;

});
fgload({ id: 1, name: `TU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3D018)`"You really get bogged down in the why of 
things, don't you? The why is not important."`;
   `She crossed her arms and said this forcefully.`;

});
fgload({ id: 1, name: `TU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3D019)`"But if there is a reason...it is so that 
things turn out the best for you."`;
   Kid`"........."`;
   Tsugumi(S3D020)`"For example..."`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3D021)`"Your memory loss could be because of them."`;
   Kid`"...Huh?"`;
   `That was a shocking idea.`;
   `Her words just about stopped my heart for a 
moment.`;
   `(What...there's no way....)`;
   `I had never even entertained that idea.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi turned to walk away from me, ignoring 
me in my state of dismayed confusion.`;
   `I didn't have any power left to chase after 
her.`;

});
fgload({ id: 1, name: `TU08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3D022)`"Oh...and there is one more thing."`;
   Tsugumi(S3D023)`"As long as we are shooting the breeze, shall 
I predict a bit of the future for you?"`;
   Kid`"............"`;
   `I slowly lifted up my face and looked at 
Tsugumi.`;
   `She looked serious all of the sudden.`;
   `Tsugumi predicted that - `;
   Tsugumi(S3D024)`"If you continue to let yourself be used by 
them..."`;
   Tsugumi(S3D025)`"On the 7th..."`;

});
hideTextbox();
stopBGM();
fgload({ id: 1, name: `TU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3D026)`"You will die."`;

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
   `I trudged along looking down.`;
   `The light reflected cold and hard off the 
walls and floor.`;
   `Tsugumi's words echoed in my mind.`;
   `Tsugumi said not to trust Takeshi, You and the 
others.`;
   `That my lost memory was their fault as well.`;
   `That their behavior was suspect?`;
   `But...I wondered if that could really be true.`;
   `I didn't see how it could be.`;
   `They all seemed trustworthy to me.`;
   `The type of people you could really depend on.`;
   `I had only spent a few days with them, but I 
was sure.`;
   `Besides, even if she were right, there were 
lots of things that were inexplicable.`;
   `If Takeshi and the others were scheming 
something...`;
   `If they were trying to deceive Tsugumi and me, 
then it should be visible in their words and 
actions.`;
   `There was no way that normal people could put 
on an act as elaborate as this.`;
   `If one or two were trying to lie, it might be 
possible, but even with my memory impaired I 
would still be able to tell if they were all 
trying to do it.`;
   `It seemed that You, Sara and everyone were 
reacting naturally, as one might expect in 
each situation.`;
   `So it didn't seem possible. It wasn't possible.`;
   `The most impossible thing to explain was why 
cause this accident? Why lie to Tsugumi and me?`;
   `There was no reason and it would have been 
impossible anyway.`;
   `I wondered if I were going to die.`;
   `That was stupid!`;
   `If that was the case, we would have to be 
smart to help each other more than ever.`;

});
bgload({ name: `BG25A3`, transition: 20 });
showTextbox();
text(() => {
   `(The problem is probably with Tsugumi.)`;
   `That was what I thought.`;
   `Maybe she had some grudge against Takeshi and 
the others from before...or maybe she was 
imagining everything and just paranoid...`;
   `Or maybe she was trying to make ME paranoid 
about the others and draw us into 
conflict...or something else?`;
   `No, I had to stop this!`;
   `It was too crazy.`;
   `If nothing else, THIS was...all just my 
imagination working overtime and nothing but 
paranoia.`;
   `It had to be that the difficulty of the 
situation was putting incredible mental strain 
on everyone.`;
   `I...I wanted to trust everyone, and to be 
trusted.`;
   `So I would continue to treat everyone as I had 
up until then.`;
   `That is what I decided.`;
   `Rather than worrying about who to trust, we 
needed to worry about how something like this 
could have happened.`;
   `If we knew the cause, we might be able to 
figure out a way out.`;
   `...I remembered that Tsugumi had said 
something else.`;
   Tsugumi(S3D009)`"You are trying to do the exact same thing 
that you did before."`;
   `I wondered about my ability to foresee 
events....`;
   `Was I repeating the past?`;
   `(I wonder if I really did travel in time?)`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `BG09A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `Finally I arrived back at the infirmary.`;
   `But there was no longer anyone there.`;
   `(Huh? Where did everybody go?)`;
   `(Maybe they're in the Conference Room?)`;
   Kid`"Hey, Sora?"`;
   `I called out to her through the microphones in 
the room.`;
   `But there was no reply.`;
   `Sora had said that the complex's sensors were 
not yet functioning everywhere.`;
   `I figured that I'd just have to go searching 
myself...`;
   `I sighed and headed out into the corridor.`;

});
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG08A1`, transition: 20 });
stopBGM();
showTextbox();
text(() => {
   `(Oh, that's right...!)`;
   `I had an idea.`;
   `The Security Office was nearby. I could use 
the observation monitors there.`;
   `I might be able to see what was going on.`;
   `And maybe find out where everyone was.`;
   `So I made for the Security Office.`;

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
   `When I entered the office, I saw You.`;
   `She was slouching loosely in a chair.`;
   Kid`"You? What are you doing here?"`;

});
hideTextbox();
playBGM({ num: 5, volume: 100 });
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3D027)`"Hey, Kid. How you doing?"`;
   `You swiveled her neck around and greeted me. 
She couldn't be bothered to shift her body.`;
   Kid`"Where's everybody else? What happened to 
Sara?"`;
   You(S3D028)`"She's resting in the decompression chamber 
below the infirmary."`;
   `You straightened up.`;

});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `She added that Sara said 'she wanted to be 
alone so I best not bother her.'`;
   Kid`"I see..."`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3D030)`"Sora had work to do in the Control Room. 
She's checking and adjusting the complex."`;
   Kid`"What about Takeshi?"`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3D031)`"I don't know what's up with Takeshi."`;
   You(S3D032)`"When he left, he was saying something about 
wanting a drink. He might be having a beer or 
something."`;
   Kid`"Huh? A beer in LeMU?"`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `You shrugged as if to say, 'Who knows?'`;
   You(S3D033)`"What about you? How did things go with 
Tsugumi?"`;
   Kid`"Not good. She wouldn't listen."`;
   Kid`"She just took off somewhere."`;
   `I decided not to say anything about Tsugumi's 
silly suspicions.`;
   You(S3D034)`"Well, I guess that's how things stand then."`;
   Kid`"So what are you doing here, You? You can't 
access the database for a while, right?"`;

});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3D035)`"Right. So I'm taking a break."`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3D036)`"Right now I'm looking at LeMU through the 
monitors and trying to think of a way to 
escape."`;

});
fgload({ id: 1, name: `YU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3D037)`"I haven't thought of anything yet."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `You went back to typing on the keyboard.`;

});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Tap, tap, tap...`;
   `The images on the monitors changed again and 
again.`;
   `Takeshi appeared in one of them.`;
   Kid`"Hey, that's Takeshi."`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3D038)`"Looks like it."`;
   Kid`"Is that the rest area?"`;
   You(S3D039)`"Looks like it."`;
   Kid`"I wonder what he is doing."`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3D040)`"Who knows?"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Takeshi was sitting on a bench.`;
   `He had a can of beer in his hand.`;
   `As You had said, it looked like he was having 
a drink.`;
   Kid`"So there really is...beer here."`;
   `Thinking about it, I realized that Takeshi 
knew the kiosk's freezers by heart now.`;
   `Maybe it was something that an employee or 
someone had sneaked in.`;
   `What I didn't understand was why there was one 
more beer.`;
   `Or I should say that the can was opened and 
sitting next to Takeshi.`;
   `(It'll get flat if he leaves it like that...)`;
   `Of course, there was no one there.`;
   `Takeshi lifted his can in the direction of the 
can next to him and muttered something.`;
   `But we couldn't hear the what.`;
   `I wondered if he was drunk.`;
   `He looked dangerous.`;

});
fgload({ id: 1, name: `YU14ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3D041)`"Geez...what is that fool up to?"`;

});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Tap, tap, tap...`;
   `You punched some keys and switched to a less 
unsightly scene.`;

});
stopSFX()
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3D042)`"Okay. Time to take a break."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `You jumped out of her chair and headed for the 
coffee machine.`;
   Kid`"Uh, I want one, too."`;

});
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3D043)`"Alright."`;
   Kid`"Where's the sugar and milk?"`;

});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3D044)`"What? You take sugar and milk? You're like a 
kid with a sweet tooth."`;
   Kid`"I can drink however I want, can't I?"`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3D045)`"Sure, whatever. I think they're in that 
drawer."`;
   `I took the sugar pot and milk bottle out from 
the drawer.`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3D046)`"Coffee is coffee because it's bitter."`;
   `You said this as she poured coffee into our 
cups.`;
   You(S3D047)`"Coffee defiled with other stuff is like a 
hamburger made out of chicken."`;
   You(S3D048)`"Someday you'll understand, Kid."`;

});
fgload({ id: 1, name: `YU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3D049)`"Here is your wittle milwk dwink...baby."`;
   Kid`"Oh shut up..."`;
   `I dribbled a little milk into the cup that she 
gave me.`;
   `I went to add sugar...but there was no spoon, 
so I decided to pour from the sugar pot.`;
   Kid`"You know that black coffee is bad for your 
stomach, right?"`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3D050)`"I know that and a hundred other things that 
are bad. But smoking is bad for you and there 
are still smokers."`;
   Kid`"Besides...when you are tired, sweet things 
give you a surge of energy."`;
   `I was in an argumentative mode.`;
   `But...then my hand slipped...and sugar went 
cascading into my cup.`;
   Kid`"Oh, no!"`;

});
fgload({ id: 1, name: `YU02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3D051)`"There you go. That should give you a surge of 
energy until tomorrow."`;

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
   Kid`"Hey, I was thinking."`;
   You(S3D052)`"Thinking what?"`;
   Kid`"I didn't tell you?"`;
   You(S3D053)`"It's so boring."`;
   `You said that and sipped her coffee 
indifferently.`;
   Kid`"What I said is that...!"`;
   Kid`"I can sense the future."`;
   `I decided to tell You about my theory.`;
   `I really wanted to hear what she thought.`;
   Kid`"I mean, yesterday in the Generator Room, the 
trouble this morning with Takeshi and when I 
first met Sara..."`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3D054)`"That's just deja vu."`;
   Kid`"Deja vu?"`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3D055)`"When you've never done something, but you 
can't shake the feeling that you have seen or 
done it before."`;
   You(S3D056)`"But, ya' know, that's really just when you 
have some memory deep in your mind that makes 
something feel familiar..."`;
   You(S3D057)`"It's just a kind of hallucination."`;
   Kid`"It's not! This wasn't like that!"`;
   Kid`"I think I've experienced the same kind of 
thing in the past..."`;

});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3D058)`"And? What's your point?"`;
   Kid`"I think that...maybe I traveled through time."`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You`"........."`;
   Kid`"And that I came back here to the past...from 
the future."`;
   You`"............"`;
   Kid`"I think it helps to explain my lost memory 
somehow."`;
   You(S3D059)`"Hmmph. And? How does it explain your memory?"`;
   Kid`"Eh? Th...that's...uh...hard to explain, 
but..."`;

});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3D060)`"What is going on in that head of yours?"`;
   You(S3D061)`"What got all twisted up in there to make you 
come up with some crazy idea about traveling 
through time?"`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3D062)`"Or are you one of those people that believe 
the sun circles around the earth?"`;
   Kid`"But...but.... Right now...this..."`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3D063)`"Okay!"`;
   `You held her palm out at me like a traffic cop.`;
   You(S3D064)`"Okay, let's say for argument's sake that you 
did travel through time. So what?"`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3D065)`"What connection could that possibly have with 
your missing memory?" `;
   You(S3D066)`"You make absolutely no sense."`;
   Kid`"..."`;

});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3D067)`"Listen. There is NO such thing as 
time travel."`;
   You(S3D068)`"Theoretically and scientifically it's 
impossible."`;
   `I decided to drink my coffee.`;
   `(Ugghhhhhh!)`;
   `It was so sweet that it made me almost want to 
vomit. `;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3D069)`"Water flows downhill and time flows forward. 
It's simple."`;
   You(S3D070)`"It's like a river."`;
   You(S3D071)`"There is no going backward."`;
   Kid`"But..."`;
   `I groaned. But I wasn't giving in without a 
fight.`;
   Kid`"Are you sure?"`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3D072)`"......"`;
   Kid`"Water doesn't always flow down, does it?"`;

});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3D073)`"Ha.... Now what? Are you going to explain it 
all with some anti-gravity substance?"`;
   You(S3D074)`"Or something like space isn't a vacuum, but 
is full of ether?"`;
   Kid`"That's not what I mean."`;
   Kid`"It's not like that.... What I mean is..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I looked around the room.`;
   `There had to be something...something to 
convince You...like...`;
   `My eyes stopped on the coffee machine.`;
   `The water in the lower container was boiling, 
warmed by the flame of the alcohol lamp.`;
   `That water was pushed by the pressure of the 
steam through a pipe in the center and 
percolated into the pot.`;
   `(This is it!)`;
   Kid`"Look! Water doesn't always flow down. See!"`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You`"..."`;
   `You didn't say anything. She simply looked at 
the gurgling water.`;
   Kid`"Hey? Are you listening?"`;

});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3D075)`"That's it!"`;
   `You suddenly stood up shouting.`;
   Kid`"Oh! Ouch!"`;
   `You bumped my arm and spilled my coffee 
everywhere.`;
   `It got on my arm and her coat.`;
   `But You ignored it, handed her cup to me and 
went bursting out of the room.`;

});
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `She shot out of there like a rocket.`;
   `I quickly put the cups down and went after her.`;

});
hideTextbox();
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
bgload({ name: `BG25A3`, transition: 20 });
playSFX({ name: `SE01_04`, a1: 0, volume: 100 });
stopBGM();
bgload({ name: `BG26A3L`, transition: 20 });
showTextbox();
text(() => {
   `You was heading to the west...`;

});
bgload({ name: `BG27A3`, transition: 20 });
showTextbox();
text(() => {
   `She climbed the emergency corridor...`;

});
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   `And ran down the spiral staircase...`;

});
bgload({ name: `BG26B3R`, transition: 20 });
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `When I finally caught up with her...`;

});
bgload({ name: `BG15B1`, transition: 20 });
showTextbox();
text(() => {
   `...I found myself in the Central Control Room.`;

});
hideTextbox();
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
bgload({ name: `BG16A1`, transition: 20 });
playBGM({ num: 18, volume: 100 });
clock(`20:10`);
showTextbox();
text(() => {
   `You and I dashed into the room.`;
   `There was Sora.`;
   `She was in front of the console with both 
hands together. She was quiet, her eyes 
closed. It was like she were meditating.`;
   `The LED of computers in the room were 
responding and flickering.`;
   `But when Sora noticed our presence she opened 
her eyes and smiled.`;

});
multifgload2({ id1: 1, id2: 2, name1: `SO02ADM`, name2: `YU04ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S3D076)`"What is it, you two?"`;

});
showTextbox();
text(() => {
   You(S3D077)`"PANT, PANT.... I thought of a way to escape!"`;
   `You shouted in between breaths.`;

});
fgload({ id: 1, name: `SO07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(S3D078)`"A way to escape?"`;
   Kid`"R-really? You did?"`;

});
fgload({ id: 2, name: `YU08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S3D079)`"Well...PANT, PANT..."`;

});
fgload({ id: 2, name: `YU03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S3D080)`"PANT, PANT, PANT...Harrrph, haaaaa!"`;

});
fgload({ id: 1, name: `SO03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Kid`"Are you alright...?"`;
   You(S3D081)`"I'm f...fine...PANT...I'll be fine...after I 
rest..."`;
   You(S3D082)`"Deep...b-breath....deeep...."`;
   `You put her hand on her chest as she breathed 
deeply trying to catch her breath.`;
   `Then...`;

});
fgload({ id: 2, name: `YU05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S3D083)`"Hey, Sora? Why can't we escape from here?"`;

});
fgload({ id: 1, name: `SO01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Kid`"Stupid! It's because LeMU is flooded with 
water!"`;

});
fgload({ id: 2, name: `YU04ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S3D084)`"Enough. I'm not asking you. Be quiet!"!`;
   Kid`"........."`;
   You(S3D085)`"Sora, answer me."`;

});
fgload({ id: 1, name: `SO10ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(S3D086)`"It is as Kid said. It is because LeMU is 
inundated with seawater."`;
   Sora(S3D087)`"The water has blocked passage to Insel null 
via the elevator and emergency stairs."`;
   Sora(S3D088)`"Thus all avenues of escape have been closed 
off."`;

});
fgload({ id: 2, name: `YU01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S3D089)`"Okay then. So you mean that if we could get 
rid of all of that water, we could escape?"`;

});
fgload({ id: 1, name: `SO05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(S3D090)`"Yes. However, with the limited wastewater 
pumps still functioning, it is impossible..."`;
   You(S3D091)`"It's no problem."`;
   `You stopped Sora at that point.`;

});
fgload({ id: 2, name: `YU05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S3D092)`"The floating island has to have a 
high-pressure intake fan, right?"`;
   Kid`"A high-pressure fan?"`;
   You(S3D093)`"A device to send in a mix of high pressure 
gas to increase air pressure in the complex."`;

});
fgload({ id: 1, name: `SO01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(S3D094)`"Yes. It is exactly as you say."`;
   You(S3D095)`"In that case, why don't we use the 
high-pressure fan to pump in high pressure gas 
which will then push out the water?"`;
   Kid`"???"`;
   You(S3D096)`"If you blow air into a straw that's in water, 
the water comes out of the straw, right?"`;
   Kid`"Oh...I get it..."`;

});
fgload({ id: 1, name: `SO10ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(S3D097)`"Theoretically it is possible."`;

});
fgload({ id: 2, name: `YU02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S3D098)`"I told you! Let's do it!"`;

});
fgload({ id: 1, name: `SO05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(S3D099)`"And it is one of the methods that I 
considered initially."`;

});
fgload({ id: 2, name: `YU06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S3D100)`"Huh...?"`;
   Sora(S3D101)`"In other words, unfortunately, it is 
impossible."`;
   You(S3D102)`"Why?"`;
   Sora(S3D103)`"Because we can't activate the fan from here."`;
   Sora(S3D104)`"It is the same as with the reason the 
elevator is out of order - the cause is 
unclear."`;

});
fgload({ id: 2, name: `YU07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You`"......"`;

});
fgload({ id: 1, name: `SO03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(S3D105)`"It is very unfortunate."`;

});
fgload({ id: 2, name: `YU03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You`"......"`;
   `You's shoulders slumped dejectedly.`;
   Kid`"You..."`;
   `I put my hand on You's back. She turned and 
smiled an empty smile.`;

});
fgload({ id: 2, name: `YU17ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S3D106)`"Ha...Damn...I thought it was a good idea, 
too."`;

});
fgload({ id: 2, name: `YU05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S3D107)`"I guess I'll have to rethink it."`;
   `But her words sounded empty of the spark she'd 
shown earlier.`;

});
fgload({ id: 2, name: `YU06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S3D108)`"Huh?"`;
   `Only then did You finally notice the coffee 
stains.`;
   You(S3D109)`"Oh...yuck...this is gonna stain for sure!"`;

});
fgload({ id: 1, name: `SO15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sora(S3D110)`"There is a laundry room right next to the 
changing room. Why don't you wash it there?" `;
   Sora(S3D111)`"Fortunately, you have a change of clothes as 
well."`;

});
fgload({ id: 2, name: `YU03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S3D112)`"That's true..."`;
   `You took an area of her coat that was stained 
black and held it to her nose.`;
   You(S3D113)`"Sniff, sniff..."`;

});
fgload({ id: 2, name: `YU05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S3D114)`"Yuck! This stinks like sugar..."`;

});
showTextbox();
text(() => {
   `(You mean it smells like coffee!) ${wait}
...That was what I wanted to say, but I just 
barely held my tongue.`;

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
