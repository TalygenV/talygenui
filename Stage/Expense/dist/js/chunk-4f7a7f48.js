(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f7a7f48"],{2948:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("loader",{attrs:{"is-visible":e.isLoading}}),a("tg-list",{attrs:{IsShowAction:!1,showCheckBox:!1,listType:["List"],ModuleName:"ExpenseApproval",SubModuleCode:"ExpenseApproval",IdentityColumn:"EXPENSEID",HeaderText:"Expense",ListData:e.ExpenseApprovalData,HeaderData:e.Headers,widgets:e.widgets,callbackfunction:e.FetchData,HeaderButtons:e.listheaderbuttons,TotalRecords:e.TotalRecords,SearchFields:e.leftSearchFields,RenderRowActionMethod:e.renderActions,ListDataCallBackFunction:e.FetchData,LegendArray:e.LegendArray,SortExp:e.SortExp,SortBy:e.SortBy,NorecordfoundText:e.$t("NoRecordfound")},on:{LeftsearchButtonClick:e.leftCommonSearch,PagerButtonClick:e.pagerMethod,HeaderButtonClick:e.commonHeaderButtonClick,ActionButtonClick:e.actionButtonClick,SortdataButtonClick:e.sortdata},scopedSlots:e._u([{key:"slotdata",fn:function(t){var s=t.data;return["Status"==s.column.COLUMN_NAME?[a("a",{staticClass:"inactive-disabled"},["SentForCorrection"!=s.row.Status?a("span",{class:e.getStatusClass(s.row.Status,"Status")},[e._v(" "+e._s(s.row[s.column.COLUMN_NAME])+" ")]):e._e(),"SentForCorrection"==s.row.Status?a("span",{class:e.getStatusClass(s.row.Status,"Status")},[e._v(" "+e._s(e.$t("SentForCorrection"))+" ")]):e._e()])]:e._e(),"Amount"==s.column.COLUMN_NAME?[e._v(" "+e._s(e.convertDecimalValueInFormat(s.row.Amount)+" "+s.row.ISO_CODE)+" ")]:e._e(),"Comment"==s.column.COLUMN_NAME?[a("a",{staticClass:"viewcomment commenticon enable ml-3",attrs:{href:"javascript:void(0);",title:""},on:{click:function(t){return e.openAddNewEvent(s.row.EXPENSEID)}}},[a("i",{staticClass:"fa fa-comment-o text-dark action-icon"}),a("span",{staticClass:"noti-circle noti-blue text-center"},[e._v(e._s(s.row.COMMENTSCOUNT))])])]:e._e()]}}])}),e.showCommentModal?a("ExpenseComments",{attrs:{expenseid:e.expid,CommentHeader:e.CommentHeader,isSingleCommentforMultipleExpenses:e.isSingleCommentforMultipleExpenses,statuscode:e.statuscode},on:{CloseExpenseComments:function(t){return e.CloseExpenseComments()},fetchdata:function(t){return e.fetchdata()}}}):e._e()],1)},o=[],i=(a("5319"),a("9769"));let n=[{fieldName:"DATE",fieldType:"date-range",fieldIcon:"fa-calendar",paramName:"dateFrom",fieldSearchConditionName:[""],isSearch:!1,datePickerConfig:{useCurrent:!1,showClear:!0,showClose:!0,allowInputToggle:!0,minDate:!1,maxDate:!1,widgetPositioning:{horizontal:"right",vertical:"bottom"}},secondDatePickerConfig:{useCurrent:!1,showClear:!0,showClose:!0,allowInputToggle:!0,minDate:!1,maxDate:!1,widgetPositioning:{horizontal:"right",vertical:"bottom"}},value:"",secondValue:"",listOptions:[]},{fieldName:"Project",fieldType:"ddl-check",fieldIcon:"fa-file",paramName:"projectId",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]},{fieldName:"User",fieldType:"ddl-check",fieldIcon:"fa fa-file-text-o",paramName:"userId",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]},{fieldName:"Status",fieldType:"ddl-check",fieldIcon:"fa fa-file-text-o",paramName:"statusCode",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[{value:"EXP_APPROVED",name:"Approved"},{value:"EXP_REJECTED",name:"Rejected"},{value:"EXP_SEND_FOR_CORRECTION",name:"Send For Correction"}]}],r=[{title:"BacktoList",iconClass:"fa fa-angle-double-left",callbackfunction:"backtolist",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1}];function l(e,t,a,s){var o=e;let n={};n["type"]=t,n["IsEncrptedId"]=a,n["moduleName"]=s,"Project"==t&&i["a"].ExpenseGetProjectListing(n).then((function(e){var t=e.data;if(null!=t)return t.forEach((function(e,t){let a={name:e.name,value:""+e.value};o.leftSearchFields[1].listOptions.push(a)})),o.$parent.ExpenseGetProjectList=t})),"User"==t&&i["a"].ExpenseGetUserListing(n).then((function(e){var t=e.data;if(null!=t)return t.forEach((function(e,t){let a={name:e.name,value:""+e.value};o.leftSearchFields[2].listOptions.push(a)})),o.$parent.ExpenseGetUserList=t}))}var c={buttons:r,leftsearchSchema:n,bindleftCommonSearchdropdown:l},d=a("9d1d"),m={components:{ExpenseComments:d["a"]},data(){return{Headers:[{COLUMN_NAME:"Date",DATA_TYPE:"date",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Date",DISPLAY_ORDER:1},{COLUMN_NAME:"Title",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Title",DISPLAY_ORDER:2},{COLUMN_NAME:"UserName",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"UserName",DISPLAY_ORDER:3},{COLUMN_NAME:"Category",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Category",DISPLAY_ORDER:4},{COLUMN_NAME:"TRIP",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Trip",DISPLAY_ORDER:5},{COLUMN_NAME:"Project",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Project",DISPLAY_ORDER:6},{COLUMN_NAME:"Amount",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Amount",DISPLAY_ORDER:7,settings:{isInSlot:!0}},{COLUMN_NAME:"Status",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Status",DISPLAY_ORDER:8,settings:{isInSlot:!0}},{COLUMN_NAME:"Comment",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Comment",DISPLAY_ORDER:9,settings:{isInSlot:!0,clickEvent:this.clickEventOfColumn}}],widgets:[],listheaderbuttons:c.buttons,leftSearchFields:c.leftsearchSchema,searchCondition:"",TotalRecords:0,PageNumber:1,PageSize:10,SortBy:"",SortExp:"",noRecord:!1,CurrentPage:1,TotalPages:0,ExpenseApprovalData:null,CommentHeader:null,isSingleCommentforMultipleExpenses:null,showCommentModal:null,statuscode:null,expid:null,LegendArray:[],isLoading:!1,View_List:[],UserType:""}},created:function(){var e=this;e.FetchData(),c.bindleftCommonSearchdropdown(e,"Project","no",""),c.bindleftCommonSearchdropdown(e,"User","","EXPENSEAPPROVAL"),e.UserType=e.GetUserInfo.UserType,e.LegendArray=[{class:"legend-pending colorboxsquare",text:e.$t("Overridable",["History"])},{class:"legends_medium colorboxsquare",text:e.$t("Forcible",["History"])}]},methods:{actionButtonClick:function(e,t){},renderActions(e){},getStatusClass:function(e,t){var a="";if("Status"==t){switch(e){case"Active":case"Approved":a="px-2 bg-success text-center text-white d-block";break;case"Inactive":case"Closed":case"Cancelled":case"Rejected":a="px-2 bg-danger text-center text-white d-block";break;case"Approval Pending":case"Partially Approved":a="px-2 bg-info text-center text-white d-block";break;case"Received":case"Partially Received":a="px-2 bg-secondary text-white text-center d-block";break;case"Draft":a="px-2 bg-warning text-center text-white d-block";break;case"No Gin":a="px-2 bg-primary text-center text-white d-block";break;default:a="px-2 bg-secondary text-center text-white d-block"}return a}},commonHeaderButtonClick:function(e){switch(e.callbackfunction){case"backtolist":this.GoBack();break}},GoBack:function(){this.$router.push({name:"ExpenseApproval"})},openAddNewEvent:function(e){this.CommentHeader="Comment",this.isSingleCommentforMultipleExpenses=0,this.showCommentModal=!0,this.statuscode="History",this.expid=e},CloseExpenseComments:function(){this.showCommentModal=!1},leftCommonSearch:function(e){this.PageNumber=e.PageNumber,this.isPaged=1,"undefined"!=typeof e.searchCondition?(this.searchCondition=e.searchConditionJson,this.searchCondition=this.searchCondition.replace("|","&dateTo=")):this.searchCondition="",this.FetchData()},pagerMethod:function(e){this.PageSize=e.PageSize,this.PageNumber=e.PageNumber,this.FetchData()},sortdata:function(e){var t="sort tb_headerSortDown";this.SortBy=e,e===this.SortBy&&(""==this.SortExp?(this.SortExp="ASC",t="sort tb_headerSortDown"):"ASC"==this.SortExp?(this.SortExp="DESC",t="sort tb_headerSortUp"):(this.SortExp="ASC",t="sort tb_headerSortDown")),this.FetchData(),$("#"+e+"  span:first-child").attr("class",t)},FetchData:function(){var e=this;e.isLoading=!0;var t=`pageSize=${e.PageSize}&pageNum=${e.PageNumber}&sortBy=${e.SortBy}&sortExp=${e.SortExp}&${e.searchCondition}`;i["a"].ExpenseApprovalHistory(t).then((function(t){e.isLoading=!0,null!=t.data?(t.data.length>0?(e.ExpenseApprovalData=t.data,e.ExpenseApprovalData.forEach(e=>{e.additionalClass="",1==e.ISFORCIABLE&&(e.additionalClass="high-bar"),1!=e.ISOVERRIDABLE&&"EXP_APPROVED"!=e.STATUSCODE&&"EXP_REJECTED"!=e.STATUSCODE||(e.additionalClass="medium-bar")}),e.TotalRecords=t.data[0].TotalRecords,e.TotalPages=Math.ceil(e.TotalRecords/e.PageSize),e.CurrentPage=e.PageNumber,e.noRecord=!1,e.isLoading=!1):(e.noRecord=!0,e.ExpenseApprovalData=[],e.TotalRecords=0),e.isLoading=!1):(e.noRecord=!0,e.ExpenseApprovalData=[],e.Headers=[],e.TotalRecords=0),setTimeout((function(){e.CheckBoxBootstrap()}),100),setTimeout((function(){e.ResponsiveDataTable("tablelistingdata")}),500),e.isLoading=!1}))}}},p=m,C=a("2877"),u=Object(C["a"])(p,s,o,!1,null,null,null);t["default"]=u.exports},"9d1d":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"my-popups"},[a("div",{staticClass:"modal d-block"},[a("div",{staticClass:"modal-dialog modal-dialog-centered"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[e._v(" "+e._s(this.CommentHeader)+" ")]),a("button",{staticClass:"close",attrs:{href:"javascript:;"},on:{click:function(t){return e.CloseExpenseComments()}}},[a("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"modal-body"},[a("Form",{ref:"CommentForm",scopedSlots:e._u([{key:"default",fn:function(t){var s=t.valid,o=t.errors;return[1==e.visibility?a("div",{class:{"d-none":1==e.showModelClientCompany}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"form-group"},[a("label",[e._v(e._s(e.$t("Title"))+":"),a("span",{staticClass:"text-danger"},[e._v("*")])]),a("Field",{attrs:{name:"Title",rules:{required:!0},label:"Title"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.CommentTitle,expression:"CommentTitle"}],class:{"form-control":!0,"is-invalid":s[0]},attrs:{name:"Title",id:"Title",type:"text",maxlength:"100"},domProps:{value:e.CommentTitle},on:{input:function(t){t.target.composing||(e.CommentTitle=t.target.value)}}}),s[0]?a("span",{staticClass:"invalid-feedback d-block",attrs:{name:"Name"}},[e._v(e._s(s[0]))]):e._e()]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("label",[e._v(e._s(e.$t("Description"))+":"),a("span",{staticClass:"text-danger"},[e._v("*")])]),a("Field",{attrs:{name:"Description",rules:{required:!0},label:"Description"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.errors;return[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.Commentdesc,expression:"Commentdesc"}],class:{"form-control":!0,"is-invalid":s[0]},staticStyle:{"max-height":"300px!important","min-height":"100px!important"},attrs:{maxlength:"250",id:"description",name:"Description"},domProps:{value:e.Commentdesc},on:{input:function(t){t.target.composing||(e.Commentdesc=t.target.value)}}}),e._v(" "),s[0]?a("span",{staticClass:"invalid-feedback d-block",attrs:{name:"Name"}},[e._v(e._s(s[0]))]):e._e()]}}],null,!0)})],1),1==e.access?a("div",{staticClass:"form-group"},[a("label",[e._v("Visibility:"),a("span",{staticClass:"text-danger"},[e._v("*")])]),a("div",{staticClass:"form-control pl-0 border-0"},[a("Field",{attrs:{name:"ReimburseBy",rules:{required:!0},label:"Reimburse By"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.errors;return[a("div",{staticClass:"form-check form-check-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.SelectedVale,expression:"SelectedVale"}],attrs:{type:"radio",id:"Public",value:"Public",name:"Public"},domProps:{checked:e._q(e.SelectedVale,"Public")},on:{change:function(t){e.SelectedVale="Public"}}}),a("label",{staticClass:"form-check-label font-weight-normal ml-2",attrs:{for:"Client"}},[e._v(e._s(e.$t("Public")))])]),a("div",{staticClass:"form-check form-check-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.SelectedVale,expression:"SelectedVale"}],attrs:{type:"radio",id:"Private",value:"Private",name:"Company"},domProps:{checked:e._q(e.SelectedVale,"Private")},on:{change:function(t){e.SelectedVale="Private"}}}),a("label",{staticClass:"form-check-label font-weight-normal ml-2",attrs:{for:"Company"}},[e._v(e._s(e.$t("Private")))])]),s[0]?a("span",{staticClass:"invalid-feedback d-block",attrs:{name:"Name"}},[e._v(e._s(s[0]))]):e._e()]}}],null,!0)})],1)]):e._e()]),a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"row flex-row-reverse"},[1==e.isSingleCommentforMultipleExpenses?a("div",{staticClass:"col-lg-6 text-right"},[a("a",{staticClass:"btn btn-danger mr-2",attrs:{title:"Skip",href:"javascript:;"},on:{click:function(t){return e.Skip(s,o)}}},[a("span",[e._v(e._s(e.$t("Skip")))]),a("em",{staticClass:"fa fa-forward pl-2"})]),a("a",{staticClass:"btn btn-success",attrs:{title:e.$t("PostNewComment"),href:"javascript:;"},on:{click:function(t){return e.APostNewComment(s,o)}}},[a("em",{staticClass:"fa fa-send pr-2"}),a("span",[e._v(e._s(e.$t("PostNewComment")))])])]):e._e(),0==e.isSingleCommentforMultipleExpenses?a("div",{staticClass:"col-lg-6 text-right"},[a("a",{staticClass:"btn btn-success",attrs:{id:"postcomment",title:e.$t("PostNewComment"),href:"javascript:;"},on:{click:function(t){return e.PostNewComment(s,o)}}},[a("em",{staticClass:"fa fa-send pr-2"}),e._v(e._s(e.$t("PostNewComment")))])]):e._e(),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"py-2"},[a("small",{staticClass:"text-danger mandatory"},[e._v(e._s(e.$t("MandatoryString")))])])])])])])]):e._e(),1==e.isSingleCommentforMultipleExpenses?a("div",[a("div",{staticClass:"col-lg-12"},[e.showModelClientCompany?a("div",{staticClass:"row"},[a("div",{staticClass:"w-100 col-12"},[a("div",{staticClass:"alert alert-warning mb-3"},[e._v(" "+e._s(e.$t("ExpenseEntryWillBeReimbursedBy"))+" ")]),a("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left p-0"},[a("div",{staticClass:"form-group"},[a("label",[e._v(e._s(e.$t("ReimburseBy"))+":"),a("span",{staticClass:"text-danger"},[e._v("*")])]),a("div",{staticClass:"form-control pl-0 border-0"},[a("Field",{attrs:{name:"ReimburseBy",rules:{required:!0},label:"Reimburse By"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.errors;return[a("div",{staticClass:"form-check form-check-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.SelectedVale,expression:"SelectedVale"}],attrs:{type:"radio",id:"Client",value:"Client",name:"ReimburseBy"},domProps:{checked:e._q(e.SelectedVale,"Client")},on:{change:function(t){e.SelectedVale="Client"}}}),a("label",{staticClass:"form-check-label font-weight-normal ml-2",attrs:{for:"Client"}},[e._v(e._s(e.$t("Client")))])]),a("div",{staticClass:"form-check form-check-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.SelectedVale,expression:"SelectedVale"}],attrs:{type:"radio",id:"Company",value:"Company",name:"ReimburseBy"},domProps:{checked:e._q(e.SelectedVale,"Company")},on:{change:function(t){e.SelectedVale="Company"}}}),a("label",{staticClass:"form-check-label font-weight-normal ml-2",attrs:{for:"Company"}},[e._v(e._s(e.$t("Company")))])]),s[0]?a("span",{staticClass:"invalid-feedback d-block",attrs:{name:"Name"}},[e._v(e._s(s[0]))]):e._e()]}}],null,!0)})],1)])]),a("div",{staticClass:"col-lg-12 text-right p-0"},[a("div",{staticClass:"search-btm-btn"},[a("a",{staticClass:"btn btn-success",attrs:{title:"submit",href:"javascript:;"},on:{click:function(t){return e.SubmitExpenseApproval(s,o,"Skip")}}},[a("i",{staticClass:"fa fa-save pr-2"}),e._v(e._s(e.$t("Submit")))])])])])]):e._e()])]):e._e()]}}])}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[0==e.isSingleCommentforMultipleExpenses?a("div",{staticClass:"listing"},[a("div",{staticClass:"w-100 activity-tab",attrs:{id:"Expenseaccordion"}},e._l(e.CommentExpenseData,(function(t,s){return a("div",{key:s,staticClass:"card"},[a("div",{staticClass:"card-header"},[a("a",{staticClass:"card-link collapsed",attrs:{"data-toggle":"collapse",href:"#Expensecollapse"+s}},[a("div",{staticClass:"conversation-date heading-border"},[a("span",[a("em",{staticClass:"pr-1",attrs:{"aria-hidden":"true"}}),e._v(e._s(t.groupKey))])])])]),a("div",{class:{collapse:!0,show:0==s},attrs:{id:"Expensecollapse"+s}},e._l(t.groupData,(function(s,o){return a("div",{key:o,staticClass:"card-body"},[1==s.EXPENSE_ACCESS?a("div",{staticClass:"conversation-main"},[a("div",{staticClass:"conversation-time"},[a("span",[e._v(e._s(e.$options.filters.formatTime(s.CREATED_AT)))])]),a("div",{staticClass:"conversation-box-con"},[a("div",{staticClass:"conversation-box"},[a("div",{staticClass:"name-circle light-yellow"},[a("img",{staticClass:"img-circle avatar",attrs:{src:e.blobUrl,width:"51",height:"51",alt:"Image"}})]),a("div",{staticClass:"conversation-header addednote-ticket"},[a("span",[a("span",{staticClass:"sender-name"},[e._v(e._s(s.EXPENSE_COMMENT_TITLE))]),a("span",{staticClass:"sender-department",attrs:{title:t.EXPENSE_COMMENT_DESC}},[e._v(" ("+e._s(s.EXPENSE_COMMENT_DESC)+")")])])]),a("div",{staticClass:"conversation-content"},[a("div",{staticClass:"col-12 p-0 notesdata"},[a("h6",{staticClass:"text-muted time"},[a("i",[a("b",[e._v(e._s(s.CREATED_BY))]),e._v(", "+e._s(e.$t("PostedOn"))+": "),a("span",{staticClass:"text-danger"},[e._v(e._s(e.$options.filters.formatDateTime(s.CREATED_AT)))])])])])])])])]):e._e(),0==s.EXPENSE_ACCESS?a("div",{staticClass:"conversation-main"},[a("div",{staticClass:"conversation-time"},[a("span",[e._v(e._s(s.CREATED_AT))])]),a("div",{staticClass:"conversation-box-con"},[a("div",{staticClass:"conversation-box"},[a("div",{staticClass:"name-circle light-yellow"},[a("img",{staticClass:"img-circle avatar",attrs:{src:e.blobUrl,width:"51",height:"51",alt:"Image"}})]),a("div",{staticClass:"conversation-header addednote-ticket"},[a("span",[a("span",{staticClass:"sender-department"},[e._v(" "+e._s(s.EXPENSE_COMMENT_DESC))])])]),a("div",{staticClass:"conversation-content"},[a("div",{staticClass:"col-12 p-0 notesdata"},[a("h6",{staticClass:"text-muted time"},[a("i",[a("b",[e._v(e._s(s.CREATED_BY))]),e._v(", "+e._s(e.$t("PostedOn"))+": "),a("span",{staticClass:"text-danger"},[e._v(e._s(s.CREATED_AT))])])])])])])])]):e._e()])})),0)])})),0)]):e._e(),e.noRecordForTab&&0==e.isSingleCommentforMultipleExpenses?a("div",{staticClass:"text-center text-danger border p-3 mt-4"},[e._v(e._s(e.$t("NoRecordfound")))]):e._e()])])],1)])])])])},o=[],i=a("9769"),n={props:{expenseid:{type:String,required:!0},CommentHeader:{type:String,required:!0},isSingleCommentforMultipleExpenses:{type:Number,required:!0},statuscode:{type:String,required:!0},visibility:{type:Number,required:!0},access:{type:Number,required:!0}},data:function(){return{isLoading:!1,CommentTitle:"",Commentdesc:"",Expense_Id:"",userid:"",usertype:"",CommentExpenseData:[],showModelClientCompany:!1,SelectedVale:"",objectPostString:"",noRecordForTab:!0,SkipParam:!1,containerName:null,avatar:"",blobUrl:""}},created:function(){this.userid=this.GetUserInfo.ID,this.usertype=this.GetUserInfo.UserType,this.containerName=this.GetUserInfo.ContainerName,this.CommentList(),this.GetBlobUrl()},updated:function(){this.CommentList(),this.GetBlobUrl()},methods:{GetBlobUrl:function(){i["a"].GetBlobUrl().then(e=>{var t=e.data[0].CONFIG_DATA_VALUE;null==this.avatar?this.blobUrl="/Content/images/DefaultImages/uc_user_new.jpg":this.blobUrl=t+"/"+this.containerName+"/Upload/UserProfileImage/"+this.avatar})},Skip:function(){this.showModelClientCompany=!0,this.CommentTitle="",this.Commentdesc="",this.SkipParam=!0},CloseExpenseComments:function(){this.$emit("CloseExpenseComments")},PostNewComment:function(e,t){var a=this;a.$refs.CommentForm.validate().then(e=>{if(e){var t={ExpenseCommentId:0,CommentTitle:a.CommentTitle,Commentdesc:a.Commentdesc,Expense_Id:a.expenseid,EXPENSE_ACCESS:1,StatusId:1001},s=JSON.stringify(t);i["a"].SaveComment(s).then((function(e){200==e.status&&(a.ShowAlert(a.$t("AddedSuccess",[a.$t("Comments")]),"success",!0,a.$t("Alert")),a.noRecordForTab=!1,a.CommentTitle="",a.Commentdesc="",a.$refs.CommentForm.reset(),a.CommentList())}))}})},APostNewComment:function(e,t){var a=this;a.$refs.CommentForm.validate().then(e=>{a.$refs.CommentForm.errors.ReimburseBy.length>0&&(e=!0),a.$refs.CommentForm.errors.Description.length>0&&(e=!1),a.$refs.CommentForm.errors.Title.length>0&&(e=!1),e?"EXP_SEND_FOR_CORRECTION"==a.statuscode?(a.showModelClientCompany=!1,a.noRecordForTab=!1,a.SubmitExpenseApproval()):0==a.SkipParam&&(a.showModelClientCompany=!0):console.log(a.$refs.CommentForm.errors)})},CommentList:function(){var e=this;e.isLoading=!0;var t="id="+e.expenseid;i["a"].CommentsList(t).then((function(t){if(null!=t.data){e.CommentExpenseData=[];var a=t.data,s="";$.each(a,$.proxy((function(t,o){s=e.$options.filters.formatDate(o.CREATED_AT);var i=$.grep(e.CommentExpenseData,(function(e,t){return e.groupKey==s}));if(0==i.length){var n=$.grep(a,(function(t,a){return e.$options.filters.formatDate(t.CREATED_AT)==s}));if(n.length>0){var r={groupKey:s,groupData:n};e.CommentExpenseData.push(r),e.avatar=e.CommentExpenseData[0].groupData[0].avatar,e.noRecordForTab=!1}}}),this))}else e.noRecordForTab=!0,e.ExpenseData=[];e.ExpenseData=[],e.isLoading=!1}))},SubmitExpenseApproval:function(e,t,a){var s=this;s.$refs.CommentForm.validate().then(e=>{"Skip"==a?(s.$refs.CommentForm.errors.Description.length>0&&(e=!0),s.$refs.CommentForm.errors.Title.length>0&&(e=!0),s.$refs.CommentForm.errors.ReimburseBy.length>0&&(e=!1)):e=!0,e&&s.confirmR(s.$t("ExpenseApprove"),!0,s.$t("Delete")+"  "+s.$t("ExpenseApproval"),(function(){var e=`ids=${s.expenseid}&statusCode=${s.statuscode}&approvalTypeId=2&CommentTitle=${s.CommentTitle}&Commentdesc=${s.Commentdesc}&commentAccess=1&isForciable=0&isOverridable=0&reimburseBy=${s.SelectedVale}`;i["a"].AddApproverStatusListing(e).then((function(e){200==e.status&&("EXP_APPROVED"==s.statuscode?(s.$emit("CloseExpenseComments"),s.$emit("fetchdata"),$("[id^='chkAll']").prop("checked",!1).removeAttr("checked"),$(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),$("[id^='SendForReject']").removeClass("enable").addClass("disabled"),$("[id^='SendForApprove']").removeClass("enable").addClass("disabled"),s.ShowAlert(s.$t("ExpenseApproveReject",[s.$t("Approve")]),"success",!0,s.$t("Alert"))):"EXP_REJECTED"==s.statuscode?(s.$emit("CloseExpenseComments"),s.$emit("fetchdata"),$("[id^='chkAll']").prop("checked",!1).removeAttr("checked"),$(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),$("[id^='SendForReject']").removeClass("enable").addClass("disabled"),$("[id^='SendForApprove']").removeClass("enable").addClass("disabled"),s.ShowAlert(s.$t("ExpenseApproveReject",[s.$t("Decline")]),"success",!0,s.$t("Alert"))):(s.$emit("CloseExpenseComments"),s.$emit("fetchdata"),s.ShowAlert(s.$t("ExpenseApproveSendForCorrection",[s.$t("SendForCorrection")]),"success",!0,s.$t("Alert"))))}))}))})}}},r=n,l=a("2877"),c=Object(l["a"])(r,s,o,!1,null,null,null);t["a"]=c.exports}}]);
//# sourceMappingURL=chunk-4f7a7f48.js.map