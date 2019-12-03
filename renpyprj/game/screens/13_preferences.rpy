image bg op = "system/op_bg.png"

style preferences:
   xpos 130
   ypos 60
   spacing 20

style preferences_line:
   spacing 70

style preferences_check:
   spacing 0
   xsize None
style preferences_check_label_text:
   properties style_props('drop_shadow', 'main_font_semibold')
   size 20
style preferences_check_button:
   foreground None
style preferences_check_button_text:
   properties style_props('drop_shadow', 'main_font')
   size 15

style preferences_slider
style preferences_slider_label_text:
   properties style_props('drop_shadow', 'main_font_semibold')
   size 20
style preferences_slider_vbox:
   xsize 282
style preferences_slider_slider:
   xsize 219
style preferences_slider_button:
   foreground None
style preferences_slider_button_text:
   properties style_props('drop_shadow', 'main_font')
   size 15

screen preferences():
   tag menu
   for key_name in ['mousedown_3', 'K_ESCAPE']:
      key key_name action Show("main_menu", transition=screen_menu_transition_dissolve)
   add "bg op"
   add "messwin03" yalign 1.0 alpha persistent.textbox_opacity
   vbox:
      style 'preferences'
      hbox:
         style 'preferences_line'
         if renpy.variant("pc") or renpy.variant("web"):
            vbox:
               style 'preferences_check' style_prefix "preferences_check"
               label _("Display")
               textbutton _("Window") action Preference("display", "window")
               textbutton _("Fullscreen") action Preference("display", "fullscreen")
         vbox:
            style 'preferences_check' style_prefix "preferences_check"
            label _("Rollback Side")
            textbutton _("Disable") action Preference("rollback side", "disable")
            textbutton _("Left") action Preference("rollback side", "left")
            textbutton _("Right") action Preference("rollback side", "right")
         vbox:
            style 'preferences_check' style_prefix "preferences_check"
            label _("Skip")
            textbutton _("Unseen Text") action Preference("skip", "toggle")
            textbutton _("After Choices") action Preference("after choices", "toggle")
            textbutton _("Transitions") action InvertSelected(Preference("transitions", "toggle"))

      hbox:
         style_prefix "preferences_slider"
         vbox:
            label _("Text Speed")
            bar value Preference("text speed")
            label _("Auto-Forward Time")
            bar value Preference("auto-forward time")
            label _("Textbox Transparency")
            bar value FieldValue(persistent, 'textbox_opacity', range=1.0, style="slider")
         vbox:
            if config.has_music:
               label _("Music Volume")
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
               null height 7
               textbutton _("Mute All") action Preference("all mute", "toggle")