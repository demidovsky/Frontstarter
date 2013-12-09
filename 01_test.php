<?
	$pageTitle = 'Тестовая страница';
	$pageName = 'test';
	$pageSubName = 'subtest';
?>

<? require('templates/header.php'); ?>

<div class="content">

	<h1 class="title is-bold">Тестовая страница</h1>




	<section class="forms">

		<h2 class="title">Элементы форм</h2>

		<div class="checkbox">
			<label>
				<input type="checkbox">
				<span class="pic"></span>
				<span class="text">Чекбокс с многострочным описанием, таким длинным, что приходится переносить его на несколько строк</span>
			</label>
		</div>

		<div class="checkbox">
			<label class="checkbox2">
				<input type="checkbox">
				<span class="pic"></span>
				<span class="text">Чекбокс</span>
			</label>
		</div>

		<div class="combobox with-bg">
			<select class="js-ufd">
				<option>Combobox</option>
				<option>Dropdown</option>
				<option>Select</option>
				<option>Выпадашка</option>
			</select>
		</div>

		<div class="combobox with-dash">
			<select class="js-ufd">
				<option>Combobox без фона</option>
				<option>Dropdown без фона</option>
				<option>Select без фона</option>
				<option>Выпадашка без фона</option>
			</select>
		</div>

		<div class="placeholder js-placeholder">
			<label>Введите текст</label>
			<input type="text">
		</div>

		<div class="placeholder js-placeholder">
			<label>Введите много текста</label>
			<textarea></textarea>
		</div>

		<div class="datepicker">
			<input class="js-datepicker" type="text" value="02.12.2013" />
			<button class="js-datepicker-open">Выбрать дату</button>
		</div>

		<form class="demo-form js-validation">
			<div class="placeholder js-placeholder">
				<label>Телефон с маской</label>
				<input class="phone js-masked js-tel" type="tel" name="phone">
			</div>

			<div class="placeholder js-placeholder">
				<label>E-mail с валидацией</label>
				<input class="email js-email" type="email" name="email">
			</div>
		</form>

		<div class="basic-tooltip">
			<div class="tooltip" data-tooltip="На одном CSS">Подсказка</div>
		</div>

	</section>




	<section class="polyfills">

		<h2 class="title">Заплатки <i>(cм. в IE8)</i></h2>

		<div class="has-columns">
			<p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
			accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
			quae ab illo inventore veritatis et quasi architecto beatae
			vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia
			voluptas sit, aspernatur aut odit aut fugit, sed quia
			consequuntur magni dolores eos, qui ratione voluptatem sequi
			nesciunt, neque porro quisquam est, qui dolorem ipsum, quia
			dolor sit, amet, consectetur, adipisci velit, sed quia non
			numquam eius modi tempora incidunt, ut labore et dolore magnam
			aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
			nostrum exercitationem ullam corporis suscipit laboriosam, nisi
			ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
			reprehenderit, qui in ea voluptate velit esse, quam nihil
			molestiae consequatur, vel illum, qui dolorem eum fugiat, quo
			voluptas nulla pariatur? At vero eos et accusamus et iusto odio
			dignissimos ducimus, qui blanditiis praesentium voluptatum
			deleniti atque corrupti, quos dolores et quas molestias
			excepturi sint, obcaecati cupiditate non provident, similique
			sunt in culpa, qui officia deserunt mollitia animi, id est
			laborum et dolorum fuga. Et harum quidem rerum facilis est et
			expedita distinctio. Nam libero tempore, cum soluta nobis est
			eligendi optio, cumque nihil impedit, quo minus id, quod maxime
			placeat, facere possimus, omnis voluptas assumenda est, omnis
			dolor repellendus. Temporibus autem quibusdam et aut officiis
			debitis aut rerum necessitatibus saepe eveniet, ut et voluptates
			repudiandae sint et molestiae non recusandae. Itaque earum rerum
			hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
			maiores alias consequatur aut perferendis doloribus asperiores
			repellat.</p>
		</div>

		<div class="is-rounded js-rounded">
			Я круглый.
		</div>
	</section>




	<section class="templates">

		<h2 class="title">Шаблонизация <i>(см. php-исходники)</i></h2>

		<div class="example">
			<?
				$template_example_list = array('Главная', 'О компании', 'Проекты', 'Услуги', 'Контакты');
				require('templates/example_list.php');
			?>
		</div>

		<div class="example">
			<? 
				$template_example_key_value = array
				(
					'Ссылка абсолютная' => 'http://localhost/Frontstarter/index.php',
					'Ссылка относительная' => '...php',
					'Ссылка локальная' => 'file:///.../Frontstarter/index.php'
				);
				require('templates/example_key_value.php');
			?>
		</div>

		<div class="example">
			<? 
				$template_example_list_of_key_value = array
				(
					array
					(
						'title' => 'Акция "Двойные бонусы"',
						'date' => 'действует до 15.10.13',
						'description' => 'При каждой покупке баллы удваиваются'
					),

					array
					(
						'title' => 'Акция "Мили"',
						'date' => 'действует до 01.11.13',
						'description' => 'Для карт, участвующих в программе'
					),

					array
					(
						'title' => 'Акция "Бронь со скидкой"',
						'date' => 'действует до 31.12.13',
						'description' => 'Забронируй отель по выгодной цене'
					)
				);
				require('templates/example_list_of_key_value.php');
			?>
		</div>

	</section>




</div>

<? require('templates/footer.php'); ?>