(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/products/shared/ProductReviewsComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/products/shared/ProductReviewsComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_tree_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-tree-list */ "./node_modules/vue-tree-list/dist/vue-tree-list.umd.min.js");
/* harmony import */ var vue_tree_list__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_tree_list__WEBPACK_IMPORTED_MODULE_1__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    VueTreeList: vue_tree_list__WEBPACK_IMPORTED_MODULE_1__["VueTreeList"]
  },
  props: {
    productId: Number,
    productName: String,
    reviews: Array,
    approvedReviewsCount: Number
  },
  data: function data() {
    return {
      reviewRating: 0,
      reviewContent: null,
      reviewEmail: null,
      reviewName: null,
      currentPage: 1,
      perPage: 10
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])("setting", ["getProductSettings"])), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])("user", ["isCustomer", "userName", "getUser"])), {}, {
    treeData: function treeData() {
      var stack = [];
      var results = this.currentReviews.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage).reduce(function (acc, comment) {
        if (comment.parent === 0) {
          var newNode = {
            id: comment.id,
            name: comment.author_name,
            approved: comment.approved,
            content: comment.content,
            date: comment.created_at,
            rating: comment.rating,
            dragDisabled: true,
            addTreeNodeDisabled: true,
            addLeafNodeDisabled: true,
            editNodeDisabled: true,
            delNodeDisabled: true,
            children: []
          };
          acc.push(newNode);
          stack.push({
            id: newNode.id,
            children: newNode.children
          });
        }

        return acc;
      }, []);
      var temp, children, childNode;

      while (stack.length) {
        temp = stack[stack.length - 1];
        stack.pop();
        children = this.currentReviews.filter(function (comment) {
          return comment.parent === temp.id;
        });
        children.forEach(function (child) {
          childNode = {
            id: child.id,
            name: child.author_name,
            approved: child.approved,
            content: child.content,
            date: child.created_at,
            rating: child.rating,
            dragDisabled: true,
            addTreeNodeDisabled: true,
            addLeafNodeDisabled: true,
            editNodeDisabled: true,
            delNodeDisabled: true,
            children: []
          };
          temp.children.push(childNode);
          stack.push({
            id: childNode.id,
            children: childNode.children
          });
        });
      }

      return new vue_tree_list__WEBPACK_IMPORTED_MODULE_1__["Tree"](results);
    },
    currentReviews: function currentReviews() {
      return this.reviews;
    },
    total: function total() {
      return this.currentReviews.length;
    },
    shouldRender: function shouldRender() {
      return this.total > this.perPage;
    },
    lastPage: function lastPage() {
      return parseInt(this.total / this.perPage) + (this.total % this.perPage ? 1 : 0);
    },
    startIndex: function startIndex() {
      if (!this.currentPage % this.perPage) {
        return this.currentPage;
      }

      return this.perPage * parseInt(this.currentPage / this.perPage);
    },
    pagesToBeShown: function pagesToBeShown() {
      var pages = [];

      for (var i = 0; i < Math.min(this.lastPage - 2, 3); i++) {
        if (this.currentPage < 4 || this.currentPage > this.lastPage - 3) {
          if (this.currentPage < 4) {
            pages[i] = i + 2;
          }

          if (this.lastPage > 4 && this.currentPage > this.lastPage - 3) {
            pages[i] = this.lastPage - 3 + i;
          }
        } else {
          page[i] = this.currentPage - 1 + i;
        }
      }

      return pages;
    }
  }),
  created: function created() {
    var savedInfo = JSON.parse(window.localStorage.getItem("product"));

    if (this.isCustomer) {
      this.reviewName = this.getUser.first_name + " " + this.getUser.last_name;
      this.reviewEmail = this.getUser.email;
    } else if (savedInfo) {
      this.reviewName = savedInfo.name;
      this.reviewEmail = savedInfo.email;
    }
  },
  methods: {
    selectRating: function selectRating(e) {
      var parent = e.target.parentNode;
      if (parent.querySelector(".active")) parent.querySelector(".active").classList.remove("active");
      e.target.classList.add("active");
      this.reviewRating = parseInt(e.target.innerText);
    },
    productReview: function () {
      var _productReview = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.$vToastify.removeToast();
                this.$vToastify.setSettings({
                  withBackdrop: false,
                  position: "top-right",
                  successDuration: 1500
                });

                if (!(this.getProductSettings.starRatingRequired && this.reviewRating == 0)) {
                  _context.next = 5;
                  break;
                }

                this.$vToastify.error("Ratings required");
                return _context.abrupt("return");

              case 5:
                if (!this.currentReviews.find(function (review) {
                  return review.content == _this.reviewContent && review.author_email == _this.reviewEmail;
                })) {
                  _context.next = 9;
                  break;
                }

                this.$vToastify.error("Duplicate comment detected; it looks as if you’ve already said that!");
                _context.next = 14;
                break;

              case 9:
                this.$vToastify.setSettings({
                  withBackdrop: true,
                  position: "center-center"
                });
                this.$vToastify.loader("Please wait...");

                if (!this.isCustomer) {
                  window.localStorage.setItem("product", JSON.stringify({
                    name: this.reviewName,
                    email: this.reviewEmail
                  }));
                } else {
                  this.reviewName = this.userName;
                  this.reviewEmail = this.getUser.email;
                }

                _context.next = 14;
                return window.axios.post("/web/products/review", {
                  product_id: this.productId,
                  rating: this.reviewRating,
                  content: this.reviewContent,
                  author_name: this.reviewName,
                  author_email: this.reviewEmail
                }).then(function (response) {
                  _this.$vToastify.stopLoader();

                  _this.currentReviews.push(_objectSpread(_objectSpread({}, response.data.review), {}, {
                    parent: 0
                  }));

                  if (response.data.review.approved) {
                    _this.$emit("new-approved-review");
                  }

                  _this.reviewContent = "";
                })["catch"](function (error) {
                  _this.$vToastify.stopLoader();

                  _this.$vToastify.setSettings({
                    withBackdrop: false,
                    position: "top-right",
                    errorDuration: 1500
                  });

                  _this.$vToastify.error("Comment could not be empty");
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function productReview() {
        return _productReview.apply(this, arguments);
      }

      return productReview;
    }(),
    findPage: function findPage(page) {
      this.currentPage = page;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/products/shared/ProductReviewsComponent.vue?vue&type=template&id=0d455fa2&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/products/shared/ProductReviewsComponent.vue?vue&type=template&id=0d455fa2& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "product-reviews-content" }, [
    _c("h3", { staticClass: "reviews-title" }, [
      _vm._v(
        "\n        " +
          _vm._s(
            _vm.approvedReviewsCount > 0
              ? _vm.approvedReviewsCount + " review(s) for " + _vm.productName
              : "Reviews"
          ) +
          "\n    "
      )
    ]),
    _vm._v(" "),
    _vm.currentReviews.length > 0
      ? _c(
          "div",
          { key: "exists", staticClass: "comment-list" },
          [
            _c("vue-tree-list", {
              ref: "treeList",
              staticClass: "comments",
              attrs: { model: _vm.treeData, "default-expanded": true },
              scopedSlots: _vm._u(
                [
                  {
                    key: "leafNameDisplay",
                    fn: function(slotProps) {
                      return [
                        _c("div", { staticClass: "comment-block" }, [
                          _c("div", { staticClass: "comment-header" }, [
                            _c("div", { staticClass: "comment-arrow" }),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "ratings-container float-right" },
                              [
                                _c("div", { staticClass: "product-ratings" }, [
                                  _c("span", {
                                    staticClass: "ratings",
                                    style: {
                                      width: 20 * slotProps.model.rating + "%"
                                    }
                                  })
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("span", { staticClass: "comment-by" }, [
                              _c("strong", [
                                _vm._v(_vm._s(slotProps.model.name) + " –")
                              ]),
                              _vm._v(
                                "\n                            " +
                                  _vm._s(slotProps.model.date) +
                                  "\n                            "
                              ),
                              !slotProps.model.approved
                                ? _c("em", [
                                    _vm._v("Your comment is awating moderation")
                                  ])
                                : _vm._e()
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "comment-content" }, [
                            _c("p", {
                              domProps: {
                                innerHTML: _vm._s(slotProps.model.content)
                              }
                            })
                          ])
                        ])
                      ]
                    }
                  },
                  {
                    key: "treeNodeIcon",
                    fn: function() {
                      return [
                        _c("div", { staticClass: "img-thumbnail" }, [
                          _c("img", {
                            attrs: {
                              src: _vm.$root.getUrl(
                                "client/images/blog/author.png"
                              ),
                              alt: "author",
                              width: "80",
                              height: "80"
                            }
                          })
                        ])
                      ]
                    },
                    proxy: true
                  }
                ],
                null,
                false,
                3484740084
              )
            }),
            _vm._v(" "),
            _c("div", { staticClass: "mt-2" }, [
              _vm.shouldRender
                ? _c(
                    "ul",
                    { staticClass: "pagination justify-content-end mb-0" },
                    [
                      _c(
                        "li",
                        {
                          staticClass: "page-item",
                          class: { disabled: _vm.currentPage < 2 }
                        },
                        [
                          _c(
                            "a",
                            {
                              staticClass: "page-link page-link-btn",
                              attrs: { href: "#" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.findPage(_vm.currentPage - 1)
                                }
                              }
                            },
                            [_c("i", { staticClass: "icon-angle-left" })]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("li", { staticClass: "page-item" }, [
                        _c(
                          "a",
                          {
                            staticClass: "page-link",
                            class: { active: _vm.currentPage == 1 },
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.findPage(1)
                              }
                            }
                          },
                          [_vm._v(_vm._s(1))]
                        )
                      ]),
                      _vm._v(" "),
                      _vm.pagesToBeShown[0] > 2
                        ? _c("li", { staticClass: "page-item" }, [
                            _c("span", { staticClass: "page-link" }, [
                              _vm._v("...")
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.pagesToBeShown.length
                        ? _vm._l(_vm.pagesToBeShown, function(page) {
                            return _c(
                              "li",
                              { key: "page-" + page, staticClass: "page-item" },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass: "page-link",
                                    class: { active: _vm.currentPage == page },
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.findPage(page)
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(page))]
                                )
                              ]
                            )
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.pagesToBeShown[_vm.pagesToBeShown.length - 1] <
                      _vm.lastPage - 1
                        ? _c("li", { staticClass: "page-item" }, [
                            _c("span", { staticClass: "page-link" }, [
                              _vm._v("...")
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.lastPage > 1
                        ? _c("li", { staticClass: "page-item" }, [
                            _c(
                              "a",
                              {
                                staticClass: "page-link",
                                class: {
                                  active: _vm.currentPage == _vm.lastPage
                                },
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.findPage(_vm.lastPage)
                                  }
                                }
                              },
                              [_vm._v(_vm._s(_vm.lastPage))]
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          staticClass: "page-item",
                          class: { disabled: _vm.currentPage === _vm.lastPage }
                        },
                        [
                          _c(
                            "a",
                            {
                              staticClass: "page-link page-link-btn",
                              attrs: { href: "#" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.findPage(_vm.lastPage)
                                }
                              }
                            },
                            [_c("i", { staticClass: "icon-angle-right" })]
                          )
                        ]
                      )
                    ],
                    2
                  )
                : _vm._e()
            ])
          ],
          1
        )
      : _c("p", { key: "no-exist", staticClass: "no-reviews" }, [
          _vm._v("\n        There are no reviews yet.\n    ")
        ]),
    _vm._v(" "),
    _c("div", { staticClass: "divider" }),
    _vm._v(" "),
    _c("div", { staticClass: "add-product-review" }, [
      _c("h3", { staticClass: "review-title" }, [
        _vm._v(
          "\n            " +
            _vm._s(
              _vm.currentReviews.length > 0
                ? "Add a review"
                : "Be the first to review “" + _vm.productName + "“"
            ) +
            "\n        "
        )
      ]),
      _vm._v(" "),
      _c(
        "form",
        {
          staticClass: "comment-form m-0",
          attrs: { action: "#" },
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.productReview.apply(null, arguments)
            }
          }
        },
        [
          _vm.isCustomer
            ? _c(
                "p",
                { key: "customer", staticClass: "logged-in" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "text-primary",
                      attrs: { to: "/pages/account/details" }
                    },
                    [
                      _vm.reviewName
                        ? [
                            _vm._v(
                              "\n                        Logged in as\n                        " +
                                _vm._s(_vm.reviewName) +
                                ".\n                    "
                            )
                          ]
                        : [
                            _vm._v(
                              "You haven't set your name. Set your name\n                        first."
                            )
                          ]
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "text-primary",
                      attrs: { to: "/pages/account" }
                    },
                    [_vm._v("Log out?")]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "rating-form" }, [
            _c("label", { attrs: { for: "rating" } }, [_vm._v("Your rating")]),
            _vm._v(" "),
            _c("span", { staticClass: "rating-stars" }, [
              _c(
                "a",
                {
                  staticClass: "star-1",
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.selectRating.apply(null, arguments)
                    }
                  }
                },
                [_vm._v("1")]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "star-2",
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.selectRating.apply(null, arguments)
                    }
                  }
                },
                [_vm._v("2")]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "star-3",
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.selectRating.apply(null, arguments)
                    }
                  }
                },
                [_vm._v("3")]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "star-4",
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.selectRating.apply(null, arguments)
                    }
                  }
                },
                [_vm._v("4")]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "star-5",
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.selectRating.apply(null, arguments)
                    }
                  }
                },
                [_vm._v("5")]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", [_vm._v("Your Review")]),
            _vm._v(" "),
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.reviewContent,
                  expression: "reviewContent"
                }
              ],
              staticClass: "form-control form-control-sm",
              attrs: { cols: "5", rows: "6", maxlength: "1000", required: "" },
              domProps: { value: _vm.reviewContent },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.reviewContent = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          !_vm.isCustomer
            ? _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-6 col-xl-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("Your Name")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.reviewName,
                          expression: "reviewName"
                        }
                      ],
                      staticClass: "form-control form-control-sm",
                      attrs: { type: "text", required: "", maxlength: "250" },
                      domProps: { value: _vm.reviewName },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.reviewName = $event.target.value
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6 col-xl-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("Your E-mail")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.reviewEmail,
                          expression: "reviewEmail"
                        }
                      ],
                      staticClass: "form-control form-control-sm",
                      attrs: { type: "text", required: "", maxlength: "100" },
                      domProps: { value: _vm.reviewEmail },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.reviewEmail = $event.target.value
                        }
                      }
                    })
                  ])
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("input", {
            staticClass: "btn btn-primary font-weight-normal ls-n-15",
            attrs: {
              type: "submit",
              value: "Submit",
              disabled: _vm.isCustomer && !_vm.reviewName
            }
          })
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/client/components/products/shared/ProductReviewsComponent.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/client/components/products/shared/ProductReviewsComponent.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductReviewsComponent_vue_vue_type_template_id_0d455fa2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductReviewsComponent.vue?vue&type=template&id=0d455fa2& */ "./resources/js/client/components/products/shared/ProductReviewsComponent.vue?vue&type=template&id=0d455fa2&");
/* harmony import */ var _ProductReviewsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductReviewsComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/components/products/shared/ProductReviewsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductReviewsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductReviewsComponent_vue_vue_type_template_id_0d455fa2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductReviewsComponent_vue_vue_type_template_id_0d455fa2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/products/shared/ProductReviewsComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/products/shared/ProductReviewsComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/client/components/products/shared/ProductReviewsComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductReviewsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductReviewsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/products/shared/ProductReviewsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductReviewsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/components/products/shared/ProductReviewsComponent.vue?vue&type=template&id=0d455fa2&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/client/components/products/shared/ProductReviewsComponent.vue?vue&type=template&id=0d455fa2& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductReviewsComponent_vue_vue_type_template_id_0d455fa2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductReviewsComponent.vue?vue&type=template&id=0d455fa2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/products/shared/ProductReviewsComponent.vue?vue&type=template&id=0d455fa2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductReviewsComponent_vue_vue_type_template_id_0d455fa2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductReviewsComponent_vue_vue_type_template_id_0d455fa2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);