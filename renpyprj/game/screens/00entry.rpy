# warning: renpy don't use cascading style behavior like css, so you have to be explicit about styling in one way or another 

image fgmenu title = "../../output/asset/system/titlemenu.png"
define scut_menu_path = "../../output/asset/system/scut_menu.png"
image fgmenu scut = scut_menu_path
image bg scut = "../../output/asset/system/scut_BG.png"
image bg op = "system/op_bg.png"

define screen_menu_transition_wipe_out_in = { "screens" : menu_transition_wipe_out_in }
define screen_menu_transition_wipe_out_fade_in = { "screens" : menu_transition_wipe_out_fade_in }
define screen_menu_transition_fade_out_wipe_in = { "screens" : menu_transition_fade_out_wipe_in}

style drop_shadow:
   outlines [ (absolute(0), (1.0, 1.0, 1.0, 150), absolute(2), absolute(2)) ]

init python:
   def get_titlemenu_list():
      width = 255
      height = 32
      def get_titlemenu_portion(idx, is_hightlight = False):
         x = 260 if is_hightlight == True else 0
         y = -7 + height * idx
         return x, y
      titlemenu_button_list = [];
      for i in range(12):
         x1, y1 = get_titlemenu_portion(i)
         x2, y2 = get_titlemenu_portion(i, True)
         button_img = Crop((x1, y1, width, height), "fgmenu title", ypos=-7 if i >= 5 else 0)
         button_img.hover_img = Crop((x2, y2, width, height), "fgmenu title", ypos=-7 if i >= 5 else 0)
         titlemenu_button_list.append(button_img)
      return titlemenu_button_list
   NewGame, Continue, Option, Special, Exit, Shortcut, Jukebox, Album_Wallpaper, ScreenSaver, SystemVoice, ClearList, Unknown = get_titlemenu_list()

   def get_scutmenu_list():
      base_width, base_height = renpy.image_size(scut_menu_path)
      width = base_width / 2
      height = base_height / 36
      def get_scutmenu_portion(idx, is_hightlight = False):
         x = 0 if is_hightlight == True else width
         y = height * idx
         return x, y
      scutmenu_button_list = []
      for i in range(36):
         x1, y1 = get_scutmenu_portion(i)
         x2, y2 = get_scutmenu_portion(i, True)
         button_img = Crop((x1, y1, width, height), "fgmenu scut")
         button_img.hover_img = Crop((x2, y2, width, height), "fgmenu scut")
         scutmenu_button_list.append(button_img)
      return scutmenu_button_list
   scutmenu_button_list = get_scutmenu_list()