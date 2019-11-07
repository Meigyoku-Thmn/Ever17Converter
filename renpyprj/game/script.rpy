define e = Character("Eileen")
image bg title1 = "../../output/asset/bg/title1.png"
image black = "#000"
image white = "#FFF"

label main_menu:
   scene white
   scene bg title1 with Dissolve(0.06)
   call screen main_menu with ImageDissolve(mask, 0.5, reverse=True, ramplen=32)
   $ print "This message should not appear, contact developer for support!"
   $ renpy.quit()

label splashscreen:
   $ renpy.reset_physical_size()
   return

label start:
   play music "C:/Ever17Converter/output/asset/bgm/bgm06.wav"
   scene bg room
   show eileen happy
   e "You've created a new Ren'Py game."
   e "Once you add a story, pictures, and music, you can release it to the world!"
   return
