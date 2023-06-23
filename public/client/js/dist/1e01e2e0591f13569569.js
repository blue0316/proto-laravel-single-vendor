(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[90],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/quantity-input/HorizontalQuantityInputComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shared/quantity-input/HorizontalQuantityInputComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    product: Object,
    quantity: {
      type: Number,
      "default": 1
    }
  },
  data: function data() {
    return {
      qty: 1
    };
  },
  watch: {
    product: function product() {
      if (this.product.qty) {
        this.qty = this.product.qty;
      } else {
        this.qty = 1;
      }
    }
  },
  created: function created() {
    if (this.product.qty) {
      this.qty = this.product.qty;
    }
  },
  methods: {
    countUp: function countUp() {
      if (this.product.manage_stock && this.product.stock_quantity <= this.qty) {
        return;
      }

      if (this.product.sold_individually) return;
      this.qty += 1;
      this.$emit("change-qty", this.product.id, this.qty, this.product.excerpts);
    },
    countDown: function countDown() {
      if (this.qty == 1) return;
      this.qty -= 1;
      this.$emit("change-qty", this.product.id, this.qty, this.product.excerpts);
    },
    changeQty: function changeQty() {
      this.$emit("change-qty", this.product.id, this.qty, this.product.excerpts);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/quantity-input/HorizontalQuantityInputComponent.vue?vue&type=template&id=06e368f2&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shared/quantity-input/HorizontalQuantityInputComponent.vue?vue&type=template&id=06e368f2& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "product-single-qty" }, [
    _c(
      "div",
      {
        staticClass:
          "input-group bootstrap-touchspin bootstrap-touchspin-injected"
      },
      [
        _c("span", { staticClass: "input-group-btn input-group-prepend" }, [
          _c("button", {
            staticClass:
              "btn btn-outline btn-down-icon bootstrap-touchspin-down",
            attrs: { type: "button" },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.countDown.apply(null, arguments)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model.number",
              value: _vm.qty,
              expression: "qty",
              modifiers: { number: true }
            }
          ],
          staticClass: "horizontal-quantity form-control",
          attrs: {
            type: "number",
            max:
              _vm.product.manage_stock && _vm.product.stock_quantity > 0
                ? _vm.product.stock_quantity
                : undefined
          },
          domProps: { value: _vm.qty },
          on: {
            input: [
              function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.qty = _vm._n($event.target.value)
              },
              _vm.changeQty
            ],
            blur: function($event) {
              return _vm.$forceUpdate()
            }
          }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "input-group-btn input-group-append" }, [
          _c("button", {
            staticClass: "btn btn-outline btn-up-icon bootstrap-touchspin-up",
            attrs: { type: "button" },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.countUp.apply(null, arguments)
              }
            }
          })
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/client/components/shared/quantity-input/HorizontalQuantityInputComponent.vue":
/*!***************************************************************************************************!*\
  !*** ./resources/js/client/components/shared/quantity-input/HorizontalQuantityInputComponent.vue ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HorizontalQuantityInputComponent_vue_vue_type_template_id_06e368f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HorizontalQuantityInputComponent.vue?vue&type=template&id=06e368f2& */ "./resources/js/client/components/shared/quantity-input/HorizontalQuantityInputComponent.vue?vue&type=template&id=06e368f2&");
/* harmony import */ var _HorizontalQuantityInputComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HorizontalQuantityInputComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/components/shared/quantity-input/HorizontalQuantityInputComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HorizontalQuantityInputComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HorizontalQuantityInputComponent_vue_vue_type_template_id_06e368f2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HorizontalQuantityInputComponent_vue_vue_type_template_id_06e368f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/shared/quantity-input/HorizontalQuantityInputComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/shared/quantity-input/HorizontalQuantityInputComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/client/components/shared/quantity-input/HorizontalQuantityInputComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalQuantityInputComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalQuantityInputComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/quantity-input/HorizontalQuantityInputComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalQuantityInputComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/components/shared/quantity-input/HorizontalQuantityInputComponent.vue?vue&type=template&id=06e368f2&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/client/components/shared/quantity-input/HorizontalQuantityInputComponent.vue?vue&type=template&id=06e368f2& ***!
  \**********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalQuantityInputComponent_vue_vue_type_template_id_06e368f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalQuantityInputComponent.vue?vue&type=template&id=06e368f2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/quantity-input/HorizontalQuantityInputComponent.vue?vue&type=template&id=06e368f2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalQuantityInputComponent_vue_vue_type_template_id_06e368f2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalQuantityInputComponent_vue_vue_type_template_id_06e368f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);