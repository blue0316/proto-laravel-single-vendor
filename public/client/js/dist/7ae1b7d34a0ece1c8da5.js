(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/headers/shared/cart-menu/CartMenuTwoComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shared/headers/shared/cart-menu/CartMenuTwoComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _store_modules_cart_mutation_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../store/modules/cart/mutation-types */ "./resources/js/client/store/modules/cart/mutation-types.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("cart", ["cartList", "priceTotal", "qtyTotal"])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("setting", ["getHeaderSettings", "formatPrice", "priceSuffix"])),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("cart", ["removeFromCart"])), {}, {
    getPageUrl: function getPageUrl(product) {
      if (product.id == product.parent_id) {
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/headers/shared/cart-menu/CartMenuTwoComponent.vue?vue&type=template&id=7f158b3d&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shared/headers/shared/cart-menu/CartMenuTwoComponent.vue?vue&type=template&id=7f158b3d& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "dropdown cart-dropdown" }, [
    _c(
      "a",
      {
        staticClass: "dropdown-toggle dropdown-arrow",
        class: _vm.getHeaderSettings.cartIconStyle,
        attrs: {
          href: "#",
          role: "button",
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false",
          "data-display": "static"
        }
      },
      [
        _c("i", { staticClass: "minicart-icon" }),
        _vm._v(" "),
        _c("span", { staticClass: "cart-count badge-circle" }, [
          _vm._v(_vm._s(_vm.qtyTotal))
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "dropdown-menu" }, [
      _c(
        "div",
        { staticClass: "dropdownmenu-wrapper px-0" },
        [
          _c(
            "div",
            { staticClass: "dropdown-cart-header" },
            [
              _c("span", [_vm._v(_vm._s(_vm.qtyTotal) + " Items")]),
              _vm._v(" "),
              _c(
                "router-link",
                { staticClass: "float-right", attrs: { to: "/pages/cart" } },
                [_vm._v("View Cart")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "dropdown-cart-products" },
            _vm._l(_vm.cartList, function(product, index) {
              return _c("div", { key: index, staticClass: "product" }, [
                _c("div", { staticClass: "product-details" }, [
                  _c(
                    "h4",
                    { staticClass: "product-title" },
                    [
                      _c(
                        "router-link",
                        { attrs: { to: _vm.getPageUrl(product) } },
                        [_vm._v(_vm._s(product.name))]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("span", { staticClass: "cart-product-info" }, [
                    _c("span", { staticClass: "cart-product-qty" }, [
                      _vm._v(_vm._s(product.qty))
                    ]),
                    _vm._v("\n\t\t\t\t\t\t\tx\n\t\t\t\t\t\t\t"),
                    _c("span", {
                      domProps: {
                        innerHTML: _vm._s(
                          _vm.formatPrice(product.min_max_price[0]) +
                            _vm.priceSuffix
                        )
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
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
                                    "\n\t\t\t\t\t\t\t\t\t$root.getUrl(\n\t\t\t\t\t\t\t\t\t\tproduct.media[0].copy_link,\n\t\t\t\t\t\t\t\t\t\ttrue,\n\t\t\t\t\t\t\t\t\t\t100\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t"
                                }
                              ],
                              key: "product-image",
                              attrs: {
                                alt: product.media[0].alt_text
                                  ? product.media[0].alt_text
                                  : "product",
                                width: "100",
                                height: "100"
                              }
                            })
                          : _c("img", {
                              key: "placeholder",
                              attrs: {
                                src: _vm.$root.getUrl(
                                  "server/images/placeholder-img-300x300.png"
                                ),
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
                          return _vm.removeFromCart({ product: product })
                        }
                      }
                    })
                  ],
                  1
                )
              ])
            }),
            0
          ),
          _vm._v(" "),
          _vm.cartList.length > 0
            ? [
                _c("div", { staticClass: "dropdown-cart-total" }, [
                  _c("span", [_vm._v("Subtotal")]),
                  _vm._v(" "),
                  _c("span", {
                    staticClass: "cart-total-price float-right",
                    domProps: {
                      innerHTML: _vm._s(
                        _vm.formatPrice(_vm.priceTotal) + _vm.priceSuffix
                      )
                    }
                  })
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "dropdown-cart-action" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-dark btn-block",
                        attrs: { to: "/pages/checkout" }
                      },
                      [_vm._v("Checkout")]
                    )
                  ],
                  1
                )
              ]
            : _c("div", { staticClass: "empty-cart-products text-center" }, [
                _c("h6", { staticClass: "font-weight-light py-4 mb-0" }, [
                  _vm._v("\n\t\t\t\t\tNo products in the cart\n\t\t\t\t")
                ])
              ])
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/client/components/shared/headers/shared/cart-menu/CartMenuTwoComponent.vue":
/*!*************************************************************************************************!*\
  !*** ./resources/js/client/components/shared/headers/shared/cart-menu/CartMenuTwoComponent.vue ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CartMenuTwoComponent_vue_vue_type_template_id_7f158b3d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CartMenuTwoComponent.vue?vue&type=template&id=7f158b3d& */ "./resources/js/client/components/shared/headers/shared/cart-menu/CartMenuTwoComponent.vue?vue&type=template&id=7f158b3d&");
/* harmony import */ var _CartMenuTwoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CartMenuTwoComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/components/shared/headers/shared/cart-menu/CartMenuTwoComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CartMenuTwoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CartMenuTwoComponent_vue_vue_type_template_id_7f158b3d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CartMenuTwoComponent_vue_vue_type_template_id_7f158b3d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/shared/headers/shared/cart-menu/CartMenuTwoComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/shared/headers/shared/cart-menu/CartMenuTwoComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/client/components/shared/headers/shared/cart-menu/CartMenuTwoComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartMenuTwoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CartMenuTwoComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/headers/shared/cart-menu/CartMenuTwoComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartMenuTwoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/components/shared/headers/shared/cart-menu/CartMenuTwoComponent.vue?vue&type=template&id=7f158b3d&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/client/components/shared/headers/shared/cart-menu/CartMenuTwoComponent.vue?vue&type=template&id=7f158b3d& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartMenuTwoComponent_vue_vue_type_template_id_7f158b3d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CartMenuTwoComponent.vue?vue&type=template&id=7f158b3d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/headers/shared/cart-menu/CartMenuTwoComponent.vue?vue&type=template&id=7f158b3d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartMenuTwoComponent_vue_vue_type_template_id_7f158b3d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartMenuTwoComponent_vue_vue_type_template_id_7f158b3d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);