(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-collect-data-collect-data"],{"59eb":function(t,e,n){"use strict";n.r(e);var a=n("87ce"),c=n.n(a);for(var d in a)["default"].indexOf(d)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(d);e["default"]=c.a},"74b8":function(t,e,n){"use strict";n.r(e);var a=n("e50d"),c=n("59eb");for(var d in c)["default"].indexOf(d)<0&&function(t){n.d(e,t,(function(){return c[t]}))}(d);var o=n("f0c5"),u=Object(o["a"])(c["default"],a["b"],a["c"],!1,null,"9df23e38",null,!1,a["a"],void 0);e["default"]=u.exports},"87ce":function(t,e,n){"use strict";(function(t){n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("d3b7"),n("159b"),n("14d9");var a={data:function(){return{}},methods:{handleCfy:function(){var e=this;uni.request({url:"https://h5.mcake.com/api/5e90690f0e270d04?cityId=110",method:"GET",header:{"access-token":"bb15f4da64bd6c650de80b0125ad411b",version:"v1.0"},success:function(n){t.log(n);var a=n.data.data,c={requests:[]};a.forEach((function(t){c.requests.push({method:"POST",path:"/1.1/classes/classify",body:t})})),e.$post("/1.1/batch",c)}})},handleGoods:function(){var e=this;uni.request({url:"https://h5.mcake.com/api/0434b49d1ac28f9d?cityId=110&page=2&bid=6",method:"GET",header:{"access-token":"cea1733a84af6414e3a5c20d5832ed88",version:"v1.0"},success:function(n){t.log(n);var a=n.data.data.list,c={requests:[]};a.forEach((function(t){c.requests.push({method:"POST",path:"/1.1/classes/goods",body:t})})),e.$post("/1.1/batch",c)}})}}};e.default=a}).call(this,n("5a52")["default"])},e50d:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-button",{attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleCfy.apply(void 0,arguments)}}},[t._v("转录分类")]),n("v-uni-button",{attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleGoods.apply(void 0,arguments)}}},[t._v("转录商品")])],1)},c=[]}}]);