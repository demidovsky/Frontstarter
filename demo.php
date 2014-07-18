<?
	$pageTitle = 'Демо-страница';
	$pageId = 'demo';
?>

<? require('templates/header.php'); ?>

	<div class="content">


			<!-- script src="js/default/snippets/frontstarter.fullscreen.js"></script -->



			<!-- Скроллы -->

			<script src="js/default/jquery.tinyscrollbar.js"></script>
			<script src="js/default/jquery.nicescroll.js"></script>
			<script src="js/default/snippets/frontstarter.scrollbars.js"></script>

			<section class="demo js-fullscreen">
				<h2>TinyScrollbar</h2>

				<div class="tinyscrollbar" style="width: 300px; height: 200px; overflow-y:scroll">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis delectus, dolorum, repudiandae mollitia placeat consequuntur quam inventore facilis? Possimus veniam quia neque doloribus enim quo fugit reprehenderit, velit voluptates ullam.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis delectus, dolorum, repudiandae mollitia placeat consequuntur quam inventore facilis? Possimus veniam quia neque doloribus enim quo fugit reprehenderit, velit voluptates ullam.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis delectus, dolorum, repudiandae mollitia placeat consequuntur quam inventore facilis? Possimus veniam quia neque doloribus enim quo fugit reprehenderit, velit voluptates ullam.
				</div>
			</section>

			<section class="demo js-fullscreen">
				<h2>NiceScroll</h2>

				<div class="nicescroll" style="width: 300px; height: 200px; overflow-y:scroll">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis delectus, dolorum, repudiandae mollitia placeat consequuntur quam inventore facilis? Possimus veniam quia neque doloribus enim quo fugit reprehenderit, velit voluptates ullam.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis delectus, dolorum, repudiandae mollitia placeat consequuntur quam inventore facilis? Possimus veniam quia neque doloribus enim quo fugit reprehenderit, velit voluptates ullam.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis delectus, dolorum, repudiandae mollitia placeat consequuntur quam inventore facilis? Possimus veniam quia neque doloribus enim quo fugit reprehenderit, velit voluptates ullam.
				</div>
			</section>





			<!-- Кнопки -->

			<section class="demo js-fullscreen">
				<h2>Action button</h2>

				<a class="action-button" href="#">a</a>
				<button class="action-button">button</button>
				<input class="action-button" type="submit" value="input[submit]">
				<input class="action-button" type="button" value="input[button]">
			</section>





			<!-- Слайдер -->

			<script src="js/default/jquery.jcarousel.min.js"></script>
			<script src="js/default/snippets/frontstarter.carousel.js"></script>
			
			<section class="demo js-fullscreen">
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
					<a href="#" class="jcarousel-control-prev">&lsaquo;</a>
					<a href="#" class="jcarousel-control-next">&rsaquo;</a>
					<div class="jcarousel-pagination"></div>
				</div>


				<div class="jcarousel-wrapper">
					<div class="jcarousel">
						<ul class="jcarousel-list">
							<li>один</li>
							<li>два</li>
							<li>три</li>
							<li>четыре</li>
						</ul>
					</div>
					<a href="#" class="jcarousel-control-prev">&lsaquo;</a>
					<a href="#" class="jcarousel-control-next">&rsaquo;</a>
					<div class="jcarousel-pagination"></div>
				</div>


			</section>







	</div>

<? require('templates/footer.php'); ?>