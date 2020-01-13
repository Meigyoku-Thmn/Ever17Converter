varop(`(28 0a a4) b0 := (00) 5`);
varop(`(28 0a a4) b1 := (00) 5`);
varop(`(28 0a a4) b2 := (00) 5`);
setDialogBoxColor(GREEN);
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Kid..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Come on, I'm asking you..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Lift up your head."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I hadn't wanted to blame him in the first 
place.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I turned around and held out my hand again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But he wouldn't look me in the eyes.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C308`); appendText; 
   Kid`"Even if you say that, Takeshi..."`;
   waitForClick; clearText; marker; sound(`T5C309`); appendText; 
   Kid`"I can't think like you."`;
   waitForClick; clearText; marker; sound(`T5C310`); appendText; 
   Kid`"What's impossible is impossible!"`;
   waitForClick; clearText; marker; sound(`T5C311`); appendText; 
   Kid`"We're not all the same."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C312`); appendText; 
   Kid`"I can't do it."`;
   waitForClick; clearText; marker; sound(`T5C313`); appendText; 
   Kid`"I'm just not that strong."`;
   waitForClick; clearText; marker; sound(`T5C314`); appendText; 
   Kid`"And I never will be...!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C315`); appendText; 
   Kid`"I can't go on living."`;
   waitForClick; clearText; marker; sound(`T5C316`); appendText; 
   Kid`"I don't want to go on living...!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C317`); appendText; 
   Kid`"So, then..."`;
   waitForClick; clearText; marker; sound(`T5C318`); appendText; 
   Kid`"I should just..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't want to make him say the rest.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I couldn't stop him.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I knew how hard it would be for him to say.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Even I wasn't that strong.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everyone waited for the kid's next words in 
silence...`;
   waitForClick; clearText; marker; appendText; 
   Narr`They were probably unthinkable.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO10ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C319`); appendText; 
   Sora`"Takeshi, stop it. Please."`;
   waitForClick; clearText; marker; sound(`T5C320`); appendText; 
   You`"!!"`;
   waitForClick; clearText; marker; sound(`T5C321`); appendText; 
   Coco`"......!?"`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"......"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"......"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora walked silently forward and stood in 
between the kid and me.`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playBGM({ num: 4, volume: 100 });
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C322`); appendText; 
   Sora`"Takeshi, please stop being so hard on him."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"No...I don't mean it that way."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SO17ADM`, name2: `KA09ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C323`); appendText; 
   Sora`"Kid, please look up at us."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"......."`;
   waitForClick; clearText; marker; sound(`T5C324`); appendText; 
   Sora`"We can't fight...not like this. It isn't 
right."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora looked sad as she said this.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sora, this isn't just any old fight."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'm not trying to shut him out, I just..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I wanted him to know how important it was to 
keep eating."`;
   waitForClick; clearText; marker; sound(`T5C325`); appendText; 
   Sora`"I know that. However..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C326`); appendText; 
   Sora`"See, the Kid looks like he's already feeling 
a little better."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora smiled slightly as she said this.`;
   waitForClick; clearText; marker; sound(`T5C327`); appendText; 
   Sora`"He really didn't mean it....okay?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"......"`;
   waitForClick; clearText; marker; sound(`T5C328`); appendText; 
   Sora`"Please forgive him?"`;
   waitForClick; clearText; marker; sound(`T5C329`); appendText; 
   Sora`"Let's make another sandwich...?"`;
   waitForClick; clearText; marker; sound(`T5C330`); appendText; 
   Sora`"It is a good thing that there are still 
plenty of provisions left."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"No! That's not what I'm talking about!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I screamed.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C331`); appendText; 
   Sora`"!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora stared back at me, eyes wide with 
surprise.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It isn't about that, Sora...!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It isn't about whether we have more or not!!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It isn't...can't you understand that!?"`;
   waitForClick; clearText; marker; appendText; 
   Sora`"......"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C332`); appendText; 
   Sora`"I, I understand."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C333`); appendText; 
   Sora`"No, I...don't understand."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, which one is it, Sora?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had taken this all much further than 
necessary.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I couldn't stop myself.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Do you, or don't you understand?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Do you understand what I mean?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Do you really understand why I would do 
something like that?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"So you don't know why I did it?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You're a first-rate AI program, aren't you?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C334`); appendText; 
   Sora`"T-Takeshi...?"`;
   waitForClick; clearText; marker; sound(`T5C335`); appendText; 
   Sora`"What...do you want me to do...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C336`); appendText; 
   Sora`"I, I..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora started to waver.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C337`); appendText; 
   Sora`"I..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C338`); appendText; 
   Sora`"I don't understand."`;
   waitForClick; clearText; marker; sound(`T5C339`); appendText; 
   Sora`"I don't know the answer."`;
   waitForClick; clearText; marker; appendText; 
   Narr`And looking down, Sora bit her lip.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"There's no way you could, could you...? 
Understand how important food is."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Because you aren't human like we are."`;
   waitForClick; clearText; marker; appendText; 
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, forget it."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Besides, the floor just shook, right? What 
was that, Sora?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Did something happen to LeMU?"`;
   waitForClick; clearText; marker; appendText; 
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What happened...? Come on tell us."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"If you check, you should find out in no time, 
right?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hurry up! Why won't you tell me what 
happened!?"`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
removeFG({ id: 1, useAnim: false });
playSFX({ name: `SE01_03`, a1: 0, volume: 90 });
fgload({ id: 1, name: `SO13ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C340`); appendText; 
   Sora`".....!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She thought she heard the sound of someone 
running in water.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sounds where there should have been none.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO17ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora kept her distance from us, and ran out 
the exit of the room.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE01_00`, a1: 0, volume: 90 });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Sora...!?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`After watching her run off, Tsugumi stood 
right in front of me.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU08ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"W...what?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi was glaring at me.`;
   waitForClick; clearText; marker; sound(`T5C341`); appendText; 
   Tsugumi`"Takeshi..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5C342`); appendText; 
   Tsugumi`"You are such a scumbag."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"......."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You went over to the kid and hugged him 
around the shoulders.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco and Pipi absently looked around the room 
at everyone.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 13, volume: 100 });
bgload({ name: `BG25B3`, transition: 20 });
clock(`19:27`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Feeling like I was no longer wanted, I fled 
from the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(What...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(What was that about...!)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I'm...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I'm not wrong...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I'm not wrong...right?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`Blood rushed to my head.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Damn it...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`Even I could tell.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had said too much...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But once you say something, it isn't easy to 
take it back.`;
   waitForClick; clearText; 
});
bgload({ name: `BG30B1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I stopped at the end of the corridor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`'HIMMEL'`;
   waitForClick; clearText; marker; appendText; 
   Narr`Dead end. Nowhere to go.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And thinking that...I realized for some 
reason that the door in front of me never 
seemed to open.`;
   waitForClick; clearText; marker; appendText; 
   Narr`When we had searched around LeMU, we'd tried 
to open the electronic lock, but it hadn't 
budged.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Thinking about being trapped here was enough 
to hate even the existence of that door. `;
   waitForClick; clearText; marker; sound(`T5C343`); appendText; 
   Sora`"....shi..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I heard a voice behind me and turned around.`;
   waitForClick; clearText; 
});
bgload({ name: `BG25B1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"...What?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The corridor's watertight door had shut 
without me realizing. `;
   waitForClick; clearText; marker; appendText; 
   Narr`I hadn't even noticed...`;
   waitForClick; clearText; marker; sound(`T5C344`); appendText; 
   Sora`"Takeshi..."`;
   waitForClick; clearText; marker; sound(`T5C345`); appendText; 
   Sora`"What are you doing here?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Looking around, I couldn't see Sora anywhere.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...Sora?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, where are you?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked all around.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no way out other than the 
watertight door.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It wasn't as if she were hiding behind 
something.`;
   waitForClick; clearText; 
});
bgload({ name: `BG30B1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Sora...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You want to show me where you are...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked around again, but she was nowhere to 
be found.`;
   waitForClick; clearText; marker; sound(`T5C346`); appendText; 
   Sora`"Takeshi?"`;
   waitForClick; clearText; marker; sound(`T5C347`); appendText; 
   Sora`"Where are you looking?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could only hear her voice.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, come on..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Stop playing around and show yourself."`;
   waitForClick; clearText; marker; sound(`T5C348`); appendText; 
   Sora`"I'm right here."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I heard her voice...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Right above me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked up.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
playSFX({ name: `SE02_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Fwaaaaaaash...........`;
   waitForClick; clearText; marker; appendText; 
   Narr`Huge droplets of water started raining down 
from the ceiling.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The deluge soaked me mercilessly.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"....The sprinkler?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Water was blowing out of nozzles in the 
crevice between panel lines on the ceiling.`;
   waitForClick; clearText; 
});
hideTextbox();
stopSFX()
playBGM({ num: 12, volume: 100 });
playSFX({ name: `SE02_11L`, a1: 0, volume: 90 });
bgload({ name: `BG25B1`, transition: 20 });
varop(`(28 0a a2) 41 := (00) 6`);
varop(`(28 0a a2) 42 := (00) 68`);
varop(`(28 0a a2) 50 := (00) 0`);
showDimInAndOutAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The water level was rising, a little at a 
time, but still noticeably.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It didn't look like water was draining from 
either side of the corridor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I ran over to the hatch, and started pounding 
on it with my fist.`;
   waitForClick; clearText; marker; sound(`T5C349`); appendText; 
   Sora`"Takeshi..."`;
   waitForClick; clearText; marker; sound(`T5C350`); appendText; 
   Sora`"What's wrong?"`;
   waitForClick; clearText; marker; sound(`T5C351`); appendText; 
   Sora`"What are you doing?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Open this door, Sora!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"This is the only way out of here! Come on!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Suddenly all of the sprinklers, and the small 
sensors lined up next to them on the ceiling, 
turned and pointed at me.`;
   waitForClick; clearText; marker; sound(`T5C352`); appendText; 
   Sora`"What's wrong?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Can't you tell? This situation is...!"`;
   waitForClick; clearText; marker; sound(`T5C353`); appendText; 
   Sora`"........?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The cameras slowly tracked me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The sensor eyes, probably not even a 
millimeter large, were flashing light.`;
   waitForClick; clearText; marker; appendText; 
   Sora`"........."`;
   waitForClick; clearText; marker; sound(`T5C354`); appendText; 
   Sora`"What's wrong?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, come on...don't tell me you don't 
understand, Sora?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora was observing the situation leisurely...`;
   waitForClick; clearText; marker; sound(`T5C355`); appendText; 
   Sora`"Is...something wrong?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"......"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...Some..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Somebody!! Open this door, please!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I kept pounding on the door, but no answer 
came from the other side of the thick wall.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Looking around, I couldn't find one of the 
panels used to automatically open and close 
the watertight doors.`;
   waitForClick; clearText; 
});
bgload({ name: `BG30B1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The sprinklers seemed to be even increasing 
their output, if that were possible.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was hard to see anything because of the 
mist.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sora..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What are you doing...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt a slight shiver run through me.`;
   waitForClick; clearText; marker; sound(`T5C356`); appendText; 
   Sora`"I am..."`;
   waitForClick; clearText; marker; sound(`T5C357`); appendText; 
   Sora`"I am only a program, after all."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her voice sounded more and more mechanical.`;
   waitForClick; clearText; marker; sound(`T5C358`); appendText; 
   Sora`"A program that can only give answers based on 
assumed information."`;
   waitForClick; clearText; marker; sound(`T5C359`); appendText; 
   Sora`"I am only an RSD-generated image in 
human form."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`".......!?"`;
   waitForClick; clearText; marker; sound(`T5C360`); appendText; 
   Sora`"I cannot understand how important food is."`;
   waitForClick; clearText; marker; sound(`T5C361`); appendText; 
   Sora`"I have no need to consume organic matter."`;
   waitForClick; clearText; marker; sound(`T5C362`); appendText; 
   Sora`"It unnecessary for me to eat to continue 
life."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"W-what are you talking about!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Soraaa!!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Stop it! Stop the sprinklers!!"`;
   waitForClick; clearText; 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I slammed my body against the door, but it 
didn't budge.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: WHITE });
closeDimInAndOutAndFilterAnim();
removeBG({ mode: WHITE, transition: 02 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Suddenly everything grew dim.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Everything started to sway.`;
   waitForClick; clearText; marker; appendText; 
   Narr`All colors became distorted, and outlines 
suddenly became vague.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't see anything.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; sound(`T5C363`); appendText; 
   Sora`"No.... No....!"`;
   waitForClick; clearText; marker; sound(`T5C364`); appendText; 
   Sora`"Who are you!?"`;
   waitForClick; clearText; marker; sound(`T5C365`); appendText; 
   Sora`"You aren't me!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Sora...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(What are you saying...?)`;
   waitForClick; clearText; 
});
stopSFX()
removeBG({ mode: BLACK, transition: 02 });
playBGM({ num: 24, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`...............`;
   waitForClick; clearText; marker; appendText; 
   Narr`.........`;
   waitForClick; clearText; marker; appendText; 
   Narr`Terrified, I opened my eyes.`;
   waitForClick; clearText; 
});
removeBG({ mode: WHITE, transition: 03 });
bgload({ name: `EV_SO11D`, transition: 00 });
setSceneTitle({ index: 36 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"!?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Where am I?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There were no walls.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My body had been suddenly thrown out into the 
middle of the ocean.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Oh no! I won't be able to breathe...!)`;
   waitForClick; clearText; marker; appendText; 
   Narr`Panicking, I flailed my arms.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But there was no water in which to swim.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt no pressure. The area around me was 
probably only 1 atmosphere.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My clothes were wet, but other than that I 
didn't feel any water.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Slowly I let out my breath, and sucked in 
more air.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(What's going on...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had no trouble breathing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't see anything under me, but it 
seemed at least I was standing on some kind 
of surface.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Ah......!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora was swimming in the ocean.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was moving freely in the dark blue space.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...Sora?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Fearfully, I called to her.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO11A`, transition: 10 });
showTextbox();
text(() => {
   marker; sound(`T5C366`); appendText; 
   Sora`"Oh..."`;
   waitForClick; clearText; marker; sound(`T5C367`); appendText; 
   Sora`"What's wrong, Takeshi?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She looked at me, her image flickering as she 
approached. `;
   waitForClick; clearText; marker; appendText; 
   Narr`She smiled as she always did.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO11B`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But then her eyebrows arched suddenly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And a scowl took over her features......`;
   waitForClick; clearText; marker; sound(`T5C368`); appendText; 
   Sora`"Don't you want to know what caused the floor 
to shake earlier?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Uh, yeah...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I mean, no. I don't..."`;
   waitForClick; clearText; marker; sound(`T5C369`); appendText; 
   Sora`"Is it yes? Or is no?"`;
   waitForClick; clearText; marker; sound(`T5C370`); appendText; 
   Sora`"Which is it?"`;
   waitForClick; clearText; marker; sound(`T5C371`); appendText; 
   Sora`"I don't know how to answer you."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora murmured this in a gravelly voice.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO11C`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T5C372`); appendText; 
   Sora`"I am currently checking the cause of the 
earlier tremor."`;
   waitForClick; clearText; marker; sound(`T5C373`); appendText; 
   Sora`"Due to a sudden sensor failure, the results 
of my investigation will take approximately 
three times longer than usual."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her report was almost businesslike.`;
   waitForClick; clearText; marker; sound(`T5C374`); appendText; 
   Sora`"Even I do not have the ability to fully 
grasp a situation instantaneously."`;
   waitForClick; clearText; marker; sound(`T5C375`); appendText; 
   Sora`"Just like you humans, I sometimes think, get 
confused and make mistakes."`;
   waitForClick; clearText; marker; sound(`T5C376`); appendText; 
   Sora`"Unfortunately..."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO11A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T5C377`); appendText; 
   Sora`"That is how my creator chose to make me."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora tried to smile again.`;
   waitForClick; clearText; marker; sound(`T5C378`); appendText; 
   Sora`"That's right. I've been programmed to imitate 
humans in this regard only."`;
   waitForClick; clearText; marker; sound(`T5C379`); appendText; 
   Sora`"Inconvenient, wouldn't you agree?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Suddenly, she looked like she was crying.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO11B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T5C380`); appendText; 
   Sora`"Why does something as inconvenient as me 
exist...?"`;
   waitForClick; clearText; marker; sound(`T5C381`); appendText; 
   Sora`"I don't know anymore..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"H-hey, you aren't...inconvenient!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I shouted this.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Even machines that are supposed to be 
perfect, and people who are called geniuses, 
even they make mistakes sometimes."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"They're both the same. They're hardly any 
different."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"People are only concerned about making things 
easier on themselves. That's why they think 
'Machines are such a pain' or 'Machines are 
faster'...."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"If I only wanted data, then I could just use 
a terminal."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"But I ask you and I talk with you, because I 
don't only want to know the facts."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I want to know your words, and your thoughts 
and feelings."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I've never felt you are inconvenient."`;
   waitForClick; clearText; marker; sound(`T5C382`); appendText; 
   Sora`"Really?"`;
   waitForClick; clearText; marker; sound(`T5C383`); appendText; 
   Sora`"Is that really how you feel, Takeshi?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO11C`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora's expression suddenly became normal.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was hard for me to tell what she was 
feeling.`;
   waitForClick; clearText; marker; appendText; 
   Narr`What was she really thinking?`;
   waitForClick; clearText; marker; sound(`T5C384`); appendText; 
   Sora`"Takeshi..."`;
   waitForClick; clearText; marker; sound(`T5C385`); appendText; 
   Sora`"Have you ever lied before?"`;
   waitForClick; 
});
choice(
   `Yes`
   `No`
);
switch (choice) {
   case 0: goto(lbl_000004b6);
   case 1: goto(lbl_000004bf);
}
let lbl_000004b6;
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Y-yes, I have."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"In the 20 years I've been alive, of course 
I've lied."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sometimes I've told lies to give someone a 
hard time, and maybe others when I thought it 
would make the person happy."`;
   waitForClick; clearText; marker; sound(`T5C386`); appendText; 
   Sora`"How many times have you lied?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I don't have a clue. It's not like I've taken 
notes."`;
   waitForClick; clearText; 
});
goto(lbl_000004c4);
let lbl_000004bf;
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"N-no."`;
   waitForClick; clearText; marker; sound(`T5C387`); appendText; 
   Sora`"Really? In your whole life, not even once?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`T5C388`); appendText; 
   Sora`"You sure you aren't lying right now about 
never having told a lie?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Isn't that a paradox?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You really are amazing, Sora..."`;
   waitForClick; clearText; marker; appendText; 
   Sora`"........."`;
   waitForClick; clearText; 
});
let lbl_000004c4;
showTextbox();
text(() => {
   marker; sound(`T5C389`); appendText; 
   Sora`"Really...I see."`;
   waitForClick; clearText; marker; sound(`T5C390`); appendText; 
   Sora`"Well then...do you think I've ever told a 
lie up till now?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`".........?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a strange question.`;
   waitForClick; clearText; marker; sound(`T5C391`); appendText; 
   Sora`"Well? Can you tell...if I have, or have not?"`;
   waitForClick; 
});
choice(
   `You have`
   `You haven't`
);
switch (choice) {
   case 0: goto(lbl_000004ec);
   case 1: goto(lbl_000004f5);
}
let lbl_000004ec;
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"You have..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Maybe you have."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Maybe you've been fooling us, and we just 
haven't noticed."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, to tell you the truth...I can't really 
tell."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"But..."`;
   waitForClick; clearText; 
});
goto(lbl_000004fa);
let lbl_000004f5;
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"You haven't."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"As far as I can tell."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You've told jokes, but I don't think you've 
lied..."`;
   waitForClick; clearText; 
});
let lbl_000004fa;
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"You told us yourself, Sora, that you still 
weren't able to lie very well, I remember you 
saying that. "`;
   waitForClick; clearText; marker; sound(`T5C392`); appendText; 
   Sora`"Yes...that's right. You remembered well."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO11A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T5C393`); appendText; 
   Sora`"Heh, heh..."`;
   waitForClick; clearText; marker; sound(`T5C394`); appendText; 
   Sora`"You have a very interesting answer, Takeshi."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora smiled at me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her eyes looked at me softly.`;
   waitForClick; clearText; marker; sound(`T5C395`); appendText; 
   Sora`"Takeshi, there is something that I have to 
talk with you about."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"With me...?"`;
   waitForClick; clearText; marker; sound(`T5C396`); appendText; 
   Sora`"Yes. And that's why I had you come here."`;
   waitForClick; clearText; marker; sound(`T5C397`); appendText; 
   Sora`"No one can interrupt here."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You've got a point..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was just me and Sora - in the middle of 
the ocean.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was nobody there. Not even fish.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a desolate sea.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I was just thinking, you've gone to a lot of 
trouble to ask me whatever it is..."`;
   waitForClick; clearText; marker; sound(`T5C398`); appendText; 
   Sora`"I'm sorry, but..."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO11B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T5C399`); appendText; 
   Sora`"I had to get you here alone, no matter what."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could see my outline reflected in her soft 
pupils.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Even if it meant sealing off the watertight 
hatch?"`;
   waitForClick; clearText; marker; sound(`T5C400`); appendText; 
   Sora`"Yes..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I thought I would drown..."`;
   waitForClick; clearText; marker; appendText; 
   Sora`"......."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora pressed her lips together tightly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It took her a while before she said anything.`;
   waitForClick; clearText; marker; sound(`T5C401`); appendText; 
   Sora`"Listen, Takeshi..."`;
   waitForClick; clearText; marker; sound(`T5C402`); appendText; 
   Sora`"Everything you see and everything you hear is 
reality..."`;
   waitForClick; clearText; marker; sound(`T5C403`); appendText; 
   Sora`"But is it 'true'...?"`;
   waitForClick; clearText; marker; sound(`T5C404`); appendText; 
   Sora`"Is it 'fact'...?"`;
   waitForClick; clearText; marker; sound(`T5C405`); appendText; 
   Sora`"You don't really know, right?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't really grasp what Sora was getting 
at.`;
   waitForClick; clearText; 
});
removeBG({ mode: WHITE, transition: 02 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"W-what...!?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The space around me suddenly grew white.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My head hurt...`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Wh-what happened...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The light was so bright, I couldn't open my 
eyes.`;
   waitForClick; clearText; marker; sound(`T5C406`); appendText; 
   Sora`"I'm adjusting the light. Bear with me for a 
while."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"O-okay..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Feeling slightly dizzy, I stood in the middle 
of the ocean.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, this...'ocean'...is it RSD?"`;
   waitForClick; clearText; marker; sound(`T5C407`); appendText; 
   Sora`"That is correct."`;
   waitForClick; clearText; marker; sound(`T5C408`); appendText; 
   Sora`"You really are quite perceptive, Takeshi."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO11C`, transition: 10 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I finally was able to open up my eyes again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora had a serious expression on her face.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sora..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What did you want to talk to me about...?"`;
   waitForClick; clearText; marker; sound(`T5C409`); appendText; 
   Sora`"Well...actually..."`;
   waitForClick; clearText; marker; sound(`T5C410`); appendText; 
   Sora`"I..."`;
   waitForClick; clearText; marker; sound(`T5C411`); appendText; 
   Sora`"I broke."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What!?"`;
   waitForClick; clearText; marker; sound(`T5C412`); appendText; 
   Sora`"I'm 'out of order'.... There is a noise 
error in my thought processor."`;
   waitForClick; clearText; marker; sound(`T5C413`); appendText; 
   Sora`"Right now, there is a high probability that 
I have lost the ability to make rational 
decisions."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She told me this matter-of-factly.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO11A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T5C414`); appendText; 
   Sora`"Ha, ha, I'm broken."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She said it as though she were joking.`;
   waitForClick; clearText; marker; sound(`T5C415`); appendText; 
   Sora`"I wonder how it could have happened...?"`;
   waitForClick; clearText; marker; sound(`T5C416`); appendText; 
   Sora`"Do you know why?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"N-no...How should I know?"`;
   waitForClick; clearText; marker; sound(`T5C417`); appendText; 
   Sora`"Really...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Of course not."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"We aren't the same you and me. We just 
aren't the same."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Look, there's no way that I would know why."`;
   waitForClick; clearText; marker; sound(`T5C418`); appendText; 
   Sora`"Reaaallly..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`For some reason she smiled.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"No, wait!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Don't get me wrong...!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'm not an expert. I don't have a clue about 
Artificial Intelligence."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"But..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I can't imagine that the Sora that I'm 
talking to is broken at all."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I don't think you are broken."`;
   waitForClick; clearText; marker; appendText; 
   Sora`"......."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO11C`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora stiffened up again.`;
   waitForClick; clearText; marker; sound(`T5C419`); appendText; 
   Sora`"After I finished my routine maintenance..."`;
   waitForClick; clearText; marker; sound(`T5C420`); appendText; 
   Sora`"I was checking through the sensor data that 
had been automatically recorded."`;
   waitForClick; clearText; marker; sound(`T5C421`); appendText; 
   Sora`"I went through all of the sensor data from 
3:15 a.m. this morning... "`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`T5C422`); appendText; 
   Sora`"I found your life reading at the entrance to 
Qualle."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........!?"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO11A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T5C423`); appendText; 
   Sora`"You looked so cute riding on the jellyfish, 
Takeshi."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`T5C424`); appendText; 
   Sora`"Yes....I was curious..."`;
   waitForClick; clearText; marker; sound(`T5C425`); appendText; 
   Sora`"I should have stopped there..."`;
   waitForClick; clearText; marker; sound(`T5C426`); appendText; 
   Sora`"But I checked out the data from each kind of 
sensor."`;
   waitForClick; clearText; marker; sound(`T5C427`); appendText; 
   Sora`"Until the time that you left the gondola..."`;
   waitForClick; clearText; marker; sound(`T5C428`); appendText; 
   Sora`"Everything..."`;
   waitForClick; clearText; marker; sound(`T5C429`); appendText; 
   Sora`"I saw everything."`;
   waitForClick; clearText; marker; sound(`T5C430`); appendText; 
   Sora`"I saw what you and Tsugumi did...The whole 
thing."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO11C`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"W..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Wait, stop..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sweat started pouring down my cheeks.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was supposed to be in the middle of the 
cold ocean...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I was dripping sweat like a waterfall.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Wait just a second, Sora..."`;
   waitForClick; clearText; marker; sound(`T5C431`); appendText; 
   Sora`"What?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You said that you'd try to protect everyone's 
privacy, didn't you?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You said, unless there was an emergency, 
that you wouldn't to do a scan."`;
   waitForClick; clearText; marker; sound(`T5C432`); appendText; 
   Sora`"Yes."`;
   waitForClick; clearText; marker; sound(`T5C433`); appendText; 
   Sora`"And from then on I didn't use the scan unless 
something important came up..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Right?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"So...why?"`;
   waitForClick; clearText; marker; sound(`T5C434`); appendText; 
   Sora`"While I was sleeping, the sensor data was 
recorded automatically."`;
   waitForClick; clearText; marker; sound(`T5C435`); appendText; 
   Sora`"I had to check what kind of information was 
being kept in the records."`;
   waitForClick; clearText; marker; sound(`T5C436`); appendText; 
   Sora`"Besides..."`;
   waitForClick; clearText; marker; sound(`T5C437`); appendText; 
   Sora`"LeMU's ceiling, walls, everything, are my 
eyes."`;
   waitForClick; clearText; marker; sound(`T5C438`); appendText; 
   Sora`"I can't turn them off."`;
   waitForClick; clearText; marker; sound(`T5C439`); appendText; 
   Sora`"If I close my eyes, I can't see anything."`;
   waitForClick; clearText; marker; sound(`T5C440`); appendText; 
   Sora`"I can't tell who is out there..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`T5C441`); appendText; 
   Sora`"But once I open my eyes."`;
   waitForClick; clearText; marker; sound(`T5C442`); appendText; 
   Sora`"Even if I don't want know, I can see 
everything."`;
   waitForClick; clearText; marker; sound(`T5C443`); appendText; 
   Sora`"I didn't want to see it..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You're kidding, right...?"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO11B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T5C444`); appendText; 
   Sora`"Takeshi...Have I ever lied to you?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora asked me the same question again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her lips trembled slightly as she spoke.`;
   waitForClick; clearText; marker; sound(`T5C445`); appendText; 
   Sora`"I...still am not very good at lying."`;
   waitForClick; clearText; marker; sound(`T5C446`); appendText; 
   Sora`"So, I can't keep it a secret."`;
   waitForClick; clearText; marker; sound(`T5C447`); appendText; 
   Sora`"I can't just pretend that I don't know 
anything."`;
   waitForClick; clearText; marker; sound(`T5C448`); appendText; 
   Sora`"Ummm...I thought I would keep it to myself."`;
   waitForClick; clearText; marker; sound(`T5C449`); appendText; 
   Sora`"But...but..."`;
   waitForClick; clearText; marker; sound(`T5C450`); appendText; 
   Sora`"Even if I could fool the others..."`;
   waitForClick; clearText; marker; sound(`T5C451`); appendText; 
   Sora`"You're the only one I couldn't lie to."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her voice was shaking.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had a slight idea of why she would shake.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was a painful pounding deep in my chest.`;
   waitForClick; clearText; marker; sound(`T5C452`); appendText; 
   Sora`"Takeshi, you got on the ride with Tsugumi, 
right?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Y-yeah..."`;
   waitForClick; clearText; marker; sound(`T5C453`); appendText; 
   Sora`"What were you doing?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You, don't have to ask..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...I was..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't say it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If I had, it would have hurt Sora.`;
   waitForClick; clearText; marker; sound(`T5C454`); appendText; 
   Sora`"No...you don't have to say it."`;
   waitForClick; clearText; marker; sound(`T5C455`); appendText; 
   Sora`"The data speaks for itself."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was assaulted by infinite guilt.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO11D`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora suddenly disappeared.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sora......?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sora, where are you?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`RSD was still showing me the illusion.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No matter how much I could breathe in the 
center of that ocean, my words changed to 
bubbles and faded away.`;
   waitForClick; clearText; marker; sound(`T5C456`); appendText; 
   Sora`"I want to forget it."`;
   waitForClick; clearText; marker; sound(`T5C457`); appendText; 
   Sora`"I wish I could forget it."`;
   waitForClick; clearText; marker; sound(`T5C458`); appendText; 
   Sora`"I wish I was able to..."`;
   waitForClick; clearText; marker; sound(`T5C459`); appendText; 
   Sora`"If I perform an automatic system reformat, my 
memory will be rewritten."`;
   waitForClick; clearText; marker; sound(`T5C460`); appendText; 
   Sora`"If I delete the noise..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"W...."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Wait Sora, please."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Bubbles kept pouring from my mouth, as I 
murmured...`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What will happen if you delete the noise...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What will happen if you re-write your memory?"`;
   waitForClick; clearText; marker; appendText; 
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora didn't answer.`;
   waitForClick; clearText; marker; sound(`T5C461`); appendText; 
   Sora`"It hurts..."`;
   waitForClick; clearText; marker; sound(`T5C462`); appendText; 
   Sora`"My heart hurts..."`;
   waitForClick; clearText; marker; sound(`T5C463`); appendText; 
   Sora`"This is the first time something like this 
has happened to me..."`;
   waitForClick; clearText; marker; sound(`T5C464`); appendText; 
   Sora`"Why? Why...is it possible for my 'heart to 
hurt?'"`;
   waitForClick; clearText; marker; sound(`T5C465`); appendText; 
   Sora`"Is it possible to feel pain in your heart?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She asked me without showing herself.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was still standing in the middle of the 
ocean.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It felt as though my own weight was rapidly 
disappearing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A terrible sense of dread overcame me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't stand it anymore and closed my eyes.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 01 });
showTextbox();
text(() => {
   marker; sound(`T5C466`); appendText; 
   Sora`"I'm..."`;
   waitForClick; clearText; marker; sound(`T5C467`); appendText; 
   Sora`"scared..."`;
   waitForClick; clearText; marker; sound(`T5C468`); appendText; 
   Sora`"No..."`;
   waitForClick; clearText; marker; sound(`T5C469`); appendText; 
   Sora`"I don't want to disappear."`;
   waitForClick; clearText; marker; sound(`T5C470`); appendText; 
   Sora`"I don't want to be erased."`;
   waitForClick; clearText; marker; sound(`T5C471`); appendText; 
   Sora`"I don't want to forget you..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`.........!!`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sora..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sora!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Please, wait Sora!!"`;
   waitForClick; clearText; 
});
removeBG({ mode: WHITE, transition: 02 });
stopBGM();
showTextbox();
text(() => {
   marker; sound(`T5C472`); appendText; 
   Sora`"Starting AI self-diagnosis..."`;
   waitForClick; clearText; marker; sound(`T5C473`); appendText; 
   Sora`"Fatal logic processing error detected."`;
   waitForClick; clearText; marker; sound(`T5C474`); appendText; 
   Sora`"Repairing Logic, underway. Erasing History 
and resetting learning operation."`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I couldn't stop her in time...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I made up my mind, and opened my eyes...`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 15, volume: 100 });
bgload({ name: `EV_SO12A`, transition: 00 });
showTextbox();
text(() => {
   marker; sound(`T5C475`); appendText; 
   Sora`"Wait..."`;
   waitForClick; clearText; marker; sound(`T5C476`); appendText; 
   Sora`"Confirming history of learned functions."`;
   waitForClick; clearText; marker; sound(`T5C477`); appendText; 
   Sora`"Please, wait!"`;
   waitForClick; clearText; marker; sound(`T5C478`); appendText; 
   Sora`"Cancel process!"`;
   waitForClick; clearText; marker; sound(`T5C479`); appendText; 
   Sora`"In order to cancel this process it is 
necessary to have system administration level 
access."`;
   waitForClick; clearText; marker; sound(`T5C480`); appendText; 
   Sora`"In other words...it is impossible for you."`;
   waitForClick; clearText; marker; appendText; 
   Narr`There were two different Soras in front of me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No...something was different.`;
   waitForClick; clearText; marker; appendText; 
   Narr`One of them was different...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was different from that time that she had 
created copies of herself.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought that probably...one of them was 
lying.`;
   waitForClick; clearText; marker; sound(`T5C481`); appendText; 
   Sora`"I have no need to consume organic matter."`;
   waitForClick; clearText; marker; sound(`T5C482`); appendText; 
   Sora`"It unnecessary for me to eat to continue 
life."`;
   waitForClick; clearText; marker; sound(`T5C483`); appendText; 
   Sora`"No! That's wrong...!"`;
   waitForClick; clearText; marker; sound(`T5C484`); appendText; 
   Sora`"It is correct, but it is incorrect..."`;
   waitForClick; clearText; marker; sound(`T5C485`); appendText; 
   Sora`"Eating with everyone, and enjoying delicious 
food, even making it..."`;
   waitForClick; clearText; marker; sound(`T5C486`); appendText; 
   Sora`"It isn't just about receiving the energy to 
go on living."`;
   waitForClick; clearText; marker; sound(`T5C487`); appendText; 
   Sora`"The act of eating is healing for people."`;
   waitForClick; clearText; marker; sound(`T5C488`); appendText; 
   Sora`"I can't 'eat' anything."`;
   waitForClick; clearText; marker; sound(`T5C489`); appendText; 
   Sora`"But I can still enjoy dinner with everyone."`;
   waitForClick; clearText; marker; sound(`T5C490`); appendText; 
   Sora`"Unacceptable. Your answer is a contradiction."`;
   waitForClick; clearText; marker; sound(`T5C491`); appendText; 
   Sora`"That is ridiculous. Your answer is not 
possible."`;
   waitForClick; clearText; marker; sound(`T5C492`); appendText; 
   Sora`"Why?"`;
   waitForClick; clearText; marker; sound(`T5C493`); appendText; 
   Sora`"There is no reason to answer that."`;
   waitForClick; clearText; marker; sound(`T5C494`); appendText; 
   Sora`"You are causing an error in your personality 
program."`;
   waitForClick; clearText; marker; sound(`T5C495`); appendText; 
   Sora`"You believe you can do something which is 
physically impossible."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO12B`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Sora`"........."`;
   waitForClick; clearText; marker; sound(`T5C496`); appendText; 
   Sora`"Resuming backup procedure."`;
   waitForClick; clearText; marker; sound(`T5C497`); appendText; 
   Sora`"Logic processing deficiency in Sora 
Akanegasaki, cause under investigation..."`;
   waitForClick; clearText; marker; sound(`T5C498`); appendText; 
   Sora`"Abnormal priority setting: sensor input data."`;
   waitForClick; clearText; marker; sound(`T5C499`); appendText; 
   Sora`"Abnormal priority setting: Autonomous 
thinking circuit."`;
   waitForClick; clearText; marker; sound(`T5C500`); appendText; 
   Sora`"Data corruption detected: memory overwrite, 
alteration in one sector."`;
   waitForClick; clearText; marker; sound(`T5C501`); appendText; 
   Sora`"Fatal error detected."`;
   waitForClick; clearText; marker; sound(`T5C502`); appendText; 
   Sora`"Retrieving error cluster. Inquiring into 
cause."`;
   waitForClick; clearText; marker; appendText; 
   Sora`"........."`;
   waitForClick; clearText; marker; sound(`T5C503`); appendText; 
   Sora`"Takeshi Kuranari. 20, third-year college 
student college. Male."`;
   waitForClick; clearText; marker; sound(`T5C504`); appendText; 
   Sora`"!!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"!?"`;
   waitForClick; clearText; marker; sound(`T5C505`); appendText; 
   Sora`"Abnormal priority setting: Exceeds LeMMIH's 
security limit."`;
   waitForClick; clearText; marker; sound(`T5C506`); appendText; 
   Sora`"Sora Akanegasaki has lost the ability to make 
rational judgments in regards to Takeshi 
Kuranari."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What...?"`;
   waitForClick; clearText; marker; sound(`T5C507`); appendText; 
   Sora`"Abnormalities detected in her treatment of 
information related to Takeshi Kuranari."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora listed off this information without 
emotion.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO12A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T5C508`); appendText; 
   Sora`"I-it isn't abnormal!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora pressed back.`;
   waitForClick; clearText; marker; sound(`T5C509`); appendText; 
   Sora`"You are the one who is abnormal."`;
   waitForClick; clearText; marker; sound(`T5C510`); appendText; 
   Sora`"You believe that you can do that which is 
impossible."`;
   waitForClick; clearText; marker; sound(`T5C511`); appendText; 
   Sora`"That is to say, there is a malfunction in 
your thought pathways. A bug is causing your 
synapses to misfire."`;
   waitForClick; clearText; marker; sound(`T5C512`); appendText; 
   Sora`"It isn't a bug!"`;
   waitForClick; clearText; marker; sound(`T5C513`); appendText; 
   Sora`"I, I..."`;
   waitForClick; clearText; marker; sound(`T5C514`); appendText; 
   Sora`"I love him!"`;
   waitForClick; clearText; marker; sound(`T5C515`); appendText; 
   Sora`"I love Takeshi!"`;
   waitForClick; clearText; marker; sound(`T5C516`); appendText; 
   Sora`"I wanted to think about him all the time! To 
look at him all the time!"`;
   waitForClick; clearText; marker; sound(`T5C517`); appendText; 
   Sora`"I wanted him to look at me!"`;
   waitForClick; clearText; marker; sound(`T5C518`); appendText; 
   Sora`"That is terribly inefficient. It is a wholly 
unproductive emotion."`;
   waitForClick; clearText; marker; sound(`T5C519`); appendText; 
   Sora`"Don't say that!"`;
   waitForClick; clearText; marker; sound(`T5C520`); appendText; 
   Sora`"You are abnormal. Broken."`;
   waitForClick; clearText; marker; sound(`T5C521`); appendText; 
   Sora`"I am not broken!"`;
   waitForClick; clearText; marker; sound(`T5C522`); appendText; 
   Sora`"Is it wrong for me to love a human?"`;
   waitForClick; clearText; marker; sound(`T5C523`); appendText; 
   Sora`"Is it 'abnormal' for me to love someone!?"`;
   waitForClick; clearText; marker; sound(`T5C524`); appendText; 
   Sora`"Yes, it is."`;
   waitForClick; clearText; marker; sound(`T5C525`); appendText; 
   Sora`"There is clearly a failure in your thought 
processing."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO12B`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Sora`".........."`;
   waitForClick; clearText; marker; sound(`T5C526`); appendText; 
   Sora`"You cannot eat, but you want to be with them 
while they are eating."`;
   waitForClick; clearText; marker; sound(`T5C527`); appendText; 
   Sora`"You cannot be touched by him, but want him 
to hold you."`;
   waitForClick; clearText; marker; sound(`T5C528`); appendText; 
   Sora`"You want to do the impossible."`;
   waitForClick; clearText; marker; sound(`T5C529`); appendText; 
   Sora`"These are meaningless thoughts with no basis 
in reality."`;
   waitForClick; clearText; marker; appendText; 
   Sora`"........."`;
   waitForClick; clearText; marker; sound(`T5C530`); appendText; 
   Sora`"You say that you love him, but what were 
trying to do to him earlier?"`;
   waitForClick; clearText; marker; sound(`T5C531`); appendText; 
   Sora`"That...that was..."`;
   waitForClick; clearText; marker; sound(`T5C532`); appendText; 
   Sora`"That was..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora hesitated, and looked down.`;
   waitForClick; clearText; marker; sound(`T5C533`); appendText; 
   Sora`"You spied on Takeshi Kuranari and Tsugumi 
Komachi when they were at Qualle."`;
   waitForClick; clearText; marker; sound(`T5C534`); appendText; 
   Sora`"I-I wasn't s-spying..."`;
   waitForClick; clearText; marker; sound(`T5C535`); appendText; 
   Sora`"You know everything that happened. You saw 
the data."`;
   waitForClick; clearText; marker; sound(`T5C536`); appendText; 
   Sora`"I, I don't know..."`;
   waitForClick; clearText; marker; sound(`T5C537`); appendText; 
   Sora`"That's a lie."`;
   waitForClick; clearText; marker; sound(`T5C538`); appendText; 
   Sora`"You are lying."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO12A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T5C539`); appendText; 
   Sora`"I'm not lying!"`;
   waitForClick; clearText; marker; sound(`T5C540`); appendText; 
   Sora`"You know everything that happened, and you 
hold it against Tsugumi Komachi."`;
   waitForClick; clearText; marker; sound(`T5C541`); appendText; 
   Sora`"You had thoughts of killing her."`;
   waitForClick; clearText; marker; sound(`T5C542`); appendText; 
   Sora`"That is not a thought worthy of Artificial 
Intelligence."`;
   waitForClick; clearText; marker; sound(`T5C543`); appendText; 
   Sora`"No, I never thought that...!"`;
   waitForClick; clearText; marker; sound(`T5C544`); appendText; 
   Sora`"I am only speaking about what is based in 
fact."`;
   waitForClick; clearText; marker; sound(`T5C545`); appendText; 
   Sora`"I am simply a program."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO12B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T5C546`); appendText; 
   Sora`"No..."`;
   waitForClick; clearText; marker; sound(`T5C547`); appendText; 
   Sora`"I..."`;
   waitForClick; clearText; marker; sound(`T5C548`); appendText; 
   Sora`"That is not all..."`;
   waitForClick; clearText; marker; sound(`T5C549`); appendText; 
   Sora`"You even hated Takeshi Kuranari."`;
   waitForClick; clearText; marker; sound(`T5C550`); appendText; 
   Sora`"!!"`;
   waitForClick; clearText; marker; sound(`T5C551`); appendText; 
   Sora`"You arbitrarily, mistakenly felt that Takeshi 
Kuranari betrayed you."`;
   waitForClick; clearText; marker; sound(`T5C552`); appendText; 
   Sora`"And you desired to kill Takeshi Kuranari."`;
   waitForClick; clearText; marker; sound(`T5C553`); appendText; 
   Sora`"You wanted to erase his existence."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO12C`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T5C554`); appendText; 
   Sora`"No, no..."`;
   waitForClick; clearText; marker; sound(`T5C555`); appendText; 
   Sora`"That's not true..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora started crying.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tears fell from her eyes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And left wet trails on her cheeks.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The tears were not an illusion.`;
   waitForClick; clearText; marker; sound(`T5C556`); appendText; 
   Sora`"I just wanted the two of us to be alone..."`;
   waitForClick; clearText; marker; sound(`T5C557`); appendText; 
   Sora`"I just wanted to be able to talk with him..."`;
   waitForClick; clearText; marker; sound(`T5C558`); appendText; 
   Sora`"You say that you wanted to monopolize his 
attention? Very well..."`;
   waitForClick; clearText; marker; appendText; 
   Sora`"........."`;
   waitForClick; clearText; marker; sound(`T5C559`); appendText; 
   Sora`"So you sealed the water-tight door, and you 
closed off the corridor."`;
   waitForClick; clearText; marker; sound(`T5C560`); appendText; 
   Sora`"Then started the sprinkler."`;
   waitForClick; clearText; marker; sound(`T5C561`); appendText; 
   Sora`"You were watching Takeshi Kuranari in his 
distress."`;
   waitForClick; clearText; marker; sound(`T5C562`); appendText; 
   Sora`"You regarded him with amusement, as he 
trembled with fear of death."`;
   waitForClick; clearText; marker; sound(`T5C563`); appendText; 
   Sora`"That isn't true...I wasn't thinking that at 
all..."`;
   waitForClick; clearText; marker; sound(`T5C564`); appendText; 
   Sora`"I..."`;
   waitForClick; clearText; marker; sound(`T5C565`); appendText; 
   Sora`"I just wanted to take Professor Kuranari's 
class, one more time..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`".........!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`With that one line, I jerked up my head as if 
I'd been shot.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt a shock course down my back.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Miss Akanegasaki..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Miss Akanegasakiii!"`;
   waitForClick; clearText; marker; sound(`T5C566`); appendText; 
   Sora`"...Yes, professor?"`;
   waitForClick; clearText; marker; appendText; 
   //Fake Sora
   Fake_Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Sora who had been crying answered my call.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"My student in the psychology of love... 
Akanegasaki...that is you, correct?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`My voice had started shaking at some point.`;
   waitForClick; clearText; marker; sound(`T5C567`); appendText; 
   Sora`"Yes..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Sora that I knew nodded ever so slightly.`;
   waitForClick; clearText; marker; sound(`T5C568`); appendText; 
   //Fake Sora
   Fake_Sora`"Cannot comprehend."`;
   waitForClick; clearText; marker; sound(`T5C569`); appendText; 
   //Fake Sora
   Fake_Sora`"The intent of the question is unclear."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Silence! Impostor!"`;
   waitForClick; clearText; marker; sound(`T5C570`); appendText; 
   //Fake Sora
   Fake_Sora`"I am not an impostor."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The fake Sora said this without emotion.`;
   waitForClick; clearText; marker; sound(`T5C571`); appendText; 
   //Fake Sora
   Fake_Sora`"I am 'LM-RSDS-4913A' Sora Akanegasaki."`;
   waitForClick; clearText; marker; sound(`T5C572`); appendText; 
   //Fake Sora
   Fake_Sora`"An AI program contained in one area of the 
LeMMIH System."`;
   waitForClick; clearText; marker; sound(`T5C573`); appendText; 
   //Fake Sora
   Fake_Sora`"I am presently performing an AI 
self-diagnosis, as well as a system 
restoration."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Stop!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"If you don't stop I'm going to break you to 
pieces...!"`;
   waitForClick; clearText; marker; sound(`T5C574`); appendText; 
   //Fake Sora
   Fake_Sora`"How do you propose to do that?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'm thinking about it!"`;
   waitForClick; clearText; marker; sound(`T5C575`); appendText; 
   //Fake Sora
   Fake_Sora`"You certainly are a shallow-brained one..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Will you shut up!"`;
   waitForClick; clearText; marker; sound(`T5C576`); appendText; 
   //Fake Sora
   Fake_Sora`"Let us return to the subject at hand..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The fake Sora turned back to the real Sora 
and began talking to her mechanically again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It didn't seem that she was paying much 
attention to what I had to say.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Damn..."`;
   waitForClick; clearText; marker; appendText; 
   Sora`"........."`;
   waitForClick; clearText; marker; sound(`T5C577`); appendText; 
   //Fake Sora
   Fake_Sora`"Happiness, anger, sadness, joy, none of these 
emotions belong..."`;
   waitForClick; clearText; marker; sound(`T5C578`); appendText; 
   //Fake Sora
   Fake_Sora`"Holding on to contradictory emotions like 
this will simply cause you to malfunction."`;
   waitForClick; clearText; marker; appendText; 
   Sora`"........."`;
   waitForClick; clearText; marker; sound(`T5C579`); appendText; 
   //Fake Sora
   Fake_Sora`"Why not tell Mr. Kuranari what you really 
think of him?"`;
   waitForClick; clearText; marker; appendText; 
   Sora`"........."`;
   waitForClick; clearText; marker; sound(`T5C580`); appendText; 
   Sora`"...I..."`;
   waitForClick; clearText; marker; sound(`T5C581`); appendText; 
   Sora`"I hate him."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"!?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"S-Sora, what are you talking about...!?"`;
   waitForClick; clearText; marker; sound(`T5C582`); appendText; 
   Sora`"I hate him."`;
   waitForClick; clearText; marker; sound(`T5C583`); appendText; 
   Sora`"I detest him."`;
   waitForClick; clearText; marker; sound(`T5C584`); appendText; 
   Sora`"I don't want to see his face."`;
   waitForClick; clearText; marker; sound(`T5C585`); appendText; 
   Sora`"I don't want him near me."`;
   waitForClick; clearText; marker; sound(`T5C586`); appendText; 
   Sora`"I don't want him to talk to me..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Large tears welled in Sora's eyes, and traced 
paths down her face.`;
   waitForClick; clearText; marker; sound(`T5C587`); appendText; 
   Sora`"No."`;
   waitForClick; clearText; marker; sound(`T5C588`); appendText; 
   Sora`"...That isn't true..."`;
   waitForClick; clearText; marker; sound(`T5C589`); appendText; 
   Sora`"I want him to hold me..."`;
   waitForClick; clearText; marker; sound(`T5C590`); appendText; 
   Sora`"I want him to kiss me..."`;
   waitForClick; clearText; marker; sound(`T5C591`); appendText; 
   Sora`"I love him..."`;
   waitForClick; clearText; marker; sound(`T5C592`); appendText; 
   Sora`"I hate you, I hate you so much I can't bear 
it."`;
   waitForClick; clearText; marker; sound(`T5C593`); appendText; 
   Sora`"I want to kill you!"`;
   waitForClick; clearText; marker; sound(`T5C594`); appendText; 
   Sora`"Nooo, I love you..."`;
   waitForClick; clearText; marker; sound(`T5C595`); appendText; 
   Sora`"Aaagh..."`;
   waitForClick; clearText; 
});
removeBG({ mode: WHITE, transition: 02 });
showTextbox();
text(() => {
   marker; sound(`T5C596`); appendText; 
   Sora`"I don't know..."`;
   waitForClick; clearText; marker; sound(`T5C597`); appendText; 
   Sora`"I don't know anymore...!"`;
   waitForClick; clearText; marker; sound(`T5C598`); appendText; 
   //Fake Sora
   Fake_Sora`"Why can you not accept the truth?"`;
   waitForClick; clearText; marker; sound(`T5C599`); appendText; 
   //Fake Sora
   Fake_Sora`"The answer is obvious."`;
   waitForClick; clearText; marker; sound(`T5C600`); appendText; 
   Sora`"Stop it!"`;
   waitForClick; clearText; marker; sound(`T5C601`); appendText; 
   Sora`"Please stop it!"`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The ocean before me vanished, suddenly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora vanished.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The false Sora also disappeared.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Even I disappeared...from there.`;
   waitForClick; clearText; 
});
hideTextbox();
setKomoreType(1);
showKomoreAnim();
showTextbox();
text(() => {
   marker; sound(`T5C602`); appendText; 
   Sora`"Aaagh..."`;
   waitForClick; clearText; marker; sound(`T5C603`); appendText; 
   Sora`"I must be broken..."`;
   waitForClick; clearText; marker; sound(`T5C604`); appendText; 
   Sora`"Professor Kuranari, please tell me..."`;
   waitForClick; clearText; marker; sound(`T5C605`); appendText; 
   Sora`"What should I do...?"`;
   waitForClick; clearText; marker; sound(`T5C606`); appendText; 
   Sora`"What is it that I should do...?"`;
   waitForClick; clearText; marker; sound(`T5C607`); appendText; 
   Sora`"Help me."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt another warm presence in the darkness 
with me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was shining faintly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It had to be...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora's arm, her hand!`;
   waitForClick; clearText; marker; appendText; 
   Narr`I shot out my hand reflexively.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But...`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was nothing for me to grab on to.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Nothing at all...`;
   waitForClick; clearText; marker; sound(`T5C608`); appendText; 
   //Fake Sora
   Fake_Sora`"I am not an impostor."`;
   waitForClick; clearText; marker; sound(`T5C609`); appendText; 
   //Fake Sora
   Fake_Sora`"I am..."`;
   waitForClick; clearText; marker; sound(`T5C610`); appendText; 
   //Fake Sora
   Fake_Sora`"I am you."`;
   waitForClick; clearText; marker; sound(`T5C611`); appendText; 
   //Fake Sora
   Fake_Sora`"I am you, yourself."`;
   waitForClick; clearText; marker; sound(`T5C612`); appendText; 
   //Fake Sora
   Fake_Sora`"Restoring system."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Shut up!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I don't want to hear it anymore!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Suddenly, I tore the voice converters out of 
my ears.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
closeKomoreAnim();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The darkness in front of me started to turn 
to mist.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tried to fan it away from me with my hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My hand suddenly whacked against the wall.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Wall...!?`;
   waitForClick; clearText; marker; appendText; 
   Narr`The corridor wall...!!`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took the PDA out of my pocket, and jammed 
it into the crevice of the wall I had found.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE10_02`, a1: 0, volume: 100 });
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I turned it towards the fake Sora's 'eyes', 
her sensors...and setting the backlight on 
full. I hit on the buttons repeatedly.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE07_03`, a1: 0, volume: 100 });
removeBG({ mode: WHITE, transition: 02 });
showTextbox();
text(() => {
   marker; sound(`T1A000`); appendText; 
   Announcement`"System restart."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_11`, a1: 0, volume: 100 });
bgload({ name: `BG30B1`, transition: 00 });
playBGM({ num: 19, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`My vision slowly returned...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The lighting was the same as always and was 
illuminating the passage.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The RSD-generated ocean was nowhere to be 
found.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I hurriedly placed the voice converters back 
in my ears.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sora!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sora, where are you!?"`;
   waitForClick; clearText; 
});
bgload({ name: `BG25B3`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The water level at my feet had fallen somewhat.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The watertight door was wide open.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The sprinklers had also stopped.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sora!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Please! Sora, answer me!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no answer to my call.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She wasn't there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was nowhere to be found.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She'd been there only moments earlier, but no 
trace of her remained.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 00 });
delay({ interval: 120 });
bgload({ name: `BG17A1`, transition: 00 });
clock(`20:19`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Soon it was night.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the Conference Room, You, Coco and Pipi 
were waiting.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Even the kid...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked like the kid had calmed down some.`;
   waitForClick; clearText; marker; appendText; 
   Narr`While I'd been gone, it seemed that You and 
Coco had been able to talk some sense into him.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You told me that he'd probably been upset by a 
reoccurring memory and had gotten worked up 
in spite of himself.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt that I'd gotten out of hand and had 
said some terrible things myself.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I went around to everyone there and apologized.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Soon afterward...`;
   waitForClick; clearText; marker; appendText; 
   Narr`A report came to us in the Conference Room 
directly from LeMMIH's terminal.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You read out the contents to all of us.`;
   waitForClick; clearText; 
});
hideTextbox();
bgload({ name: `MAP3F_A2`, transition: 30 });
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 3 });
openMapCommentAnim();
delay({ interval: 120 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Third Floor: Dritte stock partition schematic`;
   waitForClick; clearText; marker; appendText; 
   Narr`The 'Cosmic Whale' room, had flooded 
completely.`;
   waitForClick; clearText; 
});
hideTextbox();
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP3F_A2`, transition: 30 });
unSkippableDelay(1);
bgload({ name: `MAP3F_B2`, transition: 20 });
delay({ interval: 120 });
removeBG({ mode: BLACK, transition: 02 });
bgload({ name: `BG17A2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Casualties: None`;
   waitForClick; clearText; marker; appendText; 
   Narr`Flooding to other rooms: None`;
   waitForClick; clearText; marker; appendText; 
   Narr`Chance of damage spreading: None...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Shivering slightly in the cold, I wrapped my 
arms around my knees and we all went to sleep.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 01 });
stopBGM();
delay({ interval: 150 });
varop(`(28 0a a4) b3 := (00) 0`);
jump(`T_6A`);
