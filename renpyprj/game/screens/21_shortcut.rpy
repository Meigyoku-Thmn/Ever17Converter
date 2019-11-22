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

image bg scut = "../../output/asset/system/scut_BG.png"
define scut_menu_path = "../../output/asset/system/scut_menu.png"
image fgmenu scut = scut_menu_path

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
         button_img = Crop((x1, y1, width, height), "fgmenu scut")
         button_img.hover_img = Crop((x2, y2, width, height), "fgmenu scut")
         scutmenu_button_list.append(button_img)
      return scutmenu_button_list
   scutmenu_button_list = get_scutmenu_list()

screen shortcut():   
   tag menu
   for key_name in ['mousedown_3', 'K_ESCAPE']:
      key key_name action Show("special_menu", transition=screen_menu_transition_fade_out_wipe_in)
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