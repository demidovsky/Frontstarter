<?

//error_reporting(E_ALL);
//ini_set('display_errors', '1');

define('TO',      'name@example.ru');
define('FROM',    'name@example.ru');
define('REPLY',   'name@example.ru');
define('SUBJECT', 'Обратная связь');

if(!empty($_POST) && !empty($_POST['username']) && !empty($_POST['email']))
{
    $emailHeaders = 'From: '.FROM."\r\n".
                    'Reply-To: '.REPLY."\r\n".
                    'Content-Type: text/html; charset=UTF-8'."\r\n";
                    'MIME-Version: 1.0'."\r\n";

    $form = array
    (
        'username' => htmlentities($_POST['username'], false, 'UTF-8'),
        'email'    => htmlentities($_POST['email'], false, 'UTF-8'),
        'message'  => htmlentities($_POST['message'], false, 'UTF-8'),
    );

    //$emailText = file_get_contents('email.html');
    $emailText = "<h2>Данные обратной связи:</h2>
                  <p><b>Имя</b>: ${form['username']}</p>
                  <p><b>E-mail</b>: ${form['email']}</p>
                  <p><b>Сообщение</b>: ${form['message']}</p>";

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