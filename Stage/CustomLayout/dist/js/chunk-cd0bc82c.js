(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cd0bc82c"],{"4a88":function(t,e,a){"use strict";a("814c")},"5d5c":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("section",[e("loader",{attrs:{isVisible:t.isLoading}}),e("tg-list",{attrs:{IsShowAction:!0,ModuleName:"CustomField",SubModuleCode:"CustomField",LegendArray:[],showCheckBox:!0,IdentityColumn:"custom_field_id",listType:["List"],ListData:t.FieldsData,HeaderText:t.$t("Custom_Fields"),HeaderData:t.Headers,HeaderButtons:t.listheaderbuttons,widgets:t.widgets,SearchFields:t.leftSearchFields,RenderRowActionMethod:t.renderActions,ListDataCallBackFunction:t.FetchData,TotalRecords:t.TotalRecords,SortExp:t.SortExp,SortBy:t.SortBy,NorecordfoundText:t.$t("NoRecordfound")},on:{PagerButtonClick:t.pagerMethod,SortdataButtonClick:t.sortdata,ActionButtonClick:t.actionButtonClick,HeaderButtonClick:t.commonHeaderButtonClick,LeftsearchButtonClick:t.leftCommonSearch},scopedSlots:t._u([{key:"slotdata",fn:function({data:a}){return["name"==a.column.COLUMN_NAME?[a.row.data_type_list.length>0?e("span",{class:a.row.data_type_list[0].class_name},[t._v("    "+t._s(a.row.name)+" ")]):e("span",[t._v("    "+t._s(a.row.name)+" ")])]:t._e(),"total_layout"==a.column.COLUMN_NAME?[a.row.total_layout>0?[e("span",{staticClass:"fa fa-eye text-info action-icon",staticStyle:{"font-size":"18px"},on:{click:function(e){return t.viewCustomLayoutList(a.row.custom_layout_list,a.row.custom_field_id)}}})]:t._e(),[e("span",[0==a.row.total_layout?e("h4",{staticClass:"fa fa-eye action-icon",staticStyle:{"font-size":"18px"}}):t._e()])]]:t._e()]}}])}),t.showCustomfieldPopup?e("OpenAddCustomFieldPopup",{attrs:{ModuleId:t.ModuleId,Sub_ModuleId:t.Sub_ModuleId,LanguageArrayData:t.LanguageArray}}):t._e(),t.isShowCloneFieldPopup?e("CloneField",{attrs:{CustomFieldId:t.CustomFieldId,CloneCustomField:t.CloneCustomField,CloneDisplayname:t.CloneDisplayname}}):t._e(),t.isShowDependencyFieldPopup?e("DependencyField",{attrs:{DependencyData:t.DependencyData,CustomFieldId:t.CustomFieldId}}):t._e(),t.isShowEditCustomField?e("EditCustomField",{attrs:{FieldName:t.FieldName,CustomFieldArray:t.CustomFieldArray,LanguageArray:t.LanguageArray}}):t._e(),t.isShowCustomLayoutList?e("CustomLayoutList",{attrs:{CustomLayoutList:t.CustomLayoutList}}):t._e(),t.isShowModulePopup?e("AddModuleAndSubModuelVue",{on:{openCustomField:t.openCustomField}}):t._e(),t.isShowCustomfieldDetail?e("ShowCustomFieldsDetails",{attrs:{CustomFieldList:t.CustomFieldList}}):t._e()],1)},i=[],l=(a("14d9"),a("9769"));let o=[{title:"Add Custom Field",iconClass:"fa-plus",callbackfunction:"AddCustomField",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!0},{id:"DeleteMultiple",title:"Delete",iconClass:"fa fa-trash-o",callbackfunction:"commonDeleteData",isEnabledOnSelectedRow:!0,isdisabled:!0,isvisible:!0},{title:"Back to layout",iconClass:"fa fa-angle-double-left",callbackfunction:"Customlayoutlisting",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!0}],d=[{fieldName:"FIELD NAME",fieldType:"text",fieldIcon:"fa fa-columns",fieldSearchConditionName:["cf.name"],isSearch:!1,value:"",listOptions:[]},{fieldName:"MODULE",fieldType:"radio",fieldIcon:"fa fa-user",fieldSearchConditionName:["cf.module_id"],isSearch:!1,value:"",listOptions:[]},{fieldName:" SUB MODULE",fieldType:"ddl-check",fieldIcon:"fa fa-user",fieldSearchConditionName:["cf.sub_module_id"],isSearch:!1,value:"",listOptions:[]},{fieldName:"STATUS",fieldType:"radio",fieldIcon:"fa fa-bar-chart",paramName:"statusIds",fieldSearchConditionName:["cf.status_id"],isSearch:!1,value:"",listOptions:[{value:"1001",name:"ACTIVE"},{value:"1002",name:"INACTIVE"}]}],n=[{title:"Preview",callbackfunction:"OpenView",icon:"fa fa-eye text-success action-icon",additionalSpan:""},{title:"Edit",callbackfunction:"EditCustomField",icon:"fa fa-pencil text-success action-icon",additionalSpan:""},{title:"Dependency",callbackfunction:"DependencyField",href:"javascript:void(0)",icon:"fa fa-brands fa-stack-overflow",additionalSpan:""},{title:"Clone",callbackfunction:"CloneField",href:"javascript:void(0)",icon:"fa fa-paper-plane text-success action-icon",additionalSpan:""},{title:"Delete",callbackfunction:"DeleteSingleRecord",href:"javascript:void(0)",icon:"fa fa-trash-o",additionalSpan:"",isVisible:!1,isDisabled:!1}],c=[{COLUMN_NAME:"name",DATA_TYPE:"Text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Field Name",DISPLAY_ORDER:1},{COLUMN_NAME:"module_name",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Module Name",DISPLAY_ORDER:2},{COLUMN_NAME:"sub_module_name",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Sub Module Name",DISPLAY_ORDER:3},{COLUMN_NAME:"length",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Length",DISPLAY_ORDER:4},{COLUMN_NAME:"total_layout",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Layout Count ",DISPLAY_ORDER:5},{COLUMN_NAME:"is_dependency",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Dependency Created ",DISPLAY_ORDER:6}];function r(t,e,a,s){var i=t;if("module"==a){var o="moduleId=&userTypeId=1&requestFrom=&isCustomFieldEnable=1";l["a"].Modulenamedata(o).then((function(t){var e=t.data.Data;null!=e&&(i.leftSearchFields[1].listOptions=e.map(t=>{const e={};return e.name=t.module_name,e.value=t.module_id.toString(),e}))}))}if("subModule"==a){i.leftSearchFields[2].listOptions=[];var d=`moduleId=${s}&userTypeId=1&requestFrom=&isCustomFieldEnable=1`;l["a"].Modulenamedata(d).then(t=>{null!=t.data.Data&&(i.subModuleNameList=t.data.Data,i.subModuleNameList.forEach((t,e)=>{let a={name:t.sub_module_name,value:t.sub_module_id};i.leftSearchFields[2].listOptions.push(a)}))})}}var u={buttons:o,leftsearchSchema:d,listActions:n,TableHeader:c,bindleftCommonSearchdropdown:r},m=a("1d8b"),C=function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-popups"},[e("div",{staticClass:"modal d-block"},[e("div",{staticClass:"modal-dialog modal-dialog-centered ui-draggable"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header ui-draggable-handle py-0"},[e("button",{staticClass:"close",attrs:{type:"button"},on:{click:t.closePopup}},[e("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})]),e("h4",{staticClass:"modal-title py-3",attrs:{name:"header"}},[t._v(" Edit "+t._s(t.CustomFieldArray.name)+" "+t._s(t.$t("Properties"))+" ")])]),e("div",{staticClass:"listing py-3 px-3"},[e("dynamic-form",{attrs:{lang:"en",buttons:t.buttons,schema:t.FormSchema},on:{OnSubmit:t.onSubmit}})],1)])])])])},p=[],_=a("240d"),b={components:{DynamicForm:_["DynamicForm"]},props:{FieldName:{type:String,required:!0},CustomFieldArray:{type:Object,required:!0},LanguageArray:{type:Array,required:!0}},data(){return{lenghtOfLanguageDiv:null,finalJsonData:[],Lblname:"",myObj:[],IsRequired:null,displayName:"",ddlLanguage:"",LengthVal:"",DecimalVal:"",txtDescription:"",dummyArray:[],SelectedData:[],langSelectedData:[],displayNameTextData:[],diplayNameWithCulture:[],langCulture:[],languageCultureArray:[],displayNameData:"",FormSchema:[{layoutType:"four",Data:[{astype:"TextField",label:"Label",name:"Label",value:"",placeholder:"",disabled:!1,validationRules:{required:!0}},{astype:"TextField",label:"Pick List Option",name:"PickListOption",value:"",visibility:!1,placeholder:"",validationRules:{required:!0}},{astype:"NumericField",label:"Length",name:"Length",value:"",placeholder:"",visibility:!0,validationRules:{required:!0}},{astype:"NumericField",label:"Decimal Places",name:"DecimalPlaces",value:"",placeholder:"",visibility:!1,validationRules:{required:!0}},{astype:"CheckBoxField",label:"Mark as Required",name:"MarkasRequired",value:"",placeholder:"",visibility:!0,config:{options:[{value:"1",name:""}]}},{astype:"TextAreaField",label:"Description",name:"Description",value:"",placeholder:"",visibility:!0,validationRules:"",config:{rows:3}}]},{layoutType:"double",Data:[{astype:"SelectField",label:"Language",name:"Language",value:"",placeholder:"",chkIndex:0,visibility:!1,config:{options:[]},validationRules:"required"},{astype:"TextField",label:"Display Name",name:"DisplayName",value:"",placeholder:"",chktxtIndex:0,visibility:!1,validationRules:{required:!0,max:250},config:{showAddIcon:!0,onAddButtonClick:this.AddMultiLanguage}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Update"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Cancel",onClick:this.closePopup}]}},created:function(){var t=this;t.ShowHideFields(),t.BindLangDDL(),t.EditBindFornData()},methods:{EditBindFornData(){var t=this;t.FormSchema[0].Data[0].value=t.CustomFieldArray.name,t.FormSchema[0].Data[1].value="undefind"!=t.CustomFieldArray.picklist_options?t.CustomFieldArray.picklist_options:"",t.FormSchema[0].Data[2].value=t.CustomFieldArray.length,t.FormSchema[0].Data[3].value="undefind"!=t.CustomFieldArray.decimal_places?t.CustomFieldArray.decimal_places:"",t.FormSchema[0].Data[4].value=1==t.CustomFieldArray.is_required?"1":"",t.FormSchema[0].Data[5].value=t.CustomFieldArray.description,t.FormSchema[1].Data[1].value=t.CustomFieldArray.display_name;var e={};if(null!=t.CustomFieldArray.location_json&&(t.CustomFieldArray.location_json.forEach(a=>{e={},e.value=a.lang_id,t.languageCultureArray.push(e),e={},e.value=a.localization_value,t.languageCultureArray.push(e)}),0!=t.CustomFieldArray.location_json.length)){var a=t.languageCultureArray.length/2,s=1;t.languageCultureArray.forEach((e,i)=>{s<a&&(t.FormSchema[1].Data.push({astype:"SelectField",label:"Language",name:"Language"+t.FormSchema[1].Data.length,value:"",placeholder:"",chkIndex:t.FormSchema[1].Data.length,config:{options:[]},validationRules:"required"},{astype:"TextField",label:"Display Name",name:"DisplayName"+t.FormSchema[1].Data.length,value:"",placeholder:"",chktxtIndex:t.FormSchema[1].Data.length,validationRules:{required:!0,max:250},config:{showAddIcon:!0,onaddIconBackground:"bg-danger",onAddButtonClick:t.RemoveFile,addIcon:"fa fa-trash"}}),t.BindLangDDL(t.Lblname),s++)}),t.languageCultureArray.forEach((e,a)=>{t.FormSchema[1].Data[a].value=e.value})}},ShowHideFields(){var t=this;1==t.CustomFieldArray.is_system_generated?(t.FormSchema[0].Data[1].visibility=!1,t.FormSchema[0].Data[0].disabled=!0,t.FormSchema[0].Data[2].visibility=!1,t.FormSchema[0].Data[3].visibility=!1,t.FormSchema[0].Data[5].visibility=!1,t.FormSchema[1].Data[0].visibility=!1,t.FormSchema[1].Data[1].visibility=!1):(t.FormSchema[1].Data[0].visibility=!0,t.FormSchema[1].Data[1].visibility=!0,"Decimal"==t.FieldName&&(t.FormSchema[0].Data[3].visibility=!0),"Select List"!=t.FieldName&&"Checkbox"!=t.FieldName||(t.FormSchema[0].Data[1].visibility=!0),"Date"==t.FieldName&&(t.FormSchema[0].Data[1].visibility=!1,t.FormSchema[0].Data[3].visibility=!1))},BindLangDDL(t){var e=this;void 0==t?e.LanguageArray.forEach((t,a)=>{e.FormSchema[1].Data[0].config.options.push({value:t.lang_id,name:t.lang_name})}):e.LanguageArray.forEach((a,s)=>{"undefined"!=typeof t&&null!=t&&e.FormSchema[1].Data.forEach((t,s)=>{s%2==0&&e.FormSchema[1].Data[s].config.options.push({value:a.lang_id,name:a.lang_name})})})},closePopup(){var t=this;t.$parent.isShowEditCustomField=!1},updateDataPopupClose(){var t=this;t.$parent.isShowEditCustomField=!1,t.$parent.FetchData()},AddMultiLanguage(){var t=this;t.FormSchema[1].Data.push({astype:"SelectField",label:"Language",name:"Language"+t.FormSchema[1].Data.length,value:"",placeholder:"",chkIndex:t.FormSchema[1].Data.length,config:{options:[]},validationRules:"required"},{astype:"TextField",label:"Display Name",name:"DisplayName"+t.FormSchema[1].Data.length,value:"",placeholder:"",chktxtIndex:t.FormSchema[1].Data.length,validationRules:{required:!0,max:250},config:{showAddIcon:!0,onaddIconBackground:"bg-danger",onAddButtonClick:t.RemoveFile,addIcon:"fa fa-trash"}}),t.FormSchema[1].Data.forEach(e=>{t.Lblname=e.name}),t.BindLangDDL(t.Lblname)},RemoveFile:function(t,e){var a=this,s=a.FormSchema[1].Data.findIndex(t=>t.chktxtIndex===e.chktxtIndex),i=s-1;s>-1&&a.FormSchema[1].Data.splice(s,1),i>-1&&a.FormSchema[1].Data.splice(i,1)},onSubmit(t,e){var a=this;a.lenghtOfLanguageDiv=a.FormSchema[1].Data;var s={};a.lenghtOfLanguageDiv.forEach((t,e)=>{"SelectField"==t.astype&&(s.localization_id=0,s.custom_field_id=0,s.user_guide="",s.lang_id=t.value),"TextField"==t.astype&&(s.localization_value=t.value,a.langCulture.push(s),s={})});var i="";if(a.FormSchema[1].Data.length>0){a.FormSchema[1].Data.forEach((t,e)=>{i+=e%2!=0?t.value+"^":t.value+","});var o=i.length-1;a.displayNameData=i.slice(0,o)}void 0!=a.CustomFieldArray&&(0!=a.FormSchema[0].Data[4].value.length?a.CustomFieldArray.is_required=void 0!=a.FormSchema[0].Data[4].value[0]:a.CustomFieldArray.is_required="",void 0!=t.PickListOption&&(a.CustomFieldArray.picklist_options=t.PickListOption),void 0!=t.Length&&(a.CustomFieldArray.length=t.Length),a.CustomFieldArray.group_id>0&&(a.CustomFieldArray.is_updated=1));let d={CUSTOM_FIELD_ID:a.CustomFieldArray.custom_field_id,MODULE_ID:a.CustomFieldArray.module_id,SUB_MODULE_ID:a.CustomFieldArray.sub_module_id,NAME:t.Label,DISPLAY_NAME:a.CustomFieldArray.display_name,DESCRIPTION:t.Description,PICKLIST_OPTION:t.PickListOption,TYPE_ID:a.CustomFieldArray.data_type_id,LENGTH:t.Length,IS_REQUIRED:null!==t.MarkasRequired&&void 0!==t.MarkasRequired&&"1"===t.MarkasRequired.toString()?1:0,STATUSID:1001,DECIMAL_PLACES:t.DecimalPlaces,LOC_VALUE:a.displayNameData,FORM_FIELD_VISIBILITY:"YES",LIST_FIELD_VISIBILITY:"YES"};a.finalJsonData.push(d);var n="jsonString="+JSON.stringify(a.finalJsonData);l["a"].SaveUpdateCustomField(n).then((function(t){var e=JSON.parse(t.data);1==e.STATUS_CODE?a.ShowAlert(a.$t("CustomFieldSuccess",[a.$t("Field")]),"success",!0,a.$t("Alert")):3==e.STATUS_CODE?a.ShowAlert(a.$t("CustomFieldExists"),"danger",!0,a.$t("Alert")):2==e.STATUS_CODE&&(a.ShowAlert(a.$t("CustomFieldUpdate"),"success",!0,a.$t("Alert")),a.updateDataPopupClose())}))}}},h=b,v=a("2877"),f=Object(v["a"])(h,C,p,!1,null,null,null),y=f.exports,F=function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-popups"},[e("div",{staticClass:"modal d-block"},[e("div",{staticClass:"modal-dialog modal-dialog-centered"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[t._v(" "+t._s(t.$t("CloneField"))+" ")]),e("button",{staticClass:"close",attrs:{type:"button","data-original-title":"Close"},on:{click:function(e){return t.ClosePopup()}}},[e("em",{staticClass:"fa fa-times"})])]),e("div",{staticClass:"border p-3"},[t.DataLoaded?e("DynamicForm",{attrs:{lang:"en",buttons:t.buttons,schema:t.FormSchema},on:{OnSubmit:t.onSubmit}}):t._e(),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"py-2"},[e("span",{staticClass:"mandatory"},[t._v(" "+t._s(t.$t("MandatoryString"))+" ")])])])],1)])])])])},g=[],S={components:{DynamicForm:_["DynamicForm"]},props:{CustomFieldId:{type:Number,required:!0},CloneCustomField:{type:String,required:!0},CloneDisplayname:{type:String,required:!0}},data(){return{DataLoaded:!1,FormSchema:[{layoutType:"double",Data:[{astype:"TextField",label:"Custom Field Name",name:"CustomFieldName",value:"",placeholder:"Enter Custom Field Name",validationRules:{required:!0}},{astype:"TextField",label:"Display Name",name:"DisplayName",placeholder:"Enter Display Name",value:"",validationRules:{required:!0}}]}],buttons:[{type:"submit",class:"btn btn-success saveSendforApproval",text:"<i class='fa fa-save pr-2'></i> Save"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i> Cancel",onClick:this.ClosePopup}]}},created:function(){this.DataLoaded=!0,this.FetchClone()},methods:{ClosePopup(){var t=this;t.$parent.isShowCloneFieldPopup=!1},FetchClone:function(){var t=this;t.FormSchema[0].Data[0].value=t.CloneCustomField,t.FormSchema[0].Data[1].value=t.CloneDisplayname},onSubmit(t,e){var a=this;let s=`custom_field_id=${a.CustomFieldId}&customFieldDisplayName=${t.DisplayName}&customFieldName=${t.CustomFieldName}`;l["a"].CloneCustomField(s).then(t=>{if("NAME_EXIST"==t.data)a.ShowAlert(a.$t("Custom Field Name Already Exist"),"warning",a.$t("Alert"));else{if("CLONE"==t.data)return a.ShowAlert(a.$t("Clone Custom Field Successfully Done"),"success",a.$t("Alert")),a.ClosePopup(),void a.$parent.FetchData();"DISPLAY_NAME_EXIST"==t.data?a.ShowAlert(a.$t("Display Name Already Exist"),"warning",a.$t("Alert")):a.ShowAlert(a.$t("Something went wrong"),"failure",a.$t("Alert"))}})}}},D=S,L=Object(v["a"])(D,F,g,!1,null,null,null),A=L.exports,w=a("213b"),N=function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-popups"},[e("div",{staticClass:"modal d-block"},[e("div",{staticClass:"modal-dialog modal-dialog-centered",staticStyle:{"max-width":"900px !important"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header theme-primary partition-full"},[e("h4",{staticClass:"modal-title"},[t._v(t._s(t.$t("Custom_Layout_List")))]),e("button",{staticClass:"close",attrs:{type:"button"},on:{click:t.ClosePopup}},[e("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),e("div",{staticClass:"listing py-3 px-3"},[e("div",{staticClass:"table-responsive table-fix-header",attrs:{id:"div_forListView"}},[e("table",{staticClass:"table table-bordered mt-0",staticStyle:{width:"100%"},attrs:{id:"tblRElatedProductsList"}},[e("thead",{staticClass:"thead-bg"},[e("tr",[e("th",[e("span",[t._v(t._s(t.$t("layout_name")))])])])]),e("tbody",t._l(t.CustomLayoutList,(function(a){return e("tr",{key:a},[e("td",[e("span",{staticClass:"text-overflow-dynamic-container"},[t._v(" "+t._s(a.layout_name)+" ")])])])})),0)])])])])])])])},E=[],I={props:{CustomLayoutList:{type:Array,required:!0}},data(){return{}},created:function(){},methods:{ClosePopup(){var t=this;t.$parent.isShowCustomLayoutList=!1}}},M=I,k=Object(v["a"])(M,N,E,!1,null,null,null),P=k.exports,x=function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-popups"},[e("div",{staticClass:"modal d-block"},[e("div",{staticClass:"modal-dialog modal-dialog-centered"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[t._v(" "+t._s(t.$t("AddModule"))+" ")]),e("button",{staticClass:"close",attrs:{type:"button","data-original-title":"Close"},on:{click:function(e){return t.ClosePopup()}}},[e("em",{staticClass:"fa fa-times"})])]),e("div",{staticClass:"border p-3"},[t.DataLoaded?e("DynamicForm",{ref:"moduleSubModulePopup",attrs:{lang:"en",buttons:t.buttons,schema:t.FormSchema},on:{OnSubmit:t.onSubmit}}):t._e(),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"py-2"},[e("span",{staticClass:"mandatory"},[t._v(" "+t._s(t.$t("MandatoryString"))+" ")])])])],1)])])])])},T=[],O={components:{DynamicForm:_["DynamicForm"]},data(){return{DataLoaded:!1,FormSchema:[{layoutType:"double",Data:[{astype:"SelectField",label:"Module Name",name:"ModuleName",value:"",placeholder:"",disabled:!1,config:{options:[],showAddIcon:!1,onChange:this.getSubModuleByModuleId},validationRules:"required"},{astype:"SelectField",label:"Sub Module Name",name:"SubModuleName",value:"",placeholder:"",disabled:!1,config:{options:[],showAddIcon:!1},validationRules:"required"}]}],buttons:[{type:"submit",class:"btn btn-info ",text:"Next <i class='fa fa-angle-double-right pl-2'></i> "},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i> Cancel",onClick:this.ClosePopup}]}},created:function(){this.DataLoaded=!0,this.getModule(),this.getSubModuleByModuleId()},methods:{getModule:function(){var t=this,e="moduleId=&userTypeId=1&requestFrom=&isCustomFieldEnable=1";l["a"].Modulenamedata(e).then(e=>{null!=e.data.Data&&(t.moduleNameList=e.data.Data,t.moduleNameList.forEach((e,a)=>{t.FormSchema[0].Data[0].config.options.push({value:e.module_id,name:e.module_name})}),t.$refs.moduleSubModulePopup.UpdateKeyValue())})},getSubModuleByModuleId(t,e,a){var s=this;s.ddlModuleId=a||t.target.value,s.FormSchema[0].Data[1].config.options=[];var i=`moduleId=${s.ddlModuleId}&userTypeId=1&requestFrom=&isCustomFieldEnable=1`;l["a"].Modulenamedata(i).then(t=>{null!=t.data.Data&&(s.subModuleNameList=t.data.Data,s.subModuleNameList.forEach((t,e)=>{s.FormSchema[0].Data[1].config.options.push({value:t.sub_module_id,name:t.sub_module_name})}),s.$refs.moduleSubModulePopup.UpdateKeyValue())})},ClosePopup(){var t=this;t.$parent.isShowModulePopup=!1},onSubmit(t,e){var a=this;a.$emit("openCustomField",t)}}},R=O,B=Object(v["a"])(R,x,T,!1,null,null,null),j=B.exports,q=function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-popups"},[e("div",{staticClass:"modal d-block"},[e("div",{staticClass:"modal-dialog modal-dialog-centered"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[t._v(" "+t._s(t.CustomFieldList.name)+" "+t._s(t.$t("FieldDetails"))+" ")]),e("button",{staticClass:"close",attrs:{type:"button","data-original-title":"Close"},on:{click:function(e){return t.ClosePopup()}}},[e("em",{staticClass:"fa fa-times"})])]),e("div",{staticClass:"listing py-4 px-4"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4 mb-2"},[e("div",{staticClass:"custom-field row justify-content-between border-bottom"},[e("span",{staticClass:"col-md-7"},[e("b",[t._v(t._s(t.$t("FieldName"))+" :-")])]),e("span",{staticClass:"col-md-5"},[t._v(" "+t._s(t.CustomFieldList.name))])])]),e("div",{staticClass:"col-md-4 mb-2"},[e("div",{staticClass:"custom-field row justify-content-between border-bottom"},[e("span",{staticClass:"col-md-7"},[e("b",[t._v(t._s(t.$t("displayName"))+" :-")])]),e("span",{staticClass:"col-md-5"},[t._v(t._s(t.CustomFieldList.display_name))])])]),e("div",{staticClass:"col-md-4 mb-2"},[e("div",{staticClass:"custom-field row justify-content-between border-bottom"},[e("span",{staticClass:"col-md-7"},[e("b",[t._v(t._s(t.$t("length"))+" :-")])]),e("span",{staticClass:"col-md-5"},[t._v(" "+t._s(t.CustomFieldList.length))])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4 mb-2"},[e("div",{staticClass:"custom-field row justify-content-between border-bottom"},[e("span",{staticClass:"col-md-7"},[e("b",[t._v(t._s(t.$t("ModuleName"))+" :- ")])]),e("span",{staticClass:"col-md-5"},[t._v(" "+t._s(t.CustomFieldList.module_name))])])]),e("div",{staticClass:"col-md-4 mb-2"},[e("div",{staticClass:"custom-field row justify-content-between border-bottom"},[e("span",{staticClass:"col-md-7"},[e("b",[t._v(t._s(t.$t("SubModuleName"))+":-")])]),e("span",{staticClass:"col-md-5"},[t._v(t._s(t.CustomFieldList.sub_module_name))])])]),e("div",{staticClass:"col-md-4 mb-2"},[e("div",{staticClass:"custom-field row justify-content-between border-bottom"},[e("span",{staticClass:"col-md-7"},[e("b",[t._v(t._s(t.$t("DtCode"))+" :-")])]),e("span",{staticClass:"col-md-5"},[t._v(t._s(t.CustomFieldList.dt_code))])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4 mb-1"},[e("div",{staticClass:"custom-field row justify-content-between border-bottom"},[e("span",{staticClass:"col-md-7"},[e("b",[t._v(t._s(t.$t("CreatedDate"))+" :-")])]),e("span",{staticClass:"col-md-5"},[t._v(" "+t._s(t.$options.filters.formatDate(t.CustomFieldList.created_date)))])])]),e("div",{staticClass:"col-md-4 mb-1"},[e("div",{staticClass:"custom-field row justify-content-between border-bottom"},[e("span",{staticClass:"col-md-7"},[e("b",[t._v(t._s(t.$t("CreatedBy"))+":-")])]),e("span",{staticClass:"col-md-5"},[t._v(t._s(t.CustomFieldList.created_by))])])]),e("div",{staticClass:"col-md-4 mb-1"},[e("div",{staticClass:"custom-field row justify-content-between border-bottom"},[e("span",{staticClass:"col-md-7"},[e("b",[t._v(t._s(t.$t("Is_Display_in_FormBuilder")))])]),e("span",{staticClass:"col-md-5"},[t._v(t._s(t.CustomFieldList.Is_Display_in_FormBuilder))])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4 mb-1"},[e("div",{staticClass:"custom-field row justify-content-between border-bottom"},[e("span",{staticClass:"col-md-7"},[e("b",[t._v(t._s(t.$t("decimal_places"))+" :-")])]),e("span",{staticClass:"col-md-5"},[t._v(" "+t._s(t.CustomFieldList.decimal_places))])])]),e("div",{staticClass:"col-md-4 mb-1"},[e("div",{staticClass:"custom-field row justify-content-between border-bottom"},[e("span",{staticClass:"col-md-7"},[e("b",[t._v(t._s(t.$t("dependent_type"))+":-")])]),e("span",{staticClass:"col-md-5"},[t._v(t._s(t.CustomFieldList.dependent_type))])])]),e("div",{staticClass:"col-md-4 mb-1"},[e("div",{staticClass:"custom-field row justify-content-between border-bottom"},[e("span",{staticClass:"col-md-7"},[e("b",[t._v(t._s(t.$t("dropdown_type"))+" :-")])]),e("span",{staticClass:"col-md-5"},[t._v(t._s(t.CustomFieldList.dropdown_type))])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4 mb-1"},[e("div",{staticClass:"custom-field row justify-content-between border-bottom"},[e("span",{staticClass:"col-md-7"},[e("b",[t._v(t._s(t.$t("form_field_visibility"))+" :-")])]),e("span",{staticClass:"col-md-5"},[t._v(t._s(t.CustomFieldList.form_field_visibility))])])]),e("div",{staticClass:"col-md-4 mb-1"},[e("div",{staticClass:"custom-field row justify-content-between border-bottom"},[e("span",{staticClass:"col-md-7"},[e("b",[t._v(t._s(t.$t("field_order"))+":-")])]),e("span",{staticClass:"col-md-5"},[t._v(t._s(t.CustomFieldList.field_order))])])]),e("div",{staticClass:"col-md-4 mb-1"},[e("div",{staticClass:"custom-field row justify-content-between border-bottom"},[e("span",{staticClass:"col-md-7"},[e("b",[t._v(t._s(t.$t("field_code"))+" :-")])]),e("span",{staticClass:"col-md-5"},[t._v(" "+t._s(t.CustomFieldList.field_code))])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4 mb-1"},[e("div",{staticClass:"custom-field row justify-content-between border-bottom"},[e("span",{staticClass:"col-md-7"},[e("b",[t._v(t._s(t.$t("isCheckBoxDisabled"))+" :- ")])]),e("span",{staticClass:"col-md-5"},[t._v(" "+t._s(t.CustomFieldList.isCheckBoxDisabled))])])]),e("div",{staticClass:"col-md-4 mb-1"},[e("div",{staticClass:"custom-field row justify-content-between border-bottom"},[e("span",{staticClass:"col-md-7"},[e("b",[t._v(t._s(t.$t("enable_import"))+" :-")])]),e("span",{staticClass:"col-md-5"},[t._v(" "+t._s(t.CustomFieldList.enable_import))])])]),e("div",{staticClass:"col-md-4 mb-1"},[e("div",{staticClass:"custom-field row justify-content-between border-bottom"},[e("span",{staticClass:"col-md-7"},[e("b",[t._v(t._s(t.$t("is_for_filter"))+" :-")])]),e("span",{staticClass:"col-md-5"},[t._v(" "+t._s(t.CustomFieldList.is_for_filter))])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4 mb-1"},[e("div",{staticClass:"custom-field row justify-content-between border-bottom"},[e("span",{staticClass:"col-md-7"},[e("b",[t._v(t._s(t.$t("is_system_generated"))+" :- ")])]),e("span",{staticClass:"col-md-5"},[t._v(" "+t._s(t.CustomFieldList.is_system_generated))])])]),e("div",{staticClass:"col-md-4 mb-1"},[e("div",{staticClass:"custom-field row justify-content-between border-bottom"},[e("span",{staticClass:"col-md-7"},[e("b",[t._v(t._s(t.$t("is_rrequired"))+":-")])]),e("span",{staticClass:"col-md-5"},[t._v(t._s(t.CustomFieldList.is_required))])])]),e("div",{staticClass:"col-md-4 mb-1"},[e("div",{staticClass:"custom-field row justify-content-between border-bottom"},[e("span",{staticClass:"col-md-7"},[e("b",[t._v(t._s(t.$t("is_mandatory_for_filter"))+" :-")])]),e("span",{staticClass:"col-md-5"},[t._v(" "+t._s(t.CustomFieldList.is_mandatory_for_filter))])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4 mb-1"},[e("div",{staticClass:"custom-field row justify-content-between border-bottom"},[e("span",{staticClass:"col-md-7"},[e("b",[t._v(t._s(t.$t("list_field_visibility"))+" :-")])]),e("span",{staticClass:"col-md-5"},[t._v(" "+t._s(t.CustomFieldList.list_field_visibility))])])]),e("div",{staticClass:"col-md-4 mb-1"},[e("div",{staticClass:"custom-field row justify-content-between border-bottom"},[e("span",{staticClass:"col-md-7"},[e("b",[t._v(t._s(t.$t("group_name"))+":-")])]),e("span",{staticClass:"col-md-5"},[t._v(t._s(t.CustomFieldList.group_name))])])]),e("div",{staticClass:"col-md-4 mb-1"},[e("div",{staticClass:"custom-field row justify-content-between border-bottom"},[e("span",{staticClass:"col-md-7"},[e("b",[t._v(t._s(t.$t("join_name"))+" :- ")])]),e("span",{staticClass:"col-md-5"},[t._v(" "+t._s(t.CustomFieldList.join_name))])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4 mb-1"},[e("div",{staticClass:"custom-field row justify-content-between border-bottom"},[e("span",{staticClass:"col-md-7"},[e("b",[t._v(t._s(t.$t("picklist_options"))+" :-")])]),e("span",{staticClass:"col-md-5"},[t._v(t._s(t.CustomFieldList.picklist_options))])])]),e("div",{staticClass:"col-md-4 mb-1"},[e("div",{staticClass:"custom-field row justify-content-between border-bottom"},[e("span",{staticClass:"col-md-7"},[e("b",[t._v(t._s(t.$t("regular_expression"))+":-")])]),e("span",{staticClass:"col-md-5"},[t._v(t._s(t.CustomFieldList.regular_expression))])])]),e("div",{staticClass:"col-md-4 mb-1"},[e("div",{staticClass:"custom-field row justify-content-between border-bottom"},[e("span",{staticClass:"col-md-7"},[e("b",[t._v(t._s(t.$t("validation_type"))+" :- ")])]),e("span",{staticClass:"col-md-5"},[t._v(" "+t._s(t.CustomFieldList.validation_type))])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4 mb-1"},[e("div",{staticClass:"custom-field row justify-content-between border-bottom"},[e("span",{staticClass:"col-md-7"},[e("b",[t._v(t._s(t.$t("view"))+" :-")])]),e("span",{staticClass:"col-md-5"},[t._v(" "+t._s(t.CustomFieldList.view))])])]),e("div",{staticClass:"col-md-4 mb-1"},[e("div",{staticClass:"custom-field row justify-content-between border-bottom"},[e("span",{staticClass:"col-md-7"},[e("b",[t._v(t._s(t.$t("table_name"))+" :-")])]),e("span",{staticClass:"col-md-5"},[t._v(t._s(t.CustomFieldList.table_name))])])]),e("div",{staticClass:"col-md-4 mb-1"},[e("div",{staticClass:"custom-field row justify-content-between border-bottom"},[e("span",{staticClass:"col-md-7"},[e("b",[t._v(t._s(t.$t("status_name"))+" :-")])]),e("span",{staticClass:"col-md-5"},[t._v(" "+t._s(t.CustomFieldList.status_name))])])])]),t._m(0),e("div",{staticClass:"row mt-3"},[e("div",{staticClass:"col-md-6 mb-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[t._v(" "+t._s(t.$t("Languages"))+" ")]),e("div",{staticClass:"card-body"},t._l(t.LanguageArray,(function(a){return e("ul",{key:a.lang_id,staticClass:"list-group"},[e("li",{staticClass:"list-group-item d-flex justify-content-between border-0 p-0 mb-3"},[e("div",{staticClass:"bx col-lg-6"},[e("label",[e("strong",[t._v(" "+t._s(t.$t("LanguageName")))])]),e("div",[t._v(t._s(a.lang_name?a.lang_name:"NA"))])]),e("div",{staticClass:"bx col-lg-6"},[e("label",[e("strong",[t._v(" "+t._s(t.$t("DisplayNAME")))])]),e("div",[t._v(" "+t._s(a.localization_value?a.localization_value:"NA"))])])])])})),0)])]),e("div",{staticClass:"col-md-6 mb-4"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[t._v(" "+t._s(t.$t("DataTypeList"))+" ")]),e("div",{staticClass:"card-body"},t._l(t.DataTypeList,(function(a){return e("ul",{key:a.Data_type_id,staticClass:"list-group"},[e("li",{staticClass:"list-group-item d-flex justify-content-between border-0 p-0 mb-3"},[e("span",{staticClass:"col-md-8"},[e("strong",[t._v(" "+t._s(t.$t("DataTypeName")))])]),e("span",{staticClass:"col-md-4"},[t._v(" "+t._s(a.Data_type_name?a.Data_type_name:"NA"))])]),e("li",{staticClass:"list-group-item d-flex justify-content-between border-0"},[e("strong",[t._v(" "+t._s(t.$t("IconClass")))]),t._v(" "+t._s(a.class_name?a.class_name:"NA")+" ")])])})),0)])])])])]),e("div",{staticClass:"row p-4"},[e("div",{staticClass:"col-md-12 d-flex justify-content-end"},[e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.ClosePopup()}}},[e("i",{staticClass:"fa fa-close pr-2"}),t._v(" "+t._s(t.$t("Cancel")))])])])])])])])},U=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4 mb-1"})])}],V={props:{CustomFieldList:{type:Object,required:!0}},data(){return{LanguageArray:[],DataTypeList:[]}},created(){null!=this.CustomFieldList&&(this.LanguageArray=this.CustomFieldList.location_json,this.DataTypeList=this.CustomFieldList.data_type_list)},methods:{ClosePopup(){var t=this;t.$parent.isShowCustomfieldDetail=!1}}},Y=V,H=Object(v["a"])(Y,q,U,!1,null,null,null),z=H.exports,J=a("4892"),G={components:{OpenAddCustomFieldPopup:m["a"],CloneField:A,EditCustomField:y,DependencyField:w["a"],CustomLayoutList:P,AddModuleAndSubModuelVue:j,loader:J["a"],ShowCustomFieldsDetails:z},data(){return{isLoading:!1,widgets:[],FieldName:"",isShowCustomfieldDetail:!1,isShowEditCustomField:!1,isShowModulePopup:!1,PageSize:10,PageNumber:1,TotalPages:0,SortBy:"",SortExp:"",CurrentPage:1,customFieldName:null,listheaderbuttons:u.buttons,leftSearchFields:u.leftsearchSchema,listActions:u.listActions,Headers:u.TableHeader,searchCondition:"",TotalRecords:0,CustomlayoutId:"",FieldsData:[],showCustomfieldPopup:!1,module_id:"",sub_module_id:"",newLanguageArray:[],LanguageArray:[],isShowCloneFieldPopup:!1,CustomFieldId:null,isShowDependencyFieldPopup:!1,CustomFieldArray:[],isShowCustomLayoutList:!1,CustomLayoutList:[],ModuleId:null,Sub_ModuleId:null,DependencyData:[],CustomFieldList:[],CloneCustomField:"",CloneDisplayname:""}},created:function(){var t=this;t.FetchData(),t.getLanguageList(),t.leftSearchFields[1].onChange=t.getClickEvent,u.bindleftCommonSearchdropdown(t,"CustomField","module")},methods:{viewCustomLayoutList(t,e){var a=this;if(null==e&&void 0==e)return a.isShowCustomLayoutList=!1;a.CustomLayoutList=t,a.isShowCustomLayoutList=!0},getClickEvent:function(){var t=this,e=this.leftSearchFields[1].value;u.bindleftCommonSearchdropdown(t,"CustomField","subModule",e)},async getLanguageList(){var t=this;l["a"].GetLanguageList().then(e=>{if("Success"==e.data.status){let a={lang_name:"",lang_id:""};t.newLanguageArray=e.data.result.DATA,t.newLanguageArray.forEach(e=>{a={lang_name:e.LANG_NAME,lang_id:e.LANG_ID},t.LanguageArray.push(a)})}})},FetchData:function(){var t=this;t.isLoading=!0;var e=`module_id=${t.module_id}&sub_module_id=${t.sub_module_id}&searchCondition=${t.searchCondition}&sortBy=${t.SortBy}&sortExp=${t.SortExp}&pageSize=${t.PageSize}&pageNumber=${t.PageNumber}`;l["a"].GetCustomUserDefinedCustomFieldListing(e).then((function(e){t.isLoading=!1,null!=JSON.parse(e.data)?(t.FieldsData=JSON.parse(e.data).data,t.FieldsData.forEach(t=>{t.isCheckBoxDisabled=!1,1==t.is_disabled?t.isCheckBoxDisabled=!0:t.isCheckBoxDisabled=!1}),t.Headers.forEach(e=>{e.settings=null,"name"==e.COLUMN_NAME&&(e.settings={isInSlot:!0,clickEvent:t.clickEventOfColumn}),"module_name"==e.COLUMN_NAME&&(e.settings={}),"sub_module_name"==e.COLUMN_NAME&&(e.settings={}),"length"==e.COLUMN_NAME&&(e.settings={}),"is_disabled"==e.COLUMN_NAME&&(e.settings={isInSlot:!0}),"total_layout"==e.COLUMN_NAME&&(e.settings={isInSlot:!0})}),null!=t.FieldsData?(t.TotalRecords=t.FieldsData[0].TOTAL_RECORDS,t.TotalPages=Math.ceil(t.TotalRecords/t.PageSize),t.CurrentPage=t.PageNumber,t.noRecord=!1):(t.noRecord=!0,t.FieldsData=[],t.TotalRecords=0,t.isLoading=!1)):(t.noRecord=!0,t.FieldsData=[],t.TotalRecords=0,t.isLoading=!1)}))},renderActions:function(t){var e=this;let a=[];return e.listActions.forEach(e=>{let s={...e};switch(s.title){case"Preview":s.isVisible=!0;break;case"Edit":s.isVisible=!0;break;case"Dependency":s.isVisible=!1;break;case"Clone":s.isVisible=!0;break;case"Delete":s.isDisabled=1==t.is_disabled,s.isVisible=!0;break}a.push(s)}),a},leftCommonSearch:function(t){this.PageNumber=t.PageNumber,"undefined"!=typeof t.searchCondition?this.searchCondition=t.searchCondition:this.searchCondition="",this.FetchData()},actionButtonClick:function(t,e,a,s){var i=this;switch(t){case"OpenView":i.OpenView(e);break;case"EditCustomField":i.EditCustomField(e);break;case"DependencyField":i.DependencyField(e);break;case"CloneField":i.AddCloneField(e);break;case"DeleteSingleRecord":i.commonDeleteData(e.custom_field_id);break}},commonHeaderButtonClick:function(t){switch(t.callbackfunction){case"GetQuickAdd":this.GetQuickAdd(t);break;case"AddCustomField":this.AddCustomField(t);break;case"commonDeleteData":this.commonDeleteData();break;case"Customlayoutlisting":this.Customlayoutlisting();break}},Customlayoutlisting:function(){this.$router.push({name:"CustomLayoutListing"})},AddCloneField:function(t){var e=this;return null!=t.custom_field_id||void 0!=t.custom_field_id?(e.CustomFieldId=t.custom_field_id,e.CloneCustomField=t.name,e.CloneDisplayname=t.display_name,e.isShowCloneFieldPopup=!0):e.isShowCloneFieldPopup=!1},OpenView(t){var e=this;return null!=t.custom_field_id||void 0!=t.custom_field_id?(e.CustomFieldList=t,e.isShowCustomfieldDetail=!0):e.isShowCustomfieldDetail=!1},CloseAddCustomFieldPoup(){var t=this;t.showCustomfieldPopup=!1,t.FetchData()},clickEventOfColumn:function(t,e){e.COLUMN_NAME},EditCustomField:function(t){var e=this;return null!=t.custom_field_id||void 0!=t.custom_field_id?(e.CustomFieldArray=t,e.FieldName=t.name,e.isShowEditCustomField=!0):e.isShowEditCustomField=!1},commonDeleteData:function(t){var e=this,a="";e.isLoading=!0,null==t?$(".chkItems:checkbox:checked").not("[id^='chkAll_0']").each((function(){a.length>0&&(a+=","),a+=$(this).val()})):a=t,null!=a?e.confirmR(e.$t("ConfirmDelete"),!0,e.$t("Delete")+"  "+e.$t("Report"),(function(){var t={ids:a,CRM:"",Deals:"",refCode:"talygen_custom_field"},s=JSON.stringify(t);l["a"].CommonCommonDelete(s).then((function(t){200==t.status?($(".chkItems:checkbox:checked,#chkAll_0").prop("checked",!1).removeAttr("checked"),$("#DeleteMultiple").addClass("disabled"),e.ShowAlert(e.$t("DeletedSuccess",[e.$t("Record")]),"success",!0,e.$t("Alert")),e.PageNumber=parseInt(e.PageNumber)-1,e.PageNumber<=0&&(e.PageNumber=1),e.FetchData()):e.ShowAlert(e.$t("DeletedError",[e.$t("Report")]),"Success",!0,e.$t("Alert"))}))})):e.ShowAlert(e.$t("Selectanyrecordtodelete")),e.isLoading=!1},async DependencyField(t){var e=this;return e.customFieldName=t.name,null!=t.custom_field_id||void 0!=t.custom_field_id?(e.CustomFieldId=t.custom_field_id,await e.MappingLookupList(),e.isShowDependencyFieldPopup=!0):e.isShowDependencyFieldPopup=!1},async MappingLookupList(){var t=this;let e=[];var a="customFieldId="+t.CustomFieldId;await l["a"].GetCustomFieldShowWhenDDL(a).then(a=>{e=JSON.parse(a.data),t.DependencyData=e})},AddCustomField:function(t){var e=this;e.isShowModulePopup=!0},GetQuickAdd:function(t){var e=this;e.QuickAddpopup=!0},openCustomField(t){let e=this;e.ModuleId=t.ModuleName,e.Sub_ModuleId=t.SubModuleName,e.isShowModulePopup=!1,e.showCustomfieldPopup=!0},hidePopup(){var t=this;t.showCustomfieldPopup=!1,t.FetchData()},sortdata:function(t){var e="sort tb_headerSortDown";this.SortBy=t,t===this.SortBy&&(""==this.SortExp?(this.SortExp="ASC",e="sort tb_headerSortDown"):"ASC"==this.SortExp?(this.SortExp="DESC",e="sort tb_headerSortUp"):(this.SortExp="ASC",e="sort tb_headerSortDown")),this.FetchData(),$("#"+t+"  span:first-child").attr("class",e)},CloseAddPopup:function(){var t=this;t.showLayoutPopup=!1,t.FetchData()},pagerMethod:function(t){this.PageSize=t.PageSize,this.PageNumber=t.PageNumber,this.FetchData()}}},Q=G,K=(a("4a88"),Object(v["a"])(Q,s,i,!1,null,"dfce90ee",null));e["default"]=K.exports},"809d":function(t,e,a){var s=a("24fb");e=s(!1),e.push([t.i,"",""]),t.exports=e},"814c":function(t,e,a){var s=a("809d");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var i=a("499e").default;i("a9bb52bc",s,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=chunk-cd0bc82c.js.map