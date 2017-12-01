"use strict";
// sublime text

var gulp = require('gulp');
var connect = require('gulp-connect'); // Run a local dev server, i.e. this is local host server what we are using
var open = require('gulp-open'); // Open a URL  in a web browser
var browserify = require('browserify'); // Bundle JS
var reactify = require('reactify'); // Transforms React JSX to JS
var source = require('vinyl-source-stream'); // Use conventional text streams with Gulp
var concat = require('gulp-concat') // Contatinates files
var lint = require('gulp-eslint'); // Lint JS files, including JSX. Help to keep the high development level, includes suggestions.

var config = {
	port: 9005,
	devBaseUrl: 'http://localhost',
	paths: {
		html: './src/*.html',
		js: './src/**/*.js',
		images: './src/images/*',
		css: [
			'node_modules/bootstrap/dist/css/bootstrap.min.css',
			'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
			'node_modules/toastr/toastr.css'
		],
		dist: './dist',
		mainJs: './src/main.js'
	}
}

// Start a local development server
gulp.task('connect', function () {
	connect.server({
		root: ['dist'],
		port: config.port,
		base: config.devBaseUrl,
		livereload: true
	});
});

// before to run the task 'open' by gulp should be runned task 'connect', this set in line below
gulp.task('open', ['connect'], function () {
	gulp.src('dist/index.html')
		.pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/' }));
})

// run task 'html', pick files from config.paths.html and put into config.paths.dist and reload the main index page
gulp.task('html', function () {
	gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());
});

// task 'js' to pick all js files and bundle to the file 'dist\scripts\bundle.js'
gulp.task('js', function () {
	browserify(config.paths.mainJs)
		.transform(reactify)
		.bundle()
		.on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(config.paths.dist + '/scripts'))
		.pipe(connect.reload());
})

gulp.task('css', function () {
	gulp.src(config.paths.css)
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest(config.paths.dist + '/css'))
});

gulp.task('images', function () {
	gulp.src(config.paths.images)
		.pipe(gulp.dest(config.paths.dist + '/images'))
		.pipe(connect.reload());

	//publish favicon.ico
	gulp.src('./src/favicon.ico')
		.pipe(gulp.dest(config.paths.dist))
})

gulp.task('lint', function () {
	return gulp.src(config.paths.js)
		.pipe(lint({ config: 'eslint.config.json' }))
		.pipe(lint.format());
})

// run the watch task, i.e. when something changes in the folder config.paths.html the gult run task 'html'
gulp.task('watch', function () {
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.js, ['js', 'lint']);
})

// run the 'default' task, but before run the task 'html' and before this run tast 'open'
gulp.task('default', ['html', 'js', 'css', 'images', 'lint', 'open', 'watch']);
