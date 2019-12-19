import renpy.exports as renpy
import pygame_sdl2 as pygame
from renpy.defaultstore import config
from renpy.text.text import Text
from renpy.display.layout import AlphaMask, Window
from python import bgm, make_linear_interpolater, partial_deco, objectview, clamp, style_props, VerticalGradient

class DTextBuilder():
   text = ""
   text_properties = {}
   use_gradient = False
   startcolor = None 
   endcolor = None 
   def __init__(self, **properties):
      self.text_properties = properties
   def gradient_fill(self, startcolor, endcolor):
      self.use_gradient = True
      self.startcolor = startcolor
      self.endcolor = endcolor
      return self
   def build(self, text, **properties):
      if self.use_gradient == False:
         return Window(Text(text, **self.text_properties), **properties)
      text_alpha = Text(text, **self.text_properties)
      text_size = renpy.render(text_alpha, config.screen_width, config.screen_height, .0, .0).get_size()
      text_size = (int(round(text_size[0])), int(round(text_size[1])))
      text_fill = VerticalGradient(self.startcolor, self.endcolor, xysize=text_size)
      return AlphaMask(text_fill, text_alpha, **properties)

class SmoothScroller(object):
   def __init__(self, scope, num_type, step, duration, max_value, map={}):
      self.map = map
      self.scope = scope
      self.num_type = num_type
      self.step = step
      self.duration = duration
      self.max_value = max_value

      self.scrolling_delta = num_type(0.0)
      self.last_scrolling_pos = num_type(0.0)
      self.start_scrolling_pos = num_type(0.0)
      self.value = num_type(0.0)
   
   map = {}
   is_scrolling = False
   scrolling_delta = 0.0
   last_scrolling_st = 0.0
   last_st = 0.0
   scroll_interpolator = None
   currently_scroll_by = None
   target_pos = None

   def __setattr__(self, name, value):
      _map = super(SmoothScroller, self).__getattribute__('map')
      if name in _map:
         _scope = super(SmoothScroller, self).__getattribute__('scope')
         _scope[_map[name]] = value
      else:
         super(SmoothScroller, self).__setattr__(name, value)
   def __getattribute__(self, name):
      _map = super(SmoothScroller, self).__getattribute__('map')
      if name in _map:
         _scope = super(SmoothScroller, self).__getattribute__('scope')
         return _scope[_map[name]]
      else:
         return super(SmoothScroller, self).__getattribute__(name)
   def reset_value(self):
      self.value = self.num_type(0.0)
   def use_wheel(self):
      self.currently_scroll_by = "wheel"
   def use_arrow(self, target_pos):
      self.currently_scroll_by = "arrow"
      self.target_pos = self.num_type(target_pos) 
   def trigger(self, direction):
      scrolling_delta = self.num_type(0.0)
      if direction == "back":
         scrolling_delta -= self.step
      elif direction == "forward":
         scrolling_delta += self.step
      if self.is_scrolling == True:
         if (self.scrolling_delta * scrolling_delta > 0):
            scrolling_delta += self.scrolling_delta
            self.last_scrolling_st = self.last_st             
            self.last_scrolling_pos = self.value
            self.scroll_interpolator = make_linear_interpolater(
               self.last_scrolling_st, self.last_scrolling_st + self.duration,
               self.last_scrolling_pos, self.start_scrolling_pos + scrolling_delta,
               use_clamp=True
            )
      if self.is_scrolling == False or not (self.scrolling_delta * scrolling_delta > 0):
         self.last_st = 0.0
         self.last_scrolling_st = 0.0
         self.last_scrolling_pos = self.num_type(0.0)
      self.scrolling_delta = scrolling_delta
      self.is_scrolling = True
   def event(self, ev, x, y, st):
      if self.is_scrolling == False: return
      if self.last_st != 0.0:
         new_pos = self.num_type(self.scroll_interpolator(st))
         self.value = clamp(new_pos, 0, self.max_value)
         if new_pos == self.scroll_interpolator.right_max:
            self.stop()
         else:
            renpy.timeout(0.0)
      else:
         self.last_scrolling_st = st               
         self.last_scrolling_pos = self.value
         self.start_scrolling_pos = self.value
         if self.currently_scroll_by == "wheel":
            right_max = self.last_scrolling_pos + self.scrolling_delta
         elif self.currently_scroll_by == "arrow":
            right_max = self.target_pos
         self.scroll_interpolator = make_linear_interpolater(
            self.last_scrolling_st, self.last_scrolling_st + self.duration,
            self.last_scrolling_pos, right_max,
            use_clamp=True
         )
         renpy.timeout(0.0)
      self.last_st = st
      renpy.restart_interaction()
   def stop(self):
      self.is_scrolling = False
      self.currently_scroll_by = None
      self.scrolling_delta = None
      self.last_st = 0.0
      self.target_pos = None