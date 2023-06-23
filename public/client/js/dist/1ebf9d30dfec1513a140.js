(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/footers/FooterTwoComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shared/footers/FooterTwoComponent.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/footers/FooterTwoComponent.vue?vue&type=template&id=fedbeeec&v-once=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shared/footers/FooterTwoComponent.vue?vue&type=template&id=fedbeeec&v-once=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
  return _c("footer", { staticClass: "footer footer-two" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "footer-middle" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6 col-lg-3 col-xl-4" }, [
            _c("div", { staticClass: "widget" }, [
              _c("h4", { staticClass: "widget-title" }, [_vm._v("My Account")]),
              _vm._v(" "),
              _c("ul", { staticClass: "links link-parts row" }, [
                _c("div", { staticClass: "link-part col-xl-4" }, [
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
                  _c(
                    "li",
                    [
                      _c(
                        "router-link",
                        { attrs: { to: "/pages/contact-us" } },
                        [_vm._v("Contact Us")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    [
                      _c("router-link", { attrs: { to: "/pages/account" } }, [
                        _vm._v("My Account")
                      ])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "link-part col-xl-8" }, [
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
                  _vm._m(2)
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _vm._m(3)
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "footer-bottom" }, [
      _c(
        "div",
        {
          staticClass:
            "container top-border d-flex align-items-center justify-content-between flex-wrap"
        },
        [
          _c("p", { staticClass: "footer-copyright mb-0 py-3 pr-3" }, [
            _vm._v(
              "\n\t\t\t\tPorto eCommerce. © " +
                _vm._s(_vm.year) +
                ". All Rights Reserved\n\t\t\t"
            )
          ]),
          _vm._v(" "),
          _c("img", {
            staticClass: "py-3",
            attrs: {
              src: _vm.$root.getUrl("client/images/payments.png"),
              alt: "payment image",
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
    return _c("div", { staticClass: "footer-top" }, [
      _c(
        "div",
        {
          staticClass:
            "container top-border d-flex align-items-center justify-content-between flex-wrap"
        },
        [
          _c(
            "div",
            {
              staticClass:
                "footer-left widget-newsletter d-md-flex align-items-center"
            },
            [
              _c("div", { staticClass: "widget-newsletter-info" }, [
                _c(
                  "h5",
                  {
                    staticClass: "widget-newsletter-title text-uppercase m-b-1"
                  },
                  [_vm._v("\n\t\t\t\t\t\tsubscribe newsletter\n\t\t\t\t\t")]
                ),
                _vm._v(" "),
                _c("p", { staticClass: "widget-newsletter-content mb-0" }, [
                  _vm._v(
                    "\n\t\t\t\t\t\tGet all the latest information on Events, Sales and\n\t\t\t\t\t\tOffers.\n\t\t\t\t\t"
                  )
                ])
              ]),
              _vm._v(" "),
              _c("form", { attrs: { action: "#" } }, [
                _c("div", { staticClass: "footer-submit-wrapper d-flex" }, [
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "email",
                      placeholder: "Email address...",
                      size: "40",
                      required: ""
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-dark btn-sm",
                      attrs: { type: "submit" }
                    },
                    [_vm._v("\n\t\t\t\t\t\t\tSubscribe\n\t\t\t\t\t\t")]
                  )
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "footer-right" }, [
            _c("div", { staticClass: "social-icons" }, [
              _c("a", {
                staticClass: "social-icon social-facebook icon-facebook",
                attrs: { href: "javascript:;", target: "_blank" }
              }),
              _vm._v(" "),
              _c("a", {
                staticClass: "social-icon social-twitter icon-twitter",
                attrs: { href: "javascript:;", target: "_blank" }
              }),
              _vm._v(" "),
              _c("a", {
                staticClass: "social-icon social-instagram icon-instagram",
                attrs: { href: "javascript:;", target: "_blank" }
              })
            ])
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-6 col-xl-4" }, [
      _c("div", { staticClass: "widget" }, [
        _c("h4", { staticClass: "widget-title" }, [_vm._v("Contact Info")]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm-6" }, [
            _c("div", { staticClass: "contact-widget" }, [
              _c("h4", { staticClass: "widget-title" }, [_vm._v("ADDRESS")]),
              _vm._v(" "),
              _c("a", { attrs: { href: "javascript:;" } }, [
                _vm._v("1234 Street Name, City, England")
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("div", { staticClass: "contact-widget email" }, [
              _c("h4", { staticClass: "widget-title" }, [_vm._v("EMAIL")]),
              _vm._v(" "),
              _c("a", { attrs: { href: "mailto:mail@example.com" } }, [
                _vm._v("mail@example.com")
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("div", { staticClass: "contact-widget" }, [
              _c("h4", { staticClass: "widget-title" }, [_vm._v("PHONE")]),
              _vm._v(" "),
              _c("a", { attrs: { href: "tel:+(123) 456-7890" } }, [
                _vm._v("Toll Free (123) 456-7890")
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("div", { staticClass: "contact-widget" }, [
              _c("h4", { staticClass: "widget-title" }, [
                _vm._v(
                  "\n\t\t\t\t\t\t\t\t\t\tWORKING DAYS/HOURS\n\t\t\t\t\t\t\t\t\t"
                )
              ]),
              _vm._v(" "),
              _c("a", { attrs: { href: "javascript:;" } }, [
                _vm._v("Mon - Sun / 9:00 AM - 8:00 PM")
              ])
            ])
          ])
        ])
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
    return _c("div", { staticClass: "col-sm-6 col-lg-3 col-xl-4" }, [
      _c("div", { staticClass: "widget" }, [
        _c("h4", { staticClass: "widget-title" }, [_vm._v("Main Features")]),
        _vm._v(" "),
        _c("ul", { staticClass: "links link-parts row" }, [
          _c("div", { staticClass: "link-part col-xl-6" }, [
            _c("li", [
              _c("a", { attrs: { href: "javascript:;" } }, [
                _vm._v("Super Fast WordPress Theme")
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("a", { attrs: { href: "javascript:;" } }, [
                _vm._v("1st Fully working Ajax Theme")
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("a", { attrs: { href: "javascript:;" } }, [
                _vm._v("33 Unique Shop Layouts")
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "link-part col-xl-6" }, [
            _c("li", [
              _c("a", { attrs: { href: "javascript:;" } }, [
                _vm._v("Powerful Admin Panel")
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("a", { attrs: { href: "javascript:;" } }, [
                _vm._v("Mobile & Retina Optimized")
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/client/components/shared/footers/FooterTwoComponent.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/client/components/shared/footers/FooterTwoComponent.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FooterTwoComponent_vue_vue_type_template_id_fedbeeec_v_once_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FooterTwoComponent.vue?vue&type=template&id=fedbeeec&v-once=true& */ "./resources/js/client/components/shared/footers/FooterTwoComponent.vue?vue&type=template&id=fedbeeec&v-once=true&");
/* harmony import */ var _FooterTwoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FooterTwoComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/components/shared/footers/FooterTwoComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FooterTwoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FooterTwoComponent_vue_vue_type_template_id_fedbeeec_v_once_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FooterTwoComponent_vue_vue_type_template_id_fedbeeec_v_once_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/shared/footers/FooterTwoComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/shared/footers/FooterTwoComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/client/components/shared/footers/FooterTwoComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterTwoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FooterTwoComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/footers/FooterTwoComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterTwoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/components/shared/footers/FooterTwoComponent.vue?vue&type=template&id=fedbeeec&v-once=true&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/client/components/shared/footers/FooterTwoComponent.vue?vue&type=template&id=fedbeeec&v-once=true& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterTwoComponent_vue_vue_type_template_id_fedbeeec_v_once_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FooterTwoComponent.vue?vue&type=template&id=fedbeeec&v-once=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/footers/FooterTwoComponent.vue?vue&type=template&id=fedbeeec&v-once=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterTwoComponent_vue_vue_type_template_id_fedbeeec_v_once_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterTwoComponent_vue_vue_type_template_id_fedbeeec_v_once_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);