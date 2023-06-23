(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/products/ProductLeftSidebarComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/products/ProductLeftSidebarComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_image_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-image-lightbox */ "./node_modules/vue-image-lightbox/dist/vue-image-lightbox.min.js");
/* harmony import */ var vue_image_lightbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_image_lightbox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_image_lightbox_dist_vue_image_lightbox_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-image-lightbox/dist/vue-image-lightbox.min.css */ "./node_modules/vue-image-lightbox/dist/vue-image-lightbox.min.css");
/* harmony import */ var vue_image_lightbox_dist_vue_image_lightbox_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_image_lightbox_dist_vue_image_lightbox_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_quantity_input_HorizontalQuantityInputComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/quantity-input/HorizontalQuantityInputComponent */ "./resources/js/client/components/shared/quantity-input/HorizontalQuantityInputComponent.vue");
/* harmony import */ var _shared_OwlCarouselComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/OwlCarouselComponent */ "./resources/js/client/components/shared/OwlCarouselComponent.vue");
/* harmony import */ var _shared_products_ProductOneComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/products/ProductOneComponent */ "./resources/js/client/components/shared/products/ProductOneComponent.vue");
/* harmony import */ var _shared_products_ProductTwoComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/products/ProductTwoComponent */ "./resources/js/client/components/shared/products/ProductTwoComponent.vue");
/* harmony import */ var _shared_ProductBreadcrumbComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/ProductBreadcrumbComponent */ "./resources/js/client/components/products/shared/ProductBreadcrumbComponent.vue");
/* harmony import */ var _shared_ProductReviewsComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/ProductReviewsComponent */ "./resources/js/client/components/products/shared/ProductReviewsComponent.vue");
/* harmony import */ var _shared_ProductSidebarOneComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/ProductSidebarOneComponent */ "./resources/js/client/components/products/shared/ProductSidebarOneComponent.vue");
/* harmony import */ var _shared_ProductNavComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/ProductNavComponent */ "./resources/js/client/components/products/shared/ProductNavComponent.vue");
/* harmony import */ var _store_modules_cart_mutation_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store/modules/cart/mutation-types */ "./resources/js/client/store/modules/cart/mutation-types.js");
/* harmony import */ var _store_modules_wishlist_mutation_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../store/modules/wishlist/mutation-types */ "./resources/js/client/store/modules/wishlist/mutation-types.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    LightBox: vue_image_lightbox__WEBPACK_IMPORTED_MODULE_2___default.a,
    HorizontalQuantityInputComponent: _shared_quantity_input_HorizontalQuantityInputComponent__WEBPACK_IMPORTED_MODULE_4__["default"],
    OwlCarouselComponent: _shared_OwlCarouselComponent__WEBPACK_IMPORTED_MODULE_5__["default"],
    ProductOneComponent: _shared_products_ProductOneComponent__WEBPACK_IMPORTED_MODULE_6__["default"],
    ProductTwoComponent: _shared_products_ProductTwoComponent__WEBPACK_IMPORTED_MODULE_7__["default"],
    ProductBreadcrumbComponent: _shared_ProductBreadcrumbComponent__WEBPACK_IMPORTED_MODULE_8__["default"],
    ProductSidebarOneComponent: _shared_ProductSidebarOneComponent__WEBPACK_IMPORTED_MODULE_10__["default"],
    ProductReviewsComponent: _shared_ProductReviewsComponent__WEBPACK_IMPORTED_MODULE_9__["default"],
    ProductNavComponent: _shared_ProductNavComponent__WEBPACK_IMPORTED_MODULE_11__["default"]
  },
  data: function data() {
    return {
      loaded: false,
      product: {
        media: [],
        reviews: [],
        categories: [],
        tags: [],
        average_rating: 0
      },
      prevProduct: null,
      nextProduct: null,
      variations: [],
      selectedProduct: {},
      showPrice: false,
      attrFilters: [],
      qty: 1,
      relatedProducts: [],
      upsells: [],
      approvedReviewsCount: 0,
      // Product Widget
      featuredProducts: [],
      bestSellings: [],
      newArrivals: [],
      topRates: [],
      categories: []
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])("wishlist", ["isInWishlist"])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])("setting", ["getProductSettings", "formatPrice", "priceSuffix", "formatStock", "showNewBadge"])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])("user", ["isCustomer", "getUser", "userName"])), {}, {
    lightBoxMedia: function lightBoxMedia() {
      var _this = this;

      return this.product.media.reduce(function (acc, cur) {
        return [].concat(_toConsumableArray(acc), [{
          thumb: window.baseUrl + "/storage/" + cur.copy_link,
          src: window.baseUrl + "/storage/" + cur.copy_link,
          caption: _this.product.name
        }]);
      }, []);
    }
  }),
  watch: {
    $route: function $route() {
      this.getProduct();
    }
  },
  created: function created() {
    this.getProduct();
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])("cart", ["addToCart"])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapMutations"])("wishlist", {
    addToWishlist: _store_modules_wishlist_mutation_types__WEBPACK_IMPORTED_MODULE_13__["ADD_TO_WISHLIST"]
  })), {}, {
    addCart: function addCart() {
      if (this.selectedProduct.media.length == 0) {
        this.selectedProduct.media = _toConsumableArray(this.product.media);
      }

      if (this.product.type == "variable") {
        this.selectedProduct.sold_individually = this.product.sold_individually;
      }

      this.addToCart({
        product: this.selectedProduct,
        qty: this.qty
      });
    },
    getSaleRate: function getSaleRate(salePrice, Price) {
      return ((1 - salePrice / Price) * 100).toFixed();
    },
    changeQty: function changeQty(id, qty) {
      this.qty = qty;
    },
    isColor: function isColor(value) {
      return value.includes("#");
    },
    openGallery: function openGallery() {
      var activeDot = document.querySelector("#carousel-custom-dots .owl-dot.active");
      var children = activeDot.parentElement.parentElement.children;
      var i;

      for (i = 0; i < children.length; i++) {
        if (activeDot.parentElement === children[i]) break;
      }

      this.$refs.lightbox.showImage(i);
    },
    getProduct: function () {
      var _getProduct = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this2 = this;

        var savedInfo, email;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                savedInfo = JSON.parse(window.localStorage.getItem("product"));

                if (this.isCustomer) {
                  email = this.getUser.email;
                } else if (savedInfo) {
                  email = savedInfo.email;
                }

                if (document.querySelector(".skeleton-body")) document.querySelector(".skeleton-body").classList.remove("loaded");
                this.loaded = false;
                _context.next = 6;
                return window.axios.get("/web/products/" + this.$route.params.slug, {
                  params: {
                    author_email: email,
                    sidebar: true
                  }
                }).then(function (response) {
                  _this2.product = _objectSpread({}, response.data.product);
                  _this2.relatedProducts = _toConsumableArray(response.data.relatedProducts);
                  _this2.upsells = _toConsumableArray(response.data.upsells);
                  _this2.featuredProducts = response.data.featuredProducts;
                  _this2.bestSellings = response.data.bestSellings;
                  _this2.newArrivals = response.data.newArrivals;
                  _this2.topRates = response.data.topRates;
                  _this2.categories = response.data.categories;
                  var curIndex = -1;

                  _this2.relatedProducts.map(function (item, index) {
                    if (item.id < _this2.product.id) curIndex = index;
                  });

                  if (curIndex >= 0) _this2.prevProduct = _this2.relatedProducts[curIndex];else _this2.prevProduct = null;
                  if (curIndex < _this2.relatedProducts.length - 1) _this2.nextProduct = _this2.relatedProducts[curIndex + 1];else _this2.nextProduct = null;
                  _this2.product.attributes = _this2.product.attributes.reduce(function (acc, cur) {
                    for (var i = 0; i < response.data.attributes.length; i++) {
                      var termIds = cur.pivot.term_ids.split(",");

                      if (cur.id == response.data.attributes[i].id) {
                        var termOpts = response.data.attributes[i].terms.reduce(function (acc1, cur1) {
                          if (termIds.includes(cur1.id.toString())) {
                            return [].concat(_toConsumableArray(acc1), [{
                              id: cur1.id,
                              text: cur1.name,
                              slug: cur1.slug
                            }]);
                          } else {
                            return acc1;
                          }
                        }, []);
                        return [].concat(_toConsumableArray(acc), [_objectSpread(_objectSpread({}, cur), {}, {
                          pivot: _objectSpread(_objectSpread({}, cur.pivot), {}, {
                            term_ids: termIds
                          }),
                          termOptions: termOpts
                        })]);
                      }
                    }

                    return acc;
                  }, []);

                  if (response.data.product.type == "variable") {
                    _this2.variations = _toConsumableArray(response.data.variations);
                    var attrOpts = [];

                    _this2.product.attributes.map(function (attr) {
                      if (attr.pivot.used_for_variation && attr.pivot.term_ids.length > 0) {
                        var options = [];
                        var activeTermId = null;
                        var activeTermName = null;

                        for (var i = 0; i < attr.pivot.term_ids.length; i++) {
                          var result = attr.termOptions.find(function (option) {
                            return option.id == attr.pivot.term_ids[i];
                          });

                          if (result) {
                            if (_this2.$route.query.termId && _this2.$route.query.termId.find(function (tr) {
                              return tr == result.id;
                            })) {
                              options.push(_objectSpread(_objectSpread({}, result), {}, {
                                active: true,
                                enabled: true
                              }));
                              activeTermName = _this2.isColor(result.text) ? result.slug : result.text;
                              activeTermId = result.id;
                            } else {
                              options.push(_objectSpread(_objectSpread({}, result), {}, {
                                active: false,
                                enabled: false
                              }));
                            }
                          }
                        }

                        attrOpts.push({
                          name: attr.name,
                          id: attr.id,
                          activeTermId: activeTermId,
                          activeTermName: activeTermName,
                          options: options
                        });
                      }
                    });

                    _this2.attrFilters = [].concat(attrOpts);

                    _this2.resetAttrFilter();
                  } else if (response.data.product.type == "simple") {
                    _this2.selectedProduct = _objectSpread({}, _this2.product);
                    _this2.showPrice = true;
                  }

                  _this2.approvedReviewsCount = _this2.product.approved_reviews_count;
                  if (document.querySelector(".skeleton-body")) document.querySelector(".skeleton-body").classList.add("loaded");
                })["catch"](function (error) {
                  _this2.$router.push("/pages/404");
                });

              case 6:
                this.loaded = true;

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getProduct() {
        return _getProduct.apply(this, arguments);
      }

      return getProduct;
    }(),
    clearFilter: function clearFilter() {
      this.attrFilters = this.attrFilters.reduce(function (attrAcc, attrCur) {
        var options = attrCur.options.reduce(function (optAcc, optCur) {
          return [].concat(_toConsumableArray(optAcc), [_objectSpread(_objectSpread({}, optCur), {}, {
            enabled: false,
            active: false
          })]);
        }, []);
        return [].concat(_toConsumableArray(attrAcc), [_objectSpread(_objectSpread({}, attrCur), {}, {
          activeTermName: null,
          activeTermId: null,
          options: options
        })]);
      }, []);
      this.resetAttrFilter();
    },
    changeAttrFilter: function changeAttrFilter(attrIndex, termIndex) {
      var _this3 = this;

      var activeTermId = null;
      var activeTermName = null;
      this.attrFilters[attrIndex].options = this.attrFilters[attrIndex].options.reduce(function (acc, cur, index) {
        if (termIndex == index) {
          if (!cur.active) {
            activeTermId = cur.id;
            activeTermName = _this3.isColor(cur.text) ? cur.slug : cur.text;
          }

          return [].concat(_toConsumableArray(acc), [_objectSpread(_objectSpread({}, cur), {}, {
            active: !cur.active
          })]);
        } else {
          return [].concat(_toConsumableArray(acc), [_objectSpread(_objectSpread({}, cur), {}, {
            active: false
          })]);
        }
      }, []);
      this.attrFilters[attrIndex].activeTermId = activeTermId;
      this.attrFilters[attrIndex].activeTermName = activeTermName;
      this.resetAttrFilter();
    },
    resetAttrFilter: function resetAttrFilter() {
      var _this4 = this;

      var flag = true;
      var firstSelected = false;
      var tempAttrFilters = this.attrFilters.reduce(function (attrAcc, attrCur) {
        var options = attrCur.options.reduce(function (optAcc, optCur) {
          return [].concat(_toConsumableArray(optAcc), [_objectSpread(_objectSpread({}, optCur), {}, {
            enabled: false
          })]);
        }, []);
        if (!attrCur.activeTermId) flag = false;
        return [].concat(_toConsumableArray(attrAcc), [_objectSpread(_objectSpread({}, attrCur), {}, {
          options: _toConsumableArray(options)
        })]);
      }, []);
      this.variations.map(function (variation, vIndex) {
        var excerpts = JSON.parse(variation.excerpt);
        var matchFlag = true;
        excerpts.map(function (excerpt) {
          if (excerpt.termId) {
            var attr = _this4.attrFilters.find(function (item) {
              return item.id == excerpt.attrId;
            });

            if (attr && attr.activeTermId && attr.activeTermId !== excerpt.termId) matchFlag = false;
          }
        });

        if (matchFlag) {
          if (!firstSelected) {
            _this4.selectedProduct = variation;
            firstSelected = true;
          }

          tempAttrFilters = tempAttrFilters.reduce(function (attrAcc, attrCur) {
            var excerpt = excerpts.find(function (item) {
              return item.attrId == attrCur.id;
            });
            var options;

            if (!excerpt.termId) {
              options = attrCur.options.reduce(function (optAcc, optCur) {
                return [].concat(_toConsumableArray(optAcc), [_objectSpread(_objectSpread({}, optCur), {}, {
                  enabled: true
                })]);
              }, []);
            } else {
              var options = attrCur.options.reduce(function (optAcc, optCur) {
                if (excerpt.termId == optCur.id) {
                  return [].concat(_toConsumableArray(optAcc), [_objectSpread(_objectSpread({}, optCur), {}, {
                    enabled: true
                  })]);
                } else {
                  return [].concat(_toConsumableArray(optAcc), [optCur]);
                }
              }, []);
            }

            return [].concat(_toConsumableArray(attrAcc), [_objectSpread(_objectSpread({}, attrCur), {}, {
              options: _toConsumableArray(options)
            })]);
          }, []);
        }
      });
      this.attrFilters = _toConsumableArray(tempAttrFilters);

      if (flag) {
        this.showPrice = true;
        this.selectedProduct.excerpts = tempAttrFilters.reduce(function (attrAcc, attrCur) {
          return [].concat(_toConsumableArray(attrAcc), [{
            attrId: attrCur.id,
            termId: attrCur.activeTermId
          }]);
        }, []);
        var name = tempAttrFilters.reduce(function (attrAcc, attrCur) {
          return attrAcc + attrCur.activeTermName.replace(attrCur.activeTermName[0], attrCur.activeTermName[0].toUpperCase()) + ", ";
        }, this.product.name + " - ");
        this.selectedProduct.name = name.slice(0, -2);
      } else this.showPrice = false;
    },
    termNames: function termNames(attribute) {
      var _this5 = this;

      var names = "";
      attribute.termOptions.map(function (term, index) {
        if (index == 0) names += _this5.isColor(term.text) ? term.slug : term.text;else names += ",  " + (_this5.isColor(term.text) ? term.slug : term.text);
      });
      return names;
    },
    toReviewTab: function toReviewTab() {
      var reviewLink = document.querySelector("#product-tab-reviews");
      reviewLink.click();
      reviewLink.scrollIntoView({
        behavior: "smooth"
      }); // document.querySelector('.comment-form').scrollIntoView({ behavior: "smooth" });
    },
    incApprovedReviewsCount: function incApprovedReviewsCount() {
      this.approvedReviewsCount++;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/products/shared/ProductBreadcrumbComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/products/shared/ProductBreadcrumbComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    categories: Array,
    name: String
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/products/shared/ProductNavComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/products/shared/ProductNavComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    prevProduct: Object,
    nextProduct: Object
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/quantity-input/HorizontalQuantityInputComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shared/quantity-input/HorizontalQuantityInputComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    product: Object,
    quantity: {
      type: Number,
      "default": 1
    }
  },
  data: function data() {
    return {
      qty: 1
    };
  },
  watch: {
    product: function product() {
      if (this.product.qty) {
        this.qty = this.product.qty;
      } else {
        this.qty = 1;
      }
    }
  },
  created: function created() {
    if (this.product.qty) {
      this.qty = this.product.qty;
    }
  },
  methods: {
    countUp: function countUp() {
      if (this.product.manage_stock && this.product.stock_quantity <= this.qty) {
        return;
      }

      if (this.product.sold_individually) return;
      this.qty += 1;
      this.$emit("change-qty", this.product.id, this.qty, this.product.excerpts);
    },
    countDown: function countDown() {
      if (this.qty == 1) return;
      this.qty -= 1;
      this.$emit("change-qty", this.product.id, this.qty, this.product.excerpts);
    },
    changeQty: function changeQty() {
      this.$emit("change-qty", this.product.id, this.qty, this.product.excerpts);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/products/ProductLeftSidebarComponent.vue?vue&type=template&id=7e8dd8ff&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/products/ProductLeftSidebarComponent.vue?vue&type=template&id=7e8dd8ff& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
      "div",
      {
        staticClass:
          "container skeleton-body skel-shop-products sidebar-product"
      },
      [
        _c("product-breadcrumb-component", {
          attrs: { categories: _vm.product.categories, name: _vm.product.name }
        }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "row" },
          [
            _c("product-sidebar-one-component", {
              staticClass: "col-lg-3",
              attrs: {
                categories: _vm.categories,
                "featured-products": _vm.featuredProducts
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-9 main-content" }, [
              _c(
                "div",
                {
                  staticClass: "product-single-container product-single-default"
                },
                [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      {
                        staticClass: "col-md-6 col-lg-7 product-single-gallery"
                      },
                      [
                        _c("div", {
                          staticClass:
                            "skel-pro skel-magnifier skel-padding-128"
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "product-slider-container skel-hide" },
                          [
                            _c("div", { staticClass: "label-group" }, [
                              _vm.product.featured
                                ? _c(
                                    "div",
                                    { staticClass: "product-label label-hot" },
                                    [_vm._v("HOT")]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.showNewBadge(_vm.product)
                                ? _c(
                                    "div",
                                    { staticClass: "product-label label-new" },
                                    [_vm._v("NEW")]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.product.type == "simple" &&
                              _vm.product.min_max_price[0] !=
                                _vm.product.min_max_price[1]
                                ? _c(
                                    "div",
                                    { staticClass: "product-label label-sale" },
                                    [
                                      _vm._v(
                                        "\n                                            -" +
                                          _vm._s(
                                            _vm.getSaleRate(
                                              _vm.product.min_max_price[0],
                                              _vm.product.min_max_price[1]
                                            )
                                          ) +
                                          "%\n                                        "
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ]),
                            _vm._v(" "),
                            _vm.loaded
                              ? _c(
                                  "owl-carousel-component",
                                  {
                                    staticClass:
                                      "product-single-carousel show-nav-hover",
                                    attrs: {
                                      options: {
                                        dots: false,
                                        nav: true,
                                        loop: false,
                                        margin: 0,
                                        autoplay: false
                                      }
                                    }
                                  },
                                  [
                                    _vm._l(_vm.product.media, function(medium) {
                                      return _c(
                                        "div",
                                        {
                                          key: medium.id,
                                          staticClass: "product-item"
                                        },
                                        [
                                          _c("img", {
                                            directives: [
                                              {
                                                name: "lazy",
                                                rawName: "v-lazy",
                                                value: _vm.$root.getUrl(
                                                  medium.copy_link,
                                                  true,
                                                  600
                                                ),
                                                expression:
                                                  "\n\t\t\t\t\t\t\t\t\t\t\t\t\t$root.getUrl(\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tmedium.copy_link,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ttrue,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t600\n\t\t\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t\t\t"
                                              }
                                            ],
                                            staticClass: "product-single-image",
                                            attrs: {
                                              width: "600",
                                              height: "600",
                                              alt: medium.alt_text
                                                ? medium.alt_text
                                                : "product"
                                            }
                                          })
                                        ]
                                      )
                                    }),
                                    _vm._v(" "),
                                    _vm.product.media.length == 0
                                      ? _c(
                                          "div",
                                          { staticClass: "product-item" },
                                          [
                                            _c("img", {
                                              directives: [
                                                {
                                                  name: "lazy",
                                                  rawName: "v-lazy",
                                                  value: _vm.$root.getUrl(
                                                    "server/images/placeholder-img-300x300.png"
                                                  ),
                                                  expression:
                                                    "\n\t\t\t\t\t\t\t\t\t\t\t\t\t$root.getUrl(\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t'server/images/placeholder-img-300x300.png'\n\t\t\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t\t\t"
                                                }
                                              ],
                                              attrs: {
                                                width: "300",
                                                height: "300",
                                                alt: "product"
                                              }
                                            })
                                          ]
                                        )
                                      : _vm._e()
                                  ],
                                  2
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.product.media.length > 0
                              ? _c(
                                  "span",
                                  {
                                    staticClass: "prod-full-screen",
                                    on: { click: _vm.openGallery }
                                  },
                                  [_c("i", { staticClass: "icon-plus" })]
                                )
                              : _vm._e()
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "prod-thumbnail owl-dots skel-hide",
                            attrs: { id: "carousel-custom-dots" }
                          },
                          [
                            _vm.loaded
                              ? _c(
                                  "owl-carousel-component",
                                  {
                                    attrs: {
                                      options: {
                                        dots: false,
                                        loop: false,
                                        margin: 5,
                                        autoplay: false,
                                        items: 4
                                      }
                                    }
                                  },
                                  [
                                    _vm._l(_vm.product.media, function(
                                      medium,
                                      index
                                    ) {
                                      return _c(
                                        "div",
                                        {
                                          key: medium.id,
                                          staticClass: "owl-dot",
                                          class: { active: index == 0 }
                                        },
                                        [
                                          _c("img", {
                                            directives: [
                                              {
                                                name: "lazy",
                                                rawName: "v-lazy",
                                                value: _vm.$root.getUrl(
                                                  medium.copy_link,
                                                  true,
                                                  100
                                                ),
                                                expression:
                                                  "\n\t\t\t\t\t\t\t\t\t\t\t$root.getUrl(\n\t\t\t\t\t\t\t\t\t\t\t\tmedium.copy_link,\n\t\t\t\t\t\t\t\t\t\t\t\ttrue,\n\t\t\t\t\t\t\t\t\t\t\t\t100\n\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t"
                                              }
                                            ],
                                            staticClass: "product-single-image",
                                            attrs: {
                                              alt: "product",
                                              width: "100",
                                              height: "100"
                                            }
                                          })
                                        ]
                                      )
                                    }),
                                    _vm._v(" "),
                                    _vm.product.media.length == 0
                                      ? _c("div", { staticClass: "owl-dot" }, [
                                          _c("img", {
                                            staticClass: "product-single-image",
                                            attrs: {
                                              src: _vm.$root.getUrl(
                                                "server/images/placeholder-img-300x300.png"
                                              ),
                                              alt: "product",
                                              width: "100",
                                              height: "100"
                                            }
                                          })
                                        ])
                                      : _vm._e()
                                  ],
                                  2
                                )
                              : _vm._e()
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6 col-lg-5" }, [
                      _c("div", { staticClass: "skel-pro skel-detail" }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "product-single-details skel-hide" },
                        [
                          _c("h1", { staticClass: "product-title" }, [
                            _vm._v(_vm._s(_vm.product.name))
                          ]),
                          _vm._v(" "),
                          _c("product-nav-component", {
                            attrs: {
                              "prev-product": _vm.prevProduct,
                              "next-product": _vm.nextProduct
                            }
                          }),
                          _vm._v(" "),
                          _vm.getProductSettings.enableReview &&
                          _vm.getProductSettings.enableStarRating
                            ? _c(
                                "div",
                                {
                                  staticClass:
                                    "ratings-container product-default"
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "product-ratings" },
                                    [
                                      _c("span", {
                                        staticClass: "ratings",
                                        style:
                                          "width:" +
                                          20 * _vm.product.average_rating +
                                          "%"
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticClass: "tooltiptext tooltip-top"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.product.average_rating.toFixed(
                                                2
                                              )
                                            )
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      staticClass: "rating-link",
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.toReviewTab.apply(
                                            null,
                                            arguments
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                            " +
                                          _vm._s(_vm.approvedReviewsCount) +
                                          " customer\n                                            review\n                                        "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    { staticClass: "rating-link-separator" },
                                    [_vm._v("|")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      staticClass: "rating-link",
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.toReviewTab.apply(
                                            null,
                                            arguments
                                          )
                                        }
                                      }
                                    },
                                    [_vm._v("Add a review")]
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c("hr", { staticClass: "short-divider" }),
                          _vm._v(" "),
                          _vm.product.type == "simple"
                            ? _c("div", { staticClass: "price-box" }, [
                                _vm.product.min_max_price[0] !=
                                _vm.product.min_max_price[1]
                                  ? _c("del", { staticClass: "old-price" }, [
                                      _c("span", {
                                        domProps: {
                                          innerHTML: _vm._s(
                                            _vm.formatPrice(
                                              _vm.product.min_max_price[1]
                                            ) + _vm.priceSuffix
                                          )
                                        }
                                      })
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("span", {
                                  staticClass: "product-price",
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.formatPrice(
                                        _vm.product.min_max_price[0]
                                      ) + _vm.priceSuffix
                                    )
                                  }
                                })
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.product.type == "variable"
                            ? _c("div", { staticClass: "price-box" }, [
                                _c("span", {
                                  staticClass: "product-price",
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.formatPrice(
                                        _vm.product.min_max_price[0]
                                      ) + _vm.priceSuffix
                                    )
                                  }
                                }),
                                _vm._v(" "),
                                _vm.product.min_max_price[0] !==
                                _vm.product.min_max_price[1]
                                  ? _c(
                                      "span",
                                      { staticClass: "product-price" },
                                      [
                                        _vm._v(
                                          "\n                                            –\n                                            "
                                        ),
                                        _c("span", {
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.formatPrice(
                                                _vm.product.min_max_price[1]
                                              ) + _vm.priceSuffix
                                            )
                                          }
                                        })
                                      ]
                                    )
                                  : _vm._e()
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("div", { staticClass: "product-desc" }, [
                            _c("p", [
                              _c("span", {
                                domProps: {
                                  innerHTML: _vm._s(_vm.product.short_desc)
                                }
                              })
                            ])
                          ]),
                          _vm._v(" "),
                          _c("ul", { staticClass: "single-info-list" }, [
                            _vm.product.type == "simple" &&
                            (_vm.product.stock_status == "out-of-stock" ||
                              _vm.product.manage_stock)
                              ? _c("li", {
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.formatStock(_vm.product)
                                    )
                                  }
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.product.sku
                              ? _c("li", [
                                  _vm._v(
                                    "\n                                            SKU:\n                                            "
                                  ),
                                  _c("strong", [
                                    _vm._v(_vm._s(_vm.product.sku))
                                  ])
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.product.categories.length > 0
                              ? _c(
                                  "li",
                                  [
                                    _vm._v(
                                      "\n                                            CATEGORIES:\n                                            "
                                    ),
                                    _vm._l(_vm.product.categories, function(
                                      category,
                                      index
                                    ) {
                                      return _c(
                                        "strong",
                                        { key: category.id },
                                        [
                                          _c(
                                            "router-link",
                                            {
                                              staticClass: "product-category",
                                              attrs: {
                                                to: {
                                                  path: "/shop/default",
                                                  query: {
                                                    category: category.slug
                                                  }
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                                    " +
                                                  _vm._s(category.name) +
                                                  "\n                                                "
                                              )
                                            ]
                                          ),
                                          _vm._v(
                                            "\n                                                " +
                                              _vm._s(
                                                index <
                                                  _vm.product.categories
                                                    .length -
                                                    1
                                                  ? ","
                                                  : ""
                                              ) +
                                              "\n                                            "
                                          )
                                        ],
                                        1
                                      )
                                    })
                                  ],
                                  2
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.product.tags.length > 0
                              ? _c(
                                  "li",
                                  [
                                    _vm._v(
                                      "\n                                            TAGs:\n                                            "
                                    ),
                                    _vm._l(_vm.product.tags, function(
                                      tag,
                                      index
                                    ) {
                                      return _c(
                                        "strong",
                                        { key: tag.id },
                                        [
                                          _c(
                                            "router-link",
                                            {
                                              staticClass: "product-category",
                                              attrs: {
                                                to: {
                                                  path: "/shop/default",
                                                  query: {
                                                    tag: tag.slug
                                                  }
                                                }
                                              }
                                            },
                                            [_vm._v(_vm._s(tag.name))]
                                          ),
                                          _vm._v(
                                            "\n                                                " +
                                              _vm._s(
                                                index <
                                                  _vm.product.tags.length - 1
                                                  ? ","
                                                  : ""
                                              ) +
                                              "\n                                            "
                                          )
                                        ],
                                        1
                                      )
                                    })
                                  ],
                                  2
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _vm.product.type == "variable"
                            ? _c(
                                "div",
                                { staticClass: "product-filters-container" },
                                [
                                  _vm._l(_vm.attrFilters, function(
                                    attr,
                                    indexAttr
                                  ) {
                                    return _c(
                                      "div",
                                      {
                                        key: attr.id,
                                        staticClass: "product-single-filter"
                                      },
                                      [
                                        _c("label", [
                                          _vm._v(_vm._s(attr.name) + ":")
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "ul",
                                          { staticClass: "config-size-list" },
                                          _vm._l(attr.options, function(
                                            term,
                                            indexTerm
                                          ) {
                                            return _c(
                                              "li",
                                              {
                                                key: term.id,
                                                class: {
                                                  active: term.active
                                                }
                                              },
                                              [
                                                _vm.isColor(term.text)
                                                  ? [
                                                      term.enabled
                                                        ? _c("a", {
                                                            key: "is-color-1",
                                                            staticClass:
                                                              "filter-color border-0",
                                                            style:
                                                              "background-color: " +
                                                              term.text,
                                                            attrs: {
                                                              href: "#"
                                                            },
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                $event.preventDefault()
                                                                return _vm.changeAttrFilter(
                                                                  indexAttr,
                                                                  indexTerm
                                                                )
                                                              }
                                                            }
                                                          })
                                                        : _c("a", {
                                                            key: "is-color-2",
                                                            staticClass:
                                                              "filter-color border-0 disabled",
                                                            style:
                                                              "background-color: " +
                                                              term.text,
                                                            attrs: {
                                                              href:
                                                                "javascript:;"
                                                            }
                                                          })
                                                    ]
                                                  : [
                                                      term.enabled
                                                        ? _c(
                                                            "a",
                                                            {
                                                              key:
                                                                "not-color-1",
                                                              attrs: {
                                                                href: "#"
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  $event.preventDefault()
                                                                  return _vm.changeAttrFilter(
                                                                    indexAttr,
                                                                    indexTerm
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  term.text
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        : _c(
                                                            "a",
                                                            {
                                                              key:
                                                                "not-color-2",
                                                              staticClass:
                                                                "disabled",
                                                              attrs: {
                                                                href:
                                                                  "javascript:;"
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  term.text
                                                                )
                                                              )
                                                            ]
                                                          )
                                                    ]
                                              ],
                                              2
                                            )
                                          }),
                                          0
                                        )
                                      ]
                                    )
                                  }),
                                  _vm._v(" "),
                                  _vm.showPrice
                                    ? _c(
                                        "div",
                                        {
                                          staticClass: "product-single-filter"
                                        },
                                        [
                                          _c("label"),
                                          _vm._v(" "),
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "font1 text-uppercase clear-btn",
                                              attrs: { href: "#" },
                                              on: {
                                                click: function($event) {
                                                  $event.preventDefault()
                                                  return _vm.clearFilter.apply(
                                                    null,
                                                    arguments
                                                  )
                                                }
                                              }
                                            },
                                            [_vm._v("Clear")]
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                2
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.product.type == "variable" && _vm.showPrice
                            ? _c("div", { staticClass: "price-box" }, [
                                _vm.selectedProduct.min_max_price[0] !=
                                _vm.selectedProduct.min_max_price[1]
                                  ? _c("del", { staticClass: "old-price" }, [
                                      _c("span", {
                                        domProps: {
                                          innerHTML: _vm._s(
                                            _vm.formatPrice(
                                              _vm.selectedProduct
                                                .min_max_price[1]
                                            ) + _vm.priceSuffix
                                          )
                                        }
                                      })
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("span", {
                                  staticClass: "product-price",
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.formatPrice(
                                        _vm.selectedProduct.min_max_price[0]
                                      ) + _vm.priceSuffix
                                    )
                                  }
                                })
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.product.type == "variable" &&
                          _vm.showPrice &&
                          (_vm.selectedProduct.stock_status == "out-of-stock" ||
                            _vm.selectedProduct.manage_stock)
                            ? _c("div", {
                                staticClass: "variation-availability",
                                domProps: {
                                  innerHTML: _vm._s(
                                    _vm.formatStock(_vm.selectedProduct)
                                  )
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.product.stock_status == "on-backorder" ||
                          _vm.product.stock_status == "in-stock" ||
                          _vm.product.stock_quantity > 0
                            ? _c(
                                "div",
                                { staticClass: "product-action" },
                                [
                                  _c("horizontal-quantity-input-component", {
                                    attrs: { product: _vm.product },
                                    on: { "change-qty": _vm.changeQty }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      staticClass: "btn btn-dark add-cart",
                                      class: { disabled: !_vm.showPrice },
                                      attrs: {
                                        href: "#",
                                        title: "Add to Cart"
                                      },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.addCart.apply(
                                            null,
                                            arguments
                                          )
                                        }
                                      }
                                    },
                                    [_vm._v("Add to Cart")]
                                  )
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c("hr", { staticClass: "divider mb-1" }),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "product-single-share" },
                            [
                              _c("label", { staticClass: "sr-only" }, [
                                _vm._v("Share:")
                              ]),
                              _vm._v(" "),
                              _vm._m(0),
                              _vm._v(" "),
                              _vm.isInWishlist(_vm.product)
                                ? _c(
                                    "router-link",
                                    {
                                      staticClass:
                                        "add-wishlist browse-wishlist",
                                      attrs: {
                                        to: "/pages/wishlist",
                                        title: "Browse Wishlist"
                                      }
                                    },
                                    [_vm._v("Browse Wishlist")]
                                  )
                                : _c(
                                    "a",
                                    {
                                      key: "out-wishlist",
                                      staticClass: "add-wishlist",
                                      attrs: {
                                        href: "#",
                                        title: "Add to Wishlist"
                                      },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.addToWishlist({
                                            product: _vm.product
                                          })
                                        }
                                      }
                                    },
                                    [_vm._v("Add to Wishlist")]
                                  )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "skel-pro skel-tab skel-padding-20" }),
              _vm._v(" "),
              _c("div", { staticClass: "product-single-tabs" }, [
                _c(
                  "ul",
                  { staticClass: "nav nav-tabs", attrs: { role: "tablist" } },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _vm._m(2),
                    _vm._v(" "),
                    _c("li", { staticClass: "nav-item" }, [
                      _vm.getProductSettings.enableReview
                        ? _c(
                            "a",
                            {
                              staticClass: "nav-link",
                              attrs: {
                                id: "product-tab-reviews",
                                "data-toggle": "tab",
                                href: "#product-reviews-content",
                                role: "tab",
                                "aria-controls": "product-reviews-content",
                                "aria-selected": "false"
                              }
                            },
                            [
                              _vm._v(
                                "Reviews (" +
                                  _vm._s(_vm.approvedReviewsCount) +
                                  ")"
                              )
                            ]
                          )
                        : _vm._e()
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "tab-content" }, [
                  _c(
                    "div",
                    {
                      staticClass: "tab-pane fade show active",
                      attrs: {
                        id: "product-desc-content",
                        role: "tabpanel",
                        "aria-labelledby": "product-tab-desc"
                      }
                    },
                    [
                      _c("div", {
                        staticClass: "product-desc-content",
                        domProps: { innerHTML: _vm._s(_vm.product.description) }
                      }),
                      _vm._v(" "),
                      !_vm.product.description
                        ? _c("div", { staticClass: "product-desc-content" }, [
                            _vm._v("No description for the product")
                          ])
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "tab-pane fade fade",
                      attrs: {
                        id: "product-more-info-content",
                        role: "tabpanel",
                        "aria-labelledby": "product-tab-more-info"
                      }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "product-desc-content" },
                        [
                          _vm.product.weight || _vm.selectedProduct.weight
                            ? _c("p", { staticClass: "mb-0" }, [
                                _vm._v(
                                  "\n                                        Weight:   " +
                                    _vm._s(
                                      _vm.selectedProduct.weight
                                        ? _vm.selectedProduct.weight
                                        : _vm.product.weight
                                    ) +
                                    _vm._s(_vm.getProductSettings.weightUnit) +
                                    "\n                                    "
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          (_vm.product.length &&
                            _vm.product.width &&
                            _vm.product.height) ||
                          (_vm.selectedProduct.length &&
                            _vm.selectedProduct.width &&
                            _vm.selectedProduct.height)
                            ? _c("p", { staticClass: "mb-0" }, [
                                _vm._v(
                                  "\n                                        Dimensions:   \n                                        " +
                                    _vm._s(
                                      _vm.selectedProduct.length
                                        ? _vm.selectedProduct.length
                                        : _vm.product.length
                                    ) +
                                    "\n                                        " +
                                    _vm._s(
                                      _vm.getProductSettings.dimentionsUnit
                                    ) +
                                    " x\n                                        " +
                                    _vm._s(
                                      _vm.selectedProduct.width
                                        ? _vm.selectedProduct.width
                                        : _vm.product.width
                                    ) +
                                    "\n                                        " +
                                    _vm._s(
                                      _vm.getProductSettings.dimentionsUnit
                                    ) +
                                    " x\n                                        " +
                                    _vm._s(
                                      _vm.selectedProduct.height
                                        ? _vm.selectedProduct.height
                                        : _vm.product.height
                                    ) +
                                    "\n                                        " +
                                    _vm._s(
                                      _vm.getProductSettings.dimentionsUnit
                                    ) +
                                    "\n                                    "
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm._l(_vm.product.attributes, function(attr) {
                            return _c(
                              "p",
                              { key: attr.id, staticClass: "mb-0" },
                              [
                                _vm._v(
                                  "\n                                        " +
                                    _vm._s(attr.name) +
                                    ":   " +
                                    _vm._s(_vm.termNames(attr)) +
                                    "\n                                    "
                                )
                              ]
                            )
                          })
                        ],
                        2
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _vm.getProductSettings.enableReview
                    ? _c(
                        "div",
                        {
                          staticClass: "tab-pane fade",
                          attrs: {
                            id: "product-reviews-content",
                            role: "tabpanel",
                            "aria-labelledby": "product-tab-reviews"
                          }
                        },
                        [
                          _c("product-reviews-component", {
                            attrs: {
                              "product-id": _vm.product.id,
                              "product-name": _vm.product.name,
                              "approved-reviews-count":
                                _vm.approvedReviewsCount,
                              reviews: _vm.product.reviews
                            },
                            on: {
                              "new-approved-review": _vm.incApprovedReviewsCount
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _vm.relatedProducts.length > 0 && this.loaded
                ? _c(
                    "div",
                    { staticClass: "products-section pt-0" },
                    [
                      _c("h2", { staticClass: "section-title" }, [
                        _vm._v("Related Products")
                      ]),
                      _vm._v(" "),
                      _c(
                        "owl-carousel-component",
                        {
                          staticClass: "products-slider dots-top",
                          attrs: {
                            options: {
                              loop: false,
                              autoplay: false,
                              dots: true,
                              items: 2,
                              responsive: {
                                576: { items: 3 },
                                992: { items: 4 }
                              }
                            }
                          }
                        },
                        _vm._l(_vm.relatedProducts, function(prod) {
                          return _c("product-one-component", {
                            key: prod.id,
                            attrs: { product: prod }
                          })
                        }),
                        1
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.upsells.length > 0 && this.loaded
                ? _c(
                    "div",
                    { staticClass: "products-section pt-0" },
                    [
                      _c("h2", { staticClass: "section-title" }, [
                        _vm._v("You May Also Like")
                      ]),
                      _vm._v(" "),
                      _c(
                        "owl-carousel-component",
                        {
                          staticClass: "products-slider dots-top",
                          attrs: {
                            options: {
                              loop: false,
                              autoplay: false,
                              dots: true,
                              items: 2,
                              responsive: {
                                576: { items: 3 },
                                992: { items: 4 }
                              }
                            }
                          }
                        },
                        _vm._l(_vm.upsells, function(prod) {
                          return _c("product-one-component", {
                            key: prod.id,
                            attrs: { product: prod }
                          })
                        }),
                        1
                      )
                    ],
                    1
                  )
                : _vm._e()
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c("hr", { staticClass: "mt-0 m-b-5" }),
        _vm._v(" "),
        _c("div", { staticClass: "product-widgets-container row pb-2 mb-4" }, [
          _c(
            "div",
            { staticClass: "col-lg-3 col-sm-6 pb-5 pb-md-0" },
            [
              _c("h4", { staticClass: "section-sub-title m-b-3" }, [
                _vm._v("Featured Products")
              ]),
              _vm._v(" "),
              _vm._l(_vm.featuredProducts, function(product) {
                return _c("product-two-component", {
                  key: product.id,
                  attrs: { product: product }
                })
              })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-lg-3 col-sm-6 pb-5 pb-md-0" },
            [
              _c("h4", { staticClass: "section-sub-title m-b-3" }, [
                _vm._v("Best Selling Products")
              ]),
              _vm._v(" "),
              _vm._l(_vm.bestSellings, function(product) {
                return _c("product-two-component", {
                  key: product.id,
                  attrs: { product: product }
                })
              })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-lg-3 col-sm-6 pb-5 pb-md-0" },
            [
              _c("h4", { staticClass: "section-sub-title m-b-3" }, [
                _vm._v("Latest Products")
              ]),
              _vm._v(" "),
              _vm._l(_vm.newArrivals, function(product) {
                return _c("product-two-component", {
                  key: product.id,
                  attrs: { product: product }
                })
              })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-lg-3 col-sm-6 pb-5 pb-md-0" },
            [
              _c("h4", { staticClass: "section-sub-title m-b-3" }, [
                _vm._v("Top Rated Products")
              ]),
              _vm._v(" "),
              _vm._l(_vm.topRates, function(product) {
                return _c("product-two-component", {
                  key: product.id,
                  attrs: { product: product }
                })
              })
            ],
            2
          )
        ]),
        _vm._v(" "),
        _c("LightBox", {
          ref: "lightbox",
          staticClass: "porto-light-box",
          attrs: {
            media: _vm.lightBoxMedia,
            "show-caption": true,
            "show-light-box": false
          }
        })
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
    return _c("div", { staticClass: "social-icons mr-2" }, [
      _c("a", {
        staticClass: "social-icon social-facebook icon-facebook",
        attrs: { href: "#", target: "_blank", title: "Facebook" }
      }),
      _vm._v(" "),
      _c("a", {
        staticClass: "social-icon social-twitter icon-twitter",
        attrs: { href: "#", target: "_blank", title: "Twitter" }
      }),
      _vm._v(" "),
      _c("a", {
        staticClass: "social-icon social-linkedin fab fa-linkedin-in",
        attrs: { href: "#", target: "_blank", title: "Linkedin" }
      }),
      _vm._v(" "),
      _c("a", {
        staticClass: "social-icon social-mail icon-mail-alt",
        attrs: { href: "#", target: "_blank", title: "Mail" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c(
        "a",
        {
          staticClass: "nav-link active",
          attrs: {
            id: "product-tab-desc",
            "data-toggle": "tab",
            href: "#product-desc-content",
            role: "tab",
            "aria-controls": "product-desc-content",
            "aria-selected": "true"
          }
        },
        [_vm._v("Description")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c(
        "a",
        {
          staticClass: "nav-link",
          attrs: {
            id: "product-tab-more-info",
            "data-toggle": "tab",
            href: "#product-more-info-content",
            role: "tab",
            "aria-controls": "product-more-info-content",
            "aria-selected": "false"
          }
        },
        [_vm._v("Additional Info")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/products/shared/ProductBreadcrumbComponent.vue?vue&type=template&id=e2502386&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/products/shared/ProductBreadcrumbComponent.vue?vue&type=template&id=e2502386& ***!
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
  return _c(
    "nav",
    { staticClass: "breadcrumb-nav", attrs: { "aria-label": "breadcrumb" } },
    [
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
        _c(
          "li",
          { staticClass: "breadcrumb-item" },
          [
            _c("router-link", { attrs: { to: "/shop/default" } }, [
              _vm._v("Shop")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "breadcrumb-item" },
          _vm._l(_vm.categories, function(category, index) {
            return _c(
              "span",
              { key: category.id },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "product-category",
                    attrs: {
                      to: {
                        path: "/shop/default",
                        query: { category: category.slug }
                      }
                    }
                  },
                  [_vm._v(_vm._s(category.name))]
                ),
                _vm._v(
                  "\n\t\t\t\t" +
                    _vm._s(index < _vm.categories.length - 1 ? "," : "") +
                    "\n\t\t\t"
                )
              ],
              1
            )
          }),
          0
        ),
        _vm._v(" "),
        _c("li", { staticClass: "breadcrumb-item" }, [
          _vm._v("\n\t\t\t" + _vm._s(_vm.name) + "\n\t\t")
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/products/shared/ProductNavComponent.vue?vue&type=template&id=4ad80aa7&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/products/shared/ProductNavComponent.vue?vue&type=template&id=4ad80aa7& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "product-nav" }, [
    _c(
      "div",
      { staticClass: "product-prev", class: { disabled: !_vm.prevProduct } },
      [
        _vm.prevProduct
          ? _c(
              "router-link",
              {
                attrs: {
                  to: {
                    params: {
                      slug: _vm.prevProduct.slug
                    }
                  }
                }
              },
              [
                _c("span", { staticClass: "product-link" }),
                _vm._v(" "),
                _c("span", { staticClass: "product-popup" }, [
                  _c("span", { staticClass: "box-content" }, [
                    _vm.prevProduct.media.length > 0
                      ? _c("img", {
                          directives: [
                            {
                              name: "lazy",
                              rawName: "v-lazy",
                              value: _vm.$root.getUrl(
                                _vm.prevProduct.media[0].copy_link,
                                true,
                                150
                              ),
                              expression:
                                "\n                            $root.getUrl(\n                                prevProduct.media[0]\n                                    .copy_link,\n                                true,\n                                150\n                            )\n                        "
                            }
                          ],
                          key: "product-image",
                          attrs: {
                            alt: _vm.prevProduct.media[0].alt_text
                              ? _vm.prevProduct.media[0].alt_text
                              : "product",
                            width: "150",
                            height: "150"
                          }
                        })
                      : _c("img", {
                          key: "placeholder",
                          attrs: {
                            src: _vm.$root.getUrl(
                              "server/images/placeholder-img-150x150.png"
                            ),
                            alt: "product",
                            width: "150",
                            height: "150"
                          }
                        }),
                    _vm._v(" "),
                    _c("span", [_vm._v(_vm._s(_vm.prevProduct.name))])
                  ])
                ])
              ]
            )
          : _c("a", { attrs: { href: "javascript:;" } }, [
              _c("div", { staticClass: "product-link" })
            ])
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "product-next", class: { disabled: !_vm.nextProduct } },
      [
        _vm.nextProduct
          ? _c(
              "router-link",
              {
                attrs: {
                  to: {
                    params: {
                      slug: _vm.nextProduct.slug
                    }
                  }
                }
              },
              [
                _c("span", { staticClass: "product-link" }),
                _vm._v(" "),
                _c("span", { staticClass: "product-popup" }, [
                  _c("span", { staticClass: "box-content" }, [
                    _vm.nextProduct.media.length > 0
                      ? _c("img", {
                          directives: [
                            {
                              name: "lazy",
                              rawName: "v-lazy",
                              value: _vm.$root.getUrl(
                                _vm.nextProduct.media[0].copy_link,
                                true,
                                150
                              ),
                              expression:
                                "\n                            $root.getUrl(\n                                nextProduct.media[0]\n                                    .copy_link,\n                                true,\n                                150\n                            )\n                        "
                            }
                          ],
                          key: "product-image",
                          attrs: {
                            alt: _vm.nextProduct.media[0].alt_text
                              ? _vm.nextProduct.media[0].alt_text
                              : "product",
                            width: "150",
                            height: "150"
                          }
                        })
                      : _c("img", {
                          key: "placeholder",
                          attrs: {
                            src: _vm.$root.getUrl(
                              "server/images/placeholder-img-150x150.png"
                            ),
                            alt: "product",
                            width: "150",
                            height: "150"
                          }
                        }),
                    _vm._v(" "),
                    _c("span", [_vm._v(_vm._s(_vm.nextProduct.name))])
                  ])
                ])
              ]
            )
          : _c("a", { attrs: { href: "javascript:;" } }, [
              _c("div", { staticClass: "product-link" })
            ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/quantity-input/HorizontalQuantityInputComponent.vue?vue&type=template&id=06e368f2&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shared/quantity-input/HorizontalQuantityInputComponent.vue?vue&type=template&id=06e368f2& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "product-single-qty" }, [
    _c(
      "div",
      {
        staticClass:
          "input-group bootstrap-touchspin bootstrap-touchspin-injected"
      },
      [
        _c("span", { staticClass: "input-group-btn input-group-prepend" }, [
          _c("button", {
            staticClass:
              "btn btn-outline btn-down-icon bootstrap-touchspin-down",
            attrs: { type: "button" },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.countDown.apply(null, arguments)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model.number",
              value: _vm.qty,
              expression: "qty",
              modifiers: { number: true }
            }
          ],
          staticClass: "horizontal-quantity form-control",
          attrs: {
            type: "number",
            max:
              _vm.product.manage_stock && _vm.product.stock_quantity > 0
                ? _vm.product.stock_quantity
                : undefined
          },
          domProps: { value: _vm.qty },
          on: {
            input: [
              function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.qty = _vm._n($event.target.value)
              },
              _vm.changeQty
            ],
            blur: function($event) {
              return _vm.$forceUpdate()
            }
          }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "input-group-btn input-group-append" }, [
          _c("button", {
            staticClass: "btn btn-outline btn-up-icon bootstrap-touchspin-up",
            attrs: { type: "button" },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.countUp.apply(null, arguments)
              }
            }
          })
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/client/components/products/ProductLeftSidebarComponent.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/client/components/products/ProductLeftSidebarComponent.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductLeftSidebarComponent_vue_vue_type_template_id_7e8dd8ff___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductLeftSidebarComponent.vue?vue&type=template&id=7e8dd8ff& */ "./resources/js/client/components/products/ProductLeftSidebarComponent.vue?vue&type=template&id=7e8dd8ff&");
/* harmony import */ var _ProductLeftSidebarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductLeftSidebarComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/components/products/ProductLeftSidebarComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductLeftSidebarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductLeftSidebarComponent_vue_vue_type_template_id_7e8dd8ff___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductLeftSidebarComponent_vue_vue_type_template_id_7e8dd8ff___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/products/ProductLeftSidebarComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/products/ProductLeftSidebarComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/client/components/products/ProductLeftSidebarComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductLeftSidebarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductLeftSidebarComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/products/ProductLeftSidebarComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductLeftSidebarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/components/products/ProductLeftSidebarComponent.vue?vue&type=template&id=7e8dd8ff&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/client/components/products/ProductLeftSidebarComponent.vue?vue&type=template&id=7e8dd8ff& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductLeftSidebarComponent_vue_vue_type_template_id_7e8dd8ff___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductLeftSidebarComponent.vue?vue&type=template&id=7e8dd8ff& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/products/ProductLeftSidebarComponent.vue?vue&type=template&id=7e8dd8ff&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductLeftSidebarComponent_vue_vue_type_template_id_7e8dd8ff___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductLeftSidebarComponent_vue_vue_type_template_id_7e8dd8ff___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/client/components/products/shared/ProductBreadcrumbComponent.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/client/components/products/shared/ProductBreadcrumbComponent.vue ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductBreadcrumbComponent_vue_vue_type_template_id_e2502386___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductBreadcrumbComponent.vue?vue&type=template&id=e2502386& */ "./resources/js/client/components/products/shared/ProductBreadcrumbComponent.vue?vue&type=template&id=e2502386&");
/* harmony import */ var _ProductBreadcrumbComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductBreadcrumbComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/components/products/shared/ProductBreadcrumbComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductBreadcrumbComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductBreadcrumbComponent_vue_vue_type_template_id_e2502386___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductBreadcrumbComponent_vue_vue_type_template_id_e2502386___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/products/shared/ProductBreadcrumbComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/products/shared/ProductBreadcrumbComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/client/components/products/shared/ProductBreadcrumbComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductBreadcrumbComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductBreadcrumbComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/products/shared/ProductBreadcrumbComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductBreadcrumbComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/components/products/shared/ProductBreadcrumbComponent.vue?vue&type=template&id=e2502386&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/client/components/products/shared/ProductBreadcrumbComponent.vue?vue&type=template&id=e2502386& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductBreadcrumbComponent_vue_vue_type_template_id_e2502386___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductBreadcrumbComponent.vue?vue&type=template&id=e2502386& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/products/shared/ProductBreadcrumbComponent.vue?vue&type=template&id=e2502386&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductBreadcrumbComponent_vue_vue_type_template_id_e2502386___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductBreadcrumbComponent_vue_vue_type_template_id_e2502386___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/client/components/products/shared/ProductNavComponent.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/client/components/products/shared/ProductNavComponent.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductNavComponent_vue_vue_type_template_id_4ad80aa7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductNavComponent.vue?vue&type=template&id=4ad80aa7& */ "./resources/js/client/components/products/shared/ProductNavComponent.vue?vue&type=template&id=4ad80aa7&");
/* harmony import */ var _ProductNavComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductNavComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/components/products/shared/ProductNavComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductNavComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductNavComponent_vue_vue_type_template_id_4ad80aa7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductNavComponent_vue_vue_type_template_id_4ad80aa7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/products/shared/ProductNavComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/products/shared/ProductNavComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/client/components/products/shared/ProductNavComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductNavComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductNavComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/products/shared/ProductNavComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductNavComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/components/products/shared/ProductNavComponent.vue?vue&type=template&id=4ad80aa7&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/client/components/products/shared/ProductNavComponent.vue?vue&type=template&id=4ad80aa7& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductNavComponent_vue_vue_type_template_id_4ad80aa7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductNavComponent.vue?vue&type=template&id=4ad80aa7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/products/shared/ProductNavComponent.vue?vue&type=template&id=4ad80aa7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductNavComponent_vue_vue_type_template_id_4ad80aa7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductNavComponent_vue_vue_type_template_id_4ad80aa7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/client/components/shared/quantity-input/HorizontalQuantityInputComponent.vue":
/*!***************************************************************************************************!*\
  !*** ./resources/js/client/components/shared/quantity-input/HorizontalQuantityInputComponent.vue ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HorizontalQuantityInputComponent_vue_vue_type_template_id_06e368f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HorizontalQuantityInputComponent.vue?vue&type=template&id=06e368f2& */ "./resources/js/client/components/shared/quantity-input/HorizontalQuantityInputComponent.vue?vue&type=template&id=06e368f2&");
/* harmony import */ var _HorizontalQuantityInputComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HorizontalQuantityInputComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/components/shared/quantity-input/HorizontalQuantityInputComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HorizontalQuantityInputComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HorizontalQuantityInputComponent_vue_vue_type_template_id_06e368f2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HorizontalQuantityInputComponent_vue_vue_type_template_id_06e368f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/shared/quantity-input/HorizontalQuantityInputComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/shared/quantity-input/HorizontalQuantityInputComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/client/components/shared/quantity-input/HorizontalQuantityInputComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalQuantityInputComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalQuantityInputComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/quantity-input/HorizontalQuantityInputComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalQuantityInputComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/components/shared/quantity-input/HorizontalQuantityInputComponent.vue?vue&type=template&id=06e368f2&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/client/components/shared/quantity-input/HorizontalQuantityInputComponent.vue?vue&type=template&id=06e368f2& ***!
  \**********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalQuantityInputComponent_vue_vue_type_template_id_06e368f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalQuantityInputComponent.vue?vue&type=template&id=06e368f2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/quantity-input/HorizontalQuantityInputComponent.vue?vue&type=template&id=06e368f2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalQuantityInputComponent_vue_vue_type_template_id_06e368f2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalQuantityInputComponent_vue_vue_type_template_id_06e368f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);