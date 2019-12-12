image bg jukebox = "../../output/asset/system/music_bg.png"
define music_popup_path = "../../output/asset/system/music_popup.png"

init python:
   from python import bgm, make_linear_interpolater, partial_deco, objectview, clamp, style_props, VerticalGradient


init python:
   import yaml
   jukebox_music = {}
   with renpy.file("../../output/en_jukebox_music.yaml") as file:
      jukebox_music = yaml.load(file, Loader=yaml.FullLoader)

init python:
   def music_popup_items():
      base_width, base_height = renpy.image_size(music_popup_path)
      height = base_height / 2
      width = height
      PlayButton = Crop((0, 0, width, height), music_popup_path)
      StopButton = Crop((width, 0, width, height), music_popup_path)
      HighlightItem = Crop((0, width, base_width, height), music_popup_path)
      return (PlayButton, StopButton, HighlightItem)
   PlayButton, StopButton, HighlightItem = music_popup_items()

style music_name_button:
   ysize HighlightItem.crop[3]
style music_name_button_text:
   properties style_props('drop_shadow1', 'main_font')
   size 19
   xpos 7
   color "#FFF"
style music_list:
   spacing 2
style music_list_wrapper:
   pos (190, 141)
   background "#000"
   xysize (HighlightItem.crop[2], HighlightItem.crop[3] * 8 + 2 * 7)

screen jukebox():
   default is_init_done = False
   default me = renpy.current_screen()
   default s = objectview(me.scope)
   tag menu
   for key_name in ['mousedown_3', 'K_ESCAPE']:
      key key_name action [Play('music', bgm(21), loop=True), 
         Show("special_menu", transition=screen_menu_transition_fade_out_wipe_in)]
   add "bg jukebox"
   add "messwin03" yalign 1.0 alpha persistent.textbox_opacity
   add PlayButton xpos 168 ypos 76
   default selected_index = -1
   default total_height = HighlightItem.crop[3] * len(jukebox_music) + 2 * (len(jukebox_music) - 1)
   default scroll_limit_height = total_height - (HighlightItem.crop[3] * 8 + 2 * 7)   
   default scrolling = None
   default last_st = 0.0
   default last_scrolling_st = 0.0
   default last_scrolling_pos = 0
   default scroll_duration = 0.15
   default scroll_step = 50
   default man_ycrop = 0
   if is_init_done == False:
      python:
         @partial_deco(me, s)
         def ScrollWheelEvent(me, s, key_name):
            scrolling = 0
            if key_name == "mousedown_4":
               scrolling -= s.scroll_step
            elif key_name == "mousedown_5":
               scrolling += s.scroll_step
            if s.scrolling is not None:
               if (s.scrolling * scrolling > 0):
                  scrolling += s.scrolling
                  s.last_scrolling_st = s.last_st             
                  s.last_scrolling_pos = s.man_ycrop
                  s.scroll_linear_intpl = make_linear_interpolater(
                     s.last_scrolling_st, s.last_scrolling_st + s.scroll_duration,
                     s.last_scrolling_pos, s.last_scrolling_pos + scrolling,
                     use_clamp=True
                  )
            if s.scrolling is None or not (s.scrolling * scrolling > 0):
               s.last_st = 0.0
               s.last_scrolling_st = 0.0
               s.last_scrolling_pos = 0
            s.scrolling = scrolling
         @partial_deco(me, s)
         def CorrectCropPosOnSelection(me, s):
            pass
         @partial_deco(me, s)
         def Print(me, s, text):
            print text
   fixed:
      style "music_list_wrapper"
      for key_name in ['mousedown_4', 'mousedown_5']:
         key key_name action Function(ScrollWheelEvent, key_name)
      vbox:
         at transform:
            crop (0, man_ycrop, HighlightItem.crop[2], HighlightItem.crop[3] * 8 + 2 * 7)
         style "music_list"
         for idx in range(len(jukebox_music)):
            $ music_record = jukebox_music[idx]
            textbutton "{0:02d}. ".format(idx + 1) + music_record['Name']:
               style "music_name_button"
               hovered SetScreenVariable("selected_index", idx)
               unhovered SetScreenVariable("selected_index", -1)
               if selected_index == idx:
                  background HighlightItem
               focus_mask HighlightItem
               action Function(Print, "{0:02d}. ".format(idx + 1) + music_record['Name'])
   if is_init_done == False:
      python:
         ori_event = me.event
         scroll_linear_intpl = None
         # I use this event function as an update function
         @partial_deco(me, s)
         def event_hook(me, s, ev, x, y, st):
            import pygame_sdl2 as pygame
            if ev.type == pygame.ACTIVEEVENT:
               if (ev.state == 2 and ev.gain == 0):
                  s.scrolling = None
            if s.scrolling is not None:
               if s.last_st != 0.0:
                  new_pos = int(round(s.scroll_linear_intpl(st)))
                  s.man_ycrop = new_pos
                  s.man_ycrop = clamp(s.man_ycrop, 0, s.scroll_limit_height)
                  if new_pos == s.scrolling + s.last_scrolling_pos:
                     s.scrolling = None
                     s.last_st = 0.0
                  else:
                     renpy.timeout(0.0)
               else:
                  s.last_scrolling_st = st               
                  s.last_scrolling_pos = s.man_ycrop
                  s.scroll_linear_intpl = make_linear_interpolater(
                     s.last_scrolling_st, s.last_scrolling_st + s.scroll_duration,
                     s.last_scrolling_pos, s.last_scrolling_pos + s.scrolling,
                     use_clamp=True
                  )
                  renpy.timeout(0.0)
               s.last_st = st
               renpy.restart_interaction()
            return s.ori_event(ev, x, y, st)
         me.event = event_hook
   $ is_init_done = True
