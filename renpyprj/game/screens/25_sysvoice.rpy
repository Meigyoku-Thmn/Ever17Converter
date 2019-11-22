image bg sysvoice = "../../output/asset/system/sysvoice_bg.png"
define sysvoice_menu_path = "../../output/asset/system/sysvoice_menu.png"
image fgmenu sysvoice = TransparentKeyedImage(sysvoice_menu_path, key_color='green') 

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

screen sysvoice():
   tag menu
   for key_name in ['mousedown_3', 'K_ESCAPE']:
      key key_name action Show("special_menu", transition=screen_menu_transition_fade_out_wipe_in)
   add "bg sysvoice"
   add "messwin03" yalign 1.0 alpha 0.65
   default selected_index = -1
   hbox:
      xpos 68
      ypos 50
      spacing 26
      box_wrap True
      box_wrap_spacing 12
      xmaximum 732
      for i in range(0, 6):
         $ sysvoice_button = sysvoice_button_list[i]
         imagebutton:
            at transform: 
               alpha (1.0 if i == selected_index else 0.0)
            idle sysvoice_button
            hovered SetScreenVariable("selected_index", i)
            unhovered SetScreenVariable("selected_index", -1)
            action NullAction()