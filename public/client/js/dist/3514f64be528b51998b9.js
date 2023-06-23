(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[70],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/WishlistComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/pages/WishlistComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _store_modules_wishlist_mutation_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/modules/wishlist/mutation-types */ "./resources/js/client/store/modules/wishlist/mutation-types.js");
/* harmony import */ var _store_modules_cart_mutation_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/modules/cart/mutation-types */ "./resources/js/client/store/modules/cart/mutation-types.js");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("wishlist", ["wishlist"])),
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])("wishlist", {
    removeWishlist: _store_modules_wishlist_mutation_types__WEBPACK_IMPORTED_MODULE_1__["REMOVE_FROM_WISHLIST"]
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("cart", ["addToCart"])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("wishlist", ["removeFromWishlist"])), {}, {
    moveToCart: function moveToCart(product) {
      this.removeWishlist({
        product: product
      });
      this.addToCart({
        product: product,
        qty: 1
      });
    },
    stockStatus: function stockStatus(product) {
      if (product.enable_stock && product.stock_quantity <= 0 || product.enable_stock === 0 && product.stock_status === "out-of-stock") return "Out Of Stock";
      return "In Stock";
    },
    getPageUrl: function getPageUrl(product) {
      if (!product.parent_id || product.id == product.parent_id) {
        return {
          path: "/product/default/" + product.slug
        };
      } else {
        return {
          path: "/product/default/" + product.slug,
          query: {
            termId: product.excerpts.reduce(function (acc, cur) {
              return [].concat(_toConsumableArray(acc), [cur.termId]);
            }, [])
          }
        };
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/WishlistComponent.vue?vue&type=template&id=d61ef96c&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/pages/WishlistComponent.vue?vue&type=template&id=d61ef96c& ***!
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
  return _c("main", { staticClass: "main" }, [
    _c("div", { staticClass: "page-header" }, [
      _c(
        "div",
        { staticClass: "container d-flex flex-column align-items-center" },
        [
          _c(
            "nav",
            {
              staticClass: "breadcrumb-nav",
              attrs: { "aria-label": "breadcrumb" }
            },
            [
              _c("div", { staticClass: "container" }, [
                _c("ol", { staticClass: "breadcrumb" }, [
                  _c(
                    "li",
                    { staticClass: "breadcrumb-item" },
                    [
                      _c("router-link", { attrs: { to: "/" } }, [
                        _vm._v("Home")
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
                    [_vm._v("Wishlist")]
                  )
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c("h1", [_vm._v("Wishlist")])
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "container" }, [
      _vm._m(0),
      _vm._v(" "),
      _vm.wishlist.length > 0
        ? _c(
            "div",
            { key: "not-empty", staticClass: "wishlist-table-container" },
            [
              _c("table", { staticClass: "table table-wishlist mb-0" }, [
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.wishlist, function(product) {
                    return _c(
                      "tr",
                      { key: product.id, staticClass: "product-row" },
                      [
                        _c("td", [
                          _c(
                            "figure",
                            { staticClass: "product-image-container" },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "product-image",
                                  attrs: { to: _vm.getPageUrl(product) }
                                },
                                [
                                  product.media.length > 0
                                    ? _c("img", {
                                        directives: [
                                          {
                                            name: "lazy",
                                            rawName: "v-lazy",
                                            value: _vm.$root.getUrl(
                                              product.media[0].copy_link,
                                              true,
                                              100
                                            ),
                                            expression:
                                              "\n\t\t\t\t\t\t\t\t\t\t\t\t$root.getUrl(\n\t\t\t\t\t\t\t\t\t\t\t\t\tproduct.media[0].copy_link,\n\t\t\t\t\t\t\t\t\t\t\t\t\ttrue,\n\t\t\t\t\t\t\t\t\t\t\t\t\t100\n\t\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t\t"
                                          }
                                        ],
                                        key: "product-image",
                                        attrs: {
                                          alt: product.media[0].alt_text
                                            ? product.media[0].alt_text
                                            : "product",
                                          width: "80",
                                          height: "80"
                                        }
                                      })
                                    : _c("img", {
                                        directives: [
                                          {
                                            name: "lazy",
                                            rawName: "v-lazy",
                                            value: _vm.$root.getUrl(
                                              "server/images/placeholder-img-100x100.png"
                                            ),
                                            expression:
                                              "\n\t\t\t\t\t\t\t\t\t\t\t\t$root.getUrl(\n\t\t\t\t\t\t\t\t\t\t\t\t\t'server/images/placeholder-img-100x100.png'\n\t\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t\t"
                                          }
                                        ],
                                        key: "placeholder",
                                        attrs: {
                                          alt: "product",
                                          width: "80",
                                          height: "80"
                                        }
                                      })
                                ]
                              ),
                              _vm._v(" "),
                              _c("a", {
                                staticClass: "btn-remove icon-cancel",
                                attrs: { href: "#", title: "Remove Product" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.removeFromWishlist({
                                      product: product
                                    })
                                  }
                                }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "h5",
                            { staticClass: "product-title" },
                            [
                              _c(
                                "router-link",
                                { attrs: { to: _vm.getPageUrl(product) } },
                                [
                                  _vm._v(
                                    "\n                                        " +
                                      _vm._s(product.name) +
                                      "\n                                    "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        product.type == "simple"
                          ? _c("td", { staticClass: "price-box" }, [
                              product.min_max_price[0] !=
                              product.min_max_price[1]
                                ? _c("del", { staticClass: "old-price" }, [
                                    _vm._v(
                                      "$" + _vm._s(product.min_max_price[0])
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("span", { staticClass: "product-price" }, [
                                _vm._v("$" + _vm._s(product.min_max_price[1]))
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        product.type == "variable"
                          ? _c("td", { staticClass: "price-box" }, [
                              _c("span", { staticClass: "product-price" }, [
                                _vm._v("$" + _vm._s(product.min_max_price[0]))
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "product-price" }, [
                                _vm._v("- $" + _vm._s(product.min_max_price[1]))
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("td", [
                          _c("span", { staticClass: "stock-status" }, [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(_vm.stockStatus(product)) +
                                "\n                                "
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "action" },
                          [
                            product.type == "simple"
                              ? _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-add-cart btn-shop",
                                    on: {
                                      click: function($event) {
                                        return _vm.moveToCart(product)
                                      }
                                    }
                                  },
                                  [_vm._v("ADD TO CART")]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            product.type == "variable"
                              ? _c(
                                  "router-link",
                                  {
                                    staticClass: "btn btn-shop",
                                    attrs: {
                                      to: "/product/default/" + product.slug
                                    }
                                  },
                                  [_vm._v("Select Options")]
                                )
                              : _vm._e()
                          ],
                          1
                        )
                      ]
                    )
                  }),
                  0
                )
              ])
            ]
          )
        : _c(
            "div",
            {
              key: "empty",
              staticClass: "wishlist-table-container border-0 shadow-none"
            },
            [
              _c(
                "div",
                { staticClass: "text-center" },
                [
                  _c("i", {
                    staticClass: "far fa-heart wishlist-empty d-block"
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "d-block mt-2" }, [
                    _vm._v("No products added to wishlist")
                  ]),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-dark mt-2",
                      attrs: { to: "/shop/default" }
                    },
                    [_vm._v("Go Shop")]
                  )
                ],
                1
              )
            ]
          )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "wishlist-title" }, [
      _c("h2", { staticClass: "p-2" }, [_vm._v("My wishlist on Porto Shop")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "thumbnail-col" }),
        _vm._v(" "),
        _c("th", { staticClass: "product-col" }, [_vm._v("Product")]),
        _vm._v(" "),
        _c("th", { staticClass: "price-col" }, [_vm._v("Price")]),
        _vm._v(" "),
        _c("th", { staticClass: "status-col" }, [_vm._v("Stock Status")]),
        _vm._v(" "),
        _c("th", { staticClass: "action-col" }, [_vm._v("Actions")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/client/components/pages/WishlistComponent.vue":
/*!********************************************************************!*\
  !*** ./resources/js/client/components/pages/WishlistComponent.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WishlistComponent_vue_vue_type_template_id_d61ef96c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WishlistComponent.vue?vue&type=template&id=d61ef96c& */ "./resources/js/client/components/pages/WishlistComponent.vue?vue&type=template&id=d61ef96c&");
/* harmony import */ var _WishlistComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WishlistComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/components/pages/WishlistComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WishlistComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WishlistComponent_vue_vue_type_template_id_d61ef96c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WishlistComponent_vue_vue_type_template_id_d61ef96c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/pages/WishlistComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/pages/WishlistComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/client/components/pages/WishlistComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WishlistComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./WishlistComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/WishlistComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WishlistComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/components/pages/WishlistComponent.vue?vue&type=template&id=d61ef96c&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/client/components/pages/WishlistComponent.vue?vue&type=template&id=d61ef96c& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WishlistComponent_vue_vue_type_template_id_d61ef96c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./WishlistComponent.vue?vue&type=template&id=d61ef96c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/WishlistComponent.vue?vue&type=template&id=d61ef96c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WishlistComponent_vue_vue_type_template_id_d61ef96c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WishlistComponent_vue_vue_type_template_id_d61ef96c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);