(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0274aa50"],{"266b":function(t,e,a){var s=a("24fb");e=s(!1),e.push([t.i,"tr.high-profile-bar td:first-child:after{background:#de0303}",""]),t.exports=e},"2d4e":function(t,e,a){"use strict";var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-popups"},[e("loader",{attrs:{"is-visible":t.isLoading}}),e("div",{staticClass:"modal d-block"},[e("div",{staticClass:"modal-dialog modal-dialog-centered"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[t._v(" "+t._s(t.$t("Reject"))+" ")]),e("button",{staticClass:"close",attrs:{type:"button","data-original-title":"Close"},on:{click:function(e){return t.ClosePOPuP(e)}}},[e("em",{staticClass:"fa fa-times"})])]),e("div",{staticClass:"border p-3"},[e("dynamic-form",{attrs:{lang:"en",buttons:t.buttons,schema:t.FormSchema},on:{OnSubmit:t.onSubmit}})],1)])])])],1)},i=[],o=a("1115"),n={props:{RejectData:{type:Array,required:!0}},data(){return{FormSchema:[{layoutType:"single",Data:[{astype:"TextAreaField",label:this.$t("Reason"),name:"Reason",value:"",validationRules:{required:!0,max:1e3},placeholder:"",config:{rows:0}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Cancel",onClick:this.onCancel}],assignmentId:"",CancelledBy:"ASSIGNER",RejectsData:[],isLoading:!1}},created:function(){},methods:{onSubmit:function(t){var e=this;e.isLoading=!0;const a={batchId:e.RejectData.REQUISITION_BATCH_ID,assignmentId:e.assignmentId,requisitionCancelledFrom:e.CancelledBy,comment:t.Reason};o["a"].UpdateRequisitionStatus(a).then(t=>{null!=t.data&&(t.data.length>0&&1==t.data?(e.ShowAlert(e.$t("Record Reject Successfully"),"success",e.$t("Alert")),e.isLoading=!1,e.$parent.FetchData(),e.$parent.ClosePOPuP()):(e.ShowAlert(e.$t("Unknown Error Occur"),"failure",!0,e.$t("Alert")),e.isLoading=!1,e.$parent.ClosePOPuP())),setTimeout((function(){e.CheckBoxBootstrap()}),100)})},ClosePOPuP:function(t){this.$emit("ClosePOPuP",t)},onCancel:function(){var t=this;t.FormSchema[0].Data[0].value="",t.ClosePOPuP()}}},r=n,c=a("2877"),l=Object(c["a"])(r,s,i,!1,null,null,null);e["a"]=l.exports},af8f:function(t,e,a){var s=a("266b");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var i=a("499e").default;i("d30fc520",s,!0,{sourceMap:!1,shadowMode:!1})},e60f:function(t,e,a){"use strict";a("af8f")},feec:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("section",{staticClass:"main-content",attrs:{id:"tabs"}},[e("loader",{attrs:{"is-visible":t.isLoading}}),e("div",{staticClass:"padding-t_10",attrs:{id:"reportstabsdata"}},[e("div",{staticClass:"left-menu-tab"},[e("div",{staticClass:"col-md-12 p-0"},[e("div",{staticClass:"theme-primary partition"},[e("span",{staticClass:"p-name text-white"},[t._v(t._s(t.Headerstext))])])]),e("ul",{staticClass:"nav nav-pills flex-column left-tab mt-2 responivecustomtab nav-tabs"},t._l(t.tabs,(function(a){return e("li",{key:a.id,class:{"nav-item":!0,active:t.activeTab===a.id},on:{click:function(e){t.activeTab=a.id,t.changeTab(a.id)}}},[e("span",{class:{"nav-link left-menu":!0,active:t.activeTab===a.id}},[t._v(t._s(a.title))])])})),0)]),e("div",{staticClass:"right-content"},[e("div",{staticClass:"theme-primary partition p-actions-expand",attrs:{id:"ReturnRequestHeading"}},[e("span",{staticClass:"p-name text-white"},[t._v(t._s(t.navheading))])]),t._l(t.tabs,(function(a){return e("div",{directives:[{name:"show",rawName:"v-show",value:t.activeTab===a.id,expression:"activeTab === tab.id"}],key:a.id,staticClass:"col-md-12 p-0"},[e("div",{staticClass:"col-lg-12 border float-left py-3"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12 col-md-12 col-lg-6 col-xl-6 float-left ml-4"},[e("div",{staticClass:"row mt-0"},[e("div",{staticClass:"col-7 float-left pr-1 pl-0"},[e("div",{staticClass:"form-group"},[e("Field",{staticClass:"w-100",attrs:{rules:{required:!1},name:"Reader"},scopedSlots:t._u([{key:"default",fn:function({errors:a}){return[e("input",{directives:[{name:"model",rawName:"v-model",value:t.barcodeNumber,expression:"barcodeNumber"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Barcode",autocomplete:"off",name:"search"},domProps:{value:t.barcodeNumber},on:{input:function(e){e.target.composing||(t.barcodeNumber=e.target.value)}}})]}}],null,!0)})],1)]),e("div",{staticClass:"col-5 float-left pl-0"},[e("div",{staticClass:"background-0 text-left form-check-inline"},[e("em",{staticClass:"btn btn-success mr-1 px-4 hlsearch mr-2",attrs:{id:"Go",title:"Search",href:"javascript:;"},on:{click:function(e){return t.Search()}}},[e("i",{staticClass:"fa fa-search pr-2"})]),e("em",{staticClass:"btn btn-danger clearsearchtext px-4",attrs:{title:"clear",href:"javascript:;"},on:{click:function(e){return t.Clear()}}},[e("i",{staticClass:"fa fa-refresh pr-2"})])])])])])]),t._m(0,!0)]),e("div",{staticClass:"tab-content mb-2"},[t._m(1,!0),e("div",[1==a.id?e("div",{staticClass:"listing"},[0==t.noRecord?e("div",{staticClass:"table-responsive"},[e("div",{staticClass:"p-2 border-bottom"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"row mx-0"},[e("div",{staticClass:"col-lg-4"},[e("b",{staticClass:"font-weight-medium"},[t._v(t._s(t.$t("ItemName"))+":")])]),e("div",{staticClass:"col-lg-8"},[t._v(t._s(t.ProductInformation.catalogName))])])]),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"row mx-0"},[e("div",{staticClass:"col-lg-4"},[e("b",{staticClass:"font-weight-medium"},[t._v(t._s(t.$t("UniqueName"))+":")])]),e("div",{staticClass:"col-lg-8"},[t._v(t._s(t.ProductInformation.uniqueName))])])])])]),e("div",{staticClass:"p-2 border-bottom"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"row mx-0"},[e("div",{staticClass:"col-lg-4"},[e("b",{staticClass:"font-weight-medium"},[t._v(t._s(t.$t("SerialNumber"))+":")])]),e("div",{staticClass:"col-lg-8"},[t._v(t._s(t.ProductInformation.serialNumber))])])]),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"row mx-0"},[e("div",{staticClass:"col-lg-4"},[e("b",{staticClass:"font-weight-medium"},[t._v(t._s(t.$t("Brand"))+":")])]),e("div",{staticClass:"col-lg-8"},[t._v(t._s(t.ProductInformation.brand))])])])])]),e("div",{staticClass:"p-2 border-bottom"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"row mx-0"},[e("div",{staticClass:"col-lg-4"},[e("b",{staticClass:"font-weight-medium"},[t._v(t._s(t.$t("ModelName"))+":")])]),e("div",{staticClass:"col-lg-8"},[t._v(t._s(t.ProductInformation.modelName))])])]),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"row mx-0"},[e("div",{staticClass:"col-lg-4"},[e("b",{staticClass:"font-weight-medium"},[t._v(t._s(t.$t("ModelNumber"))+":")])]),e("div",{staticClass:"col-lg-8"},[t._v(t._s(t.ProductInformation.modelNumber))])])])])]),e("div",{staticClass:"p-2 border-bottom"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"row mx-0"},[e("div",{staticClass:"col-lg-4"},[e("b",{staticClass:"font-weight-medium"},[t._v(t._s(t.$t("Cost"))+":")])]),null==t.ProductInformation.cost?e("div",{staticClass:"col-lg-8"},[t._v("0.00m")]):e("div",{staticClass:"col-lg-8"},[t._v(t._s(t.ProductInformation.cost))])])]),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"row mx-0"},[e("div",{staticClass:"col-lg-4"},[e("b",{staticClass:"font-weight-medium"},[t._v(t._s(t.$t("WarrantyDuration"))+":")])]),e("div",{staticClass:"col-lg-8"},[t._v(t._s(t.ProductInformation.warrantyDuration))])])])])]),e("div",{staticClass:"p-2 border-bottom"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"row mx-0"},[e("div",{staticClass:"col-lg-4"},[e("b",{staticClass:"font-weight-medium"},[t._v(t._s(t.$t("WarrantyExpirationDate"))+":")])]),e("div",{staticClass:"col-lg-8"},[t._v(t._s(t.ProductInformation.warrantyExpirationDate))])])])])])]):e("div",{staticClass:"table-responsive"},[e("p",{staticClass:"text-center text-danger p-2 m-0"},[t._v(t._s(t.$t("NoRecordfound")))])])]):t._e(),2==a.id?e("div",{staticClass:"listing mt-2"},[e("tg-list",{attrs:{showCheckBox:!1,IsShowAction:!1,listType:["List"],ModuleName:"Asset",SubModuleCode:"Asset",IdentityColumn:"ASSET_CATALOGUE_ID",HeaderText:"Asset Management",widgets:t.widgets,ListData:t.PendingRequestData,HeaderData:t.Header,callbackfunction:t.RequsitionPending,LegendArray:t.LegendArray,SearchFields:t.leftSearchFields,SortExp:t.SortExp,SortBy:t.SortBy,NorecordfoundText:t.$t("NorecordfoundText"),TotalRecords:t.TotalRecord,RenderRowActionMethod:t.renderActions,ListDataCallBackFunction:t.RequsitionPending},on:{PagerButtonClick:t.pagerMethod,HeaderButtonClick:t.commonHeaderButtonClick,SortdataButtonClick:t.sortdata},scopedSlots:t._u([{key:"slotdata",fn:function({data:a}){return["FROM_TIME"==a.column.COLUMN_NAME?[e("span",{staticClass:"text-dark center-icon",attrs:{title:a.column.COLUMN_NAME}},[t._v(" "+t._s(t.$options.filters.formatDateTime(a.row.FROM_TIME))+" ")])]:t._e(),"TO_TIME"==a.column.COLUMN_NAME?[e("span",{staticClass:"text-dark center-icon",attrs:{title:a.column.COLUMN_NAME}},[t._v(" "+t._s(t.$options.filters.formatDateTime(a.row.TO_TIME))+" ")])]:t._e(),"CREATED_AT"==a.column.COLUMN_NAME?[e("span",{staticClass:"text-dark center-icon",attrs:{title:a.column.COLUMN_NAME}},[t._v(" "+t._s(t.$options.filters.formatDateTime(a.row.CREATED_AT))+" ")])]:t._e(),"IS_ASSIGNED"==a.column.COLUMN_NAME?[e("span",{staticClass:"text-dark center-icon",attrs:{title:a.column.COLUMN_NAME}},[e("em",{staticClass:"fa fa-reply fa-lg action-icon text-success",on:{click:function(e){return t.IsAssigned(a.row.REQUISITION_BATCH_ID)}}})])]:t._e(),"Reject"==a.column.COLUMN_NAME?[e("span",{staticClass:"text-dark center-icon",attrs:{title:a.column.COLUMN_NAME}},[e("em",{staticClass:"fa fa-times-circle fa-lg action-icon text-danger",on:{click:function(e){return t.RequsitionReject(a.row)}}})])]:t._e()]}}],null,!0)})],1):t._e(),3==a.id?e("div",{staticClass:"listing mb-3"},[e("tg-list",{attrs:{showCheckBox:!0,IsShowAction:!1,listType:["List"],ModuleName:"Asset",SubModuleCode:"Asset",IdentityColumn:"RelatedInfoId",HeaderText:"Asset Management",widgets:t.widgets,ListData:t.ProductAssignment,HeaderData:t.Headers,callbackfunction:t.ProductAssignments,LegendArray:t.LegendArray,SortExp:t.SortExp,SortBy:t.SortBy,NorecordfoundText:t.$t("NoRecordfound"),HeaderButtons:t.listheaderbuttons,TotalRecords:t.TotalRecords,SearchFields:t.leftSearchFields,RenderRowActionMethod:t.renderActions,ListDataCallBackFunction:t.ProductAssignments},on:{PagerButtonClick:t.pagerMethod,HeaderButtonClick:t.commonHeaderButtonClick}})],1):t._e()])]),e("div")])}))],2),e("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 text-right px-0 float-left"},[e("em",{staticClass:"btn btn-success text-white mr-2",attrs:{disabled:1===t.activeTab,value:"Previous",title:"Previous",name:"Previous"},on:{click:t.previousTab}},[e("i",{staticClass:"fa fa-angle-double-left pr-2"}),e("span",[t._v("Previous")])]),e("em",{staticClass:"btn btn-primary text-white",attrs:{disabled:t.activeTab===t.tabs.length,value:"Next",title:"Next",name:"btnNext"},on:{click:t.nextTab}},[e("span",[t._v("Next")]),e("i",{staticClass:"fa fa-angle-double-right pl-2"})]),e("input",{attrs:{type:"hidden",id:"getValue",value:"ViewBag.Getvalue"}})])]),t.IscheckReject?e("RequsitionRejectModal",{attrs:{RejectData:t.RejectData},on:{ClosePOPuP:t.ClosePOPuP}}):t._e()],1)},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-12 mb-2 px-0 ml-2"},[e("div",{staticClass:"mr-2 d-inline-block"},[e("span",{staticClass:"colorboxsquare",staticStyle:{"background-color":"red"}}),t._v(" Overdue ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"expand-list"},[e("em",{staticClass:"expand-list-btn justify-content-center align-items-center",attrs:{href:"javascript:;"}},[e("i",{staticClass:"icon-solid arrow-solid-left",staticStyle:{"font-size":"9pt"}})])])}],o=(a("14d9"),a("1115")),n=a("2d4e"),r={Prop:{},components:{RequsitionRejectModal:n["a"]},data(){return{relatedInfoID:"",barcodeNumber:"",ProductInformation:[],PendingRequestData:[],ProductAssignment:[],activeTab:1,searchcondition:"",noRecord:!0,TotalRecords:0,CurrentPage:1,TotalPages:0,SortBy:"",SortExp:"",pageSize:10,pageNumber:1,pageNum:1,isLoading:!1,IscheckReject:!1,uIds:"",catId:"",batchId:"",tabs:[{id:1,title:"Product Information"},{id:2,title:"Pending Check Out List"},{id:3,title:"Product Assignment"}],navheading:"Product Information",Headerstext:"Pending Request",Headers:[{COLUMN_NAME:"NAME",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Product Name",DISPLAY_ORDER:1},{COLUMN_NAME:"ITEM_CODE",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Product Code",DISPLAY_ORDER:2},{COLUMN_NAME:"UNIQUE_NAME",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Unique Name",DISPLAY_ORDER:3},{COLUMN_NAME:"NUMBER_OF_ITEMS_ASSIGNED",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Number Of Products",DISPLAY_ORDER:4,settings:{isInSlot:!0}},{COLUMN_NAME:"LOCATION_NAME",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Location Name",DISPLAY_ORDER:5},{COLUMN_NAME:"ISSUED_TO",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"IssuedTo",DISPLAY_ORDER:6},{COLUMN_NAME:"ISSUED_BY",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"IssuedBy",DISPLAY_ORDER:7},{COLUMN_NAME:"ASSIGNED_FROM",DATA_TYPE:"Date",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Assigned From",DISPLAY_ORDER:8,settings:{isInSlot:!0}},{COLUMN_NAME:"ASSIGNED_TILL",DATA_TYPE:"Date",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Assigned Till",DISPLAY_ORDER:9,settings:{isInSlot:!0}},{COLUMN_NAME:"RETURN_DATE",DATA_TYPE:"Date",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Return Date",DISPLAY_ORDER:10,settings:{isInSlot:!0}}],Header:[{COLUMN_NAME:"ITEM_UNIQUE_NAME",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("ProductName"),DISPLAY_ORDER:1},{COLUMN_NAME:"FROM_TIME",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("FromTime"),DISPLAY_ORDER:2,settings:{isInSlot:!0}},{COLUMN_NAME:"TO_TIME",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("ToTime"),DISPLAY_ORDER:3,settings:{isInSlot:!0}},{COLUMN_NAME:"USER_NAME",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("CheckOutRequestBy"),DISPLAY_ORDER:4},{COLUMN_NAME:"CREATED_AT",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("CheckOutRequestDate"),DISPLAY_ORDER:5,settings:{isInSlot:!0}},{COLUMN_NAME:"IS_ASSIGNED",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("Assign"),DISPLAY_ORDER:6,settings:{isInSlot:!0}},{COLUMN_NAME:"Reject",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("Reject"),DISPLAY_ORDER:7,settings:{isInSlot:!0}}]}},created:function(){var t=this;t.relatedInfoID=window.location.href.split("/")[5],t.FetchData()},methods:{Assign:function(t){this.$router.push({name:"AddAssetAssignment",params:{reqForm:"pendingRequest"}})},SortByClick:function(t,e){var a=this;1==e||4==e?(a.SortBy=t,a.SortExp="ASC"==a.SortExp?"DESC":"ASC",a.FetchData()):2==e?(this.SortBy=t,a.SortExp="ASC"==a.SortExp?"DESC":"ASC",a.GetAssetReplacement()):(this.SortBy=t,a.GetAssetReturnRequestList())},changeTab(t){var e=this;1==t?(e.navheading="Product Information",e.Headerstext="Product Information",e.FetchData()):2==t?(e.navheading="Pending Check Out List",e.SortBy="",e.SortExp="",e.Headerstext="Pending Check Out List",e.RequsitionPending()):(e.navheading="Product Assignment",e.SortBy="",e.SortExp="",e.Headerstext="Product Assignment",e.ProductAssignments())},previousTab(){this.activeTab>1&&(this.activeTab--,this.changeTab(this.activeTab))},nextTab(){this.activeTab<=this.tabs.length-1&&(this.activeTab++,this.changeTab(this.activeTab))},FetchData(){var t=this;t.isLoading=!0,""!=t.barcodeNumber&&null!=t.barcodeNumber?(t.barcodeNumber,t.relatedInfoID="",t.isLoading=!1):(t.relatedInfoID,t.barcodeNumber="",t.isLoading=!1);var e=`barcodeNumber=${t.barcodeNumber}&relatedInfoId=${t.relatedInfoID}`;o["a"].GetCatalogInfoByBarcode(e).then(e=>{null!=e.data?(t.pageSize,t.ProductInformation=e.data,t.noRecord=!1,t.isLoading=!1):(t.noRecord=!0,t.ProductInformation=[],t.isLoading=!1)})},Search:function(){1==this.activeTab?this.FetchData():2==this.activeTab?this.RequsitionPending():this.ProductAssignments()},Clear:function(){this.barcodeNumber="",this.changeTab(this.activeTab)},pagerMethod:function(t){this.pageSize=t.pageSize,this.PageNumber=t.PageNumber,this.FetchData()},RequsitionPending(){var t=this;t.isLoading=!0;const e=this.getRequestParamsPending(this.pageNum,this.pageSize,this.sortBy,this.sortExp,this.uIds,this.catId,this.batchId,this.relatedInfoID,this.barcodeNumber);e.pageNum=t.PageNum,t.PageNum?e.pageNum=t.PageNum:t.PageNum=e.pageNum=1,e.pageSize=t.pageSize,e.sortBy=t.sortBy,e.sortExp=t.sortBy,e.uIds=t.uIds,e.catId=t.catId,e.batchId=t.batchId,""!=t.barcodeNumber&&null!=t.barcodeNumber?(e.barcode=t.barcodeNumber,e.relatedInfoID=""):(e.searchCondition="",e.relatedInfoID=t.relatedInfoID),o["a"].RequsitionPendingList(e).then(e=>{null!=e.data&&(e.data.length>0?(t.PendingRequestData=JSON.parse(e.data),t.PendingRequestData.forEach(t=>{t.additionalClass="",t.ISEXPIRED&&(t.additionalClass="high-profile-bar")}),t.TotalRecord=t.PendingRequestData[0].TOTAL_PAGES,t.TotalPage=Math.ceil(t.TotalRecord/t.PageSize),t.CurrentPage=t.PageNumber,t.noRecord=!1,t.isLoading=!1):(t.noRecord=!0,t.PendingRequestData=[],t.TotalRecord=0,t.isLoading=!1)),setTimeout((function(){vueObj.CheckBoxBootstrap()}),100),setTimeout((function(){vueObj.ResponsiveDataTable("tablelistingdata")}),500)})},IsAssigned:function(t){var e=this;o["a"].CheckPrivilege("controller=AssetAssignment&action=BarcodeSearch").then(t=>{t.data?this.$router.push({name:"AddAssetAssignment",params:{reqForm:"pendingRequest"}}):e.ShowAlert(e.$t("NotAuthorizedSection"),"failure",!0,"Alert")})},RequsitionReject:function(t){var e=this;o["a"].CheckPrivilege("controller=AssetAssignment&action=BarcodeSearch").then(a=>{a.data?(e.IscheckReject=!0,e.RejectData=t):e.ShowAlert(e.$t("NotAuthorizedSection"),"failure",!0,"Alert")})},ClosePOPuP:function(){var t=this;t.IscheckReject=!1},getRequestParamsPending:function(t,e,a,s,i,o,n,r,c){let l={};return t&&(l["pageNum"]=t),e&&(l["pageSize"]=e),a&&(l["sortBy"]=a),s&&(l["sortExp"]=s),i&&(l["uIds"]=i),o&&(l["catId"]=o),n&&(l["batchId"]=n),r&&(l["relatedInfoId"]=r),c&&(l["barcode"]=c),l},getRequestParams:function(t,e,a,s,i,o,n){let r={};return t&&(r["pageNum"]=t),o&&(r["searchcondition"]=o),i&&(r["isPaged"]=i),a&&(r["sortBy"]=a),s&&(r["sortExp"]=s),e&&(r["pageSize"]=e),n&&(r["relatedInfoID"]=n),r},ProductAssignments(){var t=this;t.isLoading=!0;const e=this.getRequestParams(this.pageNum,this.pageSize,this.sortBy,this.sortExp,this.isPaged,this.searchcondition,this.relatedInfoID);e.pageSize=t.pageSize,e.pageNumber=t.PageNumber,e.searchCondition=t.searchCondition,t.PageNumber?e.pageNumber=t.PageNumber:t.PageNumber=e.pageNumber=1,"undefined"!=typeof t.isPaged?e.isPaged=t.isPaged:t.isPaged=e.isPaged=1,e.isPaged=t.isPaged,e.sortBy=t.SortBy,e.sortExp=t.SortExp;t.isBlank(t.searchCondition)||t.searchCondition,t.isBlank(t.conditionForInstantSearch)||(t.isBlank(t.searchCondition)?t.conditionForInstantSearch:t.conditionForInstantSearch),""!=t.barcodeNumber&&null!=t.barcodeNumber?(e.searchCondition="(RI.barcode_number LIKE '''%'"+t.barcodeNumber+"'%''')",e.relatedInfoID=""):(e.searchCondition="",e.relatedInfoID=t.relatedInfoID),o["a"].AssetAssignmentListing(e).then(e=>{t.isLoading=!1,null!=e.data&&0!=e.data&&e.data.data.length>0?(t.ProductAssignment=e.data.data,t.TotalRecords=e.data.data[0].TOTAL,t.TotalPages=Math.ceil(t.TotalRecords/t.pageSize),t.CurrentPage=t.PageNumber,t.noRecord=!1,t.isLoading=!1):(t.noRecord=!0,t.ProductAssignment=[],t.TotalRecords=0,t.isLoading=!1),setTimeout((function(){t.CheckBoxBootstrap()}),100),setTimeout((function(){t.ResponsiveDataTable("tablelistingdata")}),500)})},commonHeaderButtonClick(){}}},c=r,l=(a("e60f"),a("2877")),d=Object(l["a"])(c,s,i,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-0274aa50.js.map