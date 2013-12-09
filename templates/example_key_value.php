<?/*
	Образец шаблонизации
*/?>

<h3 class="title">Передача параметров в шаблон при помощи ассоциативного массива</h3>

<ul class="key-value">
<? foreach ($template_example_key_value as $key => $value):?>
	<li><a class="link" href="<?=$value;?>"><i><?=$key;?></i></a></li>
<? endforeach; ?>
</ul>