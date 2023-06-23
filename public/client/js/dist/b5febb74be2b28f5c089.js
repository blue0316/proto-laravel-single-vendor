(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[80],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/blog/BlogLayoutComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/pages/blog/BlogLayoutComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BlogSidebarComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlogSidebarComponent */ "./resources/js/client/components/pages/blog/BlogSidebarComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    BlogSidebarComponent: _BlogSidebarComponent__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {
    blogTag: function blogTag() {
      return this.$route.query && this.$route.query.tag;
    },
    blogCategory: function blogCategory() {
      return this.$route.query && this.$route.query.category;
    },
    blogMeta: function blogMeta() {
      return this.blogTag || this.blogCategory;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/blog/BlogLayoutComponent.vue?vue&type=template&id=903793bc&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/pages/blog/BlogLayoutComponent.vue?vue&type=template&id=903793bc& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    _c(
      "nav",
      { staticClass: "breadcrumb-nav", attrs: { "aria-label": "breadcrumb" } },
      [
        _c("div", { staticClass: "container" }, [
          _c("ol", { staticClass: "breadcrumb" }, [
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
              {
                staticClass: "breadcrumb-item",
                class: { active: _vm.blogMeta }
              },
              [
                _vm.blogMeta
                  ? _c("router-link", { attrs: { to: "/pages/blog" } }, [
                      _vm._v("Blog")
                    ])
                  : [
                      _vm._v(
                        "\n                        Blog\n                    "
                      )
                    ]
              ],
              2
            ),
            _vm._v(" "),
            _vm.blogMeta
              ? _c("li", { staticClass: "breadcrumb-item active" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.blogMeta) +
                      "\n                "
                  )
                ])
              : _vm._e()
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "container skeleton-body skel-shop-products" }, [
      _c(
        "div",
        { staticClass: "row" },
        [
          _c("div", { staticClass: "col-lg-9" }, [_c("router-view")], 1),
          _vm._v(" "),
          _c("blog-sidebar-component", { staticClass: "col-lg-3" })
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "mb-4" })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/client/components/pages/blog/BlogLayoutComponent.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/client/components/pages/blog/BlogLayoutComponent.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BlogLayoutComponent_vue_vue_type_template_id_903793bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlogLayoutComponent.vue?vue&type=template&id=903793bc& */ "./resources/js/client/components/pages/blog/BlogLayoutComponent.vue?vue&type=template&id=903793bc&");
/* harmony import */ var _BlogLayoutComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlogLayoutComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/components/pages/blog/BlogLayoutComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BlogLayoutComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BlogLayoutComponent_vue_vue_type_template_id_903793bc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BlogLayoutComponent_vue_vue_type_template_id_903793bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/pages/blog/BlogLayoutComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/pages/blog/BlogLayoutComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/client/components/pages/blog/BlogLayoutComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogLayoutComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BlogLayoutComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/blog/BlogLayoutComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogLayoutComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/components/pages/blog/BlogLayoutComponent.vue?vue&type=template&id=903793bc&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/client/components/pages/blog/BlogLayoutComponent.vue?vue&type=template&id=903793bc& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogLayoutComponent_vue_vue_type_template_id_903793bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BlogLayoutComponent.vue?vue&type=template&id=903793bc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/blog/BlogLayoutComponent.vue?vue&type=template&id=903793bc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogLayoutComponent_vue_vue_type_template_id_903793bc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogLayoutComponent_vue_vue_type_template_id_903793bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);