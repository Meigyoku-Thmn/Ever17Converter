transform jukebox_special_menu_transition_wipe_out_fade_in(new_widget, old_widget):
   old_widget
   "transparent" with menu_transition_out
   pause disolve_duration
   function (lambda a, b, c: renpy.music.stop())
   new_widget with Dissolve(disolve_duration)
   pause disolve_duration

define screen_jukebox_special_menu_transition_wipe_out_fade_in = { "screens": jukebox_special_menu_transition_wipe_out_fade_in }

style special_menu:
   spacing 7
   xoffset 282
   yoffset 318

screen special_menu():
   tag menu
   for key_name in ['mousedown_3', 'K_ESCAPE']:
      key key_name action Show("main_menu", transition=screen_menu_transition_wipe_out_in)
   vbox:
      style 'special_menu'
      imagebutton idle Shortcut hover Shortcut.hover_img action Show("shortcut", transition=screen_menu_transition_wipe_out_fade_in)
      imagebutton idle Jukebox hover Jukebox.hover_img action Show("jukebox", transition=screen_jukebox_special_menu_transition_wipe_out_fade_in)
      imagebutton idle Album_Wallpaper hover Album_Wallpaper.hover_img action Show("album", transition=screen_menu_transition_wipe_out_fade_in)
      imagebutton idle ScreenSaver hover ScreenSaver.hover_img action Show("screensaver", transition=screen_menu_transition_wipe_out_fade_in)
      imagebutton idle SystemVoice hover SystemVoice.hover_img action Show("sysvoice", transition=screen_menu_transition_wipe_out_fade_in)
      imagebutton idle ClearList hover ClearList.hover_img action NullAction()