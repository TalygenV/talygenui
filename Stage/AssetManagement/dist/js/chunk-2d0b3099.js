(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b3099"],{2753:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("section",{staticClass:"main-content no-left-bar",attrs:{id:"divMainAssetGroupListingData"}},[e("div",{staticClass:"right-content"},[e("div",{staticClass:"col-md-12 p-0"},[e("div",{staticClass:"theme-primary partition tablehead p-actions-expand"},[e("span",{staticClass:"p-name text-white"},[t._v(t._s(t.$t("ReturnList")))]),t._m(0)])]),e("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 searchpanel tablehead search float-left p-0"},[e("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 Search-panel float-left pt-2 p-0"},[e("div",{staticClass:"col-sm-12 col-md-12 col-lg-6 col-xl-6 float-left"},[e("div",{staticClass:"row mt-0"},[e("div",{staticClass:"col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 float-left pr-1 pl-0"},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search by EPC Tag or Name or Unique Name",autocomplete:"off",name:"search"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})])]),e("div",{staticClass:"col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 float-left pl-0"},[e("div",{staticClass:"search-btm-btn background-0 text-left form-check-inline m-0"},[e("a",{staticClass:"btn btn-success mr-1 px-4",attrs:{href:"javascript:;",title:"Search"},on:{click:t.SearchData}},[e("em",{staticClass:"fa fa-search text-white"})]),e("a",{staticClass:"btn btn-danger clearsearchtext px-4",attrs:{title:"Clear",href:"javascript:;"},on:{click:t.ResetData}},[e("em",{staticClass:"fa fa-refresh"})]),t._v("   "),e("a",{staticClass:"btn btn-info",attrs:{id:"Search_rfid",href:"javascript:;",title:t.$t("RFIDCheckinItems"),"data-toggle-tooltip":"tooltip","data-original-title":"RFID Checkin Items"},on:{click:function(e){return t.ReturnList()}}},[e("i",{staticClass:"fa fa-barcode text-white float-left mt-1"}),e("span",{staticClass:"text-white mx-2"},[t._v(t._s(t.$t("RFIDCheckinItems")))])])])])])])])])]),e("div",{staticStyle:{clear:"both"}}),e("tg-list",{attrs:{IsShowAction:!1,SearchPosition:"none",listType:["List"],ModuleName:"Asset",SubModuleCode:"Asset",IdentityColumn:"EPC_TAG",HeaderText:"Return List",ListData:t.returnProductData,HeaderData:t.Headers,LegendArray:t.LegendArray,widgets:t.widgets,SearchFields:t.leftSearchFields,RenderRowActionMethod:t.renderActions,TotalRecords:t.TotalRecords,ListDataCallBackFunction:t.GetReturnList,NorecordfoundText:t.$t("NorecordfoundText")},on:{PagerButtonClick:t.pagerMethod,SortdataButtonClick:t.sortdata},scopedSlots:t._u([{key:"slotdata",fn:function({data:a}){return["Return"==a.column.COLUMN_NAME?[a.row.number_of_items_assigned>0?e("td",{staticClass:"text-center single-action"},[e("span",{staticClass:"text-dark"},[e("em",{staticClass:"table-head-btn iconenable",on:{click:function(e){return t.AssetMutipleReturn(a.row)}}},[e("i",{staticClass:"fa fa-undo"}),e("span",[t._v(t._s(t.$("Return")))])])])]):e("td",{staticClass:"text-center single-action"},[e("span",{staticClass:"active-disabled"},[e("span",{staticClass:"text-center"},[t._v(t._s(t.$t("WaitingforAcceptance")))])])])]:t._e()]}}])})],1)},i=[function(){var t=this,e=t._self._c;return e("span",{staticClass:"collapse-head-btns"},[e("a",{staticClass:"collapse-btns",attrs:{href:"javascript:;"}},[e("i",{staticClass:"fa fa-angle-up text-white"})])])}],r=(a("14d9"),a("1115")),o={data(){return{search:"",leftSearchFields:[],widgets:[],listheaderbuttons:[],LegendArray:[],chekedInId:"",sortBy:"",sortExp:"",returnProductData:[],noRecord:!1,TotalRecords:0,pagenumber:100,pageSize:0,CurrentPage:1,isLoading:!1,isListVisible:!1,Headers:[{COLUMN_NAME:"EPC_TAG",DATA_TYPE:"number",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("EPCTag"),DISPLAY_ORDER:1},{COLUMN_NAME:"name",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("Name"),DISPLAY_ORDER:2},{COLUMN_NAME:"UNIQUE_NAME",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("UniqueName"),DISPLAY_ORDER:3},{COLUMN_NAME:"AssignedUser",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("AssignedTo"),DISPLAY_ORDER:4},{COLUMN_NAME:"number_of_items_assigned",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:this.$t("Quantity"),DISPLAY_ORDER:5},{COLUMN_NAME:"Return",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("Return"),DISPLAY_ORDER:6,settings:{isInSlot:!0}}]}},created:function(){this.GetReturnList()},updated:function(){$(".expand-list").addClass("hide")},methods:{async GetReturnList(t){this.chekedInId=null!=t?1:"";const e=`chekedInId=1&search=${this.search}&pagenumber=${this.pagenumber}&pageSize=${this.pageSize}&sortBy=${this.sortBy}&sortExp=${this.sortExp}`;var a=this;await r["a"].GetRFIDItemsToReturn(e).then(t=>{var e=JSON.parse(t.data);null!=e.data?e.data.length>0?(a.returnProductData=e.data,a.TotalRecords=e.data[0].TOTAL,a.TotalPages=Math.ceil(a.TotalRecords/a.pageSize),a.CurrentPage=a.pageNum,a.noRecord=!1):(a.returnProductData=[],a.noRecord=!0,a.TotalRecords=0):(a.noRecord=!0,a.returnProductData=[],a.TotalRecords=0)})},SearchData:function(){this.GetReturnList("1")},ResetData:function(){this.search="",this.GetReturnList("1")},pagerMethod:function(t){this.pageSize=t.pageSize,this.pageNum=t.pageNum,this.GetReturnList()},sortData:function(t){this.sortBy=t,this.sortExp="DESC"==this.sortExp?"ASC":"DESC",this.GetReturnList("1")},sortdata:function(t){var e="sort tb_headerSortDown";this.SortBy=t,t===this.SortBy&&(""==this.SortExp?(this.SortExp="ASC",e="sort tb_headerSortDown"):"ASC"==this.SortExp?(this.SortExp="DESC",e="sort tb_headerSortUp"):(this.SortExp="ASC",e="sort tb_headerSortDown")),$("#"+t+"  span:first-child").attr("class",e)},ReturnList:function(){this.search="",this.GetReturnList("1")},commonHeaderButtonClick:function(){},renderActions(t){var e=this;let a=[];return e.listActions.forEach(t=>{let e={...t};a.push(e)}),a}}},n=o,c=a("2877"),l=Object(c["a"])(n,s,i,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0b3099.js.map