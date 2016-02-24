var gulp = require('gulp');
var concat = require('gulp-concat');
var changed = require('gulp-changed');
var uglify = require ('gulp-uglify');
var rename = require ('gulp-rename');
var csso = require ('gulp-csso');
var inject = require ('gulp-inject');

var paths = {
    externalScripts : [
        'bower_components/angular/angular.min.js',
        'bower_components/angular-aria/angular-aria.min.js',
        'bower_components/angular-animate/angular-animate.min.js',
        'bower_components/angular-material/angular-material.min.js',
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/plyr/dist/plyr.js',
        'assets/js/soundcloud-sdk.js'
    ],
    externalStyles : [
        'bower_components/angular-material/angular-material.min.css',
        'bower_components/plyr/dist/plyr.css'
    ],
    scripts : [
        'app/**/*.module.js',
        'app/**/*.service.js',
        'app/**/*.controller.js'
    ],
    styles : [
        'assets/css/*.css'
    ],
    index: 'index.html',
    partials: ['app/**/*.html', '!app/index.html'],
    destExt: 'dist/ext',
    dest:'dist'
};

gulp.task('external-js', function() {
    return gulp.src(paths.externalScripts)
        .pipe(changed(paths.destExt))
        .pipe(gulp.dest(paths.destExt));
});

gulp.task('external-css', function() {
    return gulp.src(paths.externalStyles)
        .pipe(changed(paths.destExt))
        .pipe(gulp.dest(paths.destExt));
});

gulp.task('external', ['external-css','external-js']);


gulp.task('build-js', function() {
    return gulp.src(paths.scripts)
        .pipe(changed(paths.dest))
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(rename({
        suffix: '.min'
        }))
        .pipe(gulp.dest(paths.dest));
});

gulp.task('build-css', function() {
    return gulp.src(paths.styles)
        .pipe(changed(paths.dest))
        .pipe(concat('app.css'))
        .pipe(csso())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.dest));
});

gulp.task('build', ['build-js','build-css']);

gulp.task('index',['external','build'], function () {
    return gulp.src(paths.index)
        .pipe(inject(gulp.src(['dist/ext/angular.min.js','dist/ext/!(angular.min.js)*','assets/js/init-plyr.js','assets/js/init-soundcloud.js','dist/*'], {read: false}), {relative: true}))
        .pipe(gulp.dest(''))
});

gulp.task('watch', function(){
    gulp.watch(paths.scripts, ['build-js']);
    gulp.watch(paths.styles, ['build-css']);
});

gulp.task('default', ['external','build','index','watch']);
