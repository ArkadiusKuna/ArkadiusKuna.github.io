const gulp = require("gulp");
const concat = require("gulp-concat");
const terser = require("gulp-terser");
const imagemin = require("gulp-imagemin")
const sourceMaps = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");
const { src, series, parallel, dest, watch } = require("gulp");
const jsIndexPath = gulp.src([
  'node_modules/jquery/dist/jquery.js',
  './src/components/project.blocks/form/form.js',
  'node_modules/swiper/swiper-bundle.js',
  './src/components/library.blocks/intro_slider/intro_slider.js',
  './src/components/library.blocks/products_slider/products_slider.js',
  './src/components/library.blocks/modal_slider/modal-slider.js',
  './src/components/project.blocks/modal/modal.js',
  'node_modules/jquery-parallax.js/parallax.js',
  'node_modules/instafeed.js/dist/instafeed.js',
  './src/components/library.blocks/instafeed_slider/instafeed.js',
  './src/components/project.blocks/logo/logo.js',
]);
const cssIndexPath = gulp.src([
  './src/components/project.blocks/all_blocks/all-blocks.css',
  './src/components/project.blocks/body/body.css',
  "./src/components/project.blocks/form/**/*.css",
  "./src/components/project.blocks/input/**/*.css",
  "./src/components/project.blocks/button/**/*.css",
  "./src/components/project.blocks/social_media_login/**/*.css",
  "./src/components/project.blocks/navigation/**/*.css",
  "./src/components/project.blocks/logo/**/*.css",
  "./src/components/library.blocks/intro_slider/**/*.css",
  'node_modules/swiper/swiper-bundle.css',
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
]);


function bundleCssIndex() {
    return (cssIndexPath)
        .pipe(sourceMaps.init())
        .pipe(concat("index.css"))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourceMaps.write("."))
        .pipe(dest("./dist/css/index/"));
}

function bundleJsIndex() {
    return (jsIndexPath)
        .pipe(sourceMaps.init())
        .pipe(concat('index.js'))
        .pipe(terser())
        .pipe(sourceMaps.write('.'))
        .pipe(dest('./dist/js/index/'))
}

function watchTask() {
    watch([cssIndexPath], {interval: 1000}, parallel(bundleCssIndex));
}
exports.bundleJsIndex = bundleJsIndex;
exports.bundleCssIndex = bundleCssIndex;
exports.default = series(parallel(bundleCssIndex, bundleJsIndex));