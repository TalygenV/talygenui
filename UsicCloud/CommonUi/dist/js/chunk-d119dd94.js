(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d119dd94"],{"819e":function(t,a,e){var s=e("24fb");a=s(!1),a.push([t.i,".leftsideicon.w-75 .delete-dashboard{display:block;position:absolute;right:6px;top:-2px;z-index:99;font-size:1.5em;background:#fff;height:28px;border-radius:100%}.heading-border.editgroup:after{background:none!important}.left-filter.db_widgetnew .card-header{text-transform:capitalize}.leftsideicon.w-75 .delete-group{display:block;position:absolute;right:6px;top:-2px;z-index:99;font-size:1.5em;height:28px}.db_widgetnew ul.lefttabiconfix li{padding:10px}",""]),t.exports=a},"82ee":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t._self._c;return a("div",[a("loader",{attrs:{"is-visible":t.isLoading}}),a("section",{staticClass:"page-action"},[a("div",{staticClass:"container-fluid p-0"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 padding-t_8"},[a("div",{staticClass:"theme-primary partition-full"},[a("span",{staticClass:"p-name text-white"},[t._v(t._s(t.$t("MyShortcuts")))]),a("span",{staticClass:"p-actions float-end mydbsize"},["CL"==t.GetUserInfo.UserType?a("RouterLink",{staticClass:"p-action-btn text-white dash",attrs:{to:"/User/Dashboard",checkPrivilege:"Yes"}},[a("em",{staticClass:"fa fa-home"}),a("br"),t._v(t._s(t.$t("Home"))+" ")]):a("RouterLink",{staticClass:"p-action-btn text-white dash",attrs:{to:"/Dashboard",checkPrivilege:"Yes"}},[a("em",{staticClass:"fa fa-home"}),a("br"),t._v(t._s(t.$t("Home"))+" ")]),t.IsEdit?a("a",{staticClass:"p-action-btn text-white",attrs:{href:"javascript:;",id:"ancAddGroupMyDashboard",title:t.$t("AddNewGroup")},on:{click:function(a){return t.AddNewData()}}},[a("em",{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true"}}),a("br"),t._v(t._s(t.$t("AddNewGroup")))]):t._e(),t.IsEdit?a("a",{staticClass:"p-action-btn text-white",attrs:{href:"javascript:;",id:"ancSaveMyDashboard",title:t.$t("Save")},on:{click:function(a){return t.SaveData()}}},[a("em",{staticClass:"fa fa-save",attrs:{"aria-hidden":"true"}}),a("br"),t._v(t._s(t.$t("Save")))]):t._e(),t.IsEdit?a("a",{staticClass:"p-action-btn text-white",attrs:{href:"javascript:;",id:"ancCancelMyDashboard",title:t.$t("Cancel")},on:{click:function(a){return t.CancelEditDashBoardData()}}},[a("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}}),a("br"),t._v(t._s(t.$t("Cancel")))]):t._e(),t.IsEdit?t._e():a("a",{staticClass:"p-action-btn text-white",attrs:{href:"javascript:;",checkPrivilege:"Yes"},on:{click:function(a){return t.EditDashBoardData()}}},[a("em",{staticClass:"fa fa-pencil"}),a("br"),t._v(t._s(t.$t("Edit"))+" ")])],1)])])])])]),a("section",{staticClass:"main-content"},[a("div",{staticClass:"container-fluid p-0"},[a("div",{staticClass:"border p-3 form-minheight d-flex iPadcontroldiv"},[a("div",{staticClass:"float-left leftsideicon",class:1==t.ChangeSizeOfBox?"w-75":"w-100"},[a("div",{staticClass:"row"},t._l(t.MenuDataGroupBy,(function(e,s){return a("div",{key:s,staticClass:"w-100 clsdashboardgroup p-0"},[a("div",{staticClass:"clearfix"}),a("div",{staticClass:"col-lg-12 mb-0 float-left px-3"},[a("div",{staticClass:"heading-border",class:1==t.IsEdit?"editgroup":""},[a("h5",{staticClass:"h5"},[t.IsShowModuleNameBorder?a("span",{staticClass:"spngropuname"},[t._v(" "+t._s(e.GroupName)+" "),a("a",{staticClass:"editgroupname d-none",attrs:{title:t.$t("Edit"),href:"javascript:;"}},[a("em",{staticClass:"fa fa-pencil pl-2 text-success"})])]):t._e(),t.IsShowModuleNameEdit?a("input",{directives:[{name:"model",rawName:"v-model",value:e.GroupName,expression:"parentItem.GroupName"}],staticClass:"form-control mb-1 txtgropuname",attrs:{type:"text",maxlength:"100"},domProps:{value:e.GroupName},on:{input:function(a){a.target.composing||t.$set(e,"GroupName",a.target.value)}}}):t._e(),s>0&&t.IsShowModuleNameEdit?a("a",{staticClass:"delete-group",attrs:{"data-id":"@group.First().FAV_DASHBOARD_GROUP_ID",title:t.$t("Delete")},on:{click:function(a){return t.DeleteObjectData(e)}}},[a("em",{staticClass:"text-secondary fa fa-times-circle"})]):t._e()])])]),a("ul",{staticClass:"shortcuts-menu pb-3 connectedSortable"},[a("draggable",{staticStyle:{width:"100%"},attrs:{group:"contacts"},on:{end:t.onDragEnd},model:{value:e.GroupData,callback:function(a){t.$set(e,"GroupData",a)},expression:"parentItem.GroupData"}},t._l(e.GroupData,(function(e,s){return a("li",{key:s,staticClass:"position-relative"},[t.IsEditShow?a("a",{staticClass:"delete-dashboard",attrs:{href:"javascript:;","data-id":e.PRIVILEGE_ID,title:t.$t("Delete")},on:{click:function(a){return t.DeleteSelectedData(e)}}},[a("em",{staticClass:"text-secondary fa fa-times-circle"})]):t._e(),"CURRENT"==t.getRootLink(e)?a("RouterLink",{staticClass:"short-menu-item",attrs:{to:`/${e.MODULE_NAME}/${e.PRIVILEGE_NAME}?reqfrom=${e.MODULE_MASTER_ID}`,checkPrivilege:"Yes"}},[a("span",{staticClass:"left-icon-m",class:1==t.IsAddCursorClass?"cursor-move":""},[a("em",{class:e.PRIVILEGE_ICON?"fa "+e.PRIVILEGE_ICON:"fa fa-exclamation"})]),a("span",{staticClass:"short-item-name"},[t._v(t._s(t.$t(e.DISPLAY_NAME)))])]):a("a",{staticClass:"short-menu-item",attrs:{href:t.getRootLink(e)+"/"+`${e.MODULE_NAME}/${e.PRIVILEGE_NAME}?reqfrom=${e.MODULE_MASTER_ID}`,"data-id":e.PRIVILEGE_ID,"data-fav_id":e.FAV_DASHBOARD_ID,"data-order":e.DISPLAY_ORDER,"data-displayName":e.DISPLAY_NAME,"data-toggle":"tooltip",title:t.$t(e.DISPLAY_NAME),"data-placement":"bottom"}},[a("span",{staticClass:"left-icon-m",class:1==t.IsAddCursorClass?"cursor-move":""},[a("em",{class:e.PRIVILEGE_ICON?"fa "+e.PRIVILEGE_ICON:"fa fa-exclamation"})]),a("span",{staticClass:"short-item-name"},[t._v(t._s(t.$t(e.DISPLAY_NAME)))])])],1)})),0)],1)])})),0)]),t.IsShowModuleList?a("div",{staticClass:"w-25 float-left rightsideicon"},[a("div",{staticClass:"left-menu-tab ml-3 mr-3",staticStyle:{"max-width":"96%"}},[t._m(0),a("div",{staticClass:"w-100 p-3 bg-grey common-height"},[a("div",{staticClass:"accordion custom-accr"},[a("div",{staticClass:"mb-1 w-100 pr-1"},[a("div",{staticClass:"input-group customsearchbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"form-control searchdashboardfilter border-right-0",attrs:{type:"text",Placeholder:t.$t("Search"),autocomplete:"off"},domProps:{value:t.searchQuery},on:{input:[function(a){a.target.composing||(t.searchQuery=a.target.value)},function(a){return t.handleSearch(a)}]}}),t._m(1)])]),a("div",{staticClass:"accordion md-accordion left-filter db_widgetnew",staticStyle:{"max-height":"550px","overflow-y":"auto"},attrs:{id:"accordionEx1"}},[a("div",{staticClass:"card-panel"},t._l(t.moduleList,(function(e,s){return a("div",{key:s,staticClass:"card border-0"},[a("div",{staticClass:"card-header p-0",attrs:{role:"tab",id:"MainFunction"+s}},[a("h5",{staticClass:"mb-0",staticStyle:{"line-height":"normal"}},[a("a",{staticClass:"collapsed",attrs:{"data-toggle":"collapse","data-parent":"#accordionEx1",href:"#FucntionCollapse"+s,"aria-expanded":"true","aria-controls":"FucntionCollapse"+s}},[a("em",{staticClass:"fa fa-angle-down rotate-icon mr-2",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"float-left"},[t._v(" "+t._s(t.$t(e.MODULE_DISPLAY_NAME)))])])])]),a("div",{staticClass:"collapse multi-collapse",attrs:{id:"FucntionCollapse"+s,role:"tabpanel","aria-labelledby":"MainFunction"+s,"data-parent":"#accordionEx1"}},[a("div",{staticClass:"card-body p-0 customScrollForLeftBar llt py-2 pl-2 border"},[a("div",{staticClass:"form-group"},[a("ul",{staticClass:"nav nav-pills flex-column left-tab responivecustomtab lefttabiconfix cursor-move",staticStyle:{"max-height":"470px",overflow:"auto",display:"block"}},[a("draggable",{attrs:{group:"contacts"},on:{end:function(a){return t.onDragEnd(t.event,e.data)}},model:{value:e.data,callback:function(a){t.$set(e,"data",a)},expression:"item.data"}},t._l(e.data,(function(e,s){return a("li",{key:s,staticClass:"position-relative"},[a("em",{class:null!=e.FAV_DASHBOARD_ID&&0==e.ROLE_APPLICABLE?"fa fa-check text-success pr-1":"fa fa-check text-success pr-1 invisible"}),t._v(" "+t._s(t.$t(e.DISPLAY_NAME))+" ")])})),0)],1)])])])])})),0)])])])])]):t._e()])])])],1)},i=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-md-12 p-0"},[a("div",{staticClass:"theme-primary partition"},[a("span",{staticClass:"p-name text-white"},[t._v("Customize Shortcuts")])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"input-group-append"},[a("span",{staticClass:"input-group-text bg-transparent bg-white border-left-0"},[a("i",{staticClass:"fa fa-search"})])])}],o=(e("14d9"),e("be92")),r=e("9769"),n=e("b0ac"),l=e("b76a"),c=e.n(l);const d="https://cloudnewui.talygen.com",u="https://cloud.talygen.com",p="true";var h={components:{draggable:c.a},data(){return{MenuData:[],MenuDataList:[],MaxLoop:5,ModuleName:"",MenuDataGroupBy:[],MenuCountmodule:0,TotalCount:0,TotalMenuCount:0,Languages:[],SelectedLanguage:"English",SelectedMenuType:"Top",IsEdit:!1,isLoading:!1,moduleList:[],activeAccordion:-1,UserType:"",searchQuery:"",tmpsortedModules:[],IsEditShow:!1,ChangeSizeOfBox:!1,IsShowModuleList:!1,IsShowModuleNameBorder:!0,IsShowModuleNameEdit:!1,IsAddCursorClass:!1}},setup(){const t=Object(n["b"])(),{GetUserInfo:a}=Object(o["d"])(t);return{GetUserInfo:a}},created:function(){this.UserType=this.GetUserInfo.UserType;const{SetModuleId:t}=Object(n["a"])();t(0),this.GetFavDashBoardData(),this.GetModuleListData()},methods:{onDragEnd:function(t,a){return"StopDragfield"==t.item.id||t.preventDefault(),!0},handleSearch(t){var a=this;let e=a.searchQuery.toLowerCase();const s=(t,a)=>t.filter(t=>t[a].toLowerCase().includes(e));!t||"Backspace"===t.key&&"Backspace"!==t.key?a.moduleList=a.tmpsortedModules:a.moduleList=s(a.tmpsortedModules,"MODULE_DISPLAY_NAME")},CancelEditDashBoardData(){var t=this;t.IsEdit=!1,t.ChangeSizeOfBox=!1,t.IsShowModuleList=!1,t.IsShowModuleNameBorder=!0,t.IsShowModuleNameEdit=!1,t.IsAddCursorClass=!1,t.IsEditShow=!1},toggleCollapse(t){this.activeAccordion===t?this.activeAccordion=-1:this.activeAccordion=t},filteredGroups(t){return this.moduleList.filter(a=>a.MODULE_ID===t&&a.USER_TYPE_NAME===this.UserType)},EditDashBoardData(){var t=this;t.IsEdit=!0,t.ChangeSizeOfBox=!0,t.IsShowModuleList=!0,t.IsShowModuleNameBorder=!1,t.IsShowModuleNameEdit=!0,t.IsAddCursorClass=!0,t.IsEditShow=!0},async GetModuleListData(){var t=this;t.isLoading=!0,r["a"].GetCustomizeShortcutMenu().then(a=>{t.isLoading=!1,"Success"==a.data.status&&(t.moduleList=a.data.result.ListingData,t.tmpsortedModules=a.data.result.ListingData),t.MenuDataGroupBy.forEach((a,e)=>{a.GroupData.forEach((a,e)=>{var s=a.PRIVILEGE_ID;t.moduleList.forEach((t,a)=>{t.data.forEach((a,e)=>{t.data=t.data.filter(t=>t.PRIVILEGE_ID!==s)})})})})})},async GetFavDashBoardData(){var t=this;t.isLoading=!0,r["a"].GetFavDashboard().then(a=>{if(t.isLoading=!1,"Success"==a.data.status){t.MenuData=a.data.result.DATA;var e=[];if(null!=t.MenuData&&t.MenuData.length>0){var s=t.MenuData[0].FAV_DASHBOARD_GROUP_ID;$.each(t.MenuData,$.proxy((function(a,i){s=i.FAV_DASHBOARD_GROUP_ID;var o=$.grep(e,(function(t,a){return t.GroupId==s}));if(0==o.length){var r=$.grep(t.MenuData,(function(t,a){return t.FAV_DASHBOARD_GROUP_ID==s}));if(r.length>0){var n={GroupId:s,GroupName:r[0].GROUP_NAME,GroupData:r};e.push(n)}}}),this)),t.MenuDataGroupBy=e}}})},getRootLink:function(t){var a="";return"true"==p?t&&(a=null!=t.ROOT_URL&&t.ROOT_URL.toLowerCase()==d.toLowerCase()?"CURRENT":null!=t.ROOT_URL?t.ROOT_URL:u):a="CURRENT",a},DeleteSelectedData:function(t){var a=this;a.confirmR(a.$t("ConfirmModalDelete"),!0,a.$t("Confirm"),(function(){let e=t.DISPLAY_NAME;a.MenuDataGroupBy.forEach(t=>{t.GroupData=t.GroupData.filter(t=>t.DISPLAY_NAME!==e)}),a.moduleList.forEach((a,e)=>{a.MODULE_DISPLAY_NAME==t.MODULE_NAME&&a.data.push(t)})}))},SaveData:function(){var t=this;let a=[];t.MenuDataGroupBy.forEach((t,e)=>{let s={GroupIndex:e+1,GroupName:t.GroupName,Data:[]};t.GroupData.forEach((t,a)=>{s.Data.push({id:t.PRIVILEGE_ID,order:a})}),a.push(s)});var e=JSON.stringify(a);r["a"].SaveShortcutData(e).then((function(a){null!=a.data&&(t.ShowAlert(t.$t("InterviewStageAdded",{0:t.$t("Record")}),"warning",!0,t.$t("Alert")),t.IsEdit=!1,t.ChangeSizeOfBox=!1,t.IsShowModuleList=!1,t.IsShowModuleNameBorder=!0,t.IsShowModuleNameEdit=!1,t.IsAddCursorClass=!1,t.IsEditShow=!1,t.GetFavDashBoardData(),t.GetModuleListData())}))},AddNewData:function(){this.MenuDataGroupBy.push({GroupId:1,GroupName:"",GroupData:[]})},DeleteObjectData:function(t){var a=this;let e=t.GroupId;const s=a.MenuDataGroupBy.findIndex(t=>t.GroupId==e);-1!==s&&a.MenuDataGroupBy.splice(s,1),console.log("vm.MenuDataGroupBy",a.MenuDataGroupBy)}}},f=h,m=(e("fddf"),e("2877")),D=Object(m["a"])(f,s,i,!1,null,null,null);a["default"]=D.exports},"98cf":function(t,a,e){var s=e("819e");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var i=e("499e").default;i("7355d2ec",s,!0,{sourceMap:!1,shadowMode:!1})},fddf:function(t,a,e){"use strict";e("98cf")}}]);
//# sourceMappingURL=chunk-d119dd94.js.map