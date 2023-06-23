(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/products/shared/ProductSidebarOneComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/products/shared/ProductSidebarOneComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_sticky_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-sticky-directive */ "./node_modules/vue-sticky-directive/src/index.js");
/* harmony import */ var vue_tree_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-tree-list */ "./node_modules/vue-tree-list/dist/vue-tree-list.umd.min.js");
/* harmony import */ var vue_tree_list__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_tree_list__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_products_ProductTwoComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/products/ProductTwoComponent */ "./resources/js/client/components/shared/products/ProductTwoComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    VueTreeList: vue_tree_list__WEBPACK_IMPORTED_MODULE_1__["VueTreeList"],
    ProductTwoComponent: _shared_products_ProductTwoComponent__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  directives: {
    Sticky: vue_sticky_directive__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    categories: Array,
    featuredProducts: Array
  },
  data: function data() {
    return {
      shouldSticky: window.innerWidth >= 992
    };
  },
  computed: {
    treeData: function treeData() {
      return new vue_tree_list__WEBPACK_IMPORTED_MODULE_1__["Tree"](this.categories);
    }
  },
  created: function created() {
    window.addEventListener("resize", this.resizeHandler, {
      passive: true
    });
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener("resize", this.resizeHandler);
  },
  methods: {
    resizeHandler: function resizeHandler() {
      this.shouldSticky = window.innerWidth >= 992;
    },
    toggleSidebar: function toggleSidebar() {
      document.querySelector("body").classList.toggle("sidebar-opened");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/products/shared/ProductSidebarOneComponent.vue?vue&type=template&id=9a997f94&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/products/shared/ProductSidebarOneComponent.vue?vue&type=template&id=9a997f94& ***!
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
    _c("div", {
      staticClass: "sidebar-overlay",
      on: { click: _vm.toggleSidebar }
    }),
    _vm._v(" "),
    _c(
      "a",
      {
        staticClass: "sidebar-toggle",
        on: {
          click: function($event) {
            $event.preventDefault()
            return _vm.toggleSidebar.apply(null, arguments)
          }
        }
      },
      [_c("i", { staticClass: "fas fa-sliders-h" })]
    ),
    _vm._v(" "),
    _c(
      "aside",
      {
        staticClass: "mobile-sidebar h-100",
        attrs: { "sticky-container": "" }
      },
      [
        _c(
          "div",
          {
            directives: [
              {
                name: "sticky",
                rawName: "v-sticky",
                value: _vm.shouldSticky,
                expression: "shouldSticky"
              }
            ],
            staticClass: "sidebar-wrapper",
            attrs: { "sticky-offset": "{ top: 69 }" }
          },
          [
            _c("div", { staticClass: "widget widget-product-categories" }, [
              _c(
                "div",
                { staticClass: "widget-body" },
                [
                  _c("vue-tree-list", {
                    attrs: { model: _vm.treeData },
                    scopedSlots: _vm._u([
                      {
                        key: "leafNameDisplay",
                        fn: function(slotProps) {
                          return [
                            _c(
                              "router-link",
                              {
                                attrs: {
                                  to: {
                                    path: _vm.$route.path,
                                    query: {
                                      category: slotProps.model.slug
                                    }
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  _vm._s(slotProps.model.name) +
                                    "\n\t\t\t\t\t\t\t"
                                )
                              ]
                            )
                          ]
                        }
                      },
                      {
                        key: "treeNodeIcon",
                        fn: function() {
                          return [_c("span")]
                        },
                        proxy: true
                      }
                    ])
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "widget" }, [
              _c("div", { staticClass: "maga-sale-container" }, [
                _c("figure", { staticClass: "mega-image" }, [
                  _c("img", {
                    directives: [
                      {
                        name: "lazy",
                        rawName: "v-lazy",
                        value: _vm.$root.getUrl(
                          "client/images/banners/banner_sidebar_right.jpg"
                        ),
                        expression:
                          "\n\t\t\t\t\t\t\t\t$root.getUrl(\n\t\t\t\t\t\t\t\t\t'client/images/banners/banner_sidebar_right.jpg'\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t"
                      }
                    ],
                    staticClass: "w-100",
                    attrs: { width: "228", height: "290", alt: "Banner Desc" }
                  })
                ]),
                _vm._v(" "),
                _vm._m(0)
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "widget widget-featured mb-5" }, [
              _c("h3", { staticClass: "widget-title" }, [
                _vm._v("Featured Product")
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "widget-body" },
                _vm._l(_vm.featuredProducts.slice(0, 3), function(product) {
                  return _c("product-two-component", {
                    key: product.id,
                    attrs: { product: product }
                  })
                }),
                1
              )
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mega-content" }, [
      _c("div", { staticClass: "mega-price-box" }, [
        _c("span", { staticClass: "price-big" }, [_vm._v("50")]),
        _vm._v(" "),
        _c("span", { staticClass: "price-desc" }, [
          _c("em", [_vm._v("%")]),
          _vm._v("OFF")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mega-desc" }, [
        _c("h3", { staticClass: "mega-title mb-0" }, [_vm._v("MEGA SALE")]),
        _vm._v(" "),
        _c("span", { staticClass: "mega-subtitle" }, [_vm._v("MANY ITEM")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-sticky-directive/src/index.js":
/*!********************************************************!*\
  !*** ./node_modules/vue-sticky-directive/src/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sticky__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sticky */ "./node_modules/vue-sticky-directive/src/sticky.js");


const install = function(Vue) {
  Vue.directive('Sticky', _sticky__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

if (window.Vue) {
  Vue.use(install);
}

_sticky__WEBPACK_IMPORTED_MODULE_0__["default"].install = install;

/* harmony default export */ __webpack_exports__["default"] = (_sticky__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/vue-sticky-directive/src/sticky.js":
/*!*********************************************************!*\
  !*** ./node_modules/vue-sticky-directive/src/sticky.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const namespace = '@@vue-sticky-directive';
const events = [
  'resize',
  'scroll',
  'touchstart',
  'touchmove',
  'touchend',
  'pageshow',
  'load',
];

const batchStyle = (el, style = {}, className = {}) => {
  for (let k in style) {
    el.style[k] = style[k];
  }
  for (let k in className) {
    if (className[k] && !el.classList.contains(k)) {
      el.classList.add(k);
    } else if (!className[k] && el.classList.contains(k)) {
      el.classList.remove(k);
    }
  }
};

class Sticky {
  constructor(el, vm) {
    this.el = el;
    this.vm = vm;
    this.unsubscribers = [];
    this.isPending = false;
    this.state = {
      isTopSticky: null,
      isBottomSticky: null,
      height: null,
      width: null,
      xOffset: null,
    };

    this.lastState = {
      top: null,
      bottom: null,
      sticked: false,
    };

    const offset = this.getAttribute('sticky-offset') || {};
    const side = this.getAttribute('sticky-side') || 'top';
    const zIndex = this.getAttribute('sticky-z-index') || '10';
    const onStick = this.getAttribute('on-stick') || null;

    this.options = {
      topOffset: Number(offset.top) || 0,
      bottomOffset: Number(offset.bottom) || 0,
      shouldTopSticky: side === 'top' || side === 'both',
      shouldBottomSticky: side === 'bottom' || side === 'both',
      zIndex: zIndex,
      onStick: onStick,
    };
  }

  doBind() {
    if (this.unsubscribers.length > 0) {
      return;
    }
    const { el, vm } = this;
    vm.$nextTick(() => {
      this.placeholderEl = document.createElement('div');
      this.containerEl = this.getContainerEl();
      el.parentNode.insertBefore(this.placeholderEl, el);
      events.forEach(event => {
        const fn = this.update.bind(this);
        this.unsubscribers.push(() => window.removeEventListener(event, fn));
        this.unsubscribers.push(() =>
          this.containerEl.removeEventListener(event, fn),
        );
        window.addEventListener(event, fn, { passive: true });
        this.containerEl.addEventListener(event, fn, { passive: true });
      });
    });
  }

  doUnbind() {
    this.unsubscribers.forEach(fn => fn());
    this.unsubscribers = [];
    this.resetElement();
  }

  update() {
    if (!this.isPending) {
      requestAnimationFrame(() => {
        this.isPending = false;
        this.recomputeState();
        this.updateElements();
      });
      this.isPending = true;
    }
  }

  isTopSticky() {
    if (!this.options.shouldTopSticky) return false;
    const fromTop = this.state.placeholderElRect.top;
    const fromBottom = this.state.containerElRect.bottom;

    const topBreakpoint = this.options.topOffset;
    const bottomBreakpoint = this.options.bottomOffset;

    return fromTop <= topBreakpoint && fromBottom >= bottomBreakpoint;
  }

  isBottomSticky() {
    if (!this.options.shouldBottomSticky) return false;
    const fromBottom =
      window.innerHeight - this.state.placeholderElRect.top - this.state.height;
    const fromTop = window.innerHeight - this.state.containerElRect.top;

    const topBreakpoint = this.options.topOffset;
    const bottomBreakpoint = this.options.bottomOffset;

    return fromBottom <= bottomBreakpoint && fromTop >= topBreakpoint;
  }

  recomputeState() {
    this.state = Object.assign({}, this.state, {
      height: this.getHeight(),
      width: this.getWidth(),
      xOffset: this.getXOffset(),
      placeholderElRect: this.getPlaceholderElRect(),
      containerElRect: this.getContainerElRect(),
    });
    this.state.isTopSticky = this.isTopSticky();
    this.state.isBottomSticky = this.isBottomSticky();
  }

  fireEvents() {
    if (
      typeof this.options.onStick === 'function' &&
      (this.lastState.top !== this.state.isTopSticky ||
        this.lastState.bottom !== this.state.isBottomSticky ||
        this.lastState.sticked !==
          (this.state.isTopSticky || this.state.isBottomSticky))
    ) {
      this.lastState = {
        top: this.state.isTopSticky,
        bottom: this.state.isBottomSticky,
        sticked: this.state.isBottomSticky || this.state.isTopSticky,
      };
      this.options.onStick(this.lastState);
    }
  }

  updateElements() {
    const placeholderStyle = { paddingTop: 0 };
    const elStyle = {
      position: 'static',
      top: 'auto',
      bottom: 'auto',
      left: 'auto',
      width: 'auto',
      zIndex: this.options.zIndex,
    };
    const placeholderClassName = { 'vue-sticky-placeholder': true };
    const elClassName = {
      'vue-sticky-el': true,
      'top-sticky': false,
      'bottom-sticky': false,
    };

    if (this.state.isTopSticky) {
      elStyle.position = 'fixed';
      elStyle.top = this.options.topOffset + 'px';
      elStyle.left = this.state.xOffset + 'px';
      elStyle.width = this.state.width + 'px';
      const bottomLimit =
        this.state.containerElRect.bottom -
        this.state.height -
        this.options.bottomOffset -
        this.options.topOffset;
      if (bottomLimit < 0) {
        elStyle.top = bottomLimit + this.options.topOffset + 'px';
      }
      placeholderStyle.paddingTop = this.state.height + 'px';
      elClassName['top-sticky'] = true;
    } else if (this.state.isBottomSticky) {
      elStyle.position = 'fixed';
      elStyle.bottom = this.options.bottomOffset + 'px';
      elStyle.left = this.state.xOffset + 'px';
      elStyle.width = this.state.width + 'px';
      const topLimit =
        window.innerHeight -
        this.state.containerElRect.top -
        this.state.height -
        this.options.bottomOffset -
        this.options.topOffset;
      if (topLimit < 0) {
        elStyle.bottom = topLimit + this.options.bottomOffset + 'px';
      }
      placeholderStyle.paddingTop = this.state.height + 'px';
      elClassName['bottom-sticky'] = true;
    } else {
      placeholderStyle.paddingTop = 0;
    }

    batchStyle(this.el, elStyle, elClassName);
    batchStyle(this.placeholderEl, placeholderStyle, placeholderClassName);

    this.fireEvents();
  }

  resetElement() {
    ['position', 'top', 'bottom', 'left', 'width', 'zIndex'].forEach(attr => {
      this.el.style.removeProperty(attr);
    });
    this.el.classList.remove('bottom-sticky', 'top-sticky');
    const { parentNode } = this.placeholderEl;
    if (parentNode) {
      parentNode.removeChild(this.placeholderEl);
    }
  }

  getContainerEl() {
    let node = this.el.parentNode;
    while (
      node &&
      node.tagName !== 'HTML' &&
      node.tagName !== 'BODY' &&
      node.nodeType === 1
    ) {
      if (node.hasAttribute('sticky-container')) {
        return node;
      }
      node = node.parentNode;
    }
    return this.el.parentNode;
  }

  getXOffset() {
    return this.placeholderEl.getBoundingClientRect().left;
  }

  getWidth() {
    return this.placeholderEl.getBoundingClientRect().width;
  }

  getHeight() {
    return this.el.getBoundingClientRect().height;
  }

  getPlaceholderElRect() {
    return this.placeholderEl.getBoundingClientRect();
  }

  getContainerElRect() {
    return this.containerEl.getBoundingClientRect();
  }

  getAttribute(name) {
    const expr = this.el.getAttribute(name);
    let result = undefined;
    if (expr) {
      if (this.vm[expr]) {
        result = this.vm[expr];
      } else {
        try {
          result = eval(`(${expr})`);
        } catch (error) {
          result = expr;
        }
      }
    }
    return result;
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  inserted(el, bind, vnode) {
    if (typeof bind.value === 'undefined' || bind.value) {
      el[namespace] = new Sticky(el, vnode.context);
      el[namespace].doBind();
    }
  },
  unbind(el, bind, vnode) {
    if (el[namespace]) {
      el[namespace].doUnbind();
      el[namespace] = undefined;
    }
  },
  componentUpdated(el, bind, vnode) {
    if (typeof bind.value === 'undefined' || bind.value) {
      if (!el[namespace]) {
        el[namespace] = new Sticky(el, vnode.context);
      }
      el[namespace].doBind();
    } else {
      if (el[namespace]) {
        el[namespace].doUnbind();
      }
    }
  },
});


/***/ }),

/***/ "./resources/js/client/components/products/shared/ProductSidebarOneComponent.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/client/components/products/shared/ProductSidebarOneComponent.vue ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductSidebarOneComponent_vue_vue_type_template_id_9a997f94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductSidebarOneComponent.vue?vue&type=template&id=9a997f94& */ "./resources/js/client/components/products/shared/ProductSidebarOneComponent.vue?vue&type=template&id=9a997f94&");
/* harmony import */ var _ProductSidebarOneComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductSidebarOneComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/components/products/shared/ProductSidebarOneComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductSidebarOneComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductSidebarOneComponent_vue_vue_type_template_id_9a997f94___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductSidebarOneComponent_vue_vue_type_template_id_9a997f94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/products/shared/ProductSidebarOneComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/products/shared/ProductSidebarOneComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/client/components/products/shared/ProductSidebarOneComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductSidebarOneComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductSidebarOneComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/products/shared/ProductSidebarOneComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductSidebarOneComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/components/products/shared/ProductSidebarOneComponent.vue?vue&type=template&id=9a997f94&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/client/components/products/shared/ProductSidebarOneComponent.vue?vue&type=template&id=9a997f94& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductSidebarOneComponent_vue_vue_type_template_id_9a997f94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductSidebarOneComponent.vue?vue&type=template&id=9a997f94& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/products/shared/ProductSidebarOneComponent.vue?vue&type=template&id=9a997f94&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductSidebarOneComponent_vue_vue_type_template_id_9a997f94___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductSidebarOneComponent_vue_vue_type_template_id_9a997f94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);