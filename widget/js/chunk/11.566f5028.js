webpackJsonp([11],{zSLM:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("Dd8w"),a=s.n(i),n=s("hcWN"),r=s("z8Jy"),l=s("NYxO"),o={data:function(){return{region:[],settingForm:{nick_name:"",avatar:"111111",mobile:"",name:"",region_id:"",email:"",memberClass:"1",gender:"1",qq:"",wechat:"",wangwang:"",adrress:[],postcode:"",birthdate:"2017-10-23"},show:!0}},methods:{handleChange:function(){},getinfo:function(){a()(this.settingForm,this.profile)},subform:function(){var e=this;this.settingForm.region_id=this.$refs.cas.regionid[2],this.settingForm.birthdate=Object(r.d)(this.settingForm.birthdate),this.$http("/profile",this.settingForm,"put").then(function(t){t.success&&(e.$message({message:"资料保存成功",type:"success"}),e.getinfo())}).catch(function(e){})},confirmform:function(){console.log(this.$refs.cas.regionid,"iiiiii")}},mounted:function(){this.getinfo()},components:{cas:n.default},computed:a()({},Object(l.mapGetters)(["profile"])),watch:{profile:function(e){this.getinfo()}}},m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.show?s("div",{staticClass:"basic-h"},[s("el-form",{attrs:{"label-width":"105px"}},[s("el-form-item",{attrs:{label:"当前头像:"}},[s("span",{staticClass:"avatar"},[s("img",{attrs:{src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=8232468,2916696848&fm=27&gp=0.jpg"}}),e._v(" "),s("a",{staticClass:"edit-a",attrs:{href:"#"}},[e._v("编辑头像")])])]),e._v(" "),s("el-form-item",{attrs:{label:"已绑定手机:"}},[s("span",[e._v("153***2517")])]),e._v(" "),s("el-form-item",{attrs:{label:"用户名:"}},[s("el-input",{staticStyle:{width:"230px"},attrs:{size:"mini"},model:{value:e.settingForm.nick_name,callback:function(t){e.$set(e.settingForm,"nick_name",t)},expression:"settingForm.nick_name"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"姓名:"}},[s("el-input",{staticStyle:{width:"230px"},attrs:{size:"mini"},model:{value:e.settingForm.name,callback:function(t){e.$set(e.settingForm,"name",t)},expression:"settingForm.name"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"性别:"}},[s("el-radio-group",{model:{value:e.settingForm.gender,callback:function(t){e.$set(e.settingForm,"gender",t)},expression:"settingForm.gender"}},[s("el-radio",{attrs:{label:"protected"}},[e._v("保密")]),e._v(" "),s("el-radio",{attrs:{label:"female"}},[e._v("先生")]),e._v(" "),s("el-radio",{attrs:{label:"male"}},[e._v("小姐")])],1)],1),e._v(" "),s("el-form-item",{attrs:{label:"会员身份:"}},[s("el-radio",{attrs:{label:"1"},model:{value:e.settingForm.memberClass,callback:function(t){e.$set(e.settingForm,"memberClass",t)},expression:"settingForm.memberClass"}},[e._v("个人")]),e._v(" "),s("el-radio",{attrs:{label:"2"},model:{value:e.settingForm.memberClass,callback:function(t){e.$set(e.settingForm,"memberClass",t)},expression:"settingForm.memberClass"}},[e._v("个体经营")]),e._v(" "),s("el-radio",{attrs:{label:"3"},model:{value:e.settingForm.memberClass,callback:function(t){e.$set(e.settingForm,"memberClass",t)},expression:"settingForm.memberClass"}},[e._v("企业单位")])],1),e._v(" "),s("el-form-item",{attrs:{label:"所在地区:"}},[s("cas",{ref:"cas",attrs:{regionid:e.region}})],1),e._v(" "),s("div",{staticClass:"basic-hd-i"},[e._v("\n      联系方式\n    ")]),e._v(" "),s("div",{staticClass:"form-span"},[s("el-form-item",{attrs:{label:"邮箱 :"}},[s("el-input",{attrs:{size:"mini"},model:{value:e.settingForm.email,callback:function(t){e.$set(e.settingForm,"email",t)},expression:"settingForm.email"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"QQ :"}},[s("el-input",{attrs:{size:"mini"},model:{value:e.settingForm.qq,callback:function(t){e.$set(e.settingForm,"qq",t)},expression:"settingForm.qq"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"微信:"}},[s("el-input",{attrs:{size:"mini"},model:{value:e.settingForm.wechat,callback:function(t){e.$set(e.settingForm,"wechat",t)},expression:"settingForm.wechat"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"阿里旺旺:"}},[s("el-input",{attrs:{size:"mini"},model:{value:e.settingForm.wangwang,callback:function(t){e.$set(e.settingForm,"wangwang",t)},expression:"settingForm.wangwang"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"邮编:"}},[s("el-input",{attrs:{size:"mini"},model:{value:e.settingForm.postcode,callback:function(t){e.$set(e.settingForm,"postcode",t)},expression:"settingForm.postcode"}})],1),e._v(" "),s("el-form-item",[s("a",{staticClass:"save",attrs:{href:""},on:{click:function(t){t.preventDefault(),e.subform(t)}}},[e._v("保存")])])],1)],1)],1):e._e()},c=[],g={render:m,staticRenderFns:c},f=g,u=s("VU/8"),d=u(o,f,!1,null,null,null);t.default=d.exports}});