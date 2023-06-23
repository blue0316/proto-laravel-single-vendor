(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[67],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/LoginComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/pages/LoginComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var v_select2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! v-select2-component */ "./node_modules/v-select2-component/dist/Select2.esm.js");
/* harmony import */ var vue_slide_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-slide-toggle */ "./node_modules/vue-slide-toggle/dist/vue-slide-toggle.es.js");
/* harmony import */ var _data_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/constant */ "./resources/js/data/constant.js");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Select2: v_select2_component__WEBPACK_IMPORTED_MODULE_2__["default"],
    VueSlideToggle: vue_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["VueSlideToggle"]
  },
  data: function data() {
    return {
      countries: _data_constant__WEBPACK_IMPORTED_MODULE_4__["COUNTRIES"],
      states: _data_constant__WEBPACK_IMPORTED_MODULE_4__["STATES"],
      loginEmail: "",
      loginPassword: "",
      registerEmail: "",
      registerPassword: "",
      registerRole: "customer",
      firstName: null,
      lastName: null,
      country: null,
      state: null,
      storeName: null,
      city: null,
      paypalEmail: null,
      street: null,
      phone: null
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])("setting", ["getSetting"])), {}, {
    selectStates: function selectStates() {
      return this.country && _data_constant__WEBPACK_IMPORTED_MODULE_4__["STATES"][this.country] ? _data_constant__WEBPACK_IMPORTED_MODULE_4__["STATES"][this.country] : [];
    }
  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])("user", ["login", "register"])), {}, {
    logIn: function () {
      var _logIn = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.login({
                  email: this.loginEmail,
                  password: this.loginPassword
                });

              case 2:
                result = _context.sent;

                if (result) {
                  this.$nextTick(function () {
                    window.location.reload();
                  });
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function logIn() {
        return _logIn.apply(this, arguments);
      }

      return logIn;
    }(),
    registerAccount: function () {
      var _registerAccount = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.register({
                  email: this.registerEmail,
                  password: this.registerPassword,
                  role: this.registerRole,
                  firstName: this.firstName,
                  lastName: this.lastName,
                  country: this.country,
                  state: this.state,
                  storeName: this.storeName,
                  city: this.city,
                  paypalEmail: this.paypalEmail,
                  street: this.street,
                  phone: this.phone
                });

              case 2:
                result = _context2.sent;

                if (result) {
                  this.$nextTick(function () {
                    window.location.reload();
                  });
                }

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function registerAccount() {
        return _registerAccount.apply(this, arguments);
      }

      return registerAccount;
    }()
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/LoginComponent.vue?vue&type=template&id=9613931c&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/pages/LoginComponent.vue?vue&type=template&id=9613931c& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
                    [_vm._v("My Account")]
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
    _c("div", { staticClass: "container login-container" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-10 mx-auto" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-lg-6" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "form",
                {
                  attrs: { action: "#" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.logIn.apply(null, arguments)
                    }
                  }
                },
                [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.loginEmail,
                        expression: "loginEmail"
                      }
                    ],
                    staticClass: "form-input form-wide",
                    attrs: { type: "email", id: "login-email", required: "" },
                    domProps: { value: _vm.loginEmail },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.loginEmail = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm._m(2),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.loginPassword,
                        expression: "loginPassword"
                      }
                    ],
                    staticClass: "form-input form-wide",
                    attrs: {
                      type: "password",
                      id: "login-password",
                      required: ""
                    },
                    domProps: { value: _vm.loginPassword },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.loginPassword = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-footer" },
                    [
                      _vm._m(3),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass:
                            "forget-password text-dark form-footer-right",
                          attrs: { to: "/pages/forgot-pwd" }
                        },
                        [_vm._v("Forgot Password?")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-dark btn-md w-100",
                      attrs: { type: "submit" }
                    },
                    [_vm._v("LOGIN")]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-6" }, [
              _vm._m(4),
              _vm._v(" "),
              _c(
                "form",
                {
                  attrs: { action: "#" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.registerAccount.apply(null, arguments)
                    }
                  }
                },
                [
                  _vm._m(5),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.registerEmail,
                        expression: "registerEmail"
                      }
                    ],
                    staticClass: "form-input form-wide",
                    attrs: {
                      type: "email",
                      id: "register-email",
                      required: ""
                    },
                    domProps: { value: _vm.registerEmail },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.registerEmail = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm._m(6),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.registerPassword,
                        expression: "registerPassword"
                      }
                    ],
                    staticClass: "form-input form-wide",
                    attrs: {
                      type: "password",
                      id: "register-password",
                      required: ""
                    },
                    domProps: { value: _vm.registerPassword },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.registerPassword = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.getSetting("multivendor") == "1"
                    ? [
                        _c(
                          "vue-slide-toggle",
                          { attrs: { open: _vm.registerRole == "vendor" } },
                          [
                            _c("label", [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\t\t\tFirst Name\n\t\t\t\t\t\t\t\t\t\t"
                              ),
                              _c("span", { staticClass: "required" }, [
                                _vm._v("*")
                              ])
                            ]),
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
                              staticClass: "form-input form-wide",
                              attrs: {
                                type: "text",
                                disabled: _vm.registerRole != "vendor",
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
                            }),
                            _vm._v(" "),
                            _c("label", [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\t\t\tLast Name\n\t\t\t\t\t\t\t\t\t\t"
                              ),
                              _c("span", { staticClass: "required" }, [
                                _vm._v("*")
                              ])
                            ]),
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
                              staticClass: "form-input form-wide",
                              attrs: {
                                type: "text",
                                disabled: _vm.registerRole != "vendor",
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
                            }),
                            _vm._v(" "),
                            _c("label", [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\t\t\tStore Name\n\t\t\t\t\t\t\t\t\t\t"
                              ),
                              _c("span", { staticClass: "required" }, [
                                _vm._v("*")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.storeName,
                                  expression: "storeName"
                                }
                              ],
                              staticClass: "form-input form-wide",
                              attrs: {
                                type: "text",
                                disabled: _vm.registerRole != "vendor",
                                required: ""
                              },
                              domProps: { value: _vm.storeName },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.storeName = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("label", [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\t\t\tPhone\n\t\t\t\t\t\t\t\t\t\t"
                              ),
                              _c("span", { staticClass: "required" }, [
                                _vm._v("*")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.phone,
                                  expression: "phone"
                                }
                              ],
                              staticClass: "form-input form-wide",
                              attrs: {
                                type: "text",
                                disabled: _vm.registerRole != "vendor",
                                required: ""
                              },
                              domProps: { value: _vm.phone },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.phone = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("label", [
                                  _vm._v(
                                    "\n\t\t\t\t\t\t\t\t\t\t\tCountry\n\t\t\t\t\t\t\t\t\t\t\t"
                                  ),
                                  _c("span", { staticClass: "required" }, [
                                    _vm._v("*")
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("Select2", {
                                  attrs: {
                                    id: "country",
                                    options: _vm.countries,
                                    disabled: _vm.registerRole != "vendor",
                                    requried: ""
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
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("label", [
                                  _vm._v(
                                    "\n\t\t\t\t\t\t\t\t\t\t\tState\n\t\t\t\t\t\t\t\t\t\t\t"
                                  ),
                                  _c("span", { staticClass: "required" }, [
                                    _vm._v("*")
                                  ])
                                ]),
                                _vm._v(" "),
                                _vm.selectStates.length == 0
                                  ? _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.state,
                                          expression: "state"
                                        }
                                      ],
                                      staticClass: "form-input form-wide",
                                      attrs: {
                                        type: "text",
                                        disabled: _vm.registerRole != "vendor",
                                        required: ""
                                      },
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
                                  : _c("Select2", {
                                      attrs: {
                                        id: "state",
                                        options: _vm.selectStates,
                                        disabled: _vm.registerRole != "vendor",
                                        required: ""
                                      },
                                      model: {
                                        value: _vm.state,
                                        callback: function($$v) {
                                          _vm.state = $$v
                                        },
                                        expression: "state"
                                      }
                                    })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("label", [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\t\t\tCity\n\t\t\t\t\t\t\t\t\t\t"
                              ),
                              _c("span", { staticClass: "required" }, [
                                _vm._v("*")
                              ])
                            ]),
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
                              staticClass: "form-input form-wide",
                              attrs: {
                                type: "text",
                                disabled: _vm.registerRole != "vendor",
                                required: ""
                              },
                              domProps: { value: _vm.city },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.city = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("label", [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\t\t\tStreet\n\t\t\t\t\t\t\t\t\t\t"
                              ),
                              _c("span", { staticClass: "required" }, [
                                _vm._v("*")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.street,
                                  expression: "street"
                                }
                              ],
                              staticClass: "form-input form-wide",
                              attrs: {
                                type: "text",
                                disabled: _vm.registerRole != "vendor",
                                required: ""
                              },
                              domProps: { value: _vm.street },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.street = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("label", [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\t\t\tPaypal Email\n\t\t\t\t\t\t\t\t\t\t"
                              ),
                              _c("span", { staticClass: "required" }, [
                                _vm._v("*")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.paypalEmail,
                                  expression: "paypalEmail"
                                }
                              ],
                              staticClass: "form-input form-wide",
                              attrs: {
                                type: "email",
                                disabled: _vm.registerRole != "vendor",
                                required: ""
                              },
                              domProps: { value: _vm.paypalEmail },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.paypalEmail = $event.target.value
                                }
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "custom-control custom-radio mb-0 mt-0"
                          },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.registerRole,
                                  expression: "registerRole"
                                }
                              ],
                              staticClass: "custom-control-input",
                              attrs: {
                                type: "radio",
                                name: "role",
                                value: "customer",
                                id: "customer"
                              },
                              domProps: {
                                checked: _vm._q(_vm.registerRole, "customer")
                              },
                              on: {
                                change: function($event) {
                                  _vm.registerRole = "customer"
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "custom-control-label",
                                attrs: { for: "customer" }
                              },
                              [_vm._v("I am a customer")]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "custom-control custom-radio mb-0 mt-0"
                          },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.registerRole,
                                  expression: "registerRole"
                                }
                              ],
                              staticClass: "custom-control-input",
                              attrs: {
                                type: "radio",
                                name: "role",
                                value: "vendor",
                                id: "vendor"
                              },
                              domProps: {
                                checked: _vm._q(_vm.registerRole, "vendor")
                              },
                              on: {
                                change: function($event) {
                                  _vm.registerRole = "vendor"
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "custom-control-label",
                                attrs: { for: "vendor" }
                              },
                              [_vm._v("I am a vendor")]
                            )
                          ]
                        )
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._m(7)
                ],
                2
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "heading mb-1" }, [
      _c("h2", { staticClass: "title" }, [_vm._v("Login")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "login-email" } }, [
      _vm._v("\n\t\t\t\t\t\t\t\tEmail address\n\t\t\t\t\t\t\t\t"),
      _c("span", { staticClass: "required" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "login-password" } }, [
      _vm._v("\n\t\t\t\t\t\t\t\tPassword(minLength: 5)\n\t\t\t\t\t\t\t\t"),
      _c("span", { staticClass: "required" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "custom-control custom-checkbox my-0" }, [
      _c("input", {
        staticClass: "custom-control-input",
        attrs: { type: "checkbox", id: "lost-password" }
      }),
      _vm._v(" "),
      _c(
        "label",
        {
          staticClass: "custom-control-label mb-0",
          attrs: { for: "lost-password" }
        },
        [_vm._v("Remember Me")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "heading mb-1" }, [
      _c("h2", { staticClass: "title" }, [_vm._v("Register")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "register-email" } }, [
      _vm._v("\n\t\t\t\t\t\t\t\tEmail address\n\t\t\t\t\t\t\t\t"),
      _c("span", { staticClass: "required" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "register-password" } }, [
      _vm._v("\n\t\t\t\t\t\t\t\tPassword(minLength: 5)\n\t\t\t\t\t\t\t\t"),
      _c("span", { staticClass: "required" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-footer mb-2" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-dark btn-md w-100 mr-0",
          attrs: { type: "submit" }
        },
        [_vm._v("Register")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/client/components/pages/LoginComponent.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/client/components/pages/LoginComponent.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoginComponent_vue_vue_type_template_id_9613931c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginComponent.vue?vue&type=template&id=9613931c& */ "./resources/js/client/components/pages/LoginComponent.vue?vue&type=template&id=9613931c&");
/* harmony import */ var _LoginComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/components/pages/LoginComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LoginComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoginComponent_vue_vue_type_template_id_9613931c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LoginComponent_vue_vue_type_template_id_9613931c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/pages/LoginComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/pages/LoginComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/client/components/pages/LoginComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoginComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/LoginComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/components/pages/LoginComponent.vue?vue&type=template&id=9613931c&":
/*!************************************************************************************************!*\
  !*** ./resources/js/client/components/pages/LoginComponent.vue?vue&type=template&id=9613931c& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComponent_vue_vue_type_template_id_9613931c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoginComponent.vue?vue&type=template&id=9613931c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/LoginComponent.vue?vue&type=template&id=9613931c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComponent_vue_vue_type_template_id_9613931c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComponent_vue_vue_type_template_id_9613931c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);