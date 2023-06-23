(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[76],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/account/address/AccountAddressShippingComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/pages/account/address/AccountAddressShippingComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var v_select2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! v-select2-component */ "./node_modules/v-select2-component/dist/Select2.esm.js");
/* harmony import */ var _data_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../data/constant */ "./resources/js/data/constant.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Select2: v_select2_component__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      firstName: "",
      lastName: "",
      company: "",
      streetAddress1: "",
      streetAddress2: "",
      city: "",
      state: "",
      country: "",
      zip: "",
      countries: _data_constant__WEBPACK_IMPORTED_MODULE_3__["COUNTRIES"]
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])("user", ["getUser"])), {}, {
    states: function states() {
      return this.country && _data_constant__WEBPACK_IMPORTED_MODULE_3__["STATES"][this.country] ? _data_constant__WEBPACK_IMPORTED_MODULE_3__["STATES"][this.country] : [];
    }
  }),
  created: function created() {
    this.firstName = this.getUser.shipping_first_name;
    this.lastName = this.getUser.shipping_last_name;
    this.company = this.getUser.shipping_company;
    this.streetAddress1 = this.getUser.shipping_address_1;
    this.streetAddress2 = this.getUser.shipping_address_2;
    this.city = this.getUser.shipping_city;
    this.state = this.getUser.shipping_state;
    this.country = this.getUser.shipping_country;
    this.zip = this.getUser.shipping_postcode;
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapMutations"])("user", {
    setUser: "SET_USER"
  })), {}, {
    changeShippingAddress: function () {
      var _changeShippingAddress = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return window.axios.put("/web/account-shipping-address", {
                  id: this.getUser.id,
                  shipping_first_name: this.firstName,
                  shipping_last_name: this.lastName,
                  shipping_company: this.company,
                  shipping_address_1: this.streetAddress1,
                  shipping_address_2: this.streetAddress2,
                  shipping_city: this.city,
                  shipping_state: this.state,
                  shipping_country: this.country,
                  shipping_postcode: this.zip
                }).then(function (response) {
                  _this.setUser({
                    user: response.data
                  });

                  _this.$vToastify.success("Address changed successfully.");

                  _this.$router.push("./");
                })["catch"](function (error) {
                  _this.$vToastify.error(error.response.data.message);
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function changeShippingAddress() {
        return _changeShippingAddress.apply(this, arguments);
      }

      return changeShippingAddress;
    }()
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/account/address/AccountAddressShippingComponent.vue?vue&type=template&id=5b08a83d&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/pages/account/address/AccountAddressShippingComponent.vue?vue&type=template&id=5b08a83d& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "address account-content" }, [
    _c("h4", { staticClass: "title mb-3" }, [_vm._v("Shipping Address")]),
    _vm._v(" "),
    _c(
      "form",
      {
        staticClass: "mb-2",
        attrs: { action: "#" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.changeShippingAddress.apply(null, arguments)
          }
        }
      },
      [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-6" }, [
            _c("div", { staticClass: "form-group" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.firstName,
                    expression: "firstName"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", required: "" },
                domProps: { value: _vm.firstName },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.firstName = $event.target.value
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6" }, [
            _c("div", { staticClass: "form-group" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.lastName,
                    expression: "lastName"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", required: "" },
                domProps: { value: _vm.lastName },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.lastName = $event.target.value
                  }
                }
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", [_vm._v("Company ")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.company,
                expression: "company"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "text" },
            domProps: { value: _vm.company },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.company = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _vm._m(2),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.streetAddress1,
                expression: "streetAddress1"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "text",
              placeholder: "House number and street name",
              required: ""
            },
            domProps: { value: _vm.streetAddress1 },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.streetAddress1 = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.streetAddress2,
                expression: "streetAddress2"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "text",
              placeholder: "Apartment, suite, unite, etc. (optional)",
              requireds: ""
            },
            domProps: { value: _vm.streetAddress2 },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.streetAddress2 = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _vm._m(3),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.city,
                expression: "city"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "text", required: "" },
            domProps: { value: _vm.city },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.city = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "form-group" },
          [
            _vm._m(4),
            _vm._v(" "),
            _vm.states.length
              ? _c("Select2", {
                  key: "state-select2",
                  attrs: {
                    id: "state-select",
                    required: true,
                    options: _vm.states
                  },
                  model: {
                    value: _vm.state,
                    callback: function($$v) {
                      _vm.state = $$v
                    },
                    expression: "state"
                  }
                })
              : _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.state,
                      expression: "state"
                    }
                  ],
                  key: "state-input",
                  staticClass: "form-control",
                  attrs: { type: "text", required: "" },
                  domProps: { value: _vm.state },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.state = $event.target.value
                    }
                  }
                })
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _vm._m(5),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.zip,
                expression: "zip"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "text", required: "" },
            domProps: { value: _vm.zip },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.zip = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "form-group mb-3" },
          [
            _vm._m(6),
            _vm._v(" "),
            _c("Select2", {
              attrs: {
                id: "country-select",
                required: true,
                options: _vm.countries
              },
              model: {
                value: _vm.country,
                callback: function($$v) {
                  _vm.country = $$v
                },
                expression: "country"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _vm._m(7)
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("First Name "),
      _c("span", { staticClass: "required" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Last Name "),
      _c("span", { staticClass: "required" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Street Address "),
      _c("span", { staticClass: "required" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("City "),
      _c("span", { staticClass: "required" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("State/Province "),
      _c("span", { staticClass: "required" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Zip/Postal Code "),
      _c("span", { staticClass: "required" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Country "),
      _c("span", { staticClass: "required" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-footer mb-0" }, [
      _c("div", { staticClass: "form-footer-right" }, [
        _c(
          "button",
          { staticClass: "btn btn-dark py-4", attrs: { type: "submit" } },
          [_vm._v("\n\t\t\t\t\tSave Address\n\t\t\t\t")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/client/components/pages/account/address/AccountAddressShippingComponent.vue":
/*!**************************************************************************************************!*\
  !*** ./resources/js/client/components/pages/account/address/AccountAddressShippingComponent.vue ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccountAddressShippingComponent_vue_vue_type_template_id_5b08a83d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountAddressShippingComponent.vue?vue&type=template&id=5b08a83d& */ "./resources/js/client/components/pages/account/address/AccountAddressShippingComponent.vue?vue&type=template&id=5b08a83d&");
/* harmony import */ var _AccountAddressShippingComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountAddressShippingComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/components/pages/account/address/AccountAddressShippingComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AccountAddressShippingComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountAddressShippingComponent_vue_vue_type_template_id_5b08a83d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AccountAddressShippingComponent_vue_vue_type_template_id_5b08a83d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/pages/account/address/AccountAddressShippingComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/pages/account/address/AccountAddressShippingComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/client/components/pages/account/address/AccountAddressShippingComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountAddressShippingComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountAddressShippingComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/account/address/AccountAddressShippingComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountAddressShippingComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/components/pages/account/address/AccountAddressShippingComponent.vue?vue&type=template&id=5b08a83d&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/client/components/pages/account/address/AccountAddressShippingComponent.vue?vue&type=template&id=5b08a83d& ***!
  \*********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountAddressShippingComponent_vue_vue_type_template_id_5b08a83d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountAddressShippingComponent.vue?vue&type=template&id=5b08a83d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/account/address/AccountAddressShippingComponent.vue?vue&type=template&id=5b08a83d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountAddressShippingComponent_vue_vue_type_template_id_5b08a83d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountAddressShippingComponent_vue_vue_type_template_id_5b08a83d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);