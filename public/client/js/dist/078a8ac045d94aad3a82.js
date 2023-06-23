(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shop/ShopHorizontalFilterOneComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shop/ShopHorizontalFilterOneComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_sticky_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-sticky-directive */ "./node_modules/vue-sticky-directive/src/index.js");
/* harmony import */ var _shared_PaginationComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/PaginationComponent */ "./resources/js/client/components/shared/PaginationComponent.vue");
/* harmony import */ var _shared_ShopBannerComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/ShopBannerComponent */ "./resources/js/client/components/shop/shared/ShopBannerComponent.vue");
/* harmony import */ var _shared_ShopBreadcrumbComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/ShopBreadcrumbComponent */ "./resources/js/client/components/shop/shared/ShopBreadcrumbComponent.vue");
/* harmony import */ var _shared_ShopSidebarOneComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/ShopSidebarOneComponent */ "./resources/js/client/components/shop/shared/ShopSidebarOneComponent.vue");
/* harmony import */ var _shared_headers_shared_StickyHeaderComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/headers/shared/StickyHeaderComponent */ "./resources/js/client/components/shared/headers/shared/StickyHeaderComponent.vue");
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








function loadProduct(name) {
  return function () {
    return __webpack_require__("./resources/js/client/components/shared/products lazy recursive ^\\.\\/.*\\.vue$")("./".concat(name, ".vue")).then(function (m) {
      return m["default"] || m;
    });
  };
}

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    PaginationComponent: _shared_PaginationComponent__WEBPACK_IMPORTED_MODULE_2__["default"],
    ShopBannerComponent: _shared_ShopBannerComponent__WEBPACK_IMPORTED_MODULE_3__["default"],
    ShopBreadcrumbComponent: _shared_ShopBreadcrumbComponent__WEBPACK_IMPORTED_MODULE_4__["default"],
    ShopSidebarOneComponent: _shared_ShopSidebarOneComponent__WEBPACK_IMPORTED_MODULE_5__["default"],
    StickyHeaderComponent: _shared_headers_shared_StickyHeaderComponent__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  directives: {
    Sticky: vue_sticky_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      loaded: false,
      products: [],
      parentCategories: [],
      orderBy: "default",
      perPage: 8,
      totalCount: 10,
      shouldSticky: true
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("setting", ["getShopSettings"])), {}, {
    productComponent: function productComponent() {
      return this.getShopSettings.productType && loadProduct(this.getShopSettings.productType);
    },
    fakeArray: function fakeArray() {
      var temp = [];

      for (var i = 0; i < this.perPage; i++) {
        temp.push(i);
      }

      return temp;
    }
  }),
  watch: {
    $route: function $route() {
      this.getProducts();

      if (document.querySelector(".skeleton-body")) {
        window.scrollTo({
          top: document.querySelector(".skeleton-body").offsetTop - 58,
          behavior: "smooth"
        });
      }
    }
  },
  created: function created() {
    this.getProducts();
    this.stickyHandle();
    window.addEventListener("resize", this.stickyHandle, {
      passive: true
    });
  },
  destroyed: function destroyed() {
    window.removeEventListener("resize", this.stickyHandle);
  },
  methods: {
    getProducts: function getProducts() {
      var _this = this;

      this.loaded = false;
      window.axios.get("/web/shop/", {
        params: _objectSpread(_objectSpread({}, this.$route.query), {}, {
          orderBy: this.orderBy,
          per_page: this.perPage
        })
      }).then(function (response) {
        _this.products = response.data.products;
        _this.totalCount = response.data.totalCount;
        _this.parentCategories = response.data.parentCategories;
        _this.loaded = true;
      })["catch"](function (error) {});
    },
    toggleSidebar: function toggleSidebar() {
      document.querySelector("body").classList.toggle("sidebar-opened");
      document.querySelector(".filter-toggle").classList.toggle("opened");
    },
    stickyHandle: function stickyHandle() {
      if (window.innerWidth > 992) this.shouldSticky = true;else this.shouldSticky = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shop/ShopHorizontalFilterOneComponent.vue?vue&type=template&id=ae159182&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shop/ShopHorizontalFilterOneComponent.vue?vue&type=template&id=ae159182& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
      _c("shop-banner-component"),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "container skeleton-body skel-shop-products",
          class: { loaded: _vm.loaded }
        },
        [
          _c("shop-breadcrumb-component", {
            attrs: { categories: _vm.parentCategories }
          }),
          _vm._v(" "),
          _c(
            "sticky-header-component",
            {
              staticClass: "toolbox-wrapper",
              attrs: { wrapperClass: "toolbox-wrapper", top: 650 }
            },
            [
              _c(
                "nav",
                {
                  staticClass:
                    "toolbox toolbox-sticky sticky-header horizontal-filter mb-2 pb-0"
                },
                [
                  _c("div", { staticClass: "toolbox-left mr-auto" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "toolbox-item filter-toggle d-none d-lg-flex"
                      },
                      [
                        _c("span", { staticClass: "ls-n-20" }, [
                          _vm._v("Filters:")
                        ]),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.toggleSidebar.apply(null, arguments)
                              }
                            }
                          },
                          [_vm._v(" ")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass:
                          "canvas-sidebar-toggle d-lg-none bg-white mb-1",
                        attrs: { href: "javascript:;" },
                        on: { click: _vm.toggleSidebar }
                      },
                      [
                        _c("i", { staticClass: "fas fa-sliders-h" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "ml-2 pl-1" }, [
                          _vm._v("Filter")
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "toolbox-item toolbox-sort" }, [
                    _c("label", { staticClass: "d-none d-sm-block" }, [
                      _vm._v("Sort By:")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "select-custom" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.orderBy,
                              expression: "orderBy"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { name: "orderby" },
                          on: {
                            change: [
                              function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.orderBy = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              },
                              function($event) {
                                $event.preventDefault()
                                return _vm.getProducts.apply(null, arguments)
                              }
                            ]
                          }
                        },
                        [
                          _c("option", { attrs: { value: "default" } }, [
                            _vm._v("Default sorting")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "popularity" } }, [
                            _vm._v("Sort by popularity")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "rating" } }, [
                            _vm._v("Sort by average rating")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "date" } }, [
                            _vm._v("Sort by newness")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "price" } }, [
                            _vm._v("Sort by price: low to high")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "price-desc" } }, [
                            _vm._v("Sort by price: high to low")
                          ])
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "toolbox-item toolbox-show" }, [
                    _c("label", { staticClass: "d-none d-sm-block" }, [
                      _vm._v("Show:")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "select-custom" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.number",
                              value: _vm.perPage,
                              expression: "perPage",
                              modifiers: { number: true }
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { name: "count" },
                          on: {
                            change: [
                              function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return _vm._n(val)
                                  })
                                _vm.perPage = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              },
                              _vm.getProducts
                            ]
                          }
                        },
                        [
                          _c("option", { attrs: { value: "8" } }, [
                            _vm._v("8")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "12" } }, [
                            _vm._v("12")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "24" } }, [
                            _vm._v("24")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "36" } }, [
                            _vm._v("36")
                          ])
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "toolbox-item layout-modes d-none d-sm-block mr-lg-3"
                    },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "layout-btn btn-grid active",
                          attrs: { to: "/shop/default", title: "Grid" }
                        },
                        [_c("i", { staticClass: "fa fa-th" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "layout-btn btn-list",
                          attrs: { to: "/shop/list", title: "List" }
                        },
                        [_c("i", { staticClass: "fa fa-list-ul" })]
                      )
                    ],
                    1
                  )
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "row main-content-wrap" }, [
            _c(
              "div",
              { staticClass: "col-lg-9 main-content" },
              [
                _vm.products.length == 0 && _vm.loaded
                  ? _c(
                      "div",
                      { staticClass: "info-box with-icon py-3 px-1 skel-hide" },
                      [
                        _c("p", { staticClass: "porto-info" }, [
                          _vm._v("No product matching your selection.")
                        ])
                      ]
                    )
                  : [
                      !_vm.loaded
                        ? _c(
                            "div",
                            { staticClass: "row" },
                            _vm._l(_vm.fakeArray, function(item) {
                              return _c(
                                "div",
                                {
                                  key: item,
                                  staticClass:
                                    "col-6 col-sm-4 col-md-4 col-xl-3"
                                },
                                [
                                  _c("div", {
                                    staticClass: "skel-pro skel-pro-grid"
                                  })
                                ]
                              )
                            }),
                            0
                          )
                        : _c(
                            "div",
                            { staticClass: "row" },
                            _vm._l(_vm.products, function(product) {
                              return _c(
                                "div",
                                {
                                  key: product.id,
                                  staticClass:
                                    "col-6 col-sm-4 col-md-4 col-xl-3"
                                },
                                [
                                  _c(
                                    "transition",
                                    { attrs: { name: "fade", mode: "out-in" } },
                                    [
                                      _c(
                                        "keep-alive",
                                        [
                                          _c(
                                            _vm.productComponent,
                                            _vm._b(
                                              { tag: "component" },
                                              "component",
                                              { product: product },
                                              false
                                            )
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            }),
                            0
                          ),
                      _vm._v(" "),
                      _c(
                        "nav",
                        { staticClass: "toolbox toolbox-pagination" },
                        [
                          _c(
                            "div",
                            { staticClass: "toolbox-item toolbox-show" },
                            [
                              _c("label", [_vm._v("Show:")]),
                              _vm._v(" "),
                              _c("div", { staticClass: "select-custom" }, [
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model.number",
                                        value: _vm.perPage,
                                        expression: "perPage",
                                        modifiers: { number: true }
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { name: "count" },
                                    on: {
                                      change: [
                                        function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return _vm._n(val)
                                            })
                                          _vm.perPage = $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        },
                                        _vm.getProducts
                                      ]
                                    }
                                  },
                                  [
                                    _c("option", { attrs: { value: "8" } }, [
                                      _vm._v("8")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "12" } }, [
                                      _vm._v("12")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "24" } }, [
                                      _vm._v("24")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "36" } }, [
                                      _vm._v("36")
                                    ])
                                  ]
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c("pagination-component", {
                            attrs: {
                              "per-page": _vm.perPage,
                              total: _vm.totalCount
                            }
                          })
                        ],
                        1
                      )
                    ]
              ],
              2
            ),
            _vm._v(" "),
            _c("div", {
              staticClass: "sidebar-overlay",
              on: { click: _vm.toggleSidebar }
            }),
            _vm._v(" "),
            _c(
              "aside",
              {
                staticClass:
                  "sidebar-shop col-lg-3 order-lg-first mobile-sidebar",
                attrs: { "sticky-container": "" }
              },
              [
                _c("shop-sidebar-one-component", {
                  directives: [
                    {
                      name: "sticky",
                      rawName: "v-sticky",
                      value: _vm.shouldSticky,
                      expression: "shouldSticky"
                    }
                  ],
                  attrs: { "sticky-offset": "{ top: 69 }" }
                })
              ],
              1
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "mb-3" })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shop/shared/ShopBannerComponent.vue?vue&type=template&id=e82e77f2&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shop/shared/ShopBannerComponent.vue?vue&type=template&id=e82e77f2& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "category-banner-container bg-gray" }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "lazy",
            rawName: "v-lazy:background-image",
            value: _vm.$root.getUrl("client/images/banners/banner-top.jpg"),
            expression:
              "\n\t\t\t$root.getUrl('client/images/banners/banner-top.jpg')\n\t\t",
            arg: "background-image"
          }
        ],
        staticClass: "category-banner banner text-uppercase shop-banner"
      },
      [_vm._m(0)]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container position-relative" }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          {
            staticClass:
              "pl-lg-5 pb-5 pb-md-0 col-md-5 col-xl-4 col-lg-4 offset-1"
          },
          [
            _c("h3", [
              _vm._v("\n\t\t\t\t\t\tElectronic\n\t\t\t\t\t\t"),
              _c("br"),
              _vm._v("Deals\n\t\t\t\t\t")
            ]),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "btn btn-dark btn-black ls-10",
                attrs: { href: "#" }
              },
              [_vm._v("Get Yours!")]
            )
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4 offset-md-0 offset-1 pt-3" }, [
          _c("div", { staticClass: "coupon-sale-content" }, [
            _c(
              "h4",
              {
                staticClass:
                  "coupon-sale-text bg-white text-transform-none ls-n-10"
              },
              [_vm._v("\n\t\t\t\t\t\t\tExclusive COUPON\n\t\t\t\t\t\t")]
            ),
            _vm._v(" "),
            _c("h5", { staticClass: "mb-2 coupon-sale-text d-block p-0" }, [
              _c("i", { staticClass: "ls-0" }, [_vm._v("UP TO")]),
              _vm._v(" "),
              _c("b", { staticClass: "text-dark" }, [_vm._v("$100")]),
              _vm._v(" OFF\n\t\t\t\t\t\t")
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-sticky-directive/src/index.js":
/*!********************************************************!*\
  !*** ./node_modules/vue-sticky-directive/src/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sticky__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sticky */ "./node_modules/vue-sticky-directive/src/sticky.js");


const install = function(Vue) {
  Vue.directive('Sticky', _sticky__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

if (window.Vue) {
  Vue.use(install);
}

_sticky__WEBPACK_IMPORTED_MODULE_0__["default"].install = install;

/* harmony default export */ __webpack_exports__["default"] = (_sticky__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/vue-sticky-directive/src/sticky.js":
/*!*********************************************************!*\
  !*** ./node_modules/vue-sticky-directive/src/sticky.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const namespace = '@@vue-sticky-directive';
const events = [
  'resize',
  'scroll',
  'touchstart',
  'touchmove',
  'touchend',
  'pageshow',
  'load',
];

const batchStyle = (el, style = {}, className = {}) => {
  for (let k in style) {
    el.style[k] = style[k];
  }
  for (let k in className) {
    if (className[k] && !el.classList.contains(k)) {
      el.classList.add(k);
    } else if (!className[k] && el.classList.contains(k)) {
      el.classList.remove(k);
    }
  }
};

class Sticky {
  constructor(el, vm) {
    this.el = el;
    this.vm = vm;
    this.unsubscribers = [];
    this.isPending = false;
    this.state = {
      isTopSticky: null,
      isBottomSticky: null,
      height: null,
      width: null,
      xOffset: null,
    };

    this.lastState = {
      top: null,
      bottom: null,
      sticked: false,
    };

    const offset = this.getAttribute('sticky-offset') || {};
    const side = this.getAttribute('sticky-side') || 'top';
    const zIndex = this.getAttribute('sticky-z-index') || '10';
    const onStick = this.getAttribute('on-stick') || null;

    this.options = {
      topOffset: Number(offset.top) || 0,
      bottomOffset: Number(offset.bottom) || 0,
      shouldTopSticky: side === 'top' || side === 'both',
      shouldBottomSticky: side === 'bottom' || side === 'both',
      zIndex: zIndex,
      onStick: onStick,
    };
  }

  doBind() {
    if (this.unsubscribers.length > 0) {
      return;
    }
    const { el, vm } = this;
    vm.$nextTick(() => {
      this.placeholderEl = document.createElement('div');
      this.containerEl = this.getContainerEl();
      el.parentNode.insertBefore(this.placeholderEl, el);
      events.forEach(event => {
        const fn = this.update.bind(this);
        this.unsubscribers.push(() => window.removeEventListener(event, fn));
        this.unsubscribers.push(() =>
          this.containerEl.removeEventListener(event, fn),
        );
        window.addEventListener(event, fn, { passive: true });
        this.containerEl.addEventListener(event, fn, { passive: true });
      });
    });
  }

  doUnbind() {
    this.unsubscribers.forEach(fn => fn());
    this.unsubscribers = [];
    this.resetElement();
  }

  update() {
    if (!this.isPending) {
      requestAnimationFrame(() => {
        this.isPending = false;
        this.recomputeState();
        this.updateElements();
      });
      this.isPending = true;
    }
  }

  isTopSticky() {
    if (!this.options.shouldTopSticky) return false;
    const fromTop = this.state.placeholderElRect.top;
    const fromBottom = this.state.containerElRect.bottom;

    const topBreakpoint = this.options.topOffset;
    const bottomBreakpoint = this.options.bottomOffset;

    return fromTop <= topBreakpoint && fromBottom >= bottomBreakpoint;
  }

  isBottomSticky() {
    if (!this.options.shouldBottomSticky) return false;
    const fromBottom =
      window.innerHeight - this.state.placeholderElRect.top - this.state.height;
    const fromTop = window.innerHeight - this.state.containerElRect.top;

    const topBreakpoint = this.options.topOffset;
    const bottomBreakpoint = this.options.bottomOffset;

    return fromBottom <= bottomBreakpoint && fromTop >= topBreakpoint;
  }

  recomputeState() {
    this.state = Object.assign({}, this.state, {
      height: this.getHeight(),
      width: this.getWidth(),
      xOffset: this.getXOffset(),
      placeholderElRect: this.getPlaceholderElRect(),
      containerElRect: this.getContainerElRect(),
    });
    this.state.isTopSticky = this.isTopSticky();
    this.state.isBottomSticky = this.isBottomSticky();
  }

  fireEvents() {
    if (
      typeof this.options.onStick === 'function' &&
      (this.lastState.top !== this.state.isTopSticky ||
        this.lastState.bottom !== this.state.isBottomSticky ||
        this.lastState.sticked !==
          (this.state.isTopSticky || this.state.isBottomSticky))
    ) {
      this.lastState = {
        top: this.state.isTopSticky,
        bottom: this.state.isBottomSticky,
        sticked: this.state.isBottomSticky || this.state.isTopSticky,
      };
      this.options.onStick(this.lastState);
    }
  }

  updateElements() {
    const placeholderStyle = { paddingTop: 0 };
    const elStyle = {
      position: 'static',
      top: 'auto',
      bottom: 'auto',
      left: 'auto',
      width: 'auto',
      zIndex: this.options.zIndex,
    };
    const placeholderClassName = { 'vue-sticky-placeholder': true };
    const elClassName = {
      'vue-sticky-el': true,
      'top-sticky': false,
      'bottom-sticky': false,
    };

    if (this.state.isTopSticky) {
      elStyle.position = 'fixed';
      elStyle.top = this.options.topOffset + 'px';
      elStyle.left = this.state.xOffset + 'px';
      elStyle.width = this.state.width + 'px';
      const bottomLimit =
        this.state.containerElRect.bottom -
        this.state.height -
        this.options.bottomOffset -
        this.options.topOffset;
      if (bottomLimit < 0) {
        elStyle.top = bottomLimit + this.options.topOffset + 'px';
      }
      placeholderStyle.paddingTop = this.state.height + 'px';
      elClassName['top-sticky'] = true;
    } else if (this.state.isBottomSticky) {
      elStyle.position = 'fixed';
      elStyle.bottom = this.options.bottomOffset + 'px';
      elStyle.left = this.state.xOffset + 'px';
      elStyle.width = this.state.width + 'px';
      const topLimit =
        window.innerHeight -
        this.state.containerElRect.top -
        this.state.height -
        this.options.bottomOffset -
        this.options.topOffset;
      if (topLimit < 0) {
        elStyle.bottom = topLimit + this.options.bottomOffset + 'px';
      }
      placeholderStyle.paddingTop = this.state.height + 'px';
      elClassName['bottom-sticky'] = true;
    } else {
      placeholderStyle.paddingTop = 0;
    }

    batchStyle(this.el, elStyle, elClassName);
    batchStyle(this.placeholderEl, placeholderStyle, placeholderClassName);

    this.fireEvents();
  }

  resetElement() {
    ['position', 'top', 'bottom', 'left', 'width', 'zIndex'].forEach(attr => {
      this.el.style.removeProperty(attr);
    });
    this.el.classList.remove('bottom-sticky', 'top-sticky');
    const { parentNode } = this.placeholderEl;
    if (parentNode) {
      parentNode.removeChild(this.placeholderEl);
    }
  }

  getContainerEl() {
    let node = this.el.parentNode;
    while (
      node &&
      node.tagName !== 'HTML' &&
      node.tagName !== 'BODY' &&
      node.nodeType === 1
    ) {
      if (node.hasAttribute('sticky-container')) {
        return node;
      }
      node = node.parentNode;
    }
    return this.el.parentNode;
  }

  getXOffset() {
    return this.placeholderEl.getBoundingClientRect().left;
  }

  getWidth() {
    return this.placeholderEl.getBoundingClientRect().width;
  }

  getHeight() {
    return this.el.getBoundingClientRect().height;
  }

  getPlaceholderElRect() {
    return this.placeholderEl.getBoundingClientRect();
  }

  getContainerElRect() {
    return this.containerEl.getBoundingClientRect();
  }

  getAttribute(name) {
    const expr = this.el.getAttribute(name);
    let result = undefined;
    if (expr) {
      if (this.vm[expr]) {
        result = this.vm[expr];
      } else {
        try {
          result = eval(`(${expr})`);
        } catch (error) {
          result = expr;
        }
      }
    }
    return result;
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  inserted(el, bind, vnode) {
    if (typeof bind.value === 'undefined' || bind.value) {
      el[namespace] = new Sticky(el, vnode.context);
      el[namespace].doBind();
    }
  },
  unbind(el, bind, vnode) {
    if (el[namespace]) {
      el[namespace].doUnbind();
      el[namespace] = undefined;
    }
  },
  componentUpdated(el, bind, vnode) {
    if (typeof bind.value === 'undefined' || bind.value) {
      if (!el[namespace]) {
        el[namespace] = new Sticky(el, vnode.context);
      }
      el[namespace].doBind();
    } else {
      if (el[namespace]) {
        el[namespace].doUnbind();
      }
    }
  },
});


/***/ }),

/***/ "./resources/js/client/components/shop/ShopHorizontalFilterOneComponent.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/client/components/shop/ShopHorizontalFilterOneComponent.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShopHorizontalFilterOneComponent_vue_vue_type_template_id_ae159182___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShopHorizontalFilterOneComponent.vue?vue&type=template&id=ae159182& */ "./resources/js/client/components/shop/ShopHorizontalFilterOneComponent.vue?vue&type=template&id=ae159182&");
/* harmony import */ var _ShopHorizontalFilterOneComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShopHorizontalFilterOneComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/components/shop/ShopHorizontalFilterOneComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShopHorizontalFilterOneComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShopHorizontalFilterOneComponent_vue_vue_type_template_id_ae159182___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShopHorizontalFilterOneComponent_vue_vue_type_template_id_ae159182___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/shop/ShopHorizontalFilterOneComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/shop/ShopHorizontalFilterOneComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/client/components/shop/ShopHorizontalFilterOneComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopHorizontalFilterOneComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopHorizontalFilterOneComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shop/ShopHorizontalFilterOneComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopHorizontalFilterOneComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/components/shop/ShopHorizontalFilterOneComponent.vue?vue&type=template&id=ae159182&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/client/components/shop/ShopHorizontalFilterOneComponent.vue?vue&type=template&id=ae159182& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopHorizontalFilterOneComponent_vue_vue_type_template_id_ae159182___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopHorizontalFilterOneComponent.vue?vue&type=template&id=ae159182& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shop/ShopHorizontalFilterOneComponent.vue?vue&type=template&id=ae159182&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopHorizontalFilterOneComponent_vue_vue_type_template_id_ae159182___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopHorizontalFilterOneComponent_vue_vue_type_template_id_ae159182___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/client/components/shop/shared/ShopBannerComponent.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/client/components/shop/shared/ShopBannerComponent.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShopBannerComponent_vue_vue_type_template_id_e82e77f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShopBannerComponent.vue?vue&type=template&id=e82e77f2& */ "./resources/js/client/components/shop/shared/ShopBannerComponent.vue?vue&type=template&id=e82e77f2&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _ShopBannerComponent_vue_vue_type_template_id_e82e77f2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShopBannerComponent_vue_vue_type_template_id_e82e77f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/shop/shared/ShopBannerComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/shop/shared/ShopBannerComponent.vue?vue&type=template&id=e82e77f2&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/client/components/shop/shared/ShopBannerComponent.vue?vue&type=template&id=e82e77f2& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopBannerComponent_vue_vue_type_template_id_e82e77f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopBannerComponent.vue?vue&type=template&id=e82e77f2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shop/shared/ShopBannerComponent.vue?vue&type=template&id=e82e77f2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopBannerComponent_vue_vue_type_template_id_e82e77f2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopBannerComponent_vue_vue_type_template_id_e82e77f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);