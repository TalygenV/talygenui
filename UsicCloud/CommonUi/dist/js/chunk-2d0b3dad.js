(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b3dad"],{"29c3":function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e._self._c;return a("div",[a("loader",{attrs:{"is-visible":e.isLoading}}),a("div",{staticClass:"my-popups"},[a("div",{staticClass:"modal d-block"},[a("div",{staticClass:"modal-dialog modal-dialog-centered ui-draggable"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header ui-draggable-handle py-0"},[a("div",{staticClass:"theme-primary partition-full"},[a("span",{staticClass:"p-name text-white"},[e._v(e._s(e.$t(e.submodulecode)))])]),a("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(a){return e.closepopup()}}},[a("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"border p-3 scroll w-100"},[a("Form",{ref:"myForm"},[0==e.formdoesnotexsist?a("dynamic-form",{ref:"ManageForm",attrs:{lang:"en",buttons:e.buttons,schema:e.FormSchema},scopedSlots:e._u([{key:"tgslot-comment",fn:function({data:t}){return[a("ckeditor",{class:{"is-invalid":""!=t.error},attrs:{editor:e.editor},on:{ready:e.onReady,input:function(a){return e.updateCkeditorModel(a,t)}},model:{value:t.fieldInfo.value,callback:function(a){e.$set(t.fieldInfo,"value",a)},expression:"data.fieldInfo.value"}}),a("span",{staticClass:"invalid-feedback"},[e._v(e._s(t.error))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.fieldInfo.value,expression:"data.fieldInfo.value"}],attrs:{type:"hidden"},domProps:{value:t.fieldInfo.value},on:{input:function(a){a.target.composing||e.$set(t.fieldInfo,"value",a.target.value)}}})]}},{key:"tgslot-unit_price",fn:function({data:t}){return[a("div",{staticClass:"input-group"},[a("span",{staticClass:"input-group-append"},[a("span",{staticClass:"input-group-text",attrs:{id:"spnOutOF"}},[e._v(e._s(e.Currency))])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.fieldInfo.value,expression:"data.fieldInfo.value"}],staticClass:"form-control no-spinner",attrs:{type:"number",name:"unitprice",min:"0",maxlength:5,step:"any",pattern:"\\d+\\.?\\d?(?!\\d)"},domProps:{value:t.fieldInfo.value},on:{input:[function(a){a.target.composing||e.$set(t.fieldInfo,"value",a.target.value)},e.limitLength],keyup:function(a){return e.GetAssetCost(a,t.fieldInfo.value)}}})])]}},{key:"tgslot-asset_cost",fn:function({data:t}){return[a("div",{staticClass:"input-group"},[a("span",{staticClass:"input-group-append"},[a("span",{staticClass:"input-group-text",attrs:{id:"spnOutOF"}},[e._v(e._s(e.Currency))])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.fieldInfo.value,expression:"data.fieldInfo.value"}],staticClass:"form-control no-spinner",attrs:{type:"number",min:0},domProps:{value:t.fieldInfo.value},on:{keyup:function(a){return e.GetUnitPrice(t.fieldInfo.value)},input:function(a){a.target.composing||e.$set(t.fieldInfo,"value",a.target.value)}}})])]}},{key:"tgslot-location_id",fn:function({data:t}){return[a("div",{staticClass:"input-group custlocation"},[a("tree-view",{class:{"form-control":!0},attrs:{options:e.options,placeholder:"Select Location","show-count":!0},model:{value:e.TreeValue,callback:function(a){e.TreeValue=a},expression:"TreeValue"}}),t.fieldInfo.config.showAddIcon?a("div",{staticClass:"ml-2 mt-1"},[a("a",{staticClass:"round-icon-small btn-dark theme-primary",on:{click:e.AddLocation}},[a("i",{staticClass:"fa fa-plus text-white pt-7 font-18",attrs:{alt:"+"}})])]):e._e()],1)]}}],null,!1,902536046)}):e._e(),e.formdoesnotexsist?a("div",{staticClass:"alert alert-danger p-2 text-center",attrs:{role:"alert"}},[e._v(" Form does not exsist. ")]):e._e()],1)],1)])])])])],1)},o=[],n=(t("14d9"),t("b7ef"),t("9769")),l=t("ca17"),s=t.n(l),r=(t("542c"),{components:{"tree-view":s.a},props:{getvalues:{type:Object,required:!0},submodulename:{type:String,required:!0}},data(){return{editor:this.CLASSIC_EDITOR,formdoesnotexsist:!1,isLoading:!1,allowedPerFileSizeInMb:5,UserName:null,UserId:null,FormSchema:[],modulename:"",submodulecode:"",TreeValue:null,FindalLocationArray:[],DisallowedFileType:[],options:[],fileMulitpleData:[],Currency:"",buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save",onClick:this.Submit},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Cancel",onClick:this.closepopup,isVisible:!0}],acceptArray:[]}},async created(){var e=this;e.UserId=e.GetUserInfo.ID,e.UserName=e.GetUserInfo.Name,e.Currency=this.GetUserInfo.Currency,"Asset"===e.getvalues.module_name&&(await e.GetLocationByCompanyId(),await e.GetAllowFileType()),e.getForm(e.getvalues)},methods:{async GetAllowFileType(){var e=this;await n["a"].GetAllowFileType().then(a=>{if(null!=a.data){const t=a.data.AllowedFileTypes.split(",");t.forEach(a=>{const t=a.trim().replace(/\./g,"");e.acceptArray.push({fileType:t,iconClass:"fa-file-image-o"})})}})},closepopup(){var e=this;e.$parent.closewizardpopup()},getForm:function(e){var a=this;a.isLoading=!0,a.modulename=e.module_name,a.submodulecode=e.sub_module_code,""==a.modulename&&"Ticketing"==a.submodulecode&&(a.modulename="Ticketing");var t=`id=&moduleName=${a.modulename}&subModuleCode=${a.submodulecode}&otherData=&langCode=en&CustomLayoutId=&usefor=QuickAdd`;n["a"].GetFormCustomLayout(t).then((function(t){if(null!=t&&null!=t.data&&""!=t.data){var i,o;if(a.formdoesnotexsist=!1,void 0!=typeof t.data.configData&&null!=t.data.configData&&t.data.configData.length>0){var n=t.data.configData;n.forEach((function(e){"TicketFileSize"==e.CORE_CONFIG_KEY&&(a.allowedPerFileSizeInMb=e.CONFIG_DATA_VALUE),"TicketCategoryOptionMandatory"==e.CORE_CONFIG_KEY&&(i=e.CONFIG_DATA_VALUE),"TicketProductOptionMandatory"==e.CORE_CONFIG_KEY&&(o=e.CONFIG_DATA_VALUE),"TicketDisallowedFileTypes"==e.CORE_CONFIG_KEY&&(a.DisallowedFileType=e.CONFIG_DATA_VALUE)}))}var l=a.$refs.ManageForm.ConvertCustomFieldIntoDynamicFormObj(t.data.data);l.forEach((t,n)=>{t.Data.forEach((n,l)=>{if("RadioField"==n.astype){var s="";n.config.options.forEach((e,a)=>{0==a&&(s=e.value)}),n.value=s}if("FileField"==n.astype&&"MANAGE_PRODUCT"!=e.sub_module_code.toUpperCase()&&(n&&n.config&&(n.config.maxSize=a.allowedPerFileSizeInMb),n&&n.config)){let e=a.AttachmentDisallowedFileType(a.DisallowedFileType);null!=e&&(n.config={maxSize:a.allowedPerFileSizeInMb,reject:e,showAddIcon:!1,onChange:a.GetBase64String,onAddButtonClick:"",multiple:!0})}if("Ticketing"==e.sub_module_code&&("is_read"==n.name&&(n.value=0),"ticket_for"==n.name&&"0"==a.$route.params.id&&(n.value="1"),"ticket_category_id"==n.name&&(n.validationRules.required="yes"==i),"product_id"==n.name&&(n.validationRules.required="yes"==o)),"MANAGE_PRODUCT"==e.sub_module_code.toUpperCase()&&("deployement_type"!=n.name&&"location_id"!=n.name&&"quantity"!=n.name&&"unit_price"!=n.name&&"asset_cost"!=n.name||(n.visibility=!1,t.visibility=!1),n.name,"unit_price"==n.name&&(n.astype="SlotField"),"asset_cost"==n.name&&(n.astype="SlotField"),"location_id"==n.name&&(n.astype="SlotField",n.is_required=!1),"deployement_type"==n.name&&(n.value="1"),"type"==n.name&&(n.value=!1),"create_unique_name_list"==n.name&&(n.value=!1),"asset_type_id"==n.name&&a.FromPage,"tag_id"==n.name&&(n.mode="tag"),"type"==n.name&&(n.value=!1,n.is_required=!0),"status_id"==n.name&&(n.value="1001",n.visibility=!1),"attachment_path"==n.name)){n.showLabel=!0;let e="";null!=e&&(n.config={maxSize:5,onChange:a.GetBase64StringAsset,onDeleteSelectedFiles:a.onDeleteSelectedFiles,accept:a.acceptArray,showAddIcon:!1,onAddButtonClick:"",multiple:!1})}"CRM_LEADS"==e.sub_module_code.toUpperCase()&&("lead_date"==n.name&&""==n.value&&(n.value=new Date,n.config={mode:"date",format:"M/D/YYYY"}),"status_id"==n.name&&""==n.value&&(n.value=n.config.options.filter(e=>"active"==e.name.toLowerCase())[0].value),"expected_close_date"==n.name&&(n.config={mode:"date",format:"M/D/YYYY",minDate:new Date})),"CRM_DEALS"==e.sub_module_code.toUpperCase()&&"closing_date"==n.name&&""==n.value&&(n.value=new Date,n.config={mode:"date",format:"M/D/YYYY"}),n.config.onChange=a.onChangeEventForFields})}),a.FormSchema=l,a.isLoading=!1}else a.isLoading=!1,a.formdoesnotexsist=!0}))},onchangeselectfields(e,a,t){var i=this;if("FILL_DEPENDENT"==e){a.config.options=[];var o=`id=&moduleName=TICKETING&type=${a.config.fieldCode}&search=&refId=${t}`;n["a"].GetDDLData(o).then((function(e){if(e.data){var t=e.data;null!=t&&(a.config.options=e.data.DATA,i.$refs.ManageForm.UpdateKeyValue())}}))}},onChangeEventForFields:function(e,a,t){let i=this;"type"==a.name&&i.FormSchema.forEach((e,t)=>{e.Data.forEach((t,i)=>{a.value?("deployement_type"!=t.name&&"location_id"!=t.name&&"quantity"!=t.name&&"unit_price"!=t.name&&"asset_cost"!=t.name||(t.visibility=!0,e.visibility=!0),"location_id"==t.name&&(t.is_required=!0)):("deployement_type"!=t.name&&"location_id"!=t.name&&"quantity"!=t.name&&"unit_price"!=t.name&&"asset_cost"!=t.name||(t.visibility=!1,e.visibility=!1),"location_id"==t.name&&(t.is_required=!1))})}),"attachment_path"==a.name?i.GetBase64StringAsset(a.value):"attachment"==a.name&&i.GetBase64String(a.value);parseFloat(""==i.FormSchema[2].Data[1].value?0:i.FormSchema[2].Data[1].value);var o=parseFloat(""==i.FormSchema[2].Data[2].value?0:i.FormSchema[2].Data[2].value);if("quantity"==a.name)if(parseFloat(a.value)>0&&o>0){var l=parseFloat(a.value)*parseFloat(o);i.FormSchema[2].Data[3].value=l.toFixed(3)}else i.FormSchema[2].Data[3].value="0.000";if("on_behalf"==a.name){let e="3"==a.value?"USERS":"CLIENTS";var s=`id=&moduleName=TICKETING&type=${e}&search=&refId=`;n["a"].GetDDLData(s).then((function(e){if(e.data){var t=e.data;if(null!=t){var o="3"==a.value?"Select User":"Select Client";i.$refs.ManageForm.updateProperty("on_behalf_consumer_id","value",""),i.$refs.ManageForm.updateProperty("on_behalf_consumer_id","config.options",e.data.DATA),i.$refs.ManageForm.updateProperty("on_behalf_consumer_id","label",i.$t("3"==a.value?"User":"Client")),i.$refs.ManageForm.updateProperty("on_behalf_consumer_id","placeholder",o),i.$refs.ManageForm.UpdateKeyValue()}}}))}},GetAssetCost(e,a){var t=this,i=parseFloat(""==t.FormSchema[2].Data[1].value?0:t.FormSchema[2].Data[1].value),o=parseFloat(a);if(a.length>5&&(t.FormSchema[2].Data[2].value=a.slice(0,5),t.ShowAlert(t.$t("The Unit Price field may not be greater than 5 characters"),"failure",t.$t("Alert"))),o>0&&i>0){var n=parseFloat(o)*parseFloat(i);t.FormSchema[2].Data[3].value=n.toFixed(3)}else t.FormSchema[2].Data[3].value="0.000"},GetUnitPrice(e){var a=this,t=parseFloat(""==a.FormSchema[2].Data[1].value?0:a.FormSchema[2].Data[1].value),i=parseFloat(""==a.FormSchema[2].Data[2].value?0:a.FormSchema[2].Data[2].value);if(t>0&&i>0){var o=parseFloat(i)*parseFloat(t);a.FormSchema[2].Data[3].value=o.toFixed(3)}else a.FormSchema[2].Data[3].value="0.000"},Submit(){var e=this;"MANAGE_PRODUCT"==e.getvalues.sub_module_code.toUpperCase()?e.$refs.ManageForm.validateForm.validate().then(a=>{if(a){e.isLoading=!0;var t=e.$refs.ManageForm.ConvertDynamicFormObjToCustomFieldObj(e.FormSchema);t.forEach((a,t)=>{if("type"==a.field_name&&(1==a.field_value?a.field_value=1:a.field_value=2),"create_unique_name_list"==a.field_name&&(1==a.field_value?a.field_value=1:a.field_value=0),"location_id"==a.field_name&&(a.field_value=null==e.TreeValue?0:e.TreeValue),"unit_price"==a.field_name&&(e.FormSchema[2].Data[2].value>0?a.field_value=e.FormSchema[2].Data[2].value:a.field_value=0),"asset_cost"==a.field_name&&(a.field_value=e.FormSchema[2].Data[3].value),"tag_id"===a.field_name){const e=a.field_value;e.forEach(e=>{e.tagId=e.value});const t=e.map(e=>e.tagId).join(",");a.field_value=t}});var i={data:t,moduleCode:"Asset",subModuleCode:"Manage_Product",attachmentData:e.fileMulitpleData.length>0?e.fileMulitpleData:null};n["a"].IsDuplicateAssetCatalog(JSON.stringify(i)).then((function(a){if(a.data.isSave){let t={field_name:"item_code",field_value:a.data.itemCode};i.data.push(t),n["a"].SaveDynamicForm(JSON.stringify(i)).then((function(a){null!=a&&null!=a.data&&"Success"==a.data[0].Status?(e.ShowAlert(e.$t("Product has been Saved Successfully"),"success",e.$t("Alert")),e.closepopup(),e.isLoading=!1):(e.ShowAlert(e.$t("ErrorWhileSaving",[e.$t("Product")]),"danger",!0,e.$t("Alert")),"setup"==e.popupCondition&&(e.$parent.ShowAddProduct=!1),e.isLoading=!1)}))}else e.ShowAlert(e.$t("AlreadyExistRec"),"danger",!0,e.$t("Alert")),e.isLoading=!1}))}}):e.$refs.ManageForm.validateForm.validate().then(a=>{if(a){e.isLoading=!0;var t=e.$refs.ManageForm.ConvertDynamicFormObjToCustomFieldObj(e.FormSchema,!0),i={data:t,moduleCode:e.modulename,subModuleCode:e.submodulecode,attachmentData:e.fileMulitpleData.length>0?e.fileMulitpleData:null};n["a"].SaveDynamicForm(JSON.stringify(i)).then((function(a){"Success"==a.data[0].Status&&(e.ShowAlert(e.$t(e.submodulecode)+"  "+e.$t("AddedSuccesss"),"success",!0,e.$t("Alert")),e.closepopup())}))}e.isLoading=!1})},updateCkeditorModel:function(e,a){a.fieldInfo.value=e},onReady(e){e.ui.getEditableElement().parentElement.insertBefore(e.ui.view.toolbar.element,e.ui.getEditableElement())},GetLocationByCompanyId:async function(){var e=this,a="reqForm=assetassignment";await n["a"].GetLocationByuserId(a).then(a=>{e.FindalLocationArray=[],"undefined"==typeof e.$route.params.reqForm||"pendingRequest"==e.$route.params.reqForm&&""!=e.GetParentDetails&&null!=e.GetParentDetails?e.TreeValue=null:e.TreeValue=a.data.data[0].COMPANY_LOCATION_ID,a.data.data.forEach(t=>{var i=e.FindalLocationArray.filter((function(e){return e.COMPANY_LOCATION_ID==t.COMPANY_LOCATION_ID}));if(0==i.length&&null==t.PARENT_LOCATION_ID){let i=t.COMPANY_LOCATION_ID,o=e.getChildLocation(i,t,a.data.data);e.FindalLocationArray.push(o)}}),e.options=e.FindalLocationArray})},getChildLocation:function(e,a,t){let i=this,o={};o={id:a.COMPANY_LOCATION_ID,label:a.LOCATION_NAME};let n=o;var l=t.filter((function(a){return a.PARENT_LOCATION_ID==e}));let s=[];return l.forEach(e=>{let a=e.COMPANY_LOCATION_ID;var n=s.filter((function(a){return a.COMPANY_LOCATION_ID==e.COMPANY_LOCATION_ID}));if(0==n.length){var l=t.filter((function(e){return e.PARENT_LOCATION_ID==a}));if(null!=l&&l.length>0){let o=i.getChildLocation(a,e,t);s.push(o)}else o={id:""+e.COMPANY_LOCATION_ID,label:""+e.LOCATION_NAME},s.push(o)}}),n.children=s,n},GetBase64String:function(e){try{var a=this,t=e.target.files[0],i=new FileReader;let o={};i.onload=function(e){return function(e){var i=e.target.result,n=window.btoa(i),l=t.name;a.fileName=l;var s=l.lastIndexOf("."),r=l.substring(s+1,l.length);a.fileExt+="."+r;var d='{"ContentType":"'+t.type+'","Size":"'+t.size+'","Extension":"'+r+'"}',u=t.size;a.fileSize=u,o.attachement_mime=d,o.fileName=l,o.base64String=n,o.fileSize=t.size,o.contentType=t.type,o.ModuleName="TICKETING",o.SubModuleCode="TICKETING",a.fileMulitpleData.push(o)}}(),i.readAsBinaryString(t)}catch(o){}},GetBase64StringAsset:function(e){try{var a=this,t=e[0],i=new FileReader;let o={};i.onload=function(e){return function(e){var i=e.target.result,n=window.btoa(i),l=t.name;a.fileName=l;var s=l.lastIndexOf("."),r=l.substring(s+1,l.length);a.fileExt+="."+r;var d='{"ContentType":"'+t.type+'","Size":"'+t.size+'","Extension":"'+r+'"}',u=t.size;a.fileSize=u,o.attachement_mime=d,o.fileName=l,o.base64String=n,o.fileSize=t.size,o.contentType=t.type,o.ModuleName="Asset",o.SubModuleCode="Manage_Products",a.fileMulitpleData.push(o)}}(),i.readAsBinaryString(t)}catch(o){}}}}),d=r,u=t("2877"),c=Object(u["a"])(d,i,o,!1,null,null,null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0b3dad.js.map