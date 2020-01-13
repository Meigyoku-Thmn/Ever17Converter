g_b0 = 5;
g_b1 = 5;
g_b2 = 5;
setDialogBoxColor(GREEN);
playBGM({ num: 3, volume: 100 });
bgload({ name: `BG21B1`, transition: 20 });
setSceneTitle({ index: 31 });
clock(`8:44`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`After breakfast, we each had plenty of free 
time.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But there was nothing in particular to do...`;
   waitForClick; clearText; marker; appendText; 
   Narr`...Nothing that just had to be done...`;
   waitForClick; clearText; marker; appendText; 
   Narr`So without any reason, we all just ended up 
gathering in the rest area. `;
   waitForClick; clearText; marker; appendText; 
   Narr`As always, the vases were filled with 
blossoming flowers.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Marguerites, marigolds and roses.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Apparently, the flowers were watered 
periodically by mist from the sprinkler 
system, helping them maintain their freshness.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't see Sora anywhere, but then 
again...she did say she hadn't finished 
checking the sensor data...`;
   waitForClick; clearText; marker; appendText; 
   Narr`She probably had gone to the Control Room. It 
seemed that she could concentrate on 
performing operations better there.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU11BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You, who had been talking with Sora earlier, 
was strolling alone around the top of the 
circular stage in the middle of the room.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `CO16ADM`, name2: `KA12ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The Kid, Coco, and Pipi where chasing each 
other playfully through the water. `;
   waitForClick; clearText; marker; appendText; 
   Narr`I had a feeling I had seen this all before...`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`After having a good stretch, I watched Coco 
and the others play.`;
   waitForClick; clearText; 
});
multifgload2({ id1: 1, id2: 2, name1: `CO12ADS`, name2: `KA12ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The three of them, two kids and an animal, 
circling the stone statue.`;
   waitForClick; clearText; marker; appendText; 
   Narr`They were playing a game of chase, not really 
caring who was "it."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Without seeming to get bored, they kept 
running around and around.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I seemed to be making more effort than they 
were, just watching them.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(Phew, what a sight...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked like fun, but I quickly gave up any 
idea of joining in.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And at any rate...Tsugumi had yet to make an 
appearance this morning.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just in case, I had left a sandwich for her at 
the kiosk.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I don't know if she'll actually eat it or 
not...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`What would I say to her if I met her?`;
   waitForClick; clearText; 
});
goto(lbl_0000018a).if(g_d9 == 0);
removeBG({ mode: WHITE, transition: 2 });
showFilter2();
unSkippableDelay(1);
bgload({ name: `EV_TU03A`, transition: 10 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She had confided her secrets to me on the 
Jellyfish Gondola.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Virus carrier.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A body that never dies.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A body that never grows old.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her healed scar.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was all so hard to believe...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Could such a mind-boggling story even be true?`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was still unable to completely believe her.`;
   waitForClick; clearText; 
});
goto(lbl_000001b3);
let lbl_0000018a;
removeBG({ mode: WHITE, transition: 2 });
showFilter2();
unSkippableDelay(1);
bgload({ name: `EV_TU08A`, transition: 10 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`So talking to her again would be awkward.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She had told me while we were on the Jellyfish 
Gondola...`;
   waitForClick; clearText; marker; appendText; 
   Narr`"Kill me"...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no possible way I could do such a 
thing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But still...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Why did I feel like I had messed up somehow...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Something had come over me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was nothing I could do...`;
   waitForClick; clearText; 
});
let lbl_000001b3;
removeBG({ mode: BLACK, transition: 2 });
dimOff_ac = 0;
closeDimInAndOutAndFilterAnim();
bgload({ name: `BG21B1`, transition: 20 });
clock(`9:19`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I glanced up and noticed Coco and the others 
had stopped playing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Huh....? What is she doing....?)`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
fgload({ id: 1, name: `KA06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`With a worried look on his face, the Kid was 
watching Coco intently. `;
   waitForClick; clearText; marker; appendText; 
   Narr`Pipi, too, had his eyes on her.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`In the middle of the rest area stood four 
stone statues. Coco was deliberately 
attempting to scale one of the pedestals...`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 9, volume: 100 });
fgload({ id: 1, name: `CO18ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B000`); appendText; 
   Coco`"Here I go!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`...With a heave, she began to climb up the 
side.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(...??)`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was an odd sight.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I ran to the Kid, as he stood frozen watching 
her.`;
   waitForClick; clearText; 
});
goto(lbl_00000268).if(g_d9 == 0);
bgload({ name: `IT05A`, transition: 20 });
goto(lbl_0000027a);
let lbl_00000268;
bgload({ name: `IT05C`, transition: 20 });
goto(lbl_0000027a);
let lbl_0000027a;
showTextbox();
text(() => {
   marker; sound(`T5B001`); appendText; 
   Coco`"Okay...hmmmmmph..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Stumbling as she mounted the pedestal, Coco 
ended up embracing the statue. `;
   waitForClick; clearText; 
});
bgload({ name: `BG21B1`, transition: 20 });
fgload({ id: 1, name: `KA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B002`); appendText; 
   Kid`" Coco!...What the heck are you doing?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid asked her curtly.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `CO16ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B003`); appendText; 
   Coco`"Yahoo!"`;
   waitForClick; clearText; marker; sound(`T5B004`); appendText; 
   Coco`"Wow, all I did was stand a little higher, 
and everything looks all different."`;
   waitForClick; clearText; marker; sound(`T5B005`); appendText; 
   Coco`"Let's see...to be exact, 27 inches higher, 
don't you think?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Perched on top of the pedestal, Coco said this 
smiling triumphantly.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B006`); appendText; 
   Kid`"Hey Coco, is that why you climbed up there?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `CO17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B007`); appendText; 
   Coco`"What?"`;
   waitForClick; clearText; marker; sound(`T5B008`); appendText; 
   Coco`"Well....uuum, actually no..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco answered with her head cocked.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO15ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B009`); appendText; 
   Coco`"This area right here looks like it's missing 
something."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KA13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B010`); appendText; 
   Kid`"Missing something?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Which area?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `CO13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B011`); appendText; 
   Coco`"The statue's back..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B012`); appendText; 
   Coco`"I kind of thought its back looked lonely."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco stroked the statue's back sympathetically 
with her tiny hand.`;
   waitForClick; clearText; marker; sound(`T5B013`); appendText; 
   Coco`"And well..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B014`); appendText; 
   Coco`"Abra...cadabra..."`;
   waitForClick; clearText; marker; sound(`T5B015`); appendText; 
   Coco`"SCREW DRIVER at YA——!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Uttering a stream of nonsense, Coco suddenly 
produced a flat-head screwdriver in her right 
hand.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO16ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B016`); appendText; 
   Coco`"TIMES TWO——!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`And then, another one appeared in her left 
hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Hey, where did she get those...?)`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But before I could ask her anything, Coco was 
gripping two screwdrivers...`;
   waitForClick; clearText; marker; appendText; 
   Narr`And then...`;
   waitForClick; clearText; marker; appendText; 
   Narr`...Into the back of the statue...`;
   waitForClick; clearText; marker; appendText; 
   Narr`...she began to carve the stone using the tip 
of the screwdriver....`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `EV_CO19A`, transition: 20 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; sound(`T5B017`); appendText; 
   Coco`"Here we go..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Cut, cut.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Cut, cut, carve, carve...`;
   waitForClick; clearText; marker; appendText; 
   Narr`And within moments, the back of the statue was 
covered with gashes.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...????"`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was incomprehensible.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I just couldn't understand it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`First she says the back looks "lonely", and 
then she starts gouging it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`For a while the Kid and I just gazed at her 
with our jaws dropped.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T5B018`); appendText; 
   Kid`"Hey, hey! What are you doing!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid yelled as he came back to his senses.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T5B019`); appendText; 
   Coco`"I'm carving."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T5B020`); appendText; 
   Coco`"Can't you see? I'm carving..."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T5B021`); appendText; 
   Coco`"I'm etching some marks into the stone."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh, really. Etching some marks..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I can tell that by watching you, Coco!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That's not what I mean..."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T5B022`); appendText; 
   Kid`"What for?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid beat me to the question.`;
   waitForClick; clearText; marker; sound(`T5B023`); appendText; 
   Coco`"Well, it's because..."`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   marker; sound(`T5B024`); appendText; 
   Coco`"I was feeling lonesome."`;
   waitForClick; clearText; marker; sound(`T5B025`); appendText; 
   Coco`"And anyway, I was..."`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 19, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`T5B026`); appendText; 
   Coco`"...feeling sad..."`;
   waitForClick; clearText; marker; sound(`T5B027`); appendText; 
   Coco`"I was feeling sad..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She muttered in a tiny voice.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She worked with great dexterity, using a 
screwdriver in each hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The tips of the drivers dug into the stone 
screeching and forming tiny grooves.`;
   waitForClick; clearText; marker; sound(`T5B028`); appendText; 
   Kid`"Sad?"`;
   waitForClick; clearText; marker; sound(`T5B029`); appendText; 
   Coco`"Well, nobody's coming to rescue us, right? 
We've been abandoned."`;
   waitForClick; clearText; marker; sound(`T5B030`); appendText; 
   Coco`"So what harm is there in wrecking the place a 
little?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The Kid and I looked at each other.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Coco looked back at her handiwork.`;
   waitForClick; clearText; 
});
hideTextbox();
goto(lbl_00000438).if(g_d9 == 0);
bgload({ name: `IT05A`, transition: 20 });
goto(lbl_0000044c);
let lbl_00000438;
hideTextbox();
bgload({ name: `IT05C`, transition: 20 });
goto(lbl_0000044c);
let lbl_0000044c;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The gashes had begun to take on a shape.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a human form, like a stick person.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Its tip formed a round head...`;
   waitForClick; clearText; marker; sound(`T5B031`); appendText; 
   Kid`"Who's that?"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO19A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`T5B032`); appendText; 
   Coco`"It's me, Coco."`;
   waitForClick; clearText; marker; sound(`T5B033`); appendText; 
   Coco`"And look, this is Pipi and Chami."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Looking more carefully, I could see two 
unusual animal figures beside the human form.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
goto(lbl_0000048c).if(g_d9 == 0);
showTextbox();
text(() => {
   marker; sound(`T5B034`); appendText; 
   Coco`"And then there's..."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`One of the shapes had a particularly large 
head.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was only half finished.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T5B035`); appendText; 
   Coco`"This is Tsugumi."`;
   waitForClick; clearText; marker; sound(`T5B036`); appendText; 
   Coco`"For Tsugumi, it's important to make her look 
really cool..."`;
   waitForClick; clearText; 
});
goto(lbl_00000496);
let lbl_0000048c;
showTextbox();
text(() => {
   marker; sound(`T5B037`); appendText; 
   Coco`"Okay, and then..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`One of the shapes had a particularly large 
head.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was only half finished.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T5B038`); appendText; 
   Coco`"This is Sora."`;
   waitForClick; clearText; marker; sound(`T5B039`); appendText; 
   Coco`"Sora is pretty, which makes her hard to 
draw..."`;
   waitForClick; clearText; 
});
let lbl_00000496;
hideTextbox();
showTextbox();
text(() => {
   marker; sound(`T5B040`); appendText; 
   Coco`"Tra, la, la...tra, la, la, la, la..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Singing a cute little song, Coco continued to 
carve.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She seemed entirely absorbed by what she was 
doing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Somehow, I could relate to her desire to throw 
herself into something...`;
   waitForClick; clearText; marker; sound(`T5B041`); appendText; 
   Kid`"That's destroying private property...it's 
vandalism."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, relax Kid. Now's not the time to be so 
uptight."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Coco's into her work. You can't blame her."`;
   waitForClick; clearText; marker; sound(`T5B042`); appendText; 
   Kid`"Um...right..."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T5B043`); appendText; 
   Coco`"Here we go, next..."`;
   waitForClick; clearText; marker; sound(`T5B044`); appendText; 
   Coco`"Uh oh!"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_CO19B`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Because of her unsteady position on the 
pedestal, Coco suddenly lost her balance. `;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T5B045`); appendText; 
   Kid`"Hey, be careful!!"`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 62 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Without hesitating, the Kid jumped forward, 
steadying her body.`;
   waitForClick; clearText; marker; appendText; 
   Narr`He grabbed her by the hips, to prevent her 
from slipping down and carefully lowered her 
to sit on the pedestal. `;
   waitForClick; clearText; 
});
bgload({ name: `BG21B1`, transition: 20 });
multifgload2({ id1: 1, id2: 2, name1: `CO15ADM`, name2: `KA01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B046`); appendText; 
   Coco`"Oops, thank you..."`;
   waitForClick; clearText; marker; sound(`T5B047`); appendText; 
   Kid`"Watch your step, okay?"`;
   waitForClick; clearText; marker; sound(`T5B048`); appendText; 
   Coco`"Okay!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `CO16ADM`, x: 128, useAnim: false });
showTextbox();
text(() => {
   marker; sound(`T5B049`); appendText; 
   Coco`"Ah, I know...why don't you join me Kiddo?"`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA06ADM`, x: 512, useAnim: false });
showTextbox();
text(() => {
   marker; sound(`T5B050`); appendText; 
   Kid`"You mean...?"`;
   waitForClick; clearText; marker; sound(`T5B051`); appendText; 
   Coco`"Come on, please... Let's both try it!"`;
   waitForClick; clearText; marker; sound(`T5B052`); appendText; 
   Coco`"You can carve a picture of yourself and 
Nakkyu here..."`;
   waitForClick; clearText; marker; sound(`T5B053`); appendText; 
   Coco`"And then I was thinking of carving Takepyon 
over here."`;
   waitForClick; clearText; marker; sound(`T5B054`); appendText; 
   Coco`"Okay? Here's one of my screwdrivers."`;
   waitForClick; clearText; 
});
fgload({ id: 2, name: `KA11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B055`); appendText; 
   Kid`"Well okay. Thanks..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Energized by Coco's enthusiasm, the Kid took 
the screwdriver.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And mounted the pedestal to join her.`;
   waitForClick; clearText; 
});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Be careful not to fall yourself, Kid."`;
   waitForClick; clearText; marker; sound(`T5B056`); appendText; 
   Kid`"I-I'll be alright."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Don't slip, Coco. Why don't you let me hold 
you up?"`;
   waitForClick; clearText; marker; sound(`T5B057`); appendText; 
   Coco`"Huh? I wonder if that's the...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B058`); appendText; 
   Kid`"She'll be alright!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was about to stretch my hands toward her but 
the Kid stopped me.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B059`); appendText; 
   Kid`"Don't worry, I got her..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The Kid took hold of Coco's empty hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`While embracing the statue in a hug, Coco and 
the Kid steadied each other.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And using their free hands, they both began 
carving shapes.`;
   waitForClick; clearText; 
});
goto(lbl_000005b5).if(g_d9 == 0);
bgload({ name: `IT05A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The statue stood there in silence without 
complaint, pointing its finger to the south.`;
   waitForClick; clearText; 
});
goto(lbl_000005c8);
let lbl_000005b5;
bgload({ name: `IT05C`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The statue didn't say a word, only stood 
silently, pointing at the ceiling.`;
   waitForClick; clearText; 
});
let lbl_000005c8;
hideTextbox();
goto(lbl_000005f9).if(g_d9 == 0);
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `IT05B`, transition: 20 });
goto(lbl_00000615);
let lbl_000005f9;
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `IT05D`, transition: 20 });
goto(lbl_00000615);
let lbl_00000615;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`A while later...`;
   waitForClick; clearText; 
});
hideTextbox();
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`What was left in stone was the carved images 
of six people and two animals.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was evidence of our existence here.`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 0 });
stopBGM();
delay({ interval: 60 });
playBGM({ num: 3, volume: 100 });
bgload({ name: `IMG01B`, transition: 20 });
clock(`12:36`);
goto(lbl_0000068d).if(g_da != 0);
setSceneTitle({ index: 32 });
goto(lbl_0000069b);
let lbl_0000068d;
setSceneTitle({ index: 33 });
let lbl_0000069b;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`That afternoon -`;
   waitForClick; clearText; marker; appendText; 
   Narr`After a light lunch, I looked around but 
couldn't find You anywhere.`;
   waitForClick; clearText; marker; sound(`T5B060`); appendText; 
   Kid`"Looking for You? She ate lunch and then went 
to the Security Office in Zweite stock."`;
   waitForClick; clearText; marker; sound(`T5B061`); appendText; 
   Coco`"She said something about doing some research."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Research? I wonder what that could be?"`;
   waitForClick; clearText; marker; sound(`T5B062`); appendText; 
   Kid`"She didn't say exactly..."`;
   waitForClick; clearText; marker; sound(`T5B063`); appendText; 
   Kid`"If you really want to know, why don't you go 
ask her yourself?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah, I guess you're right..."`;
   waitForClick; clearText; marker; sound(`T5B064`); appendText; 
   Coco`"What about Sora, where'd she go?"`;
   waitForClick; clearText; marker; sound(`T5B065`); appendText; 
   Kid`"She's still in the Control Room. I spoke to 
her through the terminal intercom, but she 
seemed really busy."`;
   waitForClick; clearText; marker; appendText; 
   Narr`As usual, Tsugumi was nowhere to be seen...but 
the sandwich I left at the kiosk was gone...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Come to think of it, neither You, Sora nor 
Tsugumi had said a word to me all morning.`;
   waitForClick; clearText; 
});
bgload({ name: `BG26B1L`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(Something's up...I can tell...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`At any rate, I figured I would go search for 
them.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I didn't know where should I go?`;
   waitForClick; 
});
choice(
   `The Control Room?`
   `The Infirmary?`
   `The Security Office?`
);
switch (choice) {
   case 0: goto(lbl_000006dd);
   case 1: goto(lbl_000007d0);
   case 2: goto(lbl_00000933);
}
let lbl_000006dd;
g_b8 += 1;
bgload({ name: `BG15B1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I tried the Control Room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I pushed the button to open the door and it 
slid open.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
bgload({ name: `BG16A3`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Sora, are you in here?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I called out her name, but got no response.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The console was silent.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(That's strange...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wonder if this means she finished checking 
the sensor data.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But if that was the case, I thought she would 
report back to us?`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Sora...where are you?)`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, So—ra—." `;
   waitForClick; clearText; marker; appendText; 
   Narr`I expected to find her hiding in the corner 
somewhere...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I called out for her again, but still got no 
response.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Next, I touched the terminal.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Although I didn't know how to operate it, it 
seemed to be responding.`;
   waitForClick; clearText; 
});
hideTextbox();
bgload({ name: `MAP3F_A2`, transition: 30 });
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 6 });
openMapCommentAnim();
delay({ interval: 120 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`A map of LeMU data suddenly appeared on the 
LeMMIH monitor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But it didn't tell me anything.`;
   waitForClick; clearText; 
});
hideTextbox();
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP3F_A2`, transition: 30 });
unSkippableDelay(1);
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG16A3`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`There was still no sign of Sora.`;
   waitForClick; clearText; 
});
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I decided to check somewhere else.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I headed for the second floor.`;
   waitForClick; 
});
choice(
   `The Infirmary`
   `The Security Office`
);
switch (choice) {
   case 0: goto(lbl_000007d0);
   case 1: goto(lbl_00000933);
}
let lbl_000007d0;
g_b7 += 1;
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG08A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Turning down a corridor after climbing the 
emergency stairs, I came out in front of the 
Infirmary.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_03`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(Huh....!?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`The door abruptly opened in my face, and a 
person came flying out.`;
   waitForClick; clearText; marker; appendText; 
   Narr`...And then dodged right past me.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_04`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`In a flash the figure was gone, without even 
seeming to notice me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(...Who was that??)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I whipped around quickly, trying to see who 
the person was.`;
   waitForClick; clearText; 
});
bgload({ name: `BG26A3R`, transition: 20 });
fgload({ id: 1, name: `TU03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`...It was Tsugumi.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Hey..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I started to call out, but hesitated.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The events of from the night before popped 
into my mind.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I could stop her, but then what...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the meantime, all I could see was Tsugumi's 
back fading further away.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey! Wait up! Where you going?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Barely getting the words out, I dashed after 
her.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_04`, a1: 0, volume: 95 });
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I ran up a corridor, and hurriedly climbed the 
stairs.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE01_06`, a1: 0, volume: 95 });
bgload({ name: `BG28A3R`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But the sound of her feet faded down the end 
of the emergency corridor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her figure had already rounded the corner out 
of sight.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Tsu—gu—mi...!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was out of breath.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had run about 30 yards, but...`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Damn it, Tsugumi, you sure are fast!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I grumbled after her, although she was now 
well out of earshot.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It didn't feel like I could catch up with her 
at all.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her speed was unnatural.`;
   waitForClick; clearText; marker; appendText; 
   Narr`...She was still supposed to be recuperating...`;
   waitForClick; clearText; 
});
goto(lbl_00000917).if(g_d9 == 0);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(But still...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(She's still a little slower than when she 
pulled me away from the flood at the aquarium.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her legs probably still hadn't fully recovered.`;
   waitForClick; clearText; marker; appendText; 
   Narr`At any rate I didn't want her to overdoing it.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Aaah, damn it...!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Annoyed that I was out of breath, I continued 
after Tsugumi.`;
   waitForClick; clearText; 
});
bgload({ name: `BG27A3`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The sound of her feet was only barely 
perceptible in the distance.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I strained my ears to hear.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It sounded like she had headed downstairs...`;
   waitForClick; clearText; 
});
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I descended the stairs.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was unable to hear any footsteps from below.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed that instead of going to the third 
floor, she had gone down to the corridor on 
the second floor.`;
   waitForClick; clearText; 
});
bgload({ name: `BG25A3`, transition: 20 });
bgload({ name: `BG03A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I came out near the entrance to the Jellyfish 
Gondola.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I had thought she came this way...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`But Tsugumi was nowhere in sight.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Damn...I guess I'll just have to give up.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`What's the point in playing chase with her 
anyway, I thought...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`But still, I was disappointed.`;
   waitForClick; clearText; 
});
bgload({ name: `BG26A3R`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Without further recourse, I gave up and walked 
to the nearby Security Office.`;
   waitForClick; clearText; 
});
goto(lbl_00000938);
let lbl_00000917;
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Hey!! Tsugumi—!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I called her name without much hope, but there 
was no answer.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the end it seemed Tsugumi hadn't noticed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It hadn't seemed that she was trying to avoid 
me...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But maybe I was better off this way.`;
   waitForClick; clearText; 
});
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Giving up, I went back down the stairs and 
returned to the corridor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I decided to stop by the nearby Security 
Office.`;
   waitForClick; clearText; 
});
goto(lbl_00000938);
let lbl_00000933;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Climbing the stairs, I headed toward the 
Security Office on second floor.`;
   waitForClick; clearText; 
});
let lbl_00000938;
removeBG({ mode: BLACK, transition: 2 });
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
stopBGM();
bgload({ name: `BG11A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`And as usual, the room smelled faintly of 
smoke.`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 5, volume: 100 });
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B066`); appendText; 
   You`"Oh, hi there Takeshi..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Noticing me enter, You turned toward me from 
the console. `;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Say, You, you haven't been smoking have you?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I only said it in jest, but You looked 
slightly offended.`;
   waitForClick; clearText; marker; sound(`T5B067`); appendText; 
   You`"No way...how could you ask..."`;
   waitForClick; clearText; marker; sound(`T5B068`); appendText; 
   You`"You know the rules...no smoking until you're 
legal."`;
   waitForClick; clearText; marker; sound(`T5B069`); appendText; 
   You`"You can joke if you want, but I can't believe 
you'd say that."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B070`); appendText; 
   You`"I mean, just take a look at my fresh silky 
skin!"`;
   waitForClick; clearText; marker; sound(`T5B071`); appendText; 
   You`"This is the soft skin of a lady!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B072`); appendText; 
   You`"This is the kind of beauty that's impossible 
for a smoker like you, ha!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You spoke smugly, mocking me.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, I don't smoke."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B073`); appendText; 
   You`"Oh, really?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`T5B074`); appendText; 
   You`"Humph..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Anyway, let's stop all this stupid talk about 
smoking..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I just wanted to ask you something...the Kid 
said you were doing some research..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B075`); appendText; 
   You`"Huh?"`;
   waitForClick; clearText; marker; sound(`T5B076`); appendText; 
   You`"The Kid said that?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You gave me a slightly surprised look.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B077`); appendText; 
   You`"So tell me, Takeshi, what exactly did the Kid 
say?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I don't remember exactly, but..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"He just mentioned your were researching 
something. So I thought I'd ask you myself."`;
   waitForClick; clearText; marker; appendText; 
   You`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B078`); appendText; 
   You`"Well in that case, guess I'll let you in on 
it."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Turing back to the console, You began to type.`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE04_01`, a1: 0, volume: 90 });
fgload({ id: 1, name: `YU11BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B079`); appendText; 
   You`"You may not remember this, Takeshi, but..."`;
   waitForClick; clearText; marker; sound(`T5B080`); appendText; 
   You`"I have been researching stuff about LeMU for 
quite a while now."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She spoke with her eyes glued to the monitor.`;
   waitForClick; clearText; marker; sound(`T5B081`); appendText; 
   You`"And then there's the thing about my father..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Huh..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Or have I told you about him yet?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`It must have been the first day I came to this 
place.`;
   waitForClick; clearText; marker; appendText; 
   Narr`When You startled me by suddenly starting up 
the Dolphin Carousel. `;
   waitForClick; clearText; marker; appendText; 
   Narr`I had heard about him then...`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"So...have you found something?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B082`); appendText; 
   You`"Not yet."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You shook her head slowly.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_01`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Eyeing the monitor, she hit some more keys and 
entered a code.`;
   waitForClick; clearText; marker; sound(`T5B083`); appendText; 
   You`"If I could only find the password..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Password?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU11BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B084`); appendText; 
   You`"If I just had the password, I could access 
all the data inside LeMMIH."`;
   waitForClick; clearText; marker; sound(`T5B085`); appendText; 
   You`"Normally, all the data concerning LeMMIH's 
system has security protection."`;
   waitForClick; clearText; marker; sound(`T5B086`); appendText; 
   You`"And of course the personal data of the 
development staff as well."`;
   waitForClick; clearText; marker; sound(`T5B087`); appendText; 
   You`"And so I'm hunting for the key to unlock that 
protection...an emergency override."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Oh, so that's what you've been up to..."`;
   waitForClick; clearText; marker; sound(`T5B088`); appendText; 
   You`"...Yeah."`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE04_02`, a1: 0, volume: 90 });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B089`); appendText; 
   You`"But I give up."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You stopped typing.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Taking her eyes off the console, she looked at 
me.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey...by the way..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"If you disconnect LeMMIH's security 
protection, what will happen to Sora?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B090`); appendText; 
   You`"Sora?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Well, since Sora is an AI program inside the 
LeMMIH system, won't she be affected?"`;
   waitForClick; clearText; marker; sound(`T5B091`); appendText; 
   You`"Hmm...yes..."`;
   waitForClick; clearText; marker; sound(`T5B092`); appendText; 
   You`"Naturally, if the protection is removed, Sora 
will be totally exposed... naked."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Naked...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B093`); appendText; 
   You`"Um Takeshiiiii...? Did you just think of 
something kinky?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Me...?"`;
   waitForClick; clearText; marker; sound(`T5B094`); appendText; 
   You`"When I say naked, I don't mean Sora's image 
will be nude!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I...I wasn't...thinking that at all..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B095`); appendText; 
   You`"Yeah, sure... You seem pretty suspect to 
me..."`;
   waitForClick; clearText; marker; sound(`T5B096`); appendText; 
   You`"I don't really care, but..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`T5B097`); appendText; 
   You`"Sora won't become 'nude'...but all her 
thoughts, memories and various data will be 
accessible."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"That's an invasion of privacy!"`;
   waitForClick; clearText; marker; sound(`T5B098`); appendText; 
   You`"Well, not exactly, really."`;
   waitForClick; clearText; 
});
goto(lbl_00000c34).if(g_da == 0);
showTextbox();
text(() => {
   marker; appendText; 
   Takeshi`"Come on, wait a minute...!?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Okay, so if you find that password, will that 
mean you can save Sora?"`;
   waitForClick; clearText; marker; sound(`T5B099`); appendText; 
   You`"Save her?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"I mean, you could copy all her source data to 
a high-capacity hard drive or something..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"...and then take that data out of here by 
hand, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B100`); appendText; 
   You`"Well, yeah. It could be done."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B101`); appendText; 
   You`"Except, that won't be necessary."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You spoke coldly.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Huh?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B102`); appendText; 
   You`"We don't need to save Sora, she's saved 
already."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"How's that?"`;
   waitForClick; clearText; marker; sound(`T5B103`); appendText; 
   You`"The fact is, Sora doesn't actually reside in 
LeMU."`;
   waitForClick; clearText; marker; sound(`T5B104`); appendText; 
   You`"More precisely, the brains of Sora reside in 
a super computer on Insel null."`;
   waitForClick; clearText; marker; sound(`T5B105`); appendText; 
   You`"Are you following me?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; marker; sound(`T5B106`); appendText; 
   You`"Meaning, that even if LeMU sinks, floods or 
explodes, Sora won't be damaged at all."`;
   waitForClick; clearText; marker; sound(`T5B107`); appendText; 
   You`"Because, she's not even here."`;
   waitForClick; clearText; marker; sound(`T5B108`); appendText; 
   You`"She really lives above the ocean."`;
   waitForClick; clearText; marker; sound(`T5B109`); appendText; 
   You`"So from our point of view...just like her 
name means in Japanese, 'Sora' is in the 
'Sky'."`;
   waitForClick; clearText; marker; appendText; 
   Narr`With that, You pointed her finger towards the 
ceiling.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Lured by her pointing finger, I looked up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As if I expected to find Sora there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Naturally, she was nowhere to be seen...`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hey, hey, hey, hold on a second! How could 
that be!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"All data communication lines with Insel null 
have been cut, they're useless...!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Sora herself said that. It doesn't make 
sense!"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"If as you say, Sora exists above us, then how 
could she appear before us here?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   You`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B110`); appendText; 
   You`"That's what I mean..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Suddenly, You's voice level dropped.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"So, what...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B111`); appendText; 
   You`"Come on, Takeshi. You think it's strange, 
too, right?"`;
   waitForClick; clearText; marker; sound(`T5B112`); appendText; 
   You`"Sora said that thanks to the maintenance 
program, communication functions were 
optimized..."`;
   waitForClick; clearText; marker; sound(`T5B113`); appendText; 
   You`"In order to perform periodic maintenance, the 
master supercomputer on Insel Null has to be 
linked with LeMMIH here."`;
   waitForClick; clearText; marker; sound(`T5B114`); appendText; 
   You`"And since she said the maintenance checked 
out fine, that means..."`;
   waitForClick; clearText; marker; sound(`T5B115`); appendText; 
   You`"There might be a data communication link up 
and running somewhere."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"What?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"W-why, would Sora keep this from us?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B116`); appendText; 
   You`"What I'm going to say is only speculation, 
but..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You furrowed her brows together.`;
   waitForClick; clearText; marker; sound(`T5B117`); appendText; 
   You`"I think it's possible that someone is 
intentionally hiding the facts from us."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Your saying...that Sora could be lying to us?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B118`); appendText; 
   You`"No, it doesn't necessarily mean that."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You shook her head as she spoke.`;
   waitForClick; clearText; marker; sound(`T5B119`); appendText; 
   You`"On the one hand, someone might have created a 
program to orchestrate the whole thing, 
including keeping Sora silent."`;
   waitForClick; clearText; marker; sound(`T5B120`); appendText; 
   You`"Or it could be that, Sora may not be 
involved. Maybe she doesn't know anything or 
just hasn't noticed..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B121`); appendText; 
   You`"But for now, I don't know if it is true or 
not."`;
   waitForClick; clearText; marker; sound(`T5B122`); appendText; 
   You`"Whether my suspicions are correct, or all 
just a big misunderstanding......?"`;
   waitForClick; clearText; marker; sound(`T5B123`); appendText; 
   You`"Anyway, I can worry about that after I've 
cracked the protection..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B124`); appendText; 
   You`"For now I'm just trying to access the 
supercomputer on Insel null from this console."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`T5B125`); appendText; 
   You`"I don't know whether I can even gain access, 
but I'm pretty that's where the data is."`;
   waitForClick; clearText; marker; sound(`T5B126`); appendText; 
   You`"Yep. At least I know where the data is..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; 
});
goto(lbl_00000ca7);
let lbl_00000c34;
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B127`); appendText; 
   You`" I'm not one to go around blabbing secrets, 
and to tell the truth I'm not interested."`;
   waitForClick; clearText; marker; sound(`T5B128`); appendText; 
   You`"So don't worry, I've no intention of going 
through Sora's personal data."`;
   waitForClick; clearText; marker; sound(`T5B129`); appendText; 
   You`"Okay?"`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Hmm...well, okay."`;
   waitForClick; clearText; marker; sound(`T5B130`); appendText; 
   You`"...Okay then."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`After that I fell silent.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was searching for something to say.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You was looking down.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"So..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"If you discover something about your 
father...then what?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU13BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`When I asked, You furrowed her brow slightly.`;
   waitForClick; clearText; marker; sound(`T5B131`); appendText; 
   You`"Yeah, I was just thinking about that..."`;
   waitForClick; clearText; marker; sound(`T5B132`); appendText; 
   You`"Hmm. But I know what has to be done..."`;
   waitForClick; clearText; marker; sound(`T5B133`); appendText; 
   You`"I know all too well..."`;
   waitForClick; clearText; marker; sound(`T5B134`); appendText; 
   You`"But once I break this security code, I'll 
know everything I need to know..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B135`); appendText; 
   You`"Anyway, I'm trying to access LeMMIH's system 
core from this console."`;
   waitForClick; clearText; marker; sound(`T5B136`); appendText; 
   You`"Whether it's possible to gain access or not, 
I can't say. But I know the data is there."`;
   waitForClick; clearText; marker; sound(`T5B137`); appendText; 
   You`"Yep, I'm certain the data is there..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"........."`;
   waitForClick; clearText; 
});
let lbl_00000ca7;
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B138`); appendText; 
   You`"Well, at least it's a start..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You suddenly became more upbeat.`;
   waitForClick; clearText; marker; sound(`T5B139`); appendText; 
   You`"Cracking the security protection is going to 
be a real pain. This stubborn code!"`;
   waitForClick; clearText; marker; sound(`T5B140`); appendText; 
   You`"So what exactly awaits hidden inside? ...It's 
a little too soon to go there."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B141`); appendText; 
   You`"Until I can get inside, it's the same as not 
knowing a thing."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You said this and then gave a big shrug.`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Yeah..."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"But, I still think it's loads better than 
knowing nothing at all."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B142`); appendText; 
   You`"Well, maybe you're right."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You gave me a smile.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She then popped her neck and rotated her stiff 
shoulders.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`T5B143`); appendText; 
   You`"Now then..."`;
   waitForClick; clearText; marker; sound(`T5B144`); appendText; 
   You`"Back to work."`;
   waitForClick; clearText; marker; appendText; 
   Takeshi`"Alright, You, good luck. There's still time."`;
   waitForClick; clearText; marker; sound(`T5B145`); appendText; 
   You`"Okay."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Turning her back to me, You began to peck at 
the keyboard.`;
   waitForClick; clearText; 
});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE04_01`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; sound(`T5B146`); appendText; 
   You`"But still, you know..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Without stopping her hands, she muttered 
quietly.`;
   waitForClick; clearText; marker; sound(`T5B147`); appendText; 
   You`"My mother used to tell me all about my 
father's habits..."`;
   waitForClick; clearText; marker; sound(`T5B148`); appendText; 
   You`"So I know there are clues to be found..."`;
   waitForClick; clearText; marker; sound(`T5B149`); appendText; 
   You`"Decoding something as inorganic as a computer 
program is possible because..."`;
   waitForClick; clearText; marker; sound(`T5B150`); appendText; 
   You`"Even programmers have habits..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`For a long time, You stared at the monitor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She didn't look my way.`;
   waitForClick; clearText; marker; appendText; 
   Narr`So I couldn't read her expression anymore.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I could tell by her shaky voice.`;
   waitForClick; clearText; marker; appendText; 
   Narr`She was probably crying.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Without saying a word, I slipped out of the 
Security Office.`;
   waitForClick; clearText; 
});
stopSFX()
goto(lbl_00000d5b).if(g_da == 0);
hideTextbox();
stopBGM();
bgload({ name: `BG25A1`, transition: 20 });
playBGM({ num: 19, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(Is Sora really in Insel null...?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`If so...`;
   waitForClick; clearText; marker; appendText; 
   Narr`No matter whether LeMU is crushed or not, 
she'd still be okay...`;
   waitForClick; clearText; marker; appendText; 
   Narr`"Tell me Takeshi, after you escape from here 
safely, what's the first thing you want to do?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`......`;
   waitForClick; clearText; marker; appendText; 
   Narr`Were her words just a flimsy attempt at 
compassion?`;
   waitForClick; clearText; marker; appendText; 
   Narr`'I feel like I've gained an new perspective on 
human life.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'Come on everybody! Believe in tomorrow, so 
you can live today...'`;
   waitForClick; clearText; marker; appendText; 
   Narr`Were these words just robotic, programmed 
phrases...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Simple utterances encoded to pacify and 
comfort humans...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Suddenly, I felt a distance between Sora's 
existence and my own.`;
   waitForClick; clearText; 
});
let lbl_00000d5b;
removeBG({ mode: BLACK, transition: 1 });
stopBGM();
delay({ interval: 120 });
g_b3 = 0;
jump(`T_5C`);
