g_b0 = 5;
g_b1 = 5;
g_b2 = 5;
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
   marker; sound(`C5A000`); appendText; 
   You`"Fraternal twins—????"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You yelped right next to my ear.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Why are you so surprised about? Didn't I 
tell you?"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU03A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`C5A001`); appendText; 
   You`"Well, yeah, I'd heard that you and Mayo were 
twins but..."`;
   waitForClick; clearText; marker; sound(`C5A002`); appendText; 
   You`"Nothing about fraternal, or identical, or 
anything like that..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh...but, bwahaaa haaaa!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I found myself laughing in spite of myself.`;
   waitForClick; clearText; marker; sound(`C5A003`); appendText; 
   You`"Hm?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You cocked her head.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Well of course we're fraternal twins!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I mean, I'm a guy, and Sara's a girl..."`;
   waitForClick; clearText; marker; sound(`C5A004`); appendText; 
   You`"So?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Mono-zygotic is when one egg is fertilized, 
and then that embryo splits into two."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So both twins have the exact same genetic 
makeup - that's why they're called identical, 
because they look the same, and of course 
they're the same gender."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So, for identical twins, you can't have 
anything other than two girls or two boys."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But, di-zygotic on the other hand...is when 
two different eggs are fertilized by 
different sperm."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So, they're two separate entities from the 
beginning - each with a different genetic 
makeup. That way they may or may not be the 
same gender."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"They may not even look much alike."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"They're basically just like other siblings."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So they're more like siblings who happened 
to be in their mother's body and get born 
about the same time."`;
   waitForClick; clearText; marker; sound(`C5A005`); appendText; 
   You`"Hmmm. I get it..."`;
   waitForClick; clearText; marker; sound(`C5A006`); appendText; 
   You`"So...if a boy and a girl are twins...they 
have to be fraternal, not identical?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Exactly."`;
   waitForClick; clearText; marker; sound(`C5A007`); appendText; 
   You`"Hmmm."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU03C`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`C5A008`); appendText; 
   You`"...so...what were we talking about, again?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You forgot!??"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU03A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`C5A009`); appendText; 
   You`"Um, ummmm well......."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It started when you said something like..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"'So Mayo and you are twins...'"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"'But you aren't any good at computers like 
Mayo is.'"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"'In fact, you've got absolutely no aptitude 
for them. Why is that?'"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"And then I said..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"'Because we're fraternal twins.'"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU03C`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`C5A010`); appendText; 
   You`"Ohh!  Righhht!  I remember now!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You flailed her limbs around on top of the 
ruins.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That's right, You and I were on the top of the 
Lemurian Ruins.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So after all that, do you get it?"`;
   waitForClick; clearText; marker; sound(`C5A011`); appendText; 
   You`"...Huh? Get what?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She paused in her flailing.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"The reason I'm not good at computers."`;
   waitForClick; clearText; marker; sound(`C5A012`); appendText; 
   You`"Oh, that...it's like this, right?"`;
   waitForClick; clearText; marker; sound(`C5A013`); appendText; 
   You`"Because you and Mayo are as different from 
one another as any other siblings..."`;
   waitForClick; clearText; marker; sound(`C5A014`); appendText; 
   You`"Unlike identical twins, your genetic 
strengths, characters, or whatever, are 
completely different."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Right."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I'd say that our 'infrared vision' is the 
only inherited trait that we even share."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Aside from that, I don't think we're very 
much alike."`;
   waitForClick; clearText; marker; sound(`C5A015`); appendText; 
   You`"Hmmm..."`;
   waitForClick; clearText; marker; sound(`C5A016`); appendText; 
   You`"...So...what were we talking about before 
that?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Ah..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I sighed and started explaining.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: WHITE });
bgload({ name: `IMG01B`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But before that, I needed to explain what, 
'You and I were doing there.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`It went back to that afternoon....  (Before I 
knew my real name.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora came out with some information rather 
abruptly.`;
   waitForClick; clearText; marker; sound(`C5A017`); appendText; 
   Sora`"Yoichi Tanaka passed away 17 years ago."`;
   waitForClick; clearText; marker; sound(`C5A018`); appendText; 
   Sora`"Yukie Tanaka passed away 15 years ago as 
well."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Yoichi was You's father, and Yukie was her 
mother.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Both of You's parents had passed away.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was unfortunately a fact that was true.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was proof, including dated mail and 
other files.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had seen them with my own eyes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But You still wasn't convinced.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In her heart she still believed that her 
father was alive.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Of course, regarding her mother, she was even 
more vehement.`;
   waitForClick; clearText; marker; sound(`C5A019`); appendText; 
   You`"But my mother works at LeMU."`;
   waitForClick; clearText; marker; sound(`C5A020`); appendText; 
   You`"We were living together until right before 
all of this happened."`;
   waitForClick; clearText; marker; sound(`C5A021`); appendText; 
   You`"There's no way she died 15 years ago..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was hard to know what to say...but...I 
said this - `;
   waitForClick; clearText; marker; appendText; 
   Kid`"Maybe she wasn't your real mother."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Meaning she might not even be Yukie..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You was shaking her head back and forth as if 
to say, 'Impossible.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`After a while, You spoke as if in a dream.`;
   waitForClick; clearText; marker; sound(`C5A022`); appendText; 
   You`"Aahhh....."`;
   waitForClick; clearText; marker; sound(`C5A023`); appendText; 
   You`"If only I could hack into there..."`;
   waitForClick; clearText; marker; sound(`C5A024`); appendText; 
   You`"Then I could find out details, get the whole 
story..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The 'there' she was pointing at was LeMMIH's 
'High Security Data.' `;
   waitForClick; clearText; marker; appendText; 
   Narr`All afternoon and into the night, she had 
tried to hack her way in, but kept getting 
rejected at the confirmation point.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She knew the password.`;
   waitForClick; clearText; marker; appendText; 
   Narr`"The empty fall sky...A single cuckoo calls 
out...Brings a chill to me."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She kept trying different variations: caps, 
lowercase, different fonts, Latin, German...`;
   waitForClick; clearText; marker; appendText; 
   Narr`She enlisted Sora and Sara's help, and they 
tried every possibility they could think 
of...but all to no avail.`;
   waitForClick; clearText; marker; appendText; 
   Narr`LeMMIH had built a high, impenetrable castle, 
and You was turned back again and again right 
at the gates.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was stricken with frustration and grief...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Finally, exhausted and at a loss, she found 
her way over to the Lemurian Ruins.`;
   waitForClick; clearText; marker; appendText; 
   Narr`..................`;
   waitForClick; clearText; marker; appendText; 
   Narr`By the time I spotted her, she had climbed 
all the way to the top.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I sat down beside her. Neither of us spoke.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But from time to time, You would let out a 
sigh like she had thought of something.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Time passed slowly...`;
   waitForClick; clearText; marker; sound(`C5A025`); appendText; 
   You`"Listen, Kid, you get premonitions, right?"  `;
   waitForClick; clearText; marker; appendText; 
   Narr`After about the 153rd sigh, You suddenly came 
out with this question.`;
   waitForClick; clearText; marker; sound(`C5A026`); appendText; 
   You`"Can you see anything about my parents?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Well, you know ...premonitions...aren't the 
same as seeing into the past..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"And you're talking about 15 and 17 years 
ago..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"When I was only one, or not even born yet.  
Either way, there's no way I can look that 
far into the past."`;
   waitForClick; clearText; marker; sound(`C5A027`); appendText; 
   You`"You are totally useless...."`;
   waitForClick; clearText; marker; sound(`C5A028`); appendText; 
   You`"Even when Sora and Mayo were killing 
themselves helping me, you were just sitting 
there spaced out."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`C5A029`); appendText; 
   You`"Hey, actually..."`;
   waitForClick; clearText; marker; sound(`C5A030`); appendText; 
   You`"You and Mayo are twins, right?"`;
   waitForClick; clearText; marker; sound(`C5A031`); appendText; 
   You`"But you're not good with computers the way 
she is."`;
   waitForClick; clearText; marker; sound(`C5A032`); appendText; 
   You`"In fact, you don't have any aptitude with 
them at all. Why is that?"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 24, color: WHITE });
bgload({ name: `EV_YU03C`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"That's when I answered."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I said 'because we're fraternal twins.'"`;
   waitForClick; clearText; marker; sound(`C5A033`); appendText; 
   You`"Whoah! Banana, banaaaaana!"`;
   waitForClick; clearText; marker; sound(`C5A034`); appendText; 
   You`"I remember now...cow cow cow cow...remember 
ember, cow cow cow now..."`;
   waitForClick; clearText; marker; sound(`C5A035`); appendText; 
   You`"Cow cow cow cow, NOW I rememberember!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You appeared to be malfunctioning.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The harsh reality of things must have been 
too cruel for her to bear...`;
   waitForClick; clearText; marker; appendText; 
   Narr`When Sora first told her, You went hysterical, 
almost crazy, and then burst into a sobbing 
fit like a child.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe she had cried herself out. Because, 
since then, she had seemed much calmer.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But now...`;
   waitForClick; clearText; marker; sound(`C5A036`); appendText; 
   You`"Apo, apo, a pineap-ple?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was in bad shape.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You? Are you okay?"`;
   waitForClick; clearText; marker; sound(`C5A037`); appendText; 
   You`"Wazzat?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Uh, maybe you're a little 
psychologically...strained?"`;
   waitForClick; clearText; marker; sound(`C5A038`); appendText; 
   You`"No waaaay, I'm fine!"`;
   waitForClick; clearText; marker; sound(`C5A039`); appendText; 
   You`"I'm starting over from here."`;
   waitForClick; clearText; marker; sound(`C5A040`); appendText; 
   You`"No point in moping, right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`C5A041`); appendText; 
   You`"Enough about me, how about you, Hokutan?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Ho-Hokutan!?"`;
   waitForClick; clearText; marker; sound(`C5A042`); appendText; 
   You`"Your name's Hokuto, right?...so...Hokutan."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Cut it out, don't call me that."`;
   waitForClick; clearText; marker; sound(`C5A043`); appendText; 
   You`"Why not?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I...still can't think of myself as a 
'Hokuto.'"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"If I was walking down the street and someone 
called out, 'Hokuto!'..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I wouldn't turn around. In fact I don't think 
I COULD."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It wouldn't seem like they were calling out 
to ME..."`;
   waitForClick; clearText; marker; sound(`C5A044`); appendText; 
   You`"Well, even if that's what you think, that's 
just too bad."`;
   waitForClick; clearText; marker; sound(`C5A045`); appendText; 
   You`"Your name is Hokuto until you die, and you're 
just going to have to live with that."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"If nothing else, I don't want you guys here 
to call me Hokuto."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I'm used to being called 'Kid,' and you guys 
are used to it too, right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You can't just switch, in the middle like 
that."`;
   waitForClick; clearText; marker; sound(`C5A046`); appendText; 
   You`"Well, I suppose, but still..."`;
   waitForClick; clearText; marker; sound(`C5A047`); appendText; 
   You`"You really want to stay 'Kid'?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah, that's fine."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had told her how I felt.`;
   waitForClick; clearText; marker; sound(`C5A048`); appendText; 
   You`"You really hate 'Hokuto' that much?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Listen! For the millionth time..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I just don't think that Hokuto is MY name..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It's got nothing to do with liking or 
disliking the name."`;
   waitForClick; clearText; marker; sound(`C5A049`); appendText; 
   You`"Reeeally..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Look, I said this when we were talking about 
Ling Ling and Lang Lang, but..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I really don't care what my name is."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I'm not fussy, and I'm certainly not attached 
to it."`;
   waitForClick; clearText; marker; sound(`C5A050`); appendText; 
   You`"But you can't NOT care at all."`;
   waitForClick; clearText; marker; sound(`C5A051`); appendText; 
   You`"Whether you like it or not, a name is like a 
billboard for who you are."`;
   waitForClick; clearText; marker; sound(`C5A052`); appendText; 
   You`"If you are going to live in society, you'll 
need a name eventually."`;
   waitForClick; clearText; marker; sound(`C5A053`); appendText; 
   You`"I mean, any time that you make a contract, 
or apply for something, or take an exam, or 
get arrested..."`;
   waitForClick; clearText; marker; sound(`C5A054`); appendText; 
   You`"Whatever you say, your name is the most 
important way to verify who you are."`;
   waitForClick; clearText; marker; sound(`C5A055`); appendText; 
   You`"Names are like ID numbers for people."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Identification..."`;
   waitForClick; clearText; 
});
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The word just slipped out.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And then!!!`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU03B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`C5A056`); appendText; 
   You`"What!? What'd you just say!?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You grabbed the back of my head and pulled my 
face toward hers.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Wha-wha-wha-what...?"`;
   waitForClick; clearText; marker; sound(`C5A057`); appendText; 
   You`"Just then! Just now! Now, now, now! Kid, 
what did you just say!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I didn't say anything..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I just repeated back what you were saying..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You leveled a determined glare at me.  `;
   waitForClick; clearText; marker; appendText; 
   Narr`She raised her finger and twirled it like a 
magic wand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She breathed in through her nose.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I waited for her to breathe out, but she kept 
breathing in...and in...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I covered my ears.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She grabbed my hands and pulled them away 
from my ears.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And then...`;
   waitForClick; clearText; marker; appendText; 
   Narr`With all the air she had just sucked in, she 
let loose right next to me.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU03C`, transition: 20 });
playBGM({ num: 18, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`C5A058`); appendText; 
   You`"I've GOT it!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She grinned loosely.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"???"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I just kept blinking at her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And then...`;
   waitForClick; clearText; marker; sound(`C5A059`); appendText; 
   You`"I gawt it, I gawt it, I got it got it got 
it!!!"`;
   waitForClick; clearText; marker; sound(`C5A060`); appendText; 
   You`"I see, I see, I sincerely LOVE you!" Smooooch!`;
   waitForClick; clearText; marker; appendText; 
   Narr`All of a sudden, out of the blue and with no 
warning - she kissed my cheek.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A perfect hit.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was a little...giddy...`;
   waitForClick; clearText; marker; sound(`C5A061`); appendText; 
   You`"Well, hurry up, ask me!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Ask..?"`;
   waitForClick; clearText; marker; sound(`C5A062`); appendText; 
   You`"Come on, ask me, 'Hey, You, what did you 
figure out?'!!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I did as I was told.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey, You, what did you figure out?"`;
   waitForClick; clearText; marker; sound(`C5A063`); appendText; 
   You`"Funny you should ask, Kid!"`;
   waitForClick; clearText; marker; sound(`C5A064`); appendText; 
   You`"You see, you know the reason we couldn't get 
past the confirmation on LeMMIH? I figured 
it out!!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"?"`;
   waitForClick; clearText; marker; sound(`C5A065`); appendText; 
   You`"All this time, we thought we had the password 
wrong.  Right?"`;
   waitForClick; clearText; marker; sound(`C5A066`); appendText; 
   You`"But that wasn't it."`;
   waitForClick; clearText; marker; sound(`C5A067`); appendText; 
   You`"The password is probably fine."`;
   waitForClick; clearText; marker; sound(`C5A068`); appendText; 
   You`"The empty fall sky...A single cuckoo calls 
out...Brings a chill to me."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What do you mean?"`;
   waitForClick; clearText; marker; sound(`C5A069`); appendText; 
   You`"So, it's gotta be this..."`;
   waitForClick; clearText; marker; sound(`C5A070`); appendText; 
   You`"It wasn't the password we had wrong...it was 
the username."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Username?"`;
   waitForClick; clearText; marker; sound(`C5A071`); appendText; 
   You`"Yup."`;
   waitForClick; clearText; marker; sound(`C5A072`); appendText; 
   You`"A name is like an identification number for a 
person...it's what confirms who you are..."`;
   waitForClick; clearText; marker; sound(`C5A073`); appendText; 
   You`"So if we had the name wrong, it wouldn't 
matter how perfectly we put the password in."`;
   waitForClick; clearText; marker; appendText; 
   Narr`"Access denied. Invalid name or password."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had seen that message umpteen times.`;
   waitForClick; clearText; marker; sound(`C5A074`); appendText; 
   You`"If you were right, and the mother I knew 
wasn't really my mother..."`;
   waitForClick; clearText; marker; sound(`C5A075`); appendText; 
   You`"It would mean that her real name wasn't Yukie 
Tanaka."`;
   waitForClick; clearText; marker; sound(`C5A076`); appendText; 
   You`"Which would mean...?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"If you just knew her real name, you could 
clear LeMMIH's confirmation?"`;
   waitForClick; clearText; marker; sound(`C5A077`); appendText; 
   You`"Exactly!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You tapped my forehead.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But...how will you figure out her real name?"`;
   waitForClick; clearText; marker; sound(`C5A078`); appendText; 
   You`"Well..."`;
   waitForClick; clearText; marker; sound(`C5A079`); appendText; 
   You`"Sora ought to know, right?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Before I could say 'Sora?' You had grabbed my 
arms.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A second later...`;
   waitForClick; clearText; marker; sound(`C5A080`); appendText; 
   You`"Aaaaiii!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She jumped down off the ruins with a great cry.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeFG({ id: 1, useAnim: false });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Pulled off balance, I flew clumsily through 
the air.`;
   waitForClick; clearText; 
});
hideTextbox();
bgload({ name: `BG04B1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
playSFX({ name: `SE02_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`—Bam!!`;
   waitForClick; clearText; marker; appendText; 
   Narr`I nearly toppled onto my head, but managed to 
right myself like a cat and landed safely.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My own excellent reflexes impressed me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As for You...`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was sprawled on her belly in a puddle, 
arms and legs spread awkwardly.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You? You! You okay?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`When I called her name, You hopped up.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Water dripped from her hair.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was soaked from head to toe.`;
   waitForClick; clearText; marker; sound(`C5A081`); appendText; 
   You`"Well, don't just stand there, let's go!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She spoke calmly.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE01_00`, a1: 0, volume: 100 });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Flinging off water, she headed toward the exit.`;
   waitForClick; clearText; marker; appendText; 
   Narr`From the back, she looked completely dry.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
stopSFX()
showTextbox();
text(() => {
   marker; appendText; 
   Narr`.........`;
   waitForClick; clearText; marker; appendText; 
   Narr`......`;
   waitForClick; clearText; marker; appendText; 
   Narr`...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I stood for a minute in front of the gates of 
the Lemurian Ruins, just thinking.`;
   waitForClick; clearText; marker; sound(`C5A074`); appendText; 
   You`"If you were right, and the mother I know 
isn't really my mother..."`;
   waitForClick; clearText; marker; sound(`C5A075`); appendText; 
   You`"It means her real name isn't Yukie Tanaka."`;
   waitForClick; clearText; marker; appendText; 
   Narr`So what was her name then...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Name...name...name..`;
   waitForClick; clearText; marker; appendText; 
   Narr`You's real name was Yubiseiakikana...`;
   waitForClick; clearText; 
});
playBGM({ num: 24, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`YubiseiAKIkana...Aki meaning autumn...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Autumn...autumn...autumn...`;
   waitForClick; clearText; marker; appendText; 
   Narr`"The empty fall sky...A single cuckoo calls 
out...Brings a chill to me."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I broke it down by character. 
Empty...Fall...Sky...Single... 
Cuckoo...Calling...Brings...Chill...`;
   waitForClick; clearText; marker; appendText; 
   Narr`A jumble of bits and illogical fragments.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tried to form them into a coherent pattern, 
but they slipped away.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't grasp them.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I couldn't help but feel that I had 
brushed up against another premonition, or at 
least an intuition...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a haiku. Seventeen syllables.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I muttered it out loud.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"The empty fall sky...A single cuckoo calls 
out...Brings a chill to me."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"The empty fall sky...A single cuckoo calls 
out...Brings a chill to me."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was then...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Someone was standing in the darkness beyond 
the entrance to the ruins.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A human figure...`;
   waitForClick; clearText; marker; appendText; 
   Narr`A female...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her body was giving off heat, glowing redder 
than red.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't see her face.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could just see that she was there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was holding her breath in the darkness, 
staring at me.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"W-who are you!?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She didn't answer.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She didn't come any closer, but she didn't 
seem like she was going to run.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The figure bathed in light looked like she 
might be a ghost.  `;
   waitForClick; clearText; marker; appendText; 
   Narr`A ghost...`;
   waitForClick; clearText; marker; appendText; 
   Narr`A phantom girl...`;
   waitForClick; clearText; marker; sound(`C5A082`); appendText; 
   //??
   Unk`"Hokuto..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I heard a tiny voice.`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Hokuto'...my name...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Was she calling to me?`;
   waitForClick; clearText; marker; sound(`C5A083`); appendText; 
   //??
   Unk`"Hokuto..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Fearfully, I went a little closer.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The darkness grew deeper.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And at the same time, the light she gave off 
grew more brilliant.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her outline sprang into view.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It had to be...`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was...she was...the ghost...I had seen...`;
   waitForClick; clearText; marker; sound(`C5A084`); appendText; 
   //??
   Unk`"The empty fall sky...Hokuto is calling 
out...Brings a chill to me."`;
   waitForClick; clearText; 
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
   marker; sound(`C5A085`); appendText; 
   Coco`"The empty fall sky...A single cuckoo calls 
out...Brings a chill to me."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...Huh?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A086`); appendText; 
   Coco`"Hm?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What did you just say?"`;
   waitForClick; clearText; marker; sound(`C5A087`); appendText; 
   Coco`"The empty fall sky...A single cuckoo calls 
out...Brings a chill to me."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What is that...?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Is that some haiku?"`;
   waitForClick; clearText; marker; sound(`C5A088`); appendText; 
   Coco`"Yeah."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Why a haiku all of a sudden...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A089`); appendText; 
   Coco`"Don't you think it's elegant?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Elegant?"`;
   waitForClick; clearText; marker; sound(`C5A090`); appendText; 
   Coco`"Refined, isn't it?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Refined?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A091`); appendText; 
   Coco`"Japanese people a long time ago suddenly just 
started one day making up haiku."`;
   waitForClick; clearText; marker; sound(`C5A092`); appendText; 
   Coco`"So, you see..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A093`); appendText; 
   Coco`"The haiku helped them to forgot their 
everyday cares, and gave them lots of 
graceful and happy, happy feelings."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh, ho...is that so..."`;
   waitForClick; clearText; marker; sound(`C5A094`); appendText; 
   Coco`"Oh, ho! Yes it is!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"But listen, Coco...it's not once upon time 
right now, and..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You kind of threw me off guard with your 
haiku-making there."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A095`); appendText; 
   Coco`"Well I can't help it."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What do you mean you can't help it?"`;
   waitForClick; clearText; marker; sound(`C5A096`); appendText; 
   Coco`"I wasn't talking to you."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What?"`;
   waitForClick; clearText; marker; sound(`C5A097`); appendText; 
   Coco`"I was talking to a life-form from another 
dimension."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Another—dimension!?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A098`); appendText; 
   Coco`"Well, yeah?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Apparently Coco was radiating microwaves.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Oh, my head...my head...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could feel my brain starting to melt...and 
coming out my nose...`;
   waitForClick; clearText; marker; appendText; 
   Narr`—What!? —Wait a minute!`;
   waitForClick; clearText; marker; appendText; 
   Narr`My brains couldn't be coming out my nose!`;
   waitForClick; clearText; marker; appendText; 
   Narr`I rubbed my nose with my finger.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Something sticky and viscous was stuck to my 
finger.  It was bright yellow.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Craaaaaaaaaaaap!!!!!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Crap, crap, my brains, my brains, my brains 
are melting...!!!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A099`); appendText; 
   Coco`"Hee hee heeeee!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Shut up, it's not funny, stupid——!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It's your fault, it's your fault, that my 
brains, my brains...."`;
   waitForClick; clearText; marker; sound(`C5A100`); appendText; 
   Coco`"Neeee heee heeee!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco was stamping her feet, grabbing her 
belly, and laughing uproariously.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Hey.... Actually...)`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`Thirty minutes before...`;
   waitForClick; clearText; marker; sound(`C5A101`); appendText; 
   Coco`"Hey, Takepyon, Takepyon—"`;
   waitForClick; clearText; marker; sound(`C5A102`); appendText; 
   Coco`"Wake up..."`;
   waitForClick; clearText; marker; sound(`C5A103`); appendText; 
   Coco`"I can't sleeeeep...."`;
   waitForClick; clearText; marker; sound(`C5A104`); appendText; 
   Coco`"Come play with me!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`While saying this...`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was shaking me, grasping my eyelids and 
dropping in 'Mermaid Tears,' and squirting 
mustard up my nose.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Unable to withstand Coco's brutal attacks, I 
meekly went along with her request.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `BG04B1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Which meant...this wasn't brains...`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"It's mustard."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE02_03`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`C5A105`); appendText; 
   Coco`"Bwaahaaa hya hya hya hya."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco toppled over right into a puddle.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Splashing the water around, she kept laughing 
and rolling back and forth.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Damn it!!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Coco, don't you have a tissue?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO09AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A106`); appendText; 
   Coco`"I have a ha, a ha, ha ha-handkerchief!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She pulled a handkerchief out of her pocket 
and fluttered it at me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The handkerchief was soaked, and drops of 
water dripped from it.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I blew my nose into it mightily.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I blew until I blew out everything there was 
to blow.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Whew, that's better."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I balled it up and gave it back to Coco.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She carefully folded it up and put it back in 
her pocket.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought - 'You're actually putting that 
back!?' - but held my tongue.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...So? ...What were we talking about?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A107`); appendText; 
   Coco`"About inchworm inching, inching!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"No we weren't!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A108`); appendText; 
   Coco`"Inchworm, inchworm, inchy inchy inchworm?"`;
   waitForClick; clearText; marker; sound(`C5A109`); appendText; 
   Coco`"Inchworm, inchworm, boop boop de boop!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco began inching along the floor flat on her 
belly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wouldn't say a word...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A110`); appendText; 
   Coco`"Hey Takepyon, Takepyon!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'm not playing inchworm with you!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO04AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A111`); appendText; 
   Coco`"What!? Why not??"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'm just not."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE02_03`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`C5A112`); appendText; 
   Coco`"No, no, no, no, no, no?"`;
   waitForClick; clearText; marker; sound(`C5A113`); appendText; 
   Coco`"I wanna inchy, I wanna inchywormy!!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco splashed at the water.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I went through this last night...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`'There's NO way I'm making the same mistake 
today' - I swore this to myself..`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'm going to bed."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO05AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A114`); appendText; 
   Coco`"Whaaat!?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She jumped up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And clung to me, sopping wet.`;
   waitForClick; clearText; marker; sound(`C5A115`); appendText; 
   Coco`"No! I won't let you sleep!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Coco, I'm sleeping whether you let me or not."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO07AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A116`); appendText; 
   Coco`"Why are you being so mean?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You're the one being mean, Coco."`;
   waitForClick; clearText; marker; sound(`C5A117`); appendText; 
   Coco`"Oo....Oooo....."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO10AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A118`); appendText; 
   Coco`"Takepyon...Takepyon...is just gonna abandon 
poor little Coco?"`;
   waitForClick; clearText; marker; sound(`C5A119`); appendText; 
   Coco`"I'll be all alone..."`;
   waitForClick; clearText; marker; sound(`C5A120`); appendText; 
   Coco`"Lonely...so lonely..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Why are you being like this??"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Why don't you come sleep too?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A121`); appendText; 
   Coco`"With you?"`;
   waitForClick; clearText; marker; sound(`C5A122`); appendText; 
   Coco`"You'll come snuggle with me?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Coco`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"....................."`;
   waitForClick; clearText; marker; appendText; 
   Coco`"....................."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I don't think so."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO06AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A123`); appendText; 
   Coco`"Well, well, at least, will you sing me a 
lullaby?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"A lullaby?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh, you mean...that one you sang before?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A124`); appendText; 
   Coco`"Yeah!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, I don't mind singing, but..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I don't remember the words or the tune."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A125`); appendText; 
   Coco`"That's okay."`;
   waitForClick; clearText; marker; sound(`C5A126`); appendText; 
   Coco`"It's easy, you'll learn it right away."`;
   waitForClick; clearText; 
});
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And saying that...`;
   waitForClick; clearText; marker; appendText; 
   Narr`She burst into song abruptly.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A127`); appendText; 
   Coco`"Moon sprite shouldering a long bow."`;
   waitForClick; clearText; marker; sound(`C5A128`); appendText; 
   Coco`"Waiting inside a dream."`;
   waitForClick; clearText; 
});
playBGM({ num: 22, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`C5A129`); appendText; 
   Coco`"Tonight a story by moonlight."`;
   waitForClick; clearText; marker; sound(`C5A130`); appendText; 
   Coco`"Hoping the wait will be short."`;
   waitForClick; clearText; marker; sound(`C5A131`); appendText; 
   Coco`"Sleeping curled and snug"`;
   waitForClick; clearText; marker; sound(`C5A132`); appendText; 
   Coco`"Sleeping in mother's arms."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`C5A133`); appendText; 
   Coco`"Water sprite lifting a pair of paddles."`;
   waitForClick; clearText; marker; sound(`C5A134`); appendText; 
   Coco`"Waiting inside a dream."`;
   waitForClick; clearText; marker; sound(`C5A135`); appendText; 
   Coco`"Tonight the whirlpool demon, 
waiting for a boat"`;
   waitForClick; clearText; marker; sound(`C5A136`); appendText; 
   Coco`"Hoping the wait will be short"`;
   waitForClick; clearText; marker; sound(`C5A137`); appendText; 
   Coco`"Rock, rock, rocked to sleep."`;
   waitForClick; clearText; marker; sound(`C5A138`); appendText; 
   Coco`"Sleeping, sleeping held by the ocean."`;
   waitForClick; clearText; 
});
hideTextbox();
delay({ interval: 60 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`What was it...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`As soon as I heard Coco's lullaby, I felt a 
wondrous tranquility.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt a tickle in my chest, like someone had 
blown lightly on me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`This breath blew away all the dust and dirt 
that had built up inside me, and revealing 
precious feelings I had thought lost long ago.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Precious wonder...like the vastness of the 
sky, as it seemed to me when I was a little 
child, or the deep blue waves, or the 
fragrance at twilight...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Back then I thought the ocean went on 
forever, and I was transfixed by the perfect 
beauty of the moon.`;
   waitForClick; clearText; marker; appendText; 
   Narr`For better or for worse, a delightfully sweet 
time...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco's lullaby called up a sentimental mood 
in me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Lost in its sweet fragrance, I made the 
mistake of drowning in it.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What a good song..."`;
   waitForClick; clearText; marker; sound(`C5A139`); appendText; 
   Coco`"Yuh-huh."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What's it called?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01AWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A140`); appendText; 
   Coco`"Who knows? I don't know its name..."`;
   waitForClick; clearText; marker; sound(`C5A141`); appendText; 
   Coco`"But I just call it the Moon and Ocean 
Lullaby."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Moon and ocean?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"But don't the verses start, 'Moon sprite,' 
and 'Water sprite'?"`;
   waitForClick; clearText; marker; sound(`C5A142`); appendText; 
   Coco`"Mm-hmmm."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"So shouldn't it be the Moon and Water 
Lullaby?"`;
   waitForClick; clearText; marker; sound(`C5A143`); appendText; 
   Coco`"Ummm..."`;
   waitForClick; clearText; marker; sound(`C5A144`); appendText; 
   Coco`"But at the end of the second verse it says, 
'held by the ocean,' right?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh, that's true..."`;
   waitForClick; clearText; marker; sound(`C5A145`); appendText; 
   Coco`"And...my mommy taught me this lullaby..."`;
   waitForClick; clearText; marker; sound(`C5A146`); appendText; 
   Coco`"So it's called 'The Moon and Ocean Lullaby'."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What??"`;
   waitForClick; clearText; marker; appendText; 
   Narr`What's the connection between your mom and 
the moon and ocean?`;
   waitForClick; clearText; marker; appendText; 
   Narr`—Wait!!!`;
   waitForClick; clearText; marker; appendText; 
   Narr`Mommy!? Moon, and sea!?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Did that mean...`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"When you say Mommy..."`;
   waitForClick; clearText; marker; sound(`C5A147`); appendText; 
   Coco`"Right. Tsugumi."`;
   waitForClick; clearText; marker; sound(`C5A148`); appendText; 
   Coco`"Tsugumi..."`;
   waitForClick; clearText; 
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
   marker; sound(`C5A149`); appendText; 
   Coco`"She would sing it to me."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"?Tsugumi!?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But that's crazy?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"That's impossible!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But...no one knows that lullaby except Sara 
and me..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A150`); appendText; 
   Coco`"Ha, ha, ha, ha, ha."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Why? Why are you laughing?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A151`); appendText; 
   Coco`"Hokutan? Don't you think it's strange, what 
you're saying?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What!?"`;
   waitForClick; clearText; marker; sound(`C5A152`); appendText; 
   Coco`"Right now, you're a little confused."`;
   waitForClick; clearText; marker; sound(`C5A153`); appendText; 
   Coco`"So you showed your true self for a minute."`;
   waitForClick; clearText; marker; sound(`C5A154`); appendText; 
   Coco`"The real you decided to poke his face out 
for a teensy weensy second."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"???"`;
   waitForClick; clearText; marker; sound(`C5A155`); appendText; 
   Coco`"Listen, Hokutan - think about it."`;
   waitForClick; clearText; marker; sound(`C5A156`); appendText; 
   Coco`"It's not really that strange for Tsugumi to 
know that lullaby, right?"`;
   waitForClick; clearText; marker; sound(`C5A157`); appendText; 
   Coco`"Mayo could have just taught it to Tsugumi, 
right?"`;
   waitForClick; clearText; marker; sound(`C5A158`); appendText; 
   Coco`"And then Tsugumi taught it to me..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"That's not possible!"`;
   waitForClick; clearText; marker; sound(`C5A159`); appendText; 
   Coco`"What makes you say that?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Because...because..."`;
   waitForClick; clearText; marker; sound(`C5A160`); appendText; 
   Coco`"Maybe you can't answer that?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`C5A161`); appendText; 
   Coco`"Well then I'll just answer for you."`;
   waitForClick; clearText; marker; sound(`C5A162`); appendText; 
   Coco`"You see, Hokutan - you know that Mayo doesn't 
exist in the world I live in."`;
   waitForClick; clearText; marker; sound(`C5A163`); appendText; 
   Coco`"That's why you just said, 'no way'?"`;
   waitForClick; clearText; marker; sound(`C5A164`); appendText; 
   Coco`"And that's the reason you thought that there 
was no way that Tsugumi could know that song."`;
   waitForClick; clearText; marker; sound(`C5A165`); appendText; 
   Coco`"Right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Wha—what?  What!?"`;
   waitForClick; clearText; marker; sound(`C5A166`); appendText; 
   Coco`"It's okay, you don't have to be scared!"`;
   waitForClick; clearText; marker; sound(`C5A167`); appendText; 
   Coco`"Just be honest with your feelings, okay?"`;
   waitForClick; clearText; marker; sound(`C5A168`); appendText; 
   Coco`"There's no more reason for you to lie 
anymore."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was getting more and more confused.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was being gobbled up by one problem after 
another, being chewed up for sport, and I 
felt like I was losing myself.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I squeezed my eyes shut, took a big breath, 
and tried to maintain a grip on reality.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I opened my eyes, stared at Coco, and asked,`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Um...'the world you live in'...what does that 
mean?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A169`); appendText; 
   Coco`"See now, there you go, lying again—"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A170`); appendText; 
   Coco`"You know aaaaall about the world I'm in."`;
   waitForClick; clearText; marker; sound(`C5A171`); appendText; 
   Coco`"Mayo's not there, and Tsugumi got hurt, and 
there's another you with a different face..."`;
   waitForClick; clearText; marker; sound(`C5A172`); appendText; 
   Coco`"You know ALL that stuff."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The world Coco's in...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Another self...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi injured...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Where there was no Sara...`;
   waitForClick; clearText; marker; appendText; 
   Narr`What?? A world without Sara??`;
   waitForClick; clearText; marker; appendText; 
   Kid`"That's right! Hang on! Why do you know 
about Sara!?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A173`); appendText; 
   Coco`"Hm? Are you fiiiinally ready to come clean, 
hmmm?"`;
   waitForClick; clearText; marker; sound(`C5A174`); appendText; 
   Coco`"Okay then, I'll tell you."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A175`); appendText; 
   Coco`"It's because...I know everything."`;
   waitForClick; clearText; marker; sound(`C5A176`); appendText; 
   Coco`"I know everything, so I know about Mayo."`;
   waitForClick; clearText; marker; sound(`C5A177`); appendText; 
   Coco`"And the reason for that is...I have ESP."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A178`); appendText; 
   Coco`"He hee hee hee!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Stop trying to mess with me!"`;
   waitForClick; clearText; marker; sound(`C5A179`); appendText; 
   Coco`"I'm not...it's true!!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A180`); appendText; 
   Coco`"Okay, lemme ask you a question then. Okay, 
Hokutan, how come you know about me? Why DID 
you know about me?"`;
   waitForClick; clearText; marker; sound(`C5A181`); appendText; 
   Coco`"That first time, when we met in the 
decompression chamber, you said my name, 
didn't you? And why would that be?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It was...sort of like a premonition, an 
insight..."`;
   waitForClick; clearText; marker; sound(`C5A182`); appendText; 
   Coco`"Uh-hunh."`;
   waitForClick; clearText; marker; sound(`C5A183`); appendText; 
   Coco`"Well, what about Pipi?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"?What?"`;
   waitForClick; clearText; marker; sound(`C5A184`); appendText; 
   Coco`"You know about Pipi, don't you, Hokutan?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No, I have no idea..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO12ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A185`); appendText; 
   Coco`"Oh? That's funny..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A186`); appendText; 
   Coco`"Well, Pipi is this little kitten I have."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"?Cat!?!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A187`); appendText; 
   Coco`"Nyahaaaah haaaaaa!!"`;
   waitForClick; clearText; marker; sound(`C5A188`); appendText; 
   Coco`"Gotcha, I gotcha, you fell for it!!!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A189`); appendText; 
   Coco`"When I said kitten just then, you did a 
double take! Right!?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A190`); appendText; 
   Coco`"Why would that surprise you? Hm?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`C5A191`); appendText; 
   Coco`"Because you know that Pipi is really a dog!  
That's why!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`C5A192`); appendText; 
   Coco`"Stop acting. And stop playing dumb."`;
   waitForClick; clearText; marker; sound(`C5A193`); appendText; 
   Coco`"You've known about my world aaallll along."`;
   waitForClick; clearText; marker; sound(`C5A194`); appendText; 
   Coco`"That's why you know everything."`;
   waitForClick; clearText; marker; sound(`C5A195`); appendText; 
   Coco`"Tief Blau virus...Cure 
virus...IBF...Pygmalion...the terabyte disk..."`;
   waitForClick; clearText; marker; sound(`C5A196`); appendText; 
   Coco`"All of them, all of them! You've heard all 
of those words before, haven't you!?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`C5A197`); appendText; 
   Coco`"And this, this, I bet you remember this..."`;
   waitForClick; clearText; marker; sound(`C5A198`); appendText; 
   Coco`"How you and Mayo escaped from 102 feet deep 
down under the sea..."`;
   waitForClick; clearText; marker; sound(`C5A199`); appendText; 
   Coco`"Escaped with Nakkyu using a siphon..."`;
   waitForClick; clearText; marker; sound(`C5A200`); appendText; 
   Coco`"Don't lie and say you forgot. I know you 
remember."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`C5A201`); appendText; 
   Coco`"I'm the same as you."`;
   waitForClick; clearText; marker; sound(`C5A202`); appendText; 
   Coco`"That's why I know about the world you live 
in, and the world I live in."`;
   waitForClick; clearText; marker; sound(`C5A203`); appendText; 
   Coco`"So? Do you understand now?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`C5A204`); appendText; 
   Coco`"I know everything you know."`;
   waitForClick; clearText; marker; sound(`C5A205`); appendText; 
   Coco`"And, and..."`;
   waitForClick; clearText; marker; sound(`C5A206`); appendText; 
   Coco`"I know some things that you don't know yet."`;
   waitForClick; clearText; marker; sound(`C5A207`); appendText; 
   Coco`"Things you don't know yet means...things you 
will come to know later."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; sound(`C5A208`); appendText; 
   Coco`"But..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A209`); appendText; 
   Coco`"Maybe I'm telling you way too much stuff, so 
your mind is getting all mixed up."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A210`); appendText; 
   Coco`"But I can tell you this, you'll understand 
it one day..."`;
   waitForClick; clearText; marker; sound(`C5A211`); appendText; 
   Coco`"So...I'll say it again..."`;
   waitForClick; clearText; marker; sound(`C5A212`); appendText; 
   Coco`"No matter what, don't lie to yourself."`;
   waitForClick; clearText; marker; sound(`C5A213`); appendText; 
   Coco`"Okay? Understand?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I don't...I don't underst - of course I don't 
understand!!!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A214`); appendText; 
   Coco`"*sigh*...Here we go again..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Coco— Coco...what are you?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Why did you suddenly appear in front of me!?"`;
   waitForClick; clearText; 
});
hideTextbox();
fgload({ id: 1, name: `CO13ADM`, x: 320, useAnim: true });
delay({ interval: 90 });
fgload({ id: 1, name: `CO10ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`At those words, Coco's face suddenly clouded 
over.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She scrunched up her face and drew her 
eyebrows together.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tears welled up in her eyes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She blinked to hide them and spoke quietly.`;
   waitForClick; clearText; marker; sound(`C5A215`); appendText; 
   Coco`"I wanted......to see you."`;
   waitForClick; clearText; marker; sound(`C5A216`); appendText; 
   Coco`"I've been...waiting for you."`;
   waitForClick; clearText; marker; sound(`C5A217`); appendText; 
   Coco`"Waiting and waiting, for you to come..."`;
   waitForClick; clearText; marker; sound(`C5A218`); appendText; 
   Coco`"I wanted to see you...more than anything..."`;
   waitForClick; clearText; marker; sound(`C5A219`); appendText; 
   Coco`"I wanted to see you again..."`;
   waitForClick; clearText; marker; sound(`C5A220`); appendText; 
   Coco`"I've been waiting here by myself...all by 
myself."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco's words drifted into my heart, and 
melted like a light snow.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We gazed at each other without speaking.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It wasn't what the words said, so much as 
that she said them at all, that moved me so 
deeply.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Before I sought their meaning, I let the 
simple power of her true feelings flow 
straight into my trembling heart.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't take my eyes off of Coco's sad, 
tearfilled eyes.`;
   waitForClick; clearText; marker; appendText; 
   Coco`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Coco laughed softly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could tell it was forced cheer.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The bravery of that laugh gripped at my heart.`;
   waitForClick; clearText; marker; sound(`C5A221`); appendText; 
   Coco`"I'm sorry, I have to go."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`C5A222`); appendText; 
   Coco`"We'll be apart again for a little while."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What?"`;
   waitForClick; clearText; marker; sound(`C5A223`); appendText; 
   Coco`"Okay, before I go, I'll tell you something 
pretty juicy."`;
   waitForClick; clearText; marker; sound(`C5A224`); appendText; 
   Coco`"But, I'm pretty sure you've already figured 
it out..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"......?"`;
   waitForClick; clearText; marker; sound(`C5A225`); appendText; 
   Coco`"That dream you saw, it wasn't a dream."`;
   waitForClick; clearText; marker; sound(`C5A226`); appendText; 
   Coco`"It actually happened. Okay?"`;
   waitForClick; clearText; marker; sound(`C5A227`); appendText; 
   Coco`"Don't forget what I just said, all right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A228`); appendText; 
   Coco`"See you later, Hokutan."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The next moment, she was gone.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Without a sound, just...gone, like a candle 
snuffed by a wandering night draft...`;
   waitForClick; clearText; marker; appendText; 
   Narr`And then I lost consciousness.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`I sank down into the darkness for a minute.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Pull yourself together, man!)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I shook my head and gathered my wits.`;
   waitForClick; clearText; 
});
playBGM({ num: 9, volume: 100 });
bgload({ name: `EV_CO12A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`C5A229`); appendText; 
   Coco`"It's the Coco's show! First skit - What if a 
dolphin were salmon roe..."`;
   waitForClick; clearText; marker; sound(`C5A230`); appendText; 
   Coco`"Wow, big load today, tons of salmon!"`;
   waitForClick; clearText; marker; sound(`C5A231`); appendText; 
   Coco`"Let's see, open em up..."`;
   waitForClick; clearText; marker; sound(`C5A232`); appendText; 
   Coco`"Cut...cut..."`;
   waitForClick; clearText; marker; sound(`C5A233`); appendText; 
   Coco`"Whoah, what's this!? Dolphins are pouring 
out of the salmon! Hundreds of them!"`;
   waitForClick; clearText; marker; sound(`C5A234`); appendText; 
   Coco`"Oh no! Oh no! Mom! Mommy!! Emergency!"`;
   waitForClick; clearText; marker; sound(`C5A235`); appendText; 
   Coco`"Bwahaa haa ha haa!"`;
   waitForClick; clearText; marker; sound(`C5A236`); appendText; 
   Coco`"Hee hee hee hee."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The reason I had blacked out must have been 
Coco's microwaves. They got me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I still hadn't built up immunity to them.... 
It was pretty rough.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Why didn't I ever learn? Why was it that 
every time I wandered around, my feet kept 
taking me to her?`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was strange.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered if she was drawing me to her with 
some mysterious frequency.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Anyway...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Having finished breakfast, I wandered around 
LeMU and got sucked in - into the souvenir 
shops.`;
   waitForClick; clearText; marker; sound(`C5A237`); appendText; 
   Coco`"Coco's jokes - If a dolphin...was a corpse!"`;
   waitForClick; clearText; marker; sound(`C5A238`); appendText; 
   Coco`"Oh, thank you for coming such a long way..."`;
   waitForClick; clearText; marker; sound(`C5A239`); appendText; 
   Coco`"My sincere condolences..."`;
   waitForClick; clearText; marker; sound(`C5A240`); appendText; 
   Coco`"Would you like to see my husband's face?"`;
   waitForClick; clearText; marker; sound(`C5A241`); appendText; 
   Coco`"Oh, well, certainly..."`;
   waitForClick; clearText; marker; sound(`C5A242`); appendText; 
   Coco`"Click. Click."`;
   waitForClick; clearText; marker; sound(`C5A243`); appendText; 
   Coco`"Whoah! An eternally sleeping dolphin! And 
it's belly-up, too!"`;
   waitForClick; clearText; marker; sound(`C5A244`); appendText; 
   Coco`"'He looks so peaceful...as if he'd jump up 
any second...' except you couldn't say that, 
because you wouldn't be able to see his 
face!!!!"`;
   waitForClick; clearText; marker; sound(`C5A245`); appendText; 
   Coco`"Bwaaa bwaa haaaaa!"`;
   waitForClick; clearText; marker; sound(`C5A246`); appendText; 
   Coco`"Nee hee hee heee!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco pattered along, shaking a huge dolphin 
stuffed animal.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Several smaller stuffed animals were strewn 
around the carpet.`;
   waitForClick; clearText; marker; appendText; 
   Narr`From the looks of the empty cabinet nearby, it 
appeared that she had pulled them all down 
from their places on the shelf.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was such a childish thing to do.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A child...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But Coco was 14.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A 14-year-old who still played with stuffed 
animals...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered if it was really alright to let 
her just grow up like that?`;
   waitForClick; clearText; marker; appendText; 
   Narr`But when I saw her innocent, laughing face, I 
didn't have the heart to scold her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I supposed she would probably be happiest 
just being the way she was.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco continued to crack herself up...and 
I...continued to watch...`;
   waitForClick; clearText; marker; appendText; 
   Narr`When her amusement died down a little, I 
called to her.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, Coco? Where's Pipi?"`;
   waitForClick; clearText; marker; sound(`C5A247`); appendText; 
   Coco`"Pipi? I think he's right over there 
somewhere..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked around the kiosk.`;
   waitForClick; clearText; marker; sound(`PIPI_23`); appendText; 
   Pipi`"Wooo...Wooo...Woo...!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`There.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pipi was gripping a stuffed animal's tail in 
his teeth, shaking it back and forth crazily.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a stuffed lemur doll. He seemed 
completely engrossed in it.`;
   waitForClick; clearText; marker; sound(`C5A248`); appendText; 
   Coco`"Hey Takepyon, what'cha doin' over there?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hm? What am I doing, huh?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You look so happy, that just watching you is 
making me happy..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"So I guess you could say that by watching 
you, I've slipped into a happy, stupid 
state..."`;
   waitForClick; clearText; marker; sound(`C5A249`); appendText; 
   Coco`"Really?"`;
   waitForClick; clearText; marker; sound(`C5A250`); appendText; 
   Coco`"Takepyon, you're falling in love with me, 
aren't you?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What?"`;
   waitForClick; clearText; marker; sound(`C5A251`); appendText; 
   Coco`"You like me, you like me, don't you!"`;
   waitForClick; clearText; marker; sound(`C5A252`); appendText; 
   Coco`"Wow...I can't believe it...he's finally told 
me how he feels..."`;
   waitForClick; clearText; marker; sound(`C5A253`); appendText; 
   Coco`"How embarrassing! I'm blushing!"`;
   waitForClick; clearText; marker; sound(`C5A254`); appendText; 
   Coco`"Oh my gosh, oh my gosh! A crush!! What'll I 
do?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`—Bam!—Bam!`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco balled up her fists and started popping 
the dolphin's belly with brutal right hooks.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Punch after punch. Again and again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Until the cotton batting started to come out...`;
   waitForClick; clearText; marker; sound(`C5A255`); appendText; 
   Coco`"Well, to thank you..."`;
   waitForClick; clearText; marker; sound(`C5A256`); appendText; 
   Coco`"Shall I tell you a new joke?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Aw, no, that's okay..."`;
   waitForClick; clearText; marker; sound(`C5A257`); appendText; 
   Coco`"Why not!? You don't have to be polite!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh believe me, I'm not being..."`;
   waitForClick; clearText; marker; sound(`C5A258`); appendText; 
   Coco`"Coco's joke about the doctor and the nurse."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Ignoring my pleas, Coco launched into her 
joke. `;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`.........`;
   waitForClick; clearText; marker; appendText; 
   Narr`......`;
   waitForClick; clearText; marker; appendText; 
   Narr`...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was very long.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was not funny.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was so bad, in fact, that I couldn't even 
muster a polite chuckle.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Now I'm going to inflict it on you! It went 
like this...`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`A nurse named Kate was desperately in love 
with Robert, a doctor who worked at the same 
hospital.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Robert was crazy about Kate, as well.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Kate stood on the left side of the room and 
Robert stood on the right.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Kate slipped out of her white uniform and 
hung it on the closet door.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Robert stripped his uniform off in a bit of a 
hurry and simply dropped it on the floor.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Kate lowered her panties. Robert threw off 
his boxers.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Kate's body was lovely and supple and Robert 
was lean and muscled.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Kate put on the silk pajamas she had bought 
for the occasion.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Still naked, Robert turned off the light.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Standing on the left of the bed, Kate turned 
slowly to the right.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`On the right of the bed, Robert turned easily 
to the left...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`And they jumped into the bed, and...slept.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Oh, by the way, Kate was sleeping in the 
night duty room, and Robert was sleeping in 
his room at home.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`"Hey, what's with the face?"`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`"Haaa, I bet you were imagining something 
dirty, weren't you!"`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`That was the punch line.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
bgload({ name: `EV_CO12A`, transition: 20 });
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; sound(`C5A259`); appendText; 
   Coco`"Hee heee he he eh he!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco's laugh was loud enough to hear across 
the Pacific Ocean.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If there were any nuclear submarines nearby, 
their sonar guy was probably laughing too.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Even I felt the corners of my mouth twitching.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Obviously, the joke wasn't funny.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But Coco, was so amused at the 'unamusing' 
joke, it was hilarious.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought to myself...`;
   waitForClick; clearText; marker; appendText; 
   Narr`(All is well...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`According to what we heard from Sora on the 
second day, LeMU's partitions would reach 
their structural limit tomorrow.`;
   waitForClick; clearText; marker; appendText; 
   Narr`So how was it that I felt so calm?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe Coco's innocence was contagious...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wasn't even tense. I was lounging around.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If I stayed like this it could be dangerous.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was fine for Coco to be innocent, but if I 
got swept away in it, it could be fatal.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The thought ran through my head, but as I 
looked at her smiling face, I couldn't hold 
on to caution. `;
   waitForClick; clearText; marker; appendText; 
   Narr`It was too peaceful...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was like being in a dream.`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`I was in a dream.`;
   waitForClick; clearText; marker; appendText; 
   Narr`After Coco disappeared, I blacked out.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe I was still stuck in that state.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the dream, I had felt choked and oppressed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was like being plastered up inside thick 
walls...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Unable to move, only my eyes could follow the 
images before me...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I earnestly followed after the fragments of 
scenes that unfolded before me.`;
   waitForClick; clearText; marker; sound(`C5A225`); appendText; 
   Coco`"Hokutan, that dream, it wasn't a dream."`;
   waitForClick; clearText; marker; sound(`C5A226`); appendText; 
   Coco`"It actually happened, okay?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought about it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That dream?`;
   waitForClick; clearText; marker; appendText; 
   Narr`The dream I had on the third day right before 
I woke up?`;
   waitForClick; clearText; marker; sound(`C5A170`); appendText; 
   Coco`"You know about the world I live in."`;
   waitForClick; clearText; marker; sound(`C5A171`); appendText; 
   Coco`"Mayo's not there, and Tsugumi got hurt, and 
there's another you with a different face."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi...injured...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Meaning, it had actually happened?`;
   waitForClick; clearText; marker; appendText; 
   Narr`But no, it couldn't be...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The warehouse was still fine...`;
   waitForClick; clearText; marker; appendText; 
   Narr`And Tsugumi was as perky as ever...`;
   waitForClick; clearText; marker; appendText; 
   Narr`What could it mean?`;
   waitForClick; clearText; marker; sound(`C5A212`); appendText; 
   Coco`"You absolutely can't lie to yourself, okay?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco's words ran together.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The scattered fragments of images began to 
come together a little, until I could make 
out a vague outline.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I still couldn't see the whole picture at 
once.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was like a freakishly large mural.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Since I was imprisoned in these walls, there 
was no way to see the whole thing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`What to do...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Escape from these walls...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Escape from these walls......`;
   waitForClick; clearText; marker; appendText; 
   Narr`When I pushed my face out through the wall—`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`—I woke up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was in the infirmary.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked around.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was alone.`;
   waitForClick; clearText; 
});
bgload({ name: `BG08A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I ran out of the infirmary and headed toward 
Dritte stock.`;
   waitForClick; clearText; 
});
bgload({ name: `BG26B3R`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(If Coco was right, and there really had been 
an accident, and Tsugumi was injured...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`In any case, I would find Tsugumi and 
discover the truth for myself.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I didn't know where Tsugumi was.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `BG15B1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`So I headed first to the Control Room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sora was sure to be there...`;
   waitForClick; clearText; marker; appendText; 
   Narr`And Sora would know where Tsugumi was.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I opened the door.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
bgload({ name: `BG16A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Sora! Where's Tsugumi, right now!?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I ran into the room and yelled in a loud voice.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A260`); appendText; 
   Sora`"What?"`;
   waitForClick; clearText; marker; sound(`C5A261`); appendText; 
   Sora`"Tsugumi is right here..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sure enough, there she was.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi, on a chair, looked around at me.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
playBGM({ num: 13, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`C5A262`); appendText; 
   Tsugumi`"What happened? Why are you in such a hurry?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I...uh...well..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Tsugumi, look, sorry, but -"`;
   waitForClick; clearText; marker; appendText; 
   Narr`On the spur of the moment, I lifted up 
Tsugumi's skirt.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU09ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A263`); appendText; 
   Tsugumi`"Hey! What the—?"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE05_01`, a1: 0, volume: 100 });
shakeScreen();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`—Smack!`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`A resounding slap...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But it didn't hurt.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As a matter of fact, I seemed to have lost all 
feeling in my entire body.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Because I had seen...`;
   waitForClick; clearText; marker; appendText; 
   Narr`On Tsugumi's right thigh...a faint scar...`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Wha, wha, what is that scar...!?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A264`); appendText; 
   Tsugumi`"Scar?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"The scar on your thigh!"`;
   waitForClick; clearText; marker; sound(`C5A265`); appendText; 
   Tsugumi`"This..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `TU13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C5A266`); appendText; 
   Tsugumi`"This is just an old scar..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Old scar!?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"From when!?"`;
   waitForClick; clearText; marker; sound(`C5A267`); appendText; 
   Tsugumi`"Oh, a long time ago..."`;
   waitForClick; clearText; marker; sound(`C5A268`); appendText; 
   Tsugumi`"A really, really long time ago."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Where? Where did you get hurt?"`;
   waitForClick; clearText; marker; sound(`C5A269`); appendText; 
   Tsugumi`"It was..."`;
   waitForClick; clearText; 
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
   marker; appendText; 
   Narr`I was trapped in a gondola. I couldn't move.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't even shift my eyes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Past the skirt I was holding, I could see the 
white of her panties.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The smooth curve of her thigh.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her smooth, silky skin.`;
   waitForClick; clearText; marker; appendText; 
   Narr`—The scar.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had definitely seen a scar there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked like something that had healed 
years ago, leaving only the faintest trace on 
the skin.`;
   waitForClick; clearText; 
});
playBGM({ num: 7, volume: 100 });
bgload({ name: `BG36A1`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T5A100`); appendText; 
   Tsugumi`"Twelve years ago, I was infected by a virus."`;
   waitForClick; clearText; marker; sound(`T5A101`); appendText; 
   Tsugumi`"Because of that virus...the virus..."`;
   waitForClick; clearText; marker; sound(`T5A102`); appendText; 
   Tsugumi`"It rewrote my genetic code."`;
   waitForClick; clearText; marker; sound(`T5A103`); appendText; 
   Tsugumi`"Cells are reborn every day."`;
   waitForClick; clearText; marker; sound(`T5A104`); appendText; 
   Tsugumi`"They are reborn, and then die."`;
   waitForClick; clearText; marker; sound(`T5A105`); appendText; 
   Tsugumi`"Normally, a person's body completely remakes 
all of its cells every five years."`;
   waitForClick; clearText; marker; sound(`T5A106`); appendText; 
   Tsugumi`"But after I caught the virus when I was 
twelve, its cells slowly kept dividing..."`;
   waitForClick; clearText; marker; sound(`T5A107`); appendText; 
   Tsugumi`"So that five years later, I had all new 
cells."`;
   waitForClick; clearText; marker; sound(`T5A108`); appendText; 
   Tsugumi`"In five years, every cell that made up my 
body had been genetically altered."`;
   waitForClick; clearText; marker; sound(`T5A109`); appendText; 
   Tsugumi`"When the last original cell died?"`;
   waitForClick; clearText; marker; sound(`T5A110`); appendText; 
   Tsugumi`"The self that I had been at 12 disappeared 
without a trace."`;
   waitForClick; clearText; marker; sound(`T5A111`); appendText; 
   Tsugumi`"In that moment the old me died."`;
   waitForClick; clearText; marker; sound(`T5A112`); appendText; 
   Tsugumi`"The old me died, and the new me had a body 
that would never die."`;
   waitForClick; clearText; marker; sound(`T5A113`); appendText; 
   Tsugumi`"My immune system and my metabolic rate were 
improved..."`;
   waitForClick; clearText; marker; sound(`T5A114`); appendText; 
   Tsugumi`"My telomeres began to regenerate 
themselves..."`;
   waitForClick; clearText; marker; sound(`T5A115`); appendText; 
   Tsugumi`"That's right..."`;
   waitForClick; clearText; marker; sound(`T5A116`); appendText; 
   Tsugumi`"I will never grow old, and never die."`;
   waitForClick; clearText; marker; sound(`T5A117`); appendText; 
   Tsugumi`"My physical growth stopped in that moment in 
time."`;
   waitForClick; clearText; marker; sound(`T5A118`); appendText; 
   Tsugumi`"I'll never grow older than 17."`;
   waitForClick; clearText; 
});
bgload({ name: `IMG01B`, transition: 20 });
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`'The Cure virus.'`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`The Cure virus was a type of retro-virus.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Like many retro-viruses, the Cure virus was 
not contagious across species.  `;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`When people simply say "the Cure virus," they 
are actually referring to the human version 
of the virus.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`There are variants, such as the 
monkey-specific Cure, the rat-specific Cure...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`But from here on out, we will only be 
referring to the Human strain.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Retro-viruses turn their host's RNA into DNA 
by doing a reverse transcriptase, and then 
re-inject that DNA into the host's genes.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`This means they can directly rewrite the 
host's blueprint.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Infected cells, which go on processing 
proteins as usual, then unwittingly reproduce 
the virus.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`At the same time, the cells with the 
rewritten DNA go on to divide and multiply, 
spreading throughout the body like cancer 
cells.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Normally, when cancer cells develop in a 
body...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`The body repulses them with the 'p53' 
function located on the 17th chromosome.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`'P53' creates certain enzymes and proteins, 
and when there has been damage done to a 
gene...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`It stops replication or causes apoptosis 
(natural cell death) and works to repair the 
damaged DNA, thus earning its name 'the 
anti-cancer gene.'`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`The Cure virus mutates this 'p53' gene as 
well, rendering it useless.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Thus the Cure-infected cells can spread 
throughout the body uncontested.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Then, once all the DNA code is rewritten, the 
host literally becomes a new species.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`A new species - we'll just call it the Cure 
species here.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The Cure species body is endowed with the 
following unique characteristics:`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`1.  Self-regeneration of the telomeres.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`2. Great improvement in self-healing.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Telomeres are the base sequence located at 
either end of a chromosome, and generally 
become shorter with every replication.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`After a certain number of divisions, the 
telomere gets so short that the cell can no 
longer divide.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`So telomeres are like the bus tickets of cell 
division - once you spend them, they're gone.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But not the Cure species.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`This new body produces an enzyme called 
telomerase, which allows unlimited recycling 
of the 'bus tickets' that normally would 
already have been spent.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`This allows for almost endless cell division 
to continue, thereby eliminating aging and 
weakening.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Having said all that, this is not a 
particularly unusual phenomenon.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It happens every day in normal reproductive 
cells, and even in most cancer cells, there 
is rarely a shortage of telomeres.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`In that sense, it is not impossible to say 
that the Cure virus 'turns every cell in the 
body cancerous.'`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`On the other hand, there is no similarly 
tangible mechanism yet in place for dealing 
with the process of self-healing.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`But the metabolism is activated and the rate 
of cell generation is greatly increased...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`And it is believed that this is what so 
dramatically shortens the time required to 
heal after an illness or injury.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Actually, there is one more distinguishing 
characteristic of the Cure species.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Which is 'Infrared vision.'`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Because in its production it lost the 
faculties of 'p53,' Cure species possess a 
constitution extremely vulnerable to 
ultraviolet rays.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`The DNA cells in the skin quickly are damaged 
or grow malignant when exposed to the sun for 
any duration.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`In a normal human, thanks to the 'anti-cancer' 
gene, damaged DNA is let die or repaired...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`But the Cure species cannot do this.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`It was possible to use another gene to 
produce an enzyme to perform the same 
function as 'p53,' but alas, this solution 
proved to be limited.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Therefore, Cure species are very vulnerable to 
ultraviolet rays, and can only venture 
outside at night.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`The infrared-ray vision was developed to make 
up for this shortcoming.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
bgload({ name: `EV_TU03A`, transition: 26 });
hideTextbox();
AVL_Mode();
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; sound(`C5A270`); appendText; 
   Tsugumi`"I have this unique ability."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Having finished her long talk on the Cure 
virus, Tsugumi brought this up.`;
   waitForClick; clearText; marker; sound(`C5A271`); appendText; 
   Tsugumi`"Without touching something, I can 'see' its 
temperature."`;
   waitForClick; clearText; marker; sound(`C5A272`); appendText; 
   Tsugumi`"Infrared vision...is also called 
infravision..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"So, on the second day , when you stood in 
front of the power generation room and knew 
that it was too hot, that was because of your 
infrared vision?" `;
   waitForClick; clearText; marker; sound(`C5A273`); appendText; 
   Tsugumi`"Yes."`;
   waitForClick; clearText; 
});
bgload({ name: `BG36A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"How about that..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Infravision...interesting."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`C5A274`); appendText; 
   Tsugumi`"You don't doubt me?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She tilted her head like she was surprised.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Ah..."`;
   waitForClick; clearText; marker; sound(`C5A275`); appendText; 
   Tsugumi`"You believe all this nonsense I've been 
telling you?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, it's an unbelievable story."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Viruses, DNA, bodies that won't die...it's 
crazy."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I can't believe it...but I don't doubt it."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"If you say so, it must be true."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"So, I guess I have to believe it."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The instant I said that...`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU08A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`My body was being pulled.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It wasn't a brutally strong force, but I 
couldn't resist.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a natural, flowing movement.`;
   waitForClick; clearText; marker; appendText; 
   Narr`On the white gondola.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi's body was covering mine.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could feel her breath.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could feel her pulse.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could feel her heat.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A fragrant smell wafted from her neck.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The smell of musk.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A sweet smell...`;
   waitForClick; clearText; marker; sound(`C5A276`); appendText; 
   Tsugumi`"You're kidding, right?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She smiled coldly and gazed at me.`;
   waitForClick; clearText; marker; sound(`C5A277`); appendText; 
   Tsugumi`"Don't just say 'I believe' so easily."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You think it's irresponsible?"`;
   waitForClick; clearText; marker; sound(`C5A278`); appendText; 
   Tsugumi`"It's very irresponsible."`;
   waitForClick; clearText; marker; sound(`C5A279`); appendText; 
   Tsugumi`"How can you believe me? On what basis?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"None."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I have absolutely no basis."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU08B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`C5A280`); appendText; 
   Tsugumi`"You see..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Raising an eyebrow, she put her hand on my 
neck.`;
   waitForClick; clearText; marker; sound(`C5A281`); appendText; 
   Tsugumi`"Will you cut it out already?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She gave me a look that turned my spine to ice.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But her hands were trembling.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her coldness was contrived...`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Calm down, Tsugumi."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I spoke slowly, breathing deliberately.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"First of all, do you really need a reason to 
trust people?"`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"......"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"If so, then you don't have to trust me.  
Doubt me all you want."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"But I believe you. Even if no one else 
does, I do."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I accept the truth."`;
   waitForClick; clearText; marker; sound(`C5A282`); appendText; 
   Tsugumi`"But..."`;
   waitForClick; clearText; marker; sound(`C5A283`); appendText; 
   Tsugumi`"There's no reason you should be able to do 
that..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"But I can."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I want to understand you."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Even if it's hard for me to believe, if it's 
the truth?"`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"......"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"The scar on your right leg, it's almost 
healed, right?"`;
   waitForClick; clearText; marker; sound(`C5A284`); appendText; 
   Tsugumi`"Yes..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I can't believe it, but that wound is almost 
healed."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That's the reality, right?"`;
   waitForClick; clearText; marker; sound(`C5A285`); appendText; 
   Tsugumi`"That's right..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Show it to me again."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I'll accept things as they are."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_TU08A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`C5A286`); appendText; 
   Tsugumi`"...You want to see it?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She removed her hand.`;
   waitForClick; clearText; marker; sound(`C5A287`); appendText; 
   Tsugumi`"You really want to see?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her voice trembled faintly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was speaking slowly, in control.`;
   waitForClick; clearText; marker; sound(`C5A288`); appendText; 
   Tsugumi`"If you look, you might regret it."`;
   waitForClick; clearText; marker; sound(`C5A289`); appendText; 
   Tsugumi`"If you knew everything..."`;
   waitForClick; clearText; marker; sound(`C5A290`); appendText; 
   Tsugumi`"You might think, that there's no way I could 
be human..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You don't want me to look?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"If you show me, maybe you'll regret it?"`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"......"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"The fact that you're not answering...was 
that a stupid question?"`;
   waitForClick; clearText; marker; appendText; 
   Tsugumi`"......"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"If you don't answer, I'm going to look 
whether you want me to or not."`;
   waitForClick; clearText; marker; sound(`C5A291`); appendText; 
   Tsugumi`"Don't."`;
   waitForClick; clearText; marker; sound(`C5A292`); appendText; 
   Tsugumi`"Don't decide for me."`;
   waitForClick; clearText; marker; sound(`C5A293`); appendText; 
   Tsugumi`"I didn't say..."`;
   waitForClick; clearText; marker; sound(`C5A294`); appendText; 
   Tsugumi`"I didn't say that I didn't want to show 
you..."`;
   waitForClick; clearText; 
});
bgload({ name: `BG36A1`, transition: 20 });
bgload({ name: `BG36A2`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The room slid into darkness.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   marker; sound(`C5A295`); appendText; 
   Tsugumi`"Look, then."`;
   waitForClick; clearText; marker; sound(`C5A296`); appendText; 
   Tsugumi`"Don't flinch. Look..."`;
   waitForClick; clearText; marker; sound(`C5A297`); appendText; 
   Tsugumi`"At everything..."`;
   waitForClick; clearText; marker; sound(`C5A298`); appendText; 
   Tsugumi`"I'll show you...only you."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I heard the sound...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Of unfastening.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the darkness of the gondola.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the faint moonlight the deep see shined 
blue.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Floating up into the darkness...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was...`;
   waitForClick; clearText; marker; appendText; 
   Narr`A wound. Once etched deeply, but now healed 
to almost nothing. `;
   waitForClick; clearText; marker; appendText; 
   Narr`I had to squint to see.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I might not have known, if I hadn't gently 
run my fingers over them.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Scars—`;
   waitForClick; clearText; marker; appendText; 
   Narr`All over her body, minutely etched, countless 
scars.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi's shoulders shook with her weeping.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She cried silently.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I grasped her shoulders.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I pulled her to me, fiercely.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tears wet the floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi cried in my arms, on my breast, like 
a child.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wanted Tsugumi, and she wanted me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She accepted all of me, and I accepted all of 
her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We overlapped until we became one.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`.........`;
   waitForClick; clearText; marker; appendText; 
   Narr`......`;
   waitForClick; clearText; marker; appendText; 
   Narr`...`;
   waitForClick; clearText; 
});
bgload({ name: `BG36A2`, transition: 0 });
playBGM({ num: 19, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`My head rested neatly on Tsugumi's legs. She 
was sitting on her heels.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt the lovely softness of her flesh on 
the back of my head.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The gondola had circled the floor many times 
and was now moving again through the darkness.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_02`, a1: 1, volume: 100 });
waitForSFX();
playSFX({ name: `SE10_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Click, click...`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What's that?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked above to see Tsugumi holding 
something in her hand.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She was clicking what looked like a pen.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I think I heard that same sound in front of 
the Generator Room..."`;
   waitForClick; clearText; marker; sound(`C5A299`); appendText; 
   Tsugumi`"It's an infrared laser."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She smiled quietly and muttered.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Wha?"`;
   waitForClick; clearText; marker; sound(`C5A300`); appendText; 
   Tsugumi`"It's convenient to have this."`;
   waitForClick; clearText; marker; sound(`C5A301`); appendText; 
   Tsugumi`"If you have a special ability like mine..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Mm-hmm."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"You're basically doing with your body the 
same thing an infrared night scope camera 
does, right?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"If you flash an infrared ray, it makes it 
easier to see in the dark."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"And since normal people can't see the 
infrared rays, it just looks dark..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"But if you have infrared vision, you can see 
as clearly as you can at high noon..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi nodded.`;
   waitForClick; clearText; marker; sound(`C5A302`); appendText; 
   Tsugumi`"That's right..."`;
   waitForClick; clearText; marker; sound(`C5A303`); appendText; 
   Tsugumi`"I'm fine no matter how dark it is."`;
   waitForClick; clearText; marker; sound(`C5A304`); appendText; 
   Tsugumi`"Tee hee..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi giggled as she covered up her bared 
chest.`;
   waitForClick; clearText; marker; appendText; 
   Narr`When she laughed, it jiggled me too...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Right about the time that it stopped...`;
   waitForClick; clearText; marker; sound(`C5A305`); appendText; 
   Tsugumi`"Hey, Takeshi? Can you get up?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I sat up as ordered.`;
   waitForClick; clearText; marker; sound(`C5A306`); appendText; 
   Tsugumi`"I'm going to count down from three..."`;
   waitForClick; clearText; marker; sound(`C5A307`); appendText; 
   Tsugumi`"Don't close your eyes the whole time, okay?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Huh?"`;
   waitForClick; clearText; marker; sound(`C5A308`); appendText; 
   Tsugumi`"Three, two, one..."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_02`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Click.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was a sound.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hm? What'd you just do?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I blinked.`;
   waitForClick; clearText; marker; sound(`C5A309`); appendText; 
   Tsugumi`"I burned an image."`;
   waitForClick; clearText; marker; sound(`C5A310`); appendText; 
   Tsugumi`"I burned an image of you."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Burned...?"`;
   waitForClick; clearText; marker; sound(`C5A311`); appendText; 
   Tsugumi`"Yup. And burned a pretty good one too."`;
   waitForClick; clearText; marker; sound(`C5A312`); appendText; 
   Tsugumi`"Here..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She pointed at her chest.`;
   waitForClick; clearText; marker; sound(`C5A313`); appendText; 
   Tsugumi`"And..."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_ET02D`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`C5A314`); appendText; 
   Tsugumi`"Here, too, okay?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"???"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't see because of the shadow of her 
hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was holding something.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Something besides the laser...`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the darkness I heard the sound of a thin 
chain.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"???"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know what it was.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What do you mean by 'here'? Tell me!"`;
   waitForClick; clearText; marker; sound(`C5A315`); appendText; 
   Tsugumi`"It's a secret."`;
   waitForClick; clearText; marker; sound(`C5A316`); appendText; 
   Tsugumi`"Hmm-hmmm....."`;
   waitForClick; clearText; marker; appendText; 
   Narr`All she would give me was a mischievous smile.`;
   waitForClick; clearText; 
});
g_b3 = 0;
jump(`YC5B`);
