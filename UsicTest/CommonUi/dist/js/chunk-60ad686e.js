(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60ad686e"],{"6d37":function(t,e,a){var s=a("8d6c");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var r=a("499e").default;r("6b40f24e",s,!0,{sourceMap:!1,shadowMode:!1})},7629:function(t,e,a){"use strict";a("6d37")},"8d6c":function(t,e,a){var s=a("24fb");e=s(!1),e.push([t.i,".ps[data-v-3b0a414c]{height:650px}",""]),t.exports=e},f5f7:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"left-menu-tab new_tab nosrcoll"},[t._m(0),e("loader",{attrs:{"is-visible":t.isLoading}}),e("div",{staticClass:"pt-2 mb-1 w-100"},[e("div",{staticClass:"form-group mb-0"},[e("input",{staticClass:"form-control search",attrs:{type:"text",placeholder:"Search By Report Name",id:"SearhField"},on:{keydown:t.ListFiltering,keyup:t.ListFiltering}})])]),t.noRecordFound?t._e():e("PerfectScrollbar",[e("div",{staticClass:"mt-2 mCustomScrollbar _mCS_4 mCS_no_scrollbar",staticStyle:{"max-height":"calc(100vh - 2px)"},attrs:{id:"divscrollsetuptabs"}},[e("ul",{staticClass:"nav nav-pills flex-column left-tab responivecustomtab lefttabiconfix",attrs:{id:"upper",role:"tablist"}},t._l(0!=t.searchColumnfilter.length||t.SearchNoRecord?t.searchColumnfilter:t.ReportData,(function(a,s){return e("li",{key:s,staticStyle:{display:"list-item"}},[e("a",{staticClass:"nav-link left-menu text-truncate",class:{active:a.REPORT_ID==t.ReportListParameters.ReportID},attrs:{title:a.REPORTNAME+" ("+a.FOLDER_NAME+")"},on:{click:function(e){return t.GetReportList(a)}}},[e("i",{staticClass:"fa fa-file-text-o mr-2",attrs:{"aria-hidden":"true"}}),t._v(t._s(a.REPORTNAME+" ("+a.FOLDER_NAME+")")+" ")])])})),0)])]),t.SearchNoRecord?e("div",{staticClass:"text-center text-danger d-flex align-items-center justify-content-center norecs border py-3"},[t._v(" "+t._s(t.$t("NoRecordfound"))+" ")]):t._e()],1),e("div",[t.IsReportListing?e("ViewCustomReport",{key:t.componentKey,attrs:{ReportListParameters:t.ReportListParameters}}):t._e(),t.noRecordFound?e("div",{staticClass:"right-content"},[t._m(1),e("div",{staticClass:"listing"},[t._m(2),e("div",{staticClass:"text-center text-danger d-flex align-items-center justify-content-center norecs border py-3"},[t._v(" "+t._s(t.$t("NoRecordfound"))+" ")])])]):t._e()],1)])},r=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-md-12 p-0"},[e("div",{staticClass:"theme-primary partition"},[e("span",{staticClass:"p-name text-white"},[t._v("Report Listing")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-md-12 p-0"},[e("div",{staticClass:"theme-primary partition p-actions-expand",staticStyle:{overflow:"visible"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"expand-list"},[e("a",{staticClass:"expand-list-btn justify-content-center align-items-center",attrs:{href:"javascript:;"}},[e("em",{staticClass:"icon-solid arrow-solid-left text-white",staticStyle:{"font-size":"9pt"}})])])}],i=(a("14d9"),a("e770")),o=a("9769"),n={components:{ViewCustomReport:i["default"]},data(){return{isLoading:!1,PageSize:10,PageNumber:1,isPaged:1,SortBy:"",SortExp:"",searchcondition:"",ReportData:[],ReportListParameters:{},IsReportListing:!1,GetDeafultReportData:[],Viewcount:0,componentKey:0,searchColumnfilter:[],SearchNoRecord:!0,noRecordFound:!0}},async created(){var t=this;await t.FetchData(),t.GetDeafultReportData!=[]&&void 0!=t.GetDeafultReportData&&(t.GetReportList(t.GetDeafultReportData),t.Viewcount+=1)},methods:{async FetchData(){var t=this;const e=`searchCondition=${t.searchcondition}&is_paged=${t.isPaged}&sortBy=${t.SortBy}&sortExp=${t.SortExp}&pageSize=${t.PageSize}&pageNumber=${t.PageNumber}`;await o["a"].CustomReportListing(e).then((function(e){""!=e.data&&null!=e.data&&e.data.data.length>0?(t.ReportData=e.data.data,t.GetDeafultReportData=t.ReportData[0],t.SearchNoRecord=!1,t.noRecordFound=!1):(t.SearchNoRecord=!0,t.noRecordFound=!0,t.ReportData=[],t.GetDeafultReportData=void 0),setTimeout((function(){t.ResponsiveDataTable("tablelistingdata")}),500),setTimeout((function(){t.SetScrolbar("dark-thick","","customScrollForLeftBar")}),1e3),t.isLoading=!1}))},GetReportList(t){var e=this;e.isLoading=!0,e.IsReportListing=!0,e.Viewcount>0&&(e.componentKey+=1),e.ReportListParameters={ReportID:t.REPORT_ID,ACCESS:t.ACCESS},e.isLoading=!1},ListFiltering:function(){var t=this,e=document.getElementById("SearhField"),a=e.value.toUpperCase();null!=a&&""!=a?$(".multi-collapse").addClass("show"):$(".multi-collapse").removeClass("show");var s=[],r=[];t.ReportData.forEach(t=>{r.push(t),s=r.filter(t=>{var e=t.REPORTNAME+" ("+t.FOLDER_NAME+")";return e.replace(/\W/g,"").toLowerCase().includes(a.replace(/\W/g,"").toLowerCase())})}),t.searchColumnfilter=s,r=[],s=[];let i=0;return t.searchColumnfilter.length>0&&i++,t.SearchNoRecord=!(i>0),t.searchColumnfilter}}},c=n,l=(a("7629"),a("2877")),d=Object(l["a"])(c,s,r,!1,null,"3b0a414c",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-60ad686e.js.map