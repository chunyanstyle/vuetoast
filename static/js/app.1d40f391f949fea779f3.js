webpackJsonp([1],[,,function(t,e,n){"use strict";e.a={mounted:function(){var t=this,e=function(){t.visible=!1};window.addEventListener("hashchange",e),window.addEventListener("popstate",e),window.addEventListener("pagehide",e)}}},,,,,,,,,,,function(t,e,n){"use strict";(function(t){var i=n(1),s=n(74),a=n(81),o=n.n(a);i.a.use(s.a),e.a=new s.a({base:t,routes:[{path:"/",component:o.a}]})}).call(e,"/")},,function(t,e,n){n(57);var i=n(0)(n(22),n(67),null,null);t.exports=i.exports},function(t,e,n){"use strict";var i=n(29),s=n.n(i),a=n(1),o=n(76),c=n.n(o),r=a.a.extend(c.a),l=document.createElement("div");r.show=function(t){document.body.appendChild(l),t.type="inform";var e=s()({},t);new r({propsData:e}).$mount(l).show()},r.confirm=function(t){document.body.appendChild(l),t.type="confirm";var e=s()({},t);new r({propsData:e}).$mount(l).show()},e.a=r},function(t,e,n){"use strict";var i=n(1),s=i.a.extend(n(77)),a=function(t){t.target.parentNode.removeChild(t.target)};s.prototype.close=function(){this.visible=!1,this.$el.addEventListener("transitionend",a)};var o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=(new s).$mount(document.createElement("div")),n=t.duration||2500;return e.message="string"==typeof t?t:t.message,e.position=t.position||"leave",document.body.appendChild(e.$el),e.visible=!0,i.a.nextTick(function(){e.timer=setTimeout(function(){e.close()},n)}),e.hide=function(){e.close()},e};e.a=o},function(t,e,n){"use strict";var i=n(1),s=i.a.extend(n(78)),a=function(t){t.target.parentNode.removeChild(t.target)};s.prototype.close=function(){this.visible=!1,this.$el.addEventListener("transitionend",a)};var o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=(new s).$mount(document.createElement("div")),n=t.duration||2500;return e.message="string"==typeof t?t:t.message,e.position=t.position||"leave",document.body.appendChild(e.$el),e.visible=!0,i.a.nextTick(function(){e.timer=setTimeout(function(){e.close()},n)}),e.hide=function(){e.close()},e};e.a=o},function(t,e,n){"use strict";var i=n(1),s=i.a.extend(n(80)),a=function(t){t.target.parentNode.removeChild(t.target)};s.prototype.close=function(){this.visible=!1,this.$el.addEventListener("transitionend",a)};var o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=(new s).$mount(document.createElement("div")),n=t.duration||2500;return e.message="string"==typeof t?t:t.message,e.position=t.position||"leave",document.body.appendChild(e.$el),e.visible=!0,i.a.nextTick(function(){e.timer=setTimeout(function(){e.close()},n)}),e};e.a=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),s=n(15),a=n.n(s),o=n(13),c=n(14);n.n(c);i.a.config.productionTip=!1,new i.a({router:o.a,render:function(t){return t(a.a)}}).$mount("#app-box")},function(t,e,n){"use strict";function i(t,e,i){return d=n.i(p.a)({message:t,position:e||"middle",duration:i||1500})}function s(){return d.close()}function a(t,e,i){return v=n.i(b.a)({message:t,position:e||"middle",duration:i||1500})}function o(){return v.close()}function c(t,e){return f=n.i(_.a)({message:t,position:"middle",duration:e||1500})}function r(){return f.close()}function l(t,e){m.a.show({title:t,message:e,type:"inform"})}function u(t,e,n,i,s){m.a.confirm({title:t,message:e,type:"confirm",context:n,sureBtn:i,cancelBtn:s})}var d,v,f,p=n(19),m=n(16),b=n(18),_=n(17);e.a={toast:i,alert:l,confirm:u,loading:a,load:c,hideloading:o,hideload:r,hidetoast:s}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2);e.default={mixins:[i.a],data:function(){return{visible:!1}},props:{title:{type:String,default:"提示"},message:{type:String},type:{type:String,default:"confirm",validator:function(t){return"confirm"===t||"inform"===t}},sureBtn:{type:Function},cancelBtn:{type:Function},context:{type:Object}},methods:{cancel:function(){this.cancelBtn&&this.cancelBtn.apply(this.context),this.close()},sure:function(){this.sureBtn&&this.sureBtn.apply(this.context),this.close()},show:function(){this.visible=!0},close:function(){this.visible=!1}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2);e.default={mixins:[i.a],data:function(){return{visible:!1,message:"",position:""}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2);e.default={mixins:[i.a],data:function(){return{visible:!1,message:"",position:""}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:{type:String},backIcon:{type:Boolean,default:!0}},data:function(){return{}},mounted:function(){},methods:{back:function(){history.back()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2);e.default={mixins:[i.a],data:function(){return{visible:!1,message:"",position:""}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(79),s=n.n(i),a=n(21);e.default={components:{myHeader:s.a},methods:{toastTop:function(){a.a.toast("hello world!","top")},toastMiddle:function(){a.a.toast("hello world!","middle")},toastBottom:function(){a.a.toast("hello world!","bottom")},loadingTop:function(){a.a.loading("Loading","top")},loadingMiddle:function(){a.a.loading("Loading","middle")},loadingBottom:function(){a.a.loading("Loading","bottom")},alert:function(){a.a.alert("提示","hello world!")},confirm:function(){a.a.confirm("提示","确定退出？",{sure:"你点击了确定！",cancle:"你点击了取消"},function(){a.a.toast(this.sure,"top")},function(){a.a.toast(this.cancle,"top")})}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"loadingstyle",class:t.position},[n("div",{staticClass:"spinner"},[n("div",{staticClass:"rect1"}),t._v(" "),n("div",{staticClass:"rect2"}),t._v(" "),n("div",{staticClass:"rect3"}),t._v(" "),n("div",{staticClass:"rect4"}),t._v(" "),n("div",{staticClass:"rect5"})]),t._v(" "),n("span",[t._v(t._s(t.message))])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ub header"},[n("div",{staticClass:"left-l",class:{back:!!t.backIcon},on:{click:t.back}}),t._v(" "),n("div",{staticClass:"ub ub-ac ub-pc ub-f1 center"},[t._v("\n\t\t"+t._s(t.title)+"\n\t")]),t._v(" "),n("div",{staticClass:"left-r"})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.visible?n("div",{staticClass:"alert"},[n("transition",{attrs:{name:"fade"}},[n("div",{staticClass:"wrap"},[n("div",{staticClass:"head"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"body"},[t._t("default",[n("p",[t._v(t._s(t.message))])])],2),t._v(" "),n("div",{staticClass:"foot"},["confirm"===t.type?n("div",{staticStyle:{"text-align":"center"}},[n("button",{staticClass:"btn-base",on:{click:t.sure}},[t._v("确定")]),t._v(" "),n("button",{staticClass:"btn-gray",on:{click:t.cancel}},[t._v("取消")])]):"inform"===t.type?n("div",{staticStyle:{"text-align":"center"}},[n("button",{staticClass:"btn-base",on:{click:t.cancel}},[t._v("取 消")])]):t._e()])])])],1):t._e()},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"toast",class:t.position},[n("span",[t._v(t._s(t.message))])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"loadstyle",class:t.position},[t._m(0),t._v(" "),n("span",[t._v(t._s(t.message))])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spinner"},[n("div",{staticClass:"rect1"}),t._v(" "),n("div",{staticClass:"rect2"}),t._v(" "),n("div",{staticClass:"rect3"}),t._v(" "),n("div",{staticClass:"rect4"}),t._v(" "),n("div",{staticClass:"rect5"})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("myHeader",{attrs:{title:"VUE常用提示弹框组件"}}),t._v(" "),n("div",{staticClass:"ub ub-ver list"},[n("div",{staticClass:"ub ub-ac ub-f1 list-item",on:{click:t.toastTop}},[t._v("tosat提示框（顶部）")]),t._v(" "),n("div",{staticClass:"ub ub-ac ub-f1 list-item",on:{click:t.toastMiddle}},[t._v("tosat提示框（屏幕中间）")]),t._v(" "),n("div",{staticClass:"ub ub-ac ub-f1 list-item",on:{click:t.toastBottom}},[t._v("tosat提示框（底部）")]),t._v(" "),n("div",{staticClass:"ub ub-ac ub-f1 list-item",on:{click:t.loadingTop}},[t._v("loading提示框（顶部）")]),t._v(" "),n("div",{staticClass:"ub ub-ac ub-f1 list-item",on:{click:t.loadingMiddle}},[t._v("loading提示框（屏幕中间）")]),t._v(" "),n("div",{staticClass:"ub ub-ac ub-f1 list-item",on:{click:t.loadingBottom}},[t._v("loading提示框（底部）")]),t._v(" "),n("div",{staticClass:"ub ub-ac ub-f1 list-item",on:{click:t.alert}},[t._v("alert提示框")]),t._v(" "),n("div",{staticClass:"ub ub-ac ub-f1 list-item",on:{click:t.confirm}},[t._v("confirm提示框")])])],1)},staticRenderFns:[]}},,,function(t,e,n){n(60);var i=n(0)(n(23),n(70),"data-v-22a598fa",null);t.exports=i.exports},function(t,e,n){n(62);var i=n(0)(n(24),n(72),null,null);t.exports=i.exports},function(t,e,n){n(58);var i=n(0)(n(25),n(68),null,null);t.exports=i.exports},function(t,e,n){n(59);var i=n(0)(n(26),n(69),"data-v-20c057d0",null);t.exports=i.exports},function(t,e,n){n(61);var i=n(0)(n(27),n(71),null,null);t.exports=i.exports},function(t,e,n){n(63);var i=n(0)(n(28),n(73),null,null);t.exports=i.exports}],[20]);