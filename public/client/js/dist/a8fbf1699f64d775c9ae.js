(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[72],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/account/AccountDetailsComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/pages/account/AccountDetailsComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      pwdCurrent: "",
      pwdNew: "",
      pwdConfirm: ""
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("user", ["getUser"])),
  created: function created() {
    this.firstName = this.getUser.first_name;
    this.lastName = this.getUser.last_name;
    this.email = this.getUser.email;
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("user", ["setUser"])), {}, {
    changeAccountDetails: function changeAccountDetails() {
      this.setUser({
        id: this.getUser.id,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        pwdCurrent: this.pwdCurrent,
        pwdNew: this.pwdNew,
        pwdConfirm: this.pwdConfirm
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/account/AccountDetailsComponent.vue?vue&type=template&id=9c92dd50&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/pages/account/AccountDetailsComponent.vue?vue&type=template&id=9c92dd50& ***!
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
  return _c("div", { staticClass: "account-content" }, [
    _c(
      "form",
      {
        staticClass: "mb-2",
        attrs: { action: "#" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.changeAccountDetails.apply(null, arguments)
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
                attrs: {
                  type: "text",
                  id: "acc-name",
                  name: "acc-name",
                  required: ""
                },
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
                attrs: {
                  type: "text",
                  id: "acc-lastname",
                  name: "acc-lastname",
                  required: ""
                },
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
        _c("div", { staticClass: "form-group mb-4" }, [
          _vm._m(2),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.email,
                expression: "email"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "email",
              id: "acc-email",
              name: "acc-email",
              required: ""
            },
            domProps: { value: _vm.email },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.email = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "change-password" }, [
          _c("h3", { staticClass: "text-uppercase mb-2" }, [
            _vm._v("Password Change")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "acc-password" } }, [
              _vm._v(
                "Current Password (leave blank to leave\n\t\t\t\t\tunchanged)"
              )
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.pwdCurrent,
                  expression: "pwdCurrent"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "password",
                id: "acc-password",
                name: "acc-password"
              },
              domProps: { value: _vm.pwdCurrent },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.pwdCurrent = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "acc-password" } }, [
              _vm._v("New Password (leave blank to leave unchanged)")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.pwdNew,
                  expression: "pwdNew"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "password",
                id: "acc-new-password",
                name: "acc-new-password"
              },
              domProps: { value: _vm.pwdNew },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.pwdNew = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "acc-password" } }, [
              _vm._v("Confirm New Password")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.pwdConfirm,
                  expression: "pwdConfirm"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "password",
                id: "acc-confirm-password",
                name: "acc-confirm-password"
              },
              domProps: { value: _vm.pwdConfirm },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.pwdConfirm = $event.target.value
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _vm._m(3)
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "acc-name" } }, [
      _vm._v("First name "),
      _c("span", { staticClass: "required" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "acc-lastname" } }, [
      _vm._v("Last name "),
      _c("span", { staticClass: "required" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "acc-email" } }, [
      _vm._v("Email address "),
      _c("span", { staticClass: "required" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-footer mt-3 mb-0" }, [
      _c(
        "button",
        { staticClass: "btn btn-dark mr-0", attrs: { type: "submit" } },
        [_vm._v("\n\t\t\t\tSave changes\n\t\t\t")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/client/components/pages/account/AccountDetailsComponent.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/client/components/pages/account/AccountDetailsComponent.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccountDetailsComponent_vue_vue_type_template_id_9c92dd50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountDetailsComponent.vue?vue&type=template&id=9c92dd50& */ "./resources/js/client/components/pages/account/AccountDetailsComponent.vue?vue&type=template&id=9c92dd50&");
/* harmony import */ var _AccountDetailsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountDetailsComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/components/pages/account/AccountDetailsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AccountDetailsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountDetailsComponent_vue_vue_type_template_id_9c92dd50___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AccountDetailsComponent_vue_vue_type_template_id_9c92dd50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/pages/account/AccountDetailsComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/pages/account/AccountDetailsComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/client/components/pages/account/AccountDetailsComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountDetailsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountDetailsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/account/AccountDetailsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountDetailsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/components/pages/account/AccountDetailsComponent.vue?vue&type=template&id=9c92dd50&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/client/components/pages/account/AccountDetailsComponent.vue?vue&type=template&id=9c92dd50& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountDetailsComponent_vue_vue_type_template_id_9c92dd50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountDetailsComponent.vue?vue&type=template&id=9c92dd50& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/account/AccountDetailsComponent.vue?vue&type=template&id=9c92dd50&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountDetailsComponent_vue_vue_type_template_id_9c92dd50___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountDetailsComponent_vue_vue_type_template_id_9c92dd50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);