(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-303fb24c"],{"73cc":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"main-content",attrs:{id:"main-content"}},[e("loader",{attrs:{"is-visible":t.isLoading}}),e("section",{staticClass:"page-action"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 padding-t_8"},[e("div",{staticClass:"theme-primary partition-full"},[e("span",{staticClass:"p-name text-white"},[t._v(t._s(t.$t("ImportCategory")))]),e("span",{staticClass:"p-actions float-right"},[e("a",{staticClass:"p-action-btn text-white",attrs:{title:"BacktoList"},on:{click:t.BackTolist}},[e("em",{staticClass:"fa fa-angle-double-left pr-2"}),e("br"),e("span",[t._v(t._s(t.$t("BacktoList")))])])])])])])]),e("div",{staticClass:"user-guide-custom d-none"},[t._v(" "+t._s(t.$t("User_Guide_Import Category"))+" ")]),e("div",{staticClass:"border p-3"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"form-group"},[e("label",[t._v(t._s(t.$t("DownloadImportCategory"))+":")]),e("div",{staticClass:"input-group mb-3"},[e("div",{staticClass:"form-control"},[e("i",{staticClass:"fa fa-file-excel-o pr-1 text-success"}),t._v(t._s(t.$t("Import Category"))+".xls ")]),t._m(0)])])]),e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"form-group"},[e("label",[t._v(t._s(t.$t("UploadFile"))+":"),e("span",{staticClass:"text-danger"},[t._v("*")])]),e("div",{staticClass:"input-group"},[e("div",{staticClass:"custom-file Import Category"},[e("input",{staticStyle:{position:"absolute",clip:"rect(0px, 0px, 0px, 0px)"},attrs:{type:"file",name:"FileSrc",id:"flAvatar",multiple:"true",tabindex:"-1"},on:{change:function(a){return t.setFile(a)}}}),e("div",{staticClass:"bootstrap-filestyle input-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.attachmentName,expression:"attachmentName"}],staticClass:"form-control disabled",attrs:{type:"text",disabled:""},domProps:{value:t.attachmentName},on:{input:function(a){a.target.composing||(t.attachmentName=a.target.value)}}}),e("div",{staticClass:"input-group-append",staticStyle:{cursor:"pointer"}},[e("span",{staticClass:"group-span-filestyle input-group-btn input-group-text bg-white",attrs:{tabindex:"0"}},[e("label",{staticClass:"mb-0 font-weight-normal ",attrs:{title:"Click here to select a file.",for:"flAvatar"}},[t._v(t._s(t.$t("FileControlText")))])]),e("span",{staticClass:"input-group-text border-0 bg-transparent p-0 pl-2"},[e("a",{staticClass:"round-icon-small btn-danger-light",attrs:{href:"javascript:;",title:"Clear"},on:{click:t.Clear}},[e("i",{staticClass:"fa fa-undo"})])])])])])])])])]),e("div",{staticClass:"row flex-row-reverse"},[e("div",{staticClass:"col-lg-6 text-right"},[e("a",{staticClass:"btn btn-info formbtn mr-1",attrs:{href:"javascript:void(0);",title:t.$t("ImportCategoryExcelFile")},on:{click:function(a){return t.UploadImportCategoryFile()}}},[e("i",{staticClass:"fa fa-download pr-2"}),t._v(t._s(t.$t("Import Category")))]),e("a",{staticClass:"btn btn-danger formbtn my-2",attrs:{title:"","data-toggle-tooltip":"tooltip","data-original-title":"Cancel"},on:{click:function(a){return t.onCancel()}}},[e("i",{staticClass:"fa fa-close mr-2"}),t._v("Cancel")])])])]),0!=t.CategoryTypedata?e("div",{staticClass:"table-responsive mb-3 table-fix-header"},[e("Form",{ref:"formm"},[e("table",{staticClass:"table table-bordered dt-responsive nowrap mt-0",attrs:{id:"tblExpList"}},[e("thead",{staticClass:"thead-bg"},[e("tr",[e("th",{staticStyle:{width:"156px","min-width":"120px","max-width":"156px"},attrs:{id:"th-PRODUCTTYPE"}},[e("span",{staticClass:"d-inline-block"},[t._v("Category"),e("span",{staticClass:"d-inline-block"})])]),e("th",{staticStyle:{width:"156px","min-width":"120px","max-width":"156px"},attrs:{id:"th-PRODUCTTYPE"}},[e("span",{staticClass:"d-inline-block"},[t._v("Application/Website"),e("span",{staticClass:"d-inline-block"})])]),e("th",{staticStyle:{width:"156px","min-width":"120px","max-width":"156px"},attrs:{id:"th-PRODUCTTYPE"}},[e("span",{staticClass:"d-inline-block"},[t._v("Color Code"),e("span",{staticClass:"d-inline-block"})])]),e("th",{staticStyle:{width:"156px","min-width":"120px","max-width":"156px"},attrs:{id:"th-PRODUCTTYPE"}},[e("span",{staticClass:"d-inline-block"},[t._v("Category Code"),e("span",{staticClass:"d-inline-block"})])])])]),t._l(t.CategoryTypedata,(function(a,i){return e("tbody",{key:i},["0"!=t.CategoryTypedata.length?e("tr",[e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:a.CategoryName,expression:"item.CategoryName"}],staticClass:"enlarged-textarea",attrs:{type:"text"},domProps:{value:a.CategoryName},on:{input:function(e){e.target.composing||t.$set(a,"CategoryName",e.target.value)}}})]),e("td",[e("textarea",{directives:[{name:"model",rawName:"v-model",value:a.ApplicationWebsite,expression:"item.ApplicationWebsite"}],staticClass:"enlarged-textarea",domProps:{value:a.ApplicationWebsite},on:{input:function(e){e.target.composing||t.$set(a,"ApplicationWebsite",e.target.value)}}})]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:a.Colocode,expression:"item.Colocode"}],staticStyle:{width:"90%"},attrs:{type:"text",disabled:!0},domProps:{value:a.Colocode},on:{input:function(e){e.target.composing||t.$set(a,"Colocode",e.target.value)}}}),e("div",{staticClass:"colorpick",staticStyle:{position:"absolute",top:"12px",right:"0","z-index":"1"}},[e("ColourPicker",{attrs:{color:a.colour,"no-input":"",value:a.colour,picker:"compact"},on:{input:function(e){return t.pickerColorChange(e,a)}},model:{value:a.colour,callback:function(e){t.$set(a,"colour",e)},expression:"item.colour"}})],1)]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:a.Categorycode,expression:"item.Categorycode"}],attrs:{type:"text"},domProps:{value:a.Categorycode},on:{input:function(e){e.target.composing||t.$set(a,"Categorycode",e.target.value)}}})])]):t._e()])}))],2),"0"==t.CategoryTypedata.length?e("div",{staticClass:"text-danger text-center no-record",attrs:{colspan:"10"}},[t._v(" "+t._s(t.$t("NoRecordfound"))+" ")]):t._e()]),e("div",{staticClass:"row flex-row-reverse"},[e("div",{staticClass:"col-lg-6 text-right"},[e("div",{staticClass:"search-btm-btn"},[e("a",{staticClass:"btn btn-success formbtn widthhalf",attrs:{id:"aSubmit",href:"javascript:;",tooltip:"Submit",title:"Submit"},on:{click:function(a){return t.SubmitData()}}},[e("i",{staticClass:"fa fa-save pr-2"}),t._v("Submit")]),t._v("  "),e("a",{staticClass:"btn btn-danger formbtn my-2",attrs:{id:"aCancel",href:"javascript:;",tooltip:"Cancel",title:"Cancel"},on:{click:t.onCancel}},[e("i",{staticClass:"fa fa-close pr-2"}),t._v("Cancel")])])])])],1):t._e()],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"input-group-append downloadImport Category"},[e("span",{staticClass:"input-group-text",attrs:{id:"basic-addon2"}},[e("a",{attrs:{href:"https://cogniterblob.blob.core.windows.net/global/ImportCategorys.xls",download:""}},[e("i",{staticClass:"fa fa-download text-primary"})])])])}],o=(e("14d9"),e("2b0e")),l=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[e("div",{staticClass:"listing mt-2"},[e("div",{staticClass:"col-lg-12 float-left px-0"},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-bordered dt-responsive nowrap mt-0"},[e("thead",{staticClass:"thead-bg"},[e("tr",[e("th",{staticClass:"ui-resizable",staticStyle:{width:"156px","min-width":"156px","max-width":"156px"}},[e("span",{staticClass:"d-inline-block",staticStyle:{"min-width":"138px"}},[t._v("CategoryName"),e("span",{staticClass:"d-inline-block"},[e("span",{staticClass:"text-danger"},[t._v("*")])])]),e("div",{staticClass:"sizer"}),e("div",{staticClass:"ui-resizable-handle ui-resizable-e",staticStyle:{"z-index":"90"}})]),e("th",{staticClass:"ui-resizable",staticStyle:{width:"85px","min-width":"85px","max-width":"85px"}},[e("span",{staticClass:"d-inline-block",staticStyle:{"min-width":"67px"}},[t._v("Color"),e("span",{staticClass:"d-inline-block"},[e("span",{staticClass:"text-danger"},[t._v("*")])])]),e("div",{staticClass:"sizer"}),e("div",{staticClass:"ui-resizable-handle ui-resizable-e",staticStyle:{"z-index":"90"}})]),e("th",{staticClass:"ui-resizable",staticStyle:{width:"85px","min-width":"85px","max-width":"85px"}},[e("span",{staticClass:"d-inline-block",staticStyle:{"min-width":"67px"}},[t._v("ApplicationName"),e("span",{staticClass:"d-inline-block"},[e("span",{staticClass:"text-danger"},[t._v("*")])])]),e("div",{staticClass:"sizer"}),e("div",{staticClass:"ui-resizable-handle ui-resizable-e",staticStyle:{"z-index":"90"}})])])])])]),e("div",{staticClass:"row flex-row-reverse"},[e("div",{staticClass:"col-lg-6 text-right"},[e("div",{staticClass:"search-btm-btn"},[e("a",{staticClass:"btn btn-success formbtn widthhalf",attrs:{href:"javascript:;",title:"","data-toggle-tooltip":"tooltip","data-original-title":"Import from excel file"}},[e("i",{staticClass:"fa fa-save pr-2"}),t._v("Submit")]),t._v("   ")])])])])])])}],n={components:{},data(){return{}},async created(){},methods:{}},c=n,p=e("2877"),d=Object(p["a"])(c,l,r,!1,null,null,null),u=d.exports,C=e("9769"),m=e("fc8b"),g=e.n(m),v={components:{ImportProduct:u,ColourPicker:g.a},data:function(){return{item:{Colocode:""},isLoading:!1,attachmentName:"",filepath:"",CategoryTypedata:[],applicationuser:[],ExcelListData:[],colour:""}},methods:{pickerColorChange(t,a){a.Colocode=t},setFile:function(t){this.attachmentName=t.target.files[0].name,this.file=t.target.files[0],this.excelFileName=t.target.files[0].name},Clear:function(){this.attachmentName=""},BackTolist:function(){var t=this;t.$router.push({name:"CategoryListing"})},onCancel:function(){var t=this;t.$router.push({name:"CategoryListing"})},UploadImportCategoryFile(){var t=this;if(t.$emit("ImportProduct"),""!=$("#flAvatar").val()){var a=$("#flAvatar").val().split("\\").pop(),e=".xls,.xlsx",i=a.replace(/^.*\./,"");e.includes(i)?t.confirmR(t.$t("bulkImportConfirmationMsg"),!0,t.$t("Delete")+"  "+t.$t("REPORT_ID"),(function(){const a=new FormData;a.append("file",t.file),t.isLoading=!0,C["a"].ImportCategorySamplePost(a).then((function(a){t.isLoading=!1;var e=a.data;0==e.Status?(t.filepath=e.Msg,t.ShowImportProduct=""!=t.filepath,t.ImportProductType()):t.ShowAlert(e.Msg,"warning",!0,t.$t("Alert"))})),t.isLoading=!1})):t.ShowAlert(t.$t("InvalidSampleFileUploadMsg",[a,e]),"warning",!0,t.$t("Alert"))}else t.ShowAlert(t.$t("PleaseUploadExcelFile"),"warning",!0,t.$t("Alert"))},ImportProductType:function(){var t=this;t.isLoading=!0;var a=`filepath=${t.filepath}&typeName='ProductType'`;C["a"].BulkUploadCategoryType(a).then(a=>{if(null!=a.data){t.CategoryTypedata=a.data,t.CategoryTypedata.forEach(t=>{t.colour="",null!=t.Colocode&&(t.colour=t.Colocode)}),console.log("dfguy",a.data);var e=[];for(let a=0;a<t.CategoryTypedata.length;a++)e.push(t.CategoryTypedata[a].ApplicationWebsite);t.applicationuser=e,console.log("ddsfguy",t.applicationuser),t.isLoading=!1}else t.ShowAlert(t.$t("InValidFileUpload"),"warning",t.$t("Alert"))}),t.isLoading=!1},SubmitData(){var t=this;t.isLoading=!0;const a=Object(o["ref"])([]);for(const i of t.CategoryTypedata){const t={CategoryName:i.CategoryName,ApplicationWebsite:i.ApplicationWebsite,Categorycode:i.Categorycode,Colocode:i.Colocode,CompanyID:i.CompanyID,UserID:i.UserID,batchid:i.batchid};a.value.push(t)}var e=JSON.stringify(a.value);C["a"].CategoryTypeBulkUploadPost(e).then(a=>{if(1==a.data.status){var e=a.data.msg;t.ShowAlert(t.$t(e),"success",t.$t("Alert"))}else if(0==a.data.status){var i=a.data.category,s=a.data.apllication,o=t.$t("Category Name: ")+i+t.$t("Application Name: ")+s;t.ShowAlert(o+" - "+a.data.msg,t.$t("Alert"))}}),t.isLoading=!1}}},h=v,f=(e("742b"),Object(p["a"])(h,i,s,!1,null,null,null));a["default"]=f.exports},"742b":function(t,a,e){"use strict";e("c462")},"94a3":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".enlarged-textarea{width:500px;height:50px}.colorpick{position:absolute;right:19px;top:46%;width:auto!important;height:28px;z-index:1}",""]),t.exports=a},c462:function(t,a,e){var i=e("94a3");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=e("499e").default;s("18ee78f8",i,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=chunk-303fb24c.js.map