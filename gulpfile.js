const gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

sass.compiler = require('node-sass');



gulp.task('sass', function () {
  return gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});



gulp.task('copyHtml', ()=> {
    gulp.src('src/*.html').pipe(gulp.dest('dist'))
    }
)


gulp.task('scripts', function() {
  gulp.src('src/js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist/js'));
});



gulp.task('watch', function() {
    gulp.watch('src/*.html', gulp.series('copyHtml'));
})