image bg jukebox = "../../output/asset/system/music_bg.png"
define music_popup_path = "../../output/asset/system/music_popup.png"

init python:
   from python import bgm, make_linear_interpolater, partial_deco, objectview, clamp, style_props, VerticalGradient, get_at
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
style hotkey_hint_text:
   properties style_props('music_name_button_text')
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

style jukebox_info:
   properties style_props('drop_shadow', 'main_font')
   color "#FFF"
   size 23
style lyrics:
   properties style_props('main_font')
   color "#FFF"
   size 23
style lyrics_shadow:
   properties style_props('main_font')
   color "#000"
   size 23

screen jukebox():
   tag menu
   predict False
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
   default last_current_music_index = -1
   default hovered_index = -1
   default man_ycrop = 0
   default is_scrolling = False
   default current_music = None
   default lyrics_index = 0
   default last_lyrics_index = 0
   default lyric1 = Null()
   default lyric1_shadow = Null()
   default lyric2 = Null()
   default lyric2_shadow = Null()

   # Functions
   python:
      if is_init_done == False:
         @partial_deco(me, s)
         def prepare_lyrics_text(me, s):
            if s.hovered_index is not None and s.hovered_index != -1:
               current_music_index = s.hovered_index
            elif s.selected_index is not None and s.selected_index != -1:
               current_music_index = s.selected_index
            else: current_music_index = -1
            if s.last_current_music_index == current_music_index and s.last_lyrics_index == s.lyrics_index: return
            if s.current_music == None or len(s.current_music.Lyrics) == 0:
               s.lyric1 = Null(); s.lyric1_shadow = Null()
               s.lyric2 = Null(); s.lyric2_shadow = Null()
            else:
               if s.last_current_music_index != current_music_index:
                  s.lyrics_index = 0
               lyrics_index = clamp(s.lyrics_index, 0, len(s.current_music.Lyrics) - 2)
               text_builder = DTextBuilder(style='lyrics').gradient_fill("#FFF", "#ff8cff")
               s.lyric1 = text_builder.build(s.current_music.Lyrics[lyrics_index])
               s.lyric1_shadow = Text(s.current_music.Lyrics[lyrics_index], style='lyrics_shadow')
               s.lyric2 = text_builder.build(s.current_music.Lyrics[lyrics_index + 1])
               s.lyric2_shadow = Text(s.current_music.Lyrics[lyrics_index + 1], style='lyrics_shadow')
            s.last_current_music_index = current_music_index; s.last_lyrics_index = s.lyrics_index
         @partial_deco(me, s)
         def OnGoBack(me, s):
            if s.selected_index != -1:
               renpy.music.stop()
               s.selected_index = -1
            else:
               Play('music', bgm(21), loop=True)()
               Show("special_menu", transition=screen_menu_transition_fade_out_wipe_in)()
         @partial_deco(me, s, scroller)
         def get_where_to_scroll_by_arrow(me, s, scroller):
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
               where_to_scroll = s.get_where_to_scroll_by_arrow()
               if where_to_scroll is not None: 
                  scroller.value = where_to_scroll
            else:
               s.hovered_index = s.hovered_index % len(jukebox_music)          
               where_to_scroll = s.get_where_to_scroll_by_arrow()
               if where_to_scroll is not None:
                  scroller.use_arrow(target_pos=where_to_scroll)
                  if scroll_key_name == "mousedown_4":
                     scroller.trigger(direction="back")
                  elif scroll_key_name == "mousedown_5":
                     scroller.trigger(direction="forward")
         @partial_deco(me, s, scroller)
         def ClickArrow(me, s, scroller, direction):
            s.hovered_index = -1
            current_pos = scroller.value if scroller.target_pos is None else scroller.target_pos
            current_index = current_pos // (HighlightItem.crop[3] + 2)
            if direction == 'back':
               where_to_scroll = (HighlightItem.crop[3] + 2) * (current_index - 8)
            elif direction == 'forward':
               where_to_scroll = (HighlightItem.crop[3] + 2) * (current_index + 8)
            scroller.stop()
            scroller.use_arrow(target_pos=where_to_scroll)
            scroller.trigger(direction)
         @partial_deco(me, s)
         def ClickLyricsArrow(me, s, key_name):
            if key_name.endswith("K_DOWN"):
               direction = 'forward'
            elif key_name.endswith("K_UP"):
               direction = 'back'
            if direction == 'back':
               s.lyrics_index -= 1
            elif direction == "forward":
               s.lyrics_index += 1
            s.lyrics_index = clamp(s.lyrics_index, 0, len(s.current_music.Lyrics) - 2)
         @partial_deco(me, s, scroller)
         def NavigateByWheel(me, s, scroller, key_name):
            s.hovered_index = -1
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
            if (idx == -1): return
            music_record = jukebox_music[idx]
            renpy.music.play(bgm(music_record['FileId']), loop=True)
            s.selected_index = idx
            s.last_selected_index = idx
         @partial_deco(me, s)
         def GetMusicFullName(me, s, index):
            return "{0:02d}. ".format(index + 1) + jukebox_music[index]['Name']
         @partial_deco(me, s)
         def GetMusic(me, s, index):
            return objectview(jukebox_music[index])
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
      if hovered_index is not None and hovered_index != -1:
         current_music = GetMusic(hovered_index)
      elif selected_index is not None and selected_index != -1:
         current_music = GetMusic(selected_index)
      else: current_music = None

   # Key mapping
   for key_name in ['mousedown_3', 'K_ESCAPE']:
      key key_name action Function(OnGoBack)      
   if scroll_limit_height > 0: 
      for key_name in ['mousedown_4', 'mousedown_5']:
         key key_name action Function(NavigateByWheel, key_name)
   for key_name in ['K_DOWN', 'K_UP', 'repeat_K_DOWN', 'repeat_K_UP']:
      key key_name action Function(NavigateByArrowKey, key_name)
   for key_name in ['K_LEFT', 'K_RIGHT']:
      key key_name action NullAction()
   for key_name in config.keymap['input_enter']:
      key key_name action Function(OnMusicSelect)
   if current_music is not None and len(current_music.Lyrics) > 0:
      for key_name in ['ctrl_K_DOWN', 'ctrl_K_UP', 'ctrl_repeat_K_DOWN', 'ctrl_repeat_K_UP']:
         key key_name action Function(ClickLyricsArrow, key_name)

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
               # unhovered SetScreenVariable("hovered_index", -1)
               if hovered_index == idx or selected_index == idx:
                  background HighlightItem
               focus_mask HighlightItem
               action Function(OnMusicSelect)
   if man_ycrop > 0:
      imagebutton:
         idle ArrowUp
         pos (392, 128)
         action Function(ClickArrow, 'back')
   if man_ycrop < scroll_limit_height:
      imagebutton:
         idle ArrowDown
         pos (392, 400)
         action Function(ClickArrow, 'forward')
   if current_music:
      text get_at(current_music.Infos, 0, "") style "jukebox_info" pos (40, 436)
      text get_at(current_music.Infos, 1, "") style "jukebox_info" pos (0.5, 436)
      text get_at(current_music.Infos, 2, "") style "jukebox_info" pos (40, 468)
      text ('(Words fluctuate in "Ctrl and Up / Down")' if len(current_music.Lyrics) > 0 else ""):
         style "hotkey_hint_text" pos (0.5, 495) xanchor 0.5
      $ prepare_lyrics_text()
      if len(current_music.Lyrics) > 0:
         add lyric1_shadow pos (40+2, 520+2)
         add lyric1 pos (40, 520)
         add lyric2_shadow pos (40+2, 552+2)
         add lyric2 pos (40, 552)
         if lyrics_index > 0:
            imagebutton:
               idle ArrowUp
               pos (16, 525)
               action Function(ClickLyricsArrow, 'ctrl_K_UP')
         if lyrics_index < len(current_music.Lyrics) - 2:
            imagebutton:
               idle ArrowDown
               pos (16, 560)
               action Function(ClickLyricsArrow, 'ctrl_K_DOWN')
   $ is_init_done = True
