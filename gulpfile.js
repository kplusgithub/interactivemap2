  var gulp = require('gulp');
var minifyCss = require("gulp-minify-css");

 var gulp = require('gulp');
var babel = require('gulp-babel');


var jshint = require("gulp-jshint");
 
// task
gulp.task('minify-css', function () {
    gulp.src('./css/one-page-wonder.css') // path to your file
    .pipe(minifyCss())
    .pipe(gulp.dest('./dist'));
	
});
  
  


gulp.task('default', () => {
  return gulp.src('./js/*.js')
  .pipe(babel({presets: ['babili']}))
  .pipe(gulp.dest('./dist'))
});


gulp.task('jsLint', function () {
    gulp.src('./js/*.js') // path to your files
    .pipe(jshint())
    .pipe(jshint.reporter()); // Dump results
});