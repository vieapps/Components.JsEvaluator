package net.vieapps.Components.Utility
{
	class JsEval
	{
		public static function Eval(expression : String) : Object
		{
			if (expression == null)
				return null;
			else if (expression == "")
				return "";
			else if (expression.indexOf("ActiveXObject") > -1 || expression.indexOf("eval(") > -1)
				return "<< Invalid expression >>";
			else
				return eval(expression);
		}
	}
}