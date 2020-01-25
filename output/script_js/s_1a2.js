if (l_choice == 1) goto(lbl_00000829);
if (l_choice == 2) goto(lbl_00000c6b);
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
delay({ interval: 30 });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `After that...`;
   `We tried two emergency sets of stairs in the area, but both were a waste of effort.`;
   `They were shut off by thick partitions, making it impossible to climb up to Zweite stock.`;
   `According to You there were a total of 12 emergency stairs in LeMU.`;
   `Three of those were closed off, so that left nine.`;
   `You and I walked around emergency corridors searching for those nine.`;
   `But...`;

});
bgload({ name: `BG28A1L`, transition: 10 });
showTextbox();
text(() => {
   `We met with a dead end...`;

});
bgload({ name: `BG27A1`, transition: 27 });
showTextbox();
text(() => {
   `And a dead end...`;

});
bgload({ name: `BG28A1R`, transition: 27 });
showTextbox();
text(() => {
   `And a dead end...`;
   `The watertight doors were completely shut and there was no way we were getting them open manually.`;
   `We gave up and headed out into the normal corridors, to see if we could work our way around using them.`;
   `And still...`;

});
bgload({ name: `BG26A1L`, transition: 27 });
showTextbox();
text(() => {
   `We met with a dead end...`;

});
bgload({ name: `BG25A1`, transition: 27 });
showTextbox();
text(() => {
   `And a dead end...`;

});
bgload({ name: `BG26A1R`, transition: 27 });
showTextbox();
text(() => {
   `And a dead end...`;
   `Inside the sprawling LeMU complex, there was a web of several dozen corridors.`;
   `We investigated each, only finding closed doors everywhere. It seemed hopeless.`;
   `Both the normal corridors and the emergency corridors were sealed .`;
   `All were blocked off.`;
   `The only thing left for us to try was...`;

});
fgload({ id: 1, name: `YU03BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A184)`"Dritte stock."`;

});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A185)`"It looks like the only thing left is to go down a floor..."`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeFG({ id: 1, useAnim: false });
bgload({ name: `BG29A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `With the elevators out of action, the emergency stairs were our only choice.`;
   `Thankfully, one-third of the remaining three stairways were still operating.`;
   `Which meant that even if there was no going up, we could still go down.`;
   `You and I wound around and around the spiral stairwell until we reached Dritte stock (three floors underwater.)`;

});
bgload({ name: `BG25B1`, transition: 20 });
setSceneTitle({ index: 50 });
playSFX({ name: `SE01_03`, a1: 0, volume: 100 });
clock(`17:32`);
showTextbox();
text(() => {
   Kid`"Wa...water..."`;
   `I muttered this without thinking when we reached the floor.`;
   `As far as I could see, the floor was a sheet of water that had flooded in...`;
   `It was about up to my ankles.`;
   Kid`"There's water flooding in from somewhere else!"`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A186)`"No, I don't think so."`;
   You(S1A187)`"The water's not moving, is it?"`;
   `Now that she mentioned it, there was not even a ripple on the water's surface.`;
   `There was no evidence that the water level was increasing.`;
   `I looked around to be sure, but there weren't any signs that water was leaking from anywhere.`;
   Kid`"Well then, what is this...?"`;

});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A188)`"This must be from the water that washed us away earlier."`;
   You(S1A189)`"I figure the seawater that pooled on Zweite stock flowed down here."`;
   You(S1A190)`"Maybe via the emergency stairs, or a vent... I don't know how, but somehow it flowed down here."`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A191)`"Hey, you remember that saying?"`;
   You(S1A192)`"About how water flows downhill...?"`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeFG({ id: 1, useAnim: false });
bgload({ name: `BG04B1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `We entered the room from a door along the corridor.`;
   `The room's massive ancient remains were steeped in water, making it seem just like the seafloor had risen up.`;
   `As You and I looked around the wide room our legs splashed water all over.`;
   `Our drenched clothes were drying so we didn't really feel the cold.`;
   `The water on the floor was not as cold as I'd expected.`;
   `But somehow walking in the water in shoes was, well, unpleasant.`;

});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `Finally...`;

});
bgload({ name: `BG26B3R`, transition: 20 });
stopBGM();
showTextbox();
text(() => {
   `When we turned in to a corridor, we heard an unexpected sound.`;

});
playSFX({ name: `SE10_00`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `Bam, bam, bam, bam, bam... ${noWait}`;

});
waitForSFX();
stopSFX()
playSFX({ name: `SE10_00`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   Append`Bam, bam, bam, bam, bam...`;

});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A193)`"Hey, did you hear something just now?"`;
   `We stopped and listened.`;

});
playSFX({ name: `SE10_00`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `Bam, bam, bam, bam, bam... ${noWait}`;

});
waitForSFX();
stopSFX()
playSFX({ name: `SE10_00`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   Append`Bam, bam, bam, bam, bam...`;

});
fgload({ id: 1, name: `YU06BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Somebody was hitting something.`;
   `Somewhere nearby...`;
   Kid`"There are other people here..."`;

});
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A194)`"Other people that were left behind!"`;

});
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `We ran at full speed in the direction of the sound.`;

});
bgload({ name: `BG22B1`, transition: 20 });
stopSFX()
showTextbox();
text(() => {
   //??
   Unk(S1A195)`"Heeeeey! Somebooooody!"`;
   //??
   Unk(S1A196)`"Somebooooody!"`;
   //??
   Unk(S1A197)`"Is there anybody there?"`;
   //??
   Unk(S1A198)`"Anybody?"`;
   `Two girl's voices could be heard from within the elevator.`;

});
hideTextbox();
playBGM({ num: 12, volume: 97 });
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `You and I looked at each other and nodded.`;

});
fgload({ id: 1, name: `YU11BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A199)`"Hold on just a little longer!"`;
   You(S1A200)`"We're going to open the door for you!"`;
   //??
   Unk(S1A201)`"Alright! Oh good!"`;
   //??
   Unk(S1A202)`"I was so worried that no one would come."`;

});
fgload({ id: 1, name: `YU12BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `The voice from inside sounded well.`;
   `It didn't sound injured or weak.`;

});
fgload({ id: 1, name: `YU13BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A203)`"Still, how are we going to open this?"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `You placed both of her hands on the door and pushed left and right.`;
   You(S1A204)`"Uggggh!"`;
   You(S1A205)`"Oh! Why do we keep running into problems like this?"`;
   Kid`"Won't it open?"`;

});
fgload({ id: 1, name: `YU04BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A206)`"If you were paying attention, you'd be able to tell! You give it a try!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I switched places with You and reached out to try to open the door.`;
   Kid`"Ummmpphhhhhhh!"`;
   `It didn't budge.`;
   You(S1A207)`"Come on! Put some power into it!"`;
   `I tried to put my fingers in the crack in the door, but my fingernails just barely squeezed in and there was nothing happening there.`;
   Kid`"Owwww...."`;
   `Blood started oozing from the nail of my index finger.`;
   `But it was the digit next to that that caught my eye.`;
   `The thumb on my left hand.`;
   Kid`"Hey..."`;
   `I noticed a distinct mark on it.`;
   `On the meaty part of the thumb was a deep scar about a half-inch long.`;
   `I wondered if I had had it for long.`;
   `The mouth of the cut was swollen and milky-white colored.`;
   You(S1A208)`"Are you alright?"`;
   `Her question brought me back to reality.`;

});
fgload({ id: 1, name: `YU01BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A209)`"Oh, my! You're bleeding. Let me see."`;
   `You grabbed my left hand.`;
   `I suddenly bent my thumb under, hiding the scar.`;
   `For some reason I didn't want her to see it.`;
   `You took an adhesive bandage from her pocket and put it on the bloody finger.`;

});
fgload({ id: 1, name: `YU07BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A210)`"I swear, you need so much looking after."`;
   Kid`"Th-thanks..."`;
   `My finger smelled faintly sweet.`;
   //??
   Unk(S1A211)`"Uh, the door still won't open?"`;

});
fgload({ id: 1, name: `YU03BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A212)`"But it seems there is someone that needs even more looking after than you do..."`;
   Kid`"What should we do...?"`;

});
fgload({ id: 1, name: `YU01BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A213)`"...Oh, that's right."`;
   `You muttered...`;
   `She searched around in her pocket for something.`;
   `And she took out a...`;

});
fgload({ id: 1, name: `YU02BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A214)`"Drum roll please! Rat-tat-tat-tat-tat. Ta-da."`;
   You(S1A215)`"A marker!"`;
   `It was just felt-tipped pen.`;

});
fgload({ id: 1, name: `YU12BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A216)`"See this? You take it like this... then do this... around and around and around..."`;
   `As she said this, You screwed the capped end into the space between the doors.`;
   `A gap appeared.`;

});
fgload({ id: 1, name: `YU02BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A217)`"See?"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I jabbed my finger into open space gap and started forcing the door open.`;

});
playSFX({ name: `SE00_10`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `The box inside (the part where people ride) was stuck right before arriving at Dritte stock.`;
   `Above the door, jutting out some 20 inches or so was the lower bit of the elevator box.`;
   `It was at a height where if I stretched my hand out completely, it would just reach.`;
   `If we could get the box open, then it seemed possible to pull the people trapped inside over to our side.`;

});
fgload({ id: 1, name: `YU01BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A218)`"Shoulder-ride."`;
   `You's one word said it all.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `As she implied, I stood in front of her and spread my legs, bracing myself.`;
   You(S1A219)`"Hey! Why do I have to lift you up?"`;

});
fgload({ id: 1, name: `YU04BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid`"Huh?"`;
   You(S1A220)`"I meant the opposite way around..."`;
   You(S1A221)`"In this type of situation, it is the stronger person that is on the bottom, right?"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I went around behind You, wordlessly squatting down.`;
   `You was wearing a skirt after all.`;
   `(One reason I tried to be on top was I thought I would save her the embarrassment...)`;
   `As I was thinking that, You straddled my head with her legs.`;
   `I put both my hands on my knees, supporting myself, and stood up all at once.`;
   `Her soft thighs hugged against my head.`;
   `She was flush against the back of my neck.`;
   `It was a bit nice...`;
   You(S1A222)`"Wait! Hold on! We're almost there!"`;
   //??
   Unk(S1A223)`"Please help."`;
   `You took the marker and started prying it between the doors again.`;
   `She stuck her finger in the gap.`;
   `And then she opened the door with a flourish.`;

});
hideTextbox();
playSFX({ name: `SE00_10`, a1: 0, volume: 100 });
bgload({ name: `EV_SA01A`, transition: 20 });
stopSFX()
showTextbox();
text(() => {
   //??
   Unk(S1A224)`"Wow!"`;
   `With You on my shoulders, I looked up.`;
   `A girl in a uniform was peeking down.`;
   //??
   Unk(S1A225)`"Whoa!"`;
   You(S1A226)`"Ahhh!"`;

});
stopBGM();
showTextbox();
text(() => {
   Kid`"Ahhh!"`;
   `I don't know why, but all three of us exclaimed at once.`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `EV_SA01B`, transition: 26 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `Just then, I felt something like an electric shock run through me.`;
   `Severe lights went off in my mind and I heard the sound of something snapping.`;
   `I was suddenly dizzy.`;
   `I lost my sense of balance and swayed forward and back.`;

});
removeBG({ mode: WHITE, transition: 0 });
showTextbox();
text(() => {
   `My vision and consciousness were overrun by white.`;
   `I couldn't take any more...`;
   You(S1A227)`"Kyaaaa!"`;
   `I fell to the floor like a marionette with its strings snipped.`;

});
hideTextbox();
playSFX({ name: `SE02_03`, a1: 0, volume: 100 });
bgload({ name: `EV_SA01B`, transition: 20 });
showTextbox();
text(() => {
   You(S1A228)`"Ouch. Geez..."`;
   You(S1A229)`"Why'd you fall like that? You could have hurt someone!"`;
   You(S1A230)`"Geez. Lazy. Kids these days are so lazy..."`;

});
bgload({ name: `EV_SA01A`, transition: 0 });
playBGM({ num: 2, volume: 100 });
showTextbox();
text(() => {
   `Things began to fall back into focus.`;
   `I was lying on my back looking at the ceiling.`;
   `The lights were shining down brightly.`;

});
bgload({ name: `EV_SA01C`, transition: 20 });
showTextbox();
text(() => {
   //??
   Unk(S1A231)`"Wah-ha-ha-ha..."`;
   `The girls...`;
   `The girls were pointing at me and laughing.`;
   `Their innocent faces were enveloped in celestial-like light.`;
   `Just like a couple of angels...staring down from heaven.`;
   //??
   Unk(S1A232)`"Hey, are you alright?"`;
   `I didn't know why...`;
   `It was a bizarre sense of something-like deja vu-that came welling up in my mind.`;
   `I felt like I had seen this all before.`;
   `The angelic smiling faces somehow made me feel nostalgic...`;
   `Like it was a fragment of some familiar everyday scenery...`;
   `I couldn't explain it, but somehow I had that vague sense about things.`;
   //??
   Unk(S1A233)`"Huh? Why is the floor all wet? Did a water pipe burst?"`;
   `(Oh, they don't know because they've been stuck in the elevator.)`;
   `As I was about to answer, the girl cut me off.`;
   //??
   Unk(S1A234)`"But that's so important as..."`;

});
bgload({ name: `BG22B1`, transition: 20 });
multifgload2({ id1: 1, id2: 2, name1: `YU17BWM`, name2: `SA12ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   //??
   Unk(S1A235)`"...just what are you doing here, Nakkyu?"`;
   `The girl said this as she descended from the elevator, patting her clothes back into place.`;

});
fgload({ id: 1, name: `YU18BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1A236)`"I should be asking you that!"`;
   You(S1A237)`"Mayo, what are you doing here?"`;
   `Mayo? The girl's name was Mayo?`;

});
fgload({ id: 2, name: `SA13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Mayo(S1A238)`"Whaddya mean? If you'd take a look at my outfit you'd know."`;

});
fgload({ id: 1, name: `YU15BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1A239)`"You're on a school trip?"`;

});
fgload({ id: 2, name: `SA14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Mayo(S1A240)`"That's for seniors."`;

});
fgload({ id: 1, name: `YU16BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1A241)`"Oh. Right...Mayo, you're still a junior, yeah?"`;

});
fgload({ id: 2, name: `SA11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Mayo(S1A242)`"Right."`;

});
fgload({ id: 1, name: `YU15BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1A243)`"So what then?"`;

});
fgload({ id: 2, name: `SA13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Mayo(S1A244)`"Have you forgotten everything about your old high school already?"`;

});
fgload({ id: 1, name: `YU18BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1A245)`"Huh?"`;

});
fgload({ id: 2, name: `SA11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Mayo(S1A246)`"Volunteer activities!"`;
   Mayo(S1A247)`"At Kyumeikan, juniors are supposed to go out and volunteer somewhere, right?"`;
   Mayo(S1A248)`"Nakkyu, you just graduated this year so you've gotta remember, right?"`;

});
fgload({ id: 1, name: `YU16BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1A249)`"Oh, that's right ? the volunteer program!"`;
   You(S1A250)`"The Civil Service Volunteer Program."`;

});
fgload({ id: 1, name: `YU15BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1A251)`"Well...that was the official name, but it was really just a glorified field trip."`;
   You(S1A252)`"It's still the same old deal, I bet."`;
   You(S1A253)`"The girls go 'help' out at LeMU for a day, or something stupid like that."`;

});
fgload({ id: 2, name: `SA12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Mayo(S1A254)`"You got it."`;
   You(S1A255)`"When I was there we went to United Land... but I guess they changed it to LeMU, huh?"`;
   Mayo(S1A256)`"You didn't see any other students, did you Nakkyu?"`;
   Mayo(S1A257)`"The whole Kyumeikan junior class should be here."`;

});
fgload({ id: 1, name: `YU17BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1A258)`"No. I didn't see anyone."`;

});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   `While the two of them were talking, I decided to take a peek at the elevator that Mayo was stuck in.`;
   `I grabbed on to the entrance of the box and used my momentum to pull myself up.`;
   `It was empty inside.`;
   `(I thought I heard two girls inside...)`;
   `(I wonder if my mind was playing tricks on me.)`;

});
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
showTextbox();
text(() => {
   `I let go of the elevator and dropped to the floor.`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU06BWM`, name2: `SA05ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(S1A259)`"Hey? What are you doing?"`;
   `You asked me this when I returned to the ground.`;

});
choice(
   `Ask You`,
   `Don't ask You`,
);
switch (l_choice) {
   case 0: goto(lbl_00000776);
   case 1: goto(lbl_00000832);
}
let lbl_00000776;
l_you_point += 1;
showTextbox();
text(() => {
   Kid`"Well, before...didn't you hear two voices?"`;

});
fgload({ id: 1, name: `YU07BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1A260)`"Two?"`;

});
fgload({ id: 1, name: `YU15BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   `You shot the question right back at me and then looked back at Mayo.`;

});
if (g_coco_route_unlock == 0) goto(lbl_000007fb);
l_is_coco_route = 1;
if (l_is_coco_route == 0) goto(lbl_000007fb);
l_choice = 0;
jump(`SC1A`);
let lbl_000007fb;
fgload({ id: 2, name: `SA08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Mayo(S1A261)`"No. It's just me."`;

});
fgload({ id: 1, name: `YU07BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Mayo(S1A262)`"Nobody else..."`;
   Kid`"I see..."`;

});
let lbl_00000829;
showTextbox();
text(() => {
   Kid`"I guess it was just my mind playing tricks on me..."`;

});
goto(lbl_00000880);
let lbl_00000832;
showTextbox();
text(() => {
   Kid`"No...no big deal."`;

});
fgload({ id: 1, name: `YU05BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1A263)`"No big deal? You suddenly start doing chin-ups on the elevator and then you say it's no big deal?"`;
   Kid`"It must have just been my imagination. Forget about it."`;

});
fgload({ id: 1, name: `YU07BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1A264)`"Now, now...why aren't all youngsters as easy going as you these days?"`;
   `You shrugged her shoulders in an exaggerated way.`;

});
fgload({ id: 2, name: `SA08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Mayo`"..."`;
   `It seemed like Mayo was having a little trouble deciding how to react to You's behavior.`;

});
goto(lbl_00000880);
let lbl_00000880;
showTextbox();
text(() => {
   `Mayo would glance at me from time to time, but when our eyes met, she would look away.`;

});
fgload({ id: 2, name: `SA13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Mayo(S1A265)`"Uhh...um..."`;

});
fgload({ id: 1, name: `YU15BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Mayo(S1A266)`"Nakkyu? Who's this...?"`;
   You(S1A267)`"Huh? Oh, this guy?"`;
   You(S1A268)`"He's...just a visitor."`;
   You(S1A269)`"We just met a while ago...but, you know, a lot has happened since then."`;

});
fgload({ id: 2, name: `SA03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Mayo(S1A270)`"Nice to meet you."`;
   `There was something a little off about Mayo's greeting.`;

});
fgload({ id: 1, name: `YU02BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1A271)`"And this is Mayo."`;
   You(S1A272)`"She goes to your old high school?"`;
   Kid`"Nice to meet you, too."`;
   `But then again, my words were pretty stiff as well.`;

});
fgload({ id: 1, name: `YU01BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1A273)`"But her real name is Sara Matsunaga..."`;
   Kid`"Sara? So, why Mayo?"`;
   You(S1A274)`"Matsunaga Sara."`;
   You(S1A275)`"Tuna Sara"`;
   You(S1A276)`"A tuna salad is loaded with...?"`;

});
fgload({ id: 2, name: `SA07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S1A277)`"Mayonnaise...at least for Nakkyu it is."`;
   Kid`"Ha. I see."`;
   `I said that, but I still didn't really get it.`;
   `I had the feeling that simple salad dressing was better suited to tuna salad.`;
   `Well, whatever. It wasn't important.`;

});
fgload({ id: 2, name: `SA01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S1A278)`"By the way...um...your name is...?"`;
   Kid`"Na...name..."`;
   Sara(S1A279)`"Yeah. Your name."`;
   Kid`"My...my...my name is..."`;

});
fgload({ id: 1, name: `YU07BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1A280)`"He says he can't remember."`;

});
fgload({ id: 2, name: `SA08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S1A281)`"What?"`;

});
fgload({ id: 1, name: `YU03BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1A282)`"Amnesia, that's what."`;

});
fgload({ id: 2, name: `SA06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S1A283)`"Amnesia...?"`;

});
fgload({ id: 2, name: `SA08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S1A284)`"...Really?"`;
   Kid`"Ye-yes..."`;

});
fgload({ id: 2, name: `SA02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S1A285)`"Oh, wow. Cool."`;

});
fgload({ id: 1, name: `YU06BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Kid`"Wow?"`;
   Sara(S1A286)`"That's kind of cool, isn't it? I mean, like, amnesia."`;
   Sara(S1A287)`"It sounds kind of like an international man of mystery, kind of thing."`;

});
fgload({ id: 2, name: `SA01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S1A288)`"Like, maybe...you could be being hunted by an underground organization or assassins or something."`;

});
fgload({ id: 1, name: `YU07BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Kid`"Assassins..."`;
   Kid`"I...I wouldn't kill anybody!"`;

});
fgload({ id: 1, name: `YU05BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1A289)`"I keep trying to tell you not to take things so seriously."`;

});
fgload({ id: 2, name: `SA08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S1A290)`"Huh. Amnesia..."`;

});
fgload({ id: 2, name: `SA02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S1A291)`"You really do have it? That amnesia thing."`;
   `Sara kept staring at me as if I were something exotic.`;
   `Like I were an angel...`;
   `Replete with a set of wings on my back.`;
   `The divine and nostalgic feeling from before had vanished like an illusion.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
delay({ interval: 30 });
bgload({ name: `BG26B3R`, transition: 26 });
playBGM({ num: 3, volume: 100 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`17:49`);
showTextbox();
text(() => {
   `The three of us aimed for an exit.`;
   `It goes without saying, but Sara couldn't hide her surprise at the transformation the complex had undergone.`;

});
fgload({ id: 1, name: `SA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S1A292)`"What's this?"`;
   Sara(S1A293)`"Why is this whole place flooded?"`;

});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S1A294)`"And there doesn't seem to be anyone around..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `While we walked, You brought Sara up to speed with the situation, while walking next to her.`;
   `She told her that You herself was working at LeMU.`;
   `How I had collapsed in by the kiosk.`;
   `How after falling down, I was hauled to the infirmary.`;
   `After finishing the story, You went on.`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU15BWM`, name2: `SA11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(S1A295)`"And then, you know, suddenly the alarm started ringing..."`;
   Kid`"Alarm?"`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU06BWM`, name2: `SA06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(S1A296)`"What? I didn't tell you about this yet?"`;
   Kid`".........?"`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU01BWM`, name2: `SA01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(S1A297)`"While you were out, they rang the emergency evacuation alarm."`;

});
fgload({ id: 1, name: `YU07BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1A298)`"I don't know the why...but it said: 'Anyway, everyone please escape,' or something like that."`;

});
fgload({ id: 1, name: `YU15BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1A299)`"Mayo, you heard it, right?"`;

});
fgload({ id: 2, name: `SA11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S1A300)`"Yes."`;
   Sara(S1A301)`"Suddenly the elevator stopped...and I got stuck inside..."`;

});
fgload({ id: 2, name: `SA05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S1A302)`"I think it was right after that when I heard the alarm."`;

});
fgload({ id: 1, name: `YU07BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1A303)`"And then there were three other staffers and myself in the infirmary..."`;
   You(S1A304)`"The other three said they would go out to check what was going on and never came back. I waited, but nobody returned."`;
   You(S1A305)`"The only two people left in the room were me and you..."`;

});
fgload({ id: 2, name: `SA08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid`"........."`;

});
fgload({ id: 1, name: `YU03BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1A306)`"I couldn't just abandon you there..."`;

});
fgload({ id: 1, name: `YU02BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1A307)`"And at that point, I wasn't really even that worried."`;
   You(S1A308)`"I figured probably some kid had just gone and pushed the emergency alarm button...that was all I thought was going on."`;

});
fgload({ id: 2, name: `SA07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S1A309)`"I figured, even with a prank, it must be serious for them to sound the emergency evacuation warning..."`;

});
fgload({ id: 1, name: `YU07BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1A310)`"Well, now that you mention it I suppose so..."`;
   You(S1A311)`"But at that time I was just, I don't know..."`;
   You(S1A312)`"I was worried about this kid..."`;
   Kid`"You were worried about me?"`;

});
fgload({ id: 1, name: `YU08BWM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1A313)`"Well, sure..."`;

});
fgload({ id: 2, name: `SA01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S1A314)`"And? Then what happened?"`;

});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   `Everything after that was old news to me.`;
   `The closing of the watertight doors.`;
   `Our search for the emergency stairs to the floating island.`;
   `And of course, You also told Sara about how we got washed away by flood water..`;

});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
dimOff_ac = 0;
closeDimOverlay();
stopBGM();
let lbl_00000c6b;
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `After that...`;
   `I, You and Sara did a complete check of Dritte stock's corridors.`;
   `But...`;

});
bgload({ name: `BG28A1L`, transition: 20 });
showTextbox();
text(() => {
   `We met with a dead end...`;

});
bgload({ name: `BG27A1`, transition: 27 });
showTextbox();
text(() => {
   `And a dead end...`;

});
bgload({ name: `BG28A1R`, transition: 27 });
showTextbox();
text(() => {
   `And a dead end...`;

});
bgload({ name: `BG26B1L`, transition: 27 });
showTextbox();
text(() => {
   `And a dead end...`;

});
bgload({ name: `BG25B1`, transition: 27 });
showTextbox();
text(() => {
   `And a dead end...`;

});
bgload({ name: `BG26B1R`, transition: 27 });
showTextbox();
text(() => {
   `After dead end...`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `BG30B1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
showTextbox();
text(() => {
   `And the final place that we ended up...`;
   `Was in front of a small door at the end of a narrow corridor.`;
   `In the middle the word 'Himmel' was engraved.`;
   Kid`"What is this...?"`;

});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S1A315)`"Hmmm. Good question. This is the first time I've been here..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Saying that, You took hold of the door knob.`;
   `It didn't open...`;
   `It didn't even budge.`;

});
playSFX({ name: `SE04_03`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `Next she started tapping randomly on the ten-key display next to the door.`;
   `You should have known that it was a waste of energy...`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU03BDM`, name2: `SA08ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(S1A316)`"Haaaaaa...."`;
   You(S1A317)`"So this is the end..."`;
   `You punctuated this with a sigh.`;

});
fgload({ id: 2, name: `SA13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S1A318)`"The end...you mean we're..."`;

});
fgload({ id: 1, name: `YU17BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1A319)`"Yup..."`;
   You(S1A320)`"It looks like we're locked in..."`;

});
playSFX({ name: `SE01_08`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `Gong.`;
   `You weakly kicked the door.`;
   `Following the sound, we went silent.`;
   `The atmosphere around us was heavy.`;
   `Both You and Sara wore tired expressions as if they couldn't even be bothered to speak anymore.`;
   `It was a gloomy silence.`;
   `To try to lighten things up, I said -`;
   Kid`"Hey, anyway it doesn't do us any good to just stand around here!"`;
   Kid`"We've gotta think of something!"`;

});
fgload({ id: 2, name: `SA08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S1A321)`"Something?"`;
   Kid`"A way to escape!"`;

});
fgload({ id: 1, name: `YU05BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1A322)`"You have any bright ideas?"`;
   Kid`"Well, let's see...how about..."`;

});
choice(
   `Try to contact the outside ...`,
   `Look for other exits ...`,
);
switch (l_choice) {
   case 0: goto(lbl_00000e22);
   case 1: goto(lbl_00000e7b);
}
let lbl_00000e22;
l_you_point += 1;
showTextbox();
text(() => {
   Kid`"For example, we could try to contact the outside or something."`;

});
fgload({ id: 2, name: `SA05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S1A323)`"How? Cell phones don't even work..."`;
   Kid`"Even without a cell phone, LeMU must have other means of communicating, right?"`;

});
fgload({ id: 1, name: `YU07BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1A324)`"Means...of communication...?"`;

});
fgload({ id: 1, name: `YU02BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1A325)`"Oh, right! The Control Room!"`;

});
goto(lbl_00000f0e);
let lbl_00000e7b;
showTextbox();
text(() => {
   Kid`"For example, we could look for other exits or something."`;

});
fgload({ id: 2, name: `SA05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S1A326)`"Anything else? Hello...you know we are in the middle of the ocean, right?"`;
   Kid`"I know. I'm not saying we try to escape out a window or anything."`;
   Kid`"Nothing like that..."`;
   Kid`"If this is the middle of the ocean, then there must be a duct for outside air. So..."`;

});
fgload({ id: 2, name: `SA01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S1A327)`"Oh, I see. So you're saying that we use that ventilation duct to escape? Like they always do in the movies."`;
   Kid`"Yeah. That's what I mean."`;

});
fgload({ id: 1, name: `YU03BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1A328)`"Sorry, but there's no way that's possible."`;
   Kid`"Huh? Why not?"`;
   You(S1A329)`"The ducts that go to the outside aren't big enough for people to pass through."`;

});
fgload({ id: 2, name: `SA03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid`"No...no way..."`;
   `My shoulders slumped in disappointment.`;
   `Sara's face was also covered in dejection.`;
   Sara(S1A330)`"I wish I could at least contact my friends outside..."`;

});
fgload({ id: 1, name: `YU07BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1A331)`"Contact outside...?"`;
   Sara(S1A332)`"But cell phones don't even work..."`;

});
fgload({ id: 1, name: `YU02BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S1A333)`"Oh, right! The Control Room!"`;

});
goto(lbl_00000f0e);
let lbl_00000f0e;
fgload({ id: 2, name: `SA06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S1A334)`"Why didn't I think of this until now?"`;
   You(S1A335)`"From there we should at least be able to contact someone on the floating island."`;
   `You's face lit up again.`;

});
fgload({ id: 2, name: `SA02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   `Next, light returned to Sara's eyes as well.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
showTextbox();
text(() => {
   `But...`;

});
bgload({ name: `BG16A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
clock(`18:24`);
playSFX({ name: `SE05_04`, a1: 0, volume: 100 });
shakeScreenHard();
showTextbox();
text(() => {
   `Crash!`;

});
bgload({ name: `EV_YU09A`, transition: 20 });
playBGM({ num: 18, volume: 100 });
showTextbox();
text(() => {
   `You did a fantastic heel stomp on the console in the Control Room.`;
   You(S1A336)`"What's this? Why won't it go through?"`;
   You(S1A337)`"What's the matter?"`;
   `It looked like she were going rant.`;
   `No, she was already ranting...`;
   Sara(S1A338)`"Hey, hey! Nakkyu, wait a second!"`;
   Kid`"Hey, what are you going to do with that chair!?"`;
   You(S1A339)`"I'm going smash it into this stupid... machine!"`;
   You(S1A340)`"I'm going to destroy it! I mean smithereens! Absolutely pulverize it!"`;
   Sara(S1A341)`"Ta-take it easy! Just calm down!"`;
   You(S1A342)`"How do you expect me to stay calm in a situation like this?"`;
   You(S1A343)`"How can all of the communication lines be down!"`;
   You(S1A344)`"E-mail, too. Even the emergency line won't go through!"`;
   You(S1A345)`"Is this possible?"`;
   You(S1A346)`"I don't get it! Something is wrong here!"`;
   Kid`"Still, you don't have to destroy..."`;
   You(S1A347)`"Shut up! I've had...enough! Kyaaaa!"`;
   `Sara and I restrained You and dragged her outside the control room.`;

});
bgload({ name: `BG15B1`, transition: 20 });
multifgload2({ id1: 1, id2: 2, name1: `YU10BDM`, name2: `SA13ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(S1A348)`"Huff, huff, huff..."`;
   `You's eyes were bloodshot like a rabid dog.`;
   `Somehow her fantasy-like outfit seemed out of place.`;
   Kid`"Well, if it has come to this, there is nothing else to do..."`;
   Kid`"Let's just...split up again and look for an exit."`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU04BDM`, name2: `SA06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(S1A349)`"It's no use! After we already looked everywhere?"`;
   Kid`"But we haven't looked inside the rooms."`;

});
fgload({ id: 2, name: `SA01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S1A350)`"I see."`;
   Sara(S1A351)`"There might be something like a secret passage hidden or something..."`;
   You(S1A352)`"There is no way. This isn't a ninja house you know."`;
   Kid`"Anyway, let's just...look one more time, alright?"`;

});
fgload({ id: 2, name: `SA02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S1A353)`"Because there might be a helpless maiden trapped somewhere like I was."`;

});
fgload({ id: 1, name: `YU05BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S1A354)`"I'm off."`;

});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
stopBGM();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `So with that, the three of us, Sara, You and I, split up and started searching the complex.`;
   `We agreed we'd meet again in an hour...`;
   `We decided to meet in front of the Control Room.`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
delay({ interval: 30 });
l_choice = 0;
jump(`S_1B`);
