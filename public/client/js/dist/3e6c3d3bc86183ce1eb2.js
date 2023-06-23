(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/modals/NewsletterModalComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shared/modals/NewsletterModalComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("setting", ["getHeaderSettings"]))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/modals/NewsletterModalComponent.vue?vue&type=template&id=77067abb&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/shared/modals/NewsletterModalComponent.vue?vue&type=template&id=77067abb& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
    {
      directives: [
        {
          name: "lazy",
          rawName: "v-lazy:background-image",
          value: _vm.$root.getUrl("client/images/newsletter_popup_bg.jpg"),
          expression:
            "\n\t\t$root.getUrl('client/images/newsletter_popup_bg.jpg')\n\t",
          arg: "background-image"
        }
      ],
      staticClass: "newsletter-popup bg-img",
      style: "background: #f1f1f1 no-repeat center/cover",
      attrs: { id: "newsletter-popup-form" }
    },
    [
      _c("div", { staticClass: "newsletter-popup-content" }, [
        _c("img", {
          staticClass: "logo-newsletter",
          attrs: {
            src: _vm.$root.getUrl(_vm.getHeaderSettings.logoImage),
            alt: _vm.getHeaderSettings.siteTitle + " Logo",
            width: "111",
            height: "44"
          }
        }),
        _vm._v(" "),
        _c("h2", [_vm._v("Subscribe to newsletter")]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n\t\t\tSubscribe to the Porto mailing list to receive updates on new\n\t\t\tarrivals, special offers and our promotions.\n\t\t"
          )
        ]),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _vm._m(1)
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "mfp-close",
          attrs: { title: "Close (Esc)", type: "button" },
          on: {
            click: function($event) {
              return _vm.$emit("close")
            }
          }
        },
        [_vm._v("\n\t\t×\n\t")]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("form", { attrs: { action: "#" } }, [
      _c("div", { staticClass: "input-group" }, [
        _c("input", {
          staticClass: "form-control",
          attrs: {
            type: "email",
            id: "newsletter-email",
            name: "newsletter-email",
            placeholder: "Your email address",
            required: ""
          }
        }),
        _vm._v(" "),
        _c("input", {
          staticClass: "btn btn-primary",
          attrs: { type: "submit", value: "Submit" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "newsletter-subscribe" }, [
      _c("div", { staticClass: "custom-control custom-checkbox" }, [
        _c("input", {
          staticClass: "custom-control-input",
          attrs: { type: "checkbox", value: "0", id: "show-again" }
        }),
        _vm._v(" "),
        _c(
          "label",
          { staticClass: "custom-control-label", attrs: { for: "show-again" } },
          [_vm._v("\n\t\t\t\t\tDon't show this popup again\n\t\t\t\t")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/client/components/shared/modals/NewsletterModalComponent.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/client/components/shared/modals/NewsletterModalComponent.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NewsletterModalComponent_vue_vue_type_template_id_77067abb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewsletterModalComponent.vue?vue&type=template&id=77067abb& */ "./resources/js/client/components/shared/modals/NewsletterModalComponent.vue?vue&type=template&id=77067abb&");
/* harmony import */ var _NewsletterModalComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewsletterModalComponent.vue?vue&type=script&lang=js& */ "./resources/js/client/components/shared/modals/NewsletterModalComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NewsletterModalComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewsletterModalComponent_vue_vue_type_template_id_77067abb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NewsletterModalComponent_vue_vue_type_template_id_77067abb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/shared/modals/NewsletterModalComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/shared/modals/NewsletterModalComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/client/components/shared/modals/NewsletterModalComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsletterModalComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NewsletterModalComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/modals/NewsletterModalComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsletterModalComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/components/shared/modals/NewsletterModalComponent.vue?vue&type=template&id=77067abb&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/client/components/shared/modals/NewsletterModalComponent.vue?vue&type=template&id=77067abb& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsletterModalComponent_vue_vue_type_template_id_77067abb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NewsletterModalComponent.vue?vue&type=template&id=77067abb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/shared/modals/NewsletterModalComponent.vue?vue&type=template&id=77067abb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsletterModalComponent_vue_vue_type_template_id_77067abb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsletterModalComponent_vue_vue_type_template_id_77067abb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);