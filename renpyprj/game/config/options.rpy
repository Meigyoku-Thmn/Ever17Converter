init offset = -10
init python:
   import setup_debug
   setup_debug.init()
   import python;
   python.init()
   import screens.python
   screens.python.init()

   from python import TransparentKeyedImage
default persistent.textbox_opacity = 0.5
define config.fade_music = 0.5
define config.name = _("Ever17 - the out of infinity - Renpy Port")
image black = "#000"
image white = "#FFF"
image transparent = "#0000"
image messwin00 = TransparentKeyedImage("../../output/asset/system/messwin00.png", key_color='green')
image messwin01 = TransparentKeyedImage("../../output/asset/system/messwin01.png", key_color='green')
image messwin02 = TransparentKeyedImage("../../output/asset/system/messwin02.png", key_color='green')
image messwin03 = TransparentKeyedImage("../../output/asset/system/messwin03.png", key_color='green')
