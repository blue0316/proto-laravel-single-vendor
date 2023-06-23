(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/ForgotPasswordComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/pages/ForgotPasswordComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      resetEmail: ''
    };
  },
  methods: {
    resetPassword: function () {
      var _resetPassword = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return window.axios.post('/forgot-password', {
                  email: this.resetEmail
                }).then(function (response) {
                  _this.$vToastify.stopLoader();

                  _this.$vToastify.setSettings({
                    withBackdrop: false,
                    position: "top-right",
                    successDuration: 1000
                  });

                  _this.$vToastify.success("Link send successfully");
                })["catch"](function (error) {
                  _this.$vToastify.stopLoader();

                  _this.$vToastify.setSettings({
                    withBackdrop: false,
                    position: "top-right",
                    errorDuration: 1500
                  });

                  _this.$vToastify.error("Link send failed");
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function resetPassword() {
        return _resetPassword.apply(this, arguments);
      }

      return resetPassword;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/ForgotPasswordComponent.vue?vue&type=template&id=11e4115e&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/pages/ForgotPasswordComponent.vue?vue&type=template&id=11e4115e& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "page-header" }, [
      _c(
        "div",
        { staticClass: "container d-flex flex-column align-items-center" },
        [
          _c(
            "nav",
            {
              staticClass: "breadcrumb-nav",
              attrs: { "aria-label": "breadcrumb" }
            },
            [
              _c("div", { staticClass: "container" }, [
                _c("ol", { staticClass: "breadcrumb" }, [
                  _c(
                    "li",
                    { staticClass: "breadcrumb-item" },
                    [
                      _c("router-link", { attrs: { to: "/" } }, [
                        _vm._v("Home")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "breadcrumb-item" },
                    [
                      _c("router-link", { attrs: { to: "/" } }, [
                        _vm._v("Shop")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "breadcrumb-item active",
                      attrs: { "aria-current": "page" }
                    },
                    [_vm._v("\n\t\t\t\t\t\t\tMy Account\n\t\t\t\t\t\t")]
                  )
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c("h1", [_vm._v("My Account")])
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "container reset-password-container" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-6 offset-lg-3" }, [
          _c("div", { staticClass: "feature-box border-top-primary" }, [
            _c("div", { staticClass: "feature-box-content" }, [
              _c(
                "form",
                {
                  staticClass: "mb-0",
                  attrs: { action: "#" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.resetPassword.apply(null, arguments)
                    }
                  }
                },
                [
                  _c("p", [
                    _vm._v(
                      "\n\t\t\t\t\t\t\t\tLost your password? Please enter your\n\t\t\t\t\t\t\t\tusername or email address. You will receive\n\t\t\t\t\t\t\t\ta link to create a new password via email.\n\t\t\t\t\t\t\t"
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group mb-0" }, [
                    _c(
                      "label",
                      {
                        staticClass: "font-weight-normal",
                        attrs: { for: "reset-email" }
                      },
                      [_vm._v("Email")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.resetEmail,
                          expression: "resetEmail"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "email",
                        id: "reset-email",
                        name: "reset-email",
                        required: ""
                      },
                      domProps: { value: _vm.resetEmail },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.resetEmail = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-footer mb-0" },
                    [
                      _c("router-link", { attrs: { to: "/pages/login" } }, [
                        _vm._v("Click here to login")
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-md btn-primary form-footer-right font-weight-normal text-transform-none mr-0",
                          attrs: { type: "submit" }
                        },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t\t\t\t\tReset Password\n\t\t\t\t\t\t\t\t"
                          )
                        ]
                      )
                    ],
                    1
                  )
                ]
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/client/components/pages/ForgotPasswordComponent.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/client/components/pages/ForgotPasswordComponent.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ForgotPasswordComponent_vue_vue_type_template_id_11e4115e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForgotPasswordComponent.vue?vue&type=template&id=11e4115e& */ "./resources/js/client/components/pages/ForgotPasswordComponent.vue?vue&type=template&id=11e4115e&");
/* harmony import */ var _ForgotPasswordComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForgotPasswordComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/components/pages/ForgotPasswordComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ForgotPasswordComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ForgotPasswordComponent_vue_vue_type_template_id_11e4115e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ForgotPasswordComponent_vue_vue_type_template_id_11e4115e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/pages/ForgotPasswordComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/pages/ForgotPasswordComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/client/components/pages/ForgotPasswordComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPasswordComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ForgotPasswordComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/ForgotPasswordComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPasswordComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/components/pages/ForgotPasswordComponent.vue?vue&type=template&id=11e4115e&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/client/components/pages/ForgotPasswordComponent.vue?vue&type=template&id=11e4115e& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPasswordComponent_vue_vue_type_template_id_11e4115e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ForgotPasswordComponent.vue?vue&type=template&id=11e4115e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/ForgotPasswordComponent.vue?vue&type=template&id=11e4115e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPasswordComponent_vue_vue_type_template_id_11e4115e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPasswordComponent_vue_vue_type_template_id_11e4115e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);