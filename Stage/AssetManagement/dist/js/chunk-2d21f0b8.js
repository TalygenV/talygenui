(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d21f0b8"],{

/***/ "d7c2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"55cbdea1-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ProductAssignment/Manage.vue?vue&type=template&id=6a87bd71&lang=en&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "main-content"
  }, [_c('loader', {
    attrs: {
      "is-visible": _vm.isLoading
    }
  }), _c('div', [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12 padding-t_8"
  }, [_c('div', {
    staticClass: "theme-primary partition-full"
  }, [_c('span', {
    staticClass: "p-name text-white"
  }, [_vm._v(_vm._s(_vm.$t('ASSET_ASSIGN_Desc')))]), _c('span', {
    staticClass: "p-actions float-right"
  }, [_c('a', {
    staticClass: "p-action-btn text-white",
    attrs: {
      "title": "BacktoList"
    },
    on: {
      "click": _vm.BackTolist
    }
  }, [_c('em', {
    staticClass: "fa fa-angle-double-left pr-2"
  }), _c('br'), _c('span', [_vm._v(_vm._s(_vm.$t('BacktoList')))])])])])])])]), _c('div', {
    staticClass: "border p-3"
  }, [_c('div', {
    staticClass: "col-md-12 p-0",
    attrs: {
      "id": "dynmicForm"
    }
  }, [_c('Form', {
    ref: "ProductAssignmentForm"
  }, [_vm.DataLoaded ? _c('dynamic-form', {
    attrs: {
      "lang": "en",
      "buttons": _vm.buttons,
      "schema": _vm.FormSchema
    },
    scopedSlots: _vm._u([{
      key: "tgslot-DateofAssignment",
      fn: function ({
        data
      }) {
        return [_c('div', {
          staticClass: "input-group"
        }, [_c('v-date-picker', {
          staticClass: "timedate input-group",
          attrs: {
            "popover": _vm.popover,
            "name": _vm.DateofAssignment,
            "min-date": _vm.getMinDate(),
            "mode": "dateTime",
            "minute-increment": 5
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              inputValue,
              togglePopover
            }) {
              return [_c('input', _vm._g({
                class: {
                  'form-control': true
                },
                attrs: {
                  "placeholder": "M/D/YYYY h:mm A"
                },
                domProps: {
                  "value": inputValue
                },
                on: {
                  "click": function ($event) {
                    return togglePopover();
                  }
                }
              }, _vm.inputEvents)), _c('div', {
                staticClass: "input-group-append",
                on: {
                  "click": function ($event) {
                    return togglePopover();
                  }
                }
              }, [_c('span', {
                staticClass: "input-group-text"
              }, [_c('em', {
                staticClass: "fa fa-calendar"
              })])])];
            }
          }], null, true),
          model: {
            value: _vm.DateofAssignment,
            callback: function ($$v) {
              _vm.DateofAssignment = $$v;
            },
            expression: "DateofAssignment"
          }
        })], 1)];
      }
    }, {
      key: "tgslot-DateofAssignmentTill",
      fn: function ({
        data
      }) {
        return [_c('div', {
          staticClass: "input-group"
        }, [_c('v-date-picker', {
          staticClass: "timedate input-group",
          attrs: {
            "popover": _vm.popover,
            "name": _vm.DateofAssignmentTill,
            "min-date": _vm.getMinDate(),
            "mode": "dateTime",
            "minute-increment": 5
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              inputValue,
              togglePopover
            }) {
              return [_c('input', _vm._g({
                class: {
                  'form-control': true
                },
                attrs: {
                  "placeholder": "M/D/YYYY h:mm A"
                },
                domProps: {
                  "value": inputValue
                },
                on: {
                  "click": function ($event) {
                    return togglePopover();
                  }
                }
              }, _vm.inputEvents)), _c('div', {
                staticClass: "input-group-append",
                on: {
                  "click": function ($event) {
                    return togglePopover();
                  }
                }
              }, [_c('span', {
                staticClass: "input-group-text"
              }, [_c('em', {
                staticClass: "fa fa-calendar"
              })])])];
            }
          }], null, true),
          model: {
            value: _vm.DateofAssignmentTill,
            callback: function ($$v) {
              _vm.DateofAssignmentTill = $$v;
            },
            expression: "DateofAssignmentTill"
          }
        })], 1)];
      }
    }], null, false, 3463087764)
  }) : _vm._e(), _vm.DataLoaded ? _c('SearchAsset', {
    attrs: {
      "GetParentDetails": _vm.GetParentDetails
    },
    on: {
      "GetDetailsofParent": _vm.GetDetails,
      "AssestArrayData": _vm.AssestArrayData
    }
  }) : _vm._e(), _c('div', {
    staticClass: "row flex-row-reverse py-3"
  }, [_c('div', {
    staticClass: "col-lg-6 text-right"
  }, [_c('a', {
    staticClass: "btn btn-success formbtn text-white mr-1",
    attrs: {
      "href": "javascript:void(0);",
      "title": _vm.$t('Save')
    },
    on: {
      "click": _vm.SubmitData
    }
  }, [_c('i', {
    staticClass: "fa fa-save pr-2"
  }), _c('span', [_vm._v(_vm._s(_vm.$t('Save')))])]), _c('a', {
    staticClass: "btn btn-danger formbtn text-white",
    attrs: {
      "href": "javascript:;",
      "title": _vm.$t('Cancel')
    },
    on: {
      "click": function ($event) {
        return _vm.onCancel();
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-close pr-2"
  }), _c('span', [_vm._v(_vm._s(_vm.$t('Cancel')))])])]), _c('div', {
    staticClass: "col-lg-6"
  }, [_c('div', {
    staticClass: "py-2"
  }, [_c('small', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.$t('MandatoryString')))])])])])], 1)], 1)])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/ProductAssignment/Manage.vue?vue&type=template&id=6a87bd71&lang=en&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// EXTERNAL MODULE: ./src/components/Modal/SearchAsset.vue + 9 modules
var SearchAsset = __webpack_require__("b25f");

// EXTERNAL MODULE: ./node_modules/luxon/build/cjs-browser/luxon.js
var luxon = __webpack_require__("1315");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ProductAssignment/Manage.vue?vue&type=script&lang=js&




/* harmony default export */ var Managevue_type_script_lang_js_ = ({
  components: {
    SearchAsset: SearchAsset["a" /* default */]
  },
  data() {
    return {
      DataLoaded: 0,
      isLoading: false,
      UsersData: [],
      DateofAssignment: '',
      Users: '',
      Remarks: '',
      DateofAssignmentTill: '',
      Groupname: '',
      Users1: '',
      Users2: '',
      popover: {
        visibility: 'click'
      },
      UserId: null,
      GetParentDetails: null,
      SelfCheckout: null,
      RequestFrom: '',
      isUsedFor: '',
      selectedOption: '',
      checked: true,
      unchecked: false,
      txtAssignUserType: 'User',
      disabled: false,
      dataArray: [],
      buttons: [],
      pendingItem: '',
      checkAvailability: '',
      FormSchema: [{
        layoutType: "four",
        Data: [{
          astype: "SelectField",
          label: this.$t('Departments'),
          name: "Departments",
          value: "",
          placeholder: "",
          disabled: false,
          config: {
            options: [],
            onChange: this.GetCompanyUsers
          },
          validationRules: {
            "required": false
          }
        }, {
          astype: "RadioField",
          label: this.$t('AssignTo'),
          name: "AssignTo",
          value: "User",
          placeholder: "",
          config: {
            options: [{
              value: "User",
              name: "User"
            }, {
              value: "Client",
              name: "Client"
            }],
            onChange: this.AssignUserType
          },
          validationRules: {
            "required": true
          }
        }, {
          astype: "SelectField",
          label: this.$t('SelectUser'),
          name: "User",
          value: "",
          placeholder: "",
          visibility: true,
          validationRules: {
            "required": true
          },
          config: {
            options: [],
            onChange: this.GetDetails
          }
        }, {
          astype: "SelectField",
          label: this.$t('ExistingClient'),
          name: "Client",
          value: "",
          placeholder: "",
          visibility: false,
          validationRules: {
            "required": true
          },
          config: {
            options: []
          }
        }, {
          astype: "SelectField",
          label: this.$t('NotificationUser'),
          name: "NotificationUser",
          value: "",
          placeholder: "",
          validationRules: {
            "required": false
          },
          config: {
            options: []
          }
        }, {
          astype: "slotField",
          label: this.$t('DateofAssignmentt'),
          name: "DateofAssignment",
          value: '',
          placeholder: "",
          validationRules: "required",
          config: {
            format: "MM/DD/YYYY HH:MM A",
            minDate: new Date()
          }
        }, {
          astype: "slotField",
          label: this.$t('DateofAssignmentTilll'),
          name: "DateofAssignmentTill",
          value: '',
          placeholder: "",
          validationRules: "required",
          config: {
            format: "MM/DD/YYYY HH:MM A",
            minDate: new Date()
          }
        }]
      }, {
        Data: [{
          astype: "TextAreaField",
          label: this.$t('Remarks'),
          name: "Remarks",
          value: "",
          placeholder: "",
          validationRules: "",
          config: {
            rows: 5
          }
        }]
      }],
      Timezone: ''
    };
  },
  created: async function () {
    await this.GetDepartment();
    await this.GetNotificationUser();
    await this.GetCompanyUsers();
    await this.GetCompanyClients();
    this.UserId = this.GetUserInfo.ID;
    this.DataLoaded = 1;
    const currentDate = new Date();
    this.DateofAssignment = new Date();
    currentDate.setDate(currentDate.getDate() + 7);
    this.DateofAssignmentTill = currentDate;
    this.Timezone = this.GetUserInfo.TimeZone;
    if (this.$route.params.reqForm == 'myitems') {
      this.FormSchema[0].Data[2].value = this.UserId;
    } else if (this.$route.params.reqForm == 'pendingRequest') {
      // debugger          
      this.pendingItem = this.$route.params.items;
      if (this.pendingItem != null && this.pendingItem != '' && this.pendingItem != 'undefined') {
        this.FormSchema[0].Data[2].value = this.pendingItem.USER_ID;
        this.FormSchema[0].Data[0].value = this.pendingItem.DEPARTMENT_ID;
        this.DateofAssignment = this.pendingItem.FROM_TIME;
        this.DateofAssignmentTill = this.pendingItem.TO_TIME;
      }
    } else if (this.$route.params.reqForm == 'checkAssetAvailability') {
      debugger;
      this.checkAvailability = this.$route.params.items;
      if (this.checkAvailability != null && this.checkAvailability != '' && this.checkAvailability != 'undefined') {
        debugger;
        // this.DateofAssignment=this.checkAvailability.FROM_TIME;
        // this.DateofAssignmentTill=this.checkAvailability.TO_TIME;
      }
    }
  },

  methods: {
    AssignUserType: async function (event, field) {
      field.value = event.target.getAttribute('data-value');
      if (event.target.attributes.id.value == 'AssignTo_1') {
        this.FormSchema[0].Data[2].visibility = false;
        this.FormSchema[0].Data[3].visibility = true;
        this.FormSchema[0].Data[0].disabled = true;
        // vm.$refs.ProductAssignmentForm.fields.Departments.failed=false;
        //(vm.FormSchema)[0].Data[0].validationRules.required=false;        
      } else {
        this.FormSchema[0].Data[2].visibility = true;
        this.FormSchema[0].Data[3].visibility = false;
        this.FormSchema[0].Data[0].disabled = false;
        //vm.$refs.ProductAssignmentForm.fields.Departments.failed=true;
        //(vm.FormSchema)[0].Data[0].validationRules.required=true;
      }
    },

    BackTolist: function () {
      this.$router.push({
        name: 'ProductAssignment'
      });
    },
    onCancel: function () {
      this.$router.push({
        name: 'ProductAssignment'
      });
    },
    GetDepartment: async function () {
      let url = `includeInactiveStatus=true&isTicketHandler=false`;
      await DataService["a" /* default */].GetDepartment(url).then(response => {
        response.data.forEach(item => {
          this.FormSchema[0].Data[0].config.options.push({
            name: `${item.department_name}`,
            value: `${item.department_id}`
          });
        });
      });
    },
    GetNotificationUser: async function () {
      let url = `moduleName=ASSETASSIGNMENT&department_ids=`;
      await DataService["a" /* default */].GetNotficationUsers(url).then(response => {
        response.data.data.forEach(item => {
          this.FormSchema[0].Data[4].config.options.push({
            name: `${item.NAME}`,
            value: `${item.USER_ID}`
          });
        });
      });
    },
    GetCompanyUsers: async function () {
      var vm = this;
      vm.FormSchema[0].Data[2].config.options = [];
      vm.isLoading = true;
      var department_ids = vm.FormSchema[0].Data[0].value;
      let url = `moduleName=ASSETASSIGNMENT&department_ids=${department_ids}`;
      await DataService["a" /* default */].GetCompanyUsers(url).then(response => {
        this.UsersData = response.data;
        response.data.forEach(item => {
          this.FormSchema[0].Data[2].config.options.push({
            name: `${item.USERNAME}`,
            value: `${item.USER_ID}`
          });
          vm.isLoading = false;
        });
        if (response.data.length <= 0) {
          this.FormSchema[0].Data[2].config.options = [];
          vm.isLoading = false;
        }
      });
    },
    GetCompanyClients: async function () {
      let url = `moduleName=ASSETASSIGNMENT&department_ids=`;
      await DataService["a" /* default */].GetCompanyClients(url).then(response => {
        response.data.forEach(item => {
          this.FormSchema[0].Data[3].config.options.push({
            name: `${item.USERNAME}`,
            value: `${item.user_id}`
          });
        });
      });
    },
    GetDetails: function () {
      var vm = this;
      var userid = this.FormSchema[0].Data[2].value;
      vm.GetParentDetails = {
        DepartmentID: vm.txtDepartment,
        UserID: userid,
        GetNotificationUserID: vm.Users1,
        FromDate: vm.DateofAssignment,
        TillDate: vm.DateofAssignmentTill,
        SelfCheckout: null,
        RequestFrom: 'assetassignment',
        isUsedFor: 'search',
        pendingItems: vm.pendingItem,
        checkAvailabilities: vm.checkAvailability
      };
      sessionStorage.setItem("GetParentDetails", JSON.stringify(vm.GetParentDetails));
    },
    AssestArrayData(AssestArrayData) {
      this.dataArray = AssestArrayData;
    },
    SubmitData: function () {
      var vm = this;
      var RequstionList = vm.$children[1].$children[1].$children[3].GetRequstionList;
      //debugger   
      if (vm.FormSchema[0].Data[1].value == 'Client') {
        vm.$refs.ProductAssignmentForm.fields.Departments.failed = false;
        vm.FormSchema[0].Data[0].validationRules.required = false;
      } else {
        vm.$refs.ProductAssignmentForm.fields.Departments.failed = true;
        vm.FormSchema[0].Data[0].validationRules.required = false;
      }
      vm.$refs.ProductAssignmentForm.validate().then(result => {
        if (vm.$refs.ProductAssignmentForm.errors['Assign To'].length > 0) {
          result = true;
        }
        if (vm.FormSchema[0].Data[2].value == "" && vm.FormSchema[0].Data[3].value == "") {
          result = false;
        }
        if (result) {
          var formData = new FormData();
          var files = [];
          let uniquenames = "";
          var issueToName = "";
          for (let i = 0; i < vm.dataArray.length; i++) {
            if (vm.dataArray.length > 1) {
              uniquenames = vm.dataArray[0].AssetUniqueName;
            } else {
              uniquenames = uniquenames + "," + vm.dataArray[i].AssetUniqueName;
            }
          }
          vm.UsersData.forEach(item => {
            if (item.USER_ID == parseInt(vm.FormSchema[0].Data[2].value)) {
              issueToName = item.USERNAME;
            }
          });
          var hasEmptyRequestQuantity = false;
          vm.dataArray.forEach(item => {
            if (item.RequestQuantity === null || item.RequestQuantity === '' || item.RequestQuantity === 0 || isNaN(item.RequestQuantity) || item.RequestQuantity === 'undefined') {
              hasEmptyRequestQuantity = true;
            }
          });
          if (hasEmptyRequestQuantity) {
            vm.ShowAlert(vm.$t('RequestQuantityRequired'), "warning", true, vm.$t('Alert'));
            return false;
          }
          //debugger
          RequstionList.forEach(itm => {
            var obj = {
              "AssetCatalogUniqueId": itm.ChildUniqueId,
              "RequestFromRequsition": 1,
              "IsGroup": null,
              "ParentAssetCatalogUniqueId": itm.ChildUniqueId,
              "AssetQuantity": itm.RequestQuantity,
              "RequestQuantity": itm.RequestQuantity,
              "BatchId": itm.RequisitionBatchId,
              "AssetUniqueName": itm.ChildUniqueName
            };
            vm.dataArray.push(obj);
          });
          var mainObj = {
            UserId: vm.FormSchema[0].Data[1].value == 'Client' ? vm.FormSchema[0].Data[3].value : vm.FormSchema[0].Data[2].value,
            DepartmentId: vm.FormSchema[0].Data[0].value,
            AssignedFrom: null,
            AssignedTill: null,
            AssignedFromDateTime: vm.$options.filters.formatDateTimeYYMMDD(vm.DateofAssignment),
            AssignedTillDateTime: vm.$options.filters.formatDateTimeYYMMDD(vm.DateofAssignmentTill),
            StartTime: null,
            EndTime: null,
            Comment: vm.FormSchema[1].Data[0].value,
            NotificationUsers: vm.FormSchema[0].Data[4].value,
            RequestFrom: 'AssetAssign',
            IsRequestFromRequisition: false,
            IssueToName: issueToName,
            RFID: 0,
            // GroupRequistionAssestInfostring: vm.dataArray,
            // itemNames: uniquenames
            GroupRequistionAssestInfostring: vm.dataArray,
            itemNames: vm.dataArray.map(item => item.AssetUniqueName).join(",")
          };
          if (files.length > 0) {
            formData.append("postString", JSON.stringify(mainObj));
          } else {
            formData.append("postString", JSON.stringify(mainObj));
          }
          if (vm.dataArray.length > 0) {
            DataService["a" /* default */].SaveGroupAssign(formData).then(response => {
              if (response.data.status == 0) {
                if (response.data.existIds == '') {
                  vm.ShowAlert(vm.$t("Itemassignedsuccessfully"), "success", vm.$t('Alert'));
                  if (vm.$route.query.reqForm == 'MyItems') {} else if (vm.$route.query.reqForm == 'pendingRequest') {} else {
                    vm.onCancel();
                  }
                }
              } else {
                vm.ShowAlert(vm.$t("ErrorWhileProcessingRequest"), "failure", vm.$t('Alert'));
              }
            });
          } else {
            vm.ShowAlert(vm.$t("AddAtLeastOne"), "failure", vm.$t('Alert'));
          }
        }
      });
    },
    formatTimeToCustomFormat(inputTime) {
      if (inputTime != null && inputTime !== '') {
        const inputLuxonDateTime = luxon["DateTime"].fromJSDate(new Date(inputTime), {
          zone: 'utc'
        }); // Assume the input time is in UTC               
        const targetTimeZone = `Etc/GMT${this.Timezone}`;
        const outputLuxonDateTime = inputLuxonDateTime.setZone(targetTimeZone);
        const formattedDateTime = outputLuxonDateTime.toFormat("MM/dd/yyyy h:mm");
        return formattedDateTime;
      } else {
        return "";
      }
    }
  }
});
// CONCATENATED MODULE: ./src/views/ProductAssignment/Manage.vue?vue&type=script&lang=js&
 /* harmony default export */ var ProductAssignment_Managevue_type_script_lang_js_ = (Managevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/ProductAssignment/Manage.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ProductAssignment_Managevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Manage = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d21f0b8.js.map