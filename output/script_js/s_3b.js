setDialogBoxColor(BLUE);
l_b0 = 5;
l_dayA = 3;
l_dayB = 3;
setSceneTitle({ index: 68 });
bgload({ name: `BG25B3`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`6:57`);
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   Kid`"You!"`;
   Kid`"Hey! You!"`;
   `It was strange...I thought that maybe she wasn't on that floor.`;
   `Just then, Sora's voice came to me from the voice converter.`;

});
showTextbox();
text(() => {
   Sora(S3A274)`"Kid, it's me, Sora."`;
   Sora(S3A275)`"I know where You is. She is fine of course."`;
   Kid`"Huh? Where is she?"`;
   Sora(S3A276)`"Zweite stock. In the Security Office."`;
   Kid`"Security Office? Why is she there again?"`;
   Sora(S3A277)`"I don't know. You contacted me about with her whereabouts."`;
   Kid`"I got it. Well, I'll go to the warehouse as well then."`;
   Sora(S3A278)`"No, that will not be necessary."`;
   Kid`"Why not?"`;
   Sora(S3A279)`"Fortunately, to the extent that I have been able to investigate, there was no major damage."`;
   `Sora added that there were enough people to do the required work.`;
   Sora(S3A280)`"It would be better for you to go to You's location."`;
   Kid`"To where You is?"`;
   Sora(S3A281)`"Yes...Something is strange there."`;
   Kid`"Strange?"`;
   Sora(S3A282)`"I can't say for sure...but I sense something."`;
   Sora(S3A283)`"So I think that someone should go investigate."`;
   Kid`"Wouldn't it be better if you went instead of me?"`;
   `If something were strange, I didn't know what I could do.`;
   Sora(S3A284)`"I'm sorry. Unfortunately, now I must go to the Control Room."`;
   Kid`"Control Room? Is something else wrong?"`;
   Sora(S3A285)`"Uh...no...I have to do a little maintenance on LeMMIH..."`;
   Kid`"I see."`;
   Sora(S3A286)`"I'm sorry...but do you think you can manage it for me?"`;
   Kid`"Sure. I don't have anything better to do."`;
   Sora`"..."`;
   Kid`"I'm off to check on You. The Security Office, right?"`;
   Sora(S3A287)`"Yes. Thank you."`;

});
bgload({ name: `BG29A1`, transition: 20 });
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I climbed to the second floor via the emergency stairs.`;

});
bgload({ name: `BG25A3`, transition: 20 });
stopSFX()
clock(`7:6`);
showTextbox();
text(() => {
   `I called to You via the intercom on the side of the Security Office door.`;
   Kid`"You? It's me. Can I come in?"`;
   You(S3A288)`"Huh!? Kid...?"`;
   `After a bit the door opened.`;

});
hideTextbox();
playBGM({ num: 5, volume: 100 });
playSFX({ name: `SE00_01`, a1: 1, volume: 100 });
waitForSFX();
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A289)`"What's up? What are you doing here?"`;
   `You was unable to hide her surprise...`;
   `Sora was right. Strange might have been the word for it.`;
   Kid`"Sora told me to come."`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A290)`"Sora?"`;
   Kid`"Y-yeah. Uh...she...um..."`;
   Kid`"She said...that something was strange and that she wanted me to take a look..."`;
   `I couldn't think of a better way to put it and blurted out the truth.`;
   You`"........."`;
   Kid`"Uh, is this a bad time?"`;
   `You slumped her shoulders as if defeated and heaved out a sigh.`;

});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A291)`"Oh well. I guess that's how it goes..."`;
   You(S3A292)`"If you think about it, Sora has ears everywhere."`;
   Kid`"........."`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A293)`"Well, quit standing there. Come on in."`;
   Kid`"Uh, alright..."`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   You(S3A294)`"You want some coffee?"`;

});
bgload({ name: `BG11A1`, transition: 20 });
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I followed You into the room.`;
   `It smelled like hot coffee.`;
   `In a corner of the room was an ancient siphon coffee machine percolating up dark liquid.`;
   `You offered me a chair and I sat down.`;
   `She turned to the coffee maker to pour coffee.`;
   Kid`"What are you up to in here?"`;
   `I asked You this bluntly as I leaned back in the chair.`;
   You(S3A295)`"I'm looking into something."`;
   Kid`"Looking into something?"`;
   `White steam curled into the air from where she was pouring the coffee.`;
   Kid`"Is this something that you have to hide from everyone?"`;
   `I thought it came out a little too accusatory.`;
   `Maybe I was a little peeved that she was hiding something from us.`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A296)`"Here's your coffee."`;
   `She turned back toward me with a white cup in each hand.`;
   `She handed one to me.`;
   You(S3A297)`"It's hot so be careful."`;
   Kid`"Oh, thanks..."`;
   `A white cup. White steam. Only the liquid inside was black.`;
   `LeMU's logo was printed on the cup. `;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A298)`"Well.... Where should I start...?"`;
   `You sat down next to me and took a sip of her coffee.`;
   `Then she gradually started to talk.`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A299)`"I told you before, right? About why I got this job at LeMU..."`;
   You(S3A300)`"I'm looking for clues about my father, who disappeared."`;
   `I nodded.`;
   You(S3A301)`"He went missing 17 years ago and I came hoping to find a hint as to why."`;
   Kid`"You said that the last place he was seen was in LeMU, right?"`;
   Kid`"Oh. Are you investigating that...?"`;

});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A302)`"Yes..."`;
   `You nodded and shifted the cup to her other hand.`;
   You(S3A303)`"Information about my father."`;
   Kid`"........."`;
   You(S3A304)`"It was 17 years ago..."`;
   You(S3A305)`"They say there was a big accident here."`;

});
showTextbox();
text(() => {
   Kid`"Accident?"`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A306)`"I don't really know that much about it."`;
   You(S3A307)`"Even looking at old news clippings, I wasn't able to gather much information."`;
   Kid`"What do you mean?"`;
   You(S3A308)`"The cause of the accident, specific damage, what happened afterward...all the coverage was vague..."`;
   You(S3A309)`"I figure that the media didn't really know the details about what happened either."`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A310)`"Somebody or something powerful clamped down on information."`;
   Kid`"Hmmm. That's interesting..."`;
   You(S3A311)`"An accident 17 years ago shrouded in mystery."`;
   You(S3A312)`"And my father that disappeared 17 years ago."`;
   You(S3A313)`"He worked here until right before the accident."`;
   You(S3A314)`"I can guess about some of what happened from what we already know..."`;
   Kid`"You think that the accident had something to do with the disappearance of your father...?"`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A315)`"That's right."`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A316)`"I thought that here...that in LeMMIH, there would be some trace...that's why I came."`;

});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A317)`"But since I started working I haven't had any time to look into it..."`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A318)`"I couldn't even get close to LeMMIH's database."`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A319)`"I guess it makes sense. I was pretty naive."`;
   `The chair squeaked as You slumped back in it.`;
   `She just stared at the ceiling.`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A320)`"But...but...you know what? Opportunity knocked."`;
   Kid`"Opportunity..."`;
   Kid`"You...you don't mean this accident?"`;
   You(S3A321)`"Yup."`;
   `You placed the cup next to the console.`;
   You(S3A322)`"Now I have access to LeMMIH."`;
   You(S3A323)`"Thanks to the accident, I have been able to get a step closer to my goal."`;
   Kid`"........."`;

});
fgload({ id: 1, name: `YU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A324)`"Well, I suppose it has also put my life in danger, but..."`;
   `You joked as she shrugged her shoulders. `;
   Kid`"I'll ask you one more time, but did you have to keep it all secret?"`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A325)`"That's a toughie."`;
   You(S3A326)`"I mean, I work here, but I don't have any authority. It's just a part-time gig..."`;
   You(S3A327)`"Taking advantage of this accident to gain access to secret information in LeMU."`;
   You(S3A328)`"Normally you might call this..."`;
   Kid`"A kind of looting maybe?"`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A329)`"That's right. Stealing information. It's a pretty decent crime."`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A330)`"But I suppose there was no way I could have kept it hidden."`;
   You(S3A331)`"Sora knows everything that goes on relating to LeMMIH."`;
   Kid`"I think she would understand your situation if you explained it to her."`;

});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A332)`You growled as she put the cup to her lips.`;
   `"Hmmm...I wonder about that."`;
   `I too took a sip of coffee.`;
   `It was super bitter and super thick.`;
   Kid`"So? Did you find anything out?"`;

});
fgload({ id: 1, name: `YU03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A333)`"That...that's the problem."`;

});
bgload({ name: `EV_YU04A`, transition: 20 });
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Tap, tap, tap...`;
   `Saying that, You started manipulating the keyboard.`;
   `One of the monitors on the wall shifted from footage of an observation camera to an image of a computer desktop.`;
   `It the middle of it one window was open.`;
   `You explained as she stared at the screen.`;
   You(S3A334)`"This is the authorization screen to connect to the network."`;
   Kid`"Authorization screen?"`;
   You(S3A335)`"This is where the system assesses the user for proper authorization."`;
   Kid`"I see..."`;
   `I felt like I kind of got it, but not really...`;
   You(S3A336)`"I'm attempting to connect to LeMMIH's C level...meaning I'm trying to access classified information."`;
   You(S3A337)`"But if anyone could easily access important data, it would be a security disaster, right?"`;
   Kid`"Okay."`;
   You(S3A338)`"That's why there is a screen where the computer asks 'Hey, who's trying to look at this?'"`;
   `As she spoke, You used the mouse to click on the box for 'Name.'`;
   `Inside the box were written the words, 'YUKIE TANAKA.'`;
   You(S3A339)`"Of course there is no way I could access the system using my name, so I'm using someone else's name to get me in."`;
   You(S3A340)`"But anyone might think to try that, right?"`;
   Kid`"I suppose so."`;
   You(S3A341)`"Obviously the people who programmed this aren't stupid. So to prevent false authorization they have methods to check people's identity."`;
   You(S3A342)`"The screen then says, 'If you really are YUKIE TANAKA, please show me your password.'"`;
   `You then used the mouse to circle around the box for 'Password.'`;
   `It was still blank.`;

});
bgload({ name: `BG11A1`, transition: 20 });
showTextbox();
text(() => {
   Kid`"And what about the password?"`;

});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A343)`"I'm working on that right now."`;
   Kid`"What? You don't know it?"`;

});
fgload({ id: 1, name: `YU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A344)`"I don't know it."`;
   Kid`"So you haven't looked up anything yet?"`;
   You(S3A345)`"It's not that I haven't...I haven't been able to. I haven't been able to get in..."`;
   Kid`"So you're stuck..."`;

});
fgload({ id: 1, name: `YU07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A346)`"Yup...stuck."`;
   `You nodded and gave a big sigh.`;
   `....`;

});
bgload({ name: `EV_YU04A`, transition: 20 });
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Tap, tap, tap...`;
   `After a second's pause, You was back tapping on the keyboard.`;
   `There was nothing for me to do. I just sat there watching You do her thing.`;
   `The password blank filled in as she typed.`;

});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Tap, tap, tap...`;
   `"*${wait(10)}*${wait(5)}*${wait(20)}*${wait(4)}*${wait(5)}*${wait(15)}*${wait(3)}*"`;
   `The digits she typed in were blocked out by *, so that anybody watching wouldn't know what the word was.`;

});
playSFX({ name: `SE04_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Tap!`;
   `You tapped the Enter key.`;

});
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Beeeeeeeep!`;
   `'Access denied. Invalid name or password.'`;
   `So You immediately tapped in another line of letters.`;

});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Tap, tap, tap...`;
   `"*${wait(15)}*${wait(5)}*${wait(20)}*${wait(15)}*${wait(5)}*${wait(3)}*${wait(10)}*"`;

});
playSFX({ name: `SE04_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Tap!`;

});
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Beeeeeeeep!`;
   `'Access denied. Invalid name or password.'`;

});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Tap, tap, tap...`;
   Kid`"Hey, You?"`;
   You(S3A347)`"What?"`;
   Kid`"I was just wondering, who is Yukie Tanaka?"`;
   Kid`"Looking at the name, I was wondering is she a relative or something?"`;
   You(S3A348)`"She's my mom."`;
   Kid`"Your mom worked here?"`;
   You(S3A349)`"Works. She is working here. As in the present tense."`;

});
if (l_chose_to_wait_there_in_2nd_day != 0) goto(lbl_0000054d);
showTextbox();
text(() => {
   Kid`"Hey. Your mom researches archaeology, right?"`;
   Kid`"You said something about it yesterday I think."`;
   You(S3A350)`"Yeah. So what?"`;
   `You answered, her eyes still glued to the computer.`;

});
goto(lbl_00000552);
let lbl_0000054d;
showTextbox();
text(() => {
   Kid`"And your mom was a programmer, too, then."`;
   You(S3A351)`"No, she's an archaeologist."`;
   Kid`"Huh?"`;
   You(S3A352)`"What's the problem?"`;
   `You fired the question at me as she continued to do battle with the computer.`;

});
let lbl_00000552;
showTextbox();
text(() => {
   Kid`"But archaeology has nothing to do with theme parks, right?"`;
   You(S3A353)`"My thoughts exactly."`;
   You(S3A354)`"But I figure that LeMU could probably offer her a lot more money than some small university research department with next to no budget."`;
   Kid`"Is LeMU doing some kind of archaeological research?"`;
   You(S3A355)`"Well, at least it is pretending to."`;
   Kid`"?"`;
   You(S3A356)`"It seems like they are doing a survey related to the ruins of the Lemurian continent."`;

});
if (l_chose_to_wait_there_in_2nd_day == 0) goto(lbl_00000571);
showTextbox();
text(() => {
   Kid`"Lemurian continent?"`;
   `That reminded me, Sora had said the LeMU had been named after a continent called Lemuria.`;
   `On Dritte stock there was an attraction called 'The Ruins of Lemuria'... `;
   You(S2B190)`"Lemuria is this phantom continent that was said to have existed between 200 million to 50 million years B.C."`;
   You(S2B191)`"On it thrived an advanced civilization that was more advanced that what we have today. But overnight it just slipped down to the bottom of the ocean."`;
   `You spoke as if she were reading from a textbook.`;
   You(S2B192)`"There are some scholars that contend that this continent was the origin of mankind."`;
   You(S2B193)`"Geez. They should open their eyes. There is no way that could even be possible."`;
   Kid`"You don't believe it?"`;
   You(S2B194)`"Of course not. Archaeologically and geologically the idea has no basis."`;
   You(S2B195)`"The more real research is conducted, the more the theory is shot full of holes...it's no longer a legitimate field of study."`;
   Kid`"You sure know a lot about it."`;
   You(S3A357)`"Well, I AM majoring in archaeology."`;
   Kid`"Oh, you are...?"`;
   `You and archaeology...somehow the two just did not seem to go together in my mind.`;

});
let lbl_00000571;
showTextbox();
text(() => {
   You(S3A358)`"Near the end of the 20th century, some oceanic ruins were discovered near Okinawa, right?"`;
   You(S3A359)`"Leiblich Pharmaceutical spread rumors that these ruins somehow were evidence of the existence of Lemuria."`;
   You(S3A360)`"They have poured loads of cash into the archaeological survey of the seafloor."`;
   You(S3A361)`"I have no idea what the company is up to."`;
   Kid`"Your mom was involved in that project, too?"`;
   You(S3A362)`"Apparently...but I don't know the details."`;
   You(S3A363)`"But I think it is all just an act."`;
   You(S3A364)`"I think she's just taking the money and researching something else."`;
   Kid`"Something else?"`;

});
if (l_chose_to_wait_there_in_2nd_day != 0) goto(lbl_00000590);
showTextbox();
text(() => {
   You(S3A365)`"I told you yesterday, didn't I?"`;

});
let lbl_00000590;
showTextbox();
text(() => {
   You(S3A366)`"The ancient idea of 'the third eye.'"`;
   Kid`"Your mom sounds tricky."`;
   You(S3A367)`"Well, she is."`;
   You(S3A368)`"Still, I think I understand how she feels."`;
   You(S3A369)`"Even if they dug up all the ocean floors of the world, there is still no way they would find the ruins of the Lemurian continent."`;
   You(S3A370)`"Everybody knows that it is a complete waste of time."`;
   You(S3A371)`"Even the higher-ups at Leiblich Pharmaceutical probably know."`;
   You(S3A372)`"But they still have to go about pretending to do research."`;
   Kid`"I wonder why? It sounds like a waste to me."`;
   You(S3A373)`"Who knows? But it's a company were talking about, so I'll bet it has to do with money."`;
   You(S3A374)`"But there is no way for us to know and I don't really care."`;

});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Tap, tap, tap...`;

});
if (l_chose_to_wait_there_in_2nd_day != 0) goto(lbl_000005c9);
showTextbox();
text(() => {
   Kid`"Oh, that's right. I've been meaning to ask you, but..."`;

});
goto(lbl_000005ce);
let lbl_000005c9;
showTextbox();
text(() => {
   Kid`"It's kind of been bugging me..."`;

});
let lbl_000005ce;
showTextbox();
text(() => {
   Kid`"What do you mean that your mom is researching the third eye?"`;
   You(S3A375)`"In a nutshell, it basically means that..."`;
   You(S3A376)`"Any dimension 'n' may only be understood in its entirety when viewed from a dimension at least 'n+1'."`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   Kid`"Huh?"`;
   `It didn't sound very basic to me.`;
   `What did she mean?`;
   You(S3A377)`"Essentially, only by gaining a sense of the 4th dimension can we really fully sense the whole of what is going on around us."`;
   Kid`"???"`;
   `I had no idea what she was talking about.`;
   You(S3A378)`"Like when the third eye has opened up or something."`;

});
bgload({ name: `BG11A1`, transition: 20 });
stopSFX()
showTextbox();
text(() => {
   `You's hands stopped typing there for an instant and she popped her neck loudly.`;
   `She reached out for her cup and took a sip of coffee.`;

});
if (l_chose_to_wait_there_in_2nd_day == 0) goto(lbl_000007a9);
showTextbox();
text(() => {
   Kid`"What's a third eye?"`;

});
hideTextbox();
playBGM({ num: 14, volume: 100 });
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A379)`"The third eye I'm talking about is the mythological one that deals with supernatural powers."`;
   You(S3A380)`"For example..."`;

});
fgload({ id: 1, name: `YU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A381)`"Like the third eye on the forehead of the Hindu god Shiva...like they say in yoga about the Aagya Chakra, or third eye Chakra..."`;
   You(S3A901)`"Or the astral light training by sages..."`;
   You(S3A902)`"...or like in esoteric Buddhism with the famous monk Kobo Daishi's ascetic training and invoking of the Kokuzo deity of space through the Kokuzo gumonjiho..."`;
   You(S3A383)`"Like the All Knowing Eye in Tibetan Tantric Buddhism."`;
   Kid`"Uh...uh..."`;
   `I felt like I was being bombarded with exotic words.`;
   `The conversation had completely left me behind.`;
   You(S2B229)`"Clairvoyance, telescopic vision, ghost sense, the gift of the prophet, the power of seeing the past or future..."`;
   You(S2B230)`"There are a lot of explanations behind it. Some say it is a gift from the gods, others that you can acquire it from intensive training. But what they all have in common is.."`;
   `When the third eye opens, true wisdom is apparent and all becomes visible.`;

});
fgload({ id: 1, name: `YU02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B231)`"They all have something to do with transcending the realm of the human...becoming superhuman somehow."`;
   Kid`"Hmmmm. Wow... I don't get it, but it sounds pretty fantastic."`;

});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A384)`"Please don't say 'I wish I had that!' Please, please don't."`;
   Kid`"Wh-why..."`;
   `I had actually been thinking just that.`;

});
fgload({ id: 1, name: `YU04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A385)`"Forget it. It's unattainable anyway."`;
   You(S3A386)`"No matter how much you want it, I don't want you buying tacky mail order space pendants that promise wisdom or anything else."`;
   Kid`"What are those?"`;
   `More words I didn't know.`;

});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A387)`"If you don't know, you should stay that way."`;
   Kid`"..."`;

});
fgload({ id: 1, name: `YU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A388)`"So the third eye in terms of human anatomical science is simply a function that we have lost with evolution."`;

});
hideTextbox();
showDimOverlay();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `I wondered why we only had two eyes.`;
   `Common knowledge had it that physically two eyes were enough for gauging the distance to a point or focusing on something.`;
   `But what would it be like if we really used to have three eyes?`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Actually...`;
   `The animal ancestors of vertebrates had three eyes.`;
   `Early species of primitive reptiles...`;
   `Like the tuatara lizard that still has a third eye on the top of its head.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `The third eye...`;
   `${noWait}`;
   `The organ has a similar function to the eyeball and lies on the top of the head.`;
   `This organ would be sensitive to the light of the outside world and control internal hormone secretion and balance based on the light.`;
   `An eye on the crest of one's head would stare straight up. It seemed safe to say that it would sense the difference in light between day and night.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `A right eye, a left eye and one above...`;
   `An eye on the top of the head to stare at the sky.`;

});
hideTextbox();
showTextbox();
text(() => {
   `Only we people and higher vertebrates had lost the third eye over a long process of evolution. It had been covered over by the cerebrum and we lost our ability to sense light directly.`;
   `Therefore we had two light sensitive eyeballs, one on each side, instead.`;
   `This lost third eye was called a 'pineal body.'`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `This had functioned in the brain for eons and was responsible for secreting hormones that helped carve out our 24-hour rhythm.`;
   `What we called our internal clocks existed because of this pineal body.`;
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
   Kid`"You mean like an appendix or the webbing between fingers?"`;
   You(S2B247)`"That's exactly what I mean."`;
   Kid`"Still, you've got tons of knowledge...you're like a walking dictionary."`;

});
fgload({ id: 1, name: `YU07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A389)`"It's no big deal."`;
   You(S3A390)`"The information I have is completely useless."`;
   Kid`"I don't think so."`;
   You(S3A391)`"It's true."`;

});
fgload({ id: 1, name: `YU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A392)`"I mean, no matter how much knowledge you have, it can't make you happy, right?"`;
   You(S3A393)`"It just makes you feel so ignorant...scholarship is a pretty empty pursuit."`;
   Kid`"..."`;
   You(S2B253)`"But even so, I still can't give it up."`;
   You(S2B254)`"Maybe it has completely rooted itself into my brain."`;
   Kid`"But you planted it there yourself, right?"`;

});
fgload({ id: 1, name: `YU04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B255)`"No way!"`;
   You(S2B256)`"My mom's the guilty one."`;
   Kid`"Your mom?"`;

});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B259)`"Anyway, when I was little, instead of lullabies, she told me all these third eye stories."`;
   Kid`"Wow..."`;

});
fgload({ id: 1, name: `YU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B260)`"I used to hate archaeology..."`;
   `You sighed as she said this.`;
   You(S2B261)`"But one day I just woke up and found myself in the archaeology department."`;
   Kid`"Like mother, like daughter?"`;

});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S2B262)`"It's not that simple."`;
   `You gave another mighty sigh.`;
   You(S2B263)`"It's like some kind of curse."`;
   Kid`"..."`;
   Kid`"Uh, if we could get back to what we were talking about..."`;

});
goto(lbl_00000815);
let lbl_000007a9;
showTextbox();
text(() => {
   Kid`"I think yesterday you said something about evolution."`;
   Kid`"About losing that organ thingy on the head...the, um..."`;

});
hideTextbox();
playBGM({ num: 1, volume: 100 });
fgload({ id: 1, name: `YU06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A394)`"No, no. Not there."`;

});
fgload({ id: 1, name: `YU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A395)`"It's here and it's called the third eye and it has to do with supernatural powers."`;
   You(S3A396)`"It's like..."`;
   You(S3A381)`"Like the third eye on the forehead of the Hindu god Shiva...like they say in yoga about the Aagya Chakra, or third eye Chakra..."`;
   You(S3A901)`"Or the astral light training by sages..."`;
   You(S3A902)`"...or like in esoteric Buddhism with the famous monk Kobo Daishi's ascetic training and invoking of the Kokuzo deity of space through the Kokuzo gumonjiho..."`;
   You(S3A383)`"Like the All Knowing Eye in Tibetan Tantric Buddhism."`;
   Kid`"Uh...uh..."`;
   `I felt like I was being bombarded with exotic words.`;
   `The conversation had completely left me behind.`;

});
fgload({ id: 1, name: `YU07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A397)`"I think I mentioned it yesterday, but..."`;
   You(S3A398)`"When the third eye opens, true wisdom is apparent and all becomes visible....at least that's what they say."`;
   Kid`"..."`;

});
fgload({ id: 1, name: `YU08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A399)`"That's IF the story is real."`;
   Kid`"Uh, so let's see...that means..."`;

});
let lbl_00000815;
showTextbox();
text(() => {
   Kid`"In summary it goes something like this..."`;
   Kid`"Your mom is researching an ancient concept called the third eye or third perspective..."`;
   Kid`"And once someone has acquired the third eye they can sense the 4th dimension and see the whole of the world."`;
   Kid`"And that is in line with the legend of the third eye."`;

});
fgload({ id: 1, name: `YU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A400)`"Does that about cover it?"`;
   You(S3A401)`"Well, to hear my mom tell it, the third eye and third perspective are the same."`;
   Kid`"I don't quite get it..."`;
   Kid`"Why would a sense of the 4th dimension allow someone to understand the whole world?"`;
   Kid`"Or why is a sense of the 4th dimension necessary? We're seeing the world the way we are right now."`;
   Kid`"I don't get the connection between the third eye or third perspective...and the 4th dimension..."`;
   `There were lots of things I didn't get.`;
   `The whole concept seemed to be beyond my understanding.`;

});
fgload({ id: 1, name: `YU02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A402)`"Alright...break's over."`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
bgload({ name: `EV_YU04A`, transition: 10 });
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Tap, tap, tap...`;
   `You started working again without answering my question.`;
   Kid`"Hey, You."`;
   You(S3A403)`"Sorry, let's make that the end of today's lecture."`;
   You(S3A404)`"The explanation from here is pretty hard."`;
   You(S3A405)`"And it's pretty obvious I'm busy, right?"`;
   You(S3A406)`"If you really wanna know, next time I'll explain it in an easy to swallow way."`;
   `You didn't say anything more.`;
   Kid`"...Okay."`;
   `I decided to give up for the time being.`;
   `I remembered I was still holding the cup.`;
   `I figured not drinking it would be a waste so I drank it down.`;
   `Gulp.`;
   `(Yuck...this is so bitter.)`;
   `And it was completely cold, too.`;

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
   You(S3A407)`"Oh, I give up."`;
   `You muttered this and looked down dejectedly.`;
   `She leaned back in the chair and it squeaked.`;
   `In the end she hadn't found any new clues.`;
   `Actually, she hadn't even gotten past the authorization screen.`;
   `'Access denied. Invalid name or password.'`;
   `That message had been displayed again and again. It still sat in the middle of the screen.`;
   You(S3A408)`"Oh...."`;
   `You was really down.`;
   Kid`"So you couldn't get it? The password."`;
   You(S3A409)`"Nope."`;
   Kid`"Don't you have any ideas?"`;

});
fgload({ id: 1, name: `YU06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A410)`"Like what?"`;
   Kid`"I mean, when somebody sets a password, it is usually a word that has to do with them."`;
   Kid`"A birthday or phone number for something short."`;
   Kid`"Even somebody that wanted to think of something nobody would know would probably come up with a phrase related to their past."`;

});
fgload({ id: 1, name: `YU07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid`"I mean, there is almost nobody that uses a meaningless combination of numbers and letters."`;
   Kid`"If they did, they would probably forget it."`;
   Kid`"And if they forget it, then a password is meaningless..."`;

});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A411)`"I know that. I tried all the things I could think of."`;
   You(S3A412)`"I tried them backwards and as an anagram and all possible patterns I could imagine..."`;

});
fgload({ id: 1, name: `YU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A413)`"But it's no good."`;
   You(S3A414)`"I'm just a normal person when it comes to computers."`;

});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A415)`"I'm no hacker or cracker. I don't have any illegal programs and can't just type one out right now."`;
   `You stuck her hands up in the air, signaling her surrender.`;
   Kid`"I know! Sara could probably do it, right?"`;
   `I remembered that Sara was a top-level hacker.`;
   Kid`"You said that Sara took first prize in some code-breaking contest, right?"`;
   Kid`"I'll bet she'd make a password-breaking program for you."`;

});
fgload({ id: 1, name: `YU07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A416)`"Maybe."`;
   `You didn't seem keen on the idea.`;
   Kid`"Why don't you ask her?"`;
   You(S3A417)`"I could, but I don't want to."`;
   Kid`"???"`;

});
fgload({ id: 1, name: `YU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A418)`"I don't want to involve her in this."`;
   `I thought that maybe she was still concerned about the criminal element of the idea.`;
   Kid`"But you don't mind getting me involved?"`;

});
fgload({ id: 1, name: `YU04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A419)`"Well, you came and involved yourself."`;
   Kid`"I suppose..."`;
   `But at this rate, You probably wouldn't find a clue during her lifetime.`;
   `I wanted to help her out.`;
   `As a way of thanking her for helping me.`;

});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A420)`"There is just one clue..."`;
   `You took a piece of paper from atop the console.`;
   Kid`"What's that?"`;

});
fgload({ id: 1, name: `YU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A421)`"This was inside my mom's machine."`;

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
   `${voice(S3A422)}${noWait}`;
   Append(S3A423)`${nextPage(0)}I sneaked into her research room before coming here.${nextPage(1)}${waitVoice} ${noWait}`;
   `${voice(S3A424)}${nextPage(0)}I was looking for clues about my father of course.${nextPage(1)}${waitVoice} ${noWait}`;
   `${voice(S3A425)}${nextPage(0)}When I went in, I saw that her computer was on.${nextPage(1)}${waitVoice} ${noWait}`;
   `${voice(S3A426)}${nextPage(0)}Looking at it I saw that there was a text file entitled 'Password.'${nextPage(1)}${waitVoice} ${noWait}`;
   `${voice(S3A427)}${nextPage(0)}When I opened it, it was only one line...${nextPage(1)}${waitVoice} ${noWait}`;
   `${nextPage(0)}There was some Japanese sentence typed inside it.${nextPage(1)}`;
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
   Kid`"Then you saw the password!"`;
   You(S3A428)`"Sure. I saw it."`;

});
fgload({ id: 1, name: `YU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A429)`"But I don't remember it."`;
   Kid`"What?"`;

});
fgload({ id: 1, name: `YU07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A430)`"I was in a hurry."`;

});
hideTextbox();
showDimOverlay();
hideTextbox();
NVL_Mode();
delay({ interval: 60 });
showTextbox();
text(() => {
   `${voice(S3A431)}${noWait}`;
   Append(S3A432)`${nextPage(0)}I tried to take a note of it before I was found out.${nextPage(1)}${waitVoice}${noWait}`;
   `${voice(S3A433)}${nextPage(0)}But I didn't see a pen or anything around.${nextPage(1)}${waitVoice} ${noWait}`;
   `${nextPage(0)}And there were no disks or anything that I could copy it to.${nextPage(1)}`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
hideTextbox();
ADV_Mode();
fgload({ id: 1, name: `YU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A434)`"Thinking about it now, I should have sent it to myself by e-mail..."`;

});
hideTextbox();
showDimOverlay();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `${voice(S3A435)}${noWait}`;
   Append(S3A436)`${nextPage(0)}But I was in a rush and didn't think about it then.${nextPage(1)}${waitVoice} ${noWait}`;
   `${voice(S3A437)}${nextPage(0)}Suddenly, I thought that I'd try to print it out...${nextPage(1)}${waitVoice} ${noWait}`;
   `${voice(S3A438)}${nextPage(0)}As soon it stopped printing my mom came back.${nextPage(1)}${waitVoice} ${noWait}`;
   `${nextPage(0)}I snatched the paper that was in the tray and jammed it in my pocket.${nextPage(1)}`;
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
   Kid`"Huh? What do you mean?"`;
   Kid`"So the paper you have now is the one with the password on it?"`;
   `You held out the paper without saying anything.`;
   Kid`"Huh? What's this?"`;

});
bgload({ name: `IT03A`, transition: 20 });
showTextbox();
text(() => {
   Kid`"A barcode?"`;
   You(S3A439)`"It looks like it, but it seems different than normal barcodes."`;
   Kid`"It's got ten lines?"`;
   You(S3A440)`"Yup."`;
   Kid`"What does this have to do with anything?"`;
   You(S3A441)`"Who knows?"`;
   Kid`"About how many characters were in that password?"`;
   Kid`"You said it was in Japanese, right?"`;
   Kid`"About how many characters was it?"`;
   You(S3A442)`"I don't remember very well. Maybe 10 characters give or take."`;
   Kid`"Was it all written in Japanese? Any numbers?"`;
   You(S3A443)`"I'm pretty sure it was just Japanese. I don't remember any numbers or anything else."`;
   Kid`"I wonder which end of this is the top."`;
   You(S3A444)`"You got me."`;
   Kid`"Or could it be written vertically? No way."`;
   Kid`"If you printed out a text file, why would it come out as a barcode?"`;
   You(S3A445)`"Who knows?"`;

});
bgload({ name: `BG11A1`, transition: 20 });
fgload({ id: 1, name: `YU07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid`"No hints?"`;
   You(S3A446)`"Hints?"`;

});
fgload({ id: 1, name: `YU04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A447)`"If I don't know the answer, how can I give you a hint?"`;
   Kid`"But you have to remember something, right?"`;
   Kid`"Like, did it have to do with food, or a person's name..."`;
   `You shook her head and spoke.`;

});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A448)`"I saw it, but only for a second."`;
   Kid`"But how could you forget something so important?"`;

});
fgload({ id: 1, name: `YU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A449)`"Well, at least I know my address."`;
   You(S3A450)`"And phone number. And birthday. And my social security number. And..."`;
   You(S3A451)`"I even know my name."`;
   Kid`"........."`;

});
fgload({ id: 1, name: `YU07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A452)`"Now who is forgetting the important things?"`;

});
bgload({ name: `IT03A`, transition: 20 });
showTextbox();
text(() => {
   `I looked again at the paper we thought contained the password.`;
   `I was obsessed with solving the puzzle we had found.`;
   `It was frustrating.`;
   `'Now who is forgetting the important things?'`;
   `...What could I say to that?`;
   `(It's not like I wanted to lose my memory!)`;
   `(Watch this! I'll remember everything just to show you!)`;
   `But first...I had to figure this out.`;
   `I had my mind set on it.`;
   `I almost felt like solving this was a rite of passage that would help restore my memory.`;
   `............`;
   `..........`;
   `..........`;

});
l_selection_0_available = 1;
l_selection_1_available = 1;
l_selection_2_available = 1;
l_selection_3_available = 1;
l_selection_4_available = 1;
l_selection_5_available = 1;
l_counter = 0;
l_choice_flag1 = 0;
l_choice_flag2 = 0;
goto(lbl_00000c3b);
let lbl_00000bfe;
if (l_choice_flag1 != 0) goto(lbl_00000c36);
if (l_choice_flag2 != 0) goto(lbl_00000c36);
bgload({ name: `IT03A`, transition: 20 });
let lbl_00000c36;
showTextbox();
text(() => {
   `What should I do...?`;

});
let lbl_00000c3b;
choice(
   `I got it`,
   `I don't get it`,
);
switch (l_choice) {
   case 0: goto(lbl_00000c5e);
   case 1: goto(lbl_00000e28);
}
let lbl_00000c5e;
showTextbox();
text(() => {
   `(Could it be...?)`;
   `I thought for a second.`;

});
choice(
   cond(l_selection_0_available != 0)`What if I turn it over...`,
   cond(l_selection_1_available != 0)`What if I turn it upside down...`,
   cond(l_selection_2_available != 0)`What if I heat it with a flame...`,
   cond(l_selection_3_available != 0)`What if I rip it in two...`,
   cond(l_selection_4_available != 0)`What if I tilt it...`,
   cond(l_selection_5_available != 0)`What if I wad it up...`,
);
switch (l_choice) {
   case 0: goto(lbl_00000ca2);
   case 1: goto(lbl_00000cd4);
   case 2: goto(lbl_00000d06);
   case 3: goto(lbl_00000d30);
   case 4: goto(lbl_00000d62);
   case 5: goto(lbl_00000df6);
}
let lbl_00000ca2;
l_counter += 1;
l_selection_0_available = 0;
showTextbox();
text(() => {
   `I thought that if I turned it over I might be able to read something.`;
   `I turned the paper over and held it up to the light.`;

});
bgload({ name: `IT03B`, transition: 20 });
showTextbox();
text(() => {
   Kid`"........."`;
   `It was no good. Turning it over showed nothing new.`;
   You(S3A453)`"So? Did you figure it out?"`;
   Kid`"Yup. I figured out that I can't read it this way."`;
   You(S3A454)`"I told you it's impossible."`;
   You(S3A455)`"I tried all kinds of things."`;
   `(Hmmmm. Let's see.)`;

});
goto(lbl_00000fb4);
let lbl_00000cd4;
l_counter += 1;
l_selection_1_available = 0;
showTextbox();
text(() => {
   `I thought maybe I could read something if I turned the paper upside down.`;
   `I turned it upside down.`;

});
bgload({ name: `IT03C`, transition: 20 });
showTextbox();
text(() => {
   Kid`"........."`;
   `It was no good. Turning the paper upside down showed nothing new.`;
   You(S3A453)`"So? Did you figure it out?"`;
   Kid`"Yup. I figured out that I can't read it this way."`;
   You(S3A454)`"I told you it's impossible."`;
   You(S3A455)`"I tried all kinds of things."`;
   `(Hmmmm. Let's see.)`;

});
goto(lbl_00000fb4);
let lbl_00000d06;
l_counter += 1;
l_selection_2_available = 0;
l_choice_flag1 = 1;
showTextbox();
text(() => {
   `I thought maybe if I heated it with a flame, I could read it.`;
   Kid`"Hey, you don't have a lighter, do you?"`;
   You(S3A456)`"Huh? A lighter?"`;
   You(S3A457)`"Don't tell me you want to calm your nerves with a smoke."`;
   You(S3A458)`"You're too young to smoke!"`;
   Kid`"I know that..."`;
   Kid`"I wanted to use it on the paper..."`;
   You(S3A459)`"You want to burn it? Playing with fire is dangerous!"`;
   You(S3A460)`"Besides, this paper is the only clue I've got. I won't let you burn it."`;
   Kid`"That's not what I mean."`;
   You(S3A461)`"Well, what then?"`;
   Kid`"I thought that if I heated the paper with a flame, something might appear..." `;
   You`"........."`;
   Kid`"........."`;
   You(S3A462)`"You're kidding...right?"`;
   Kid`"Yeah. Ha, ha. I'm just joking..."`;
   `I figured out that I couldn't read it that way.`;
   `(Hmmmm. Let's see.)`;

});
goto(lbl_00000fb4);
let lbl_00000d30;
l_counter += 1;
l_selection_3_available = 0;
showTextbox();
text(() => {
   `I thought that if I folded it in half maybe I could read something.`;
   `I took it and folded it in half.`;

});
bgload({ name: `IT03D`, transition: 20 });
showTextbox();
text(() => {
   Kid`"........."`;
   `It was no good. Folding showed nothing new.`;
   You(S3A453)`"So? Did you figure it out?"`;
   Kid`"Yup. I figured out that I can't read it this way."`;
   You(S3A454)`"I told you it's impossible."`;
   You(S3A455)`"I tried all kinds of things."`;
   `(Hmmmm. Let's see.)`;

});
goto(lbl_00000fb4);
let lbl_00000d62;
showTextbox();
text(() => {
   `I thought that if I tilted it a little I might be able to see something.`;

});
choice(
   `Tilt it a little to the side`,
   `Tilt it almost completely to the side`,
   `Tilt it a little vertically`,
   `Tilt it almost completely vertical`,
);
switch (l_choice) {
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
l_counter += 1;
showTextbox();
text(() => {
   Kid`"........."`;
   `It didn't help. Changing the angle showed nothing new.`;
   You(S3A453)`"So? Did you figure something out?"`;
   Kid`"Yup. I figured out that I can't read it this way."`;
   You(S3A454)`"I told you it's impossible."`;
   You(S3A455)`"I tried all kinds of things."`;
   `(Hmmmm. Let's see.)`;

});
goto(lbl_00000fb4);
let lbl_00000df6;
l_counter += 1;
l_selection_5_available = 0;
showTextbox();
text(() => {
   `I rolled the paper in a ball, but still couldn't read anything.`;
   `I rolled the paper into a stick-like shape.`;

});
bgload({ name: `IT03I`, transition: 20 });
showTextbox();
text(() => {
   Kid`"........."`;
   `It was no good. Rolling it up showed nothing new.`;
   You(S3A453)`"So? Did you figure it out?"`;
   Kid`"Yup. I figured out that I can't read it this way."`;
   You(S3A454)`"I told you it's impossible."`;
   You(S3A455)`"I tried all kinds of things."`;
   `(Hmmmm. Let's see.)`;

});
goto(lbl_00000fb4);
let lbl_00000e28;
l_counter += 1;
l_choice_flag2 = 1;
showTextbox();
text(() => {
   Kid`"..............."`;
   `No. I've got no idea.`;
   You(S3A453)`"So? Did you figure it out?"`;

});
if (l_counter >= 3) goto(lbl_00000fb4);
showTextbox();
text(() => {
   Kid`"No...not yet."`;

});
if (l_counter == 2) goto(lbl_00000e7b);
showTextbox();
text(() => {
   You(S3A454)`"I told you it's impossible."`;
   You(S3A455)`"I tried all kinds of things."`;
   Kid`"But if we just change our way of looking at things, I think we'll figure it out."`;
   `(Huh?)`;
   `(By changing the way we look...we'll figure it out?)`;
   `Something about my words triggered something in my mind.`;

});
goto(lbl_00000e80);
let lbl_00000e7b;
showTextbox();
text(() => {
   You(S3A463)`"Why don't we just give up?"`;
   Kid`"I won't give up."`;
   You(S3A464)`"You're pretty stubborn - for a punk Kid!"`;
   Kid`"Be quiet."`;
   You(S3A465)`"And somebody that can't even understand the difference between two dimensions and three dimensions."`;
   Kid`"Huh?"`;
   You(S3A466)`"See? The characters on the paper are two-dimensional and we are three-dimensional."`;
   You(S3A467)`"Basically, the worlds that we live in are different."`;
   You(S3A468)`"So if you really want to understand what this barcode has to say, then you have to think two-dimensionally."`;
   Kid`"........."`;
   You(S3A469)`"So? Whaddya think?"`;
   `(The stuff on the paper is two-dimensional... And we are three dimensional.)`;
   `I had to think two-dimensionally.`;
   `(What do I have to do to think two-dimensionally...?)`;

});
let lbl_00000e80;
goto(lbl_00000bfe);
let lbl_00000e84;
l_chose_almost_completely_vertical = 1;
if (l_counter >= 2) goto(lbl_00000ed7);
if (l_counter == 1) goto(lbl_00000ec8);
l_you_point += 3;
goto(lbl_00000ee2);
let lbl_00000ec8;
l_you_point += 2;
goto(lbl_00000ee2);
let lbl_00000ed7;
l_you_point += 1;
let lbl_00000ee2;
delay({ interval: 60 });
showTextbox();
text(() => {
   Kid`"I got it! Listen, if you take the paper and set it like this..."`;
   Kid`"What? Let's see..."`;
   Kid`"The empty fall sky...A single cuckoo calls out...Brings a chill to me."`;
   Kid`"What is this?"`;
   You(S3A470)`"What! Let me see that!"`;

});
bgload({ name: `BG11A1`, transition: 20 });
showTextbox();
text(() => {
   `You grabbed the slip of paper from my hand.`;
   `Then she copied me and set the paper sideways in the same way.`;

});
hideTextbox();
playBGM({ num: 18, volume: 100 });
fgload({ id: 1, name: `YU02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A471)`"You...you're right!"`;
   You(S3A472)`"Amazing! Kid, you're amazing!"`;
   `You grabbed my hand and shook it happily.`;
   `...But she didn't stop there... She pulled me close in a big bear hug.`;
   `Squeeze—!!!`;
   `My face was pressed hard against her bust.`;
   `It was a nice fit...a little too nice...I struggled for air.`;
   Kid`"I...give up...give...mercy..."`;
   `I almost felt dangerously excited by the softness of her.`;
   You(S3A473)`"We did it, we did it! Yeah!"`;
   `Finally, You let me go.`;
   `She jumped around gleefully like a rabbit.`;
   `(I was glad she was happy...even if she did almost crush me.)`;
   `Watching You all happy like that seemed to wash away all my irritation and fatigue.`;
   `The stress I was feeling simply faded away.`;
   `It was like the winter frost melting away under the spring sun.`;

});
bgload({ name: `IT03F`, transition: 20 });
showTextbox();
text(() => {
   You(S3A474)`"I get it now. You can't see it from right above it."`;
   You(S3A475)`"But if you look from the side...I see it now."`;
   Kid`"But why do you suppose it came out in a barcode like this?"`;
   You(S3A476)`"The printer is probably in bad shape."`;
   Kid`"Think so? It's hard to believe that would make it print like this."`;
   You(S3A477)`"I don't care about that now."`;
   You(S3A478)`"Anyway, as long as I have the password, things are fine."`;
   `'The empty fall sky/ A single cuckoo calls out/ Brings a chill to me.'`;
   You(S3A479)`"I think this is a variation of the famous haiku 'The empty June sky/ A single cuckoo calls out/ Brings a chill to me,' by Shiki Masaoka."`;
   You(S3A480)`"So if I input it like this..."`;
   You(S3A481)`'The-empty-fall-sky/ A-single-cuckoo-calls-out/Brings-a-chill-to-me.'`;
   Kid`"Wow."`;

});
bgload({ name: `BG11A1`, transition: 20 });
fgload({ id: 1, name: `YU02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A482)`"Alright! Let's try this for a password."`;

});
bgload({ name: `EV_YU04A`, transition: 20 });
showTextbox();
text(() => {
   `A recharged You faced the screen triumphantly.`;
   `But...`;

});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Tap, tap, tap...`;
   You(S3A483)`"The-empty-fall-sky/ A-single-cuckoo-calls-out- Brings-a-chill-to-me. Okay then!"`;

});
playSFX({ name: `SE04_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Tap!`;

});
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Beeeeeeeep!`;
   `'Access denied. Invalid name or password.'`;
   `But she still couldn't get into the C Level information.`;

});
goto(lbl_000010cd);
let lbl_00000fb4;
if (l_counter < 3) goto(lbl_00000bfe);
bgload({ name: `BG11A1`, transition: 20 });
showTextbox();
text(() => {
   Kid`"It's no good. Time to give up!"`;

});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A484)`"See, I told you so."`;
   Kid`"..."`;
   You(S3A485)`"I told you it was impossible to figure out from the start."`;
   Kid`"........."`;

});
fgload({ id: 1, name: `YU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A486)`"Should I try one last time?"`;
   Kid`"There's still a potential password you haven't tried?"`;
   You(S3A487)`"Yup. But I thought it wouldn't work, so I tried everything else I could think of."`;

});
bgload({ name: `EV_YU04A`, transition: 20 });
showTextbox();
text(() => {
   `You stared into the computer monitor.`;

});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Tap, tap, tap...`;
   `....`;

});
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Beeeeeeeep!`;
   `'Access denied. Invalid name or password.'`;
   `Things just didn't seem to want to go our way.`;
   You(S3A488)`"Arrrggghhh! Damn!"`;
   You(S3A489)`"Now that things have come to this..."`;
   You(S3A490)`"Abracadabra..."`;
   Kid`"Huh?"`;

});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Tap, tap, tap...`;
   You(S3A491)`"Open sesame!"`;

});
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Beeeeeeeep!`;

});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Tap, tap, tap...`;
   You(S3A492)`"Magic carpet...!"`;

});
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Beeeeeeeep!`;

});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Tap, tap, tap...`;
   You(S3A493)`"On Dasher and Dancer, and Prancer and Vixen...come on!!"`;

});
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Beeeeeeeep!`;
   `Of course, none of these phrases got her access to the C Level information.`;
   `I didn't see why she had to shout all of them out either.`;
   `I was already at my wit's end and incapable of speech.`;

});
let lbl_000010cd;
stopBGM();
showTextbox();
text(() => {
   `Just then - !`;

});
hideTextbox();
playSFX({ name: `SE03_02`, a1: 0, volume: 90 });
bgload({ name: `BG11A1`, transition: 20 });
fgload({ id: 1, name: `YU06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A494)`"Wh-what in the...?"`;
   `The screen went black.`;
   Kid`"Wh-what just happened?"`;

});
fgload({ id: 1, name: `YU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A495)`"I don't know but it looks like it automatically shut down the authorization screen..."`;
   Kid`"Huh?"`;
   `After a moment, the screen returned to normal.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `You pecked away at the keyboard and called up the authorization screen again.`;

});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Tap, tap, tap...`;

});
playSFX({ name: `SE04_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Tap!`;

});
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Beeeeeeeep!`;
   `'Access denied. Currently this name cannot be logged in.'`;
   You(S3A496)`"What?! What is this?!"`;

});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `She tried it again.`;

});
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Beeeeeeeep!`;
   `The result was the same.`;
   Kid`"What does this mean?"`;

});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A497)`"Maybe I entered the wrong password too many times and it activated some kind of protection."`;

});
showTextbox();
text(() => {
   You(S3A498)`"In other words, LeMMIH has completely denied access to my mom's name."`;
   Kid`"So..."`;

});
fgload({ id: 1, name: `YU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A499)`"So we'll have to give up for the time being, I guess."`;
   `You shrugged exaggeratedly.`;

});
if (l_chose_almost_completely_vertical == 0) goto(lbl_00001232);
showTextbox();
text(() => {
   You(S3A500)`"And you went to so much trouble to read this for me, Kid..."`;
   You(S3A501)`"But from the start there was no guarantee that what is on that paper is the password."`;

});
fgload({ id: 1, name: `YU07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A502)`"It would make more sense if this were some kind of hint that my mom uses to remember the password."`;
   You(S3A503)`"It wouldn't make much sense to call the file password otherwise. It would be too dangerous."`;
   Kid`"........."`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `I wondered why You's mom would choose this poem.`;
   `I wondered what was hidden in the 17 syllables of this poem.`;
   `There was no answer or end to my questions.`;

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
   `And what was the password that should have been printed on that paper correctly?`;
   `A Japanese phrase of around 10 syllables.`;
   `It bothered me to no end, and was totally unsatisfying, but for the time being there was no way to do anything more.`;

});
let lbl_0000125e;
hideTextbox();
delay({ interval: 120 });
showTextbox();
text(() => {
   `A while after that, we heard from Takeshi that repairs on the warehouse had been completed with no problems.`;

});
hideTextbox();
l_choice = 0;
jump(`S_3D`);
