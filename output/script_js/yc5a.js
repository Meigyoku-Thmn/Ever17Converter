l_b0 = 5;
l_dayA = 5;
l_dayB = 5;
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
hideTextbox();
setChangePerspectiveDirection(FROM_RIGHT);
triggerChangePerspectiveAnim();
unSkippableDelay(30);
monoColorOverlay({ interval: 3, color: WHITE });
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
setDialogBoxColor(BLUE);
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `EV_YU03B`, transition: 26 });
playBGM({ num: 5, volume: 100 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
setSceneTitle({ index: 113 });
clock(`0:3`);
showTextbox();
text(() => {
   You(C5A000)`"Fraternal twins—????"`;
   `You yelped right next to my ear.`;
   Kid`"Why are you so surprised about? Didn't I tell you?"`;

});
bgload({ name: `EV_YU03A`, transition: 20 });
showTextbox();
text(() => {
   You(C5A001)`"Well, yeah, I'd heard that you and Mayo were twins but..."`;
   You(C5A002)`"Nothing about fraternal, or identical, or anything like that..."`;
   Kid`"Oh...but, bwahaaa haaaa!"`;
   `I found myself laughing in spite of myself.`;
   You(C5A003)`"Hm?"`;
   `You cocked her head.`;
   Kid`"Well of course we're fraternal twins!"`;
   Kid`"I mean, I'm a guy, and Sara's a girl..."`;
   You(C5A004)`"So?"`;
   Kid`"Mono-zygotic is when one egg is fertilized, and then that embryo splits into two."`;
   Kid`"So both twins have the exact same genetic makeup - that's why they're called identical, because they look the same, and of course they're the same gender."`;
   Kid`"So, for identical twins, you can't have anything other than two girls or two boys."`;
   Kid`"But, di-zygotic on the other hand...is when two different eggs are fertilized by different sperm."`;
   Kid`"So, they're two separate entities from the beginning - each with a different genetic makeup. That way they may or may not be the same gender."`;
   Kid`"They may not even look much alike."`;
   Kid`"They're basically just like other siblings."`;
   Kid`"So they're more like siblings who happened to be in their mother's body and get born about the same time."`;
   You(C5A005)`"Hmmm. I get it..."`;
   You(C5A006)`"So...if a boy and a girl are twins...they have to be fraternal, not identical?"`;
   Kid`"Exactly."`;
   You(C5A007)`"Hmmm."`;

});
bgload({ name: `EV_YU03C`, transition: 20 });
showTextbox();
text(() => {
   You(C5A008)`"...so...what were we talking about, again?"`;
   Kid`"You forgot!??"`;

});
bgload({ name: `EV_YU03A`, transition: 20 });
showTextbox();
text(() => {
   You(C5A009)`"Um, ummmm well......."`;
   Kid`"It started when you said something like..."`;
   Kid`"'So Mayo and you are twins...'"`;
   Kid`"'But you aren't any good at computers like Mayo is.'"`;
   Kid`"'In fact, you've got absolutely no aptitude for them. Why is that?'"`;
   Kid`"And then I said..."`;
   Kid`"'Because we're fraternal twins.'"`;

});
bgload({ name: `EV_YU03C`, transition: 20 });
showTextbox();
text(() => {
   You(C5A010)`"Ohh!  Righhht!  I remember now!"`;
   `You flailed her limbs around on top of the ruins.`;
   `That's right, You and I were on the top of the Lemurian Ruins.`;
   Kid`"So after all that, do you get it?"`;
   You(C5A011)`"...Huh? Get what?"`;
   `She paused in her flailing.`;
   Kid`"The reason I'm not good at computers."`;
   You(C5A012)`"Oh, that...it's like this, right?"`;
   You(C5A013)`"Because you and Mayo are as different from one another as any other siblings..."`;
   You(C5A014)`"Unlike identical twins, your genetic strengths, characters, or whatever, are completely different."`;
   Kid`"Right."`;
   Kid`"I'd say that our 'infrared vision' is the only inherited trait that we even share."`;
   Kid`"Aside from that, I don't think we're very much alike."`;
   You(C5A015)`"Hmmm..."`;
   You(C5A016)`"...So...what were we talking about before that?"`;
   Kid`"Ah..."`;
   `I sighed and started explaining.`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: WHITE });
bgload({ name: `IMG01B`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `But before that, I needed to explain what, 'You and I were doing there.'`;
   `It went back to that afternoon....  (Before I knew my real name.)`;
   `Sora came out with some information rather abruptly.`;
   Sora(C5A017)`"Yoichi Tanaka passed away 17 years ago."`;
   Sora(C5A018)`"Yukie Tanaka passed away 15 years ago as well."`;
   `Yoichi was You's father, and Yukie was her mother.`;
   `Both of You's parents had passed away.`;
   `It was unfortunately a fact that was true.`;
   `There was proof, including dated mail and other files.`;
   `I had seen them with my own eyes.`;
   `But You still wasn't convinced.`;
   `In her heart she still believed that her father was alive.`;
   `Of course, regarding her mother, she was even more vehement.`;
   You(C5A019)`"But my mother works at LeMU."`;
   You(C5A020)`"We were living together until right before all of this happened."`;
   You(C5A021)`"There's no way she died 15 years ago..."`;
   `It was hard to know what to say...but...I said this - `;
   Kid`"Maybe she wasn't your real mother."`;
   Kid`"Meaning she might not even be Yukie..."`;
   `You was shaking her head back and forth as if to say, 'Impossible.'`;
   `After a while, You spoke as if in a dream.`;
   You(C5A022)`"Aahhh....."`;
   You(C5A023)`"If only I could hack into there..."`;
   You(C5A024)`"Then I could find out details, get the whole story..."`;
   `The 'there' she was pointing at was LeMMIH's 'High Security Data.' `;
   `All afternoon and into the night, she had tried to hack her way in, but kept getting rejected at the confirmation point.`;
   `She knew the password.`;
   `"The empty fall sky...A single cuckoo calls out...Brings a chill to me."`;
   `She kept trying different variations: caps, lowercase, different fonts, Latin, German...`;
   `She enlisted Sora and Sara's help, and they tried every possibility they could think of...but all to no avail.`;
   `LeMMIH had built a high, impenetrable castle, and You was turned back again and again right at the gates.`;
   `She was stricken with frustration and grief...`;
   `Finally, exhausted and at a loss, she found her way over to the Lemurian Ruins.`;
   `..................`;
   `By the time I spotted her, she had climbed all the way to the top.`;
   `I sat down beside her. Neither of us spoke.`;
   `But from time to time, You would let out a sigh like she had thought of something.`;
   `Time passed slowly...`;
   You(C5A025)`"Listen, Kid, you get premonitions, right?"  `;
   `After about the 153rd sigh, You suddenly came out with this question.`;
   You(C5A026)`"Can you see anything about my parents?"`;
   Kid`"Well, you know ...premonitions...aren't the same as seeing into the past..."`;
   Kid`"And you're talking about 15 and 17 years ago..."`;
   Kid`"When I was only one, or not even born yet.  Either way, there's no way I can look that far into the past."`;
   You(C5A027)`"You are totally useless...."`;
   You(C5A028)`"Even when Sora and Mayo were killing themselves helping me, you were just sitting there spaced out."`;
   Kid`"........."`;
   You(C5A029)`"Hey, actually..."`;
   You(C5A030)`"You and Mayo are twins, right?"`;
   You(C5A031)`"But you're not good with computers the way she is."`;
   You(C5A032)`"In fact, you don't have any aptitude with them at all. Why is that?"`;

});
hideTextbox();
monoColorOverlay({ interval: 24, color: WHITE });
bgload({ name: `EV_YU03C`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   Kid`"That's when I answered."`;
   Kid`"I said 'because we're fraternal twins.'"`;
   You(C5A033)`"Whoah! Banana, banaaaaana!"`;
   You(C5A034)`"I remember now...cow cow cow cow...remember ember, cow cow cow now..."`;
   You(C5A035)`"Cow cow cow cow, NOW I rememberember!!"`;
   `You appeared to be malfunctioning.`;
   `The harsh reality of things must have been too cruel for her to bear...`;
   `When Sora first told her, You went hysterical, almost crazy, and then burst into a sobbing fit like a child.`;
   `Maybe she had cried herself out. Because, since then, she had seemed much calmer.`;
   `But now...`;
   You(C5A036)`"Apo, apo, a pineap-ple?"`;
   `She was in bad shape.`;
   Kid`"You? Are you okay?"`;
   You(C5A037)`"Wazzat?"`;
   Kid`"Uh, maybe you're a little psychologically...strained?"`;
   You(C5A038)`"No waaaay, I'm fine!"`;
   You(C5A039)`"I'm starting over from here."`;
   You(C5A040)`"No point in moping, right?"`;
   Kid`"........."`;
   You(C5A041)`"Enough about me, how about you, Hokutan?"`;
   Kid`"Ho-Hokutan!?"`;
   You(C5A042)`"Your name's Hokuto, right?...so...Hokutan."`;
   Kid`"Cut it out, don't call me that."`;
   You(C5A043)`"Why not?"`;
   Kid`"I...still can't think of myself as a 'Hokuto.'"`;
   Kid`"If I was walking down the street and someone called out, 'Hokuto!'..."`;
   Kid`"I wouldn't turn around. In fact I don't think I COULD."`;
   Kid`"It wouldn't seem like they were calling out to ME..."`;
   You(C5A044)`"Well, even if that's what you think, that's just too bad."`;
   You(C5A045)`"Your name is Hokuto until you die, and you're just going to have to live with that."`;
   Kid`"But..."`;
   Kid`"If nothing else, I don't want you guys here to call me Hokuto."`;
   Kid`"I'm used to being called 'Kid,' and you guys are used to it too, right?"`;
   Kid`"You can't just switch, in the middle like that."`;
   You(C5A046)`"Well, I suppose, but still..."`;
   You(C5A047)`"You really want to stay 'Kid'?"`;
   Kid`"Yeah, that's fine."`;
   `I had told her how I felt.`;
   You(C5A048)`"You really hate 'Hokuto' that much?"`;
   Kid`"Listen! For the millionth time..."`;
   Kid`"I just don't think that Hokuto is MY name..."`;
   Kid`"It's got nothing to do with liking or disliking the name."`;
   You(C5A049)`"Reeeally..."`;
   Kid`"Look, I said this when we were talking about Ling Ling and Lang Lang, but..."`;
   Kid`"I really don't care what my name is."`;
   Kid`"I'm not fussy, and I'm certainly not attached to it."`;
   You(C5A050)`"But you can't NOT care at all."`;
   You(C5A051)`"Whether you like it or not, a name is like a billboard for who you are."`;
   You(C5A052)`"If you are going to live in society, you'll need a name eventually."`;
   You(C5A053)`"I mean, any time that you make a contract, or apply for something, or take an exam, or get arrested..."`;
   You(C5A054)`"Whatever you say, your name is the most important way to verify who you are."`;
   You(C5A055)`"Names are like ID numbers for people."`;
   Kid`"Identification..."`;

});
stopBGM();
showTextbox();
text(() => {
   `The word just slipped out.`;
   `And then!!!`;

});
bgload({ name: `EV_YU03B`, transition: 20 });
showTextbox();
text(() => {
   You(C5A056)`"What!? What'd you just say!?"`;
   `You grabbed the back of my head and pulled my face toward hers.`;
   Kid`"Wha-wha-wha-what...?"`;
   You(C5A057)`"Just then! Just now! Now, now, now! Kid, what did you just say!"`;
   Kid`"I didn't say anything..."`;
   Kid`"I just repeated back what you were saying..."`;
   `You leveled a determined glare at me.  `;
   `She raised her finger and twirled it like a magic wand.`;
   `She breathed in through her nose.`;
   `I waited for her to breathe out, but she kept breathing in...and in...`;
   `I covered my ears.`;
   `She grabbed my hands and pulled them away from my ears.`;
   `And then...`;
   `With all the air she had just sucked in, she let loose right next to me.`;

});
bgload({ name: `EV_YU03C`, transition: 20 });
playBGM({ num: 18, volume: 100 });
showTextbox();
text(() => {
   You(C5A058)`"I've GOT it!"`;
   `She grinned loosely.`;
   Kid`"???"`;
   `I just kept blinking at her.`;
   `And then...`;
   You(C5A059)`"I gawt it, I gawt it, I got it got it got it!!!"`;
   You(C5A060)`"I see, I see, I sincerely LOVE you!" Smooooch!`;
   `All of a sudden, out of the blue and with no warning - she kissed my cheek.`;
   `A perfect hit.`;
   `I was a little...giddy...`;
   You(C5A061)`"Well, hurry up, ask me!"`;
   Kid`"Ask..?"`;
   You(C5A062)`"Come on, ask me, 'Hey, You, what did you figure out?'!!!"`;
   `I did as I was told.`;
   Kid`"Hey, You, what did you figure out?"`;
   You(C5A063)`"Funny you should ask, Kid!"`;
   You(C5A064)`"You see, you know the reason we couldn't get past the confirmation on LeMMIH? I figured it out!!"`;
   Kid`"?"`;
   You(C5A065)`"All this time, we thought we had the password wrong.  Right?"`;
   You(C5A066)`"But that wasn't it."`;
   You(C5A067)`"The password is probably fine."`;
   You(C5A068)`"The empty fall sky...A single cuckoo calls out...Brings a chill to me."`;
   Kid`"What do you mean?"`;
   You(C5A069)`"So, it's gotta be this..."`;
   You(C5A070)`"It wasn't the password we had wrong...it was the username."`;
   Kid`"Username?"`;
   You(C5A071)`"Yup."`;
   You(C5A072)`"A name is like an identification number for a person...it's what confirms who you are..."`;
   You(C5A073)`"So if we had the name wrong, it wouldn't matter how perfectly we put the password in."`;
   `"Access denied. Invalid name or password."`;
   `I had seen that message umpteen times.`;
   You(C5A074)`"If you were right, and the mother I knew wasn't really my mother..."`;
   You(C5A075)`"It would mean that her real name wasn't Yukie Tanaka."`;
   You(C5A076)`"Which would mean...?"`;
   Kid`"If you just knew her real name, you could clear LeMMIH's confirmation?"`;
   You(C5A077)`"Exactly!"`;
   `You tapped my forehead.`;
   Kid`"But...how will you figure out her real name?"`;
   You(C5A078)`"Well..."`;
   You(C5A079)`"Sora ought to know, right?"`;
   `Before I could say 'Sora?' You had grabbed my arms.`;
   `A second later...`;
   You(C5A080)`"Aaaaiii!!"`;
   `She jumped down off the ruins with a great cry.`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeFG({ id: 1, useAnim: false });
showTextbox();
text(() => {
   `Pulled off balance, I flew clumsily through the air.`;

});
hideTextbox();
bgload({ name: `BG04B1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
playSFX({ name: `SE02_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `—Bam!!`;
   `I nearly toppled onto my head, but managed to right myself like a cat and landed safely.`;
   `My own excellent reflexes impressed me.`;
   `As for You...`;
   `She was sprawled on her belly in a puddle, arms and legs spread awkwardly.`;
   Kid`"You? You! You okay?"`;
   `When I called her name, You hopped up.`;

});
fgload({ id: 1, name: `YU01BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Water dripped from her hair.`;
   `She was soaked from head to toe.`;
   You(C5A081)`"Well, don't just stand there, let's go!"`;
   `She spoke calmly.`;

});
hideTextbox();
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Flinging off water, she headed toward the exit.`;
   `From the back, she looked completely dry.`;

});
hideTextbox();
stopBGM();
stopSFX()
showTextbox();
text(() => {
   `.........`;
   `......`;
   `...`;
   `I stood for a minute in front of the gates of the Lemurian Ruins, just thinking.`;
   You(C5A074)`"If you were right, and the mother I know isn't really my mother..."`;
   You(C5A075)`"It means her real name isn't Yukie Tanaka."`;
   `So what was her name then...?`;
   `Name...name...name..`;
   `You's real name was Yubiseiakikana...`;

});
playBGM({ num: 24, volume: 100 });
showTextbox();
text(() => {
   Kid`YubiseiAKIkana...Aki meaning autumn...`;
   `Autumn...autumn...autumn...`;
   `"The empty fall sky...A single cuckoo calls out...Brings a chill to me."`;
   `I broke it down by character. Empty...Fall...Sky...Single... Cuckoo...Calling...Brings...Chill...`;
   `A jumble of bits and illogical fragments.`;
   `I tried to form them into a coherent pattern, but they slipped away.`;
   `I couldn't grasp them.`;
   `But I couldn't help but feel that I had brushed up against another premonition, or at least an intuition...`;
   `It was a haiku. Seventeen syllables.`;
   `I muttered it out loud.`;
   Kid`"The empty fall sky...A single cuckoo calls out...Brings a chill to me."`;
   Kid`"The empty fall sky...A single cuckoo calls out...Brings a chill to me."`;
   `It was then...`;
   `Someone was standing in the darkness beyond the entrance to the ruins.`;
   `A human figure...`;
   `A female...`;
   `Her body was giving off heat, glowing redder than red.`;
   `I couldn't see her face.`;
   `I could just see that she was there.`;
   `She was holding her breath in the darkness, staring at me.`;
   Kid`"W-who are you!?"`;
   `She didn't answer.`;
   `She didn't come any closer, but she didn't seem like she was going to run.`;
   `The figure bathed in light looked like she might be a ghost.  `;
   `A ghost...`;
   `A phantom girl...`;
   //??
   Unk(C5A082)`"Hokuto..."`;
   `I heard a tiny voice.`;
   `'Hokuto'...my name...`;
   `Was she calling to me?`;
   //??
   Unk(C5A083)`"Hokuto..."`;
   `Fearfully, I went a little closer.`;
   `The darkness grew deeper.`;
   `And at the same time, the light she gave off grew more brilliant.`;
   `Her outline sprang into view.`;
   `It had to be...`;
   `She was...she was...the ghost...I had seen...`;
   //??
   Unk(C5A084)`"The empty fall sky...Hokuto is calling out...Brings a chill to me."`;

});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
stopBGM();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
hideTextbox();
setChangePerspectiveDirection(FROM_LEFT);
triggerChangePerspectiveAnim();
unSkippableDelay(30);
monoColorOverlay({ interval: 3, color: WHITE });
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
setDialogBoxColor(GREEN);
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `BG04B1`, transition: 26 });
fgload({ id: 1, name: `CO11ADM`, x: 320, useAnim: false });
playBGM({ num: 9, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
clock(`0:20`);
showTextbox();
text(() => {
   Coco(C5A085)`"The empty fall sky...A single cuckoo calls out...Brings a chill to me."`;
   Takeshi`"...Huh?"`;

});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C5A086)`"Hm?"`;
   Takeshi`"What did you just say?"`;
   Coco(C5A087)`"The empty fall sky...A single cuckoo calls out...Brings a chill to me."`;
   Takeshi`"What is that...?"`;
   Takeshi`"Is that some haiku?"`;
   Coco(C5A088)`"Yeah."`;
   Takeshi`"Why a haiku all of a sudden...?"`;

});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C5A089)`"Don't you think it's elegant?"`;
   Takeshi`"Elegant?"`;
   Coco(C5A090)`"Refined, isn't it?"`;
   Takeshi`"Refined?"`;

});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C5A091)`"Japanese people a long time ago suddenly just started one day making up haiku."`;
   Coco(C5A092)`"So, you see..."`;

});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C5A093)`"The haiku helped them to forgot their everyday cares, and gave them lots of graceful and happy, happy feelings."`;
   Takeshi`"Oh, ho...is that so..."`;
   Coco(C5A094)`"Oh, ho! Yes it is!"`;
   Takeshi`"But listen, Coco...it's not once upon time right now, and..."`;
   Takeshi`"You kind of threw me off guard with your haiku-making there."`;

});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C5A095)`"Well I can't help it."`;
   Takeshi`"What do you mean you can't help it?"`;
   Coco(C5A096)`"I wasn't talking to you."`;
   Takeshi`"What?"`;
   Coco(C5A097)`"I was talking to a life-form from another dimension."`;
   Takeshi`"Another—dimension!?"`;

});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C5A098)`"Well, yeah?"`;
   `Apparently Coco was radiating microwaves.`;
   `Oh, my head...my head...`;
   `I could feel my brain starting to melt...and coming out my nose...`;
   `—What!? —Wait a minute!`;
   `My brains couldn't be coming out my nose!`;
   `I rubbed my nose with my finger.`;
   `Something sticky and viscous was stuck to my finger.  It was bright yellow.`;
   Takeshi`"Craaaaaaaaaaaap!!!!!"`;
   Takeshi`"Crap, crap, my brains, my brains, my brains are melting...!!!"`;

});
fgload({ id: 1, name: `CO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C5A099)`"Hee hee heeeee!"`;
   Takeshi`"Shut up, it's not funny, stupid——!"`;
   Takeshi`"It's your fault, it's your fault, that my brains, my brains...."`;
   Coco(C5A100)`"Neeee heee heeee!"`;
   `Coco was stamping her feet, grabbing her belly, and laughing uproariously.`;
   `(Hey.... Actually...)`;

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
   `Thirty minutes before...`;
   Coco(C5A101)`"Hey, Takepyon, Takepyon—"`;
   Coco(C5A102)`"Wake up..."`;
   Coco(C5A103)`"I can't sleeeeep...."`;
   Coco(C5A104)`"Come play with me!!"`;
   `While saying this...`;
   `She was shaking me, grasping my eyelids and dropping in 'Mermaid Tears,' and squirting mustard up my nose.`;
   `Unable to withstand Coco's brutal attacks, I meekly went along with her request.`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `BG04B1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `Which meant...this wasn't brains...`;
   Takeshi`"It's mustard."`;

});
playSFX({ name: `SE02_03`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   Coco(C5A105)`"Bwaahaaa hya hya hya hya."`;
   `Coco toppled over right into a puddle.`;
   `Splashing the water around, she kept laughing and rolling back and forth.`;
   Takeshi`"Damn it!!"`;
   Takeshi`"Coco, don't you have a tissue?"`;

});
fgload({ id: 1, name: `CO09AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C5A106)`"I have a ha, a ha, ha ha-handkerchief!"`;
   `She pulled a handkerchief out of her pocket and fluttered it at me.`;
   `The handkerchief was soaked, and drops of water dripped from it.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `I blew my nose into it mightily.`;
   `I blew until I blew out everything there was to blow.`;
   Takeshi`"Whew, that's better."`;
   `I balled it up and gave it back to Coco.`;
   `She carefully folded it up and put it back in her pocket.`;
   `I thought - 'You're actually putting that back!?' - but held my tongue.`;
   Takeshi`"...So? ...What were we talking about?"`;

});
fgload({ id: 1, name: `CO01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C5A107)`"About inchworm inching, inching!"`;
   Takeshi`"No we weren't!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Coco(C5A108)`"Inchworm, inchworm, inchy inchy inchworm?"`;
   Coco(C5A109)`"Inchworm, inchworm, boop boop de boop!"`;
   `Coco began inching along the floor flat on her belly.`;
   `I wouldn't say a word...`;

});
fgload({ id: 1, name: `CO01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C5A110)`"Hey Takepyon, Takepyon!"`;
   Takeshi`"I'm not playing inchworm with you!"`;

});
fgload({ id: 1, name: `CO04AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C5A111)`"What!? Why not??"`;
   Takeshi`"I'm just not."`;

});
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE02_03`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   Coco(C5A112)`"No, no, no, no, no, no?"`;
   Coco(C5A113)`"I wanna inchy, I wanna inchywormy!!!"`;
   `Coco splashed at the water.`;
   `(I went through this last night...)`;
   `'There's NO way I'm making the same mistake today' - I swore this to myself..`;
   Takeshi`"I'm going to bed."`;

});
fgload({ id: 1, name: `CO05AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C5A114)`"Whaaat!?"`;
   `She jumped up.`;
   `And clung to me, sopping wet.`;
   Coco(C5A115)`"No! I won't let you sleep!"`;
   Takeshi`"Coco, I'm sleeping whether you let me or not."`;

});
fgload({ id: 1, name: `CO07AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C5A116)`"Why are you being so mean?"`;
   Takeshi`"You're the one being mean, Coco."`;
   Coco(C5A117)`"Oo....Oooo....."`;

});
fgload({ id: 1, name: `CO10AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C5A118)`"Takepyon...Takepyon...is just gonna abandon poor little Coco?"`;
   Coco(C5A119)`"I'll be all alone..."`;
   Coco(C5A120)`"Lonely...so lonely..."`;
   Takeshi`"Why are you being like this??"`;
   Takeshi`"Why don't you come sleep too?"`;

});
fgload({ id: 1, name: `CO01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C5A121)`"With you?"`;
   Coco(C5A122)`"You'll come snuggle with me?"`;
   Takeshi`"........."`;
   Coco`"........."`;
   Takeshi`"....................."`;
   Coco`"....................."`;
   Takeshi`"I don't think so."`;

});
fgload({ id: 1, name: `CO06AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C5A123)`"Well, well, at least, will you sing me a lullaby?"`;
   Takeshi`"A lullaby?"`;
   Takeshi`"Oh, you mean...that one you sang before?"`;

});
fgload({ id: 1, name: `CO02AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C5A124)`"Yeah!"`;
   Takeshi`"Well, I don't mind singing, but..."`;
   Takeshi`"I don't remember the words or the tune."`;

});
fgload({ id: 1, name: `CO01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C5A125)`"That's okay."`;
   Coco(C5A126)`"It's easy, you'll learn it right away."`;

});
stopBGM();
showTextbox();
text(() => {
   `And saying that...`;
   `She burst into song abruptly.`;

});
fgload({ id: 1, name: `CO02AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C5A127)`"Moon sprite shouldering a long bow."`;
   Coco(C5A128)`"Waiting inside a dream."`;

});
playBGM({ num: 22, volume: 100 });
showTextbox();
text(() => {
   Coco(C5A129)`"Tonight a story by moonlight."`;
   Coco(C5A130)`"Hoping the wait will be short."`;
   Coco(C5A131)`"Sleeping curled and snug"`;
   Coco(C5A132)`"Sleeping in mother's arms."`;

});
showTextbox();
text(() => {
   Coco(C5A133)`"Water sprite lifting a pair of paddles."`;
   Coco(C5A134)`"Waiting inside a dream."`;
   Coco(C5A135)`"Tonight the whirlpool demon, waiting for a boat"`;
   Coco(C5A136)`"Hoping the wait will be short"`;
   Coco(C5A137)`"Rock, rock, rocked to sleep."`;
   Coco(C5A138)`"Sleeping, sleeping held by the ocean."`;

});
hideTextbox();
delay({ interval: 60 });
showTextbox();
text(() => {
   `What was it...?`;
   `As soon as I heard Coco's lullaby, I felt a wondrous tranquility.`;
   `I felt a tickle in my chest, like someone had blown lightly on me.`;
   `This breath blew away all the dust and dirt that had built up inside me, and revealing precious feelings I had thought lost long ago.`;
   `Precious wonder...like the vastness of the sky, as it seemed to me when I was a little child, or the deep blue waves, or the fragrance at twilight...`;
   `Back then I thought the ocean went on forever, and I was transfixed by the perfect beauty of the moon.`;
   `For better or for worse, a delightfully sweet time...`;
   `Coco's lullaby called up a sentimental mood in me.`;
   `Lost in its sweet fragrance, I made the mistake of drowning in it.`;
   Takeshi`"What a good song..."`;
   Coco(C5A139)`"Yuh-huh."`;
   Takeshi`"What's it called?"`;

});
fgload({ id: 1, name: `CO01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C5A140)`"Who knows? I don't know its name..."`;
   Coco(C5A141)`"But I just call it the Moon and Ocean Lullaby."`;
   Takeshi`"Moon and ocean?"`;
   Takeshi`"But don't the verses start, 'Moon sprite,' and 'Water sprite'?"`;
   Coco(C5A142)`"Mm-hmmm."`;
   Takeshi`"So shouldn't it be the Moon and Water Lullaby?"`;
   Coco(C5A143)`"Ummm..."`;
   Coco(C5A144)`"But at the end of the second verse it says, 'held by the ocean,' right?"`;
   Takeshi`"Oh, that's true..."`;
   Coco(C5A145)`"And...my mommy taught me this lullaby..."`;
   Coco(C5A146)`"So it's called 'The Moon and Ocean Lullaby'."`;
   Takeshi`"What??"`;
   `What's the connection between your mom and the moon and ocean?`;
   `—Wait!!!`;
   `Mommy!? Moon, and sea!?`;
   `Did that mean...`;
   Takeshi`"When you say Mommy..."`;
   Coco(C5A147)`"Right. Tsugumi."`;
   Coco(C5A148)`"Tsugumi..."`;

});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
removeFG({ id: 1, useAnim: false });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
hideTextbox();
setChangePerspectiveDirection(FROM_RIGHT);
triggerChangePerspectiveAnim();
unSkippableDelay(30);
monoColorOverlay({ interval: 3, color: WHITE });
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
setDialogBoxColor(BLUE);
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `BG04B1`, transition: 26 });
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
setSceneTitle({ index: 114 });
clock(`0:37`);
showTextbox();
text(() => {
   Coco(C5A149)`"She would sing it to me."`;
   Kid`"?Tsugumi!?"`;
   Kid`"But that's crazy?"`;
   Kid`"That's impossible!"`;
   Kid`"But...no one knows that lullaby except Sara and me..."`;

});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C5A150)`"Ha, ha, ha, ha, ha."`;
   Kid`"Why? Why are you laughing?"`;

});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C5A151)`"Hokutan? Don't you think it's strange, what you're saying?"`;
   Kid`"What!?"`;
   Coco(C5A152)`"Right now, you're a little confused."`;
   Coco(C5A153)`"So you showed your true self for a minute."`;
   Coco(C5A154)`"The real you decided to poke his face out for a teensy weensy second."`;
   Kid`"???"`;
   Coco(C5A155)`"Listen, Hokutan - think about it."`;
   Coco(C5A156)`"It's not really that strange for Tsugumi to know that lullaby, right?"`;
   Coco(C5A157)`"Mayo could have just taught it to Tsugumi, right?"`;
   Coco(C5A158)`"And then Tsugumi taught it to me..."`;
   Kid`"That's not possible!"`;
   Coco(C5A159)`"What makes you say that?"`;
   Kid`"Because...because..."`;
   Coco(C5A160)`"Maybe you can't answer that?"`;
   Kid`"........."`;
   Coco(C5A161)`"Well then I'll just answer for you."`;
   Coco(C5A162)`"You see, Hokutan - you know that Mayo doesn't exist in the world I live in."`;
   Coco(C5A163)`"That's why you just said, 'no way'?"`;
   Coco(C5A164)`"And that's the reason you thought that there was no way that Tsugumi could know that song."`;
   Coco(C5A165)`"Right?"`;
   Kid`"Wha—what?  What!?"`;
   Coco(C5A166)`"It's okay, you don't have to be scared!"`;
   Coco(C5A167)`"Just be honest with your feelings, okay?"`;
   Coco(C5A168)`"There's no more reason for you to lie anymore."`;
   `I was getting more and more confused.`;
   `I was being gobbled up by one problem after another, being chewed up for sport, and I felt like I was losing myself.`;
   `I squeezed my eyes shut, took a big breath, and tried to maintain a grip on reality.`;
   `I opened my eyes, stared at Coco, and asked,`;
   Kid`"Um...'the world you live in'...what does that mean?"`;

});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C5A169)`"See now, there you go, lying again—"`;

});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C5A170)`"You know aaaaall about the world I'm in."`;
   Coco(C5A171)`"Mayo's not there, and Tsugumi got hurt, and there's another you with a different face..."`;
   Coco(C5A172)`"You know ALL that stuff."`;
   `The world Coco's in...`;
   `Another self...`;
   `Tsugumi injured...`;
   `Where there was no Sara...`;
   `What?? A world without Sara??`;
   Kid`"That's right! Hang on! Why do you know about Sara!?"`;

});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C5A173)`"Hm? Are you fiiiinally ready to come clean, hmmm?"`;
   Coco(C5A174)`"Okay then, I'll tell you."`;

});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C5A175)`"It's because...I know everything."`;
   Coco(C5A176)`"I know everything, so I know about Mayo."`;
   Coco(C5A177)`"And the reason for that is...I have ESP."`;

});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C5A178)`"He hee hee hee!"`;
   Kid`"Stop trying to mess with me!"`;
   Coco(C5A179)`"I'm not...it's true!!"`;

});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C5A180)`"Okay, lemme ask you a question then. Okay, Hokutan, how come you know about me? Why DID you know about me?"`;
   Coco(C5A181)`"That first time, when we met in the decompression chamber, you said my name, didn't you? And why would that be?"`;
   Kid`"It was...sort of like a premonition, an insight..."`;
   Coco(C5A182)`"Uh-hunh."`;
   Coco(C5A183)`"Well, what about Pipi?"`;
   Kid`"?What?"`;
   Coco(C5A184)`"You know about Pipi, don't you, Hokutan?"`;
   Kid`"No, I have no idea..."`;

});
fgload({ id: 1, name: `CO12ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C5A185)`"Oh? That's funny..."`;

});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C5A186)`"Well, Pipi is this little kitten I have."`;
   Kid`"?Cat!?!"`;

});
fgload({ id: 1, name: `CO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C5A187)`"Nyahaaaah haaaaaa!!"`;
   Coco(C5A188)`"Gotcha, I gotcha, you fell for it!!!"`;

});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C5A189)`"When I said kitten just then, you did a double take! Right!?"`;

});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C5A190)`"Why would that surprise you? Hm?"`;
   Kid`"........."`;
   Coco(C5A191)`"Because you know that Pipi is really a dog!  That's why!"`;
   Kid`"........."`;
   Coco(C5A192)`"Stop acting. And stop playing dumb."`;
   Coco(C5A193)`"You've known about my world aaallll along."`;
   Coco(C5A194)`"That's why you know everything."`;
   Coco(C5A195)`"Tief Blau virus...Cure virus...IBF...Pygmalion...the terabyte disk..."`;
   Coco(C5A196)`"All of them, all of them! You've heard all of those words before, haven't you!?"`;
   Kid`"........."`;
   Coco(C5A197)`"And this, this, I bet you remember this..."`;
   Coco(C5A198)`"How you and Mayo escaped from 102 feet deep down under the sea..."`;
   Coco(C5A199)`"Escaped with Nakkyu using a siphon..."`;
   Coco(C5A200)`"Don't lie and say you forgot. I know you remember."`;
   Kid`"........."`;
   Coco(C5A201)`"I'm the same as you."`;
   Coco(C5A202)`"That's why I know about the world you live in, and the world I live in."`;
   Coco(C5A203)`"So? Do you understand now?"`;
   Kid`"........."`;
   Coco(C5A204)`"I know everything you know."`;
   Coco(C5A205)`"And, and..."`;
   Coco(C5A206)`"I know some things that you don't know yet."`;
   Coco(C5A207)`"Things you don't know yet means...things you will come to know later."`;
   Kid`"........."`;
   Coco(C5A208)`"But..."`;

});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C5A209)`"Maybe I'm telling you way too much stuff, so your mind is getting all mixed up."`;

});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C5A210)`"But I can tell you this, you'll understand it one day..."`;
   Coco(C5A211)`"So...I'll say it again..."`;
   Coco(C5A212)`"No matter what, don't lie to yourself."`;
   Coco(C5A213)`"Okay? Understand?"`;
   Kid`"I don't...I don't underst - of course I don't understand!!!"`;

});
fgload({ id: 1, name: `CO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C5A214)`"*sigh*...Here we go again..."`;
   Kid`"Coco— Coco...what are you?"`;
   Kid`"Why did you suddenly appear in front of me!?"`;

});
hideTextbox();
fgload({ id: 1, name: `CO13ADM`, x: 320, useAnim: true });
delay({ interval: 90 });
fgload({ id: 1, name: `CO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `At those words, Coco's face suddenly clouded over.`;
   `She scrunched up her face and drew her eyebrows together.`;
   `Tears welled up in her eyes.`;
   `She blinked to hide them and spoke quietly.`;
   Coco(C5A215)`"I wanted......to see you."`;
   Coco(C5A216)`"I've been...waiting for you."`;
   Coco(C5A217)`"Waiting and waiting, for you to come..."`;
   Coco(C5A218)`"I wanted to see you...more than anything..."`;
   Coco(C5A219)`"I wanted to see you again..."`;
   Coco(C5A220)`"I've been waiting here by myself...all by myself."`;
   `Coco's words drifted into my heart, and melted like a light snow.`;
   `We gazed at each other without speaking.`;
   `It wasn't what the words said, so much as that she said them at all, that moved me so deeply.`;
   `Before I sought their meaning, I let the simple power of her true feelings flow straight into my trembling heart.`;
   `I couldn't take my eyes off of Coco's sad, tearfilled eyes.`;
   Coco`"........."`;
   Kid`"........."`;

});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Coco laughed softly.`;
   `I could tell it was forced cheer.`;
   `The bravery of that laugh gripped at my heart.`;
   Coco(C5A221)`"I'm sorry, I have to go."`;

});
showTextbox();
text(() => {
   Coco(C5A222)`"We'll be apart again for a little while."`;
   Kid`"What?"`;
   Coco(C5A223)`"Okay, before I go, I'll tell you something pretty juicy."`;
   Coco(C5A224)`"But, I'm pretty sure you've already figured it out..."`;
   Kid`"......?"`;
   Coco(C5A225)`"That dream you saw, it wasn't a dream."`;
   Coco(C5A226)`"It actually happened. Okay?"`;
   Coco(C5A227)`"Don't forget what I just said, all right?"`;
   Kid`"........."`;

});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C5A228)`"See you later, Hokutan."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `The next moment, she was gone.`;
   `Without a sound, just...gone, like a candle snuffed by a wandering night draft...`;
   `And then I lost consciousness.`;

});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
stopBGM();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
hideTextbox();
setChangePerspectiveDirection(FROM_LEFT);
triggerChangePerspectiveAnim();
unSkippableDelay(30);
monoColorOverlay({ interval: 3, color: WHITE });
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
setDialogBoxColor(GREEN);
delay({ interval: 60 });
clock(`8:44`);
showTextbox();
text(() => {
   `I sank down into the darkness for a minute.`;
   `(Pull yourself together, man!)`;
   `I shook my head and gathered my wits.`;

});
playBGM({ num: 9, volume: 100 });
bgload({ name: `EV_CO12A`, transition: 20 });
showTextbox();
text(() => {
   Coco(C5A229)`"It's the Coco's show! First skit - What if a dolphin were salmon roe..."`;
   Coco(C5A230)`"Wow, big load today, tons of salmon!"`;
   Coco(C5A231)`"Let's see, open em up..."`;
   Coco(C5A232)`"Cut...cut..."`;
   Coco(C5A233)`"Whoah, what's this!? Dolphins are pouring out of the salmon! Hundreds of them!"`;
   Coco(C5A234)`"Oh no! Oh no! Mom! Mommy!! Emergency!"`;
   Coco(C5A235)`"Bwahaa haa ha haa!"`;
   Coco(C5A236)`"Hee hee hee hee."`;
   `The reason I had blacked out must have been Coco's microwaves. They got me.`;
   `I still hadn't built up immunity to them.... It was pretty rough.`;
   `Why didn't I ever learn? Why was it that every time I wandered around, my feet kept taking me to her?`;
   `It was strange.`;
   `I wondered if she was drawing me to her with some mysterious frequency.`;
   `Anyway...`;
   `Having finished breakfast, I wandered around LeMU and got sucked in - into the souvenir shops.`;
   Coco(C5A237)`"Coco's jokes - If a dolphin...was a corpse!"`;
   Coco(C5A238)`"Oh, thank you for coming such a long way..."`;
   Coco(C5A239)`"My sincere condolences..."`;
   Coco(C5A240)`"Would you like to see my husband's face?"`;
   Coco(C5A241)`"Oh, well, certainly..."`;
   Coco(C5A242)`"Click. Click."`;
   Coco(C5A243)`"Whoah! An eternally sleeping dolphin! And it's belly-up, too!"`;
   Coco(C5A244)`"'He looks so peaceful...as if he'd jump up any second...' except you couldn't say that, because you wouldn't be able to see his face!!!!"`;
   Coco(C5A245)`"Bwaaa bwaa haaaaa!"`;
   Coco(C5A246)`"Nee hee hee heee!"`;
   `Coco pattered along, shaking a huge dolphin stuffed animal.`;
   `Several smaller stuffed animals were strewn around the carpet.`;
   `From the looks of the empty cabinet nearby, it appeared that she had pulled them all down from their places on the shelf.`;
   `It was such a childish thing to do.`;
   `A child...`;
   `But Coco was 14.`;
   `A 14-year-old who still played with stuffed animals...`;
   `I wondered if it was really alright to let her just grow up like that?`;
   `But when I saw her innocent, laughing face, I didn't have the heart to scold her.`;
   `I supposed she would probably be happiest just being the way she was.`;
   `Coco continued to crack herself up...and I...continued to watch...`;
   `When her amusement died down a little, I called to her.`;
   Takeshi`"Hey, Coco? Where's Pipi?"`;
   Coco(C5A247)`"Pipi? I think he's right over there somewhere..."`;
   `I looked around the kiosk.`;
   Pipi(PIPI_23)`"Wooo...Wooo...Woo...!"`;
   `There.`;
   `Pipi was gripping a stuffed animal's tail in his teeth, shaking it back and forth crazily.`;
   `It was a stuffed lemur doll. He seemed completely engrossed in it.`;
   Coco(C5A248)`"Hey Takepyon, what'cha doin' over there?"`;
   Takeshi`"Hm? What am I doing, huh?"`;
   Takeshi`"You look so happy, that just watching you is making me happy..."`;
   Takeshi`"So I guess you could say that by watching you, I've slipped into a happy, stupid state..."`;
   Coco(C5A249)`"Really?"`;
   Coco(C5A250)`"Takepyon, you're falling in love with me, aren't you?"`;
   Takeshi`"What?"`;
   Coco(C5A251)`"You like me, you like me, don't you!"`;
   Coco(C5A252)`"Wow...I can't believe it...he's finally told me how he feels..."`;
   Coco(C5A253)`"How embarrassing! I'm blushing!"`;
   Coco(C5A254)`"Oh my gosh, oh my gosh! A crush!! What'll I do?"`;
   `—Bam!—Bam!`;
   `Coco balled up her fists and started popping the dolphin's belly with brutal right hooks.`;
   `Punch after punch. Again and again.`;
   `Until the cotton batting started to come out...`;
   Coco(C5A255)`"Well, to thank you..."`;
   Coco(C5A256)`"Shall I tell you a new joke?"`;
   Takeshi`"Aw, no, that's okay..."`;
   Coco(C5A257)`"Why not!? You don't have to be polite!"`;
   Takeshi`"Oh believe me, I'm not being..."`;
   Coco(C5A258)`"Coco's joke about the doctor and the nurse."`;
   `Ignoring my pleas, Coco launched into her joke. `;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
showTextbox();
text(() => {
   `.........`;
   `......`;
   `...`;
   `It was very long.`;
   `It was not funny.`;
   `It was so bad, in fact, that I couldn't even muster a polite chuckle.`;
   `Now I'm going to inflict it on you! It went like this...`;

});
hideTextbox();
showDimOverlay();
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `A nurse named Kate was desperately in love with Robert, a doctor who worked at the same hospital.`;
   `Robert was crazy about Kate, as well.`;
   `Kate stood on the left side of the room and Robert stood on the right.`;
   `Kate slipped out of her white uniform and hung it on the closet door.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Robert stripped his uniform off in a bit of a hurry and simply dropped it on the floor.`;
   `Kate lowered her panties. Robert threw off his boxers.`;
   `Kate's body was lovely and supple and Robert was lean and muscled.`;
   `Kate put on the silk pajamas she had bought for the occasion.`;
   `Still naked, Robert turned off the light.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Standing on the left of the bed, Kate turned slowly to the right.`;
   `On the right of the bed, Robert turned easily to the left...`;
   `And they jumped into the bed, and...slept.`;
   `Oh, by the way, Kate was sleeping in the night duty room, and Robert was sleeping in his room at home.`;
   fadeClearPage();
});
hideTextbox();
monoColorOverlay({ interval: 6, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `"Hey, what's with the face?"`;
   `"Haaa, I bet you were imagining something dirty, weren't you!"`;
   `That was the punch line.`;
   fadeClearPage();
});
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
bgload({ name: `EV_CO12A`, transition: 20 });
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   Coco(C5A259)`"Hee heee he he eh he!"`;
   `Coco's laugh was loud enough to hear across the Pacific Ocean.`;
   `If there were any nuclear submarines nearby, their sonar guy was probably laughing too.`;
   `Even I felt the corners of my mouth twitching.`;
   `Obviously, the joke wasn't funny.`;
   `But Coco, was so amused at the 'unamusing' joke, it was hilarious.`;
   `I thought to myself...`;
   `(All is well...)`;
   `According to what we heard from Sora on the second day, LeMU's partitions would reach their structural limit tomorrow.`;
   `So how was it that I felt so calm?`;
   `Maybe Coco's innocence was contagious...`;
   `I wasn't even tense. I was lounging around.`;
   `If I stayed like this it could be dangerous.`;
   `It was fine for Coco to be innocent, but if I got swept away in it, it could be fatal.`;
   `The thought ran through my head, but as I looked at her smiling face, I couldn't hold on to caution. `;
   `It was too peaceful...`;
   `It was like being in a dream.`;

});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
stopBGM();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
hideTextbox();
setChangePerspectiveDirection(FROM_RIGHT);
triggerChangePerspectiveAnim();
unSkippableDelay(30);
monoColorOverlay({ interval: 3, color: WHITE });
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
setDialogBoxColor(BLUE);
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `IMG06A`, transition: 26 });
playBGM({ num: 14, volume: 100 });
showDimOverlay();
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
setSceneTitle({ index: 115 });
showTextbox();
text(() => {
   `I was in a dream.`;
   `After Coco disappeared, I blacked out.`;
   `Maybe I was still stuck in that state.`;
   `In the dream, I had felt choked and oppressed.`;
   `It was like being plastered up inside thick walls...`;
   `Unable to move, only my eyes could follow the images before me...`;
   `I earnestly followed after the fragments of scenes that unfolded before me.`;
   Coco(C5A225)`"Hokutan, that dream, it wasn't a dream."`;
   Coco(C5A226)`"It actually happened, okay?"`;
   `I thought about it.`;
   `That dream?`;
   `The dream I had on the third day right before I woke up?`;
   Coco(C5A170)`"You know about the world I live in."`;
   Coco(C5A171)`"Mayo's not there, and Tsugumi got hurt, and there's another you with a different face."`;
   `Tsugumi...injured...`;
   `Meaning, it had actually happened?`;
   `But no, it couldn't be...`;
   `The warehouse was still fine...`;
   `And Tsugumi was as perky as ever...`;
   `What could it mean?`;
   Coco(C5A212)`"You absolutely can't lie to yourself, okay?"`;
   `Coco's words ran together.`;
   `The scattered fragments of images began to come together a little, until I could make out a vague outline.`;
   `But I still couldn't see the whole picture at once.`;
   `It was like a freakishly large mural.`;
   `Since I was imprisoned in these walls, there was no way to see the whole thing.`;
   `What to do...?`;
   `Escape from these walls...`;
   `Escape from these walls......`;
   `When I pushed my face out through the wall—`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
dimOff_ac = 0;
closeDimOverlay();
bgload({ name: `BG09A1`, transition: 26 });
stopBGM();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
clock(`9:11`);
delay({ interval: 90 });
showTextbox();
text(() => {
   `—I woke up.`;
   `I was in the infirmary.`;
   `I looked around.`;
   `I was alone.`;

});
bgload({ name: `BG08A1`, transition: 20 });
showTextbox();
text(() => {
   `I ran out of the infirmary and headed toward Dritte stock.`;

});
bgload({ name: `BG26B3R`, transition: 20 });
showTextbox();
text(() => {
   `(If Coco was right, and there really had been an accident, and Tsugumi was injured...)`;
   `In any case, I would find Tsugumi and discover the truth for myself.`;
   `But I didn't know where Tsugumi was.`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `BG15B1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `So I headed first to the Control Room.`;
   `Sora was sure to be there...`;
   `And Sora would know where Tsugumi was.`;
   `I opened the door.`;

});
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
bgload({ name: `BG16A1`, transition: 20 });
showTextbox();
text(() => {
   Kid`"Sora! Where's Tsugumi, right now!?"`;
   `I ran into the room and yelled in a loud voice.`;

});
fgload({ id: 1, name: `SO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sora(C5A260)`"What?"`;
   Sora(C5A261)`"Tsugumi is right here..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Sure enough, there she was.`;
   `Tsugumi, on a chair, looked around at me.`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
playBGM({ num: 13, volume: 100 });
showTextbox();
text(() => {
   Tsugumi(C5A262)`"What happened? Why are you in such a hurry?"`;
   Kid`"I...uh...well..."`;
   Kid`"Tsugumi, look, sorry, but -"`;
   `On the spur of the moment, I lifted up Tsugumi's skirt.`;

});
fgload({ id: 1, name: `TU09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(C5A263)`"Hey! What the—?"`;

});
playSFX({ name: `SE05_01`, a1: 0, volume: 100 });
shakeScreen();
showTextbox();
text(() => {
   `—Smack!`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `A resounding slap...`;
   `But it didn't hurt.`;
   `As a matter of fact, I seemed to have lost all feeling in my entire body.`;
   `Because I had seen...`;
   `On Tsugumi's right thigh...a faint scar...`;
   Kid`"Wha, wha, what is that scar...!?"`;

});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(C5A264)`"Scar?"`;
   Kid`"The scar on your thigh!"`;
   Tsugumi(C5A265)`"This..."`;

});
fgload({ id: 1, name: `TU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(C5A266)`"This is just an old scar..."`;
   Kid`"Old scar!?"`;
   Kid`"From when!?"`;
   Tsugumi(C5A267)`"Oh, a long time ago..."`;
   Tsugumi(C5A268)`"A really, really long time ago."`;
   Kid`"Where? Where did you get hurt?"`;
   Tsugumi(C5A269)`"It was..."`;

});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
stopBGM();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
hideTextbox();
setChangePerspectiveDirection(FROM_LEFT);
triggerChangePerspectiveAnim();
unSkippableDelay(30);
monoColorOverlay({ interval: 3, color: WHITE });
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
setDialogBoxColor(GREEN);
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `EV_TU03A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`3:34`);
showTextbox();
text(() => {
   `I was trapped in a gondola. I couldn't move.`;
   `I couldn't even shift my eyes.`;
   `Past the skirt I was holding, I could see the white of her panties.`;
   `The smooth curve of her thigh.`;
   `Her smooth, silky skin.`;
   `—The scar.`;
   `I had definitely seen a scar there.`;
   `But...`;
   `It looked like something that had healed years ago, leaving only the faintest trace on the skin.`;

});
playBGM({ num: 7, volume: 100 });
bgload({ name: `BG36A1`, transition: 20 });
showTextbox();
text(() => {
   Tsugumi(T5A100)`"Twelve years ago, I was infected by a virus."`;
   Tsugumi(T5A101)`"Because of that virus...the virus..."`;
   Tsugumi(T5A102)`"It rewrote my genetic code."`;
   Tsugumi(T5A103)`"Cells are reborn every day."`;
   Tsugumi(T5A104)`"They are reborn, and then die."`;
   Tsugumi(T5A105)`"Normally, a person's body completely remakes all of its cells every five years."`;
   Tsugumi(T5A106)`"But after I caught the virus when I was twelve, its cells slowly kept dividing..."`;
   Tsugumi(T5A107)`"So that five years later, I had all new cells."`;
   Tsugumi(T5A108)`"In five years, every cell that made up my body had been genetically altered."`;
   Tsugumi(T5A109)`"When the last original cell died?"`;
   Tsugumi(T5A110)`"The self that I had been at 12 disappeared without a trace."`;
   Tsugumi(T5A111)`"In that moment the old me died."`;
   Tsugumi(T5A112)`"The old me died, and the new me had a body that would never die."`;
   Tsugumi(T5A113)`"My immune system and my metabolic rate were improved..."`;
   Tsugumi(T5A114)`"My telomeres began to regenerate themselves..."`;
   Tsugumi(T5A115)`"That's right..."`;
   Tsugumi(T5A116)`"I will never grow old, and never die."`;
   Tsugumi(T5A117)`"My physical growth stopped in that moment in time."`;
   Tsugumi(T5A118)`"I'll never grow older than 17."`;

});
bgload({ name: `IMG01B`, transition: 20 });
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `'The Cure virus.'`;
   `The Cure virus was a type of retro-virus.`;
   `Like many retro-viruses, the Cure virus was not contagious across species.  `;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `When people simply say "the Cure virus," they are actually referring to the human version of the virus.`;
   `There are variants, such as the monkey-specific Cure, the rat-specific Cure...`;
   `But from here on out, we will only be referring to the Human strain.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Retro-viruses turn their host's RNA into DNA by doing a reverse transcriptase, and then re-inject that DNA into the host's genes.`;
   `This means they can directly rewrite the host's blueprint.`;
   `Infected cells, which go on processing proteins as usual, then unwittingly reproduce the virus.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `At the same time, the cells with the rewritten DNA go on to divide and multiply, spreading throughout the body like cancer cells.`;
   `Normally, when cancer cells develop in a body...`;
   `The body repulses them with the 'p53' function located on the 17th chromosome.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `'P53' creates certain enzymes and proteins, and when there has been damage done to a gene...`;
   `It stops replication or causes apoptosis (natural cell death) and works to repair the damaged DNA, thus earning its name 'the anti-cancer gene.'`;
   `The Cure virus mutates this 'p53' gene as well, rendering it useless.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Thus the Cure-infected cells can spread throughout the body uncontested.`;
   `Then, once all the DNA code is rewritten, the host literally becomes a new species.`;
   `A new species - we'll just call it the Cure species here.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `The Cure species body is endowed with the following unique characteristics:`;
   `1.  Self-regeneration of the telomeres.`;
   `2. Great improvement in self-healing.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Telomeres are the base sequence located at either end of a chromosome, and generally become shorter with every replication.`;
   `After a certain number of divisions, the telomere gets so short that the cell can no longer divide.`;
   `So telomeres are like the bus tickets of cell division - once you spend them, they're gone.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `But not the Cure species.`;
   `This new body produces an enzyme called telomerase, which allows unlimited recycling of the 'bus tickets' that normally would already have been spent.`;
   `This allows for almost endless cell division to continue, thereby eliminating aging and weakening.`;
   `Having said all that, this is not a particularly unusual phenomenon.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `It happens every day in normal reproductive cells, and even in most cancer cells, there is rarely a shortage of telomeres.`;
   `In that sense, it is not impossible to say that the Cure virus 'turns every cell in the body cancerous.'`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `On the other hand, there is no similarly tangible mechanism yet in place for dealing with the process of self-healing.`;
   `But the metabolism is activated and the rate of cell generation is greatly increased...`;
   `And it is believed that this is what so dramatically shortens the time required to heal after an illness or injury.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Actually, there is one more distinguishing characteristic of the Cure species.`;
   `Which is 'Infrared vision.'`;
   `Because in its production it lost the faculties of 'p53,' Cure species possess a constitution extremely vulnerable to ultraviolet rays.`;
   `The DNA cells in the skin quickly are damaged or grow malignant when exposed to the sun for any duration.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `In a normal human, thanks to the 'anti-cancer' gene, damaged DNA is let die or repaired...`;
   `But the Cure species cannot do this.`;
   `It was possible to use another gene to produce an enzyme to perform the same function as 'p53,' but alas, this solution proved to be limited.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Therefore, Cure species are very vulnerable to ultraviolet rays, and can only venture outside at night.`;
   `The infrared-ray vision was developed to make up for this shortcoming.`;
   fadeClearPage();
});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
bgload({ name: `EV_TU03A`, transition: 26 });
hideTextbox();
ADV_Mode();
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   Tsugumi(C5A270)`"I have this unique ability."`;
   `Having finished her long talk on the Cure virus, Tsugumi brought this up.`;
   Tsugumi(C5A271)`"Without touching something, I can 'see' its temperature."`;
   Tsugumi(C5A272)`"Infrared vision...is also called infravision..."`;
   Takeshi`"So, on the second day , when you stood in front of the power generation room and knew that it was too hot, that was because of your infrared vision?" `;
   Tsugumi(C5A273)`"Yes."`;

});
bgload({ name: `BG36A1`, transition: 20 });
showTextbox();
text(() => {
   Takeshi`"How about that..."`;
   Takeshi`"Infravision...interesting."`;

});
showTextbox();
text(() => {
   Tsugumi(C5A274)`"You don't doubt me?"`;
   `She tilted her head like she was surprised.`;
   Takeshi`"Ah..."`;
   Tsugumi(C5A275)`"You believe all this nonsense I've been telling you?"`;
   Takeshi`"Well, it's an unbelievable story."`;
   Takeshi`"Viruses, DNA, bodies that won't die...it's crazy."`;
   Takeshi`"I can't believe it...but I don't doubt it."`;
   Takeshi`"If you say so, it must be true."`;
   Takeshi`"So, I guess I have to believe it."`;
   `The instant I said that...`;

});
bgload({ name: `EV_TU08A`, transition: 20 });
showTextbox();
text(() => {
   `My body was being pulled.`;
   `It wasn't a brutally strong force, but I couldn't resist.`;
   `It was a natural, flowing movement.`;
   `On the white gondola.`;
   `Tsugumi's body was covering mine.`;
   `I could feel her breath.`;
   `I could feel her pulse.`;
   `I could feel her heat.`;
   `A fragrant smell wafted from her neck.`;
   `The smell of musk.`;
   `A sweet smell...`;
   Tsugumi(C5A276)`"You're kidding, right?"`;
   `She smiled coldly and gazed at me.`;
   Tsugumi(C5A277)`"Don't just say 'I believe' so easily."`;
   Takeshi`"You think it's irresponsible?"`;
   Tsugumi(C5A278)`"It's very irresponsible."`;
   Tsugumi(C5A279)`"How can you believe me? On what basis?"`;
   Takeshi`"None."`;
   Takeshi`"I have absolutely no basis."`;

});
bgload({ name: `EV_TU08B`, transition: 20 });
showTextbox();
text(() => {
   Tsugumi(C5A280)`"You see..."`;
   `Raising an eyebrow, she put her hand on my neck.`;
   Tsugumi(C5A281)`"Will you cut it out already?"`;
   `She gave me a look that turned my spine to ice.`;
   `But her hands were trembling.`;
   `Her coldness was contrived...`;
   Takeshi`"Calm down, Tsugumi."`;
   `I spoke slowly, breathing deliberately.`;
   Takeshi`"First of all, do you really need a reason to trust people?"`;
   Tsugumi`"......"`;
   Takeshi`"If so, then you don't have to trust me.  Doubt me all you want."`;
   Takeshi`"But I believe you. Even if no one else does, I do."`;
   Takeshi`"I accept the truth."`;
   Tsugumi(C5A282)`"But..."`;
   Tsugumi(C5A283)`"There's no reason you should be able to do that..."`;
   Takeshi`"But I can."`;
   Takeshi`"I want to understand you."`;
   Takeshi`"Even if it's hard for me to believe, if it's the truth?"`;
   Tsugumi`"......"`;
   Takeshi`"The scar on your right leg, it's almost healed, right?"`;
   Tsugumi(C5A284)`"Yes..."`;
   Takeshi`"I can't believe it, but that wound is almost healed."`;
   Takeshi`"That's the reality, right?"`;
   Tsugumi(C5A285)`"That's right..."`;
   Takeshi`"Show it to me again."`;
   Takeshi`"I'll accept things as they are."`;

});
bgload({ name: `EV_TU08A`, transition: 20 });
showTextbox();
text(() => {
   Tsugumi(C5A286)`"...You want to see it?"`;
   `She removed her hand.`;
   Tsugumi(C5A287)`"You really want to see?"`;
   `Her voice trembled faintly.`;
   `She was speaking slowly, in control.`;
   Tsugumi(C5A288)`"If you look, you might regret it."`;
   Tsugumi(C5A289)`"If you knew everything..."`;
   Tsugumi(C5A290)`"You might think, that there's no way I could be human..."`;
   Takeshi`"You don't want me to look?"`;
   Takeshi`"If you show me, maybe you'll regret it?"`;
   Tsugumi`"......"`;
   Takeshi`"The fact that you're not answering...was that a stupid question?"`;
   Tsugumi`"......"`;
   Takeshi`"If you don't answer, I'm going to look whether you want me to or not."`;
   Tsugumi(C5A291)`"Don't."`;
   Tsugumi(C5A292)`"Don't decide for me."`;
   Tsugumi(C5A293)`"I didn't say..."`;
   Tsugumi(C5A294)`"I didn't say that I didn't want to show you..."`;

});
bgload({ name: `BG36A1`, transition: 20 });
bgload({ name: `BG36A2`, transition: 20 });
showTextbox();
text(() => {
   `The room slid into darkness.`;

});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   Tsugumi(C5A295)`"Look, then."`;
   Tsugumi(C5A296)`"Don't flinch. Look..."`;
   Tsugumi(C5A297)`"At everything..."`;
   Tsugumi(C5A298)`"I'll show you...only you."`;
   `I heard the sound...`;
   `Of unfastening.`;
   `In the darkness of the gondola.`;
   `In the faint moonlight the deep see shined blue.`;
   `Floating up into the darkness...`;
   `It was...`;
   `A wound. Once etched deeply, but now healed to almost nothing. `;
   `I had to squint to see.`;
   `I might not have known, if I hadn't gently run my fingers over them.`;
   `Scars—`;
   `All over her body, minutely etched, countless scars.`;
   `Tsugumi's shoulders shook with her weeping.`;
   `She cried silently.`;
   `I grasped her shoulders.`;
   `I pulled her to me, fiercely.`;
   `Tears wet the floor.`;
   `Tsugumi cried in my arms, on my breast, like a child.`;
   `I wanted Tsugumi, and she wanted me.`;
   `She accepted all of me, and I accepted all of her.`;
   `We overlapped until we became one.`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   `.........`;
   `......`;
   `...`;

});
bgload({ name: `BG36A2`, transition: 0 });
playBGM({ num: 19, volume: 100 });
showTextbox();
text(() => {
   `My head rested neatly on Tsugumi's legs. She was sitting on her heels.`;
   `I felt the lovely softness of her flesh on the back of my head.`;
   `The gondola had circled the floor many times and was now moving again through the darkness.`;

});
playSFX({ name: `SE10_02`, a1: 1, volume: 100 });
waitForSFX();
playSFX({ name: `SE10_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Click, click...`;
   Takeshi`"What's that?"`;
   `I looked above to see Tsugumi holding something in her hand.`;

});
playSFX({ name: `SE10_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `She was clicking what looked like a pen.`;
   Takeshi`"I think I heard that same sound in front of the Generator Room..."`;
   Tsugumi(C5A299)`"It's an infrared laser."`;
   `She smiled quietly and muttered.`;
   Takeshi`"Wha?"`;
   Tsugumi(C5A300)`"It's convenient to have this."`;
   Tsugumi(C5A301)`"If you have a special ability like mine..."`;
   Takeshi`"Mm-hmm."`;
   Takeshi`"You're basically doing with your body the same thing an infrared night scope camera does, right?"`;
   Takeshi`"If you flash an infrared ray, it makes it easier to see in the dark."`;
   Takeshi`"And since normal people can't see the infrared rays, it just looks dark..."`;
   Takeshi`"But if you have infrared vision, you can see as clearly as you can at high noon..."`;
   `Tsugumi nodded.`;
   Tsugumi(C5A302)`"That's right..."`;
   Tsugumi(C5A303)`"I'm fine no matter how dark it is."`;
   Tsugumi(C5A304)`"Tee hee..."`;
   `Tsugumi giggled as she covered up her bared chest.`;
   `When she laughed, it jiggled me too...`;
   `Right about the time that it stopped...`;
   Tsugumi(C5A305)`"Hey, Takeshi? Can you get up?"`;
   `I sat up as ordered.`;
   Tsugumi(C5A306)`"I'm going to count down from three..."`;
   Tsugumi(C5A307)`"Don't close your eyes the whole time, okay?"`;
   Takeshi`"Huh?"`;
   Tsugumi(C5A308)`"Three, two, one..."`;

});
playSFX({ name: `SE10_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Click.`;
   `There was a sound.`;
   Takeshi`"Hm? What'd you just do?"`;
   `I blinked.`;
   Tsugumi(C5A309)`"I burned an image."`;
   Tsugumi(C5A310)`"I burned an image of you."`;
   Takeshi`"Burned...?"`;
   Tsugumi(C5A311)`"Yup. And burned a pretty good one too."`;
   Tsugumi(C5A312)`"Here..."`;
   `She pointed at her chest.`;
   Tsugumi(C5A313)`"And..."`;

});
bgload({ name: `EV_ET02D`, transition: 20 });
showTextbox();
text(() => {
   Tsugumi(C5A314)`"Here, too, okay?"`;
   Takeshi`"???"`;
   `I couldn't see because of the shadow of her hand.`;
   `She was holding something.`;
   `Something besides the laser...`;
   `In the darkness I heard the sound of a thin chain.`;
   Takeshi`"???"`;
   `I didn't know what it was.`;
   Takeshi`"What do you mean by 'here'? Tell me!"`;
   Tsugumi(C5A315)`"It's a secret."`;
   Tsugumi(C5A316)`"Hmm-hmmm....."`;
   `All she would give me was a mischievous smile.`;

});
l_choice = 0;
jump(`YC5B`);
