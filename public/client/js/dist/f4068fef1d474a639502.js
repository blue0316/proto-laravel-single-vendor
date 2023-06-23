(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/headers/shared/header-search/HeaderSearchTwoComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shared/headers/shared/header-search/HeaderSearchTwoComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    categories: Array,
    showCategory: Number
  },
  data: function data() {
    return {
      searchTerm: "",
      category: "*",
      suggestions: [],
      timeouts: []
    };
  },
  mounted: function mounted() {
    document.querySelector("body").addEventListener("click", this.closeSearchForm);
  },
  methods: {
    searchProducts: function searchProducts() {
      var _this = this;

      if (this.searchTerm.length > 2) {
        var searchTerm = this.searchTerm;
        this.timeouts.map(function (timeout) {
          window.clearTimeout(timeout);
        });
        this.timeouts.push(setTimeout(function () {
          window.axios.get("/web/products-search", {
            params: {
              search_term: searchTerm,
              category: _this.category
            }
          }).then(function (response) {
            _this.suggestions = _toConsumableArray(response.data.products);
          })["catch"](function (error) {});
        }, 500));
      } else {
        this.timeouts.map(function (timeout) {
          window.clearTimeout(timeout);
        });
        this.suggestions = [];
      }
    },
    matchEmphasize: function matchEmphasize(name) {
      var regExp = new RegExp(this.searchTerm, "i");
      return name.replace(regExp, function (match) {
        return "<strong>" + match + "</strong>";
      });
    },
    goProductPage: function goProductPage() {
      this.searchTerm = "";
      this.suggestions = [];
      this.category = "*";
    },
    searchToggle: function searchToggle(e) {
      document.querySelector(".header-search").classList.toggle("show");
      e.stopPropagation();
    },
    showSearchForm: function showSearchForm() {
      document.querySelector(".header .header-search").classList.add("show");
    },
    closeSearchForm: function closeSearchForm(e) {
      document.querySelector(".header .header-search").classList.remove("show");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/headers/shared/header-search/HeaderSearchTwoComponent.vue?vue&type=template&id=da6c7b92&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shared/headers/shared/header-search/HeaderSearchTwoComponent.vue?vue&type=template&id=da6c7b92& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "header-search" }, [
    _c(
      "a",
      {
        staticClass: "search-toggle",
        attrs: { href: "#", role: "button" },
        on: { click: _vm.searchToggle }
      },
      [_c("i", { staticClass: "icon-magnifier" })]
    ),
    _vm._v(" "),
    _c(
      "form",
      {
        attrs: { action: "#", method: "get" },
        on: {
          click: function($event) {
            $event.stopPropagation()
            return _vm.showSearchForm.apply(null, arguments)
          },
          submit: function($event) {
            $event.preventDefault()
            return _vm.searchProducts.apply(null, arguments)
          }
        }
      },
      [
        _c("div", { staticClass: "header-search-wrapper" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.searchTerm,
                expression: "searchTerm"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "text",
              autocomplete: "false",
              placeholder: "Search...",
              required: ""
            },
            domProps: { value: _vm.searchTerm },
            on: {
              input: [
                function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.searchTerm = $event.target.value
                },
                _vm.searchProducts
              ]
            }
          }),
          _vm._v(" "),
          _vm.showCategory
            ? _c("div", { staticClass: "select-custom" }, [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.category,
                        expression: "category"
                      }
                    ],
                    attrs: { id: "cat", name: "cat" },
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
                          _vm.category = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        },
                        _vm.searchProducts
                      ]
                    }
                  },
                  [
                    _c("option", { attrs: { value: "*" } }, [
                      _vm._v("All Categories")
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.categories, function(category) {
                      return _c(
                        "option",
                        { key: category.id, domProps: { value: category.id } },
                        [_vm._v(_vm._s(category.name))]
                      )
                    })
                  ],
                  2
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("button", {
            staticClass: "btn icon-search-3",
            attrs: { type: "submit" }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "live-search-list" }, [
            _vm.suggestions.length > 0
              ? _c(
                  "div",
                  {
                    staticClass: "autocomplete-suggestions",
                    on: { click: _vm.goProductPage }
                  },
                  _vm._l(_vm.suggestions, function(product) {
                    return _c(
                      "router-link",
                      {
                        key: product.id,
                        staticClass: "autocomplete-suggestion",
                        attrs: {
                          to: "/product/default/" + product.slug,
                          "data-index": "0"
                        }
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
                              attrs: {
                                alt: product.media[0].alt_text
                                  ? product.media[0].alt_text
                                  : "product",
                                width: "40",
                                height: "40"
                              }
                            })
                          : _c("img", {
                              attrs: {
                                src: _vm.$root.getUrl(
                                  "server/images/placeholder-img-100x100"
                                ),
                                alt: "product",
                                width: "40",
                                height: "40"
                              }
                            }),
                        _vm._v(" "),
                        _c("div", {
                          staticClass: "search-name",
                          domProps: {
                            innerHTML: _vm._s(_vm.matchEmphasize(product.name))
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "search-price" },
                          [
                            product.type == "simple"
                              ? [
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
                                    _vm._v(
                                      "$" + _vm._s(product.min_max_price[1])
                                    )
                                  ])
                                ]
                              : _vm._e(),
                            _vm._v(" "),
                            (product.type = "variable")
                              ? [
                                  _c("span", { staticClass: "product-price" }, [
                                    _vm._v(
                                      "$" + _vm._s(product.min_max_price[0])
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "product-price" }, [
                                    _vm._v(
                                      "- $" + _vm._s(product.min_max_price[1])
                                    )
                                  ])
                                ]
                              : _vm._e()
                          ],
                          2
                        )
                      ]
                    )
                  }),
                  1
                )
              : _vm._e()
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/client/components/shared/headers/shared/header-search/HeaderSearchTwoComponent.vue":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/client/components/shared/headers/shared/header-search/HeaderSearchTwoComponent.vue ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeaderSearchTwoComponent_vue_vue_type_template_id_da6c7b92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderSearchTwoComponent.vue?vue&type=template&id=da6c7b92& */ "./resources/js/client/components/shared/headers/shared/header-search/HeaderSearchTwoComponent.vue?vue&type=template&id=da6c7b92&");
/* harmony import */ var _HeaderSearchTwoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderSearchTwoComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/components/shared/headers/shared/header-search/HeaderSearchTwoComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HeaderSearchTwoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HeaderSearchTwoComponent_vue_vue_type_template_id_da6c7b92___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HeaderSearchTwoComponent_vue_vue_type_template_id_da6c7b92___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/shared/headers/shared/header-search/HeaderSearchTwoComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/shared/headers/shared/header-search/HeaderSearchTwoComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/client/components/shared/headers/shared/header-search/HeaderSearchTwoComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderSearchTwoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HeaderSearchTwoComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/headers/shared/header-search/HeaderSearchTwoComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderSearchTwoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/components/shared/headers/shared/header-search/HeaderSearchTwoComponent.vue?vue&type=template&id=da6c7b92&":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/js/client/components/shared/headers/shared/header-search/HeaderSearchTwoComponent.vue?vue&type=template&id=da6c7b92& ***!
  \****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderSearchTwoComponent_vue_vue_type_template_id_da6c7b92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HeaderSearchTwoComponent.vue?vue&type=template&id=da6c7b92& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/headers/shared/header-search/HeaderSearchTwoComponent.vue?vue&type=template&id=da6c7b92&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderSearchTwoComponent_vue_vue_type_template_id_da6c7b92___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderSearchTwoComponent_vue_vue_type_template_id_da6c7b92___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);