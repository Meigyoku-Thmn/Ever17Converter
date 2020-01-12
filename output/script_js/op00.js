varop(`(28 0a a4) b0 := (00) 5`)
varop(`(28 0a a4) b1 := (00) 1`)
varop(`(28 0a a4) b2 := (00) 1`)

delay({interval: 120})

removeBG({mode: WHITE, transition: 02})
setSceneTitle({index: 0})

l_unk28()

setDialogBoxColor(GRAY)

delay({interval: 119})

showTextbox()
text`${marker}${appendText}He was in the middle of a blue world.${waitForClick}${clearText}`

hideTextbox()

playSFX({name: `SE10_26`, a1: 1, volume: 100})

waitForSFX()

playSFX({name: `SE09_01L`, a1: 0, volume: 100})

monoColorOverlay({interval: 0, color: WHITE})

bgloadCrop({name: `BG41A1`, transition: 26, x: 12, y: 12, hx: 775, hy: 581})
setKomoreType(0)

showKomoreAnim()
varop(`(28 0a a2) 4f := (00) 0`)
varop(`(28 0a a2) 3b := (00) 20`)
varop(`(28 0a a2) 3c := (00) VAR_c3_0_6`)
varop(`(28 0a a2) 3d := (00) 1`)
varop(`(28 0a a2) 3e := (00) 30`)
varop(`(28 0a a2) 3f := (00) VAR_cc_0_6`)
varop(`(28 0a a2) 40 := (00) 1`)

openShakeScreenAnim()
setMonoColorOverlayFadeOutDuration(61)
fadeOutMonoColorOverlay()

unSkippableDelay(48)

showTextbox()
text`${marker}${appendText}As far as the eye could see, a sheet of water
reached into the distance.${waitForClick}${clearText}${marker}${appendText}The May sun shimmered on its surface.${waitForClick}${clearText}${marker}${appendText}Above, high above, stretched a clear blue sky.${waitForClick}${clearText}${marker}${appendText}The fresh, new sky looked so glossy and vivid
that it might spill down to earth at any
moment.${waitForClick}${clearText}${marker}${appendText}That was all that was reflected in his eyes.${waitForClick}${clearText}${marker}${appendText}The straight line of the horizon stretched
into the distance, dividing the sea from the
heavens.${waitForClick}${clearText}`

showTextbox()
text`${marker}${sound(EOP000)}${appendText}[Takeshi]
"So tranquil..."${waitForClick}${clearText}${marker}${appendText}He muttered.${waitForClick}${clearText}${marker}${appendText}A solitary seagull traced a gentle arc in the
sky as the wind carried it away.${waitForClick}${clearText}${marker}${appendText}The wind, full of the smell of the ocean, blew
by him gently.${waitForClick}${clearText}${marker}${appendText}The din of people could be heard in the
background.${waitForClick}${clearText}${marker}${appendText}The merry sound of children's voices echoed
brighter than the sunlight pouring down.${waitForClick}${clearText}${marker}${sound(EOP001)}${appendText}[Takeshi]
"So peaceful..."${waitForClick}${clearText}${marker}${appendText}It was like being inside a dream.${waitForClick}${clearText}`

hideTextbox()

monoColorOverlay({interval: 12, color: BLACK})

closeKomoreAnim()

closeShakeScreenAnim()

removeBG({mode: BLACK, transition: 62})
setMonoColorOverlayFadeOutDuration(16)
fadeOutMonoColorOverlay()

unSkippableDelay(3)

chapterCutin({name: `00000000`})

stopSFX()

playBGM({num: 1, volume: 100})

bgload({name: `BG38A2`, transition: 10})

clock(`11:17`)

showTextbox()
text`${marker}${appendText}—10 miles from M Island, Komagahara
Archipelago, Tokyo${waitForClick}${clearText}${marker}${appendText}The man-made island, Insel null, rose above the
waves of the water. It seemed like a place
removed from reality.${waitForClick}${clearText}${marker}${appendText}The word 'utopia' might have sprung to mind to
describe it.${waitForClick}${clearText}${marker}${appendText}Actually, a slab of rock on the boat dock of
this floating island were carved the following
words.${waitForClick}${clearText}`

bgload({name: `IT06A`, transition: 20})

showTextbox()
text`${marker}${appendText}'Where is heaven?'${waitForClick}${clearText}${marker}${appendText}'Above the sky, and at your feet...'${waitForClick}${clearText}`

bgload({name: `BG38A2`, transition: 20})

showTextbox()
text`${marker}${appendText}Leaning out over the railing of the island, he
gazed into the ocean depths.${waitForClick}${clearText}${marker}${appendText}In the blue distance, he saw a massive metallic
structure swaying gently.${waitForClick}${clearText}${marker}${sound(EOP002)}${appendText}[Takeshi]
"Utopia, huh...?"${waitForClick}${clearText}${marker}${appendText}He mumbled and looked back casually...${waitForClick}${clearText}`

bgloadCrop({name: `EV_CO16A`, transition: 20, x: 0, y: 0, hx: 455, hy: 341})

showTextbox()
text`${marker}${appendText}And there was a tanuki, or raccoon dog.${waitForClick}${clearText}${marker}${appendText}His eyes met those of the animal's.${waitForClick}${clearText}${marker}${appendText}For a moment they eyed each other in silence.${waitForClick}${clearText}${marker}${sound(EOP003)}${appendText}[Takeshi]
"Uh...he-hello..."${waitForClick}${clearText}${marker}${appendText}To clear the air, he nodded his head.${waitForClick}${clearText}${marker}${appendText}The animal turned away, ignoring him.${waitForClick}${clearText}`

showTextbox()
text`${marker}${appendText}Upon closer inspection he noticed something
biting the animal from behind.${waitForClick}${clearText}`

hideTextbox()
varop(`(28 0a a4) ce := (00) 0`)

tweenZoom({x: 0, y: 0, hx: 680, hy: 510, duration: 60})

bgloadCrop({name: `EV_CO16A`, transition: 20, x: 0, y: 0, hx: 680, hy: 510})

showTextbox()
text`${marker}${sound(EOP004)}${appendText}[??]
"Grr...grr...grr..."${waitForClick}${clearText}${marker}${appendText}It was a young girl.${waitForClick}${clearText}${marker}${appendText}She was shaped like a "person."${waitForClick}${clearText}${marker}${appendText}Looking closer revealed that there was
something strange about her as well.${waitForClick}${clearText}`

hideTextbox()
varop(`(28 0a a4) ce := (00) 0`)

tweenZoom({x: 0, y: 0, hx: 800, hy: 600, duration: 60})

bgload({name: `EV_CO16A`, transition: 26})

showTextbox()
text`${marker}${sound(PIPI_24)}${appendText}[??]
"Grr...grr...grr..."${waitForClick}${clearText}${marker}${appendText}Namely, a small tanuki attached to the girl's
backside.${waitForClick}${clearText}${marker}${appendText}'In front of him there was a big tanuki being
bitten by a girl, who was being bitten by an
smaller tanuki'${waitForClick}${clearText}${marker}${appendText}The scene was enough to make him lose his
sense of reality.${waitForClick}${clearText}${marker}${appendText}He rubbed his eyes, rubbed them some more,
and opened his eyes again...${waitForClick}${clearText}${marker}${appendText}Even after blinking several times... the
bizarre scene refused to go away.${waitForClick}${clearText}${marker}${sound(EOP005)}${appendText}[Tanuki]
"Hey."${waitForClick}${clearText}${marker}${sound(EOP006)}${appendText}[Tanuki]
"Would you do something about this kid?"${waitForClick}${clearText}${marker}${appendText}Whispered the big tanuki.${waitForClick}${clearText}${marker}${appendText}But the words didn't reach his mind, because
it was so busy trying to process the absurd
scene.${waitForClick}${clearText}${marker}${sound(PIPI_24)}${appendText}[??]
"Grr...grr...grr..."${waitForClick}${clearText}${marker}${sound(EOP007)}${appendText}[??]
"Grr...grr...grr..."${waitForClick}${clearText}${marker}${appendText}(I must be dreaming, right?)${waitForClick}${clearText}${marker}${appendText}—That was what he was really thinking.${waitForClick}${clearText}`

hideTextbox()

monoColorOverlay({interval: 18, color: BLACK})

removeBG({mode: BLACK, transition: 62})
setMonoColorOverlayFadeOutDuration(16)
fadeOutMonoColorOverlay()

unSkippableDelay(3)

stopBGM()
setChangePerspectiveDirection(FROM_LEFT)

triggerChangePerspectiveAnim()

unSkippableDelay(30)

monoColorOverlay({interval: 3, color: WHITE})

removeBG({mode: WHITE, transition: 62})
setMonoColorOverlayFadeOutDuration(16)
fadeOutMonoColorOverlay()

unSkippableDelay(3)

removeBG({mode: WHITE, transition: 02})
setSceneTitle({index: 1})

l_unk28()

showTextbox()
text`${marker}${appendText}A dream—${waitForClick}${clearText}${marker}${appendText}A dream that would not let him wake up.${waitForClick}${clearText}${marker}${appendText}And whiteness.${waitForClick}${clearText}${marker}${appendText}A cold, white, reality stretching forever.${waitForClick}${clearText}${marker}${appendText}He felt the difference in temperature on his
skin...${waitForClick}${clearText}${marker}${appendText}The shock of it finally forced him to open his
eyes.${waitForClick}${clearText}`

playSFX({name: `SE09_01L`, a1: 0, volume: 90})

bgload({name: `BG21A4`, transition: 00})

clock(`11:34`)

showTextbox()
text`${marker}${appendText}[Kid]
"..."${waitForClick}${clearText}${marker}${appendText}He wondered how long he had been sitting.${waitForClick}${clearText}${marker}${appendText}It couldn't have been long.${waitForClick}${clearText}${marker}${appendText}He had only been in the park an hour.${waitForClick}${clearText}${marker}${appendText}He'd been sitting on the bench the whole time.${waitForClick}${clearText}${marker}${appendText}Eating the same ice cream.${waitForClick}${clearText}${marker}${sound(EOP008)}${appendText}[Kid]
"It's cold."${waitForClick}${clearText}${marker}${appendText}Of course it was.${waitForClick}${clearText}${marker}${appendText}It had melted into a muddy mess.${waitForClick}${clearText}${marker}${appendText}The melted vanilla ice cream trickled on to his
hand, spilling on his lap.${waitForClick}${clearText}${marker}${sound(EOP009)}${appendText}[Kid]
"Wooh, that's cold."${waitForClick}${clearText}${marker}${appendText}The ice cream slowly soaked into the fabric of
his pants.${waitForClick}${clearText}${marker}${appendText}Finally the coldness of it had spread
completely soaking into his skin.${waitForClick}${clearText}${marker}${appendText}He had been sitting there a while.${waitForClick}${clearText}${marker}${appendText}He had been sitting so long.${waitForClick}${clearText}${marker}${appendText}But the person he was waiting for never came.${waitForClick}${clearText}${marker}${appendText}There was no sign that she would.${waitForClick}${clearText}${marker}${appendText}(I wonder why she hasn't come?)${waitForClick}${clearText}${marker}${appendText}He didn't know.${waitForClick}${clearText}${marker}${appendText}(Why am I here?)${waitForClick}${clearText}${marker}${appendText}He felt like he was teetering on the verge of
utter confusion.${waitForClick}${clearText}${marker}${sound(EOP010)}${appendText}[Kid]
"Oh well..."${waitForClick}${clearText}${marker}${appendText}He shook his head and sighed.${waitForClick}${clearText}${marker}${appendText}It didn't seem his pants would dry anytime
soon.${waitForClick}${clearText}`

hideTextbox()

stopSFX()

showTextbox()
text`${marker}${sound(EOP011)}${appendText}[Park staff]
"What's wrong?"${waitForClick}${clearText}${marker}${appendText}He sensed a slight movement and a girl sat down
next to him.${waitForClick}${clearText}`

hideTextbox()

playBGM({num: 2, volume: 100})

fgload({id: 1, name: `YU02BDM`, x: 320, useAnim: true})

showTextbox()
text`${marker}${appendText}She was sporting the theme park uniform.${waitForClick}${clearText}${marker}${appendText}A white outfit with a bluish ribbon.${waitForClick}${clearText}${marker}${appendText}She looked like a guide.${waitForClick}${clearText}${marker}${sound(EOP012)}${appendText}[Park staff]
"Are you lost?"${waitForClick}${clearText}${marker}${appendText}A beaming, innocent smile appeared on her
shining face.${waitForClick}${clearText}${marker}${sound(EOP013)}${appendText}[Park staff]
"Did you get separated from your friends?"${waitForClick}${clearText}${marker}${sound(EOP014)}${appendText}[Kid]
"Yeah."${waitForClick}${clearText}${marker}${sound(EOP015)}${appendText}[Kid]
"I've been waiting."${waitForClick}${clearText}`

fgload({id: 1, name: `YU01BDM`, x: 320, useAnim: true})

showTextbox()
text`${marker}${sound(EOP016)}${appendText}[Park staff]
"Waiting?"${waitForClick}${clearText}${marker}${sound(EOP017)}${appendText}[Kid]
"Well..."${waitForClick}${clearText}${marker}${sound(EOP018)}${appendText}[Kid]
"I was waiting."${waitForClick}${clearText}${marker}${sound(EOP019)}${appendText}[Park staff]
"You were waiting..."${waitForClick}${clearText}`

removeFG({id: 1, useAnim: true})

fgload({id: 1, name: `YU01BDL`, x: 320, useAnim: true})

showTextbox()
text`${marker}${sound(EOP020)}${appendText}[Park staff]
"For me?"${waitForClick}${clearText}${marker}${sound(EOP021)}${appendText}[Kid]
"N...no..."${waitForClick}${clearText}${marker}${appendText}He was flustered as her grinning face peered
into his.${waitForClick}${clearText}${marker}${sound(EOP022)}${appendText}[Kid]
"I was told to wait here, so..."${waitForClick}${clearText}`

fgload({id: 1, name: `YU07BDL`, x: 320, useAnim: true})

showTextbox()
text`${marker}${sound(EOP023)}${appendText}[Park staff]
"I see..."${waitForClick}${clearText}${marker}${sound(EOP024)}${appendText}[Park staff]
"But it looks like they're not coming."${waitForClick}${clearText}${marker}${appendText}She gave him a sideways glance.${waitForClick}${clearText}${marker}${sound(EOP025)}${appendText}[Park staff]
"Listen, you've obviously been stood up and are
tired of waiting..."${waitForClick}${clearText}`

fgload({id: 1, name: `YU02BDL`, x: 320, useAnim: true})

showTextbox()
text`${marker}${sound(EOP026)}${appendText}[Park staff]
"I know!"${waitForClick}${clearText}${marker}${appendText}Her face suddenly lit up and she clapped her
hands together.${waitForClick}${clearText}${marker}${sound(EOP027)}${appendText}[Park staff]
"Hey, hey, you're alone, right?"${waitForClick}${clearText}${marker}${sound(EOP028)}${appendText}[Kid]
"Huh?"${waitForClick}${clearText}${marker}${sound(EOP029)}${appendText}[Park staff]
"Well, you're bored right? How about I give you
a tour of LeMU?"${waitForClick}${clearText}${marker}${appendText}She tugged at his arm.${waitForClick}${clearText}${marker}${appendText}Without waiting for his reply, she made him
stand.${waitForClick}${clearText}${marker}${sound(EOP030)}${appendText}[Kid]
"B...but, I'm waiting for someone."${waitForClick}${clearText}`

fgload({id: 1, name: `YU01BDL`, x: 320, useAnim: true})

showTextbox()
text`${marker}${sound(EOP031)}${appendText}[Park staff]
"Waiting? For who?"${waitForClick}${clearText}${marker}${sound(EOP032)}${appendText}[Kid]
"...Uh..."${waitForClick}${clearText}${marker}${appendText}Who was it?${waitForClick}${clearText}${marker}${appendText}He couldn't think of the name.${waitForClick}${clearText}${marker}${sound(EOP033)}${appendText}[Park staff]
"Well, I dunno who you're waiting for, but..."${waitForClick}${clearText}`

fgload({id: 1, name: `YU02BDL`, x: 320, useAnim: true})

showTextbox()
text`${marker}${sound(EOP034)}${appendText}[Park staff]
"If they haven't showed up yet, don't you think
you've waited long enough?"${waitForClick}${clearText}${marker}${appendText}She said this happily, almost prancing around.${waitForClick}${clearText}${marker}${sound(EOP035)}${appendText}[Park staff]
"Whaddya say? How about it?"${waitForClick}${clearText}${marker}${sound(EOP036)}${appendText}[Kid]
"Al-alright..."${waitForClick}${clearText}${marker}${appendText}He nodded slightly.${waitForClick}${clearText}${marker}${appendText}The girl's nametag glittered brightly against
the white fabric of her uniform.${waitForClick}${clearText}${marker}${sound(EOP037)}${appendText}[Kid]
"Y-O-U...?"${waitForClick}${clearText}${marker}${appendText}That was what it said.${waitForClick}${clearText}`

fgload({id: 1, name: `YU01BDL`, x: 320, useAnim: true})

showTextbox()
text`${marker}${sound(EOP038)}${appendText}[You]
"I'm You!"${waitForClick}${clearText}${marker}${sound(EOP039)}${appendText}[Kid]
"???"${waitForClick}${clearText}${marker}${appendText}I'm you...?${waitForClick}${clearText}${marker}${sound(EOP040)}${appendText}[You]
"Yup."${waitForClick}${clearText}${marker}${appendText}She nodded.${waitForClick}${clearText}${marker}${sound(EOP041)}${appendText}[You]
"My name's You..."${waitForClick}${clearText}${marker}${sound(EOP042)}${appendText}[You]
"My last name is Tanaka..."${waitForClick}${clearText}${marker}${sound(EOP043)}${appendText}[Kid]
"You...?"${waitForClick}${clearText}${marker}${sound(EOP044)}${appendText}[You]
"My real name is much longer, though."${waitForClick}${clearText}${marker}${sound(EOP045)}${appendText}[Kid]
"Longer?"${waitForClick}${clearText}${marker}${sound(EOP046)}${appendText}[You]
"Long, like, endlessly long. But..."${waitForClick}${clearText}${marker}${sound(EOP047)}${appendText}[You]
"But, it's such a pain...just call me 'You.'"${waitForClick}${clearText}`

fgload({id: 1, name: `YU02BDL`, x: 320, useAnim: true})

showTextbox()
text`${marker}${sound(EOP048)}${appendText}[You]
"Nice to meet you!"${waitForClick}${clearText}${marker}${appendText}With that she enthusiastically stuck out her
hand.${waitForClick}${clearText}${marker}${sound(EOP049)}${appendText}[Kid]
"N-nice to meet you?"${waitForClick}${clearText}${marker}${appendText}Without thinking he shook her hand.${waitForClick}${clearText}${marker}${appendText}And before he had realized it, he'd been sucked
along into her rhythm.${waitForClick}${clearText}`

removeFG({id: 1, useAnim: true})

fgload({id: 1, name: `YU01BDM`, x: 320, useAnim: true})

showTextbox()
text`${marker}${sound(EOP050)}${appendText}[You]
"So, shall we go?"${waitForClick}${clearText}${marker}${appendText}They released hands, reluctantly.${waitForClick}${clearText}${marker}${appendText}He looked again at his hand, which had moments
before connected them.${waitForClick}${clearText}${marker}${appendText}The vanilla ice cream that had spilled on it
had completely melted away.${waitForClick}${clearText}`

hideTextbox()

monoColorOverlay({interval: 18, color: BLACK})

removeFG({id: 1, useAnim: true})

removeBG({mode: BLACK, transition: 62})

stopBGM()
setMonoColorOverlayFadeOutDuration(16)
fadeOutMonoColorOverlay()

unSkippableDelay(3)
setChangePerspectiveDirection(FROM_RIGHT)

triggerChangePerspectiveAnim()

unSkippableDelay(30)

monoColorOverlay({interval: 3, color: WHITE})

removeBG({mode: WHITE, transition: 62})
setMonoColorOverlayFadeOutDuration(16)
fadeOutMonoColorOverlay()

unSkippableDelay(3)

playBGM({num: 1, volume: 100})

bgload({name: `BG39A2`, transition: 20})
setSceneTitle({index: 0})

l_unk28()

clock(`11:43`)
setKomoreType(0)

showKomoreAnim()

multifgload2({id1: 1, id2: 2, name1: `MY19ADS`, name2: `CO11ADS`, x1: 176, x2: 464, useAnim: true})

showTextbox()
text`${marker}${appendText}(Huh?)${waitForClick}${clearText}${marker}${appendText}He noticed that the two tanuki had formed a
line and were proceeding forward.${waitForClick}${clearText}${marker}${appendText}In front of them was a massive, gate, that was
sealed shut.${waitForClick}${clearText}${marker}${appendText}The gate swung open soundlessly, and the big
tanuki, little tanuki and the girl went inside.${waitForClick}${clearText}`

removeFG({id: 1, useAnim: true})

delay({interval: 30})

removeFG({id: 2, useAnim: true})

showTextbox()
text`${marker}${appendText}(Finally my turn...)${waitForClick}${clearText}${marker}${appendText}He followed on their heels.${waitForClick}${clearText}`

hideTextbox()

closeKomoreAnim()

bgload({name: `BG38A2`, transition: 20})

showTextbox()
text`${marker}${appendText}This was LeMU's only entrance for visitors.${waitForClick}${clearText}`

bgload({name: `IT08A`, transition: 20})

showTextbox()
text`${marker}${appendText}Several park employees waited at the gate and
handed over what looked like earphones to the
visitors.${waitForClick}${clearText}${marker}${appendText}It seemed that the earphones were to be used at
some point up ahead.${waitForClick}${clearText}${marker}${appendText}He wondered why.${waitForClick}${clearText}`

bgload({name: `BG38A2`, transition: 20})

showTextbox()
text`${marker}${appendText}Looking around skeptically, but obeying
instructions, he stepped into the building.${waitForClick}${clearText}`

hideTextbox()
varop(`(28 0a a4) ce := (00) 0`)

tweenZoom({x: 332, y: 185, hx: 200, hy: 150, duration: 45})

monoColorOverlay({interval: 18, color: WHITE})

removeBG({mode: WHITE, transition: 62})
setMonoColorOverlayFadeOutDuration(16)
fadeOutMonoColorOverlay()

unSkippableDelay(3)

showTextbox()
text`${marker}${appendText}He surveyed the ceiling.${waitForClick}${clearText}${marker}${appendText}There were no windows. From the polished round
walls, it was clear that the room was
dome-shaped.${waitForClick}${clearText}${marker}${appendText}He looked around.${waitForClick}${clearText}${marker}${appendText}Many of the visitors, who had been waiting in
line, headed into the room.${waitForClick}${clearText}${marker}${appendText}Among them were friends, amorous couples,
people with their families.${waitForClick}${clearText}${marker}${appendText}The 'Tanuki family' had, however, split up it
seemed.${waitForClick}${clearText}${marker}${appendText}The big tanuki shoved its way through the crowd
of people and continued through a door on the
other side of the room.${waitForClick}${clearText}${marker}${appendText}The young girl stayed on the same side of the
room as the little tanuki.${waitForClick}${clearText}${marker}${appendText}(I've got no clue what those tanuki are all
about, but...)${waitForClick}${clearText}${marker}${appendText}(I guess my friends aren't here either...)${waitForClick}${clearText}${marker}${appendText}He didn't see any familiar faces around.${waitForClick}${clearText}${marker}${appendText}He figured maybe they had already taken the far
elevator downstairs.${waitForClick}${clearText}${marker}${appendText}Just 20 minutes earlier, the visitor room had
reached capacity...${waitForClick}${clearText}${marker}${appendText}And the friends he had been waiting with had
gone ahead, leaving him behind to go down with
the next group.${waitForClick}${clearText}${marker}${appendText}(Oh well. I'm sure I'll find everyone down
below soon enough.)${waitForClick}${clearText}${marker}${appendText}Finally, the gate to the entrance slipped shut
quietly.${waitForClick}${clearText}${marker}${appendText}The big tanuki fiddled with something on the
wall and the room got a shade darker.${waitForClick}${clearText}`

removeBG({mode: BLACK, transition: 02})

playSFX({name: `SE03_02`, a1: 0, volume: 95})

stopBGM()

clock(`11:47`)

showTextbox()
text`${marker}${sound(EOP051)}${appendText}[Park staff]
"Hello everybody!"${waitForClick}${clearText}${marker}${appendText}A park employee emerged out of the darkness.${waitForClick}${clearText}${marker}${appendText}He wondered where she had come from. She was
wearing a flashy dress.${waitForClick}${clearText}${marker}${appendText}The dim light shining on her made her seem like
a character from some dream.${waitForClick}${clearText}`

playBGM({num: 14, volume: 100})

bgload({name: `EV_SO04A`, transition: 10})

showTextbox()
text`${marker}${appendText}[Visitors]
"..."${waitForClick}${clearText}${marker}${sound(EOP052)}${appendText}[Park staff]
"What? No reaction folks?"${waitForClick}${clearText}${marker}${sound(EOP053)}${appendText}[Park staff]
"I'll try that again..."${waitForClick}${clearText}${marker}${sound(EOP054)}${appendText}[Park staff]
"Hello!"${waitForClick}${clearText}${marker}${sound(EOP055)}${appendText}[Young Girl]
"Helloooooo!"${waitForClick}${clearText}${marker}${appendText}It was the girl who, just a little while ago,
had been attached to the rear of the large
tanuki.${waitForClick}${clearText}`

bgload({name: `EV_SO04B`, transition: 20})

showTextbox()
text`${marker}${sound(EOP056)}${appendText}[Park staff]
"Oh! I've found a girl with some spunk."${waitForClick}${clearText}${marker}${sound(EOP057)}${appendText}[Park staff]
"What's your name?"${waitForClick}${clearText}${marker}${sound(EOP058)}${appendText}[Young Girl]
"I'M CO-CO YA-GA-MI!"${waitForClick}${clearText}${marker}${sound(EOP059)}${appendText}[Coco]
"This is my pet dog, Pipi."${waitForClick}${clearText}${marker}${sound(PIPI_01)}${appendText}[Pipi]
"Woof!"${waitForClick}${clearText}${marker}${appendText}(So that isn't a tanuki, it's a dog.)${waitForClick}${clearText}${marker}${appendText}(I thought they didn't let pets in here.)${waitForClick}${clearText}${marker}${appendText}He tilted his head doubtfully.${waitForClick}${clearText}${marker}${sound(EOP060)}${appendText}[Park staff]
"So Coco, how many times have you been to LeMU?"${waitForClick}${clearText}`

showTextbox()
text`${marker}${sound(EOP061)}${appendText}[Coco]
"Uh, well...one,two,three,four,five..."${waitForClick}${clearText}${marker}${sound(EOP062)}${appendText}[Coco]
"This is my first time!"${waitForClick}${clearText}${marker}${sound(EOP063)}${appendText}[Park staff]
"Hee, hee. Aren't you a funny girl?"${waitForClick}${clearText}${marker}${sound(EOP064)}${appendText}[Coco]
"I get that a lot."${waitForClick}${clearText}${marker}${sound(EOP065)}${appendText}[Coco]
"You want me to do something even more funny?"${waitForClick}${clearText}`

bgload({name: `EV_SO04A`, transition: 20})

showTextbox()
text`${marker}${sound(EOP066)}${appendText}[Park staff]
"What?"${waitForClick}${clearText}${marker}${sound(EOP067)}${appendText}[Coco]
"My friend taught me a good joke the other day!"${waitForClick}${clearText}`

bgload({name: `EV_SO04C`, transition: 20})

showTextbox()
text`${marker}${sound(EOP068)}${appendText}[Park staff]
"O-ooh.... Er...Maybe some other time."${waitForClick}${clearText}${marker}${sound(EOP069)}${appendText}[Coco]
"Why not?"${waitForClick}${clearText}${marker}${sound(EOP070)}${appendText}[Park staff]
"Because I have to tell everyone something right
now."${waitForClick}${clearText}${marker}${sound(EOP071)}${appendText}[Coco]
"Oh. Okay then."${waitForClick}${clearText}${marker}${sound(EOP072)}${appendText}[Coco]
"But it's really funny..."${waitForClick}${clearText}${marker}${sound(EOP073)}${appendText}[Coco]
"That's too bad, huh Pipi?"${waitForClick}${clearText}${marker}${sound(PIPI_01)}${appendText}[Pipi]
"Woof!"${waitForClick}${clearText}`

bgload({name: `EV_SO04B`, transition: 20})

showTextbox()
text`${marker}${sound(EOP074)}${appendText}[Park staff]
"Ahem. Once again..."${waitForClick}${clearText}`

bgload({name: `EV_SO04A`, transition: 20})

showTextbox()
text`${marker}${sound(EOP075)}${appendText}[Park staff]
"On behalf of the LeMU marine theme park, I'd
like to thank you very much for coming."${waitForClick}${clearText}${marker}${sound(EOP076)}${appendText}[Park staff]
"I am about to give you a brief explanation
about the LeMU theme park and tell you a few
things to watch out for."${waitForClick}${clearText}${marker}${sound(EOP077)}${appendText}[Coco]
"Hey, who cares? Hurry up and let us inside
already!"${waitForClick}${clearText}${marker}${sound(EOP078)}${appendText}[Park staff]
"I would love to take everyone inside..."${waitForClick}${clearText}${marker}${sound(EOP079)}${appendText}[Park staff]
"But, I'm terribly sorry."${waitForClick}${clearText}${marker}${sound(EOP080)}${appendText}[Park staff]
"Everyone actually will have to stay in this
compression chamber for now."${waitForClick}${clearText}${marker}${sound(EOP081)}${appendText}[Park staff]
"It will only take 17 minutes."${waitForClick}${clearText}${marker}${sound(EOP082)}${appendText}[Park staff]
"So please just bear with me for that long."${waitForClick}${clearText}`

bgload({name: `EV_SO04B`, transition: 20})

showTextbox()
text`${marker}${sound(EOP083)}${appendText}[Park staff]
"First, let me explain a bit about this room...
it is called a compression chamber."${waitForClick}${clearText}${marker}${sound(EOP084)}${appendText}[Park staff]
"Starting from now, the air pressure in here is
going to rise to 6 atmospheres."${waitForClick}${clearText}${marker}${sound(EOP085)}${appendText}[Park staff]
"Why do you think it is necessary to raise the
air pressure? I'll explain the reason for that
in a moment..."${waitForClick}${clearText}`

bgload({name: `EV_SO04A`, transition: 20})

showTextbox()
text`${marker}${sound(EOP086)}${appendText}[Park staff]
"But before that, let me tell you a few things
you should be aware of."${waitForClick}${clearText}${marker}${sound(EOP087)}${appendText}[Park staff]
"As the air pressure rises, you may start to
feel a strange sensation in your ears."${waitForClick}${clearText}${marker}${sound(EOP088)}${appendText}[Park staff]
"Like when you are descending a mountain or in
an airplane. It's because the increased air
pressure is pressing on your ear drums."${waitForClick}${clearText}`

bgload({name: `EV_SO04B`, transition: 20})

showTextbox()
text`${marker}${sound(EOP089)}${appendText}[Park staff]
"So if you think your ears feel a bit
strange..."${waitForClick}${clearText}${marker}${sound(EOP090)}${appendText}[Park staff]
"Pinch your nose with your fingers, close your
mouth tight and try to pop your ears."${waitForClick}${clearText}${marker}${sound(EOP091)}${appendText}[Park staff]
"If that doesn't get your ears back to normal,
or you if don't feel well, please raise your
hand and let me know."${waitForClick}${clearText}${marker}${sound(EOP092)}${appendText}[Park staff]
"In the event that happens, we will immediately
stop increasing the air pressure."${waitForClick}${clearText}`

bgload({name: `EV_SO04C`, transition: 20})

showTextbox()
text`${marker}${sound(EOP093)}${appendText}[Park staff]
"By the way, are there any people here that
don't know how to pop their ears?"${waitForClick}${clearText}${marker}${appendText}[Park staff]
"..."${waitForClick}${clearText}${marker}${sound(EOP094)}"Is everything clear then?"${waitForClick}${clearText}${marker}${appendText}[Park staff]
"..."${waitForClick}${clearText}`

bgload({name: `EV_SO04A`, transition: 20})

showTextbox()
text`${marker}${sound(EOP095)}${appendText}[Park staff]
"Alright then. We'll initiate the rise in
pressure."${waitForClick}${clearText}${marker}${sound(EOP096)}${appendText}[Park staff]
"As I said before, the time required to increase
the pressure is 17 minutes."${waitForClick}${clearText}${marker}${sound(EOP097)}${appendText}[Park staff]
"During that time, I will explain to 
everyone about the structure of LeMU."${waitForClick}${clearText}`

bgload({name: `IMG01A`, transition: 20})

bgload({name: `IMG03A`, transition: 20})

showTextbox()
text`${marker}${sound(EOP098)}${appendText}[Park staff]
"As you all know, LeMU is floating in the
ocean..."${waitForClick}${clearText}${marker}${sound(EOP099)}${appendText}[Park staff]
"At a depth of between 51 and 103 feet..."${waitForClick}${clearText}`

bgload({name: `MAP03A`, transition: 20})

showTextbox()
text`${marker}${sound(EOP100)}${appendText}[Park staff]
"Now, if you look at this chart, you will see
that the structure is divided into four layers."${waitForClick}${clearText}${marker}${sound(EOP101)}${appendText}[Park staff]
"From the top these are called Insel null,
Erste boden, Zweite stock and Dritte
stock..."${waitForClick}${clearText}${marker}${sound(EOP102)}${appendText}[Park staff]
"In terms of a normal building, you might think
of it as a structure with a ground floor
extending down to a three story basement."${waitForClick}${clearText}${marker}${sound(EOP103)}${appendText}[Park staff]
"Insel null, here, is a floating island."${waitForClick}${clearText}${marker}${sound(EOP104)}${appendText}[Park staff]
"It is an immense, man-made island, floating in
the ocean..."${waitForClick}${clearText}${marker}${sound(EOP105)}${appendText}[Park staff]
"In German, 'insel' means 'island' and 'null'
means 'zero.'"${waitForClick}${clearText}${marker}${sound(EOP106)}${appendText}[Park staff]
"In other words, this is floor zero, or the
ground floor."${waitForClick}${clearText}${marker}${sound(EOP107)}${appendText}[Park staff]
"Next is from Erste to Dritte..."${waitForClick}${clearText}${marker}${appendText}Just then.${waitForClick}${clearText}${marker}${sound(EOP108)}${appendText}[Coco]
"Hey, hey. Hey, you."${waitForClick}${clearText}${marker}${sound(EOP109)}${appendText}[Coco]
"Hey, I'm talking to you."${waitForClick}${clearText}${marker}${appendText}As he was listening to the explanation, someone
pulled on him from behind.${waitForClick}${clearText}${marker}${appendText}He turned to look around.${waitForClick}${clearText}`

bgload({name: `EV_CO01A`, transition: 20})

showTextbox()
text`${marker}${appendText}It was the girl who had just been talking with
the park staff.${waitForClick}${clearText}${marker}${appendText}(What was her name again...?)${waitForClick}${clearText}${marker}${sound(EOP110)}${appendText}[Coco]
"Hey. Don't you want to know about my joke?"${waitForClick}${clearText}${marker}${appendText}(Oh, that's right.)${waitForClick}${clearText}${marker}${appendText}(Her name was Coco.)${waitForClick}${clearText}${marker}${appendText}(And that animal she's holding is 
Pepe, or Popo, or something...)${waitForClick}${clearText}${marker}${sound(EOP111)}${appendText}[Coco]
"You wanna know, don't you?"${waitForClick}${clearText}${marker}${sound(EOP112)}${appendText}[Takeshi]
"Huh? What?"${waitForClick}${clearText}${marker}${sound(EOP113)}${appendText}[Coco]
"The joke I was just talking about. It's an
Ame-joke."${waitForClick}${clearText}${marker}${sound(EOP114)}${appendText}[Takeshi]
"An ame..joke?"${waitForClick}${clearText}`

bgload({name: `EV_CO01C`, transition: 20})

showTextbox()
text`${marker}${sound(EOP115)}${appendText}[Coco]
"You haven't heard about them? They're real
popular now, ya' know."${waitForClick}${clearText}${marker}${sound(EOP116)}${appendText}[Takeshi]
"No, I haven't.... What are you talking about?"${waitForClick}${clearText}`

bgload({name: `EV_CO01A`, transition: 20})

showTextbox()
text`${marker}${sound(EOP117)}${appendText}[Coco]
"An Ame-joke is an American joke. Get it?
'Ame-joke.'"${waitForClick}${clearText}${marker}${sound(EOP118)}${appendText}[Takeshi]
"Oh, really..."${waitForClick}${clearText}${marker}${sound(EOP119)}${appendText}[Coco]
"Makes you wanna hear it, right? Want me to
tell you?"${waitForClick}${clearText}`
text`${appendText}${choice(00, 0000, |Listen, to, the, joke|Listen, to, the, staffer's, explanation)}`


switch (choice) {
  case 0: goto(lbl_00000765);
  case 1: goto(lbl_000007a5);
}
var lbl_00000765;
varop(`(28 0a a4) dd := (00) 1`)

showTextbox()
text`${marker}${sound(EOP120)}${appendText}[Takeshi]
"Yeah, I guess I'll listen to it."${waitForClick}${clearText}`

hideTextbox()

stopBGM()

showTextbox()
text`${marker}${sound(EOP121)}${appendText}[Coco]
"Okay! Here it goes!"${waitForClick}${clearText}`

hideTextbox()

playBGM({num: 9, volume: 100})

showTextbox()
text`${marker}${sound(EOP122)}${appendText}[Coco]
"Once there was this guy who was talking to the
ghost of his dead grandfather. So he asked him
a question."${waitForClick}${clearText}${marker}${sound(EOP123)}${appendText}[Coco]
"'How long is a million years to a ghost?' he
wanted to know."${waitForClick}${clearText}${marker}${sound(EOP124)}${appendText}[Coco]
"And the ghost answered."${waitForClick}${clearText}${marker}${sound(EOP125)}${appendText}[Coco]
"'A million years is like a second to me.'"${waitForClick}${clearText}${marker}${sound(EOP126)}${appendText}[Coco]
"Next the man asked..."${waitForClick}${clearText}${marker}${sound(EOP127)}${appendText}[Coco]
"'How much is a million dollars to a ghost?'"${waitForClick}${clearText}${marker}${sound(EOP128)}${appendText}[Coco]
"And the ghost answered."${waitForClick}${clearText}${marker}${sound(EOP129)}${appendText}[Coco]
"'A million dollars? It is but one, small, cent
to me.'"${waitForClick}${clearText}${marker}${sound(EOP130)}${appendText}[Coco]
"When he heard that, the man pretended to smile
all nice and then said..."${waitForClick}${clearText}${marker}${sound(EOP131)}${appendText}[Coco]
"'Well then, gramps, how about giving me one of
your cents then?'"${waitForClick}${clearText}${marker}${sound(EOP132)}${appendText}[Coco]
"Laughing the ghost replied."${waitForClick}${clearText}${marker}${sound(EOP133)}${appendText}[Coco]
"'Sure. Right away.'"${waitForClick}${clearText}${marker}${sound(EOP134)}${appendText}[Coco]
"'But can I get you to wait just a second?'"${waitForClick}${clearText}${marker}${appendText}[Takeshi]
"..."${waitForClick}${clearText}${marker}${sound(EOP135)}${appendText}[Coco]
"Hee, hee, heee..."${waitForClick}${clearText}`

bgload({name: `EV_CO01B`, transition: 20})

showTextbox()
text`${marker}${sound(EOP136)}${appendText}[Coco]
"Waaa! Ha, ha, ha!"${waitForClick}${clearText}${marker}${sound(EOP137)}${appendText}[Coco]
"Well? That's a pretty good joke, huh?"${waitForClick}${clearText}`

