webpackJsonp([7],{G21A:function(e,t){},NJPM:function(e,t,r){"use strict";function s(e){return e<10?"0"+e:e}function a(e,t){var r=1*e+"",s=r.split(".");return 1===s.length?r+".00":1===s[1].length?r+"0":r}function i(e,t){var r=e;return r>0&&r<.01?.01:r<t&&h.a.minus(t,r)<.01?.01:a(h.a.round(r,2))}function n(e){r("G21A")}Object.defineProperty(t,"__esModule",{value:!0});var o=r("fZjL"),u=r.n(o),c=r("Gu7T"),l=r.n(c),d=r("lHA8"),p=r.n(d),_=r("c/Tr"),g=r.n(_),v=r("8iU3"),f=r("CcEE"),m=r("I3G/"),b=r.n(m),k=r("Fx/R"),h=r.n(k);b.a.filter("format",function(e){if(e){var t=new Date(e);return t.getFullYear()+"-"+s(t.getMonth()+1)+"-"+s(t.getDate())+" "+s(t.getHours())+":"+s(t.getMinutes())+":"+s(t.getSeconds())}}),b.a.filter("accuracy",function(e,t){var r=e;return r>0&&r<.01?.01:r<t&&h.a.minus(t,r)<.01?.01:a(h.a.round(r,2))}),b.a.filter("formatprice",function(e,t,r,s,a){e=e||0,t=isNaN(t=Math.abs(t))?2:t,r=void 0!==r?r:"$",s=s||",",a=a||".";var i=e<0?"-":"",n=parseInt(e=Math.abs(+e||0).toFixed(t),10)+"",o=(o=n.length)>3?o%3:0;return r+i+(o?n.substr(0,o)+s:"")+n.substr(o).replace(/(\d{3})(?=\d)/g,"$1"+s)+(t?a+Math.abs(e-n).toFixed(t).slice(2):"")}),b.a.filter("price",function(e){return/^\d+(\.\d+)?$/.test(e)?"￥"+a(h.a.round(e,2)):"N/A"}),b.a.filter("status",function(e,t){return t?"disabled"===e?"已停售":"enabled"===e?"销售中":"未知":"待定价"});var y={data:function(){return{remark:"",price:"",buckle:"",show:!1,loading:!1,list:[],title:[],form:{skus:[]}}},props:["id"],methods:{getdata:function(){var e=this;this.loading=!0;var t=this;Object(v.i)(this.id).then(function(r){e.form.skus=r.data,t.form.skus.forEach(function(e){e.comb=t.opProps(e,e.sale_props,e.sale_props_str),t.$set(e,"suggested_status",!0),t.$set(e,"brokerage_status",!0),e.oldPrice=e.suggested_price,e.oldbrokerage_rate=e.brokerage_rate}),e.title=g()(new p.a(e.title)).sort(function(e,t){return"颜色"===e?0:1}),e.loading=!1,console.log(e.title,e.form)}).catch(function(t){e.$message.error(t),e.loading=!1})},opProps:function(e){for(var t=this,r=[],s=arguments.length,a=Array(s>1?s-1:0),i=1;i<s;i++)a[i-1]=arguments[i];var n=f.c.apply(void 0,l()(a)),o=n.props,c=n.props_str;return u()(o).forEach(function(e){t.title.push(c[e]),r.push({name:c[e],value:c[o[e]]})}),r.sort(function(e,t){return"颜色"===e?0:1})},look:function(){console.log(this.form.skus)},modifyBlur:function(e,t){e[t]=!0},opPrice:function(e,t){return i(t*e/100)},mutilOP:function(){var e=this;if(this.validate(this.price)||this.validate(this.buckle)){if(this.form.skus.length<1)return void this.$notify({title:"警告",message:"没有商品的任何sku",type:"warning"});this.form.skus.forEach(function(t){e.validate(e.price)&&e.validate(e.buckle)?(t.suggested_price=e.price,t.brokerage_rate=e.buckle):e.validate(e.price)?t.suggested_price=e.price:t.brokerage_rate=e.buckle})}},validate:function(e){return!!/^\d+(\.\d+)?$/.test(e)},beforsub:function(){var e=this;if(!this.remark)return void alert("请填写调整说明");var t={remark:this.remark,skus:[]};this.form.skus.forEach(function(r){t.skus.push({id:r.id,suggested_price:r.suggested_price,brokerage_rate:r.brokerage_rate,brokerage:e.opPrice(r.brokerage_rate,r.suggested_price)})}),this.sub(t)},sub:function(e){var t=this;Object(v.o)(e).then(function(e){t.show=!1,t.$emit("ok")}).catch(function(e){t.$message.error(e)})}},watch:{show:function(e,t){e!==t&&e&&this.getdata()}}},w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"adjustprice"},[r("el-dialog",{attrs:{title:"调整价格",visible:e.show},on:{"update:visible":function(t){e.show=t}}},[r("div",{staticClass:"descr"},[r("div",{staticClass:"descr-part"},[r("el-row",{attrs:{gutter:10}},[r("el-col",{attrs:{span:2}},[r("span",{staticClass:"nobreak"},[e._v("\n              调整说明:\n            ")])]),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-input",{attrs:{type:"textarea",placeholder:"请说明调价原因"},model:{value:e.remark,callback:function(t){e.remark=t},expression:"remark"}})],1)],1)],1),e._v(" "),r("div",{staticClass:"descr-part"},[r("el-row",[r("el-col",{attrs:{span:2}},[r("span",{staticClass:"nobreak"},[e._v("\n              批量设置:\n            ")])]),e._v(" "),r("el-col",{attrs:{span:15}},[r("div",{staticClass:"el-input el-input--mini"},[r("input",{directives:[{name:"number",rawName:"v-number",value:e.price,expression:"price"},{name:"model",rawName:"v-model",value:e.price,expression:"price"}],staticClass:"el-input__inner",attrs:{type:"text",size:"mini",placeholder:"价格",name:"",id:""},domProps:{value:e.price},on:{input:function(t){t.target.composing||(e.price=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"el-input el-input--mini"},[r("input",{directives:[{name:"number",rawName:"v-number",value:e.buckle,expression:"buckle"},{name:"model",rawName:"v-model",value:e.buckle,expression:"buckle"}],staticClass:"el-input__inner",attrs:{type:"text",size:"mini",placeholder:"扣点",name:"",id:""},domProps:{value:e.buckle},on:{input:function(t){t.target.composing||(e.buckle=t.target.value)}}})]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"mini",plain:""},on:{click:e.mutilOP}},[e._v("确定")])],1)],1)],1),e._v(" "),r("div",{staticClass:"desc-con"},[r("table",{attrs:{id:"desc-tab"}},[r("thead",[r("tr",[r("th",[e._v("款式图")]),e._v(" "),e._l(e.title,function(t,s){return r("th",{key:s},[e._v(e._s(t))])}),e._v(" "),r("th",[e._v("状态")]),e._v(" "),r("th",[e._v("售价")]),e._v(" "),r("th",[e._v("扣点(%)")]),e._v(" "),r("th",[e._v("费用")])],2)]),e._v(" "),r("tbody",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},e._l(e.form.skus,function(t,s){return r("tr",{key:s},[r("td",[r("hmt-img",{attrs:{src:t.thumb}})],1),e._v(" "),e._l(t.comb,function(t,s){return r("td",{key:s},[e._v("\n                "+e._s(t.value)+"\n              ")])}),e._v(" "),r("td",[e._v(e._s(e._f("status")(t.status,t.is_set_price)))]),e._v(" "),r("td",{staticClass:"modify-span"},[t.suggested_status?[r("span",{on:{dblclick:function(e){t.suggested_status=!1}}},[t.oldPrice!=t.suggested_price?r("em",[e._v(e._s(e._f("price")(t.oldPrice)))]):e._e(),e._v("\n                    "+e._s(e._f("price")(t.suggested_price))+"\n                  ")])]:[r("el-input",{attrs:{size:"mini",placeholder:""},on:{blur:function(r){e.modifyBlur(t,"suggested_status")}},model:{value:t.suggested_price,callback:function(r){e.$set(t,"suggested_price",r)},expression:"n.suggested_price"}})]],2),e._v(" "),r("td",{staticClass:"modify-span",staticStyle:{width:"133px"}},[t.brokerage_status?[r("span",{on:{dblclick:function(e){t.brokerage_status=!1}}},[t.oldbrokerage_rate!=t.brokerage_rate?r("em",[e._v(e._s(t.oldbrokerage_rate))]):e._e(),e._v("\n                    "+e._s(t.brokerage_rate)+"\n                  ")])]:[r("el-input",{attrs:{size:"mini",placeholder:""},on:{blur:function(r){e.modifyBlur(t,"brokerage_status")}},model:{value:t.brokerage_rate,callback:function(r){e.$set(t,"brokerage_rate",r)},expression:"n.brokerage_rate"}})]],2),e._v(" "),r("td",{staticClass:"modify-span",staticStyle:{"text-align":"right","padding-right":"6px"}},[t.brokerage!=e.opPrice(t.brokerage_rate,t.suggested_price)?r("em",{attrs:{"data-bind":e.opPrice(t.brokerage_rate,t.suggested_price)}},[e._v(e._s(e._f("price")(t.brokerage)))]):e._e(),e._v("\n                ￥"+e._s(e._f("accuracy")(t.suggested_price*t.brokerage_rate/100,t.suggested_price))+"\n              ")])],2)}))])])]),e._v(" "),r("div",{staticClass:"footer-dialog",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:""},on:{click:function(t){e.show=!1}}},[e._v("取消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.beforsub}},[e._v("确定")])],1)])],1)},x=[],C={render:w,staticRenderFns:x},P=C,$=r("VU/8"),N=n,E=$(y,P,!1,N,null,null);t.default=E.exports}});