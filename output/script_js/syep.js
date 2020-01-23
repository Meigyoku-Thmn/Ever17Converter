setDialogBoxColor(BLUE);
l_b0 = 0;
l_dayA = 0;
l_dayB = 0;
delay({ interval: 240 });
monoColorOverlay({ interval: 24, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
setSceneTitle({ index: 91 });
showTextbox();
text(() => {
   `Two years later...`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
playSFX({ name: `SE10_26`, a1: 1, volume: 100 });
waitForSFX();
playSFX({ name: `SE09_01L`, a1: 0, volume: 100 });
setKomoreType(0);
showKomoreAnim();
bgload({ name: `EV_YU11A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   You(YEP000)`"Wow, this is great weather"`;
   `You and I were riding on a boat.`;
   `The infinitely deep, blue ocean spread as far 
as we could see.`;
   `A clear blue sky unfolded above us.`;
   `There was a pair of seagulls flying overhead.`;
   `The sea breeze whipped at us little strongly, 
and You used her hand to hold her hair in 
check.`;
   `She had recently started to grow her hair out.`;
   `Somehow it seemed that she might have been 
starting to look like her mom 'her.'`;
   `That and...she seemed to have become a bit 
more easygoing and ladylike...`;
   You(YEP001)`"So how is college going?"`;
   Kid`"It's alright I guess."`;
   `Yes. I had somehow gotten into college and 
was in my first year.`;
   `Of course, I was going to a different school 
than You, so we never had a chance to meet 
on campus.`;
   You(YEP002)`"Why on earth did you decide to major in 
archaeology?"`;
   Kid`"You really want to know?"`;
   You(YEP003)`"That's why I'm asking."`;
   Kid`"You know, it might be better if you didn't 
ask."`;
   You(YEP004)`"Huh?"`;
   Kid`"You still sure you want to know?"`;
   You(YEP005)`"W-well..."`;
   You(YEP006)`"Then I won't ask."`;
   Kid`"Alright. I won't tell."`;
   You(YEP007)`"Huh?"`;
   You(YEP008)`"Why? Tell me!"`;
   Kid`"But...you just said you weren't going to ask."`;
   You(YEP009)`"That's because you said I probably 
shouldn't..."`;
   Kid`"This is too confusing..."`;
   You(YEP010)`"You're the one who made this conversation 
confusing."`;
   You(YEP011)`"Anyway, I guess I'll listen to your 
reasoning."`;
   `There she went changing her mind again.`;
   Kid`"You can really be twisted sometimes."`;
   You(YEP012)`"Come on, say I'm pure at heart!"`;
   Kid`"What are you talking about? If you were, 
then I'd be..."`;
   Kid`"........."`;
   You(YEP013)`"Huh? You would be...what? Then you'd be 'the 
pure-hearted Kid?'"`;
   Kid`"Hey...stop it."`;
   Kid`"I'm not like I used to be..."`;
   `But after that, I was reluctant to speak.`;
   `I wondered if I really was different from the 
person I was at that time.`;
   `...Probably I was.`;
   `Since then, no inexplicable, mysterious 
things had happened to me.`;
   `I couldn't predict things any more.`;
   `I had gotten my memory back.`;
   `...Or maybe, maybe I was the same.`;
   `Maybe I was the same as ever.`;
   `I knew that people learned, got hurt, and lost 
things... and that they change as they 
live life.`;
   `But my basic nature hadn't changed.`;
   `Some things change. Some things never did.`;
   `I was still 'me'...but myself in the past was 
different...`;
   `If I had to explain it, I might say that it 
was like 'me in another world....'`;
   `Maybe that was it.`;
   You(YEP014)`"You're right. You are not like you used 
to be."`;
   Kid`"?"`;
   You(YEP015)`"Well, for one thing you got so tall." `;
   `She stood on her tiptoes and raised her 
hand over my head.`;
   `I had grown a head taller over the two years.`;
   You(YEP016)`"So, are you going to tell me or not?"`;
   Kid`"What?"`;
   You(YEP017)`"About the reason you majored in archaeology."`;
   Kid`"Alright...it's because..."`;
   Kid`"I want to know myself better."`;
   You(YEP018)`"To know yourself?"`;
   Kid`"Yes."`;
   Kid`"To know more about myself at that time..."`;
   Kid`"At that time, I thought that it would be best 
to major in archaeology, the same as you, 
to better understand the weird stuff that 
was happening to me."`;
   You(YEP019)`"You're not going to..."`;
   You(YEP020)`"Study the third eye?"`;
   Kid`"I sure am."`;
   You`"............"`;
   Kid`"I told you..."`;
   Kid`"It was probably better that you don't ask."`;
   You(YEP021)`"You haven't changed...a bit, I mean..."`;
   You(YEP022)`"Nope...you haven't changed at all."`;
   Kid`"...You, neither."`;
   Kid`"That reminds me. Your clothes are..."`;
   You(YEP023)`"Huh?"`;
   Kid`"The same ones you wore then, right?"`;
   You(YEP024)`"Yeah...right."`;
   `There was a thin black stain on hem of her 
jacket that had remained.`;
   `It was a memorable stain.`;
   `Our memory....`;
   `I started to think as I gazed at the ocean.`;
   `I thought about the time when I met You.`;
   `About those unforgettable seven days...`;
   `But I should talk about the things that 
happened after that.`;
   `After that...`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: WHITE });
closeKomoreAnim();
stopSFX()
bgload({ name: `BG38A2`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
delay({ interval: 60 });
bgload({ name: `BG39A2`, transition: 10 });
showTextbox();
text(() => {
   `For some time, we just stood there enjoying 
the sunshine on the floating island.`;
   `The sun looked extremely bright after a week 
without it. Its rays were warm.`;
   `At that moment...`;
   `Someone patted me on the shoulder.`;
   `I turned back and...`;
   `There was...`;

});
fgload({ id: 1, name: `SO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(YEP025)`"Good morning."`;

});
playBGM({ num: 8, volume: 100 });
showTextbox();
text(() => {
   Kid`"...So-So-So-Sora!?"`;
   Sora(YEP026)`"I promised you that I would see you again 
soon, didn't I?"`;
   Kid`"Bu-but...why are you here?"`;

});
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(YEP027)`"Am I bothering you?"`;
   You(YEP028)`"No, not all! I'm glad to see you again."`;

});
fgload({ id: 1, name: `SO08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Hearing that, Sora smiled gently.`;
   `I exchanged a handshake with Sora when 
I met her again.`;

});
bgload({ name: `IMG05A`, transition: 20 });
showTextbox();
text(() => {
   `I looked up at the sky above.`;
   `The clear blue sky seemed to spread on forever.`;
   Sora(YEP029)`"Dr. Tanaka is waiting for you."`;
   Sora(YEP030)`"Please come over here..."`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: WHITE });
stopBGM();
bgload({ name: `EV_YU14A`, transition: 26 });
setKomoreType(1);
showKomoreAnim();
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   Kid`"Oh, you are..."`;
   `The person called Dr. Tanaka that appeared in 
front of us was the woman I'd seen on the 
monitor...`;
   `It was the person who had claimed to be 
You's mother.`;
   You(YEP031)`"M...mother..."`;
   //Dr. Tanaka
   Dr_Tanaka(YEP032)`"You...I'm so happy you're alive..."`;
   You(YEP033)`"Why are you...?"`;
   //Dr. Tanaka
   Dr_Tanaka(YEP034)`"I promised that I would tell you everything 
when you got to the floating island, right?"`;
   You`"..............."`;
   //Dr. Tanaka
   Dr_Tanaka(YEP035)`"It's been a long time..."`;
   Kid`"What?"`;
   `I wondered if she were talking to me.`;
   `It seemed like it was the first time that 
I'd met her...`;
   `Or had I met her in the past...?`;
   //Dr. Tanaka
   Dr_Tanaka(YEP036)`"What's wrong? Is there something that 
you would like to ask?"`;
   Kid`"Y-yes! I have tons of things I want to ask."`;
   //Dr. Tanaka
   Dr_Tanaka(YEP037)`"Fine. Don't worry, I'll tell you everything."`;
   Kid`"All right, then.... F-first I want to..."`;
   You(YEP038)`"Hold on!"`;
   You(YEP039)`"Wait just a minute..."`;
   Kid`"...You?"`;
   You(YEP040)`"First, there is something I have to ask."`;
   You(YEP041)`"Is that alright?"`;
   //Dr. Tanaka
   Dr_Tanaka(YEP042)`"Go ahead."`;
   You`"........."`;
   You(YEP043)`"You said...that you're not my real mother."`;
   You(YEP044)`"You also said that I was your child."`;
   //Dr. Tanaka
   Dr_Tanaka`"........."`;
   You(YEP045)`"There is only one thing I want to ask."`;
   You(YEP046)`"Are you...my real 'mother'?"`;

});
bgload({ name: `EV_YU14B`, transition: 20 });
showTextbox();
text(() => {
   //Dr. Tanaka
   Dr_Tanaka`"..............."`;
   `Dr. Tanaka looked down.`;
   `She twisted her lips sadly.`;
   You(YEP047)`"Which is it?"`;
   `I wonder why You would ask such a thing.`;
   `She should've already known the answer...`;
   //Dr. Tanaka
   Dr_Tanaka(YEP048)`"...I am You..."`;
   You(YEP049)`"...What?"`;

});
bgload({ name: `EV_YU14A`, transition: 20 });
showTextbox();
text(() => {
   //Dr. Tanaka
   Dr_Tanaka(YEP050)`"I can say this for certain now..."`;
   //Dr. Tanaka
   Dr_Tanaka(YEP051)`"I am...your..."`;
   //Dr. Tanaka
   Dr_Tanaka(YEP052)`"''Mother'.... You..."`;
   `She stared You in the eye as she said this. `;
   You(YEP053)`"...Mother..."`;
   `".................."`;

});
hideTextbox();
showDimOverlay();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `After a while, we asked Dr. Tanaka question 
after question.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `...How did we get trapped?`;
   `...Was it an accident or not?`;
   `...Why could I predict things?`;
   `...Why did I lose my memory?`;
   `...What had happened in my past?`;
   `...Did the girl I'd seen really exist? 
Who was she?`;
   `...What had happened in You's past?`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `...Did You's father and mother really die?`;
   `...If so, then who was she, 
this...'Dr. Tanaka?'`;
   `...What was the meaning of the Haiku 
poem password?`;
   `...What was Blick Winkel?`;
   `...What was the connection between the 
TB virus and the accident?`;
   `And...`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `What was 'the third eye?'`;
   `...............`;
   `.........`;
   `......`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `



${noWait}`;
   `           It was a long, long story.`;
   fadeClearPage();
});
hideTextbox();
monoColorOverlay({ interval: 24, color: WHITE });
closeKomoreAnim();
dimOff_ac = 0;
closeDimOverlay();
stopBGM();
delay({ interval: 120 });
playSFX({ name: `SE09_01L`, a1: 0, volume: 100 });
bgload({ name: `EV_YU11A`, transition: 26 });
setKomoreType(0);
showKomoreAnim();
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   You(YEP054)`"You're thinking about the things that 
happened then, aren't you?"`;
   Kid`"Huh? Yeah..."`;
   Kid`"Hey, You?"`;
   Kid`"Do you know the proverb 'Water flows and 
people live'?"`;
   You(YEP055)`"?"`;
   Kid`"Water flows from high to lower places..."`;
   Kid`"But the flow, its path has an infinite 
number of possibilities."`;
   Kid`"People live...means that like the water, 
there are infinite ways for life to flow."`;
   Kid`"That's what it means."`;
   You(YEP056)`"Hmmmm."`;
   Kid`"If life has infinite possibilities, there 
might be another me somewhere who has a 
different history from me in the present."`;
   You(YEP057)`"Somewhere?"`;
   Kid`"Yeah, say, beyond this broad sky..."`;
   Kid`"Beyond this limitless universe..."`;
   Kid`"There should be another universe..."`;
   Kid`"Another me in another universe..."`;
   You`"........."`;
   Kid`"I was thinking about that other me."`;
   You(YEP058)`"Another universe, huh?"`;
   You(YEP059)`"Hey, if there is another universe like 
you say..."`;
   You(YEP060)`"Is there another pair of us in the that other 
world dating like us now?"`;
   Kid`"Sure there is."`;
   You(YEP061)`"How can you tell?"`;
   Kid`"I can tell because I can."`;
   You(YEP062)`"???"`;
   Kid`"You see, if I do this..."`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: WHITE });
closeKomoreAnim();
bgload({ name: `EV_YU12A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   `I drew You close and kissed her. `;
   `We were surrounded by the spring sun, clouds 
floating in the sky, the rippling ocean and 
the song of seagulls.`;
   `I felt everything about You through her skin.`;
   `Her warmth, her scent, her touch, heartbeat 
and even the color of her heart.`;
   `I could see through You completely then.`;
   `It was exactly...the third eye.`;
   `Ultimate wisdom.`;
   `Yes, if I do this...`;

});
bgload({ name: `EV_YU12B`, transition: 20 });
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `



${noWait}`;
   `         Then we could transcend time.${wait(90)}${noWait}`;

});
delay({ interval: 120 });
monoColorOverlay({ interval: 36, color: BLACK });
showTextbox();
text(() => {
   Append`${noWait}`;
   fadeClearPage();
});
hideTextbox();
stopSFX()
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
g_you_gd_cleared = 1;
unlockCG($`POST08`);
unlockCG($`POST13`);
l__you_ep__cleared = 1;
if (g_sara_gd_cleared == 0) goto(lbl_00000381);
unlockCG($`POST02`);
let lbl_00000381;
l_choice = 1;
jump(`Y_ED`);
