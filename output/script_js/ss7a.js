setDialogBoxColor(BLUE);
setSceneTitle({ index: 101 });
varop(`(28 0a a4) b0 := (00) 5`);
varop(`(28 0a a4) b1 := (00) 7`);
varop(`(28 0a a4) b2 := (00) 0`);
chapterCutin({ name: `00000000` });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Finally the roaring sounds stopped and the 
flow of the water slowed.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The squeaking and screeching of metal on metal 
also died down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It seemed that the flooding had stopped.`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `EV_SA12A`, transition: 26 });
playBGM({ num: 22, volume: 100 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   marker; appendText; 
   Narr`There was still a little air left in the 
ceiling of the infirmary.`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was kind of like a cup flipped upside down 
filled mostly with water.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara and I were floating there.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"It looks like things have quieted down 
a bit..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I looked at Sara.`;
   waitForClick; clearText; marker; appendText; 
   Narr`In the darkness, the only thing throwing off a 
gentle aura of light was Sara.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Sara, you alright?"`;
   waitForClick; clearText; marker; sound(`S7A000`); appendText; 
   //Sara
   Sara`"Yeah. I'm okay...just...a little cold."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara forced a smile for me.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Sara...why did you come back?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"All you had to do was go a little more and 
you would have been safe..."`;
   waitForClick; clearText; marker; sound(`S7A001`); appendText; 
   //Sara
   Sara`"Uh...I..."`;
   waitForClick; clearText; marker; sound(`S7A002`); appendText; 
   //Sara
   Sara`"Do you promise you won't get mad?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Mad? Why would I get mad?"`;
   waitForClick; clearText; marker; sound(`S7A003`); appendText; 
   //Sara
   Sara`"Well..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Just tell me."`;
   waitForClick; clearText; 
});
hideTextbox();
showDimOverlay();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I thought something was strange.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`From the beginning Sara had always seemed 
like she had the upper hand in our 
relationship.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`But now that we knew that we were brother and 
sister, it felt like things had been reversed.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Now Sara was relying on me...like when 
we were kids.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
varop(`(28 0a a0) ac := (00) 0`);
closeDimOverlay();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; sound(`S7A004`); appendText; 
   //Sara
   Sara`"Well..."`;
   waitForClick; clearText; marker; sound(`S7A005`); appendText; 
   //Sara
   Sara`"This..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara lifted her right hand.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Pinched between her fingers was the shard 
of the mirror from my finger.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Hey...it's that piece of the mirror."`;
   waitForClick; clearText; marker; sound(`S7A006`); appendText; 
   //Sara
   Sara`"Yeah. I realized when we were running that 
this had been left here."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"So you came back for something like this!?"`;
   waitForClick; clearText; marker; sound(`S7A007`); appendText; 
   //Sara
   Sara`"It's not just anything!"`;
   waitForClick; clearText; marker; sound(`S7A008`); appendText; 
   //Sara
   Sara`"This was something that you fought so hard to 
protect!"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Sara..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"But this isn't something worth risking your 
life to come back for!"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"You had the pendant anyway!"`;
   waitForClick; clearText; marker; sound(`S7A009`); appendText; 
   //Sara
   Sara`"You're right...I'm sorry."`;
   waitForClick; clearText; marker; sound(`S7A010`); appendText; 
   //Sara
   Sara`"I got you involved in all of this..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I chose to turn back. You can't blame 
yourself for that."`;
   waitForClick; clearText; marker; sound(`S7A011`); appendText; 
   //Sara
   Sara`"No, I'm sorry..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`After that, Sara didn't speak for a while.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Sara?"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SA12B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`S7A012`); appendText; 
   //Sara
   Sara`"To tell the truth...it wasn't just that..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Huh?"`;
   waitForClick; clearText; marker; sound(`S7A013`); appendText; 
   //Sara
   Sara`"I was scared...to go outside..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Scared? Of what...?"`;
   waitForClick; clearText; marker; sound(`S7A014`); appendText; 
   //Sara
   Sara`"I thought that once I got outside, everything 
would return to like it was..."`;
   waitForClick; clearText; marker; sound(`S7A015`); appendText; 
   //Sara
   Sara`"And once I thought about that I couldn't move 
anymore..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Like it was? What are you talking about...?"`;
   waitForClick; clearText; marker; sound(`S7A016`); appendText; 
   //Sara
   Sara`"I thought that Leiblich would start 
controlling us again. And all my freedom 
would be taken away..."`;
   waitForClick; clearText; marker; sound(`S7A017`); appendText; 
   //Sara
   Sara`"When I thought that I'd never free again, 
I was paralyzed."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Paralyzed...?"`;
   waitForClick; clearText; marker; sound(`S7A018`); appendText; 
   //Sara
   Sara`"Ever since we've been trapped in 
LeMU...everyone has been trying to escape, 
but..."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SA12A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`S7A019`); appendText; 
   //Sara
   Sara`"But...I was happy."`;
   waitForClick; clearText; marker; sound(`S7A020`); appendText; 
   //Sara
   Sara`"Nobody was looking over me, and I've been 
able to decide things for myself..."`;
   waitForClick; clearText; marker; sound(`S7A021`); appendText; 
   //Sara
   Sara`"When I thought about that, I was so happy."`;
   waitForClick; clearText; marker; sound(`S7A022`); appendText; 
   //Sara
   Sara`"Ever since I entered Leiblich's research 
institute, I haven't felt free even once..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara's words left me stunned.`;
   waitForClick; clearText; 
});
hideTextbox();
showDimOverlay();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I wondered why I had never thought of things 
that way before.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`Leiblich had written me off early on.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`I figured that it was probably because the 
only special power I had was seeing infrared 
light.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`But Sara was probably different.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`The way that she had been able to use 
computers... You had called her a first-rate 
hacker.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`It was probably only the beginning.`;
   waitForClick; 
   Narr`
`;
   appendText; 
   Narr`After I had left the institute, Sara must have 
lived under constant observation and undergone 
experiments.`;
   waitForClick; nextPage(04); 
});
hideTextbox();
hideTextbox();
varop(`(28 0a a0) ac := (00) 0`);
closeDimOverlay();
hideTextbox();
AVL_Mode();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Thinking about it then amazed me.`;
   waitForClick; clearText; marker; sound(`S7A023`); appendText; 
   //Sara
   Sara`"When all of this started I thought this 
accident was just some kind of test of my 
abilities or something..."`;
   waitForClick; clearText; marker; sound(`S7A024`); appendText; 
   //Sara
   Sara`"And when I found out that Sora was 
RSD-generated, I suspected that she 
was here to observe me..."`;
   waitForClick; clearText; marker; sound(`S7A025`); appendText; 
   //Sara
   Sara`"But since Nakkyu was here...I realized that 
it was probably just an accident..."`;
   waitForClick; clearText; marker; sound(`S7A026`); appendText; 
   //Sara
   Sara`"And it made me happy..."`;
   waitForClick; clearText; marker; sound(`S7A027`); appendText; 
   //Sara
   Sara`"Until now, everywhere I've gone, there's been 
someone watching me..."`;
   waitForClick; clearText; marker; sound(`S7A028`); appendText; 
   //Sara
   Sara`"Even in high school, or when I went out 
around town."`;
   waitForClick; clearText; marker; sound(`S7A029`); appendText; 
   //Sara
   Sara`"It was pointless trying to escape...the only 
place I had to go back to was the research 
lab."`;
   waitForClick; clearText; marker; sound(`S7A030`); appendText; 
   //Sara
   Sara`"And back at the lab the only thing waiting 
for me was more experiments and tests..."`;
   waitForClick; clearText; marker; sound(`S7A031`); appendText; 
   //Sara
   Sara`"I've never had an ounce of freedom."`;
   waitForClick; clearText; marker; sound(`S7A032`); appendText; 
   //Sara
   Sara`"I suppose that's why I was happy about the 
accident..."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SA12B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`S7A033`); appendText; 
   //Sara
   Sara`"Maybe I shouldn't say it...I mean everyone 
was so desperate and everything..."`;
   waitForClick; clearText; marker; sound(`S7A034`); appendText; 
   //Sara
   Sara`"But I'd never had freedom like this..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Sara..."`;
   waitForClick; clearText; 
});
hideTextbox();
showDimOverlay();
stopBGM();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`That was all that I could say.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara's each and every word made my heart ache.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I knew that wasn't Sara's intention.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But it felt like every word of hers was a 
confession to me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Of course, I had been under surveillance as 
well, but it had been nowhere near as strict.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As long as I didn't do anything out of the 
ordinary it was like there was no one there.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The whole time I had been living carefree.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But Sara had...been under Leiblich's careful 
watch the whole time, their guinea pig.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Why hadn't I gone to help Sara earlier...`;
   waitForClick; clearText; marker; appendText; 
   Narr`I promised that I would...but I hadn't...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Of course, I had tried.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But everything I did was blocked by Leiblich's 
far-reaching influence.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Still, I knew there could be no excuses.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Why hadn't I tried harder?`;
   waitForClick; clearText; marker; appendText; 
   Narr`Why...?`;
   waitForClick; clearText; marker; sound(`S7A035`); appendText; 
   //Sara
   Sara`"Brother...?"`;
   waitForClick; clearText; 
});
hideTextbox();
varop(`(28 0a a0) ac := (00) 0`);
closeDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara was calling to me.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had been daydreaming in my own world.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SA12C`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`S7A036`); appendText; 
   //Sara
   Sara`"Thank you."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"For what..."`;
   waitForClick; clearText; marker; sound(`S7A037`); appendText; 
   //Sara
   Sara`"Because...you came..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"No! I left you there by yourself."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I didn't...come for you."`;
   waitForClick; clearText; marker; sound(`S7A038`); appendText; 
   //Sara
   Sara`"Yes you did."`;
   waitForClick; clearText; marker; sound(`S7A039`); appendText; 
   //Sara
   Sara`"And I want to thank you..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara said this and smiled.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The smile also seemed tinged with resignation.`;
   waitForClick; clearText; marker; sound(`S7A040`); appendText; 
   //Sara
   Sara`"I don't care anymore..."`;
   waitForClick; clearText; marker; sound(`S7A041`); appendText; 
   //Sara
   Sara`"It's okay to die here..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Sara, what are you saying!?"`;
   waitForClick; clearText; marker; sound(`S7A042`); appendText; 
   //Sara
   Sara`"I've finally tasted freedom..."`;
   waitForClick; clearText; marker; sound(`S7A043`); appendText; 
   //Sara
   Sara`"And I was able to meet you."`;
   waitForClick; clearText; marker; sound(`S7A044`); appendText; 
   //Sara
   Sara`"If it means going back to the life I had 
before, then I'd rather..."`;
   waitForClick; clearText; marker; sound(`S7A045`); appendText; 
   //Sara
   Sara`"Dying here and now would be...better..."`;
   waitForClick; clearText; marker; sound(`S7A046`); appendText; 
   //Sara
   Sara`"Up until now...I never even had the freedom 
to die..."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Her words shocked me into silence.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I had had no idea that Sara's life up until 
now had been so hard.`;
   waitForClick; clearText; marker; appendText; 
   Narr`But...`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"No, Sara."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SA12B`, transition: 20 });
playBGM({ num: 19, volume: 100 });
showTextbox();
text(() => {
   marker; sound(`S7A047`); appendText; 
   //Sara
   Sara`"What?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Don't talk like that!"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"We're going to live! No matter what!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`I wasn't about to let Sara die here!`;
   waitForClick; clearText; marker; appendText; 
   Narr`There was absolutely no way that I would 
let Sara die.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"If you die here, then it means you've lost 
to THEM!"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"You're going to live! Survive! No matter 
what!"`;
   waitForClick; clearText; marker; appendText; 
   Narr`It was my responsibility to help Sara live.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Sara, let's go."`;
   waitForClick; clearText; marker; appendText; 
   Narr`I said -`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SA12A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`S7A048`); appendText; 
   //Sara
   Sara`"Where?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"To the ocean surface."`;
   waitForClick; clearText; marker; sound(`S7A049`); appendText; 
   //Sara
   Sara`"How?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"We'll swim."`;
   waitForClick; clearText; marker; sound(`S7A050`); appendText; 
   //Sara
   Sara`"It's impossible. The pressure will..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"We'll be okay. The air pressure here's been 
compressed by the water pressure."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"We're at about 4.5 atmospheres here."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Even if we go out into the ocean from here, 
our lungs will be okay."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SA12B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`S7A051`); appendText; 
   //Sara
   Sara`"But still."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"We don't know that help will come for us. And 
even if it does, it might be too late..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Besides, it is too dangerous for us to 
stay here."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Listen, Sara? We're breathing at 4.5 
atmospheres."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"If we stay here we are in danger of oxygen 
poisoning or nitrogen narcosis."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"And we have no idea how long LeMU will hold."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"If LeMU collapses then we'll get dragged down 
with it..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"It's too dangerous to stay here."`;
   waitForClick; clearText; marker; appendText; 
   //Sara
   Sara`"........."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"........."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SA12A`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`S7A052`); appendText; 
   //Sara
   Sara`"Hey..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"What?"`;
   waitForClick; clearText; marker; sound(`S7A053`); appendText; 
   //Sara
   Sara`"You know I can't swim, right?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"You'll be okay. You're kind of swimming 
right now, aren't you?"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"You'll just have to remember the lessons 
I gave you."`;
   waitForClick; clearText; marker; sound(`S7A054`); appendText; 
   //Sara
   Sara`"But...it isn't the same."`;
   waitForClick; clearText; marker; sound(`S7A055`); appendText; 
   //Sara
   Sara`"I'm just floating, right now."`;
   waitForClick; clearText; marker; sound(`S7A056`); appendText; 
   //Sara
   Sara`"It's different than swimming in the ocean!"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Sara, you'll be okay! Don't worry!"`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I'll lead you."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I'll pull you all the way."`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SA12B`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`S7A057`); appendText; 
   //Sara
   Sara`"No...it's not possible."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"We can do it."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Believe in your brother."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"I came here...I came to help you, Sara!"`;
   waitForClick; clearText; marker; sound(`S7A058`); appendText; 
   //Sara
   Sara`"Brother..."`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Sara, believe in me."`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara clasped the pendant she was wearing 
around her neck.`;
   waitForClick; clearText; marker; appendText; 
   //Kid
   Kid`"Let's go, Sara!"`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SA12C`, transition: 20 });
showTextbox();
text(() => {
   marker; sound(`S7A059`); appendText; 
   //Sara
   Sara`"Okay!"`;
   waitForClick; clearText; 
});
removeBG({ mode: BLACK, transition: 01 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I pulled Sara along with me, and we left the 
infirmary.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We moved from air pocket to air pocket looking 
desperately for a place where the wall had 
collapsed in.`;
   waitForClick; clearText; marker; appendText; 
   Narr`When we finally found a tear big enough 
for us to squeeze through, we doubled back 
to the nearest air pocket.`;
   waitForClick; clearText; marker; appendText; 
   Narr`We took a number of short breaths to boost the 
oxygen level in our blood.`;
   waitForClick; clearText; marker; appendText; 
   Narr`And finally taking a big breath, I grabbed 
onto Sara's hand and led her through the hole 
and into the ocean.`;
   waitForClick; clearText; 
});
bgload({ name: `EV_SA13A`, transition: 10 });
showTextbox();
text(() => {
   marker; appendText; 
   Narr`With the walls and floor gone, for an instant 
I lost sense of which way was up and which 
was down.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Soon I saw a faint light in the water above.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I held Sara under my arm and headed for that 
light.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I desperately thrashed my legs and swam with 
my broken arm.`;
   waitForClick; clearText; marker; appendText; 
   Narr`The water pressure was slowly pushing the air 
from my lungs.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara's face was twisted in pain.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was in agony.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Still, I swam, struggling to pull Sara toward 
the light.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I kept kicking, believing that if I could make 
it to the source of the light then everything 
would be okay.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Even if all of the oxygen were squeezed out of 
my lungs, I was not about to let Sara die here.`;
   waitForClick; clearText; marker; appendText; 
   Narr`That thought kept me moving.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Slowly. Gradually.`;
   delay(0); 
});
bgload_keepFg({ name: `EV_SA13B`, transition: 20 });
showTextbox();
text(() => {
   appendText; 
   Narr`The light was getting bigger.`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Sara's arms squeezed me in desperation.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Hoping to give Sara courage, I gripped her 
tighter with my left arm.`;
   waitForClick; clearText; marker; appendText; 
   Narr`As if in response, Sara gave me a smile and 
started trying to swim upward.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I matched her movements, swimming desperately.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Come Sara...`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`Let's go...`;
   delay(0); 
});
bgload_keepFg({ name: `EV_SA13C`, transition: 20 });
showTextbox();
text(() => {
   appendText; 
   Narr`Toward the light...`;
   waitForClick; clearText; 
});
showTextbox();
text(() => {
   marker; appendText; 
   Narr`I was never going to let Sara go again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`I was never going to leave my precious sister 
behind again.`;
   waitForClick; clearText; marker; appendText; 
   Narr`Never again...`;
   waitForClick; clearText; marker; appendText; 
   Narr`Sara...`;
   waitForClick; clearText; 
});
hideTextbox();
monoColorOverlay({ interval: 18, color: WHITE });
delay({ interval: 60 });
stopBGM();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(46);
fadeOutMonoColorOverlay();
unSkippableDelay(33);
delay({ interval: 90 });
varop(`(28 0a a4) c7 := (00) 3`);
varop(`(28 0a a4) b3 := (00) 0`);
jump(`Y_ED`);
