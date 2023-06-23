(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/stores/StoreHeaderTwoComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shared/stores/StoreHeaderTwoComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../data/constant */ "./resources/js/data/constant.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    user: Object
  },
  methods: {
    getLocation: function getLocation(country, state) {
      var tempCountry = _data_constant__WEBPACK_IMPORTED_MODULE_0__["COUNTRIES"].find(function (item) {
        return item.id == country;
      });
      var tempState = {
        text: "Unknown"
      };

      if (!tempCountry) {
        tempCountry = {
          text: "Unknown"
        };
      } else {
        tempState = _data_constant__WEBPACK_IMPORTED_MODULE_0__["STATES"][country].find(function (item) {
          return item.id == state;
        });

        if (!tempState) {
          tempState = {
            text: "Unknown"
          };
        }
      }

      return tempState.text + ", " + tempCountry.text;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/stores/StoreHeaderTwoComponent.vue?vue&type=template&id=a97c452e&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shared/stores/StoreHeaderTwoComponent.vue?vue&type=template&id=a97c452e& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
  return _vm.user.vendor
    ? _c("div", { staticClass: "store-header store-with-banner" }, [
        _c("figure", [
          _vm.user.vendor.banner
            ? _c("img", {
                directives: [
                  {
                    name: "lazy",
                    rawName: "v-lazy",
                    value: _vm.$root.getUrl(
                      _vm.user.vendor.banner.copy_link,
                      true
                    ),
                    expression:
                      "\n\t\t\t\t$root.getUrl(\n\t\t\t\t\tuser.vendor.banner.copy_link, true\n\t\t\t\t)\n\t\t\t"
                  }
                ],
                attrs: {
                  alt: "vendor",
                  width: _vm.user.vendor.banner.width,
                  height: _vm.user.vendor.banner.height
                }
              })
            : _c("img", {
                directives: [
                  {
                    name: "lazy",
                    rawName: "v-lazy",
                    value: _vm.$root.getUrl(
                      "server/images/placeholder-img-100x100.png"
                    ),
                    expression:
                      "\n\t\t\t\t$root.getUrl(\n\t\t\t\t\t'server/images/placeholder-img-100x100.png'\n\t\t\t\t)\n\t\t\t"
                  }
                ],
                attrs: { alt: "vendor", width: "100", height: "100" }
              })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "store-details" }, [
          _c("div", { staticClass: "seller-avatar" }, [
            _vm.user.vendor.profile
              ? _c("img", {
                  directives: [
                    {
                      name: "lazy",
                      rawName: "v-lazy",
                      value: _vm.$root.getUrl(
                        _vm.user.vendor.profile.copy_link,
                        true,
                        100
                      ),
                      expression:
                        "\n\t\t\t\t\t$root.getUrl(\n\t\t\t\t\t\tuser.vendor.profile.copy_link, true, 100\n\t\t\t\t\t)\n\t\t\t\t"
                    }
                  ],
                  attrs: { alt: "vendor", width: "100", height: "100" }
                })
              : _c("img", {
                  directives: [
                    {
                      name: "lazy",
                      rawName: "v-lazy",
                      value: _vm.$root.getUrl(
                        "server/images/placeholder-img-100x100.png"
                      ),
                      expression:
                        "\n\t\t\t\t\t$root.getUrl(\n\t\t\t\t\t\t'server/images/placeholder-img-100x100.png'\n\t\t\t\t\t)\n\t\t\t\t"
                    }
                  ],
                  attrs: { alt: "vendor", width: "100", height: "100" }
                })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "store-data" }, [
            _c("h1", { staticClass: "store-title" }, [
              _vm._v(_vm._s(_vm.user.vendor.store_name))
            ]),
            _vm._v(" "),
            _c("ul", { staticClass: "store-info-list" }, [
              _c("li", [
                _c("span", { staticClass: "store-address" }, [
                  _vm._v(
                    _vm._s(
                      _vm.getLocation(
                        _vm.user.vendor.country,
                        _vm.user.vendor.state
                      )
                    )
                  )
                ])
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  _vm._s(_vm.user.rating) +
                    " rating from " +
                    _vm._s(_vm.user.approved_reviews_count) +
                    " review"
                )
              ])
            ])
          ])
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/client/components/shared/stores/StoreHeaderTwoComponent.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/client/components/shared/stores/StoreHeaderTwoComponent.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StoreHeaderTwoComponent_vue_vue_type_template_id_a97c452e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StoreHeaderTwoComponent.vue?vue&type=template&id=a97c452e& */ "./resources/js/client/components/shared/stores/StoreHeaderTwoComponent.vue?vue&type=template&id=a97c452e&");
/* harmony import */ var _StoreHeaderTwoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StoreHeaderTwoComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/components/shared/stores/StoreHeaderTwoComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StoreHeaderTwoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StoreHeaderTwoComponent_vue_vue_type_template_id_a97c452e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StoreHeaderTwoComponent_vue_vue_type_template_id_a97c452e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/shared/stores/StoreHeaderTwoComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/shared/stores/StoreHeaderTwoComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/client/components/shared/stores/StoreHeaderTwoComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreHeaderTwoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StoreHeaderTwoComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/stores/StoreHeaderTwoComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreHeaderTwoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/components/shared/stores/StoreHeaderTwoComponent.vue?vue&type=template&id=a97c452e&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/client/components/shared/stores/StoreHeaderTwoComponent.vue?vue&type=template&id=a97c452e& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreHeaderTwoComponent_vue_vue_type_template_id_a97c452e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StoreHeaderTwoComponent.vue?vue&type=template&id=a97c452e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/stores/StoreHeaderTwoComponent.vue?vue&type=template&id=a97c452e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreHeaderTwoComponent_vue_vue_type_template_id_a97c452e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreHeaderTwoComponent_vue_vue_type_template_id_a97c452e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);