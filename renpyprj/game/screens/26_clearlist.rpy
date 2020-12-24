image bg clearlist = "../../output/asset/system/clist_bg.png"
image fglist menu1 = TransparentKeyedImage("../../output/asset/system/clist_menu1.png", key_color='green')
image fglist menu2 = "../../output/asset/system/clist_menu2.png"

init python:
   from python import bgm, sysvoice, make_linear_interpolater, partial_deco, partial_rebind_deco, objectview, clamp, style_props, VerticalGradient, get_at
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
   default page = 1
   default man_ycrop = 0.0
   default is_scrolling = False
   default spacing = 34
   default total_height = spacing * len(scene_titles)
   default scroll_limit_height = total_height - (spacing * 11)
   default scroller = SmoothScroller(scope=me.scope,
      num_type=float, step=50, duration=0.15, max_value=scroll_limit_height,
      map={"value": 'man_ycrop', "is_scrolling": "is_scrolling"})
   default dragging = None
   default last_st = 0.0
   default s = objectview(me.scope) #, mappee=scroller, map={"man_ycrop": 'value'})

   # functions
   python:
      if is_init_done == False:
         @partial_deco(me, s)
         def GoToPage(me, s, page):
            s.dragging = None
            s.scroller.stop()
            s.scroller.reset_value()
            s.page = (page - 1) % 3 + 1
         @partial_deco(me, s, scroller)
         def NavigateByWheel(me, s, scroller, key_name):
            s.dragging = None
            scroller.use_wheel()
            if key_name == "mousedown_4":
               scroller.trigger(direction="back")
            elif key_name == "mousedown_5":
               scroller.trigger(direction="forward")
         @partial_deco(me, s, scroller)
         def ClickArrow(me, s, scroller, direction):
            s.dragging = None
            current_pos = scroller.value if scroller.target_pos is None else scroller.target_pos
            current_index = current_pos // (s.spacing)
            if direction == 'back':
               where_to_scroll = s.spacing * (current_index - 11)
            elif direction == 'forward':
               where_to_scroll = s.spacing * (current_index + 11)
            scroller.stop()
            scroller.use_arrow(target_pos=where_to_scroll)
            scroller.trigger(direction)
         @partial_deco(me, s)
         def ArrowKeyEvent(me, s, key_name):
            s.dragging = key_name
            s.last_st = 0.0
            s.scroller.stop()
         @partial_deco(me, s)
         def ReleaseArrowKeyEvent(me, s, key_name):
            if (key_name.replace("keyup_", "") == s.dragging):
               s.dragging = None
         ori_event = me.event
         @partial_deco(me, s, scroller)
         def event_hook(me, s, scroller, ev, x, y, st):
            import pygame_sdl2 as pygame
            if ev.type == pygame.ACTIVEEVENT:
               if (ev.state == 2 and ev.gain == 0):
                  s.dragging = None
                  scroller.stop()
            if s.dragging is not None:
               renpy.timeout(0.0)
               if s.last_st != 0.0:
                  delta_pos = float(500 * (st - s.last_st))
                  if s.dragging == "K_DOWN":
                     s.man_ycrop += delta_pos
                  elif s.dragging == "K_UP":
                     s.man_ycrop -= delta_pos
                  s.man_ycrop = clamp(s.man_ycrop, 0, s.scroll_limit_height)
               s.last_st = st
               renpy.restart_interaction()
            if s.is_scrolling == True:
               scroller.event(ev, x, y, st)
            return s.ori_event(ev, x, y, st)
         me.event = event_hook

   # key mapping
   for key_name in ['mousedown_3', 'K_ESCAPE']:
      key key_name action Show("special_menu", transition=screen_menu_transition_fade_out_wipe_in)
   key 'K_LEFT' action Function(GoToPage, page - 1)
   key 'K_RIGHT' action Function(GoToPage, page + 1)
   if page == 3 and scroll_limit_height > 0: 
      for key_name in ['mousedown_4', 'mousedown_5']:
         key key_name action Function(NavigateByWheel, key_name)
      for key_name in ['K_DOWN', 'K_UP']:
         key key_name action Function(ArrowKeyEvent, key_name)
      for key_name in ['K_DOWN', 'K_UP']:
         key ("keyup_" + key_name) action Function(ReleaseArrowKeyEvent, "keyup_" + key_name)


   # interface
   add "bg clearlist"
   text str(page) + " / 3" style "clearlist_page_number"   
   if page == 1:
      add "fglist menu1" pos (101, 102) alpha 0.5
      $ x = 121; y = 121; _spacing = 96
      text "Endings Cleared" style "achivement_text" pos (x, y)
      text "Scenes Completed" style "achivement_text" pos (x, y + _spacing * 1)
      text "Paths Completed" style "achivement_text" pos (x, y + _spacing * 2)
      text "Percentage Complete" style "achivement_text" pos (x, y + _spacing * 3)
      text "Number of Screen Savers" style "achivement_text" pos (x, y + _spacing * 4)
      $ x = 643
      text "11 / 11" style "achivement_text" xanchor 1.0 pos (x, y)
      text "126 / 126" style "achivement_text" xanchor 1.0 pos (x, y + _spacing * 1)
      text "225 / 225" style "achivement_text" xanchor 1.0 pos (x, y + _spacing * 2)
      text "114 / 114" style "achivement_text" xanchor 1.0 pos (x, y + _spacing * 3)
      text "17 / 17" style "achivement_text" xanchor 1.0 pos (x, y + _spacing * 4)
   elif page == 2:
      add "fglist menu2" pos (90, 100) alpha 0.5
      $ x = 142; y = 118
      text "- Cleared Ending List -" style "achivement_text" pos (x, y)
      $ x += 25; y += 35
      text "1.  Tsugumi Ver. Good End" style "achivement_text" pos (x, y)
      text "2.  Sora Ver. Good End" style "achivement_text" pos (x, y + spacing * 1)
      text "3.  Tsugumi-Sora Ver. Epilogue" style "achivement_text" pos (x, y + spacing * 2)
      text "4.  Tsugumi-Sora Ver. Bad End" style "achivement_text" pos (x, y + spacing * 3)
      text "5.  You Ver. Good End" style "achivement_text" pos (x, y + spacing * 4)
      text "6.  You Ver. Epilogue" style "achivement_text" pos (x, y + spacing * 5)
      text "7.  You Ver. Bad End" style "achivement_text" pos (x, y + spacing * 6)
      text "8.  Sara Ver. Good End" style "achivement_text" pos (x, y + spacing * 7)
      text "9.  Sara Ver. Epilogue" style "achivement_text" pos (x, y + spacing * 8)
      text "10.  Sara Ver. Bad End" style "achivement_text" pos (x, y + spacing * 9)
      text "11.  Coco Ver. End" style "achivement_text" pos (x, y + spacing * 10)
   elif page == 3:
      add "fglist menu2" pos (90, 100) alpha 0.5
      $ x = 142; y = 118
      text "- Scene Title List -" style "achivement_text" pos (x, y)
      vbox:
         pos (x - 20, y + 35)
         at transform:
            crop (0, int(man_ycrop), 620, spacing * 11)
         $ _spacing = spacing
         for idx in range(len(scene_titles)):
            fixed:
               ysize _spacing
               text str(idx + 1) + '.  ' + scene_titles[idx] style "achivement_text"
      if man_ycrop > 0:
         imagebutton:
            idle ArrowUp
            pos (100, 145)
            action Function(ClickArrow, 'back')
      if man_ycrop < scroll_limit_height:
         imagebutton:
            idle ArrowDown
            pos (100, 520)
            action Function(ClickArrow, 'forward')
   predict False
   imagebutton:
      idle ArrowLeft
      pos (30, 80)
      action Function(GoToPage, page - 1)
   imagebutton:
      idle ArrowRight
      pos (765, 80)
      action Function(GoToPage, page + 1)
   $ is_init_done = True