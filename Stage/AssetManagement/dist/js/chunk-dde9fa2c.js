(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dde9fa2c"],{"1ec1":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("section",[e("loader",{attrs:{"is-visible":t.isLoading}}),e("div",{staticClass:"comapny-setup col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left border px-0 pb-2"},[e("Form",{ref:"writeOff",scopedSlots:t._u([{key:"default",fn:function({values:a,meta:s}){return[e("input",{attrs:{type:"hidden"}}),e("div",{staticClass:"tab-content fsmtabcontrolMobileView",attrs:{id:"myTabContent"}},[e("div",{staticClass:"tab-pane call-detail show active border-0 p-0",attrs:{id:"tabs-1",role:"tabpanel","aria-labelledby":"CreateProduct-tab"}},[e("div",{staticClass:"theme-primary partition-full"},[e("span",{staticClass:"p-name text-white"},[t._v(" Add Product Write-Off ")])]),e("div",{staticClass:"container-fluid border pt-2 mb-2"},[e("div",{staticClass:"col-lg-12 mt-3 p-0"},[e("div",{staticClass:"heading-border mb-2"},[e("h5",{staticClass:"h5"},[e("span",{attrs:{id:"TabHeading1"}},[t._v(t._s(t.$t("Search")))])])])])])])]),e("div",{staticClass:"form--group mt-1"},[e("div",{staticClass:"custom-control p-0 custom-radio mr-4 custom-control-inline"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.Case,expression:"Case"}],staticClass:"m-2",attrs:{type:"radio",name:"IsDocs",value:"0"},domProps:{checked:t._q(t.Case,"0")},on:{change:[function(e){t.Case="0"},function(e){return t.TextfiledType(0)}]}}),t._v("Search By Product Type ")]),e("div",{staticClass:"custom-control p-0 custom-radio mr-4 custom-control-inline"},[t._v(" Or ")]),e("div",{staticClass:"custom-contol p-0 custom-radio mr-4 custom-control-inline"},[e("input",{staticClass:"m-2",attrs:{type:"radio",name:"IsDocs",value:"1"},on:{change:function(e){return t.TextfiledType(1)}}}),t._v(" Search by Barcode/Serial Number/RFID ")])]),e("div",{staticClass:"row mt-2"},[e("div",{staticClass:"col-12 d-flex align-items-center",attrs:{id:"itemsearch"}},[t.ProductType?e("div",{staticClass:"col-sm-12 col-md-6 col-lg-3 col-xl-2 float-left location"},[e("div",{staticClass:"form-group"},[e("label",[t._v("Location:"),e("span",{staticClass:"text-danger"},[t._v("*")])]),e("Field",{staticClass:"w-100",attrs:{name:"Location",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function({errors:a}){return[e("tree-view",{class:{"form-control":!0,"is-invalid":a[0]},attrs:{options:t.options,placeholder:"Select Location"},on:{input:function(e){return t.BindItemTypeByUserId(t.txtLocation)}},model:{value:t.txtLocation,callback:function(e){t.txtLocation=e},expression:"txtLocation"}}),a[0]?e("span",{staticClass:"invalid-feedback d-block",attrs:{name:"Location"}},[t._v(t._s(t.GetLocalizedValue(t.$t("LocationRequired")))+" ")]):t._e()]}}],null,!0)})],1)]):t._e(),t.ProductType?e("div",{staticClass:"col-sm-12 col-md-6 col-lg-3 col-xl-2 float-left location"},[e("div",{staticClass:"form-group"},[e("label",[t._v(" Product Type:"),e("span",{staticClass:"text-danger"},[t._v("*")])]),e("Field",{staticClass:"w-100",attrs:{name:"AssetTypeData",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function({errors:a}){return[e("select",{directives:[{name:"model",rawName:"v-model",value:t.txtAssetType,expression:"txtAssetType"}],class:{"form-control w-100":!0,"is-invalid":a[0]},attrs:{name:"AssetTypeData"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.txtAssetType=e.target.multiple?a:a[0]},function(e){return t.GetCompanyAssestCatalogs(t.txtAssetType)}]}},[e("option",{attrs:{value:""}},[t._v("Select")]),t._l(t.AssetTypeData,(function(a,s){return e("option",{key:s,domProps:{value:a.ASSETID}},[t._v(t._s(a.ASSETTYPE))])}))],2),a[0]?e("span",{staticClass:"invalid-feedback d-block",attrs:{name:"AssetTypeData"}},[t._v(" "+t._s(t.GetLocalizedValue(t.$t("AssetTypeDataRequired")))+" ")]):t._e()]}}],null,!0)})],1)]):t._e(),t.ProductType?e("div",{staticClass:"col-sm-12 col-md-6 col-lg-3 col-xl-2 float-left location"},[e("div",{staticClass:"form-group"},[e("label",[t._v("Product Name:"),e("span",{staticClass:"text-danger"},[t._v("*")])]),e("Field",{staticClass:"w-100",attrs:{name:"ProductName",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function({errors:a}){return[e("select",{directives:[{name:"model",rawName:"v-model",value:t.txtProduct,expression:"txtProduct"}],class:{"form-control w-100":!0,"is-invalid":a[0]},attrs:{name:"ProductName"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.txtProduct=e.target.multiple?a:a[0]},t.productNameDDLChange]}},[e("option",{attrs:{value:""}},[t._v("Select")]),t._l(t.ProducttData,(function(a,s){return e("option",{key:s,domProps:{value:a.ASSET_CATALOGUE_ID}},[t._v(t._s(a.NAME))])}))],2),a[0]?e("span",{staticClass:"invalid-feedback d-block",attrs:{name:"ProductName"}},[t._v(" "+t._s(t.GetLocalizedValue(t.$t("ProductNameRequired")))+" ")]):t._e()]}}],null,!0)})],1)]):t._e(),t.ProductType?e("div",{staticClass:"col-sm-12 col-md-6 col-lg-3 col-xl-2 float-left location"},[e("div",{staticClass:"form-group"},[e("label",[t._v("Item Name:")]),e("Field",{attrs:{name:"Products",rules:{required:!1},label:"ItemName"},scopedSlots:t._u([{key:"default",fn:function({errors:a}){return[e("div",{staticClass:"input-group mb-3",staticStyle:{position:"relative"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.itemname,expression:"itemname"}],class:{"form-control":!0,"is-invalid":a[0]},attrs:{name:"Products",id:"Products",type:"text",value:"iselectVal"},domProps:{value:t.itemname},on:{input:function(e){e.target.composing||(t.itemname=e.target.value)}}}),a[0]?e("span",{staticClass:"invalid-feedback d-block",attrs:{name:"Products"}},[t._v(t._s(a[0]))]):t._e(),e("div",{staticClass:"unique_dynamicdatalist"},t._l(t.ProductsArray,(function(a,s){return e("ul",{key:s,staticStyle:{"z-index":"auto"},on:{click:function(e){return t.setProductsName(a)}}},[t.showProductDropdown?e("li",{staticStyle:{"text-transform":"capitalize"},attrs:{value:a.Value}},[t._v(t._s(a.Name))]):t._e()])})),0),e("a",{staticClass:"btn float-left",staticStyle:{"background-color":"#fff",color:"#303030","border-color":"#abb5bf","border-left":"none"},attrs:{href:"javascript:;"},on:{click:t.ItemListOnclick}},[e("em",{staticClass:"dropdown-toggle float-right"})])])]}}],null,!0)})],1)]):t._e(),t.BarCodeSerailNoRFID?e("div",{staticClass:"col-sm-12 col-md-6 col-lg-3 col-xl-2 float-left location"},[e("div",{staticClass:"form-group mb-0 pt-2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.txtBarcode,expression:"txtBarcode"}],class:{"form-control":!0,"is-invalid":t.isBarcodeInvalid},attrs:{type:"text",placeholder:"Enter BarCode"},domProps:{value:t.txtBarcode},on:{input:function(e){e.target.composing||(t.txtBarcode=e.target.value)}}}),t.isBarcodeInvalid?e("span",{staticClass:"invalid-feedback d-block",attrs:{name:"ProductName"}},[t._v(" "+t._s(t.GetLocalizedValue(t.$t("BarCodeRequired")))+" ")]):t._e()])]):t._e(),e("div",{staticClass:"input-group-text border-0 bg-transparent pl-2 pb-0"},[e("a",{staticClass:"btn btn-success",attrs:{href:"javascript:;",id:"btnSave",title:"Save",name:"btnSave",isclicked:"No"},on:{click:function(e){return t.ShowsearchData()}}},[t._v("Add Product ")]),t.BarCodeSerailNoRFID?e("a",{staticClass:"btn btn-primary m-1",attrs:{href:"javascript:;",id:"btnSearch",title:"Save",name:"btnsearch",isclicked:"No"}},[e("i",{staticClass:"fa fa-barcode text-white float-left mt-1 mr-2"}),t._v("RFID Scanned ")]):t._e()])])]),e("div",{staticClass:"col-sm-12"},[e("div",{staticClass:"table-responsive mt-2 tblWriteoffItems border"},[e("table",{staticClass:"table table-bordered dt-responsive nowrap mt-0",attrs:{id:"tblWriteoffItems"}},[e("thead",{staticClass:"thead-bg"},[e("tr",[e("th",{staticClass:"text-center"},[e("div",{staticClass:"custom-control custom-checkbox",on:{click:function(e){return t.checkSelectedRecord()}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.selectAll,expression:"selectAll"}],staticClass:"chkItems custom-control-input",attrs:{type:"checkbox",id:"chkAll",name:"checkbox"},domProps:{checked:Array.isArray(t.selectAll)?t._i(t.selectAll,null)>-1:t.selectAll},on:{change:function(e){var a=t.selectAll,s=e.target,i=!!s.checked;if(Array.isArray(a)){var r=null,o=t._i(a,r);s.checked?o<0&&(t.selectAll=a.concat([r])):o>-1&&(t.selectAll=a.slice(0,o).concat(a.slice(o+1)))}else t.selectAll=i}}}),e("label",{staticClass:"custom-control-label universal-custom-control-label pt-1"})])]),e("th",[e("span",[t._v(" "+t._s(t.$t("ItemCode")))])]),e("th",[e("span",[t._v(" "+t._s(t.$t("ProductName")))])]),e("th",[e("span",[t._v(" "+t._s(t.$t("UniqueName")))])]),e("th",[e("span",[t._v(" "+t._s(t.$t("LocationName")))])]),e("th",{staticClass:"text-center"},[e("span",[t._v(" "+t._s(t.$t("AvailableItems")))])]),e("th",{staticClass:"text-center"},[e("span",[t._v(" "+t._s(t.$t("PurchageValue")))])]),e("th",[e("span",[t._v(" "+t._s(t.$t("CurrentbookValue")))])]),e("th",[e("span",[t._v(" "+t._s(t.$t("SalavageCoast")))])]),e("th",[e("span",[t._v(" "+t._s(t.$t("WriteOffValue")))])])])]),e("tbody",{staticClass:"gridRowsBodyItems"},[t.searchData.length>0?e("tr",{staticClass:"trctrl"},[e("td",{staticClass:"text-center"}),e("td",{staticClass:"text-center"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.itemCodeAutoSearch,expression:"itemCodeAutoSearch"}],staticClass:"form-control",attrs:{id:"itemCodeAutoSearch"},domProps:{value:t.itemCodeAutoSearch},on:{input:[function(e){e.target.composing||(t.itemCodeAutoSearch=e.target.value)},function(e){return t.SearchRecord("code")}]}})]),e("td",{staticClass:"text-center"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.itemNameAutoSearch,expression:"itemNameAutoSearch"}],staticClass:"form-control",attrs:{id:"itemNameAutoSearch"},domProps:{value:t.itemNameAutoSearch},on:{input:[function(e){e.target.composing||(t.itemNameAutoSearch=e.target.value)},function(e){return t.SearchRecord("name")}]}})]),e("td",{staticClass:"align-middle"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.uniqueNameAutoSearch,expression:"uniqueNameAutoSearch"}],staticClass:"form-control",attrs:{id:"uniqueNameAutoSearch"},domProps:{value:t.uniqueNameAutoSearch},on:{input:[function(e){e.target.composing||(t.uniqueNameAutoSearch=e.target.value)},function(e){return t.SearchRecord("unique")}]}})]),e("td",{staticClass:"text-center"},[e("a",{staticClass:"clearAll btn btn-danger float-left mx-1",attrs:{href:"javascript:;",title:"Clear All"},on:{click:t.ClearFilter}},[e("i",{staticClass:"fa fa-refresh"})])]),e("td",{staticClass:"text-center"}),e("td",{staticClass:"text-center"}),e("td",{staticClass:"text-center"}),e("td",{staticClass:"text-center"}),e("td",{staticClass:"text-center"})]):t._e(),0==t.searchData.length?e("tr",{staticClass:"NoRecordsFound no_Search_Records_Found trctrl text-center text-danger"},[e("td",{staticClass:"text-center text-middle text-danger no-record",attrs:{colspan:"10"}},[t._v(" "+t._s(t.$t("NoRecordfound"))+" ")])]):t._e(),t._l(t.searchData,(function(a,s){return e("tr",{key:a,staticClass:"itemAddlist"},[e("td",{staticClass:"text-center"},[e("div",{staticClass:"custom-control custom-checkbox"},[e("input",{staticClass:"chkItems custom-control-input",staticStyle:{display:"none"},attrs:{type:"checkbox",name:"checkbox"},on:{click:function(e){return t.singleCheckRecord(a)}}}),e("label",{staticClass:"custom-control-label universal-custom-control-label pt-1"})])]),e("td",{staticClass:"text-center"},[t._v(t._s(a.ItemCode))]),e("td",{staticClass:"text-center"},[t._v(t._s(a.AssetCatalogName))]),e("td",{staticClass:"text-center"},[t._v(t._s(a.AssetUniqueName))]),e("td",{staticClass:"text-center"},[t._v(t._s(a.LocationName))]),e("td",{staticClass:"text-center single-action"},[e("span",{staticClass:"text-dark"},[e("i",{staticClass:"fa fa-shopping-basket",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"noti-circle noti-blue"},[t._v(t._s(a.AvailableItems))])])]),e("td",{staticClass:"text-center"},[t._v(t._s(a.PurchaseValue))]),e("td",{staticClass:"text-center"},[t._v(t._s(a.CurrentBookValue))]),e("td",{staticClass:"text-center"},[t._v(t._s(a.SalvageValue))]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:a.qty,expression:"item.qty"}],class:{"txtitems form-control transferQuantity":!0,"is-invalid":""==a.qty},attrs:{type:"text",value:"",onpaste:"return false;","data-numberonly":"no",onchange:"myfun(this);"},domProps:{value:a.qty},on:{keypress:t.NumbersOnly,input:function(e){e.target.composing||t.$set(a,"qty",e.target.value)}}})])])}))],2)])]),e("Pager",{attrs:{numberofrecords:t.TotalRecord,CurrentPageNumber:t.CurrentPage,"prev-text":"Prev","first-text":"First","last-text":"Last","next-text":"Next"},on:{SetCurrentPage:t.pagerMethod}})],1),e("div",{staticClass:"col-md-12 col-lg-12 col-xl-12 float-left mt-3 mb-2 text-right p-0"},[e("a",{staticClass:"btn btn-success",attrs:{href:"javascript:;",id:"btnSave",title:"Save",name:"btnSave",isclicked:"No"},on:{click:t.onSubmit}},[e("i",{staticClass:"fa fa-save pr-2"}),t._v("Save ")]),e("a",{staticClass:"btn btn-danger HideTab m-1",attrs:{id:"btnCancel",href:"/AssetCatalog/ItemWriteOffList",title:"Cancel"},on:{click:t.onCancel}},[e("i",{staticClass:"fa fa-close pr-2"}),t._v("Cancel")])]),e("div",{staticStyle:{clear:"both"}}),t.AddToListArray.length>0?e("div",{staticClass:"col-lg-12 mt-3 mb-3"},[e("div",{staticClass:"heading-border mb-2"},[e("h5",{staticClass:"h5"},[e("span",[t._v(t._s(t.$t("Product Write-Off")))])])]),e("div",{staticClass:"listing px-2"},[e("div",{staticClass:"table-responsive table-fix-header mt-3"},[e("table",{staticClass:"table table-bordered dt-responsive nowrap mt-0",attrs:{id:"tbltransferiteminfoList"}},[e("thead",{staticClass:"thead-bg"},[e("tr",[e("th",{staticClass:"text-center",staticStyle:{width:"50px !important"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.AddToListArray,expression:"AddToListArray"}],staticClass:"chkItems",attrs:{type:"checkbox",id:"chkAll",name:"checkbox"},domProps:{checked:Array.isArray(t.AddToListArray)?t._i(t.AddToListArray,null)>-1:t.AddToListArray},on:{change:function(e){var a=t.AddToListArray,s=e.target,i=!!s.checked;if(Array.isArray(a)){var r=null,o=t._i(a,r);s.checked?o<0&&(t.AddToListArray=a.concat([r])):o>-1&&(t.AddToListArray=a.slice(0,o).concat(a.slice(o+1)))}else t.AddToListArray=i}}})]),e("th",[e("span",[t._v(" "+t._s(t.$t("ItemCode")))])]),e("th",[e("span",[t._v(" "+t._s(t.$t("ProductName")))])]),e("th",[e("span",[t._v(" "+t._s(t.$t("UniqueName")))])]),e("th",[e("span",[t._v(" "+t._s(t.$t("LocationName")))])]),e("th",{staticClass:"text-center"},[e("span",[t._v(" "+t._s(t.$t("AvailableItems")))])]),e("th",{staticClass:"text-center"},[e("span",[t._v(" "+t._s(t.$t("PurchageValue")))])]),e("th",[e("span",[t._v(" "+t._s(t.$t("CurrentbookValue")))])]),e("th",[e("span",[t._v(" "+t._s(t.$t("SalavageCoast")))])]),e("th",[e("span",[t._v(" "+t._s(t.$t("WriteOffValue")))])]),e("th",{staticClass:"text-center"},[e("span",[t._v("Action")])])])]),e("tbody",{staticClass:"gridRowsBodyItems"},[0==t.AddToListArray.length?e("tr",{staticClass:"NoRecordsFound"},[e("td",{staticClass:"no_records text-center text-middle text-danger no-record",attrs:{colspan:"15"}},[t._v(" "+t._s(t.$t("NoRecordfound")))])]):t._e(),t._l(t.AddToListArray,(function(a,s){return e("tr",{key:a,staticClass:"itemAddlist"},[e("td",{staticClass:"text-center"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.ischecked,expression:"item.ischecked"}],attrs:{type:"checkbox",name:"checkbox"},domProps:{checked:Array.isArray(a.ischecked)?t._i(a.ischecked,null)>-1:a.ischecked},on:{change:function(e){var s=a.ischecked,i=e.target,r=!!i.checked;if(Array.isArray(s)){var o=null,c=t._i(s,o);i.checked?c<0&&t.$set(a,"ischecked",s.concat([o])):c>-1&&t.$set(a,"ischecked",s.slice(0,c).concat(s.slice(c+1)))}else t.$set(a,"ischecked",r)}}})]),e("td",{staticClass:"text-center"},[t._v(t._s(a.ItemCode))]),e("td",{staticClass:"text-center"},[t._v(t._s(a.AssetCatalogName))]),e("td",{staticClass:"text-center"},[t._v(t._s(a.AssetUniqueName))]),e("td",{staticClass:"text-center"},[t._v(t._s(a.LocationName))]),e("td",{staticClass:"text-center single-action"},[e("span",{staticClass:"text-dark"},[e("i",{staticClass:"fa fa-shopping-basket",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"noti-circle noti-blue"},[t._v(t._s(a.AvailableItems))])])]),e("td",{staticClass:"text-center"},[t._v(t._s(a.PurchaseValue))]),e("td",{staticClass:"text-center"},[t._v(t._s(a.CurrentBookValue))]),e("td",{staticClass:"text-center"},[t._v(t._s(a.SalvageValue))]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:a.qty,expression:"item.qty"}],class:{"txtitems form-control transferQuantity":!0,"is-invalid":""==a.qty},attrs:{type:"text",value:"",onpaste:"return false;","data-numberonly":"no"},domProps:{value:a.qty},on:{keypress:t.NumbersOnly,input:function(e){e.target.composing||t.$set(a,"qty",e.target.value)}}})]),e("td",{staticClass:"text-center single-action"},[e("a",{attrs:{href:"javascript:;",title:"Delete"},on:{click:function(e){return t.DeleteRow(s)}}},[e("i",{staticClass:"fa fa-trash text-danger action-icon"})])])])}))],2)])])])]):t._e(),e("div",{staticClass:"col-lg-12 text-right mt-3 float-left"})]}}])})],1)],1)},i=[],r=(a("14d9"),a("1115")),o=a("b25f"),c=a("ca17"),n=a.n(c),l=a("4555"),d=(a("542c"),{components:{Search:o["a"],Pager:l["a"],"tree-view":n.a},data(){return{Case:0,ProductType:!0,BarCodeSerailNoRFID:!1,Headers:[{COLUMN_NAME:"Product Code",DATA_TYPE:"Text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Product Code",DISPLAY_ORDER:1},{COLUMN_NAME:"Product Name",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("ProductName"),DISPLAY_ORDER:2},{COLUMN_NAME:"Unique Name",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Unique Name",DISPLAY_ORDER:3},{COLUMN_NAME:"Location",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Location",DISPLAY_ORDER:4},{COLUMN_NAME:"Available Quantity",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Available Quantity",DISPLAY_ORDER:5},{COLUMN_NAME:"Purchase Value",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Purchase Value",DISPLAY_ORDER:6},{COLUMN_NAME:"Current book Value",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Current book Value",DISPLAY_ORDER:7},{COLUMN_NAME:"Salvage Cost",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Salvage Cost",DISPLAY_ORDER:8},{COLUMN_NAME:"Write-Off Value",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Write-Off Value",DISPLAY_ORDER:9}],LegendArray:[],ProductData:[],PageSize:10,PageNumber:1,PageSizeOption:null,txtLocation:null,ProducttData:[],Groupname:"",LocationData:[],AssetTypeData:[],txtAssetType:"",isLocationInvalid:!1,isAssetTypeInvalid:!1,istxtProductInvalid:!1,UserId:null,txtProduct:"",txtItemName:"",UserId:null,itemname:"",ProductsArray:[],showProductDropdown:!1,iselectVal:"",options:[],searchData:[],barcode:null,searchcheck_all:!1,finalcheck_all:!1,TotalRecord:0,AddToListArray:[],itemCodeAutoSearch:"",itemNameAutoSearch:"",uniqueNameAutoSearch:"",firstListArray:[],txtBarcode:"",isBarcodeInvalid:!1,isLoading:!1,writeOffSelect:[],selectAll:!1,CurrentPage:1,TotalPage:0,noRecord:!1}},created:function(){this.GetLocationByuserId(),this.BindItemTypeByUserId(),this.GetCompanyAssestCatalogs(),this.UserId=this.GetUserInfo.ID},methods:{GetLocationByuserId:function(){var t=this;r["a"].GetLocationByuserId().then(e=>{t.FindalLocationArray=[],e.data.data.forEach(a=>{var s=t.FindalLocationArray.filter((function(t){return t.COMPANY_LOCATION_ID==a.COMPANY_LOCATION_ID}));if(0==s.length&&null==a.PARENT_LOCATION_ID){let s=a.COMPANY_LOCATION_ID,i=t.getChildLocation(s,a,e.data.data);t.FindalLocationArray.push(i)}}),t.options=t.FindalLocationArray})},NumbersOnly(t){t=t||window.event;var e=t.which?t.which:t.keyCode;if(!(e>31&&(e<48||e>57)&&46!==e))return!0;t.preventDefault()},singleCheckRecord:function(t){var e=this;t.ischecked=!t.ischecked,t.ischecked?e.searchData.forEach(e=>{e.RelatedInfoId===t.RelatedInfoId&&(e.ischecked=!0)}):e.searchData.forEach(e=>{e.RelatedInfoId===t.RelatedInfoId&&(e.ischecked=!1)}),e.searchData.every(t=>t.ischecked)?e.selectAll=!0:e.selectAll=!1},checkSelectedRecord:function(){var t=this;t.selectAll=!t.selectAll,t.selectAll?t.searchData.forEach(t=>{t.ischecked=!0}):t.searchData.forEach(t=>{t.ischecked=!1})},async AddToList(){var t=this,e=!0,a="",s=[];t.searchData.forEach(i=>{t.AddToListArray.forEach(t=>{t.RelatedInfoId==i.RelatedInfoId&&(a+=t.AssetUniqueName)}),i.ischecked&&(""==i.qty?(t.ShowAlert(t.$t("CorrectHighlightedErrors"),"warning",!0,t.$t("Alert")),e=!1):s.push(i)),t.searchData.every(t=>!t.ischecked)&&t.ShowAlert(t.$t("MinimumOneSelect"),"warning",!0,t.$t("Alert"))}),a.length>0&&(t.ShowAlert(a+" Already Exist","warning",!0,t.$t("Alert")),e=!1),e&&(t.searchData=[],s.forEach(e=>{t.AddToListArray.push(e),t.txtLocation=null,t.txtAssetType="",t.txtProduct="",t.itemname="",$("#chkAll_0").prop("checked",!1),t.$refs.writeOff.reset()}),setTimeout((function(){t.ResponsiveDataTable("tbltransferiteminfoList")}),500))},async DeleteRow(t){var e=this;e.confirmR(e.$t("ConfirmDelete"),!0,e.$t("Delete")+"  "+e.$t("ASSET_CATALOGUE_ID"),(function(){e.AddToListArray.splice(t,1)}))},async ShowsearchData(){let t=this;var e=null;if(t.isLoading=!0,t.$refs.writeOff.validate().then(t=>{if(!t)return!1}),t.BarCodeSerailNoRFID){if(""==t.txtBarcode)return t.isBarcodeInvalid=""==t.txtBarcode||null==t.txtBarcode,t.ShowAlert(t.$t("CorrectHighlightedErrors"),"warning",t.$t("Alert")),void(t.isLoading=!1);t.isBarcodeInvalid=!1,e=`id=&isView=1&assetType=&barcode=${t.txtBarcode}&assetUniqueId=&selfCheckout=&reqFrom=writeoff&isFor=search&assignedFrom=&assignedTill=&startTime=&endTime=&locationId=0&pageSize=${t.PageSize}&pageNum=${t.PageNumber}`}else{if(""==t.txtProduct||""==t.txtAssetType||""==t.txtLocation)return t.isLocationInvalid=""==t.txtLocation||null==t.txtLocation,t.isAssetTypeInvalid=""==t.txtAssetType,t.istxtProductInvalid=""==t.txtProduct,t.ShowAlert(t.$t("CorrectHighlightedErrors"),"warning",t.$t("Alert")),void(t.isLoading=!1);t.isLocationInvalid=!1,t.isAssetTypeInvalid=!1,t.istxtProductInvalid=!1,e=`id=${t.txtProduct}&isView=1&assetType=${t.txtAssetType}&barcode=&assetUniqueId=${t.iselectVal}&selfCheckout=&reqFrom=writeoff&isFor=search&assignedFrom=&assignedTill=&startTime=&endTime=&locationId=${t.txtLocation}&pageSize=${t.PageSize}&pageNum=${t.PageNumber}`}await r["a"].GetCompanyAssestCatalogsDetalis(e).then(e=>{t.searchData=[],t.TotalRecord=0,t.TotalPage=0,t.CurrentPage=1,e.data.length>0&&(e.data.forEach(e=>{e.ischecked=!1,e.qty="",t.searchData.push(e),t.firstListArray.push(e),t.isLoading=!1}),t.TotalRecord=e.data[0].TOTALRECORDS,t.TotalPage=Math.ceil(t.TotalRecord/t.PageSize),t.CurrentPage=t.PageNumber,t.noRecord=!1,t.isLoading=!1,setTimeout((function(){t.ResponsiveDataTable("tblWriteoffItems")}),300),setTimeout((function(){t.CheckBoxBootstrap()}),100),t.isLoading=!1),t.isLoading=!1})},async SearchRecord(t){var e=this;e.searchData="code"==t?e.firstListArray.filter(t=>t.ItemCode.toLowerCase().indexOf(e.itemCodeAutoSearch.toLowerCase())>-1):"name"==t?e.firstListArray.filter(t=>t.AssetCatalogName.toLowerCase().indexOf(e.itemNameAutoSearch.toLowerCase())>-1):e.firstListArray.filter(t=>t.AssetUniqueName.toLowerCase().indexOf(e.uniqueNameAutoSearch.toLowerCase())>-1),setTimeout((function(){e.ResponsiveDataTable("tblWriteoffItems")}),300),setTimeout((function(){e.CheckBoxBootstrap()}),100)},async ClearFilter(){var t=this;t.itemCodeAutoSearch="",t.itemNameAutoSearch="",t.uniqueNameAutoSearch=""},onSubmit:async function(t){var e=this;e.isLoading=!0;var a="",s="",i=!1,o=0,c=0;if(e.AddToListArray.forEach(t=>{if(null!=t&&t.ischecked){i=!0,0==o&&(c=t.AssetCatalogueId);var e=t.RelatedInfoId,r=t.qty;0==r&&(a+="no"),s+=e+","+r+"|",r,o++}}),i&&0==a.length){const t={AssetCatalogueId:parseInt(c),ItemName:"",ItemGroupName:"",ItemType:"",Quantity:0,RelatedInfoId:0,LocationId:0,LocationName:"",NumberOfItems:0,UniqueName:"",Description:"",AvailableItems:0,CreateUniqueNameListing:0,ItemCode:"",MoveToInfo:s,ParentLocationId:0};JSON.stringify(t);await r["a"].UpdateWriteOffSave(t).then(t=>{"success"==t.data.result?(e.ShowAlert(e.$t("WriteOffSuccessfully"),"success",e.$t("Alert")),e.searchData=[],e.AddToListArray=[],e.isLoading=!1):(e.ShowAlert(e.$t("WriteOffError"),"warning",e.$t("Alert")),e.isLoading=!1)})}else i?a.length>0&&(e.ShowAlert(e.$t("CorrectHighlightedErrors"),"warning",!0,e.$t("Alert")),e.isLoading=!1):(e.ShowAlert(e.$t("MinimumOneSelect"),"warning",!0,e.$t("Alert")),e.isLoading=!1)},async checkBoxClick(t,e,a,s){var i=this;"searchtbl"==s?"single"==e?i.searchData.forEach(t=>{t.ischecked||(i.searchcheck_all=!1)}):a?i.searchData.forEach(t=>{t.ischecked=!1}):i.searchData.forEach(t=>{t.ischecked=!0}):"single"==e?i.AddToListArray.forEach(t=>{t.ischecked||(i.finalcheck_all=!1)}):finalcheck_all?i.AddToListArray.forEach(t=>{t.ischecked=!1}):i.AddToListArray.forEach(t=>{t.ischecked=!0})},getChildLocation:function(t,e,a){let s=this,i={};i={id:e.COMPANY_LOCATION_ID,label:e.LOCATION_NAME};let r=i;var o=a.filter((function(e){return e.PARENT_LOCATION_ID==t}));let c=[];return o.forEach(t=>{let e=t.COMPANY_LOCATION_ID;var r=c.filter((function(e){return e.COMPANY_LOCATION_ID==t.COMPANY_LOCATION_ID}));if(0==r.length){var o=a.filter((function(t){return t.PARENT_LOCATION_ID==e}));if(null!=o&&o.length>0){let i=s.getChildLocation(e,t,a);c.push(i)}else i={id:""+t.COMPANY_LOCATION_ID,label:""+t.LOCATION_NAME},c.push(i)}}),r.children=c,r},BindItemTypeByUserId:function(t){this.isLoading=!0;let e=`type=ITEMCODE&issueTo=${this.UserId}&locationId=${t}&requestType=ASSIGN&requestFrom=WriteOff`;r["a"].AssignGetAssetType(e).then(t=>{this.AssetTypeData=t.data,this.isLoading=!1,this.isLocationInvalid=""==this.txtLocation||null==this.txtLocation}),this.isLocationInvalid=""==this.txtLocation||null==this.txtLocation,this.isLoading=!1},GetCompanyAssestCatalogs:function(t){this.isLoading=!0;let e=`id=${t}&issueTo=${this.UserId}&locationId=${this.txtLocation}&requestFrom=assetassignment`;r["a"].GetCompanyAssestCatalogs(e).then(t=>{this.ProducttData=t.data,this.isLoading=!1,this.isAssetTypeInvalid=""==this.txtAssetType}),this.isAssetTypeInvalid=""==this.txtAssetType,this.isLoading=!1},productNameDDLChange:function(){var t=this;setTimeout(()=>{t.istxtProductInvalid=""==t.txtProduct},200)},setProductsName:function(t){var e=this;e.iselectVal=t.Value,e.itemname=t.Name,e.showProductDropdown=!1},ItemListOnclick:function(){var t=`assetCatalogId=${this.txtProduct}&name=&issueTo=${this.UserId}&locationId=${this.txtLocation}&requestFrom=assetassignment&assetType=`;r["a"].GetUniqueAssetItems(t).then(t=>{this.ProductsArray=t.data,this.showProductDropdown=!0})},TextfiledType(t){1==t?(this.ProductType=!1,this.BarCodeSerailNoRFID=!0):0==t&&(this.ProductType=!0,this.BarCodeSerailNoRFID=!1)},currentPageMethod:function(t){this.PageSize=t.PageSize,this.PageNumber=t.PageNumber,this.FetchData()},GetPageSizeOption:function(){for(var t=[],e=10,a=e;a<e+95;a+=5)t.push(a);this.PageSizeOption=t},pagerMethod:function(t){this.PageSize=t.PageSize,this.PageNumber=t.PageNumber,this.ShowsearchData()},sortdata:function(t){var e="sort tb_headerSortDown";this.SortBy=t,t===this.SortBy&&(""==this.SortExp?(this.SortExp="ASC",e="sort tb_headerSortDown"):"ASC"==this.SortExp?(this.SortExp="DESC",e="sort tb_headerSortUp"):(this.SortExp="ASC",e="sort tb_headerSortDown")),this.FetchData(),$("#"+t+"  span:first-child").attr("class",e)},onCancel:function(){this.$router.push({name:"ItemWriteOffList"})}}}),u=d,h=a("2877"),m=Object(h["a"])(u,s,i,!1,null,null,null);e["default"]=m.exports},4555:function(t,e,a){"use strict";var s=function(){var t=this,e=t._self._c;return t.TotalPages>0?e("div",{staticClass:"nu-paging"},[e("nav",{attrs:{"aria-label":"Page navigation example col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left"}},[e("ul",{staticClass:"pagination row"},[e("li",{staticClass:"col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left choose-page"},[e("span",{staticClass:"mr-2"},[t._v("Show")]),e("span",{staticClass:"select"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.PageSize,expression:"PageSize"}],staticClass:"form-control form-control-sm",attrs:{id:"pageSize",name:"pageSize"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.PageSize=e.target.multiple?a:a[0]},t.SetPageSize]}},t._l(t.PageSizeOption,(function(a,s){return e("option",{key:s,domProps:{value:a}},[t._v(t._s(a)+" ")])})),0)]),e("span",{staticClass:"ml-2"},[t._v(t._s(t.$t("PagingText",[(t.CurrentPage-1)*t.PageSize+1,t.PageSize*t.CurrentPage>t.TotalRecords?t.TotalRecords:t.PageSize*t.CurrentPage,t.TotalRecords])))])]),e("li",{staticClass:"col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"},[t.TotalPages>1?e("ul",{staticClass:"paging-count"},[e("li",{staticClass:"page-item"},[1!=t.CurrentPage?e("a",{staticClass:"page-link first",attrs:{title:t.firstText,href:"javascript:;",val:"1"},on:{click:function(e){return t.SetCurrentPage(1)}}},[t._v(t._s(t.firstText))]):t._e(),1==t.CurrentPage?e("a",{staticClass:"page-link first disabled",attrs:{title:t.firstText,val:"1"}},[t._v(t._s(t.firstText))]):t._e()]),e("li",{staticClass:"page-item"},[1!=t.CurrentPage?e("a",{staticClass:"page-link previous",attrs:{title:t.prevText,href:"javascript:;"},on:{click:function(e){return t.SetCurrentPage(t.CurrentPage-1)}}},[t._v(t._s(t.prevText))]):t._e(),1==t.CurrentPage?e("a",{staticClass:"page-link previous disabled",attrs:{title:t.prevText}},[t._v(t._s(t.prevText))]):t._e()]),t._l(t.TotalPages,(function(a,s){return[a>=t.GroupStart&&a<=t.GroupEnd?e("li",{key:s,staticClass:"page-item"},[s+1==t.CurrentPage?e("a",{staticClass:"page-link active",attrs:{href:"javascript:;"}},[t._v(t._s(s+1))]):t._e(),s+1!=t.CurrentPage?e("a",{staticClass:"page-link",attrs:{href:"javascript:;",val:s},on:{click:function(e){return t.SetCurrentPage(s+1)}}},[t._v(t._s(s+1))]):t._e()]):t._e()]})),e("li",{staticClass:"page-item"},[t.CurrentPage<t.TotalPages?e("a",{staticClass:"page-link next",attrs:{title:t.nextText,href:"javascript:;"},on:{click:function(e){return t.SetCurrentPage(t.CurrentPage+1)}}},[t._v(t._s(t.nextText))]):t._e(),t.CurrentPage>=t.TotalPages?e("a",{staticClass:"page-link disabled next",attrs:{title:t.nextText}},[t._v(t._s(t.nextText))]):t._e()]),e("li",{staticClass:"page-item"},[t.CurrentPage!=t.TotalPages?e("a",{staticClass:"page-link next",attrs:{title:t.lastText,href:"javascript:;",val:t.TotalPages},on:{click:function(e){return t.SetCurrentPage(t.TotalPages)}}},[t._v(t._s(t.lastText))]):t._e(),t.CurrentPage==t.TotalPages?e("a",{staticClass:"page-link next disabled",attrs:{title:t.lastText,val:t.TotalPages}},[t._v(t._s(t.lastText))]):t._e()])],2):t._e()])])])]):t._e()},i=[],r=(a("14d9"),{props:{numberofrecords:{type:Number,required:!0},prevText:{type:String,required:!0},nextText:{type:String,required:!0},firstText:{type:String,required:!0},lastText:{type:String,required:!0},callbackfunction:{type:Function},CurrentPageNumber:{type:Number}},data:function(){return{TotalRecords:0,PageNumber:1,PageSize:10,PageSizeOption:null,CurrentPage:1,TotalPages:10,GroupStart:1,GroupEnd:3,LastPage:!1}},watch:{numberofrecords:function(t){this.CurrentPage>this.PageNumber&&(this.CurrentPage=this.PageNumber),this.TotalRecords=t,this.TotalPages=Math.ceil(this.TotalRecords/this.PageSize),this.TotalPages==this.PageNumber&&this.PageNumber>3?(this.GroupStart=this.PageNumber-2,this.GroupEnd=this.PageNumber):this.TotalPages>this.PageNumber&&this.PageNumber>=3?(this.GroupStart=this.PageNumber-1,this.GroupEnd=this.PageNumber+1):(this.GroupStart=1,this.GroupEnd=3)},CurrentPageNumber:function(t){var e=this;e.CurrentPage=t,1==t&&e.SetCurrentPage(t)}},created:function(){this.TotalRecords=this.numberofrecords,this.TotalPages=Math.ceil(this.TotalRecords/this.PageSize),this.GetPageSizeOption()},methods:{GetData:function(){this.$emit("SetCurrentPage",{PageNumber:this.PageNumber,PageSize:this.PageSize}),"undefined"!=typeof this.callbackfunction&&null!=this.callbackfunction&&this.callbackfunction()},SetPageSize:function(t){this.PageSize=t.target.value,this.PageNumber=1,this.CurrentPage=this.PageNumber,this.GroupStart=this.PageNumber,this.GroupEnd=this.PageNumber+2,this.TotalPages=Math.ceil(this.TotalRecords/this.PageSize),this.GetData()},SetCurrentPage:function(t){this.PageNumber=t,this.CurrentPage=t,this.TotalPages==this.PageNumber&&this.PageNumber>3?(this.GroupStart=this.PageNumber-2,this.GroupEnd=this.PageNumber):this.TotalPages>this.PageNumber&&this.PageNumber>=3?(this.GroupStart=this.PageNumber-1,this.GroupEnd=this.PageNumber+1):(this.GroupStart=1,this.GroupEnd=3),this.GetData()},GetPageSizeOption:function(){for(var t=[],e=10,a=e;a<e+95;a+=5)t.push(a);this.PageSizeOption=t}}}),o=r,c=a("2877"),n=Object(c["a"])(o,s,i,!1,null,null,null);e["a"]=n.exports}}]);
//# sourceMappingURL=chunk-dde9fa2c.js.map