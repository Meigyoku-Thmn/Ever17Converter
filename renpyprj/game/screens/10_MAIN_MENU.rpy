style main_menu:
   spacing 7
   xoffset 282
   yoffset 311

style bubble_text:
   properties style_props('main_font_medium')
   color "#000"
   size 15

init python:
   from threading import Timer

screen main_menu():
   tag menu
   vbox:
      style 'main_menu'
      imagebutton idle NewGame hover NewGame.hover_img action Start()
      imagebutton idle Continue hover Continue.hover_img action ShowMenu("load")
      imagebutton idle Option hover Option.hover_img action Show("preferences", transition=screen_menu_transition_dissolve)
      imagebutton idle Special hover Special.hover_img action Show("special_menu", transition=screen_menu_transition_wipe_out_in)
      imagebutton idle Exit hover Exit.hover_img action Quit(confirm=not main_menu)
   # https://lemmasoft.renai.us/forums/viewtopic.php?t=49912
   fixed:
      pos (80, 300)
      frame:
         xmaximum 20 + 160 + 394
         xminimum 20 + 160 + 170
         padding (10, 10)
         background Transform(Fixed(
            Image("system/text_bubble/tail.png", xanchor=4, pos=(20, -10)),
            Frame("system/text_bubble/base.png", left=8, top=8),
            Frame("system/text_bubble/border.png", left=8, top=8),
            AlphaMask(
               Fixed(Image("system/text_bubble/border_top.png", xanchor=398, xpos=20)),
               Frame("system/text_bubble/mask.png", left=8, top=8)
            ),
            Image("system/text_bubble/tail_border.png", xanchor=4, pos=(20, -10))
         ), alpha=0.78)
         hbox:
            vbox:
               add "thumb_test.png"
               null height 5
               text "01/02/20XX  20:30:25":
                  style "bubble_text" xcenter 0.5
            null width 10
            text ("""A1. Prologue  Premonitions & Omens
{center}ABC{/center}
{center}May  1st May  1st May  1st May  1st May  1st May  1st{/center}
{center}TTT{/center}
[Park staff]
"Are you having stomach pains?"
    It was the tanuki...
    No, forget it."""):
               style "bubble_text"
               slow_cps True