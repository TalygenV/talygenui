(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CRMVendor"],{9477:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("loader",{attrs:{"is-visible":e.isLoading}}),a("TgList",{attrs:{IsShowAction:"true",ModuleName:"CRM",SubModuleCode:"CRM_VENDORS",IdentityColumn:"vendor_id",HeaderText:e.$t("Vendor"),ListData:e.VendorData,HeaderData:e.Headers,HeaderButtons:e.listheaderbuttons,TotalRecords:e.TotalRecords,SearchFields:e.leftSearchFields,RenderRowActionMethod:e.renderActions,ListDataCallBackFunction:e.FetchData,LegendArray:e.LegendArray,IsFilterApplied:!!e.searchCondition,SortExp:e.SortExp,SortBy:e.SortBy,CurrentPageNumber:e.PageNumber},on:{LeftsearchButtonClick:e.leftCommonSearch,PagerButtonClick:e.pagerMethod,HeaderButtonClick:e.commonHeaderButtonClick,ActionButtonClick:e.actionButtonClick,SortdataButtonClick:e.sortdata},scopedSlots:e._u([{key:"slotdata",fn:function(t){var i=t.data;return["status_id"==i.column.COLUMN_NAME?[e.isCRMShowStausDrop(i.row.status_id,"CRM_VENDORS")?a("listing-status",{ref:"updatestatus",attrs:{isfor:"CRM_VENDORS",dataid:i.row.vendor_id,"data-controller":"Crm",statuslist:e.StatusListForListing,item:i,"data-action":"index",dataselected:i.row.status_id,callbackfunction:e.FetchData,isselectedvaluestring:!0}}):e._e(),e.isCRMShowStausDrop(i.row.status_id,"CRM_VENDORS")?e._e():a("a",{staticClass:"inactive-disabled"},[a("span",{class:e.getStatusClass(i.row.status_id,"status_id")},[e._v(" "+e._s(i.row[i.column.COLUMN_NAME])+" ")])])]:e._e()]}}])}),e.showFilter?a("searchfilter",{attrs:{submodulecode:"CRM_VENDORS",modulename:"CRM",callbackfunction:e.FetchData},on:{close:function(t){e.showFilter=!1},FilterData:e.FilterData}},[a("h5",{attrs:{slot:"header"},slot:"header"},[e._v(e._s(e.$t("Search")))])]):e._e(),e.ShowManageView?a("viewlayout",{directives:[{name:"show",rawName:"v-show",value:e.ShowManageView,expression:"ShowManageView"}],attrs:{submodulecode:"CRM_VENDORS",modulename:"CRM",callbackfunction:e.FetchData,commonapiurl:e.commonAPIUrl,usertype:e.usertype},on:{close:function(t){e.ShowManageView=!1}}},[a("h5",{attrs:{slot:"header"},slot:"header"},[e._v(e._s(e.$t("Search")))])]):e._e(),e.showAddEventModal?a("modalfollowupslist",{attrs:{srcId:e.souceID,modulename:"CRM",submodulecode:"CRM_VENDORS",userid:e.userid},on:{close:e.closeEventViewModal}}):e._e()],1)},o=[],n=a("53ca"),s=a("5530"),r=a("c7eb"),l=a("1da1"),d=(a("d3b7"),a("159b"),a("e9c4"),a("c740"),a("9769")),c=[{fieldName:"Vendor Name",fieldType:"text",fieldIcon:"fa-file",fieldSearchConditionName:["VENDR.vendor_name"],isSearch:!1,value:"",listOptions:[]},{fieldName:"Email",fieldType:"text",fieldIcon:"fa-envelope",fieldSearchConditionName:["VENDR.email_id"],isSearch:!1,value:"",listOptions:[]},{fieldName:"Vendor OWNER",fieldType:"ddl-check",fieldIcon:"fa-user",fieldSearchConditionName:["VENDR.vendor_owner"],isSearch:!1,value:"",listOptions:[]}],u=[{title:"Reset",iconClass:"fa-filter text-danger",callbackfunction:"removeFilter",href:"",additionalClass:"",isdisabled:!1,isvisible:!1,checkPrivilege:!1},{title:"Filters",iconClass:"fa-filter",callbackfunction:"openFilterPopUp",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1},{title:"ManageView",iconClass:"fa-list-alt",callbackfunction:"ManageView",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1},{title:"AddVendor",iconClass:"fa-plus",href:"/CRM/ManageVendor/0/NO/CRM/CRM_VENDORS",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!0},{title:"ExportToExcel",iconClass:"fa-file-excel-o",callbackfunction:"downloadExceldata",href:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1},{id:"DeleteMultiple",title:"Delete",iconClass:"fa-trash-o",callbackfunction:"commonDeleteData",isdisabled:!0,isvisible:!0}],h=[{title:"View",href:"/CRM/ViewVendorDetails/{vendor_id}/CRM/CRM_VENDORS",icon:"fa fa-eye action-icon",additionalSpan:""},{title:"Edit",href:"/CRM/ManageVendor/{vendor_id}/YES/CRM/CRM_VENDORS",icon:"fa fa-pencil text-success action-icon",additionalSpan:""},{title:"FollowUps",callbackfunction:"openAddNewEvent",href:"javascript:void(0)",icon:"fa fa-flag text-muted action-icon",additionalSpan:""}];function f(e,t,a){return p.apply(this,arguments)}function p(){return p=Object(l["a"])(Object(r["a"])().mark((function e(t,a,i){var o,n;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=t,n={},n["moduleName"]=a,n["type"]=i,e.next=6,d["a"].GetLeftSearchStatus(n).then((function(e){var t=e.data;if(null!=t)return o.leftSearchFields[2].listOptions=t.DATA,o.VendorOwnerList=t.DATA,o.VendorOwnerList}));case 6:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}var b={buttons:u,leftSearchFields:c,listActions:h,GetVendorOwnerlist:f},m=a("fc0b"),g=a("e29d"),C=a("cdd5"),v=a("2aeb"),S={components:{viewlayout:C["a"],TgList:v["a"],searchfilter:m["a"],modalfollowupslist:g["a"]},data:function(){return{isLoading:!1,leftSearchFields:b.leftSearchFields,userid:null,usertype:null,listheaderbuttons:b.buttons,VendorData:null,Headers:null,listActions:b.listActions,searchCondition:"",PageNumber:1,PageSize:10,SortBy:"",SortExp:"",noRecord:!1,TotalRecords:0,StatusListForListing:[],souceID:0,showFilter:!1,showAddEventModal:!1,ShowManageView:!1,LegendArray:[],appliedFilter:[],privilegeParams:null}},created:function(){var e=Object(l["a"])(Object(r["a"])().mark((function e(){var t;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.userid=this.GetUserInfo.ID,this.usertype=this.GetUserInfo.UserType,this.privilegeParams="controller=CRM&action=",t=this,t.getStatuslistForListing("CRM","en"),e.next=7,b.GetVendorOwnerlist(t,"CRM","VENDOR_OWNER_SEARCH");case 7:t.FetchData(),t.LegendArray=[{class:"bg-primary colorboxsquare",text:t.$t("ListingLegend",["Vendor"])}];case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),updated:function(){this.BindActionButtonEvent()},methods:{leftCommonSearch:function(e){this.PageNumber=e.PageNumber,this.isPaged=1,"undefined"!=typeof e.searchCondition?this.searchCondition=e.searchCondition:this.searchCondition="",this.FetchData()},renderActions:function(e){var t=this,a=[];return t.listActions.forEach((function(t){var i=Object(s["a"])({},t);switch(t.title){case"View":i.isVisible="Draft"!=e.status_id;break;case"Edit":i.isVisible="Cancelled"!=e.status_id&&"Closed"!=e.status_id;break;case"FollowUps":i.isVisible="Closed"!=e.status_id;break}a.push(i)})),a},sortdata:function(e){var t="sort tb_headerSortDown";this.SortBy=e,e===this.SortBy&&(""==this.SortExp?(this.SortExp="ASC",t="sort tb_headerSortDown"):"ASC"==this.SortExp?(this.SortExp="DESC",t="sort tb_headerSortUp"):(this.SortExp="ASC",t="sort tb_headerSortDown")),this.FetchData(),$("#"+e+"  span:first-child").attr("class",t)},pagerMethod:function(e){this.PageSize=e.PageSize,this.PageNumber=e.PageNumber,this.FetchData()},actionButtonClick:function(e,t,a,i){var o=this;switch(e){case"checkPrivilegeView":break;case"checkPrivilegeDetails":break;case"openAddNewEvent":o.openAddNewEvent(t.Order_id,t);break}},openAddNewEvent:function(e,t){var a=this;a.souceID=t.vendor_id,a.selectedItem=e,a.showAddEventModal=!a.showAddEventModal},closeEventViewModal:function(){this.showAddEventModal=!1},commonDeleteData:function(e){var t=this;d["a"].CheckPrivilege(t.privilegeParams+"DeleteVendor").then((function(e){if(e.data){var a="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){a.length>0&&(a+=","),a+=$(this).val()})),a.length>0?t.confirmR(t.$t("ConfirmDelete"),!0,t.$t("Delete")+"  "+t.$t("Vendor"),(function(){var e={ids:a,moduleName:"CRM",subModuleCode:"CRM_VENDORS"},i=JSON.stringify(e);d["a"].CommonDeleteData(i).then((function(e){var a="";200==e.status?($(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),$("#DeleteMultiple").addClass("disabled"),a=t.ShowAlert(t.$t("DeletedSuccess",[t.$t("Vendor")]),"success",!0,t.$t("Alert")),t.PageNumber=parseInt(t.PageNumber)-1,t.PageNumber<=0&&(t.PageNumber=1),t.FetchData()):a=t.ShowAlert(t.$t("DeletedError",[t.$t("Vendor")]),"failure",!0,t.$t("Alert")),setTimeout((function(){a.modal("hide")}),2e3)}))})):t.ShowAlert(t.$t("Selectanyrecordtodelete"))}else t.ShowAlert("You are not authorized","failure",!0,"Alert")}))},ManageView:function(){this.ShowManageView=!0;var e=this;setTimeout((function(){$("#modalManageView").modal("show"),setTimeout((function(){e.SetBootstraptoolTip()}),200)}),1e3)},FilterData:function(e,t,a,i,o,s){this.pageNum=e,this.pageSize=t,this.sortBy=a,this.sortExp=i,this.searchCondition=o,null!=Object(n["a"])(s)&&this.appliedFilter.push(s),this.FetchData()},openFilterPopUp:function(e){this.showFilter=!0},getStatuslistForListing:function(e,t){var a=this,i="langCode="+t+"&statusType="+e+"&hasglobal=true";d["a"].statusdropdown(i).then((function(e){if("Success"==e.data.status){var t=e.data.result;a.StatusListForListing=t.data}}))},commonHeaderButtonClick:function(e){switch(e.callbackfunction){case"downloadExceldata":this.FetchData(!0);break;case"ManageView":this.ManageView();break;case"openFilterPopUp":this.openFilterPopUp();break;case"downloadExceldata":this.FetchData(!0);break;case"commonDeleteData":this.commonDeleteData();break;case"removeFilter":var t=this;this.searchCondition="";var a=t.listheaderbuttons.findIndex((function(e){return"removeFilter"===e.callbackfunction}));t.listheaderbuttons[a].isvisible=!1;var i=t.listheaderbuttons.findIndex((function(e){return"openFilterPopUp"===e.callbackfunction}));t.listheaderbuttons[i].iconClass="fa fa-filter";try{t.appliedFilter=[]}catch(o){}t.FetchData();break}},clickEventOfColumn:function(e,t){"vendor_name"==t.COLUMN_NAME&&this.$router.push({path:"/CRM/ViewVendorDetails/"+e.vendor_id+"/CRM/CRM_VENDORS"})},getRequestParams:function(e,t,a,i,o,n){var s={};return e&&(s["pageNum"]=e),n&&(s["searchcondition"]=n),o&&(s["isPaged"]=o),a&&(s["sortBy"]=a),i&&(s["sortExp"]=i),t&&(s["pageSize"]=t),s},FetchData:function(e){var t=this.getRequestParams(this.pageNumber,this.pageSize,this.sortBy,this.sortExp,this.isPaged,this.searchcondition),a=this;a.isLoading=!0,t.pageSize=e?a.TotalRecords:a.PageSize,t.pageNumber=a.PageNumber,t.searchCondition=a.searchCondition,a.PageNumber?t.pageNum=a.PageNumber:a.PageNumber=t.pageNum=1,"undefined"!=typeof a.isPaged?t.isPaged=a.isPaged:a.isPaged=t.isPaged=1,t.isPaged=a.isPaged,t.sortBy=a.SortBy,t.sortExp=a.SortExp;var i="";if(a.isBlank(this.searchCondition)||(i+=a.searchCondition),a.isBlank(this.conditionForInstantSearch)||(i+=a.isBlank(a.searchCondition)?a.conditionForInstantSearch:" AND "+a.conditionForInstantSearch),""!=i){if(t.searchCondition=i,a.appliedFilter.length>0){var o=a.listheaderbuttons.findIndex((function(e){return"removeFilter"===e.callbackfunction}));a.listheaderbuttons[o].isvisible=!0;var n=a.listheaderbuttons.findIndex((function(e){return"openFilterPopUp"===e.callbackfunction}));a.listheaderbuttons[n].iconClass="fa fa-filter text-success"}}else if(0==a.appliedFilter.length){var s=a.listheaderbuttons.findIndex((function(e){return"removeFilter"===e.callbackfunction}));a.listheaderbuttons[s].isvisible=!1;var r=a.listheaderbuttons.findIndex((function(e){return"openFilterPopUp"===e.callbackfunction}));a.listheaderbuttons[r].iconClass="fa fa-filter"}e?(t.isPaged=0,d["a"].VendorListing(t).then((function(e){a.isLoading=!1,null!=e.data?a.JSONToCSVConvertor(e.data,"Vendor-Detail",!0):a.ModelnoRecord=!0}))):d["a"].VendorListing(t).then((function(e){null!=e.data?(a.isLoading=!1,a.Headers=e.data.schema,a.Headers.forEach((function(e){e.settings=null,"vendor_name"==e.COLUMN_NAME&&(e.settings={clickEvent:a.clickEventOfColumn,formatter:a.columnDataFormatter}),"status_id"==e.COLUMN_NAME&&(e.settings={isInSlot:!0})})),e.data.data.length>0?(a.VendorData=e.data.data,a.VendorData.forEach((function(e){e.isCheckBoxDisabled=!1,e.additionalClass="","Closed"==e.status_id&&(e.additionalClass="medium-bar",e.isCheckBoxDisabled=!0),e.rowDetailsUrl="",""==e.rowDetailsUrl&&(e.rowDetailsUrl="/CRM/ViewVendorDetails/"+e.vendor_id+"/CRM/CRM_VENDORS")})),a.TotalRecords=e.data.data[0].total_records,a.TotalPages=Math.ceil(a.TotalRecords/a.PageSize),a.CurrentPage=a.PageNumber,$("[id^='chkAll']").prop("checked",!1).removeAttr("checked"),$(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),a.noRecord=!1):(a.noRecord=!0,a.VendorData=[],a.TotalRecords=0),setTimeout((function(){a.ResponsiveDataTable("tablelistingdata")}),500)):(a.noRecord=!0,a.VendorData=[],a.Headers=[],a.TotalRecords=0),"true"==$(".bottom_filter_button").children().attr("aria-expanded")&&$(".bottom_filter_button").children().click()}))}}},w=S,D=a("2877"),k=Object(D["a"])(w,i,o,!1,null,null,null);t["default"]=k.exports}}]);
//# sourceMappingURL=CRMVendor.js.map