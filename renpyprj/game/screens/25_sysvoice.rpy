image bg sysvoice = "../../output/asset/system/sysvoice_bg.png"
image bg sysvoice2 = "../../output/asset/system/sysvoice_bg1.png"
define sysvoice_highlight_item_path = "../../output/asset/system/sysvoice_cur.png"
image fgitem sysvoice = sysvoice_highlight_item_path
define sysvoice_menu_path = "../../output/asset/system/sysvoice_menu.png"
image fgmenu sysvoice = TransparentKeyedImage(sysvoice_menu_path, key_color='green')

init python:
   from python import bgm, sysvoice, make_linear_interpolater, partial_deco, objectview, clamp, style_props, VerticalGradient, get_at
   from screens.python import SmoothScroller

init python:
   sysvoice_highlight_width, sysvoice_highlight_height = renpy.image_size(sysvoice_highlight_item_path)
   sysvoice_description = ""
   with renpy.file("../../output/en_sysvoice_description.txt") as file:
      sysvoice_description = file.read()
   import yaml
   sysvoices = {}
   with renpy.file("../../output/en_system_voices.yaml") as file:
      sysvoices = yaml.load(file, Loader=yaml.FullLoader)

init python:
   def get_sysvoice_menu_list():
      base_width, base_height = renpy.image_size(sysvoice_menu_path)
      width = base_width / 3
      height = base_height / 2
      def get_sysvoice_menu_portion(idx):
         x = (idx % 3) * width
         y = height * (idx // 3)
         return x, y
      sysvoice_button_list = []
      for i in range(7):
         x1, y1 = get_sysvoice_menu_portion(i)
         button_img = Crop((x1, y1, width, height), "fgmenu sysvoice")
         sysvoice_button_list.append(button_img)
      return sysvoice_button_list
   sysvoice_button_list = get_sysvoice_menu_list()

style sysvoice:
   xpos 68
   ypos 50
   spacing 26
   box_wrap True
   box_wrap_spacing 12
   xmaximum 732

style sysvoice_description:
   properties style_props('drop_shadow', 'main_font')
   xmaximum 715
   color "#FFF"
   size 23
   xpos 40
   ypos 436

screen sysvoice():
   tag menu
   for key_name in ['mousedown_3', 'K_ESCAPE']:
      key key_name action Show("special_menu", transition=screen_menu_transition_fade_out_wipe_in)
   add "bg sysvoice"
   add "messwin03" yalign 1.0 alpha persistent.textbox_opacity
   default selected_index = -1
   hbox:
      style 'sysvoice'
      for i in range(0, 6):
         $ sysvoice_button = sysvoice_button_list[i]
         imagebutton:
            at transform: 
               alpha (1.0 if i == selected_index else 0.0)
            idle sysvoice_button
            hovered SetScreenVariable("selected_index", i)
            unhovered SetScreenVariable("selected_index", -1)
            action Show("sysvoice_lines", transition=screen_menu_transition_dissolve, index=selected_index)
   text sysvoice_description:
      style "sysvoice_description"

style sysvoice_lines_wrapper:
   pos (24, 96)
   xysize (sysvoice_highlight_width, sysvoice_highlight_height * 16)
style sysvoice_lines_button:
   ysize sysvoice_highlight_height
style sysvoice_lines_button_text:
   properties style_props('drop_shadow1', 'main_font')
   size 19
   xpos 7
   color "#FFF"
style sysvoice_page_number:
   properties style_props('drop_shadow', 'main_font')
   color "#FFF"
   size 23
   xpos 650
   ypos 50

screen sysvoice_lines(index):
   tag menu

   # State
   default is_init_done = False
   default me = renpy.current_screen()
   default s = objectview(me.scope)
   python:
      if is_init_done == False:
         @partial_deco(me, s)
         def build_itemset(me, s):
            import types
            data = sysvoices[s.index]
            items = []
            if isinstance(data, types.DictType):
               items = map(
                  lambda (i, line): objectview({
                     'text': data['Name'] + ' "' + line + '"',
                     'id': data['StartId'] + i
                  }), 
                  enumerate(data['Lines'])
               )
            elif isinstance(data, types.ListType):
               for _data in data:
                  items.extend(map(
                     lambda (i, line): objectview({
                        'text': _data['Name'] + ' "' + line + '"',
                        'id': _data['StartId'] + i
                     }), 
                     enumerate(_data['Lines'])
                  ))
            return items   
   default items = build_itemset()
   default is_scrolling = False
   default man_ycrop = 0
   default total_height = sysvoice_highlight_height * len(items)
   default scroll_limit_height = total_height - (sysvoice_highlight_height * 16)
   default scroller = SmoothScroller(scope=me.scope,
      num_type=int, step=50, duration=0.15, max_value=scroll_limit_height,
      map={"value": 'man_ycrop', "is_scrolling": "is_scrolling"})
   default hovered_index = -1

   # Functions
   python:
      if is_init_done == False:
         @partial_deco(me, s)
         def OnGoBack(me, s):
            Show("sysvoice", transition=screen_menu_transition_dissolve)()
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
         @partial_deco(me, s, scroller)
         def get_where_to_scroll_by_arrow(me, s, scroller):
            item_pos = sysvoice_highlight_height * s.hovered_index
            if item_pos < scroller.value:
               return item_pos
            elif item_pos > scroller.value + (sysvoice_highlight_height * 15):
               return (s.hovered_index - 15) * sysvoice_highlight_height 
            return None
         @partial_deco(me, s, scroller)
         def NavigateByArrowKey(me, s, scroller, key_name):
            scroller.stop()
            if key_name.endswith("K_DOWN"):
               scroll_key_name = "mousedown_5"
            elif key_name.endswith("K_UP"):
               scroll_key_name = "mousedown_4"
            if s.hovered_index == -1:
               s.hovered_index = scroller.value // sysvoice_highlight_height
            elif scroll_key_name == "mousedown_5":
               s.hovered_index += 1
            elif scroll_key_name == "mousedown_4":
               s.hovered_index -= 1
            if key_name.startswith("repeat_"):
               s.hovered_index = clamp(s.hovered_index, 0, len(s.items) - 1)
               where_to_scroll = s.get_where_to_scroll_by_arrow()
               if where_to_scroll is not None: 
                  scroller.value = where_to_scroll
            else:
               s.hovered_index = s.hovered_index % len(s.items)          
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
            current_index = current_pos // (sysvoice_highlight_height)
            if direction == 'back':
               where_to_scroll = sysvoice_highlight_height * (current_index - 16)
            elif direction == 'forward':
               where_to_scroll = sysvoice_highlight_height * (current_index + 16)
            scroller.stop()
            scroller.use_arrow(target_pos=where_to_scroll)
            scroller.trigger(direction)
         @partial_deco(me, s)
         def OnSysVoiceSelect(me, s):
            idx = s.hovered_index
            if (idx == -1): return
            Play('sound', sysvoice(s.items[idx].id), fadeout=0.0)()
         @partial_deco(me, s)
         def GoToIndex(me, s, index):
            index = index % 6
            Show("sysvoice_lines", index=index)()
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
   for key_name in ['K_LEFT', 'K_RIGHT']:
      key key_name action NullAction()
   for key_name in config.keymap['input_enter']:
      key key_name action Function(OnSysVoiceSelect)

   # Interface
   add "bg sysvoice2"
   text str(index + 1) + " / 6" style "album_page_number"
   fixed:
      style "sysvoice_lines_wrapper"
      vbox:
         at transform:
            crop (0, man_ycrop, sysvoice_highlight_width, sysvoice_highlight_height * 16)
         for idx in range(len(items)):
            textbutton items[idx].text:
               style "sysvoice_lines_button"
               keyboard_focus False
               if is_scrolling == False:
                  hovered SetScreenVariable("hovered_index", idx)
               unhovered SetScreenVariable("hovered_index", -1)
               if hovered_index == idx:
                  background "fgitem sysvoice"
               focus_mask "fgitem sysvoice"
               action Play('sound', sysvoice(items[idx].id), fadeout=0.0)
   imagebutton:
      idle ArrowLeft
      pos (30, 80)
      action Function(GoToIndex, index - 1)
   imagebutton:
      idle ArrowRight
      pos (750, 80)
      action Function(GoToIndex, index + 1)
   if man_ycrop > 0:
      imagebutton:
         idle ArrowUp
         pos (392, 80)
         action Function(ClickArrow, 'back')
   if man_ycrop < scroll_limit_height:
      imagebutton:
         idle ArrowDown
         pos (392, 570)
         action Function(ClickArrow, 'forward')
   $ is_init_done = True