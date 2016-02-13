var gulp = require('gulp');
var concat = require('gulp-concat');
var changed = require('gulp-changed');
var uglify = require ('gulp-uglify');
var rename = require ('gulp-rename');
var csso = require ('gulp-csso');
var inject = require ('gulp-inject');

var paths = {
    angularScripts : [
        'bower_components/angular/angular.js',
        'bower_components/angular-aria/angular-aria.js',
        'bower_components/angular-animate/angular-animate.js',
        'bower_components/angular-material/angular-material.js'
    ],
    angularStyles : [
        'bower_components/angular-material/angular-material.css'
    ],
    scripts : [
        'app/**/*.module.js',
        'app/**/*.controller.js'
    ],
    styles : [
        'assets/css/*.css'
    ],
    index: 'index.html',
    partials: ['app/**/*.html', '!app/index.html'],
    destAngular: 'dist/angular',
    dest:'dist'
};

gulp.task('angular-js', function() {
    return gulp.src(paths.angularScripts)
        .pipe(changed(paths.destAngular))
        .pipe(concat('angular.concate.js'))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.destAngular));
});
gulp.task('angular-css', function() {
    return gulp.src(paths.angularStyles)
        .pipe(changed(paths.destAngular))
        .pipe(csso())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.destAngular));
});
gulp.task('angular', ['angular-css','angular-js']);

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

gulp.task('index', function () {
    return gulp.src(paths.index)
        .pipe(inject(gulp.src(['dist/angular/*','dist/*'], {read: false}), {relative: true}))
        .pipe(gulp.dest(''))
});

gulp.task('build', ['build-js','build-css']);

gulp.task('watch', function(){
    gulp.watch(paths.scripts, ['build-js']);
    gulp.watch(paths.styles, ['build-css']);
});

gulp.task('default', ['angular','build','index','watch']);
