var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
const babel = require('gulp-babel');

// transpiles less to css and minifies the css file
gulp.task('less', function () {
	return gulp.src('src/less/main.less')
		.pipe(less())
		.pipe(autoprefixer({
			browsers : ['last 2 versions'],
			cascade  : false
		}))
		.pipe(cssmin())
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.stream())
});

// transpiles es6 to es5
gulp.task('babel', () => {
    return gulp.src('src/js/main.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist/js'));
});

// watches and updates the transpiled es6 to es5 file
gulp.task('babel-watch', ['babel'], function(done) {
	browserSync.reload();
	done();
});

// default task that reload and update the browser
gulp.task('default', ['less'], function() {
	browserSync.init({
		server: "./",
		open: false
	});
	gulp.watch("src/less/*.less", ['less']);
	gulp.watch("src/js/*.js", ['babel-watch']);
	gulp.watch("*.html").on('change', browserSync.reload);
});

// Uglify the transpiled js file as final version
gulp.task('js', function () {
  return gulp.src('dist/js/main.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
});
