(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e5713"],{9501:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e._self._c;return t("section",[t("tg-list",{attrs:{IsShowAction:!1,listType:["List"],ModuleName:"Asset",SubModuleCode:"Asset",IdentityColumn:"assetCatalogueId",HeaderText:e.$t("DepreciationList"),ListData:e.DepreciationListData,HeaderData:e.Headers,widgets:e.widgets,callbackfunction:e.GetDepreciationList,HeaderButtons:e.listheaderbuttons,TotalRecords:e.TotalRecords,SearchFields:e.leftSearchFields,RenderRowActionMethod:e.renderActions,ListDataCallBackFunction:e.GetDepreciationList,LegendArray:e.LegendArray,SortExp:e.SortExp,SortBy:e.SortBy,NorecordfoundText:e.$t("NorecordfoundText")},on:{LeftsearchButtonClick:e.leftCommonSearch,PagerButtonClick:e.pagerMethod,HeaderButtonClick:e.commonHeaderButtonClick,ActionButtonClick:e.actionButtonClick,SortdataButtonClick:e.sortdata}})],1)},o=[],r=(a("14d9"),a("1115"));let n=[{title:"Back to list",iconClass:"fa fa-angle-double-left pr-2",callbackfunction:"BacktoList",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1}],s=[{fieldName:"Product Name",fieldType:"text",fieldIcon:"fa-user",paramName:"search",fieldSearchConditionName:[""],isSearch:!1,value:""},{fieldName:"Product Type",fieldType:"ddl-check",fieldIcon:"fa-server",paramName:"ProductTypeId",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]},{fieldName:"Location",fieldType:"ddl-multilevel",fieldIcon:"fa-file",paramName:"LocationId",fieldSearchConditionName:[""],isSearch:!1,value:null,listOptions:[]},{fieldName:"Depreciation Date",fieldType:"date-range",fieldIcon:"fa-server",paramName:"DepreciationDate ",fieldSearchConditionName:[""],isSearch:!1,datePickerConfig:{useCurrent:!0,showClear:!0,showClose:!0,allowInputToggle:!1,minDate:!0,maxDate:!0,widgetPositioning:{horizontal:"right",vertical:"bottom"}},secondDatePickerConfig:{useCurrent:!1,showClear:!0,showClose:!0,allowInputToggle:!1,minDate:!0,maxDate:!0,widgetPositioning:{horizontal:"right",vertical:"bottom"}}}];async function A(e,t,a){var i=e,o=[],n=[];if("Location"==a){var s="reqForm=";await r["a"].GetLocationByCompanyId(s).then((function(e){var t=JSON.parse(e.data).data;t.forEach(t=>{var a=o.filter((function(e){return e.COMPANY_LOCATION_ID==t.COMPANY_LOCATION_ID}));if(0==a.length&&null==t.PARENT_LOCATION_ID){let a=t.COMPANY_LOCATION_ID,i=A(a,t,JSON.parse(e.data).data);o.push(i)}}),i.leftSearchFields[2].listOptions=o}))}if("Product Type"==a){s="type=ITEMCODE&issueTo=&locationId=";r["a"].GetAssetTypeCustom(s).then((function(e){if("Product Type"==a){let t={};JSON.parse(e.data).forEach(e=>{t={name:e.ASSETTYPE,value:""+e.ASSETID},n.push(t)}),i.leftSearchFields[1].listOptions=n}}))}if("DepreciationDate"==a){s="modulename="+t;r["a"].GetTagsByModuleId(s).then((function(e){if("Depreciation Date"==a){let t={};JSON.parse(e.data).data.forEach(e=>{t={name:e.TAG_NAME,value:""+e.TAG_ID},TagData.push(t)}),i.leftSearchFields[3].listOptions=TagData}}))}function A(e,t,a){let i={};i={id:t.COMPANY_LOCATION_ID,label:t.LOCATION_NAME};let o=i;var r=a.filter((function(t){return t.PARENT_LOCATION_ID==e}));let n=[];return r.forEach(e=>{let t=e.COMPANY_LOCATION_ID;var o=n.filter((function(t){return t.COMPANY_LOCATION_ID==e.COMPANY_LOCATION_ID}));if(0==o.length){var r=a.filter((function(e){return e.PARENT_LOCATION_ID==t}));if(null!=r&&r.length>0){let i=A(t,e,a);n.push(i)}else i={id:""+e.COMPANY_LOCATION_ID,label:""+e.LOCATION_NAME},n.push(i)}}),o.children=n,o}}var l={buttons:n,leftsearchSchema:s,bindleftCommonSearchdropdown:A},c={name:"Depreciation",components:{},data(){return{leftSearchFields:l.leftsearchSchema,listheaderbuttons:l.buttons,LegendArray:[],noRecordForTab:!1,isLoading:!1,DepreciationListData:[],widgets:[],Headers:[{COLUMN_NAME:"itemTypeName",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Item Type",DISPLAY_ORDER:1},{COLUMN_NAME:"itemCode",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Item Code",DISPLAY_ORDER:2},{COLUMN_NAME:"itemName",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Item Name",DISPLAY_ORDER:3},{COLUMN_NAME:"uniqueName",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Product Name",DISPLAY_ORDER:4},{COLUMN_NAME:"locationName",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Location",DISPLAY_ORDER:5},{COLUMN_NAME:"usefulLife",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Useful Life In Year",DISPLAY_ORDER:6},{COLUMN_NAME:"percentageOfAssetLife",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Percentage Of Assets Life",DISPLAY_ORDER:7},{COLUMN_NAME:"depreciationMethodName",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Depreciation Rule",DISPLAY_ORDER:8},{COLUMN_NAME:"deploymentDate",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Install Date",DISPLAY_ORDER:9},{COLUMN_NAME:"quantityOpening",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Opening Quantity",DISPLAY_ORDER:10},{COLUMN_NAME:"quantityAddition",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Addition Quantity",DISPLAY_ORDER:11},{COLUMN_NAME:"QuantityDeletion",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Deletion Quantity",DISPLAY_ORDER:12},{COLUMN_NAME:"quantityClosing",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Closing Quantity",DISPLAY_ORDER:13},{COLUMN_NAME:"grossBlockOpening",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Opening",DISPLAY_ORDER:14},{COLUMN_NAME:"grossBlockAddition",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Addition",DISPLAY_ORDER:15},{COLUMN_NAME:"grossBlockDeletion",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Deletion",DISPLAY_ORDER:16},{COLUMN_NAME:"grossBlockClosing",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Closing",DISPLAY_ORDER:17},{COLUMN_NAME:"balanceValue",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Balance Value",DISPLAY_ORDER:18},{COLUMN_NAME:"depreciationUptoPreviousMonth",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Depreciation Upto PreviousMonth",DISPLAY_ORDER:19},{COLUMN_NAME:"depreciationOnYTD",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Accumulated Depricationon YTD",DISPLAY_ORDER:20},{COLUMN_NAME:"currentBookValue",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Current Book Value",DISPLAY_ORDER:21}],productName:"",LocationId:"",search:"",ProductTypeId:"",FromDate:"",ToDate:"",SortBy:"",SortExp:"",PageSize:10,PageNumber:1,TotalRecords:0,CurrentPage:1,TotalPages:0,privilegeParams:null,UserType:null}},created:async function(){var e=this;e.privilegeParams="controller=Asset&action=",await e.CheckPrivilege(),l.bindleftCommonSearchdropdown(e,"Asset","Product Type"),l.bindleftCommonSearchdropdown(e,"Asset","Location"),l.bindleftCommonSearchdropdown(e,"Asset","DepreciationDate"),e.UserType=e.GetUserInfo.UserType},methods:{CheckPrivilege(){var e=this;"CA"==e.UserType?r["a"].CheckPrivilege(e.privilegeParams+"Depreciation").then(t=>{t.data?e.GetDepreciationList():e.ShowAlert(e.$t("NotAuthorizedSection"),"failure",!0,"Alert")}):e.GetDepreciationList()},async GetDepreciationList(){var e=`productName=${this.productName}&searchCondition=${this.search}&fromDate=${this.FromDate}&toDate=${this.ToDate}&pageSize=${this.PageSize}&pageNum=${this.PageNumber}&sortBy=${this.SortBy}&sortExp=${this.SortExp}&location_id=${this.LocationId}&productTypeIds=${this.ProductTypeId}`;await r["a"].GetDepreciationList(e).then(e=>{null!=e.data&&(e.data.length>0?(this.DepreciationListData=e.data,this.TotalRecords=e.data[0].totalrecords,this.TotalPages=Math.ceil(this.TotalRecords/this.PageSize),this.CurrentPage=this.PageNumber,this.noRecord=!1):(this.noRecord=!0,this.DepreciationList=[],this.TotalRecorded=0))})},pagerMethod:function(e){this.PageSize=e.PageSize,this.PageNumber=e.PageNumber,this.GetDepreciationList()},leftCommonSearch:function(e){this.PageNumber=e.PageNumber,this.isPaged=1,"undefined"!=typeof e.searchCondition?this.searchCondition=e.searchConditionJson:this.searchCondition="",this.FetchData()},sortdata:function(e){var t="sort tb_headerSortDown";this.SortBy=e,e===this.SortBy&&(""==this.SortExp?(this.SortExp="ASC",t="sort tb_headerSortDown"):"ASC"==this.SortExp?(this.SortExp="DESC",t="sort tb_headerSortUp"):(this.SortExp="ASC",t="sort tb_headerSortDown")),this.FetchData(),$("#"+e+"  span:first-child").attr("class",t)},renderActions(e){var t=this;let a=[];return t.listActions.forEach(e=>{let t={...e};a.push(t)}),a},commonHeaderButtonClick(e){switch(e.callbackfunction){case"BacktoList":this.OpenBacktoList();break}},actionButtonClick(){},OpenBacktoList(){var e=this;e.$router.push({path:"/AssetCatalog/Index"})}}},d=c,D=a("2877"),L=Object(D["a"])(d,i,o,!1,null,null,null);t["default"]=L.exports}}]);
//# sourceMappingURL=chunk-2d0e5713.js.map