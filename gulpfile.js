var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("scss/**/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('sass', function () {
  return gulp.src('scss/**/*.scss')
  .pipe(sass({
    includePaths: require('node-normalize-scss').includePaths
  }))
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.stream());
});

gulp.task('watch', function () {
  gulp.watch('scss/**/*.scss', ['sass']);
});
