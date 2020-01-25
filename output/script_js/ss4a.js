setDialogBoxColor(BLUE);
setSceneTitle({ index: 92 });
l_b0 = 5;
l_dayA = 4;
l_dayB = 4;
bgload({ name: `BG26B1R`, transition: 10 });
playBGM({ num: 16, volume: 100 });
clock(`1:36`);
showTextbox();
text(() => {
   `I walked around LeMU.`;
   `After what had happened, I didn't want to be around You or Takeshi.`;
   `But I was too worked up to just stick around in one place.`;
   `I thought I would pick the place they were least likely to come and wander around it.`;
   `I wondered what that fit of rage had been about...`;
   `Why had I gotten so mad...?`;
   `Why...?`;
   `Tsugumi had stared coldly down at Sara.`;
   `And Sara had desperately battled to stand her ground...`;
   `What were the emotions that had welled up within me in that instant...?`;
   `I felt like I was on the verge of figuring it out.`;
   `Like my lost memory had been concealed by a thick fog.`;
   `But now it was only an inch away, right there covered by a thin sheet.`;
   `But no matter how thin it was I still couldn't remove it.`;
   `The more I thought about it, the further away into the fog my memory seemed to recede.`;
   `I wondered what I could have had in my past...`;
   `I continued to wander LeMU without understanding anything...`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
bgload({ name: `BG05A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
showTextbox();
text(() => {
   `Suddenly, I felt like I heard someone's voice in a room so I entered it.`;
   `In the sprawling night sky were a number of orb-shaped planets...`;
   `And in between the planets, there was a huge, soft-looking whale floating. `;
   `This was the Cosmic Whale Room.`;
   `Of course, the whale and the starry sky were all merely theme park attractions.`;
   `I thought that wide, open space and the attractions would help to ease my ragged nerves.`;
   `Even though it was fake, the expansive space eased my tense mind and nerves - frazzled from being cooped up for so long.`;
   `But I still had no memory...`;
   `I realized again just how stressed this situation had made me without my even noticing.`;
   `For a while, I just relaxed, looking at the scenery.`;
   `....`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   Kid`"What...?"`;
   `Something moved slightly on top of the whale.`;
   `I squinted, peering at it.`;
   Kid`"Sara...?"`;
   `I glanced quickly at the planet next to the whale and headed for the stairs leading to it.`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
delay({ interval: 30 });
bgload({ name: `BG05A3`, transition: 26 });
fgload({ id: 1, name: `SA11ADL`, x: 320, useAnim: false });
playBGM({ num: 6, volume: 97 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   `I walked out to the edge of the whale's nose and sat down next to Sara.`;
   `I thought that normally whales and dolphins have their blowholes or nostrils near the middle of their head so it wasn't probably accurate to say 'its nose.'`;
   `We looked at the countless stars sparkling overhead.`;
   `It seemed as if we could reach the stars in the sky.`;
   `If I had stood up, I could have probably actually touched a star.`;
   `Because it was all a facade of fake stars projected onto the ceiling.`;
   `Speaking of fake, the whale was, too.`;
   `I don't know what kind of cutting-edge technology they used, but the skin on the whale felt like it could have been real.`;
   `Then again, I didn't suppose I had ever actually touched a real whale.`;
   `Maybe I was just working from some image I had of what whale skin would feel like.`;

});
hideTextbox();
showDimOverlay();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `
${noWait}`;
   `Not having a memory was mysterious in a way.`;
   `Normal and abnormal, common sense and nonsense were all dictated by memory.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `For example - `;
   `If a sea otter suddenly appeared right in front of me...`;
   `And he said, 'I'm your father,' then, well, I probably wouldn't believe him.`;
   `Because in this life I had never met a cross between a sea otter and a person...`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `But with no memory, there was no way for me to know for sure if I had ever met a sea otter person...`;
   `Thinking of it that way...`;
   `It was amazing to me that I could be so logical.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `I imagined that my memories were stored away in a drawer in my brain somewhere.`;
   `And I was adding to the drawers even now.`;
   `Only the number of drawers that I could open was limited.`;
   `I had no idea where the drawers from before May 1st were packed away.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Still...`;
   `There was someone opening my drawers...`;
   `And he or she was judging whether what was happening was normal or abnormal, common sense or nonsense.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Rather, that entity was telling me.`;
   `I was a safe without a key.`;

});
showTextbox();
text(() => {
   `The treasure in the safe didn't belong to me...`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   `Incidentally, it wasn't just the texture of the whale's skin that made it seem so lifelike.`;
   `The whale was alive.`;
   `At least it seemed that way to me.`;
   `A whale swimming in the starry sky.`;
   `The repetitive wave-like motion of its back as it swam through the sky.`;
   `His soft mouth opened and closed, and even puffed up from time to time.`;
   `About every three minutes, he blew out a warm breath through his blowhole.`;
   `A seawater mist of spray would scatter around the area.`;
   `Sitting at the tip of his nose, Sara and I bobbed up and down, in time with its movements...`;
   `Still, the whale undulated so slowly that we could let go with our hands and still feel safe.`;
   `It was like a cradle rocking back and forth...`;
   `On the back of the whale, we sailed through the cosmos.`;
   `We were on our way to Planet Kuikui.`;
   `Sara slowly took something out of her pocket and showed it to me.`;
   `It was an old-style oil lighter.`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
bgload({ name: `EV_SA05A`, transition: 20 });
showTextbox();
text(() => {
   `She lit it.`;
   `The flickering flame made Sara's face look red.`;
   `I wondered why she was carrying around a lighter.`;
   `I couldn't picture her as the type that would smoke.`;
   `I thought I might ask her.`;
   `But as I did, Sara opened her other hand.`;
   `In it was the pendant from before.`;
   `A thin chain was wrapped around her index finger. The pendant swayed in her hand.`;
   `Sara brought the flame closer to the pendant and started at it dreamily.`;
   `Her expression relaxed.`;
   `It was as if Sara were mesmerized by something.`;
   `A mirror was embedded in the pendant.`;
   `The flame of the lighter reflected brightly in the mirror.`;
   `I wondered if...`;
   `Sara might be staring at her reflection and admiring herself.`;
   `The idea made me laugh without thinking`;
   Sara(S4A000)`"Huh? Is something funny?"`;
   Kid`"I mean..."`;
   Kid`"It looks like you're sitting there grinning at yourself."`;
   Sara(S4A001)`"N-no I'm not!"`;
   Kid`"I guess you've got a bit of a narcissistic side?"`;
   Sara(S4A002)`"I said I'm not!"`;
   `With that, Sara snapped the lighter shut.`;

});
bgload({ name: `BG05A3`, transition: 20 });
fgload({ id: 1, name: `SA04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `That moment I noticed something odd.`;
   `It had looked like the flame of the lighter in the mirror had split into two images.`;
   `I thought that maybe there was a crack in the mirror.`;
   Kid`"Hey, can I see that pendant for a second?"`;

});
fgload({ id: 1, name: `SA05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S4A003)`"Sure..."`;

});
fgload({ id: 1, name: `SA01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S4A004)`"Don't drop it."`;
   `The whale's body continued to move up and down.`;
   `I figured that was what Sara meant.`;
   Kid`"I won't."`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `Saying that, I took the pendant from Sara.`;

});
bgload({ name: `EV_ET02A`, transition: 20 });
showTextbox();
text(() => {
   `I wrapped the chain around my finger and brought it close to my face.`;
   `As I had suspected, the mirror was cracked.`;
   `It wasn't just broken. A piece of it was missing.`;
   `I touched the area that was missing.`;
   `I thought it had probably broken from the shock of Tsugumi dropping it.`;
   `The missing fragment might still be lying about in that room.`;
   `Feeling the sharp contours of where the missing piece belonged made me sad.`;
   `I took my fingers from the mirror and held my palm out toward Sara.`;
   `Without saying anything, Sara plunked the lighter down on the palm of my hand.`;
   `Fitz!`;
   `It sparked and lit.`;

});
bgload({ name: `EV_ET02B`, transition: 10 });
showTextbox();
text(() => {
   Kid`"Oh..."`;
   `I had spoken without thinking.`;
   `The flame appeared in the mirror, dimly but in three dimensions.`;

});
bgload({ name: `BG05A3`, transition: 20 });
showTextbox();
text(() => {
   Kid`"So this is a hologram pendant?"`;

});
makeFGHasYellowAmbient({ id: 1 });
fgload({ id: 1, name: `SA06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S4A005)`"Huh?"`;

});
fgload({ id: 1, name: `SA03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S4A006)`"Y-yes, but..."`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
bgload({ name: `EV_ET02B`, transition: 20 });
showTextbox();
text(() => {
   `The mirror showed a person.`;
   `It was basically a headshot.`;
   `From the shoulders on up, the head and facial expression were extremely clear.`;
   `I imagined it was made using a holomachine.`;

});
hideTextbox();
showDimOverlay();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `Holomachines were machines that would burn a hologram into pendants or key chains or any other object that a person wanted.`;
   `On LeMU there were even a number of these machines.`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   `I remembered that much.`;
   `It was the same as before - if there were something to trigger my memory, I could recall some things.`;
   `I thought that if I could remember these kinds of things, why not...`;
   `But I shoved that thought aside and focused again on the image in the pendant.`;
   `Since it was a hologram, it also had depth.`;
   `Changing the angle of the mirror changed the angle of his face.`;
   `His...it was an image of a man.`;
   `A man I didn't know.`;
   `I suspected it was an image that was closed away in one of those inaccessible drawers of my memory.`;
   `I had no memory of the face.`;
   Kid`"Who is this?"`;
   Sara`"........."`;
   Kid`"Huh?"`;
   Sara`"..."`;
   Kid`"Is it your boyfriend?"`;
   Sara`"........."`;
   `Sara remained quiet.`;
   `Her expression was frozen solid.`;
   Kid`"It's your boyfriend, isn't it?"`;
   `I asked her again.`;
   `But there was not even a glimmer of hidden romance on her face.`;
   `Any girl looking at her boyfriend's picture would probably show a smile.`;
   `Especially, stuck in the middle of the ocean...`;
   Kid`"Hey, he looks pretty cool."`;
   `I said it in a teasing way.`;
   `Actually, he was so good looking it was enough to make you sick.`;
   `I thought she might chirp out, 'Oh, honey, I hope you are well. I miss you.'`;
   `But there was one thing that bothered me...`;
   `His image was all in one color.`;
   `But there was kind of a retro trend going on and some people did go for the sepia or monochrome holograms.`;
   `So it didn't really seem all that outlandish.`;

});
bgload({ name: `BG05A3`, transition: 20 });
showTextbox();
text(() => {
   Kid`"So? How long have you been dating?"`;
   `I put out the lighter, set it on the pendant and held it out to Sara.`;

});
fgload({ id: 1, name: `SA03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `She didn't take them.`;
   `She was still frozen stiff. It looked like she was forgetting to breathe.`;
   Kid`"Hey, Sara? Sara?"`;
   Kid`"Hello! Sara!"`;
   `I grasped the pendant that she hadn't taken and shook Sara's shoulders. `;
   `Sara didn't even blink.`;
   `And then...`;

});
stopBGM();
playSFX({ name: `SE02_16`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Fwooosh!`;
   `The whale exhaled.`;

});
fgload({ id: 1, name: `SA06ADL`, x: 320, useAnim: false });
showTextbox();
text(() => {
   Sara(S4A007)`"Kyaaa!"`;

});
hideTextbox();
removeFG({ id: 1, useAnim: false });
playSFX({ name: `SE05_05`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `Sara leaped up and smashed into me, leveling me with a powerful tackle.`;
   `Who knows? It might have been that she was so surprised, she just wanted something to grab on to.`;
   `Still, her full weight came barreling into me.`;
   `With that I went down and she crumpled with me. We slid down and off the whale's smooth skin.`;
   `The stars appeared to gain distance.`;

});
removeBG({ mode: BLACK, transition: 0 });
showTextbox();
text(() => {
   `What they say about space being weightless, well, that seemed a lie.`;

});
bgload({ name: `BG05A1`, transition: 30 });
playSFX({ name: `SE05_10`, a1: 1, volume: 100 });
waitForSFX();
shakeScreen();
showTextbox();
text(() => {
   `Before I had time to think anything else, my body made contact with the hard floor.`;
   `A fine mist descended down on to my skyward face.`;
   `Sara was on top of me, unmoving.`;
   `I could hear her breathing near my ear.`;
   Sara(S4A008)`"Safe landing, huh?"`;
   `Sara continued talking as she lifted up her face and peered into my face.`;

});
fgload({ id: 1, name: `SA02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S4A009)`"Welcome to Planet Kuikui!"`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeBG({ mode: BLACK, transition: 62 });
delay({ interval: 30 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
setSceneTitle({ index: 93 });
chapterCutin({ name: `00000000` });
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
bgload({ name: `BG26A1L`, transition: 26 });
playBGM({ num: 2, volume: 100 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
clock(`10:12`);
showTextbox();
text(() => {
   `I ended up failing to give the pendant back.`;
   `I thought I would look for the missing piece of the hologram and had an idea of where it might be.`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
bgload({ name: `BG09A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `It was the site of Tsugumi and Sara's fight the day before.`;
   `The fragment should be around that room somewhere.`;
   `I wanted to find the piece and put it back in the pendant. `;
   `I thought if I could do it, Sara would jump with joy.`;
   `As I imagined her happy face, I crawled around on my knees, searching from room corner to corner.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
delay({ interval: 60 });
playBGM({ num: 1, volume: 100 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
showTextbox();
text(() => {
   Kid`"Hmmm. That's strange."`;
   //??
   Unk(S4A010)`"What's strange?"`;

});
fgload({ id: 1, name: `KB07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Surprised, I looked up and there was Takeshi.`;
   Takeshi(S4A011)`"Are you looking for something?"`;
   Kid`"Y-yeah..."`;
   Kid`"Actually..."`;
   `I explained the situation and showed Takeshi the broken pendant.`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A012)`"I see. Well, you're right about it being broken."`;
   Kid`"Yup."`;
   Kid`"If you don't mind, could you help me look?"`;

});
fgload({ id: 1, name: `KB03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A013)`"Ah, that sounds like a plan..."`;
   Takeshi(S4A014)`"But can I ask you something first?"`;
   Kid`"What?"`;

});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A015)`"That image of the guy you were talking about, where is it?"`;
   Kid`"Where...?"`;
   Kid`"It's right here."`;
   `I peered into the mirror.`;
   Kid`"W-what?"`;
   Kid`"He's gone..."`;

});
fgload({ id: 1, name: `KB05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Takeshi looked at me skeptically.`;
   Kid`"But it was here yesterday...I swear..."`;
   Kid`"Huh? I wonder why?"`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A016)`"It's no big deal."`;
   Takeshi(S4A017)`"I don't really care what kind of guy Sara would date anyway..."`;

});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A018)`"No...I take that back."`;
   Takeshi(S4A019)`"I might be just a little bit interested."`;
   Takeshi(S4A020)`"But I suppose it doesn't matter now that the pendant's broke."`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A021)`"And since, the pendant is something that is important to Sara."`;
   Takeshi(S4A022)`"I'll help you look for the broken piece."`;
   Kid`"T-thanks."`;

});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A023)`"First to find it wins, Kid!"`;
   Kid`"Huh?"`;
   `Takeshi thumped my back and set about crawling on the floor, searching.`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A024)`"And? How much is the reward for this anyway?" `;
   Kid`"Reward?"`;

});
fgload({ id: 1, name: `KB05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A025)`"How much am I gonna get if I find the piece."`;
   Kid`"What...are you going to blackmail Sara?"`;

});
fgload({ id: 1, name: `KB04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A026)`"What're you talking about?"`;
   Takeshi(S4A027)`"You're gonna pay me, not Sara!"`;
   Kid`"Wh...why?"`;

});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A028)`"Heeey, heeey, don't play innocent with me, champ."`;
   Kid`"...W-what?"`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KB02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A029)`"You don't think I'd let you take all the credit, do you?"`;
   `Takeshi wriggled toward me like a snake. He stopped in front of me.`;
   Takeshi(S4A030)`"If I find it, I'll bet you're planning to say you did."`;
   Kid`"I...I wouldn't..."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KB08ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A031)`"'OH, HI MILADY, SARA!'"`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KB01ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A032)`"'Oh, hi Kid. What is it?'"`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KB04ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A033)`"'This is yours, milady.'"`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KB02ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A034)`"'Well, if it isn't the pendant I lent you yesterday! Oh, joy, it is fixed! Oh happy day!'"`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KB02ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A035)`"'Oh, how did I slave, searching the floor far and wide all of yesterday!'"`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KB03ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A036)`"'And was that alone that you searched, brave youth?'"`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KB08ADS`, x: 176, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A037)`"'Do you jest? Of course I went on my quest for the missing piece alone!'"`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KB02ADS`, x: 464, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A038)`"'Oh, wow! Kid, you are amazing!'"`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A039)`"...So I know exactly what you are planning."`;

});
fgload({ id: 1, name: `KB04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A040)`"You're full of yourself!"`;
   Kid`"Whatever. Anyway, that wasn't a very good impersonation - of me or Sara!"`;
   Takeshi(S4A041)`"Don't be so picky about the details."`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A042)`"I'm rootin' for you, okay kid?"`;
   Kid`"I told you - it isn't like that."`;

});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A043)`"I said it's okay!"`;
   Takeshi(S4A044)`"I like doing this kind of thing." `;
   Kid`"What do you mean by 'this'?"`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A045)`"I mean...well, you know, being cupid, a matchmaker."`;
   Kid`"Cupid doesn't ask for money."`;

});
fgload({ id: 1, name: `KB07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A046)`"I suppose that's true."`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A047)`"Then how about you help me in return later?"`;
   Kid`"Help?"`;

});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A048)`"It seems like the generator needs looking at."`;
   Takeshi(S4A049)`"No big deal, just some maintenance that's gotta be done."`;

});
fgload({ id: 1, name: `KB03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A050)`"It's an order from Sora."`;
   Kid`"In that case, I'd do it even if I didn't owe you anything."`;

});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A051)`"Thanks!"`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `In the end, we didn't find the missing piece...`;
   `Takeshi and I were just standing around covered in dust.`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG09A1`, transition: 26 });
playBGM({ num: 2, volume: 100 });
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
showTextbox();
text(() => {
   `The door opened and Sara came in.`;

});
multifgload2({ id1: 1, id2: 2, name1: `SA02ADM`, name2: `KB03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(S4A052)`"Oh, there you are."`;
   Sara(S4A053)`"I think I forgot to get the pendant back from you."`;
   Kid`"Oh, yeah..."`;
   `All I could do was hand her back the fractured pendant.`;

});
fgload({ id: 1, name: `SA08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   `Only then, like Sara was seeing us for the first time, did she notice that we were filthy.`;
   Sara(S4A054)`"What are you guys doing here anyway?"`;

});
fgload({ id: 2, name: `KB07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   `I couldn't think of anything to say. Takeshi and I exchanged glances.`;

});
fgload({ id: 2, name: `KB11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A055)`"Actually...we were looking for the missing piece."`;

});
fgload({ id: 1, name: `SA05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S4A056)`"Piece? What's that?"`;

});
showTextbox();
text(() => {
   Takeshi(S4A057)`"The piece that broke off that pendant."`;
   Takeshi(S4A058)`"We thought we'd try to fix it for you."`;

});
fgload({ id: 1, name: `SA01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S4A059)`"Oh, don't worry about that."`;
   `Sara looked kind of embarrassed.`;
   `What?`;
   `What had happened?`;
   `All of the sudden Takeshi had made it look like it was all his bright idea.`;
   `I thought he was going to let me take the credit.`;

});
fgload({ id: 1, name: `SA08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S4A060)`"Besides...I'm pretty sure you're not going to find the piece here."`;
   Kid`"Why not?"`;

});
fgload({ id: 1, name: `SA05ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S4A061)`"Because...this pendant was cracked from the start."`;

});
fgload({ id: 2, name: `KB13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A062)`"From the start?"`;

});
fgload({ id: 1, name: `SA01ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Sara(S4A063)`"Yup."`;
   Sara(S4A064)`"I don't know why, but I've had this pendant as long as I can remember."`;
   Sara(S4A065)`"And this piece broke off a long time ago."`;
   Kid`"Oh, well that means..."`;

});
fgload({ id: 2, name: `KB03ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A066)`"We didn't have a chance of finding it."`;
   Takeshi(S4A067)`"*sigh*"`;

});
fgload({ id: 1, name: `SA08ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   `Takeshi's sigh echoed throughout the infirmary.`;

});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
delay({ interval: 30 });
setSceneTitle({ index: 94 });
bgload({ name: `BG26A1L`, transition: 26 });
setMonoColorOverlayFadeOutDuration(31);
fadeOutMonoColorOverlay();
unSkippableDelay(18);
clock(`13:34`);
showTextbox();
text(() => {
   `After lunch...Takeshi gave me more information about the generator problem.`;
   `He said that the part we had repaired before was malfunctioning and that the machine wasn't functioning in a stable manner.`;
   `Takeshi told me when to meet him to fix it. Then he said he had something to do and took off.`;
   `I didn't have anything to do until our meeting time, so I walked the corridors alone.`;

});
hideTextbox();
stopBGM();
showTextbox();
text(() => {
   `Suddenly, I noticed a faint voice.`;
   `It sounded like a song.`;
   `But I wondered who it could be.`;
   `I turned toward the direction of the voice.`;

});
stopBGM();
showTextbox();
text(() => {
   `But there was no one there.`;
   `And the voice had stopped.`;
   `But I was sure that the voice had come from around here.`;
   `I thought that maybe...`;

});
bgload({ name: `EV_SA06A`, transition: 20 });
showTextbox();
text(() => {
   `I peeked into the compression chamber from the shadows and saw Sara.`;
   `Sara was sitting in front of the think window and staring at her pendant.`;
   `I thought I might call out to her.`;
   `She seemed to be focusing on something...`;
   `It looked like she was starting to recite a song.`;

});
bgload({ name: `EV_SA06B`, transition: 20 });
showTextbox();
text(() => {
   Sara(S4A068)`"Moon sprite shouldering a long bow."${waitVoice}${noWait}`;
   Sara(S4A069)`"Waiting inside a dream."${waitVoice}${noWait}`;
   Sara(S4A070)`"Tonight a story by moonlight."${waitVoice}${noWait}`;
   Sara(S4A071)`"Hoping the wait will be short."${waitVoice}${noWait}`;
   Sara(S4A072)`"Sleeping curled and snug."${waitVoice}${noWait}`;
   Sara(S4A073)`"Sleeping in mother's arms."${waitVoice}${noWait}`;

});
showTextbox();
text(() => {
   `She finished singing.`;

});
bgload_keepFg({ name: `EV_SA06C`, transition: 10 });
showTextbox();
text(() => {
   `A tear streaked down Sara's face.`;

});
showTextbox();
text(() => {
   `It didn't seem like a good time to call out to her.`;
   `So I went to leave.`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `Then suddenly in front of my eyes, another scene fused together with the one I was witnessing.`;
   `A girl was sitting on the bed, crying in the same way.`;
   `She was stifling her sobs to keep others from worrying...`;
   `But who? Who was this?`;
   `What could this all mean?`;
   `What was the matter with me?`;
   Sara(S4A074)`"Who's there...?"`;

});
hideTextbox();
monoColorOverlay({ interval: 0, color: WHITE });
bgload({ name: `EV_SA06C`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `With her voice, the image instantly vanished.`;
   `Still confused by what I had just seen, I answered.`;
   Kid`"It's me, Sara."`;
   Kid`"Sorry...I wanted to say something...but it just didn't seem right."`;

});
bgload({ name: `BG10A1`, transition: 20 });
playBGM({ num: 2, volume: 97 });
showTextbox();
text(() => {
   `Sara wiped away her tears as if hiding them...`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S4A075)`"What? What do you mean?"`;
   `She seemed her upbeat self again.`;
   `I faced her and sat down.`;
   Kid`"That song, you sang it before."`;
   Kid`"In front of the Generator Room, I think."`;

});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S4A076)`"Hey, your memory IS fine."`;

});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S4A077)`"Maybe you lost your memory because you packed your head with so many useless little things like that."`;
   `Sara laughed as she said this.`;
   Kid`"Is that song a lullaby or something?"`;

});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S4A078)`"Yeah. You've never heard it?"`;
   `I shook my head.`;
   `I didn't recall hearing it before.`;
   Sara(S4A079)`"Really? You don't know it?"`;
   `I pretended to think about it.`;
   `Even if I did think on it, I didn't imagine I'd remember it.`;

});
fgload({ id: 1, name: `SA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S4A080)`"Oh...I see..."`;
   `Sara said it sadly and glanced down at the pendant hanging from the middle finger of her left hand.`;
   Kid`"Uh..."`;
   Kid`"There was something I wanted to ask you."`;

});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S4A081)`"?"`;
   `I told her about how the image of the man in the hologram pendant had disappeared.`;
   Kid`"I was sure the image was there yesterday..."`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S4A082)`"Oh, that's because we're indoors."`;
   Kid`"Huh? Whaddya mean?"`;
   Kid`"Yesterday when we looked at it we were in LeMU."`;
   Sara(S4A083)`"No, that's not inside."`;
   Kid`"?"`;

});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S4A084)`"That's a part of space, right?"`;
   Kid`"..."`;

});
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S4A085)`"I'm just kidding..."`;

});
fgload({ id: 1, name: `SA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S4A086)`"Here is how it works..."`;
   `With that, Sara took the lighter from her pocket.`;
   `She put the lighter's flame close to the pendant.`;
   Kid`"Oh."`;
   `The man in the hologram floated there - the same as the day before.`;
   `The image wasn't as clear as before.`;
   `I thought that it was probably the bad light.`;
   `The room with the whale was mostly dark. I figured that was why he wasn't as clear.`;
   Kid`"So you have to hold the lighter flame next to it to see it?"`;
   `I asked to make sure.`;
   Sara(S4A087)`"Yup."`;

});
fgload({ id: 1, name: `SA05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S4A088)`"It's gotta be either the lighter or sunlight."`;
   Kid`"Sunlight?"`;

});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S4A089)`"Yeah. I don't really know how it works, but you can't see it under fluorescent lights. Weird, huh?"`;

});
hideTextbox();
removeFG({ id: 1, useAnim: true });
stopBGM();
showTextbox();
text(() => {
   `That's when I understood why Sara always carried the lighter.`;
   `It was to look at the hologram...`;
   `Sara put out the flame.`;
   `And lit it, and put it out.`;
   `And lit it, and put it out...`;
   `She stared absently at the image of the man appearing and disappearing.`;

});
hideTextbox();
playBGM({ num: 22, volume: 100 });
fgload({ id: 1, name: `SA17ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S4A090)`"Both of my parents are gone."`;
   `Sara said this out of the blue.`;
   Sara(S4A091)`"They died when I was little."`;
   Sara(S4A092)`"My mom and dad weren't around when I was a kid."`;
   Sara(S4A093)`"For a while, I thought it was that way for everybody..."`;
   Kid`"Really..."`;
   `I didn't know how to answer.`;
   `I couldn't think of a decent reply.`;

});
fgload({ id: 1, name: `SA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S4A094)`"This pendant is the only keepsake I have."`;
   Kid`"So that man is.."`;
   Sara(S4A095)`"I think it's probably my father."`;
   Sara(S4A096)`"I don't know for sure, but that is what I think."`;
   `After a long silence I said - `;
   Kid`"It's the same for me."`;

});
fgload({ id: 1, name: `SA06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S4A097)`"Huh?"`;
   Kid`"I've forgotten everything."`;
   Kid`"So I don't remember anything about my mom or dad."`;
   Kid`"If I bumped into them on the street, I would never know it."`;
   Kid`"Even if I get out of here in one piece..."`;
   Kid`"I don't have anywhere to call home."`;
   Kid`"So I'm in the same situation."`;
   Kid`"It's the same as not having any parents."`;

});
fgload({ id: 1, name: `SA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara`"........."`;
   Kid`"Well, I should get going."`;

});
fgload({ id: 1, name: `SA08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(S4A098)`"?"`;
   Kid`"I've got to go help Takeshi."`;
   Kid`"The generator needs some fixing..."`;
   `I stood up.`;
   `As I was about to leave, I thought of something.`;
   Kid`"Hey, would you mind lending me that lighter and pendant again?"`;

});
hideTextbox();
fgload({ id: 1, name: `SA02ADM`, x: 320, useAnim: true });
monoColorOverlay({ interval: 12, color: BLACK });
stopBGM();
delay({ interval: 120 });
showTextbox();
text(() => {
   Kid`"Ouch. Takeshi, that hurts!"`;

});
hideTextbox();
playBGM({ num: 1, volume: 100 });
bgload({ name: `BG09A1`, transition: 26 });
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
clock(`16:7`);
showTextbox();
text(() => {
   Takeshi(S4A099)`"You can take that. You're a man after all."`;
   `Takeshi grinned sadistically as he patted my right arm, which was supported by a cast.`;
   `The cast was made of a specially formulated plastic. It was lighter than I had expected and not too cumbersome. `;
   `Takeshi had put the cast on me with instructions from Sora.`;
   `Sora said she had something else to do and left the work to Takeshi.`;

});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A100)`"Wow. That dive you took was really something else. Pretty impressive stuff."`;
   Kid`"Be quiet! I told you my leg slipped. You're the one that forced the tools on me."`;

});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A101)`"Don't try to pin this on me. I never said to bring the tools along."`;
   Kid`"You're the one that jumped off without anything."`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A102)`"If we have to make repairs again, then we'll need the tools. So I left them there."`;
   `Takeshi was making excuses.`;
   Kid`"Okay, fine. Say it was all my stupid fault..."`;
   `I looked at the cast wrapped around my right arm.`;
   `While we were repairing the generator I had lost my balance holding the heavy toolbox and fallen off the machine.`;

});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A103)`"Well, don't get down about it. Sora said it's a clean break so you'll be back in business in no time."`;
   Kid`"Easy for you to say..."`;

});
fgload({ id: 1, name: `KB11ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A104)`"Alright, now it's time..."`;
   `Takeshi took a transparent object that could easily be mistaken for a gun at a glance. It was an injection syringe and cartridge filled with a cocktail of antibiotics, fever medicine, painkillers and vitamins.`;

});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A105)`"Gimme your arm."`;
   `Takeshi put the needle against my left arm.`;
   `He pushed it in.`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A106)`"Alright, that should do it."`;
   Kid`"Thanks, Takeshi."`;
   Takeshi(S4A107)`"The break might cause a fever. Least you've got some medicine in you."`;

});
showTextbox();
text(() => {
   Takeshi(S4A108)`"Either way, the medicine ought to make you drowsy. So take it easy."`;
   Kid`"Alright..."`;

});
showTextbox();
text(() => {
   Takeshi(S4A109)`"Well, I best get going."`;
   Kid`"Uh, hold on a second."`;

});
fgload({ id: 1, name: `KB07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A110)`"Huh? What is it?"`;
   Kid`"There's something I want you to see."`;
   Takeshi(S4A111)`"What?"`;
   Kid`"This."`;
   `I held Sara's pendant out to Takeshi.`;

});
fgload({ id: 1, name: `KB05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A112)`"Not that again."`;
   Kid`"Yeah. I want you to look at it again."`;
   Takeshi(S4A113)`"You can be a pain, you know?"`;
   `Even so, Takeshi took the pendant as he said this.`;
   `This time I thought he'd be able to see it as well.`;
   `I was gonna tell him that it was a picture of Sara's boyfriend.`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A114)`"Hmmmm...."`;
   `Takeshi scrutinized the pendant.`;
   `He turned it over, then sideways.`;
   `And then...`;

});
fgload({ id: 1, name: `KB07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A115)`"There's nothing here to see..."`;
   Kid`"Huh...there has to be...Oh!"`;
   Kid`"I forgot."`;
   `I took the lighter out, lit it and held it up to the pendant.`;
   `I showed the light on the pendant.`;
   Kid`"How's that?"`;

});
fgload({ id: 1, name: `KB05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A116)`"Are you screwing with me?"`;
   Kid`"Huh?"`;
   Takeshi(S4A117)`"Whaddya using a lighter to look at it for?"`;
   Kid`"Because...that's how you see it."`;

});
fgload({ id: 1, name: `KB06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A118)`"Huh?"`;
   Kid`"Look hard! There should be a man's face there."`;

});
fgload({ id: 1, name: `KB07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi`"..."`;
   Kid`"..."`;

});
fgload({ id: 1, name: `KB02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A119)`"Oh, you're right! There is."`;
   Takeshi(S4A120)`"And he's not a bad looking guy!"`;
   Kid`"See! That's Sara's boyfriend."`;
   Takeshi(S4A121)`"Ho, ho. Alright!"`;

});
fgload({ id: 1, name: `KB01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A122)`"I wonder when I started going out with Sara?"`;
   Takeshi(S4A123)`"That or is this some miracle mirror that shows the future?"`;
   Kid`"Huh? What're you talking about?"`;

});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A124)`"The only face showing in this mirror is mine."`;
   Takeshi(S4A125)`"That means I must be Sara's guy."`;
   Kid`"Idiot! There's no way you and Sara would get together!"`;

});
fgload({ id: 1, name: `KB04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A126)`"You said it, not me."`;
   Takeshi(S4A127)`"You said the guy in here was Sara's boyfriend, right?"`;
   Kid`"I'm not talking about your ugly reflection! I'm talking about the holographic image!"`;
   Takeshi(S4A128)`"And I'm saying there isn't a hologram in here, stupid!"`;
   Kid`"Look again!"`;

});
fgload({ id: 1, name: `KB05ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A129)`"I AM looking! I am staring! Look at my eyes! They're WIDE open!"`;
   `I looked over Takeshi's shoulder and peered into the pendant.`;
   Kid`"Look! It's right there!"`;
   `I pointed at the hologram of the man.`;

});
fgload({ id: 1, name: `KB08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A130)`"That's me, right?"`;
   Kid`"You're behind it! The guy inside the mirror is you!"`;
   Kid`"The guy floating in the front is who I mean!"`;

});
fgload({ id: 1, name: `KB04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A131)`"There's no floating guy anywhere..."`;
   Takeshi(S4A132)`"How many times are you gonna make me say it? There's nothing there!"`;

});
playSFX({ name: `SE00_03`, a1: 0, volume: 95 });
showTextbox();
text(() => {
   `You came as we were repeating this sad exchange.`;
   You(S4A133)`"What are you all worked up about? You two finished fixing the generator?"`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU07BDM`, name2: `KB04ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Kid`"You, come talk some sense into this idiot for me!"`;
   Takeshi(S4A134)`"That's my line!"`;
   You(S4A135)`"What happened?"`;
   `I showed You the hologram pendant.`;
   `And I used the lighter.`;

});
fgload({ id: 2, name: `KB05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A136)`"He says the face inside there is Sara's future man."`;
   Kid`"I didn't say that! You're twisting my words."`;

});
fgload({ id: 1, name: `YU06BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S4A137)`"Whoaa. Is that so?"`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU02BDM`, name2: `KB07ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   You(S4A138)`"Cause either that girl is going to need a sex change operation."`;
   You(S4A139)`"Or I will..."`;

});
fgload({ id: 1, name: `YU08BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S4A140)`"Yuck! Not for me!"`;
   Kid`"Huh?"`;

});
fgload({ id: 1, name: `YU05BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S4A141)`"I mean, this is just an ordinary mirror."`;
   You(S4A142)`"I don't think there's a hologram or anything in there."`;
   Kid`"It's a hologram! There's a guy's face in there!"`;

});
fgload({ id: 2, name: `KB05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   `I wondered how many times I would have to shout out this same line...`;
   Kid`"Look! He's right here! Right here!"`;
   `Now I looked over You's shoulder and pointed to the pendant.`;
   You`"........."`;
   Kid`"........."`;
   Takeshi`"........."`;

});
fgload({ id: 1, name: `YU03BDM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   You(S4A143)`"Hey, Kid, are you alright? Are you having another fit?"`;
   Kid`"You really, truly can't see it?"`;
   You(S4A144)`"Really."`;

});
fgload({ id: 2, name: `KB07ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Takeshi(S4A145)`"That's right."`;
   Kid`"You can't see the man's face?"`;

});
multifgload2({ id1: 1, id2: 2, name1: `YU17BDM`, name2: `KB13ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   `You and Takeshi looked at each other.`;
   `They couldn't see it...`;
   `Neither You nor Takeshi could...`;
   `I wondered why in the world not...?`;

});
hideTextbox();
monoColorOverlay({ interval: 24, color: BLACK });
stopBGM();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
delay({ interval: 90 });
l_choice = 0;
jump(`SS5A`);
