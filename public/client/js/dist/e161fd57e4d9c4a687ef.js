(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/account/order/AccountOrdersComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/pages/account/order/AccountOrdersComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_format_parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-format-parse */ "./node_modules/date-format-parse/es/index.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      orders: []
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])("setting", ["formatPrice"])), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])("user", ["getUser"])),
  created: function () {
    var _created = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return window.axios.get("/web/customer-orders/" + this.getUser.email);

            case 2:
              response = _context.sent;
              this.orders = response.data.orders;

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function created() {
      return _created.apply(this, arguments);
    }

    return created;
  }(),
  methods: {
    fullDate: function fullDate(date) {
      return Object(date_format_parse__WEBPACK_IMPORTED_MODULE_1__["format"])(date, "MMMM DD, YYYY");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/account/order/AccountOrdersComponent.vue?vue&type=template&id=3b3f378c&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/pages/account/order/AccountOrdersComponent.vue?vue&type=template&id=3b3f378c& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "div",
      { staticClass: "order-table-container" },
      [
        _c("table", { staticClass: "table table-order" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            [
              _vm.orders.length
                ? _vm._l(_vm.orders, function(order, index) {
                    return _c("tr", { key: index }, [
                      _c(
                        "td",
                        { staticClass: "order-id" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "btn-link",
                              attrs: { to: "/pages/account/orders/" + order.id }
                            },
                            [_vm._v("#" + _vm._s(order.id))]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("td", { staticClass: "order-date" }, [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t" +
                            _vm._s(_vm.fullDate(order.created_at)) +
                            "\n\t\t\t\t\t\t"
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "order-status" }, [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t" +
                            _vm._s(order.status) +
                            "\n\t\t\t\t\t\t"
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "order-price" }, [
                        _c(
                          "span",
                          { staticClass: "total-price" },
                          [
                            order.order_refunded_price < 0
                              ? [
                                  _c("span", {
                                    staticClass: "order-old-price",
                                    domProps: {
                                      innerHTML: _vm._s(
                                        _vm.formatPrice(order.order_total_price)
                                      )
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("span", {
                                    staticClass: "order-new-price",
                                    domProps: {
                                      innerHTML: _vm._s(
                                        _vm.formatPrice(
                                          order.order_total_price * 1.0 +
                                            order.order_refunded_price * 1.0
                                        )
                                      )
                                    }
                                  })
                                ]
                              : [
                                  _c("span", {
                                    domProps: {
                                      innerHTML: _vm._s(
                                        _vm.formatPrice(order.order_total_price)
                                      )
                                    }
                                  })
                                ]
                          ],
                          2
                        ),
                        _vm._v("\n\t\t\t\t\t\t\tfor\n\t\t\t\t\t\t\t"),
                        _c("span", { staticClass: "total-items" }, [
                          _vm._v(
                            _vm._s(order.order_total_qty) +
                              " item" +
                              _vm._s(order.order_total_qty > 1 ? "s" : "")
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "order-action" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "btn btn-primary",
                              attrs: { to: "/pages/account/orders/" + order.id }
                            },
                            [_vm._v("\n\t\t\t\t\t\t\t\tView\n\t\t\t\t\t\t\t")]
                          )
                        ],
                        1
                      )
                    ])
                  })
                : _c("tr", [
                    _c(
                      "td",
                      { staticClass: "text-center", attrs: { colspan: "5" } },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\tNo Order has been made yet.\n\t\t\t\t\t"
                        )
                      ]
                    )
                  ])
            ],
            2
          )
        ]),
        _vm._v(" "),
        _vm.orders.length === 0
          ? _c(
              "router-link",
              {
                staticClass: "btn btn-primary text-transform-none mb-2",
                attrs: { to: "/shop/default" }
              },
              [_vm._v("Go Shop")]
            )
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "order-id" }, [_vm._v("Order")]),
        _vm._v(" "),
        _c("th", { staticClass: "order-date" }, [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", { staticClass: "order-status" }, [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", { staticClass: "order-price" }, [_vm._v("Total")]),
        _vm._v(" "),
        _c("th", { staticClass: "order-action" }, [_vm._v("Actions")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/client/components/pages/account/order/AccountOrdersComponent.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/client/components/pages/account/order/AccountOrdersComponent.vue ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccountOrdersComponent_vue_vue_type_template_id_3b3f378c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountOrdersComponent.vue?vue&type=template&id=3b3f378c& */ "./resources/js/client/components/pages/account/order/AccountOrdersComponent.vue?vue&type=template&id=3b3f378c&");
/* harmony import */ var _AccountOrdersComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountOrdersComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/components/pages/account/order/AccountOrdersComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AccountOrdersComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountOrdersComponent_vue_vue_type_template_id_3b3f378c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AccountOrdersComponent_vue_vue_type_template_id_3b3f378c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/pages/account/order/AccountOrdersComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/pages/account/order/AccountOrdersComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/client/components/pages/account/order/AccountOrdersComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountOrdersComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountOrdersComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/account/order/AccountOrdersComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountOrdersComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/components/pages/account/order/AccountOrdersComponent.vue?vue&type=template&id=3b3f378c&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/client/components/pages/account/order/AccountOrdersComponent.vue?vue&type=template&id=3b3f378c& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountOrdersComponent_vue_vue_type_template_id_3b3f378c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountOrdersComponent.vue?vue&type=template&id=3b3f378c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/account/order/AccountOrdersComponent.vue?vue&type=template&id=3b3f378c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountOrdersComponent_vue_vue_type_template_id_3b3f378c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountOrdersComponent_vue_vue_type_template_id_3b3f378c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);