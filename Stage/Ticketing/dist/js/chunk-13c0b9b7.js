(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13c0b9b7"],{"3ebd":function(e,a,t){"use strict";var i=function(){var e=this,a=e._self._c;return a("section",[a("div",{staticClass:"my-popups"},[a("loader",{attrs:{"is-visible":e.isLoading}}),a("div",{staticClass:"modal d-block"},[a("div",{staticClass:"modal-dialog modal-dialog-centered"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[e._v(e._s(e.$t("ManageCategory")))]),a("button",{staticClass:"close",attrs:{href:"javascript:;"},on:{click:e.Close}},[a("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"modal-body"},[a("span",{staticClass:"user-guide"},[a("a",{staticClass:"ancuserguide",attrs:{"data-toggle":"collapse",href:"#collapseReply",role:"button","aria-expanded":"false","aria-controls":"collapseExample"}},[e._v(e._s(e.$t("UserGuide")))]),a("div",{staticClass:"divancuserguide collapse",attrs:{id:"collapseReply"}},[a("div",{staticClass:"custom-scrollbar-js",attrs:{id:"scrollbarmergeuserguide"}},[a("div",{staticClass:"con",domProps:{innerHTML:e._s(e.$t("UgAddManageCategory"))}})])])]),a("Form",{ref:"AddManageCategoryModal"},[a("dynamic-form",{attrs:{lang:"en",buttons:e.buttons,schema:e.FormSchema},scopedSlots:e._u([{key:"tgslot-Description",fn:function({data:t}){return[a("ckeditor",{attrs:{editor:e.editor},on:{ready:e.onReady},model:{value:t.fieldInfo.value,callback:function(a){e.$set(t.fieldInfo,"value",a)},expression:"data.fieldInfo.value"}}),a("span",{staticClass:"invalid-feedback d-block",attrs:{name:"Description"}},[e._v(e._s(t.error))])]}},{key:"tgslot-IsForServiceRequest",fn:function({data:t}){return[a("div",{staticClass:"form-group mb-0"},[a("label",{staticClass:"switch"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.fieldInfo.value,expression:"data.fieldInfo.value"},{name:"disabled",rawName:"v-disabled",value:e.disabled,expression:"disabled"}],staticClass:"form-check-input custom-control-input dynamic",attrs:{type:"checkbox",name:"IsLogin"},domProps:{checked:Array.isArray(t.fieldInfo.value)?e._i(t.fieldInfo.value,null)>-1:t.fieldInfo.value},on:{change:[function(a){var i=t.fieldInfo.value,l=a.target,s=!!l.checked;if(Array.isArray(i)){var n=null,o=e._i(i,n);l.checked?o<0&&e.$set(t.fieldInfo,"value",i.concat([n])):o>-1&&e.$set(t.fieldInfo,"value",i.slice(0,o).concat(i.slice(o+1)))}else e.$set(t.fieldInfo,"value",s)},function(a){return e.checkForAutoCreateEnable(t.fieldInfo.value)}]}}),a("span",{staticClass:"slider round",staticStyle:{cursor:"default"}},[a("span",{staticClass:"slider-yes"},[e._v(e._s(e.$t("Yes")))]),a("span",{staticClass:"slider-no"},[e._v(e._s(e.$t("No")))])])])])]}}])})],1)],1)])])])],1)])},l=[],s=t("9769"),n={props:{modulename:{type:String,required:!0},submodulecode:{type:String,required:!0},callbackfunction:{type:Function}},data(){return{editor:this.CLASSIC_EDITOR,isLoading:!1,isSaveAndClose:"",CompanyType:"normal",AutoServiceDisabled:!0,FormSchema:[{layoutType:"double",Data:[{astype:"TextField",label:this.$t("Category"),name:"Category",value:"",placeholder:"",validationRules:{required:!0}},{astype:"SelectField",label:this.$t("Status"),name:"Status",value:"",placeholder:"",config:{options:[{value:"1001",name:"Active"},{value:"1003",name:"Inactive"}],showAddIcon:!1},validationRules:{required:!1}}]},{layoutType:"single",Data:[{astype:"SlotField",label:this.$t("IsForServiceRequest"),name:"IsForServiceRequest",value:"",placeholder:"",config:{options:[]},visibility:!0,validationRules:"",settings:{isInSlot:!0}}]},{layoutType:"single",Data:[{astype:"SlotField",label:this.$t("Description"),name:"Description",value:"",placeholder:"",config:{options:[]},settings:{isInSlot:!0},visibility:!0,validationRules:{required:!0,max:200}}]}],buttons:[{type:"submit",class:"btn btn-success save",text:"<i class='fa fa-save pr-2'></i>Save And Close",value:"SaveAndClose",onClick:this.SaveCategoryForm},{type:"submit",class:"btn btn-success save",text:"<i class='fa fa-save pr-2'></i>Save",onClick:this.SaveCategoryForm},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Cancel",onClick:this.Close}]}},async created(){this.IsExtraMapFeature()},methods:{checkForAutoCreateEnable:function(e){var a=this;a.AutoServiceDisabled=1!=e},Close:function(){var e=this;e.$parent.isManageCategory=!1},ClearFieldValue:function(){var e=this;e._data.FormSchema[0].Data[0].value="",e._data.FormSchema[0].Data[1].value="",e._data.FormSchema[1].Data[0].value="",e._data.FormSchema[2].Data[0].value=""},IsExtraMapFeature:function(){var e=this;s["a"].IsExtraMapFeature().then((function(a){e.CompanyType="",null!=a.data&&""!=a.data&&(e.CompanyType=a.data,"normal"!=e.CompanyType?e.FormSchema[1].Data[0].visibility=!0:e.FormSchema[1].Data[0].visibility=!1)}))},SaveCategoryForm:function(e){var a=this;"SaveAndClose"==e.value&&(a.isSaveAndClose="SaveAndClose"),a.$refs.AddManageCategoryModal.validate().then(e=>{if(e){var t={CategoryName:a._data.FormSchema[0].Data[0].value,Status:a._data.FormSchema[0].Data[1].value,IsForServiceRequest:a._data.FormSchema[1].Data[0].value,Description:a._data.FormSchema[2].Data[0].value,CategoryType:"TICKET_CATEGORY"},i=JSON.stringify(t);s["a"].SaveCategoryData(i).then(e=>{"Success"==e.data.result.MSG?(a.ShowAlert(a.$t("AddedSuccess",[a.$t("Category")]),"success",!0,a.$t("Alert")),"SaveAndClose"==a.isSaveAndClose?(a.Close(),a.$parent.FormSchema.length>0&&a.$parent.FormSchema.forEach((e,t)=>{e.Data.forEach((e,t)=>{"ticket_category_id"==e.name&&a.callbackfunction("TICKET_CATEGORY",e,null)})})):(a.ClearFieldValue(),a.$parent.FormSchema.length>0&&a.$parent.FormSchema.forEach((e,t)=>{e.Data.forEach((e,t)=>{"ticket_category_id"==e.name&&a.callbackfunction("TICKET_CATEGORY",e,null)})}))):a.ShowAlert(a.$t("AddedError",[a.$t("Category")]),"failure",!0,a.$t("Alert"))})}})}}},o=n,d=t("2877"),r=Object(d["a"])(o,i,l,!1,null,null,null);a["a"]=r.exports},b53b:function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e._self._c;return a("section",{staticClass:"main-content"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 padding-t_8"},[a("div",{staticClass:"theme-primary partition-full"},[a("span",{staticClass:"p-name text-white"},[e._v(" "+e._s(e.$t("AddTicket")))]),a("span",{staticClass:"float-right"},[a("RouterLink",{staticClass:"p-action-btn text-white float-right",attrs:{to:"/Ticketing/Index"}},[a("em",{staticClass:"fa fa-angle-double-left"}),a("br"),e._v(" "+e._s(e.$t("BacktoList"))+" ")])],1)])])]),e.isSuccessMessage?a("div",{staticClass:"border p-3"},[a("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 ticket-thankyou text-center"},[e._m(0),a("h1",{staticClass:"mt-4 mb-4"},[e._v(e._s(e.$t("ThankYou")))]),a("div",{staticClass:"pb-4 ticket-number"},[a("P",[e._v(e._s(e.saveTicketStatus))]),a("div",{staticStyle:{"font-size":"20px",position:"relative",background:"#fff3cd",padding:"35px 30px",margin:"20px",border:"4px dotted #856404",display:"inline-block",color:"#856404"}},[e._v(" "+e._s(e.TicketNumber))])],1)])]):e._e(),a("Form",{ref:"AddTicket"},[e.isSuccessMessage?e._e():a("dynamic-form",{ref:"AddTicketForm",attrs:{buttons:e.buttons,schema:e.FormSchema},scopedSlots:e._u([{key:"tgslot-comment",fn:function({data:t}){return[a("ckeditor",{class:{"is-invalid":""!=t.error},attrs:{editor:e.editor},on:{ready:e.onReady,input:function(a){return e.updateCkeditorModel(a,t)}},model:{value:t.fieldInfo.value,callback:function(a){e.$set(t.fieldInfo,"value",a)},expression:"data.fieldInfo.value"}}),a("span",{staticClass:"invalid-feedback"},[e._v(e._s(t.error))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.fieldInfo.value,expression:"data.fieldInfo.value"}],attrs:{type:"hidden"},domProps:{value:t.fieldInfo.value},on:{input:function(a){a.target.composing||e.$set(t.fieldInfo,"value",a.target.value)}}})]}},e.isForServiceRequest?{key:"tgslot-addresFields",fn:function({data:t}){return[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("dynamic-form",{ref:"AddTicketForm1",attrs:{schema:e.StaticObj}})],1),a("div",{staticClass:"col-md-6"},[e.isShowMap?a("ManageMap",{staticClass:"row",attrs:{mapType:"MapBox",mapContainer:"AddTicket",latLng:e.latLng,config:e.config,mapHeight:"355px"},on:{GetAddress:e.GetAddress}}):e._e()],1)])]}}:null],null,!0)})],1),e.isManageCategory?a("ManageCategory",{attrs:{modulename:"Ticketing",submodulecode:"Ticketing",callbackfunction:e.GetDropDownData}}):e._e(),e.isManageClient?a("ManageClient"):e._e()],1)},l=[function(){var e=this,a=e._self._c;return a("span",{staticClass:"checksign text-success"},[a("i",{staticClass:"fa fa-check"})])}],s=(t("14d9"),t("b7ef"),t("9769")),n=t("33e4"),o=t("3ebd"),d=function(){var e=this,a=e._self._c;return a("div",{staticClass:"my-popups"},[a("loader",{attrs:{"is-visible":e.isLoading}}),a("div",{staticClass:"modal d-block"},[a("div",{staticClass:"modal-dialog modal-dialog-centered"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header theme-primary partition-full"},[a("h4",{staticClass:"modal-title"},[e._v(e._s(e.$t("Add Client")))]),a("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(a){return e.Close()}}},[a("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"modal-body"},[a("dynamic-form",{attrs:{lang:"en",buttons:e.buttons,schema:e.FormSchema},on:{OnSubmit:e.onSubmit}})],1)])])])],1)},r=[],c={data(){return{isLoading:!1,TimeZoneList:[],ParentAccountList:[],CientOwnerList:[],RoleList:[],FormSchema:[{layoutType:"four",Data:[{astype:"TextField",label:this.$t("First Name"),name:"First Name",value:"",placeholder:"",validationRules:{required:!0,max:100}},{astype:"TextField",label:this.$t("Last Name"),name:"Last Name",value:"",placeholder:"",validationRules:{required:!0,max:100}},{astype:"TextField",label:this.$t("Email "),name:"Email",value:"",placeholder:"",validationRules:{required:!0,max:100}},{astype:"SelectField",label:this.$t("Gender"),name:"Gender",value:"",placeholder:"",config:{options:[{value:"M",name:"Male"},{value:"F",name:"Female"}],showAddIcon:!1},validationRules:""},{astype:"RadioField",label:this.$t("Account"),name:"Account",value:"",placeholder:"",config:{options:[{name:"Existing",value:1},{name:"Create New",value:2}],showAddIcon:!1,checked:this.onChangeRadio},validationRules:{required:!0}},{astype:"SelectField",label:this.$t("Parent Account"),name:"Gender",value:"",placeholder:"",config:{options:[],showAddIcon:!1},validationRules:{required:!0}},{astype:"TextField",label:this.$t("Account Name"),name:"Account Name",value:"",placeholder:"",validationRules:{required:!1,max:100}},{astype:"SelectField",label:this.$t("Client Owner"),name:"Client Owner",value:"",placeholder:"",config:{options:[],showAddIcon:!1},validationRules:""}]},{group_name:"Advanced Setting",layoutType:"triple",Data:[{astype:"SelectField",label:this.$t("TimeZone"),name:"TimeZone",value:"",placeholder:"",config:{options:[],showAddIcon:!1},validationRules:""},{astype:"SelectField",label:this.$t("Date Format"),name:"Date Format",value:"",placeholder:"",config:{options:[],showAddIcon:!1},validationRules:""},{astype:"SelectField",label:this.$t("Role"),name:"Role",value:"",placeholder:"",config:{options:[],showAddIcon:!1},validationRules:""},{astype:"FileField",showLabel:!1,name:"Attachment",value:"",placeholder:"",validationRules:"",FieldIndex:0,config:{maxSize:5,onChange:this.setFile,showAddIcon:!1,onAddButtonClick:this.AddFileMore,multiple:!1}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Close",onClick:this.Close}]}},created:async function(){await this.GetTimeZoneList(),await this.GetParentAccountList(),await this.GetClientOwnerList(),await this.GetRoleList()},methods:{Close:function(){this.$emit("CloseClientModel")},GetTimeZoneList:async function(){var e=this;await s["a"].GetTimeZoneList().then(async a=>{a.data.length>0&&(e.TimeZoneList=a.data,e.TimeZoneList.forEach((a,t)=>{e.FormSchema[1].Data[0].config.options.push({value:a.code,name:a.value})}))})},GetParentAccountList:async function(){var e=this;await s["a"].GetParentAccountList().then(async a=>{a.data.length>0&&(e.ParentAccountList=a.data,e.ParentAccountList.forEach((a,t)=>{e.FormSchema[0].Data[5].config.options.push({value:a.value,name:a.name})}))})},GetClientOwnerList:async function(){var e=this,a="leadId=0&type=P&moduleName=Client";await s["a"].GetClientOwnerList(a).then(async a=>{a.data.length>0&&(e.ParentAccountList=a.data,e.ParentAccountList.forEach((a,t)=>{e.FormSchema[0].Data[7].config.options.push({value:a.value,name:a.name})}))})},GetRoleList:async function(){var e=this,a="usertype=4";await s["a"].GetRoleList(a).then(async a=>{a.data.length>0&&(e.RoleListList=a.data,e.RoleList.forEach((a,t)=>{e.FormSchema[1].Data[2].config.options.push({value:a.roleId,name:a.roleName})}))})}}},u=c,m=t("2877"),v=Object(m["a"])(u,d,r,!1,null,null,null),f=v.exports,h={components:{ManageMap:n["a"],ManageCategory:o["a"],ManageClient:f},data:function(){return{config:{isShowDrawButton:!0,isShowSearchBox:!0},FormSchema:[],CountryDDl:"",isSuccessMessage:!1,fileMulitpleData:[],isShowMap:!0,latLng:"",CountryDDl:"",StateDDl:"",ticketType:"",Latitude:"",Longitude:"",isForServiceRequest:!1,StaticObj:[{layoutType:"single",Data:[{astype:"SelectField",label:this.$t("ClientAddress"),name:"AddrTo",value:"",disabled:!1,config:{options:[],onChange:this.onChangeDropdown},placeholder:this.$t("Select"),validationRules:""}]},{layoutType:"double",Data:[{astype:"TextField",label:this.$t("Address"),name:"Address",value:"",disabled:!0,placeholder:this.$t("PleaseEnterAddress"),validationRules:{required:!0}},{astype:"SelectField",label:this.$t("Country"),name:"country_id",value:"",disabled:!0,config:{options:[],onChange:this.GetStateDDL},placeholder:this.$t("Select"),validationRules:""},{astype:"SelectField",label:this.$t("State"),name:"State",value:"",disabled:!0,config:{options:[]},placeholder:this.$t("Select"),validationRules:""},{astype:"TextField",label:this.$t("County"),name:"County",value:"",disabled:!0,placeholder:this.$t("PleaseEnterCounty"),validationRules:""},{astype:"TextField",label:this.$t("City"),name:"City",value:"",disabled:!0,placeholder:this.$t("PleaseEnterCityName"),validationRules:""},{astype:"TextField",label:this.$t("Street"),name:"Street",value:"",disabled:!0,placeholder:this.$t("PleaseEnterStreet"),validationRules:""},{astype:"TextField",label:this.$t("ZipCode"),name:"Zip",value:"",disabled:!0,placeholder:this.$t("PleaseEnterZipCode"),validationRules:""},{astype:"TextField",label:this.$t("NoteAboutAddress"),name:"Notes",value:"",disabled:!1,placeholder:this.$t("PleaseEnterDescription"),validationRules:""}]}],buttons:[{type:"submit",class:"btn btn-warning save",text:"<i class='fa fa-save pr-2'></i> Save As Draft",value:"DRAFT",onClick:this.saveForm},{type:"submit",class:"btn btn-success save",text:"<i class='fa fa-save pr-2'></i> Submit",onClick:this.saveForm},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i> Cancel",onClick:this.Close}],isManageCategory:!1,isManageClient:!1,AllowedFileType:[],editor:this.CLASSIC_EDITOR}},created:function(){var e=this;if(e.userid=this.GetUserInfo.ID,e.isBlank(e.$route.params.id)||"0"==e.$route.params.id)"0"==e.$route.params.id||e.$router.push({name:"add",params:{id:0}}),e.getForm(0);else{let a=decodeURIComponent(e.$route.params.id);e.$route.params.ticket_Type;e.getForm(a)}e.GetCountryDDL()},methods:{GetAddress:function(e){var a=this;a.Latitude="",a.Longitude="";var t=e.length-1;let i=a.CountryDDl.filter(a=>a.name===e[t].CompleteAddress.Country.LongName);a.StaticObj[1].Data[0].value=e[t].CompleteAddress.FullAddress;var l=""==i?"":i[0].value;a.StaticObj[1].Data[1].value=l,a.GetStateDDL(null,l),setTimeout((function(){let i=a.StateDDl.filter(a=>a.name===e[t].CompleteAddress.AdministrativeAreaLevel1.LongName);var l=""==i?"":i[0].value;a.StaticObj[1].Data[2].value=l}),1e3),a.StaticObj[1].Data[3].value=e[t].CompleteAddress.AdministrativeAreaLevel2.LongName,a.StaticObj[1].Data[4].value=e[t].CompleteAddress.City.LongName,a.StaticObj[1].Data[5].value=e[t].CompleteAddress.AdministrativeAreaLevel3.LongName,a.StaticObj[1].Data[6].value=e[t].CompleteAddress.PinCode;var s="",n="",o="",d="";e[t].LatLng.forEach((e,a)=>{0==a?(s=e.Lat,n=e.Lng):(o=e.Lat,d=e.Lng)});let r=o+","+n;a.Latitude=r.trim();let c=s+","+d;a.Longitude=c.trim(),a.FormSchema.forEach((e,t)=>{e.Data.forEach((t,i)=>{"General Information"!=e.group_name&&"GeneralInformation"!=e.group_name||("location_se"==t.name&&(t.value=a.Latitude),"location_nw"==t.name&&(t.value=a.Longitude))})})},onChangeDropdown:async function(e){var a=this,t=e.target.name,i="";"AddrTo"==t&&(i=e.target.value),a.FormSchema.forEach((e,t)=>{e.Data.forEach((e,t)=>{if("on_behalf_consumer_id"==e.name){let t=e.value.value;a.isBlank(t)||""==i||a.BindAddressUsingClientAdrress(t,i)}})})},GetCountryDDL:async function(e){var a=this;a.StaticObj[1].Data[1].config.options=[],a.CountryDDl="";var t="id=&&moduleName=TICKETING&type=COUNTRIES&search=&refId=";await s["a"].GetDDLDataFSM(t).then((function(e){if(e.data){var t=e.data;a.CountryDDl=e.data.result.DATA,null!=t&&e.data.result.DATA.forEach((e,t)=>{a.StaticObj[1].Data[1].config.options.push({value:e.value,name:e.name})})}}))},GetStateDDL:async function(e,a){var t=this,i=0;i=null==e?a:e.target.value.toString(),t.StaticObj[1].Data[2].config.options=[],t.StateDDl="";var l="id=&&moduleName=TICKETING&type=STATE&search=&refId="+i;await s["a"].GetDDLDataFSM(l).then((function(e){if(e.data){var a=e.data;t.StateDDl=e.data.result.DATA,null!=a&&e.data.result.DATA.forEach((e,a)=>{t.StaticObj[1].Data[2].config.options.push({value:e.value,name:e.name})})}}))},BindAddressUsingClientAdrress:async function(e,a){var t=this;t.Latitude="",t.Longitude="",t.latLng="";var i=`id=${e}&moduleName=TICKETING&addressId=${a}`;await s["a"].GetTicketClientAddress(i).then(e=>{if(null!=e.data.result&&e.data.result.data.length>0){t.StaticObj[1].Data[0].value=e.data.result.data[0].USER_ADDRESS_1,t.StaticObj[1].Data[1].value=e.data.result.data[0].COUNTRY_ID,t.StaticObj[1].Data[2].value=e.data.result.data[0].CT[0].ST[0].STATE_ID,t.StaticObj[1].Data[4].value=e.data.result.data[0].USER_CITY,t.StaticObj[1].Data[6].value=e.data.result.data[0].USER_ZIPCODE,t.StaticObj[1].Data[7].value=e.data.result.data[0].USER_ADDRESS_DESC,t.Latitude=e.data.result.data[0].Latitude+","+e.data.result.data[0].Longitude,t.Longitude=e.data.result.data[0].Latitude+","+e.data.result.data[0].Longitude,t.FormSchema.forEach((e,a)=>{e.Data.forEach((a,i)=>{"General Information"==e.group_name&&("location_se"==a.name&&(a.value=t.Latitude),"location_nw"==a.name&&(a.value=t.Longitude))})});var a={location_nw:t.Latitude};t.latLng=a}})},BindAddressInEdit:async function(e){var a=this;if(a.Latitude="",a.Longitude="",a.latLng="",null!=e){a.StaticObj[1].Data[0].value=e[0].ADDRFROM,a.StaticObj[1].Data[1].value=e[0].COUNTRY_ID,a.StaticObj[1].Data[2].value=e[0].STATE,a.StaticObj[1].Data[4].value=e[0].CITY,a.StaticObj[1].Data[3].value=e[0].COUNTY,a.StaticObj[1].Data[6].value=e[0].ZIP,a.StaticObj[1].Data[5].value=e[0].DIGSTREET,a.StaticObj[1].Data[7].value=e[0].NOTES,a.Latitude=e[0].LOCATION_NW,a.Longitude=e[0].LOCATION_SE,a.FormSchema.forEach((e,t)=>{e.Data.forEach((t,i)=>{"General Information"==e.group_name&&("location_se"==t.name&&(t.value=a.Latitude),"location_nw"==t.name&&(t.value=a.Longitude))})});var t={location_nw:a.Latitude};a.latLng=t}},onReady(e){e.ui.getEditableElement().parentElement.insertBefore(e.ui.view.toolbar.element,e.ui.getEditableElement());let a=document.getElementsByClassName("ck-dropdown")[2];a.remove();var t=document.querySelector(".ck-file-dialog-button");t.remove();let i=document.getElementsByClassName("ck ck-button ck-off")[8];i.remove()},onChangeEventForFields:function(e,a,t){let i=this;if("FILL_DEPENDENT"==e){a.config.options=[];var l=`id=&moduleName=TICKETING&type=${a.config.fieldCode}&search=&refId=${t}`;s["a"].GetDDLData(l).then((function(e){if(e.data){var t=e.data;null!=t&&(a.config.options=e.data.DATA,i.$refs.AddTicketForm.UpdateKeyValue())}}))}else{if("attachment"==a.name)i.GetBase64String(a.value);else if("ticket_category_id"==a.name){let e=i.$refs.AddTicketForm.getPropertyValue("ticket_category_id","config.options"),t=e.filter(e=>e.value==a.value);i.isForServiceRequest="1"==t[0].first_value,i.isForServiceRequest?(i.FormSchema.forEach((function(e,a){"Address"==e.group_name&&(e.visibility=!0)})),i.$refs.AddTicketForm.updateProperty("ticket_for","value","2"),i.$refs.AddTicketForm.updateProperty("on_behalf","value","4"),i.$refs.AddTicketForm.updateProperty("is_field_service","value","1")):(i.FormSchema.forEach((function(e,a){"Address"==e.group_name&&(e.visibility=!1)})),i.$refs.AddTicketForm.updateProperty("ticket_for","value","1"),i.$refs.AddTicketForm.updateProperty("on_behalf","value",""),i.$refs.AddTicketForm.updateProperty("is_field_service","value","0"))}if("on_behalf"==a.name){let e="3"==a.value?"USERS":"CLIENTS";l=`id=&moduleName=TICKETING&type=${e}&search=&refId=`;s["a"].GetDDLData(l).then((function(e){if(e.data){var t=e.data;null!=t&&(i.$refs.AddTicketForm.updateProperty("on_behalf_consumer_id","config.options",e.data.DATA),i.$refs.AddTicketForm.updateProperty("on_behalf_consumer_id","label",i.$t("3"==a.value?"User":"Client")),i.$refs.AddTicketForm.UpdateKeyValue())}}))}else"on_behalf_consumer_id"==a.name?(i.GetClientaddress(null,t.value),i.GetCountryDDL()):"START_DATE"==a.name?i.FormSchema.forEach((a,t)=>{a.Data.forEach((a,t)=>{"END_DATE"==a.name&&(a.value="",a.config.minDate=e)})}):"SA_Scheduled_StartTime"==a.name&&i.FormSchema.forEach((a,t)=>{a.Data.forEach((a,t)=>{"SA_Scheduled_EndTime"==a.name&&(a.config.minDate=e)})})}},GetClientaddress:async function(e,a){var t=this,i=0;null==e?i=a:(i=e.target.value.toString(),t.clientId=i),t.StaticObj[0].Data[0].config.options=[];var l="id=&&moduleName=TICKETING&type=CLIENT_ADDRESS_LIST_WO&search=&refId="+i;await s["a"].GetDDLDataFSM(l).then((function(e){if(e.data){var a=e.data;null!=a&&(void 0!=e.data.result.DATA?e.data.result.DATA.forEach((e,a)=>{t.StaticObj[0].Data[0].config.options.push({value:e.value,name:e.name}),"1"==e.first_value&&(t.StaticObj[0].Data[0].value=e.value,t.BindAddressUsingClientAdrress(i,e.value))}):(t.StaticObj[1].Data[0].value="",t.StaticObj[1].Data[1].value="",t.StaticObj[1].Data[2].value="",t.StaticObj[1].Data[3].value="",t.StaticObj[1].Data[4].value="",t.StaticObj[1].Data[5].value="",t.StaticObj[1].Data[6].value=""))}}))},GetBase64String:function(e){try{var a=this,t=e[0],i=new FileReader;let l={};i.onload=function(e){return function(e){var i=e.target.result,s=window.btoa(i),n=t.name;a.fileName=n;var o=n.lastIndexOf("."),d=n.substring(o+1,n.length);a.fileExt+="."+d;var r='{"ContentType":"'+t.type+'","Size":"'+t.size+'","Extension":"'+d+'"}',c=t.size;a.fileSize=c,l.attachement_mime=r,l.fileName=n,l.base64String=s,l.fileSize=t.size,l.contentType=t.type,l.ModuleName="TICKETING",l.SubModuleCode="TICKETING",a.fileMulitpleData.push(l)}}(),i.readAsBinaryString(t)}catch(l){}},Close(){this.$router.push({name:"TicketingList"})},GetDropDownData:function(e,a,t){var i=this,l=`id=&moduleName=TICKETING&type=${e}&search=&refId=`;s["a"].GetDDLData(l).then(t=>{a.config.options=[],a.value="",200==t.status&&"TICKET_CATEGORY"==e&&(i.isBlank(t.data.DATA)||t.data.DATA.forEach(e=>{a.config.options.push({value:e.value,name:e.name})})),i.$refs.AddTicketForm.UpdateKeyValue()})},getForm:function(e){var a=this,t="",i=`recordId=${e}&moduleName=Ticketing&subModuleCode=Ticketing`;s["a"].GetDynamicForm(i).then((function(e){if(null!=e&&null!=e.data){var i=e.data.data;if(e.data.configData.length>0){var l=e.data.configData;l.forEach((function(e){"TicketDisallowedFileTypes"==e.CORE_CONFIG_KEY&&(a.AllowedFileType=e.CONFIG_DATA_VALUE)}))}e.data.addressData.length>0&&(t=e.data.addressData);var s=[];s=a.$refs.AddTicketForm.ConvertCustomFieldIntoDynamicFormObj(i),s.forEach((i,l)=>{i.Data.forEach((l,s)=>{if("is_read"==l.name)l.value=0;else if("ticket_for"==l.name&&"0"==a.$route.params.id)l.value="1";else if("is_field_service"==l.name&&"1"==l.value)a.isForServiceRequest=!0,a.BindAddressInEdit(t);else if("on_behalf_consumer_id"==l.name)l.config.showAddIcon=!0,l.config.onAddButtonClick=a.OpenClientModal;else if("product_id"==l.name)"yes"==e.data.chkProductConfig?l.visibility=!0:l.visibility=!1;else if("ticket_category_id"==l.name)"yes"==e.data.chkCategoryConfig?(l.visibility=!0,l.config.showAddIcon=!0,l.config.onAddButtonClick=a.OpenCategoryModal):l.visibility=!1;else if("Preferred Time"==i.group_name)"START_DATE"!=l.name&&"END_DATE"!=l.name||(l.config.format="MM/DD/YYYY h:mm A",l.config.minDate="");else if("attachment"==l.name){l.showLabel=!1;let e=a.AttachmentDisallowedFileType(a.AllowedFileType);null!=e&&(l.config={maxSize:5,accept:e,showAddIcon:!1,onAddButtonClick:"",multiple:!0})}l.config.onChange=a.onChangeEventForFields})}),s.push({layoutType:"single",group_name:"ticketType",visibility:!1,Data:[{astype:"SlotField",name:"TicketType",value:"",visibility:!1}]}),s.push({layoutType:"single",group_name:"Address",visibility:!1,Data:[{astype:"SlotField",name:"addresFields",value:"",visibility:!0,showLabel:!1}]}),a.FormSchema=s}}))},OpenCategoryModal:function(){var e=this;e.isManageCategory=!0},OpenClientModal:function(){var e=this;e.isManageClient=!0},saveForm:function(e){var a=this;a.$refs.AddTicket.validate().then(t=>{if(t){"DRAFT"==e.value&&(a.FormSchema.forEach((e,a)=>{e.Data.forEach((a,t)=>{"ticketType"==e.group_name&&"TicketType"==a.name&&(a.value="DRAFT")})}),a.ticketType="DRAFT"),a.isLoading=!0;var i=a.$refs.AddTicketForm.ConvertDynamicFormObjToCustomFieldObj(a.FormSchema),l=a.$refs.AddTicketForm.ConvertDynamicFormObjToCustomFieldObj(a.StaticObj);i.forEach(e=>{if("on_behalf_consumer_id"==e.field_name&&(a.isBlank(e.field_value)||(e.field_value=e.field_value.value)),"cc_users"==e.field_name&&!a.isBlank(e.field_value)){var t="",i=0;for(i=0;i<e.field_value.length;i++)t=0==i?e.field_value[i].value:t+","+e.field_value[i].value;e.field_value=t}"weekly"==e.field_name&&(a.isBlank(e.field_value)||(e.field_value=e.field_value.value)),"SA_Scheduled_StartTime"==e.field_name&&(""==e.field_value?e.field_value=null:e.field_value=e.field_value),"SA_Scheduled_EndTime"==e.field_name&&(""==e.field_value?e.field_value=null:e.field_value=e.field_value)}),l.forEach(e=>{i.push(e)});var n={data:i,moduleCode:"Ticketing",subModuleCode:"Ticketing",attachmentData:a.fileMulitpleData.length>0?a.fileMulitpleData:null};s["a"].SaveDynamicForm(JSON.stringify(n)).then((function(e){if(a.isLoading=!1,null!=e&&null!=e.data&&"Success"==e.data[0].Status)if(a.TicketNumber=JSON.parse(e.data[0].Value.OTHER_DATA).TICKET_NUMBER,a.ShowAlert(a.$t("AddedSuccess",[a.$t("Ticket")]),"success",!0,a.$t("Alert")),a.isSuccessMessage=!0,"DRAFT"==a.ticketType)a.saveTicketStatus=a.$t("TicketDraftSubmitStatus");else{a.saveTicketStatus=a.$t("TicketSubmitStatus");var t=a.userid;i.forEach(e=>{"on_behalf_consumer_id"==e.field_name&&e.field_value>0&&(t>0&&(t+=","),t+=e.field_value)});var l={message:"",notificationFor:t,typeCode:"TICKET_CREATED",referenceId:0,referenceId2:0};s["a"].InsertNotification(JSON.stringify(l)).then((function(e){}))}else a.ShowAlert(a.$t("ErrorWhileSaving",[a.$t("Ticket")]),"danger",!0,a.$t("Alert")),a.isSuccessMessage=!1}))}})},updateCkeditorModel:function(e,a){a.fieldInfo.value=e}}},p=h,g=Object(m["a"])(p,i,l,!1,null,null,null);a["default"]=g.exports}}]);
//# sourceMappingURL=chunk-13c0b9b7.js.map