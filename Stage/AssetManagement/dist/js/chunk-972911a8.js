(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-972911a8"],{"0ced":function(t,e,a){var s=a("a8ef");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var i=a("499e").default;i("62c870c0",s,!0,{sourceMap:!1,shadowMode:!1})},1470:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("section",[e("tg-list",{attrs:{IsShowAction:!1,showCheckBox:!1,listType:["List"],ModuleName:"Asset",SubModuleCode:"Asset",IdentityColumn:"ASSET_CATALOGUE_ID",HeaderText:"Transferred List",ListData:t.TransfredList,HeaderData:t.Headers,widgets:t.widgets,callbackfunction:t.FetchData,HeaderButtons:t.listheaderbuttons,TotalRecords:t.TotalRecords,SearchFields:t.leftSearchFields,RenderRowActionMethod:t.renderActions,ListDataCallBackFunction:t.FetchData,LegendArray:t.LegendArray,SortExp:t.SortExp,SortBy:t.SortBy},on:{LeftsearchButtonClick:t.leftCommonSearch,PagerButtonClick:t.pagerMethod,HeaderButtonClick:t.commonHeaderButtonClick,ActionButtonClick:t.actionButtonClick,SortdataButtonClick:t.sortdata},scopedSlots:t._u([{key:"slotdata",fn:function({data:a}){return["transfeR_QUANTITY"==a.column.COLUMN_NAME?[e("span",{staticClass:"text-dark",attrs:{title:a.row.NUMBER_OF_ITEM}},[e("i",{staticClass:"fa fa-list",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"noti-circle noti-blue"},[t._v(t._s(a.row[a.column.COLUMN_NAME]))])])]:t._e(),"description"==a.column.COLUMN_NAME?[e("span",{staticClass:"text-dark",attrs:{title:a.row.NUMBER_OF_ITEM}},[e("a",{attrs:{href:"javascript:;","data-original-title":"Comments"},on:{click:function(e){return t.OpenCommentpopup(a.row)}}},[e("em",{staticClass:"fa fa-eye text-info"})])])]:t._e()]}}])}),t.Commentpopup?e("DescriptionPopUp",{attrs:{assetTransferdetailId:t.assetTransferdetailId,assetTransferBatchId:t.assetTransferBatchId,description:t.description,relatedInfoId:t.relatedInfoId},on:{ClosePopup:t.ClosePopup}}):t._e()],1)},i=[],n=(a("14d9"),a("1115"));let o=[{title:"In-Transit Products",iconClass:"fa fa-recycle",callbackfunction:"ViewInTransitItems",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1},{title:"Back to list",iconClass:"fa fa-angle-double-left pr-2",callbackfunction:"BackTolist",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1}],r=[{fieldName:"Location From",fieldType:"ddl-multilevel",fieldIcon:"fa fa-map-marker",paramName:"LocationIdFrom",fieldSearchConditionName:[""],isSearch:!1,value:null,listOptions:[]},{fieldName:"Location TO",fieldType:"ddl-multilevel",fieldIcon:"fa fa-map-marker",paramName:"LocationId",fieldSearchConditionName:[""],isSearch:!1,value:null,listOptions:[]},{fieldName:"Product Name",fieldType:"text",fieldIcon:"fa fa-suitcase",paramName:"search",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]}],l=[{title:"View attached file(s)",callbackfunction:"",href:"javascript:void(0)",icon:"fa fa-download text-secondary action-icon",additionalSpan:"",isVisible:!0}];async function c(t,e,a){var s=t,i=[],o=[];if("Location"==a){var r="reqForm=";await n["a"].GetLocationByCompanyId(r).then((function(t){var e=JSON.parse(t.data).data;e.forEach(e=>{var a=i.filter((function(t){return t.COMPANY_LOCATION_ID==e.COMPANY_LOCATION_ID}));if(0==a.length&&null==e.PARENT_LOCATION_ID){let a=e.COMPANY_LOCATION_ID,s=d(a,e,JSON.parse(t.data).data);i.push(s)}}),s.leftSearchFields[0].listOptions=i,s.leftSearchFields[1].listOptions=i}))}if("Tag"==a){r="modulename="+e;await n["a"].GetTagsByModuleId(r).then((function(t){if("Tag"==a){let e={};JSON.parse(t.data).data.forEach(t=>{e={name:t.TAG_NAME,value:t.TAG_ID},o.push(e)}),s.leftSearchFields[3].listOptions=o}}))}if("Status"==a){r="langCode=en&statusType=AssetManagement&hasglobal=true";await n["a"].GetStatusList(r).then((function(t){if("Status"==a){let e={};JSON.parse(t.data).data.forEach(t=>{e={name:t.STATUS,value:t.STATUS_ID},o.push(e)}),s.leftSearchFields[2].listOptions=o}}))}}function d(t,e,a){let s={};s={id:e.COMPANY_LOCATION_ID,label:e.LOCATION_NAME};let i=s;var n=a.filter((function(e){return e.PARENT_LOCATION_ID==t}));let o=[];return n.forEach(t=>{let e=t.COMPANY_LOCATION_ID;var i=o.filter((function(e){return e.COMPANY_LOCATION_ID==t.COMPANY_LOCATION_ID}));if(0==i.length){var n=a.filter((function(t){return t.PARENT_LOCATION_ID==e}));if(null!=n&&n.length>0){let s=d(e,t,a);o.push(s)}else s={id:""+t.COMPANY_LOCATION_ID,label:""+t.LOCATION_NAME},o.push(s)}}),i.children=o,i}var u={buttons:o,leftsearchSchema:r,listActions:l,bindleftCommonSearchdropdown:c},m=a("5f25"),p={components:{DescriptionPopUp:m["a"]},data(){return{View_List:[],listheaderbuttons:u.buttons,leftSearchFields:u.leftsearchSchema,listActions:u.listActions,LegendArray:[],TransfredList:[],PageSize:10,PageNumber:1,PageSizeOption:null,StatusListForListing:[],Headers:[{COLUMN_NAME:"name",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Product Name",DISPLAY_ORDER:1},{COLUMN_NAME:"iteM_CODE",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Product Code",DISPLAY_ORDER:2},{COLUMN_NAME:"sourcE_LOCATION_NAME",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Location From",DISPLAY_ORDER:3},{COLUMN_NAME:"destinatioN_LOCATION_NAME",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Location To",DISPLAY_ORDER:4},{COLUMN_NAME:"transfeR_QUANTITY",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Shipped Quantity",DISPLAY_ORDER:3,settings:{isInSlot:!0}},{COLUMN_NAME:"accepteD_QUANTITY",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Accepted",DISPLAY_ORDER:6},{COLUMN_NAME:"rejecteD_QUANTITY",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Rejected",DISPLAY_ORDER:7},{COLUMN_NAME:"disputeD_QUANTITY",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Disputed",DISPLAY_ORDER:8},{COLUMN_NAME:"shippeD_BY",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Shipped By",DISPLAY_ORDER:8},{COLUMN_NAME:"description",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Comments",DISPLAY_ORDER:8,settings:{isInSlot:!0}}],noRecord:!0,TotalRecords:0,CurrentPage:1,TotalPages:0,SortBy:"",SortExp:"",catalogId:"",legendProgress:[{class:"",backgroundColor:"#17a2b8",name:"Draft"},{class:"legend-Progress",backgroundColor:"",name:"Approved"},{class:"legend-pending",backgroundColor:"",name:"Pending"},{class:"",backgroundColor:"#fe6847",name:"SendForCorrection"},{class:"",backgroundColor:"#ee1313",name:"Rejected"}],IsShowRelation:!1,ShowClonePopup:!1,ShowCheckAvailablity:!1,ShowAddProduct:!1,StatusIds:"",disputedVal:"",dateFormat:"",Commentpopup:!1,assetTransferdetailId:"",assetTransferBatchId:"",itemName:"",OperationCode:"",relatedInfoId:"",description:""}},created:async function(){var t=this;await t.FetchData(),u.bindleftCommonSearchdropdown(t,"Asset","Location"),u.bindleftCommonSearchdropdown(t,"Asset","Tag"),u.bindleftCommonSearchdropdown(t,"Asset","Status"),t.LegendArray=[{class:"legend-Progress colorboxsquare",text:"Uniquely named products"}]},methods:{columnDataFormatter:function(t,e){return t[e.COLUMN_NAME]},async FetchData(){var t=this,e=`dateFormat=${t.dateFormat}&pageSize=${t.PageSize}&pageNum=${t.PageNumber}&sortBy=${t.SortBy}&sortExp=${t.SortExp}&statusIds=${t.StatusIds}&disputedVal=${t.disputedVal}&${t.searchCondition}`;await n["a"].GetTransferedItemsList(e).then(e=>{null!=e.data&&(console.log("res",e.data),e.data.length>0?(t.TransfredList=e.data,t.TransfredList.forEach(t=>{t.additionalClass="",t.disputeD_QUANTITY>0||1==t.haS_UNIUQE_NAMES&&(t.additionalClass="low-bar odd"),1==t.IsSampleData&&(className="sample-bar")}),t.TotalRecords=e.data[0].total,t.TotalPages=Math.ceil(t.TotalRecords/t.PageSize),t.CurrentPage=t.PageNumber,t.noRecord=!1):(t.noRecord=!0,t.ProductData=[],t.TotalRecords=0)),setTimeout((function(){t.ResponsiveDataTable("tablelistingdata")}),500)})},leftCommonSearch:function(t){this.PageNumber=t.PageNumber,this.isPaged=1,"undefined"!=typeof t.searchCondition?this.searchCondition=t.searchConditionJson:this.searchCondition="",this.FetchData()},currentPageMethod:function(t){this.PageSize=t.PageSize,this.PageNumber=t.PageNumber,this.FetchData()},GetPageSizeOption:function(){for(var t=[],e=10,a=e;a<e+95;a+=5)t.push(a);this.PageSizeOption=t},pagerMethod:function(t){this.PageSize=t.PageSize,this.PageNumber=t.PageNumber,this.FetchData()},commonHeaderButtonClick(t){switch(t.callbackfunction){case"BackTolist":this.BackTolist();break;case"ViewInTransitItems":this.MoveToViewInTransitItems();break}},OpenCommentpopup(t){var e=this;e.relatedInfoId=t.relateD_INFO_ID,e.assetTransferdetailId=t.asseT_TRANSFER_DETAILS_ID,e.assetTransferBatchId=t.asseT_TRANSFER_BATCH_ID,e.description=t.name,e.Commentpopup=!0},ClosePopup:function(){var t=this;t.Commentpopup=!1},BackTolist(){this.$router.push({name:"ProductListing"})},MoveToViewInTransitItems(){this.$router.push({name:"ViewInTransitItems"})},sortdata:function(t){var e="sort tb_headerSortDown";this.SortBy=t,t===this.SortBy&&(""==this.SortExp?(this.SortExp="ASC",e="sort tb_headerSortDown"):"ASC"==this.SortExp?(this.SortExp="DESC",e="sort tb_headerSortUp"):(this.SortExp="ASC",e="sort tb_headerSortDown")),this.FetchData(),$("#"+t+"  span:first-child").attr("class",e)},renderActions(t){var e=this;let a=[];return e.listActions.forEach(t=>{let e={...t};switch(e.title){case"Edit":e.isVisible=!0;break;case"Clone":e.isVisible=!0;break;case"Detail Products History":e.isVisible=!0;break;case"View attached file(s)":e.isVisible=!0;break;default:e.isVisible=!0;break}a.push(e)}),a}}},h=p,f=(a("714f"),a("2877")),C=Object(f["a"])(h,s,i,!1,null,null,null);e["default"]=C.exports},"5f25":function(t,e,a){"use strict";var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-popups"},[e("div",{staticClass:"modal d-block"},[e("div",{staticClass:"modal-dialog modal-dialog-centered"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[t._v(" Description : "+t._s(t.description)+" ")]),e("button",{staticClass:"close",attrs:{type:"button","data-original-title":"Close"},on:{click:function(e){return t.ClosePopup(e)}}},[e("em",{staticClass:"fa fa-times"})])]),e("div",{staticClass:"modal-body"},[t.isCommentAvailable?t._e():e("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 px-2"},[e("div",{staticClass:"border p-3"},[e("dynamic-form",{attrs:{lang:"en",buttons:t.buttons,schema:t.FormSchema},on:{OnSubmit:t.onSubmit}}),t.isFormSubmitted?e("span",{staticClass:"mandatory"},[t._v(t._s(t.$t("MandatoryString")))]):t._e()],1)]),t.isCommentAvailable?e("div",{staticClass:"col-lg-12"},[e("div",{},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 text-center text-danger no_records"},[t._v(" "+t._s(t.$t("NoRecordfound"))+" ")])])])]):t._e(),t.isCommentAvailable?t._e():e("div",{staticClass:"listing",staticStyle:{"max-height":"465px","overflow-y":"auto"},attrs:{id:"CommentsData"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"w-100 activity-tab",attrs:{id:"accordion"}},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"conversation-main"},t._l(t.viewTransistData,(function(a,s){return e("div",{key:s,staticClass:"d-flex w-100 me-3"},[""!=a.comment?[e("div",{staticClass:"conversation-time"},[e("span",[t._v(t._s(t.$options.filters.formatTimeFromDateTime(a.standardtUsertm)))])]),e("div",{staticClass:"conversation-box-con"},[e("div",{staticClass:"conversation-box"},[t._m(0,!0),e("div",{staticClass:"conversation-header addednote-ticket"},[e("span",{staticClass:"sender-department",staticStyle:{"margin-left":"10px"}},[e("span",{staticClass:"sender-name"}),e("p",[a.comment.length>1?e("span",{attrs:{id:"more-49"}},[t._v(" "+t._s(a.comment)+" "),e("br")]):a.comment.length<49?e("span",{staticStyle:{display:"none"},attrs:{id:"less-49"}},[e("br"),e("a",{staticClass:"font12 readLessLink comments editbtn pullleft",attrs:{value:"49",href:"javascript:;",title:"less"}},[t._v(" less ")])]):t._e()])])]),null!=a.catalogueName?e("div",{staticClass:"conversation-content"},[e("div",{staticClass:"col-12 p-0 notesdata"},[e("h6",{staticClass:"text-muted time"},[e("i",[e("b",[t._v(" "+t._s(t.$t("PRODUCT_NAME"))+":")]),t._v(" "),e("span",{staticClass:"text-danger"},[t._v(t._s(a.catalogueName))])])])])]):t._e(),null!=a.disputed_category?e("div",{staticClass:"conversation-content"},[e("div",{staticClass:"col-12 p-0 notesdata"},[e("h6",{staticClass:"text-muted time"},[e("i",[e("b",[t._v(" "+t._s(t.$t("category_name"))+":")]),t._v(" "),e("span",{staticClass:"text-danger"},[t._v(t._s(a.disputed_category))])])])])]):t._e(),e("div",{staticClass:"conversation-content"},[e("div",{staticClass:"col-12 p-0 notesdata"},[e("h6",{staticClass:"text-muted time"},[e("i",[e("b",[t._v(" "+t._s(t.$t("Status"))+":")]),t._v(" "),e("span",{staticClass:"text-danger"},[t._v(t._s(a.operation_code))])])])])]),e("div",{staticClass:"conversation-content"},[e("div",{staticClass:"col-12 p-0 notesdata"},[e("h6",{staticClass:"text-muted time"},[e("i",[e("b",[t._v(t._s(a.created_by))]),t._v(", "+t._s(t.$t("PostedOn"))+": "),e("span",{staticClass:"text-danger",attrs:{title:""}},[t._v(t._s(t.$options.filters.formatDate(a.created_at))+" "+t._s(a.postedTime))])])])])]),null!=a.disputed_category?e("div",{staticClass:"conversation-content"},[e("div",{staticClass:"col-12 p-0 notesdata"},[e("h6",{staticClass:"text-muted time"},[e("em",[e("b",[t._v(t._s(t.$t("DisputeDate")))]),t._v(" "),e("span",{staticClass:"text-danger"},[t._v(t._s(t.$options.filters.formatDate(a.disputed_date)))])])])])]):t._e()])])]:t._e()],2)})),0)])])])])])])])])])])])},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"name-circle"},[e("img",{staticClass:"img-circle w-100 avatar",attrs:{src:"/Content/images/DefaultImages/avatar-icon.jpg",alt:"Image"}})])}],n=a("1115"),o={props:{assetTransferdetailId:Number,assetTransferBatchId:Number,itemName:String,description:String},data(){return{viewTransistData:[],disputeFields:!0,InputTypeStatus:!1,relatedInfoId:0,locationId:0,isCommentAvailable:!1,isFormSubmitted:!0,FormSchema:[{layoutType:"single",Data:[{astype:"SelectField",label:this.$t("Category"),name:"Category",value:"",placeholder:"",visibility:!0,validationRules:{required:!0},config:{options:[{value:"RESOLVED",name:"Resolved"},{value:"PENDING",name:"Pending"},{value:"OTHER",name:"Other"}],onChange:this.changeField}}]},{layoutType:"single",Data:[{astype:"SelectField",label:this.$t("Status"),name:"Status",value:"",visibility:!1,validationRules:{required:!0},placeholder:"",config:{options:[{value:"Lost",name:"Lost/Stolen"},{value:"Damaged",name:"Damaged"},{value:"Receivedatdestination",name:"Received at destination"},{value:"Returntosource",name:"Return to source"}]}}]},{layoutType:"single",Data:[{astype:"TextAreaField",label:this.$t("Comment"),name:"Comment",value:"",placeholder:"",validationRules:{required:!0}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save",visibility:!0},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Clear All",onClick:this.onCancel,visibility:!0},{type:"button",class:"btn btn-primary",visibility:!1,value:"1",text:"<i class='fa fa-close pr-2'></i>ReOpen All",onClick:this.ReopenButton}]}},created(){this.GetTransistData()},methods:{changeField(t){var e=this;"RESOLVED"==e.FormSchema[0].Data[0].value?e.FormSchema[1].Data[0].visibility=!0:e.FormSchema[1].Data[0].visibility=!1},ReopenButtonClick:function(){vm=this,vm.disputeFields=!1},ReopenButton:function(t){var e=this;"RESOLVED"==e.viewTransistData[0].operation_code?(e.buttons[2].visibility=!0,e.FormSchema[0].Data[0].visibility=!0,e.FormSchema[2].Data[0].visibility=!0,e.buttons[1].visibility=!0,e.buttons[0].visibility=!0,e.buttons[0].class="btn btn-success ",e.buttons[1].class="btn btn-danger",e.buttons[2].class="btn btn-primary d-none"):(e.buttons[2].class="btn btn-primary",e.buttons[0].class="btn btn-success  d-none",e.buttons[1].class="btn btn-danger d-none")},HideShowButtons(){var t=this;"RESOLVED"==t.viewTransistData[0].operation_code?(t.FormSchema[0].Data[0].visibility=!1,t.FormSchema[2].Data[0].visibility=!1,t.buttons[0].class="btn btn-success d-none",t.buttons[1].class="btn btn-danger d-none",t.buttons[2].class="btn btn-primary",t.isFormSubmitted=!1):(t.FormSchema[0].Data[0].visibility=!0,t.FormSchema[2].Data[0].visibility=!0,t.buttons[2].class="btn btn-primary d-none",t.buttons[0].class="btn btn-success",t.buttons[1].class="btn btn-danger",t.isFormSubmitted=!0)},GetTransistData(){var t=this,e=`relatedInfoId=${t.relatedInfoId}&locationId=${t.locationId}&itemName=${t.itemName}&assetTransferDetailId=${t.assetTransferdetailId}&assetTransferBatchId=${t.assetTransferBatchId}`;n["a"].GetViewCommentData(e).then(e=>{e.data&&(t.viewTransistData=e.data,t.checkCommentEmpty(),this.HideShowButtons())})},checkCommentEmpty:function(){var t=this;let e=0,a=0;t.viewTransistData.forEach(t=>{e=++e,""==t.comment&&(a=++a)}),t.isCommentAvailable=e==a},ClosePopup:function(t){this.$emit("ClosePopup",t)},onCancel:function(){var t=this;t.FormSchema[0].Data[0].value="",t.FormSchema[1].Data[0].value="",t.FormSchema[2].Data[0].value="",t.FormSchema[3].Data[0].value=""},onSubmit:function(t){var e=this;e.isLoading=!0;const a={RelatedInfoId:e.relatedInfoId,OperationCode:t.Category,Comment:t.Comment,Status:t.Status,ASSET_TRANSFER_BATCH_ID:e.assetTransferBatchId,ASSET_TRANSFER_DETAILS_ID:e.assetTransferdetailId};JSON.stringify(a);n["a"].ResolveDisputeProduct(a).then(t=>{1==t.data?(e.ShowAlert(e.$t("Resolve Disputed Product successfully"),"success",e.$t("Alert")),e.ClosePopup(),e.isLoading=!1):(e.isLoading=!1,e.ShowAlert(e.$t("Error while returning item."),"warning",e.$t("Alert")))})}}},r=o,l=a("2877"),c=Object(l["a"])(r,s,i,!1,null,null,null);e["a"]=c.exports},"714f":function(t,e,a){"use strict";a("0ced")},a8ef:function(t,e,a){var s=a("24fb");e=s(!1),e.push([t.i,".vue-treeselect--searchable .vue-treeselect__input-container{padding:0!important}",""]),t.exports=e}}]);
//# sourceMappingURL=chunk-972911a8.js.map