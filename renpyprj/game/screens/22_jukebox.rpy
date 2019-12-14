image bg jukebox = "../../output/asset/system/music_bg.png"
define music_popup_path = "../../output/asset/system/music_popup.png"

init python:
   from python import bgm, make_linear_interpolater, partial_deco, objectview, clamp, style_props, VerticalGradient
   from screens.python import SmoothScroller


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
style selected_music_name_text:
   properties style_props('drop_shadow1', 'main_font')
   size 19
   color "#FFF"
   ysize HighlightItem.crop[3]
   pos (222, 78)
style music_list:
   spacing 2
style music_list_wrapper:
   pos (190, 141)
   background "#000"
   xysize (HighlightItem.crop[2], HighlightItem.crop[3] * 8 + 2 * 7)

screen jukebox():
   tag menu
   # State
   default is_init_done = False
   default me = renpy.current_screen()
   default s = objectview(me.scope)
   default total_height = HighlightItem.crop[3] * len(jukebox_music) + 2 * (len(jukebox_music) - 1)
   default scroll_limit_height = total_height - (HighlightItem.crop[3] * 8 + 2 * 7)
   default scroller = SmoothScroller(scope=me.scope,
      num_type=int, step=50, duration=0.15, max_value=scroll_limit_height,
      map={"value": 'man_ycrop', "is_scrolling": "is_scrolling"})
   default selected_index = -1
   default last_selected_index = -1
   default hovered_index = -1
   default man_ycrop = 0
   default is_scrolling = False

   # Functions
   if is_init_done == False:
      python:
         @partial_deco(me, s)
         def OnGoBack(me, s):
            if s.selected_index != -1:
               s.selected_index = -1
            else:
               Play('music', bgm(21), loop=True)()
               Show("special_menu", transition=screen_menu_transition_fade_out_wipe_in)()
         @partial_deco(me, s, scroller)
         def GetWhereToScrollByArrow(me, s, scroller):
            item_pos = (HighlightItem.crop[3] + 2) * s.hovered_index
            if item_pos < scroller.value:
               return item_pos
            elif item_pos > scroller.value + (HighlightItem.crop[3] * 7 + 2 * 7):
               return (s.hovered_index - 7) * (HighlightItem.crop[3] + 2) 
            return None
         @partial_deco(me, s, scroller)
         def NavigateByArrowKey(me, s, scroller, key_name):
            scroller.stop()
            if key_name.endswith("K_DOWN"):
               scroll_key_name = "mousedown_5"
            elif key_name.endswith("K_UP"):
               scroll_key_name = "mousedown_4"
            if s.hovered_index == -1:
               s.hovered_index = scroller.value // (HighlightItem.crop[3] + 2)
            elif scroll_key_name == "mousedown_5":
               s.hovered_index += 1
            elif scroll_key_name == "mousedown_4":
               s.hovered_index -= 1
            if key_name.startswith("repeat_"):
               s.hovered_index = clamp(s.hovered_index, 0, len(jukebox_music) - 1)
               where_to_scroll = s.GetWhereToScrollByArrow()
               if where_to_scroll is not None: 
                  scroller.value = where_to_scroll
            else:
               s.hovered_index = s.hovered_index % len(jukebox_music)          
               where_to_scroll = s.GetWhereToScrollByArrow()
               if where_to_scroll is not None:
                  scroller.use_arrow(target_pos=where_to_scroll)
                  if scroll_key_name == "mousedown_4":
                     scroller.trigger(direction="back")
                  elif scroll_key_name == "mousedown_5":
                     scroller.trigger(direction="forward")
         @partial_deco(scroller)
         def NavigateByWheel(scroller, key_name):
            if scroller.currently_scroll_by == "arrow":
               scroller.stop()
            scroller.use_wheel()
            if key_name == "mousedown_4":
               scroller.trigger(direction="back")
            elif key_name == "mousedown_5":
               scroller.trigger(direction="forward")
         @partial_deco(me, s)
         def OnMusicSelect(me, s):
            idx = s.hovered_index
            music_record = jukebox_music[idx]
            print "{0:02d}. ".format(idx + 1) + music_record['Name']
            s.selected_index = idx
            s.last_selected_index = idx
         @partial_deco(me, s)
         def GetMusicFullName(me, s, index):
            return "{0:02d}. ".format(index + 1) + jukebox_music[index]['Name']
         ori_event = me.event
         @partial_deco(me, s, scroller)
         def event_hook(me, s, scroller, ev, x, y, st):
            import pygame_sdl2 as pygame
            if ev.type == pygame.ACTIVEEVENT:
               if (ev.state == 2 and ev.gain == 0):
                  scroller.stop()
            scroller.event(ev, x, y, st)
            return s.ori_event(ev, x, y, st)
         me.event = event_hook

   # Key mapping
   for key_name in ['mousedown_3', 'K_ESCAPE']:
      key key_name action Function(OnGoBack)      
   if scroll_limit_height > 0: 
      for key_name in ['mousedown_4', 'mousedown_5']:
         key key_name action Function(NavigateByWheel, key_name)
   for key_name in ['K_DOWN', 'K_UP', 'repeat_K_DOWN', 'repeat_K_UP']:
      key key_name action Function(NavigateByArrowKey, key_name)
   for key_name in config.keymap['input_enter']:
      key key_name action Function(OnMusicSelect)

   # Interface
   add "bg jukebox"
   add "messwin03" yalign 1.0 alpha persistent.textbox_opacity
   if selected_index != -1:
      add PlayButton xpos 168 ypos 76
   else:
      add StopButton xpos 168 ypos 76
   if last_selected_index != -1:
      text GetMusicFullName(last_selected_index) style "selected_music_name_text"
   fixed:
      style "music_list_wrapper"
      vbox:
         at transform:
            crop (0, man_ycrop, HighlightItem.crop[2], HighlightItem.crop[3] * 8 + 2 * 7)
         style "music_list"
         for idx in range(len(jukebox_music)):
            textbutton GetMusicFullName(idx):
               style "music_name_button"
               keyboard_focus False
               if is_scrolling == False:
                  hovered SetScreenVariable("hovered_index", idx)
               unhovered SetScreenVariable("hovered_index", -1)
               if hovered_index == idx or selected_index == idx:
                  background HighlightItem
               focus_mask HighlightItem
               action Function(OnMusicSelect)
   $ is_init_done = True
