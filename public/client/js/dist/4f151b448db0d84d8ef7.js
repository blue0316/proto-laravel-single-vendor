(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/footers/FooterOneComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shared/footers/FooterOneComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    tags: Array
  },
  data: function data() {
    return {
      year: new Date().getFullYear()
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/footers/FooterOneComponent.vue?vue&type=template&id=1d5816b0&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shared/footers/FooterOneComponent.vue?vue&type=template&id=1d5816b0& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
  return _c("footer", { staticClass: "footer footer-one bg-dark" }, [
    _c("div", { staticClass: "footer-middle" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-3 col-sm-6" }, [
            _c("div", { staticClass: "widget" }, [
              _c("h4", { staticClass: "widget-title" }, [
                _vm._v("Customer Service")
              ]),
              _vm._v(" "),
              _c("ul", { staticClass: "links" }, [
                _vm._m(1),
                _vm._v(" "),
                _vm._m(2),
                _vm._v(" "),
                _vm._m(3),
                _vm._v(" "),
                _c(
                  "li",
                  [
                    _c(
                      "router-link",
                      { attrs: { to: "/pages/account/orders" } },
                      [_vm._v("Orders History")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _vm._m(4),
                _vm._v(" "),
                _c(
                  "li",
                  [
                    _c("router-link", { attrs: { to: "/pages/account" } }, [
                      _vm._v("My Account")
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _vm._m(5),
                _vm._v(" "),
                _c(
                  "li",
                  [
                    _c("router-link", { attrs: { to: "/pages/about-us" } }, [
                      _vm._v("About Us")
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _vm._m(6),
                _vm._v(" "),
                _vm._m(7)
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-3 col-sm-6" }, [
            _c("div", { staticClass: "widget" }, [
              _c("h4", { staticClass: "widget-title" }, [
                _vm._v("Popular Tags")
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "tagcloud" },
                _vm._l(_vm.tags, function(tag) {
                  return _c(
                    "router-link",
                    {
                      key: tag.id,
                      attrs: {
                        to: {
                          path: "/shop/default",
                          query: { tag: tag.slug }
                        }
                      }
                    },
                    [_vm._v(_vm._s(tag.name))]
                  )
                }),
                1
              )
            ])
          ]),
          _vm._v(" "),
          _vm._m(8)
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "container" }, [
      _c(
        "div",
        {
          staticClass:
            "footer-bottom d-flex justify-content-between align-items-center flex-wrap"
        },
        [
          _c("p", { staticClass: "footer-copyright pr-4 mb-0" }, [
            _vm._v(
              "\n\t\t\t\t© Porto eCommerce. " +
                _vm._s(_vm.year) +
                ". All\n\t\t\t\tRights Reserved\n\t\t\t"
            )
          ]),
          _vm._v(" "),
          _c("img", {
            staticClass: "footer-payments py-3",
            attrs: {
              src: _vm.$root.getUrl("client/images/payments.png"),
              alt: "payment methods",
              width: "240",
              height: "32"
            }
          })
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-3 col-sm-6" }, [
      _c("div", { staticClass: "widget mb-0" }, [
        _c("h4", { staticClass: "widget-title" }, [_vm._v("Contact Info")]),
        _vm._v(" "),
        _c("ul", { staticClass: "contact-info" }, [
          _c("li", [
            _c("span", { staticClass: "contact-info-label" }, [
              _vm._v("Address:")
            ]),
            _vm._v("123 Street Name, City, England\n\t\t\t\t\t\t\t")
          ]),
          _vm._v(" "),
          _c("li", [
            _c("span", { staticClass: "contact-info-label" }, [
              _vm._v("Phone:")
            ]),
            _c("a", { attrs: { href: "tel:" } }, [_vm._v("(123) 456-7890")])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("span", { staticClass: "contact-info-label" }, [
              _vm._v("Email:")
            ]),
            _vm._v(" "),
            _c("a", { attrs: { href: "mailto:mail@example.com" } }, [
              _vm._v("mail@example.com")
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("span", { staticClass: "contact-info-label" }, [
              _vm._v("Working Days/Hours:")
            ]),
            _vm._v(
              "\n\t\t\t\t\t\t\t\tMon - Sun / 9:00 AM - 8:00 PM\n\t\t\t\t\t\t\t"
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "social-icons" }, [
          _c("a", {
            staticClass: "social-icon social-facebook icon-facebook",
            attrs: { href: "javascript:;", target: "_blank", title: "Facebook" }
          }),
          _vm._v(" "),
          _c("a", {
            staticClass: "social-icon social-twitter icon-twitter",
            attrs: { href: "javascript:;", target: "_blank", title: "Twitter" }
          }),
          _vm._v(" "),
          _c("a", {
            staticClass: "social-icon social-instagram icon-instagram",
            attrs: {
              href: "javascript:;",
              target: "_blank",
              title: "Instagram"
            }
          })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { attrs: { href: "/laravel/laravel-porto/docs/index.html" } }, [
        _vm._v("Help & FAQs")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { attrs: { href: "javascript:;" } }, [_vm._v("Order Tracking")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { attrs: { href: "javascript:;" } }, [
        _vm._v("Shipping & Delivery")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { attrs: { href: "javascript:;" } }, [_vm._v("Advanced Search")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { attrs: { href: "javascript:;" } }, [_vm._v("Careers")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { attrs: { href: "javascript:;" } }, [_vm._v("Corporate Sales")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { attrs: { href: "javascript:;" } }, [_vm._v("Privacy")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-3 col-sm-6" }, [
      _c("div", { staticClass: "widget widget-newsletter" }, [
        _c("h4", { staticClass: "widget-title" }, [
          _vm._v("Subscribe newsletter")
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n\t\t\t\t\t\t\tGet all the latest information on events, sales\n\t\t\t\t\t\t\tand offers. Sign up for newsletter:\n\t\t\t\t\t\t"
          )
        ]),
        _vm._v(" "),
        _c("form", { staticClass: "mb-0", attrs: { action: "#" } }, [
          _c("input", {
            staticClass: "form-control m-b-3",
            attrs: { type: "email", placeholder: "Email address", required: "" }
          }),
          _vm._v(" "),
          _c("input", {
            staticClass: "btn btn-primary shadow-none",
            attrs: { type: "submit", value: "Subscribe" }
          })
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/client/components/shared/footers/FooterOneComponent.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/client/components/shared/footers/FooterOneComponent.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FooterOneComponent_vue_vue_type_template_id_1d5816b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FooterOneComponent.vue?vue&type=template&id=1d5816b0& */ "./resources/js/client/components/shared/footers/FooterOneComponent.vue?vue&type=template&id=1d5816b0&");
/* harmony import */ var _FooterOneComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FooterOneComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/components/shared/footers/FooterOneComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FooterOneComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FooterOneComponent_vue_vue_type_template_id_1d5816b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FooterOneComponent_vue_vue_type_template_id_1d5816b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/shared/footers/FooterOneComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/shared/footers/FooterOneComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/client/components/shared/footers/FooterOneComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterOneComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FooterOneComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/footers/FooterOneComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterOneComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/components/shared/footers/FooterOneComponent.vue?vue&type=template&id=1d5816b0&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/client/components/shared/footers/FooterOneComponent.vue?vue&type=template&id=1d5816b0& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterOneComponent_vue_vue_type_template_id_1d5816b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FooterOneComponent.vue?vue&type=template&id=1d5816b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/footers/FooterOneComponent.vue?vue&type=template&id=1d5816b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterOneComponent_vue_vue_type_template_id_1d5816b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterOneComponent_vue_vue_type_template_id_1d5816b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);