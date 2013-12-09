<?/*
	Образец шаблонизации
*/?>

<h3 class="title">Передача параметров в шаблон при помощи двухмерного массива</h3>

<ul class="list-of-key-value">
<? foreach ($template_example_list_of_key_value as $value):?>
	<li>
		<strong class="action-name"><?=$value['title'];?></strong>
		<time><?=$value['date'];?></time>
		<p><i><?=$value['description'];?></i></p>
	</li>
<? endforeach; ?>
</ul>