const gulp = require('gulp');
const { src, series, parallel, dest, } = require('gulp');
const concat = require('gulp-concat');
const cssnano = require("gulp-cssnano");
const sourceMaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const config = {
  paths: {
    src: {
      indexCss: [
        "node_modules/swiper/swiper-bundle.css",
        "./project/library.blocks/intro_slider/**/*.css",
        "./project/library.blocks/products_slider/**/*css",
        "./project/library.blocks/modal_slider/**/*.css",
        "./project/library.blocks/parallax/**/*.css",
        "./project/library.blocks/instafeed-slider/**/*.css",
        "./project/project.blocks/body/body.css",
        "./project/project.blocks/all-blocks/all-blocks.css",
        "./project/project.blocks/form/**/*.css",
        "./project/project.blocks/input/**/*.css",
        "./project/project.blocks/button/**/*.css",
        "./project/project.blocks/social_media_login/**/*.css",
        "./project/project.blocks/navigation/**/*.css",
        "./project/project.blocks/logo/**/*.css",
        "./project/project.blocks/header/**/*.css",
        "./project/project.blocks/product_card/**/*.css",
        "./project/project.blocks/modal/**/*.css",
        "./project/project.blocks/select/**/*.css",
        "./project/project.blocks/widget/**/*.css",
        "./project/project.blocks/info/**/*.css",
        "./project/project.blocks/instafeed/**/*.css",
        "./project/project.blocks/social_media_icons/**/*.css",
      ],
      shopCss: [
        "./node_modules/ion-rangeslider/css/ion.rangeSlider.css",
        "./project/library.blocks/range_slider/**/*.css",
        "./project/project.blocks/body/body.css",
        "./project/project.blocks/all-blocks/all-blocks.css",
        "./project/project.blocks/form/**/*.css",
        "./project/project.blocks/input/**/*.css",
        "./project/project.blocks/button/**/*.css",
        "./project/project.blocks/social_media_login/**/*.css",
        "./project/project.blocks/navigation/**/*.css",
        "./project/project.blocks/logo/**/*.css",
        "./project/project.blocks/header/**/*.css",
        "./project/project.blocks/tab/**/*.css",
        "./project/project.blocks/accordion/**/*.css",
        "./project/project.blocks/checkbox/**/*.css",
        "./project/project.blocks/expandable-menu/**/*.css",
        "./project/project.blocks/products/**/*.css",
        "./project/project.blocks/product_card/**/*.css",
        "./project/project.blocks/social_media_icons/**/*.css",
      ],
      aboutCss: [
        "./project/library.blocks/parallax/**/*.css",
        "./project/project.blocks/body/body.css",
        "./project/project.blocks/all-blocks/all-blocks.css",
        "./project/project.blocks/form/**/*.css",
        "./project/project.blocks/input/**/*.css",
        "./project/project.blocks/button/**/*.css",
        "./project/project.blocks/social_media_login/**/*.css",
        "./project/project.blocks/navigation/**/*.css",
        "./project/project.blocks/logo/**/*.css",
        "./project/project.blocks/header/**/*.css",
        "./project/project.blocks/widget/**/*.css",
        "./project/project.blocks/card/**/*.css",
        "./project/project.blocks/social_media_icons/**/*.css",
      ],
      processCss: [
        "./project/library.blocks/parallax/**/*.css",
        "./project/project.blocks/body/body.css",
        "./project/project.blocks/all-blocks/all-blocks.css",
        "./project/project.blocks/form/**/*.css",
        "./project/project.blocks/input/**/*.css",
        "./project/project.blocks/button/**/*.css",
        "./project/project.blocks/social_media_login/**/*.css",
        "./project/project.blocks/navigation/**/*.css",
        "./project/project.blocks/logo/**/*.css",
        "./project/project.blocks/header/**/*.css",
        "./project/project.blocks/widget/**/*.css",
        "./project/project.blocks/card/**/*.css",
        "./project/project.blocks/social_media_icons/**/*.css",
      ],
      contactCss: [
        "./project/project.blocks/body/body.css",
        "./project/project.blocks/all-blocks/all-blocks.css",
        "./project/project.blocks/form/**/*.css",
        "./project/project.blocks/input/**/*.css",
        "./project/project.blocks/button/**/*.css",
        "./project/project.blocks/social_media_login/**/*.css",
        "./project/project.blocks/navigation/**/*.css",
        "./project/project.blocks/logo/**/*.css",
        "./project/project.blocks/header/**/*.css",
        "./project/project.blocks/tab/**/*.css",
        "./project/project.blocks/social_media_icons/**/*.css",
      ],
      faqCss: [
        "./project/project.blocks/body/body.css",
        "./project/project.blocks/all-blocks/all-blocks.css",
        "./project/project.blocks/form/**/*.css",
        "./project/project.blocks/input/**/*.css",
        "./project/project.blocks/button/**/*.css",
        "./project/project.blocks/social_media_login/**/*.css",
        "./project/project.blocks/navigation/**/*.css",
        "./project/project.blocks/logo/**/*.css",
        "./project/project.blocks/header/**/*.css",
        "./project/project.blocks/tab/**/*.css",
        "./project/project.blocks/search_bar/**/*.css",
        "./project/project.blocks/accordion/**/*.css",
        "./project/project.blocks/social_media_icons/**/*.css",
      ],
      storePolicyCss: [
        "./project/project.blocks/body/body.css",
        "./project/project.blocks/all-blocks/all-blocks.css",
        "./project/project.blocks/form/**/*.css",
        "./project/project.blocks/input/**/*.css",
        "./project/project.blocks/button/**/*.css",
        "./project/project.blocks/social_media_login/**/*.css",
        "./project/project.blocks/navigation/**/*.css",
        "./project/project.blocks/logo/**/*.css",
        "./project/project.blocks/header/**/*.css",
        "./project/project.blocks/tab/**/*.css",
        "./project/project.blocks/card/**/*.css",
        "./project/project.blocks/social_media_icons/**/*.css",
      ],
      indexJs: [
        "node_modules/jquery/dist/jquery.js",
        "node_modules/instafeed.js/dist/instafeed.js",
        "node_modules/swiper/swiper-bundle.js",
        "node_modules/jquery-parallax.js/parallax.js",
        "./project/library.blocks/instafeed-slider/instafeed.js",
        "./project/library.blocks/intro_slider/intro_slider.js",
        "./project/library.blocks/products_slider/products_slider.js",
        "./project/library.blocks/modal_slider/modal-slider.js",
        "./project/project.blocks/modal/modal.js",
        "./project/project.blocks/logo/logo.js",
        "./project/project.blocks/form/form.js",
      ],
      shopJs: [
        "node_modules/ion-rangeslider/js/ion.rangeSlider.js",
        "./project/project.blocks/form/form.js",
        "./project/project.blocks/accordion/accordion.js",
        "./project/project.blocks/logo/logo.js",
      ],
      aboutJs: [
        "node_modules/jquery/src/jquery.js",
        "node_modules/jquery-parallax.js/parallax.js",
        "./project/project.blocks/form/form.js",
        "./project/project.blocks/logo/logo.js",
      ],
      processJs: [
        "node_modules/jquery/src/jquery.js",
        "node_modules/jquery-parallax.js/parallax.js",
        "./project/project.blocks/form/form.js",
        "./project/project.blocks/logo/logo.js",
      ],
      contactJs: [
        "./project/project.blocks/form/form.js",
        "./project/project.blocks/logo/logo.js",
      ],
      faqJs: [
        "./project/project.blocks/form/form.js",
        "./project/project.blocks/search_bar/search_bar.js",
        "./project/project.blocks/accordion/accordion.js",
        "./project/project.blocks/logo/logo.js",
      ],
      storePolicyJs: [
        "./project/project.blocks/form/form.js",
        "./project/project.blocks/logo/logo.js",
      ],
    },
    dist: {
      css: "./css/",
      js: "./js/",
    },
  },
};

function bundleIndexCss() {
  return src(config.paths.src.indexCss)
    .pipe(concat('index.min.css'))
    .pipe(sourceMaps.init())
    .pipe(cssnano())
    .pipe(sourceMaps.write('.'))
    .pipe(dest(config.paths.dist.css));
};

function bundleShopCss() {
  return src(config.paths.src.shopCss)
    .pipe(concat("shop.min.css"))
    .pipe(sourceMaps.init())
    .pipe(cssnano())
    .pipe(sourceMaps.write("."))
    .pipe(dest(config.paths.dist.css));
};

function bundleAboutCss() {
  return src(config.paths.src.aboutCss)
    .pipe(concat("about.min.css"))
    .pipe(sourceMaps.init())
    .pipe(cssnano())
    .pipe(sourceMaps.write("."))
    .pipe(dest(config.paths.dist.css));
};

function bundleProcessCss() {
  return src(config.paths.src.processCss)
    .pipe(concat("process.min.css"))
    .pipe(sourceMaps.init())
    .pipe(cssnano())
    .pipe(sourceMaps.write("."))
    .pipe(dest(config.paths.dist.css));
};

function bundleContactCss() {
  return src(config.paths.src.contactCss)
    .pipe(concat("contact.min.css"))
    .pipe(sourceMaps.init())
    .pipe(cssnano())
    .pipe(sourceMaps.write("."))
    .pipe(dest(config.paths.dist.css));
};

function bundleFaqCss() {
  return src(config.paths.src.faqCss)
    .pipe(concat("faq.min.css"))
    .pipe(sourceMaps.init())
    .pipe(cssnano())
    .pipe(sourceMaps.write("."))
    .pipe(dest(config.paths.dist.css));
};

function bundleStorePolicyCss() {
  return src(config.paths.src.storePolicyCss)
    .pipe(concat("storePolicy.min.css"))
    .pipe(sourceMaps.init())
    .pipe(cssnano())
    .pipe(sourceMaps.write("."))
    .pipe(dest(config.paths.dist.css));
};

function bundleIndexJs() {
  return src(config.paths.src.indexJs)
    .pipe(concat('index.min.js'))
    .pipe(sourceMaps.init())
    .pipe(uglify())
    .pipe(sourceMaps.write('.'))
    .pipe(dest(config.paths.dist.js))
}

function bundleShopJs() {
  return src(config.paths.src.shopJs)
    .pipe(concat("shop.min.js"))
    .pipe(sourceMaps.init())
    .pipe(uglify())
    .pipe(sourceMaps.write("."))
    .pipe(dest(config.paths.dist.js));
}

function bundleAboutJs() {
  return src(config.paths.src.aboutJs)
    .pipe(concat("about.min.js"))
    .pipe(sourceMaps.init())
    .pipe(uglify())
    .pipe(sourceMaps.write("."))
    .pipe(dest(config.paths.dist.js));
}

function bundleProcessJs() {
  return src(config.paths.src.processJs)
    .pipe(concat("process.min.js"))
    .pipe(sourceMaps.init())
    .pipe(uglify())
    .pipe(sourceMaps.write("."))
    .pipe(dest(config.paths.dist.js));
}

function bundleContactJs() {
  return src(config.paths.src.contactJs)
    .pipe(concat("contact.min.js"))
    .pipe(sourceMaps.init())
    .pipe(uglify())
    .pipe(sourceMaps.write("."))
    .pipe(dest(config.paths.dist.js));
}

function bundleFaqJs() {
  return src(config.paths.src.faqJs)
    .pipe(concat("faq.min.js"))
    .pipe(sourceMaps.init())
    .pipe(uglify())
    .pipe(sourceMaps.write("."))
    .pipe(dest(config.paths.dist.js));
}

function bundleStorePolicyJs() {
  return src(config.paths.src.storePolicyJs)
    .pipe(concat("StorePolicy.min.js"))
    .pipe(sourceMaps.init())
    .pipe(uglify())
    .pipe(sourceMaps.write("."))
    .pipe(dest(config.paths.dist.js));
}

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
exports.default = series(parallel(
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
  bundleStorePolicyJs
));