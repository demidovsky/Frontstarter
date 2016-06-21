function type(value)
{
	var typeName = Object.prototype.toString.call(value).match(/\[object (.*?)\]/)[1].toLowerCase();
	if (value && typeof value.nodeType != "undefined" && value.nodeType === 1) typeName = "dom";
	if (typeName == "number")
	{
		if (isNaN(value)) typeName = "NaN";
		else
		{
			if (value % 1 === 0) typeName = "int"; else typeName = "float";
			if (!isFinite(value)) typeName = "infinity";
		}
	}
	return typeName;
}