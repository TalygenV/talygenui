(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a21df00"],{"292d":function(t,e,a){"use strict";a("5023")},5023:function(t,e,a){var i=a("da09");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("499e").default;s("16d82534",i,!0,{sourceMap:!1,shadowMode:!1})},b048:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("loader",{attrs:{"is-visible":t.isLoading}}),a("tg-list",{attrs:{IsShowAction:!0,showCheckBox:!0,listType:["List","Card"],ModuleName:"Timer",SubModuleCode:"Timer",IdentityColumn:"ApplicationId",HeaderText:t.$t("AppsAndWebsites"),ListData:t.shortListed,HeaderData:t.Headers,widgets:t.widgets,callbackfunction:t.FetchData,HeaderButtons:t.listheaderbuttons,TotalRecords:t.TotalRecords,SearchFields:t.leftSearchFields,RenderRowActionMethod:t.renderActions,ListDataCallBackFunction:t.FetchData,LegendArray:t.LegendArray,SortExp:t.sortExp,SortBy:t.sortBy,NorecordfoundText:t.$t("NoRecordfound")},on:{LeftsearchButtonClick:t.leftCommonSearch,PagerButtonClick:t.pagerMethod,HeaderButtonClick:t.commonHeaderButtonClick,ActionButtonClick:t.actionButtonClick,SortdataButtonClick:t.sortdata},scopedSlots:t._u([{key:"slotdata",fn:function(e){var i=e.data;return["ProductivityForDepartment"==i.column.COLUMN_NAME?[a("div",[i.row.IsDisabled?a("em",{staticClass:"fa fa-eye text-primary",attrs:{"aria-hidden":"true"},on:{click:function(e){return t.ShowProductivityDepartment(i)}}}):t._e(),i.row.IsDisabled?t._e():a("em",{staticClass:"fa fa-eye text-secondary",attrs:{"aria-hidden":"true"}})])]:t._e(),"ApplicationName"==i.column.COLUMN_NAME?[a("div",{staticClass:"pin pr-2 d-inline-block"},["Pin"==i.row.PinStatus?a("em",{staticClass:"fa fa-thumb-tack",staticStyle:{cursor:"pointer"},attrs:{"aria-hidden":"true"},on:{click:function(e){return t.UnPinData(i.row)}}}):t._e()]),a("div",{class:i.row.icon_class?"appicon "+i.row.icon_class:"appicon default"}),a("a",{attrs:{href:"#",title:i.row.application_display_name}},[t._v(" "+t._s(t.TruncateStr(i.row.application_display_name,20))+" ")])]:t._e()]}},{key:"customcard",fn:function(e){var i=e.data;return[a("div",{staticClass:"card-box",style:{"border-color":i.row.color_code}},[a("div",{staticClass:"card-number"},[a("div",{class:{"custom-control custom-checkbox":!0,disabled:i.row.IsDisabled}},[a("input",{staticClass:"chkitems custom-control-input",staticStyle:{display:"none"},attrs:{id:"chkAll_"+i.row.ApplicationId,type:"checkbox",disabled:i.row.IsDisabled},domProps:{value:i.row.ApplicationId},on:{change:function(e){return t.handle(e,i.row)}}}),a("label",{staticClass:"custom-control-label universal-custom-control-label pt-1 ",attrs:{for:"chkAll_"+i.row.ApplicationId}})]),a("div",{class:i.row.icon_class?"appicon "+i.row.icon_class:"appicon default"}),"Pin"==i.row.PinStatus?a("em",{staticClass:"fa fa-thumb-tack",staticStyle:{cursor:"pointer"},attrs:{"aria-hidden":"true"},on:{click:function(e){return t.UnPinData(i.row)}}}):t._e(),t._v(" "+t._s(i.row.application_display_name)+" ")]),a("div",{staticClass:"card-detail-main filterscrollForCardView"},[a("div",{staticClass:"card-detail",attrs:{"data-isfsm":"locating"}},[a("em",{staticClass:"fa fa-newspaper-o"}),a("span",[t._v("Category - "+t._s(null==i.row.category_name?"N/A":i.row.category_name))]),a("span")]),a("div",{staticClass:"card-detail"},[a("em",{staticClass:"fa fa-pie-chart"}),a("span",[t._v("Productivity For Department - "),i.row.IsDisabled?a("span",{staticClass:"viewicon",on:{click:function(e){return t.ShowProductivityDepartment(i)}}},[a("em",{class:1==t.checkIsdesabled?"fa fa-eye text-primary":"fa fa-eye text-primary disabled"}),t._v(" View ")]):t._e(),i.row.IsDisabled?t._e():a("span",{staticClass:"viewicon"},[a("em",{class:"fa fa-eye text-secondary disabled"}),t._v(" View ")])])]),a("div",{staticClass:"card-detail"},[a("em",{staticClass:"fa fa-clock-o"}),a("span",[t._v("Usage Time - "+t._s(i.row.TimeDuration)+" ")])])]),a("div",{staticClass:"verticle-action"},[a("em",{staticClass:"fa fa-ellipsis-v action_icon",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"action-list-box",staticStyle:{width:"0px",display:"block",opacity:"0"}},[a("span",{staticClass:"list-actions fsm-list",staticStyle:{"padding-left":"0px"},attrs:{id:"action-list"}},[a("a",{staticClass:"update actions-onclick",staticStyle:{overflow:"unset"},attrs:{href:"javascript:;"}},["Pin"==i.row.PinStatus?a("span",[a("a",{staticClass:"actions-onclick",staticStyle:{overflow:"unset"},attrs:{typetitle:"Pin",typefor:"Pin",title:"Pin"},on:{click:function(e){return t.actionButtonClick("PinData",i.row)}}},[a("em",{staticClass:"fa fa-thumb-tack disabled "}),a("span",{staticClass:"text"},[t._v(" Pin "),a("span")])])]):a("span",[a("a",{staticClass:"actions-onclick",staticStyle:{overflow:"unset"},attrs:{typetitle:"Pin",typefor:"Pin",title:"Pin"},on:{click:function(e){return t.actionButtonClick("PinData",i.row)}}},[a("em",{staticClass:"fa fa-thumb-tack"}),a("span",{staticClass:"text"},[t._v(" Pin "),a("span")])])]),i.row.IsDisabled?a("span",[a("a",{staticClass:"actions-onclick",staticStyle:{overflow:"unset"},attrs:{typetitle:"Edit",typefor:"Edit",value:"275",title:"Edit"},on:{click:function(e){return t.actionButtonClick("Editdata",i.row)}}},[a("em",{staticClass:"fa fa-pencil  text-success action-icon"}),a("span",{staticClass:"text"},[t._v(" Edit "),a("span")])])]):a("span",[a("a",{staticClass:"actions-onclick",staticStyle:{overflow:"unset"},attrs:{typetitle:"Edit",typefor:"Edit",value:"275",title:"Edit"}},[a("em",{staticClass:"fa fa-pencil disabled text-success action-icon"}),a("span",{staticClass:"text"},[t._v(" Edit "),a("span")])])]),a("a",{staticClass:"actions-onclick",staticStyle:{overflow:"unset"},attrs:{typetitle:"Delete",typefor:"Delete",value:"275",title:"Delete"},on:{click:function(e){return t.actionButtonClick("DeleteData",i.row)}}},[a("em",{staticClass:"fa fa-trash "}),a("span",{staticClass:"text"},[t._v(" Delete "),a("span")])]),a("em",{staticClass:"fa fa-times close close-action",attrs:{"aria-hidden":"true"}})])])])])])]}}])}),t.IsProductivityDepartment?a("ProductivityForDepartment",{attrs:{AssignDpt:t.AssignDpt}}):t._e(),t.IsAssignDepartment?a("AssignDepartment",{attrs:{selectedRecordValues:t.selectedRecordValues,AssignDpt:t.AssignDpt}}):t._e()],1)},s=[],r=(a("14d9"),a("9769"));let n=[{title:"Assign Department",iconClass:"fa fa-server",callbackfunction:"AssignDepartmentClick",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!1,isEnabledOnSelectedRow:!0},{title:"View History",iconClass:"fa fa-history",callbackfunction:"ViewHistory",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1},{title:"Delete",iconClass:"fa fa-trash",callbackfunction:"DeleteData",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!1,isEnabledOnSelectedRow:!0}],o=[{fieldName:"Application Type",fieldType:"radio",fieldIcon:"fa fa-users",paramName:"is_website",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]},{fieldName:"User",fieldType:"ddl-check",fieldIcon:"fa fa-user",paramName:"userIds",fieldSearchConditionName:[],isSearch:!1,value:"",listOptions:[]},{fieldName:"Application",fieldType:"ddl-check",fieldIcon:"fa fa-suitcase",paramName:"applicationIds",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]},{fieldName:"Department",fieldType:"ddl-check",fieldIcon:"fa fa-suitcase",paramName:"departmentIds",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]},{fieldName:"Project",fieldType:"ddl-check",fieldIcon:"fa fa-suitcase",paramName:"projectIds",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]},{fieldName:"Category",fieldType:"ddl-check",fieldIcon:"fa fa-suitcase",paramName:"categoryIds",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]},{fieldName:"From Date",fieldType:"date",fieldIcon:"fa fa-calendar",paramName:"from_date",fieldSearchConditionName:[""],isSearch:!1,datePickerConfig:{useCurrent:!0,showClear:!0,showClose:!0,minDate:!0,maxDate:!0,widgetPositioning:{horizontal:"right",vertical:"bottom"}}},{fieldName:"To Date",fieldType:"date",fieldIcon:"fa fa-calendar",paramName:"to_date",fieldSearchConditionName:[""],isSearch:!1,datePickerConfig:{useCurrent:!0,showClear:!0,showClose:!0,minDate:!0,maxDate:!0,widgetPositioning:{horizontal:"right",vertical:"bottom"}}}],l=[{title:"Pin",icon:"fa fa-thumb-tack",callbackfunction:"PinData",additionalSpan:"",isVisible:!0},{title:"Edit",callbackfunction:"Editdata",icon:"fa fa-pencil text-success action-icon",additionalSpan:"",isVisible:!0},{title:"Delete",icon:"fa fa-trash",callbackfunction:"DeleteData",additionalSpan:"",isVisible:!0},{}];function c(t,e,a){var i=t;if("Application Type"==a){var s=[{name:"All",value:2},{name:"Apps ",value:0},{name:"Websites",value:1}];s.forEach(t=>{i.leftSearchFields[0].listOptions.push({name:t.name,value:""+t.value}),i.leftSearchFields[0].value=2})}if("USERS"==a){var n=`id=&modulename=${e}&type=${a}&search=&refId=`;r["a"].GetDDLData(n).then((function(t){let e={};t.data.DATA.forEach(t=>{e={name:t.name,value:t.value},i.leftSearchFields[1].listOptions.push(e)})}))}if("Application"==a){var o="pageSize=1000&sortBy=ApplicationName&sortExp=ASC";r["a"].GetScreenShotListing(o).then(t=>{var e=t.data;null!=e&&e.forEach((function(t,e){i.leftSearchFields[2].listOptions.push({name:t.application_display_name,value:""+t.ApplicationId})}))})}if("DEPARTMENT"==a){n=`id=&modulename=${e}&type=${a}&search=&refId=`;r["a"].GetDDLData(n).then((function(t){let e={};t.data.DATA.forEach(t=>{e={name:t.name,value:t.value},i.leftSearchFields[3].listOptions.push(e)})}))}if("PROJECT"==a){n=`id=&modulename=${e}&type=${a}&search=&refId=`;r["a"].GetDDLData(n).then((function(t){let e={};t.data.DATA.forEach(t=>{e={name:t.name,value:t.value},i.leftSearchFields[4].listOptions.push(e)})}))}if("Category"==a){o="pageSize=500&sortBy=category_name&sortExp=ASC";r["a"].GetCategoryListing(o).then((function(t){JSON.parse(t.data).data.forEach(t=>{let e={name:t.category_name,value:""+t.category_id};i.leftSearchFields[5].listOptions.push(e)})}))}}var d={buttons:n,listActions:l,leftsearchSchema:o,bindleftCommonSearchdropdown:c},p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"my-popups"},[a("div",{staticClass:"modal d-block "},[a("div",{staticClass:"modal-dialog modal-dialog-centered ui-draggable"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header ui-draggable-handle  py-0"},[a("h4",{staticClass:"modal-title mt-2 pt-1",attrs:{name:"header"}},[t._v(" "+t._s(t.$t("ProductivityForDepartment"))+" ")]),a("button",{staticClass:"close",on:{click:t.closePopup}},[a("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"listing py-3 px-3"},[a("div",{staticClass:"table-responsive table-fix-header",attrs:{id:"div_forListView"}},[a("table",{staticClass:"table table-bordered mt-0",staticStyle:{width:"100%"},attrs:{id:"tblFileList"}},[t._m(0),a("tbody",[t._l(t.tagArrObj,(function(e){return a("tr",{key:e.department_name},[a("td",[a("span",{staticClass:"text-overflow-dynamic-container-text-center"},[t._v(" "+t._s(e.product_name_productive)+" ")])]),a("td",[a("span",{staticClass:"text-overflow-dynamic-container"},[t._v(" "+t._s(e.product_name_unproductive)+" ")])]),a("td",[a("span",{staticClass:"text-overflow-dynamic-container"},[t._v(" "+t._s(e.product_name_neutral)+" ")])])])})),a("tr")],2)])])])])])])])},u=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"thead-bg"},[a("tr",[a("th",[a("span",[t._v("Productive")])]),a("th",{staticClass:"nonresize"},[a("span",[t._v("Unproductive")])]),a("th",{staticClass:"nonresize",attrs:{"data-width":"5%"}},[a("span",[t._v("Neutral")])])])])}],m={props:{AssignDpt:{type:Array,required:!0}},data(){return{NoRecordLength:0,TagsSelectedArray:[],tagArrObj:[]}},created:function(){this.FetchData(this.AssignDpt)},methods:{FetchData:function(t){var e=this,a="applicationId="+t;r["a"].GetAssignDepartmentByApplicationId(a).then(t=>{e.TagsSelectedArray=t.data;var a=[],i=e.TagsSelectedArray.filter(t=>"Productive"==t.productive_type);a.push(i.length);var s=e.TagsSelectedArray.filter(t=>"UnProductive"==t.productive_type);a.push(s.length);var r=e.TagsSelectedArray.filter(t=>"Neutral"==t.productive_type);a.push(r.length);var n=a.sort((function(t,e){return t>e?1:t<e?-1:0})).slice(-1);for(l=0;l<n;l++){var o={product_name_productive:"",product_name_unproductive:"",product_name_neutral:""};e.tagArrObj.push(o)}for(var l=0;l<i.length;l++)e.tagArrObj[l].product_name_productive=i[l].department_name;for(l=0;l<s.length;l++)e.tagArrObj[l].product_name_unproductive=s[l].department_name;for(l=0;l<r.length;l++){o={};e.tagArrObj[l].product_name_neutral=r[l].department_name}})},closePopup(){var t=this;t.$parent.CloseProductivity()}}},h=m,v=a("2877"),f=Object(v["a"])(h,p,u,!1,null,null,null),D=f.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("loader",{attrs:{"is-visible":t.isLoading}}),a("div",{staticClass:"my-popups"},[a("div",{staticClass:"modal d-block "},[a("div",{staticClass:"modal-dialog modal-dialog-centered ui-draggable"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header ui-draggable-handle  py-0"},[a("h4",{staticClass:"modal-title mt-2 pt-1",attrs:{name:"header"}},[t._v(" "+t._s(t.$t("AssignDepartment"))+" ")]),a("button",{staticClass:"close",on:{click:t.closePopup}},[a("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"listing py-3 px-3"},[t.DataLoaded?a("dynamic-form",{attrs:{lang:"en",buttons:t.buttons,schema:t.FormSchema},on:{OnSubmit:t.onSubmit}}):t._e()],1)])])])])],1)},y=[],_={props:{selectedRecordValues:{type:Array,required:!0},AssignDpt:{type:Array,required:!0}},data(){return{FormSchema:[{layoutType:"triple",Data:[{astype:"CustomSelectField",label:this.$t("AppWebsite"),name:"AppWebsite",value:"",mode:"tag",placeholder:"",config:{options:[]},validationRules:{required:!0}},{astype:"SelectField",label:this.$t("Category"),name:"category_id",value:"",placeholder:"",config:{options:[]}},{astype:"NumericField",label:this.$t("MaxDuration"),name:"max_duration",value:"",placeholder:""}]},{layoutType:"triple",Data:[{astype:"MultiSelectField",label:this.$t("Productive"),name:"Productive",value:"",mode:"tag",placeholder:"",config:{options:[],onChange:this.onChangeDepartment,onRemove:this.removeRecord},validationRules:{required:!0}},{astype:"MultiSelectField",label:this.$t("UnProductive"),name:"UnProductive",value:"",mode:"tag",placeholder:"",config:{options:[],onChange:this.onChangeDepartment,onRemove:this.removeRecord},validationRules:{required:!0}},{astype:"MultiSelectField",label:this.$t("Neutral"),name:"Neutral",value:"",mode:"tag",placeholder:"",config:{options:[],onChange:this.onChangeDepartment,onRemove:this.removeRecord},validationRules:{required:!0}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save",isVisible:!0},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Cancel",onClick:this.closePopup}],DataLoaded:0,TagsSelectedArray:[],departmentList:[],newDepartmentlist:[],ListData:[],TagsSelectedArray1:[],tagsData:[],TagsSelectedArray2:[],TagsSelectedArray3:[],MultiArray:[],obj:"",isLoading:!1}},created:function(){this.GetDepartmentName(),this.pushList(),this.GetCategoryList(),this.FetchData(this.AssignDpt),this.DataLoaded=1},methods:{FetchData:function(t){var e=this;e.isLoading=!0;var a=void 0==t||void 0==t.ApplicationId?0:t.ApplicationId,i="applicationId="+a;r["a"].GetAssignDepartmentByApplicationId(i).then(a=>{if(void 0!=t&&void 0!=t.ApplicationId){var i={name:t.category_name,value:t.category_id};e.FormSchema[0].Data[1].value=i.value;var s=t.max_duration;e.FormSchema[0].Data[2].value=s;var r={label:t.application_display_name,value:t.ApplicationId};e.FormSchema[0].Data[0].value=r}e.tagsData=a.data,e.tagsData.forEach((t,a)=>{e.newDepartmentlist.forEach((a,i)=>{"Productive"==t.productive_type?t.department_id==a.value&&(e.newDepartmentlist[i].label=t.department_name,e.newDepartmentlist[i].value=t.department_id,e.newDepartmentlist[i].productive_type="Productive"):"UnProductive"==t.productive_type?t.department_id==a.value&&(e.newDepartmentlist[i].label=t.department_name,e.newDepartmentlist[i].value=t.department_id,e.newDepartmentlist[i].productive_type="UnProductive"):"Neutral"==t.productive_type&&t.department_id==a.value&&(e.newDepartmentlist[i].label=t.department_name,e.newDepartmentlist[i].value=t.department_id,e.newDepartmentlist[i].productive_type="Neutral")})}),this.FormSchema[1].Data[0].config.options=this.newDepartmentlist.filter(t=>null==t.productive_type||"Productive"==t.productive_type),this.FormSchema[1].Data[1].config.options=this.newDepartmentlist.filter(t=>null==t.productive_type||"UnProductive"==t.productive_type),this.FormSchema[1].Data[2].config.options=this.newDepartmentlist.filter(t=>null==t.productive_type||"Neutral"==t.productive_type),this.FormSchema[1].Data[0].value=this.newDepartmentlist.filter(t=>"Productive"==t.productive_type),this.FormSchema[1].Data[1].value=this.newDepartmentlist.filter(t=>"UnProductive"==t.productive_type),this.FormSchema[1].Data[2].value=this.newDepartmentlist.filter(t=>"Neutral"==t.productive_type),this.validateForm(),e.isLoading=!1})},onChangeDepartment(t,e){if("Productive"==e.name){let t=this.newDepartmentlist.map(t=>t.name).indexOf(event.target.textContent);this.newDepartmentlist[t].productive_type="Productive"}if("UnProductive"==e.name){let t=this.newDepartmentlist.map(t=>t.name).indexOf(event.target.textContent);this.newDepartmentlist[t].productive_type="UnProductive"}if("Neutral"==e.name){let t=this.newDepartmentlist.map(t=>t.name).indexOf(event.target.textContent);this.newDepartmentlist[t].productive_type="Neutral"}this.FormSchema[1].Data[0].config.options=this.newDepartmentlist.filter(t=>null==t.productive_type||"Productive"==t.productive_type),this.FormSchema[1].Data[1].config.options=this.newDepartmentlist.filter(t=>null==t.productive_type||"UnProductive"==t.productive_type),this.FormSchema[1].Data[2].config.options=this.newDepartmentlist.filter(t=>null==t.productive_type||"Neutral"==t.productive_type),this.validateForm()},removeRecord(t,e,a){var i=this;let s=i.newDepartmentlist.map(t=>t.value).indexOf(t.value);"Productive"==a.name&&(i.newDepartmentlist[s].productive_type=null),"UnProductive"==a.name&&(i.newDepartmentlist[s].productive_type=null),"Neutral"==a.name&&(i.newDepartmentlist[s].productive_type=null),i.FormSchema[1].Data[0].config.options=i.newDepartmentlist.filter(t=>null==t.productive_type||"Productive"==t.productive_type),i.FormSchema[1].Data[1].config.options=i.newDepartmentlist.filter(t=>null==t.productive_type||"UnProductive"==t.productive_type),i.FormSchema[1].Data[2].config.options=i.newDepartmentlist.filter(t=>null==t.productive_type||"Neutral"==t.productive_type),this.validateForm()},validateForm(){var t=this;t.newDepartmentlist.filter(t=>"Productive"==t.productive_type).length>0&&(this.FormSchema[1].Data[1].validationRules.required=!1,this.FormSchema[1].Data[2].validationRules.required=!1),t.newDepartmentlist.filter(t=>"UnProductive"==t.productive_type).length>0&&(this.FormSchema[1].Data[0].validationRules.required=!1,this.FormSchema[1].Data[2].validationRules.required=!1),t.newDepartmentlist.filter(t=>"Neutral"==t.productive_type).length>0&&(this.FormSchema[1].Data[0].validationRules.required=!1,this.FormSchema[1].Data[1].validationRules.required=!1),0==t.newDepartmentlist.filter(t=>"Productive"==t.productive_type).length&&0==t.newDepartmentlist.filter(t=>"UnProductive"==t.productive_type).length&&0==t.newDepartmentlist.filter(t=>"Neutral"==t.productive_type).length&&(this.FormSchema[1].Data[0].validationRules.required=!0,this.FormSchema[1].Data[1].validationRules.required=!0,this.FormSchema[1].Data[2].validationRules.required=!0)},async onSubmit(t,e){var a=this;if(a.isLoading=!0,null!=a.AssignDpt)var i=a.AssignDpt.ApplicationId;else i=0;var s=new FormData;t.Productive.forEach(t=>{let e={department_id:t.value,productive_type:"Productive"};a.MultiArray.push(e)}),t.UnProductive.forEach(t=>{let e={department_id:t.value,productive_type:"UnProductive"};a.MultiArray.push(e)}),t.Neutral.forEach(t=>{let e={department_id:t.value,productive_type:"Neutral"};a.MultiArray.push(e)});var n={};n=(t.category_id,{DepartmentAssignId:0,AppId:void 0==i?0:i,CategoryId:t.category_id,MaxDration:void 0==t.max_duration?0:t.max_duration,Websites:Array.prototype.map.call(t.AppWebsite,(function(t){return t.value})).join(","),Productivity:a.MultiArray}),s.append("postString",JSON.stringify(n)),await r["a"].SaveAssignDepartment(n).then(t=>{a.isLoading=!1,1==t.data.status?(a.ShowAlert(a.$t("Departmentsuccessfullyassigned"),"success",!1,a.$t("Alert")),a.$parent.FetchData(),a.closePopup()):2==t.data.status?(a.ShowAlert(a.$t("Departmentsuccessfullyupdated"),"success",!0,a.$t("Alert")),a.$parent.FetchData(),a.closePopup()):a.ShowAlert(a.$t("Failure"),"error",!0,a.$t("Alert"))})},async GetCategoryList(){var t=this;t.isLoading=!0;var e="pageSize=500&sortBy=category_name&sortExp=ASC";await r["a"].GetCategoryListing(e).then((function(e){JSON.parse(e.data).data.forEach(e=>{t.obj={name:e.category_name,value:e.category_id},t.FormSchema[0].Data[1].config.options.push(t.obj)}),t.isLoading=!1}))},async GetDepartmentName(){var t=this;t.isLoading=!0;await r["a"].GetDepartmentList().then(e=>{t.departmentList=e.data,t.departmentList.forEach(e=>{t.newDepartmentlist.push({name:e.text,value:e.value,productive_type:null})}),t.FormSchema[1].Data[0].config.options=t.newDepartmentlist.filter(t=>null==t.productive_type||"Productive"==t.productive_type),t.FormSchema[1].Data[1].config.options=t.newDepartmentlist.filter(t=>null==t.productive_type||"UnProductive"==t.productive_type),t.FormSchema[1].Data[2].config.options=t.newDepartmentlist.filter(t=>null==t.productive_type||"Neutral"==t.productive_type),t.isLoading=!1}).catch(t=>{console.error(t)})},closePopup(){var t=this;t.TagsSelectedArray=[],t.selectedRecordValues=[],t.$parent.CloseAssignDepartmentClick()},pushList(){var t=this;t.isLoading=!0;t.selectedRecordValues.forEach(e=>{t.TagsSelectedArray.push({label:e.application_display_name,value:e.ApplicationId}),t.FormSchema[0].Data[0].config.options.push({name:e.application_display_name,value:e.ApplicationId})}),t.FormSchema[0].Data[0].value=t.TagsSelectedArray,void 0==t.AssignDpt&&(t.selectedRecordValues.length>0?""==t.selectedRecordValues[0].category_id?t.FormSchema[0].Data[1].value="":t.FormSchema[0].Data[1].value=t.selectedRecordValues[0].category_id:""==t.selectedRecordValues[0].category_id?t.FormSchema[0].Data[1].value="":t.FormSchema[0].Data[1].value=t.selectedRecordValues.category_id),t.isLoading=!1}}},S=_,A=Object(v["a"])(S,g,y,!1,null,null,null),C=A.exports,b={components:{ProductivityForDepartment:D,AssignDepartment:C},data(){return{leftSearchFields:d.leftsearchSchema,listActions:d.listActions,shortListed:[],Headers:[{COLUMN_NAME:"ApplicationName",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("ApplicationWebsite"),DISPLAY_ORDER:1,settings:{isInSlot:!0}},{COLUMN_NAME:"category_name",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("Category"),DISPLAY_ORDER:2},{COLUMN_NAME:"TimeDuration",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("UsageTime"),DISPLAY_ORDER:3},{COLUMN_NAME:"ProductivityForDepartment",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("ProductivityForDepartment"),DISPLAY_ORDER:3,settings:{isInSlot:!0}}],noRecord:!0,TotalRecords:0,CurrentPage:1,TotalPages:0,sortBy:"",sortExp:"ASC",pageSize:10,pageNum:1,applicationCode:"",legendProgress:[{class:"",backgroundColor:"#17a2b8",name:"Draft"},{class:"legend-Progress",backgroundColor:"",name:"Approved"},{class:"legend-pending",backgroundColor:"",name:"Pending"},{class:"",backgroundColor:"#fe6847",name:"SendForCorrection"},{class:"",backgroundColor:"#ee1313",name:"Rejected"}],LegendArray:[],PageSizeOption:null,listheaderbuttons:d.buttons,UsedApplicationData:[],isLoading:!1,IsProductivityDepartment:!1,IsAssignDepartment:!1,isCategoryVisible:!1,DetailListType:"List",selectedRecordValues:[],checkIsdesabled:!1,colorCode:"",datepicker:!1,fromDate:"",ToDate:"",widgets:[],PinJson:[],UnPinJson:[]}},created(){this.FetchData(),d.bindleftCommonSearchdropdown(this,"Timer","Application Type"),d.bindleftCommonSearchdropdown(this,"Timer","USERS"),d.bindleftCommonSearchdropdown(this,"Timer","Application"),d.bindleftCommonSearchdropdown(this,"Timer","DEPARTMENT"),d.bindleftCommonSearchdropdown(this,"Timer","PROJECT"),d.bindleftCommonSearchdropdown(this,"Timer","Category")},methods:{handle(t,e){var a=this;1==t.target.checked?(a.listheaderbuttons[0].isdisabled=!1,a.listheaderbuttons[2].isdisabled=!1,a.selectedRecordValues.push(e)):(a.listheaderbuttons[0].isdisabled=!0,a.listheaderbuttons[2].isdisabled=!0,a.selectedRecordValues=[])},async onDateChange(t){var e=this;e.fromDate=new Date(t),e.fromDate=e.ConvertDateFormat(e.fromDate),e.ToDate=e.fromDate+" 23:59:00",await e.GetAllAPiMethods()},AssignDepartmentClick(){var t=this;t.shortListed.length>0&&($(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){t.selectedRecordValues.push(t.shortListed.find(t=>t.ApplicationId==this.value))})),t.IsAssignDepartment=!0)},EditAssignDepartmentClick:function(t){var e=this;e.AssignDpt=t,e.IsAssignDepartment=!0},CloseAssignDepartmentClick(){var t=this;t.selectedRecordValues=[],t.AssignDpt=[],t.IsAssignDepartment=!1},ShowProductivityDepartment(t){var e=this;e.AssignDpt=t.row.ApplicationId,e.IsProductivityDepartment=!0},CloseProductivity(){var t=this;t.IsProductivityDepartment=!1},async FetchData(){var t=this;t.isLoading=!0;var e=`pageSize=${t.pageSize}&pageNum=${t.pageNum}&sortBy=${t.sortBy}&sortExp=${t.sortExp}&${t.searchCondition}`;await r["a"].GetScreenShotListing(e).then(e=>{t.shortListed=e.data,t.shortListed.length>0?(t.shortListed.forEach(e=>{e.additionalClass="",e.color_code&&(t.colorCode=e.color_code,e.CssStyle="border-left:2px solid "+t.colorCode+" !important"),e.isCheckBoxDisabled=!1,1==e.IsDisabled&&(e.isCheckBoxDisabled=!0,t.checkIsdesabled=!0)}),t.isLoading=!1,t.TotalRecords=e.data[0].TotalRecords,t.TotalPages=Math.ceil(t.TotalRecords/t.pageSize),t.CurrentPage=t.pageNum,t.noRecord=!1,t.isLoading=!1):(t.shortListed=[],t.noRecord=!0,t.isLoading=!1)}),setTimeout((function(){t.CheckBoxBootstrap()}),100)},DeleteData:function(){var t=this,e="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){e.length>0&&(e+=","),e+=$(this).val()})),e.length>0&&t.confirmR(t.$t("ConfirmDelete"),!0,t.$t("Delete")+"  "+t.$t("ApplicationId"),(function(){let a=`ids=${e}&tableName=TALYGEN_screenshot_detail&primaryKey=track_application_id`;r["a"].Delete(a).then(e=>{e.data?($("[id^='chkAll']").prop("checked",!1).removeAttr("checked"),$(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),$("[id^='DeleteMultiple']").removeClass("enable").addClass("disabled"),t.ShowAlert(t.$t("DeletedSuccessfully"),"Success",!0,t.$t("Alert"))):t.ShowAlert(t.$t("DeletedError",[t.$t("val")]),"failure",!0,t.$t("Alert")),t.FetchData()})}))},SingleDeleteData:function(t){var e=this;e.confirmR(e.$t("ConfirmDelete"),!0,e.$t("Delete")+"  "+e.$t("ApplicationId"),(function(){let a=`ids=${t.ApplicationId}&tableName=TALYGEN_screenshot_detail&primaryKey=track_application_id`;r["a"].Delete(a).then(t=>{"DeletedSuccess"==t.data?(e.ShowAlert(e.$t("DeletedSuccessfully"),"Success",!0,e.$t("Alert")),e.$router.push({name:"UsedApplicationListing"}),e.FetchData()):e.ShowAlert(e.$t("DeletedError",[e.$t("val")]),"failure",!0,e.$t("Alert"))})}))},actionButtonClick(t,e){var a=this;switch(t){case"Editdata":a.EditAssignDepartmentClick(e);break;case"DeleteData":a.SingleDeleteData(e);break;case"PinData":a.PinData(e);break}},PinData(t){var e=this;e.isLoading=!0;let a={Id:t.ApplicationId,ModuleName:"Timer_UsedApplication",ActionType:"Pin"};e.PinJson.push(a);let i=JSON.stringify(a);r["a"].ManagePin_UpPin(i).then(t=>{"Success"==t.data.status?($(".chkItems:checkbox:checked,#chkAll_0").prop("checked",!1).removeAttr("checked"),e.ShowAlert(e.$t("PinSuccess"),"success",!0,e.$t("Alert")),e.FetchData(),e.isLoading=!1):(e.ShowAlert(e.$t("PinUpinError","sdgf"),"warning",!0,e.$t("Alert")),e.isLoading=!1)})},UnPinData(t){var e=this;e.isLoading=!0;let a={Id:t.ApplicationId,ModuleName:"Timer_UsedApplication",ActionType:"UnPin"};e.PinJson.push(a);let i=JSON.stringify(a);r["a"].ManagePin_UpPin(i).then(t=>{"Success"==t.data.status?($(".chkItems:checkbox:checked,#chkAll_0").prop("checked",!1).removeAttr("checked"),e.ShowAlert(e.$t("UnPinSuccess"),"success",!0,e.$t("Alert")),e.FetchData(),e.isLoading=!1):(e.ShowAlert(e.$t("PinUpinError","sdgf"),"warning",!0,e.$t("Alert")),e.isLoading=!1)})},renderActions(t){var e=this;let a=[];return e.listActions.forEach(e=>{let i={...e};switch(i.title){case"Pin":"Pin"==t.PinStatus?(i.IsDisabled=!1,i.callbackfunction="",i.icon="fa fa-thumb-tack disabled"):(i.callbackfunction="PinData",i.icon="fa fa-thumb-tack");break;case"Edit":i.isVisible=!0,t.IsDisabled?(i.callbackfunction="Editdata",i.icon="fa fa-pencil text-success action-icon"):(i.callbackfunction="",i.icon="fa fa-pencil disabled text-success action-icon");break;case"Delete":i.isVisible=!0;break;default:i.isVisible=!0;break}a.push(i)}),a},pagerMethod:function(t){this.pageSize=t.PageSize,this.pageNum=t.PageNumber,this.FetchData()},commonHeaderButtonClick(t){switch(t.callbackfunction){case"CardView":this.CardViewListing();break;case"AssignDepartmentClick":this.AssignDepartmentClick();break;case"Editdata":this.Editdata();break;case"DeleteData":this.DeleteData();break;case"ViewHistory":this.ViewHistory();break}},ViewHistory:function(){this.$router.push({name:"HistoryListing"})},CardViewListing(){var t=this;t.DetailListType="Card"},leftCommonSearch:function(t){this.PageNumber=t.PageNumber,this.isPaged=1,"undefined"!=typeof t.searchCondition?this.searchCondition=t.searchConditionJson:this.searchCondition="",this.FetchData()},sortdata:function(t){var e="sort tb_headerSortDown";this.sortBy=t,t===this.sortBy&&(""==this.sortExp?(this.sortExp="ASC",e="sort tb_headerSortDown"):"ASC"==this.sortExp?(this.sortExp="DESC",e="sort tb_headerSortUp"):(this.sortExp="ASC",e="sort tb_headerSortDown")),this.FetchData(),$("#"+t+"  span:first-child").attr("class",e)}}},w=b,k=(a("292d"),Object(v["a"])(w,i,s,!1,null,null,null));e["default"]=k.exports},da09:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'.custom-low-bar>td:first-child:after{width:3px;content:"";height:calc(100% - 6px);background:#c7d321;display:block;position:absolute;left:0;top:3px}.card-detail span.viewicon{width:auto;float:right;margin-left:5px}.card-detail span.viewicon em{float:none;padding-right:0;width:19px}.verticle-action .fsm-list{width:110px!important}.update a{color:#000!important}',""]),t.exports=e}}]);
//# sourceMappingURL=chunk-7a21df00.js.map