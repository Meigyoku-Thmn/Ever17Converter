l_b0 = 5;
l_dayA = 4;
l_dayB = 4;
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
   Kid`"It's raining..."`;
   `I was sitting at the tip of the whale's nose.`;
   `Sara was beside me.`;
   `She covered her head with her hand, to keep 
the droplets from getting her hair wet .`;

});
fgload({ id: 1, name: `SA08AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C4A000)`"Rain?"`;
   Sara(C4A001)`"You know it's not rain, don't you?" `;

});
showTextbox();
text(() => {
   Sara(C4A002)`"It's just the whale blowing out water."`;
   Kid`"I know that."`;

});
showTextbox();
text(() => {
   Kid`"I know it, but it looks like it's raining to 
me."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Water, misty and drizzling poured upon us 
from the sky.`;
   `The stars reflected lights from the water 
droplets and emitted vibrant colors.`;
   `We were in the cosmos.`;
   `The whale was alive.`;
   `At least it seemed that way to me.`;
   `A whale swimming in the starry sky.`;
   `His back surging like a wave, he undulated 
again and again. `;
   `His soft mouth opened and closed, and even 
puffed up time to time.`;
   `About every three minutes, he blew out a warm 
breath through his blowhole.`;
   `A seawater mist of spray would scatter around 
the area.`;
   `Sitting at the tip of his nose, Sara and I 
bobbed up and down, in time with his 
movements...`;
   `Although, he undulated so slowly that we 
could let go with our hands and still feel 
safe. `;
   `It was like a cradle rocking back and forth...`;
   `On the back of the whale, we sailed through 
the cosmos.`;

});
if (l_went_with_sara_in_3rd_day == 1) goto(lbl_000001ed);
fgload({ id: 1, name: `SA05AWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(C4A003)`"Hey, Kid?"`;
   Sara(C4A004)`"Actually, there's something I've been wanting 
to ask you...." `;
   Kid`"Yeah? What's that?"`;
   Sara(C4A005)`"Kid, you remember when we had a blackout, 
don't you?"`;
   Kid`"Sure."`;
   Kid`"Yesterday...no, wait, since we already passed 
midnight, I guess, it was the day before 
yesterday, wasn't it?"`;
   Kid`"You mean the blackout from two days ago, 
right?"`;
   Sara(C4A006)`"Yeah."`;
   Sara(C4A007)`"When Nakkyu tried to open the door to the 
Generator Room...you stopped her, right?"`;
   Kid`"Yeah."`;
   Sara(C4A008)`"How come? Why did you stop her?"`;
   Kid`"I don't really know what to say...."`;
   Kid`"I said the same thing then, but I thought it 
would be dangerous for her to open the door..."`;
   Sara(C4A009)`"Really? Is that all?"`;
   Kid`"Um...Uh-huh...."`;
   Sara(C4A010)`"How about this, then?"`;
   Sara(C4A011)`"Can you see what's in this?"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Saying this, Sara slowly took something out 
of her pocket.`;
   `Shick!`;
   `A flame appeared from her hand.`;

});
bgload({ name: `EV_SA05A`, transition: 20 });
showTextbox();
text(() => {
   `The whole scene changed in an instant as 
Sara's face lit up in red.`;
   `I saw that what Sara had taken out was a 
pendant and a lighter.`;
   Sara`"........."`;
   `Without saying a word, Sara brought the flame 
and the pendant close in front of my eyes.`;

});
bgload({ name: `EV_ET02B`, transition: 20 });
showTextbox();
text(() => {
   `Inside the pendant floated a holographic 
image of a man who I had never seen before.`;
   Kid`"Who's this?"`;
   `When I asked this, Sara's hand began to quiver.`;
   `The flame shook.`;
   `The large shadow projected on the ceiling 
swayed as well. `;
   Sara(C4A012)`"So..."`;
   Sara(C4A013)`"You can see it, too..."`;

});
bgload({ name: `EV_SA05A`, transition: 20 });
showTextbox();
text(() => {
   `Sara held the pendant closer and stared at 
the image inside it.`;
   Kid`"Hey, who's image is that?"`;
   Sara`"........."`;
   Kid`"You're not going to tell me?"`;
   Sara`"........."`;
   `Sara looked up the starry sky.`;
   `She stared at the back of the whale first, 
then the pendant held tightly in her hand, 
finally looking slightly upward into my eyes.`;
   `There was a long silence.`;
   `Sara looked as though she might be deep in 
thought, or maybe even thinking nothing at 
all...`;
   `All I could hear was regular sound of our 
breathing as it repeated steadily.`;
   `And then...`;
   Sara(C4A014)`"He's from the Sun."`;
   `Sara whispered.`;
   Kid`"A person from the Sun???"`;
   Sara(C4A015)`"Yeah."`;
   Kid`"Hey, let me see that?"`;
   `I took the pendant and the lighter from her 
and checked the image again.`;

});
goto(lbl_00000204);
let lbl_000001ed;
bgload({ name: `EV_SA05A`, transition: 20 });
showTextbox();
text(() => {
   `Sara took the lighter from her pocket and lit 
it.`;
   `The shimmering flame colored her face red.`;
   `She had the pendant in her other hand.`;
   `The pendant was shaking in Sara's small hand.`;
   `It was the same one she had shown me in the 
small room in the warehouse.`;
   Kid`"Hey, Sara? I'm going to ask you again, 
but...."`;
   Kid`"Who is the man in the pendant?"`;
   Sara(C4A016)`"And I already told you, right?"`;
   Kid`"What? That he's from the Sun??"`;
   Sara(C4A017)`"Yep..."`;
   `She handed me the pendant and the lighter and 
I stared the image closely.`;

});
goto(lbl_00000204);
let lbl_00000204;
bgload({ name: `EV_ET02B`, transition: 20 });
showTextbox();
text(() => {
   `It goes without saying, but he seemed to look 
like a normal person.`;
   `I had no idea how people from the Sun were 
supposed to look, but the man in the image at 
least had the face of an 'earthling.'`;
   `He looked like any ordinary, young man to me.`;

});
if (l_went_with_sara_in_3rd_day == 1) goto(lbl_00000235);
showTextbox();
text(() => {
   Kid`"Are you serious, he's from the Sun?"`;
   `I asked her.`;
   Sara(C4A018)`"Ha, ha...you're so gullible, Kid."`;
   Kid`"What?"`;
   Sara(C4A019)`"There's no such thing as people on the Sun."`;
   Sara(C4A020)`"Do you honestly think life could exist on 
that ball of fire?"`;
   Kid`"So, you were lying to me?"`;

});
goto(lbl_0000023e);
let lbl_00000235;
showTextbox();
text(() => {
   Kid`"Are you serious, he's from the Sun?"`;
   `I asked her.`;
   Sara(C4A018)`"Ha, ha...you're so gullible, Kid."`;
   Kid`"What?"`;
   Sara(C4A019)`"There's no such thing as people on the sun."`;
   Sara(C4A020)`"Do you honestly think life could exist on 
that ball of fire?"`;
   Kid`"So, you were lying to me?"`;

});
goto(lbl_0000023e);
let lbl_0000023e;
showTextbox();
text(() => {
   Sara(C4A021)`"I wouldn't call it lying. I was joking with 
you, you know, giving you a hard time."`;
   Kid`"What's that supposed to mean?"`;
   Sara(C4A022)`"Well, what do YOU think it means?"`;
   Kid`".........?"`;
   `Sara stretched out her arm and put out the 
lighter.`;
   `Click.`;

});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   `The darkness spread across the cosmos.`;
   `I put the lighter and the pendant together, 
returning them to her.`;
   `Just then, Sara slid down the back of the 
whale without a word.`;
   `I hastily followed suit.`;

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
   Sara(C4A023)`"You can only see the image when you're 
outside."`;
   Sara(C4A024)`"It's made in a way so that it is only visible 
under sunlight."`;
   Sara(C4A025)`"That's why I said he was a sun person."`;
   `Sara stood next to the whale and started 
talking.`;
   Sara(C4A026)`"When I was young, I really believed it 
though."`;
   Sara(C4A027)`"I used to believe that you can only see it 
with sunlight because it was made by people 
who lived on the sun."`;
   Sara(C4A028)`"And that because I had this pendant, I was 
one of their children...."`;
   Sara(C4A029)`"And that I was sent to earth on some kind of 
mission...I used to imagine stuff like that."`;
   Sara(C4A030)`"Looking back on it now, I know those were 
really just childish fantasies."`;
   Kid`"Wa-wait a second, Sara."`;
   Kid`"We're 103 feet underwater. Where is there any 
sun...?"`;
   `Shick!`;

});
makeFGHasYellowAmbient({ id: 1 });
fgload({ id: 1, name: `SA01AWM`, x: 320, useAnim: true });
removeFG({ id: 2, useAnim: true });
showTextbox();
text(() => {
   `Sara interrupted me and lit the lighter.`;
   `Light filled the space around us.`;
   `The flickering flame....`;
   `Despite the insignificant size, a red the 
color of a sunset shone upon the dome-shaped 
ceiling.`;
   Sara(C4A031)`"A flame."`;
   Sara(C4A032)`"Even without the sun, you can see it if 
you've got a lighter."`;
   Sara(C4A033)`"It took me a long time to realize it though."`;
   Sara(C4A034)`"I guess I was 10 or 11, or so...."`;
   Kid`"Really, sunlight or a flame, huh...?"`;
   Sara(C4A035)`"But still...."`;
   Sara(C4A036)`"Even if there is sunlight, or flame, there 
are some people who can't see it."`;
   Kid`"People who can't see it?"`;
   Sara(C4A037)`"Meaning pretty much everybody except me."`;
   Sara(C4A038)`"I'm the only person I've found who can see 
this hologram's image."`;
   Sara(C4A039)`"Well...."`;
   Sara(C4A040)`"I THOUGHT I was the only who could see it."`;

});
if (l_went_with_sara_in_3rd_day == 1) goto(lbl_000002da);
showTextbox();
text(() => {
   Sara(C4A041)`"But now...I guess it seems like there is 
someone else...."`;

});
goto(lbl_000002e3);
let lbl_000002da;
showTextbox();
text(() => {
   Sara(C4A042)`"But you know, I just met someone who can 
also see this image...."`;

});
goto(lbl_000002e3);
let lbl_000002e3;
showTextbox();
text(() => {
   `Sara put out the lighter. The darkness came 
rushing back.`;

});
setFGRenderOrder(4, 1, 2);
fgload({ id: 2, name: `SA01AWM`, x: 320, useAnim: true });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `She flicked the light on again, and put it out.`;
   `She repeated this action a few times...then 
Sara finally spoke.`;
   Sara(C4A043)`"Kid...."`;
   Sara(C4A044)`"I'm talking about you."`;
   `My scar ached.`;
   `The old scar on my left thumb....`;
   Sara(C4A045)`"Why is it?"`;
   Sara(C4A046)`"How come you can you see it too, Kid?"`;
   Sara(C4A047)`"Huh? Why do you think?"`;
   `Sara looked upward into my eyes.`;
   `She pushed the pendant and the lighter 
against my chest.`;
   Sara(C4A048)`"Will you look at it again?"`;

});
removeFG({ id: 2, useAnim: true });
setFGRenderOrder(4, 2, 1);
showTextbox();
text(() => {
   `I took them from her.`;

});
bgload({ name: `EV_ET02B`, transition: 20 });
showTextbox();
text(() => {
   `Striking the flame, I looked closer at the 
pendant.`;
   `A weak 3D image rose dimly before me...`;
   `It was a man who I hadn't even seen before...`;
   `Looking at it this closely, I realized that I 
a piece from the mirror was missing.`;
   `"A scar on my thumb"........."A piece to be 
filled in"....`;
   `I started to suspect the truth of the matter.`;
   Sara(C4A049)`"Do you remember anything?"`;
   Sara(C4A050)`"Does anything about this ring a bell?"`;
   Kid`"No, not really...."`;
   `I was starting to realize, but I shook my head.`;
   `My scar was itching as if an electric current 
were running through it.`;
   Sara(C4A051)`"Oh...."`;
   `Sara dropped her shoulders in disappointment.`;
   Sara(C4A052)`"The man in the image?" `;
   Sara(C4A053)`"I have a feeling...he's my dad."`;
   Kid`"...What?"`;
   Kid`"You think he's your father?"`;
   Sara(C4A054)`"Yeah...."`;
   Sara(C4A055)`"Me and...."`;
   Sara(C4A056)`"My brother's...."`;
   Sara(C4A057)`"Dad...."`;

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
   Coco(C4A058)`"Daddy! Daddddyyyy!"`;
   Takeshi`"........."`;
   Coco(C4A059)`"Hey, Daaaaaaad!"`;
   Takeshi`"........."`;
   Coco(C4A060)`"Daddy, why won't you listen to me!"`;
   Takeshi`"Well, let me tell you."`;
   Takeshi`"Because I'm NOT your dad that's why."`;

});
fgload({ id: 1, name: `CO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C4A061)`"I think it's okay for a girl to call someone 
that who reminds them of their dad."`;
   Coco(C4A062)`"It's written in the preamble of the 
constitution, or something."`;
   Takeshi`"You don't saaaay...well, I've got three 
things to tell you."`;
   Takeshi`"First: As far as I know, not one line in the 
Japanese constitution corresponds to what you 
just said."`;
   Takeshi`"Second: I'm not even close to being fatherly."`;
   Takeshi`"Third: You've already got a dad—who is 
still alive and well."`;
   Takeshi`"So, stop calling me 'daddy', Coco."`;

});
fgload({ id: 1, name: `CO04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C4A063)`"Oh, c'mon!"`;
   Coco(C4A064)`"I wanna call you Daddy! Come on, can't I?"`;
   Takeshi`"Forget it."`;
   Takeshi`"I'm already taking a big hit with this stupid 
nickname 'Takepyon.' Don't make me put up with 
another one like 'daddy' on top of that."`;

});
fgload({ id: 1, name: `CO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C4A065)`"Oh, you're so mean...Daddy!"`;
   Takeshi`"I just told you NOT to call me that!"`;
   Coco(C4A066)`"Grr...."`;
   `Coco growled as she glared at me.`;
   Takeshi`"Grr...."`;
   `But I wasn't going to give in either.`;
   `Coco and I stood face to face, with each 
other on the verge of an outburst.`;
   `As we stood there, I just couldn't help 
thinking to myself.`;
   `How in the world did I end up in this 
situation...?`;

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
   `It had all happened 30 minutes earlier.`;
   Coco(C4A067)`"Hey, Takepyon, Takepyon."`;
   Coco(C4A068)`"Wake up!"`;
   Coco(C4A069)`"I can't go to sleep!"`;
   Coco(C4A070)`"Let's play or something!"`;
   `As she was saying this....`;
   `Coco shook my body hard, pried open my 
eyelids and poured saltwater into my eyes, 
and even shoved hydrogen peroxide up my nose.`;
   `Giving in to her dogged persistence, I 
reluctantly decided to keep her company.`;

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
   Coco(C4A071)`"Grr...."`;
   `Coco was still growling at me.`;
   Coco(C4A072)`"You're going to let me call you Daddy!"`;
   `She was just being outrageous.`;

});
fgload({ id: 1, name: `CO04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C4A073)`"If you won't, I'm gonna bite you!"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Coco(C4A074)`"Snap!"`;
   `Coco chomped down on my arm.`;
   Takeshi`"Ooooouuuch! I can't believe you actually bit 
me!"`;
   `I forcefully pried her face off of my arm.`;

});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `There were teeth marks on my arm, and the area 
started to turn a purplish red. `;
   Coco(C4A075)`"Well believe it!"`;

});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C4A076)`"Uh, Hee-hee-hee-hee!"`;
   `Coco put covered her mouth with her fist and 
giggled triumphantly.`;
   Takeshi`"Why on earth do you want to call me 'daddy' 
anyway?"`;

});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C4A077)`"Because you seem like the daddy type to me."`;
   Takeshi`"You are telling me, after you trapped me 
into this, that a 20-year-old guy like me 
seems like the 'daddy type'? You telling me I 
look old?"`;
   Coco(C4A078)`"Nope."`;
   Coco(C4A079)`"I just kind of thought you did somehow."`;
   Takeshi`"You just thought I did 'somehow,' huh....?"`;
   Takeshi`"Well then, are you trying to say that your 
dad and I are alike?"`;

});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C4A080)`"Nope, not at all."`;
   Coco(C4A081)`"My dad is a lot better looking than you. 
Smarter too."`;

});
showTextbox();
text(() => {
   `I should have been yelling at her by then, 
but I just couldn't bring myself to get angry 
with her.`;
   `Because all the while Coco was dancing around 
like crazy, shaking her hips and waving her 
arms in front of me.`;
   `I guess you could say I was too distracted to 
be angry with her.`;
   Takeshi`"By the way...you said your dad is on a 
'business trip' right now, didn't you?"`;

});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C4A082)`"Yeah."`;
   Takeshi`"Where did he go?"`;
   Coco(C4A083)`"He's at a research laboratory under the 
ocean."`;
   Takeshi`"A research laboratory under the ocean?"`;
   Coco(C4A084)`"There's a research laboratory called EBF or 
something down below LeMU."`;
   Coco(C4A085)`"My dad is a researcher there."`;

});
fgload({ id: 1, name: `CO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C4A086)`"Oh, but...you've got to keep it a secret, 
okay."`;
   `I don't know why, but for some reason it 
didn't surprise me.`;
   `As a matter of fact, it seemed perfectly 
logical to me.`;
   `It felt...as if I've already known about it. `;
   `It was just a feeling, but....`;
   Takeshi`"Then...you must be worried, right?.... I mean 
about your dad. "`;
   `I asked Coco.`;

});
fgload({ id: 1, name: `CO06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C4A087)`"Why?"`;
   Takeshi`"Well...um...I mean...."`;

});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C4A088)`"Oh, I got it!"`;
   Coco(C4A089)`"You thought my dad might be trapped here 
just like us, didn't you?"`;
   Takeshi`"........."`;
   Coco(C4A090)`"But, don't worry. He's fine."`;
   Coco(C4A091)`"I know he got out safely."`;
   Takeshi`"What? ...How do you know that?"`;
   Coco(C4A092)`"I just do."`;
   Coco(C4A093)`"Because I'm psyyyychic."`;
   Takeshi`"...What?"`;
   Coco(C4A094)`"Well, it's kind like of telepathy, or 
clairvoyance, or precognition, or post 
cognition...."`;
   Takeshi`"...Huh?"`;

});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C4A095)`"Anyway, my dad's okay. "`;
   Coco(C4A096)`"I can just feel it."`;
   `Coco had a big smile on her face.`;
   `She was still performing her wacky dance.`;

});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C4A097)`"What else...oh, yeah I can bend spoons, too."`;
   Coco(C4A098)`"I tell a spoon to like 'come on, just give 
in and bend!' and it does."`;
   Takeshi`"Oh...I see...."`;
   Coco(C4A099)`"Do you wanna know why I can do that kind of 
stuff?"`;
   Takeshi`"........."`;

});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C4A100)`"I'm actually a 'Solarian,' a person from the 
sun!!"`;
   Coco(C4A101)`"A 'Solarian' is born with psychic abilities."`;
   Coco(C4A102)`"That's why."`;

});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C4A103)`"But my dad and mom are Earthlings."`;
   Coco(C4A104)`"I'm the only Solarian here."`;
   Takeshi`"Oh, I see...wow that's great."`;
   `I couldn't find anything else to say.`;
   `The powerful microwaves that Coco produced had 
shaken my brain and fried it.`;
   `My consciousness started becoming hazy, as if 
I had been in bed for three days with a high 
fever.`;
   Coco(C4A105)`"I love the sun because I'm a Solarian "`;
   Coco(C4A106)`"When I bathe in the rays from my homeland, I 
get all warm and toasty inside."`;

});
fgload({ id: 1, name: `CO17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C4A107)`"Aaaah, I wish I could see the sun...."`;
   Coco(C4A108)`"I wish I could sunbathe...."`;
   Takeshi`"........."`;

});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C4A109)`"Hey, Takepyon? I wanna go sunbathe!"`;
   Takeshi`"Well, that's kind of hard to do that right 
now."`;

});
fgload({ id: 1, name: `CO05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C4A110)`"I know...but I want to! "`;
   Coco(C4A111)`"We haven't seen the sun for three days, you 
know!"`;
   Coco(C4A112)`"Don't you wanna sunbathe, Takepyon?"`;
   Takeshi`"Ummm."`;
   `I tried to imagine.`;
   `A high, clear blue sky...a nice May 
breeze...the horizon...the sun shimmering on 
the ocean surface....`;
   `It had only been three days, but for some 
reason the scenery from the world outside 
felt so far away. `;
   `I couldn't wait to go outside.`;
   `Outside...to the surface....`;
   Takeshi`"Yeah, now that you mention it, I do want to 
sunbathe."`;

});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"But we just don't have that option right now."`;

});
fgload({ id: 1, name: `CO03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Besides it's midnight, anyway...."`;

});
fgload({ id: 1, name: `CO04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C4A113)`"Noooooooo!"`;
   Coco(C4A114)`"I wanna sunbathe, I wanna, I wanna!"`;
   Takeshi`"Alright, we can do it tomorrow."`;
   Takeshi`"Someone will probably have rescued us by then 
anyway."`;
   Coco(C4A115)`"No, I want to do it right now! Right now!"`;
   Coco(C4A116)`"Sunbathe, sunbathe, sunbathe!!"`;
   Takeshi`"Coco!"`;
   `There was no way I was going to let this 
outburst go.`;
   `I gave her a look that said "I'm about to get 
angry."`;
   `And Coco responded with....`;

});
fgload({ id: 1, name: `CO07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C4A117)`"Oooh, oh...oh, alright..."`;
   Coco(C4A118)`"I won't ask anymore...."`;
   `Her shoulders drooped sadly. `;
   Coco(C4A119)`"Instead let's...."`;
   Takeshi`"Instead let's what...?"`;

});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C4A120)`"Let's play 'chicks'!"`;
   Takeshi`"Uhhh...what?"`;

});
fgload({ id: 1, name: `CO12ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C4A121)`"Play 'chicks'! Play 'chicks'! 
Pi-pi-pi-pi! "`;

});
fgload({ id: 1, name: `CO16ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C4A122)`"Play 'chicks'! Play 'chicks'! 
Pu-pu-pu-pu! "`;
   Takeshi`"Ummm, earth to Coco? ...Would you mind 
telling me what you're talking about? "`;

});
fgload({ id: 1, name: `CO04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C4A123)`"Okay, I'll explain! "`;
   Coco(C4A124)`"Playing 'chicks' is an elegant, aristocratic 
game developed in 1648 by Louis the XIV of 
France."`;
   Coco(C4A125)`"The rules are simple."`;
   Coco(C4A126)`"All you have to do is to imitate a chick and 
walk around."`;
   Coco(C4A127)`"The winner is the one that mimic a chick or 
becomes most like a chick."`;
   Coco(C4A128)`"The person who acts most like a chick wins."`;

});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C4A129)`"And that's what playing 'chicks' is all 
about!"`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
stopBGM();
removeFG({ id: 1, useAnim: false });
showTextbox();
text(() => {
   `A few minutes later....`;

});
bgload({ name: `EV_CO05A`, transition: 26 });
playBGM({ num: 9, volume: 100 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   Coco(C4A130)`"Pi-yo-pi-yo, pi-yo-pi-yo!"`;
   Takeshi`"Pi-yo-pi-yo, pi-yo-pi-yo!"`;
   Coco(C4A131)`"Pi-yo-pi-yo-pi-yo!"`;
   Takeshi`"Pi-yo-pi-yo-pi-yo!"`;
   Coco(C4A132)`"Pi-yo-yo! Pi-yo-yo, pi-yo-pi, pi-yo!!"`;
   Takeshi`"Pi-yo-yo! Pi-yo-yo, pi-yo-pi, pi-yo!!"`;
   Coco(C4A133)`"Piiiii!"`;
   Takeshi`"Piiiii!"`;
   `Dear Father and Mother...how is everything 
with you?`;
   `I'm currently playing 'chicks' 102 feet under 
the surface of the ocean.`;
   `Playing 'chicks' is an elegant game developed 
by Louis XIV. You win if you can mimic a 
chick the best.`;
   `You flap your arms like wings, and peck at 
garbage that has fallen in the corridors....`;
   `Sometimes you even trip and fall like a cute 
newborn baby chick to compete to see who 
looks the most like a chick.`;
   `The sounds used basically consist of three 
sounds, 'pi', 'yo', and 'n', but as you get 
better....`;
   Coco(C4A134)`"Flap flap...flap flap"`;
   Coco(C4A135)`"Furu-furu-furu....Poso...."`;
   `...You can use imaginative sounds, and even 
express yourself with various little 
chick-a-dee gestures.`;
   `Since I'm only a beginner, I can only use of 
'pi', 'yo', 'n', so far.`;
   `But, I'm working hard to become a full-fledged 
chick...no I mean a full-fledged chicken like 
mom and dad.`;
   Coco(C4A136)`"Pi-yo-yoooooon, Pi-yo-piii!"`;
   `I am learning from an excellent teacher.`;
   `Oh, I don't know why but...I'm shedding tears.`;
   Coco(C4A137)`"Piyooo, Piyo-piyo-piyoo! Pi-yo-pi-yo?"`;
   `My teacher is encouraging me.`;
   `I'm alright, I'm fine.`;
   Coco(C4A138)`"Piyon, piyon, piyon, piyon..."`;
   `My teacher wags her hips left and right as 
she walks.`;
   `Sometimes she even flips her hips up in the 
air.`;
   `She is the epitome of chick-ness...`;
   `Father! Mother! My teacher is the best 
'chick-mimic' in Japan...no, in the world!`;
   Takeshi`"Oh, but teacher...."`;
   Takeshi`"You didn't have to take a dump in the middle 
of the floor..."`;
   Coco(C4A139)`"Piyooo! Piyoo!"`;
   `Teacher is angry with me.`;
   `It's because I spoke the human language.`;
   Takeshi`"Piyoyoyoyon..."`;
   `That meant 'I'm sorry' in chick language.`;
   Takeshi`"Piyoyoyoyon... Piyoyoyoyon..."`;
   `It must be very hard for you two to imagine 
your own son playing 'chicks' 102 feet under 
the ocean.`;
   `Or I suppose you probably don't even believe 
that I'm doing this in the first place.`;
   `But, I suppose I can't blame you.`;
   `I would have never dreamed I would be in this 
situation up until three days ago.`;
   `How interesting life is!`;
   `How sad we humans are!`;
   `Oh, there I go crying again.`;
   `Before the ink on the paper starts to run, I 
will put down the pen.`;
   `Well, dear father and mother, please take 
care of yourself. Piyo piyo.`;
   Takeshi`"Piyopiyo...."`;
   Coco(C4A140)`"Piyopiyo...."`;

});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
showTextbox();
text(() => {
   `That was the end of our game of 'chicks.'`;
   `I probably needn't mention it, but Coco won 
the game.`;
   `Coco shouted with happiness and flashed a 
triumphant smile.`;
   Coco(C4A141)`"I won! I won!"`;
   `Anyway, thankfully it was over....`;
   `I exhaled a long sigh of relief.`;

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
   Takeshi`"Are you happy now?"`;
   Takeshi`"Let's get some sleep now? "`;

});
fgload({ id: 1, name: `CO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(C4A142)`"Okay."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Coco and I started to walk.`;
   `Coco walked holding my hand.`;
   `Her hand was so very small....`;
   `(Daddy, huh...?)`;
   `I thought to myself.`;
   `Coco had wanted so bad to call me 'daddy'....`;
   `But it seemed that she had forgotten all 
about it.`;
   `I was relieved.`;
   `But at the same time, I felt a bit lonely.`;
   `(Daddy, huh...?)`;
   `I repeated the words to myself again.`;
   `I had mixed feelings.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
showTextbox();
text(() => {
   `Coco and I went to the infirmary hand in hand.`;
   `It was Coco's turn to use the bed in the 
infirmary tonight.`;

});
hideTextbox();
bgload({ name: `BG08A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `We were outside of the door.`;
   `For some reason, You was standing there.`;

});
fgload({ id: 1, name: `YU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A143)`"Heh, heh, heh, heh..."`;
   You(C4A144)`"I saw you guys!"`;
   `You had a grin on her face.`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A145)`"Piyo piyo, huh? What was that all about?"`;

});
fgload({ id: 1, name: `YU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(C4A146)`"Ohhh, I'm embarrassed just thiiinking about 
it!"`;
   `Of course, the one who was embarrassed was me.`;
   `Burning hot blood surged up from the pit of my 
stomach to my head.`;
   `All of a sudden, my face felt like it was 
engulfed in flames.`;
   Takeshi`"I, I don't know what the heck you are talking 
about!"`;
   Takeshi`"Right, Coco?"`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU08ADM`, name2: `CO01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(C4A147)`"I know what she's talking about."`;
   Takeshi`"Gah!"`;

});
fgload({ id: 2, name: `CO11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(C4A148)`"You're talking about how we were playing 
'chicks,' right Nakkyu?"`;
   You(C4A149)`"Hah, hah, hah, hah, hah..."`;

});
fgload({ id: 2, name: `CO13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(C4A150)`"If you were watching, you should've joined 
us!"`;

});
fgload({ id: 1, name: `YU15ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C4A151)`"Huh?...Nah, I'm glad I passed, thanks." `;
   Coco(C4A152)`"Why?"`;

});
fgload({ id: 1, name: `YU18ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C4A153)`"I don't know, it's just...."`;

});
fgload({ id: 2, name: `CO12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(C4A154)`"Oh I know! We can play another game right 
now!"`;

});
fgload({ id: 1, name: `YU06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C4A155)`"N-now!?"`;
   You(C4A156)`"No, no, no, it's alright, really...."`;
   You(C4A157)`"Besides, it's really late, you know? "`;

});
fgload({ id: 2, name: `CO13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(C4A158)`"Well...I suppose you're right."`;

});
fgload({ id: 1, name: `YU05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C4A159)`"Whew."`;
   `You wiped away the sweat that had appeared on 
her forehead with the back of her hand.`;
   Coco(C4A160)`"Oh well."`;

});
fgload({ id: 2, name: `CO12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(C4A161)`"I suppose I'll wait until tomorrow, then."`;

});
fgload({ id: 1, name: `YU04ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C4A162)`"To-tomorrow!?"`;

});
fgload({ id: 2, name: `CO02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(C4A163)`"Yahoo! I get to play 'chicks' with Nakkyu 
tomorrow! "`;

});
playSFX({ name: `SE01_04`, a1: 0, volume: 100 });
removeFG({ id: 2, useAnim: true });
showTextbox();
text(() => {
   `Coco ran off to the infirmary gesturing like a 
chick.`;

});
fgload({ id: 1, name: `YU07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   `You and I were left standing there.... `;
   `We stared at each other.`;
   Takeshi`"Well, you see she has fun, okay?"`;

});
fgload({ id: 1, name: `YU06ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C4A164)`"Are you serious?"`;
   Takeshi`"I'm serious."`;

});
fgload({ id: 1, name: `YU05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C4A165)`"I am not really into that kind of stuff."`;
   Takeshi`"Me either!"`;
   `You was frowning.`;
   `But her face started to soften as I watched.`;

});
fgload({ id: 1, name: `YU08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C4A166)`"Pff-fff..."`;
   `You was trying hard not to laugh, by pressing 
her hand on her mouth....`;
   `She was probably recalling my antics from 
earlier.`;
   `I had a bad feeling.`;
   Takeshi`"Hey, You? I've got a favor to ask...."`;

});
fgload({ id: 1, name: `YU07ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C4A167)`"Huh?"`;
   Takeshi`"Can you just forget what you saw tonight?"`;

});
fgload({ id: 1, name: `YU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C4A168)`"Ha, ha, ha! How do you expect me to forget 
that?"`;
   Takeshi`"Well, I suppose...."`;
   Takeshi`"Then you don't have to forget it, but would 
you at least keep it a secret from Tsugumi, 
Sora and the Kid?"`;

});
fgload({ id: 1, name: `YU13ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C4A169)`"Weeeell...."`;

});
fgload({ id: 1, name: `YU01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(C4A170)`"I guess I could keep quiet about it...at 
least for a while."`;
   Takeshi`"What do you mean for a while?"`;
   You(C4A171)`"You never know when it might come in handy."`;
   `What do you know...?`;
   `She wanted to use it to blackmail me.`;
   You(C4A172)`"So anyways, Takeshi..."`;
   You(C4A173)`"You get my drift? Right?"`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `You patted me on the shoulder and walked away.`;
   `I had no idea what she would ask of me, but I 
knew she had me where she wanted me.`;
   `Of any of the five people that could have 
seen us, she was the worst.`;
   Takeshi`"*sigh*..."`;
   `I shook my head with a sigh and opened the 
Infirmary door.`;

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
   `It was dark inside the room, and I could 
barely see anything.`;
   `Still, I heard the breathing of three sleeping 
people.`;
   `Although I couldn't see any of them, I could 
tell who was sleeping where.`;
   `Tsugumi, who was injured, was sleeping on the 
bed at the end of the room.`;
   `The Kid was sleeping on the examination table.`;
   `Coco was using the bed in the middle.`;
   `Which meant I would be sleeping...`;
   `In the decompression chamber under the 
Infirmary.`;
   `About 90 minutes earlier, I had actually been 
sleeping there, before Coco shoved hydrogen 
peroxide up my nose...`;
   `You, it seemed, had lined up some chairs in 
the Conference Room and gone to sleep on them.`;
   Takeshi`"Okay then...."`;
   `I headed toward the lift in the back of the 
room.`;
   `I stopped briefly to check in on Coco.`;
   `I went up to the bed in the middle of the room.`;
   `Although she had been so excited a little 
while earlier, Coco seemed to be in a deep 
sleep already.`;
   `(I suppose she's exhausted from all that 
playing)`;
   Coco(C4A174)`"Uh, mmm...."`;
   `Coco rolled over and scratched her cheek with 
her fingers.`;
   `Her blanket had slightly fallen off of her.`;
   `Fixing her covers, I touched her hair gently.`;
   Coco(C4A175)`"Mm...."`;
   `Coco mumbled softly in her sleep.`;
   Coco(C4A176)`"Daddy...."`;
   `I didn't know which dad she was referring to...`;
   `But I couldn't help smiling.`;
   Coco(C4A177)`"Daddy...."`;
   Coco(C4A178)`"Daddy...."`;
   Coco(C4A179)`"Brother...."`;
   `(What...?)`;

});
stopBGM();
showTextbox();
text(() => {
   Coco(C4A180)`"I'm so cold...."`;
   Coco(C4A181)`"Please...let me out of here...."`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
showTextbox();
text(() => {
   Coco(C4A182)`"Help me...."`;
   Coco(C4A183)`"Brother...."`;

});
bgload({ name: `EV_CO10A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   Coco(C4A182)`"Help me...."`;
   Coco(C4A183)`"Brother...."`;

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
   Sara(C4A184)`"Brother...."`;
   Kid`"Huh?"`;
   Sara(C4A185)`"Brother...."`;
   Kid`"What is it, Sara?"`;
   `It had been over 12 hours since Sara started 
calling me 'brother'.`;
   `The swelling of Sara's eyelids had just 
started to fade. `;
   `But her eyes were still watered.`;
   `About 12 hours ago, Sora had told us the truth.`;

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
   `Even since seeing the hologram in the Whale 
Room, I had kind of sensed it.`;
   `Sara was my sister....`;
   `Maybe I had already known it when I saved 
Sara from the elevator.`;
   `Maybe I had just pretended not to realize, 
when in fact I really had...`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `It was strange, but I didn't quite understand 
the details of my own mental state.`;
   `Because it almost felt like the person who had 
caused me to pretend was a "me," that wasn't 
really "me."`;
   `If that made sense....`;
   `I knew I had to find out the truth, from the 
moment I'd seen the pendant in the Whale 
Room, especially after I noticing it had a 
missing piece.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `I could tell Sara felt the same way.`;
   `I didn't know from exactly what point she 
started wondering if I was her brother.`;
   `Looking back on it, there were many times she 
might have hinted at it.`;
   `But all those moments had seemed to me that 
she was half-joking.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `The moment that everything came together was 
when I saw the image in the hologram.`;
   `Because I had been able to see something that 
nobody else could...`;
   `But still, both Sara and I weren't certain 
when we had been in the Whale Room.`;
   `We needed definite proof.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `That was why we went to visit Sora even 
though it was late at night.`;
   `To have her surgically remove the fragment 
from my thumb....`;
   `Since Sora wasn't able to perform the actual 
operation, so we decided to wake up You.`;
   `At first You had no idea what we were talking 
about, but as soon as she understood the 
situation, she willingly agreed to help.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `As we expected, the piece removed from my 
thumb, had matched the missing part in the 
pendant exactly.`;
   `What's more, when we exposed the piece to 
infrared light, an image of the same man in 
the pendant came up.`;
   `According to Sora, unlike a regular picture, a 
hologram 'shows the whole image in a part'.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `With a picture, it would be impossible to see 
the whole picture with just one piece of 
it.... `;
   `But with a hologram, it is possible to 
generate the whole image even from a tiny 
piece.`;
   `That is one of the special properties of a 
hologram.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Now, let me explain little bit about the 
'INFRAVISION'.`;
   `Usually, the visible range for humans is 
limited to light with a wavelength of between 
380nm to 780nm.`;
   `Light with a wavelength longer than 780nm is 
called "infrared."`;
   `Normal humans can't see light in this range.`;
   `If you were able to see infrared, you would 
be able to sense the temperature of an object 
without actually touching it.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `And with this ability, you could also see in 
the pitch dark even without any light.`;
   `Infrared rays are emitted from all objects 
that have temperature. Stronger light is 
emitted from warmer objects, and weaker light 
from objects with a lower temperature.`;
   `By sensing those things, you can tell the 
location and shape of an object in the 
darkness.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Surprisingly, Sara and I were told that we 
had the ability called 'INFRAVISION'.`;
   `Since we had this ability naturally, it was 
difficult for us to imagine not being able to 
sense the temperature, or to imagine complete 
darkness.`;
   `But I realized something then.`;

});
if (l_went_with_sara_in_3rd_day == 1) goto(lbl_00000c2b);
showTextbox();
text(() => {
   `That was why I had been able to notice the 
Generator Room door was hot.`;
   fadeClearPage();
});
hideTextbox();
goto(lbl_00000c36);
let lbl_00000c2b;
showTextbox();
text(() => {
   `That was why I had noticed heat emanating 
from the generating room door, and that was 
why I had mistaken the light from the 
inverter unit as moonlight.`;
   fadeClearPage();
});
hideTextbox();
goto(lbl_00000c36);
let lbl_00000c36;
showTextbox();
text(() => {
   `That was why Sara and I were able to see the 
3D image in the pendant, which nobody else 
could see.`;
   `Why did we have this ability? I had no idea.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Sora explained to us that it was a special 
ability passed on genetically.`;
   `Genetics. This also meant it was highly 
possible that Sara and I had the same parents.`;
   `That's when it became almost certain that 
Sara and I were brother and sister, but 
still...something seemed to be missing.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `We took a DNA test with the repaired L-MRI.`;
   `The result showed that Sara and I were blood 
relatives with a 99.99999% certainty.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `That had proven everything.`;
   `And when that happened, memories of my 
childhood started to flood back.`;
   `They rocked me like an explosion.`;
   `All of the memories that had been the dammed 
up flooded out at once, their bombardment 
rendering me unconscious again.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `When I regained consciousness, Sara was next 
to me.`;
   `Sara...my one and only sister....`;
   `We were fraternal twins....`;
   `I recalled the bittersweet memories of the 
days we had spent together.`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `BG09A1`, transition: 26 });
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
hideTextbox();
ADV_Mode();
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   Sara(C4A186)`"Brother...."`;
   Kid`"Yeah?"`;
   Sara(C4A187)`"Brother...."`;
   Kid`"Yes, Sara?"`;
   `We hadn't slept at all since the day before.`;
   `We had spent a long half-day, talking about 
all sorts of things.`;
   `The memories of our childhood....`;
   `Then our time at the 'hospital' as well of 
course.`;
   `How I hadn't kept my promise...couldn't keep 
my promise....`;
   `I had sworn to her that I would come to get 
her....`;
   `Sara and I took a long time going over and 
understanding all of the details. `;
   `There was too much to talk about.`;
   `A half-day was hardly enough to restore the 
missing time.`;
   `But....`;
   `Sara and I didn't need many words anymore.`;
   `"Brother,"........."Yes, Sara?"  With just 
these words, we could understand each other.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Sara put her head on my shoulder, and closed 
her eyes gently.`;
   `I sang her favorite lullaby.`;

});
hideTextbox();
stopBGM();
playBGM({ num: 22, volume: 100 });
showTextbox();
text(() => {
   Kid`"Moon sprite shouldering a long bow."`;
   Kid`"Waiting inside a dream."`;
   Kid`"Tonight a story by moonlight."`;
   Kid`"Hoping the wait will be short."`;
   Kid`"Sleeping curled and snug"`;
   Kid`"Sleeping in mother's arms."`;

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
   Coco(C4A188)`"Moon sprite shouldering a long bow."`;
   Coco(C4A189)`"Waiting inside a dream."`;
   Coco(C4A190)`"Tonight a story by moonlight."`;
   Coco(C4A191)`"Hoping the wait will be short."`;
   Coco(C4A192)`"Sleeping curled and snug"`;
   Coco(C4A193)`"Sleeping in mother's arms."`;

});
playSFX({ name: `SE10_01`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Clap clap clap....`;

});
playBGM({ num: 2, volume: 100 });
showTextbox();
text(() => {
   You(C4A194)`"You've got a great voice, Coco."`;
   Coco(C4A195)`"I know I do, don't I?"`;
   You(C4A196)`"I've never heard that song before...is it a 
lullaby or something?"`;

});
showTextbox();
text(() => {
   Coco(C4A197)`"Yeah, it's a lullaby."`;
   Coco(C4A198)`"My mom used to sing it to me."`;
   You(C4A199)`"So I guess that song has a lot of good 
memories for you."`;
   Coco(C4A200)`"No."`;

});
showTextbox();
text(() => {
   You(C4A201)`"No? It doesn't?"`;
   Coco(C4A202)`"No, I just learned this song."`;
   You(C4A203)`"Oh....really..."`;
   `Their voices were coming from the kiosk.`;
   `I went in.`;

});
bgload({ name: `EV_CO13A`, transition: 20 });
showTextbox();
text(() => {
   Takeshi`"Hey!"`;
   Coco(C4A204)`"Oh, Takepyon!"`;
   Pipi(PIPI_04)`"Bow-wow!"`;
   You(C4A205)`"Takeshi...what are you doing here?"`;
   Takeshi`"Oh, I just thought I'd see what you looked 
like playing 'chicks.'"`;
   `Yep, that was the reason I had gone searching 
for them, and eventually wound up at the 
souvenir shop.`;
   Coco(C4A206)`"Oh, we finished playing that a while ago."`;
   Takeshi`"What !? No way!!"`;
   Coco(C4A207)`"Nakkyu was sooooo good at it...."`;
   Coco(C4A208)`"Compared to me, she was sooooo much more 
like a real chick...."`;
   Coco(C4A209)`"I was just amazed!"`;
   You(C4A210)`"Oh, stop it, you're just trying to embarrass 
me with compliments!"`;
   Coco(C4A211)`"It's true!"`;
   Coco(C4A212)`"You were really, really good!"`;
   You(C4A213)`"Eh, heh, heh, heh...."`;
   `You, who had seemed so against the game to 
begin with, was embarrassed once she was 
complimented.`;
   `What on earth was going on??`;
   `Had she actually enjoyed the game?`;
   `Speaking from the standpoint of someone who 
had experienced it....`;
   `The game 'chicks' did seem to possess a kind of 
ritualistic, demonic charm that could subdue 
the human ability to be rational....`;
   `It seemed to me that You might have been 
possessed by that charm.`;
   `Oh well, that wasn't important.`;
   `What was important was somehow I had missed 
out on seeing a historical moment; You's wacky 
performance.`;
   `It was truly unfortunate...`;
   `(Darn it!)`;
   `I mentally clicked my tongue.`;
   Takeshi`"So? What are you doing now?"`;
   You(C4A214)`"You should be able to tell by looking at us?"`;
   `Coco and You were sitting face-to-face on the 
carpet.`;
   `Pipi had set his face on Coco's head.`;
   `Between the two of them was a mountain of 
small, bead-like grains.`;
   `A pen was stuck at the top of the mountain.`;
   Takeshi`"A game of avalanche with a mountain of sand?"`;
   You(C4A215)`"That's right!"`;
   Coco(C4A216)`"No, Nakkyu, that's not right."`;
   You(C4A217)`"What?"`;
   Coco(C4A218)`"This is a mountain of tears...."`;
   Coco(C4A219)`"It's a mountain of tears, not sand."`;
   `A mountain of tears?`;
   `I sat next to them and pinched a single grain 
from the mountain.`;
   Takeshi`"Oh, I remember...."`;
   Takeshi`"Coco was throwing these into the puddle at 
the ruins yesterday."`;
   `Clear, colorless grain. They were formed in 
the shape of a drop of water.`;
   `"Glass tears".`;
   `No, they weren't made of glass.`;
   `I could tell by touching them.`;
   Takeshi`"You never told me what they were yesterday, 
did you?"`;
   Takeshi`"So, I guess I'll try again...what are they?"`;
   You(C4A220)`"They're mermaid tears."`;
   Takeshi`"Mermaid tears???"`;
   `Coco closed her eyes and nodded.`;
   Takeshi`"I don't care what you say, there's no way 
these are real mermaid teardrops."`;
   You(C4A221)`"Oh yeah?"`;
   `Saying this, You pointed to the display racks 
of the souvenir shop.`;
   Takeshi`".........?"`;
   `I stood up and walked toward where You had 
pointed.`;

});
removeBG({ mode: WHITE, transition: 2 });
showTextbox();
text(() => {
   `The racks were packed with different kinds of 
merchandise.`;
   `Among all the stuff, there was a corner with 
a line of old-looking ceramic bottles.`;

});
bgload({ name: `IT07A`, transition: 20 });
showTextbox();
text(() => {
   `I picked up one of the bottles and looked at 
it.`;
   `It was slightly bigger than the size of my 
palm and heavier than I had imagined. It felt 
solid in my hand.`;
   `Printed on the label was, "Mermaid Tears."`;
   `I looked at the bottom of the bottle. There 
was a round stamp on it.`;
   `"Contents: Candy."`;
   `"Ingredients: sugar, corn syrup, acidifier, 
flavoring."`;
   `I shook the bottle. I heard a dry, crisp sound.`;
   `Pulling out the cork top, I poured some out 
on my palm.`;
   `I poured too much and some of them spilled 
from my hand to the floor.`;
   `The "Mermaid Tears" bounced on the carpet as 
if they were dancing.`;

});
bgload({ name: `EV_CO13A`, transition: 20 });
showTextbox();
text(() => {
   Takeshi`"I see."`;
   `Holding the bottle in my right hand and 
"teardrops" in my left, I went back to where 
I had been sitting before and plopped myself 
down with a thud.`;
   Takeshi`"So these 'Mermaid Tears' are just some kind 
of souvenir?"`;
   Coco(C4A222)`"Yup."`;
   Takeshi`"Let's see...."`;
   `Mumbling to myself, I popped all the 
'teardrops' from my left hand into my mouth.`;
   `I chomped down on them hard.`;
   `The melting sweetness spread in my mouth.`;
   Takeshi`"These are good!"`;
   `It had been a long time since I had tasted 
anything besides a chicken sandwich.`;
   `I had heard somewhere before that eating 
sweets makes people feel happy.`;
   `And at that moment I was enraptured by the 
sweetness in my mouth.`;
   Coco(C4A223)`"Ohhhh my god!!"`;
   Coco(C4A224)`"You shouldn't have done that!"`;
   Coco(C4A225)`"I'm gonna tell on you!"`;
   Takeshi`"Why? Is it because I'm eating them for free?"`;
   Takeshi`"Well, you are too, Coco."`;
   Coco(C4A226)`"No, no,"`;
   Coco(C4A227)`"That wasn't what I meant at all."`;
   Coco(C4A228)`"You just ate the teardrops of a mermaid, 
didn't you, Takepyon?"`;
   Takeshi`"Yeah, I did."`;
   Takeshi`"And I am going to eat more."`;
   Coco(C4A229)`"If you do that...."`;
   Coco(C4A230)`"You will end up like 'The 800-year-old nun.'"`;
   Takeshi`"Who...?"`;
   You(C4A231)`"800 year what?"`;
   `You and I looked at each other.`;
   Coco(C4A232)`"You don't know the story of Yaobikuni, the 
800-year-old nun?"`;
   Takeshi`"Do you know what she's talking about, You?"`;
   You(C4A233)`"Nope. Not a clue."`;
   Coco(C4A234)`"Alright then, I, Coco, will tell you the 
story of the 800-year-old nun!"`;
   Takeshi`"........."`;
   You`"........."`;
   Coco(C4A235)`"Hey, don't forget the applause."`;
   `Clap clap clap....`;

});
bgload({ name: `EV_CO13B`, transition: 20 });
stopBGM();
showTextbox();
text(() => {
   Coco(C4A236)`"Okay, It starts like this..."`;

});
playBGM({ num: 19, volume: 100 });
showTextbox();
text(() => {
   Coco(C4A237)`"Once upon a time, there was a beautiful young 
girl."`;
   Coco(C4A238)`"Who was 17 years old, and she loved camellia 
flowers."`;
   Coco(C4A239)`"She also had a very handsome boyfriend."`;
   Coco(C4A240)`"And he was about her same age, I think he 
was at least."`;
   Coco(C4A241)`"Anyway, one day, he gave her a camellia 
flower as gift, and said."`;
   Coco(C4A242)`"'This flower is for you.'"`;
   Coco(C4A243)`"'Oh my, what a beautiful flower this is.'"`;
   Coco(C4A244)`"'Yeah, this flower sure is pretty...but 
you're even more beautiful, even a million of 
these flowers wouldn't be as pretty as you.'"`;
   Coco(C4A245)`"'Oh, you are such a sweet talker, you.'"`;
   Coco(C4A246)`"'Hey, I'm not just trying to flatter you, I'm 
telling the truth.'"`;
   Coco(C4A247)`"'Oh, sweetheart....'"`;
   Coco(C4A248)`"'My love....'"`;
   Coco(C4A249)`"They were so passionately in love that they 
could talk this way in public and they 
wouldn't even be embarrassed about it."`;
   Takeshi`"........."`;
   You`"........."`;
   Coco(C4A250)`"Well, one day...."`;
   Coco(C4A251)`"The girl's dad, his name was Gonta, went 
diving into the ocean."`;
   Coco(C4A252)`"He did that because this old guy who lived 
in the ocean was like...."`;
   Coco(C4A253)`"'Hey Gonta, I'm having a home party, wanna 
come?'...and invited him to a party."`;
   Coco(C4A254)`"Mr. Gonta arrived at the most gorgeous 
mansion he'd ever seen in his whole life."`;
   Coco(C4A255)`"But strangely, he was able to breathe once 
got inside."`;
   Coco(C4A256)`"'Oh, good to see you, Gonta,' the old guy 
welcomed him."`;
   Coco(C4A257)`"Gonta had a gourmet dinner and a wonderful 
time."`;
   Coco(C4A258)`"But it eventually it came time for him to go 
home."`;
   Coco(C4A259)`"Gonta said, 'I'm real sorry, but I've got to 
go home soon,'"`;
   Coco(C4A260)`"The old man who lived under the ocean said, 
'Huh, you're leaving so soon? That's too bad.'"`;
   Coco(C4A261)`"'My daughter's waiting for me at home. I'll 
come again sometime soon, okay?'"`;
   Coco(C4A262)`"'Oh well...hey, why don't you take this for 
souvenir?'"`;
   Coco(C4A263)`"The old man handed him a bottle of something 
that looked like alcohol."`;
   Coco(C4A264)`"'What's this?' asked Gonta."`;
   Coco(C4A265)`"The old man answered with a big smile."`;
   Coco(C4A266)`"'It's Mermaid Tears.'"`;
   Takeshi`"........."`;
   You`"........."`;
   Coco(C4A267)`"Gonta went home and hid the souvenir in the 
cabinet."`;
   Coco(C4A268)`"And...a few days later...an 'incident' took 
place."`;
   Coco(C4A269)`"While Gonta wasn't home, his daughter 
secretly opened the cabinet and drank all the 
liquid in the bottle."`;
   Coco(C4A270)`"It was so delicious that the girl drank the 
whole thing up."`;
   Coco(C4A271)`"And...."`;
   Coco(C4A272)`"After that, the girl stopped aging at all."`;
   Coco(C4A273)`"A year had passed, then two and then 
three...."`;
   Coco(C4A274)`"After five, 10 and 20 years, the girl still 
was the same beautiful self."`;
   Coco(C4A275)`"She had a body that would never age."`;
   Takeshi`"........."`;
   You`"........."`;
   Coco(C4A276)`"Eternal youth and longevity has always been a 
dream and a hope for humans, but it wasn't 
the case for this girl. "`;
   Coco(C4A277)`"She lamented and cursed her own fate."`;
   Coco(C4A278)`"Because she stayed at the age of 17 but her 
boyfriend grew older and older."`;
   Coco(C4A279)`"One day an incident happened that was very 
sad."`;
   Coco(C4A280)`"Her boyfriend passed from this world to the 
next at the tender age of 34."`;
   Coco(C4A281)`"Before he died, he said to her."`;
   Coco(C4A282)`"'Wait for me for 700 years! After 700 years 
has passed, I'll be reborn into this world 
and come to you!'"`;
   Coco(C4A283)`"The girl cried and cried. BOY did she just 
cry and cry."`;
   Coco(C4A284)`"After a while, because she was so sad at 
losing him, she decided to leave on a long 
trip."`;
   Coco(C4A285)`"She renounced the material world and decided 
to live her life as a nun."`;
   Takeshi`"........."`;
   You`"........."`;
   Coco(C4A286)`"The nun traveled around the country. She 
cured the sick, helped the poor, did a little 
farming, built some bridges over rivers and 
planted lots of camellia seeds."`;
   Coco(C4A287)`"When the camellias grew mature, healthy and 
started to flower, she would move on to 
another region and begin all over again 
helping those in need...."`;
   Coco(C4A288)`"She continued living that way for hundreds of 
years."`;
   Coco(C4A289)`"The reason she planted camellia seeds was as 
a way of giving directions to her boyfriend 
in case he came looking for her."`;
   Coco(C4A290)`"She planted lots and lots of camellia seeds 
so that when he was reborn into this world, 
he would know where she was."`;
   Coco(C4A291)`"She hadn't given up hope."`;
   Coco(C4A292)`"She had kept believing the whole time that 
her boyfriend's words would come true."`;
   Coco(C4A293)`"At last, 700 hundred years passed and she 
returned to her homeland."`;
   Coco(C4A294)`"But there wasn't anyone who knew her anymore."`;
   Coco(C4A295)`"With no place to live, she decided to enter 
a cave on the outskirts of the village."`;
   Coco(C4A296)`"She planted many, many camellia seeds near 
the entrance."`;
   Coco(C4A297)`"Before she entered in to the cave, she told 
the villagers."`;
   Coco(C4A298)`"'I will ring a bell at sunrise and sunset.'"`;
   Coco(C4A299)`"'If you stop hearing the bell, please just 
think that I have passed away.'"`;
   Takeshi`"........."`;
   You`"........."`;
   Coco(C4A300)`"A year passed, then two and three...."`;
   Coco(C4A301)`"After five, 10 and then 20 years, her 
boyfriend STILL didn't show up."`;
   Coco(C4A302)`"30 years passed, then 40 and then 50 years 
passed...."`;
   Coco(C4A303)`"After 60, 70, 80 years had passed, her 
boyfriend STILL hadn't shown up."`;
   Coco(C4A304)`"800 years had passed since she was born."`;
   Coco(C4A305)`"The bell finally stopped ringing."`;
   Coco(C4A306)`"After all that time, her boyfriend had never 
appeared."`;
   Coco(C4A307)`"The camellias in front of the cave blossomed 
beautifully, never wilting for many years."`;
   Coco(C4A308)`"People honored this young and beautiful nun 
and prayed for her...."`;
   Coco(C4A309)`"And wished for longevity and happiness...."`;
   Coco(C4A310)`"And people decided to call her, 'Yaobikuni,' 
the 800-year-old nun. "`;
   Coco(C4A311)`"The End."`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   Takeshi`"........."`;
   You`"........."`;

});
playBGM({ num: 1, volume: 100 });
showTextbox();
text(() => {
   Coco(C4A312)`"Oh, not really...it's 'to be continued'...."`;
   You(C4A313)`"...Huh?"`;
   Takeshi`"There's more!?"`;
   Coco(C4A314)`"Well, actually that's the end for the tale I 
know."`;
   Coco(C4A315)`"But there might be more to the tale...."`;
   You(C4A316)`"What do you mean?"`;
   Coco(C4A317)`"Well, nobody actually found her body."`;
   Coco(C4A318)`"They just figured she was dead because the 
bell stopped ringing...."`;
   Takeshi`"Hmmm...."`;
   Coco(C4A319)`"Maybe, maybe she's still alive in a cave 
somewhere in Japan, you know?"`;
   You(C4A320)`"Still waiting for her 'boyfriend'?"`;
   Takeshi`"Stupid! There's no way that story is true!"`;
   Takeshi`"It's just an old fairy tale, is all."`;
   Coco(C4A321)`"I don't know...."`;
   Coco(C4A322)`"I think she might still be alive 
somewhere...."`;
   You(C4A323)`"Yeah, me too!"`;
   Takeshi`"Oh come on, are you guys serious?"`;
   You(C4A324)`"Hey Coco? When was this nun born anyway?"`;
   Coco(C4A325)`"I don't know exactly, but I've heard it was 
about 1300 years ago."`;
   Takeshi`"Ha-ha! You see? 1300 years ago. If she were 
still alive, she'd be 1300 years old!"`;
   You(C4A326)`"Look, you don't have to inform us of the 
obvious."`;
   Takeshi`"Let me put it this way."`;
   Takeshi`"1300 years from now would be like 700 A.D. 
That means she would have been living since 
the Nara era, or even before that."`;
   Takeshi`"That would amaze even Prince Nakano-Ooe."`;
   You(C4A327)`"What are you so worked up about...?"`;
   You(C4A328)`"You're the one who said it was just an old 
story, Takeshi."`;
   Takeshi`"I'm not worked up...."`;
   You(C4A329)`"You're old enough to know what I'm talking 
about."`;
   You(C4A330)`"Don't break girls' romantic dreams for no 
good reason."`;
   You(C4A331)`"Right, Coco?"`;
   Coco(C4A332)`"Yeah."`;
   Takeshi`"........."`;
   You(C4A333)`"She entered the cave at the age of 700, so 
that means she waited for her boyfriend 
another 600 years, right?"`;
   You(C4A334)`"Oh, but she might still be alive, so that 
makes it 'she is waiting,' as in the present 
tense."`;
   You(C4A335)`"Anyway...."`;
   You(C4A336)`"When her boyfriend finally arrives at the 
entrance of the cave, which is overflowing 
with camellia flowers...!"`;
   You(C4A337)`"They will finally be reunited!"`;
   You(C4A338)`"And the extra 600 years of loneliness will be 
rewarded!"`;
   You(C4A339)`"Their 1300 years old love will be fulfilled!"`;
   You(C4A340)`"Oh, how romantic!!"`;
   Coco(C4A341)`"Romantic, huh...."`;

});
bgload({ name: `EV_CO13C`, transition: 20 });
showTextbox();
text(() => {
   Coco(C4A342)`"I think it's more sad than romantic...."`;
   Takeshi`".........?"`;
   You(C4A343)`".........?"`;
   Coco(C4A344)`"Well, I mean...."`;
   Coco(C4A345)`"She's been waiting in this deep dark cave...."`;
   Coco(C4A346)`"Just waiting for her boyfriend for the 
longest time, you know?"`;
   Coco(C4A347)`"She's been all alone."`;
   Coco(C4A348)`"So alone and so lonely...."`;
   Coco(C4A349)`"But she couldn't die either...."`;
   Coco(C4A350)`"I wish she'd never drank those mermaid's 
tears...."`;
   Takeshi`"........."`;
   You`"........."`;
   Coco`"........."`;
   Takeshi`"........."`;
   You`"........."`;
   Coco`"........."`;
   Takeshi`"Hey, Coco?"`;

});
bgload({ name: `EV_CO13B`, transition: 20 });
showTextbox();
text(() => {
   Coco(C4A351)`"What?"`;
   Takeshi`"Do you believe that mermaids actually exist?"`;
   You(C4A352)`"Geez...there you go again...you are too 
practical."`;
   Takeshi`"Well, if mermaids don't exist, then you can 
forget about the whole story to begin with."`;
   You(C4A353)`"That's not necessarily true."`;
   You(C4A354)`"Whether mermaids exist or not doesn't have 
anything to do with the whether or not this 
story is true."`;
   Takeshi`"Why not?"`;
   You(C4A355)`"Well it's obvious that the liquid Gonta got 
from that old man was 'A longevity potion,' I 
don't care what you say."`;
   You(C4A356)`"They could have just named it 'mermaid ears', 
right?"`;
   You(C4A357)`"What I'm trying to say is, the potion didn't 
actually have to be made from mermaid 
teardrops."`;
   You(C4A358)`"I mean, these candies aren't actual mermaid 
teardrops."`;
   Takeshi`"Well, you have a point."`;
   Takeshi`"So 'Mermaid Tears' is only the name for that 
strange liquid, right?"`;
   Takeshi`"Alright, fine. Let's skip the whole mermaid 
business."`;
   Takeshi`"But you know, You?"`;
   Takeshi`"Think really hard, will you?"`;
   Takeshi`"Do you honestly think that something like 
'eternal youth' exists?"`;
   You(C4A359)`"I do."`;
   Takeshi`"You have a basis for that belief?"`;
   You(C4A360)`"Yes."`;
   Takeshi`"Okay, show me then."`;
   You(C4A361)`"Fine."`;
   Coco`"........."`;
   You(C4A362)`"This is a little off topic, but...doesn't 
this story of Yaobikuni remind you of 
something else?"`;
   Takeshi`".........?"`;
   Coco(C4A363)`".........?"`;
   You(C4A364)`"I'm talking about the tale of Rip Van Winkle."`;
   Takeshi`"Rip Van...."`;
   Coco(C4A365)`"...Winkle?"`;
   You(C4A366)`"Well, the father got invited to a party, and 
got some kind of alcoholic beverage, right?"`;
   You(C4A367)`"That's just like Rip Van Winkle."`;
   Takeshi`"So what?"`;
   You(C4A368)`"What I'm trying to say is this - "`;
   You(C4A369)`"Rip Van Winkle drank the liquor and became a 
very old man, right?"`;
   You(C4A370)`"Yaobikuni drank the 'mermaid tears' and 
gained a body of perpetual youth that never 
ages ...."`;
   You(C4A371)`"And that means that...."`;
   Takeshi`"Ohhh...I'm beginning to see what you are 
trying to say."`;
   Takeshi`"Rip Van Winkle hits the bottle just a LITTLE 
tooooo hard, and when he wakes up 20 years had 
passed."`;
   Takeshi`"Just like that with the 800-year-old nun...."`;
   Takeshi`"By drinking 'mermaid tears', she was sent 700 
or 800 years into the future."`;
   Takeshi`"So she didn't actually gain eternal youth, 
she just slipped through time into the future."`;
   Takeshi`"So THAT explains why she stayed 17 years even 
after 800 years."`;
   Takeshi`"You think that explains it???"`;
   Takeshi`"Well it doesn't!!"`;
   Takeshi`"There's no such thing as time travel in real 
life!"`;
   You(C4A372)`"Hey, hey, wait a second...don't go jumping to 
conclusions."`;
   You(C4A373)`"I never said a word about time travel, did I?"`;
   Takeshi`"........."`;
   Coco`"........."`;
   You(C4A374)`"I'm just curious about the similarity between 
the 'dwarven spirits' and 'mermaid tears.'"`;
   You(C4A375)`"The dwarven liquor was actually...'a solution 
that rapidly accelerates aging.'"`;
   You(C4A376)`"What was in the tears was...'a solution that 
slows down aging.'"`;
   You(C4A377)`"Both of them were handed down from some old 
guy."`;
   You(C4A378)`"And both of them were given at a mysterious 
gathering."`;
   You(C4A379)`"So it tells us...."`;
   You(C4A380)`"Both 'dwarven spirits' and 'mermaid 
tears'...."`;
   You(C4A381)`"...are possibly made by the same people or 
by the same civilization."`;
   Takeshi`"It tells us that?"`;
   You(C4A382)`"IT DOES!"`;
   Coco`"........."`;
   You(C4A383)`"Well, the castle in Coco's story might have 
been part of some ruins of an ancient 
civilization, sunken under the ocean."`;
   You(C4A384)`"For example, the civilization of Lemuria."`;
   You(C4A385)`"In Lemuria, it is thought they had science 
and technology which could control aging...."`;
   You(C4A386)`"And for some reason, Gonta got invited to the 
castle."`;
   You(C4A387)`"Uh-huh,"`;
   Takeshi`"........."`;
   Coco`"........."`;
   You(C4A388)`"So? Are you satisfied?"`;
   Takeshi`"I t think that was a pretty random 
explanation...but that's okay, I guess."`;
   Takeshi`"I got your point."`;
   Takeshi`"But you still haven't given me any 
substantial evidence that eternal youth 
exists."`;
   Takeshi`"The point of what you just said was 
basically this - "`;
   Takeshi`"Rip Van Winkle and the 800-year-old nun's dad 
must have made contact with the lost 
civilization of Lemuria.'"`;
   Takeshi`"Alright then, let's just SUPPOSE this 
assumption was correct."`;
   Takeshi`"Even if the civilization of Lemuria actually 
did exist...."`;
   Takeshi`"Nobody knows if they had the 'technology' to 
control aging,' right?"`;
   Takeshi`"There's no way you can prove it."`;
   Takeshi`"Besides, Lemuria never did, and never will 
exist."`;
   Takeshi`"Sclater's theory has been proven wrong a 
long time ago."`;
   Coco(C4A389)`"What's Sclater?"`;
   Takeshi`"The name of an English zoologist."`;
   Takeshi`"In the mid 19th century he...."`;
   Takeshi`"He noticed that the same species of 'lemur' 
inhabited in Africa, Madagascar Islands, Asia 
and Indonesian Islands."`;
   Takeshi`"But lemurs can't swim...well maybe just a 
little, but certainly not a long distance."`;
   Takeshi`"Well, then how could the same kind of lemurs 
reside on different islands separated by a 
massive ocean?"`;
   Takeshi`"Sclater thought...."`;
   Takeshi`"'That's it! A long time ago, there must have 
been a great landmass in the Indian Ocean, 
and these islands must have been connected as 
one!'"`;
   Takeshi`"But by the mid 20th century, the theory of 
'continental drift had been proven, and 
Sclater's theory was ignored after that."`;
   Takeshi`"'A long, long time ago, all the land on the 
earth today formed one big continent....'"`;
   Takeshi`"'Which very slowly got broken up and the 
continents shifted with the movement of the 
earth's crust, or by virtue of plate 
tectonics, to become the way they are today.'"`;
   Takeshi`"To be precise, the land masses are still 
moving even today, by a few inches or less 
every year."`;
   Takeshi`"So, the theory of 'continental drift' now 
known to be fact rather than just 'theory.'"`;
   Takeshi`"So the reason why lemurs exist on different 
islands can be explained by this theory."`;
   Takeshi`"So there! You see? There is no such thing as 
Lemuria!"`;
   Takeshi`"If there's no Lemuria, there couldn't be a 
Lemurian civilization!"`;
   You(C4A390)`"Oh really?"`;
   You(C4A391)`"You don't say?"`;
   Takeshi`"........."`;
   Coco`"........."`;
   You(C4A392)`"Well, sorry to cut you off, when you're just 
getting started, but the 'Lemuria' I was 
referring to was in the Pacific Ocean."`;
   You(C4A393)`"Why would a Japanese like Gonta go all the 
way over to the Strait of Malacca and to the 
Indian Ocean?"`;
   You(C4A394)`"Lemuria was located in the Pacific Ocean."`;
   Takeshi`"In the Pacific Ocean?...Are you by any chance 
talking about the continent of Mu?"`;
   You(C4A395)`"It doesn't matter what you call it."`;
   You(C4A396)`"There used to be an ancient civilization in 
the Pacific before recorded history."`;
   You(C4A397)`"Some people call it Lemuria, others call it 
Mu. It doesn't really matter, does it?"`;
   Takeshi`"Oh...I'm getting a headache...."`;
   Takeshi`"I guess you are right, it doesn't matter...it 
really doesn't...."`;
   Takeshi`"Whether you call it Lemuria or Mu, it never 
existed anyway."`;
   You(C4A398)`"Why do you have to be so serious...?"`;
   You(C4A399)`"It's so childish...."`;
   You(C4A400)`"Don't you have any imagination, Takeshi?"`;
   Takeshi`"You're the one who's childish! You're 18, 
right!? Grow up, will you? Get real!"`;
   Takeshi`"'An ancient civilization before time, 
'perpetual youth and longevity,' 'Rip Van 
Winkle, '800-year-old nun', and 'Santa 
Claus'...none of these exist!"`;
   Takeshi`"They're all just fairy tales!"`;
   You(C4A401)`"Not all fairy tales are fiction!"`;
   You(C4A402)`"Some of them may be real!"`;
   Takeshi`"No way!"`;
   You(C4A403)`"Yes way!"`;
   You(C4A404)`"Well I, for one, believe Rip Van Winkle 
really existed!"`;
   Takeshi`"Oh, you're so sure, huh?"`;
   Takeshi`"You do have any proof? Do you?"`;
   You(C4A405)`"Of course!"`;
   Takeshi`"Then let's see it."`;
   You(C4A406)`"Okay, I'll show you!"`;
   Coco`"........."`;
   You(C4A407)`"Rip Van Winkle was,"`;
   Takeshi`"What?"`;
   You(C4A408)`"Rip Van Winkle was...Rip Van Winkle was...."`;
   Takeshi`".........?"`;
   Coco(C4A409)`".........?"`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   You(C4A410)`"Rip...Van...W...inkle...was...."`;
   You(C4A411)`"...Winkle...was...."`;
   `All the sudden, You put her hand on her chest 
and looked like she was suffering.`;

});
bgload({ name: `EV_CO13D`, transition: 20 });
playBGM({ num: 12, volume: 100 });
showTextbox();
text(() => {
   Takeshi`"What's wrong!?"`;
   Coco(C4A412)`"Hey, are you okay, Nakkyu?"`;
   You(C4A413)`"Uh-huh...."`;
   You(C4A414)`"I'm okay...."`;
   You(C4A415)`"It happens...all the time...."`;
   Takeshi`"What do you mean all the time!?"`;
   `You's face had gone pale.`;
   `Her lips were almost purple, and sweat began 
to run down her forehead.`;
   `She grabbed her chest with her right hand. `;
   You(C4A416)`"Uhhhh...."`;
   `She groaned in low voice and squatted to the 
floor.`;
   `She jabbed her left hand into the mountain of 
tears.`;
   `The Mermaid Tears scattered everywhere, and 
the pen on top flew in the air.`;
   You(C4A417)`"I'll...be...alright...."`;
   `She didn't seem alright at all.`;
   `Her breathing was fast and her body was stiff 
and shaking, her facial color almost seemed 
like that of a corpse. `;
   `(What should we do?)`;
   `(Should I leave You here and call for help?)`;
   `(No! We don't any time to lose!)`;
   `(To the Infirmary! I've got to take her to the 
Infirmary!)`;
   Takeshi`"Coco! I'm gonna carry You to the Infirmary!"`;
   Takeshi`"So you go ahead and tell everybody what's 
going on!"`;
   Coco(C4A418)`"O-okay, I will!"`;

});
bgload({ name: `BG06A1`, transition: 20 });
showTextbox();
text(() => {
   `I carried You on my back, and jumped out of 
the kiosk.`;
   `The infirmary was close, so I could get there 
in less than a minute if I ran.`;
   `Before I could think, my feet had already 
started moving. `;

});
bgload({ name: `BG25A3`, transition: 20 });
showTextbox();
text(() => {
   You(C4A419)`"Takeshi...."`;
   You(C4A420)`"Takeshi...."`;
   `I kept running in silence.`;
   `The infirmary was near.`;
   You(C4A421)`"Hey...Takeshi...."`;
   `You whispered.`;
   `Into my ear....`;
   `In a small voice....`;
   You(C4A422)`"Rip...Van...Winkle....was..."`;
   You(C4A423)`"Rip...Van...Winkle....was..."`;
   You(C4A424)`"He really...."`;
   You(C4A425)`"He...really...."`;

});
l_choice = 0;
jump(`YC4B`);
