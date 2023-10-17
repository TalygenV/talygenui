(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-d843bb2c"],{

/***/ "5f18":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("fc95");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("e326ebd2", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "8a47":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/MyProduct/List.vue?vue&type=template&id=0fa5ef41&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_c('loader', {
    attrs: {
      "is-visible": _vm.isLoading
    }
  }), _c('tg-list', {
    attrs: {
      "IsShowAction": true,
      "listType": ['List'],
      "ModuleName": "Asset",
      "SubModuleCode": "Asset",
      "IdentityColumn": "AssetCatalogueId",
      "HeaderText": "My Products",
      "ListData": _vm.MyItemList,
      "HeaderData": _vm.Headers,
      "widgets": _vm.widgets,
      "callbackfunction": _vm.FetchData,
      "HeaderButtons": _vm.listheaderbuttons,
      "TotalRecords": _vm.TotalRecords,
      "SearchFields": _vm.leftSearchFields,
      "RenderRowActionMethod": _vm.renderActions,
      "ListDataCallBackFunction": _vm.FetchData,
      "LegendArray": _vm.LegendArray,
      "SortExp": _vm.SortExp,
      "SortBy": _vm.SortBy,
      "NorecordfoundText": _vm.$t('NoRecordfound')
    },
    on: {
      "LeftsearchButtonClick": _vm.leftCommonSearch,
      "PagerButtonClick": _vm.pagerMethod,
      "HeaderButtonClick": _vm.commonHeaderButtonClick,
      "ActionButtonClick": _vm.actionButtonClick,
      "SortdataButtonClick": _vm.sortdata
    },
    scopedSlots: _vm._u([{
      key: "slotdata",
      fn: function ({
        data
      }) {
        return [data.column.COLUMN_NAME == 'BarcodeNumber' ? [_c('div', {
          staticClass: "form-control p-0 border-0 text-center"
        }, [_c('img', {
          staticStyle: {
            "max-height": "40px"
          },
          attrs: {
            "src": data.row.BarcodeImageUrl
          }
        }), _c('span', {
          staticClass: "d-block w-100 text-center"
        }, [_vm._v(_vm._s(data.row.BarcodeNumber))])])] : _vm._e(), data.column.COLUMN_NAME == 'AttachmentPath' ? [_c('div', {
          staticClass: "form-control p-0 border-0 text-center"
        }, [_c('img', {
          staticStyle: {
            "max-height": "80px"
          },
          attrs: {
            "src": data.row.AttachmentPath
          }
        })])] : _vm._e(), data.column.COLUMN_NAME == 'NumberOfItems' ? [_c('span', {
          staticClass: "text-dark",
          attrs: {
            "title": data.column.COLUMN_NAME
          }
        }, [_c('i', {
          staticClass: "fa fa-list-ul",
          attrs: {
            "aria-hidden": "true"
          }
        }), _c('span', {
          staticClass: "noti-circle noti-green"
        }, [_vm._v(_vm._s(data.row.NumberOfItems))])])] : _vm._e()];
      }
    }])
  }), _vm.IscheckAvailablity ? _c('checkAvailablityModal', {
    on: {
      "ClosePOPuP": _vm.ClosePOPuP
    }
  }) : _vm._e(), _vm.isRequestForQuantity ? _c('RequestQuantity', {
    attrs: {
      "ItemData": _vm.ItemData
    },
    on: {
      "CloseRequestForQuantity": _vm.CloseRequestForQuantity
    }
  }) : _vm._e(), _vm.isRequestForReplace ? _c('RequestReplace', {
    attrs: {
      "ItemData": _vm.ItemData,
      "Title": _vm.Title
    },
    on: {
      "closeRequestReplace": _vm.closeRequestReplace
    }
  }) : _vm._e(), _vm.isConsume ? _c('Consume', {
    attrs: {
      "ItemData": _vm.ItemData
    },
    on: {
      "closeconsume": _vm.closeconsume
    }
  }) : _vm._e(), _vm.isTransferpopup ? _c('Transfer', {
    attrs: {
      "ItemData": _vm.ItemData
    },
    on: {
      "closeTransfer": _vm.closeTransfer
    }
  }) : _vm._e(), _vm.isSelfCheckOut ? _c('SelfCheckOut', {
    attrs: {
      "ItemData": _vm.ItemData
    },
    on: {
      "CloseSelfCheckOut": _vm.CloseSelfCheckOut
    }
  }) : _vm._e(), _vm.IsShowTermsCondition ? _c('ShowTermsCondition', {
    attrs: {
      "ItemData": _vm.ItemData
    },
    on: {
      "CloseAcceptTermsConditions": _vm.CloseAcceptTermsConditions
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/MyProduct/List.vue?vue&type=template&id=0fa5ef41&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// CONCATENATED MODULE: ./src/views/MyProduct/ListSchema.js

let buttons = [{
  title: 'Check Availability',
  iconClass: 'fa fa-check',
  callbackfunction: 'Availability',
  isdisabled: false,
  isvisible: true,
  checkPrivilege: false
}, {
  title: 'Self Assignment',
  iconClass: 'fa fa-user-plus',
  callbackfunction: 'SelfAssignment',
  isdisabled: false,
  isvisible: true,
  checkPrivilege: false
}, {
  title: 'Check Out Request List',
  iconClass: 'fa-sharp fa-solid fa-eye',
  callbackfunction: 'CheckOutRequestList',
  isdisabled: false,
  isvisible: true,
  checkPrivilege: false
}, {
  title: 'Add Check Out Request',
  iconClass: 'fa fa-plus',
  callbackfunction: 'AddCheckOutRequests',
  isdisabled: false,
  isvisible: true,
  checkPrivilege: false
}];
let leftsearchSchema = [{
  fieldName: "Barcode",
  fieldType: "text",
  fieldIcon: "fa-file",
  paramName: "BarCode",
  fieldSearchConditionName: [''],
  isSearch: false,
  value: "",
  listOptions: []
}, {
  fieldName: 'Product Name',
  fieldType: "text",
  fieldIcon: "fa-user",
  paramName: "ProductName",
  fieldSearchConditionName: [''],
  isSearch: false,
  value: "",
  listOptions: []
}];
let listActions = [{
  title: 'Consume',
  callbackfunction: 'Consume',
  href: 'javascript:void(0)',
  icon: 'fa fa-file-text-o  action-icon',
  additionalSpan: '',
  isVisible: true
}, {
  title: 'Replace Request',
  callbackfunction: 'RequestReplace',
  href: 'javascript:void(0)',
  icon: 'fa fa-mail-reply-all  action-icon',
  additionalSpan: '',
  isVisible: true
}, {
  title: 'Request Quantity',
  callbackfunction: 'RequestQuantity',
  href: 'javascript:void(0)',
  icon: 'fa fa-cubes action-icon',
  additionalSpan: '',
  isVisible: true
}, {
  title: 'Self CheckOut',
  callbackfunction: 'SelfCheckOut',
  icon: 'fa fa-cubes action-icon',
  additionalSpan: '',
  isVisible: true
}, {
  title: 'Transfer',
  callbackfunction: 'Transfer',
  href: 'javascript:void(0)',
  icon: 'fa fa-exchange  action-icon',
  additionalSpan: '',
  isVisible: true
}, {
  title: 'Return',
  callbackfunction: 'Return',
  href: 'javascript:void(0)',
  icon: 'fa fa-undo   action-icon',
  additionalSpan: '',
  isVisible: true
}, {
  title: 'Accept',
  callbackfunction: 'Accept',
  href: 'javascript:void(0)',
  icon: 'fa fa-check action-icon',
  additionalSpan: '',
  isVisible: true
}, {
  title: 'Reject',
  callbackfunction: 'Reject',
  href: 'javascript:void(0)',
  icon: 'fa fa-close  action-icon',
  additionalSpan: '',
  isVisible: true
}, {
  title: 'Accept Terms Conditions',
  callbackfunction: 'AcceptTermsConditions',
  href: 'javascript:void(0)',
  icon: 'fa fa-eye  action-icon',
  additionalSpan: '',
  isVisible: true
}];
/* harmony default export */ var ListSchema = ({
  buttons,
  leftsearchSchema,
  listActions
});
// EXTERNAL MODULE: ./src/components/Modal/checkAvailablity.vue + 14 modules
var checkAvailablity = __webpack_require__("55a7");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/RequestQuantity.vue?vue&type=template&id=c3745af6&
var RequestQuantityvue_type_template_id_c3745af6_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
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
  }, [_vm._v(" Request Product: " + _vm._s(_vm.ItemData.Name) + " ")]), _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-original-title": "Close"
    },
    on: {
      "click": _vm.CloseRequestForQuantity
    }
  }, [_c('em', {
    staticClass: "fa fa-times"
  })])]), _c('div', {
    staticClass: "border p-3"
  }, [_c('dynamic-form', {
    attrs: {
      "lang": "en",
      "buttons": _vm.buttons,
      "schema": _vm.FormSchema
    },
    on: {
      "OnSubmit": _vm.onSubmit
    }
  })], 1)])])])]);
};
var RequestQuantityvue_type_template_id_c3745af6_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Modal/RequestQuantity.vue?vue&type=template&id=c3745af6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/RequestQuantity.vue?vue&type=script&lang=js&

/* harmony default export */ var RequestQuantityvue_type_script_lang_js_ = ({
  props: {
    ItemData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      IsShowAddNamePopup: false,
      Title: '',
      FormSchema: [{
        layoutType: "double",
        Data: [{
          astype: "TextField",
          label: this.$t('Product'),
          name: "Product",
          value: "",
          placeholder: "",
          config: {
            options: []
          }
        }, {
          astype: "TextField",
          label: this.$t('Unique Name'),
          name: "10/12/2022 12:AM",
          value: "",
          placeholder: ""
        }, {
          astype: "DateField",
          label: this.$t('AssignedFrom'),
          name: "AssignedFrom",
          value: '',
          placeholder: "",
          config: {
            format: "DD/MM/YYYY"
          }
        }, {
          astype: "DateField",
          label: this.$t('AssignedTill'),
          name: "AssignedTill",
          value: '',
          placeholder: "DD/MM/YYYY",
          config: {
            format: "DD/MM/YYYY"
          }
        }, {
          astype: "TextField",
          label: this.$t('Number of Products'),
          name: "NumberofProducts",
          value: "",
          placeholder: "",
          validationRules: {
            "required": true,
            max: 250
          }
        }]
      }, {
        layoutType: "single",
        Data: [{
          astype: "TextAreaField",
          label: this.$t('Remarks'),
          name: "Remarks",
          value: "",
          placeholder: "",
          config: {
            rows: 5
          }
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
      }]
    };
  },
  created: function () {
    this.FetchData();
    this.GetAvailableQty();
  },
  methods: {
    FetchData: function () {
      console.log(this.ItemData);
      this.FormSchema[0].Data[0].value = this.ItemData.Name;
      this.FormSchema[0].Data[1].value = this.ItemData.UniqueName;
      this.FormSchema[0].Data[2].value = this.ItemData.AssignedFrom;
      this.FormSchema[0].Data[3].value = this.ItemData.AssignedTill;
    },
    GetAvailableQty: function () {
      var url = `relatedInfoID=${this.ItemData.RelatedInfoId}`;
      DataService["a" /* default */].GetAvailableQty(url).then(response => {
        this.FormSchema[0].Data[4].value = response.data;
      });
    },
    CloseRequestForQuantity: function () {
      this.$emit('CloseRequestForQuantity');
    },
    onCancel: function () {
      this.$emit('CloseRequestForQuantity');
    },
    onSubmit: function (formfields, val) {
      var vm = this;
      let JsonObj = {
        Name: vm.ItemData.Name,
        UniqueName: vm.ItemData.UniqueName,
        AssignedFrom: formfields.AssignedFrom,
        AssignedTill: formfields.AssignedTill,
        NumberOfItems: formfields.NumberofProducts,
        Remarks: formfields.Remarks,
        RelatedInfoId: vm.ItemData.RelatedInfoId,
        AssetAssignmentId: vm.ItemData.AssetAssignmentId,
        UserId: vm.ItemData.UserId,
        AssetCatalogueId: vm.ItemData.AssetCatalogueId,
        AssetReplacementType: vm.ItemData.AssetReplacementType
      };
      var Jsondata = JSON.stringify(JsonObj);
      DataService["a" /* default */].AssetRequest(Jsondata).then(response => {
        if (response.data != null) {
          if (response.data.status == 0) {
            vm.ShowAlert(response.data.msg, "success", true, vm.$t('Alert'));
            vm.onCancel();
            vm.$parent.FetchData();
          } else {
            vm.ShowAlert(vm.$t("ErrorWhileProcessingRequest"), "failure", true, vm.$t('Alert'));
            vm.onCancel();
          }
          ;
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/RequestQuantity.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_RequestQuantityvue_type_script_lang_js_ = (RequestQuantityvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Modal/RequestQuantity.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Modal_RequestQuantityvue_type_script_lang_js_,
  RequestQuantityvue_type_template_id_c3745af6_render,
  RequestQuantityvue_type_template_id_c3745af6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RequestQuantity = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/RequestReplace.vue?vue&type=template&id=562de70e&
var RequestReplacevue_type_template_id_562de70e_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "my-popups"
  }, [_c('loader', {
    attrs: {
      "is-visible": _vm.isLoading
    }
  }), _c('div', {
    staticClass: "modal d-block"
  }, [_c('div', {
    staticClass: "modal-dialog modal-dialog-centered"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('div', {
    staticClass: "modal-header"
  }, [_c('h5', {
    staticClass: "modal-title"
  }, [_vm._v(" " + _vm._s(_vm.Title) + ": " + _vm._s(_vm.ItemData.Name) + " ")]), _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-original-title": "Close"
    },
    on: {
      "click": _vm.closeRequestReplace
    }
  }, [_c('em', {
    staticClass: "fa fa-times"
  })])]), _c('div', {
    staticClass: "border p-3"
  }, [_c('dynamic-form', {
    attrs: {
      "lang": "en",
      "buttons": _vm.buttons,
      "schema": _vm.FormSchema
    },
    on: {
      "OnSubmit": _vm.onSubmit
    }
  })], 1)])])])], 1);
};
var RequestReplacevue_type_template_id_562de70e_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Modal/RequestReplace.vue?vue&type=template&id=562de70e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/RequestReplace.vue?vue&type=script&lang=js&


/* harmony default export */ var RequestReplacevue_type_script_lang_js_ = ({
  props: {
    ItemData: {
      type: Array,
      required: true
    },
    Title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      IsShowAddNamePopup: false,
      Title: '',
      isLoading: false,
      FormSchema: [{
        layoutType: "double",
        Data: [{
          astype: "TextField",
          label: this.$t('Product'),
          name: "Product",
          value: "",
          placeholder: "",
          config: {
            options: []
          }
        }, {
          astype: "TextField",
          label: this.$t('Unique Name'),
          name: "10/12/2022 12:AM",
          value: "",
          placeholder: ""
        }, {
          astype: "DateField",
          label: this.$t('AssignedFrom'),
          name: "10/12/2022 12:AM",
          value: '',
          placeholder: "10/12/2022 12:AM",
          config: {
            format: "MM/DD/YYYY"
          }
        }, {
          astype: "DateField",
          label: this.$t('Assigned Till'),
          name: "Assigned Till",
          value: '',
          placeholder: "M/D/YYYY",
          config: {
            format: "MM/DD/YYYY"
          }
        }, {
          astype: "SelectField",
          label: this.$t('Reason'),
          name: "Reason",
          value: "",
          placeholder: "",
          validationRules: {
            "required": true,
            max: 250
          },
          config: {
            options: []
          }
        }, {
          astype: "TextField",
          label: this.$t('Number of Products'),
          name: "NumberofProducts",
          value: "",
          placeholder: "",
          validationRules: {
            "required": false,
            max: 250
          }
        }]
      }, {
        layoutType: "single",
        Data: [{
          astype: "TextAreaField",
          label: this.$t('Remarks'),
          name: "Remarks",
          value: "",
          placeholder: "",
          config: {
            rows: 5
          }
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
      UserId: ''
    };
  },
  created: function () {
    this.UserId = this.GetUserInfo.ID;
    this.FetchData();
    this.GetAssetItemStatusList();
  },
  methods: {
    FetchData: function () {
      this.FormSchema[0].Data[0].value = this.ItemData.Name;
      this.FormSchema[0].Data[1].value = this.ItemData.UniqueName;
      this.FormSchema[0].Data[2].value = this.ItemData.AssignedFrom;
      this.FormSchema[0].Data[3].value = this.ItemData.AssignedTill;
      this.FormSchema[0].Data[5].value = this.ItemData.NumberOfItems;
    },
    GetAssetItemStatusList: function () {
      var url = `requestFrom=AssetReplace`;
      DataService["a" /* default */].GetAssetItemStatusList(url).then(response => {
        response.data.forEach(item => {
          this.FormSchema[0].Data[4].config.options.push({
            value: item.STATUS_ID,
            name: item.STATUS_NAME
          });
        });
      });
    },
    closeRequestReplace: function () {
      this.$emit('closeRequestReplace');
    },
    onCancel: function () {
      this.$emit('closeRequestReplace');
    },
    onSubmit: function (formfields, val) {
      var vm = this;
      vm.isLoading = true;
      let JsonObj = {
        Name: vm.ItemData.Name,
        UniqueName: vm.ItemData.UniqueName,
        AssignedFrom: vm.ItemData.AssignedFrom,
        AssignedTill: vm.ItemData.AssignedTill,
        NumberOfItems: formfields.NumberofProducts,
        Reason: formfields.Reason,
        Remarks: formfields.Remarks,
        AssetReplacementType: vm.ItemData.AssetReplacementType,
        RelatedInfoId: vm.ItemData.RelatedInfoId,
        AssetAssignmentId: vm.ItemData.AssetAssignmentId,
        UserId: vm.UserId,
        AssetCatalogueId: vm.ItemData.AssetCatalogueId
      };
      var Jsondata = JSON.stringify(JsonObj);
      DataService["a" /* default */].AssetReplacement(Jsondata).then(response => {
        if (response.data != null) {
          if (response.data.status == 0) {
            vm.ShowAlert(vm.$t(response.data.msg), "success", true, vm.$t('Alert'));
            vm.onCancel();
            vm.$parent.FetchData();
            var final = Number(formfields.NumberofProducts) - vm.ItemData.NumberOfItems;
            if (final < 0) {
              setButonDisable(formfields.assetAssignmentId, final);
            }
          } else {
            vm.ShowAlert(vm.$t("ErrorWhileProcessingRequest"), "failure", true, vm.$t('Alert'));
            vm.onCancel();
          }
          ;
        }
        vm.isLoading = false;
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/RequestReplace.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_RequestReplacevue_type_script_lang_js_ = (RequestReplacevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Modal/RequestReplace.vue





/* normalize component */

var RequestReplace_component = Object(componentNormalizer["a" /* default */])(
  Modal_RequestReplacevue_type_script_lang_js_,
  RequestReplacevue_type_template_id_562de70e_render,
  RequestReplacevue_type_template_id_562de70e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RequestReplace = (RequestReplace_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/Consume.vue?vue&type=template&id=719e7973&
var Consumevue_type_template_id_719e7973_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
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
  }, [_vm._v("Consume Product:" + _vm._s(_vm.ItemData.Name) + " ")]), _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-original-title": "Close"
    },
    on: {
      "click": _vm.closeconsume
    }
  }, [_c('em', {
    staticClass: "fa fa-times"
  })])]), _c('div', {
    staticClass: "border p-3"
  }, [_c('dynamic-form', {
    attrs: {
      "lang": "en",
      "buttons": _vm.buttons,
      "schema": _vm.FormSchema
    },
    on: {
      "OnSubmit": _vm.onSubmit
    }
  })], 1)])])])]);
};
var Consumevue_type_template_id_719e7973_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Modal/Consume.vue?vue&type=template&id=719e7973&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/Consume.vue?vue&type=script&lang=js&

/* harmony default export */ var Consumevue_type_script_lang_js_ = ({
  props: {
    ItemData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      ApprovesData: [],
      IsShowAddNamePopup: false,
      Title: '',
      FormSchema: [{
        layoutType: "double",
        Data: [{
          astype: "TextField",
          label: this.$t('Product'),
          name: "Product",
          value: "",
          placeholder: "",
          config: {
            options: []
          }
        }, {
          astype: "TextField",
          label: this.$t('Unique Name'),
          name: "10/12/2022 12:AM",
          value: "",
          placeholder: ""
        }, {
          astype: "DateField",
          label: this.$t('AssignedFrom'),
          name: "10/12/2022 12:AM",
          value: '',
          placeholder: "10/12/2022 12:AM",
          config: {
            format: "MM/DD/YYYY"
          }
        }, {
          astype: "DateField",
          label: this.$t('Assigned Till'),
          name: "Assigned Till",
          value: '',
          placeholder: "M/D/YYYY",
          config: {
            format: "MM/DD/YYYY"
          }
        }, {
          astype: "TextField",
          label: this.$t('Number of Products'),
          name: "NumberofProducts",
          value: "",
          placeholder: "",
          validationRules: {
            "required": true,
            max: 250
          }
        }]
      }, {
        layoutType: "single",
        Data: [{
          astype: "TextAreaField",
          label: this.$t('Tag'),
          name: "Tag",
          value: "",
          placeholder: "",
          config: {
            rows: 2
          }
        }]
      }, {
        layoutType: "single",
        Data: [{
          astype: "TextAreaField",
          label: this.$t('Remarks'),
          name: "Remarks",
          value: "",
          placeholder: "",
          config: {
            rows: 2
          }
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
      }]
    };
  },
  created: function () {
    var vm = this;
    vm.FetchData();
  },
  methods: {
    closeconsume: function () {
      this.$emit('closeconsume');
    },
    onCancel: function () {
      this.$emit('closeconsume');
    },
    FetchData() {
      var vm = this;
      vm.isLoading = true;
      vm.FormSchema[0].Data[0].value = vm.ItemData.Name;
      vm.FormSchema[0].Data[1].value = vm.ItemData.UniqueName;
      vm.FormSchema[0].Data[2].value = vm.ItemData.AssignedFrom;
      vm.FormSchema[0].Data[3].value = vm.ItemData.AssignedTill;
    },
    onSubmit: function (formfields, val) {
      var vm = this;
      let JsonObj = {
        Name: vm.ItemData.Name,
        UniqueName: vm.ItemData.UniqueName,
        AssignedFrom: vm.ItemData.AssignedFrom,
        AssignedTill: vm.ItemData.AssignedTill,
        NumberOfItems: formfields.NumberofProducts,
        Tag: formfields.Tag,
        Remarks: formfields.Remarks,
        ParentRelatedInfoId: vm.ItemData.ParentRelatedInfoId,
        refType: "CHECKOUT",
        Comment: "",
        RelatedInfoId: vm.ItemData.RelatedInfoId,
        AssetAssignmentId: vm.ItemData.AssetAssignmentId,
        UserId: vm.ItemData.UserId
      };
      var Jsondata = JSON.stringify(JsonObj);
      DataService["a" /* default */].SaveAssetCheckout(Jsondata).then(response => {
        if (response.data != null) {
          if (response.data.status == 0) {
            vm.onCancel();
            vm.$parent.FetchData();
            var final = Number(formfields.NumberofProducts) - vm.ItemData.NumberOfItems;
            if (final < 0) {
              setButonDisable(formfields.assetAssignmentId, final);
            }
          } else {
            vm.ShowAlert(vm.$t("ErrorWhileProcessingRequest"), "failure", true, vm.$t('Alert'));
            vm.onCancel();
          }
          ;
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/Consume.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_Consumevue_type_script_lang_js_ = (Consumevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Modal/Consume.vue





/* normalize component */

var Consume_component = Object(componentNormalizer["a" /* default */])(
  Modal_Consumevue_type_script_lang_js_,
  Consumevue_type_template_id_719e7973_render,
  Consumevue_type_template_id_719e7973_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Consume = (Consume_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/TransferAssetPopUp.vue?vue&type=template&id=57532554&
var TransferAssetPopUpvue_type_template_id_57532554_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "my-popups"
  }, [_c('loader', {
    attrs: {
      "is-visible": _vm.isLoading
    }
  }), _c('div', {
    staticClass: "modal d-block"
  }, [_c('div', {
    staticClass: "modal-dialog modal-dialog-centered"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('div', {
    staticClass: "modal-header"
  }, [_c('h5', {
    staticClass: "modal-title"
  }, [_vm._v(" " + _vm._s(_vm.$t('AssetTransfer')) + ":" + _vm._s(_vm.ItemData.Name) + " ")]), _c('button', {
    staticClass: "close",
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": _vm.closeTransfer
    }
  }, [_c('i', {
    staticClass: "fa fa-times",
    attrs: {
      "aria-hidden": "true"
    }
  })])]), _c('div', {
    staticClass: "modal-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-12 col-lg-12"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Select Product")]), _c('div', {
    staticClass: "listing float-none"
  }, [_c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-bordered dt-responsive nowrap mt-0"
  }, [_c('thead', {
    staticClass: "thead-bg"
  }, [_c('tr', [_vm._m(0), _c('th', [_c('span', {
    attrs: {
      "href": "javascript:;",
      "id": "Item"
    }
  }, [_vm._v(_vm._s(_vm.$t('Product')))])]), _c('th', [_c('span', {
    attrs: {
      "href": "javascript:;",
      "id": "UniqueName"
    }
  }, [_vm._v(_vm._s(_vm.$t('UniqueName')))])]), _c('th', [_c('span', {
    attrs: {
      "href": "javascript:;",
      "id": "ItemCode"
    }
  }, [_vm._v(_vm._s(_vm.$t('ItemCode')))])]), _c('th', [_c('span', {
    attrs: {
      "href": "javascript:;",
      "id": "AvailableQuantity"
    }
  }, [_vm._v(_vm._s(_vm.$t('AVAILABLE_ITEMS')))])]), _c('th', {
    staticStyle: {
      "min-width": "200px"
    }
  }, [_c('span', {
    attrs: {
      "href": "javascript:;",
      "id": "Quantity"
    }
  }, [_vm._v(_vm._s(_vm.$t('DivideLeaveQuantity')))])])])]), _c('tbody', [_vm._l(_vm.TransferData, function (item, index) {
    return [_c('tr', {
      key: index,
      staticClass: "insertedrow Records parentmain bg-gold"
    }, [_c('td', {
      staticClass: "text-center"
    }, [_c('input', {
      staticClass: "chkItems recordsCheckItems",
      attrs: {
        "type": "checkbox",
        "name": "ParentRelatedInfoId",
        "data-RelateInfoId": item.RelatedInfoId
      },
      domProps: {
        "value": _vm.ItemData.RelatedInfoId
      }
    })]), _c('td', [_c('span', {
      staticClass: "spnCatalogName",
      attrs: {
        "title": item.CatalogName
      }
    }, [_vm._v(_vm._s(item.CatalogName))])]), _c('td', [_c('span', {
      staticClass: "spnUniqueName",
      attrs: {
        "title": item.UniqueName
      }
    }, [_vm._v(_vm._s(item.UniqueName))])]), _c('td', [_c('span', {
      staticClass: "spnItemCode",
      attrs: {
        "title": item.ItemCode
      }
    }, [_vm._v(_vm._s(item.ItemCode))])]), _c('td', [_vm._v(" " + _vm._s(item.AvailableItems) + " ")]), _c('td', [item.ISUnique ? _c('input', {
      staticClass: "txtAvailableItems form-control",
      attrs: {
        "type": "text",
        "disabled": "",
        "data-oldqty": item.AvailableItems,
        "data-numberonly": "yes"
      },
      domProps: {
        "value": item.AvailableItems
      }
    }) : _c('input', {
      staticClass: "txtAvailableItems form-control",
      attrs: {
        "type": "text",
        "data-oldqty": item.AvailableItems,
        "data-numberonly": "yes"
      },
      domProps: {
        "value": item.AvailableItems
      }
    })])]), _vm._l(index.AssetCatalogueGroup, function (child, childIndex) {
      return _c('tr', {
        key: childIndex
      }, [_vm._m(1, true), _c('td'), _c('td', [_c('span', {
        attrs: {
          "title": child.CatalogName
        }
      }, [_vm._v(_vm._s(child.CatalogName))])]), _c('td', [_c('span', {
        attrs: {
          "title": child.UniqueName
        }
      }, [_vm._v(_vm._s(child.UniqueName))])]), _c('td', [_c('span', {
        attrs: {
          "title": child.ItemCode
        }
      }, [_vm._v(_vm._s(child.ItemCode))])]), _c('td', [item.ISUnique ? _c('input', {
        staticClass: "txtAvailableItems form-control",
        attrs: {
          "type": "text",
          "disabled": ""
        }
      }) : _c('input', {
        staticClass: "txtAvailableItems form-control",
        attrs: {
          "type": "text"
        }
      })])]);
    })];
  }), _c('tr', {
    staticClass: "row"
  }, [_vm.NoRecordfound ? _c('td', {
    staticClass: "no_records no-record",
    attrs: {
      "colspan": "7"
    }
  }, [_vm._v(_vm._s(_vm.$t('No_Record_Found')))]) : _vm._e()])], 2)])])])])])]), _vm.DataLoaded ? _c('dynamic-form', {
    attrs: {
      "lang": "en",
      "buttons": _vm.buttons,
      "schema": _vm.FormSchema
    },
    on: {
      "OnSubmit": _vm.onSubmit
    }
  }) : _vm._e()], 1)])])])], 1);
};
var TransferAssetPopUpvue_type_template_id_57532554_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('th', {
    staticClass: "text-center"
  }, [_c('div', {
    staticClass: "pullleft"
  }, [_c('input', {
    staticClass: "chkItems",
    attrs: {
      "type": "checkbox",
      "id": "chkAll",
      "name": "checkbox"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('td', {
    staticClass: "text-center"
  }, [_c('input', {
    staticClass: "chkItems recordsCheckItems",
    attrs: {
      "type": "checkbox",
      "value:": "ItemData.RelatedInfoId"
    }
  })]);
}];

// CONCATENATED MODULE: ./src/components/Modal/TransferAssetPopUp.vue?vue&type=template&id=57532554&

// EXTERNAL MODULE: ./node_modules/tg-controls_cli/dist/myLib.common.js
var myLib_common = __webpack_require__("240d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/TransferAssetPopUp.vue?vue&type=script&lang=js&



/* harmony default export */ var TransferAssetPopUpvue_type_script_lang_js_ = ({
  components: {
    'tree-view': myLib_common["TreeSelectField"]
  },
  props: {
    ItemData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      DataLoaded: 0,
      NoRecordfound: false,
      isLoading: false,
      TransferData: [],
      FormSchema: [{
        layoutType: "double",
        Data: [{
          astype: "TreeSelectField",
          label: this.$t('Location'),
          name: "Location",
          value: null,
          placeholder: "",
          config: {
            options: [],
            onChange: this.GetLocationWiseUsers
          }
        }, {
          astype: "SelectField",
          label: this.$t('Users'),
          name: "Users",
          value: "",
          placeholder: "",
          config: {
            options: []
          }
        }]
      }, {
        layoutType: "single",
        Data: [{
          astype: "TextAreaField",
          label: this.$t('Remarks'),
          name: "Remarks",
          value: "",
          placeholder: "",
          validationRules: {
            "required": false
          },
          config: {
            rows: 2
          }
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
        onClick: this.closeTransfer
      }],
      LocationData: [],
      UserData: [],
      TransferData: []
    };
  },
  async created() {
    await this.GetLocationByCompanyId();
    await this.GetCompanyAssestCatalogsDetalis();
    this.DataLoaded = 1;
  },
  methods: {
    GetLocationByCompanyId: async function () {
      var vm = this;
      var url = `reqForm=`;
      await DataService["a" /* default */].GetLocationByCompanyId(url).then(response => {
        //debugger              
        vm.LocationData = JSON.parse(response.data).data;
        vm.FindalLocationArray = [];
        vm.LocationData.forEach(value => {
          var CheckIfExist = vm.FindalLocationArray.filter(function (el) {
            return el.COMPANY_LOCATION_ID == value.COMPANY_LOCATION_ID;
          });
          if (CheckIfExist.length == 0) {
            if (value.PARENT_LOCATION_ID == null) {
              let locationId = value.COMPANY_LOCATION_ID;
              let rslt = vm.getChildLocation(locationId, value, vm.LocationData);
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
    GetLocationWiseUsers(evt) {
      var vm = this;
      var location = vm.FormSchema[0].Data[0].value;
      debugger;
      var url = `locationId=${location}&moduleName=Asset`;
      DataService["a" /* default */].GetLocationWiseUsers(url).then(response => {
        vm.UserData = response.data;
        vm.UserData.forEach((item, index) => {
          vm.FormSchema[0].Data[1].config.options.push({
            name: item.Text,
            value: `${item.Value}`
          });
        });
      });
    },
    GetCompanyAssestCatalogsDetalis: function () {
      var url = `locationid=${this.ItemData.LocationId}&assetUniqueId=${this.ItemData.RelatedInfoId}&assetAssignmentId=${this.ItemData.AssetAssignmentId}`;
      DataService["a" /* default */].GetCompanyAssestCatalog(url).then(response => {
        this.TransferData.push(JSON.parse(response.data));
      });
    },
    getData: function () {
      var Data = "";
      this.TransferData.forEach((value, index) => {
        var catalogId = this.ItemData.AssetCatalogueId;
        var relatedInfoId = value.RelatedInfoId;
        var quantity = value.AvailableItems;
        var assignmentId = value.AssetAssignmentId;
        if (Data == "") {
          Data = catalogId + "," + relatedInfoId + "," + quantity + "," + assignmentId;
        } else {
          Data = Data + "|" + catalogId + "," + relatedInfoId + "," + quantity + "," + assignmentId;
        }
      });
      return Data;
    },
    closeTransfer: function () {
      this.$emit('closeTransfer');
    },
    onCancel: function () {
      this.$emit('closeTransfer');
    },
    onSubmit: function (formfields, val) {
      var vm = this;
      vm.isLoading = true;
      var tranferData = vm.getData();
      if (tranferData == "") {
        vm.ShowAlert(vm.$t('PleaseSelectAtleastOneProduct'), "failure", true, vm.$t("Alert"));
        vm.isLoading = false;
      } else {
        let data = {
          transferData: tranferData,
          locationId: formfields.Location,
          userId: formfields.Users,
          comments: formfields.Remarks
        };
        var Jsondata = JSON.stringify(data);
        DataService["a" /* default */].AssetTransferToEmployee(Jsondata).then(response => {
          if (response.data.Status == 0) {
            vm.isLoading = false;
            vm.ShowAlert(response.data.msg, "success", true, vm.$t("Alert"));
            vm.closeTransfer();
            vm.$parent.FetchData();
          } else if (response.data.Status == -1) {
            vm.isLoading = false;
            vm.ShowAlert(response.data.msg, "failure", true, vm.$t("Alert"));
          } else {
            vm.isLoading = false;
            vm.ShowAlert(vm.$t('ErrorWhileProcessingRequest'), "failure", true, vm.$t("Alert"));
          }
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/TransferAssetPopUp.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_TransferAssetPopUpvue_type_script_lang_js_ = (TransferAssetPopUpvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Modal/TransferAssetPopUp.vue





/* normalize component */

var TransferAssetPopUp_component = Object(componentNormalizer["a" /* default */])(
  Modal_TransferAssetPopUpvue_type_script_lang_js_,
  TransferAssetPopUpvue_type_template_id_57532554_render,
  TransferAssetPopUpvue_type_template_id_57532554_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TransferAssetPopUp = (TransferAssetPopUp_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/SelfCheckOut.vue?vue&type=template&id=7b4ba52d&
var SelfCheckOutvue_type_template_id_7b4ba52d_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "my-popups"
  }, [_c('loader', {
    attrs: {
      "is-visible": _vm.isLoading
    }
  }), _c('div', {
    staticClass: "modal d-block"
  }, [_c('div', {
    staticClass: "modal-dialog modal-dialog-centered"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('div', {
    staticClass: "modal-header"
  }, [_c('h5', {
    staticClass: "modal-title"
  }, [_vm._v(_vm._s(_vm.$t('IsSelfCheckOut')) + ": " + _vm._s(_vm.ItemData.Name) + " ")]), _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-original-title": "Close"
    },
    on: {
      "click": _vm.CloseSelfCheckOut
    }
  }, [_c('em', {
    staticClass: "fa fa-times"
  })])]), _c('div', {
    staticClass: "border p-3"
  }, [_c('dynamic-form', {
    attrs: {
      "lang": "en",
      "buttons": _vm.buttons,
      "schema": _vm.FormSchema
    },
    on: {
      "OnSubmit": _vm.onSubmit
    }
  })], 1)])])])], 1);
};
var SelfCheckOutvue_type_template_id_7b4ba52d_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Modal/SelfCheckOut.vue?vue&type=template&id=7b4ba52d&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/SelfCheckOut.vue?vue&type=script&lang=js&

/* harmony default export */ var SelfCheckOutvue_type_script_lang_js_ = ({
  props: {
    ItemData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isLoading: false,
      FormSchema: [{
        layoutType: "double",
        Data: [{
          astype: "TextField",
          label: this.$t('Product'),
          name: "Product",
          value: "",
          placeholder: "",
          config: {
            options: []
          }
        }, {
          astype: "TextField",
          label: this.$t('Unique Name'),
          name: "10/12/2022 12:AM",
          value: "",
          placeholder: ""
        }, {
          astype: "DateField",
          label: this.$t('AssignedFrom'),
          name: "10/12/2022 12:AM",
          value: '',
          placeholder: "10/12/2022 12:AM",
          config: {
            format: "MM/DD/YYYY"
          }
        }, {
          astype: "DateField",
          label: this.$t('Assigned Till'),
          name: "Assigned Till",
          value: '',
          placeholder: "M/D/YYYY",
          config: {
            format: "MM/DD/YYYY"
          }
        }, {
          astype: "TextField",
          label: this.$t('Number of Products'),
          name: "NumberofProducts",
          value: "",
          placeholder: "",
          validationRules: {
            "required": false,
            max: 250
          }
        }]
      }, {
        layoutType: "single",
        Data: [{
          astype: "TextAreaField",
          label: this.$t('Remarks'),
          name: "Remarks",
          value: "",
          placeholder: "",
          config: {
            rows: 5
          }
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
        onClick: this.CloseSelfCheckOut
      }]
    };
  },
  created: function () {
    this.FetchData();
  },
  methods: {
    onSubmit: function (formfields) {
      var vm = this;
      vm.isLoading = true;
      let Objdata = {
        Name: vm.ItemData.Name,
        UniqueName: vm.ItemData.UniqueName,
        AssignedFrom: vm.ItemData.AssignedFrom,
        AssignedTill: vm.ItemData.AssignedTill,
        NumberOfItems: formfields.NumberofProducts,
        Remarks: formfields.Remarks,
        RelatedInfoId: vm.ItemData.RelatedInfoId,
        AssetAssignmentId: vm.ItemData.AssetAssignmentId,
        UserId: vm.ItemData.UserId,
        AssetCatalogueId: vm.ItemData.AssetCatalogueId,
        RequestType: 'SELFCHECKOUT'
      };
      var JsonObj = JSON.stringify(Objdata);
      DataService["a" /* default */].AssetSelfCheckOut(JsonObj).then(response => {
        if (response.data != null) {
          if (response.data.status == 0) {
            if (response.data.ExistIds == "") {
              vm.isLoading = false;
              vm.ShowAlert(response.data.msg, "success", true, vm.$t('Alert'));
              var final = Number(formfields.NumberofProducts) - vm.ItemData.NumberOfItems;
              if (final < 0) {
                setButonDisable(formfields.assetAssignmentId, final);
              }
              vm.CloseSelfCheckOut();
              vm.$parent.FetchData();
            } else {
              vm.isLoading = false;
            }
          }
        } else {
          vm.ShowAlert(vm.$t("ErrorWhileProcessingRequest"), "failure", true, vm.$t('Alert'));
          vm.CloseSelfCheckOut();
        }
      });
    },
    CloseSelfCheckOut: function () {
      this.$emit('CloseSelfCheckOut');
    },
    FetchData: function () {
      var vm = this;
      vm.FormSchema[0].Data[0].value = vm.ItemData.Name;
      vm.FormSchema[0].Data[1].value = vm.ItemData.UniqueName;
      vm.FormSchema[0].Data[2].value = vm.ItemData.AssignedFrom;
      vm.FormSchema[0].Data[3].value = vm.ItemData.AssignedTill;
      vm.FormSchema[0].Data[4].value = vm.ItemData.NumberOfItems;
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/SelfCheckOut.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_SelfCheckOutvue_type_script_lang_js_ = (SelfCheckOutvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Modal/SelfCheckOut.vue





/* normalize component */

var SelfCheckOut_component = Object(componentNormalizer["a" /* default */])(
  Modal_SelfCheckOutvue_type_script_lang_js_,
  SelfCheckOutvue_type_template_id_7b4ba52d_render,
  SelfCheckOutvue_type_template_id_7b4ba52d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SelfCheckOut = (SelfCheckOut_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/ShowTermsConditions.vue?vue&type=template&id=f40f3dee&
var ShowTermsConditionsvue_type_template_id_f40f3dee_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "my-popups"
  }, [_c('loader', {
    attrs: {
      "is-visible": _vm.isLoading
    }
  }), _c('div', {
    staticClass: "modal d-block"
  }, [_c('div', {
    staticClass: "modal-dialog modal-dialog-centered"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('div', {
    staticClass: "modal-header"
  }, [_c('h5', {
    staticClass: "modal-title"
  }, [_vm._v(_vm._s(_vm.$t('GinTermsConditions')) + ": " + _vm._s(_vm.ItemData.Name) + " ")]), _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-original-title": "Close"
    },
    on: {
      "click": _vm.CloseAcceptTermsConditions
    }
  }, [_c('em', {
    staticClass: "fa fa-times"
  })])]), _c('div', {
    staticClass: "border p-3"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "modal-body w-100 py-0"
  }, [_c('section', {
    staticClass: "tab mt-2"
  }, [_c('div', {
    staticClass: "tab-style"
  }, [_c('div', {
    staticClass: "tab_container mb-0"
  }, [_c('div', {
    staticClass: "responsive-tabs-container accordion-xs accordion-sm"
  }, [_c('div', {
    staticClass: "listing tab-content"
  }, [_c('div', {
    attrs: {
      "id": ""
    }
  }, [_c('div', {
    staticClass: "container-fluid p-0"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-6 mb-2"
  }, [_c('div', {
    staticClass: "p-2 bg-grey text-center"
  }, [_c('b', {
    staticClass: "font-weight-medium"
  }, [_vm._v(_vm._s(_vm.$t('CRM_PRODUCTS')) + ": ")]), _vm._v(" "), _c('span', {
    staticClass: "detailtxt"
  }, [_c('lable', {
    attrs: {
      "id": "lbl-catalogName"
    }
  }), _vm._v(_vm._s(_vm.ItemData.AssetCategoryName))], 1)])]), _c('div', {
    staticClass: "col-lg-6 mb-2"
  }, [_c('div', {
    staticClass: "p-2 bg-grey text-center"
  }, [_c('b', {
    staticClass: "font-weight-medium"
  }, [_vm._v(_vm._s(_vm.$t('UniqueName')) + ": ")]), _vm._v(" "), _c('span', {
    staticClass: "detailtxt"
  }, [_c('lable', {
    attrs: {
      "id": "lbl-uniqeName"
    }
  }), _vm._v(" " + _vm._s(_vm.ItemData.Name))], 1)])]), _c('div', {
    staticClass: "col-lg-6 mb-2"
  }, [_c('div', {
    staticClass: "p-2 bg-grey text-center"
  }, [_c('b', {
    staticClass: "font-weight-medium"
  }, [_vm._v(_vm._s(_vm.$t('AssignedFrom')) + ": ")]), _c('span', {
    staticClass: "detailtxt"
  }, [_c('lable', {
    attrs: {
      "id": "lbl-assignedFrom"
    }
  }), _vm._v(_vm._s(_vm.ItemData.AssignedFrom))], 1)])]), _c('div', {
    staticClass: "col-lg-6 mb-2"
  }, [_c('div', {
    staticClass: "p-2 bg-grey text-center"
  }, [_c('b', {
    staticClass: "font-weight-medium"
  }, [_vm._v(_vm._s(_vm.$t('AssignedTill')) + ": ")]), _c('span', {
    staticClass: "detailtxt"
  }, [_c('lable', {
    attrs: {
      "id": "lbl-assignedTill"
    }
  }), _vm._v(_vm._s(_vm.ItemData.AssignedTill))], 1)])])])])]), _c('div', {
    staticClass: "mt-2 row"
  }, [_c('Form', {
    staticClass: "w-100"
  }, [_c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12"
  }, [_c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-bordered",
    attrs: {
      "id": "tblRecord"
    }
  }, [_c('thead', {
    staticClass: "thead-bg"
  }, [_c('tr', [_c('th', {
    staticClass: "text-center"
  }, [_vm._v(_vm._s(_vm.$t('AttachmentName')))]), _c('th', {
    staticClass: "text-center"
  }, [_vm._v(_vm._s(_vm.$t('FileName')))]), _c('th', {
    staticClass: "text-center"
  }, [_vm._v(_vm._s(_vm.$t('Actions')))])])]), _c('tbody', [_vm.noRecords ? _c('tr', [_c('td', {
    staticClass: "text-center tdcm arial12ff0000 text-danger",
    attrs: {
      "colspan": "3"
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('FileNotFoundForDownload')))])])]) : _vm._e(), _vm._l(_vm.AttachmentData, function (item, index) {
    return _c('tr', {
      key: index
    }, [_c('td', {
      staticClass: "text-center"
    }, [_vm._v(" " + _vm._s(item.ATTACHMENT_TITLE) + " ")]), _c('td', {
      staticClass: "text-center"
    }, [_vm._v(" " + _vm._s(item.ATTACHMENT_NAME) + " ")]), _c('td', {
      staticClass: "text-center"
    }, [_c('a', {
      staticClass: "downloadfile",
      attrs: {
        "href": "javascript:;",
        "title": "DownloadFile",
        "alt": "DownloadFile",
        "value": item.ASSET_ATTACHMENT_ID,
        "fileName": item.ATTACHMENT_NAME,
        "filePath": item.ATTACHMENT_PATH,
        "fileType": item.ATTACHMENT_TYPE
      },
      on: {
        "click": _vm.Downloadfile
      }
    }, [_c('em', {
      staticClass: "fa fa-download action-icon text-success"
    })])])]);
  })], 2)])])]), _c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-2 float-left"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_vm.showCheckBox ? _c('div', {
    staticClass: "custom-control custom-checkbox"
  }, [_c('input', {
    staticClass: "chkItems chktermcondition",
    attrs: {
      "type": "checkbox",
      "id": "chk_terms"
    },
    on: {
      "click": function ($event) {
        return _vm.checkCheckbox($event);
      }
    }
  }), _c('label', [_vm._v(_vm._s(_vm.$t('AgreeToTermsConditions')))])]) : _vm._e()])]), _c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left"
  }, [_c('div', {
    staticClass: "form-group float-md-right mb-0"
  }, [_c('div', {
    staticClass: "search-btm-btn"
  }, [_vm.showCheckBox ? _c('a', {
    staticClass: "btn btn-success formbtn text-white mr-2",
    class: {
      'disabled': _vm.IscheckCheckbox == false
    },
    staticStyle: {
      "cursor": "pointer"
    },
    attrs: {
      "disabled": {
        'disabled': _vm.IscheckCheckbox == false
      },
      "title": "Save",
      "id": "btnSaveTerms"
    },
    on: {
      "click": _vm.SaveTerms
    }
  }, [_c('em', {
    staticClass: "fa fa-save pr-2"
  }), _vm._v(_vm._s(_vm.$t('Save')))]) : _c('a', {
    staticClass: "btn btn-success formbtn disabled text-white mr-2",
    staticStyle: {
      "cursor": "pointer"
    },
    attrs: {
      "title": "Save",
      "id": "btnSaveTerms",
      "disabled": "disabled"
    }
  }, [_c('em', {
    staticClass: "fa fa-close pr-2"
  }), _vm._v(_vm._s(_vm.$t('Save')))]), _c('a', {
    staticClass: "btn btn-danger formbtn text-white",
    staticStyle: {
      "cursor": "pointer"
    },
    attrs: {
      "title": "Cancel"
    },
    on: {
      "click": _vm.CloseAcceptTermsConditions
    }
  }, [_c('em', {
    staticClass: "fa fa-close pr-2"
  }), _vm._v(_vm._s(_vm.$t('Cancel')))])])])])])], 1)])])])])])])])])])])])], 1);
};
var ShowTermsConditionsvue_type_template_id_f40f3dee_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Modal/ShowTermsConditions.vue?vue&type=template&id=f40f3dee&

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.delete.js
var web_url_search_params_delete = __webpack_require__("88a7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.has.js
var web_url_search_params_has = __webpack_require__("271a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.size.js
var web_url_search_params_size = __webpack_require__("5494");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/ShowTermsConditions.vue?vue&type=script&lang=js&




/* harmony default export */ var ShowTermsConditionsvue_type_script_lang_js_ = ({
  props: {
    ItemData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      noRecords: false,
      showCheckBox: false,
      AttachmentData: [],
      IscheckCheckbox: false,
      isLoading: false
    };
  },
  created: function () {
    this.GetTermsConditionsFilePath();
  },
  methods: {
    GetTermsConditionsFilePath: function () {
      var vm = this;
      var url = `assetCatalogId=${vm.ItemData.AssetCatalogueId}`;
      DataService["a" /* default */].GetTermsConditionsFilePath(url).then(response => {
        if (response.data.length > 0) {
          vm.AttachmentData = response.data;
          vm.showCheckBox = vm.AttachmentData[0].ATTACHMENT_PATH == '' ? false : true;
        } else {
          vm.noRecords = true;
          vm.AttachmentData = [];
        }
        setTimeout(function () {
          vm.CheckBoxBootstrap();
        }, 100);
      });
    },
    checkCheckbox: function (event) {
      if (event.target.checked) {
        this.IscheckCheckbox = true;
      } else {
        this.IscheckCheckbox = false;
      }
    },
    CloseAcceptTermsConditions: function () {
      this.$emit('CloseAcceptTermsConditions');
    },
    SaveTerms: function () {
      var vm = this;
      vm.isLoading = true;
      let obj = {
        related_info_id: this.ItemData.RelatedInfoId,
        asset_catalog_id: this.ItemData.AssetCatalogueId
      };
      var JsonObj = JSON.stringify(obj);
      DataService["a" /* default */].SaveTermsConditions(JsonObj).then(response => {
        if (response.data.status == 0) {
          vm.ShowAlert(response.data.msg, "success", true, vm.$t('Alert'));
          vm.CloseAcceptTermsConditions();
          vm.$parent.FetchData();
        } else {
          vm.ShowAlert(response.data.msg, "failure", true, vm.$t('Alert'));
        }
        vm.isLoading = false;
      });
    },
    Downloadfile: function () {
      var vm = this;
      vm.isLoading = true;
      var url = `fileId=${this.AttachmentData[0].ASSET_ATTACHMENT_ID}&filePath=${this.AttachmentData[0].ATTACHMENT_PATH}&fileName=${this.AttachmentData[0].ATTACHMENT_NAME}&fileType=${this.AttachmentData[0].ATTACHMENT_TYPE}`;
      DataService["a" /* default */].Downloadfile(url).then(response => {
        vm.isLoading = false;
        var fileURL = window.URL.createObjectURL(new Blob([response.data]));
        var fileLink = document.createElement('a');
        fileLink.href = fileURL;
        fileLink.setAttribute('download', this.AttachmentData[0].ATTACHMENT_NAME);
        document.body.appendChild(fileLink);
        fileLink.click();
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/ShowTermsConditions.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_ShowTermsConditionsvue_type_script_lang_js_ = (ShowTermsConditionsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Modal/ShowTermsConditions.vue





/* normalize component */

var ShowTermsConditions_component = Object(componentNormalizer["a" /* default */])(
  Modal_ShowTermsConditionsvue_type_script_lang_js_,
  ShowTermsConditionsvue_type_template_id_f40f3dee_render,
  ShowTermsConditionsvue_type_template_id_f40f3dee_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ShowTermsConditions = (ShowTermsConditions_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/MyProduct/List.vue?vue&type=script&lang=js&










/* harmony default export */ var Listvue_type_script_lang_js_ = ({
  components: {
    checkAvailablityModal: checkAvailablity["a" /* default */],
    RequestQuantity: RequestQuantity,
    RequestReplace: RequestReplace,
    Consume: Consume,
    Transfer: TransferAssetPopUp,
    SelfCheckOut: SelfCheckOut,
    ShowTermsCondition: ShowTermsConditions
  },
  data() {
    return {
      UserId: null,
      CompanyId: null,
      IsDefault: null,
      MyItemList: [],
      abc: [],
      txtsearch: '',
      reqstatus: '',
      LocationId: '',
      sortBy: '',
      sortExp: '',
      requisitionId: '',
      GroupData: [],
      productName: '',
      noRecord: false,
      isRequestForQuantity: false,
      isRequestForReplace: false,
      isTransferpopup: false,
      isReturn: false,
      isConsume: false,
      PageNumber: 1,
      PageSize: 10,
      CurrentPage: 1,
      TotalPages: 0,
      IscheckAvailablity: false,
      IsCheckOutRequestList: false,
      IsAddCheckOutRequestList: false,
      widgets: [],
      listheaderbuttons: ListSchema.buttons,
      leftSearchFields: ListSchema.leftsearchSchema,
      listActions: ListSchema.listActions,
      TotalRecords: 0,
      MyItemList: [],
      Headers: [{
        "COLUMN_NAME": 'UniqueName',
        "DATA_TYPE": "image",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": "Product",
        "DISPLAY_ORDER": 1
      }, {
        "COLUMN_NAME": 'AttachmentPath',
        "DATA_TYPE": "image",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Thumbnail",
        "DISPLAY_ORDER": 2,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": 'AssetCategoryName',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Product Type",
        "DISPLAY_ORDER": 3
      }, {
        "COLUMN_NAME": 'AssignedFrom',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Assigned From",
        "DISPLAY_ORDER": 4
      }, {
        "COLUMN_NAME": 'AssignedTill',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Assigned Till",
        "DISPLAY_ORDER": 5
      }, {
        "COLUMN_NAME": 'BarcodeNumber',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Barcode",
        "DISPLAY_ORDER": 6,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": 'NumberOfItems',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Quantity",
        "DISPLAY_ORDER": 7,
        settings: {
          isInSlot: true
        }
      }],
      LegendArray: [],
      SortExp: '',
      SortBy: '',
      ItemData: [],
      isLoading: false,
      isSelfCheckOut: false,
      Title: '',
      IsShowTermsCondition: false,
      UserDateTime: new Date(),
      selfTransfer: '',
      selfCheckout: ''
    };
  },
  created: function () {
    this.SelfCheckoutMethod();
    this.SelfTransferMethod();
    this.FetchData();
    this.IsDefault = this.GetUserInfo.IsDefault;
    this.LegendArray = [{
      class: 'legends_profile colorboxsquare',
      text: 'Pending Approval'
    }, {
      class: 'legend-pending colorboxsquare',
      text: 'Requested for Return'
    }, {
      class: 'legends_low colorboxsquare',
      text: 'Shared Products'
    }, {
      class: 'legends_medium colorboxsquare',
      text: 'Container Products'
    }];
  },
  methods: {
    FetchData: function () {
      var vueObj = this;
      vueObj.isLoading = true;
      var params = `pageSize=${vueObj.PageSize}&pageNum=${vueObj.PageNumber}&sortBy=${vueObj.SortBy}&SortExp=${vueObj.SortExp}&reqstatus=&requisitionId=&${vueObj.searchCondition}`;
      DataService["a" /* default */].MyItemListing(params).then(response => {
        if (response.data != null) {
          if (response.data.length > 0) {
            vueObj.MyItemList = response.data;
            vueObj.MyItemList.forEach(row => {
              row.additionalClass = '';
              if (row.IsAccept == 0 && row.IsEmployeeAcceptance == 1) {
                row.additionalClass = 'high-profile-bar';
              }
              if (row.IsShared == 1) {
                row.additionalClass = 'low-bar';
              }
              if (row.ReturnRequestByPM == 1) {
                row.additionalClass = 'high-bar';
              }
              if (row.IsContainer == 1) {
                row.additionalClass = 'medium-bar';
              }
            });
            vueObj.TotalRecords = response.data[0].TOTAL;
            vueObj.TotalPages = Math.ceil(vueObj.TotalRecords / vueObj.PageSize);
            vueObj.CurrentPage = vueObj.PageNumber;
            vueObj.noRecord = false;
            vueObj.isLoading = false;
          } else {
            vueObj.MyItemList = [];
            vueObj.noRecord = true;
            vueObj.TotalRecords = 0;
            vueObj.isLoading = false;
          }
        } else {
          vueObj.noRecord = true;
          vueObj.MyItemList = [];
          vueObj.TotalRecords = 0;
          vueObj.isLoading = false;
        }
        setTimeout(function () {
          vueObj.CheckBoxBootstrap();
        }, 100);
        setTimeout(function () {
          vueObj.ResponsiveDataTable("tablelistingdata");
        }, 500);
      });
    },
    SelfTransferMethod: function () {
      let url = `moduleName=Asset&configkey=SelfTransfer`;
      DataService["a" /* default */].UserSelfCheckout(url).then(response => {
        this.selfTransfer = response.data;
      });
    },
    SelfCheckoutMethod: function () {
      let url = `moduleName=Asset&configkey=SelfCheckout`;
      DataService["a" /* default */].UserSelfCheckout(url).then(response => {
        this.selfCheckout = response.data;
      });
    },
    SearchData: function () {
      this.PageNumber = 1;
      this.FetchData();
    },
    ResetData: function () {
      this.txtsearch = '';
      this.productName = '';
      this.FetchData();
    },
    pagerMethod: function (value) {
      this.PageSize = value.PageSize;
      this.PageNumber = value.PageNumber;
      this.FetchData();
    },
    checkAvailablity: function () {
      this.IscheckAvailablity = true;
    },
    CheckOutRequestList: function () {
      this.$router.push({
        name: "ProductTypeCheckOutRequest"
      });
    },
    AddCheckOutRequest: function () {
      this.$router.push({
        name: "AssetAssignmentCheckOut"
      });
    },
    ClosePOPuP: function () {
      this.IscheckAvailablity = false;
    },
    RenderRowActionMethod() {},
    leftCommonSearch: function (value) {
      this.PageNumber = value.PageNumber;
      this.isPaged = 1;
      if (typeof value.searchCondition != 'undefined') {
        this.searchCondition = value.searchConditionJson;
      } else {
        this.searchCondition = "";
      }
      this.FetchData();
    },
    RequestQuantity: function (ths) {
      this.ItemData = ths;
      this.isRequestForQuantity = true;
    },
    CloseRequestForQuantity: function () {
      this.isRequestForQuantity = false;
    },
    RequestReplace: function (ths, Title) {
      this.ItemData = ths;
      this.isRequestForReplace = true;
      this.Title = Title == 'RequestReplace' ? 'Request Replace' : 'Return';
    },
    closeRequestReplace: function () {
      this.isRequestForReplace = false;
    },
    AssetReturn: function (ths) {
      this.ItemData = ths;
      this.isReturn = true;
    },
    closeReturn: function () {
      this.isReturn = false;
    },
    Consume: function (ths) {
      this.ItemData = ths;
      this.isConsume = true;
    },
    closeconsume: function () {
      this.isConsume = false;
    },
    Transfer: function (ths) {
      this.ItemData = ths;
      this.isTransferpopup = true;
    },
    closeTransfer: function () {
      this.isTransferpopup = false;
    },
    SelfCheckOut: function (ths) {
      this.ItemData = ths;
      this.isSelfCheckOut = true;
    },
    CloseSelfCheckOut: function () {
      this.isSelfCheckOut = false;
    },
    AcceptTermsConditions: function (ths) {
      this.ItemData = ths;
      this.IsShowTermsCondition = true;
    },
    CloseAcceptTermsConditions: function () {
      this.IsShowTermsCondition = false;
    },
    actionButtonClick: function (callbackfunction, item) {
      var vm = this;
      switch (callbackfunction) {
        case "Consume":
          vm.Consume(item);
          break;
        case "RequestQuantity":
          vm.RequestQuantity(item);
          break;
        case "RequestReplace":
          vm.RequestReplace(item, 'RequestReplace');
          break;
        case "Return":
          vm.RequestReplace(item, 'Return');
          break;
        case "SelfCheckOut":
          vm.SelfCheckOut(item);
          break;
        case "Transfer":
          vm.Transfer(item);
          break;
        case "Accept":
          vm.IsAccept(item, 'Accept');
          break;
        case "Reject":
          vm.IsAccept(item, 'Reject');
          break;
        case "AcceptTermsConditions":
          vm.AcceptTermsConditions(item);
          break;
      }
    },
    commonHeaderButtonClick(event) {
      switch (event.callbackfunction) {
        case "Availability":
          this.checkAvailablity();
          break;
        case "CheckOutRequestList":
          this.CheckOutRequestList();
          break;
        case "AddCheckOutRequests":
          this.AddCheckOutRequest();
          break;
        case "SelfAssignment":
          this.SelfAssignment();
          break;
      }
    },
    SelfAssignment: function () {
      this.$router.push({
        name: "AddAssetAssignment",
        params: {
          reqForm: 'myitems'
        }
      });
    },
    sortdata: function (s) {
      var SortDir = "sort tb_headerSortDown";
      this.SortBy = s;
      if (s === this.SortBy) {
        if (this.SortExp == "") {
          this.SortExp = "ASC";
          SortDir = "sort tb_headerSortDown";
        } else if (this.SortExp == "ASC") {
          this.SortExp = "DESC";
          SortDir = "sort tb_headerSortUp";
        } else {
          this.SortExp = "ASC";
          SortDir = "sort tb_headerSortDown";
        }
      }
      this.FetchData();
      $("#" + s + "  span:first-child").attr("class", SortDir);
    },
    renderActions(row) {
      var self = this;
      let rtnActionArray = [];
      self.listActions.forEach(actionItem => {
        let action = {
          ...actionItem
        };
        switch (action.title) {
          case 'Consume':
            action.isVisible = row.FirstTimeRow ? row.NumberOfItems > 0 && row.IsConsumable == 1 && (row.IsEmployeeAcceptance == 1 ? row.IsAccept == 1 : row.IsAccept == 0) : row.NumberOfItems > 0 && row.IsConsumable == 1;
            break;
          case 'Replace Request':
            action.isVisible = row.FirstTimeRow ? row.NumberOfItems > 0 && (row.IsEmployeeAcceptance == 1 ? row.IsAccept == 1 : row.IsAccept == 0) : row.NumberOfItems > 0;
            break;
          case 'Request Quantity':
            action.isVisible = row.FirstTimeRow ? !(row.IsSelfCheckout == 1 && row.ISUnique == false && this.selfCheckout == "yes") && (row.IsEmployeeAcceptance == 1 ? row.IsAccept == 1 : row.IsAccept == 0) && row.ISUnique == false && (row.IsEmployeeAcceptance == 1 ? row.IsAccept == 1 : row.IsAccept == 0) : !(row.IsSelfCheckout == 1 && row.ISUnique == false && this.selfCheckout == "yes") && row.ISUnique == false;
            break;
          case 'Self CheckOut':
            action.isVisible = row.FirstTimeRow ? row.IsSelfCheckout == 1 && row.ISUnique == false && this.selfCheckout == "yes" && (row.IsEmployeeAcceptance == 1 ? row.IsAccept == 1 : row.IsAccept == 0) : row.IsSelfCheckout == 1 && row.ISUnique == false && this.selfCheckout == "yes";
            break;
          case 'Transfer':
            action.isVisible = row.FirstTimeRow ? row.NumberOfItems > 0 && row.IsTransferrable == 1 && (this.selfTransfer == "yes" || this.default == true) && (row.IsEmployeeAcceptance == 1 ? row.IsAccept == 1 : row.IsAccept == 0) : true;
            break;
          case 'Return':
            action.isVisible = row.FirstTimeRow ? row.NumberOfItems > 0 && (row.IsEmployeeAcceptance == 1 ? row.IsAccept == 1 : row.IsAccept == 0) && row.IsAccept != 0 || row.IsSelfCheckout == 1 : !(row.NumberOfItems > 0 && (row.IsEmployeeAcceptance == 1 ? row.IsAccept == 1 : row.IsAccept == 0)) && row.IsAccept != 0;
            break;
          case 'Accept':
            action.isVisible = row.FirstTimeRow ? row.IsEmployeeAcceptance == 1 && row.IsAccept != 1 : row.IsEmployeeAcceptance == 1 && row.IsAccept != 1;
            break;
          case 'Reject':
            action.isVisible = row.IsEmployeeAcceptance == 1 && row.IsAccept != 1;
            break;
          case "Accept Terms Conditions":
            action.isVisible = row.FirstTimeRow ? row.NumberOfItems > 0 && row.IsEnableTerms == 1 && (row.IsEmployeeAcceptance == 1 ? row.IsAccept == 1 : row.IsAccept == 0) && row.ShowTermsConditions : row.NumberOfItems > 0 && row.IsEnableTerms == 1 && row.ShowTermsConditions;
            break;
          default:
            action.isVisible = false;
            break;
        }
        rtnActionArray.push(action);
      });
      return rtnActionArray;
    },
    IsAccept: function (ths, code) {
      var dataArray = [];
      var vm = this;
      vm.isLoading = true;
      var objsList = {
        RelatedInfoId: ths.RelatedInfoId,
        AssetAssignmentDetailId: ths.AssetAssignmentDetailId,
        AssetAssignmentId: ths.AssetAssignmentId,
        AcceptanceType: code == 'Accept' ? 1 : 2,
        EmployeeTransfer: ""
      };
      dataArray.push(objsList);
      DataService["a" /* default */].SaveIsAccept(dataArray).then(response => {
        if (response.data.status == 0) {
          vm.isLoading = false;
          vm.ShowAlert(response.data.msg, "success", true, vm.$t('Alert'));
          vm.FetchData();
        } else {
          vm.isLoading = false;
          vm.ShowAlert(response.data.msg, "failure", true, vm.$t('Alert'));
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/MyProduct/List.vue?vue&type=script&lang=js&
 /* harmony default export */ var MyProduct_Listvue_type_script_lang_js_ = (Listvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/MyProduct/List.vue?vue&type=style&index=0&id=0fa5ef41&prod&lang=css&
var Listvue_type_style_index_0_id_0fa5ef41_prod_lang_css_ = __webpack_require__("dd48");

// CONCATENATED MODULE: ./src/views/MyProduct/List.vue






/* normalize component */

var List_component = Object(componentNormalizer["a" /* default */])(
  MyProduct_Listvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var List = __webpack_exports__["default"] = (List_component.exports);

/***/ }),

/***/ "dd48":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_0fa5ef41_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5f18");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_0fa5ef41_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_0fa5ef41_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fc95":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "span#action-list{display:flex;align-items:center}.vue-treeselect__input{border:1px solid #abb5bf;padding:4px 12px}.vue-treeselect__single-value{padding-left:12px}", ""]);
// Exports
module.exports = exports;


/***/ })

}]);
//# sourceMappingURL=chunk-d843bb2c.js.map