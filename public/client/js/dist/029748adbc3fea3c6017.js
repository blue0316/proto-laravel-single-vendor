(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[77],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/account/address/AccountAddressesComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/pages/account/address/AccountAddressesComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _data_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../data/constant */ "./resources/js/data/constant.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("user", ["getUser", "billingAddressExists", "shippingAddressExists"])), {}, {
    billingAddress: function billingAddress() {
      if (!this.billingAddressExists) {
        return "You have not set up this type of address yet. <br />";
      }

      var html = this.getUser.billing_first_name + " " + this.getUser.billing_last_name + "<br />";

      if (this.getUser.billing_company) {
        html += this.getUser.billing_company + "<br />";
      }

      html += this.getUser.billing_address_1;

      if (this.getUser.billing_address_2) {
        html += ", " + this.getUser.billing_address_2;
      }

      html += "<br />";
      html += this.getUser.billing_city + ", " + this.getUser.billing_state + " " + this.getUser.billing_postcode + "<br />";
      html += this.countryFullName(this.getUser.billing_country) + "<br />";
      html += "<p>" + this.getUser.billing_phone + "</p>";
      html += "<p>" + this.getUser.billing_email + "</p>";
      return html;
    },
    shippingAddress: function shippingAddress() {
      if (!this.shippingAddressExists) {
        return "You have not set this type of address yet. <br />";
      }

      var html = this.getUser.shipping_first_name + " " + this.getUser.shipping_last_name + "<br />";

      if (this.getUser.shipping_company) {
        html += this.getUser.shipping_company + "<br />";
      }

      html += this.getUser.shipping_address_1;

      if (this.getUser.shipping_address_2) {
        html += ", " + this.getUser.shipping_address_2;
      }

      html += "<br />";
      html += this.getUser.shipping_city + ", " + this.getUser.shipping_state + " " + this.getUser.shipping_postcode + "<br />";
      html += this.countryFullName(this.getUser.shipping_country) + "<br />";
      return html;
    }
  }),
  methods: {
    countryFullName: function countryFullName(countryCode) {
      return _data_constant__WEBPACK_IMPORTED_MODULE_1__["COUNTRIES"].filter(function (country) {
        return country.id === countryCode;
      })[0].text;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/account/address/AccountAddressesComponent.vue?vue&type=template&id=631081dd&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/pages/account/address/AccountAddressesComponent.vue?vue&type=template&id=631081dd& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "addresses-content" }, [
    _c("p", { staticClass: "mb-3" }, [
      _vm._v(
        "\n\t\tThe following addresses will be used on the checkout page by\n\t\tdefault.\n\t"
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "address col-md-6" },
        [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "address-box mb-2" }, [
            _c("address", {
              domProps: { innerHTML: _vm._s(_vm.billingAddress) }
            })
          ]),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "btn btn-default address-action",
              attrs: { to: "/pages/account/addresses/billing" }
            },
            [
              _vm._v(
                _vm._s(
                  _vm.billingAddressExists ? "Edit Address" : "Add Address"
                )
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "address col-md-6" },
        [
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "address-box mb-2" }, [
            _c("address", {
              domProps: { innerHTML: _vm._s(_vm.shippingAddress) }
            })
          ]),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "btn btn-default address-action",
              attrs: { to: "/pages/account/addresses/shipping" }
            },
            [
              _vm._v(
                _vm._s(
                  _vm.shippingAddressExists ? "Edit Address" : "Add Address"
                )
              )
            ]
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "heading d-flex mb-1" }, [
      _c("h4", { staticClass: "text-dark mb-0" }, [_vm._v("Billing address")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "heading d-flex mb-1" }, [
      _c("h4", { staticClass: "text-dark mb-0" }, [
        _vm._v("\n\t\t\t\t\tShipping address\n\t\t\t\t")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/client/components/pages/account/address/AccountAddressesComponent.vue":
/*!********************************************************************************************!*\
  !*** ./resources/js/client/components/pages/account/address/AccountAddressesComponent.vue ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccountAddressesComponent_vue_vue_type_template_id_631081dd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountAddressesComponent.vue?vue&type=template&id=631081dd& */ "./resources/js/client/components/pages/account/address/AccountAddressesComponent.vue?vue&type=template&id=631081dd&");
/* harmony import */ var _AccountAddressesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountAddressesComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/components/pages/account/address/AccountAddressesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AccountAddressesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountAddressesComponent_vue_vue_type_template_id_631081dd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AccountAddressesComponent_vue_vue_type_template_id_631081dd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/pages/account/address/AccountAddressesComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/pages/account/address/AccountAddressesComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/client/components/pages/account/address/AccountAddressesComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountAddressesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountAddressesComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/account/address/AccountAddressesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountAddressesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/components/pages/account/address/AccountAddressesComponent.vue?vue&type=template&id=631081dd&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/client/components/pages/account/address/AccountAddressesComponent.vue?vue&type=template&id=631081dd& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountAddressesComponent_vue_vue_type_template_id_631081dd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountAddressesComponent.vue?vue&type=template&id=631081dd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/account/address/AccountAddressesComponent.vue?vue&type=template&id=631081dd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountAddressesComponent_vue_vue_type_template_id_631081dd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountAddressesComponent_vue_vue_type_template_id_631081dd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);