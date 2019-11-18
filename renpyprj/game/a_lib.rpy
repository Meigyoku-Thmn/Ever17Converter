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