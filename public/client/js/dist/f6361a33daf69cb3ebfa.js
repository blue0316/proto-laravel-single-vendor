(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{255:function(t,e,a){"use strict";a.r(e);var s=a(1),r=a.n(s);function i(t,e,a,s,r,i,n){try{var o=t[i](n),l=o.value}catch(t){return void a(t)}o.done?e(l):Promise.resolve(l).then(s,r)}var n,o,l={data:function(){return{resetEmail:""}},methods:{resetPassword:(n=r.a.mark((function t(){var e=this;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.axios.post("/forgot-password",{email:this.resetEmail}).then((function(t){e.$vToastify.stopLoader(),e.$vToastify.setSettings({withBackdrop:!1,position:"top-right",successDuration:1e3}),e.$vToastify.success("Link send successfully")})).catch((function(t){e.$vToastify.stopLoader(),e.$vToastify.setSettings({withBackdrop:!1,position:"top-right",errorDuration:1500}),e.$vToastify.error("Link send failed")}));case 2:case"end":return t.stop()}}),t,this)})),o=function(){var t=this,e=arguments;return new Promise((function(a,s){var r=n.apply(t,e);function o(t){i(r,a,s,o,l,"next",t)}function l(t){i(r,a,s,o,l,"throw",t)}o(void 0)}))},function(){return o.apply(this,arguments)})}},c=a(2),u=Object(c.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"main"},[a("div",{staticClass:"page-header"},[a("div",{staticClass:"container d-flex flex-column align-items-center"},[a("nav",{staticClass:"breadcrumb-nav",attrs:{"aria-label":"breadcrumb"}},[a("div",{staticClass:"container"},[a("ol",{staticClass:"breadcrumb"},[a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:"/"}},[t._v("Shop")])],1),t._v(" "),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("\n\t\t\t\t\t\t\tMy Account\n\t\t\t\t\t\t")])])])]),t._v(" "),a("h1",[t._v("My Account")])])]),t._v(" "),a("div",{staticClass:"container reset-password-container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6 offset-lg-3"},[a("div",{staticClass:"feature-box border-top-primary"},[a("div",{staticClass:"feature-box-content"},[a("form",{staticClass:"mb-0",attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.resetPassword.apply(null,arguments)}}},[a("p",[t._v("\n\t\t\t\t\t\t\t\tLost your password? Please enter your\n\t\t\t\t\t\t\t\tusername or email address. You will receive\n\t\t\t\t\t\t\t\ta link to create a new password via email.\n\t\t\t\t\t\t\t")]),t._v(" "),a("div",{staticClass:"form-group mb-0"},[a("label",{staticClass:"font-weight-normal",attrs:{for:"reset-email"}},[t._v("Email")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.resetEmail,expression:"resetEmail"}],staticClass:"form-control",attrs:{type:"email",id:"reset-email",name:"reset-email",required:""},domProps:{value:t.resetEmail},on:{input:function(e){e.target.composing||(t.resetEmail=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-footer mb-0"},[a("router-link",{attrs:{to:"/pages/login"}},[t._v("Click here to login")]),t._v(" "),a("button",{staticClass:"btn btn-md btn-primary form-footer-right font-weight-normal text-transform-none mr-0",attrs:{type:"submit"}},[t._v("\n\t\t\t\t\t\t\t\t\tReset Password\n\t\t\t\t\t\t\t\t")])],1)])])])])])])])}),[],!1,null,null,null);e.default=u.exports}}]);