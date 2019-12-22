from __future__ import unicode_literals
import renpy.exports as renpy
import pygame_sdl2 as pygame
import types
from renpy.defaultstore import config, Fixed
from functools import wraps, partial
Style = renpy.styledata.styleclass.Style
from renpy.text.text import Text
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

def objectview(d):
   _dict = d
   class _objectview(object):
      def __setattr__(self, name, value):
         _dict[name] = value
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

def style_props(*args, **kwargs):
   deep = kwargs.get('deep', False)
   def get_stl_st(stl):
      pairs = stl.inspect()
      rs = pairs[0][1].copy()
      rs['style'] = pairs[1][0]
      return rs
   arr = []
   for arg in args:
      if isinstance(arg, types.DictType): 
         arr.append(arg)
      elif isinstance(arg, Style): 
         arr.append(get_stl_st(arg) if deep else arg.properties)
      elif isinstance(arg, basestring):
         arr.extend(get_stl_st(style[arg]) if deep else style[arg].properties)
      else: 
         raise ValueError('item is not a string, dict or Style')
   return merge_dicts(*arr)

def bgm(idx):
   return "../../output/asset/bgm/bgm{0:02d}.ogg".format(idx)
def sysvoice(idx):
   return "../../output/asset/sysvoice/sys{0:03d}.wav".format(idx)
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
   # you have to use this renpy's api to create a surface to avoid graphics glitches. Why, I don't know.
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

# this modded method additionally passes the text displayable instance
# to the tag function (kwargs['text_instance']) if kwargs is presented
def text_apply_custom_tags(self, tokens):
   """
   Apply new-style custom text tags.
   """
   from renpy.text.textsupport import TAG, TEXT, PARAGRAPH, DISPLAYABLE
   rv = [ ]
   while tokens:
      t = tokens.pop(0)
      kind, text = t
      if kind == TEXT and renpy.config.replace_text:
         rv.append((TEXT, unicode(renpy.config.replace_text(text))))
      elif kind != TAG:
         rv.append(t)
      else:
         tag, _, value = text.partition("=")
         func = renpy.config.custom_text_tags.get(tag, None)
         if func is None:
            func = renpy.config.self_closing_custom_text_tags.get(tag, None)
            self_closing = True
         else:
            self_closing = False
         if func is None:
            rv.append(t)
            continue
         if not self_closing:
            # The contents of this tag.
            contents = [ ]
            # The close tag we're lookin for.
            close = "/" + tag
            # The number of open tags.
            count = 1
            while tokens:
               # Count the number of `tag` tags that are still open.
               t2 = tokens.pop(0)
               kind2, text2 = t2
               if kind2 == TAG:
                  tag2, _, _ = text2.partition("=")
                  if tag2 == tag:
                     count += 1
                  elif tag2 == close:
                     count -= 1
                     if not count:
                        break
               contents.append(t2)
            if count:
               raise Exception("Text ended while the '{}' text tag was still open.".format(tag))
            if func.func_code.co_flags & 0x08 != 0:
               new_contents = func(tag, value, contents)
            else:
               new_contents = func(tag, value, contents, text_instance=self)
         else:
            if func.func_code.co_flags & 0x08 != 0:
               new_contents = func(tag, value)
            else:
               new_contents = func(tag, value, text_instance=self)
         new_tokens = [ ]
         for kind2, text2 in new_contents:
            if isinstance(text2, str):
               text2 = unicode(text2)
            new_tokens.append((kind2, text2))
         new_tokens.extend(tokens)
         tokens = new_tokens
   return rv

def detokenize_to_text_template(tokens):
   rs = [""]
   for token in tokens:
      code = token[0]
      if code == renpy.TEXT_TEXT:
         if isinstance(rs[-1], basestring):
            rs[-1] += token[1]
         else:
            rs.append(token[1])
      elif code == renpy.TEXT_TAG:
         if isinstance(rs[-1], basestring):
            rs[-1] += token[1]
         else:
            rs.append("{" + token[1] + "}")
      elif code == renpy.TEXT_DISPLAYABLE:
         rs.append(token[1])
      elif code == renpy.TEXT_PARAGRAPH:
         if isinstance(rs[-1], basestring):
            rs[-1] += "\n"
         else:
            rs.append("\n")
   return rs

def align_tag(mode):
   def impl(tag, argument, contents, text_instance=None):
      contents = detokenize_to_text_template(contents)
      stl = style_props(text_instance.style, deep=True)
      if mode == 'right':
         stl['xalign'] = 1.0
      elif mode == 'center':
         stl['xcenter'] = 0.5
      stl['ypos'] = 0
      d = Fixed(Text(contents, text_instance.slow, None, None, text_instance.slow_done, **stl))
      return [
         (renpy.TEXT_DISPLAYABLE, d)
      ]
   return impl

def init():
   if renpy.version(tuple=True) != (7, 3, 5, 606):
      raise Exception("You are using a Renpy version that is newer or older than what I expected. Please check.")
   Text.apply_custom_tags = text_apply_custom_tags
   
   renpy.config.custom_text_tags["center"] = align_tag('center')
   renpy.config.custom_text_tags["right"] = align_tag('right')