(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[88],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/PaginationComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shared/PaginationComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    perPage: Number,
    total: Number
  },
  computed: {
    shouldRender: function shouldRender() {
      return this.total > this.perPage;
    },
    currentPage: function currentPage() {
      return parseInt(this.$route.query.page ? this.$route.query.page : 1);
    },
    lastPage: function lastPage() {
      return parseInt(this.total / this.perPage) + (this.total % this.perPage ? 1 : 0);
    },
    startIndex: function startIndex() {
      if (!this.currentPage % this.perPage) {
        return this.currentPage;
      }

      return this.perPage * parseInt(this.currentPage / this.perPage);
    },
    pagesToBeShown: function pagesToBeShown() {
      var pages = [];

      for (var i = 0; i < Math.min(this.lastPage - 2, 3); i++) {
        if (this.currentPage < 4 || this.currentPage > this.lastPage - 3) {
          if (this.currentPage < 4) {
            pages[i] = i + 2;
          }

          if (this.lastPage > 4 && this.currentPage > this.lastPage - 3) {
            pages[i] = this.lastPage - 3 + i;
          }
        } else {
          page[i] = this.currentPage - 1 + i;
        }
      }

      return pages;
    }
  },
  methods: {
    getPageUrl: function getPageUrl(page) {
      var originQuery = {};

      for (var key in this.$route.query) {
        if (key !== "page") {
          originQuery[key] = this.$route.query[key];
        }
      }

      if (page > 1) {
        originQuery.page = page;
      }

      return {
        path: this.$route.path,
        query: originQuery
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/PaginationComponent.vue?vue&type=template&id=15c67d8c&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shared/PaginationComponent.vue?vue&type=template&id=15c67d8c& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _vm.shouldRender
    ? _c(
        "ul",
        { staticClass: "pagination mb-0" },
        [
          _c(
            "li",
            {
              staticClass: "page-item",
              class: { disabled: _vm.currentPage < 2 }
            },
            [
              _c(
                "router-link",
                {
                  staticClass: "page-link page-link-btn",
                  attrs: { to: _vm.getPageUrl(_vm.currentPage - 1) }
                },
                [_c("i", { staticClass: "icon-angle-left" })]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            { staticClass: "page-item" },
            [
              _c(
                "router-link",
                {
                  staticClass: "page-link",
                  attrs: {
                    "exact-active-class": "active",
                    to: _vm.getPageUrl(1)
                  }
                },
                [_vm._v(_vm._s(1))]
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm.pagesToBeShown[0] > 2
            ? _c("li", { staticClass: "page-item" }, [
                _c("span", { staticClass: "page-link" }, [_vm._v("...")])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.pagesToBeShown.length
            ? _vm._l(_vm.pagesToBeShown, function(page) {
                return _c(
                  "li",
                  { key: "page-" + page, staticClass: "page-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "page-link",
                        attrs: {
                          "exact-active-class": "active",
                          to: _vm.getPageUrl(page)
                        }
                      },
                      [_vm._v(_vm._s(page))]
                    )
                  ],
                  1
                )
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.pagesToBeShown[_vm.pagesToBeShown.length - 1] < _vm.lastPage - 1
            ? _c("li", { staticClass: "page-item" }, [
                _c("span", { staticClass: "page-link" }, [_vm._v("...")])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.lastPage > 1
            ? _c(
                "li",
                { staticClass: "page-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "page-link",
                      attrs: {
                        "exact-active-class": "active",
                        to: _vm.getPageUrl(_vm.lastPage)
                      }
                    },
                    [_vm._v(_vm._s(_vm.lastPage))]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "li",
            {
              staticClass: "page-item",
              class: { disabled: _vm.currentPage === _vm.lastPage }
            },
            [
              _c(
                "router-link",
                {
                  staticClass: "page-link page-link-btn",
                  attrs: { to: _vm.getPageUrl(_vm.currentPage + 1) }
                },
                [_c("i", { staticClass: "icon-angle-right" })]
              )
            ],
            1
          )
        ],
        2
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/client/components/shared/PaginationComponent.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/client/components/shared/PaginationComponent.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PaginationComponent_vue_vue_type_template_id_15c67d8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaginationComponent.vue?vue&type=template&id=15c67d8c& */ "./resources/js/client/components/shared/PaginationComponent.vue?vue&type=template&id=15c67d8c&");
/* harmony import */ var _PaginationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaginationComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/components/shared/PaginationComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PaginationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PaginationComponent_vue_vue_type_template_id_15c67d8c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PaginationComponent_vue_vue_type_template_id_15c67d8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/shared/PaginationComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/shared/PaginationComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/client/components/shared/PaginationComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PaginationComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/PaginationComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/components/shared/PaginationComponent.vue?vue&type=template&id=15c67d8c&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/client/components/shared/PaginationComponent.vue?vue&type=template&id=15c67d8c& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationComponent_vue_vue_type_template_id_15c67d8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PaginationComponent.vue?vue&type=template&id=15c67d8c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/PaginationComponent.vue?vue&type=template&id=15c67d8c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationComponent_vue_vue_type_template_id_15c67d8c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationComponent_vue_vue_type_template_id_15c67d8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);