(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20f5a7"],{b2ef:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t._self._c;return e("section",[t._v(t._s(t.list)+" "),e("tg-list",{attrs:{IsShowAction:!1,showCheckBox:!1,listType:[t.DetailListType],ModuleName:"Timer",SubModuleCode:"WrokingDay",IdentityColumn:"worK_DAY_ID",HeaderText:t.$t("WorkingNonWorkingDay"),ListData:t.list,HeaderData:t.Headers,widgets:t.widgets,callbackfunction:t.ListWorkDay,HeaderButtons:t.buttons,TotalRecords:t.TotalRecords,RenderRowActionMethod:t.renderActions,ListDataCallBackFunction:t.ListWorkDay,LegendArray:t.LegendArray,SortExp:t.SortExp,SortBy:t.SortBy,NorecordfoundText:t.$t("NoRecordfound")},on:{LeftsearchButtonClick:t.leftCommonSearch,PagerButtonClick:t.pagerMethod,HeaderButtonClick:t.commonHeaderButtonClick,SortdataButtonClick:t.sortdata},scopedSlots:t._u([{key:"slotdata",fn:function({data:a}){return["Edit"==a.column.COLUMN_NAME?[e("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.OpenAddworkingDay(a.row)}}},[e("em",{staticClass:"fa fa-pencil text-success action-icon"})])]:t._e(),"Delete"==a.column.COLUMN_NAME?[e("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.Delete(a.row.worK_DAY_ID)}}},[e("em",{staticClass:"fa fa-trash text-danger action-icon"})])]:t._e()]}}])})],1)},i=[],s=(a("14d9"),a("9769")),r={data(){return{list:{},leftsearchSchema:[],SortBy:"",SortExp:"",TotalRecords:0,Headers:[{COLUMN_NAME:"worK_DATE",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("Date"),DISPLAY_ORDER:1},{COLUMN_NAME:"iS_WORKING",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("Status"),DISPLAY_ORDER:2},{COLUMN_NAME:"locatioN_NAME",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("Location"),DISPLAY_ORDER:3},{COLUMN_NAME:"Edit",DATA_TYPE:"",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("Edit"),DISPLAY_ORDER:4,settings:{isInSlot:!0}},{COLUMN_NAME:"Delete",DATA_TYPE:"",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:this.$t("Delete"),DISPLAY_ORDER:5,settings:{isInSlot:!0}}],buttons:[{title:this.$t("AddWorkingDay"),iconClass:"fa fa-plus",callbackfunction:"AddworkingDay",additionalClass:"",isdisabled:!1,isvisible:!0,id:"AddWorkingDay",checkPrivilege:!1,isEnabledOnSelectedRow:!1}],widgets:[],LegendArray:[],DetailListType:"List",CurrentPage:1,TotalPages:0,pageSize:10,pageNumber:1}},created:async function(){await this.ListWorkDay()},methods:{actionButtonClick(t,e){},renderActions(t){},Fetchdata:async function(){var t=this;await s["a"].WorkingDay().then(e=>{t.list=e.data,console.log("list",t.list)})},ListWorkDay:async function(){var t=this,e=`sortBy=${t.sortBy}&sortExp=${t.sortExp}&pageSize=${t.pageSize}&pageNum=${t.pageNumber}`;await s["a"].ListWorkDay(e).then(e=>{t.list=e.data,t.list.forEach(e=>{e.iS_WORKING=1==e.iS_WORKING?t.$t("WorkingDay"):t.$t("companyholidays")}),t.TotalRecords=t.list[0].totaL_REC,t.TotalPages=Math.ceil(t.TotalRecords/t.pageSize),t.CurrentPage=t.pageNumber})},pagerMethod:function(t){this.pageSize=t.PageSize,this.pageNumber=t.PageNumber,this.ListWorkDay()},commonHeaderButtonClick(t){switch(t.callbackfunction){case"AddworkingDay":this.OpenAddworkingDay(this._data,"Approve");break}},OpenAddworkingDay:function(t){var e=this;console.log("iem",t),e.isBlank(t)?e.$router.push({name:"AddWorkingDay",params:{id:0}}):e.$router.push({name:"AddWorkingDay",params:{id:t}})},Delete:async function(t){var e="id="+t;await s["a"].DeleteWoringDay(e).then(t=>{console.log("response",t),(t.data=1)&&(this.ShowAlert(vm.$t("RecordsDeleteSuccessfully"),"success",!0,vm.$t("Alert")),this.ListWorkDay())})},sortdata:function(t){var e="sort tb_headerSortDown";this.SortBy=t,t===this.SortBy&&(""==this.SortExp?(this.SortExp="ASC",e="sort tb_headerSortDown"):"ASC"==this.SortExp?(this.SortExp="DESC",e="sort tb_headerSortUp"):(this.SortExp="ASC",e="sort tb_headerSortDown")),this.FetchData(),$("#"+t+"  span:first-child").attr("class",e)},leftCommonSearch:function(t){this.PageNumber=t.PageNumber,this.isPaged=1,"undefined"!=typeof t.searchCondition?this.searchCondition=t.searchConditionJson:this.searchCondition="",this.ListWorkDay()}}},n=r,c=a("2877"),d=Object(c["a"])(n,o,i,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d20f5a7.js.map