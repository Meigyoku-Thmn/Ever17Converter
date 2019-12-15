style main_menu:
   spacing 7
   xoffset 282
   yoffset 311

screen main_menu():
   tag menu
   vbox:
      style 'main_menu'
      imagebutton idle NewGame hover NewGame.hover_img action Start()
      imagebutton idle Continue hover Continue.hover_img action ShowMenu("load")
      imagebutton idle Option hover Option.hover_img action Show("preferences", transition=screen_menu_transition_dissolve)
      imagebutton idle Special hover Special.hover_img action Show("special_menu", transition=screen_menu_transition_wipe_out_in)
      imagebutton idle Exit hover Exit.hover_img action Quit(confirm=not main_menu)