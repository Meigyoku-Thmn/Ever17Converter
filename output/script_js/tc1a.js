showTextbox();
text(() => {
   Girl(C1T000)`"It doesn't do us any good just standing around here, how about you take us somewhere?"`;
   //Park staff
   Park_staff(C1T001)`"Certainly. There is a relatively safe place nearby. I will take you there..."`;
   `(RELATIVELY safe...?)`;
   `That was about the same as saying that everywhere else was dangerous.`;

});
bgload({ name: `BG26A3L`, transition: 20 });
showTextbox();
text(() => {
   `We turned around and started heading back the corridor we'd been washed down. `;
   `I looked at a panel and finally realized that we were in Zweite stock—basement level two.`;
   `A short time later...`;
   `After walking a few dozen feet a strange sound caught my attention.`;

});
hideTextbox();
playSFX({ name: `SE00_13`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `Bam, bam, bam...`;

});
choice(
   `(That could be my imagination, but...)`,
   `(Did I just hear something?)`,
);
switch (l_choice) {
   case 0: goto(lbl_0000007d);
   case 1: goto(lbl_000000b8);
}
let lbl_0000007d;
showTextbox();
text(() => {
   `(That sounded like a pounding noise...?)`;
   Takeshi`"Hey, did you just hear something?"`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(C1T005)`"Sure you aren't imagining things?"`;
   //Park staff
   Park_staff(C1T006)`"Due to all of the water pressure here at LeMU, it isn't uncommon for the metal partitions to rattle occasionally."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Yeah. It must have just been my imagination.`;
   `Maybe it was just like Sora said, and LeMU's partitions were only creaking.`;
   `Shaking it off, we kept trudging forward.`;

});
l_choice = 1;
jump(`T_1B`);
let lbl_000000b8;
l_coco_point += 1;
showTextbox();
text(() => {
   Takeshi`"Hey, did you just hear something?"`;
   `I stopped and asked the two of them.`;

});
multifgload2({ id1: 1, id2: 2, name1: `TU06ADM`, name2: `SO06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Girl(C1T002)`"?"`;
   //Park staff
   Park_staff(C1T003)`"Huh?"`;
   Takeshi`"You didn't just hear a kind of pounding noise?"`;
   Girl(C1T004)`"No."`;

});
fgload({ id: 2, name: `SO03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(C1T005)`"Are you sure you aren't mistaken?"`;
   //Park staff
   Park_staff(C1T006)`"Due to all of the water pressure here at LeMU, it isn't uncommon for the metal partitions to rattle occasionally."`;
   Takeshi`"Nah, it didn't sound like that."`;
   Takeshi`"It sounded like someone pounding on something with their hand."`;
   Girl(C1T007)`"?"`;
   //Park staff
   Park_staff(C1T008)`"?"`;
   Takeshi`"I'm going to go check."`;

});
fgload({ id: 2, name: `SO10ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(C1T009)`"Alright, we'll go with you."`;
   `The girl didn't say anything. She just silently tagged along with us.`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: false });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
bgload({ name: `BG03A1`, transition: 20 });
showTextbox();
text(() => {
   `—In front of the Jellyfish Gondola.`;

});
hideTextbox();
playSFX({ name: `SE00_13`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `Bam, bam, bam....bam, bam, bam, bam`;

});
playSFX({ name: `SE00_13`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   Takeshi`"There. You can hear it, right?"`;

});
multifgload2({ id1: 1, id2: 2, name1: `TU03ADM`, name2: `SO03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(C1T010)`"Yeah..."`;
   Girl(C1T011)`"So there's someone else trapped here too...?"`;
   `We strained our ears to find where the sound was coming from.`;
   `It seemed to come from the elevator area right behind us.`;

});
hideTextbox();
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
playSFX({ name: `SE01_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `The three of us, myself and the other two girls, ran as fast as we could over to the area.`;

});
bgload({ name: `BG22A3`, transition: 20 });
playSFX({ name: `SE00_13`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   //??
   Anon(C1T012)`"Heeey! Somebodyyyy!"`;
   //??
   Anon(C1T013)`"Somebodyyyy!"`;
   //??
   Anon(C1T014)`"Is anyone thereee?"`;
   //??
   Anon(C1T015)`"Anyooooone?"`;
   `Two female voices were coming from inside the elevator.`;

});
multifgload2({ id1: 1, id2: 2, name1: `TU01ADM`, name2: `SO10ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   `The three of us looked at each other and nodded.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Hey! Can you hear us!?"`;
   //??
   Anon(C1T016)`"Ah! Y-y-yeah! I can hear you!"`;
   Takeshi`"Hang on! We'll get you out!"`;
   //??
   Anon(C1T017)`"Please!"`;
   //??
   Anon(C1T018)`"Aah... Thank goodness..."`;
   //??
   Anon(C1T019)`"I didn't think anyone would come to help..."`;
   `The voice that had answered seemed to be in good spirits.`;
   `Whoever it was didn't sound like they were weak, or injured.`;
   `I placed both of my hands firmly on the door and pried it apart with all my strength.`;

});
hideTextbox();
playSFX({ name: `SE00_10`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `The door opened.`;

});
removeBG({ mode: BLACK, transition: 2 });
stopSFX()
showTextbox();
text(() => {
   `On the other side of the door there was...nothing.`;
   `The lift (or at least the part people ride in) hadn't stopped directly on the floor.`;
   `I looked down at my feet.`;
   `I spotted a circular floor, slightly below in the darkness.`;
   `No. I realized that wasn't the floor, it was the roof of the trapped elevator.`;
   `It was a little more than six feet, from where I was standing`;
   `Next, I....`;

});
choice(
   `I stepped forward`,
   `Looked up`,
);
switch (l_choice) {
   case 0: goto(lbl_00000270);
   case 1: goto(lbl_00000279);
}
let lbl_00000270;
showTextbox();
text(() => {
   `I stepped forward.`;
   `And fell...`;
   `I should have known.`;

});
goto(lbl_0000027e);
let lbl_00000279;
showTextbox();
text(() => {
   `I looked up.`;
   `Thick pipes extended vertically with what looked like four rails attached to their side.`;
   `It seemed that the elevator used these rails to move up and down.`;
   `Come to think of it, I didn't see any trace of cables or wires that you might expect in an elevator.`;
   `Which meant that the elevator wasn't using pulleys to go up and down...`;
   `Craning my head to get a better look, I gazed further up the shaft to see where the pipe went.`;
   `There wasn't any lighting, but enough light poured through from behind me, that I could get a vague sense of the outline.`;
   `The pipes ended partway up, as did the rails.`;
   `Where they ended they were covered by some kind of heavy partition.`;
   `(Partition....?)`;
   `(Maybe it's a watertight door...?)`;
   `A section of the pipe had been closed off to probably to prevent seawater from flooding in.`;
   `I didn't notice anything else.`;
   `Not even a ladder attached to the wall.`;
   `Meaning...`;
   `(The only way down is to jump...)`;
   `I leapt out into the void.`;

});
let lbl_0000027e;
showTextbox();
text(() => {
   `Landing impressively...`;
   `...at least, that was my INTENTION...`;

});
hideTextbox();
playSFX({ name: `SE01_08`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `—WHAM!`;
   Takeshi`"Agh!"`;
   `I struck my knee painfully.`;
   //??
   Anon(C1T020)`"Are you alriiight?"`;
   `I heard a voice from below.`;
   //Park staff
   Park_staff(C1T021)`"Did you hurt yourself?"`;
   `And then a voice from above......`;
   `Looking up, from the other side of the square frame of the elevator doors, the female park employee had a worried expression on her face. `;
   Takeshi`"Yeah, sure, I'm fine, just fine..."`;
   `I replied, while rubbing my knee.`;
   `It had been a long time since I'd jumped down from a height greater than my own.`;
   `Maybe not since elementary school.`;
   `And as I stood there thinking that...`;
   Takeshi`"Hold on. I'll get you out of there."`;
   //??
   Anon(C1T022)`"Okaaaay."`;
   `I opened up the small door set into the ceiling of the elevator.`;

});
hideTextbox();
playSFX({ name: `SE00_09`, a1: 0, volume: 100 });
stopBGM();
removeBG({ mode: WHITE, transition: 2 });
playBGM({ num: 9, volume: 100 });
bgload({ name: `EV_CO02A`, transition: 10 });
showTextbox();
text(() => {
   //??
   Anon(C1T023)`"Oh, thank you so much!"`;
   `I looked to the girl inside`;
   `Her face was one big smile. She was clearly happy she was about to be freed.`;
   `(Huh?)`;
   `(I think I've seen this girl...somewhere before...)`;
   Takeshi`"Ah!"`;
   //??
   Anon(C1T024)`"Ah!"`;
   Takeshi`"You're that girl from before!"`;
   //??
   Anon(C1T025)`"You're that guy from before!"`;
   `The girl and I pointed at each other and froze.`;
   //??
   Anon(PIPI_01)`"Woof!"`;
   `I spotted the scruffy face of a dog circling around her feet.`;
   Takeshi`"Popo..."`;
   //??
   Anon(C1T026)`"His name's not 'Popo'..."`;
   Coco(C1T027)`"This little guy's name is Pipi, and my name's Coco.... Try not to mix them up, okay?"`;
   `Pipi and Coco...`;
   `That's right...`;
   `This was the dog that had clamped onto that mascot Myumyun's tail, up at the floating island, and his owner.`;
   Takeshi`"But...what are you doing here?"`;
   Coco(C1T028)`"Well what do you expect me to say to that...?"`;
   Coco(C1T029)`"I was trying to go to one of the lower levels, and all of a sudden this escalator stopped, and..."`;
   Takeshi`"It isn't an escalator, it's an elevator, alright?"`;
   Coco(C1T030)`"Ha, ha, oops.... I mean evelator, okay?"`;
   Takeshi`"No, NOT e-ve-lator, E-LE-VA-TOR."`;
   Takeshi`"If you're on a moving staircase, that's called an escalator, and if you're in a box that goes up and DOWN, now that's an elevator. Try not to mix them up."`;
   Coco`"......"`;
   Takeshi`"......"`;
   Coco(C1T031)`"Does it really matter?"`;
   Coco(C1T032)`"Anyways, I don't know why, but all of a sudden I was trapped in this box."`;
   Takeshi`"Really..."`;
   `It had been the same with me.`;
   `It had only been a little earlier that I had been trapped in another elevator...`;
   Coco(C1T033)`"Hey?"`;
   Takeshi`"Hmmm?"`;
   Coco(C1T034)`"I'd kind of like to get out of here...soon..."`;
   `Coco gave me an imploring look.`;
   Takeshi`"Oh, aah, I'm sorry."`;
   `I said that and got down on my stomach from atop the elevator.`;
   `I leaned down from the small hole, and stuck my hand out to Coco.`;
   Coco(C1T035)`"Please, help Pipi first."`;
   `Coco held up Pipi to me, stretching as far as she could to make him reach.`;
   `I grabbed onto Pipi's front legs and pulled him out from the hole in the ceiling.`;
   Pipi(PIPI_08)`"*whine*... *whine*...."`;
   `Pipi sniffed for my scent.`;
   Takeshi`"Okay, next it's your turn, Coco."`;
   `I stuck out my hand again.`;

});
playSFX({ name: `SE10_06`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   Coco(C1T036)`"Aia! Wah! Ayah!"`;
   `Coco jumped over and over, reaching out for my hand.`;
   `But... Either she was too short, or just had a terrible jump, because she didn't even reach my fingertips.`;
   Takeshi`"Hey, that reminds me..."`;
   `From the position I was in, arms hanging down, I looked around the elevator.`;
   `I realized that nobody was in there but Coco. There was no mistake.`;
   `(Huh? That's strange...)`;
   `(I could have sworn I heard two people in there...)`;

});
playSFX({ name: `SE10_06`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   Coco(C1T037)`"Aaii! Haiya! Awwww, just a little bit further..."`;
   `Coco was still jumping.`;
   Takeshi`"Hey, Coco?"`;
   Coco(C1T038)`"Yeah?"`;
   Takeshi`"Pipi can't speak, uh, English, right?"`;
   Coco(C1T039)`"Of course not!"`;
   Coco(C1T040)`"He only speaks Piplish!"`;
   Pipi(PIPI_04)`"Woof woof!"`;
   `Pipi barked into my ear.`;
   Takeshi`"That's what I thought..."`;
   Coco(C1T041)`"...Why do you ask?"`;
   Takeshi`"Uh, well earlier? I could have sworn I heard two voices coming from this elevator..."`;
   Coco(C1T042)`"Two?"`;
   Coco(C1T043)`"This whole time it's only been Pipi and me in here."`;
   Takeshi`"Uhhh.... Yeah, I can tell that from looking."`;
   Takeshi`"Maybe the next elevator over?"`;
   `Coco looked puzzled.`;
   Takeshi`"Oh, well. Whatever."`;
   Takeshi`"Anyway, before I take care of that, we gotta get you out of here."`;
   `Coco started jumping again.`;

});
playSFX({ name: `SE10_06`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   Coco(C1T044)`"Toriiyaa!"`;

});
playSFX({ name: `SE10_06`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   Coco(C1T045)`"Uuuriya!"`;

});
playSFX({ name: `SE10_06`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   Coco(C1T046)`"Eeeiii!"`;

});
playSFX({ name: `SE10_06`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   Coco(C1T047)`"Yaah!"`;

});
playSFX({ name: `SE10_06`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   Coco(C1T048)`"Waachooo!"`;
   `..........`;
   `.......`;
   `....`;

});
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG22A3`, transition: 20 });
clock(`16:36`);
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C1T049)`"Wheeew! That was close."`;
   Coco(C1T050)`"Thank you so much."`;
   `Coco shook my hand profusely.`;
   Coco(C1T051)`"Um, by the way? Who are these people...?"`;
   `Coco looked back and forth between the faces of the female park employee, and the girl in black clothing.`;

});
removeFG({ id: 1, useAnim: true });
setFGRenderOrder(1, 2, 4);
multifgload3({ name1: `TU17ADS`, name2: `CO15ADS`, name3: `SO11ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   Sora(C1T052)`"My name is Sora Akanegasaki."`;
   Sora(C1T053)`"Do you remember me?"`;

});
fgload({ id: 2, name: `CO16ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C1T054)`"Aaah! You're that lady who was giving explanations at the entrance!"`;
   Sora(C1T055)`"Yes."`;

});
fgload({ id: 2, name: `CO15ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C1T056)`"Ummm, uuuuhhh, my name is..."`;
   Sora(C1T057)`"I know."`;

});
fgload({ id: 4, name: `SO12ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(C1T058)`"Coco Yagami, correct?"`;

});
fgload({ id: 2, name: `CO06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C1T059)`"Huh? How'd you know?"`;
   Sora(C1T060)`"Because you were so enthusiastic when you replied to me, 'I'M CO-CO YA-GA-MI!'"`;

});
fgload({ id: 2, name: `CO16ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C1T061)`"Oh, yeah..."`;
   Coco(C1T062)`"You remembered?"`;
   Sora(C1T063)`"I have a good memory."`;
   Sora(C1T064)`"I also remember your dog's name. Pipi, wasn't it?"`;
   Pipi(PIPI_01)`"Woof!"`;

});
fgload({ id: 2, name: `CO11ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C1T065)`"And...you are...?"`;
   `Coco turned to the girl in black clothing.`;

});
fgload({ id: 1, name: `TU15ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Girl`"........."`;

});
showTextbox();
text(() => {
   Pipi(PIPI_11)`"Woof woof! Woof!"`;
   `Shaking his tail excitedly, for some reason Pipi latched on to the girl's skirt. `;

});
fgload({ id: 2, name: `CO06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C1T067)`"Huh?"`;
   Coco(C1T068)`"Um, wait a second...you wouldn't happen to be...that person who was wearing the Lemur costume?"`;
   Girl`"........."`;
   Coco(C1T069)`"Hey, you are, aren't you."`;

});
fgload({ id: 2, name: `CO12ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C1T070)`"I know it! You've got to be!"`;
   Coco(C1T071)`"I remember your voice!"`;

});
fgload({ id: 1, name: `TU17ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Girl(C1T072)`"Whatever. I don't really care about that, but can you do something about this mutt?"`;
   `The girl dropped her cutting gaze to Pipi who was busily gnawing on the edge of her skirt.`;

});
removeFG({ id: 2, useAnim: true });
showTextbox();
text(() => {
   Coco(C1T073)`"Ah, aah, I'm sorry."`;
   `Coco scooped up Pipi, and rapped him lightly on the head.`;

});
fgload({ id: 2, name: `CO02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C1T074)`"Bad dog, you know better than to do that."`;
   Pipi(PIPI_07)`"*whine* *whimper*..."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
setFGRenderOrder(4, 2, 1);
showTextbox();
text(() => {
   Takeshi`"Hey? How about my name? You don't want to know?"`;
   `I asked, as I twirled Pipi's tail around my finger. `;

});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C1T075)`"I already know what it is."`;
   Coco(C1T076)`"Takeshi Kuranari...right?"`;
   `Coco said this with a grin on her face.`;
   `(Huh? When did I introduce myself?)`;
   `It bugged me that she knew, but...`;
   `...oh well.`;
   `It wasn't really a big deal...`;

});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C1T077)`"By the way...I've got something I want to ask..."`;
   Sora(C1T078)`"?"`;
   Girl(C1T079)`"?"`;
   Takeshi`"?"`;
   Coco(C1T080)`"Where did everyone else go?"`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeFG({ id: 1, useAnim: true });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
stopBGM();
playBGM({ num: 4, volume: 100 });
bgload({ name: `BG25A3`, transition: 20 });
showTextbox();
text(() => {
   `While we were walking, Sora gave Coco a brief explanation of the chain of events leading up to here.`;
   `The power failure. The alarms going off.`;
   `How we all failed to get out in time.`;
   `And of course the flooding. Everything.`;
   Coco(C1T081)`"F-flooooding!?"`;
   Coco(C1T082)`"You mean, water from the ocean came gushing into LeMU!?"`;
   `Taken off guard, Coco looked as if she'd been gut-punched.`;
   `But it wasn't surprising.`;
   `Not many people would calmly reply 'Oh, really,' when notified they had just missed a massive flood.`;
   `Actually, the fact that our group was able to act as calmly as it did seemed fairly unusual.`;
   `Humans may be surprisingly resilient animals.`;
   `When one's life was on the line, people who had the ability to keep levelheaded and think the situation through to the next step.`;
   `From time immemorial, only people with these traits survived to see their children and children's children.`;
   `It occurred to me then.`;
   `And at the same time, for some reason my chest was pounding as I looked at the three girls.`;
   `(I'm the only guy here. The rest are girls)`;
   `(So, I can't mess things up. I've got to keep it together no matter what)`;
   `(As the only man here, it's my responsibility to protect the three of them)`;
   `It was a simple, old-fashioned, and maybe moldy, petrified way of thinking. But at that moment, it was simply how I felt.`;
   `Men protect women—`;
   `I was able to keep rational precisely because that sense of righteousness drove my actions to an almost embarrassing degree.`;

});
bgload({ name: `BG02A1`, transition: 20 });
showTextbox();
text(() => {
   `While I was thinking about these trivial things, we'd changed location completely.`;
   `—The Dolphin Carousel.`;
   `Suddenly...`;

});
hideTextbox();
stopBGM();
fgload({ id: 1, name: `SO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C1T083)`"Ah!"`;
   `Sora raised her voice in alarm.`;
   Takeshi`"What is it?"`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C1T084)`"Someone's coming this way."`;
   Takeshi`"...What?"`;

});
removeFG({ id: 1, useAnim: true });
hideTextbox();
playBGM({ num: 3, volume: 100 });
fgload({ id: 1, name: `YU17BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(T1B005)`"*Sigh*"`;
   //Park staff
   Park_staff(T1B006)`"For a while I wondered what was going to happen to us, but..." `;
   `It was one of the female employees that I'd met once before.`;

});
fgload({ id: 1, name: `YU15BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(T1B007)`"I'm glad we survived..."`;

});
fgload({ id: 1, name: `YU06BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(T1B008)`"Hey, aren't you...?"`;
   `The girl finally noticed us.`;
   Takeshi`"I didn't think there'd be anybody else here."`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(T1B009)`"Yeah. How are you?"`;
   Takeshi`"About as good as I look, I suppose."`;
   //Park staff
   Park_staff(T1B010)`"Seems like you had a rough time of it, too..."`;
   Takeshi`"Hey, lucky guess..."`;
   `Relaxing a bit, I returned her smile.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Behind her was someone else.`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU01BDM`, name2: `KA09ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Kid(T1B013)`"......"`;
   `It was that kid who we'd taken to the infirmary.`;
   `His expression looked darker somehow.`;
   `If he'd become super upbeat all of the sudden that would have been weird too, but...`;
   `For some reason it bothered me.`;
   Takeshi`"Is something wrong with him? He doesn't look so hot."`;

});
fgload({ id: 1, name: `YU17BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(T1B014)`"Oh, he's, a bit..."`;
   `The attendant hesitated.`;

});
fgload({ id: 1, name: `YU15BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   //Park staff
   Park_staff(T1B015)`"By the way..."`;
   //Park staff
   Park_staff(T1B016)`"Hey, Sora, do you have any idea what our situation is?"`;
   `The girl asked Sora.`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SO03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(T1B017)`"Well, the communication lines are down.... I've been investigating ways to restore our connection, but it's going to take some time."`;

});
l_choice = 2;
jump(`T_1B`);
