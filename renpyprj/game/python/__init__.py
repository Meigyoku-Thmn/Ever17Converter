import renpy.exports as renpy
import pygame_sdl2 as pygame
import types
from functools import wraps, partial
Style = renpy.styledata.styleclass.Style
style = renpy.store.style
im = renpy.display.im
# https://stackoverflow.com/questions/1969240/mapping-a-range-of-values-to-another
def make_linear_interpolater(left_min, left_max, right_min, right_max, use_clamp=False): 
   # Figure out how 'wide' each range is
   leftSpan = left_max - left_min  
   rightSpan = right_max - right_min  

   # Compute the scale factor between left and right values 
   scaleFactor = float(rightSpan) / float(leftSpan) 

   # create interpolation function using pre-calculated scaleFactor
   _range = [right_min, right_max]
   _range.sort()
   _min, _max = _range
   def interp_fn(value):
      rs = right_min + (value - left_min) * scaleFactor
      if use_clamp == True:
         rs = clamp(rs, _min, _max)
      return rs
   interp_fn.left_min = left_min
   interp_fn.left_max = left_max
   interp_fn.right_min = right_min
   interp_fn.right_max = right_max
   return interp_fn

def get_at(arr, idx, default=None):
   if idx < 0 or idx >= len(arr):
      return default
   return arr[idx]

def partial_deco(*args, **kwargs):
   def _partial_deco(fn):
      return partial(fn, *args, **kwargs)
   return _partial_deco

def partial_rebind_deco(*args, **kwargs):
   def map_args(arg):
      if callable(arg): return arg()
      return arg
   def map_kwargs(value):
      return map_args(value)
   def _partial_rebind_deco(fn):
      def resolving_fn(*args, **kwargs):
         args = map(map_args, args)
         kwargs = {k: map_kwargs(v) for k, v in kwargs.iteritems()}
         return fn(*args, **kwargs)
      return partial(resolving_fn, *args, **kwargs)
   return _partial_rebind_deco

def objectview(d, mappee=None, map={}):
   _map = map
   _dict = d
   class _objectview(object):
      def __setattr__(self, name, value):
         if name in _dict:
            _dict[name] = value
            if name in _map:
               setattr(mappee, _map[name], value)
         else: raise KeyError(name)
      def __getattribute__(self, name):
         return _dict[name]
   return _objectview()

def clamp(value, _min, _max):
   return max(min(value, _max), _min)

def memoize(function):
   cache = {}
   @wraps(function)
   def wrapper(*args):
      if args in cache:
         return cache[args]
      else:
         val = function(*args)
         cache[args] = val
         return val
   return wrapper

# https://stackoverflow.com/questions/38987/how-do-i-merge-two-dictionaries-in-a-single-expression
def merge_dicts(*dict_args):
   """
   Given any number of dicts, shallow copy and merge into a new dict,
   precedence goes to key value pairs in latter dicts.
   """
   result = {}
   for dictionary in dict_args:
      result.update(dictionary)
   return result

def style_props(*args):
   arr = []
   for arg in args:
      if isinstance(arg, dict): arr.append(arg)
      elif isinstance(arg, Style): arr.append(arg.properties)
      elif isinstance(arg, basestring): arr.extend(style[arg].properties)
      else: raise ValueError('item is not a string, dict or Style')
   return merge_dicts(*arr)

def bgm(idx):
   return "../../output/asset/bgm/bgm{0:02d}.ogg".format(idx)
def font(name):
   return "fonts/{0}.ttf".format(name)

class TransparentKeyedImage(im.ImageBase):
   """
      This image class implements transparent key color
   """
   def __init__(self, image, key_color=None, **properties):
      if (key_color is None): 
         raise Exception('key_color is None!');
      image = im.image(image)
      super(TransparentKeyedImage, self).__init__(image, key_color, **properties)

      self.image = image
      self.key_color = key_color

   def get_hash(self):
      return self.image.get_hash()

   def predict_files(self):
      return self.image.predict_files()

   def load(self):
      child = im.cache.get(self.image)

      try:
         renpy.display.render.blit_lock.acquire()
         rv = child.convert()
         rv.set_colorkey(pygame.Color(self.key_color), pygame.RLEACCEL)
         rv = renpy.display.pgrender.copy_surface(rv, alpha=True)
      finally:
         renpy.display.render.blit_lock.release()

      return rv

# https://www.pygame.org/project/307/5415
def _vertical(size, startcolor, endcolor):
   """
   Draws a vertical linear gradient filling the entire surface. Returns a
   surface filled with the gradient (numeric is only 2-3 times faster).
   """
   size = (int(round(size[0])), int(round(size[1])))
   height = size[1]
   bigSurf = renpy.display.pgrender.surface((1, height), True)
   dd = 1.0 / height
   sr, sg, sb, sa = startcolor
   er, eg, eb, ea = endcolor
   rm = (er - sr) * dd
   gm = (eg - sg) * dd
   bm = (eb - sb) * dd
   am = (ea - sa) * dd
   for y in range(height):
      bigSurf.set_at((0, y), (
         int(sr + rm*y),
         int(sg + gm*y),
         int(sb + bm*y),
         int(sa + am*y)
      ))
   return pygame.transform.scale(bigSurf, size)
class VerticalGradient(renpy.display.core.Displayable):
   def __init__(self, startcolor, endcolor, **properties):
      super(VerticalGradient, self).__init__(**properties)
      self.startcolor = renpy.easy.color(startcolor)
      self.endcolor = renpy.easy.color(endcolor)
         
   def __hash__(self):
      return hash((self.startcolor, self.endcolor))

   def __eq__(self, o):
      if not self._equals(o):
         return False
      return (self.startcolor == o.startcolor and self.endcolor == o.endcolor)

   def visit(self):
      return [ ]

   def render(self, width, height, st, at):
      width = max(self.style.xminimum, width)
      height = max(self.style.yminimum, height)
      rv = renpy.Render(width, height)
      if width <= 0 or height <= 0:
         return rv            
      tex = _vertical((width, height), self.startcolor, self.endcolor)
      rv.blit(tex, (0, 0))
      return rv