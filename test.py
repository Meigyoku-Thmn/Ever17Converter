from functools import partial
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
         kwargs = {k: map_kwargs(v) for k, v in kwargs.items()}
         return fn(*args, **kwargs)
      return partial(resolving_fn, *args, **kwargs)
   return _partial_rebind_deco


def prepare():
   print("Prepare")
   return "Hello"

@partial_rebind_deco(1, lambda: prepare())
def hello(a, b):
   print("Hello World")

hello()
hello()