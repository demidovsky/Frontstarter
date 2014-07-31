<?
	$pageTitle = 'Демо-страница';
	$pageId = 'demo';
?>

<? require('templates/header.php'); ?>

	<div class="content">


			<h1>Demo/Test page</h1>





			<!-- Формы -->

			<script src="js/default/jquery.validate.js"></script>
			<script src="js/default/masked-min-jquery.js"></script>
			<script src="js/default/jquery.keyfilter.js"></script>
			<script src="js/default/snippets/frontstarter.forms.js"></script>

			<section class="demo forms">
				<h2>Формы</h2>


				<form name="" action="POST" class="js-validate">

					<ul class="form-fields">
						<li>
							<label>Текст:</label>
							<input id="text" type="text" name="FORM_TEXT_10" class="" placeholder="Введите текст">
						</li>

						<li>
							<label>Только цифры:</label>
							<input id="digits_soft" type="text" name="FORM_TEXT_25" class="" placeholder="Введите текст">
						</li>

						<li>
							<label>Только цифры (фильтр):</label>
							<input id="digits" type="text" name="FORM_TEXT_20" class="js-filter-digits" placeholder="Введите текст">
						</li>

						<li>
							<label>Только русские (фильтр):</label>
							<input id="rus" type="text" name="FORM_TEXT_30" class="js-filter-rus" placeholder="Введите текст">
						</li>

						<li>
							<label>Номер банковской карты:</label>
							<input id="card" type="text" name="FORM_TEXT_40" class="js-mask-card" placeholder="0000 0000 0000 0000">
						</li>

						<li>
							<label>Дата:</label>
							<input id="date" type="text" name="FORM_TEXT_45" class="" placeholder="01.01.2000">
						</li>

						<li>
							<label>Телефон:</label>
							<input id="tel" type="tel" name="FORM_TEXT_50" class="js-mask-tel" placeholder="+7 (999) 123-45-67">
						</li>

						<li>
							<label>E-mail:</label>
							<input id="email" type="email" name="FORM_TEXT_60" class="js-email" placeholder="name@example.ru">
						</li>

						<li>
							<label>Чекбокс:</label>
							<input id="check" type="checkbox" name="FORM_TEXT_70" class="">
							<label for="check">Согласен с условиями.</label>
						</li>

						<li>
							<label>Селект:</label>
							<select>
								<option>вариант 1</option>
								<option>вариант 2</option>
								<option>вариант 3</option>
							</select>
						</li>

						<li>
							<label>
								Календарь:
							</label>
							<input id="" type="date" name="" class="js-calendar">
						</li>
					</ul>

					<input type="submit" value="Cохранить" class="action-button">

				</form>


			</section>









			<!-- Скроллы -->

			<link rel="stylesheet" href="css/default/snippets/tinyscrollbar.css">
			<script src="js/default/jquery.tinyscrollbar.js"></script>
			<script src="js/default/jquery.nicescroll.js"></script>
			<script src="js/default/snippets/frontstarter.scrollbars.js"></script>

			<section class="demo line">
				<h2>TinyScrollbar</h2>

				<div class="tinyscrollbar" style="width: 300px; height: 200px; overflow-y:scroll">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis delectus, dolorum, repudiandae mollitia placeat consequuntur quam inventore facilis? Possimus veniam quia neque doloribus enim quo fugit reprehenderit, velit voluptates ullam.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis delectus, dolorum, repudiandae mollitia placeat consequuntur quam inventore facilis? Possimus veniam quia neque doloribus enim quo fugit reprehenderit, velit voluptates ullam.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis delectus, dolorum, repudiandae mollitia placeat consequuntur quam inventore facilis? Possimus veniam quia neque doloribus enim quo fugit reprehenderit, velit voluptates ullam.
				</div>
			</section>

			<section class="demo line">
				<h2>NiceScroll</h2>

				<div class="nicescroll" style="width: 300px; height: 200px; overflow-y:scroll">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis delectus, dolorum, repudiandae mollitia placeat consequuntur quam inventore facilis? Possimus veniam quia neque doloribus enim quo fugit reprehenderit, velit voluptates ullam.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis delectus, dolorum, repudiandae mollitia placeat consequuntur quam inventore facilis? Possimus veniam quia neque doloribus enim quo fugit reprehenderit, velit voluptates ullam.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis delectus, dolorum, repudiandae mollitia placeat consequuntur quam inventore facilis? Possimus veniam quia neque doloribus enim quo fugit reprehenderit, velit voluptates ullam.
				</div>
			</section>





			<!-- Кнопки -->
			<link rel="stylesheet" href="css/default/snippets/action-button.css">
			<section class="demo">
				<h2>Action button</h2>

				<a class="action-button" href="#">a</a>
				<button class="action-button">button</button>
				<input class="action-button" type="submit" value="input[submit]">
				<input class="action-button" type="button" value="input[button]">
			</section>





			<!-- Слайдеры -->

			<link rel="stylesheet" href="css/default/snippets/owl.carousel.css">
			<link rel="stylesheet" href="css/default/snippets/jcarousel.css">
			<script src="js/default/owl.carousel.min.js"></script>
			<script src="js/default/jquery.jcarousel.min.js"></script>
			<script src="js/default/snippets/frontstarter.carousel.js"></script>

			
			<section class="demo">
				<h2>jCarousel</h2>


				<div class="jcarousel-wrapper">
					<a href="#" class="jcarousel-control-prev">&#9664;</a>
					<a href="#" class="jcarousel-control-next">&#9654;</a>
					<div class="jcarousel-pagination"></div>

					<div class="jcarousel">
						<ul class="jcarousel-list">
							<li>one</li>
							<li>two</li>
							<li>three</li>
							<li>four</li>
							<li>five</li>
							<li>six</li>
						</ul>
					</div>
				</div>


				<div class="jcarousel-wrapper">
					<a href="#" class="jcarousel-control-prev">&#9664;</a>
					<a href="#" class="jcarousel-control-next">&#9654;</a>
					<div class="jcarousel-pagination"></div>

					<div class="jcarousel">
						<ul class="jcarousel-list">
							<li>один</li>
							<li>два</li>
							<li>три</li>
							<li>четыре</li>
						</ul>
					</div>
				</div>

			</section>



			<script src="js/default/jquery.mousewheel.js"></script>
			<script src="js/default/jquery.easing.1.3.js"></script>
			<script src="js/default/snippets/frontstarter.fullscreen.js"></script>
			<script src="js/default/snippets/frontstarter.stickyscroll.js"></script>

			<div class="js-fullscreen js-stickyscroll">
				<section class="demo">
					<h2>Owl Carousel + Fullscreen + Sticky Scroll</h2>

					<h3>CSS-width, centered, no-loop</h3>
					<div class="owl-carousel-1">
						<div class="owl-item-wrapper"><h4>1</h4></div>
						<div class="owl-item-wrapper"><h4>2</h4></div>
						<div class="owl-item-wrapper"><h4>3</h4></div>
						<div class="owl-item-wrapper"><h4>4</h4></div>
						<div class="owl-item-wrapper"><h4>5</h4></div>
						<div class="owl-item-wrapper"><h4>6</h4></div>
						<div class="owl-item-wrapper"><h4>7</h4></div>
						<div class="owl-item-wrapper"><h4>8</h4></div>
						<div class="owl-item-wrapper"><h4>9</h4></div>
						<div class="owl-item-wrapper"><h4>10</h4></div>
						<div class="owl-item-wrapper"><h4>11</h4></div>
						<div class="owl-item-wrapper"><h4>12</h4></div>
					</div>

					<br>

					<h3>JS-width, left, loop</h3>
					<div class="owl-carousel-2">
						<div class="owl-item-wrapper"><h4>1</h4></div>
						<div class="owl-item-wrapper"><h4>2</h4></div>
						<div class="owl-item-wrapper"><h4>3</h4></div>
						<div class="owl-item-wrapper"><h4>4</h4></div>
						<div class="owl-item-wrapper"><h4>5</h4></div>
						<div class="owl-item-wrapper"><h4>6</h4></div>
						<div class="owl-item-wrapper"><h4>7</h4></div>
						<div class="owl-item-wrapper"><h4>8</h4></div>
						<div class="owl-item-wrapper"><h4>9</h4></div>
						<div class="owl-item-wrapper"><h4>10</h4></div>
						<div class="owl-item-wrapper"><h4>11</h4></div>
						<div class="owl-item-wrapper"><h4>12</h4></div>
					</div>

				</section>
			</div>












	</div>

<? require('templates/footer.php'); ?>