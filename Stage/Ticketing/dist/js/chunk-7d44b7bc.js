(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d44b7bc"],{"1c69":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e._self._c;return t("section",[t("tg-list",{directives:[{name:"show",rawName:"v-show",value:e.IsFormBuilderView,expression:"IsFormBuilderView"}],attrs:{IsShowAction:!0,ModuleName:"Ticketing",SubModuleCode:"FormBuilder",LegendArray:[],widgets:[],IdentityColumn:"Id",HeaderText:e.$t("FormBuilder"),listType:["List"],ListData:e.TicketSourceList,HeaderData:e.Headers,HeaderButtons:e.listheaderbuttons,TotalRecords:e.TotalRecords,SearchFields:e.leftSearchFields,ListDataCallBackFunction:e.FetchRecords,showCheckBox:!0,SortExp:e.SortExp,SortBy:e.SortBy,RenderRowActionMethod:e.renderActions,NorecordfoundText:e.$t("NoRecordfound")},on:{HeaderButtonClick:e.commonHeaderButtonClick,LeftsearchButtonClick:e.leftCommonSearch,PagerButtonClick:e.pagerMethod,ActionButtonClick:e.FormBuilderactionButtonClick,SortdataButtonClick:e.sortdata},scopedSlots:e._u([{key:"slotdata",fn:function({data:a}){return["CreatedDate"==a.column.COLUMN_NAME?[t("span",[e._v(" "+e._s(e.$options.filters.formatDate(a.row.CreatedDate))+" ")])]:e._e(),"FormType"==a.column.COLUMN_NAME?[1==a.row.FormType?t("span",[e._v(e._s(e.$t("FORM")))]):e._e()]:e._e()]}}])}),e.showFormBuilderPopup?t("AddForm",{on:{Close:e.Close}}):e._e(),e.SetFormMapping?t("SetFormMapping",{attrs:{Form_Id:e.Form_Id,IsCheckLocate:e.IsCheckLocate,Form:e.moduleName}}):e._e()],1)},i=[];a("88a7"),a("271a"),a("5494"),a("14d9");let r=[{title:"Add ",iconClass:"fa fa-plus",callbackfunction:"openAddFormPopup",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!0,id:"Addticketing"},{title:"Delete",iconClass:"fa-trash-o",callbackfunction:"commonDeleteData",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!1,id:"DeleteMultiple",isEnabledOnSelectedRow:!0}],s=[{fieldName:"Form Name",fieldType:"text",fieldIcon:"fa fa-map-marker",fieldSearchConditionName:[""],paramName:"FormName",isSearch:!1,value:"",listOptions:[]}],d=[{title:"Mapping",href:"javascript:void(0)",icon:"fa fa-file text-info action-icon",callbackfunction:"MappingBuilder",additionalSpan:""},{title:"Edit",href:"javascript:void(0)",icon:"fa fa-pencil action-icon",callbackfunction:"Edit",additionalSpan:""},{title:"View",href:"javascript:void(0)",callbackfunction:"ClickOnView",icon:"fa fa-eye action-icon",additionalSpan:""},{title:"Delete",href:"javascript:void(0)",callbackfunction:"CommonDelete",icon:"fa fa-trash action-icon",additionalSpan:""}];var n={buttons:r,leftsearchSchema:s,listActions:d},l=a("9769"),c=a("d8e3"),u=a("26fe"),m={components:{AddForm:c["a"],SetFormMapping:u["a"]},data(){return{SetFormMapping:!1,showFormBuilderPopup:!1,showSetupTickectSource:!1,showExpanded:"",StatusMappingList:[],noRecords:!1,listheaderbuttons:n.buttons,leftSearchFields:n.leftsearchSchema,listActions:n.listActions,TotalRecords:0,PageNumber:1,PageSize:10,SortBy:"",SortExp:"",TotalPages:0,SearchCondition:"",TicketSourceList:[],GroupStart:1,GroupEnd:3,user_id:null,companyId:null,ticketSourceId:0,IsFormBuilderView:!0,moduleName:"FormBulider",Headers:[{COLUMN_NAME:"FormName",DATA_TYPE:"string",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Form Name",DISPLAY_ORDER:1},{COLUMN_NAME:"FormType",DATA_TYPE:"string",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Form Type",DISPLAY_ORDER:2},{COLUMN_NAME:"Description",DATA_TYPE:"string",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Description","DISPLAY_ORDER ":3},{COLUMN_NAME:"CreatedBy",DATA_TYPE:"string",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Created By",DISPLAY_ORDER:4},{COLUMN_NAME:"CreatedDate",DATA_TYPE:"string",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Created At",DISPLAY_ORDER:5}],Form_Id:"",IsCheckLocate:""}},created:function(){var e=this;e.user_id=this.GetUserInfo.ID,e.user_type=this.GetUserInfo.UserType,e.companyId=this.GetUserInfo.CompanyId,e.FetchRecords()},methods:{pagerMethod:function(e){this.PageSize=e.PageSize,this.PageNumber=e.PageNumber,this.FetchRecords()},sortdata:function(e){this.SortBy=e;var t="ASC";"ASC"==this.SortExp&&(t="DESC"),this.SortExp=t,this.SortBy=e,this.SortExp=t,this.PageNumber=1,this.GroupStart=this.PageNumber,this.GroupEnd=this.PageNumber+2,this.FetchRecords()},leftCommonSearch:function(e){var t=this;const a=new URLSearchParams(e.searchConditionJson),o=a.entries(),i=this.paramsToObject(o);i.hasOwnProperty("FormName")?t.SearchCondition=i["FormName"]:t.SearchCondition="",this.PageNumber=e.PageNumber,this.isPaged=1,this.FetchRecords()},commonHeaderButtonClick:function(e){switch(e.callbackfunction){case"commonDeleteData":this.DeleteFormBuilderListRecord();break;case"openAddFormPopup":this.openAddFormPopup();break}},FormBuilderactionButtonClick(e,t,a,o){switch(e){case"Edit":this.EditFormBuilder(t);break;case"MappingBuilder":this.MappingBuilder(t);break;case"CommonDelete":this.DeleteFormBuilderListRecord(t.Id);break;case"ClickOnView":this.ClickOnView(t);break}},ClickOnView:function(e){var t=this;t.$router.push({path:"/FormBuilder/View/"+e.Id})},EditFormBuilder:function(e){var t=this;t.$router.push({name:"ManageFormBuilder",params:{FormId:e.Id,ModuleId:e.ModuleId,SubModuleId:e.SubModuleId,FormName:e.FormName,FormType:e.FormType,Desc:e.Description}})},MappingBuilder:function(e){this.SetFormMapping=!0,this.Form_Id=e.Id,this.IsCheckLocate=e.IS_LOCATE_OR_NONLOCATE},openAddFormPopup:function(){var e=this;e.showFormBuilderPopup=!0},Close:function(){var e=this;e.showFormBuilderPopup=!1},isBlank:function(e){return!e||/^\s*$/.test(e)},formatDateTime:function(e){if(e)return moment(e).format(String(Globalize.culture().calendar.patterns.d).toUpperCase()+" "+String(Globalize.culture().calendar.patterns.t).replace("t","A").replace("t",""))},onEnter:function(e){var t=this;13==e.charCode&&(e.preventDefault(),t.SearchCondition=t.SearchCondition,t.FetchRecords())},refreshList:function(){this.SearchCondition="",this.FetchRecords()},DeleteSetupTickectSourceList:function(e){var t=this;t.CurrentPage=1,t.PageSize=10,t.PageNumber=1,t.FetchRecords()},renderActions:function(e){var t=this;let a=[];return t.listActions.forEach(e=>{let t={...e};switch(t.title){case"Edit":t.isVisible=!0;break;case"Mapping":t.isVisible=!0;break;case"View":t.isVisible=!0;break;case"Delete":t.isVisible=!0;break;default:t.isVisible=!0}a.push(t)}),a},Searchdata:function(){var e=this;e.SearchCondition=e.SearchCondition,e.FetchRecords()},refreshList:function(){this.SearchCondition="",this.FetchRecords()},DeleteFormBuilderListRecord:function(e){var t=this,a="";1==$(".chkItems:checkbox:checked").prop("checked")?$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){a.length>0&&(a+=","),a+=$(this).val()})):a+=e,a.length>0?t.confirmR(t.$t("ConfirmDelete"),!0,t.$t("Delete")+"  "+t.$t("FormBuilder"),(function(){var e={ids:a,companyId:t.companyId,userId:t.user_id,moduleName:"FormBuilder",subModuleCode:"FormBuilder",refCode:"TALYGEN_Form"},o=JSON.stringify(e);l["a"].DeleteMultipleRecords(o).then(e=>{var a="";"Success"==e.data[0].Status?(t.FetchRecords(),a=t.ShowAlert(t.$t("DeletedSuccess",[t.$t("FormBuilder")]),"Success",!0,t.$t("Alert"))):a=t.ShowAlert(t.$t("DeletedError",[t.$t("FormBuilder")]),"failure",!0,t.$t("Alert")),setTimeout((function(){a.modal("hide")}),2e3)})})):alert(t.$t("Selectanyrecordtodelete"))},addEditTemplate:function(e){var t="TempleteId="+e;l["a"].GetTemplateById(t).then((function(e){null!=e.data&&""!=e.data&&"Success"==e.data.status&&(model.TempleteId=e.data.result.data[0].ID)}))},FetchRecords:function(){var e=this;e.isBlank(e.SearchCondition)||(e.PageNumber=1);var t=`sortBy=${e.SortBy}&sortExp=${e.SortExp}&pagesize=${e.PageSize}&pagenumber=${e.PageNumber}`;e.isBlank(e.SearchCondition)||(t=t+"&search="+e.SearchCondition),l["a"].GetFormList(t).then((function(t){e.Headers.forEach(e=>{e.settings=null,"CreatedDate"==e.COLUMN_NAME&&(e.settings={isInSlot:!0}),"FormType"==e.COLUMN_NAME&&(e.settings={isInSlot:!0})}),e.TicketSourceList=[],null!=t.data&&""!=t.data&&("Success"==t.data.status?(e.TicketSourceList=t.data.result.data,e.TotalPages=Math.ceil(e.TotalRecords/e.PageSize),e.CurrentPage=e.PageNumber,e.listheaderbuttons[1].isdisabled=!0,"undefined"!=typeof e.TicketSourceList&&e.TicketSourceList.length>0?(e.TotalRecords=t.data.result.data[0].TOTALRECORDS,e.NoRecord=!1):e.NoRecord=!0):e.NoRecord=!0,setTimeout((function(){e.ResponsiveDataTable("tablelistingdata")}),500))}))},openPopupForSetupTickectSource:function(e){this.ticketSourceId=e,this.showSetupTickectSource=!this.showSetupTickectSource}}},h=m,p=a("2877"),S=Object(p["a"])(h,o,i,!1,null,null,null);t["default"]=S.exports},d8e3:function(e,t,a){"use strict";var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"my-popups"},[t("div",{staticClass:"modal d-block"},[t("div",{staticClass:"modal-dialog modal-dialog-centered"},[t("div",{staticClass:"modal-content"},[t("div",{staticClass:"modal-header theme-primary partition-full"},[t("h4",{staticClass:"modal-title"},[e._v("Add Form")]),t("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(t){return e.$emit("Close")}}},[t("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),t("div",{staticClass:"modal-body"},[t("dynamic-form",{ref:"AddForm",attrs:{lang:"en",buttons:e.buttons,schema:e.FormSchema},on:{OnSubmit:e.onSubmit}})],1)])])])])},i=[],r=(a("14d9"),a("9769")),s={created:function(){var e=this;e.moduleId,e.FormSchema[0].Data[0].value=e.formName,e.FormSchema[0].Data[2].value=e.moduleId,e.FormSchema[0].Data[4].value=e.description,e.GetModuleList(),e.moduleId&&e.onChangeDropdown()},data(){return{ModuleList:[],SelectedModuleId:0,SelectedSubModuleId:0,SubModuleList:[],FormSchema:[{layoutType:"double",Data:[{astype:"TextField",label:"Form Name",name:"txtFormName",value:"",placeholder:"",validationRules:{required:!0,max:100}},{astype:"RadioField",label:"Select Form Type",name:"Type",value:1,placeholder:"",validationRules:{required:!1,max:200},config:{options:[{name:"Form",value:1}],showAddIcon:!1,onChange:this.onChangeRadio}},{astype:"SelectField",label:this.$t("Module"),name:"Module",disabled:this.moduleId>0,value:"",config:{options:[],onChange:this.onChangeDropdown},placeholder:"Select Module",validationRules:{required:!0}},{astype:"SelectField",label:this.$t("Sub Module"),disabled:this.moduleId>0,visibility:!1,name:"Priority",value:"",config:{options:[],onChange:this.onChangeSubDropdown},placeholder:"Select Sub Module",validationRules:{required:!0}},{astype:"TextAreaField",mode:"Description",label:this.$t("Description"),name:"Description",value:"",config:{options:[]},placeholder:this.$t("Description"),validationRules:{required:!0}}]}],buttons:[{type:"submit",class:"btn btn-primary",isVisible:!(this.moduleId>0),text:"<i class='fa fa-forward pr-2'></i>Next"},{type:"submit",class:"btn btn-primary",isVisible:this.moduleId>0,text:"<i class='fa fa-forward pr-2'></i>Update",onClick:this.Update},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Close",onClick:this.Close}]}},props:{formName:{required:!1},description:{required:!1},moduleId:{required:!1},subModuleId:{required:!1}},methods:{Close:function(){var e=this;e.$emit("Close")},onSubmit:function(){var e=this;e.$router.push({name:"ManageFormBuilder",params:{FormId:0,ModuleId:e.SelectedModuleId,SubModuleId:e.SelectedSubModuleId,FormName:e.FormSchema[0].Data[0].value,FormType:1,Desc:e.FormSchema[0].Data[4].value}})},Update:function(){var e=this,t=e.FormSchema[0].Data[0].value;e.$emit("EditFormName",t)},GetModuleList:function(){var e=this;r["a"].GetModuleList().then(t=>{t.data.DATA.forEach(t=>{e.ModuleList.push({name:t.name,value:t.value})}),t.data.DATA.length>0&&(e.FormSchema[0].Data[2].config.options=t.data.DATA,e.$refs.AddForm.UpdateKeyValue())})},onChangeDropdown:function(e){var t=this;if(t.moduleId){var a=t.moduleId;t.SelectedModuleId=a,t.FormSchema[0].Data[3].visibility=!0,t.SubModuleList=[]}else{a=e.target.value;t.SelectedModuleId=a,t.FormSchema[0].Data[3].visibility=!0,t.SubModuleList=[]}var o="moduleId="+a;r["a"].GetSubModuleListByModuleId(o).then(e=>{e.data.DATA.forEach(e=>{t.SubModuleList.push({name:e.SUB_MODULE_NAME,value:e.SUB_MODULE_ID})}),t.FormSchema[0].Data[3].config.options=t.SubModuleList,t.FormSchema[0].Data[3].value=t.subModuleId,t.$refs.AddForm.UpdateKeyValue()})},onChangeSubDropdown:function(e){var t=this,a=e.target.value;t.SelectedSubModuleId=a}}},d=s,n=a("2877"),l=Object(n["a"])(d,o,i,!1,null,null,null);t["a"]=l.exports}}]);
//# sourceMappingURL=chunk-7d44b7bc.js.map