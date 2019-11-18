define config.name = _("Ever17 - the out of infinity - Renpy Port")
define config.main_menu_music = "../../output/asset/bgm/bgm21.ogg"
define menu_mask = "mask/menu.png"
image black = "#000"
image white = "#FFF"
image transparent = "#0000"
image messwin00 = TransparentKeyedImage("../../output/asset/system/messwin00.png", key_color='green')
image messwin01 = TransparentKeyedImage("../../output/asset/system/messwin01.png", key_color='green')
image messwin02 = TransparentKeyedImage("../../output/asset/system/messwin02.png", key_color='green')
image messwin03 = TransparentKeyedImage("../../output/asset/system/messwin03.png", key_color='green')
# ramplen: see https://en.wikipedia.org/wiki/Power_of_two
define menu_transition_in = ImageDissolve(menu_mask, 0.3, reverse=True, ramplen=64)
define menu_transition_out = ImageDissolve(menu_mask, 0.3, reverse=True, ramplen=64)
define menu_transition_in_out = MultipleTransition([
   False, menu_transition_out,
   "transparent", menu_transition_in,
   True
])