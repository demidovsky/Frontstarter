<?
	sleep(1);

	session_start();

	if (!isset($_SESSION['simulate_error']) || $_SESSION['simulate_error'] === false)
	{
		$_SESSION['simulate_error'] = true;
		header("HTTP/1.0 500 Internal Server Error");
	}
	else
	{ 
		$_SESSION['simulate_error'] = false;
	}

?>