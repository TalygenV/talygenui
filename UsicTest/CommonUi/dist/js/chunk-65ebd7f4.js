(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65ebd7f4"],{2202:function(t,a,e){"use strict";e("d483")},"456a":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".ActiveList{max-height:400px;overflow-y:auto;position:relative}#myImg{border-radius:5px;cursor:pointer;transition:.3s;width:50%;min-width:50%;margin:10px 0}#myImg:hover{background-color:#000;opacity:.5}",""]),t.exports=a},a9c1:function(t,a,e){"use strict";var i=function(){var t=this,a=t._self._c;return a("div",{staticClass:"row mt-0"},[a("div",{staticClass:"col-10 float-left pr-1 pl-0"},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"form-control",attrs:{id:"searchText",placeholder:t.placeholder,type:"text",autocomplete:"on"},domProps:{value:t.searchText},on:{input:function(a){a.target.composing||(t.searchText=a.target.value)}}})])]),a("div",{staticClass:"col-2 float-left pl-0"},[a("div",{staticClass:"background-0 text-left form-check-inline"},[a("a",{staticClass:"btn btn-success mr-1 px-4",attrs:{href:"javascript:;","data-toggle-tooltip":"tooltip","data-original-title":"Search"},on:{click:t.SearchData}},[a("em",{staticClass:"fa fa-search"})]),a("a",{staticClass:"btn btn-danger clearsearchtext px-4",attrs:{id:"Clear",href:"javascript:;",title:"","data-toggle-tooltip":"tooltip","data-original-title":"Clear"},on:{click:t.ClearData}},[a("em",{staticClass:"fa fa-refresh"})])])])])},l=[],s={data(){return{searchText:""}},props:{placeholder:{type:String,required:!0}},methods:{SearchData:function(){this.$emit("SearchData",this.searchText)},ClearData:function(){this.searchText="",this.$parent.GlobalSearchList={},this.$parent.IsMainDataShow=!0}}},o=s,c=e("2877"),n=Object(c["a"])(o,i,l,!1,null,null,null);a["a"]=n.exports},c41a:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t._self._c;return a("div",[a("loader",{attrs:{"is-visible":t.isLoading}}),a("section",{staticClass:"page-action"},[a("div",{staticClass:"container-fluid p-0"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 padding-t_8"},[a("div",{staticClass:"theme-primary partition p-actions-expand tablehead"},[a("span",{staticClass:"p-name text-white"},[t._v(t._s(t.$t("HelpArticles")))]),a("router-link",{attrs:{to:"/Help/HelpArticles"}},[a("span",{staticClass:"p-actions float-right"},[a("a",{staticClass:"p-action-btn text-white float-right",attrs:{title:"","data-toggle-tooltip":"tooltip","data-original-title":"Back"}},[a("em",{staticClass:"fa fa-angle-double-left"}),a("br"),t._v(t._s(t.$t("Back")))])])])],1)])])]),a("div",{staticClass:"left-menu-tab new_tab nosrcoll"},[a("div",{staticClass:"mt-2",staticStyle:{"max-height":"calc(100vh - 2px)"},attrs:{id:"divscrollsetuptabs"}},[a("ul",{staticClass:"nav nav-pills flex-column left-tab responivecustomtab lefttabiconfix",attrs:{id:"upper",role:"tablist"}},t._l(t.ModulesList,(function(e){return a("li",{key:e,staticClass:"nav-item",on:{click:function(a){return t.ArticleListPerModule(e.ModuleId)}}},[a("a",{staticClass:"nav-link left-menu",class:{active:t.SelectModuleId==e.ModuleId},staticStyle:{cursor:"pointer"},attrs:{checkPrivilege:"Yes"}},[a("span",{domProps:{innerHTML:t._s(e.icon)}}),t._v(t._s(e.ModuleName)+" ")])])})),0)])]),a("div",{staticClass:"right-content"},[a("div",{staticClass:"col-md-12 p-0"},[a("div",{staticClass:"tab-content"},[t._m(0),a("div",{staticClass:"tab-pane call-detail fade p-0 active show border pb-3"},[a("section",{staticClass:"page-action w-100"},[a("div",{staticClass:"container-fluid p-0"},[a("div",{staticClass:"col-md-12 p-0 mt-2"},[a("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 searchpanel tablehead search float-left"},[a("div",{staticClass:"w-100"},[a("div",{staticClass:"col-sm-12 col-md-12 col-lg-6 col-xl-6 float-left Search-panel float-left"},[a("Search",{attrs:{placeholder:t.PlaceHolderText},on:{SearchData:t.SearchData,ClearData:t.ClearData}})],1)])])])])]),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"w-100 float-left mt-2"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[t.IsDataShow?a("div",{staticClass:"col-lg-12 float-left mt-3 mb-3 p-0"},[a("div",{staticClass:"heading-border"},[a("h5",{staticClass:"h5"},[a("span",[t._v(t._s(this.ModuleName))])])])]):t._e(),t.IsDataShow?a("div",{staticClass:"accordion md-accordion left-filter",attrs:{id:"accordionEx1"}},[a("div",{staticClass:"card-panel float-left w-100",staticStyle:{"border-top":"1px solid #c7c7c7"}},t._l(t.HelpArticlePerModuleList,(function(e,i){return a("div",{key:i,staticClass:"card"},[a("div",{staticClass:"card-header",attrs:{role:"tab",id:"MainFunction"+e.articleId}},[a("h5",{staticClass:"mb-0"},[a("a",{class:{collapsed:t.activeAccordion!=e.articleId},attrs:{"data-toggle":"collapse","data-parent":"#accordionEx1",href:"#FunctionCollapse"+e.articleId,"aria-expanded":"true","aria-controls":"FunctionCollapse"+e.articleId}},[a("em",{staticClass:"fa fa-file-text-o",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"font-weight-bold"},[t._v(t._s(e.articleName))]),t.activeAccordion==e.articleId?a("em",{staticClass:"fa fa-angle-up rotate-icon",attrs:{"aria-hidden":"true"}}):a("em",{staticClass:"fa fa-angle-down rotate-icon",attrs:{"aria-hidden":"true"}})])])]),a("div",{class:{"collapse multi-collapse":t.activeAccordion!=e.articleId,show:t.activeAccordion==e.articleId},attrs:{id:"FunctionCollapse"+e.articleId,role:"tabpanel","aria-labelledby":"MainFunction"+e.articleId,"data-parent":"#accordionEx1"}},[a("div",{staticClass:"card-body p-0 customScrollForLeftBar llt",staticStyle:{"max-height":"300px"}},[a("div",{staticClass:"form-group"},[a("ul",{staticClass:"nav nav-pills flex-column left-tab responivecustomtab lefttabiconfix",staticStyle:{"max-height":"214px",overflow:"auto",display:"block"}},[a("li",{domProps:{innerHTML:t._s(e.articlecontent)}})])])])])])})),0)]):t._e(),t.IsDataNotFoundShow?a("div",{staticClass:"row"},[t._m(1)]):t._e()]),a("div",{staticClass:"left-menu-tab new_tab nosrcoll float-right"},[a("h6",[t._v("Related Content")]),a("ul",{staticClass:"nav nav-pills flex-column left-tab responivecustomtab lefttabiconfix rtfix"},[a("li",{staticClass:"nav-item font-14"},[a("a",{staticClass:"nav-link left-menu",on:{click:function(a){return t.DownloadUsermanual(t.ModuleId)}}},[a("em",{staticClass:"fa fa-download text-info",attrs:{"aria-hidden":"true"}}),t._v(" Download User Manual")])]),a("router-link",{attrs:{to:"/Help/VideoTutorials"}},[a("li",{staticClass:"nav-item font-14"},[a("a",{staticClass:"nav-link left-menu"},[a("em",{staticClass:"fa fa-youtube-play text-danger",attrs:{"aria-hidden":"true"}}),t._v(" Watch Video Tutorial")])])])],1),a("h6",{staticClass:"mt-3"},[t._v("Still need help?")]),a("ul",{staticClass:"nav nav-pills flex-column left-tab responivecustomtab lefttabiconfix rtfix"},[a("li",{staticClass:"nav-item font-14 p-2"},[t._v(" The Talygen Support Team is here for you."),a("br"),a("button",{staticClass:"btn btn-primary text-center text-white justify-center mt-2",attrs:{href:"javascript;;"},on:{click:t.OpenChat}},[t._v("Chat with us")])])])])])])])])])])]),t.IsLiveChatShowArticlePage?a("div",[t._m(2)]):t._e()])],1)},l=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"expand-list"},[a("a",{staticClass:"expand-list-btn justify-content-center align-items-center",attrs:{href:"javascript:;"}},[a("em",{staticClass:"icon-solid arrow-solid-left text-white",staticStyle:{"font-size":"9pt"}})])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"border text-center text-danger no-record mt-4 p-2"},[t._v(" No Record Found ")])])},function(){var t=this,a=t._self._c;return a("noscript",[a("a",{attrs:{href:"https://www.livechatinc.com/chat-with/13332330/",rel:"nofollow"}},[t._v("Chat with us")]),t._v(", powered by "),a("a",{attrs:{href:"https://www.livechatinc.com/?welcome",rel:"noopener nofollow",target:"_blank"}},[t._v("LiveChat")])])}],s=(e("14d9"),e("d9e2"),e("88a7"),e("271a"),e("5494"),e("9769")),o=e("825ae"),c=e("a9c1"),n=e("be92"),r=e("b0ac");const{GetUserInfo:d}=Object(n["d"])(Object(r["b"])());var u={name:"HelpArticlesPerModule",props:{IsLiveChatShowHelpGuidePage:Boolean},components:{VueEasyLightbox:o["a"],Search:c["a"]},data(){return{mImage:null,Modal1:null,Image1:null,Image2:null,captionText:null,ModulesList:[],HelpArticlePerModuleList:[],IsDataNotFountShow:!1,visible:!1,imgs:[],indexRef:0,PlaceHolderText:"Search by Keyword",IsLiveChatShowArticlePage:!1,ModuleId:0,isLoading:!1,Path:Boolean,Id:null,Module_Id:null,SelectModuleId:"",activeAccordion:null,DefaultModuleId:0,ModuleName:"",ArticlesContent:"",IsDataNotFoundShow:!1,IsDataShow:!0}},created:async function(){this.Id=this.$route.params.Id,this.Module_Id=this.$route.params.ModuleId,await this.ModuleList(),this.Module_Id>0?this.ArticleListPerModule(this.Module_Id):this.ArticleListPerModule(this.DefaultModuleId),this.activeAccordion=this.Id},methods:{OpenChat:function(){var t=this;t.IsLiveChatShowArticlePage=!0,setInterval((function(){window.__lc=window.__lc||{},window.__lc.license=13332330,function(t,a,e){function i(t){return l._h?l._h.apply(null,t):l._q.push(t)}var l={_q:[],_h:null,_v:"2.0",on:function(){i(["on",e.call(arguments)])},once:function(){i(["once",e.call(arguments)])},off:function(){i(["off",e.call(arguments)])},get:function(){if(!l._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",e.call(arguments)])},call:function(){i(["call",e.call(arguments)])},init:function(){var t=a.createElement("script");t.async=!0,t.type="text/javascript",t.src="https://cdn.livechatinc.com/tracking.js",a.head.appendChild(t)}};!t.__lc.asyncInit&&l.init(),t.LiveChatWidget=t.LiveChatWidget||l}(window,document,[].slice),setTimeout(()=>{function a(a){a.state,a.customerData.sessionVariables;LiveChatWidget.call("set_session_variables",{UserName:t.UserName,CompanyName:t.CompanyName,UserID:t.UserID,Email:t.EmailId})}LiveChatWidget.call("CompanyId",t.CompanyName),LiveChatWidget.call("UserID",t.UserID),LiveChatWidget.call("UserName",t.UserName),LiveChatWidget.call("EmailId",t.EmailId),LiveChatWidget.call("set_customer_name",t.UserName),LiveChatWidget.call("set_session_variables",{UserName:t.UserName,CompanyName:t.CompanyName,UserID:t.UserID,EmailId:t.EmailId}),LiveChatWidget.call("set_customer_name",t.UserName),LiveChatWidget.on("ready",a)},1e3)}),1e3)},ModuleList:async function(){var t=this;t.isLoading=!0,await s["a"].GetModulesSubModules().then((function(a){null!=a.data?(a.data.Data.forEach((a,e)=>{let i={ModuleId:a.ModuleId,ModuleName:a.ModuleName,icon:'<em class="fa '+a.Icon+'" aria-hidden="true"></em>'};t.ModulesList.push(i),t.isLoading=!1}),t.DefaultModuleId=t.ModulesList[0].ModuleId,t.isLoading=!1):t.isLoading=!1}))},ArticleListPerModule:function(t){var a=this;a.ModuleId=t,a.isLoading=!0;var e=`search=&userType=${d.value.UserType}&articleType=HelpArticle&moduleId=${t}`;s["a"].GetArticleList(e).then((function(t){t.data.length>0&&(a.HelpArticlePerModuleList=t.data,a.ModuleName=a.HelpArticlePerModuleList[0].ModuleName,a.isLoading=!1,a.IsDataShow=!0,a.IsDataNotFoundShow=!1),0==t.data.length&&(a.HelpArticlePerModuleList=[],a.ModuleName="",a.isLoading=!1,a.IsDataNotFoundShow=!0,a.IsDataShow=!1)})),a.SelectModuleId=t},DownloadUsermanual:function(t){var a="Document.pdf",e="FileUrl=&ModuleId="+t;s["a"].DownloadSingleFile(e).then(t=>{var e=window.URL.createObjectURL(new Blob([t.data])),i=document.createElement("a");i.href=e,i.setAttribute("download",a),document.body.appendChild(i),i.click()})},showSingle:function(){this.imgs="/Content/images/vidoe-thumb.png",this.visible=!0},onHide:function(){this.visible=!1},SearchData:function(t){var a=this;a.isLoading=!0;var e=`search=${t}&userType=${d.value.UserType}&articleType=HelpArticle&moduleId=`;s["a"].GetArticleList(e).then((function(t){t.data.length>0?(a.HelpArticlePerModuleList=t.data,a.isLoading=!1,a.IsDataShow=!0,a.IsDataNotFoundShow=!1):(t.data.length,a.isLoading=!1,a.IsDataShow=!1,a.IsDataNotFoundShow=!0)}))},GetArticleContent:function(t){var a=this;a.ArticlesContent="";var e=`ArticleId=${t}&articleType=HelpArticle`;s["a"].GetArticleDetailById(e).then((function(t){null!=t.data&&(a.ArticlesContent=t.data.article_content)}))}}},h=u,p=(e("2202"),e("2877")),f=Object(p["a"])(h,i,l,!1,null,null,null);a["default"]=f.exports},d483:function(t,a,e){var i=e("456a");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var l=e("499e").default;l("3782370a",i,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=chunk-65ebd7f4.js.map