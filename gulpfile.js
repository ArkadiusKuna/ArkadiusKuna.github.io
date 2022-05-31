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
      css: {
        index: [
          "node_modules/swiper/swiper-bundle.css",
          "./src/components/library.blocks/intro_slider/**/*.css",
          "./src/components/library.blocks/products_slider/**/*css",
          "./src/components/library.blocks/modal_slider/**/*.css",
          "./src/components/library.blocks/parallax/**/*.css",
          "./src/components/library.blocks/instafeed_slider/**/*.css",
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
        shop: [
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
          "./src/components/project.blocks/expandable_menu/**/*.css",
          "./src/components/project.blocks/products/**/*.css",
          "./src/components/project.blocks/product_card/**/*.css",
          "./src/components/project.blocks/social_media_icons/**/*.css",
        ],
        about: [
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
        process: [
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
        contact: [
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
        faq: [
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
        storePolicy: [
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
      },
      js: {
        index: [
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
        shop: [
          "node_modules/jquery/dist/jquery.js",
          "node_modules/ion-rangeslider/js/ion.rangeSlider.min.js",
          "./src/components/library.blocks/range_slider/range_slider.js",
          "./src/components/project.blocks/form/form.js",
          "./src/components/project.blocks/button/_dropdown/dropdown.js",
          "./src/components/project.blocks/accordion/accordion.js",
          "./src/components/project.blocks/logo/logo.js",
        ],
        about: [
          "node_modules/jquery/dist/jquery.js",
          "node_modules/jquery-parallax.js/parallax.js",
          "./src/components/project.blocks/form/form.js",
          "./src/components/project.blocks/logo/logo.js",
        ],
        process: [
          "node_modules/jquery/dist/jquery.js",
          "node_modules/jquery-parallax.js/parallax.js",
          "./src/components/project.blocks/form/form.js",
          "./src/components/project.blocks/logo/logo.js",
        ],
        contact: [
          "./src/components/project.blocks/form/form.js",
          "./src/components/project.blocks/logo/logo.js",
        ],
        faq: [
          "./src/components/project.blocks/form/form.js",
          "./src/components/project.blocks/search_bar/search_bar.js",
          "./src/components/project.blocks/accordion/accordion.js",
          "./src/components/project.blocks/logo/logo.js",
        ],
        storePolicy: [
          "./src/components/project.blocks/form/form.js",
          "./src/components/project.blocks/logo/logo.js",
        ],
      },
    },
    dist: {
      html: "./dist/",
      css: "./dist/css/",
      js: "./dist/js/",
      img: "./dist/assets/img/",
    },
  },
};

//HTML MINIFY TASK

function HTMLminify() {
  return src(config.paths.src.allHtml)
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(dest(config.paths.dist.html))
    .pipe(browserSync.stream());
}

//CSS BUNDLE AND MINIFY TASKS

function bundleCss(cssName) {
  return src(config.paths.src.css[cssName])
    .pipe(plumber({ errorHandler: notifier.error }))
    .pipe(sourceMaps.init())
    .pipe(concat(`${cssName}.min.css`))
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(sourceMaps.write("."))
    .pipe(dest(config.paths.dist.css));
}

function bundleIndexCss() {
  return bundleCss('index')
};

function bundleShopCss() {
  return bundleCss('shop')
};

function bundleAboutCss() {
  return bundleCss('about')
};

function bundleProcessCss() {
  return bundleCss('process')
};

function bundleContactCss() {
  return bundleCss('contact')
};

function bundleFaqCss() {
  return bundleCss('faq')
};

function bundleStorePolicyCss() {
  return bundleCss('storePolicy')
};

//JS BUNDLE AND MINIFY TASKS

function bundleJs(jsName) {
  return src(config.paths.src.js[jsName])
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
  return bundleJs('index')
}

function bundleShopJs() {
  return bundleJs("shop");
}

function bundleAboutJs() {
  return bundleJs("about");
}

function bundleProcessJs() {
  return bundleJs("process");
}

function bundleContactJs() {
  return bundleJs("contact");
}

function bundleFaqJs() {
  return bundleJs("faq");
}

function bundleStorePolicyJs() {
  return bundleJs("storePolicy");
}

//GULP IMAGE TASK

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

// GULP LOCAL SERVER TASK

function localServer() {
  browserSync.init({
    server: {
      baseDir: "./dist/",
    },
    browser: "Google Chrome",
  });
}

// GULP IDIVIDUAL WATCH TASKS

watch(config.paths.src.allHtml, HTMLminify);

watch(config.paths.src.allCss, series([bundleIndexCss, bundleShopCss, bundleAboutCss, bundleProcessCss, bundleContactCss,
  bundleFaqCss, bundleStorePolicyCss]));

watch(config.paths.src.allJs, series(bundleIndexJs, bundleShopJs, bundleAboutJs, bundleProcessJs, bundleContactJs,
  bundleFaqJs, bundleStorePolicyJs));

watch(config.paths.src.allImg, imageOptimizer);

// GULP CLEAR CACHE TASK

function clearCache(done) {
  return cache.clearAll(done);
}

// GULP INDIVIDUAL TASKS EXPORTS

exports.HTMLminify = HTMLminify;
exports.bundleCss = bundleCss;
exports.bundleJs = bundleJs;
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
exports.localServer = localServer;
exports.clearCache = clearCache;

// GULP BUILD TASK EXPORT

exports.build = parallel(
  HTMLminify,
  bundleIndexCss,
  bundleShopCss,
  bundleAboutCss,
  bundleProcessCss,
  bundleContactCss,
  bundleFaqCss,
  bundleStorePolicyCss,
  bundleIndexJs,
  bundleShopJs,
  bundleAboutJs,
  bundleProcessJs,
  bundleContactJs,
  bundleFaqJs,
  bundleStorePolicyJs
);

// GULP DEFAULT TASK EXPORT

exports.default = series(exports.build, localServer);