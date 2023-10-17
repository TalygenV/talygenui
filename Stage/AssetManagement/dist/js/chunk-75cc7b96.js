(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-75cc7b96"],{

/***/ "4d5e":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vue-treeselect__control{border:none;height:24px;padding:0}.vue-treeselect--searchable .vue-treeselect__input-container{padding:0!important}.vue-treeselect__placeholder{color:#303030!important}.vue-treeselect__control-arrow{color:#000}.vue-treeselect__placeholder{line-height:24px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "55a7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/checkAvailablity.vue?vue&type=template&id=dad9def6&
var render = function render() {
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
    staticClass: "modal-header d-flex"
  }, [_c('h5', {
    staticClass: "modal-title"
  }, [_vm._v(" " + _vm._s(_vm.$t('ProductAvailability')) + " ")]), _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-original-title": "Close"
    },
    on: {
      "click": function ($event) {
        return _vm.ClosePOPuP(_vm.event);
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-times"
  })]), _c('span', {
    staticClass: "user-guide"
  }, [_vm._m(0), _c('div', {
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
      "innerHTML": _vm._s(_vm.$t('USERGUIDE_AC_CHECK_AVAILABILITY'))
    }
  })])])])]), _c('div', {
    staticClass: "modal-body"
  }, [_c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "rad_value",
    attrs: {
      "type": "radiobutton"
    }
  }, [_c('div', {
    staticClass: "custom-control custom-radio custom-control-inline"
  }, [_c('input', {
    staticClass: "custom-control-input dynamic IssuedByIds",
    attrs: {
      "type": "radio",
      "id": "SearchProductName",
      "name": "SearchProduct",
      "value": "CheckedCheckBox"
    },
    domProps: {
      "checked": _vm.SearchByBarcode
    },
    on: {
      "change": function ($event) {
        return _vm.searchByProduct('barcode');
      }
    }
  }), _c('label', {
    staticClass: "custom-control-label",
    attrs: {
      "for": "SearchProductName"
    }
  }, [_vm._v(_vm._s(_vm.$t('SearchbyBarcodeRFID')))])]), _c('div', {
    staticClass: "custom-control custom-radio custom-control-inline"
  }, [_c('input', {
    staticClass: "custom-control-input dynamic IssuedByIds",
    attrs: {
      "type": "radio",
      "id": "SearchProducts",
      "name": "SearchProduct",
      "value": "CheckedCheckBox"
    },
    domProps: {
      "checked": !_vm.SearchByBarcode
    },
    on: {
      "change": function ($event) {
        return _vm.searchByProduct('product');
      }
    }
  }), _c('label', {
    staticClass: "custom-control-label",
    attrs: {
      "for": "SearchProducts"
    }
  }, [_vm._v(_vm._s(_vm.$t('SearchbyProduct')))])])])]), _c('Form', {
    ref: "BarCodeForm",
    staticClass: "d-block w-100"
  }, [_c('div', {
    staticClass: "col-12 mt-3 p-0",
    attrs: {
      "id": "searchByBarcode"
    }
  }, [_vm.SearchByBarcode ? _c('div', {
    staticClass: "col-12 col-sm-9 col-md-9 col-lg-10 float-left"
  }, [_c('div', {
    staticClass: "form-group mb-2"
  }, [_c('label', [_c('span', {
    attrs: {
      "id": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('SearchbyBarcodeRFID')))])]), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")]), _c('Field', {
    attrs: {
      "name": "txtBarcode",
      "rules": {
        'required': true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        errors
      }) {
        return [_c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.txtBarcode,
            expression: "txtBarcode"
          }],
          class: {
            'form-control': true,
            'is-invalid': errors[0]
          },
          attrs: {
            "id": "txtBarcode",
            "name": "txtBarcode",
            "placeholder": "Enter Barcode",
            "type": "text"
          },
          domProps: {
            "value": _vm.txtBarcode
          },
          on: {
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.txtBarcode = $event.target.value;
            }
          }
        }), errors[0] ? _c('span', {
          staticClass: "invalid-feedback d-block",
          attrs: {
            "name": "txtBarcode"
          }
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
      }
    }], null, false, 3568353031)
  })], 1)]) : _vm._e(), _vm.SearchByBarcode ? _c('div', {
    staticClass: "col-12 col-sm-3 col-md-3 col-lg-2 float-left pl-md-0 mt-0 mt-md-4 mt-sm-4"
  }, [_c('div', {
    staticClass: "background-0 text-left w-100 form-check-inline"
  }, [_c('input', {
    attrs: {
      "type": "hidden",
      "id": "hdnSearch",
      "value": ""
    }
  }), _c('a', {
    staticClass: "btn btn-success w-50 mr-1 px-4 hlsearch",
    attrs: {
      "title": "",
      "id": "Searchassest_barcode",
      "href": "javascript:;",
      "data-toggle-tooltip": "tooltip",
      "data-original-title": "Search"
    },
    on: {
      "click": _vm.SearchassestBarcode
    }
  }, [_c('em', {
    staticClass: "fa fa-search"
  })]), _c('a', {
    staticClass: "btn btn-danger w-50 clearsearchtext px-4",
    attrs: {
      "id": "aClear",
      "href": "javascript:;",
      "title": "Clear all ",
      "data-toggle-tooltip": "tooltip",
      "data-original-title": "Clear"
    },
    on: {
      "click": _vm.CleareAssestBarcode
    }
  }, [_c('em', {
    staticClass: "fa fa-refresh"
  })])])]) : _vm._e()])]), !_vm.SearchByBarcode ? _c('div', {
    staticClass: "col-12 float-left searchByProduct"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "Subject"
    }
  }, [_vm._v(_vm._s(_vm.$t('Location')) + ":"), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _c('Field', {
    attrs: {
      "name": "Location",
      "rules": {
        'required': true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        errors
      }) {
        return [_c('tree-view', {
          class: {
            'form-control': true,
            'is-invalid': errors[0]
          },
          attrs: {
            "options": _vm.options,
            "placeholder": "Select Location",
            "show-count": true
          },
          on: {
            "input": function ($event) {
              return _vm.GetddlProduct(_vm.location_id);
            }
          },
          model: {
            value: _vm.location_id,
            callback: function ($$v) {
              _vm.location_id = $$v;
            },
            expression: "location_id"
          }
        }), errors[0] ? _c('span', {
          staticClass: "invalid-feedback d-block",
          attrs: {
            "name": "Location"
          }
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
      }
    }], null, false, 3091994094)
  })], 1)]) : _vm._e(), !_vm.SearchByBarcode ? _c('div', {
    staticClass: "col-12 float-left",
    attrs: {
      "id": "searchByProduct"
    }
  }, [_c('div', {
    staticClass: "col-12 float-left p-0"
  }, [_c('div', {
    staticClass: "rad_value",
    attrs: {
      "type": "radiobutton"
    }
  }, [_c('div', {
    staticClass: "custom-control custom-radio custom-control-inline"
  }, [_c('input', {
    staticClass: "custom-control-input dynamic",
    attrs: {
      "type": "radio",
      "id": "ProductNameItem",
      "value": "ProductName"
    },
    domProps: {
      "checked": _vm.IsProductName
    },
    on: {
      "change": function ($event) {
        return _vm.searchByItemName('ProductName');
      }
    }
  }), _c('label', {
    staticClass: "custom-control-label",
    attrs: {
      "for": "ProductNameItem"
    }
  }, [_vm._v(_vm._s(_vm.$t('AssetId')))])]), _c('div', {
    staticClass: "custom-control custom-radio custom-control-inline"
  }, [_c('input', {
    staticClass: "custom-control-input dynamic",
    attrs: {
      "type": "radio",
      "id": "ItemName",
      "value": "Product"
    },
    domProps: {
      "checked": !_vm.IsProductName
    },
    on: {
      "change": function ($event) {
        return _vm.searchByItemName('Product');
      }
    }
  }), _c('label', {
    staticClass: "custom-control-label",
    attrs: {
      "for": "ItemName"
    }
  }, [_vm._v(_vm._s(_vm.$t('ItemName')))])])])]), _vm.IsProductName ? _c('div', {
    staticClass: "col-12 float-left mt-3 p-0 productName"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "Subject"
    }
  }, [_vm._v(_vm._s(_vm.$t('AssetId')) + ":"), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _c('Field', {
    attrs: {
      "name": "productName",
      "rules": {
        'required': true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        errors
      }) {
        return [_c('select', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.Product_Id,
            expression: "Product_Id"
          }],
          class: {
            'form-control': true,
            'is-invalid': errors[0]
          },
          attrs: {
            "name": "productName"
          },
          on: {
            "change": function ($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.Product_Id = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
            }
          }
        }, [_c('option', {
          attrs: {
            "value": ""
          }
        }, [_vm._v("Select")]), _vm._l(_vm.productDDLData, function (item, iindex) {
          return _c('option', {
            key: iindex,
            domProps: {
              "value": item.value
            }
          }, [_vm._v(_vm._s(item.name))]);
        })], 2), errors[0] ? _c('span', {
          staticClass: "invalid-feedback d-block",
          attrs: {
            "name": "productName"
          }
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
      }
    }], null, false, 2255477632)
  })], 1)]) : _vm._e(), !_vm.IsProductName ? _c('div', {
    staticClass: "col-12 float-left mt-3 p-0 product"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('ItemName')) + ":"), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _c('div', {
    staticClass: "input-group mb-3",
    staticStyle: {
      "position": "relative"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.assetUniqueItem,
      expression: "assetUniqueItem"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "txtAssetItems",
      "name": "txtAssetItems",
      "value": "iselectVal",
      "placeholder": "Enter Product Name",
      "type": "text",
      "autocomplete": "off"
    },
    domProps: {
      "value": _vm.assetUniqueItem
    },
    on: {
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.assetUniqueItem = $event.target.value;
      }, _vm.GetAssetUniqueData]
    }
  }), _c('div', {
    staticClass: "unique_dynamicdatalist"
  }, [_vm.IsDDLShowHide ? _c('ul', {
    staticClass: "listOfProduct"
  }, _vm._l(_vm.assetUniqueData, function (item, index) {
    return _c('li', {
      key: index,
      staticClass: "listitem all-items",
      on: {
        "click": function ($event) {
          return _vm.uniqueItemChange(item);
        }
      }
    }, [_vm._v(_vm._s(item.name) + " ")]);
  }), 0) : _vm._e()]), _c('a', {
    staticClass: "btn float-left",
    staticStyle: {
      "background-color": "#fff",
      "color": "#303030",
      "border-color": "#abb5bf",
      "border-left": "none"
    },
    attrs: {
      "href": "javascript:;",
      "id": "customddlinput"
    },
    on: {
      "click": _vm.itemDDLShowHide
    }
  }, [_c('em', {
    staticClass: "dropdown-toggle float-right"
  })])])])]) : _vm._e()]) : _vm._e(), _c('div', {
    staticClass: "col-12 mb-3 mt-3"
  }, [_c('div', {
    staticClass: "heading-border"
  }, [_c('h5', {
    staticClass: "h5"
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('AvailableBetween')) + " ")])])])]), _c('div', {
    staticClass: "col-sm-12 col-md-6 col-xl-6"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('From')) + ":")]), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")]), _c('v-date-picker', {
    staticClass: "timedate input-group",
    attrs: {
      "popover": _vm.popover,
      "min-date": _vm.getMinDate(new Date()),
      "name": _vm.fromDate,
      "dateformat": _vm.dateformat,
      "minute-increment": 5
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        inputValue,
        inputEvents,
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
          }
        }, inputEvents)), _c('div', {
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
    }]),
    model: {
      value: _vm.fromDate,
      callback: function ($$v) {
        _vm.fromDate = $$v;
      },
      expression: "fromDate"
    }
  })], 1)]), _c('div', {
    staticClass: "col-sm-12 col-md-6 col-xl-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('EventStartTime')))]), _c('div', {
    staticClass: "input-group"
  }, [_c('v-date-picker', {
    staticClass: "input-group",
    attrs: {
      "mode": "Time",
      "dateformat": _vm.dateformat
    },
    on: {
      "input": _vm.resetAvailabilityStatus
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        inputValue,
        inputEvents,
        togglePopover
      }) {
        return [_c('input', _vm._g({
          staticClass: "form-control",
          domProps: {
            "value": inputValue
          }
        }, inputEvents)), _c('div', {
          staticClass: "input-group-append",
          on: {
            "click": function ($event) {
              return togglePopover();
            }
          }
        }, [_c('span', {
          staticClass: "input-group-text"
        }, [_c('em', {
          staticClass: "fa fa-clock-o"
        })])])];
      }
    }]),
    model: {
      value: _vm.StartTime,
      callback: function ($$v) {
        _vm.StartTime = $$v;
      },
      expression: "StartTime"
    }
  })], 1)])]), _c('div', {
    staticClass: "col-sm-12 col-md-6 col-xl-6"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Till')) + " ")]), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")]), _c('v-date-picker', {
    staticClass: "timedate input-group",
    attrs: {
      "popover": _vm.popover,
      "min-date": _vm.getMinDate(),
      "name": _vm.toDate,
      "minute-increment": 5
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        inputValue,
        inputEvents,
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
          }
        }, inputEvents)), _c('div', {
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
    }]),
    model: {
      value: _vm.toDate,
      callback: function ($$v) {
        _vm.toDate = $$v;
      },
      expression: "toDate"
    }
  })], 1)]), _c('div', {
    staticClass: "col-sm-12 col-md-6 col-xl-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('CAEndTime')))]), _c('div', {
    staticClass: "input-group"
  }, [_c('v-date-picker', {
    staticClass: "input-group",
    attrs: {
      "mode": "Time"
    },
    on: {
      "input": _vm.resetAvailabilityStatus
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        inputValue,
        inputEvents,
        togglePopover
      }) {
        return [_c('input', _vm._g({
          staticClass: "form-control",
          domProps: {
            "value": inputValue
          }
        }, inputEvents)), _c('div', {
          staticClass: "input-group-append",
          on: {
            "click": function ($event) {
              return togglePopover();
            }
          }
        }, [_c('span', {
          staticClass: "input-group-text"
        }, [_c('em', {
          staticClass: "fa fa-clock-o"
        })])])];
      }
    }]),
    model: {
      value: _vm.EndTime,
      callback: function ($$v) {
        _vm.EndTime = $$v;
      },
      expression: "EndTime"
    }
  })], 1)])]), _vm.tblassestgroupinfoIsShow ? _c('CheckBarCodeAvalibility', {
    attrs: {
      "BarCodeData": _vm.BarCodeData,
      "RequestFrom": _vm.RequestFrom
    }
  }) : _vm._e(), _vm.divAvailabilityStatusIsShow ? _c('AvailabilityStatus', {
    attrs: {
      "GetUniqueProductIdData": _vm.GetUniqueProductIdData,
      "noOfAvailableItems": _vm.noOfAvailableItems,
      "statusAvailable": _vm.statusAvailable,
      "uniqueItems": _vm.uniqueItems,
      "statusReserved": _vm.statusReserved,
      "statusUnAvailable": _vm.statusUnAvailable,
      "divAvailabilityStatus": _vm.divAvailabilityStatusIsShow
    },
    on: {
      "onUniqueItemClick": function ($event) {
        return _vm.onUniqueItemClick($event);
      }
    }
  }) : _vm._e(), _vm._m(1), _c('div', {
    staticClass: "col-12 text-right mt-3"
  }, [_vm.btnReserve ? _c('a', {
    staticClass: "btn btn-warning mr-2",
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": function ($event) {
        return _vm.ProceedToAction('reserve');
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('ProceedtoReserve')))]) : _vm._e(), _vm.btnCheckAvailability ? _c('a', {
    staticClass: "btn btn-success mr-2",
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": _vm.checkAssetAvailability
    }
  }, [_vm._v(_vm._s(_vm.$t('Check_Availability')))]) : _vm._e(), _vm.btnCheckout ? _c('a', {
    staticClass: "btn btn-success mr-2",
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": function ($event) {
        return _vm.ProceedToAction('checkout');
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('ProceedtoCheckout')))]) : _vm._e(), _vm.btnAssign ? _c('a', {
    staticClass: "btn btn-primary mr-2",
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": function ($event) {
        return _vm.ProceedToAction('assign');
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('ProceedtoAssign')))]) : _vm._e()]), _c('div', {
    staticClass: "col-12 mt-3 flex-row-reverse mt-3"
  }, [_c('div', {
    staticClass: "col-lg-12 text-left"
  }, [_c('div', {
    staticClass: "py-2"
  }, [_c('span', {
    staticClass: "text-danger",
    attrs: {
      "id": "spnSelfCheckOutError"
    }
  }, [_vm._v(_vm._s(_vm.ErrorText))])])])])], 1)])])])])])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('a', {
    staticClass: "ancuserguide text-white",
    attrs: {
      "data-toggle": "collapse",
      "href": "#collapseReplyUG",
      "role": "button",
      "aria-expanded": "false",
      "aria-controls": "collapseExample"
    }
  }, [_c('em', {
    staticClass: "fa fa-files-o pr-2"
  }), _vm._v("User Guide")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-12 mt-3 flex-row-reverse mt-3"
  }, [_c('div', {
    staticClass: "col-lg-12 text-left"
  }, [_c('div', {
    staticClass: "py-2"
  }, [_c('span', {
    staticClass: "text-danger",
    attrs: {
      "id": "spnSelfCheckOutError"
    }
  })])])]);
}];

// CONCATENATED MODULE: ./src/components/Modal/checkAvailablity.vue?vue&type=template&id=dad9def6&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/CheckBarCodeAvalibility.vue?vue&type=template&id=307e097c&
var CheckBarCodeAvalibilityvue_type_template_id_307e097c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-12 mt-3 listing tblassestgroupinfo"
  }, [_c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-bordered dt-responsive nowrap mt-0",
    attrs: {
      "id": "tblassestgroupinfo"
    }
  }, [_c('thead', {
    staticClass: "thead-bg"
  }, [_c('tr', [_c('th', {
    staticClass: "text-center",
    staticStyle: {
      "max-width": "120px"
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('SerialNumber')))])]), _c('th', [_c('span', [_vm._v(_vm._s(_vm.$t('PRODUCT_NAME')))])]), _c('th', [_c('span', [_vm._v(_vm._s(_vm.$t('Location')))])])])]), _vm.NoRecordLength != 0 ? _vm._l(_vm.BarCodeData, function (item, index) {
    return _c('tbody', {
      key: index
    }, [item.CreateUniqueNameListing ? [_c('tr', {
      staticClass: "showassetcataloguegroup",
      class: {
        'insertedrow bg-gold': item.AssetCatalogueGroup.length > 0
      }
    }, [_c('td', {
      staticClass: "textaligncenter align-middle text-center",
      style: _vm.containercolor
    }, [_vm._v(" " + _vm._s(index + 1) + " ")]), _c('td', {
      staticClass: "align-middle ad"
    }, [_vm._v(_vm._s(item.AssetCatalogName))]), _c('td', {
      staticClass: "align-middle ad"
    }, [_vm.BarCodeData.length == 1 ? [_c('select', {
      class: {
        'form-control disabled': true
      },
      attrs: {
        "name": "location"
      }
    }, [_c('option', {
      domProps: {
        "value": item.LocationId
      }
    }, [_vm._v(_vm._s(item.LocationName))])])] : [_c('select', {
      class: {
        'form-control': true
      },
      attrs: {
        "name": "location"
      }
    }, [_c('option', {
      domProps: {
        "value": item.LocationId
      }
    }, [_vm._v(_vm._s(item.LocationName))])])]], 2)])] : [_c('tr', {
      staticClass: "showassetcataloguegroup",
      class: {
        'insertedrow bg-gold': item.AssetCatalogueGroup.length > 0
      }
    }, [_c('td', {
      staticClass: "textaligncenter align-middle text-center",
      style: _vm.containercolor
    }, [item.AssetCatalogueGroup.length > 0 ? _c('span', {
      staticClass: "togglearrow arrowwhitecollapse_roles fa fa-caret-right fa-2x showcatalog showassetcatalog"
    }) : _c('span', {
      staticClass: "showcatalog hidden showassetcatalog"
    })]), _c('td', {
      staticClass: "align-middle ad"
    }, [_vm._v(_vm._s(item.AssetCatalogName))]), _c('td', {
      staticClass: "align-middle ad"
    }, [_vm.BarCodeData.length == 1 ? [_c('select', {
      class: {
        'form-control disabled': true
      },
      attrs: {
        "name": "location"
      }
    }, [_c('option', {
      domProps: {
        "value": item.LocationId
      }
    }, [_vm._v(_vm._s(item.LocationName))])])] : [_c('select', {
      class: {
        'form-control': true
      },
      attrs: {
        "name": "location"
      }
    }, [_c('option', {
      domProps: {
        "value": item.LocationId
      }
    }, [_vm._v(_vm._s(item.LocationName))])])]], 2)]), _vm.RequestFrom == 'assetassignment' ? _c('tr', [_c('td', {
      staticClass: "textaligncenter align-middle no_records",
      attrs: {
        "colspan": "8"
      }
    }, [_vm._v(_vm._s('NoItemAvailable') + " ")])]) : _vm._e()]], 2);
  }) : [_c('td', {
    staticClass: "text-danger text-center no-record",
    attrs: {
      "colspan": "7"
    }
  }, [_vm._v(_vm._s(_vm.NoProductAvailable))])]], 2)])]);
};
var CheckBarCodeAvalibilityvue_type_template_id_307e097c_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Modal/CheckBarCodeAvalibility.vue?vue&type=template&id=307e097c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/CheckBarCodeAvalibility.vue?vue&type=script&lang=js&
/* harmony default export */ var CheckBarCodeAvalibilityvue_type_script_lang_js_ = ({
  props: {
    BarCodeData: {
      type: Array,
      required: true
    },
    RequestFrom: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      containercolor: '',
      NoProductAvailable: 'No Product Available',
      NoRecordLength: null
    };
  },
  created: function () {
    debugger;
    this.NoRecordLength = this.BarCodeData.length;
    this.BarCodeData.forEach(item => {
      if (item.IsContainer == 1) {
        this.containercolor = "border-left: 6px solid #227003 !important;";
      }
    });
  }
});
// CONCATENATED MODULE: ./src/components/Modal/CheckBarCodeAvalibility.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_CheckBarCodeAvalibilityvue_type_script_lang_js_ = (CheckBarCodeAvalibilityvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Modal/CheckBarCodeAvalibility.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Modal_CheckBarCodeAvalibilityvue_type_script_lang_js_,
  CheckBarCodeAvalibilityvue_type_template_id_307e097c_render,
  CheckBarCodeAvalibilityvue_type_template_id_307e097c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CheckBarCodeAvalibility = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/AvailabilityStatus.vue?vue&type=template&id=4102473e&
var AvailabilityStatusvue_type_template_id_4102473e_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.divAvailabilityStatus ? _c('div', {
    staticClass: "col-12 mt-3"
  }, [_c('div', {
    staticClass: "col-12 border p-2 float-left"
  }, [_c('label', {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.$t('Availability')))]), _vm.statusAvailable ? _c('div', {
    staticClass: "col-12 p-0"
  }, [_c('small', [_c('i', {
    staticClass: "text-success fa fa-circle"
  }), _vm._v(" " + _vm._s(_vm.$t('Available'))), _c('span', {
    attrs: {
      "id": "noOfAvailableItems"
    }
  }), _vm._v("-(" + _vm._s(_vm.noOfAvailableItems) + ")")]), _vm.uniqueItems ? _c('div', {
    staticClass: "col-12 px-0 mt-2"
  }, [_c('div', {
    staticClass: "listing"
  }, [_c('div', {
    staticClass: "table-responsive table-fix-header"
  }, [_c('table', {
    staticClass: "table table-bordered dt-responsive nowrap mt-0",
    attrs: {
      "id": "tblUniqueItems"
    }
  }, [_c('thead', {
    staticClass: "thead-bg"
  }, [_c('tr', [_c('th', {
    staticClass: "text-center"
  }, [_c('div', {
    staticClass: "custom-control custom-checkbox"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.allSelected,
      expression: "allSelected"
    }],
    staticClass: "custom-control-input",
    attrs: {
      "id": "chkAllUniqueItems",
      "type": "checkbox",
      "name": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.allSelected) ? _vm._i(_vm.allSelected, null) > -1 : _vm.allSelected
    },
    on: {
      "click": function ($event) {
        return _vm.selectAll($event);
      },
      "change": function ($event) {
        var $$a = _vm.allSelected,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.allSelected = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.allSelected = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.allSelected = $$c;
        }
      }
    }
  }), _c('label', {
    staticClass: "custom-control-label universal-custom-control-label pt-1",
    attrs: {
      "for": "chkAllUniqueItems"
    }
  })])]), _c('th', {
    staticClass: "text-center"
  }, [_vm._v(_vm._s(_vm.$t('AssetId')))]), _c('th', {
    staticClass: "text-center"
  }, [_vm._v(_vm._s(_vm.$t('AvailableItems')))])])]), _c('tbody', _vm._l(_vm.GetUniqueProductIdData, function (item, index) {
    return _c('tr', {
      key: index
    }, [_c('td', {
      staticClass: "text-center"
    }, [_c('div', {
      staticClass: "custom-control custom-checkbox"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.userIds,
        expression: "userIds"
      }],
      staticClass: "custom-control-input",
      attrs: {
        "id": item.UNIQUE_ID,
        "type": "checkbox",
        "name": "checkbox"
      },
      domProps: {
        "value": item.UNIQUE_ID,
        "checked": Array.isArray(_vm.userIds) ? _vm._i(_vm.userIds, item.UNIQUE_ID) > -1 : _vm.userIds
      },
      on: {
        "change": [function ($event) {
          var $$a = _vm.userIds,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = item.UNIQUE_ID,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && (_vm.userIds = $$a.concat([$$v]));
            } else {
              $$i > -1 && (_vm.userIds = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.userIds = $$c;
          }
        }, function ($event) {
          return _vm.select(item);
        }]
      }
    }), _c('label', {
      staticClass: "custom-control-label universal-custom-control-label pt-1",
      attrs: {
        "for": item.UNIQUE_ID
      }
    })])]), _c('td', {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(item.NAME))]), _c('td', {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(item.AVAILABLE_QUANTIY))])]);
  }), 0)])])])]) : _vm._e()]) : _vm._e(), _vm.statusReserved ? _c('div', [_c('small', [_c('i', {
    staticClass: "text-warning fa fa-circle"
  }), _vm._v(" " + _vm._s(_vm.$t('Reserved')) + " - "), _c('span', {
    staticClass: "text-primary cursor-pointer",
    attrs: {
      "id": "resvation"
    },
    on: {
      "click": function ($event) {
        return _vm.select();
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('ViewReservations')))])]), _c('div', {
    staticClass: "col-12 px-0",
    attrs: {
      "id": "divCalendar"
    }
  })]) : _vm._e(), _vm.statusUnAvailable ? _c('div', [_c('small', [_c('i', {
    staticClass: "text-danger fa fa-circle"
  }), _vm._v(" " + _vm._s(_vm.$t('Not_Available')))])]) : _vm._e()])]) : _vm._e();
};
var AvailabilityStatusvue_type_template_id_4102473e_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Modal/AvailabilityStatus.vue?vue&type=template&id=4102473e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/AvailabilityStatus.vue?vue&type=script&lang=js&

/* harmony default export */ var AvailabilityStatusvue_type_script_lang_js_ = ({
  props: {
    GetUniqueProductIdData: {
      type: Array,
      required: true
    },
    noOfAvailableItems: {
      type: Number,
      required: true
    },
    statusAvailable: {
      type: Boolean,
      required: true
    },
    uniqueItems: {
      type: Boolean,
      required: true
    },
    statusReserved: {
      type: Boolean,
      required: true
    },
    statusUnAvailable: {
      type: Boolean,
      required: true
    },
    divAvailabilityStatus: {
      type: Boolean,
      required: true
    }
  },
  created: function () {
    // console.log(this.GetUniqueProductIdData);
  },
  data() {
    return {
      CheckCatlougeValue: null,
      CheckeduniqueId: '',
      selected: [],
      allSelected: false,
      userIds: []
    };
  },
  methods: {
    selectAll: function (e) {
      this.userIds = [];
      this.checkedName = [];
      var DataArray = [];
      if (e.target.checked) {
        this.allSelected = true;
      } else {
        this.allSelected = false;
      }
      if (this.allSelected) {
        for (let user in this.GetUniqueProductIdData) {
          this.userIds.push(this.GetUniqueProductIdData[user].UNIQUE_ID);
          this.checkedName.push(this.GetUniqueProductIdData[user].NAME);
        }
      }
      DataArray.push(this.userIds.toString());
      DataArray.push(this.checkedName.toString());
      this.$emit('onUniqueItemClick', DataArray);
    },
    select: function (ths) {
      this.userIdss = [];
      this.checkedNames = [];
      var DataArray = [];
      if (this.GetUniqueProductIdData.length == this.userIdss.length && this.GetUniqueProductIdData.length == this.checkedNames.length) {
        this.allSelected = true;
      } else {
        this.allSelected = false;
      }
      for (let user in this.GetUniqueProductIdData) {
        if (ths.UNIQUE_ID == this.GetUniqueProductIdData[user].UNIQUE_ID) {
          this.userIdss.push(this.GetUniqueProductIdData[user].UNIQUE_ID);
          this.checkedNames.push(this.GetUniqueProductIdData[user].NAME);
        }
      }
      DataArray.push(this.userIdss.toString());
      DataArray.push(this.checkedNames.toString());
      this.$emit('onUniqueItemClick', DataArray);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/AvailabilityStatus.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_AvailabilityStatusvue_type_script_lang_js_ = (AvailabilityStatusvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Modal/AvailabilityStatus.vue





/* normalize component */

var AvailabilityStatus_component = Object(componentNormalizer["a" /* default */])(
  Modal_AvailabilityStatusvue_type_script_lang_js_,
  AvailabilityStatusvue_type_template_id_4102473e_render,
  AvailabilityStatusvue_type_template_id_4102473e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AvailabilityStatus = (AvailabilityStatus_component.exports);
// EXTERNAL MODULE: ./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.cjs.js
var vue_treeselect_cjs = __webpack_require__("ca17");
var vue_treeselect_cjs_default = /*#__PURE__*/__webpack_require__.n(vue_treeselect_cjs);

// EXTERNAL MODULE: ./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.css
var vue_treeselect = __webpack_require__("542c");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/checkAvailablity.vue?vue&type=script&lang=js&






/* harmony default export */ var checkAvailablityvue_type_script_lang_js_ = ({
  components: {
    CheckBarCodeAvalibility: CheckBarCodeAvalibility,
    AvailabilityStatus: AvailabilityStatus,
    'tree-view': vue_treeselect_cjs_default.a
  },
  data() {
    return {
      productDDLData: [],
      locationDDLData: [],
      assetUniqueData: [],
      checkAvailabilityList: [],
      location_id: null,
      SearchByBarcode: true,
      IsProductName: true,
      IsDDLShowHide: false,
      assetUniqueItem: '',
      txtBarcode: '',
      tblassestgroupinfoIsShow: false,
      divAvailabilityStatusIsShow: false,
      popover: {
        visibility: 'click'
      },
      isLoading: false,
      BarCodeData: [],
      RequestFrom: '',
      IsShowButton: true,
      CheckedCheckBox: 'SearchProductName',
      BarcodeSelected: 'BarCodeSearch',
      StartTime: new Date(),
      EndTime: new Date(),
      UniqueNameListing: 1,
      IsProduct: 'ProductName',
      Product_Id: null,
      fromDate: new Date(),
      toDate: new Date(),
      GetUniqueProductIdData: [],
      SpnSelfCheckOutError: '',
      ErrorText: '',
      ASSETUniqueId: null,
      noOfAvailableItems: null,
      statusAvailable: false,
      uniqueItems: true,
      statusReserved: false,
      statusUnAvailable: false,
      btnCheckAvailability: true,
      btnCheckout: false,
      btnAssign: false,
      btnReserve: false,
      IsDefault: null,
      UserType: null,
      module_id: null,
      GetKeyData: [],
      isUserSelfCheckoutEnabled: false,
      iselectVal: null,
      CheckeduniqueIds: null,
      LocationName: '',
      uniqueProductName: '',
      hdnQuantity: null,
      LocationDataTree: [],
      dateformat: null
    };
  },
  created: async function () {
    var vm = this;
    await vm.GetddlLocation();
    vm.searchByProduct('barcode');
    vm.fromDate = vm.$options.filters.formatDate(vm.fromDate);
    vm.toDate = vm.$options.filters.formatDate(vm.toDate);
    vm.EndTime = vm.addHoursToDate(vm.EndTime, 1);
    vm.UniqueNameListing = vm.BarcodeSelected != 'BarCodeSearch' ? vm.UniqueNameListing = 1 : vm.UniqueNameListing = 0;
    vm.IsDefault = vm.GetUserInfo.IsDefault;
    vm.UserType = vm.GetUserInfo.UserType;
    vm.dateformat = vm.GetUserInfo.DateFormat;
    await vm.GetKey();
  },
  methods: {
    addHoursToDate(date, hours) {
      return new Date(new Date(date).setHours(date.getHours() + hours));
    },
    GetKey: async function () {
      var vm = this;
      await vm.GetModuleByName();
      var url = `moduleId=${vm.module_id}&code=USR`;
      await DataService["a" /* default */].GetKeys(url).then(response => {
        if (response.data.length > 0) {
          vm.GetKeyData = response.data;
          vm.GetKeyData.filter(item => {
            if (item.coreConfigKey == 'SelfCheckout' || item.coreConfigKey == 'SelfTransfer') {
              return vm.isUserSelfCheckoutEnabled = true;
            }
          });
        } else {
          vm.isUserSelfCheckoutEnabled = false;
        }
      });
    },
    GetModuleByName: async function (ths) {
      var url = `moduleName=Asset`;
      await DataService["a" /* default */].GetModuleByName(url).then(response => {
        this.module_id = response.data;
      });
    },
    GetAssetAvailability: async function () {
      var vm = this;
      var assetCatalog = '';
      var assestUniqueId = '';
      if (vm.BarcodeSelected == 'BarCodeSearch') {
        assetCatalog = vm.BarCodeData == '' ? null : vm.BarCodeData[0].AssetCatalogueId;
        assestUniqueId = vm.BarCodeData == '' ? null : vm.BarCodeData[0].ParentUniqueId;
      } else {
        assetCatalog = vm.Product_Id;
        assestUniqueId = vm.iselectVal;
      }
      if (vm.fromDate == null || vm.fromDate == '') {
        vm.fromDate = new Date();
      }
      if (vm.toDate == null || vm.toDate == '') {
        vm.toDate = new Date();
      }
      var assignedFrom = vm.$options.filters.formatDateYear(vm.fromDate);
      var assignedTill = vm.$options.filters.formatDateYear(vm.toDate);
      var startTime = vm.$options.filters.formatTime(vm.StartTime);
      var endTime = vm.$options.filters.formatTime(vm.EndTime);
      var startTime1 = vm.StartTime.getHours();
      var endTime1 = vm.EndTime.getHours();
      var startDate = new Date(Date.parse(assignedFrom));
      var endDate = new Date(Date.parse(assignedTill));
      if (startDate >= endDate && startTime1 >= endTime1) {
        vm.ShowAlert(vm.$t("TimeRangeValidation"), "failure", vm.$t('Alert'));
        return false;
      }
      if ((assestUniqueId == null || assestUniqueId == '' || assestUniqueId == 0) && (assetCatalog == null || assetCatalog == '' || assetCatalog == 0)) {
        if (assestUniqueId == null || assestUniqueId == '' || assestUniqueId == 0) {
          vm.ShowAlert(vm.$t("ProductRequired"), "failure", vm.$t('Alert'));
        } else {
          vm.ShowAlert(vm.$t("InvalidProduct"), "failure", vm.$t('Alert'));
        }
      } else {
        vm.isLoading = true;
        if (vm.BarcodeSelected == 'BarCodeSearch' && vm.UniqueNameListing == 0) {
          var url = `assetUniqueId=${assestUniqueId}&assignedFrom=${assignedFrom}&assignedTill=${assignedTill}&startTime=${startTime}&endTime=${endTime}&locationId=&type=Product`;
          await DataService["a" /* default */].GetAssetAvailability(url).then(response => {
            if (response.data.availability != 'ERROR') {
              if (response.data.availability.length > 0) {
                if (response.data.availability[0].availabilty == 'AVAILABLE') {
                  var obj = {
                    status: 'available',
                    AvailableItems: response.data.availabilty[0].availablE_QUANTITY,
                    IS_SELF_CHECKOUT: response.data.availabilty[0].iS_SELF_CHECKOUT
                  };
                  vm.DisplayAvailability(obj);
                } else if (response.data.availabilty[0].availabilty == 'RESERVED') {
                  var obj = {
                    status: 'reserved'
                  };
                  vm.DisplayAvailability(obj);
                } else {
                  vm.DisplayAvailability('unAvailable');
                }
                // $('#divCalendar').data({ 'assetUniqueId': assestUniqueId, 'assignedFrom': assignedFrom, 'assignedTill': assignedTill, 'startTime': startTime, 'endTime': endTime, 'locationId': $("#hdnAssetLocationId").val(), type: 'Product' });
              } else {
                vm.DisplayAvailability('unAvailable');
              }
            } else {
              vm.DisplayAvailability('unAvailable');
            }
            vm.isLoading = false;
          });
        } else {
          if (vm.IsProduct == 'ProductName') {
            if (vm.BarcodeSelected == 'BarCodeSearch') {
              if (vm.location_id == null && vm.location_id == 0) {
                vm.ShowAlert(vm.$t("CostCentreReq"), "failure", vm.$t('Alert'));
                vm.isLoading = false;
                return false;
              }
            } else {
              await vm.GetUniqueProductId();
              assestUniqueId = vm.ASSETUniqueId;
            }
          }
          if (!(assestUniqueId == null || assestUniqueId == '' || assestUniqueId == 0 || vm.IsProduct == 'Product')) {
            var url = `assetUniqueId=${assetCatalog}&assignedFrom=${assignedFrom}&assignedTill=${assignedTill}&startTime=${startTime}&endTime=${endTime}&locationId=${vm.location_id}&type=ProductName`;
            await DataService["a" /* default */].GetAssetAvailability(url).then(response => {
              if (response.data.availabilty != 'ERROR') {
                if (response.data.availability.length > 0) {
                  if (response.data.availability[0].availabilty == 'AVAILABLE') {
                    var obj = {
                      status: 'available',
                      AvailableItems: response.data.availability[0].availablE_QUANTITY,
                      UNIQUE_ITEMS: response.data.availability[0].uniquE_ITEMS,
                      IS_SELF_CHECKOUT: response.data.availability[0].iS_SELF_CHECKOUT
                    };
                    vm.DisplayAvailability(obj);
                  } else if (response.data.availabilty[0].availabilty == 'RESERVED') {
                    var obj = {
                      status: 'reserved'
                    };
                    vm.DisplayAvailability(obj);
                  } else {
                    vm.DisplayAvailability('unAvailable');
                  }
                  // $('#divCalendar').data({ 'assetUniqueId': assestUniqueId, 'assignedFrom': assignedFrom, 'assignedTill': assignedTill, 'startTime': startTime, 'endTime': endTime, 'locationId': $("#hdnAssetLocationId").val(), type: 'Product' });
                } else {
                  vm.DisplayAvailability('unAvailable');
                }
              } else {
                vm.DisplayAvailability('unAvailable');
              }
              vm.isLoading = false;
            });
          } else {
            var url = `assetUniqueId=${assestUniqueId}&assignedFrom=${assignedFrom}&assignedTill=${assignedTill}&startTime=${startTime}&endTime=${endTime}&locationId=${vm.location_id}&type=Product`;
            await DataService["a" /* default */].GetAssetAvailability(url).then(response => {
              if (response.data.availability != 'ERROR') {
                if (response.data.availability.length > 0) {
                  if (response.data.availability[0].availability == 'AVAILABLE') {
                    var obj = {
                      status: 'available',
                      AvailableItems: response.data.availability[0].availablE_QUANTITY,
                      IS_SELF_CHECKOUT: response.data.availability[0].iS_SELF_CHECKOUT
                    };
                    vm.DisplayAvailability(obj);
                  } else if (response.data.availability[0].AVAILABILTY == 'RESERVED') {
                    var obj = {
                      status: 'reserved'
                    };
                    vm.DisplayAvailability(obj);
                  } else {
                    vm.DisplayAvailability('unAvailable');
                  }
                  // $('#divCalendar').data({ 'assetUniqueId': assestUniqueId, 'assignedFrom': assignedFrom, 'assignedTill': assignedTill, 'startTime': startTime, 'endTime': endTime, 'locationId': $("#hdnCompanyLocationSelect").val(), type:'Product' });
                } else {
                  vm.DisplayAvailability('unAvailable');
                }
              } else {
                vm.DisplayAvailability('unAvailable');
              }
              vm.isLoading = false;
            });
          }
        }
      }
    },
    DisplayAvailability: function (availabilty) {
      var vm = this;
      vm.divAvailabilityStatusIsShow = true;
      if (availabilty.status) {
        vm.statusAvailable = true;
        if (availabilty.status == 'available') {
          if (vm.IsProduct == "ProductName" && vm.BarcodeSelected != 'BarCodeSearch' && vm.UniqueNameListing != 1) {
            vm.noOfAvailableItems = availabilty.AvailableItems;
          }
          if (availabilty.UNIQUE_ITEMS) {
            vm.GetUniqueProductIdData = JSON.parse(availabilty.UNIQUE_ITEMS);
          } else {
            vm.uniqueItems = true;
          }
          var assignedFrom = vm.fromDate;
          var startTime = vm.StartTime;
          var startDate = new Date(new Date(Date.parse(assignedFrom)).setHours(0, 0, 0, 0));
          var startDateTime = assignedFrom + ' ' + startTime.getTime() / 60000;
          startDateTime = startDateTime.split(' ');
          startDateTime = startDateTime[1];
          var date = new Date(new Date().setHours(0, 0, 0, 0));
          vm.hdnQuantity = availabilty.AvailableItems;
          vm.statusReserved = false;
          vm.statusUnAvailable = false;
          vm.btnCheckAvailability = false;
          vm.btnCheckout = false;
          vm.btnAssign = false;
          if (+startDate === +date) {
            if (vm.UserType == 'CA' && `${vm.IsDefault}` == 1) {
              vm.btnCheckout = true;
              vm.btnAssign = true;
            } else {
              if (vm.isUserSelfCheckoutEnabled == 'True') {
                vm.btnAssign = true;
              }
              if (vm.isUserSelfCheckoutEnabled == true && availabilty.IS_SELF_CHECKOUT == true) {
                vm.btnCheckout = true;
              } else if (availabilty.IS_SELF_CHECKOUT == false) {
                vm.ErrorText = 'Self checkout is not enabled for this product.';
              } else {
                if (vm.UserType == 'CA') {
                  vm.ErrorText = 'Please enable your self checkout option under user configuration.';
                } else {
                  vm.ErrorText = 'Please ask the company admin to enable your self checkout option under user configuration.';
                }
              }
            }
            if (startDateTime - new Date().getTime() / 60000 >= 5) {
              vm.btnReserve = true;
            }
          }
          if (startDate > date) {
            vm.btnReserve = true;
            if (vm.UserType == 'CA' && vm.IsDefault == true) {
              vm.btnAssign = true;
            }
          }
        } else if (availabilty.status == 'reserved') {
          vm.noOfAvailableItems = null;
          vm.statusReserved = true;
          vm.statusUnAvailable = false;
          vm.btnCheckAvailability = false;
          vm.btnReserve = false;
          vm.btnCheckout = false;
          vm.btnAssign = false;
        }
      } else {
        vm.noOfAvailableItems = null;
        vm.statusReserved = false;
        vm.statusUnAvailable = true;
        vm.btnCheckAvailability = false;
        vm.btnReserve = false;
        vm.btnCheckout = false;
        vm.btnAssign = false;
      }
    },
    GetUniqueProductId: async function () {
      var vm = this;
      var JsonObj = `name=&assetCatalogId=${vm.Product_Id}&issueTo=0&locationId=${vm.location_id}&requestFrom=CHECKASSETAVAILABILITY&assetType=`;
      await DataService["a" /* default */].GetUniqueAssetItems(JsonObj).then(function (response) {
        vm.ASSETUniqueId = response.data[0].Value;
      });
    },
    onUniqueItemClick: function (ths) {
      this.CheckeduniqueIds = ths[0];
      this.uniqueProductName = ths[1];
    },
    ProceedToAction: function (type) {
      var vm = this;
      var uniqueIds = '';
      if (vm.BarcodeSelected == 'BarCodeSearch' && vm.UniqueNameListing == 1) {
        uniqueIds = vm.BarCodeData[0].ParentUniqueId;
      } else {
        if (vm.IsProduct == "ProductName") {
          uniqueIds = vm.CheckeduniqueIds;
        } else {
          uniqueIds = vm.iselectVal;
        }
      }
      var locId = null;
      if (vm.IsProduct == "ProductName" && vm.BarcodeSelected != 'BarCodeSearch') {
        var assestUniqueId = vm.ASSETUniqueId;
        var loc = vm.LocationName;
        locId = vm.location_id;
        var ProductName = vm.Product_Id;
        var AvailableQty = vm.noOfAvailableItems;
      } else if (vm.BarcodeSelected == 'BarCodeSearch' && vm.UniqueNameListing == 0) {
        var assestUniqueId = vm.BarCodeData[0].ParentUniqueId;
        var loc = vm.BarCodeData[0].LocationName;
        locId = vm.BarCodeData[0].LocationId;
        var uniqueName = vm.BarCodeData[0].AssetUniqueName;
        var AvailableQty = vm.BarCodeData[0].AvailableItems;
      } else if (vm.BarcodeSelected == 'BarCodeSearch' && vm.UniqueNameListing == 1) {
        var assestUniqueId = vm.BarCodeData[0].ParentUniqueId;
        var loc = vm.BarCodeData[0].LocationName;
        locId = vm.BarCodeData[0].LocationId;
        var ProductName = this.BarCodeData[0].AssetCatalogueId;
        var AvailableQty = vm.BarCodeData[0].AvailableItems;
      } else {
        var assestUniqueId = vm.iselectVal;
        var loc = vm.LocationName;
        locId = vm.location_id;
        var uniqueName = vmassetUniqueItem;
        var AvailableQty = vm.hdnQuantity;
      }
      var To = vm.fromDate;
      var From = vm.toDate;
      var startTime = vm.StartTime;
      var EndTime = vm.EndTime;
      var uniqueProductName = vm.uniqueProductName;
      var batchId = '';
      if (vm.uniqueProductName != null || vm.UniqueNameListing == 1 || vm.IsProduct == "Product") {
        if (type == 'assign') {
          vm.$router.push({
            path: '/AssetAssignment/Add/:reqForm'
          });
        } else {
          vm.$router.push({
            path: '/AssetAssignment/AddCheckOutReuest'
          });
        }
      } else {
        vm.ShowAlert(vm.$t("OneItemRequired"), "failure", vm.$t('Alert'));
      }
    },
    GetddlLocation: async function () {
      var vm = this;
      var url = `reqForm=`;
      await DataService["a" /* default */].GetLocationByCompanyId(url).then(function (response) {
        vm.FindalLocationArray = [];
        vm.LocationDataTree = JSON.parse(response.data).data;
        vm.LocationDataTree.forEach(value => {
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
        vm.options = vm.FindalLocationArray;
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
    GetddlProduct: async function (node) {
      var vm = this;
      var filterName = '';
      vm.assetUniqueData = [];
      vm.assetUniqueItem = '';
      var url = `id=&issueTo=&locationId=${vm.location_id}&requestFrom=TRANSFER`;
      await DataService["a" /* default */].GetAssetCatalogWithContainer(url).then(function (response) {
        let obj = {};
        var ProductListData = [];
        response.data.forEach(element => {
          obj = {
            name: element.NAME,
            value: element.ASSET_CATALOGUE_ID
          };
          ProductListData.push(obj);
        });
        vm.productDDLData = ProductListData;
        vm.GetAssetUniqueData(node);
        vm.filterName = vm.LocationDataTree.find(x => x.COMPANY_LOCATION_ID == parseInt(e));
        vm.LocationName = vm.filterName.LOCATION_NAME;
      });
    },
    GetAssetUniqueData: async function (LocationId) {
      var vm = this;
      vm.isLoading = true;
      var url = `assetCatalogId=&name=&issueTo=&locationId=${LocationId}&requestFrom=CHECKASSETAVAILABILITY&assetType=`;
      await DataService["a" /* default */].GetUniqueAssetItems(url).then(function (response) {
        let obj = {};
        var assetUniqueListData = [];
        response.data.forEach(element => {
          obj = {
            name: element.Name,
            value: element.Value
          };
          assetUniqueListData.push(obj);
        });
        vm.assetUniqueData = assetUniqueListData;
      });
      vm.isLoading = false;
    },
    checkAssetAvailability: function () {
      this.GetAssetAvailability();
    },
    searchByProduct: function (val) {
      this.SearchByBarcode = false;
      if (val == 'barcode') {
        this.SearchByBarcode = true;
        this.CheckedCheckBox = 'SearchProductName';
        this.BarcodeSelected = 'BarCodeSearch';
      } else {
        this.SearchByBarcode = false;
        this.CheckedCheckBox = 'SearchProducts';
        this.BarcodeSelected = 'ProductSearch';
      }
      this.ClearhdnIdsOnChange();
    },
    SearchassestBarcode: function () {
      var vm = this;
      vm.isLoading = true;
      this.$refs.BarCodeForm.validate().then(result => {
        if (result) {
          var url = `id=&isView=1&barcode=${this.txtBarcode}&assetType=&assetUniqueId=&selfCheckout=&reqFrom=CheckBarcodeAssetAvailability&isFor=search&isuniqueSearch=&issueTo=&assignedFrom=&assignedTill=&&startTime=&endTime=&locationId=&RFID=&pageSize=&pageNum=&assignedFromDateTime=&assignedTillDateTime=&uniqueIds=&catalogueIds=`;
          DataService["a" /* default */].GetCompanyAssestCatalogsDetalis(url).then(response => {
            this.tblassestgroupinfoIsShow = true;
            this.BarCodeData = response.data;
            this.RequestFrom = '';
            vm.isLoading = false;
          });
        }
      });
    },
    CleareAssestBarcode: function () {
      this.txtBarcode = '';
      this.tblassestgroupinfoIsShow = false;
    },
    searchByItemName: function (val) {
      this.IsProductName = false;
      if (val == 'ProductName') {
        this.IsProductName = true;
        this.IsProduct = 'ProductName';
      } else {
        this.IsProductName = false;
        this.IsProduct = 'Product';
      }
    },
    itemDDLShowHide: function () {
      this.IsDDLShowHide = !this.IsDDLShowHide;
    },
    uniqueItemChange: function (item) {
      this.iselectVal = item.value;
      this.assetUniqueItem = item.name;
      this.IsDDLShowHide = false;
      this.getRelations();
    },
    ClosePOPuP: function (item) {
      this.$parent.ClosePOPuP(item);
    },
    searchfilter: function () {
      this.SearchassestBarcode();
    },
    getRelations: function () {
      var vm = this;
      var id = '';
      var type = vm.IsProduct;
      var from = vm.fromDate;
      var till = vm.toDate;
      var startTime = vm.startTime;
      var endTime = vm.endTime;
      if (type == 'ProductName') {
        //id = $('#AssetCatalogFilter').val();
      } else {
        id = vm.iselectVal;
      }
      var url = `id=${id}&type=${type}`;
      DataService["a" /* default */].GetRelatedAssets(url).then(response => {
        JSON.parse(response.data.result);
      });
    },
    resetAvailabilityStatus: function () {
      var vm = this;
      vm.statusAvailable = true;
      vm.btnCheckAvailability = true;
      vm.statusReserved = false;
      vm.noOfAvailableItems = null;
      vm.statusUnAvailable = false;
      vm.btnReserve = false;
      vm.btnCheckout = false;
      vm.btnAssign = false;
      vm.divAvailabilityStatusIsShow = false;
    },
    ClearhdnIdsOnChange: function () {
      var vm = this;
      vm.txtBarcode = '';
      vm.Product_Id = '';
      vm.assetUniqueItem = '';
      vm.location_id = null;
      vm.tblassestgroupinfoIsShow = false;
      vm.BarCodeData = '';
      vm.noOfAvailableItems = '';
    },
    getMinDate() {
      return new Date();
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/checkAvailablity.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_checkAvailablityvue_type_script_lang_js_ = (checkAvailablityvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Modal/checkAvailablity.vue?vue&type=style&index=0&id=dad9def6&prod&lang=css&
var checkAvailablityvue_type_style_index_0_id_dad9def6_prod_lang_css_ = __webpack_require__("8c08");

// CONCATENATED MODULE: ./src/components/Modal/checkAvailablity.vue






/* normalize component */

var checkAvailablity_component = Object(componentNormalizer["a" /* default */])(
  Modal_checkAvailablityvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var checkAvailablity = __webpack_exports__["a"] = (checkAvailablity_component.exports);

/***/ }),

/***/ "8c08":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkAvailablity_vue_vue_type_style_index_0_id_dad9def6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cff9");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkAvailablity_vue_vue_type_style_index_0_id_dad9def6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkAvailablity_vue_vue_type_style_index_0_id_dad9def6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "cff9":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("4d5e");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("b7bf4b4c", content, true, {"sourceMap":false,"shadowMode":false});

/***/ })

}]);
//# sourceMappingURL=chunk-75cc7b96.js.map