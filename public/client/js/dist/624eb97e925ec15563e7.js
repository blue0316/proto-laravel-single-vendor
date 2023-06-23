(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/AboutUsComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/pages/AboutUsComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_CountToComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/CountToComponent */ "./resources/js/client/components/shared/CountToComponent.vue");
/* harmony import */ var _shared_OwlCarouselComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/OwlCarouselComponent */ "./resources/js/client/components/shared/OwlCarouselComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    CountToComponent: _shared_CountToComponent__WEBPACK_IMPORTED_MODULE_0__["default"],
    OwlCarouselComponent: _shared_OwlCarouselComponent__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/CountToComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shared/CountToComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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
    from: {
      type: Number,
      "default": 0
    },
    to: {
      type: Number,
      "default": 0
    },
    speed: {
      type: Number,
      "default": 2000
    },
    interval: {
      type: Number,
      "default": 50
    }
  },
  data: function data() {
    return {
      started: false,
      current: 0,
      intervalID: 0,
      finished: false
    };
  },
  computed: {
    step: function step() {
      return (this.to - this.from) * this.interval / this.speed;
    }
  },
  mounted: function mounted() {
    this.current = this.from;
    window.addEventListener("scroll", this.scrollHandler, {
      passive: true
    });
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener("scroll", this.scrollHandler);
  },
  methods: {
    scrollHandler: function scrollHandler() {
      var offset = 100;
      var offsetTop = this.$el.getBoundingClientRect().top;

      if (offsetTop < window.innerHeight - offset && !this.started) {
        this.started = true;
        this.intervalID = window.setInterval(this.startCount, this.interval);
      }
    },
    startCount: function startCount() {
      if (this.current + this.step <= this.to) {
        this.current += this.step;
      } else {
        window.clearInterval(this.intervalID);
        this.finished = true;
      }
    }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/AboutUsComponent.vue?vue&type=template&id=a583b6e0&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/pages/AboutUsComponent.vue?vue&type=template&id=a583b6e0& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c("main", { staticClass: "main" }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "lazy",
            rawName: "v-lazy:background-image",
            value: _vm.$root.getUrl("client/images/page-header-bg.jpg"),
            expression:
              "\n\t\t\t$root.getUrl('client/images/page-header-bg.jpg')\n\t\t",
            arg: "background-image"
          }
        ],
        staticClass: "page-header page-header-bg text-left",
        staticStyle: { background: "70% / cover #d4e1ea" }
      },
      [
        _c(
          "div",
          { staticClass: "container" },
          [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "btn btn-dark btn-sm",
                attrs: { to: "contact-us" }
              },
              [_vm._v("Contact")]
            )
          ],
          1
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "nav",
      { staticClass: "breadcrumb-nav", attrs: { "aria-label": "breadcrumb" } },
      [
        _c("div", { staticClass: "container" }, [
          _c("ol", { staticClass: "breadcrumb" }, [
            _c(
              "li",
              { staticClass: "breadcrumb-item" },
              [
                _c("router-link", { attrs: { to: "/" } }, [
                  _c("i", { staticClass: "icon-home" })
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              {
                staticClass: "breadcrumb-item active",
                attrs: { "aria-current": "page" }
              },
              [_vm._v("\n\t\t\t\t\tAbout Us\n\t\t\t\t")]
            )
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _vm._m(2),
    _vm._v(" "),
    _c("div", { staticClass: "testimonials-section" }, [
      _c(
        "div",
        { staticClass: "container" },
        [
          _c("h2", { staticClass: "subtitle text-center" }, [
            _vm._v("HAPPY CLIENTS")
          ]),
          _vm._v(" "),
          _c(
            "owl-carousel-component",
            {
              attrs: {
                options: {
                  items: 1,
                  dots: false,
                  nav: false,
                  responsive: {
                    "0": {
                      items: 1
                    },
                    "992": {
                      items: 2
                    }
                  }
                }
              }
            },
            [
              _c("div", { staticClass: "testimonial" }, [
                _c("div", { staticClass: "testimonial-owner" }, [
                  _c("figure", [
                    _c("img", {
                      attrs: {
                        src: _vm.$root.getUrl(
                          "client/images/clients/client1.png"
                        ),
                        width: "60",
                        height: "60",
                        alt: "client"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _c("h4", { staticClass: "testimonial-title" }, [
                      _vm._v("john Smith")
                    ]),
                    _vm._v(" "),
                    _c("span", [_vm._v("Proto Co Ceo")])
                  ])
                ]),
                _vm._v(" "),
                _c("blockquote", [
                  _c("p", [
                    _vm._v(
                      "\n\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur elitad\n\t\t\t\t\t\t\tadipiscing Cras non placerat mipsum dolor sit\n\t\t\t\t\t\t\tamet, consectetur elitad adipiscing.\n\t\t\t\t\t\t"
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "testimonial" }, [
                _c("div", { staticClass: "testimonial-owner" }, [
                  _c("figure", [
                    _c("img", {
                      attrs: {
                        src: _vm.$root.getUrl(
                          "client/images/clients/client2.png"
                        ),
                        alt: "client",
                        width: "60",
                        height: "60"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _c("h4", { staticClass: "testimonial-title" }, [
                      _vm._v("Bob Smith")
                    ]),
                    _vm._v(" "),
                    _c("span", [_vm._v("Proto Co Ceo")])
                  ])
                ]),
                _vm._v(" "),
                _c("blockquote", [
                  _c("p", [
                    _vm._v(
                      "\n\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur elitad\n\t\t\t\t\t\t\tadipiscing Cras non placerat mipsum dolor sit\n\t\t\t\t\t\t\tamet, consectetur elitad adipiscing.\n\t\t\t\t\t\t"
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "testimonial" }, [
                _c("div", { staticClass: "testimonial-owner" }, [
                  _c("figure", [
                    _c("img", {
                      attrs: {
                        src: _vm.$root.getUrl(
                          "client/images/clients/client1.png"
                        ),
                        alt: "client",
                        width: "60",
                        height: "60"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _c("h4", { staticClass: "testimonial-title" }, [
                      _vm._v("john Smith")
                    ]),
                    _vm._v(" "),
                    _c("span", [_vm._v("Proto Co Ceo")])
                  ])
                ]),
                _vm._v(" "),
                _c("blockquote", [
                  _c("p", [
                    _vm._v(
                      "\n\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur elitad\n\t\t\t\t\t\t\tadipiscing Cras non placerat mipsum dolor sit\n\t\t\t\t\t\t\tamet, consectetur elitad adipiscing.\n\t\t\t\t\t\t"
                    )
                  ])
                ])
              ])
            ]
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "counters-section bg-gray" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-6 col-md-4 count-container" },
            [
              _c(
                "count-to-component",
                { attrs: { from: 0, to: 200, speed: 2000, interval: 50 } },
                [_vm._v("+")]
              ),
              _vm._v(" "),
              _c("h4", { staticClass: "count-title" }, [
                _vm._v("MILLION CUSTOMERS")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-6 col-md-4 count-container" },
            [
              _c(
                "count-to-component",
                { attrs: { from: 0, to: 1800, speed: 2000, interval: 50 } },
                [_vm._v("+")]
              ),
              _vm._v(" "),
              _c("h4", { staticClass: "count-title" }, [_vm._v("TEAM MEMBERS")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-6 col-md-4 count-container" },
            [
              _c(
                "count-to-component",
                { attrs: { from: 0, to: 24, speed: 2000, interval: 50 } },
                [_c("span", [_vm._v("HR")])]
              ),
              _vm._v(" "),
              _c("h4", { staticClass: "count-title" }, [
                _vm._v("SUPPORT AVAILABLE")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-6 col-md-4 count-container" },
            [
              _c(
                "count-to-component",
                { attrs: { from: 0, to: 265, speed: 2000, interval: 50 } },
                [_vm._v("+")]
              ),
              _vm._v(" "),
              _c("h4", { staticClass: "count-title" }, [
                _vm._v("SUPPORT AVAILABLE")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-6 col-md-4 count-container" },
            [
              _c(
                "count-to-component",
                { attrs: { from: 0, to: 99, speed: 2000, interval: 50 } },
                [_c("span", [_vm._v("%")])]
              ),
              _vm._v(" "),
              _c("h4", { staticClass: "count-title" }, [
                _vm._v("SUPPORT AVAILABLE")
              ])
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h1", { staticClass: "ls-0" }, [
      _c("span", [_vm._v("ABOUT US")]),
      _vm._v(" OUR COMPANY")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "about-section" }, [
      _c("div", { staticClass: "container" }, [
        _c("h2", { staticClass: "subtitle" }, [_vm._v("OUR STORY")]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n\t\t\t\tLorem Ipsum is simply dummy text of the printing and\n\t\t\t\ttypesetting industry. Lorem Ipsum has been the industry's\n\t\t\t\tstandard dummy text ever since the 1500s, when an unknown\n\t\t\t\tprinter took a galley of type and scrambled it to make a\n\t\t\t\ttype specimen book. It has survived not only five centuries,\n\t\t\t\tbut also the leap into electronic typesetting, remaining\n\t\t\t\tessentially unchanged.\n\t\t\t"
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n\t\t\t\tLorem Ipsum is simply dummy text of the printing and\n\t\t\t\ttypesetting industry. Lorem Ipsum has been the industry's\n\t\t\t\tstandard dummy text ever since the 1500s, when an unknown\n\t\t\t\tprinter took a galley of type and scrambled it to make a\n\t\t\t\ttype specimen book.\n\t\t\t"
          )
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "lead mb-3" }, [
          _vm._v(
            "\n\t\t\t\t“ Many desktop publishing packages and web page editors now\n\t\t\t\tuse Lorem Ipsum as their default model search for evolved\n\t\t\t\tover sometimes by accident, sometimes on purpose ”\n\t\t\t"
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "features-section bg-gray" }, [
      _c("div", { staticClass: "container" }, [
        _c("h2", { staticClass: "subtitle" }, [_vm._v("WHY CHOOSE US")]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-4" }, [
            _c("div", { staticClass: "feature-box bg-white" }, [
              _c("i", { staticClass: "icon-shipped" }),
              _vm._v(" "),
              _c("div", { staticClass: "feature-box-content" }, [
                _c("h3", [_vm._v("Free Shipping")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n\t\t\t\t\t\t\t\tLorem Ipsum is simply dummy text of the\n\t\t\t\t\t\t\t\tprinting and typesetting industry. Lorem\n\t\t\t\t\t\t\t\tIpsum has been the industr in some form.\n\t\t\t\t\t\t\t"
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-4" }, [
            _c("div", { staticClass: "feature-box bg-white" }, [
              _c("i", { staticClass: "icon-us-dollar" }),
              _vm._v(" "),
              _c("div", { staticClass: "feature-box-content" }, [
                _c("h3", [_vm._v("100% Money Back Guarantee")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n\t\t\t\t\t\t\t\tThere are many variations of passages of\n\t\t\t\t\t\t\t\tLorem Ipsum available, but the majority have\n\t\t\t\t\t\t\t\tsuffered alteration in some form.\n\t\t\t\t\t\t\t"
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-4" }, [
            _c("div", { staticClass: "feature-box bg-white" }, [
              _c("i", { staticClass: "icon-online-support" }),
              _vm._v(" "),
              _c("div", { staticClass: "feature-box-content" }, [
                _c("h3", [_vm._v("Online Support 24/7")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n\t\t\t\t\t\t\t\tThere are many variations of passages of\n\t\t\t\t\t\t\t\tLorem Ipsum available, but the majority have\n\t\t\t\t\t\t\t\tsuffered alteration in some form.\n\t\t\t\t\t\t\t"
                  )
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/CountToComponent.vue?vue&type=template&id=3e44ecfa&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shared/CountToComponent.vue?vue&type=template&id=3e44ecfa& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "count-wrapper" },
    [
      _c("span", { staticClass: "count-to" }, [
        _vm._v(_vm._s(Math.ceil(_vm.current)))
      ]),
      _vm.finished ? _vm._t("default") : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
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

/***/ "./resources/js/client/components/pages/AboutUsComponent.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/client/components/pages/AboutUsComponent.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AboutUsComponent_vue_vue_type_template_id_a583b6e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AboutUsComponent.vue?vue&type=template&id=a583b6e0& */ "./resources/js/client/components/pages/AboutUsComponent.vue?vue&type=template&id=a583b6e0&");
/* harmony import */ var _AboutUsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AboutUsComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/components/pages/AboutUsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AboutUsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AboutUsComponent_vue_vue_type_template_id_a583b6e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AboutUsComponent_vue_vue_type_template_id_a583b6e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/pages/AboutUsComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/pages/AboutUsComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/client/components/pages/AboutUsComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AboutUsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/AboutUsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/components/pages/AboutUsComponent.vue?vue&type=template&id=a583b6e0&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/client/components/pages/AboutUsComponent.vue?vue&type=template&id=a583b6e0& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUsComponent_vue_vue_type_template_id_a583b6e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AboutUsComponent.vue?vue&type=template&id=a583b6e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/AboutUsComponent.vue?vue&type=template&id=a583b6e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUsComponent_vue_vue_type_template_id_a583b6e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUsComponent_vue_vue_type_template_id_a583b6e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/client/components/shared/CountToComponent.vue":
/*!********************************************************************!*\
  !*** ./resources/js/client/components/shared/CountToComponent.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CountToComponent_vue_vue_type_template_id_3e44ecfa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CountToComponent.vue?vue&type=template&id=3e44ecfa& */ "./resources/js/client/components/shared/CountToComponent.vue?vue&type=template&id=3e44ecfa&");
/* harmony import */ var _CountToComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CountToComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/components/shared/CountToComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CountToComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CountToComponent_vue_vue_type_template_id_3e44ecfa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CountToComponent_vue_vue_type_template_id_3e44ecfa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/shared/CountToComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/shared/CountToComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/client/components/shared/CountToComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CountToComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CountToComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/CountToComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CountToComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/components/shared/CountToComponent.vue?vue&type=template&id=3e44ecfa&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/client/components/shared/CountToComponent.vue?vue&type=template&id=3e44ecfa& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CountToComponent_vue_vue_type_template_id_3e44ecfa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CountToComponent.vue?vue&type=template&id=3e44ecfa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/CountToComponent.vue?vue&type=template&id=3e44ecfa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CountToComponent_vue_vue_type_template_id_3e44ecfa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CountToComponent_vue_vue_type_template_id_3e44ecfa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ })

}]);