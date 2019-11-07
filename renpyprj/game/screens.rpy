# warning: renpy don't use cascading style behavior like css, so you have to be explicit about styling in one way or another 

define titlemenu_path = "../../output/asset/system/titlemenu.png"
image titlemenu = titlemenu_path

define in_out_transition = { "screens" : Fade(0.2, 0.0, 0.2, color="#0000") }

init python:
   titlemenu_width, titlemenu_height = renpy.image_size(titlemenu_path)
   button_hover_xpos = -3

   def get_titlemenu_portion(idx, is_hightlight = False):
      x = titlemenu_width / 2.0 if is_hightlight == True else 0
      y = (titlemenu_height / 12.0) * idx
      return x, y

   titlemenu_button_list = [];

   for i in range(12):
      x1, y1 = get_titlemenu_portion(i)
      x2, y2 = get_titlemenu_portion(i, True)
      button_img = Crop((x1, y1, titlemenu_width / 2.0, titlemenu_height / 12.0), titlemenu_path)
      button_img.hover_img = Crop((x2, y2, titlemenu_width / 2.0, titlemenu_height / 12.0), titlemenu_path, xpos=button_hover_xpos)
      titlemenu_button_list.append(button_img)

   NewGame, Continue, Option, Special, Exit, Shortcut, Jukebox, Album_Wallpaper, ScreenSaver, SystemVoice, ClearList, Unknown = titlemenu_button_list

screen main_menu():
   tag menu
   vbox:
      spacing 7
      xoffset 282
      yoffset 318
      imagebutton idle NewGame hover NewGame.hover_img action Start()
      imagebutton idle Continue hover Continue.hover_img action ShowMenu("load")
      imagebutton idle Option hover Option.hover_img action ShowMenu("preferences")
      imagebutton idle Special hover Special.hover_img action Show("special_menu", transition=in_out_transition)
      imagebutton idle Exit hover Exit.hover_img action Quit(confirm=not main_menu)

screen special_menu():
   tag menu
   for key_name in ['mousedown_3', 'K_ESCAPE']:
      key key_name action Show("main_menu", transition=in_out_transition)
   vbox:
      spacing 7
      xoffset 282
      yoffset 318
      imagebutton idle Shortcut hover Shortcut.hover_img action NullAction()
      imagebutton idle Jukebox hover Jukebox.hover_img action NullAction()
      imagebutton idle Album_Wallpaper hover Album_Wallpaper.hover_img action NullAction()
      imagebutton idle ScreenSaver hover ScreenSaver.hover_img action NullAction()
      imagebutton idle SystemVoice hover SystemVoice.hover_img action NullAction()
      imagebutton idle ClearList hover ClearList.hover_img action NullAction()
   