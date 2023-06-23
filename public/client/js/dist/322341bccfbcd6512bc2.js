(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[93],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/vendor/VendorListComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/vendor/VendorListComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_slide_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-slide-toggle */ "./node_modules/vue-slide-toggle/dist/vue-slide-toggle.es.js");
/* harmony import */ var _data_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/constant */ "./resources/js/data/constant.js");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    VueSlideToggle: vue_slide_toggle__WEBPACK_IMPORTED_MODULE_1__["VueSlideToggle"]
  },
  data: function data() {
    return {
      users: [],
      filteredUsers: [],
      filterSlide: false,
      sortOption: "recent",
      searchTerm: null
    };
  },
  watch: {
    $route: function $route() {}
  },
  computed: {
    vendorCount: function vendorCount() {
      return this.users.length;
    }
  },
  created: function created() {
    this.getVendors();
  },
  methods: {
    getVendors: function () {
      var _getVendors = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return window.axios.get("/web/vendors/").then(function (response) {
                  _this.users = response.data.vendors;
                  _this.filteredUsers = response.data.vendors;
                })["catch"](function (error) {
                  _this.$router.push("/pages/404");
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getVendors() {
        return _getVendors.apply(this, arguments);
      }

      return getVendors;
    }(),
    getLocation: function getLocation(country, state) {
      var tempCountry = _data_constant__WEBPACK_IMPORTED_MODULE_2__["COUNTRIES"].find(function (item) {
        return item.id == country;
      });
      var tempState = {
        text: "Unknown"
      };

      if (!tempCountry) {
        tempCountry = {
          text: "Unknown"
        };
      } else {
        tempState = _data_constant__WEBPACK_IMPORTED_MODULE_2__["STATES"][country].find(function (item) {
          return item.id == state;
        });

        if (!tempState) {
          tempState = {
            text: "Unknown"
          };
        }
      }

      return tempState.text + ", " + tempCountry.text;
    },
    sortVendors: function sortVendors() {
      if (this.sortOption == "recent") {
        this.filteredUsers = this.users.sort(function (a, b) {
          return a.created < b.created ? 1 : -1;
        });
      } else if (this.sortOption == "rating") {
        this.filteredUsers = this.users.sort(function (a, b) {
          return a.rating < b.rating ? 1 : -1;
        });
      }
    },
    filterVendors: function filterVendors() {
      var _this2 = this;

      this.filteredUsers = this.users.filter(function (user) {
        return user.vendor.store_name && user.vendor.store_name.includes(_this2.searchTerm);
      });
    },
    setRating: function setRating(rating) {
      return rating * 20 + "%";
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/vendor/VendorListComponent.vue?vue&type=template&id=c43a42fa&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/vendor/VendorListComponent.vue?vue&type=template&id=c43a42fa& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    _c(
      "nav",
      { staticClass: "breadcrumb-nav", attrs: { "aria-label": "breadcrumb" } },
      [
        _c("div", { staticClass: "container" }, [
          _c("ol", { staticClass: "breadcrumb" }, [
            _c(
              "li",
              { staticClass: "breadcrumb-item" },
              [
                _c("router-link", { attrs: { to: "/" } }, [
                  _c("i", { staticClass: "icon-home" })
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c("li", { staticClass: "breadcrumb-item active" }, [
              _vm._v("Store List")
            ])
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "container" },
      [
        _c("div", { staticClass: "toolbox toolbox-store" }, [
          _c("div", { staticClass: "toolbox-left" }, [
            _c("div", { staticClass: "toolbox-item" }, [
              _c("label", [
                _vm._v("Total store showing: " + _vm._s(_vm.vendorCount))
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "toolbox-item toolbox-filter mr-0" }, [
            _c(
              "a",
              {
                staticClass: "btn btn-primary",
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    _vm.filterSlide = !_vm.filterSlide
                  }
                }
              },
              [_vm._v("Filter")]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "toolbox-item toolbox-sort" }, [
            _c("label", [_vm._v("Sort by:")]),
            _vm._v(" "),
            _c("div", { staticClass: "select-custom" }, [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.sortOption,
                      expression: "sortOption"
                    }
                  ],
                  staticClass: "form-control",
                  on: {
                    change: [
                      function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.sortOption = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      },
                      _vm.sortVendors
                    ]
                  }
                },
                [
                  _c("option", { attrs: { value: "recent" } }, [
                    _vm._v("Most Recent")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "rating" } }, [
                    _vm._v("Most Popular")
                  ])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "layout-modes" },
            [
              _c(
                "router-link",
                {
                  staticClass: "layout-btn btn-grid",
                  attrs: {
                    to: "/vendors/grid",
                    "exact-active-class": "active",
                    title: "Grid"
                  }
                },
                [_c("i", { staticClass: "fas fa-th-large" })]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "layout-btn btn-list",
                  attrs: {
                    to: "/vendors/list",
                    "exact-active-class": "active",
                    title: "List"
                  }
                },
                [_c("i", { staticClass: "fas fa-bars" })]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c(
          "vue-slide-toggle",
          {
            staticClass: "filter-form-container mt-0 mb-0 pb-0 pt-0",
            attrs: { open: _vm.filterSlide, duration: 500 }
          },
          [
            _c(
              "form",
              {
                staticClass: "mb-2 pt-5 pb-4",
                attrs: { action: "#", method: "GET" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.filterVendors.apply(null, arguments)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.searchTerm,
                        expression: "searchTerm"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      placeholder: "Search Vendors",
                      required: ""
                    },
                    domProps: { value: _vm.searchTerm },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.searchTerm = $event.target.value
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-footer mb-0" }, [
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn btn-primary btn-submit form-footer-right mr-0",
                      attrs: { type: "submit" }
                    },
                    [_vm._v("\n\t\t\t\t\t\tApply\n\t\t\t\t\t")]
                  )
                ])
              ]
            )
          ]
        ),
        _vm._v(" "),
        _vm.filteredUsers.length > 0
          ? _vm._l(_vm.filteredUsers, function(user) {
              return _c(
                "div",
                {
                  key: user.id,
                  staticClass: "store store-list",
                  class: { "no-banner": !user.vendor.banner }
                },
                [
                  _c("div", { staticClass: "store-info" }, [
                    _c("figure", [
                      user.vendor.banner
                        ? _c("img", {
                            directives: [
                              {
                                name: "lazy",
                                rawName: "v-lazy",
                                value: _vm.$root.getUrl(
                                  user.vendor.banner.copy_link,
                                  true
                                ),
                                expression:
                                  "\n\t\t\t\t\t\t\t\t$root.getUrl(\n\t\t\t\t\t\t\t\t\tuser.vendor.banner.copy_link,\n\t\t\t\t\t\t\t\t\ttrue\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t"
                              }
                            ],
                            attrs: {
                              ratio: 220 / 380,
                              alt: "Store",
                              width: user.vendor.banner.width,
                              height: user.vendor.banner.height
                            }
                          })
                        : _c("img", {
                            directives: [
                              {
                                name: "lazy",
                                rawName: "v-lazy",
                                value: _vm.$root.getUrl(
                                  "client/images/vendors/banner-3.png"
                                ),
                                expression:
                                  "\n\t\t\t\t\t\t\t\t$root.getUrl(\n\t\t\t\t\t\t\t\t\t'client/images/vendors/banner-3.png'\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t"
                              }
                            ],
                            attrs: { alt: "Store", width: "453", height: "220" }
                          })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "store-content" }, [
                      _c("h3", { staticClass: "store-title" }, [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t" +
                            _vm._s(user.vendor.store_name) +
                            "\n\t\t\t\t\t\t"
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ratings-container" }, [
                        _c(
                          "div",
                          {
                            staticClass: "store-ratings",
                            attrs: {
                              title: "Rated " + user.rating + "out of 5"
                            }
                          },
                          [
                            _c("span", {
                              staticClass: "ratings",
                              style: {
                                width: _vm.setRating(user.rating)
                              }
                            })
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "store-address" }, [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t" +
                            _vm._s(
                              _vm.getLocation(
                                user.vendor.country,
                                user.vendor.state
                              )
                            ) +
                            "\n\t\t\t\t\t\t"
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "store-footer" },
                    [
                      _c("div", { staticClass: "seller-avatar" }, [
                        user.vendor.profile
                          ? _c("img", {
                              directives: [
                                {
                                  name: "lazy",
                                  rawName: "v-lazy",
                                  value: _vm.$root.getUrl(
                                    user.vendor.profile.copy_link,
                                    true,
                                    100
                                  ),
                                  expression:
                                    "\n\t\t\t\t\t\t\t\t$root.getUrl(\n\t\t\t\t\t\t\t\t\tuser.vendor.profile.copy_link,\n\t\t\t\t\t\t\t\t\ttrue,\n\t\t\t\t\t\t\t\t\t100\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t"
                                }
                              ],
                              attrs: {
                                alt: "vendor",
                                width: "100",
                                height: "100"
                              }
                            })
                          : _c("img", {
                              directives: [
                                {
                                  name: "lazy",
                                  rawName: "v-lazy",
                                  value: _vm.$root.getUrl(
                                    "server/images/placeholder-img-100x100.png"
                                  ),
                                  expression:
                                    "\n\t\t\t\t\t\t\t\t$root.getUrl(\n\t\t\t\t\t\t\t\t\t'server/images/placeholder-img-100x100.png'\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t"
                                }
                              ],
                              attrs: {
                                alt: "vendor",
                                width: "100",
                                height: "100"
                              }
                            })
                      ]),
                      _vm._v(" "),
                      _c("router-link", {
                        staticClass: "btn btn-primary btn-round",
                        attrs: { to: "/vendors/" + user.id }
                      })
                    ],
                    1
                  )
                ]
              )
            })
          : _c(
              "div",
              { staticClass: "info-box with-icon py-3 px-1 skel-hide" },
              [
                _c("p", { staticClass: "porto-info" }, [
                  _vm._v("No vendor matching your selection.")
                ])
              ]
            )
      ],
      2
    ),
    _vm._v(" "),
    _c("div", { staticClass: "mb-6" })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/client/components/vendor/VendorListComponent.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/client/components/vendor/VendorListComponent.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VendorListComponent_vue_vue_type_template_id_c43a42fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VendorListComponent.vue?vue&type=template&id=c43a42fa& */ "./resources/js/client/components/vendor/VendorListComponent.vue?vue&type=template&id=c43a42fa&");
/* harmony import */ var _VendorListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VendorListComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/components/vendor/VendorListComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VendorListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VendorListComponent_vue_vue_type_template_id_c43a42fa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VendorListComponent_vue_vue_type_template_id_c43a42fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/vendor/VendorListComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/vendor/VendorListComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/client/components/vendor/VendorListComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VendorListComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/vendor/VendorListComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/components/vendor/VendorListComponent.vue?vue&type=template&id=c43a42fa&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/client/components/vendor/VendorListComponent.vue?vue&type=template&id=c43a42fa& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorListComponent_vue_vue_type_template_id_c43a42fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VendorListComponent.vue?vue&type=template&id=c43a42fa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/vendor/VendorListComponent.vue?vue&type=template&id=c43a42fa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorListComponent_vue_vue_type_template_id_c43a42fa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorListComponent_vue_vue_type_template_id_c43a42fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);