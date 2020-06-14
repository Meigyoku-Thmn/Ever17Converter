using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Dynamic;
using System.Linq;
using System.Reflection;
using Esprima.Ast;

static class Helper {
   public static string GetEnumMemberValue(this Enum value) {
      FieldInfo fi = value.GetType().GetField(value.ToString());
      var attrs = fi.GetCustomAttributes(false);
      var attr = attrs.First(attr => attr.ToString() == "Esprima.Utils.EnumMemberAttribute");
      return attr.GetType().GetProperty("Value").GetValue(attr) as string;
   }
   public static dynamic ToExpandoObj(this ObjectExpression objExpr) {
      return objExpr.Properties.Aggregate(new ExpandoObject(), (acc, prop) => {
         var key = (prop.Key as Identifier).Name;
         var value = prop.Value is Literal ? (prop.Value as Literal).Value : (prop.Value as Identifier).Name;
         acc.As<IDictionary<string, object>>().Add(key, value);
         return acc;
      });
   }
}
public class InvalidSyntaxException : Exception {
   public InvalidSyntaxException() { }
   public InvalidSyntaxException(string message) : base(message) { }
   public InvalidSyntaxException(string message, Exception inner) : base(message, inner) { }
}