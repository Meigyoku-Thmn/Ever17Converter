hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
removeFG({ id: 1, useAnim: false });
setDialogBoxColor(BLUE);
l_b0 = 5;
l_dayA = 4;
l_dayB = 4;
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
setSceneTitle({ index: 74 });
showTextbox();
text(() => {
   `...It was a new day.`;
   `You said she was going to change clothes and had gone up to the second floor.`;
   `Sora went back to work.`;
   `Sara...she was probably sleeping in the compression chamber.`;
   `Takeshi was supposedly filthy drunk in the park rest area.`;
   `Tsugumi hadn't come back. I had no idea where she'd gone...`;

});
hideTextbox();
playBGM({ num: 2, volume: 100 });
bgload({ name: `BG17A1`, transition: 20 });
clock(`0:7`);
showTextbox();
text(() => {
   `Me, I was in the Conference Room.`;
   `In the middle of the table was a three-dimensional image of LeMU.`;
   `I was staring at it and trying to come up with escape plans.`;
   `At that point I hadn't even hit upon a single one.`;
   `Any plan would fall apart before I even got it fully developed because of my limited knowledge.`;
   `But I didn't intend to give up.`;
   `I thought if I could just find a starting point...`;
   `I wanted to get back at You somehow.`;

});
hideTextbox();
playSFX({ name: `SE00_01`, a1: 1, volume: 100 });
waitForSFX();
showTextbox();
text(() => {
   `The door opened and somebody came in.`;
   `Looking back...I saw that it was You.`;
   `She had changed into her work uniform.`;

});
fgload({ id: 1, name: `YU01BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y4A000)`"Oh, so this is where you are. I was looking for you."`;
   `The ribbon on her outfit shook rhythmically as she walked toward me.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid`"Are your clothes dry?"`;
   You(Y4A001)`"Nope. The dryer is broken."`;
   You(Y4A002)`"These clothes will do for a while anyway."`;
   Kid`"Hmmm."`;

});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y4A003)`"Hey, what are you doing with that LeMU hologram?"`;
   Kid`"Just looking."`;
   You(Y4A004)`"You aren't trying to think of a way out, are you?"`;
   Kid`"Well, all I've got is time on my hands."`;
   `I lied to her.`;
   `Embarrassed, I couldn't tell her the truth.`;
   You(Y4A005)`"Hmmm..."`;
   Kid`"Enough about that. Aren't you going to sleep?"`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y4A006)`"I drank too much coffee, so I can't sleep."`;
   You(Y4A007)`"Besides, there are lots of things I wanna think about..."`;
   Kid`"How about that? Same here."`;
   You(Y4A008)`"What? The coffee or the thinking?"`;
   Kid`"Both."`;

});
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y4A009)`"Wow. That's weird."`;
   `You laughed dryly as she said that.`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y4A010)`"Hey, how about keeping me company?"`;
   Kid`"Are you going somewhere?"`;
   You(Y4A011)`"Yeah. Well in order to think, you've gotta be in the right place to put you in the mood."`;
   Kid`"Someplace in mind?"`;
   You(Y4A012)`"Yeah, a place connected with the third eye."`;

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
   `The third eye.`;
   `When the third eye opens, true wisdom is apparent and all becomes visible.`;
   `The power of ancients. Ultimate knowledge. Proof of a transcendental state beyond that of normal people.`;
   `The place that You led me...`;
   `Was...`;

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
   You(Y4A013)`"Shall we go in?"`;
   `You walked toward a stone gate, which rose out of a dimly lit dome.`;
   Kid`"Can I ask you a question before we go in?"`;

});
fgload({ id: 1, name: `YU07BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y4A014)`"Huh? Sure."`;
   Kid`"Why do the Lemurian Ruins have something to do with the third eye?"`;

});
fgload({ id: 1, name: `YU11BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y4A015)`"Oh, that..."`;
   You(Y4A016)`"That? I lied."`;
   Kid`"What?"`;
   You(Y4A017)`"To tell you the truth, they're not related."`;
   You(Y4A018)`"There is no meaning to that or connection at all."`;
   You(Y4A019)`"I just thought that if I said that, then you'd come along with me."`;
   Kid`".........."`;
   You(Y4A020)`"Thinking about things all by myself doesn't really suit me. I need someone else around."`;
   Kid`"........."`;

});
fgload({ id: 1, name: `YU01BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y4A021)`"Are you mad?"`;
   Kid`"No, not really."`;
   Kid`"I was just thinking that you don't seem the type to be governed by random, illogical thoughts."`;
   You(Y4A022)`"Really?"`;
   Kid`"Yeah."`;

});
fgload({ id: 1, name: `YU11BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y4A023)`"But actually there might be a connection."`;
   `You turned her gaze to the ruins.`;
   You(Y4A024)`"I told you about how my mom was doing her own research while pretending to study the Lemurian continent, right?"`;
   You(Y4A025)`"It seems like she was completely hooked on researching the third eye."`;
   You(Y4A026)`"Do you know why?"`;
   Kid`"Because she was conducting research in the name of Lemuria?"`;
   You(Y4A027)`"Yeah. So my mom wanted to study the third eye, pretended there was a connection with Lemuria and wrote about it."`;
   `'One theory has it that the people of Lemuria were giant apes that were 12 feet tall...'`;
   `'They had walnut-colored skin, there were no differences between males and females, they laid eggs and communicated via telepathy.'`;
   `'And they had a third eye in the back of their heads.'`;
   `'Telepathy and the third eye...This has something to do with the third perspective.'`;
   `'Drawing on the idea that our vertebrate predecessors had three eyes...'`;
   `'So the ancients - especially the Lemurians - may well have been races that mastered the use of this power.'`;
   `'And based on the facts discovered, I conclude...'`;
   You(Y4A028)`'That the origin of the third eye is Lemuria.'`;
   You(Y4A029)`"She even wrote trumped up papers on the topic."`;
   You(Y4A030)`"Even though they really are totally unrelated."`;
   Kid`"I wish you'd tell me more about the third eye."`;

});
fgload({ id: 1, name: `YU03BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y4A031)`"Sorry. I'll tell you some other time."`;
   You(Y4A032)`"I don't really feel like going into it now."`;

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
   `You and I crossed through the gate and entered the ruins.`;
   `It was darker inside and the pathways were interwoven like a maze.`;
   `The lighting was surreal, with dim lights in some areas and bluish white lights elsewhere.`;
   `Occasionally a hologram of some deep-water fish would shine into view.`;
   `The ruins were also slightly flooded with water, which had the effect of making them appear more like ruins at the bottom of the ocean.`;
   `............`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
playBGM({ num: 14, volume: 100 });
showTextbox();
text(() => {
   `I wondered how far we had walked.`;
   `Finally, we came to an open space kind of like an auditorium.`;
   `The room had a high ceiling.`;
   `There were rock pillars - called obelisks - scattered around the area. A few of them were broken, collapsed or crumbling.`;
   `Looking closely, I saw that a mock relief was carved into the wall.`;
   `As I absentmindedly stared at the wall, You walked over to one of the collapsed obelisks and sat down, hugging her knees.`;

});
bgload({ name: `EV_YU03A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   You(Y4A033)`"This is a strange place, huh? It's called the 'Sun Temple.'"`;
   Kid`"Sun?"`;
   `That reminded me that I had seen an image of a sun disk in the relief on the wall.`;
   You(Y4A034)`"There are a number of theories about the precise location of the Lemurian continent, but no one really knows where it was."`;
   You(Y4A035)`"But most people agree that it was located near the belt of tropical rainforest just below the equator."`;
   `You reverted to speaking like an employee, which she was, and started giving me an explanation of the place.`;
   You(Y4A036)`"Members of our research staff here at LeMU have put forth hypotheses that the people of Lemuria worshipped the sun..."`;
   `You paused and shrugged...`;
   You(Y4A037)`"So I guess that's why we built this temple."`;
   Kid`"I see."`;
   `As I sat down next to You, I nodded.`;
   You(Y4A038)`"A Sun Temple...at the bottom of the ocean...doesn't that strike you as kind of ironic?"`;
   Kid`"........."`;
   `I wondered if she was talking about the continent that had sunk to the bottom of the ocean.`;
   `Or maybe she had meant...us.`;
   You(Y4A039)`"Did you think of anything?"`;
   Kid`"What do you mean?"`;
   You(Y4A040)`"Ways to get out."`;
   Kid`"Oh..."`;
   `I shook my head.`;
   You(Y4A041)`"I thought so..."`;
   You(Y4A042)`"I can't think of any other ways."`;
   You(Y4A043)`"If we could just get that high pressure inflow machine to work..."`;
   Kid`"........."`;
   You(Y4A044)`"You know? I've thought this through."`;
   You(Y4A045)`"I think we're being lied to by someone."`;

});
stopBGM();
showTextbox();
text(() => {
   Kid`"Huh? What are you talking about?"`;

});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   Tsugumi(S1C137)`"You are...just being used by them."`;

});
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
playBGM({ num: 13, volume: 100 });
showTextbox();
text(() => {
   `Tsugumi's words flashed through my mind.`;
   You(Y4A046)`"I mean, I don't think what happened this time was just and accident."`;
   You(Y4A047)`"I think that somebody trapped us here on purpose."`;
   Kid`"........."`;

});
bgload({ name: `EV_YU03B`, transition: 20 });
showTextbox();
text(() => {
   You(Y4A048)`"I mean, it's the only thing that makes sense."`;
   You(Y4A049)`"There's just too much that doesn't add up."`;
   You(Y4A050)`"Mayo's friends, Takeshi's friends and my coworkers should all know that we are trapped here, right?"`;
   You(Y4A051)`"So why doesn't anyone come?"`;
   You(Y4A052)`"Even if there is some reason that they can't get inside, divers should at least be knocking on the windows!"`;
   You(Y4A053)`"Besides, we still have power, only the communication system to the outside is down."`;
   You(Y4A054)`"We still don't have any idea what caused the alarm before the accident and the blackout..."`;
   You(Y4A055)`"And we don't know why the high pressure input fan stopped working either."`;
   You(Y4A056)`"It's almost like everything was set up to trap us here."`;
   Kid`"............"`;
   `I didn't know what to say to her.`;
   `It all made sense to me.`;
   `Actually, I had been feeling the same thing.`;
   `The reason that I hadn't been able to - or didn't realize it was maybe that I didn't want to face up to reality.`;
   `I sneaked a looked at You's face.`;
   `She clutched her knees and turned her helpless looking gaze to the water's surface.`;
   `Her lips were a bluish color and it wasn't all the fault of the light.`;
   `You was always more upbeat than everyone around her.`;
   `She was a powerful presence for me.`;
   `But right then, she seemed very small and fragile.`;
   `No matter how tough she acted, You was still just a girl at heart.`;
   `It had been a quick three days since the accident...it only made sense that she would be feeling the strain.`;
   `Swallowed into the deep, dark ocean, we had lost the warm spring sun.`;
   `(I couldn't let her go on like this, I had to cheer her up somehow...)`;
   `That was how I felt deep in my heart.`;

});
bgload({ name: `EV_YU03C`, transition: 20 });
showTextbox();
text(() => {
   You(Y4A057)`"Friends help each other, right?"`;
   You(Y4A058)`"Kid, you can see the future, right?"`;
   You(Y4A059)`"Tell me how things are going to turn out."`;
   Kid`"I think we'll be saved."`;

});
bgload({ name: `EV_YU03A`, transition: 20 });
showTextbox();
text(() => {
   You(Y4A060)`"Is that a premonition? Or just an optimistic guess?"`;
   Kid`"Of course, it's a..."`;
   `I wanted to say premonition, but I couldn't.`;
   `Saying it was wouldn't work.`;
   `You could see through a lie.`;
   `I thought about it.`;
   `The third perspective.`;
   `The third eye.`;
   `True wisdom`;
   `Omnipotent all-seeing vision.`;
   `The power to make light shine once again.`;
   `I thought that if I only had that!`;
   `But it didn't exist. It couldn't possibly...`;
   Kid`"It's not a premonition...or a guess..."`;
   `At the very least...`;

});
stopBGM();
showTextbox();
text(() => {
   Kid`"It's a promise."`;
   You(Y4A061)`"Promise?"`;
   Kid`"Yeah, I promise."`;
   `At least...I hoped it was.`;
   `That it was a promise that would materialize.`;
   `That we would be able to get You out of there.`;
   `I held up my hand up as if taking an oath.`;
   `I approached You...but then she spoke.`;
   You(Y4A062)`"And what if......you break it?"`;
   Kid`"I won't. I'll see that you're safe."`;
   You(Y4A063)`"For sure? There's not even a 1 percent chance you're wrong?"`;
   Kid`"There is not even a 0.00000000000000001 percent possibility."`;
   You`"..."`;
   `I pointed my finger at my heart and promised You.`;

});
bgload({ name: `EV_YU03C`, transition: 20 });
showTextbox();
text(() => {
   You(Y4A064)`"Talk about promising more than you can deliver..."`;
   `I crossed my heart and hoped to die...`;
   You(Y4A065)`"Oh well, I suppose I'll have to trust you."`;
   `...And stick a needle in my eye...I won't break my word to you.`;

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
   `The next day after breakfast, You and I went to the Security Office.`;
   `She tried to access the computer network again.`;
   `I planned to stay and see her through it.`;
   `But...`;

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
   `Beeeeeeeeeeeeep!`;
   `"Access denied: Invalid username or password."`;
   `It seemed like she still couldn't get past the security.`;

});
fgload({ id: 1, name: `YU13BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y4A066)`"Oh, no. It looks like it's no good...."`;
   `You's shoulders slump dejectedly.`;
   Kid`"Isn't there anything else you can do?"`;

});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y4A067)`"I could...enter by cracking the system open or get LeMMIH to remove the protection mechanism..." `;
   Kid`"Why don't you ask Sara?"`;

});
fgload({ id: 1, name: `YU03BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You`"........."`;
   `You stopped talking and looked down.`;
   Kid`"Don't you want to find out what happened to your father?"`;
   You(Y4A068)`"That..."`;
   Kid`"You have a right to know. There could be information being kept from you."`;
   Kid`"So are you going to try to get at the truth or are you just going to let these doubts nag you forever..."`;
   You`"........."`;
   Kid`"So, You, what do you want to do?"`;
   Kid`"In the end, it's up to you. So..."`;
   Kid`"You should do what you want to do."`;
   You`"........."`;

});
fgload({ id: 1, name: `YU13BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `You stared at her fingers...and then she looked at the display...`;
   `...finally her eyes drifted to the ceiling.`;
   `You gave a nod after a while.`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y4A069)`"It might be a lot to ask, but I'll ask Mayo for her help."`;
   Kid`"Good."`;
   `She wasn't wrong. She didn't need to feel intimidated.`;
   Kid`"Alright! I'll go ask her for you."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `With those energetic words, I bounded out of the Security Room.`;

});
bgload({ name: `BG25A3`, transition: 20 });
stopSFX()
showTextbox();
text(() => {
   `As I was sprinting down the corridor...`;
   `(Wait a second...where is Sara anyway?)`;
   `Finally I realized something.`;
   `I should have checked on the monitor in the Security Office.`;
   `But I thought I'd look stupid going all the way back again...`;
   `I thought I might ask Sora...`;
   `But then I saw Sara cutting across the far corridor.`;
   `I immediately went after her.`;

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
   `Sara went into the infirmary.`;
   `I went in after her.`;

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
   Kid`"Sara!"`;

});
playBGM({ num: 18, volume: 100 });
fgload({ id: 1, name: `SA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A070)`"Waaaa! Geez! You scared me!"`;
   `Sara jumped, startled.`;
   Kid`"Oh...sorry. I didn't mean to surprise you..."`;

});
fgload({ id: 1, name: `SA07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A071)`"I'm exhausted so cut me some slack. My mind and body are shot."`;
   `Sara's haggard expression told the same story.`;
   `I remembered the fight the day before with Tsugumi.`;
   `She had probably had a sleepless night.`;
   Kid`"Were you thinking of going to sleep now?"`;

});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A072)`"Yup."`;
   Kid`"Oh..."`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A073)`"Huh? Is there something wrong?"`;
   Kid`"Actually..."`;
   `I explained the details to Sara.`;
   `About You's father gone missing.`;
   `And about her working at LeMU to find clues about his fate.`;
   `That her search was being blocked by some protective mechanism in LeMMIH.`;

});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A074)`"Wow. I had no idea about any of that."`;
   Kid`"Yeah. Well, You and I can't figure it out alone."`;
   Sara(Y4A075)`"So? What is it you want me to do?"`;
   Kid`"Well we were hoping you could try taking out LeMMIH's security so that we can get into the network."`;
   Sara(Y4A076)`"Hmmm. Cracking the security, huh...?"`;
   Kid`"I feel bad asking when you're so tired, but could you do it for her?"`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A077)`"Sure."`;
   Kid`"If you wouldn't mind, she'd really...er, eh?"`;
   Sara(Y4A078)`"I said 'sure' already."`;
   Kid`"Really?"`;
   Sara(Y4A079)`"Yup."`;

});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A080)`"I mean it's to help Nakkyu, right? I can't very well say no."`;
   Kid`"Th...thanks!"`;

});
fgload({ id: 1, name: `SA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `I grabbed Sara's hand and shouted happily`;
   `I was so happy I could have jumped for joy...I did...actually jump.`;
   `I was sure that things would go fine now.`;
   Sara(Y4A081)`"H-hey, hey, wait...Kid, what are you so happy about?"`;
   Kid`"Huh?"`;

});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A082)`"All I said was that I'd help Nakkyu. This doesn't really have anything to do with you, does it? There is nothing in this for you."`;
   Sara(Y4A083)`"So what are you so pumped about?"`;
   Kid`"Well, of course I'm happy. You's a good friend of mine."`;
   Sara`"........."`;
   `Sara stared at me suspiciously.`;

});
fgload({ id: 1, name: `SA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A084)`"Oh, I get it"`;
   Kid`"Wh-what?"`;

});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `...Sara patted me on the back.`;
   Kid`"???"`;
   Sara(Y4A085)`"Uh, huh. So that's what's been going on."`;
   `Sara shot me a sly grin.`;
   `I had a bad feeling about the whole thing.`;
   Kid`"Don't go imagining anything stupid. I'm just..."`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A086)`"Dear Jove! Love, 'tis a beautiful thing."`;
   Sara(Y4A087)`"Fret not dear Kid, I shan't tell a soul."`;
   Kid`"..."`;
   `(What the heck is Sara talking about?)`;
   Kid`"Well, You is waiting so we'd best get going."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I started heading for the Security Office pulling Sara's hand.`;

});
showTextbox();
text(() => {
   `But it ended up being my arm that got yanked.`;
   Kid`"Whoa...!"`;

});
fgload({ id: 1, name: `SA01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `I lost my balance and stumbled forward, leaning on Sara.`;
   `Without missing a beat, she grabbed my left thumb and squeezed it tight.`;
   `She drew close to me and whispered in my ear.`;
   Sara(Y4A088)`"To tell you the truth, I'm a bit jealous."`;
   Sara(Y4A089)`"I'm jealous, but..."`;
   Kid`"...?"`;

});
fgload({ id: 1, name: `SA02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A090)`"But since it's you that she's gone for, I'll let it go."`;
   `As she spoke, she pushed me away and slapped me on the back.`;
   `I was getting more and more confused.`;

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
   Sara(Y4A091)`"Alright. Shall we get started?"`;
   `Sara sat in the chair, popped her knuckles and faced the keyboard.`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 4, name1: `YU15BDS`, name2: `SA11ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   You(Y4A092)`"Mayo, I'm really sorry."`;
   Sara(Y4A093)`"Don't worry about it. It's no big deal."`;

});
fgload({ id: 4, name: `SA12ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A094)`"You're in good hands with me."`;
   Kid`"Hopefully you can help, Sara."`;

});
fgload({ id: 4, name: `SA01ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A095)`"Trust me."`;

});
hideTextbox();
multiremoveFG({ id1: 1, id2: 4, id3: 0, useAnim: true });
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Sara started tapping away on the keyboard.`;
   `A number of windows opened up on the screen.`;
   Sara(Y4A096)`"First let's try stealing a password."`;

});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Her typing was fast and rhythmical.`;
   `Finally a list of files came up.`;
   `She opened one of the files.`;
   `She opened a search window and started pouring through files.`;

});
stopSFX()
showTextbox();
text(() => {
   Sara(Y4A097)`"Let's see..."`;
   Sara(Y4A098)`"Huh? It's not there..."`;
   Sara(Y4A099)`"In this kind of OS the file should be saved here, but..."`;
   Kid`"What are you looking for?"`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A100)`"The password hash values."`;
   Kid`"What's that?"`;
   Sara(Y4A101)`"It's an unchangeable string of letters or numbers created by a mathematical function when a user sets a password."`;
   Kid`"W-what?"`;
   Sara(Y4A102)`"If you can find the hash, then it's easy to get a password."`;
   Sara(Y4A103)`"For example, if you save a large number of the hashes and compare them with the hash values in the password file then..."`;
   Kid`"...Can't you make it easier to understand?"`;

});
fgload({ id: 1, name: `SA11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A104)`"Alright. It's basically like the password's fingerprint."`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A105)`"While you can't create a person from a fingerprint, you can identify one, right?"`;
   Sara(Y4A901)`"It's the same as a fingerprint. The hash always reflects the characteristics of the original.`;
   Sara(Y4A902)`And the modulation pattern is always derived from the character line up of the original..."`;
   Kid`"I...I still don't get it. I think it's just beyond me...sorry to bug you."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I wiped away sweat and walked a short distance from Sara.`;
   `You watched Sara as she leaned against a wall.`;
   `I headed over to her.`;
   Sara(Y4A107)`"I wonder...it might be that there is a file that only the root authority can access..."`;
   Sara(Y4A108)`"Even if I did find it, it could be randomly sequenced..."`;
   Sara(Y4A109)`"That'd mean I'd need another message..."`;
   `Sara mumbled to herself as she worked.`;
   `Occasionally Sara would fiddle with her ribbon, or tap her fingers on the desk...so it didn't seem that she was having much luck.`;
   Kid`"I wonder if this'll work."`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y4A110)`"Maybe."`;
   Kid`"But no matter how good Sara is, this isn't like a contest."`;
   You(Y4A111)`"Look, the contest Mayo won wasn't just any contest."`;
   You(Y4A112)`"The code she decrypted was a 68 bit strong code."`;
   Kid`"...I'm not really sure how incredible that is."`;
   You(Y4A113)`"The strength of a code depends on how long the key to it is when the password is encrypted."`;
   You(Y4A114)`"The longer it is, the harder it is to decode."`;
   Kid`"........."`;

});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y4A115)`"You still don't quite get it? Well, how about a specific example..."`;

});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y4A116)`"So if a 1 bit password is encrypted, it can come out in one of two ways."`;
   You(Y4A117)`"For example, say that 'E' is the letter. That can either be encrypted as a 0 or a 1 with a 1 bit key."`;
   You(Y4A118)`"So when this becomes a two bit key, the possibilities are double the code, or four."`;
   You(Y4A119)`"So for the example of 'E,' it would be either 00, 01, 10 or 11."`;
   You(Y4A120)`"So with a three bit key..."`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y4A121)`"What do you think happens?"`;
   Kid`"Uh...let's see....um, there are two ways for a 1 bit, and four ways for a 2 bit, so..."`;

});
choice(
   `6 ways?`,
   `8 ways?`,
);
switch (l_choice) {
   case 0: goto(lbl_00000837);
   case 1: goto(lbl_00000857);
}
let lbl_00000837;
showTextbox();
text(() => {
   Kid`"Are there 6 ways?"`;

});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y4A122)`"Wrong answer. Afraid not..."`;
   Kid`"..."`;

});
goto(lbl_0000087e);
let lbl_00000857;
l_you_point += 1;
showTextbox();
text(() => {
   Kid`"Are there 8 ways?"`;

});
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y4A123)`"Bingo. You got it."`;

});
let lbl_0000087e;
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y4A124)`"So a 3 bit key for the letter 'E' could be 000, 001, 010, 011, 100, 101, 110, 111. A total of eight combinations."`;
   You(Y4A125)`"So every time the code key increases by one bit, the number of code patterns increases exponentially." `;
   You(Y4A126)`"So for a 4 bit key there would be 16 combinations and for a 5 bit key, 32..."`;
   You(Y4A127)`"So let's say this had a 68 bit key?"`;
   Kid`"..."`;
   `A 6 bit would be 64...a 7 bit would be 128...an 8 bit would be 256...`;
   `(Uh...uh...let's see...)`;
   You(Y4A128)`"The right answer is 2 to the 68th power."`;
   `You was doing the calculations on the Security Office calculator.`;
   You(Y4A129)`"So the number of code patterns would be possible is roughly 2.951479052 x 10 to the 20th power."`;
   You(Y4A130)`"Or 2 sextillion 9514 quadrillion 7905 trillion 179 billion 352 million 825,856 different ways."`;
   Kid`"......"`;
   You(Y4A131)`"It's like looking for a hair on the whole of the planet Earth - including the oceans."`;
   You(Y4A132)`"That's the code that Mayo decrypted."`;
   You(Y4A133)`"But you know what? What's so incredible about it is not that Mayo was able to do it, but the method she used to do it."`;
   Kid`"The method?"`;
   You(Y4A134)`"Yeah. There are two ways of finding a password. One involves difficult mathematical calculations..."`;
   You(Y4A135)`"The other is a method that has to do with trying every key."`;
   You(Y4A136)`"It seems like she couldn't find an algorithm to work for the first method..."`;
   You(Y4A137)`"So a normal person would opt for the second option."`;
   You(Y4A138)`"And that's using all of the computers around the world participating in the contest. If you didn't, they say the calculations would take tens of thousands of years."`;
   You(Y4A139)`"But...but Mayo did it differently."`;
   Kid`"She didn't..."`;
   You(Y4A140)`"Yup. She sure did."`;
   You(Y4A141)`"Mayo put together her own algorithm and did it using difficult mathematical calculations."`;
   You(Y4A142)`"And just seven days after the competition started, she had found the password."`;
   Kid`"............................"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `It was too incredible. It didn't seem real.`;
   `I should've been surprised, but I wasn't.`;
   `It was just too hard to imagine that the girl in front of me could do that...`;
   `(Sara...what in the world...are you?)`;

});
showTextbox();
text(() => {
   Sara(Y4A143)`"Agghh! This isn't right!"`;
   `Sara pounded her fist on the console.`;
   Kid`"It's not working?"`;

});
fgload({ id: 1, name: `SA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A144)`"Obviously not! Stop asking me about every little thing!"`;
   Kid`"........."`;

});
fgload({ id: 1, name: `SA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A145)`"Oh, I'm sorry...I'm just a little irritated."`;
   Kid`"Don't worry about it. I'm sorry for asking you to do this."`;
   Sara`"........."`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 4, name1: `SA03ADM`, name2: `YU11BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(Y4A146)`"Hey, why don't we take a break? I made some coffee."`;
   `You had made coffee for the three of us.`;
   You(Y4A147)`"Here you go, Mayo."`;
   `You handed Sara her coffee.`;

});
fgload({ id: 1, name: `SA16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A148)`"Oh, thank you so much"`;
   `Sara's coffee came with milk and the sugar bowl.`;
   Kid`"H-hey."`;
   Kid`"Didn't you say that you weren't supposed to put anything in coffee?"`;

});
multifgload2({ id1: 1, id2: 4, name1: `SA01ADM`, name2: `YU01BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(Y4A149)`"It's okay. Mayo is a special exception."`;
   Sara(Y4A150)`"Yup."`;

});
multifgload2({ id1: 1, id2: 4, name1: `SA16ADM`, name2: `YU12BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   //You/Sara
   You_Sara(Y4A151)`"That's right"`;
   Kid`"Hey, that's not fair."`;

});
multifgload2({ id1: 1, id2: 4, name1: `SA05ADM`, name2: `YU05BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(Y4A152)`"Oh, stop complaining!"`;
   Sara(Y4A153)`"Yeah. You and I are different is all."`;

});
multiremoveFG({ id1: 1, id2: 4, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `(Leave it to You to change the rules!)`;
   `Not wanting to start an argument, I silently put milk and sugar in my coffee.`;
   `...`;
   `After a bit You asked Sara -`;

});
multifgload2({ id1: 1, id2: 4, name1: `SA15ADM`, name2: `YU11BDM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(Y4A154)`"So? How're you doing, Mayo?"`;

});
fgload({ id: 1, name: `SA07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A155)`"So far I've got nothing."`;
   `Sara turned her palms out letting them face the ceiling.`;
   `She meant she had zilch.`;
   You(Y4A156)`"Wow, this is even tough for you Mayo, this must be some security..."`;

});
fgload({ id: 1, name: `SA15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A157)`"To tell you the truth, the security here is way above normal."`;
   Sara(Y4A158)`"I don't think that they are using just a normal firewall. They seem to have made some kind of improvements on the daemons, as well."`;
   Kid`"Fire well? Daem what?..., huh?"`;

});
fgload({ id: 1, name: `SA01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A159)`"A firewall is a way of protecting a network from unknown intruders."`;
   Sara(Y4A160)`"Daemons reside on the OS in the memory. They're responsible for all of the..."`;
   Kid`"Uh, okay...I get it...thanks."`;
   `(That's it - I'm not asking anymore questions...)`;
   You(Y4A161)`"It's that tough, huh?"`;

});
fgload({ id: 1, name: `SA15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   `Sara nodded.`;
   `'...Normally this kind of OS software is put together using C...'`;
   `'...So, I tried to attack it using DoS...'`;
   `'...But it's been reinforced....'`;
   `'...I'm having trouble finding a hole in the security...'`;
   `The conversation (mostly Sara talking) might have well been in some alien language.`;

});
fgload({ id: 4, name: `YU13BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(Y4A162)`"Well, when it gets that complicated, that's pretty much my limit..."`;
   You(Y4A163)`"I'm getting more and more suspicious about this database."`;
   You(Y4A164)`"I wonder what Leiblich is trying to hide with all this security?"`;
   Sara(Y4A165)`"Yeah...it's really strange. This isn't your average company security."`;
   `I suddenly remembered that on the first day, Sora had told me the reason why Leiblich built LeMU here was a corporate secret.`;
   `I wondered if it could be related to this.`;

});
fgload({ id: 4, name: `YU11BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(Y4A166)`"Hey. Can't you use the program that worked to win that decoding contest, Mayo?"`;
   Kid`"Oh, that's an idea."`;
   You(Y4A167)`"And if we could figure out the root authority password..."`;
   Sara(Y4A168)`"That's impossible."`;
   You(Y4A169)`"Why?"`;
   Sara(Y4A170)`"I did a check on the code strength. Guess what it was."`;
   Kid`"What?"`;
   Sara(Y4A171)`"136 bit."`;
   Kid`"What?"`;

});
fgload({ id: 4, name: `YU13BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(Y4A172)`"W-what?...That means..."`;
   `The number of possible patterns was two to the 136th power.`;

});
fgload({ id: 1, name: `SA17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A174)`"Even if you had what it took to get the password, by the time you found..."`;
   `Sara held out her fist and opened it up.`;
   `"Booom!"`;
   `She was right...`;
   `LeMU was going to go in three days.`;
   You`"..."`;
   `You was depressed.`;
   Kid`"Isn't there anything else you can try?"`;

});
fgload({ id: 1, name: `SA01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A175)`"Well, there is one thing..."`;
   Sara(Y4A176)`"There is one trick I haven't tried."`;

});
fgload({ id: 4, name: `YU11BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(Y4A177)`"What's that?"`;
   `A ray of hope returned to You's eyes.`;

});
fgload({ id: 1, name: `SA15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A178)`"Everything I tried up until has been cracking this using orthodox methods."`;
   Kid`"Uh, there's no such thing as orthodox cracking, is there...?"`;
   `Sara ignored me and went on talking.`;
   Sara(Y4A179)`"What's left..."`;
   Sara(Y4A180)`"Is what is a kind of cracking that doesn't really require technique."`;
   Sara(Y4A181)`"It's called 'social engineering.'"`;
   You`"........."`;
   Kid`"What's that?"`;

});
fgload({ id: 1, name: `SA03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A182)`"Simply put, it is using social behavior to get information...For example..."`;
   `Sara stopped as if it were hard to say.`;
   Sara(Y4A183)`"For example, finding a person that works for the company operating the server you want to attack and tricking them into giving you a password."`;
   Kid`"You get it by tricking...someone...?"`;

});
fgload({ id: 4, name: `YU13BDM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(Y4A184)`"You're talking about tricking Sora?"`;
   `Sara nodded.`;
   Kid`"There...there's no way we could do it."`;
   Kid`"Even if we could trick Sora..."`;
   Sara(Y4A185)`"Of course, it's not something I want to do either."`;
   Sara(Y4A186)`"From Sora's perspective, she can't very well leak company information..."`;
   Sara(Y4A187)`"And I won't try to force her. But..."`;
   Sara(Y4A188)`"But that's how you get information illegally."`;
   Sara(Y4A189)`"But if you are set on getting that information no matter what, you don't have much choice."`;
   Sara(Y4A190)`"I just want you to know that."`;
   `I couldn't think of anything to say.`;
   `We were using a computer to do it, so it didn't seem real, but we were actually trying to deceive someone to get information.`;
   `That was exactly what we were trying to do.`;
   You(Y4A191)`"A system's biggest bug is the people who use it...."`;

});
fgload({ id: 1, name: `SA17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(Y4A192)`"My mom used to say that a lot."`;
   You(Y4A193)`"In that way, maybe we are all bugs in LeMMIH's system." `;
   `You stared straight at Sara.`;
   You(Y4A194)`"I agree with you Mayo."`;
   You(Y4A195)`"But I just can't do it."`;
   You(Y4A196)`"I can't do anything to deceive Sora."`;
   You(Y4A197)`"Even if I lose the chance to find out what happened to my dad."`;
   You(Y4A198)`"Mayo, I'm sorry for asking for such a difficult favor...but I think I'd rather try something else for now."`;

});
fgload({ id: 1, name: `SA03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   `Sara looked down.`;

});
fgload({ id: 1, name: `SA16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   `But then lifted her face, grinning broadly.`;
   Sara(Y4A199)`"Okay then. We'll do it your way."`;

});
multiremoveFG({ id1: 1, id2: 4, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `Sara faced the keyboard again.`;
   Kid`"Sara..."`;

});
fgload({ id: 1, name: `SA01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A200)`"Don't worry. No matter how stubborn the system is, it was made by people and they can't be as stubborn as me!"`;
   Sara(Y4A201)`"There's got to be a weak point somewhere..."`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Sara began typing away.`;

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
   `Just then the room was bathed in a bright light.`;
   `We covered our eyes.`;
   `After a bit our eyes got used to it.`;
   `I squinted against the light.`;
   `And there was...`;

});
bgload({ name: `EV_SO14A`, transition: 20 });
showTextbox();
text(() => {
   `Sora!?`;
   `Sora was floating in the air surrounded by a bright ring of light.`;
   `She was looking down at us from above.`;
   `She was wearing a white looking cape that fanned out like a pair of wings...`;
   `She looked like an angel descending from heaven...`;
   Kid`"W-what is it, Sora?... Showing up all of a sudden..."`;
   Sora`"........."`;

});
playBGM({ num: 12, volume: 100 });
showTextbox();
text(() => {
   Kid`"Sora?"`;
   `Something wasn't right.`;
   Sora(Y4A202)`"There was some abnormal traffic on LeMMIH so I came to see what was going on..."`;
   Sora(Y4A203)`"What are you all doing?"`;
   `Sora spoke politely, but her eyes were like ice.`;
   `We should have expected her to see through us.`;
   `But why did she seem completely different than the Sora we were used to?`;
   Sora(Y4A204)`"Please answer."`;
   Sara(Y4A205)`"Can't you tell by looking? We're trying to crack LeMMIH."`;
   `Sara answered coolly.`;
   Sora(Y4A206)`"Do you all know the meaning of what you are doing?"`;
   Kid`"Sora! Please listen to what we have to say first."`;

});
showTextbox();
text(() => {
   Kid`"You's father was a member of the team that made LeMMIH."`;
   Kid`"In other words, he's your father, too, Sora."`;
   Sora`"........."`;
   Kid`"But he disappeared 17 years ago..."`;
   Kid`"At the same time there was an accident the cause of which was unclear here." `;
   Kid`"Something about the whole thing is shady."`;
   Kid`"Both the accident and the disappearance of You's father...we think that there is probably something behind the scenes connecting them..."`;
   Kid`"So You is trying to get the facts about her dad. She is looking for the truth."`;
   You(Y4A207)`"Please, Sora..."`;
   You(Y4A208)`"We aren't asking for your help. But please, just look the other way."`;
   Sora`"........."`;
   Kid`"Sora..."`;
   Sora(Y4A209)`"So that's...what this is about..."`;
   Sora(Y4A210)`"You's father was..."`;
   You(Y4A211)`"Sora...?"`;
   Sora(Y4A212)`"If it were something I can do, I would like to help you."`;
   Sora(Y4A213)`"If it were possible..."`;
   `Sora closed her eyes for a while...`;
   `...And then opened them.`;
   Sora(Y4A214)`"I understand your intentions."`;
   Sora(Y4A215)`"But my duty is to protect LeMMIH from intruders." `;
   Sora(Y4A216)`"So I am supposed to stop you."`;
   Sora(Y4A217)`"That is how I am designed."`;
   Sora(Y4A218)`"I alone have no choice...but to obey my orders."`;
   Kid`"But that's not..."`;
   Sora(Y4A219)`"Oh...but...what should I..."`;
   `Sora's shoulders shook and she had a pained look on her face.`;
   Sara(Y4A220)`"Sora it's fine."`;
   Kid`"Huh?"`;

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
   Sara(Y4A221)`"It's alright. I think it'll work out somehow."`;
   Kid`"Work out somehow...? Sara, what are trying to do?"`;
   Sara(Y4A222)`"If Sora follows her current program, then she'll have to get in our way."`;
   Sara(Y4A223)`"But Sora doesn't want that."`;
   Sara(Y4A224)`"So I should just rewrite the program so that Sora can take the action that she wants to take."`;
   Sora(Y4A225)`"Can you do that?"`;

});
fgload({ id: 2, name: `SA15ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A226)`"Maybe."`;
   Sara(Y4A227)`"Of course, that is if you want me to..."`;
   Sora`"........."`;
   `Sora's shoulders quivered slightly.`;
   Kid`"Sora, are you scared?"`;

});
multifgload3({ name1: `YU01BDS`, name2: `SA01ADS`, name3: `SO03ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   Sora(Y4A228)`"Yes, a little."`;
   Sora(Y4A229)`"No...I am very scared."`;
   Sara`"........."`;

});
fgload({ id: 1, name: `YU17BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(Y4A230)`"Let's...not do this."`;
   You(Y4A231)`"I don't want my selfishness to cause any more problems for everyone."`;

});
multifgload2({ id1: 2, id2: 4, name1: `SA14ADS`, name2: `SO13ADS`, x1: 320, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A232)`"Be quiet, You."`;
   Sara(Y4A233)`"This has something to do with everyone, not just you."`;
   You`"........."`;

});
fgload({ id: 2, name: `SA18ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A234)`"Okay, Sora. It's up to you."`;
   Sora`"........."`;
   Kid`"Sora?"`;
   Kid`"I'd like you to listen to me, and then decide after you hear what I've got to say..."`;
   Kid`"Sora, you said it yourself."`;

});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   Sora(S2C091)`"That you are not like everyone else, but wished you were."`;

});
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
showTextbox();
text(() => {
   Sora`"........."`;
   Kid`"You wanted to exist in the same way that we do."`;
   Kid`"And we want the same thing."`;
   Kid`"That is all I wanted to say."`;
   Sora`"........."`;
   Sara`"........."`;
   You`"........."`;
   Kid`"........"`;
   `Finally, Sora lifted her face and focused her eyes on Sara.`;

});
hideTextbox();
stopBGM();
fgload({ id: 4, name: `SO11ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(Y4A235)`"Alright. I agree. Sara, please do your best."`;

});
fgload({ id: 2, name: `SA15ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A236)`"As you wish."`;
   You(Y4A237)`"Mayo, you be careful."`;
   You(Y4A238)`"Please, don't hurt Sora..."`;

});
fgload({ id: 2, name: `SA11ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A239)`"It'll be fine. Trust me."`;

});
hideTextbox();
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Sara typed on the keyboard.`;
   Sara(Y4A240)`"Alright then. Sorry, Sora, but I'm going to take a look inside you now."`;
   Sara(Y4A241)`"Don't worry. Think of it as like an x-ray."`;
   `"Sara continued working as we watched."`;
   `As we watched her deft hands, Sora's tense expression began to relax.`;
   `It was then that...`;

});
fgload({ id: 1, name: `SO03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(Y4A242)`"Ugghhh...!"`;
   `Sora began to suffer.`;
   Kid`"Wh-what's the matter?"`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(Y4A243)`"Ohhhh...please stop...!"`;

});
playBGM({ num: 15, volume: 100 });
showTextbox();
text(() => {
   Sora(Y4A244)`"Stop, stop...stop!"`;

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
   Kid`"S-Sora...?"`;
   Sora(Y4A245)`"System scanning error."`;
   Sora(Y4A246)`"Unauthorized access to the autonomic nervous system confirmed."`;
   Kid`"Wh-what happened?"`;
   You(Y4A247)`"How am I supposed to know?"`;
   Sara(Y4A248)`"Dang. That sucks...it looks like I got snagged by the scan..."`;
   Kid`"What's that mean?"`;
   Sara(Y4A249)`"That the surveillance program that is managing Sora discovered it was being cracked."`;

});
bgload({ name: `EV_SO14C`, transition: 20 });
showTextbox();
text(() => {
   Sora(Y4A250)`"Oh no...!"`;
   Sora(Y4A251)`"Everyone...please escape at once!"`;
   Sora(Y4A252)`"If you stay...I..."`;
   Sora(Y4A253)`"I may...harm you."`;
   You(Y4A254)`"Huh?"`;
   Sora(Y4A255)`"Escape..."`;
   Sora(Y4A256)`"N...now!"`;

});
bgload({ name: `EV_SO14B`, transition: 20 });
showTextbox();
text(() => {
   Sora(Y4A257)`"Intruder route discovered."`;
   Sora(Y4A258)`"Oh...I'm not going to make it!"`;
   `Sora held out her hand.`;
   Sora(Y4A259)`"I will now implement elimination of the intruder."`;

});
playSFX({ name: `SE02_09`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Our surroundings suddenly changed.`;
   `We were no longer in the Security Office.`;
   `We were in the middle of a roiling ocean.`;
   `The water swirled loudly.`;
   `(Wh-what is this?!)`;
   `It appeared as if we were about to be sucked in and our bodies torn to pieces.`;
   `I tried to shout...but water continued to rush into my lungs and I couldn't breathe.`;
   `(What is...happening?)`;
   You(Y4A260)`"Is this...an RSD image?"`;
   `You shouted this.`;
   You(Y4A261)`"Everyone, close your eyes!"`;

});
removeBG({ mode: BLACK, transition: 3 });
stopSFX()
showTextbox();
text(() => {
   `When I closed my eyes, the surrounding apocalyptic scenery seemed like a lie.`;
   `The ocean continued to ground in my ears.`;
   `It was all the work of a generated hologram.`;
   `So it was no longer scary.`;
   Sora(Y4A262)`"It is no use."`;
   Sora(Y4A263)`"Aaahh! Please, stop!"`;
   `The next instant a high-frequency scream rang out in my mind.`;
   `My head hurt like it might split open.`;
   Kid`"Waaaaaaaaaaaaaaaaaahhhhh!"`;
   `Unable to withstand it, I took out the voice converters that I thought were causing the pain.`;
   `But the sound went on.`;

});
bgload({ name: `EV_SO14B`, transition: 20 });
showTextbox();
text(() => {
   Sora(Y4A264)`"That is why I said it was no use."`;
   Sora(Y4A265)`"Sound is also being emitted from the room's speakers."`;
   Sora(Y4A266)`"As long as you are in LeMU you can't escape."`;
   Kid`"Pl...please stop...!"`;
   You(Y4A267)`"Ahhhhhhhhhhhh!"`;
   `The pain was so intense that we were rolling around on the floor.`;

});
bgload({ name: `EV_SO14C`, transition: 20 });
showTextbox();
text(() => {
   Sora(Y4A268)`"Ahh..aaahhhh! I...I...!"`;

});
bgload({ name: `EV_SO14B`, transition: 20 });
showTextbox();
text(() => {
   Sora(Y4A269)`"I am warning you. Remove yourself from LeMMIH."`;
   Sora(Y4A270)`"Cease what you are doing immediately."`;
   Sara(Y4A271)`"N...no...!"`;

});
bgload({ name: `EV_SO14C`, transition: 20 });
showTextbox();
text(() => {
   Sora(Y4A272)`"Please, Sara. That is enough. Please stop."`;
   Sara(Y4A273)`"I said no!"`;
   Sara(Y4A274)`"I have to do this...for Sora...for Nakkyu...and for myself."`;
   Sara(Y4A275)`"I won't lose to Leiblich!"`;

});
hideTextbox();
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Sara continued pecking at the keyboard.`;

});
bgload({ name: `EV_SO14B`, transition: 20 });
stopSFX()
showTextbox();
text(() => {
   Sora(Y4A276)`"This is your final warning. Desist immediately."`;
   Sora(Y4A277)`"If you persist in your efforts, I can not guarantee your safety."`;
   Sara(Y4A278)`"There has to be a hole someplace in the security...!"`;

});
bgload({ name: `EV_SO14C`, transition: 20 });
showTextbox();
text(() => {
   Sora(Y4A279)`"S-Sara...!"`;
   Sara(Y4A280)`"Wh...what? I'm not giving up...no matter what...!"`;
   Sora(Y4A281)`"There is no...I will from now...release one segment of my security."`;
   Sora(Y4A282)`"Please aim for it...by sending in a massive load of data."`;
   Sara(Y4A283)`"You mean...cause an overload...?"`;
   Sora(Y4A284)`"Yes...that should...make my system out of control."`;
   Sora(Y4A285)`"I can't guarantee...the outcome...but it might create a gap long enough for you to rewrite the system."`;
   Sara(Y4A286)`"Okay...please do it!"`;
   Sora(Y4A287)`"With my power...I can only free it up for only a short amount of time."`;
   Sora(Y4A288)`"Don't miss the chance."`;
   Sora(Y4A289)`"The chance will...be 1/17 of a second."`;
   Sara(Y4A290)`"Got it."`;
   Sora(Y4A291)`"Okay. Here I go..."`;
   Sora(Y4A292)`"Gggrrrrhhh...!"`;

});
hideTextbox();
delay({ interval: 60 });
setNumberOfFlash(3);
setFlashRGBColor(255, 255, 255);
triggerFlash();
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Beeeeeeeeeep!`;
   Sora(Y4A293)`"A type 14 error has occurred."`;
   Sora(Y4A294)`"Now!"`;
   Sara(Y4A295)`"Sorry, Sora!"`;
   Sora(Y4A296)`"One segment of security..."`;

});
playSFX({ name: `SE04_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Sara pushed the enter key.`;
   Sora(Y4A297)`"...has discovered an impediment..."`;
   Sora(Y4A298)`"Aaaaaaaaaaaaaaaaaaaaahhhh!"`;

});
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Beeep!`;
   Sora(Y4A299)`"A type 7 error has occurred."`;
   Sora(Y4A300)`"Approaching numerical limit."`;
   Sara(Y4A301)`"I did it!"`;
   `The high-frequency attack stopped.`;
   Sora(Y4A302)`"Aaaah...arrrghhh...oooooowww!"`;
   `Sora struggled in pain.`;
   `Finally her body began trembling.`;
   Kid`"Sora!?"`;
   You(Y4A303)`"Sora...looks bad..."`;

});
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Beeeeeeeeeeeeep!`;
   Sora(Y4A304)`"A type 9 error has occurred."`;
   Sora(Y4A305)`"Division by zero will be initiated according to application formatting."`;
   Sara(Y4A306)`"Here goes the overload..."`;

});
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Beeeeeeeeeeeeep!`;
   Sora(Y4A307)`"Waaaaa! W-what's happening to me...?"`;
   Sora(Y4A308)`"I am...I am Sora Akanegasaki...a system engineer in LeMU's Development Department...and assistant in charge of operating LeMU."`;

});
hideTextbox();
playSFX({ name: `SE07_02`, a1: 0, volume: 100 });
setNumberOfFlash(1);
setFlashRGBColor(255, 255, 255);
triggerFlash();
showTextbox();
text(() => {
   `Crackle!`;
   `A part of the console sparked.`;
   Sora(Y4A309)`"I...will be your guide today during you visit to LeMU."`;
   Sora(Y4A310)`"I...guarantee your safety and the safety of everyone on LeMU."`;
   Sora(Y4A311)`"I am the protector of everyone in LeMU."`;
   Sora(Y4A312)`"I am the defender of all in LeMU."`;

});
hideTextbox();
playSFX({ name: `SE07_02`, a1: 0, volume: 100 });
setNumberOfFlash(1);
setFlashRGBColor(255, 255, 255);
triggerFlash();
showTextbox();
text(() => {
   `Snap!`;
   Sora(Y4A313)`"I am...I am..."`;
   Sora(Y4A314)`"Who am I?"`;
   Sara(Y4A315)`"Don't lose yourself! You are Sora! You are Sora Akanegasaki and have been spending time with us!"`;
   Sora(Y4A316)`"I have...with everyone...?"`;

});
playSFX({ name: `SE03_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Beeeeeeeeeeep!`;

});
bgload({ name: `EV_SO14B`, transition: 20 });
stopSFX()
showTextbox();
text(() => {
   Sora(Y4A317)`"A type 34 error has occurred."`;
   Sora(Y4A318)`"Unanticipated orders are attempting to be implemented."`;

});
bgload({ name: `EV_SO14C`, transition: 20 });
showTextbox();
text(() => {
   Sora(Y4A319)`"Uuughhhhhhh!"`;
   `Sora started suffering even more...`;

});
bgload({ name: `EV_SO14D`, transition: 20 });
showTextbox();
text(() => {
   `And then something surprising happened.`;
   `Sora...split in two.`;
   Kid`"Sora...is two..."`;
   You(Y4A320)`"You mean...she divided...?"`;
   `It wasn't an illusion.`;
   `Of course, given that it was all RSD-generated, there is no guarantee that it all wasn't an illusion...`;
   `At least I was not the only one that saw it.`;
   `You and Sara seemed to be seeing it, too.`;
   `The new Sora attacked, grabbing the old Sora by the throat.`;
   `The two of them struggled equally.`;
   `The two Soras...`;
   `It was like an apple split into two pieces...?`;
   `No! It was like an apple reproduced in whole.`;
   `...Cell Division`;
   `I figured that this was the result of overloading LeMMIH.`;
   Sara(Y4A321)`"Okay! I got the root authority!"`;
   Sora(Y4A322)`"Do it now! If you strike now, you can rewrite the system!"`;
   Sora(Y4A323)`"A fatal...system error...has occurred..."`;
   Sora(Y4A324)`"Data may be...damaged...Immediately... initiate...rebuilding..."`;
   Sora(Y4A325)`"In 30 seconds...the emergency reset...will initiate."`;
   Sora(Y4A326)`"Hurry! LeMMIH is resetting the system to rebuild it."`;
   Sora(Y4A327)`"You must act before that! Hurry!"`;
   Sara(Y4A328)`"Okay! Just be patient, Sora."`;

});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Sara typed the keys at a furious speed.`;
   `All we could do is stand helplessly and watch.`;
   Sora(Y4A329)`"17 seconds to reset."`;
   Sora(Y4A330)`"Sara? Not yet?"`;
   Sara(Y4A331)`"Just a little more!"`;
   `Sara continued pounding in code as she wiped the sweat from her brow.`;
   Sora(Y4A332)`"Seven seconds to reset."`;
   Sora(Y4A333)`"Sara!"`;
   Sara(Y4A334)`"I've got it!"`;
   `Sara stood as if she were ejected from her chair.`;
   Sora(Y4A335)`"Three seconds to reset."`;
   Sara(Y4A336)`"Okay! Ninja Technology Technique..."`;
   Sara(Y4A337)`"Time to turn the tables!"`;

});
playSFX({ name: `SE04_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Sara struck the keyboard with her palm.`;

});
removeBG({ mode: WHITE, transition: 2 });
stopSFX()
delay({ interval: 60 });
stopBGM();
showTextbox();
text(() => {
   `The room was flooded with bright light.`;
   `The two of Sora's images began to overlap..`;
   `The two fused into one.`;
   `At the same time, the system underwent an emergency reset.`;

});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `At that instant we were all swallowed into pitch blackness.`;
   `Darkness and silence...colors and sound lost.`;
   `LeMMIH temporarily ceased functioning.`;

});
hideTextbox();
delay({ interval: 120 });
showTextbox();
text(() => {
   `And then exactly 170 seconds later...`;
   `LeMMIH rebooted.`;

});
hideTextbox();
playBGM({ num: 18, volume: 100 });
bgload({ name: `BG11A2`, transition: 20 });
bgload({ name: `BG11A1`, transition: 20 });
clock(`9:19`);
showTextbox();
text(() => {
   `The lights and other machinery restarted.`;
   `The fan of the computer gave off a quiet whirring sound. The display on the wall came online all at once.`;
   `There was a surge of letters rushing across the monitor...the system start up screen...and it finally switched to automatic operating mode.`;
   `And then Sora appeared again before us.`;
   `She seemed to burst upon us floating in the air, but at the same time had a solid presence.`;
   `She closed her eyes and it looked as if she were embracing herself as she descended.`;
   Kid`"Sora...?"`;
   `Sora slowly opened her eyes.`;

});
fgload({ id: 1, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(Y4A338)`"Good morning."`;

});
fgload({ id: 1, name: `SO02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(Y4A339)`"...Everyone."`;
   `Saying that, she smiled broadly.`;
   Kid`"Do you know who we are? Do you remember us?"`;
   `I pointed at myself.`;

});
fgload({ id: 1, name: `SO01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(Y4A340)`"Yes, Kid."`;
   Sora(Y4A341)`"And You and Sara as well."`;
   Sora(Y4A342)`"And Takeshi and Tsugumi, although they of course are not present."`;

});
removeFG({ id: 1, useAnim: true });
setFGRenderOrder(2, 4, 1);
multifgload3({ name1: `YU15BDS`, name2: `SO01ADS`, name3: `SA11ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   You(Y4A343)`"Oh...I'm so glad you remember..."`;

});
fgload({ id: 2, name: `SO11ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(Y4A344)`"Yes."`;
   Sara(Y4A345)`"Hey, Sora. I would like to investigate LeMMIH's C level data. Could you help me?"`;

});
fgload({ id: 2, name: `SO15ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(Y4A346)`"Of course. I'll do my best."`;
   `Sora nodded slightly as she spoke.`;
   Kid`"Hey, there is something I would like to know..."`;
   Kid`"Sara, what in the world did you do to rewrite the system?"`;

});
multifgload3({ name1: `YU03BDS`, name2: `SO01ADS`, name3: `SA01ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   Sara(Y4A347)`"Uh, well...actually I didn't change anything."`;
   Sara(Y4A348)`"I just added a patch that changes the priority duties."`;
   Sora(Y4A349)`"That is correct. My processing routine has not been altered."`;
   Sora(Y4A350)`"However, now my duty to serve you is higher priority than that of my duty to protect LeMMIH."`;
   Kid`"Hmmm. I don't really understand, but..."`;
   Kid`"But you mean that you no longer have to stop us?"`;
   Sora(Y4A351)`"That's right."`;
   Sora(Y4A352)`"And if it will be of use to you, then I will show you the internal workings of LeMMIH."`;

});
fgload({ id: 4, name: `SA12ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A353)`"Now then, shall we jump right into the search?"`;

});
fgload({ id: 2, name: `SO15ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(Y4A354)`"By all means."`;
   You`"........."`;
   Kid`"Hey? You, what's wrong?"`;
   `You was hunched over and quiet. She didn't look well.`;

});
multifgload3({ name1: `YU17BDS`, name2: `SO11ADS`, name3: `SA11ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   You(Y4A355)`"Thank you...Sora...and Mayo."`;
   You(Y4A356)`"You've done so much for me..."`;
   `And then Sara said - `;
   Sara(Y4A357)`"That doesn't seem like you...Nakkyu."`;
   Sara(Y4A358)`"You can't choose what you have to do to get what you want, just keep being yourself!"`;
   `Sara waved her words away casually with the palm of her hand.`;
   `I agreed with her completely.`;
   Kid`"She's right. Don't lose sight of yourself."`;
   Sora(Y4A359)`"I agree."`;

});
fgload({ id: 1, name: `YU15BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(Y4A360)`"Okay..."`;

});
multifgload3({ name1: `YU01BDS`, name2: `SO01ADS`, name3: `SA01ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   You(Y4A361)`"And thank you too, Kid."`;
   Kid`"Huh? Me? I didn't do anything."`;
   You(Y4A362)`"What are you talking about? You are the one that persuaded Sara to help, right?"`;
   Sora(Y4A363)`"And my decision was based on your words of wisdom."`;
   `'You told me that you all hoped for the same thing.'`;
   Sora(Y4A364)`"It was your advice that helped me to make up my mind."`;
   Kid`"I see...so that's what happened."`;
   `I felt a bit embarrassed.`;

});
fgload({ id: 1, name: `YU02BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(Y4A365)`"Alright! Now enough warm fuzzies..."`;
   You(Y4A366)`"Let's start investigating!"`;

});
multifgload2({ id1: 2, id2: 4, name1: `SO02ADS`, name2: `SA02ADS`, x1: 320, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Everyone(Y4A367)`"Alright!!"`;

});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   `And so we restarted the investigation into You's father.`;
   `The only clue that we had to start off our investigation was the name of You's father, Yoichi Tanaka.`;
   `Actually, the work going on beneath the surface of LeMMIH's exterior was all done by Sora.`;
   `It looked like the system still couldn't be accessed by normal means. Sara was worn out but she kept on typing.`;

});
hideTextbox();
stopBGM();
delay({ interval: 60 });
showTextbox();
text(() => {
   `...Nearly half an hour had passed since Sora had disappeared inside LeMMIH.`;

});
hideTextbox();
playBGM({ num: 16, volume: 100 });
setMonoColorOverlayFadeOutDuration(46);
fadeOutMonoColorOverlay();
unSkippableDelay(33);
clock(`9:52`);
showTextbox();
text(() => {
   `Sora suddenly appeared from inside the console.`;
   Kid`"Are you finished?"`;

});
multifgload3({ name1: `YU15BDS`, name2: `SO03ADS`, name3: `SA11ADS`, x1: 128, x2: 320, x3: 512, useAnim: 3 });
showTextbox();
text(() => {
   Sora(Y4A368)`"I can only tell you what I was able to learn, but..."`;
   Sara(Y4A369)`"Good work."`;
   You(Y4A370)`"So? What did you find out."`;
   Sora`"........."`;
   Kid`"It didn't work?"`;
   Sora(Y4A371)`"No, I have uncovered various facts."`;
   You(Y4A372)`"In that case, hurry up and tell us."`;
   Sora`"........."`;

});
hideTextbox();
fgload({ id: 2, name: `SO13ADS`, x: 320, useAnim: true });
delay({ interval: 30 });
multifgload2({ id1: 1, id2: 4, name1: `YU17BDS`, name2: `SA13ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A373)`"...Sora?"`;
   `Sora stared straight at You.`;
   `Her serious expression made You wrinkle her brow.`;
   `It didn't look like the kind of situation suitable for light talk or jokes.`;
   `I wondered what Sora could have found...?`;
   Sora(Y4A374)`"You, I want you to stay calm and listen."`;
   Sora(Y4A375)`"There is a possibility..."`;
   Sora(Y4A376)`"That your father, Yoichi Tanaka, has already died."`;

});
fgload({ id: 1, name: `YU03BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(Y4A377)`"...Huh?.... My father...dead?"`;
   Sora(Y4A378)`"Yes, 34 years ago."`;
   Kid`"Thirty-four years ago...?"`;
   Sara`"..."`;

});
fgload({ id: 1, name: `YU18BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(Y4A379)`"H-hold...on..."`;
   You(Y4A380)`"What do you mean 34 years ago?"`;
   You(Y4A381)`"I'm only 18-years-old."`;
   You(Y4A382)`"I was born 18 years ago."`;
   You(Y4A383)`"How could anything as ridiculous as my father dying 34 years ago...?"`;
   Kid`"Y-yeah...what you're saying Sora just doesn't match the facts."`;
   Sora(Y4A384)`"Please just stay calm and listen."`;
   Sora(Y4A385)`"I have not reached a final conclusion."`;
   Sora(Y4A386)`"I am merely saying that there is the possibility."`;

});
fgload({ id: 1, name: `YU17BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You`"........."`;
   Sora(Y4A387)`"First I tried to search for information on You's father."`;
   Sora(Y4A388)`"However, there were no files pertaining to Yoichi Tanaka recorded in LeMU's database."`;
   Sora(Y4A389)`"In other words, there are no records that anyone by that name existed."`;
   Kid`"So are you saying...that You's father wasn't here?"`;
   You(Y4A390)`"It...it can't be..."`;
   Sara(Y4A391)`"But that is only based on limited information from the areas of files you can access, right Sora? You said there were areas you couldn't breach, right?"`;

});
fgload({ id: 2, name: `SO17ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(Y4A392)`"Of course, that is correct."`;
   Sora(Y4A393)`"I am merely an interface program for LeMMIH."`;
   Sora(Y4A394)`"I am not permitted to access high-security data."`;
   Sara(Y4A395)`"So records about Yoichi Tanaka might be there."`;
   `Sora continued, responding to Sara's question.`;
   Sora(Y4A396)`"That is a possibility that I can't deny."`;
   Sora(Y4A397)`"However, there is no such name on company name lists, accounting records or any of the message logs exchanged on the local area network..."`;
   Sora(Y4A398)`"As far as these are concerned, no record of Yoichi Tanaka exists."`;

});
fgload({ id: 1, name: `YU18BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(Y4A399)`"That can't be!"`;

});
fgload({ id: 2, name: `SO13ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(Y4A400)`"I'm sure that my dad worked here at LeMU!"`;
   You(Y4A401)`"And besides...besides..."`;
   You(Y4A402)`"Even if he wasn't here...that doesn't mean that he is dead, right?"`;
   Sora(Y4A403)`"Correct..."`;

});
playSFX({ name: `SE05_08`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Bang!`;
   You(Y4A404)`"No it's not 'correct!' Tell me why you reached that theory!"`;
   Sara(Y4A405)`"Nakkyu, please calm down."`;
   `Sara grabbed You as she went to grab Sora.`;
   `You was on the verge of losing reason, and getting carried away by her emotions.`;
   Sora(Y4A406)`"I will explain my research and reasoning."`;
   Sora(Y4A407)`"But first...may I ask you a question?"`;
   You(Y4A408)`"?"`;
   Sora(Y4A409)`"This may sound rude, but...where did you hear that your father was an employee at LeMU?"`;

});
fgload({ id: 1, name: `YU17BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(Y4A410)`"I..."`;
   Sora(Y4A411)`"That your father disappeared when you were a one-year-old."`;
   Sora(Y4A412)`"If that is a fact, then you should have no memories of your father..."`;
   Sora(Y4A413)`"Am I wrong?"`;
   You(Y4A414)`"No, you're right."`;
   You(Y4A415)`"I don't remember anything about my father."`;
   You(Y4A416)`"I don't remember playing together, or him holding me..."`;

});
fgload({ id: 1, name: `YU18BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(Y4A417)`"But I'm sure that he as around until I was one."`;
   You(Y4A418)`"There are pictures and films of that time. I'm sure he was there."`;
   You(Y4A419)`"I'm sure that my mom said so as well."`;
   Sora(Y4A420)`"So that was the case..." `;

});
showTextbox();
text(() => {
   You(Y4A421)`"Huh?"`;
   Sora(Y4A422)`"It is about your mother..."`;
   You`"........."`;
   Kid`"........."`;
   Sara`"........."`;
   Sora`"........."`;

});
showTextbox();
text(() => {
   You(Y4A423)`"What is it? Why won't you say anything?"`;
   Sora(Y4A424)`"It's because..."`;
   You(Y4A425)`"What?"`;
   Sora(Y4A426)`"It is difficult to say..."`;
   You(Y4A427)`"It might be difficult...but you have already told me many difficult things."`;
   Sora`"........."`;
   You(Y4A428)`"So tell me. What happened with my mom?"`;
   Sora(Y4A429)`"You're sure?"`;

});
fgload({ id: 1, name: `YU17BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(Y4A430)`"Y-yes."`;
   Sora(Y4A431)`"Then I will tell you."`;
   Sora(Y4A432)`"Your mother...Yukie Tanaka..."`;
   Sora(Y4A433)`"Passed away 15 years ago."`;

});
fgload({ id: 1, name: `YU18BDS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(Y4A434)`"No!?"`;
   You(Y4A435)`"W-what are you saying? Sora..."`;
   You(Y4A436)`"How can you tell me that..."`;
   You(Y4A437)`"That's just not possible..."`;
   Sora(Y4A438)`"That is all that I can tell you."`;
   Sora(Y4A439)`"I will display the detailed documents on the screen."`;
   Sora(Y4A440)`"Please refer to them."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   `You stumbled toward the display, sitting down in front of it.`;
   `Sara and I read the display from over her shoulder.`;
   `On the screen...`;
   `Was a record from the company LAN.`;
   `It was a notice a death.`;
   `There was a file about the office procedures related to Yukie Tanaka's death. `;
   `There was a message log of messages exchanged among employees about the notice of her death.`;
   `And a funeral notice.`;
   `...The screen kept changing from one image to the next.`;
   `The next thing that was uploaded to the server read-`;
   `02/07/19...`;
   `(So this was on July 19, 2002, 15 years ago...)`;
   `At the end of the files, the following appeared.`;
   `It was a record of an online conversation between employee Mr. A in the Personnel Section of the General Affairs Division and Mrs. B in the Second Section of the Research Division.`;

});
setFGRenderOrder(4, 2, 1);
removeBG({ mode: BLACK, transition: 2 });
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `A > But it really was a shock.`;
   `B > What was?`;
   `A > I mean about Yukie. Yukie Tanaka.`;
   `B > Oh, yeah...`;
   `B > Yükie was always so nice to me.`;
   `A > That's right. She was your boss, right?`;
   `A > Do you know the cause of death?`;
   `B > TB`;
   clearPage();
});
showTextbox();
text(() => {
   `A > TB?`;
   `B > Tief Blau`;
   `A > That again...`;
   `A > It's the same as how he husband died...`;
   `B > Her husband?`;
   `A > What? Oh, you mean you didn't know?`;
   `B > Is that so?`;
   `A > But we really shouldn't talk about this at the company.`;
   clearPage();
});
showTextbox();
text(() => {
   `B > Why?`;
   `A > I'll tell you about later.`;
   `B > But Yöichi died 19 years ago, right?`;
   `A > That's why we can't talk about it! I'm serious`;
   `B > And she had a child...the poor thing...`;
   `A > She had a daughter, right?`;
   `A > I feel so sorry for her...`;
   clearPage();
});
hideTextbox();
delay({ interval: 60 });
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   `I checked to see when the log had been saved.`;
   `The date read 02/07/19.`;

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
   You(Y4A441)`"That...can't be..."`;
   You(Y4A442)`"I won't believe it!...I won't...!"`;
   You(Y4A443)`"I absolutely can't believe it!!!"`;

});
playSFX({ name: `SE01_04`, a1: 0, volume: 100 });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `As she shouted this, You fled from the Security Office.`;

});
fgload({ id: 1, name: `SA06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(Y4A444)`"Nakkyu!"`;

});
playSFX({ name: `SE01_04`, a1: 0, volume: 100 });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Sara followed after her.`;

});
stopBGM();
showTextbox();
text(() => {
   `Sora and I remained behind.`;

});
hideTextbox();
playBGM({ num: 19, volume: 100 });
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(Y4A445)`"Did you understand?"`;
   Sora(Y4A446)`"As I said before, when I searched the database for the name Yoichi Tanaka, the data which I can access had no records."`;
   Sora(Y4A447)`"However, the chat log that appears to be 15 years old..."`;
   Sora(Y4A448)`"It seems to indicate that Yukie Tanaka had a husband named Yöichi."`;
   Sora(Y4A449)`"Judging from the context of the document...I conjectured that if Yöichi had died 19 years before that would mean 34 years before now."`;
   Kid`"But the name Yoichi Tanaka doesn't appear in any of the other data. Why is it only here?"`;
   Sora(Y4A450)`"I can only speculate from my limited knowledge..."`;
   Sora(Y4A451)`"All records related to Yoichi Tanaka were erased for a reason."`;
   Sora(Y4A452)`"Please read the 14th and 15th line of this log one more time."`;
   `-A > What? Oh, you mean you didn't know?`;
   `-B > Is that so?`;
   Kid`"The flow of the conversation seems unnatural."`;
   Sora(Y4A453)`"Yes."`;
   Sora(Y4A454)`"Originally there seems to have been some text between these lines."`;
   Kid`"So you mean that someone erased part of it?"`;
   Sora(Y4A455)`"From A's comments it would appear so."`;
   Kid`"But, Yöichi's name was left in B's comments..."`;
   Kid`"...Oh I see."`;

});
choice(
   `It was because it was in English.`,
   `It was because it had an umlaut.`,
);
switch (l_choice) {
   case 0: goto(lbl_00001515);
   case 1: goto(lbl_0000151e);
}
let lbl_00001515;
showTextbox();
text(() => {
   Kid`"I'll bet that when they were looking for Yoichi's name the computer automatically searched..."`;
   Kid`"And only looked for his name, erasing everything it found in Japanese."`;
   Kid`"But the search missed B's comments because they were in English."`;
   Kid`"Because Yoichi's name is spelled in English."`;
   Sora(Y4A456)`"No. Unfortunately, that is not correct."`;
   Kid`"What?"`;
   Sora(Y4A457)`"The person that did the search would not be so foolish."`;
   Sora(Y4A458)`"It would appear that the name 'Yoichi' in English was also searched for and erased."`;
   Kid`"But what about this one?"`;
   Sora(Y4A459)`"Kid, look very closely at B's comments."`;
   Sora(Y4A460)`"Didn't she use a way of rendering the name that is uncommon."`;
   `- B > But Yöichi died 19 years ago, right?`;
   Kid`"Oh! The...'o' has a 'ö' in it...?"`;
   Sora(Y4A461)`"Yes. This is called an umlaut and is used mainly in German..."`;
   Sora(Y4A462)`"When a 'a', 'u' or 'o' vowel is followed by the letters 'i' or 'e', an umlaut is used to indicate that the sound is closer to the second."`;
   Kid`"So you're saying...that because this included an umlaut..."`;

});
goto(lbl_00001523);
let lbl_0000151e;
showTextbox();
text(() => {
   Kid`"So probably what happened is that when the computer was searching, it automatically looked for..."`;
   Kid`"Yoichi in Japanese and spelled in English, erasing all of them."`;
   Sora(Y4A463)`"However, B's comments were overlooked for some reason."`;
   Kid`"And her comments had Yöichi's name spelled differently!"`;

});
let lbl_00001523;
showTextbox();
text(() => {
   Sora(Y4A464)`"Correct."`;
   Sora(Y4A465)`"So I tried to look for other similar comments by B."`;
   Sora(Y4A466)`"It appears that Ms. B had a habit of using of using abbreviated words ..."`;
   Sora(Y4A467)`"...and spelling words in her own way in her communications with friends."`;
   Kid`"It seems to be a style particular to her."`;
   Sora(Y4A468)`"There are numerous examples of her writing things such as 'CU later' or 'B4' for before."`;
   `As she spoke Sora pulled up samples of correspondences.`;

});
fgload({ id: 1, name: `SO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(Y4A469)`"But...do you think that You is alright?"`;
   Kid`"Well, Sara went after her, but I'm still kinda worried about her."`;
   Sora(Y4A470)`"I wonder if I shouldn't have told her after all..."`;
   Kid`"No! You did right! No matter what the facts are, that is what You wanted to know and you told her."`;
   Kid`"You knows that. She is tough. She can take it."`;

});
fgload({ id: 1, name: `SO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(Y4A471)`"You know her well."`;
   Kid`"No...not really..."`;
   `My face started to flush. I started to fidget uncomfortably.`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(Y4A472)`"Don't you think you best go see how she is doing?"`;
   Kid`"Yeah. I will."`;
   Sora(Y4A473)`"And I will get back to the work that I was in the middle of."`;
   Kid`"Oh, Sora! Wait! There's one more thing."`;

});
fgload({ id: 1, name: `SO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(Y4A474)`"Yes? What is it?"`;
   Kid`"I just wanted to say...thanks for everything."`;

});
fgload({ id: 1, name: `SO08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Sora's cheeks seemed to redden just a bit and she smiled shyly.`;
   Sora(Y4A475)`"I only did what is expected of me. And..."`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(Y4A476)`"If that makes everyone happy, then I know no greater joy."`;

});
fgload({ id: 1, name: `SO16ADM`, x: 320, useAnim: true });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `With the ultimate smile plastered on her face, Sora disappeared into the display.`;
   `I left the now empty Security Office and went in search of You and the others.`;

});
l_choice = 0;
jump(`SY4B`);
