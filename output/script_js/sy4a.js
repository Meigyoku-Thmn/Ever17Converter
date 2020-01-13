hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
removeFG({ id: 1, useAnim: false });
setDialogBoxColor(BLUE);
varop(`(28 0a a4) b0 := (00) 5`);
varop(`(28 0a a4) b1 := (00) 4`);
varop(`(28 0a a4) b2 := (00) 4`);
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
setSceneTitle({ index: 74 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`...It was a new day.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You said she was going to change clothes and 
had gone up to the second floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora went back to work.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara...she was probably sleeping in the 
compression chamber.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Takeshi was supposedly filthy drunk in the 
park rest area.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi hadn't come back. I had no idea where 
she'd gone...`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 2, volume: 100 });
bgload({ name: `BG17A1`, transition: 20 });
clock(`0:7`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Me, I was in the Conference Room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the middle of the table was a 
three-dimensional image of LeMU.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was staring at it and trying to come up with 
escape plans.`;
   waitForClick; clearText; marker; appendText; 
   Narr`At that point I hadn't even hit upon a single 
one.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Any plan would fall apart before I even got it 
fully developed because of my limited 
knowledge.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I didn't intend to give up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought if I could just find a starting 
point...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wanted to get back at You somehow.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE00_01`, a1: 1, volume: 100 });
waitForSFX();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The door opened and somebody came in.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Looking back...I saw that it was You.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She had changed into her work uniform.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A000`); appendText; 
   //You
   You`"Oh, so this is where you are. I was looking 
for you."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The ribbon on her outfit shook rhythmically as 
she walked toward me.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"Are your clothes dry?"`;
   waitForClick; clearText; marker; sound(`Y4A001`); appendText; 
   //You
   You`"Nope. The dryer is broken."`;
   waitForClick; clearText; marker; sound(`Y4A002`); appendText; 
   //You
   You`"These clothes will do for a while anyway."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Hmmm."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A003`); appendText; 
   //You
   You`"Hey, what are you doing with that LeMU 
hologram?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Just looking."`;
   waitForClick; clearText; marker; sound(`Y4A004`); appendText; 
   //You
   You`"You aren't trying to think of a way out, are 
you?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Well, all I've got is time on my hands."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I lied to her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Embarrassed, I couldn't tell her the truth.`;
   waitForClick; clearText; marker; sound(`Y4A005`); appendText; 
   //You
   You`"Hmmm..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Enough about that. Aren't you going to sleep?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A006`); appendText; 
   //You
   You`"I drank too much coffee, so I can't sleep."`;
   waitForClick; clearText; marker; sound(`Y4A007`); appendText; 
   //You
   You`"Besides, there are lots of things I wanna 
think about..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"How about that? Same here."`;
   waitForClick; clearText; marker; sound(`Y4A008`); appendText; 
   //You
   You`"What? The coffee or the thinking?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Both."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A009`); appendText; 
   //You
   You`"Wow. That's weird."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You laughed dryly as she said that.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A010`); appendText; 
   //You
   You`"Hey, how about keeping me company?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Are you going somewhere?"`;
   waitForClick; clearText; marker; sound(`Y4A011`); appendText; 
   //You
   You`"Yeah. Well in order to think, you've gotta be 
in the right place to put you in the mood."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Someplace in mind?"`;
   waitForClick; clearText; marker; sound(`Y4A012`); appendText; 
   //You
   You`"Yeah, a place connected with the third eye."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
stopSFX()
stopBGM();
removeBG({ mode: BLACK, transition: 62 });
delay({ interval: 120 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The third eye.`;
   waitForClick; clearText; marker; appendText; 
   Narr`When the third eye opens, true wisdom is 
apparent and all becomes visible.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The power of ancients. Ultimate knowledge. 
Proof of a transcendental state beyond that 
of normal people.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The place that You led me...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Was...`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
playBGM({ num: 5, volume: 100 });
bgload({ name: `BG04B1`, transition: 26 });
fgload({ id: 1, name: `YU01BDS`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; sound(`Y4A013`); appendText; 
   //You
   You`"Shall we go in?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You walked toward a stone gate, which rose out 
of a dimly lit dome.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Can I ask you a question before we go in?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A014`); appendText; 
   //You
   You`"Huh? Sure."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Why do the Lemurian Ruins have something to 
do with the third eye?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU11BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A015`); appendText; 
   //You
   You`"Oh, that..."`;
   waitForClick; clearText; marker; sound(`Y4A016`); appendText; 
   //You
   You`"That? I lied."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"What?"`;
   waitForClick; clearText; marker; sound(`Y4A017`); appendText; 
   //You
   You`"To tell you the truth, they're not related."`;
   waitForClick; clearText; marker; sound(`Y4A018`); appendText; 
   //You
   You`"There is no meaning to that or connection 
at all."`;
   waitForClick; clearText; marker; sound(`Y4A019`); appendText; 
   //You
   You`"I just thought that if I said that, then 
you'd come along with me."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`".........."`;
   waitForClick; clearText; marker; sound(`Y4A020`); appendText; 
   //You
   You`"Thinking about things all by myself doesn't 
really suit me. I need someone else around."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A021`); appendText; 
   //You
   You`"Are you mad?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"No, not really."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I was just thinking that you don't seem the 
type to be governed by random, illogical 
thoughts."`;
   waitForClick; clearText; marker; sound(`Y4A022`); appendText; 
   //You
   You`"Really?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Yeah."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU11BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A023`); appendText; 
   //You
   You`"But actually there might be a connection."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You turned her gaze to the ruins.`;
   waitForClick; clearText; marker; sound(`Y4A024`); appendText; 
   //You
   You`"I told you about how my mom was doing her own 
research while pretending to study the 
Lemurian continent, right?"`;
   waitForClick; clearText; marker; sound(`Y4A025`); appendText; 
   //You
   You`"It seems like she was completely hooked on 
researching the third eye."`;
   waitForClick; clearText; marker; sound(`Y4A026`); appendText; 
   //You
   You`"Do you know why?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Because she was conducting research in the 
name of Lemuria?"`;
   waitForClick; clearText; marker; sound(`Y4A027`); appendText; 
   //You
   You`"Yeah. So my mom wanted to study the third 
eye, pretended there was a connection with 
Lemuria and wrote about it."`;
   waitForClick; clearText; marker; appendText; 
   Narr`'One theory has it that the people of Lemuria 
were giant apes that were 12 feet tall...'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'They had walnut-colored skin, there were no 
differences between males and females, they 
laid eggs and communicated via telepathy.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'And they had a third eye in the back of their 
heads.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Telepathy and the third eye...This has 
something to do with the third perspective.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Drawing on the idea that our vertebrate 
predecessors had three eyes...'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'So the ancients - especially the Lemurians - 
may well have been races that mastered the use 
of this power.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'And based on the facts discovered, I 
conclude...'`;
   waitForClick; clearText; marker; sound(`Y4A028`); appendText; 
   //You
   You`'That the origin of the third eye is Lemuria.'`;
   waitForClick; clearText; marker; sound(`Y4A029`); appendText; 
   //You
   You`"She even wrote trumped up papers on the 
topic."`;
   waitForClick; clearText; marker; sound(`Y4A030`); appendText; 
   //You
   You`"Even though they really are totally 
unrelated."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I wish you'd tell me more about the third 
eye."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A031`); appendText; 
   //You
   You`"Sorry. I'll tell you some other time."`;
   waitForClick; clearText; marker; sound(`Y4A032`); appendText; 
   //You
   You`"I don't really feel like going into it now."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
stopBGM();
removeFG({ id: 1, useAnim: false });
bgload({ name: `BG40B1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You and I crossed through the gate and 
entered the ruins.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was darker inside and the pathways were 
interwoven like a maze.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The lighting was surreal, with dim lights in 
some areas and bluish white lights elsewhere.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Occasionally a hologram of some deep-water 
fish would shine into view.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The ruins were also slightly flooded with 
water, which had the effect of making them 
appear more like ruins at the bottom of the 
ocean.`;
   waitForClick; clearText; marker; appendText; 
   Narr`............`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
playBGM({ num: 14, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I wondered how far we had walked.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Finally, we came to an open space kind of 
like an auditorium.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The room had a high ceiling.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There were rock pillars - called obelisks - 
scattered around the area. A few of them were 
broken, collapsed or crumbling.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Looking closely, I saw that a mock relief was 
carved into the wall.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As I absentmindedly stared at the wall, You 
walked over to one of the collapsed obelisks 
and sat down, hugging her knees.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU03A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; sound(`Y4A033`); appendText; 
   //You
   You`"This is a strange place, huh? It's called 
the 'Sun Temple.'"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Sun?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`That reminded me that I had seen an image of 
a sun disk in the relief on the wall.`;
   waitForClick; clearText; marker; sound(`Y4A034`); appendText; 
   //You
   You`"There are a number of theories about the 
precise location of the Lemurian continent, 
but no one really knows where it was."`;
   waitForClick; clearText; marker; sound(`Y4A035`); appendText; 
   //You
   You`"But most people agree that it was located 
near the belt of tropical rainforest just 
below the equator."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You reverted to speaking like an employee, 
which she was, and started giving me an 
explanation of the place.`;
   waitForClick; clearText; marker; sound(`Y4A036`); appendText; 
   //You
   You`"Members of our research staff here at LeMU 
have put forth hypotheses that the people of 
Lemuria worshipped the sun..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You paused and shrugged...`;
   waitForClick; clearText; marker; sound(`Y4A037`); appendText; 
   //You
   You`"So I guess that's why we built this temple."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I see."`;
   waitForClick; clearText; marker; appendText; 
   Narr`As I sat down next to You, I nodded.`;
   waitForClick; clearText; marker; sound(`Y4A038`); appendText; 
   //You
   You`"A Sun Temple...at the bottom of the 
ocean...doesn't that strike you as 
kind of ironic?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered if she was talking about the 
continent that had sunk to the bottom of 
the ocean.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Or maybe she had meant...us.`;
   waitForClick; clearText; marker; sound(`Y4A039`); appendText; 
   //You
   You`"Did you think of anything?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"What do you mean?"`;
   waitForClick; clearText; marker; sound(`Y4A040`); appendText; 
   //You
   You`"Ways to get out."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Oh..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I shook my head.`;
   waitForClick; clearText; marker; sound(`Y4A041`); appendText; 
   //You
   You`"I thought so..."`;
   waitForClick; clearText; marker; sound(`Y4A042`); appendText; 
   //You
   You`"I can't think of any other ways."`;
   waitForClick; clearText; marker; sound(`Y4A043`); appendText; 
   //You
   You`"If we could just get that high pressure 
inflow machine to work..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`Y4A044`); appendText; 
   //You
   You`"You know? I've thought this through."`;
   waitForClick; clearText; marker; sound(`Y4A045`); appendText; 
   //You
   You`"I think we're being lied to by someone."`;
   waitForClick; clearText; 
});
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"Huh? What are you talking about?"`;
   waitForClick; clearText; 
});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   marker; sound(`S1C137`); appendText; 
   //Tsugumi
   Tsugumi`"You are...just being used by them."`;
   waitForClick; clearText; 
});
hideTextbox();
varop(`(28 0a a0) ac := (00) 0`);
closeDimOverlay();
playBGM({ num: 13, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Tsugumi's words flashed through my mind.`;
   waitForClick; clearText; marker; sound(`Y4A046`); appendText; 
   //You
   You`"I mean, I don't think what happened this 
time was just and accident."`;
   waitForClick; clearText; marker; sound(`Y4A047`); appendText; 
   //You
   You`"I think that somebody trapped us here on 
purpose."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU03B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`Y4A048`); appendText; 
   //You
   You`"I mean, it's the only thing that makes sense."`;
   waitForClick; clearText; marker; sound(`Y4A049`); appendText; 
   //You
   You`"There's just too much that doesn't add up."`;
   waitForClick; clearText; marker; sound(`Y4A050`); appendText; 
   //You
   You`"Mayo's friends, Takeshi's friends and my 
coworkers should all know that we are trapped 
here, right?"`;
   waitForClick; clearText; marker; sound(`Y4A051`); appendText; 
   //You
   You`"So why doesn't anyone come?"`;
   waitForClick; clearText; marker; sound(`Y4A052`); appendText; 
   //You
   You`"Even if there is some reason that they can't 
get inside, divers should at least be knocking 
on the windows!"`;
   waitForClick; clearText; marker; sound(`Y4A053`); appendText; 
   //You
   You`"Besides, we still have power, only the 
communication system to the outside is down."`;
   waitForClick; clearText; marker; sound(`Y4A054`); appendText; 
   //You
   You`"We still don't have any idea what caused the 
alarm before the accident and the blackout..."`;
   waitForClick; clearText; marker; sound(`Y4A055`); appendText; 
   //You
   You`"And we don't know why the high pressure input 
fan stopped working either."`;
   waitForClick; clearText; marker; sound(`Y4A056`); appendText; 
   //You
   You`"It's almost like everything was set up to 
trap us here."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"............"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know what to say to her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It all made sense to me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Actually, I had been feeling the same thing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The reason that I hadn't been able to - or 
didn't realize it was maybe that I didn't want 
to face up to reality.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I sneaked a looked at You's face.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She clutched her knees and turned her helpless 
looking gaze to the water's surface.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her lips were a bluish color and it wasn't all 
the fault of the light.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You was always more upbeat than everyone 
around her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was a powerful presence for me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But right then, she seemed very small and 
fragile.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No matter how tough she acted, You was still 
just a girl at heart.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It had been a quick three days since the 
accident...it only made sense that she would 
be feeling the strain.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Swallowed into the deep, dark ocean, we had 
lost the warm spring sun.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I couldn't let her go on like this, I had to 
cheer her up somehow...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`That was how I felt deep in my heart.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU03C`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`Y4A057`); appendText; 
   //You
   You`"Friends help each other, right?"`;
   waitForClick; clearText; marker; sound(`Y4A058`); appendText; 
   //You
   You`"Kid, you can see the future, right?"`;
   waitForClick; clearText; marker; sound(`Y4A059`); appendText; 
   //You
   You`"Tell me how things are going to turn out."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I think we'll be saved."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU03A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`Y4A060`); appendText; 
   //You
   You`"Is that a premonition? Or just an optimistic 
guess?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Of course, it's a..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wanted to say premonition, but I couldn't.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Saying it was wouldn't work.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You could see through a lie.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought about it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The third perspective.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The third eye.`;
   waitForClick; clearText; marker; appendText; 
   Narr`True wisdom`;
   waitForClick; clearText; marker; appendText; 
   Narr`Omnipotent all-seeing vision.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The power to make light shine once again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought that if I only had that!`;
   waitForClick; clearText; marker; appendText; 
   Narr`But it didn't exist. It couldn't possibly...`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"It's not a premonition...or a guess..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`At the very least...`;
   waitForClick; clearText; 
});
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"It's a promise."`;
   waitForClick; clearText; marker; sound(`Y4A061`); appendText; 
   //You
   You`"Promise?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Yeah, I promise."`;
   waitForClick; clearText; marker; appendText; 
   Narr`At least...I hoped it was.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That it was a promise that would materialize.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That we would be able to get You out of there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I held up my hand up as if taking an oath.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I approached You...but then she spoke.`;
   waitForClick; clearText; marker; sound(`Y4A062`); appendText; 
   //You
   You`"And what if......you break it?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I won't. I'll see that you're safe."`;
   waitForClick; clearText; marker; sound(`Y4A063`); appendText; 
   //You
   You`"For sure? There's not even a 1 percent chance 
you're wrong?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"There is not even a 0.00000000000000001 
percent possibility."`;
   waitForClick; clearText; marker; appendText; 
   //You
   You`"..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I pointed my finger at my heart and 
promised You.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU03C`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`Y4A064`); appendText; 
   //You
   You`"Talk about promising more than you can 
deliver..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I crossed my heart and hoped to die...`;
   waitForClick; clearText; marker; sound(`Y4A065`); appendText; 
   //You
   You`"Oh well, I suppose I'll have to trust you."`;
   waitForClick; clearText; marker; appendText; 
   Narr`...And stick a needle in my eye...I won't 
break my word to you.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
setSceneTitle({ index: 75 });
chapterCutin({ name: `00000000` });
playBGM({ num: 1, volume: 100 });
bgload({ name: `BG11A1`, transition: 20 });
clock(`7:40`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The next day after breakfast, You and 
I went to the Security Office.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She tried to access the computer network again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I planned to stay and see her through it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But...`;
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
   Narr`Beeeeeeeeeeeeep!`;
   waitForClick; clearText; marker; appendText; 
   Narr`"Access denied: Invalid username or password."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed like she still couldn't get past the 
security.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A066`); appendText; 
   //You
   You`"Oh, no. It looks like it's no good...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You's shoulders slump dejectedly.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Isn't there anything else you can do?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A067`); appendText; 
   //You
   You`"I could...enter by cracking the system open 
or get LeMMIH to remove the protection 
mechanism..." `;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Why don't you ask Sara?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You stopped talking and looked down.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Don't you want to find out what happened to 
your father?"`;
   waitForClick; clearText; marker; sound(`Y4A068`); appendText; 
   //You
   You`"That..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"You have a right to know. There could be 
information being kept from you."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"So are you going to try to get at the truth 
or are you just going to let these doubts 
nag you forever..."`;
   waitForClick; clearText; marker; appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"So, You, what do you want to do?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"In the end, it's up to you. So..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"You should do what you want to do."`;
   waitForClick; clearText; marker; appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You stared at her fingers...and then she 
looked at the display...`;
   waitForClick; clearText; marker; appendText; 
   Narr`...finally her eyes drifted to the ceiling.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You gave a nod after a while.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A069`); appendText; 
   //You
   You`"It might be a lot to ask, but I'll ask Mayo 
for her help."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Good."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She wasn't wrong. She didn't need to feel 
intimidated.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Alright! I'll go ask her for you."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`With those energetic words, I bounded out 
of the Security Room.`;
   waitForClick; clearText; 
});
bgload({ name: `BG25A3`, transition: 20 });
stopSFX()
showTextbox();
text(() => {
   marker; appendText; 
   Narr`As I was sprinting down the corridor...`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Wait a second...where is Sara anyway?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`Finally I realized something.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I should have checked on the monitor in the 
Security Office.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I thought I'd look stupid going all the 
way back again...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought I might ask Sora...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But then I saw Sara cutting across the far 
corridor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I immediately went after her.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE01_04`, a1: 0, volume: 100 });
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
bgload({ name: `BG08A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara went into the infirmary.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I went in after her.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `BG09A1`, transition: 26 });
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"Sara!"`;
   waitForClick; clearText; 
});
playBGM({ num: 18, volume: 100 });
fgload({ id: 1, name: `SA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A070`); appendText; 
   //Sara
   Sara`"Waaaa! Geez! You scared me!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara jumped, startled.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Oh...sorry. I didn't mean to surprise you..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A071`); appendText; 
   //Sara
   Sara`"I'm exhausted so cut me some slack. 
My mind and body are shot."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara's haggard expression told the same story.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I remembered the fight the day before with 
Tsugumi.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She had probably had a sleepless night.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Were you thinking of going to sleep now?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A072`); appendText; 
   //Sara
   Sara`"Yup."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Oh..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A073`); appendText; 
   //Sara
   Sara`"Huh? Is there something wrong?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Actually..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I explained the details to Sara.`;
   waitForClick; clearText; marker; appendText; 
   Narr`About You's father gone missing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And about her working at LeMU to find clues 
about his fate.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That her search was being blocked by some 
protective mechanism in LeMMIH.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A074`); appendText; 
   //Sara
   Sara`"Wow. I had no idea about any of that."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Yeah. Well, You and I can't figure it out 
alone."`;
   waitForClick; clearText; marker; sound(`Y4A075`); appendText; 
   //Sara
   Sara`"So? What is it you want me to do?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Well we were hoping you could try taking out 
LeMMIH's security so that we can get into the 
network."`;
   waitForClick; clearText; marker; sound(`Y4A076`); appendText; 
   //Sara
   Sara`"Hmmm. Cracking the security, huh...?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I feel bad asking when you're so tired, 
but could you do it for her?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A077`); appendText; 
   //Sara
   Sara`"Sure."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"If you wouldn't mind, she'd really...er, eh?"`;
   waitForClick; clearText; marker; sound(`Y4A078`); appendText; 
   //Sara
   Sara`"I said 'sure' already."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Really?"`;
   waitForClick; clearText; marker; sound(`Y4A079`); appendText; 
   //Sara
   Sara`"Yup."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A080`); appendText; 
   //Sara
   Sara`"I mean it's to help Nakkyu, right? I can't 
very well say no."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Th...thanks!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I grabbed Sara's hand and shouted happily`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was so happy I could have jumped for joy...I 
did...actually jump.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was sure that things would go fine now.`;
   waitForClick; clearText; marker; sound(`Y4A081`); appendText; 
   //Sara
   Sara`"H-hey, hey, wait...Kid, what are you so happy 
about?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Huh?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A082`); appendText; 
   //Sara
   Sara`"All I said was that I'd help Nakkyu. This 
doesn't really have anything to do with you, 
does it? There is nothing in this for you."`;
   waitForClick; clearText; marker; sound(`Y4A083`); appendText; 
   //Sara
   Sara`"So what are you so pumped about?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Well, of course I'm happy. You's a 
good friend of mine."`;
   waitForClick; clearText; marker; appendText; 
   //Sara
   Sara`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara stared at me suspiciously.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A084`); appendText; 
   //Sara
   Sara`"Oh, I get it"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Wh-what?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`...Sara patted me on the back.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"???"`;
   waitForClick; clearText; marker; sound(`Y4A085`); appendText; 
   //Sara
   Sara`"Uh, huh. So that's what's been going on."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara shot me a sly grin.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had a bad feeling about the whole thing.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Don't go imagining anything stupid. 
I'm just..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A086`); appendText; 
   //Sara
   Sara`"Dear Jove! Love, 'tis a beautiful thing."`;
   waitForClick; clearText; marker; sound(`Y4A087`); appendText; 
   //Sara
   Sara`"Fret not dear Kid, I shan't tell a soul."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`(What the heck is Sara talking about?)`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Well, You is waiting so we'd best get going."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I started heading for the Security Office 
pulling Sara's hand.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But it ended up being my arm that got yanked.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Whoa...!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I lost my balance and stumbled forward, 
leaning on Sara.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Without missing a beat, she grabbed my left 
thumb and squeezed it tight.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She drew close to me and whispered in my ear.`;
   waitForClick; clearText; marker; sound(`Y4A088`); appendText; 
   //Sara
   Sara`"To tell you the truth, I'm a bit jealous."`;
   waitForClick; clearText; marker; sound(`Y4A089`); appendText; 
   //Sara
   Sara`"I'm jealous, but..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A090`); appendText; 
   //Sara
   Sara`"But since it's you that she's gone for, 
I'll let it go."`;
   waitForClick; clearText; marker; appendText; 
   Narr`As she spoke, she pushed me away and slapped 
me on the back.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was getting more and more confused.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopSFX()
stopBGM();
delay({ interval: 120 });
playBGM({ num: 1, volume: 100 });
bgload({ name: `BG11A1`, transition: 26 });
fgload({ id: 1, name: `SA01ADS`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
clock(`8:7`);
showTextbox();
text(() => {
   marker; sound(`Y4A091`); appendText; 
   //Sara
   Sara`"Alright. Shall we get started?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara sat in the chair, popped her knuckles and 
faced the keyboard.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 4, name1: `YU15BDS`, name2: `SA11ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A092`); appendText; 
   //You
   You`"Mayo, I'm really sorry."`;
   waitForClick; clearText; marker; sound(`Y4A093`); appendText; 
   //Sara
   Sara`"Don't worry about it. It's no big deal."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `SA12ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A094`); appendText; 
   //Sara
   Sara`"You're in good hands with me."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Hopefully you can help, Sara."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `SA01ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A095`); appendText; 
   //Sara
   Sara`"Trust me."`;
   waitForClick; clearText; 
});
hideTextbox();
multiremoveFG({ id1: 1, id2: 4, id3: 0, useAnim: true });
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara started tapping away on the keyboard.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A number of windows opened up on the screen.`;
   waitForClick; clearText; marker; sound(`Y4A096`); appendText; 
   //Sara
   Sara`"First let's try stealing a password."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Her typing was fast and rhythmical.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Finally a list of files came up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She opened one of the files.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She opened a search window and started pouring 
through files.`;
   waitForClick; clearText; 
});
stopSFX()
showTextbox();
text(() => {
   marker; sound(`Y4A097`); appendText; 
   //Sara
   Sara`"Let's see..."`;
   waitForClick; clearText; marker; sound(`Y4A098`); appendText; 
   //Sara
   Sara`"Huh? It's not there..."`;
   waitForClick; clearText; marker; sound(`Y4A099`); appendText; 
   //Sara
   Sara`"In this kind of OS the file should be saved 
here, but..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"What are you looking for?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A100`); appendText; 
   //Sara
   Sara`"The password hash values."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"What's that?"`;
   waitForClick; clearText; marker; sound(`Y4A101`); appendText; 
   //Sara
   Sara`"It's an unchangeable string of letters or 
numbers created by a mathematical function 
when a user sets a password."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"W-what?"`;
   waitForClick; clearText; marker; sound(`Y4A102`); appendText; 
   //Sara
   Sara`"If you can find the hash, then it's easy to 
get a password."`;
   waitForClick; clearText; marker; sound(`Y4A103`); appendText; 
   //Sara
   Sara`"For example, if you save a large number of 
the hashes and compare them with the hash 
values in the password file then..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"...Can't you make it easier to understand?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A104`); appendText; 
   //Sara
   Sara`"Alright. It's basically like the password's 
fingerprint."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A105`); appendText; 
   //Sara
   Sara`"While you can't create a person from a 
fingerprint, you can identify one, right?"`;
   waitForClick; clearText; marker; sound(`Y4A901`); appendText; 
   //Sara
   Sara`"It's the same as a fingerprint. The hash 
always reflects the characteristics of the 
original.`;
   waitForClick; clearText; sound(`Y4A902`); appendText; 
   //Sara
   Sara`And the modulation pattern is always 
derived from the character line up of the 
original..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I...I still don't get it. I think it's just 
beyond me...sorry to bug you."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I wiped away sweat and walked a short distance 
from Sara.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You watched Sara as she leaned against a wall.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I headed over to her.`;
   waitForClick; clearText; marker; sound(`Y4A107`); appendText; 
   //Sara
   Sara`"I wonder...it might be that there is a file 
that only the root authority can access..."`;
   waitForClick; clearText; marker; sound(`Y4A108`); appendText; 
   //Sara
   Sara`"Even if I did find it, it could be randomly 
sequenced..."`;
   waitForClick; clearText; marker; sound(`Y4A109`); appendText; 
   //Sara
   Sara`"That'd mean I'd need another message..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara mumbled to herself as she worked.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Occasionally Sara would fiddle with her 
ribbon, or tap her fingers on the desk...so 
it didn't seem that she was having much luck.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I wonder if this'll work."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A110`); appendText; 
   //You
   You`"Maybe."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"But no matter how good Sara is, this isn't 
like a contest."`;
   waitForClick; clearText; marker; sound(`Y4A111`); appendText; 
   //You
   You`"Look, the contest Mayo won wasn't just any 
contest."`;
   waitForClick; clearText; marker; sound(`Y4A112`); appendText; 
   //You
   You`"The code she decrypted was a 68 bit strong 
code."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"...I'm not really sure how incredible 
that is."`;
   waitForClick; clearText; marker; sound(`Y4A113`); appendText; 
   //You
   You`"The strength of a code depends on how long 
the key to it is when the password is 
encrypted."`;
   waitForClick; clearText; marker; sound(`Y4A114`); appendText; 
   //You
   You`"The longer it is, the harder it is to decode."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A115`); appendText; 
   //You
   You`"You still don't quite get it? Well, how 
about a specific example..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A116`); appendText; 
   //You
   You`"So if a 1 bit password is encrypted, it can 
come out in one of two ways."`;
   waitForClick; clearText; marker; sound(`Y4A117`); appendText; 
   //You
   You`"For example, say that 'E' is the letter. 
That can either be encrypted as a 0 or a 1 
with a 1 bit key."`;
   waitForClick; clearText; marker; sound(`Y4A118`); appendText; 
   //You
   You`"So when this becomes a two bit key, the 
possibilities are double the code, or four."`;
   waitForClick; clearText; marker; sound(`Y4A119`); appendText; 
   //You
   You`"So for the example of 'E,' it would 
be either 00, 01, 10 or 11."`;
   waitForClick; clearText; marker; sound(`Y4A120`); appendText; 
   //You
   You`"So with a three bit key..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A121`); appendText; 
   //You
   You`"What do you think happens?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Uh...let's see....um, there are two ways 
for a 1 bit, and four ways for a 2 bit, so..."`;
   waitForClick; 
});
choice(
   `6 ways?`
   `8 ways?`
);
switch (choice) {
   case 0: goto(lbl_00000837);
   case 1: goto(lbl_00000857);
}
let lbl_00000837;
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"Are there 6 ways?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A122`); appendText; 
   //You
   You`"Wrong answer. Afraid not..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"..."`;
   waitForClick; clearText; 
});
goto(lbl_0000087e);
let lbl_00000857;
varop(`(28 0a a4) b6 += (00) 1`);
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"Are there 8 ways?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A123`); appendText; 
   //You
   You`"Bingo. You got it."`;
   waitForClick; clearText; 
});
let lbl_0000087e;
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A124`); appendText; 
   //You
   You`"So a 3 bit key for the letter 'E' could be 
000, 001, 010, 011, 100, 101, 110, 111. 
A total of eight combinations."`;
   waitForClick; clearText; marker; sound(`Y4A125`); appendText; 
   //You
   You`"So every time the code key increases by one 
bit, the number of code patterns increases 
exponentially." `;
   waitForClick; clearText; marker; sound(`Y4A126`); appendText; 
   //You
   You`"So for a 4 bit key there would be 16 
combinations and for a 5 bit key, 32..."`;
   waitForClick; clearText; marker; sound(`Y4A127`); appendText; 
   //You
   You`"So let's say this had a 68 bit key?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`A 6 bit would be 64...a 7 bit would be 
128...an 8 bit would be 256...`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Uh...uh...let's see...)`;
   waitForClick; clearText; marker; sound(`Y4A128`); appendText; 
   //You
   You`"The right answer is 2 to the 68th power."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You was doing the calculations on the Security 
Office calculator.`;
   waitForClick; clearText; marker; sound(`Y4A129`); appendText; 
   //You
   You`"So the number of code patterns would be 
possible is roughly 2.951479052 x 10 to 
the 20th power."`;
   waitForClick; clearText; marker; sound(`Y4A130`); appendText; 
   //You
   You`"Or 2 sextillion 9514 quadrillion 7905 
trillion 179 billion 352 million 825,856 
different ways."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"......"`;
   waitForClick; clearText; marker; sound(`Y4A131`); appendText; 
   //You
   You`"It's like looking for a hair on the whole of 
the planet Earth - including the oceans."`;
   waitForClick; clearText; marker; sound(`Y4A132`); appendText; 
   //You
   You`"That's the code that Mayo decrypted."`;
   waitForClick; clearText; marker; sound(`Y4A133`); appendText; 
   //You
   You`"But you know what? What's so incredible 
about it is not that Mayo was able to do it, 
but the method she used to do it."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"The method?"`;
   waitForClick; clearText; marker; sound(`Y4A134`); appendText; 
   //You
   You`"Yeah. There are two ways of finding a 
password. One involves difficult mathematical 
calculations..."`;
   waitForClick; clearText; marker; sound(`Y4A135`); appendText; 
   //You
   You`"The other is a method that has to do with 
trying every key."`;
   waitForClick; clearText; marker; sound(`Y4A136`); appendText; 
   //You
   You`"It seems like she couldn't find an algorithm 
to work for the first method..."`;
   waitForClick; clearText; marker; sound(`Y4A137`); appendText; 
   //You
   You`"So a normal person would opt for the second 
option."`;
   waitForClick; clearText; marker; sound(`Y4A138`); appendText; 
   //You
   You`"And that's using all of the computers around 
the world participating in the contest. If you 
didn't, they say the calculations would take 
tens of thousands of years."`;
   waitForClick; clearText; marker; sound(`Y4A139`); appendText; 
   //You
   You`"But...but Mayo did it differently."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"She didn't..."`;
   waitForClick; clearText; marker; sound(`Y4A140`); appendText; 
   //You
   You`"Yup. She sure did."`;
   waitForClick; clearText; marker; sound(`Y4A141`); appendText; 
   //You
   You`"Mayo put together her own algorithm and did 
it using difficult mathematical calculations."`;
   waitForClick; clearText; marker; sound(`Y4A142`); appendText; 
   //You
   You`"And just seven days after the competition 
started, she had found the password."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"............................"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It was too incredible. It didn't seem real.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I should've been surprised, but I wasn't.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was just too hard to imagine that the girl 
in front of me could do that...`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Sara...what in the world...are you?)`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`Y4A143`); appendText; 
   //Sara
   Sara`"Agghh! This isn't right!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara pounded her fist on the console.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"It's not working?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A144`); appendText; 
   //Sara
   Sara`"Obviously not! Stop asking me about every 
little thing!"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A145`); appendText; 
   //Sara
   Sara`"Oh, I'm sorry...I'm just a little irritated."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Don't worry about it. I'm sorry for asking 
you to do this."`;
   waitForClick; clearText; marker; appendText; 
   //Sara
   Sara`"........."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 4, name1: `SA03ADM`, name2: `YU11BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A146`); appendText; 
   //You
   You`"Hey, why don't we take a break? I made some 
coffee."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You had made coffee for the three of us.`;
   waitForClick; clearText; marker; sound(`Y4A147`); appendText; 
   //You
   You`"Here you go, Mayo."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You handed Sara her coffee.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A148`); appendText; 
   //Sara
   Sara`"Oh, thank you so much"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara's coffee came with milk and the sugar 
bowl.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"H-hey."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Didn't you say that you weren't supposed to 
put anything in coffee?"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 4, name1: `SA01ADM`, name2: `YU01BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A149`); appendText; 
   //You
   You`"It's okay. Mayo is a special exception."`;
   waitForClick; clearText; marker; sound(`Y4A150`); appendText; 
   //Sara
   Sara`"Yup."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 4, name1: `SA16ADM`, name2: `YU12BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A151`); appendText; 
   //You/Sara
   You_Sara`"That's right"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Hey, that's not fair."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 4, name1: `SA05ADM`, name2: `YU05BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A152`); appendText; 
   //You
   You`"Oh, stop complaining!"`;
   waitForClick; clearText; marker; sound(`Y4A153`); appendText; 
   //Sara
   Sara`"Yeah. You and I are different is all."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 4, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(Leave it to You to change the rules!)`;
   waitForClick; clearText; marker; appendText; 
   Narr`Not wanting to start an argument, I silently 
put milk and sugar in my coffee.`;
   waitForClick; clearText; marker; appendText; 
   Narr`...`;
   waitForClick; clearText; marker; appendText; 
   Narr`After a bit You asked Sara -`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 4, name1: `SA15ADM`, name2: `YU11BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A154`); appendText; 
   //You
   You`"So? How're you doing, Mayo?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A155`); appendText; 
   //Sara
   Sara`"So far I've got nothing."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara turned her palms out letting them face 
the ceiling.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She meant she had zilch.`;
   waitForClick; clearText; marker; sound(`Y4A156`); appendText; 
   //You
   You`"Wow, this is even tough for you Mayo, this 
must be some security..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A157`); appendText; 
   //Sara
   Sara`"To tell you the truth, the security here is 
way above normal."`;
   waitForClick; clearText; marker; sound(`Y4A158`); appendText; 
   //Sara
   Sara`"I don't think that they are using just a 
normal firewall. They seem to have made some 
kind of improvements on the daemons, as well."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Fire well? Daem what?..., huh?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A159`); appendText; 
   //Sara
   Sara`"A firewall is a way of protecting a network 
from unknown intruders."`;
   waitForClick; clearText; marker; sound(`Y4A160`); appendText; 
   //Sara
   Sara`"Daemons reside on the OS in the memory. 
They're responsible for all of the..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Uh, okay...I get it...thanks."`;
   waitForClick; clearText; marker; appendText; 
   Narr`(That's it - I'm not asking anymore 
questions...)`;
   waitForClick; clearText; marker; sound(`Y4A161`); appendText; 
   //You
   You`"It's that tough, huh?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara nodded.`;
   waitForClick; clearText; marker; appendText; 
   Narr`'...Normally this kind of OS software is put 
together using C...'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'...So, I tried to attack it using DoS...'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'...But it's been reinforced....'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'...I'm having trouble finding a hole in the 
security...'`;
   waitForClick; clearText; marker; appendText; 
   Narr`The conversation (mostly Sara talking) might 
have well been in some alien language.`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU13BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A162`); appendText; 
   //You
   You`"Well, when it gets that complicated, that's 
pretty much my limit..."`;
   waitForClick; clearText; marker; sound(`Y4A163`); appendText; 
   //You
   You`"I'm getting more and more suspicious about 
this database."`;
   waitForClick; clearText; marker; sound(`Y4A164`); appendText; 
   //You
   You`"I wonder what Leiblich is trying to hide with 
all this security?"`;
   waitForClick; clearText; marker; sound(`Y4A165`); appendText; 
   //Sara
   Sara`"Yeah...it's really strange. This isn't your 
average company security."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I suddenly remembered that on the first day, 
Sora had told me the reason why Leiblich 
built LeMU here was a corporate secret.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered if it could be related to this.`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU11BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A166`); appendText; 
   //You
   You`"Hey. Can't you use the program that worked 
to win that decoding contest, Mayo?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Oh, that's an idea."`;
   waitForClick; clearText; marker; sound(`Y4A167`); appendText; 
   //You
   You`"And if we could figure out the root authority 
password..."`;
   waitForClick; clearText; marker; sound(`Y4A168`); appendText; 
   //Sara
   Sara`"That's impossible."`;
   waitForClick; clearText; marker; sound(`Y4A169`); appendText; 
   //You
   You`"Why?"`;
   waitForClick; clearText; marker; sound(`Y4A170`); appendText; 
   //Sara
   Sara`"I did a check on the code strength. Guess 
what it was."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"What?"`;
   waitForClick; clearText; marker; sound(`Y4A171`); appendText; 
   //Sara
   Sara`"136 bit."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"What?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU13BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A172`); appendText; 
   //You
   You`"W-what?...That means..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The number of possible patterns was two to the 
136th power.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A174`); appendText; 
   //Sara
   Sara`"Even if you had what it took to get the 
password, by the time you found..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara held out her fist and opened it up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`"Booom!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was right...`;
   waitForClick; clearText; marker; appendText; 
   Narr`LeMU was going to go in three days.`;
   waitForClick; clearText; marker; appendText; 
   //You
   You`"..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You was depressed.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Isn't there anything else you can try?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A175`); appendText; 
   //Sara
   Sara`"Well, there is one thing..."`;
   waitForClick; clearText; marker; sound(`Y4A176`); appendText; 
   //Sara
   Sara`"There is one trick I haven't tried."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU11BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A177`); appendText; 
   //You
   You`"What's that?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`A ray of hope returned to You's eyes.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A178`); appendText; 
   //Sara
   Sara`"Everything I tried up until has been cracking 
this using orthodox methods."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Uh, there's no such thing as orthodox 
cracking, is there...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara ignored me and went on talking.`;
   waitForClick; clearText; marker; sound(`Y4A179`); appendText; 
   //Sara
   Sara`"What's left..."`;
   waitForClick; clearText; marker; sound(`Y4A180`); appendText; 
   //Sara
   Sara`"Is what is a kind of cracking that doesn't 
really require technique."`;
   waitForClick; clearText; marker; sound(`Y4A181`); appendText; 
   //Sara
   Sara`"It's called 'social engineering.'"`;
   waitForClick; clearText; marker; appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"What's that?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A182`); appendText; 
   //Sara
   Sara`"Simply put, it is using social behavior to 
get information...For example..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara stopped as if it were hard to say.`;
   waitForClick; clearText; marker; sound(`Y4A183`); appendText; 
   //Sara
   Sara`"For example, finding a person that works for 
the company operating the server you want to 
attack and tricking them into giving you 
a password."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"You get it by tricking...someone...?"`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `YU13BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A184`); appendText; 
   //You
   You`"You're talking about tricking Sora?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara nodded.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"There...there's no way we could do it."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Even if we could trick Sora..."`;
   waitForClick; clearText; marker; sound(`Y4A185`); appendText; 
   //Sara
   Sara`"Of course, it's not something I want to do 
either."`;
   waitForClick; clearText; marker; sound(`Y4A186`); appendText; 
   //Sara
   Sara`"From Sora's perspective, she can't very well 
leak company information..."`;
   waitForClick; clearText; marker; sound(`Y4A187`); appendText; 
   //Sara
   Sara`"And I won't try to force her. But..."`;
   waitForClick; clearText; marker; sound(`Y4A188`); appendText; 
   //Sara
   Sara`"But that's how you get information illegally."`;
   waitForClick; clearText; marker; sound(`Y4A189`); appendText; 
   //Sara
   Sara`"But if you are set on getting that 
information no matter what, you don't 
have much choice."`;
   waitForClick; clearText; marker; sound(`Y4A190`); appendText; 
   //Sara
   Sara`"I just want you to know that."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't think of anything to say.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We were using a computer to do it, so it 
didn't seem real, but we were actually trying 
to deceive someone to get information.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That was exactly what we were trying to do.`;
   waitForClick; clearText; marker; sound(`Y4A191`); appendText; 
   //You
   You`"A system's biggest bug is the people 
who use it...."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A192`); appendText; 
   //You
   You`"My mom used to say that a lot."`;
   waitForClick; clearText; marker; sound(`Y4A193`); appendText; 
   //You
   You`"In that way, maybe we are all bugs 
in LeMMIH's system." `;
   waitForClick; clearText; marker; appendText; 
   Narr`You stared straight at Sara.`;
   waitForClick; clearText; marker; sound(`Y4A194`); appendText; 
   //You
   You`"I agree with you Mayo."`;
   waitForClick; clearText; marker; sound(`Y4A195`); appendText; 
   //You
   You`"But I just can't do it."`;
   waitForClick; clearText; marker; sound(`Y4A196`); appendText; 
   //You
   You`"I can't do anything to deceive Sora."`;
   waitForClick; clearText; marker; sound(`Y4A197`); appendText; 
   //You
   You`"Even if I lose the chance to find out what 
happened to my dad."`;
   waitForClick; clearText; marker; sound(`Y4A198`); appendText; 
   //You
   You`"Mayo, I'm sorry for asking for such a 
difficult favor...but I think I'd rather try 
something else for now."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara looked down.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But then lifted her face, grinning broadly.`;
   waitForClick; clearText; marker; sound(`Y4A199`); appendText; 
   //Sara
   Sara`"Okay then. We'll do it your way."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 4, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara faced the keyboard again.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Sara..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A200`); appendText; 
   //Sara
   Sara`"Don't worry. No matter how stubborn the 
system is, it was made by people and they 
can't be as stubborn as me!"`;
   waitForClick; clearText; marker; sound(`Y4A201`); appendText; 
   //Sara
   Sara`"There's got to be a weak point somewhere..."`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara began typing away.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 3, color: WHITE });
stopSFX()
stopBGM();
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Just then the room was bathed in a bright 
light.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We covered our eyes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`After a bit our eyes got used to it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I squinted against the light.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And there was...`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO14A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora!?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora was floating in the air surrounded by a 
bright ring of light.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was looking down at us from above.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was wearing a white looking cape that 
fanned out like a pair of wings...`;
   waitForClick; clearText; marker; appendText; 
   Narr`She looked like an angel descending from 
heaven...`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"W-what is it, Sora?... Showing up all of a 
sudden..."`;
   waitForClick; clearText; marker; appendText; 
   //Sora
   Sora`"........."`;
   waitForClick; clearText; 
});
playBGM({ num: 12, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"Sora?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Something wasn't right.`;
   waitForClick; clearText; marker; sound(`Y4A202`); appendText; 
   //Sora
   Sora`"There was some abnormal traffic on LeMMIH so 
I came to see what was going on..."`;
   waitForClick; clearText; marker; sound(`Y4A203`); appendText; 
   //Sora
   Sora`"What are you all doing?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora spoke politely, but her eyes were 
like ice.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We should have expected her to see through us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But why did she seem completely different 
than the Sora we were used to?`;
   waitForClick; clearText; marker; sound(`Y4A204`); appendText; 
   //Sora
   Sora`"Please answer."`;
   waitForClick; clearText; marker; sound(`Y4A205`); appendText; 
   //Sara
   Sara`"Can't you tell by looking? We're trying to 
crack LeMMIH."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara answered coolly.`;
   waitForClick; clearText; marker; sound(`Y4A206`); appendText; 
   //Sora
   Sora`"Do you all know the meaning of what you are 
doing?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Sora! Please listen to what we have to say 
first."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"You's father was a member of the team that 
made LeMMIH."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"In other words, he's your father, too, Sora."`;
   waitForClick; clearText; marker; appendText; 
   //Sora
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"But he disappeared 17 years ago..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"At the same time there was an accident 
the cause of which was unclear here." `;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Something about the whole thing is shady."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Both the accident and the disappearance of 
You's father...we think that there is 
probably something behind the scenes 
connecting them..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"So You is trying to get the facts about 
her dad. She is looking for the truth."`;
   waitForClick; clearText; marker; sound(`Y4A207`); appendText; 
   //You
   You`"Please, Sora..."`;
   waitForClick; clearText; marker; sound(`Y4A208`); appendText; 
   //You
   You`"We aren't asking for your help. But please, 
just look the other way."`;
   waitForClick; clearText; marker; appendText; 
   //Sora
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Sora..."`;
   waitForClick; clearText; marker; sound(`Y4A209`); appendText; 
   //Sora
   Sora`"So that's...what this is about..."`;
   waitForClick; clearText; marker; sound(`Y4A210`); appendText; 
   //Sora
   Sora`"You's father was..."`;
   waitForClick; clearText; marker; sound(`Y4A211`); appendText; 
   //You
   You`"Sora...?"`;
   waitForClick; clearText; marker; sound(`Y4A212`); appendText; 
   //Sora
   Sora`"If it were something I can do, I would like 
to help you."`;
   waitForClick; clearText; marker; sound(`Y4A213`); appendText; 
   //Sora
   Sora`"If it were possible..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora closed her eyes for a while...`;
   waitForClick; clearText; marker; appendText; 
   Narr`...And then opened them.`;
   waitForClick; clearText; marker; sound(`Y4A214`); appendText; 
   //Sora
   Sora`"I understand your intentions."`;
   waitForClick; clearText; marker; sound(`Y4A215`); appendText; 
   //Sora
   Sora`"But my duty is to protect LeMMIH from 
intruders." `;
   waitForClick; clearText; marker; sound(`Y4A216`); appendText; 
   //Sora
   Sora`"So I am supposed to stop you."`;
   waitForClick; clearText; marker; sound(`Y4A217`); appendText; 
   //Sora
   Sora`"That is how I am designed."`;
   waitForClick; clearText; marker; sound(`Y4A218`); appendText; 
   //Sora
   Sora`"I alone have no choice...but to obey 
my orders."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"But that's not..."`;
   waitForClick; clearText; marker; sound(`Y4A219`); appendText; 
   //Sora
   Sora`"Oh...but...what should I..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora's shoulders shook and she had a pained 
look on her face.`;
   waitForClick; clearText; marker; sound(`Y4A220`); appendText; 
   //Sara
   Sara`"Sora it's fine."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Huh?"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: WHITE });
bgload({ name: `BG11A1`, transition: 26 });
multifgload3({ name1: `YU15BDS`, name2: `SA01ADS`, name3: `SO13ADS`, x1: 128, x2: 320, x3: 512, useAnim: 0 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; sound(`Y4A221`); appendText; 
   //Sara
   Sara`"It's alright. I think it'll work out somehow."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Work out somehow...? Sara, what are trying to 
do?"`;
   waitForClick; clearText; marker; sound(`Y4A222`); appendText; 
   //Sara
   Sara`"If Sora follows her current program, 
then she'll have to get in our way."`;
   waitForClick; clearText; marker; sound(`Y4A223`); appendText; 
   //Sara
   Sara`"But Sora doesn't want that."`;
   waitForClick; clearText; marker; sound(`Y4A224`); appendText; 
   //Sara
   Sara`"So I should just rewrite the program so 
that Sora can take the action that she 
wants to take."`;
   waitForClick; clearText; marker; sound(`Y4A225`); appendText; 
   //Sora
   Sora`"Can you do that?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA15ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A226`); appendText; 
   //Sara
   Sara`"Maybe."`;
   waitForClick; clearText; marker; sound(`Y4A227`); appendText; 
   //Sara
   Sara`"Of course, that is if you want me to..."`;
   waitForClick; clearText; marker; appendText; 
   //Sora
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora's shoulders quivered slightly.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Sora, are you scared?"`;
   waitForClick; clearText; 
});
multifgload3({ name1: `YU01BDS`, name2: `SA01ADS`, name3: `SO03ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`Y4A228`); appendText; 
   //Sora
   Sora`"Yes, a little."`;
   waitForClick; clearText; marker; sound(`Y4A229`); appendText; 
   //Sora
   Sora`"No...I am very scared."`;
   waitForClick; clearText; marker; appendText; 
   //Sara
   Sara`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU17BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A230`); appendText; 
   //You
   You`"Let's...not do this."`;
   waitForClick; clearText; marker; sound(`Y4A231`); appendText; 
   //You
   You`"I don't want my selfishness to cause any more 
problems for everyone."`;
   waitForClick; clearText; 
});
multifgload2({ id1: 2, id2: 4, name1: `SA14ADS`, name2: `SO13ADS`, x1: 320, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A232`); appendText; 
   //Sara
   Sara`"Be quiet, You."`;
   waitForClick; clearText; marker; sound(`Y4A233`); appendText; 
   //Sara
   Sara`"This has something to do with everyone, 
not just you."`;
   waitForClick; clearText; marker; appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA18ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A234`); appendText; 
   //Sara
   Sara`"Okay, Sora. It's up to you."`;
   waitForClick; clearText; marker; appendText; 
   //Sora
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Sora?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I'd like you to listen to me, and then decide 
after you hear what I've got to say..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Sora, you said it yourself."`;
   waitForClick; clearText; 
});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   marker; sound(`S2C091`); appendText; 
   //Sora
   Sora`"That you are not like everyone else, but 
wished you were."`;
   waitForClick; clearText; 
});
hideTextbox();
varop(`(28 0a a0) ac := (00) 0`);
closeDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   //Sora
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"You wanted to exist in the same way that 
we do."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"And we want the same thing."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"That is all I wanted to say."`;
   waitForClick; clearText; marker; appendText; 
   //Sora
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Sara
   Sara`"........."`;
   waitForClick; clearText; marker; appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Finally, Sora lifted her face and focused 
her eyes on Sara.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
fgload({ id: 4, name: `SO11ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A235`); appendText; 
   //Sora
   Sora`"Alright. I agree. Sara, please do your best."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA15ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A236`); appendText; 
   //Sara
   Sara`"As you wish."`;
   waitForClick; clearText; marker; sound(`Y4A237`); appendText; 
   //You
   You`"Mayo, you be careful."`;
   waitForClick; clearText; marker; sound(`Y4A238`); appendText; 
   //You
   You`"Please, don't hurt Sora..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SA11ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A239`); appendText; 
   //Sara
   Sara`"It'll be fine. Trust me."`;
   waitForClick; clearText; 
});
hideTextbox();
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara typed on the keyboard.`;
   waitForClick; clearText; marker; sound(`Y4A240`); appendText; 
   //Sara
   Sara`"Alright then. Sorry, Sora, but I'm going 
to take a look inside you now."`;
   waitForClick; clearText; marker; sound(`Y4A241`); appendText; 
   //Sara
   Sara`"Don't worry. Think of it as like an x-ray."`;
   waitForClick; clearText; marker; appendText; 
   Narr`"Sara continued working as we watched."`;
   waitForClick; clearText; marker; appendText; 
   Narr`As we watched her deft hands, Sora's tense 
expression began to relax.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was then that...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A242`); appendText; 
   //Sora
   Sora`"Ugghhh...!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora began to suffer.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Wh-what's the matter?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A243`); appendText; 
   //Sora
   Sora`"Ohhhh...please stop...!"`;
   waitForClick; clearText; 
});
playBGM({ num: 15, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`Y4A244`); appendText; 
   //Sora
   Sora`"Stop, stop...stop!"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: WHITE });
removeFG({ id: 1, useAnim: false });
bgload({ name: `EV_SO14B`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"S-Sora...?"`;
   waitForClick; clearText; marker; sound(`Y4A245`); appendText; 
   //Sora
   Sora`"System scanning error."`;
   waitForClick; clearText; marker; sound(`Y4A246`); appendText; 
   //Sora
   Sora`"Unauthorized access to the autonomic nervous 
system confirmed."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Wh-what happened?"`;
   waitForClick; clearText; marker; sound(`Y4A247`); appendText; 
   //You
   You`"How am I supposed to know?"`;
   waitForClick; clearText; marker; sound(`Y4A248`); appendText; 
   //Sara
   Sara`"Dang. That sucks...it looks like I got 
snagged by the scan..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"What's that mean?"`;
   waitForClick; clearText; marker; sound(`Y4A249`); appendText; 
   //Sara
   Sara`"That the surveillance program that is 
managing Sora discovered it was being cracked."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO14C`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`Y4A250`); appendText; 
   //Sora
   Sora`"Oh no...!"`;
   waitForClick; clearText; marker; sound(`Y4A251`); appendText; 
   //Sora
   Sora`"Everyone...please escape at once!"`;
   waitForClick; clearText; marker; sound(`Y4A252`); appendText; 
   //Sora
   Sora`"If you stay...I..."`;
   waitForClick; clearText; marker; sound(`Y4A253`); appendText; 
   //Sora
   Sora`"I may...harm you."`;
   waitForClick; clearText; marker; sound(`Y4A254`); appendText; 
   //You
   You`"Huh?"`;
   waitForClick; clearText; marker; sound(`Y4A255`); appendText; 
   //Sora
   Sora`"Escape..."`;
   waitForClick; clearText; marker; sound(`Y4A256`); appendText; 
   //Sora
   Sora`"N...now!"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO14B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`Y4A257`); appendText; 
   //Sora
   Sora`"Intruder route discovered."`;
   waitForClick; clearText; marker; sound(`Y4A258`); appendText; 
   //Sora
   Sora`"Oh...I'm not going to make it!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora held out her hand.`;
   waitForClick; clearText; marker; sound(`Y4A259`); appendText; 
   //Sora
   Sora`"I will now implement elimination of the 
intruder."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_09`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Our surroundings suddenly changed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We were no longer in the Security Office.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We were in the middle of a roiling ocean.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The water swirled loudly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Wh-what is this?!)`;
   waitForClick; clearText; marker; appendText; 
   Narr`It appeared as if we were about to be sucked 
in and our bodies torn to pieces.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tried to shout...but water continued to rush 
into my lungs and I couldn't breathe.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(What is...happening?)`;
   waitForClick; clearText; marker; sound(`Y4A260`); appendText; 
   //You
   You`"Is this...an RSD image?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You shouted this.`;
   waitForClick; clearText; marker; sound(`Y4A261`); appendText; 
   //You
   You`"Everyone, close your eyes!"`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 03 });
stopSFX()
showTextbox();
text(() => {
   marker; appendText; 
   Narr`When I closed my eyes, the surrounding 
apocalyptic scenery seemed like a lie.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The ocean continued to ground in my ears.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was all the work of a generated hologram.`;
   waitForClick; clearText; marker; appendText; 
   Narr`So it was no longer scary.`;
   waitForClick; clearText; marker; sound(`Y4A262`); appendText; 
   //Sora
   Sora`"It is no use."`;
   waitForClick; clearText; marker; sound(`Y4A263`); appendText; 
   //Sora
   Sora`"Aaahh! Please, stop!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The next instant a high-frequency scream rang 
out in my mind.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My head hurt like it might split open.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Waaaaaaaaaaaaaaaaaahhhhh!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Unable to withstand it, I took out the voice 
converters that I thought were causing the 
pain.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But the sound went on.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO14B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`Y4A264`); appendText; 
   //Sora
   Sora`"That is why I said it was no use."`;
   waitForClick; clearText; marker; sound(`Y4A265`); appendText; 
   //Sora
   Sora`"Sound is also being emitted from the room's 
speakers."`;
   waitForClick; clearText; marker; sound(`Y4A266`); appendText; 
   //Sora
   Sora`"As long as you are in LeMU you can't escape."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Pl...please stop...!"`;
   waitForClick; clearText; marker; sound(`Y4A267`); appendText; 
   //You
   You`"Ahhhhhhhhhhhh!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The pain was so intense that we were rolling 
around on the floor.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO14C`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`Y4A268`); appendText; 
   //Sora
   Sora`"Ahh..aaahhhh! I...I...!"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO14B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`Y4A269`); appendText; 
   //Sora
   Sora`"I am warning you. Remove yourself 
from LeMMIH."`;
   waitForClick; clearText; marker; sound(`Y4A270`); appendText; 
   //Sora
   Sora`"Cease what you are doing immediately."`;
   waitForClick; clearText; marker; sound(`Y4A271`); appendText; 
   //Sara
   Sara`"N...no...!"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO14C`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`Y4A272`); appendText; 
   //Sora
   Sora`"Please, Sara. That is enough. Please stop."`;
   waitForClick; clearText; marker; sound(`Y4A273`); appendText; 
   //Sara
   Sara`"I said no!"`;
   waitForClick; clearText; marker; sound(`Y4A274`); appendText; 
   //Sara
   Sara`"I have to do this...for Sora...for 
Nakkyu...and for myself."`;
   waitForClick; clearText; marker; sound(`Y4A275`); appendText; 
   //Sara
   Sara`"I won't lose to Leiblich!"`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara continued pecking at the keyboard.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO14B`, transition: 20 });
stopSFX()
showTextbox();
text(() => {
   marker; sound(`Y4A276`); appendText; 
   //Sora
   Sora`"This is your final warning. Desist 
immediately."`;
   waitForClick; clearText; marker; sound(`Y4A277`); appendText; 
   //Sora
   Sora`"If you persist in your efforts, I can not 
guarantee your safety."`;
   waitForClick; clearText; marker; sound(`Y4A278`); appendText; 
   //Sara
   Sara`"There has to be a hole someplace in the 
security...!"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO14C`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`Y4A279`); appendText; 
   //Sora
   Sora`"S-Sara...!"`;
   waitForClick; clearText; marker; sound(`Y4A280`); appendText; 
   //Sara
   Sara`"Wh...what? I'm not giving up...no matter 
what...!"`;
   waitForClick; clearText; marker; sound(`Y4A281`); appendText; 
   //Sora
   Sora`"There is no...I will from now...release one 
segment of my security."`;
   waitForClick; clearText; marker; sound(`Y4A282`); appendText; 
   //Sora
   Sora`"Please aim for it...by sending in a massive 
load of data."`;
   waitForClick; clearText; marker; sound(`Y4A283`); appendText; 
   //Sara
   Sara`"You mean...cause an overload...?"`;
   waitForClick; clearText; marker; sound(`Y4A284`); appendText; 
   //Sora
   Sora`"Yes...that should...make my system out of 
control."`;
   waitForClick; clearText; marker; sound(`Y4A285`); appendText; 
   //Sora
   Sora`"I can't guarantee...the outcome...but it 
might create a gap long enough for you to 
rewrite the system."`;
   waitForClick; clearText; marker; sound(`Y4A286`); appendText; 
   //Sara
   Sara`"Okay...please do it!"`;
   waitForClick; clearText; marker; sound(`Y4A287`); appendText; 
   //Sora
   Sora`"With my power...I can only free it up for 
only a short amount of time."`;
   waitForClick; clearText; marker; sound(`Y4A288`); appendText; 
   //Sora
   Sora`"Don't miss the chance."`;
   waitForClick; clearText; marker; sound(`Y4A289`); appendText; 
   //Sora
   Sora`"The chance will...be 1/17 of a second."`;
   waitForClick; clearText; marker; sound(`Y4A290`); appendText; 
   //Sara
   Sara`"Got it."`;
   waitForClick; clearText; marker; sound(`Y4A291`); appendText; 
   //Sora
   Sora`"Okay. Here I go..."`;
   waitForClick; clearText; marker; sound(`Y4A292`); appendText; 
   //Sora
   Sora`"Gggrrrrhhh...!"`;
   waitForClick; clearText; 
});
hideTextbox();
delay({ interval: 60 });
setNumberOfFlash(3);
setFlashRGBColor(255, 255, 255);
triggerFlash();
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Beeeeeeeeeep!`;
   waitForClick; clearText; marker; sound(`Y4A293`); appendText; 
   //Sora
   Sora`"A type 14 error has occurred."`;
   waitForClick; clearText; marker; sound(`Y4A294`); appendText; 
   //Sora
   Sora`"Now!"`;
   waitForClick; clearText; marker; sound(`Y4A295`); appendText; 
   //Sara
   Sara`"Sorry, Sora!"`;
   waitForClick; clearText; marker; sound(`Y4A296`); appendText; 
   //Sora
   Sora`"One segment of security..."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara pushed the enter key.`;
   waitForClick; clearText; marker; sound(`Y4A297`); appendText; 
   //Sora
   Sora`"...has discovered an impediment..."`;
   waitForClick; clearText; marker; sound(`Y4A298`); appendText; 
   //Sora
   Sora`"Aaaaaaaaaaaaaaaaaaaaahhhh!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Beeep!`;
   waitForClick; clearText; marker; sound(`Y4A299`); appendText; 
   //Sora
   Sora`"A type 7 error has occurred."`;
   waitForClick; clearText; marker; sound(`Y4A300`); appendText; 
   //Sora
   Sora`"Approaching numerical limit."`;
   waitForClick; clearText; marker; sound(`Y4A301`); appendText; 
   //Sara
   Sara`"I did it!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The high-frequency attack stopped.`;
   waitForClick; clearText; marker; sound(`Y4A302`); appendText; 
   //Sora
   Sora`"Aaaah...arrrghhh...oooooowww!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora struggled in pain.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Finally her body began trembling.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Sora!?"`;
   waitForClick; clearText; marker; sound(`Y4A303`); appendText; 
   //You
   You`"Sora...looks bad..."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Beeeeeeeeeeeeep!`;
   waitForClick; clearText; marker; sound(`Y4A304`); appendText; 
   //Sora
   Sora`"A type 9 error has occurred."`;
   waitForClick; clearText; marker; sound(`Y4A305`); appendText; 
   //Sora
   Sora`"Division by zero will be initiated according 
to application formatting."`;
   waitForClick; clearText; marker; sound(`Y4A306`); appendText; 
   //Sara
   Sara`"Here goes the overload..."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Beeeeeeeeeeeeep!`;
   waitForClick; clearText; marker; sound(`Y4A307`); appendText; 
   //Sora
   Sora`"Waaaaa! W-what's happening to me...?"`;
   waitForClick; clearText; marker; sound(`Y4A308`); appendText; 
   //Sora
   Sora`"I am...I am Sora Akanegasaki...a system
engineer in LeMU's Development
Department...and assistant in charge of 
operating LeMU."`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE07_02`, a1: 0, volume: 100 });
setNumberOfFlash(1);
setFlashRGBColor(255, 255, 255);
triggerFlash();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Crackle!`;
   waitForClick; clearText; marker; appendText; 
   Narr`A part of the console sparked.`;
   waitForClick; clearText; marker; sound(`Y4A309`); appendText; 
   //Sora
   Sora`"I...will be your guide today during you visit 
to LeMU."`;
   waitForClick; clearText; marker; sound(`Y4A310`); appendText; 
   //Sora
   Sora`"I...guarantee your safety and the safety of 
everyone on LeMU."`;
   waitForClick; clearText; marker; sound(`Y4A311`); appendText; 
   //Sora
   Sora`"I am the protector of everyone in LeMU."`;
   waitForClick; clearText; marker; sound(`Y4A312`); appendText; 
   //Sora
   Sora`"I am the defender of all in LeMU."`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE07_02`, a1: 0, volume: 100 });
setNumberOfFlash(1);
setFlashRGBColor(255, 255, 255);
triggerFlash();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Snap!`;
   waitForClick; clearText; marker; sound(`Y4A313`); appendText; 
   //Sora
   Sora`"I am...I am..."`;
   waitForClick; clearText; marker; sound(`Y4A314`); appendText; 
   //Sora
   Sora`"Who am I?"`;
   waitForClick; clearText; marker; sound(`Y4A315`); appendText; 
   //Sara
   Sara`"Don't lose yourself! You are Sora! You are
Sora Akanegasaki and have been spending time
with us!"`;
   waitForClick; clearText; marker; sound(`Y4A316`); appendText; 
   //Sora
   Sora`"I have...with everyone...?"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Beeeeeeeeeeep!`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO14B`, transition: 20 });
stopSFX()
showTextbox();
text(() => {
   marker; sound(`Y4A317`); appendText; 
   //Sora
   Sora`"A type 34 error has occurred."`;
   waitForClick; clearText; marker; sound(`Y4A318`); appendText; 
   //Sora
   Sora`"Unanticipated orders are attempting to be 
implemented."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO14C`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`Y4A319`); appendText; 
   //Sora
   Sora`"Uuughhhhhhh!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora started suffering even more...`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SO14D`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And then something surprising happened.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora...split in two.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Sora...is two..."`;
   waitForClick; clearText; marker; sound(`Y4A320`); appendText; 
   //You
   You`"You mean...she divided...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`It wasn't an illusion.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Of course, given that it was all 
RSD-generated, there is no guarantee 
that it all wasn't an illusion...`;
   waitForClick; clearText; marker; appendText; 
   Narr`At least I was not the only one that saw it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You and Sara seemed to be seeing it, too.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The new Sora attacked, grabbing the old 
Sora by the throat.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The two of them struggled equally.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The two Soras...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was like an apple split into two pieces...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`No! It was like an apple reproduced in whole.`;
   waitForClick; clearText; marker; appendText; 
   Narr`...Cell Division`;
   waitForClick; clearText; marker; appendText; 
   Narr`I figured that this was the result of 
overloading LeMMIH.`;
   waitForClick; clearText; marker; sound(`Y4A321`); appendText; 
   //Sara
   Sara`"Okay! I got the root authority!"`;
   waitForClick; clearText; marker; sound(`Y4A322`); appendText; 
   //Sora
   Sora`"Do it now! If you strike now, you can 
rewrite the system!"`;
   waitForClick; clearText; marker; sound(`Y4A323`); appendText; 
   //Sora
   Sora`"A fatal...system error...has occurred..."`;
   waitForClick; clearText; marker; sound(`Y4A324`); appendText; 
   //Sora
   Sora`"Data may 
be...damaged...Immediately... 
initiate...rebuilding..."`;
   waitForClick; clearText; marker; sound(`Y4A325`); appendText; 
   //Sora
   Sora`"In 30 seconds...the emergency reset...will 
initiate."`;
   waitForClick; clearText; marker; sound(`Y4A326`); appendText; 
   //Sora
   Sora`"Hurry! LeMMIH is resetting the system 
to rebuild it."`;
   waitForClick; clearText; marker; sound(`Y4A327`); appendText; 
   //Sora
   Sora`"You must act before that! Hurry!"`;
   waitForClick; clearText; marker; sound(`Y4A328`); appendText; 
   //Sara
   Sara`"Okay! Just be patient, Sora."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara typed the keys at a furious speed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`All we could do is stand helplessly and watch.`;
   waitForClick; clearText; marker; sound(`Y4A329`); appendText; 
   //Sora
   Sora`"17 seconds to reset."`;
   waitForClick; clearText; marker; sound(`Y4A330`); appendText; 
   //Sora
   Sora`"Sara? Not yet?"`;
   waitForClick; clearText; marker; sound(`Y4A331`); appendText; 
   //Sara
   Sara`"Just a little more!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara continued pounding in code as she 
wiped the sweat from her brow.`;
   waitForClick; clearText; marker; sound(`Y4A332`); appendText; 
   //Sora
   Sora`"Seven seconds to reset."`;
   waitForClick; clearText; marker; sound(`Y4A333`); appendText; 
   //Sora
   Sora`"Sara!"`;
   waitForClick; clearText; marker; sound(`Y4A334`); appendText; 
   //Sara
   Sara`"I've got it!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara stood as if she were ejected from 
her chair.`;
   waitForClick; clearText; marker; sound(`Y4A335`); appendText; 
   //Sora
   Sora`"Three seconds to reset."`;
   waitForClick; clearText; marker; sound(`Y4A336`); appendText; 
   //Sara
   Sara`"Okay! Ninja Technology Technique..."`;
   waitForClick; clearText; marker; sound(`Y4A337`); appendText; 
   //Sara
   Sara`"Time to turn the tables!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara struck the keyboard with her palm.`;
   waitForClick; clearText; 
});
removeBG({ mode: WHITE, transition: 02 });
stopSFX()
delay({ interval: 60 });
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The room was flooded with bright light.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The two of Sora's images began to overlap..`;
   waitForClick; clearText; marker; appendText; 
   Narr`The two fused into one.`;
   waitForClick; clearText; marker; appendText; 
   Narr`At the same time, the system underwent an 
emergency reset.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`At that instant we were all swallowed 
into pitch blackness.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Darkness and silence...colors and sound lost.`;
   waitForClick; clearText; marker; appendText; 
   Narr`LeMMIH temporarily ceased functioning.`;
   waitForClick; clearText; 
});
hideTextbox();
delay({ interval: 120 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And then exactly 170 seconds later...`;
   waitForClick; clearText; marker; appendText; 
   Narr`LeMMIH rebooted.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 18, volume: 100 });
bgload({ name: `BG11A2`, transition: 20 });
bgload({ name: `BG11A1`, transition: 20 });
clock(`9:19`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The lights and other machinery restarted.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The fan of the computer gave off a quiet 
whirring sound. The display on the wall 
came online all at once.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was a surge of letters rushing across 
the monitor...the system start up 
screen...and it finally switched to 
automatic operating mode.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And then Sora appeared again before us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She seemed to burst upon us floating in 
the air, but at the same time had a solid 
presence.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She closed her eyes and it looked as if 
she were embracing herself as she descended.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Sora...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora slowly opened her eyes.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A338`); appendText; 
   //Sora
   Sora`"Good morning."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A339`); appendText; 
   //Sora
   Sora`"...Everyone."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Saying that, she smiled broadly.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Do you know who we are? Do you remember us?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I pointed at myself.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A340`); appendText; 
   //Sora
   Sora`"Yes, Kid."`;
   waitForClick; clearText; marker; sound(`Y4A341`); appendText; 
   //Sora
   Sora`"And You and Sara as well."`;
   waitForClick; clearText; marker; sound(`Y4A342`); appendText; 
   //Sora
   Sora`"And Takeshi and Tsugumi, although they of 
course are not present."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
setFGRenderOrder(2, 4, 1);
multifgload3({ name1: `YU15BDS`, name2: `SO01ADS`, name3: `SA11ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`Y4A343`); appendText; 
   //You
   You`"Oh...I'm so glad you remember..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO11ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A344`); appendText; 
   //Sora
   Sora`"Yes."`;
   waitForClick; clearText; marker; sound(`Y4A345`); appendText; 
   //Sara
   Sara`"Hey, Sora. I would like to investigate 
LeMMIH's C level data. Could you help me?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO15ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A346`); appendText; 
   //Sora
   Sora`"Of course. I'll do my best."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora nodded slightly as she spoke.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Hey, there is something I would like to 
know..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Sara, what in the world did you do to 
rewrite the system?"`;
   waitForClick; clearText; 
});
multifgload3({ name1: `YU03BDS`, name2: `SO01ADS`, name3: `SA01ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`Y4A347`); appendText; 
   //Sara
   Sara`"Uh, well...actually I didn't change anything."`;
   waitForClick; clearText; marker; sound(`Y4A348`); appendText; 
   //Sara
   Sara`"I just added a patch that changes the 
priority duties."`;
   waitForClick; clearText; marker; sound(`Y4A349`); appendText; 
   //Sora
   Sora`"That is correct. My processing routine 
has not been altered."`;
   waitForClick; clearText; marker; sound(`Y4A350`); appendText; 
   //Sora
   Sora`"However, now my duty to serve you is higher 
priority than that of my duty to protect 
LeMMIH."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Hmmm. I don't really understand, but..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"But you mean that you no longer have to 
stop us?"`;
   waitForClick; clearText; marker; sound(`Y4A351`); appendText; 
   //Sora
   Sora`"That's right."`;
   waitForClick; clearText; marker; sound(`Y4A352`); appendText; 
   //Sora
   Sora`"And if it will be of use to you, then 
I will show you the internal workings of 
LeMMIH."`;
   waitForClick; clearText; 
});
fgload({ id: 4, name: `SA12ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A353`); appendText; 
   //Sara
   Sara`"Now then, shall we jump right into the 
search?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO15ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A354`); appendText; 
   //Sora
   Sora`"By all means."`;
   waitForClick; clearText; marker; appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Hey? You, what's wrong?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You was hunched over and quiet. She didn't 
look well.`;
   waitForClick; clearText; 
});
multifgload3({ name1: `YU17BDS`, name2: `SO11ADS`, name3: `SA11ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`Y4A355`); appendText; 
   //You
   You`"Thank you...Sora...and Mayo."`;
   waitForClick; clearText; marker; sound(`Y4A356`); appendText; 
   //You
   You`"You've done so much for me..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`And then Sara said - `;
   waitForClick; clearText; marker; sound(`Y4A357`); appendText; 
   //Sara
   Sara`"That doesn't seem like you...Nakkyu."`;
   waitForClick; clearText; marker; sound(`Y4A358`); appendText; 
   //Sara
   Sara`"You can't choose what you have to do to get 
what you want, just keep being yourself!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara waved her words away casually with the 
palm of her hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I agreed with her completely.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"She's right. Don't lose sight of yourself."`;
   waitForClick; clearText; marker; sound(`Y4A359`); appendText; 
   //Sora
   Sora`"I agree."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU15BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A360`); appendText; 
   //You
   You`"Okay..."`;
   waitForClick; clearText; 
});
multifgload3({ name1: `YU01BDS`, name2: `SO01ADS`, name3: `SA01ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`Y4A361`); appendText; 
   //You
   You`"And thank you too, Kid."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Huh? Me? I didn't do anything."`;
   waitForClick; clearText; marker; sound(`Y4A362`); appendText; 
   //You
   You`"What are you talking about? You are the one 
that persuaded Sara to help, right?"`;
   waitForClick; clearText; marker; sound(`Y4A363`); appendText; 
   //Sora
   Sora`"And my decision was based on your words of 
wisdom."`;
   waitForClick; clearText; marker; appendText; 
   Narr`'You told me that you all hoped for the same 
thing.'`;
   waitForClick; clearText; marker; sound(`Y4A364`); appendText; 
   //Sora
   Sora`"It was your advice that helped me to make 
up my mind."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I see...so that's what happened."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt a bit embarrassed.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A365`); appendText; 
   //You
   You`"Alright! Now enough warm fuzzies..."`;
   waitForClick; clearText; marker; sound(`Y4A366`); appendText; 
   //You
   You`"Let's start investigating!"`;
   waitForClick; clearText; 
});
multifgload2({ id1: 2, id2: 4, name1: `SO02ADS`, name2: `SA02ADS`, x1: 320, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A367`); appendText; 
   //Everyone
   Everyone`"Alright!!"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And so we restarted the investigation into 
You's father.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The only clue that we had to start off our 
investigation was the name of You's father, 
Yoichi Tanaka.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Actually, the work going on beneath the 
surface of LeMMIH's exterior was all 
done by Sora.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked like the system still couldn't 
be accessed by normal means. Sara was worn out 
but she kept on typing.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
delay({ interval: 60 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`...Nearly half an hour had passed since Sora 
had disappeared inside LeMMIH.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 16, volume: 100 });
setMonoColorOverlayFadeOutDuration(46);
fadeOutMonoColorOverlay();
unSkippableDelay(33);
clock(`9:52`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora suddenly appeared from inside the console.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Are you finished?"`;
   waitForClick; clearText; 
});
multifgload3({ name1: `YU15BDS`, name2: `SO03ADS`, name3: `SA11ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   marker; sound(`Y4A368`); appendText; 
   //Sora
   Sora`"I can only tell you what I was able to learn, 
but..."`;
   waitForClick; clearText; marker; sound(`Y4A369`); appendText; 
   //Sara
   Sara`"Good work."`;
   waitForClick; clearText; marker; sound(`Y4A370`); appendText; 
   //You
   You`"So? What did you find out."`;
   waitForClick; clearText; marker; appendText; 
   //Sora
   Sora`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"It didn't work?"`;
   waitForClick; clearText; marker; sound(`Y4A371`); appendText; 
   //Sora
   Sora`"No, I have uncovered various facts."`;
   waitForClick; clearText; marker; sound(`Y4A372`); appendText; 
   //You
   You`"In that case, hurry up and tell us."`;
   waitForClick; clearText; marker; appendText; 
   //Sora
   Sora`"........."`;
   waitForClick; clearText; 
});
hideTextbox();
fgload({ id: 2, name: `SO13ADS`, x: 320, useAnim: true });
delay({ interval: 30 });
multifgload2({ id1: 1, id2: 4, name1: `YU17BDS`, name2: `SA13ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A373`); appendText; 
   //Sara
   Sara`"...Sora?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora stared straight at You.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her serious expression made You wrinkle her 
brow.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It didn't look like the kind of situation 
suitable for light talk or jokes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered what Sora could have found...?`;
   waitForClick; clearText; marker; sound(`Y4A374`); appendText; 
   //Sora
   Sora`"You, I want you to stay calm and listen."`;
   waitForClick; clearText; marker; sound(`Y4A375`); appendText; 
   //Sora
   Sora`"There is a possibility..."`;
   waitForClick; clearText; marker; sound(`Y4A376`); appendText; 
   //Sora
   Sora`"That your father, Yoichi Tanaka, has already 
died."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A377`); appendText; 
   //You
   You`"...Huh?.... My father...dead?"`;
   waitForClick; clearText; marker; sound(`Y4A378`); appendText; 
   //Sora
   Sora`"Yes, 34 years ago."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Thirty-four years ago...?"`;
   waitForClick; clearText; marker; appendText; 
   //Sara
   Sara`"..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU18BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A379`); appendText; 
   //You
   You`"H-hold...on..."`;
   waitForClick; clearText; marker; sound(`Y4A380`); appendText; 
   //You
   You`"What do you mean 34 years ago?"`;
   waitForClick; clearText; marker; sound(`Y4A381`); appendText; 
   //You
   You`"I'm only 18-years-old."`;
   waitForClick; clearText; marker; sound(`Y4A382`); appendText; 
   //You
   You`"I was born 18 years ago."`;
   waitForClick; clearText; marker; sound(`Y4A383`); appendText; 
   //You
   You`"How could anything as ridiculous as my father 
dying 34 years ago...?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Y-yeah...what you're saying Sora just doesn't 
match the facts."`;
   waitForClick; clearText; marker; sound(`Y4A384`); appendText; 
   //Sora
   Sora`"Please just stay calm and listen."`;
   waitForClick; clearText; marker; sound(`Y4A385`); appendText; 
   //Sora
   Sora`"I have not reached a final conclusion."`;
   waitForClick; clearText; marker; sound(`Y4A386`); appendText; 
   //Sora
   Sora`"I am merely saying that there is the 
possibility."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU17BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; marker; sound(`Y4A387`); appendText; 
   //Sora
   Sora`"First I tried to search for information on 
You's father."`;
   waitForClick; clearText; marker; sound(`Y4A388`); appendText; 
   //Sora
   Sora`"However, there were no files pertaining to 
Yoichi Tanaka recorded in LeMU's database."`;
   waitForClick; clearText; marker; sound(`Y4A389`); appendText; 
   //Sora
   Sora`"In other words, there are no records that 
anyone by that name existed."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"So are you saying...that You's father wasn't 
here?"`;
   waitForClick; clearText; marker; sound(`Y4A390`); appendText; 
   //You
   You`"It...it can't be..."`;
   waitForClick; clearText; marker; sound(`Y4A391`); appendText; 
   //Sara
   Sara`"But that is only based on limited information 
from the areas of files you can access, right 
Sora? You said there were areas you couldn't 
breach, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO17ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A392`); appendText; 
   //Sora
   Sora`"Of course, that is correct."`;
   waitForClick; clearText; marker; sound(`Y4A393`); appendText; 
   //Sora
   Sora`"I am merely an interface program for LeMMIH."`;
   waitForClick; clearText; marker; sound(`Y4A394`); appendText; 
   //Sora
   Sora`"I am not permitted to access high-security 
data."`;
   waitForClick; clearText; marker; sound(`Y4A395`); appendText; 
   //Sara
   Sara`"So records about Yoichi Tanaka might be 
there."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora continued, responding to Sara's question.`;
   waitForClick; clearText; marker; sound(`Y4A396`); appendText; 
   //Sora
   Sora`"That is a possibility that I can't deny."`;
   waitForClick; clearText; marker; sound(`Y4A397`); appendText; 
   //Sora
   Sora`"However, there is no such name on company 
name lists, accounting records or any of the 
message logs exchanged on the local area 
network..."`;
   waitForClick; clearText; marker; sound(`Y4A398`); appendText; 
   //Sora
   Sora`"As far as these are concerned, no record of 
Yoichi Tanaka exists."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU18BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A399`); appendText; 
   //You
   You`"That can't be!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `SO13ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A400`); appendText; 
   //You
   You`"I'm sure that my dad worked here at LeMU!"`;
   waitForClick; clearText; marker; sound(`Y4A401`); appendText; 
   //You
   You`"And besides...besides..."`;
   waitForClick; clearText; marker; sound(`Y4A402`); appendText; 
   //You
   You`"Even if he wasn't here...that doesn't mean 
that he is dead, right?"`;
   waitForClick; clearText; marker; sound(`Y4A403`); appendText; 
   //Sora
   Sora`"Correct..."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE05_08`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Bang!`;
   waitForClick; clearText; marker; sound(`Y4A404`); appendText; 
   //You
   You`"No it's not 'correct!' Tell me why you 
reached that theory!"`;
   waitForClick; clearText; marker; sound(`Y4A405`); appendText; 
   //Sara
   Sara`"Nakkyu, please calm down."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara grabbed You as she went to grab Sora.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You was on the verge of losing reason, and 
getting carried away by her emotions.`;
   waitForClick; clearText; marker; sound(`Y4A406`); appendText; 
   //Sora
   Sora`"I will explain my research and reasoning."`;
   waitForClick; clearText; marker; sound(`Y4A407`); appendText; 
   //Sora
   Sora`"But first...may I ask you a question?"`;
   waitForClick; clearText; marker; sound(`Y4A408`); appendText; 
   //You
   You`"?"`;
   waitForClick; clearText; marker; sound(`Y4A409`); appendText; 
   //Sora
   Sora`"This may sound rude, but...where did you hear 
that your father was an employee at LeMU?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU17BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A410`); appendText; 
   //You
   You`"I..."`;
   waitForClick; clearText; marker; sound(`Y4A411`); appendText; 
   //Sora
   Sora`"That your father disappeared when you were a 
one-year-old."`;
   waitForClick; clearText; marker; sound(`Y4A412`); appendText; 
   //Sora
   Sora`"If that is a fact, then you should have no 
memories of your father..."`;
   waitForClick; clearText; marker; sound(`Y4A413`); appendText; 
   //Sora
   Sora`"Am I wrong?"`;
   waitForClick; clearText; marker; sound(`Y4A414`); appendText; 
   //You
   You`"No, you're right."`;
   waitForClick; clearText; marker; sound(`Y4A415`); appendText; 
   //You
   You`"I don't remember anything about my father."`;
   waitForClick; clearText; marker; sound(`Y4A416`); appendText; 
   //You
   You`"I don't remember playing together, or him 
holding me..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU18BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A417`); appendText; 
   //You
   You`"But I'm sure that he as around until 
I was one."`;
   waitForClick; clearText; marker; sound(`Y4A418`); appendText; 
   //You
   You`"There are pictures and films of that time. 
I'm sure he was there."`;
   waitForClick; clearText; marker; sound(`Y4A419`); appendText; 
   //You
   You`"I'm sure that my mom said so as well."`;
   waitForClick; clearText; marker; sound(`Y4A420`); appendText; 
   //Sora
   Sora`"So that was the case..." `;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`Y4A421`); appendText; 
   //You
   You`"Huh?"`;
   waitForClick; clearText; marker; sound(`Y4A422`); appendText; 
   //Sora
   Sora`"It is about your mother..."`;
   waitForClick; clearText; marker; appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Sara
   Sara`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Sora
   Sora`"........."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`Y4A423`); appendText; 
   //You
   You`"What is it? Why won't you say anything?"`;
   waitForClick; clearText; marker; sound(`Y4A424`); appendText; 
   //Sora
   Sora`"It's because..."`;
   waitForClick; clearText; marker; sound(`Y4A425`); appendText; 
   //You
   You`"What?"`;
   waitForClick; clearText; marker; sound(`Y4A426`); appendText; 
   //Sora
   Sora`"It is difficult to say..."`;
   waitForClick; clearText; marker; sound(`Y4A427`); appendText; 
   //You
   You`"It might be difficult...but you have 
already told me many difficult things."`;
   waitForClick; clearText; marker; appendText; 
   //Sora
   Sora`"........."`;
   waitForClick; clearText; marker; sound(`Y4A428`); appendText; 
   //You
   You`"So tell me. What happened with my mom?"`;
   waitForClick; clearText; marker; sound(`Y4A429`); appendText; 
   //Sora
   Sora`"You're sure?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU17BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A430`); appendText; 
   //You
   You`"Y-yes."`;
   waitForClick; clearText; marker; sound(`Y4A431`); appendText; 
   //Sora
   Sora`"Then I will tell you."`;
   waitForClick; clearText; marker; sound(`Y4A432`); appendText; 
   //Sora
   Sora`"Your mother...Yukie Tanaka..."`;
   waitForClick; clearText; marker; sound(`Y4A433`); appendText; 
   //Sora
   Sora`"Passed away 15 years ago."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU18BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A434`); appendText; 
   //You
   You`"No!?"`;
   waitForClick; clearText; marker; sound(`Y4A435`); appendText; 
   //You
   You`"W-what are you saying? Sora..."`;
   waitForClick; clearText; marker; sound(`Y4A436`); appendText; 
   //You
   You`"How can you tell me that..."`;
   waitForClick; clearText; marker; sound(`Y4A437`); appendText; 
   //You
   You`"That's just not possible..."`;
   waitForClick; clearText; marker; sound(`Y4A438`); appendText; 
   //Sora
   Sora`"That is all that I can tell you."`;
   waitForClick; clearText; marker; sound(`Y4A439`); appendText; 
   //Sora
   Sora`"I will display the detailed documents on the 
screen."`;
   waitForClick; clearText; marker; sound(`Y4A440`); appendText; 
   //Sora
   Sora`"Please refer to them."`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You stumbled toward the display, sitting 
down in front of it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara and I read the display from over her 
shoulder.`;
   waitForClick; clearText; marker; appendText; 
   Narr`On the screen...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Was a record from the company LAN.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a notice a death.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was a file about the office procedures 
related to Yukie Tanaka's death. `;
   waitForClick; clearText; marker; appendText; 
   Narr`There was a message log of messages exchanged 
among employees about the notice of her death.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And a funeral notice.`;
   waitForClick; clearText; marker; appendText; 
   Narr`...The screen kept changing from one 
image to the next.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The next thing that was uploaded to 
the server read-`;
   waitForClick; clearText; marker; appendText; 
   Narr`02/07/19...`;
   waitForClick; clearText; marker; appendText; 
   Narr`(So this was on July 19, 2002, 15 years ago...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`At the end of the files, the following 
appeared.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a record of an online conversation 
between employee Mr. A in the Personnel 
Section of the General Affairs Division 
and Mrs. B in the Second Section of the 
Research Division.`;
   waitForClick; clearText; 
});
setFGRenderOrder(4, 2, 1);
removeBG({ mode: BLACK, transition: 02 });
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`A > But it really was a shock.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`B > What was?`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`A > I mean about Yukie. Yukie Tanaka.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`B > Oh, yeah...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`B > Yükie was always so nice to me.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`A > That's right. She was your boss, right?`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`A > Do you know the cause of death?`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`B > TB`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`A > TB?`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`B > Tief Blau`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`A > That again...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`A > It's the same as how he husband died...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`B > Her husband?`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`A > What? Oh, you mean you didn't know?`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`B > Is that so?`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`A > But we really shouldn't talk about this 
at the company.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`B > Why?`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`A > I'll tell you about later.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`B > But Yöichi died 19 years ago, right?`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`A > That's why we can't talk about it! 
I'm serious`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`B > And she had a child...the poor thing...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`A > She had a daughter, right?`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`A > I feel so sorry for her...`;
   waitForClick; clearText; 
});
hideTextbox();
delay({ interval: 60 });
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I checked to see when the log had been saved.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The date read 02/07/19.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG11A1`, transition: 26 });
fgload({ id: 1, name: `YU04BDS`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; sound(`Y4A441`); appendText; 
   //You
   You`"That...can't be..."`;
   waitForClick; clearText; marker; sound(`Y4A442`); appendText; 
   //You
   You`"I won't believe it!...I won't...!"`;
   waitForClick; clearText; marker; sound(`Y4A443`); appendText; 
   //You
   You`"I absolutely can't believe it!!!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_04`, a1: 0, volume: 100 });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`As she shouted this, You fled from the 
Security Office.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A444`); appendText; 
   //Sara
   Sara`"Nakkyu!"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_04`, a1: 0, volume: 100 });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara followed after her.`;
   waitForClick; clearText; 
});
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora and I remained behind.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 19, volume: 100 });
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A445`); appendText; 
   //Sora
   Sora`"Did you understand?"`;
   waitForClick; clearText; marker; sound(`Y4A446`); appendText; 
   //Sora
   Sora`"As I said before, when I searched the 
database for the name Yoichi Tanaka, the data 
which I can access had no records."`;
   waitForClick; clearText; marker; sound(`Y4A447`); appendText; 
   //Sora
   Sora`"However, the chat log that appears to be 
15 years old..."`;
   waitForClick; clearText; marker; sound(`Y4A448`); appendText; 
   //Sora
   Sora`"It seems to indicate that Yukie Tanaka had a 
husband named Yöichi."`;
   waitForClick; clearText; marker; sound(`Y4A449`); appendText; 
   //Sora
   Sora`"Judging from the context of the document...I 
conjectured that if Yöichi had died 19 years 
before that would mean 34 years before now."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"But the name Yoichi Tanaka doesn't appear in 
any of the other data. Why is it only here?"`;
   waitForClick; clearText; marker; sound(`Y4A450`); appendText; 
   //Sora
   Sora`"I can only speculate from my limited 
knowledge..."`;
   waitForClick; clearText; marker; sound(`Y4A451`); appendText; 
   //Sora
   Sora`"All records related to Yoichi Tanaka were 
erased for a reason."`;
   waitForClick; clearText; marker; sound(`Y4A452`); appendText; 
   //Sora
   Sora`"Please read the 14th and 15th line of this 
log one more time."`;
   waitForClick; clearText; marker; appendText; 
   Narr`-A > What? Oh, you mean you didn't know?`;
   waitForClick; clearText; marker; appendText; 
   Narr`-B > Is that so?`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"The flow of the conversation seems unnatural."`;
   waitForClick; clearText; marker; sound(`Y4A453`); appendText; 
   //Sora
   Sora`"Yes."`;
   waitForClick; clearText; marker; sound(`Y4A454`); appendText; 
   //Sora
   Sora`"Originally there seems to have been some text 
between these lines."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"So you mean that someone erased part of it?"`;
   waitForClick; clearText; marker; sound(`Y4A455`); appendText; 
   //Sora
   Sora`"From A's comments it would appear so."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"But, Yöichi's name was left in B's 
comments..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"...Oh I see."`;
   waitForClick; 
});
choice(
   `It was because it was in English.`
   `It was because it had an umlaut.`
);
switch (choice) {
   case 0: goto(lbl_00001515);
   case 1: goto(lbl_0000151e);
}
let lbl_00001515;
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"I'll bet that when they were looking for 
Yoichi's name the computer automatically 
searched..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"And only looked for his name, erasing 
everything it found in Japanese."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"But the search missed B's comments because 
they were in English."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Because Yoichi's name is spelled in English."`;
   waitForClick; clearText; marker; sound(`Y4A456`); appendText; 
   //Sora
   Sora`"No. Unfortunately, that is not correct."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"What?"`;
   waitForClick; clearText; marker; sound(`Y4A457`); appendText; 
   //Sora
   Sora`"The person that did the search would not 
be so foolish."`;
   waitForClick; clearText; marker; sound(`Y4A458`); appendText; 
   //Sora
   Sora`"It would appear that the name 'Yoichi' in 
English was also searched for and erased."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"But what about this one?"`;
   waitForClick; clearText; marker; sound(`Y4A459`); appendText; 
   //Sora
   Sora`"Kid, look very closely at B's comments."`;
   waitForClick; clearText; marker; sound(`Y4A460`); appendText; 
   //Sora
   Sora`"Didn't she use a way of rendering the name 
that is uncommon."`;
   waitForClick; clearText; marker; appendText; 
   Narr`- B > But Yöichi died 19 years ago, right?`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Oh! The...'o' has a 'ö' in it...?"`;
   waitForClick; clearText; marker; sound(`Y4A461`); appendText; 
   //Sora
   Sora`"Yes. This is called an umlaut and is used 
mainly in German..."`;
   waitForClick; clearText; marker; sound(`Y4A462`); appendText; 
   //Sora
   Sora`"When a 'a', 'u' or 'o' vowel is followed by 
the letters 'i' or 'e', an umlaut is used to 
indicate that the sound is closer to the 
second."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"So you're saying...that because this 
included an umlaut..."`;
   waitForClick; clearText; 
});
goto(lbl_00001523);
let lbl_0000151e;
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"So probably what happened is that when the 
computer was searching, it automatically 
looked for..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Yoichi in Japanese and spelled in English, 
erasing all of them."`;
   waitForClick; clearText; marker; sound(`Y4A463`); appendText; 
   //Sora
   Sora`"However, B's comments were overlooked for 
some reason."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"And her comments had Yöichi's name spelled 
differently!"`;
   waitForClick; clearText; 
});
let lbl_00001523;
showTextbox();
text(() => {
   marker; sound(`Y4A464`); appendText; 
   //Sora
   Sora`"Correct."`;
   waitForClick; clearText; marker; sound(`Y4A465`); appendText; 
   //Sora
   Sora`"So I tried to look for other similar comments 
by B."`;
   waitForClick; clearText; marker; sound(`Y4A466`); appendText; 
   //Sora
   Sora`"It appears that Ms. B had a habit of using of 
using abbreviated words ..."`;
   waitForClick; clearText; marker; sound(`Y4A467`); appendText; 
   //Sora
   Sora`"...and spelling words in her own way in her 
communications with friends."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"It seems to be a style particular to her."`;
   waitForClick; clearText; marker; sound(`Y4A468`); appendText; 
   //Sora
   Sora`"There are numerous examples of her writing 
things such as 'CU later' or 'B4' for before."`;
   waitForClick; clearText; marker; appendText; 
   Narr`As she spoke Sora pulled up samples of 
correspondences.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A469`); appendText; 
   //Sora
   Sora`"But...do you think that You is alright?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Well, Sara went after her, but I'm still 
kinda worried about her."`;
   waitForClick; clearText; marker; sound(`Y4A470`); appendText; 
   //Sora
   Sora`"I wonder if I shouldn't have told her 
after all..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"No! You did right! No matter what the facts 
are, that is what You wanted to know and you 
told her."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"You knows that. She is tough. She can 
take it."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A471`); appendText; 
   //Sora
   Sora`"You know her well."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"No...not really..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`My face started to flush. I started to fidget 
uncomfortably.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A472`); appendText; 
   //Sora
   Sora`"Don't you think you best go see how she is 
doing?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Yeah. I will."`;
   waitForClick; clearText; marker; sound(`Y4A473`); appendText; 
   //Sora
   Sora`"And I will get back to the work that I was 
in the middle of."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Oh, Sora! Wait! There's one more thing."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A474`); appendText; 
   //Sora
   Sora`"Yes? What is it?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I just wanted to say...thanks for everything."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora's cheeks seemed to redden just a bit 
and she smiled shyly.`;
   waitForClick; clearText; marker; sound(`Y4A475`); appendText; 
   //Sora
   Sora`"I only did what is expected of me. And..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`Y4A476`); appendText; 
   //Sora
   Sora`"If that makes everyone happy, then I know no 
greater joy."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO16ADM`, x: 320, useAnim: true });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`With the ultimate smile plastered on her face, 
Sora disappeared into the display.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I left the now empty Security Office and 
went in search of You and the others.`;
   waitForClick; clearText; 
});
varop(`(28 0a a4) b3 := (00) 0`);
jump(`SY4B`);
