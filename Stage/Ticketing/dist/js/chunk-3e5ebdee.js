(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e5ebdee"],{"1dfb":function(t,e,a){var s=a("5f8f");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var o=a("499e").default;o("3d76c577",s,!0,{sourceMap:!1,shadowMode:!1})},"4a2c":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("section",[e("loader",{attrs:{"is-visible":t.isLoading}}),e("tg-list",{attrs:{IsShowAction:!1,ModuleName:"Ticketing",SubModuleCode:"ManageCategory",RenderRowActionMethod:t.renderActions,IdentityColumn:"TICKET_ARTICLE_CATEGORY_ID",HeaderText:t.$t("ManageCategory"),ListData:t.SAData,HeaderData:t.Headers,HeaderButtons:t.listheaderbuttons,TotalRecords:t.TotalRecords,SearchFields:t.leftSearchFields,ListDataCallBackFunction:t.FetchData,showCheckBox:!0,SortExp:t.SortExp,SortBy:t.SortBy,NorecordfoundText:t.$t("NoRecordfound")},on:{ActionButtonClick:t.actionButtonClick,LeftsearchButtonClick:t.leftCommonSearch,PagerButtonClick:t.pagerMethod,HeaderButtonClick:t.commonHeaderButtonClick,SortdataButtonClick:t.sortdata},scopedSlots:t._u([{key:"slotdata",fn:function({data:a}){return["NoOfArticle"==a.column.COLUMN_NAME?[e("td",{staticClass:"text-center single-action"},[e("span",[e("em",{staticClass:"fa fa-file-text-o",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"noti-circle noti-green"},[t._v(t._s(a.row.NoOfArticle))])])])]:t._e(),"STATUS_NAME"==a.column.COLUMN_NAME?[e("a",{staticClass:"inactive-disabled"},[e("span",{class:t.getStatusClassList(a.row.STATUS_NAME,"STATUS_NAME")},[t._v(" "+t._s(a.row[a.column.COLUMN_NAME])+" ")])])]:t._e(),"Edit"==a.column.COLUMN_NAME?[e("td",{staticClass:"text-center single-action"},[e("a",{staticClass:"updateCat editicon",attrs:{title:"Edit"},on:{click:function(e){return t.AddCategory(a.row.TICKET_ARTICLE_CATEGORY_ID)}}},[e("em",{staticClass:"fa fa-pencil text-success action-icon"})])])]:t._e()]}}])}),t.IsCategory?e("AddCategory",{attrs:{CategoryId:t.CategoryId}}):t._e()],1)},o=[],i=(a("14d9"),a("9769"));let r=[{title:"Add New",iconClass:"fa fa-plus",callbackfunction:"callAdd",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!0},{id:"DeleteMultiple",title:"Delete",iconClass:"fa-trash-o",callbackfunction:"commonDeleteData",isdisabled:!0,isvisible:!0,isEnabledOnSelectedRow:!0}],n=[{fieldName:"Category",fieldType:"radio",fieldIcon:"fa fa-envelope",fieldSearchConditionName:[""],paramName:"categoryId",isSearch:!1,value:"",listOptions:[]},{fieldName:"Sub Category",fieldType:"text",fieldIcon:"fa fa-envelope",fieldSearchConditionName:[""],paramName:"subCategoryId",isSearch:!1,value:"",listOptions:[]},{fieldName:"Status",fieldType:"radio",fieldIcon:"fa fa-envelope",fieldSearchConditionName:[""],paramName:"statusId",isSearch:!1,value:"",listOptions:[{name:"Active",value:1001},{name:"Inactive",value:1002}]}];async function l(t,e,a){var s=this;"Category"==a&&i["a"].CategoryListDDL().then(t=>{if(t.data.result.data.length>0&&""!=t.data.result.data){var e=t.data.result.data;e.forEach(t=>{let e={name:t.TICKET_ARTICLE_CATEGORY_NAME,value:t.TICKET_ARTICLE_CATEGORY_ID};s.leftsearchSchema[0].listOptions.push(e)})}})}var c={buttons:r,leftsearchSchema:n,bindleftCommonSearchdropdown:l},d=function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-popups"},[e("loader",{attrs:{"is-visible":t.isLoading}}),e("div",{staticClass:"modal d-block"},[e("div",{staticClass:"modal-dialog modal-dialog-centered"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header theme-primary partition-full"},[e("h4",{staticClass:"modal-title"},[t._v(t._s(t.$t("AddCategory")))]),e("button",{staticClass:"close",attrs:{type:"button"},on:{click:t.Close}},[e("em",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),e("div",{staticClass:"modal-body"},[e("dynamic-form",{ref:"AddForm",attrs:{lang:"en",buttons:t.buttons,schema:t.FormSchema},on:{OnSubmit:t.onSubmit}})],1)])])])],1)},u=[],h={props:{CategoryId:{type:Number}},data(){return{isLoading:!1,FormSchema:[{layoutType:"double",Data:[{astype:"TextField",label:this.$t("Category Name"),name:"CategoryName",value:"",placeholder:"",disabled:!1,config:{options:[]}},{astype:"SelectField",label:this.$t("Parent Category"),name:"ParentCategoryName",value:"",placeholder:"",disabled:!1,config:{options:[]}},{astype:"SelectField",label:this.$t("Status"),name:"Status",value:"",placeholder:"",config:{options:[]}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Close",onClick:this.Close}]}},created:function(){this.CategoryListDDL(),null!=this.CategoryId&&this.GetDetails()},methods:{Close:function(){this.$parent.IsCategory=!1},CategoryListDDL:function(){i["a"].CategoryListDDL().then(t=>{t.data.result.data.length>0&&(t.data.result.data.forEach(t=>{let e={name:t.TICKET_ARTICLE_CATEGORY_NAME,value:t.TICKET_ARTICLE_CATEGORY_ID};this.FormSchema[0].Data[1].config.options.push(e)}),this.FormSchema[0].Data[2].config.options=[{value:1001,name:"Active"},{value:1002,name:"Inactive"}],this.$refs.AddForm.UpdateKeyValue())})},onSubmit(t,e){var a=this;a.isLoading=!0;var s={CategoryId:0==a.CategoryId?0:a.CategoryId,RequestType:0==a.CategoryId?"ADD":"UPDATE",StatusId:t.Status,ParentCategoryId:t.ParentCategoryName,CategoryName:t.CategoryName},o=JSON.stringify(s);i["a"].SaveUpdateCategory(o).then(t=>{"Success"==t.data.status&&(0==t.data.result?(a.ShowAlert(a.$t("AddedSuccess",[a.$t("Category")]),"Success",!0,a.$t("Alert")),a.$parent.FetchData(),a.Close()):3==t.data.result?(a.ShowAlert(a.$t("AlreadyExists",[a.$t("Category")]),"failure",!0,a.$t("Alert")),a.Close()):1==t.data.result&&(a.ShowAlert(a.$t("UpdatedSuccess",[a.$t("Category")]),"Success",!0,a.$t("Alert")),a.$parent.FetchData(),a.Close())),a.isLoading=!1})},GetDetails:function(){var t=this,e="categoryId="+t.CategoryId;i["a"].GetDetails(e).then(e=>{if(e.data.result.data.length>0){var a=e.data.result.data;t.FormSchema[0].Data[0].value=a[0].ticket_article_category_name,t.FormSchema[0].Data[1].value=a[0].ticket_article_category_parent,t.FormSchema[0].Data[2].value=a[0].status_id}}),t.$refs.AddForm.UpdateKeyValue()}}},C=h,g=a("2877"),m=Object(g["a"])(C,d,u,!1,null,null,null),S=m.exports,f={components:{AddCategory:S},data(){return{isLoading:!1,CategoryId:null,IsAddCannedReply:!1,listheaderbuttons:c.buttons,leftSearchFields:c.leftsearchSchema,Headers:[{COLUMN_NAME:"TICKET_ARTICLE_CATEGORY_NAME",DATA_TYPE:"string",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Category Name",DISPLAY_ORDER:1},{COLUMN_NAME:"SUBCATEGORYNAME",DATA_TYPE:"string",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Sub Category",DISPLAY_ORDER:2},{COLUMN_NAME:"STATUS_NAME",DATA_TYPE:"string",SORTABLE:!0,VISIBLE:!0,DISPLAY_NAME:"Status",DISPLAY_ORDER:3,settings:{isInSlot:!0}},{COLUMN_NAME:"NoOfArticle",DATA_TYPE:"string",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Number Of Articles",DISPLAY_ORDER:4,settings:{isInSlot:!0}},{COLUMN_NAME:"Edit",DATA_TYPE:"string",SORTABLE:!1,VISIBLE:!0,DISPLAY_NAME:"Edit",DISPLAY_ORDER:5,settings:{isInSlot:!0}}],SAData:[],SortBy:"",SortExp:"",TotalRecords:0,PageNumber:1,PageSize:10,searchCondition:"",TemplateId:null,IsCategory:!1}},created:async function(){await c.bindleftCommonSearchdropdown(this,"Ticketing","Category"),this.FetchData()},methods:{getStatusClassList:function(t){var e="";switch(t){case"Active":e="px-2 text-center bg-success text-white d-block";break;case"Inactive":e="px-2 text-center bg-danger text-white d-block";break;default:e=""}return e},FetchData:function(){var t=this;t.isLoading=!0;var e=`sortBy=${t.SortBy}&sortExp=${t.SortExp}&isPaged=&pageSize=${t.PageSize}&pageNum=${t.PageNumber}&${t.searchCondition}`;i["a"].ManageCategoryList(e).then(e=>{"Success"==e.data.status&&e.data.result.data.length>0&&(t.SAData=e.data.result.data,t.TotalRecords=e.data.result.data[0].TOTAL_RECORDS,t.listheaderbuttons[1].isdisabled=!0,t.isLoading=!1)})},commonHeaderButtonClick:function(t){switch(t.callbackfunction){case"callAdd":this.AddCategory(0);break;case"commonDeleteData":this.commonDeleteData();break}},AddCategory:function(t){this.CategoryId=t,this.IsCategory=!0},renderActions:function(){},pagerMethod:function(t){this.PageSize=t.PageSize,this.PageNumber=t.PageNumber,this.FetchData()},leftCommonSearch:function(t){this.PageNumber=t.PageNumber,this.isPaged=1,"undefined"!=typeof t.searchConditionJson?this.searchCondition=t.searchConditionJson:this.searchCondition="",this.FetchData()},actionButtonClick:function(){},sortdata:function(t){this.SortBy=t;var e="ASC";"ASC"==this.SortExp&&(e="DESC"),this.SortExp=e,this.SortBy=t,this.SortExp=e,this.PageNumber=1,this.GroupStart=this.PageNumber,this.GroupEnd=this.PageNumber+2,this.FetchData()},commonDeleteData:function(t){var e=this,a="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){a.length>0&&(a+=","),a+=$(this).val()})),a.length>0?e.confirmR(e.$t("ConfirmDelete"),!0,e.$t("Delete")+"  "+e.$t("Category"),(function(){var t=`ids=${a}&tableName=TALYGEN_ticket_article_category&primaryKey=ticket_article_category_id`;i["a"].DeleteData(t).then(t=>{var a="";"DeletedSuccess"==t.data?(e.listheaderbuttons[1].isdisabled=!0,e.FetchData(),a=e.ShowAlert(e.$t("DeletedSuccess",[e.$t("Category")]),"Success",!0,e.$t("Alert"))):a=e.ShowAlert(e.$t("DeletedError",[e.$t("Category")]),"failure",!0,e.$t("Alert")),setTimeout((function(){a.modal("hide")}),2e3)})})):alert(e.$t("Selectanyrecordtodelete"))}}},A=f,y=(a("8f63"),Object(g["a"])(A,s,o,!1,null,null,null));e["default"]=y.exports},"5f8f":function(t,e,a){var s=a("24fb");e=s(!1),e.push([t.i,".textstyle{color:#007bff;text-decoration:none;background-color:transparent}",""]),t.exports=e},"8f63":function(t,e,a){"use strict";a("1dfb")}}]);
//# sourceMappingURL=chunk-3e5ebdee.js.map