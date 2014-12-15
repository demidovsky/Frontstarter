<? if ($build == FRONTSTRAP)
{
?>

<?
	if (USE_CDN) { ?>
	<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet">
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
	<? } else { ?>
	<link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<script src="bootstrap/js/bootstrap.min.js"></script>
	<? }
}

if ($build == FOUNDSTARTER)
{
?>

<?
	if (USE_CDN) { ?>
	<link href="http://cdn.foundation5.zurb.com/foundation.css" rel="stylesheet" >
	<script src="http://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
	<script src="http://cdn.foundation5.zurb.com/foundation.js"></script>
	<script>$(function(){ $(document).foundation(); });</script>
	<? } else { ?>
	<link rel="stylesheet" href="foundation/css/foundation.min.css" />
	<script src="foundation/js/modernizr.js"></script>
	<script src="foundation/js/foundation.min.js"></script>
	<script>$(function(){ $(document).foundation(); });</script>
	<? }
}?>