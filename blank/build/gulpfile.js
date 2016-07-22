var gulp 			= require('gulp'),
	gutil 			= require('gulp-util'),
	rename 			= require("gulp-rename"),
	map 			= require("map-stream"),
	concat 			= require("gulp-concat"),
	uglify 			= require('gulp-uglify'),
	minifyCSS 		= require('gulp-minify-css'),
	watch 			= require('gulp-watch'),
	autoprefixer 	= require('gulp-autoprefixer'),
	csscomb 		= require('gulp-csscomb'),
	replace 		= require('gulp-replace'),
	base64 			= require('gulp-base64'),
	less 			= require('gulp-less'),
	filter 			= require('gulp-filter');





gulp.task('css', function()
{
	var lessFilter = filter('**/*.less', {restore: true})

	gulp.src([	'../css/libs/normalize.css', 
				'../css/libs/*.css',
				'../css/modules/default.less',
				'../css/modules/*'
			])
		.pipe(lessFilter)
		.pipe(less())
		.on('error', function(error){ console.log('LESS error: ' + error.message); })
		.pipe(lessFilter.restore)
		.pipe(concat('styles.css'))
		/*.pipe(base64({
			baseDir: 'img',
			extensions: ['svg'],
			maxImageSize: 4*1024, // bytes 
			debug: true
		}))*/
		.pipe(autoprefixer([
			'Android 2.3',
			'Android >= 4',
			'Chrome >= 20',
			'Firefox >= 24', // Firefox 24 is the latest ESR 
			'Explorer >= 8',
			'iOS >= 6',
			'Opera >= 12',
			'Safari >= 6']))
		.on('error', function(error){ console.log('Autoprefixer error: ' + error.message); })
		.pipe(csscomb())
		/*.pipe(replace(/0\.1rem/g, '0.11rem')) // iphone */
		.pipe(gulp.dest('../css/'))
		.pipe(minifyCSS())
		.pipe(rename('styles.min.css'))
		.pipe(gulp.dest('../css/'));
});





gulp.task('js', function ()
{
	// библиотеки
	gulp.src([	'../js/libs/modernizr.custom.edit.js',
				'../js/libs/jquery.min.js',
				'../js/libs/jquery-ui.min.edit.js',
				'../js/libs/jquery.ui.touch-punch.min.js',
				'../js/libs/fastclick.js',
				'../js/libs/*.js'
		])
		.pipe(concat('libs.js'))
		.pipe(gulp.dest('../js/'))
		.pipe(uglify().on('error', function(error){ gutil.log(error.message + ' at line ' + error.lineNumber) }))
		.pipe(rename('libs.min.js'))
		.pipe(gulp.dest('../js/'));

	//свои скрипты
	gulp.src([	'../js/modules/script.js',
				'../js/modules/*.js'
		])
		.pipe(concat('script.js'))
		.pipe(gulp.dest('../js/'))
		.pipe(uglify().on('error', function(error){ gutil.log(error.message + ' at line ' + error.lineNumber) }))
		.pipe(rename('script.min.js'))
		.pipe(gulp.dest('../js/'));

});






gulp.task('default', ['css', 'js']);
gulp.task('watch', ['css', 'js'], function()
{
	gulp.watch(['../js/libs/*.js', '../js/modules/*.js'], { interval: 1000 }, ['js']);
	gulp.watch(['../css/libs/*', '../css/modules/*'], { interval: 1000 }, ['css']);
});

