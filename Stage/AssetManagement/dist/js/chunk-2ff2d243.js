(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ff2d243"],{4555:function(t,e,a){"use strict";var s=function(){var t=this,e=t._self._c;return t.TotalPages>0?e("div",{staticClass:"nu-paging"},[e("nav",{attrs:{"aria-label":"Page navigation example col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left"}},[e("ul",{staticClass:"pagination row"},[e("li",{staticClass:"col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left choose-page"},[e("span",{staticClass:"mr-2"},[t._v("Show")]),e("span",{staticClass:"select"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.PageSize,expression:"PageSize"}],staticClass:"form-control form-control-sm",attrs:{id:"pageSize",name:"pageSize"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.PageSize=e.target.multiple?a:a[0]},t.SetPageSize]}},t._l(t.PageSizeOption,(function(a,s){return e("option",{key:s,domProps:{value:a}},[t._v(t._s(a)+" ")])})),0)]),e("span",{staticClass:"ml-2"},[t._v(t._s(t.$t("PagingText",[(t.CurrentPage-1)*t.PageSize+1,t.PageSize*t.CurrentPage>t.TotalRecords?t.TotalRecords:t.PageSize*t.CurrentPage,t.TotalRecords])))])]),e("li",{staticClass:"col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"},[t.TotalPages>1?e("ul",{staticClass:"paging-count"},[e("li",{staticClass:"page-item"},[1!=t.CurrentPage?e("a",{staticClass:"page-link first",attrs:{title:t.firstText,href:"javascript:;",val:"1"},on:{click:function(e){return t.SetCurrentPage(1)}}},[t._v(t._s(t.firstText))]):t._e(),1==t.CurrentPage?e("a",{staticClass:"page-link first disabled",attrs:{title:t.firstText,val:"1"}},[t._v(t._s(t.firstText))]):t._e()]),e("li",{staticClass:"page-item"},[1!=t.CurrentPage?e("a",{staticClass:"page-link previous",attrs:{title:t.prevText,href:"javascript:;"},on:{click:function(e){return t.SetCurrentPage(t.CurrentPage-1)}}},[t._v(t._s(t.prevText))]):t._e(),1==t.CurrentPage?e("a",{staticClass:"page-link previous disabled",attrs:{title:t.prevText}},[t._v(t._s(t.prevText))]):t._e()]),t._l(t.TotalPages,(function(a,s){return[a>=t.GroupStart&&a<=t.GroupEnd?e("li",{key:s,staticClass:"page-item"},[s+1==t.CurrentPage?e("a",{staticClass:"page-link active",attrs:{href:"javascript:;"}},[t._v(t._s(s+1))]):t._e(),s+1!=t.CurrentPage?e("a",{staticClass:"page-link",attrs:{href:"javascript:;",val:s},on:{click:function(e){return t.SetCurrentPage(s+1)}}},[t._v(t._s(s+1))]):t._e()]):t._e()]})),e("li",{staticClass:"page-item"},[t.CurrentPage<t.TotalPages?e("a",{staticClass:"page-link next",attrs:{title:t.nextText,href:"javascript:;"},on:{click:function(e){return t.SetCurrentPage(t.CurrentPage+1)}}},[t._v(t._s(t.nextText))]):t._e(),t.CurrentPage>=t.TotalPages?e("a",{staticClass:"page-link disabled next",attrs:{title:t.nextText}},[t._v(t._s(t.nextText))]):t._e()]),e("li",{staticClass:"page-item"},[t.CurrentPage!=t.TotalPages?e("a",{staticClass:"page-link next",attrs:{title:t.lastText,href:"javascript:;",val:t.TotalPages},on:{click:function(e){return t.SetCurrentPage(t.TotalPages)}}},[t._v(t._s(t.lastText))]):t._e(),t.CurrentPage==t.TotalPages?e("a",{staticClass:"page-link next disabled",attrs:{title:t.lastText,val:t.TotalPages}},[t._v(t._s(t.lastText))]):t._e()])],2):t._e()])])])]):t._e()},r=[],i=(a("14d9"),{props:{numberofrecords:{type:Number,required:!0},prevText:{type:String,required:!0},nextText:{type:String,required:!0},firstText:{type:String,required:!0},lastText:{type:String,required:!0},callbackfunction:{type:Function},CurrentPageNumber:{type:Number}},data:function(){return{TotalRecords:0,PageNumber:1,PageSize:10,PageSizeOption:null,CurrentPage:1,TotalPages:10,GroupStart:1,GroupEnd:3,LastPage:!1}},watch:{numberofrecords:function(t){this.CurrentPage>this.PageNumber&&(this.CurrentPage=this.PageNumber),this.TotalRecords=t,this.TotalPages=Math.ceil(this.TotalRecords/this.PageSize),this.TotalPages==this.PageNumber&&this.PageNumber>3?(this.GroupStart=this.PageNumber-2,this.GroupEnd=this.PageNumber):this.TotalPages>this.PageNumber&&this.PageNumber>=3?(this.GroupStart=this.PageNumber-1,this.GroupEnd=this.PageNumber+1):(this.GroupStart=1,this.GroupEnd=3)},CurrentPageNumber:function(t){var e=this;e.CurrentPage=t,1==t&&e.SetCurrentPage(t)}},created:function(){this.GetPageSizeOption()},methods:{GetData:function(){this.$emit("SetCurrentPage",{PageNumber:this.PageNumber,PageSize:this.PageSize}),"undefined"!=typeof this.callbackfunction&&null!=this.callbackfunction&&this.callbackfunction()},SetPageSize:function(t){this.PageSize=t.target.value,this.PageNumber=1,this.CurrentPage=this.PageNumber,this.GroupStart=this.PageNumber,this.GroupEnd=this.PageNumber+2,this.TotalPages=Math.ceil(this.TotalRecords/this.PageSize),this.GetData()},SetCurrentPage:function(t){this.PageNumber=t,this.CurrentPage=t,this.TotalPages==this.PageNumber&&this.PageNumber>3?(this.GroupStart=this.PageNumber-2,this.GroupEnd=this.PageNumber):this.TotalPages>this.PageNumber&&this.PageNumber>=3?(this.GroupStart=this.PageNumber-1,this.GroupEnd=this.PageNumber+1):(this.GroupStart=1,this.GroupEnd=3),this.GetData()},GetPageSizeOption:function(){for(var t=[],e=10,a=e;a<e+95;a+=5)t.push(a);this.PageSizeOption=t}}}),o=i,n=a("2877"),l=Object(n["a"])(o,s,r,!1,null,null,null);e["a"]=l.exports},b62d:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("section",{staticClass:"main-content no-left-bar"},[e("div",{staticClass:"right-content"},[e("div",{staticClass:"col-md-12 p-0"},[e("div",{staticClass:"theme-primary partition"},[e("span",{staticClass:"p-name text-white"},[t._v(t._s(t.$t("ProductsGroupList")))]),e("span",{staticClass:"p-actions float-right"},[e("em",{staticClass:"p-action-btn text-white",attrs:{title:"AddNew"},on:{click:function(e){return t.AddNewGroup(0)}}},[e("em",{staticClass:"fa fa-plus"}),e("br"),t._v(t._s(t.$t("AddNew")))]),e("em",{staticClass:"table-head-btn p-action-btn text-white disabled iconenable",attrs:{title:"DeleteAssetCatalogue",id:"DeleteAssetCatalogue"},on:{click:function(e){return t.DeleteRFID()}}},[e("em",{staticClass:"fa fa-trash"}),e("br"),t._v(t._s(t.$t("Delete"))+" ")])])])]),e("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 searchpanel tablehead search float-left p-0"},[e("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 pt-2 p-0"},[e("div",{staticClass:"col-sm-12 col-md-12 col-lg-6 col-xl-6 float-left"},[e("div",{staticClass:"row mt-0"},[e("div",{staticClass:"col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 float-left pr-1 pl-0"},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.txtsearch,expression:"txtsearch"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search By Group Name",autocomplete:"off",name:"search"},domProps:{value:t.txtsearch},on:{input:function(e){e.target.composing||(t.txtsearch=e.target.value)}}})])]),e("div",{staticClass:"col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 float-left pl-0"},[e("div",{staticClass:"search-btm-btn background-0 text-left m-0"},[e("em",{staticClass:"btn btn-success mr-1 px-4",attrs:{title:"Search"},on:{click:t.SearchData}},[e("em",{staticClass:"fa fa-search text-white"})]),e("em",{staticClass:"btn btn-danger clearsearchtext px-4",attrs:{title:"Clear"},on:{click:t.ResetData}},[e("em",{staticClass:"fa fa-refresh"})])])])])])])]),e("div",{staticClass:"listing mt-2"},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-bordered mt-0",attrs:{id:"itmgrplisting"}},[e("thead",{staticClass:"thead-bg"},[e("tr",[e("th",{staticClass:"text-center",staticStyle:{width:"50px !important"},attrs:{id:"nonresize"},on:{change:t.onChange}},[e("input",{staticClass:"chkItems",attrs:{id:"chkAll",type:"checkbox"}})]),e("th",[e("span",{staticClass:"sort",attrs:{href:"javascript:;",id:"GroupName"},on:{click:function(e){return t.sortdata(e)}}},[t._v(t._s(t.$t("GroupName")))])]),e("th",[e("span",{staticClass:"sort",attrs:{href:"javascript:;",id:"GroupDetails"},on:{click:function(e){return t.sortdata(e)}}},[t._v(t._s(t.$t("Detail")))])]),e("th",[e("span",{attrs:{href:"javascript:;",id:""}},[t._v(t._s(t.$t("DeviceName")))])]),e("th",[e("span",[t._v(t._s(t.$t("AssignedReader")))])]),e("th",{staticClass:"text-center"},[e("span",[t._v(t._s(t.$t("TotalItems")))])]),e("th",{staticClass:"text-center"},[e("span",[t._v(t._s(t.$t("Status")))])])])]),e("tbody",[t._l(t.GroupData,(function(a,s){return e("tr",{key:s},[e("td",{staticClass:"text-center"},[null!=a.group_id?e("input",{staticClass:"chkItems",attrs:{type:"checkbox"},domProps:{value:a.group_id},on:{change:t.onChange}}):e("input",{staticClass:"chkItems",attrs:{disabled:"disabled",type:"checkbox"}})]),e("td",[e("em",{attrs:{value:a.group_id},on:{click:function(e){return t.editNewGroup(a.group_id)}}},[e("span",{staticClass:"text-overflow-dynamic-container",staticStyle:{color:"#007bff"}},[t._v(t._s(a.group_name))])])]),e("td",[e("span",{staticClass:"text-overflow-dynamic-container"},[t._v(t._s(a.group_details))])]),e("td",[e("span",{staticClass:"text-overflow-dynamic-container"},[t._v(t._s(a.device_name))])]),e("td",[e("span",{staticClass:"text-overflow-dynamic-container"},[t._v(t._s(a.item_description))])]),e("td",{staticClass:"text-center single-action"},[e("span",{staticClass:"text-dark"},[e("em",{staticClass:"fa fa-briefcase",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"noti-circle noti-blue"},[t._v(t._s(a.TotalItemsCount))])])]),e("td",[e("div",{staticClass:"cstm-drop-btn"},[e("select",{directives:[{name:"model",rawName:"v-model",value:a.STATUS_ID,expression:"item.STATUS_ID"}],class:{"ddlupdatestatus w-80 btn-success":1001==a.STATUS_ID,"ddlupdatestatus w-80 btn-danger":1002==a.STATUS_ID},on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(a,"STATUS_ID",e.target.multiple?s:s[0])},function(e){return t.UpdataStatus(a.STATUS_ID,a.group_id)}]}},t._l(t.StatusData,(function(a,s){return e("option",{key:s,domProps:{value:a.STATUS_ID}},[t._v(t._s(a.STATUS))])})),0)])])])})),t.noRecord?e("tr",[e("td",{staticClass:"text-center text-danger no-record",attrs:{colspan:"8"}},[t._v(t._s(t.$t("NoRecordfound")))])]):t._e()],2)])]),e("Pager",{attrs:{numberofrecords:t.TotalRecords,CurrentPageNumber:t.CurrentPage,"prev-text":"Prev","first-text":"First","last-text":"Last","next-text":"Next"},on:{SetCurrentPage:t.pagerMethod}})],1)])])},r=[],i=(a("14d9"),a("1115")),o=a("4555"),n=a("df17"),l={components:{Pager:o["a"],StatusList:n["a"]},data(){return{txtsearch:"",statusIds:"",LocationId:"",sortBy:"",sortExp:"",IsDefault:"",GroupData:[],noRecord:!1,TotalRecords:0,PageNumber:1,PageSize:10,CurrentPage:1,TotalPages:0,isLoading:!1,StatusData:[]}},created:function(){this.IsDefault=this.GetUserInfo.IsDefault,this.GetGroupList(),this.GetStatusList()},methods:{GetGroupList:function(){var t=`search=${this.txtsearch}&statusIds=${this.statusIds}&pageSize=${this.PageSize}&pageNum=${this.PageNumber}&sortBy=${this.sortBy}&sortExp=${this.sortExp}&IsDefault=${this.IsDefault}`,e=this;i["a"].GetItemGroupList(t).then(t=>{null!=t.data?t.data.data.length>0?(e.GroupData=t.data.data,e.TotalRecords=t.data.data[0].TOTALRECORDS,e.TotalPages=Math.ceil(e.TotalRecords/e.PageSize),e.CurrentPage=e.PageNumber,e.noRecord=!1,$(".chkItems:checkbox:checked,#chkAll_0").prop("checked",!1).removeAttr("checked"),$(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked")):(e.GroupData=[],e.noRecord=!0,e.TotalRecords=0):(e.noRecord=!0,e.GroupData=[],e.TotalRecords=0),setTimeout((function(){e.CheckBoxBootstrap()}),100)})},SearchData:function(){this.GetGroupList()},ResetData:function(){this.txtsearch="",this.GetGroupList()},pagerMethod:function(t){this.PageSize=t.PageSize,this.PageNumber=t.PageNumber,this.GetGroupList()},sortdata:function(t){this.sortBy=t.currentTarget.id,this.sortExp="DESC"==this.sortExp?"ASC":"DESC",this.GetGroupList()},AddNewGroup(t){this.$router.push({name:"ManageGroup",params:{id:t}})},editNewGroup(t){this.$router.push({name:"ManageGroup",params:{id:t}})},DeleteRFID:function(){var t=this,e="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){e.length>0&&(e+=","),e+=$(this).val()})),e.length>0&&t.confirmR(t.$t("ConfirmDelete"),!0,t.$t("Delete")+"  "+t.$t("Group_Item"),(function(){var a={ids:e,tblname:"Talygen_IoT_Items_Group",primarycolname:"Group_Id"};t.isLoading=!0;var s=JSON.stringify(a);i["a"].DeleteGroupList(s).then(e=>{e.data?($("[id^='chkAll']").prop("checked",!1).removeAttr("checked"),$(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),$("[id^='DeleteMultiple']").removeClass("enable").addClass("disabled"),t.ShowAlert(t.$t("DeletedSuccess",[t.$t("Group_Item")]),"Success",!0,t.$t("Alert")),t.GetGroupList()):t.ShowAlert(t.$t("DeletedError",[t.$t("Group_Item")]),"failure",!0,t.$t("Alert"))})}))},getStatuslistForListing:function(t,e){var a=this,s="langCode="+e+"&statusType="+t+"&hasglobal=true";i["a"].statusdropdown(s).then((function(t){if("Success"==t.data.status){var e=t.data.result;a.StatusListForListing=e.data}}))},GetStatusList:function(){var t=this;t.isLoading=!0;var e="statusType=AssetManagement";i["a"].GetStatusList(e).then(e=>{t.StatusData=JSON.parse(e.data).filter(t=>"Active"===t.STATUS||"Inactive"===t.STATUS)})},UpdataStatus(t,e){var a=this;a.isLoading=!0;const s={ID:e,StatusId:t,IsFor:"TALYGEN_IOT_ITEMS_GROUP"};var r=JSON.stringify(s);i["a"].CommonUpdateStatus(r).then((function(t){null!=t.data&&("Success"===t.data.status?a.ShowAlert(a.$t("RecordUpdatedSuccessfully"),"success",a.$t("Alert")):a.ShowAlert(a.$t("UnknownErrorOccur"),"failure",!0,a.$t("Alert")))}))},onChange:function(){var t=$(".chkItems:checked").not("[id^='chkAll']").length;t>0?$("#DeleteAssetCatalogue").removeClass("disabled"):$("#DeleteAssetCatalogue").addClass("disabled")}}},u=l,c=a("2877"),d=Object(c["a"])(u,s,r,!1,null,null,null);e["default"]=d.exports},df17:function(t,e,a){"use strict";var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"cstm-drop-btn"},[t.isShowLoader?e("button",{staticClass:"btn btn-dark w-100",staticStyle:{padding:"2px 10px 2px 2px"},attrs:{type:"button",disabled:""}},[e("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}),t._v(" Loading...")]):t._e(),t.isShowLoader?t._e():e("select",{directives:[{name:"model",rawName:"v-model",value:t.StatusId,expression:"StatusId"}],staticClass:"w-100",class:{ddlchangestatus:t.IsReponsive},style:{backgroundColor:t.StatusBgColor,color:t.StatusColor},attrs:{id:"crmlistingStatus_span",disabled:t.StatusCode==t.StatusId,oldstatus:t.PrevStatus,checkPrivilege:"yes","data-id":t.IsReponsive?t.dataid:null,"data-status":t.IsReponsive?t.StatusId:null},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.StatusId=e.target.multiple?a:a[0]},function(e){return t.ChangeStatus(t.dataid,e)}]}},t._l(t.StatusList,(function(a,s){return e("option",{key:s,domProps:{value:a.STATUS_ID}},[t._v(" "+t._s(a.STATUS)+" ")])})),0)])},r=[],i=(a("14d9"),a("1115")),o={name:"listing-status",props:{dataid:{type:Number,required:!0},dataselected:{type:String,required:!0},dataController:{type:String,required:!0},dataAction:{type:String,required:!0},isfor:{type:String,required:!0},callbackfunction:{type:Function},statuslist:{type:Array,required:!0},isselectedvaluestring:{type:Boolean},parentid:{type:Number},haschild:{type:Boolean},hasglobal:{type:Boolean,required:!1}},data:function(){return{StatusId:this.dataselected,StatusCode:"",PrevStatus:this.dataselected,IsReponsive:!1,StatusList:this.statuslist,item:this.item,StatusColor:"#ffffff",StatusBgColor:"#525f65",isShowLoader:!0}},created:function(){var t=this;1!=t.hasglobal&&"true"!=t.hasglobal||(t.StatusList=this.GetStatusList()),$.each(t.statuslist,(function(e,a){"Closed"==t.statuslist[e].STATUS&&(t.StatusCode=t.statuslist[e].STATUS_ID)}));try{this.isShowLoader=!(this.statuslist.length>0)}catch(s){this.isShowLoader=!1}var e=this;if(1==this.isselectedvaluestring){var a=this.StatusList.filter((function(t){return t.STATUS==e.dataselected}));a.length>0?(this.StatusId=a[0].STATUS_ID,this.PrevStatus=a[0].STATUS_ID,this.GetColor()):(this.StatusId="",this.PrevStatus="")}else this.StatusId=this.dataselected,this.PrevStatus=this.dataselected,this.GetColor();this.GetColor()},mounted:function(){var t=this;$("body").on("change",".ddlchangestatus",(function(e){e.stopImmediatePropagation(),t.ChangeStatus($(this).attr("data-id"),e,e.target.value)}))},watch:{dataselected:function(t){if(1==this.isselectedvaluestring){var e=this.StatusList.filter((function(e){return e.STATUS==t}));e.length>0?(this.StatusId=e[0].STATUS_ID,this.PrevStatus=e[0].STATUS_ID,this.GetColor()):(this.StatusId="",this.PrevStatus="")}else this.StatusId=t,this.PrevStatus=t,this.GetColor();this.GetColor()},statuslist:function(t){this.isShowLoader=!1,this.StatusList=t;var e=this;if(1==e.isselectedvaluestring){var a=e.StatusList.filter((function(t){return t.STATUS==e.dataselected}));a.length>0?(e.StatusId=a[0].STATUS_ID,e.PrevStatus=a[0].STATUS_ID,e.GetColor()):(e.StatusId="",e.PrevStatus="",this.GetColor())}else this.StatusId=t,e.PrevStatus=t,this.GetColor()}},methods:{GetColor:function(){var t=this;if(null!=t.StatusList&&t.StatusList.length>0){var e=$.grep(t.StatusList,(function(e,a){return e.STATUS_ID==t.StatusId}));null!=e&&e.length>0&&(t.StatusColor=e[0].STATUS_COLOR,t.StatusBgColor=e[0].STATUS_BG_COLOR,null==t.StatusColor||""==t.StatusColor?(t.StatusColor="#ffffff",t.StatusBgColor="#525f65"):t.StatusId=e[0].STATUS_ID)}},GetStatusList:function(){var t=[],e={STATUS_ID:1001,STATUS:Globalize.localize("Active"),STATUS_COLOR:"#ffffff",STATUS_BG_COLOR:"#28a745"};return t.push(e),e={STATUS_ID:1002,STATUS:Globalize.localize("Inactive"),STATUS_COLOR:"#ffffff",STATUS_BG_COLOR:"#d72435"},t.push(e),t},ChangeStatus:function(t,e,a){var s=e.target.selectedOptions[0].text,r=this;"Closed"==s&&r.dataController+"/"+r.isfor=="Crm/CRM_LEADS"?r.dataController:(r.dataController,r.dataAction),r.PrevStatus!=$(e.target).attr("oldstatus")&&(r.PrevStatus=$(e.target).attr("oldstatus"));var o=this.$t("ConfirmUpdateStatusRecord"),n=r.isfor;"TASKLISTING"==r.isfor&&(o=r.$t("ConfirmUpdateTaskStatus"),o=1==r.haschild?this.$t("ConfirmUpdateTaskStatus"):0==r.haschild&&Number(r.parentid)>0?this.$t("ConfirmUpdateChildTaskStatus"):this.$t("ConfirmUpdateStatusRecord"));var l=!1,u=0;$.each(r.statuslist,(function(t,e){"REFPEN"==e.STATUS_CODE?u=e.STATUS_ID:"PNPGRS"==e.STATUS_CODE&&(InprogressStatusId=e.STATUS_ID)})),(Number(r.parentid)>0&&"1002"==r.PrevStatus&&"1001"==r.StatusId||Number(r.parentid)>0&&"1002"!=r.PrevStatus&&1001==r.StatusId||Number(r.parentid)>0&&r.StatusId==Number(u)||Number(r.parentid)>0&&r.StatusId==Number(InprogressStatusId))&&(l=!0),l&&(n="TASKCHILDLISTING"),"TASKLISTING"==r.isfor&&(o=l?this.$t("ConfirmUpdateChildTaskStatus"):this.$t("ConfirmUpdateTaskStatus")),r.confirmR(o,!0,this.$t("UpdateCommonStatus"),(function(e){a&&(r.StatusId=a);var s={ID:t,StatusId:r.StatusId,IsFor:n},o=JSON.stringify(s);i["a"].CommonUpdateStatus(o).then((function(t){null!=t.data&&"Success"===t.data.status?(r.ShowAlert(r.$t("RecordUpdatedSuccessfully"),"success",r.$t("Alert")),r.PrevStatus=r.StatusId,"undefined"!=typeof r.callbackfunction&&null!=r.callbackfunction&&r.callbackfunction()):r.ShowAlert(r.$t("UnknownErrorOccur"),"failure",!0,r.$t("Alert"))}),(function(t){}))}),(function(t){r.StatusId=r.PrevStatus}))}}},n=o,l=a("2877"),u=Object(l["a"])(n,s,r,!1,null,null,null);e["a"]=u.exports}}]);
//# sourceMappingURL=chunk-2ff2d243.js.map