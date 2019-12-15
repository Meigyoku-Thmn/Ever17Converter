image bg clearlist = "../../output/asset/system/clist_bg.png"
image fglist menu1 = TransparentKeyedImage("../../output/asset/system/clist_menu1.png", key_color='green')
image fglist menu2 = "../../output/asset/system/clist_menu2.png"

init python:
   from python import bgm, sysvoice, make_linear_interpolater, partial_deco, objectview, clamp, style_props, VerticalGradient, get_at
   from screens.python import SmoothScroller
   import yaml
   scene_titles = {}
   with renpy.file("../../output/en_scene_titles.yaml") as file:
      scene_titles = yaml.load(file, Loader=yaml.FullLoader)

style clearlist_page_number:
   properties style_props('drop_shadow', 'main_font')
   color "#FFF"
   size 23
   xpos 650
   ypos 50
style achivement_text:   
   properties style_props('drop_shadow', 'main_font')
   color "#FFF"
   size 23

screen clearlist():
   tag menu

   # state
   default is_init_done = False
   default me = renpy.current_screen()
   default s = objectview(me.scope)
   default page = 2

   # functions
   python:
      if is_init_done == False:
         @partial_deco(me, s)
         def GoToPage(me, s, page):
            s.page = (page - 1) % 3 + 1

   # key mapping
   for key_name in ['mousedown_3', 'K_ESCAPE']:
      key key_name action Show("special_menu", transition=screen_menu_transition_fade_out_wipe_in)

   # interface
   add "bg clearlist"
   text str(page) + " / 3" style "clearlist_page_number"   
   if page == 1:
      add "fglist menu1" pos (101, 102) alpha 0.5
      $ x = 121; y = 121; spacing = 96
      text "Endings Cleared" style "achivement_text" pos (x, y)
      text "Scenes Completed" style "achivement_text" pos (x, y + spacing * 1)
      text "Paths Completed" style "achivement_text" pos (x, y + spacing * 2)
      text "Percentage Complete" style "achivement_text" pos (x, y + spacing * 3)
      text "Number of Screen Savers" style "achivement_text" pos (x, y + spacing * 4)
      $ x = 643
      text "11 / 11" style "achivement_text" xanchor 1.0 pos (x, y)
      text "126 / 126" style "achivement_text" xanchor 1.0 pos (x, y + spacing * 1)
      text "225 / 225" style "achivement_text" xanchor 1.0 pos (x, y + spacing * 2)
      text "114 / 114" style "achivement_text" xanchor 1.0 pos (x, y + spacing * 3)
      text "17 / 17" style "achivement_text" xanchor 1.0 pos (x, y + spacing * 4)
   if page == 2:
      add "fglist menu2" pos (90, 100) alpha 0.5
      $ x = 142; y = 118
      text "- Cleared Ending List -" style "achivement_text" pos (x, y)
      $ x += 25; y += 35; spacing = 34
      text "1. Tsugumi Ver. Good End" style "achivement_text" pos (x, y)
      text "2. Sora Ver. Good End" style "achivement_text" pos (x, y + spacing * 1)
      text "3. Tsugumi-Sora Ver. Epilogue" style "achivement_text" pos (x, y + spacing * 2)
      text "4. Tsugumi-Sora Ver. Bad End" style "achivement_text" pos (x, y + spacing * 3)
      text "5. You Ver. Good End" style "achivement_text" pos (x, y + spacing * 4)
      text "6. You Ver. Epilogue" style "achivement_text" pos (x, y + spacing * 5)
      text "7. You Ver. Bad End" style "achivement_text" pos (x, y + spacing * 6)
      text "8. Sara Ver. Good End" style "achivement_text" pos (x, y + spacing * 7)
      text "9. Sara Ver. Epilogue" style "achivement_text" pos (x, y + spacing * 8)
      text "10. Sara Ver. Bad End" style "achivement_text" pos (x, y + spacing * 9)
      text "11. Coco Ver. End" style "achivement_text" pos (x, y + spacing * 10)
   if page == 3:
      add "fglist menu2" pos (90, 100) alpha 0.5
      $ x = 142; y = 118
      text "- Scene Title List -" style "achivement_text" pos (x, y)
   imagebutton:
      idle ArrowLeft
      pos (30, 80)
      action Function(GoToPage, page - 1)
   imagebutton:
      idle ArrowRight
      pos (765, 80)
      action Function(GoToPage, page + 1)
   $ is_init_done = True