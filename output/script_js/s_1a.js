setDialogBoxColor(BLUE);
setSceneTitle({ index: 49 });
g_b0 = 5;
g_b1 = 1;
g_b2 = 1;
removeBG({ mode: WHITE, transition: 0 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The next thing I knew, I was on a bed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The ceiling was so white it was
slightly blinding...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It smelled of disinfectant...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered where I was?`;
   waitForClick; clearText; marker; sound(`S1A000`); appendText; 
   //??
   Unk`"Are you awake now?"`;
   waitForClick; clearText; 
});
playBGM({ num: 4, volume: 100 });
clock(`15:17`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`A shadow passed above me on the bed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wondered who it could be...?`;
   waitForClick; clearText; marker; appendText; 
   Narr`(No...wait a minute...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`Somewhere...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt like...I had met this person
somewhere before.`;
   waitForClick; clearText; marker; sound(`S1A001`); appendText; 
   //??
   Unk`"How are you doing?"`;
   waitForClick; clearText; marker; sound(`S1A002`); appendText; 
   //??
   Unk`"You look...alright anyway."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Who? Who was it?`;
   waitForClick; clearText; marker; appendText; 
   Narr`I knew her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was sure that I knew her.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Still, I couldn't put my finger on any
one thing about her that I knew.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The more I thought about it, the more
the area around my temples pounded
with pain.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU01B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`S1A003`); appendText; 
   //??
   Unk`"Oh? I guess it's no good then?"`;
   waitForClick; clearText; marker; sound(`S1A004`); appendText; 
   //??
   Unk`"Does your head...hurt?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I pressed my temples with the fingers
of both hands, nodding slightly.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU01A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`S1A005`); appendText; 
   //??
   Unk`"I see. Just wait a second, alright?"`;
   waitForClick; clearText; marker; sound(`S1A006`); appendText; 
   //??
   Unk`"I'll try to find some painkillers."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She laughed sweetly and stepped away
from me.`;
   waitForClick; clearText; 
});
bgload({ name: `BG09A1`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I raised myself up and looked around.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The room was completely white...`;
   waitForClick; clearText; marker; appendText; 
   Narr`With a number of beds tidily lined up
in a row...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Looking behind me there was a curved
glass window in the wall.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I got off the bed and put on my shoes,
which were neatly arranged below me.
I approached the window.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SA13D`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Outside, as far as the eye could see,
was one endless sheet of blue.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Transparent waves of light swayed
gently in the deep, dense navy mist.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I put both of my hands on the wall and
pushed my face up against the glass.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just then - a flash of silver light
dart across my vision.`;
   waitForClick; clearText; marker; appendText; 
   Narr`For an instant, I was afraid.
Then I noticed it was just a fish.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"This is..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"...the middle of the ocean."`;
   waitForClick; clearText; marker; sound(`S1A007`); appendText; 
   //??
   Unk`"What's the matter?"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `BG09A1`, transition: 26 });
fgload({ id: 1, name: `YU06BDM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`At some point the girl had come to
stand beside me.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A008`); appendText; 
   //??
   Unk`"Of course it is!?"`;
   waitForClick; clearText; marker; sound(`S1A009`); appendText; 
   //??
   Unk`"This is the LeMU infirmary."`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
playSFX({ name: `SE10_11`, a1: 0, volume: 100 });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`—LeMU!`;
   waitForClick; clearText; marker; appendText; 
   Narr`The instant I heard that word, a flash
of searing light reappeared in the back
of my mind.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That's right! That's right!`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had come to LeMU!`;
   waitForClick; clearText; 
});
bgload({ name: `BG38A2`, transition: 10 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The theme park LeMU floating in the
ocean!`;
   waitForClick; clearText; marker; appendText; 
   Narr`And I had been walking around LeMU
with her.`;
   waitForClick; clearText; 
});
bgload({ name: `BG04A3`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`There were ancient ruins...`;
   delay(30); 
});
bgload_keepFg({ name: `BG05A4`, transition: 20 });
showTextbox();
text(() => {
   appendText; 
   Narr`And the whale
floating in the darkness...`;
   delay(30); 
});
bgload_keepFg({ name: `BG36A1`, transition: 20 });
showTextbox();
text(() => {
   appendText; 
   Narr`The Jellyfish
Gondola...`;
   delay(30); 
});
bgload_keepFg({ name: `BG02A3`, transition: 20 });
showTextbox();
text(() => {
   appendText; 
   Narr`And merry-go-round...`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 2 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But...`;
   waitForClick; clearText; 
});
bgload({ name: `IMG01A`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But...why had I come to this place...to
LeMU?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Had I come for fun?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Of course I had. This was a theme park
after all...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But was that right? Was that really
the reason?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Violent head pains struck me again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I shook my head again and again, my
face distorted from the pain.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: WHITE });
bgload({ name: `BG09A1`, transition: 26 });
fgload({ id: 1, name: `YU06BDM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; sound(`S1A010`); appendText; 
   //??
   Unk`"Hey...are you alright?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A011`); appendText; 
   //??
   Unk`"Shouldn't you rest a little more?"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She helped support me as I returned
to the bed.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU01A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`S1A012`); appendText; 
   //??
   Unk`"I brought you some headache medicine."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She held two white pills in her left
hand. In her right was a cup filled
with water.`;
   waitForClick; clearText; marker; appendText; 
   Narr`White, white pills, two of them...`;
   waitForClick; 
});
choice(
   `Thanks`
   `No thanks`
);
switch (choice) {
   case 0: goto(lbl_0000028f);
   case 1: goto(lbl_000002a3);
}
let lbl_0000028f;
g_b6 += 1;
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Thanks..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took the pills and gulped them down.`;
   waitForClick; clearText; 
});
goto(lbl_000002d2);
let lbl_000002a3;
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"No thanks..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I replied instantly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked away from her hand.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU01B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`S1A013`); appendText; 
   //??
   Unk`"What's the matter? Your head hurts,
right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah..."`;
   waitForClick; clearText; marker; sound(`S1A014`); appendText; 
   //??
   Unk`"Then if you don't take these...the pain
won't go away."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pain continued to throb through my
skull.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The pills in her hand would help to
ease that pain...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I understood all of that.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Yet for some reason...`;
   waitForClick; clearText; marker; appendText; 
   Narr`For some reason I wanted to look away
from the medicine...`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU01A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`S1A015`); appendText; 
   //??
   Unk`"Oh, I get it!"`;
   waitForClick; clearText; marker; sound(`S1A016`); appendText; 
   //??
   Unk`"I see, you..."`;
   waitForClick; clearText; marker; sound(`S1A017`); appendText; 
   //??
   Unk`"You don't like the taste, right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"..."`;
   waitForClick; clearText; marker; sound(`S1A018`); appendText; 
   //??
   Unk`"That's kind of sad."`;
   waitForClick; clearText; marker; sound(`S1A019`); appendText; 
   //??
   Unk`"But that's okay. This medicine isn't bitter 
at all."`;
   waitForClick; clearText; marker; sound(`S1A020`); appendText; 
   //??
   Unk`"It's more than not bitter. It's got a mellow, 
sweet, full flavor that floods throughout 
the mouth without an aftertaste..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Ooouccch..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`My headache had gotten worse.`;
   waitForClick; clearText; marker; sound(`S1A021`); appendText; 
   //??
   Unk`"I told you so."`;
   waitForClick; clearText; marker; sound(`S1A022`); appendText; 
   //??
   Unk`"If you REALLY can't drink it then I can give 
it to you anally via a suppository."`;
   waitForClick; clearText; marker; appendText; 
   Narr`For an instant I feared my chastity
might be violated and grabbed the belt
of my pants.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"A-alright. I'll drink it...I'll drink it."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Feeling half-threatened, I drank the
medicine even though I didn't want to.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was super bitter.`;
   waitForClick; clearText; 
});
goto(lbl_000002d2);
let lbl_000002d2;
showTextbox();
text(() => {
   marker; sound(`S1A023`); 
   Narr`"It's probably just mild barotrauma,
or decompression sickness."`;
   waitForClick; clearText; marker; sound(`S1A024`); appendText; 
   //??
   Unk`"It happens a lot to visitors..."`;
   waitForClick; clearText; marker; sound(`S1A025`); appendText; 
   //??
   Unk`"They just feel ill all of the sudden
and get carted in here..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`As she said this she slyly took the
cup from my hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I sank my head back into the fluffy
pillow.`;
   waitForClick; clearText; marker; sound(`S1A026`); appendText; 
   //??
   Unk`"It's a bit of a stretch coming down
here anyway."`;
   waitForClick; clearText; marker; sound(`S1A027`); appendText; 
   //??
   Unk`"People with no experience just jumping to 6 
atmospheres for long periods of time. Sheesh."`;
   waitForClick; clearText; marker; sound(`S1A028`); appendText; 
   //??
   Unk`"The air pressure in the earth's atmosphere is 
made for people to live comfortably."`;
   waitForClick; clearText; marker; sound(`S1A029`); appendText; 
   //??
   Unk`"Of course people are going to have bad 
reactions to breathing air this thick."`;
   waitForClick; clearText; marker; sound(`S1A030`); appendText; 
   //??
   Unk`"Air and first love - both should be light.
No doubt about that."`;
   waitForClick; clearText; marker; sound(`S1A031`); appendText; 
   //??
   Unk`"Coffee and your first TIME...
well those of course are better thick."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"...Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She touched my face with the palm of her hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The backs of her slender fingers stroked 
my cheek.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The smooth texture of her skin slipped down 
from my neck to above my chest, stopping 
there.`;
   waitForClick; clearText; marker; sound(`S1A032`); appendText; 
   //??
   Unk`"It's alright. You don't seem to have a fever."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She smiled at me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Somehow I felt all embarrassed. I pulled the
bedcover up to my eyes and hid my face.`;
   waitForClick; clearText; marker; sound(`S1A033`); appendText; 
   //??
   Unk`"Just rest like that for a while. Okay?"`;
   waitForClick; clearText; marker; sound(`S1A034`); appendText; 
   //??
   Unk`"I'll go see what is going on outside."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Outside?"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU01B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`S1A035`); appendText; 
   //??
   Unk`"Yes.... How should I put this?"`;
   waitForClick; clearText; marker; sound(`S1A036`); appendText; 
   //??
   Unk`"While you were asleep it seems that there 
was a bit of trouble..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"???"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_YU01A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`S1A037`); appendText; 
   //??
   Unk`"Well, I'll explain it later."`;
   waitForClick; clearText; marker; sound(`S1A038`); appendText; 
   //??
   Unk`"Anyway, for now just rest and don't worry 
about anything. Okay?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Seeing me nod, she walked away from the bed.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Uh, hey! Wait a second!"`;
   waitForClick; clearText; marker; sound(`S1A039`); appendText; 
   //??
   Unk`"What?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Just let me ask you one thing."`;
   waitForClick; clearText; marker; sound(`S1A040`); appendText; 
   //??
   Unk`"What might that be?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Why...am I here?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You just told me that this is the LeMU 
infirmary...right?"`;
   waitForClick; clearText; marker; sound(`S1A041`); appendText; 
   //??
   Unk`"You passed out all of the sudden at the 
kiosk on Zweite stock."`;
   waitForClick; clearText; marker; sound(`S1A042`); appendText; 
   //??
   Unk`"And then some guy and I...hauled you here..."`;
   waitForClick; clearText; marker; sound(`S1A043`); appendText; 
   //??
   Unk`"You don't remember what happened?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Kiosk...at the kiosk...`;
   waitForClick; clearText; marker; appendText; 
   Narr`In front of a big window...`;
   waitForClick; clearText; marker; appendText; 
   Narr`A sweet...a sweet smell...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Something covering my body...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The lemur mascot...`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
showTextbox();
text(() => {
   marker; sound(`S1A044`); appendText; 
   //??
   Unk`"It was you, you're the one that hit me"`;
   waitForSound; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `EV_YU01A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`That's right! I remember!`;
   waitForClick; clearText; marker; appendText; 
   Narr`And I was struck dizzy...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Like something being stolen away...I lost 
consciousness...and...`;
   waitForClick; clearText; marker; sound(`S1A045`); appendText; 
   //??
   Unk`"So? Do you remember?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Y...yes..."`;
   waitForClick; clearText; marker; sound(`S1A046`); appendText; 
   //??
   Unk`"Do you have any other questions?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I shook my head and answered.`;
   waitForClick; clearText; marker; sound(`S1A047`); appendText; 
   //??
   Unk`"Well be a good boy wait here, alright?"`;
   waitForClick; clearText; marker; sound(`S1A048`); appendText; 
   //??
   Unk`"I'll be right back."`;
   waitForClick; clearText; 
});
bgload({ name: `BG09A1`, transition: 20 });
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She patted my head gently and began 
walking for the door.`;
   waitForClick; clearText; marker; appendText; 
   Narr`While I turned my head to stare at her back...`;
   waitForClick; clearText; 
});
removeBG({ mode: WHITE, transition: 1 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`'My name's You...'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'My last name is Tanaka...'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'My real name is much longer, though.'`;
   waitForClick; clearText; marker; appendText; 
   Narr`'But, it's such a pain...just call me 'You.''`;
   waitForClick; clearText; marker; appendText; 
   Narr`I remembered her words.`;
   waitForClick; clearText; 
});
bgload({ name: `BG09A1`, transition: 10 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You turned at the door and looked back at me,
lifting her hand to wave and left the 
infirmary.`;
   waitForClick; clearText; 
});
hideTextbox();
delay({ interval: 60 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`All alone inside the room, it was quiet like
time had stopped.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know if the medicine had started to
work or not, but my headache was completely
gone.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As I stared at the ceiling I thought.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I thought about the events leading to my being
in that bed...`;
   waitForClick; clearText; marker; appendText; 
   Narr`....`;
   waitForClick; clearText; 
});
hideTextbox();
showDimOverlay();
hideTextbox();
NVL_Mode();
playBGM({ num: 16, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Before I passed out,`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I had been walking around LeMU with You.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`We had gone to a shop and were talking...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Then we rode an egg-shaped elevator up 
two floors.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Before I had met You, I had been 
in a small park.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I was on a bench in that park...`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I was...waiting for someone.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Who? Who was I waiting for?`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`
`;
   appendText; nextPage(00); 
   Narr`I didn't know.`;
   nextPage(01); waitForClick; 
   Narr`
`;
   appendText; 
   Narr`
`;
   appendText; 
   Narr`My memory was a fog and thinking about events 
after that my mind just seemed to cloud over.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I shook my head several times trying to clear 
it and concentrate.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Why was I here?`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Why had I come to LeMU?`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Did I come alone? Or was I with someone else?`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`What was I doing before I came to LeMU?`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`How had I arrived at this amusement park?`;
   waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`....................................`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It's no use..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I can't remember..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The thread of my memory was cut off right there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That time on the park bench enjoying ice 
cream...I couldn't get beyond that.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was like getting lost in a forest and 
going to turn back, only to discover that 
everything had gone dark...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt very strange.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It felt just like I was in the middle of 
a dream.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt like I had lost something, something 
very important.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I didn't know what that 'something' was.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And not being able to move forward made me 
feel that it was specifically because 
I had lost something important.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt an unpleasant sense of something 
lacking...`;
   waitForClick; clearText; marker; appendText; 
   Narr`And this sense of something not quite right 
irritated me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took my right hand out from under the blanket
and stared dreamily at the palm of my hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The countless wrinkles etched there...
intertwining, reaching out like the branches 
of a tree in complicated patterns...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The pinkish skin...and buried deeper the 
slightly blue veins...`;
   waitForClick; clearText; marker; appendText; 
   Narr`And...five fingers...`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Had my hand had always had this strange 
shape?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`Bizarre thoughts hit me from nowhere.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No, my right palm was no different than it 
had ever been.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Yet, for some reason I felt that I had to 
doubt even that most natural of facts.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Maybe, just possibly, until a few hours ago
I might have had six fingers...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Or seven, or maybe even eight...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt like something was wrong.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Could I have been feeling this way because...
I lost 'something special?'`;
   waitForClick; clearText; marker; appendText; 
   Narr`I opened and closed and opened and closed my 
hand...just repeating that meaningless, simple 
exercise.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wandered in the forest.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Searching for that one lost finger...`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 1 });
stopBGM();
delay({ interval: 60 });
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG09A1`, transition: 20 });
clock(`15:42`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The door to the infirmary opened and You 
returned.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You dashed into the room and ran toward me 
as if she were going to bowl me over...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A049`); appendText; 
   You`"What are you doing? This is no time to be 
sleeping!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`She shouted at me suddenly.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"???"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Completely clueless, I simply laid 
there, stunned.`;
   waitForClick; clearText; marker; sound(`S1A050`); appendText; 
   You`"Get up quickly!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You peeled away the blanket and dragged me 
off of the bed.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What...what's the matter?"`;
   waitForClick; clearText; marker; sound(`S1A051`); appendText; 
   You`"I dunno!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A052`); appendText; 
   You`"I dunno, but...anyway, we've gotta escape 
out of here!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You had a panicked expression.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The relaxed look that had been on her face 
just a while ago had vanished completely.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Escape...to where?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A053`); appendText; 
   You`"There's only one place!"`;
   waitForClick; clearText; marker; sound(`S1A054`); appendText; 
   You`"The floating island on the ocean!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Why?"`;
   waitForClick; clearText; marker; sound(`S1A055`); appendText; 
   You`"Because I say! Don't ask questions!"`;
   waitForClick; clearText; marker; sound(`S1A056`); appendText; 
   You`"We're escaping because we have to escape!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`There was something urgent and powerful in 
You's words. `;
   waitForClick; clearText; marker; appendText; 
   Narr`You dragged me along...`;
   waitForClick; clearText; marker; appendText; 
   Narr`From her powerful grip I felt a sharp sense of 
crisis.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I hurriedly slipped on my sneakers and fled 
out of the room with her.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `BG25A3`, transition: 26 });
playBGM({ num: 15, volume: 97 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The instant we emerged into the sprawling
corridor, my feet stopped.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I sucked in my breath, my body froze and I 
just stared at the light spreading before me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was something missing.`;
   waitForClick; clearText; marker; appendText; 
   Narr`People...sound...warmth...`;
   waitForClick; clearText; marker; appendText; 
   Kid`"No way...this can't be..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The words I muttered were devoured by the 
eerie silence.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Looking back and forth in the corridor...
even in the furthest direction, there was 
no sign of people.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just the man-made walls on both sides... `;
   waitForClick; clearText; marker; appendText; 
   Narr`Unnatural light, whiter than white, shone 
from the ceiling and gave off a cold light.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Wh-why..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Why...isn't anyone here...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A057`); appendText; 
   You`"You get it now?"`;
   waitForClick; clearText; marker; sound(`S1A058`); appendText; 
   You`"That's why we have to escape."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Everyone...where could everyone be...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A059`); appendText; 
   You`"Do you think they're playing hide-and-seek?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A060`); appendText; 
   You`"Anyway, there is no time to think about 
it now."`;
   waitForClick; clearText; marker; sound(`S1A061`); appendText; 
   You`"We need to get out of here ASAP, or..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Saying that, You again tugged my arm.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Hunched over and on the verge of tripping 
I let You lead me through the wide corridors
 as we ran.`;
   waitForClick; clearText; 
});
bgload({ name: `BG26A3R`, transition: 20 });
playSFX({ name: `SE01_04`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Our footsteps were the only sound echoing 
in the quiet complex.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The more we ran, the more out of breath 
I became. My heart was pounding.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Really everything just felt like a dream.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A nightmare in which some unknown monster was 
chasing us everywhere...`;
   waitForClick; clearText; marker; appendText; 
   Narr`With no clue as to the identity of the 
monster, nor why we needed to escape.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Hair-raising fear rose within me, and I was 
powerless to do anything. I simply cowered.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In a world devoid of people...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Among faded colors...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just You's palms grasped my arm...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Only the certainty of her touch - that one
point of contact - allowed me to retain any 
connection with reality.`;
   waitForClick; clearText; 
});
bgload({ name: `BG22A3`, transition: 20 });
stopSFX()
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Finally, we arrived in front of the elevator.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You rushed to the front of the door and pushed 
the up button.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU11BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The button was unlit.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU14BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A062`); appendText; 
   You`"Oh, no way! You've got to be kidding!?"`;
   waitForClick; clearText; marker; sound(`S1A063`); appendText; 
   You`"Why is this thing stopped?"`;
   waitForClick; clearText; 
});
playSFX({ name: `SE04_00`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You struck the button repeatedly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But nothing happened. The light stayed off.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was no sign that the floor display above
the elevator doors was functioning either.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey! Aren't there any emergency stairs or 
anything?"`;
   waitForClick; clearText; 
});
hideTextbox();
fgload({ id: 1, name: `YU17BDM`, x: 320, useAnim: true });
delay({ interval: 30 });
fgload({ id: 1, name: `YU13BDM`, x: 320, useAnim: true });
delay({ interval: 60 });
fgload({ id: 1, name: `YU05BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You looked back and shifted her eyes around 
as if she were thinking...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A064`); appendText; 
   You`"Follow me!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Saying only that, she dashed off.`;
   waitForClick; clearText; 
});
bgload({ name: `BG25A3`, transition: 20 });
playSFX({ name: `SE01_04`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`—Straight down that long, 
stretching corridor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You turned her head to the left and right 
looking for something.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked like she soon found what she was 
looking for.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And she headed toward it single-mindedly.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A ladder...next to it was written in straight 
red letters 'Emergency exit' with an 
arrow pointing upward.`;
   waitForClick; clearText; marker; appendText; 
   Narr`At the other end of the ladder was the ceiling 
and a sturdy looking door, with a round-shaped 
handle attached to it.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Are there emergency stairs on the other side?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Without answering, You started climbing 
the ladder.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE10_16`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`She turned the handle and opened the door.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_07`, a1: 0, volume: 100 });
fgload({ id: 1, name: `YU04BDM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A065`); appendText; 
   You`"Now hurry!"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeFG({ id: 1, useAnim: false });
bgload({ name: `BG28A3R`, transition: 26 });
playSFX({ name: `SE01_06`, a1: 0, volume: 95 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   marker; sound(`S1A066`); appendText; 
   You`"This is an emergency escape corridor."`;
   waitForClick; clearText; marker; sound(`S1A067`); appendText; 
   You`"There are emergency stairs that 
run along it." `;
   waitForClick; clearText; marker; appendText; 
   Narr`You told me this quickly while we ran.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The corridor stretched in a gentle arc so 
that the far end was not visible.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The scenery was repetitive and I began to have 
delusions that I was running in place.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Where in the world am I right now?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`(How far do I have to run?)`;
   waitForClick; clearText; marker; appendText; 
   Narr`I just had to trust in You and chase after
her back.`;
   waitForClick; clearText; 
});
bgload({ name: `BG27A3`, transition: 20 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Suddenly, You turned right.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Inertia kept me going forward. Afraid I would 
miss the turn I grabbed the corner with my 
hand, yanking myself around and chasing after 
You again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The route had become straight.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Immediately to the left, a green colored sign 
for emergency stairs was lit up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Below the light was a closed door...`;
   waitForClick; clearText; marker; appendText; 
   Narr`You jumped toward the door's handle.`;
   waitForClick; clearText; 
});
stopSFX()
showTextbox();
text(() => {
   marker; sound(`S1A068`); appendText; 
   You`"Hurrfff...hurrffff..."`;
   waitForClick; clearText; marker; sound(`S1A069`); appendText; 
   You`"This is stiff.... This is so..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You was desperately trying to turn the handle...`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It won't open?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A070`); appendText; 
   You`"It'll open! It'll open for sure! I'll make 
it open!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A071`); appendText; 
   You`"Well, don't just stand there. Get over here 
and help me!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Spurred by her words, I firmly grabbed on to 
the handle.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tried with all my might to turn it in the
direction of the arrow that said 'open.' `;
   waitForClick; clearText; marker; appendText; 
   Kid`"Damn...what's with this..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It...won't budge...an inch..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was stuck fast, almost as if it had been 
welded shut. It didn't look like it would move 
to the right or left.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A072`); appendText; 
   You`"We'll try to turn it when I say 'Ready, go.'"`;
   waitForClick; clearText; marker; sound(`S1A073`); appendText; 
   You`"Okay? Here we go."`;
   waitForClick; clearText; marker; sound(`S1A074`); appendText; 
   You`"Ready, go!"`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`With that I threw my complete weight onto the 
handle.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Ummmpphh.... Damn..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"O-P-E-NNNNNNNN!!!"`;
   waitForClick; clearText; 
});
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`—Just then it happened.`;
   waitForClick; clearText; 
});
hideTextbox();
playSFX({ name: `SE09_00L`, a1: 0, volume: 100 });
eff_4f = 0;
eff_3b = 1;
eff_3c = VAR_c1_0_6;
eff_3d = 1;
eff_3e = 2;
eff_3f = VAR_c2_0_6;
eff_40 = 2;
openShakeScreenAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`A sound arose up as if from inside the earth, 
echoing heavily from somewhere.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You and I relaxed our grips and looked at 
each other.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A075`); appendText; 
   You`"What...? What was that sound...?"`;
   waitForClick; clearText; 
});
eff_41 = 9;
eff_42 = 6;
eff_50 = 0;
showDimInAndOutAnim();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The walls shook.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A small vibration shook the handle we 
had grabbed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The lights on the ceiling...flashed 
irregularly...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The metal mesh floor was clanging against 
itself.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"An...earthquake...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A076`); appendText; 
   You`"It couldn't be..."`;
   waitForClick; clearText; marker; sound(`S1A077`); appendText; 
   You`"We're..."`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; sound(`S1A078`); appendText; 
   You`"We're..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A079`); appendText; 
   You`"In the middle of the ocean, after all..."`;
   waitForClick; clearText; 
});
hideTextbox();
eff_4f = 0;
eff_3b = 1;
eff_3c = VAR_c3_0_6;
eff_3d = 2;
eff_3e = 2;
eff_3f = VAR_c6_0_6;
eff_40 = 6;
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The vibration gradually increased in 
intensity.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The squeaking sound of steel against steel 
shocked our ears.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You and I held our breath, waiting still.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We tried to focus, sharpening our senses, 
our eyes wandering the void.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A low growling sound...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Like the groan of a monster...`;
   waitForClick; clearText; marker; appendText; 
   Narr`A monster...approaching...`;
   waitForClick; clearText; marker; appendText; 
   Narr`A voice filled hate and rage turned to a 
howling roar, sending shivers up my spine.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Where is that coming from?!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A080`); appendText; 
   You`"Huh?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Where? Where is it coming from?"`;
   waitForClick; clearText; marker; sound(`S1A081`); appendText; 
   You`"What?!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You's voice approached a scream.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her face lost all color...and her lips 
went dry...`;
   waitForClick; clearText; marker; appendText; 
   Narr`The eyes behind her silky, swaying bangs 
looked as if they were about to cry.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(...Silky...swaying...bangs?)`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Wind..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"It's wind..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Muttering this I looked in the direction of 
the wind.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Down the extremely long corridor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Something appeared pushing and vying 
for space.`;
   waitForClick; clearText; 
});
hideTextbox();
eff_4f = 0;
eff_3b = 1;
eff_3c = VAR_c7_0_6;
eff_3d = 4;
eff_3e = 2;
eff_3f = VAR_ca_0_6;
eff_40 = 10;
showTextbox();
text(() => {
   marker; sound(`S1A082`); appendText; 
   You`"No way..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A083`); appendText; 
   You`"You're kidding..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A084`); appendText; 
   You`"It couldn't be..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04BDL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A085`); appendText; 
   You`"Water?!"`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`A monster came crashing toward us at 
a terrifying speed, mixed in a roiled 
spray of water...`;
   waitForClick; clearText; 
});
closeDimInAndOutAndFilterAnim();
closeShakeScreenAnim();
stopSFX()
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
unSkippableDelay(3);
unSkippableDelay(1);
playMovie(`MOV02A`);
unSkippableDelay(1);
unSkippableDelay(1);
monoColorOverlay({ interval: 12, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
playBGM({ num: 10, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`There was no doubt!`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a rushing behemoth of water...`;
   waitForClick; clearText; marker; appendText; 
   Narr`A massive froth of waves!`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Ah!!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was not the time to be shouting.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You and I started sprinting desperately.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG28A3L`, transition: 26 });
eff_4f = 0;
eff_3b = 1;
eff_3c = VAR_c3_0_6;
eff_3d = 2;
eff_3e = 2;
eff_3f = VAR_c6_0_6;
eff_40 = 6;
openShakeScreenAnim();
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We turned left at the corner and ran.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And ran and ran.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The voice of the monster was right 
on our heels.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But we couldn't look back.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If we looked back, we felt like 
we would be swallowed up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Something beyond fear, or terror had made 
our minds go completely blank.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We couldn't even think.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We could only run desperately for our lives.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My shoulder bumped against the wall of 
the narrow corridor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It looked like my foot would get caught up 
in the bent metal flooring.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Avoiding the pipes that hung down, we leaped 
over the raised entrance of the watertight 
door and ran.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We just ran on and on.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(This has got to be a dream...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`For an instant, that thought cut across my mind.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In a world without people...`;
   waitForClick; clearText; marker; appendText; 
   Narr`And faded colors...`;
   waitForClick; clearText; marker; appendText; 
   Narr`A drooling monster was reaching its 
bluish-white arms out toward my neck.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
playSFX({ name: `SE02_06`, a1: 0, volume: 100 });
bgload({ name: `BG25B3`, transition: 26 });
closeShakeScreenAnim();
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We were spit out with the mass of water into a 
sprawling room.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We were turned head over heel in the 
violent water.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Several times, maybe several dozen times, 
over and over again...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Until finally my body stopped moving.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Ouch...owwwwooouch..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I peeled my body from the soaked floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Water was still pouring in from the far 
side of the open emergency entrance.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Water was flowing down like a waterfall and 
spreading smoothly toward the far corridor as 
if it were crawling across the floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(That's right! What about You!?)`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Just as I thought that and looked back, You 
was standing up.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You okay?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I shook the soaked You's shoulders and 
looked into her eyes.`;
   waitForClick; clearText; marker; appendText; 
   Narr`They were empty...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Here purplish-blue lips were quivering.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You was completely dazed.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You! You! Hang on!"`;
   waitForClick; clearText; marker; appendText; 
   You`"........................."`;
   waitForClick; clearText; marker; appendText; 
   Narr`The level of water had continued to rise 
during this short time.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Ah! What should I do? What should I..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`—Just then it happened!`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_03`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The watertight doors at the four sides of 
the room began to close at once.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(The doors are closing...)`;
   waitForClick; clearText; marker; appendText; 
   Narr`Ever so slowly, letting off a dull sound...`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You!! You!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tried shouting, and even shaking her harder, 
but there was no response.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Rather, You's body went limp and she collapsed 
to the floor.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey! Quit goofing around! Come on!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I took You's arm and put it over my shoulder, 
lifting her up.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I started walking toward the nearest 
watertight door.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You was heavy like a stone.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Water pooled around both my legs and 
I couldn't move forward as fast as I wanted.`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_03`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Gradually a steel partition slid 
down from above.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Another one came up from below, pushing 
away water as it moved.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The stopped up water swirled around.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As the width between the doors narrowed, 
the water level increased.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Come on! Make it in time! Please just make in 
time...!)`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sadly, the door didn't stop moving.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was only a small opening left for us 
to escape.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Whoooaaaaa!!!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"There's no way I'm going to die here!!!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Giving a shout, I ran, pushing the water out
 of the way.`;
   waitForClick; clearText; marker; appendText; 
   Narr`You's slumping body weighed heavily on 
my shoulder.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But I couldn't let go of her arm.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I pulled together all my power.`;
   waitForClick; clearText; marker; appendText; 
   Narr`(Almost there...!)`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_03`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`(Almost...right there...!)`;
   waitForClick; clearText; marker; appendText; 
   Narr`—Thwump!`;
   waitForClick; clearText; marker; appendText; 
   Narr`—With one hand I had grabbed hold of the 
edge of the `;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 6, color: WHITE });
stopBGM();
playSFX({ name: `SE00_04`, a1: 0, volume: 100 });
bgload({ name: `BG26B1L`, transition: 26 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Just barely.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Just a few seconds after I had squeezed our 
bodies through that narrow gap, the watertight 
door closed completely.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We placed our backs against the closed door 
and collapsed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was almost no sense of relief.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Both of my legs were shaking, and my heart was 
beating like it would explode.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We spent a few moments there in a stupor.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `BG26A1L`, transition: 26 });
playBGM({ num: 3, volume: 100 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
clock(`16:15`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The next thing I knew, the seawater had mostly 
disappeared from the floor.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That's not to say that it was completely dry.
It was still wet.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And my body and You's body...`;
   waitForClick; clearText; marker; sound(`S1A086`); appendText; 
   You`"Ah..ah...achhhooo!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`...We were still soaked.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Are you alright?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A087`); appendText; 
   You`"Huh? What?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You were really out of it until just 
a second ago..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A088`); appendText; 
   You`"Who was?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You were."`;
   waitForClick; clearText; marker; sound(`S1A089`); appendText; 
   You`"Me? I was?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You stood up and took her wet hair in hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Wiping away the water droplets around her eyes 
with the palm of her hand...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A090`); appendText; 
   You`"Oh! That's right!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A091`); appendText; 
   You`"The water carried us away!"`;
   waitForClick; clearText; marker; sound(`S1A092`); appendText; 
   You`"Carried! And carried! And carried us away!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A093`); appendText; 
   You`"...And...and what happened?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"We got swept into the next corridor over."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"And then all of a sudden the watertight doors 
started to close..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But You, you were all spacey..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"And to make things worse, you fainted..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A094`); appendText; 
   You`"So how did we get out?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I got us out!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A095`); appendText; 
   You`"You?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yup..."`;
   waitForClick; clearText; marker; sound(`S1A096`); appendText; 
   You`"Really?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What? You don't believe me?"`;
   waitForClick; clearText; marker; sound(`S1A097`); appendText; 
   You`"But..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A098`); appendText; 
   You`"You...well, you seem more like the type that 
needs help rather than dishes help out."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What? What's that supposed to mean?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A099`); appendText; 
   You`"Oh, it's a joke. I'm just kidding..."`;
   waitForClick; clearText; marker; sound(`S1A100`); appendText; 
   You`"If you really did save us, I suppose 
I should thank you."`;
   waitForClick; clearText; marker; sound(`S1A101`); appendText; 
   You`"Thank you."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You bowed her head slightly.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Do you really mean it?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A102`); appendText; 
   You`"Of course...I guess."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You guess?"`;
   waitForClick; clearText; marker; sound(`S1A103`); appendText; 
   You`"I said I was joking."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A104`); appendText; 
   You`"You take everything so seriously.... 
You're just an innocent young'un!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   You`"........."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh, whatever..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Well, I suppose I owed you one anyway..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A105`); appendText; 
   You`"Owe me?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"When I collapsed at the shop, you helped me 
right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So now we're even..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`When I said that, You's face lit up in a smile.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Anyway, enough of that. Let's hurry up and 
find an exit!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A106`); appendText; 
   You`"Yeah..."`;
   waitForClick; clearText; marker; sound(`S1A107`); appendText; 
   You`"You never know when there might be another 
flooding..."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You was checking the ceiling and walls as she 
started walking.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I followed along behind her.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
bgload({ name: `BG02A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`16:20`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`We cut across the wide room heading for the
exit.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was a big empty, mechanical 
merry-go-round.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Without music or the voices of 
children playing...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Only its bright lights glowed in a lonely 
sort of way.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A108`); appendText; 
   You`"Hey."`;
   waitForClick; clearText; marker; sound(`S1A109`); appendText; 
   You`"That reminds me, I haven't even asked 
your name yet?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"...Huh?"`;
   waitForClick; clearText; marker; sound(`S1A110`); appendText; 
   You`"Name. Your name."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Oh...yeah..that..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Um...I'm..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"...My...name is..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"...name...is..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A111`); appendText; 
   You`"And?"`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 13, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I...I didn't know.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know...my name...`;
   waitForClick; clearText; marker; appendText; 
   Narr`My name...`;
   waitForClick; clearText; marker; appendText; 
   Narr`There's no way! It couldn't be!`;
   waitForClick; clearText; marker; appendText; 
   Narr`(I should know it.)`;
   waitForClick; clearText; marker; appendText; 
   Narr`It's my name! My very own name!`;
   waitForClick; clearText; marker; appendText; 
   Narr`Name...name...name...name...`;
   waitForClick; clearText; marker; appendText; 
   Narr`—Then all of the sudden a shock shot 
through my whole body.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
playSFX({ name: `SE10_11`, a1: 0, volume: 100 });
bgload({ name: `IMG04A`, transition: 26 });
eff_41 = 21;
eff_42 = 4;
eff_50 = 0;
showDimInAndOutAnim();
setMonoColorOverlayFadeOutDuration(18);
fadeOutMonoColorOverlay();
unSkippableDelay(5);
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Oooh...arggh..."`;
   waitForClick; clearText; marker; sound(`S1A112`); appendText; 
   You`"What's the matter?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`My head hurt...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed like it would split right open...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I held my head in both arms and crumpled 
forward.`;
   waitForClick; clearText; marker; sound(`S1A113`); appendText; 
   You`"Are you alright?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`Grinding my teeth, I desperately tried to 
endure the pain.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Darkness blanketed my eyes...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I couldn't see anything. I couldn't hear 
anything.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The darkness invaded my brain and glommed 
together.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was a glob that would devour my brain...`;
   waitForClick; clearText; marker; appendText; 
   Narr`And dissolve it...into...mush...`;
   waitForClick; clearText; marker; sound(`S1A114`); appendText; 
   You`"Hey! Hang in there! Hey!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't know...my name...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Who could I...`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
closeDimInAndOutAndFilterAnim();
stopBGM();
removeBG({ mode: BLACK, transition: 62 });
hideTextbox();
NVL_Mode();
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`



`;
   appendText; delay(0); 
   Narr`                `;
   nextPage(00); 
   Narr`possibly be...?`;
   nextPage(01); delay(60); nextPage(04); 
});
hideTextbox();
hideTextbox();
delay({ interval: 120 });
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG09A1`, transition: 26 });
hideTextbox();
AVL_Mode();
setMonoColorOverlayFadeOutDuration(46);
fadeOutMonoColorOverlay();
unSkippableDelay(33);
clock(`16:53`);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`The next thing I knew, I was on a bed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The ceiling was so white it was slightly 
blinding...`;
   waitForClick; clearText; marker; appendText; 
   Narr`It smelled of disinfectant...`;
   waitForClick; clearText; 
});
hideTextbox();
playBGM({ num: 2, volume: 100 });
fgload({ id: 1, name: `YU03BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A115`); appendText; 
   You`"Are you awake now?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`A shadow passed above me on the bed.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"You..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You looked at me as if she were worried.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"This is..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A116`); appendText; 
   You`"Back to the beginning...thanks to you."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"The beginning...?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"The infirmary, huh..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A117`); appendText; 
   You`"Hey, next time you decide to go and keel 
over, can you do it somewhere a little 
closer to this room?"`;
   waitForClick; clearText; marker; sound(`S1A118`); appendText; 
   You`"Because it was really a pain hauling you 
piggyback all the way here..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"S...sorry..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A119`); appendText; 
   You`"Oh, it's alright. You don't have to 
apologize..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A120`); appendText; 
   You`"By the way..."`;
   waitForClick; clearText; marker; sound(`S1A121`); appendText; 
   You`"Did you remember? Your name."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Name...`;
   waitForClick; clearText; 
});
playBGM({ num: 16, volume: 100 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`That's right...My name...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A122`); appendText; 
   You`"Oh! Hold on a sec!"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A123`); appendText; 
   You`"You don't have to try to force yourself to 
remember!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"..."`;
   waitForClick; clearText; marker; sound(`S1A124`); appendText; 
   You`"I don't want you getting like you did 
before...alright?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`You said it very carefully.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A125`); appendText; 
   You`"I'm gonna ask you a couple of questions..."`;
   waitForClick; clearText; marker; sound(`S1A126`); appendText; 
   You`"So just calm down...I want you to relax and 
answer them."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A127`); appendText; 
   You`"Alright?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"S-sure..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A128`); appendText; 
   You`"First, do you know...today's date?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Today is..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"...the first..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"May first, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A129`); appendText; 
   You`"You remember the date..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A130`); appendText; 
   You`"So how about your age?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Age...?"`;
   waitForClick; clearText; marker; sound(`S1A131`); appendText; 
   You`"Your birthday will do...either way."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I tried hard to pull together the threads of my 
memory.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My age...my birthday...`;
   waitForClick; clearText; marker; appendText; 
   Narr`When I started to think about it, my temples 
began to throb.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A132`); appendText; 
   You`"Hey, no straining yourself!"`;
   waitForClick; clearText; marker; sound(`S1A133`); appendText; 
   You`"If you can't remember, then you can't 
remember. Just say so."`;
   waitForClick; clearText; marker; appendText; 
   Narr`But that didn't mean I could just stop 
thinking about it.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I endured the headache as I felt like 
I wandered lost through a forest.`;
   waitForClick; clearText; marker; appendText; 
   Narr`There had to be an exit hidden somewhere.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I just didn't know where...`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A134`); appendText; 
   You`"Okay, I got it."`;
   waitForClick; clearText; marker; sound(`S1A135`); appendText; 
   You`"So you don't remember your name, age or 
birthday, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A136`); appendText; 
   You`"How about your address or telephone number?"`;
   waitForClick; clearText; marker; sound(`S1A137`); appendText; 
   You`"If not those, then how about your family, 
friends...or anything..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A138`); appendText; 
   You`"So you can't remember?"`;
   waitForClick; clearText; 
});
hideTextbox();
showDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`It was just like You said.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I didn't have any memories of anything.`;
   waitForClick; clearText; marker; appendText; 
   Narr`A sense of something not being right gnawed 
at my mind.`;
   waitForClick; clearText; marker; appendText; 
   Narr`No, it was something closer to a sense of loss.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I felt that I had lost the bulk of my existence.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Like someone had stolen 'Me' away. And the 'Me' 
that was left was just an empty shell.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The 'Me' that was here...who knew if it was 
even the real me?`;
   waitForClick; clearText; marker; appendText; 
   Narr`The instant that thought went through my mind, 
I was frozen by an icy wave of unease.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Scared, isolated, lonely,...`;
   waitForClick; clearText; 
});
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"You..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I grabbed firmly on to You's hand.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU06BWL`, x: 320, useAnim: true });
fgload({ id: 1, name: `YU02BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Her warm palm...`;
   waitForClick; clearText; marker; appendText; 
   Narr`That warmth was the only thing saving me.`;
   waitForClick; clearText; marker; sound(`S1A139`); appendText; 
   You`"It's alright now."`;
   waitForClick; clearText; marker; sound(`S1A140`); appendText; 
   You`"What are you a baby? Stop with that sad face."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She shot me a smile as she squeezed my 
hand back.`;
   waitForClick; clearText; marker; sound(`S1A141`); appendText; 
   You`"I don't think that amnesia is all that 
uncommon."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Amnesia...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A142`); appendText; 
   You`"You don't have any memory, so that's memory 
loss or amnesia, right? Of course it is."`;
   waitForClick; clearText; marker; sound(`S1A143`); appendText; 
   You`"I wonder what caused it..."`;
   waitForClick; clearText; marker; sound(`S1A144`); appendText; 
   You`"The air pressure change...or maybe you hit 
your head somewhere..."`;
   waitForClick; clearText; marker; sound(`S1A145`); appendText; 
   You`"Or some severe mental shock maybe."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A146`); appendText; 
   You`"Like riding a crazy ride and maybe you 
panicked, or something."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A147`); appendText; 
   You`"But don't worry."`;
   waitForClick; clearText; marker; sound(`S1A148`); appendText; 
   You`"It's probably just temporary. It'll 
come back "`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Think so?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A149`); appendText; 
   You`"For sure!"`;
   waitForClick; clearText; marker; sound(`S1A150`); appendText; 
   You`"Of course if you were in a major accident 
and had severe trauma to the brain, that 
would be a whole different thing."`;
   waitForClick; clearText; marker; sound(`S1A151`); appendText; 
   You`"But that doesn't seem to be the case..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You put her hand on my hair and gave me a 
smile so bright I almost needed sunglasses.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That smile flooded into my heart, wiping away 
the remains of the unease that was swirling 
there.`;
   waitForClick; clearText; 
});
hideTextbox();
stopBGM();
fgload({ id: 1, name: `YU01BWL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A152`); appendText; 
   You`"So, do you want to get going?"`;
   waitForClick; clearText; marker; sound(`S1A153`); appendText; 
   You`"I could sing you a lullaby and tuck you in, 
but..."`;
   waitForClick; clearText; marker; sound(`S1A154`); appendText; 
   You`"Unfortunately, we don't have time to relax."`;
   waitForClick; clearText; marker; sound(`S1A155`); appendText; 
   You`"You understand, right?"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I nodded and got off of the bed.`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You started walking for the door.`;
   waitForClick; clearText; marker; appendText; 
   Narr`My eyes stopped on the bluish ribbon on 
You's back.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The ribbon seemed to have taken on water and 
glittered brightly, like the wings of 
a newborn fairy.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `BG29A1`, transition: 26 });
delay({ interval: 90 });
playSFX({ name: `SE00_15`, a1: 1, volume: 100 });
waitForSFX();
fgload({ id: 1, name: `YU07BWM`, x: 320, useAnim: false });
playBGM({ num: 3, volume: 100 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
clock(`17:1`);
showTextbox();
text(() => {
   marker; sound(`S1A156`); appendText; 
   You`"It's no good...it doesn't seem to open..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`You said that after trying to move the door 
with her weight several times.`;
   waitForClick; clearText; marker; appendText; 
   Narr`These were the emergency stairs.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Or more accurately, it was the passage on the 
way there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The emergency stairs wound spiral-like around 
a fat pipe.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If we followed these stairs, they would take 
us to the floating island...at least in theory.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But now right in front of us stood a thick 
steel wall.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The wall had a small watertight door and if we 
couldn't squeeze through that, then we 
couldn't make our way any higher.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"This isn't...the floating island yet, 
is it...?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A157`); appendText; 
   You`"It's pretty obvious, isn't it?"`;
   waitForClick; clearText; marker; sound(`S1A158`); appendText; 
   You`"Not even. I mean we haven't even hit Erste 
boden, so we've still got a long way to go..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Erste boden, was that the basement floor one?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`You nodded...`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What does that mean in terms of depth? 
How deep is it?"`;
   waitForClick; clearText; marker; sound(`S1A159`); appendText; 
   You`"Let's see...Zweite stock is 102 feet deep, 
so..."`;
   waitForClick; clearText; marker; sound(`S1A160`); appendText; 
   You`"Around 90 feet, give or take I guess..."`;
   waitForClick; clearText; marker; sound(`S1A161`); appendText; 
   You`"We've only climbed around 12 or 15 feet on 
these stairs."`;
   waitForClick; clearText; marker; appendText; 
   Narr`90 feet deep...`;
   waitForClick; clearText; marker; appendText; 
   Narr`90 feet sounded so close, but...`;
   waitForClick; clearText; marker; appendText; 
   Narr`But, in any event, if the door 
didn't open up, then that was it.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hey. I wonder why it won't open."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A162`); appendText; 
   You`"Who knows...?"`;
   waitForClick; clearText; marker; sound(`S1A163`); appendText; 
   You`"Maybe there is a secret spell or something."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Spell...you mean like 'Open sesame?' 
That kinda spell?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A164`); appendText; 
   You`"There you go taking me seriously..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Well what then?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A165`); appendText; 
   You`"You really wanna know?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A166`); appendText; 
   You`"Maybe you'd better not ask."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"...Huh?"`;
   waitForClick; clearText; marker; sound(`S1A167`); appendText; 
   You`"So what're you gonna do? 
Do you wanna hear it? Or not? Which is it?"`;
   waitForClick; 
});
choice(
   `Ask`
   `Don't ask`
);
switch (choice) {
   case 0: goto(lbl_0000122a);
   case 1: goto(lbl_00001255);
}
let lbl_0000122a;
g_b6 += 1;
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"Ask"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU02BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A168`); appendText; 
   You`"Alright then. I'll tell you."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"..."`;
   waitForClick; clearText; 
});
goto(lbl_000012e1);
let lbl_00001255;
showTextbox();
text(() => {
   marker; appendText; 
   Kid`"I don't want to know."`;
   waitForClick; clearText; marker; sound(`S1A169`); appendText; 
   You`"Huh?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU04BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A170`); appendText; 
   You`"Why not? Ask away!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"But you said that I'd better not ask, right?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU08BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A171`); appendText; 
   You`"You are so naive."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"What's wrong with being naive?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A172`); appendText; 
   You`"Nothing's wrong with it...but you miss 
out...somehow."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A173`); appendText; 
   You`"Whatever. Anyway I'll tell ya."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I said, I don't want to hear."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `YU10BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A174`); appendText; 
   You`"Be quiet! Shut up and listen already!"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"........."`;
   waitForClick; clearText; 
});
removeFG({ id: 1, useAnim: true });
goto(lbl_000012e1);
let lbl_000012e1;
fgload({ id: 1, name: `YU01BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A175`); appendText; 
   You`"You just were talking about how the 
watertight doors started closing 
all of the sudden, right?"`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Yeah."`;
   waitForClick; clearText; marker; sound(`S1A176`); appendText; 
   You`"That means that the doors closed 
automatically..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Closed automatically?"`;
   waitForClick; clearText; marker; sound(`S1A177`); appendText; 
   You`"LeMMIH detected flooding and automatically 
shut the doors in the areas that were in 
danger."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Uh...what's 'LeMMIH?'"`;
   waitForClick; clearText; marker; sound(`S1A178`); appendText; 
   You`"That's what we call the main computer that 
supervises and manages all of the electronic 
systems in LeMU."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"Hmmmm."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"...So what?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A179`); appendText; 
   You`"So what? So probably this..."`;
   waitForClick; clearText; 
});
playSFX({ name: `SE00_14`, a1: 0, volume: 90 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Clang, clang. You knocked on the steel door 
with her lightly closed fist.`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU01BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A180`); appendText; 
   You`"This...was probably closed by 'LeMMIH' 
as well."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"I see..."`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So in other words, the other side of 
this door is flooded with water."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU03BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A181`); appendText; 
   You`"Probably."`;
   waitForClick; clearText; marker; appendText; 
   Narr`She had been right. It really wasn't something 
I had wanted to hear.`;
   waitForClick; clearText; marker; appendText; 
   Narr`If the door were simply locked, all we had to 
do was find a way to open it and we could 
climb up to freedom.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But if the other side was full of seawater, 
then...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Thinking beyond that was no fun.`;
   waitForClick; clearText; marker; appendText; 
   Kid`"So what do we do now?"`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU05BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A182`); appendText; 
   You`"So we check out the other emergency stairs..."`;
   waitForClick; clearText; 
});
fgload({ id: 1, name: `YU07BWM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   marker; sound(`S1A183`); appendText; 
   You`"That's all we can do, right?" `;
   waitForClick; clearText; marker; appendText; 
   Narr`You said it with a sigh and started heading 
down the stairs.`;
   waitForClick; clearText; 
});
g_b3 = 0;
jump(`S_1A2`);
