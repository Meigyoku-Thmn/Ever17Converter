# TODO: remove dependencies to the default styles
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