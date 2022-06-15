const gulp = require("gulp");
const { src, series, parallel, dest, watch } = require("gulp");
const browserSync = require("browser-sync").create();
const concat = require("gulp-concat");
const cssnano = require("gulp-cssnano");
const sourceMaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const autoprefixer = require("gulp-autoprefixer");
const babel = require("gulp-babel");
const htmlmin = require("gulp-htmlmin");
const imagemin = require("gulp-imagemin");
const sass = require("gulp-sass")(require("sass"));
const cache = require("gulp-cache");
const plumber = require("gulp-plumber");
const notifier = require("gulp-notifier");
const config = {
  paths: {
    src: {
      allHtml: "./src/*.html",
      sass: "./src/sass/main.scss",
      allJs: "./src/scripts/*.js",
      allImg: "./src/img/**/*.+(png|jpeg|webp)",
    },
    dist: {
      html: "./dist/",
      css: "./dist/css/",
      js: "./dist/js/",
      img: "./dist/img/",
    },
  },
};

// //HTML MINIFY TASK

function HTMLminify() {
  return src(config.paths.src.allHtml)
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(dest(config.paths.dist.html))
    .pipe(browserSync.stream());
}

// //CSS BUNDLE AND MINIFY TASKS

function bundleCss() {
  return src(config.paths.src.sass)
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(sourceMaps.init())
    .pipe(concat("main.css"))
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(sourceMaps.write("."))
    .pipe(dest(config.paths.dist.css));
}

// //JS BUNDLE AND MINIFY TASKS

function bundleJs() {
  return src(config.paths.src.allJs)
    .pipe(plumber({ errorHandler: notifier.error }))
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(sourceMaps.init())
    .pipe(concat("script.js"))
    .pipe(uglify())
    .pipe(sourceMaps.write("."))
    .pipe(dest(config.paths.dist.js));
}

// //GULP IMAGE TASK

function imageOptimizer() {
  return src(config.paths.src.allImg)
    .pipe(plumber({ errorHandler: notifier.error }))
    .pipe(
      cache(
        imagemin({
          verbose: true,
        })
      )
    )
    .pipe(dest(config.paths.dist.img));
}

// // GULP LOCAL SERVER TASK

function localServer() {
  browserSync.init({
    server: {
      baseDir: "./dist/",
    },
    browser: "Google Chrome",
  });
}

// // GULP IDIVIDUAL WATCH TASKS

watch(config.paths.src.allHtml, HTMLminify);

watch(config.paths.src.sass, bundleCss);

watch(config.paths.src.allJs, bundleJs);

watch(config.paths.src.allImg, imageOptimizer);

// // GULP CLEAR CACHE TASK

function clearCache(done) {
  return cache.clearAll(done);
}

// GULP INDIVIDUAL TASKS EXPORTS

exports.bundleCss = bundleCss;
exports.HTMLminify = HTMLminify;
exports.bundleJs = bundleJs;
exports.imageOptimizer = imageOptimizer;
exports.localServer = localServer;
exports.clearCache = clearCache;

// // GULP BUILD TASK EXPORT

exports.build = parallel(HTMLminify, bundleCss, bundleJs, imageOptimizer);

// // GULP DEFAULT TASK EXPORT

exports.default = series(exports.build, localServer);