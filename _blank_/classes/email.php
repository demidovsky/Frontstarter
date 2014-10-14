<?

//error_reporting(E_ALL);
//ini_set('display_errors', '1');

define('TO',      'name@example.ru');
define('FROM',    'name@example.ru');
define('REPLY',   'name@example.ru');
define('SUBJECT', 'Тестовое письмо');

if(!empty($_POST) && !empty($_POST['username']) && !empty($_POST['phone']))
{
    $emailHeaders = 'From: '.FROM."\r\n".
                    'Reply-To: '.REPLY."\r\n".
                    'Content-Type: text/html; charset=UTF-8'."\r\n";
                    'MIME-Version: 1.0'."\r\n";

    $form = array
    (
        'username' => htmlentities($_POST['username'], false, 'UTF-8'),
        'phone'    => htmlentities($_POST['phone'], false, 'UTF-8'),
        'message'  => empty($_POST['message']) ? htmlentities($_POST['message'], false, 'UTF-8') : ''
    );

    //$emailText = file_get_contents('email.html');
    $emailText = "<h1>Данные заказа:</h1>
                  <h2>${form['username']}</h2>
                  <h2>${form['phone']}</h2>
                  <br>${form['message']}";

    $emailResult = @mail(TO, SUBJECT, $emailText, $emailHeaders);

    $response = array
    (
        'success' => $emailResult,
        'info' => $emailResult ? 'E-mail was sent.' : 'E-mail was not sent.'
    );
}
else
{
    $response = array
    (
        'success' => false,
        'info' => 'Incomplete form data.'
    );
}

header('Content-type: application/json; charset=UTF-8');
echo json_encode($response);

?>