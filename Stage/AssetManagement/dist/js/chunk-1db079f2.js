(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1db079f2"],{2043:function(t,e,a){var s=a("24fb");e=s(!1),e.push([t.i,".vue-treeselect__control{border:none;height:24px;padding:0}.vue-treeselect--searchable .vue-treeselect__input-container{padding:0!important}.vue-treeselect__placeholder{color:#303030!important}.vue-treeselect__control-arrow{color:#000}.vue-treeselect__placeholder{line-height:24px}",""]),t.exports=e},"80ba":function(t,e,a){var s=a("2043");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var i=a("499e").default;i("a99cce06",s,!0,{sourceMap:!1,shadowMode:!1})},"8fc4":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("section",{staticClass:"main-content"},[e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 padding-t_8"},[e("div",{staticClass:"theme-primary partition-full"},[e("span",{staticClass:"p-name text-white"},[t._v(t._s(t.$t("AddProductContainerList")))]),e("span",{staticClass:"p-actions float-right"},[e("RouterLink",{staticClass:"p-action-btn text-white float-right px-2 w-100",attrs:{to:"/Asset/AssetGrouping"}},[e("em",{staticClass:"fa fa-angle-double-left"}),e("br"),t._v(t._s(t.$t("BacktoList"))+" ")])],1)])])])]),e("div",{staticClass:"border p-3"},[e("div",{staticClass:"col-md-12 p-0",attrs:{id:"dynmicForm"}},[e("Form",{ref:"AssetAddGroupform",scopedSlots:t._u([{key:"default",fn:function({values:a,meta:s}){return[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"form-group"},[e("label",[t._v(t._s(t.$t("ConsumableItemType")))]),e("Field",{attrs:{name:t.$t("ConsumableItemType"),rules:{required:!0},label:"Select Product Type"},scopedSlots:t._u([{key:"default",fn:function({errors:a}){return[e("select",{directives:[{name:"model",rawName:"v-model",value:t.AssetTypeId,expression:"AssetTypeId"}],class:{"form-control":!0,"is-invalid":a[0]},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.AssetTypeId=e.target.multiple?a:a[0]},function(e){return t.GetCompanyAssestCatalogs()}]}},[e("option",{attrs:{value:"null"}},[t._v(t._s(t.$t("Select")))]),t._l(t.ProductTypelist,(function(a){return e("option",{key:a.ASSETTYPE,domProps:{value:a.ASSETID}},[t._v(" "+t._s(a.ASSETTYPE))])}))],2),a[0]?e("span",{staticClass:"invalid-feedback d-block",attrs:{name:t.$t("ConsumableItemType")}},[t._v(t._s(a[0]))]):t._e()]}}],null,!0)})],1)]),e("div",{staticClass:"col-lg-4"},[e("label",[t._v(t._s(t.$t("Location"))),e("span",{staticClass:"text-danger"},[t._v("*")])]),e("Field",{attrs:{name:t.$t("Location"),rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function({errors:a}){return[e("tree-view",{class:{"form-control":!0,"is-invalid":a[0]},attrs:{options:t.options,placeholder:"Select Location","show-count":!0},on:{input:function(e){return t.GetCompanyAssestCatalogs(t.LocationId,t.AssetTypeId)}},model:{value:t.LocationId,callback:function(e){t.LocationId=e},expression:"LocationId"}}),a[0]?e("span",{staticClass:"invalid-feedback d-block",attrs:{name:t.$t("Location")}},[t._v(t._s(a[0]))]):t._e()]}}],null,!0)})],1),e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"form-group"},[e("label",{},[t._v(t._s(t.$t("SelectContainer")))]),t._v(":"),e("span",{staticClass:"mandatory"},[t._v("*")]),e("Field",{attrs:{name:t.$t("SelectContainer"),rules:{required:!0},label:"Select Container"},scopedSlots:t._u([{key:"default",fn:function({errors:a}){return[e("select",{directives:[{name:"model",rawName:"v-model",value:t.ContainerId,expression:"ContainerId"}],class:{"form-control":!0,"is-invalid":a[0]},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.ContainerId=e.target.multiple?a:a[0]}}},[e("option",{attrs:{value:"null"}},[t._v(t._s(t.$t("Select")))]),t._l(t.ContainerData,(function(a){return e("option",{key:a.value,domProps:{value:a.Value}},[t._v(" "+t._s(a.Text))])}))],2),a[0]?e("span",{staticClass:"invalid-feedback d-block",attrs:{name:t.$t("SelectContainer")}},[t._v(t._s(a[0]))]):t._e()]}}],null,!0)})],1)]),e("div",{staticClass:"listing px-3"},[e("div",{staticClass:"table-responsive catalog_Row_MainBox",staticStyle:{"min-height":"auto"}},[e("table",{staticClass:"table table-bordered dt-responsive nowrap mt-0",staticStyle:{width:"100%"},attrs:{id:"tbContainer"}},[e("thead",{staticClass:"thead-bg"},[e("tr",[e("th",{staticClass:"ui-resizable",staticStyle:{width:"168px","min-width":"168px","max-width":"168px"},attrs:{id:"th-PRODUCTNAME"}},[e("span",{staticStyle:{"min-width":"150px"},attrs:{href:"javascript:;"}},[t._v(" "+t._s(t.$t("AssetId"))+":"),e("span",{staticClass:"mandatory d-inline-block"},[t._v("*")])]),e("div",{staticClass:"sizer",attrs:{id:"th-PRODUCTNAME-sizer"}}),e("div",{staticClass:"ui-resizable-handle ui-resizable-e",staticStyle:{"z-index":"90"}})]),e("th",{staticClass:"ui-resizable",staticStyle:{width:"156px","min-width":"156px","max-width":"156px"},attrs:{id:"th-COMPARTMENT"}},[e("span",{staticStyle:{"min-width":"138px"},attrs:{href:"javascript:;"}},[t._v(t._s(t.$t("Compartment"))+":"),e("span",{staticClass:"mandatory d-inline-block"},[t._v("*")])]),e("div",{staticClass:"sizer",attrs:{id:"th-COMPARTMENT-sizer"}}),e("div",{staticClass:"ui-resizable-handle ui-resizable-e",staticStyle:{"z-index":"90"}})])])]),e("tbody",t._l(t.NewDynamicField,(function(a,s){return e("tr",{key:a.Compartment},[e("td",{staticClass:"overflow-visible"},[e("Field",{attrs:{name:"ProductName"+(s+1),rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function({errors:i}){return[e("select",{directives:[{name:"model",rawName:"v-model",value:a.ProductName,expression:"item.ProductName"}],class:{"form-control tdcm ddlCompartmentId":!0,"is-invalid":i[0]},attrs:{name:"ProductName"+(s+1)},on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(a,"ProductName",e.target.multiple?s:s[0])},function(e){return t.CheckProductType(e,s,a)}]}},[e("option",{attrs:{value:"null"}},[t._v(t._s(t.$t("Select")))]),t._l(t.ItemNamelist,(function(a,s){return e("option",{key:s,domProps:{value:a.ASSET_CATALOGUE_ID}},[t._v(" "+t._s(a.NAME))])}))],2),i[0]?e("span",{staticClass:"invalid-feedback d-block",attrs:{name:"ProductName"+(s+1)}},[t._v(t._s(i[0]))]):t._e()]}}],null,!0)})],1),e("td",{staticClass:"overflow-visible"},[e("Field",{attrs:{name:"Compartment"+(s+1),rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function({errors:i}){return[e("div",{staticClass:"input-group"},[e("select",{directives:[{name:"model",rawName:"v-model",value:a.Compartment,expression:"item.Compartment"}],class:{"form-control tdcm ddlCompartmentId":!0,"is-invalid":i[0]},attrs:{name:"Compartment"+(s+1)},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(a,"Compartment",e.target.multiple?s:s[0])}}},[e("option",{attrs:{value:"null"}},[t._v(t._s(t.$t("Select")))]),t._l(t.CompartmentData,(function(a,s){return e("option",{key:s,domProps:{value:a.Value}},[t._v(" "+t._s(a.Text))])}))],2),e("span",{staticClass:"input-group-text border-0 bg-transparent p-0 pl-2"},[0==parseInt(s)?e("a",{staticClass:"plupload_button plupload_add add_asset_group_item_box round-icon-small btn-success-light",attrs:{href:"javascript:;",title:"","data-original-title":"Add New Row"},on:{click:t.addRow}},[e("i",{staticClass:"fa fa-plus pt-7 font-18"})]):t._e(),0!=parseInt(s)?e("a",{staticClass:"round-icon-small btn-danger-light delete_asset_group_item_box float-left",attrs:{href:"javascript:;",title:"",checkprivilege:"yes","data-groupid":"0","data-toggle-tooltip":"tooltip","data-original-title":"Delete"},on:{click:function(e){return t.deleteRow(a)}}},[e("i",{staticClass:"fa fa-trash"})]):t._e()]),i[0]?e("span",{staticClass:"invalid-feedback d-block",attrs:{name:"Compartment"+(s+1)}},[t._v(t._s(i[0]))]):t._e()])]}}],null,!0)})],1)])})),0)]),e("div")])])]),e("div",{staticClass:"row flex-row-reverse my-3"},[e("div",{staticClass:"col-lg-6 text-right"},[t.IsVisibleSave?e("button",{staticClass:"btn btn-success text-white mr-2",on:{click:function(e){return t.Save(a,s)}}},[e("em",{staticClass:"fa fa-save pr-2"}),t._v(t._s(t.$t("Save")))]):t._e(),e("a",{staticClass:"btn btn-danger",attrs:{href:"javascript:;",title:"","data-toggle-tooltip":"tooltip","data-original-title":"Cancel"},on:{click:t.CancelButton}},[e("em",{staticClass:"fa fa-close pr-2"}),t._v(t._s(t.$t("Cancel")))])]),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"py-2"},[e("span",{staticClass:"mandatory"},[t._v(t._s(t.$t("MandatoryString")))])])])])]}}])})],1)])])},i=[],n=(a("14d9"),a("1115")),o=a("ca17"),l=a.n(o),r=(a("542c"),{components:{"tree-view":l.a},data(){return{AssetTypeId:null,LocationId:null,ContainerName:"",ContainerId:null,AssetGroupId:0,ChildRelatedInfoId:null,AssetCatalogQuantity:null,CompartmentId:0,AssetCategoryId:0,AssetCategoryName:null,ProductTypelist:[],ItemNamelist:[],LocationData:[],ContainerData:[],CompartmentData:[],NewDynamicField:[{Compartment:"",ProductName:""}],AssetsGroupItemsList:[],options:[],IsVisibleSave:!0,isLoading:!1}},async created(){await this.GetProductTypeDropdown(),await this.GetLocationByCompanyId()},methods:{async GetProductTypeDropdown(){var t=this,e="type=ITEMCODE&issueTo=&locationId=";n["a"].GetAssetTypeCustom(e).then(e=>{t.ProductTypelist=JSON.parse(e.data)})},async GetLocationByCompanyId(){var t=this,e="reqForm=";await n["a"].GetLocationByCompanyId(e).then((function(e){t.FindalLocationArray=[],t.LocationDataTree=JSON.parse(e.data).data,t.LocationDataTree.forEach(a=>{var s=t.FindalLocationArray.filter((function(t){return t.COMPANY_LOCATION_ID==a.COMPANY_LOCATION_ID}));if(0==s.length&&null==a.PARENT_LOCATION_ID){let s=a.COMPANY_LOCATION_ID,i=t.getChildLocation(s,a,JSON.parse(e.data).data);t.FindalLocationArray.push(i)}}),t.options=t.FindalLocationArray}))},getChildLocation:function(t,e,a){let s=this,i={};i={id:e.COMPANY_LOCATION_ID,label:e.LOCATION_NAME};let n=i;var o=a.filter((function(e){return e.PARENT_LOCATION_ID==t}));let l=[];return o.forEach(t=>{let e=t.COMPANY_LOCATION_ID;var n=l.filter((function(e){return e.COMPANY_LOCATION_ID==t.COMPANY_LOCATION_ID}));if(0==n.length){var o=a.filter((function(t){return t.PARENT_LOCATION_ID==e}));if(null!=o&&o.length>0){let i=s.getChildLocation(e,t,a);l.push(i)}else i={id:""+t.COMPANY_LOCATION_ID,label:""+t.LOCATION_NAME},l.push(i)}}),n.children=l,n},async GetCompanyAssestCatalogs(t,e){var a=this;if(a.isLoading=!0,null!=a.AssetTypeId&&a.GetCompartmentName(a.AssetTypeId),null!=a.LocationId&&null!=a.LocationId&&a.GetItemNamesLocationwise(a.LocationId),null!=a.LocationId&&null!=a.AssetTypeId&&null!=a.LocationId){var s=`asset_type_id=${a.AssetTypeId}&related_info_id=&location_id=${a.LocationId}`;n["a"].GetCompanyAssestCatalogsDDL(s).then((function(t){a.ContainerData=t.data.Result}))}a.isLoading=!1},GetItemNamesLocationwise(t){var e=this;e.ItemNamelist=[];let a=`id=${e.AssetTypeId}&issueTo=0&locationId=${t}&requestFrom=`;n["a"].GetCompanyAssestCatalogs(a).then(t=>{e.ItemNamelist=t.data})},GetCompartmentName(t){var e=this,a="asset_type_id="+t;n["a"].GetCompartmentName(a).then(t=>{e.CompartmentData=t.data.Result})},Save(t,e){var a=this;a.isLoading=!0;var s="",i=[];a.$refs.AssetAddGroupform.validate().then(t=>{if(t){s=a.ContainerData.find(t=>t.Value==a.ContainerId),a.ContainerName=s.Text,a.NewDynamicField.forEach(t=>{i.push({AssetGroupId:0,ChildRelatedInfoId:t.ProductName,AssetCatalogQuantity:0,CompartmentId:t.Compartment,AssetCategoryId:t.ProductName,AssetCategoryName:null})});var e={AssetTypeId:a.AssetTypeId,LocationId:a.LocationId,ParentRelatedInfoId:a.ContainerId,AssetContainerName:a.ContainerName,StatusId:0,CreatedAt:null,ModifiedAt:null,CreatedBy:0,ModifiedBy:0,CompartmentId:0,IsUsed:null,ContainerList:null,ItemList:null,AssetsGroupItemsList:i};n["a"].AddAssetGrouping(e).then(t=>{0==t.data.status?(a.ShowAlert(a.$t("AddedSuccess",[a.$t("Product_Container")]),"success",!0,a.$t("Alert")),a.CancelButton()):a.IsVisibleSave=!1,a.isLoading=!1})}})},addRow(){var t=this;t.$refs.AssetAddGroupform.validate().then(t=>{if(t){var e=this;let t={ProductName:0,Compartment:0};return e.NewDynamicField.push(t),!0}})},deleteRow(t){var e=this;e.confirmR(e.$t("Please verify that you want to delete this record?"),!0,!1,(function(a){return e.NewDynamicField.splice(t,1),!0}))},CancelButton(){this.$router.push({name:"AssetGrouping"})},CheckProductType:function(t){}}}),d=r,c=(a("f343"),a("2877")),u=Object(c["a"])(d,s,i,!1,null,null,null);e["default"]=u.exports},f343:function(t,e,a){"use strict";a("80ba")}}]);
//# sourceMappingURL=chunk-1db079f2.js.map