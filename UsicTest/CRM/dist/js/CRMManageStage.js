(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CRMManageStage"],{b4b5:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"main-content"},[a("loader",{attrs:{"is-visible":t.isLoading}}),a("div",{attrs:{id:"divMainLeadData"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 padding-t_8"},[a("div",{staticClass:"theme-primary partition-full"},[a("span",{staticClass:"p-name text-white"},[t._v(t._s(t.$t("CAMANAGESTAGE")))]),a("span",{staticClass:"float-right"})])])]),a("div",{staticClass:"border p-3"},[a("Form",{ref:"form",scopedSlots:t._u([{key:"default",fn:function(e){var i=e.valid,n=e.errors;return[a("DynamicForm",{attrs:{schema:t.GroupBy,dateformat:t.dateformat},on:{onSearchDDL:t.onSearch,setSelectedValue:t.setSelectedValue}}),a("div",{staticClass:"row flex-row-reverse mt-2"},[a("div",{staticClass:"col-lg-6 text-right"},[a("a",{staticClass:"btn btn-success",class:{disabled:t.submited},attrs:{href:"javascript:;","data-tour":"step: 1; title: enter  dealDetail; content: AddVendorDetailContent",title:"Save"},on:{click:function(e){return t.SubmitData(i,n)}}},[a("em",{staticClass:"fa fa-save pr-2"}),t._v(t._s(t.$t("Save"))+" ")]),t._v("  "),a("a",{staticClass:"btn btn-danger",attrs:{href:"javascript:void(0)",title:"Cancel"},on:{click:t.onCancel}},[a("em",{staticClass:"fa fa-close pr-2"}),t._v(t._s(t.$t("Cancel"))+" ")])]),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"py-2"},[a("small",{staticClass:"text-danger"},[t._v(t._s(t.$t("MandatoryString")))])])])])]}}])})],1)])],1)},n=[],s=a("53ca"),o=a("ade3"),l=(a("d3b7"),a("159b"),a("b0c0"),a("4de4"),a("a15b"),a("e9c4"),a("ac1f"),a("1276"),a("498a"),a("b680"),a("9769")),c=a("5ba0"),r={components:{DynamicForm:c["a"]},data:function(){var t;return t={isLoading:!1,value:"",LeadData:null,defaultColor:"#000000"},Object(o["a"])(t,"LeadData",null),Object(o["a"])(t,"LeadOwner",null),Object(o["a"])(t,"GroupBy",[]),Object(o["a"])(t,"Channel",null),Object(o["a"])(t,"IndustryType",null),Object(o["a"])(t,"Status",null),Object(o["a"])(t,"selected",!1),Object(o["a"])(t,"selectoptions",[]),Object(o["a"])(t,"submited",!1),Object(o["a"])(t,"stageID",this.$route.params.id),Object(o["a"])(t,"userId",null),Object(o["a"])(t,"compnayId",null),Object(o["a"])(t,"dateformat",null),t},created:function(){this.userId=this.GetUserInfo.ID,this.companyId=this.GetUserInfo.CompanyId,this.dateformat=this.GetUserInfo.DateFormat,this.FetchData()},methods:{onSearch:function(t,e){t&&this.searchSelectData(t,this,e)},searchSelectData:function(t,e,a){this.ShowSearchData(t,e,a,a.value.value)},ShowSearchData:function(t,e,a,i){"undefined"==typeof i&&(i=0);var n="id=&moduleName="+this.$route.params.moduleName+"&type="+a.field_code;"fill"==a.dependent_type&&(n+="&refId="+i),DataService.getDDLData(n+"&search="+escape(t)).then((function(t){var e=[];return t.data,""!=t.data&&(e=t.data),a.select_options=e.DATA,a.select_options}))},setSelectedValue:function(t,e){var a=this;try{Array.isArray(e)?t.value="object"===Object(s["a"])(e[0])&&null!==e[0]?e[0].value:e[0]:(t.has_dependent>=0&&a.GroupBy.forEach((function(i){i.Data.forEach((function(i){i.parent_id==t.custom_field_id&&"fill"==i.dependent_type&&a.ShowSearchData("",a,i,e.value)}))})),t.value=e)}catch(i){}},SubmitData:function(t,e){var a=this;this.$refs.form.validate().then((function(t){if(t){a.isLoading=!0,a.submited=!0;var e=a.LeadData,i=[],n=[];$.each(e,(function(t,e){var o={field_name:e.name,required:e.is_required,length:e.length,type:e.validation_type},l="stage_id"==e.name?a.stageID:"undefined"===typeof e.value?"":e.value;if(l="undefined"===typeof l?"":l,"date"==e.dt_code&&(l=e.value),"checkbox"==e.dt_code){var c=e.select_value.filter((function(t){return null!=t&&""!=t}));l=c.join(",")}if("select"==e.dt_code)try{l="object"===Object(s["a"])(l)&&null!==l?l.value:l}catch(d){}"created_by"==e.name&&(l=a.userId),"modified_by"==e.name&&(l=a.userId),"company_id"==e.name&&(l=a.companyId),"stage_id"==e.name&&(l=a.stageID),"color_code"==e.name&&(l=e.value);var r={field_name:e.name,field_value:l,custom_field_id:e.custom_field_id};i.push(r),n.push(o)}));var o={data:i,validation:n},c=JSON.stringify(o);l["a"].SaveStage(c).then((function(t){a.isLoading=!1,"1"==t.data[0].Code&&""==$(".output").text()?(a.stageID>0?a.ShowAlert(a.$t("UpdatedSuccess",[a.$t("STAGE_ID")]),"success",!0,a.$t("Alert")):a.ShowAlert(a.$t("AddedSuccess",[a.$t("STAGE_ID")]),"success",!0,a.$t("Alert")),a.$router.push({name:"CRMStage"})):a.ShowAlert(a.$t("AddedError",[a.$t("STAGE_ID")]),"failure",!0,a.$t("Alert")),a.submited=!1}))}}))},FetchData:function(){var t=this;t.isLoading=!0;var e="id=".concat(t.$route.params.id,"&moduleName=CRM&subModuleCode=CRM_STAGES&langCode=en");l["a"].getFormLayout(e).then((function(e){if(t.isLoading=!1,t.LeadData=e.data.data,null!=t.LeadData&&t.LeadData.length>0){var a=t.LeadData[0].group_id;$.each(t.LeadData,$.proxy((function(e,i){a=i.group_id,"checkbox"==i.dt_code&&(i.select_value=i.value.split(","));var n=$.grep(t.GroupBy,(function(t,e){return t.group_id==a}));if(0==n.length){var s=$.grep(t.LeadData,(function(t,e){return t.group_id==a}));if(t.stageID>0&&$.each(s,(function(e,a){if("select"==a.dt_code)try{a.value=a.value.trim()}catch(i){console.log("value is null while trimming")}"custom"==a.dropdown_type&&"Lookup"==a.picklist_options?(a.select_options=t.MakeNormalArray(a.select_options),a.select_value=a.select_options,null!=a.select_options&&a.select_options.length>0&&(a.value=a.select_options[0])):"decimal"==a.dt_code&&"YES"==a.form_field_visibility&&a.value>0?a.value=parseFloat(a.value,10).toFixed(2):"date"==a.dt_code&&(a.value=t.$options.filters.formatDate(a.value))})),s.length>0){var o={group_id:a,group_name:s[0].group_name,group_display_name:s[0].group_display_name,Data:s};t.GroupBy.push(o)}}}),t))}setTimeout((function(){t.CheckBoxBootstrap()}),500),setTimeout((function(){t.RadioButtonBootstrap()}),500);var i={};t.LeadData.forEach((function(t){""!=t.astype&&"YES"==t.form_field_visibility&&(i[t.name]=t.value)}))}))},onCancel:function(){this.$router.push({name:"CRMStage"})}}},d=r,u=a("2877"),f=Object(u["a"])(d,i,n,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=CRMManageStage.js.map