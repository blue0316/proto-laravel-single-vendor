(window.webpackJsonp=window.webpackJsonp||[]).push([[46,26,63,86,89,90],{218:function(t,e,i){"use strict";i.r(e);var r=i(8);function s(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return a(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function n(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){l(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function l(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var c={props:{product:{type:Object,default:function(){return{type:"simple",sale_schedule:!1,virtual:!1,downloadable:!1,tax_status:"taxable",tax_type_id:1,allow_backorder:"no",stock_status:"in-stock",manage_stock:!1,media:[],tags:[],files:[]}}}},computed:n(n({},Object(r.c)("setting",["formatPrice","priceSuffix"])),{},{media:function(){return this.product.media.slice(0,2)}}),methods:{getPageUrl:function(){return 0==this.product.parent?{path:"/product/default/"+this.product.slug}:{path:"/product/default/"+this.product.slug,query:{termId:JSON.parse(this.product.excerpt).reduce((function(t,e){return[].concat(s(t),[e.termId])}),[])}}}}},u=i(2),p=Object(u.a)(c,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"product-default left-details product-widget"},[i("figure",[t.product.media.length>0?i("router-link",{key:"media-0",attrs:{to:t.getPageUrl()}},t._l(t.media,(function(e,r){return i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.$root.getUrl(e.copy_link,!0,300),expression:"$root.getUrl(medium.copy_link, true, 300)"}],key:r,attrs:{width:"300",height:"300",alt:e.alt_text?e.alt_text:"product"}})})),0):i("router-link",{key:"media-1",attrs:{to:t.getPageUrl()}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.$root.getUrl("server/images/placeholder-img-300x300.png"),expression:"\n\t\t\t\t\t$root.getUrl(\n\t\t\t\t\t\t'server/images/placeholder-img-300x300.png'\n\t\t\t\t\t)\n\t\t\t\t"}],attrs:{width:"300",height:"300",alt:"product"}})])],1),t._v(" "),i("div",{staticClass:"product-details"},[i("h3",{staticClass:"product-title"},[i("router-link",{attrs:{to:t.getPageUrl()}},[t._v(t._s(t.product.name))])],1),t._v(" "),i("div",{staticClass:"ratings-container"},[i("div",{staticClass:"product-ratings"},[i("span",{staticClass:"ratings",style:"width:"+20*t.product.average_rating+"%"}),t._v(" "),i("span",{staticClass:"tooltiptext tooltip-top"},[t._v(t._s(t.product.average_rating.toFixed(2)))])])]),t._v(" "),"simple"==t.product.type?i("div",{staticClass:"price-box"},[t.product.min_max_price[0]!=t.product.min_max_price[1]?i("del",{staticClass:"old-price"},[i("span",{domProps:{innerHTML:t._s(t.formatPrice(t.product.min_max_price[1]))}})]):t._e(),t._v(" "),i("span",{staticClass:"product-price",domProps:{innerHTML:t._s(t.formatPrice(t.product.min_max_price[0])+t.priceSuffix)}})]):t._e(),t._v(" "),"variable"==t.product.type?i("div",{staticClass:"price-box"},[i("span",{staticClass:"product-price",domProps:{innerHTML:t._s(t.formatPrice(t.product.min_max_price[0]))}}),t._v(" "),t.product.min_max_price[0]!==t.product.min_max_price[1]?i("span",{staticClass:"product-price"},[t._v("\n\t\t\t\t–\n\t\t\t\t"),i("span",{domProps:{innerHTML:t._s(t.formatPrice(t.product.min_max_price[1])+t.priceSuffix)}})]):t._e()]):t._e()])])}),[],!1,null,null,null);e.default=p.exports},223:function(t,e,i){"use strict";i.r(e);var r={props:{perPage:Number,total:Number},computed:{shouldRender:function(){return this.total>this.perPage},currentPage:function(){return parseInt(this.$route.query.page?this.$route.query.page:1)},lastPage:function(){return parseInt(this.total/this.perPage)+(this.total%this.perPage?1:0)},startIndex:function(){return!this.currentPage%this.perPage?this.currentPage:this.perPage*parseInt(this.currentPage/this.perPage)},pagesToBeShown:function(){for(var t=[],e=0;e<Math.min(this.lastPage-2,3);e++)this.currentPage<4||this.currentPage>this.lastPage-3?(this.currentPage<4&&(t[e]=e+2),this.lastPage>4&&this.currentPage>this.lastPage-3&&(t[e]=this.lastPage-3+e)):page[e]=this.currentPage-1+e;return t}},methods:{getPageUrl:function(t){var e={};for(var i in this.$route.query)"page"!==i&&(e[i]=this.$route.query[i]);return t>1&&(e.page=t),{path:this.$route.path,query:e}}}},s=i(2),a=Object(s.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.shouldRender?i("ul",{staticClass:"pagination mb-0"},[i("li",{staticClass:"page-item",class:{disabled:t.currentPage<2}},[i("router-link",{staticClass:"page-link page-link-btn",attrs:{to:t.getPageUrl(t.currentPage-1)}},[i("i",{staticClass:"icon-angle-left"})])],1),t._v(" "),i("li",{staticClass:"page-item"},[i("router-link",{staticClass:"page-link",attrs:{"exact-active-class":"active",to:t.getPageUrl(1)}},[t._v(t._s(1))])],1),t._v(" "),t.pagesToBeShown[0]>2?i("li",{staticClass:"page-item"},[i("span",{staticClass:"page-link"},[t._v("...")])]):t._e(),t._v(" "),t.pagesToBeShown.length?t._l(t.pagesToBeShown,(function(e){return i("li",{key:"page-"+e,staticClass:"page-item"},[i("router-link",{staticClass:"page-link",attrs:{"exact-active-class":"active",to:t.getPageUrl(e)}},[t._v(t._s(e))])],1)})):t._e(),t._v(" "),t.pagesToBeShown[t.pagesToBeShown.length-1]<t.lastPage-1?i("li",{staticClass:"page-item"},[i("span",{staticClass:"page-link"},[t._v("...")])]):t._e(),t._v(" "),t.lastPage>1?i("li",{staticClass:"page-item"},[i("router-link",{staticClass:"page-link",attrs:{"exact-active-class":"active",to:t.getPageUrl(t.lastPage)}},[t._v(t._s(t.lastPage))])],1):t._e(),t._v(" "),i("li",{staticClass:"page-item",class:{disabled:t.currentPage===t.lastPage}},[i("router-link",{staticClass:"page-link page-link-btn",attrs:{to:t.getPageUrl(t.currentPage+1)}},[i("i",{staticClass:"icon-angle-right"})])],1)],2):t._e()}),[],!1,null,null,null);e.default=a.exports},227:function(t,e,i){"use strict";i.r(e);var r={props:{categories:{type:Array,default:[]}}},s=i(2),a=Object(s.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",{staticClass:"breadcrumb-nav",attrs:{"aria-label":"breadcrumb"}},[i("ol",{staticClass:"breadcrumb"},[i("li",{staticClass:"breadcrumb-item"},[i("router-link",{attrs:{to:"/"}},[i("i",{staticClass:"icon-home"})])],1),t._v(" "),i("li",{staticClass:"breadcrumb-item"},[i("router-link",{attrs:{to:{path:t.$route.path}}},[t._v("Shop")])],1),t._v(" "),t._l(t.categories,(function(e){return i("li",{key:e.id,staticClass:"breadcrumb-item"},[e.slug!=t.$route.query.category?i("router-link",{attrs:{to:{query:{category:e.slug}}}},[t._v(t._s(e.name))]):i("span",[t._v(t._s(e.name))])],1)})),t._v(" "),t.$route.query.tag?i("li",{staticClass:"breadcrumb-item"},[i("span",[t._v("Product Tag - "+t._s(t.$route.query.tag))])]):t._e(),t._v(" "),t.$route.query.search_term?i("li",{staticClass:"breadcrumb-item"},[i("span",[t._v("Search - "+t._s(t.$route.query.search_term))])]):t._e()],2)])}),[],!1,null,null,null);e.default=a.exports},228:function(t,e,i){"use strict";i.r(e);var r=i(8),s=i(347),a=i(14),o=i(218);function n(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return l(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function c(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?c(Object(i),!0).forEach((function(e){p(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function p(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var d={components:{VueTreeList:s.VueTreeList,VueSlideToggle:a.a,ProductTwoComponent:o.default},data:function(){return{loaded:!0,attributes:[],categories:[],featuredProducts:[],categorySlideOpen:!0,priceSlideOpen:!0,attributeSlideOpen:[],priceValues:[0,1e3],featuredSlideOpen:!0,priceSliderConfig:{connect:!0,step:50,margin:100,range:{min:0,max:1e3}},isResetFilterShow:!1,shouldSticky:!0}},computed:u(u({},Object(r.c)("setting",["getSetting"])),{},{treeData:function(){return new s.Tree(this.categories)},priceRangeText:function(){return"$"+parseInt(this.priceValues[0])+" — $"+parseInt(this.priceValues[1])}}),watch:{$route:function(){this.$route.query.min_price&&this.$route.query.max_price?(this.loaded=!1,this.priceValues=[this.$route.query.min_price,this.$route.query.max_price],this.$nextTick((function(){this.loaded=!0}))):(this.loaded=!1,this.priceValues=[parseInt(this.getSetting("filter_min_price")),parseInt(this.getSetting("filter_max_price"))],this.$nextTick((function(){this.loaded=!0}))),Object.values(this.$route.query).length>0?this.isResetFilterShow=!0:this.isResetFilterShow=!1}},methods:{isColor:function(t){return t.includes("#")},changeAttrFilter:function(t,e,i){i.target.parentNode.classList.toggle("active")},setFilterRouteQuery:function(t){return this.$route.query.attributes?-1==this.$route.query.attributes.split(",").findIndex((function(e){return e==t.slug}))?{path:this.$route.fullPath,query:u(u({},this.$route.query),{},{attributes:[].concat(n(this.$route.query.attributes.split(",")),[t.slug]).join(",")})}:{path:this.$route.fullPath,query:u(u({},this.$route.query),{},{attributes:this.$route.query.attributes.split(",").filter((function(e){return e!==t.slug})).join(",")})}:{path:this.$route.fullPath,query:u(u({},this.$route.query),{},{attributes:t.slug})}},setActiveTerm:function(t){return!(!this.$route.query.attributes||-1==this.$route.query.attributes.split(",").findIndex((function(e){return e==t.slug})))},setActiveCategory:function(t){return!(!this.$route.query.category||this.$route.query.category!=t.slug)},attrSlideChange:function(t){this.attributeSlideOpen=this.attributeSlideOpen.reduce((function(e,i,r){return[].concat(n(e),t==r?[!i]:[i])}),[])},setFilterRoute:function(){return{path:this.$route.path,query:u(u({},this.$route.query),{},{min_price:parseInt(this.priceValues[0]),max_price:parseInt(this.priceValues[1])})}}},created:function(){var t=this;this.$route.query.min_price&&this.$route.query.max_price?this.priceValues=[this.$route.query.min_price,this.$route.query.max_price]:this.priceValues=[parseInt(this.getSetting("filter_min_price")),parseInt(this.getSetting("filter_max_price"))],this.priceSliderConfig=u(u({},this.priceSliderConfig),{},{range:{min:parseInt(this.getSetting("filter_min_price")),max:parseInt(this.getSetting("filter_max_price"))}}),Object.values(this.$route.query).length>0?this.isResetFilterShow=!0:this.isResetFilterShow=!1,window.axios.get("/web/shop/sidebar").then((function(e){t.attributes=e.data.attributes,t.categories=e.data.categories,t.featuredProducts=e.data.featuredProducts,t.attributeSlideOpen=t.attributes.reduce((function(t,e){return[].concat(n(t),[!0])}),[])})).catch((function(t){}))}},h=i(2),g=Object(h.a)(d,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sidebar-wrapper"},[i("div",{staticClass:"widget widget-product-categories"},[i("h3",{staticClass:"widget-title"},[i("a",{class:{collapsed:!t.categorySlideOpen},attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.categorySlideOpen=!t.categorySlideOpen}}},[t._v("Categories")])]),t._v(" "),i("vue-slide-toggle",{staticClass:"show",attrs:{open:t.categorySlideOpen,duration:200}},[i("div",{staticClass:"widget-body"},[i("vue-tree-list",{attrs:{model:t.treeData},scopedSlots:t._u([{key:"leafNameDisplay",fn:function(e){return[i("router-link",{class:{active:t.setActiveCategory(e.model)},attrs:{to:{path:t.$route.path,query:{category:e.model.slug}}}},[t._v(t._s(e.model.name)+"\n\t\t\t\t\t\t")]),t._v("\n\t\t\t\t\t\t("+t._s(e.model.count)+")\n\t\t\t\t\t")]}},{key:"treeNodeIcon",fn:function(){return[i("span")]},proxy:!0}])})],1)])],1),t._v(" "),t.isResetFilterShow?i("div",{staticClass:"widget"},[i("router-link",{staticClass:"btn btn-primary reset-filter-btn",attrs:{to:t.$route.path}},[t._v("Reset All Filters")])],1):t._e(),t._v(" "),i("div",{staticClass:"widget"},[i("h3",{staticClass:"widget-title"},[i("a",{class:{collapsed:!t.priceSlideOpen},attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.priceSlideOpen=!t.priceSlideOpen}}},[t._v("Price")])]),t._v(" "),i("vue-slide-toggle",{staticClass:"show",attrs:{open:t.priceSlideOpen,duration:200}},[i("div",{staticClass:"widget-body"},[i("div",{staticClass:"price-slider-wrapper"},[t.loaded?i("vue-nouislider",{attrs:{config:t.priceSliderConfig,values:t.priceValues,id:"price-slider"}}):t._e()],1),t._v(" "),i("div",{staticClass:"filter-price-action d-flex align-items-center justify-content-between flex-wrap"},[i("div",{staticClass:"filter-price-text"},[t._v("\n\t\t\t\t\t\tPrice:\n\t\t\t\t\t\t"),i("span",{attrs:{id:"filter-price-range"}},[t._v(t._s(t.priceRangeText))])]),t._v(" "),i("router-link",{staticClass:"btn btn-primary",attrs:{to:t.setFilterRoute()}},[t._v("Filter")])],1)])])],1),t._v(" "),t._l(t.attributes,(function(e,r){return i("div",{key:"attr"+e.id,staticClass:"widget"},[i("h3",{staticClass:"widget-title"},[i("a",{class:{collapsed:!t.attributeSlideOpen[r]},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.attrSlideChange(r)}}},[t._v(t._s(e.name))])]),t._v(" "),i("vue-slide-toggle",{staticClass:"show",attrs:{open:t.attributeSlideOpen[r],duration:200}},[i("div",{staticClass:"product-single-filter mb-0"},[i("div",{staticClass:"widget-body config-size-list"},[i("ul",{staticClass:"mb-0"},t._l(e.terms,(function(e){return i("li",{key:"term"+e.id,class:{active:t.setActiveTerm(e)}},[t.isColor(e.name)?i("router-link",{key:"is-color-1",staticClass:"filter-color border-0",style:"background-color: "+e.name,attrs:{to:t.setFilterRouteQuery(e)}}):i("router-link",{key:"not-color-1",attrs:{to:t.setFilterRouteQuery(e)}},[t._v(t._s(e.name))])],1)})),0)])])])],1)})),t._v(" "),"/shop/horizontal-filter1"!==t.$route.path?i("div",{staticClass:"widget widget-featured-products"},[i("h3",{staticClass:"widget-title"},[i("a",{class:{collapsed:!t.featuredSlideOpen},attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.featuredSlideOpen=!t.featuredSlideOpen}}},[t._v("Featured Products")])]),t._v(" "),i("vue-slide-toggle",{staticClass:"show",attrs:{open:t.featuredSlideOpen,duration:200}},[i("div",{staticClass:"widget-body"},t._l(t.featuredProducts.slice(0,3),(function(t){return i("product-two-component",{key:"sidebar-featured"+t.id,attrs:{product:t}})})),1)])],1):t._e()],2)}),[],!1,null,null,null);e.default=g.exports},229:function(t,e,i){"use strict";i.r(e);var r=i(2),s=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"category-banner-container bg-gray"},[e("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:this.$root.getUrl("client/images/banners/banner-top.jpg"),expression:"\n\t\t\t$root.getUrl('client/images/banners/banner-top.jpg')\n\t\t",arg:"background-image"}],staticClass:"category-banner banner text-uppercase shop-banner"},[this._m(0)])])}),[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container position-relative"},[i("div",{staticClass:"row"},[i("div",{staticClass:"pl-lg-5 pb-5 pb-md-0 col-md-5 col-xl-4 col-lg-4 offset-1"},[i("h3",[t._v("\n\t\t\t\t\t\tElectronic\n\t\t\t\t\t\t"),i("br"),t._v("Deals\n\t\t\t\t\t")]),t._v(" "),i("a",{staticClass:"btn btn-dark btn-black ls-10",attrs:{href:"#"}},[t._v("Get Yours!")])]),t._v(" "),i("div",{staticClass:"col-md-4 offset-md-0 offset-1 pt-3"},[i("div",{staticClass:"coupon-sale-content"},[i("h4",{staticClass:"coupon-sale-text bg-white text-transform-none ls-n-10"},[t._v("\n\t\t\t\t\t\t\tExclusive COUPON\n\t\t\t\t\t\t")]),t._v(" "),i("h5",{staticClass:"mb-2 coupon-sale-text d-block p-0"},[i("i",{staticClass:"ls-0"},[t._v("UP TO")]),t._v(" "),i("b",{staticClass:"text-dark"},[t._v("$100")]),t._v(" OFF\n\t\t\t\t\t\t")])])])])])}],!1,null,null,null);e.default=s.exports},289:function(t,e,i){"use strict";i.r(e);var r=i(8),s=i(345),a=i(223),o=i(229),n=i(227),l=i(228),c=i(19);function u(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function p(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?u(Object(i),!0).forEach((function(e){d(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function d(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var h={components:{PaginationComponent:a.default,ShopBannerComponent:o.default,ShopBreadcrumbComponent:n.default,ShopSidebarOneComponent:l.default,StickyHeaderComponent:c.default},directives:{Sticky:s.a},data:function(){return{loaded:!1,products:[],parentCategories:[],orderBy:"default",perPage:8,totalCount:10,shouldSticky:!0}},computed:p(p({},Object(r.c)("setting",["getShopSettings"])),{},{productComponent:function(){return this.getShopSettings.productType&&(t=this.getShopSettings.productType,function(){return i(349)("./".concat(t,".vue")).then((function(t){return t.default||t}))});var t},fakeArray:function(){for(var t=[],e=0;e<this.perPage;e++)t.push(e);return t}}),watch:{$route:function(){this.getProducts(),document.querySelector(".skeleton-body")&&window.scrollTo({top:document.querySelector(".skeleton-body").offsetTop-58,behavior:"smooth"})}},created:function(){this.getProducts(),this.stickyHandle(),window.addEventListener("resize",this.stickyHandle,{passive:!0})},destroyed:function(){window.removeEventListener("resize",this.stickyHandle)},methods:{getProducts:function(){var t=this;this.loaded=!1,window.axios.get("/web/shop/",{params:p(p({},this.$route.query),{},{orderBy:this.orderBy,per_page:this.perPage})}).then((function(e){t.products=e.data.products,t.totalCount=e.data.totalCount,t.parentCategories=e.data.parentCategories,t.loaded=!0})).catch((function(t){}))},toggleSidebar:function(){document.querySelector("body").classList.toggle("sidebar-opened"),document.querySelector(".filter-toggle").classList.toggle("opened")},stickyHandle:function(){window.innerWidth>992?this.shouldSticky=!0:this.shouldSticky=!1}}},g=i(2),f=Object(g.a)(h,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",{staticClass:"main"},[i("shop-banner-component"),t._v(" "),i("div",{staticClass:"container skeleton-body skel-shop-products",class:{loaded:t.loaded}},[i("shop-breadcrumb-component",{attrs:{categories:t.parentCategories}}),t._v(" "),i("sticky-header-component",{staticClass:"toolbox-wrapper",attrs:{wrapperClass:"toolbox-wrapper",top:650}},[i("nav",{staticClass:"toolbox toolbox-sticky sticky-header horizontal-filter mb-2 pb-0"},[i("div",{staticClass:"toolbox-left mr-auto"},[i("div",{staticClass:"toolbox-item filter-toggle d-none d-lg-flex"},[i("span",{staticClass:"ls-n-20"},[t._v("Filters:")]),t._v(" "),i("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.toggleSidebar.apply(null,arguments)}}},[t._v(" ")])]),t._v(" "),i("a",{staticClass:"canvas-sidebar-toggle d-lg-none bg-white mb-1",attrs:{href:"javascript:;"},on:{click:t.toggleSidebar}},[i("i",{staticClass:"fas fa-sliders-h"}),t._v(" "),i("span",{staticClass:"ml-2 pl-1"},[t._v("Filter")])])]),t._v(" "),i("div",{staticClass:"toolbox-item toolbox-sort"},[i("label",{staticClass:"d-none d-sm-block"},[t._v("Sort By:")]),t._v(" "),i("div",{staticClass:"select-custom"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.orderBy,expression:"orderBy"}],staticClass:"form-control",attrs:{name:"orderby"},on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.orderBy=e.target.multiple?i:i[0]},function(e){return e.preventDefault(),t.getProducts.apply(null,arguments)}]}},[i("option",{attrs:{value:"default"}},[t._v("Default sorting")]),t._v(" "),i("option",{attrs:{value:"popularity"}},[t._v("Sort by popularity")]),t._v(" "),i("option",{attrs:{value:"rating"}},[t._v("Sort by average rating")]),t._v(" "),i("option",{attrs:{value:"date"}},[t._v("Sort by newness")]),t._v(" "),i("option",{attrs:{value:"price"}},[t._v("Sort by price: low to high")]),t._v(" "),i("option",{attrs:{value:"price-desc"}},[t._v("Sort by price: high to low")])])])]),t._v(" "),i("div",{staticClass:"toolbox-item toolbox-show"},[i("label",{staticClass:"d-none d-sm-block"},[t._v("Show:")]),t._v(" "),i("div",{staticClass:"select-custom"},[i("select",{directives:[{name:"model",rawName:"v-model.number",value:t.perPage,expression:"perPage",modifiers:{number:!0}}],staticClass:"form-control",attrs:{name:"count"},on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(e){var i="_value"in e?e._value:e.value;return t._n(i)}));t.perPage=e.target.multiple?i:i[0]},t.getProducts]}},[i("option",{attrs:{value:"8"}},[t._v("8")]),t._v(" "),i("option",{attrs:{value:"12"}},[t._v("12")]),t._v(" "),i("option",{attrs:{value:"24"}},[t._v("24")]),t._v(" "),i("option",{attrs:{value:"36"}},[t._v("36")])])])]),t._v(" "),i("div",{staticClass:"toolbox-item layout-modes d-none d-sm-block mr-lg-3"},[i("router-link",{staticClass:"layout-btn btn-grid active",attrs:{to:"/shop/default",title:"Grid"}},[i("i",{staticClass:"fa fa-th"})]),t._v(" "),i("router-link",{staticClass:"layout-btn btn-list",attrs:{to:"/shop/list",title:"List"}},[i("i",{staticClass:"fa fa-list-ul"})])],1)])]),t._v(" "),i("div",{staticClass:"row main-content-wrap"},[i("div",{staticClass:"col-lg-9 main-content"},[0==t.products.length&&t.loaded?i("div",{staticClass:"info-box with-icon py-3 px-1 skel-hide"},[i("p",{staticClass:"porto-info"},[t._v("No product matching your selection.")])]):[t.loaded?i("div",{staticClass:"row"},t._l(t.products,(function(e){return i("div",{key:e.id,staticClass:"col-6 col-sm-4 col-md-4 col-xl-3"},[i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("keep-alive",[i(t.productComponent,t._b({tag:"component"},"component",{product:e},!1))],1)],1)],1)})),0):i("div",{staticClass:"row"},t._l(t.fakeArray,(function(t){return i("div",{key:t,staticClass:"col-6 col-sm-4 col-md-4 col-xl-3"},[i("div",{staticClass:"skel-pro skel-pro-grid"})])})),0),t._v(" "),i("nav",{staticClass:"toolbox toolbox-pagination"},[i("div",{staticClass:"toolbox-item toolbox-show"},[i("label",[t._v("Show:")]),t._v(" "),i("div",{staticClass:"select-custom"},[i("select",{directives:[{name:"model",rawName:"v-model.number",value:t.perPage,expression:"perPage",modifiers:{number:!0}}],staticClass:"form-control",attrs:{name:"count"},on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(e){var i="_value"in e?e._value:e.value;return t._n(i)}));t.perPage=e.target.multiple?i:i[0]},t.getProducts]}},[i("option",{attrs:{value:"8"}},[t._v("8")]),t._v(" "),i("option",{attrs:{value:"12"}},[t._v("12")]),t._v(" "),i("option",{attrs:{value:"24"}},[t._v("24")]),t._v(" "),i("option",{attrs:{value:"36"}},[t._v("36")])])])]),t._v(" "),i("pagination-component",{attrs:{"per-page":t.perPage,total:t.totalCount}})],1)]],2),t._v(" "),i("div",{staticClass:"sidebar-overlay",on:{click:t.toggleSidebar}}),t._v(" "),i("aside",{staticClass:"sidebar-shop col-lg-3 order-lg-first mobile-sidebar",attrs:{"sticky-container":""}},[i("shop-sidebar-one-component",{directives:[{name:"sticky",rawName:"v-sticky",value:t.shouldSticky,expression:"shouldSticky"}],attrs:{"sticky-offset":"{ top: 69 }"}})],1)])],1),t._v(" "),i("div",{staticClass:"mb-3"})],1)}),[],!1,null,null,null);e.default=f.exports},345:function(t,e,i){"use strict";var r=i(346);const s=function(t){t.directive("Sticky",r.a)};window.Vue&&Vue.use(s),r.a.install=s,e.a=r.a},346:function(module,__webpack_exports__,__webpack_require__){"use strict";const namespace="@@vue-sticky-directive",events=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],batchStyle=(t,e={},i={})=>{for(let i in e)t.style[i]=e[i];for(let e in i)i[e]&&!t.classList.contains(e)?t.classList.add(e):!i[e]&&t.classList.contains(e)&&t.classList.remove(e)};class Sticky{constructor(t,e){this.el=t,this.vm=e,this.unsubscribers=[],this.isPending=!1,this.state={isTopSticky:null,isBottomSticky:null,height:null,width:null,xOffset:null},this.lastState={top:null,bottom:null,sticked:!1};const i=this.getAttribute("sticky-offset")||{},r=this.getAttribute("sticky-side")||"top",s=this.getAttribute("sticky-z-index")||"10",a=this.getAttribute("on-stick")||null;this.options={topOffset:Number(i.top)||0,bottomOffset:Number(i.bottom)||0,shouldTopSticky:"top"===r||"both"===r,shouldBottomSticky:"bottom"===r||"both"===r,zIndex:s,onStick:a}}doBind(){if(this.unsubscribers.length>0)return;const{el:t,vm:e}=this;e.$nextTick(()=>{this.placeholderEl=document.createElement("div"),this.containerEl=this.getContainerEl(),t.parentNode.insertBefore(this.placeholderEl,t),events.forEach(t=>{const e=this.update.bind(this);this.unsubscribers.push(()=>window.removeEventListener(t,e)),this.unsubscribers.push(()=>this.containerEl.removeEventListener(t,e)),window.addEventListener(t,e,{passive:!0}),this.containerEl.addEventListener(t,e,{passive:!0})})})}doUnbind(){this.unsubscribers.forEach(t=>t()),this.unsubscribers=[],this.resetElement()}update(){this.isPending||(requestAnimationFrame(()=>{this.isPending=!1,this.recomputeState(),this.updateElements()}),this.isPending=!0)}isTopSticky(){if(!this.options.shouldTopSticky)return!1;const t=this.state.placeholderElRect.top,e=this.state.containerElRect.bottom,i=this.options.topOffset,r=this.options.bottomOffset;return t<=i&&e>=r}isBottomSticky(){if(!this.options.shouldBottomSticky)return!1;const t=window.innerHeight-this.state.placeholderElRect.top-this.state.height,e=window.innerHeight-this.state.containerElRect.top,i=this.options.topOffset;return t<=this.options.bottomOffset&&e>=i}recomputeState(){this.state=Object.assign({},this.state,{height:this.getHeight(),width:this.getWidth(),xOffset:this.getXOffset(),placeholderElRect:this.getPlaceholderElRect(),containerElRect:this.getContainerElRect()}),this.state.isTopSticky=this.isTopSticky(),this.state.isBottomSticky=this.isBottomSticky()}fireEvents(){"function"!=typeof this.options.onStick||this.lastState.top===this.state.isTopSticky&&this.lastState.bottom===this.state.isBottomSticky&&this.lastState.sticked===(this.state.isTopSticky||this.state.isBottomSticky)||(this.lastState={top:this.state.isTopSticky,bottom:this.state.isBottomSticky,sticked:this.state.isBottomSticky||this.state.isTopSticky},this.options.onStick(this.lastState))}updateElements(){const t={paddingTop:0},e={position:"static",top:"auto",bottom:"auto",left:"auto",width:"auto",zIndex:this.options.zIndex},i={"vue-sticky-el":!0,"top-sticky":!1,"bottom-sticky":!1};if(this.state.isTopSticky){e.position="fixed",e.top=this.options.topOffset+"px",e.left=this.state.xOffset+"px",e.width=this.state.width+"px";const r=this.state.containerElRect.bottom-this.state.height-this.options.bottomOffset-this.options.topOffset;r<0&&(e.top=r+this.options.topOffset+"px"),t.paddingTop=this.state.height+"px",i["top-sticky"]=!0}else if(this.state.isBottomSticky){e.position="fixed",e.bottom=this.options.bottomOffset+"px",e.left=this.state.xOffset+"px",e.width=this.state.width+"px";const r=window.innerHeight-this.state.containerElRect.top-this.state.height-this.options.bottomOffset-this.options.topOffset;r<0&&(e.bottom=r+this.options.bottomOffset+"px"),t.paddingTop=this.state.height+"px",i["bottom-sticky"]=!0}else t.paddingTop=0;batchStyle(this.el,e,i),batchStyle(this.placeholderEl,t,{"vue-sticky-placeholder":!0}),this.fireEvents()}resetElement(){["position","top","bottom","left","width","zIndex"].forEach(t=>{this.el.style.removeProperty(t)}),this.el.classList.remove("bottom-sticky","top-sticky");const{parentNode:t}=this.placeholderEl;t&&t.removeChild(this.placeholderEl)}getContainerEl(){let t=this.el.parentNode;for(;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){if(t.hasAttribute("sticky-container"))return t;t=t.parentNode}return this.el.parentNode}getXOffset(){return this.placeholderEl.getBoundingClientRect().left}getWidth(){return this.placeholderEl.getBoundingClientRect().width}getHeight(){return this.el.getBoundingClientRect().height}getPlaceholderElRect(){return this.placeholderEl.getBoundingClientRect()}getContainerElRect(){return this.containerEl.getBoundingClientRect()}getAttribute(name){const expr=this.el.getAttribute(name);let result=void 0;if(expr)if(this.vm[expr])result=this.vm[expr];else try{result=eval(`(${expr})`)}catch(t){result=expr}return result}}__webpack_exports__.a={inserted(t,e,i){(void 0===e.value||e.value)&&(t[namespace]=new Sticky(t,i.context),t[namespace].doBind())},unbind(t,e,i){t[namespace]&&(t[namespace].doUnbind(),t[namespace]=void 0)},componentUpdated(t,e,i){void 0===e.value||e.value?(t[namespace]||(t[namespace]=new Sticky(t,i.context)),t[namespace].doBind()):t[namespace]&&t[namespace].doUnbind()}}},349:function(t,e,i){var r={"./ProductEightComponent.vue":[232,11],"./ProductFiveComponent.vue":[233,12],"./ProductFourComponent.vue":[230,1,3,17],"./ProductOneComponent.vue":[220,13],"./ProductSevenComponent.vue":[234,14],"./ProductSixComponent.vue":[235,15],"./ProductThreeComponent.vue":[236,18],"./ProductTwoComponent.vue":[218,26]};function s(t){if(!i.o(r,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[t],s=e[0];return Promise.all(e.slice(1).map(i.e)).then((function(){return i(s)}))}s.keys=function(){return Object.keys(r)},s.id=349,t.exports=s}}]);