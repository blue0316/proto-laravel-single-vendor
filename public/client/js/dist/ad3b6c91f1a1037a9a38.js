(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/products/ProductTwoComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shared/products/ProductTwoComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("setting", ["formatPrice", "priceSuffix"])), {}, {
    media: function media() {
      return this.product.media.slice(0, 2);
    }
  }),
  methods: {
    getPageUrl: function getPageUrl() {
      if (this.product.parent == 0) {
        return {
          path: "/product/default/" + this.product.slug
        };
      } else {
        return {
          path: "/product/default/" + this.product.slug,
          query: {
            termId: JSON.parse(this.product.excerpt).reduce(function (acc, cur) {
              return [].concat(_toConsumableArray(acc), [cur.termId]);
            }, [])
          }
        };
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/products/ProductTwoComponent.vue?vue&type=template&id=621aa67c&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shared/products/ProductTwoComponent.vue?vue&type=template&id=621aa67c& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "product-default left-details product-widget" },
    [
      _c(
        "figure",
        [
          _vm.product.media.length > 0
            ? _c(
                "router-link",
                { key: "media-0", attrs: { to: _vm.getPageUrl() } },
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
                { key: "media-1", attrs: { to: _vm.getPageUrl() } },
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
                          "\n\t\t\t\t\t$root.getUrl(\n\t\t\t\t\t\t'server/images/placeholder-img-300x300.png'\n\t\t\t\t\t)\n\t\t\t\t"
                      }
                    ],
                    attrs: { width: "300", height: "300", alt: "product" }
                  })
                ]
              )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "product-details" }, [
        _c(
          "h3",
          { staticClass: "product-title" },
          [
            _c("router-link", { attrs: { to: _vm.getPageUrl() } }, [
              _vm._v(_vm._s(_vm.product.name))
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "ratings-container" }, [
          _c("div", { staticClass: "product-ratings" }, [
            _c("span", {
              staticClass: "ratings",
              style: "width:" + 20 * _vm.product.average_rating + "%"
            }),
            _vm._v(" "),
            _c("span", { staticClass: "tooltiptext tooltip-top" }, [
              _vm._v(_vm._s(_vm.product.average_rating.toFixed(2)))
            ])
          ])
        ]),
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
                    _vm._v("\n\t\t\t\t–\n\t\t\t\t"),
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
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/client/components/shared/products/ProductTwoComponent.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/client/components/shared/products/ProductTwoComponent.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductTwoComponent_vue_vue_type_template_id_621aa67c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductTwoComponent.vue?vue&type=template&id=621aa67c& */ "./resources/js/client/components/shared/products/ProductTwoComponent.vue?vue&type=template&id=621aa67c&");
/* harmony import */ var _ProductTwoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductTwoComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/components/shared/products/ProductTwoComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductTwoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductTwoComponent_vue_vue_type_template_id_621aa67c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductTwoComponent_vue_vue_type_template_id_621aa67c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/shared/products/ProductTwoComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/shared/products/ProductTwoComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/client/components/shared/products/ProductTwoComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductTwoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductTwoComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/products/ProductTwoComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductTwoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/components/shared/products/ProductTwoComponent.vue?vue&type=template&id=621aa67c&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/client/components/shared/products/ProductTwoComponent.vue?vue&type=template&id=621aa67c& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductTwoComponent_vue_vue_type_template_id_621aa67c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductTwoComponent.vue?vue&type=template&id=621aa67c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/products/ProductTwoComponent.vue?vue&type=template&id=621aa67c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductTwoComponent_vue_vue_type_template_id_621aa67c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductTwoComponent_vue_vue_type_template_id_621aa67c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);