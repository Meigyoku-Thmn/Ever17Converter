l_b0 = 0;
l_dayA = 0;
l_dayB = 0;
setDialogBoxColor(GREEN);
playBGM({ num: 22, volume: 100 });
bgload_keepFg({ name: `KURO_BG`, transition: 10 });
delay({ interval: 30 });
setChangePerspectiveDirection(FROM_BOTH);
triggerChangePerspectiveAnim();
unSkippableDelay(30);
monoColorOverlay({ interval: 3, color: WHITE });
multiremoveFG({ id1: 1, id2: 2, id3: 4, useAnim: true });
removeBG({ mode: WHITE, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
setDialogBoxColor(GRAY);
delay({ interval: 180 });
bgload({ name: `EV_CO03D`, transition: 0 });
setSceneTitle({ index: 48 });
hideTextbox();
NVL_Mode();
bgload({ name: `EV_CO03A`, transition: 0 });
showDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   `


`;
   
});
showTextbox();
text(() => {
   appendText; delay(0); 
   `           `;
   nextPage(00); 
   `Eine Geschichte setzt auf`;
   nextPage(01); 
   `
`;
   
});
delay({ interval: 180 });
bgload_keepFg({ name: `EV_CO11A`, transition: 0 });
showTextbox();
text(() => {
   appendText; delay(0); 
   `                `;
   nextPage(00); 
   `1 Mai,2034 fort.`;
   nextPage(01); 
});
delay({ interval: 180 });
bgload_keepFg({ name: `EV_CO11B`, transition: 0 });
delay({ interval: 180 });
playSFX({ name: `SE10_29`, a1: 0, volume: 100 });
monoColorOverlay({ interval: 36, color: BLACK });
dimOff_ac = 1;
closeDimOverlay();
showTextbox();
text(() => {
   marker; appendText; delay(90); delay(90); nextPage(04); 
});
hideTextbox();
removeBG({ mode: BLACK, transition: 62 });
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
hideTextbox();
AVL_Mode();
delay({ interval: 180 });
delay({ interval: 180 });
stopSFX()
stopBGM();
g_takeshi_ep__cleared = 1;
unlockCG($`POST16`);
