image bg album = "../../output/asset/system/album_bg.png"
image bg album1 = "../../output/asset/system/album_bg1.png"
define album_menu_path = "../../output/asset/system/album_menu.png"
image fgmenu album = TransparentKeyedImage(album_menu_path, key_color='green')

init python:
   from python import make_linear_interpolater, partial_deco, objectview, clamp, style_props, VerticalGradient
   from screens.python import DTextBuilder

init python:
   album_description = "";
   with renpy.file("../../output/en_wallpaper_description.txt") as file:
      album_description = file.read()

init python:
   def get_album_menu_list():
      base_width, base_height = renpy.image_size(album_menu_path)
      width = base_width / 4
      height = base_height / 2
      def get_album_menu_portion(idx):
         x = (idx % 4) * width
         y = height * (idx // 4)
         return x, y
      album_button_list = []
      for i in range(7):
         x1, y1 = get_album_menu_portion(i)
         button_img = Crop((x1, y1, width, height), "fgmenu album")
         album_button_list.append(button_img)
      return album_button_list
   def get_full_bg_path(name):
      return "../../output/asset/bg/" + name + ".png"
   album_button_list = get_album_menu_list()

style album_upper:
   xpos 58
   ypos 46
   spacing 24

style album_lower:
   xpos 147
   ypos 238
   spacing 24

style album_description:
   properties style_props('drop_shadow', 'main_font')
   xmaximum 715
   color "#FFF"
   size 23
   xpos 40
   ypos 436

screen album():
   tag menu
   for key_name in ['mousedown_3', 'K_ESCAPE']:
      key key_name action Show("special_menu", transition=screen_menu_transition_fade_out_wipe_in)
   add "bg album"
   add "messwin03" yalign 1.0 alpha persistent.textbox_opacity
   default selected_index = -1
   hbox:
      style 'album_upper'
      for i in range(0, 4):
         $ album_button_upper = album_button_list[i]
         imagebutton:
            at transform: 
               alpha (1.0 if i == selected_index else 0.0)
            idle album_button_upper
            hovered SetScreenVariable("selected_index", i)
            unhovered SetScreenVariable("selected_index", -1)
            action Show("album_chara", transition=screen_menu_transition_dissolve, page=i+1)
   hbox:
      style 'album_lower'
      for i in range(4, 7):
         $ album_button_lower = album_button_list[i]
         imagebutton:
            at transform: 
               alpha (1.0 if i == selected_index else 0.0)
            idle album_button_lower
            hovered SetScreenVariable("selected_index", i)
            unhovered SetScreenVariable("selected_index", -1)
            action Show("album_chara", transition=screen_menu_transition_dissolve, page=i+1)
   text album_description:
      style "album_description"

init python:
   def get_thumb_path(thumb_name):
      return "../../output/asset/system/" + thumb_name + ".png"
   from collections import namedtuple
   ImageInfo = namedtuple('ImageInfo', 'name artist_name scroll_axis')
   ImageInfo.__new__.__defaults__ = (None,) * len(ImageInfo._fields)
   from odictliteral import odict
   you_list = odict[
      "sm_yu01a": ["ev_yu01a", "ev_yu01b"],
      "sm_yu09a": ["ev_yu09a"],
      "sm_yu02a": ["ev_yu02a", "ev_yu02c", "ev_yu02b"],
      "sm_yu10a": ["ev_yu10a", "ev_yu10b", "ev_yu10c"],
      "sm_yu04a": ["ev_yu04a"],
      "sm_yu03a": ["ev_yu03a", "ev_yu03b", "ev_yu03c"],
      "sm_yu05a": ["ev_yu05a", "ev_yu05b"],
      "sm_yu06a": ["ev_yu06a"],
      "sm_yu07a": ["ev_yu07a", "ev_yu07b", "ev_yu07c"],
      "sm_yu08d": ["ev_yu08d", "ev_yu08a", "ev_yu08b", "ev_yu08c"],
      "sm_yu13a": ["ev_yu13a"],
      "sm_yu11a": ["ev_yu11a"],
      "sm_yu14a": ["ev_yu14a", "ev_yu14b"],
      "sm_yu12a": ["ev_yu12a", "ev_yu12b"],
      "sm_yu15a": ["ev_yu15a", "ev_yu15b"],
      "sm_yu18a": ["ev_yu18a"],
      "sm_yu17a": ["ev_yu17a", "ev_yu17b"],
      "sm_yu16a": ["ev_yu16a"],
   ]
   tsugumi_list = odict[
      "sm_tu01a": ["ev_tu01a", "ev_tu01b", "ev_tu01c"],
      "sm_tu04a": ["ev_tu04a", "ev_tu04b"],
      "sm_tu05a": ["ev_tu05a", "ev_tu05b", "ev_tu05c"],
      "sm_tu06a": ["ev_tu06a", "ev_tu06b"],
      "sm_tu07a": ["ev_tu07a", "ev_tu07b"],
      "sm_tu09a": ["ev_tu09a"],
      "sm_tu10a": ["ev_tu10a", "ev_tu10b", "ev_tu10c", "ev_tu10d"],
      "sm_tu02a": ["ev_tu02a", "ev_tu02b"],
      "sm_tu08a": ["ev_tu08a", "ev_tu08b"],
      "sm_tu08c": ["ev_tu08c"],
      "sm_tu03a": ["ev_tu03a"],
      "sm_tu11a": ["ev_tu11a", "ev_tu11b", "ev_tu11c", "ev_tu11d", "ev_tu11e"],
      "sm_tu12a": ["ev_tu12a"],
      "sm_tu13a": ["ev_tu13a", "ev_tu13b", "ev_tu13c"],
      "sm_tu14a": ["ev_tu14a", "ev_tu14b", "ev_tu14c", "ev_tu14d"],
      "sm_tu15a": ["ev_tu15a", "ev_tu15b", "ev_tu15c"],
      "sm_tu16a": ["ev_tu16a", "ev_tu16b"],
      "sm_tu18a": ["ev_tu18a"],
      "sm_tu17a": ["ev_tu17a"],
   ]
   sora_list = odict[
      "sm_so04a": ["ev_so04a", "ev_so04b", "ev_so04c"],
      "sm_so05a": ["ev_so05a", "ev_so05b"],
      "sm_so08a": ["ev_so08a", "ev_so08b", "ev_so08c"],
      "sm_so09a": ["ev_so09a", "ev_so09b", "ev_so09c", "ev_so09d", "ev_so09e", "ev_so09f", "ev_so09g", "ev_so09h", "ev_so09i", "ev_so09j"],
      "sm_so06a": ["ev_so06a", "ev_so06b", "ev_so06c"],
      "sm_so01a": ["ev_so01a", "ev_so01b", "ev_so01c"],
      "sm_so02a": ["ev_so02a", "ev_so02b", "ev_so02c"],
      "sm_so03a": ["ev_so03a"],
      "sm_so11a": ["ev_so11a", "ev_so11b", "ev_so11c"],
      "sm_so12a": ["ev_so12a", "ev_so12b", "ev_so12c"],
      "sm_so10a": ["ev_so10a", "ev_so10b", "ev_so10c"],
      "sm_so13a": ["ev_so13a", "ev_so13b"],
      "sm_so07a": ["ev_so07a", "ev_so07b", "ev_so07c"],
      "sm_so14a": ["ev_so14a", "ev_so14b", "ev_so14c", "ev_so14d"],
      "sm_so15a": ["ev_so15a", "ev_so15b"],
   ]
   sara_list = odict[
      "sm_sa01a": ["ev_sa01a", "ev_sa01c"],
      "sm_sa02a": ["ev_sa02a"],
      "sm_sa03a": ["ev_sa03a"],
      "sm_sa11a": ["ev_sa11a", "ev_sa11b"],
      "sm_sa04a": ["ev_sa04a"],
      "sm_sa05a": ["ev_sa05a"],
      "sm_sa06a": ["ev_sa06a", "ev_sa06b", "ev_sa06c"],
      "sm_sa07a": ["ev_sa07a"],
      "sm_sa10a": ["ev_sa10a"],
      "sm_sa08a": ["ev_sa08a"],
      "sm_sa09a": ["ev_sa09a", "ev_sa09b"],
      "sm_sa14a": ["ev_sa14a", "ev_sa14b", "ev_sa14c"],
      "sm_sa12a": ["ev_sa12a", "ev_sa12b", "ev_sa12c"],
      "sm_sa13a": ["ev_sa13a", "ev_sa13b", "ev_sa13c"],
      "sm_sa15a": ["ev_sa15a"],
      "sm_sa16a": ["ev_sa16a", "ev_sa16b"],
   ]
   coco_list = odict[
      "sm_co01a": ["ev_co01a", "ev_co01b", "ev_co01c"],
      "sm_co02a": ["ev_co02a"],
      "sm_co03a": ["ev_co03a", "ev_co03b", "ev_co03c"],
      "sm_co04a": ["ev_co04a"],
      "sm_co21a": ["ev_co21a"],
      "sm_co05a": ["ev_co05a"],
      "sm_co19a": ["ev_co19a", "ev_co19b"],
      "sm_co19c": ["ev_co19c", "ev_co19d"],
      "sm_co12a": ["ev_co12a"],
      "sm_co13a": ["ev_co13a", "ev_co13b", "ev_co13c", "ev_co13d"],
      "sm_co06a": ["ev_co06a"],
      "sm_co08a": ["ev_co08a", "ev_co08b"],
      "sm_co09a": ["ev_co09a", "ev_co09c"],
      "sm_co11a": ["ev_co11a", "ev_co11b"],
      "sm_co18a": [ImageInfo("ev_co18a", None, "horizontal")],
      "sm_co17a": ["ev_co17a", "ev_co17b"],
      "sm_co10a": ["ev_co10a"],
      "sm_co10b": ["ev_co10b", "ev_co10c"],
      "sm_co07a": ["ev_co07a", "ev_co07b"],
      "sm_co20a": ["ev_co20a"],
   ]
   other_list = odict[
      "sm_co16a": ["ev_co16a"],
      "sm_et04a": ["ev_et04a"],
      "sm_et05a": ["ev_et05a", "ev_et05b", "ev_et05c", "ev_et05d"],
      "sm_et02a": ["ev_et02a", "ev_et02b"],
      "sm_et02c": ["ev_et02c"],
      "sm_et01a": ["ev_et01a", "ev_et01b", "ev_et01c"],
      "sm_et03a": ["ev_et03a", "ev_et03b"],
      "sm_co14a": ["ev_co14a"],
      "sm_co15a": ["ev_co15a", "ev_co15b", "ev_co15c", "ev_co15d", "ev_co15e", "ev_co15f"],
   ]
   other2_list = odict[
      "smst01": [ImageInfo("post01", "Illustrated by Yuu Takigawa", "vertical")],
      "smst02": [ImageInfo("post02", "Illustrated by Yuu Takigawa", "vertical")],
      "smst03": [ImageInfo("post03", "Illustrated by Yuu Takigawa")],
      "smst17": [ImageInfo("post17", "Illustrated by Yuu Takigawa")],
      "smst05": [ImageInfo("post05", "Illustrated by Yuu Takigawa", "vertical")],
      "smst06": [ImageInfo("post06", "Illustrated by Yuu Takigawa", "vertical")],
      "smst07": [ImageInfo("post07", "Illustrated by Yuu Takigawa", "vertical")],
      "smst08": [ImageInfo("post08", "Illustrated by Yuu Takigawa", "vertical")],
      "smst13": [ImageInfo("post13", "Illustrated by Yuu Takigawa", "vertical")],
      "smst09": [ImageInfo("post09", "Illustrated by Yuu Takigawa", "vertical")],
      "smst10": [ImageInfo("post10", "Illustrated by Sousi Nakazato", "vertical")],
      "smst11": [ImageInfo("post11", "Illustrated by Sousi Nakazato", "vertical")],
      "smst12": [ImageInfo("post12", "Illustrated by Yuu Takigawa", "vertical")],
      "smst14": [ImageInfo("post14", "Illustrated by Rikuentai", "vertical")],
      "smst04": [ImageInfo("post04", "Illustrated by Yuu Takigawa", "vertical")],
      "smst16": [ImageInfo("post16", "Illustrated by Katuhiko Youki")],
      "smst15": [ImageInfo("post15", "Illustrated by Yuu Takigawa", "vertical")],
   ]
   album_groups = [you_list, tsugumi_list, sora_list, sara_list, coco_list, other_list, other2_list]

style album_chara:
   xpos 25
   ypos 100
   spacing 4
   box_wrap True
   box_wrap_spacing 9

style album_page_number:
   properties style_props('drop_shadow', 'main_font')
   color "#FFF"
   size 23
   xpos 650
   ypos 50

screen album_chara(page):
   tag menu
   for key_name in ['mousedown_3', 'K_ESCAPE']:
      key key_name action Show("album", transition=screen_menu_transition_dissolve)
   add "bg album1"
   default current_page = page
   default GotoPreviousPage = lambda p: SetScreenVariable("current_page", p - 1 if p > 1 else len(album_groups))
   default GotoNextPage = lambda p: SetScreenVariable("current_page", p + 1 if p < len(album_groups) else 1)
   key "mousedown_4" action GotoPreviousPage(current_page)
   key "mousedown_5" action GotoNextPage(current_page)
   imagebutton:
      idle ArrowLeft xpos 30 ypos 80
      action GotoPreviousPage(current_page)
   imagebutton:
      idle ArrowRight xpos 750 ypos 80
      action GotoNextPage(current_page)
   text str(current_page) + " / 7" style "album_page_number"
   default selected_index = -1
   hbox:
      style "album_chara"
      $ album_group = album_groups[current_page - 1]
      for i, thumb_name in enumerate(album_group):
         $ thumb_image = get_thumb_path(thumb_name)
         imagebutton:
            at transform: 
               alpha (1.0 if i == selected_index else 0.5)
            idle thumb_image
            hovered SetScreenVariable("selected_index", i)
            unhovered SetScreenVariable("selected_index", -1)
            action Show("chara_slide_show", transition=screen_menu_transition_dissolve, 
               images=album_group[thumb_name], page=current_page)

style artist_name_wrapper:
   xalign 1.0
   yalign 1.0
   offset (-30, -10)

style artist_name_shadow:
   properties style_props('main_font')
   color "#000"
   size 23
   xalign 1.0
   yalign 1.0
   offset (-30 + 2, -10 + 2)

style artist_name:
   properties style_props('main_font')
   color "#FFF"
   size 23

screen chara_slide_show(images, page):
   default is_init_done = False
   tag menu   
   default me = renpy.current_screen()
   default s = objectview(me.scope)
   default current_idx = 0
   default stop_auto_scroll_anim = False
   default man_xalign = 0.0
   default man_yalign = 0.0
   python:
      image = images[current_idx]
      artist_name = "";
      name = image;
      scroll_axis = None
      if isinstance(image, ImageInfo): 
         name = image.name
         artist_name = image.artist_name
         scroll_axis = image.scroll_axis
      bg_image = get_full_bg_path(name)   
   if is_init_done == False:
      python:
         @partial_deco(me, s)
         def capture_atl_align(me, s):
            bg_image_atl = me.widgets['bg_wrapper'].child
            s.man_xalign = bg_image_atl.xalign or 0.0
            s.man_yalign = bg_image_atl.yalign or 0.0
         @partial_deco(me, s)
         def GoNext(me, s):
            if s.scroll_axis in ["vertical", "horizontal"] and s.stop_auto_scroll_anim == False:
               return [Function(s.capture_atl_align), SetScreenVariable("stop_auto_scroll_anim", True)]
            elif s.current_idx + 1 < len(s.images):
               return [SetScreenVariable("stop_auto_scroll_anim", False), SetScreenVariable('current_idx', s.current_idx + 1), SetScreenVariable("man_yalign", 0.0), SetScreenVariable("man_xalign", 0.0)]
            else:
               return s.CloseSlideShow()
         @partial_deco(me, s)
         def CloseSlideShow(me, s):
            return Show("album_chara", transition=screen_menu_transition_dissolve, page=s.page)
   key 'mousedown_1' action GoNext()   
   for key_name in ['mousedown_3', 'K_ESCAPE']:
      key key_name action CloseSlideShow()
   default dragging = None
   default scrolling = None
   default last_st = 0.0
   default last_scrolling_st = 0.0
   default last_scrolling_pos = 0.0
   default scroll_duration = 0.15
   default scroll_step = 0.1
   if is_init_done == False:
      python:
         @partial_deco(me, s)
         def ReleaseArrowKeyEvent(me, s, key_name):
            if (key_name.replace("keyup_", "") == s.dragging):
               s.dragging = None
         @partial_deco(me, s)
         def ArrowKeyEvent(me, s, key_name):
            s.dragging = key_name
            s.last_st = 0.0
            s.scrolling = None
         @partial_deco(me, s)
         def ScrollWheelEvent(me, s, key_name):
            scrolling = 0.0
            if key_name == "mousedown_4":
               scrolling -= s.scroll_step
            elif key_name == "mousedown_5":
               scrolling += s.scroll_step
            if s.scrolling is not None:
               if (s.scrolling * scrolling > 0):
                  scrolling += s.scrolling
                  s.last_scrolling_st = s.last_st
                  if s.scroll_axis == "vertical":                     
                     s.last_scrolling_pos = s.man_yalign
                  elif s.scroll_axis == "horizontal":
                     s.last_scrolling_pos = s.man_xalign
                  s.scroll_linear_intpl = make_linear_interpolater(
                     s.last_scrolling_st, s.last_scrolling_st + s.scroll_duration,
                     s.last_scrolling_pos, s.last_scrolling_pos + scrolling,
                     use_clamp=True
                  )
            if s.scrolling is None or not (s.scrolling * scrolling > 0):
               s.last_st = 0.0
               s.last_scrolling_st = 0.0
               s.last_scrolling_pos = 0.0
            s.scrolling = scrolling
            s.dragging = None
   if stop_auto_scroll_anim == True:
      for key_name in ['K_DOWN', 'K_UP', 'K_LEFT', "K_RIGHT"]:
         key key_name action Function(ArrowKeyEvent, key_name)
      for key_name in ['K_DOWN', 'K_UP', 'K_LEFT', "K_RIGHT"]:
         key ("keyup_" + key_name) action Function(ReleaseArrowKeyEvent, "keyup_" + key_name)
      for key_name in ['mousedown_4', 'mousedown_5']:
         key key_name action Function(ScrollWheelEvent, key_name)
   fixed:
      id "bg_wrapper"
      add bg_image:
         if (stop_auto_scroll_anim == False):
            if scroll_axis == "vertical":
               at transform:
                  pause disolve_duration
                  yalign 0.0
                  linear 0.8 yalign 1.0
                  linear 0.8 yalign 0.0
                  function (lambda a, b, c: SetScreenVariable("stop_auto_scroll_anim", True)())
            elif scroll_axis == "horizontal":
               at transform:
                  pause disolve_duration
                  xalign 0.0
                  linear 0.8 xalign 1.0
                  linear 0.8 xalign 0.0
                  function (lambda a, b, c: SetScreenVariable("stop_auto_scroll_anim", True)())
         else:
            xalign man_xalign
            yalign man_yalign
   predict False
   if is_init_done == False and artist_name is not None and len(artist_name) > 0:
      python:
         artist_name_shadow = Text(artist_name, style='artist_name_shadow')
         artist_name_img = (DTextBuilder(artist_name, style='artist_name')
            .gradient_fill("#FFF", "#2170e4") 
            .build(style="artist_name_wrapper"))
   if artist_name is not None and len(artist_name) > 0:
      add artist_name_shadow
      add artist_name_img
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
                  s.dragging = None # stop dragging and scrolling when window losts focus
                  s.scrolling = None
            if s.dragging is not None:
               renpy.timeout(0.0)
               if s.last_st != 0.0:
                  delta_pos = 1.25 * (st - s.last_st)
                  if s.dragging == "K_DOWN":
                     s.man_yalign += delta_pos
                  elif s.dragging == "K_UP":
                     s.man_yalign -= delta_pos
                  elif s.dragging == "K_LEFT":
                     s.man_xalign -= delta_pos
                  elif s.dragging == "K_RIGHT":
                     s.man_xalign += delta_pos
                  s.man_xalign = clamp(s.man_xalign, 0.0, 1.0)
                  s.man_yalign = clamp(s.man_yalign, 0.0, 1.0)
               s.last_st = st
               renpy.restart_interaction()
            if s.scrolling is not None:
               if s.last_st != 0.0:
                  new_pos = s.scroll_linear_intpl(st)
                  if s.scroll_axis == "vertical":                     
                     s.man_yalign = new_pos
                  elif s.scroll_axis == "horizontal":
                     s.man_xalign = new_pos
                  s.man_xalign = clamp(s.man_xalign, 0.0, 1.0)
                  s.man_yalign = clamp(s.man_yalign, 0.0, 1.0)
                  if new_pos == s.scrolling + s.last_scrolling_pos:
                     s.scrolling = None
                     s.last_st = 0.0
                  else:
                     renpy.timeout(0.0)
               else:
                  s.last_scrolling_st = st
                  if s.scroll_axis == "vertical":                     
                     s.last_scrolling_pos = s.man_yalign
                  elif s.scroll_axis == "horizontal":
                     s.last_scrolling_pos = s.man_xalign
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