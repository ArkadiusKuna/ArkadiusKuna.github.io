const gulp = require("gulp");
const concat = require("gulp-concat");
const terser = require("gulp-terser");
const sourceMaps = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");
const {src, series, parallel, dest, watch} = require("gulp");

const cssPath = "./project/**/**/*.css";

function bundleCss() {
    return src(cssPath)
        .pipe(sourceMaps.init())
        .pipe(concat("bundle.css"))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourceMaps.write("."))
        .pipe(dest("./project/project.css.bundle/"));
}

// function cssWatch() {
//     watch([cssPath], {interval: 1000}, parallel(bundleCss));
// }

exports.bundleCss = bundleCss;