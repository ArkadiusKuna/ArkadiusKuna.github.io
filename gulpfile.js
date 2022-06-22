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
            sass: "./src/sass/**/*.scss",
            allJs: "./src/scripts/*.js",
            allImg: "./src/img/**/*.+(png|jpeg|webp|jpg)",
            singleJs: {
                index: [
                    "src/scripts/jquery.js",
                    "src/scripts/instafeed-node.js",
                    "src/scripts/swiper-bundle.js",
                    "src/scripts/products_slider.js",
                    "src/scripts/parallax.js",
                    "src/scripts/instafeed.js",
                ],
            },
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
        .pipe(plumber({ errorHandler: notifier.error }))
        .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
        .pipe(sourceMaps.init())
        .pipe(concat("main.css"))
        .pipe(autoprefixer())
        .pipe(cssnano())
        .pipe(sourceMaps.write("."))
        .pipe(dest(config.paths.dist.css))
        .pipe(browserSync.stream());
}

// //JS BUNDLE AND MINIFY TASKS

function bundleJs(jsName) {
    return src(config.paths.src.singleJs.index)
        .pipe(plumber({ errorHandler: notifier.error }))
        .pipe(
            babel({
                presets: ["@babel/env"],
            })
        )
        .pipe(sourceMaps.init())
        .pipe(concat(`${jsName}.min.js`))
        .pipe(uglify())
        .pipe(sourceMaps.write("."))
        .pipe(dest(config.paths.dist.js));
}

function bundleIndexJs() {
    return bundleJs("index");
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

function watchTask() {
    watch(
        [
            config.paths.src.allHtml,
            config.paths.src.singleJs.index,
            config.paths.src.sass,
        ],
        parallel(HTMLminify, bundleCss, bundleIndexJs)
    ),
        watchTask;
}

// // GULP CLEAR CACHE TASK

function clearCache(done) {
    return cache.clearAll(done);
}

// GULP INDIVIDUAL TASKS EXPORTS

exports.bundleCss = bundleCss;
exports.HTMLminify = HTMLminify;
exports.bundleJs = bundleJs;
exports.bundleIndexJs = bundleIndexJs;
exports.imageOptimizer = imageOptimizer;
exports.localServer = localServer;
exports.clearCache = clearCache;
exports.watchTask = watchTask;

// // GULP BUILD TASK EXPORT

exports.build = parallel(
    HTMLminify,
    bundleCss,
    bundleIndexJs,
    clearCache,
    localServer
);

// // GULP DEFAULT TASK EXPORT

exports.default = series(exports.build);