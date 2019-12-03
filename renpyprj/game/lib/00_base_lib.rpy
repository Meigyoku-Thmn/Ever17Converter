init offset = -9

init python:
   from functools import wraps

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

init python:
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
      return merge_dicts(*arr);

init python:
   def bgm(idx):
      return "../../output/asset/bgm/bgm{0:02d}.ogg".format(idx)
   def font(name):
      return "fonts/{0}.ttf".format(name)

init python:
   import pygame_sdl2 as pygame
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
   pass