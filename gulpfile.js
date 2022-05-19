const gulp = require("gulp");
const concat = require("gulp-concat");
const terser = require("gulp-terser");
const imagemin = require("gulp-imagemin")
const sourceMaps = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");
const { src, series, parallel, dest, watch } = require("gulp");
const cssPath = "./project/**/**/*.css";

function bundleCss() {
    return src(cssPath)
        .pipe(sourceMaps.init())
        .pipe(concat("bundle.css"))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourceMaps.write("."))
        .pipe(dest("./dist/css/"));
}

function watchTask() {
    watch([cssPath], {interval: 1000}, parallel(bundleCss));
}

exports.bundleCss = bundleCss;
exports.default = series(parallel(bundleCss), watchTask);