(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78a56071"],{1007:function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,".button-container{border:none;border-radius:0;display:inline-block;padding:5px 15px}.button-container a{text-decoration:none;padding:5px 10px;margin:0 5px}.button-container a:hover{background-color:#f0f0f0}.labelalign{float:right}.text-primary{color:#fff}.card-boxes{max-width:300px}.productive-box{max-width:24%}.error-message{color:red}.left-rounded{border-top-left-radius:.25rem!important;border-bottom-left-radius:.25rem!important}.right-rounded{border-top-right-radius:.25rem!important;border-bottom-right-radius:.25rem!important}.red-orange-border{border-color:#f86245!important}.light-blue-border{border-color:#008ff5!important}.dark-blue-border{border-color:#3967d1!important}.vue-treeselect__placeholder.vue-treeselect-helper-zoom-effect-off{line-height:15px}.f12{font-size:12px}.line-height{line-height:12px}.fw-medium{font-weight:500}.dotted-border{border-bottom:2px dotted #dee2e6!important}.dark-blue-clr{color:#3967d1!important}",""]),t.exports=e},"110d":function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,'.overlay{background:rgba(0,0,0,.8);height:100%;width:100%;position:fixed;top:0;left:0;z-index:9999999;display:flex;justify-content:center;align-items:center}.lds-ring img{display:none!important}@keyframes load{0%{transform:translateX(40px)}50%{transform:translateX(-30px)}to{transform:translateX(40px)}}.lds-ring{top:50%;left:225px;transform:translate(-50%,-50%);width:50px;background:#3498db}.lds-ring,.lds-ring:after,.lds-ring:before{position:absolute;height:10px;border-radius:5px;animation:load 1.8s ease-in-out infinite}.lds-ring:after,.lds-ring:before{display:block;content:""}.lds-ring:before{top:-20px;left:10px;width:40px;background:#ef4836}.lds-ring:after{bottom:-20px;width:35px;background:#f5ab35}',""]),t.exports=e},1833:function(t,e,a){"use strict";a("a6d4")},"1cf1":function(t,e,a){var r=a("1007");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=a("499e").default;o("19f8d3e0",r,!0,{sourceMap:!1,shadowMode:!1})},"2a32":function(t,e,a){"use strict";a("1cf1")},3080:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isVisible?a("div",{staticStyle:{display:"block"},attrs:{id:"divProgress"}},[t._m(0)]):t._e()},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"lds-ring"},[a("img",{staticClass:"blob",staticStyle:{"max-width":"50%",position:"absolute",top:"18px",left:"19px"},attrs:{alt:""}}),a("div"),a("div"),a("div"),a("div")])}],s={name:"TimerProductiveLoader",props:{isVisible:{type:Boolean,required:!0},text:{type:String,required:!1,default:""}}},i=s,n=(a("1833"),a("2877")),d=Object(n["a"])(i,r,o,!1,null,null,null);e["a"]=d.exports},a6d4:function(t,e,a){var r=a("110d");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=a("499e").default;o("4d477860",r,!0,{sourceMap:!1,shadowMode:!1})},f2aa:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("loader",{attrs:{"is-visible":t.isLoading}}),a("div",{staticClass:"btn-group btn-group-toggle labelalign"},[a("button",{class:"DD"==t.dateType?"bg-success text-white button-container left-rounded":"text-black button-container left-rounded",on:{click:t.selectToday}},[t._v(" "+t._s(t.$t("Day")))]),a("button",{class:"WK"==t.dateType?"bg-success text-white button-container":"text-black button-container",on:{click:t.selectWeekly}},[t._v(" "+t._s(t.$t("Weekly")))]),a("button",{class:"MM"==t.dateType?"bg-success text-white button-container right-rounded":"text-black button-container right-rounded",on:{click:t.selectMonthly}},[t._v(" "+t._s(t.$t("Monthly"))+" ")])]),a("div",{staticClass:"col-sm-12 col-md-1 col-xl-2 labelalign"},[a("div",{staticClass:"input-group-prepend"},["DD"==t.dateType?a("vc-date-picker",{staticClass:"timedate input-group",attrs:{name:t.fromDate,"minute-increment":5},on:{input:t.onDateChange},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.inputValue,o=e.inputEvents,s=e.togglePopover;return[a("input",t._g({staticClass:"form-control",attrs:{placeholder:"M/D/YYYY"},domProps:{value:r}},o)),a("div",{staticClass:"input-group-append",on:{click:s}},[a("span",{staticClass:"input-group-text"},[a("em",{staticClass:"fa fa-calendar"})])])]}}],null,!1,3785623736),model:{value:t.fromDate,callback:function(e){t.fromDate=e},expression:"fromDate"}}):t._e(),"WK"==t.dateType?a("vc-date-picker",{staticClass:"timedate input-group",attrs:{"is-range":"","minute-increment":5},on:{input:t.onWeekDateChange},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.inputValue,o=e.inputEvents,s=e.togglePopover;return[a("input",t._g({staticClass:"form-control",domProps:{value:r.start+" - "+r.end}},o)),a("div",{staticClass:"input-group-append",on:{click:s}},[a("span",{staticClass:"input-group-text"},[a("em",{staticClass:"fa fa-calendar"})])])]}}],null,!1,282243623),model:{value:t.weekDate,callback:function(e){t.weekDate=e},expression:"weekDate"}}):t._e(),"MM"==t.dateType?a("vc-date-picker",{staticClass:"timedate input-group",attrs:{"is-range":""},on:{input:t.onMonthSelected},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.inputValue,o=e.inputEvents,s=e.togglePopover;return[a("input",t._g({staticClass:"form-control",attrs:{placeholder:"M/D/YYYY"},domProps:{value:r.start+" - "+r.end}},o)),a("div",{staticClass:"input-group-append",on:{click:s}},[a("span",{staticClass:"input-group-text"},[a("em",{staticClass:"fa fa-calendar"})])])]}}],null,!1,3294958983),model:{value:t.monthRange,callback:function(e){t.monthRange=e},expression:"monthRange"}}):t._e()],1)]),a("div",{staticClass:"col-md-6 "},[a("div",{},[t._v(t._s(t.username))]),a("div",{staticClass:"text-sucess",staticStyle:{color:"green"}},[t._v("Shift: "+t._s(t.starttime)+" To "+t._s(t.endtime))]),a("div",{staticClass:"d-flex flex-row"},[a("div",{staticClass:"dropdown pl-2 rounded",staticStyle:{background:"#008ff5"}},[a("em",{staticClass:"fa fa-eye text-white",attrs:{"aria-hidden":"true"}}),a("select",{directives:[{name:"model",rawName:"v-model",value:t.User,expression:"User"}],staticClass:"btn pl-0 dropdown-toggle text-white",attrs:{type:"button",id:"dropdownMenu2","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.User=e.target.multiple?a:a[0]},t.handleUserChange]}},t._l(t.ddlUser,(function(e){return a("option",{key:e.id,staticClass:"text-dark",domProps:{value:e.id}},[t._v(" "+t._s(e.Name)+" ")])})),0)])])]),a("div",{staticClass:"row d-flex justify-content-between mx-0 my-3"},[a("div",{staticClass:"col-2 border rounded light-blue-border card-boxes d-flex justify-content-center align-items-center"},[t._m(0),a("div",{staticClass:"col-md-8"},[a("span",{staticClass:"font-14 font-weight-normal"},[t._v(t._s(t.$t("Arrivaltime")))]),a("h5",{staticClass:"text-primary mb-0 font-24"},[t._v(t._s(t.$options.filters.formatTime(t.ArrivalTime)))])])]),a("div",{staticClass:"col-2 border rounded border-warning card-boxes d-flex justify-content-center align-items-center"},[t._m(1),a("div",{staticClass:"col-md-8"},[a("span",{staticClass:"font-14 font-weight-normal"},[t._v(t._s(t.$t("Lefttime")))]),a("h5",{staticClass:"text-warning mb-0 font-24"},[t._v(" "+t._s(t.AverrageLeftTime))])])]),a("div",{staticClass:"col-2 border rounded border-success card-boxes d-flex justify-content-center align-items-center"},[t._m(2),a("div",{staticClass:"col-md-8"},[a("span",{staticClass:"font-14 font-weight-normal"},[t._v(t._s(t.$t("ProductTime")))]),a("h5",{staticClass:"text-success mb-0 font-24"},[t._v(t._s(t.ProductiveTime))])])]),a("div",{staticClass:"col-2 border rounded dark-blue-border card-boxes d-flex justify-content-center align-items-center"},[t._m(3),a("div",{staticClass:"col-md-8"},[a("span",{staticClass:"font-14 font-weight-normal"},[t._v(t._s(t.$t("TimeofWork")))]),a("h5",{staticClass:"dark-blue-clr mb-0 font-24"},[t._v(t._s(t.DurationTime))])])]),a("div",{staticClass:"col-2 border rounded border-success card-boxes d-flex justify-content-center align-items-center"},[t._m(4),a("div",{staticClass:"col-md-8"},[a("span",{staticClass:"font-14 font-weight-normal"},[t._v(t._s(t.$t("Productivity")))]),a("h5",{staticClass:"text-success mb-0 font-24"},[t._v(" "+t._s(t.ProductivityPercentage))])])]),a("div",{staticClass:"col-2 border rounded red-orange-border card-boxes d-flex justify-content-center align-items-center"},[t._m(5),a("div",{staticClass:"col-md-8"},[a("span",{staticClass:"font-14 font-weight-normal"},[t._v(t._s(t.$t("IdleTime")))]),a("h5",{staticClass:"font-24 mb-0",staticStyle:{color:"#fc5a03"}},[t._v(t._s(t.IdleTime))])])])]),a("div",{staticClass:"row-12"},[t.isShowProductivityBar?a("VueApexCharts",{attrs:{width:"100%",height:"500px",type:"bar",options:t.options,series:t.series}}):t._e()],1),a("div",{staticClass:"row d-flex justify-content-between mx-1"},[a("TimerLoader",{attrs:{"is-visible":t.ProductiveAppsLoader}}),a("div",{staticClass:"col-3 border productive-box p-0"},[a("h6",{staticClass:"border-bottom p-2 mb-0"},[t._v(t._s(t.$t("ProductiveApps"))),a("span",{staticClass:"float-right"},[t._v(t._s(t.ProductiveTotalTime))])]),0===t.ProductiveApps.length?a("div",{staticClass:"text-center mt-4 error-message"},[a("p",{staticClass:"error-text"},[t._v("No records found.")])]):t._e(),t._l(t.TempProductiveApps,(function(e,r){return a("div",{key:r,staticClass:"row mx-3 py-3 dotted-border d-flex align-items-center"},[a("div",{class:e.icon_class?"appicon "+e.icon_class:"appicon default"}),a("div",{attrs:{title:e.application_display_name}},[t._v(" "+t._s(t.TruncateStr(e.application_display_name,10))+" "),a("br"),a("small",[t._v(t._s(t.TruncateStr(e.category_name,15)))])]),a("div",{staticClass:"col-md-4"},[a("small",{staticClass:"text-center",style:{color:e.progress_bar_options.progress.color}},[t._v(t._s(e.percentage_duration)+"%")]),a("br"),a("ProgressBar",{attrs:{options:e.progress_bar_options,value:e.percentage_duration}})],1),a("div",{staticClass:"col-md-3 text-right"},[a("small",[t._v(t._s(e.duration_time))])])])})),t.ProductiveApps.length>4&&t.isShowViewAllProductive?a("h6",{staticClass:"border-top p-2 text-center",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.ViewAllApps("productive")}}},[t._v(" "+t._s(t.$t("ViewAll"))+" ")]):t._e()],2),a("TimerLoader",{attrs:{"is-visible":t.UnProductiveAppsLoader}}),a("div",{staticClass:"col-3 border productive-box p-0"},[a("h6",{staticClass:"border-bottom p-2 mb-0"},[t._v(t._s(t.$t("UnproductiveApps"))+" "),a("span",{staticClass:"float-right"},[t._v(t._s(t.UnProductiveTotalTime))])]),0===t.UnProductiveApps.length?a("div",{staticClass:"text-center mt-4 error-message"},[a("p",{staticClass:"error-text"},[t._v("No records found.")])]):t._e(),t._l(t.TempUnProductiveApps,(function(e,r){return a("div",{key:r,staticClass:"row mx-3 py-3 dotted-border d-flex align-items-center"},[a("div",{class:e.icon_class?"appicon "+e.icon_class:"appicon default"}),a("div",{attrs:{title:e.application_display_name}},[t._v(" "+t._s(t.TruncateStr(e.application_display_name,10))+" "),a("br"),a("small",[t._v(t._s(e.category_name))])]),a("div",{staticClass:"col-md-4"},[a("small",{staticClass:"text-center",style:{color:e.progress_bar_options.progress.color}},[t._v(t._s(e.percentage_duration)+"%")]),a("br"),a("ProgressBar",{attrs:{options:e.progress_bar_options,value:e.percentage_duration}})],1),a("div",{staticClass:"col-md-3 text-right"},[a("small",[t._v(t._s(e.duration_time))])])])})),t.UnProductiveApps.length>4&&t.isShowViewAllUnProductive?a("h6",{staticClass:"border-top p-2 text-center",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.ViewAllApps("unproductive")}}},[t._v(" "+t._s(t.$t("ViewAll"))+" ")]):t._e()],2),a("TimerLoader",{attrs:{"is-visible":t.NeutralAppsloader}}),a("div",{staticClass:"col-3 border productive-box p-0"},[a("h6",{staticClass:"border-bottom p-2 mb-0"},[t._v(" "+t._s(t.$t("NeutralApps"))),a("span",{staticClass:"float-right"},[t._v(t._s(t.NeutralTotalTime))])]),0===t.UnProductiveApps.length?a("div",{staticClass:"text-center mt-4 error-message"},[a("p",{staticClass:"error-text"},[t._v("No records found.")])]):t._e(),t._l(t.TempNeutralApps,(function(e,r){return a("div",{key:r,staticClass:"row mx-3 py-3 dotted-border d-flex align-items-center"},[a("div",{class:e.icon_class?"appicon "+e.icon_class:"appicon default"}),a("div",{attrs:{title:e.application_display_name}},[t._v(" "+t._s(t.TruncateStr(e.application_display_name,10))+" "),a("br"),a("small",[t._v(t._s(e.category_name))])]),a("div",{staticClass:"col-md-4"},[a("small",{staticClass:"text-center",style:{color:e.progress_bar_options.progress.color}},[t._v(t._s(e.percentage_duration)+"%")]),a("br"),a("div",[a("ProgressBar",{attrs:{options:e.progress_bar_options,value:e.percentage_duration}})],1)]),a("div",{staticClass:"col-md-3 text-right"},[a("small",[t._v(t._s(e.duration_time))])])])})),t.NeutralApps.length>4&&t.isShowViewAllNeutral?a("h6",{staticClass:"border-top p-2 text-center",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.ViewAllApps("neutral")}}},[t._v(" "+t._s(t.$t("ViewAll"))+" "),a("em",{staticClass:"fa fa-angle-down",attrs:{"aria-hidden":"true"}})]):t._e(),0==t.isShowViewAllNeutral?a("h6",{staticClass:"border-top p-2 text-center",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.collapse("neutral")}}},[t._v(" "+t._s(t.$t("Collapse"))+" "),a("em",{staticClass:"fa fa-angle-up",attrs:{"aria-hidden":"true"}})]):t._e()],2),a("div",{staticClass:"col-3 border productive-box p-0"},[a("TimerLoader",{attrs:{"is-visible":t.mostusedAppsDataloader}}),a("h6",{staticClass:"border-bottom p-2"},[t._v(t._s(t.$t("MostUsedApps")))]),0===t.mostusedAppsData.length?a("div",{staticClass:"text-center mt-4 error-message"},[a("p",{staticClass:"error-text"},[t._v("No records found.")])]):t._e(),a("div",{attrs:{id:"chart"}},[t.mostuserappdata?a("VueApexCharts",{attrs:{type:"bar",height:"300",options:t.chartOptions,series:t.series1}}):t._e()],1)],1)],1),a("br"),a("div",{staticClass:"row d-flex justify-content-between mx-2"},[a("div",{staticClass:"col-12 border"},[a("h6",{staticClass:"mt-2"},[t._v(t._s(t.$t("Categories")))]),0===t.AppDurationByCategories.length?a("div",{staticClass:"text-center mt-4 error-message"},[a("p",{staticClass:"error-text"},[t._v("No records found.")])]):t._e(),t._l(t.AppDurationByCategories,(function(e,r){return a("span",{key:r},[a("small",{staticClass:"colorboxsquare",style:{background:e.color_code}}),a("small",{staticClass:"mr-3"},[t._v(t._s(e.category_name))])])})),a("div",{staticClass:"progress"},t._l(t.AppDurationByCategories,(function(e){return a("div",{staticClass:"progress-bar",staticStyle:{"margin-right":"3px"},style:{width:e.percentage_duration+"%"}},[a("div",{key:t.index,staticClass:"center h6",staticStyle:{"justify-content":"center","margin-bottom":"0"},style:{background:e.color_code},attrs:{title:e.duration_time,role:"progressbar","aria-valuenow":e.percentage_duration,"aria-valuemin":"0","aria-valuemax":"100"}},[t._v(" "+t._s(e.duration_time)+" ")])])})),0)],2)])],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-4 text-center"},[a("img",{staticClass:"py-4",attrs:{src:"https://talygenv.github.io/Vue-UI-Content/images/Arrival-Time.png"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-4 text-center"},[a("img",{staticClass:"py-4",attrs:{src:"https://talygenv.github.io/Vue-UI-Content/images/left-time.png"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-4 text-center"},[a("img",{staticClass:"py-4",attrs:{src:"https://talygenv.github.io/Vue-UI-Content/images/productive-time.png"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-4 text-center"},[a("img",{staticClass:"py-4",attrs:{src:"https://talygenv.github.io/Vue-UI-Content/images/Time-at-Work.png"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-4 text-center"},[a("img",{staticClass:"py-4",attrs:{src:"https://talygenv.github.io/Vue-UI-Content/images/productivity.png"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-4 text-center"},[a("img",{staticClass:"py-4",attrs:{src:"https://talygenv.github.io/Vue-UI-Content/images/idle-time.png"}})])}],s=(a("14d9"),a("1321")),i=a.n(s),n=a("9769"),d=a("87d0"),l=a.n(d),c=a("3080"),p=[],u="DD",m={components:{VueApexCharts:i.a,ProgressBar:l.a,TimerLoader:c["a"]},data(){return{User:"1",ddlUser:[{id:"1",Name:"My View"},{id:"2",Name:"Department View"}],isShowProductivityBar:!1,mostuserappdata:!1,options:{colors:["#3c8028","#FFA500","#84857f","#ededed"],chart:{type:"bar",height:400,stacked:!0,toolbar:{show:!1},zoom:{enabled:!0}},responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:0}}}],plotOptions:{bar:{horizontal:!1,columnWidth:"100%"}},dataLabels:{enabled:!1},stroke:{width:1,colors:["#fff"]},title:{text:"Productivity Bar",offsetX:40},xaxis:{categories:[],labels:{formatter:function(t){if("DD"!=u)return"WK"==u?(t="Monday 00:00:00"==t||"Tuesday 00:00:00"==t||"Wednesday 00:00:00"==t||"Thursday 00:00:00"==t||"Friday 00:00:00"==t||"Saturday 00:00:00"==t||"Sunday 00:00:00"==t?t.replace(/ 00:00:00/,""):"",t):t;for(var e in p)if(7==p[e].length&&(p[e]="0"+p[e]),t==p[e])return t=t.replace(":00",""),"0"==t[0]&&(t=t.substring(1)),t}}},tooltip:{enabled:!0,y:{formatter:function(t){return void 0===t?"":"DD"==u||"Wk"==u?t:"MM"==u?"Arrival Time:"+t+"</br>Left Time:</br>Idle Time:</br>Productivity(%):":void 0},title:{formatter:function(t){return"DD"==u||"WK"==u?t:"MM"==u?"":void 0}}}},yaxis:{min:0,max:100},legend:{position:"top",horizontalAlign:"right",offsetX:40}},series:[{name:"Productive App",data:[]},{name:"Nuetral App",data:[]},{name:"Unproductive App",data:[]},{name:"No Record",data:[]}],colors:["#3c8028","#FFA500","#84857f"],fill:{type:"solid"},xaxis:{type:""},chartOptions:{colors:["#3c8028","#84857f","#FFA500"],chart:{type:"bar",height:350,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!0,endingShape:"rounded"}},dataLabels:{enabled:!1},xaxis:{categories:[],labels:{formatter:function(t){return(.166*t).toFixed(0)+"%"}}},fill:{opacity:1},legend:{position:"top",horizontalAlign:"right",offsetX:40},fill:{opacity:1},legend:{position:"top",horizontalAlign:"right",offsetX:40}},series1:[{name:"Productive App",data:[]},{name:"Unproductive App",data:[]},{name:"Nuetral App",data:[]}],colors:["#3c8028","#84857f","#FFA500"],userId:"",fromDate:"",ToDate:"",ChartXAxis:"",ChartYAxis:"",timedata:[],ArrivalTime:"",AverrageLeftTime:"",DurationTime:"",duration:"",dateType:"DD",weeklyFromDate:"",startDate:new Date,endDate:new Date,monthStartDate:new Date,monthEndDate:new Date,weekDate:{start:this.startDate,end:this.endDate},monthRange:{start:this.monthStartDate,end:this.monthEndDate},updateMonthRange:!1,isLoading:!1,ProductivityPercentage:null,IdleTime:null,ProductiveTime:null,ProductiveApps:[],TempProductiveApps:[],UnProductiveApps:[],TempUnProductiveApps:[],NeutralApps:[],TempNeutralApps:[],categories:[],isShowViewAllProductive:!0,isShowViewAllUnProductive:!0,isShowViewAllNeutral:!0,ProductiveTotalTime:null,UnProductiveTotalTime:null,NeutralTotalTime:null,AppDurationByCategories:[],mostusedAppsData:[],username:"",starttime:"",endtime:"",isMostUnProductiveLoading:!1,UnProductiveAppsLoader:!1,ProductiveAppsLoader:!1,NeutralAppsloader:!1,mostusedAppsDataloader:!1}},mounted:()=>{console.log((void 0).timedata.data),(void 0).GetTimerDashboard()},computed:{foo:()=>{console.log((void 0).timedata.data)}},watch(){this.GetTimerDashboard()},async created(){var t=this;t.userId=t.$route.params.id,t.GetUserNameandShift(),u="DD",t.fromDate=new Date,t.fromDate=t.ConvertDateFormat(t.fromDate),t.ToDate=t.fromDate+" 23:59:00",t.formatDuration(),p=t.getTimeRanges(60);var e=new Date,a=new Date(e.getFullYear(),e.getMonth()+1,0).getDate(),r=new Date;r.setDate(r.getDate()-6);var o=new Date;o.setDate(o.getDate()-a),t.monthEndDate=o,t.endDate=r,t.weekDate={start:t.startDate,end:t.endDate},t.monthRange={start:t.monthStartDate,end:t.monthEndDate},await t.GetTimerDashboard(),await t.GetAllApps(),await t.GetMostUsedApps(),await t.GetUsedAppTimeDurationByCategories()},updated(){var t=this;const e=t.ConvertDateFormat(new Date);if("WK"==t.dateType){var a=new Date;a.setDate(a.getDate()-6);const r=t.ConvertDateFormat(t.startDate),o=t.ConvertDateFormat(t.endDate),s=t.ConvertDateFormat(a);if(r!=e||o!=s){const e=new Date(t.startDate);e.setDate(t.startDate.getDate()+6);const a=Math.abs(t.endDate-t.startDate),r=Math.ceil(a/864e5);(t.endDate>e||r<6)&&(t.weekDate={start:t.startDate,end:e})}}else if("MM"==t.dateType){var r=new Date;const a=new Date;var o=new Date(r.getFullYear(),r.getMonth()+1,0).getDate();a.setDate(a.getDate()-o);const s=t.ConvertDateFormat(a),i=t.ConvertDateFormat(t.monthStartDate),n=t.ConvertDateFormat(t.monthEndDate),d=new Date(t.monthStartDate);if(d.setDate(t.monthStartDate.getDate()+o),i!=s||n!=e){const e=Math.abs(t.monthEndDate-t.monthStartDate),a=Math.ceil(e/864e5);(t.monthStartDate>d||a<31)&&(t.monthRange={start:t.monthStartDate,end:d})}else t.updateMonthRange&&(t.monthRange={start:t.monthStartDate,end:d})}},methods:{GetAllAPiMethods(){var t=this;t.GetTimerDashboard(),t.GetAllApps(),t.GetArrivalTime(),t.GetMostUsedApps(),t.GetUsedAppTimeDurationByCategories()},GetUserNameandShift(){var t=this;void 0==t.$route.params.id?(t.logginuserID=t.GetUserInfo.ID,t.userId=t.logginuserID):t.userId=t.$route.params.id;var e="userId="+t.userId;n["a"].GetUserNameandshift(e).then(e=>{t.username=e.data.data[0].USERNAME,t.starttime=e.data.data[0].TS[0].STARTTIME,t.endtime=e.data.data[0].TS[0].ENDTIME})},ConvertDateFormat(t){var e=new Date(t),a=("0"+(e.getMonth()+1)).slice(-2),r=("0"+e.getDate()).slice(-2),o=[e.getFullYear(),a,r].join("-");return o},selectToday:function(t){var e=this;e.dateType="DD",u="DD",e.fromDate=new Date,e.fromDate=e.ConvertDateFormat(e.fromDate),e.ToDate=e.fromDate+" 23:59:00"},selectWeekly:function(){var t=this;t.dateType="WK",u="WK";var e=new Date,a=e.getDay(),r=0==a?6:a-1,o=new Date(new Date(e).setDate(e.getDate()-r)),s=new Date(new Date(o).setDate(o.getDate()+6));t.weeklyFromDate=o,t.ToDate=s,t.ToDate=t.ConvertDateFormat(t.ToDate),t.weeklyFromDate=t.ConvertDateFormat(t.weeklyFromDate)},selectMonthly:function(){var t=this;t.options.xaxis.categories=[],t.series[0].data=[],t.series[1].data=[],t.series[2].data=[],t.dateType="MM",u="MM",t.fromDate="";var e=new Date,a=e.getFullYear(),r=e.getMonth(),o=new Date(a,r,1),s=new Date(a,r+1,0);t.fromDate=o,t.ToDate=s,t.fromDate=t.ConvertDateFormat(t.fromDate),t.ToDate=t.ConvertDateFormat(t.ToDate)},GetTimerDashboard:async function(){var t=this;t.options.xaxis.categories=[],t.series[0].data=[],t.series[1].data=[],t.series[2].data=[],t.series[3].data=[];var e="";e="DD"==t.dateType?`fromDate=${t.fromDate}&toDate=${t.ToDate}&type=${t.dateType}&userIds=${t.userId}&viewType=MyView`:"WK"==t.dateType?`fromDate=${t.ConvertDateFormat(t.startDate)}&toDate=${t.ConvertDateFormat(t.endDate)}&type=${t.dateType}&userIds=${t.userId}&viewType=MyView`:`fromDate=${t.ConvertDateFormat(t.monthStartDate)}&toDate=${t.ConvertDateFormat(t.monthEndDate)}&type=${t.dateType}&userIds=${t.userId}&viewType=MyView`,t.getgraphdata(e)},getgraphdata(t){var e=this;e.isLoading=!0,e.isShowProductivityBar=!1,n["a"].TimerDashboard(t).then(t=>{e.timedata=t.data.data,e.timedata&&(e.timedata.forEach(t=>{e.options.xaxis.categories.push(t.TimeIntervalAMPM),e.series[0].data.push(t.ProductivePer),e.series[1].data.push(t.UnProductivePer),e.series[2].data.push(t.NeutralPer),e.series[3].data.push(t.NoRecord),console.log("test data",t.TimeIntervalAMPM)}),e.isLoading=!1,e.isShowProductivityBar=!0),console.log("response",t.data)}).catch(t=>console.log(t))},handleUserChange(){"2"===this.User&&this.$router.push({path:"/TimeTracking/DepartmentViewDasboard"})},GetArrivalTime:function(){var t=this,e="";e="DD"==t.dateType?`fromDate=${t.fromDate}&toDate=${t.ToDate}&type=MyView&userIds=${t.userId}`:"WK"==t.dateType?`fromDate=${t.ConvertDateFormat(t.startDate)}&toDate=${t.ConvertDateFormat(t.endDate)}&type=MyView&userIds=${t.userId}`:`fromDate=${t.ConvertDateFormat(t.monthStartDate)}&toDate=${t.ConvertDateFormat(t.monthEndDate)}&type=MyView&userIds=${t.userId}`,n["a"].getArrivalTimeDashboard(e).then(e=>{t.ArrivalTime=e.data.data[0][0].startTime,t.AverrageLeftTime=e.data.data[0][0].endTime,t.DurationTime=e.data.data[0][0].ScreenCaptureTime,t.ProductivityPercentage=e.data.data[0][0].productivityPercentage,t.IdleTime=e.data.data[0][0].IdleTime,t.ProductiveTime=e.data.data[0][0].ProductiveTime})},formatDuration(t){const e=Math.floor(t),a=Math.round(60*(t-e));return`${e}h ${a}m`},async onDateChange(t){var e=this;"DD"==e.dateType&&(e.fromDate=new Date(t),e.fromDate=e.ConvertDateFormat(e.fromDate),e.ToDate=e.fromDate+" 23:59:00",await e.GetAllAPiMethods())},async onWeekDateChange(t){var e=this;e.startDate=t.start,e.endDate=t.end;const a=new Date(e.startDate);a.setDate(e.startDate.getDate()+6);const r=Math.abs(e.endDate-e.startDate),o=Math.ceil(r/864e5);return o<6?(e.ShowAlert("Please select atleast seven days.","warning",!1,e.$t("Alert")),!1):e.endDate>a?(e.ShowAlert("You can not select more than seven days.","warning",!1,e.$t("Alert")),!1):void await e.GetAllAPiMethods()},async onMonthSelected(t){var e=this;e.updateMonthRange=!1,e.monthStartDate=t.start,e.monthEndDate=t.end;var a=new Date,r=new Date(a.getFullYear(),a.getMonth()+1,0).getDate();const o=new Date(e.monthStartDate);o.setDate(e.monthStartDate.getDate()+r);const s=Math.abs(e.monthEndDate-e.monthStartDate),i=Math.ceil(s/864e5);var n=new Date;n.setDate(n.getDate()-r),i<27?(e.updateMonthRange=!0,e.ShowAlert("Please select atleast 30 days.","warning",!1,e.$t("Alert")),e.monthEndDate=new Date,e.monthStartDate=n):e.monthEndDate>o&&(e.updateMonthRange=!0,e.ShowAlert("You can not select more than 30 days.","warning",!1,e.$t("Alert")),e.monthEndDate=new Date,e.monthStartDate=n),await e.GetAllAPiMethods()},getTimeRanges(t){const e=[],a=new Date,r={hour:"numeric",minute:"numeric"};for(let o=0;o<1440;o+=t)a.setHours(0),a.setMinutes(o),e.push(a.toLocaleTimeString("en",r));return e},togglePopover(){},GetAllApps:async function(){var t=this;t.isShowViewAllProductive=!0,t.isShowViewAllUnProductive=!0,t.isShowViewAllNeutral=!0,t.UnProductiveAppsLoader=!0,t.ProductiveAppsLoader=!0,t.NeutralAppsloader=!0;var e="";e="DD"==t.dateType?`fromDate=${t.fromDate}&toDate=${t.ToDate}&userIds=${t.userId}&type=${t.dateType}&viewType=MyView`:"WK"==t.dateType?`fromDate=${t.ConvertDateFormat(t.startDate)}&toDate=${t.ConvertDateFormat(t.endDate)}&userIds=${t.userId}&type=${t.dateType}&viewType=MyView`:`fromDate=${t.ConvertDateFormat(t.monthStartDate)}&toDate=${t.ConvertDateFormat(t.monthEndDate)}&userIds=${t.userId}&type=${t.dateType}&viewType=MyView`,await n["a"].GetAllApps(e).then(e=>{if(null==e.data||""==e.data)return!1;t.ProductiveApps=e.data.productive,t.UnProductiveApps=e.data.unproductive,t.NeutralApps=e.data.neutral,t.ProductiveApps.length>0&&(t.ProductiveTotalTime=t.ProductiveApps[0].Totalduration),t.UnProductiveApps.length>0&&(t.UnProductiveTotalTime=t.UnProductiveApps[0].Totalduration),t.NeutralApps.length>0&&(t.NeutralTotalTime=t.NeutralApps[0].Totalduration),null!=t.ProductiveApps?(t.ProductiveApps.forEach((e,a)=>{var r={text:{color:"#FFFFFF",shadowEnable:!0,shadowColor:"#000000",fontSize:12,fontFamily:"Helvetica",dynamicPosition:!1,hideText:!0},progress:{color:e.color_code,backgroundColor:"#F2F2F2",inverted:!1},layout:{height:8,width:100,verticalTextAlign:61,horizontalTextAlign:43,zeroOffset:0,strokeWidth:30,progressPadding:0,type:"line"}};t.ProductiveApps[a].progress_bar_options=r}),t.TempProductiveApps=[],t.ProductiveApps.forEach((e,a)=>{a<4&&t.TempProductiveApps.push(e)}),t.ProductiveAppsLoader=!1):t.ProductiveAppsLoader=!1,null!=t.UnProductiveApps?(t.UnProductiveApps.forEach((e,a)=>{var r={text:{color:"#FFFFFF",shadowEnable:!0,shadowColor:"#000000",fontSize:12,fontFamily:"Helvetica",dynamicPosition:!1,hideText:!0},progress:{color:e.color_code,backgroundColor:"#F2F2F2",inverted:!1},layout:{height:8,width:100,verticalTextAlign:61,horizontalTextAlign:43,zeroOffset:0,strokeWidth:30,progressPadding:0,type:"line"}};t.UnProductiveApps[a].progress_bar_options=r}),t.TempUnProductiveApps=[],t.UnProductiveApps.forEach((e,a)=>{a<4&&t.TempUnProductiveApps.push(e)}),t.UnProductiveAppsLoader=!1):t.UnProductiveAppsLoader=!1,null!=t.NeutralApps&&(t.NeutralApps.forEach((e,a)=>{var r={text:{color:"#FFFFFF",shadowEnable:!0,shadowColor:"#000000",fontSize:12,fontFamily:"Helvetica",dynamicPosition:!1,hideText:!0},progress:{color:e.color_code,backgroundColor:"#F2F2F2",inverted:!1},layout:{height:8,width:100,verticalTextAlign:61,horizontalTextAlign:43,zeroOffset:0,strokeWidth:30,progressPadding:0,type:"line"}};t.NeutralApps[a].progress_bar_options=r}),t.TempNeutralApps=[],t.NeutralApps.forEach((e,a)=>{a<4&&t.TempNeutralApps.push(e)})),t.NeutralAppsloader=!1}),t.NeutralAppsloader=!1},ViewAllApps(t){var e=this;"productive"==t?(e.TempProductiveApps=e.ProductiveApps,e.isShowViewAllProductive=!1):"unproductive"==t?(e.TempUnProductiveApps=e.UnProductiveApps,e.isShowViewAllUnProductive=!1):(e.TempNeutralApps=e.NeutralApps,e.isShowViewAllNeutral=!1)},GetMostUsedApps:async function(){var t=this,e="";t.mostusedAppsDataloader=!0,t.chartOptions.xaxis.categories=[],t.series1[0].data=[],t.mostuserappdata=!1,e="DD"==u?`fromDate=${t.fromDate}&toDate=${t.ToDate}&type=${t.dateType}&userIds=${t.userId}&viewType=MyView`:"WK"==t.dateType?`fromDate=${t.ConvertDateFormat(t.startDate)}&toDate=${t.ConvertDateFormat(t.endDate)}&type=${t.dateType}&userIds=${t.userId}&viewType=MyView`:`fromDate=${t.ConvertDateFormat(t.monthStartDate)}&toDate=${t.ConvertDateFormat(t.monthEndDate)}&type=${t.dateType}&userIds=${t.userId}&viewType=MyView`,await n["a"].GetMostUsedApps(e).then(e=>{t.mostusedAppsData=e.data.data,null!=t.mostusedAppsData?(t.mostusedAppsData.forEach((e,a)=>{t.chartOptions.xaxis.categories.push(e.application_display_name),t.series1[0].data.push(e.duration),t.mostuserappdata=!0}),t.mostusedAppsDataloader=!1):(t.mostusedAppsData=[],t.mostusedAppsDataloader=!1)})},convertSecondstoTime(t){const e=new Date(1e3*t),a=e.getUTCHours(),r=e.getUTCMinutes(),o=e.getSeconds(),s=a.toString().padStart(2,"0")+":"+r.toString().padStart(2,"0")+":"+o.toString().padStart(2,"0");return s},GetUsedAppTimeDurationByCategories:async function(){var t=this,e="";e="DD"==u?`fromDate=${t.fromDate}&toDate=${t.ToDate}&userIds=${t.userId}&type=${t.dateType}&viewType=MyView`:"WK"==t.dateType?`fromDate=${t.ConvertDateFormat(t.startDate)}&toDate=${t.ConvertDateFormat(t.endDate)}&userIds=${t.userId}&type=${t.dateType}&viewType=MyView`:`fromDate=${t.ConvertDateFormat(t.monthStartDate)}&toDate=${t.ConvertDateFormat(t.monthEndDate)}&userIds=${t.userId}&type=${t.dateType}&viewType=MyView`,await n["a"].GetUsedAppTimeDurationByCategories(e).then(e=>{t.AppDurationByCategories=e.data.data,null!=t.AppDurationByCategories&&(t.AppDurationByCategories.forEach((e,a)=>{var r={text:{color:"#FFFFFF",shadowEnable:!0,shadowColor:"#000000",fontSize:12,fontFamily:"Helvetica",dynamicPosition:!1,hideText:!0},progress:{color:e.color_code,backgroundColor:"#F2F2F2",inverted:!1,width:e.percentage_duration},layout:{height:10,width:e.percentage_duration,verticalTextAlign:61,horizontalTextAlign:43,zeroOffset:0,strokeWidth:30,progressPadding:0,type:"line"}};t.AppDurationByCategories[a].progress_bar_options=r}),t.TempProductiveApps=[],t.ProductiveApps.forEach((e,a)=>{a<5&&t.TempProductiveApps.push(e)}))})}}},v=m,h=(a("2a32"),a("2877")),g=Object(h["a"])(v,r,o,!1,null,null,null);e["default"]=g.exports}}]);
//# sourceMappingURL=chunk-78a56071.js.map