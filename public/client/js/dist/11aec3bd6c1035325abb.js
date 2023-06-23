(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[82],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/products/shared/ProductNavComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/products/shared/ProductNavComponent.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    prevProduct: Object,
    nextProduct: Object
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/products/shared/ProductNavComponent.vue?vue&type=template&id=4ad80aa7&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/products/shared/ProductNavComponent.vue?vue&type=template&id=4ad80aa7& ***!
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
  return _c("div", { staticClass: "product-nav" }, [
    _c(
      "div",
      { staticClass: "product-prev", class: { disabled: !_vm.prevProduct } },
      [
        _vm.prevProduct
          ? _c(
              "router-link",
              {
                attrs: {
                  to: {
                    params: {
                      slug: _vm.prevProduct.slug
                    }
                  }
                }
              },
              [
                _c("span", { staticClass: "product-link" }),
                _vm._v(" "),
                _c("span", { staticClass: "product-popup" }, [
                  _c("span", { staticClass: "box-content" }, [
                    _vm.prevProduct.media.length > 0
                      ? _c("img", {
                          directives: [
                            {
                              name: "lazy",
                              rawName: "v-lazy",
                              value: _vm.$root.getUrl(
                                _vm.prevProduct.media[0].copy_link,
                                true,
                                150
                              ),
                              expression:
                                "\n                            $root.getUrl(\n                                prevProduct.media[0]\n                                    .copy_link,\n                                true,\n                                150\n                            )\n                        "
                            }
                          ],
                          key: "product-image",
                          attrs: {
                            alt: _vm.prevProduct.media[0].alt_text
                              ? _vm.prevProduct.media[0].alt_text
                              : "product",
                            width: "150",
                            height: "150"
                          }
                        })
                      : _c("img", {
                          key: "placeholder",
                          attrs: {
                            src: _vm.$root.getUrl(
                              "server/images/placeholder-img-150x150.png"
                            ),
                            alt: "product",
                            width: "150",
                            height: "150"
                          }
                        }),
                    _vm._v(" "),
                    _c("span", [_vm._v(_vm._s(_vm.prevProduct.name))])
                  ])
                ])
              ]
            )
          : _c("a", { attrs: { href: "javascript:;" } }, [
              _c("div", { staticClass: "product-link" })
            ])
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "product-next", class: { disabled: !_vm.nextProduct } },
      [
        _vm.nextProduct
          ? _c(
              "router-link",
              {
                attrs: {
                  to: {
                    params: {
                      slug: _vm.nextProduct.slug
                    }
                  }
                }
              },
              [
                _c("span", { staticClass: "product-link" }),
                _vm._v(" "),
                _c("span", { staticClass: "product-popup" }, [
                  _c("span", { staticClass: "box-content" }, [
                    _vm.nextProduct.media.length > 0
                      ? _c("img", {
                          directives: [
                            {
                              name: "lazy",
                              rawName: "v-lazy",
                              value: _vm.$root.getUrl(
                                _vm.nextProduct.media[0].copy_link,
                                true,
                                150
                              ),
                              expression:
                                "\n                            $root.getUrl(\n                                nextProduct.media[0]\n                                    .copy_link,\n                                true,\n                                150\n                            )\n                        "
                            }
                          ],
                          key: "product-image",
                          attrs: {
                            alt: _vm.nextProduct.media[0].alt_text
                              ? _vm.nextProduct.media[0].alt_text
                              : "product",
                            width: "150",
                            height: "150"
                          }
                        })
                      : _c("img", {
                          key: "placeholder",
                          attrs: {
                            src: _vm.$root.getUrl(
                              "server/images/placeholder-img-150x150.png"
                            ),
                            alt: "product",
                            width: "150",
                            height: "150"
                          }
                        }),
                    _vm._v(" "),
                    _c("span", [_vm._v(_vm._s(_vm.nextProduct.name))])
                  ])
                ])
              ]
            )
          : _c("a", { attrs: { href: "javascript:;" } }, [
              _c("div", { staticClass: "product-link" })
            ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/client/components/products/shared/ProductNavComponent.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/client/components/products/shared/ProductNavComponent.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductNavComponent_vue_vue_type_template_id_4ad80aa7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductNavComponent.vue?vue&type=template&id=4ad80aa7& */ "./resources/js/client/components/products/shared/ProductNavComponent.vue?vue&type=template&id=4ad80aa7&");
/* harmony import */ var _ProductNavComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductNavComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/components/products/shared/ProductNavComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductNavComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductNavComponent_vue_vue_type_template_id_4ad80aa7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductNavComponent_vue_vue_type_template_id_4ad80aa7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/products/shared/ProductNavComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/products/shared/ProductNavComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/client/components/products/shared/ProductNavComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductNavComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductNavComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/products/shared/ProductNavComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductNavComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/components/products/shared/ProductNavComponent.vue?vue&type=template&id=4ad80aa7&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/client/components/products/shared/ProductNavComponent.vue?vue&type=template&id=4ad80aa7& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductNavComponent_vue_vue_type_template_id_4ad80aa7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductNavComponent.vue?vue&type=template&id=4ad80aa7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/products/shared/ProductNavComponent.vue?vue&type=template&id=4ad80aa7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductNavComponent_vue_vue_type_template_id_4ad80aa7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductNavComponent_vue_vue_type_template_id_4ad80aa7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);