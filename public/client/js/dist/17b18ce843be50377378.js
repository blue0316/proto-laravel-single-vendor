(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shop/shared/ShopSidebarTwoComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shop/shared/ShopSidebarTwoComponent.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      attributes: [],
      min_price: 0,
      max_price: 9999
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("setting", ["getSetting"])),
  watch: {
    $route: function $route() {
      if (this.$route.query.min_price && this.$route.query.max_price) {
        this.min_price = this.$route.query.min_price;
        this.max_price = this.$route.query.max_price;
      } else {
        this.min_price = parseInt(this.getSetting("filter_min_price"));
        this.max_price = parseInt(this.getSetting("filter_max_price"));
      }
    }
  },
  methods: {
    isColor: function isColor(value) {
      return value.includes("#");
    },
    changeAttrFilter: function changeAttrFilter(attr, term, event) {
      event.target.parentNode.classList.toggle("active");
    },
    setFilterRouteQuery: function setFilterRouteQuery(term) {
      if (!this.$route.query.attributes) {
        return {
          path: this.$route.fullPath,
          query: _objectSpread(_objectSpread({}, this.$route.query), {}, {
            attributes: term.slug
          })
        };
      } else if (this.$route.query.attributes.split(",").findIndex(function (attrSlug) {
        return attrSlug == term.slug;
      }) == -1) {
        return {
          path: this.$route.fullPath,
          query: _objectSpread(_objectSpread({}, this.$route.query), {}, {
            attributes: [].concat(_toConsumableArray(this.$route.query.attributes.split(",")), [term.slug]).join(",")
          })
        };
      } else {
        return {
          path: this.$route.fullPath,
          query: _objectSpread(_objectSpread({}, this.$route.query), {}, {
            attributes: this.$route.query.attributes.split(",").filter(function (attrSlug) {
              return attrSlug !== term.slug;
            }).join(",")
          })
        };
      }
    },
    setPriceFilterRouteQuery: function setPriceFilterRouteQuery() {
      return {
        path: this.$route.fullPath,
        query: _objectSpread(_objectSpread({}, this.$route.query), {}, {
          min_price: this.min_price,
          max_price: this.max_price
        })
      };
    },
    setActiveTerm: function setActiveTerm(term) {
      if (!this.$route.query.attributes || this.$route.query.attributes.split(",").findIndex(function (item) {
        return item == term.slug;
      }) == -1) return false;
      return true;
    },
    setOpenAttribute: function setOpenAttribute(e) {
      document.querySelector("body").click();
      e.target.parentNode.classList.add("opened");
      e.stopPropagation();
    },
    removeActive: function removeActive() {
      var sorts = document.querySelectorAll(".toolbox-sort");

      for (var i = 0; i < sorts.length; i++) {
        sorts[i].classList.remove("opened");
      }
    }
  },
  created: function created() {
    var _this = this;

    window.axios.get("/web/shop/sidebar").then(function (response) {
      _this.attributes = response.data.attributes;
    })["catch"](function (error) {});
  },
  mounted: function mounted() {
    document.querySelector("body").addEventListener("click", this.removeActive);

    if (this.$route.query.min_price && this.$route.query.max_price) {
      this.min_price = this.$route.query.min_price;
      this.max_price = this.$route.query.max_price;
    } else {
      this.min_price = parseInt(this.getSetting("filter_min_price"));
      this.max_price = parseInt(this.getSetting("filter_max_price"));
    }
  },
  destroyed: function destroyed() {
    document.querySelector("body").removeEventListener("click", this.removeActive);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shop/shared/ShopSidebarTwoComponent.vue?vue&type=template&id=2519c53a&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shop/shared/ShopSidebarTwoComponent.vue?vue&type=template&id=2519c53a& ***!
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
    "aside",
    { staticClass: "toolbox-left sidebar-shop mobile-sidebar sidebar-shop-2" },
    [
      _vm._l(_vm.attributes, function(attr) {
        return _c(
          "div",
          {
            key: attr.id,
            staticClass: "toolbox-item toolbox-sort select-custom"
          },
          [
            _c(
              "a",
              {
                staticClass: "sort-menu-trigger",
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.setOpenAttribute.apply(null, arguments)
                  }
                }
              },
              [_vm._v(_vm._s(attr.name))]
            ),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "sort-list" },
              _vm._l(attr.terms, function(term) {
                return _c(
                  "li",
                  { key: term.id, class: { active: _vm.setActiveTerm(term) } },
                  [
                    _c(
                      "router-link",
                      { attrs: { to: _vm.setFilterRouteQuery(term) } },
                      [
                        _vm._v(
                          _vm._s(attr.slug === "color" ? term.slug : term.name)
                        )
                      ]
                    )
                  ],
                  1
                )
              }),
              0
            )
          ]
        )
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "toolbox-item toolbox-sort price-sort select-custom" },
        [
          _c(
            "a",
            {
              staticClass: "sort-menu-trigger",
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.setOpenAttribute.apply(null, arguments)
                }
              }
            },
            [_vm._v("Price")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "sort-list",
              on: {
                click: function($event) {
                  $event.stopPropagation()
                }
              }
            },
            [
              _c(
                "form",
                {
                  staticClass:
                    "filter-price-form d-flex align-items-center m-0",
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                    }
                  }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.min_price,
                        expression: "min_price"
                      }
                    ],
                    staticClass: "input-price mr-2",
                    attrs: { name: "min_price", placeholder: "0" },
                    domProps: { value: _vm.min_price },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.min_price = $event.target.value
                      }
                    }
                  }),
                  _vm._v("\n\t\t\t\t-\n\t\t\t\t"),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.max_price,
                        expression: "max_price"
                      }
                    ],
                    staticClass: "input-price mx-2",
                    attrs: { name: "max_price", placeholder: "10000" },
                    domProps: { value: _vm.max_price },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.max_price = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-primary ml-3",
                      attrs: { to: _vm.setPriceFilterRouteQuery() }
                    },
                    [_vm._v("Filter")]
                  )
                ],
                1
              )
            ]
          )
        ]
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/client/components/shop/shared/ShopSidebarTwoComponent.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/client/components/shop/shared/ShopSidebarTwoComponent.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShopSidebarTwoComponent_vue_vue_type_template_id_2519c53a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShopSidebarTwoComponent.vue?vue&type=template&id=2519c53a& */ "./resources/js/client/components/shop/shared/ShopSidebarTwoComponent.vue?vue&type=template&id=2519c53a&");
/* harmony import */ var _ShopSidebarTwoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShopSidebarTwoComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/components/shop/shared/ShopSidebarTwoComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShopSidebarTwoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShopSidebarTwoComponent_vue_vue_type_template_id_2519c53a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShopSidebarTwoComponent_vue_vue_type_template_id_2519c53a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/shop/shared/ShopSidebarTwoComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/shop/shared/ShopSidebarTwoComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/client/components/shop/shared/ShopSidebarTwoComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopSidebarTwoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopSidebarTwoComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shop/shared/ShopSidebarTwoComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopSidebarTwoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/components/shop/shared/ShopSidebarTwoComponent.vue?vue&type=template&id=2519c53a&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/client/components/shop/shared/ShopSidebarTwoComponent.vue?vue&type=template&id=2519c53a& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopSidebarTwoComponent_vue_vue_type_template_id_2519c53a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopSidebarTwoComponent.vue?vue&type=template&id=2519c53a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shop/shared/ShopSidebarTwoComponent.vue?vue&type=template&id=2519c53a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopSidebarTwoComponent_vue_vue_type_template_id_2519c53a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopSidebarTwoComponent_vue_vue_type_template_id_2519c53a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);