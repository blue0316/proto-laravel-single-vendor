(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/products/ProductFourComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shared/products/ProductFourComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _modals_QuickViewModalComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modals/QuickViewModalComponent */ "./resources/js/client/components/shared/modals/QuickViewModalComponent.vue");
/* harmony import */ var _store_modules_cart_mutation_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/modules/cart/mutation-types */ "./resources/js/client/store/modules/cart/mutation-types.js");
/* harmony import */ var _store_modules_wishlist_mutation_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/modules/wishlist/mutation-types */ "./resources/js/client/store/modules/wishlist/mutation-types.js");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    product: {
      type: Object,
      "default": function _default() {
        return {
          type: "simple",
          sale_schedule: false,
          virtual: false,
          downloadable: false,
          tax_status: "taxable",
          tax_type_id: 1,
          allow_backorder: "no",
          stock_status: "in-stock",
          manage_stock: false,
          media: [],
          tags: [],
          files: []
        };
      }
    }
  },
  data: function data() {
    return {
      wishLoading: false,
      modalLoading: false
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("wishlist", ["isInWishlist"])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("cart", ["getCartById"])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("setting", ["getSetting", "getProductSettings", "priceSuffix", "formatPrice", "showNewBadge"])), {}, {
    media: function media() {
      return this.product.media.slice(0, 2);
    }
  }),
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])("cart", {
    addToCart: _store_modules_cart_mutation_types__WEBPACK_IMPORTED_MODULE_2__["ADD_TO_CART"]
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])("wishlist", {
    addToWishlist: _store_modules_wishlist_mutation_types__WEBPACK_IMPORTED_MODULE_3__["ADD_TO_WISHLIST"]
  })), {}, {
    getSaleRate: function getSaleRate(salePrice, Price) {
      return ((1 - salePrice / Price) * 100).toFixed();
    },
    addCart: function addCart() {
      var _this = this;

      if (this.getSetting("cart_popup_type") === 'CartModalOneComponent') {
        if (this.modalLoading == false) {
          this.modalLoading = true;
          setTimeout(function () {
            _this.addToCart({
              product: _this.product,
              qty: 1
            });

            _this.modalLoading = false;

            _this.$modal.show(function () {
              return __webpack_require__("./resources/js/client/components/shared/modals lazy recursive ^\\.\\/.*$")("./" + _this.getSetting("cart_popup_type"));
            }, {
              product: _this.product
            }, {
              width: "320",
              height: "auto",
              adaptive: true
            });
          }, 300);
        }
      } else {
        this.addToCart({
          product: this.product,
          qty: 1
        });
        this.$root.$notify({
          group: 'addCartSuccess',
          text: "has been added to your cart!",
          data: this.product
        });
      }
    },
    addWishlist: function addWishlist() {
      var _this2 = this;

      this.wishLoading = true;
      setTimeout(function () {
        _this2.wishLoading = false;

        _this2.addToWishlist({
          product: _this2.product
        });
      }, 1000);
    },
    quickView: function quickView() {
      var _this3 = this;

      window.axios.get("/web/products/quick/" + this.product.slug).then(function (response) {
        _this3.$modal.show(_modals_QuickViewModalComponent__WEBPACK_IMPORTED_MODULE_1__["default"], {
          product: response.data.product,
          variations: response.data.variations,
          attributes: response.data.attributes
        }, {
          width: "872",
          height: "auto",
          adaptive: true
        });
      })["catch"](function (error) {});
    }
  }),
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/products/ProductFourComponent.vue?vue&type=template&id=c56aa0c8&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shared/products/ProductFourComponent.vue?vue&type=template&id=c56aa0c8& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "product-default left-details product-list w-100" },
    [
      _c(
        "figure",
        [
          _c(
            "div",
            {
              staticClass: "d-loading-container",
              class: { "d-none": !_vm.modalLoading }
            },
            [_c("div", { staticClass: "d-loading small" })]
          ),
          _vm._v(" "),
          _vm.product.media.length > 0
            ? _c(
                "router-link",
                {
                  key: "media-0",
                  attrs: { to: "/product/default/" + _vm.product.slug }
                },
                _vm._l(_vm.media, function(medium, index) {
                  return _c("img", {
                    directives: [
                      {
                        name: "lazy",
                        rawName: "v-lazy",
                        value: _vm.$root.getUrl(medium.copy_link, true, 300),
                        expression: "$root.getUrl(medium.copy_link, true, 300)"
                      }
                    ],
                    key: index,
                    attrs: {
                      width: "300",
                      height: "300",
                      alt: medium.alt_text ? medium.alt_text : "product"
                    }
                  })
                }),
                0
              )
            : _c(
                "router-link",
                {
                  key: "media-1",
                  attrs: { to: "/product/default/" + _vm.product.slug }
                },
                [
                  _c("img", {
                    directives: [
                      {
                        name: "lazy",
                        rawName: "v-lazy",
                        value: _vm.$root.getUrl(
                          "server/images/placeholder-img-300x300.png"
                        ),
                        expression:
                          "\n                    $root.getUrl(\n                        'server/images/placeholder-img-300x300.png'\n                    )\n                "
                      }
                    ],
                    attrs: { width: "300", height: "300", alt: "product" }
                  })
                ]
              ),
          _vm._v(" "),
          _c("div", { staticClass: "label-group" }, [
            _vm.product.featured
              ? _c("div", { staticClass: "product-label label-hot" }, [
                  _vm._v("\n                HOT\n            ")
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.showNewBadge(_vm.product)
              ? _c("div", { staticClass: "product-label label-new" }, [
                  _vm._v("\n                NEW\n            ")
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.product.type == "simple" &&
            _vm.product.min_max_price[0] != _vm.product.min_max_price[1]
              ? _c("div", { staticClass: "product-label label-sale" }, [
                  _vm._v(
                    "\n                " +
                      _vm._s(
                        -_vm.getSaleRate(
                          _vm.product.min_max_price[0],
                          _vm.product.min_max_price[1]
                        )
                      ) +
                      "% Off\n            "
                  )
                ])
              : _vm._e()
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "product-details" }, [
        _vm.getProductSettings.showCategory
          ? _c(
              "div",
              { staticClass: "category-list" },
              _vm._l(_vm.product.categories, function(category, index) {
                return _c(
                  "span",
                  { key: category.id },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "product-category",
                        attrs: {
                          to: {
                            path: "/shop/default",
                            query: { category: category.slug }
                          }
                        }
                      },
                      [_vm._v(_vm._s(category.name))]
                    ),
                    _vm._v(
                      "\n                " +
                        _vm._s(
                          index < _vm.product.categories.length - 1 ? "," : ""
                        ) +
                        "\n            "
                    )
                  ],
                  1
                )
              }),
              0
            )
          : _vm._e(),
        _vm._v(" "),
        _c(
          "h3",
          { staticClass: "product-title" },
          [
            _c(
              "router-link",
              { attrs: { to: "/product/default/" + _vm.product.slug } },
              [_vm._v(_vm._s(_vm.product.name))]
            )
          ],
          1
        ),
        _vm._v(" "),
        _vm.getProductSettings.showRatings
          ? _c(
              "div",
              { staticClass: "ratings-container" },
              [
                _c("div", { staticClass: "product-ratings" }, [
                  _c("span", {
                    staticClass: "ratings",
                    style: "width:" + 20 * _vm.product.average_rating + "%"
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "tooltiptext tooltip-top" }, [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.product.average_rating.toFixed(2)) +
                        "\n                "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "rating-link",
                    attrs: { to: "/product/default/" + _vm.product.slug }
                  },
                  [
                    _vm._v(
                      "( " +
                        _vm._s(_vm.product.approved_reviews_count) +
                        " Reviews\n                )"
                    )
                  ]
                )
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _c("p", {
          staticClass: "product-description",
          domProps: { innerHTML: _vm._s(_vm.product.short_desc) }
        }),
        _vm._v(" "),
        _vm.product.type == "simple"
          ? _c("div", { staticClass: "price-box" }, [
              _vm.product.min_max_price[0] != _vm.product.min_max_price[1]
                ? _c("del", { staticClass: "old-price" }, [
                    _c("span", {
                      domProps: {
                        innerHTML: _vm._s(
                          _vm.formatPrice(_vm.product.min_max_price[1])
                        )
                      }
                    })
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("span", {
                staticClass: "product-price",
                domProps: {
                  innerHTML: _vm._s(
                    _vm.formatPrice(_vm.product.min_max_price[0]) +
                      _vm.priceSuffix
                  )
                }
              })
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.product.type == "variable"
          ? _c("div", { staticClass: "price-box" }, [
              _c("span", {
                staticClass: "product-price",
                domProps: {
                  innerHTML: _vm._s(
                    _vm.formatPrice(_vm.product.min_max_price[0])
                  )
                }
              }),
              _vm._v(" "),
              _vm.product.min_max_price[0] !== _vm.product.min_max_price[1]
                ? _c("span", { staticClass: "product-price" }, [
                    _vm._v("\n                –\n                "),
                    _c("span", {
                      domProps: {
                        innerHTML: _vm._s(
                          _vm.formatPrice(_vm.product.min_max_price[1]) +
                            _vm.priceSuffix
                        )
                      }
                    })
                  ])
                : _vm._e()
            ])
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "product-action" },
          [
            _vm.product.type == "simple"
              ? _c(
                  "button",
                  {
                    staticClass: "btn-icon btn-add-cart",
                    on: { click: _vm.addCart }
                  },
                  [_vm._v("\n                ADD TO CART\n            ")]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.product.type == "variable"
              ? _c(
                  "router-link",
                  {
                    staticClass: "btn btn-icon btn-add-cart",
                    attrs: { to: "/product/default/" + _vm.product.slug }
                  },
                  [
                    _c("i", { staticClass: "fa fa-arrow-right" }),
                    _vm._v("Select Options\n            ")
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.isInWishlist(_vm.product)
              ? _c(
                  "router-link",
                  {
                    key: "in-wishlist",
                    staticClass: "btn-icon-wish text-primary position-static",
                    attrs: { to: "/pages/wishlist" }
                  },
                  [_c("i", { staticClass: "icon-heart-1" })]
                )
              : _c(
                  "a",
                  {
                    key: "out-wishlist",
                    staticClass: "btn-icon-wish position-static",
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.addWishlist()
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "icon-heart" }),
                    _vm._v(" "),
                    _c("label", { staticClass: "sr-only" }, [
                      _vm._v("Wishlist")
                    ]),
                    _vm._v(" "),
                    _c("div", {
                      staticClass: "d-loading small",
                      class: { "d-none": !_vm.wishLoading }
                    })
                  ]
                ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "btn-quickview position-static",
                attrs: { href: "#", title: "Quick View" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.quickView.apply(null, arguments)
                  }
                }
              },
              [_c("i", { staticClass: "fas fa-external-link-alt" })]
            )
          ],
          1
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/client/components/shared/modals lazy recursive ^\\.\\/.*$":
/*!*************************************************************************************!*\
  !*** ./resources/js/client/components/shared/modals lazy ^\.\/.*$ namespace object ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./CartModalOneComponent": [
		"./resources/js/client/components/shared/modals/CartModalOneComponent.vue",
		17
	],
	"./CartModalOneComponent.vue": [
		"./resources/js/client/components/shared/modals/CartModalOneComponent.vue",
		17
	],
	"./CartModalTwoComponent": [
		"./resources/js/client/components/shared/modals/CartModalTwoComponent.vue"
	],
	"./CartModalTwoComponent.vue": [
		"./resources/js/client/components/shared/modals/CartModalTwoComponent.vue"
	],
	"./LoginModalComponent": [
		"./resources/js/client/components/shared/modals/LoginModalComponent.vue"
	],
	"./LoginModalComponent.vue": [
		"./resources/js/client/components/shared/modals/LoginModalComponent.vue"
	],
	"./NewsletterModalComponent": [
		"./resources/js/client/components/shared/modals/NewsletterModalComponent.vue",
		14
	],
	"./NewsletterModalComponent.vue": [
		"./resources/js/client/components/shared/modals/NewsletterModalComponent.vue",
		14
	],
	"./QuickViewModalComponent": [
		"./resources/js/client/components/shared/modals/QuickViewModalComponent.vue",
		2,
		9
	],
	"./QuickViewModalComponent.vue": [
		"./resources/js/client/components/shared/modals/QuickViewModalComponent.vue",
		2,
		9
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
webpackAsyncContext.id = "./resources/js/client/components/shared/modals lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./resources/js/client/components/shared/products/ProductFourComponent.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/client/components/shared/products/ProductFourComponent.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductFourComponent_vue_vue_type_template_id_c56aa0c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductFourComponent.vue?vue&type=template&id=c56aa0c8& */ "./resources/js/client/components/shared/products/ProductFourComponent.vue?vue&type=template&id=c56aa0c8&");
/* harmony import */ var _ProductFourComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductFourComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/components/shared/products/ProductFourComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductFourComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductFourComponent_vue_vue_type_template_id_c56aa0c8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductFourComponent_vue_vue_type_template_id_c56aa0c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/shared/products/ProductFourComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/shared/products/ProductFourComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/client/components/shared/products/ProductFourComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductFourComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductFourComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/products/ProductFourComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductFourComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/components/shared/products/ProductFourComponent.vue?vue&type=template&id=c56aa0c8&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/client/components/shared/products/ProductFourComponent.vue?vue&type=template&id=c56aa0c8& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductFourComponent_vue_vue_type_template_id_c56aa0c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductFourComponent.vue?vue&type=template&id=c56aa0c8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/products/ProductFourComponent.vue?vue&type=template&id=c56aa0c8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductFourComponent_vue_vue_type_template_id_c56aa0c8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductFourComponent_vue_vue_type_template_id_c56aa0c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);