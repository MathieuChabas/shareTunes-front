var gulp        = require('gulp');
var concat      = require('gulp-concat');
var changed     = require('gulp-changed');

var config = {
    scripts : [
        './app//**/*.controller.js',
        './app//**/*.module.js',
    ],
    dest: './dist/',
    minJs: 'app.min.js',
    fatJS: 'app.js'
};

gulp.task('dev', function() {
    return gulp.src(config.scripts)
        .pipe(changed(config.dest))
        .pipe(concat(config.fatJS))
        .pipe(gulp.dest(config.dest));
});

gulp.task('watch', function(){
    gulp.watch(config.scripts, ['dev']);
});
