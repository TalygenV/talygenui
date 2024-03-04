(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-1153ca2c"],{

/***/ "0204":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#modelAddProduct .modal-dialog{max-width:1200px!important}#Location .invalid-feedback{white-space:normal;font-size:80%;position:absolute!important;margin-top:7%!important;padding-bottom:10%!important}#Location .vue-treeselect__control .vue-treeselect__x-container{display:none}#Location .vue-treeselect{position:relative;text-align:left;border:1px solid #abb5bf}#Location .vue-treeselect--single .vue-treeselect__input{width:100%;height:100%;box-sizing:border-box;border:none}#modelAddProduct .custom-checkbox.custom-checkbox .custom-control-label:before,.custom-checkbox .custom-control-input:checked~.custom-control-label:after{display:none}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}#Location .vue-treeselect__control{border:none!important;height:31px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "191f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2101b2d3-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/AddProduct.vue?vue&type=template&id=2003ba9f&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_c('loader', {
    attrs: {
      "is-visible": _vm.isLoading
    }
  }), _c('div', {
    staticClass: "modal my-popups right fade",
    attrs: {
      "id": "modelAddProduct",
      "role": "dialog"
    }
  }, [_c('div', {
    staticClass: "modal-dialog",
    attrs: {
      "role": "document"
    }
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('div', {
    staticClass: "modal-header mheader-user"
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function ($event) {
        return _vm.close();
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-times",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _c('h4', {
    staticClass: "modal-title",
    attrs: {
      "id": "myModalLabel"
    }
  }, [_vm._v(_vm._s(_vm.$t("AddItem")))]), _c('span', {
    staticClass: "user-guide"
  }, [_c('a', {
    staticClass: "ancuserguide",
    attrs: {
      "data-toggle": "collapse",
      "href": "#collapseReplyUG",
      "role": "button",
      "aria-expanded": "false",
      "aria-controls": "collapseExample"
    }
  }, [_vm._v(" User Guide")]), _c('div', {
    staticClass: "divancuserguide collapse overflow-auto",
    attrs: {
      "id": "collapseReplyUG"
    }
  }, [_c('div', {
    staticClass: "custom-scrollbar-js",
    attrs: {
      "id": "scrollbarreplyuserguideMangeView"
    }
  }, [_c('div', {
    staticClass: "con",
    domProps: {
      "innerHTML": _vm._s(_vm.$t('UserGuideAddProduct'))
    }
  })])])])]), _c('div', {
    staticClass: "modal-body"
  }, [_vm.popupCondition == 'setup' ? _c('div', {
    staticClass: "left-menu-tab new_tab"
  }, [_c('div', {
    staticClass: "col-md-12 pb-0"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0 float-left"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-8 pr-0 font-weight-medium"
  }, [_vm._v(_vm._s(_vm.$t('CompleteYourProfile')))]), _c('div', {
    staticClass: "col-4 pl-0 text-right"
  }, [_c('small', [_c('i', {
    staticClass: "fa fa-check-circle pr-1",
    class: {
      'text-success': _vm.SetupProgresText == 'Completed',
      'text-muted': _vm.SetupProgresText !== 'Completed'
    }
  }), _vm._v(_vm._s(_vm.SetupProgresText))])])]), _c('div', {
    staticClass: "progress smaller my-2"
  }, [_c('div', {
    staticClass: "progress-bar progress-bar-primary progress-bar px-0 text-center memoryused",
    class: `${_vm.progressBarColor}`,
    style: `width: ${_vm.SetupProgress}%; font-weight:500; font-size:14px`,
    attrs: {
      "s": "",
      "id": "divConsumendStorage",
      "title": _vm.SetupProgress
    }
  }, [_vm._v(_vm._s(_vm.SetupProgress) + "% ")])]), _c('div', {
    staticClass: "level_info my-2 d-block float-left w-100",
    staticStyle: {
      "height": "auto"
    }
  }, [_c('ul', [_c('li', [_c('b', {
    attrs: {
      "id": "divConsumendStorage"
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('Progress')) + " " + _vm._s(_vm.CurrentTab) + " of 3")])])])])])])])]), _c('div', {
    staticClass: "mt-0",
    staticStyle: {
      "max-height": "calc(100vh - 2px)"
    },
    attrs: {
      "id": "divscrollsetuptabs"
    }
  }, [_c('ul', {
    staticClass: "nav nav-pills flex-column left-tab responivecustomtab lefttabiconfix newtab_des"
  }, [_c('li', {
    staticClass: "nav-item FourthScreen",
    on: {
      "click": function ($event) {
        return _vm.SkipTab(1);
      }
    }
  }, [_c('a', {
    staticClass: "nav-link left-menu",
    class: {
      'active': _vm.step == 1
    },
    staticStyle: {
      "cursor": "pointer"
    }
  }, [_c('i', {
    staticClass: "fa fa-random pr-2 text-muted",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "font-14"
  }, [_vm._v(_vm._s(_vm.$t('SetUpLocation')))])])]), _c('li', {
    staticClass: "nav-item SecondScreen",
    on: {
      "click": function ($event) {
        return _vm.SkipTab(2);
      }
    }
  }, [_c('a', {
    staticClass: "nav-link left-menu",
    class: {
      'active': _vm.step == 2
    },
    staticStyle: {
      "cursor": "pointer"
    }
  }, [_c('i', {
    staticClass: "fa fa fa-cog pr-2 text-muted",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "font-14"
  }, [_vm._v(_vm._s(_vm.$t('SetUpProductType')))])])]), _c('li', {
    staticClass: "nav-item ThirdScreen",
    on: {
      "click": function ($event) {
        return _vm.SkipTab(3);
      }
    }
  }, [_c('a', {
    staticClass: "nav-link left-menu",
    class: {
      'active': _vm.step == 3
    },
    staticStyle: {
      "cursor": "pointer"
    }
  }, [_c('i', {
    staticClass: "fa fa-plus pr-2 text-muted",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm.IsClientStoragesCopmleted ? _c('i', {
    staticClass: "fa fa-check-circle font-18 pr-2 text-success",
    attrs: {
      "aria-hidden": "true"
    }
  }) : _vm._e(), _c('span', {
    staticClass: "font-14"
  }, [_vm._v(_vm._s(_vm.$t('AddDeployeItem')))])])])])])]) : _vm._e(), _vm.step == 3 ? _c('div', {
    staticClass: "border p-3"
  }, [_vm.DataLoaded ? _c('dynamic-form', {
    ref: "modalAddCustomForm",
    attrs: {
      "buttons": _vm.buttons,
      "schema": _vm.FormSchema
    },
    on: {
      "OnSubmit": _vm.onSubmit
    },
    scopedSlots: _vm._u([{
      key: "tgslot-UnitPrice",
      fn: function ({
        data
      }) {
        return [_c('div', {
          staticClass: "input-group"
        }, [_c('span', {
          staticClass: "input-group-append"
        }, [_c('span', {
          staticClass: "input-group-text",
          attrs: {
            "id": "spnOutOF"
          }
        }, [_vm._v("(USD)")])]), _c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: data.fieldInfo.value,
            expression: "data.fieldInfo.value"
          }],
          staticClass: "form-control",
          attrs: {
            "type": "Number",
            "maxlength": 5,
            "step": "any"
          },
          domProps: {
            "value": data.fieldInfo.value
          },
          on: {
            "keypress": function ($event) {
              return _vm.GetAssetCost($event, data.fieldInfo.value, 'UnitPrice');
            },
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.$set(data.fieldInfo, "value", $event.target.value);
            }
          }
        })])];
      }
    }, {
      key: "tgslot-TotalCost",
      fn: function ({
        data
      }) {
        return [_c('div', {
          staticClass: "input-group"
        }, [_c('span', {
          staticClass: "input-group-append"
        }, [_c('span', {
          staticClass: "input-group-text",
          attrs: {
            "id": "spnOutOF"
          }
        }, [_vm._v("(USD)")])]), _c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: data.fieldInfo.value,
            expression: "data.fieldInfo.value"
          }],
          staticClass: "form-control",
          attrs: {
            "type": "number",
            "pattern": "\\d+\\.?\\d?(?!\\d)",
            "step": "any"
          },
          domProps: {
            "value": data.fieldInfo.value
          },
          on: {
            "keyup": function ($event) {
              return _vm.GetUnitPrice(data.fieldInfo.value);
            },
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.$set(data.fieldInfo, "value", $event.target.value);
            }
          }
        })])];
      }
    }], null, false, 2052226897)
  }) : _vm._e()], 1) : _vm._e(), _vm.step == 3 ? _c('div', {
    staticClass: "right-content row flex-row-reverse mt-3"
  }, [_c('div', {
    staticClass: "col-lg-12 text-left"
  }, [_c('div', {
    staticClass: "py-2 mandatory"
  }, [_vm._v(" " + _vm._s(_vm.$t('MandatoryString')) + " ")])])]) : _vm._e(), _c('div', {
    staticClass: "right-content"
  }, [_vm.popupCondition == 'setup' ? _c('div', {
    staticClass: "col-md-12 p-0"
  }, [_vm.step == 1 ? _c('div', {
    staticClass: "col-md-12 p-0"
  }, [_c('div', {
    staticClass: "tab-content"
  }, [_c('div', {
    staticClass: "tab-pane active show",
    attrs: {
      "id": "step1"
    }
  }, [_c('section', {
    staticClass: "page-action w-100"
  }, [_c('div', {
    staticClass: "container-fluid p-0"
  }, [_c('div', {
    staticClass: "col-md-12 p-0s addpopuplocation"
  }, [_c('AddLocationPopup', {
    attrs: {
      "popupCondition": _vm.popupCondition
    }
  })], 1)])])])])]) : _vm._e(), _vm.step == 2 ? _c('div', {
    staticClass: "col-md-12 p-0"
  }, [_c('div', {
    staticClass: "tab-content"
  }, [_c('div', {
    staticClass: "tab-pane active show",
    attrs: {
      "id": "step2"
    }
  }, [_c('section', {
    staticClass: "page-action w-100"
  }, [_c('div', {
    staticClass: "container-fluid p-0"
  }, [_c('div', {
    staticClass: "col-md-12 p-0"
  }, [_c('AddProductType', {
    attrs: {
      "popupCondition": _vm.popupCondition
    }
  })], 1)])])])])]) : _vm._e()]) : _vm._e()])])])])]), _vm.ShowAddLocation ? _c('div', {
    staticClass: "my-popups"
  }, [_c('div', {
    staticClass: "modal d-block"
  }, [_c('div', {
    staticClass: "modal-dialog modal-dialog-centered"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('div', {
    staticClass: "modal-header"
  }, [_c('h5', {
    staticClass: "modal-title"
  }, [_vm._v(" " + _vm._s(_vm.$t('Location')) + " ")]), _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-original-title": "Close"
    },
    on: {
      "click": function ($event) {
        return _vm.CloseLocationPopup();
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-times"
  })])]), _c('AddLocationPopup')], 1)])])]) : _vm._e(), _vm.IsTagNamePopup ? _c('TagNamePopup', {
    attrs: {
      "FromAddProduct": _vm.FromAddProduct
    }
  }) : _vm._e(), _vm.ShowAddProductType ? _c('div', {
    staticClass: "my-popups"
  }, [_c('div', {
    staticClass: "modal d-block"
  }, [_c('div', {
    staticClass: "modal-dialog modal-dialog-centered"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('div', {
    staticClass: "modal-header"
  }, [_c('h5', {
    staticClass: "modal-title"
  }, [_vm._v(" " + _vm._s(_vm.$t('ProductType')) + " ")]), _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-original-title": "Close"
    },
    on: {
      "click": function ($event) {
        return _vm.ClosePopupProductType();
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-times"
  })])]), _c('AddProductType', {
    attrs: {
      "FromPage": _vm.FromPage
    }
  })], 1)])])]) : _vm._e()], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Modal/AddProduct.vue?vue&type=template&id=2003ba9f&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// EXTERNAL MODULE: ./src/components/Modal/TagNamePopup.vue + 4 modules
var TagNamePopup = __webpack_require__("56f6");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2101b2d3-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/AddLocation.vue?vue&type=template&id=0dc79e85&
var AddLocationvue_type_template_id_0dc79e85_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "border p-3"
  }, [_vm.DataLoaded ? _c('dynamic-form', {
    attrs: {
      "lang": "en",
      "buttons": _vm.buttons,
      "schema": _vm.FormSchema
    },
    on: {
      "OnSubmit": _vm.onSubmit
    }
  }) : _vm._e()], 1);
};
var AddLocationvue_type_template_id_0dc79e85_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Modal/AddLocation.vue?vue&type=template&id=0dc79e85&

// EXTERNAL MODULE: ./node_modules/tg-controls_cli/dist/myLib.common.js
var myLib_common = __webpack_require__("240d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/AddLocation.vue?vue&type=script&lang=js&



/* harmony default export */ var AddLocationvue_type_script_lang_js_ = ({
  props: {
    popupCondition: {
      type: Boolean,
      required: true
    }
  },
  components: {
    'tree-view': myLib_common["TreeSelectField"]
  },
  data() {
    return {
      FormSchema: [{
        layoutType: "triple",
        Data: [{
          astype: "TreeSelectField",
          label: this.$t('Location'),
          name: "Location",
          value: null,
          placeholder: "Select Location",
          config: {
            options: []
          },
          validationRules: {
            "required": true
          }
        }, {
          astype: "TextField",
          label: this.$t('LocationName'),
          name: "LocationName",
          value: "",
          placeholder: "",
          validationRules: {
            "required": true,
            max: 250
          }
        }, {
          astype: "SelectField",
          label: this.$t('Status'),
          name: "Status",
          value: "",
          placeholder: "",
          config: {
            options: [],
            onChange: () => {}
          }
        }, {
          astype: "TextField",
          label: this.$t('AddressLine1'),
          name: "AddressLine1",
          value: "",
          placeholder: "",
          validationRules: {
            "required": true,
            max: 250
          }
        }, {
          astype: "TextField",
          label: this.$t('City'),
          name: "City",
          value: "",
          placeholder: "",
          validationRules: {
            "required": true,
            max: 250
          }
        }, {
          astype: "SelectField",
          label: this.$t('Country'),
          name: "Country",
          value: "",
          placeholder: "",
          validationRules: {
            "required": true,
            max: 250
          },
          config: {
            option_request_url: "https://newcrmapi.talygen.com/api" + '/Common/GetDDLData?moduleName=CRM&type=COUNTRIES',
            token: this.GetUserInfo.Token,
            onChange: this.onChangeDropdown
          }
        }, {
          astype: "SelectField",
          label: this.$t('State'),
          name: "State",
          value: "",
          placeholder: "",
          config: {
            options: []
          }
        }, {
          astype: "TextField",
          label: this.$t('PostalCode'),
          name: "PostalCode",
          value: "",
          placeholder: ""
        }, {
          astype: "TextField",
          label: this.$t('Email'),
          name: "Email",
          value: "",
          placeholder: ""
        }, {
          astype: "TextField",
          label: this.$t('Phone1'),
          name: "Phone1",
          value: "",
          placeholder: ""
        }, {
          astype: "TextField",
          label: this.$t('Phone2'),
          name: "Phone2",
          value: "",
          placeholder: ""
        }, {
          astype: "TextField",
          label: this.$t('LocationCode'),
          name: "LocationCode",
          value: "",
          placeholder: ""
        }, {
          astype: "SelectField",
          label: this.$t('Tag'),
          name: "Tag",
          value: "",
          placeholder: "",
          config: {
            options: []
          }
        }]
      }],
      buttons: [{
        type: "button",
        class: "btn btn-secondary",
        text: "Skip",
        onClick: this.Skip,
        isVisible: false
      }, {
        type: "submit",
        class: "btn btn-success",
        text: "<i class='fa fa-save pr-2'></i>Save & New",
        isVisible: false
      }, {
        type: "submit",
        class: "btn btn-success",
        text: "<i class='fa fa-save pr-2'></i>Save & Next",
        isVisible: false
      }, {
        type: "submit",
        class: "btn btn-success",
        text: "<i class='fa fa-save pr-2'></i>Save"
      }, {
        type: "button",
        class: "btn btn-danger",
        text: "<i class='fa fa-close pr-2'></i>Cancel",
        onClick: this.ClosePopup
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
      CreatedAt: "",
      CreatedBy: "",
      ModifiedAt: "",
      ModifiedBy: "",
      DataLoaded: 0,
      UserId: ''
    };
  },
  created: async function () {
    debugger;
    var vm = this;
    await vm.GetLocationByCompanyId();
    vm.GetStatusDDL();
    await vm.GetTagsByModuleId();
    await vm.AdvancedSetupFields();
    vm.UserId = vm.GetUserInfo.ID;
    vm.DataLoaded = 1;
  },
  methods: {
    Skip: function () {
      var vm = this;
      vm.$parent.SkipTab(2);
    },
    async AdvancedSetupFields() {
      var vm = this;
      if (vm.popupCondition == 'setup') {
        vm.FormSchema[0].Data[6].visibility = false;
        vm.FormSchema[0].Data[7].visibility = false;
        vm.FormSchema[0].Data[8].visibility = false;
        vm.FormSchema[0].Data[9].visibility = false;
        vm.FormSchema[0].Data[10].visibility = false;
        vm.FormSchema[0].Data[11].visibility = false;
        vm.FormSchema[0].Data[12].visibility = false;
        vm.buttons[0].isVisible = true;
        vm.buttons[1].isVisible = true;
        vm.buttons[2].isVisible = true;
        vm.buttons[3].isVisible = false;
        vm.buttons[4].isVisible = false;
      }
    },
    async GetTagsByModuleId() {
      var vm = this;
      var params = `modulename=Asset`;
      await DataService["a" /* default */].GetTagsByModuleId(params).then(function (response) {
        vm.TagData = JSON.parse(response.data);
        vm.TagData.data.forEach((itm, index) => {
          vm.FormSchema[0].Data[12].config.options.push({
            name: itm.TAG_NAME,
            value: itm.TAG_ID
          });
        });
        console.log(' GetTagsByModuleId  call end');
      });
    },
    onChangeDropdown(evt) {
      var vm = this;
      var params = `countryId=${evt.target.value}`;
      DataService["a" /* default */].GetStateListwithIDByCountryId(params).then(function (response) {
        vm.StateData = JSON.parse(response.data).data;
        vm.StateData = vm.StateData.map(item => {
          return {
            name: item.name,
            value: item.state_id
          };
        });
        $.each(vm.FormSchema, function (index, item) {
          $.each(item.Data, function (index, element) {
            if (element.name == 'State') {
              element.value = '';
              element.config.options = vm.StateData;
            }
          });
        });
      });
    },
    async GetLocationByCompanyId() {
      var vm = this;
      vm.isLoading = true;
      var params = `reqForm=`;
      await DataService["a" /* default */].GetLocationByCompanyId(params).then(function (response) {
        vm.FindalLocationArray = [];
        vm.LocationData = JSON.parse(response.data).data;
        //var json =vm.MakeNormalArray(response.data).data;
        vm.LocationData.forEach(value => {
          var CheckIfExist = vm.FindalLocationArray.filter(function (el) {
            return el.COMPANY_LOCATION_ID == value.COMPANY_LOCATION_ID;
          });
          if (CheckIfExist.length == 0) {
            if (value.PARENT_LOCATION_ID == null) {
              let locationId = value.COMPANY_LOCATION_ID;
              let rslt = vm.getChildLocation(locationId, value, JSON.parse(response.data).data);
              vm.FindalLocationArray.push(rslt);
            }
          }
        });
        vm.FormSchema[0].Data[0].config.options = vm.FindalLocationArray;
      });
      if (vm.LocationData.length > 0) {
        vm.count = vm.count + 1;
        vm.SetupProgresText = 'Completed';
      } else {
        vm.SetupProgress = 0;
      }
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
    GetStatusDDL() {
      var vm = this;
      vm.StatusData.forEach((item, index) => {
        vm.FormSchema[0].Data[2].config.options.push({
          name: item.name,
          value: item.value
        });
      });
    },
    ClosePopup() {
      var vm = this;
      vm.$parent.CloseLocationPopup();
    },
    onSubmit(e) {
      debugger; // eslint-disable-line no-debugger

      var vm = this;
      var propValues = e;

      //  var url = `LocationName=${e.LocationName}&LocationId=${e.locationId}`
      var url = `LocationName=${e.LocationName}&LocationId=0`;
      debugger; // eslint-disable-line no-debugger
      DataService["a" /* default */].LocationExist(url).then(function (response) {
        vm.LocationId = response.data.result;
        if (response.data.result > 0) {
          vm.ShowAlert(vm.$t('Location already exist', [vm.$t('Location')]), "warning", true, vm.$t("Alert"));
        } else {
          debugger; // eslint-disable-line no-debugger
          console.log("e", e);
          let myObj = {
            LocationId: vm.LocationId,
            LocationName: e.LocationName,
            Country: parseInt(e.Country),
            State: e.State,
            Address1: e.AddressLine1,
            Address2: "",
            City: e.City,
            PinCode: e.PostalCode,
            Email: e.Email,
            Phone1: e.Phone1,
            Phone2: e.Phone2,
            CreatedAt: null,
            CreatedBy: vm.UserId,
            ModifiedAt: null,
            ModifiedBy: vm.UserId,
            StatusId: e.Status,
            State_id: e.State == "" ? null : e.State,
            LocationCode: e.LocationCode,
            ParentLocationId: e.Location == "" ? null : e.Location,
            TagId: e.Tag.length <= 0 ? null : Array.prototype.map.call(e.Tag, function (item) {
              return item.value;
            }).join(","),
            CampusId: "",
            ClientId: 1
          };
          debugger;
          var jsonObj = JSON.stringify(myObj);
          DataService["a" /* default */].SaveUpdateLocation(myObj).then(function (response) {
            debugger;
            if (response.data == '1') {
              vm.ShowAlert(vm.$t('Location has been added successfully', [vm.$t('Location')]), "success", true, vm.$t("Alert"));
            } else if (response.data == '2') {
              vm.ShowAlert(vm.$t('Location has been updated successfully', [vm.$t('Location')]), "success", true, vm.$t("Alert"));
            } else if (response.data == '0') {
              vm.ShowAlert(vm.$t('unknown error', [vm.$t('Location')]), "success", true, vm.$t("Alert"));
            }

            // confuse in data resposne but saved location  
            else if (response.data == null) {
              vm.ShowAlert(vm.$t('Location has been added successfully', [vm.$t('Location')]), "success", true, vm.$t("Alert"));
            }
            vm.$parent.CloseLocationPopup();
          });
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/AddLocation.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_AddLocationvue_type_script_lang_js_ = (AddLocationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Modal/AddLocation.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Modal_AddLocationvue_type_script_lang_js_,
  AddLocationvue_type_template_id_0dc79e85_render,
  AddLocationvue_type_template_id_0dc79e85_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AddLocation = (component.exports);
// EXTERNAL MODULE: ./src/components/Modal/AddProductType.vue + 4 modules
var AddProductType = __webpack_require__("f6fa");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/AddProduct.vue?vue&type=script&lang=js&





/* harmony default export */ var AddProductvue_type_script_lang_js_ = ({
  props: {
    popupCondition: {
      type: String,
      required: false
    },
    FromPage: {
      type: String,
      required: false
    }
  },
  components: {
    TagNamePopup: TagNamePopup["a" /* default */],
    AddLocationPopup: AddLocation,
    AddProductType: AddProductType["a" /* default */]
  },
  data() {
    return {
      isLoading: false,
      AssetType: [],
      BarcodeType: [],
      userLoggedIn2: false,
      IsDeployment: false,
      IsTagNamePopup: false,
      LocationData: [],
      ShowAddLocation: false,
      ShowAddProductType: false,
      FromAddProduct: false,
      DeploymentType: '',
      IsEnableAssetManagement: false,
      fileUploaded: '',
      tagData: [],
      isCheckDeployItem: '',
      DeployProductValue: false,
      FormSchema: [{
        layoutType: "double",
        group_name: 'Product Information',
        group_display_name: this.$t('ProductInformation'),
        Data: [{
          astype: "SelectField",
          label: this.$t('ProductType'),
          name: "ProductType",
          value: "",
          placeholder: "Select Product Type",
          config: {
            options: [],
            showAddIcon: true,
            onAddButtonClick: this.OpenAddProductTypePopup
          },
          validationRules: {
            "required": true
          }
        }, {
          astype: "TextField",
          label: this.$t('ProductName'),
          name: "ProductName",
          value: "",
          placeholder: "",
          config: {},
          validationRules: {
            "required": true
          }
        }, {
          astype: "SelectField",
          label: this.$t('BarcodeType'),
          name: "BarcodeType",
          value: "",
          placeholder: "Select Barcode Type",
          config: {
            options: []
          },
          validationRules: {
            "required": true
          }
        }, {
          astype: "toggleField",
          label: this.$t('CreateUniqueNameListing'),
          name: "CreateUniqueNameListing",
          value: "",
          placeholder: "",
          validationRules: {
            "required": false
          }
        }, {
          astype: "FileField",
          showLabel: true,
          label: this.$t('DisplayImage'),
          name: "DisplayImage",
          value: "",
          placeholder: "",
          validationRules: "",
          FieldIndex: 0,
          config: {
            maxSize: 5,
            accept: [{
              fileType: 'png',
              iconClass: 'fa-file-image-o'
            }, {
              fileType: 'jpg',
              iconClass: 'fa-file-image-o'
            }, {
              fileType: 'jpeg',
              iconClass: 'fa-file-image-o'
            }],
            onChange: this.setFile,
            showAddIcon: false,
            onAddButtonClick: this.AddFileMore,
            multiple: false
          }
        }, {
          astype: "MultiSelectField",
          label: this.$t('Tags'),
          name: "Tags",
          value: "",
          mode: "tag",
          placeholder: "",
          config: {
            options: [],
            showAddIcon: true,
            onAddButtonClick: this.OpenAddTagPopup
          }
        }]
      }, {
        layoutType: "Single",
        group_name: 'Deploy Product',
        group_display_name: this.$t('DEPLOY_ITEM'),
        Data: [{
          astype: "toggleField",
          label: this.$t('DeployProduct'),
          name: "DeployProduct",
          value: "",
          placeholder: "",
          config: {
            onChange: this.HideShowDeployProductFields
          }
        }]
      }, {
        layoutType: "Single",
        Data: [{
          astype: "RadioField",
          label: this.$t('DeploymentType'),
          name: "DeploymentType",
          value: "1",
          placeholder: "",
          config: {
            options: [{
              value: "1",
              name: "Product"
            }, {
              value: "2",
              name: "Inventory"
            }],
            onChange: this.OnDeplymentType
          },
          visibility: true,
          validationRules: {
            "required": false
          }
        }]
      }, {
        layoutType: "Single",
        Data: [{
          astype: "RadioField",
          label: this.$t('DeploymentType'),
          name: "SetupDeploymentType",
          value: "1",
          placeholder: "",
          config: {
            options: [{
              value: "1",
              name: "Asset"
            }],
            onChange: this.OnDeplymentType
          },
          visibility: true,
          validationRules: {
            "required": false
          }
        }]
      }, {
        layoutType: "double",
        Data: [{
          astype: "TreeSelectField",
          label: this.$t('Location'),
          name: "Location",
          value: null,
          placeholder: "Select Location",
          config: {
            options: [],
            showAddIcon: true,
            onAddButtonClick: this.AddLocation
          },
          validationRules: {
            "required": true
          }
        }, {
          astype: "NumericField",
          label: this.$t('Quantity'),
          name: "Quantity",
          value: "0",
          placeholder: "",
          visibility: true,
          config: {
            onKeyUp: this.GetAssetCost
          },
          validationRules: {
            "required": true,
            max: 7,
            "min_value": 1
          }
        }, {
          astype: "SlotField",
          label: this.$t('UnitPrice'),
          name: "UnitPrice",
          value: "0",
          placeholder: "",
          validationRules: {
            "required": false,
            max: 5,
            "min_value": 0
          },
          visibility: true,
          config: {
            onKeyUp: this.GetAssetCost
          }
        }, {
          astype: "SlotField",
          label: this.$t('TotalCost'),
          name: "TotalCost",
          value: "0",
          placeholder: "",
          visibility: true,
          config: {
            onKeyUp: this.GetUnitPrice
          }
        }]
      }],
      buttons: [{
        type: "submit",
        class: "btn btn-secondary",
        text: "<i class='fa fa-angle-double-left pr-2'></i>Back",
        onClick: this.BackButton,
        isVisible: false
      }, {
        type: "submit",
        class: "btn btn-success",
        text: "<i class='fa fa-save pr-2'></i>Save And Close",
        name: "SaveAndClose"
      }, {
        type: "submit",
        class: "btn btn-success",
        text: "<i class='fa fa-save pr-2'></i>Save And New",
        name: "SaveAndNew"
      }, {
        type: "button",
        class: "btn btn-danger",
        text: "<i class='fa fa-close pr-2'></i>Cancel",
        onClick: this.close,
        isVisible: true
      }, {
        type: "button",
        class: "btn btn-success",
        text: "<i class='fa fa-check' aria-hidden='true'></i> Finish",
        isVisible: false
      }],
      DataLoaded: 0,
      TagsArray: [],
      tags: [],
      file: [],
      CurrentTab: 1,
      step: 3,
      SetupProgress: 0,
      count: 0,
      PageSize: 10,
      PageNumber: 1,
      SortBy: '',
      SortExp: '',
      IsClientStoragesCopmleted: false,
      UserType: '',
      FromPage: ''
    };
  },
  async created() {
    var vm = this;
    await vm.EnableAssetManagement();
    await vm.GetAssetType();
    await vm.GetBarcodeType();
    await vm.GetLocationByCompanyId();
    await vm.GetTagsByModuleI();
    await vm.AdvancedSetupFields();
    await vm.AssetCatalogueListing();
    await vm.GetProgress();
    vm.HideShowDeployProductFields('false');
    vm.UserType = this.GetUserInfo.UserType;
    if (vm.UserType == 'NU' || vm.UserType == 'PM') {
      vm.FormSchema[0].Data[0].config.showAddIcon = false;
      vm.FormSchema[4].Data[0].config.showAddIcon = false;
    } else {
      vm.FormSchema[0].Data[0].config.showAddIcon = true;
      vm.FormSchema[4].Data[0].config.showAddIcon = true;
    }
    vm.DataLoaded = 1;
  },
  mounted() {
    $('#modelAddProduct').modal({
      backdrop: 'static',
      keyboard: false
    });
  },
  methods: {
    OnDeplymentType(event, field) {
      field.value = event.target.getAttribute('data-value');
      console.log(event.target.getAttribute('data-value'));
    },
    async AssetCatalogueListing() {
      var vm = this;
      vm.isLoading = true;
      var prams = `pageSize=${vm.PageSize}&pageNum=${vm.PageNumber}&sortBy=${vm.SortBy}&sortExp=${vm.SortExp}&${vm.searchCondition}`;
      await DataService["a" /* default */].AssetCatalogueListing(prams).then(response => {
        if (response.data.length > 0) {
          vm.count = vm.count + 1;
          vm.SetupProgresText = 'Completed';
        } else {
          vm.SetupProgress = 0;
        }
        vm.isLoading = false;
      });
    },
    GetProgress() {
      var vm = this;
      if (vm.count == 1) {
        vm.SetupProgress = 33.33;
      } else if (vm.count == 2) {
        vm.SetupProgress = 66.66;
      } else if (vm.count == 3) {
        vm.SetupProgress = 100;
      }
    },
    BackButton() {
      var vm = this;
      vm.SkipTab(2);
    },
    SkipTab: function (s) {
      var vm = this;
      vm.step = s;
      vm.CurrentTab = s;
    },
    AdvancedSetupFields() {
      var vm = this;
      if (vm.popupCondition == 'setup') {
        vm.FormSchema[0].Data[5].visibility = false;
        vm.FormSchema[2].Data[0].visibility = false;
        vm.step = 1;
        vm.buttons[1].isVisible = false;
        vm.buttons[0].isVisible = true;
        vm.buttons[3].isVisible = false;
        vm.buttons[4].isVisible = true;
      }
    },
    async GetTagsByModuleI() {
      var vm = this;
      await DataService["a" /* default */].GetTagsByModuleId('moduleName=Asset').then(function (response) {
        vm.TagsArray = JSON.parse(response.data).data;
        vm.TagsArray.forEach((itm, index) => {
          vm.FormSchema[0].Data[5].config.options.push({
            name: itm.TAG_NAME,
            value: itm.TAG_ID
          });
        });
      });
    },
    HideShowDeployProductFields(ev) {
      var vm = this;
      if (ev == true) {
        if (vm.popupCondition == 'setup') {
          vm.FormSchema[2].Data[0].visibility = false;
          vm.FormSchema[3].Data[0].visibility = true;
        } else {
          vm.FormSchema[2].Data[0].visibility = true;
          vm.FormSchema[3].Data[0].visibility = false;
        }
        vm.FormSchema[4].Data[0].visibility = true;
        vm.FormSchema[4].Data[1].visibility = true;
        vm.FormSchema[4].Data[2].visibility = true;
        vm.FormSchema[4].Data[3].visibility = true;
      } else {
        if (vm.popupCondition == 'setup') {
          vm.FormSchema[2].Data[0].visibility = false;
          vm.FormSchema[3].Data[0].visibility = false;
        } else {
          vm.FormSchema[2].Data[0].visibility = false;
          vm.FormSchema[3].Data[0].visibility = false;
        }
        vm.FormSchema[4].Data[0].visibility = false;
        vm.FormSchema[4].Data[1].visibility = false;
        vm.FormSchema[4].Data[2].visibility = false;
        vm.FormSchema[4].Data[3].visibility = false;
      }
    },
    onSubmit: function (formfields, val) {
      var vm = this;
      vm.buttons[1].class += " disabled";
      vm.isLoading = true;
      if (vm.IsEnableAssetManagement) {
        // if(formfields.DeployProduct == true && formfields.Location=='')
        // {
        //     vm.ShowAlert(vm.$t("Please select Location!"), "failure",vm.$t('Alert'));
        // }

        let myObj = {};
        if (formfields.DeployProduct == true) {
          myObj.DeployProduct = formfields.DeployProduct;
          myObj.DeployId = '0';
          myObj.LocationId = formfields.Location;
          myObj.Quantity = parseInt(formfields.Quantity);
          myObj.UnitPrice = parseFloat(formfields.UnitPrice);
          myObj.DeploymentType = formfields.DeploymentType == "" ? formfields.SetupDeploymentType : formfields.DeploymentType;
        } else {
          myObj.DeployProduct = formfields.DeployProduct == '' ? false : true;
          myObj.DeployId = "0";
          myObj.LocationId = "-1";
          myObj.Quantity = "0";
          myObj.UnitPrice = "0";
        }
        myObj.AssetCatalogueId = "0";
        myObj.Name = formfields.ProductName, myObj.AssetTypeId = formfields.ProductType, myObj.BarcodeTypeId = formfields.BarcodeType;
        myObj.StatusId = "1001", myObj.TotalCost = formfields.TotalCost;
        myObj.AssetCost = formfields.TotalCost;
        myObj.ParentUniqueId = "", myObj.ChildUniqueId = "", myObj.ChildCatalogueId = "", myObj.CatalogueId = "", myObj.CatalogHdnId = "", myObj.SelfieEnabled = "", myObj.ChildCategoryName = "", myObj.AssetUniqueName = "", myObj.AssetCatalogName = "", myObj.Description = "", myObj.AssetTagIdsWizard = Array.prototype.map.call(formfields.Tags, function (item) {
          return item.value;
        }).join(",");
        myObj.AssetTypeTagIdsWizard = "", myObj.Manufacturer = "", myObj.NumberOfItems = formfields.Quantity, myObj.AsseetGroupQuantity = "", myObj.ItemCode = "", myObj.ChildItemCode = "", myObj.ChildCatalogName = "", myObj.ChildRequestQuantity = "", myObj.ChildAssetType = "", myObj.AssetType = "", myObj.StandardTypeId = "", myObj.AssetCompartmentId = "", myObj.AssetGroupId = "", myObj.IsSelfCheckout = "", myObj.IsEnableTerms = "", myObj.SubLocationId = "", myObj.Attachment = "", myObj.CreatedAt = "", myObj.CreatedBy = "", myObj.ModifiedAt = "", myObj.ModifiedBy = "", myObj.Asset_Type = "", myObj.Status = "", myObj.ForCompany = "", myObj.ForEmployee = "", myObj.MoveToInTransitInfo = "", myObj.AvailableItems = formfields.Quantity, myObj.PendingAvailableQuantity = "", myObj.PendingTotalAvailableItems = "", myObj.TotalQuantity = "", myObj.ChildAvailableItems = "", myObj.TotalFilesCount = "", myObj.AssetTypeCategory = "", myObj.AssetTypeCategoryName = "", myObj.AssetTypeCategoryCode = "", myObj.AttachmentName = "", myObj.DisplayImage = "", myObj.IsTermsAndCondition = "", myObj.TotalTermsConditionFilesCount = "", myObj.RelatedInfoId = "", myObj.UniqueName = formfields.CreateUniqueNameListing == true ? 1 : 0, myObj.AssetCatalogueGroup = "", myObj.ChildCreateUniqueNameListing = "", myObj.IsTransitItems = "", myObj.AttachmentPath = "", myObj.LocationName = "", myObj.SubLocationName = "", myObj.AuditFrequency = "", myObj.ImageCaptureFrequency = "", myObj.CalibrationFrequency = "", myObj.CR = "", myObj.DR = "", myObj.IsDisplayImage = "", myObj.PurchaseValue = "", myObj.CurrentBookValue = "", myObj.SalvageValue = "", myObj.Unit = "", myObj.ReqFrom = "", myObj.IsContainer = "", myObj.IsSampleData = "", myObj.Model = "", myObj.Vendor = "", myObj.ManufacturerId = "", myObj.PurchaseOrder = "", myObj.WarrantyDuration = "", myObj.DepreciationRuleId = "", myObj.OrderDate = "", myObj.SalvageCost = "", myObj.ItemLife = "", myObj.InvoiceNumber = "", myObj.InvoiceDate = "", myObj.InsurerName = "", myObj.InsuranceRefNumber = "", myObj.InsuranceTo = "", myObj.DeployedBy = "", myObj.DeployedAt = "", myObj.EnableWarranty = "", myObj.EnableInsurance = "", myObj.EnableItemCost = "", myObj.EnableCalibration = "", myObj.EnableDepreciation = "";
        var formData = new FormData();
        var postString = {
          "postString": myObj
        };
        formData.append("postString", JSON.stringify(myObj));
        formData.append("Files", formfields.DisplayImage[0]);
        formData.append("Is_DisplayImage", 'Yes');
        DataService["a" /* default */].AddAssetWizard(formData).then(function (response) {
          if (val == 'SaveAndClose') {
            vm.$parent.ShowAddProduct = false;
            vm.$parent.FetchData();
            if (response.data.msg == "size_exceed" || response.data.msg == "FileSizeExceeded" || response.data.msg == "ExceedAllowedSize") {
              vm.ShowAlert((vm.$t('size_exceed', [vm.$t('Asset')]), "warning", true, vm.$t("Alert")));
            } else if (response.data.msg == 'alreadyexist') {
              vm.ShowAlert(vm.$t("Already exist record!"), "warning", vm.$t('Alert'));
            } else if (response.data.msg == 'ValidFileUploadMsg') {
              vm.ShowAlert(vm.$t("Please upload valid file!"), "warning", vm.$t('Alert'));
            } else if (response.data.msg == 'add') {
              vm.ShowAlert(vm.$t("Product has been Saved Successfully"), "success", vm.$t('Alert'));
              vm.$parent.ShowAddProduct = false;
              if (vm.popupCondition == 'setup') {
                $("#modelAddProduct").modal("hide");
                $("body").removeClass("modal-open");
                $(".modal-backdrop").remove();
              } else {
                vm.$parent.FetchData();
              }
              vm.isLoading = false;
            } else {
              vm.ShowAlert(vm.$t("Unknown Error"), "failure", vm.$t('Alert'));
              vm.$parent.ShowAddProduct = false;
              if (vm.popupCondition == 'setup') {
                $("#modelAddProduct").modal("hide");
                $("body").removeClass("modal-open");
                $(".modal-backdrop").remove();
              } else {
                vm.$parent.FetchData();
              }
              vm.isLoading = false;
            }
          } else if (val == 'SaveAndNew') {
            vm.buttons[2].class += " disabled";
            if (response.data.msg == "size_exceed" || response.data.msg == "FileSizeExceeded" || response.data.msg == "ExceedAllowedSize") {
              vm.ShowAlert((vm.$t('size_exceed', [vm.$t('Asset')]), "warning", true, vm.$t("Alert")));
            } else if (response.data.msg == 'alreadyexist') {
              vm.ShowAlert(vm.$t("Already exist record!"), "warning", vm.$t('Alert'));
            } else if (response.data.msg == 'ValidFileUploadMsg') {
              vm.ShowAlert(vm.$t("Please upload valid file!"), "warning", vm.$t('Alert'));
            } else if (response.data.msg == 'add') {
              if (vm.popupCondition == 'setup') {
                vm.$parent.ShowAddProduct = false;
              } else {
                vm.$parent.ShowAddProduct = false;
                vm.ShowAlert(vm.$t("Product has been Saved Successfully"), "success", vm.$t('Alert'));
                if (vm.FromPage == 'RelatedInfo') {
                  vm.$parent.ShowAddProduct = false; // Close the current popup
                  vm.$nextTick(() => {
                    vm.$parent.ShowAddProduct = true; // Open the popup after the next DOM update
                    vm.$parent.OpenModelAddProduct();
                    vm.HideShowDeployProductFields('false');
                  });
                } else if (vm.FromPage == 'ProductListing') {
                  vm.HideShowDeployProductFields('false');
                  vm.$parent.OpenModelAddProduct();
                }
                vm.isLoading = false;
              }
            } else {
              vm.ShowAlert(vm.$t("UnknownError"), "failure", vm.$t('Alert'));
              vm.$parent.ShowAddProduct = false;
              if (vm.popupCondition == 'setup') {
                vm.$parent.ShowAddProduct = false;
              } else {
                vm.$parent.FetchData();
              }
              vm.isLoading = false;
            }
            vm.$refs.modalAddCustomForm.validateForm.reset();
          }
          vm.$refs.modalAddCustomForm.validateForm.reset();
          vm.isLoading = false;
        });
      } else {
        vm.isLoading = false;
        vm.ShowAlert(vm.$t("Unauthorized Access"), "warning", vm.$t('Alert'));
      }
      vm.isLoading = false;
    },
    setFile: function (e) {
      var vm = this;
      for (let index = 0; index < e.target.files.length; index++) {
        const element = e.target.files[index];
        vm.file.push(element);
      }
    },
    isDeployProduct() {
      var vm = this;
      vm.FormSchema[3].Data[0].isVisible = true;
    },
    GetAssetCost(event, value, val) {
      var vm = this;
      if (event.key === 'e') {
        event.preventDefault();
      }
      var quantityCheck = vm.FormSchema[4].Data[1].value;
      var quantityField = vm.FormSchema[4].Data[1];
      if (quantityCheck.startsWith('0') && quantityCheck.length > 1) {
        quantityCheck = quantityCheck.slice(1);
      }
      if (quantityCheck.length > 7) {
        quantityCheck = quantityCheck.slice(0, 7);
      }
      quantityField.value = quantityCheck;
      var unitPrice = vm.FormSchema[4].Data[2].value;
      var unitPriceField = vm.FormSchema[4].Data[2];
      if (unitPrice.startsWith('0') && unitPrice.length > 1) {
        unitPrice = unitPrice.slice(1);
      }
      if (unitPrice.length > 5) {
        unitPrice = unitPrice.slice(0, 5);
        vm.ShowAlert(vm.$t("The Unit Price field may not be greater than 5 characters"), "failure", vm.$t('Alert'));
      }
      unitPriceField.value = unitPrice;
      if (val == 'Quantity' || val.label == 'Quantity') {
        vm.FormSchema[4].Data[1].value = vm.FormSchema[4].Data[1].value.replace(/[^0-9]/g, "");
      } else {
        //(vm.FormSchema)[4].Data[2].value = (vm.FormSchema)[4].Data[2].value.match(/^\d+\.?\d{0,2}/)
      }
      var quantity = vm.FormSchema[4].Data[1].value.replace(/\./g, '');
      var unitPrice = vm.FormSchema[4].Data[2].value;
      if (unitPrice == "") {
        unitPrice = 0;
        $('#UnitPrice').val(unitPrice);
      }
      var assetCost = parseFloat(unitPrice) * parseFloat(quantity);
      if (quantity == 0) assetCost = 0;
      vm.FormSchema[4].Data[3].value = assetCost.toFixed(3);
    },
    GetUnitPrice(evt, val) {
      var vm = this;
      var quantity = vm.FormSchema[4].Data[1].value;

      //(vm.FormSchema)[4].Data[3].value = (vm.FormSchema)[4].Data[3].value.match(/^\d+\.?\d{0,2}/)
      let totalCost = vm.FormSchema[4].Data[3].value;
      var unitPrice = 0;
      if (totalCost == "") {
        totalCost = 0;
        vm.FormSchema[4].Data[3].value = unitPrice;
      }
      unitPrice = parseFloat(totalCost) / parseFloat(quantity);
      if (quantity == 0) unitPrice = 0;
      vm.FormSchema[4].Data[2].value = unitPrice.toFixed(3);
    },
    UploadFile(event) {
      var vm = this;
      vm.fileUploaded = event.target.files[0];
    },
    removeTag: function (tagId) {
      var vm = this;
      vm.confirmR(vm.$t('ConfirmRemoveTag'), true, vm.$t("Delete"), function () {
        var tagIndex = vm.tagData.findIndex(x => x.TAG_ID === tagId);
        if (tagIndex > -1) {
          vm.tagData.splice(tagIndex, 1);
        }
      });
    },
    AddLocation() {
      var vm = this;
      vm.IsDeployment = true;
      vm.ShowAddLocation = true;
    },
    async GetLocationByCompanyId() {
      var vm = this;
      vm.isLoading = true;
      vm.LocationData = [];
      var params = `reqForm=`;
      await DataService["a" /* default */].GetLocationByCompanyId(params).then(function (response) {
        vm.FindalLocationArray = [];
        vm.LocationData = JSON.parse(response.data).data;
        //var json =vm.MakeNormalArray(response.data).data;
        vm.LocationData.forEach(value => {
          var CheckIfExist = vm.FindalLocationArray.filter(function (el) {
            return el.COMPANY_LOCATION_ID == value.COMPANY_LOCATION_ID;
          });
          if (CheckIfExist.length == 0) {
            if (value.PARENT_LOCATION_ID == null) {
              let locationId = value.COMPANY_LOCATION_ID;
              let rslt = vm.getChildLocation(locationId, value, JSON.parse(response.data).data);
              vm.FindalLocationArray.push(rslt);
            }
          }
        });
        vm.FormSchema[4].Data[0].config.options = vm.FindalLocationArray;
      });
      if (vm.LocationData.length > 0) {
        vm.count = vm.count + 1;
        vm.SetupProgresText = 'Completed';
      } else {
        vm.SetupProgress = 0;
      }
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
    OpenAddTagPopup() {
      var vm = this;
      vm.ShowAddProduct = true;
      $("#modelAddProduct").modal('show');
      setTimeout(function () {
        $("#modelAddProduct").modal('show');
        setTimeout(function () {
          vm.SetBootstraptoolTip();
        }, 200);
      }, 1000);
      vm.FromAddProduct = true;
      vm.IsTagNamePopup = true;
    },
    async GetBarcodeType() {
      var vm = this;
      vm.isLoading = true;
      var url = `BarcodeTypeId=`;
      await DataService["a" /* default */].GetBarcodetype(url).then(response => {
        vm.BarcodeType = JSON.parse(response.data.result);
        vm.BarcodeType.forEach((itm, index) => {
          vm.FormSchema[0].Data[2].config.options.push({
            name: itm.BARCODE_TYPE,
            value: itm.BARCODE_TYPE_ID
          });
        });
        vm.isLoading = false;
      });
    },
    async GetAssetType() {
      var vm = this;
      vm.FormSchema[0].Data[0].config.options = [];
      vm.isLoading = true;
      var url = `type=ITEMCODE&issueTo=&locationId=`;
      await DataService["a" /* default */].GetAssetTypeCustom(url).then(response => {
        vm.AssetType = JSON.parse(response.data);
        vm.AssetType.forEach((itm, index) => {
          vm.FormSchema[0].Data[0].config.options.push({
            name: itm.ASSETTYPE,
            value: itm.ASSETID
          });
        });
        vm.isLoading = false;
      });
      if (vm.AssetType.length > 0) {
        vm.count = vm.count + 1;
        vm.SetupProgresText = 'Completed';
      } else {
        vm.SetupProgress = 0;
      }
    },
    close() {
      var vm = this;
      if (vm.popupCondition == 'setup') {
        vm.$parent.showpopup = false;
      } else {
        $("#modelAddProduct").modal("hide");
        $("body").removeClass("modal-open");
        $(".modal-backdrop").remove();
        vm.$parent.FetchData();
        vm.$parent.ShowAddProduct = false;
      }
    },
    CloseTagPopup() {
      var vm = this;
      vm.IsTagNamePopup = false;
    },
    async CloseLocationPopup() {
      var vm = this;
      vm.LocationData = [];
      vm.FindalLocationArray = [];
      vm.FormSchema[4].Data[0].config.options = [];
      await vm.GetLocationByCompanyId();
      vm.HideShowDeployProductFields(false);
      setTimeout(function () {
        vm.HideShowDeployProductFields(true);
      }, 500);
      vm.isLoading = false;
      vm.ShowAddLocation = false;
    },
    async EnableAssetManagement() {
      let url = `moduleName=Asset&configkey=CanSeeAssetManagement`;
      await DataService["a" /* default */].EnableAssetManagement(url).then(response => {
        this.IsEnableAssetManagement = response.data;
      });
    },
    OpenAddProductTypePopup() {
      var vm = this;
      vm.FromPage = 'AddProduct';
      vm.ShowAddProductType = true;
    },
    ClosePopupProductType() {
      var vm = this;
      vm.ShowAddProductType = false;
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/AddProduct.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_AddProductvue_type_script_lang_js_ = (AddProductvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Modal/AddProduct.vue?vue&type=style&index=0&id=2003ba9f&prod&lang=css&
var AddProductvue_type_style_index_0_id_2003ba9f_prod_lang_css_ = __webpack_require__("b0c1");

// CONCATENATED MODULE: ./src/components/Modal/AddProduct.vue






/* normalize component */

var AddProduct_component = Object(componentNormalizer["a" /* default */])(
  Modal_AddProductvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AddProduct = __webpack_exports__["a"] = (AddProduct_component.exports);

/***/ }),

/***/ "b0c1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProduct_vue_vue_type_style_index_0_id_2003ba9f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e7df");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProduct_vue_vue_type_style_index_0_id_2003ba9f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProduct_vue_vue_type_style_index_0_id_2003ba9f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "e7df":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("0204");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("33ef0cf8", content, true, {"sourceMap":false,"shadowMode":false});

/***/ })

}]);
//# sourceMappingURL=chunk-1153ca2c.js.map