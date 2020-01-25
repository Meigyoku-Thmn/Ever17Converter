setDialogBoxColor(BLUE);
setSceneTitle({ index: 65 });
l_b0 = 5;
l_dayA = 3;
l_dayB = 3;
chapterCutin({ name: `00000000` });
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
clock(`5:34`);
playSFX({ name: `SE02_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Splash`;
   `I scooped up water with both hands and splashed it on my face.`;
   `The instant it made contact, it sent a sharp shock to my brain.`;
   Kid`"Gaaaah!"`;
   `I snapped open my eyes, completely awake.`;
   `I thought I had (probably) repeated this ritual several thousands of times. It was my way of refreshing myself in the morning.`;
   `I lifted my face and wiped it with the towel.`;
   `A smooth white counter, a sink...and a finely cracked mirror.`;
   `I stared foggily at my reflection in the mirror.`;

});
bgload({ name: `BG25B3`, transition: 20 });
playBGM({ num: 2, volume: 100 });
showTextbox();
text(() => {
   `I passed Takeshi as I was returning to the corridor.`;
   Kid`"Hey."`;

});
fgload({ id: 1, name: `KB05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3A000)`"...Morning, Kid."`;
   Kid`"Hey, don't look so depressed Takeshi."`;
   Takeshi(S3A001)`"Nah. I'm just tired is all."`;
   Kid`"Well, a lot's happened in the last couple of days. Are you tired?"`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3A002)`"I'm alright. I just need to wake up is all. See ya."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Saying that he headed off to the bathroom.`;

});
bgload({ name: `BG17A1`, transition: 20 });
showTextbox();
text(() => {
   `Sara and You were waiting in the Conference Room.`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU09ADM`, name2: `SA09ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(S3A003)`"GOOD MORNING!"`;
   Sara(S3A004)`"GOOD MOOOORNING!"`;
   `The two of them seemed wired.`;
   Kid`"Morning..."`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU02ADM`, name2: `SA08ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(S3A005)`"Hey, Kid. You don't seem very good? You having trouble waking up?"`;
   Kid`"No. I'm awake."`;

});
fgload({ id: 1, name: `YU05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S3A006)`"You sure?"`;
   Sara(S3A007)`"I know. He's not a morning person or maybe he's got low blood pressure. Like me."`;
   Kid`"I don't know about that..."`;
   `Sara sure didn't seem to have a problem with mornings.`;
   `I was just glad that Sara appeared to be in a good mood.`;

});
fgload({ id: 2, name: `SA07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S3A008)`"I know all about it. I hate mornings. They are like hell on earth. I have destroyed more alarm clocks than I can count..."`;

});
fgload({ id: 1, name: `YU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S3A009)`"Mayo is always in the worst mood in the morning. I thought she might kill me today."`;

});
fgload({ id: 2, name: `SA12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S3A010)`"But Nakkyu got me in this wrestling hold..."`;

});
fgload({ id: 1, name: `YU16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S3A011)`"Enough. There are children around."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `...I was getting a headache.`;
   `Maybe it WAS low blood pressure that made me not a morning person....`;
   `....`;
   `Finally, when Takeshi came back conversation turned to breakfast.`;

});
multifgload2({ id1: 2, id2: 1, name1: `YU01ADM`, name2: `KB07ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3A012)`"But Tsugumi and Sora aren't here."`;
   You(S3A013)`"That's true...but they'll probably show up eventually."`;

});
fgload({ id: 1, name: `KB01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3A014)`"With those two you're probably right."`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `BG07B1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `We all made our way to the kiosk.`;

});
fgload({ id: 4, name: `KB01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3A015)`"Everyone okay with hotdogs?"`;

});
multifgload2({ id1: 1, id2: 2, name1: `SA08ADS`, name2: `YU02ADS`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S3A016)`"Hotdogs?"`;
   You(S3A017)`"They have hotdogs here?"`;

});
fgload({ id: 4, name: `KB02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3A018)`"Well, I found a few in the back of the fridge. Must've been on the 'stealth menu.'"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
showTextbox();
text(() => {
   `With that, Takeshi disappeared inside the kiosk.`;
   `It looked like Takeshi would be chef for another day.`;
   `But...`;
   Takeshi(S3A019)`"What in the...?"`;
   `Takeshi had let out a surprised yelp from inside.`;
   `Looking into the shop, there was Takeshi frozen in front of the freezer with the door open.`;
   Kid`"What's wrong?"`;

});
multifgload2({ id1: 1, id2: 2, name1: `KB04ADM`, name2: `SA06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3A020)`"What's wrong is they're gone!"`;
   Sara(S3A021)`"Gone? What are?"`;
   Takeshi(S3A022)`"The stuff. The hotdog stuff. The sausages that were in here are gone."`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `YU05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S3A023)`"I'll bet they weren't there to start with."`;

});
fgload({ id: 1, name: `KB05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3A024)`"No. They were here when I checked last night. I found them when I made dinner last night."`;
   Kid`"You think they were stolen?"`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SA05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S3A025)`"By whom?"`;
   Kid`"I dunno..."`;

});
fgload({ id: 1, name: `KB04ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3A026)`"Damn! Who would do something like that?"`;
   `Takeshi slammed the door violently shut.`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `YU01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S3A027)`"Calm down. We're not out of food. We'll just go with the regular menu."`;

});
fgload({ id: 1, name: `KB08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3A028)`"Geez..."`;

});
fgload({ id: 2, name: `YU05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S3A029)`"Just forget about it and start cookiiiing. I'm starviiiing."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SA07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S3A030)`"Me too."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `You and I were of the same opinion.`;
   `We weren't expecting hotdogs to begin with...and I was hungry.`;
   `Takeshi still looked peeved. Maybe it was because he was hungry too.`;
   `The first thing we had to do was fill our stomachs.`;
   `In the end, we gave up on hotdogs and went with our standby menu - chicken sandwiches - for breakfast.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
delay({ interval: 60 });
setSceneTitle({ index: 66 });
bgload({ name: `BG07B1`, transition: 26 });
playBGM({ num: 18, volume: 100 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`6:21`);
showTextbox();
text(() => {
   `When everyone had a Takeshi-made sandwich in hand we sat down for a lively and fun breakfast together.`;
   `You and Sara were especially boisterous.`;
   `Takeshi said that the two of them easily made as much noise as three or more people.`;
   `But that was just Takeshi being himself...`;
   `The two of them never seemed to run out of things to talk about and kept jabbering away cheerfully about the most meaningless things.`;

});
multifgload2({ id1: 1, id2: 2, name1: `SA16ADM`, name2: `YU11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S3A031)`"Hey, Nakkyu. Do you remember Mr. Konishi, that teacher at our school."`;

});
showTextbox();
text(() => {
   You(S3A032)`"Konishi? Oh, you mean Konnie? The music teacher that was built like a tank and a completely crazy animal lover."`;

});
showTextbox();
text(() => {
   Sara(S3A033)`"Yeah. That Konnie."`;

});
fgload({ id: 2, name: `YU13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S3A034)`"He's still there. He's been around for ages."`;

});
showTextbox();
text(() => {
   Sara(S3A035)`"You know what? The other day he bought a robotic dog."`;

});
fgload({ id: 2, name: `YU14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S3A036)`"No kidding? He did? That mechanic phobe?"`;

});
fgload({ id: 1, name: `SA15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S3A037)`"Yeah. But his pets kept dying on him. And he'd take time off...I think it just wore him down."`;

});
fgload({ id: 2, name: `YU13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S3A038)`"When I was still going to that school, he was trying to bring one of his pets back through cloning."`;
   Sara(S3A039)`"But that clone got sick and died, too. I swear he's cursed."`;
   You(S3A040)`"But really, that Konnie...I tell you, that robot dog looks so much like the real thing that I'll bet he is treating it like a normal pet."`;

});
fgload({ id: 1, name: `SA16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S3A041)`"Hey, didn't you have a robotic dog at your house?"`;

});
fgload({ id: 2, name: `YU12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S3A042)`"Yup, sure do. Actually, it's my mom's though..."`;

});
fgload({ id: 2, name: `YU11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S3A043)`"I think it's one of those really old types, but it just keeps ticking along happily. It never breaks."`;

});
showTextbox();
text(() => {
   You(S3A044)`"Thinking back on it, Mayo, you never came over to my house to play, did you? You have to next time. I'll show you it."`;

});
fgload({ id: 1, name: `SA03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S3A045)`"Really? Sounds good. If I get a chance..."`;

});
fgload({ id: 2, name: `YU12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   You(S3A046)`"You can come over anytime. We're friends, right?"`;

});
fgload({ id: 1, name: `SA17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S3A047)`"Yes...of course."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU12ADM`, name2: `KB11ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3A048)`"Hey, can I ask you something?"`;

});
fgload({ id: 1, name: `YU05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   `Just then Takeshi jumped into their conversation.`;

});
fgload({ id: 1, name: `YU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S3A049)`"Eh? What?"`;
   Takeshi(S3A050)`"You two seem to be close, but how do you know each other?"`;

});
fgload({ id: 1, name: `YU16ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S3A051)`"Oh? We didn't tell you?"`;
   `Takeshi shook his head as he gulped down cola.`;
   Kid`"You and Sara are from the same school. You graduated already."`;
   Kid`"I think she said she was at Kyumeikan Girls High School until this last March..."`;

});
fgload({ id: 1, name: `YU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   `I answered for them, but You nodded.`;

});
showTextbox();
text(() => {
   `And when You was a senior, Sara entered the school as a scholarship student, You added.`;

});
fgload({ id: 2, name: `KB06ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid`"A scholarship student?"`;
   `I'd never heard that word before.`;

});
fgload({ id: 2, name: `KB13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3A054)`"Do...do you mean one of those people that sneaks in the backdoor?"`;

});
fgload({ id: 1, name: `YU05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S3A055)`"You always have such a twisted take on everything."`;

});
fgload({ id: 2, name: `KB14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3A056)`"No I don't! I'm not half as mean-spirited as you."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S3A057)`"Due to my situation at home, I never really planned on going to high school..."`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S3A058)`"But the principal of Kyumeikan was a friend of the family and helped get me in as a scholarship student."`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU02ADM`, name2: `KB07ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(S3A060)`"He didn't want her unpolished genius to go to waste."`;
   `It sounded like Sara was a bit of a protege and sort of famous.`;
   Takeshi(S3A061)`"Whoa."`;
   Kid`"S-Sara's amazing."`;
   `This and the information from the day before about Sara's computer skills made me think that she was might be on a different level than the rest of us.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `SA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S3A062)`"It's no..."`;
   Sara(S3A063)`"It's no big deal. Really."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Sara looked bored as she said it.`;
   `Maybe it was no big deal for her...`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU01ADM`, name2: `KB01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3A064)`"So you went to the same school but were in different classes?"`;
   Takeshi(S3A065)`"Were you on a team or in a club together or something?"`;
   You(S3A066)`"Yup."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S3A067)`"Nakkyu was leader of the school club I joined as a freshman." `;
   `After eating the sandwiches, Sara held the pop can with both hands and gazed at the ceiling with a distant look in her eyes.`;

});
fgload({ id: 1, name: `SA15ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S3A068)`"That was a year ago."`;
   Sara(S3A069)`"Right after I had entered Kyumeikan..."`;

});
hideTextbox();
monoColorOverlay({ interval: 24, color: WHITE });
stopBGM();
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `....`;
   `....`;
   `....`;

});
hideTextbox();
playBGM({ num: 6, volume: 100 });
openCherryBlossomAnim();
showTextbox();
text(() => {
   `It was a sunny spring afternoon after class.`;
   `A light wind made the cherry blossoms dance in the schoolyard as and dust gently tickled the nose.`;
   `There were groups of new students walking packaged in starched new school uniforms and expressions full of nervousness and expectations.`;
   `There were senior students eagerly calling out to them to join their clubs.`;
   `It was probably a scene played out on most school campuses.`;
   `As I let my imagination run wild I was looking around the campus trying to get a feel for my new surroundings. `;
   `All of the sudden, from among the din of voices and activity someone called out to me.`;
   //??
   Anon(S3A070)`"Hey, you there!"`;
   `I stopped.`;
   `Looking in the direction of the voice was a girl student, her face one big smile.`;
   `From the ribbon on her uniform it was clear she was a senior.`;
   `Her hair was cut short enough that it just hid her ears. It also made her look like a go-getter.`;
   `When I pointed at myself to see if she meant me, she nodded smiling.`;
   //??
   Anon(S3A071)`"Yeah. I mean you."`;
   `The smiling girl approached me.`;
   //??
   Anon(S3A072)`"Do you have a minute? Sure you do, right?"`;
   //??
   Anon(S3A073)`"If you are up for it, can I talk with you?"`;
   //??
   Anon(S3A074)`"Don't worry. It won't take much of your time."`;
   `What was it with this person? I wondered if she were trying to pick me up...or...`;
   `I had a bad feeling about the situation.`;
   `Seeing my skeptical face, the girl with the bobbed haircut tried to explain herself.`;
   //??
   Anon(S3A075)`"Don't get me wrong. I'm not trying to...I simply wanted to..."`;
   //??
   Anon(S3A076)`"I was just wandering if you would like to join our club."`;
   `...So that was it. I wonder how many people had asked me the same question.`;
   `I was pretty sick of the whole thing.`;
   Sara(S3A077)`"No thank you. I'm not interested."`;
   //??
   Anon(S3A078)`"Oh really? Have you already decided to join somewhere?"`;
   Sara(S3A079)`"No."`;
   //??
   Anon(S3A080)`"Well then!"`;
   Sara(S3A081)`"I've decided not to join anything."`;
   //??
   Anon(S3A082)`"Oh, don't say that...won't you just come take a look at our club room?"`;
   Sara(S3A083)`"No thank you."`;
   //??
   Anon(S3A084)`"I'll bet you are wondering what our club is all about."`;
   Sara(S3A085)`"Not in the least."`;
   //??
   Anon(S3A086)`"Okay, okay. Just come take a look. We don't bite."`;
   Sara(S3A087)`"I said..."`;
   //??
   Anon(S3A088)`"Listen! Stop talking, shut up and come with me!"`;
   `So that persistent senior dragged me to their club room half by force.`;

});
hideTextbox();
monoColorOverlay({ interval: 24, color: WHITE });
closeCherryBlossomAnim();
stopBGM();
bgload({ name: `BG07B1`, transition: 26 });
multifgload3({ name1: `SA02ADS`, name2: `KB06ADS`, name3: `YU08ADS`, x1: 128, x2: 512, x3: 320, useAnim: 0 });
playBGM({ num: 1, volume: 100 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   Kid`"So You...was that girl?"`;
   Sara(S3A089)`"You got it."`;

});
fgload({ id: 2, name: `KB11ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3A090)`"She hasn't changed a bit. I mean you're exactly the same, You."`;

});
fgload({ id: 4, name: `YU04ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A091)`"Be quiet. I was desperate then. There was nothing else I could do!"`;
   Kid`"Why were you so eager to get Sara to join?"`;

});
fgload({ id: 4, name: `YU03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A092)`"It...it was a matter of life or death for the club."`;

});
fgload({ id: 2, name: `KB07ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid`"?"`;
   You(S3A093)`"It could have been the end of us."`;
   Kid`"???"`;

});
fgload({ id: 1, name: `SA01ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S3A094)`"She means they were short on members and were about to fold."`;

});
fgload({ id: 2, name: `KB02ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3A095)`"Oh, I see."`;

});
fgload({ id: 1, name: `SA02ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S3A096)`"I mean, including Nakkyu there were only three members."`;
   Takeshi(S3A097)`"Ha, ha, ha! That's pretty grim."`;
   You(S3A098)`"I was going to graduate that year so we had to get new members or we would have had to close."`;
   You(S3A099)`"I just couldn't stand by and watch the club that we had built go to waste."`;

});
fgload({ id: 2, name: `KB08ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3A100)`"Well, I guess I see what you mean."`;

});
fgload({ id: 4, name: `YU05ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A101)`"So, it was the only choice I had if our club was going to survive."`;
   Kid`"So exactly what kind of club was it?"`;

});
fgload({ id: 4, name: `YU02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A102)`"We were a robust model of an intelligent beacon of education while working in the public interest."`;

});
fgload({ id: 2, name: `KB01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3A103)`"Wow..."`;
   `Takeshi took a swig of his cola.`;
   Takeshi(S3A104)`"And? What did you guys do?"`;

});
fgload({ id: 4, name: `YU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A105)`"We were hackers."`;

});
fgload({ id: 2, name: `KB13ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3A106)`"Cough...!!"${waitVoice}${noWait}`;

});
multifgload2({ id1: 4, id2: 1, name1: `YU04ADS`, name2: `SA06ADS`, x1: 320, x2: 128, useAnim: true });
showTextbox();
text(() => {
   You(S3A107)`"Geez! That's gross...you spewed cola everywhere!"`;

});
fgload({ id: 2, name: `KB04ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3A108)`"Stupid! Hacking is not robust and certainly isn't in 'the public interest'!"`;
   You(S3A109)`"What are you talking about?"`;
   Takeshi(S3A110)`"It's a crime, that's why."`;
   You(S3A111)`"You don't know what you're talking about! Hacking isn't crime!"`;

});
fgload({ id: 2, name: `KB07ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3A112)`"Huh? You sure?"`;

});
multifgload2({ id1: 4, id2: 1, name1: `YU07ADS`, name2: `SA07ADS`, x1: 320, x2: 128, useAnim: true });
showTextbox();
text(() => {
   `Takeshi looked at me.`;
   `His eyes said, 'What the heck is she talking about?'`;

});
choice(
   `I get it.`,
   `I have no clue.`,
);
switch (l_choice) {
   case 0: goto(lbl_00000970);
   case 1: goto(lbl_000009bf);
}
let lbl_00000970;
l_you_point += 1;
showTextbox();
text(() => {
   `Oh well...I figured that I'd have to explain it.`;
   Kid`"Takeshi, listen."`;
   Kid`"Originally hacking as a word meant the rhythmical manipulation of a computer."`;
   Kid`"People that could do this were called hackers. That evolved into the word hacker for technicians and research computer experts."`;
   Kid`"Probably what you're thinking about is the hacking they talk about on the news, meaning a crime committed using a computer..."`;
   Kid`"Like when somebody steals secret information, or destroys data via computer..."`;

});
multifgload2({ id1: 4, id2: 1, name1: `YU06ADS`, name2: `SA08ADS`, x1: 320, x2: 128, useAnim: true });
showTextbox();
text(() => {
   Kid`"But that's a mistake."`;
   Kid`"That kind of thing is called 'cracking.' It's completely different."`;
   Kid`"And the people that do this are known as 'crackers.' You need to make a distinction between them."`;
   Takeshi`"........."`;
   You`"........."`;
   Sara`"........."`;
   Kid`"Uh, what's the matter everybody?"`;
   Sara(S3A113)`"Hey, Kid..."`;
   Takeshi(S3A114)`"Are you sure you've lost your memory?"`;

});
fgload({ id: 4, name: `YU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A115)`"Well...anyway, you get it now. There is really no connection whatsoever between the word hacking and criminal activity."`;

});
goto(lbl_00000a8d);
let lbl_000009bf;
showTextbox();
text(() => {
   `Of course, I had no clue.`;

});
fgload({ id: 4, name: `YU03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A116)`"Geez...Mayo, explain it so that this idiot can understand it."`;

});
fgload({ id: 1, name: `SA02ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S3A117)`"Okay."`;

});
fgload({ id: 4, name: `YU02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Sara cleared her throat, put on her explanation face and started speaking.`;
   Sara(S3A118)`"Originally hacking as a word meant the rhythmical manipulation of a computer."`;
   Sara(S3A119)`"People that could do this were called hackers. That evolved into the word hacker for technicians and research computer experts."`;

});
fgload({ id: 1, name: `SA05ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S3A120)`"Probably what you're thinking about is the hacking they talk about on the news meaning a crime committed using a computer..."`;
   Sara(S3A121)`"Like when somebody steals secret information, or destroys data via computer..."`;
   Sara(S3A122)`"But that's a mistake."`;

});
fgload({ id: 1, name: `SA01ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S3A123)`"That kind of thing is called 'cracking.' It's completely different."`;
   Sara(S3A124)`"And the people that do this are known as crackers. You need to make a distinction between them."`;

});
fgload({ id: 1, name: `SA02ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S3A125)`"There you go!"`;

});
playSFX({ name: `SE10_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `You clapped loudly.`;

});
fgload({ id: 4, name: `YU18ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A126)`"Got it? There is really no connection whatsoever between the word hacking and criminal activity."`;

});
fgload({ id: 4, name: `YU01ADS`, x: 320, useAnim: true });
let lbl_00000a8d;
showTextbox();
text(() => {
   You(S3A127)`"It was an intelligent gathering for us to gather to try to boost our computer skills."`;

});
fgload({ id: 2, name: `KB03ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3A128)`"Oops. Excuse my ignorance!"`;
   Kid`"I'm just surprised that You was involved in an indoor club."`;

});
multifgload2({ id1: 4, id2: 1, name1: `YU08ADS`, name2: `SA01ADS`, x1: 320, x2: 128, useAnim: true });
showTextbox();
text(() => {
   You(S3A129)`"Oh, I was doing all kinds of things. All said...I must have been involved with seven groups."`;
   Kid`"Wow...I see."`;

});
fgload({ id: 2, name: `KB01ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3A130)`"And Sara just joined right up then, huh?"`;
   Sara(S3A131)`"Nope."`;

});
fgload({ id: 2, name: `KB07ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid`"You didn't?"`;

});
fgload({ id: 4, name: `YU02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A132)`"She didn't join the club without a fight. Mayo is Mayo after all."`;
   `With that ambiguous comment, You got a distant look in her eye and started to speak.`;

});
fgload({ id: 4, name: `YU11ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A133)`"That day I could have taken Mayo to our club room..."`;
   You(S3A134)`"But...but..."`;

});
hideTextbox();
monoColorOverlay({ interval: 24, color: WHITE });
stopBGM();
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `....`;
   `....`;
   `....`;

});
playSFX({ name: `SE00_12`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Slide.`;

});
hideTextbox();
playBGM({ num: 5, volume: 100 });
showTextbox();
text(() => {
   You(S3A135)`"So this is our hacking club room. Go on in."`;
   Matsunaga`"..."`;
   You(S3A136)`"Huh? What's the matter? It's kind of cramped, but ahead."`;
   Matsunaga(S3A137)`"It really is...cramped."`;
   You(S3A138)`"Well, I suppose."`;
   Matsunaga(S3A139)`"And you have tons of stuff."`;
   You(S3A140)`"I suppose."`;
   Matsunaga(S3A141)`"I mean, there is no way I'll fit in here."`;
   You(S3A142)`"I suppose not...Ah, ha, ha."`;
   `Like always, our little one-room clubroom was so cluttered there was nowhere to even walk.`;
   `Several computers and a steel rack covered the three walls and the floor was covered in a tangle of cables.`;
   `In what open space there was, computers without covers and bound up printouts were piled high.`;
   `A stuffed animal bumblebee, a button with a picture of a nuclear missile blasting off, an unidentified object X and other stuff were scattered around almost completely covering the floor.`;
   `If Mayo had been a clean freak, we would have lost her right there.`;
   //??
   Anon(S3A143)`"Oh? Nakkyu, is that a new member?"`;
   `A girl stood from in front of a computer, her chair nearly buried. `;
   `She was the head of the club. She always wore glasses with black frames and kept her hair in two braids.`;
   `Her name was...uh...I forgot.`;
   You(S3A144)`"That's right. We just barely avoided having our club fold..."`;
   `So as I answered her I hopped from one open inch of floor space to the next and into the room.`;
   Matsunaga(S3A145)`"Um, I, uh, haven't decided to join yet..."`;
   `Sara was still contemplating how best to enter the room.`;
   You(S3A146)`"So where is your partner?"`;
   //Club President
   Club_President(S3A147)`"Out with a cold."`;
   You(S3A148)`"I heard one is going around. You gotta be careful."`;
   Matsunaga(S3A149)`"Hanging out in a place like this it'd be even more strange if you didn't get ill..."`;
   `Sara gingerly entered the room as if searching for one foothold and then another.`;
   `Every step she took her footsteps were punctuated with a crunching noise, as if something were breaking. Of course, we didn't pay any attention to it.`;
   You(S3A150)`"Okay. Now is your chance to get a sense of what our club is all about. Please sit down."`;
   `I unearthed a chair from the pile of junk and gestured to Sara to sit.`;
   Matsunaga(S3A151)`"I'm only here to look."`;
   You(S3A152)`"Alright, alright. If you still have doubts, just give it a try. It's pretty fun."`;
   Matsunaga(S3A153)`"Can I ask you something first?"`;
   You(S3A154)`"Anything."`;
   Matsunaga(S3A155)`"This is a hacking club, right?"`;
   You(S3A156)`"Right."`;
   Matsunaga(S3A157)`"But it looks like the only thing on the screens are games."`;
   You(S3A158)`"Uh, well, that's true..."`;
   `I crossed my arms and nodded seriously several times.`;
   You(S3A159)`"Actually, we just call ourselves a hacking club. None of our current members can really program."`;
   //Club President
   Club_President(S3A160)`"Everybody that could graduated."`;
   Matsunaga`"........."`;
   You(S3A161)`"Even games can have meaning. Uh, they aren't bad for helping you get used to computers..."`;
   Matsunaga(S3A162)`"Um..."`;
   You(S3A163)`"Yes? What is it?"`;
   Matsunaga(S3A164)`"I'll be upfront about this. Getting involved with me will only get you into trouble."`;
   You`"........."`;
   Matsunaga(S3A165)`"I mean..."`;
   You(S3A166)`"...Oh, mornin' Kid."`;
   You(S3A167)`"Look we're in danger of losing our club as it is...nothing could be WORSE than you not joining."`;
   Matsunaga(S3A168)`"Do you mind if I touch this?"`;
   `Sara pointed at the keyboard.`;
   You(S3A169)`"Oh, be my guest. You operate it by, um..."`;
   Matsunaga(S3A170)`"I'm fine. I know how to use it."`;
   `She sat in the chair, took the mouse and stared at the monitor.`;
   `She opened several files. Finding the one she was looking for, she opened it up and started editing it.`;

});
playSFX({ name: `SE04_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `She didn't even glance at the keyboard. She just tapped nonstop.`;
   `The speed of her touch-typing was incredible.`;
   You(S3A171)`"Wow!"`;
   //Club President
   Club_President(S3A172)`"Amazing..."`;
   `When she had finished typing, Sara opened a different piece of software and started typing in commands.`;
   `The hard disk whirred to life and finally...`;
   You(S3A173)`"Wow!"`;
   `Suddenly the face of a bumblebee appeared on all of the monitors in the room. `;
   `That face stared out at us and winked. Then all of the faces stuck out their tongues at us.`;
   You(S3A174)`"Wh-wh-what...!"`;
   //Club President
   Club_President(S3A175)`"What's going on? I can't get this computer to listen to me...!?"`;
   `The next instant...`;

});
playSFX({ name: `SE03_10`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Snap!`;
   `All of the computers suddenly shut down at once.`;
   You`"........."`;
   //Club President
   Club_President`"........."`;
   `The two of us stood there stunned.`;
   `Finished, Sara stood up and said quietly -`;
   Matsunaga(S3A176)`"You get it now?"`;
   Matsunaga(S3A177)`"Nothing good can come of hooking up with me."`;
   Matsunaga(S3A178)`"So...don't."`;
   `And then she left.`;
   //Club President
   Club_President(S3A179)`"What in the...?"`;
   You(S3A180)`"What happened?"`;
   //Club President
   Club_President(S3A181)`"The computer won't boot up."`;
   You(S3A182)`"You sure it's not unplugged?"`;
   //Club President
   Club_President(S3A183)`"That's not it...it's plugged in, but it won't start up."`;
   You(S3A184)`"Huh...?"`;
   `She meant that the software had been destroyed.`;
   `And the problem wasn't limited to just one machine.`;
   `All of the computers in that room that were connected to the network were in the same state.`;
   You(S3A185)`"No way. That girl..."`;
   You(S3A186)`"Could she have cracked the whole system that quickly?"`;
   `Looking down there was a stuffed animal bumblebee glaring up nastily at me.`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
stopBGM();
bgload({ name: `BG07B1`, transition: 26 });
multifgload3({ name1: `SA08ADS`, name2: `KB13ADS`, name3: `YU18ADS`, x1: 128, x2: 512, x3: 320, useAnim: 0 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   Takeshi(S3A187)`"No kidding...?"`;
   You(S3A188)`"No kidding."`;
   Kid`"........."`;

});
fgload({ id: 2, name: `KB07ADS`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3A189)`"Geez. That's crazy."`;
   Sara(S3A190)`"Well Nakkyu was so persistent it was annoying!"`;

});
fgload({ id: 4, name: `YU08ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3A191)`"Y-yeah, but you didn't have to..."`;
   Kid`"So Sara didn't join?"`;
   Kid`"What? Then that would mean that..."`;

});
fgload({ id: 4, name: `YU01ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A192)`"No. You've got it backwards. I didn't say she didn't join, did I?"`;

});
fgload({ id: 1, name: `SA05ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S3A193)`"After that Nakkyu came bothering me, like every day."`;
   Kid`"Even though she did that to your computers?"`;
   You(S3A194)`"Because she did that."`;

});
fgload({ id: 1, name: `SA08ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   `Basically, You had been taken by Sara's genius.`;
   `By her genius for programming.`;
   `Day after day her fixation drove her to call on Sara.`;
   `Finally, Sara was overwhelmed by You's enthusiasm and joined the club.`;

});
fgload({ id: 4, name: `YU02ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(S3A195)`"That was how Mayo and I became friends."`;

});
fgload({ id: 1, name: `SA02ADS`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S3A196)`"Okey-dokey!"`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
delay({ interval: 60 });
playBGM({ num: 2, volume: 100 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
showTextbox();
text(() => {
   `With that long, long story finally over, we all stretched.`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3A197)`"Well, we finished eating. Whaddya say? Should we head back to the Conference Room?"`;
   Kid`"Sure."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Tsugumi hadn't eaten, but there was no point in waiting around for her.`;
   `We took her sandwich back to the Conference Room.`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU07ADM`, name2: `KB01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(S3A198)`"I'm going to step out for a bit."`;

});
fgload({ id: 2, name: `KB07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3A199)`"Huh? Where to?"`;

});
fgload({ id: 1, name: `YU03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S3A200)`"Uh, just a little walk..."`;
   Kid`"???"`;

});
fgload({ id: 1, name: `YU05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S3A201)`"Hey you keep poking your nose into a girl's privacy, and she just might start disliking you."`;
   `You shrugged and patted me on the head.`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `SA01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S3A202)`"What about me?"`;

});
fgload({ id: 1, name: `YU03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S3A203)`"Sorry Mayo, but I think I'll go alone."`;

});
fgload({ id: 2, name: `SA08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S3A204)`"Okay..."`;

});
fgload({ id: 1, name: `YU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S3A205)`"I'm sorry. I'll be right back."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `You shot the dejected Sara a smile as she headed quickly toward the door.`;
   Takeshi(S3A206)`"Hey I don't care where you go, but if something happens you come right back!"`;
   `You shot Takeshi a thumbs-up on the way out the door.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
setSceneTitle({ index: 67 });
bgload({ name: `BG26B3L`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`6:38`);
showTextbox();
text(() => {
   `She was on the way to the Conference Room.`;

});
setNumberOfFlash(1);
setFlashRGBColor(0, 0, 0);
triggerFlash();
stopBGM();
showTextbox();
text(() => {
   Kid`"Ah...!"`;
   `I looked up at the ceiling.`;
   Kid`"Wh-what's that...?"`;
   `I had thought I had seen something for a second.`;
   `But when I had done a double take I didn't see anything.`;

});
fgload({ id: 1, name: `KB05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3A207)`"H-hey, what's wrong?"`;
   `Even with Takeshi calling out to me, I couldn't tear my eyes from the ceiling.`;
   Kid`"I wonder..."`;
   Kid`"I don't know what it was, but I swear I saw something."`;
   Takeshi(S3A208)`"Saw something? Like what?"`;
   Kid`"Uhh...well, I didn't really see it..."`;
   Kid`"I just have a bad feeling...about the second floor...somewhere."`;

});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3A209)`"What the heck are you talking about?"`;
   Kid`"Um, I think we should check that floor one more time..."`;

});
showTextbox();
text(() => {
   `Saying that Takeshi slapped me on the shoulder.`;
   `Suddenly I came back to myself.`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3A210)`"Don't worry about it. If something's up, Sora would warn us about it, right?"`;
   Kid`"Yeah...you're right...but still..."`;
   Takeshi(S3A211)`"Looks like I'm not the only one who's tired."`;
   Kid`"Yeah..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I wondered if that was really all it was.`;
   `I tried to remember what I had seen while I was walking.`;
   `But it was like waking up after a dream and having the dream slip away...I couldn't remember it.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `BG17A1`, transition: 26 });
fgload({ id: 4, name: `TU01ADS`, x: 320, useAnim: false });
playBGM({ num: 1, volume: 100 });
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `When we returned to the Conference Room Tsugumi was there.`;
   `And - to our surprise - she was eating.`;
   Kid`"Oh!"`;

});
showTextbox();
text(() => {
   Sara(S3A212)`"Oh my!"`;
   Takeshi(S3A213)`"Ahhhh!!!!"`;

});
fgload({ id: 4, name: `TU07ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `The reason we were all so surprised...`;
   `was because...`;
   `Tsugumi was eating a...hotdog.`;
   Tsugumi`"........."`;
   Kid`"........."`;
   Sara`"........."`;
   Takeshi`"........."`;

});
removeFG({ id: 4, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU07ADM`, name2: `KB05ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3A214)`"What?"`;

});
showTextbox();
text(() => {
   Takeshi(S3A215)`"You...you...you..."`;
   Tsugumi`"........."`;

});
fgload({ id: 2, name: `KB04ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3A216)`"You thief!"`;
   Tsugumi(S3A217)`"What're you so mad about?"`;
   `Tsugumi was indifferent.`;

});
showTextbox();
text(() => {
   `That just served to fuel Takeshi's fury.`;
   Takeshi(S3A218)`"I thought everyone was sick of chicken sandwiches...and here I was going to make...and you...you...!"`;
   Kid`"Just...calm down."`;
   `I tried to calm him down.`;
   `But Tsugumi just continued to munch on her hotdog without a care.`;
   Sara(S3A219)`"I think that's pretty selfish of you to keep them all to yourself."`;

});
fgload({ id: 2, name: `KB14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3A220)`"You selfish pig!"`;
   Takeshi(S3A221)`"I hope you get fat like a whale and drown in the Mariana Trench, you hog!" `;
   Tsugumi(S3A222)`"All to myself?"`;
   `Tsugumi polished off the last bite and turned to face Takeshi as she wiped her hands.`;

});
fgload({ id: 1, name: `TU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3A223)`"I'm not sure what you're talking about. This is the only one I ate."`;

});
showTextbox();
text(() => {
   Takeshi(S3A224)`"What? When I looked there was enough for everyone."`;
   Takeshi(S3A225)`"And now they're all gone. In that soon-to-be fat stomach of yours!"`;

});
fgload({ id: 1, name: `TU17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3A226)`"Well...I didn't really count how many there were."`;

});
showTextbox();
text(() => {
   Tsugumi(S3A227)`"Maybe the rats got them."`;
   Takeshi(S3A228)`"You pathetic liar! The only rat here is you!"`;
   `Takeshi's fury only grew while Tsugumi stayed calm. `;
   `She brushed away the hair from her forehead and stood up quietly.`;

});
fgload({ id: 1, name: `TU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3A229)`"I'll ask you one more time. Why are you so mad?"`;

});
showTextbox();
text(() => {
   Takeshi(S3A230)`"I told you! It's because you ate everyone's food."`;
   Tsugumi(S3A231)`"And I told you - this was all I ate."`;

});
fgload({ id: 1, name: `TU18ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3A232)`"And besides..."`;
   `Tsugumi glared at Takeshi.`;
   Tsugumi(S3A233)`"Are you sure that is the real reason that you are angry?"`;

});
fgload({ id: 2, name: `KB13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3A234)`"What? What are you talking about?"`;

});
fgload({ id: 1, name: `TU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3A235)`"You sure it wasn't just because it threw off your schedule?"`;

});
showTextbox();
text(() => {
   Kid`"?"`;
   `Schedule...?`;

});
fgload({ id: 2, name: `KB14ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3A236)`"We-well yeah! Because the hotdogs that I wanted everyone to eat are gone now!"`;
   `Tsugumi stared unflinchingly at Takeshi.`;
   `The two glared at each other.`;
   `Sara and I were in no position to step in between the two. All we could do was watch to see what happened.`;

});
stopBGM();
showTextbox();
text(() => {
   `It was then that - `;

});
hideTextbox();
playSFX({ name: `SE06_03`, a1: 0, volume: 100 });
shakeScreenHard();
multifgload2({ id1: 1, id2: 2, name1: `TU06ADM`, name2: `KB06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   `Suddenly, a low metallic sound reverberated throughout the installation.`;
   `It was a dull, muffled sound.`;

});
playBGM({ num: 16, volume: 100 });
showTextbox();
text(() => {
   Takeshi(S3A237)`"Wh-what was that!?"`;

});
fgload({ id: 1, name: `TU08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3A238)`"This whole place just shook...a little."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `The two turned their attention to the new situation, forgetting their fight.`;

});
fgload({ id: 1, name: `KB03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3A239)`"Hey, Kid, what was that?"`;
   Kid`"Uh, I don't know..."`;
   Takeshi(S3A240)`"Hey, this doesn't have anything to do with that 'bad feeling' you had earlier, does it?"`;

});
showTextbox();
text(() => {
   `I shook my head.`;
   Kid`"I don't know. Maybe we should ask Sora..."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3A064)`"Did you call for me?"`;

});
showTextbox();
text(() => {
   `Sora appeared into the air out of nowhere and descended in front of us.`;

});
showTextbox();
text(() => {
   Sara(S3A241)`"Oh, Sora!"`;

});
showTextbox();
text(() => {
   Takeshi(S3A242)`"Hey, Sora! Where were you?"`;

});
fgload({ id: 1, name: `SO08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3A066)`"I'm terribly sorry. I overslept."`;
   `Sora looked embarrassed.`;

});
showTextbox();
text(() => {
   Takeshi(S3A243)`"Overslept? But you're..."`;

});
showTextbox();
text(() => {
   Takeshi(S3A244)`"...Nah, we'll save that for later."`;

});
fgload({ id: 1, name: `SO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid`"Hey, did something just happen? There was an awful noise just now."`;

});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3A068)`"One of the shafts that supports this floor has started to warp."`;

});
showTextbox();
text(() => {
   Kid`"We didn't see any signs of it yesterday..."`;
   Sora(T3A070)`"Yes, well, it wasn't in my calculations. It appears as if the ocean currents may have influenced this outcome."`;

});
showTextbox();
text(() => {
   Takeshi(S3A245)`"How dangerous are we talking about here?"`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3A071)`"Well it should be within the margin of error, but...no, wait a second."`;

});
fgload({ id: 1, name: `SO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3A072)`"There is an anomaly in one the of pressure-regulating pipelines, at Zweite stock's warehouse."`;
   Takeshi(S3A246)`"What are pressure-regulating pipes?"`;

});
fgload({ id: 1, name: `SO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(T3A073)`"These pipelines are responsible for adjusting the pressure inside the multi-layered bulkheads comprising LeMU."`;
   Sora(T3A074)`"If any of them should rupture, for whatever reason, I am incapable of repairing them."`;
   Sora(T3A075)`"The anomaly is only slight, so you shouldn't have to hurry, but...I think it is best if someone goes to check on it. Would you please go for me?"`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TU05ADM`, name2: `KB08ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3A247)`"Sure, leave it to me."`;
   `Takeshi nodded right away.`;
   Tsugumi(S3A248)`"...I guess that's that then."`;

});
showTextbox();
text(() => {
   Kid`"What?"`;
   `I couldn't quite make out what Tsugumi had said. Then...`;

});
fgload({ id: 1, name: `TU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3A249)`"I'll go, too."`;
   `She unexpectedly volunteered for the task.`;

});
fgload({ id: 2, name: `KB07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3A250)`"Tsugumi..."`;
   Tsugumi(S3A251)`"What? You got a problem with me tagging along?"`;

});
fgload({ id: 2, name: `KB08ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3A252)`"No...that's not it...it's just..."`;

});
fgload({ id: 1, name: `TU08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(S3A253)`"Don't get me wrong. We've got a situation on our hands, so you and I will call a truce."`;
   Tsugumi(S3A254)`"Well, if we're going to fix something, we'll need tools, right? I know my way around a workshop."`;

});
fgload({ id: 2, name: `KB01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3A255)`"Alright.... Let's go."`;

});
showTextbox();
text(() => {
   Sara(S3A256)`"I'll help, too."`;
   Takeshi(S3A257)`"Okay, you can come too Sara."`;

});
fgload({ id: 2, name: `KB07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3A258)`"So what happened with You anyway? She's not back yet?"`;
   Kid`"I wonder if she didn't notice the shaking just now."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `SO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S3A259)`"There's no way she could have missed that..."`;
   Kid`"Do you know where she is?"`;

});
fgload({ id: 1, name: `SO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(S3A260)`"I'm sorry. Unfortunately, right now some sensors are out of order. I can't scan the whole complex."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `(I wonder what happened to You.)`;

});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S3A261)`"Hey, Kid. Will you go look for Nakkyu?"`;

});
showTextbox();
text(() => {
   Kid`"Huh? Me?"`;
   Sara(S3A262)`"Yeah. I'm a little worried about her."`;
   Kid`"..."`;
   `I was also worried about Sara and everyone going off suddenly like that.`;
   `An extra set of hands couldn't hurt...`;

});
if (l_chose_to_wait_there_in_2nd_day == 0) goto(lbl_0000139a);
showTextbox();
text(() => {
   `I had to decide what to do.`;

});
choice(
   `Look for You`,
   `Repairs with Sara`,
);
switch (l_choice) {
   case 0: goto(lbl_0000139a);
   case 1: goto(lbl_000012e9);
}
let lbl_000012e9;
l_repaired_with_sara = 1;
showTextbox();
text(() => {
   Kid`"Takeshi, I'll come along and help with the repairs."`;

});
fgload({ id: 1, name: `SA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S3A263)`"What about Nakkyu?"`;
   Kid`"You's tougher than the rest of us. She'll be fine."`;

});
showTextbox();
text(() => {
   Kid`"Besides, if something was wrong, she would use LeMMIH to contact us."`;

});
fgload({ id: 1, name: `SA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S3A264)`"But if something happened to her during that shaking..."`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `SA03ADM`, name2: `SO10ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sora(S3A265)`"You needn't worry about that."`;
   Sora(S3A266)`"Currently, there appears to be no direct damage inside LeMU."`;
   Sora(S3A267)`"As for You's whereabouts, the sensors should be online in a moment and then I will be able to detect her."`;
   Takeshi(S3A268)`"Alright. We'll forget about You for now. Let's go check the warehouse and then we'll worry about everything else."`;
   Sara(S3A269)`"Alright..."`;
   Kid`"She's fine. I promise."`;
   `Promise? How could I promise that?`;
   `But somehow I was sure of it.`;

});
fgload({ id: 1, name: `SA02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S3A270)`"Okay."`;
   `With that one word, the tension seemed to leave Sara.`;
   Tsugumi(S3A271)`"What are you doing? You're gonna get left behind."`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `The next thing I noticed, we were the only people left in the room.`;
   `Sara and I chased after everyone.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
l_choice = 0;
jump(`S_3C`);
let lbl_0000139a;
l_looked_for_you = 1;
showTextbox();
text(() => {
   Kid`"Takeshi, I'll go have a look around for You."`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `KB01ADM`, name2: `SO10ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S3A272)`"Alright. It's in your hands then, Kid."`;

});
showTextbox();
text(() => {
   Sora(S3A273)`"If something should happen, use LeMMIH to contact me."`;
   Kid`"Alright. See you later!!"`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `I ran through the corridor kicking up spray as I went.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
l_choice = 0;
jump(`S_3B`);
