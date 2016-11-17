/**
 * Продвинутая проверка типов данных
 * @see _helpers/assert.js
 * @see http://www.slideshare.net/yandex/writing-maintainable-javascript-26754863
 * @memberOf module:_helpers
 * @param {*} value - проверяемая переменная.
 * @returns {String} тип переменной
 * @example type(1)             = "int"
 * @example type(0.2)           = "float"
 * @example type(NaN)           = "NaN"
 * @example type(1/0)           = "infinity"
 * @example type("test")        = "string"
 * @example type([])            = "array"
 * @example type([1,2,3])       = "array"
 * @example type({})            = "object"
 * @example type({a:1})         = "object"
 * @example type(true)          = "boolean"
 * @example type(null)          = "null"
 * @example type(undefined)     = "undefined"
 * @example type(new Date())    = "date"
 * @example type(function(){})  = "function"
 * @example type(document.body) = "dom"
 */
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