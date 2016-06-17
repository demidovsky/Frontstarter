// проверяет по дате рождения, исполнилось ли человеку 18 лет
function isAdult(b)
{
	a = new Date();

	if (a.getFullYear() - b.getFullYear() != 18)
	{
		return (a.getFullYear() - b.getFullYear() > 18);
	}
	else
	{
		if (a.getMonth() - b.getMonth() != 0)
		{
			return (a.getMonth() - b.getMonth() > 0);
		}
		else
		{
			return (a.getDate() - b.getDate() >= 0);
		}
	}
}
