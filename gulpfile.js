const gulp = require("gulp");
const { src } = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

style = () => {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
};

watch = () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./scss/**/*.scss", style);
  gulp.watch("./*.html").on("change", browserSync.reload);
  //   gulp.watch("./script/**/*.js").on("change", browserSync.reload, script);
};

exports.style = style;
exports.watch = watch;
