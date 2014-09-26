<?
	$pageTitle = 'Демо-страница';
	$pageId = 'demo';
?>

<? require_once('templates/header.php'); ?>

	<div class="content">


			<h1><i class="fa fa-cog fa-spin"></i> Demo/Test page</h1>



			<!-- Модальные окна -->

			<link rel="stylesheet" href="css/default/snippets/jqModal.css">
			<script src="js/default/jqModal.min.js"></script>

			<section class="demo">
				<h2>Модальные окна</h2>

				<a href="#" class="jqModal">jqModal</a>

				<div class="jqmWindow" id="dialog">
					<a href="#" class="jqmClose">Закрыть</a>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quas corporis asperiores quos alias, maxime molestiae quibusdam. Quo voluptates animi maiores nam voluptatum ipsa vero, consectetur amet magni voluptatibus quasi!
				</div>
			</section>



			<!-- Формы -->

			<link rel="stylesheet" href="css/default/snippets/selectboxit.css">
			<link rel="stylesheet" href="css/default/jquery-ui.all.edit.css">
			<script src="js/default/jquery.validate.min.js"></script>
			<script src="js/default/masked-min-jquery.js"></script>
			<script src="js/default/jquery.keyfilter.js"></script>
			<!-- селектбоксу достаточно ui.core-->
			<!-- script src="js/default/jquery-ui.core.min.js"></script -->
			<script src="js/default/jquery-ui.all.min.js"></script>
			<script src="js/default/jquery.selectBoxIt.min.edit.js"></script>
			<script src="js/default/jquery.nicefileinput.min.edit.js"></script>
			<script src="js/default/snippets/frontstarter.forms.js"></script>
			<script src="js/default/snippets/frontstarter.equalizer.js"></script>


			<section class="demo line" data-equalizer>
				<h2>Форма А <sup style="font-weight:normal"><small>(равной высоты с формой Б)</small></sup></h2>


				<form name="" action="" method="POST" class="js-validate">

					<ul class="form-fields">
						<li>
							<label>Текст:</label>
							<input type="text" name="ANY_NAME_10" class="" placeholder="введите текст" required>
						</li>

						<li>
							<label>Текст:</label>
							<textarea name="ANY_NAME_15" class="" placeholder="введите текст" required></textarea>
						</li>

						<li>
							<label>Только цифры:</label>
							<input type="number" name="ANY_NAME_25" class="" placeholder="введите текст">
						</li>

						<li>
							<label>Только цифры (фильтр):</label>
							<input type="number" name="ANY_NAME_20" class="js-filter-digits" placeholder="введите текст">
						</li>

						<li>
							<label>Только русские (pattern):</label>
							<input type="text" name="ANY_NAME_30" pattern="^[а-яА-Я\s]+$" data-pattern-message="Допускаются только русские буквы" class="" placeholder="введите текст" required>
						</li>

						<li>
							<label>Только русские (фильтр):</label>
							<input type="text" name="ANY_NAME_35" class="js-filter-ru" placeholder="введите текст">
						</li>

						<li>
							<label>Телефон:</label>
							<input type="tel" name="ANY_NAME_55" class="" placeholder="+7 (999) 123-45-67">
						</li>

						<li>
							<label>Телефон (маска):</label>
							<input type="tel" name="ANY_NAME_50" class="js-mask-tel" placeholder="+7 (999) 123-45-67">
						</li>

						<li>
							<label>E-mail:</label>
							<input type="email" name="ANY_NAME_60" class="js-email" placeholder="name@example.ru">
						</li>

						<li>
							<label>Чекбокс:</label>
							<label>
								<input type="checkbox" name="ANY_NAME_65" class="" required>
								Согласен с условиями.
							</label>
							<label for="ANY_NAME_65" class="error" style="display:none"></label>
						</li>

						<li>
							<label>Радио:</label>
							<label>
								<input type="radio" name="ANY_NAME_69" class="" required>
								FM
							</label>
							<label>
								<input type="radio" name="ANY_NAME_69" class="" required>
								AM
							</label>
							<label>
								<input type="radio" name="ANY_NAME_69" class="" required>
								УКВ
							</label>
							<label for="ANY_NAME_69" class="error" style="display:none"></label>
						</li>

						<li>
							<label>Дата:</label>
							<input type="date" name="ANY_NAME_80" class="" placeholder="01.01.2000">
						</li>

						<li>
							<label>Дата (календарь):</label>
							<input type="date" name="ANY_NAME_90" class="js-datepicker" placeholder="01.01.2000">
						</li>

						<li>
							<label>Номер карты (маска):</label>
							<input type="text" name="ANY_NAME_40" class="js-mask-card" placeholder="0000 0000 0000 0000">
						</li>
					</ul>

					<input type="submit" value="Cохранить" class="action-button">

				</form>

			</section>



			<section class="demo line" data-equalizer>
				<h2>Форма Б <sup style="font-weight:normal"><small>(равной высоты с формой А)</small></sup></h2>


				<form name="" action="" method="POST" class="js-validate">

					<ul class="form-fields">

						<li>
							<label>Селекты стильные:</label>
							<div style="display:inline-block">
								<div>
									<select name="ANY_NAME_71" class="js-selectboxit" required>
										<option>&laquo;Макс. ширина селекта&raquo;</option>
										<option>вариант 1</option>
										<option>вариант 2 &laquo;чуть длиннее&raquo;</option>
										<option>вариант 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam odit consequuntur, quasi, quisquam dignissimos quod, odio reiciendis explicabo aut consectetur officia minima deleniti velit nisi blanditiis. Itaque vitae, animi assumenda.</option>
									</select>
									<label for="ANY_NAME_71" class="error" style="display:none"></label>
								</div>
								
								<div>
									<select name="ANY_NAME_72" class="js-selectboxit" required>
										<option>&laquo;Мин. ширина селекта&raquo;</option>
										<option>А</option>
										<option>Б</option>
										<option>В</option>
										<option>Г</option>
										<option>Д</option>
										<option>Е</option>
										<option>Ё</option>
										<option>Ж</option>
										<option>З</option>
										<option>И</option>
										<option>Й</option>
										<option>К</option>
										<option>Л</option>
										<option>М</option>
									</select>
									<label for="ANY_NAME_72" class="error" style="display:none"></label>
								</div>
							</div>
						</li>

						<li>
							<label>Селекты нативные:</label>
							<div style="display:inline-block">
								<div>
									<select name="ANY_NAME_73" class="" required>
										<option>&laquo;Макс. ширина селекта&raquo;</option>
										<option>вариант 1</option>
										<option>вариант 2 &laquo;чуть длиннее&raquo;</option>
										<option>вариант 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam odit consequuntur, quasi, quisquam dignissimos quod, odio reiciendis explicabo aut consectetur officia minima deleniti velit nisi blanditiis. Itaque vitae, animi assumenda.</option>
									</select>
									<label for="ANY_NAME_73" class="error" style="display:none"></label>
								</div>
								
								<div>
									<select name="ANY_NAME_74" class="" required>
										<option>&laquo;Мин. ширина селекта&raquo;</option>
										<option>А</option>
										<option>Б</option>
										<option>В</option>
										<option>Г</option>
										<option>Д</option>
										<option>Е</option>
										<option>Ё</option>
										<option>Ж</option>
										<option>З</option>
										<option>И</option>
										<option>Й</option>
										<option>К</option>
										<option>Л</option>
										<option>М</option>
									</select>
									<label for="ANY_NAME_74" class="error" style="display:none"></label>
								</div>
							</div>
						</li>

						<li>
							<label>Файл:</label>
							<div style="display:inline-block">
								<div><input type="file" name="ANY_NAME_100" required></div>
								<label for="ANY_NAME_100" class="error" style="display:none"></label>
							</div>
						</li>

						<li>
							<label>Ещё файл:</label>
							<div style="display:inline-block">
								<div><input type="file" name="ANY_NAME_101" required></div>
								<label for="ANY_NAME_101" class="error" style="display:none"></label>
							</div>
						</li>

					</ul>

					<input type="submit" value="Cохранить" class="action-button">

				</form>

			</section>



			<div><!-- тссс, ты меня не видел --></div>




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
					<div class="jcarousel-pagination"></div>
					<a href="#" class="jcarousel-control-prev">&#9664;</a>
					<a href="#" class="jcarousel-control-next">&#9654;</a>
				</div>

				<!-- карусель меняет порядок li, поэтому в data-index сохраняется исходный порядок -->
				<div class="jcarousel-wrapper">
					<div class="jcarousel">
						<ul class="jcarousel-list">
							<li data-index="1">один</li>
							<li data-index="2">два</li>
							<li data-index="3">три</li>
							<li data-index="4">четыре</li>
						</ul>
					</div>
					<div class="jcarousel-pagination"></div>
					<a href="#" class="jcarousel-control-prev">&#9664;</a>
					<a href="#" class="jcarousel-control-next">&#9654;</a>
				</div>

			</section>


			<script src="js/default/jquery.mousewheel.js"></script>

			<section class="demo">
				<h2>Owl Carousel</h2>

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

				<br>

				<h3>Single & responsive</h3>
				<div class="owl-carousel-3">
					<div class="owl-item-wrapper"><h4>1</h4></div>
					<div class="owl-item-wrapper"><h4>2</h4></div>
					<div class="owl-item-wrapper"><h4>3</h4></div>
					<div class="owl-item-wrapper"><h4>4</h4></div>
				</div>

			</section>




			<!-- Полноэкранный скролл -->

			<script src="js/default/snippets/frontstarter.fullscreen.js"></script>
			<script src="js/default/jquery.easing.1.3.js"></script>
			<script src="js/default/jquery.mousewheel.js"></script>
			<script src="js/default/snippets/frontstarter.stickyscroll.js"></script>

			<div class="js-fullscreen js-stickyscroll demo-centering-the-unknown" style="background:#fed">
				<section class="demo">
					<h2>Fullscreen + Sticky Scroll + Centering the Unknown</h2>
				</section>
			</div>
			<div class="js-fullscreen js-stickyscroll demo-centering-the-unknown" style="background:#eef">
				<section class="demo">
					<h2>Fullscreen + Sticky Scroll + Centering the Unknown<br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut enim nobis, voluptates, delectus ea reprehenderit ut soluta. Voluptate nesciunt voluptates earum facere porro distinctio id, voluptatum perferendis fuga quaerat?</h2>
				</section>
			</div>



			<!-- Лайтбоксы -->

			<link rel="stylesheet" href="css/default/snippets/lightbox.edit.css">
			<script src="js/default/lightbox.min.js"></script>

			<link rel="stylesheet" href="css/default/snippets/litebox.edit.css">
			<script src="js/default/litebox.min.edit.js"></script>

			<section class="demo">

				<h2>Lightbox & Litebox</h2>

				<div class="lightbox-wrapper">
					<ul class="lightbox-list">
						<li>
							<a class="lightbox-link" href="img/jreject/browser_chrome.gif" data-lightbox="gallery" data-title="Хром">
								<img src="img/jreject/browser_chrome.gif">
							</a>
						</li>
						
						<li>
							<a class="lightbox-link" href="img/jreject/browser_firefox.gif" data-lightbox="gallery" data-title="Фокс">
								<img src="img/jreject/browser_firefox.gif">
							</a>
						</li>
						
						<li>
							<a class="lightbox-link" href="img/jreject/browser_safari.gif" data-lightbox="gallery" data-title="Сафари">
								<img src="img/jreject/browser_safari.gif">
							</a>
						</li>

						<li>
							Внезапно
							<a data-litebox="true" href="http://www.youtube.com/watch?v=y-yCXfv0FNw">YouTube</a>
						</li>
					</ul>
				</div>

				

			</section>






			<!-- Вкладки -->

			<script src="js/default/jquery.history.js"></script>
			<script src="js/default/snippets/frontstarter.tabs.js"></script>

			<section class="demo">

				<h2>Вкладки <sup style="font-weight:normal"><small>(с поддержкой History API)</small></sup></h2>

				<a   data-tab-control="tab" data-tab="first"  href="#">Вкладка 1</a>
				<a   data-tab-control="tab" data-tab="second" href="#">Вкладка 2</a>
				<a   data-tab-control="tab" data-tab="third" href="#">Вкладка 3</a>

				<div data-tab-content="tab" data-tab="first" >Контент 1</div>
				<div data-tab-content="tab" data-tab="second">Контент 2</div>
				<div data-tab-content="tab" data-tab="third">Контент 3</div>

			</section>








			<!-- Подсказки -->

			<link rel="stylesheet" href="css/default/snippets/tooltip.css">

			<section class="demo">

				<h2>Подсказки</h2>

				Lorem ipsum dolor sit amet, <span data-tooltip="Это короткая подсказка.">consectetur</span> adipisicing elit.
				<br>Dicta consequatur neque quae soluta quisquam dolores dolorum aliquid itaque eum, <br>
				aut eveniet hic <span data-tooltip="Это длинная подсказка Lorem ipsum dolor sit amet,
				 consectetur adipisicing elit. Eaque quam omnis id, eligendi dolore alias, maxime.
				 Animi quae quia tenetur modi?">inventore</span>, ducimus quia iure quam voluptates numquam. Accusantium.

			</section>







	</div>

<? require_once('templates/footer.php'); ?>