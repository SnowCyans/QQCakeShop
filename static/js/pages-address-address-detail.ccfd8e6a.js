(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-address-address-detail"],{"3c7a":function(t,a,n){var e=n("24fb");a=e(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */.fs-40[data-v-ecb79976]{font-size:%?40?%!important}.fs-36[data-v-ecb79976]{font-size:%?36?%!important}.fs-34[data-v-ecb79976]{font-size:%?34?%!important}.fs-30[data-v-ecb79976]{font-size:%?30?%!important}.fs-28[data-v-ecb79976]{font-size:%?28?%!important}.fs-26[data-v-ecb79976]{font-size:%?26?%!important}.fs-24[data-v-ecb79976]{font-size:%?24?%!important}.fs-22[data-v-ecb79976]{font-size:%?22?%!important}.fs-20[data-v-ecb79976]{font-size:%?20?%!important}.fs-18[data-v-ecb79976]{font-size:%?18?%!important}.fs-16[data-v-ecb79976]{font-size:%?16?%!important}.fs-14[data-v-ecb79976]{font-size:%?14?%!important}.fs-12[data-v-ecb79976]{font-size:%?12?%!important}.color-9b9b[data-v-ecb79976]{color:#9b9b9b!important}.color-8d8d[data-v-ecb79976]{color:#8d8d8d!important}.color-fff[data-v-ecb79976]{color:#fff!important}.color-yellow[data-v-ecb79976]{color:#fbbd08!important}.color-red[data-v-ecb79976]{color:red!important}.color-zise[data-v-ecb79976]{color:#b895b7!important}.bg-kaqise[data-v-ecb79976]{background-color:#e3cfbd!important}.bg-zise[data-v-ecb79976]{background-color:#b895b7!important}.bg-fff[data-v-ecb79976]{background-color:#fff!important}.my-fixed[data-v-ecb79976]{position:fixed!important;right:0;bottom:0;width:100%;box-shadow:0 0 %?8?% %?1?% grey}\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-ecb79976]{background-color:#fff}body.?%PAGE?%[data-v-ecb79976]{background-color:#fff}.my-map[data-v-ecb79976]{height:%?600?%;width:100%}.btn1[data-v-ecb79976]{width:40%}.btn2[data-v-ecb79976]{width:40%}',""]),t.exports=a},"403e":function(t,a,n){"use strict";(function(t){n("7a82");var e=n("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=e(n("5530")),o=n("26cb"),s={data:function(){return{locationObj:{userName:"",contact:"",name:"",address:"",isDefault:!1},locationObjs:{userName:"",contact:"",name:"",address:"",isDefault:!1},addOrEdit:!0}},onLoad:function(a){var n=a.item,e=a.i,i=a.addOrEdit;if(t.log(n),t.log(e),n){var o=JSON.parse(a.item);this.addOrEdit=i,this.locationObj=o}},methods:(0,i.default)((0,i.default)({},(0,o.mapMutations)("address",["addAddress","updateAddress"])),{},{handleLocation:function(){var a=this;uni.chooseLocation({success:function(n){t.log("位置名称："+n.name),t.log("详细地址："+n.address);var e=n.name,i=n.address;a.locationObj.name=e,a.locationObj.address=i}})},handleSubmit:function(a){var n=this.locationObj,e=n.userName,i=n.contact,o=n.name,s=n.address,c=""===e||""===i||""===o||""===s;c?uni.showToast({icon:"none",title:"请填写完整"}):!0===this.addOrEdit?(t.log("新增"),this.locationObj=a.detail.value,t.log(this.locationObj),this.addAddress(this.locationObj),this.$refs.uToast.show({type:"success",message:"添加成功"}),uni.navigateBack({delta:1})):uni.showToast({icon:"none",title:"修改失败"})},handleReset:function(){Object.assign(this.locationObj,this.locationObjs),uni.showToast({icon:"none",title:"重置成功"})}})};a.default=s}).call(this,n("5a52")["default"])},"522e":function(t,a,n){"use strict";n.r(a);var e=n("403e"),i=n.n(e);for(var o in e)["default"].indexOf(o)<0&&function(t){n.d(a,t,(function(){return e[t]}))}(o);a["default"]=i.a},"906f":function(t,a,n){var e=n("3c7a");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=n("4f06").default;i("2dd608e8",e,!0,{sourceMap:!1,shadowMode:!1})},"9cac":function(t,a,n){"use strict";var e=n("906f"),i=n.n(e);i.a},d29f:function(t,a,n){"use strict";n.d(a,"b",(function(){return i})),n.d(a,"c",(function(){return o})),n.d(a,"a",(function(){return e}));var e={uToast:n("2d3c").default},i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",[n("navCustom",{attrs:{back:!0}}),n("v-uni-map",{staticClass:"my-map"}),n("v-uni-form",{on:{submit:function(a){arguments[0]=a=t.$handleEvent(a),t.handleSubmit.apply(void 0,arguments)},reset:function(a){arguments[0]=a=t.$handleEvent(a),t.handleReset.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"cu-form-group margin-top"},[n("v-uni-view",{staticClass:"title"},[n("v-uni-text",{staticClass:"cuIcon-peoplefill"})],1),n("v-uni-input",{staticClass:"fs-28",attrs:{placeholder:"姓名",type:"nickname",name:"userName"},model:{value:t.locationObj.userName,callback:function(a){t.$set(t.locationObj,"userName",a)},expression:"locationObj.userName"}})],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[n("v-uni-text",{staticClass:"cuIcon-mobilefill"})],1),n("v-uni-input",{staticClass:"fs-28",attrs:{placeholder:"联系方式",type:"number",name:"contact"},model:{value:t.locationObj.contact,callback:function(a){t.$set(t.locationObj,"contact",a)},expression:"locationObj.contact"}}),n("v-uni-view",{staticClass:"cu-capsule radius"},[n("v-uni-view",{staticClass:"cu-tag  "},[t._v("+86")]),n("v-uni-view",{staticClass:"cu-tag "},[t._v("中国大陆")])],1)],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[t._v("城市")]),n("v-uni-input",{staticClass:"fs-28",attrs:{placeholder:"地址",name:"name"},model:{value:t.locationObj.name,callback:function(a){t.$set(t.locationObj,"name",a)},expression:"locationObj.name"}}),n("v-uni-view",{staticClass:"flex align-center",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.handleLocation.apply(void 0,arguments)}}},[n("v-uni-view",[n("v-uni-text",{staticClass:"color-zise "},[t._v("定位")])],1),n("v-uni-view",[n("v-uni-text",{staticClass:"cuIcon-locationfill 60"})],1)],1)],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[t._v("详细地址")]),n("v-uni-input",{staticClass:"fs-28",attrs:{placeholder:"详细地址",name:"address"},model:{value:t.locationObj.address,callback:function(a){t.$set(t.locationObj,"address",a)},expression:"locationObj.address"}})],1),n("v-uni-view",{staticClass:"flex justify-between padding-sm"},[n("v-uni-button",{staticClass:"btn1 cu-btn bg-kaqise lg",attrs:{"form-type":"reset",type:"default"}},[t._v("重置")]),n("v-uni-button",{staticClass:"btn2 cu-btn bg-zise color-fff lg",attrs:{"form-type":"submit",type:"default"}},[t._v(t._s(!0===t.addOrEdit?"新增":"修改"))])],1)],1),n("u-toast",{ref:"uToast"})],1)},o=[]},f7c0:function(t,a,n){"use strict";n.r(a);var e=n("d29f"),i=n("522e");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(a,t,(function(){return i[t]}))}(o);n("9cac");var s=n("f0c5"),c=Object(s["a"])(i["default"],e["b"],e["c"],!1,null,"ecb79976",null,!1,e["a"],void 0);a["default"]=c.exports}}]);