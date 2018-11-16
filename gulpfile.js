var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');

sass.compiler = require('node-sass')

gulp.task('sass', function(){
   // We want to run "sass css/app.scss app.css --watch"
   return gulp.src('css/app.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(
        cleanCss({
            compatability: 'ie8'
        })
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('.'))
})


gulp.task('watch', function(){
    gulp.watch('css/app.scss', ['sass'])
})

gulp.task('default', ['sass', 'watch'])