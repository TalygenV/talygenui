(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-444d8f0c"],{"01f0":function(e,t,a){"use strict";var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"modal my-popups right fade",attrs:{id:"modalscheduleview",role:"dialog"}},[t("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[t("div",{staticClass:"modal-content"},[t("div",{staticClass:"modal-header mheader-user"},[t("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(t){return e.close()}}},[t("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})]),t("h4",{staticClass:"modal-title",attrs:{id:"myModalLabel"}},[e._v(e._s(e.$t("ReportScheduling")))]),t("span",{staticClass:"user-guide"},[e._m(0),t("div",{staticClass:"divancuserguide collapse overflow-auto",attrs:{id:"collapseReplyUG"}},[t("div",{staticClass:"custom-scrollbar-js",attrs:{id:"scrollbarreplyuserguideMangeView"}},[t("div",{staticClass:"con",domProps:{innerHTML:e._s(e.$t("User_Guide_Dynamic_Report_Scheduling"))}})])])])]),e.showschedule?t("div",{staticClass:"modal-body"},[t("loader",{attrs:{"is-visible":e.isLoading}}),t("div",{staticClass:"w-100 float-left"},[e.DataLoaded?t("dynamic-form",{attrs:{lang:"en",buttons:e.buttons,schema:e.FormSchema},on:{OnSubmit:e.ScheduleReport},scopedSlots:e._u([{key:"tgslot-EnterEmailID",fn:function({data:a}){return[t("input",{directives:[{name:"model",rawName:"v-model",value:a.fieldInfo.value,expression:"data.fieldInfo.value"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:a.fieldInfo.value},on:{input:function(t){t.target.composing||e.$set(a.fieldInfo,"value",t.target.value)}}}),t("small",{staticClass:"form-text text-info"},[e._v("Enter multiple email id by comma seperator")])]}},{key:"tgslot-TimeSlot",fn:function({data:a}){return[t("select",{directives:[{name:"model",rawName:"v-model",value:a.fieldInfo.value,expression:"data.fieldInfo.value"}],class:{"form-control":!0,"is-invalid":""!=a.error},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(a.fieldInfo,"value",t.target.multiple?i:i[0])}}},[t("option",{attrs:{value:""}},[e._v("Select Time Slot")]),e._l(a.fieldInfo.config.options,(function(a,i){return t("option",{key:i,domProps:{value:a.value}},[e._v(" "+e._s(a.name)+" ")])}))],2),""!=a.error?t("span",{staticClass:"invalid-feedback"},[e._v(e._s(a.error))]):e._e(),t("small",{staticClass:"form-text text-info"},[e._v("Above mentioned timeslots are in Utc format")])]}}],null,!1,1170194222)}):e._e()],1)],1):e._e()])])])},o=[function(){var e=this,t=e._self._c;return t("a",{staticClass:"ancuserguide",attrs:{"data-toggle":"collapse",href:"javascript:;",role:"button","aria-expanded":"false","aria-controls":"collapseExample"}},[t("em",{staticClass:"fa fa-files-o pr-2"}),e._v("User Guide")])}],l=(a("14d9"),a("9769")),s={props:{ReportID:{type:String,Required:!0},EditScheduleData:{type:Object}},data(){return{isLoading:!1,modelreportname:"",ddldata:[],userType:"ALL",sharetomodel:"User",modelemailid:"",selectedusername:[],selectedfrequency:"",selectedday:"",selectedTimeSlot:"",showDay:!1,showDate:!1,Options:[],modeldateselected:"",modelSendtypeid:[],Timeslotdisplay:[],showschedule:!0,modelday:[],DataLoaded:0,FormSchema:[{layoutType:"single",Data:[{astype:"RadioField",label:this.$t("SendEmailTo"),name:"SendEmailTo",value:"",placeholder:"",config:{options:[{name:"User",value:"User"},{name:"Role",value:"Role"}],onChange:this.onchange},validationRules:""},{astype:"MultiSelectField",label:this.$t("SelectRecipient"),name:"SelectRecipient",value:"",mode:"tag",placeholder:"",config:{options:[],showAddIcon:!1},validationRules:""},{astype:"SlotField",label:this.$t("EnterEmailID"),name:"EnterEmailID",value:"",placeholder:"",config:{options:[],showAddIcon:!1},validationRules:""},{astype:"TextField",label:this.$t("Subject"),name:"Subject",value:"",placeholder:"",config:{options:[],showAddIcon:!1},validationRules:"required"}]},{group_name:"Time Schedule",layoutType:"double",Data:[{astype:"SelectField",label:this.$t("Frequency"),name:"Frequency",value:"",placeholder:"",config:{options:[],showAddIcon:!1,onChange:this.onFrequency},validationRules:"required"},{astype:"SelectField",label:this.$t("Day"),name:"Day",value:"",placeholder:"",visibility:!1,config:{options:[],showAddIcon:!1},validationRules:"required"},{astype:"SelectField",label:this.$t("Date"),name:"Date",value:"",placeholder:"",visibility:!1,config:{options:[],showAddIcon:!1},validationRules:"required"},{astype:"SlotField",label:this.$t("Time Slot"),name:"TimeSlot",value:"",placeholder:"",visibility:!0,config:{options:[],showAddIcon:!1},validationRules:"required"}]}],buttons:[{type:"submit",class:"btn btn-success save",text:"<i class='fa fa-clock-o pr-2'></i>Schedule"}],FrequencyList:[{name:"Daily",value:"Daily"},{name:"Weekly",value:"Weekly"},{name:"Monthly",value:"Monthly"}],WeekDays:[{name:"Sunday",value:"Sunday"},{name:"Monday",value:"Monday"},{name:"Tuesday",value:"Tuesday"},{name:"Wednesday",value:"Wednesday"},{name:"Thursday",value:"Thrusday"},{name:"Friday",value:"Friday"},{name:"Saturday",value:"Saturday"}]}},created:async function(){var e=this;e.FormSchema[0].Data[0].value=e.sharetomodel,await e.FetchUserData(),e.FormSchema[1].Data[0].config.options=e.FrequencyList,e.FormSchema[1].Data[1].config.options=e.WeekDays,e.GetDateList(),e.FetchTimeSlot(),e.EditScheduleData!=[]&&void 0!=e.EditScheduleData?setTimeout((function(){e.EditScheduleReport()}),2e3):e.EditEmailReport(e.ReportID),e.DataLoaded=1},mounted:function(){$("#modalscheduleview").modal({backdrop:"static",keyboard:!1})},methods:{close:function(){var e=this;e.sharetomodel="User",e.selectedusername=[],e.modelemailid="",e.selectedfrequency="",e.selectedday="",e.showDate=!1,e.showDay=!1,e.selectedTimeSlot="",e.modeldateselected="",e.showschedule=!1,e.$emit("close"),$("#modalscheduleview").modal("hide"),$("body").removeClass("modal-open"),$(".modal-backdrop").remove()},EditEmailReport:function(e){var t=this,a="&Report_id="+e;l["a"].Editdyanmicreport(a).then(e=>{t.modelreportname=e.data.ReportName,t.FormSchema[0].Data[3].value=t.modelreportname}).catch(e=>{console.log(e)})},FetchUserData:async function(){var e=this;e.isLoading=!0,await l["a"].UserDDL().then(t=>{e.ddldata=t.data,e.FormSchema[0].Data[1].config.options=[],e.Options=[],e.ddldata.forEach(t=>{e.Options.push({value:t.userid,name:t.username})}),e.FormSchema[0].Data[1].config.options=e.Options,e.isLoading=!1}).catch(e=>{console.log(e)})},FetchRoleData:async function(){var e=this,t="userType="+e.userType;await l["a"].GetRolesDDl(t).then(t=>{e.ddldata=t.data.DATA,e.FormSchema[0].Data[1].config.options=[],e.Options=[],e.ddldata.forEach(t=>{e.Options.push({value:t.role_id,name:t.role_name})}),e.FormSchema[0].Data[1].config.options=e.Options}).catch(e=>{console.log(e)})},onchange:function(e){var t=this;"User"==e.target.dataset.value?(t.Options=[],t.selectedusername=[],t.FormSchema[0].Data[0].value="User",t.FormSchema[0].Data[1].value="",t.FetchUserData()):(t.Options=[],t.selectedusername=[],t.FormSchema[0].Data[0].value="Role",t.FormSchema[0].Data[1].value="",t.FetchRoleData())},onFrequency:function(e){var t=this;"Daily"==e.target.value?(t.showDate=!1,t.showDay=!1,t.selectedday="",t.modeldateselected="",t.FormSchema[1].Data[1].visibility=!1,t.FormSchema[1].Data[2].visibility=!1,t.FormSchema[1].Data[3].visibility=!0):"Weekly"==e.target.value?(t.showDate=!1,t.showDay=!0,t.modeldateselected="",t.FormSchema[1].Data[1].visibility=!0,t.FormSchema[1].Data[2].visibility=!1,t.FormSchema[1].Data[3].visibility=!0):(t.showDate=!0,t.showDay=!1,t.selectedday="",t.FormSchema[1].Data[1].visibility=!1,t.FormSchema[1].Data[2].visibility=!0,t.FormSchema[1].Data[3].visibility=!0)},MulitEmailValidate:function(e){var t=this;if(t.modelemailid=e,""==t.modelemailid||void 0==t.modelemailid)return!0;if("string"==typeof t.modelemailid){var a=t.modelemailid.split(",");t.modelemailid=a;var i=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;for(let[e]of t.modelemailid.entries()){var o=t.modelemailid[e];if(!o.match(i))return t.ShowAlert('The email address  "'+o+'"  is invalid',"danger",!0,t.$t("Alert")),!1}return!0}},ScheduleReport:function(e,t){var a=this,i=a.MulitEmailValidate(e.EnterEmailID),o="";e.SelectRecipient.length>0&&e.SelectRecipient.forEach((e,t)=>{o+=0==t?e.value:","+e.value}),a.modelSendtypeid=o,a.selectedfrequency=e.Frequency,a.sharetomodel=e.SendEmailTo,a.modeldateselected="undefined"==e.Date?"":e.Date,a.selectedTimeSlot=e.TimeSlot,a.selectedday="undefined"==e.Day?"":e.Day,a.modelreportname=e.Subject;var s=0,d=0;if(void 0!=a.EditScheduleData?(s=a.EditScheduleData.ReportId,d=a.EditScheduleData.Report_emailId):(s=a.ReportID,d=0),"object"==typeof a.modelemailid){var n=String(a.modelemailid);a.modelemailid=n}if(!(s>0)||""==a.modelemailid&&""==a.modelSendtypeid||!i)return a.ShowAlert(a.$t("SelectOneUserRoleEmail"),"warning",!0,a.$t("Alert")),!1;a.isLoading=!0;var r=`Report_Email_Id=${d}&Email_id=${a.modelemailid}&Report_Id=${s}&Send_type=${a.sharetomodel}&Send_type_id=${a.modelSendtypeid}\n        &Subject=${a.modelreportname}&Frequency=${a.selectedfrequency}&date=${a.modeldateselected}&timeslot_id=${a.selectedTimeSlot}&day=${a.selectedday}`;l["a"].ScheduleEmail(r).then(e=>{"Success"==e.data[0].Status?(a.ShowAlert(a.$t("ScheduleReport"),"success",!0,a.$t("Alert")),void 0!=a.EditScheduleData&&this.$emit("RefreshScheduleListing"),a.isLoading=!1,a.close()):"Failed"==e.data[0].Status?(a.ShowAlert(e.data[0].Value,"danger",!0,a.$t("Alert")),a.isLoading=!1):(a.ShowAlert(a.$t("EmailFailed"),"danger",!0,a.$t("Alert")),a.isLoading=!1)}).catch(e=>{console.log(e),a.ShowAlert(a.$t("EmailFailed"),"danger",!0,a.$t("Alert")),a.isLoading=!1})},FetchTimeSlot:function(){var e=this;l["a"].FetchTimeSlotService().then(t=>{var a=[];e.Timeslotdisplay=JSON.parse(t.data[0].Value),e.Timeslotdisplay.forEach(e=>{a.push({name:e.slot_display,value:e.timeslot_id})}),e.FormSchema[1].Data[3].config.options=a}).catch(e=>{console.log(e)})},EditScheduleReport:async function(){var e=this;if(e.sharetomodel=e.EditScheduleData.Send_type,"User"==e.sharetomodel?await e.FetchUserData():await e.FetchRoleData(),""!=e.EditScheduleData.Send_type_id&&void 0!=e.EditScheduleData.Send_type_id&&(e.sharetomodel=e.EditScheduleData.Send_type,e.selectedusername=e.EditScheduleData.Send_type_id.split(",")),""!=e.EditScheduleData.EmailId&&(e.modelemailid=e.EditScheduleData.EmailId),e.modelreportname=e.EditScheduleData.REPORTNAME,e.selectedfrequency=e.EditScheduleData.Frequency,""!=e.selectedfrequency){var t={target:{value:e.selectedfrequency}};e.onFrequency(t)}e.selectedday=e.EditScheduleData.scheduleday,e.modeldateselected=e.EditScheduleData.scheduledate,e.selectedTimeSlot=e.EditScheduleData.timeslot_id;var a=[];e.selectedusername.forEach(t=>{var i=e.Options.filter(e=>e.value==t);i.forEach(e=>{var t={label:e.name,value:e.value};a.push(t)})}),e.FormSchema[0].Data[0].value=e.sharetomodel,e.FormSchema[0].Data[1].value=a,e.FormSchema[0].Data[2].value=e.modelemailid,e.FormSchema[0].Data[3].value=e.modelreportname,e.FormSchema[1].Data[0].value=e.selectedfrequency,e.FormSchema[1].Data[1].value=e.selectedday,e.FormSchema[1].Data[2].value=e.modeldateselected,e.FormSchema[1].Data[3].value=e.selectedTimeSlot},GetDateList:function(){var e=this,t=[];for(let a=1;a<32;a++)t.push({name:a,value:a});e.FormSchema[1].Data[2].config.options=t}}},d=s,n=(a("4172"),a("2877")),r=Object(n["a"])(d,i,o,!1,null,"442278aa",null);t["a"]=r.exports},"0f00":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e._self._c;return t("div",[t("loader",{attrs:{"is-visible":e.isLoading}}),t("tg-list",{attrs:{IsShowAction:!0,showCheckBox:!0,ModuleName:"Dynamic_Reporting",SubModuleCode:"Dynamic_Reporting",IdentityColumn:"Report_emailId",HeaderText:"Schedule Listing",ListData:e.ExpenseData,HeaderData:e.Headers,HeaderButtons:e.listheaderbuttons,TotalRecords:e.TotalRecords,SearchFields:e.leftSearchFields,RenderRowActionMethod:e.renderActions,NorecordfoundText:e.$t("NoRecordfound")},on:{LeftsearchButtonClick:e.leftCommonSearch,PagerButtonClick:e.pagerMethod,HeaderButtonClick:e.commonHeaderButtonClick,ActionButtonClick:e.actionButtonClick,SortdataButtonClick:e.sortdata}}),e.showschedulereportview?t("modalscheduleview",{attrs:{EditScheduleData:e.EditScheduleData},on:{close:function(t){e.showschedulereportview=!1},RefreshScheduleListing:e.RefreshScheduleListing}}):e._e()],1)},o=[],l=(a("14d9"),a("9769"));let s=[{id:"ViewHistory",title:"View History",iconClass:"fa-eye",callbackfunction:"ScheduledHistory",isdisabled:!1,isvisible:!0},{id:"DeleteMultiple",title:"Delete",iconClass:"fa-trash-o",callbackfunction:"commonDeleteData",isdisabled:!0,isvisible:!0},{id:"BackToList",title:"Back",iconClass:"fa fa-angle-double-left",callbackfunction:"BackToMainList",isvisible:!0}],d=[{fieldName:"Report Name",fieldType:"text",fieldIcon:"fa-file",paramName:"REPORTNAME",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]}],n=[{title:"Edit",callbackfunction:"EditScheduleEmail",icon:"fa fa-pencil text-success action-icon",additionalSpan:""}];var r={leftsearchSchema:d,buttons:s,listActions:n},c=a("01f0"),u={components:{modalscheduleview:c["a"]},async created(){var e=this;e.privilegeParams="controller=Report&action=",await e.FetchData()},data(){return{showschedulereportview:!1,ExpenseData:[],TotalRecords:null,listheaderbuttons:r.buttons,PageSize:10,PageNumber:1,SortBy:"",SortExp:"",isLoading:!1,leftSearchFields:r.leftsearchSchema,privilegeParams:null,listActions:r.listActions,Headers:[{COLUMN_NAME:"REPORTNAME",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Report Name",DISPLAY_ORDER:1},{COLUMN_NAME:"MODULENAME",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Module Name",DISPLAY_ORDER:1},{COLUMN_NAME:"CREATED_BY",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Created By",DISPLAY_ORDER:1},{COLUMN_NAME:"SLOT_DISPLAY",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Slot Display",DISPLAY_ORDER:1},{COLUMN_NAME:"Frequency",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Frequency",DISPLAY_ORDER:1},{COLUMN_NAME:"Send_To",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Send To",DISPLAY_ORDER:1}]}},methods:{RefreshScheduleListing:async function(){await this.FetchData()},FetchData:async function(){var e=this;e.isLoading=!0;const t=e.getRequestParams(this.pageNumber,this.pageSize,this.sortBy,this.sortExp,this.isPaged,this.searchCondition);t.pageSize=e.PageSize,t.pageNumber=e.PageNumber,""!=e.searchCondition&&(t.ReportName=$(".search").val()),e.PageNumber?t.pageNumber=e.PageNumber:e.PageNumber=t.pageNumber=1,"undefined"!=typeof e.isPaged?t.isPaged=e.isPaged:e.isPaged=e.isPaged=1,t.isPaged=e.isPaged,t.sortBy=e.SortBy,t.sortExp=e.SortExp,await l["a"].EmailScheduleListing(t).then((function(t){t.data.Data.length>0&&t.data.Data!=[]?(e.ExpenseData=t.data.Data,e.ExpenseData.forEach(e=>{1==e.ACCESS||2==e.ACCESS?e.isCheckBoxDisabled=!0:e.isCheckBoxDisabled=!1}),e.TotalRecords=t.data.Data[0].TOTAL_RECORDS):(e.ExpenseData=[],e.TotalRecords=0,e.isLoading=!1),setTimeout((function(){e.ResponsiveDataTable("tablelistingdata")}),500),e.isLoading=!1}))},getRequestParams:function(e,t,a,i,o,l){let s={};return e&&(s["pageNumber"]=e),l&&(s["searchcondition"]=l),o&&(s["is_paged"]=o),a&&(s["sortBy"]=a),i&&(s["sortExp"]=i),t&&(s["pageSize"]=t),s},renderActions:function(e){var t=this;let a=[];return t.listActions.forEach(t=>{let i={...t};switch(i.title){case"Edit":i.isVisible=1!=e.ACCESS;break;default:i.isVisible=!0;break}a.push(i)}),a},leftCommonSearch:async function(e){this.PageNumber=e.PageNumber,this.isPaged=1,"undefined"!=typeof e.searchCondition?this.searchCondition=e.searchCondition:this.searchCondition="",await this.FetchData()},pagerMethod:async function(e){this.PageSize=e.PageSize,this.PageNumber=e.PageNumber,await this.FetchData()},commonHeaderButtonClick:async function(e){switch(e.callbackfunction){case"commonDeleteData":await this.commonDeleteData();break;case"BackToMainList":this.BackToMainList();break;case"ScheduledHistory":this.ScheduledHistory();break}},actionButtonClick:function(e,t,a,i){var o=this;switch(e){case"EditScheduleEmail":o.EditScheduleEmail(t);break}},sortdata:async function(e){var t=this,a="sort tb_headerSortDown";t.SortBy=e,e===t.SortBy&&(""==t.SortExp?(t.SortExp="ASC",a="sort tb_headerSortDown"):"ASC"==t.SortExp?(t.SortExp="DESC",a="sort tb_headerSortUp"):(t.SortExp="ASC",a="sort tb_headerSortDown")),await t.FetchData(),$("#th-"+e+"  span:first-child").attr("class",a)},commonDeleteData:async function(e){var t=this;l["a"].CheckPrivilege(t.privilegeParams+"ScheduledReportDelete").then(e=>{if(!e.data)return t.ShowAlert(t.$t("UnAuthorized"),"warning",!0,"Alert"),!1;var a="";$(".chkItems:checkbox:checked").not("[id^='chkAll_0']").each((function(){a.length>0&&(a+=","),a+=$(this).val()})),a.length>0?t.confirmR(t.$t("ConfirmDelete"),!0,t.$t("Delete")+"  "+t.$t("ScheduledReport"),(function(){var e={ids:a,moduleName:"Dynamic_Reporting",subModuleCode:"Dynamic_Reporting",refCode:"Dynamic_Schedule_Report"},i=JSON.stringify(e);l["a"].CommonDeleteData(i).then((async function(e){200==e.status?($(".chkItems:checkbox:checked,#chkAll_0").prop("checked",!1).removeAttr("checked"),$("#DeleteMultiple").addClass("disabled"),t.ShowAlert(t.$t("DeletedSuccess",[t.$t("ScheduledReport")]),"success",!0,t.$t("Alert")),t.PageNumber=parseInt(t.PageNumber)-1,t.PageNumber<=0&&(t.PageNumber=1),await t.FetchData()):t.ShowAlert(t.$t("DeletedError",[t.$t("Report")]),"success",!0,t.$t("Alert"))}))})):ShowAlert(t.$t("Selectanyrecordtodelete"))})},EditScheduleEmail:function(e){var t=this;l["a"].CheckPrivilege(t.privilegeParams+"ScheduledReportUpdate").then(a=>{if(!a.data)return t.ShowAlert(t.$t("UnAuthorized"),"warning",!0,"Alert"),!1;t.EditScheduleData=e,t.showschedulereportview=!0,$("#modalscheduleview").modal("show"),setTimeout((function(){$("#modalscheduleview").modal("show"),setTimeout((function(){t.SetBootstraptoolTip()}),200)}),1e3)})},BackToMainList:function(){var e=this;e.$router.push({name:"CustomReports"})},ScheduledHistory:function(){var e=this;e.$router.push({name:"ScheduledHistory"})}}},m=u,h=a("2877"),p=Object(h["a"])(m,i,o,!1,null,null,null);t["default"]=p.exports},4172:function(e,t,a){"use strict";a("f862")},7792:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,".btn[data-v-442278aa]{font-size:14px;padding:.4rem 3.75rem}",""]),e.exports=t},f862:function(e,t,a){var i=a("7792");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=a("499e").default;o("54b8150d",i,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=chunk-444d8f0c.js.map