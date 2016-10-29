'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var bower = require('gulp-bower');
 
gulp.task('sass', function () {
  return gulp.src('./assets/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('cssconcat', function () {
  return gulp.src(
    ['bower_components/angular-dropdowns/dist/angular-dropdowns.min.css']
  ).pipe(concat('libs.css')).pipe(gulp.dest('dist'));
});

gulp.task('cssmin', function () {
	gulp.src(['assets/css/*.css'])
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('dist'));
});

gulp.task('concat-app', function () {
  return gulp.src('assets/app/**/*.js')
	 .pipe(concat('app.js'))
	 .pipe(gulp.dest('dist/'));
});

gulp.task('concat', function() {
  return gulp.src([
    'bower_components/jquery/dist/jquery.js',
	 'bower_components/humanize-duration/humanize-duration.js',
	 'bower_components/moment/min/moment.min.js',
	 'bower_components/remodal/dist/remodal.js',
    'bower_components/slick-carousel/slick/slick.js',
    'bower_components/wow/dist/wow.js',
    'bower_components/Tabslet/jquery.tabslet.js',
    'bower_components/select2/dist/js/select2.full.js',
	 'bower_components/angular/angular.min.js',
	 'bower_components/angular-timer/dist/angular-timer.min.js',
	 'bower_components/angular-translate/angular-translate.min.js',
	 'bower_components/angular-dropdowns/dist/angular-dropdowns.min.js',
	 'bower_components/ngSmoothScroll/lib/angular-smooth-scroll.js',
	 'bower_components/angular-slick/dist/slick.js',
	 'bower_components/angular-ui-router/release/angular-ui-router.min.js',
	 'bower_components/angular-touch/angular-touch.min.js',
	 'bower_components/angular-scroll/angular-scroll.min.js',
	 'bower_components/fn-remodal/remodal.js',
  	])
    .pipe(concat('production.js'))
    .pipe(gulp.dest('assets/js/'));
});

gulp.task('compress', function() {
  return gulp.src('assets/js/production.js')
    .pipe(uglify())
	.pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'));
});
 
gulp.task('watch', function () {
  setTimeout(function(){
  	gulp.watch('assets/sass/**/*.scss', ['sass']);
  }, 1000);
  gulp.watch('./assets/css/*.css', ['cssmin']);
  gulp.watch('./assets/js/production.js', ['compress']);
  gulp.watch('./assets/app/**/*.js', ['concat-app']);
});

gulp.task('default', function() {
  gulp.start('concat-app', 'sass', 'cssmin', 'concat', 'cssconcat', 'compress', 'watch');
});