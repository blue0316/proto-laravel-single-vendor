(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/blog/BlogSingleComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/pages/blog/BlogSingleComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_format_parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-format-parse */ "./node_modules/date-format-parse/es/index.js");
/* harmony import */ var vue_tree_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-tree-list */ "./node_modules/vue-tree-list/dist/vue-tree-list.umd.min.js");
/* harmony import */ var vue_tree_list__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_tree_list__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _shared_OwlCarouselComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/OwlCarouselComponent */ "./resources/js/client/components/shared/OwlCarouselComponent.vue");
/* harmony import */ var _shared_posts_PostThreeComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/posts/PostThreeComponent */ "./resources/js/client/components/shared/posts/PostThreeComponent.vue");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    VueTreeList: vue_tree_list__WEBPACK_IMPORTED_MODULE_2__["VueTreeList"],
    PostThreeComponent: _shared_posts_PostThreeComponent__WEBPACK_IMPORTED_MODULE_5__["default"],
    OwlCarouselComponent: _shared_OwlCarouselComponent__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      id: this.$route.params.id,
      post: null,
      relatedPosts: [],
      commentTo: null,
      content: "",
      name: "",
      email: "",
      website: "",
      saveInfo: false,
      treeData: null,
      loaded: false
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])("user", ["isCustomer", "getUser", "userName"])), Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])("setting", ["getPostSettings"])), {}, {
    authorName: function authorName() {
      return this.post.author.first_name + " " + this.post.author.last_name;
    },
    day: function day() {
      return new Date(this.post.created_at).toLocaleString("en-us", {
        day: "2-digit"
      });
    },
    month: function month() {
      return new Date(this.post.created_at).toLocaleString("en-us", {
        month: "short"
      });
    },
    fullDate: function fullDate() {
      return Object(date_format_parse__WEBPACK_IMPORTED_MODULE_1__["format"])(this.post.created_at, "MMMM DD, YYYY");
    },
    sameContentExists: function sameContentExists() {
      var _this = this;

      return this.post.comments.find(function (comment) {
        return comment.content === _this.content;
      });
    }
  }),
  watch: {
    $route: function $route() {
      this.getPost();
    }
  },
  created: function created() {
    this.getPost();
  },
  methods: {
    getPost: function () {
      var _getPost = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this2 = this;

        var savedInfo;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (document.querySelector(".skeleton-body")) {
                  document.querySelector(".skeleton-body").classList.remove("loaded");
                }

                savedInfo = JSON.parse(window.localStorage.getItem("post"));

                if (this.isCustomer) {
                  this.name = this.getUser.first_name + " " + this.getUser.last_name;
                  this.email = this.getUser.email;
                } else if (savedInfo) {
                  this.name = savedInfo.name;
                  this.email = savedInfo.email;
                  this.website = savedInfo.website;
                  this.saveInfo = true;
                }

                this.loaded = false;
                _context.next = 6;
                return window.axios.get("/web/posts/" + this.$route.params.slug, {
                  params: {
                    author: this.email
                  }
                }).then(function (response) {
                  _this2.post = response.data.post;
                  _this2.relatedPosts = response.data.relatedPosts;
                  _this2.treeData = new vue_tree_list__WEBPACK_IMPORTED_MODULE_2__["Tree"](_this2.constructTree());
                  _this2.loaded = true;
                  if (document.querySelector(".skeleton-body")) document.querySelector(".skeleton-body").classList.add("loaded");
                })["catch"](function (error) {
                  _this2.$router.push("/pages/404");
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getPost() {
        return _getPost.apply(this, arguments);
      }

      return getPost;
    }(),
    constructTree: function constructTree() {
      var stack = [];
      var results = this.post.comments.reduce(function (acc, comment) {
        if (comment.parent === 0) {
          var newNode = {
            id: comment.id,
            name: comment.author_name,
            approved: comment.approved,
            content: comment.content,
            date: comment.created_at,
            dragDisabled: true,
            addTreeNodeDisabled: true,
            addLeafNodeDisabled: true,
            editNodeDisabled: true,
            delNodeDisabled: true,
            children: [],
            depth: comment.depth
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
        children = this.post.comments.filter(function (comment) {
          return comment.parent === temp.id;
        });
        children.forEach(function (child) {
          childNode = {
            id: child.id,
            name: child.author_name,
            approved: child.approved,
            content: child.content,
            date: child.created_at,
            dragDisabled: true,
            addTreeNodeDisabled: true,
            addLeafNodeDisabled: true,
            editNodeDisabled: true,
            delNodeDisabled: true,
            children: [],
            depth: child.depth
          };
          temp.children.push(childNode);
          stack.push({
            id: childNode.id,
            children: childNode.children
          });
        });
      }

      return results;
    },
    commentReplyForm: function commentReplyForm(node) {
      var commentToReply = document.getElementById(node.id).parentNode;
      var commentForm = document.getElementById("respond");
      document.getElementById("cancel-respond").classList.add("show");
      document.getElementById("respond-title").firstChild.textContent = "Reply to " + node.name;
      commentToReply.appendChild(commentForm);
      this.commentTo = node;
    },
    resetReplyForm: function resetReplyForm() {
      var commentForm = document.getElementById("respond");
      document.getElementById("cancel-respond").classList.remove("show");
      document.getElementById("respond-title").firstChild.textContent = "Leave a Reply";
      this.$el.querySelector(".post-body").appendChild(commentForm);
      this.commentTo = this.treeData;
      this.content = "";
    },
    postComment: function () {
      var _postComment = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this3 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this.sameContentExists) {
                  _context2.next = 4;
                  break;
                }

                this.$vToastify.removeToast();
                this.$vToastify.setSettings({
                  withBackdrop: false,
                  position: "top-right",
                  successDuration: 1500
                });
                return _context2.abrupt("return", this.$vToastify.error("Duplicate comment detected"));

              case 4:
                if (!this.isCustomer) {
                  if (this.saveInfo) {
                    window.localStorage.setItem("post", JSON.stringify({
                      name: this.name,
                      email: this.email,
                      website: this.website
                    }));
                  }
                } else {
                  this.name = this.userName;
                  this.email = this.getUser.email;
                  this.website = "";
                }

                _context2.next = 7;
                return window.axios.post("/web/posts/comment", {
                  post_id: this.post.id,
                  parent: this.commentTo ? this.commentTo.id : 0,
                  content: this.content,
                  author_name: this.name,
                  author_email: this.email,
                  website: this.website
                }).then(function (response) {
                  var comment = response.data.comment;
                  var node = new vue_tree_list__WEBPACK_IMPORTED_MODULE_2__["TreeNode"]({
                    id: comment.id,
                    name: comment.author_name,
                    approved: comment.approved,
                    content: comment.content,
                    date: comment.created_at,
                    dragDisabled: true,
                    addTreeNodeDisabled: true,
                    addLeafNodeDisabled: true,
                    editNodeDisabled: true,
                    delNodeDisabled: true,
                    children: [],
                    depth: comment.depth
                  });

                  if (comment.approved) {
                    _this3.post.comments_count++;
                  }

                  if (_this3.commentTo) {
                    _this3.commentTo.addChildren(node);
                  } else {
                    _this3.treeData.addChildren(node);
                  }

                  _this3.post.comments.push(comment);

                  _this3.resetReplyForm();
                })["catch"](function (error) {
                  _this3.$vToastify.removeToast();

                  _this3.$vToastify.setSettings({
                    withBackdrop: false,
                    position: "top-right",
                    successDuration: 1500
                  });

                  return _this3.$vToastify.error("Your content is too long.");
                });

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function postComment() {
        return _postComment.apply(this, arguments);
      }

      return postComment;
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/OwlCarouselComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shared/OwlCarouselComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    options: {
      type: Object
    }
  },
  data: function data() {
    return {
      carouselOptions: {
        loop: false,
        margin: 20,
        responsiveClass: true,
        nav: false,
        navText: ['<i class="icon-angle-left">', '<i class="icon-angle-right">'],
        dots: true,
        autoplay: true,
        autoplayTimeout: 15e3,
        items: 1
      },
      id: "10"
    };
  },
  created: function created() {
    this.carouselOptions = _objectSpread(_objectSpread({}, this.carouselOptions), this.options);
    this.id = Math.random().toString(36).substring(2, 15);
  },
  mounted: function mounted() {
    var _this = this;

    __webpack_require__(/*! owl.carousel */ "./node_modules/owl.carousel/dist/owl.carousel.js");

    var owl = $("#" + this.id);
    owl.on("initialize.owl.carousel", function () {
      _this.$emit("initialize");
    });
    owl.on("initialized.owl.carousel", function () {
      _this.$emit("initialized");
    });
    this.create();
    $("#" + this.prevHandler).click(function () {
      owl.trigger("prev.owl.carousel");
    });
    $("#" + this.nextHandler).click(function () {
      owl.trigger("next.owl.carousel");
    });
    owl.on("changed.owl.carousel", function (event) {
      _this.$emit("changed", event);

      if ($(event.currentTarget.closest(".product-single-carousel")).length > 0) {
        var customDots = $(event.currentTarget).closest(".product-single-gallery").find("#carousel-custom-dots");

        if (customDots.length > 0 && customDots.hasClass("vertical-thumbs")) {
          var activeDot = customDots.find(".owl-dot.active");

          if (activeDot.length > 0) {
            activeDot.removeClass("active");
          }

          customDots.children().eq(event.item.index).addClass("active");
        } else if (customDots.length > 0) {
          var activeDot = customDots.find(".owl-dot.active");

          if (activeDot.length > 0) {
            activeDot.removeClass("active");
          }

          var activeDotParent = customDots.find(".owl-item").eq(event.item.index);

          if (!activeDotParent.hasClass("active")) {
            activeDotParent.closest(".owl-carousel").trigger("to.owl.carousel", [activeDotParent.index(), 300]);
          }

          activeDotParent.children().addClass("active");
        }
      }
    });
    $("#carousel-custom-dots .owl-dot").click(function () {
      var index = $(this).index();

      if ($(this).closest(".owl-carousel").length > 0) {
        index = $(this).parent().index();
      }

      $(this).closest(".product-single-gallery").find(".product-single-carousel").trigger("to.owl.carousel", [index, 300]);
    });

    if (!this.loop) {
      owl.on("changed.owl.carousel", function (event) {
        // start
        if (event.item.index === 0) {
          _this.showPrev = false;
          _this.showNext = true;
        } else {
          var currentEl = Math.floor(event.item.index + event.page.size); // last

          if (currentEl === event.item.count) {
            _this.showPrev = true;
            _this.showNext = false;
          } else {
            _this.showPrev = true;
            _this.showNext = true;
          }
        }
      });
    }
  },
  methods: {
    create: function create() {
      $("#" + this.id).owlCarousel(this.carouselOptions);
    },
    destroy: function destroy() {
      $("#" + this.id).trigger("destroy.owl.carousel");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/posts/PostThreeComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shared/posts/PostThreeComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    post: Object
  },
  computed: {
    day: function day() {
      return new Date(this.post.created_at).toLocaleString("en-us", {
        day: "2-digit"
      });
    },
    month: function month() {
      return new Date(this.post.created_at).toLocaleString("en-us", {
        month: "short"
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/blog/BlogSingleComponent.vue?vue&type=template&id=d8ea2478&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/pages/blog/BlogSingleComponent.vue?vue&type=template&id=d8ea2478& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
  return _vm.post
    ? _c("div", [
        _c("div", { staticClass: "skel-single-post" }),
        _vm._v(" "),
        _c("article", { staticClass: "post single mb-0" }, [
          _vm.loaded && _vm.getPostSettings.showPostMedia
            ? _c(
                "div",
                { staticClass: "post-media" },
                [
                  _vm.post.media.length > 0
                    ? _c(
                        "owl-carousel-component",
                        {
                          staticClass: "post-slider",
                          attrs: {
                            options: {
                              items: 1,
                              loop: false,
                              dots: true
                            }
                          }
                        },
                        _vm._l(_vm.post.media, function(image, index) {
                          return _c("img", {
                            directives: [
                              {
                                name: "lazy",
                                rawName: "v-lazy",
                                value: _vm.$root.getUrl(image.copy_link, true),
                                expression:
                                  "$root.getUrl(image.copy_link, true)"
                              }
                            ],
                            key: index,
                            attrs: {
                              alt: image.alt_text ? image.alt_text : "post",
                              width: image.width,
                              height: image.height
                            }
                          })
                        }),
                        0
                      )
                    : _vm._e()
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "post-body" }, [
            _c("div", { staticClass: "post-date" }, [
              _c("span", { staticClass: "day" }, [_vm._v(_vm._s(_vm.day))]),
              _vm._v(" "),
              _c("span", { staticClass: "month" }, [_vm._v(_vm._s(_vm.month))])
            ]),
            _vm._v(" "),
            _c("h2", { staticClass: "post-title" }, [
              _vm._v(_vm._s(_vm.post.title))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "post-meta" }, [
              _vm.getPostSettings.showMetaDate
                ? _c("span", [
                    _c("i", { staticClass: "icon-calendar" }),
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.fullDate) +
                        "\n                    "
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.getPostSettings.showMetaAuthor
                ? _c(
                    "span",
                    [
                      _c("i", { staticClass: "icon-user" }),
                      _vm._v("By\n                        "),
                      _c(
                        "router-link",
                        {
                          attrs: {
                            to: {
                              path: "/pages/blog",
                              query: {
                                author: _vm.post.author.id
                              }
                            }
                          }
                        },
                        [_vm._v(_vm._s(_vm.authorName))]
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.getPostSettings.showPostCategory
                ? _c(
                    "span",
                    [
                      _c("i", { staticClass: "icon-folder-open" }),
                      _vm._v(" "),
                      _vm._l(_vm.post.categories, function(category, index) {
                        return [
                          _c(
                            "router-link",
                            {
                              key: index,
                              attrs: {
                                to: {
                                  path: "/pages/blog",
                                  query: {
                                    category: category.slug
                                  }
                                }
                              }
                            },
                            [_vm._v(_vm._s(category.name))]
                          ),
                          _vm._v(
                            "\n                            " +
                              _vm._s(
                                _vm.post.categories.length - 1 > index
                                  ? ","
                                  : ""
                              ) +
                              "\n                        "
                          )
                        ]
                      })
                    ],
                    2
                  )
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", {
              staticClass: "post-content",
              domProps: { innerHTML: _vm._s(_vm.post.description) }
            }),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _vm.getPostSettings.showAuthorInformation
              ? _c("div", { staticClass: "post-author" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("figure", [
                    _c("img", {
                      attrs: {
                        src: _vm.$root.getUrl("client/images/blog/author.png"),
                        alt: "author",
                        width: "80",
                        height: "80"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "author-content" }, [
                    _c(
                      "h4",
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              title: "Posts by " + _vm.authorName,
                              to: {
                                path: "/pages/blog",
                                query: {
                                  author: _vm.post.author.id
                                }
                              }
                            }
                          },
                          [_vm._v(_vm._s(_vm.authorName))]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("p", [_vm._v(_vm._s(_vm.post.author.description))])
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.treeData.children &&
            _vm.treeData.children.length &&
            _vm.getPostSettings.showComments
              ? _c(
                  "div",
                  { staticClass: "post-comments" },
                  [
                    _c("h3", [
                      _c("i", { staticClass: "far fa-comments" }),
                      _vm._v(
                        "\n                        Comments\n                        "
                      ),
                      _vm.getPostSettings.showCommentsCount
                        ? _c("span", [
                            _vm._v(
                              "\n                            (" +
                                _vm._s(_vm.post.comments_count) +
                                ")\n                        "
                            )
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
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
                                    _c("span", { staticClass: "comment-by" }, [
                                      _c("strong", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(slotProps.model.name) +
                                            "\n                                        "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      !slotProps.model.approved
                                        ? _c("em", [
                                            _vm._v(
                                              "\n                                            Your comment is awating\n                                            moderation\n                                        "
                                            )
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.post.allow_comments
                                        ? _c(
                                            "span",
                                            { staticClass: "float-right" },
                                            [
                                              slotProps.model.depth < 4
                                                ? _c(
                                                    "a",
                                                    {
                                                      staticClass:
                                                        "comment-action comment-reply",
                                                      attrs: {
                                                        href: "javascript:;"
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.commentReplyForm(
                                                            slotProps.model
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [_vm._v("Reply")]
                                                  )
                                                : _vm._e()
                                            ]
                                          )
                                        : _vm._e()
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "comment-content" },
                                    [
                                      _c("p", {
                                        domProps: {
                                          innerHTML: _vm._s(
                                            slotProps.model.content
                                          )
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "comment-footer" }, [
                                    _c(
                                      "span",
                                      { staticClass: "date float-right" },
                                      [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(slotProps.model.date) +
                                            "\n                                    "
                                        )
                                      ]
                                    )
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
                        2552944435
                      )
                    })
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.post.allow_comments
              ? _c(
                  "div",
                  { staticClass: "comment-respond", attrs: { id: "respond" } },
                  [
                    _c("h3", { attrs: { id: "respond-title" } }, [
                      _vm._v(
                        "\n                        Leave a Reply\n                        "
                      ),
                      _c("small", [
                        _c(
                          "a",
                          {
                            staticClass: "comment-action comment-cancel-reply",
                            attrs: {
                              id: "cancel-respond",
                              href: "javascript:;"
                            },
                            on: { click: _vm.resetReplyForm }
                          },
                          [_vm._v("Cancel reply")]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "form",
                      {
                        attrs: { action: "#", method: "post" },
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.postComment.apply(null, arguments)
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
                                    _vm.userName
                                      ? [
                                          _vm._v(
                                            "Logged in as " +
                                              _vm._s(_vm.userName) +
                                              "."
                                          )
                                        ]
                                      : [
                                          _vm._v(
                                            "\n                                    You haven't set your name. Set your name\n                                    first.\n                                "
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
                          : _c("p", { key: "guest" }, [
                              _vm._v(
                                "\n                            Your email address will not be published. Required\n                            fields are marked *\n                        "
                              )
                            ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group required-field" },
                          [
                            _c("label", [_vm._v("Comment")]),
                            _vm._v(" "),
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.content,
                                  expression: "content"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                cols: "30",
                                rows: "1",
                                maxlength: "1000",
                                required: ""
                              },
                              domProps: { value: _vm.content },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.content = $event.target.value
                                }
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        !_vm.isCustomer
                          ? [
                              _c(
                                "div",
                                { staticClass: "form-group required-field" },
                                [
                                  _c("label", [_vm._v("Name")]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.name,
                                        expression: "name"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { type: "text", required: "" },
                                    domProps: { value: _vm.name },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.name = $event.target.value
                                      }
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "form-group required-field" },
                                [
                                  _c("label", [_vm._v("Email")]),
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
                                    attrs: { type: "email", required: "" },
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
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", [_vm._v("Website")]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.website,
                                      expression: "website"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "url" },
                                  domProps: { value: _vm.website },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.website = $event.target.value
                                    }
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { staticClass: "mb-0" }, [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.saveInfo,
                                        expression: "saveInfo"
                                      }
                                    ],
                                    attrs: { type: "checkbox" },
                                    domProps: {
                                      checked: Array.isArray(_vm.saveInfo)
                                        ? _vm._i(_vm.saveInfo, null) > -1
                                        : _vm.saveInfo
                                    },
                                    on: {
                                      change: function($event) {
                                        var $$a = _vm.saveInfo,
                                          $$el = $event.target,
                                          $$c = $$el.checked ? true : false
                                        if (Array.isArray($$a)) {
                                          var $$v = null,
                                            $$i = _vm._i($$a, $$v)
                                          if ($$el.checked) {
                                            $$i < 0 &&
                                              (_vm.saveInfo = $$a.concat([$$v]))
                                          } else {
                                            $$i > -1 &&
                                              (_vm.saveInfo = $$a
                                                .slice(0, $$i)
                                                .concat($$a.slice($$i + 1)))
                                          }
                                        } else {
                                          _vm.saveInfo = $$c
                                        }
                                      }
                                    }
                                  }),
                                  _vm._v(
                                    "\n                                    Save my name, email, and website in this\n                                    browser for the next time I comment.\n                                "
                                  )
                                ])
                              ])
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-footer my-0" }, [
                          _c(
                            "button",
                            {
                              staticClass:
                                "btn btn-sm btn-primary font-weight-normal",
                              attrs: {
                                type: "submit",
                                disabled: _vm.isCustomer && !_vm.userName
                              }
                            },
                            [_vm._v("Post Comment")]
                          )
                        ])
                      ],
                      2
                    )
                  ]
                )
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _vm.relatedPosts.length > 0 && _vm.getPostSettings.showRelatedPosts
          ? _c("div", { staticClass: "divider" })
          : _vm._e(),
        _vm._v(" "),
        _vm.relatedPosts.length > 0 && _vm.getPostSettings.showRelatedPosts
          ? _c(
              "div",
              { staticClass: "related-posts" },
              [
                _c("h4", [_vm._v("Related Posts")]),
                _vm._v(" "),
                _vm.loaded
                  ? _c(
                      "owl-carousel-component",
                      {
                        staticClass: "related-posts-carousel",
                        attrs: {
                          options: {
                            items: 3,
                            margin: 20,
                            loop: false,
                            dots: false,
                            responsive: {
                              0: {
                                items: 1
                              },
                              560: {
                                items: 2
                              },
                              750: {
                                items: 3
                              }
                            }
                          }
                        }
                      },
                      _vm._l(_vm.relatedPosts, function(relatedPost, index) {
                        return _c("post-three-component", {
                          key: index,
                          attrs: { post: relatedPost }
                        })
                      }),
                      1
                    )
                  : _vm._e()
              ],
              1
            )
          : _vm._e()
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { pre: true, attrs: { class: "post-share" } }, [
      _c("h3", [
        _c("i", { pre: true, attrs: { class: "icon-forward" } }),
        _vm._v("Share this post\n                    ")
      ]),
      _vm._v(" "),
      _c("div", { pre: true, attrs: { class: "social-icons" } }, [
        _c(
          "a",
          {
            pre: true,
            attrs: {
              href: "#",
              class: "social-icon social-facebook",
              target: "_blank",
              title: "Facebook"
            }
          },
          [_c("i", { pre: true, attrs: { class: "icon-facebook" } })]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            pre: true,
            attrs: {
              href: "#",
              class: "social-icon social-twitter",
              target: "_blank",
              title: "Twitter"
            }
          },
          [_c("i", { pre: true, attrs: { class: "icon-twitter" } })]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            pre: true,
            attrs: {
              href: "#",
              class: "social-icon social-linkedin",
              target: "_blank",
              title: "Linkedin"
            }
          },
          [_c("i", { pre: true, attrs: { class: "fab fa-linkedin-in" } })]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            pre: true,
            attrs: {
              href: "#",
              class: "social-icon social-mail",
              target: "_blank",
              title: "Email"
            }
          },
          [_c("i", { pre: true, attrs: { class: "icon-mail-alt" } })]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", [
      _c("i", { staticClass: "far fa-user" }),
      _vm._v("Author\n                    ")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/OwlCarouselComponent.vue?vue&type=template&id=6ee88ac0&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shared/OwlCarouselComponent.vue?vue&type=template&id=6ee88ac0& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "owl-carousel owl-theme", attrs: { id: _vm.id } },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/posts/PostThreeComponent.vue?vue&type=template&id=acd2217c&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shared/posts/PostThreeComponent.vue?vue&type=template&id=acd2217c& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _c("article", { staticClass: "post" }, [
    _vm.post.media.length
      ? _c(
          "div",
          { staticClass: "post-media" },
          [
            _c(
              "router-link",
              { attrs: { to: "/pages/blog/single/" + _vm.post.slug } },
              [
                _c("img", {
                  directives: [
                    {
                      name: "lazy",
                      rawName: "v-lazy",
                      value: _vm.$root.getUrl(
                        _vm.post.media[0].copy_link,
                        true
                      ),
                      expression: "$root.getUrl(post.media[0].copy_link, true)"
                    }
                  ],
                  attrs: {
                    alt: _vm.post.media[0].alt_text
                      ? _vm.post.media[0].alt_text
                      : "post",
                    width: _vm.post.media[0].width,
                    height: _vm.post.media[0].height
                  }
                })
              ]
            )
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "post-body" }, [
      _c("div", { staticClass: "post-date" }, [
        _c("span", { staticClass: "day" }, [_vm._v(_vm._s(_vm.day))]),
        _vm._v(" "),
        _c("span", { staticClass: "month" }, [_vm._v(_vm._s(_vm.month))])
      ]),
      _vm._v(" "),
      _c(
        "h2",
        { staticClass: "post-title" },
        [
          _c(
            "router-link",
            { attrs: { to: "/pages/blog/single/" + _vm.post.slug } },
            [
              _vm._v(
                "\n                    " +
                  _vm._s(_vm.post.title) +
                  "\n                "
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "post-content" },
        [
          _c("p", [_vm._v(_vm._s(_vm.post.short_desc))]),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "read-more",
              attrs: { to: "/pages/blog/single/" + _vm.post.slug }
            },
            [
              _vm._v("\n                    Read More\n                    "),
              _c("i", { staticClass: "fa fa-angle-right" })
            ]
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/client/components/pages/blog/BlogSingleComponent.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/client/components/pages/blog/BlogSingleComponent.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BlogSingleComponent_vue_vue_type_template_id_d8ea2478___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlogSingleComponent.vue?vue&type=template&id=d8ea2478& */ "./resources/js/client/components/pages/blog/BlogSingleComponent.vue?vue&type=template&id=d8ea2478&");
/* harmony import */ var _BlogSingleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlogSingleComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/components/pages/blog/BlogSingleComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BlogSingleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BlogSingleComponent_vue_vue_type_template_id_d8ea2478___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BlogSingleComponent_vue_vue_type_template_id_d8ea2478___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/pages/blog/BlogSingleComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/pages/blog/BlogSingleComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/client/components/pages/blog/BlogSingleComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogSingleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BlogSingleComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/blog/BlogSingleComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogSingleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/components/pages/blog/BlogSingleComponent.vue?vue&type=template&id=d8ea2478&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/client/components/pages/blog/BlogSingleComponent.vue?vue&type=template&id=d8ea2478& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogSingleComponent_vue_vue_type_template_id_d8ea2478___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BlogSingleComponent.vue?vue&type=template&id=d8ea2478& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/pages/blog/BlogSingleComponent.vue?vue&type=template&id=d8ea2478&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogSingleComponent_vue_vue_type_template_id_d8ea2478___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogSingleComponent_vue_vue_type_template_id_d8ea2478___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/client/components/shared/OwlCarouselComponent.vue":
/*!************************************************************************!*\
  !*** ./resources/js/client/components/shared/OwlCarouselComponent.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OwlCarouselComponent_vue_vue_type_template_id_6ee88ac0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OwlCarouselComponent.vue?vue&type=template&id=6ee88ac0& */ "./resources/js/client/components/shared/OwlCarouselComponent.vue?vue&type=template&id=6ee88ac0&");
/* harmony import */ var _OwlCarouselComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OwlCarouselComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/components/shared/OwlCarouselComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OwlCarouselComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OwlCarouselComponent_vue_vue_type_template_id_6ee88ac0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OwlCarouselComponent_vue_vue_type_template_id_6ee88ac0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/shared/OwlCarouselComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/shared/OwlCarouselComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/client/components/shared/OwlCarouselComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OwlCarouselComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OwlCarouselComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/OwlCarouselComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OwlCarouselComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/components/shared/OwlCarouselComponent.vue?vue&type=template&id=6ee88ac0&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/client/components/shared/OwlCarouselComponent.vue?vue&type=template&id=6ee88ac0& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OwlCarouselComponent_vue_vue_type_template_id_6ee88ac0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OwlCarouselComponent.vue?vue&type=template&id=6ee88ac0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/OwlCarouselComponent.vue?vue&type=template&id=6ee88ac0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OwlCarouselComponent_vue_vue_type_template_id_6ee88ac0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OwlCarouselComponent_vue_vue_type_template_id_6ee88ac0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/client/components/shared/posts/PostThreeComponent.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/client/components/shared/posts/PostThreeComponent.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PostThreeComponent_vue_vue_type_template_id_acd2217c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostThreeComponent.vue?vue&type=template&id=acd2217c& */ "./resources/js/client/components/shared/posts/PostThreeComponent.vue?vue&type=template&id=acd2217c&");
/* harmony import */ var _PostThreeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostThreeComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/components/shared/posts/PostThreeComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PostThreeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PostThreeComponent_vue_vue_type_template_id_acd2217c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PostThreeComponent_vue_vue_type_template_id_acd2217c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/shared/posts/PostThreeComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/shared/posts/PostThreeComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/client/components/shared/posts/PostThreeComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostThreeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PostThreeComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/posts/PostThreeComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostThreeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/components/shared/posts/PostThreeComponent.vue?vue&type=template&id=acd2217c&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/client/components/shared/posts/PostThreeComponent.vue?vue&type=template&id=acd2217c& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostThreeComponent_vue_vue_type_template_id_acd2217c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PostThreeComponent.vue?vue&type=template&id=acd2217c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/posts/PostThreeComponent.vue?vue&type=template&id=acd2217c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostThreeComponent_vue_vue_type_template_id_acd2217c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostThreeComponent_vue_vue_type_template_id_acd2217c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);