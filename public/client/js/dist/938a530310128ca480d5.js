(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[68],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/OrderCompleteComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/pages/OrderCompleteComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_format_parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-format-parse */ "./node_modules/date-format-parse/es/index.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _data_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data/constant */ "./resources/js/data/constant.js");


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



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      order: null,
      subOrders: []
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])("cart", ["billingAddress"])), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])("user", ["isCustomer", "getUser"])), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])("setting", ["formatPrice", "getSetting"])), {}, {
    discountPrice: function discountPrice() {
      return this.order.coupons.reduce(function (acc, cur) {
        return acc + cur.coupon_amount * 1.0;
      }, 0);
    },
    orderSubtotal: function orderSubtotal() {
      return this.order.items.reduce(function (acc, cur) {
        return acc + cur.net_revenue * 1.0 + cur.coupon_amount * 1.0;
      }, 0);
    },
    billingAddressHtml: function billingAddressHtml() {
      var html = this.order.billing_first_name + " " + this.order.billing_last_name + "<br />";

      if (this.order.billing_company) {
        html += this.order.billing_company + "<br />";
      }

      html += this.order.billing_street_1;

      if (this.order.billing_street_2) {
        html += ", " + this.order.billing_street_2;
      }

      html += "<br />";
      html += this.order.billing_city + ", " + this.order.billing_state + " " + this.order.billing_postcode + "<br />";
      html += this.countryFullName(this.order.billing_country) + "<br />";
      html += "<p>" + this.order.billing_phone + "</p>";
      html += "<p>" + this.order.billing_email + "</p>";
      return html;
    },
    shippingAddressHtml: function shippingAddressHtml() {
      var html = this.order.shipping_first_name + " " + this.order.shipping_last_name + "<br />";

      if (this.order.shipping_company) {
        html += this.order.shipping_company + "<br />";
      }

      html += this.order.shipping_street_1;

      if (this.order.shipping_street_2) {
        html += ", " + this.order.shipping_street_2;
      }

      html += "<br />";
      html += this.order.shipping_city + ", " + this.order.shipping_state + " " + this.order.shipping_postcode + "<br />";
      html += this.countryFullName(this.order.shipping_country) + "<br />";
      return html;
    }
  }),
  created: function () {
    var _created = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _this = this;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return window.axios.get("/web/order-detail/" + this.$route.params.id, {
                params: {
                  customer: this.isCustomer ? this.getUser.email : this.billingAddress.email
                }
              }).then(function (response) {
                _this.clearCart();

                _this.order = response.data.order;
                _this.subOrders = response.data.subOrders;
              })["catch"](function (error) {
                _this.$router.push("/pages/404");
              });

            case 2:
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
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapMutations"])("cart", {
    clearCart: "CLEAR_CART"
  })), {}, {
    fullDate: function fullDate(date) {
      return Object(date_format_parse__WEBPACK_IMPORTED_MODULE_1__["format"])(date, "MMMM DD, YYYY");
    },
    countryFullName: function countryFullName(countryCode) {
      return _data_constant__WEBPACK_IMPORTED_MODULE_3__["COUNTRIES"].find(function (country) {
        return country.id === countryCode;
      }).text;
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/OrderCompleteComponent.vue?vue&type=template&id=3131c5f4&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/pages/OrderCompleteComponent.vue?vue&type=template&id=3131c5f4& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
    _vm.order
      ? _c("div", { staticClass: "container order-complete-container mb-5" }, [
          _c(
            "ul",
            {
              staticClass:
                "checkout-progress-bar d-flex justify-content-center flex-wrap"
            },
            [
              _c(
                "li",
                { staticClass: "prev" },
                [
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: "/pages/cart",
                        "exact-active-class": "active"
                      }
                    },
                    [_vm._v("Shopping Cart")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "prev" },
                [
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: "/pages/checkout",
                        "exact-active-class": "active"
                      }
                    },
                    [_vm._v("Checkout")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("li", [
                _c(
                  "a",
                  {
                    class: { active: _vm.$route.path.includes("order") },
                    attrs: { href: "#" }
                  },
                  [_vm._v("Order Complete")]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c("p", [_vm._v("Thank you. Your order has been received.")]),
          _vm._v(" "),
          _c("ul", { staticClass: "mb-3" }, [
            _c("li", [
              _vm._v("\n                    Order number: "),
              _c("strong", [_vm._v(_vm._s(_vm.order.id))])
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v("\n                    Date: "),
              _c("strong", [_vm._v(_vm._s(_vm.fullDate(_vm.order.created_at)))])
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v("\n                    Email: "),
              _c("strong", [_vm._v(_vm._s(_vm.order.customer_email))])
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v("\n                    Total:\n                    "),
              _c("strong", {
                domProps: {
                  innerHTML: _vm._s(
                    _vm.formatPrice(_vm.order.order_total_price)
                  )
                }
              })
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v("\n                    Payment method: "),
              _c("strong", [_vm._v(_vm._s(_vm.order.payment_method))])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "order-details mb-3" }, [
            _c("h4", { staticClass: "title mb-0" }, [_vm._v("Order Details")]),
            _vm._v(" "),
            _c("table", { staticClass: "table table-order-detail" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.order.items, function(item, index) {
                  return _c("tr", { key: "order-item-" + index }, [
                    _c(
                      "td",
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              to: "/product/default/" + item.product.slug
                            }
                          },
                          [
                            _c("h4", { staticClass: "product-title" }, [
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(item.name) +
                                  " x\n                                    "
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c("strong", { staticClass: "product-count" }, [
                          _vm._v(
                            "\n                                    " +
                              _vm._s(item.qty) +
                              "\n                                "
                          )
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("td", {
                      staticClass: "product-price",
                      domProps: {
                        innerHTML: _vm._s(
                          _vm.formatPrice(
                            item.net_revenue * 1.0 + item.coupon_amount * 1.0
                          )
                        )
                      }
                    })
                  ])
                }),
                0
              ),
              _vm._v(" "),
              _c("tfoot", [
                _c("tr", [
                  _c("th", [_vm._v("Subtotal:")]),
                  _vm._v(" "),
                  _c("td", {
                    domProps: {
                      innerHTML: _vm._s(_vm.formatPrice(_vm.orderSubtotal))
                    }
                  })
                ]),
                _vm._v(" "),
                _vm.discountPrice > 0
                  ? _c("tr", [
                      _c("th", [_vm._v("Discount:")]),
                      _vm._v(" "),
                      _c("td", {
                        staticClass: "discount-price",
                        domProps: {
                          innerHTML: _vm._s(_vm.formatPrice(-_vm.discountPrice))
                        }
                      })
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.order.shipping_method
                  ? _c("tr", [
                      _c("th", [_vm._v("Shipping:")]),
                      _vm._v(" "),
                      _c("td", { staticClass: "shipping-method" }, [
                        _c("span", {
                          domProps: {
                            innerHTML: _vm._s(
                              _vm.formatPrice(_vm.order.shipping_cost)
                            )
                          }
                        }),
                        _vm._v(" "),
                        _c("sub", [_vm._v("via")]),
                        _vm._v(
                          " " +
                            _vm._s(_vm.order.shipping_method) +
                            "\n                            "
                        )
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.getSetting("enable_tax") === "1"
                  ? _c("tr", [
                      _c("th", [_vm._v("Tax")]),
                      _vm._v(" "),
                      _c("td", {
                        staticClass: "tax-amount",
                        domProps: {
                          innerHTML: _vm._s(
                            _vm.formatPrice(_vm.order.order_tax)
                          )
                        }
                      })
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("tr", [
                  _c("th", [_vm._v("Payment method:")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "payment-method" }, [
                    _vm._v(
                      "\n                                " +
                        _vm._s(_vm.order.payment_method) +
                        "\n                            "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", [_vm._v("Total:")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "total-price" }, [
                    _c("span", {
                      domProps: {
                        innerHTML: _vm._s(
                          _vm.formatPrice(_vm.order.order_total_price)
                        )
                      }
                    })
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "address col-md-6" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "address-box" }, [
                _c("address", {
                  domProps: { innerHTML: _vm._s(_vm.billingAddressHtml) }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "address col-md-6" }, [
              _vm._m(2),
              _vm._v(" "),
              _c("div", { staticClass: "address-box" }, [
                _c("address", {
                  domProps: { innerHTML: _vm._s(_vm.shippingAddressHtml) }
                })
              ])
            ])
          ]),
          _vm._v(" "),
          _vm.subOrders.length > 0
            ? _c("div", { staticClass: "order-details mb-3 mt-2" }, [
                _c("h4", { staticClass: "title mb-1" }, [_vm._v("Sub Orders")]),
                _vm._v(" "),
                _vm._m(3),
                _vm._v(" "),
                _c("table", { staticClass: "table table-order-detail" }, [
                  _vm._m(4),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.subOrders, function(subOrder, index) {
                      return _c("tr", { key: "order-item-" + index }, [
                        _c("td", [
                          _vm._v(
                            "\n                                " +
                              _vm._s(subOrder.id) +
                              "\n                            "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "\n                                " +
                              _vm._s(subOrder.created_at) +
                              "\n                            "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "\n                                " +
                              _vm._s(subOrder.status) +
                              "\n                            "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c("span", {
                            domProps: {
                              innerHTML: _vm._s(
                                _vm.formatPrice(subOrder.order_total_price)
                              )
                            }
                          }),
                          _vm._v(
                            "\n                                for " +
                              _vm._s(subOrder.order_total_qty) +
                              " items(s)\n                            "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "btn btn-shop",
                                attrs: {
                                  to: "/pages/account/orders/" + subOrder.id
                                }
                              },
                              [_vm._v("View")]
                            )
                          ],
                          1
                        )
                      ])
                    }),
                    0
                  )
                ])
              ])
            : _vm._e()
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Product")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "heading d-flex mb-0" }, [
      _c("h4", { staticClass: "title mb-0" }, [_vm._v("Billing Address")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "heading d-flex mb-0" }, [
      _c("h4", { staticClass: "title mb-0" }, [
        _vm._v(
          "\n                            Shipping Address\n                        "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("strong", [_vm._v("Note:")]),
      _vm._v(
        " This order has products from multiple\n                    vendors. Each order will be handled by individual vendor\n                    independently.\n                "
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Order")]),
        _vm._v(" "),
        _c("th", [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total")]),
        _vm._v(" "),
        _c("th")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/client/components/pages/OrderCompleteComponent.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/client/components/pages/OrderCompleteComponent.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OrderCompleteComponent_vue_vue_type_template_id_3131c5f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderCompleteComponent.vue?vue&type=template&id=3131c5f4& */ "./resources/js/client/components/pages/OrderCompleteComponent.vue?vue&type=template&id=3131c5f4&");
/* harmony import */ var _OrderCompleteComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderCompleteComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/components/pages/OrderCompleteComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OrderCompleteComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OrderCompleteComponent_vue_vue_type_template_id_3131c5f4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OrderCompleteComponent_vue_vue_type_template_id_3131c5f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/pages/OrderCompleteComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/pages/OrderCompleteComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/client/components/pages/OrderCompleteComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderCompleteComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderCompleteComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/OrderCompleteComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderCompleteComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/components/pages/OrderCompleteComponent.vue?vue&type=template&id=3131c5f4&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/client/components/pages/OrderCompleteComponent.vue?vue&type=template&id=3131c5f4& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderCompleteComponent_vue_vue_type_template_id_3131c5f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderCompleteComponent.vue?vue&type=template&id=3131c5f4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/OrderCompleteComponent.vue?vue&type=template&id=3131c5f4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderCompleteComponent_vue_vue_type_template_id_3131c5f4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderCompleteComponent_vue_vue_type_template_id_3131c5f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);