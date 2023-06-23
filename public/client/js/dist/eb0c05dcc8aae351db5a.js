(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/stores/StoreOneComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shared/stores/StoreOneComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
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
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    store: Object
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/stores/StoreOneComponent.vue?vue&type=template&id=0c26a922&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shared/stores/StoreOneComponent.vue?vue&type=template&id=0c26a922& ***!
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
  return _c("div", { staticClass: "store" }, [
    _c("div", { staticClass: "store-info" }, [
      _c("figure", [
        _c("img", {
          directives: [
            {
              name: "lazy",
              rawName: "v-lazy",
              value: _vm.$root.getUrl(_vm.store.banner, true),
              expression: "$root.getUrl(store.banner, true)"
            }
          ],
          attrs: { width: "453", height: "220", alt: "store" }
        })
      ]),
      _vm._v(" "),
      _vm._m(0)
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "store-footer" },
      [
        _c("div", { staticClass: "seller-avatar" }, [
          _c("img", {
            directives: [
              {
                name: "lazy",
                rawName: "v-lazy",
                value: _vm.$root.getUrl("client/images/brands/vendor-1.jpg"),
                expression: "$root.getUrl('client/images/brands/vendor-1.jpg')"
              }
            ],
            attrs: { alt: "vendor", width: "68", height: "68" }
          })
        ]),
        _vm._v(" "),
        _c("router-link", {
          staticClass: "btn btn-primary btn-round",
          attrs: { to: "/vendor/1" }
        })
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
    return _c("div", { staticClass: "store-content" }, [
      _c("h3", { staticClass: "store-title" }, [_vm._v("Porto Vendor")]),
      _vm._v(" "),
      _c("div", { staticClass: "ratings-container" }, [
        _c(
          "div",
          {
            staticClass: "store-ratings",
            attrs: { title: "Rated 4.00 out of 5" }
          },
          [
            _c("span", {
              staticClass: "ratings",
              staticStyle: { width: "80%" }
            })
          ]
        )
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "store-address" }, [
        _c("span", { staticClass: "store-state" }, [_vm._v("California,")]),
        _vm._v(" "),
        _c("span", { staticClass: "store-country" }, [
          _vm._v(" United States (US)")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/client/components/shared/stores/StoreOneComponent.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/client/components/shared/stores/StoreOneComponent.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StoreOneComponent_vue_vue_type_template_id_0c26a922___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StoreOneComponent.vue?vue&type=template&id=0c26a922& */ "./resources/js/client/components/shared/stores/StoreOneComponent.vue?vue&type=template&id=0c26a922&");
/* harmony import */ var _StoreOneComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StoreOneComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/components/shared/stores/StoreOneComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StoreOneComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StoreOneComponent_vue_vue_type_template_id_0c26a922___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StoreOneComponent_vue_vue_type_template_id_0c26a922___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/shared/stores/StoreOneComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/shared/stores/StoreOneComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/client/components/shared/stores/StoreOneComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreOneComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StoreOneComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/stores/StoreOneComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreOneComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/components/shared/stores/StoreOneComponent.vue?vue&type=template&id=0c26a922&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/client/components/shared/stores/StoreOneComponent.vue?vue&type=template&id=0c26a922& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreOneComponent_vue_vue_type_template_id_0c26a922___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StoreOneComponent.vue?vue&type=template&id=0c26a922& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/stores/StoreOneComponent.vue?vue&type=template&id=0c26a922&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreOneComponent_vue_vue_type_template_id_0c26a922___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreOneComponent_vue_vue_type_template_id_0c26a922___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);