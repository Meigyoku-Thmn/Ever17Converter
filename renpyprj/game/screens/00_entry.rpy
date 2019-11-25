# warning: renpy don't use cascading style behavior like css, so you have to be explicit about styling in one way or another 

image fgmenu title = "../../output/asset/system/titlemenu.png"
define menu_mask = "mask/menu.png"
# ramplen: see https://en.wikipedia.org/wiki/Power_of_two
define menu_transition_in = ImageDissolve(menu_mask, 0.3, reverse=True, ramplen=64)
define menu_transition_out = ImageDissolve(menu_mask, 0.3, reverse=True, ramplen=64)
define menu_transition_wipe_out_in = MultipleTransition([
   False, menu_transition_out,
   "transparent", menu_transition_in,
   True
])
define menu_transition_wipe_out_fade_in = MultipleTransition([
   False, menu_transition_out,
   "transparent", Dissolve(0.3),
   True
])
define menu_transition_fade_out_wipe_in = MultipleTransition([
   False, Dissolve(0.3),
   "transparent", menu_transition_in,
   True
])

define screen_menu_transition_wipe_out_in = { "screens": menu_transition_wipe_out_in }
define screen_menu_transition_wipe_out_fade_in = { "screens": menu_transition_wipe_out_fade_in }
define screen_menu_transition_fade_out_wipe_in = { "screens": menu_transition_fade_out_wipe_in }

style drop_shadow:
   outlines [ (absolute(0), Color('#000', alpha=1.0), absolute(2), absolute(2)) ]
style main_font:
   font font("Cabin-Regular")
style main_font_bold:
   font font("Cabin-Bold")
style main_font_italic:
   font font("Cabin-Italic")
style main_font_bolditalic:
   font font("Cabin-BoldItalic")
style main_font_medium:
   font font("Cabin-Medium")
style main_font_mediumitalic:
   font font("Cabin-MediumItalic")
style main_font_semibold:
   font font("Cabin-SemiBold")
style main_font_semibolditalic:
   font font("Cabin-SemiBoldItalic")

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