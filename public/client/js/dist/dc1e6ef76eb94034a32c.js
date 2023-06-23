(window.webpackJsonp=window.webpackJsonp||[]).push([[3,85,88],{215:function(t,e,r){"use strict";r.r(e);var i=r(8),s=r(14),o=r(221),a=r(222),n=(r(6),r(18));function c(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var v={components:{OwlCarouselComponent:o.default,HorizontalQuantityInputComponent:a.default,VueSlideToggle:s.a},props:{product:Object,variations:Array,attributes:Array},data:function(){return{qty:1,attrFilters:[],showPrice:!1,selectedProduct:{}}},computed:d(d({},Object(i.c)("wishlist",["isInWishlist"])),Object(i.c)("setting",["getProductSettings","formatPrice","priceSuffix","formatStock","showNewBadge"])),watch:{$route:function(){this.$modal.hideAll()}},created:function(){var t=this;if("variable"==this.product.type){this.product.attributes=this.product.attributes.reduce((function(e,r){for(var i=0;i<t.attributes.length;i++){var s=r.pivot.term_ids.split(",");if(r.id==t.attributes[i].id){var o=t.attributes[i].terms.reduce((function(t,e){return s.includes(e.id.toString())?[].concat(c(t),[{id:e.id,text:e.name,slug:e.slug}]):t}),[]);return[].concat(c(e),[d(d({},r),{},{pivot:d(d({},r.pivot),{},{term_ids:s}),termOptions:o})])}}return e}),[]);var e=[];this.product.attributes.map((function(r){if(r.pivot.used_for_variation&&r.pivot.term_ids.length>0){for(var i=[],s=null,o=null,a=0;a<r.pivot.term_ids.length;a++){var n=r.termOptions.find((function(t){return t.id==r.pivot.term_ids[a]}));n&&(t.$route.query.termId&&t.$route.query.termId.find((function(t){return t==n.id}))?(i.push(d(d({},n),{},{active:!0,enabled:!0})),o=t.isColor(n.text)?n.slug:n.text,s=n.id):i.push(d(d({},n),{},{active:!1,enabled:!1})))}e.push({name:r.name,id:r.id,activeTermId:s,activeTermName:o,options:i})}})),this.attrFilters=[].concat(e),this.resetAttrFilter()}else"simple"==this.product.type&&(this.selectedProduct=d({},this.product),this.showPrice=!0)},methods:d(d(d({},Object(i.b)("cart",["addToCart"])),Object(i.d)("wishlist",{addToWishlist:n.a,removeFromWishlist:n.b})),{},{addCart:function(){0==this.selectedProduct.media.length&&(this.selectedProduct.media=c(this.product.media)),"variable"==this.product.type&&(this.selectedProduct.sold_individually=this.product.sold_individually),this.addToCart({product:this.selectedProduct,qty:this.qty})},changeQty:function(t,e){this.qty=e},getSaleRate:function(t,e){return(100*(1-t/e)).toFixed()},isColor:function(t){return t.includes("#")},clearFilter:function(){this.attrFilters=this.attrFilters.reduce((function(t,e){var r=e.options.reduce((function(t,e){return[].concat(c(t),[d(d({},e),{},{enabled:!1,active:!1})])}),[]);return[].concat(c(t),[d(d({},e),{},{activeTermName:null,activeTermId:null,options:r})])}),[]),this.resetAttrFilter()},changeAttrFilter:function(t,e){var r=this,i=null,s=null;this.attrFilters[t].options=this.attrFilters[t].options.reduce((function(t,o,a){return e==a?(o.active||(i=o.id,s=r.isColor(o.text)?o.slug:o.text),[].concat(c(t),[d(d({},o),{},{active:!o.active})])):[].concat(c(t),[d(d({},o),{},{active:!1})])}),[]),this.attrFilters[t].activeTermId=i,this.attrFilters[t].activeTermName=s,this.resetAttrFilter()},resetAttrFilter:function(){var t=this,e=!0,r=!1,i=this.attrFilters.reduce((function(t,r){var i=r.options.reduce((function(t,e){return[].concat(c(t),[d(d({},e),{},{enabled:!1})])}),[]);return r.activeTermId||(e=!1),[].concat(c(t),[d(d({},r),{},{options:c(i)})])}),[]);if(this.variations.map((function(e,s){var o=JSON.parse(e.excerpt),a=!0;o.map((function(e){if(e.termId){var r=t.attrFilters.find((function(t){return t.id==e.attrId}));r&&r.activeTermId&&r.activeTermId!==e.termId&&(a=!1)}})),a&&(r||(t.selectedProduct=e,r=!0),i=i.reduce((function(t,e){var r=o.find((function(t){return t.attrId==e.id}));if(r.termId)var i=e.options.reduce((function(t,e){return r.termId==e.id?[].concat(c(t),[d(d({},e),{},{enabled:!0})]):[].concat(c(t),[e])}),[]);else i=e.options.reduce((function(t,e){return[].concat(c(t),[d(d({},e),{},{enabled:!0})])}),[]);return[].concat(c(t),[d(d({},e),{},{options:c(i)})])}),[]))})),this.attrFilters=c(i),e){this.showPrice=!0,this.selectedProduct.excerpts=i.reduce((function(t,e){return[].concat(c(t),[{attrId:e.id,termId:e.activeTermId}])}),[]);var s=i.reduce((function(t,e){return t+e.activeTermName.replace(e.activeTermName[0],e.activeTermName[0].toUpperCase())+", "}),this.product.name+" - ");this.selectedProduct.name=s.slice(0,-2)}else this.showPrice=!1}})},h=r(2),m=Object(h.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-single-container product-single-default product-quick-view mb-3"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 product-single-gallery"},[r("div",{staticClass:"product-slider-container"},[r("div",{staticClass:"label-group"},[t.product.featured?r("div",{staticClass:"product-label label-hot"},[t._v("\n                        HOT\n                    ")]):t._e(),t._v(" "),t.showNewBadge(t.product)?r("div",{staticClass:"product-label label-new"},[t._v("\n                        NEW\n                    ")]):t._e(),t._v(" "),"simple"==t.product.type&&t.product.min_max_price[0]!=t.product.min_max_price[1]?r("div",{staticClass:"product-label label-sale"},[t._v("\n                        -"+t._s(t.getSaleRate(t.product.min_max_price[0],t.product.min_max_price[1]))+"%\n                    ")]):t._e()]),t._v(" "),r("owl-carousel-component",{staticClass:"product-single-carousel",attrs:{options:{dots:!1,loop:!1,margin:0}}},[t._l(t.product.media,(function(e){return r("div",{key:e.id,staticClass:"product-item"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.$root.getUrl(e.copy_link,!0,600),expression:"\n                                $root.getUrl(medium.copy_link, true, 600)\n                            "}],staticClass:"product-single-image",attrs:{alt:e.alt_text?e.alt_text:"product",width:"600",height:"600"}})])})),t._v(" "),0==t.product.media.length?r("div",{staticClass:"product-item"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.$root.getUrl("server/images/placeholder-img.png"),expression:"\n                                $root.getUrl(\n                                    'server/images/placeholder-img.png'\n                                )\n                            "}],attrs:{alt:"product",width:"600",height:"600"}})]):t._e()],2)],1),t._v(" "),r("div",{staticClass:"prod-thumbnail owl-dots",attrs:{id:"carousel-custom-dots"}},[r("owl-carousel-component",{attrs:{options:{dots:!1,loop:!1,margin:5,autoplay:!1,items:4}}},[t._l(t.product.media,(function(e,i){return r("div",{key:e.id,staticClass:"owl-dot",class:{active:0==i}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.$root.getUrl(e.copy_link,!0,100),expression:"\n                                $root.getUrl(medium.copy_link, true, 100)\n                            "}],staticClass:"product-single-image",attrs:{alt:"product",width:"100",height:"100"}})])})),t._v(" "),0==t.product.media.length?r("div",{staticClass:"owl-dot"},[r("img",{staticClass:"product-single-image",attrs:{src:t.$root.getUrl("server/images/placeholder-img-300x300.png"),alt:"product",width:"100",height:"100"}})]):t._e()],2)],1)]),t._v(" "),r("div",{staticClass:"col-md-6 product-single-details mb-0"},[r("h1",{staticClass:"product-title"},[t._v(t._s(t.product.name))]),t._v(" "),r("div",{staticClass:"ratings-container mb-2 pb-2"},[r("div",{staticClass:"product-ratings"},[r("span",{staticClass:"ratings",style:"width:"+20*t.product.average_rating+"%"})]),t._v(" "),r("a",{staticClass:"rating-link",attrs:{href:"#"},on:{click:function(t){t.preventDefault()}}},[t._v("\n                    "+t._s(t.product.reviews_count)+"\n                    customer review\n                ")]),t._v(" "),r("span",{staticClass:"rating-link-separator"},[t._v("|")]),t._v(" "),r("a",{staticClass:"rating-link",attrs:{href:"#"},on:{click:function(t){t.preventDefault()}}},[t._v("Add a review")])]),t._v(" "),"simple"==t.product.type?r("div",{staticClass:"price-box"},[t.product.min_max_price[0]!=t.product.min_max_price[1]?r("del",{staticClass:"old-price"},[r("span",{domProps:{innerHTML:t._s(t.formatPrice(t.product.min_max_price[1])+t.priceSuffix)}})]):t._e(),t._v(" "),r("span",{staticClass:"product-price",domProps:{innerHTML:t._s(t.formatPrice(t.product.min_max_price[0])+t.priceSuffix)}})]):t._e(),t._v(" "),"variable"==t.product.type?r("div",{staticClass:"price-box"},[r("span",{staticClass:"product-price",domProps:{innerHTML:t._s(t.formatPrice(t.product.min_max_price[0])+t.priceSuffix)}}),t._v(" "),r("span",{staticClass:"product-price"},[t._v("\n                    –\n                    "),r("span",{domProps:{innerHTML:t._s(t.formatPrice(t.product.min_max_price[1])+t.priceSuffix)}})])]):t._e(),t._v(" "),r("div",{staticClass:"product-desc mb-2"},[r("p",{domProps:{innerHTML:t._s(t.product.short_desc)}})]),t._v(" "),r("ul",{staticClass:"single-info-list"},["out-of-stock"==t.product.stock_status||t.product.manage_stock?r("li",{domProps:{innerHTML:t._s(t.formatStock(t.product))}}):t._e(),t._v(" "),t.product.sku?r("li",[t._v("\n                    SKU:\n                    "),r("strong",[t._v(t._s(t.product.sku))])]):t._e(),t._v(" "),t.product.categories.length>0?r("li",[t._v("\n                    CATEGORIES:\n                    "),t._l(t.product.categories,(function(e,i){return r("strong",{key:e.id},[r("router-link",{staticClass:"product-category",attrs:{to:{path:"/shop/default",query:{category:e.slug}}}},[t._v(t._s(e.name))]),t._v("\n\n                        "+t._s(i<t.product.categories.length-1?",":"")+"\n                    ")],1)}))],2):t._e(),t._v(" "),t.product.tags.length>0?r("li",[t._v("\n                    TAGs:\n                    "),t._l(t.product.tags,(function(e,i){return r("strong",{key:e.id},[r("router-link",{staticClass:"product-category",attrs:{to:{path:"/shop/default",query:{tag:e.slug}}}},[t._v(t._s(e.name))]),t._v("\n                        "+t._s(i<t.product.tags.length-1?",":"")+"\n                    ")],1)}))],2):t._e()]),t._v(" "),"variable"==t.product.type?r("div",{staticClass:"product-filters-container"},[t._l(t.attrFilters,(function(e,i){return r("div",{key:e.id,staticClass:"product-single-filter"},[r("label",{staticClass:"mr-4"},[t._v(t._s(e.name)+":")]),t._v(" "),r("ul",{staticClass:"config-size-list"},t._l(e.options,(function(e,s){return r("li",{key:e.id,class:{active:e.active}},[t.isColor(e.text)?[e.enabled?r("a",{key:"is-color-1",staticClass:"filter-color border-0",style:"background-color: "+e.text,attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changeAttrFilter(i,s)}}}):r("a",{key:"is-color-2",staticClass:"filter-color border-0 disabled",style:"background-color: "+e.text,attrs:{href:"javascript:;"}})]:[e.enabled?r("a",{key:"not-color-1",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changeAttrFilter(i,s)}}},[t._v(t._s(e.text))]):r("a",{key:"not-color-2",staticClass:"disabled",attrs:{href:"javascript:;"}},[t._v(t._s(e.text))])]],2)})),0)])})),t._v(" "),r("vue-slide-toggle",{attrs:{open:t.showPrice}},[r("div",{staticClass:"product-single-filter"},[r("label",{staticClass:"mr-4"}),t._v(" "),r("a",{staticClass:"font1 text-uppercase clear-btn",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.clearFilter.apply(null,arguments)}}},[t._v("Clear")])])])],2):t._e(),t._v(" "),r("vue-slide-toggle",{attrs:{open:"variable"==t.product.type&&t.showPrice}},[r("div",{staticClass:"price-box mb-1"},[t.selectedProduct.min_max_price[0]!=t.selectedProduct.min_max_price[1]?r("del",{staticClass:"old-price"},[r("span",{domProps:{innerHTML:t._s(t.formatPrice(t.selectedProduct.min_max_price[1])+t.priceSuffix)}})]):t._e(),t._v(" "),r("span",{staticClass:"product-price",domProps:{innerHTML:t._s(t.formatPrice(t.selectedProduct.min_max_price[0])+t.priceSuffix)}})])]),t._v(" "),"on-backorder"==t.product.stock_status||"in-stock"==t.product.stock_status||t.product.stock_quantity>0?r("div",{staticClass:"product-action"},[r("div",{staticClass:"product-single-qty"},[r("horizontal-quantity-input-component",{attrs:{product:t.product},on:{"change-qty":t.changeQty}})],1),t._v(" "),r("a",{staticClass:"btn btn-dark add-cart",class:{disabled:!t.showPrice},attrs:{href:"#",title:"Add to Cart"},on:{click:function(e){return e.preventDefault(),t.addCart.apply(null,arguments)}}},[t._v("Add to Cart")])]):t._e(),t._v(" "),r("hr",{staticClass:"divider mb-1"}),t._v(" "),r("div",{staticClass:"product-single-share"},[r("label",{staticClass:"sr-only"},[t._v("Share:")]),t._v(" "),t._m(0),t._v(" "),t.isInWishlist(t.product)?r("a",{staticClass:"add-wishlist browse-wishlist",attrs:{href:"#",title:"Remove from Wishlist"},on:{click:function(e){return e.preventDefault(),t.removeFromWishlist({product:t.product})}}},[t._v("Remove from Wishlist")]):r("a",{key:"out-wishlist",staticClass:"add-wishlist",attrs:{href:"#",title:"Add to Wishlist"},on:{click:function(e){return e.preventDefault(),t.addToWishlist({product:t.product})}}},[t._v("Add to Wishlist")])])],1)]),t._v(" "),r("button",{staticClass:"mfp-close",attrs:{title:"Close (Esc)",type:"button"},on:{click:function(e){return t.$emit("close")}}},[t._v("\n        ×\n    ")])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"social-icons mr-2"},[e("a",{staticClass:"social-icon social-facebook icon-facebook",attrs:{href:"#",target:"_blank",title:"Facebook"}}),this._v(" "),e("a",{staticClass:"social-icon social-twitter icon-twitter",attrs:{href:"#",target:"_blank",title:"Twitter"}}),this._v(" "),e("a",{staticClass:"social-icon social-linkedin fab fa-linkedin-in",attrs:{href:"#",target:"_blank",title:"Linkedin"}}),this._v(" "),e("a",{staticClass:"social-icon social-mail icon-mail-alt",attrs:{href:"#",target:"_blank",title:"Mail"}})])}],!1,null,null,null);e.default=m.exports},221:function(t,e,r){"use strict";r.r(e);function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var a={props:{options:{type:Object}},data:function(){return{carouselOptions:{loop:!1,margin:20,responsiveClass:!0,nav:!1,navText:['<i class="icon-angle-left">','<i class="icon-angle-right">'],dots:!0,autoplay:!0,autoplayTimeout:15e3,items:1},id:"10"}},created:function(){this.carouselOptions=s(s({},this.carouselOptions),this.options),this.id=Math.random().toString(36).substring(2,15)},mounted:function(){var t=this;r(348);var e=$("#"+this.id);e.on("initialize.owl.carousel",(function(){t.$emit("initialize")})),e.on("initialized.owl.carousel",(function(){t.$emit("initialized")})),this.create(),$("#"+this.prevHandler).click((function(){e.trigger("prev.owl.carousel")})),$("#"+this.nextHandler).click((function(){e.trigger("next.owl.carousel")})),e.on("changed.owl.carousel",(function(e){if(t.$emit("changed",e),$(e.currentTarget.closest(".product-single-carousel")).length>0){var r=$(e.currentTarget).closest(".product-single-gallery").find("#carousel-custom-dots");if(r.length>0&&r.hasClass("vertical-thumbs"))(i=r.find(".owl-dot.active")).length>0&&i.removeClass("active"),r.children().eq(e.item.index).addClass("active");else if(r.length>0){var i;(i=r.find(".owl-dot.active")).length>0&&i.removeClass("active");var s=r.find(".owl-item").eq(e.item.index);s.hasClass("active")||s.closest(".owl-carousel").trigger("to.owl.carousel",[s.index(),300]),s.children().addClass("active")}}})),$("#carousel-custom-dots .owl-dot").click((function(){var t=$(this).index();$(this).closest(".owl-carousel").length>0&&(t=$(this).parent().index()),$(this).closest(".product-single-gallery").find(".product-single-carousel").trigger("to.owl.carousel",[t,300])})),this.loop||e.on("changed.owl.carousel",(function(e){0===e.item.index?(t.showPrev=!1,t.showNext=!0):Math.floor(e.item.index+e.page.size)===e.item.count?(t.showPrev=!0,t.showNext=!1):(t.showPrev=!0,t.showNext=!0)}))},methods:{create:function(){$("#"+this.id).owlCarousel(this.carouselOptions)},destroy:function(){$("#"+this.id).trigger("destroy.owl.carousel")}}},n=r(2),c=Object(n.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"owl-carousel owl-theme",attrs:{id:this.id}},[this._t("default")],2)}),[],!1,null,null,null);e.default=c.exports},222:function(t,e,r){"use strict";r.r(e);var i={props:{product:Object,quantity:{type:Number,default:1}},data:function(){return{qty:1}},watch:{product:function(){this.product.qty?this.qty=this.product.qty:this.qty=1}},created:function(){this.product.qty&&(this.qty=this.product.qty)},methods:{countUp:function(){this.product.manage_stock&&this.product.stock_quantity<=this.qty||this.product.sold_individually||(this.qty+=1,this.$emit("change-qty",this.product.id,this.qty,this.product.excerpts))},countDown:function(){1!=this.qty&&(this.qty-=1,this.$emit("change-qty",this.product.id,this.qty,this.product.excerpts))},changeQty:function(){this.$emit("change-qty",this.product.id,this.qty,this.product.excerpts)}}},s=r(2),o=Object(s.a)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-single-qty"},[r("div",{staticClass:"input-group bootstrap-touchspin bootstrap-touchspin-injected"},[r("span",{staticClass:"input-group-btn input-group-prepend"},[r("button",{staticClass:"btn btn-outline btn-down-icon bootstrap-touchspin-down",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.countDown.apply(null,arguments)}}})]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.qty,expression:"qty",modifiers:{number:!0}}],staticClass:"horizontal-quantity form-control",attrs:{type:"number",max:t.product.manage_stock&&t.product.stock_quantity>0?t.product.stock_quantity:void 0},domProps:{value:t.qty},on:{input:[function(e){e.target.composing||(t.qty=t._n(e.target.value))},t.changeQty],blur:function(e){return t.$forceUpdate()}}}),t._v(" "),r("span",{staticClass:"input-group-btn input-group-append"},[r("button",{staticClass:"btn btn-outline btn-up-icon bootstrap-touchspin-up",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.countUp.apply(null,arguments)}}})])])])}),[],!1,null,null,null);e.default=o.exports}}]);