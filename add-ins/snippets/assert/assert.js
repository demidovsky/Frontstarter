function assert(condition, message)
{
	if (!condition)
	{
		message = message || "Assert failed";
		throw (typeof Error != "undefined" ? new Error(message) : message);
	}
}

