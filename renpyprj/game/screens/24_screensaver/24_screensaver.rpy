image bg screensaver = "../../output/asset/system/saver_bg.png"

init python:
   from lib.base_lib import style_props

init python:
   screensaver_description = ""
   with renpy.file("../../output/en_screensaver_description.txt") as file:
      screensaver_description = file.read()

init python:
   def get_screensaver_menu_list():
      screensaver_button_list = []
      for i in range(1, 18):
         button_img = Image("../../output/asset/system/svsm{0:02d}.png".format(i))
         screensaver_button_list.append(button_img)
      return screensaver_button_list
   screensaver_button_list = get_screensaver_menu_list()

style screensaver:
   xpos 8
   ypos 56
   box_wrap True
   spacing 3
   box_wrap_spacing 16
   xmaximum 791

style screensaver_description:
   properties style_props('drop_shadow', 'main_font')
   xmaximum 715
   color "#FFF"
   size 23
   xpos 40
   ypos 436

screen screensaver():
   tag menu
   for key_name in ['mousedown_3', 'K_ESCAPE']:
      key key_name action Show("special_menu", transition=screen_menu_transition_fade_out_wipe_in)
   add "bg screensaver"
   add "messwin03" yalign 1.0 alpha persistent.textbox_opacity
   default selected_index = -1
   hbox:
      style 'screensaver'
      for i in range(0, 17):
         $ screensaver_button = screensaver_button_list[i]
         imagebutton:
            at transform: 
               alpha (1.0 if i == selected_index else 0.5)
            idle screensaver_button
            hovered SetScreenVariable("selected_index", i)
            unhovered SetScreenVariable("selected_index", -1)
            action NullAction()
   text screensaver_description:
      style "screensaver_description"