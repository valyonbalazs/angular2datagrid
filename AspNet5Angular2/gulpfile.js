/// <binding AfterBuild='moveToLibs' />

var gulp = require('gulp');

var concat = require('gulp-concat');
var connect = require('gulp-connect');
var del = require('del');
var minify = require('gulp-minify');
var minifyCss = require('gulp-minify-css');
var runSequence = require('run-sequence');
var size = require('gulp-size');
var uglify = require('gulp-uglify');

var directory = {};
directory.from = {};
directory.from.root = './wwwroot/';
directory.from.css = directory.from.root + 'css/';
directory.from.html = directory.from.root + 'html/';
directory.from.js = directory.from.root + 'js/';
directory.from.jslib = directory.from.root + 'jslib/';

directory.to = {};
directory.to.root = './dist/';
directory.to.css = directory.to.root + 'css/';
directory.to.html = directory.to.root + 'html/';
directory.to.js = directory.to.root + 'js/';
directory.to.jslib = directory.to.root + 'jslib/';

var extension = {};
// all *.xxx files from a dir: *.xxx
// all *.xxx files from dir and subdir: **/*.xxx
extension.css = '*.css';
extension.html = '*.html';
extension.js = '*.js';
extension.scss = '*.scss';

var exampleFile = 'index.html';

var filesFrom = {};
filesFrom.rootHtml = directory.from.root + exampleFile;
filesFrom.css = directory.from.css + extension.css;
filesFrom.html = directory.from.html + extension.html;
filesFrom.js = directory.from.js + extension.js;
filesFrom.jslib = directory.from.jslib + extension.js;

var filesTo = {};
filesTo.rootHtml = directory.to.root + exampleFile;
filesTo.css = directory.to.css + extension.css;
filesTo.html = directory.to.html + extension.html;
filesTo.js = directory.to.js + extension.js;
filesTo.jslib = directory.to.jslib + extension.js;

/*
 * CLEANING DESTINATION FOLDERS
 */ 
gulp.task('clean', function (cb) {
    return del([
        directory.to.css,
        directory.to.html,
        directory.to.js,
        directory.to.jslib
    ], cb);
});


gulp.task('copy:css', function () {
    return gulp.src([filesFrom.css])
        .pipe(gulp.dest(directory.to.css))
        .pipe(size({'title': 'Copied CSS files size is '}));
});

gulp.task('copy:html', function () {
    return gulp.src([filesFrom.html])
        .pipe(gulp.dest(directory.to.html));
});

gulp.task('copy:js', function () {
    return gulp.src([filesFrom.js])
        .pipe(gulp.dest(directory.to.js))
});

gulp.task('copy:jsLib', function () {
    return gulp.src([filesFrom.jslib])
        .pipe(gulp.dest(directory.to.jslib))
});

gulp.task('copy:rootHtml', function () {
    return gulp.src([filesFrom.rootHtml])
        .pipe(gulp.dest(directory.to.root));
});

gulp.task('RunAllCopyTasks', function (cb) {
    runSequence(
      'clean',
      'copy:js',
      'copy:jsLib',
      'copy:css',
      'copy:html',
      'copy:rootHtml',
      cb
    );
});

gulp.task('connect', function () {
    connect.server({
        root: [directory.to.root],
        livereload: false
    });
});

gulp.task('testDist', function (cb) {
    runSequence(
      'RunAllCopyTasks',
      'connect',
      cb
    );
});


// Moving the content of specific npm packages to the wwwroot folder
var paths = {
    npmSrc: "./node_modules/",
    jsTarget: "./wwwroot/js/",
    cssTarget: "./wwwroot/css/"
};

var jsToMove = [
   paths.npmSrc + '/bootstrap/dist/js/bootstrap.min.js',
   paths.npmSrc + '/jquery/dist/jquery.min.js',
   paths.npmSrc + '/angular2/bundles/angular2-polyfills.js',
   paths.npmSrc + '/systemjs/dist/system.js',
   paths.npmSrc + '/systemjs/dist/system-polyfills.js',
   paths.npmSrc + '/rxjs/bundles/Rx.js',
   paths.npmSrc + '/angular2/bundles/angular2.dev.js',
   paths.npmSrc + '/es6-shim/es6-shim.min.js'
];

var cssToMove = [
   paths.npmSrc + '/bootstrap/dist/css/bootstrap.min.css',
   paths.npmSrc + '/bootstrap/dist/css/bootstrap.min.css.map',
   paths.npmSrc + '/bootstrap/dist/css/bootstrap-theme.min.css',
   paths.npmSrc + '/bootstrap/dist/css/bootstrap-theme.min.css.map',
];
gulp.task('moveToJs', function () {
    return gulp.src(jsToMove).pipe(gulp.dest(paths.jsTarget));
});

gulp.task('moveToCss', function () {
    return gulp.src(cssToMove).pipe(gulp.dest(paths.cssTarget));
});

gulp.task('RunAllNpmPackageMoveTasks', function (cb) {
    runSequence(
      'moveToJs',
      'moveToCss',
      cb
    );
});

