(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d7694"],{7764:function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a._self._c;return t("section",{staticClass:"main-content"},[t("loader",{attrs:{"is-visible":a.isLoading}}),t("div",[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-12 padding-t_8"},[t("div",{staticClass:"theme-primary partition-full"},[t("span",{staticClass:"p-name text-white"},[a._v(a._s(a.$t("AddGroup")))])])])])]),t("div",{staticClass:"border p-3"},[a.DataLoaded?t("dynamic-form",{attrs:{lang:"en",buttons:a.buttons,schema:a.FormSchema},on:{OnSubmit:a.onSubmit}}):a._e(),t("div",{staticClass:"col-lg-6"},[t("small",{staticClass:"text-danger"},[a._v(a._s(a.$t("MandatoryString")))])])],1)],1)},i=[],o=(e("14d9"),e("1115")),n={data(){return{isLoading:!1,Groupname:"",ReaderData:[],UsersData:[],Status:"",GroupDetail:"",Reader:"",Users:"",DataLoaded:0,FormSchema:[{layoutType:"double",Data:[{astype:"TextField",label:this.$t("GroupName"),name:"GroupName",value:"",placeholder:"",validationRules:{required:!0}},{astype:"SelectField",label:this.$t("Reader"),name:"Reader",value:"",placeholder:"",validationRules:{required:!0},config:{options:[]}},{astype:"SelectField",label:this.$t("Users"),name:"Users",value:"",placeholder:"",validationRules:{required:!0},config:{options:[]}},{astype:"SelectField",label:this.$t("Status"),name:"Status",value:"",placeholder:"",config:{options:[{value:"1001",name:"Active"},{value:"1002",name:"InActive"}]}}]},{Data:[{astype:"TextAreaField",label:this.$t("GroupDetails"),name:"GroupDescription",value:"",placeholder:"",validationRules:"",config:{rows:5}}]}],buttons:[{type:"submit",class:"btn btn-success",text:"<i class='fa fa-save pr-2'></i>Save"},{type:"button",class:"btn btn-danger",text:"<i class='fa fa-close pr-2'></i>Cancel",onClick:this.onCancel}]}},created:async function(){await this.GetDeviceList(),null!=this.$route.params.id&&(await this.GetNotficationUsers(),await this.ManageItemsGroup()),this.DataLoaded=1},methods:{GetDeviceList:async function(){await o["a"].GetDeviceList().then(a=>{a.data.data.forEach(a=>{this.FormSchema[0].Data[1].config.options.push({name:a.name+")",value:""+a.value})})})},GetNotficationUsers:async function(){var a="moduleName=ASSETASSIGNMENT";await o["a"].GetNotficationUsers(a).then(a=>{a.data.data.forEach(a=>{this.FormSchema[0].Data[2].config.options.push({name:`${a.NAME}(${a.DEPARTMENT_NAME})`,value:""+a.USER_ID})}),console.log(this.FormSchema[0].Data[2].config.options)})},onSubmit:function(a){var t=this,e={GroupId:0,GroupName:a.GroupName,LocationId:0,ReaderId:a.Reader,UserIds:a.Users,GroupDetails:a.GroupDescription,StatusId:a.Status},s=JSON.stringify(e);o["a"].AddGroup(s).then(a=>{"insert"==a.data?(t.ShowAlert(t.$t("AddedSuccess",[t.$t("Group_Item")]),"success",!0,t.$t("Alert")),t.onCancel()):t.ShowAlert(t.$t("Something_Wrong"),"failure",!0,t.$t("Alert"))})},onCancel:function(){this.$router.push({name:"GroupListing"})},ManageItemsGroup:async function(){var a="id="+this.$route.params.id;await o["a"].GetItemsGroupById(a).then(a=>{a.data.length>0&&(this.FormSchema[0].Data[0].value=a.data[0].group_name,this.FormSchema[0].Data[1].value=a.data[0].reader_id,this.FormSchema[0].Data[2].value=a.data[0].user_ids,this.FormSchema[0].Data[3].value=a.data[0].status_id,this.FormSchema[1].Data[0].value=a.data[0].group_details)})}}},r=n,l=e("2877"),d=Object(l["a"])(r,s,i,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0d7694.js.map