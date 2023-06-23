(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/headers/HeaderTwoComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shared/headers/HeaderTwoComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _shared_header_search_HeaderSearchTwoComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/header-search/HeaderSearchTwoComponent */ "./resources/js/client/components/shared/headers/shared/header-search/HeaderSearchTwoComponent.vue");
/* harmony import */ var _shared_main_menu_MainMenuComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/main-menu/MainMenuComponent */ "./resources/js/client/components/shared/headers/shared/main-menu/MainMenuComponent.vue");
/* harmony import */ var _shared_StickyHeaderComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/StickyHeaderComponent */ "./resources/js/client/components/shared/headers/shared/StickyHeaderComponent.vue");
/* harmony import */ var _modals_LoginModalComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/LoginModalComponent */ "./resources/js/client/components/shared/modals/LoginModalComponent.vue");
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






function loadComponent(name) {
  return function () {
    return __webpack_require__("./resources/js/client/components/shared/headers/shared/cart-menu lazy recursive ^\\.\\/.*\\.vue$")("./".concat(name, ".vue")).then(function (m) {
      return m["default"] || m;
    });
  };
}

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    HeaderSearchTwoComponent: _shared_header_search_HeaderSearchTwoComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
    MainMenuComponent: _shared_main_menu_MainMenuComponent__WEBPACK_IMPORTED_MODULE_2__["default"],
    StickyHeaderComponent: _shared_StickyHeaderComponent__WEBPACK_IMPORTED_MODULE_3__["default"],
    LoginModalComponent: _modals_LoginModalComponent__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    categories: Array
  },
  data: function data() {
    return {
      topNoticeShow: true
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("user", ["isCustomer"])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("setting", ["getHeaderSettings"])), {}, {
    cartMenuComponent: function cartMenuComponent() {
      return this.getHeaderSettings.cartMenuType && loadComponent(this.getHeaderSettings.cartMenuType);
    },
    isIndex: function isIndex() {
      return this.$route.path === "/";
    }
  }),
  methods: {
    showLoginModal: function showLoginModal() {
      this.$modal.show(_modals_LoginModalComponent__WEBPACK_IMPORTED_MODULE_4__["default"], {}, {
        width: "872",
        height: "auto",
        adaptive: true
      });
    },
    showMobileMenu: function showMobileMenu() {
      document.querySelector("body").classList.add("mmenu-active");
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/headers/HeaderTwoComponent.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shared/headers/HeaderTwoComponent.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".slide-appear-active {\n  transition: all 0.5s ease;\n}\n.slide-appear {\n  transform: translateY(10px);\n  opacity: 0;\n  visibility: hidden;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/headers/HeaderTwoComponent.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shared/headers/HeaderTwoComponent.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HeaderTwoComponent.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/headers/HeaderTwoComponent.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/headers/HeaderTwoComponent.vue?vue&type=template&id=2ddf086e&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shared/headers/HeaderTwoComponent.vue?vue&type=template&id=2ddf086e& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _vm.topNoticeShow
      ? _c("div", { staticClass: "top-notice text-white bg-dark" }, [
          _c("div", { staticClass: "container text-center" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "mfp-close",
                attrs: { title: "Close (Esc)", type: "button" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    _vm.topNoticeShow = !_vm.topNoticeShow
                  }
                }
              },
              [_vm._v("\n\t\t\t\t×\n\t\t\t")]
            )
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "header",
      {
        staticClass: "header header-two",
        class: { "header-transparent": _vm.isIndex }
      },
      [
        _c("sticky-header-component", [
          _c(
            "div",
            { staticClass: "header-middle sticky-header" },
            [
              _c("transition", { attrs: { name: "slide" } }, [
                _c("div", { staticClass: "container" }, [
                  _c(
                    "div",
                    { staticClass: "header-left" },
                    [
                      _c(
                        "a",
                        { staticClass: "logo", attrs: { href: "index.html" } },
                        [
                          _c("img", {
                            attrs: {
                              src: _vm.$root.getUrl(
                                _vm.getHeaderSettings.logoImage
                              ),
                              alt: _vm.getHeaderSettings.siteTitle + " Logo",
                              width: _vm.getHeaderSettings.logoImageWidth,
                              height: _vm.getHeaderSettings.logoImageHeight
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("main-menu-component", {
                        staticClass: "font2",
                        attrs: { "is-short": true, "align-stretch": false }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "header-right" },
                    [
                      _c(
                        "button",
                        {
                          staticClass: "mobile-menu-toggler mr-4",
                          class: _vm.getHeaderSettings.mmenuTogglerStyle,
                          attrs: { type: "button" },
                          on: { click: _vm.showMobileMenu }
                        },
                        [_c("i", { staticClass: "icon-menu" })]
                      ),
                      _vm._v(" "),
                      !_vm.isCustomer
                        ? _c(
                            "a",
                            {
                              staticClass: "header-icon login-link",
                              class: _vm.getHeaderSettings.accountIconStyle,
                              attrs: { href: "#" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.showLoginModal.apply(
                                    null,
                                    arguments
                                  )
                                }
                              }
                            },
                            [_c("i", { staticClass: "icon-user-2" })]
                          )
                        : _c(
                            "router-link",
                            {
                              staticClass: "header-icon login-link",
                              class: _vm.getHeaderSettings.accountIconStyle,
                              attrs: { to: "/pages/account" }
                            },
                            [_c("i", { staticClass: "icon-user-2" })]
                          ),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "header-icon",
                          attrs: { to: "/pages/wishlist" }
                        },
                        [_c("i", { staticClass: "icon-wishlist-2" })]
                      ),
                      _vm._v(" "),
                      _c("header-search-two-component", {
                        staticClass:
                          "header-search-popup header-search-category d-none d-sm-block",
                        class: _vm.getHeaderSettings.searchFormStyle,
                        attrs: {
                          categories: _vm.categories,
                          "show-category":
                            _vm.getHeaderSettings.searchFormCategory
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "transition",
                        { attrs: { name: "fade", mode: "out-in" } },
                        [
                          _c(
                            "keep-alive",
                            [_c(_vm.cartMenuComponent, { tag: "component" })],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ])
              ])
            ],
            1
          )
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", { staticClass: "ls-n-10 mb-0" }, [
      _vm._v(
        "\n\t\t\t\tGet 10% extra OFF on Porto Summer Sale - Use\n\t\t\t\t"
      ),
      _c("b", [_vm._v("PORTOSUMMER")]),
      _vm._v(" coupon -\n\t\t\t\t"),
      _c("a", { attrs: { href: "category.html" } }, [_vm._v("Shop Now!")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/client/components/shared/headers/HeaderTwoComponent.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/client/components/shared/headers/HeaderTwoComponent.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeaderTwoComponent_vue_vue_type_template_id_2ddf086e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderTwoComponent.vue?vue&type=template&id=2ddf086e& */ "./resources/js/client/components/shared/headers/HeaderTwoComponent.vue?vue&type=template&id=2ddf086e&");
/* harmony import */ var _HeaderTwoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderTwoComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/components/shared/headers/HeaderTwoComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _HeaderTwoComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeaderTwoComponent.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/client/components/shared/headers/HeaderTwoComponent.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HeaderTwoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HeaderTwoComponent_vue_vue_type_template_id_2ddf086e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HeaderTwoComponent_vue_vue_type_template_id_2ddf086e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/shared/headers/HeaderTwoComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/shared/headers/HeaderTwoComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/client/components/shared/headers/HeaderTwoComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderTwoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HeaderTwoComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/headers/HeaderTwoComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderTwoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/components/shared/headers/HeaderTwoComponent.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/client/components/shared/headers/HeaderTwoComponent.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderTwoComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HeaderTwoComponent.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/headers/HeaderTwoComponent.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderTwoComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderTwoComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderTwoComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderTwoComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/client/components/shared/headers/HeaderTwoComponent.vue?vue&type=template&id=2ddf086e&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/client/components/shared/headers/HeaderTwoComponent.vue?vue&type=template&id=2ddf086e& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderTwoComponent_vue_vue_type_template_id_2ddf086e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HeaderTwoComponent.vue?vue&type=template&id=2ddf086e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/headers/HeaderTwoComponent.vue?vue&type=template&id=2ddf086e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderTwoComponent_vue_vue_type_template_id_2ddf086e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderTwoComponent_vue_vue_type_template_id_2ddf086e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);