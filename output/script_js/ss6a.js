setDialogBoxColor(BLUE);
setSceneTitle({ index: 98 });
l_b0 = 0;
l_dayA = 0;
l_dayB = 0;
removeBG({ mode: BLACK, transition: 1 });
showTextbox();
text(() => {
   `I heard a song coming from somewhere...`;
   `It was a soft, but somehow lonely voice singing.`;

});
hideTextbox();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `${voice(S6A000)}
${noWait}`;
   Append(S6A001)`${center}${nextPage(0)}Moon sprite shouldering a long bow.${nextPage(1)}${waitVoice} ${noWait}`;
   `${voice(S6A002)}${center}${nextPage(0)}Waiting inside a dream.${nextPage(1)}${waitVoice} ${noWait}`;
   `${voice(S6A009)}${center}${nextPage(0)}Tonight a story by moonlight.${nextPage(1)}${waitVoice} ${noWait}`;
   `${voice(S6A004)}${center}${nextPage(0)}Hoping the wait will be short.${nextPage(1)}${waitVoice} ${noWait}`;
   `${voice(S6A005)}${center}${nextPage(0)}Sleeping curled and snug.${nextPage(1)}${waitVoice} ${noWait}`;
   `${center}${nextPage(0)}Sleeping in mother's arms.${nextPage(1)}${waitVoice}${noWait}`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `${voice(S6A006)}
${noWait}`;
   Append(S6A007)`${center}${nextPage(0)}Water sprite lifting a pair of paddles.${nextPage(1)}${waitVoice} ${noWait}`;
   `${voice(S6A008)}${center}${nextPage(0)}Waiting inside a dream.${nextPage(1)}${waitVoice} ${noWait}`;
   `${center}${nextPage(0)}Tonight the whirlpool demon, ${noWait}`;
   `${voice(S6A009)}${center}waiting for a boat${nextPage(1)}${waitVoice} ${noWait}`;
   `${voice(S6A010)}${center}${nextPage(0)}Hoping the wait will be short.${nextPage(1)}${waitVoice} ${noWait}`;
   `${voice(S6A011)}${center}${nextPage(0)}Rock, rock, rocked to sleep.${nextPage(1)}${waitVoice} ${noWait}`;
   `${center}${nextPage(0)}Sleeping, sleeping held by the ocean.${nextPage(1)}${waitVoice}${noWait}`;
   fadeClearPage();
});
hideTextbox();
l_b0 = 5;
l_dayA = 6;
l_dayB = 6;
chapterCutin({ name: `00000000` });
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `BG09A1`, transition: 26 });
hideTextbox();
ADV_Mode();
showDimOverlay();
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
clock(`10:26`);
showTextbox();
text(() => {
   `I awoke with a nostalgic feeling.`;
   `I found myself on a narrow bed in the infirmary.`;
   `Looking up at the white ceiling, I gently nodded off.`;
   `My memories slowly came back to me.`;
   `Flooding in the Cosmic Whale and saving Sara.`;
   `Sara coming back to life...`;
   `My fever worsening and then my collapsing.`;
   `I looked over to the bed next to mine.`;
   Kid`"Sara..."`;
   `Sara was asleep on the bed next to me.`;
   `Her breathing was regular and her cheeks flushed a healthy pink.`;
   `Feeling a bit relieved, I let myself half-doze.`;
   `From far away I could hear faint voices.`;
   `They seemed to come from an incredible distance, and were all jumbled together, but they sounded like Tsugumi and Takeshi.`;
   `Their voices echoed slightly.`;
   `The words were too faint for me to make out what they were saying.`;
   `They were talking about Hammel or Harmeln something. Words that I thought I had heard before, but the sounds quickly changed in my mind to meaningless garble.`;
   `After a while the voices stopped.`;
   `Out of habit, I touched my pinky to the thumb of my left hand.`;
   `It felt a bit strange.`;
   `I lifted my left hand and stared at the thumb.`;
   `Something was strange, out of place.`;

});
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
playBGM({ num: 16, volume: 100 });
showTextbox();
text(() => {
   `The blurriness of my vision suddenly came into focus.`;
   `The scar was gone!`;
   `Why? How could it be gone?`;
   `I hurriedly sat up.`;
   `I stared over my left hand again.`;
   `The scar was nowhere to be found.`;
   `I was sure there had been a scar there.`;
   `I remembered noticing it when I had opened the elevator to rescue Sara.`;
   `Had it just been a figment of my imagination?`;
   `No...I was sure it hadn't been. I was positive there had been a scar.`;
   `But...why had the scar suddenly vanished?`;
   `A sense of loss flooded through me making me feel like I had a gaping hole in my heart.`;
   `I sensed that I had lost something critically important, but I was unsure of what.`;
   `That was how I felt.`;
   Kid`"Sora! Sora!"`;
   `Forgetting that Sara was sleeping, I shouted out for Sora.`;
   Sora(S6A012)`"Yes, Kid. What is it?"`;
   `Sora's voice answered me.`;
   Kid`"Sora...did you do something to me?"`;
   Sora(S6A013)`"Something...what do you mean?"`;
   Kid`"Don't pretend you don't know! There was a...scar on my left hand!"`;
   Kid`"But...it's gone now!"`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S6A014)`"Oh, so that is what you mean."`;
   `Sora appeared in the entrance to the room.`;
   Kid`"What are you talking about?"`;

});
showTextbox();
text(() => {
   Sora(S6A015)`"While you were sleeping I extracted it."`;
   Kid`"Extracted what?"`;
   Sora(S6A016)`"Perhaps you should come over here."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I approached the examination table as Sora suggested.`;

});
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S6A017)`"This."`;
   `Sora pointed to a small shard suspended by a manipulator arm above the examination table.`;
   Sora(S6A018)`"This was embedded in your thumb, so I extracted it."`;
   Kid`"What...gave you the right to do that?"`;
   Kid`"It could have been a clue leading to my past!"`;
   `I let loose on Sora without thinking.`;

});
showTextbox();
text(() => {
   Sora(S6A019)`"Yes, you are exactly right."`;

});
fgload({ id: 1, name: `SO03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S6A020)`"However, no good can come of leaving a foreign object in your body to fester."`;

});
fgload({ id: 1, name: `SO10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S6A021)`"More importantly..."`;
   Sora(S6A022)`"Kid, do you recall seeing this fragment before?"`;
   Kid`"No! How could I?"`;
   `It didn't make sense to me why Sora would ask such a thing.`;
   Sora(S6A023)`"This fragment has an image recorded on it."`;
   `Sora continued speaking calmly.`;
   Kid`"An image?"`;
   Sora(S6A024)`"Would you like to see it?"`;
   `I pinched the shard that had been buried in my thumb between my fingers.`;
   Kid`"T-this...?"`;

});
bgload({ name: `EV_ET02C`, transition: 20 });
showTextbox();
text(() => {
   `It had the same holographic image as in Sara's pendant.`;
   `There was a picture of a man, floating there.`;
   Sora(S6A025)`"Can you see it?"`;
   Kid`"Yeah, I can see it..." `;
   Sora(S6A026)`"This hologram was designed so that it only can be seen when viewed with light of a certain wavelength."`;
   Sora(S6A027)`"Right now I am using LeMMIH to shine the proper light on it."`;
   Sora(S6A028)`"I could not confirm the date of manufacture of this hologram, but it is undoubtedly very old."`;
   Sora(S6A029)`"Its makeup is fundamentally different from the ones being sold at the LeMU's kiosks."`;
   Sora(S6A030)`"In the past, holograms were recorded using an interference pattern made from an object beam and a reference beam."`;
   Sora(S6A031)`"Put simply, the object beam is the light reflected off of the object."`;
   Sora(S6A032)`"The reference beam is the light that interferes with the object beam. Do you understand?"`;
   `Sora continued on without giving me time to think.`;
   Sora(S6A033)`"And now comes the important part..."`;
   Sora(S6A034)`"In order to make this hologram appear..."`;
   Sora(S6A035)`"Light, which is the same wavelength as the reference beam used to record the image, must be shined upon it."`;
   Sora(S6A036)`"So, to sum up, it is like this."`;
   Sora(S6A037)`"The image on this fragmented hologram was recorded using light that was a certain wavelength."`;
   Sora(S6A038)`"And in order to see the image you must shine light of the same wavelength on it."`;
   Sora(S6A039)`"It also cannot be seen under fluorescent light."`;
   Sora(S6A040)`"You must use light generated by a heat-emitting light source, such as sunlight or the flame of a lighter."`;
   Sora(S6A041)`"And..."`;

});
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   `Sora continued her explanation.`;
   `She said the special wavelength of light was infrared and around 850 nm.`;
   `And that ordinary people couldn't see infrared light.`;
   `She went on to say that if a person were able to see infrared they would even be able to see in the dark.`;
   `But that they could only see objects that emitted heat.`;
   `Put another way, objects that gave off heat also emitted infrared rays.`;
   `And if you could see infrared rays, then you could tell the temperature of something without having to touch it...`;

});
fgload({ id: 1, name: `SO10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S6A042)`"You would not be able to see this image unless you can see infrared light."`;
   Sora(S6A043)`"The fact that you can see this image means that you can see infrared light, Kid."`;
   Kid`"But...what about Sara? Does that mean that Sara can, too?"`;

});
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S6A044)`"Yes. Both of you have a very unique ability to see infrared light."`;
   `Thinking back on it, that probably explained why Takeshi and You couldn't see the image in the pendant.`;
   Kid`"But...why was this hologram in my finger...?"`;
   `I trembled as I said this.`;
   Kid`"It's the same image as in Sara's pendant..."`;
   Kid`"Are you saying that the missing piece of that pendant has been in my thumb?"`;

});
fgload({ id: 1, name: `SO05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S6A045)`"That is the only conceivable explanation."`;
   Sora(S6A046)`"The surface and shape of the fragment match the pendant perfectly."`;
   Kid`"But...why...?"`;

});
fgload({ id: 1, name: `SO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S6A047)`"That...Kid..."`;

});
showTextbox();
text(() => {
   Sora(S6A048)`"Is because you and Sara are siblings."`;
   Kid`"It can't be..."`;

});
showTextbox();
text(() => {
   Sora(S6A049)`"It is the same reason that you both have the ability to see infrared light."`;
   Sora(S6A050)`"It is probably because you both carry the same genes."`;
   Kid`"No..."`;
   Kid`"No...no...no..."`;

});
fgload({ id: 1, name: `SO07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S6A051)`"Kid. Why wouldn't that make you happy?"`;

});
fgload({ id: 1, name: `SO09ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S6A052)`"You have found a blood relative."`;
   Sora(S6A053)`"Is there any better way possible to recover your memory?"`;
   Kid`"No...no..."`;
   `I held my head and crouched down.`;

});
fgload({ id: 1, name: `SO10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S6A054)`"In either case, it is a fact and you should accept it."`;
   Sora(S6A055)`"While you two were asleep I performed a DNA analysis on both of you."`;
   Sora(S6A056)`"The results are indicated on the display."`;
   Sora(S6A057)`"The probability that you are brother and sister is...nearly 100 percent."`;
   Kid`"No...no...no...no...no...no... no...no...no...no...no...no...!"`;

});
eff_41 = 7;
eff_42 = 8;
eff_50 = 0;
showDimInAndOutAnim();
showTextbox();
text(() => {
   `Suddenly, the wall to my memory that I had tried so hard to destroy, but I had been unable to breach, crumbled.`;
   `Like a dam that was holding back the overflow of my memory, it burst, unleashing a torrent of images that flooded into my mind.`;
   Kid`"Uggghhh..."`;
   `Memories of my life, in no apparent order, flashed across my mind like random slides appearing on a screen.`;
   `From one to the next they floated up and vanished.`;
   `My mind couldn't handle the flood of memories.`;

});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
stopBGM();
closeDimInAndOutAndFilterAnim();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `And then came the darkness...`;
   `I heard a lullaby coming from somewhere...`;

});
hideTextbox();
playVoice($`S6A006`);
delay({ interval: 25 });
playVoice($`S6A007`);
delay({ interval: 68 });
playVoice($`S6A008`);
delay({ interval: 65 });
playVoice($`S6A009`);
delay({ interval: 56 });
playVoice($`S6A010`);
delay({ interval: 12 });
playVoice($`S6A011`);
hideTextbox();
monoColorOverlay({ interval: 18, color: WHITE });
setSceneTitle({ index: 99 });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(46);
fadeOutMonoColorOverlay();
unSkippableDelay(33);
showTextbox();
text(() => {
   `I groggily opened my eyes.`;
   `I was lying on a hard bed.`;

});
hideTextbox();
playVoice($`S6A058`);
showTextbox();
text(() => {
   `I heard a voice crying from outside.`;

});
bgload({ name: `EV_SA14A`, transition: 20 });
playBGM({ num: 22, volume: 97 });
showTextbox();
text(() => {
   `There was a girl surrounded by a group of bullies in an open space.`;
   `It was Sara.`;
   `The kids were being cruel, jeering her and making fun of her in only the way that kids can.`;
   `I ran up to Sara.`;

});
hideTextbox();
playVoice($`S6A059`);
playVoice($`S6A060`);
showTextbox();
text(() => {
   `The bullies scattered like baby spiders in the wind.`;
   `Sara said that her precious pendant had been broken.`;
   `Sara clutched the pendant firmly in her hand.`;
   `I bent over to pick up the fragment from it.`;

});
hideTextbox();
shakeScreen();
showTextbox();
text(() => {
   `I felt a sudden shock from behind.`;
   `I was plunged forward.`;
   `With a sharp pain the shard was buried in my thumb.`;

});
bgload({ name: `EV_SA14B`, transition: 10 });
playVoice($`S6A061`);
showTextbox();
text(() => {
   `The kids that always bullied Sara had encircled us.`;
   `The laughter and howls of our tormentors echoed around us.`;
   Kid`"You bullies! How could you do this to Sara?"`;
   `Forgetting myself, I lunged at the mob of kids.`;

});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
delay({ interval: 30 });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `They beat me mercilessly, and as I lay on the ground in that open space I faced skyward.`;
   `Satisfied with what they had done to me, the bullies had left.`;
   `Sara came and held out her hands to me.`;
   Sara(S6A062)`"You are so brave, brother."`;
   `She smiled as she said it.`;

});
hideTextbox();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `


${noWait}`;
   `${center}${nextPage(0)}Even though I lost.${nextPage(1)}`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   `Blood continued to drip from my finger.`;
   `Not wanting to worry Sara I pretended that everything was fine, and dismissed it as nothing.`;
   `I didn't say anything to our teacher.`;
   `I didn't go to the doctor. I just silently endured the pain.`;
   `It seemed to me that to tell someone of it would that mean I had lost.`;
   `In time, the wound closed up...`;
   `Then one day, a nice lady in a suit came.`;
   `She told us there was a place we could go where things would be better.`;
   `Saying this the lady held out her hand.`;
   `We could see things that other people couldn't.`;
   `At first we thought our abilities were normal, but everyone had shunned us.`;
   `The lady said she wanted to study us.`;
   `I decided to go along with the idea.`;
   `Our caretakers at the orphanage where lived happy see us leave, because they thought we were troublemakers.`;
   `We fell right into their trap.`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG37A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   `They locked us in a small hospital room.`;
   `Day in and day out we were marched from that room to the research institute.`;
   `At night moonlight would stream in from the lone window.`;
   `The only things I remember are the Leiblich logos on the doors we passed every day.`;
   `And the white frocks of the research employees.`;
   `And every night, the voice of Sara crying in the room next to me...`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `One day, there was something in the air that was different from other days.`;
   `We were taken from our rooms and led to a research office in a different area.`;
   `People who I'd never seen before took me away.`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgloadCrop({ name: `EV_SA14C`, transition: 26, x: 90, y: 67, hx: 620, hy: 472 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `Sara alone was left there.`;
   Sara(S6A063)`"Brother!"`;
   `I could hear Sara's screams.`;
   `I shook off the adult hands and ran to where Sara was.`;
   `The researchers tried to block my path.`;
   Kid`"Sara!"`;
   Sara(S6A064)`"Brother!"`;

});
bgloadCrop({ name: `EV_SA14C`, transition: 20, x: 72, y: 58, hx: 680, hy: 510 });
showTextbox();
text(() => {
   Kid`"Sara! Wait for me!"`;
   Kid`"I'll come back for you. I promise, I will come find you!"`;
   Kid`"Be a good girl and wait for me!"`;

});
bgloadCrop({ name: `EV_SA14C`, transition: 20, x: 17, y: 16, hx: 740, hy: 555 });
showTextbox();
text(() => {
   Sara(S6A065)`"I'll be good and wait for you..."`;
   Sara(S6A066)`"But come for sure. You come to get me for sure. Okay?"`;
   Sara(S6A067)`"I'll wait...I'll wait forever!"`;

});
hideTextbox();
bgload({ name: `EV_SA14C`, transition: 20 });
monoColorOverlay({ interval: 18, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
hideTextbox();
NVL_Mode();
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
showTextbox();
text(() => {
   `${noWait}`;
   `${center}${nextPage(0)}I had promised.${nextPage(1)}${wait(60)}${noWait}`;
   `${center}${nextPage(0)}That was how things were.${nextPage(1)}${wait(60)}${noWait}`;
   `${center}${nextPage(0)}Back then I had promised.${nextPage(1)}${wait(60)}${noWait}`;
   `${center}${nextPage(0)}I had promised to go get her.${nextPage(1)}${wait(60)}${noWait}`;
   `${center}${nextPage(0)}But...I hadn't gone.${nextPage(1)}${wait(60)}${noWait}`;
   `${center}${nextPage(0)}I couldn't go.${nextPage(1)}`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   `I was moved to another facility and, after a while, I was taken to a new home.`;
   `My foster parents were good people.`;
   `They were good to me if I didn't get out of line.`;
   `But...they had sold their souls to and were controlled by Leiblich.`;
   `I passed my time under their forgiving but ever present eyes not being able to search for Sara.`;
   `Still, there were times when I did my best to find leads to her.`;
   `But I didn't even know where the research facility was and something would always get in my way and after a while I couldn't search anymore.`;
   `I just hadn't been able to help Sara with my limited powers.`;
   `But...no matter what excuses I came up with the result was the same.`;
   `I had abandoned Sara.`;
   `In the isolated clinic room into which the cold moonlight shined.`;

});
hideTextbox();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `


${noWait}`;
   `${center}${nextPage(0)}I couldn't keep...my promise...${nextPage(1)}`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `EV_SA14C`, transition: 26 });
hideTextbox();
ADV_Mode();
showDimOverlay();
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
showTextbox();
text(() => {
   `Even now, Sara was on the other side of the door....`;
   `I knew that she was still waiting for me in that miserable little room.`;
   `Still believing in me...`;
   `Just as I had promised.`;
   `The sense of guilt I felt overpowered me.`;
   `It left me with an agonizing sense of hopelessness. `;
   `And utter despair. `;

});
hideTextbox();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `
${noWait}`;
   `${center}There was nothing I could do!`;
   `${center}I didn't have any other choice!`;
   `${center}What else could I have done?`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
monoColorOverlay({ interval: 24, color: WHITE });
dimOff_ac = 0;
closeDimOverlay();
stopBGM();
delay({ interval: 60 });
bgload({ name: `BG09A1`, transition: 26 });
hideTextbox();
ADV_Mode();
playBGM({ num: 13, volume: 100 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
clock(`12:4`);
showTextbox();
text(() => {
   `When I opened my eyes, I was lying on a bed in the infirmary.`;
   `I didn't know if someone had brought me there or I had dragged myself unconsciously.`;
   `I looked at my watch without thinking.`;
   `Not much time had passed since I had passed out.`;
   `Laying on the bed, I looked up at the ceiling and thought about the events leading up to this point.`;
   `The reason I had known that it was too hot inside the Generator Room was my infrared vision.`;
   `And the 'moonlight' coming from the inverter unit had the been the same thing.`;
   `In the darkness I had mistaken the heat from the inverter as moonlight. `;
   `And the shock that I felt when I met Sara made sense, too.`;
   `We were siblings after all.`;
   `Probably, even without my memory, in the back of my mind I had known.`;
   `That's why...the first time I had seen Sara...`;
   `And why had she grasped my thumb in the darkness?`;
   `Why had she sung that lullaby that time?`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: WHITE });
bgload({ name: `BG10A1`, transition: 26 });
fgload({ id: 1, name: `SA05ADL`, x: 320, useAnim: false });
showFilter2();
unSkippableDelay(1);
setMonoColorOverlayFadeOutDuration(19);
fadeOutMonoColorOverlay();
unSkippableDelay(6);
dimOff_ac = 0;
closeDimInAndOutAndFilterAnim();
showTextbox();
text(() => {
   Sara(S4A079)`"You really don't know?" `;

});
fgload({ id: 1, name: `SA03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S4A080)`"Oh I see...that's right..."`;

});
hideTextbox();
showFilter2();
unSkippableDelay(1);
monoColorOverlay({ interval: 12, color: WHITE });
dimOff_ac = 0;
closeDimInAndOutAndFilterAnim();
bgload({ name: `BG09A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   `It seemed to me that Sara had probably noticed.`;
   `That we were brother and sister...`;
   `So...`;
   `I raised myself up.`;
   `Sara was still asleep in the bed next to me.`;
   `I stood next to Sara's pillow and stared down at her face.`;
   `My memory was still a little jumbled, but there was no mistaking that face.`;
   `It was Sara.`;
   `Little Sara had grown to be 16.`;
   `It had to be her.`;
   `I was sure it was Sara.`;
   `The sister that I had made a promise to find, but then broke...`;
   `I felt so guilty and ashamed. I couldn't look at Sara's face.`;
   `It was hard just being there.`;
   `I didn't know what to say to Sara.`;
   `What excuses could I make to her?`;
   `No matter what I said to her, it would all ring hollow.`;
   `I wanted to get out of there before Sara woke up.`;
   `I walked toward the door.`;

});
stopBGM();
showTextbox();
text(() => {
   Sara(S6A068)`"Bro...ther...?"`;
   `With her voice, my legs stopped.`;
   `I didn't have the courage to turn around.`;
   Sara(S6A069)`"You...you are my brother, right?"`;
   `Sara continued talking.`;
   `Each of her words was like a stab in the heart.`;
   Sara(S6A070)`"Brother?"`;

});
playBGM({ num: 15, volume: 97 });
showTextbox();
text(() => {
   Kid`"No!"`;
   `I spit out the words without thinking.`;
   Sara(S6A071)`"Huh...?"`;
   Kid`"You're wrong...about me."`;
   Sara(S6A072)`"That...can't be."`;
   Sara(S6A073)`"You are my brother, right?"`;
   Kid`"No!"`;
   `I sensed that Sara was about to get up from the bed so I tried to leave.`;
   Sara(S6A074)`"Wait!"`;
   Sara(S6A075)`"Brother, wait!"`;
   `Her voice sounded just like when she had cried out to me when she was a child, and I froze, unable to move.`;
   Sara(S6A076)`"You are my brother.... You are, aren't you?"`;
   Kid`"........."`;
   `Sara grabbed my shoulders.`;
   Sara(S6A077)`"Hey, why don't you say something? Look at me!"`;

});
fgload({ id: 1, name: `SA03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Sara circled around in front of me, all the time holding my shoulders.`;
   `But I couldn't bear to look Sara in the face and turned away.`;
   Sara(S6A078)`"Hey. Why won't you look at me?"`;
   Sara(S6A079)`"Hey, look at me."`;
   Sara(S6A080)`"I said, look at me!"`;
   Kid`"No, no, no!"`;
   `I shook off Sara's hands.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Sara(S6A081)`"Aaah!"`;
   Kid`"Sara!"`;

});
fgload({ id: 1, name: `SA03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Sara threw her arms around me hugging me tightly.`;
   `Sara's eyes stared directly at me.`;

});
fgload({ id: 1, name: `SA10ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S6A082)`"Why? Why are you denying me?"`;
   Sara(S6A083)`"You are my brother, right? You are, aren't you?"`;
   Kid`"No, no. I'm..."`;
   Sara(S6A084)`"Why not? I know you are!"`;
   Sara(S6A085)`"You're my brother...my brother!"`;
   Sara(S6A086)`"I waited for you. I waited and waited!"`;
   Sara(S6A087)`"I waited forever for you to come!"`;
   Sara(S6A088)`"Brother..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Sara fell to the ground, and I said nothing to her.`;
   `I just ran out of the room.`;
   `That's right, I ran away.`;
   `I ran from Sara and from my past...`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
delay({ interval: 90 });
bgload({ name: `BG14A1`, transition: 26 });
playBGM({ num: 16, volume: 100 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
showTextbox();
text(() => {
   `I squatted in the small room in the back of the warehouse.`;
   `All I could do was just keep running away from Sara and my past.`;
   `I was such a coward.`;
   `Overcome by the memories that had come rushing back to me, I had run away from my sister...`;
   `I couldn't even accept my own weakness.`;
   `I denied myself. It was less scary than acknowledging what I had done.`;
   `I...I...I was such a coward.`;
   `Had I known this would happen...I would have never wanted my memory back...`;
   `Things were better when I didn't remember anything...`;
   `Crouched there in the corner, I was paralyzed.`;
   `I couldn't face Sara...my own sister...all I could do was watch the time pass by.`;
   `....`;

});
hideTextbox();
showDimOverlay();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `My memory had been completely restored, apart from recent events.`;
   `I knew my age, address and phone number...`;
   `I also remembered my foster mother and father.`;
   `Still...there was just one crucial thing that I couldn't remember.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `${noWait}`;
   `${center}That was...`;
   `${center}My name...`;
   `${center}What was my name?`;
   `${center}What was I called?`;
   `${center}I didn't know.`;
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
   `Why was that the only thing that I couldn't remember?`;
   `As long as I couldn't remember that, I felt incomplete.`;
   `As if the essence of my existence were concentrated into my name.`;
   `As long as I couldn't remember my name, I couldn't feel complete.`;
   `That was how I felt.`;
   `No matter how much else I remembered, that one point escaped me.`;
   `Then I thought back...about what it was that had made me lose my memory.`;
   `The massive guilt I felt toward Sara...`;
   `I wondered if that was why I had repressed my memory.`;
   `But there was too much about that theory that didn't make sense.`;
   `I had lost my memory before meeting Sara...and before the accident at LeMU.`;
   `And I couldn't remember what I was doing just before then, or why I had come to LeMU.`;
   `It might have been that I had seen Sara at LeMU... and then it had happened...`;
   `But something didn't seem right about that either.`;
   `I couldn't imagine why only my name and recent events would not come back to me.`;
   `I had already remembered Sara...`;
   `It would make sense for me to remember everything.`;
   `I wondered what kind of amnesia...it might be...`;

});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
stopBGM();
delay({ interval: 180 });
setSceneTitle({ index: 100 });
playSFX({ name: `SE06_02`, a1: 0, volume: 100 });
bgload({ name: `BG14A1`, transition: 26 });
eff_4f = 0;
eff_3b = 1;
eff_3c = VAR_c1_0_6;
eff_3d = 1;
eff_3e = 2;
eff_3f = VAR_c2_0_6;
eff_40 = 2;
openShakeScreenAnim();
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`21:31`);
showTextbox();
text(() => {
   `A sudden sound and shaking made me look up.`;

});
playSFX({ name: `SE09_03L`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `The next instant, warning alarms started shrieking.`;
   `All around me the squeal of straining metal echoed from the structure.`;
   `The shaking continued on and off.`;
   `W-what...`;
   `I ran out of the room.`;

});
bgload({ name: `BG26B3L`, transition: 20 });
showTextbox();
text(() => {
   `Water?`;
   `I noticed something strange as I emerged in the corridor.`;
   `Water was flowing in.`;
   `I couldn't believe that water could have reached here.`;

});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S6A089)`"Kid!"`;
   Kid`"You, what is this? Did something happen?"`;
   You(S6A090)`"I'll explain later. For now just hurry over here."`;
   Kid`"W-what?"`;
   You(S6A091)`"I found a way out!"`;
   Kid`"Where?"`;
   You(S6A092)`"I'll explain it later. Just hurry up!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `With those words of encouragement, You started running.`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
stopSFX()
closeShakeScreenAnim();
bgload({ name: `BG25B3`, transition: 26 });
playBGM({ num: 10, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `She turned the corner heading for stairs leading to an emergency corridor.`;
   Kid`"What about everybody else?"`;
   You(S6A093)`"Takeshi is going to get Mayo. Tsugumi is already at the emergency corridor."`;
   `We dashed toward the stairs to the emergency corridor.`;

});
bgload({ name: `BG27A3`, transition: 20 });
showTextbox();
text(() => {
   `And climbed to the emergency corridor.`;
   `Takeshi, Tsugumi and Sara were already gathered there.`;

});
multifgload2({ id1: 1, id2: 2, name1: `TU08ADS`, name2: `KB05ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S6A094)`"Hurry, we don't have much time."`;
   Kid`"What happened?"`;

});
fgload({ id: 2, name: `KB04ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S6A095)`"Just hurry."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `Saying that, he started running ahead of everyone else.`;
   `Tsugumi followed suit.`;

});
fgload({ id: 1, name: `YU05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S6A096)`"Listen. LeMU is already starting to collapse."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `You pushed my back, encouraging me.`;
   `I started running.`;
   You(S6A097)`"We were finally able to make contact with the surface and now the emergency stairs are accessible."`;
   You(S6A098)`"But if we don't hurry, they're going to flood."`;
   You(S6A099)`"So just hurry."`;
   `You explained the situation from behind me.`;
   `I followed Takeshi and Tsugumi as we sprinted the distance of the emergency stairs.`;

});
bgload({ name: `BG29A1`, transition: 20 });
playSFX({ name: `SE01_07`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `We soon reached the stairs.`;
   `Takeshi and Tsugumi were already climbing.`;
   Takeshi(S6A100)`"Hurry! This way!"`;
   `Takeshi's voice rang down from above.`;
   `I ran following the sound of their footsteps.`;
   `As we were trying to escape, LeMU began to shake and screech as metal clashed with metal.`;
   `But we just kept climbing, moving toward the top.`;
   `Only the sound of everyone's labored breathing and running footsteps on stairs echoed throughout the emergency stairs.`;
   `....`;
   Takeshi(S6A101)`"Just a little more! We're almost there!"`;
   `Takeshi shouted up ahead.`;
   `Takeshi's voice was full of hope.`;
   `It was then that we realized it.`;
   You(S6A102)`"Mayo...Mayo...Mayo isn't here!"`;
   `You shouted it.`;

});
stopSFX()
showTextbox();
text(() => {
   Kid`"Huh?"`;
   Takeshi(S6A103)`"What'd you say?"`;

});
showTextbox();
text(() => {
   `I stopped and looked back.`;
   `You stood on the stairs, stunned and looking downward.`;
   You(S6A104)`"What happened? She was right behind me!"`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU03ADM`, name2: `KB05ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S6A105)`"What happened?"`;
   `Takeshi and the others came down the stairs.`;

});
fgload({ id: 1, name: `YU18ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S6A106)`"Takeshi, Mayo...Mayo isn't here!"`;

});
fgload({ id: 2, name: `KB04ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S6A107)`"Geez...Didn't you check to see that she was behind you?"`;

});
showTextbox();
text(() => {
   You(S6A108)`"She was right behind me from the start!"`;
   You(S6A109)`"Part way up I got so into climbing..."`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
stopBGM();
playSFX({ name: `SE06_02`, a1: 0, volume: 100 });
bgload({ name: `BG29A2`, transition: 26 });
multifgload2({ id1: 1, id2: 2, name1: `YU06ADM`, name2: `KB06ADM`, x1: 128, x2: 512, useAnim: false });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
setNumberOfFlash(2);
setFlashRGBColor(0, 0, 0);
triggerFlash();
showTextbox();
text(() => {
   `The stairs shook violently and there was a large sound.`;
   `At the same time, the lights that dimly lit the stairs went out.`;

});
fgload({ id: 2, name: `KB04ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S6A110)`"Damn! A blackout. We can't go back now."`;
   Takeshi(S6A111)`"If we double back, everyone's a goner!"`;

});
fgload({ id: 1, name: `YU18ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S6A112)`"But!"`;
   Kid`"I'll go."`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU06ADM`, name2: `KB06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(S6A113)`"Huh?"`;
   Kid`"I'll go back. Everybody keep going."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Without waiting for a reply, I started rushing down the stairs I had just climbed.`;
   Takeshi(S6A114)`"Hey, Kid!"`;
   You(S6A115)`"It's impossible! It's already starting to flood. What do you think you're going to do?"`;
   `Their voices rang out behind me.`;
   Kid`"Swim!"`;
   You(S6A116)`"It's pitch black below!"`;
   Kid`"No problem!"`;
   Kid`"I can see!"`;
   `I could actually see the different parts of the stairs by their different temperatures.`;
   `It was the first time that I had ever been thankful for my unusual vision.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopSFX()
bgload({ name: `BG28A4L`, transition: 26 });
playBGM({ num: 12, volume: 97 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
showTextbox();
text(() => {
   `I went down the stairs and came out at Zweite stock's emergency corridor.`;
   `It looked like the emergency power had already died.`;
   `I wondered where Sara might be.`;
   `I thought frantically.`;
   `If she had turned back partway then she probably wouldn't have made it to Dritte stock.`;
   `But I couldn't be sure.`;
   `If she had gone all the way down to Dritte stock...`;
   `...then I would never make it in time if I looked around Zweite stock first.`;
   `I didn't know what to do...`;
   `I had to decided whether I would start looking on Dritte stock or from Zweite stock...`;

});
choice(
   `Start with Dritte stock`,
   `Start with Zweite stock`,
);
switch (l_choice) {
   case 0: goto(lbl_00000b9c);
   case 1: goto(lbl_00000d2c);
}
let lbl_00000b9c;
showTextbox();
text(() => {
   `I decided to start searching from Dritte stock.`;
   `I figured the water pressure would be higher there and the flooding more serious.`;
   `If she were in Dritte stock, then I'd have to start there to have any hope of finding her.`;
   `I headed down the stairs to Dritte stock.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
playSFX({ name: `SE06_02`, a1: 0, volume: 100 });
bgload({ name: `BG27A4`, transition: 26 });
eff_4f = 0;
eff_3b = 1;
eff_3c = VAR_c3_0_6;
eff_3d = 2;
eff_3e = 2;
eff_3f = VAR_c6_0_6;
eff_40 = 6;
openShakeScreenAnim();
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `Reaching the emergency corridor, I arrived at Dritte stock.`;
   `If Sara were here, where would she be...?`;
   `The Conference Room or the Control Room?`;
   `Or could she have been at one of the attractions?`;
   `I didn't have much time.`;
   `Peering down through the emergency hatch, I realized that the flooding had already progressed a lot.`;
   `It seemed best to check each room from the emergency corridor rather than going all the way down.`;
   `I wondered if Sara really were on this floor...`;
   `But having come so far, I knew there was no going back.`;
   `I ran through the emergency corridor.`;

});
hideTextbox();
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
bgload({ name: `BG28A4R`, transition: 20 });
showTextbox();
text(() => {
   `I exited on the emergency corridor furthest outside.`;
   `Opening the emergency hatch to each room, I peeked inside.`;
   `If Sara were there, I'd be able to see her body heat.`;
   `I looked in the Conference Room and the Control Room, but there was no sign of her there. The water only continued to rise.`;

});
bgload({ name: `BG28A2R`, transition: 20 });
showTextbox();
text(() => {
   `The doors beyond the elevator hall didn't open.`;
   `I frantically ran down the emergency corridor moving from one attraction to the next.`;

});
bgload({ name: `BG28A4L`, transition: 20 });
playSFX({ name: `SE06_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I checked the rest area and then looked down into the Lemurian Ruins, but Sara wasn't there.`;
   `(Maybe she wasn't on this floor...?)`;
   `The sound of the water grew louder and the shaking of the structure stronger.`;
   `If I didn't hurry, I wouldn't make it back to Zweite Stock.`;
   `I knew I had to hurry to the emergency stairs.`;

});
bgload({ name: `BG29A2`, transition: 20 });
stopSFX()
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I sprinted the stairs and up to Zweite Stock.`;
   `I had lost a lot of time.`;
   `I had to hurry.`;

});
bgload({ name: `BG27A4`, transition: 20 });
showTextbox();
text(() => {
   `Finally I arrived back at Zweite Stock.`;
   `LeMU was shaking terribly and the area below the emergency hatch had already filled with water.`;
   `It looked like water was about to flood into the corridor.`;
   `I plunged into the water.`;

});
hideTextbox();
monoColorOverlay({ interval: 2, color: BLACK });
stopSFX()
playSFX({ name: `SE02_05`, a1: 0, volume: 100 });
closeShakeScreenAnim();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `Swimming desperately to the Security Office, I forgot the pain in my arm and looked inside.`;
   `Sara wasn't there.`;
   `I was able to steal a breath using the air at the top of the room.`;
   `(Where could...Sara...be...?)`;
   `I dove into the water again and swam for the infirmary.`;
   `The infirmary door was open.`;
   `I looked inside.`;

});
stopBGM();
showTextbox();
text(() => {
   `...Sara!`;
   `Sara's body stood out white in the dark water.`;
   `This room also had a pocket of air near the ceiling.`;
   `Sara was just barely floating there.`;
   `I floated to the surface.`;

});
hideTextbox();
l_choice = 0;
jump(`SSBD`);
let lbl_00000d2c;
showTextbox();
text(() => {
   `No, I thought Sara was somewhere in Zweite Stock.`;
   `I didn't know why but I was sure of it.`;
   `She was probably somewhere in Zweite Stock...`;
   `I knew it might be a meaningless hunch.`;
   `But maybe it was our sibling bond talking to me.`;
   `Sara and I had the same blood in our veins.`;
   `That was my thinking.`;
   `It was probably my imagination, but it was all I had to bet on.`;

});
removeBG({ mode: BLACK, transition: 3 });
playSFX({ name: `SE02_05`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `I opened the emergency hatch and saw that water had already covered three-quarters of the corridor.`;
   `Without hesitating, I threw myself in.`;
   `The water flowed unpredictably, with whirlpools forming here and there.`;
   `I endured the pain in my right arm and swam desperately.`;
   `First I looked in the Security Office.`;
   `There was no source of heat that looked like Sara.`;
   `From there I made for the warehouse, but Sara wasn't there.`;
   `I checked the merry-go-round, but she wasn't there either.`;
   `Ahead of me was the elevator hall. Again, no Sara.`;
   `I swam back up the corridor.`;
   `Water had completely covered the entrance to the infirmary.`;
   `I took a breath and dove under water.`;
   `I put my hand on the door and peered inside.`;
   `And there...`;

});
removeBG({ mode: WHITE, transition: 1 });
stopBGM();
showTextbox();
text(() => {
   `...was Sara.`;
   `Sara's body heat made her stand out brightly against the cool, surrounding darkness.`;
   `I went into the infirmary and floated to the surface.`;
   `Sara looked surprised when I broke through to the surface.`;
   Sara(S6A117)`"Kid...I mean brother."`;
   Kid`"Sara....you're alright."`;
   Sara(S6A118)`"Why are you...?"`;
   Kid`"I promised, didn't I?"`;
   Kid`"I told you that I come find you, didn't I?"`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
delay({ interval: 90 });
l_choice = 0;
jump(`SS7A`);
