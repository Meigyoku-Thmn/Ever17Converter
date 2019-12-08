# warning: renpy don't use cascading style behavior like css, so you have to be explicit about styling in one way or another
init python:
   from lib.base_lib import TransparentKeyedImage, font

image fgmenu title = "../../output/asset/system/titlemenu.png"
define udlr_cursor_path = "../../output/asset/system/udlr_cur.png"
image fgudlr cursor = TransparentKeyedImage(udlr_cursor_path, key_color='green')
define menu_mask = "mask/menu.png"
define disolve_duration = 0.2
define wipe_duration = 0.3
# ramplen: see https://en.wikipedia.org/wiki/Power_of_two
define menu_transition_in = ImageDissolve(menu_mask, wipe_duration, reverse=True, ramplen=64)
define menu_transition_out = ImageDissolve(menu_mask, wipe_duration, reverse=True, ramplen=64)
define menu_transition_wipe_out_in = MultipleTransition([
   False, menu_transition_out,
   "transparent", menu_transition_in,
   True
])
define menu_transition_wipe_out_fade_in = MultipleTransition([
   False, menu_transition_out,
   "transparent", Dissolve(disolve_duration),
   True
])
define menu_transition_fade_out_wipe_in = MultipleTransition([
   False, Dissolve(disolve_duration),
   "transparent", menu_transition_in,
   True
])
define menu_transition_fade_out_fade_in = MultipleTransition([
   False, Dissolve(disolve_duration),
   "transparent", Dissolve(disolve_duration),
   True
])

define screen_menu_transition_wipe_out_in = { "screens": menu_transition_wipe_out_in }
define screen_menu_transition_wipe_out_fade_in = { "screens": menu_transition_wipe_out_fade_in }
define screen_menu_transition_fade_out_wipe_in = { "screens": menu_transition_fade_out_wipe_in }
define screen_menu_transition_fade_out_fade_in = { "screens": menu_transition_fade_out_fade_in }
define screen_menu_transition_dissolve = { "screens": Dissolve(disolve_duration) }

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


transform arrow_animation(items):
   items[0]
   pause 0.4 / 3
   items[1]
   pause 0.4 / 3
   items[2]
   pause 0.4 / 3
   repeat

init python:
   def get_udlr_cursors():
      base_width, base_height = renpy.image_size(udlr_cursor_path)
      width = base_width / 3
      height = base_height / 4
      def get_udlr_cursor_portion(x, y):
         return x * width, y * height
      arrow_anims = []
      for y in range(4):
         items = []
         for x in range(3):
            x1, y1 = get_udlr_cursor_portion(x, y)
            arrow_img = Crop((x1, y1, width, height), "fgudlr cursor")
            items.append(arrow_img)
         arrow_anims.append(arrow_animation(items))
      return arrow_anims
   ArrowUp, ArrowDown, ArrowLeft, ArrowRight = get_udlr_cursors()