screen special_menu():
   tag menu
   for key_name in ['mousedown_3', 'K_ESCAPE']:
      key key_name action Show("main_menu", transition=screen_menu_transition_wipe_out_in)
   vbox:
      spacing 7
      xoffset 282
      yoffset 318
      imagebutton idle Shortcut hover Shortcut.hover_img action Show("shortcut", transition=screen_menu_transition_wipe_out_fade_in)
      imagebutton idle Jukebox hover Jukebox.hover_img action NullAction()
      imagebutton idle Album_Wallpaper hover Album_Wallpaper.hover_img action Show("album", transition=screen_menu_transition_wipe_out_fade_in)
      imagebutton idle ScreenSaver hover ScreenSaver.hover_img action Show("screensaver", transition=screen_menu_transition_wipe_out_fade_in)
      imagebutton idle SystemVoice hover SystemVoice.hover_img action NullAction()
      imagebutton idle ClearList hover ClearList.hover_img action NullAction()