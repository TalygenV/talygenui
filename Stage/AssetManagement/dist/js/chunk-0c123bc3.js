(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c123bc3"],{"191f":function(t,e,a){"use strict";var o=function(){var t=this,e=t._self._c;return e("section",[e("loader",{attrs:{"is-visible":t.isLoading}}),e("div",{staticClass:"modal my-popups right fade",attrs:{id:"modelAddProduct",role:"dialog"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header mheader-user"},[e("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(e){return t.close()}}},[e("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})]),e("h4",{staticClass:"modal-title",attrs:{id:"myModalLabel"}},[t._v(t._s(t.$t("AddItem")))]),e("span",{staticClass:"user-guide"},[t._m(0),e("div",{staticClass:"divancuserguide collapse overflow-auto",attrs:{id:"collapseReplyUG"}},[e("div",{staticClass:"custom-scrollbar-js",attrs:{id:"scrollbarreplyuserguideMangeView"}},[e("div",{staticClass:"con",domProps:{innerHTML:t._s(t.$t("UserGuideAddProduct"))}})])])])]),e("div",{staticClass:"modal-body"},["setup"==t.popupCondition?e("div",{staticClass:"left-menu-tab new_tab"},[e("div",{staticClass:"col-md-12 pb-0"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0 float-left"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-8 pr-0 font-weight-medium"},[t._v(t._s(t.$t("CompleteYourProfile")))]),e("div",{staticClass:"col-4 pl-0 text-right"},[e("small",[e("i",{staticClass:"fa fa-check-circle pr-1",class:{"text-success":"Completed"==t.SetupProgresText,"text-muted":"Completed"!==t.SetupProgresText}}),t._v(t._s(t.SetupProgresText))])])]),e("div",{staticClass:"progress smaller my-2"},[e("div",{staticClass:"progress-bar progress-bar-primary progress-bar px-0 text-center memoryused",class:""+t.progressBarColor,style:`width: ${t.SetupProgress}%; font-weight:500; font-size:14px`,attrs:{s:"",id:"divConsumendStorage",title:t.SetupProgress}},[t._v(t._s(t.SetupProgress)+"% ")])]),e("div",{staticClass:"level_info my-2 d-block float-left w-100",staticStyle:{height:"auto"}},[e("ul",[e("li",[e("b",{attrs:{id:"divConsumendStorage"}},[e("span",[t._v("{[$t('Progress')]} "+t._s(t.CurrentTab)+" of 3")])])])])])])])]),e("div",{staticClass:"mt-0",staticStyle:{"max-height":"calc(100vh - 2px)"},attrs:{id:"divscrollsetuptabs"}},[e("ul",{staticClass:"nav nav-pills flex-column left-tab responivecustomtab lefttabiconfix newtab_des"},[e("li",{staticClass:"nav-item FourthScreen",on:{click:function(e){return t.SkipTab(1)}}},[e("a",{staticClass:"nav-link left-menu",class:{active:1==t.step},staticStyle:{cursor:"pointer"}},[e("i",{staticClass:"fa fa-random pr-2 text-muted",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"font-14"},[t._v(t._s(t.$t("SetUpLocation")))])])]),e("li",{staticClass:"nav-item SecondScreen",on:{click:function(e){return t.SkipTab(2)}}},[e("a",{staticClass:"nav-link left-menu",class:{active:2==t.step},staticStyle:{cursor:"pointer"}},[e("i",{staticClass:"fa fa fa-cog pr-2 text-muted",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"font-14"},[t._v(t._s(t.$t("SetUpProductType")))])])]),e("li",{staticClass:"nav-item ThirdScreen",on:{click:function(e){return t.SkipTab(3)}}},[e("a",{staticClass:"nav-link left-menu",class:{active:3==t.step},staticStyle:{cursor:"pointer"}},[e("i",{staticClass:"fa fa-plus pr-2 text-muted",attrs:{"aria-hidden":"true"}}),t.IsClientStoragesCopmleted?e("i",{staticClass:"fa fa-check-circle font-18 pr-2 text-success",attrs:{"aria-hidden":"true"}}):t._e(),e("span",{staticClass:"font-14"},[t._v(t._s(t.$t("AddDeployeItem")))])])])])])]):t._e(),3==t.step?e("div",{staticClass:"border p-3"},[t.DataLoaded?e("dynamic-form",{ref:"modalAddCustomForm",attrs:{buttons:t.buttons,schema:t.FormSchema},on:{OnSubmit:t.onSubmit},scopedSlots:t._u([{key:"tgslot-UnitPrice",fn:function({data:a}){return[e("div",{staticClass:"input-group"},[e("span",{staticClass:"input-group-append"},[e("span",{staticClass:"input-group-text",attrs:{id:"spnOutOF"}},[t._v("(USD)")])]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.fieldInfo.value,expression:"data.fieldInfo.value"}],staticClass:"form-control",attrs:{type:"number",maxlength:"10",step:"any",pattern:"\\d+\\.?\\d?(?!\\d)"},domProps:{value:a.fieldInfo.value},on:{keyup:function(e){return t.GetAssetCost(a.fieldInfo.value,"UnitPrice")},input:function(e){e.target.composing||t.$set(a.fieldInfo,"value",e.target.value)}}})])]}},{key:"tgslot-TotalCost",fn:function({data:a}){return[e("div",{staticClass:"input-group"},[e("span",{staticClass:"input-group-append"},[e("span",{staticClass:"input-group-text",attrs:{id:"spnOutOF"}},[t._v("(USD)")])]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.fieldInfo.value,expression:"data.fieldInfo.value"}],staticClass:"form-control",attrs:{type:"number",pattern:"\\d+\\.?\\d?(?!\\d)",step:"any"},domProps:{value:a.fieldInfo.value},on:{keyup:function(e){return t.GetUnitPrice(a.fieldInfo.value)},input:function(e){e.target.composing||t.$set(a.fieldInfo,"value",e.target.value)}}})])]}}],null,!1,819384131)}):t._e()],1):t._e(),3==t.step?e("div",{staticClass:"right-content row flex-row-reverse mt-3"},[e("div",{staticClass:"col-lg-12 text-left"},[e("div",{staticClass:"py-2 mandatory"},[t._v(" "+t._s(t.$t("MandatoryString"))+" ")])])]):t._e(),e("div",{staticClass:"right-content"},["setup"==t.popupCondition?e("div",{staticClass:"col-md-12 p-0"},[1==t.step?e("div",{staticClass:"col-md-12 p-0"},[e("div",{staticClass:"tab-content"},[e("div",{staticClass:"tab-pane active show",attrs:{id:"step1"}},[e("section",{staticClass:"page-action w-100"},[e("div",{staticClass:"container-fluid p-0"},[e("div",{staticClass:"col-md-12 p-0s addpopuplocation"},[e("AddLocationPopup",{attrs:{popupCondition:t.popupCondition}})],1)])])])])]):t._e(),2==t.step?e("div",{staticClass:"col-md-12 p-0"},[e("div",{staticClass:"tab-content"},[e("div",{staticClass:"tab-pane active show",attrs:{id:"step2"}},[e("section",{staticClass:"page-action w-100"},[e("div",{staticClass:"container-fluid p-0"},[e("div",{staticClass:"col-md-12 p-0"},[e("AddProductType",{attrs:{popupCondition:t.popupCondition}})],1)])])])])]):t._e()]):t._e()])])])])]),t.ShowAddLocation?e("div",{staticClass:"my-popups"},[e("div",{staticClass:"modal d-block"},[e("div",{staticClass:"modal-dialog modal-dialog-centered"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[t._v(" "+t._s(t.$t("Location"))+" ")]),e("button",{staticClass:"close",attrs:{type:"button","data-original-title":"Close"},on:{click:function(e){return t.CloseLocationPopup()}}},[e("em",{staticClass:"fa fa-times"})])]),e("AddLocationPopup")],1)])])]):t._e(),t.IsTagNamePopup?e("TagNamePopup",{attrs:{FromAddProduct:t.FromAddProduct}}):t._e(),t.ShowAddProductType?e("div",{staticClass:"my-popups"},[e("div",{staticClass:"modal d-block"},[e("div",{staticClass:"modal-dialog modal-dialog-centered"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[t._v(" "+t._s(t.$t("ProductType"))+" ")]),e("button",{staticClass:"close",attrs:{type:"button","data-original-title":"Close"},on:{click:function(e){return t.ClosePopupProductType()}}},[e("em",{staticClass:"fa fa-times"})])]),e("AddProductType",{attrs:{FromPage:t.FromPage}})],1)])])]):t._e()],1)},i=[function(){var t=this,e=t._self._c;return e("a",{staticClass:"ancuserguide",attrs:{"data-toggle":"collapse",href:"#collapseReplyUG",role:"button","aria-expanded":"false","aria-controls":"collapseExample"}},[e("em",{staticClass:"fa fa-files-o pr-2"}),t._v("User Guide")])}],s=(a("14d9"),a("1115")),l=a("56f6"),n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"border p-3"},[t.DataLoaded?e("dynamic-form",{attrs:{lang:"en",buttons:t.buttons,schema:t.FormSchema},on:{OnSubmit:t.onSubmit}}):t._e()],1)},r=[],d=a("240d"),c={props:{popupCondition:{type:Boolean,required:!0}},components:{"tree-view":d["TreeSelectField"]},data(){return{FormSchema:[{layoutType:"triple",Data:[{astype:"TreeSelectField",label:this.$t("ParentLocation"),name:"ParentLocation",value:"",placeholder:"",config:{options:[]}},{astype:"TextField",label:this.$t("LocationName"),name:"LocationName",value:"",placeholder:"",validationRules:{required:!0,max:250}},{astype:"SelectField",label:this.$t("Status"),name:"Status",value:"",placeholder:"",config:{options:[],onChange:()=>{}}},{astype:"TextField",label:this.$t("AddressLine1"),name:"AddressLine1",value:"",placeholder:"",validationRules:{required:!0,max:250}},{astype:"TextField",label:this.$t("City"),name:"City",value:"",placeholder:"",validationRules:{required:!0,max:250}},{astype:"SelectField",label:this.$t("Country"),name:"Country",value:"",placeholder:"",validationRules:{required:!0,max:250},config:{option_request_url:"https://newcrmapi.talygen.com/api/Common/GetDDLData?moduleName=CRM&type=COUNTRIES",token:this.GetUserInfo.Token,onChange:this.onChangeDropdown}},{astype:"SelectField",label:this.$t("State"),name:"State",value:"",placeholder:"",config:{options:[]}},{astype:"TextField",label:this.$t("PostalCode"),name:"PostalCode",value:"",placeholder:""},{astype:"TextField",label:this.$t("Email"),name:"Email",value:"",placeholder:""},{astype:"TextField",label:this.$t("Phone1"),name:"Phone1",value:"",placeholder:""},{astype:"TextField",label:this.$t("Phone2"),name:"Phone2",value:"",placeholder:""},{astype:"TextField",label:this.$t("LocationCode"),name:"LocationCode",value:"",placeholder:""},{astype:"SelectField",label:this.$t("Tag"),name:"Tag",value:"",placeholder:"",config:{options:[]}}]}],buttons:[{type:"button",class:"btn btn-secondary",text:"Skip",onClick:this.Skip,isVisible:!1},{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save & New",isVisible:!1},{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save & Next",isVisible:!1},{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Cancel",onClick:this.ClosePopup}],myObj:[],LocationData:[],StatusData:[{name:"Active",value:1001},{name:"Inactive",value:1002}],StateData:[],TagData:[],CreatedAt:"",CreatedBy:"",ModifiedAt:"",ModifiedBy:"",DataLoaded:0,UserId:""}},created:async function(){var t=this;await t.GetLocationByCompanyId(),t.GetStatusDDL(),await t.GetTagsByModuleId(),await t.AdvancedSetupFields(),t.UserId=t.GetUserInfo.ID,t.DataLoaded=1},methods:{Skip:function(){var t=this;t.$parent.SkipTab(2)},async AdvancedSetupFields(){var t=this;"setup"==t.popupCondition&&(t.FormSchema[0].Data[6].visibility=!1,t.FormSchema[0].Data[7].visibility=!1,t.FormSchema[0].Data[8].visibility=!1,t.FormSchema[0].Data[9].visibility=!1,t.FormSchema[0].Data[10].visibility=!1,t.FormSchema[0].Data[11].visibility=!1,t.FormSchema[0].Data[12].visibility=!1,t.buttons[0].isVisible=!0,t.buttons[1].isVisible=!0,t.buttons[2].isVisible=!0,t.buttons[3].isVisible=!1,t.buttons[4].isVisible=!1)},async GetTagsByModuleId(){var t=this,e="modulename=Asset";await s["a"].GetTagsByModuleId(e).then((function(e){t.TagData=JSON.parse(e.data),t.TagData.data.forEach((e,a)=>{t.FormSchema[0].Data[12].config.options.push({name:e.TAG_NAME,value:e.TAG_ID})}),console.log(" GetTagsByModuleId  call end")}))},onChangeDropdown(t){var e=this,a="countryId="+t.target.value;s["a"].GetStateListwithIDByCountryId(a).then((function(t){e.StateData=JSON.parse(t.data).data,e.StateData=e.StateData.map(t=>({name:t.name,value:t.state_id})),$.each(e.FormSchema,(function(t,a){$.each(a.Data,(function(t,a){"State"==a.name&&(a.value="",a.config.options=e.StateData)}))}))}))},async GetLocationByCompanyId(){var t=this,e="reqForm=";await s["a"].GetLocationByCompanyId(e).then((function(e){t.LocationData=JSON.parse(e.data).data;var a=t.MakeNormalArray(e.data).data;$.each(a,$.proxy((function(e,o){var i=o.PARENT_LOCATION_ID,s=$.grep(t.LocationData,(function(t,e){return t.id==i}));if(0==s.length){var l=$.grep(a,(function(t,e){return t.PARENT_LOCATION_ID==i}));if(l.length>0&&l[0].LOCATION_NAME){var n={id:i,label:l[0].LOCATION_NAME,children:l.map(t=>({id:t.COMPANY_LOCATION_ID,label:t.LOCATION_NAME}))};t.FormSchema[0].Data[0].config.options.push(n)}}})))}))},GetStatusDDL(){var t=this;t.StatusData.forEach((e,a)=>{t.FormSchema[0].Data[2].config.options.push({name:e.name,value:e.value})})},ClosePopup(){var t=this;t.$parent.CloseLocationPopup()},onSubmit(t){var e=this,a=`LocationName=${t.LocationName}&LocationId=0`;s["a"].LocationExist(a).then((function(a){if(e.LocationId=a.data.result,a.data.result>0)e.ShowAlert(e.$t("Location already exist",[e.$t("Location")]),"warning",!0,e.$t("Alert"));else{let a={LocationId:e.LocationId,LocationName:t.LocationName,Country:parseInt(t.Country),State:t.State,Address1:t.AddressLine1,Address2:"",City:t.City,PinCode:t.PostalCode,Email:t.Email,Phone1:t.Phone1,Phone2:t.Phone2,CreatedAt:null,CreatedBy:e.UserId,ModifiedAt:null,ModifiedBy:e.UserId,StatusId:t.Status,State_id:""==t.State?null:t.State,LocationCode:t.LocationCode,ParentLocationId:""==t.ParentLocation?null:t.ParentLocation,TagId:t.Tag.length<=0?null:Array.prototype.map.call(t.Tag,(function(t){return t.value})).join(","),CampusId:"",ClientId:1};JSON.stringify(a);s["a"].SaveUpdateLocation(a).then((function(t){"1"==t.data?e.ShowAlert(e.$t("Location has been added successfully",[e.$t("Location")]),"success",!0,e.$t("Alert")):"2"==t.data?e.ShowAlert(e.$t("Location has been updated successfully",[e.$t("Location")]),"success",!0,e.$t("Alert")):"0"==t.data&&e.ShowAlert(e.$t("unknown error",[e.$t("Location")]),"success",!0,e.$t("Alert")),e.$parent.CloseLocationPopup()}))}}))}}},p=c,u=a("2877"),m=Object(u["a"])(p,n,r,!1,null,null,null),h=m.exports,y=a("f6fa"),v={props:{popupCondition:{type:String,required:!1},FromPage:{type:String,required:!1}},components:{TagNamePopup:l["a"],AddLocationPopup:h,AddProductType:y["a"]},data(){return{isLoading:!1,AssetType:[],BarcodeType:[],userLoggedIn2:!1,IsDeployment:!1,IsTagNamePopup:!1,LocationData:[],ShowAddLocation:!1,ShowAddProductType:!1,FromAddProduct:!1,DeploymentType:"",IsEnableAssetManagement:!1,fileUploaded:"",tagData:[],isCheckDeployItem:"",DeployProductValue:!1,FormSchema:[{layoutType:"double",group_name:"Product Information",group_display_name:this.$t("ProductInformation"),Data:[{astype:"SelectField",label:this.$t("ProductType"),name:"ProductType",value:"",placeholder:"Select Product Type",config:{options:[],showAddIcon:!0,onAddButtonClick:this.OpenAddProductTypePopup},validationRules:{required:!0}},{astype:"TextField",label:this.$t("ProductName"),name:"ProductName",value:"",placeholder:"",config:{},validationRules:{required:!0}},{astype:"SelectField",label:this.$t("BarcodeType"),name:"BarcodeType",value:"",placeholder:"Select Barcode Type",config:{options:[]},validationRules:{required:!0}},{astype:"toggleField",label:this.$t("CreateUniqueNameListing"),name:"CreateUniqueNameListing",value:"",placeholder:"",validationRules:{required:!1}},{astype:"FileField",showLabel:!0,label:this.$t("DisplayImage"),name:"DisplayImage",value:"",placeholder:"",validationRules:"",FieldIndex:0,config:{maxSize:5,accept:[{fileType:"png",iconClass:"fa-file-image-o"},{fileType:"jpg",iconClass:"fa-file-image-o"},{fileType:"jpeg",iconClass:"fa-file-image-o"}],onChange:this.setFile,showAddIcon:!1,onAddButtonClick:this.AddFileMore,multiple:!1}},{astype:"MultiSelectField",label:this.$t("Tags"),name:"Tags",value:"",mode:"tag",placeholder:"",config:{options:[],showAddIcon:!0,onAddButtonClick:this.OpenAddTagPopup}}]},{layoutType:"Single",group_name:"Deploy Product",group_display_name:this.$t("DEPLOY_ITEM"),Data:[{astype:"toggleField",label:this.$t("DeployProduct"),name:"DeployProduct",value:"",placeholder:"",config:{onChange:this.HideShowDeployProductFields}}]},{layoutType:"Single",Data:[{astype:"RadioField",label:this.$t("DeploymentType"),name:"DeploymentType",value:"1",placeholder:"",config:{options:[{value:"1",name:"Product"},{value:"2",name:"Inventory"}],onChange:this.OnDeplymentType},visibility:!0,validationRules:{required:!1}}]},{layoutType:"Single",Data:[{astype:"RadioField",label:this.$t("DeploymentType"),name:"SetupDeploymentType",value:"1",placeholder:"",config:{options:[{value:"1",name:"Asset"}],onChange:this.OnDeplymentType},visibility:!0,validationRules:{required:!1}}]},{layoutType:"double",Data:[{astype:"TreeSelectField",label:this.$t("Location"),name:"Location",value:null,placeholder:"Select Location",config:{options:[],onAddButtonClick:this.AddLocation},validationRules:{required:!0}},{astype:"NumericField",label:this.$t("Quantity"),name:"Quantity",value:"0",placeholder:"",visibility:!0,config:{onKeyUp:this.GetAssetCost},validationRules:{required:!0,max:7,min_value:1}},{astype:"SlotField",label:this.$t("UnitPrice"),name:"UnitPrice",value:"0",placeholder:"",validationRules:{max:10},visibility:!0,config:{onKeyUp:this.GetAssetCost}},{astype:"SlotField",label:this.$t("TotalCost"),name:"TotalCost",value:"0",placeholder:"",visibility:!0,config:{onKeyUp:this.GetUnitPrice}}]}],buttons:[{type:"submit",class:"btn btn-secondary",text:"<i class='fa fa-angle-double-left pr-2'></i>Back",onClick:this.BackButton,isVisible:!1},{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save And Close",name:"SaveAndClose"},{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save And New",name:"SaveAndNew"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Cancel",onClick:this.close,isVisible:!0},{type:"button",class:"btn btn-success",text:"<i class='fa fa-check' aria-hidden='true'></i> Finish",isVisible:!1}],DataLoaded:0,TagsArray:[],tags:[],file:[],CurrentTab:1,step:3,SetupProgress:0,count:0,PageSize:10,PageNumber:1,SortBy:"",SortExp:"",IsClientStoragesCopmleted:!1,UserType:"",FromPage:""}},async created(){var t=this;await t.EnableAssetManagement(),await t.GetAssetType(),await t.GetBarcodeType(),await t.GetLocationByCompanyId(),await t.GetTagsByModuleI(),await t.AdvancedSetupFields(),await t.AssetCatalogueListing(),await t.GetProgress(),t.HideShowDeployProductFields("false"),t.UserType=this.GetUserInfo.UserType,"NU"==t.UserType||"PM"==t.UserType?t.FormSchema[0].Data[0].config.showAddIcon=!1:t.FormSchema[0].Data[0].config.showAddIcon=!0,t.DataLoaded=1},mounted(){$("#modelAddProduct").modal({backdrop:"static",keyboard:!1})},methods:{OnDeplymentType(t,e){e.value=t.target.getAttribute("data-value"),console.log(t.target.getAttribute("data-value"))},async AssetCatalogueListing(){var t=this;t.isLoading=!0;var e=`pageSize=${t.PageSize}&pageNum=${t.PageNumber}&sortBy=${t.SortBy}&sortExp=${t.SortExp}&${t.searchCondition}`;await s["a"].AssetCatalogueListing(e).then(e=>{e.data.length>0?(t.count=t.count+1,t.SetupProgresText="Completed"):t.SetupProgress=0,t.isLoading=!1})},GetProgress(){var t=this;1==t.count?t.SetupProgress=33.33:2==t.count?t.SetupProgress=66.66:3==t.count&&(t.SetupProgress=100)},BackButton(){var t=this;t.SkipTab(2)},SkipTab:function(t){var e=this;e.step=t,e.CurrentTab=t},AdvancedSetupFields(){var t=this;"setup"==t.popupCondition&&(t.FormSchema[0].Data[5].visibility=!1,t.FormSchema[2].Data[0].visibility=!1,t.step=1,t.buttons[1].isVisible=!1,t.buttons[0].isVisible=!0,t.buttons[3].isVisible=!1,t.buttons[4].isVisible=!0)},async GetTagsByModuleI(){var t=this;await s["a"].GetTagsByModuleId("moduleName=Asset").then((function(e){t.TagsArray=JSON.parse(e.data).data,t.TagsArray.forEach((e,a)=>{t.FormSchema[0].Data[5].config.options.push({name:e.TAG_NAME,value:e.TAG_ID})})}))},HideShowDeployProductFields(t){var e=this;1==t?("setup"==e.popupCondition?(e.FormSchema[2].Data[0].visibility=!1,e.FormSchema[3].Data[0].visibility=!0):(e.FormSchema[2].Data[0].visibility=!0,e.FormSchema[3].Data[0].visibility=!1),e.FormSchema[4].Data[0].visibility=!0,e.FormSchema[4].Data[1].visibility=!0,e.FormSchema[4].Data[2].visibility=!0,e.FormSchema[4].Data[3].visibility=!0):(e.popupCondition,e.FormSchema[2].Data[0].visibility=!1,e.FormSchema[3].Data[0].visibility=!1,e.FormSchema[4].Data[0].visibility=!1,e.FormSchema[4].Data[1].visibility=!1,e.FormSchema[4].Data[2].visibility=!1,e.FormSchema[4].Data[3].visibility=!1)},onSubmit:function(t,e){var a=this;if(a.IsEnableAssetManagement){a.isLoading=!0;let i={};1==t.DeployProduct?(i.DeployProduct=t.DeployProduct,i.DeployId="0",i.LocationId=t.Location,i.Quantity=parseInt(t.Quantity),i.UnitPrice=parseFloat(t.UnitPrice),i.DeploymentType=""==t.DeploymentType?t.SetupDeploymentType:t.DeploymentType):(i.DeployProduct=""!=t.DeployProduct,i.DeployId="0",i.LocationId="-1",i.Quantity="0",i.UnitPrice="0"),i.AssetCatalogueId="0",i.Name=t.ProductName,i.AssetTypeId=t.ProductType,i.BarcodeTypeId=t.BarcodeType,i.StatusId="1001",i.TotalCost=t.TotalCost,i.AssetCost=t.TotalCost,i.ParentUniqueId="",i.ChildUniqueId="",i.ChildCatalogueId="",i.CatalogueId="",i.CatalogHdnId="",i.SelfieEnabled="",i.ChildCategoryName="",i.AssetUniqueName="",i.AssetCatalogName="",i.Description="",i.AssetTagIdsWizard=Array.prototype.map.call(t.Tags,(function(t){return t.value})).join(","),i.AssetTypeTagIdsWizard="",i.Manufacturer="",i.NumberOfItems=t.Quantity,i.AsseetGroupQuantity="",i.ItemCode="",i.ChildItemCode="",i.ChildCatalogName="",i.ChildRequestQuantity="",i.ChildAssetType="",i.AssetType="",i.StandardTypeId="",i.AssetCompartmentId="",i.AssetGroupId="",i.IsSelfCheckout="",i.IsEnableTerms="",i.SubLocationId="",i.Attachment="",i.CreatedAt="",i.CreatedBy="",i.ModifiedAt="",i.ModifiedBy="",i.Asset_Type="",i.Status="",i.ForCompany="",i.ForEmployee="",i.MoveToInTransitInfo="",i.AvailableItems=t.Quantity,i.PendingAvailableQuantity="",i.PendingTotalAvailableItems="",i.TotalQuantity="",i.ChildAvailableItems="",i.TotalFilesCount="",i.AssetTypeCategory="",i.AssetTypeCategoryName="",i.AssetTypeCategoryCode="",i.AttachmentName="",i.DisplayImage="",i.IsTermsAndCondition="",i.TotalTermsConditionFilesCount="",i.RelatedInfoId="",i.UniqueName=1==t.CreateUniqueNameListing?1:0,i.AssetCatalogueGroup="",i.ChildCreateUniqueNameListing="",i.IsTransitItems="",i.AttachmentPath="",i.LocationName="",i.SubLocationName="",i.AuditFrequency="",i.ImageCaptureFrequency="",i.CalibrationFrequency="",i.CR="",i.DR="",i.IsDisplayImage="",i.PurchaseValue="",i.CurrentBookValue="",i.SalvageValue="",i.Unit="",i.ReqFrom="",i.IsContainer="",i.IsSampleData="",i.Model="",i.Vendor="",i.ManufacturerId="",i.PurchaseOrder="",i.WarrantyDuration="",i.DepreciationRuleId="",i.OrderDate="",i.SalvageCost="",i.ItemLife="",i.InvoiceNumber="",i.InvoiceDate="",i.InsurerName="",i.InsuranceRefNumber="",i.InsuranceTo="",i.DeployedBy="",i.DeployedAt="",i.EnableWarranty="",i.EnableInsurance="",i.EnableItemCost="",i.EnableCalibration="",i.EnableDepreciation="";var o=new FormData;o.append("postString",JSON.stringify(i)),o.append("Files",t.DisplayImage[0]),o.append("Is_DisplayImage","Yes"),s["a"].AddAssetWizard(o).then((function(t){"SaveAndClose"==e?(a.$parent.ShowAddProduct=!1,a.$parent.FetchData(),"size_exceed"==t.data.msg||"FileSizeExceeded"==t.data.msg||"ExceedAllowedSize"==t.data.msg?a.ShowAlert((a.$t("size_exceed",[a.$t("Asset")]),a.$t("Alert"))):"alreadyexist"==t.data.msg?a.ShowAlert(a.$t("Already exist record!"),"warning",a.$t("Alert")):"ValidFileUploadMsg"==t.data.msg?a.ShowAlert(a.$t("Please upload valid file!"),"warning",a.$t("Alert")):"add"==t.data.msg?(a.ShowAlert(a.$t("Product has been Saved Successfully"),"success",a.$t("Alert")),a.$parent.ShowAddProduct=!1,"setup"==a.popupCondition?($("#modelAddProduct").modal("hide"),$("body").removeClass("modal-open"),$(".modal-backdrop").remove()):a.$parent.FetchData()):(a.ShowAlert(a.$t("Unknown Error"),"failure",a.$t("Alert")),a.$parent.ShowAddProduct=!1,"setup"==a.popupCondition?($("#modelAddProduct").modal("hide"),$("body").removeClass("modal-open"),$(".modal-backdrop").remove()):a.$parent.FetchData())):"SaveAndNew"==e&&("size_exceed"==t.data.msg||"FileSizeExceeded"==t.data.msg||"ExceedAllowedSize"==t.data.msg?a.ShowAlert((a.$t("size_exceed",[a.$t("Asset")]),a.$t("Alert"))):"alreadyexist"==t.data.msg?a.ShowAlert(a.$t("Already exist record!"),"warning",a.$t("Alert")):"ValidFileUploadMsg"==t.data.msg?a.ShowAlert(a.$t("Please upload valid file!"),"warning",a.$t("Alert")):"add"==t.data.msg?"setup"==a.popupCondition?a.$parent.ShowAddProduct=!1:(a.$parent.ShowAddProduct=!1,a.ShowAlert(a.$t("Product has been Saved Successfully"),"success",a.$t("Alert")),"RelatedInfo"==a.FromPage?(a.$parent.ShowAddProduct=!1,a.$parent.OpenModelAddProduct(),a.HideShowDeployProductFields("false")):"ProductListing"==a.FromPage&&(a.HideShowDeployProductFields("false"),a.$parent.OpenModelAddProduct())):(a.ShowAlert(a.$t("UnknownError"),"failure",a.$t("Alert")),a.$parent.ShowAddProduct=!1,"setup"==a.popupCondition?a.$parent.ShowAddProduct=!1:a.$parent.FetchData()),a.$refs.modalAddCustomForm.validateForm.reset()),a.$refs.modalAddCustomForm.validateForm.reset(),a.isLoading=!1}))}else a.isLoading=!1,a.ShowAlert(a.$t("Unauthorized Access"),"warning",a.$t("Alert"));a.isLoading=!1},setFile:function(t){var e=this;for(let a=0;a<t.target.files.length;a++){const o=t.target.files[a];e.file.push(o)}},isDeployProduct(){var t=this;t.FormSchema[3].Data[0].isVisible=!0},GetAssetCost(t,e){var a=this;"Quantity"!=e&&"Quantity"!=e.label||(a.FormSchema[4].Data[1].value=a.FormSchema[4].Data[1].value.replace(/[^0-9]/g,""));var o=a.FormSchema[4].Data[1].value.replace(/\./g,""),i=a.FormSchema[4].Data[2].value;""==i&&(i=0,$("#UnitPrice").val(i));var s=parseFloat(i)*parseFloat(o);0==o&&(s=0),a.FormSchema[4].Data[3].value=s.toFixed(3)},GetUnitPrice(t,e){var a=this,o=a.FormSchema[4].Data[1].value;let i=a.FormSchema[4].Data[3].value;var s=0;""==i&&(i=0,a.FormSchema[4].Data[3].value=s),s=parseFloat(i)/parseFloat(o),0==o&&(s=0),a.FormSchema[4].Data[2].value=s.toFixed(3)},UploadFile(t){var e=this;e.fileUploaded=t.target.files[0]},removeTag:function(t){var e=this;e.confirmR(e.$t("ConfirmRemoveTag"),!0,e.$t("Delete"),(function(){var a=e.tagData.findIndex(e=>e.TAG_ID===t);a>-1&&e.tagData.splice(a,1)}))},AddLocation(){var t=this;t.IsDeployment=!0,t.ShowAddLocation=!0},async GetLocationByCompanyId(){var t=this;t.isLoading=!0;var e="reqForm=";await s["a"].GetLocationByCompanyId(e).then((function(e){t.FindalLocationArray=[],t.LocationData=JSON.parse(e.data).data,t.LocationData.forEach(a=>{var o=t.FindalLocationArray.filter((function(t){return t.COMPANY_LOCATION_ID==a.COMPANY_LOCATION_ID}));if(0==o.length&&null==a.PARENT_LOCATION_ID){let o=a.COMPANY_LOCATION_ID,i=t.getChildLocation(o,a,JSON.parse(e.data).data);t.FindalLocationArray.push(i)}}),t.FormSchema[4].Data[0].config.options=t.FindalLocationArray})),t.LocationData.length>0?(t.count=t.count+1,t.SetupProgresText="Completed"):t.SetupProgress=0},getChildLocation:function(t,e,a){let o=this,i={};i={id:e.COMPANY_LOCATION_ID,label:e.LOCATION_NAME};let s=i;var l=a.filter((function(e){return e.PARENT_LOCATION_ID==t}));let n=[];return l.forEach(t=>{let e=t.COMPANY_LOCATION_ID;var s=n.filter((function(e){return e.COMPANY_LOCATION_ID==t.COMPANY_LOCATION_ID}));if(0==s.length){var l=a.filter((function(t){return t.PARENT_LOCATION_ID==e}));if(null!=l&&l.length>0){let i=o.getChildLocation(e,t,a);n.push(i)}else i={id:""+t.COMPANY_LOCATION_ID,label:""+t.LOCATION_NAME},n.push(i)}}),s.children=n,s},OpenAddTagPopup(){var t=this;t.ShowAddProduct=!0,$("#modelAddProduct").modal("show"),setTimeout((function(){$("#modelAddProduct").modal("show"),setTimeout((function(){t.SetBootstraptoolTip()}),200)}),1e3),t.FromAddProduct=!0,t.IsTagNamePopup=!0},async GetBarcodeType(){var t=this;t.isLoading=!0;var e="BarcodeTypeId=";await s["a"].GetBarcodetype(e).then(e=>{t.BarcodeType=JSON.parse(e.data.result),t.BarcodeType.forEach((e,a)=>{t.FormSchema[0].Data[2].config.options.push({name:e.BARCODE_TYPE,value:e.BARCODE_TYPE_ID})}),t.isLoading=!1})},async GetAssetType(){var t=this;t.FormSchema[0].Data[0].config.options=[],t.isLoading=!0;var e="type=ITEMCODE&issueTo=&locationId=";await s["a"].GetAssetTypeCustom(e).then(e=>{t.AssetType=JSON.parse(e.data),t.AssetType.forEach((e,a)=>{t.FormSchema[0].Data[0].config.options.push({name:e.ASSETTYPE,value:e.ASSETID})}),t.isLoading=!1}),t.AssetType.length>0?(t.count=t.count+1,t.SetupProgresText="Completed"):t.SetupProgress=0},close(){var t=this;"setup"==t.popupCondition?t.$parent.showpopup=!1:($("#modelAddProduct").modal("hide"),$("body").removeClass("modal-open"),$(".modal-backdrop").remove(),t.$parent.FetchData(),t.$parent.ShowAddProduct=!1)},CloseTagPopup(){var t=this;t.IsTagNamePopup=!1},CloseLocationPopup(){var t=this;t.ShowAddLocation=!1},async EnableAssetManagement(){let t="moduleName=Asset&configkey=CanSeeAssetManagement";await s["a"].EnableAssetManagement(t).then(t=>{this.IsEnableAssetManagement=t.data})},OpenAddProductTypePopup(){var t=this;t.FromPage="AddProduct",t.ShowAddProductType=!0},ClosePopupProductType(){var t=this;t.ShowAddProductType=!1}}},g=v,C=(a("a06c"),Object(u["a"])(g,o,i,!1,null,null,null));e["a"]=C.exports},"6db7":function(t,e,a){var o=a("83a6");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=a("499e").default;i("5700d930",o,!0,{sourceMap:!1,shadowMode:!1})},"83a6":function(t,e,a){var o=a("24fb");e=o(!1),e.push([t.i,"#modelAddProduct .modal-dialog{max-width:1200px!important}#Location .vue-treeselect__control .vue-treeselect__x-container{display:none}#Location .vue-treeselect{position:relative;text-align:left;border:1px solid #abb5bf}#Location .vue-treeselect--single .vue-treeselect__input{width:100%;height:100%;box-sizing:border-box;border:none}",""]),t.exports=e},a06c:function(t,e,a){"use strict";a("6db7")}}]);
//# sourceMappingURL=chunk-0c123bc3.js.map