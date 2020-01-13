setDialogBoxColor(BLUE);
varop(`(28 0a a4) b0 := (00) 5`);
varop(`(28 0a a4) b1 := (00) 3`);
varop(`(28 0a a4) b2 := (00) 3`);
setSceneTitle({ index: 68 });
bgload({ name: `BG25B3`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`6:57`);
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"You!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey! You!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was strange...I thought that maybe she 
wasn't on that floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just then, Sora's voice came to me from the 
voice converter.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S3A274`); appendText; 
   Sora`"Kid, it's me, Sora."`;
   waitForClick; clearText; marker; sound(`S3A275`); appendText; 
   Sora`"I know where You is. She is fine of course."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Huh? Where is she?"`;
   waitForClick; clearText; marker; sound(`S3A276`); appendText; 
   Sora`"Zweite stock. In the Security Office."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Security Office? Why is she there again?"`;
   waitForClick; clearText; marker; sound(`S3A277`); appendText; 
   Sora`"I don't know. You contacted me about with her 
whereabouts."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I got it. Well, I'll go to the warehouse as 
well then."`;
   waitForClick; clearText; marker; sound(`S3A278`); appendText; 
   Sora`"No, that will not be necessary."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Why not?"`;
   waitForClick; clearText; marker; sound(`S3A279`); appendText; 
   Sora`"Fortunately, to the extent that I have been 
able to investigate, there was no major 
damage."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora added that there were enough people to do 
the required work.`;
   waitForClick; clearText; marker; sound(`S3A280`); appendText; 
   Sora`"It would be better for you to go to You's 
location."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"To where You is?"`;
   waitForClick; clearText; marker; sound(`S3A281`); appendText; 
   Sora`"Yes...Something is strange there."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Strange?"`;
   waitForClick; clearText; marker; sound(`S3A282`); appendText; 
   Sora`"I can't say for sure...but I sense something."`;
   waitForClick; clearText; marker; sound(`S3A283`); appendText; 
   Sora`"So I think that someone should go 
investigate."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Wouldn't it be better if you went instead of 
me?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`If something were strange, I didn't know what 
I could do.`;
   waitForClick; clearText; marker; sound(`S3A284`); appendText; 
   Sora`"I'm sorry. Unfortunately, now I must go to 
the Control Room."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Control Room? Is something else wrong?"`;
   waitForClick; clearText; marker; sound(`S3A285`); appendText; 
   Sora`"Uh...no...I have to do a little maintenance 
on LeMMIH..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I see."`;
   waitForClick; clearText; marker; sound(`S3A286`); appendText; 
   Sora`"I'm sorry...but do you think you can manage 
it for me?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sure. I don't have anything better to do."`;
   waitForClick; clearText; marker; appendText; 
   Sora`"..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I'm off to check on You. The Security Office, 
right?"`;
   waitForClick; clearText; marker; sound(`S3A287`); appendText; 
   Sora`"Yes. Thank you."`;
   waitForClick; clearText; 
});
bgload({ name: `BG29A1`, transition: 20 });
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I climbed to the second floor via the 
emergency stairs.`;
   waitForClick; clearText; 
});
bgload({ name: `BG25A3`, transition: 20 });
stopSFX()
clock(`7:6`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I called to You via the intercom on the side 
of the Security Office door.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You? It's me. Can I come in?"`;
   waitForClick; clearText; marker; sound(`S3A288`); appendText; 
   You`"Huh!? Kid...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`After a bit the door opened.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 5, volume: 100 });
playSFX({ name: `SE00_01`, a1: 1, volume: 100 });
waitForSFX();
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A289`); appendText; 
   You`"What's up? What are you doing here?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You was unable to hide her surprise...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora was right. Strange might have been the 
word for it.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Sora told me to come."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A290`); appendText; 
   You`"Sora?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Y-yeah. Uh...she...um..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"She said...that something was strange and 
that she wanted me to take a look..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't think of a better way to put it and 
blurted out the truth.`;
   waitForClick; clearText; marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Uh, is this a bad time?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You slumped her shoulders as if defeated and 
heaved out a sigh.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A291`); appendText; 
   You`"Oh well. I guess that's how it goes..."`;
   waitForClick; clearText; marker; sound(`S3A292`); appendText; 
   You`"If you think about it, Sora has ears 
everywhere."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A293`); appendText; 
   You`"Well, quit standing there. Come on in."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Uh, alright..."`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`S3A294`); appendText; 
   You`"You want some coffee?"`;
   waitForClick; clearText; 
});
bgload({ name: `BG11A1`, transition: 20 });
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I followed You into the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It smelled like hot coffee.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In a corner of the room was an ancient siphon 
coffee machine percolating up dark liquid.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You offered me a chair and I sat down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She turned to the coffee maker to pour coffee.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What are you up to in here?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I asked You this bluntly as I leaned back in 
the chair.`;
   waitForClick; clearText; marker; sound(`S3A295`); appendText; 
   You`"I'm looking into something."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Looking into something?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`White steam curled into the air from where she 
was pouring the coffee.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Is this something that you have to hide from 
everyone?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought it came out a little too accusatory.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe I was a little peeved that she was 
hiding something from us.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A296`); appendText; 
   You`"Here's your coffee."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She turned back toward me with a white cup in 
each hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She handed one to me.`;
   waitForClick; clearText; marker; sound(`S3A297`); appendText; 
   You`"It's hot so be careful."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh, thanks..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`A white cup. White steam. Only the liquid 
inside was black.`;
   waitForClick; clearText; marker; appendText; 
   Narr`LeMU's logo was printed on the cup. `;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A298`); appendText; 
   You`"Well.... Where should I start...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You sat down next to me and took a sip of her 
coffee.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Then she gradually started to talk.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A299`); appendText; 
   You`"I told you before, right? About why I got 
this job at LeMU..."`;
   waitForClick; clearText; marker; sound(`S3A300`); appendText; 
   You`"I'm looking for clues about my father, who 
disappeared."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I nodded.`;
   waitForClick; clearText; marker; sound(`S3A301`); appendText; 
   You`"He went missing 17 years ago and I came 
hoping to find a hint as to why."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You said that the last place he was seen was 
in LeMU, right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh. Are you investigating that...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A302`); appendText; 
   You`"Yes..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You nodded and shifted the cup to her other 
hand.`;
   waitForClick; clearText; marker; sound(`S3A303`); appendText; 
   You`"Information about my father."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`S3A304`); appendText; 
   You`"It was 17 years ago..."`;
   waitForClick; clearText; marker; sound(`S3A305`); appendText; 
   You`"They say there was a big accident here."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Accident?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A306`); appendText; 
   You`"I don't really know that much about it."`;
   waitForClick; clearText; marker; sound(`S3A307`); appendText; 
   You`"Even looking at old news clippings, I wasn't 
able to gather much information."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What do you mean?"`;
   waitForClick; clearText; marker; sound(`S3A308`); appendText; 
   You`"The cause of the accident, specific damage, 
what happened afterward...all the coverage was 
vague..."`;
   waitForClick; clearText; marker; sound(`S3A309`); appendText; 
   You`"I figure that the media didn't really know 
the details about what happened either."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A310`); appendText; 
   You`"Somebody or something powerful clamped down 
on information."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hmmm. That's interesting..."`;
   waitForClick; clearText; marker; sound(`S3A311`); appendText; 
   You`"An accident 17 years ago shrouded in mystery."`;
   waitForClick; clearText; marker; sound(`S3A312`); appendText; 
   You`"And my father that disappeared 17 years ago."`;
   waitForClick; clearText; marker; sound(`S3A313`); appendText; 
   You`"He worked here until right before the 
accident."`;
   waitForClick; clearText; marker; sound(`S3A314`); appendText; 
   You`"I can guess about some of what happened from 
what we already know..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You think that the accident had something to 
do with the disappearance of your father...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A315`); appendText; 
   You`"That's right."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A316`); appendText; 
   You`"I thought that here...that in LeMMIH, there 
would be some trace...that's why I came."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A317`); appendText; 
   You`"But since I started working I haven't had any 
time to look into it..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A318`); appendText; 
   You`"I couldn't even get close to LeMMIH's 
database."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A319`); appendText; 
   You`"I guess it makes sense. I was pretty naive."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The chair squeaked as You slumped back in it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She just stared at the ceiling.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A320`); appendText; 
   You`"But...but...you know what? Opportunity 
knocked."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Opportunity..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You...you don't mean this accident?"`;
   waitForClick; clearText; marker; sound(`S3A321`); appendText; 
   You`"Yup."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You placed the cup next to the console.`;
   waitForClick; clearText; marker; sound(`S3A322`); appendText; 
   You`"Now I have access to LeMMIH."`;
   waitForClick; clearText; marker; sound(`S3A323`); appendText; 
   You`"Thanks to the accident, I have been able to 
get a step closer to my goal."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A324`); appendText; 
   You`"Well, I suppose it has also put my life in 
danger, but..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You joked as she shrugged her shoulders. `;
   waitForClick; clearText; marker; appendText; 
   Kid`"I'll ask you one more time, but did you have 
to keep it all secret?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A325`); appendText; 
   You`"That's a toughie."`;
   waitForClick; clearText; marker; sound(`S3A326`); appendText; 
   You`"I mean, I work here, but I don't have any 
authority. It's just a part-time gig..."`;
   waitForClick; clearText; marker; sound(`S3A327`); appendText; 
   You`"Taking advantage of this accident to gain 
access to secret information in LeMU."`;
   waitForClick; clearText; marker; sound(`S3A328`); appendText; 
   You`"Normally you might call this..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"A kind of looting maybe?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A329`); appendText; 
   You`"That's right. Stealing information. It's a 
pretty decent crime."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A330`); appendText; 
   You`"But I suppose there was no way I could have 
kept it hidden."`;
   waitForClick; clearText; marker; sound(`S3A331`); appendText; 
   You`"Sora knows everything that goes on relating 
to LeMMIH."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I think she would understand your situation 
if you explained it to her."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A332`); appendText; 
   You`You growled as she put the cup to her lips.`;
   waitForClick; clearText; marker; appendText; 
   Narr`"Hmmm...I wonder about that."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I too took a sip of coffee.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was super bitter and super thick.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So? Did you find anything out?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A333`); appendText; 
   You`"That...that's the problem."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU04A`, transition: 20 });
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tap, tap, tap...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Saying that, You started manipulating the 
keyboard.`;
   waitForClick; clearText; marker; appendText; 
   Narr`One of the monitors on the wall shifted from 
footage of an observation camera to an image 
of a computer desktop.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It the middle of it one window was open.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You explained as she stared at the screen.`;
   waitForClick; clearText; marker; sound(`S3A334`); appendText; 
   You`"This is the authorization screen to connect 
to the network."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Authorization screen?"`;
   waitForClick; clearText; marker; sound(`S3A335`); appendText; 
   You`"This is where the system assesses the user 
for proper authorization."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I see..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt like I kind of got it, but not really...`;
   waitForClick; clearText; marker; sound(`S3A336`); appendText; 
   You`"I'm attempting to connect to LeMMIH's C 
level...meaning I'm trying to access 
classified information."`;
   waitForClick; clearText; marker; sound(`S3A337`); appendText; 
   You`"But if anyone could easily access important 
data, it would be a security disaster, right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Okay."`;
   waitForClick; clearText; marker; sound(`S3A338`); appendText; 
   You`"That's why there is a screen where the 
computer asks 'Hey, who's trying to look at 
this?'"`;
   waitForClick; clearText; marker; appendText; 
   Narr`As she spoke, You used the mouse to 
click on the box for 'Name.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`Inside the box were written the words, 'YUKIE 
TANAKA.'`;
   waitForClick; clearText; marker; sound(`S3A339`); appendText; 
   You`"Of course there is no way I could access the 
system using my name, so I'm using someone 
else's name to get me in."`;
   waitForClick; clearText; marker; sound(`S3A340`); appendText; 
   You`"But anyone might think to try that, right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I suppose so."`;
   waitForClick; clearText; marker; sound(`S3A341`); appendText; 
   You`"Obviously the people who programmed this 
aren't stupid. So to prevent false 
authorization they have methods 
to check people's identity."`;
   waitForClick; clearText; marker; sound(`S3A342`); appendText; 
   You`"The screen then says, 'If you really are 
YUKIE TANAKA, please show me your password.'"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You then used the mouse to circle around the 
box for 'Password.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was still blank.`;
   waitForClick; clearText; 
});
bgload({ name: `BG11A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"And what about the password?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A343`); appendText; 
   You`"I'm working on that right now."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What? You don't know it?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A344`); appendText; 
   You`"I don't know it."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So you haven't looked up anything yet?"`;
   waitForClick; clearText; marker; sound(`S3A345`); appendText; 
   You`"It's not that I haven't...I haven't been able 
to. I haven't been able to get in..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So you're stuck..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A346`); appendText; 
   You`"Yup...stuck."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You nodded and gave a big sigh.`;
   waitForClick; clearText; marker; appendText; 
   Narr`....`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU04A`, transition: 20 });
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tap, tap, tap...`;
   waitForClick; clearText; marker; appendText; 
   Narr`After a second's pause, You was back tapping 
on the keyboard.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was nothing for me to do. I just sat 
there watching You do her thing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The password blank filled in as she typed.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tap, tap, tap...`;
   waitForClick; clearText; marker; appendText; 
   Narr`"*`;
   delay(10); 
   Narr`*`;
   delay(5); 
   Narr`*`;
   delay(20); 
   Narr`*`;
   delay(4); 
   Narr`*`;
   delay(5); 
   Narr`*`;
   delay(15); 
   Narr`*`;
   delay(3); 
   Narr`*"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The digits she typed in were blocked out by *, 
so that anybody watching wouldn't know what 
the word was.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tap!`;
   waitForClick; clearText; marker; appendText; 
   Narr`You tapped the Enter key.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Beeeeeeeep!`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Access denied. Invalid name or password.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`So You immediately tapped in another line of 
letters.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tap, tap, tap...`;
   waitForClick; clearText; marker; appendText; 
   Narr`"*`;
   delay(15); 
   Narr`*`;
   delay(5); 
   Narr`*`;
   delay(20); 
   Narr`*`;
   delay(15); 
   Narr`*`;
   delay(5); 
   Narr`*`;
   delay(3); 
   Narr`*`;
   delay(10); 
   Narr`*"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tap!`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Beeeeeeeep!`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Access denied. Invalid name or password.'`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tap, tap, tap...`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey, You?"`;
   waitForClick; clearText; marker; sound(`S3A347`); appendText; 
   You`"What?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I was just wondering, who is Yukie Tanaka?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Looking at the name, I was wondering is she a 
relative or something?"`;
   waitForClick; clearText; marker; sound(`S3A348`); appendText; 
   You`"She's my mom."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Your mom worked here?"`;
   waitForClick; clearText; marker; sound(`S3A349`); appendText; 
   You`"Works. She is working here. As in the present 
tense."`;
   waitForClick; clearText; 
});
goto(lbl_0000054d).if(var_e3 != 0);
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Hey. Your mom researches archaeology, right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You said something about it yesterday I 
think."`;
   waitForClick; clearText; marker; sound(`S3A350`); appendText; 
   You`"Yeah. So what?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You answered, her eyes still glued to the 
computer.`;
   waitForClick; clearText; 
});
goto(lbl_00000552);
let lbl_0000054d;
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"And your mom was a programmer, too, then."`;
   waitForClick; clearText; marker; sound(`S3A351`); appendText; 
   You`"No, she's an archaeologist."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Huh?"`;
   waitForClick; clearText; marker; sound(`S3A352`); appendText; 
   You`"What's the problem?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You fired the question at me as she continued 
to do battle with the computer.`;
   waitForClick; clearText; 
});
let lbl_00000552;
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"But archaeology has nothing to do with theme 
parks, right?"`;
   waitForClick; clearText; marker; sound(`S3A353`); appendText; 
   You`"My thoughts exactly."`;
   waitForClick; clearText; marker; sound(`S3A354`); appendText; 
   You`"But I figure that LeMU could probably offer 
her a lot more money than some small 
university research department with next to no 
budget."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Is LeMU doing some kind of archaeological 
research?"`;
   waitForClick; clearText; marker; sound(`S3A355`); appendText; 
   You`"Well, at least it is pretending to."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"?"`;
   waitForClick; clearText; marker; sound(`S3A356`); appendText; 
   You`"It seems like they are doing a survey related 
to the ruins of the Lemurian continent."`;
   waitForClick; clearText; 
});
goto(lbl_00000571).if(var_e3 == 0);
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Lemurian continent?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`That reminded me, Sora had said the LeMU had 
been named after a continent called Lemuria.`;
   waitForClick; clearText; marker; appendText; 
   Narr`On Dritte stock there was an attraction called 
'The Ruins of Lemuria'... `;
   waitForClick; clearText; marker; sound(`S2B190`); appendText; 
   You`"Lemuria is this phantom continent that was 
said to have existed between 200 million to 50 
million years B.C."`;
   waitForClick; clearText; marker; sound(`S2B191`); appendText; 
   You`"On it thrived an advanced civilization that 
was more advanced that what we have today. But 
overnight it just slipped down to the bottom 
of the ocean."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You spoke as if she were reading from a 
textbook.`;
   waitForClick; clearText; marker; sound(`S2B192`); appendText; 
   You`"There are some scholars that contend that 
this continent was the origin of mankind."`;
   waitForClick; clearText; marker; sound(`S2B193`); appendText; 
   You`"Geez. They should open their eyes. There is 
no way that could even be possible."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You don't believe it?"`;
   waitForClick; clearText; marker; sound(`S2B194`); appendText; 
   You`"Of course not. Archaeologically and 
geologically the idea has no basis."`;
   waitForClick; clearText; marker; sound(`S2B195`); appendText; 
   You`"The more real research is conducted, the more 
the theory is shot full of holes...it's no 
longer a legitimate field of study."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You sure know a lot about it."`;
   waitForClick; clearText; marker; sound(`S3A357`); appendText; 
   You`"Well, I AM majoring in archaeology."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh, you are...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You and archaeology...somehow the two just did 
not seem to go together in my mind.`;
   waitForClick; clearText; 
});
let lbl_00000571;
showTextbox();
text(() => {
   marker; sound(`S3A358`); appendText; 
   You`"Near the end of the 20th century, some 
oceanic ruins were discovered near Okinawa, 
right?"`;
   waitForClick; clearText; marker; sound(`S3A359`); appendText; 
   You`"Leiblich Pharmaceutical spread rumors that 
these ruins somehow were evidence of the 
existence of Lemuria."`;
   waitForClick; clearText; marker; sound(`S3A360`); appendText; 
   You`"They have poured loads of cash into the 
archaeological survey of the seafloor."`;
   waitForClick; clearText; marker; sound(`S3A361`); appendText; 
   You`"I have no idea what the company is up to."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Your mom was involved in that project, too?"`;
   waitForClick; clearText; marker; sound(`S3A362`); appendText; 
   You`"Apparently...but I don't know the details."`;
   waitForClick; clearText; marker; sound(`S3A363`); appendText; 
   You`"But I think it is all just an act."`;
   waitForClick; clearText; marker; sound(`S3A364`); appendText; 
   You`"I think she's just taking the money and 
researching something else."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Something else?"`;
   waitForClick; clearText; 
});
goto(lbl_00000590).if(var_e3 != 0);
showTextbox();
text(() => {
   marker; sound(`S3A365`); appendText; 
   You`"I told you yesterday, didn't I?"`;
   waitForClick; clearText; 
});
let lbl_00000590;
showTextbox();
text(() => {
   marker; sound(`S3A366`); appendText; 
   You`"The ancient idea of 'the third eye.'"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Your mom sounds tricky."`;
   waitForClick; clearText; marker; sound(`S3A367`); appendText; 
   You`"Well, she is."`;
   waitForClick; clearText; marker; sound(`S3A368`); appendText; 
   You`"Still, I think I understand how she feels."`;
   waitForClick; clearText; marker; sound(`S3A369`); appendText; 
   You`"Even if they dug up all the ocean floors of 
the world, there is still no way they would 
find the ruins of the Lemurian continent."`;
   waitForClick; clearText; marker; sound(`S3A370`); appendText; 
   You`"Everybody knows that it is a complete waste 
of time."`;
   waitForClick; clearText; marker; sound(`S3A371`); appendText; 
   You`"Even the higher-ups at Leiblich 
Pharmaceutical probably know."`;
   waitForClick; clearText; marker; sound(`S3A372`); appendText; 
   You`"But they still have to go about pretending to 
do research."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I wonder why? It sounds like a waste to me."`;
   waitForClick; clearText; marker; sound(`S3A373`); appendText; 
   You`"Who knows? But it's a company were talking 
about, so I'll bet it has to do with money."`;
   waitForClick; clearText; marker; sound(`S3A374`); appendText; 
   You`"But there is no way for us to know and I 
don't really care."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tap, tap, tap...`;
   waitForClick; clearText; 
});
goto(lbl_000005c9).if(var_e3 != 0);
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Oh, that's right. I've been meaning to ask 
you, but..."`;
   waitForClick; clearText; 
});
goto(lbl_000005ce);
let lbl_000005c9;
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"It's kind of been bugging me..."`;
   waitForClick; clearText; 
});
let lbl_000005ce;
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"What do you mean that your mom is researching 
the third eye?"`;
   waitForClick; clearText; marker; sound(`S3A375`); appendText; 
   You`"In a nutshell, it basically means that..."`;
   waitForClick; clearText; marker; sound(`S3A376`); appendText; 
   You`"Any dimension 'n' may only be understood in 
its entirety when viewed from a dimension at 
least 'n+1'."`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`It didn't sound very basic to me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`What did she mean?`;
   waitForClick; clearText; marker; sound(`S3A377`); appendText; 
   You`"Essentially, only by gaining a sense of the 
4th dimension can we really fully sense the 
whole of what is going on around us."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"???"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had no idea what she was talking about.`;
   waitForClick; clearText; marker; sound(`S3A378`); appendText; 
   You`"Like when the third eye has opened up or 
something."`;
   waitForClick; clearText; 
});
bgload({ name: `BG11A1`, transition: 20 });
stopSFX()
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You's hands stopped typing there for an 
instant and she popped her neck loudly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She reached out for her cup and took a sip of 
coffee.`;
   waitForClick; clearText; 
});
goto(lbl_000007a9).if(var_e3 == 0);
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"What's a third eye?"`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 14, volume: 100 });
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A379`); appendText; 
   You`"The third eye I'm talking about is the 
mythological one that deals with supernatural 
powers."`;
   waitForClick; clearText; marker; sound(`S3A380`); appendText; 
   You`"For example..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A381`); appendText; 
   You`"Like the third eye on the forehead of the 
Hindu god Shiva...like they say in yoga about 
the Aagya Chakra, or third eye Chakra..."`;
   waitForClick; clearText; marker; sound(`S3A901`); appendText; 
   You`"Or the astral light training by sages..."`;
   waitForClick; clearText; sound(`S3A902`); appendText; 
   You`"...or like in esoteric Buddhism with the 
famous monk Kobo Daishi's ascetic training 
and invoking of the Kokuzo deity of space 
through the Kokuzo gumonjiho..."`;
   waitForClick; clearText; marker; sound(`S3A383`); appendText; 
   You`"Like the All Knowing Eye in Tibetan Tantric 
Buddhism."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Uh...uh..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt like I was being bombarded with exotic 
words.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The conversation had completely left me behind.`;
   waitForClick; clearText; marker; sound(`S2B229`); appendText; 
   You`"Clairvoyance, telescopic vision, ghost sense, 
the gift of the prophet, the power of seeing 
the past or future..."`;
   waitForClick; clearText; marker; sound(`S2B230`); appendText; 
   You`"There are a lot of explanations behind it. 
Some say it is a gift from the gods, others 
that you can acquire it from intensive 
training. But what they all have in common is.."`;
   waitForClick; clearText; marker; appendText; 
   Narr`When the third eye opens, true wisdom is 
apparent and all becomes visible.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B231`); appendText; 
   You`"They all have something to do with 
transcending the realm of the human...becoming 
superhuman somehow."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hmmmm. Wow... I don't get it, but it sounds 
pretty fantastic."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A384`); appendText; 
   You`"Please don't say 'I wish I had that!' Please, 
please don't."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Wh-why..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had actually been thinking just that.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A385`); appendText; 
   You`"Forget it. It's unattainable anyway."`;
   waitForClick; clearText; marker; sound(`S3A386`); appendText; 
   You`"No matter how much you want it, I don't want 
you buying tacky mail order space pendants 
that promise wisdom or anything else."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What are those?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`More words I didn't know.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A387`); appendText; 
   You`"If you don't know, you should stay that way."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A388`); appendText; 
   You`"So the third eye in terms of human anatomical 
science is simply a function that we have lost 
with evolution."`;
   waitForClick; clearText; 
});
hideTextbox();
showDimOverlay();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I wondered why we only had two eyes.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Common knowledge had it that physically two 
eyes were enough for gauging the distance to a 
point or focusing on something.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`But what would it be like if we really used to 
have three eyes?`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Actually...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`The animal ancestors of vertebrates had three 
eyes.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Early species of primitive reptiles...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Like the tuatara lizard that still has a third 
eye on the top of its head.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The third eye...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`
`;
   appendText; 
   Narr`The organ has a similar function to the 
eyeball and lies on the top of the head.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`This organ would be sensitive to the light of 
the outside world and control internal hormone 
secretion and balance based on the light.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`An eye on the crest of one's head would stare 
straight up. It seemed safe to say that it 
would sense the difference in light between 
day and night.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`A right eye, a left eye and one above...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`An eye on the top of the head to stare at the 
sky.`;
   waitForClick; 
   Narr`
`;
   
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Only we people and higher vertebrates had lost 
the third eye over a long process of 
evolution. It had been covered over by the 
cerebrum and we lost our ability to sense 
light directly.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Therefore we had two light sensitive eyeballs, 
one on each side, instead.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`This lost third eye was called a 'pineal body.'`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`This had functioned in the brain for eons and 
was responsible for secreting hormones that 
helped carve out our 24-hour rhythm.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`What we called our internal clocks existed 
because of this pineal body.`;
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
   Kid`"You mean like an appendix or the webbing 
between fingers?"`;
   waitForClick; clearText; marker; sound(`S2B247`); appendText; 
   You`"That's exactly what I mean."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Still, you've got tons of knowledge...you're 
like a walking dictionary."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A389`); appendText; 
   You`"It's no big deal."`;
   waitForClick; clearText; marker; sound(`S3A390`); appendText; 
   You`"The information I have is completely useless."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I don't think so."`;
   waitForClick; clearText; marker; sound(`S3A391`); appendText; 
   You`"It's true."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A392`); appendText; 
   You`"I mean, no matter how much knowledge you 
have, it can't make you happy, right?"`;
   waitForClick; clearText; marker; sound(`S3A393`); appendText; 
   You`"It just makes you feel so 
ignorant...scholarship is a pretty empty 
pursuit."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"..."`;
   waitForClick; clearText; marker; sound(`S2B253`); appendText; 
   You`"But even so, I still can't give it up."`;
   waitForClick; clearText; marker; sound(`S2B254`); appendText; 
   You`"Maybe it has completely rooted itself into my 
brain."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But you planted it there yourself, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B255`); appendText; 
   You`"No way!"`;
   waitForClick; clearText; marker; sound(`S2B256`); appendText; 
   You`"My mom's the guilty one."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Your mom?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B259`); appendText; 
   You`"Anyway, when I was little, instead of 
lullabies, she told me all these third eye 
stories."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Wow..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B260`); appendText; 
   You`"I used to hate archaeology..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You sighed as she said this.`;
   waitForClick; clearText; marker; sound(`S2B261`); appendText; 
   You`"But one day I just woke up and found myself 
in the archaeology department."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Like mother, like daughter?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S2B262`); appendText; 
   You`"It's not that simple."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You gave another mighty sigh.`;
   waitForClick; clearText; marker; sound(`S2B263`); appendText; 
   You`"It's like some kind of curse."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Uh, if we could get back to what we were 
talking about..."`;
   waitForClick; clearText; 
});
goto(lbl_00000815);
let lbl_000007a9;
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"I think yesterday you said something about 
evolution."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"About losing that organ thingy on the 
head...the, um..."`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 1, volume: 100 });
fgload({ id: 1, name: `YU06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A394`); appendText; 
   You`"No, no. Not there."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A395`); appendText; 
   You`"It's here and it's called the third eye and 
it has to do with supernatural powers."`;
   waitForClick; clearText; marker; sound(`S3A396`); appendText; 
   You`"It's like..."`;
   waitForClick; clearText; marker; sound(`S3A381`); appendText; 
   You`"Like the third eye on the forehead of the 
Hindu god Shiva...like they say in yoga about 
the Aagya Chakra, or third eye Chakra..."`;
   waitForClick; clearText; marker; sound(`S3A901`); appendText; 
   You`"Or the astral light training by sages..."`;
   waitForClick; clearText; sound(`S3A902`); appendText; 
   You`"...or like in esoteric Buddhism with the 
famous monk Kobo Daishi's ascetic training 
and invoking of the Kokuzo deity of space 
through the Kokuzo gumonjiho..."`;
   waitForClick; clearText; marker; sound(`S3A383`); appendText; 
   You`"Like the All Knowing Eye in Tibetan Tantric 
Buddhism."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Uh...uh..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt like I was being bombarded with exotic 
words.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The conversation had completely left me behind.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A397`); appendText; 
   You`"I think I mentioned it yesterday, but..."`;
   waitForClick; clearText; marker; sound(`S3A398`); appendText; 
   You`"When the third eye opens, true wisdom is 
apparent and all becomes visible....at least 
that's what they say."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A399`); appendText; 
   You`"That's IF the story is real."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Uh, so let's see...that means..."`;
   waitForClick; clearText; 
});
let lbl_00000815;
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"In summary it goes something like this..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Your mom is researching an ancient concept 
called the third eye or third perspective..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"And once someone has acquired the third eye 
they can sense the 4th dimension and see the 
whole of the world."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"And that is in line with the legend of the 
third eye."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A400`); appendText; 
   You`"Does that about cover it?"`;
   waitForClick; clearText; marker; sound(`S3A401`); appendText; 
   You`"Well, to hear my mom tell it, the third eye 
and third perspective are the same."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I don't quite get it..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Why would a sense of the 4th dimension allow 
someone to understand the whole world?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Or why is a sense of the 4th dimension 
necessary? We're seeing the world the way we 
are right now."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I don't get the connection between the third 
eye or third perspective...and the 4th 
dimension..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`There were lots of things I didn't get.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The whole concept seemed to be beyond my 
understanding.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A402`); appendText; 
   You`"Alright...break's over."`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
bgload({ name: `EV_YU04A`, transition: 10 });
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tap, tap, tap...`;
   waitForClick; clearText; marker; appendText; 
   Narr`You started working again without answering my 
question.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey, You."`;
   waitForClick; clearText; marker; sound(`S3A403`); appendText; 
   You`"Sorry, let's make that the end of today's 
lecture."`;
   waitForClick; clearText; marker; sound(`S3A404`); appendText; 
   You`"The explanation from here is pretty hard."`;
   waitForClick; clearText; marker; sound(`S3A405`); appendText; 
   You`"And it's pretty obvious I'm busy, right?"`;
   waitForClick; clearText; marker; sound(`S3A406`); appendText; 
   You`"If you really wanna know, next time I'll 
explain it in an easy to swallow way."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You didn't say anything more.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"...Okay."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I decided to give up for the time being.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I remembered I was still holding the cup.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I figured not drinking it would be a waste so 
I drank it down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Gulp.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Yuck...this is so bitter.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`And it was completely cold, too.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
delay({ interval: 90 });
playSFX({ name: `SE04_02`, a1: 1, volume: 100 });
waitForSFX();
playSFX({ name: `SE03_04`, a1: 1, volume: 100 });
waitForSFX();
bgload({ name: `BG11A1`, transition: 26 });
fgload({ id: 1, name: `YU03ADL`, x: 320, useAnim: false });
playBGM({ num: 2, volume: 100 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
showTextbox();
text(() => {
   marker; sound(`S3A407`); appendText; 
   You`"Oh, I give up."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You muttered this and looked down dejectedly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She leaned back in the chair and it squeaked.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the end she hadn't found any new clues.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Actually, she hadn't even gotten past the 
authorization screen.`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Access denied. Invalid name or password.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`That message had been displayed again and 
again. It still sat in the middle of the 
screen.`;
   waitForClick; clearText; marker; sound(`S3A408`); appendText; 
   You`"Oh...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You was really down.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So you couldn't get it? The password."`;
   waitForClick; clearText; marker; sound(`S3A409`); appendText; 
   You`"Nope."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Don't you have any ideas?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A410`); appendText; 
   You`"Like what?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I mean, when somebody sets a password, it is 
usually a word that has to do with them."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"A birthday or phone number for something 
short."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Even somebody that wanted to think of 
something nobody would know would probably 
come up with a phrase related to their past."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"I mean, there is almost nobody that uses a 
meaningless combination of numbers and 
letters."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"If they did, they would probably forget it."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"And if they forget it, then a password is 
meaningless..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A411`); appendText; 
   You`"I know that. I tried all the things I could 
think of."`;
   waitForClick; clearText; marker; sound(`S3A412`); appendText; 
   You`"I tried them backwards and as an anagram and 
all possible patterns I could imagine..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A413`); appendText; 
   You`"But it's no good."`;
   waitForClick; clearText; marker; sound(`S3A414`); appendText; 
   You`"I'm just a normal person when it comes to 
computers."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A415`); appendText; 
   You`"I'm no hacker or cracker. I don't have any 
illegal programs and can't just type one out 
right now."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You stuck her hands up in the air, signaling 
her surrender.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I know! Sara could probably do it, right?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I remembered that Sara was a top-level hacker.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You said that Sara took first prize in some 
code-breaking contest, right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I'll bet she'd make a password-breaking 
program for you."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A416`); appendText; 
   You`"Maybe."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You didn't seem keen on the idea.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Why don't you ask her?"`;
   waitForClick; clearText; marker; sound(`S3A417`); appendText; 
   You`"I could, but I don't want to."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"???"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A418`); appendText; 
   You`"I don't want to involve her in this."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought that maybe she was still concerned 
about the criminal element of the idea.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But you don't mind getting me involved?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A419`); appendText; 
   You`"Well, you came and involved yourself."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I suppose..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`But at this rate, You probably wouldn't find a 
clue during her lifetime.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wanted to help her out.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As a way of thanking her for helping me.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A420`); appendText; 
   You`"There is just one clue..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You took a piece of paper from atop the 
console.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What's that?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A421`); appendText; 
   You`"This was inside my mom's machine."`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showDimOverlay();
hideTextbox();
NVL_Mode();
delay({ interval: 60 });
playBGM({ num: 16, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`S3A422`); appendText; nextPage(00); 
   Narr`I sneaked into her research room before coming 
here.`;
   nextPage(01); waitForSound; 
   Narr`
`;
   sound(`S3A423`); appendText; nextPage(00); 
   Narr`I was looking for clues about my father of 
course.`;
   nextPage(01); waitForSound; 
   Narr`
`;
   sound(`S3A424`); appendText; nextPage(00); 
   Narr`When I went in, I saw that her computer was on.`;
   nextPage(01); waitForSound; 
   Narr`
`;
   sound(`S3A425`); appendText; nextPage(00); 
   Narr`Looking at it I saw that there was a text file 
entitled 'Password.'`;
   nextPage(01); waitForSound; 
   Narr`
`;
   sound(`S3A426`); appendText; nextPage(00); 
   Narr`When I opened it, it was only one line...`;
   nextPage(01); waitForSound; 
   Narr`
`;
   sound(`S3A427`); appendText; nextPage(00); 
   Narr`There was some Japanese sentence typed inside 
it.`;
   nextPage(01); waitForClick; nextPage(04); 
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
   Kid`"Then you saw the password!"`;
   waitForClick; clearText; marker; sound(`S3A428`); appendText; 
   You`"Sure. I saw it."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A429`); appendText; 
   You`"But I don't remember it."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A430`); appendText; 
   You`"I was in a hurry."`;
   waitForClick; clearText; 
});
hideTextbox();
showDimOverlay();
hideTextbox();
NVL_Mode();
delay({ interval: 60 });
showTextbox();
text(() => {
   marker; sound(`S3A431`); appendText; nextPage(00); 
   Narr`I tried to take a note of it before I was 
found out.`;
   nextPage(01); waitForSound; sound(`S3A432`); appendText; nextPage(00); 
   Narr`But I didn't see a pen or anything around.`;
   nextPage(01); waitForSound; 
   Narr`
`;
   sound(`S3A433`); appendText; nextPage(00); 
   Narr`And there were no disks or anything that I 
could copy it to.`;
   nextPage(01); waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
varop(`(28 0a a0) ac := (00) 0`);
closeDimOverlay();
hideTextbox();
AVL_Mode();
fgload({ id: 1, name: `YU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A434`); appendText; 
   You`"Thinking about it now, I should have sent it 
to myself by e-mail..."`;
   waitForClick; clearText; 
});
hideTextbox();
showDimOverlay();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; sound(`S3A435`); appendText; nextPage(00); 
   Narr`But I was in a rush and didn't think about it 
then.`;
   nextPage(01); waitForSound; 
   Narr`
`;
   sound(`S3A436`); appendText; nextPage(00); 
   Narr`Suddenly, I thought that I'd try to print it 
out...`;
   nextPage(01); waitForSound; 
   Narr`
`;
   sound(`S3A437`); appendText; nextPage(00); 
   Narr`As soon it stopped printing my mom came back.`;
   nextPage(01); waitForSound; 
   Narr`
`;
   sound(`S3A438`); appendText; nextPage(00); 
   Narr`I snatched the paper that was in the tray and 
jammed it in my pocket.`;
   nextPage(01); waitForClick; nextPage(04); 
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
   Kid`"Huh? What do you mean?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So the paper you have now is the one with the 
password on it?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You held out the paper without saying anything.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Huh? What's this?"`;
   waitForClick; clearText; 
});
bgload({ name: `IT03A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"A barcode?"`;
   waitForClick; clearText; marker; sound(`S3A439`); appendText; 
   You`"It looks like it, but it seems different than 
normal barcodes."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It's got ten lines?"`;
   waitForClick; clearText; marker; sound(`S3A440`); appendText; 
   You`"Yup."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What does this have to do with anything?"`;
   waitForClick; clearText; marker; sound(`S3A441`); appendText; 
   You`"Who knows?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"About how many characters were in that 
password?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You said it was in Japanese, right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"About how many characters was it?"`;
   waitForClick; clearText; marker; sound(`S3A442`); appendText; 
   You`"I don't remember very well. Maybe 10 
characters give or take."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Was it all written in Japanese? Any numbers?"`;
   waitForClick; clearText; marker; sound(`S3A443`); appendText; 
   You`"I'm pretty sure it was just Japanese. I don't 
remember any numbers or anything else."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I wonder which end of this is the top."`;
   waitForClick; clearText; marker; sound(`S3A444`); appendText; 
   You`"You got me."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Or could it be written vertically? No way."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"If you printed out a text file, why would it 
come out as a barcode?"`;
   waitForClick; clearText; marker; sound(`S3A445`); appendText; 
   You`"Who knows?"`;
   waitForClick; clearText; 
});
bgload({ name: `BG11A1`, transition: 20 });
fgload({ id: 1, name: `YU07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"No hints?"`;
   waitForClick; clearText; marker; sound(`S3A446`); appendText; 
   You`"Hints?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A447`); appendText; 
   You`"If I don't know the answer, how can I give 
you a hint?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But you have to remember something, right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Like, did it have to do with food, or a 
person's name..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You shook her head and spoke.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A448`); appendText; 
   You`"I saw it, but only for a second."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But how could you forget something so 
important?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A449`); appendText; 
   You`"Well, at least I know my address."`;
   waitForClick; clearText; marker; sound(`S3A450`); appendText; 
   You`"And phone number. And birthday. And my social 
security number. And..."`;
   waitForClick; clearText; marker; sound(`S3A451`); appendText; 
   You`"I even know my name."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A452`); appendText; 
   You`"Now who is forgetting the important things?"`;
   waitForClick; clearText; 
});
bgload({ name: `IT03A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I looked again at the paper we thought 
contained the password.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was obsessed with solving the puzzle we had 
found.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was frustrating.`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Now who is forgetting the important things?'`;
   waitForClick; clearText; marker; appendText; 
   Narr`...What could I say to that?`;
   waitForClick; clearText; marker; appendText; 
   Narr`(It's not like I wanted to lose my memory!)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Watch this! I'll remember everything just to 
show you!)`;
   waitForClick; clearText; marker; appendText; 
   Narr`But first...I had to figure this out.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had my mind set on it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I almost felt like solving this was a rite of 
passage that would help restore my memory.`;
   waitForClick; clearText; marker; appendText; 
   Narr`............`;
   waitForClick; clearText; marker; appendText; 
   Narr`..........`;
   waitForClick; clearText; marker; appendText; 
   Narr`..........`;
   waitForClick; 
});
varop(`(28 0a a4) d0 := (00) 1`);
varop(`(28 0a a4) d1 := (00) 1`);
varop(`(28 0a a4) d2 := (00) 1`);
varop(`(28 0a a4) d3 := (00) 1`);
varop(`(28 0a a4) d4 := (00) 1`);
varop(`(28 0a a4) d5 := (00) 1`);
varop(`(28 0a a4) bb := (00) 0`);
varop(`(28 0a a4) bc := (00) 0`);
varop(`(28 0a a4) bd := (00) 0`);
goto(lbl_00000c3b);
let lbl_00000bfe;
goto(lbl_00000c36).if(var_bc != 0);
goto(lbl_00000c36).if(var_bd != 0);
bgload({ name: `IT03A`, transition: 20 });
let lbl_00000c36;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`What should I do...?`;
   waitForClick; 
});
let lbl_00000c3b;
choice(
   `I got it`
   `I don't get it`
);
switch (choice) {
   case 0: goto(lbl_00000c5e);
   case 1: goto(lbl_00000e28);
}
let lbl_00000c5e;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(Could it be...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought for a second.`;
   waitForClick; 
});
choice(
   cond(`[cond (28 0a a4) d0 14 (00)]What if I turn it over...`, var_d0)
   cond(`[cond (28 0a a4) d1 14 (00)]What if I turn it upside down...`, var_d1)
   cond(`[cond (28 0a a4) d2 14 (00)]What if I heat it with a flame...`, var_d2)
   cond(`[cond (28 0a a4) d3 14 (00)]What if I rip it in two...`, var_d3)
   cond(`[cond (28 0a a4) d4 14 (00)]What if I tilt it...`, var_d4)
   cond(`[cond (28 0a a4) d5 14 (00)]What if I wad it up...`, var_d5)
);
switch (choice) {
   case 0: goto(lbl_00000ca2);
   case 1: goto(lbl_00000cd4);
   case 2: goto(lbl_00000d06);
   case 3: goto(lbl_00000d30);
   case 4: goto(lbl_00000d62);
   case 5: goto(lbl_00000df6);
}
let lbl_00000ca2;
varop(`(28 0a a4) bb += (00) 1`);
varop(`(28 0a a4) d0 := (00) 0`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I thought that if I turned it over I might be 
able to read something.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I turned the paper over and held it up to the 
light.`;
   waitForClick; clearText; 
});
bgload({ name: `IT03B`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was no good. Turning it over showed nothing 
new.`;
   waitForClick; clearText; marker; sound(`S3A453`); appendText; 
   You`"So? Did you figure it out?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yup. I figured out that I can't read it this 
way."`;
   waitForClick; clearText; marker; sound(`S3A454`); appendText; 
   You`"I told you it's impossible."`;
   waitForClick; clearText; marker; sound(`S3A455`); appendText; 
   You`"I tried all kinds of things."`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Hmmmm. Let's see.)`;
   waitForClick; clearText; 
});
goto(lbl_00000fb4);
let lbl_00000cd4;
varop(`(28 0a a4) bb += (00) 1`);
varop(`(28 0a a4) d1 := (00) 0`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I thought maybe I could read something if I 
turned the paper upside down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I turned it upside down.`;
   waitForClick; clearText; 
});
bgload({ name: `IT03C`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was no good. Turning the paper upside down 
showed nothing new.`;
   waitForClick; clearText; marker; sound(`S3A453`); appendText; 
   You`"So? Did you figure it out?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yup. I figured out that I can't read it this 
way."`;
   waitForClick; clearText; marker; sound(`S3A454`); appendText; 
   You`"I told you it's impossible."`;
   waitForClick; clearText; marker; sound(`S3A455`); appendText; 
   You`"I tried all kinds of things."`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Hmmmm. Let's see.)`;
   waitForClick; clearText; 
});
goto(lbl_00000fb4);
let lbl_00000d06;
varop(`(28 0a a4) bb += (00) 1`);
varop(`(28 0a a4) d2 := (00) 0`);
varop(`(28 0a a4) bc := (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I thought maybe if I heated it with a flame, I 
could read it.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey, you don't have a lighter, do you?"`;
   waitForClick; clearText; marker; sound(`S3A456`); appendText; 
   You`"Huh? A lighter?"`;
   waitForClick; clearText; marker; sound(`S3A457`); appendText; 
   You`"Don't tell me you want to calm your nerves 
with a smoke."`;
   waitForClick; clearText; marker; sound(`S3A458`); appendText; 
   You`"You're too young to smoke!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I know that..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I wanted to use it on the paper..."`;
   waitForClick; clearText; marker; sound(`S3A459`); appendText; 
   You`"You want to burn it? Playing with fire is 
dangerous!"`;
   waitForClick; clearText; marker; sound(`S3A460`); appendText; 
   You`"Besides, this paper is the only clue I've 
got. I won't let you burn it."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"That's not what I mean."`;
   waitForClick; clearText; marker; sound(`S3A461`); appendText; 
   You`"Well, what then?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I thought that if I heated the paper with a 
flame, something might appear..." `;
   waitForClick; clearText; marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`S3A462`); appendText; 
   You`"You're kidding...right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah. Ha, ha. I'm just joking..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I figured out that I couldn't read it 
that way.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Hmmmm. Let's see.)`;
   waitForClick; clearText; 
});
goto(lbl_00000fb4);
let lbl_00000d30;
varop(`(28 0a a4) bb += (00) 1`);
varop(`(28 0a a4) d3 := (00) 0`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I thought that if I folded it in half maybe I 
could read something.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took it and folded it in half.`;
   waitForClick; clearText; 
});
bgload({ name: `IT03D`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was no good. Folding showed nothing new.`;
   waitForClick; clearText; marker; sound(`S3A453`); appendText; 
   You`"So? Did you figure it out?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yup. I figured out that I can't read it this 
way."`;
   waitForClick; clearText; marker; sound(`S3A454`); appendText; 
   You`"I told you it's impossible."`;
   waitForClick; clearText; marker; sound(`S3A455`); appendText; 
   You`"I tried all kinds of things."`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Hmmmm. Let's see.)`;
   waitForClick; clearText; 
});
goto(lbl_00000fb4);
let lbl_00000d62;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I thought that if I tilted it a little I might 
be able to see something.`;
   waitForClick; 
});
choice(
   `Tilt it a little to the side`
   `Tilt it almost completely to the side`
   `Tilt it a little vertically`
   `Tilt it almost completely vertical`
);
switch (choice) {
   case 0: goto(lbl_00000d98);
   case 1: goto(lbl_00000daa);
   case 2: goto(lbl_00000dbc);
   case 3: goto(lbl_00000dce);
}
let lbl_00000d98;
bgload({ name: `IT03G`, transition: 20 });
goto(lbl_00000de2);
let lbl_00000daa;
bgload({ name: `IT03H`, transition: 20 });
goto(lbl_00000de2);
let lbl_00000dbc;
bgload({ name: `IT03E`, transition: 20 });
goto(lbl_00000de2);
let lbl_00000dce;
bgload({ name: `IT03F`, transition: 20 });
stopBGM();
goto(lbl_00000e84);
let lbl_00000de2;
varop(`(28 0a a4) bb += (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It didn't help. Changing the angle showed 
nothing new.`;
   waitForClick; clearText; marker; sound(`S3A453`); appendText; 
   You`"So? Did you figure something out?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yup. I figured out that I can't read it this 
way."`;
   waitForClick; clearText; marker; sound(`S3A454`); appendText; 
   You`"I told you it's impossible."`;
   waitForClick; clearText; marker; sound(`S3A455`); appendText; 
   You`"I tried all kinds of things."`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Hmmmm. Let's see.)`;
   waitForClick; clearText; 
});
goto(lbl_00000fb4);
let lbl_00000df6;
varop(`(28 0a a4) bb += (00) 1`);
varop(`(28 0a a4) d5 := (00) 0`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I rolled the paper in a ball, 
but still couldn't read anything.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I rolled the paper into a stick-like shape.`;
   waitForClick; clearText; 
});
bgload({ name: `IT03I`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was no good. Rolling it up showed nothing 
new.`;
   waitForClick; clearText; marker; sound(`S3A453`); appendText; 
   You`"So? Did you figure it out?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yup. I figured out that I can't read it this 
way."`;
   waitForClick; clearText; marker; sound(`S3A454`); appendText; 
   You`"I told you it's impossible."`;
   waitForClick; clearText; marker; sound(`S3A455`); appendText; 
   You`"I tried all kinds of things."`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Hmmmm. Let's see.)`;
   waitForClick; clearText; 
});
goto(lbl_00000fb4);
let lbl_00000e28;
varop(`(28 0a a4) bb += (00) 1`);
varop(`(28 0a a4) bd := (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"..............."`;
   waitForClick; clearText; marker; appendText; 
   Narr`No. I've got no idea.`;
   waitForClick; clearText; marker; sound(`S3A453`); appendText; 
   You`"So? Did you figure it out?"`;
   waitForClick; clearText; 
});
goto(lbl_00000fb4).if(var_bb >= 3);
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"No...not yet."`;
   waitForClick; clearText; 
});
goto(lbl_00000e7b).if(var_bb == 2);
showTextbox();
text(() => {
   marker; sound(`S3A454`); appendText; 
   You`"I told you it's impossible."`;
   waitForClick; clearText; marker; sound(`S3A455`); appendText; 
   You`"I tried all kinds of things."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But if we just change our way of looking at 
things, I think we'll figure it out."`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Huh?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(By changing the way we look...we'll figure it 
out?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`Something about my words triggered something 
in my mind.`;
   waitForClick; clearText; 
});
goto(lbl_00000e80);
let lbl_00000e7b;
showTextbox();
text(() => {
   marker; sound(`S3A463`); appendText; 
   You`"Why don't we just give up?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I won't give up."`;
   waitForClick; clearText; marker; sound(`S3A464`); appendText; 
   You`"You're pretty stubborn - for a punk Kid!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Be quiet."`;
   waitForClick; clearText; marker; sound(`S3A465`); appendText; 
   You`"And somebody that can't even understand the 
difference between two dimensions and three 
dimensions."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Huh?"`;
   waitForClick; clearText; marker; sound(`S3A466`); appendText; 
   You`"See? The characters on the paper are 
two-dimensional and we are three-dimensional."`;
   waitForClick; clearText; marker; sound(`S3A467`); appendText; 
   You`"Basically, the worlds that we live in are 
different."`;
   waitForClick; clearText; marker; sound(`S3A468`); appendText; 
   You`"So if you really want to understand what this 
barcode has to say, then you have to think 
two-dimensionally."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`S3A469`); appendText; 
   You`"So? Whaddya think?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`(The stuff on the paper is two-dimensional...
And we are three dimensional.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had to think two-dimensionally.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(What do I have to do to think 
two-dimensionally...?)`;
   waitForClick; clearText; 
});
let lbl_00000e80;
goto(lbl_00000bfe);
let lbl_00000e84;
varop(`(28 0a a4) e5 := (00) 1`);
goto(lbl_00000ed7).if(var_bb >= 2);
goto(lbl_00000ec8).if(var_bb == 1);
varop(`(28 0a a4) b6 += (00) 3`);
goto(lbl_00000ee2);
let lbl_00000ec8;
varop(`(28 0a a4) b6 += (00) 2`);
goto(lbl_00000ee2);
let lbl_00000ed7;
varop(`(28 0a a4) b6 += (00) 1`);
let lbl_00000ee2;
delay({ interval: 60 });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"I got it! Listen, if you take the paper and 
set it like this..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What? Let's see..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"The empty fall sky...A single cuckoo calls 
out...Brings a chill to me."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What is this?"`;
   waitForClick; clearText; marker; sound(`S3A470`); appendText; 
   You`"What! Let me see that!"`;
   waitForClick; clearText; 
});
bgload({ name: `BG11A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You grabbed the slip of paper from my hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Then she copied me and set the paper sideways 
in the same way.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 18, volume: 100 });
fgload({ id: 1, name: `YU02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A471`); appendText; 
   You`"You...you're right!"`;
   waitForClick; clearText; marker; sound(`S3A472`); appendText; 
   You`"Amazing! Kid, you're amazing!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You grabbed my hand and shook it happily.`;
   waitForClick; clearText; marker; appendText; 
   Narr`...But she didn't stop there...
She pulled me close in a big bear hug.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Squeeze—!!!`;
   waitForClick; clearText; marker; appendText; 
   Narr`My face was pressed hard against her bust.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a nice fit...a little too nice...I 
struggled for air.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I...give up...give...mercy..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I almost felt dangerously excited by the 
softness of her.`;
   waitForClick; clearText; marker; sound(`S3A473`); appendText; 
   You`"We did it, we did it! Yeah!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Finally, You let me go.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She jumped around gleefully like a rabbit.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I was glad she was happy...even if she did 
almost crush me.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`Watching You all happy like that seemed to 
wash away all my irritation and fatigue.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The stress I was feeling simply faded away.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was like the winter frost melting away 
under the spring sun.`;
   waitForClick; clearText; 
});
bgload({ name: `IT03F`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`S3A474`); appendText; 
   You`"I get it now. You can't see it from right 
above it."`;
   waitForClick; clearText; marker; sound(`S3A475`); appendText; 
   You`"But if you look from the side...I see it now."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But why do you suppose it came out in a 
barcode like this?"`;
   waitForClick; clearText; marker; sound(`S3A476`); appendText; 
   You`"The printer is probably in bad shape."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Think so? It's hard to believe that would 
make it print like this."`;
   waitForClick; clearText; marker; sound(`S3A477`); appendText; 
   You`"I don't care about that now."`;
   waitForClick; clearText; marker; sound(`S3A478`); appendText; 
   You`"Anyway, as long as I have the password, 
things are fine."`;
   waitForClick; clearText; marker; appendText; 
   Narr`'The empty fall sky/ A single cuckoo calls 
out/ Brings a chill to me.'`;
   waitForClick; clearText; marker; sound(`S3A479`); appendText; 
   You`"I think this is a variation of the famous 
haiku 'The empty June sky/ A single cuckoo 
calls out/ Brings a chill to me,' by Shiki 
Masaoka."`;
   waitForClick; clearText; marker; sound(`S3A480`); appendText; 
   You`"So if I input it like this..."`;
   waitForClick; clearText; marker; sound(`S3A481`); appendText; 
   You`'The-empty-fall-sky/ 
A-single-cuckoo-calls-out/Brings-a-chill-to-me.'`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Wow."`;
   waitForClick; clearText; 
});
bgload({ name: `BG11A1`, transition: 20 });
fgload({ id: 1, name: `YU02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A482`); appendText; 
   You`"Alright! Let's try this for a password."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU04A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`A recharged You faced the screen triumphantly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But...`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tap, tap, tap...`;
   waitForClick; clearText; marker; sound(`S3A483`); appendText; 
   You`"The-empty-fall-sky/ 
A-single-cuckoo-calls-out- 
Brings-a-chill-to-me. Okay then!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tap!`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Beeeeeeeep!`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Access denied. Invalid name or password.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`But she still couldn't get into the C Level 
information.`;
   waitForClick; clearText; 
});
goto(lbl_000010cd);
let lbl_00000fb4;
goto(lbl_00000bfe).if(var_bb < 3);
bgload({ name: `BG11A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"It's no good. Time to give up!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A484`); appendText; 
   You`"See, I told you so."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"..."`;
   waitForClick; clearText; marker; sound(`S3A485`); appendText; 
   You`"I told you it was impossible to figure out 
from the start."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A486`); appendText; 
   You`"Should I try one last time?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"There's still a potential password you 
haven't tried?"`;
   waitForClick; clearText; marker; sound(`S3A487`); appendText; 
   You`"Yup. But I thought it wouldn't work, so I 
tried everything else I could think of."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU04A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You stared into the computer monitor.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tap, tap, tap...`;
   waitForClick; clearText; marker; appendText; 
   Narr`....`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Beeeeeeeep!`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Access denied. Invalid name or password.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`Things just didn't seem to want to go our way.`;
   waitForClick; clearText; marker; sound(`S3A488`); appendText; 
   You`"Arrrggghhh! Damn!"`;
   waitForClick; clearText; marker; sound(`S3A489`); appendText; 
   You`"Now that things have come to this..."`;
   waitForClick; clearText; marker; sound(`S3A490`); appendText; 
   You`"Abracadabra..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Huh?"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tap, tap, tap...`;
   waitForClick; clearText; marker; sound(`S3A491`); appendText; 
   You`"Open sesame!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Beeeeeeeep!`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tap, tap, tap...`;
   waitForClick; clearText; marker; sound(`S3A492`); appendText; 
   You`"Magic carpet...!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Beeeeeeeep!`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tap, tap, tap...`;
   waitForClick; clearText; marker; sound(`S3A493`); appendText; 
   You`"On Dasher and Dancer, and Prancer and 
Vixen...come on!!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Beeeeeeeep!`;
   waitForClick; clearText; marker; appendText; 
   Narr`Of course, none of these phrases got her 
access to the C Level information.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't see why she had to shout all of them 
out either.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was already at my wit's end and incapable of 
speech.`;
   waitForClick; clearText; 
});
let lbl_000010cd;
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Just then - !`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE03_02`, a1: 0, volume: 90 });
bgload({ name: `BG11A1`, transition: 20 });
fgload({ id: 1, name: `YU06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A494`); appendText; 
   You`"Wh-what in the...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The screen went black.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Wh-what just happened?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A495`); appendText; 
   You`"I don't know but it looks like it 
automatically shut down the authorization 
screen..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`After a moment, the screen returned to normal.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You pecked away at the keyboard and called up 
the authorization screen again.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tap, tap, tap...`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tap!`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Beeeeeeeep!`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Access denied. Currently this name cannot be 
logged in.'`;
   waitForClick; clearText; marker; sound(`S3A496`); appendText; 
   You`"What?! What is this?!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She tried it again.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Beeeeeeeep!`;
   waitForClick; clearText; marker; appendText; 
   Narr`The result was the same.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What does this mean?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A497`); appendText; 
   You`"Maybe I entered the wrong password too many 
times and it activated some kind of 
protection."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S3A498`); appendText; 
   You`"In other words, LeMMIH has completely denied 
access to my mom's name."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A499`); appendText; 
   You`"So we'll have to give up for the time being, 
I guess."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You shrugged exaggeratedly.`;
   waitForClick; clearText; 
});
goto(lbl_00001232).if(var_e5 == 0);
showTextbox();
text(() => {
   marker; sound(`S3A500`); appendText; 
   You`"And you went to so much trouble to read this 
for me, Kid..."`;
   waitForClick; clearText; marker; sound(`S3A501`); appendText; 
   You`"But from the start there was no guarantee 
that what is on that paper is the password."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S3A502`); appendText; 
   You`"It would make more sense if this were some 
kind of hint that my mom uses to remember the 
password."`;
   waitForClick; clearText; marker; sound(`S3A503`); appendText; 
   You`"It wouldn't make much sense to call the file 
password otherwise. It would be too dangerous."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I wondered why You's mom would choose this 
poem.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered what was hidden in the 17 syllables 
of this poem.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no answer or end to my questions.`;
   waitForClick; clearText; 
});
goto(lbl_0000125e);
let lbl_00001232;
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And what was the password that should have 
been printed on that paper correctly?`;
   waitForClick; clearText; marker; appendText; 
   Narr`A Japanese phrase of around 10 syllables.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It bothered me to no end, and was totally 
unsatisfying, but for the time being there was 
no way to do anything more.`;
   waitForClick; clearText; 
});
let lbl_0000125e;
hideTextbox();
delay({ interval: 120 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`A while after that, we heard from Takeshi that 
repairs on the warehouse had been completed 
with no problems.`;
   waitForClick; clearText; 
});
hideTextbox();
varop(`(28 0a a4) b3 := (00) 0`);
jump(`S_3D`);
