(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dde5ecf6"],{4555:function(t,e,a){"use strict";var s=function(){var t=this,e=t._self._c;return t.TotalPages>0?e("div",{staticClass:"nu-paging"},[e("nav",{attrs:{"aria-label":"Page navigation example col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left"}},[e("ul",{staticClass:"pagination row"},[e("li",{staticClass:"col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left choose-page"},[e("span",{staticClass:"mr-2"},[t._v("Show")]),e("span",{staticClass:"select"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.PageSize,expression:"PageSize"}],staticClass:"form-control form-control-sm",attrs:{id:"pageSize",name:"pageSize"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.PageSize=e.target.multiple?a:a[0]},t.SetPageSize]}},t._l(t.PageSizeOption,(function(a,s){return e("option",{key:s,domProps:{value:a}},[t._v(t._s(a)+" ")])})),0)]),e("span",{staticClass:"ml-2"},[t._v(t._s(t.$t("PagingText",[(t.CurrentPage-1)*t.PageSize+1,t.PageSize*t.CurrentPage>t.TotalRecords?t.TotalRecords:t.PageSize*t.CurrentPage,t.TotalRecords])))])]),e("li",{staticClass:"col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"},[t.TotalPages>1?e("ul",{staticClass:"paging-count"},[e("li",{staticClass:"page-item"},[1!=t.CurrentPage?e("a",{staticClass:"page-link first",attrs:{title:t.firstText,href:"javascript:;",val:"1"},on:{click:function(e){return t.SetCurrentPage(1)}}},[t._v(t._s(t.firstText))]):t._e(),1==t.CurrentPage?e("a",{staticClass:"page-link first disabled",attrs:{title:t.firstText,val:"1"}},[t._v(t._s(t.firstText))]):t._e()]),e("li",{staticClass:"page-item"},[1!=t.CurrentPage?e("a",{staticClass:"page-link previous",attrs:{title:t.prevText,href:"javascript:;"},on:{click:function(e){return t.SetCurrentPage(t.CurrentPage-1)}}},[t._v(t._s(t.prevText))]):t._e(),1==t.CurrentPage?e("a",{staticClass:"page-link previous disabled",attrs:{title:t.prevText}},[t._v(t._s(t.prevText))]):t._e()]),t._l(t.TotalPages,(function(a,s){return[a>=t.GroupStart&&a<=t.GroupEnd?e("li",{key:s,staticClass:"page-item"},[s+1==t.CurrentPage?e("a",{staticClass:"page-link active",attrs:{href:"javascript:;"}},[t._v(t._s(s+1))]):t._e(),s+1!=t.CurrentPage?e("a",{staticClass:"page-link",attrs:{href:"javascript:;",val:s},on:{click:function(e){return t.SetCurrentPage(s+1)}}},[t._v(t._s(s+1))]):t._e()]):t._e()]})),e("li",{staticClass:"page-item"},[t.CurrentPage<t.TotalPages?e("a",{staticClass:"page-link next",attrs:{title:t.nextText,href:"javascript:;"},on:{click:function(e){return t.SetCurrentPage(t.CurrentPage+1)}}},[t._v(t._s(t.nextText))]):t._e(),t.CurrentPage>=t.TotalPages?e("a",{staticClass:"page-link disabled next",attrs:{title:t.nextText}},[t._v(t._s(t.nextText))]):t._e()]),e("li",{staticClass:"page-item"},[t.CurrentPage!=t.TotalPages?e("a",{staticClass:"page-link next",attrs:{title:t.lastText,href:"javascript:;",val:t.TotalPages},on:{click:function(e){return t.SetCurrentPage(t.TotalPages)}}},[t._v(t._s(t.lastText))]):t._e(),t.CurrentPage==t.TotalPages?e("a",{staticClass:"page-link next disabled",attrs:{title:t.lastText,val:t.TotalPages}},[t._v(t._s(t.lastText))]):t._e()])],2):t._e()])])])]):t._e()},i=[],r=(a("14d9"),{props:{numberofrecords:{type:Number,required:!0},prevText:{type:String,required:!0},nextText:{type:String,required:!0},firstText:{type:String,required:!0},lastText:{type:String,required:!0},callbackfunction:{type:Function},CurrentPageNumber:{type:Number}},data:function(){return{TotalRecords:0,PageNumber:1,PageSize:10,PageSizeOption:null,CurrentPage:1,TotalPages:10,GroupStart:1,GroupEnd:3,LastPage:!1}},watch:{numberofrecords:function(t){this.CurrentPage>this.PageNumber&&(this.CurrentPage=this.PageNumber),this.TotalRecords=t,this.TotalPages=Math.ceil(this.TotalRecords/this.PageSize),this.TotalPages==this.PageNumber&&this.PageNumber>3?(this.GroupStart=this.PageNumber-2,this.GroupEnd=this.PageNumber):this.TotalPages>this.PageNumber&&this.PageNumber>=3?(this.GroupStart=this.PageNumber-1,this.GroupEnd=this.PageNumber+1):(this.GroupStart=1,this.GroupEnd=3)},CurrentPageNumber:function(t){var e=this;e.CurrentPage=t,1==t&&e.SetCurrentPage(t)}},created:function(){this.TotalRecords=this.numberofrecords,this.TotalPages=Math.ceil(this.TotalRecords/this.PageSize),this.GetPageSizeOption()},methods:{GetData:function(){this.$emit("SetCurrentPage",{PageNumber:this.PageNumber,PageSize:this.PageSize}),"undefined"!=typeof this.callbackfunction&&null!=this.callbackfunction&&this.callbackfunction()},SetPageSize:function(t){this.PageSize=t.target.value,this.PageNumber=1,this.CurrentPage=this.PageNumber,this.GroupStart=this.PageNumber,this.GroupEnd=this.PageNumber+2,this.TotalPages=Math.ceil(this.TotalRecords/this.PageSize),this.GetData()},SetCurrentPage:function(t){this.PageNumber=t,this.CurrentPage=t,this.TotalPages==this.PageNumber&&this.PageNumber>3?(this.GroupStart=this.PageNumber-2,this.GroupEnd=this.PageNumber):this.TotalPages>this.PageNumber&&this.PageNumber>=3?(this.GroupStart=this.PageNumber-1,this.GroupEnd=this.PageNumber+1):(this.GroupStart=1,this.GroupEnd=3),this.GetData()},GetPageSizeOption:function(){for(var t=[],e=10,a=e;a<e+95;a+=5)t.push(a);this.PageSizeOption=t}}}),n=r,o=a("2877"),l=Object(o["a"])(n,s,i,!1,null,null,null);e["a"]=l.exports},"75fe":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"form--group mt-1"},[e("div",{staticClass:"custom-control p-0 custom-radio mr-4 custom-control-inline"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.Case,expression:"Case"}],staticClass:"mr-2",staticStyle:{width:"18px"},attrs:{type:"radio",name:"IsDocs",value:"0"},domProps:{value:0,checked:t._q(t.Case,0)},on:{change:[function(e){t.Case=0},function(e){return t.ScannedRadiotype("RFID")}]}}),t._v("Rfid Tags ")]),e("div",{staticClass:"custom-contol p-0 custom-radio mr-4 custom-control-inline"},[e("input",{staticClass:"mr-2",staticStyle:{width:"18px"},attrs:{type:"radio",name:"IsDocs",value:"1"},on:{change:function(e){return t.ScannedRadiotype("Type")}}}),t._v("Beacon ")])]),e("loader",{attrs:{"is-visible":t.isLoading}}),e("tg-list",{attrs:{showCheckBox:!0,IsShowAction:!1,listType:["List"],ModuleName:"Asset",SubModuleCode:"Asset",IdentityColumn:"Id",HeaderText:"Scanned Items",ListData:t.GroupData,HeaderData:t.Headers,widgets:t.widgets,callbackfunction:t.GetScannedList,HeaderButtons:t.listheaderbuttons,TotalRecords:t.TotalRecords,SearchFields:t.leftSearchFields,RenderRowActionMethod:t.renderActions,ListDataCallBackFunction:t.GetScannedList,LegendArray:t.LegendArray,SortExp:t.SortExp,SortBy:t.SortBy,NorecordfoundText:t.$t("NoRecordfound")},on:{LeftsearchButtonClick:t.leftCommonSearch,PagerButtonClick:t.pagerMethod,HeaderButtonClick:t.commonHeaderButtonClick,ActionButtonClick:t.actionButtonClick,SortdataButtonClick:t.sortdata}}),t.IsAssignGroup?e("ScannedItemPopup",{attrs:{checkboxarray:t.checkboxarray,assDetailIDs:t.assDetailIDs},on:{CloseScannedItem:t.CloseScannedItem}}):t._e()],1)},i=[],r=(a("14d9"),a("1115"));let n=[{title:"Assign Group",iconClass:"fa fa-user-plus",callbackfunction:"Assigngroup",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1},{title:"UnAssign Group",iconClass:"fa fa-user-plus",callbackfunction:"UnAssigngroup",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1},{title:"delete",iconClass:"fa fa-trash",callbackfunction:"DeleteRFID",additionalClass:"",isdisabled:!0,isvisible:!0,checkPrivilege:!1}],o=[{fieldName:"EPC Tag",fieldType:"text",fieldIcon:"fa-file",paramName:"search",fieldSearchConditionName:[""],isSearch:!1,value:"",listOptions:[]}],l=[];var c={buttons:n,leftsearchSchema:o,listActions:l},u=function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-popups"},[e("div",{staticClass:"modal d-block"},[e("div",{staticClass:"modal-dialog modal-dialog-centered"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[t._v(" "+t._s(t.$t("Assign Group"))+" ")]),e("button",{staticClass:"close",attrs:{type:"button","data-original-title":"Close"},on:{click:t.CloseAssigngroup}},[e("em",{staticClass:"fa fa-times"})])]),t._m(0),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12 col-md-6 col-lg-4 col-xl-3 float-left"},[e("div",{staticClass:"form-group"},[e("label",[t._v("Group Name:")]),e("span",{staticClass:"text-danger"},[t._v("*")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.TxtGroupName,expression:"TxtGroupName"}],class:{"form-control w-100":!0},attrs:{name:"GroupName"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.TxtGroupName=e.target.multiple?a:a[0]}}},[e("option",{attrs:{value:""}},[t._v("Select")]),t._l(t.GroupData,(function(a,s){return e("option",{key:s,domProps:{value:a.group_id}},[t._v(t._s(a.group_name))])}))],2)])])])]),e("div",{staticClass:"modal-footer"},[t._m(1),e("button",{staticClass:"btn btn-success",on:{click:function(e){return t.Savegroup()}}},[t._v(" Save")])])])])])])},d=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex flex-wrap"},[e("div",{staticClass:"col-md-12 p-0"},[e("div",{staticClass:"heading-border"},[e("h5",{staticClass:"h5"},[e("span",[t._v("Assign Group To RFID TAG")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-12"},[e("small",{staticClass:"text-danger"},[t._v("Fields marked with an asterisk (*) are mandatory.")])])}],g={props:{assDetailIDs:Number,checkboxarray:Array},data(){return{IsShowAddNamePopup:!1,GroupData:[],TxtGroupName:"",group_name:"",selectedRFIDS:"",is_unassigned:"0"}},created:function(){this.GetGroupName()},methods:{CloseAssigngroup:function(){this.$emit("CloseScannedItem")},GetGroupName:async function(){var t=this;await r["a"].GetScannedGroupName().then(e=>{null!=e.data&&e.data.DATA.length>0&&(t.GroupData=e.data.DATA)})},Savegroup:async function(){var t=this,e=`groupNames=${t.TxtGroupName}&selectedRFIDS=${t.assDetailIDs}&is_unassigned=${t.is_unassigned}`;await r["a"].AddSaveAssignGroup(e).then(t=>{t.data,this.$emit("CloseScannedItem"),this.$emit("checkboxarray",""),window.location.reload()})}}},h=g,p=a("2877"),m=Object(p["a"])(h,u,d,!1,null,null,null),f=m.exports,P=a("4555"),S={components:{Pager:P["a"],ScannedItemPopup:f},data(){return{txtsearch:null,Case:0,ListType1:!0,BeaconType:!0,EPC_TAG:"",Popup:!1,ListType2:!1,sortBy:"",sortExp:"",Name:"",Type:null,GroupData:[],noRecord:!1,TotalRecords:0,pageNum:1,PageSize:10,CurrentPage:1,TotalPages:0,isLoading:!1,selectAll:!1,selectedItems:0,IsAssignGroup:!1,assDetailIDs:"",id:"",widgets:[],listheaderbuttons:c.buttons,leftSearchFields:c.leftsearchSchema,listActions:c.listActions,checkboxarray:[],UnAssigned:!1,is_unassigned:1,Headers:[{COLUMN_NAME:"EPC_TAG",DATA_TYPE:"image",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Name",DISPLAY_ORDER:1},{COLUMN_NAME:"Name",DATA_TYPE:"image",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"UserName",DISPLAY_ORDER:2},{COLUMN_NAME:"email_id",DATA_TYPE:"text",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Email",DISPLAY_ORDER:3},{COLUMN_NAME:"group_name",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Group Name ",DISPLAY_ORDER:3},{COLUMN_NAME:"ReadTime",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Reading Time ",DISPLAY_ORDER:3},{COLUMN_NAME:"unique_name",DATA_TYPE:"text",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Attached Items  ",DISPLAY_ORDER:3}]}},created:function(){this.GetScannedList()},methods:{AddToArray(t){console.log("even",t),t.currentTarget.checked?this.checkboxarray.push(t.currentTarget.value):this.checkboxarray.pop()},actionButtonClick:function(t,e){var a=this;switch(t){case"Consume":a.Consume(e);break;case"RequestQuantity":a.RequestQuantity(e);break}},renderActions(t){},ScannedRadiotype(t){"RFID"==t?(this.Type="RFID",this.GetScannedList()):(this.Type="Beacon",this.GetScannedList())},GetScannedList:async function(){var t=this;this.isLoading=!0;var e=`pageSize=${t.PageSize}&pageNum=${t.pageNum}&sortBy=${this.sortBy}&sortExp=${this.sortExp}&Type=${this.Type}&${t.searchCondition}`;setTimeout(()=>{this.isLoading=!1},1e3),await r["a"].GetScannedItemsList(e).then(e=>{null!=e.data?e.data.length>0?(t.GroupData=e.data,t.TotalRecords=e.data[0].TOTAL,t.TotalPages=Math.ceil(t.TotalRecords/t.PageSize),t.CurrentPage=t.pageNum,t.noRecord=!1):(t.GroupData=[],t.noRecord=!0,t.TotalRecords=0):(t.noRecord=!0,t.GroupData=[],t.TotalRecords=0,t.isLoading=!1),setTimeout((function(){t.CheckBoxBootstrap()}),100)})},leftCommonSearch:function(t){this.PageNumber=t.PageNumber,this.isPaged=1,"undefined"!=typeof t.searchCondition?this.searchCondition=t.searchConditionJson:this.searchCondition="",this.GetScannedList()},SearchData:function(){this.GetScannedList()},commonHeaderButtonClick(t){switch(t.callbackfunction){case"Assigngroup":this.Asign();break;case"UnAssigngroup":this.IsAssignedgroup();break;case"DeleteRFID":this.DeleteRFIDs();break}},ResetData:function(){this.EPC_TAG="",this.GetScannedList()},pagerMethod:function(t){this.PageSize=t.PageSize,this.pageNum=t.PageNumber,this.GetScannedList()},sortdata:function(t){var e="sort tb_headerSortDown";this.sortBy=t,t===this.sortBy&&(""==this.sortExp?(this.sortExp="ASC",e="sort tb_headerSortDown"):"ASC"==this.sortExp?(this.sortExp="DESC",e="sort tb_headerSortUp"):(this.sortExp="ASC",e="sort tb_headerSortDown")),this.GetScannedList(),$("#"+t+"  span:first-child").attr("class",e)},AssigngroupPopup:function(){this.IsAssignGroup=!0},CloseScannedItem:function(){this.IsAssignGroup=!1},UnAssigngroupPopup:function(){this.UNIsAssignGroup=!0},Asign:function(){var t=this,e="",a=[];if($(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){for(let e=0;e<t.GroupData.length;e++)t.GroupData[e].Id==$(this).val()&&(a.push(t.GroupData[e]),console.log("new",t.assDetailIDs));e.length>0&&(e+=","),e+=$(this).val()})),""==e)return t.confirmR(t.$t("Minimum One EPC Tag should be selected."),!0,this.$t("GetScannedList"),(function(t){return!1})),!1;t.assDetailIDs=e,t.IsAssignGroup=!0},IsAssignedgroup:function(){var t=this,e="",a=[];if($(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){for(let e=0;e<t.GroupData.length;e++)t.GroupData[e].Id==$(this).val()&&(a.push(t.GroupData[e]),console.log("new",t.assDetailIDs));e.length>0&&(e+=","),e+=$(this).val()})),""!=e)return t.confirmR(t.$t("Are you sure you want to unassign selected Tag(s)?"),!0,this.$t("GetScannedList"),(function(a){var s=`groupNames=&selectedRFIDS=${e}&is_unassigned=1`;JSON.stringify(s);r["a"].AddSaveAssignGroup(s).then(e=>{"True"==e.data&&t.GetScannedList()})})),!1;t.confirmR(t.$t("Minimum One EPC Tag should be selected."),!0,this.$t("GetScannedList"),(function(t){return!1})),t.assDetailIDs=e,t.UNIsAssignGroup=!0},DeleteRFIDs:function(){var t=this,e="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){e.length>0&&(e+=","),e+=$(this).val()})),e.length>0&&t.confirmR(t.$t("ConfirmDelete"),!0,t.$t("Delete")+"  "+t.$t("Id"),(function(){var a={ids:e},s=JSON.stringify(a);r["a"].deleteRFID(s).then(e=>{e.data?($("[id^='chkAll']").prop("checked",!1).removeAttr("checked"),$(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),$("[id^='DeleteMultiple']").removeClass("enable").addClass("disabled"),t.ShowAlert(t.$t("DeletedSuccess",[t.$t("EPC_TAG ")]),"Success",!0,t.$t("Alert")),t.GetGroupList()):t.ShowAlert(t.$t("DeletedError",[t.$t("Id")]),"failure",!0,t.$t("Alert"))})}))}}},C=S,v=Object(p["a"])(C,s,i,!1,null,null,null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-dde5ecf6.js.map