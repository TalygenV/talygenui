(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22dd5c"],{f8d8:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("section",[e("loader",{attrs:{"is-visible":t.isLoading}}),e("tg-list",{attrs:{IsShowAction:!1,showCheckBox:!1,listType:[t.DetailListType],ModuleName:"Approval",SubModuleCode:"Approval",IdentityColumn:"GROUPID",HeaderText:t.$t("TimesheetApprovalsHistory"),ListData:t.ApplicationCategoryHistoryList,HeaderData:t.Headers,widgets:t.widgets,callbackfunction:t.FetchData,HeaderButtons:t.listheaderbuttons,TotalRecords:t.TotalRecords,SearchFields:t.leftSearchFields,RenderRowActionMethod:t.renderActions,ListDataCallBackFunction:t.FetchData,LegendArray:t.LegendArray,SortExp:t.SortExp,SortBy:t.SortBy,NorecordfoundText:t.$t("NoRecordfound")},on:{LeftsearchButtonClick:t.leftCommonSearch,PagerButtonClick:t.pagerMethod,HeaderButtonClick:t.commonHeaderButtonClick,ActionButtonClick:t.actionButtonClick,SortdataButtonClick:t.sortdata},scopedSlots:t._u([{key:"slotdata",fn:function({data:a}){return["Comment"==a.column.COLUMN_NAME?[e("a",{staticClass:"comment",attrs:{href:"javascript:;",weekdatarange:a.row.TIME_SHEET_PERIOD,userid:"63221",title:"","data-toggle":"modal","data-target":"#tsacomment","data-toggle-tooltip":"tooltip","data-original-title":"Comments(0)"},on:{click:function(e){return t.OpenCommentModal(a.row.TIME_SHEET_PERIOD)}}},[e("i",{staticClass:"fa fa-comment-o text-dark action-icon"}),e("span",{staticClass:"noti-circle noti-blue text-center"},[t._v(t._s(a.row.COMMENTSCOUNT))])])]:t._e(),"RollBack"==a.column.COLUMN_NAME?[e("a",{on:{click:function(e){return t.OpenRollBackModal(a.row)}}},[e("i",{staticClass:"fa fa-reply text-info action-icon"})])]:t._e(),"STATUS"==a.column.COLUMN_NAME?[e("span",[t._v(t._s("TRACK_ENTRY_REJECTED"==a.row.STATUS?"Rejected":"Approved")+" ")])]:t._e()]}}])}),t.ShowCommentModal?e("ShowComment",{attrs:{TimeSheetDate:t.TimeSheetDate}}):t._e(),t.ShowRollBackModal?e("RollBack",{attrs:{TimeSheetHistoryData:t.TimeSheetHistoryData}}):t._e()],1)},i=[],o=(a("14d9"),a("9769"));let r=[{title:"Back to list",iconClass:"fa fa-angle-double-left pr-2",callbackfunction:"BackTolist",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1}],n=[{fieldName:"Status",fieldType:"radio",fieldIcon:"fa fa-bar-chart",paramName:"statusCode",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[{value:"TRACK_ENTRY_APPROVED",name:"Approved"},{value:"TRACK_ENTRY_REJECTED",name:"Rejected"}]},{fieldName:"From Date",fieldType:"date",fieldIcon:"fa fa-calendar",paramName:"dateFrom",fieldSearchConditionName:[""],isSearch:!1,datePickerConfig:{useCurrent:!0,showClear:!0,showClose:!0,minDate:!0,maxDate:!0,widgetPositioning:{horizontal:"right",vertical:"bottom"}}},{fieldName:"To Date",fieldType:"date",fieldIcon:"fa fa-calendar",paramName:"dateTo",fieldSearchConditionName:[""],isSearch:!1,datePickerConfig:{useCurrent:!0,showClear:!0,showClose:!0,minDate:!0,maxDate:!0,widgetPositioning:{horizontal:"right",vertical:"bottom"}}},{fieldName:"User",fieldType:"radio",fieldIcon:"fa fa-users",paramName:"SearchuserId",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]}];function l(t,e){var a=t;"CA"==e&&o["a"].GetUsersByCompanyId().then(t=>{t.data.forEach(t=>{let e={name:t.username,value:t.user_id};a.leftSearchFields[3].listOptions.push(e)})}).catch(t=>{console.log(t)})}var c={buttons:r,leftsearchSchema:n,bindleftCommonSearchdropdown:l},d=function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"my-popups"},[e("div",{staticClass:"modal d-block"},[e("div",{staticClass:"modal-dialog modal-dialog-centered ui-draggable"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header ui-draggable-handle py-0"},[e("h4",{staticClass:"modal-title mt-2 pt-1",attrs:{name:"header"}},[t._v(" "+t._s(t.$t("Comment"))+" ")]),e("button",{staticClass:"close",on:{click:t.closePopup}},[e("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),e("div",{staticClass:"listing py-3 px-3"},[e("div",{staticClass:"listing",staticStyle:{"max-height":"465px","overflow-y":"auto"},attrs:{id:"CommentsData"}},[e("div",{staticClass:"w-100 activity-tab",attrs:{id:"accordion"}},t._l(t.CommentList,(function(a,s){return e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[e("a",{staticClass:"card-link",attrs:{"data-toggle":"collapse",href:"PostCommentListing"+s}},[e("div",{staticClass:"conversation-date heading-border"},[e("span",[t._v(t._s(t.$options.filters.formatDate(a.CREATED_AT)))])])])]),e("div",{staticClass:"collapse show",attrs:{id:"PostCommentListing"+s,"data-parent":"#accordion"}},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"conversation-main"},[e("div",{staticClass:"conversation-time"},[e("span",[t._v(t._s(t.FormatDateToTime(a.CREATED_AT)))])]),e("div",{staticClass:"conversation-box-con"},[e("div",{staticClass:"conversation-box"},[e("div",{staticClass:"name-circle light-yellow"},[e("img",{staticClass:"img-circle avatar",attrs:{src:"https://cogniterblob.blob.core.windows.net/"+a.containeR_NAME+"/Upload/UserProfileImage/"+a.AVATAR,width:"51",height:"51",alt:"Image"}})]),e("div",{staticClass:"conversation-header addednote-ticket"},[e("span",[e("span",{staticClass:"sender-name"}),e("span",{staticClass:"sender-department",attrs:{title:a.comments}},[t._v(" "+t._s(a.TRACK_ENTRY_COMMENT_DESC))])])]),e("div",{staticClass:"conversation-content"},[e("div",{staticClass:"col-12 p-0 notesdata"},[e("h6",{staticClass:"text-muted time"},[e("i",[e("b",[t._v(t._s(a.CREATED_BY))]),t._v(", Posted on: "),e("span",{staticClass:"text-danger",attrs:{title:"11/28/2023 05:31:25 PM UTC"}},[t._v(t._s(t.DateDifference(a.CREATED_AT)))])])])])])])])])])])])})),0)])])])])])])])},m=[],h=a("c1df"),C=a.n(h),u={props:{selectedRecordValues:{type:Array,required:!0},AssignDpt:{type:Array,required:!0},TimeSheetDate:{type:String}},data(){return{weekDateRange:"",isLoading:!1,CommentList:[]}},created:function(){this.FetchData()},methods:{async FetchData(){var t=this;t.isLoading=!0;var e="weekDateRange="+t.TimeSheetDate;await o["a"].GetCommentListByWeekDateRange(e).then(e=>{e.data.length>0?(t.CommentList=e.data,t.isLoading=!1,t.noRecord=!1,$(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked")):t.ApplicationCategoryHistoryList=[],t.isLoading=!1})},closePopup(){var t=this;t.$parent.CloseComment()},FormatDateToTime(t){return C()(t).format("LT")},DateDifference(t){var e=this,a=new Date,s=Math.ceil(Math.floor(a.getTime()-new Date(t).getTime())/1e3),i=Math.floor(s/3600),o=s%3600,r=Math.floor(o/60),n=Math.floor(s/86400);if(s<60)return e.$t("FewSecondsAgo");if(s<120)return e.$t("minutesago");if(s<2700)return r+" "+e.$t("minutesago");if(s<5400)return e.$t("an")+" "+e.$t("hourago");if(s<86400)return i+" "+e.$t("hourago");if(s<172800)return e.$t("Yesterday");if(s<2592e3)return n+" "+e.$t("daysago");if(s<31104e3){var l=Math.floor(n/30);return l<=1?"1 "+e.$t("monthsago"):l+" "+e.$t("monthsago")}var c=Math.floor(n/365);return c<=1?"1 "+e.$t("yearsago"):c+" "+e.$t("yearsago")}}},p=u,g=a("2877"),T=Object(g["a"])(p,d,m,!1,null,null,null),f=T.exports,v=function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"my-popups"},[e("div",{staticClass:"modal d-block"},[e("div",{staticClass:"modal-dialog modal-dialog-centered ui-draggable"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header ui-draggable-handle py-0"},[e("h4",{staticClass:"modal-title mt-2 pt-1",attrs:{name:"header"}},[t._v(" "+t._s(t.$t("RollBack "))+" ")]),e("button",{staticClass:"close",on:{click:t.closePopup}},[e("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),e("div",{staticClass:"listing py-3 px-3"},[e("dynamic-form",{ref:"PostCommentForm",attrs:{lang:"en",buttons:t.buttons,schema:t.FormSchema},on:{OnSubmit:t.onSubmit}}),e("div",{staticClass:"py-2 mandatory"},[t._v(t._s(t.$t("MandatoryString"))+" ")]),e("div",{staticClass:"listing py-3 px-3"},[e("div",{staticClass:"listing",staticStyle:{"max-height":"465px","overflow-y":"auto"},attrs:{id:"CommentsData"}},[e("div",{staticClass:"w-100 activity-tab",attrs:{id:"accordion"}},t._l(t.CommentList,(function(a,s){return e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[e("a",{staticClass:"card-link",attrs:{"data-toggle":"collapse",href:"PostCommentListing"+s}},[e("div",{staticClass:"conversation-date heading-border"},[e("span",[t._v(t._s(t.$options.filters.formatDate(a.CREATED_AT)))])])])]),e("div",{staticClass:"collapse show",attrs:{id:"PostCommentListing"+s,"data-parent":"#accordion"}},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"conversation-main"},[e("div",{staticClass:"conversation-time"},[e("span",[t._v(t._s(t.FormatDateToTime(a.CREATED_AT)))])]),e("div",{staticClass:"conversation-box-con"},[e("div",{staticClass:"conversation-box"},[e("div",{staticClass:"name-circle light-yellow"},[e("img",{staticClass:"img-circle avatar",attrs:{src:"https://cogniterblob.blob.core.windows.net/"+a.containeR_NAME+"/Upload/UserProfileImage/"+a.AVATAR,width:"51",height:"51",alt:"Image"}})]),e("div",{staticClass:"conversation-header addednote-ticket"},[e("span",[e("span",{staticClass:"sender-name"}),e("span",{staticClass:"sender-department",attrs:{title:a.comments}},[t._v(" "+t._s(a.TRACK_ENTRY_COMMENT_DESC))])])]),e("div",{staticClass:"conversation-content"},[e("div",{staticClass:"col-12 p-0 notesdata"},[e("h6",{staticClass:"text-muted time"},[e("i",[e("b",[t._v(t._s(a.CREATED_BY))]),t._v(", Posted on: "),e("span",{staticClass:"text-danger",attrs:{title:"11/28/2023 05:31:25 PM UTC"}},[t._v(t._s(t.DateDifference(a.CREATED_AT)))])])])])])])])])])])])})),0)])])],1)])])])])])},S=[],A={props:{selectedRecordValues:{type:Array,required:!0},AssignDpt:{type:Array,required:!0},TimeSheetHistoryData:{required:!1}},data(){return{CommentList:[],FormSchema:[{layoutType:"double",Data:[{astype:"SelectField",label:this.$t("Module"),name:"Module",value:2,placeholder:"",config:{options:[{value:1,name:"Pending"},{value:2,name:"Approved"},{value:3,name:"Rejected"}],onChange:this.OnDeploymentType}}]},{layoutType:"single",Data:[{astype:"TextAreaField",label:this.$t("ReasonforRollback"),name:"ReasonforRollback",value:"",mode:"tag",placeholder:"",config:{options:[]},validationRules:{required:!0}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Submit",isVisible:!0},{type:"Cancel",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Cancel",isVisible:!0,onClick:this.closePopup}],isLoading:!1}},created:function(){this.TimeSheetHistoryData,this.FetchData()},methods:{FormatDateToTime(t){return C()(t).format("LT")},async FetchData(){var t=this;t.isLoading=!0;var e="weekDateRange="+t.TimeSheetHistoryData.TIME_SHEET_PERIOD;await o["a"].GetCommentListByWeekDateRange(e).then(e=>{e.data.length>0?(t.CommentList=e.data,t.isLoading=!1,t.noRecord=!1,$(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked")):t.ApplicationCategoryHistoryList=[],t.isLoading=!1})},closePopup(){var t=this;t.$parent.CloseRollBack()},onSubmit:function(t){var e=this,a=`weekDaterange=${e.TimeSheetHistoryData.TIME_SHEET_PERIOD}&description=${t.description}&access=${t.Visibilty}&statusCode=${e.TimeSheetHistoryData.STATUS}`;o["a"].AddTimesheetComment(a).then(t=>{0==t.data&&e.ShowAlert(e.$t("RecordUpdatedSuccessFully"),"success",!0,e.$t("Alert"))})},DateDifference(t){var e=this,a=new Date,s=Math.ceil(Math.floor(a.getTime()-new Date(t).getTime())/1e3),i=Math.floor(s/3600),o=s%3600,r=Math.floor(o/60),n=Math.floor(s/86400);if(s<60)return e.$t("FewSecondsAgo");if(s<120)return e.$t("minutesago");if(s<2700)return r+" "+e.$t("minutesago");if(s<5400)return e.$t("an")+" "+e.$t("hourago");if(s<86400)return i+" "+e.$t("hourago");if(s<172800)return e.$t("Yesterday");if(s<2592e3)return n+" "+e.$t("daysago");if(s<31104e3){var l=Math.floor(n/30);return l<=1?"1 "+e.$t("monthsago"):l+" "+e.$t("monthsago")}var c=Math.floor(n/365);return c<=1?"1 "+e.$t("yearsago"):c+" "+e.$t("yearsago")}}},D=A,_=Object(g["a"])(D,v,S,!1,null,null,null),E=_.exports,y={components:{ShowComment:f,RollBack:E},data(){return{ShowRollBackModal:!1,ShowCommentModal:!1,isLoading:!1,leftSearchFields:c.leftsearchSchema,listActions:c.listActions,LegendArray:[],Headers:[{COLUMN_NAME:"TIME_SHEET_PERIOD",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("TimesheetPeriod"),DISPLAY_ORDER:1},{COLUMN_NAME:"USERNAME",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("UserName"),DISPLAY_ORDER:2},{COLUMN_NAME:"TRACK_HOURS",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("TrackedHour"),DISPLAY_ORDER:3},{COLUMN_NAME:"ISFORCIABLE",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("PerDiem"),DISPLAY_ORDER:4},{COLUMN_NAME:"STATUS",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("Status"),DISPLAY_ORDER:5,settings:{isInSlot:!0}},{COLUMN_NAME:"Comment",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("Comment"),DISPLAY_ORDER:6,settings:{isInSlot:!0}},{COLUMN_NAME:"RollBack",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("Rollback"),DISPLAY_ORDER:7,settings:{isInSlot:!0}}],noRecord:!0,SortBy:"",SortExp:"",GroupData:[],TotalRecords:0,PageNumber:1,PageSize:10,CurrentPage:1,TotalPages:0,SearchuserId:"",dateFrom:"",dateTo:"",statusCode:"",sortExp:"",sortBy:"",listheaderbuttons:c.buttons,DetailListType:"List",ApplicationCategoryHistoryList:[],TimeSheetDate:"",TimeSheetHistoryData:""}},created(){var t=this;c.bindleftCommonSearchdropdown(this,"CA","USERS"),t.FetchData(),t.LegendArray=[{class:"legend-pending colorboxsquare",text:"The approved entries which have been rejected(Override) by CA"},{class:"legends_medium colorboxsquare",text:"The pending entries which have been approved/rejected directly by CA"}]},methods:{async FetchData(){var t=this;if(void 0==t.searchCondition)var e=`userId=${t.SearchuserId}&sortBy=${t.sortBy}&sortExp=${t.sortExp}&pageSize=${t.PageSize}&pageNum=${t.PageNumber}`;else e=`userId=${t.SearchuserId}&sortBy=${t.sortBy}&sortExp=${t.sortExp}&pageSize=${t.PageSize}&pageNum=${t.PageNumber}&${t.searchCondition}`;await o["a"].TimesheetHistoryList(e).then(e=>{e.data.length>0?(t.ApplicationCategoryHistoryList=e.data,t.ApplicationCategoryHistoryList.forEach(e=>{var a=t.ApplicationCategoryHistoryList.find(t=>t.TRACK_HOURS===e.TRACK_HOURS);a.TRACK_HOURS=t.secondsToTime(e.TRACK_HOURS)}),t.isLoading=!1,t.TotalRecords=e.data[0].TotalRecords,t.TotalPages=Math.ceil(t.TotalRecords/t.pageSize),t.CurrentPage=t.pageNumber,t.noRecord=!1,$(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked")):(t.ApplicationCategoryHistoryList=[],t.noRecord=!0),t.isLoading=!1})},BackTolist(){this.$router.push({name:"TimeApproval"})},actionButtonClick(t,e){},renderActions(t){},pagerMethod:function(t){this.PageSize=t.PageSize,this.PageNumber=t.PageNumber,this.FetchData()},commonHeaderButtonClick(t){switch(t.callbackfunction){case"BackTolist":this.BackTolist();break}},leftCommonSearch:function(t){this.PageNumber=t.PageNumber,this.isPaged=1,"undefined"!=typeof t.searchCondition?this.searchCondition=t.searchConditionJson:this.searchCondition="",this.FetchData()},CloseRollBack(){this.ShowRollBackModal=!1},CloseComment(){this.ShowCommentModal=!1},OpenCommentModal(t){this.TimeSheetDate=t,this.ShowCommentModal=!0},OpenRollBackModal(t){this.ShowRollBackModal=!0,this.TimeSheetHistoryData=t},secondsToTime(t){var e=Math.floor(t/3600),a=t%3600,s=Math.floor(a/60),i=a%60,o=(Math.ceil(i),e+":"+s);return o}}},R=y,b=Object(g["a"])(R,s,i,!1,null,null,null);e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-2d22dd5c.js.map