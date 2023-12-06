(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0b9b6b"],{

/***/ "33b7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"76b4e4ac-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ApprovalRule/AddApprovalRule.vue?vue&type=template&id=00cbebcd
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('div',{staticClass:"border p-3"},[_c('dynamic-form',{attrs:{"lang":"en","buttons":_vm.buttons,"schema":_vm.FormSchema},on:{"OnSubmit":_vm.onSubmit},scopedSlots:_vm._u([{key:"tgslot-Approval",fn:function(ref){
var data = ref.data;
return [_c('div',{staticClass:"input-group"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(data.fieldInfo.value),expression:"data.fieldInfo.value"}],staticClass:"form-control",attrs:{"maxlength":5,"step":"any"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(data.fieldInfo, "value", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',[_vm._v("Select Client")]),_vm._l((_vm.ApprovalChainList),function(item){return _c('option',{domProps:{"value":item.APPROVAL_CHAIN_ID}},[_vm._v(_vm._s(item.APPROVAL_CHAIN_NAME))])})],2),_c('span',{staticClass:"input-group-append"},[_c('a',{staticClass:"input-group-text",attrs:{"id":"spnOutOF"},on:{"click":function($event){return _vm.ShowGroupPopup(data.fieldInfo.value)}}},[_c('i',{staticClass:"fa fa-eye"})])])])]}}])}),_c('small',{staticClass:"text-danger"},[_vm._v("Fields marked with an asterisk (*) are mandatory.")]),(_vm.IsShowGroup)?_c('ApprovalGroup',{attrs:{"ApprovalchainId":_vm.ApprovalchainId,"ApprovalchainName":_vm.ApprovalchainName}}):_vm._e()],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/ApprovalRule/AddApprovalRule.vue?vue&type=template&id=00cbebcd

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// EXTERNAL MODULE: ./node_modules/tg-controls_cli/dist/myLib.common.js
var myLib_common = __webpack_require__("240d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"76b4e4ac-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Model/ApprovalGroupPopup.vue?vue&type=template&id=77a75809
var ApprovalGroupPopupvue_type_template_id_77a75809_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"my-popups"},[_c('div',{staticClass:"modal d-block"},[_c('div',{staticClass:"modal-dialog modal-dialog-centered",staticStyle:{"max-width":"900px !important"}},[_c('div',{staticClass:"modal-content"},[_c('div',{staticClass:"modal-header theme-primary partition-full"},[_c('h4',{staticClass:"modal-title"},[_vm._v(_vm._s(_vm.$t('ApprovalChain'))+": "+_vm._s(this.ChainName)+" ")]),_c('button',{staticClass:"close",attrs:{"type":"button"},on:{"click":_vm.ClosePopup}},[_c('em',{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),_c('div',{staticClass:"modal-body"},[_c('div',{staticClass:"col-md-12"},[_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"listing OuterMainDiv"},[_c('div',{staticClass:"row",staticStyle:{"max-height":"500px","overflow-y":"auto"}},[_c('tg-list',{attrs:{"IsShowAction":false,"listType":['List'],"ModuleName":"Approval","SubModuleCode":"ApprovalRule","IdentityColumn":"APPROVALCHAINGROUPMAPID","ListData":_vm.GroupData,"HeaderData":_vm.Headers,"callbackfunction":_vm.FetchData,"TotalRecords":_vm.TotalRecords,"ListDataCallBackFunction":_vm.FetchData,"SortExp":_vm.SortExp,"SortBy":_vm.SortBy,"NorecordfoundText":_vm.$t('NoRecordfound')},on:{"PagerButtonClick":_vm.pagerMethod},scopedSlots:_vm._u([{key:"slotdata",fn:function(ref){
var data = ref.data;
return [(data.column.COLUMN_NAME == 'GROUPNAME')?[_vm._v(" "+_vm._s(data.row.GROUPNAME)+" ")]:_vm._e(),(data.column.COLUMN_NAME == 'USERS')?[_vm._v(" "+_vm._s(data.row.USERS)+" ")]:_vm._e(),(data.column.COLUMN_NAME == 'APPROVERORDER')?[_vm._v(" "+_vm._s(data.row.APPROVERORDER)+" ")]:_vm._e(),(data.column.COLUMN_NAME == 'Action')?[_c('span',[_vm._v("Action")])]:_vm._e()]}}])})],1)])])])])])])])])}
var ApprovalGroupPopupvue_type_template_id_77a75809_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Model/ApprovalGroupPopup.vue?vue&type=template&id=77a75809

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Model/ApprovalGroupPopup.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var ApprovalGroupPopupvue_type_script_lang_js = ({
  // props: {
  //     ApprovalchainId: String

  // },
  props: {
    ApprovalchainId: {
      type: String
    },
    ApprovalchainName: {
      type: String
    }
  },
  data() {
    return {
      ChainName: '',
      leftSearchFields: [],
      TotalRecords: 0,
      listheaderbuttons: [],
      GroupData: [],
      IsShowGroup: false,
      Headers: [{
        "COLUMN_NAME": 'GROUPNAME',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('ApprovalGroupName'),
        "DISPLAY_ORDER": 1,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": 'USERS',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Users'),
        "DISPLAY_ORDER": 2,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": 'RankUp',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('RankUp'),
        "DISPLAY_ORDER": 3,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": 'RankDown',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('RankDown'),
        "DISPLAY_ORDER": 4,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": 'APPROVERORDER',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": 'Order',
        "DISPLAY_ORDER": 5,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": 'Action',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Action'),
        "DISPLAY_ORDER": 6,
        settings: {
          isInSlot: true
        }
      }]
    };
  },
  created: function () {
    debugger;
    var vm = this;
    vm.ChainName = vm.ApprovalchainName;
    var id = vm.ApprovalchainId;
    vm.FetchData();
  },
  methods: {
    async FetchData() {
      var vueObj = this;
      var url = `approvalChainId=${vueObj.ApprovalchainId}`;
      DataService["a" /* default */].ApprovalGroupListByApprovalCHainId(url).then(response => {
        if (response.data != null) {
          if (response.data.length > 0) {
            vueObj.GroupData = response.data;
            //vueObj.TotalRecords = response.data[0].TotalRecords
            //vueObj.TotalPages = Math.ceil(vueObj.TotalRecords / vueObj.PageSize);
            //vueObj.CurrentPage = vueObj.PageNumber;
            vueObj.noRecord = false;
          } else {
            vueObj.GroupData = [];
            vueObj.noRecord = true;
            vueObj.TotalRecords = 0;
          }
        } else {
          vueObj.noRecord = true;
          vueObj.GroupData = [];
          vueObj.TotalRecords = 0;
        }
        setTimeout(function () {
          vueObj.CheckBoxBootstrap();
        }, 100);
      });
      vueObj.isLoading = false;
    },
    ClosePopup() {
      var vm = this;
      vm.$parent.CloseGroupPopup();
    },
    commonHeaderButtonClick(event) {
      switch (event.callbackfunction) {
        case "DeleteRule":
          this.DeleteRule();
          break;
        case "AddNewGroup":
          this.AddNewGroup();
          break;
      }
    },
    actionButtonClick(callbackfunction, item) {},
    pagerMethod: function (value) {
      this.PageSize = value.PageSize;
      this.PageNumber = value.PageNumber;
      this.FetchData();
    },
    renderActions(row) {}
  }
});
// CONCATENATED MODULE: ./src/components/Model/ApprovalGroupPopup.vue?vue&type=script&lang=js
 /* harmony default export */ var Model_ApprovalGroupPopupvue_type_script_lang_js = (ApprovalGroupPopupvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Model/ApprovalGroupPopup.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Model_ApprovalGroupPopupvue_type_script_lang_js,
  ApprovalGroupPopupvue_type_template_id_77a75809_render,
  ApprovalGroupPopupvue_type_template_id_77a75809_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ApprovalGroupPopup = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ApprovalRule/AddApprovalRule.vue?vue&type=script&lang=js

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var AddApprovalRulevue_type_script_lang_js = ({
  components: {
    ApprovalGroup: ApprovalGroupPopup,
    TreeSelectField: myLib_common["TreeSelectField"]
  },
  data() {
    return {
      ApprovalchainName: '',
      ApprovalChainList: [],
      FormSchema: [{
        layoutType: "four",
        Data: [{
          astype: "TreeSelectField",
          label: this.$t('Location'),
          name: "Location",
          value: null,
          placeholder: "Select Location",
          disabled: true,
          visibility: false,
          config: {
            options: []
          },
          validationRules: {
            "required": true
          }
        }, {
          astype: "TextField",
          label: this.$t('AuditRuleName'),
          name: "AuditRule",
          value: "",
          placeholder: "",
          validationRules: {
            "required": true,
            max: 250
          }
        }, {
          astype: "RadioField",
          label: this.$t('SelectModule'),
          name: "Module",
          value: 1,
          placeholder: "",
          config: {
            options: [{
              value: 1,
              name: "Expense"
            }, {
              value: 2,
              name: "Leave"
            }, {
              value: 3,
              name: "Timesheet"
            }, {
              value: 4,
              name: "Attendance"
            }, {
              value: 5,
              name: "Product"
            }],
            onChange: this.OnDeploymentType
          }

          // validationRules: { "required": true },
        }, {
          astype: "SelectField",
          label: this.$t('SelectProject'),
          name: "project_name",
          value: 0,
          placeholder: "",
          visibility: true,
          config: {
            options: [],
            onChange: this.GetUserbyProject
          },
          validationRules: {
            "required": true
          }
        }, {
          astype: "MultiSelectField",
          label: 'Users',
          name: "User",
          value: null,
          mode: "tag",
          placeholder: "",
          config: {
            options: []
          },
          validationRules: {
            "required": true
          }
        }, {
          astype: "toggleField",
          label: this.$t('Limited Duration'),
          name: "Limited_Duration",
          value: 0,
          placeholder: "",
          visibility: true,
          validationRules: {
            "required": false
          }
        }, {
          astype: "RadioField",
          label: this.$t('ApprovalType'),
          name: "Approvaltype",
          value: 1,
          placeholder: "",
          config: {
            options: [{
              value: 1,
              name: "Approval Chain"
            }, {
              value: 2,
              name: "Client "
            }, {
              value: 3,
              name: "Both"
            }],
            onChange: this.OnApprovalType
            //CallBackFunction: null
          },

          validationRules: {
            "required": false
          }
        }, {
          astype: "SlotField",
          label: this.$t('SelectApproval'),
          name: "Approval",
          value: "0",
          placeholder: "",
          validationRules: {
            "required": false,
            max: 5,
            "min_value": 1
          },
          visibility: true,
          config: {
            onKeyUp: this.GetAssetCost
          }
        },
        // {
        //     astype: "SelectField",
        //     label: this.$t('SelectApproval'),
        //     name: "project_name",
        //     value: "",
        //     placeholder: "",
        //     visibility:true,
        //     config: {
        //         options: [],

        //     },
        //     validationRules: { "required": true },
        // },
        {
          astype: "MultiSelectField",
          label: this.$t('Select Client'),
          name: "Client",
          value: null,
          mode: "Select Client",
          visibility: false,
          placeholder: "",
          config: {
            options: []
          },
          validationRules: {
            "required": true
          }
        }, {
          astype: "SelectField",
          label: 'Status',
          name: "Status_value",
          value: 1001,
          placeholder: "",
          config: {
            options: [{
              value: 1001,
              name: "Active"
            }, {
              value: 1002,
              name: "InActive"
            }]
          },
          validationRules: {
            "required": true
          }
        }, {
          astype: "toggleField",
          label: this.$t('Use Sequence'),
          name: "Sequence",
          value: 0,
          placeholder: "",
          validationRules: {
            "required": false
          }
        }]
      },
      // {
      //     layoutType: "One",
      //     Data: [

      //     ]
      // },
      {
        layoutType: "One",
        Data: [{
          astype: "TextAreaField",
          label: this.$t('Description'),
          name: "Description",
          value: null,
          placeholder: ""
        }]
      }],
      buttons: [{
        type: "submit",
        class: "btn btn-success",
        text: "<i class='fa fa-save pr-2'></i>Save"
      }, {
        type: "button",
        class: "btn btn-danger",
        text: "<i class='fa fa-close pr-2'></i>Cancel",
        onClick: this.onCancel
      }],
      myObj: [],
      LocationData: [],
      StatusData: [{
        name: 'Active',
        value: 1001
      }, {
        name: 'Inactive',
        value: 1002
      }],
      StateData: [],
      TagData: [],
      DataLoaded: 0,
      UserId: '',
      IsShowGroup: false,
      ApprovalchainId: null,
      ApprovalChainList: []
    };
  },
  created() {
    this.GetLocation();
    this.GetProjectList();
    this.GetApprovalChain();
  },
  methods: {
    onSubmit: function (formfields) {
      debugger;
      var vm = this;
      if (formfields.Location == null) {
        var jsonobj = {
          ApprovalRuleId: 0,
          RuleName: formfields.AuditRule,
          RuleDescription: formfields.Description,
          ApprovalTypeId: formfields.Approvaltype,
          IsLimitedDuration: formfields.Limited_Duration,
          dStart: null,
          dEnd: null,
          // RuleBaseType: formfields.Description,
          ProjectId: formfields.project_name,
          Users: formfields.User,
          Tasks: null,
          Clients: null,
          ClientApprovalType: "ApprovalChain",
          LocationId: formfields.Location,
          ApprovalChainId: formfields.Approval,
          UseSequence: formfields.Sequence,
          StatusId: formfields.Status_value,
          Users: Array.prototype.map.call(formfields.User, function (item) {
            return item.value;
          }).join(",")
        };
      } else {
        var jsonobj = {
          ApprovalRuleId: 0,
          RuleName: formfields.AuditRule,
          RuleDescription: formfields.Description,
          ApprovalTypeId: formfields.Approvaltype,
          IsLimitedDuration: formfields.Limited_Duration,
          dStart: null,
          dEnd: null,
          // RuleBaseType: formfields.Description,
          ProjectId: formfields.project_name,
          Users: formfields.User,
          Tasks: null,
          Clients: null,
          ClientApprovalType: "ApprovalChain",
          LocationId: formfields.Location,
          ApprovalChainId: formfields.Approval,
          UseSequence: formfields.Sequence,
          StatusId: formfields.Status_value
          // Users: Array.prototype.map.call(formfields.User, function (item) {
          //     return item.value;
          // }).join(","),
        };
      }

      var poststring = JSON.stringify(jsonobj);
      DataService["a" /* default */].AddRule(poststring).then(response => {
        debugger;
        if (response.data == true) {
          this.$router.push({
            name: 'ApprovalRule'
          });
          vm.ShowAlert("Approval Rule SuccessFully added ", 'success', true, vm.$t('Alert'));
        }
      });
    },
    GetProjectList: async function () {
      debugger;
      // var usertype = GetUserInfo.value.UserType;${usertype}
      var vm = this;
      var url = `userType=CA&IsEncrptedId='no'`;
      DataService["a" /* default */].GetProjectListing(url).then(response => {
        var json = response.data;
        //  var array = JSON.parse("[" + json + "]");
        if (json != null) {
          json.forEach(function (item, index) {
            vm.FormSchema[0].Data[3].config.options.push({
              name: `${item.ProjectName}`,
              value: `${item.ProjectId}`
            });
          });
          return vm.LeadStatusList;
        }
      });
    },
    GetUserbyProject: async function (e, field) {
      debugger;
      var vm = this;
      vm.FormSchema[0].Data[4].config.options = [];
      var url = `ProjectId=${field.value}&ModuleName=APPROVALRULE`;
      DataService["a" /* default */].GetUsersByProjectId(url).then(response => {
        var json = response.data;
        if (json != null) {
          json.forEach(function (item, index) {
            vm.FormSchema[0].Data[4].config.options.push({
              name: `${item.USER_NAME}`,
              value: `${item.USER_ID}`
            });
          });
        }
      });
    },
    GetClientbyProject: async function (e, field) {
      debugger;
      var vm = this;
      vm.FormSchema[0].Data[4].config.options = [];
      var url = `ProjectId=${field.value}`;
      DataService["a" /* default */].LoadClientByProjectId(url).then(response => {
        var json = response.data;
        if (json != null) {
          json.forEach(function (item, index) {
            vm.FormSchema[0].Data[8].config.options.push({
              name: `${item.USERNAME}`,
              value: `${item.USER_ID}`
            });
          });
          return vm.LeadStatusList;
        }
      });
    },
    GetUsers: async function () {
      debugger;
      var vm = this;
      vm.FormSchema[0].Data[4].config.options = [];
      var url = `isIncludeLoginUserId=1&approvalGroupIds=&approvalChainIds=&moduleName=APPROVALRULE&DepartmentIds`;
      DataService["a" /* default */].LoadUsersByCompanyId(url).then(response => {
        var json = response.data;
        if (json != null) {
          json.forEach(function (item, index) {
            vm.FormSchema[0].Data[4].config.options.push({
              name: `${item.USERNAME}`,
              value: `${item.USER_ID}`
            });
          });
          return vm.LeadStatusList;
        }
      });
    },
    GetApprovalChain: async function () {
      debugger;
      var vm = this;
      //var url = `isIncludeLoginUserId=1&approvalGroupIds=&approvalChainIds=&moduleName=APPROVALRULE&DepartmentIds`;
      DataService["a" /* default */].GetApprovalChainsByCompanyId().then(response => {
        debugger;
        vm.ApprovalChainList = response.data;
        // if (json != null) {
        //     json.forEach(function (item, index) {
        //         (vm.FormSchema)[0].Data[7].config.options.push({
        //             name: `${item.APPROVAL_CHAIN_NAME}`,
        //             value: `${item.APPROVAL_CHAIN_ID}`
        //         })
        //     })
        //   return vm.LeadStatusList;
        // }
      });
    },

    onCancel: function () {
      this.$router.push({
        name: 'ApprovalRule'
      });
    },
    ShowGroupPopup(targetValue) {
      debugger;
      const foundElement = this.ApprovalChainList.find(element => element.APPROVAL_CHAIN_ID === targetValue);
      this.ApprovalchainId = foundElement.APPROVAL_CHAIN_ID;
      this.ApprovalchainName = foundElement.APPROVAL_CHAIN_NAME;
      this.IsShowGroup = true;
      // DataService.CheckPrivilege(this.privilegeParams + 'AddRelationship').then((response)=>{                
      //   if (response.data==true) {
      //     this.IsShowGroup = true;
      //   }else{
      //     this.ShowAlert(this.$t('NotAuthorizedSection'), "failure",true, "Alert");
      //   }
      // });
    },

    CloseGroupPopup() {
      debugger;
      var vm = this;
      vm.IsShowGroup = false;
    },
    async GetLocation() {
      debugger;
      var vm = this;
      vm.isLoading = true;
      var params = `reqForm=`;
      await DataService["a" /* default */].GetLocationByCompanyId(params).then(response => {
        vm.LocationData = response.data;
        vm.FindalLocationArray = [];
        vm.LocationData.forEach(value => {
          var CheckIfExist = vm.FindalLocationArray.filter(function (el) {
            return el.COMPANY_LOCATION_ID == value.COMPANY_LOCATION_ID;
          });
          if (CheckIfExist.length == 0) {
            if (value.PARENT_LOCATION_ID == null) {
              let locationId = value.COMPANY_LOCATION_ID;
              let rslt = vm.getChildLocation(locationId, value, response.data);
              vm.FindalLocationArray.push(rslt);
            }
          }
        });
        vm.FormSchema[0].Data[0].config.options = vm.FindalLocationArray;
      });
    },
    getChildLocation: function (locationId, currentItem, data) {
      let ths = this;
      let treeArray = {};
      treeArray = {
        id: currentItem.COMPANY_LOCATION_ID,
        label: currentItem.LOCATION_NAME
      };
      let retrunArray = treeArray;
      var childArray = data.filter(function (el) {
        return el.PARENT_LOCATION_ID == locationId;
      });
      let finalChildArray = [];
      childArray.forEach(value => {
        let ChildfolderId = value.COMPANY_LOCATION_ID;
        var CheckIfExist1 = finalChildArray.filter(function (el) {
          return el.COMPANY_LOCATION_ID == value.COMPANY_LOCATION_ID;
        });
        if (CheckIfExist1.length == 0) {
          var CheckIfExist = data.filter(function (el) {
            return el.PARENT_LOCATION_ID == ChildfolderId;
          });
          if (CheckIfExist != null && CheckIfExist.length > 0) {
            let rslt = ths.getChildLocation(ChildfolderId, value, data);
            finalChildArray.push(rslt);
          } else {
            treeArray = {
              id: `${value.COMPANY_LOCATION_ID}`,
              label: `${value.LOCATION_NAME}`
            };
            finalChildArray.push(treeArray);
          }
        }
      });
      retrunArray.children = finalChildArray;
      return retrunArray;
    },
    OnDeploymentType(event, field) {
      debugger;
      var vm = this;
      field.value = event.target.getAttribute('data-value');
      if (field.value == 1) {
        vm.FormSchema[0].Data[4].visibility = true;
        vm.FormSchema[0].Data[3].visibility = true;
        vm.FormSchema[0].Data[6].visibility = true;
        vm.FormSchema[0].Data[0].visibility = false;
        vm.FormSchema[0].Data[5].visibility = true;
      }
      if (field.value == 2) {
        vm.FormSchema[0].Data[4].visibility = true;
        vm.FormSchema[0].Data[3].visibility = false;
        vm.FormSchema[0].Data[6].visibility = false;
        vm.FormSchema[0].Data[0].visibility = false;
        vm.FormSchema[0].Data[5].visibility = true;
        vm.FormSchema[0].Data[8].config.options = [];
        vm.GetUsers();
      }
      if (field.value == 3) {
        vm.FormSchema[0].Data[4].visibility = true;
        vm.FormSchema[0].Data[3].visibility = true;
        vm.FormSchema[0].Data[6].visibility = true;
        vm.FormSchema[0].Data[0].visibility = false;
        vm.FormSchema[0].Data[5].visibility = true;
        //GetProjectList();
      }

      if (field.value == 4) {
        vm.FormSchema[0].Data[3].visibility = false;
        vm.FormSchema[0].Data[6].visibility = false;
        vm.FormSchema[0].Data[0].visibility = false;
        vm.FormSchema[0].Data[5].visibility = true;
        vm.GetUsers();
      }
      if (field.value == 5) {
        vm.FormSchema[0].Data[3].visibility = false;
        vm.FormSchema[0].Data[4].visibility = false;
        vm.FormSchema[0].Data[6].visibility = true;
        vm.FormSchema[0].Data[5].visibility = false;
        vm.FormSchema[0].Data[0].visibility = true;
        vm.FormSchema[0].Data[8].config.options = [];
        // vm.GetLocation();
      }
    },

    OnApprovalType(event, field) {
      debugger;
      var vm = this;
      field.value = event.target.getAttribute('data-value');
      if (field.value == 1) {
        vm.FormSchema[0].Data[7].visibility = true;
        vm.FormSchema[0].Data[8].visibility = false;
      }
      if (field.value == 2) {
        vm.FormSchema[0].Data[7].visibility = false;
        vm.FormSchema[0].Data[8].visibility = true;
      }
      if (field.value == 3) {
        this.FormSchema[0].Data[7].visibility = true;
        this.FormSchema[0].Data[8].visibility = true;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/views/ApprovalRule/AddApprovalRule.vue?vue&type=script&lang=js
 /* harmony default export */ var ApprovalRule_AddApprovalRulevue_type_script_lang_js = (AddApprovalRulevue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/views/ApprovalRule/AddApprovalRule.vue





/* normalize component */

var AddApprovalRule_component = Object(componentNormalizer["a" /* default */])(
  ApprovalRule_AddApprovalRulevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AddApprovalRule = __webpack_exports__["default"] = (AddApprovalRule_component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d0b9b6b.js.map