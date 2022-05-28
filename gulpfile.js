const sourceMaps = require('gulp-sourcemaps');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const browserSync = require('browser-sync').create();
const htmlmin = require('gulp-htmlmin');
const { watch, src, dest, parallel, series } = require('gulp');
const { clearAll } = require('gulp-cache');
const config = {
  paths: {
    src: {
      html: "./src/*.html",
      img: "../src/components/**/*.+(png|jpeg|webp)",
      indexCss: [
        "node_modules/swiper/swiper-bundle.css",
        "./src/components/project.blocks/all_blocks/all-blocks.css",
        "./src/components/project.blocks/body/body.css",
        "./src/components/project.blocks/form/**/*.css",
        "./src/components/project.blocks/input/**/*.css",
        "./src/components/project.blocks/button/**/*.css",
        "./src/components/project.blocks/social_media_login/**/*.css",
        "./src/components/project.blocks/navigation/**/*.css",
        "./src/components/project.blocks/logo/**/*.css",
        "./src/components/library.blocks/intro_slider/**/*.css",
        "./src/components/project.blocks/header/**/*.css",
        "./src/components/library.blocks/products_slider/**/*.css",
        "./src/components/project.blocks/product_card/**/*.css",
        "./src/components/project.blocks/modal/**/*.css",
        "./src/components/library.blocks/modal_slider/**/*.css",
        "./src/components/project.blocks/widget/**/*.css",
        "./src/components/library.blocks/parallax/**/*.css",
        "./src/components/project.blocks/info/**/*.css",
        "./src/components/project.blocks/instafeed/**/*.css",
        "./src/components/library.blocks/instafeed_slider/**/*.css",
        "./src/components/project.blocks/social_media_icons/**/*.css",
      ],
      shopCss: [
        './node_modules/ion-rangeslider/css/ion.rangeSlider.css',
        './src/components/project.blocks/all_blocks/all-blocks.css',
        './src/components/project.blocks/body/body.css',
      ],
    },
  },
};


// gulp.task('bundleIndexCss', function (done) {
//   return (gulp
//     .src([
//       "./src/components/project.blocks/all_blocks/all-blocks.css",
//       "./src/components/project.blocks/body/body.css",
//       "./src/components/project.blocks/form/**/*.css",
//       "./src/components/project.blocks/input/**/*.css",
//       "./src/components/project.blocks/button/**/*.css",
//       "./src/components/project.blocks/social_media_login/**/*.css",
//       "./src/components/project.blocks/navigation/**/*.css",
//       "./src/components/project.blocks/logo/**/*.css",
//       "./src/components/library.blocks/intro_slider/**/*.css",
//       "node_modules/swiper/swiper-bundle.css",
//       "./src/components/project.blocks/header/**/*.css",
//       "./src/components/library.blocks/products_slider/**/*.css",
//       "./src/components/project.blocks/product_card/**/*.css",
//       "./src/components/project.blocks/modal/**/*.css",
//       "./src/components/library.blocks/modal_slider/**/*.css",
//       "./src/components/project.blocks/widget/**/*.css",
//       "./src/components/library.blocks/parallax/**/*.css",
//       "./src/components/project.blocks/info/**/*.css",
//       "./src/components/project.blocks/instafeed/**/*.css",
//       "./src/components/library.blocks/instafeed_slider/**/*.css",
//       "./src/components/project.blocks/social_media_icons/**/*.css",
//     ])
//     .pipe(concat('index.css'))
//     .pipe(sourceMaps.init())
//     .pipe(cssnano())
//     .pipe(sourceMaps.write("."))
//     .pipe(gulp.dest("./dist/css"))
//   );
//   done()
// });

// gulp.task('bundleIndexJs', function (done) {
//   return (gulp
//     .src([
//       "node_modules/jquery/dist/jquery.js",
//       "./src/components/project.blocks/form/form.js",
//       "node_modules/swiper/swiper-bundle.js",
//       "./src/components/library.blocks/intro_slider/intro_slider.js",
//       "./src/components/library.blocks/products_slider/products_slider.js",
//       "./src/components/library.blocks/modal_slider/modal-slider.js",
//       "./src/components/project.blocks/modal/modal.js",
//       "node_modules/jquery-parallax.js/parallax.js",
//       "node_modules/instafeed.js/dist/instafeed.js",
//       "./src/components/library.blocks/instafeed_slider/instafeed.js",
//       "./src/components/project.blocks/logo/logo.js",
//     ])
//     .pipe(concat("index.js"))
//     .pipe(sourceMaps.init())
//     .pipe(uglify())
//     .pipe(sourceMaps.write("."))
//     .pipe(gulp.dest("./dist/js/"))
//   );
//   done();
// })

// gulp.task('imagemin', function (done) {
//   return (
//     gulp.src('./src/components/**/*.+(png|jpeg|webp)')
//       .pipe(cache(imagemin()))
//       .pipe(gulp.dest('./dist/assets/img/'))
//   )
//   done();
// })

// gulp.task('watch', function () {
//   browserSync.init({
//     server: {
//       baseDir: './'
//     },
//     browser: 'Google Chrome'
//   });
//   gulp
//     .watch(
//       [
//         "./src/components/**/*.css",
//         "./src/components/**/*.js",
//         "./**/*.html",
//         "./src/components/**/*.+(png|jpeg|webp)",
//       ],
//       gulp.parallel(["bundleIndexCss", "bundleIndexJs", "imagemin"])
//     )
//     .on("change", browserSync.reload);
// });

// gulp.task('clear-cache', function (done) {
//   return cache.clearAll(done);
// });

// gulp.task('default', gulp.series(['watch']));


const indexCssPath =[
  "node_modules/swiper/swiper-bundle.css",
  "./src/components/project.blocks/all_blocks/all-blocks.css",
  "./src/components/project.blocks/body/body.css",
  "./src/components/project.blocks/form/**/*.css",
  "./src/components/project.blocks/input/**/*.css",
  "./src/components/project.blocks/button/**/*.css",
  "./src/components/project.blocks/social_media_login/**/*.css",
  "./src/components/project.blocks/navigation/**/*.css",
  "./src/components/project.blocks/logo/**/*.css",
  "./src/components/library.blocks/intro_slider/**/*.css",
  "./src/components/project.blocks/header/**/*.css",
  "./src/components/library.blocks/products_slider/**/*.css",
  "./src/components/project.blocks/product_card/**/*.css",
  "./src/components/project.blocks/modal/**/*.css",
  "./src/components/library.blocks/modal_slider/**/*.css",
  "./src/components/project.blocks/widget/**/*.css",
  "./src/components/library.blocks/parallax/**/*.css",
  "./src/components/project.blocks/info/**/*.css",
  "./src/components/project.blocks/instafeed/**/*.css",
  "./src/components/library.blocks/instafeed_slider/**/*.css",
  "./src/components/project.blocks/social_media_icons/**/*.css",
]

const indexJsPath =[
  "node_modules/jquery/dist/jquery.js",
  "node_modules/swiper/swiper-bundle.js",
  "node_modules/jquery-parallax.js/parallax.js",
  "node_modules/instafeed.js/dist/instafeed.js",
  "./src/components/project.blocks/form/form.js",
  "./src/components/library.blocks/intro_slider/intro_slider.js",
  "./src/components/library.blocks/products_slider/products_slider.js",
  "./src/components/library.blocks/modal_slider/modal-slider.js",
  "./src/components/project.blocks/modal/modal.js",
  "./src/components/library.blocks/instafeed_slider/instafeed.js",
  "./src/components/project.blocks/logo/logo.js",
  ];

function HTMLminify() {
  return src("./src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true}))
    .pipe(dest("./dist/"))
    .pipe(browserSync.stream());
}

function bundleIndexCss() {
  return src(indexCssPath)
    .pipe(concat("index.css"))
    .pipe(sourceMaps.init())
    .pipe(cssnano())
    .pipe(sourceMaps.write("."))
    .pipe(dest("./dist/css/"))
    .pipe(browserSync.stream());
};

function bundleIndexJs() {
  return src(indexJsPath)
    .pipe(concat("index.js"))
    .pipe(sourceMaps.init())
    .pipe(uglify())
    .pipe(sourceMaps.write("."))
    .pipe(dest("./dist/js/"))
    .pipe(browserSync.stream());
};

function imageOptimizer() {
  return src("./src/components/**/*.+(png|jpeg|webp)")
    .pipe(cache(imagemin({
      verbose: true
    })))
    .pipe(dest('./dist/assets/img/'))
};

function watchTask() {
  browserSync.init({
    server: {
      baseDir: "./dist/",
    },
    browser: "Google Chrome",
  });
  watch(['./src/*.html', './src/components/**/*.css', './src/components/**/*.js', './src/components/**/*.+(png|jpeg|webp)'],
    { interval: 1000 }, parallel([HTMLminify, bundleIndexCss, bundleIndexJs]));
};

function clearCache(done) {
  return cache.clearAll(done);
};

exports.HTMLminify = HTMLminify;
exports.bundleIndexCss = bundleIndexCss;
exports.bundleIndexJs = bundleIndexJs;
exports.imageOptimizer = imageOptimizer;
exports.watchTask = watchTask;
exports.clearCache = clearCache;
exports.default = series(parallel(HTMLminify, bundleIndexCss, bundleIndexJs, imageOptimizer,), watchTask,);