(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ManageCampaign"],{3988:function(a,e,t){"use strict";t.r(e);var n=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("section",{staticClass:"main-content"},[t("loader",{attrs:{"is-visible":a.isLoading}}),t("div",{attrs:{id:"divMainLeadData"}},[a._m(0),t("div",{staticClass:"border p-3"},[t("Form",{ref:"form",scopedSlots:a._u([{key:"default",fn:function(e){var n=e.valid,i=e.errors;return[t("DynamicForm",{attrs:{schema:a.GroupBy,dateformat:a.dateFormat,DependentOption:a.DependentOption},on:{setDependentDate:a.setDependentDate,onSearchDDL:a.onSearch,setSelectedValue:a.setSelectedValue,onBlur:a.onBlur}}),t("div",{staticClass:"row flex-row-reverse mt-2"},[t("div",{staticClass:"col-lg-6 text-right"},[t("a",{staticClass:"btn btn-success btn_save_a",class:{disabled:!1},attrs:{href:"javascript:;",title:"Save"},on:{click:function(e){return a.SubmitData(n,i)}}},[t("em",{staticClass:"fa fa-save pr-2"}),a._v(a._s(a.$t("Save"))+" ")]),a._v("  "),t("a",{staticClass:"btn btn-danger",attrs:{href:"javascript:void(0)",title:"Cancel"},on:{click:a.onCancel}},[t("em",{staticClass:"fa fa-close pr-2"}),a._v(a._s(a.$t("Cancel"))+" ")])]),t("div",{staticClass:"col-lg-6"},[t("div",{staticClass:"py-2"},[t("small",{staticClass:"text-danger"},[a._v(a._s(a.$t("MandatoryString")))])])])])]}}])})],1)])],1)},i=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-12 padding-t_8"},[t("div",{staticClass:"theme-primary partition-full"},[t("span",{staticClass:"p-name text-white"},[a._v("Manage Campaign")]),t("span",{staticClass:"float-right"})])])])}],o=t("53ca"),s=(t("b0c0"),t("4de4"),t("d3b7"),t("a15b"),t("e9c4"),t("99af"),t("ac1f"),t("1276"),t("b680"),t("159b"),t("c35a"),t("a9e3"),t("9769")),l=t("5ba0"),r=t("1157"),u=t.n(r),c={components:{DynamicForm:l["a"]},data:function(){return{isLoading:!1,CampaignId:this.$route.params.id,CampaignData:null,LeadOwner:null,GroupBy:[],Channel:null,IndustryType:null,Status:null,StartDate:"01/01/1990",DependentOption:[{useCurrent:!1,showClear:!0,showClose:!0,allowInputToggle:!0,minDate:new Date(Date.now())},{useCurrent:!1,showClear:!0,showClose:!0,allowInputToggle:!0,minDate:new Date(Date.now())}],DependentOptionEdit:[{useCurrent:!1,showClear:!0,showClose:!0,allowInputToggle:!0,minDate:new Date("01/01/1990")},{useCurrent:!1,showClear:!0,showClose:!0,allowInputToggle:!0,minDate:new Date("01/01/1990")}],selected:!1,selectoptions:[],vSelectValidate:!1,submited:!1,dateFormat:null}},created:function(){var a=this;this.dateFormat=this.GetUserInfo.DateFormat,a.FetchData()},methods:{onCancel:function(){this.$router.push({name:"CRMCampaign"})},setDependentDate:function(a){var e=a.value;if("campaign_start_date"==a.name||"campaign_actual_start_date"==a.name){this.DependentOption[0]={useCurrent:!1,showClear:!0,showClose:!0,allowInputToggle:!0,minDate:a.value};var t="campaign_actual_start_date"==a.name?"campaign_actual_end_date":"campaign_end_date";e=this.dateComapre(this.$options.filters.formatDate(a.value),u()("div[name='".concat(t,"']")).attr("value"))}var n=this;setTimeout((function(){"campaign_start_date"==a.name?u.a.each(n.GroupBy,(function(a,t){u.a.each(t.Data,(function(a,t){"campaign_end_date"==t.name&&(t.value=e)}))})):"campaign_actual_start_date"==a.name&&u.a.each(n.GroupBy,(function(a,t){u.a.each(t.Data,(function(a,t){"campaign_actual_end_date"==t.name&&(t.value=e)}))}))}),1e3)},dateComapre:function(a,e){var t=null;e=void 0==e?a:this.$options.filters.formatDate(new Date(e));var n=Date.parse(a),i=Date.parse(e);return n>i?(this.DependentOption[1]["minDate"]=a,t=a):(this.DependentOption[1]["minDate"]=e,t=e),t},SubmitData:function(a){var e=this;e.$refs.form.validate().then((function(a){if(e.vSelectValidate=!0,a){e.submited=!0,e.isLoading=!0;var t=e.CampaignData,n=[],i=[];u.a.each(t,(function(a,t){var s={field_name:t.name,required:t.is_required,length:t.length,type:t.validation_type},l="campaign_id"==t.name?e.CampaignId:t.value;if("date"==t.dt_code&&(l=t.value),"checkbox"==t.dt_code){var r=t.select_value.filter((function(a){return null!=a&&""!=a}));l=r.join(",")}if("select"==t.dt_code)try{l="object"===Object(o["a"])(l)&&null!==l?l.value:l}catch(c){}var u={field_name:t.name,field_value:l,custom_field_id:t.custom_field_id};n.push(u),i.push(s)}));var l={data:n,validation:i},r=JSON.stringify(l);s["a"].PostCampaign(r).then((function(a){e.isLoading=!1,"1"==a.data[0].Code?(e.CampaignId>0?e.ShowAlert(e.$t("UpdatedSuccess",[e.$t("Campaign")]),"success",!0,e.$t("Alert")):e.ShowAlert(e.$t("AddedSuccess",[e.$t("Campaign")]),"success",!0,e.$t("Alert")),e.$router.push({name:"CRMCampaign"})):e.ShowAlert(e.$t("AddedError",[e.$t("Campaign")]),"failure",!0,e.$t("Alert")),e.submited=!1}))}}))},FetchData:function(){var a=this;a.isLoading=!0;var e="id=".concat(a.$route.params.id,"&moduleName=").concat(a.$route.params.moduleName,"&subModuleCode=").concat(a.$route.params.subModuleCode,"&langCode=en");s["a"].getFormLayout(e).then((function(e){if(a.isLoading=!1,a.CampaignData=e.data.data,null!=a.CampaignData&&a.CampaignData.length>0){var t=a.CampaignData[0].group_id;if(u.a.each(a.CampaignData,u.a.proxy((function(e,n){t=n.group_id,"date"==n.dt_code&&(n.value=""==n.value?null:n.value),"checkbox"==n.dt_code&&(n.select_value=n.value.split(","));var i=u.a.grep(a.GroupBy,(function(a,e){return a.group_id==t}));if(0==i.length){var o=u.a.grep(a.CampaignData,(function(a,e){return a.group_id==t}));if(a.CampaignId>0&&u.a.each(o,(function(e,t){"custom"==t.dropdown_type&&"Lookup"==t.picklist_options?(t.select_options=a.MakeNormalArray(t.select_options),t.select_value=t.select_options,null!=t.select_options&&t.select_options.length>0&&(t.value=t.select_options[0])):"decimal"==t.dt_code&&"YES"==t.form_field_visibility&&t.value>0&&(t.value=parseFloat(t.value,10).toFixed(2))})),o.length>0){var s={group_id:t,group_name:o[0].group_name,group_display_name:o[0].group_display_name,Data:o};a.GroupBy.push(s)}}}))),a.CampaignId>0){var n={};a.CampaignData.forEach((function(a){""!=a.astype&&"YES"==a.form_field_visibility&&("campaign_owner"==a.name&&"object"===Object(o["a"])(a.value)&&null!==a.value?n[a.name]=a.value.value:n[a.name]=a.value)})),a.$refs.form.resetForm({values:n})}setTimeout((function(){a.CheckBoxBootstrap()}),500),setTimeout((function(){a.RadioButtonBootstrap()}),500)}}))},onSearch:function(a,e){a&&this.searchSelectData(a,this,e)},searchSelectData:function(a,e,t){this.ShowSearchData(a,e,t,t.value.value)},ShowSearchData:function(a,e,t,n){"undefined"==typeof n&&(n=0);var i="id=&moduleName="+this.$route.params.moduleName+"&type="+t.field_code;"fill"==t.dependent_type&&(i+="&refId="+n),s["a"].getDDLData(i+"&search="+escape(a)).then((function(a){var e=[];return a.data,""!=a.data&&(e=a.data),t.select_options=e.DATA,t.select_options}))},setSelectedValue:function(a,e){var t=this;try{Array.isArray(e)?a.value="object"===Object(o["a"])(e[0])&&null!==e[0]?e[0].value:e[0]:(a.has_dependent>=0&&t.GroupBy.forEach((function(n){n.Data.forEach((function(n){n.parent_id==a.custom_field_id&&"fill"==n.dependent_type&&t.ShowSearchData("",t,n,e.value)}))})),a.value=e)}catch(n){}},onBlur:function(a){try{String(a.value).length>1&&(a.value=Number.parseFloat(a.value).toFixed(2),this.$refs.form.setFieldValue(a.name,a.value))}catch(e){}}}},d=c,p=t("2877"),m=Object(p["a"])(d,n,i,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=ManageCampaign.js.map