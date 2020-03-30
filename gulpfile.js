"strict mode";

let gulp = require('gulp');
let sass = require('gulp-sass');
let sourcemaps = require('gulp-sourcemaps');
let watch = require('gulp-watch');
let autoprefixer = require("autoprefixer");
let postcss = require("gulp-postcss");

// Compile sass into CSS
gulp.task("sass-compile", function () {
    return gulp.src("./scss/style.scss")
        .pipe(sourcemaps.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(postcss([
            autoprefixer()
          ]))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest("./css"));
});

gulp.task("watch", function() {
    gulp.watch("./scss/**/*.{scss,sass}", gulp.series("sass-compile"));
    gulp.watch("*.html");
});

