(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20e808"],{b048:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("loader",{attrs:{"is-visible":e.isLoading}}),a("tg-list",{attrs:{IsShowAction:!0,showCheckBox:!0,listType:["List","Card"],ModuleName:"Timer",SubModuleCode:"Timer",IdentityColumn:"ApplicationId",HeaderText:"Time Tracking",ListData:e.shortList,HeaderData:e.Headers,widgets:e.widgets,callbackfunction:e.FetchData,HeaderButtons:e.listheaderbuttons,TotalRecords:e.TotalRecords,SearchFields:e.leftSearchFields,RenderRowActionMethod:e.renderActions,ListDataCallBackFunction:e.FetchData,LegendArray:e.LegendArray,SortExp:e.sortExp,SortBy:e.sortBy,NorecordfoundText:e.$t("NoRecordfound")},on:{LeftsearchButtonClick:e.leftCommonSearch,PagerButtonClick:e.pagerMethod,HeaderButtonClick:e.commonHeaderButtonClick,ActionButtonClick:e.actionButtonClick,SortdataButtonClick:e.sortdata},scopedSlots:e._u([{key:"slotdata",fn:function(t){var i=t.data;return["ProductivityForDepartment"==i.column.COLUMN_NAME?[a("div",[i.row.IsDisabled?a("em",{staticClass:"fa fa-eye text-primary",attrs:{"aria-hidden":"true"},on:{click:function(t){return e.ShowProductivityDepartment(i)}}}):e._e(),i.row.IsDisabled?e._e():a("em",{staticClass:"fa fa-eye text-secondary",attrs:{"aria-hidden":"true"}})])]:e._e(),"ApplicationName"==i.column.COLUMN_NAME?[a("span",{class:i.row.icon_class},[e._v(" "+e._s(i.row.ApplicationName)+" ")])]:e._e()]}},{key:"customcard",fn:function(t){var i=t.data;return[a("div",{staticClass:"card-box",staticStyle:{"border-width":"5px 2px 2px","border-style":"solid","border-color":"rgb(35, 52, 20)","border-image":"initial"}},[a("div",{staticClass:"card-number"},[a("div",{class:{"custom-control custom-checkbox":!0,disabled:i.row.IsDisabled}},[a("input",{staticClass:"chkitems custom-control-input",staticStyle:{display:"none"},attrs:{id:"chkAll_"+i.row.ApplicationId,type:"checkbox"},domProps:{value:i.row.ApplicationId}}),a("label",{staticClass:"custom-control-label universal-custom-control-label pt-1",attrs:{for:"chkAll_"+i.row.ApplicationId}})]),a("span",{class:i.row.icon_class},[e._v(" "+e._s(i.row.ApplicationName)+" ")])]),a("div",{staticClass:"card-detail-main filterscrollForCardView"},[a("div",{staticClass:"card-detail",attrs:{"data-isfsm":"locating"}},[a("em",{staticClass:"fa fa-newspaper-o"}),a("span",[e._v("Category - "+e._s(null==i.row.category_name?"N/A":i.row.category_name))]),a("span")]),a("div",{staticClass:"card-detail"},[a("em",{staticClass:"fa fa-pie-chart"}),a("span",[e._v("Productivity For Department -")]),i.row.IsDisabled?a("span",{on:{click:function(t){return e.ShowProductivityDepartment(i)}}},[a("em",{class:1==e.checkIsdesabled?"fa fa-eye text-primary":"fa fa-eye text-primary disabled"}),e._v(" View ")]):e._e(),i.row.IsDisabled?e._e():a("span",[a("em",{class:"fa fa-eye text-secondary disabled"}),e._v(" View ")])]),a("div",{staticClass:"card-detail"},[a("em",{staticClass:"fa fa-clock-o"}),a("span",[e._v("Usage Time - "+e._s(i.row.TimeDuration)+" min")])])])])]}}])}),e.IsProductivityDepartment?a("ProductivityForDepartment",{attrs:{AssignDpt:e.AssignDpt}}):e._e(),e.IsAssignDepartment?a("AssignDepartment",{attrs:{selectedRecordValues:e.selectedRecordValues,AssignDpt:e.AssignDpt}}):e._e()],1)},s=[],r=(a("14d9"),a("9769"));let o=[{title:"Pin/Un-Pin",iconClass:"fa-thumb-tack",callbackfunction:"",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1},{title:"Yesterday",iconClass:"fa fa-plus",callbackfunction:"",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1},{title:"Assign Department",iconClass:"fa fa-server",callbackfunction:"AssignDepartmentClick",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!1},{title:"View History",iconClass:"fa fa-history",callbackfunction:"ViewHistory",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1},{title:"Delete",iconClass:"fa fa-trash",callbackfunction:"DeleteData",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!1}],n=[{fieldName:"User",fieldType:"ddl-check",fieldIcon:"fa fa-user",paramName:"userIds",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]},{fieldName:"Application",fieldType:"ddl-check",fieldIcon:"fa fa-suitcase",paramName:"applicationIds",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]},{fieldName:"Department",fieldType:"ddl-check",fieldIcon:"fa fa-suitcase",paramName:"departmentIds",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]},{fieldName:"Project",fieldType:"ddl-check",fieldIcon:"fa fa-suitcase",paramName:"projectIds",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]},{fieldName:"Category",fieldType:"ddl-check",fieldIcon:"fa fa-suitcase",paramName:"categoryIds",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]}],l=[{title:"Edit",callbackfunction:"Editdata",icon:"fa fa-pencil text-success action-icon",additionalSpan:"",isVisible:!0},{title:"Delete",icon:"fa fa-trash",callbackfunction:"DeleteData",additionalSpan:"",isVisible:!0},{}];function c(e,t,a){var i=e;if("USERS"==a){var s=`id=&modulename=${t}&type=${a}&search=&refId=`;r["a"].GetDDLData(s).then((function(e){let t={};e.data.DATA.forEach(e=>{t={name:e.name,value:parseInt(e.value)},i.leftSearchFields[0].listOptions.push(t)})}))}if("Application"==a&&r["a"].GetScreenShotListing().then((function(e){e.data.forEach(e=>{let t={name:e.ApplicationName,value:e.ApplicationId};i.leftSearchFields[1].listOptions.push(t)})})),"DEPARTMENT"==a){s=`id=&modulename=${t}&type=${a}&search=&refId=`;r["a"].GetDDLData(s).then((function(e){let t={};e.data.DATA.forEach(e=>{t={name:e.name,value:parseInt(e.value)},i.leftSearchFields[2].listOptions.push(t)})}))}if("PROJECT"==a){s=`id=&modulename=${t}&type=${a}&search=&refId=`;r["a"].GetDDLData(s).then((function(e){let t={};e.data.DATA.forEach(e=>{t={name:e.name,value:parseInt(e.value)},i.leftSearchFields[3].listOptions.push(t)})}))}"Category"==a&&r["a"].GetCategoryListing().then((function(e){JSON.parse(e.data).data.forEach(e=>{let t={name:e.category_name,value:e.category_id};i.leftSearchFields[4].listOptions.push(t)})}))}var d={buttons:o,listActions:l,leftsearchSchema:n,bindleftCommonSearchdropdown:c},p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"my-popups"},[a("div",{staticClass:"modal d-block "},[a("div",{staticClass:"modal-dialog modal-dialog-centered ui-draggable"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header ui-draggable-handle  py-0"},[a("h4",{staticClass:"modal-title mt-2 pt-1",attrs:{name:"header"}},[e._v(" "+e._s(e.$t("ProductivityForDepartment"))+" ")]),a("button",{staticClass:"close",on:{click:e.closePopup}},[a("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"listing py-3 px-3"},[a("div",{staticClass:"table-responsive table-fix-header",attrs:{id:"div_forListView"}},[a("table",{staticClass:"table table-bordered mt-0",staticStyle:{width:"100%"},attrs:{id:"tblFileList"}},[e._m(0),a("tbody",[e._l(e.tagArrObj,(function(t){return a("tr",{key:t.department_name},[a("td",[a("span",{staticClass:"text-overflow-dynamic-container-text-center"},[e._v(" "+e._s(t.product_name_productive)+" ")])]),a("td",[a("span",{staticClass:"text-overflow-dynamic-container"},[e._v(" "+e._s(t.product_name_unproductive)+" ")])]),a("td",[a("span",{staticClass:"text-overflow-dynamic-container"},[e._v(" "+e._s(t.product_name_neutral)+" ")])])])})),a("tr")],2)])])])])])])])},u=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",{staticClass:"thead-bg"},[a("tr",[a("th",[a("span",[e._v("Productive")])]),a("th",{staticClass:"nonresize"},[a("span",[e._v("Unproductive")])]),a("th",{staticClass:"nonresize",attrs:{"data-width":"5%"}},[a("span",[e._v("Neutral")])])])])}],m={props:{AssignDpt:{type:Array,required:!0}},data(){return{NoRecordLength:0,TagsSelectedArray:[],tagArrObj:[]}},created:function(){this.FetchData(this.AssignDpt)},methods:{FetchData:function(e){var t=this,a="applicationId="+e;r["a"].GetAssignDepartmentByApplicationId(a).then(e=>{t.TagsSelectedArray=e.data;var a=[],i=t.TagsSelectedArray.filter(e=>"Productive"==e.productive_type);a.push(i.length);var s=t.TagsSelectedArray.filter(e=>"UnProductive"==e.productive_type);a.push(s.length);var r=t.TagsSelectedArray.filter(e=>"Neutral"==e.productive_type);a.push(r.length);var o=a.sort((function(e,t){return e>t?1:e<t?-1:0})).slice(-1);for(l=0;l<o;l++){var n={product_name_productive:"",product_name_unproductive:"",product_name_neutral:""};t.tagArrObj.push(n)}for(var l=0;l<i.length;l++)t.tagArrObj[l].product_name_productive=i[l].department_name;for(l=0;l<s.length;l++)t.tagArrObj[l].product_name_unproductive=s[l].department_name;for(l=0;l<r.length;l++){n={};t.tagArrObj[l].product_name_neutral=r[l].department_name}})},closePopup(){var e=this;e.$parent.CloseProductivity()}}},h=m,g=a("2877"),f=Object(g["a"])(h,p,u,!1,null,null,null),v=f.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"my-popups"},[a("div",{staticClass:"modal d-block "},[a("div",{staticClass:"modal-dialog modal-dialog-centered ui-draggable"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header ui-draggable-handle  py-0"},[a("h4",{staticClass:"modal-title mt-2 pt-1",attrs:{name:"header"}},[e._v(" "+e._s(e.$t("AssignDepartment"))+" ")]),a("button",{staticClass:"close",on:{click:e.closePopup}},[a("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"listing py-3 px-3"},[e.DataLoaded?a("dynamic-form",{attrs:{lang:"en",buttons:e.buttons,schema:e.FormSchema},on:{OnSubmit:e.onSubmit}}):e._e()],1)])])])])},A=[],y={props:{selectedRecordValues:{type:Array,required:!0},AssignDpt:{type:Array,required:!0}},data(){return{FormSchema:[{layoutType:"triple",Data:[{astype:"CustomSelectField",label:this.$t("AppWebsite"),name:"AppWebsite",value:"",mode:"tag",placeholder:"",config:{options:[]}},{astype:"SelectField",label:this.$t("Category"),name:"category_id",value:"",placeholder:"",config:{options:[]},validationRules:{required:!0}},{astype:"NumericField",label:this.$t("MaxDuration"),name:"max_duration",value:"",placeholder:"",validationRules:{required:!0}}]},{layoutType:"triple",Data:[{astype:"CustomSelectField",label:this.$t("Productive"),name:"Productive",value:"",mode:"tag",placeholder:"",config:{options:[],onChange:this.onChangeDepartment},validationRules:{required:!0}},{astype:"CustomSelectField",label:this.$t("UnProductive"),name:"UnProductive",value:"",mode:"tag",placeholder:"",config:{options:[],onChange:this.onChangeDepartment},validationRules:{required:!0}},{astype:"CustomSelectField",label:this.$t("Neutral"),name:"Neutral",value:"",mode:"tag",placeholder:"",config:{options:[],onChange:this.onChangeDepartment},validationRules:{required:!0}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save",isVisible:!0},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Cancel",onClick:this.closePopup}],DataLoaded:0,TagsSelectedArray:[],departmentList:[],newDepartmentlist:[],ListData:[],TagsSelectedArray1:[],tagsData:[],TagsSelectedArray2:[],TagsSelectedArray3:[],MultiArray:[],obj:"",isAddAssignDept:!1}},created:function(){this.GetDepartmentName(),this.DataLoaded=1,this.pushList(),this.FetchData(this.AssignDpt),this.GetCategoryList()},methods:{FetchData:function(e){var t=this;t.isAddAssignDept=!1,void 0!=e&&void 0!=e.ApplicationId||(t.FormSchema[0].Data[1]={},t.FormSchema[0].Data[2]={},t.isAddAssignDept=!0);var a=void 0==e||void 0==e.ApplicationId?0:e.ApplicationId,i="applicationId="+a;r["a"].GetAssignDepartmentByApplicationId(i).then(a=>{if(void 0!=e&&void 0!=e.ApplicationId){var i={name:e.category_name,value:e.category_id};t.FormSchema[0].Data[1].value=i.value;var s=e.max_duration;t.FormSchema[0].Data[2].value=s;var r={label:e.ApplicationName,value:e.ApplicationId};t.FormSchema[0].Data[0].value=r}t.tagsData=a.data,t.tagsData.forEach((e,a)=>{"Productive"==e.productive_type?t.TagsSelectedArray1.push({label:e.department_name,value:e.department_id}):"UnProductive"==e.productive_type?t.TagsSelectedArray2.push({label:e.department_name,value:e.department_id}):"Neutral"==e.productive_type&&t.TagsSelectedArray3.push({label:e.department_name,value:e.department_id});let i=this.newDepartmentlist.map(e=>e.name).indexOf(e.department_name);t.newDepartmentlist.splice(i,1)}),t.FormSchema[1].Data[0].config.options=t.newDepartmentlist,t.FormSchema[1].Data[1].config.options=t.newDepartmentlist,t.FormSchema[1].Data[2].config.options=t.newDepartmentlist,t.FormSchema[1].Data[0].value=t.TagsSelectedArray1,t.FormSchema[1].Data[1].value=t.TagsSelectedArray2,t.FormSchema[1].Data[2].value=t.TagsSelectedArray3})},async onChangeDepartment(e,t){event.target.textContent;let a=this.newDepartmentlist.map(e=>e.name).indexOf(event.target.textContent);this.newDepartmentlist.splice(a,1)},async onSubmit(e,t){var a=this;if(a.isLoading=!0,null!=a.AssignDpt)var i=a.AssignDpt.ApplicationId;else i=0;new FormData;e.Productive.forEach(e=>{let t={department_id:e.value,productive_type:"Productive"};a.MultiArray.push(t)}),e.UnProductive.forEach(e=>{let t={department_id:e.value,productive_type:"UnProductive"};a.MultiArray.push(t)}),e.Neutral.forEach(e=>{let t={department_id:e.value,productive_type:"Neutral"};a.MultiArray.push(t)});var s={};s=void 0==e.category_id?{DepartmentAssignId:0,AppId:void 0==i?0:i,Websites:Array.prototype.map.call(e.AppWebsite,(function(e){return e.value})).join(","),Productivity:a.MultiArray}:{DepartmentAssignId:0,AppId:void 0==i?0:i,CategoryId:e.category_id,MaxDration:void 0==e.max_duration?0:e.max_duration,Websites:Array.prototype.map.call(e.AppWebsite,(function(e){return e.value})).join(","),Productivity:a.MultiArray},await r["a"].SaveAssignDepartment(s).then(e=>{a.isLoading=!1,1==e.data.status?(a.ShowAlert(a.$t("Departmentsuccessfullyassigned"),"success",!1,a.$t("Alert")),a.$parent.FetchData(),a.closePopup()):2==e.data.status?(a.ShowAlert(a.$t("Departmentsuccessfullyupdated"),"success",!0,a.$t("Alert")),a.$parent.FetchData(),a.closePopup()):a.ShowAlert(a.$t("Failure"),"error",!0,a.$t("Alert"))})},async GetCategoryList(){var e=this;e.isLoading=!0,await r["a"].GetCategoryListing().then((function(t){JSON.parse(t.data).data.forEach(t=>{e.obj={name:t.category_name,value:t.category_id},e.isAddAssignDept||e.FormSchema[0].Data[1].config.options.push(e.obj)}),e.isLoading=!1}))},async GetDepartmentName(){var e=this;e.isLoading=!0;await r["a"].GetDepartmentList().then(t=>{e.departmentList=t.data,e.departmentList.forEach(t=>{e.newDepartmentlist.push({name:t.text,value:t.value})}),e.FormSchema[1].Data[0].config.options=e.newDepartmentlist,e.FormSchema[1].Data[1].config.options=e.newDepartmentlist,e.FormSchema[1].Data[2].config.options=e.newDepartmentlist,e.isLoading=!1}).catch(e=>{console.error(e)})},closePopup(){var e=this;e.TagsSelectedArray=[],e.selectedRecordValues=[],e.$parent.CloseAssignDepartmentClick()},pushList(){var e=this;e.selectedRecordValues.forEach(t=>{e.TagsSelectedArray.push({label:t.ApplicationName,value:t.ApplicationId}),e.FormSchema[0].Data[0].config.options.push({name:t.ApplicationName,value:t.ApplicationId})}),e.FormSchema[0].Data[0].value=e.TagsSelectedArray}}},b=y,C=Object(g["a"])(b,D,A,!1,null,null,null),S=C.exports,_={components:{ProductivityForDepartment:v,AssignDepartment:S},data(){return{leftSearchFields:d.leftsearchSchema,listActions:d.listActions,shortList:[],Headers:[{COLUMN_NAME:"ApplicationName",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("ApplicationWebsite"),DISPLAY_ORDER:1,settings:{isInSlot:!0}},{COLUMN_NAME:"category_name",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("Category"),DISPLAY_ORDER:2},{COLUMN_NAME:"TimeDuration",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("UsageTime"),DISPLAY_ORDER:3},{COLUMN_NAME:"ProductivityForDepartment",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("ProductivityForDepartment"),DISPLAY_ORDER:3,settings:{isInSlot:!0}}],noRecord:!0,TotalRecords:0,CurrentPage:1,TotalPages:0,sortBy:"",sortExp:"",pageSize:10,pageNum:1,applicationCode:"",legendProgress:[{class:"",backgroundColor:"#17a2b8",name:"Draft"},{class:"legend-Progress",backgroundColor:"",name:"Approved"},{class:"legend-pending",backgroundColor:"",name:"Pending"},{class:"",backgroundColor:"#fe6847",name:"SendForCorrection"},{class:"",backgroundColor:"#ee1313",name:"Rejected"}],LegendArray:[],PageSizeOption:null,listheaderbuttons:d.buttons,UsedApplicationData:[],isLoading:!1,IsProductivityDepartment:!1,IsAssignDepartment:!1,isCategoryVisible:!1,DetailListType:"List",selectedRecordValues:[],checkIsdesabled:!1}},created(){this.FetchData(),d.bindleftCommonSearchdropdown(this,"Timer","USERS"),d.bindleftCommonSearchdropdown(this,"Timer","Application"),d.bindleftCommonSearchdropdown(this,"Timer","DEPARTMENT"),d.bindleftCommonSearchdropdown(this,"Timer","PROJECT"),d.bindleftCommonSearchdropdown(this,"Timer","Category")},methods:{AssignDepartmentClick(){var e=this;$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){e.selectedRecordValues.unshift(e.shortList.find(e=>e.ApplicationId==this.value))})),e.IsAssignDepartment=!0},EditAssignDepartmentClick:function(e){var t=this;t.AssignDpt=e,t.IsAssignDepartment=!0},CloseAssignDepartmentClick(){var e=this;e.selectedRecordValues=[],e.AssignDpt=[],e.IsAssignDepartment=!1},ShowProductivityDepartment(e){var t=this;t.AssignDpt=e.row.ApplicationId,t.IsProductivityDepartment=!0},CloseProductivity(){var e=this;e.IsProductivityDepartment=!1},async FetchData(){var e=this;e.isLoading=!0;var t=`pageSize=${e.pageSize}&pageNum=${e.pageNum}&sortBy=${e.sortBy}&sortExp=${e.sortExp}&${e.searchCondition}`;await r["a"].GetScreenShotListing(t).then(t=>{e.shortList=t.data,e.shortList.forEach(t=>{t.isCheckBoxDisabled=!1,1==t.IsDisabled&&(t.isCheckBoxDisabled=!0,e.checkIsdesabled=!0)}),e.isLoading=!1,e.TotalRecords=t.data[0].TotalRecords,e.TotalPages=Math.ceil(e.TotalRecords/e.pageSize),e.CurrentPage=e.pageNum,e.noRecord=!1,$(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),e.isLoading=!1}),setTimeout((function(){e.CheckBoxBootstrap()}),100)},DeleteData:function(){var e=this,t="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){t.length>0&&(t+=","),t+=$(this).val()})),t.length>0&&e.confirmR(e.$t("ConfirmDelete"),!0,e.$t("Delete")+"  "+e.$t("ApplicationId"),(function(){let a=`ids=${t}&tableName=TALYGEN_screenshot_detail&primaryKey=application_id`;r["a"].Delete(a).then(t=>{t.data?($("[id^='chkAll']").prop("checked",!1).removeAttr("checked"),$(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),$("[id^='DeleteMultiple']").removeClass("enable").addClass("disabled"),e.ShowAlert(e.$t("DeletedSuccessfully"),"Success",!0,e.$t("Alert"))):e.ShowAlert(e.$t("DeletedError",[e.$t("val")]),"failure",!0,e.$t("Alert")),e.FetchData()})}))},SingleDeleteData:function(e){var t=this;t.confirmR(t.$t("ConfirmDelete"),!0,t.$t("Delete")+"  "+t.$t("ApplicationId"),(function(){let a=`ids=${e.ApplicationId}&tableName=TALYGEN_screenshot_detail&primaryKey=application_id`;r["a"].Delete(a).then(e=>{"DeletedSuccess"==e.data?(t.ShowAlert(t.$t("DeletedSuccessfully"),"Success",!0,t.$t("Alert")),t.$router.push({name:"UsedApplicationListing"}),t.FetchData()):t.ShowAlert(t.$t("DeletedError",[t.$t("val")]),"failure",!0,t.$t("Alert"))})}))},actionButtonClick(e,t){var a=this;switch(e){case"Editdata":a.EditAssignDepartmentClick(t);break;case"DeleteData":a.SingleDeleteData(t);break}},renderActions(e){var t=this;let a=[];return t.listActions.forEach(t=>{let i={...t};switch(i.title){case"Edit":i.isVisible=!0,e.IsDisabled?(i.callbackfunction="Editdata",i.icon="fa fa-pencil text-success action-icon"):(i.callbackfunction="",i.icon="fa fa-pencil disabled text-success action-icon");break;case"Delete":i.isVisible=!0;break;default:i.isVisible=!0;break}a.push(i)}),a},pagerMethod:function(e){this.pageSize=e.PageSize,this.pageNum=e.PageNumber,this.FetchData()},commonHeaderButtonClick(e){switch(e.callbackfunction){case"CardView":this.CardViewListing();break;case"AssignDepartmentClick":this.AssignDepartmentClick();break;case"Editdata":this.Editdata();break;case"DeleteData":this.DeleteData();break;case"ViewHistory":this.ViewHistory();break}},ViewHistory:function(){this.$router.push({name:"HistoryListing"})},CardViewListing(){var e=this;e.DetailListType="Card"},leftCommonSearch:function(e){this.PageNumber=e.PageNumber,this.isPaged=1,"undefined"!=typeof e.searchCondition?this.searchCondition=e.searchConditionJson:this.searchCondition="",this.FetchData()},sortdata:function(e){var t="sort tb_headerSortDown";this.sortBy=e,e===this.sortBy&&(""==this.sortExp?(this.sortExp="ASC",t="sort tb_headerSortDown"):"ASC"==this.sortExp?(this.sortExp="DESC",t="sort tb_headerSortUp"):(this.sortExp="ASC",t="sort tb_headerSortDown")),this.FetchData(),$("#"+e+"  span:first-child").attr("class",t)}}},k=_,I=Object(g["a"])(k,i,s,!1,null,null,null);t["default"]=I.exports}}]);
//# sourceMappingURL=chunk-2d20e808.js.map