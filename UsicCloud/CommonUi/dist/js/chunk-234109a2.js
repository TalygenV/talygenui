(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-234109a2"],{"0cb2":function(t,e,a){"use strict";var i=a("e330"),n=a("7b0b"),r=Math.floor,s=i("".charAt),l=i("".replace),o=i("".slice),c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,d=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,a,i,u,f){var p=a+t.length,h=i.length,g=d;return void 0!==u&&(u=n(u),g=c),l(f,g,(function(n,l){var c;switch(s(l,0)){case"$":return"$";case"&":return t;case"`":return o(e,0,a);case"'":return o(e,p);case"<":c=u[o(l,1,-1)];break;default:var d=+l;if(0===d)return n;if(d>h){var f=r(d/10);return 0===f?n:f<=h?void 0===i[f-1]?s(l,1):i[f-1]+s(l,1):n}c=i[d-1]}return void 0===c?"":c}))}},"271a":function(t,e,a){"use strict";var i=a("cb2d"),n=a("e330"),r=a("577e"),s=a("d6d6"),l=URLSearchParams,o=l.prototype,c=n(o.getAll),d=n(o.has),u=new l("a=1");!u.has("a",2)&&u.has("a",void 0)||i(o,"has",(function(t){var e=arguments.length,a=e<2?void 0:arguments[1];if(e&&void 0===a)return d(this,t);var i=c(this,t);s(e,1);var n=r(a),l=0;while(l<i.length)if(i[l++]===n)return!0;return!1}),{enumerable:!0,unsafe:!0})},"44e7":function(t,e,a){"use strict";var i=a("861d"),n=a("c6b6"),r=a("b622"),s=r("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[s])?!!e:"RegExp"===n(t))}},5494:function(t,e,a){"use strict";var i=a("83ab"),n=a("e330"),r=a("edd0"),s=URLSearchParams.prototype,l=n(s.forEach);i&&!("size"in s)&&r(s,"size",{get:function(){var t=0;return l(this,(function(){t++})),t},configurable:!0,enumerable:!0})},"5b81":function(t,e,a){"use strict";var i=a("23e7"),n=a("c65b"),r=a("e330"),s=a("1d80"),l=a("1626"),o=a("7234"),c=a("44e7"),d=a("577e"),u=a("dc4a"),f=a("90d8"),p=a("0cb2"),h=a("b622"),g=a("c430"),v=h("replace"),w=TypeError,m=r("".indexOf),b=r("".replace),C=r("".slice),L=Math.max,U=function(t,e,a){return a>t.length?-1:""===e?a:m(t,e,a)};i({target:"String",proto:!0},{replaceAll:function(t,e){var a,i,r,h,x,y,A,_,M,$=s(this),F=0,S=0,k="";if(!o(t)){if(a=c(t),a&&(i=d(s(f(t))),!~m(i,"g")))throw w("`.replaceAll` does not allow non-global regexes");if(r=u(t,v),r)return n(r,t,$,e);if(g&&a)return b(d($),t,e)}h=d($),x=d(t),y=l(e),y||(e=d(e)),A=x.length,_=L(1,A),F=U(h,x,0);while(-1!==F)M=y?d(e(x,F,h)):p(x,h,F,[],void 0,e),k+=C(h,S,F)+M,S=F+A,F=U(h,x,F+_);return S<h.length&&(k+=C(h,S)),k}})},6838:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",[e("loader",{attrs:{"is-visible":t.isLoading}}),e("section",{staticClass:"page-action"},[e("div",{staticClass:"container-fluid p-0"},[t.LoadingMsg?e("div",{staticStyle:{position:"absolute",top:"30%","z-index":"9999999",left:"0",right:"0"}},[e("div",{staticClass:"alert alert-primary mx-auto w-30 text-center",attrs:{role:"alert"}},[t._v(t._s(t.$t("FileDownloadMsg"))),e("em",{staticClass:"fa fa-download ml-3 font-18"})])]):t._e(),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 padding-t_8"},[e("div",{staticClass:"theme-primary partition p-actions-expand tablehead"},[e("span",{staticClass:"p-name text-white"},[t._v(t._s(t.$t("UserManual")))]),e("router-link",{attrs:{to:"/Help/HelpAndGuide"}},[e("span",{staticClass:"p-actions"},[e("a",{staticClass:"p-action-btn text-white float-right",attrs:{title:"","data-toggle-tooltip":"tooltip","data-original-title":"Back"}},[e("em",{staticClass:"fa fa-angle-double-left"}),e("br"),t._v(t._s(t.$t("Back")))])])]),e("span",{staticClass:"p-actions float-right",on:{click:function(e){return t.DownloadZipFile(t.UrlList)}}},[e("a",{staticClass:"p-action-btn text-white float-right",attrs:{title:"","data-toggle-tooltip":"tooltip","data-original-title":"Download"}},[e("em",{staticClass:"fa fa-arrow-down"}),e("br"),t._v(t._s(t.$t("Download")))])])],1)])])]),e("div",{staticClass:"row control_helpguide",staticStyle:{"margin-top":"10px"}},t._l(t.UserManualList,(function(a){return e("div",{key:a,staticClass:"col-md-4 mb-3"},[e("div",{staticClass:"border py-2 pr-3"},[e("div",{staticClass:"row d-flex align-items-center"},[e("div",{staticClass:"col-md-2 p-0"},[e("div",{staticClass:"text-center font-36 geraldine",domProps:{innerHTML:t._s(a.icon)}})]),e("div",{staticClass:"col-md-8 p-0",attrs:{id:"Userlist"}},[e("p",{staticClass:"card-text font-14"},[t._v(t._s(a.ModuleName))]),e("div",{staticClass:"description-hover",attrs:{title:t.GetHtmlContent(a.ArticleContent)}},[e("span",{staticClass:"card-text font-12 description-text",domProps:{innerHTML:t._s(t.TruncateStr(a.ArticleContent,100))}})])]),e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"text-right equator-color"},[e("a",{attrs:{href:"#"}},[e("em",{staticClass:"fa fa-download font-weight-light text-primary font-28",attrs:{"aria-hidden":"true"},on:{click:function(e){return t.DownloadSingleFile(a.FileUrl,a.Articlename)}}})])])])])])])})),0),t.IsDataNotFoundShow?e("div",[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"border text-center text-danger no-record mt-4 p-2"},[t._v(" "+t._s(t.$t("No_Record_Found"))+" ")])])]):t._e()])],1)},n=[],r=(a("5b81"),a("14d9"),a("88a7"),a("271a"),a("5494"),a("9769")),s=a("be92"),l=a("b0ac");const{GetUserInfo:o}=Object(s["d"])(Object(l["b"])());var c={name:"UserManual",data(){return{UserManualList:[],UrlList:[],isLoading:!1,UserManualDescription:"",UserManualIcons:"",IsDataNotFoundShow:!1,LoadingMsg:!1}},created:async function(){await this.BindUserManualList()},methods:{TruncateStr(t,e){var a=""+t;if(null!=a)return a.length<=e?t:a.substring(0,e)+"..."},BindUserManualList:async function(){var t=this;t.isLoading=!0;var e=`search=&userType=${o.value.UserType}&articleType=UserManual&moduleId=`;await r["a"].GetArticleList(e).then((function(e){null!=e.data&&e.data.length>0?(e.data.forEach((e,a)=>{let i={Articlename:e.articleName,ArticleCategoryName:e.articleCatagoryName,ArticleId:e.articleId,FileUrl:e.fileUrl,ArticleContent:e.articlecontent.includes("\r\n")?e.articlecontent.replaceAll("\r\n",""):e.articlecontent,icon:'<em class="fa '+e.Icon+'" aria-hidden="true"></em>',ModuleName:e.ModuleName};t.UserManualList.push(i)}),e.data.forEach((e,a)=>{null!=e.fileUrl&&""!=e.fileUrl&&t.UrlList.push(e.fileUrl)}),t.isLoading=!1,t.IsDataNotFoundShow=!1):(t.isLoading=!1,t.IsDataNotFoundShow=!0),t.isLoading=!1}))},GetHtmlContent:function(t){return t.split("<p>")[1].split("</p>")[0]},DownloadSingleFile:function(t,e){var a=this;if(a.isLoading=!0,null==t||""==t)a.isLoading=!1,a.ShowAlert(a.$t("NoFileUrl"),"warning",!0,a.$t("Alert"));else{var i=`FileUrl=${t}&ModuleId=`;r["a"].DownloadSingleFile(i).then(t=>{if(null!=t.data){var i=window.URL.createObjectURL(new Blob([t.data])),n=document.createElement("a");n.href=i,n.setAttribute("download",e+".pdf"),document.body.appendChild(n),n.click(),a.isLoading=!1}else a.isLoading=!1,a.ShowAlert(a.$t("FileNotDownload"),"warning",!0,a.$t("Alert"))})}},DownloadZipFile:function(t){var e=this;if(e.isLoading=!0,null==t||""==t)e.isLoading=!1,e.ShowAlert(e.$t("NoFileUrl"),"warning",!0,e.$t("Alert"));else{var a="UserManual.zip",i="Files="+t;r["a"].DownloadZipFile(i).then(t=>{if(null!=t.data){var i=window.URL.createObjectURL(new Blob([t.data])),n=document.createElement("a");n.href=i,n.setAttribute("download",a),document.body.appendChild(n),n.click(),e.isLoading=!1}else e.isLoading=!1,e.ShowAlert(e.$t("FileNotDownload"),"warning",!0,e.$t("Alert"))})}}}},d=c,u=a("2877"),f=Object(u["a"])(d,i,n,!1,null,null,null);e["default"]=f.exports},"88a7":function(t,e,a){"use strict";var i=a("cb2d"),n=a("e330"),r=a("577e"),s=a("d6d6"),l=URLSearchParams,o=l.prototype,c=n(o.append),d=n(o["delete"]),u=n(o.forEach),f=n([].push),p=new l("a=1&a=2&b=3");p["delete"]("a",1),p["delete"]("b",void 0),p+""!=="a=2"&&i(o,"delete",(function(t){var e=arguments.length,a=e<2?void 0:arguments[1];if(e&&void 0===a)return d(this,t);var i=[];u(this,(function(t,e){f(i,{key:e,value:t})})),s(e,1);var n,l=r(t),o=r(a),p=0,h=0,g=!1,v=i.length;while(p<v)n=i[p++],g||n.key===l?(g=!0,d(this,n.key)):h++;while(h<v)n=i[h++],n.key===l&&n.value===o||c(this,n.key,n.value)}),{enumerable:!0,unsafe:!0})},"90d8":function(t,e,a){"use strict";var i=a("c65b"),n=a("1a2d"),r=a("3a9b"),s=a("ad6d"),l=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in l||n(t,"flags")||!r(l,t)?e:i(s,t)}},ad6d:function(t,e,a){"use strict";var i=a("825a");t.exports=function(){var t=i(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e}},d6d6:function(t,e,a){"use strict";var i=TypeError;t.exports=function(t,e){if(t<e)throw i("Not enough arguments");return t}},edd0:function(t,e,a){"use strict";var i=a("13d2"),n=a("9bf2");t.exports=function(t,e,a){return a.get&&i(a.get,e,{getter:!0}),a.set&&i(a.set,e,{setter:!0}),n.f(t,e,a)}}}]);
//# sourceMappingURL=chunk-234109a2.js.map