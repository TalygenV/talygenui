(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36f887d1"],{"2f4e":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("loader",{attrs:{"is-visible":t.isLoading}}),a("div",{staticClass:"btn-group btn-group-toggle labelalign"},[a("button",{class:"DD"==t.dateType?"bg-success text-white button-container left-rounded":"text-black button-container left-rounded",on:{click:t.selectToday}},[t._v(" "+t._s(t.$t("Day"))+" ")]),a("button",{class:"WK"==t.dateType?"bg-success text-white button-container":"text-black button-container",on:{click:t.selectWeekly}},[t._v(" "+t._s(t.$t("Weekly"))+" ")]),a("button",{class:"MM"==t.dateType?"bg-success text-white button-container right-rounded":"text-black button-container right-rounded",on:{click:t.selectMonthly}},[t._v(" "+t._s(t.$t("Monthly"))+" ")])]),a("div",{staticClass:"col-sm-12 col-md-1 col-xl-2 labelalign"},[a("div",{staticClass:"input-group-prepend"},["DD"==t.dateType?a("vc-date-picker",{staticClass:"timedate input-group",attrs:{name:t.fromDate,"minute-increment":5},on:{input:t.onDateChange},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.inputValue,s=e.inputEvents,o=e.togglePopover;return[a("input",t._g({staticClass:"form-control",attrs:{placeholder:"M/D/YYYY"},domProps:{value:r}},s)),a("div",{staticClass:"input-group-append",on:{click:o}},[a("span",{staticClass:"input-group-text"},[a("em",{staticClass:"fa fa-calendar"})])])]}}],null,!1,3785623736),model:{value:t.fromDate,callback:function(e){t.fromDate=e},expression:"fromDate"}}):t._e(),"WK"==t.dateType?a("vc-date-picker",{staticClass:"timedate input-group",attrs:{"is-range":"","minute-increment":5},on:{input:t.onWeekDateChange},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.inputValue,s=e.inputEvents,o=e.togglePopover;return[a("input",t._g({staticClass:"form-control",domProps:{value:r.start+" - "+r.end}},s)),a("div",{staticClass:"input-group-append",on:{click:o}},[a("span",{staticClass:"input-group-text"},[a("em",{staticClass:"fa fa-calendar"})])])]}}],null,!1,282243623),model:{value:t.weekDate,callback:function(e){t.weekDate=e},expression:"weekDate"}}):t._e(),"MM"==t.dateType?a("vc-date-picker",{staticClass:"timedate input-group",attrs:{"is-range":""},on:{input:t.onMonthSelected},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.inputValue,s=e.inputEvents,o=e.togglePopover;return[a("input",t._g({staticClass:"form-control",attrs:{placeholder:"M/D/YYYY"},domProps:{value:r.start+" - "+r.end}},s)),a("div",{staticClass:"input-group-append",on:{click:o}},[a("span",{staticClass:"input-group-text"},[a("em",{staticClass:"fa fa-calendar"})])])]}}],null,!1,3294958983),model:{value:t.monthRange,callback:function(e){t.monthRange=e},expression:"monthRange"}}):t._e()],1)]),a("div",{staticClass:"d-flex align-items-end"},[a("div",{staticClass:"d-flex flex-column"},[a("div",{staticClass:"d-flex flex-row"},[t.selectdepartment?a("span",[t._v(t._s(t.$t("Alldepartments")))]):t._e(),t._l(t.departmentnames,(function(e,r){return t.deparment?a("span",[t._v(t._s(0==r?e:", "+e))]):t._e()}))],2),a("div",{staticClass:"d-flex flex-row"},[a("div",{staticClass:"dropdown pl-2 rounded",staticStyle:{background:"#008ff5"}},[a("em",{staticClass:"fa fa-eye",attrs:{"aria-hidden":"true"}}),a("select",{directives:[{name:"model",rawName:"v-model",value:t.User,expression:"User"}],staticClass:"btn pl-0 dropdown-toggle",attrs:{type:"button",id:"dropdownMenu2","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.User=e.target.multiple?a:a[0]},t.handleUserChange]}},t._l(t.ddlUser,(function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v(" "+t._s(e.Name)+" ")])})),0)])])]),a("div",{staticClass:"card flex justify-content-center border-0 ml-2 w-25"},[a("Treeselect",{attrs:{name:"multiselectddl",multiple:!0,options:t.filteredOptions,"max-height":200},on:{select:t.onchange,deselect:t.onchange},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),a("Treeselect-value",{attrs:{value:t.value}})],1),a("div",{staticClass:"row d-flex justify-content-between mx-0 my-3"},[a("div",{staticClass:"col-2 border rounded light-blue-border card-boxes d-flex justify-content-center align-items-center"},[t._m(0),a("div",{staticClass:"col-md-8"},[a("span",[t._v(t._s(t.$t("Arrivaltime")))]),a("h5",{staticClass:"text-primary"},[t._v(t._s(t.$options.filters.formatTime(t.ArrivalTime)))])])]),a("div",{staticClass:"col-2 border rounded border-warning card-boxes d-flex justify-content-center align-items-center"},[t._m(1),a("div",{staticClass:"col-md-8"},[a("span",[t._v(t._s(t.$t("Lefttime")))]),a("h5",{staticClass:"text-waring"},[t._v(" "+t._s(t.AverrageLeftTime))])])]),a("div",{staticClass:"col-2 border rounded border-success card-boxes d-flex justify-content-center align-items-center"},[t._m(2),a("div",{staticClass:"col-md-8"},[a("span",[t._v("Product Time")]),a("h5",{staticClass:"text-succes"},[t._v(t._s(t.ProductiveTime))])])]),a("div",{staticClass:"col-2 border rounded dark-blue-border card-boxes d-flex justify-content-center align-items-center"},[t._m(3),a("div",{staticClass:"col-md-8"},[a("span",[t._v("Time of Work")]),a("h5",{staticClass:"text-primary"},[t._v(t._s(t.DurationTime))])])]),a("div",{staticClass:"col-2 border rounded border-success card-boxes d-flex justify-content-center align-items-center"},[t._m(4),a("div",{staticClass:"col-md-8"},[a("span",[t._v("Productivity")]),a("h5",{staticClass:"text-succes"},[t._v(" "+t._s(t.ProductivityPercentage))])])]),a("div",{staticClass:"col-2 border rounded red-orange-border card-boxes d-flex justify-content-center align-items-center"},[t._m(5),a("div",{staticClass:"col-md-8"},[a("span",[t._v("Idle Time")]),a("h5",{staticStyle:{color:"#fc5a03"}},[t._v(t._s(t.IdleTime))])])])]),a("div",{staticClass:"row-12"},[t.isShowProductivityBar?a("VueApexCharts",{attrs:{width:"100%",height:"500px",type:"bar",options:t.options,series:t.series}}):t._e()],1),a("div",{staticClass:"row d-flex justify-content-between mx-1"},[a("div",{staticClass:"col-4 border productive-box p-0"},[a("h5",{staticClass:"border-bottom p-2"},[t._v("Most Productive Employees")]),0===t.ProductiveEmpoyees.length?a("div",{staticClass:"text-center mt-4 error-message"},[a("p",{staticClass:"error-text"},[t._v("No records found.")])]):t._e(),t._l(t.ProductiveEmpoyees,(function(e,r){return a("div",t._b({key:r,staticClass:"row ml-1"},"div",e.user-t.id,!1),[a("img",{attrs:{src:e.userimage,alt:e.username,width:"40px",height:"40px"}}),a("div",{staticClass:"col-md-4"},[a("div",{attrs:{title:e.username},on:{click:function(a){return t.MyViewPage(e.user_id)}}},[t._v(t._s(t.TruncateStr(e.username,17))+" ")]),a("small",[t._v(t._s(t.TruncateStr(e.department_name,15)))])]),a("div",{staticClass:"col-md-4"},[a("small",{staticClass:"text-center",style:{color:e.progress_bar_options.progress.color}},[t._v(t._s(e.percentage_duration)+"%")]),a("br"),a("ProgressBar",{attrs:{options:e.progress_bar_options,value:e.percentage_duration}})],1),a("div",{staticClass:"col-md-3 text-right "},[a("small",[t._v(t._s(e.duration_time))])])])}))],2),a("div",{staticClass:"col-4 border productive-box p-0"},[a("h5",{staticClass:"border-bottom p-2"},[t._v("Most UnProductive Employees")]),0===t.UnProductiveEployees.length?a("div",{staticClass:"text-center mt-4 error-message"},[a("p",{staticClass:"error-text"},[t._v("No records found.")])]):t._e(),t._l(t.UnProductiveEployees,(function(e,r){return a("div",t._b({key:r,staticClass:"row ml-1"},"div",e.user-t.id,!1),[a("img",{attrs:{src:e.userimage,alt:e.username,width:"40px",height:"40px"}}),a("div",{staticClass:"col-md-4",attrs:{title:e.username},on:{click:function(a){return t.MyViewPage(e.user_id)}}},[t._v(t._s(t.TruncateStr(e.username,17))+" "),a("br")]),a("div",{staticClass:"col-md-4"},[a("small",{staticClass:"text-center",style:{color:e.progress_bar_options.progress.color}},[t._v(t._s(e.percentage_duration)+"%")]),a("br"),a("ProgressBar",{attrs:{options:e.progress_bar_options,value:e.percentage_duration}})],1),a("div",{staticClass:"col-md-3 text-right "},[a("small",[t._v(t._s(e.duration_time))])])])}))],2),a("div",{staticClass:"col-4 border productive-box p-0"},[a("h5",{staticClass:"border-bottom p-2"},[t._v("Most Used Apps")]),0===t.mostusedAppsData.length?a("div",{staticClass:"text-center mt-4 error-message"},[a("p",{staticClass:"error-text"},[t._v("No records found.")])]):t._e(),a("div",{attrs:{id:"chart"}},[t.mostuserappdata?a("VueApexCharts",{attrs:{type:"bar",height:"300px",options:t.chartOptions,series:t.series1}}):t._e()],1)])]),a("br"),a("div",{staticClass:"row d-flex justify-content-between mx-1"},[a("div",{staticClass:"col-4 border productive-box p-0"},[a("h6",{staticClass:"border-bottom p-2"},[t._v(" Productive Apps "),a("span",{staticClass:"float-right"},[t._v(t._s(t.ProductiveTotalTime))])]),0===t.ProductiveApps.length?a("div",{staticClass:"text-center mt-4 error-message"},[a("p",{staticClass:"error-text"},[t._v("No records found.")])]):t._e(),t._l(t.TempProductiveApps,(function(e,r){return a("div",{key:r,staticClass:"row ml-2"},[a("div",{class:e.icon_class?"appicon "+e.icon_class:"appicon default"}),a("div",{staticClass:"col-md-4",attrs:{title:e.application_display_name}},[t._v(" "+t._s(t.TruncateStr(e.application_display_name,10))+" "),a("br"),a("small",[t._v(t._s(t.TruncateStr(e.category_name,15)))])]),a("div",{staticClass:"col-md-4"},[a("small",{staticClass:"text-center",style:{color:e.progress_bar_options.progress.color}},[t._v(t._s(e.percentage_duration)+"%")]),a("br"),a("ProgressBar",{attrs:{options:e.progress_bar_options,value:e.percentage_duration}})],1),a("div",{staticClass:"col-md-3 text-right"},[a("small",[t._v(t._s(e.duration_time))])])])})),t.ProductiveApps.length>5&&t.isShowViewAllProductive?a("h6",{staticClass:"border-top p-2 text-center",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.ViewAllApps("productive")}}},[t._v(" View All ")]):t._e()],2),a("div",{staticClass:"col-4 border productive-box p-0"},[a("h6",{staticClass:"border-bottom p-2"},[t._v(" Unproductive Apps "),a("span",{staticClass:"float-right"},[t._v(t._s(t.UnProductiveTotalTime))])]),0===t.UnProductiveApps.length?a("div",{staticClass:"text-center mt-4 error-message"},[a("p",{staticClass:"error-text"},[t._v("No records found.")])]):t._e(),t._l(t.TempUnProductiveApps,(function(e,r){return a("div",{key:r,staticClass:"row ml-2"},[a("div",{class:e.icon_class?"appicon "+e.icon_class:"appicon default"}),a("div",{staticClass:"col-md-4",attrs:{title:e.application_display_name}},[t._v(" "+t._s(t.TruncateStr(e.application_display_name,10))+" "),a("br"),a("small",[t._v(t._s(e.category_name))])]),a("div",{staticClass:"col-md-4"},[a("small",{staticClass:"text-center",style:{color:e.progress_bar_options.progress.color}},[t._v(t._s(e.percentage_duration)+"%")]),a("br"),a("ProgressBar",{attrs:{options:e.progress_bar_options,value:e.percentage_duration}})],1),a("div",{staticClass:"col-md-3 text-right"},[a("small",[t._v(t._s(e.duration_time))])])])})),t.UnProductiveApps.length>5&&t.isShowViewAllUnProductive?a("h6",{staticClass:"border-top p-2 text-center",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.ViewAllApps("unproductive")}}},[t._v(" View All ")]):t._e()],2),a("div",{staticClass:"col-4 border productive-box p-0"},[a("h6",{staticClass:"border-bottom p-2"},[t._v(" Neutral Apps "),a("span",{staticClass:"float-right"},[t._v(t._s(t.NeutralTotalTime))])]),0===t.UnProductiveApps.length?a("div",{staticClass:"text-center mt-4 error-message"},[a("p",{staticClass:"error-text"},[t._v("No records found.")])]):t._e(),t._l(t.TempNeutralApps,(function(e,r){return a("div",{key:r,staticClass:"row ml-2"},[a("div",{class:e.icon_class?"appicon "+e.icon_class:"appicon default"}),a("div",{staticClass:"col-md-4",attrs:{title:e.application_display_name}},[t._v(" "+t._s(t.TruncateStr(e.application_display_name,10))+" "),a("br"),a("small",[t._v(t._s(e.category_name))])]),a("div",{staticClass:"col-md-4"},[a("small",{staticClass:"text-center",style:{color:e.progress_bar_options.progress.color}},[t._v(t._s(e.percentage_duration)+"%")]),a("br"),a("ProgressBar",{attrs:{options:e.progress_bar_options,value:e.percentage_duration}})],1),a("div",{staticClass:"col-md-3 text-right"},[a("small",[t._v(t._s(e.duration_time))])])])})),t.NeutralApps.length>5&&t.isShowViewAllNeutral?a("h6",{staticClass:"border-top p-2 text-center",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.ViewAllApps("neutral")}}},[t._v(" View All ")]):t._e()],2)]),a("br"),a("div",{staticClass:"row d-flex justify-content-between mx-2"},[a("div",{staticClass:"col-12 border"},[a("h6",{staticClass:"mt-2"},[t._v("Categories")]),0===t.AppDurationByCategories.length?a("div",{staticClass:"text-center mt-4 error-message"},[a("p",{staticClass:"error-text"},[t._v("No records found.")])]):t._e(),t._l(t.AppDurationByCategories,(function(e,r){return a("span",{key:r},[a("small",{staticClass:"colorboxsquare",style:{background:e.color_code}}),a("small",{staticClass:"mr-3"},[t._v(t._s(e.category_name))])])})),a("div",{staticClass:"d-flex"},t._l(t.AppDurationByCategories,(function(e,r){return a("div",{key:r,staticClass:"mr-2"},[a("div",{staticClass:"text-start",style:{color:e.progress_bar_options.progress.color}},[t._v(t._s(e.duration_time))]),a("ProgressBar",{attrs:{options:e.progress_bar_options,value:e.percentage_duration}})],1)})),0)],2)]),t.DashBoardVue?a("TimetrackDashBoardVue",{attrs:{checkedUserId:t.checkedUserId}}):t._e()],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-4 text-center"},[a("img",{staticClass:"py-4",attrs:{src:"https://talygenv.github.io/Vue-UI-Content/images/Arrival-Time.png"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-4 text-center"},[a("img",{staticClass:"py-4",attrs:{src:"https://talygenv.github.io/Vue-UI-Content/images/left-time.png"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-4 text-center"},[a("img",{staticClass:"py-4",attrs:{src:"https://talygenv.github.io/Vue-UI-Content/images/productive-time.png"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-4 text-center"},[a("img",{staticClass:"py-4",attrs:{src:"https://talygenv.github.io/Vue-UI-Content/images/Time-at-Work.png"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-4 text-center"},[a("img",{staticClass:"py-4",attrs:{src:"https://talygenv.github.io/Vue-UI-Content/images/productivity.png"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-4 text-center"},[a("img",{staticClass:"py-4",attrs:{src:"https://talygenv.github.io/Vue-UI-Content/images/idle-time.png"}})])}],o=(a("14d9"),a("13d5"),a("6ec9")),i=a.n(o),n=a("1321"),l=a.n(n),d=a("9769"),c=a("87d0"),p=a.n(c),u=a("ca17"),m=a.n(u),v=a("f2aa"),h=(a("542c"),[]),D="DD",g={components:{VueApexCharts:l.a,MultiSelect:i.a,ProgressBar:p.a,Treeselect:m.a,TimetrackDashBoardVue:v["default"]},data(){return{value:[],checkedUserIds:[],multiselectoptions:[],departmentIds:null,User:"2",ddlUser:[{id:"1",Name:"My View"},{id:"2",Name:"Department View"}],selecteddepartmets:"",countries:[],options:{colors:["#3c8028","#FFA500","#84857f"],chart:{type:"bar",stacked:!0},plotOptions:{bar:{horizontal:!1,columnWidth:"120%"}},stroke:{width:1,colors:["#fff"]},title:{text:"Productivity Bar"},xaxis:{categories:[],labels:{formatter:function(t){if("DD"!=D)return t;for(var e in h)if(7==h[e].length&&(h[e]="0"+h[e]),t==h[e])return t}}},fill:{opacity:1},legend:{position:"top",horizontalAlign:"right",offsetX:40}},series:[{name:"Productive App",data:[]},{name:"Nuetral App",data:[]},{name:"Unproductive App",data:[]}],colors:["#3c8028","#FFA500","#84857f"],fill:{type:"solid"},xaxis:{type:""},chartOptions:{chart:{type:"bar",height:350},plotOptions:{bar:{horizontal:!0,endingShape:"rounded"}},dataLabels:{enabled:!1},xaxis:{categories:[],labels:{formatter:function(t){return(.166*t).toFixed(0)+"%"}}},fill:{opacity:1},legend:{position:"top",horizontalAlign:"right",offsetX:40},fill:{opacity:1},legend:{position:"top",horizontalAlign:"right",offsetX:40}},series1:[{name:"Productive App",data:[]},{name:"Unproductive App",data:[]},{name:"Nuetral App",data:[]}],DeprtmentList:[],ProductiveEmpoyees:[],isShowViewAllProductive:!0,isShowViewAllUnProductive:!0,isShowViewAllNeutral:!0,UserID:[],noRecordsFoundMessage:"",fromDate:"",ToDate:"",ChartXAxis:"",ChartYAxis:"",timedata:[],children:[],user:[],ProductiveApps:[],UnProductiveApps:[],NeutralApps:[],AppDurationByCategories:[],checkedUserId:"",ArrivalTime:"",AverrageLeftTime:"",DurationTime:"",duration:"",dateType:"DD",weeklyFromDate:"",startDate:new Date,endDate:new Date,monthStartDate:new Date,monthEndDate:new Date,weekDate:{start:this.startDate,end:this.endDate},monthRange:{start:this.monthStartDate,end:this.monthEndDate},updateMonthRange:!1,isLoading:!1,ProductivityPercentage:null,IdleTime:null,ProductiveTime:null,ProductiveTotalTime:null,UnProductiveTotalTime:null,NeutralTotalTime:null,AllApps:[],mostusedAppsData:[],UnProductiveEployees:[],DashBoardVue:!1,isShowProductivityBar:!1,mostuserappdata:!1,departmentnames:[],deparment:!1,selectdepartment:!0,TempProductiveApps:[],TempUnProductiveApps:[],TempNeutralApps:[]}},watch:{value(t,e){if(t){var a=this;a.GetTimerDashboard(),a.GetProductivityEmployees(),a.GetArrivalTime()}}},async created(){var t=this;await t.GetTimerDashboard(),await t.GetDepartmentUser(),await t.GetProductivityEmployees(),await t.GetMostUsedApps(),await t.GetArrivalTime(),await t.GetUsedAppTimeDurationByCategories(),D="DD",t.fromDate=new Date,t.fromDate=t.ConvertDateFormat(t.fromDate),t.ToDate=t.fromDate+" 23:59:00",t.formatDuration(),h=t.getTimeRanges(60);var e=new Date,a=new Date(e.getFullYear(),e.getMonth()+1,0).getDate(),r=new Date;r.setDate(r.getDate()-6);var s=new Date;s.setDate(s.getDate()-a),t.monthEndDate=s,t.endDate=r,t.weekDate={start:t.startDate,end:t.endDate},t.monthRange={start:t.monthStartDate,end:t.monthEndDate}},updated(){var t=this;const e=t.ConvertDateFormat(new Date);if("WK"==t.dateType){var a=new Date;a.setDate(a.getDate()-6);const r=t.ConvertDateFormat(t.startDate),s=t.ConvertDateFormat(t.endDate),o=t.ConvertDateFormat(a);if(r!=e||s!=o){const e=new Date(t.startDate);e.setDate(t.startDate.getDate()+6);const a=Math.abs(t.endDate-t.startDate),r=Math.ceil(a/864e5);(t.endDate>e||r<6)&&(t.weekDate={start:t.startDate,end:e})}}else if("MM"==t.dateType){var r=new Date;const a=new Date;var s=new Date(r.getFullYear(),r.getMonth()+1,0).getDate();a.setDate(a.getDate()-s);const o=t.ConvertDateFormat(a),i=t.ConvertDateFormat(t.monthStartDate),n=t.ConvertDateFormat(t.monthEndDate),l=new Date(t.monthStartDate);if(l.setDate(t.monthStartDate.getDate()+s),i!=o||n!=e){const e=Math.abs(t.monthEndDate-t.monthStartDate),a=Math.ceil(e/864e5);(t.monthStartDate>l||a<31)&&(t.monthRange={start:t.monthStartDate,end:l})}else t.updateMonthRange&&(t.monthRange={start:t.monthStartDate,end:l})}},computed:{filteredOptions(){return this.multiselectoptions.filter(t=>t.children&&t.children.length>0)}},methods:{onchange:function(t,e){var a=this;a.selectdepartment=!1,a.isLoading=!1,a.deparment=!0;var r="";r=t.label;let s=a.departmentnames.findIndex(t=>t==r);s>-1?a.departmentnames.splice(s,1):(a.departmentnames.push(r),a.departmentnames.join(","))},GetDepartmentUser(){var t=this,e="departmentIds=0";d["a"].GetDepartmentwithUsers(e).then(e=>{t.multiselectoptions=e.data})},handleUserChange(){"1"===this.User&&this.$router.push({path:"/TimeTracking/TimetrackDashBoard"})},ConvertDateFormat(t){var e=new Date(t),a=("0"+(e.getMonth()+1)).slice(-2),r=("0"+e.getDate()).slice(-2),s=[e.getFullYear(),a,r].join("-");return s},selectToday:function(t){var e=this;e.dateType="DD",D="DD",e.fromDate=new Date,e.fromDate=e.ConvertDateFormat(e.fromDate),e.ToDate=e.fromDate+" 23:59:00",e.GetTimerDashboard()},selectWeekly:function(){var t=this;t.dateType="WK",D="WK";var e=new Date,a=e.getDay(),r=0==a?6:a-1,s=new Date(new Date(e).setDate(e.getDate()-r)),o=new Date(new Date(s).setDate(s.getDate()+6));t.weeklyFromDate=s,t.ToDate=o,t.ToDate=t.ConvertDateFormat(t.ToDate),t.weeklyFromDate=t.ConvertDateFormat(t.weeklyFromDate),t.GetTimerDashboard()},selectMonthly:function(){var t=this;t.dateType="MM",D="MM",t.fromDate="";var e=new Date,a=e.getFullYear(),r=e.getMonth(),s=new Date(a,r,1),o=new Date(a,r+1,0);t.fromDate=s,t.ToDate=o,t.fromDate=t.ConvertDateFormat(t.fromDate),t.ToDate=t.ConvertDateFormat(t.ToDate),t.GetTimerDashboard()},GetTimerDashboard:async function(){var t=this,e="";e="DD"==t.dateType?`fromDate=${t.fromDate}&toDate=${t.ToDate}&type=${t.dateType}&userIds=${t.value}&viewType=DepartmentView`:"WK"==t.dateType?`fromDate=${t.ConvertDateFormat(t.startDate)}&toDate=${t.ConvertDateFormat(t.endDate)}&type=${t.dateType} &userIds=${t.value}&viewType=DepartmentView`:`fromDate=${t.ConvertDateFormat(t.monthStartDate)}&toDate=${t.ConvertDateFormat(t.monthEndDate)}&type=${t.dateType} &userIds=${t.value}&viewType=DepartmentView`,t.getgraphdata(e)},getgraphdata(t){var e=this,a="";e.options.xaxis.categories=[],e.series[0].data=[],e.series[1].data=[],e.series[2].data=[],e.isLoading=!0,e.isShowProductivityBar=!1,d["a"].TimerDashboard(t).then(t=>{e.timedata=t.data.data,e.timedata&&(e.timedata.forEach(t=>{a!=t.TimeIntervalAMPM&&(a=t.TimeIntervalAMPM,e.options.xaxis.categories.push(t.TimeIntervalAMPM),e.series[0].data.push(t.ProductivePer),e.series[1].data.push(t.UnProductivePer),e.series[2].data.push(t.NeutralPer))}),e.isLoading=!1,e.isShowProductivityBar=!0)}).catch(t=>console.log(t))},convertSecondstoTime(t){const e=new Date(1e3*t),a=e.getUTCHours(),r=e.getUTCMinutes(),s=e.getSeconds(),o=a.toString().padStart(2,"0")+":"+r.toString().padStart(2,"0")+":"+s.toString().padStart(2,"0");return o},GetArrivalTime:async function(){var t=this,e="";e="DD"==t.dateType?`fromDate=${t.fromDate}&toDate=${t.ToDate}&type=DepartmentView&userIds=${t.value}`:"WK"==t.dateType?`fromDate=${t.ConvertDateFormat(t.startDate)}&toDate=${t.ConvertDateFormat(t.endDate)}&type=DepartmentView&userIds=${t.value}`:`fromDate=${t.ConvertDateFormat(t.monthStartDate)}&toDate=${t.ConvertDateFormat(t.monthEndDate)}&type=DepartmentView&userIds=${t.value}`,await d["a"].getArrivalTimeDashboard(e).then(e=>{t.ArrivalTime=e.data.data[0][0].startTime,t.AverrageLeftTime=e.data.data[0][0].endTime,t.DurationTime=e.data.data[0][0].ScreenCaptureTime,t.ProductivityPercentage=e.data.data[0][0].productivityPercentage,t.IdleTime=e.data.data[0][0].IdleTime,t.ProductiveTime=e.data.data[0][0].ProductiveTime})},formatDuration(t){const e=Math.floor(t),a=Math.round(60*(t-e));return`${e}h ${a}m`},async onDateChange(t){var e=this;e.fromDate=new Date(t),e.fromDate=e.ConvertDateFormat(e.fromDate),e.ToDate=e.fromDate+" 23:59:00",await e.GetTimerDashboard(),await e.GetAllApps(),await e.GetArrivalTime(),await e.GetMostUsedApps(),await e.GetProductivityEmployees(),await e.GetUsedAppTimeDurationByCategories()},getTimeRanges(t){const e=[],a=new Date,r={hour:"numeric",minute:"numeric"};for(let s=0;s<1440;s+=t)a.setHours(0),a.setMinutes(s),e.push(a.toLocaleTimeString("en",r));return e},async onWeekDateChange(t){var e=this;e.startDate=t.start,e.endDate=t.end;const a=new Date(e.startDate);a.setDate(e.startDate.getDate()+6);const r=Math.abs(e.endDate-e.startDate),s=Math.ceil(r/864e5);s<6&&e.ShowAlert("Please select atleast seven days.","warning",!1,e.$t("Alert")),e.endDate>a&&e.ShowAlert("You can not select more than seven days.","warning",!1,e.$t("Alert")),await e.GetTimerDashboard(),await e.GetAllApps(),await e.GetArrivalTime(),await e.GetMostUsedApps(),await e.GetProductivityEmployees(),await e.GetUsedAppTimeDurationByCategories()},async onMonthSelected(t){var e=this;e.updateMonthRange=!1,e.monthStartDate=t.start,e.monthEndDate=t.end;var a=new Date,r=new Date(a.getFullYear(),a.getMonth()+1,0).getDate();const s=new Date(e.monthStartDate);s.setDate(e.monthStartDate.getDate()+r);const o=Math.abs(e.monthEndDate-e.monthStartDate),i=Math.ceil(o/864e5);var n=new Date;n.setDate(n.getDate()-r),i<27?(e.updateMonthRange=!0,e.ShowAlert("Please select atleast 30 days.","warning",!1,e.$t("Alert")),e.monthEndDate=new Date,e.monthStartDate=n):e.monthEndDate>s&&(e.updateMonthRange=!0,e.ShowAlert("You can not select more than 30 days.","warning",!1,e.$t("Alert")),e.monthEndDate=new Date,e.monthStartDate=n),await e.GetTimerDashboard(),await e.GetAllApps(),await e.GetArrivalTime(),await e.GetMostUsedApps(),await e.GetProductivityEmployees(),await e.GetUsedAppTimeDurationByCategories()},togglePopover(){},GetAllApps:async function(){var t=this;t.isShowViewAllProductive=!0,t.isShowViewAllUnProductive=!0,t.isShowViewAllNeutral=!0;var e="";e="DD"==t.dateType?`fromDate=${t.fromDate}&toDate=${t.ToDate}&type=${t.dateType}&viewType=DepartmentView`:"WK"==t.dateType?`fromDate=${t.ConvertDateFormat(t.startDate)}&toDate=${t.ConvertDateFormat(t.endDate)}&type=${t.dateType}&viewType=DepartmentView`:`fromDate=${t.ConvertDateFormat(t.monthStartDate)}&toDate=${t.ConvertDateFormat(t.monthEndDate)}&type=${t.dateType}&viewType=DepartmentView`,await d["a"].GetAllApps(e).then(e=>{t.ProductiveApps=e.data.productive,t.UnProductiveApps=e.data.unproductive,t.NeutralApps=e.data.neutral;const a=t.ProductiveApps.reduce((t,e)=>t+e.duration,0);t.ProductiveTotalTime=t.convertSecondstoTime(a);const r=t.UnProductiveApps.reduce((t,e)=>t+e.duration,0);t.UnProductiveTotalTime=t.convertSecondstoTime(r);const s=t.NeutralApps.reduce((t,e)=>t+e.duration,0);t.NeutralTotalTime=t.convertSecondstoTime(s),null!=t.ProductiveApps&&(t.ProductiveApps.forEach((e,a)=>{var r={text:{color:"#FFFFFF",shadowEnable:!0,shadowColor:"#000000",fontSize:12,fontFamily:"Helvetica",dynamicPosition:!1,hideText:!0},progress:{color:e.color_code,backgroundColor:"#F2F2F2",inverted:!1},layout:{height:8,width:100,verticalTextAlign:61,horizontalTextAlign:43,zeroOffset:0,strokeWidth:30,progressPadding:0,type:"line"}};t.ProductiveApps[a].progress_bar_options=r}),t.TempProductiveApps=[],t.ProductiveApps.forEach((e,a)=>{a<5&&t.TempProductiveApps.push(e)})),null!=t.UnProductiveApps&&(t.UnProductiveApps.forEach((e,a)=>{var r={text:{color:"#FFFFFF",shadowEnable:!0,shadowColor:"#000000",fontSize:12,fontFamily:"Helvetica",dynamicPosition:!1,hideText:!0},progress:{color:e.color_code,backgroundColor:"#F2F2F2",inverted:!1},layout:{height:8,width:100,verticalTextAlign:61,horizontalTextAlign:43,zeroOffset:0,strokeWidth:30,progressPadding:0,type:"line"}};t.UnProductiveApps[a].progress_bar_options=r}),t.TempUnProductiveApps=[],t.UnProductiveApps.forEach((e,a)=>{a<5&&t.TempUnProductiveApps.push(e)})),null!=t.NeutralApps&&(t.NeutralApps.forEach((e,a)=>{var r={text:{color:"#FFFFFF",shadowEnable:!0,shadowColor:"#000000",fontSize:12,fontFamily:"Helvetica",dynamicPosition:!1,hideText:!0},progress:{color:e.color_code,backgroundColor:"#F2F2F2",inverted:!1},layout:{height:8,width:100,verticalTextAlign:61,horizontalTextAlign:43,zeroOffset:0,strokeWidth:30,progressPadding:0,type:"line"}};t.NeutralApps[a].progress_bar_options=r}),t.TempNeutralApps=[],t.NeutralApps.forEach((e,a)=>{a<5&&t.TempNeutralApps.push(e)}))})},ViewAllApps(t){var e=this;"productive"==t?(e.TempProductiveApps=e.ProductiveApps,e.isShowViewAllProductive=!1):"unproductive"==t?(e.TempUnProductiveApps=e.UnProductiveApps,e.isShowViewAllUnProductive=!1):(e.TempNeutralApps=e.NeutralApps,e.isShowViewAllNeutral=!1)},GetProductivityEmployees:async function(){var t=this,e="";e="DD"==t.dateType?`fromDate=${t.fromDate}&toDate=${t.ToDate}&userIds=${t.value}&type=${t.dateType}`:"WK"==t.dateType?`fromDate=${t.ConvertDateFormat(t.startDate)}&toDate=${t.ConvertDateFormat(t.endDate)}&userIds=${t.value}&type=${t.dateType}`:`fromDate=${t.ConvertDateFormat(t.monthStartDate)}&toDate=${t.ConvertDateFormat(t.monthEndDate)}&userIds=${t.value}&type=${t.dateType}`,await d["a"].GetProductiveEmployees(e).then(e=>{t.ProductiveEmpoyees=e.data.productiveEmp,t.UnProductiveEployees=e.data.unproductiveEmp,null!=t.ProductiveEmpoyees&&(t.ProductiveEmpoyees.forEach((e,a)=>{var r={text:{color:"#FFFFFF",shadowEnable:!0,shadowColor:"#000000",fontSize:12,fontFamily:"Helvetica",dynamicPosition:!1,hideText:!0},progress:{color:e.color_code,backgroundColor:"#F2F2F2",inverted:!1},layout:{height:8,width:100,verticalTextAlign:61,horizontalTextAlign:43,zeroOffset:0,strokeWidth:30,progressPadding:0,type:"line"}};t.ProductiveEmpoyees[a].progress_bar_options=r}),t.TempProductiveApps=[],t.ProductiveApps.forEach((e,a)=>{a<5&&t.TempProductiveApps.push(e)})),null!=t.UnProductiveEployees&&(t.UnProductiveEployees.forEach((e,a)=>{var r={text:{color:"#FFFFFF",shadowEnable:!0,shadowColor:"#000000",fontSize:12,fontFamily:"Helvetica",dynamicPosition:!1,hideText:!0},progress:{color:e.color_code,backgroundColor:"#F2F2F2",inverted:!1},layout:{height:8,width:100,verticalTextAlign:61,horizontalTextAlign:43,zeroOffset:0,strokeWidth:30,progressPadding:0,type:"line"}};t.UnProductiveEployees[a].progress_bar_options=r}),t.TempProductiveApps=[],t.ProductiveApps.forEach((e,a)=>{a<5&&t.TempProductiveApps.push(e)}))})},MyViewPage(t){this.checkedUserId=t,this.$router.push({name:"Timetrackid",params:{id:t}})},GetMostUsedApps:async function(){var t=this;t.chartOptions.xaxis.categories=[],t.series1[0].data=[];var e="";t.mostuserappdata=!1,e="DD"==D?`fromDate=${t.fromDate}&toDate=${t.ToDate}&type=${t.dateType}&userIds=${void 0==t.userId?"":t.userId}&viewType=DD`:"WK"==t.dateType?`fromDate=${t.ConvertDateFormat(t.startDate)}&toDate=${t.ConvertDateFormat(t.endDate)}&type=${t.dateType}&userIds=${void 0==t.userId?"":t.userId}&viewType=DD`:`fromDate=${t.ConvertDateFormat(t.monthStartDate)}&toDate=${t.ConvertDateFormat(t.monthEndDate)}&type=${t.dateType}&userIds=${void 0==t.userId?"":t.userId}&viewType=DD`,await d["a"].GetMostUsedApps(e).then(e=>{t.mostusedAppsData=e.data.data,null!=t.mostusedAppsData?t.mostusedAppsData.forEach((e,a)=>{t.chartOptions.xaxis.categories.push(e.application_display_name),"Productive"==t.mostusedAppsData.productive_type?t.series1[0].data.push(e.percentage_duration):"Unproductive"==t.mostusedAppsData.productive_type?t.series1[1].data.push(e.percentage_duration):t.series1[2].data.push(e.percentage_duration),t.mostuserappdata=!0}):t.mostusedAppsData=[]})},GetUsedAppTimeDurationByCategories:async function(){var t=this,e="";e=`fromDate=${t.fromDate}&toDate=${t.ToDate}&userIds=${void 0==t.userId?"":t.userId}&type=${t.dateType}&viewType=DepartmentView`,"DD"==D||(e="WK"==t.dateType?`fromDate=${t.ConvertDateFormat(t.startDate)}&toDate=${t.ConvertDateFormat(t.endDate)}&userIds=${void 0==t.userId?"":t.userId}&type=${t.dateType}&viewType=DepartmentView`:`fromDate=${t.ConvertDateFormat(t.monthStartDate)}&toDate=${t.ConvertDateFormat(t.monthEndDate)}&userIds=${void 0==t.userId?"":t.userId}&type=${t.dateType}&viewType=DepartmentView`),await d["a"].GetUsedAppTimeDurationByCategories(e).then(e=>{t.AppDurationByCategories=e.data.data,null!=t.AppDurationByCategories&&(t.AppDurationByCategories.forEach((e,a)=>{var r={text:{color:"#FFFFFF",shadowEnable:!0,shadowColor:"#000000",fontSize:12,fontFamily:"Helvetica",dynamicPosition:!1,hideText:!0},progress:{color:e.color_code,backgroundColor:"#F2F2F2",inverted:!1,width:e.percentage_duration},layout:{height:10,width:e.percentage_duration,verticalTextAlign:61,horizontalTextAlign:43,zeroOffset:0,strokeWidth:30,progressPadding:0,type:"line"}};t.AppDurationByCategories[a].progress_bar_options=r}),t.TempProductiveApps=[],t.ProductiveApps.forEach((e,a)=>{a<5&&t.TempProductiveApps.push(e)}))})}}},f=g,y=(a("d86e"),a("2877")),_=Object(y["a"])(f,r,s,!1,null,null,null);e["default"]=_.exports},"407e":function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,".np-progress-container{width:500px;height:50px;background:#cfcfcf;border-radius:6px;position:relative}.button-container{border:none;border-radius:0;display:inline-block;padding:5px 15px}.button-container a{text-decoration:none;padding:5px 10px;margin:0 5px}.text-primary{color:#fff}.button-container a:hover{background-color:#f0f0f0}.labelalign{float:right}.card-boxes{max-width:300px}.productive-box{max-width:32.86%;min-height:400px;height:auto}.w-200rem{width:30rem}.error-message{color:red}.error-text{margin-bottom:10px}",""]),t.exports=e},afbc:function(t,e,a){var r=a("407e");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var s=a("499e").default;s("0b281153",r,!0,{sourceMap:!1,shadowMode:!1})},d86e:function(t,e,a){"use strict";a("afbc")}}]);
//# sourceMappingURL=chunk-36f887d1.js.map