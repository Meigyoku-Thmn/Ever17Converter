varop(`(28 0a a4) b0 := (00) 5`);
varop(`(28 0a a4) b1 := (00) 4`);
varop(`(28 0a a4) b2 := (00) 4`);
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
stopBGM();
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
bgload({ name: `BG05A3`, transition: 26 });
playBGM({ num: 6, volume: 100 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
setSceneTitle({ index: 110 });
clock(`1:36`);
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"It's raining..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was sitting at the tip of the whale's nose.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara was beside me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She covered her head with her hand, to keep 
the droplets from getting her hair wet .`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `SA08AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A000`); appendText; 
   //Sara
   Sara`"Rain?"`;
   waitForClick; clearText; marker; sound(`C4A001`); appendText; 
   //Sara
   Sara`"You know it's not rain, don't you?" `;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`C4A002`); appendText; 
   //Sara
   Sara`"It's just the whale blowing out water."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I know that."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"I know it, but it looks like it's raining to 
me."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Water, misty and drizzling poured upon us 
from the sky.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The stars reflected lights from the water 
droplets and emitted vibrant colors.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We were in the cosmos.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The whale was alive.`;
   waitForClick; clearText; marker; appendText; 
   Narr`At least it seemed that way to me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A whale swimming in the starry sky.`;
   waitForClick; clearText; marker; appendText; 
   Narr`His back surging like a wave, he undulated 
again and again. `;
   waitForClick; clearText; marker; appendText; 
   Narr`His soft mouth opened and closed, and even 
puffed up time to time.`;
   waitForClick; clearText; marker; appendText; 
   Narr`About every three minutes, he blew out a warm 
breath through his blowhole.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A seawater mist of spray would scatter around 
the area.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sitting at the tip of his nose, Sara and I 
bobbed up and down, in time with his 
movements...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Although, he undulated so slowly that we 
could let go with our hands and still feel 
safe. `;
   waitForClick; clearText; marker; appendText; 
   Narr`It was like a cradle rocking back and forth...`;
   waitForClick; clearText; marker; appendText; 
   Narr`On the back of the whale, we sailed through 
the cosmos.`;
   waitForClick; clearText; 
});
goto(lbl_000001ed).if(var_ef == 1);
fgload({ id: 1, name: `SA05AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A003`); appendText; 
   //Sara
   Sara`"Hey, Kid?"`;
   waitForClick; clearText; marker; sound(`C4A004`); appendText; 
   //Sara
   Sara`"Actually, there's something I've been wanting 
to ask you...." `;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Yeah? What's that?"`;
   waitForClick; clearText; marker; sound(`C4A005`); appendText; 
   //Sara
   Sara`"Kid, you remember when we had a blackout, 
don't you?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Sure."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Yesterday...no, wait, since we already passed 
midnight, I guess, it was the day before 
yesterday, wasn't it?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"You mean the blackout from two days ago, 
right?"`;
   waitForClick; clearText; marker; sound(`C4A006`); appendText; 
   //Sara
   Sara`"Yeah."`;
   waitForClick; clearText; marker; sound(`C4A007`); appendText; 
   //Sara
   Sara`"When Nakkyu tried to open the door to the 
Generator Room...you stopped her, right?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Yeah."`;
   waitForClick; clearText; marker; sound(`C4A008`); appendText; 
   //Sara
   Sara`"How come? Why did you stop her?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I don't really know what to say...."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I said the same thing then, but I thought it 
would be dangerous for her to open the door..."`;
   waitForClick; clearText; marker; sound(`C4A009`); appendText; 
   //Sara
   Sara`"Really? Is that all?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Um...Uh-huh...."`;
   waitForClick; clearText; marker; sound(`C4A010`); appendText; 
   //Sara
   Sara`"How about this, then?"`;
   waitForClick; clearText; marker; sound(`C4A011`); appendText; 
   //Sara
   Sara`"Can you see what's in this?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Saying this, Sara slowly took something out 
of her pocket.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Shick!`;
   waitForClick; clearText; marker; appendText; 
   Narr`A flame appeared from her hand.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SA05A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The whole scene changed in an instant as 
Sara's face lit up in red.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I saw that what Sara had taken out was a 
pendant and a lighter.`;
   waitForClick; clearText; marker; appendText; 
   //Sara
   Sara`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Without saying a word, Sara brought the flame 
and the pendant close in front of my eyes.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_ET02B`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Inside the pendant floated a holographic 
image of a man who I had never seen before.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Who's this?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`When I asked this, Sara's hand began to quiver.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The flame shook.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The large shadow projected on the ceiling 
swayed as well. `;
   waitForClick; clearText; marker; sound(`C4A012`); appendText; 
   //Sara
   Sara`"So..."`;
   waitForClick; clearText; marker; sound(`C4A013`); appendText; 
   //Sara
   Sara`"You can see it, too..."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SA05A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara held the pendant closer and stared at 
the image inside it.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Hey, who's image is that?"`;
   waitForClick; clearText; marker; appendText; 
   //Sara
   Sara`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"You're not going to tell me?"`;
   waitForClick; clearText; marker; appendText; 
   //Sara
   Sara`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara looked up the starry sky.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She stared at the back of the whale first, 
then the pendant held tightly in her hand, 
finally looking slightly upward into my eyes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was a long silence.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara looked as though she might be deep in 
thought, or maybe even thinking nothing at 
all...`;
   waitForClick; clearText; marker; appendText; 
   Narr`All I could hear was regular sound of our 
breathing as it repeated steadily.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And then...`;
   waitForClick; clearText; marker; sound(`C4A014`); appendText; 
   //Sara
   Sara`"He's from the Sun."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara whispered.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"A person from the Sun???"`;
   waitForClick; clearText; marker; sound(`C4A015`); appendText; 
   //Sara
   Sara`"Yeah."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Hey, let me see that?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took the pendant and the lighter from her 
and checked the image again.`;
   waitForClick; clearText; 
});
goto(lbl_00000204);
let lbl_000001ed;
bgload({ name: `EV_SA05A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara took the lighter from her pocket and lit 
it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The shimmering flame colored her face red.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She had the pendant in her other hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The pendant was shaking in Sara's small hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was the same one she had shown me in the 
small room in the warehouse.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Hey, Sara? I'm going to ask you again, 
but...."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Who is the man in the pendant?"`;
   waitForClick; clearText; marker; sound(`C4A016`); appendText; 
   //Sara
   Sara`"And I already told you, right?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"What? That he's from the Sun??"`;
   waitForClick; clearText; marker; sound(`C4A017`); appendText; 
   //Sara
   Sara`"Yep..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She handed me the pendant and the lighter and 
I stared the image closely.`;
   waitForClick; clearText; 
});
goto(lbl_00000204);
let lbl_00000204;
bgload({ name: `EV_ET02B`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It goes without saying, but he seemed to look 
like a normal person.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had no idea how people from the Sun were 
supposed to look, but the man in the image at 
least had the face of an 'earthling.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`He looked like any ordinary, young man to me.`;
   waitForClick; clearText; 
});
goto(lbl_00000235).if(var_ef == 1);
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"Are you serious, he's from the Sun?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I asked her.`;
   waitForClick; clearText; marker; sound(`C4A018`); appendText; 
   //Sara
   Sara`"Ha, ha...you're so gullible, Kid."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"What?"`;
   waitForClick; clearText; marker; sound(`C4A019`); appendText; 
   //Sara
   Sara`"There's no such thing as people on the Sun."`;
   waitForClick; clearText; marker; sound(`C4A020`); appendText; 
   //Sara
   Sara`"Do you honestly think life could exist on 
that ball of fire?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"So, you were lying to me?"`;
   waitForClick; clearText; 
});
goto(lbl_0000023e);
let lbl_00000235;
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"Are you serious, he's from the Sun?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I asked her.`;
   waitForClick; clearText; marker; sound(`C4A018`); appendText; 
   //Sara
   Sara`"Ha, ha...you're so gullible, Kid."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"What?"`;
   waitForClick; clearText; marker; sound(`C4A019`); appendText; 
   //Sara
   Sara`"There's no such thing as people on the sun."`;
   waitForClick; clearText; marker; sound(`C4A020`); appendText; 
   //Sara
   Sara`"Do you honestly think life could exist on 
that ball of fire?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"So, you were lying to me?"`;
   waitForClick; clearText; 
});
goto(lbl_0000023e);
let lbl_0000023e;
showTextbox();
text(() => {
   marker; sound(`C4A021`); appendText; 
   //Sara
   Sara`"I wouldn't call it lying. I was joking with 
you, you know, giving you a hard time."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"What's that supposed to mean?"`;
   waitForClick; clearText; marker; sound(`C4A022`); appendText; 
   //Sara
   Sara`"Well, what do YOU think it means?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`".........?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara stretched out her arm and put out the 
lighter.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Click.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 02 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The darkness spread across the cosmos.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I put the lighter and the pendant together, 
returning them to her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just then, Sara slid down the back of the 
whale without a word.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I hastily followed suit.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG05A1`, transition: 26 });
fgload({ id: 2, name: `SA01AWM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; sound(`C4A023`); appendText; 
   //Sara
   Sara`"You can only see the image when you're 
outside."`;
   waitForClick; clearText; marker; sound(`C4A024`); appendText; 
   //Sara
   Sara`"It's made in a way so that it is only visible 
under sunlight."`;
   waitForClick; clearText; marker; sound(`C4A025`); appendText; 
   //Sara
   Sara`"That's why I said he was a sun person."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara stood next to the whale and started 
talking.`;
   waitForClick; clearText; marker; sound(`C4A026`); appendText; 
   //Sara
   Sara`"When I was young, I really believed it 
though."`;
   waitForClick; clearText; marker; sound(`C4A027`); appendText; 
   //Sara
   Sara`"I used to believe that you can only see it 
with sunlight because it was made by people 
who lived on the sun."`;
   waitForClick; clearText; marker; sound(`C4A028`); appendText; 
   //Sara
   Sara`"And that because I had this pendant, I was 
one of their children...."`;
   waitForClick; clearText; marker; sound(`C4A029`); appendText; 
   //Sara
   Sara`"And that I was sent to earth on some kind of 
mission...I used to imagine stuff like that."`;
   waitForClick; clearText; marker; sound(`C4A030`); appendText; 
   //Sara
   Sara`"Looking back on it now, I know those were 
really just childish fantasies."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Wa-wait a second, Sara."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"We're 103 feet underwater. Where is there any 
sun...?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Shick!`;
   waitForClick; clearText; 
});
makeFGHasYellowAmbient({ id: 1 });
fgload({ id: 1, name: `SA01AWM`, x: 320, useAnim: true });
removeFG({ id: 2, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara interrupted me and lit the lighter.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Light filled the space around us.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The flickering flame....`;
   waitForClick; clearText; marker; appendText; 
   Narr`Despite the insignificant size, a red the 
color of a sunset shone upon the dome-shaped 
ceiling.`;
   waitForClick; clearText; marker; sound(`C4A031`); appendText; 
   //Sara
   Sara`"A flame."`;
   waitForClick; clearText; marker; sound(`C4A032`); appendText; 
   //Sara
   Sara`"Even without the sun, you can see it if 
you've got a lighter."`;
   waitForClick; clearText; marker; sound(`C4A033`); appendText; 
   //Sara
   Sara`"It took me a long time to realize it though."`;
   waitForClick; clearText; marker; sound(`C4A034`); appendText; 
   //Sara
   Sara`"I guess I was 10 or 11, or so...."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Really, sunlight or a flame, huh...?"`;
   waitForClick; clearText; marker; sound(`C4A035`); appendText; 
   //Sara
   Sara`"But still...."`;
   waitForClick; clearText; marker; sound(`C4A036`); appendText; 
   //Sara
   Sara`"Even if there is sunlight, or flame, there 
are some people who can't see it."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"People who can't see it?"`;
   waitForClick; clearText; marker; sound(`C4A037`); appendText; 
   //Sara
   Sara`"Meaning pretty much everybody except me."`;
   waitForClick; clearText; marker; sound(`C4A038`); appendText; 
   //Sara
   Sara`"I'm the only person I've found who can see 
this hologram's image."`;
   waitForClick; clearText; marker; sound(`C4A039`); appendText; 
   //Sara
   Sara`"Well...."`;
   waitForClick; clearText; marker; sound(`C4A040`); appendText; 
   //Sara
   Sara`"I THOUGHT I was the only who could see it."`;
   waitForClick; clearText; 
});
goto(lbl_000002da).if(var_ef == 1);
showTextbox();
text(() => {
   marker; sound(`C4A041`); appendText; 
   //Sara
   Sara`"But now...I guess it seems like there is 
someone else...."`;
   waitForClick; clearText; 
});
goto(lbl_000002e3);
let lbl_000002da;
showTextbox();
text(() => {
   marker; sound(`C4A042`); appendText; 
   //Sara
   Sara`"But you know, I just met someone who can 
also see this image...."`;
   waitForClick; clearText; 
});
goto(lbl_000002e3);
let lbl_000002e3;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara put out the lighter. The darkness came 
rushing back.`;
   waitForClick; clearText; 
});
setFGRenderOrder(4, 1, 2);
fgload({ id: 2, name: `SA01AWM`, x: 320, useAnim: true });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She flicked the light on again, and put it out.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She repeated this action a few times...then 
Sara finally spoke.`;
   waitForClick; clearText; marker; sound(`C4A043`); appendText; 
   //Sara
   Sara`"Kid...."`;
   waitForClick; clearText; marker; sound(`C4A044`); appendText; 
   //Sara
   Sara`"I'm talking about you."`;
   waitForClick; clearText; marker; appendText; 
   Narr`My scar ached.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The old scar on my left thumb....`;
   waitForClick; clearText; marker; sound(`C4A045`); appendText; 
   //Sara
   Sara`"Why is it?"`;
   waitForClick; clearText; marker; sound(`C4A046`); appendText; 
   //Sara
   Sara`"How come you can you see it too, Kid?"`;
   waitForClick; clearText; marker; sound(`C4A047`); appendText; 
   //Sara
   Sara`"Huh? Why do you think?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara looked upward into my eyes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She pushed the pendant and the lighter 
against my chest.`;
   waitForClick; clearText; marker; sound(`C4A048`); appendText; 
   //Sara
   Sara`"Will you look at it again?"`;
   waitForClick; clearText; 
});
removeFG({ id: 2, useAnim: true });
setFGRenderOrder(4, 2, 1);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I took them from her.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_ET02B`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Striking the flame, I looked closer at the 
pendant.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A weak 3D image rose dimly before me...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a man who I hadn't even seen before...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Looking at it this closely, I realized that I 
a piece from the mirror was missing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`"A scar on my thumb"........."A piece to be 
filled in"....`;
   waitForClick; clearText; marker; appendText; 
   Narr`I started to suspect the truth of the matter.`;
   waitForClick; clearText; marker; sound(`C4A049`); appendText; 
   //Sara
   Sara`"Do you remember anything?"`;
   waitForClick; clearText; marker; sound(`C4A050`); appendText; 
   //Sara
   Sara`"Does anything about this ring a bell?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"No, not really...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was starting to realize, but I shook my head.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My scar was itching as if an electric current 
were running through it.`;
   waitForClick; clearText; marker; sound(`C4A051`); appendText; 
   //Sara
   Sara`"Oh...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara dropped her shoulders in disappointment.`;
   waitForClick; clearText; marker; sound(`C4A052`); appendText; 
   //Sara
   Sara`"The man in the image?" `;
   waitForClick; clearText; marker; sound(`C4A053`); appendText; 
   //Sara
   Sara`"I have a feeling...he's my dad."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"...What?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"You think he's your father?"`;
   waitForClick; clearText; marker; sound(`C4A054`); appendText; 
   //Sara
   Sara`"Yeah...."`;
   waitForClick; clearText; marker; sound(`C4A055`); appendText; 
   //Sara
   Sara`"Me and...."`;
   waitForClick; clearText; marker; sound(`C4A056`); appendText; 
   //Sara
   Sara`"My brother's...."`;
   waitForClick; clearText; marker; sound(`C4A057`); appendText; 
   //Sara
   Sara`"Dad...."`;
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
bgload({ name: `BG23A1`, transition: 26 });
fgload({ id: 1, name: `CO04ADM`, x: 320, useAnim: false });
playBGM({ num: 1, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
clock(`1:53`);
showTextbox();
text(() => {
   marker; sound(`C4A058`); appendText; 
   //Coco
   Coco`"Daddy! Daddddyyyy!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`C4A059`); appendText; 
   //Coco
   Coco`"Hey, Daaaaaaad!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`C4A060`); appendText; 
   //Coco
   Coco`"Daddy, why won't you listen to me!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well, let me tell you."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Because I'm NOT your dad that's why."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A061`); appendText; 
   //Coco
   Coco`"I think it's okay for a girl to call someone 
that who reminds them of their dad."`;
   waitForClick; clearText; marker; sound(`C4A062`); appendText; 
   //Coco
   Coco`"It's written in the preamble of the 
constitution, or something."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You don't saaaay...well, I've got three 
things to tell you."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"First: As far as I know, not one line in the 
Japanese constitution corresponds to what you 
just said."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Second: I'm not even close to being fatherly."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Third: You've already got a dad—who is 
still alive and well."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So, stop calling me 'daddy', Coco."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A063`); appendText; 
   //Coco
   Coco`"Oh, c'mon!"`;
   waitForClick; clearText; marker; sound(`C4A064`); appendText; 
   //Coco
   Coco`"I wanna call you Daddy! Come on, can't I?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Forget it."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'm already taking a big hit with this stupid 
nickname 'Takepyon.' Don't make me put up with 
another one like 'daddy' on top of that."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A065`); appendText; 
   //Coco
   Coco`"Oh, you're so mean...Daddy!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I just told you NOT to call me that!"`;
   waitForClick; clearText; marker; sound(`C4A066`); appendText; 
   //Coco
   Coco`"Grr...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco growled as she glared at me.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Grr...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I wasn't going to give in either.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco and I stood face to face, with each 
other on the verge of an outburst.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As we stood there, I just couldn't help 
thinking to myself.`;
   waitForClick; clearText; marker; appendText; 
   Narr`How in the world did I end up in this 
situation...?`;
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
   Narr`It had all happened 30 minutes earlier.`;
   waitForClick; clearText; marker; sound(`C4A067`); appendText; 
   //Coco
   Coco`"Hey, Takepyon, Takepyon."`;
   waitForClick; clearText; marker; sound(`C4A068`); appendText; 
   //Coco
   Coco`"Wake up!"`;
   waitForClick; clearText; marker; sound(`C4A069`); appendText; 
   //Coco
   Coco`"I can't go to sleep!"`;
   waitForClick; clearText; marker; sound(`C4A070`); appendText; 
   //Coco
   Coco`"Let's play or something!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`As she was saying this....`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco shook my body hard, pried open my 
eyelids and poured saltwater into my eyes, 
and even shoved hydrogen peroxide up my nose.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Giving in to her dogged persistence, I 
reluctantly decided to keep her company.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `BG23A1`, transition: 26 });
fgload({ id: 1, name: `CO03ADL`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; sound(`C4A071`); appendText; 
   //Coco
   Coco`"Grr...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco was still growling at me.`;
   waitForClick; clearText; marker; sound(`C4A072`); appendText; 
   //Coco
   Coco`"You're going to let me call you Daddy!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was just being outrageous.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A073`); appendText; 
   //Coco
   Coco`"If you won't, I'm gonna bite you!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A074`); appendText; 
   //Coco
   Coco`"Snap!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco chomped down on my arm.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Ooooouuuch! I can't believe you actually bit 
me!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I forcefully pried her face off of my arm.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`There were teeth marks on my arm, and the area 
started to turn a purplish red. `;
   waitForClick; clearText; marker; sound(`C4A075`); appendText; 
   //Coco
   Coco`"Well believe it!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A076`); appendText; 
   //Coco
   Coco`"Uh, Hee-hee-hee-hee!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco put covered her mouth with her fist and 
giggled triumphantly.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Why on earth do you want to call me 'daddy' 
anyway?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A077`); appendText; 
   //Coco
   Coco`"Because you seem like the daddy type to me."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You are telling me, after you trapped me 
into this, that a 20-year-old guy like me 
seems like the 'daddy type'? You telling me I 
look old?"`;
   waitForClick; clearText; marker; sound(`C4A078`); appendText; 
   //Coco
   Coco`"Nope."`;
   waitForClick; clearText; marker; sound(`C4A079`); appendText; 
   //Coco
   Coco`"I just kind of thought you did somehow."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You just thought I did 'somehow,' huh....?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well then, are you trying to say that your 
dad and I are alike?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A080`); appendText; 
   //Coco
   Coco`"Nope, not at all."`;
   waitForClick; clearText; marker; sound(`C4A081`); appendText; 
   //Coco
   Coco`"My dad is a lot better looking than you. 
Smarter too."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I should have been yelling at her by then, 
but I just couldn't bring myself to get angry 
with her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Because all the while Coco was dancing around 
like crazy, shaking her hips and waving her 
arms in front of me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I guess you could say I was too distracted to 
be angry with her.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"By the way...you said your dad is on a 
'business trip' right now, didn't you?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A082`); appendText; 
   //Coco
   Coco`"Yeah."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Where did he go?"`;
   waitForClick; clearText; marker; sound(`C4A083`); appendText; 
   //Coco
   Coco`"He's at a research laboratory under the 
ocean."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"A research laboratory under the ocean?"`;
   waitForClick; clearText; marker; sound(`C4A084`); appendText; 
   //Coco
   Coco`"There's a research laboratory called EBF or 
something down below LeMU."`;
   waitForClick; clearText; marker; sound(`C4A085`); appendText; 
   //Coco
   Coco`"My dad is a researcher there."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A086`); appendText; 
   //Coco
   Coco`"Oh, but...you've got to keep it a secret, 
okay."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I don't know why, but for some reason it 
didn't surprise me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As a matter of fact, it seemed perfectly 
logical to me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It felt...as if I've already known about it. `;
   waitForClick; clearText; marker; appendText; 
   Narr`It was just a feeling, but....`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Then...you must be worried, right?.... I mean 
about your dad. "`;
   waitForClick; clearText; marker; appendText; 
   Narr`I asked Coco.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A087`); appendText; 
   //Coco
   Coco`"Why?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well...um...I mean...."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A088`); appendText; 
   //Coco
   Coco`"Oh, I got it!"`;
   waitForClick; clearText; marker; sound(`C4A089`); appendText; 
   //Coco
   Coco`"You thought my dad might be trapped here 
just like us, didn't you?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`C4A090`); appendText; 
   //Coco
   Coco`"But, don't worry. He's fine."`;
   waitForClick; clearText; marker; sound(`C4A091`); appendText; 
   //Coco
   Coco`"I know he got out safely."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What? ...How do you know that?"`;
   waitForClick; clearText; marker; sound(`C4A092`); appendText; 
   //Coco
   Coco`"I just do."`;
   waitForClick; clearText; marker; sound(`C4A093`); appendText; 
   //Coco
   Coco`"Because I'm psyyyychic."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...What?"`;
   waitForClick; clearText; marker; sound(`C4A094`); appendText; 
   //Coco
   Coco`"Well, it's kind like of telepathy, or 
clairvoyance, or precognition, or post 
cognition...."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"...Huh?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A095`); appendText; 
   //Coco
   Coco`"Anyway, my dad's okay. "`;
   waitForClick; clearText; marker; sound(`C4A096`); appendText; 
   //Coco
   Coco`"I can just feel it."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco had a big smile on her face.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was still performing her wacky dance.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A097`); appendText; 
   //Coco
   Coco`"What else...oh, yeah I can bend spoons, too."`;
   waitForClick; clearText; marker; sound(`C4A098`); appendText; 
   //Coco
   Coco`"I tell a spoon to like 'come on, just give 
in and bend!' and it does."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh...I see...."`;
   waitForClick; clearText; marker; sound(`C4A099`); appendText; 
   //Coco
   Coco`"Do you wanna know why I can do that kind of 
stuff?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A100`); appendText; 
   //Coco
   Coco`"I'm actually a 'Solarian,' a person from the 
sun!!"`;
   waitForClick; clearText; marker; sound(`C4A101`); appendText; 
   //Coco
   Coco`"A 'Solarian' is born with psychic abilities."`;
   waitForClick; clearText; marker; sound(`C4A102`); appendText; 
   //Coco
   Coco`"That's why."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A103`); appendText; 
   //Coco
   Coco`"But my dad and mom are Earthlings."`;
   waitForClick; clearText; marker; sound(`C4A104`); appendText; 
   //Coco
   Coco`"I'm the only Solarian here."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh, I see...wow that's great."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't find anything else to say.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The powerful microwaves that Coco produced had 
shaken my brain and fried it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My consciousness started becoming hazy, as if 
I had been in bed for three days with a high 
fever.`;
   waitForClick; clearText; marker; sound(`C4A105`); appendText; 
   //Coco
   Coco`"I love the sun because I'm a Solarian "`;
   waitForClick; clearText; marker; sound(`C4A106`); appendText; 
   //Coco
   Coco`"When I bathe in the rays from my homeland, I 
get all warm and toasty inside."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A107`); appendText; 
   //Coco
   Coco`"Aaaah, I wish I could see the sun...."`;
   waitForClick; clearText; marker; sound(`C4A108`); appendText; 
   //Coco
   Coco`"I wish I could sunbathe...."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A109`); appendText; 
   //Coco
   Coco`"Hey, Takepyon? I wanna go sunbathe!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well, that's kind of hard to do that right 
now."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A110`); appendText; 
   //Coco
   Coco`"I know...but I want to! "`;
   waitForClick; clearText; marker; sound(`C4A111`); appendText; 
   //Coco
   Coco`"We haven't seen the sun for three days, you 
know!"`;
   waitForClick; clearText; marker; sound(`C4A112`); appendText; 
   //Coco
   Coco`"Don't you wanna sunbathe, Takepyon?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Ummm."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tried to imagine.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A high, clear blue sky...a nice May 
breeze...the horizon...the sun shimmering on 
the ocean surface....`;
   waitForClick; clearText; marker; appendText; 
   Narr`It had only been three days, but for some 
reason the scenery from the world outside 
felt so far away. `;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't wait to go outside.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Outside...to the surface....`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Yeah, now that you mention it, I do want to 
sunbathe."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"But we just don't have that option right now."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Besides it's midnight, anyway...."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A113`); appendText; 
   //Coco
   Coco`"Noooooooo!"`;
   waitForClick; clearText; marker; sound(`C4A114`); appendText; 
   //Coco
   Coco`"I wanna sunbathe, I wanna, I wanna!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Alright, we can do it tomorrow."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Someone will probably have rescued us by then 
anyway."`;
   waitForClick; clearText; marker; sound(`C4A115`); appendText; 
   //Coco
   Coco`"No, I want to do it right now! Right now!"`;
   waitForClick; clearText; marker; sound(`C4A116`); appendText; 
   //Coco
   Coco`"Sunbathe, sunbathe, sunbathe!!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Coco!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no way I was going to let this 
outburst go.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I gave her a look that said "I'm about to get 
angry."`;
   waitForClick; clearText; marker; appendText; 
   Narr`And Coco responded with....`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A117`); appendText; 
   //Coco
   Coco`"Oooh, oh...oh, alright..."`;
   waitForClick; clearText; marker; sound(`C4A118`); appendText; 
   //Coco
   Coco`"I won't ask anymore...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her shoulders drooped sadly. `;
   waitForClick; clearText; marker; sound(`C4A119`); appendText; 
   //Coco
   Coco`"Instead let's...."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Instead let's what...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A120`); appendText; 
   //Coco
   Coco`"Let's play 'chicks'!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Uhhh...what?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO12ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A121`); appendText; 
   //Coco
   Coco`"Play 'chicks'! Play 'chicks'! 
Pi-pi-pi-pi! "`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO16ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A122`); appendText; 
   //Coco
   Coco`"Play 'chicks'! Play 'chicks'! 
Pu-pu-pu-pu! "`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Ummm, earth to Coco? ...Would you mind 
telling me what you're talking about? "`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A123`); appendText; 
   //Coco
   Coco`"Okay, I'll explain! "`;
   waitForClick; clearText; marker; sound(`C4A124`); appendText; 
   //Coco
   Coco`"Playing 'chicks' is an elegant, aristocratic 
game developed in 1648 by Louis the XIV of 
France."`;
   waitForClick; clearText; marker; sound(`C4A125`); appendText; 
   //Coco
   Coco`"The rules are simple."`;
   waitForClick; clearText; marker; sound(`C4A126`); appendText; 
   //Coco
   Coco`"All you have to do is to imitate a chick and 
walk around."`;
   waitForClick; clearText; marker; sound(`C4A127`); appendText; 
   //Coco
   Coco`"The winner is the one that mimic a chick or 
becomes most like a chick."`;
   waitForClick; clearText; marker; sound(`C4A128`); appendText; 
   //Coco
   Coco`"The person who acts most like a chick wins."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A129`); appendText; 
   //Coco
   Coco`"And that's what playing 'chicks' is all 
about!"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
stopBGM();
removeFG({ id: 1, useAnim: false });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`A few minutes later....`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO05A`, transition: 26 });
playBGM({ num: 9, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; sound(`C4A130`); appendText; 
   //Coco
   Coco`"Pi-yo-pi-yo, pi-yo-pi-yo!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Pi-yo-pi-yo, pi-yo-pi-yo!"`;
   waitForClick; clearText; marker; sound(`C4A131`); appendText; 
   //Coco
   Coco`"Pi-yo-pi-yo-pi-yo!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Pi-yo-pi-yo-pi-yo!"`;
   waitForClick; clearText; marker; sound(`C4A132`); appendText; 
   //Coco
   Coco`"Pi-yo-yo! Pi-yo-yo, pi-yo-pi, pi-yo!!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Pi-yo-yo! Pi-yo-yo, pi-yo-pi, pi-yo!!"`;
   waitForClick; clearText; marker; sound(`C4A133`); appendText; 
   //Coco
   Coco`"Piiiii!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Piiiii!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Dear Father and Mother...how is everything 
with you?`;
   waitForClick; clearText; marker; appendText; 
   Narr`I'm currently playing 'chicks' 102 feet under 
the surface of the ocean.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Playing 'chicks' is an elegant game developed 
by Louis XIV. You win if you can mimic a 
chick the best.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You flap your arms like wings, and peck at 
garbage that has fallen in the corridors....`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sometimes you even trip and fall like a cute 
newborn baby chick to compete to see who 
looks the most like a chick.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The sounds used basically consist of three 
sounds, 'pi', 'yo', and 'n', but as you get 
better....`;
   waitForClick; clearText; marker; sound(`C4A134`); appendText; 
   //Coco
   Coco`"Flap flap...flap flap"`;
   waitForClick; clearText; marker; sound(`C4A135`); appendText; 
   //Coco
   Coco`"Furu-furu-furu....Poso...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`...You can use imaginative sounds, and even 
express yourself with various little 
chick-a-dee gestures.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Since I'm only a beginner, I can only use of 
'pi', 'yo', 'n', so far.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But, I'm working hard to become a full-fledged 
chick...no I mean a full-fledged chicken like 
mom and dad.`;
   waitForClick; clearText; marker; sound(`C4A136`); appendText; 
   //Coco
   Coco`"Pi-yo-yoooooon, Pi-yo-piii!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I am learning from an excellent teacher.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Oh, I don't know why but...I'm shedding tears.`;
   waitForClick; clearText; marker; sound(`C4A137`); appendText; 
   //Coco
   Coco`"Piyooo, Piyo-piyo-piyoo! Pi-yo-pi-yo?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`My teacher is encouraging me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I'm alright, I'm fine.`;
   waitForClick; clearText; marker; sound(`C4A138`); appendText; 
   //Coco
   Coco`"Piyon, piyon, piyon, piyon..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`My teacher wags her hips left and right as 
she walks.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sometimes she even flips her hips up in the 
air.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She is the epitome of chick-ness...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Father! Mother! My teacher is the best 
'chick-mimic' in Japan...no, in the world!`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh, but teacher...."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You didn't have to take a dump in the middle 
of the floor..."`;
   waitForClick; clearText; marker; sound(`C4A139`); appendText; 
   //Coco
   Coco`"Piyooo! Piyoo!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Teacher is angry with me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It's because I spoke the human language.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Piyoyoyoyon..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`That meant 'I'm sorry' in chick language.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Piyoyoyoyon... Piyoyoyoyon..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It must be very hard for you two to imagine 
your own son playing 'chicks' 102 feet under 
the ocean.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Or I suppose you probably don't even believe 
that I'm doing this in the first place.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But, I suppose I can't blame you.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I would have never dreamed I would be in this 
situation up until three days ago.`;
   waitForClick; clearText; marker; appendText; 
   Narr`How interesting life is!`;
   waitForClick; clearText; marker; appendText; 
   Narr`How sad we humans are!`;
   waitForClick; clearText; marker; appendText; 
   Narr`Oh, there I go crying again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Before the ink on the paper starts to run, I 
will put down the pen.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Well, dear father and mother, please take 
care of yourself. Piyo piyo.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Piyopiyo...."`;
   waitForClick; clearText; marker; sound(`C4A140`); appendText; 
   //Coco
   Coco`"Piyopiyo...."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`That was the end of our game of 'chicks.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`I probably needn't mention it, but Coco won 
the game.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco shouted with happiness and flashed a 
triumphant smile.`;
   waitForClick; clearText; marker; sound(`C4A141`); appendText; 
   //Coco
   Coco`"I won! I won!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Anyway, thankfully it was over....`;
   waitForClick; clearText; marker; appendText; 
   Narr`I exhaled a long sigh of relief.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
bgload({ name: `BG23A1`, transition: 26 });
playBGM({ num: 1, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
clock(`2:46`);
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Are you happy now?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Let's get some sleep now? "`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A142`); appendText; 
   //Coco
   Coco`"Okay."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Coco and I started to walk.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco walked holding my hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her hand was so very small....`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Daddy, huh...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought to myself.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco had wanted so bad to call me 'daddy'....`;
   waitForClick; clearText; marker; appendText; 
   Narr`But it seemed that she had forgotten all 
about it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was relieved.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But at the same time, I felt a bit lonely.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Daddy, huh...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I repeated the words to myself again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had mixed feelings.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Coco and I went to the infirmary hand in hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was Coco's turn to use the bed in the 
infirmary tonight.`;
   waitForClick; clearText; 
});
hideTextbox();
bgload({ name: `BG08A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We were outside of the door.`;
   waitForClick; clearText; marker; appendText; 
   Narr`For some reason, You was standing there.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A143`); appendText; 
   //You
   You`"Heh, heh, heh, heh..."`;
   waitForClick; clearText; marker; sound(`C4A144`); appendText; 
   //You
   You`"I saw you guys!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You had a grin on her face.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A145`); appendText; 
   //You
   You`"Piyo piyo, huh? What was that all about?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A146`); appendText; 
   //You
   You`"Ohhh, I'm embarrassed just thiiinking about 
it!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Of course, the one who was embarrassed was me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Burning hot blood surged up from the pit of my 
stomach to my head.`;
   waitForClick; clearText; marker; appendText; 
   Narr`All of a sudden, my face felt like it was 
engulfed in flames.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I, I don't know what the heck you are talking 
about!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Right, Coco?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU08ADM`, name2: `CO01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A147`); appendText; 
   //Coco
   Coco`"I know what she's talking about."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Gah!"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A148`); appendText; 
   //Coco
   Coco`"You're talking about how we were playing 
'chicks,' right Nakkyu?"`;
   waitForClick; clearText; marker; sound(`C4A149`); appendText; 
   //You
   You`"Hah, hah, hah, hah, hah..."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A150`); appendText; 
   //Coco
   Coco`"If you were watching, you should've joined 
us!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A151`); appendText; 
   //You
   You`"Huh?...Nah, I'm glad I passed, thanks." `;
   waitForClick; clearText; marker; sound(`C4A152`); appendText; 
   //Coco
   Coco`"Why?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU18ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A153`); appendText; 
   //You
   You`"I don't know, it's just...."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A154`); appendText; 
   //Coco
   Coco`"Oh I know! We can play another game right 
now!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A155`); appendText; 
   //You
   You`"N-now!?"`;
   waitForClick; clearText; marker; sound(`C4A156`); appendText; 
   //You
   You`"No, no, no, it's alright, really...."`;
   waitForClick; clearText; marker; sound(`C4A157`); appendText; 
   //You
   You`"Besides, it's really late, you know? "`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A158`); appendText; 
   //Coco
   Coco`"Well...I suppose you're right."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A159`); appendText; 
   //You
   You`"Whew."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You wiped away the sweat that had appeared on 
her forehead with the back of her hand.`;
   waitForClick; clearText; marker; sound(`C4A160`); appendText; 
   //Coco
   Coco`"Oh well."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A161`); appendText; 
   //Coco
   Coco`"I suppose I'll wait until tomorrow, then."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A162`); appendText; 
   //You
   You`"To-tomorrow!?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `CO02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A163`); appendText; 
   //Coco
   Coco`"Yahoo! I get to play 'chicks' with Nakkyu 
tomorrow! "`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_04`, a1: 0, volume: 100 });
removeFG({ id: 2, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Coco ran off to the infirmary gesturing like a 
chick.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You and I were left standing there.... `;
   waitForClick; clearText; marker; appendText; 
   Narr`We stared at each other.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well, you see she has fun, okay?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A164`); appendText; 
   //You
   You`"Are you serious?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'm serious."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A165`); appendText; 
   //You
   You`"I am not really into that kind of stuff."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Me either!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You was frowning.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But her face started to soften as I watched.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A166`); appendText; 
   //You
   You`"Pff-fff..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You was trying hard not to laugh, by pressing 
her hand on her mouth....`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was probably recalling my antics from 
earlier.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had a bad feeling.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, You? I've got a favor to ask...."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A167`); appendText; 
   //You
   You`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Can you just forget what you saw tonight?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A168`); appendText; 
   //You
   You`"Ha, ha, ha! How do you expect me to forget 
that?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well, I suppose...."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Then you don't have to forget it, but would 
you at least keep it a secret from Tsugumi, 
Sora and the Kid?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A169`); appendText; 
   //You
   You`"Weeeell...."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`C4A170`); appendText; 
   //You
   You`"I guess I could keep quiet about it...at 
least for a while."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What do you mean for a while?"`;
   waitForClick; clearText; marker; sound(`C4A171`); appendText; 
   //You
   You`"You never know when it might come in handy."`;
   waitForClick; clearText; marker; appendText; 
   Narr`What do you know...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`She wanted to use it to blackmail me.`;
   waitForClick; clearText; marker; sound(`C4A172`); appendText; 
   //You
   You`"So anyways, Takeshi..."`;
   waitForClick; clearText; marker; sound(`C4A173`); appendText; 
   //You
   You`"You get my drift? Right?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You patted me on the shoulder and walked away.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had no idea what she would ask of me, but I 
knew she had me where she wanted me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Of any of the five people that could have 
seen us, she was the worst.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"*sigh*..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I shook my head with a sigh and opened the 
Infirmary door.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
stopBGM();
playBGM({ num: 19, volume: 100 });
bgload({ name: `BG09A2`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It was dark inside the room, and I could 
barely see anything.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Still, I heard the breathing of three sleeping 
people.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Although I couldn't see any of them, I could 
tell who was sleeping where.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Tsugumi, who was injured, was sleeping on the 
bed at the end of the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid was sleeping on the examination table.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco was using the bed in the middle.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Which meant I would be sleeping...`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the decompression chamber under the 
Infirmary.`;
   waitForClick; clearText; marker; appendText; 
   Narr`About 90 minutes earlier, I had actually been 
sleeping there, before Coco shoved hydrogen 
peroxide up my nose...`;
   waitForClick; clearText; marker; appendText; 
   Narr`You, it seemed, had lined up some chairs in 
the Conference Room and gone to sleep on them.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Okay then...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I headed toward the lift in the back of the 
room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I stopped briefly to check in on Coco.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I went up to the bed in the middle of the room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Although she had been so excited a little 
while earlier, Coco seemed to be in a deep 
sleep already.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I suppose she's exhausted from all that 
playing)`;
   waitForClick; clearText; marker; sound(`C4A174`); appendText; 
   //Coco
   Coco`"Uh, mmm...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco rolled over and scratched her cheek with 
her fingers.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her blanket had slightly fallen off of her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Fixing her covers, I touched her hair gently.`;
   waitForClick; clearText; marker; sound(`C4A175`); appendText; 
   //Coco
   Coco`"Mm...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco mumbled softly in her sleep.`;
   waitForClick; clearText; marker; sound(`C4A176`); appendText; 
   //Coco
   Coco`"Daddy...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know which dad she was referring to...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I couldn't help smiling.`;
   waitForClick; clearText; marker; sound(`C4A177`); appendText; 
   //Coco
   Coco`"Daddy...."`;
   waitForClick; clearText; marker; sound(`C4A178`); appendText; 
   //Coco
   Coco`"Daddy...."`;
   waitForClick; clearText; marker; sound(`C4A179`); appendText; 
   //Coco
   Coco`"Brother...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`(What...?)`;
   waitForClick; clearText; 
});
stopBGM();
showTextbox();
text(() => {
   marker; sound(`C4A180`); appendText; 
   //Coco
   Coco`"I'm so cold...."`;
   waitForClick; clearText; marker; sound(`C4A181`); appendText; 
   //Coco
   Coco`"Please...let me out of here...."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
showTextbox();
text(() => {
   marker; sound(`C4A182`); appendText; 
   //Coco
   Coco`"Help me...."`;
   waitForClick; clearText; marker; sound(`C4A183`); appendText; 
   //Coco
   Coco`"Brother...."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO10A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; sound(`C4A182`); appendText; 
   //Coco
   Coco`"Help me...."`;
   waitForClick; clearText; marker; sound(`C4A183`); appendText; 
   //Coco
   Coco`"Brother...."`;
   waitForClick; clearText; 
});
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
bgload({ name: `BG09A1`, transition: 26 });
fgload({ id: 1, name: `SA01ADL`, x: 320, useAnim: true });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`14:46`);
showTextbox();
text(() => {
   marker; sound(`C4A184`); appendText; 
   //Sara
   Sara`"Brother...."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Huh?"`;
   waitForClick; clearText; marker; sound(`C4A185`); appendText; 
   //Sara
   Sara`"Brother...."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"What is it, Sara?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`It had been over 12 hours since Sara started 
calling me 'brother'.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The swelling of Sara's eyelids had just 
started to fade. `;
   waitForClick; clearText; marker; appendText; 
   Narr`But her eyes were still watered.`;
   waitForClick; clearText; marker; appendText; 
   Narr`About 12 hours ago, Sora had told us the truth.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeFG({ id: 1, useAnim: false });
bgload({ name: `IMG01B`, transition: 26 });
hideTextbox();
NVL_Mode();
playBGM({ num: 14, volume: 100 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Even since seeing the hologram in the Whale 
Room, I had kind of sensed it.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Sara was my sister....`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Maybe I had already known it when I saved 
Sara from the elevator.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Maybe I had just pretended not to realize, 
when in fact I really had...`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It was strange, but I didn't quite understand 
the details of my own mental state.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Because it almost felt like the person who had 
caused me to pretend was a "me," that wasn't 
really "me."`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`If that made sense....`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I knew I had to find out the truth, from the 
moment I'd seen the pendant in the Whale 
Room, especially after I noticing it had a 
missing piece.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I could tell Sara felt the same way.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I didn't know from exactly what point she 
started wondering if I was her brother.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Looking back on it, there were many times she 
might have hinted at it.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`But all those moments had seemed to me that 
she was half-joking.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The moment that everything came together was 
when I saw the image in the hologram.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Because I had been able to see something that 
nobody else could...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`But still, both Sara and I weren't certain 
when we had been in the Whale Room.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`We needed definite proof.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`That was why we went to visit Sora even 
though it was late at night.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`To have her surgically remove the fragment 
from my thumb....`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Since Sora wasn't able to perform the actual 
operation, so we decided to wake up You.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`At first You had no idea what we were talking 
about, but as soon as she understood the 
situation, she willingly agreed to help.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`As we expected, the piece removed from my 
thumb, had matched the missing part in the 
pendant exactly.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`What's more, when we exposed the piece to 
infrared light, an image of the same man in 
the pendant came up.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`According to Sora, unlike a regular picture, a 
hologram 'shows the whole image in a part'.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`With a picture, it would be impossible to see 
the whole picture with just one piece of 
it.... `;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`But with a hologram, it is possible to 
generate the whole image even from a tiny 
piece.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`That is one of the special properties of a 
hologram.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Now, let me explain little bit about the 
'INFRAVISION'.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Usually, the visible range for humans is 
limited to light with a wavelength of between 
380nm to 780nm.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Light with a wavelength longer than 780nm is 
called "infrared."`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Normal humans can't see light in this range.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`If you were able to see infrared, you would 
be able to sense the temperature of an object 
without actually touching it.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And with this ability, you could also see in 
the pitch dark even without any light.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Infrared rays are emitted from all objects 
that have temperature. Stronger light is 
emitted from warmer objects, and weaker light 
from objects with a lower temperature.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`By sensing those things, you can tell the 
location and shape of an object in the 
darkness.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Surprisingly, Sara and I were told that we 
had the ability called 'INFRAVISION'.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Since we had this ability naturally, it was 
difficult for us to imagine not being able to 
sense the temperature, or to imagine complete 
darkness.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`But I realized something then.`;
   waitForClick; 
   Narr`
`;
   
});
goto(lbl_00000c2b).if(var_ef == 1);
showTextbox();
text(() => {
   appendText; 
   Narr`That was why I had been able to notice the 
Generator Room door was hot.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
goto(lbl_00000c36);
let lbl_00000c2b;
showTextbox();
text(() => {
   appendText; 
   Narr`That was why I had noticed heat emanating 
from the generating room door, and that was 
why I had mistaken the light from the 
inverter unit as moonlight.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
goto(lbl_00000c36);
let lbl_00000c36;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`That was why Sara and I were able to see the 
3D image in the pendant, which nobody else 
could see.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Why did we have this ability? I had no idea.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sora explained to us that it was a special 
ability passed on genetically.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Genetics. This also meant it was highly 
possible that Sara and I had the same parents.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`That's when it became almost certain that 
Sara and I were brother and sister, but 
still...something seemed to be missing.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We took a DNA test with the repaired L-MRI.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`The result showed that Sara and I were blood 
relatives with a 99.99999% certainty.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`That had proven everything.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`And when that happened, memories of my 
childhood started to flood back.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`They rocked me like an explosion.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`All of the memories that had been the dammed 
up flooded out at once, their bombardment 
rendering me unconscious again.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`When I regained consciousness, Sara was next 
to me.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Sara...my one and only sister....`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`We were fraternal twins....`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I recalled the bittersweet memories of the 
days we had spent together.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `BG09A1`, transition: 26 });
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
hideTextbox();
AVL_Mode();
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; sound(`C4A186`); appendText; 
   //Sara
   Sara`"Brother...."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Yeah?"`;
   waitForClick; clearText; marker; sound(`C4A187`); appendText; 
   //Sara
   Sara`"Brother...."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Yes, Sara?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`We hadn't slept at all since the day before.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We had spent a long half-day, talking about 
all sorts of things.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The memories of our childhood....`;
   waitForClick; clearText; marker; appendText; 
   Narr`Then our time at the 'hospital' as well of 
course.`;
   waitForClick; clearText; marker; appendText; 
   Narr`How I hadn't kept my promise...couldn't keep 
my promise....`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had sworn to her that I would come to get 
her....`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara and I took a long time going over and 
understanding all of the details. `;
   waitForClick; clearText; marker; appendText; 
   Narr`There was too much to talk about.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A half-day was hardly enough to restore the 
missing time.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But....`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara and I didn't need many words anymore.`;
   waitForClick; clearText; marker; appendText; 
   Narr`"Brother,"........."Yes, Sara?"  With just 
these words, we could understand each other.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara put her head on my shoulder, and closed 
her eyes gently.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I sang her favorite lullaby.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
playBGM({ num: 22, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   //Kid
   Kid`"Moon sprite shouldering a long bow."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Waiting inside a dream."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Tonight a story by moonlight."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Hoping the wait will be short."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Sleeping curled and snug"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Sleeping in mother's arms."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
stopBGM();
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
bgload({ name: `BG06A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
setSceneTitle({ index: 111 });
clock(`14:51`);
showTextbox();
text(() => {
   marker; sound(`C4A188`); appendText; 
   //Coco
   Coco`"Moon sprite shouldering a long bow."`;
   waitForClick; clearText; marker; sound(`C4A189`); appendText; 
   //Coco
   Coco`"Waiting inside a dream."`;
   waitForClick; clearText; marker; sound(`C4A190`); appendText; 
   //Coco
   Coco`"Tonight a story by moonlight."`;
   waitForClick; clearText; marker; sound(`C4A191`); appendText; 
   //Coco
   Coco`"Hoping the wait will be short."`;
   waitForClick; clearText; marker; sound(`C4A192`); appendText; 
   //Coco
   Coco`"Sleeping curled and snug"`;
   waitForClick; clearText; marker; sound(`C4A193`); appendText; 
   //Coco
   Coco`"Sleeping in mother's arms."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Clap clap clap....`;
   waitForClick; clearText; 
});
playBGM({ num: 2, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`C4A194`); appendText; 
   //You
   You`"You've got a great voice, Coco."`;
   waitForClick; clearText; marker; sound(`C4A195`); appendText; 
   //Coco
   Coco`"I know I do, don't I?"`;
   waitForClick; clearText; marker; sound(`C4A196`); appendText; 
   //You
   You`"I've never heard that song before...is it a 
lullaby or something?"`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`C4A197`); appendText; 
   //Coco
   Coco`"Yeah, it's a lullaby."`;
   waitForClick; clearText; marker; sound(`C4A198`); appendText; 
   //Coco
   Coco`"My mom used to sing it to me."`;
   waitForClick; clearText; marker; sound(`C4A199`); appendText; 
   //You
   You`"So I guess that song has a lot of good 
memories for you."`;
   waitForClick; clearText; marker; sound(`C4A200`); appendText; 
   //Coco
   Coco`"No."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`C4A201`); appendText; 
   //You
   You`"No? It doesn't?"`;
   waitForClick; clearText; marker; sound(`C4A202`); appendText; 
   //Coco
   Coco`"No, I just learned this song."`;
   waitForClick; clearText; marker; sound(`C4A203`); appendText; 
   //You
   You`"Oh....really..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Their voices were coming from the kiosk.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I went in.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO13A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"Hey!"`;
   waitForClick; clearText; marker; sound(`C4A204`); appendText; 
   //Coco
   Coco`"Oh, Takepyon!"`;
   waitForClick; clearText; marker; sound(`PIPI_04`); appendText; 
   //Pipi
   Pipi`"Bow-wow!"`;
   waitForClick; clearText; marker; sound(`C4A205`); appendText; 
   //You
   You`"Takeshi...what are you doing here?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh, I just thought I'd see what you looked 
like playing 'chicks.'"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Yep, that was the reason I had gone searching 
for them, and eventually wound up at the 
souvenir shop.`;
   waitForClick; clearText; marker; sound(`C4A206`); appendText; 
   //Coco
   Coco`"Oh, we finished playing that a while ago."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What !? No way!!"`;
   waitForClick; clearText; marker; sound(`C4A207`); appendText; 
   //Coco
   Coco`"Nakkyu was sooooo good at it...."`;
   waitForClick; clearText; marker; sound(`C4A208`); appendText; 
   //Coco
   Coco`"Compared to me, she was sooooo much more 
like a real chick...."`;
   waitForClick; clearText; marker; sound(`C4A209`); appendText; 
   //Coco
   Coco`"I was just amazed!"`;
   waitForClick; clearText; marker; sound(`C4A210`); appendText; 
   //You
   You`"Oh, stop it, you're just trying to embarrass 
me with compliments!"`;
   waitForClick; clearText; marker; sound(`C4A211`); appendText; 
   //Coco
   Coco`"It's true!"`;
   waitForClick; clearText; marker; sound(`C4A212`); appendText; 
   //Coco
   Coco`"You were really, really good!"`;
   waitForClick; clearText; marker; sound(`C4A213`); appendText; 
   //You
   You`"Eh, heh, heh, heh...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You, who had seemed so against the game to 
begin with, was embarrassed once she was 
complimented.`;
   waitForClick; clearText; marker; appendText; 
   Narr`What on earth was going on??`;
   waitForClick; clearText; marker; appendText; 
   Narr`Had she actually enjoyed the game?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Speaking from the standpoint of someone who 
had experienced it....`;
   waitForClick; clearText; marker; appendText; 
   Narr`The game 'chicks' did seem to possess a kind of 
ritualistic, demonic charm that could subdue 
the human ability to be rational....`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed to me that You might have been 
possessed by that charm.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Oh well, that wasn't important.`;
   waitForClick; clearText; marker; appendText; 
   Narr`What was important was somehow I had missed 
out on seeing a historical moment; You's wacky 
performance.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was truly unfortunate...`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Darn it!)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I mentally clicked my tongue.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So? What are you doing now?"`;
   waitForClick; clearText; marker; sound(`C4A214`); appendText; 
   //You
   You`"You should be able to tell by looking at us?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco and You were sitting face-to-face on the 
carpet.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pipi had set his face on Coco's head.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Between the two of them was a mountain of 
small, bead-like grains.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A pen was stuck at the top of the mountain.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"A game of avalanche with a mountain of sand?"`;
   waitForClick; clearText; marker; sound(`C4A215`); appendText; 
   //You
   You`"That's right!"`;
   waitForClick; clearText; marker; sound(`C4A216`); appendText; 
   //Coco
   Coco`"No, Nakkyu, that's not right."`;
   waitForClick; clearText; marker; sound(`C4A217`); appendText; 
   //You
   You`"What?"`;
   waitForClick; clearText; marker; sound(`C4A218`); appendText; 
   //Coco
   Coco`"This is a mountain of tears...."`;
   waitForClick; clearText; marker; sound(`C4A219`); appendText; 
   //Coco
   Coco`"It's a mountain of tears, not sand."`;
   waitForClick; clearText; marker; appendText; 
   Narr`A mountain of tears?`;
   waitForClick; clearText; marker; appendText; 
   Narr`I sat next to them and pinched a single grain 
from the mountain.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh, I remember...."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Coco was throwing these into the puddle at 
the ruins yesterday."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Clear, colorless grain. They were formed in 
the shape of a drop of water.`;
   waitForClick; clearText; marker; appendText; 
   Narr`"Glass tears".`;
   waitForClick; clearText; marker; appendText; 
   Narr`No, they weren't made of glass.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I could tell by touching them.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You never told me what they were yesterday, 
did you?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So, I guess I'll try again...what are they?"`;
   waitForClick; clearText; marker; sound(`C4A220`); appendText; 
   //You
   You`"They're mermaid tears."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Mermaid tears???"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco closed her eyes and nodded.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I don't care what you say, there's no way 
these are real mermaid teardrops."`;
   waitForClick; clearText; marker; sound(`C4A221`); appendText; 
   //You
   You`"Oh yeah?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Saying this, You pointed to the display racks 
of the souvenir shop.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`".........?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I stood up and walked toward where You had 
pointed.`;
   waitForClick; clearText; 
});
removeBG({ mode: WHITE, transition: 02 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The racks were packed with different kinds of 
merchandise.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Among all the stuff, there was a corner with 
a line of old-looking ceramic bottles.`;
   waitForClick; clearText; 
});
bgload({ name: `IT07A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I picked up one of the bottles and looked at 
it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was slightly bigger than the size of my 
palm and heavier than I had imagined. It felt 
solid in my hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Printed on the label was, "Mermaid Tears."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked at the bottom of the bottle. There 
was a round stamp on it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`"Contents: Candy."`;
   waitForClick; clearText; marker; appendText; 
   Narr`"Ingredients: sugar, corn syrup, acidifier, 
flavoring."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I shook the bottle. I heard a dry, crisp sound.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pulling out the cork top, I poured some out 
on my palm.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I poured too much and some of them spilled 
from my hand to the floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The "Mermaid Tears" bounced on the carpet as 
if they were dancing.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO13A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"I see."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Holding the bottle in my right hand and 
"teardrops" in my left, I went back to where 
I had been sitting before and plopped myself 
down with a thud.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So these 'Mermaid Tears' are just some kind 
of souvenir?"`;
   waitForClick; clearText; marker; sound(`C4A222`); appendText; 
   //Coco
   Coco`"Yup."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Let's see...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Mumbling to myself, I popped all the 
'teardrops' from my left hand into my mouth.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I chomped down on them hard.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The melting sweetness spread in my mouth.`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"These are good!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`It had been a long time since I had tasted 
anything besides a chicken sandwich.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had heard somewhere before that eating 
sweets makes people feel happy.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And at that moment I was enraptured by the 
sweetness in my mouth.`;
   waitForClick; clearText; marker; sound(`C4A223`); appendText; 
   //Coco
   Coco`"Ohhhh my god!!"`;
   waitForClick; clearText; marker; sound(`C4A224`); appendText; 
   //Coco
   Coco`"You shouldn't have done that!"`;
   waitForClick; clearText; marker; sound(`C4A225`); appendText; 
   //Coco
   Coco`"I'm gonna tell on you!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Why? Is it because I'm eating them for free?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well, you are too, Coco."`;
   waitForClick; clearText; marker; sound(`C4A226`); appendText; 
   //Coco
   Coco`"No, no,"`;
   waitForClick; clearText; marker; sound(`C4A227`); appendText; 
   //Coco
   Coco`"That wasn't what I meant at all."`;
   waitForClick; clearText; marker; sound(`C4A228`); appendText; 
   //Coco
   Coco`"You just ate the teardrops of a mermaid, 
didn't you, Takepyon?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Yeah, I did."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"And I am going to eat more."`;
   waitForClick; clearText; marker; sound(`C4A229`); appendText; 
   //Coco
   Coco`"If you do that...."`;
   waitForClick; clearText; marker; sound(`C4A230`); appendText; 
   //Coco
   Coco`"You will end up like 'The 800-year-old nun.'"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Who...?"`;
   waitForClick; clearText; marker; sound(`C4A231`); appendText; 
   //You
   You`"800 year what?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You and I looked at each other.`;
   waitForClick; clearText; marker; sound(`C4A232`); appendText; 
   //Coco
   Coco`"You don't know the story of Yaobikuni, the 
800-year-old nun?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Do you know what she's talking about, You?"`;
   waitForClick; clearText; marker; sound(`C4A233`); appendText; 
   //You
   You`"Nope. Not a clue."`;
   waitForClick; clearText; marker; sound(`C4A234`); appendText; 
   //Coco
   Coco`"Alright then, I, Coco, will tell you the 
story of the 800-year-old nun!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; marker; sound(`C4A235`); appendText; 
   //Coco
   Coco`"Hey, don't forget the applause."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Clap clap clap....`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO13B`, transition: 20 });
stopBGM();
showTextbox();
text(() => {
   marker; sound(`C4A236`); appendText; 
   //Coco
   Coco`"Okay, It starts like this..."`;
   waitForClick; clearText; 
});
playBGM({ num: 19, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`C4A237`); appendText; 
   //Coco
   Coco`"Once upon a time, there was a beautiful young 
girl."`;
   waitForClick; clearText; marker; sound(`C4A238`); appendText; 
   //Coco
   Coco`"Who was 17 years old, and she loved camellia 
flowers."`;
   waitForClick; clearText; marker; sound(`C4A239`); appendText; 
   //Coco
   Coco`"She also had a very handsome boyfriend."`;
   waitForClick; clearText; marker; sound(`C4A240`); appendText; 
   //Coco
   Coco`"And he was about her same age, I think he 
was at least."`;
   waitForClick; clearText; marker; sound(`C4A241`); appendText; 
   //Coco
   Coco`"Anyway, one day, he gave her a camellia 
flower as gift, and said."`;
   waitForClick; clearText; marker; sound(`C4A242`); appendText; 
   //Coco
   Coco`"'This flower is for you.'"`;
   waitForClick; clearText; marker; sound(`C4A243`); appendText; 
   //Coco
   Coco`"'Oh my, what a beautiful flower this is.'"`;
   waitForClick; clearText; marker; sound(`C4A244`); appendText; 
   //Coco
   Coco`"'Yeah, this flower sure is pretty...but 
you're even more beautiful, even a million of 
these flowers wouldn't be as pretty as you.'"`;
   waitForClick; clearText; marker; sound(`C4A245`); appendText; 
   //Coco
   Coco`"'Oh, you are such a sweet talker, you.'"`;
   waitForClick; clearText; marker; sound(`C4A246`); appendText; 
   //Coco
   Coco`"'Hey, I'm not just trying to flatter you, I'm 
telling the truth.'"`;
   waitForClick; clearText; marker; sound(`C4A247`); appendText; 
   //Coco
   Coco`"'Oh, sweetheart....'"`;
   waitForClick; clearText; marker; sound(`C4A248`); appendText; 
   //Coco
   Coco`"'My love....'"`;
   waitForClick; clearText; marker; sound(`C4A249`); appendText; 
   //Coco
   Coco`"They were so passionately in love that they 
could talk this way in public and they 
wouldn't even be embarrassed about it."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; marker; sound(`C4A250`); appendText; 
   //Coco
   Coco`"Well, one day...."`;
   waitForClick; clearText; marker; sound(`C4A251`); appendText; 
   //Coco
   Coco`"The girl's dad, his name was Gonta, went 
diving into the ocean."`;
   waitForClick; clearText; marker; sound(`C4A252`); appendText; 
   //Coco
   Coco`"He did that because this old guy who lived 
in the ocean was like...."`;
   waitForClick; clearText; marker; sound(`C4A253`); appendText; 
   //Coco
   Coco`"'Hey Gonta, I'm having a home party, wanna 
come?'...and invited him to a party."`;
   waitForClick; clearText; marker; sound(`C4A254`); appendText; 
   //Coco
   Coco`"Mr. Gonta arrived at the most gorgeous 
mansion he'd ever seen in his whole life."`;
   waitForClick; clearText; marker; sound(`C4A255`); appendText; 
   //Coco
   Coco`"But strangely, he was able to breathe once 
got inside."`;
   waitForClick; clearText; marker; sound(`C4A256`); appendText; 
   //Coco
   Coco`"'Oh, good to see you, Gonta,' the old guy 
welcomed him."`;
   waitForClick; clearText; marker; sound(`C4A257`); appendText; 
   //Coco
   Coco`"Gonta had a gourmet dinner and a wonderful 
time."`;
   waitForClick; clearText; marker; sound(`C4A258`); appendText; 
   //Coco
   Coco`"But it eventually it came time for him to go 
home."`;
   waitForClick; clearText; marker; sound(`C4A259`); appendText; 
   //Coco
   Coco`"Gonta said, 'I'm real sorry, but I've got to 
go home soon,'"`;
   waitForClick; clearText; marker; sound(`C4A260`); appendText; 
   //Coco
   Coco`"The old man who lived under the ocean said, 
'Huh, you're leaving so soon? That's too bad.'"`;
   waitForClick; clearText; marker; sound(`C4A261`); appendText; 
   //Coco
   Coco`"'My daughter's waiting for me at home. I'll 
come again sometime soon, okay?'"`;
   waitForClick; clearText; marker; sound(`C4A262`); appendText; 
   //Coco
   Coco`"'Oh well...hey, why don't you take this for 
souvenir?'"`;
   waitForClick; clearText; marker; sound(`C4A263`); appendText; 
   //Coco
   Coco`"The old man handed him a bottle of something 
that looked like alcohol."`;
   waitForClick; clearText; marker; sound(`C4A264`); appendText; 
   //Coco
   Coco`"'What's this?' asked Gonta."`;
   waitForClick; clearText; marker; sound(`C4A265`); appendText; 
   //Coco
   Coco`"The old man answered with a big smile."`;
   waitForClick; clearText; marker; sound(`C4A266`); appendText; 
   //Coco
   Coco`"'It's Mermaid Tears.'"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; marker; sound(`C4A267`); appendText; 
   //Coco
   Coco`"Gonta went home and hid the souvenir in the 
cabinet."`;
   waitForClick; clearText; marker; sound(`C4A268`); appendText; 
   //Coco
   Coco`"And...a few days later...an 'incident' took 
place."`;
   waitForClick; clearText; marker; sound(`C4A269`); appendText; 
   //Coco
   Coco`"While Gonta wasn't home, his daughter 
secretly opened the cabinet and drank all the 
liquid in the bottle."`;
   waitForClick; clearText; marker; sound(`C4A270`); appendText; 
   //Coco
   Coco`"It was so delicious that the girl drank the 
whole thing up."`;
   waitForClick; clearText; marker; sound(`C4A271`); appendText; 
   //Coco
   Coco`"And...."`;
   waitForClick; clearText; marker; sound(`C4A272`); appendText; 
   //Coco
   Coco`"After that, the girl stopped aging at all."`;
   waitForClick; clearText; marker; sound(`C4A273`); appendText; 
   //Coco
   Coco`"A year had passed, then two and then 
three...."`;
   waitForClick; clearText; marker; sound(`C4A274`); appendText; 
   //Coco
   Coco`"After five, 10 and 20 years, the girl still 
was the same beautiful self."`;
   waitForClick; clearText; marker; sound(`C4A275`); appendText; 
   //Coco
   Coco`"She had a body that would never age."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; marker; sound(`C4A276`); appendText; 
   //Coco
   Coco`"Eternal youth and longevity has always been a 
dream and a hope for humans, but it wasn't 
the case for this girl. "`;
   waitForClick; clearText; marker; sound(`C4A277`); appendText; 
   //Coco
   Coco`"She lamented and cursed her own fate."`;
   waitForClick; clearText; marker; sound(`C4A278`); appendText; 
   //Coco
   Coco`"Because she stayed at the age of 17 but her 
boyfriend grew older and older."`;
   waitForClick; clearText; marker; sound(`C4A279`); appendText; 
   //Coco
   Coco`"One day an incident happened that was very 
sad."`;
   waitForClick; clearText; marker; sound(`C4A280`); appendText; 
   //Coco
   Coco`"Her boyfriend passed from this world to the 
next at the tender age of 34."`;
   waitForClick; clearText; marker; sound(`C4A281`); appendText; 
   //Coco
   Coco`"Before he died, he said to her."`;
   waitForClick; clearText; marker; sound(`C4A282`); appendText; 
   //Coco
   Coco`"'Wait for me for 700 years! After 700 years 
has passed, I'll be reborn into this world 
and come to you!'"`;
   waitForClick; clearText; marker; sound(`C4A283`); appendText; 
   //Coco
   Coco`"The girl cried and cried. BOY did she just 
cry and cry."`;
   waitForClick; clearText; marker; sound(`C4A284`); appendText; 
   //Coco
   Coco`"After a while, because she was so sad at 
losing him, she decided to leave on a long 
trip."`;
   waitForClick; clearText; marker; sound(`C4A285`); appendText; 
   //Coco
   Coco`"She renounced the material world and decided 
to live her life as a nun."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; marker; sound(`C4A286`); appendText; 
   //Coco
   Coco`"The nun traveled around the country. She 
cured the sick, helped the poor, did a little 
farming, built some bridges over rivers and 
planted lots of camellia seeds."`;
   waitForClick; clearText; marker; sound(`C4A287`); appendText; 
   //Coco
   Coco`"When the camellias grew mature, healthy and 
started to flower, she would move on to 
another region and begin all over again 
helping those in need...."`;
   waitForClick; clearText; marker; sound(`C4A288`); appendText; 
   //Coco
   Coco`"She continued living that way for hundreds of 
years."`;
   waitForClick; clearText; marker; sound(`C4A289`); appendText; 
   //Coco
   Coco`"The reason she planted camellia seeds was as 
a way of giving directions to her boyfriend 
in case he came looking for her."`;
   waitForClick; clearText; marker; sound(`C4A290`); appendText; 
   //Coco
   Coco`"She planted lots and lots of camellia seeds 
so that when he was reborn into this world, 
he would know where she was."`;
   waitForClick; clearText; marker; sound(`C4A291`); appendText; 
   //Coco
   Coco`"She hadn't given up hope."`;
   waitForClick; clearText; marker; sound(`C4A292`); appendText; 
   //Coco
   Coco`"She had kept believing the whole time that 
her boyfriend's words would come true."`;
   waitForClick; clearText; marker; sound(`C4A293`); appendText; 
   //Coco
   Coco`"At last, 700 hundred years passed and she 
returned to her homeland."`;
   waitForClick; clearText; marker; sound(`C4A294`); appendText; 
   //Coco
   Coco`"But there wasn't anyone who knew her anymore."`;
   waitForClick; clearText; marker; sound(`C4A295`); appendText; 
   //Coco
   Coco`"With no place to live, she decided to enter 
a cave on the outskirts of the village."`;
   waitForClick; clearText; marker; sound(`C4A296`); appendText; 
   //Coco
   Coco`"She planted many, many camellia seeds near 
the entrance."`;
   waitForClick; clearText; marker; sound(`C4A297`); appendText; 
   //Coco
   Coco`"Before she entered in to the cave, she told 
the villagers."`;
   waitForClick; clearText; marker; sound(`C4A298`); appendText; 
   //Coco
   Coco`"'I will ring a bell at sunrise and sunset.'"`;
   waitForClick; clearText; marker; sound(`C4A299`); appendText; 
   //Coco
   Coco`"'If you stop hearing the bell, please just 
think that I have passed away.'"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; marker; sound(`C4A300`); appendText; 
   //Coco
   Coco`"A year passed, then two and three...."`;
   waitForClick; clearText; marker; sound(`C4A301`); appendText; 
   //Coco
   Coco`"After five, 10 and then 20 years, her 
boyfriend STILL didn't show up."`;
   waitForClick; clearText; marker; sound(`C4A302`); appendText; 
   //Coco
   Coco`"30 years passed, then 40 and then 50 years 
passed...."`;
   waitForClick; clearText; marker; sound(`C4A303`); appendText; 
   //Coco
   Coco`"After 60, 70, 80 years had passed, her 
boyfriend STILL hadn't shown up."`;
   waitForClick; clearText; marker; sound(`C4A304`); appendText; 
   //Coco
   Coco`"800 years had passed since she was born."`;
   waitForClick; clearText; marker; sound(`C4A305`); appendText; 
   //Coco
   Coco`"The bell finally stopped ringing."`;
   waitForClick; clearText; marker; sound(`C4A306`); appendText; 
   //Coco
   Coco`"After all that time, her boyfriend had never 
appeared."`;
   waitForClick; clearText; marker; sound(`C4A307`); appendText; 
   //Coco
   Coco`"The camellias in front of the cave blossomed 
beautifully, never wilting for many years."`;
   waitForClick; clearText; marker; sound(`C4A308`); appendText; 
   //Coco
   Coco`"People honored this young and beautiful nun 
and prayed for her...."`;
   waitForClick; clearText; marker; sound(`C4A309`); appendText; 
   //Coco
   Coco`"And wished for longevity and happiness...."`;
   waitForClick; clearText; marker; sound(`C4A310`); appendText; 
   //Coco
   Coco`"And people decided to call her, 'Yaobikuni,' 
the 800-year-old nun. "`;
   waitForClick; clearText; marker; sound(`C4A311`); appendText; 
   //Coco
   Coco`"The End."`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; 
});
playBGM({ num: 1, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`C4A312`); appendText; 
   //Coco
   Coco`"Oh, not really...it's 'to be continued'...."`;
   waitForClick; clearText; marker; sound(`C4A313`); appendText; 
   //You
   You`"...Huh?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"There's more!?"`;
   waitForClick; clearText; marker; sound(`C4A314`); appendText; 
   //Coco
   Coco`"Well, actually that's the end for the tale I 
know."`;
   waitForClick; clearText; marker; sound(`C4A315`); appendText; 
   //Coco
   Coco`"But there might be more to the tale...."`;
   waitForClick; clearText; marker; sound(`C4A316`); appendText; 
   //You
   You`"What do you mean?"`;
   waitForClick; clearText; marker; sound(`C4A317`); appendText; 
   //Coco
   Coco`"Well, nobody actually found her body."`;
   waitForClick; clearText; marker; sound(`C4A318`); appendText; 
   //Coco
   Coco`"They just figured she was dead because the 
bell stopped ringing...."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hmmm...."`;
   waitForClick; clearText; marker; sound(`C4A319`); appendText; 
   //Coco
   Coco`"Maybe, maybe she's still alive in a cave 
somewhere in Japan, you know?"`;
   waitForClick; clearText; marker; sound(`C4A320`); appendText; 
   //You
   You`"Still waiting for her 'boyfriend'?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Stupid! There's no way that story is true!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It's just an old fairy tale, is all."`;
   waitForClick; clearText; marker; sound(`C4A321`); appendText; 
   //Coco
   Coco`"I don't know...."`;
   waitForClick; clearText; marker; sound(`C4A322`); appendText; 
   //Coco
   Coco`"I think she might still be alive 
somewhere...."`;
   waitForClick; clearText; marker; sound(`C4A323`); appendText; 
   //You
   You`"Yeah, me too!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh come on, are you guys serious?"`;
   waitForClick; clearText; marker; sound(`C4A324`); appendText; 
   //You
   You`"Hey Coco? When was this nun born anyway?"`;
   waitForClick; clearText; marker; sound(`C4A325`); appendText; 
   //Coco
   Coco`"I don't know exactly, but I've heard it was 
about 1300 years ago."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Ha-ha! You see? 1300 years ago. If she were 
still alive, she'd be 1300 years old!"`;
   waitForClick; clearText; marker; sound(`C4A326`); appendText; 
   //You
   You`"Look, you don't have to inform us of the 
obvious."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Let me put it this way."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"1300 years from now would be like 700 A.D. 
That means she would have been living since 
the Nara era, or even before that."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"That would amaze even Prince Nakano-Ooe."`;
   waitForClick; clearText; marker; sound(`C4A327`); appendText; 
   //You
   You`"What are you so worked up about...?"`;
   waitForClick; clearText; marker; sound(`C4A328`); appendText; 
   //You
   You`"You're the one who said it was just an old 
story, Takeshi."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I'm not worked up...."`;
   waitForClick; clearText; marker; sound(`C4A329`); appendText; 
   //You
   You`"You're old enough to know what I'm talking 
about."`;
   waitForClick; clearText; marker; sound(`C4A330`); appendText; 
   //You
   You`"Don't break girls' romantic dreams for no 
good reason."`;
   waitForClick; clearText; marker; sound(`C4A331`); appendText; 
   //You
   You`"Right, Coco?"`;
   waitForClick; clearText; marker; sound(`C4A332`); appendText; 
   //Coco
   Coco`"Yeah."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`C4A333`); appendText; 
   //You
   You`"She entered the cave at the age of 700, so 
that means she waited for her boyfriend 
another 600 years, right?"`;
   waitForClick; clearText; marker; sound(`C4A334`); appendText; 
   //You
   You`"Oh, but she might still be alive, so that 
makes it 'she is waiting,' as in the present 
tense."`;
   waitForClick; clearText; marker; sound(`C4A335`); appendText; 
   //You
   You`"Anyway...."`;
   waitForClick; clearText; marker; sound(`C4A336`); appendText; 
   //You
   You`"When her boyfriend finally arrives at the 
entrance of the cave, which is overflowing 
with camellia flowers...!"`;
   waitForClick; clearText; marker; sound(`C4A337`); appendText; 
   //You
   You`"They will finally be reunited!"`;
   waitForClick; clearText; marker; sound(`C4A338`); appendText; 
   //You
   You`"And the extra 600 years of loneliness will be 
rewarded!"`;
   waitForClick; clearText; marker; sound(`C4A339`); appendText; 
   //You
   You`"Their 1300 years old love will be fulfilled!"`;
   waitForClick; clearText; marker; sound(`C4A340`); appendText; 
   //You
   You`"Oh, how romantic!!"`;
   waitForClick; clearText; marker; sound(`C4A341`); appendText; 
   //Coco
   Coco`"Romantic, huh...."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO13C`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`C4A342`); appendText; 
   //Coco
   Coco`"I think it's more sad than romantic...."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`".........?"`;
   waitForClick; clearText; marker; sound(`C4A343`); appendText; 
   //You
   You`".........?"`;
   waitForClick; clearText; marker; sound(`C4A344`); appendText; 
   //Coco
   Coco`"Well, I mean...."`;
   waitForClick; clearText; marker; sound(`C4A345`); appendText; 
   //Coco
   Coco`"She's been waiting in this deep dark cave...."`;
   waitForClick; clearText; marker; sound(`C4A346`); appendText; 
   //Coco
   Coco`"Just waiting for her boyfriend for the 
longest time, you know?"`;
   waitForClick; clearText; marker; sound(`C4A347`); appendText; 
   //Coco
   Coco`"She's been all alone."`;
   waitForClick; clearText; marker; sound(`C4A348`); appendText; 
   //Coco
   Coco`"So alone and so lonely...."`;
   waitForClick; clearText; marker; sound(`C4A349`); appendText; 
   //Coco
   Coco`"But she couldn't die either...."`;
   waitForClick; clearText; marker; sound(`C4A350`); appendText; 
   //Coco
   Coco`"I wish she'd never drank those mermaid's 
tears...."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Coco
   Coco`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //You
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Coco
   Coco`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Hey, Coco?"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO13B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`C4A351`); appendText; 
   //Coco
   Coco`"What?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Do you believe that mermaids actually exist?"`;
   waitForClick; clearText; marker; sound(`C4A352`); appendText; 
   //You
   You`"Geez...there you go again...you are too 
practical."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well, if mermaids don't exist, then you can 
forget about the whole story to begin with."`;
   waitForClick; clearText; marker; sound(`C4A353`); appendText; 
   //You
   You`"That's not necessarily true."`;
   waitForClick; clearText; marker; sound(`C4A354`); appendText; 
   //You
   You`"Whether mermaids exist or not doesn't have 
anything to do with the whether or not this 
story is true."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Why not?"`;
   waitForClick; clearText; marker; sound(`C4A355`); appendText; 
   //You
   You`"Well it's obvious that the liquid Gonta got 
from that old man was 'A longevity potion,' I 
don't care what you say."`;
   waitForClick; clearText; marker; sound(`C4A356`); appendText; 
   //You
   You`"They could have just named it 'mermaid ears', 
right?"`;
   waitForClick; clearText; marker; sound(`C4A357`); appendText; 
   //You
   You`"What I'm trying to say is, the potion didn't 
actually have to be made from mermaid 
teardrops."`;
   waitForClick; clearText; marker; sound(`C4A358`); appendText; 
   //You
   You`"I mean, these candies aren't actual mermaid 
teardrops."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well, you have a point."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So 'Mermaid Tears' is only the name for that 
strange liquid, right?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Alright, fine. Let's skip the whole mermaid 
business."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"But you know, You?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Think really hard, will you?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Do you honestly think that something like 
'eternal youth' exists?"`;
   waitForClick; clearText; marker; sound(`C4A359`); appendText; 
   //You
   You`"I do."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You have a basis for that belief?"`;
   waitForClick; clearText; marker; sound(`C4A360`); appendText; 
   //You
   You`"Yes."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Okay, show me then."`;
   waitForClick; clearText; marker; sound(`C4A361`); appendText; 
   //You
   You`"Fine."`;
   waitForClick; clearText; marker; appendText; 
   //Coco
   Coco`"........."`;
   waitForClick; clearText; marker; sound(`C4A362`); appendText; 
   //You
   You`"This is a little off topic, but...doesn't 
this story of Yaobikuni remind you of 
something else?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`".........?"`;
   waitForClick; clearText; marker; sound(`C4A363`); appendText; 
   //Coco
   Coco`".........?"`;
   waitForClick; clearText; marker; sound(`C4A364`); appendText; 
   //You
   You`"I'm talking about the tale of Rip Van Winkle."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Rip Van...."`;
   waitForClick; clearText; marker; sound(`C4A365`); appendText; 
   //Coco
   Coco`"...Winkle?"`;
   waitForClick; clearText; marker; sound(`C4A366`); appendText; 
   //You
   You`"Well, the father got invited to a party, and 
got some kind of alcoholic beverage, right?"`;
   waitForClick; clearText; marker; sound(`C4A367`); appendText; 
   //You
   You`"That's just like Rip Van Winkle."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So what?"`;
   waitForClick; clearText; marker; sound(`C4A368`); appendText; 
   //You
   You`"What I'm trying to say is this - "`;
   waitForClick; clearText; marker; sound(`C4A369`); appendText; 
   //You
   You`"Rip Van Winkle drank the liquor and became a 
very old man, right?"`;
   waitForClick; clearText; marker; sound(`C4A370`); appendText; 
   //You
   You`"Yaobikuni drank the 'mermaid tears' and 
gained a body of perpetual youth that never 
ages ...."`;
   waitForClick; clearText; marker; sound(`C4A371`); appendText; 
   //You
   You`"And that means that...."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Ohhh...I'm beginning to see what you are 
trying to say."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Rip Van Winkle hits the bottle just a LITTLE 
tooooo hard, and when he wakes up 20 years had 
passed."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Just like that with the 800-year-old nun...."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"By drinking 'mermaid tears', she was sent 700 
or 800 years into the future."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So she didn't actually gain eternal youth, 
she just slipped through time into the future."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So THAT explains why she stayed 17 years even 
after 800 years."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You think that explains it???"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well it doesn't!!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"There's no such thing as time travel in real 
life!"`;
   waitForClick; clearText; marker; sound(`C4A372`); appendText; 
   //You
   You`"Hey, hey, wait a second...don't go jumping to 
conclusions."`;
   waitForClick; clearText; marker; sound(`C4A373`); appendText; 
   //You
   You`"I never said a word about time travel, did I?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Coco
   Coco`"........."`;
   waitForClick; clearText; marker; sound(`C4A374`); appendText; 
   //You
   You`"I'm just curious about the similarity between 
the 'dwarven spirits' and 'mermaid tears.'"`;
   waitForClick; clearText; marker; sound(`C4A375`); appendText; 
   //You
   You`"The dwarven liquor was actually...'a solution 
that rapidly accelerates aging.'"`;
   waitForClick; clearText; marker; sound(`C4A376`); appendText; 
   //You
   You`"What was in the tears was...'a solution that 
slows down aging.'"`;
   waitForClick; clearText; marker; sound(`C4A377`); appendText; 
   //You
   You`"Both of them were handed down from some old 
guy."`;
   waitForClick; clearText; marker; sound(`C4A378`); appendText; 
   //You
   You`"And both of them were given at a mysterious 
gathering."`;
   waitForClick; clearText; marker; sound(`C4A379`); appendText; 
   //You
   You`"So it tells us...."`;
   waitForClick; clearText; marker; sound(`C4A380`); appendText; 
   //You
   You`"Both 'dwarven spirits' and 'mermaid 
tears'...."`;
   waitForClick; clearText; marker; sound(`C4A381`); appendText; 
   //You
   You`"...are possibly made by the same people or 
by the same civilization."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"It tells us that?"`;
   waitForClick; clearText; marker; sound(`C4A382`); appendText; 
   //You
   You`"IT DOES!"`;
   waitForClick; clearText; marker; appendText; 
   //Coco
   Coco`"........."`;
   waitForClick; clearText; marker; sound(`C4A383`); appendText; 
   //You
   You`"Well, the castle in Coco's story might have 
been part of some ruins of an ancient 
civilization, sunken under the ocean."`;
   waitForClick; clearText; marker; sound(`C4A384`); appendText; 
   //You
   You`"For example, the civilization of Lemuria."`;
   waitForClick; clearText; marker; sound(`C4A385`); appendText; 
   //You
   You`"In Lemuria, it is thought they had science 
and technology which could control aging...."`;
   waitForClick; clearText; marker; sound(`C4A386`); appendText; 
   //You
   You`"And for some reason, Gonta got invited to the 
castle."`;
   waitForClick; clearText; marker; sound(`C4A387`); appendText; 
   //You
   You`"Uh-huh,"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Coco
   Coco`"........."`;
   waitForClick; clearText; marker; sound(`C4A388`); appendText; 
   //You
   You`"So? Are you satisfied?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I t think that was a pretty random 
explanation...but that's okay, I guess."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I got your point."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"But you still haven't given me any 
substantial evidence that eternal youth 
exists."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"The point of what you just said was 
basically this - "`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Rip Van Winkle and the 800-year-old nun's dad 
must have made contact with the lost 
civilization of Lemuria.'"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Alright then, let's just SUPPOSE this 
assumption was correct."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Even if the civilization of Lemuria actually 
did exist...."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Nobody knows if they had the 'technology' to 
control aging,' right?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"There's no way you can prove it."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Besides, Lemuria never did, and never will 
exist."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Sclater's theory has been proven wrong a 
long time ago."`;
   waitForClick; clearText; marker; sound(`C4A389`); appendText; 
   //Coco
   Coco`"What's Sclater?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"The name of an English zoologist."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"In the mid 19th century he...."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"He noticed that the same species of 'lemur' 
inhabited in Africa, Madagascar Islands, Asia 
and Indonesian Islands."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"But lemurs can't swim...well maybe just a 
little, but certainly not a long distance."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Well, then how could the same kind of lemurs 
reside on different islands separated by a 
massive ocean?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Sclater thought...."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"'That's it! A long time ago, there must have 
been a great landmass in the Indian Ocean, 
and these islands must have been connected as 
one!'"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"But by the mid 20th century, the theory of 
'continental drift had been proven, and 
Sclater's theory was ignored after that."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"'A long, long time ago, all the land on the 
earth today formed one big continent....'"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"'Which very slowly got broken up and the 
continents shifted with the movement of the 
earth's crust, or by virtue of plate 
tectonics, to become the way they are today.'"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"To be precise, the land masses are still 
moving even today, by a few inches or less 
every year."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So, the theory of 'continental drift' now 
known to be fact rather than just 'theory.'"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So the reason why lemurs exist on different 
islands can be explained by this theory."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So there! You see? There is no such thing as 
Lemuria!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"If there's no Lemuria, there couldn't be a 
Lemurian civilization!"`;
   waitForClick; clearText; marker; sound(`C4A390`); appendText; 
   //You
   You`"Oh really?"`;
   waitForClick; clearText; marker; sound(`C4A391`); appendText; 
   //You
   You`"You don't say?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Coco
   Coco`"........."`;
   waitForClick; clearText; marker; sound(`C4A392`); appendText; 
   //You
   You`"Well, sorry to cut you off, when you're just 
getting started, but the 'Lemuria' I was 
referring to was in the Pacific Ocean."`;
   waitForClick; clearText; marker; sound(`C4A393`); appendText; 
   //You
   You`"Why would a Japanese like Gonta go all the 
way over to the Strait of Malacca and to the 
Indian Ocean?"`;
   waitForClick; clearText; marker; sound(`C4A394`); appendText; 
   //You
   You`"Lemuria was located in the Pacific Ocean."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"In the Pacific Ocean?...Are you by any chance 
talking about the continent of Mu?"`;
   waitForClick; clearText; marker; sound(`C4A395`); appendText; 
   //You
   You`"It doesn't matter what you call it."`;
   waitForClick; clearText; marker; sound(`C4A396`); appendText; 
   //You
   You`"There used to be an ancient civilization in 
the Pacific before recorded history."`;
   waitForClick; clearText; marker; sound(`C4A397`); appendText; 
   //You
   You`"Some people call it Lemuria, others call it 
Mu. It doesn't really matter, does it?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh...I'm getting a headache...."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"I guess you are right, it doesn't matter...it 
really doesn't...."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Whether you call it Lemuria or Mu, it never 
existed anyway."`;
   waitForClick; clearText; marker; sound(`C4A398`); appendText; 
   //You
   You`"Why do you have to be so serious...?"`;
   waitForClick; clearText; marker; sound(`C4A399`); appendText; 
   //You
   You`"It's so childish...."`;
   waitForClick; clearText; marker; sound(`C4A400`); appendText; 
   //You
   You`"Don't you have any imagination, Takeshi?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You're the one who's childish! You're 18, 
right!? Grow up, will you? Get real!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"'An ancient civilization before time, 
'perpetual youth and longevity,' 'Rip Van 
Winkle, '800-year-old nun', and 'Santa 
Claus'...none of these exist!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"They're all just fairy tales!"`;
   waitForClick; clearText; marker; sound(`C4A401`); appendText; 
   //You
   You`"Not all fairy tales are fiction!"`;
   waitForClick; clearText; marker; sound(`C4A402`); appendText; 
   //You
   You`"Some of them may be real!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"No way!"`;
   waitForClick; clearText; marker; sound(`C4A403`); appendText; 
   //You
   You`"Yes way!"`;
   waitForClick; clearText; marker; sound(`C4A404`); appendText; 
   //You
   You`"Well I, for one, believe Rip Van Winkle 
really existed!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Oh, you're so sure, huh?"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"You do have any proof? Do you?"`;
   waitForClick; clearText; marker; sound(`C4A405`); appendText; 
   //You
   You`"Of course!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Then let's see it."`;
   waitForClick; clearText; marker; sound(`C4A406`); appendText; 
   //You
   You`"Okay, I'll show you!"`;
   waitForClick; clearText; marker; appendText; 
   //Coco
   Coco`"........."`;
   waitForClick; clearText; marker; sound(`C4A407`); appendText; 
   //You
   You`"Rip Van Winkle was,"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What?"`;
   waitForClick; clearText; marker; sound(`C4A408`); appendText; 
   //You
   You`"Rip Van Winkle was...Rip Van Winkle was...."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`".........?"`;
   waitForClick; clearText; marker; sound(`C4A409`); appendText; 
   //Coco
   Coco`".........?"`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; sound(`C4A410`); appendText; 
   //You
   You`"Rip...Van...W...inkle...was...."`;
   waitForClick; clearText; marker; sound(`C4A411`); appendText; 
   //You
   You`"...Winkle...was...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`All the sudden, You put her hand on her chest 
and looked like she was suffering.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO13D`, transition: 20 });
playBGM({ num: 12, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   //Takeshi
   Takeshi`"What's wrong!?"`;
   waitForClick; clearText; marker; sound(`C4A412`); appendText; 
   //Coco
   Coco`"Hey, are you okay, Nakkyu?"`;
   waitForClick; clearText; marker; sound(`C4A413`); appendText; 
   //You
   You`"Uh-huh...."`;
   waitForClick; clearText; marker; sound(`C4A414`); appendText; 
   //You
   You`"I'm okay...."`;
   waitForClick; clearText; marker; sound(`C4A415`); appendText; 
   //You
   You`"It happens...all the time...."`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"What do you mean all the time!?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You's face had gone pale.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her lips were almost purple, and sweat began 
to run down her forehead.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She grabbed her chest with her right hand. `;
   waitForClick; clearText; marker; sound(`C4A416`); appendText; 
   //You
   You`"Uhhhh...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She groaned in low voice and squatted to the 
floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She jabbed her left hand into the mountain of 
tears.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Mermaid Tears scattered everywhere, and 
the pen on top flew in the air.`;
   waitForClick; clearText; marker; sound(`C4A417`); appendText; 
   //You
   You`"I'll...be...alright...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She didn't seem alright at all.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her breathing was fast and her body was stiff 
and shaking, her facial color almost seemed 
like that of a corpse. `;
   waitForClick; clearText; marker; appendText; 
   Narr`(What should we do?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Should I leave You here and call for help?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(No! We don't any time to lose!)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(To the Infirmary! I've got to take her to the 
Infirmary!)`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"Coco! I'm gonna carry You to the Infirmary!"`;
   waitForClick; clearText; marker; appendText; 
   //Takeshi
   Takeshi`"So you go ahead and tell everybody what's 
going on!"`;
   waitForClick; clearText; marker; sound(`C4A418`); appendText; 
   //Coco
   Coco`"O-okay, I will!"`;
   waitForClick; clearText; 
});
bgload({ name: `BG06A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I carried You on my back, and jumped out of 
the kiosk.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The infirmary was close, so I could get there 
in less than a minute if I ran.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Before I could think, my feet had already 
started moving. `;
   waitForClick; clearText; 
});
bgload({ name: `BG25A3`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`C4A419`); appendText; 
   //You
   You`"Takeshi...."`;
   waitForClick; clearText; marker; sound(`C4A420`); appendText; 
   //You
   You`"Takeshi...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I kept running in silence.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The infirmary was near.`;
   waitForClick; clearText; marker; sound(`C4A421`); appendText; 
   //You
   You`"Hey...Takeshi...."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You whispered.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Into my ear....`;
   waitForClick; clearText; marker; appendText; 
   Narr`In a small voice....`;
   waitForClick; clearText; marker; sound(`C4A422`); appendText; 
   //You
   You`"Rip...Van...Winkle....was..."`;
   waitForClick; clearText; marker; sound(`C4A423`); appendText; 
   //You
   You`"Rip...Van...Winkle....was..."`;
   waitForClick; clearText; marker; sound(`C4A424`); appendText; 
   //You
   You`"He really...."`;
   waitForClick; clearText; marker; sound(`C4A425`); appendText; 
   //You
   You`"He...really...."`;
   waitForClick; clearText; 
});
varop(`(28 0a a4) b3 := (00) 0`);
jump(`YC4B`);
