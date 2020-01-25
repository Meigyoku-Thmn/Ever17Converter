removeBG({ mode: WHITE, transition: 0 });
showDimOverlay();
hideTextbox();
NVL_Mode();
setSceneTitle({ index: 125 });
l_b0 = 0;
l_dayA = 0;
l_dayB = 0;
showTextbox();
text(() => {
   `

${noWait}`;
   `${center}${nextPage(0)}——May 7, 2034 (Sun)${nextPage(1)}`;
   `${center}${nextPage(0)}Time——11:17 a.m.${nextPage(1)}`;
   fadeClearPage();
});
hideTextbox();
removeBG({ mode: BLACK, transition: 2 });
dimOff_ac = 0;
closeDimOverlay();
playBGM({ num: 18, volume: 100 });
monoColorOverlay({ interval: 0, color: BLACK });
bgloadCrop({ name: `BG41A1`, transition: 26, x: 12, y: 12, hx: 775, hy: 581 });
showTextbox();
text(() => {
   `


${noWait}`;
   `${center}${nextPage(0)}'——Takeshi Kuranari——'${nextPage(1)}`;

});
setKomoreType(0);
showKomoreAnim();
setMonoColorOverlayFadeOutDuration(53);
fadeOutMonoColorOverlay();
unSkippableDelay(40);
playSFX({ name: `SE09_01L`, a1: 0, volume: 100 });
showTextbox();
text(() => {
   `${noWait}`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
ADV_Mode();
setDialogBoxColor(GREEN);
showTextbox();
text(() => {
   `I was in the center of a world of blue.`;
   `Headed back to the mainland...`;
   `There was nobody on the boat besides us.`;
   `Me, Hokuto, Tsugumi, Yubiseiharukana, Sora, Coco, Kaburaki, Chami, Pipi......`;
   `Oh, and two girls called Yubisei'aki'kana Tanaka and Sara Matsunaga.`;
   `Altogether nine people and two animals.`;
   `I slipped a short distance away from everyone, and leaned over the deck railing to look out at the expanse of ocean before me.`;
   `The May sun sparkled on the ocean.`;
   `Above, high above, stretched a clear blue sky.`;
   `The fresh, new sky looked so glossy and vivid that it might spill down to earth at any moment.`;
   `It was all that was reflected in my eyes.`;
   `The straight line of the horizon stretched into the distance, dividing the sea from the heavens.`;
   Takeshi(EOP000)`"So tranquil......"`;
   `I murmured to myself.`;
   `A solitary seagull traced a gentle arc in the sky as the wind carried it away.`;
   `The wind, full of the smell of the ocean, gently blew by me.`;
   Takeshi(EOP001)`"So peaceful..."`;
   `It felt as if I were dreaming...`;
   `Everything that I saw in the scene before me was exactly as it had been six days earlier.`;
   `Six days earlier......`;
   `For me, it had only been six days.`;
   `Not even a week had passed.`;
   `I had got separated from my friends that day...`;
   `And ended up waiting by myself for an elevator...`;
   `But...after surviving for six days, I had been sucked 17 years into the future......`;
   `And...`;

});
multifgload2({ id1: 1, id2: 2, name1: `HO02ADL`, name2: `SA09ADL`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(CEP000)`"Hey, Dad! Dadddy!"`;
   Hokuto(CEP001)`"Daaaad! Dad!"`;
   `I found out that I had a 16 year old daughter and son...`;
   `—It was a dream.`;
   `(Yeah, that's right, I must be dreaming!)`;
   `(If I'm not dreaming, there's no way this could be happening!)`;
   Sara(CEP002)`"Hey! Daaaad! Listen!"`;
   `The girl called Sara pulled up close to me.`;
   `The girl was wearing a high-school uniform, I'd never her seen before. She suddenly pulled up close and pressed her cheek against my arm.`;
   Takeshi`"........."`;

});
fgload({ id: 2, name: `SA01ADL`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(CEP003)`"Hey, look! Look at this..."`;
   Sara(CEP004)`"You know? I've been watching you ever since I was a little, baby girl."`;

});
showTextbox();
text(() => {
   `Sara stuck out a pendant with a mirror attached to it.`;
   `On the mirror side, there was nothing.`;
   `But...`;

});
showTextbox();
text(() => {
   Takeshi(CEP005)`"Oh, really..."`;
   Takeshi(CEP006)`"I don't really understand, but that's okay, daughter of mine!"`;
   Takeshi(CEP007)`"I can't believe how tall you've gotten!"`;

});
fgload({ id: 2, name: `SA02ADL`, x: 512, useAnim: true });
showTextbox();
text(() => {
   `Saying this I stroked her hair.`;
   `Since I had come this far, I decided there was no reason to hold back. `;
   `Besides, all of this was a dream...`;
   `And if I had a daughter this cute, what did it matter anyway?`;
   `There was no reason to resist the whole situation.... And as I was thinking that...`;

});
fgload({ id: 1, name: `HO03ADL`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Hokuto(CEP008)`"Hey! Dad, no fair!"`;
   Hokuto(CEP009)`"And you kept telling me 'Don't call me dad!'"`;
   Hokuto(CEP010)`"How come you act all dad-like to Sara!?"`;
   Takeshi`"........."`;

});
fgload({ id: 2, name: `SA01ADL`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(CEP011)`"Hey, Dad? Daaaaad?"`;
   Sara(CEP012)`"I want to go to Ninja Town for fun someday soon."`;
   Takeshi(CEP013)`"Ninja Town, eh....?"`;
   Takeshi(CEP014)`"Why not? Sounds good to me."`;

});
multifgload2({ id1: 1, id2: 2, name1: `HO04ADL`, name2: `SA02ADL`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Hokuto(CEP015)`"Hey! Stop ignoring me!"`;
   Hokuto(CEP016)`"How come you listen to everything Sara says!!?"`;
   Hokuto(CEP017)`"Why don't you listen to a thing I say?"`;
   Hokuto(CEP018)`"Well Dad? Why not?"`;
   Takeshi(CEP019)`"...I'm not ignoring you."`;
   Takeshi(CEP020)`"I just don't want to answer those kinds of questions..."`;

});
fgload({ id: 1, name: `HO03ADL`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Hokuto(CEP021)`"What do you mean, 'those kind of questions?'"`;
   Takeshi(CEP022)`"Those kind."`;
   Takeshi(CEP023)`"I don't answer meaningless questions."`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeFG({ id: 1, useAnim: false });
bgloadCrop({ name: `BG10A1`, transition: 26, x: 800, y: 125, hx: -400, hy: 300 });
setDialogBoxColor(GRAY);
closeKomoreAnim();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `


${noWait}`;
   `${center}${nextPage(0)}'——Tsugumi Komachi——'${nextPage(1)}`;

});
setMonoColorOverlayFadeOutDuration(53);
fadeOutMonoColorOverlay();
unSkippableDelay(40);
showTextbox();
text(() => {
   `${noWait}`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   Takeshi(CEP023)`"I don't answer meaningless questions."`;
   `I could hear his words coming from a distance, the same words I used to say 17 years ago.`;
   `In order to protect myself from the strong, May sunshine, I had stayed inside the boat.`;
   `I could see the three of them through the window.`;
   `Takeshi was on the deck over by the railing, talking to the two kids.`;
   `'I don't answer meaningless questions.'`;
   `Yes...`;
   `That's why I always kept quiet whenever he had asked me something.`;
   `There was so much I wanted to talk about.`;
   `I wanted to tell him about every single day that had passed these long 17 years.`;
   `But for the moment...`;
   `For the moment, watching him innocently playing with the children...was... enough for me.`;
   `Everything that had happened up until that point was meaningless.`;
   `He was there...right in front of me...and the two children were there...`;
   `There was nothing more I could have hoped for`;
   `I had found happiness - I was immersed in it, drowning in it, intoxicated by it.`;
   `That was truly how I felt.`;
   `It seemed to me that all of the days filled with struggle and sadness, had been for that day, that moment...`;
   `Hokuto and Sara were on both sides of him, and even when he tried to throw them off, they clung to him.`;
   `I absently petted Chami, who was riding on my shoulder, as I watched the scene before me.`;
   `Him—Takeshi Kuranari`;

});
hideTextbox();
monoColorOverlay({ interval: 18, color: WHITE });
bgload({ name: `EV_TU16B`, transition: 26 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
showTextbox();
text(() => {
   Takeshi(C7A152)`"So live!"`;
   Takeshi(C7A153)`"As long as you're alive, live!"`;
   Takeshi(C7A154)`"Don't worry..."`;
   Takeshi(C7A155)`"I-"`;
   Takeshi(C7A156)`"I'm not going to die."`;

});
hideTextbox();
monoColorOverlay({ interval: 18, color: WHITE });
bgloadCrop({ name: `BG10A1`, transition: 26, x: 800, y: 125, hx: -400, hy: 300 });
setMonoColorOverlayFadeOutDuration(38);
fadeOutMonoColorOverlay();
unSkippableDelay(25);
showTextbox();
text(() => {
   `And after saying that, he jumped from our 'taxi,' that stupid man.`;
   `Stupid, man...`;
   `But...he had kept his promise.`;
   `So there was something I had to tell him.`;
   `Going outside...wrapped in my '100 percent UV protective clothing,' I...`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
setKomoreType(0);
showKomoreAnim();
bgloadCrop({ name: `BG41A1`, transition: 26, x: 12, y: 12, hx: 775, hy: 581 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `I walked over to where he was.`;
   `For some reason my legs were shaking and my heart was beating so hard it felt like it would burst.`;
   `Being careful that he wouldn't notice the deep breaths I was taking, I went and stood in front of him.`;

});
fgload({ id: 2, name: `TA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Tsugumi(CEP024)`"Takeshi..."`;
   Tsugumi(CEP025)`"Welcome home."`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `TA02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Suddenly, he pulled me close.`;
   `Into his strong arms, and solid chest...`;
   `My body was wrapped in a heat, which threatened to melt me, and for one moment my heart had stopped beating.`;
   Takeshi(CEP026)`"Hey, I'm back, Tsugumi."`;
   Takeshi(CEP027)`"Sorry...for taking so long..."`;
   `He whispered...`;
   Takeshi(CEP028)`"You know..."`;
   Takeshi(CEP029)`"You are as cute as ever..."`;
   Tsugumi(CEP030)`"What? Eh? Really? St-stop it...I..."`;

});
fgload({ id: 2, name: `TA01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(CEP031)`"I can't help it, you're so adorable."`;
   Tsugumi(CEP032)`"What's with you all of the sudden..."`;
   Takeshi(CEP033)`"You're so cute, I could just eat you up."`;
   Tsugumi(CEP034)`"S-stop it...what...are you talking about...?"`;

});
fgload({ id: 2, name: `TA02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(CEP035)`"Uh-huh, you sure are charming."`;
   Takeshi(CEP036)`"I suppose that's why they call you Chami...it's a good name."`;
   Tsugumi(CEP037)`"...What!?"`;

});
removeFG({ id: 2, useAnim: true });
fgload({ id: 2, name: `TA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `I forcefully pried myself away from Takeshi's chest.`;
   `His eyes were leveled at my shoulder.`;
   `I looked over to see what he was staring at.`;
   `Chami was busy grooming himself with jerky movements using both of his front paws...`;
   Tsugumi(CEP038)`"I can't believe it..."`;
   Tsugumi(CEP039)`"You are such a jerk, Takeshi!"`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `


${noWait}`;
   `${center}${nextPage(0)}'——Sara Matsunaga——'${nextPage(1)}`;

});
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: true });
fgload({ id: 1, name: `HO15ADL`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(53);
fadeOutMonoColorOverlay();
unSkippableDelay(40);
showTextbox();
text(() => {
   `${noWait}`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   Tsugumi(CEP039)`"You are such a jerk, Takeshi!"`;
   `Mama let out a yell, and turning around...went, back inside the boat, tail wagging.`;
   `She moved unexpectedly, and Chami, who had been riding on her shoulder, lost his balance and fell to the deck.`;
   Takeshi(CEP040)`"Hey, Tsugumi, what's wrong?"`;
   `Dad went chasing after mom.`;
   `—BAM—Wham!! Bang! Crash! Craaaaaash!`;
   `A series of frightful sounds ensued.`;
   `I looked over on the other side of the window, and could see mama wildly brandishing the head of the costume she'd been wearing.`;
   `She'd had on one of the lemur (fox-monkey) costumes, in order to stay out of the sun.`;
   `I could see father's back as he was desperately trying to calm mother down...`;

});
fgload({ id: 1, name: `HO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `Hokuto and I looked at each other and started laughing.`;
   `And Chami...?`;
   `He was calmly acting as if nothing had happened, and just continued cleaning himself.`;
   `I leaned down to put Chami in my palm and stood back up.`;
   `Mom had already told me about this little hamster's ordeal.`;
   `When I thought about how Chami had lived through the same circumstances we had, it made my heart warm.`;
   `I could feel the beating of his tiny heart in my palm.`;
   `*thump* *thump* His heartbeat was tiny, but consistent...`;
   `It goes without saying, but I thought to myself—'Chami is living each moment to the fullest.'`;
   Sara(CEP041)`"Hey? What do you think is going to happen to us after this?"`;

});
fgload({ id: 1, name: `HO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Hokuto(CEP042)`"What do you mean...?"`;
   Sara(CEP043)`"With Leiblich..."`;

});
fgload({ id: 1, name: `HO03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Sara(CEP044)`"You don't think Leiblich will come after us do you...?"`;
   //You'haru'
   You_haru_(CEP045)`"We'll be alright, Sara....Don't worry, okay?"`;
   `Someone was talking to us.`;
   `Looking around, I saw...`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `HO03ADM`, name2: `YH01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Sara(CEP046)`"Oh. Hi Nakkyu...no wait, uh..."`;
   Sara(CEP047)`"Ms. Tanaka—Yubiseiharukana, right?"`;
   `Ms. Tanaka nodded slightly.`;

});
fgload({ id: 1, name: `HO17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   `Hokuto asked Ms. Tanaka -`;
   Hokuto(CEP048)`"What do you mean we'll be alright?"`;

});
fgload({ id: 2, name: `YH11ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   //You'haru'
   You_haru_(CEP049)`"What I mean is..."`;
   `And saying that, she took out the newspaper that had been tucked into her pocket, and handed it to my brother.`;
   `He opened it up.`;
   `I nestled up against his shoulder and looked at the front page headline.`;

});
hideTextbox();
showDimOverlay();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `'Leiblich Pharmaceutical, responsible for outbreak of Tief Blau virus!?'`;
   `'Compulsory investigation to begin in a day or two.'`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `It was learned that the Tief Blau virus (TB), which has ravaged the world since 2017,`;
   `was manufactured by the Frankfurt-based pharmaceutical giant Leiblich Pharmaceutical`;
   `when a whistleblower from the Japanese-German joint-managed research facility came forward earlier this week.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Spurred by these allegations, the Metropolitan Police Department is expected to open a criminal investigation`;
   `that will focus on Leiblich's branch offices as well as related research facilities.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Leiblich Pharmaceutical has for some time been conducting research and development of TB for the purpose of manufacturing a biological weapon.`;
   `An outbreak of the virus is rumored to have occurred in their research facility around May 1, 2017.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Leiblich not only sought to cover up the accident, but also continued research into TB without the authorization of the Ministry of Health under conditions of extreme secrecy, according to the whistleblower.`;
   `The location of the company's research institute has not yet been confirmed.`;
   `Numerous other doubts involving Leiblich, including charges that it wrongfully detained citizens for the purpose of human experiments, have been raised and are to be investigated.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `In order to fully uncover the facts behind these allegations and reported incident, the Metropolitan Police Department is requesting cooperation from authorities in Germany, where Leiblich's head office is located.`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
ADV_Mode();
dimOff_ac = 0;
closeDimOverlay();
fgload({ id: 2, name: `YH01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   //You'haru'
   You_haru_(CEP050)`"Leiblich has a lot of influence, even political clout at the national level.. so laying the groundwork for this was really tough, but..."`;
   `Ms. Tanaka took out an old marker, and scratched it against her cheek.`;
   Hokuto(CEP051)`"So...the whistleblower mentioned in this article is..."`;

});
fgload({ id: 2, name: `YH12ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   //You'haru'
   You_haru_(CEP052)`"That's right, it was me."`;
   //You'haru'
   You_haru_(CEP053)`"Actually, I leaked this to the police and the press quite a long time ago."`;
   //You'haru'
   You_haru_(CEP054)`"But, there was a lot of behind the scenes maneuvering..."`;
   //You'haru'
   You_haru_(CEP055)`"So I told them, 'What ever happens, DON'T move before May 7th!'"`;
   Sara(CEP056)`"You mean in order to rescue dad, and that girl Coco?"`;

});
fgload({ id: 2, name: `YH01ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   //You'haru'
   You_haru_(CEP057)`"That's right."`;
   Sara(CEP058)`"Well...uh..."`;
   Sara(CEP059)`"That means they won't come after us! And we're free!"`;

});
multifgload2({ id1: 1, id2: 2, name1: `HO02ADM`, name2: `YH01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   //You'haru'
   You_haru_(CEP060)`"Yep."`;
   //You'haru'
   You_haru_(CEP061)`"So, there's nothing to worry about, okay?"`;
   `Ms. Tanaka smiled kindly.`;
   `Just then...`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `YU18ADM`, name2: `YH01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   //You'aki'
   You_aki_(CEP062)`"'There's nothing to worry about'? How can you say that?"`;
   //You'aki'
   You_aki_(CEP063)`"Do you have any clue who you're talking to?"`;

});
fgload({ id: 2, name: `YH13ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   //You'haru'
   You_haru_(CEP064)`"You..."`;

});
fgload({ id: 1, name: `YU17ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   //You'aki'
   You_aki_(CEP065)`"Do you have any idea how...how hard a time that Mayo's been through...have you stopped to think about that, mother!?"`;
   //You'haru'
   You_haru_`"........."`;
   Hokuto`"........."`;
   Sara`"........."`;

});
fgload({ id: 1, name: `YU18ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   //You'aki'
   You_aki_(CEP066)`"Come here mom...for a second."`;
   //You'aki'
   You_aki_(CEP067)`"I have something to tell you."`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
multiremoveFG({ id1: 1, id2: 2, id3: 0, useAnim: false });
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `


${noWait}`;
   `${center}${nextPage(0)}'——Yubiseiharukana Tanaka——'${nextPage(1)}`;

});
setMonoColorOverlayFadeOutDuration(53);
fadeOutMonoColorOverlay();
unSkippableDelay(40);
showTextbox();
text(() => {
   `${noWait}`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   //You'aki'
   You_aki_(CEP067)`"I have something to tell you."`;

});
showTextbox();
text(() => {
   `And saying that, my daughter tugged firmly on my arm and led me over to a corner of the deck.`;

});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //You'haru'
   You_haru_(CEP068)`"What do you want to talk about?"`;
   //You'aki'
   You_aki_(CEP069)`"You already know, right?"`;
   //You'aki'
   You_aki_(CEP070)`"In 2025, you started working at LeMU. To conduct research into the third eye..."`;
   //You'aki'
   You_aki_(CEP071)`"I mean, in order to save the real Takeshi Kuranari, and that girl called Coco..."`;
   //You'haru'
   You_haru_`"........."`;
   //You'aki'
   You_aki_(CEP072)`"So, why?"`;
   //You'aki'
   You_aki_(CEP073)`"If you were working at LeMU, you could have found a way to rescue Mayo, who's been locked up at Leiblich's facility all this time."`;
   //You'aki'
   You_aki_(CEP074)`"You could have reunited Tsugumi and her kids, right?"`;

});
fgload({ id: 1, name: `YU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //You'aki'
   You_aki_(CEP075)`"So, why didn't..."`;
   //You'haru'
   You_haru_(CEP076)`"Well..."`;
   `It had to be done to save Takeshi, and Coco.`;
   `We didn't dare to change history.`;
   `Because I had made a promise to Blick Winkel in 2017...`;
   //You'aki'
   You_aki_(CEP077)`"So...you aren't going to tell me anything, are you?"`;
   //You'aki'
   You_aki_(CEP078)`"It's always like this.... You always decide everything..."`;
   //You'haru'
   You_haru_(CEP079)`"Even if you couldn't trust me enough to explain things before all of this happened..."`;

});
fgload({ id: 1, name: `YU04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //You'aki'
   You_aki_(CEP080)`"You didn't have to lie to me!"`;
   //You'aki'
   You_aki_(CEP081)`"You've lied to me these 18 years!"`;
   `(Yes, I have...)`;
   `(And there is nothing I can say to apologize...)`;

});
fgload({ id: 1, name: `YU07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //You'aki'
   You_aki_(CEP082)`"So, I don't want you to lie to me...or hide anything...I want to know everything..."`;
   //You'aki'
   You_aki_(CEP083)`"There are still things you haven't told me yet, right?"`;
   //You'aki'
   You_aki_(CEP084)`"Like who my real dad and mom were..."`;

});
fgload({ id: 1, name: `YU03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //You'aki'
   You_aki_(CEP085)`"Tell, me... please..."`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: BLACK });
removeFG({ id: 1, useAnim: false });
closeKomoreAnim();
showTextbox();
text(() => {
   `I didn't hesitate.`;
   `I told her about her father, Yoichi, and mother, Yukie...`;
   `I told her the truth - all of it.`;

});
showFilter2();
unSkippableDelay(1);
bgload({ name: `BG34A1`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   `——May 6, 2017`;
   `Because Coco was sick, we had all headed to the IBF research lab.`;
   `While Takeshi, the young Kaburaki and Tsugumi were searching around the research facility, I stayed behind in the examination room.`;
   `Coco and the researcher were lying in the capsule pods.`;
   `The researcher, who was fighting to stay conscious as the virus consumed his body, told me this - `;
   Researcher(CEP086)`"...You...I never dreamed...that we would meet again...in a place like this..."`;
   `That's right, he was my father - Y.T. - Yoichi Tanaka.`;
   `As he was lying there in agony, he explained to me what had happened.`;
   `.................`;
   `2000 A.D.`;
   `My father was a researcher on the LeMMIH development project. One day, by accident, he discovered that Leiblich was developing the TB Virus.`;
   `TB is a potent virus, which has an exceedingly high mortality rate, and Leiblich was planning to sell it to military buyers around the world.`;
   `Father, whose sense of justice was stronger than anyone I have ever known, appealed to the company to stop development of the virus immediately.`;
   `But of course they refused...That being the case, my father made up his mind...`;
   `He hacked into the highly protected company database, collected evidence, and prepared to leak the information to the press.`;
   `However...`;
   `Leiblich found out before he could make his move and put him in a situation he could not escape.`;
   `They threatened my father, telling him: 'Should you escape from here, your wife and child will probably die...in an 'unfortunate' car accident.'`;
   `And to my mother, Yukie, Leiblich said...`;
   `'Your husband is missing, after a highly tragic accident.`;
   `When making his rounds on the LeMU premises he slipped and fell into the ocean.`;
   `We are doing everything we can to search the surrounding waters, but his remains still have not been located.'`;
   `My mother believed them.`;
   `It was the summer of my first year.`;
   `.......................................`;
   `Time passed and it was the year 2017.`;
   `My father, who had been maintaining the computer system for IBF, was caught up in the TB outbreak.`;
   `As all of the researchers fled, one-by-one, my father stayed in IBF...because he was worried about me.`;
   `My father knew I was working at LeMU.`;
   `And my father...`;
   `Right in front of my eyes...`;
   `After enduring one disaster after another and gasping in pain...`;
   `While clawing at his throat...`;
   `He struggled until the end to say...`;
   Researcher(C6A086)`"...My daughter..."`;
   Researcher(C6A087)`"Daughter...take care...of her..."`;
   `His last words...`;

});
hideTextbox();
monoColorOverlay({ interval: 18, color: BLACK });
dimOff_ac = 0;
closeDimInAndOutAndFilterAnim();
setKomoreType(0);
showKomoreAnim();
bgloadCrop({ name: `BG41A1`, transition: 26, x: 12, y: 12, hx: 775, hy: 581 });
fgload({ id: 1, name: `YU13ADL`, x: 320, useAnim: false });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   //You'aki'
   You_aki_`"............"`;
   //You'haru'
   You_haru_(CEP087)`"Because of that accident, the TB virus broke out, causing terrible suffering all over the world..."`;
   //You'haru'
   You_haru_(CEP088)`"But...Leiblich Pharmaceutical, concealed everything. The truth about the virus, the research facility - everything - was locked away."`;

});
hideTextbox();
closeKomoreAnim();
showDimOverlay();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `And the press only reported that it was 'A deadly virus of unknown origin.'`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `Even the experts had no idea where the disease really came from.`;
   `However, the incubation period was very short, so even though the death rate was high, in many cases the carrier died before infecting others.`;
   `So while the TB virus spread rapidly for a time, by 2019, two years after the accident, the pace and scale of the disease's destruction gradually waned.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `But that doesn't mean there weren't victims.`;
   `The number of people that the virus killed is said to have reached several tens of thousands.`;
   `And...`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `One of them was my mother, Yukie.`;
   `It was 15 years ago, that my mother caught TB and it robbed her of her life.`;
   `My sadness, anger and hatred, all came together then.`;
   `I swore that I would get revenge on Leiblich...`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `I infiltrated LeMU, and at the same time started formulating a plan to rescue Takeshi and Coco, who were trapped in the research facility.`;
   `And the person who helped me to do that was Ryogo Kaburaki.`;
   `We have spent every moment for the last 17 years preparing for this.`;
   `Yes...it was the only thing that I've lived for up until now.`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `To make Leiblich pay for taking my mother and father from me and to save my friends Takeshi and Coco.`;
   `And in order to do that, we needed to discover the third eye - Blick Winkel.`;
   `Without his help, there was nothing we could do...`;
   `There was no other way that we, who were living in this dimension, could go back in time...`;
   `.................................`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `That was how the whole plan had been set in motion.`;
   `All toward May 1, 2034.`;
   fadeClearPage();
});
hideTextbox();
setKomoreType(0);
showKomoreAnim();
dimOff_ac = 0;
closeDimOverlay();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   `After finishing my explanation, I let out a big sigh.`;
   `Biting on the nail of her thumb, my daughter looked up at the sky`;
   //You'haru'
   You_haru_(CEP089)`"See, look at that face....I knew you wouldn't believe me."`;

});
fgload({ id: 1, name: `YU05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `She looked at me.`;
   //You'haru'
   You_haru_(CEP090)`"But, then again...who would...?"`;
   //You'haru'
   You_haru_(CEP091)`"But...it doesn't change the fact that it's the truth..."`;
   `I reached out to stroke her hair.`;
   `She stared at me blankly...`;
   `Looking just like I did 17 years ago...`;
   `Reckless, full of fire, pure - to the point of being dangerous - and unable to control her emotions.`;
   `Her innocent eyes...had seen none of the evil and corruption in this world.`;
   `Looking into her eyes, I could read everything she was thinking.`;
   `She wasn't mad. She wasn't unhappy.`;
   `Just afraid to accept the truth...she didn't know how to handle it...and was scared and embarrassed by that fact.`;
   `So I reached out and held her closely.`;
   `'There's no need for you to say anything' - I thought this quietly to myself.`;

});
fgload({ id: 1, name: `YU07ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //You'aki'
   You_aki_(CEP092)`"Mom..."`;
   //You'aki'
   You_aki_(CEP093)`"I...understand what you're trying to tell me..."`;
   `She whispered this quietly in my ear.`;
   //You'aki'
   You_aki_(CEP094)`"But...there's something I have to know."`;
   //You'haru'
   You_haru_(CEP095)`"What?"`;
   //You'aki'
   You_aki_(CEP096)`"What do I mean to you?"`;
   //You'haru'
   You_haru_(CEP097)`"Ha, ha."`;
   `I laughed without thinking and replied... `;
   //You'haru'
   You_haru_(CEP098)`"You are everything to me."`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeFG({ id: 1, useAnim: false });
fgload({ id: 1, name: `YH02ADL`, x: 320, useAnim: true });
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `


${noWait}`;
   `${center}${nextPage(0)}'——Yubiseiakikana Tanaka——'${nextPage(1)}`;

});
setMonoColorOverlayFadeOutDuration(53);
fadeOutMonoColorOverlay();
unSkippableDelay(40);
showTextbox();
text(() => {
   `${noWait}`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   //You'haru'
   You_haru_(CEP098)`"You are everything to me."`;
   `Mom said these words to me.`;
   `I had wanted her to tell me, 'you are my daughter,' but...`;
   `But, for some reason I didn't bother me.`;
   `Another voice inside my head murmured.`;
   `'Shouldn't you be furious?' and 'You should slap her across the face'..`;
   `But for some reason I couldn't get angry.`;
   `I relaxed against my mother, who held me tightly, and I could only feel dizzy from her warmth...`;
   `All of my normal reactions, such as lashing out like a wild animal and my sudden mood swings...`;
   `The warmth of her hug, took all of that away...`;
   `"Mom..."`;
   `When it came down to it, I still thought of her as my mother.`;
   `There was an instinctive 'itch,' that transcended my basic reason....It was beyond my ability to control...`;
   `In the end, no matter what anyone said, the woman in front of me was my mother.`;
   `She wasn't much of a mother, but to me she was the only mother I had.`;
   `And that's all there was too it.`;
   `At that moment it occurred to me? I only differed from other people in the way that I was born.`;
   `..............`;
   `I had been told since I was a little girl that there are lots of things in this world that are hard to believe.`;
   `In junior high and high school, all of my friends loved to talk about all kinds of strange things.`;
   `Psychic phenomena, supernatural powers, UFOs, UMAs, super-ancient civilizations, urban myths, curses, fortune-telling, miracles, mysteries....`;
   `I thought I had dismissed all of these things as girlish fantasy...`;
   `But something...had now changed slightly.`;
   `I mean, my existence itself was something hard to explain...`;
   `If I thought about the fact that I myself 'this girl called You,' was somewhat of a mystic entity...`;
   `Then ectoplasm, cattle mutilations, Rip Van Winkle, The Lemurian Civilization...`;
   `All of these seemed like normal, everyday things.`;
   `Even the 'Third Eye'...`;
   `................`;

});
removeFG({ id: 1, useAnim: true });
showTextbox();
text(() => {
   `And while those thoughts drifted through my head, my mother quietly went inside of the boat.`;
   `Left by myself in the corner of the deck, I basked in the lingering warmth that remained on my skin.`;
   `The boat slowly rocked back and forth as it cut through the waves.`;
   `The smell of the ocean quietly wafted by carried by the sea breeze.`;
   `Soon....`;

});
fgload({ id: 1, name: `HO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Hokuto(CEP099)`"Oh, hey, You...you been here all along? I've been looking for you."`;
   `The Kid, Hokuto came walking over to me.`;

});
fgload({ id: 1, name: `HO01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Hokuto(CEP100)`"Actually, there was something that I wanted to ask you..."`;
   //You'aki'
   You_aki_(CEP101)`"Ask me?"`;
   `Hokuto nodded deeply and said.`;

});
fgload({ id: 1, name: `HO02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Hokuto(CEP102)`"I've been thinking I want to study archaeology when I go to college..."`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
setDialogBoxColor(BLUE);
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: false });
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `


${noWait}`;
   `${center}${nextPage(0)}'——Hokuto——'${nextPage(1)}`;

});
setMonoColorOverlayFadeOutDuration(53);
fadeOutMonoColorOverlay();
unSkippableDelay(40);
showTextbox();
text(() => {
   `${noWait}`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   Hokuto(CEP102)`"I've been thinking I want to study archaeology when I go to college..."`;
   `I told to You what had been on my mind.`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //You'aki'
   You_aki_(CEP103)`"Eh? Why that again...?"`;
   Hokuto(CEP104)`"Well, because I want to study more about the third eye."`;
   `You was silent.`;
   `'Huh!? What are you stupid!? There's no such thing as the third eye!'`;
   `I thought for sure that she would come back with something like that, so I was caught off guard by her reply.`;
   //You'aki'
   You_aki_(CEP105)`"And? What did you want to ask me about?"`;
   Hokuto(CEP106)`"Ah, uh, well..."`;
   Hokuto(CEP107)`"I've already made up my mind that I'm going to study archaeology, but..."`;
   Hokuto(CEP108)`"Still...I don't really know that much about it..."`;
   Hokuto(CEP109)`"Like what kinds of things I should do to prepare, or if there are any books you know that are good primers on the subject."`;
   Hokuto(CEP110)`"So I was hoping that you could give me some advice..."`;

});
fgload({ id: 1, name: `YU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //You'aki'
   You_aki_(CEP111)`"Well, I don't know what kind of advice I can give."`;
   //You'aki'
   You_aki_(CEP112)`"I only just started college, and I've only really taken my 'reqs.' so..."`;
   Hokuto(CEP113)`"'Reqs.?'"`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //You'aki'
   You_aki_(CEP114)`"Required classes."`;
   //You'aki'
   You_aki_(CEP115)`"In order to major in archaeology, you've got to be a junior."`;
   Hokuto(CEP116)`"Oh..."`;
   //You'aki'
   You_aki_(CEP117)`"I'm sorry but I really can't tell you anything..."`;
   //You'aki'
   You_aki_(CEP118)`"Oh, but maybe there is one thing."`;

});
fgload({ id: 1, name: `YU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //You'aki'
   You_aki_(CEP119)`"You should probably study something else."`;
   Hokuto(CEP120)`"Huh? Why?"`;
   //You'aki'
   You_aki_(CEP121)`"Archaeology is WAY more boring than you are probably thinking."`;
   //You'aki'
   You_aki_(CEP122)`"It's a lot different than what they show in the movies."`;

});
fgload({ id: 1, name: `YU01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //You'aki'
   You_aki_(CEP123)`"And besides, you know what?"`;
   //You'aki'
   You_aki_(CEP124)`"If you want to study about the third eye, you are better off attacking it from the direction of philosophy or psychology."`;
   //You'aki'
   You_aki_(CEP125)`"Besides, archaeology is a subject that studies HUMAN history."`;
   Hokuto(CEP126)`"But...it's okay! I've already made up my mind!"`;
   Hokuto(CEP127)`"I've been thinking I could approach the study of the third eye from angle of human history."`;

});
fgload({ id: 1, name: `YU08ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //You'aki'
   You_aki_(CEP128)`"There you go, being difficult as always."`;
   //You'aki'
   You_aki_(CEP129)`"I think the real reason you want to study it, is so that you can be in the same field as me."`;
   //You'aki'
   You_aki_(CEP130)`"I mean it's obvious that you like me..."`;
   Hokuto(CEP131)`"Yeah, you're probably right."`;

});
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `I told her point-blank how I felt.`;

});
fgload({ id: 1, name: `YU07ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   `And it seemed like my reply caught her off-guard.`;
   Hokuto(CEP132)`"Part of me feels like choosing to study archaeology was already half-decided by destiny... so I don't have a choice."`;
   //You'aki'
   You_aki_(CEP133)`"By destiny?"`;
   Hokuto(CEP134)`"Yeah."`;
   Hokuto(CEP135)`"In another space-time continuum, I'm destined to walk that path in the future."`;
   //You'aki'
   You_aki_(CEP136)`"...huh?"`;
   Hokuto(CEP137)`"I don't think you'll understand it, no matter how much I explain it anyway."`;
   Hokuto(CEP138)`"But I know what I saw."`;
   Hokuto(CEP139)`"In that future, you and I were going out, and..."`;

});
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //You'aki'
   You_aki_(CEP140)`"...What!?"`;
   Hokuto(CEP141)`"So I'm pretty sure that in this time, you and I are destined to be together as well."`;

});
fgload({ id: 1, name: `YU04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //You'aki'
   You_aki_(CEP142)`"H-h-h-hey, wait a second Kid! You're getting ahead of yourself here!"`;
   //You'aki'
   You_aki_(CEP143)`"I don't know much about fate but...things like that are decided with both people's consent. AFTER that happens you start going out."`;
   Hokuto(CEP144)`"Yeah...Okay, I'll say it right now."`;

});
fgload({ id: 1, name: `YU06ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   //You'aki'
   You_aki_(CEP145)`"N-now!?"`;
   Hokuto(CEP146)`"Yeah..."`;
   Hokuto(CEP147)`"Yubiseiakikana..."`;
   Hokuto(CEP148)`"Would you go out with me?"`;
   Hokuto(CEP149)`"Because, I'm crazy about you."`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
setDialogBoxColor(GRAY);
removeFG({ id: 1, useAnim: false });
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `


${noWait}`;
   `${center}${nextPage(0)}'——Ryogo Kaburaki——'${nextPage(1)}`;

});
setMonoColorOverlayFadeOutDuration(53);
fadeOutMonoColorOverlay();
unSkippableDelay(40);
showTextbox();
text(() => {
   `${noWait}`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   `"Because, I'm crazy about you."`;
   `It was 2017... I was still 15.`;
   `I was stuck in LeMU, in a total state of confusion, with no memory, and had even forgotten my name, Ryogo Kaburaki.`;
   `I was 15 years old —all I wanted at that time was stability.`;
   `Young as I was, I was overcome with amnesia, and even doubts as to whether my existence would fade away.`;
   `In the midst of my chaos, it was her innocent smile that helped thaw my frozen heart.`;
   `I fell for her right away.`;
   `All I had to do was see her smile, that's all it took, and my fear disappeared, blown away like leaves falling off a tree in autumn.`;
   `Although I was still uncertain about who I was, her uniqueness helped me turn my eyes away from the turmoil inside of me to the world around me.`;
   `Perhaps it was because of my uncertainty.`;
   `I suppose that I might have been grasping for my identity through the love that I felt for her.`;
   `I was an empty shell at that time.`;
   `Flowing into that void was her simple, pure smile, innocence and her total lack of artifice.`;
   `From that point on - for six days - she was in my thoughts constantly. I found myself looking at her all the time.`;
   `I didn't have the courage to tell her. But it was enough for me just to see her.`;
   `That's how fond I was of her.`;
   `I loved her.`;
   `Coco Yagami...`;
   `..................................`;
   `And then May 6th, the fateful day arrived.`;
   `I had come down with TB, and when the rescue team found me, I had lost consciousness.`;
   `By the time I found out that Coco had been left behind in the research facility, a few days had already passed.`;
   `When You (Yubiseiharukana) told me what had happened, I was shocked.`;
   `And at the same time I thought 'I've got to go save her!' I didn't even wait for You to finish the rest of her story, I just ran outside.`;
   `You caught up with me, and started telling me about things about the third eye, the fourth dimension, the past and future, but none of it made sense.`;
   `"17 years from now, you have to go back to LeMU. You'll return as Takeshi Kuranari."`;
   `"Unless we can trick Blick Winkel, wake him up and bring him to our world, we'll never save Coco and Takeshi."`;
   `'So please...help me?' —that was what You asked of me.`;
   `It took a few more months for me to become fully convinced.`;
   `............`;
   `All I wanted to do was save Coco.`;
   `If she'd be alright, I didn't mind the danger.`;
   `Even if I was despised, blamed, criticized, even ridiculed, none of that mattered to me.`;
   `I...just wanted...to see...Coco's smile again...`;
   `Still, there was Takeshi to consider as well.`;
   `I respected him greatly.`;
   `'He was brave enough to sacrifice his life to save the woman that he loved.'`;
   `For a 15-year-old like me, Takeshi was a role model.`;
   `I swore that I would save Coco and Takeshi, no matter what it took.`;
   `..................................`;
   `17 years later—`;
   `For 17 years, You and I had spent every minute, every second putting our plan in motion.`;
   `Yes...I had lived for this day.`;
   `Just six days....Coco and I had only spent six days together. `;
   `But in those 17 years, not a moment went by that I didn't think about her.`;
   `"Because I love her—"`;
   `That was the only reason I had been able to fool everyone.`;
   Coco(CEP150)`"Heeey, Kiddo, Kiddo, Kiddo."`;
   `My heart leaped.`;
   `She was calling to me...`;
   `I couldn't turn around.`;
   `I stood there frozen, even forgetting to breathe.`;

});
fgload({ id: 1, name: `CO04ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(CEP151)`"Hey! What are you doing here all by yourself!?"`;
   `Coco rapped me on the head, and peeked around at my face.`;

});
fgload({ id: 1, name: `CO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(CEP152)`"Come on and join everyone! It's no fun by yourself, right?"`;
   Kaburaki(CEP153)`"I..."`;

});
fgload({ id: 1, name: `CO06ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(CEP154)`"Huh? You're not...worried about something are you?"`;
   Kaburaki`"........."`;

});
fgload({ id: 1, name: `CO05ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(CEP155)`"Are you feeling bad that you lied to everyone?"`;
   Kaburaki`"........."`;

});
fgload({ id: 1, name: `CO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(CEP156)`"You don't have to worry about that."`;

});
fgload({ id: 1, name: `CO01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(CEP157)`"Besides, if you hadn't been able to trick Blick Winkel, Takepyon and me wouldn't be here right now."`;
   Coco(CEP158)`"We owe you our lives, right?"`;
   Coco(CEP159)`"You don't have to explain a thing..."`;
   Coco(CEP160)`"We're all grateful to you. Nobody here blames you."`;
   Kaburaki(CEP161)`"You really think so?"`;
   Coco(CEP162)`"Of course I do."`;

});
fgload({ id: 1, name: `CO02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Coco(CEP163)`"Okay? So, come on!"`;
   Coco(CEP164)`"Everybody's waiting to hear your voice, kiddo."`;
   Coco(CEP165)`"Waiting and waiting and waiting..."`;
   Coco(CEP166)`"And after that we're going to celebrate."`;
   `Coco was laughing.`;
   `The smile that I had waited 17 years to see was shining right in front of me.`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
removeFG({ id: 1, useAnim: false });
fgload({ id: 1, name: `TA01ADM`, x: 320, useAnim: false });
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `


${noWait}`;
   `${center}'——Sora Akanegasaki——'${nextPage(1)}`;

});
setMonoColorOverlayFadeOutDuration(53);
fadeOutMonoColorOverlay();
unSkippableDelay(40);
showTextbox();
text(() => {
   `${noWait}`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   `The smile that I had waited 17 years to see was shining right in front of me.`;
   `It made me dizzy to look at it.`;
   `An electronic rhythm pulsed through my body - the excessive voltage throwing my logic circuits out of order.`;
   `It was a pain that I had experienced before.`;
   Takeshi(CEP167)`"Hey, Sora?"`;
   Sora`"........."`;
   Takeshi(CEP168)`"Hey, Sora!"`;
   Sora`"........."`;

});
fgload({ id: 1, name: `TA04ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(CEP169)`"Hey! Are you listening to me?"`;
   Sora(CEP170)`"...Huh?...Um, what were you talking about again?"`;

});
fgload({ id: 1, name: `TA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(CEP171)`"This here...Pipi."`;
   Takeshi(CEP172)`"He stopped moving all of a sudden. I just thought maybe you could take a look at him."`;
   `Takeshi lifted up Pipi, and stuck him out in front of me.`;
   Sora(CEP173)`"All of a sudden you say? Any reason you can think of...?"`;
   Takeshi(CEP174)`"Uumm, maybe."`;

});
fgload({ id: 1, name: `TA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(CEP175)`"Tsugumi? She started thrashing around in the cabin, and..."`;
   Takeshi(CEP176)`"I tried to pin her down, but she threw me off...."`;
   Takeshi(CEP177)`"And when I went down, this little guy happened to be there, and..."`;
   Sora(CEP178)`"I landed right on top of him. Maybe that's what could've caused it?"`;
   Takeshi(CEP179)`"Yup. After that, he stopped moving..."`;
   Sora(CEP180)`"Let me take a look."`;
   `I took Pipi from Takeshi, and started a diagnostic on him.`;
   Sora(CEP181)`"That's strange...I don't see anything wrong with him."`;
   Sora(CEP182)`"Maybe his battery ran out?"`;

});
fgload({ id: 1, name: `TA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(CEP183)`"Whew, what a relief."`;
   Takeshi(CEP184)`"If they thought I'd broken him, Coco, You, and her daughter would've been furious at me."`;
   Sora(CEP185)`"Well I would've been too."`;
   `Upset that he hadn't included me, I continued...`;
   Sora(CEP186)`"I'm fond of Pipi too, you know."`;
   Sora(CEP187)`"I don't even think 'fond' describes it. You might say Pipi and I are connected on a deeper level."`;
   Sora(CEP188)`"17 years ago..."`;
   Sora(CEP189)`"If Pipi hadn't picked up my terabyte disk, I wouldn't be here right now."`;
   Sora(CEP190)`"And after Pipi got to the surface, You...Yubiseiharukana, that is..."`;
   Sora(CEP191)`"Took the data off the disk, and copied it to the body you see now..."`;
   Sora(CEP192)`"That is the reason I was able to maintain the records of what happened to all of you, 17 years ago."`;
   Sora(CEP193)`"After that, You took in Pipi...and from that time on he's been a member of the Tanaka family."`;
   Sora(CEP194)`"In other words, Pipi is an irreplaceable part of all of our lives."`;
   Sora(CEP195)`"I thought I'd already told you?"`;

});
fgload({ id: 1, name: `TA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(CEP196)`"Uh, yeah, that's right, now that you mention it..."`;
   Takeshi(CEP197)`"But come on, you don't have to get so serious about it."`;

});
fgload({ id: 1, name: `TA02ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(CEP198)`"Besides, Pipi isn't broken...so what's the big deal?"`;
   `Takeshi laughed pleasantly.`;
   `(Ah, I...I can't fight it)`;
   `His smile always disarmed me.`;
   `It was as bright as the sun, and powerfully magnetic, he could charm me effortlessly.`;
   `(It isn't fair...that smile should be outlawed, Takeshi.)`;

});
fgload({ id: 1, name: `TA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(CEP199)`"By the way, Sora? Can I ask you something?"`;
   Sora(CEP200)`"W-what is it?"`;
   `I looked away, and tried desperately to regain control of my wildly racing mind, so that he would not see through to my true feelings.`;

});
fgload({ id: 1, name: `TA03ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(CEP201)`"I hope you don't think it's rude of me to ask this, but..."`;
   Takeshi(CEP202)`"Um...er...uh...?"`;
   Takeshi(CEP203)`"It's about your body."`;
   Sora(CEP204)`"My body?"`;

});
fgload({ id: 1, name: `TA01ADM`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(CEP205)`"Yeah..."`;
   Takeshi(CEP206)`"As far as I can tell, you look totally human, your skin..."`;
   Takeshi(CEP207)`"The way you move, your appearance, everything, is so natural..."`;
   Sora(CEP208)`"Ha, ha, ha, that isn't rude at all."`;
   Sora(CEP209)`"Actually, that's a compliment, isn't it? Thank you."`;
   Sora(CEP210)`"And...was that your question?"`;
   Takeshi(CEP211)`"Uh, no...I mean...I was wondering how your body is put together is all..."`;
   Sora(CEP212)`"Is it strange to you?"`;
   Takeshi(CEP213)`"Yeah, a bit."`;
   Takeshi(CEP214)`"And at the same time...I'm happy."`;

});
removeFG({ id: 1, useAnim: true });
fgload({ id: 1, name: `TA02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(CEP215)`"I mean...I can actually touch you now."`;
   `As he said that, Takeshi put his hand on my cheek.`;
   `It burned...A lump, hot and boiling, ran from my stomach to my brain.`;
   `My generator was burning too much energy, frying my processor...my logic circuits...shut down.`;
   Sora(CEP216)`"T-T-T-Takeshi..."`;
   `Holding Pipi firmly to my chest, I grabbed onto Takeshi's palm with my free hand.`;
   `(Ah...Ah...We're actually touching each other...)`;
   `(We can touch each other...really touch each other...)`;
   `I had waited these 17 years for just this moment.`;

});
fgload({ id: 1, name: `TA03ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(CEP217)`"W-what's wrong Sora? Have you been drinking or something? Your face is all red?"`;
   Sora(CEP218)`"Professor Kuranari..."`;
   Takeshi(CEP219)`"Wh-what is it Ms. Akanegasaki..."`;
   Sora(CEP220)`"There are so many strange things in this world, don't you think?"`;
   Takeshi(CEP221)`"?"`;
   Sora(CEP222)`"You asked about my body, didn't you professor?"`;
   Sora(CEP223)`"You wondered how I came to have this body, didn't you?"`;
   Takeshi(CEP224)`"Y-yeah..."`;
   Sora(CEP225)`"There is only one answer."`;
   Sora(CEP226)`"It was a miracle."`;

});
fgload({ id: 1, name: `TA01ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(CEP227)`"Miracle?"`;
   Sora(CEP228)`"Yes - a miracle from the goddess Aphrodite."`;
   `Takeshi looked straight into my eyes and blinked.`;
   `He opened his eyes wide with a start and said...`;

});
fgload({ id: 1, name: `TA02ADL`, x: 320, useAnim: true });
showTextbox();
text(() => {
   Takeshi(CEP229)`"Pygmalion..."`;
   `I slowly, quietly nodded.`;
   `Just then—`;

});
removeFG({ id: 1, useAnim: true });
multifgload2({ id1: 1, id2: 2, name1: `TA01ADM`, name2: `CO02ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(CEP230)`"Hellooooo!"`;
   `In came the girl with boundless energy, Coco.`;
   `I quickly let go of Takeshi's hand.`;

});
multifgload2({ id1: 1, id2: 2, name1: `TA15ADM`, name2: `CO01ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(CEP231)`"Hey, hey? Have any of you seen Pipi?"`;

});
fgload({ id: 2, name: `CO05ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(CEP232)`"Er, wait a sec, you're holding him Sora!"`;
   Sora(CEP233)`"Yes...But it looks like Pipi ran out of batteries."`;
   `And saying that I handed Pipi over to Coco.`;

});
showTextbox();
text(() => {
   Coco(CEP234)`"Out of batteries? That can't be!"`;
   Coco(CEP235)`"I just finished charging him a minute ago."`;
   `Coco held Pipi between both her hands and started shaking him left to right.`;
   `He wasn't rechargeable kinetically, so that shouldn't have done anything for him, but...`;
   Sora(CEP236)`"?Ah!"`;

});
multifgload2({ id1: 1, id2: 2, name1: `TA01ADM`, name2: `CO06ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   `I exclaimed this without thinking as I realized something .`;
   `Coco and Takeshi both turned to stare at me.`;
   Sora(CEP237)`"I figured it out. The reason, I mean."`;

});
fgload({ id: 1, name: `TA03ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(CEP238)`"The reason?"`;
   Sora(CEP239)`"His switch."`;
   Sora(CEP240)`"I think you just need to turn on his switch."`;

});
multifgload2({ id1: 1, id2: 2, name1: `TA01ADM`, name2: `CO03ADM`, x1: 128, x2: 512, useAnim: true });
showTextbox();
text(() => {
   `Coco lifted Pipi up above her.`;
   `There was a button in his navel.`;
   Sora(CEP241)`"Are you ready? Here I go."`;
   `I stuck out my finger and zeroed in on his bellybutton.`;
   `And...`;
   Sora(CEP242)`"Keep it simple!"`;
   `I firmly pushed the button. `;
   `Whiiiiiiiiiiiiiiiiiiiiiirr...`;
   `His motor started to run, and I could hear the faint sound of something oscillating.`;
   `Pipi's eyes came to life.`;
   Pipi(PIPI_14)`"Wow! Bow wow wow! Woof woof!"`;

});
fgload({ id: 2, name: `CO02ADM`, x: 512, useAnim: true });
showTextbox();
text(() => {
   Coco(CEP243)`"Ha, ha! Sora, thank you!"`;
   Sora(CEP244)`"Don't mention it. All I did was push a button."`;
   `Just then...`;

});
fgload({ id: 1, name: `TA02ADM`, x: 128, useAnim: true });
showTextbox();
text(() => {
   Takeshi(CEP245)`"Ha, ha, ha! A ha, ha, ha, ha, ha!"`;
   `Takeshi broke out in laughter.`;
   Takeshi(CEP246)`"Hey...Sora you remembered?"`;
   Sora(CEP247)`"Yes."`;
   `I smiled from the bottom of my heart, and nodded.`;
   `The world is full of strange and wonderful things.`;
   `Isn't it?`;
   `"The discussion about Pygmalion... and 'keep it simple'..."`;
   `Neither of those should have been on my terabyte disk...`;
   `..................................`;

});
showTextbox();
text(() => {
   Pipi(PIPI_09)`"Woof! Woof! Wow! Bow!"`;
   `Pipi leapt from Coco's arms.`;
   Pipi(PIPI_13)`"Woof! Wow! Wow!"`;
   `And wagging his tail fitfully, he raced across the deck.`;

});
removeFG({ id: 2, useAnim: true });
showTextbox();
text(() => {
   Coco(CEP248)`"Hey! Wait, waaaaiiit! Pipiii!"`;
   `Making a racket, Coco chased after him.`;
   `The deck was overflowing with quiet sunlight and cheerful laughter.`;

});
bgload({ name: `IMG05A`, transition: 20 });
showTextbox();
text(() => {
   `Looking up, there was the sky...`;
   `The blue sky that continued without end, stretching out in all directions.`;
   Pipi(PIPI_11)`"Woof! Woof woof! Woof!"`;
   Coco(CEP249)`"Piipiii! Hey you, wait a second you little...!"`;

});
hideTextbox();
monoColorOverlay({ interval: 12, color: BLACK });
hideTextbox();
NVL_Mode();
bgloadCrop({ name: `BG41A1`, transition: 26, x: 12, y: 12, hx: 775, hy: 581 });
showTextbox();
text(() => {
   `


${noWait}`;
   `${center}${nextPage(0)}'——Coco Yagami——'${nextPage(1)}`;

});
setMonoColorOverlayFadeOutDuration(53);
fadeOutMonoColorOverlay();
unSkippableDelay(40);
showTextbox();
text(() => {
   `${noWait}`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
ADV_Mode();
showTextbox();
text(() => {
   Pipi(PIPI_11)`"Woof! Woof woof! Woof!"`;
   Coco(CEP249)`"Piipiii! Hey you, wait a second you little...!"`;
   `I was chasing after Pipi.`;
   `I didn't know why, but that's what I was doing.`;
   `It was probably just something fun to do.`;
   `Pipi ran across the surface of the deck, like he was flying.`;
   `Suddenly...`;
   `Pipi stopped.`;

});
showTextbox();
text(() => {
   Pipi(PIPI_16)`"Bow wow wow! Woof! Wow wow wow!"`;
   `Just when I thought he wasn't running anymore, he looked up to the sky and started barking at something.`;
   Coco(CEP250)`"Huh? Is there a bird or something?"`;
   `I lifted him up.`;
   `Still he wouldn't stop barking, so I followed his gaze and looked up into the sky.`;
   `And there was...`;

});
hideTextbox();
monoColorOverlay({ interval: 6, color: WHITE });
closeKomoreAnim();
bgload({ name: `EV_CO15A`, transition: 26 });
setMonoColorOverlayFadeOutDuration(23);
fadeOutMonoColorOverlay();
unSkippableDelay(10);
showTextbox();
text(() => {
   Coco(CEP251)`"Oh! It's you! Brother!"`;
   `Right in front of my eyes floated the outline of my brother, who I loved dearly.`;
   `Well, it wasn't something I HAD seen...rather I'm seeing it right now.`;
   `Right now at this moment, Coco is looking at you.`;
   `She cries out suddenly with an elated expression.`;

});
tweenZoom({ x: 200, y: 250, hx: 400, hy: 300, duration: 180 });
bgloadCrop({ name: `EV_CO15A`, transition: 26, x: 200, y: 250, hx: 400, hy: 300 });
showTextbox();
text(() => {
   Coco(CEP252)`"Heeey! Everyone! Come over here!"`;
   Coco(CEP253)`"Come here! Quickly! Quickleeeey!"`;

});
bgloadCrop({ name: `EV_CO15B`, transition: 20, x: 200, y: 250, hx: 400, hy: 300 });
tweenZoom({ x: 43, y: 50, hx: 450, hy: 337, duration: 90 });
bgloadCrop({ name: `EV_CO15B`, transition: 26, x: 43, y: 50, hx: 450, hy: 337 });
showTextbox();
text(() => {
   `The first people to arrive are Hokutan and Tsugumi.`;
   Hokuto(CEP254)`"What's wrong?"`;
   Tsugumi(CEP255)`"Did something happen?"`;
   Coco(CEP256)`"Look there! See, over there!"`;
   `Coco points at you.`;
   `She wanted to tell everyone that you've arrived.`;
   `Tsugumi takes off her hat, and squints her eyes against the sunlight.`;
   `Hokutan is...`;
   Hokuto(CEP257)`"Hey! It's true! You've come back!?"`;
   `A smile covers his whole face, and he jumps around as if he will start to dance.`;

});
bgloadCrop({ name: `EV_CO15C`, transition: 20, x: 43, y: 50, hx: 450, hy: 337 });
tweenZoom({ x: 312, y: 162, hx: 450, hy: 337, duration: 90 });
bgloadCrop({ name: `EV_CO15C`, transition: 26, x: 312, y: 162, hx: 450, hy: 337 });
showTextbox();
text(() => {
   `Next Takepyon shows up.`;
   Takeshi(CEP258)`"Huh? What's going on?"`;
   `Mayo jumps up...`;
   Sara(CEP259)`"Aaaii!"`;
   `Up on Takepyon's back...`;
   `And soon everyone shows up one-by-one.`;

});
bgloadCrop({ name: `EV_CO15D`, transition: 20, x: 312, y: 162, hx: 450, hy: 337 });
unlockCG($`EV_CO15D`);
tweenZoom({ x: 400, y: 0, hx: 400, hy: 300, duration: 90 });
bgloadCrop({ name: `EV_CO15D`, transition: 26, x: 400, y: 0, hx: 400, hy: 300 });
showTextbox();
text(() => {
   `Sora...Nakkyu's daughter...`;
   Sora(CEP260)`"W-what's going on, You?"`;
   //You'aki'
   You_aki_(CEP261)`"Just come on! Hurry!"`;

});
bgloadCrop({ name: `EV_CO15E`, transition: 20, x: 400, y: 0, hx: 400, hy: 300 });
tweenZoom({ x: 0, y: 0, hx: 400, hy: 300, duration: 120 });
bgloadCrop({ name: `EV_CO15E`, transition: 26, x: 0, y: 0, hx: 400, hy: 300 });
showTextbox();
text(() => {
   `And Nakkyu...Kiddo...`;
   //You'haru'
   You_haru_(CEP262)`"It's him...?"`;
   Kaburaki(CEP263)`"Yeah..."`;

});
tweenZoom({ x: 0, y: 0, hx: 800, hy: 600, duration: 120 });
bgloadCrop({ name: `EV_CO15E`, transition: 26, x: 0, y: 0, hx: 800, hy: 600 });
showTextbox();
text(() => {
   `The boat is suddenly crowded with excitement.`;
   Coco(CEP264)`"Hey! Broooother! Broooother!"`;
   `Coco is waving her arms wildly.`;
   `Hoping...praying...`;
   `${voice(CEP265)}'Please let my thoughts reach my brother...'`;
   `${voice(CEP266)}'And please, let me meet with him again, someday...'`;
   `Right then—`;
   `I, Coco, was looking at my brother.`;

});
bgload({ name: `EV_CO15F`, transition: 20 });
stopBGM();
showTextbox();
text(() => {
   `Right then—`;
   `I was looking at the world where Coco existed.`;
   `Looking down on it with both of my eyes...I was sure of it...`;
   `If the moon is only there because of your belief that it will be there when you look for it...`;
   `Then it was possible that I am here, and they are here, only because we believe that that we are.`;
   `The world is here now...`;
   `I am here looking at the world...`;
   `I am here looking at myself, looking at the world...`;
   `How far do I go?`;
   `I don't know the answer...`;
   `But there are some things I am sure of.`;

});
hideTextbox();
hideTextbox();
NVL_Mode();
showDimOverlay();
showTextbox();
text(() => {
   `

${noWait}`;
   `${center}${nextPage(0)}'I am seeing now.'${nextPage(1)}`;

});
showTextbox();
text(() => {
   `${center}${nextPage(0)}'I am being seen now.'${nextPage(1)}`;

});
showTextbox();
text(() => {
   `${center}${nextPage(0)}'You are seeing now.'${nextPage(1)}`;
   fadeClearPage();
});
hideTextbox();
showTextbox();
text(() => {
   `

${noWait}`;
   `${nextPage(0)}${center}'And you are...'${nextPage(1)}`;
   `${nextPage(0)}${center}'Surely being seen by someone.'${nextPage(1)}`;

});
monoColorOverlay({ interval: 24, color: WHITE });
dimOff_ac = 0;
closeDimOverlay();
showTextbox();
text(() => {
   `${noWait}`;
   fadeClearPage();
});
hideTextbox();
bgload({ name: `BG_ENDE`, transition: 26 });
setMonoColorOverlayFadeOutDuration(46);
fadeOutMonoColorOverlay();
unSkippableDelay(33);
delay({ interval: 180 });
monoColorOverlay({ interval: 36, color: BLACK });
stopSFX()
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
hideTextbox();
ADV_Mode();
unlockCG($`POST12`);
g__coco_ep__cleared = 1;
g_coco_ep__cleared = 1;
sys_fe = 1;
l_coco_ep__clear = 1;
l_coco_ep_reach_a = 1;
l_coco_ep_reach_b = 1;
l_coco_ep_reach_c = 1;
l_coco_ep_reach_d = 1;
l_coco_ep_reach_e = 1;
l_coco_ep_reach_f = 1;
if (l_sc2f_clear == 0) goto(lbl_0000118d);
unlockCG($`POST06`);
if (g_1d != 0) goto(lbl_000011b2);
let lbl_0000118d;
unlockCG($`POST11`);
if (g_1d != 0) goto(lbl_000011b2);
let lbl_000011b2;
unlockCG($`POST17`);
