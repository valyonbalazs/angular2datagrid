/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

/// <binding AfterBuild='moveToLibs' />

var gulp = require('gulp');
var runSequence = require('run-sequence');

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

gulp.task('RunAllTasks', function (cb) {
    runSequence(
      'moveToJs',
      'moveToCss',
      cb
    );
});

