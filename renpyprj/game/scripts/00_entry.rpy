﻿define e = Character("Eileen")
image bg title1 = "../../output/asset/bg/title1.png"
image logo kid = "../../output/asset/bg/kid_logo.png"
image logo himeraki = "../../output/asset/bg/hirameki.png"

init python:
   from python import bgm

label main_menu:
   # play music bgm(21)
   # scene logo kid with Dissolve(0.2)
   # pause 1.0
   # scene logo himeraki with Dissolve(0.2)
   # pause 1.0
   # scene white with Dissolve(0.2)
   # $ renpy.movie_cutscene("../../output/asset/movie/sdr640.e17")
   # $ renpy.movie_cutscene("../../output/asset/movie/ever17.e17")
   scene white
   scene bg title1 with Dissolve(0.2)
   play music bgm(21)
   call screen main_menu with menu_transition_in
   $ renpy.quit()

label splashscreen:
   $ renpy.reset_physical_size()
   return

label start:
   play music "../../output/asset/bgm/bgm06.ogg"
   scene bg room
   show eileen happy
   e "You've created a new Ren'Py game."
   e "Once you add a story, pictures, and music, you can release it to the world!"
   return
