(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a3128"],{"012c":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t._self._c;t._self._setupProxy;return a("div",[a("section",{staticClass:"page-action"},[a("div",{staticClass:"container-fluid p-0"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 padding-t_8"},[a("div",{staticClass:"theme-primary partition-full"},[a("span",{staticClass:"p-name text-white"},[t._v(t._s(t.$t("MyShortcuts")))]),a("span",{staticClass:"p-actions float-end mydbsize"},["CL"==t.GetUserInfo.UserType?a("RouterLink",{staticClass:"p-action-btn text-white dash",attrs:{to:"/User/Dashboard",checkPrivilege:"Yes"}},[a("em",{staticClass:"fa fa-home"}),a("br"),t._v(t._s(t.$t("Home"))+" ")]):a("RouterLink",{staticClass:"p-action-btn text-white dash",attrs:{to:"/Dashboard",checkPrivilege:"Yes"}},[a("em",{staticClass:"fa fa-home"}),a("br"),t._v(t._s(t.$t("Home"))+" ")]),t._m(0),t.IsEdit?a("a",{staticClass:"p-action-btn text-white",attrs:{href:"javascript:;",id:"ancSaveMyDashboard",title:"@Resources.Save"}},[a("em",{staticClass:"fa fa-save",attrs:{"aria-hidden":"true"}}),a("br"),t._v("@Resources.Save")]):t._e(),t.IsEdit?a("a",{staticClass:"p-action-btn text-white",attrs:{href:"javascript:;",id:"ancCancelMyDashboard",title:"@Resources.Cancel"},on:{click:function(a){return t.CancelEditDashBoardData()}}},[a("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}}),a("br"),t._v("@Resources.Cancel")]):t._e(),t.IsEdit?t._e():a("a",{staticClass:"p-action-btn text-white",attrs:{href:"javascript:;",checkPrivilege:"Yes"},on:{click:function(a){return t.EditDashBoardData()}}},[a("em",{staticClass:"fa fa-pencil"}),a("br"),t._v(t._s(t.$t("Edit"))+" ")])],1)])])])])]),a("section",{staticClass:"main-content"},[a("div",{staticClass:"container-fluid p-0"},[a("div",{staticClass:"border p-3 form-minheight d-flex iPadcontroldiv"},[a("div",{staticClass:"w-100 float-left leftsideicon"},[a("div",{staticClass:"row"},t._l(t.MenuDataGroupBy,(function(s,e){return a("div",{staticClass:"w-100 clsdashboardgroup p-0"},[a("div",{staticClass:"clearfix"}),a("div",{staticClass:"col-lg-12 mb-0 float-left px-3"},[a("div",{staticClass:"heading-border"},[a("h5",{staticClass:"h5"},[a("span",{staticClass:"spngropuname"},[t._v(" "+t._s(s.GroupName)+" "),t._m(1,!0)]),a("input",{staticClass:"form-control mb-1 txtgropuname",staticStyle:{display:"none"},attrs:{type:"text",maxlength:"100"},domProps:{value:s.GroupName}}),e>0?a("a",{staticClass:"delete-group d-none",attrs:{"data-id":"@group.First().FAV_DASHBOARD_GROUP_ID",title:"@Resources.Delete"}},[a("em",{staticClass:"text-secondary fa fa-times-circle"})]):t._e()])])]),a("div",{staticClass:"clearfix"}),a("ul",{staticClass:"shortcuts-menu pb-3 connectedSortable"},t._l(s.GroupData,(function(s){return a("li",{staticClass:"position-relative"},[t._m(2,!0),a("a",{staticClass:"short-menu-item d-none",attrs:{onmousedown:"return false;","data-id":"@item.PRIVILEGE_ID","data-fav_id":"@item.FAV_DASHBOARD_ID","data-order":"@item.DISPLAY_ORDER","data-displayName":"@item.DISPLAY_NAME","data-toggle":"tooltip",title:"@Resources.ResourceManager.GetString(item.DISPLAY_NAME)","data-placement":"bottom"}},[a("span",{staticClass:"left-icon-m"},[a("em",{class:"fa "+s.PRIVILEGE_ICON})]),a("span",{staticClass:"short-item-name"},[t._v(t._s(t.$t(s.DISPLAY_NAME)))])]),a("RouterLink",{staticClass:"short-menu-item",attrs:{to:`/${s.MODULE_NAME}/${s.PRIVILEGE_NAME}?reqfrom=${s.MODULE_MASTER_ID}`,checkPrivilege:"Yes"}},[a("span",{staticClass:"left-icon-m"},[a("em",{class:"fa "+s.PRIVILEGE_ICON})]),a("span",{staticClass:"short-item-name"},[t._v(t._s(t.$t(s.DISPLAY_NAME)))])])],1)})),0)])})),0)]),t._m(3)])])])])},i=[function(){var t=this,a=t._self._c;t._self._setupProxy;return a("a",{staticClass:"p-action-btn text-white d-none",attrs:{href:"javascript:;",id:"ancAddGroupMyDashboard",title:"@Resources.AddNew @Resources.Group"}},[a("em",{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true"}}),a("br"),t._v("@Resources.AddNew @Resources.Group")])},function(){var t=this,a=t._self._c;t._self._setupProxy;return a("a",{staticClass:"editgroupname d-none",attrs:{title:"@Resources.Edit",href:"javascript:;"}},[a("em",{staticClass:"fa fa-pencil pl-2 text-success"})])},function(){var t=this,a=t._self._c;t._self._setupProxy;return a("a",{staticClass:"delete-dashboard d-none",attrs:{href:"javascript:;",title:"@Resources.Delete"}},[a("em",{staticClass:"text-secondary fa fa-times-circle"})])},function(){var t=this,a=t._self._c;t._self._setupProxy;return a("div",{staticClass:"w-25 float-left d-none rightsideicon"},[a("div",{staticClass:"left-menu-tab ml-3 mr-3",staticStyle:{"max-width":"96%"}},[a("div",{staticClass:"col-md-12 p-0"},[a("div",{staticClass:"theme-primary partition"},[a("span",{staticClass:"p-name text-white"},[t._v("Customize Shortcuts")])])]),a("div",{staticClass:"w-100 p-3 bg-grey common-height"})])])}],r=(s("14d9"),s("be92")),n=s("9769"),o=s("b0ac");const c={data(){return{GetUserInfo:Object(r["d"])(Object(o["b"])()),MenuData:[],MenuDataList:[],MaxLoop:5,ModuleName:"",MenuDataGroupBy:[],MenuCountmodule:0,TotalCount:0,TotalMenuCount:0,Languages:[],SelectedLanguage:"English",SelectedMenuType:"Top",IsEdit:!1}},created:function(){const{SetModuleId:t}=Object(o["a"])();t(0),this.GetFavDashBoardData()},methods:{CancelEditDashBoardData(){this.IsEdit=!1},EditDashBoardData(){this.IsEdit=!0,$(".leftsideicon").find(".txtgropuname").closest(".heading-border").addClass("editgroup"),$(".leftsideicon").addClass("w-75").removeClass("w-100"),$(".rightsideicon").removeClass("d-none"),$("#ancSaveMyDashboard, #ancCancelMyDashboard, #ancAddGroupMyDashboard").removeClass("d-none"),$(".spngropuname").attr("contenteditable",!0).hide(),$(".txtgropuname").show(),$(".spngropuname").off("keypress").on("keypress",(function(){return this.innerText.length<=100})),$(".left-icon-m").addClass("cursor-move").off("click").on("click",(function(){return!1})),$(".shortcuts-menu a:not(.delete-dashboard)").off("click").on("click",(function(){return!1})),$(".shortcuts-menu a:not(.delete-group)").off("click").on("click",(function(){return!1}))},async GetFavDashBoardData(){var t=this;n["a"].GetFavDashboard().then(a=>{if("Success"==a.data.status){t.MenuData=a.data.result.DATA;var s=[];if(null!=t.MenuData&&t.MenuData.length>0){var e=t.MenuData[0].FAV_DASHBOARD_GROUP_ID;$.each(t.MenuData,$.proxy((function(a,i){e=i.FAV_DASHBOARD_GROUP_ID;var r=$.grep(s,(function(t,a){return t.GroupId==e}));if(0==r.length){var n=$.grep(t.MenuData,(function(t,a){return t.FAV_DASHBOARD_GROUP_ID==e}));if(n.length>0){var o={GroupId:e,GroupName:n[0].GROUP_NAME,GroupData:n};s.push(o)}}}),this)),this.MenuDataGroupBy=s}}})}}};var l=Object.assign(c,{__name:"Dashboard",props:{msg:{type:String,required:!0}},setup(t){return{__sfc:!0}}}),d=l,u=s("2877"),p=Object(u["a"])(d,e,i,!1,null,null,null);a["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0a3128.js.map