(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{239:function(t,s,a){"use strict";a.r(s);var e={props:{post:Object},computed:{day:function(){return new Date(this.post.created_at).toLocaleString("en-us",{day:"2-digit"})},month:function(){return new Date(this.post.created_at).toLocaleString("en-us",{month:"short"})}}},o=a(2),i=Object(o.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("article",{staticClass:"post"},[t.post.media.length?a("div",{staticClass:"post-media"},[a("router-link",{attrs:{to:"/pages/blog/single/"+t.post.slug}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.$root.getUrl(t.post.media[0].copy_link,!0),expression:"$root.getUrl(post.media[0].copy_link, true)"}],attrs:{alt:t.post.media[0].alt_text?t.post.media[0].alt_text:"post",width:t.post.media[0].width,height:t.post.media[0].height}})])],1):t._e(),t._v(" "),a("div",{staticClass:"post-body"},[a("div",{staticClass:"post-date"},[a("span",{staticClass:"day"},[t._v(t._s(t.day))]),t._v(" "),a("span",{staticClass:"month"},[t._v(t._s(t.month))])]),t._v(" "),a("h2",{staticClass:"post-title"},[a("router-link",{attrs:{to:"/pages/blog/single/"+t.post.slug}},[t._v("\n                    "+t._s(t.post.title)+"\n                ")])],1),t._v(" "),a("div",{staticClass:"post-content"},[a("p",[t._v(t._s(t.post.short_desc))]),t._v(" "),a("router-link",{staticClass:"read-more",attrs:{to:"/pages/blog/single/"+t.post.slug}},[t._v("\n                    Read More\n                    "),a("i",{staticClass:"fa fa-angle-right"})])],1)])])}),[],!1,null,null,null);s.default=i.exports}}]);