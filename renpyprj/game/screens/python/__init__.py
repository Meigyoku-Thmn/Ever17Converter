import renpy.exports as renpy
import pygame_sdl2 as pygame
from python import VerticalGradient
from renpy.defaultstore import config
from renpy.text.text import Text
from renpy.defaultstore import config
from renpy.display.layout import AlphaMask, Window

class DTextBuilder():
   text = ""
   text_properties = {}
   use_gradient = False
   startcolor = None 
   endcolor = None 
   def __init__(self, text, **properties):
      self.text = text
      self.text_properties = properties
   def gradient_fill(self, startcolor, endcolor):
      self.use_gradient = True
      self.startcolor = startcolor
      self.endcolor = endcolor
      return self
   def build(self, **properties):
      if self.use_gradient == False:
         return Window(Text(self.text, **self.text_properties), **properties)
      text_alpha = Text(self.text, **self.text_properties)
      text_size = renpy.render(text_alpha, config.screen_width, config.screen_height, .0, .0).get_size()
      text_size = (int(round(text_size[0])), int(round(text_size[1])))
      text_fill = VerticalGradient(self.startcolor, self.endcolor, xysize=text_size)
      return AlphaMask(text_fill, text_alpha, **properties)