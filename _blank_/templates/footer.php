		</div><!-- .b-content -->
	</div><!-- .b-header-and-content -->


	<footer class="b-footer">
		© 2015
	</footer>


	<script src="js/libs/jquery-1.10.2.min.js"></script>
	<? if (IS_BOOTSTRAP) { echo '<script src="bootstrap/js/bootstrap.min.js"></script>'; } ?>


<?
	antiCache('js/script.js');
	antiCache('js/modules/resize.js');
?>



</body>
</html>

<?
	// для сохранения html-файла
	if (isset($_GET['html']) || SAVE_HTML) saveHTML();
?>