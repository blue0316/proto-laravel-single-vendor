(window.webpackJsonp=window.webpackJsonp||[]).push([[56,83,85],{221:function(t,e,s){"use strict";s.r(e);function i(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function n(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?i(Object(s),!0).forEach((function(e){a(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function a(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var o={props:{options:{type:Object}},data:function(){return{carouselOptions:{loop:!1,margin:20,responsiveClass:!0,nav:!1,navText:['<i class="icon-angle-left">','<i class="icon-angle-right">'],dots:!0,autoplay:!0,autoplayTimeout:15e3,items:1},id:"10"}},created:function(){this.carouselOptions=n(n({},this.carouselOptions),this.options),this.id=Math.random().toString(36).substring(2,15)},mounted:function(){var t=this;s(348);var e=$("#"+this.id);e.on("initialize.owl.carousel",(function(){t.$emit("initialize")})),e.on("initialized.owl.carousel",(function(){t.$emit("initialized")})),this.create(),$("#"+this.prevHandler).click((function(){e.trigger("prev.owl.carousel")})),$("#"+this.nextHandler).click((function(){e.trigger("next.owl.carousel")})),e.on("changed.owl.carousel",(function(e){if(t.$emit("changed",e),$(e.currentTarget.closest(".product-single-carousel")).length>0){var s=$(e.currentTarget).closest(".product-single-gallery").find("#carousel-custom-dots");if(s.length>0&&s.hasClass("vertical-thumbs"))(i=s.find(".owl-dot.active")).length>0&&i.removeClass("active"),s.children().eq(e.item.index).addClass("active");else if(s.length>0){var i;(i=s.find(".owl-dot.active")).length>0&&i.removeClass("active");var n=s.find(".owl-item").eq(e.item.index);n.hasClass("active")||n.closest(".owl-carousel").trigger("to.owl.carousel",[n.index(),300]),n.children().addClass("active")}}})),$("#carousel-custom-dots .owl-dot").click((function(){var t=$(this).index();$(this).closest(".owl-carousel").length>0&&(t=$(this).parent().index()),$(this).closest(".product-single-gallery").find(".product-single-carousel").trigger("to.owl.carousel",[t,300])})),this.loop||e.on("changed.owl.carousel",(function(e){0===e.item.index?(t.showPrev=!1,t.showNext=!0):Math.floor(e.item.index+e.page.size)===e.item.count?(t.showPrev=!0,t.showNext=!1):(t.showPrev=!0,t.showNext=!0)}))},methods:{create:function(){$("#"+this.id).owlCarousel(this.carouselOptions)},destroy:function(){$("#"+this.id).trigger("destroy.owl.carousel")}}},r=s(2),l=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"owl-carousel owl-theme",attrs:{id:this.id}},[this._t("default")],2)}),[],!1,null,null,null);e.default=l.exports},241:function(t,e,s){"use strict";s.r(e);var i={props:{from:{type:Number,default:0},to:{type:Number,default:0},speed:{type:Number,default:2e3},interval:{type:Number,default:50}},data:function(){return{started:!1,current:0,intervalID:0,finished:!1}},computed:{step:function(){return(this.to-this.from)*this.interval/this.speed}},mounted:function(){this.current=this.from,window.addEventListener("scroll",this.scrollHandler,{passive:!0})},beforeDestroy:function(){window.removeEventListener("scroll",this.scrollHandler)},methods:{scrollHandler:function(){this.$el.getBoundingClientRect().top<window.innerHeight-100&&!this.started&&(this.started=!0,this.intervalID=window.setInterval(this.startCount,this.interval))},startCount:function(){this.current+this.step<=this.to?this.current+=this.step:(window.clearInterval(this.intervalID),this.finished=!0)}}},n=s(2),a=Object(n.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"count-wrapper"},[e("span",{staticClass:"count-to"},[this._v(this._s(Math.ceil(this.current)))]),this.finished?this._t("default"):this._e()],2)}),[],!1,null,null,null);e.default=a.exports},252:function(t,e,s){"use strict";s.r(e);var i=s(241),n=s(221),a={components:{CountToComponent:i.default,OwlCarouselComponent:n.default}},o=s(2),r=Object(o.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"main"},[s("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.$root.getUrl("client/images/page-header-bg.jpg"),expression:"\n\t\t\t$root.getUrl('client/images/page-header-bg.jpg')\n\t\t",arg:"background-image"}],staticClass:"page-header page-header-bg text-left",staticStyle:{background:"70% / cover #d4e1ea"}},[s("div",{staticClass:"container"},[t._m(0),t._v(" "),s("router-link",{staticClass:"btn btn-dark btn-sm",attrs:{to:"contact-us"}},[t._v("Contact")])],1)]),t._v(" "),s("nav",{staticClass:"breadcrumb-nav",attrs:{"aria-label":"breadcrumb"}},[s("div",{staticClass:"container"},[s("ol",{staticClass:"breadcrumb"},[s("li",{staticClass:"breadcrumb-item"},[s("router-link",{attrs:{to:"/"}},[s("i",{staticClass:"icon-home"})])],1),t._v(" "),s("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("\n\t\t\t\t\tAbout Us\n\t\t\t\t")])])])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("div",{staticClass:"testimonials-section"},[s("div",{staticClass:"container"},[s("h2",{staticClass:"subtitle text-center"},[t._v("HAPPY CLIENTS")]),t._v(" "),s("owl-carousel-component",{attrs:{options:{items:1,dots:!1,nav:!1,responsive:{0:{items:1},992:{items:2}}}}},[s("div",{staticClass:"testimonial"},[s("div",{staticClass:"testimonial-owner"},[s("figure",[s("img",{attrs:{src:t.$root.getUrl("client/images/clients/client1.png"),width:"60",height:"60",alt:"client"}})]),t._v(" "),s("div",[s("h4",{staticClass:"testimonial-title"},[t._v("john Smith")]),t._v(" "),s("span",[t._v("Proto Co Ceo")])])]),t._v(" "),s("blockquote",[s("p",[t._v("\n\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur elitad\n\t\t\t\t\t\t\tadipiscing Cras non placerat mipsum dolor sit\n\t\t\t\t\t\t\tamet, consectetur elitad adipiscing.\n\t\t\t\t\t\t")])])]),t._v(" "),s("div",{staticClass:"testimonial"},[s("div",{staticClass:"testimonial-owner"},[s("figure",[s("img",{attrs:{src:t.$root.getUrl("client/images/clients/client2.png"),alt:"client",width:"60",height:"60"}})]),t._v(" "),s("div",[s("h4",{staticClass:"testimonial-title"},[t._v("Bob Smith")]),t._v(" "),s("span",[t._v("Proto Co Ceo")])])]),t._v(" "),s("blockquote",[s("p",[t._v("\n\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur elitad\n\t\t\t\t\t\t\tadipiscing Cras non placerat mipsum dolor sit\n\t\t\t\t\t\t\tamet, consectetur elitad adipiscing.\n\t\t\t\t\t\t")])])]),t._v(" "),s("div",{staticClass:"testimonial"},[s("div",{staticClass:"testimonial-owner"},[s("figure",[s("img",{attrs:{src:t.$root.getUrl("client/images/clients/client1.png"),alt:"client",width:"60",height:"60"}})]),t._v(" "),s("div",[s("h4",{staticClass:"testimonial-title"},[t._v("john Smith")]),t._v(" "),s("span",[t._v("Proto Co Ceo")])])]),t._v(" "),s("blockquote",[s("p",[t._v("\n\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur elitad\n\t\t\t\t\t\t\tadipiscing Cras non placerat mipsum dolor sit\n\t\t\t\t\t\t\tamet, consectetur elitad adipiscing.\n\t\t\t\t\t\t")])])])])],1)]),t._v(" "),s("div",{staticClass:"counters-section bg-gray"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-6 col-md-4 count-container"},[s("count-to-component",{attrs:{from:0,to:200,speed:2e3,interval:50}},[t._v("+")]),t._v(" "),s("h4",{staticClass:"count-title"},[t._v("MILLION CUSTOMERS")])],1),t._v(" "),s("div",{staticClass:"col-6 col-md-4 count-container"},[s("count-to-component",{attrs:{from:0,to:1800,speed:2e3,interval:50}},[t._v("+")]),t._v(" "),s("h4",{staticClass:"count-title"},[t._v("TEAM MEMBERS")])],1),t._v(" "),s("div",{staticClass:"col-6 col-md-4 count-container"},[s("count-to-component",{attrs:{from:0,to:24,speed:2e3,interval:50}},[s("span",[t._v("HR")])]),t._v(" "),s("h4",{staticClass:"count-title"},[t._v("SUPPORT AVAILABLE")])],1),t._v(" "),s("div",{staticClass:"col-6 col-md-4 count-container"},[s("count-to-component",{attrs:{from:0,to:265,speed:2e3,interval:50}},[t._v("+")]),t._v(" "),s("h4",{staticClass:"count-title"},[t._v("SUPPORT AVAILABLE")])],1),t._v(" "),s("div",{staticClass:"col-6 col-md-4 count-container"},[s("count-to-component",{attrs:{from:0,to:99,speed:2e3,interval:50}},[s("span",[t._v("%")])]),t._v(" "),s("h4",{staticClass:"count-title"},[t._v("SUPPORT AVAILABLE")])],1)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"ls-0"},[e("span",[this._v("ABOUT US")]),this._v(" OUR COMPANY")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"about-section"},[e("div",{staticClass:"container"},[e("h2",{staticClass:"subtitle"},[this._v("OUR STORY")]),this._v(" "),e("p",[this._v("\n\t\t\t\tLorem Ipsum is simply dummy text of the printing and\n\t\t\t\ttypesetting industry. Lorem Ipsum has been the industry's\n\t\t\t\tstandard dummy text ever since the 1500s, when an unknown\n\t\t\t\tprinter took a galley of type and scrambled it to make a\n\t\t\t\ttype specimen book. It has survived not only five centuries,\n\t\t\t\tbut also the leap into electronic typesetting, remaining\n\t\t\t\tessentially unchanged.\n\t\t\t")]),this._v(" "),e("p",[this._v("\n\t\t\t\tLorem Ipsum is simply dummy text of the printing and\n\t\t\t\ttypesetting industry. Lorem Ipsum has been the industry's\n\t\t\t\tstandard dummy text ever since the 1500s, when an unknown\n\t\t\t\tprinter took a galley of type and scrambled it to make a\n\t\t\t\ttype specimen book.\n\t\t\t")]),this._v(" "),e("p",{staticClass:"lead mb-3"},[this._v("\n\t\t\t\t“ Many desktop publishing packages and web page editors now\n\t\t\t\tuse Lorem Ipsum as their default model search for evolved\n\t\t\t\tover sometimes by accident, sometimes on purpose ”\n\t\t\t")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"features-section bg-gray"},[s("div",{staticClass:"container"},[s("h2",{staticClass:"subtitle"},[t._v("WHY CHOOSE US")]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"feature-box bg-white"},[s("i",{staticClass:"icon-shipped"}),t._v(" "),s("div",{staticClass:"feature-box-content"},[s("h3",[t._v("Free Shipping")]),t._v(" "),s("p",[t._v("\n\t\t\t\t\t\t\t\tLorem Ipsum is simply dummy text of the\n\t\t\t\t\t\t\t\tprinting and typesetting industry. Lorem\n\t\t\t\t\t\t\t\tIpsum has been the industr in some form.\n\t\t\t\t\t\t\t")])])])]),t._v(" "),s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"feature-box bg-white"},[s("i",{staticClass:"icon-us-dollar"}),t._v(" "),s("div",{staticClass:"feature-box-content"},[s("h3",[t._v("100% Money Back Guarantee")]),t._v(" "),s("p",[t._v("\n\t\t\t\t\t\t\t\tThere are many variations of passages of\n\t\t\t\t\t\t\t\tLorem Ipsum available, but the majority have\n\t\t\t\t\t\t\t\tsuffered alteration in some form.\n\t\t\t\t\t\t\t")])])])]),t._v(" "),s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"feature-box bg-white"},[s("i",{staticClass:"icon-online-support"}),t._v(" "),s("div",{staticClass:"feature-box-content"},[s("h3",[t._v("Online Support 24/7")]),t._v(" "),s("p",[t._v("\n\t\t\t\t\t\t\t\tThere are many variations of passages of\n\t\t\t\t\t\t\t\tLorem Ipsum available, but the majority have\n\t\t\t\t\t\t\t\tsuffered alteration in some form.\n\t\t\t\t\t\t\t")])])])])])])])}],!1,null,null,null);e.default=r.exports}}]);