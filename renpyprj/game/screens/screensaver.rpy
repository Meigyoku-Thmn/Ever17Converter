image bg screensaver = "../../output/asset/system/saver_bg.png"

init python:
   def get_screensaver_menu_list():
      screensaver_button_list = []
      for i in range(1, 18):
         button_img = Image("../../output/asset/system/svsm{0:02d}.png".format(i))
         screensaver_button_list.append(button_img)
      return screensaver_button_list
   screensaver_button_list = get_screensaver_menu_list()

screen screensaver():
   tag menu
   for key_name in ['mousedown_3', 'K_ESCAPE']:
      key key_name action Show("special_menu", transition=screen_menu_transition_fade_out_wipe_in)
   add "bg screensaver"
   add "messwin03" yalign 1.0 alpha 0.65
   default selected_index = -1
   hbox:
      xpos 8
      ypos 56
      box_wrap True
      spacing 3
      box_wrap_spacing 16
      xmaximum 791
      for i in range(0, 17):
         $ screensaver_button = screensaver_button_list[i]
         imagebutton:
            at transform: 
               alpha (1.0 if i == selected_index else 0.5)
            idle screensaver_button
            hovered SetScreenVariable("selected_index", i)
            unhovered SetScreenVariable("selected_index", -1)
            action NullAction()