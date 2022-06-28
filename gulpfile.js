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
const webp = require("gulp-webp");
const imageminWebp = require("imagemin-webp");
const clone = require("gulp-clone");
const clonesink = clone.sink();
const config = {
    paths: {
        src: {
            html: {
                allHtml: "src/*.html",
                index: "src/index.html",
                shop: "src/shop.html",
                about: "src/about.html",
                process: "src/process.html",
                contact: "src/contact.html",
                faq: "src/FAQ.html",
                storePolicy: "src/store-policy.html",
            },
            scss: {
                allScss: "src/sass/**/*.scss",
                index: [
                    "src/sass/index.scss",
                    "src/sass/base/_animations.scss",
                    "src/sass/base/_base.scss",
                    "src/sass/base/_typography.scss",
                    "src/sass/components/_button.scss",
                    "src/sass/components/_parrallax.scss",
                    "src/sass/components/_product-card.scss",
                    "src/sass/layout/_footer.scss",
                    "src/sass/layout/_header.scss",
                    "src/sass/layout/_mobile-nav.scss",
                    "src/sass/layout/_scroll-top.scss",
                    "src/sass/layout/_social-media-icons.scss",
                    "src/sass/pages/_index.scss",
                    "src/sass/utils/_functions.scss",
                    "src/sass/utils/_mixins.scss",
                    "src/sass/utils/_utilities.scss",
                    "src/sass/utils/_variables.scss",
                ],
                shop: [
                    "src/sass/shop.scss",
                    "src/sass/base/_animations.scss",
                    "src/sass/base/_base.scss",
                    "src/sass/base/_typography.scss",
                    "src/sass/components/_product-card.scss",
                    "src/sass/components/_accordion.scss",
                    "src/sass/layout/_footer.scss",
                    "src/sass/layout/_header.scss",
                    "src/sass/layout/_mobile-nav.scss",
                    "src/sass/layout/_social-media-icons.scss",
                    "src/sass/pages/_shop.scss",
                    "src/sass/utils/_functions.scss",
                    "src/sass/utils/_mixins.scss",
                    "src/sass/utils/_utilities.scss",
                    "src/sass/utils/_variables.scss",
                ],
            },
            javaScript: {
                allJs: "src/scripts/*.js",
                index: [
                    "src/scripts/jquery.js",
                    "src/scripts/instafeed-node.js",
                    "src/scripts/swiper-bundle.js",
                    "src/scripts/products_slider.js",
                    "src/scripts/parallax.js",
                    "src/scripts/instafeed.js",
                ],
                shop: [
                    "src/scripts/jquery.js",
                    "src/scripts/ion.rangeSlider.js",
                    // "src/scripts/dropdown.js",
                    // "src/scripts/accordion.js",
                    "src/scripts/range_slider.js",
                ],
            },
            allImg: "./src/img/**/*.+(png|jpg|svg|)",
        },
        dist: {
            html: {
                index: "dist/",
                shop: "dist/shop/",
                about: "dist/about/",
                process: "dist/process/",
                contact: "dist/contact/",
                faq: "dist/faq/",
                storePolicy: "dist/store-policy/",
            },
            scss: {
                index: "dist/",
                shop: "dist/shop/",
                about: "dist/about/",
                process: "dist/process/",
                contact: "dist/contact/",
                faq: "dist/faq/",
            },
            javaScript: {
                index: "dist/",
                shop: "dist/shop/",
            },
            img: "dist/img/",
        },
    },
};

//HTML MINIFY TASKS

function htmlMinify(htmlName) {
    return src(config.paths.src.html[htmlName])
        .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
        .pipe(dest(config.paths.dist.html[htmlName]))
        .pipe(browserSync.stream());
}

function minifyIndexHtml() {
    return htmlMinify("index");
}

function minifyShopHtml() {
    return htmlMinify("shop");
}

function minifyAboutHtml() {
    return htmlMinify("about");
}

function minifyProcessHtml() {
    return htmlMinify("process");
}

function minifyContactHtml() {
    return htmlMinify("contact");
}

function minifyFaqHtml() {
    return htmlMinify("faq");
}

function minifyStorePolicyHtml() {
    return htmlMinify("storePolicy");
}

// //CSS BUNDLE AND MINIFY TASKS

function bundleScss(scssName) {
    return src(config.paths.src.scss[scssName])
        .pipe(plumber({ errorHandler: notifier.error }))
        .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
        .pipe(sourceMaps.init())
        .pipe(concat(`${scssName}.min.css`))
        .pipe(autoprefixer())
        .pipe(cssnano())
        .pipe(sourceMaps.write("."))
        .pipe(dest(config.paths.dist.scss[scssName]))
        .pipe(browserSync.stream());
}

function bundleIndexScss() {
    return bundleScss("index");
}

function bundleShopScss() {
    return bundleScss("shop");
}

function bundleAboutScss() {
    return bundleScss("about");
}

function bundleProcessScss() {
    return bundleScss("process");
}

function bundleContactScss() {
    return bundleScss("contact");
}

function bundleFaqScss() {
    return bundleScss("faq");
}

// //JS BUNDLE AND MINIFY TASKS

function bundleJs(jsName) {
    return src(config.paths.src.javaScript[jsName])
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
        .pipe(dest(config.paths.dist.javaScript[jsName]))
        .pipe(browserSync.stream());
}

function bundleIndexJs() {
    return bundleJs("index");
}

function bundleShopJs() {
    return bundleJs("shop");
}

// //GULP IMAGE TASK

function imageOptimizer() {
    return src(config.paths.src.allImg)
        .pipe(cache(imagemin()))
        .pipe(clonesink)
        .pipe(webp())
        .pipe(clonesink.tap())
        .pipe(gulp.dest("dist/img/"));
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

// // GULP IDIVIDUAL HTML WATCH TASKS

// HTML

watch(config.paths.src.html.index, minifyIndexHtml);
watch(config.paths.src.html.shop, minifyShopHtml);
watch(config.paths.src.html.about, minifyAboutHtml);
watch(config.paths.src.html.process, minifyProcessHtml);
watch(config.paths.src.html.contact, minifyContactHtml);
watch(config.paths.src.html.faq, minifyFaqHtml);

// SCSS

watch(config.paths.src.scss.index, bundleIndexScss);
watch(config.paths.src.scss.shop, bundleShopScss);

// JS

watch(config.paths.src.javaScript.index, bundleIndexJs);
watch(config.paths.src.javaScript.shop, bundleShopJs);

// IMG

watch(config.paths.src.allImg, imageOptimizer);

// // GULP CLEAR CACHE TASK

function clearCache(done) {
    return cache.clearAll(done);
}

// GULP TASKS EXPORTS

exports.htmlMinify = htmlMinify;
exports.minifyIndexHtml = minifyIndexHtml;
exports.minifyShopHtml = minifyShopHtml;
exports.minifyAboutHtml = minifyAboutHtml;
exports.minifyProcessHtml = minifyProcessHtml;
exports.minifyContactHtml = minifyContactHtml;
exports.minifyFaqHtml = minifyFaqHtml;
exports.minifyStorePolicyHtml = minifyStorePolicyHtml;
exports.bundleScss = bundleScss;
exports.bundleIndexScss = bundleIndexScss;
exports.bundleShopScss = bundleShopScss;
exports.bundleAboutScss = bundleAboutScss;
exports.bundleProcessScss = bundleProcessScss;
exports.bundleContactScss = bundleContactScss;
exports.bundleFaqScss = bundleFaqScss;
exports.bundleJs = bundleJs;
exports.bundleIndexJs = bundleIndexJs;
exports.bundleShopJs = bundleShopJs;
exports.imageOptimizer = imageOptimizer;
exports.localServer = localServer;
exports.clearCache = clearCache;

// // GULP BUILD TASK EXPORT

exports.build = parallel(
    minifyIndexHtml,
    minifyShopHtml,
    minifyAboutHtml,
    minifyProcessHtml,
    minifyContactHtml,
    minifyFaqHtml,
    minifyStorePolicyHtml,
    bundleIndexScss,
    bundleShopScss,
    // bundleAboutScss,
    // bundleProcessScss,
    // bundleContactScss,
    // bundleFaqScss,
    bundleIndexJs,
    bundleShopJs,
    clearCache,
    localServer
);

// // GULP DEFAULT TASK EXPORT

exports.default = series(exports.build);