(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ac86b88"],{1001:function(a,t,e){"use strict";e("86aa")},"279e":function(a,t,e){var o=e("24fb");t=o(!1),t.push([a.i,"@import url(https://cdn.boldreports.com/4.2.61/content/material/bold.reports.all.min.css);"]),t.push([a.i,"@import url(https://cdn.boldreports.com/external/jquery-1.10.2.min.js);"]),t.push([a.i,"@import url(https://cdn.boldreports.com/4.2.61/scripts/common/ej2-base.min.js);"]),t.push([a.i,"@import url(https://cdn.boldreports.com/4.2.61/scripts/common/ej2-data.min.js);"]),t.push([a.i,"@import url(https://cdn.boldreports.com/4.2.61/scripts/common/ej2-pdf-export.min.js);"]),t.push([a.i,"@import url(https://cdn.boldreports.com/4.2.61/scripts/common/ej2-svg-base.min.js);"]),t.push([a.i,"@import url(https://cdn.boldreports.com/4.2.61/scripts/data-visualization/ej2-lineargauge.min.js);"]),t.push([a.i,"@import url(https://cdn.boldreports.com/4.2.61/scripts/data-visualization/ej2-circulargauge.min.js);"]),t.push([a.i,"@import url(https://cdn.boldreports.com/4.2.61/scripts/data-visualization/ej2-maps.min.js);"]),t.push([a.i,"@import url(https://cdn.boldreports.com/4.2.61/scripts/common/bold.reports.common.min.js);"]),t.push([a.i,"@import url(https://cdn.boldreports.com/4.2.61/scripts/common/bold.reports.widgets.min.js);"]),t.push([a.i,"@import url(https://cdn.boldreports.com/4.2.61/scripts/data-visualization/ej.chart.min.js);"]),t.push([a.i,"@import url(https://cdn.boldreports.com/4.2.61/scripts/bold.report-viewer.min.js);"]),t.push([a.i,"",""]),a.exports=t},"5c74":function(a,t,e){var o=e("24fb");t=o(!1),t.push([a.i,".vue-treeselect__control{border:1px solid rgba(16,14,14,.4196078431372549)!important}.input-group .w-100 .d-block{position:absolute;margin-top:37px;margin-left:10px}",""]),a.exports=t},"86aa":function(a,t,e){var o=e("5c74");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[a.i,o,""]]),o.locals&&(a.exports=o.locals);var r=e("499e").default;r("62070814",o,!0,{sourceMap:!1,shadowMode:!1})},9359:function(a,t,e){"use strict";e("b57b")},b57b:function(a,t,e){var o=e("279e");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[a.i,o,""]]),o.locals&&(a.exports=o.locals);var r=e("499e").default;r("11c4a9d6",o,!0,{sourceMap:!1,shadowMode:!1})},f7a2:function(a,t,e){"use strict";e.r(t);var o=function(){var a=this,t=a._self._c;return t("div",{staticClass:"padding-t_10",attrs:{id:"reportstabsdata"}},[t("div",{staticClass:"left-menu-tab new_tab"},[t("div",{staticClass:"col-md-12 p-0"},[t("div",{staticClass:"theme-primary partition"},[t("span",{staticClass:"p-name text-white"},[a._v(a._s(a.$t("ProductReport")))])])]),t("div",{staticClass:"pt-2 mb-1 w-100 d-none d-lg-block"},[t("div",{staticClass:"input-group customsearchbox"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.searchQuery,expression:"searchQuery"}],staticClass:"form-control searchcustomfilter border-right-0",attrs:{type:"text",maxlength:"50",placeholder:a.Search,autocomplete:"off"},domProps:{value:a.searchQuery},on:{input:function(t){t.target.composing||(a.searchQuery=t.target.value)}}}),a._m(0)])]),t("div",{staticClass:"mt-2",staticStyle:{"max-height":"700px"},attrs:{id:"divscrollsetuptabs"}},[t("ul",{staticClass:"nav nav-pills flex-column left-tab responivecustomtab lefttabiconfix lefttabflexible",attrs:{id:"upper",role:"tablist"}},a._l(a.filteredTabs,(function(e,o){return t("li",{key:o},[t("a",{staticClass:"nav-link left-menu",class:{active:a.activeKey===e.index},attrs:{"data-toggle":"#"+e.id},on:{click:function(t){return a.activateTab(e.index)}}},[t("i",{class:e.icon,attrs:{"aria-hidden":"true"}}),a._v("  "+a._s(a.$t(e.name))+" ")])])})),0)])]),t("div",{staticClass:"right-content"},[t("div",{staticClass:"col-md-12 p-0"},[t("div",{staticClass:"theme-primary partition p-actions-expand",staticStyle:{overflow:"visible"}},[t("span",{staticClass:"p-name text-white",attrs:{id:"spnreporttext"}},[a._v(a._s(this.$t(a.activeTabName)))]),t("span",{staticClass:"p-actions float-right"},[t("a",{staticClass:"p-action-btn text-white",staticStyle:{display:"none"},attrs:{href:"javascript:;",id:"ancshowmorefilter",title:a.$t("Show")+" "+a.$t("More")+" "+a.$t("Filter")}},[t("i",{staticClass:"fa fa-filter",attrs:{"aria-hidden":"true"}}),t("br"),a._v(a._s(a.$t("Show"))+" "+a._s(a.$t("More"))+" "+a._s(a.$t("Filter")))])]),t("span",{staticClass:"p-actions float-right p-2",staticStyle:{display:"none"},attrs:{id:"showDaterange"}}),a._m(1)])]),t("div",{staticClass:"col-md-12 p-0"},[t("div",{staticClass:"tab-content",attrs:{id:"myTabContent"}},[a._m(2),0==a.activeKey?t("div",{staticClass:"tab-pane",class:{"active show":0==a.activeKey},attrs:{id:"ProductAssignmentReport"}},[t("ProductAssignmentReports")],1):a._e(),1==a.activeKey?t("div",{staticClass:"tab-pane",class:{"active show":1==a.activeKey},attrs:{id:"AuditLogReport"}},[t("AuditLogReport")],1):a._e(),2==a.activeKey?t("div",{staticClass:"tab-pane",class:{"active show":2==a.activeKey},attrs:{id:"ProductBarcodeReport"}},[t("ProductBarcodeReport")],1):a._e(),3==a.activeKey?t("div",{staticClass:"tab-pane",class:{"active show":3==a.activeKey},attrs:{id:"ItemLogHistoryReport"}},[t("ItemLogHistoryReport")],1):a._e(),4==a.activeKey?t("div",{staticClass:"tab-pane",class:{"active show":4==a.activeKey},attrs:{id:"ProductCountReport"}},[t("ProductCountReport")],1):a._e(),5==a.activeKey?t("div",{staticClass:"tab-pane",class:{"active show":5==a.activeKey},attrs:{id:"ProductReport"}},[t("ProductReport")],1):a._e()])])])])},r=[function(){var a=this,t=a._self._c;return t("div",{staticClass:"input-group-append"},[t("span",{staticClass:"input-group-text bg-transparent bg-white border-left-0"},[t("i",{staticClass:"fa fa-search"})])])},function(){var a=this,t=a._self._c;return t("span",{staticClass:"collapse-head-btns"},[t("a",{staticClass:"collapse-btns",attrs:{href:"javascript:;"}},[t("i",{staticClass:"fa fa-angle-up text-white"})])])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"expand-list"},[t("a",{staticClass:"expand-list-btn justify-content-center align-items-center",attrs:{href:"javascript:;"}},[t("i",{staticClass:"icon-solid arrow-solid-left text-white",staticStyle:{"font-size":"9pt"}})])])}],n=function(){var a=this,t=a._self._c;return t("div",[a.DataLoaded?t("dynamic-form",{attrs:{lang:"en",buttons:a.buttons,schema:a.FormSchema},on:{OnSubmit:a.onSubmit}}):a._e(),t("div",{staticClass:"row placeholder"},[t("div",{staticClass:"col-md-12 p-0"},[a.parameter.length>0?t("ReportViewer",{attrs:{parameter:a.parameter,reportPath:a.reportPath}}):a._e()],1)])],1)},i=[],l=(e("14d9"),e("1115")),s=function(){var a=this;a._self._c;return a._m(0)},c=[function(){var a=this,t=a._self._c;return t("div",{staticStyle:{height:"600px"}},[t("div",{staticStyle:{width:"100%","min-height":"650px","margin-bottom":"0%",height:"auto"},attrs:{id:"viewer"}})])}],u=(e("240d"),{props:{reportPath:null,parameter:null},data:function(){return{Token:null}},created:function(){this.Token=this.GetUserInfo.Token},mounted(){var a=this;setTimeout((function(){$("#viewer").boldReportViewer({reportServiceUrl:"https://newcrmapi.talygen.com/api/ReportViewer",reportPath:a.reportPath,processingMode:"Remote",parameters:a.parameter,reportServerUrl:"http://172.22.23.102/ReportServer",ajaxBeforeLoad:a.setReportToken})}),2e3)},methods:{setReportToken:function(a){a.headers.push({Key:"content-type",Value:"application/json;charset=UTF-8"}),a.headers.push({Key:"Authorization",Value:"Bearer "+this.Token})}}}),d=u,m=(e("9359"),e("2877")),p=Object(m["a"])(d,s,c,!1,null,null,null),h=p.exports,v={components:{ReportViewer:h},data(){return{IsuuedArray:[],reportPath:null,parameter:[],FindalLocationArray:[],FormSchema:[{layoutType:"triple",Data:[{astype:"TreeSelectField",label:this.$t("Location"),name:"Location",value:null,placeholder:"Select Location",config:{options:[]},validationRules:{required:!0,max:250}},{astype:"SelectField",label:this.$t("ProductType"),name:"ProductType",value:"",placeholder:"",config:{options:[],onChange:this.onChangeDropdown}},{astype:"MultiSelectField",label:this.$t("ProductName"),name:"Product Name",value:"",placeholder:"",mode:"tag",config:{options:[]}},{astype:"SelectField",label:this.$t("Status"),name:"Status",value:"",placeholder:"",config:{options:[{name:"Not Returned",value:"0"},{name:"Returned",value:"1"}],onChange:()=>{}}},{astype:"SelectField",label:this.$t("IssuedTo"),name:"IssuedTo",value:"",placeholder:"",config:{options:[]}},{astype:"TextField",label:this.$t("IssuedBy"),name:"IssuedBy",value:"",placeholder:"",config:{}},{astype:"DateField",label:this.$t("IssueDate"),name:"IssueDate",value:"",placeholder:"10/12/2022 12:AM",config:{format:"M/D/YYYY"}},{astype:"DateField",label:this.$t("IssueDateEnd"),name:"IssueDateEnd",value:"",placeholder:"10/12/2022 12:AM",config:{format:"M/D/YYYY"}},{astype:"DateField",label:this.$t("ReturnDate"),name:"ReturnDate",value:"",placeholder:"10/12/2022 12:AM",config:{format:"M/D/YYYY"}},{astype:"DateField",label:this.$t("ReturnDateEnd"),name:"ReturnDateEnd",value:"",placeholder:"10/12/2022 12:AM",config:{format:"M/D/YYYY"}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-search pr-2'></i>Search"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Clear all",onClick:this.ClearAll}],DataLoaded:0}},created:async function(){var a=this;await a.GetLocationByCompanyId(),await a.BindItemTypeByUserId(),await a.GetIssuedDetails(),a.DataLoaded=1},methods:{GetLocationByCompanyId:async function(){var a=this,t="reqForm=";await l["a"].GetLocationByuserId(t).then(t=>{a.FindalLocationArray=[],t.data.data.forEach(e=>{var o=a.FindalLocationArray.filter((function(a){return a.COMPANY_LOCATION_ID==e.COMPANY_LOCATION_ID}));if(0==o.length&&null==e.PARENT_LOCATION_ID){let o=e.COMPANY_LOCATION_ID,r=a.getChildLocation(o,e,t.data.data);a.FindalLocationArray.push(r)}}),a.FormSchema[0].Data[0].config.options=a.FindalLocationArray})},getChildLocation:function(a,t,e){let o=this,r={};r={id:t.COMPANY_LOCATION_ID,label:t.LOCATION_NAME};let n=r;var i=e.filter((function(t){return t.PARENT_LOCATION_ID==a}));let l=[];return i.forEach(a=>{let t=a.COMPANY_LOCATION_ID;var n=l.filter((function(t){return t.COMPANY_LOCATION_ID==a.COMPANY_LOCATION_ID}));if(0==n.length){var i=e.filter((function(a){return a.PARENT_LOCATION_ID==t}));if(null!=i&&i.length>0){let r=o.getChildLocation(t,a,e);l.push(r)}else r={id:""+a.COMPANY_LOCATION_ID,label:""+a.LOCATION_NAME},l.push(r)}}),n.children=l,n},async BindItemTypeByUserId(){let a="type=&issueTo=&locationId=&requestType=ASSIGN&requestFrom=";var t=this;await l["a"].AssignGetAssetType(a).then(a=>{a.data.forEach((a,e)=>{t.FormSchema[0].Data[1].config.options.push({name:a.ASSETTYPE,value:a.ASSETID})})})},async onChangeDropdown(a){var t=this,e="assetTypeid="+a.target.value;await l["a"].GetAssetCatalogueType(e).then((function(a){a.data.forEach((a,e)=>{t.FormSchema[0].Data[2].config.options.push({name:a.NAME,value:a.ASSETID})})}))},async GetIssuedDetails(){var a=this;await l["a"].GetIssuedUser().then(t=>{a.IsuuedArray=t.data.result,a.IsuuedArray.forEach((t,e)=>{a.FormSchema[0].Data[4].config.options.push({name:t.text,value:t.value})})})},async onSubmit(a){var t=this;t.reportPath="",t.parameter=[];const e=t.FormSchema[0].Data[2].value.length>0?t.FormSchema[0].Data[2].value.map(a=>a.value):t.FormSchema[0].Data[2].value,o=e.length>1?e.join(","):e.length>0?e[0]:"";let r={reportName:"assetmanagementreport",Location:a.Location,AssetTypesIds:a.ProductType,CatalogueIds:o,StatusIds:a.Status,IssuedToUserIds:a.IssuedTo,IssuedByUserIds:a.IssuedBy,IsssuedFromDate:a.IssueDate,IsssuedToDate:a.IssueDateEnd,ReturnFromDate:a.ReturnDate,ReturnToDate:a.ReturnDateEnd};await l["a"].ReportMain(r).then((function(a){console.log(a),t.reportPath=a.data.reportpath,t.parameter=a.data.parameters}))},ClearAll:function(){var a=this;a.FormSchema[0].Data[0].value=null,a.FormSchema[0].Data[1].value="",a.FormSchema[0].Data[2].value="",a.FormSchema[0].Data[3].value="",a.FormSchema[0].Data[4].value="",a.FormSchema[0].Data[5].value="",a.FormSchema[0].Data[6].value="",a.FormSchema[0].Data[7].value="",a.FormSchema[0].Data[8].value="",a.FormSchema[0].Data[9].value="",a.parameter=[]}}},f=v,A=(e("1001"),Object(m["a"])(f,n,i,!1,null,null,null)),y=A.exports,D=function(){var a=this,t=a._self._c;return t("div",[a.DataLoaded?t("dynamic-form",{attrs:{lang:"en",buttons:a.buttons,schema:a.FormSchema},on:{OnSubmit:a.onSubmit}}):a._e(),t("div",{staticClass:"row placeholder"},[t("div",{staticClass:"col-md-12 p-0"},[a.parameter.length>0?t("ReportViewer",{attrs:{parameter:a.parameter,reportPath:a.reportPath}}):a._e()],1)])],1)},C=[],g={components:{ReportViewer:h},data(){return{reportPath:null,parameter:[],FindalLocationArray:[],FormSchema:[{layoutType:"triple",Data:[{astype:"TreeSelectField",label:this.$t("Location"),name:"Location",value:null,placeholder:"Select Location",validationRules:{required:!0,max:250},config:{options:[]}},{astype:"MultiSelectField",label:this.$t("ProductName"),name:"Product Name",value:"",placeholder:"",mode:"tag",config:{options:[],onChange:this.onChangeDropdown}},{astype:"SelectField",label:this.$t("UniqueName"),name:"Unique Name",value:"",placeholder:"",config:{options:[]}},{astype:"SelectField",label:this.$t("Type"),name:"Type ",value:"",placeholder:"",config:{options:[{name:"Calibration",value:"CALIBRATION"},{name:"Audit",value:"AUDIT"},{name:"Image Capturing",value:"IMAGEHISTORY"}]}},{astype:"DateField",label:this.$t("Date"),name:"Date",value:"",placeholder:"10/12/2022 12:AM",config:{format:"M/D/YYYY"}},{astype:"DateField",label:this.$t("DateEnd"),name:"Date End",value:"",placeholder:"10/12/2022 12:AM",config:{format:"M/D/YYYY"}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-search pr-2'></i>Search"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Clear all",onClick:this.ClearAll}],DataLoaded:0}},created:async function(){var a=this;await a.GetLocationByCompanyId(),await a.getProductName(),a.DataLoaded=1},methods:{GetLocationByCompanyId:async function(){var a=this,t="reqForm=";await l["a"].GetLocationByuserId(t).then(t=>{a.FindalLocationArray=[],t.data.data.forEach(e=>{var o=a.FindalLocationArray.filter((function(a){return a.COMPANY_LOCATION_ID==e.COMPANY_LOCATION_ID}));if(0==o.length&&null==e.PARENT_LOCATION_ID){let o=e.COMPANY_LOCATION_ID,r=a.getChildLocation(o,e,t.data.data);a.FindalLocationArray.push(r)}}),a.FormSchema[0].Data[0].config.options=a.FindalLocationArray})},getChildLocation:function(a,t,e){let o=this,r={};r={id:t.COMPANY_LOCATION_ID,label:t.LOCATION_NAME};let n=r;var i=e.filter((function(t){return t.PARENT_LOCATION_ID==a}));let l=[];return i.forEach(a=>{let t=a.COMPANY_LOCATION_ID;var n=l.filter((function(t){return t.COMPANY_LOCATION_ID==a.COMPANY_LOCATION_ID}));if(0==n.length){var i=e.filter((function(a){return a.PARENT_LOCATION_ID==t}));if(null!=i&&i.length>0){let r=o.getChildLocation(t,a,e);l.push(r)}else r={id:""+a.COMPANY_LOCATION_ID,label:""+a.LOCATION_NAME},l.push(r)}}),n.children=l,n},async getProductName(){let a="type=&issueTo=&locationId=&requestType=ASSIGN&requestFrom=";var t=this;await l["a"].GetAssetCatalogueType(a).then(a=>{a.data.forEach((a,e)=>{t.FormSchema[0].Data[1].config.options.push({name:a.NAME,value:a.ASSETID})})})},async onChangeDropdown(a){var t=this,e="catalogId="+a.target.value;t.FormSchema[0].Data[2].config.options=[],await l["a"].GetRelatedCatalogues(e).then((function(a){a.data.forEach((a,e)=>{t.FormSchema[0].Data[2].config.options.push({name:a.text,value:a.value})})}))},async onSubmit(){var a=this;const t=a.FormSchema[0].Data[1].value.length>0?a.FormSchema[0].Data[1].value.map(a=>a.value):a.FormSchema[0].Data[1].value,e=t.length>1?t.join(","):t.length>0?t[0]:"";let o={reportName:"assetauditlogreport",Location:a.FormSchema[0].Data[0].value,CatalogueIds:e,UniqueNameAuditLog:a.FormSchema[0].Data[2].value,AssetCalibrationAuditImageCapture:a.FormSchema[0].Data[3].value,dateFrom:a.FormSchema[0].Data[4].value,dateTo:a.FormSchema[0].Data[5].value};await l["a"].ReportMain(o).then((function(t){console.log(t),a.reportPath=t.data.reportpath,a.parameter=t.data.parameters}))},ClearAll:function(){var a=this;a.FormSchema[0].Data[0].value=null,a.FormSchema[0].Data[1].value="",a.FormSchema[0].Data[2].value="",a.FormSchema[0].Data[3].value="",a.FormSchema[0].Data[4].value="",a.FormSchema[0].Data[5].value="",a.parameter=[]}}},I=g,S=Object(m["a"])(I,D,C,!1,null,null,null),O=S.exports,b=function(){var a=this,t=a._self._c;return t("div",[a.DataLoaded?t("dynamic-form",{attrs:{lang:"en",buttons:a.buttons,schema:a.FormSchema},on:{OnSubmit:a.onSubmit}}):a._e(),t("div",{staticClass:"row placeholder"},[t("div",{staticClass:"col-md-12 p-0"},[a.parameter.length>0?t("ReportViewer",{attrs:{parameter:a.parameter,reportPath:a.reportPath}}):a._e()],1)])],1)},_=[],L={components:{ReportViewer:h},data(){return{reportPath:null,parameter:[],FindalLocationArray:[],FormSchema:[{layoutType:"triple",Data:[{astype:"TreeSelectField",label:this.$t("Location"),name:"Location",value:null,placeholder:"Select Location",validationRules:{required:!0,max:250},config:{options:[],onChange:()=>{}}},{astype:"MultiSelectField",label:this.$t("ProductName"),name:"Product Name",value:"",placeholder:"",mode:"tag",config:{options:[],onChange:this.onChangeDropdown}},{astype:"SelectField",label:this.$t("UniqueName"),name:"Unique Name",value:"",placeholder:"",config:{options:[]}},{astype:"SelectField",label:this.$t("Status"),name:"Status ",value:"",placeholder:"",config:{options:[{name:"Active",value:1001},{name:"In Stock",value:1002},{name:"In Use",value:1003},{name:"Inactive",value:1004},{name:"Retired",value:1005}]}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-search pr-2'></i>Search"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Clear all",onClick:this.ClearAll}],DataLoaded:0}},created:async function(){var a=this;await a.GetLocationByCompanyId(),await a.getProductName(),a.DataLoaded=1},methods:{GetLocationByCompanyId:async function(){var a=this,t="reqForm=";await l["a"].GetLocationByuserId(t).then(t=>{a.FindalLocationArray=[],t.data.data.forEach(e=>{var o=a.FindalLocationArray.filter((function(a){return a.COMPANY_LOCATION_ID==e.COMPANY_LOCATION_ID}));if(0==o.length&&null==e.PARENT_LOCATION_ID){let o=e.COMPANY_LOCATION_ID,r=a.getChildLocation(o,e,t.data.data);a.FindalLocationArray.push(r)}}),a.FormSchema[0].Data[0].config.options=a.FindalLocationArray})},getChildLocation:function(a,t,e){let o=this,r={};r={id:t.COMPANY_LOCATION_ID,label:t.LOCATION_NAME};let n=r;var i=e.filter((function(t){return t.PARENT_LOCATION_ID==a}));let l=[];return i.forEach(a=>{let t=a.COMPANY_LOCATION_ID;var n=l.filter((function(t){return t.COMPANY_LOCATION_ID==a.COMPANY_LOCATION_ID}));if(0==n.length){var i=e.filter((function(a){return a.PARENT_LOCATION_ID==t}));if(null!=i&&i.length>0){let r=o.getChildLocation(t,a,e);l.push(r)}else r={id:""+a.COMPANY_LOCATION_ID,label:""+a.LOCATION_NAME},l.push(r)}}),n.children=l,n},async getProductName(){let a="type=&issueTo=&locationId=&requestType=ASSIGN&requestFrom=";var t=this;await l["a"].GetAssetCatalogueType(a).then(a=>{a.data.forEach((a,e)=>{t.FormSchema[0].Data[1].config.options.push({name:a.NAME,value:a.ASSETID})})})},async onChangeDropdown(a){var t=this,e="catalogId="+a.target.value;t.FormSchema[0].Data[2].config.options=[],await l["a"].GetRelatedCatalogues(e).then((function(a){a.data.forEach((a,e)=>{t.FormSchema[0].Data[2].config.options.push({name:a.text,value:a.value})})}))},async onSubmit(){var a=this;const t=a.FormSchema[0].Data[1].value.length>0?a.FormSchema[0].Data[1].value.map(a=>a.value):a.FormSchema[0].Data[1].value,e=t.length>1?t.join(","):t.length>0?t[0]:"";let o={reportName:"assetbarcodereport",Location:a.FormSchema[0].Data[0].value,AssetCatalogueAssetBarcodes:e,UniqueNameAssetBarcodes:a.FormSchema[0].Data[2].value,StatusAssetBarcodes:a.FormSchema[0].Data[3].value};await l["a"].ReportMain(o).then((function(t){a.reportPath=t.data.reportpath,a.parameter=t.data.parameters}))},ClearAll:function(){var a=this;a.FormSchema[0].Data[0].value=null,a.FormSchema[0].Data[1].value="",a.FormSchema[0].Data[2].value="",a.FormSchema[0].Data[3].value="",a.parameter=[]}}},N=L,T=Object(m["a"])(N,b,_,!1,null,null,null),F=T.exports,P=function(){var a=this,t=a._self._c;return t("div",[a.DataLoaded?t("dynamic-form",{attrs:{lang:"en",buttons:a.buttons,schema:a.FormSchema},on:{OnSubmit:a.onSubmit}}):a._e(),t("div",{staticClass:"row placeholder"},[t("div",{staticClass:"col-md-12 p-0"},[a.parameter.length>0?t("ReportViewer",{attrs:{parameter:a.parameter,reportPath:a.reportPath}}):a._e()],1)])],1)},M=[],w={components:{ReportViewer:h},data(){return{reportPath:null,parameter:[],ItemLogStatusData:[],FindalLocationArray:[],FormSchema:[{layoutType:"triple",Data:[{astype:"TreeSelectField",label:this.$t("Location"),name:"Location",value:null,placeholder:"Select Location",validationRules:{required:!0,max:250},config:{options:[],onChange:()=>{}}},{astype:"MultiSelectField",label:this.$t("ProductName"),name:"Product Name",value:"",placeholder:"",mode:"tag",config:{options:[],onChange:this.onChangeDropdown}},{astype:"SelectField",label:this.$t("UniqueName"),name:"Unique Name",value:"",placeholder:"",config:{options:[],onChange:()=>{}}},{astype:"SelectField",label:this.$t("Status"),name:"Status",value:"",placeholder:"",config:{options:[]}},{astype:"DateField",label:this.$t("Date"),name:"Date",value:"",placeholder:"10/12/2022 12:AM",config:{format:"M/D/YYYY"}},{astype:"DateField",label:this.$t("DateEnd"),name:"Date End",value:"",placeholder:"10/12/2022 12:AM",config:{format:"M/D/YYYY"}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-search pr-2'></i>Search"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Clear all",onClick:this.ClearAll}],DataLoaded:0}},created:async function(){var a=this;await a.GetLocationByCompanyId(),await a.getProductName(),await a.GetItemLogStatus(),a.DataLoaded=1},methods:{GetLocationByCompanyId:async function(){var a=this,t="reqForm=";await l["a"].GetLocationByuserId(t).then(t=>{a.FindalLocationArray=[],t.data.data.forEach(e=>{var o=a.FindalLocationArray.filter((function(a){return a.COMPANY_LOCATION_ID==e.COMPANY_LOCATION_ID}));if(0==o.length&&null==e.PARENT_LOCATION_ID){let o=e.COMPANY_LOCATION_ID,r=a.getChildLocation(o,e,t.data.data);a.FindalLocationArray.push(r)}}),a.FormSchema[0].Data[0].config.options=a.FindalLocationArray})},getChildLocation:function(a,t,e){let o=this,r={};r={id:t.COMPANY_LOCATION_ID,label:t.LOCATION_NAME};let n=r;var i=e.filter((function(t){return t.PARENT_LOCATION_ID==a}));let l=[];return i.forEach(a=>{let t=a.COMPANY_LOCATION_ID;var n=l.filter((function(t){return t.COMPANY_LOCATION_ID==a.COMPANY_LOCATION_ID}));if(0==n.length){var i=e.filter((function(a){return a.PARENT_LOCATION_ID==t}));if(null!=i&&i.length>0){let r=o.getChildLocation(t,a,e);l.push(r)}else r={id:""+a.COMPANY_LOCATION_ID,label:""+a.LOCATION_NAME},l.push(r)}}),n.children=l,n},async getProductName(){let a="type=&issueTo=&locationId=&requestType=ASSIGN&requestFrom=";var t=this;await l["a"].GetAssetCatalogueType(a).then(a=>{a.data.forEach((a,e)=>{t.FormSchema[0].Data[1].config.options.push({name:a.NAME,value:a.ASSETID})})})},async onChangeDropdown(a){var t=this,e="catalogId="+a.target.value;t.FormSchema[0].Data[2].config.options=[],await l["a"].GetRelatedCatalogues(e).then((function(a){a.data.forEach((a,e)=>{t.FormSchema[0].Data[2].config.options.push({name:a.text,value:a.value})})}))},async GetItemLogStatus(){var a=this;await l["a"].GetUserStatusitemlog().then(t=>{a.ItemLogStatusData=t.data,a.ItemLogStatusData.forEach((t,e)=>{a.FormSchema[0].Data[3].config.options.push({name:t.text,value:t.value})})})},async onSubmit(){var a=this;const t=a.FormSchema[0].Data[1].value.length>0?a.FormSchema[0].Data[1].value.map(a=>a.value):a.FormSchema[0].Data[1].value,e=t.length>1?t.join(","):t.length>0?t[0]:"";let o={reportName:"itemloghistoryreport",Location:a.FormSchema[0].Data[0].value,AssetCatalogueLogHistory:e,UniqueNameLogHistory:a.FormSchema[0].Data[2].value,AssetOperationCode:a.FormSchema[0].Data[3].value,dateFrom:a.FormSchema[0].Data[4].value,dateTo:a.FormSchema[0].Data[5].value};JSON.stringify(o);await l["a"].ReportMain(o).then((function(t){console.log(t),a.reportPath=t.data.reportpath,a.parameter=t.data.parameters}))},ClearAll:function(){var a=this;a.FormSchema[0].Data[0].value=null,a.FormSchema[0].Data[1].value="",a.FormSchema[0].Data[2].value="",a.FormSchema[0].Data[3].value="",a.FormSchema[0].Data[4].value="",a.FormSchema[0].Data[5].value="",a.parameter=[]}}},Y=w,R=Object(m["a"])(Y,P,M,!1,null,null,null),E=R.exports,x=function(){var a=this,t=a._self._c;return t("div",[a.DataLoaded?t("dynamic-form",{attrs:{lang:"en",buttons:a.buttons,schema:a.FormSchema},on:{OnSubmit:a.onSubmit}}):a._e(),t("div",{staticClass:"row placeholder"},[t("div",{staticClass:"col-md-12 p-0"},[a.parameter.length>0?t("ReportViewer",{attrs:{parameter:a.parameter,reportPath:a.reportPath}}):a._e()],1)])],1)},B=[],G={components:{ReportViewer:h},data(){return{reportPath:null,parameter:[],FindalLocationArray:[],FormSchema:[{layoutType:"triple",Data:[{astype:"TreeSelectField",label:this.$t("Location"),name:"Location",value:null,placeholder:"Select Location",validationRules:{required:!0,max:250},config:{options:[],onChange:()=>{}}},{astype:"SelectField",label:this.$t("ProductType"),name:"Product Type",value:"",placeholder:"",config:{options:[]}},{astype:"SelectField",label:this.$t("Status"),name:"Status",value:"",placeholder:"",config:{options:[{name:"Active",value:1001},{name:"InActive",value:1002},{name:"On Hold  ",value:1003},{name:"Reserved",value:1004},{name:"Retired",value:1005},{name:"Sold",value:1006}],onChange:()=>{}}},{astype:"DateField",label:this.$t("DeployDate"),name:"Deploy Date",value:"",placeholder:"10/12/2022 12:AM",config:{format:"M/D/YYYY"}},{astype:"DateField",label:this.$t("DeployDateEnd"),name:"Date Date End",value:"",placeholder:"10/12/2022 12:AM",config:{format:"M/D/YYYY"}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-search pr-2'></i>Search"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Clear all",onClick:this.ClearAll}],DataLoaded:0}},created:async function(){var a=this;await a.GetLocationByCompanyId(),await a.BindItemTypeByUserId(),a.DataLoaded=1},methods:{GetLocationByCompanyId:async function(){var a=this,t="reqForm=";await l["a"].GetLocationByuserId(t).then(t=>{a.FindalLocationArray=[],t.data.data.forEach(e=>{var o=a.FindalLocationArray.filter((function(a){return a.COMPANY_LOCATION_ID==e.COMPANY_LOCATION_ID}));if(0==o.length&&null==e.PARENT_LOCATION_ID){let o=e.COMPANY_LOCATION_ID,r=a.getChildLocation(o,e,t.data.data);a.FindalLocationArray.push(r)}}),a.FormSchema[0].Data[0].config.options=a.FindalLocationArray})},getChildLocation:function(a,t,e){let o=this,r={};r={id:t.COMPANY_LOCATION_ID,label:t.LOCATION_NAME};let n=r;var i=e.filter((function(t){return t.PARENT_LOCATION_ID==a}));let l=[];return i.forEach(a=>{let t=a.COMPANY_LOCATION_ID;var n=l.filter((function(t){return t.COMPANY_LOCATION_ID==a.COMPANY_LOCATION_ID}));if(0==n.length){var i=e.filter((function(a){return a.PARENT_LOCATION_ID==t}));if(null!=i&&i.length>0){let r=o.getChildLocation(t,a,e);l.push(r)}else r={id:""+a.COMPANY_LOCATION_ID,label:""+a.LOCATION_NAME},l.push(r)}}),n.children=l,n},async BindItemTypeByUserId(){let a="type=&issueTo=&locationId=&requestType=ASSIGN&requestFrom=";var t=this;await l["a"].AssignGetAssetType(a).then(a=>{a.data.forEach((a,e)=>{t.FormSchema[0].Data[1].config.options.push({name:a.ASSETTYPE,value:a.ASSETID})})})},async onSubmit(){var a=this;let t={reportName:"assetcountreport",Location:a.FormSchema[0].Data[0].value,AssetTypesIds:a.FormSchema[0].Data[1].value,AssetStatus:a.FormSchema[0].Data[2].value,dateFrom:a.FormSchema[0].Data[3].value,dateTo:a.FormSchema[0].Data[4].value};await l["a"].ReportMain(t).then((function(t){console.log(t),a.reportPath=t.data.reportpath,a.parameter=t.data.parameters}))},ClearAll:function(){var a=this;a.FormSchema[0].Data[0].value=null,a.FormSchema[0].Data[1].value="",a.FormSchema[0].Data[2].value="",a.FormSchema[0].Data[3].value="",a.FormSchema[0].Data[4].value="",a.parameter=[]}}},j=G,q=Object(m["a"])(j,x,B,!1,null,null,null),U=q.exports,k=function(){var a=this,t=a._self._c;return t("div",[a.DataLoaded?t("dynamic-form",{attrs:{lang:"en",buttons:a.buttons,schema:a.FormSchema},on:{OnSubmit:a.onSubmit}}):a._e(),t("div",{staticClass:"row placeholder"},[t("div",{staticClass:"col-md-12 p-0"},[a.parameter.length>0?t("ReportViewer",{attrs:{parameter:a.parameter,reportPath:a.reportPath}}):a._e()],1)])],1)},K=[],V={components:{ReportViewer:h},data(){return{reportPath:null,parameter:[],FindalLocationArray:[],FormSchema:[{layoutType:"triple",Data:[{astype:"SelectField",label:this.$t("TagType"),name:"Tag Type",value:"",placeholder:"",validationRules:{required:!0,max:250},config:{options:[],onChange:()=>{}}},{astype:"SelectField",label:this.$t("ProductType"),name:"Product Type",value:"",placeholder:"",config:{options:[]}},{astype:"TreeSelectField",label:this.$t("Location"),name:"Location",value:null,placeholder:"Select Location",config:{options:[]}},{astype:"SelectField",label:this.$t("Status"),name:"Status ",value:"",placeholder:"",config:{options:[{name:"Active",value:1001},{name:"InActive",value:1002},{name:"On Hold  ",value:1003},{name:"Reserved",value:1004},{name:"Retired",value:1005},{name:"Sold",value:1006}],onChange:()=>{}}},{astype:"DateField",label:this.$t("DeployDate"),name:"Deploy Date",value:"",placeholder:"10/12/2022 12:AM",config:{format:"M/D/YYYY"}},{astype:"DateField",label:this.$t("DeployDateEnd"),name:"Date Date End",value:"",placeholder:"10/12/2022 12:AM",config:{format:"M/D/YYYY"}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-search pr-2'></i>Search"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Clear all",onClick:this.ClearAll}],DataLoaded:0}},created:async function(){var a=this;await a.GetLocationByCompanyId(),await a.BindItemTypeByUserId(),await a.GetTagsByModuleId(),a.DataLoaded=1},methods:{GetLocationByCompanyId:async function(){var a=this,t="reqForm=";await l["a"].GetLocationByuserId(t).then(t=>{a.FindalLocationArray=[],t.data.data.forEach(e=>{var o=a.FindalLocationArray.filter((function(a){return a.COMPANY_LOCATION_ID==e.COMPANY_LOCATION_ID}));if(0==o.length&&null==e.PARENT_LOCATION_ID){let o=e.COMPANY_LOCATION_ID,r=a.getChildLocation(o,e,t.data.data);a.FindalLocationArray.push(r)}}),a.FormSchema[0].Data[2].config.options=a.FindalLocationArray})},getChildLocation:function(a,t,e){let o=this,r={};r={id:t.COMPANY_LOCATION_ID,label:t.LOCATION_NAME};let n=r;var i=e.filter((function(t){return t.PARENT_LOCATION_ID==a}));let l=[];return i.forEach(a=>{let t=a.COMPANY_LOCATION_ID;var n=l.filter((function(t){return t.COMPANY_LOCATION_ID==a.COMPANY_LOCATION_ID}));if(0==n.length){var i=e.filter((function(a){return a.PARENT_LOCATION_ID==t}));if(null!=i&&i.length>0){let r=o.getChildLocation(t,a,e);l.push(r)}else r={id:""+a.COMPANY_LOCATION_ID,label:""+a.LOCATION_NAME},l.push(r)}}),n.children=l,n},async BindItemTypeByUserId(){let a="type=&issueTo=&locationId=&requestType=ASSIGN&requestFrom=";var t=this;await l["a"].AssignGetAssetType(a).then(a=>{a.data.forEach((a,e)=>{t.FormSchema[0].Data[1].config.options.push({name:a.ASSETTYPE,value:a.ASSETID})})})},async GetTagsByModuleId(){var a=this,t="modulename=Asset";await l["a"].GetTagsByModuleId(t).then((function(t){a.TagData=JSON.parse(t.data),a.TagData.data.forEach((t,e)=>{a.FormSchema[0].Data[0].config.options.push({name:t.TAG_NAME,value:""+t.TAG_ID})})}))},async onSubmit(){var a=this;let t={reportName:"productreport",TagTypes:a.FormSchema[0].Data[0].value,AssetTypesIds:a.FormSchema[0].Data[1].value,Location:a.FormSchema[0].Data[2].value,StatusIds:a.FormSchema[0].Data[3].value,dateFrom:a.FormSchema[0].Data[4].value,dateTo:a.FormSchema[0].Data[5].value};await l["a"].ReportMain(t).then((function(t){a.reportPath=t.data.reportpath,a.parameter=t.data.parameters}))},ClearAll:function(){var a=this;a.FormSchema[0].Data[0].value="",a.FormSchema[0].Data[1].value="",a.FormSchema[0].Data[2].value=null,a.FormSchema[0].Data[3].value="",a.FormSchema[0].Data[4].value="",a.FormSchema[0].Data[5].value="",a.parameter=[]}}},H=V,Q=Object(m["a"])(H,k,K,!1,null,null,null),z=Q.exports,J={components:{ProductAssignmentReports:y,AuditLogReport:O,ProductBarcodeReport:F,ItemLogHistoryReport:E,ProductCountReport:U,ProductReport:z},data(){return{activeKey:0,tabNames:["ProductAssignmentReport","AuditLogReport","ProductBarcodeReport","ItemLogHistoryReport","ProductCountReport","ProductReport"],searchQuery:""}},mounted(){this.activateTab(0)},computed:{filteredTabs(){if(!this.searchQuery)return this.tabNames.map((a,t)=>({name:a,index:t,icon:this.getTabIcon(a)}));const a=this.searchQuery.toLowerCase();return this.tabNames.map((a,t)=>({name:a,index:t,icon:this.getTabIcon(a)})).filter(t=>this.$t(t.name).toLowerCase().includes(a))},activeTabName(){return this.tabNames[this.activeKey]}},methods:{getTabIcon(a){switch(a){case"ProductAssignmentReport":return"fa fa-list";case"AuditLogReport":return"fa fa-list-alt";case"ProductBarcodeReport":return"fa fa-money";case"ItemLogHistoryReport":return"fa fa-file-text";case"ProductCountReport":return"fa fa-file-text";case"ProductReport":return"fa fa-file-text";default:return""}},activateTab(a){this.activeKey=a}}},W=J,X=Object(m["a"])(W,o,r,!1,null,null,null);t["default"]=X.exports}}]);
//# sourceMappingURL=chunk-7ac86b88.js.map