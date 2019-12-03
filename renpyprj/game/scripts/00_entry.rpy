define e = Character("Eileen")
image bg title1 = "../../output/asset/bg/title1.png"
image logo kid = "../../output/asset/bg/kid_logo.png"
image logo himeraki = "../../output/asset/bg/hirameki.png"

# test
init -6 python:
   def test():
      import inspect
      import traceback
      import json
      try:
         print style.base_style.__getstate__()
         # print json.dumps(merge_dicts(*abc.__getstate__()['properties']), indent=2)
      except Exception:
         print(traceback.format_exc())
      finally:
         raise SystemExit()

label main_menu:
   call screen album_chara(page=1)
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
   $ print """This message should not appear, contact developer for support!
   Search key: {AFEEE197-4A6B-42E2-AD34-26903A5FA987}"""
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
