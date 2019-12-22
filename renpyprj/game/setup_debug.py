from __future__ import unicode_literals
import renpy.exports as renpy
import sys
import types

def load_module(self, fullname):

   filename = self.translate(fullname, self.prefix)

   mod = sys.modules.setdefault(fullname, types.ModuleType(fullname))
   mod.__name__ = fullname
   mod.__file__ = filename
   mod.__loader__ = self

   if filename.endswith("__init__.py"):
      mod.__path__ = [ filename[:-len("__init__.py")] ]

   for encoding in [ "utf-8", "latin-1" ]:

      try:
            fileObj = renpy.loader.load(filename)
            source = fileObj.read().decode(encoding)
            if source and source[0] == u'\ufeff':
               source = source[1:]
            source = source.encode("raw_unicode_escape")

            source = source.replace("\r", "")

            code = compile(source, fileObj.name, 'exec', renpy.python.old_compile_flags, 1)
            break
      except:
            if encoding == "latin-1":
               raise

   exec code in mod.__dict__

   return sys.modules[fullname]
def init():
   if renpy.version(tuple=True) != (7, 3, 5, 606):
      raise Exception("You are using a Renpy version that is newer or older than what I expected. Please check.")
   renpy.loader.RenpyImporter.load_module = load_module