l_b0 = 5;
l_dayA = 5;
l_dayB = 5;
setDialogBoxColor(GREEN);
playBGM({ num: 3, volume: 100 });
bgload({ name: `BG21B1`, transition: 20 });
setSceneTitle({ index: 31 });
clock(`8:44`);
showTextbox();
text(() => {
   `After breakfast, we each had plenty of free time.`;
   `But there was nothing in particular to do...`;
   `...Nothing that just had to be done...`;
   `So without any reason, we all just ended up gathering in the rest area. `;
   `As always, the vases were filled with blossoming flowers.`;
   `Marguerites, marigolds and roses.`;
   `Apparently, the flowers were watered periodically by mist from the sprinkler system, helping them maintain their freshness.`;
   `I didn't see Sora anywhere, but then again...she did say she hadn't finished checking the sensor data...`;
   `She probably had gone to the Control Room. It seemed that she could concentrate on performing operations better there.`;

});
fgload({ id: 1, name: `YU11BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `You, who had been talking with Sora earlier, was strolling alone around the top of the circular stage in the middle of the room.`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `CO16ADM`, name2: `KA12ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   `The Kid, Coco, and Pipi where chasing each other playfully through the water. `;
   `I had a feeling I had seen this all before...`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `After having a good stretch, I watched Coco and the others play.`;

});
multifgload2({ id1: 1, id2: 2, name1: `CO12ADS`, name2: `KA12ADS`, x1: 176, x2: 464, useAnim: true });
showTextbox();
text(() => {
   `The three of them, two kids and an animal, circling the stone statue.`;
   `They were playing a game of chase, not really caring who was "it."`;
   `Without seeming to get bored, they kept running around and around.`;
   `I seemed to be making more effort than they were, just watching them.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   `(Phew, what a sight...)`;
   `It looked like fun, but I quickly gave up any idea of joining in.`;
   `And at any rate...Tsugumi had yet to make an appearance this morning.`;
   `Just in case, I had left a sandwich for her at the kiosk.`;
   `(I don't know if she'll actually eat it or not...)`;
   `What would I say to her if I met her?`;

});
if (l_tsugumi_flag == 0) goto(lbl_0000018a);
removeBG({ mode: WHITE, transition: 2 });
showFilter2();
unSkippableDelay(1);
bgload({ name: `EV_TU03A`, transition: 10 });
showTextbox();
text(() => {
   `She had confided her secrets to me on the Jellyfish Gondola.`;
   `Virus carrier.`;
   `A body that never dies.`;
   `A body that never grows old.`;
   `Her healed scar.`;
   `It was all so hard to believe...`;
   `Could such a mind-boggling story even be true?`;
   `I was still unable to completely believe her.`;

});
goto(lbl_000001b3);
let lbl_0000018a;
removeBG({ mode: WHITE, transition: 2 });
showFilter2();
unSkippableDelay(1);
bgload({ name: `EV_TU08A`, transition: 10 });
showTextbox();
text(() => {
   `So talking to her again would be awkward.`;
   `She had told me while we were on the Jellyfish Gondola...`;
   `"Kill me"...`;
   `I couldn't.`;
   `There was no possible way I could do such a thing.`;
   `But still...`;
   `Why did I feel like I had messed up somehow...?`;
   `Something had come over me.`;
   `There was nothing I could do...`;

});
let lbl_000001b3;
removeBG({ mode: BLACK, transition: 2 });
dimOff_ac = 0;
closeDimInAndOutAndFilterAnim();
bgload({ name: `BG21B1`, transition: 20 });
clock(`9:19`);
showTextbox();
text(() => {
   `I glanced up and noticed Coco and the others had stopped playing.`;
   `(Huh....? What is she doing....?)`;

});
hideTextbox();
stopBGM();
fgload({ id: 1, name: `KA06ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `With a worried look on his face, the Kid was watching Coco intently. `;
   `Pipi, too, had his eyes on her.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `In the middle of the rest area stood four stone statues. Coco was deliberately attempting to scale one of the pedestals...`;

});
hideTextbox();
playBGM({ num: 9, volume: 100 });
fgload({ id: 1, name: `CO18ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T5B000)`"Here I go!"`;
   `...With a heave, she began to climb up the side.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `(...??)`;
   `It was an odd sight.`;
   `I ran to the Kid, as he stood frozen watching her.`;

});
if (l_tsugumi_flag == 0) goto(lbl_00000268);
bgload({ name: `IT05A`, transition: 20 });
goto(lbl_0000027a);
let lbl_00000268;
bgload({ name: `IT05C`, transition: 20 });
goto(lbl_0000027a);
let lbl_0000027a;
showTextbox();
text(() => {
   Coco(T5B001)`"Okay...hmmmmmph..."`;
   `Stumbling as she mounted the pedestal, Coco ended up embracing the statue. `;

});
bgload({ name: `BG21B1`, transition: 20 });
fgload({ id: 1, name: `KA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T5B002)`" Coco!...What the heck are you doing?"`;
   `The Kid asked her curtly.`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `CO16ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T5B003)`"Yahoo!"`;
   Coco(T5B004)`"Wow, all I did was stand a little higher, and everything looks all different."`;
   Coco(T5B005)`"Let's see...to be exact, 27 inches higher, don't you think?"`;
   `Perched on top of the pedestal, Coco said this smiling triumphantly.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"...?"`;

});
fgload({ id: 1, name: `KA07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T5B006)`"Hey Coco, is that why you climbed up there?"`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `CO17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T5B007)`"What?"`;
   Coco(T5B008)`"Well....uuum, actually no..."`;
   `Coco answered with her head cocked.`;

});
fgload({ id: 1, name: `CO15ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T5B009)`"This area right here looks like it's missing something."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KA13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T5B010)`"Missing something?"`;
   Takeshi`"Which area?"`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `CO13ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T5B011)`"The statue's back..."`;

});
fgload({ id: 1, name: `CO11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T5B012)`"I kind of thought its back looked lonely."`;
   `Coco stroked the statue's back sympathetically with her tiny hand.`;
   Coco(T5B013)`"And well..."`;

});
fgload({ id: 1, name: `CO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T5B014)`"Abra...cadabra..."`;
   Coco(T5B015)`"SCREW DRIVER at YA——!!"`;
   `Uttering a stream of nonsense, Coco suddenly produced a flat-head screwdriver in her right hand.`;

});
fgload({ id: 1, name: `CO16ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(T5B016)`"TIMES TWO——!!"`;
   `And then, another one appeared in her left hand.`;
   `(Hey, where did she get those...?)`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `But before I could ask her anything, Coco was gripping two screwdrivers...`;
   `And then...`;
   `...Into the back of the statue...`;
   `...she began to carve the stone using the tip of the screwdriver....`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `EV_CO19A`, transition: 20 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   Coco(T5B017)`"Here we go..."`;
   `Cut, cut.`;
   `Cut, cut, carve, carve...`;
   `And within moments, the back of the statue was covered with gashes.`;
   Takeshi`"...????"`;
   `It was incomprehensible.`;
   `I just couldn't understand it.`;
   `First she says the back looks "lonely", and then she starts gouging it.`;
   `For a while the Kid and I just gazed at her with our jaws dropped.`;

});
showTextbox();
text(() => {
   Kid(T5B018)`"Hey, hey! What are you doing!"`;
   `The Kid yelled as he came back to his senses.`;

});
showTextbox();
text(() => {
   Coco(T5B019)`"I'm carving."`;

});
showTextbox();
text(() => {
   Coco(T5B020)`"Can't you see? I'm carving..."`;

});
showTextbox();
text(() => {
   Coco(T5B021)`"I'm etching some marks into the stone."`;
   Takeshi`"Oh, really. Etching some marks..."`;
   Takeshi`"I can tell that by watching you, Coco!"`;
   Takeshi`"That's not what I mean..."`;

});
showTextbox();
text(() => {
   Kid(T5B022)`"What for?"`;
   `The Kid beat me to the question.`;
   Coco(T5B023)`"Well, it's because..."`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   Coco(T5B024)`"I was feeling lonesome."`;
   Coco(T5B025)`"And anyway, I was..."`;

});
hideTextbox();
playBGM({ num: 19, volume: 100 });
showTextbox();
text(() => {
   Coco(T5B026)`"...feeling sad..."`;
   Coco(T5B027)`"I was feeling sad..."`;
   `She muttered in a tiny voice.`;
   `She worked with great dexterity, using a screwdriver in each hand.`;
   `The tips of the drivers dug into the stone screeching and forming tiny grooves.`;
   Kid(T5B028)`"Sad?"`;
   Coco(T5B029)`"Well, nobody's coming to rescue us, right? We've been abandoned."`;
   Coco(T5B030)`"So what harm is there in wrecking the place a little?"`;
   Kid`"........."`;
   Takeshi`"........."`;
   `The Kid and I looked at each other.`;
   `Coco looked back at her handiwork.`;

});
hideTextbox();
if (l_tsugumi_flag == 0) goto(lbl_00000438);
bgload({ name: `IT05A`, transition: 20 });
goto(lbl_0000044c);
let lbl_00000438;
hideTextbox();
bgload({ name: `IT05C`, transition: 20 });
goto(lbl_0000044c);
let lbl_0000044c;
showTextbox();
text(() => {
   `The gashes had begun to take on a shape.`;
   `It was a human form, like a stick person.`;
   `Its tip formed a round head...`;
   Kid(T5B031)`"Who's that?"`;

});
bgload({ name: `EV_CO19A`, transition: 20 });
showTextbox();
text(() => {
   Coco(T5B032)`"It's me, Coco."`;
   Coco(T5B033)`"And look, this is Pipi and Chami."`;
   `Looking more carefully, I could see two unusual animal figures beside the human form.`;
   Kid`"........."`;

});
if (l_tsugumi_flag == 0) goto(lbl_0000048c);
showTextbox();
text(() => {
   Coco(T5B034)`"And then there's..."`;

});
showTextbox();
text(() => {
   `One of the shapes had a particularly large head.`;
   `It was only half finished.`;

});
showTextbox();
text(() => {
   Coco(T5B035)`"This is Tsugumi."`;
   Coco(T5B036)`"For Tsugumi, it's important to make her look really cool..."`;

});
goto(lbl_00000496);
let lbl_0000048c;
showTextbox();
text(() => {
   Coco(T5B037)`"Okay, and then..."`;
   `One of the shapes had a particularly large head.`;
   `It was only half finished.`;

});
showTextbox();
text(() => {
   Coco(T5B038)`"This is Sora."`;
   Coco(T5B039)`"Sora is pretty, which makes her hard to draw..."`;

});
let lbl_00000496;
hideTextbox();
showTextbox();
text(() => {
   Coco(T5B040)`"Tra, la, la...tra, la, la, la, la..."`;
   `Singing a cute little song, Coco continued to carve.`;
   `She seemed entirely absorbed by what she was doing.`;
   `Somehow, I could relate to her desire to throw herself into something...`;
   Kid(T5B041)`"That's destroying private property...it's vandalism."`;
   Takeshi`"Hey, relax Kid. Now's not the time to be so uptight."`;
   Takeshi`"Coco's into her work. You can't blame her."`;
   Kid(T5B042)`"Um...right..."`;

});
showTextbox();
text(() => {
   Coco(T5B043)`"Here we go, next..."`;
   Coco(T5B044)`"Uh oh!"`;

});
bgload({ name: `EV_CO19B`, transition: 20 });
showTextbox();
text(() => {
   `Because of her unsteady position on the pedestal, Coco suddenly lost her balance. `;

});
showTextbox();
text(() => {
   Kid(T5B045)`"Hey, be careful!!"`;

});
removeBG({ mode: BLACK, transition: 62 });
showTextbox();
text(() => {
   `Without hesitating, the Kid jumped forward, steadying her body.`;
   `He grabbed her by the hips, to prevent her from slipping down and carefully lowered her to sit on the pedestal. `;

});
bgload({ name: `BG21B1`, transition: 20 });
multifgload2({ id1: 1, id2: 2, name1: `CO15ADM`, name2: `KA01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(T5B046)`"Oops, thank you..."`;
   Kid(T5B047)`"Watch your step, okay?"`;
   Coco(T5B048)`"Okay!"`;

});
fgload({ id: 1, name: `CO16ADM`, x: 128, useAnim: false });
showTextbox();
text(() => {
   Coco(T5B049)`"Ah, I know...why don't you join me Kiddo?"`;

});
fgload({ id: 2, name: `KA06ADM`, x: 512, useAnim: false });
showTextbox();
text(() => {
   Kid(T5B050)`"You mean...?"`;
   Coco(T5B051)`"Come on, please... Let's both try it!"`;
   Coco(T5B052)`"You can carve a picture of yourself and Nakkyu here..."`;
   Coco(T5B053)`"And then I was thinking of carving Takepyon over here."`;
   Coco(T5B054)`"Okay? Here's one of my screwdrivers."`;

});
fgload({ id: 2, name: `KA11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Kid(T5B055)`"Well okay. Thanks..."`;
   `Energized by Coco's enthusiasm, the Kid took the screwdriver.`;
   `And mounted the pedestal to join her.`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Be careful not to fall yourself, Kid."`;
   Kid(T5B056)`"I-I'll be alright."`;
   Takeshi`"Don't slip, Coco. Why don't you let me hold you up?"`;
   Coco(T5B057)`"Huh? I wonder if that's the...?"`;

});
fgload({ id: 1, name: `KA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T5B058)`"She'll be alright!"`;
   `I was about to stretch my hands toward her but the Kid stopped me.`;

});
fgload({ id: 1, name: `KA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Kid(T5B059)`"Don't worry, I got her..."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `The Kid took hold of Coco's empty hand.`;
   `While embracing the statue in a hug, Coco and the Kid steadied each other.`;
   `And using their free hands, they both began carving shapes.`;

});
if (l_tsugumi_flag == 0) goto(lbl_000005b5);
bgload({ name: `IT05A`, transition: 20 });
showTextbox();
text(() => {
   `The statue stood there in silence without complaint, pointing its finger to the south.`;

});
goto(lbl_000005c8);
let lbl_000005b5;
bgload({ name: `IT05C`, transition: 20 });
showTextbox();
text(() => {
   `The statue didn't say a word, only stood silently, pointing at the ceiling.`;

});
let lbl_000005c8;
hideTextbox();
if (l_tsugumi_flag == 0) goto(lbl_000005f9);
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
   `A while later...`;

});
hideTextbox();
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `What was left in stone was the carved images of six people and two animals.`;
   `It was evidence of our existence here.`;

});
removeBG({ mode: BLACK, transition: 0 });
stopBGM();
delay({ interval: 60 });
playBGM({ num: 3, volume: 100 });
bgload({ name: `IMG01B`, transition: 20 });
clock(`12:36`);
if (l_sora_flag != 0) goto(lbl_0000068d);
setSceneTitle({ index: 32 });
goto(lbl_0000069b);
let lbl_0000068d;
setSceneTitle({ index: 33 });
let lbl_0000069b;
showTextbox();
text(() => {
   `That afternoon -`;
   `After a light lunch, I looked around but couldn't find You anywhere.`;
   Kid(T5B060)`"Looking for You? She ate lunch and then went to the Security Office in Zweite stock."`;
   Coco(T5B061)`"She said something about doing some research."`;
   Takeshi`"Research? I wonder what that could be?"`;
   Kid(T5B062)`"She didn't say exactly..."`;
   Kid(T5B063)`"If you really want to know, why don't you go ask her yourself?"`;
   Takeshi`"Yeah, I guess you're right..."`;
   Coco(T5B064)`"What about Sora, where'd she go?"`;
   Kid(T5B065)`"She's still in the Control Room. I spoke to her through the terminal intercom, but she seemed really busy."`;
   `As usual, Tsugumi was nowhere to be seen...but the sandwich I left at the kiosk was gone...`;
   `Come to think of it, neither You, Sora nor Tsugumi had said a word to me all morning.`;

});
bgload({ name: `BG26B1L`, transition: 20 });
showTextbox();
text(() => {
   `(Something's up...I can tell...)`;
   `At any rate, I figured I would go search for them.`;
   `But I didn't know where should I go?`;

});
choice(
   `The Control Room?`,
   `The Infirmary?`,
   `The Security Office?`,
);
switch (l_choice) {
   case 0: goto(lbl_000006dd);
   case 1: goto(lbl_000007d0);
   case 2: goto(lbl_00000933);
}
let lbl_000006dd;
l_sora_point += 1;
bgload({ name: `BG15B1`, transition: 20 });
showTextbox();
text(() => {
   `I tried the Control Room.`;
   `I pushed the button to open the door and it slid open.`;

});
playSFX({ name: `SE00_00`, a1: 0, volume: 100 });
bgload({ name: `BG16A3`, transition: 20 });
showTextbox();
text(() => {
   Takeshi`"Sora, are you in here?"`;
   `I called out her name, but got no response.`;
   `The console was silent.`;
   `(That's strange...)`;
   `I wonder if this means she finished checking the sensor data.`;
   `But if that was the case, I thought she would report back to us?`;
   `(Sora...where are you?)`;
   Takeshi`"Hey, So—ra—." `;
   `I expected to find her hiding in the corner somewhere...`;
   `I called out for her again, but still got no response.`;
   `Next, I touched the terminal.`;
   `Although I didn't know how to operate it, it seemed to be responding.`;

});
hideTextbox();
bgload({ name: `MAP3F_A2`, transition: 30 });
setMapCommentToDisplay({ slot: 0 });
pickMapComment({ index: 6 });
openMapCommentAnim();
delay({ interval: 120 });
showTextbox();
text(() => {
   `A map of LeMU data suddenly appeared on the LeMMIH monitor.`;
   `But it didn't tell me anything.`;

});
hideTextbox();
closeMapIndicatorAnim();
bgload_keepFg({ name: `MAP3F_A2`, transition: 30 });
unSkippableDelay(1);
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG16A3`, transition: 20 });
showTextbox();
text(() => {
   `There was still no sign of Sora.`;

});
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   `I decided to check somewhere else.`;
   `I headed for the second floor.`;

});
choice(
   `The Infirmary`,
   `The Security Office`,
);
switch (l_choice) {
   case 0: goto(lbl_000007d0);
   case 1: goto(lbl_00000933);
}
let lbl_000007d0;
l_tsugumi_point += 1;
removeBG({ mode: BLACK, transition: 2 });
bgload({ name: `BG08A1`, transition: 20 });
showTextbox();
text(() => {
   `Turning down a corridor after climbing the emergency stairs, I came out in front of the Infirmary.`;

});
playSFX({ name: `SE00_03`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `(Huh....!?)`;
   `The door abruptly opened in my face, and a person came flying out.`;
   `...And then dodged right past me.`;

});
playSFX({ name: `SE01_04`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `In a flash the figure was gone, without even seeming to notice me.`;
   `(...Who was that??)`;
   `I whipped around quickly, trying to see who the person was.`;

});
bgload({ name: `BG26A3R`, transition: 20 });
fgload({ id: 1, name: `TU03ADS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `...It was Tsugumi.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"Hey..."`;
   `I started to call out, but hesitated.`;
   `The events of from the night before popped into my mind.`;
   `(I could stop her, but then what...?)`;
   `In the meantime, all I could see was Tsugumi's back fading further away.`;
   Takeshi`"Hey! Wait up! Where you going?"`;
   `Barely getting the words out, I dashed after her.`;

});
playSFX({ name: `SE01_04`, a1: 0, volume: 95 });
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   `I ran up a corridor, and hurriedly climbed the stairs.`;

});
playSFX({ name: `SE01_06`, a1: 0, volume: 95 });
bgload({ name: `BG28A3R`, transition: 20 });
showTextbox();
text(() => {
   `But the sound of her feet faded down the end of the emergency corridor.`;
   `Her figure had already rounded the corner out of sight.`;
   Takeshi`"Tsu—gu—mi...!"`;
   `I was out of breath.`;
   `I had run about 30 yards, but...`;
   Takeshi`"Damn it, Tsugumi, you sure are fast!!"`;
   `I grumbled after her, although she was now well out of earshot.`;
   `It didn't feel like I could catch up with her at all.`;
   `Her speed was unnatural.`;
   `...She was still supposed to be recuperating...`;

});
if (l_tsugumi_flag == 0) goto(lbl_00000917);
showTextbox();
text(() => {
   `(But still...)`;
   `(She's still a little slower than when she pulled me away from the flood at the aquarium.)`;
   `Her legs probably still hadn't fully recovered.`;
   `At any rate I didn't want her to overdoing it.`;
   Takeshi`"Aaah, damn it...!"`;
   `Annoyed that I was out of breath, I continued after Tsugumi.`;

});
bgload({ name: `BG27A3`, transition: 20 });
showTextbox();
text(() => {
   `The sound of her feet was only barely perceptible in the distance.`;
   `I strained my ears to hear.`;
   `It sounded like she had headed downstairs...`;

});
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   `I descended the stairs.`;
   `I was unable to hear any footsteps from below.`;
   `It seemed that instead of going to the third floor, she had gone down to the corridor on the second floor.`;

});
bgload({ name: `BG25A3`, transition: 20 });
bgload({ name: `BG03A1`, transition: 20 });
showTextbox();
text(() => {
   `I came out near the entrance to the Jellyfish Gondola.`;
   `(I had thought she came this way...)`;
   `But Tsugumi was nowhere in sight.`;
   `(Damn...I guess I'll just have to give up.)`;
   `What's the point in playing chase with her anyway, I thought...?`;
   `But still, I was disappointed.`;

});
bgload({ name: `BG26A3R`, transition: 20 });
showTextbox();
text(() => {
   `Without further recourse, I gave up and walked to the nearby Security Office.`;

});
goto(lbl_00000938);
let lbl_00000917;
showTextbox();
text(() => {
   Takeshi`"Hey!! Tsugumi—!!"`;
   `I called her name without much hope, but there was no answer.`;
   `In the end it seemed Tsugumi hadn't noticed.`;
   `It hadn't seemed that she was trying to avoid me...`;
   `But maybe I was better off this way.`;

});
bgload({ name: `BG29A1`, transition: 20 });
showTextbox();
text(() => {
   `Giving up, I went back down the stairs and returned to the corridor.`;
   `I decided to stop by the nearby Security Office.`;

});
goto(lbl_00000938);
let lbl_00000933;
showTextbox();
text(() => {
   `Climbing the stairs, I headed toward the Security Office on second floor.`;

});
let lbl_00000938;
removeBG({ mode: BLACK, transition: 2 });
playSFX({ name: `SE00_01`, a1: 0, volume: 100 });
stopBGM();
bgload({ name: `BG11A1`, transition: 20 });
showTextbox();
text(() => {
   `And as usual, the room smelled faintly of smoke.`;

});
hideTextbox();
playBGM({ num: 5, volume: 100 });
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T5B066)`"Oh, hi there Takeshi..."`;
   `Noticing me enter, You turned toward me from the console. `;
   Takeshi`"Say, You, you haven't been smoking have you?"`;

});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `I only said it in jest, but You looked slightly offended.`;
   You(T5B067)`"No way...how could you ask..."`;
   You(T5B068)`"You know the rules...no smoking until you're legal."`;
   You(T5B069)`"You can joke if you want, but I can't believe you'd say that."`;

});
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T5B070)`"I mean, just take a look at my fresh silky skin!"`;
   You(T5B071)`"This is the soft skin of a lady!"`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T5B072)`"This is the kind of beauty that's impossible for a smoker like you, ha!"`;
   `You spoke smugly, mocking me.`;
   Takeshi`"Hey, I don't smoke."`;

});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T5B073)`"Oh, really?"`;
   Takeshi`"........."`;
   You(T5B074)`"Humph..."`;
   Takeshi`"Anyway, let's stop all this stupid talk about smoking..."`;
   Takeshi`"I just wanted to ask you something...the Kid said you were doing some research..."`;

});
fgload({ id: 1, name: `YU06BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T5B075)`"Huh?"`;
   You(T5B076)`"The Kid said that?"`;
   `You gave me a slightly surprised look.`;

});
fgload({ id: 1, name: `YU03BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T5B077)`"So tell me, Takeshi, what exactly did the Kid say?"`;
   Takeshi`"I don't remember exactly, but..."`;
   Takeshi`"He just mentioned your were researching something. So I thought I'd ask you myself."`;
   You`"........."`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T5B078)`"Well in that case, guess I'll let you in on it."`;
   `Turing back to the console, You began to type.`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE04_01`, a1: 0, volume: 90 });
fgload({ id: 1, name: `YU11BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T5B079)`"You may not remember this, Takeshi, but..."`;
   You(T5B080)`"I have been researching stuff about LeMU for quite a while now."`;
   `She spoke with her eyes glued to the monitor.`;
   You(T5B081)`"And then there's the thing about my father..."`;
   Takeshi`"Huh..."`;
   Takeshi`"Or have I told you about him yet?"`;
   `It must have been the first day I came to this place.`;
   `When You startled me by suddenly starting up the Dolphin Carousel. `;
   `I had heard about him then...`;
   Takeshi`"So...have you found something?"`;

});
fgload({ id: 1, name: `YU13BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T5B082)`"Not yet."`;
   `You shook her head slowly.`;

});
playSFX({ name: `SE04_01`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   `Eyeing the monitor, she hit some more keys and entered a code.`;
   You(T5B083)`"If I could only find the password..."`;
   Takeshi`"Password?"`;

});
fgload({ id: 1, name: `YU11BDS`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T5B084)`"If I just had the password, I could access all the data inside LeMMIH."`;
   You(T5B085)`"Normally, all the data concerning LeMMIH's system has security protection."`;
   You(T5B086)`"And of course the personal data of the development staff as well."`;
   You(T5B087)`"And so I'm hunting for the key to unlock that protection...an emergency override."`;
   Takeshi`"Oh, so that's what you've been up to..."`;
   You(T5B088)`"...Yeah."`;

});
hideTextbox();
playSFX({ name: `SE04_02`, a1: 0, volume: 90 });
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   You(T5B089)`"But I give up."`;
   `You stopped typing.`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Taking her eyes off the console, she looked at me.`;
   Takeshi`"Hey...by the way..."`;
   Takeshi`"If you disconnect LeMMIH's security protection, what will happen to Sora?"`;

});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T5B090)`"Sora?"`;
   Takeshi`"Well, since Sora is an AI program inside the LeMMIH system, won't she be affected?"`;
   You(T5B091)`"Hmm...yes..."`;
   You(T5B092)`"Naturally, if the protection is removed, Sora will be totally exposed... naked."`;
   Takeshi`"Naked...?"`;

});
fgload({ id: 1, name: `YU04BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T5B093)`"Um Takeshiiiii...? Did you just think of something kinky?"`;
   Takeshi`"Me...?"`;
   You(T5B094)`"When I say naked, I don't mean Sora's image will be nude!"`;
   Takeshi`"I...I wasn't...thinking that at all..."`;

});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T5B095)`"Yeah, sure... You seem pretty suspect to me..."`;
   You(T5B096)`"I don't really care, but..."`;
   Takeshi`"........."`;
   You(T5B097)`"Sora won't become 'nude'...but all her thoughts, memories and various data will be accessible."`;
   Takeshi`"That's an invasion of privacy!"`;
   You(T5B098)`"Well, not exactly, really."`;

});
if (l_sora_flag == 0) goto(lbl_00000c34);
showTextbox();
text(() => {
   Takeshi`"Come on, wait a minute...!?"`;
   Takeshi`"Okay, so if you find that password, will that mean you can save Sora?"`;
   You(T5B099)`"Save her?"`;
   Takeshi`"I mean, you could copy all her source data to a high-capacity hard drive or something..."`;
   Takeshi`"...and then take that data out of here by hand, right?"`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T5B100)`"Well, yeah. It could be done."`;

});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T5B101)`"Except, that won't be necessary."`;
   `You spoke coldly.`;
   Takeshi`"Huh?"`;

});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T5B102)`"We don't need to save Sora, she's saved already."`;
   Takeshi`"How's that?"`;
   You(T5B103)`"The fact is, Sora doesn't actually reside in LeMU."`;
   You(T5B104)`"More precisely, the brains of Sora reside in a super computer on Insel null."`;
   You(T5B105)`"Are you following me?"`;
   Takeshi`"........."`;
   You(T5B106)`"Meaning, that even if LeMU sinks, floods or explodes, Sora won't be damaged at all."`;
   You(T5B107)`"Because, she's not even here."`;
   You(T5B108)`"She really lives above the ocean."`;
   You(T5B109)`"So from our point of view...just like her name means in Japanese, 'Sora' is in the 'Sky'."`;
   `With that, You pointed her finger towards the ceiling.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Lured by her pointing finger, I looked up.`;
   `As if I expected to find Sora there.`;
   `Naturally, she was nowhere to be seen...`;
   Takeshi`"Hey, hey, hey, hold on a second! How could that be!"`;
   Takeshi`"All data communication lines with Insel null have been cut, they're useless...!"`;
   Takeshi`"Sora herself said that. It doesn't make sense!"`;
   Takeshi`"If as you say, Sora exists above us, then how could she appear before us here?"`;

});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You`"........."`;

});
fgload({ id: 1, name: `YU03BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T5B110)`"That's what I mean..."`;
   `Suddenly, You's voice level dropped.`;
   Takeshi`"So, what...?"`;

});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T5B111)`"Come on, Takeshi. You think it's strange, too, right?"`;
   You(T5B112)`"Sora said that thanks to the maintenance program, communication functions were optimized..."`;
   You(T5B113)`"In order to perform periodic maintenance, the master supercomputer on Insel Null has to be linked with LeMMIH here."`;
   You(T5B114)`"And since she said the maintenance checked out fine, that means..."`;
   You(T5B115)`"There might be a data communication link up and running somewhere."`;
   Takeshi`"What?"`;
   Takeshi`"W-why, would Sora keep this from us?"`;

});
fgload({ id: 1, name: `YU13BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T5B116)`"What I'm going to say is only speculation, but..."`;
   `You furrowed her brows together.`;
   You(T5B117)`"I think it's possible that someone is intentionally hiding the facts from us."`;
   Takeshi`"Your saying...that Sora could be lying to us?"`;

});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T5B118)`"No, it doesn't necessarily mean that."`;
   `You shook her head as she spoke.`;
   You(T5B119)`"On the one hand, someone might have created a program to orchestrate the whole thing, including keeping Sora silent."`;
   You(T5B120)`"Or it could be that, Sora may not be involved. Maybe she doesn't know anything or just hasn't noticed..."`;
   Takeshi`"........."`;

});
fgload({ id: 1, name: `YU13BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T5B121)`"But for now, I don't know if it is true or not."`;
   You(T5B122)`"Whether my suspicions are correct, or all just a big misunderstanding......?"`;
   You(T5B123)`"Anyway, I can worry about that after I've cracked the protection..."`;

});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T5B124)`"For now I'm just trying to access the supercomputer on Insel null from this console."`;

});
showTextbox();
text(() => {
   You(T5B125)`"I don't know whether I can even gain access, but I'm pretty that's where the data is."`;
   You(T5B126)`"Yep. At least I know where the data is..."`;
   Takeshi`"........."`;

});
goto(lbl_00000ca7);
let lbl_00000c34;
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T5B127)`" I'm not one to go around blabbing secrets, and to tell the truth I'm not interested."`;
   You(T5B128)`"So don't worry, I've no intention of going through Sora's personal data."`;
   You(T5B129)`"Okay?"`;
   Takeshi`"Hmm...well, okay."`;
   You(T5B130)`"...Okay then."`;

});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `After that I fell silent.`;
   `I was searching for something to say.`;

});
fgload({ id: 1, name: `YU03BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `You was looking down.`;
   Takeshi`"So..."`;
   Takeshi`"If you discover something about your father...then what?"`;

});
fgload({ id: 1, name: `YU13BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `When I asked, You furrowed her brow slightly.`;
   You(T5B131)`"Yeah, I was just thinking about that..."`;
   You(T5B132)`"Hmm. But I know what has to be done..."`;
   You(T5B133)`"I know all too well..."`;
   You(T5B134)`"But once I break this security code, I'll know everything I need to know..."`;

});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T5B135)`"Anyway, I'm trying to access LeMMIH's system core from this console."`;
   You(T5B136)`"Whether it's possible to gain access or not, I can't say. But I know the data is there."`;
   You(T5B137)`"Yep, I'm certain the data is there..."`;
   Takeshi`"........."`;

});
let lbl_00000ca7;
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T5B138)`"Well, at least it's a start..."`;
   `You suddenly became more upbeat.`;
   You(T5B139)`"Cracking the security protection is going to be a real pain. This stubborn code!"`;
   You(T5B140)`"So what exactly awaits hidden inside? ...It's a little too soon to go there."`;

});
fgload({ id: 1, name: `YU08BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T5B141)`"Until I can get inside, it's the same as not knowing a thing."`;
   `You said this and then gave a big shrug.`;
   Takeshi`"Yeah..."`;
   Takeshi`"But, I still think it's loads better than knowing nothing at all."`;

});
fgload({ id: 1, name: `YU02BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T5B142)`"Well, maybe you're right."`;
   `You gave me a smile.`;
   `She then popped her neck and rotated her stiff shoulders.`;

});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   You(T5B143)`"Now then..."`;
   You(T5B144)`"Back to work."`;
   Takeshi`"Alright, You, good luck. There's still time."`;
   You(T5B145)`"Okay."`;
   `Turning her back to me, You began to peck at the keyboard.`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
playSFX({ name: `SE04_01`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   You(T5B146)`"But still, you know..."`;
   `Without stopping her hands, she muttered quietly.`;
   You(T5B147)`"My mother used to tell me all about my father's habits..."`;
   You(T5B148)`"So I know there are clues to be found..."`;
   You(T5B149)`"Decoding something as inorganic as a computer program is possible because..."`;
   You(T5B150)`"Even programmers have habits..."`;
   `For a long time, You stared at the monitor.`;
   `She didn't look my way.`;
   `So I couldn't read her expression anymore.`;
   `But I could tell by her shaky voice.`;
   `She was probably crying.`;
   `Without saying a word, I slipped out of the Security Office.`;

});
stopSFX()
if (l_sora_flag == 0) goto(lbl_00000d5b);
hideTextbox();
stopBGM();
bgload({ name: `BG25A1`, transition: 20 });
playBGM({ num: 19, volume: 100 });
showTextbox();
text(() => {
   `(Is Sora really in Insel null...?)`;
   `If so...`;
   `No matter whether LeMU is crushed or not, she'd still be okay...`;
   `"Tell me Takeshi, after you escape from here safely, what's the first thing you want to do?"`;
   `......`;
   `Were her words just a flimsy attempt at compassion?`;
   `'I feel like I've gained an new perspective on human life.'`;
   `'Come on everybody! Believe in tomorrow, so you can live today...'`;
   `Were these words just robotic, programmed phrases...?`;
   `Simple utterances encoded to pacify and comfort humans...?`;
   `Suddenly, I felt a distance between Sora's existence and my own.`;

});
let lbl_00000d5b;
removeBG({ mode: BLACK, transition: 1 });
stopBGM();
delay({ interval: 120 });
l_choice = 0;
jump(`T_5C`);
