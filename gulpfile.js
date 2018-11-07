const gulp = require("gulp");
const sass = require('gulp-sass');
gulp.task("default", function() {
  console.log("Hello Gulp");
});
gulp.task("styles", function() {
  gulp
    .src("sass/**/*.scss")
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(gulp.dest("./css"));
});