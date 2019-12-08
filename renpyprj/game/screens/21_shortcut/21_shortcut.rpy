image bg scut = "../../output/asset/system/scut_BG.png"
define scut_menu_path = "../../output/asset/system/scut_menu.png"

init python:
   from lib.base_lib import style_props

init python:
   import yaml
   scut_descriptions = {}
   with renpy.file("../../output/en_scut_descriptions.yaml") as file:
      scut_descriptions = yaml.load(file, Loader=yaml.FullLoader)

init python:
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
         button_img = Crop((x1, y1, width, height), scut_menu_path)
         button_img.hover_img = Crop((x2, y2, width, height), scut_menu_path)
         scutmenu_button_list.append(button_img)
      return scutmenu_button_list
   scutmenu_button_list = get_scutmenu_list()

style shortcut:
   xoffset 32
   yoffset 50
   box_wrap True
   spacing 8
   box_wrap_spacing 32
   ymaximum 361
style scut_description:
   properties style_props('drop_shadow', 'main_font')
   xmaximum 715
   color "#FFF"
   size 23
   xpos 40
   ypos 436

screen shortcut():   
   tag menu
   for key_name in ['mousedown_3', 'K_ESCAPE']:
      key key_name action Show("special_menu", transition=screen_menu_transition_fade_out_wipe_in)
   add "bg scut"
   add "messwin03" yalign 1.0 alpha persistent.textbox_opacity
   vbox:
      style 'shortcut'
      for i in range(32):
         $ scutmenu_button = scutmenu_button_list[i]
         imagebutton:
            idle scutmenu_button 
            hover scutmenu_button.hover_img
            hovered SetScreenVariable("selected_index", i)
            unhovered SetScreenVariable("selected_index", -1)
            action NullAction()
   default selected_index = -1
   text scut_descriptions.get(selected_index) or "":
      style "scut_description"