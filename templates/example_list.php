<?/*
	Образец шаблонизации
*/?>

<h3 class="title">Передача параметров в шаблон при помощи обычного массива</h3>

<ul class="list">
<? foreach ($template_example_list as $value):?>
	<li><i><?=$value;?></i></li>
<? endforeach; ?>
</ul>