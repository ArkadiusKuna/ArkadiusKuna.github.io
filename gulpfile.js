const gulp = require("gulp");
const { src, series, parallel, dest, watch } = require("gulp");
const browserSync = require('browser-sync').create();
const concat = require("gulp-concat");
const cssnano = require("gulp-cssnano");
const sourceMaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const autoprefixer = require("gulp-autoprefixer");
const babel = require("gulp-babel");
const htmlmin = require('gulp-htmlmin');
const imagemin = require("gulp-imagemin");
const cache = require("gulp-cache");
const plumber = require("gulp-plumber");
const notifier = require("gulp-notifier");
const config = {
  paths: {
    src: {
      allHtml: "./src/*.html",
      allCss: "./src/components/**/*.css",
      allJs: "./src/components/**/*.js",
      allImg: "./src/components/**/*.+(png|jpeg|webp)",
      indexCss: [
        "node_modules/swiper/swiper-bundle.css",
        "./src/components/library.blocks/intro_slider/**/*.css",
        "./src/components/library.blocks/products_slider/**/*css",
        "./src/components/library.blocks/modal_slider/**/*.css",
        "./src/components/library.blocks/parallax/**/*.css",
        "./src/components/library.blocks/instafeed-slider/*.css",
        "./src/components/project.blocks/body/body.css",
        "./src/components/project.blocks/all_blocks/all_blocks.css",
        "./src/components/project.blocks/form/**/*.css",
        "./src/components/project.blocks/input/**/*.css",
        "./src/components/project.blocks/button/**/*.css",
        "./src/components/project.blocks/social_media_login/**/*.css",
        "./src/components/project.blocks/navigation/**/*.css",
        "./src/components/project.blocks/logo/**/*.css",
        "./src/components/project.blocks/header/**/*.css",
        "./src/components/project.blocks/product_card/**/*.css",
        "./src/components/project.blocks/modal/**/*.css",
        "./src/components/project.blocks/select/**/*.css",
        "./src/components/project.blocks/widget/**/*.css",
        "./src/components/project.blocks/info/**/*.css",
        "./src/components/project.blocks/instafeed/**/*.css",
        "./src/components/project.blocks/social_media_icons/**/*.css",
      ],
      shopCss: [
        "./node_modules/ion-rangeslider/css/ion.rangeSlider.css",
        "./src/components/library.blocks/range_slider/**/*.css",
        "./src/components/project.blocks/body/body.css",
        "./src/components/project.blocks/all_blocks/all_blocks.css",
        "./src/components/project.blocks/form/**/*.css",
        "./src/components/project.blocks/input/**/*.css",
        "./src/components/project.blocks/button/**/*.css",
        "./src/components/project.blocks/social_media_login/**/*.css",
        "./src/components/project.blocks/navigation/**/*.css",
        "./src/components/project.blocks/logo/**/*.css",
        "./src/components/project.blocks/header/**/*.css",
        "./src/components/project.blocks/tab/**/*.css",
        "./src/components/project.blocks/accordion/**/*.css",
        "./src/components/project.blocks/checkbox/**/*.css",
        "./src/components/project.blocks/expandable-menu/**/*.css",
        "./src/components/project.blocks/products/**/*.css",
        "./src/components/project.blocks/product_card/**/*.css",
        "./src/components/project.blocks/social_media_icons/**/*.css",
      ],
      aboutCss: [
        "./src/components/library.blocks/parallax/**/*.css",
        "./src/components/project.blocks/body/body.css",
        "./src/components/project.blocks/all_blocks/all_blocks.css",
        "./src/components/project.blocks/form/**/*.css",
        "./src/components/project.blocks/input/**/*.css",
        "./src/components/project.blocks/button/**/*.css",
        "./src/components/project.blocks/social_media_login/**/*.css",
        "./src/components/project.blocks/navigation/**/*.css",
        "./src/components/project.blocks/logo/**/*.css",
        "./src/components/project.blocks/header/**/*.css",
        "./src/components/project.blocks/widget/**/*.css",
        "./src/components/project.blocks/card/**/*.css",
        "./src/components/project.blocks/social_media_icons/**/*.css",
      ],
      processCss: [
        "./src/components/library.blocks/parallax/**/*.css",
        "./src/components/project.blocks/body/body.css",
        "./src/components/project.blocks/all_blocks/all_blocks.css",
        "./src/components/project.blocks/form/**/*.css",
        "./src/components/project.blocks/input/**/*.css",
        "./src/components/project.blocks/button/**/*.css",
        "./src/components/project.blocks/social_media_login/**/*.css",
        "./src/components/project.blocks/navigation/**/*.css",
        "./src/components/project.blocks/logo/**/*.css",
        "./src/components/project.blocks/header/**/*.css",
        "./src/components/project.blocks/widget/**/*.css",
        "./src/components/project.blocks/card/**/*.css",
        "./src/components/project.blocks/social_media_icons/**/*.css",
      ],
      contactCss: [
        "./src/components/project.blocks/body/body.css",
        "./src/components/project.blocks/all_blocks/all_blocks.css",
        "./src/components/project.blocks/form/**/*.css",
        "./src/components/project.blocks/input/**/*.css",
        "./src/components/project.blocks/button/**/*.css",
        "./src/components/project.blocks/social_media_login/**/*.css",
        "./src/components/project.blocks/navigation/**/*.css",
        "./src/components/project.blocks/logo/**/*.css",
        "./src/components/project.blocks/header/**/*.css",
        "./src/components/project.blocks/tab/**/*.css",
        "./src/components/project.blocks/social_media_icons/**/*.css",
      ],
      faqCss: [
        "./src/components/project.blocks/body/body.css",
        "./src/components/project.blocks/all_blocks/all_blocks.css",
        "./src/components/project.blocks/form/**/*.css",
        "./src/components/project.blocks/input/**/*.css",
        "./src/components/project.blocks/button/**/*.css",
        "./src/components/project.blocks/social_media_login/**/*.css",
        "./src/components/project.blocks/navigation/**/*.css",
        "./src/components/project.blocks/logo/**/*.css",
        "./src/components/project.blocks/header/**/*.css",
        "./src/components/project.blocks/tab/**/*.css",
        "./src/components/project.blocks/search_bar/**/*.css",
        "./src/components/project.blocks/accordion/**/*.css",
        "./src/components/project.blocks/social_media_icons/**/*.css",
      ],
      storePolicyCss: [
        "./src/components/project.blocks/body/body.css",
        "./src/components/project.blocks/all_blocks/all_blocks.css",
        "./src/components/project.blocks/form/**/*.css",
        "./src/components/project.blocks/input/**/*.css",
        "./src/components/project.blocks/button/**/*.css",
        "./src/components/project.blocks/social_media_login/**/*.css",
        "./src/components/project.blocks/navigation/**/*.css",
        "./src/components/project.blocks/logo/**/*.css",
        "./src/components/project.blocks/header/**/*.css",
        "./src/components/project.blocks/tab/**/*.css",
        "./src/components/project.blocks/card/**/*.css",
        "./src/components/project.blocks/social_media_icons/**/*.css",
      ],
      indexJs: [
        "node_modules/jquery/dist/jquery.js",
        "node_modules/instafeed.js/dist/instafeed.js",
        "node_modules/swiper/swiper-bundle.js",
        "node_modules/jquery-parallax.js/parallax.js",
        "./src/components/library.blocks/instafeed_slider/instafeed.js",
        "./src/components/library.blocks/intro_slider/intro_slider.js",
        "./src/components/library.blocks/products_slider/products_slider.js",
        "./src/components/library.blocks/modal_slider/modal-slider.js",
        "./src/components/project.blocks/modal/modal.js",
        "./src/components/project.blocks/logo/logo.js",
        "./src/components/project.blocks/form/form.js",
      ],
      shopJs: [
        "node_modules/jquery/dist/jquery.js",
        "node_modules/ion-rangeslider/js/ion.rangeSlider.min.js",
        "./src/components/library.blocks/range_slider/range_slider.js",
        "./src/components/project.blocks/form/form.js",
        "./src/components/project.blocks/button/_dropdown/dropdown.js",
        "./src/components/project.blocks/accordion/accordion.js",
        "./src/components/project.blocks/logo/logo.js",
      ],
      aboutJs: [
        "node_modules/jquery/dist/jquery.js",
        "node_modules/jquery-parallax.js/parallax.js",
        "./src/components/project.blocks/form/form.js",
        "./src/components/project.blocks/logo/logo.js",
      ],
      processJs: [
        "node_modules/jquery/dist/jquery.js",
        "node_modules/jquery-parallax.js/parallax.js",
        "./src/components/project.blocks/form/form.js",
        "./src/components/project.blocks/logo/logo.js",
      ],
      contactJs: [
        "./src/components/project.blocks/form/form.js",
        "./src/components/project.blocks/logo/logo.js",
      ],
      faqJs: [
        "./src/components/project.blocks/form/form.js",
        "./src/components/project.blocks/search_bar/search_bar.js",
        "./src/components/project.blocks/accordion/accordion.js",
        "./src/components/project.blocks/logo/logo.js",
      ],
      storePolicyJs: [
        "./src/components/project.blocks/form/form.js",
        "./src/components/project.blocks/logo/logo.js",
      ],
    },
    dist: {
      html: "./dist/",
      css: "./dist/css/",
      js: "./dist/js/",
      img: "./dist/assets/img/",
    },
  },
};

function HTMLminify() {
  return src(config.paths.src.allHtml)
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(dest(config.paths.dist.html))
    .pipe(browserSync.stream());
}

function bundleIndexCss() {
  return src(config.paths.src.indexCss)
    .pipe(plumber({ errorHandler: notifier.error }))
    .pipe(sourceMaps.init())
    .pipe(concat("index.min.css"))
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(sourceMaps.write("."))
    .pipe(dest(config.paths.dist.css));
}

function bundleShopCss() {
  return src(config.paths.src.shopCss)
    .pipe(plumber({ errorHandler: notifier.error }))
    .pipe(sourceMaps.init())
    .pipe(concat("shop.min.css"))
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(sourceMaps.write("."))
    .pipe(dest(config.paths.dist.css));
}

function bundleAboutCss() {
  return src(config.paths.src.aboutCss)
    .pipe(plumber({ errorHandler: notifier.error }))
    .pipe(sourceMaps.init())
    .pipe(concat("about.min.css"))
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(sourceMaps.write("."))
    .pipe(dest(config.paths.dist.css));
}

function bundleProcessCss() {
  return src(config.paths.src.processCss)
    .pipe(plumber({ errorHandler: notifier.error }))
    .pipe(sourceMaps.init())
    .pipe(concat("process.min.css"))
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(sourceMaps.write("."))
    .pipe(dest(config.paths.dist.css));
}

function bundleContactCss() {
  return src(config.paths.src.contactCss)
    .pipe(plumber({ errorHandler: notifier.error }))
    .pipe(sourceMaps.init())
    .pipe(concat("contact.min.css"))
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(sourceMaps.write("."))
    .pipe(dest(config.paths.dist.css));
}

function bundleFaqCss() {
  return src(config.paths.src.faqCss)
    .pipe(plumber({ errorHandler: notifier.error }))
    .pipe(sourceMaps.init())
    .pipe(concat("faq.min.css"))
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(sourceMaps.write("."))
    .pipe(dest(config.paths.dist.css));
}

function bundleStorePolicyCss() {
  return src(config.paths.src.storePolicyCss)
    .pipe(plumber({ errorHandler: notifier.error }))
    .pipe(sourceMaps.init())
    .pipe(concat("storePolicy.min.css"))
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(sourceMaps.write("."))
    .pipe(dest(config.paths.dist.css));
}

function bundleIndexJs() {
  return src(config.paths.src.indexJs)
    .pipe(plumber({ errorHandler: notifier.error }))
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(sourceMaps.init())
    .pipe(concat("index.min.js"))
    .pipe(uglify())
    .pipe(sourceMaps.write("."))
    .pipe(dest(config.paths.dist.js));
}

function bundleShopJs() {
  return src(config.paths.src.shopJs)
    .pipe(plumber({ errorHandler: notifier.error }))
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(sourceMaps.init())
    .pipe(concat("shop.min.js"))
    .pipe(uglify())
    .pipe(sourceMaps.write("."))
    .pipe(dest(config.paths.dist.js));
}

function bundleAboutJs() {
  return src(config.paths.src.aboutJs)
    .pipe(plumber({ errorHandler: notifier.error }))
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(sourceMaps.init())
    .pipe(concat("about.min.js"))
    .pipe(uglify())
    .pipe(sourceMaps.write("."))
    .pipe(dest(config.paths.dist.js));
}

function bundleProcessJs() {
  return src(config.paths.src.processJs)
    .pipe(plumber({ errorHandler: notifier.error }))
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(sourceMaps.init())
    .pipe(concat("process.min.js"))
    .pipe(uglify())
    .pipe(sourceMaps.write("."))
    .pipe(dest(config.paths.dist.js));
}

function bundleContactJs() {
  return src(config.paths.src.contactJs)
    .pipe(plumber({ errorHandler: notifier.error }))
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(sourceMaps.init())
    .pipe(concat("contact.min.js"))
    .pipe(uglify())
    .pipe(sourceMaps.write("."))
    .pipe(dest(config.paths.dist.js));
}

function bundleFaqJs() {
  return src(config.paths.src.faqJs)
    .pipe(plumber({ errorHandler: notifier.error }))
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(sourceMaps.init())
    .pipe(concat("faq.min.js"))
    .pipe(uglify())
    .pipe(sourceMaps.write("."))
    .pipe(dest(config.paths.dist.js));
}

function bundleStorePolicyJs() {
  return src(config.paths.src.storePolicyJs)
    .pipe(plumber({ errorHandler: notifier.error }))
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(sourceMaps.init())
    .pipe(concat("storePolicy.min.js"))
    .pipe(uglify())
    .pipe(sourceMaps.write("."))
    .pipe(dest(config.paths.dist.js));
}

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

function watchTask() {
  browserSync.init({
    server: {
      baseDir: "./dist/",
    },
    browser: "Google Chrome",
  });
  watch(
    [
      config.paths.src.allHtml,
      config.paths.src.allCss,
      config.paths.src.allJs,
      config.paths.src.allImg,
    ],
    { interval: 1000 },
    parallel([
      HTMLminify,
      bundleIndexCss,
      bundleIndexJs,
      bundleShopCss,
      bundleShopJs,
      bundleAboutCss,
      bundleAboutJs,
      bundleProcessCss,
      bundleProcessJs,
      bundleContactCss,
      bundleContactJs,
      bundleFaqCss,
      bundleFaqJs,
      bundleStorePolicyCss,
      bundleStorePolicyJs,
    ])
  );
};

function clearCache(done) {
  return cache.clearAll(done);
}

exports.HTMLminify = HTMLminify;
exports.bundleIndexCss = bundleIndexCss;
exports.bundleIndexJs = bundleIndexJs;
exports.bundleShopCss = bundleShopCss;
exports.bundleShopJs = bundleShopJs;
exports.bundleAboutCss = bundleAboutCss;
exports.bundleAboutJs = bundleAboutJs;
exports.bundleProcessCss = bundleProcessCss;
exports.bundleProcessJs = bundleProcessJs;
exports.bundleContactCss = bundleContactCss;
exports.bundleContactJs = bundleContactJs;
exports.bundleFaqCss = bundleFaqCss;
exports.bundleFaqJs = bundleFaqJs;
exports.bundleStorePolicyCss = bundleStorePolicyCss;
exports.bundleStorePolicyJs = bundleStorePolicyJs;
exports.imageOptimizer = imageOptimizer;
exports.watchTask = watchTask;
exports.clearCache = clearCache;
exports.default = series(parallel(
  HTMLminify,
  bundleIndexCss,
  bundleIndexJs,
  bundleShopCss,
  bundleShopJs,
  bundleAboutCss,
  bundleAboutJs,
  bundleProcessCss,
  bundleProcessJs,
  bundleContactCss,
  bundleContactJs,
  bundleFaqCss,
  bundleFaqJs,
  bundleStorePolicyCss,
  bundleStorePolicyJs),
  watchTask);