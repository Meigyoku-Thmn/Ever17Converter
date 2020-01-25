hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
bgload({ name: `IMG02B`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `After waiting for Tsugumi to compose herself...they carried out the procedure.`;
   `Drawing blood from Tsugumi's arm, they extracted the antibodies, and gave shots to Takeshi, You, and the young Kaburaki.`;
   `They weren't able to give Coco a shot, because she was still in the pod undergoing treatment.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `And it would still be a while before she could leave.`;
   `They made another dose of antibodies for when Coco was ready, and put it in the equipment storage container on the desk.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `...almost an hour had passed since the shot...`;
   `The antibodies didn't seem to be having any effect.`;
   `The three infected 'patients' were lying, worn out, on their beds.`;
   `Tsugumi said something briefly to Takeshi, and went back to LeMU.`;
   `'I'm going to go get Chami, and bring him back' - were the words she left him with.`;
   `Takeshi nodded weakly, and closed his eyes.`;
   fadeClearPage();
});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
bgload({ name: `BG34A1`, transition: 26 });
stopBGM();
delay({ interval: 120 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
hideTextbox();
ADV_Mode();
clock(`21:16`);
showTextbox();
text(() => {
   `——Suddenly!`;
   `From his barely conscious state, a noise from the speaker reached Takeshi's ears.`;
   //Mission Control
   Mission_Control(T6T222)`"Come in..."`;
   //Mission Control
   Mission_Control(T6T223)`"IBF 3, please respond."`;
   //Mission Control
   Mission_Control(T6T224)`"This is the emergency rescue team from the Maritime Defense Force."`;
   `Takeshi rushed over to the terminal.`;

});
fgload({ id: 1, name: `TA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C6A293)`"H-hello!"`;
   Takeshi(C6A294)`"This is the IBF Infirmary... over!"`;

});
playBGM({ num: 18, volume: 100 });
showTextbox();
text(() => {
   //Mission Control
   Mission_Control(T6T226)`"IBF 3!? I repeat, this is the emergency rescue team from the Maritime Defense Force."`;
   //Mission Control
   Mission_Control(T6T227)`"Can you hear me?"`;

});
fgload({ id: 1, name: `TA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C6A295)`"Yeah! We can hear you! We hear you! Loud and clear!"`;
   `Voices spilled out from the other end of the line.`;
   `'Hey, there are survivors down there!'`;
   `'I can't believe it!'`;
   `'That's amazing!'`;
   //Mission Control
   Mission_Control(T6T228)`"We're sending a rescue team immediately. Can you access the pool in IBF 3?"`;
   Takeshi(C6A296)`"Uh, ah, yeah, it should be fine."`;
   //Mission Control
   Mission_Control(T6T229)`"Do you know how many survivors there are and where they are located?"`;
   Takeshi(C6A297)`"In the examination room there are five...no, six."`;
   //Mission Control
   Mission_Control(T6T230)`"Six. I copy."`;
   //Mission Control
   Mission_Control(T6T231)`"A rescue team is headed there in a private sector salvage vessel. When it arrives, I want you to follow their directions and get out of there."`;
   Takeshi(C6A298)`"How long 'till they get here?"`;
   //Mission Control
   Mission_Control(T6T232)`"They're going as fast as they can, but it'll take about an hour."`;
   //Mission Control
   Mission_Control(T6T233)`"But, if something goes wrong..."`;
   //Mission Control
   Mission_Control(T6T234)`"There should be a small, deep-exploration submarine left in the research facility. I hate to make you do this, but I want you to escape to that area."`;

});
fgload({ id: 1, name: `TA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C6A299)`"S-something goes wrong...? W-what do you mean...?"`;
   //Mission Control
   Mission_Control(T6T235)`"The partition strength threshold is already being exceeded."`;
   //Mission Control
   Mission_Control(T6T236)`"If one section implodes, there's the risk that another area could collapse and start sinking."`;
   //Mission Control
   Mission_Control(T6T237)`"If that happens, we think there's a high possibility that heavy pieces could crash down on the research facility."`;
   Takeshi(C6A300)`"A-alright... I understand..."`;
   //Mission Control
   Mission_Control(T6T238)`"Of course, we're doing everything we can to get to you before that happens."`;
   //Mission Control
   Mission_Control(T6T239)`"We're heading there, no matter what! So, please hold out a little longer!"`;
   `*Click* ...the connection cut out suddenly.`;

});
fgload({ id: 1, name: `TA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C6A301)`"Ah, hey! W-wait a sec!"`;

});
showTextbox();
text(() => {
   `Takeshi hit the 'Call' button repeatedly.`;
   `But there was no answer.`;

});
fgload({ id: 1, name: `TA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C6A302)`"Damn it, we can't open up communications from this side..."`;
   `Takeshi began to pour through the manual on the side of communication terminal.`;

});
fgload({ id: 1, name: `TA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C6A303)`"Ah, here it is!"`;
   `Following the instructions in the manual, he used the control panel to call up information on the monitor.`;

});
fgload({ id: 1, name: `TA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C6A304)`"It's a small electric submersible..."`;
   `The submarine was in a separate sealed sector attached to IBF.`;
   `The specifications said it was a 'neutral buoyancy' miniature-submarine, for saturation diving.`;
   `The important thing was, it could be brought over to the pool by remote control.`;

});
showTextbox();
text(() => {
   Takeshi(C6A305)`"If things get dangerous, I guess they want us to board this."`;
   `He quickly went about setting up the remote control program, so that they could move the submarine at a moment's notice, if necessary.`;

});
fgload({ id: 1, name: `TA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C6A306)`"Alright..."`;
   Takeshi(C6A307)`"All we have to do now is..."`;

});
fgload({ id: 1, name: `TA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C6A308)`"Get Tsugumi and Sora over here..."`;
   `The second Takeshi said this—`;

});
stopBGM();
playSFX({ name: `SE06_04`, a1: 0, volume: 100 });
fgload({ id: 1, name: `TA04ADM`, x: 320, useAnim: true });
eff_4f = 60;
eff_3b = 1;
eff_3c = VAR_c3_0_6;
eff_3d = 1;
eff_3e = 2;
eff_3f = VAR_c2_0_6;
eff_40 = 1;
openShakeScreenAnim();
showTextbox();
text(() => {
   `——BOOOOOooooM!!!`;

});
showTextbox();
text(() => {
   `Suddenly a low metallic crashing sound reverberated throughout the installation.`;
   `The sound seemed to come from above.`;

});
playBGM({ num: 10, volume: 100 });
showTextbox();
text(() => {
   `An alarm sounded from the terminal and the screen changed.`;

});
eff_41 = 12;
eff_42 = 7;
eff_50 = 144;
showDimInAndOutAnim();
playSFX({ name: `SE09_03L`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `'Warning: LeMU hull breach : Flooding'`;
   Takeshi(C6A309)`"LeMU....!?"`;
   Takeshi(C6A310)`"This is bad..."`;
   Takeshi(C6A311)`"That means...Tsugumi and Sora...!"`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
closeDimInAndOutAndFilterAnim();
stopSFX()
eff_4f = 0;
eff_3b = 1;
eff_3c = VAR_c1_0_6;
eff_3d = 1;
eff_3e = 2;
eff_3f = VAR_c2_0_6;
eff_40 = 2;
openShakeScreenAnim();
bgload({ name: `BG35A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `Takeshi ran out into the corridor.`;
   `It was only slight, but the floor was trembling.`;
   Takeshi(C6A312)`"Agh..."`;
   `He suddenly seemed to get dizzy, and lost his balance, crashing into a wall.`;
   `Holding his fingers to his temples, Takeshi shook his head to clear it.`;
   Takeshi(C6A313)`"I...still gotta go..."`;
   Takeshi(C6A314)`"I have to GO!!"`;
   `Staggering while he ran, Takeshi took off.`;
   `His legs moved as if he couldn't distinguish up from down but, still, he kept running.`;

});
removeBG({ mode: BLACK, transition: 2 });
closeShakeScreenAnim();
showTextbox();
text(() => {
   `He stumbled into the elevator...`;
   `The lift he was on started moving up...`;
   Announcement(C6A315)`"Depth 270 feet..."`;
   Announcement(C6A316)`"Depth 240 feet..."`;
   Announcement(C6A317)`"Depth 210 feet..."`;

});
bgload({ name: `BG32A1`, transition: 20 });
showTextbox();
text(() => {
   `He ran from the lift to the compression chamber...`;
   `Takeshi hit the intercom button violently.`;

});
fgload({ id: 1, name: `TA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C6A318)`"Sora! Soraaa!"`;
   Sora(T6T243)`"Ta-Takeshi!? What are you...?"`;
   `Takeshi waved to Sora as she appeared outside the window.`;

});
fgload({ id: 1, name: `TA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C6A319)`"Hey! Long time, no see!"`;
   Sora(T6T244)`"Wh-what are you doing here!"`;
   Takeshi(C6A320)`"Well, it's obvious isn't it? I came back."`;
   Sora`"......"`;

});
fgload({ id: 1, name: `TA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C6A321)`"What's the damage?"`;
   Sora(T6T245)`"There's flooding in Zweite stock."`;
   Sora(T6T246)`"The warehouse area has been breached and cracks are beginning to form in the elevator shaft. The situation is serious."`;

});
showTextbox();
text(() => {
   Sora(T6T247)`"There is over six inches of flooding in almost all of the corridors."`;
   Takeshi(C6A322)`"Where's Tsugumi?"`;
   Sora(T6T248)`"She's...trapped in the infirmary..."`;
   Takeshi(C6A323)`"What about the door?"`;
   Sora(T6T249)`"The electronic lock has been released. But..."`;
   Takeshi(C6A324)`"It won't open 'cause of the water pressure?"`;
   Sora(T6T250)`"Yes..."`;
   Sora(T6T251)`"Takeshi, I'm going to start decompressing the chamber."`;
   Takeshi(C6A325)`"How long will it take?"`;
   Sora(T6T252)`"I will complete it as soon as possible."`;
   Takeshi(C6A326)`"I need to know how much time!"`;
   Sora(T6T253)`"If I hurry...12 hours."`;

});
fgload({ id: 1, name: `TA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C6A327)`"Tw-twelve hours!? We don't have that long!"`;
   Sora(T6T254)`"If we don't dissolve the nitrogen in your blood, you will get decompression sickness."`;
   Takeshi(C6A328)`"I don't care! Open that door now!"`;
   Sora(T6T255)`"I can't do that...!"`;
   Takeshi(C6A329)`"If we don't act fast, Tsugumi is dead!"`;
   Sora(T6T256)`"If we open that door now, due to the rapid decompression, the nitrogen in your bloodstream will form bubbles, causing blood clots, and in the worst case..."`;
   Takeshi(C6A330)`"I don't care, you get that door OPEN NOW!!!"`;
   Sora(T6T257)`"I can't...it's too..."`;
   `Looking around, Takeshi's eyes fell on an emergency escape lever on inside the chamber.`;
   `Without hesitating, he pulled it down, and kicked the door.`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: false });
bgloadCrop({ name: `BG31A1`, transition: 26, x: 400, y: 0, hx: 800, hy: 600 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `—KABOooM!!!`;
   `There was a horrible noise, as though all the air inside had exploded.`;
   `Takeshi's body was thrown from the room, along with the high-pressure gas that had been built up inside.`;
   `He was tossed like a piece of confetti, sliding and rolling along the floor, only to stop when he crashed into the wall.`;
   Takeshi(C6A331)`"Gaagh!"`;
   Takeshi(C6A332)`"...eeeaaAAAAGGHH"`;
   Takeshi(C6A333)`"WAAAAaaaah......"`;
   `Takeshi twisted in agony.`;
   `He flailed his four limbs as though he were a man gone insane.`;
   Takeshi(C6A334)`"*Urgh*....*uurrgh*..."`;
   `From his unnatural contorted position on the floor, Takeshi began vomiting.`;

});
fgload({ id: 1, name: `SO17ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T6T260)`"Takeshi!"`;
   Sora(T6T261)`"Takeshi...are you okay?"`;
   Takeshi(C6A335)`"W-well...it looks like...I'm still alive..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Takeshi crawled weakly over the floor.`;
   `He crawled and stood, fell again and rose again...then he fell backward....`;
   `Repeating this process over and over, he finally made it to the door and said, leaning his shoulder against the wall...`;

});
bgloadCrop({ name: `BG31A1`, transition: 26, x: 240, y: 0, hx: 800, hy: 600 });
multifgload2({ id1: 1, id2: 2, name1: `TA18ADM`, name2: `SO13ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C6A336)`"Don't you stop me, you hear? No matter what you say, I'm going."`;

});
fgload({ id: 2, name: `SO14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T6T262)`"Alright, Takeshi. It seems that you've made up your mind..."`;
   Sora(T6T263)`"I'll stay here in Himmel, to keep track of the situation at LeMU, and send updates to your PDA."`;
   Sora(T6T264)`"I'll do what I can to stop the partitions from falling...to see that this place stays together, even a little while longer. So—"`;

});
fgload({ id: 2, name: `SO11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T6T265)`"Promise me...that you'll come back here with Tsugumi..."`;

});
fgload({ id: 1, name: `TA16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C6A337)`"Yeah, it's a promise."`;
   `And saying that he laughed weakly.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: false });
bgload({ name: `BG29A1`, transition: 26 });
eff_41 = 12;
eff_42 = 7;
eff_50 = 144;
showDimInAndOutAnim();
playSFX({ name: `SE01_06`, a1: 0, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `Running up the stairs, he looked down at his PDA. `;
   `There was a life reading in the Infirmary.`;
   `The map showed that the surrounding corridors were flooded and that there was no way to access the area.`;

});
hideTextbox();
playSFX({ name: `SE02_05`, a1: 0, volume: 100 });
monoColorOverlay({ interval: 6, color: BLACK });
closeDimInAndOutAndFilterAnim();
bgload({ name: `IMG06A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `Arriving at Zweite stock, he threw himself into the water.`;
   `In order to reach the corridor connecting to the infirmary... Takeshi dove.`;
   `At this point, there was no way to access it without swimming.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Takeshi turned the PDA's backlight on.`;
   `It shed a weak light on the area before him.`;
   `Maybe he realized that there wasn't any point, but Takeshi turned off the light and kept swimming in total darkness.`;
   `He swam. And kept swimming.`;
   `Takeshi propelled himself forward as though possessed.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `There was no sign of fear, or unease in the way that he moved.`;
   `He fiercely tore at the wall of water surrounding him, progressing steadily forward.`;
   `He was being reckless, perhaps even acting insane...but he was willing to sacrifice it all for what he was convinced he had to do.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `And neither the water nor the intense pressure could defeat the power of his faith and courage of that conviction.`;
   `He kept swimming on and on strongly, purposefully.`;
   `Heading for the light...`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `BG09A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   `*SPLASH!*—Takeshi sucked in air greedily as he brought his head out of the water. `;
   `Ignoring his burning lungs, he quickly climbed up the open hole of the elevator shaft and began scrambling toward the infirmary.`;

});
fgload({ id: 1, name: `TA01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C6A338)`"Tsugumi! Tsugumi!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `She was in a corner of the room, hugging her knees to herself.`;
   `At her feet was the slightly wet, furry, figure of Chami.`;

});
multifgload2({ id1: 1, id2: 2, name1: `TA15AWM`, name2: `TU06AWM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T267)`"Ta-Takeshi...what...WHY...!?"`;
   `Tsugumi opened up her eyes wide.`;

});
fgload({ id: 1, name: `TA16AWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C6A339)`"What are you so surprised about, Tsugumi?"`;
   Takeshi(C6A340)`"I came back, right now! I came back for you!"`;
   Takeshi(C6A341)`"Well, I was a bit late, but..."`;
   `Takeshi scratched his nose.`;

});
fgload({ id: 2, name: `TU04AWM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T268)`"Y-you idiot! What are you doing here!!?"`;
   Tsugumi(T6T269)`"Do you...want do die!?"`;

});
fgload({ id: 1, name: `TA15AWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C6A342)`"Listen..."`;

});
showTextbox();
text(() => {
   `Takeshi was laughing as he spoke.`;

});
fgload({ id: 1, name: `TA16AWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C6A343)`"I came back for something I forget, um, yeah that's it."`;

});
fgload({ id: 2, name: `TU11AWM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T270)`"You...forgot...?"`;
   `Picking up Chami in both hands, she stood up slowly.`;
   Takeshi(C6A344)`"Yeah. Left it here, silly me..."`;
   Takeshi(C6A345)`"My irreplaceable..."`;
   Takeshi(C6A346)`"More important to me than anything else...friend..."`;

});
fgload({ id: 2, name: `TU13AWM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T271)`"...how..."`;
   Tsugumi(T6T272)`"How...did you get here?"`;
   `She looked at Takeshi as if she still couldn't believe he was really there.`;

});
fgload({ id: 1, name: `TA15AWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C6A347)`"Well, I'm a good swimmer."`;
   Takeshi(C6A348)`"Actually, in a 25 meter pool...I made it down and back, once..."`;

});
fgload({ id: 1, name: `TA16AWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C6A349)`"I kicked off wall coming back, but still..."`;
   `Takeshi mimed swimming as he spoke.`;

});
fgload({ id: 1, name: `TA15AWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C6A350)`"Wait, I think I just beat my record a while a go..."`;

});
showTextbox();
text(() => {
   Takeshi(C6A351)`"Hey? Do you remember the furthest I've ever swam underwater?"`;

});
fgload({ id: 2, name: `TU02AWM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T273)`"...Fif..."`;
   Tsugumi(T6T274)`"Fifty one meters...?"`;
   `She answered, her expression beginning to break down.`;
   Takeshi(C6A352)`"Yeah..."`;
   Takeshi(C6A353)`"You think I'd die in a place like this?"`;
   Takeshi(C6A354)`"I mean..."`;
   Takeshi(C6A355)`"I still haven't gotten enough abuse from you yet."`;
   Takeshi(C6A356)`"I want to hear what you've got to say, from here on out..."`;
   Tsugumi(T6T275)`"Aaagh..."`;

});
fgload({ id: 1, name: `TA16AWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C6A357)`"So..."`;
   Takeshi(C6A358)`"I came for you, Tsugumi."`;
   Tsugumi(T6T276)`"Takeshi...Takeshi!"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `They both ran toward each other.`;
   `Reaching out their hands to one another, they came together.`;
   `And in the center of the infirmary they hugged each other close, embracing firmly.`;
   `Riding on Tsugumi's shoulder was Chami...`;
   `Chami snorted, and looked at the two.`;

});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
showTextbox();
text(() => {
   `.........`;
   `......`;
   `...`;

});
bgload({ name: `BG31A1`, transition: 26 });
fgload({ id: 1, name: `SO04ADM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`21:48`);
showTextbox();
text(() => {
   `Having rescued Tsugumi from the Infirmary, Takeshi made it safely back to Himmel.`;
   `Sora was waiting for them back in the room.`;
   Sora(T6T278)`"Takeshi, Tsugumi!"`;
   Sora(T6T279)`"I've prepared the chamber for you, get inside quickly!"`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TA16AWM`, name2: `SO14ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C6A360)`"Hey, what's the rush, Sora?"`;
   `Although Takeshi was out of breath, he waved the flustered Sora off with his hands.`;
   Sora(C6A361)`"C-come on! You have to hurry!"`;
   Takeshi(C6A362)`"Relax.... I still have one more thing I've forgotten..."`;

});
fgload({ id: 2, name: `SO13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(C6A363)`"F-forgotten...? What?"`;

});
fgload({ id: 1, name: `TA15AWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C6A364)`"This."`;
   `Takeshi pointed to Himmel's console.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `The following words were written on the monitor.`;
   `"Willkommener LeMMIH Login: T.Y"`;
   `"LM-RSDS-4913A Sora Akanegasaki"`;
   `"Aktenkopie wird vervollständigt."`;

});
removeBG({ mode: WHITE, transition: 2 });
showTextbox();
text(() => {
   `Suddenly there was an intense flash of light——`;
   `And from the blinding flood of light a voice could be heard...`;
   You(C6A366)`"I was able to finish the transfer just in time."`;
   You(C6A367)`"The last password, and name, T.Y..."`;
   You(C6A368)`"TANAKA, YOICHI..."`;
   `Where is this?—'I' wondered.`;
   `Was I inside someone...?`;
   `I couldn't see anything.`;
   `All I could hear was a voice coming from somewhere.`;
   `A warm voice`;
   `A murmuring filled with peace...`;
   You(C6A369)`"It was in Himmel, along with Sora's memory—"`;
   You(C6A370)`"It's on that terabyte disk."`;
   You(C6A371)`"Thank you...dad."`;
   `The voice cut out with a crackle.`;
   `The light faded.`;
   `Color gradually returned to Takeshi's field of vision.`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `BG31A1`, transition: 26 });
fgload({ id: 1, name: `TA01AWM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `And when color had finally returned, Takeshi opened his mouth.`;

});
fgload({ id: 1, name: `TA04AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C6A372)`"Haa—!"`;

});
fgload({ id: 1, name: `TA02AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C6A373)`"Keep it simple!"`;

});
playSFX({ name: `SE04_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `And letting out a strange shout, Takeshi pounded the Enter key on the console.`;

});
bgload({ name: `IT09A`, transition: 20 });
showTextbox();
text(() => {
   `A round, flat wafer shot out of the disk drive.`;
   `It was a single terabyte disk made out of polycarbonate.`;
   Takeshi(C6A374)`"Okay, I'm taking this with me."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Had Takeshi been able to hear You's voice?`;
   `He stuffed the disk in his pocket.`;

});
showTextbox();
text(() => {
   Sora(C6A375)`"Y-yes..."`;
   `Taking a side-glance at the dumbfounded Sora, Takeshi went along with Tsugumi to the other side of the glass...`;

});
hideTextbox();
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
monoColorOverlay({ interval: 6, color: BLACK });
stopBGM();
removeFG({ id: 1, useAnim: false });
bgload({ name: `BG32A1`, transition: 26 });
multifgload2({ id1: 1, id2: 2, name1: `TA01AWM`, name2: `TU09AWM`, x1: 128, x2: 512, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `Into IBF's compression chamber.`;
   Tsugumi(T6T280)`"Haaa....Haaaa...."`;
   `Tsugumi slumped over in her chair, breathing with her whole body.`;

});
showTextbox();
text(() => {
   Takeshi(C6A376)`"Whew..."`;

});
showTextbox();
text(() => {
   `Takeshi breathed deeply...and looked out of the window to the Control Room on the other side of the window.`;

});
bgload({ name: `EV_SO07A`, transition: 20 });
showTextbox();
text(() => {
   `The door to the chamber sealed, and compression started...`;

});
playBGM({ num: 8, volume: 100 });
showTextbox();
text(() => {
   Takeshi(C6A377)`"Sora..."`;
   Takeshi(C6A378)`"I guess this means good-bye for a while?"`;
   `Sora was standing still on the other side of the chamber.`;

});
bgload({ name: `EV_SO07B`, transition: 20 });
showTextbox();
text(() => {
   `Smiling softly, Sora shook her head left to right.`;
   Sora(C6A380)`"No, this isn't good-bye."`;
   Sora(C6A381)`"I don't say...good-bye..."`;
   Takeshi(C6A382)`"Yeah..."`;
   Takeshi(C6A383)`"Me neither."`;
   `Takeshi returned her smile.`;

});
bgload({ name: `EV_SO07A`, transition: 20 });
showTextbox();
text(() => {
   Sora(C6A384)`"I don't exist."`;
   Sora(C6A385)`"And yet—I am everywhere."`;
   Sora(C6A386)`"There will be a time when we meet again. I'm sure of it."`;

});
bgload({ name: `EV_SO07B`, transition: 20 });
showTextbox();
text(() => {
   Sora(C6A388)`"So, please..."`;
   Sora(C6A389)`"Don't ask me anything now."`;
   Takeshi(C6A390)`"Okay..."`;
   Takeshi(C6A391)`"I understand...now."`;
   Takeshi(C6A392)`"I don't how, but I understand now."`;
   Takeshi(C6A393)`"That the only place to find you is here, yet I can find you anywhere..."`;
   Sora(C6A394)`"Yes..."`;

});
bgload({ name: `EV_SO07C`, transition: 20 });
showTextbox();
text(() => {
   Takeshi(C6A395)`"O-oh, and..."`;
   Takeshi(C6A396)`"When you hit a button, don't forget to say 'Keep it simple'. Remember that."`;
   Sora(C6A397)`"Yeah...heh, heh."`;
   Sora(C6A398)`"Don't worry. I will remember."`;
   Sora(C6A400)`"That's a promise. Mine and yours, professor..."`;
   Sora(C6A401)`"Thank you..."`;
   `The RSD image started to warp and break up.`;
   `A fog enveloped Sora from behind.`;
   `Sora's image changed to a rainbow hue.`;
   `And then even the rainbow...`;
   `Started to fade.`;
   `Sora's form disappeared...`;
   `Takeshi watched it all happen, and nodded as though he had confirmed something.`;

});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
delay({ interval: 90 });
stopBGM();
clock(`23:0`);
showTextbox();
text(() => {
   `Compression complete.`;
   `Takeshi and Tsugumi loaded into the elevator and headed back to the research facility.`;

});
bgload({ name: `BG33A2`, transition: 26 });
multifgload2({ id1: 1, id2: 2, name1: `TA01ADM`, name2: `TU03ADM`, x1: 128, x2: 512, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   Tsugumi(T6T295)`"It's quiet..."`;
   Takeshi(C6A402)`"Yeah, you're right..."`;
   `The flooding should have been fairly advanced in the area above them.`;
   `It was hard to know if any of the sections had collapsed yet.`;
   `But for the moment, everything was normal at IBF.`;
   `On the surface of the pool, there was not even a ripple.`;

});
bgload({ name: `BG35A1`, transition: 20 });
multifgload2({ id1: 1, id2: 2, name1: `TA04ADM`, name2: `TU11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C6A403)`"Ah..."`;

});
fgload({ id: 2, name: `TU06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T296)`"What's wrong?"`;
   Takeshi(C6A404)`"The time...we're past the scheduled time."`;

});
fgload({ id: 2, name: `TU11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T297)`"What schedule?"`;

});
fgload({ id: 1, name: `TA15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C6A405)`"Actually, there's a rescue team on their way."`;
   Tsugumi(T6T298)`"Rescue...?"`;
   Takeshi(C6A406)`"Yeah, they called themselves the Maritime Defense Force, I think."`;
   Takeshi(C6A407)`"You was able to open up the communications line, so we got a hold of Insel null."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `And talking this way, they made their way to the examination room.`;
   `They opened the door and went inside.`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `BG34A1`, transition: 26 });
multifgload2({ id1: 1, id2: 2, name1: `TA01ADS`, name2: `TU06ADS`, x1: 176, x2: 464, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   Tsugumi(T6T299)`"Ah..."`;
   Tsugumi(T6T300)`"They aren't here...nobody's here!?"`;
   `Tsugumi raised her voice.`;
   `But there was nobody in the room to respond.`;
   `Takeshi checked each of the capsule pods.`;
   `But they were all empty.`;
   Takeshi(C6A408)`"Yeah..."`;
   Takeshi(C6A409)`"You, the Kid, Coco, that old guy...they're all gone."`;

});
fgload({ id: 2, name: `TU13ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T301)`"Where did they go?"`;

});
fgload({ id: 1, name: `TA15ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C6A410)`"Hey, hold on. I'm sure the rescue team found them."`;
   `Just then...`;
   `A recognizable voice came over the speaker.`;

});
multifgload2({ id1: 1, id2: 2, name1: `TA04ADS`, name2: `TU06ADS`, x1: 176, x2: 464, useAnim: false });
showTextbox();
text(() => {
   //Mission Control
   Mission_Control(C6A411)`"This is Insel null Control. Please respond."`;

});
hideTextbox();
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
playBGM({ num: 7, volume: 100 });
showTextbox();
text(() => {
   `Takeshi jumped over to the terminal and hit the 'Talk' button.`;

});
fgload({ id: 1, name: `TA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C6A412)`"This is the Examination Room in IBF 3, over!"`;
   //Mission Control
   Mission_Control(C6A413)`"Thank goodness...that's where you were."`;
   //Mission Control
   Mission_Control(C6A414)`"A little while ago we got a message from the dispatch team that they couldn't find you. You had us worried there."`;

});
fgload({ id: 1, name: `TA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C6A415)`"I'm sorry, I was out for a bit."`;
   //Mission Control
   Mission_Control(C6A416)`"We were able to rescue the other three people in the examination room, and they are being cared for in the salvage vessel."`;
   Takeshi(C6A417)`"Is everyone okay!?"`;
   //Mission Control
   Mission_Control(C6A418)`"We can't say for sure...their conditions are serious."`;
   //Mission Control
   Mission_Control(C6A419)`"We're fighting against time. The submersible is going to surface soon, and we'll transfer them to a floating medical center."`;

});
fgload({ id: 1, name: `TA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C6A420)`"Okay. You take care of them."`;
   //Mission Control
   Mission_Control(C6A421)`"How many people are there with you?"`;
   Takeshi(C6A422)`"Two, including me."`;

});
fgload({ id: 1, name: `TA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C6A423)`"The other person didn't make it......"`;
   //Mission Control
   Mission_Control(C6A424)`"Roger. We'll send the team back there as soon as we can."`;
   //Mission Control
   Mission_Control(C6A425)`"But there is the possibility that the team won't be able to approach IBF if it starts to break up."`;

});
fgload({ id: 1, name: `TA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C6A426)`"I've got the exploration vessel standing by. I can call it here by remote control, right?"`;
   //Mission Control
   Mission_Control(C6A427)`"Ah, yeah...I'm sorry to have to ask you to use it, but there's nothing else we can do."`;
   //Mission Control
   Mission_Control(C6A428)`"We'll do the best we can. Whatever happens, you hang in there."`;
   Takeshi(C6A429)`"Roger."`;
   `And after that the communications cut out.`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TA01ADM`, name2: `TU13ADM`, x1: 128, x2: 512, useAnim: false });
showTextbox();
text(() => {
   Tsugumi(T6T313)`"What's that supposed to mean?"`;

});
fgload({ id: 1, name: `TA15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C6A430)`"You weren't listening?"`;
   Takeshi(C6A432)`"All this would be for nothing, if everyone died while they were waiting for us."`;
   Takeshi(C6A433)`"The rescue team decided to put a higher priority on getting You, the Kid, and Coco, to the hospital, than waiting for us."`;

});
fgload({ id: 2, name: `TU11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T314)`"Yeah...you're right..."`;
   `The color in Tsugumi's face slowly returned to normal, as her sense of panic faded.`;

});
showTextbox();
text(() => {
   Takeshi(C6A434)`"Well..."`;
   Takeshi(C6A435)`"I might just take a nap until the next bus comes..."`;

});
fgload({ id: 2, name: `TU06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T315)`"B-bus?"`;

});
fgload({ id: 1, name: `TA16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C6A436)`"If you think the bus is going to be late, call a cab for me, will you?"`;
   Tsugumi(T6T316)`"T-taxi?"`;
   Tsugumi(T6T317)`"What are you talking about...Takeshi?"`;
   Takeshi(C6A437)`"If you push that button, a small submarine will come over here by remote control—Our very own private taxi should come here from another area of IBF."`;

});
fgload({ id: 2, name: `TU11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T318)`"O-okay..."`;
   Takeshi(C6A438)`"Anyway..."`;
   Takeshi(C6A439)`"I'm just glad that everyone's alright..."`;
   Takeshi(C6A440)`"Yes..."`;
   `A look of relief flooded softly over his face.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Takeshi(C6A441)`"I'm just...so...glad..."`;
   `Like a marionette that had its strings cut, Takeshi's body collapsed.`;

});
fgload({ id: 2, name: `TU06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(T6T319)`"Ta-Takeshi!?"`;

});
removeFG({ id: 2, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi ran over to Takeshi and struggled to hold him up.`;
   `She shook him by the shoulders, but Takeshi would not wake up.`;
   `He was breathing. And his heartbeat seemed normal. Although he felt slightly hot, it didn't seem like his life was in danger.`;
   `Tsugumi carried Takeshi over to a bed.`;
   `And placing her head on his chest, she closed her eyes.`;
   `The light sound of their breathing gradually took on the same timing, and softly filled the room.`;

});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
stopBGM();
showTextbox();
text(() => {
   `They fell into a deep sleep....`;

});
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
monoColorOverlay({ interval: 12, color: WHITE });
hideTextbox();
bgload({ name: `BG09A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`21:31`);
showTextbox();
text(() => {
   `At the same—time I woke up suddenly.`;
   `LeMU's infirmary...`;
   `I had been sprawled out, sleeping on the bed.`;
   `Getting up, I looked around.`;
   `Nobody was there.`;
   `I felt a pain in my left hand.`;
   `And looked at my palm.`;
   `There was a large bandage on the edge of it.`;
   `That's right...I injured my hand in the Whale Room...and then...`;
   `... and then...I lost my memory again, and was probably brought to this room.`;
   `(Where is everyone...?)`;
   `I slowly got off the bed and slipped on my shoes.`;

});
playSFX({ name: `SE06_02`, a1: 0, volume: 92 });
showTextbox();
text(() => {
   `Creak, Creeeaak, Creeeeaaaaaaaaaaak.....`;

});
playSFX({ name: `SE10_18`, a1: 0, volume: 92 });
showTextbox();
text(() => {
   `Groan, groan, groooooooaaaaaaaaaaaannn....`;
   `The sound of metal screeching and rubbing together came from somewhere in the immediate vicinity.`;

});
showTextbox();
text(() => {
   `Another sound came to my ears, and I could tell it was an alarm ringing somewhere far off.`;
   `But strangely, I didn't feel any fear.`;
   `I must not have been completely awake.`;
   `Inside my head was still dim, and it was hard to grasp the situation completely.`;
   `Just then...`;

});
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `—Whhhiiirr!`;

});
playSFX({ name: `SE09_03L`, a1: 0, volume: 84 });
showTextbox();
text(() => {
   `The door to the infirmary opened.`;

});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S6A089)`"Kid!"`;
   `You jumped into the room, as though she were possessed by a demon.`;
   You(S6A091)`"I found an exit we can escape through!"`;
   `You was screaming.`;
   `'I found an exit'...I said these words to myself over and over.`;
   `It took me a few seconds to grasp the enormity of those words.`;
   Kid`"Where did you find it?"`;
   `My mind was still not fully up and running.`;
   You(S6A090)`"I'll explain later, just hurry!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Saying that, You ran out of the infirmary.`;
   `Still, it took a few more seconds for my legs to get moving.`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `BG25B3`, transition: 26 });
playBGM({ num: 13, volume: 100 });
playSFX({ name: `SE09_03L`, a1: 0, volume: 92 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `It felt as though I were running on fog.`;
   `My body was half-paralyzed, and wouldn't move in the direction I wanted it. `;
   `I shook my head, trying to get rid of the grogginess.`;
   `No mater how much I ran, I couldn't return to normal.`;
   Kid`"Where is everyone else...?"`;
   `I was barely able to hold onto my consciousness as I somehow got this question off to You.`;

});
fgload({ id: 1, name: `YU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S6A093)`"Takeshi's going to get Mayo, and Tsugumi's already in the emergency corridor."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Kid`"Takeshi's going to get Mayo..."`;
   Kid`"Tsugumi's in the emergency corridor..."`;
   `For no reason in particular I repeated You's words.`;
   `Maybe she finally noticed my odd state. You looked at me suspiciously.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `BG27A3`, transition: 26 });
eff_41 = 12;
eff_42 = 7;
eff_50 = 144;
showDimInAndOutAnim();
playSFX({ name: `SE09_03L`, a1: 0, volume: 100 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   `We made it to the emergency corridor.`;
   `Kaburaki, Tsugumi and Sara were already there waiting.`;

});
fgload({ id: 1, name: `KB04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kaburaki(S6A094)`"Hurry, we don't have much time."`;
   Kid`"Not much time...?"`;
   Kaburaki(S6A095)`"Just hurry."`;
   `Kaburaki grabbed my shoulder hard and, turning around, started running.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Sara and Tsugumi followed Kaburaki's lead.`;

});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S6A096)`"Listen up - LeMU has started to implode."`;
   You(S6A097)`"We were finally able to make contact with the surface and access the emergency stairs."`;
   You(S6A098)`"But if we don't hurry, they're going to flood."`;
   You(S6A099)`"So hurry."`;
   `You grabbed my arm tightly.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `And tugging on it violently, You started pounding forward at full speed.`;
   `It felt like I was about to fall forward and I braced myself as best I could, trying to keep pace with her as she pulled me forward.`;
   `We flew liked the wind down the painfully cramped passage...`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
showTextbox();
text(() => {
   `And soon...`;

});
bgload({ name: `BG29A1`, transition: 26 });
playSFX({ name: `SE09_03L`, a1: 0, volume: 87 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `We had all jumped into the emergency exit stairwell, and were running up the stairs.`;
   `I could hear Kaburaki, Sara and Tsugumi...their footsteps right above me.`;
   Kaburaki(S6A100)`"Hurry up! This way!"`;
   `I couldn't see from where Kaburaki was calling.`;
   `But his booming voice thundered off the sides of the metal bulkhead.`;
   `You's eyes met mine and nodding to one another we pumped our legs harder, climbing as fast as we could.`;
   `The surface of the stairs was wet.`;
   `The metal tube surrounding us on the emergency staircase was shaking violently left and right.`;
   `I slipped and whacked my shin hard against a corner.`;
   `But I felt nothing.`;
   `Both of my legs kept moving as if they were separate from me.`;
   `My thoughts and feelings were indistinct, vague.`;
   `An irresistible, primal 'FORCE' was propelling me forward.`;
   `And I handed over the reins to that 'force'.`;
   `It was a state almost free of thought. All I could do was to climb and climb and keep climbing...`;
   `A sharp, metallic sound echoed painfully in my ears.`;
   `The angry cacophony shook my body to its core.`;
   `It was the screaming of a terrible monster...or the groan of death itself.`;
   `The terrible voice was slowly and certainly closing in on us from behind.`;

});
stopSFX()
showTextbox();
text(() => {
   Kaburaki(S6A101)`"Just a little more! We're almost there!"`;
   `Kaburaki screamed at us from up above.`;
   `I briefly saw the backs of Sara and Tsugumi who were running up ahead. `;
   `The meaning of Kaburaki's words, 'Just a little more,' hit me.`;
   `(Just a little more...and we can escape from here...) `;
   `(From the bottom of the deep ocean...from out of that cage we were trapped in...)`;
   `(We're finally getting out. We're going to be free...)`;
   `But along with that hope...`;
   `An indistinct fear was still inside of me.`;
   `A heavy, dark, sensation wriggled at the center of my body.`;
   `It was rotten, filthy...`;
   `It had stuck to the walls of my heart, stagnant and putrid.`;
   `(It doesn't matter...)`;
   `(Even if you get out of here, nothing will have been solved...)`;
   `And as the doubts went through my mind, my legs faltered.`;
   `Two steps, three steps, four steps, I carried forward and the doubt swelled up replacing my elation at rescue.`;
   `(You think...you're really going to be let out of here...?)`;
   `And as this thought filled my mind, I had already arrived at the last step in front of the door.`;
   Kaburaki`"............"`;
   You`"............"`;
   Sara`"............"`;
   Tsugumi`"............"`;
   Kid`"............"`;
   `Nobody said a word.`;
   `We wiped our sweat and struggled for breath as we glared at the huge door, which rose before us.`;
   Kid`"Alright, let's go."`;
   `I put my hand on the door's lever.`;

});
showTextbox();
text(() => {
   `*Clank* `;
   `The door unlocked.`;
   `And bracing my chest and shoulder against the door, I threw all my weight into opening it.`;

});
stopBGM();
playSFX({ name: `SE00_07`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Creeeeeeeaaakk.....`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
closeDimInAndOutAndFilterAnim();
playSFX({ name: `SE00_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `BOOM....`;
   `............`;
   `........`;
   `....`;

});
bgload({ name: `IMG05C`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   `Outside of the door—`;
   `The sight that greeted us was a sky filled with stars.`;
   `Covering the dark blue sky above was an infinite number of shimmering stars.`;
   `Beyond time and beyond space, the light poured down gently on our heads from above.`;
   `All of us, me, You, Sara, Tsugumi and Kaburaki... had lost all words. We could only stare at the sky above.`;
   `If I raised my hand it seemed I could touch the sky...`;
   `But not there...because it was a real night sky.`;

});
bgload({ name: `BG38A3`, transition: 20 });
showTextbox();
text(() => {
   `In this way the drama of our escape ended...`;
   `...Or at least so it seemed. But, I realized nothing had been solved.`;
   `The slimy sense of unease still gnawed inside of me.`;
   `And that indistinct notion had changed to a simmering sense of impatience - one that was ready to boil.`;
   `(That's right, it isn't finished.)`;
   `(I'm not going to let it end here.)`;
   `(Because I...don't know...the reasons behind any of this.)`;
   `The time was 11:43 p.m.`;
   `A new day was just waiting to begin...`;

});
l_choice = 0;
jump(`YC7A`);
