(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d237545"],{fb3f:function(a,e,t){"use strict";t.r(e);var s=function(){var a=this,e=a._self._c;return e("section",{staticClass:"tab padding-t_8",attrs:{id:"tabs"}},[e("loader",{attrs:{"is-visible":a.isLoading}}),e("div",{staticClass:"container-fluid tab-style"},[e("input",{attrs:{type:"hidden",id:"AttachmentName",name:"AttachmentName"}}),e("div",{staticClass:"tab_container"},[e("div",{staticClass:"responsive-tabs-container accordion-xs accordion-sm"},[e("ul",{staticClass:"nav nav-tabs all-tabs responsive-tabs mt-2 responivecustomtab HideTab",attrs:{id:"myTab",role:"tablist"}},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link active productCreateTab1",attrs:{href:"#tabs-1","data-toggle":"tab",role:"tab",id:"tab-Details"},on:{click:function(e){return a.UserGuideChange("User_Guide_Asset_Catalogue_Add")}}},[e("span",{staticClass:"tab-no"},[a._v("1")]),a._v(" "+a._s(a.$t("CreateItem")))])]),e("li",{class:{"nav-item disabled":0==a.AssetCatalogId}},[e("a",{staticClass:"nav-link gen_icon productDeployTab2",attrs:{href:"#tabs-2","data-toggle":"tab",role:"tab",id:"tab-timeline"},on:{click:function(e){return a.UserGuideChange("User_Guide_Asset_Catalogue_DeployProduct_Tab")}}},[e("span",{staticClass:"tab-no"},[a._v("2")]),a._v(" "+a._s(a.$t("DeployItem")))])]),e("li",{class:{"nav-item disabled":0==a.AssetCatalogId}},[e("a",{staticClass:"nav-link gen_icon_1",attrs:{href:"#tabs-3","data-toggle":"tab",role:"tab",id:"tab-timeline"},on:{click:function(e){return a.UserGuideChange("User_Guide_Asset_Catalogue_RelatedInfo_Tab")}}},[e("span",{staticClass:"tab-no"},[a._v("3")]),a._v(" "+a._s(a.$t("RelatedInformation"))+" ")])]),e("li",{class:{"nav-item disabled":0==a.AssetCatalogId}},[e("a",{staticClass:"nav-link gen_icon_2",attrs:{href:"#tabs-4","data-toggle":"tab",role:"tab",id:"tab-timeline"},on:{click:function(e){return a.UserGuideChange("User_Guide_Asset_Catalogue_Attachments_Tab")}}},[e("span",{staticClass:"tab-no"},[a._v("4")]),a._v(" "+a._s(a.$t("Attachments"))+" ")])])])])])]),e("div",{staticClass:"clearfix",staticStyle:{clear:"both"}}),a.IsShowDeployProducts?e("DeployProduct",{attrs:{CatID:a.CatID}}):a._e(),a.IsShowCreateProduct?e("CreateProduct",{ref:"UpdateProduct",attrs:{AssetCatalogId:a.AssetCatalogId}}):a._e(),a.IsShowRelatedInformation?e("RelatedInformation",{attrs:{chkRelatedInfo:a.chkRelatedInfo}}):a._e(),a.IsShowAttachmentTab?e("ShowAttachmentTab",{ref:"UpdateProduct"}):a._e(),e("div",{staticClass:"col-lg-6 text-right mt-3 float-right"})],1)},o=[],l=(t("14d9"),t("41ac")),i=function(){var a=this,e=a._self._c;return e("section",[e("loader",{attrs:{"is-visible":a.isLoading}}),e("div",{staticClass:"comapny-setup"},[e("input",{attrs:{type:"hidden","asp-for":"AssetCatalogueId"}}),e("div",{staticClass:"border p-3"},[a.DataLoaded?e("dynamic-form",{attrs:{buttons:a.buttons,schema:a.FormSchema},on:{OnSubmit:a.onSubmit}}):a._e()],1)]),a.IsShowAddNamePopup?e("TagNamePopup"):a._e()],1)},n=[],r=t("1115"),d=t("56f6"),c={props:{AssetCatalogId:{type:String,required:!0}},components:{TagNamePopup:d["a"]},data(){return{FormSchema:[{group_name:"Create Product",group_display_name:this.$t("CreateItem"),layoutType:"four",Data:[{astype:"SelectField",label:this.$t("ProductType"),name:"ProductType",value:"",placeholder:"",config:{options:[],showAddIcon:!1},validationRules:{required:!0}},{astype:"TextField",label:this.$t("ProductName"),name:"ProductName",value:"",placeholder:"",validationRules:{required:!0,max:250}},{astype:"SelectField",label:this.$t("BarcodeType"),name:"BarcodeType",value:"",placeholder:"",config:{options:[]},validationRules:{required:!0}},{astype:"SelectField",label:this.$t("Status"),name:"Status",value:"",placeholder:"",config:{options:[]}},{astype:"SelectField",label:this.$t("Audit"),name:"Audit",value:"",placeholder:"",config:{options:[]}},{astype:"SelectField",label:this.$t("ImageCapture"),name:"ImageCapture",value:"",placeholder:"",config:{options:[]}},{astype:"SelectField",label:this.$t("Calibration"),name:"Calibration",value:"",placeholder:"",config:{options:[]}},{astype:"TextField",label:this.$t("ItemCode"),name:"ItemCode",value:"",placeholder:"",disabled:!0},{astype:"FileField",showLabel:!0,label:this.$t("DisplayImage"),name:"DisplayImage",value:"",placeholder:"",validationRules:"",FieldIndex:0,config:{maxSize:5,accept:[{fileType:"png",iconClass:"fa-file-image-o"},{fileType:"jpg",iconClass:"fa-file-image-o"},{fileType:"jpeg",iconClass:"fa-file-image-o"},{fileType:"pdf",iconClass:"fa-file-archive-o"}],showSelectedFiles:[{attachmentId:"1",attachmentName:"",attachmentPath:""}],onClickSelectedFiles:this.onClickSelectedFile,onChange:this.setFile,showAddIcon:!1,onAddButtonClick:this.AddFileMore,multiple:!1}},{astype:"CustomSelectField",label:this.$t("Tags"),name:"Tags",value:"",mode:"tag",placeholder:"",config:{options:[],showAddIcon:!0,onAddButtonClick:this.OpenAddTagNamePopup}}]},{layoutType:"Single",Data:[{astype:"TextAreaField",label:this.$t("Description"),name:"Description",value:"",placeholder:""}]},{layoutType:"Single",Data:[{astype:"toggleField",label:this.$t("CreateUniqueNameListing"),name:"CreateUniqueNameListing",value:"",placeholder:"",visibility:!1}]},{layoutType:"double",group_name:"Minimum Stock For Alert/Location",group_display_name:this.$t("Minimum_Stock_For_Alert"),Data:[{astype:"NumericField",label:this.$t("ForCompany"),name:"ForCompany",value:"",placeholder:""},{astype:"NumericField",label:this.$t("ForEmployee"),name:"ForEmployee",value:"",placeholder:""}]}],buttons:[{type:"submit",class:"btn btn-primary HideTab",text:"Next<i class='fa fa-angle-double-right pl-2'></i>",name:"Next"},{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save",name:"Save",isVisible:!0},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Cancel",isVisible:!0,onClick:this.btnCancelClick}],AssetType:[],BarcodeType:[],StatusList:[],AssetFrequencyList:[],IsShowAddNamePopup:!1,AssetCatalogDataByID:[],isLoading:!1,IsEnableAssetManagement:!1,fileUploaded:"",TagsArray:[],DataLoaded:0,TagsSelectedArray:[],tagsData:[],TagValues:[],file:[]}},async created(){var a=this;await a.GetAssetType(),await a.GetBarcodeType(),await a.GetStatusList(),await a.GetAssetFrequency(),await a.EnableAssetManagement(),await a.GetTagsByModuleI(),await a.GetAssetTagsById(),void 0!=window.location.href.split("/")[5]?(a.AssetCatalogId=window.location.href.split("/")[5],a.FormSchema[2].Data[0].visibility=!1,await a.GetAssetCatalogById()):(a.AssetCatalogId=0,a.FormSchema[2].Data[0].visibility=!0),a.DataLoaded=1},methods:{onClickSelectedFiles(a){var e=this;e.isLoading=!0;var t=e.AssetCatalogDataByID.ATTACHMENT_PATH.substring(69),s=e.AssetCatalogDataByID.ATTACHMENT_PATH.split(".")[5],o=e.AssetCatalogDataByID.ATTACHMENT_NAME,l="filePath="+t;r["a"].DownloadAttachment(l).then(a=>{if(null!=a.data&&200===a.status){const l=a.data,i=`data:${s};base64,${l}`;var t=document.createElement("a");t.href=i,t.setAttribute("download",o),document.body.appendChild(t),t.click(),e.isLoading=!1}else e.isLoading=!1})},btnNextClick(){var a=this;a.$parent.btnNextTab()},btnCancelClick(){var a=this;a.$parent.btnCancel()},setFile:function(a){var e=this;for(let t=0;t<a.target.files.length;t++){const s=a.target.files[t];e.file.push(s)}},onSubmit:function(a,e){var t=this;if(t.IsEnableAssetManagement){let o={};o.AssetCatalogueId=t.AssetCatalogId,o.Name=a.ProductName,o.LocationId=void 0==t.LocationId?"-1":t.LocationId,o.AssetTypeId=a.ProductType.toString(),o.BarcodeTypeId=a.BarcodeType,o.StatusId=a.Status.toString(),o.AssetTagIdsWizard=Array.prototype.map.call(a.Tags,(function(a){return a.value})).join(","),o.CreateUniqueNameListing=1==a.CreateUniqueNameListing?1:0,o.TotalCost="0",o.AssetCost="0",o.DeployId="0",o.DeployProduct=!1,o.Quantity="0",o.UnitPrice="0",o.ParentUniqueId="",o.ChildUniqueId="",o.ChildCatalogueId="",o.CatalogueId="",o.CatalogHdnId="",o.SelfieEnabled="",o.ChildCategoryName="",o.AssetUniqueName="",o.AssetCatalogName="",o.Description=a.Description,o.AssetTypeTagIdsWizard="",o.Manufacturer="",o.NumberOfItems="0",o.AsseetGroupQuantity="",o.ItemCode="",o.ChildItemCode="",o.ChildCatalogName="",o.ChildRequestQuantity="",o.ChildAssetType="",o.AssetType="",o.StandardTypeId="",o.AssetCompartmentId="",o.AssetGroupId="",o.IsSelfCheckout="",o.IsEnableTerms="",o.SubLocationId="",o.Attachment="",o.CreatedAt="",o.CreatedBy="",o.ModifiedAt="",o.ModifiedBy="",o.Asset_Type="",o.Status="",o.ForCompany=a.ForCompany,o.ForEmployee=a.ForEmployee,o.MoveToInTransitInfo="",o.AvailableItems="",o.PendingAvailableQuantity="",o.PendingTotalAvailableItems="",o.TotalQuantity="",o.ChildAvailableItems="",o.TotalFilesCount="",o.AssetTypeCategory="",o.AssetTypeCategoryName="",o.AssetTypeCategoryCode="",o.AttachmentName="",o.DisplayImage="",o.IsTermsAndCondition="",o.TotalTermsConditionFilesCount="",o.RelatedInfoId="",o.UniqueName=1==a.CreateUniqueNameListing?1:0,o.AssetCatalogueGroup="",o.ChildCreateUniqueNameListing="",o.IsTransitItems="",o.AttachmentPath="",o.LocationName="",o.SubLocationName="",o.AuditFrequency=""==a.Audit?"":a.Audit,o.ImageCaptureFrequency=""==a.ImageCapture?"":a.ImageCapture,o.CalibrationFrequency=""==a.Calibration?"":a.Calibration,o.CR="",o.DR="",o.IsDisplayImage="",o.PurchaseValue="",o.CurrentBookValue="",o.SalvageValue="",o.Unit="",o.ReqFrom="",o.IsContainer="",o.IsSampleData="",o.Model="",o.Vendor="",o.ManufacturerId="",o.PurchaseOrder="",o.WarrantyDuration="",o.DepreciationRuleId="",o.OrderDate="",o.SalvageCost="",o.ItemLife="",o.InvoiceNumber="",o.InvoiceDate="",o.InsurerName="",o.InsuranceRefNumber="",o.InsuranceTo="",o.DeployedBy="",o.DeployedAt="",o.EnableWarranty="",o.EnableInsurance="",o.EnableItemCost="",o.EnableCalibration="",o.EnableDepreciation="";var s=new FormData;s.append("postString",JSON.stringify(o)),null!=a.DisplayImage&&s.append("Files",a.DisplayImage[0]),s.append("IsTermsAndCondition",!1),s.append("Is_DisplayImage","Yes"),r["a"].AddAssetWizard(s).then((function(a){if("size_exceed"==a.data.msg||"FileSizeExceeded"==a.data.msg||"ExceedAllowedSize"==a.data.msg)t.ShowAlert(t.$t("FileSizeExceedMsg"),"failure",!0,t.$t("Alert"));else if("alreadyexist"==a.data.msg)t.ShowAlert(t.$t("Already exist record!"),"warning",t.$t("Alert"));else if("ValidFileUploadMsg"==a.data.msg)t.ShowAlert(t.$t("Please upload valid file!"),"warning",t.$t("Alert"));else if("add"==a.data.msg)if("Next"==e){var s=a.data.recId;t.$router.push({path:"/AssetCatalog/Update/"+s}),t.$parent.btnNextTab(s)}else t.ShowAlert(t.$t("Product has been updated Successfully"),"success",t.$t("Alert")),t.$router.push({path:"/AssetCatalog/Index"});else t.ShowAlert((t.$t("Unknown Error"),t.$t("Alert")))}))}else t.ShowAlert((t.$t("UnauthorizedAccess"),t.$t("Alert")))},async GetTagsByModuleI(){var a=this;await r["a"].GetTagsByModuleId("moduleName=Asset").then((function(e){a.TagsArray=JSON.parse(e.data).data,a.TagsArray.forEach((e,t)=>{a.FormSchema[0].Data[9].config.options.push({name:e.TAG_NAME,value:e.TAG_ID})})}))},EnableAssetManagement:function(){let a="moduleName=Asset&configkey=CanSeeAssetManagement";r["a"].EnableAssetManagement(a).then(a=>{this.IsEnableAssetManagement=a.data})},async GetAssetTagsById(){var a=this,e=`id=${a.AssetCatalogId}&is_for=ASSET_CATALOGUE`;await r["a"].GetAssetTagsById(e).then(e=>{a.tagsData=JSON.parse(e.data),a.tagsData.forEach((e,t)=>{a.TagsSelectedArray.push({label:e.TAG_NAME,value:e.TAG_ID})}),a.FormSchema[0].Data[9].value=a.TagsSelectedArray})},GetAssetCatalogById(){var a=this;a.isLoading=!0;var e="id="+a.AssetCatalogId;r["a"].GetById(e).then(e=>{a.AssetCatalogDataByID=JSON.parse(e.data.result).data[0],a.FormSchema[0].Data[0].value=a.AssetCatalogDataByID.ASSET_TYPE_ID,a.FormSchema[0].Data[1].value=a.AssetCatalogDataByID.NAME,a.FormSchema[0].Data[2].value=a.AssetCatalogDataByID.BARCODE_TYPE_ID,a.FormSchema[0].Data[7].value=a.AssetCatalogDataByID.ITEM_CODE,a.FormSchema[0].Data[6].value=null==a.AssetCatalogDataByID.CALIBRATION_FREQUENCY?"":a.AssetCatalogDataByID.CALIBRATION_FREQUENCY,a.FormSchema[0].Data[5].value=null==a.AssetCatalogDataByID.IMAGE_CAPTURE_FREQUENCY?"":a.AssetCatalogDataByID.IMAGE_CAPTURE_FREQUENCY,a.FormSchema[0].Data[4].value=null==a.AssetCatalogDataByID.AUDIT_FREQUENCY?"":a.AssetCatalogDataByID.AUDIT_FREQUENCY,a.FormSchema[0].Data[3].value=a.AssetCatalogDataByID.STATUS_ID,a.LocationId=a.AssetCatalogDataByID.LOCATION_ID,a.FormSchema[1].Data[0].value=a.AssetCatalogDataByID.DESCRIPTION,a.FormSchema[3].Data[0].value=a.AssetCatalogDataByID.MIN_CMP_QUANTITY,a.FormSchema[3].Data[1].value=a.AssetCatalogDataByID.MIN_EMP_QUANTITY,a.FormSchema[0].Data[8].config.showSelectedFiles[0].attachmentPath=a.AssetCatalogDataByID.ATTACHMENT_PATH,null!=a.AssetCatalogDataByID.ATTACHMENT_PATH&&""!=a.AssetCatalogDataByID.ATTACHMENT_PATH&&(a.FormSchema[0].Data[8].config.showSelectedFiles[0].attachmentName=a.AssetCatalogDataByID.ATTACHMENT_PATH.split("/")[7]),a.isLoading=!1})},async GetAssetType(){var a=this;a.isLoading=!0;var e="type=ITEMCODE&issueTo=&locationId=";await r["a"].GetAssetTypeCustom(e).then(e=>{a.AssetType=JSON.parse(e.data),a.AssetType.forEach(e=>{a.FormSchema[0].Data[0].config.options.push({name:e.ASSETTYPE,value:e.ASSETID})}),a.isLoading=!1})},async GetBarcodeType(){var a=this;a.isLoading=!0;var e="BarcodeTypeId=";await r["a"].GetBarcodetype(e).then(e=>{a.BarcodeType=JSON.parse(e.data.result),a.BarcodeType.forEach((e,t)=>{a.FormSchema[0].Data[2].config.options.push({name:e.BARCODE_TYPE,value:e.BARCODE_TYPE_ID})}),a.isLoading=!1})},async GetStatusList(){var a=this;a.isLoading=!0;var e="langCode=en&statusType=AssetManagement&hasglobal=true";await r["a"].GetStatusList(e).then(e=>{a.StatusList=JSON.parse(e.data),a.StatusList.forEach(e=>{a.FormSchema[0].Data[3].config.options.push({name:e.STATUS,value:e.STATUS_ID})}),a.isLoading=!1})},GetAssetFrequency(){var a=this;let e=[{name:"Annually",value:"annual"},{name:"Half yearly",value:"halfyear"},{name:"Quarterly",value:"quarterly"},{name:"Monthly",value:"month"},{name:"Bi-Weekly",value:"Bi-Weekly"},{name:"Weekly",value:"week"},{name:"Daily",value:"daily"}];a.AssetFrequencyList.push(e),a.AssetFrequencyList[0].forEach((e,t)=>{a.FormSchema[0].Data[4].config.options.push({name:e.name,value:e.value}),a.FormSchema[0].Data[5].config.options.push({name:e.name,value:e.value}),a.FormSchema[0].Data[6].config.options.push({name:e.name,value:e.value})})},OpenAddTagNamePopup(){var a=this;a.IsShowAddNamePopup=!0},CloseTagPopup(){var a=this;a.IsShowAddNamePopup=!1}}},u=c,h=t("2877"),m=Object(h["a"])(u,i,n,!1,null,null,null),p=m.exports,I=t("a888"),g=t("3ab7"),A={components:{DeployProduct:l["a"],CreateProduct:p,RelatedInformation:I["default"],ShowAttachmentTab:g["a"]},data(){return{IsShowDeployProducts:!1,IsShowCreateProduct:!0,IsShowRelatedInformation:!1,IsShowAttachmentTab:!1,IsShowbtnPrevious:!1,IsShowbtnNext:!0,IsShowbtnSave:!0,IsShowbtnCancel:!0,AssetCatalogId:0,chkRelatedInfo:!1,CatID:"",ret:!1}},created(){var a=this;void 0!=window.location.href.split("/")[5]?a.AssetCatalogId=window.location.href.split("/")[5]:a.AssetCatalogId=0},methods:{btnCancel(){var a=this;a.$router.push({path:"/AssetCatalog/Index"})},UserGuideChange(a){var e=this;"User_Guide_Asset_Catalogue_Add"==a&&(e.IsShowCreateProduct=!0,e.IsShowDeployProducts=!1,e.IsShowRelatedInformation=!1,e.IsShowAttachmentTab=!1),"User_Guide_Asset_Catalogue_DeployProduct_Tab"==a&&(e.IsShowDeployProducts=!0,e.IsShowCreateProduct=!1,e.IsShowRelatedInformation=!1,e.IsShowAttachmentTab=!1),"User_Guide_Asset_Catalogue_RelatedInfo_Tab"==a&&(e.IsShowDeployProducts=!1,e.IsShowCreateProduct=!1,e.chkRelatedInfo=!0,e.IsShowRelatedInformation=!0,e.IsShowAttachmentTab=!1),"User_Guide_Asset_Catalogue_Attachments_Tab"==a&&(e.IsShowDeployProducts=!1,e.IsShowCreateProduct=!1,e.IsShowRelatedInformation=!1,e.IsShowAttachmentTab=!0)},btnNextTab(a){var e=this,t=e.getSelectedTabIndex();"#tabs-1"==t&&($('.responivecustomtab a[href="#tabs-2"]').trigger("click"),e.CatID=a,e.AssetCatalogId=a,e.IsShowDeployProducts=!0,e.IsShowCreateProduct=!1,e.IsShowRelatedInformation=!1,e.IsShowAttachmentTab=!1),"#tabs-2"==t&&($('.responivecustomtab a[href="#tabs-3"]').trigger("click"),e.chkRelatedInfo=!0,e.IsShowDeployProducts=!1,e.IsShowCreateProduct=!1,e.IsShowRelatedInformation=!0,e.IsShowAttachmentTab=!1),"#tabs-3"==t&&($('.responivecustomtab a[href="#tabs-4"]').trigger("click"),e.IsShowDeployProducts=!1,e.IsShowCreateProduct=!1,e.IsShowRelatedInformation=!1,e.IsShowAttachmentTab=!0)},btnPreviousTab(){var a=this,e=a.getSelectedTabIndex();"#tabs-4"==e&&($('.responivecustomtab a[href="#tabs-3"]').trigger("click"),a.IsShowDeployProducts=!1,a.IsShowCreateProduct=!1,a.IsShowRelatedInformation=!0,a.IsShowAttachmentTab=!1),"#tabs-3"==e&&($('.responivecustomtab a[href="#tabs-2"]').trigger("click"),a.IsShowDeployProducts=!0,a.IsShowCreateProduct=!1,a.IsShowRelatedInformation=!1,a.IsShowAttachmentTab=!1),"#tabs-2"==e&&($('.responivecustomtab a[href="#tabs-1"]').trigger("click"),a.IsShowCreateProduct=!0,a.IsShowDeployProducts=!1,a.IsShowRelatedInformation=!1,a.IsShowAttachmentTab=!1)},getSelectedTabIndex(){var a="";return $(".responivecustomtab a").each((function(e){$(this).hasClass("active")&&(a=$(this).attr("href"))})),a},btnSave(){var a=this;a.$refs.UpdateProduct.UpdateProduct()}}},C=A,y=Object(h["a"])(C,s,o,!1,null,null,null);e["default"]=y.exports}}]);
//# sourceMappingURL=chunk-2d237545.js.map