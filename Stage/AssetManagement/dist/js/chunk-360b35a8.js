(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-360b35a8"],{

/***/ "1f6d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkAvailablity_vue_vue_type_style_index_0_id_3ee2f438_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eee7");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkAvailablity_vue_vue_type_style_index_0_id_3ee2f438_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkAvailablity_vue_vue_type_style_index_0_id_3ee2f438_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "3a57":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("de6d");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("2e8f4bd8", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "4025":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vue-treeselect__control{border:none;height:24px;padding:0}.vue-treeselect--searchable .vue-treeselect__input-container{padding:0!important}.vue-treeselect__placeholder{color:#303030!important}.vue-treeselect__control-arrow{color:#000}.vue-treeselect__placeholder{line-height:24px}.avail-calender .is-interactive,.divancuserguide{z-index:100000!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "55a7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0406b7ca-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/checkAvailablity.vue?vue&type=template&id=3ee2f438&
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
      "name": "Barcode",
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
            "name": "Barcode",
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
            "name": "Barcode"
          }
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
      }
    }], null, false, 1560806471)
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
    staticClass: "col-sm-12 col-md-6 col-xl-6 avail-calender"
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
          },
          on: {
            "focus": function ($event) {
              return _vm.togglePopoverClick();
            }
          }
        }, inputEvents)), _c('div', {
          staticClass: "input-group-append cal",
          attrs: {
            "id": "toggles"
          },
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
    staticClass: "col-sm-12 col-md-6 col-xl-6 avail-calender"
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
          },
          on: {
            "focus": function ($event) {
              return _vm.togglePopoverClick1();
            }
          }
        }, inputEvents)), _c('div', {
          staticClass: "input-group-append",
          attrs: {
            "id": "toggled"
          },
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

// CONCATENATED MODULE: ./src/components/Modal/checkAvailablity.vue?vue&type=template&id=3ee2f438&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0406b7ca-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/CheckBarCodeAvalibility.vue?vue&type=template&id=0870009c&
var CheckBarCodeAvalibilityvue_type_template_id_0870009c_render = function render() {
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
    }, [_vm._v(_vm._s(index + 1))]) : _c('span', {
      staticClass: "showcatalog showassetcatalog"
    }, [_vm._v(" " + _vm._s(index + 1))])]), _c('td', {
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
var CheckBarCodeAvalibilityvue_type_template_id_0870009c_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Modal/CheckBarCodeAvalibility.vue?vue&type=template&id=0870009c&

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
  CheckBarCodeAvalibilityvue_type_template_id_0870009c_render,
  CheckBarCodeAvalibilityvue_type_template_id_0870009c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CheckBarCodeAvalibility = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0406b7ca-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/AvailabilityStatus.vue?vue&type=template&id=b0c18974&
var AvailabilityStatusvue_type_template_id_b0c18974_render = function render() {
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
var AvailabilityStatusvue_type_template_id_b0c18974_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Modal/AvailabilityStatus.vue?vue&type=template&id=b0c18974&

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
      //debugger          
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
      //debugger    
      var vm = this;
      this.userIdss = [];
      this.checkedNames = [];
      var DataArray = [];
      if (this.GetUniqueProductIdData.length == this.userIdss.length && this.GetUniqueProductIdData.length == this.checkedNames.length) {
        vm.allSelected = true;
      } else {
        vm.allSelected = false;
      }
      for (let user in this.GetUniqueProductIdData) {
        if (ths.UNIQUE_ID == this.GetUniqueProductIdData[user].UNIQUE_ID) {
          this.userIdss.push(this.GetUniqueProductIdData[user].UNIQUE_ID);
          this.checkedNames.push(this.GetUniqueProductIdData[user].NAME);
        }
      }
      vm.allSelected = true;
      $('#tblUniqueItems tbody tr').each(function (index, tr) {
        //debugger
        if (!$(tr).find('input[type=checkbox]').prop('checked')) {
          vm.allSelected = false;
        }
      });
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
  AvailabilityStatusvue_type_template_id_b0c18974_render,
  AvailabilityStatusvue_type_template_id_b0c18974_staticRenderFns,
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
  props: {
    CalledFrom: String
  },
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
      CheckeduniqueIds: [],
      LocationName: '',
      uniqueProductName: '',
      hdnQuantity: null,
      LocationDataTree: [],
      dateformat: null,
      urlroute: ''
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
    var UserInfo = vm.GetUserInfo;
    vm.UserId = UserInfo.ID;
    vm.UserName = UserInfo.Name;
    vm.IsDefault = UserInfo.IsDefault;
    vm.UserType = UserInfo.UserType;
    vm.dateformat = UserInfo.DateFormat;
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
      var locationId = '';
      if (vm.BarcodeSelected == 'BarCodeSearch') {
        assetCatalog = vm.BarCodeData == '' ? null : vm.BarCodeData[0].AssetCatalogueId;
        assestUniqueId = vm.BarCodeData == '' ? null : vm.BarCodeData[0].ParentUniqueId;
        locationId = vm.BarCodeData == '' ? null : vm.BarCodeData[0].LocationId;
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
      if (vm.fromDate > vm.toDate) {
        vm.ShowAlert(vm.$t("From date should be less than or equal To Till date"), "failure", vm.$t('Alert'));
        return false;
      }
      var assignedFrom = vm.$options.filters.formatDateYear(vm.fromDate);
      var assignedTill = vm.$options.filters.formatDateYear(vm.toDate);
      var startTime = vm.$options.filters.formatTime(vm.StartTime);
      var endTime = vm.$options.filters.formatTime(vm.EndTime);
      var startTime1 = vm.StartTime.getHours();
      var endTime1 = vm.EndTime.getHours();
      var startDate = new Date(Date.parse(assignedFrom));
      var endDate = new Date(Date.parse(assignedTill));
      function getAmOrPm(hour) {
        return hour >= 12 ? 'PM' : 'AM';
      }
      // Get AM or PM for start and end times
      var startAmPm = getAmOrPm(startTime1);
      var endAmPm = getAmOrPm(endTime1);
      if (vm.BarcodeSelected == 'BarCodeSearch') {
        vm.urlroute = '?id=&isView=1&assetType=&barcode=' + vm.txtBarcode + '&assetUniqueId=&issueTo=&reqFrom=CheckBarcodeAssetAvailability&assignedFrom=' + vm.fromDate + '&assignedTill=' + vm.toDate + '&startTime=&endTime=&locationId=' + vm.BarCodeData[0].LocationId + '&RFID=&uniqueIds=';
      } else {
        vm.urlroute = '?id=&isView=1&assetType=&barcode=&assetUniqueId=&issueTo=' + vm.UserId + '&reqFrom=assetrequisition&From=' + vm.CalledFrom + '&assignedFrom=' + vm.$options.filters.formatDate(vm.fromDate) + '&assignedTill=' + vm.$options.filters.formatDate(vm.toDate) + '&startTime=' + startTime + ' ' + startAmPm + '&endTime=' + endTime + ' ' + endAmPm + '&locationId=' + vm.location_id + '&RFID=&uniqueIds=';
      }
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
          var url = `assetUniqueId=${assetCatalog}&assignedFrom=${assignedFrom}&assignedTill=${assignedTill}&startTime=${startTime}&endTime=${endTime}&locationId=${locationId}&type=ProductName`;
          await DataService["a" /* default */].GetAssetAvailability(url).then(response => {
            if (response.data.availability != 'ERROR') {
              if (response.data.availability.length > 0) {
                debugger;
                if (response.data.availability[0].availabilty == 'AVAILABLE') {
                  var obj = {
                    status: 'available',
                    AvailableItems: response.data.availability[0].availablE_QUANTITY,
                    IS_SELF_CHECKOUT: response.data.availability[0].iS_SELF_CHECKOUT,
                    UNIQUE_ITEMS: response.data.availability[0].uniquE_ITEMS
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
      // debugger
      vm.divAvailabilityStatusIsShow = true;
      if (availabilty.status) {
        vm.statusAvailable = true;
        if (availabilty.status == 'available') {
          if (vm.IsProduct == "ProductName" && vm.BarcodeSelected != 'BarCodeSearch' && vm.UniqueNameListing != 1) {
            vm.noOfAvailableItems = availabilty.AvailableItems;
          }
          if (availabilty.UNIQUE_ITEMS) {
            vm.GetUniqueProductIdData = JSON.parse(availabilty.UNIQUE_ITEMS);
            if (vm.txtBarcode != '') {
              var items = [];
              vm.GetUniqueProductIdData.forEach(function (item) {
                if (item.UNIQUE_ID == vm.BarCodeData[0].ParentUniqueId) {
                  items.push(item);
                }
              });
              vm.GetUniqueProductIdData = items;
            }
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
      let indexToRemove = this.CheckeduniqueIds.findIndex(item => item.UniqcatId === ths[0]);
      if (indexToRemove === -1) {
        let obj = {
          UniqcatId: ths[0],
          UniqName: ths[1]
        };
        this.CheckeduniqueIds.push(obj);
      } else {
        if (indexToRemove !== -1) {
          this.CheckeduniqueIds.splice(indexToRemove, 1);
        }
      }
      //this.uniqueProductName = ths[1];
    },

    ProceedToAction: function (type) {
      debugger;
      var vm = this;
      var uniqueIds = '';
      if (vm.BarcodeSelected == 'BarCodeSearch' && vm.UniqueNameListing == 1) {
        uniqueIds = vm.BarCodeData[0].ParentUniqueId;
      } else {
        if (vm.IsProduct == "ProductName") {
          uniqueIds = vm.CheckeduniqueIds.map(item => item.UniqcatId).join(',');
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
      //debugger
      var To = vm.fromDate;
      var From = vm.toDate;
      var startTime = vm.StartTime;
      var EndTime = vm.EndTime;
      var uniqueProductName = vm.uniqueProductName;
      var batchId = '';
      if (vm.CheckeduniqueIds.length != 0 || vm.UniqueNameListing == 1 || vm.IsProduct == "Product") {
        if (type == 'assign') {
          //vm.$router.push({ path: '/AssetAssignment/Add/:reqForm' });
          vm.$router.push({
            name: "AddAssetAssignment",
            params: {
              reqForm: 'checkAssetAvailability',
              items: vm.BarCodeData[0]
            }
          });
        } else {
          if (vm.txtBarcode != '') {
            vm.$router.push({
              path: '/AssetAssignment/AddCheckOutReuest' + vm.urlroute
            });
          } else {
            vm.$router.push({
              path: '/AssetAssignment/AddCheckOutReuest' + vm.urlroute + uniqueIds
            });
          }
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
        vm.filterName = vm.LocationDataTree.find(x => x.COMPANY_LOCATION_ID == parseInt(node));
        vm.btnCheckAvailability = true;
        vm.btnCheckout = false;
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
      //debugger
      var vm = this;
      vm.isLoading = true;
      this.$refs.BarCodeForm.validate().then(result => {
        if (result) {
          var url = `id=&isView=1&barcode=${this.txtBarcode}&assetType=&assetUniqueId=&selfCheckout=&reqFrom=CheckBarcodeAssetAvailability&isFor=search&isuniqueSearch=&issueTo=&assignedFrom=&assignedTill=&startTime=&endTime=&locationId=&RFID=&pageSize=&pageNum=&assignedFromDateTime=&assignedTillDateTime=&uniqueIds=&catalogueIds=`;
          DataService["a" /* default */].GetCompanyAssestCatalogsDetalis(url).then(response => {
            if (response.data.length > 0) {
              var Locations = vm.options.filter(x => x.id == response.data[0].LocationId);
              if (Locations.length > 0) {
                vm.tblassestgroupinfoIsShow = true;
                vm.BarCodeData = response.data;
                vm.RequestFrom = '';
                vm.isLoading = false;
              } else {
                vm.isLoading = false;
                vm.ShowAlert(vm.$t(`${response.data[0].LocationName} Location's Product not Assigning To ${vm.UserName}`), "warning", true, vm.$t('Alert'));
              }
            } else {
              vm.ShowAlert(vm.$t('NoRecordfound'), "warning", true, vm.$t('Alert'));
              vm.isLoading = false;
            }
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
      vm.divAvailabilityStatusIsShow = false;
      vm.GetUniqueProductIdData = [];
    },
    getMinDate() {
      return new Date();
    },
    togglePopoverClick() {
      $('#toggles').click();
    },
    togglePopoverClick1() {
      $('#toggled').click();
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/checkAvailablity.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_checkAvailablityvue_type_script_lang_js_ = (checkAvailablityvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Modal/checkAvailablity.vue?vue&type=style&index=0&id=3ee2f438&prod&lang=css&
var checkAvailablityvue_type_style_index_0_id_3ee2f438_prod_lang_css_ = __webpack_require__("1f6d");

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

/***/ "5f61":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductListing_vue_vue_type_style_index_0_id_b1a53580_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c8a7");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductListing_vue_vue_type_style_index_0_id_b1a53580_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductListing_vue_vue_type_style_index_0_id_b1a53580_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "6019":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "span#action-list{display:flex;align-items:center}.vue-treeselect__input{border:1px solid #abb5bf;padding:4px 12px}.vue-treeselect__single-value{padding-left:12px}.custom-checkbox .custom-control-input:checked~.custom-control-label:after,.custom-radio .custom-control-input:checked~.custom-control-label:after{display:block}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "75d3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddRelationPopup_vue_vue_type_style_index_0_id_81f1c020_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3a57");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddRelationPopup_vue_vue_type_style_index_0_id_81f1c020_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddRelationPopup_vue_vue_type_style_index_0_id_81f1c020_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "c8a7":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("6019");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("a28a1140", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "de6d":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vue-treeselect__menu-container{z-index:99999!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "eee7":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("4025");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("cac9812a", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "f9bd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0406b7ca-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/AddRelationPopup.vue?vue&type=template&id=81f1c020&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_c('loader', {
    attrs: {
      "is-visible": _vm.isLoading
    }
  }), _c('div', {
    staticClass: "my-popups"
  }, [_c('div', {
    staticClass: "modal d-block"
  }, [_c('div', {
    staticClass: "modal-dialog modal-dialog-centered"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('div', {
    staticClass: "modal-header d-flex"
  }, [_c('h5', {
    staticClass: "modal-title"
  }, [_vm._v(" " + _vm._s(_vm.$t('AddRelationship')) + " ")]), _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "title": "Close"
    },
    on: {
      "click": function ($event) {
        return _vm.ClosePopup();
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
      "innerHTML": _vm._s(_vm.$t('USERGUIDE_AC_ADD_RELATIONSHIP'))
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
  }, [_vm._v(_vm._s(_vm.$t('SearchbyProduct')))])])])]), _vm.SearchByBarcode ? [_c('Form', {
    ref: "ProductSearch",
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0"
  }, [_c('div', {
    staticClass: "col-12 float-left mt-3 SearchByBarcode p-0"
  }, [_c('div', {
    staticClass: "col-12 col-sm-12 float-left"
  }, [_c('div', {
    staticClass: "form-group mb-3"
  }, [_c('label', [_c('span', {
    attrs: {
      "id": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('Searchby')) + " " + _vm._s(_vm.$t('Barcode')) + "/" + _vm._s(_vm.$t('SerialNumber')) + "/" + _vm._s(_vm.$t('RFID')) + ":")])]), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")]), _c('Field', {
    staticClass: "w-100",
    attrs: {
      "name": "BarCode",
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
            "name": "BarCode",
            "placeholder": "Enter Barcode",
            "type": "text"
          },
          domProps: {
            "value": _vm.txtBarcode
          },
          on: {
            "keyup": function ($event) {
              return _vm.GetLocationDataByBarcode();
            },
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.txtBarcode = $event.target.value;
            }
          }
        }), errors[0] ? _c('span', {
          staticClass: "invalid-feedback d-block",
          attrs: {
            "name": "BarCode"
          }
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
      }
    }], null, false, 1518215686)
  })], 1)])]), _c('div', {
    staticClass: "col-9 float-left searchByProduct"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "Subject"
    }
  }, [_vm._v(_vm._s(_vm.$t('Location')) + ":"), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _c('Field', {
    staticClass: "w-100",
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
        return [_c('select', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.LocationValueForBarCode,
            expression: "LocationValueForBarCode"
          }],
          class: {
            'form-control': true,
            'is-invalid': errors[0]
          },
          attrs: {
            "name": "Location"
          },
          on: {
            "change": function ($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.LocationValueForBarCode = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
            }
          }
        }, [_c('option', {
          attrs: {
            "value": ""
          }
        }, [_vm._v(_vm._s(_vm.$t('Select')) + " ")]), _vm.LocationValueForBarCode != '' ? _c('option', {
          attrs: {
            "disabled": _vm.LocationValueForBarCode
          },
          domProps: {
            "value": _vm.LocationValueForBarCode
          }
        }, [_vm._v(" " + _vm._s(_vm.LocationName) + " ")]) : _vm._e()]), errors[0] ? _c('span', {
          staticClass: "invalid-feedback d-block",
          attrs: {
            "name": "Location"
          }
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
      }
    }], null, false, 652108480)
  })], 1)]), _c('div', {
    staticClass: "col-sm-6 col-md-6 col-lg-3 float-left pl-md-0 mt-0 mt-md-4 mt-sm-4"
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
      "click": function ($event) {
        return _vm.SearchAssetByBarCode();
      }
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
      "click": function ($event) {
        return _vm.ClearhdnIdsOnChange();
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-refresh"
  })])])])])] : _vm._e(), !_vm.SearchByBarcode ? [_c('Form', {
    ref: "ProductSearchBar",
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0"
  }, [_c('div', {
    staticClass: "col-12 float-left searchByProduct"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Location'))), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _c('Field', {
    staticClass: "w-100",
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
            'is-invalid': errors[0]
          },
          attrs: {
            "options": _vm.options,
            "placeholder": "Select Location",
            "show-count": true,
            "flat": true
          },
          on: {
            "input": function ($event) {
              return _vm.BindItemTypeByUserId(_vm.TreeValue);
            }
          },
          model: {
            value: _vm.TreeValue,
            callback: function ($$v) {
              _vm.TreeValue = $$v;
            },
            expression: "TreeValue"
          }
        }), errors[0] ? _c('span', {
          staticClass: "invalid-feedback d-block",
          attrs: {
            "name": "Location"
          }
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
      }
    }], null, false, 1376239831)
  })], 1)]), _c('div', {
    staticClass: "col-12 float-left",
    attrs: {
      "id": "searchByProduct"
    }
  }, [_c('div', {
    staticClass: "col-12 float-left pl-0 py-2"
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
  }, [_vm._v(_vm._s(_vm.$t('ItemName')))])])])]), _c('br'), _vm.IsProductName ? _c('div', {
    staticClass: "col-9 float-left pl-0"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('ProductName')) + ":"), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _c('Field', {
    staticClass: "w-100",
    attrs: {
      "name": "Product",
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
            value: _vm.txtAssetType,
            expression: "txtAssetType"
          }],
          class: {
            'form-control': true,
            'is-invalid': errors[0]
          },
          attrs: {
            "name": "AssetTypeData"
          },
          on: {
            "change": function ($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.txtAssetType = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
            }
          }
        }, [_c('option', {
          attrs: {
            "value": ""
          }
        }, [_vm._v("Select")]), _vm._l(_vm.AssetTypeData, function (item, itemIndex) {
          return _c('option', {
            key: itemIndex,
            domProps: {
              "value": item.Value
            }
          }, [_vm._v(_vm._s(item.Text) + " ")]);
        })], 2), errors[0] ? _c('span', {
          staticClass: "invalid-feedback d-block"
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
      }
    }], null, false, 4283199202)
  })], 1)]) : _vm._e(), !_vm.IsProductName ? _c('div', {
    staticClass: "col-9 float-left pl-0"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('ItemName')) + ":"), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _c('Field', {
    staticClass: "d-flex",
    attrs: {
      "name": "Item Name",
      "rules": {
        'required': true
      },
      "label": "Item Name"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        errors
      }) {
        return [_c('div', {
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
          class: {
            'form-control': true,
            'is-invalid': errors[0]
          },
          attrs: {
            "id": "txtAssetItems",
            "name": "Item Name",
            "placeholder": "Enter Product Name",
            "type": "text"
          },
          domProps: {
            "value": _vm.assetUniqueItem
          },
          on: {
            "keyup": _vm.Filterditems,
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.assetUniqueItem = $event.target.value;
            }
          }
        }), errors[0] ? _c('span', {
          staticClass: "invalid-feedback d-block",
          attrs: {
            "name": "Item Name"
          }
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e(), _c('div', {
          staticClass: "unique_dynamicdatalist"
        }, [_vm.IsDDLShowHide ? _c('ul', {
          staticClass: "listOfProduct"
        }, _vm._l(_vm.UniqueItemData, function (item, index) {
          return _c('li', {
            key: index,
            staticClass: "listitem all-items",
            attrs: {
              "value": item.Value
            },
            on: {
              "click": function ($event) {
                return _vm.uniqueItemChange(item);
              }
            }
          }, [_vm._v(" " + _vm._s(item.Name))]);
        }), 0) : _vm._e()])]), _c('a', {
          staticClass: "btn float-left",
          staticStyle: {
            "background-color": "#fff",
            "color": "#303030",
            "border-color": "#abb5bf",
            "border-left": "none",
            "max-height": "37px"
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
        })])];
      }
    }], null, false, 2000878517)
  })], 1)]) : _vm._e(), _c('div', {
    staticClass: "col-sm-8 col-md-8 col-lg-3 float-left pl-md-0 mt-0 mt-md-4 mt-sm-4 pr-0"
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
      "href": "javascript:;",
      "data-toggle-tooltip": "tooltip",
      "data-original-title": "Search"
    },
    on: {
      "click": function ($event) {
        return _vm.SearchAssetByProduct();
      }
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
      "click": function ($event) {
        return _vm.ClearhdnIdsOnChange();
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-refresh"
  })])])])])])] : _vm._e()], 2), _vm.searchResult ? _c('AddrelationListing', {
    attrs: {
      "ProductData": _vm.ProductData,
      "UniqueData": _vm.UniqueData,
      "isDataLoaded": _vm.isDataLoaded,
      "LocationValueForBarCode": _vm.LocationValueForBarCode,
      "iselectVal": _vm.iselectVal,
      "txtBarcode": _vm.txtBarcode,
      "txtAssetType": _vm.txtAssetType,
      "LocationValue": _vm.TreeValue,
      "AssetData": _vm.AssetData,
      "FetchData": _vm.FetchData,
      "ClosePopup": _vm.ClosePopup,
      "IsProduct": _vm.IsProduct,
      "checkItem": _vm.checkItem,
      "assignTillDate": _vm.assignTillDate
    }
  }) : _vm._e()], 1)])])])])])], 1);
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
}];

// CONCATENATED MODULE: ./src/components/Modal/AddRelationPopup.vue?vue&type=template&id=81f1c020&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0406b7ca-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/AddRelationListing.vue?vue&type=template&id=392a5a18&
var AddRelationListingvue_type_template_id_392a5a18_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_c('div', {
    staticClass: "col-12 listing tblassestgroupinfo px-0"
  }, [_c('div', {
    staticClass: "col-0 productNote"
  }, [_vm.IsProduct == 'ProductName' ? _c('small', [_vm._v(_vm._s(_vm.$t('NoteUniqueItems')))]) : _vm._e(), _vm.IsProduct == 'Product' ? _c('small', [_vm._v(_vm._s(_vm.$t('UniqueItems')))]) : _vm._e()]), _c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-bordered dt-responsive nowrap mt-0",
    attrs: {
      "id": "tblassestgroupinfo"
    }
  }, [_c('thead', {
    staticClass: "thead-bg"
  }, [_c('tr', [_c('th', {
    staticClass: "text-center"
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('SerialNumber')))])]), _c('th', {
    staticClass: "text-center"
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('ItemName')))])]), _c('th', {
    staticClass: "text-center"
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('PairProduct')))])]), _c('th', {
    staticClass: "text-center"
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('ItemMandatoryForCheckOut')))])]), _c('th', {
    staticClass: "text-center"
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('Action')))])])])]), _c('tbody', [_vm._l(_vm.ProductData, function (item, index) {
    return _c('tr', {
      key: index
    }, [_c('td', {
      staticClass: "text-center"
    }, [_vm._v(" " + _vm._s(index + 1) + " ")]), _vm.iselectVal != null ? _c('td', [_vm._v(_vm._s(item.Name))]) : _c('td', [_vm._v(_vm._s(item.AssetCatalogName))]), _vm.iselectVal == null ? _c('td', {
      staticClass: "text-center"
    }, [_vm.LocationValueForBarCode == null ? _c('select', {
      ref: "productn",
      refInFor: true,
      staticClass: "form-control",
      class: {
        'is-invalid': item.isValidation ? false : true
      },
      on: {
        "change": function ($event) {
          return _vm.bindProductItem($event, item.count);
        }
      }
    }, [_c('option', {
      attrs: {
        "value": ""
      }
    }, [_vm._v("Select Product Name")]), _vm._l(_vm.AssetData, function (item, itemIndex) {
      return _c('option', {
        key: itemIndex,
        domProps: {
          "value": item.Value
        }
      }, [_vm._v(" " + _vm._s(item.Text) + " ")]);
    })], 2) : _c('select', {
      ref: "barcode",
      refInFor: true,
      staticClass: "form-control",
      class: {
        'is-invalid': item.isValidation ? false : true
      },
      on: {
        "change": function ($event) {
          return _vm.bindProductItem($event, item.count);
        }
      }
    }, [_c('option', {
      attrs: {
        "value": ""
      }
    }, [_vm._v("Select Product Name")]), _vm._l(_vm.AssetData, function (item, itemIndex) {
      return _c('option', {
        key: itemIndex,
        domProps: {
          "value": item.Value
        }
      }, [_vm._v(" " + _vm._s(item.Text) + " ")]);
    })], 2)]) : _vm._e(), _vm.iselectVal != null ? _c('td', {
      staticClass: "text-center"
    }, [_c('select', {
      staticClass: "form-control",
      class: {
        'is-invalid': item.isValidation ? false : true
      },
      on: {
        "change": function ($event) {
          return _vm.bindProductItem($event, item.count);
        }
      }
    }, [_c('option', {
      attrs: {
        "value": ""
      }
    }, [_vm._v("Select Product Name")]), _vm._l(_vm.UniqueItemData1, function (i, itemIndex) {
      return _c('option', {
        key: itemIndex,
        domProps: {
          "value": i.Value
        }
      }, [_vm._v(_vm._s(i.Name) + " ")]);
    })], 2)]) : _vm._e(), _c('td', {
      staticClass: "text-center"
    }, [_c('div', {
      staticClass: "form-group"
    }, [_c('label', {
      staticClass: "switch"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.IsMandatory,
        expression: "item.IsMandatory"
      }],
      staticClass: "form-check-input rdoticketfor custom-control-input dynamic",
      attrs: {
        "id": "isCheck",
        "type": "checkbox"
      },
      domProps: {
        "checked": Array.isArray(item.IsMandatory) ? _vm._i(item.IsMandatory, null) > -1 : item.IsMandatory
      },
      on: {
        "change": [function ($event) {
          var $$a = item.IsMandatory,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = null,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && _vm.$set(item, "IsMandatory", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(item, "IsMandatory", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(item, "IsMandatory", $$c);
          }
        }, function ($event) {
          return _vm.ChangeCheck($event);
        }]
      }
    }), _vm._m(0, true)])])]), _c('td', {
      staticClass: "text-center single-action"
    }, [parseInt(_vm.result) == parseInt(index + 1) ? _c('a', {
      attrs: {
        "href": "javascript:;",
        "id": "addProduct",
        "title": "Add Product"
      },
      on: {
        "click": function ($event) {
          return _vm.AddMoreItem(item);
        }
      }
    }, [_c('i', {
      staticClass: "fa fa-plus px-4 text-success"
    })]) : _vm._e(), _c('a', {
      attrs: {
        "href": "javascript:;",
        "title": "Delete"
      },
      on: {
        "click": function ($event) {
          return _vm.deleteItem(item.count);
        }
      }
    }, [_c('i', {
      staticClass: "fa fa-trash px-4 text-danger"
    })])])]);
  }), _vm.NoRecordLength == 0 ? _c('tr', [_c('td', {
    staticClass: "text-danger text-center no-record",
    attrs: {
      "colspan": "7"
    }
  }, [_vm._v("No Record Found")])]) : _vm._e()], 2)])]), _vm.ProductData.length > 0 ? _c('div', {
    staticClass: "col-12 text-right mt-3"
  }, [_c('a', {
    staticClass: "btn btn-success",
    attrs: {
      "href": "javascript:;",
      "title": "Save"
    },
    on: {
      "click": function ($event) {
        return _vm.SubmitData();
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-save pr-2"
  }), _vm._v(_vm._s(_vm.$t('Save')) + " ")]), _vm._v("  "), _c('a', {
    staticClass: "btn btn-danger",
    attrs: {
      "href": "javascript:;",
      "title": "Cancel",
      "id": "ancCancelgroupRequisition"
    },
    on: {
      "click": _vm.RelationPopUpClose
    }
  }, [_c('i', {
    staticClass: "fa fa-close pr-2"
  }), _vm._v(_vm._s(_vm.$t('Cancel')))])]) : _vm._e()])]);
};
var AddRelationListingvue_type_template_id_392a5a18_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', {
    staticClass: "slider round"
  }, [_c('span', {
    staticClass: "slider-yes"
  }, [_vm._v("Yes")]), _c('span', {
    staticClass: "slider-no"
  }, [_vm._v("No")])]);
}];

// CONCATENATED MODULE: ./src/components/Modal/AddRelationListing.vue?vue&type=template&id=392a5a18&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/AddRelationListing.vue?vue&type=script&lang=js&


/* harmony default export */ var AddRelationListingvue_type_script_lang_js_ = ({
  props: {
    UniqueData: {
      type: Array
    },
    ProductData: {
      type: Array
    },
    LocationValue: {
      type: Number
    },
    txtAssetType: {
      type: Number
    },
    iselectVal: {
      type: Number
    },
    ClosePopup: {
      type: Function
    },
    LocationValueForBarCode: {
      type: Number
    },
    txtBarcode: {
      type: String
    },
    FetchData: {
      type: Function
    },
    AssetData: {
      type: Array
    },
    IsProduct: {
      type: String
    },
    assignTillDate: {
      type: String
    },
    checkItem: {
      type: Number
    }
  },
  data() {
    return {
      NoRecordLength: 0,
      noDataAvailable: 'No Product is available in the items list.',
      isCheckDeployItem: '',
      product: {},
      Relations: [],
      sliderValue: 0,
      IsMandatory: false,
      ChildId: null,
      result: 1,
      isVal: false,
      UniqueItemData1: []
    };
  },
  created: function () {
    var vm = this;
    if (vm.assignTillDate != null || vm.checkItem != null) {
      vm.isVisible = false;
      vm.$parent.searchResult = false;
      return vm.ShowAlert(vm.$t(`Product is already assigned to someone untill  ${vm.assignTillDate}`), "warning", vm.$t("Alert"));
    } else {
      vm.isVisible = true;
      vm.NoRecordLength = vm.ProductData.length;
      vm.UniqueItemData1 = vm.UniqueData;
    }
  },
  updated() {
    var vm = this;
    vm.lastItem();
  },
  methods: {
    lastItem() {
      var vm = this;
      vm.result = this.ProductData.length;
      vm.NoRecordLength = this.ProductData.length;
      vm.UniqueItemData1 = vm.UniqueData;
    },
    ChangeCheck: function (event) {
      var vm = this;
      vm.IsMandatory = false;
      if (event.target.checked == true) {
        if (vm.ChildId != null) {
          vm.Relations.forEach(element => {
            var itemExist = vm.Relations.some(x => x.ChildId === vm.ChildId);
            if (itemExist == true) {
              element.IsMandatory = true;
            } else {
              element.IsMandatory = false;
            }
          });
          vm.IsMandatory = false;
        }
        return;
      } else {
        return vm.IsMandatory = false;
      }
    },
    AddMoreItem(item) {
      var vm = this;
      if (vm.ChildId != null) {
        const product = {
          AssetCatalogName: item.AssetCatalogName,
          count: vm.ProductData.length + 1,
          isValidation: false
        };
        vm.ProductData.push(product);
        vm.ChildId = null;
      } else {
        vm.ProductData.map(ele => {
          if (ele.count == 1) {
            return ele.isValidation = false;
          }
        });
        vm.ShowAlert(vm.$t("Product Name is required."), "warning", vm.$t("Alert"));
      }
    },
    bindProductItem(value, count) {
      var vm = this;
      var temp = [];
      let isChildExit = false;
      vm.ChildId = parseInt(value.target.value);
      if (count == 1) {
        vm.Relations = [];
        if (vm.Relations.length == 0) {
          let childId = {
            ChildId: vm.ChildId,
            IsMandatory: false
          };
          vm.Relations.unshift(childId);
          vm.ProductData.map(ele => {
            if (ele.count == count) {
              return ele.isValidation = true;
            }
          });
          return;
        }
      }
      temp.push(vm.Relations);
      temp.forEach(ele => {
        isChildExit = vm.Relations.some(x => x.ChildId === parseInt(value.target.value));
        if (isChildExit == false) {
          let childId = {
            ChildId: vm.ChildId,
            IsMandatory: false
          };
          vm.Relations.push(childId);
          vm.ProductData.forEach(ele => {
            if (ele.count == count) {
              ele.isValidation = true;
            }
          });
          return;
        } else {
          value.target.value = null;
          vm.ChildId = null;
          return vm.ShowAlert(vm.$t("Relation with this Product Has already been added."), "failure", vm.$t("Alert"));
        }
      });
    },
    deleteItem(value) {
      var vm = this;
      vm.confirmR(vm.$t('Are you sure you want to delete these record(s)?'), true, false, function (result) {
        const index = vm.ProductData.findIndex(x => x.count === value);
        if (index !== -1) {
          vm.ProductData.splice(index, 1);
          // this.$parent.ClearhdnIdsOnChange();
        }

        return vm.ShowAlert(vm.$t("Item has been deleted Successfully "), "success", vm.$t("Alert"));
      });
    },
    SubmitData: function () {
      var vm = this;
      let obj = {};
      if (this.LocationValueForBarCode == "" || vm.LocationValueForBarCode == null) {
        if (vm.Relations.length == 0) {
          vm.ProductData.forEach(ele => {
            if (ele.count == 1) {
              return ele.isValidation = false;
            }
          });
          return vm.ShowAlert(vm.$t("Product Name is required."), "warning", vm.$t("Alert"));
        }
        obj = {
          "ParentId": this.txtAssetType ? parseInt(this.txtAssetType) : this.iselectVal,
          "type": this.txtAssetType ? "ProductName" : "Product",
          "LocationId": this.LocationValue,
          "Relations": vm.Relations
        };
      } else {
        obj = {
          "ParentId": parseInt(this.txtBarcode),
          "type": "ProductName",
          "LocationId": this.LocationValueForBarCode,
          "Relations": vm.Relations
        };
      }
      DataService["a" /* default */].SaveAssetRelationship(obj).then(response => {
        if (response.data != null) {
          var result = response.data;
          if (result.status == 0) {
            this.RelationPopUpClose();
            return vm.ShowAlert(vm.$t("Add relationship Submitted successfully "), `${result.msg}`, vm.$t("Alert"));
          } else {
            vm.ShowAlert(vm.$t("Something went wrong"), `${result.msg}`, vm.$t("Alert"));
          }
        }
      });
    },
    RelationPopUpClose() {
      this.$parent.ClosePopup();
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/AddRelationListing.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_AddRelationListingvue_type_script_lang_js_ = (AddRelationListingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Modal/AddRelationListing.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Modal_AddRelationListingvue_type_script_lang_js_,
  AddRelationListingvue_type_template_id_392a5a18_render,
  AddRelationListingvue_type_template_id_392a5a18_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AddRelationListing = (component.exports);
// EXTERNAL MODULE: ./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.cjs.js
var vue_treeselect_cjs = __webpack_require__("ca17");
var vue_treeselect_cjs_default = /*#__PURE__*/__webpack_require__.n(vue_treeselect_cjs);

// EXTERNAL MODULE: ./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.css
var vue_treeselect = __webpack_require__("542c");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/AddRelationPopup.vue?vue&type=script&lang=js&





/* harmony default export */ var AddRelationPopupvue_type_script_lang_js_ = ({
  components: {
    AddrelationListing: AddRelationListing,
    'tree-view': vue_treeselect_cjs_default.a
  },
  props: {
    FetchData: {
      type: Function
    }
  },
  data() {
    return {
      SearchByBarcode: true,
      IsProductName: true,
      SearchByProduct: false,
      LocationData: null,
      TreeValue: null,
      LocationValueForBarCode: null,
      AssetTypeData: [],
      txtBarcode: null,
      txtAssetType: 0,
      searchResult: false,
      isLoading: false,
      IsDDLShowHide: false,
      assetUniqueItem: '',
      iselectVal: null,
      UniqueItemData: [],
      LocationName: '',
      ProductData: [],
      options: [],
      isuniqueSearch: 'No',
      AssetData: [],
      UniqueData: [],
      filterRecodes: [],
      SuniqueItemData: [],
      showProductDropdown: false,
      IsProduct: 'ProductName',
      assignTillDate: null,
      checkItem: null,
      isDataLoaded: false,
      UniqueItems: []
    };
  },
  created: function () {
    var vm = this;
    vm.searchByProduct('barcode');
    vm.GetLocationByCompanyId();
  },
  methods: {
    GetLocationDataByBarcode: async function () {
      var vm = this;
      vm.isLoading = true;
      var url = `barcode=${this.txtBarcode}&reqFrom=addAssetRelationShip`;
      await DataService["a" /* default */].GetLocationByBarcode(url).then(response => {
        if (response.data[0] != null) {
          vm.LocationName = response.data[0].LOCATION_NAME;
          vm.LocationValueForBarCode = response.data[0].LOCATION_ID;
          vm.isLoading = false;
          // vm.GetAssetUniqueData();
        } else {
          vm.isLoading = false;
        }
      });
    },
    searchByProduct: function (val) {
      var vm = this;
      this.SearchByBarcode = false;
      if (val == 'barcode') {
        vm.isdata = false;
        vm.searchResult = false;
        vm.SearchByBarcode = true;
        vm.CheckedCheckBox = 'SearchProductName';
        vm.BarcodeSelected = 'BarCodeSearch';
        vm.ProductData = [];
      } else {
        vm.isdata = true;
        vm.SearchByBarcode = false;
        vm.searchResult = false;
        vm.CheckedCheckBox = 'SearchProducts';
        vm.BarcodeSelected = 'ProductSearch';
        vm.ProductData = [];
      }
      //this.ClearhdnIdsOnChange();
    },

    ClearhdnIdsOnChange: function () {
      var vm = this;
      vm.txtBarcode = '';
      vm.ProductData = [];
      vm.LocationValueForBarCode = '', vm.TreeValue = null, vm.assetUniqueItem = '';
      vm.searchByProduct('barcode');
    },
    itemDDLShowHide: function () {
      this.IsDDLShowHide = !this.IsDDLShowHide;
    },
    uniqueItemChange: function (item) {
      var vm = this;
      vm.iselectVal = item.Value;
      vm.assetUniqueItem = item.Name;
      vm.IsDDLShowHide = false;
    },
    searchByItemName: function (val) {
      var vm = this;
      vm.IsProductName = false;
      if (val == 'ProductName') {
        vm.IsProductName = true;
        vm.IsProduct = 'ProductName';
        vm.assetUniqueItem = '';
        vm.searchResult = false;
      } else {
        vm.IsProductName = false;
        vm.searchResult = false;
        vm.IsProduct = 'Product';
      }
    },
    BindItemTypeByUserId: async function (ths) {
      var vm = this;
      vm.isLoading = true;
      if (typeof ths == 'undefined') {
        vm.isLoading = false;
        return;
      } else {
        var url = `id=&isView=&barcode=&assetType=&assetUniqueId=&selfCheckout=&reqFrom=addAssetRelationShip&isFor=&isuniqueSearch=&issueTo=&assignedFrom=&assignedTill=&startTime=&endTime=&locationId=${vm.TreeValue}&RFID=&pageSize=&pageNum=&assignedFromDateTime=&assignedTillDateTime=&uniqueIds=&catalogueIds=`;
        await DataService["a" /* default */].GetCompanyAssestCatalogsDetalis(url).then(response => {
          vm.AssetTypeData = response.data.Result;
          vm.GetAssetUniqueData();
          vm.isLoading = false;
        });
      }
    },
    GetLocationByCompanyId: async function () {
      var vm = this;
      var url = `reqForm=assetassignment`;
      await DataService["a" /* default */].GetLocationByuserId(url).then(response => {
        vm.FindalLocationArray = [];
        response.data.data.forEach(value => {
          var CheckIfExist = vm.FindalLocationArray.filter(function (el) {
            return el.COMPANY_LOCATION_ID == value.COMPANY_LOCATION_ID;
          });
          if (CheckIfExist.length == 0) {
            if (value.PARENT_LOCATION_ID == null) {
              let locationId = value.COMPANY_LOCATION_ID;
              let rslt = vm.getChildLocation(locationId, value, response.data.data);
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
    ClosePopup() {
      this.$parent.CloseAddRelationShipPopup();
    },
    // searchfilter: function () {
    //     var vm = this;
    //     vm.isLoading = true;
    //     var url = `id=&isView=1&barcode=${this.txtBarcode}&assetType=&assetUniqueId=&selfCheckout=&reqFrom=addAssetRelationShip&isFor=search&isuniqueSearch=yes&issueTo=&assignedFrom=&assignedTill=&&startTime=&endTime=&locationId=&RFID=&pageSize=&pageNum=&assignedFromDateTime=&assignedTillDateTime=&uniqueIds=&catalogueIds=`;
    //     DataService.GetCompanyAssestCatalogsDetalis(url).then(response => {
    //         if (response.data[0] != null) {
    //             vm.LocationName = response.data[0].LocationName;
    //             vm.LocationValueForBarCode = response.data[0].LocationId;
    //             vm.isLoading = false;
    //         }
    //         else {
    //             vm.isLoading = false;
    //         }
    //     })

    // },

    SearchAssetByBarCode: async function () {
      var vm = this;
      vm.isLoading = true;
      vm.isuniqueSearch = 'yes';
      await vm.getNonUniqueProductsByBarcodeLocation();
      if (vm.LocationValueForBarCode == null) {
        vm.isLoading = false;
      }
      var url = `id=&catalogueIds=&uniqueIds=&isView=1&assetType=&barcode=${vm.txtBarcode}&assetUniqueId=&issueTo=&reqFrom=addAssetRelationShip&isFor=search&assignedFrom=&assignedTill=&startTime=&endTime=&locationId=${vm.LocationValueForBarCode}&RFID=&isuniqueSearch=no`;
      vm.$refs.ProductSearch.validate().then(result => {
        if (result) {
          DataService["a" /* default */].GetCompanyAssestCatalogsDetalis(url).then(response => {
            if (response.data.length > 0) {
              vm.searchResult = true;
              vm.ProductData = response.data;
              let isValidation = true;
              let count = 1;
              let isMatchRecord = false;
              vm.AssetData = [];
              vm.AssetTypeData.map(item => {
                isMatchRecord = vm.ProductData.some(x => x.AssetCatalogueId == item.Value);
                if (isMatchRecord == false) {
                  vm.AssetData.push(item);
                } else {
                  console.log("isMatchRecord", isMatchRecord);
                }
              });
              vm.ProductData.map(ele => {
                ele.isValidation = isValidation;
                ele.count = count;
              });
            } else {
              vm.searchResult = true;
              vm.NoRecordLength = 0;
              vm.ProductData = [];
            }
            vm.isDataLoaded = true;
            vm.isLoading = false;
          });
        } else {
          vm.isLoading = false;
        }
      });
    },
    Filterditems: async function () {
      let vm = this;
      vm.filterRecodes = [];
      vm.isLoading = true;
      let url = '';
      if (vm.assetUniqueItem !== "") {
        const searchTerm = vm.assetUniqueItem.toLowerCase();
        if (vm.LocationValueForBarCode == null || vm.LocationValueForBarCode == '') {
          url = `assetCatalogId=&name=${vm.assetUniqueItem}&issueTo=&locationId=${vm.TreeValue}&requestFrom=addAssetRelationShip&assetType=`;
        } else {
          url = `assetCatalogId=&name=&issueTo=&locationId=${vm.LocationValueForBarCode}&requestFrom=addAssetRelationShip&assetType=`;
        }
        await DataService["a" /* default */].GetUniqueAssetItems(url).then(function (response) {
          vm.filterRecodes = response.data;
          vm.SuniqueItemData = response.data;
          if (vm.filterRecodes != null) {
            if (vm.filterRecodes.length == 1) {
              vm.IsDDLShowHide = true;
              vm.uniqueItemChange(...vm.filterRecodes);
            } else {
              vm.UniqueItemData = vm.filterRecodes;
              vm.IsDDLShowHide = true;
            }
            vm.isLoading = false;
          } else {
            vm.isLoading = false;
          }
        });
        //vm.filterRecodes = vm.UniqueItemData.filter(x => x.Name.toLowerCase().includes(searchTerm));
        // if (vm.filterRecodes != null) {

        //     if (vm.filterRecodes.length == 1) {
        //         vm.IsDDLShowHide = true;
        //         vm.uniqueItemChange(...vm.filterRecodes);

        //     }
        //     else {

        //         vm.UniqueItemData = vm.filterRecodes;
        //         vm.IsDDLShowHide = true;
        //     }

        // }
        // else {
        //     ///
        // }
      } else {
        // vm.IsDDLShowHide = false;
        vm.isLoading = false;
      }
    },
    GetAssetUniqueData: async function () {
      var vm = this;
      let url = '';
      vm.UniqueItemData = [];
      if (vm.LocationValueForBarCode == null || vm.LocationValueForBarCode == '') {
        url = `assetCatalogId=&name=&issueTo=&locationId=${vm.TreeValue}&requestFrom=addAssetRelationShip&assetType=`;
      } else {
        url = `assetCatalogId=&name=&issueTo=&locationId=${vm.LocationValueForBarCode}&requestFrom=addAssetRelationShip&assetType=`;
      }
      await DataService["a" /* default */].GetUniqueAssetItems(url).then(function (response) {
        vm.UniqueItemData = response.data;
        vm.SuniqueItemData = response.data;
      });
    },
    SearchAssetByProduct: async function () {
      debugger;
      let url = '';
      var vm = this;
      vm.isLoading = true;
      vm.AssetData = [];
      vm.UniqueData = [];
      if (vm.txtAssetType != '') {
        vm.AssetTypeData.forEach(item => {
          if (item.Value != vm.txtAssetType) {
            vm.AssetData.push(item);
          }
        });
      }
      // else if (vm.iselectVal != '') {
      //     // vm.UniqueItemData.forEach((item) => {
      //     //     if (item.Value != vm.iselectVal) {
      //     //         vm.UniqueData.push(item);
      //     //     }
      //     // })

      // }
      if (vm.iselectVal == null) {
        url = `id=${vm.txtAssetType}&isView=1&barcode=&assetType=&assetUniqueId=&selfCheckout=&reqFrom=addAssetRelationShip&isFor=search&isuniqueSearch=no&issueTo=&assignedFrom=&assignedTill=&&startTime=&endTime=&locationId=${vm.TreeValue}&RFID=&pageSize=&pageNum=&assignedFromDateTime=&assignedTillDateTime=&uniqueIds=&catalogueIds=${vm.txtAssetType}`;
      } else {
        vm.ProductData = [];
        url = `id=&isView=1&barcode=&assetType=0&assetUniqueId=${vm.iselectVal}&selfCheckout=&reqFrom=addAssetRelationShip&isFor=search&isuniqueSearch=no&issueTo=&assignedFrom=&assignedTill=&&startTime=&endTime=&locationId=${vm.TreeValue}&RFID=&pageSize=&pageNum=&assignedFromDateTime=&assignedTillDateTime=&uniqueIds=${vm.iselectVal}&catalogueIds=`;
      }
      vm.getUniqueAssetItemsExceptItemName();
      vm.$refs.ProductSearchBar.validate().then(result => {
        if (result) {
          DataService["a" /* default */].GetCompanyAssestCatalogsDetalis(url).then(response => {
            if (response.data.length > 0) {
              vm.searchResult = true;
              vm.ProductData = response.data;
              let isValidation = true;
              let count = 1;
              vm.ProductData.map(ele => {
                ele.isValidation = isValidation;
                ele.count = count;
              });
              vm.isLoading = false;
              return;
            } else {
              vm.isLoading = false;
              if (response.data.checkItem == 1 || response.data.checkItem == 2) {
                vm.checkItem = null;
                vm.assignTillDate = null;
                vm.checkItem = response.data.checkItem;
                vm.assignTillDate = response.data.assignTillDate;
              } else {
                vm.searchResult = true;
                vm.NoRecordLength = 0;
              }
              vm.searchResult = true;
              vm.NoRecordLength = 0;
              vm.ProductData = [];
            }
            vm.isDataLoaded = true;
            return vm.isLoading = false;
          });

          // debugger;
          // if (vm.iselectVal != '') {

          //     vm.SuniqueItemData.forEach((item) => {
          //         if (item.Value != vm.iselectVal) {
          //             vm.UniqueData.push(item);
          //         }
          //     })
          // }
        } else {
          vm.isLoading = false;
        }
      });
    },
    getUniqueAssetItemsExceptItemName: function () {
      var vm = this;
      var url = `relatedInfoId=${vm.iselectVal}&name=&issueTo=&locationId=${vm.TreeValue}&requestFrom=ASSETREQUISITION&assetType=`;
      DataService["a" /* default */].GetUniqueAssetItemsExceptItemName(url).then(response => {
        vm.UniqueItems = response.data;
        vm.UniqueItems.forEach(item => {
          if (item.Value != vm.iselectVal) {
            vm.UniqueData.push(item);
          }
        });
      });
    },
    getNonUniqueProductsByBarcodeLocation: function () {
      var vm = this;
      vm.isLoading = true;
      var url = `id=&isView=&barcode=&assetType=&assetUniqueId=&selfCheckout=&reqFrom=addAssetRelationShip&isFor=&isuniqueSearch=&issueTo=&assignedFrom=&assignedTill=&startTime=&endTime=&locationId=${vm.LocationValueForBarCode}&RFID=&pageSize=&pageNum=&assignedFromDateTime=&assignedTillDateTime=&uniqueIds=&catalogueIds=`;
      DataService["a" /* default */].GetCompanyAssestCatalogsDetalis(url).then(response => {
        vm.AssetTypeData = response.data.Result;
        vm.isLoading = false;
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/AddRelationPopup.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_AddRelationPopupvue_type_script_lang_js_ = (AddRelationPopupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Modal/AddRelationPopup.vue?vue&type=style&index=0&id=81f1c020&prod&lang=css&
var AddRelationPopupvue_type_style_index_0_id_81f1c020_prod_lang_css_ = __webpack_require__("75d3");

// CONCATENATED MODULE: ./src/components/Modal/AddRelationPopup.vue






/* normalize component */

var AddRelationPopup_component = Object(componentNormalizer["a" /* default */])(
  Modal_AddRelationPopupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AddRelationPopup = __webpack_exports__["a"] = (AddRelationPopup_component.exports);

/***/ }),

/***/ "fb56":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0406b7ca-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetCatalog/ProductListing.vue?vue&type=template&id=b1a53580&
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
      "showCheckBox": true,
      "listType": ['List'],
      "ModuleName": "Asset",
      "SubModuleCode": "Asset",
      "PageSize": _vm.PageSize,
      "IdentityColumn": "ASSET_CATALOGUE_ID",
      "HeaderText": _vm.$t('AssetManagement'),
      "ListData": _vm.ProductData,
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
        return [data.column.COLUMN_NAME == 'STATUS_NAME' ? [_c('a', {
          staticClass: "inactive-disabled"
        }, [_c('span', {
          class: {
            'btn d-inline-block text-center text-truncate btn-success': data.row.STATUS_NAME == 'Active',
            'btn d-inline-block text-center text-truncate btn-danger': data.row.STATUS_NAME == 'Inactive',
            'btn d-inline-block text-center text-truncate btn-info': data.row.STATUS_NAME == 'In Stock',
            'btn d-inline-block text-center text-truncate btn-warning': data.row.STATUS_NAME == 'In Use',
            'btn d-inline-block text-center text-truncate btn-primary': data.row.STATUS_NAME == 'In-Transit',
            'btn d-inline-block text-center text-truncate btn-danger valid': data.row.STATUS_NAME == 'Retired'
          }
        }, [_vm._v(" " + _vm._s(data.row[data.column.COLUMN_NAME]) + " ")])])] : _vm._e(), data.column.COLUMN_NAME == 'NUMBER_OF_ITEM' ? [_c('span', {
          staticClass: "text-dark",
          attrs: {
            "title": data.row.NUMBER_OF_ITEM
          }
        }, [_c('i', {
          staticClass: "fa fa-list",
          attrs: {
            "aria-hidden": "true"
          }
        }), _c('span', {
          staticClass: "noti-circle noti-blue"
        }, [_vm._v(_vm._s(data.row.NUMBER_OF_ITEM > 0 ? data.row.NUMBER_OF_ITEM : 0))])])] : _vm._e(), data.column.COLUMN_NAME == 'AVAILABLE_ITEMS' ? [_c('span', {
          staticClass: "text-dark",
          attrs: {
            "title": data.row.AVAILABLE_ITEMS
          }
        }, [_c('i', {
          staticClass: "fa fa-list-ul",
          attrs: {
            "aria-hidden": "true"
          }
        }), _c('span', {
          staticClass: "noti-circle noti-green"
        }, [_vm._v(_vm._s(data.row.AVAILABLE_ITEMS > 0 ? data.row.AVAILABLE_ITEMS : 0))])])] : _vm._e(), data.column.COLUMN_NAME == 'ATTACHMENT_PATH' ? [data.row.ATTACHMENT_PATH != null ? _c('div', {
          staticClass: "form-control p-0 border-0 text-center",
          attrs: {
            "alt": "",
            "title": ""
          }
        }, [_c('img', {
          staticStyle: {
            "max-height": "80px"
          },
          attrs: {
            "src": data.row.ATTACHMENT_PATH,
            "title": ""
          }
        })]) : _vm._e(), data.row.ATTACHMENT_PATH == null ? _c('div', {
          staticClass: "form-control p-0 border-0 text-center"
        }, [_c('img', {
          staticStyle: {
            "max-height": "60px"
          },
          attrs: {
            "src": "/Content/images/imagenotavailable.jpg",
            "alt": "No Image Available",
            "title": ""
          }
        })]) : _vm._e()] : _vm._e(), data.column.COLUMN_NAME == 'HAS_RELATED_PRODUCTS' ? [_c('div', {
          staticClass: "form-control p-0 border-0 text-center"
        }, [data.row.HAS_RELATED_PRODUCTS ? _c('span', {
          staticClass: "text-dark"
        }, [_c('a', {
          staticClass: "relatedproduct",
          attrs: {
            "href": "javascript:;",
            "id": data.row.ASSET_CATALOGUE_ID,
            "title": "Related Products "
          },
          on: {
            "click": function ($event) {
              return _vm.RelatedProductsPopup(data.row.ASSET_CATALOGUE_ID);
            }
          }
        }, [_c('i', {
          staticClass: "fa fa-sitemap text-primary",
          attrs: {
            "aria-hidden": "true"
          }
        })])]) : _vm._e()])] : _vm._e(), data.column.COLUMN_NAME == 'NAME' ? [data.row.NAME ? _c('span', {
          staticClass: "text-dark"
        }, [_c('a', {
          staticClass: "relatedproduct",
          attrs: {
            "href": "javascript:;",
            "id": data.row.ASSET_CATALOGUE_ID,
            "title": data.row.NAME
          },
          on: {
            "click": function ($event) {
              return _vm.clickEventOfColumn1(data.row.ASSET_CATALOGUE_ID);
            }
          }
        }, [_c('em', {
          staticClass: "text-primary",
          attrs: {
            "aria-hidden": "true"
          }
        }, [_vm._v(_vm._s(data.row.NAME))])])]) : _vm._e()] : _vm._e()];
      }
    }])
  }), _vm.IsShowRelation ? _c('RelationPopup') : _vm._e(), _vm.ShowClonePopup ? _c('ClonePopup', {
    attrs: {
      "AssetCatCloneId": _vm.AssetCatCloneId
    }
  }) : _vm._e(), _vm.ShowViewFilePopup ? _c('AttachFilePopup', {
    attrs: {
      "AssetDetails": _vm.AssetDetails
    }
  }) : _vm._e(), _vm.ShowCheckAvailablity ? _c('CheckAvailablity', {
    attrs: {
      "CalledFrom": _vm.CalledFrom
    }
  }) : _vm._e(), _vm.ShowAddProduct ? _c('AddProduct', {
    attrs: {
      "popupCondition": _vm.popupCondition,
      "FromPage": _vm.FromPage
    }
  }) : _vm._e(), _vm.ShowRelatedProducts ? _c('RelatedProducts', {
    attrs: {
      "AssetCatId": _vm.AssetCatId
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/AssetCatalog/ProductListing.vue?vue&type=template&id=b1a53580&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// CONCATENATED MODULE: ./src/views/AssetCatalog/ProductListingSchema.js


let buttons = [{
  title: 'Product List',
  href: '/AssetCatalog/RelatedInformation',
  iconClass: 'fa fa-list',
  additionalClass: '',
  isdisabled: false,
  isvisible: true,
  checkPrivilege: true
}, {
  title: 'Add Relationship',
  iconClass: 'fa fa-plus',
  callbackfunction: 'addRelationShip',
  additionalClass: '',
  isdisabled: false,
  isvisible: true,
  checkPrivilege: true
}, {
  title: 'Check Availability',
  iconClass: 'fa fa-check',
  callbackfunction: 'CheckAvailablity',
  additionalClass: '',
  isdisabled: false,
  isvisible: true,
  checkPrivilege: true
}, {
  title: 'Add Product',
  iconClass: 'fa fa-plus',
  callbackfunction: 'OpenModelAddProduct',
  additionalClass: '',
  isdisabled: false,
  isvisible: true,
  checkPrivilege: true
}, {
  title: 'Product Transfer',
  callbackfunction: 'TransferItem',
  iconClass: 'fa fa fa-exchange',
  additionalClass: '',
  isdisabled: false,
  isvisible: true,
  checkPrivilege: true
}, {
  title: 'In-Transit Products',
  iconClass: 'fa fa-recycle',
  callbackfunction: 'ViewInTransitItems',
  // href:'/AssetCatalog/ViewInTransitItems',
  additionalClass: '',
  isdisabled: false,
  isvisible: true,
  checkPrivilege: true
}, {
  title: 'Transferred List',
  iconClass: 'fa fa fa-exchange',
  href: '/AssetCatalog/ViewTransferedItem',
  additionalClass: '',
  isdisabled: false,
  isvisible: true,
  checkPrivilege: true
}, {
  title: 'Depreciation',
  iconClass: 'fa fa-sort-amount-asc',
  href: '/Asset/Depreciation',
  additionalClass: '',
  isdisabled: false,
  isvisible: true,
  checkPrivilege: true
}, {
  title: 'Import Product',
  iconClass: 'fa fa-download',
  callbackfunction: 'ImportProduct',
  additionalClass: '',
  isdisabled: false,
  isvisible: true,
  checkPrivilege: true
}, {
  title: 'Delete',
  iconClass: 'fa fa-trash',
  callbackfunction: 'DeletData',
  additionalClass: '',
  id: 'DeleteMultiple',
  isdisabled: true,
  isvisible: true,
  checkPrivilege: true,
  isEnabledOnSelectedRow: true
}];
let leftsearchSchema = [{
  fieldName: "Location",
  fieldType: "ddl-multilevel",
  fieldIcon: "fa-map-marker",
  paramName: "LocationId",
  fieldSearchConditionName: [''],
  isSearch: false,
  value: null,
  listOptions: []
}, {
  fieldName: 'Product Name/Code',
  fieldType: "text",
  fieldIcon: "fa fa-suitcase",
  paramName: "search",
  fieldSearchConditionName: [''],
  isSearch: false,
  value: "",
  listOptions: []
}, {
  fieldName: 'Status',
  fieldType: "radio",
  fieldIcon: "fa fa-file-text-o",
  paramName: "statusIds",
  fieldSearchConditionName: [''],
  isSearch: false,
  value: "",
  listOptions: []
}, {
  fieldName: 'Tag',
  fieldType: "ddl-check",
  fieldIcon: "fa fa-tag",
  paramName: "tagIds",
  fieldSearchConditionName: [''],
  isSearch: false,
  value: "",
  listOptions: []
}];
let listActions = [{
  title: 'Edit',
  href: '/AssetCatalog/Update/{ASSET_CATALOGUE_ID}',
  icon: 'fa fa-pencil text-success action-icon',
  additionalSpan: '',
  isVisible: true
}, {
  title: 'Clone',
  href: 'javascript:void(0)',
  callbackfunction: 'OpenClonePopup',
  icon: 'fa fa-clone text-success action-icon',
  additionalSpan: '',
  isVisible: true
}, {
  title: 'Detail Products History',
  href: '/AssetAssignment/Index/{ASSET_CATALOGUE_ID}',
  icon: 'fa fa-file text-warning action-icon',
  additionalSpan: '',
  isVisible: true
}, {
  title: 'View attached file(s)',
  callbackfunction: 'OpenViewFilePopup',
  href: 'javascript:void(0)',
  icon: 'fa fa-eye text-primary action-icon',
  additionalSpan: '',
  isVisible: true
}];
async function bindleftCommonSearchdropdown(instance, modulename, filtername) {
  var vm = instance;
  var LocationData = [];
  var TagData = [];
  if (filtername == "Location") {
    var params = `reqForm=`;
    await DataService["a" /* default */].GetLocationByCompanyId(params).then(function (response) {
      var json = JSON.parse(response.data).data;
      json.forEach(value => {
        var CheckIfExist = LocationData.filter(function (el) {
          return el.COMPANY_LOCATION_ID == value.COMPANY_LOCATION_ID;
        });
        if (CheckIfExist.length == 0) {
          if (value.PARENT_LOCATION_ID == null) {
            let locationId = value.COMPANY_LOCATION_ID;
            let rslt = getChildLocation(locationId, value, JSON.parse(response.data).data);
            LocationData.push(rslt);
          }
        }
      });
      vm.leftSearchFields[0].listOptions = LocationData;
    });
  }
  if (filtername == "Tag") {
    var params = `modulename=${modulename}`;
    DataService["a" /* default */].GetTagsByModuleId(params).then(function (response) {
      if (filtername == "Tag") {
        let obj1 = {};
        JSON.parse(response.data).data.forEach(item => {
          obj1 = {
            name: item.TAG_NAME,
            value: `${item.TAG_ID}`
          };
          TagData.push(obj1);
        });
        vm.leftSearchFields[3].listOptions = TagData;
      }
    });
  }
  if (filtername == "Status") {
    var params = `langCode=en&statusType=AssetManagement&hasglobal=true`;
    DataService["a" /* default */].GetStatusList(params).then(function (response) {
      if (filtername == "Status") {
        let obj2 = {};
        JSON.parse(response.data).forEach(item => {
          if (item.STATUS_ID != 1003) {
            obj2 = {
              name: item.STATUS,
              value: item.STATUS_ID
            };
            TagData.push(obj2);
          }
        });
        vm.leftSearchFields[2].listOptions = TagData;
      }
    });
  }
}
function getChildLocation(locationId, currentItem, data) {
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
        let rslt = getChildLocation(ChildfolderId, value, data);
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
}
/* harmony default export */ var ProductListingSchema = ({
  buttons,
  leftsearchSchema,
  listActions,
  bindleftCommonSearchdropdown
});
// EXTERNAL MODULE: ./src/components/Modal/AddRelationPopup.vue + 9 modules
var AddRelationPopup = __webpack_require__("f9bd");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0406b7ca-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/CloneProduct.vue?vue&type=template&id=1b138c2a&
var CloneProductvue_type_template_id_1b138c2a_render = function render() {
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
  }, [_vm._v(" " + _vm._s(_vm.$t('CloneProduct')) + " ")]), _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-original-title": "Close"
    },
    on: {
      "click": function ($event) {
        return _vm.ClosePopup();
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-times"
  })])]), _c('div', {
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
  }) : _vm._e(), _c('div', {
    staticClass: "col-lg-6"
  }, [_c('div', {
    staticClass: "py-2"
  }, [_c('span', {
    staticClass: "mandatory"
  }, [_vm._v(" " + _vm._s(_vm.$t('MandatoryString')) + " ")])])])], 1)])])])]);
};
var CloneProductvue_type_template_id_1b138c2a_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Modal/CloneProduct.vue?vue&type=template&id=1b138c2a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/CloneProduct.vue?vue&type=script&lang=js&

/* harmony default export */ var CloneProductvue_type_script_lang_js_ = ({
  props: {
    AssetCatCloneId: {
      type: String
    }
  },
  data() {
    return {
      DataLoaded: 0,
      FormSchema: [{
        layoutType: "single",
        Data: [{
          astype: "TextField",
          label: this.$t('Product'),
          name: "Title",
          value: "",
          placeholder: "",
          validationRules: {
            "required": true,
            max: 250
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
        onClick: this.ClosePopup
      }]
    };
  },
  created: function () {
    this.DataLoaded = 1;
  },
  methods: {
    ClosePopup() {
      var vm = this;
      vm.$parent.ShowClonePopup = false;
    },
    onSubmit(formfields, val) {
      var vm = this;
      let myObj = {};
      myObj.AssetcatalogId = vm.AssetCatCloneId;
      myObj.ProductName = formfields.Title.trim();
      var dataval = JSON.stringify(myObj);
      DataService["a" /* default */].CloneProductSave(dataval).then(response => {
        if (response != "") {
          if (response.data == 'ALREADYEXIST') {
            vm.ShowAlert(vm.$t("ProductAlready"), "warning", vm.$t('Alert'));
          } else if (response.data == 'CLONE') {
            vm.ShowAlert(vm.$t("ProductClone"), "success", vm.$t('Alert'));
            vm.ClosePopup();
            vm.$parent.FetchData();
          } else {
            vm.ShowAlert(vm.$t("ProductCloneFail"), "failure", vm.$t('Alert'));
          }
        } else {
          vm.ShowAlert(vm.$t("ProductCloneFail"), "failure", vm.$t('Alert'));
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/CloneProduct.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_CloneProductvue_type_script_lang_js_ = (CloneProductvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Modal/CloneProduct.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Modal_CloneProductvue_type_script_lang_js_,
  CloneProductvue_type_template_id_1b138c2a_render,
  CloneProductvue_type_template_id_1b138c2a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CloneProduct = (component.exports);
// EXTERNAL MODULE: ./src/components/Modal/checkAvailablity.vue + 14 modules
var checkAvailablity = __webpack_require__("55a7");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0406b7ca-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/RelatedProductsPopup.vue?vue&type=template&id=703af960&
var RelatedProductsPopupvue_type_template_id_703af960_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "my-popups"
  }, [_c('div', {
    staticClass: "modal d-block"
  }, [_c('div', {
    staticClass: "modal-dialog modal-dialog-centered",
    staticStyle: {
      "max-width": "900px !important"
    }
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('div', {
    staticClass: "modal-header theme-primary partition-full"
  }, [_c('h4', {
    staticClass: "modal-title"
  }, [_vm._v(_vm._s(_vm.$t('HAS_RELATED_PRODUCTS')))]), _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.ClosePopup
    }
  }, [_c('em', {
    staticClass: "fa fa-times",
    attrs: {
      "aria-hidden": "true"
    }
  })])]), _c('div', {
    staticClass: "listing py-3 px-3"
  }, [_c('div', {
    staticClass: "table-responsive table-fix-header",
    attrs: {
      "id": "div_forListView"
    }
  }, [_c('table', {
    staticClass: "table table-bordered mt-0",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "id": "tblRElatedProductsList"
    }
  }, [_c('thead', {
    staticClass: "thead-bg"
  }, [_c('tr', [_c('th', [_c('span', [_vm._v(_vm._s(_vm.$t('PRODUCT_NAME')))])]), _c('th', [_c('span', [_vm._v(_vm._s(_vm.$t('Mandatory_Non_Mandatory')))])])])]), _c('tbody', [_vm._l(_vm.RelatedProductsData, function (item) {
    return _c('tr', [_c('td', [_c('span', {
      staticClass: "text-overflow-dynamic-container"
    }, [_vm._v(" " + _vm._s(item.NAME) + " ")])]), _c('td', [_c('span', {
      staticClass: "text-overflow-dynamic-container"
    }, [_vm._v(" " + _vm._s(item.Mandatory == true ? 'Mandatory' : 'NonMandatory') + " ")])])]);
  }), _c('tr', [_vm.RelatedProductsData.length == 0 ? _c('td', {
    staticClass: "text-danger text-center no-record",
    attrs: {
      "colspan": "7"
    }
  }, [_vm._v("No Record Found")]) : _vm._e()])], 2)])]), _c('div', {
    staticClass: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-danger",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.ClosePopup
    }
  }, [_vm._v("Close")])])])])])])]);
};
var RelatedProductsPopupvue_type_template_id_703af960_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Modal/RelatedProductsPopup.vue?vue&type=template&id=703af960&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/RelatedProductsPopup.vue?vue&type=script&lang=js&

/* harmony default export */ var RelatedProductsPopupvue_type_script_lang_js_ = ({
  props: {
    AssetCatId: {
      type: String
    }
  },
  data() {
    return {
      RelatedProductsData: []
    };
  },
  created: function () {
    var vm = this;
    vm.FetchData();
  },
  methods: {
    FetchData() {
      debugger;
      var vm = this;
      vm.isLoading = true;
      var prams = `catId=${vm.AssetCatId}&type=ProductName`;
      DataService["a" /* default */].GetRelatedProduct(prams).then(response => {
        debugger;
        vm.RelatedProductsData = JSON.parse(JSON.parse(response.data.result).RESULT);
      });
    },
    ClosePopup() {
      var vm = this;
      vm.$parent.CloseRelatedProductsPopup();
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/RelatedProductsPopup.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_RelatedProductsPopupvue_type_script_lang_js_ = (RelatedProductsPopupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Modal/RelatedProductsPopup.vue





/* normalize component */

var RelatedProductsPopup_component = Object(componentNormalizer["a" /* default */])(
  Modal_RelatedProductsPopupvue_type_script_lang_js_,
  RelatedProductsPopupvue_type_template_id_703af960_render,
  RelatedProductsPopupvue_type_template_id_703af960_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RelatedProductsPopup = (RelatedProductsPopup_component.exports);
// EXTERNAL MODULE: ./src/components/Modal/AddProduct.vue + 9 modules
var AddProduct = __webpack_require__("191f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0406b7ca-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/ViewattachfilePopup.vue?vue&type=template&id=0d9a1084&
var ViewattachfilePopupvue_type_template_id_0d9a1084_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "my-popups"
  }, [_c('div', {
    staticClass: "modal d-block"
  }, [_c('div', {
    staticClass: "modal-dialog modal-dialog-centered",
    staticStyle: {
      "max-width": "1200px !important"
    }
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('div', {
    staticClass: "modal-header"
  }, [_c('h5', {
    staticClass: "modal-title"
  }, [_vm._v(" " + _vm._s(_vm.$t('Attachments')) + " ")]), _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-original-title": "Close"
    },
    on: {
      "click": function ($event) {
        return _vm.ClosePopup();
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-times"
  })])]), _c('div', {
    staticClass: "modal-body"
  }, [_c('div', {
    staticClass: "listing tblassestgroupinfodetails px-1 mt-3"
  }, [_c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-bordered dt-responsive nowrap mt-0",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "id": "tblassestgroupinfodetails"
    }
  }, [_c('thead', {
    staticClass: "thead-bg"
  }, [_c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t('SerialNumber')))]), _c('th', [_vm._v(_vm._s(_vm.$t('AttachmentName')))]), _c('th', [_vm._v(_vm._s(_vm.$t('FileName')))]), _c('th', [_vm._v(_vm._s(_vm.$t('ForTermCondition')))]), _c('th', [_vm._v(_vm._s(_vm.$t('TermConditionStartDate')))]), _c('th', [_vm._v(_vm._s(_vm.$t('Action')))])])]), _c('tbody', _vm._l(_vm.arryaofData, function (item, index) {
    return _c('tr', {
      key: index
    }, [_c('td', {
      staticClass: "text-overflow-dynamic-container w-auto"
    }, [_vm._v(" " + _vm._s(item.SERIAL_NUMBER) + " ")]), _c('td', [_c('span', {
      staticClass: "text-overflow-dynamic-container w-auto"
    }, [_vm._v(_vm._s(item.ATTACHMENT_TITLE))])]), _c('td', [_c('span', {
      staticClass: "text-overflow-dynamic-container w-auto"
    }, [_vm._v(_vm._s(item.ATTACHMENT_NAME))])]), _c('td', [item.IS_FOR_TERMS_CONDITION ? _c('span', {
      staticClass: "text-overflow-dynamic-container w-auto"
    }, [_vm._v("Yes")]) : _c('span', {
      staticClass: "text-overflow-dynamic-container w-auto"
    }, [_vm._v("No")])]), _c('td', [item.TERMS_CONDITION_STARTS_AT != null ? _c('span', {
      staticClass: "text-overflow-dynamic-container w-auto"
    }, [_vm._v(_vm._s(_vm.formatTimeToCustomFormat(item.TERMS_CONDITION_STARTS_AT)))]) : _c('span', {
      staticClass: "text-overflow-dynamic-container w-auto"
    }, [_vm._v("NA")])]), _c('td', {
      staticClass: "text-center single-action"
    }, [_c('a', {
      staticClass: "downloadfile",
      attrs: {
        "href": "javascript:;",
        "title": "Download Attachment"
      },
      on: {
        "click": function ($event) {
          return _vm.Downloadfiles(item);
        }
      }
    }, [_c('em', {
      staticClass: "fa fa-download text-primary action-icon",
      attrs: {
        "title": "Download Attachment"
      }
    })]), _vm._v("  "), _c('a', {
      staticClass: "deletefile mr-2",
      attrs: {
        "href": "javascript:;",
        "title": "Remove Attachment"
      },
      on: {
        "click": function ($event) {
          return _vm.DeleteAtachmentFile(item.ASSET_ATTACHMENT_ID, item.ASSET_CATALOGUE_ID);
        }
      }
    }, [_c('em', {
      staticClass: "fa fa-trash text-danger action-icon",
      attrs: {
        "title": "Remove Attachment"
      }
    })])])]);
  }), 0)])])])])])])])]);
};
var ViewattachfilePopupvue_type_template_id_0d9a1084_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Modal/ViewattachfilePopup.vue?vue&type=template&id=0d9a1084&

// EXTERNAL MODULE: ./node_modules/luxon/build/cjs-browser/luxon.js
var luxon = __webpack_require__("1315");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/ViewattachfilePopup.vue?vue&type=script&lang=js&


/* harmony default export */ var ViewattachfilePopupvue_type_script_lang_js_ = ({
  props: {
    AssetDetails: {
      type: String
    }
  },
  data() {
    return {
      arryaofData: []
    };
  },
  created: function () {
    var vm = this;
    vm.privilegeParams = `controller=AssetCatalog&action=`;
    vm.GetViewFiles();
  },
  methods: {
    ClosePopup() {
      var vm = this;
      vm.$parent.CloseViewFilePopup();
    },
    GetViewFiles() {
      debugger;
      var vm = this;
      var obj = `catalogueId=${vm.AssetDetails.ASSET_CATALOGUE_ID}&isDelete=1&flag=`;
      DataService["a" /* default */].AttachViewFiles(obj).then(response => {
        vm.arryaofData = JSON.parse(response.data).data;
      });
    },
    Downloadfiles(item) {
      DataService["a" /* default */].CheckPrivilege(this.privilegeParams + 'DownloadFile').then(response => {
        if (response.data) {
          var param = `filePath=${item.ATTACHMENT_PATH}`;
          DataService["a" /* default */].DownloadAttachment(param).then(function (response) {
            const byteData = response.data;
            const fileURL = `data:${item.ATTACHMENT_TYPE};base64,${byteData}`;
            var fileLink = document.createElement('a');
            fileLink.href = fileURL;
            fileLink.setAttribute('download', item.ATTACHMENT_NAME);
            document.body.appendChild(fileLink);
            fileLink.click();
          });
        } else {
          this.ShowAlert(this.$t('NotAuthorizedSection'), "failure", true, "Alert");
        }
      });
    },
    DeleteAtachmentFile(fileId, catId) {
      debugger;
      var vm = this;
      DataService["a" /* default */].CheckPrivilege(vm.privilegeParams + 'DeleteFile').then(response => {
        if (response.data) {
          vm.confirmR(vm.$t("ConfirmDelete"), true, vm.$t("Delete") + "  " + vm.$t("REPORT_ID"), function () {
            var url = `fileId=${fileId}&catId=${catId}`;
            DataService["a" /* default */].DeleteViewAttachmentFile(url).then(response => {
              vm.ShowAlert(vm.$t("FileDeleted"), "success", vm.$t('Alert'));
              vm.$parent.FetchData();
              vm.$parent.CloseViewFilePopup();
            });
          });
        } else {
          vm.ShowAlert(vm.$t('NotAuthorizedSection'), "failure", true, "Alert");
        }
      });
    },
    formatTimeToCustomFormat(inputTime) {
      if (inputTime != null && inputTime != '') {
        const inputLuxonDateTime = luxon["DateTime"].fromISO(inputTime, {
          zone: 'utc'
        }); // Assume the input time is in UTC
        const targetTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const outputLuxonDateTime = inputLuxonDateTime.setZone(targetTimeZone);
        const formattedDateTime = outputLuxonDateTime.toFormat("MM/dd/yyyy h:mm a");
        return formattedDateTime;
      } else {
        return "NA";
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/ViewattachfilePopup.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_ViewattachfilePopupvue_type_script_lang_js_ = (ViewattachfilePopupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Modal/ViewattachfilePopup.vue





/* normalize component */

var ViewattachfilePopup_component = Object(componentNormalizer["a" /* default */])(
  Modal_ViewattachfilePopupvue_type_script_lang_js_,
  ViewattachfilePopupvue_type_template_id_0d9a1084_render,
  ViewattachfilePopupvue_type_template_id_0d9a1084_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ViewattachfilePopup = (ViewattachfilePopup_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetCatalog/ProductListing.vue?vue&type=script&lang=js&









/* harmony default export */ var ProductListingvue_type_script_lang_js_ = ({
  components: {
    RelationPopup: AddRelationPopup["a" /* default */],
    ClonePopup: CloneProduct,
    CheckAvailablity: checkAvailablity["a" /* default */],
    AddProduct: AddProduct["a" /* default */],
    RelatedProducts: RelatedProductsPopup,
    AttachFilePopup: ViewattachfilePopup
  },
  data() {
    return {
      listheaderbuttons: ProductListingSchema.buttons,
      leftSearchFields: ProductListingSchema.leftsearchSchema,
      listActions: ProductListingSchema.listActions,
      View_List: [],
      LegendArray: [],
      ProductData: [],
      PageSize: 10,
      PageNumber: 1,
      PageSizeOption: null,
      StatusListForListing: [],
      Headers: [{
        "COLUMN_NAME": 'ATTACHMENT_PATH',
        "DATA_TYPE": "image",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Image'),
        "DISPLAY_ORDER": 1,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": 'ASSET_TYPE',
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('ItemNameType'),
        "DISPLAY_ORDER": 2
      }, {
        "COLUMN_NAME": 'ITEM_CODE',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('ITEM_CODE'),
        "DISPLAY_ORDER": 3
      }, {
        "COLUMN_NAME": 'NAME',
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('PRODUCT_NAME'),
        "DISPLAY_ORDER": 4,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": 'STATUS_NAME',
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Status'),
        "DISPLAY_ORDER": 5,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": 'NUMBER_OF_ITEM',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('NUMBER_OF_ITEM'),
        "DISPLAY_ORDER": 6,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": 'AVAILABLE_ITEMS',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('AVAILABLE_ITEMS'),
        "DISPLAY_ORDER": 7,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": 'HAS_RELATED_PRODUCTS',
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('HAS_RELATED_PRODUCTS'),
        "DISPLAY_ORDER": 8,
        settings: {
          isInSlot: true
        }
      }],
      noRecord: true,
      TotalRecords: 0,
      CurrentPage: 1,
      TotalPages: 0,
      SortBy: '',
      SortExp: '',
      widgets: [],
      catalogId: '',
      legendProgress: [{
        class: '',
        backgroundColor: '#17a2b8',
        name: 'Draft'
      }, {
        class: 'legend-Progress',
        backgroundColor: '',
        name: 'Approved'
      }, {
        class: 'legend-pending',
        backgroundColor: '',
        name: 'Pending'
      }, {
        class: '',
        backgroundColor: '#fe6847',
        name: 'SendForCorrection'
      }, {
        class: '',
        backgroundColor: '#ee1313',
        name: 'Rejected'
      }],
      IsShowRelation: false,
      ShowClonePopup: false,
      ShowViewFilePopup: false,
      ShowCheckAvailablity: false,
      ShowAddProduct: false,
      isLoading: false,
      ShowRelatedProducts: false,
      AssetCatId: '',
      AssetCatCloneId: '',
      AssetDetails: '',
      homeLink: false,
      privilegeParams: null,
      UserType: null,
      CalledFrom: 'ManageProdcut'
    };
  },
  async created() {
    var vueObj = this;
    // await vueObj.GetPageSize();
    vueObj.UserType = vueObj.GetUserInfo.UserType;
    if (vueObj.UserType == 'PM') {
      vueObj.listheaderbuttons[8].isvisible = false;
    }
    vueObj.privilegeParams = `controller=AssetCatalog&action=`;
    ProductListingSchema.bindleftCommonSearchdropdown(vueObj, "Asset", "Location");
    ProductListingSchema.bindleftCommonSearchdropdown(vueObj, "Asset", "Tag");
    ProductListingSchema.bindleftCommonSearchdropdown(vueObj, "Asset", "Status");
    vueObj.UserType = vueObj.GetUserInfo.UserType;
    vueObj.LegendArray = [{
      class: 'legend-Progress colorboxsquare',
      text: vueObj.$t('AssetsHavingUniqueNames')
    }];
    vueObj.PageSize = await vueObj.GetPageSize();
    await vueObj.CheckPrivilege();
  },
  methods: {
    // async GetPageSize(){ 
    //        var vm =this;
    //         var params='key=DefaultPageSize'
    //          DataService.GetConfigurationValueForCompanyByKey(params).then((response) => {
    //             if(response.data!=null){
    //                 vm.PageSize =  parseInt(response.data);
    //             }                   
    //         });
    //       },
    async CheckPrivilege() {
      var vueObj = this;
      await DataService["a" /* default */].CheckPrivilege(vueObj.privilegeParams + 'Index').then(response => {
        if (response.data) {
          vueObj.FetchData();
        } else {
          vueObj.ShowAlert(vueObj.$t('NotAuthorizedSection'), "failure", true, "Alert");
        }
      });
    },
    RelatedProductsPopup(id) {
      var vm = this;
      vm.AssetCatId = id;
      vm.ShowRelatedProducts = true;
    },
    columnDataFormatter: function (row, column) {
      return row[column.COLUMN_NAME];
    },
    async FetchData() {
      var vm = this;
      vm.isLoading = true;
      // var params='key=DefaultPageSize'
      //    await  DataService.GetConfigurationValueForCompanyByKey(params).then((response) => {
      //         debugger
      //         if(response.data!=null){
      //             vm.PageSize =  parseInt(response.data);
      //         }                   
      //     });
      var prams = `pageSize=${vm.PageSize}&pageNum=${vm.PageNumber}&sortBy=${vm.SortBy}&sortExp=${vm.SortExp}&${vm.searchCondition}`;
      await DataService["a" /* default */].AssetCatalogueListing(prams).then(response => {
        if (response.data != null) {
          if (response.data.length > 0) {
            vm.ProductData = response.data;
            vm.ProductData.forEach(row => {
              row.rowDetailsUrl = '';
              row.additionalClass = '';
              row.isCheckBoxDisabled = false;
              if (row.IS_SAMPLE_DATA == true) {
                row.additionalClass = 'sample-bar';
              }
              if (row.HAS_UNIUQE_NAMES) {
                row.additionalClass = 'low-bar odd';
              }
              if (row.NUMBER_OF_ITEM != row.AVAILABLE_ITEMS) {
                row.isCheckBoxDisabled = true;
              }
            });
            vm.TotalRecords = response.data[0].TOTAL;
            vm.TotalPages = Math.ceil(vm.TotalRecords / vm.PageSize);
            $("[id^='chkAll']").prop("checked", false).removeAttr('checked');
            $('.chkItems:checkbox:checked').prop("checked", false).removeAttr('checked');
            vm.listheaderbuttons[9].isdisabled = false;
            // $("[id^='DeleteMultiple']").removeClass('enable').addClass('disabled');
            vm.CurrentPage = vm.PageNumber;
            vm.noRecord = false;
            vm.isLoading = false;
            setTimeout(() => {
              vm.checkboxSetting();
            }, 800);
          } else {
            vm.noRecord = true;
            vm.ProductData = [];
            vm.TotalRecords = 0;
            vm.isLoading = false;
          }
        } else {
          vm.noRecord = true;
          vm.ProductData = [];
          vm.TotalRecords = 0;
          vm.isLoading = false;
        }
        vm.isLoading = false;
        setTimeout(function () {
          vm.CheckBoxBootstrap();
        }, 100);
        setTimeout(function () {
          vm.ResponsiveDataTable('tablelistingdata');
        }, 500);
        setTimeout(function () {
          $("#tablelistingdata tbody td span[title|='true']").attr('title', '');
          $("#tablelistingdata tbody td span[title|='false']").attr('title', '');
        }, 500);
      });
    },
    DeleteData: function () {
      var vm = this;
      var val = "";
      DataService["a" /* default */].CheckPrivilege(vm.privilegeParams + 'Delete').then(response => {
        if (response.data) {
          $('.chkItems:checkbox:checked').not("[id^='chkAll']").each(function () {
            if (val.length > 0) val += ',';
            val += $(this).val();
            if (val != "") {
              vm.listheaderbuttons[9].isdisabled = false;
              //$("[id^='DeleteMultiple']").removeClass('enable').addClass('disabled');
            }
          });

          if (val.length > 0) {
            vm.confirmR(vm.$t("ConfirmDelete"), true, vm.$t("Delete") + "  " + vm.$t("ASSET_CATALOGUE_ID"), function () {
              let url = `ids=${val}&tableName=TALYGEN_asset_catalogue&primaryKey=asset_catalogue_id`;
              DataService["a" /* default */].Delete(url).then(response => {
                if (response.data) {
                  $("[id^='chkAll']").prop("checked", false).removeAttr('checked');
                  $('.chkItems:checkbox:checked').prop("checked", false).removeAttr('checked');
                  //$("[id^='DeleteMultiple']").removeClass('enable').addClass('disabled');
                  vm.ShowAlert(vm.$t('DeletedSuccess', [vm.$t('Product')]), "Success", true, vm.$t('Alert'));
                } else {
                  vm.ShowAlert(vm.$t('DeletedError', [vm.$t('val')]), "failure", true, vm.$t('Alert'));
                }
                vm.FetchData();
              });
            });
          }
        } else {
          vm.ShowAlert(vm.$t('NotAuthorizedSection'), "failure", true, "Alert");
        }
      });
    },
    clickEventOfColumn1: function (ids, value) {
      var vm = this;
      DataService["a" /* default */].CheckPrivilege(vm.privilegeParams + 'update').then(response => {
        if (response.data) {
          vm.$router.push({
            path: '/AssetCatalog/Update/' + ids
          });
        } else {
          vm.ShowAlert(vm.$t('NotAuthorizedSection'), "failure", true, "Alert");
        }
      });
    },
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
    currentPageMethod: function (value) {
      this.PageSize = value.PageSize;
      this.PageNumber = value.PageNumber;
      this.FetchData();
    },
    GetPageSizeOption: function () {
      var list = [];
      var defaultPageSize = 10;
      for (var i = defaultPageSize; i < defaultPageSize + 95; i += 5) {
        list.push(i);
      }
      this.PageSizeOption = list;
    },
    pagerMethod: function (value) {
      this.PageSize = value.PageSize;
      this.PageNumber = value.PageNumber;
      this.FetchData();
    },
    commonHeaderButtonClick(event) {
      switch (event.callbackfunction) {
        case "addRelationShip":
          this.AddRelationShipPopup();
          break;
        case "CheckAvailablity":
          this.OpenCheckAvailablity();
          break;
        case "TransferItem":
          this.OpenTransferItem();
          break;
        case "OpenModelAddProduct":
          this.OpenModelAddProduct();
          break;
        case "ViewInTransitItems":
          this.InTransitProducts();
          break;
        case "ImportProduct":
          this.ImportProduct();
          break;
        case "DeletData":
          this.DeleteData();
          break;
      }
    },
    OpenTransferItem() {
      var vm = this;
      DataService["a" /* default */].CheckPrivilege(this.privilegeParams + 'TransferItem').then(response => {
        if (response.data) {
          window.location.href = "/AssetCatalog/TransferItem";
        } else {
          this.ShowAlert(this.$t('NotAuthorizedSection'), "failure", true, "Alert");
        }
      });
    },
    ProductTransfer() {
      this.$router.push({
        name: "Transferred Items"
      });
    },
    InTransitProducts() {
      var vm = this;
      DataService["a" /* default */].CheckPrivilege(vm.privilegeParams + 'ViewInTransitItems').then(response => {
        if (response.data) {
          vm.$router.push({
            path: '/AssetCatalog/ViewInTransitItems'
          });
        } else {
          vm.ShowAlert(vm.$t('NotAuthorizedSection'), "failure", true, "Alert");
          vm.$router.push({
            path: '/unauthorized'
          });
        }
      });
    },
    OpenModelAddProduct() {
      var vm = this;
      DataService["a" /* default */].CheckPrivilege(vm.privilegeParams + 'Add').then(response => {
        if (response.data) {
          vm.FromPage = 'ProductListing';
          vm.popupCondition = "";
          vm.ShowAddProduct = true;
        } else {
          vm.ShowAlert(vm.$t('NotAuthorizedSection'), "failure", true, "Alert");
        }
      });
    },
    OpenCheckAvailablity() {
      var vm = this;
      DataService["a" /* default */].CheckPrivilege(vm.privilegeParams + 'CheckProductAvailability').then(response => {
        if (response.data) {
          vm.ShowCheckAvailablity = true;
        } else {
          vm.ShowAlert(vm.$t('NotAuthorizedSection'), "failure", true, "Alert");
        }
      });
    },
    RelatedInformation() {
      this.$router.push({
        name: 'RelatedInformation'
      });
    },
    movetodepreciationlist: function () {
      this.$router.push({
        name: "Depreciation"
      });
    },
    MovetoTransferredList: function () {
      this.$router.push({
        name: "TransferredItemsList"
      });
    },
    ImportProduct: function () {
      var vm = this;
      if (vm.UserType == 'CA') {
        DataService["a" /* default */].CheckPrivilege(vm.privilegeParams + 'ImportAssetItem').then(response => {
          if (response.data) {
            vm.$router.push({
              name: "ImportAssetitem"
            });
          } else {
            vm.ShowAlert(vm.$t('NotAuthorizedSection'), "failure", true, "Alert");
          }
        });
      } else {
        vm.$router.push({
          name: "ImportAssetitem"
        });
      }
    },
    AddRelationShipPopup() {
      DataService["a" /* default */].CheckPrivilege(this.privilegeParams + 'AddRelationship').then(response => {
        if (response.data == true) {
          this.IsShowRelation = true;
        } else {
          this.ShowAlert(this.$t('NotAuthorizedSection'), "failure", true, "Alert");
        }
      });
    },
    CloseAddRelationShipPopup() {
      var vm = this;
      vm.FetchData();
      vm.IsShowRelation = false;
    },
    OpenClonePopup(Id) {
      var vm = this;
      vm.AssetCatCloneId = Id;
      vm.ShowClonePopup = true;
    },
    OpenViewFilePopup(item) {
      var vm = this;
      DataService["a" /* default */].CheckPrivilege(vm.privilegeParams + 'ViewFiles').then(response => {
        if (response.data) {
          vm.AssetDetails = item;
          vm.ShowViewFilePopup = true;
        } else {
          vm.ShowAlert(vm.$t('NotAuthorizedSection'), "failure", true, "Alert");
        }
      });
    },
    actionButtonClick(callbackfunction, item) {
      var vm = this;
      switch (callbackfunction) {
        case 'ProductList':
          vm.ProductList();
          break;
        case 'OpenClonePopup':
          vm.OpenClonePopup(item.ASSET_CATALOGUE_ID);
          break;
        case 'OpenViewFilePopup':
          vm.OpenViewFilePopup(item);
          break;
      }
    },
    checkboxSetting() {
      $('#DeleteMultiple').addClass('disabled');
      $('.chkItems').change(function () {
        $('#tablelistingdata tbody .chkItems').each(function (index, tr) {
          if ($(this).prop("checked")) {
            $('#DeleteMultiple').removeClass('disabled');
          }
        });
        if ($('#tablelistingdata tbody tr input ').not(':disabled').length == $('#tablelistingdata tbody tr :checked').length) {
          $('#tablelistingdata thead input:checkbox').prop('checked', true);
        } else {
          $('#tablelistingdata thead input:checkbox').prop('checked', false);
        }
      });
    },
    CloseClonePopup() {
      var vm = this;
      vm.ShowClonePopup = false;
    },
    ClosePOPuP(item) {
      var vm = this;
      vm.ShowCheckAvailablity = false;
    },
    CloseRelatedProductsPopup() {
      var vm = this;
      vm.ShowRelatedProducts = false;
    },
    CloseViewFilePopup() {
      var vm = this;
      vm.ShowViewFilePopup = false;
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
      $("#" + s + '  span:first-child').attr("class", SortDir);
    },
    renderActions(row) {
      var self = this;
      let rtnActionArray = [];
      self.listActions.forEach(actionItem => {
        let action = {
          ...actionItem
        };
        switch (action.title) {
          case 'Edit':
            action.isVisible = true;
            break;
          case 'Clone':
            action.isVisible = true;
            break;
          case 'Detail Products History':
            action.isVisible = true;
            break;
          case 'View attached file(s)':
            if (row.FILECOUNT == 0) {
              action.isDisabled = true;
            }
            break;
          default:
            action.isVisible = true;
            break;
        }
        rtnActionArray.push(action);
      });
      return rtnActionArray;
    }
    // GetUserType(){
    //     var vm=this;                
    //     DataService.GetUserType()
    //     .then(function (response) {              
    //         if(response.data!='CA'){
    //             if(vm.listheaderbuttons[8].title =='Import Product'){
    //                 vm.listheaderbuttons[8].isvisible= false;
    //             }                    
    //         }
    //     });        
    // }
  },

  updated: function () {
    this.BindActionButtonEvent();
  }
});
// CONCATENATED MODULE: ./src/views/AssetCatalog/ProductListing.vue?vue&type=script&lang=js&
 /* harmony default export */ var AssetCatalog_ProductListingvue_type_script_lang_js_ = (ProductListingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/AssetCatalog/ProductListing.vue?vue&type=style&index=0&id=b1a53580&prod&lang=css&
var ProductListingvue_type_style_index_0_id_b1a53580_prod_lang_css_ = __webpack_require__("5f61");

// CONCATENATED MODULE: ./src/views/AssetCatalog/ProductListing.vue






/* normalize component */

var ProductListing_component = Object(componentNormalizer["a" /* default */])(
  AssetCatalog_ProductListingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ProductListing = __webpack_exports__["default"] = (ProductListing_component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-360b35a8.js.map