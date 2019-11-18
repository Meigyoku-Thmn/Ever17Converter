# warning: renpy don't use cascading style behavior like css, so you have to be explicit about styling in one way or another 

image fgmenu title = "../../output/asset/system/titlemenu.png"
define scut_menu_path = "../../output/asset/system/scut_menu.png"
image fgmenu scut = scut_menu_path
image bg scut = "../../output/asset/system/scut_BG.png"
image bg op = "system/op_bg.png"

define screen_menu_transition_in_out = { "screens" : menu_transition_in_out }

init python:
   def get_titlemenu_list():
      width = 255
      height = 32
      def get_titlemenu_portion(idx, is_hightlight = False):
         x = 260 if is_hightlight == True else 0
         y = -7 + height * idx
         return x, y
      titlemenu_button_list = [];
      for i in range(12):
         x1, y1 = get_titlemenu_portion(i)
         x2, y2 = get_titlemenu_portion(i, True)
         button_img = Crop((x1, y1, width, height), "fgmenu title", ypos=-7 if i >= 5 else 0)
         button_img.hover_img = Crop((x2, y2, width, height), "fgmenu title", ypos=-7 if i >= 5 else 0)
         titlemenu_button_list.append(button_img)
      return titlemenu_button_list
   NewGame, Continue, Option, Special, Exit, Shortcut, Jukebox, Album_Wallpaper, ScreenSaver, SystemVoice, ClearList, Unknown = get_titlemenu_list()

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
         button_img = Crop((x1, y1, width, height), "fgmenu scut")
         button_img.hover_img = Crop((x2, y2, width, height), "fgmenu scut")
         scutmenu_button_list.append(button_img)
      return scutmenu_button_list
   scutmenu_button_list = get_scutmenu_list()

screen main_menu():
   tag menu
   vbox:
      spacing 7
      xoffset 282
      yoffset 311
      imagebutton idle NewGame hover NewGame.hover_img action Start()
      imagebutton idle Continue hover Continue.hover_img action ShowMenu("load")
      imagebutton idle Option hover Option.hover_img action ShowMenu("preferences")
      imagebutton idle Special hover Special.hover_img action Show("special_menu", transition=screen_menu_transition_in_out)
      imagebutton idle Exit hover Exit.hover_img action Quit(confirm=not main_menu)

screen special_menu():
   tag menu
   for key_name in ['mousedown_3', 'K_ESCAPE']:
      key key_name action Show("main_menu", transition=screen_menu_transition_in_out)
   vbox:
      spacing 7
      xoffset 282
      yoffset 318
      imagebutton idle Shortcut hover Shortcut.hover_img action ShowMenu("shortcut")
      imagebutton idle Jukebox hover Jukebox.hover_img action NullAction()
      imagebutton idle Album_Wallpaper hover Album_Wallpaper.hover_img action NullAction()
      imagebutton idle ScreenSaver hover ScreenSaver.hover_img action NullAction()
      imagebutton idle SystemVoice hover SystemVoice.hover_img action NullAction()
      imagebutton idle ClearList hover ClearList.hover_img action NullAction()

style drop_shadow:
   outlines [ (absolute(0), (1.0, 1.0, 1.0, 150), absolute(2), absolute(2)) ]

style radio_label_text is pref_label_text:
   take drop_shadow
style check_label_text is pref_label_text:
   take drop_shadow
style slider_label_text is pref_label_text:
   take drop_shadow
style mute_all_button_text is check_button_text:
   take drop_shadow

screen preferences():
   tag menu
   for key_name in ['mousedown_3', 'K_ESCAPE']:
      key key_name action ShowMenu("main_menu")
   add "bg op"
   add "messwin03" yalign 1.0 alpha 0.65
   vbox:
      xoffset 150
      yoffset 80
      hbox:
         box_wrap True
         if renpy.variant("pc") or renpy.variant("web"):
            vbox:
               style_prefix "radio"
               label _("Display")
               textbutton _("Window") action Preference("display", "window")
               textbutton _("Fullscreen") action Preference("display", "fullscreen")
         vbox:
            style_prefix "radio"
            label _("Rollback Side")
            textbutton _("Disable") action Preference("rollback side", "disable")
            textbutton _("Left") action Preference("rollback side", "left")
            textbutton _("Right") action Preference("rollback side", "right")
         vbox:
            style_prefix "check"
            label _("Skip")
            textbutton _("Unseen Text") action Preference("skip", "toggle")
            textbutton _("After Choices") action Preference("after choices", "toggle")
            textbutton _("Transitions") action InvertSelected(Preference("transitions", "toggle"))
         ## Additional vboxes of type "radio_pref" or "check_pref" can be
         ## added here, to add additional creator-defined preferences.

      null height (4 * gui.pref_spacing)
      hbox:
         style_prefix "slider"
         box_wrap True
         vbox:
            label _("Text Speed")
            bar value Preference("text speed")
            label _("Auto-Forward Time")
            bar value Preference("auto-forward time")
         vbox:
            if config.has_music:
               label _("Music Volume")
               hbox:
                     bar value Preference("music volume")

            if config.has_sound:
               label _("Sound Volume")
               hbox:
                     bar value Preference("sound volume")
                     if config.sample_sound:
                        textbutton _("Test") action Play("sound", config.sample_sound)

            if config.has_voice:
               label _("Voice Volume")
               hbox:
                  bar value Preference("voice volume")
                  if config.sample_voice:
                     textbutton _("Test") action Play("voice", config.sample_voice)

            if config.has_music or config.has_sound or config.has_voice:
               null height gui.pref_spacing
               textbutton _("Mute All"):
                  action Preference("all mute", "toggle")
                  style "mute_all_button"

define scut_descriptions = dict(enumerate([
   """~May 1st Takeshi's Perspective~
Takeshi escapes from the elevator, but there's no one to be found in LeMU. In order to escape the flooding, Takeshi goes with Tsugumi and Sora to the lower levels.""",
   """~May 2nd Takeshi's Perspective~
Takeshi moves into his second day at LeMU short on sleep. For some reason You and crew are in foul moods. Sora predicts the limits of LeMU's partitions. The power suddenly goes out.""",
   """~May 3rd Takeshi's Perspective~
"Nobody's come to save us yet, but I'm done being pessimistic"...is the sentiment for an instant, but a small mistake leads to an unexpected accident - and dangerous flooding.""",
   """~May 4th Tsugumi Version~
Takeshi goes to visit the injured Tsugumi. She tells him coldly, "I wanted to die." Takeshi explains to her the value of friends.""",
   """~May 5th Tsugumi Version~
Takeshi wakes up from a nightmare about death. The floor is eerily silent. At Tsugumi's request, Takeshi goes to the Jellyfish ride only to receive an unexpected confession...""",
   """~May 6th Tsugumi Version~
The time limit is quickly approaching. They all try to enjoy a "Last Supper." However, a new predicament arises. The key to their survival is in Himmel, or maybe IBF?""",
   """~May 7th Tsugumi Version~
The two were somehow able to survive and escape from IBF. But the submarine shuts down deep in the ocean. Takeshi makes up his mind that he must save Tsugumi.""",
]))

screen shortcut():   
   tag menu
   for key_name in ['mousedown_3', 'K_ESCAPE']:
      key key_name action ShowMenu("special_menu")
   add "bg scut"
   add "messwin03" yalign 1.0 alpha 0.65
   vbox:
      xoffset 32
      yoffset 50
      box_wrap True
      spacing 8
      box_wrap_spacing 32
      ymaximum 361
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
      style "drop_shadow"
      xmaximum 715
      color "#FFF"
      size 25
      xpos 40
      ypos 435