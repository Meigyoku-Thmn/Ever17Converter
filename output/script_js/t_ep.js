varop(`(28 0a a4) b0 := (00) 0`);
varop(`(28 0a a4) b1 := (00) 0`);
varop(`(28 0a a4) b2 := (00) 0`);
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
bgload({ name: `EV_CO03D`, transition: 00 });
setSceneTitle({ index: 48 });
hideTextbox();
NVL_Mode();
bgload({ name: `EV_CO03A`, transition: 00 });
showDimOverlay();
showTextbox();
text(() => {
   marker; appendText; 
   Narr`


`;
   
});
showTextbox();
text(() => {
   appendText; delay(0); 
   Narr`           `;
   nextPage(00); 
   Narr`Eine Geschichte setzt auf`;
   nextPage(01); 
   Narr`
`;
   
});
delay({ interval: 180 });
bgload_keepFg({ name: `EV_CO11A`, transition: 00 });
showTextbox();
text(() => {
   appendText; delay(0); 
   Narr`                `;
   nextPage(00); 
   Narr`1 Mai,2034 fort.`;
   nextPage(01); 
});
delay({ interval: 180 });
bgload_keepFg({ name: `EV_CO11B`, transition: 00 });
delay({ interval: 180 });
playSFX({ name: `SE10_29`, a1: 0, volume: 100 });
monoColorOverlay({ interval: 36, color: BLACK });
varop(`(28 0a a0) ac := (00) 1`);
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
varop(`(28 0a a4) 11 := (00) 1`);
unlockCG($`POST16`);
