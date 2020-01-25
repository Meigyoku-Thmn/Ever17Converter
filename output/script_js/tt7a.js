setDialogBoxColor(GREEN);
l_b0 = 5;
l_dayA = 7;
l_dayB = 0;
setSceneTitle({ index: 44 });
playBGM({ num: 19, volume: 100 });
removeBG({ mode: WHITE, transition: 0 });
openSnowFallingAnim();
showTextbox();
text(() => {
   `A soft warmness surrounded me.`;
   `Light.`;
   `I felt that I had overcome an immense distance.`;
   `The end of the darkness.`;
   `A soft, white light surrounded me.`;
   `There was nothing else for me to look at.`;
   `There was nothing below me.`;
   `Nothing there to support me.`;
   `But for some reason, I was at peace.`;
   `I was floating.`;
   `Floating steadfastly.`;
   `I was swaying freely in the center...`;

});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   `In the center of gently drifting water.`;
   `I could hear something, faintly.`;
   `The first sound I had heard in my life—`;
   `Yes, it was the sound of a heart beating.`;
   `I remembered.`;
   `I was surrounded by the gentle sound of a beating heart.`;
   `There was no greater feeling of peace than what I felt then.`;
   `How long would I be able to stay there?`;
   `I didn't know.`;
   `I knew that I would have to leave the place at some point.`;
   `I would have to let go of that fragile bond soon.`;
   `But I wasn't sad.`;
   `If that time must come...`;
   `Darkness cleared again and out of it would come...`;
   `A new world, where I would resolve to be reborn.`;
   `...............`;
   `.........`;

});
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
monoColorOverlay({ interval: 12, color: WHITE });
closeSnowFallingAnim();
stopBGM();
bgload({ name: `EV_TU14E`, transition: 26 });
setMonoColorOverlayFadeOutDuration(61);
fadeOutMonoColorOverlay();
unSkippableDelay(48);
showTextbox();
text(() => {
   Tsugumi(T7T000)`"Good morning..."`;
   Takeshi`"........."`;

});
bgload({ name: `EV_TU14A`, transition: 0 });
showTextbox();
text(() => {
   `I was lying down in bed.`;
   `Right next to me, Tsugumi was starting at me.`;
   `She was squatting next to the bed, her eyes level with mine...`;
   `We stared at each other eye-to-eye.`;

});
hideTextbox();
playBGM({ num: 7, volume: 100 });
showTextbox();
text(() => {
   Takeshi`"What time is it?"`;
   `That was the first thing I could think to say.`;
   Tsugumi(T7T001)`"Well..."`;
   `Tsugumi took the PDA out of my pocket.`;
   Tsugumi(T7T002)`"The batteries are dead."`;
   `She pressed the buttons, but nothing appeared on the screen.`;
   Takeshi`"Oh..."`;
   Tsugumi(T7T003)`"You want me to go check the clock on the terminal?"`;
   Takeshi`"Nah, that's okay. Just stay here with me."`;
   Tsugumi(T7T004)`"Okay..."`;
   `There were tears in Tsugumi's eyes.`;
   Tsugumi(T7T005)`"How are you feeling?"`;
   Takeshi`"That's a dumb question."`;
   Tsugumi(T7T006)`"Just tell me. How are you feeling?"`;
   `Tsugumi held my hand softly.`;
   `The feel of her soft skin seemed like it would pull me in.`;
   Takeshi`"I don't feel so good. My body feels tired all over..."`;
   Takeshi`"But it could be worse, I guess."`;
   Tsugumi(T7T007)`"Okay..."`;
   `I tried opening and closing the hand that was free in front of my face.`;
   `My movements were still sluggish.`;
   Tsugumi(T7T008)`"Your cut doesn't hurt?"`;
   Takeshi`"Cut...?"`;
   Tsugumi(T7T009)`"You fell over and...I tried to stop you from falling, but..."`;
   Tsugumi(T7T010)`"I didn't get there in time. You split your forehead, Takeshi."`;
   `Tsugumi opened her glossy lips slightly and murmured.`;
   `I could see the tip of her red tongue.`;
   Takeshi`"Forehead?...Split?"`;
   Tsugumi(T7T011)`"Hey..."`;
   Tsugumi(T7T012)`"You don't remember?"`;
   `I slowly looked around the room.`;
   `The ceiling...`;
   `Sheets...`;
   `The empty syringes on the floor...`;
   Takeshi`"Okay, okay. I remember."`;
   Takeshi`"I remember, I..."`;
   Tsugumi`"........."`;
   Takeshi`"........."`;
   `I touched my forehead lightly.`;
   `That gash must have been split wide open.`;
   `There were stitches there now.`;
   Takeshi`"No big deal."`;
   Takeshi`"Something like this ought to heal right up."`;
   Tsugumi(T7T013)`"But..."`;
   Tsugumi(T7T014)`"...I'm so sorry."`;
   Takeshi`"Why are you apologizing?"`;
   Takeshi`"It isn't your fault, right?"`;
   Tsugumi`"........."`;
   Takeshi`"It isn't anyone's fault."`;
   Takeshi`"So don't worry about it."`;
   `I patted Tsugumi on the head.`;
   `I was alive.`;
   `Even though I was banged up pretty good, I was alive.`;
   `Besides, it wasn't a big deal.`;

});
removeBG({ mode: BLACK, transition: 2 });
chapterCutin({ name: `00000000` });
bgload({ name: `BG34A1`, transition: 20 });
showTextbox();
text(() => {
   `I looked around the room once more.`;
   `There was nobody else there.`;
   `Just the two of us...`;
   `...and the silence.`;
   `It was almost too quiet to believe.`;
   Takeshi`"Where's the bus?"`;
   Tsugumi(T7T015)`"Doesn't look like it's coming."`;
   Takeshi`"How about a taxi?"`;
   Tsugumi(T7T016)`"I've already sent for it..."`;
   Takeshi`"Communications?"`;
   Tsugumi(T7T017)`"Since that one, we haven't had any..."`;
   `I could see the monitor.`;
   `It reported that the remote control guidance was working normally.`;
   `It would take about one hour for it to reach our pool...`;
   `But it seemed that the submarine was making its way without any glitches.`;
   Takeshi`"Oh..."`;
   Takeshi`"I guess that leaves us some time to relax until the taxi gets here."`;
   Takeshi`"Won't do us an ounce of good getting worked up about it."`;
   Tsugumi(T7T018)`"...Yeah."`;
   `Even if I had wanted to...`;
   `My body wasn't doing what I wanted it to.`;
   `It felt like I was running low on batteries...`;
   `I was exhausted.`;
   `I couldn't think straight.`;
   `I had gone beyond the limits of my strength and spirit.`;

});
bgload({ name: `EV_TU14A`, transition: 10 });
showTextbox();
text(() => {
   Takeshi`"...Huh?"`;
   `I noticed something and brought my face closer to Tsugumi.`;
   Tsugumi(T7T019)`"W-what? Takeshi..."`;
   Takeshi`"Takeshi..."`;
   Takeshi`"I..."`;
   `I almost pressed myself against her, and brought myself close to her face. `;
   Tsugumi(T7T020)`"W-w-w-what...?"`;

});
bgload({ name: `EV_TU14B`, transition: 10 });
showTextbox();
text(() => {
   `Her cheeks, which had been puffed up from crying, started to turn slightly red.`;
   Takeshi`"I'm hungry..."`;
   `I murmured, pulling my face up close.`;
   Takeshi`"I feel like I could eat just about anything."`;
   Tsugumi(T7T021)`"R...really..."`;
   Takeshi`"And guess what...Tsugumi."`;
   Tsugumi(T7T022)`"Huh...what?"`;
   `Tsugumi's face became redder and redder.`;
   Takeshi`"There's just the most amazing smell coming from you."`;
   Tsugumi(T7T023)`"...huh?"`;
   `Her eyebrows arched, as if she were annoyed....`;
   Takeshi`"Hey..."`;
   Takeshi`"You're not hiding anything, are you?"`;
   Takeshi`"Food..."`;
   `I reached out for her chest.`;
   Tsugumi(T7T024)`"S-s-stop it!"`;
   `She quickly covered herself with her arms.`;
   Tsugumi(T7T025)`"You aren't going to eat Chami are you?"`;
   Tsugumi(T7T026)`"You can't! I won't let you!!"`;
   Takeshi`"As if I would, stupid..."`;

});
bgload({ name: `EV_TU14A`, transition: 10 });
showTextbox();
text(() => {
   Tsugumi(T7T027)`"Don't call me stupid, stupid..."`;
   `Her expression returned to normal.`;
   `She undid a few of her buttons and let Chami out from her shirt.`;
   Tsugumi(T7T028)`"I'm sorry for keeping you in there the whole time, Chami."`;
   Tsugumi(T7T029)`"It's okay, you can go play now..."`;
   `Chami sniffed the air as he rode in the palm of Tsugumi's hand. He suddenly jumped to the floor and ran into the corner of the room.`;
   Takeshi`"........."`;
   `I watched the whole time.`;

});
bgload({ name: `EV_TU14B`, transition: 10 });
showTextbox();
text(() => {
   Tsugumi(T7T030)`"Ah...Takeshi..."`;
   `Tsugumi spoke to me as she redid her buttons.`;
   Tsugumi(T7T031)`"You were watching, weren't you?"`;
   Takeshi`"What?"`;
   Tsugumi(T7T032)`"What do you mean 'what?'...When I was..."`;
   Tsugumi(T7T033)`"Did you want to see more?"`;
   Takeshi`"More what?"`;
   Tsugumi(T7T034)`"...Forget it, you...jerk."`;

});
bgload({ name: `EV_TU14A`, transition: 10 });
showTextbox();
text(() => {
   Takeshi`"........."`;
   Tsugumi`"........."`;

});
bgload({ name: `BG34A1`, transition: 20 });
playSFX({ name: `SE06_00`, a1: 0, volume: 95 });
eff_4f = 153;
eff_3b = 1;
eff_3c = VAR_c3_0_6;
eff_3d = 1;
eff_3e = 2;
eff_3f = VAR_c3_0_6;
eff_40 = 1;
openShakeScreenAnim();
showTextbox();
text(() => {
   `Ga-ga-ga-gong....`;
   `A low vibrating sound shot across the room.`;
   `The bed shook slightly...`;

});
bgload({ name: `EV_TU14A`, transition: 10 });
closeShakeScreenAnim();
showTextbox();
text(() => {
   Tsugumi(T7T035)`"It's okay..."`;
   `She looked up for a second, then quickly returned her gaze.`;
   Tsugumi(T7T036)`"Don't worry, alright?"`;
   Tsugumi(T7T037)`"We're okay for now...I think."`;
   Tsugumi(T7T038)`"Yeah, we'll be fine, I know it."`;
   Tsugumi(T7T039)`"I don't have any proof, but..."`;
   Takeshi`"........."`;
   Tsugumi(T7T040)`"Ha, ha, I'm even starting to talk like you now."`;
   Tsugumi(T7T041)`"There must be something wrong with me..."`;
   Takeshi`"........."`;

});
hideTextbox();
stopBGM();
playSFX({ name: `SE05_11`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   Takeshi`"Aaah!"`;
   `I sat up quickly.`;
   `And I grabbed hard onto Tsugumi's hand.`;

});
bgload({ name: `EV_TU14B`, transition: 20 });
showTextbox();
text(() => {
   Tsugumi(T7T042)`"Wh-what is it!?"`;
   Takeshi`"I know, Tsugumi!"`;
   Tsugumi(T7T043)`"W-what?"`;
   Takeshi`"This is incredible!"`;
   Tsugumi(T7T044)`"W-what are you talking about...?"`;
   `Flustered, Tsugumi's cheeks changing color in her confusion.`;
   Takeshi`"I've made a major discovery!"`;
   `I brought her hand close to me.`;
   `Tsugumi's face was right next to mine.`;
   Takeshi`"Alright, listen up!"`;
   Tsugumi(T7T045)`"O-okay..."`;
   Takeshi`"I know where that great smell is coming from..."`;
   Takeshi`"It is—"`;

});
hideTextbox();
playBGM({ num: 7, volume: 100 });
showTextbox();
text(() => {
   Takeshi`"You!!"`;

});
bgload({ name: `EV_TU14A`, transition: 10 });
showTextbox();
text(() => {
   Tsugumi(T7T046)`"...Huh?"`;
   Tsugumi(T7T047)`"Huh? What!?"`;
   Takeshi`"You're what smells so great..."`;
   Takeshi`"Geez you smell good..."`;
   Takeshi`"What a sweet smell..."`;
   Takeshi`"Perfect. Let me have just one bite..."`;

});
bgload({ name: `BG34A1`, transition: 20 });
showTextbox();
text(() => {
   Tsugumi(T7T048)`"W-what are you doing...?"`;
   Tsugumi(T7T049)`"S-stop it...let go of me. Let me go..."`;
   Tsugumi(T7T050)`"OW..."`;
   Tsugumi(T7T051)`"You idiot! Cut it out!!"`;

});
hideTextbox();
playSFX({ name: `SE05_00`, a1: 0, volume: 100 });
shakeScreen();
showTextbox();
text(() => {
   `SMACK!`;
   Takeshi`"Owwww!"`;
   Tsugumi`"........."`;
   Takeshi`"Hey, did you really have to smack me?"`;
   Tsugumi(T7T052)`"Well..."`;
   Takeshi`"Hey, I'm an injured man here."`;
   Tsugumi(T7T053)`"Well act like one...and lie there quietly..."`;
   Takeshi`"........."`;
   Tsugumi(T7T054)`"Jerk."`;

});
bgload({ name: `EV_TU14B`, transition: 20 });
showTextbox();
text(() => {
   Tsugumi(T7T055)`"What were you thinking biting on my finger like that...?"`;
   `My teeth had left an imprint on her finger.`;
   Takeshi`"Thank you..."`;
   Takeshi`"I'm still hungry, but I feel a lot better."`;
   `I couldn't keep sitting up, so I lay down in bed again.`;
   Tsugumi(T7T056)`"I can't believe you did that..."`;
   `The tears that had dried up just a bit ago were in Tsugumi's eyes again.`;
   Takeshi`"Ha, ha, ha..."`;
   `I laughed at the situation.`;
   `There wasn't much strength left in me, but I laughed anyway.`;
   Takeshi`"I am a man of insatiable desires."`;
   Takeshi`"When I get hungry, I stuff my face..."`;
   Takeshi`"When I get sleepy, I sleep like a bear..."`;
   Takeshi`"And give me a chance and I'll be thinking about hanky panky..."`;
   Takeshi`"It's all I think about."`;
   Takeshi`"I'm beyond salvation, right?"`;
   Tsugumi(T7T057)`"Yeah..."`;
   Tsugumi(T7T058)`"You're an idiot is what you are..."`;
   `She tried to smile back at me.`;
   `Her voice dried up and tears began to fall.`;
   Takeshi`"Ahh, I'm such an idiot."`;
   Takeshi`"Come on, laugh at a fool like me, will you?"`;
   Tsugumi(T7T059)`"Yeah...you are an idiot..."`;
   `Tsugumi laughed.`;
   Tsugumi(T7T060)`"You are the world's biggest idiot..."`;
   Tsugumi(T7T061)`"I can't believe how stupid you are..."`;
   Tsugumi(T7T062)`"And it never stops..."`;

});
bgload({ name: `EV_TU14C`, transition: 0 });
stopBGM();
showTextbox();
text(() => {
   Tsugumi(T7T063)`"How did you ever get to be so dumb..."`;
   `She was smiling...`;
   `But her tears wouldn't stop falling.`;

});
hideTextbox();
playBGM({ num: 19, volume: 100 });
showTextbox();
text(() => {
   Takeshi`"No reason I guess."`;
   Takeshi`"I'm just trying to live all out."`;
   Takeshi`"Because I don't want to die."`;
   Tsugumi(T7T064)`"...Really?"`;
   Tsugumi(T7T065)`"That's it...?"`;
   `The tears continued to fall.`;
   Takeshi`"I..."`;
   Takeshi`"I think there were some things that I was taking too lightly."`;
   Takeshi`"There are people who go on living even when they want to die."`;
   Takeshi`"And people that die who want to keep on living."`;
   Takeshi`"I had no idea that was how things were."`;
   Takeshi`"I guess I was pretty naive about the way the world works..."`;
   Takeshi`"Until coming to LeMU, that is."`;
   Tsugumi`"........."`;
   Takeshi`"But then I met you..."`;
   Takeshi`"And the way that I thought about things changed."`;
   Takeshi`"The world isn't always filled with good things."`;
   Tsugumi(T7T066)`"Yeah..."`;
   `She nodded.`;
   `I calmly wiped away her tears.`;
   Takeshi`"But..."`;
   Takeshi`"I don't want you to think that living is something to be embarrassed about, or something that you hate."`;
   Takeshi`"I think as long as you are alive, it is okay to live."`;
   Takeshi`"I think there are good things waiting for you."`;
   Takeshi`"Wait...not just that, that being alive is a good thing in itself."`;
   Takeshi`"In that way, my thinking still hasn't changed."`;
   Tsugumi(T7T067)`"...Yeah..."`;
   `She nodded.`;
   `We held each other's hands.`;

});
bgload({ name: `BG34A1`, transition: 20 });
showTextbox();
text(() => {
   Takeshi`"I don't know how to say it, but..."`;
   `I looked up at toward the heavens I couldn't see.`;
   `I didn't know if there was 'something above.'`;
   `Didn't know if it really mattered.`;
   `Maybe all I had to do was accept.`;
   Takeshi`"The reason we keep living, in other words..."`;
   Takeshi`"What does it mean to die?"`;
   Takeshi`"Does everything really end when we die?"`;
   Takeshi`"Until you can stare—"`;
   Takeshi`"...really STARE reality in the face, I think you should wait."`;
   Takeshi`"Put it on hold."`;
   Takeshi`"It isn't time for me to die yet."`;
   Takeshi`"I just can't die yet. You can't either, and neither can any of the rest of us."`;
   Takeshi`"Until that time comes..."`;
   Takeshi`"All of us should live."`;
   Tsugumi`"........."`;
   Tsugumi(T7T068)`"Yeah..."`;
   `She...`;
   `Nodded as if in deep understanding.`;

});
bgload({ name: `EV_TU14D`, transition: 0 });
showTextbox();
text(() => {
   Takeshi`"Hey, Tsugumi..."`;
   Tsugumi(T7T069)`"Whaaat?"`;
   `I looked deeply into her eyes.`;
   `I was trying to see if there was light inside there.`;
   `I wanted to get as close as I could and see.`;
   Takeshi`"Hey...you're bleeding from your finger."`;
   Tsugumi(T7T070)`"Well you...bit me earlier, right?"`;
   Takeshi`"Is that so...?"`;
   Tsugumi(T7T071)`"Yes that is SO."`;
   Takeshi`"I'm sorry."`;
   Tsugumi`"........."`;
   `Tsugumi's face was close enough so that we were almost touching noses.`;
   `Closer...`;
   `Even closer still`;
   Takeshi`"Ah...!"`;
   Tsugumi(T7T072)`"Now what is it?"`;
   Takeshi`"You've got blood on your lips."`;
   Tsugumi(T7T073)`"Really?"`;
   Takeshi`"That's not my fault."`;
   Tsugumi(T7T074)`"...Are you being serious? Blood..."`;
   Takeshi`"Yeah."`;
   Tsugumi(T7T075)`"You're lying...?"`;
   Takeshi`"Um..."`;
   Tsugumi(T7T076)`"Um...maybe you're right."`;
   Takeshi`"........."`;
   Tsugumi(T7T077)`"It was probably from when the building shook earlier."`;
   Takeshi`"Looks painful."`;
   Tsugumi(T7T078)`"Well...if it hurts, it's your fault, Takeshi."`;
   Takeshi`"You think so...?"`;
   Tsugumi(T7T079)`"Yeah..."`;
   Takeshi`"...Maybe you're right."`;
   Tsugumi(T7T080)`"How are you going to make up for it?"`;

});
removeBG({ mode: WHITE, transition: 2 });
showTextbox();
text(() => {
   `She pressed her lips tightly on mine.`;
   `I could smell her scent.`;
   `I could taste her blood.`;
   `Taste her tears.`;
   `She bit down on my lower lip.`;
   `And my blood started to flow.`;
   `We were pressed together as tightly as we could be...`;
   `Embracing one another with everything we had.`;
   `Our bodies came together, became one.`;
   `I felt her breathing.`;
   `I felt the beating of her heart.`;
   `I felt the warmth of her body.`;
   `The scent of her.`;
   `A musky smell...`;
   `Enough to make me dizzy...`;
   `It was sweet...`;
   `Such a sweet smell...`;

});
removeBG({ mode: BLACK, transition: 1 });
stopBGM();
delay({ interval: 150 });
showTextbox();
text(() => {
   `..............`;
   `.......`;
   Tsugumi(T7T081)`"Hmm..."`;
   Tsugumi(T7T082)`"Takeshi..."`;
   Tsugumi(T7T083)`"Takeshi, get up."`;
   Tsugumi(T7T084)`"The taxi's here."`;

});
bgload({ name: `BG34A1`, transition: 20 });
playBGM({ num: 7, volume: 100 });
showTextbox();
text(() => {
   Takeshi`"Oh, yeah..."`;
   `I jumped out of the bed and stood up.`;
   `I stretched my arms and loosened my shoulders.`;
   `I felt pretty good.`;
   `I took a deep breath as I fixed my clothes rumpled during sleep.`;
   `My mind was firing and my head felt clear.`;

});
fgload({ id: 1, name: `TU02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T7T085)`"Chami. Chami...come here."`;
   Tsugumi(T7T086)`"Come on, we've got to get going now."`;
   `Tsugumi scooped up Chami, who'd been running around on the floor, and held him to her chest.`;

});
fgload({ id: 1, name: `TU06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T7T087)`"Huh...?"`;
   `Stooped down, Tsugumi let out a cry of alarm.`;
   Takeshi`"What's wrong Tsugumi?"`;
   Tsugumi(T7T088)`"Takeshi...under the bed."`;
   Takeshi`"Under the bed? Mine?"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `She nodded.`;
   `I looked under the bed I had been sleeping on.`;
   `Something was lying there...`;
   `I reached out and pulled whatever it was closer to me.`;
   Takeshi`"Huh??"`;

});
fgload({ id: 1, name: `TU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T7T089)`"Pipi..."`;
   `It was Pipi...`;
   Takeshi`"Hey Pipi, what's going on? What are you doing here?"`;
   Pipi`"........."`;
   `Pipi didn't respond. `;
   `All of the color had vanished from his eyes.`;
   `He didn't move at all. `;
   `Pipi was frozen...as if he were dead.`;
   `There was something stuck fast in his mouth.`;
   `I took it out gently.`;

});
bgload({ name: `IT09A`, transition: 20 });
showTextbox();
text(() => {
   `It was a disk...a terabyte disk made of polycarbonate.`;
   `I put the disk Pipi had been carrying in my pocket.`;

});
hideTextbox();
bgload({ name: `BG34A1`, transition: 20 });
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE06_04`, a1: 0, volume: 100 });
eff_4f = 153;
eff_3b = 1;
eff_3c = VAR_cb_0_6;
eff_3d = 7;
eff_3e = 2;
eff_3f = VAR_c6_0_6;
eff_40 = 4;
openShakeScreenAnim();
showTextbox();
text(() => {
   `—Boooooooommm!!!`;
   `With a roaring sound, the whole room suddenly shook violently.`;

});
hideTextbox();
playSFX({ name: `SE09_00L`, a1: 0, volume: 90 });
eff_4f = 0;
eff_3b = 1;
eff_3c = VAR_c3_0_6;
eff_3d = 1;
eff_3e = 2;
eff_3f = VAR_c3_0_6;
eff_40 = 1;
openShakeScreenAnim();
showTextbox();
text(() => {
   Announcement(T7T090A)`"Five minutes ${waitVoice}${voice(T7T090B)}until implosion."`;

});
showTextbox();
text(() => {
   Takeshi`"Hey, WHAT did that announcement just say!?"`;
   `Holding Pipi under my arm, I looked up at the ceiling.`;
   `Tsugumi quickly got up.`;

});
fgload({ id: 1, name: `TU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T7T091)`"We've got five minutes...until this place implodes."`;
   Takeshi`"FIVE MINUTES!?"`;
   Takeshi`"Give me a break!"`;
   Takeshi`"Why do they gotta tell us when there's only FIVE minutes left."`;
   Takeshi`"Give us some more warning...for cryin' out loud!"`;
   `I started mumbling complaints to myself.`;
   `Maybe it was mostly for show...`;

});
hideTextbox();
fgload({ id: 1, name: `TU17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T7T092)`"*Sigh*..."`;
   `Tsugumi let out a big sigh.`;

});
fgload({ id: 1, name: `TU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T7T093)`"Anyway, we've only got five minutes."`;
   `Tsugumi shrugged her shoulders exaggeratedly and stared at me.`;

});
fgload({ id: 1, name: `TU10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `But for some reason...she seemed to be smiling.`;
   Tsugumi(T7T094)`"You've just got to accept reality. You could learn something from me, you know?"`;
   Takeshi`"Ha, ha, ha, listen to yourself, Tsugumi."`;
   Takeshi`"Telling jokes at a time like this is more MY style, don't you think?"`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TU10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T7T095)`"Ha, ha. Well, I guess you're right..."`;
   Tsugumi(T7T096)`"But we should be okay if we've got five minutes, right?"`;
   `A smile floated to her lips and Tsugumi held out a hand to me.`;
   Takeshi`"Of course."`;
   `I took her hand firmly.`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeFG({ id: 1, useAnim: false });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
playSFX({ name: `SE09_00L`, a1: 0, volume: 95 });
eff_4f = 0;
eff_3b = 1;
eff_3c = VAR_c6_0_6;
eff_3d = 4;
eff_3e = 2;
eff_3f = VAR_c6_0_6;
eff_40 = 4;
bgload({ name: `BG35A1`, transition: 20 });
showTextbox();
text(() => {
   Announcement(T7T097A)`"Four minutes ${waitVoice}${voice(T7T097B)}until implosion."`;

});
showTextbox();
text(() => {
   `The shaking and rumbling of IBF continued.`;
   `I could hear the sound of the water rushing in and striking against the watertight hatches somewhere.`;
   `Ominous metallic sounds rang out from above, and I wouldn't have been surprised it the ceiling had suddenly ruptured.`;
   `But still, we ran without stopping.`;
   `We were running to get out of there.`;
   `I held onto Tsugumi's hand the whole time...`;
   `Her body moved fluidly as she ran.`;
   `We ran in sync with one another...`;
   `We passed through a door that stood wide open at the end of the passage.`;

});
removeBG({ mode: BLACK, transition: 2 });
closeShakeScreenAnim();
stopBGM();
bgload({ name: `BG33A5`, transition: 20 });
showTextbox();
text(() => {
   `And on top of the pool, which looked like it was threatening to overflow at any moment—`;

});
hideTextbox();
stopSFX()
bgload({ name: `BG33A1`, transition: 20 });
playBGM({ num: 20, volume: 100 });
showTextbox();
text(() => {
   `Our mini-sub was waiting for us.`;
   Takeshi`"Yes! At least something's going right..."`;
   Takeshi`"The taxi's even waiting for us!"`;

});
fgload({ id: 1, name: `TU01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T7T098)`"Well, of course."`;
   `Tsugumi looked at me with a smug face and said...`;
   Tsugumi(T7T099)`"It's a TAXI..."`;
   Tsugumi(T7T100)`"They aren't going to just leave us high-tipping customers here."`;
   Takeshi`"Oh yeah you're right...Oh NO!!!"`;

});
fgload({ id: 1, name: `TU06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T7T101)`"What's wrong?"`;
   Takeshi`"I forgot my wallet!!"`;

});
fgload({ id: 1, name: `TU10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T7T102)`"You idiot..."`;
   Tsugumi(T7T103)`"Well, we'll put it on your tab."`;
   Takeshi`"Oh, okay..."`;
   Takeshi`"Yeah, in Leiblich's name."`;

});
fgload({ id: 1, name: `TU02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T7T104)`"Well of course."`;

});
showTextbox();
text(() => {
   Announcement(T7T105A)`"Three minutes ${waitVoice}${voice(T7T105B)}until implosion."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Three minutes until implosion.`;
   `We scrambled to the sub and jumped down the hatch.`;

});
removeBG({ mode: WHITE, transition: 2 });
showTextbox();
text(() => {
   `The controls were simple.`;
   `We closed the hatch on the top by pressing a button.`;
   `The submarine slipped out from the pool and into the middle of the ocean.`;
   `The ocean currents quickly pushed us out to sea.`;
   `Away from the sinking LeMU...`;
   `Yes...`;
   `LeMU was...`;
   `Paradise was...`;
   `Our home for seven days was...`;

});
hideTextbox();
playSFX({ name: `SE07_12`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Warping and folding on itself, like some kind of a crumpled old newspaper.`;
   `It scattered as it collapsed, like a child's wooden blocks that hadn't been stacked properly...`;
   `Letting out its final breath of bubbles...`;
   `It disappeared to the bottom of the deep blue sea.`;

});
removeBG({ mode: BLACK, transition: 0 });
showTextbox();
text(() => {
   `We were moving up.`;
   `The small, fragile egg we were in floated quietly toward the surface.`;

});
hideTextbox();
stopSFX()
bgload({ name: `EV_TU15A`, transition: 10 });
showTextbox();
text(() => {
   Tsugumi(T7T106)`"What...do we do from here?"`;
   `Tsugumi asked in a quiet voice.`;
   Takeshi`"There's so much that I want to do."`;
   `I said, as I placed the motionless Pipi, on the seat next to me.`;
   Takeshi`"But, first..."`;
   Takeshi`"I'm thinking more about where to start."`;
   Tsugumi(T7T107)`"Hmmm..."`;
   Takeshi`"What about you Tsugumi, what do you want to do?"`;
   Tsugumi`"........."`;
   Takeshi`"What you didn't like the question?"`;
   Tsugumi(T7T108)`"No, it's not that."`;
   Tsugumi`"........."`;
   Tsugumi(T7T109)`"Can I have a minute to think about it?"`;
   Takeshi`"Sure."`;

});
hideTextbox();
stopBGM();
playSFX({ name: `SE10_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Wham...`;
   Takeshi`"...???"`;

});
bgload({ name: `EV_TU15B`, transition: 10 });
showTextbox();
text(() => {
   Tsugumi(T7T110)`"What was that sound?"`;
   Takeshi`"I...dunno."`;

});
playSFX({ name: `SE03_03`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Beep, Beep.....`;
   `The operating console made a funny sound.`;
   Tsugumi(T7T111)`"What's that noise...?"`;
   Takeshi`"No clue..."`;
   Takeshi`"Hey, something just came up on that screen over there."`;
   `The monitor behind Tsugumi started blinking.`;
   Tsugumi(T7T112)`"What does it say...?"`;
   Takeshi`"You're closer than I am, why don't you turn around and look at it yourself."`;
   Tsugumi(T7T113)`"N...no..."`;
   Tsugumi(T7T114)`"I don't want to see it..."`;
   Tsugumi(T7T115)`"I've got...a really bad feeling about this."`;
   Takeshi`"Don't be so selfish."`;
   `Not left with any other choice, I peeked at the monitor.`;
   Takeshi`"Ah...which one, which one..."`;
   Takeshi`"Uumm..."`;
   Takeshi`"'Low battery...'"`;
   Takeshi`"...That's what it says."`;
   Tsugumi`"........."`;

});
hideTextbox();
playBGM({ num: 13, volume: 100 });
bgload({ name: `EV_TU15C`, transition: 20 });
showTextbox();
text(() => {
   `The lights in the sub suddenly went out.`;
   `The monitor went dark.`;
   `All of the power went out.`;
   `The electrical equipment went silent.`;
   `The only thing still working was the analog pressure gauge.`;
   `Present depth—189 feet`;
   `Internal pressure—12.5 Atmospheres`;
   `The submarine was set to saturation diving specifications.`;
   `The pressure on the inside was higher than the pressure on the outside.`;
   Tsugumi(T7T116)`"Ta-Takeshi..."`;
   Takeshi`"It's okay. We're going to be fine."`;
   Takeshi`"Stop looking like you're going to cry."`;
   `Depth—192 feet.`;
   `We had lost our upward momentum...`;
   `The submarine began sinking slowly, very slowly.`;
   `Residual air pressure: 0`;
   `Ballast tank: Unable to drain.`;
   Takeshi`"Wonderful, we hitched a ride on a junker..."`;
   Takeshi`"You know, this cab always seems to stall on these country roads..."`;
   Takeshi`"I'm terribly sorry ma'am..."`;
   Tsugumi`"........."`;
   `Depth—195 feet.`;
   `Takeshi looked at the aft hatch.`;
   `It had a two-ply hatch...`;
   `The inner side was made of reinforced glass and FRP while the outer side had a door made from high-strength steel.`;
   Takeshi`"Hey, you think if we let some of the high pressure gas out of the hatch we'd start rising again?"`;
   Tsugumi(T7T117)`"No..."`;
   Tsugumi(T7T118)`"I don't think we'll go straight up and our momentum would be limited. "`;
   Tsugumi(T7T119)`"Not to mention the fact that if we do that, we'll start flooding..."`;
   Tsugumi(T7T120)`"Because we don't have any spare compressed air."`;
   Tsugumi(T7T121)`"And we don't have enough buoyancy in the main fuselage."`;
   Takeshi`"Buoyancy..."`;
   Tsugumi(T7T122)`"We've got to get rid of ballast..."`;
   Takeshi`"Ballast..."`;
   `Depth—198 feet.`;
   Tsugumi(T7T123)`"The valve used to release ballast is usually electronically controlled."`;
   Tsugumi(T7T124)`"But now, we're..."`;
   Takeshi`"Alright, let's just stay calm."`;
   Takeshi`"Judging by how fast we're sinking... we only need to be a little bit lighter, right?"`;
   Takeshi`"If we can get rid of about 100 pounds or more, we should be fine."`;
   Takeshi`"Let's try pulling out a few of those machines over there? That should make us lighter."`;
   Tsugumi(T7T125)`"You think it's going to be easy?"`;
   Takeshi`"Well...they seem to be welded on fairly good. Probably not easy to do bare-handed."`;
   Takeshi`"And unfortunately we don't have any tools..."`;
   Tsugumi(T7T126)`"So that's it, huh..."`;
   `Tsugumi bit her lip and looked down.`;
   Takeshi`"Yeah..."`;
   Takeshi`"We're screwed..."`;
   `Depth—201 feet.`;
   `Sinking...`;
   `We were sinking...`;

});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   Tsugumi(T7T127)`"Looks like we celebrated too soon..."`;
   Tsugumi(T7T128)`"Doesn't it..."`;
   Tsugumi(T7T129)`"Ha, ha, ha..."`;
   `Her shoulders shook from disappointment...and she laughed without conviction.`;
   Tsugumi(T7T130)`"So stupid..."`;
   Tsugumi(T7T131)`"I'm so stupid..."`;
   Takeshi`"........."`;

});
removeBG({ mode: BLACK, transition: 2 });
dimOff_ac = 1;
closeDimOverlay();
stopBGM();
playSFX({ name: `SE00_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   Tsugumi(T7T132)`"Ah!?"`;
   `She audibly sucked in her breath.`;
   Tsugumi(T7T133)`"W-what are you doing Takeshi!?"`;
   Takeshi`"What...you can't tell by looking?"`;
   Takeshi`"I'm opening the hatch."`;
   Tsugumi(T7T134)`"That's why I'm asking you! What are you doing!"`;
   Takeshi`"Do you even need to ask?"`;

});
hideTextbox();
playBGM({ num: 21, volume: 100 });
showTextbox();
text(() => {
   `Depth—204 feet.`;
   Tsugumi(T7T135)`"Stop it!!"`;
   Tsugumi(T7T136)`"What are you planning to do!?"`;
   `Tsugumi grabbed onto my arm.`;
   Takeshi`"Don't try to stop me..."`;

});
playSFX({ name: `SE10_10`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I threw off Tsugumi's arm and raised the glass hatch.`;
   `It was just large enough for one person to go through.`;
   Takeshi`"Please don't touch me..."`;
   Takeshi`"Don't touch me."`;
   Tsugumi(T7T137)`"No! I won't let you go!"`;

});
playSFX({ name: `SE00_04`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `Tsugumi grabbed onto my arm firmly. The hatch was closing.`;
   Tsugumi(T7T138)`"I don't care if I die...I'm not letting go."`;
   Takeshi`"........."`;
   `Depth—207 feet.`;
   `Slowly and steadily we fell.`;
   `We wouldn't stop sinking.`;
   Takeshi`"Hmmm..."`;
   Takeshi`"You know you really are selfish."`;
   Tsugumi`"........."`;
   Takeshi`"........."`;
   `I thought for a bit...`;
   `And slowly opened my mouth.`;
   Takeshi`"Hey, Tsugumi...?"`;
   Tsugumi`"........."`;
   Takeshi`"Do you know what the Archimedes principle is?"`;
   Tsugumi(T7T139)`"Huh?"`;
   `Surprised, for a moment Tsugumi's grip relaxed.`;

});
removeBG({ mode: WHITE, transition: 2 });
showTextbox();
text(() => {
   `In that brief instant, I tore myself forcefully away from her grasp.`;

});
playSFX({ name: `SE00_09`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I quickly opened the glass hatch, and slipped to the back of the airlock.`;
   `After I jumped inside it was surprisingly easy to close the hatch from the inside.`;

});
playSFX({ name: `SE00_02`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `Once the hatch was closed, I shut the latch right away.`;
   `Depth—210 feet.`;

});
eff_41 = 6;
eff_42 = 68;
eff_50 = 0;
showDimInAndOutAnim();
bgload({ name: `EV_TU16A`, transition: 0 });
showTextbox();
text(() => {
   `Tsugumi was stunned...`;
   `Her eyes were opened up as wide as they would go, and she stared at me from the other side of the glass.`;
   Tsugumi(T7T140)`"Takeshi! Takeshi!"`;
   Tsugumi(T7T141)`"What are you doing? Open it up! Get out of there!"`;

});
hideTextbox();
playSFX({ name: `SE00_13`, a1: 0, volume: 100 });
shakeScreen();
showTextbox();
text(() => {
   `Tsugumi wildly pounded on the reinforced glass with her fist.`;

});
hideTextbox();
playSFX({ name: `SE10_10`, a1: 0, volume: 90 });
shakeScreenHard();
showTextbox();
text(() => {
   `She tried as hard as she could to pull up the lever, but was unable to.`;
   Takeshi`"Tsugumi...what are you saying?"`;
   Takeshi`"The glass is pretty thick you know, I really can't hear very well."`;

});
hideTextbox();
playSFX({ name: `SE00_13`, a1: 0, volume: 100 });
shakeScreen();
showTextbox();
text(() => {
   Tsugumi(T7T142)`"You stupid idiot! Open it up this instant!"`;
   Tsugumi(T7T143)`"What are you thinkiiing!"`;
   `Tears started falling from Tsugumi's wide-open eyes.`;
   `Drops fell in a constant stream.`;

});
hideTextbox();
playSFX({ name: `SE00_13`, a1: 0, volume: 100 });
shakeScreen();
showTextbox();
text(() => {
   `Her tears and her fist pounded against the glass.`;
   `The glass creaked as she hit it.`;
   `Depth—213 feet.`;
   Takeshi`"Hey, wait a second didn't you..."`;
   Takeshi`"I thought you knew about Archimedes' principle ?"`;
   Takeshi`"I mean, I think you were the one that taught me about it."`;
   Takeshi`"I guess you'd know that. Sorry. Ha, ha, ha..."`;

});
hideTextbox();
playSFX({ name: `SE10_10`, a1: 0, volume: 90 });
shakeScreenHard();
showTextbox();
text(() => {
   Tsugumi(T7T144)`"This isn't funny! Stop joking!"`;
   Tsugumi(T7T145)`"This isn't...it's not about that!!"`;
   Tsugumi(T7T146)`"You fool...Takeshi you idiot!!!"`;
   `Tsugumi sobbed as she screamed.`;
   Takeshi`"Yeah, I'm an idiot—The biggest one there is!"`;
   Takeshi`"You didn't know that? Tsugumi..."`;
   `Depth—216 feet.`;

});
hideTextbox();
playSFX({ name: `SE00_13`, a1: 0, volume: 100 });
shakeScreen();
showTextbox();
text(() => {
   `No matter how hard she pounded on the glass, it didn't break.`;
   `The hatch wouldn't open, and it wouldn't break either.`;
   `It looked fairly sturdy.`;
   `It made me feel good to know that it would hold.`;
   Takeshi`"Well, anyway..."`;
   Takeshi`"We gotta make sure this little egg stays afloat."`;
   `I put one hand behind me on the other hatch.`;
   `If I could open it up, she'd be safe...`;

});
playSFX({ name: `SE00_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I slowly turned the handle.`;
   Tsugumi(T7T147)`"Ta...Takeshi...?"`;
   `Tsugumi stopped hitting the glass.`;
   Tsugumi(T7T148)`"No..."`;
   Tsugumi(T7T149)`"Do you really..."`;
   Tsugumi(T7T150)`"Want... to... die...?"`;

});
playSFX({ name: `SE00_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   Takeshi`"Don't worry."`;
   `I didn't look away when I spoke to her, and said firmly...`;
   Takeshi`"I may be stupid but..."`;
   Takeshi`"I'm not that stupid."`;
   `Depth—219 feet.`;

});
playSFX({ name: `SE00_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I kept turning the handle with my other hand.`;
   `Just a little more.`;
   Tsugumi(T7T151)`"Please..."`;
   Tsugumi(T7T152)`"Don't leave me..."`;
   Tsugumi(T7T153)`"Don't leave me all by myself!"`;
   Takeshi`"There you go, always worrying..."`;
   `I forced a smile.`;
   Takeshi`"I keep telling you, it's going to be okay, right?"`;
   Tsugumi(T7T154)`"Yes..."`;
   Takeshi`"You want to live, don't you...?"`;
   Tsugumi(T7T155)`"Yes..."`;
   Takeshi`"So live!"`;
   Takeshi`"As long as you're alive, live!"`;
   Takeshi`"Don't worry..."`;
   Takeshi`"I?"`;
   Takeshi`"I'm not going to die."`;
   `—222 feet.`;

});
playSFX({ name: `SE00_02`, a1: 0, volume: 90 });
removeBG({ mode: WHITE, transition: 3 });
delay({ interval: 60 });
playSFX({ name: `SE10_17`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `The hatch on the bottom of the submarine opened.`;
   `The air, which had been compressed in the airlock, was jettisoned into the ocean.`;
   `My body shot out like a bullet into the water.`;

});
hideTextbox();
playSFX({ name: `SE00_08`, a1: 0, volume: 100 });
bgload({ name: `EV_TU16B`, transition: 0 });
showTextbox();
text(() => {
   Tsugumi(T7T156)`"........!!"`;
   `I could no longer hear her voice.`;
   `In the middle of the ocean, her voice wouldn't carry to me.`;
   `On the other side of the glass, I could make out her blurry outline.`;
   `Tsugumi's face was covered with tears. Her face was broken with sadness....`;
   `Her image refracted through the water.`;

});
hideTextbox();
monoColorOverlay({ interval: 3, color: WHITE });
closeDimInAndOutAndFilterAnim();
bgload({ name: `EV_SO11D`, transition: 26 });
setMonoColorOverlayFadeOutDuration(61);
fadeOutMonoColorOverlay();
unSkippableDelay(48);
showTextbox();
text(() => {
   `—225 feet.`;
   `I grabbed onto a rail on the outside of the submarine and steadied myself.`;
   `I closed the outside hatch.`;
   `I couldn't see her anymore.`;
   `Wouldn't be able to see her again.`;
   `—228 feet.`;
   `I let go of my last source of support.`;
   `And kicked the sub.`;
   `Released from its support, my body went flying.`;
   `Into a jet-black ocean filled with sparkling fragments of light.`;
   `—231 feet.`;
   `My consciousness was floating.`;
   `But my will steadfastly clung to my body. It was still there.`;
   `Even if it were threatening to turn to dust.`;
   `Even if it were threatening to be torn apart...`;
   `Live as long as you are alive.`;
   `That was what I wanted.`;
   `Maybe it was just stubbornness...`;
   `I was sinking to the bottom of the ocean.`;
   `My field of vision filled with white bubbles heading up toward the heavens.`;

});
bgload({ name: `IMG06A`, transition: 0 });
showTextbox();
text(() => {
   `I closed my eyes slowly.`;
   `That's when I realized for the first time that I was here.`;
   `I'm here.`;

});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   `I'm here.`;

});
showTextbox();
text(() => {
   `I   '    m        h     e    r    e.`;
   `My body dissolved in the ocean, mixing with it...becoming one with it.`;

});
hideTextbox();
monoColorOverlay({ interval: 18, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
dimOff_ac = 1;
closeDimOverlay();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
removeBG({ mode: BLACK, transition: 0 });
stopBGM();
delay({ interval: 150 });
g__tsugumi_gd_cleared = 1;
g_tsugumi_gd_cleared = 1;
l_ending = `tsugumi_gd`;
l_choice = 0;
jump(`Y_ED`);
