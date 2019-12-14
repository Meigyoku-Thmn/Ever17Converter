from functools import partial

def partial_deco(*args, **keywords):
   def _partial_deco(fn):
      return partial(fn, *args, **keywords)
   return _partial_deco

def partial_rebind_deco(*args, **keywords):
   def map_args(arg):
      if callable(arg): return arg()
      return arg
   def map_keywords(value):
      return map_args(value)
   def _partial_rebind_deco(fn):
      def resolving_fn(*args, **keywords):
         args = map(map_args, args)
         keywords = {k: map_keywords(v) for k, v in keywords.iteritems()}
         return fn(*args, **keywords)
      return partial(resolving_fn, *args, **keywords)
   return _partial_rebind_deco

@partial_rebind_deco("Hello", lambda: 1)
def abc(me, ccc):
   print(me)
   print(ccc)

abc()