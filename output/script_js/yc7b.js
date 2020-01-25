hideTextbox();
playBGM({ num: 11, volume: 100 });
bgload({ name: `EV_CO08A`, transition: 20 });
showTextbox();
text(() => {
   `Kicking up his feet, Takeshi screamed to the void. `;
   Takeshi(C7A261)`"Hey, what am I supposed to do...? "`;
   Kid(C7A262)`"Can't you escape by swimming through the pool?"`;
   `Hokuto answered.`;
   Takeshi(C7A263)`"Idiot!"`;
   Takeshi(C7A264)`"It's 357 feet under the water down here!"`;
   Takeshi(C7A265)`"Coco and I won't be able to hold our breath that long."`;
   Takeshi(C7A266)`"Besides, in order to surface, we have to decompress slowly as we go up."`;
   Takeshi(C7A267)`"It's 12.5 atmospheres down here."`;
   Takeshi(C7A268)`"And the ocean surface is 1 atmosphere."`;
   Takeshi(C7A269)`"There's no way we can survive, unless we get ourselves decompressed."`;
   Kid(C7A270)`"How about the elevator?"`;
   Takeshi(C7A271)`"It's been cut off."`;
   Takeshi(C7A272)`"The elevator tubes were destroyed a long time ago."`;
   Takeshi(C7A273)`"There's no way to go up."`;
   Kid(C7A274)`"Well, let's go to the examination room!"`;
   Takeshi(C7A275)`"I know that..."`;

});
hideTextbox();
playSFX({ name: `SE01_04`, a1: 0, volume: 100 });
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `BG34A1`, transition: 26 });
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `Takeshi ran into the examination room.`;
   `He hit the control panel and closed the door.`;
   `Strangely, there was no sign of flooding inside IBF.`;
   `There was no sound of running water and the tremors had stopped for the time being. `;
   `But there was still no time to relax.`;
   `Coco's body was fast reaching its limit.`;
   `Takeshi laid Coco down on the bed.`;
   `He ran towards the side of the desk at the corner of the room.`;
   `He opened the one of the storage bins, and grabbed something. `;
   `Something...it was the 'antibodies for Tief Blau' taken from Tsugumi.`;
   `Coco hadn't been inoculated with it yet.`;
   Takeshi`"........."`;
   `Without a word, Takeshi gave Coco the antibodies.`;
   `Coco, had long passed the stage of suffering and lay there looking limp.`;
   Takeshi(C7A276)`"Come on...do the trick...."`;
   `Takeshi threw the empty syringe away and held on to Coco's hand as she lay there.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
showTextbox();
text(() => {
   `.................`;
   `...........`;
   `......`;

});
hideTextbox();
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   `A while had passed, but Coco's condition didn't seem to be improving.`;
   `As a matter of fact, it seemed to be getting worse.`;

});
fgload({ id: 1, name: `TA04AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C7A277)`"Oh, come on! How come it isn't working!"`;
   `Takeshi banged the wall.`;
   Kid(C7A278)`"Coco was infected a few days earlier than you, dad."`;
   Kid(C7A279)`"So her disease has been progressing for that much longer than everyone else...."`;
   Takeshi(C7A280)`"Damn it, we can't just sit here and wait...."`;
   Takeshi(C7A281)`"Besides, we've got to find a way to escape."`;
   Takeshi(C7A282)`"I just need to think of something...."`;

});
playSFX({ name: `SE06_01`, a1: 0, volume: 100 });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Takeshi paced around the room with his head down.`;
   `Occasionally, heavy noises echoed from the ceiling.`;
   `Takeshi listened to the noises.`;
   `And then....`;
   `Takeshi, looking as if he had just realized something, whispered to himself.`;

});
fgload({ id: 1, name: `TA01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C7A284)`"I heard an announcement earlier, before Tsugumi and I escaped."`;
   Takeshi(C7A285)`"The announcement said something like 'if you are not out in a few minutes, you're gonna be crushed.'"`;
   Takeshi(C7A286)`"But this place is still standing. Why is that?"`;
   Kid(C7A287)`"I don't know why either...."`;
   Kid(C7A288)`"But...maybe...."`;
   Takeshi(C7A289)`"Maybe...what?"`;
   Kid(C7A290)`"That announcement might have been about LeMU imploding."`;
   Kid(C7A291)`"But, think about it..."`;
   Kid(C7A292)`"This laboratory has been built so that the atmosphere on the inside and outside are equal."`;
   Kid(C7A293)`"Since they're still balanced, it probably won't implode as easily...."`;
   `That must have been it.`;
   `If you leave the cap on an empty plastic bottle, even if you come back years later, the air will still be trapped inside.`;
   `Which meant that the laboratory should be safe...`;
   `Unless extreme force was added from somewhere.... `;
   `...such as a giant piece of partition from LeMU falling on it....`;
   `Although he didn't seem to be fully convinced. `;
   `Takeshi nodded upon hearing Hokuto's explanation.`;
   `By accepting the explanation, he was probably trying to clear one of the many problems facing him at the moment.`;

});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
delay({ interval: 60 });
playBGM({ num: 24, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `As time progressed Coco's condition got worse and worse. `;

});
fgload({ id: 1, name: `TA04AWM`, x: 320, useAnim: true });
playSFX({ name: `SE05_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   Takeshi(C7A294)`"Damn it! Why is this all happening? Why!? Why!? Why!?"`;
   `Takeshi kicked the wall.`;
   Kid(C7A295)`"Well, dad...you should have given her the antibody earlier...."`;
   Takeshi(C7A296)`"Huh? It's a little late for that now, isn't it!"`;
   Takeshi(C7A297)`"Besides, Coco was in the pod under pressure at that time!"`;
   Takeshi(C7A298)`"I couldn't just open up the lid!"`;
   Kid(C7A299)`"But...you could've given her a shot without opening the lid."`;
   Kid(C7A300)`"Because You said...."`;

});
monoColorOverlay({ interval: 6, color: WHITE });
showTextbox();
text(() => {
   You(T6B219)`"It seems that this pod can also do laser disinfecting as well as simple surgery, in addition to the oxygen treatment."`;
   You(T6B220)`"And depending on how you use it, even cryogenic suspension..."`;

});
bgload({ name: `BG34A1`, transition: 20 });
fgload({ id: 1, name: `TA01AWM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   Kid(C7A301)`"Since it has so many other functions, it probably should be able to give an injection...."`;
   Takeshi(C7A302)`"But You didn't say a word about 'being able to give shots without opening the lid', did she?"`;
   Takeshi(C7A303)`"And if she didn't mention it, it must not be possible...."`;
   Takeshi(C7A304)`"Besides, neither you nor I have any idea what this device can do."`;
   Takeshi(C7A305)`"What's cryogenic suspension anyway?"`;
   Kid(C7A306)`"It's like hibernation."`;
   `Hokuto answered as if anyone would know.`;
   Takeshi(C7A307)`"Hibernation?"`;
   Takeshi(C7A308)`"You mean...like bears do in the winter?"`;
   Kid(C7A309)`"Yeah."`;
   Kid(C7A310)`"I'm pretty sure that cryogenic suspension means you can artificially induce hibernation."`;
   Kid(C7A311)`"It keeps human body temperature low, around 40 degrees Fahrenheit, and reduces your heartbeat and breathing to the absolute minimum...."`;
   Kid(C7A312)`"That way it increases your metabolic efficiency and conserves as much energy as possible."`;
   Takeshi(C7A313)`"I see...."`;
   Takeshi(C7A314)`"Hey I wonder why they have it here...."`;

});
stopBGM();
showTextbox();
text(() => {
   `In the middle of saying this Takeshi stopped suddenly.`;
   `At the same time, Hokuto's thoughts stopped, too. `;
   `And then, they screamed out at the same time.`;
   Takeshi(C7A315)`"I got it! We'll put her in cryogenic suspension!"`;
   Kid(C7A316)`"I got it! We can put her in cryogenic suspension!"`;

});
fgload({ id: 1, name: `TA02AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C7A317)`"If it her body temperature is kept low, it'll slow down the rate of the virus infection too, right?"`;
   Kid(C7A318)`"Yeah!"`;
   Takeshi(C7A319)`"Alright! All we need now is a little more time. If we have time, I'm sure it'll work... "`;
   Kid(C7A320)`"If we can slow down that virus even for a minute, or a second...it'll be better than nothing."`;
   Takeshi(C7A321)`"Alright, then..."`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
showTextbox();
text(() => {
   `Takeshi carried the frail Coco and set her into the pod.`;
   `Then he started flipping through the manual at full-speed, skimming it.`;
   `It didn't seem too difficult to set up.`;
   `Takeshi, unlike his usual self, manipulated the computer terminal swiftly and smoothly.`;
   `Then....`;
   `All that was left was to turn on the switch.`;

});
hideTextbox();
bgload({ name: `EV_CO10A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `Coco was asleep in the pod.`;
   `Takeshi reached out his hand to the switch that would close the lid.`;
   `A split second before he flipped the switch...Coco quietly opened her eyes. `;

});
bgload({ name: `EV_CO10C`, transition: 20 });
showTextbox();
text(() => {
   Coco(C7A322)`"Who is that...?"`;
   Takeshi(C7A323)`"What?"`;
   Coco(C7A324)`"Who's standing behind you, Takepyon...?"`;
   Takeshi(C7A325)`"Behind me?"`;
   `Takeshi looked back.`;
   `Hokuto was there.`;
   Takeshi(C7A326)`"Can you see him, Coco?"`;
   Coco(C7A327)`"Yeah, I do...."`;
   Kid(C7A328)`"Coco...it's me, Hokuto."`;
   Coco(C7A329)`"Hokuto...."`;
   Coco(C7A330)`"Hokuto is your name...?"`;
   Coco(C7A331)`"Can I call you Hokutan...?"`;
   `The Coco of this time didn't seem to know Hokuto yet.`;
   `So who was the phantom girl that I had been seeing...?`;
   Takeshi(C7A332)`"Hokuto...."`;
   Takeshi(C7A333)`"Is that your name?"`;
   Kid(C7A334)`"Uh-huh."`;
   Takeshi(C7A335)`"Really."`;
   Takeshi(C7A336)`"Coco?"`;
   Takeshi(C7A337)`"I can't see him, but this guy Hokuto helped us, you know."`;
   Coco(C7A338)`"Hokutan...."`;
   Coco(C7A339)`"Thank you...."`;
   Coco(C7A340)`"And...."`;
   Coco(C7A341)`"And...the other person...you...."`;
   Coco(C7A342)`"Thank...you...."`;
   Takeshi(C7A343)`"Other person? There's someone else?"`;
   Coco(C7A344)`"Yeah, there is...."`;
   Coco(C7A345)`"I can see him...behind Hokutan.... "`;
   Takeshi`"........."`;
   Kid`"........."`;
   `Silence filled the room.`;
   `The room temperature felt suddenly lower, for some reason.`;
   `Coco....`;
   `Coco was...looking at me. `;
   `Just me....`;
   `Into my eyes....`;

});
playBGM({ num: 19, volume: 100 });
showTextbox();
text(() => {
   BW`"Are you talking about me?"`;
   `Feeling flustered, I gathered up my courage and spoke up.`;
   Coco(C7A346)`"Yes, you."`;
   Coco(C7A347)`"We finally meet....?"`;
   BW`"...Huh?"`;
   Coco(C7A348)`"I don't know Hokutan, but...."`;
   Coco(C7A349)`"But I sure know you...."`;
   Coco(C7A350)`"Because...."`;
   Coco(C7A351)`"Because...all this time...you've been watching over me, haven't you?"`;
   BW`"........."`;
   Coco(C7A352)`"Mister 4th dimension...."`;
   Coco(C7A353)`"Blick Winkel...."`;
   BW`"........."`;
   Coco(C7A354)`"Let's play chicks some time again."`;
   Coco(C7A355)`"We go piyo-piyo...piyo-piyo...."`;
   Takeshi(C7A356)`"Coco...I was the one...."`;
   Coco(C7A357)`"Hee."`;
   `Coco's cheeks eased up a little. `;
   Coco(C7A358)`"I don't think you knew it, Takepyon, but...."`;
   Coco(C7A359)`"I didn't just play with you, I also was playing with him."`;
   Coco(C7A360)`"Huh? Isn't that right?"`;
   `Coco was asking me.`;
   BW`"Uh-huh...."`;
   BW`"I might have been watching over Coco for all this time."`;
   BW`"I've been watching over you...."`;
   BW`"I wanted to get closer to you, too."`;
   BW`"But it was probably...not possible...."`;
   Coco(C7A361)`"Hee, hee...."`;
   Coco(C7A362)`"So... you're the one who told me that you liked me then?"`;
   BW`"Yes, I suppose it was...."`;
   BW`"...I suppose it was...."`;
   `Coco and I looked at each other.`;
   `We were staring at each other....`;
   `Our eyes filled with passion...`;
   `I felt as though my existence would evaporate any second.`;
   Coco(C7A363)`"What's going to happen to me?"`;
   `All of a sudden, a dark shadow had covered Coco's eyes.`;
   Coco(C7A364)`"Am I...going to die? "`;
   BW`"Don't be silly! There's no way you are going to die!"`;
   BW`"No matter what, I'll save your life, Coco!"`;
   BW`"I won't let you die!"`;
   `Excitedly I appealed to her.`;
   `Although she looked to be in some pain....`;
   `Coco smiled at me happily....`;
   `My heart seemed that it would surely melt....`;
   Takeshi(C7A365)`"Coco...so that's how it is, okay....?"`;
   Takeshi(C7A366)`"We're going to save you no matter what."`;
   Takeshi(C7A367)`"So just relax. I want you to rest now...."`;
   `As he was saying this, Takeshi went to close the pod.`;
   Coco(C7A368)`"Wait!"`;
   Coco(C7A369)`"What's going to happen?"`;
   Takeshi(C7A370)`"You are going to sleep for a while, just like a cuddly bear."`;
   Coco(C7A371)`"No...."`;
   Coco(C7A372)`"Please...don't leave me...."`;
   Coco(C7A373)`"Don't go anywhere...."`;
   Coco(C7A374)`"Don't leave me alone...."`;
   Takeshi(C7A375)`"We're not going to leave you alone, will we?"`;
   Takeshi(C7A376)`"We're going to stay right here."`;
   Coco(C7A377)`"You're lying...."`;
   Coco(C7A378)`"I don't believe you...."`;
   Takeshi(C7A379)`"Quit being so stubborn!"`;
   Takeshi(C7A380)`"If we leave you like this you're going to...you're going to.... "`;
   Coco(C7A381)`"No...no...no...."`;
   Coco(C7A382)`"I don't want to...."`;
   Coco(C7A383)`"I don't want to be all by myself. I'll be too lonely."`;
   Coco(C7A384)`"I'm scared...I'm...so, so scared...."`;
   Takeshi`"........."`;
   BW`"........."`;
   Coco(C7A385)`"Takepyon, will you...."`;
   Coco(C7A386)`"Lie down...and...sleep next to me?"`;
   Takeshi(C7A387)`"There's no way...."`;
   Takeshi(C7A388)`"This pod is...."`;
   `Takeshi stopped in the middle of what he was saying.`;
   `He looked up at the ceiling, then to the monitor on the wall, and finally to the pod next to Coco.`;
   Takeshi(C7A389)`"Alright, how about this then?"`;
   Coco`"........."`;
   Takeshi(C7A390)`"I'll sleep in the pod next to you."`;
   Takeshi(C7A391)`"How's that? You won't be lonely anymore, right?"`;
   `Coco looked back and forth between Takeshi and me. `;
   `She had a worried look on her face....`;
   `And stared at us with eyes that seemed about to burst into tears.`;
   Coco(C7A392)`"Really...?"`;
   Coco(C7A393)`"You aren't lying...?"`;
   Takeshi(C7A394)`"Of course not."`;
   Coco(C7A395)`"You promise....?"`;
   Coco(C7A396)`"You won't leave me and go?"`;
   Takeshi(C7A397)`"I wouldn't do that, of course I won't go."`;
   Coco(C7A398)`"Alright then...."`;
   Coco(C7A399)`"I trust you, Takepyon."`;
   Takeshi(C7A400)`"That's a good girl."`;
   `Takeshi petted Coco's head.`;
   Takeshi(C7A401)`"Okay, I'm going to close it now, okay Coco?"`;
   Coco(C7A402)`"Uh, uh-huh...."`;
   `Takeshi turned on the switch.`;
   `The lid of the pod slowly went down.`;
   Coco(C7A403)`"Hey?"`;
   Coco(C7A404)`"Before I go to sleep, will you listen to my request?"`;
   Takeshi(C7A405)`"Request?"`;
   Coco(C7A406)`"I wasn't talking to you, Takepyon...."`;
   `Coco's eyes were pointing towards me. `;
   BW`"M-me?"`;
   Coco(C7A407)`"Yes."`;
   Coco(C7A408)`"Well, um...I...."`;
   Coco(C7A409)`"I want to see you."`;
   BW`"...What?"`;
   Coco(C7A410)`"I want to see you again."`;
   Coco(C7A411)`"I want to see you and talk with you more. "`;
   BW`"Uh-huh,"`;
   Coco(C7A412)`"I think that I...."`;
   Coco(C7A413)`"I might just...."`;
   Coco(C7A414)`"It's just that I...."`;
   BW`"........."`;
   Coco(C7A415)`"Oh...."`;
   Coco(C7A416)`"I can't say it...."`;
   BW`"........."`;
   Coco(C7A417)`"But will you promise me?"`;
   Coco(C7A418)`"That...you and I will...see each other again someday?"`;
   BW`"Yes"`;
   Coco(C7A419)`"I'll be...waiting...."`;
   Coco(C7A420)`"I'll wait for you no matter what...."`;
   Coco(C7A421)`"You'll...come...get me...?"`;
   Coco(C7A422)`"Promise?"`;
   BW`"Yes, I promise."`;
   `The space between the lid and the pod itself was almost gone.`;
   `I could barely see Coco through the narrow slit....`;
   `Coco faced towards me and whispered one last thing in her tiny voice. `;
   Coco(C7A423)`"Well, good night...."`;
   Coco(C7A424)`"Brother...."`;

});
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
removeBG({ mode: WHITE, transition: 2 });
showTextbox();
text(() => {
   `'Brother!?' Before I could say anything in reply, the lid had closed.`;
   `The sound of compressing air filled the room....`;
   `The low whir of the motor....`;
   `With a light metallic ring, the pod shut completely.`;
   `Takeshi pushed another switch attached to the pod's chassis.`;
   `The cryogenic suspension function was activated.`;
   `There were small sounds, as though gas were leaking out.`;
   `The pod slowly cooled down, humming with a slight vibration.`;

});
bgload({ name: `BG34A1`, transition: 20 });
fgload({ id: 1, name: `TA01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C7A425)`"Well then...."`;
   Takeshi(C7A426)`"Hey! Something Winkel! You still there?"`;
   Kid(C7A427)`"What is it, Dad?"`;
   Takeshi(C7A428)`"Oh, it's you, Hokuto...."`;

});
fgload({ id: 1, name: `TA03AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C7A429)`"You guys are confusing me...."`;
   Takeshi(C7A430)`"You and that Winkel guy are two different people, right?"`;
   Takeshi(C7A431)`"Or you are from the 4th dimension, too, Hokuto?"`;
   Kid(C7A432)`"No, I'm just borrowing his perspective for now."`;

});
fgload({ id: 1, name: `TA01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C7A433)`"Really...."`;
   Takeshi(C7A434)`"I mean, I still don't get it at all...but I don't suppose it matters."`;
   `Saying this Takeshi sank his body into an empty pod.`;
   `The pod next to Coco's.`;

});
bgload({ name: `EV_ET03B`, transition: 20 });
showTextbox();
text(() => {
   Kid(C7A435)`"What!? Dad, what're you going to do!?"`;
   Takeshi(C7A436)`"What do you think...there's nothing else can I do, right?"`;
   Takeshi(C7A437)`"I made her a promise, you know...."`;
   Kid(C7A438)`"So you're going to...!?"`;
   Takeshi(C7A439)`"Yep, that's right."`;
   Takeshi(C7A440)`"It doesn't look like there's a way to escape, anyway."`;
   Takeshi(C7A441)`"We'll just have to wait for the second rescue team to arrive...."`;
   Takeshi(C7A442)`"But it'll just be a waste of energy to wait here doing nothing, so...."`;
   Takeshi(C7A443)`"I might as well get some sleep."`;
   Kid(C7A444)`"D-dad! Wait a second!"`;
   Takeshi(C7A445)`"No."`;
   Takeshi(C7A446)`"I'm tired."`;
   Takeshi(C7A447)`"I'm really, REALLY tired...."`;
   `Takeshi stretched his arm from where he lay, and flicked the switch for both closing the lid and starting the cryogenic suspension at the same time.`;
   `The lid started to close....`;
   `Quietly....`;
   `Steadily....`;
   Takeshi(C7A448)`"Alright, Hokuto...."`;
   Takeshi(C7A449)`"I'm counting on you...."`;
   Kid(C7A450)`"Dad!"`;
   Takeshi(C7A451)`"Oh, hey, one more thing."`;
   Kid(C7A452)`"???"`;
   Takeshi(C7A453)`"Quit calling me 'dad,' will you?"`;
   Kid(C7A454)`"Well...I can't help it...."`;
   Kid(C7A455)`"I'm your son...."`;
   Takeshi(C7A456)`"No, no, that's not what I mean."`;
   Takeshi(C7A457)`"If you call me 'dad', why don't you say it a little more elegantly."`;
   Takeshi(C7A458)`"Call me 'father,' okay? 'Father.'"`;
   Takeshi(C7A459)`"You got it?"`;
   `Hokuto took a deep breath trying to say something.`;
   `But before he could say it, the lid of the pod had shut.`;

});
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
removeBG({ mode: WHITE, transition: 2 });
showTextbox();
text(() => {
   `A familiar hissing sound echoed in the room.`;
   `The cryogenic suspension had activated.`;
   `The pod cooled down with small vibrations.`;
   `..............`;
   `Just in case, Hokuto and I checked the monitor.`;
   `The cryogenic suspension in the two pods was functioning properly.`;
   `There were no signs of abnormality in the bio scans of Coco and Takeshi.`;

});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
stopBGM();
bgload({ name: `IMG02A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `The world in 2017.`;
   `A laboratory at the bottom of the ocean.`;
   `All that remained there was a 'perspective'.`;
   `Hokuto and I started to think.`;
   fadeClearPage();
});
hideTextbox();
playBGM({ num: 15, volume: 100 });
showTextbox();
text(() => {
   `'Oh yeah! We gotta let everyone know Coco and Takeshi are here in IBF!'`;
   `I'm not sure whether it was I or Hokuto who thought this. `;
   `Maybe it was because we had switched places so often that the boundary between Hokuto and myself had started to become very vague.`;
   `Our consciousness had gotten muddy, tangled and intertwined. We were close to a state of fusion.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Or maybe....`;
   `We might have been that way ever since the beginning.`;
   `My thoughts were the same as Hokuto's, and Hokuto's thoughts were the same as mine....`;
   `'Being me' and 'being Hokuto' wasn't all that different.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `We had been one since long ago, and would continue to be one....`;
   `That thought just went through my mind.`;
   `But it wasn't the time to be engrossed in such thoughts.`;
   `Our consciousness flew up to the floating island.`;
   fadeClearPage();
});
hideTextbox();
monoColorOverlay({ interval: 6, color: WHITE });
bgload({ name: `BG38A2`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   `A miniature submarine was floating on the ocean surface.`;
   `Swaying in the waves and being teased along by time, it left a carefree trail in the deep blue ocean.`;
   `I searched inside of it, but Tsugumi had already disappeared.`;
   `She must be somewhere on the floating island....`;
   `I expanded my sight and looked down at the entire artificial island.`;
   `I saw someone....`;
   `But it wasn't Tsugumi.`;
   `It was Yubiseiharukana.`;
   `Hokuto and I flew down near her side.`;

});
bgload({ name: `BG39A2`, transition: 20 });
showTextbox();
text(() => {
   `Walking along with Yubiseiharukana was Pipi.`;
   `He was soaking wet.`;
   `Which meant that it must have been...'right after You had picked up Pipi from the ocean surface.'`;
   `She was walking down the trail attended by a few men who seemed to be staff members of LeMU.`;
   `She was walking towards a helicopter `;
   `She was probably on her way to a large hospital or something. `;
   `She looked surprisingly healthy. She was walking steadily without support.`;
   `Although she seemed in a dark mood, at least her health seemed fine.`;
   `The antibodies must have worked, just like with Takeshi.`;
   `Anyway, I needed to tell her what had happened to Takeshi and Coco!`;
   Kid(C7A460)`"You! You!"`;
   `It was Hokuto who shouted at her.`;

});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //You'haru'
   You_haru_(C7A461)`"W-who is it...?"`;
   `Caught off guard, she glanced all around.`;
   `The staff members darted skeptical looks at her, when she started talking to herself all of a sudden.`;
   Kid(C7A462)`"It's me!"`;
   //You'haru'
   You_haru_(C7A463)`"Who is...this 'me?'"`;
   `There was no way she could have known Hokuto.`;
   `Hokuto hadn't even been born in this world....`;
   `And she wouldn't have believed us if we had told her 'we're talking to you from 17 years in the future.'`;
   `Hokuto told her.`;
   Kid(C7A464)`"Look, there's something I want you tell you."`;
   Kid(C7A465)`"So listen to me carefully."`;
   Kid(C7A466)`"Actually...."`;
   `Hokuto told her that Coco and Takeshi had been left in the laboratory, and that they were under cryogenic suspension in the pods.`;

});
fgload({ id: 1, name: `YU14ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //You'haru'
   You_haru_(C7A467)`"Oh my god! It can't be...."`;
   Kid(C7A468)`"So you have to help them right away, okay!?"`;
   //You'haru'
   You_haru_(C7A469)`"Are you serious!?"`;
   Kid(C7A470)`"Totally!"`;
   Kid(C7A471)`"Coco and Takeshi weren't on the sub that rescued you."`;
   Kid(C7A472)`"And the only others who were rescued were Tsugumi and Kaburaki...."`;

});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Pipi(PIPI_04)`"Bow-wow!"`;
   `Pipi looked at Hokuto and me, and gave a loud bark.`;
   Kid(C7A473)`"Oh, yeah! Pipi!"`;
   Kid(C7A474)`"Pipi...had a disc in his mouth, didn't he?"`;
   //You'haru'
   You_haru_(C7A475)`"Uh-huh...you mean the terabyte disc, right?"`;
   Kid(C7A476)`"That's right, Sora's data and her memories are in it...."`;
   Kid(C7A477)`"What else, um...."`;

});
fgload({ id: 1, name: `YU14ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //You'haru'
   You_haru_(C7A478)`"W-wait a minute!"`;
   //You'haru'
   You_haru_(C7A479)`"Where on earth are you now!?"`;
   Kid(C7A480)`"That doesn't really matter."`;
   Kid(C7A481)`"You have to believe me!"`;

});
fgload({ id: 1, name: `YU18ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //You'haru'
   You_haru_(C7A482)`"How am I supposed to do that...?"`;
   //You'haru'
   You_haru_(C7A483)`"What is this...am I hearing things?"`;
   Kid(C7A484)`"No, you are not!"`;
   Kid(C7A485)`"Seriously, Takeshi and Coco are...."`;
   Pipi(PIPI_01)`"Bow!"`;
   `Pipi started barking again.`;
   Kid(C7A486)`"Oh, oh, I know!"`;
   Kid(C7A487)`"Pipi! Pipi must have seen it!"`;
   Kid(C7A488)`"Pipi saw Coco collapsed in the hallway."`;
   Kid(C7A489)`"There's gotta be some image data of that saved in Pipi's memory."`;
   Kid(C7A490)`"Can you play it back?"`;
   //You'haru'
   You_haru_`"........."`;
   Kid`"........."`;

});
fgload({ id: 1, name: `YU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //You'haru'
   You_haru_`".................."`;
   Kid`".................."`;
   `She dropped her head down as if deep in thought, closed her eyes and massaged her temples with her fingertips.`;
   `After seeming distressed in this manner for a while, she must have reached a conclusion. You looked up in different direction and spoke. `;

});
fgload({ id: 1, name: `YU18ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //You'haru'
   You_haru_(C7A491)`"Alright...."`;
   //You'haru'
   You_haru_(C7A492)`"I have no idea who you are, but I'll see what I can do."`;
   Kid(C7A493)`"Thank you, You."`;
   Kid(C7A494)`"I'm counting on you. It's about time I get back to where I came from."`;
   //You'haru'
   You_haru_(C7A495)`"Where did you come from?"`;
   Kid(C7A496)`"You wouldn't believe me, but...."`;
   Kid(C7A497)`"It's...17 years into the future...."`;

});
hideTextbox();
monoColorOverlay({ interval: 18, color: WHITE });
stopBGM();
removeFG({ id: 1, useAnim: false });
bgload({ name: `IMG05A`, transition: 20 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
setSceneTitle({ index: 123 });
showTextbox();
text(() => {
   `Hokuto and I went back to the world of 2034.`;
   `Surprisingly, the future had been completely altered!`;
   `Takeshi was there. So was Coco.`;
   `Yubiseiharukana was here, as was Yubiseiakikana.`;
   `Tsugumi was there along with Sara.`;
   `Sora was there. Kaburaki was there.`;
   `And so was Hokuto.`;
   `They were chatting happily in a circle.`;
   `I didn't know what had happened, but...I was just relieved.... `;
   `The future had been altered....`;

});
stopBGM();
showTextbox();
text(() => {
   `But how did it happen...?`;
   `I supposed Yubiseiharukana had kept her promise with Hokuto, so Coco and Takeshi were rescued immediately afterwards.`;
   `In this version of history, Takeshi hadn't died 17 years ago, but was still alive and well.`;
   `So in this world, Tsugumi didn't have to send Hokuto and Sara to the institution.`;
   `In this version of the future, Hokuto and Sara didn't have to be separated.`;
   `Besides....`;
   `I understood that the incident in 2034 was planned so that I, Blick Winkel would come into existence.`;
   `It was planned to have me descend in this world so that the past would be altered, and that Coco and Takeshi would be saved. `;
   `But...in this history, Coco and Takeshi had already been rescued safely 17 years ago.`;
   `Therefore, there was no longer any way to grab my attention and make me appear in this world.`;
   `So, Yubiseiharukana didn't have to come up with an outrageous plan to 'trap everyone at LeMU.'`;
   `Which meant that the incident, starting on May 1st 2034 hadn't taken place in this history.`;
   `None of them had been trapped in LeMU.`;
   `Which meant that Yubiseiharukana had no reason to lie to Yubiseiakikana.`;
   `Yubiseiharukana must have told Yubiseiakikana the truth in this history.`;
   `So they were all able to spend their lives peacefully from 2017 until now. `;
   `They all had lived safely with time just passing by peacefully and slowly....`;
   `And that was what I was seeing right then.`;
   `....`;

});
playBGM({ num: 13, volume: 100 });
showTextbox();
text(() => {
   `Hey, but wait a second....`;
   `I needed to think a little more about this.`;
   `In 2017, Takeshi and Coco were saved by Yubiseiharukana's action.`;
   `So if the time passed by peacefully, eventually it would be the year 2034.`;
   `There wouldn't be any accident.`;
   `I, Blick Winkel, wouldn't appear.`;
   `What would happen then?`;
   `Hokuto in this world wouldn't talk to Takeshi in the past (which is 2017).`;
   `In the past that I know....`;
   `Hokuto had funneled his raw, untamed 'force', and had shouted to Takeshi's body lying on the bottom of the ocean.`;
   `'Dad! Daad! Don't you die on me!'`;
   `But in the past retraced from this future, Takeshi had never heard his son's scream.`;
   `That meant....`;
   `Takeshi would have long decomposed on the bottom of the ocean....`;
   `Since Takeshi hadn't come back to life, Coco would have been left in the hallway, and....`;
   `Both of them would die.`;
   `Because the incident in 2017 had already taken place as a historical fact.`;
   `Which meant that even in the past connected directly to this world, the incident in 2017 wouldn't have been avoided.`;
   `Therefore this world could never be possible.`;
   `It could never exist! It was a paradox!`;
   `If this world could exist, this question would naturally arise. `;
   `"Who had saved Takeshi who is alive here today?"`;
   `Was it Hokuto from a different future...?`;
   `Was it that Hokuto from a world where there had been an accident in 2034...who had saved Takeshi...?`;
   `No...that was not possible....`;
   `Because in order for the incident to take place in 2034.... `;
   `The condition must be that 'Takeshi could not be saved in 2017.'`;
   `Which meant:`;
   `In order for Takeshi to come back to life at the bottom of the ocean, the events had to take place in 2034.`;
   `And in order for Coco to go under cryogenic suspension, the events had to take place in 2034!`;
   `Therefore, this peaceful world could never exist!`;
   `Just as I reached this conclusion....`;

});
bgload({ name: `IMG04A`, transition: 20 });
eff_41 = 79;
eff_42 = 4;
eff_50 = 0;
showDimInAndOutAnim();
showTextbox();
text(() => {
   `Takeshi, who was cheerfully talking with everyone suddenly started to decompose with a horrible sound.`;
   `His skin became soggy and peeled off by itself.`;
   `His exposed muscle fibers became dark and putrid, their surface flaking away.`;
   `His cells started to dissolve and run like mud dripping to the ground.`;
   `His abdomen burst open spilling his internal organs.  `;
   `His hair fell out in chunks, exposing the white skull underneath....`;
   `All that was left were white bones with pieces of red flesh stuck to them.`;
   `Eventually, even his skeleton collapsed with a dry sound.`;
   `And at the same time, Coco disappeared without a sound.`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: WHITE });
closeDimInAndOutAndFilterAnim();
bgload({ name: `BG39A2`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `Confused, Hokuto and I flew back to 2017.`;
   `Yubiseiharukana was still standing in the same place.`;
   Kid(C7A498)`"You! You!"`;

});
fgload({ id: 1, name: `YU14ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //You'haru'
   You_haru_(C7A499)`"W-what!? You just disappeared and now you're back again....?"`;
   //You'haru'
   You_haru_(C7A500)`"Don't tell me it was only a joke or something."`;
   Kid(C7A501)`"I won't."`;
   Kid(C7A502)`"It was real. I'm telling the truth."`;
   Kid(C7A503)`"Takeshi and Coco are sleeping in the capsule pods right now."`;
   Kid(C7A504)`"But...but...."`;
   Kid(C7A505)`"You can't rescue them!"`;
   //You'haru'
   You_haru_(C7A506)`"What!? Why is that!?"`;
   Kid(C7A507)`"It's...it's because...."`;

});
fgload({ id: 1, name: `YU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //You'haru'
   You_haru_`"........."`;
   Kid`"........."`;
   //You'haru'
   You_haru_`".................."`;
   Kid`".................."`;
   BW`"Ah! I cannot stand it any longer!"`;
   `I pushed away Hokuto's consciousness and jumped to the front.`;
   BW`"You have to wait for 17 years!"`;
   `I told her that before anything else.`;
   BW`"17 years from now, I will reappear before you, I promise!"`;
   //You'haru'
   You_haru_`"???"`;
   `Puckering out her lips and You cocked her head to the side.`;
   BW`"Just, listen carefully to what I am going to tell you."`;
   `I explained to her about the following.`;

});
showTextbox();
text(() => {
   BW`"'17 years from now, I will reappear to you all.'"`;
   BW`"I just told you that, right?"`;
   BW`"But in order for me to reappear, you will need to trick me. "`;
   BW`"So what I am asking you to do is, trick me 17 years from now!"`;
   BW`"Trick me into falsely believing that it is the year 2017 again."`;
   BW`"When that happens, I will still be the third eye, Blick Winkel, and that will cause me to reveal myself."`;
   BW`"And unless I reveal myself, neither Takeshi nor Coco will be saved."`;
   BW`"Because in order to restore life to Takeshi, who sank to the bottom of the ocean, I will need to appear as myself and go back to the year 2017."`;
   BW`"If I do not appear myself, Takeshi is going to rot at the bottom of the ocean."`;
   BW`"And if Takeshi fails to reach the laboratory, Coco will be left in the hallway...."`;
   BW`"Both of them will die."`;
   BW`"Do you get it?"`;
   BW`"So, no matter what happens, you need to stay away from IBF until 17 years from now!"`;
   BW`"If you save Takeshi and Coco now, the events in 2034 will fail to take place."`;
   BW`"And if that happens, I will not appear...."`;
   BW`"If I do not appear, then I will be unable to save Takeshi and Coco in 2017...."`;
   BW`"Which will form a time paradox and Takeshi and Coco will disappear."`;
   BW`"I'll repeat it again, okay?"`;
   BW`"In order for me to appear in the year 2034, you MUST NOT rescue Takeshi and Coco now."`;
   BW`"I know it is painful, but that is the only way...."`;
   BW`"..........................."`;
   BW`"And...as for the way to trick me...."`;
   BW`"Well, how can I explain...? You will need a bit of preparation."`;
   BW`"Although it should not be too difficult."`;
   BW`"You certainly have enough time...17 years, actually...."`;
   BW`"So it should not be impossible."`;
   BW`"I will tell you what to do...."`;
   BW`"Are you ready?"`;
   BW`"The day to act on the plan will be on Monday, May 1, 2034."`;
   BW`"First, Sara will be visiting LeMU for a school event on that day."`;
   BW`"Sara is Tsugumi's daughter who will be born next January."`;
   BW`"She is actually a twin, and her twin brother's name is Hokuto...."`;
   BW`"But due to unavoidable circumstances, Tsugumi, Sara and Hokuto will be separated."`;
   BW`"So you could probably just tell Tsugumi 'you will be reunited with your son and daughter at LeMU.'"`;
   BW`"If you tell her that, Tsugumi will come to LeMU for sure...."`;
   BW`"Next, you can also invite Hokuto in the same way."`;
   BW`"If you tell him 'you will meet your mother and sister', he will also come, alone."`;
   BW`"You must also have your daughter, Yubiseiakikana, work as LeMU attendant just as you did."`;
   BW`"If you coach her, you could lead her in that direction, right?"`;
   BW`"And you must not tell anything to Sora."`;
   BW`"It is best that you erase her memories of the incident in 2017."`;
   BW`"There is nothing to worry about because all the backup memories are saved in the terabyte disc."`;
   BW`"And finally...you will need the cooperation of young Kaburaki."`;
   BW`"17 years from now, Kaburaki must look and act absolutely like Takeshi Kuranari."`;
   BW`"So he must begin training to look and act just like Takeshi."`;
   BW`"Do not worry. He will catch on in 17 years."`;
   BW`"These six people are required for the plan."`;
   BW`"All you have to do is...."`;
   BW`"Simply throw them all together into LeMU on May 1, 2034, and have an accident similar to the one in 2017."`;
   BW`"If you can arrange this, things will work out by themselves."`;
   BW`"The time in question will be one week from the 1st to the 7th."`;
   BW`"For these seven days, you must not interfere with them."`;
   BW`"No matter what kind of crisis happens. Understood?"`;
   BW`"They will survive by themselves."`;
   BW`"And...should I show no sign of reappearing by 9 p.m. on the 6th...."`;
   BW`"Then I ask of you to rescue them all...."`;
   BW`"Is that clear? Will you do what I just told you? You must not forget."`;
   BW`"On May 1, 2034, you are going to trick me. Understood?"`;
   BW`"Oh...wait...I mean not 'me' to be exact...it's actually 'Hokuto'...."`;
   BW`"I want you to trick Hokuto."`;
   BW`"You must trick him so that he will believe it is the year 2017."`;
   BW`"..........................."`;
   BW`"17 years from now, without remembering why, I might ask you something like..."`;
   BW`"'Why have you called me here?'"`;
   BW`"Then I want you to answer this way."`;
   BW`"'I only followed your directions.'"`;
   BW`"...That is all."`;
   BW`"It was kind of lengthy, but...do you understand? You got it, right?"`;
   BW`"I need you to understand this...."`;
   `Yubiseiharukana was surprisingly accepting.`;
   `As if overwhelmed by my enthusiasm, she kept nodding her head.`;
   `But I was still worried...about whether she truly understood everything.`;
   `Explaining to her again in more detail, I repeated the same words almost as if I were trying to hypnotize her.`;
   `It took several more hours for her to precisely capture the whole picture.`;
   `Hokuto and I made sure that she understood one last time. Then we left her.`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: WHITE });
stopBGM();
bgload({ name: `EV_YU14A`, transition: 26 });
setKomoreType(1);
showKomoreAnim();
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
setSceneTitle({ index: 124 });
showTextbox();
text(() => {
   `The world in 2034 had returned to normal. `;
   `Hokuto and I were still confronting Yubiseiharukana.`;
   `She kept her mouth closed as if she had spoken about everything.`;
   `You (Yubiseiakikana) stood next to her also wordless.`;
   `In the cold silence, I tried to reorganize in my mind what had happened so far, and started wondering....`;
   `'Why am I here?'`;
   `I found the answer easily.`;
   `'I have appeared because I was tricked by myself from the past.'`;

});
playBGM({ num: 15, volume: 100 });
showTextbox();
text(() => {
   `I mean....`;
   `The mastermind behind the incident in 2034 was no one else other than myself.`;
   `In 2017, I had told You to trick me, and therefore I appeared in the world in 2034, having been tricked by myself.`;
   `Thanks to the strength of Hokuto's appeal, Takeshi had come back to life and saved Coco, helped her into the pod and activated the cryogenic suspension.`;
   `So...that was what happened....`;
   `That moment, when Hokuto had shouted out 'Dad!' at the dark bottom of the ocean.... `;
   `Everything had happened for the sake of that moment....`;
   `It had taken 17 years, going back in time, in order to bring the dead back to life....`;
   `That was everything.`;
   `Coco and Takeshi were still sleeping 357 feet under the ocean.`;
   `(So I need to get there!)`;
   `In order to save them!`;

});
removeBG({ mode: WHITE, transition: 2 });
closeKomoreAnim();
showTextbox();
text(() => {
   `Before I realized it, I was already sprinting across the island.`;

});
bgload({ name: `BG38A2`, transition: 20 });
showTextbox();
text(() => {
   `I ran on the grass and jumped into the deep brush.`;
   `Dodging the branches, slicing through the wind, I ran like an arrow released.`;
   `As I pumped my legs I thought....`;
   `(How can I get to the bottom of the ocean...?)`;
   `I cut through the woods as I was thinking.`;
   `I sprinted over the curving arch of a bridge, and reached the docks, the harbor for the floating island.`;
   `I looked around and didn't see anything that resembled a mini-sub.`;
   `As I tried to catch my breath, I walked around the docks.`;
   `I noticed there were broken pieces of rock in the middle of the open area.`;
   `All of the pieces scattered around were huge.`;
   `They were as big as my whole body.`;
   `The surface of the rocks had a refined smoothness.`;
   `Looking closely, I found that some letters were carved on it.`;
   `'Wher' 'abov' 'sky' There were meaningless letters jumbled on the pieces of rock near me.`;
   `There were letters on the other pieces.`;
   `I put the pieces together and tried to guess the original sentence.`;

});
bgload({ name: `IT06B`, transition: 20 });
showTextbox();
text(() => {
   `It said...'Where' 'is' 'Heaven?'`;
   `'Above the' 'sky, and' 'at your feet....'`;
   BW`"It's a stone monument...."`;
   `I whispered.`;
   `The monument must have fallen down for some reason and had broken into pieces.`;
   `Was it due to the tremor from the accident?`;
   `Or had it been the passengers, who in a state of panic had rushed towards the docks and knocked it over?`;
   `I had no idea what the cause was.`;
   `I picked up one of the smaller pieces.`;
   BW`"Oh...it's heavy...."`;
   `It was probably as heavy as Coco.`;

});
bgload({ name: `BG39A2`, transition: 20 });
showTextbox();
text(() => {
   `And then....`;
   `A thought just hit me.`;
   `'If I jump into the ocean holding this piece of rock in my arms....'`;
   `Before I had time to think it over, my feet were starting to move already.`;
   `I ran hard towards the ocean....`;
   `The moment I reached my maximum speed, I kicked off the ground with all my strength.`;
   `My body flew in the air....`;
   `I jumped high over the fence....`;
   `The blue water surface swayed below my eyes....`;
   `I splashed into the ocean holding the heavy piece of stone.`;
   `The letters on the piece said...'Heaven'....`;
   `Holding 'Heaven' tightly to my chest, I plummeted into the darkness.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `IMG06A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `As I sank deeper and deeper, it felt as if I were running fast with the wind against my face.`;
   `The seawater pressed hard on my eardrums.`;
   `Unable to pop my ears because I held 'heaven' in my arms...`;
   `I simply endured the pain.`;
   `Water pressure, incredibly high, squeezed my body.`;
   `It felt as if my joints were about to snap into pieces.`;
   `My chest felt as though it would be crushed.`;
   `Deeper, deeper, deeper....`;
   `The deeper I went, the more the water pressure rose....`;
   `My lungs could not stand it.`;
   `I decided to open my mouth.`;
   BW`"Blub."`;
   `The air in my lungs came out and a large amount of water poured into them.`;
   `I automatically gagged and started to choke.`;
   `Even then cold seawater filled my windpipe.`;
   `As my lungs filled up with water, I felt despair welling up inside of me.`;
   `How far had I gone?`;
   `I looked up, and saw the water surface far above.`;
   `I couldn't go back now.`;
   `I looked below.`;
   `I couldn't see anything.`;
   `There was only the blue-black darkness.`;
   `I couldn't see the bottom of the ocean yet.`;
   `No matter how fast I sank, 357 feet was still very long.`;
   `I went deeper and deeper, but scenery was unchanged.`;
   `The darkness...darkness...darkness...a world covered in darkness....`;
   `It occurred to me...that I might....`;
   `I might just be swallowed by some deep ocean trench and keep falling forever. I began to feel desperate.`;
   `The only positive thing was that somehow the pain had disappeared....`;
   `I felt that my conscious mind could still be clear, as the sense of pain had numbed.`;
   `I realized that for the first time in my life.`;
   `Hey, wait....`;
   `To begin with, the body I was in belonged not to me but to Hokuto....`;
   `Thinking about that I felt guilty.`;
   `(I need to return it in one piece....)`;
   `I couldn't see the bottom yet.`;
   `My brain was running out of oxygen and I started to lose consciousness.`;
   `My limbs were numb.`;
   `The numbness soon turned into spasms.`;
   `Against my will, my limbs started to go wild.`;
   `I almost dropped 'heaven'.`;
   `I quickly pulled it close to me and held it tighter to my chest.`;
   `Going deeper, deeper and deeper....`;
   `I must have looked like a priest at an exorcism gone wrong, possessed by an evil spirit, my whole body twitching wildly.`;
   `Clonk.`;
   `I hit a rock surface and had stopped going down.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `BG33A2`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `Splash!`;
   `I burst forth from the water surface with great force.`;
   `Putting my face above the pool, I started coughing hard trying to expel all of the seawater in my lungs.`;
   `I grabbed the rim of the pool.`;
   `I took a deep, deep breath.`;
   `I coughed hard as I was breathing in and chucked up a large amount of water. `;
   `I repeated that a few times.`;
   `I now really understood the suffering Takeshi had gone through.`;
   `I crawled up weakly onto the floor.`;
   BW`"Whew...."`;
   `But there was no time to relax.`;
   `I started running towards the examination room.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
delay({ interval: 60 });
stopBGM();
bgload({ name: `BG34A1`, transition: 26 });
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   `It had been 17 years since I had last been there.`;
   `I felt the heaviness of all the past years, as I smelled the stale odor in the room.`;
   `The paint on the capsule pod had partially peeled off and the surface of it was rough and weathered.`;
   `Manipulating the computer terminal I checked on the status of the pods.`;
   `Both Coco and Takeshi were safe.`;
   `Under cryogenic suspension their body temperatures had been kept at about 40 degrees Fahrenheit, with their heartrates and breathing reduced to only a few times a minute. They seemed to be in good health.`;
   `The cryogenic suspension device seemed to have worked properly without a single glitch for 17 years.`;
   `I deactivated the hibernation program for both of the pods.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
showTextbox();
text(() => {
   `..............`;
   `...........`;
   `........`;

});
hideTextbox();
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `Finally....`;
   `Coco and Takeshi were set to awaken at anytime.`;
   `First, I opened Coco's pod. `;

});
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
bgload({ name: `EV_CO10B`, transition: 20 });
showTextbox();
text(() => {
   BW`"Coco...."`;

});
bgload({ name: `EV_CO07A`, transition: 20 });
showTextbox();
text(() => {
   BW`"Coco...."`;
   Coco`"........."`;
   BW`"Coco...."`;
   Coco`"........."`;
   BW`"Coco!"`;

});
playBGM({ num: 20, volume: 100 });
bgload({ name: `EV_CO07B`, transition: 20 });
showTextbox();
text(() => {
   Coco(C7A508)`"Um..umm...."`;
   Coco(C7A509)`"Who is it...?"`;
   BW`"It's me, Coco."`;
   Coco`"........."`;
   BW`"I came to save you...."`;
   Coco(C7A510)`"Um...."`;
   Coco(C7A511)`"You...came...?"`;
   BW`"Yes."`;
   BW`"I kept my promise, didn't I?"`;
   Coco(C7A512)`"The promise...."`;
   Coco(C7A513)`"...The promise...."`;
   Coco(C7A514)`"...The promise...?"`;
   `Coco rubbed her eyelids and blinked repeatedly.`;
   Coco(C7A515)`"Oh...."`;
   Coco(C7A516)`"Ah...!"`;
   Coco(C7A517)`"Ahhh...!!"`;
   Coco(C7A518)`"I knew it!"`;
   Coco(C7A519)`"So you DID come to save me!"`;

});
bgload({ name: `EV_CO20A`, transition: 20 });
showTextbox();
text(() => {
   `Coco jumped up and hugged me.`;
   `Oh wait, was it actually Hokuto who she had hugged...?`;
   `Was it me...or was it Hokuto...?`;
   `Was it Hokuto who wasn't me...or was it me who wasn't Hokuto...?`;
   `I did not fully understand...but still....`;
   `I hugged Coco tightly, too.`;

});
showTextbox();
text(() => {
   Coco(C7A520)`"You know, I've been waiting for you sooooo long!"`;
   BW`"I know."`;
   Coco(C7A521)`"I've been waiting for you so, so, so long!"`;
   BW`"I know."`;
   Coco(C7A522)`"I knew you would come and get me."`;
   Coco(C7A523)`"I wanted to see you so bad...."`;
   Coco(C7A524)`"I just...had to see you again...."`;
   Coco(C7A525)`"My brother...."`;
   BW`"Uh, uh-huh...."`;
   BW`"But you see, Coco...?"`;
   BW`"I'm not your brother, actually...."`;
   Coco(C7A526)`"Oh, that's alright."`;
   Coco(C7A527)`"A girl who doesn't have a brother could call someone who is like a brother, 'brother!'"`;
   BW`"Where is that written?"`;
   Coco(C7A528)`"It's not written anywhere."`;

});
showTextbox();
text(() => {
   Coco(C7A529)`"I just decided it!"`;

});
bgload({ name: `BG34A1`, transition: 20 });
fgload({ id: 1, name: `CO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Coco stepped away from me.`;
   `Coco and I stared at each other as if we were drawn to each other.`;
   Coco(C7A530)`"Hey? It's strange...."`;
   Coco(C7A531)`"I thought I had so many things to talk to you about when I finally see you, but...."`;
   Coco(C7A532)`"I don't know why, but...."`;
   Coco(C7A533)`"I get all tounge-tied...."`;
   BW`"........."`;
   Coco(C7A534)`"Oh, but one thing...."`;
   Coco(C7A535)`"Can I tell you something I couldn't tell you before? "`;
   BW`"Sure."`;
   Coco(C7A536)`"Well,"`;
   Coco(C7A537)`"I...."`;
   Coco(C7A538)`"I think you'll be surprised, but...."`;
   Coco(C7A539)`"You might not believe me, but...."`;
   Coco(C7A540)`"I...."`;
   Coco(C7A541)`"Well, I...."`;

});
fgload({ id: 1, name: `CO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C7A542)`"I might have fallen in love with you."`;
   `'What!?'`;
   `My heart skipped a few beats.`;
   BW`"Well, but...."`;
   BW`"But I still.......ah...."`;

});
fgload({ id: 1, name: `CO03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C7A543)`"For 17 years...."`;
   Coco(C7A544)`"For 17 years...."`;
   Coco(C7A545)`"I've been waiting for you, brother."`;
   Coco(C7A546)`"I've known about you since 17 years ago, you see?"`;
   BW`"........."`;

});
fgload({ id: 1, name: `CO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C7A547)`"You've been watching over me this whole time, too."`;
   Coco(C7A548)`"But, I've been watching you, too...."`;
   `It all started to make sense to me....`;
   `Coco and I had been sharing the same time....`;
   `I must have been sharing experiences with Coco through Takeshi's point of view....  `;
   `I had always been by Coco's side....`;

});
fgload({ id: 1, name: `CO03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C7A549)`"Would it be so bad if I fell in love with you?"`;
   BW`"I don't think so, really...."`;

});
fgload({ id: 1, name: `CO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C7A550)`"Well then!"`;
   Coco(C7A551)`"It's decided!"`;
   Coco(C7A552)`"From now on, you and I are sweethearts, okay?"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   BW`"...What...?"`;

});
showTextbox();
text(() => {
   `Before I got a chance to ask her back, Coco jumped into my arms again.`;
   `Coco had regained all her strength.`;
   `Maybe the antibody had kicked in while she was under cryogenic suspension.`;
   `Whatever it was...I was relieved....`;
   `My heart was filled with waves of happiness.`;

});
showTextbox();
text(() => {
   `It had taken me a while, but it was finally Takeshi's turn.`;
   `I gave the body back over to Hokuto, since I wanted them to have a family moment. `;

});
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
bgload({ name: `EV_ET03A`, transition: 20 });
showTextbox();
text(() => {
   `Hokuto opened Takeshi's pod.`;
   Kid(C7A553)`"Dad!"`;
   Takeshi`"........."`;
   Kid(C7A554)`"Dad!"`;
   Takeshi`"........."`;
   Kid(C7A555)`"Dad! Wake up!"`;
   Takeshi`"........."`;
   Kid(C7A556)`"Faaaather!"`;

});
bgload({ name: `EV_ET03B`, transition: 20 });
showTextbox();
text(() => {
   Takeshi(C7A557)`"...Um!?"`;
   `All the sudden, Takeshi opened his eyes. `;
   Takeshi(C7A558)`"Wh-where...? Is this...?"`;
   `He looked around confused.`;
   `Takeshi realized that Hokuto's face was in front of him, and said.`;
   Takeshi(C7A559)`"W-who on....?"`;
   Takeshi(C7A560)`"Earth're you...?"`;
   Kid(C7A561)`"It's me, dad!"`;
   `Takeshi took a close look at Hokuto's face.`;
   `He looked over Hokuto's whole body.`;
   `He closed his eyes tightly and started banging his forehead with his palm.`;
   `He opened his eyes and glared at the examination room wall.`;
   `Then, Takeshi gasped as if he realized something and looked at Hokuto again.`;
   Takeshi(C7A562)`"So...you're that...'Hokuto?'"`;
   Kid(C7A563)`"That's right, it's me, dad!"`;
   Kid(C7A564)`"Dad! Dad! I've missed you so much!"`;
   Kid(C7A565)`"Daaaaad...."`;
   `Raising his voice like a child, Hokuto rubbed his face against Takeshi's chest. `;
   Takeshi(C7A566)`"Hey hey hey...wait a sec, Hokuto...."`;
   `Takeshi pushed back Hokuto.`;
   Takeshi(C7A567)`"Take it easy, will you? Alright?"`;
   `Takeshi tapped Hokuto on the back....`;
   Kid(C7A568)`"???"`;

});
bgload({ name: `BG34A1`, transition: 20 });
showTextbox();
text(() => {
   `Takeshi raised himself and stretched his legs outside the pod.`;
   `Coco rushed at him.`;

});
multifgload2({ id1: 1, id2: 2, name1: `TA01AWM`, name2: `CO12ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(C7A569)`"Takepyon!"`;
   `Coco hastily jumped at Takeshi and hugged him.`;

});
fgload({ id: 1, name: `TA16AWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C7A570)`"Hey, Coco! You look all better now!"`;

});
fgload({ id: 2, name: `CO11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(C7A571)`"Uh-huh, I don't have a single sore spot!"`;
   Takeshi(C7A572)`"That's great...looks like the plan worked out beautifully, didn't it?"`;
   Takeshi(C7A573)`"That's just so great!"`;
   Kid(C7A574)`"Dad! Dad!"`;
   `Hokuto jumped at Takeshi and hugged him just like Coco.`;

});
fgload({ id: 1, name: `TA04AWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C7A575)`"Whoah, stop it now!"`;
   `Takeshi forcefully peeled him away...`;
   Kid(C7A576)`"W-why!? Why don't you want me to hug you!?"`;

});
fgload({ id: 1, name: `TA01AWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C7A577)`"Before I answer that question, there's something I want to ask you."`;
   Kid(C7A578)`"What is it?"`;
   Takeshi(C7A579)`"How long have I been sleeping?"`;
   Takeshi(C7A580)`"A day? Two days?"`;
   Takeshi(C7A581)`"Oh man, I didn't sleep for...a week did I?"`;

});
fgload({ id: 2, name: `CO06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid(C7A582)`"...Um..."`;
   Coco(C7A583)`"...Huh?"`;

});
fgload({ id: 1, name: `TA03AWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C7A584)`"Ugh...."`;
   Takeshi(C7A585)`"Guessing from your reaction... it's been more than a week...?"`;

});
fgload({ id: 2, name: `CO07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid`"........."`;
   Coco`"........."`;

});
fgload({ id: 1, name: `TA02AWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C7A586)`"A month?"`;
   Kid`"........."`;
   Coco`"........."`;

});
fgload({ id: 1, name: `TA03AWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C7A587)`"Th-three months, then...maybe?"`;
   Kid`"........."`;
   Coco`"........."`;
   Takeshi(C7A588)`"Y-you gotta be kidding......."`;
   Takeshi(C7A589)`"You mean, I've slept past summer and into autumn...?"`;
   `Hokuto and Coco closed their eyes and shook their heads.`;
   Coco(C7A590)`"Today is Sunday, May 7th...."`;
   Kid(C7A591)`"The last day of the holiday."`;

});
fgload({ id: 1, name: `TA02AWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C7A592)`"FWA, HA, HA, HA!"`;
   Takeshi(C7A593)`"Whew, c'mon, you had me scared for a second there...."`;
   Takeshi(C7A594)`"So it's only been a few hours since then...."`;
   `Hokuto and Coco looked at each other, nodded and said.`;
   Kid(C7A595)`"Dad? I don't want you to panic, alright?"`;

});
fgload({ id: 2, name: `CO14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(C7A596)`"Just calm down and listen...."`;

});
fgload({ id: 1, name: `TA17AWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"........."`;

});
fgload({ id: 1, name: `TA03AWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Kid(C7A597)`"Well, actually...."`;

});
fgload({ id: 1, name: `TA17AWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Coco(C7A598)`"Takepyon...."`;

});
fgload({ id: 1, name: `TA03AWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Kid(C7A599)`"You have been...."`;

});
fgload({ id: 1, name: `TA17AWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Coco(C7A600)`"Sleeping for...."`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: WHITE });
removeFG({ id: 1, useAnim: false });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   Takeshi(C7A601)`"Wh, what, what...?"`;
   Takeshi(C7A602)`"17 yeeeeaaaaarrrrrrssss!?"`;

});
hideTextbox();
bgload({ name: `IMG06A`, transition: 20 });
showTextbox();
text(() => {
   `After a while....`;
   `Yubiseiharukana took a small submersible to pick us up at IBF pool.`;
   `Inside the mini-sub she scolded Hokuto...`;
   //You'haru'
   You_haru_(C7A603)`"You've got to be out of your mind to dive into the ocean like that"`;
   //You'haru'
   You_haru_(C7A604)`"I mean, 357 feet...."`;
   //You'haru'
   You_haru_(C7A605)`"Don't you know, Hokuto? In this world, there's this wonderful and safe vessel for going under water called a 'submarine.'"`;
   //You'haru'
   You_haru_(C7A606)`"Why didn't you just let me know?"`;
   //You'haru'
   You_haru_(C7A607)`"You are so stupid! Pure foolishness! You must be the dumbest guy in history!"`;
   //You'haru'
   You_haru_(C7A608)`"It must come from your father's side of the family...yeah...."`;
   `She kept picking on Hokuto until they reached the surface.`;
   `Hokuto must have been thinking -`;
   `'It wasn't really me who decided to jump into the ocean....'`;

});
bgload({ name: `BG39A2`, transition: 20 });
showTextbox();
text(() => {
   `The whole time, Takeshi still hadn't accepted the fact that he had been sleeping for 17 years.`;
   `No matter how many times they tried to explain, he just wouldn't listen. `;
   `Therefore, Takeshi still couldn't believe that Hokuto was truly his son.`;

});
bgload({ name: `EV_CO14A`, transition: 20 });
showTextbox();
text(() => {
   `Under the bright sunlight, Takeshi, Coco, Hokuto, and Pipi were hanging around.`;
   Takeshi(C7A609)`"Good morning."`;
   Takeshi(C7A610)`"Those are such nice words...."`;
   Takeshi(C7A611)`"They make me feel like getting up and doing my best."`;
   Coco(C7A612)`"Yeah, I agree."`;
   Coco(C7A613)`"Okay then, I'll say it too...."`;
   Coco(C7A614)`"Good morning, Takepyon."`;
   Takeshi(C7A615)`"Good morning, Coco."`;
   Kid(C7A616)`"Well, me too...."`;
   Kid(C7A617)`"Good morning, dad."`;
   Takeshi(C7A618)`"Good morning, son...."`;
   Takeshi(C7A619)`"...Son!? ...I DON'T have a son!"`;
   Kid(C7A620)`"You've got a daughter, too."`;
   Takeshi(C7A621)`"Hey, don't start adding kids like that!"`;
   Takeshi(C7A622)`"So are you telling me I'm the father of two children at my age?"`;
   Kid(C7A623)`"That's right."`;
   Kid(C7A624)`"And it's true whether you like it or not...."`;
   Kid(C7A625)`"Right, Coco?"`;
   Coco(C7A626)`"Right, Hokutan?"`;
   Kid(C7A627)`"Nya, ha, ha, ha, ha, ha, ha!"`;
   Coco(C7A628)`"Kya, ha, ha, ha, ha, ha, ha!"`;
   `Listening to their cheerful laughter, I thought to myself....`;
   `'I should be going back to where I came from.'`;
   `As I began to fade I heard only their happy voices behind me.`;
   Coco(C7A629)`"Hey, Takepyon, Takepyon!"`;
   Takeshi(C7A630)`"Huh?"`;
   Coco(C7A631)`"I've got a new brother!"`;
   Takeshi(C7A632)`"A new brother?"`;
   Coco(C7A633)`"Uh-huh, he's actually my brother and my boyfriend at the same time...."`;
   Takeshi(C7A634)`"Reeeally, well good for you."`;
   Pipi(PIPI_04)`"Bow-wow!"`;
   Kid(C7A635)`"Hey, dad! Dad!"`;
   Takeshi(C7A636)`"I told you NOT to call me dad!"`;
   Kid(C7A637)`"How about father, then?"`;
   Takeshi(C7A638)`"Don't call me that either!"`;
   Kid(C7A639)`"Why not? You told me to call you father before...."`;
   Takeshi(C7A640)`"Well that just slipped out of my mouth...."`;
   Pipi(PIPI_04)`"Bow-wow!"`;
   Coco(C7A641)`"Hey, Takepyon, Takepyon!"`;
   Takeshi(C7A642)`"What's that?"`;
   Coco(C7A643)`"Pu-pu-ku-pu! Pu-pu-ku-pu!"`;
   Takeshi(C7A644)`"You're not making any sense!"`;
   Kid(C7A645)`"Hey, dad! Dad!"`;
   Takeshi(C7A646)`"What is it now!?"`;
   Kid(C7A647)`"Chuwa-chuwa-chuwa-chuwa!"`;
   Takeshi(C7A648)`"You too, huh!?"`;
   Pipi(PIPI_09)`"Bow-wow! Bow-wow!"`;
   Takeshi(C7A649)`"What's up, Pipi?"`;
   Pipi(PIPI_19)`"Awoooooooooo!"`;
   Takeshi(C7A650)`"You just wanted to howl!"`;
   Coco(C7A651)`"Takepiyo! Takepiyo!"`;
   Takeshi(C7A652)`"Hey, stop changing my nickname!"`;
   Coco(C7A653)`"Coco's short comedy! If Coco were a monster!"`;
   Coco(C7A654)`"Grrr, grrr, I'm a monster! Thump, thump, thump! I'm going to destroy everything! Grrrr!"`;
   Takeshi(C7A655)`"Where's the punchline?"`;
   Kid(C7A656)`"My grandfather's son, my grandmother's son!"`;
   Takeshi(C7A657)`"That's so confusing!"`;
   Kid(C7A658)`"Hokutan's comedy sketch! If I became a 12th grader,"`;
   Kid(C7A901)`"Since I've made it all the way to 12th grade, I'll try my best not to forget to bring stuff to school. `;
   Kid(C7A902)`Since I always seem to forget my protractor, I'll do my best to remember it."`;
   Takeshi(C7A660)`"That's a resolution, not comedy! Well, do your best! Don't you forget it, ya hear?"`;
   Pipi(PIPI_09)`"Bow-wow! Bow-wow!"`;
   Takeshi(C7A661)`"What's with you this time, Pipi?"`;
   Pipi(PIPI_19)`"Awoooooooooooooo!"`;
   Takeshi(C7A662)`"Let me guess, just wanted to howl again, huh...."`;
   Coco(C7A663)`"Takepyon! Takepyon!"`;
   Takeshi(C7A664)`"What is it now...?"`;
   Coco(C7A665)`"I want to play cater-pi-llarrrr, I want to play cater-pi-llarrrr, I want to play cater-pi-llarrrr!"`;
   Takeshi(C7A666)`"Well, go ahead. No one's stopping you?"`;
   Kid(C7A667)`"Dad! Mom!"`;
   Takeshi(C7A668)`"What, am I BOTH now...?"`;
   Kid`"........."`;
   Takeshi(C7A669)`"Look if you can't think of anything to say, don't say anything!"`;
   Pipi(PIPI_09)`"Bow-wow! Bow-wow!"`;
   Takeshi(C7A670)`"You're just going to howl again...."`;
   Pipi(PIPI_17)`"Awoo."`;
   Takeshi(C7A671)`"Oh, it's shorter now. Say that's kind of new."`;
   Coco(C7A672)`"Takepyon! Takepyon!"`;
   Takeshi(C7A673)`"So what is it?"`;
   Coco(C7A674)`"Pu-pu-ku-pu! Pu-pu-ku-pu!"`;
   Takeshi(C7A675)`"There you go again...."`;
   `I decided to leave as I was hearing their happy voices.`;
   Coco(C7A676)`"Oh! Wait a minute! Brother!"`;
   BW`"...What?"`;
   Coco(C7A677)`"Can I see you again?"`;
   Coco(C7A678)`"I know I'll see you again. No matter what."`;
   Coco(C7A679)`"I believe in you...."`;
   Coco(C7A680)`"Because you know something?"`;
   Coco(C7A681)`"You and me are both from the sun, right?"`;
   Coco(C7A682)`"We can use psychic power."`;
   Coco(C7A683)`"Okay? So believe in me, too."`;
   Coco(C7A684)`"Your world and my world are connected."`;
   Coco(C7A685)`"Our two worlds are...going to be united...."`;
   Coco(C7A686)`"And at the intersection, there is a perspective...."`;
   Coco(C7A687)`"I'll always be with you, brother...."`;
   Coco(C7A688)`"Okay, so I'll see you then!"`;
   Coco(C7A689)`"Brother!"`;

});
hideTextbox();
monoColorOverlay({ interval: 36, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
delay({ interval: 60 });
stopBGM();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
unSkippableDelay(3);
unSkippableDelay(1);
playMovie(`MOV_END`);
unSkippableDelay(1);
unSkippableDelay(1);
l_choice = 0;
jump(`YCEP`);
