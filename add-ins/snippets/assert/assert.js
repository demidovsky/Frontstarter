/**
 * Простейшая проверка аномальных ситуаций.
 * Помогает обнаружить место возникновения ошибки до того, как она непосредственно обвалит код.
 * @see _helpers/type.js
 * @memberOf module:_helpers
 * @param {*} condition - проверяемое условие или переменная.
 * @param {?string} [message=Assert failed] - сообщение об ошибке (необязательно; по умолчанию пишется Assert failed)
 * @throws {Error} исключение с сообщением об ошибке
 *
 * @example
 * // для проверки параметров функций
 * function foobar(foo, bar){
 *     assert(foo);
 *     assert(bar);
 *     ...
 * };
 * foobar(); -> Uncaught Error: Assert failed
 *
 * @example
 * // для проверки свойств объектов
 * assert(foo.bar, "foo.bar отсутствует"); ->  Uncaught Error: foo.bar отсутствует
 *
 * @example
 * // для проверки произвольных условий
 * assert(1 < 0) -> Uncaught Error: Assert failed(…)
 *
 * @example
 * // для проверки типов переменных (см. helpers/type.js)
 * assert(type([]) == "array") -> (пусто, ассерт пройден)
 *
 * @example
 * // для проверки глобальных переменных
 * неправильно: assert($, "$ отсутствует"); -> Uncaught ReferenceError: bar is not defined(…)
 * правильно: assert(window.$, "$ отсутствует"); ->  Uncaught Error: bar отсутствует
 *
 */
function assert(condition, message)
{
	if (typeof condition == "undefined" || (typeof condition == "boolean" && !condition))
	{
		message = message || "Assert failed";
		throw (typeof Error != "undefined" ? new Error(message) : message);
	}
}
