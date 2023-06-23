(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/IndexComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/IndexComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _store_modules_setting_mutation_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/modules/setting/mutation-types */ "./resources/js/client/store/modules/setting/mutation-types.js");
/* harmony import */ var _shared_products_ProductOneComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/products/ProductOneComponent */ "./resources/js/client/components/shared/products/ProductOneComponent.vue");
/* harmony import */ var _shared_products_ProductTwoComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/products/ProductTwoComponent */ "./resources/js/client/components/shared/products/ProductTwoComponent.vue");
/* harmony import */ var _shared_OwlCarouselComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/OwlCarouselComponent */ "./resources/js/client/components/shared/OwlCarouselComponent.vue");
/* harmony import */ var _shared_ParallaxComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/ParallaxComponent */ "./resources/js/client/components/shared/ParallaxComponent.vue");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







function loadPost(name) {
  return function () {
    return __webpack_require__("./resources/js/client/components/shared/posts lazy recursive ^\\.\\/.*\\.vue$")("./".concat(name, ".vue")).then(function (m) {
      return m["default"] || m;
    });
  };
}

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ProductOneComponent: _shared_products_ProductOneComponent__WEBPACK_IMPORTED_MODULE_2__["default"],
    ProductTwoComponent: _shared_products_ProductTwoComponent__WEBPACK_IMPORTED_MODULE_3__["default"],
    OwlCarouselComponent: _shared_OwlCarouselComponent__WEBPACK_IMPORTED_MODULE_4__["default"],
    ParallaxComponent: _shared_ParallaxComponent__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      featuredProducts: [],
      newArrivals: [],
      topRates: [],
      bestSellings: [],
      categories: [],
      posts: [],
      newsLetter: null
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("setting", ["getNewsletterStatus"])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("setting", ["getBlogSettings"])), {}, {
    postComponent: function postComponent() {
      return this.getBlogSettings.postType && loadPost(this.getBlogSettings.postType);
    }
  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])("setting", {
    notShowAgain: _store_modules_setting_mutation_types__WEBPACK_IMPORTED_MODULE_1__["NEWSLETTER_NOT_SHOW"]
  })), {}, {
    beforeNewsletterClose: function beforeNewsletterClose(event) {
      if (event.ref.querySelector("#show-again") && event.ref.querySelector("#show-again").checked) {
        this.notShowAgain();
      }
    }
  }),
  beforeCreate: function beforeCreate() {
    var _this = this;

    window.axios.get("/web").then(function (response) {
      _this.featuredProducts = _toConsumableArray(response.data.featuredProducts);
      _this.newArrivals = _toConsumableArray(response.data.newArrivals);
      _this.topRates = _toConsumableArray(response.data.topRates);
      _this.bestSellings = _toConsumableArray(response.data.bestSellings);
      _this.categories = _toConsumableArray(response.data.categories);
      _this.posts = _toConsumableArray(response.data.posts);
    })["catch"](function (error) {});
  },
  mounted: function mounted() {
    var _this2 = this;

    if (this.getNewsletterStatus) {
      this.newsLetter = setTimeout(function () {
        _this2.$modal.show(function () {
          return __webpack_require__.e(/*! import() */ 14).then(__webpack_require__.bind(null, /*! ./shared/modals/NewsletterModalComponent */ "./resources/js/client/components/shared/modals/NewsletterModalComponent.vue"));
        }, {}, {
          width: "740",
          height: "auto",
          adaptive: true
        }, {
          "before-close": _this2.beforeNewsletterClose
        });
      }, 5000);
    }
  },
  destroyed: function destroyed() {
    window.clearTimeout(this.newsLetter);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/OwlCarouselComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shared/OwlCarouselComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    options: {
      type: Object
    }
  },
  data: function data() {
    return {
      carouselOptions: {
        loop: false,
        margin: 20,
        responsiveClass: true,
        nav: false,
        navText: ['<i class="icon-angle-left">', '<i class="icon-angle-right">'],
        dots: true,
        autoplay: true,
        autoplayTimeout: 15e3,
        items: 1
      },
      id: "10"
    };
  },
  created: function created() {
    this.carouselOptions = _objectSpread(_objectSpread({}, this.carouselOptions), this.options);
    this.id = Math.random().toString(36).substring(2, 15);
  },
  mounted: function mounted() {
    var _this = this;

    __webpack_require__(/*! owl.carousel */ "./node_modules/owl.carousel/dist/owl.carousel.js");

    var owl = $("#" + this.id);
    owl.on("initialize.owl.carousel", function () {
      _this.$emit("initialize");
    });
    owl.on("initialized.owl.carousel", function () {
      _this.$emit("initialized");
    });
    this.create();
    $("#" + this.prevHandler).click(function () {
      owl.trigger("prev.owl.carousel");
    });
    $("#" + this.nextHandler).click(function () {
      owl.trigger("next.owl.carousel");
    });
    owl.on("changed.owl.carousel", function (event) {
      _this.$emit("changed", event);

      if ($(event.currentTarget.closest(".product-single-carousel")).length > 0) {
        var customDots = $(event.currentTarget).closest(".product-single-gallery").find("#carousel-custom-dots");

        if (customDots.length > 0 && customDots.hasClass("vertical-thumbs")) {
          var activeDot = customDots.find(".owl-dot.active");

          if (activeDot.length > 0) {
            activeDot.removeClass("active");
          }

          customDots.children().eq(event.item.index).addClass("active");
        } else if (customDots.length > 0) {
          var activeDot = customDots.find(".owl-dot.active");

          if (activeDot.length > 0) {
            activeDot.removeClass("active");
          }

          var activeDotParent = customDots.find(".owl-item").eq(event.item.index);

          if (!activeDotParent.hasClass("active")) {
            activeDotParent.closest(".owl-carousel").trigger("to.owl.carousel", [activeDotParent.index(), 300]);
          }

          activeDotParent.children().addClass("active");
        }
      }
    });
    $("#carousel-custom-dots .owl-dot").click(function () {
      var index = $(this).index();

      if ($(this).closest(".owl-carousel").length > 0) {
        index = $(this).parent().index();
      }

      $(this).closest(".product-single-gallery").find(".product-single-carousel").trigger("to.owl.carousel", [index, 300]);
    });

    if (!this.loop) {
      owl.on("changed.owl.carousel", function (event) {
        // start
        if (event.item.index === 0) {
          _this.showPrev = false;
          _this.showNext = true;
        } else {
          var currentEl = Math.floor(event.item.index + event.page.size); // last

          if (currentEl === event.item.count) {
            _this.showPrev = true;
            _this.showNext = false;
          } else {
            _this.showPrev = true;
            _this.showNext = true;
          }
        }
      });
    }
  },
  methods: {
    create: function create() {
      $("#" + this.id).owlCarousel(this.carouselOptions);
    },
    destroy: function destroy() {
      $("#" + this.id).trigger("destroy.owl.carousel");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/ParallaxComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shared/ParallaxComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    options: {
      type: Object,
      "default": function _default() {
        return {
          offset: 50,
          speed: 300
        };
      }
    },
    bgImage: {
      type: String,
      required: true
    }
  },
  mounted: function mounted() {
    window.addEventListener("scroll", this.scrollHandler, {
      passive: true
    });
  },
  destroyed: function destroyed() {
    window.removeEventListener("scroll", this.scrollHandler);
  },
  methods: {
    scrollHandler: function scrollHandler() {
      var parallax = this.$el;
      var y = (parallax.offsetTop - window.pageYOffset) * this.options.speed / parallax.offsetTop + this.options.offset;
      parallax.style.backgroundPositionY = y + "%";
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/IndexComponent.vue?vue&type=template&id=0f413884&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/IndexComponent.vue?vue&type=template&id=0f413884& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "main",
    { staticClass: "main" },
    [
      _c(
        "owl-carousel-component",
        {
          directives: [{ name: "animate", rawName: "v-animate" }],
          staticClass:
            "home-slider show-nav-hover nav-big mb-2 text-uppercase slide-animate",
          attrs: {
            options: {
              items: 1,
              dots: false,
              autoplay: false,
              nav: true
            }
          }
        },
        [
          _c("div", { staticClass: "home-slide1 banner" }, [
            _c("img", {
              directives: [
                {
                  name: "lazy",
                  rawName: "v-lazy",
                  value: _vm.$root.getUrl("client/images/slider/slide-1.jpg"),
                  expression: "$root.getUrl('client/images/slider/slide-1.jpg')"
                }
              ],
              staticClass: "slide-bg",
              attrs: { alt: "slider", width: "1920", height: "500" }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "container" }, [
              _c(
                "div",
                {
                  staticClass:
                    "banner-layer banner-layer-middle appear-animate",
                  attrs: { "data-animation-name": "fadeInUpShorter" }
                },
                [
                  _c("h4", { staticClass: "text-transform-none" }, [
                    _vm._v(
                      "\n                        Find the Boundaries. Push Through!\n                    "
                    )
                  ]),
                  _vm._v(" "),
                  _c("h2", { staticClass: "text-transform-none mb-0" }, [
                    _vm._v("Summer Sale")
                  ]),
                  _vm._v(" "),
                  _c("h3", { staticClass: "m-b-3" }, [_vm._v("70% Off")]),
                  _vm._v(" "),
                  _c("h5", { staticClass: "d-inline-block mb-0" }, [
                    _c("span", [_vm._v("Starting At")]),
                    _vm._v(" "),
                    _c(
                      "b",
                      {
                        staticClass:
                          "coupon-sale-text text-white bg-secondary align-middle"
                      },
                      [
                        _c("sup", [_vm._v("$")]),
                        _vm._v("199\n                            "),
                        _c("sup", [_vm._v("99")])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-dark btn-lg ls-10",
                      attrs: { to: "/shop/default" }
                    },
                    [_vm._v("Shop Now!")]
                  )
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "home-slide2 banner banner-md-vw",
              attrs: { "data-animation-name": "fadeInUpShorter" }
            },
            [
              _c("img", {
                directives: [
                  {
                    name: "lazy",
                    rawName: "v-lazy",
                    value: _vm.$root.getUrl("client/images/slider/slide-2.jpg"),
                    expression:
                      "$root.getUrl('client/images/slider/slide-2.jpg')"
                  }
                ],
                staticClass: "slide-bg",
                attrs: { alt: "slider", width: "1920", height: "500" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "container" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "banner-layer banner-layer-middle d-flex appear-animate",
                    attrs: { "data-animation-name": "fadeInUpShorter" }
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "mx-auto" },
                      [
                        _c("h4", { staticClass: "m-b-1" }, [_vm._v("Extra")]),
                        _vm._v(" "),
                        _c("h3", { staticClass: "m-b-2" }, [_vm._v("20% off")]),
                        _vm._v(" "),
                        _c("h3", { staticClass: "m-b-3 heading-border" }, [
                          _vm._v("Accessories")
                        ]),
                        _vm._v(" "),
                        _c("h2", { staticClass: "text-transform-none m-b-4" }, [
                          _vm._v(
                            "\n                            Summer Sale\n                        "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "router-link",
                          {
                            staticClass: "btn btn-block btn-dark",
                            attrs: { to: "/shop/default" }
                          },
                          [_vm._v("Shop All Sale")]
                        )
                      ],
                      1
                    )
                  ]
                )
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c("animated-fade-in", [
        _c(
          "div",
          {
            directives: [{ name: "animate", rawName: "v-animate" }],
            staticClass: "container mb-2 appear-animate"
          },
          [
            _c(
              "owl-carousel-component",
              {
                staticClass: "info-boxes-slider mb-2",
                attrs: {
                  options: {
                    dots: false,
                    items: 1,
                    margin: 0,
                    responsive: {
                      576: {
                        items: 2
                      },
                      992: {
                        items: 3
                      }
                    }
                  }
                }
              },
              [
                _c("div", { staticClass: "info-box info-box-icon-left" }, [
                  _c("i", { staticClass: "icon-shipping" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "info-box-content" }, [
                    _c("h4", [_vm._v("FREE SHIPPING & RETURN")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-body" }, [
                      _vm._v(
                        "\n                            Free shipping on all orders over $99.\n                        "
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "info-box info-box-icon-left" }, [
                  _c("i", { staticClass: "icon-money" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "info-box-content" }, [
                    _c("h4", [_vm._v("MONEY BACK GUARANTEE")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-body" }, [
                      _vm._v("100% money back guarantee")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "info-box info-box-icon-left" }, [
                  _c("i", { staticClass: "icon-support" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "info-box-content" }, [
                    _c("h4", [_vm._v("ONLINE SUPPORT 24/7")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-body" }, [
                      _vm._v("Lorem ipsum dolor sit amet.")
                    ])
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "banners-container" },
              [
                _c(
                  "owl-carousel-component",
                  {
                    staticClass: "banners-slider",
                    attrs: {
                      options: {
                        dots: false,
                        loop: false,
                        margin: 20,
                        autoplay: false,
                        items: 1,
                        responsive: {
                          576: {
                            items: 2
                          },
                          992: {
                            items: 3
                          }
                        }
                      }
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        directives: [{ name: "animate", rawName: "v-animate" }],
                        staticClass:
                          "banner banner1 banner-sm-vw appear-animate",
                        attrs: {
                          "data-animation-name": "fadeInLeftShorter",
                          "data-animation-delay": "1000"
                        }
                      },
                      [
                        _c("figure", [
                          _c("img", {
                            directives: [
                              {
                                name: "lazy",
                                rawName: "v-lazy",
                                value: _vm.$root.getUrl(
                                  "client/images/banners/banner-1.jpg"
                                ),
                                expression:
                                  "\n                                    $root.getUrl(\n                                        'client/images/banners/banner-1.jpg'\n                                    )\n                                "
                              }
                            ],
                            attrs: {
                              alt: "banner",
                              width: "360",
                              height: "175"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "banner-layer banner-layer-middle" },
                          [
                            _c("h3", { staticClass: "m-b-2" }, [
                              _vm._v("Porto Watches")
                            ]),
                            _vm._v(" "),
                            _c("h4", { staticClass: "m-b-3 text-primary" }, [
                              _c("sup", { staticClass: "text-dark" }, [
                                _c("del", [_vm._v("20%")])
                              ]),
                              _vm._v("30%\n                                "),
                              _c("sup", [_vm._v("OFF")])
                            ]),
                            _vm._v(" "),
                            _c(
                              "router-link",
                              {
                                staticClass: "btn btn-sm btn-dark ls-10",
                                attrs: { to: "/shop/default" }
                              },
                              [_vm._v("Shop Now")]
                            )
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [{ name: "animate", rawName: "v-animate" }],
                        staticClass:
                          "banner banner2 banner-sm-vw text-uppercase appear-animate",
                        attrs: {
                          "data-animation-name": "fadeInUpShorter",
                          "data-animation-delay": "800"
                        }
                      },
                      [
                        _c("figure", [
                          _c("img", {
                            directives: [
                              {
                                name: "lazy",
                                rawName: "v-lazy",
                                value: _vm.$root.getUrl(
                                  "client/images/banners/banner-2.jpg"
                                ),
                                expression:
                                  "\n                                    $root.getUrl(\n                                        'client/images/banners/banner-2.jpg'\n                                    )\n                                "
                              }
                            ],
                            attrs: {
                              alt: "banner",
                              width: "360",
                              height: "175"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "banner-layer banner-layer-middle text-center pr-4"
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "row align-items-lg-center" },
                              [
                                _c(
                                  "div",
                                  { staticClass: "col-lg-7 text-lg-right" },
                                  [
                                    _c("h3", [_vm._v("Deal Promos")]),
                                    _vm._v(" "),
                                    _c(
                                      "h4",
                                      {
                                        staticClass:
                                          "pb-4 pb-lg-0 mb-0 text-body"
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        Starting at $99\n                                    "
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "col-lg-5 text-lg-left px-0 px-xl-3"
                                  },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass:
                                          "btn btn-sm btn-dark ls-10",
                                        attrs: { to: "/shop/default" }
                                      },
                                      [_vm._v("Shop Now")]
                                    )
                                  ],
                                  1
                                )
                              ]
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [{ name: "animate", rawName: "v-animate" }],
                        staticClass:
                          "banner banner3 banner-sm-vw appear-animate",
                        attrs: {
                          "data-animation-name": "fadeInRightShorter",
                          "data-animation-delay": "1000"
                        }
                      },
                      [
                        _c("figure", [
                          _c("img", {
                            directives: [
                              {
                                name: "lazy",
                                rawName: "v-lazy",
                                value: _vm.$root.getUrl(
                                  "client/images/banners/banner-3.jpg"
                                ),
                                expression:
                                  "\n                                    $root.getUrl(\n                                        'client/images/banners/banner-3.jpg'\n                                    )\n                                "
                              }
                            ],
                            attrs: {
                              alt: "banner",
                              width: "360",
                              height: "175"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "banner-layer banner-layer-middle text-right"
                          },
                          [
                            _c("h3", [_vm._v("Handbags")]),
                            _vm._v(" "),
                            _c(
                              "h4",
                              { staticClass: "text-secondary text-uppercase" },
                              [
                                _vm._v(
                                  "\n                                Starting at $99\n                            "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "router-link",
                              {
                                staticClass: "btn btn-sm btn-dark ls-10",
                                attrs: { to: "/shop/default" }
                              },
                              [_vm._v("Shop Now")]
                            )
                          ],
                          1
                        )
                      ]
                    )
                  ]
                )
              ],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "section",
        {
          directives: [{ name: "animate", rawName: "v-animate" }],
          staticClass: "featured-products-section appear-animate",
          attrs: { "data-animation-name": "fadeInUpShorter" }
        },
        [
          _c(
            "div",
            { staticClass: "container" },
            [
              _c(
                "h2",
                { staticClass: "section-title heading-border ls-20 border-0" },
                [_vm._v("\n                Featured Products\n            ")]
              ),
              _vm._v(" "),
              _vm.featuredProducts.length > 0
                ? _c(
                    "owl-carousel-component",
                    {
                      key: "featured-slider",
                      staticClass:
                        "products-slider nav-outer show-nav-hover nav-image-center",
                      attrs: {
                        options: {
                          items: 2,
                          dots: false,
                          nav: true,
                          autoplay: false,
                          responsive: {
                            0: {
                              items: 2
                            },
                            700: {
                              items: 3
                            },
                            1200: {
                              items: 4
                            }
                          }
                        }
                      }
                    },
                    _vm._l(_vm.featuredProducts, function(product) {
                      return _c("product-one-component", {
                        key: product.id,
                        attrs: { product: product }
                      })
                    }),
                    1
                  )
                : _c(
                    "owl-carousel-component",
                    {
                      staticClass:
                        "products-slider nav-outer show-nav-hover nav-image-center",
                      attrs: {
                        options: {
                          items: 2,
                          dots: false,
                          nav: true,
                          autoplay: false,
                          responsive: {
                            0: {
                              items: 2
                            },
                            700: {
                              items: 3
                            },
                            1200: {
                              items: 4
                            }
                          }
                        }
                      }
                    },
                    _vm._l([1, 2, 3, 4], function(item) {
                      return _c("div", {
                        key: "featured-skel-" + item,
                        staticClass: "product-loading-overlay"
                      })
                    }),
                    0
                  )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "section",
        {
          directives: [{ name: "animate", rawName: "v-animate" }],
          staticClass: "new-products-section mb-3 pb-2 appear-animate",
          attrs: { "data-animation-name": "fadeInLeftShorter" }
        },
        [
          _c(
            "div",
            { staticClass: "container" },
            [
              _c(
                "h2",
                { staticClass: "section-title heading-border ls-20 border-0" },
                [_vm._v("\n                New Arrivals\n            ")]
              ),
              _vm._v(" "),
              _vm.newArrivals.length > 0
                ? _c(
                    "owl-carousel-component",
                    {
                      key: "new-slider",
                      staticClass:
                        "products-slider nav-outer show-nav-hover nav-image-center",
                      attrs: {
                        options: {
                          items: 2,
                          dots: false,
                          nav: true,
                          autoplay: false,
                          responsive: {
                            0: {
                              items: 2
                            },
                            700: {
                              items: 3
                            },
                            900: {
                              items: 4
                            },
                            1200: {
                              items: 5
                            }
                          }
                        }
                      }
                    },
                    _vm._l(_vm.newArrivals, function(product) {
                      return _c("product-one-component", {
                        key: product.id,
                        attrs: { product: product }
                      })
                    }),
                    1
                  )
                : _c(
                    "owl-carousel-component",
                    {
                      staticClass:
                        "products-slider nav-outer show-nav-hover nav-image-center",
                      attrs: {
                        options: {
                          items: 2,
                          dots: false,
                          nav: true,
                          autoplay: false,
                          responsive: {
                            0: {
                              items: 2
                            },
                            700: {
                              items: 3
                            },
                            900: {
                              items: 4
                            },
                            1200: {
                              items: 5
                            }
                          }
                        }
                      }
                    },
                    _vm._l([1, 2, 3, 4, 5], function(item) {
                      return _c("div", {
                        key: "new-skel-" + item,
                        staticClass: "product-loading-overlay"
                      })
                    }),
                    0
                  ),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [{ name: "animate", rawName: "v-animate" }],
                  staticClass: "banner banner-big-sale appear-animate",
                  style:
                    "background: #2A95CB center/cover url(" +
                    _vm.$root.getUrl("client/images/banners/banner-4.jpg") +
                    ")",
                  attrs: {
                    "data-animation-delay": "200",
                    "data-animation-name": "fadeInUpShorter"
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "banner-content row align-items-center mx-0"
                    },
                    [
                      _vm._m(0),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-3 text-center text-md-right" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "btn btn-light btn-white btn-lg",
                              attrs: { to: "/shop/horizontal-filter1" }
                            },
                            [_vm._v("View Sale")]
                          )
                        ],
                        1
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "h2",
                {
                  directives: [{ name: "animate", rawName: "v-animate" }],
                  staticClass:
                    "section-title heading-border border-0 mb-5 ls-0 appear-animate",
                  attrs: { "data-animation-name": "fadeInUpShorter" }
                },
                [
                  _vm._v(
                    "\n                Browse Our Categories\n            "
                  )
                ]
              ),
              _vm._v(" "),
              _vm.categories.length > 0
                ? _c(
                    "div",
                    [
                      _c(
                        "owl-carousel-component",
                        {
                          directives: [
                            { name: "animate", rawName: "v-animate" }
                          ],
                          staticClass:
                            "categories-slider show-nav-hover nav-outer appear-animate",
                          attrs: {
                            options: {
                              nav: true,
                              dots: false,
                              items: 2,
                              responsive: {
                                576: {
                                  items: 3
                                },
                                992: {
                                  items: 5
                                }
                              }
                            },
                            "data-animation-name": "fadeInUpShorter"
                          }
                        },
                        _vm._l(_vm.categories, function(category) {
                          return _c(
                            "div",
                            {
                              key: category.id,
                              staticClass: "product-category"
                            },
                            [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    to: {
                                      path: "/shop/default",
                                      query: { category: category.slug }
                                    }
                                  }
                                },
                                [
                                  _c("figure", [
                                    category.media
                                      ? _c("img", {
                                          directives: [
                                            {
                                              name: "lazy",
                                              rawName: "v-lazy",
                                              value: _vm.$root.getUrl(
                                                category.media.copy_link,
                                                true,
                                                300
                                              ),
                                              expression:
                                                "\n                                        $root.getUrl(\n                                            category.media.copy_link,\n                                            true,\n                                            300\n                                        )\n                                    "
                                            }
                                          ],
                                          attrs: {
                                            width: "300",
                                            height: "300",
                                            alt: category.media.alt_text
                                              ? category.media.alt_text
                                              : "category"
                                          }
                                        })
                                      : _c("img", {
                                          directives: [
                                            {
                                              name: "lazy",
                                              rawName: "v-lazy",
                                              value: _vm.$root.getUrl(
                                                "server/images/placeholder-img-300x300.png"
                                              ),
                                              expression:
                                                "\n                                        $root.getUrl(\n                                            'server/images/placeholder-img-300x300.png'\n                                        )\n                                    "
                                            }
                                          ],
                                          attrs: {
                                            width: "300",
                                            height: "300",
                                            alt: "category"
                                          }
                                        })
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "category-content" },
                                    [
                                      _c("h3", [_vm._v(_vm._s(category.name))]),
                                      _vm._v(" "),
                                      _c("span", [
                                        _c("mark", { staticClass: "count" }, [
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(category.count) +
                                              "\n                                    "
                                          )
                                        ]),
                                        _vm._v(
                                          "\n                                    products\n                                "
                                        )
                                      ])
                                    ]
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        }),
                        0
                      )
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "section",
        {
          directives: [{ name: "animate", rawName: "v-animate" }],
          staticClass: "feature-boxes-container appear-animate",
          attrs: { "data-animation-name": "fadeInUpShorter" }
        },
        [_vm._m(1)]
      ),
      _vm._v(" "),
      _c(
        "parallax-component",
        {
          attrs: {
            "bg-image": _vm.$root.getUrl("client/images/banners/banner-5.jpg")
          }
        },
        [
          _c(
            "div",
            { staticClass: "promo-banner banner container text-uppercase" },
            [
              _c(
                "div",
                {
                  staticClass:
                    "banner-content row align-items-center text-center"
                },
                [
                  _c(
                    "div",
                    {
                      directives: [{ name: "animate", rawName: "v-animate" }],
                      staticClass:
                        "col-md-4 ml-xl-auto text-md-right appear-animate",
                      attrs: { "data-animation-name": "fadeInRightShorter" }
                    },
                    [
                      _c("h2", { staticClass: "mb-3 mb-md-0 text-white" }, [
                        _vm._v(
                          "\n                        Top Fashion\n                        "
                        ),
                        _c("br"),
                        _vm._v("Deals\n                    ")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      directives: [{ name: "animate", rawName: "v-animate" }],
                      staticClass:
                        "col-md-4 col-xl-3 pb-5 pb-md-0 appear-animate",
                      attrs: { "data-animation-name": "fadeUpShorter" }
                    },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "btn btn-dark btn-black ls-10",
                          attrs: { to: "/shop/horizontal-filter1" }
                        },
                        [_vm._v("View Sale")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      directives: [{ name: "animate", rawName: "v-animate" }],
                      staticClass:
                        "col-md-4 mr-xl-auto text-md-left appear-animate",
                      attrs: { "data-animation-name": "fadeInLeftShorter" }
                    },
                    [
                      _c(
                        "h4",
                        {
                          staticClass:
                            "mb-1 coupon-sale-text p-0 d-block ls-10 text-transform-none"
                        },
                        [_c("b", [_vm._v("Exclusive COUPON")])]
                      ),
                      _vm._v(" "),
                      _c(
                        "h5",
                        {
                          staticClass:
                            "coupon-sale-text text-white ls-10 p-0 mb-0"
                        },
                        [
                          _c("i", { staticClass: "ls-0" }, [_vm._v("UP TO")]),
                          _vm._v(" "),
                          _c("b", { staticClass: "text-white bg-secondary" }, [
                            _vm._v("$100")
                          ]),
                          _vm._v(" OFF\n                    ")
                        ]
                      )
                    ]
                  )
                ]
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c("section", { staticClass: "blog-section" }, [
        _c(
          "div",
          { staticClass: "container" },
          [
            _c(
              "h2",
              {
                directives: [{ name: "animate", rawName: "v-animate" }],
                staticClass:
                  "section-title heading-border border-0 mb-2 ls-0 appear-animate",
                attrs: { "data-animation-name": "fadeInUp" }
              },
              [_vm._v("\n                Latest News\n            ")]
            ),
            _vm._v(" "),
            _vm.posts.length > 0
              ? _c(
                  "owl-carousel-component",
                  {
                    directives: [{ name: "animate", rawName: "v-animate" }],
                    key: "home-blog",
                    staticClass: "appear-animate",
                    attrs: {
                      options: {
                        dots: false,
                        items: 1,
                        responsive: {
                          "480": {
                            items: 2
                          },
                          "576": {
                            items: 3
                          },
                          "992": {
                            items: 4
                          }
                        }
                      }
                    }
                  },
                  _vm._l(_vm.posts, function(post) {
                    return _c(
                      "div",
                      { key: post.id },
                      [
                        _c(
                          "keep-alive",
                          [
                            _c(
                              _vm.postComponent,
                              _vm._b(
                                { tag: "component" },
                                "component",
                                { post: post },
                                false
                              )
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  }),
                  0
                )
              : _c(
                  "owl-carousel-component",
                  {
                    directives: [{ name: "animate", rawName: "v-animate" }],
                    staticClass: "appear-animate",
                    attrs: {
                      options: {
                        dots: false,
                        items: 1,
                        responsive: {
                          "480": {
                            items: 2
                          },
                          "576": {
                            items: 3
                          },
                          "992": {
                            items: 4
                          }
                        }
                      }
                    }
                  },
                  _vm._l([1, 2, 3, 4], function(item) {
                    return _c("div", {
                      key: "media-skel-" + item,
                      staticClass: "product-loading-overlay"
                    })
                  }),
                  0
                ),
            _vm._v(" "),
            _c("hr", { staticClass: "mt-0 mb-4" }),
            _vm._v(" "),
            _c(
              "owl-carousel-component",
              {
                directives: [{ name: "animate", rawName: "v-animate" }],
                staticClass: "brands-slider images-center appear-animate",
                attrs: {
                  options: {
                    items: 2,
                    margin: 0,
                    dots: false,
                    responsive: {
                      576: {
                        items: 4
                      },
                      992: {
                        items: 5
                      },
                      1200: {
                        items: 6
                      }
                    }
                  }
                }
              },
              [
                _c("img", {
                  directives: [
                    {
                      name: "lazy",
                      rawName: "v-lazy",
                      value: _vm.$root.getUrl(
                        "client/images/brands/brand1.png"
                      ),
                      expression:
                        "$root.getUrl('client/images/brands/brand1.png')"
                    }
                  ],
                  attrs: { width: "140", height: "60", alt: "brand" }
                }),
                _vm._v(" "),
                _c("img", {
                  directives: [
                    {
                      name: "lazy",
                      rawName: "v-lazy",
                      value: _vm.$root.getUrl(
                        "client/images/brands/brand2.png"
                      ),
                      expression:
                        "$root.getUrl('client/images/brands/brand2.png')"
                    }
                  ],
                  attrs: { width: "140", height: "60", alt: "brand" }
                }),
                _vm._v(" "),
                _c("img", {
                  directives: [
                    {
                      name: "lazy",
                      rawName: "v-lazy",
                      value: _vm.$root.getUrl(
                        "client/images/brands/brand3.png"
                      ),
                      expression:
                        "$root.getUrl('client/images/brands/brand3.png')"
                    }
                  ],
                  attrs: { width: "140", height: "60", alt: "brand" }
                }),
                _vm._v(" "),
                _c("img", {
                  directives: [
                    {
                      name: "lazy",
                      rawName: "v-lazy",
                      value: _vm.$root.getUrl(
                        "client/images/brands/brand4.png"
                      ),
                      expression:
                        "$root.getUrl('client/images/brands/brand4.png')"
                    }
                  ],
                  attrs: { width: "140", height: "60", alt: "brand" }
                }),
                _vm._v(" "),
                _c("img", {
                  directives: [
                    {
                      name: "lazy",
                      rawName: "v-lazy",
                      value: _vm.$root.getUrl(
                        "client/images/brands/brand5.png"
                      ),
                      expression:
                        "$root.getUrl('client/images/brands/brand5.png')"
                    }
                  ],
                  attrs: { width: "140", height: "60", alt: "brand" }
                }),
                _vm._v(" "),
                _c("img", {
                  directives: [
                    {
                      name: "lazy",
                      rawName: "v-lazy",
                      value: _vm.$root.getUrl(
                        "client/images/brands/brand6.png"
                      ),
                      expression:
                        "$root.getUrl('client/images/brands/brand6.png')"
                    }
                  ],
                  attrs: { width: "140", height: "60", alt: "brand" }
                })
              ]
            ),
            _vm._v(" "),
            _c("hr", { staticClass: "mt-4 m-b-5" }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "product-widgets-container row pb-2 skeleton-body",
                class: { loaded: _vm.featuredProducts.length > 0 }
              },
              [
                _c(
                  "div",
                  {
                    directives: [{ name: "animate", rawName: "v-animate" }],
                    staticClass:
                      "col-lg-3 col-sm-6 pb-5 pb-md-0 appear-animate",
                    attrs: {
                      "data-animation-name": "fadeInRightShorter",
                      "data-animation-delay": "200"
                    }
                  },
                  [
                    _c("h4", { staticClass: "section-sub-title m-b-3" }, [
                      _vm._v(
                        "\n                        Featured Products\n                    "
                      )
                    ]),
                    _vm._v(" "),
                    _vm._l([1, 2, 3], function(item) {
                      return _c("div", {
                        key: "featured-skel-" + item,
                        staticClass: "skel-pro-list small-pro"
                      })
                    }),
                    _vm._v(" "),
                    _vm._l(_vm.featuredProducts.slice(0, 3), function(product) {
                      return _c("product-two-component", {
                        key: product.id,
                        attrs: { product: product }
                      })
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [{ name: "animate", rawName: "v-animate" }],
                    staticClass:
                      "col-lg-3 col-sm-6 pb-5 pb-md-0 appear-animate",
                    attrs: {
                      "data-animation-name": "fadeInRightShorter",
                      "data-animation-delay": "500"
                    }
                  },
                  [
                    _c("h4", { staticClass: "section-sub-title m-b-3" }, [
                      _vm._v(
                        "\n                        Best Selling Products\n                    "
                      )
                    ]),
                    _vm._v(" "),
                    _vm._l([1, 2, 3], function(item) {
                      return _c("div", {
                        key: "best-skel-" + item,
                        staticClass: "skel-pro-list small-pro"
                      })
                    }),
                    _vm._v(" "),
                    _vm._l(_vm.bestSellings.slice(0, 3), function(product) {
                      return _c("product-two-component", {
                        key: product.id,
                        attrs: { product: product }
                      })
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [{ name: "animate", rawName: "v-animate" }],
                    staticClass:
                      "col-lg-3 col-sm-6 pb-5 pb-md-0 appear-animate",
                    attrs: {
                      "data-animation-name": "fadeInRightShorter",
                      "data-animation-delay": "800"
                    }
                  },
                  [
                    _c("h4", { staticClass: "section-sub-title m-b-3" }, [
                      _vm._v("Latest Products")
                    ]),
                    _vm._v(" "),
                    _vm._l([1, 2, 3], function(item) {
                      return _c("div", {
                        key: "latest-skel-" + item,
                        staticClass: "skel-pro-list small-pro"
                      })
                    }),
                    _vm._v(" "),
                    _vm._l(_vm.newArrivals.slice(0, 3), function(product) {
                      return _c("product-two-component", {
                        key: product.id,
                        attrs: { product: product }
                      })
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [{ name: "animate", rawName: "v-animate" }],
                    staticClass:
                      "col-lg-3 col-sm-6 pb-5 pb-md-0 appear-animate",
                    attrs: {
                      "data-animation-name": "fadeInRightShorter",
                      "data-animation-delay": "1100"
                    }
                  },
                  [
                    _c("h4", { staticClass: "section-sub-title m-b-3" }, [
                      _vm._v(
                        "\n                        Top Rated Products\n                    "
                      )
                    ]),
                    _vm._v(" "),
                    _vm._l([1, 2, 3], function(item) {
                      return _c("div", {
                        key: "top-skel-" + item,
                        staticClass: "skel-pro-list small-pro"
                      })
                    }),
                    _vm._v(" "),
                    _vm._l(_vm.topRates.slice(0, 3), function(product) {
                      return _c("product-two-component", {
                        key: product.id,
                        attrs: { product: product }
                      })
                    })
                  ],
                  2
                )
              ]
            )
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-9 text-center text-md-left" }, [
      _c(
        "h2",
        { staticClass: "text-white text-uppercase ls-n-20 mb-md-0 px-4" },
        [
          _c("b", { staticClass: "d-inline-block mb-1 mb-md-0" }, [
            _vm._v("Big Sale")
          ]),
          _vm._v(
            "\n                            All new fashion brands items up to 70% off\n                            "
          ),
          _c("small", { staticClass: "text-transform-none align-middle" }, [
            _vm._v("Online Purchases Only")
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-4" }, [
          _c(
            "div",
            {
              staticClass:
                "feature-box px-sm-4 feature-box-simple text-center mb-0"
            },
            [
              _c("i", { staticClass: "icon-earphones-alt" }),
              _vm._v(" "),
              _c("div", { staticClass: "feature-box-content" }, [
                _c("h3", [_vm._v("Customer Support")]),
                _vm._v(" "),
                _c("h5", [_vm._v("You Won't Be Alone")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                                We really care about you and your website as\n                                much as you do. Purchasing Porto or any\n                                other theme from us you get 100% free\n                                support.\n                            "
                  )
                ])
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4" }, [
          _c(
            "div",
            {
              staticClass:
                "feature-box px-sm-4 feature-box-simple text-center mb-0"
            },
            [
              _c("i", { staticClass: "icon-credit-card" }),
              _vm._v(" "),
              _c("div", { staticClass: "feature-box-content" }, [
                _c("h3", [_vm._v("Fully Customizable")]),
                _vm._v(" "),
                _c("h5", [_vm._v("Tons Of Options")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                                With Porto you can customize the layout,\n                                colors and styles within only a few minutes.\n                                Start creating an amazing website right now!\n                            "
                  )
                ])
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4" }, [
          _c(
            "div",
            {
              staticClass:
                "feature-box px-sm-4 feature-box-simple text-center mb-0"
            },
            [
              _c("i", { staticClass: "icon-action-undo" }),
              _vm._v(" "),
              _c("div", { staticClass: "feature-box-content" }, [
                _c("h3", [_vm._v("Powerful Admin")]),
                _vm._v(" "),
                _c("h5", [_vm._v("Made To Help You")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                                Porto has very powerful admin features to\n                                help customer to build their own shop in\n                                minutes without any special skills in web\n                                development.\n                            "
                  )
                ])
              ])
            ]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/OwlCarouselComponent.vue?vue&type=template&id=6ee88ac0&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shared/OwlCarouselComponent.vue?vue&type=template&id=6ee88ac0& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "owl-carousel owl-theme", attrs: { id: _vm.id } },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/ParallaxComponent.vue?vue&type=template&id=3731b2ef&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shared/ParallaxComponent.vue?vue&type=template&id=3731b2ef& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    {
      directives: [
        {
          name: "lazy",
          rawName: "v-lazy:background-image",
          value: _vm.bgImage,
          expression: "bgImage",
          arg: "background-image"
        }
      ]
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/client/components/IndexComponent.vue":
/*!***********************************************************!*\
  !*** ./resources/js/client/components/IndexComponent.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IndexComponent_vue_vue_type_template_id_0f413884___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexComponent.vue?vue&type=template&id=0f413884& */ "./resources/js/client/components/IndexComponent.vue?vue&type=template&id=0f413884&");
/* harmony import */ var _IndexComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/components/IndexComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _IndexComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IndexComponent_vue_vue_type_template_id_0f413884___WEBPACK_IMPORTED_MODULE_0__["render"],
  _IndexComponent_vue_vue_type_template_id_0f413884___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/IndexComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/IndexComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/client/components/IndexComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./IndexComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/IndexComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/components/IndexComponent.vue?vue&type=template&id=0f413884&":
/*!******************************************************************************************!*\
  !*** ./resources/js/client/components/IndexComponent.vue?vue&type=template&id=0f413884& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_template_id_0f413884___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./IndexComponent.vue?vue&type=template&id=0f413884& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/IndexComponent.vue?vue&type=template&id=0f413884&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_template_id_0f413884___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_template_id_0f413884___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/client/components/shared/OwlCarouselComponent.vue":
/*!************************************************************************!*\
  !*** ./resources/js/client/components/shared/OwlCarouselComponent.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OwlCarouselComponent_vue_vue_type_template_id_6ee88ac0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OwlCarouselComponent.vue?vue&type=template&id=6ee88ac0& */ "./resources/js/client/components/shared/OwlCarouselComponent.vue?vue&type=template&id=6ee88ac0&");
/* harmony import */ var _OwlCarouselComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OwlCarouselComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/components/shared/OwlCarouselComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OwlCarouselComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OwlCarouselComponent_vue_vue_type_template_id_6ee88ac0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OwlCarouselComponent_vue_vue_type_template_id_6ee88ac0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/shared/OwlCarouselComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/shared/OwlCarouselComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/client/components/shared/OwlCarouselComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OwlCarouselComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OwlCarouselComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/OwlCarouselComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OwlCarouselComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/components/shared/OwlCarouselComponent.vue?vue&type=template&id=6ee88ac0&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/client/components/shared/OwlCarouselComponent.vue?vue&type=template&id=6ee88ac0& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OwlCarouselComponent_vue_vue_type_template_id_6ee88ac0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OwlCarouselComponent.vue?vue&type=template&id=6ee88ac0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/OwlCarouselComponent.vue?vue&type=template&id=6ee88ac0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OwlCarouselComponent_vue_vue_type_template_id_6ee88ac0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OwlCarouselComponent_vue_vue_type_template_id_6ee88ac0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/client/components/shared/ParallaxComponent.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/client/components/shared/ParallaxComponent.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ParallaxComponent_vue_vue_type_template_id_3731b2ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ParallaxComponent.vue?vue&type=template&id=3731b2ef& */ "./resources/js/client/components/shared/ParallaxComponent.vue?vue&type=template&id=3731b2ef&");
/* harmony import */ var _ParallaxComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParallaxComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/components/shared/ParallaxComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ParallaxComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ParallaxComponent_vue_vue_type_template_id_3731b2ef___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ParallaxComponent_vue_vue_type_template_id_3731b2ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/shared/ParallaxComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/shared/ParallaxComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/client/components/shared/ParallaxComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ParallaxComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ParallaxComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/ParallaxComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ParallaxComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/components/shared/ParallaxComponent.vue?vue&type=template&id=3731b2ef&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/client/components/shared/ParallaxComponent.vue?vue&type=template&id=3731b2ef& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ParallaxComponent_vue_vue_type_template_id_3731b2ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ParallaxComponent.vue?vue&type=template&id=3731b2ef& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/ParallaxComponent.vue?vue&type=template&id=3731b2ef&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ParallaxComponent_vue_vue_type_template_id_3731b2ef___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ParallaxComponent_vue_vue_type_template_id_3731b2ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/client/components/shared/posts lazy recursive ^\\.\\/.*\\.vue$":
/*!*****************************************************************************************!*\
  !*** ./resources/js/client/components/shared/posts lazy ^\.\/.*\.vue$ namespace object ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./PostOneComponent.vue": [
		"./resources/js/client/components/shared/posts/PostOneComponent.vue",
		31
	],
	"./PostThreeComponent.vue": [
		"./resources/js/client/components/shared/posts/PostThreeComponent.vue",
		32
	],
	"./PostTwoComponent.vue": [
		"./resources/js/client/components/shared/posts/PostTwoComponent.vue",
		8,
		33
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./resources/js/client/components/shared/posts lazy recursive ^\\.\\/.*\\.vue$";
module.exports = webpackAsyncContext;

/***/ })

}]);