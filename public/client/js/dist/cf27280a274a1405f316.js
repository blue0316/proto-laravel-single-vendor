(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[91],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shop/shared/ShopBreadcrumbComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shop/shared/ShopBreadcrumbComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    categories: {
      type: Array,
      "default": []
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shop/shared/ShopBreadcrumbComponent.vue?vue&type=template&id=665dd990&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shop/shared/ShopBreadcrumbComponent.vue?vue&type=template&id=665dd990& ***!
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
    "nav",
    { staticClass: "breadcrumb-nav", attrs: { "aria-label": "breadcrumb" } },
    [
      _c(
        "ol",
        { staticClass: "breadcrumb" },
        [
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
            { staticClass: "breadcrumb-item" },
            [
              _c(
                "router-link",
                {
                  attrs: {
                    to: {
                      path: _vm.$route.path
                    }
                  }
                },
                [_vm._v("Shop")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm._l(_vm.categories, function(category) {
            return _c(
              "li",
              { key: category.id, staticClass: "breadcrumb-item" },
              [
                category.slug != _vm.$route.query.category
                  ? _c(
                      "router-link",
                      {
                        attrs: {
                          to: {
                            query: { category: category.slug }
                          }
                        }
                      },
                      [_vm._v(_vm._s(category.name))]
                    )
                  : _c("span", [_vm._v(_vm._s(category.name))])
              ],
              1
            )
          }),
          _vm._v(" "),
          _vm.$route.query.tag
            ? _c("li", { staticClass: "breadcrumb-item" }, [
                _c("span", [
                  _vm._v("Product Tag - " + _vm._s(_vm.$route.query.tag))
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.$route.query.search_term
            ? _c("li", { staticClass: "breadcrumb-item" }, [
                _c("span", [
                  _vm._v("Search - " + _vm._s(_vm.$route.query.search_term))
                ])
              ])
            : _vm._e()
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/client/components/shop/shared/ShopBreadcrumbComponent.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/client/components/shop/shared/ShopBreadcrumbComponent.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShopBreadcrumbComponent_vue_vue_type_template_id_665dd990___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShopBreadcrumbComponent.vue?vue&type=template&id=665dd990& */ "./resources/js/client/components/shop/shared/ShopBreadcrumbComponent.vue?vue&type=template&id=665dd990&");
/* harmony import */ var _ShopBreadcrumbComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShopBreadcrumbComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/components/shop/shared/ShopBreadcrumbComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShopBreadcrumbComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShopBreadcrumbComponent_vue_vue_type_template_id_665dd990___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShopBreadcrumbComponent_vue_vue_type_template_id_665dd990___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/shop/shared/ShopBreadcrumbComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/shop/shared/ShopBreadcrumbComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/client/components/shop/shared/ShopBreadcrumbComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopBreadcrumbComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopBreadcrumbComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shop/shared/ShopBreadcrumbComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopBreadcrumbComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/components/shop/shared/ShopBreadcrumbComponent.vue?vue&type=template&id=665dd990&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/client/components/shop/shared/ShopBreadcrumbComponent.vue?vue&type=template&id=665dd990& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopBreadcrumbComponent_vue_vue_type_template_id_665dd990___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopBreadcrumbComponent.vue?vue&type=template&id=665dd990& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shop/shared/ShopBreadcrumbComponent.vue?vue&type=template&id=665dd990&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopBreadcrumbComponent_vue_vue_type_template_id_665dd990___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopBreadcrumbComponent_vue_vue_type_template_id_665dd990___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);