if (l_choice == 1) goto(lbl_00000feb);
delay({ interval: 120 });
l_b0 = 0;
l_dayA = 0;
l_dayB = 0;
switch (l_ending) {
   case `takeshi_bd`: goto(lbl_00000e88);
   case `you_bd`: goto(lbl_00000eb1);
   case `sara_bd`: goto(lbl_00000e97);
}
switch (l_ending) {
   case `tsugumi_gd`: goto(lbl_000004a8);
   case `sora_gd`: goto(lbl_00000775);
   case `you_gd`: goto(lbl_000001b4);
   case `sara_gd`: goto(lbl_00000a42);
}
showTextbox();
text(() => {
   `ＬＲ＿Ａ００の値が正しくありません。`;

});
let lbl_000001b4;
g_you_gd__cleared = 1;
if (g__sara_gd_cleared == 0) goto(lbl_000001df);
g_sara_or_you_gd__cleared = 1;
let lbl_000001df;
if (g_coco_ep__cleared != 0) goto(lbl_0000034e);
if (g__you_gd_cleared == 1) goto(lbl_000002af);
if (l_you_point == 10) goto(lbl_000002af);
g__you_gd_cleared = 1;
unSkippableDelay(3);
unSkippableDelay(1);
playMovie(`END_YU00`);
unSkippableDelay(1);
unSkippableDelay(1);
goto(lbl_00000feb);
let lbl_000002af;
g__you_gd_cleared = 1;
l_choice = 0;
unSkippableDelay(3);
unSkippableDelay(1);
playMovie(`END_YU00`);
unSkippableDelay(1);
unSkippableDelay(1);
jump(`SYEP`);
let lbl_0000034e;
if (g__you_gd_cleared == 1) goto(lbl_00000409);
if (l_you_point == 10) goto(lbl_00000409);
g__you_gd_cleared = 1;
unSkippableDelay(3);
unSkippableDelay(1);
playMovie(`END_YU00`);
unSkippableDelay(1);
unSkippableDelay(1);
goto(lbl_00000feb);
let lbl_00000409;
g__you_gd_cleared = 1;
unSkippableDelay(3);
unSkippableDelay(1);
playMovie(`END_YU00`);
unSkippableDelay(1);
unSkippableDelay(1);
l_choice = 0;
jump(`SYEP`);
let lbl_000004a8;
g__tsugumi_gd_cleared = 1;
unlockCG($`POST04`);
unlockCG($`POST09`);
l__tsugumi_gd__cleared = 1;
if (g__sora_gd_cleared == 0) goto(lbl_000004f6);
g_sora_or_tsugumi_gd__cleared = 1;
unlockCG($`POST03`);
let lbl_000004f6;
g_tsugumi_gd_cleared = 1;
if (g_coco_ep__cleared != 0) goto(lbl_000006d6);
if (l_is_coco_route != 0) goto(lbl_000005b1);
unSkippableDelay(3);
unSkippableDelay(1);
playMovie(`END_TU00`);
unSkippableDelay(1);
unSkippableDelay(1);
goto(lbl_00000feb);
let lbl_000005b1;
g_takeshi_ep__cleared = 1;
unSkippableDelay(3);
unSkippableDelay(1);
playMovie(`END_TU00`);
unSkippableDelay(1);
unSkippableDelay(1);
l_choice = 0;
jump(`T_EP`);
unSkippableDelay(3);
unSkippableDelay(1);
playMovie(`END_TU00`);
unSkippableDelay(1);
unSkippableDelay(1);
goto(lbl_00000feb);
let lbl_000006d6;
g_takeshi_ep__cleared = 1;
unSkippableDelay(3);
unSkippableDelay(1);
playMovie(`END_TU00`);
unSkippableDelay(1);
unSkippableDelay(1);
l_choice = 0;
jump(`T_EP`);
let lbl_00000775;
g_sora_gd_cleared = 1;
unlockCG($`POST10`);
unlockCG($`POST14`);
l__sora_gd__cleared = 1;
if (g_tsugumi_gd_cleared == 0) goto(lbl_000007c3);
g_sora_or_tsugumi_gd__cleared = 1;
unlockCG($`POST03`);
let lbl_000007c3;
g__sora_gd_cleared = 1;
if (g_coco_ep__cleared != 0) goto(lbl_000009a3);
if (l_is_coco_route != 0) goto(lbl_0000087e);
unSkippableDelay(3);
unSkippableDelay(1);
playMovie(`END_SO00`);
unSkippableDelay(1);
unSkippableDelay(1);
goto(lbl_00000feb);
let lbl_0000087e;
g_takeshi_ep__cleared = 1;
unSkippableDelay(3);
unSkippableDelay(1);
playMovie(`END_SO00`);
unSkippableDelay(1);
unSkippableDelay(1);
l_choice = 0;
jump(`T_EP`);
unSkippableDelay(3);
unSkippableDelay(1);
playMovie(`END_SO00`);
unSkippableDelay(1);
unSkippableDelay(1);
goto(lbl_00000feb);
let lbl_000009a3;
g_takeshi_ep__cleared = 1;
l_choice = 0;
unSkippableDelay(3);
unSkippableDelay(1);
playMovie(`END_SO00`);
unSkippableDelay(1);
unSkippableDelay(1);
jump(`T_EP`);
let lbl_00000a42;
g_sara_gd__cleared = 1;
if (g__you_gd_cleared == 0) goto(lbl_00000a6d);
g_sara_or_you_gd__cleared = 1;
let lbl_00000a6d;
if (g_coco_ep__cleared != 0) goto(lbl_00000c85);
if (g__sara_gd_cleared == 1) goto(lbl_00000aac);
if (l_sara_point < 3) goto(lbl_00000bf4);
let lbl_00000aac;
g__sara_gd_cleared = 1;
if (l_thought_you_can_swim_34_meters_regardless_water_pressure == 1) goto(lbl_00000b60);
unSkippableDelay(3);
unSkippableDelay(1);
playMovie(`END_SA00`);
unSkippableDelay(1);
unSkippableDelay(1);
l_choice = 0;
jump(`SSEP`);
let lbl_00000b60;
unSkippableDelay(3);
unSkippableDelay(1);
playMovie(`END_SA00`);
unSkippableDelay(1);
unSkippableDelay(1);
l_choice = 1;
jump(`SSEP`);
let lbl_00000bf4;
g__sara_gd_cleared = 1;
unSkippableDelay(3);
unSkippableDelay(1);
playMovie(`END_SA00`);
unSkippableDelay(1);
unSkippableDelay(1);
goto(lbl_00000feb);
let lbl_00000c85;
if (g__sara_gd_cleared == 1) goto(lbl_00000caf);
if (l_sara_point < 3) goto(lbl_00000df7);
let lbl_00000caf;
g__sara_gd_cleared = 1;
if (l_thought_you_can_swim_34_meters_regardless_water_pressure == 1) goto(lbl_00000d63);
l_choice = 0;
unSkippableDelay(3);
unSkippableDelay(1);
playMovie(`END_SA00`);
unSkippableDelay(1);
unSkippableDelay(1);
jump(`SSEP`);
let lbl_00000d63;
l_choice = 1;
unSkippableDelay(3);
unSkippableDelay(1);
playMovie(`END_SA00`);
unSkippableDelay(1);
unSkippableDelay(1);
jump(`SSEP`);
let lbl_00000df7;
g__sara_gd_cleared = 1;
unSkippableDelay(3);
unSkippableDelay(1);
playMovie(`END_SA00`);
unSkippableDelay(1);
unSkippableDelay(1);
goto(lbl_00000feb);
let lbl_00000e88;
g_tsugumi_sora_bd__cleared = 1;
goto(lbl_00000ecb);
let lbl_00000e97;
g_sara_bd_cleared = 1;
g_kid_bd__cleared = 1;
goto(lbl_00000ecb);
let lbl_00000eb1;
g_you_bd_cleared = 1;
g_kid_bd__cleared = 1;
goto(lbl_00000ecb);
let lbl_00000ecb;
monoColorOverlay({ interval: 0, color: BLACK });
bgload({ name: `BG16A3`, transition: 26 });
setMonoColorOverlayFadeOutDuration(61);
fadeOutMonoColorOverlay();
unSkippableDelay(48);
delay({ interval: 60 });
bgload({ name: `IT04A`, transition: 0 });
delay({ interval: 30 });
showDimOverlay();
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `







${noWait}`;
   `${bigChar}    L${wait(46)}${noWait}`;
   Append`${bigChar}i${wait(46)}${noWait}`;
   Append`${bigChar}f${wait(46)}${noWait}`;
   Append`${bigChar}e${wait(46)}${noWait}`;
   Append`${bigChar} ${wait(46)}${noWait}`;
   Append`${bigChar}r${wait(46)}${noWait}`;
   Append`${bigChar}e${wait(46)}${noWait}`;
   Append`${bigChar}a${wait(46)}${noWait}`;
   Append`${bigChar}d${wait(46)}${noWait}`;
   Append`${bigChar}i${wait(46)}${noWait}`;
   Append`${bigChar}n${wait(46)}${noWait}`;
   Append`${bigChar}g${wait(46)}${noWait}`;
   Append`${bigChar}:${wait(46)}${noWait}`;
   Append`${bigChar} ${wait(46)}${noWait}`;
   Append`${bigChar}1${wait(90)}${wait(90)}${noWait}`;

});
monoColorOverlay({ interval: 24, color: BLACK });
showTextbox();
text(() => {
   Append`${noWait}`;
   fadeClearPage();
});
hideTextbox();
dimOff_ac = 0;
closeDimOverlay();
removeBG({ mode: BLACK, transition: 62 });
showTextbox();
text(() => {
   `





${noWait}`;

});
setMonoColorOverlayFadeOutDuration(16);
fadeOutMonoColorOverlay();
unSkippableDelay(3);
showTextbox();
text(() => {
   `         ${nextPage(0)}This story is not an end yet.${nextPage(1)}${noWait}`;
   `   ${nextPage(0)}Because only you are in the infinity loop.${nextPage(1)}${noWait}`;
   `${wait(90)}${wait(90)}${wait(90)}${noWait}`;
   fadeClearPage();
});
hideTextbox();
removeBG({ mode: BLACK, transition: 62 });
hideTextbox();
ADV_Mode();
sys_allow_shortcut = 1;
sys_allow_album = 1;
sys_allow_jukebox = 1;
sys_allow_clearlist = 1;
unlockCG($`POST01`);
if (g_1d == 0) goto(lbl_00000fe3);
unlockCG($`POST17`);
let lbl_00000fe3;
let lbl_00000feb;
hideTextbox();
NVL_Mode();
showTextbox();
text(() => {
   `





${noWait}`;
   `         ${nextPage(0)}This story is not an end yet.${nextPage(1)}${noWait}`;
   `   ${nextPage(0)}Because only you are in the infinity loop.${nextPage(1)}${noWait}`;
   `${wait(90)}${wait(90)}${wait(90)}${noWait}`;
   fadeClearPage();
});
hideTextbox();
hideTextbox();
ADV_Mode();
sys_allow_shortcut = 1;
sys_allow_album = 1;
sys_allow_jukebox = 1;
sys_allow_clearlist = 1;
unlockCG($`POST01`);
if (g_1d == 0) goto(lbl_00001062);
unlockCG($`POST17`);
let lbl_00001062;
if (g_you_gd_cleared == 0) goto(lbl_000010be);
if (g_sara_gd_cleared == 0) goto(lbl_000010be);
if (g__sora_gd_cleared == 0) goto(lbl_000010be);
if (g_tsugumi_gd_cleared == 0) goto(lbl_000010be);
unlockCG($`POST15`);
let lbl_000010be;
if (g_coco_route_unlock == 1) goto(lbl_00001161);
l_accumulator = 0;
l_accumulator += g_tsugumi_gd_cleared;
l_accumulator += g__you_gd_cleared;
l_accumulator += g__sara_gd_cleared;
l_accumulator += g__sora_gd_cleared;
if (l_accumulator != 4) goto(lbl_00001161);
g_coco_route_unlock = 1;
l__coco_route_unlock = 1;
showTextbox();
text(() => {
   `Opening The Third Eye- The Last Chapter:
Finding Coco`;

});
hideTextbox();
let lbl_00001161;
