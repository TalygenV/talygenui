(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-89b94f24"],{"3c50":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t._self._c;return a("div",[a("loader",{attrs:{"is-visible":t.isLoading}}),a("section",{staticClass:"page-action"},[a("div",{staticClass:"container-fluid p-0"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 padding-t_8"},[a("div",{staticClass:"theme-primary partition p-actions-expand tablehead"},[a("span",{staticClass:"p-name text-white"},[t._v(t._s(t.$t("VideoTutorials")))]),a("router-link",{attrs:{to:"/Help/HelpAndGuide"}},[a("span",{staticClass:"p-actions"},[a("a",{staticClass:"p-action-btn text-white float-right",attrs:{title:"","data-toggle-tooltip":"tooltip","data-original-title":"Back"}},[a("em",{staticClass:"fa fa-angle-double-left"}),a("br"),t._v(t._s(t.$t("Back")))])])])],1)])])]),a("div",{staticClass:"left-menu-tab new_tab nosrcoll"},[a("div",{staticClass:"mt-2",staticStyle:{"max-height":"calc(100vh - 2px)"},attrs:{id:"divscrollsetuptabs"}},[a("ul",{staticClass:"nav nav-pills flex-column left-tab responivecustomtab lefttabiconfix",attrs:{id:"upper",role:"tablist"}},t._l(t.Module,(function(e){return a("li",{key:e,staticClass:"nav-item",on:{click:function(a){return t.VideoTutorialListPerModule(e.ModuleId)}}},[a("a",{staticClass:"nav-link left-menu",class:{active:t.SelectModuleIdd==e.ModuleId},staticStyle:{cursor:"pointer"},attrs:{checkPrivilege:"Yes","data-toggle":"tab",href:"#"}},[a("span",{domProps:{innerHTML:t._s(e.icon)}}),t._v(" "+t._s(e.ModuleName)+" ")])])})),0)])]),a("div",{staticClass:"right-content"},[a("div",{staticClass:"col-md-12 p-0 mt-2 float-left"},[a("div",{staticClass:"tab-content"},[t._m(0),a("div",{staticClass:"tab-pane call-detail fade p-0 active show border pb-3"},[a("section",{staticClass:"page-action w-100"},[a("div",{staticClass:"container-fluid p-0"},[a("div",{staticClass:"col-md-12 py-0 px-2 mt-2 float-left searchpanel tablehead search float-left"},[a("div",{staticClass:"col-12 p-0"},[t.IsDataShow?a("div",{staticClass:"col-lg-12 float-left p-0"},[a("div",{staticClass:"col-lg-12 float-left mt-3 mb-3 p-0"},[a("div",{staticClass:"heading-border"},[a("h5",{staticClass:"h5"},[a("span",[t._v(t._s(this.SelectedModuleName))])])])]),a("div",{staticClass:"col-lg-12 float-left mt-3 mb-3 p-0"},[a("div",{staticClass:"vidsbase_panel"},[a("ul",t._l(t.VideoTutorialPerModuleList,(function(e){return a("li",{key:e},[a("div",{staticClass:"card-box screenshot p-0"},[a("div",{staticClass:"card-detail-main detail_bx"},[a("div",{staticClass:"text-center pb-2 float-left w-100 viewdetails",attrs:{screenshotid:"5501"}},[a("iframe",{attrs:{id:"MyVideo"+e.articleId,width:"258",height:"206",src:t.embeddedUrl(e.fileUrl,e.videoarticletype),frameborder:"0",allowfullscreen:""}})]),a("div",{staticClass:"time_clk font-14"},[a("p",[t._v(t._s(e.articleName))])]),a("hr",{staticClass:"my-2"}),a("span",{staticClass:"viewdetails mt-0 font-14",attrs:{flagtype:"unflagged",href:"javascript:void(0);",screenshotid:"5501"}},[t._v("4 mins...")])])])])})),0)])])]):t._e(),1==t.IsDataNotFoundShow?a("div",{staticClass:"col-lg-12 float-left mt-0 mb-3 p-0"},[a("div",{staticClass:"border text-center text-danger no-record mt-4 p-2"},[t._v(" No Record Found ")])]):t._e()])])])])])])])])])],1)},i=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"expand-list"},[a("a",{staticClass:"expand-list-btn justify-content-center align-items-center",attrs:{href:"javascript:;"}},[a("em",{staticClass:"icon-solid arrow-solid-left text-white",staticStyle:{"font-size":"9pt"}})])])}],l=(e("14d9"),e("9769")),o=e("a9c1"),d=e("9c9c"),c=e("be92"),r=e("b0ac");const{GetUserInfo:n}=Object(c["d"])(Object(r["b"])());var u={components:{Search:o["a"],VamVideo:d["a"]},name:"VideoTutorials",data(){return{Module:[],VideoTutorialPerModuleList:[],IsDataNotFoundShow:!1,PlaceHolderText:"Search by Keyword",isLoading:!1,SelectedModuleName:null,IsDataShow:!1,DefaultModuleIdd:0,SelectModuleIdd:""}},created:async function(){await this.ModuleList(),await this.VideoTutorialListPerModule(this.DefaultModuleIdd)},methods:{ModuleList:async function(){var t=this;t.isLoading=!0,await l["a"].GetModulesSubModules().then((function(a){null!=a.data&&void 0!=a.data&&a.data.Data.length>0&&null!=a.data.Data?(a.data.Data.forEach((a,e)=>{let s={ModuleId:a.ModuleId,ModuleName:a.ModuleName,icon:'<em class="fa '+a.Icon+'" aria-hidden="true"></em>'};t.Module.push(s)}),t.DefaultModuleIdd=t.Module[0].ModuleId,t.isLoading=!1):t.isLoading=!1}))},VideoTutorialListPerModule:async function(t){var a=this;a.isLoading=!0;var e=`search=&userType=${n.value.UserType}&articleType=VideoArticle&moduleId=${t}`;await l["a"].GetArticleList(e).then((function(t){null!=t.data&&t.data.length>0?(a.VideoTutorialPerModuleList=t.data,a.SelectedModuleName=a.VideoTutorialPerModuleList[0].ModuleName,a.IsDataNotFoundShow=!1,a.IsDataShow=!0,a.isLoading=!1):(a.SelectedModuleName="",a.VideoTutorialPerModuleList=[],a.IsDataNotFoundShow=!0,a.IsDataShow=!1,a.isLoading=!1)})),a.SelectModuleIdd=t},embeddedUrl(t,a){if("UploadVideo"==a)return t;{const a=this.getYouTubeId(t);return"https://www.youtube.com/embed/"+a}},getYouTubeId(t){const a=/^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/,e=t.match(a);return e&&11===e[2].length?e[2]:"Invalid YouTube URL"}}},p=u,h=e("2877"),f=Object(h["a"])(p,s,i,!1,null,null,null);a["default"]=f.exports},a9c1:function(t,a,e){"use strict";var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"row mt-0"},[a("div",{staticClass:"col-10 float-left pr-1 pl-0"},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"form-control",attrs:{id:"searchText",placeholder:t.placeholder,type:"text",autocomplete:"on"},domProps:{value:t.searchText},on:{input:function(a){a.target.composing||(t.searchText=a.target.value)}}})])]),a("div",{staticClass:"col-2 float-left pl-0"},[a("div",{staticClass:"background-0 text-left form-check-inline"},[a("a",{staticClass:"btn btn-success mr-1 px-4",attrs:{href:"javascript:;","data-toggle-tooltip":"tooltip","data-original-title":"Search"},on:{click:t.SearchData}},[a("em",{staticClass:"fa fa-search"})]),a("a",{staticClass:"btn btn-danger clearsearchtext px-4",attrs:{id:"Clear",href:"javascript:;",title:"","data-toggle-tooltip":"tooltip","data-original-title":"Clear"},on:{click:t.ClearData}},[a("em",{staticClass:"fa fa-refresh"})])])])])},i=[],l={data(){return{searchText:""}},props:{placeholder:{type:String,required:!0},GetSearchDataModuleWise:{type:String},GetModuleId:{type:Number}},methods:{SearchData:function(){this.$emit("SearchData",this.searchText)},ClearData:function(){this.searchText="",void 0!=this.GetSearchDataModuleWise?this.$parent.ArticleListPerModule(this.GetModuleId):(this.$parent.GlobalSearchList={},this.$parent.IsMainDataShow=!0)}}},o=l,d=e("2877"),c=Object(d["a"])(o,s,i,!1,null,null,null);a["a"]=c.exports}}]);
//# sourceMappingURL=chunk-89b94f24.js.map