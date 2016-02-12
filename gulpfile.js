var gulp = require('gulp');
var concat = require('gulp-concat');
var changed = require('gulp-changed');
var uglify = require ('gulp-uglify');
var rename = require ('gulp-rename');
var csso = require ('gulp-csso');

var paths = {
    scripts : [
        'app/**/*.controller.js',
        'app/**/*.module.js'
    ],
    styles : ['assets/css/*.css'],
    index: './app/index.html',
    partials: ['app/**/*.html', '!app/index.html'],
    dest: 'dist'
};

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

gulp.task('dev', ['build-js','build-css']);

gulp.task('watch', function(){
    gulp.watch(paths.scripts, ['dev']);
});

gulp.task('default', ['watch']);
