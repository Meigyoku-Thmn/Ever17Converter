image bg jukebox = "../../output/asset/system/music_bg.png"
define music_popup_path = "../../output/asset/system/music_popup.png"

init python:
   def music_popup_items():
      base_width, base_height = renpy.image_size(music_popup_path)
      height = base_height / 2
      width = height
      PlayButton = Crop((0, 0, width, height), music_popup_path)
      StopButton = Crop((width, 0, width, height), music_popup_path)
      HighlightItem = Crop((0, width, base_width, height), music_popup_path)
      return (PlayButton, StopButton, HighlightItem)
   PlayButton, StopButton, HighlightItem = music_popup_items()

transform jukebox_transition_fade_out_wipe_in(new_widget, old_widget):
   old_widget
   "transparent" with Dissolve(0.3)
   pause 0.3
   function (lambda a, b, c: renpy.music.play(bgm(21), loop=True))
   new_widget with menu_transition_in
   pause 0.3

define screen_jukebox_transition_fade_out_wipe_in = { "screens": jukebox_transition_fade_out_wipe_in }

screen jukebox():
   tag menu
   for key_name in ['mousedown_3', 'K_ESCAPE']:
      key key_name action Show("special_menu", transition=screen_jukebox_transition_fade_out_wipe_in)
   add "bg jukebox"
   add "messwin03" yalign 1.0 alpha persistent.textbox_opacity
   add PlayButton xpos 168 ypos 76
   default selected_index = -1
   hbox:
      pass