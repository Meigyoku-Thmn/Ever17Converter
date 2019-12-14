def objectview(d, mappee=None, map={}):
   _map = map
   _dict = d
   class _objectview(object):
      def __setattr__(self, name, value):
         if name in _dict:
            _dict[name] = value
            if name in _map:
               setattr(mappee, name, value)
         else: raise KeyError(name)
      def __getattribute__(self, name):
         return _dict[name]
   return _objectview()