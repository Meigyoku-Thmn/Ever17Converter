image bg album = "../../output/asset/system/album_bg.png"
define album_menu_path = "../../output/asset/system/album_menu.png"
image fgmenu album = TransparentKeyedImage(album_menu_path, key_color='green') 

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
   album_button_list = get_album_menu_list()

style album_upper:
   xpos 58
   ypos 46
   spacing 24

style album_lower:
   xpos 147
   ypos 238
   spacing 24

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
            action NullAction()
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
            action NullAction()