(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cba6a"],{"4b28":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("TimeSheetListing")],1)},i=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[e._m(0),a("div",{staticClass:"listing py-3 px-3"},[e.DataLoaded?a("dynamic-form",{attrs:{lang:"en",buttons:e.buttons1,schema:e.FormSchema},on:{OnSubmit:e.onSubmit},scopedSlots:e._u([{key:"tgslot-slotbutton",fn:function(t){t.data;return[a("button",{staticClass:"btn btn-success",on:{click:e.FetchData}},[e._v(e._s(e.$t("ShowTimeSheet")))])]}}],null,!1,2383099786)}):e._e(),e.DataLoaded?a("dynamic-form",{attrs:{lang:"en",buttons:e.buttons,schema:e.ListSchema},on:{OnSubmit:e.onSubmit},scopedSlots:e._u([{key:"tgslot-TimeSheetTable",fn:function(t){t.data;return[a("div",{staticClass:"listing"},[a("div",{staticClass:"col-12 mb-2"},[a("div",{staticClass:"mr-2 d-inline-block"},[a("span",{staticClass:"legends-purple colorboxsquare"}),e._v("Automatic ")]),a("div",{staticClass:"mr-2 d-inline-block"},[a("span",{staticClass:"legends_low colorboxsquare"}),e._v("Manual ")]),a("div",{staticClass:"mr-2 d-inline-block"},[a("span",{staticClass:"legends_medium colorboxsquare"}),e._v("TimeSheet ")]),a("div",{staticClass:"mr-2 d-inline-block"},[a("span",{staticClass:"legends_profile colorboxsquare"}),e._v("Leave ")]),a("div",{staticClass:"mr-2 d-inline-block"},[a("span",{staticClass:"legends_high colorboxsquare"}),e._v("Holiday ")]),a("div",{staticClass:"mr-2 d-inline-block"},[a("span",{staticClass:"lg-pausedresumed colorboxsquare"}),e._v("PausedResumed ")])])]),a("tg-list",{attrs:{RenderRowActionMethod:e.renderActions,IdentityColumn:"ProjectId",ModuleName:"TimeTrack",HeaderText:e.$t("Brand"),SubModuleCode:"Timesheet",LegendArray:e.LegendArray,SortExp:e.SortExp,SortBy:e.SortBy,IsShowAction:!0,ListData:e.TimesheetList,HeaderData:e.Headers,showCheckBox:!0,NorecordfoundText:e.$t("NoRecordfound"),HeaderButtons:e.listheaderbuttons},on:{HeaderButtonClick:e.commonHeaderButtonClick},scopedSlots:e._u([{key:"slotdata",fn:function(t){var s=t.data;return["ProjectName"==s.column.COLUMN_NAME?[a("div",{staticClass:"d-inline-block"},[a("a",{staticClass:"text-dark",staticStyle:{cursor:"default"},attrs:{title:"",value:"-1",href:"#"}},[a("span",{staticClass:"d-block font-14 font-weight-medium"},[e._v(e._s(s.projectName)+":"+e._s(s.TaskDetail))]),a("span",{staticClass:"text-dark d-block font-12"},[e._v(e._s(s.trackDescription))])])])]:e._e(),[a("input",{directives:[{name:"model",rawName:"v-model",value:s.row[s.column.COLUMN_NAME],expression:"data.row[data.column.COLUMN_NAME]"}],domProps:{value:s.row[s.column.COLUMN_NAME]},on:{input:function(t){t.target.composing||e.$set(s.row,s.column.COLUMN_NAME,t.target.value)}}})]]}}],null,!0)})]}}],null,!1,1035706048)}):e._e()],1)])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-md-12 p-0 mt-2"},[a("div",{staticClass:"theme-primary partition-full"},[a("span",{staticClass:"p-name text-white"},[e._v("Timesheet")]),a("span",{staticClass:"p-actions float-right"},[a("a",{staticClass:"p-action-btn text-white addman btn-info",attrs:{id:"AddManually",href:"javascript:;"}},[a("span",[e._v("Expert")])]),a("a",{staticClass:"p-action-btn text-white addman btn-info",attrs:{id:"AddManually",href:"javascript:;"}},[a("span",[e._v("This week")])]),a("a",{staticClass:"p-action-btn text-white addman btn-info",attrs:{id:"AddManually",href:"javascript:;"}},[a("i",{staticClass:"fa fa-delete mx-2"})])])])])}],c=(a("14d9"),a("9769")),r=a("b9b9"),l={data(){return{getPreviousDay:r["d"],FormSchema:[{layoutType:"triple",Data:[{astype:"DateField",label:"Date Range",name:"date_range",value:new Date,placeholder:"This week",config:{mode:"dateTime",is24hr:!0,format:"YYYY-MM-DD - hh:mm",minDate:new Date}},{astype:"SelectField",label:"User",name:"user_id",value:"",placeholder:"",config:{options:[]},validationRules:{}},{astype:"SlotField",label:"",name:"slotbutton",value:"",placeholder:""}]}],ListSchema:[{layoutType:"single",Data:[{astype:"SlotField",label:"",name:"TimeSheetTable",value:"",placeholder:"",config:{options:[]},validationRules:{}}]}],buttons:[{type:"submit",class:"btn btn-warning formbtn mr-2 text-dark",text:"<i class='fa fa-copy pr-2'></i>Copy Last Week",isVisible:!0},{type:"submit",class:"btn btn-warning formbtn mr-2 text-dark",text:"<i class='fa fa-save pr-2'></i>Save As Draft",isVisible:!0},{type:"submit",class:"btn btn-success text-white formbtn mr-2",text:"<i class='fa fa-save pr-2'></i>Send For Approval",isVisible:!0}],LegendArray:[{class:"",backgroundColor:"rgb(245 234 222)",name:"Recurring Tickets"},{class:"",backgroundColor:"rgb(245 234 222)",name:"Recurring Tickets"}],DataLoaded:0,PageNumber:1,PageSize:10,SortBy:"",SortExp:"",noRecord:!1,TotalRecords:0,isLoading:!1,TimesheetList:[],UserId:null,Headers:[{COLUMN_NAME:"ProjectName",DATA_TYPE:"string",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Projects",DISPLAY_ORDER:1}]}},created:async function(){this.DataLoaded=1,await this.GetUsersForTimesheet();var e=this;e.FormSchema[0].Data[1].value=e.GetUserInfo.ID,e.FetchData()},mounted:function(){console.log("mounted")},methods:{async GetUsersForTimesheet(){var e=this;e.isLoading=!0;var t="companyId=270936&loggedUserId=769083&userType=CA&userId=769083&moduleName=";await c["a"].GetUsersForTimesheet(t).then((function(t){t.data.result.forEach(t=>{e.obj={name:t.username,value:t.useR_ID},e.FormSchema[0].Data[1].config.options.push(e.obj)}),e.isLoading=!1}))},OnChange:function(){var e=$(".chkItems:checked").not("[id^='chkAll']").length;e>0?$("#DeleteMultiple").removeClass("disabled"):$("#DeleteMultiple").addClass("disabled")},commonHeaderButtonClick:function(e){switch(e.callbackfunction){case"openaddTicket":this.openaddTicket();break;case"setTourGuideSteps":this.setTourGuideSteps(0);break;case"ticketAssigned":this.TicketAssigned();break;case"commonDeleteData":this.commonDeleteData();break;case"openupdateStatus":this.openupdateStatus();break;case"DownloadExcelDataNew":this.DownloadExcelDataNew();break;case"openFilterPopUp":this.openFilterPopUp();break;case"opentags":this.AssignedTag(),breaks;case"removeFilter":break;case"ManageView":this.ManageView();break}},actionButtonClick:function(e,t,a,s){switch(e){case"Edit":break;case"OpenFileModal":this.OpenFileModal(t);break;case"ManageFollowUp":this.ManageFollowUp(t.ticket_id,t);break;case"openAddNewEvent":this.openAddNewEvent(t.ticket_id,t);break;case"openQuickViewpopup":this.openQuickViewpopup(t.ticket_id,t.str_ticket_id,t.ticket_category_id,t.is_field_service);break;case"openViewRecurringTicket":this.openViewRecurringTicket(t);break;case"AcceptRejectTicket":this.AcceptRejectTicket(t,s.currentTarget.innerText);break;case"openViewTicketTab":this.openViewTicketTab(t.ticket_id);break;case"MarkAsActive":this.MarkAsActive(t.ticket_id);default:this.De}},async onSubmit(e,t){var a=this;a.FetchData()},renderActions:function(e){},FetchData:async function(){var e=this;e.isLoading=!0;var t=e.$options.filters.formatDateTime(e.FormSchema[0].Data[0].value),a=e.$options.filters.formatDateTime(e.FormSchema[0].Data[0].value),s=`companyId=270936&userId=${e.FormSchema[0].Data[1].value}&dateFrom=${t}&dateTo=${a}`;await c["a"].ListTimesheetForWeek(s).then(t=>{if(null!=t.data&&""!=t.data&&t.data.length>0){const s=Object.keys(t.data[0]);var a;e.isLoading=!1,s.forEach(e=>{a++,"ProjectId"==e||"TaskId"==e?this.Headers.push({COLUMN_NAME:e,DATA_TYPE:"string",SORTABLE:!1,VISIBLE:!1,DISPLAY_NAME:e,DISPLAY_ORDER:a}):"TaskDetail"==e?this.Headers.push({COLUMN_NAME:e,DATA_TYPE:"string",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:e,DISPLAY_ORDER:a}):"ProjectName"==e||this.Headers.push({COLUMN_NAME:e,DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:Object(r["d"])(e),DISPLAY_ORDER:a})}),e.Headers.forEach(e=>{e.settings=null,s.forEach(t=>{e.COLUMN_NAME==t&&"ProjectName"!==e.COLUMN_NAME&&"TaskDetail"!==e.COLUMN_NAME&&(e.settings={isInSlot:!0})})}),e.TotalRecords=t.data.length,e.TimesheetList=t.data,setTimeout((function(){vueObj.CheckBoxBootstrap()}),100),setTimeout((function(){vueObj.ResponsiveDataTable("tablelistingdata")}),500),e.TotalPages=1,e.CurrentPage=1,$("[id^='chkAll']").prop("checked",!1).removeAttr("checked"),$(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),e.noRecord=!1,$("[id^='chkAll']").prop("checked",!1).removeAttr("checked"),$(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),e.noRecord=!1}else e.noRecord=!0,e.TimesheetList=[]})}}},d=l,u=a("2877"),m=Object(u["a"])(d,o,n,!1,null,null,null),p=m.exports,h={components:{TimeSheetListing:p},data(){return{}},created:function(){}},b=h,k=Object(u["a"])(b,s,i,!1,null,null,null);t["default"]=k.exports}}]);
//# sourceMappingURL=chunk-2d0cba6a.js.map