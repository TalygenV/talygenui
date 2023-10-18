(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-3508dbc0"],{

/***/ "1c0f":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("7fc3");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("46f07e7c", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "2f89":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductListing_vue_vue_type_style_index_0_id_04e10fd9_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1c0f");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductListing_vue_vue_type_style_index_0_id_04e10fd9_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductListing_vue_vue_type_style_index_0_id_04e10fd9_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7fc3":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "span#action-list{display:flex;align-items:center}.vue-treeselect__input{border:1px solid #abb5bf;padding:4px 12px}.vue-treeselect__single-value{padding-left:12px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "f9bd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/AddRelationPopup.vue?vue&type=template&id=500d0950&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_c('div', {
    staticClass: "my-popups"
  }, [_c('div', {
    staticClass: "modal d-block"
  }, [_c('div', {
    staticClass: "modal-dialog modal-dialog-centered"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('loader', {
    attrs: {
      "is-visible": _vm.isLoading
    }
  }), _c('div', {
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
              return _vm.searchfilter();
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
    }], null, false, 777179284)
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
            "value": "",
            "disabled": _vm.LocationValueForBarCode
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
    }], null, false, 2709118327)
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
      "LocationValueForBarCode": _vm.LocationValueForBarCode,
      "iselectVal": _vm.iselectVal,
      "txtBarcode": _vm.txtBarcode,
      "txtAssetType": _vm.txtAssetType,
      "LocationValue": _vm.TreeValue,
      "AssetData": _vm.AssetData,
      "FetchData": _vm.FetchData,
      "ClosePopup": _vm.ClosePopup,
      "IsProduct": _vm.IsProduct
    }
  }) : _vm._e()], 1)])], 1)])])])]);
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

// CONCATENATED MODULE: ./src/components/Modal/AddRelationPopup.vue?vue&type=template&id=500d0950&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/AddRelationListing.vue?vue&type=template&id=271da2b0&
var AddRelationListingvue_type_template_id_271da2b0_render = function render() {
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
    }, [_vm._v(" " + _vm._s(index + 1) + " ")]), _c('td', [_vm._v(_vm._s(item.Name))]), _vm.iselectVal == null ? _c('td', {
      staticClass: "text-center"
    }, [_c('select', {
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
  }, [_vm._v("No Record Found")])]) : _vm._e()], 2)])]), _c('div', {
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
  }), _vm._v(_vm._s(_vm.$t('Cancel')))])])])]);
};
var AddRelationListingvue_type_template_id_271da2b0_staticRenderFns = [function () {
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

// CONCATENATED MODULE: ./src/components/Modal/AddRelationListing.vue?vue&type=template&id=271da2b0&

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
    debugger;
    this.NoRecordLength = this.ProductData.length;
    this.UniqueItemData1 = this.UniqueData;
  },
  updated() {
    debugger;
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
          Name: item.Name,
          AssetCatalogueId: item.AssetCatalogueId,
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
      debugger;
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
      const index = vm.ProductData.findIndex(x => x.count === value);
      if (index !== -1) {
        vm.ProductData.splice(index, 1);
        // this.$parent.ClearhdnIdsOnChange();
      }

      return vm.ShowAlert(vm.$t("Item has been deleted Successfully "), "success", vm.$t("Alert"));
    },
    SubmitData: function () {
      var vm = this;
      let obj = {};
      if (this.LocationValueForBarCode == "") {
        if (vm.Relations.length == 0) {
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
            this.ClosePopup();
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
  AddRelationListingvue_type_template_id_271da2b0_render,
  AddRelationListingvue_type_template_id_271da2b0_staticRenderFns,
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
      txtAssetType: '',
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
      IsProduct: 'ProductName'
    };
  },
  created: function () {
    var vm = this;
    vm.searchByProduct('barcode');
    vm.GetLocationByCompanyId();
  },
  methods: {
    searchByProduct: function (val) {
      debugger;
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
      debugger;
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
    BindItemTypeByUserId: function (ths) {
      var vm = this;
      var url = `id=&isView=&barcode=&assetType=&assetUniqueId=&selfCheckout=&reqFrom=addAssetRelationShip&isFor=&isuniqueSearch=&issueTo=&assignedFrom=&assignedTill=&startTime=&endTime=&locationId=${vm.TreeValue}&RFID=&pageSize=&pageNum=&assignedFromDateTime=&assignedTillDateTime=&uniqueIds=&catalogueIds=`;
      DataService["a" /* default */].GetCompanyAssestCatalogsDetalis(url).then(response => {
        vm.AssetTypeData = response.data.Result;
      });
      vm.GetAssetUniqueData();
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
    searchfilter: function () {
      var vm = this;
      vm.isLoading = true;
      var url = `id=&isView=1&barcode=${this.txtBarcode}&assetType=&assetUniqueId=&selfCheckout=&reqFrom=addAssetRelationShip&isFor=search&isuniqueSearch=&issueTo=&assignedFrom=&assignedTill=&&startTime=&endTime=&locationId=&RFID=&pageSize=&pageNum=&assignedFromDateTime=&assignedTillDateTime=&uniqueIds=&catalogueIds=`;
      DataService["a" /* default */].GetCompanyAssestCatalogsDetalis(url).then(response => {
        if (response.data[0] != null) {
          vm.LocationName = response.data[0].LocationName;
          vm.LocationValueForBarCode = response.data[0].LocationId;
          vm.isLoading = false;
        } else {
          vm.isLoading = false;
        }
      });
      vm.isLoading = false;
    },
    SearchAssetByBarCode() {
      var vm = this;
      vm.isuniqueSearch = 'yes';
      vm.isLoading = true;
      var url = `id=&isView=1&barcode=${vm.txtBarcode}&assetType=&assetUniqueId=&selfCheckout=&reqFrom=addAssetRelationShip&isFor=search&isuniqueSearch=${vm.isuniqueSearch}&issueTo=&assignedFrom=&assignedTill=&&startTime=&endTime=&locationId=${vm.LocationValueForBarCode}&RFID=&pageSize=&pageNum=&assignedFromDateTime=&assignedTillDateTime=&uniqueIds=&catalogueIds=`;
      vm.$refs.ProductSearch.validate().then(result => {
        if (result) {
          DataService["a" /* default */].GetCompanyAssestCatalogsDetalis(url).then(response => {
            if (response.data.length > 0) {
              vm.isLoading = false;
              vm.searchResult = true;
              vm.ProductData = response.data;
              let isValidation = false;
              let count = 1;
              vm.ProductData.map(ele => {
                ele.isValidation = isValidation;
                ele.count = count;
              });
            } else {
              vm.searchResult = true;
              vm.NoRecordLength = 0;
              vm.ProductData = [];
              vm.isLoading = false;
            }
          });
          vm.GetAssetUniqueData();
        } else {
          return vm.isLoading = false;
        }
      });
    },
    Filterditems: async function () {
      let vm = this;
      vm.filterRecodes = [];
      if (vm.assetUniqueItem !== "") {
        await vm.GetAssetUniqueData();
        const searchTerm = vm.assetUniqueItem.toLowerCase();
        vm.filterRecodes = vm.UniqueItemData.filter(x => x.Name.toLowerCase().includes(searchTerm));
        vm.UniqueItemData = vm.filterRecodes;
        vm.IsDDLShowHide = true;
      } else {
        vm.IsDDLShowHide = false;
      }
    },
    GetAssetUniqueData: async function () {
      var vm = this;
      let url = '';
      vm.UniqueItemData = [];
      vm.isLoading = true;
      if (vm.LocationValueForBarCode == null || vm.LocationValueForBarCode == '') {
        url = `assetCatalogId=&name=&issueTo=&locationId=${vm.TreeValue}&requestFrom=addAssetRelationShip&assetType=`;
      } else {
        url = `assetCatalogId=&name=&issueTo=&locationId=${vm.LocationValueForBarCode}&requestFrom=addAssetRelationShip&assetType=`;
      }
      await DataService["a" /* default */].GetUniqueAssetItems(url).then(function (response) {
        vm.UniqueItemData = response.data;
        vm.SuniqueItemData = response.data;
      });
      vm.isLoading = false;
    },
    SearchAssetByProduct: function () {
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
      } else if (vm.iselectVal != '') {
        vm.UniqueItemData.forEach(item => {
          if (item.Value != vm.iselectVal) {
            vm.UniqueData.push(item);
          }
        });
      }
      if (vm.iselectVal == null) {
        url = `id=${vm.txtAssetType}&isView=1&barcode=&assetType=&assetUniqueId=&selfCheckout=&reqFrom=addAssetRelationShip&isFor=search&isuniqueSearch=no&issueTo=&assignedFrom=&assignedTill=&&startTime=&endTime=&locationId=${vm.TreeValue}&RFID=&pageSize=&pageNum=&assignedFromDateTime=&assignedTillDateTime=&uniqueIds=&catalogueIds=${vm.txtAssetType}`;
      } else {
        vm.ProductData = [];
        url = `id=&isView=1&barcode=&assetType=0&assetUniqueId=${vm.iselectVal}&selfCheckout=&reqFrom=addAssetRelationShip&isFor=search&isuniqueSearch=no&issueTo=&assignedFrom=&assignedTill=&&startTime=&endTime=&locationId=${vm.TreeValue}&RFID=&pageSize=&pageNum=&assignedFromDateTime=&assignedTillDateTime=&uniqueIds=${vm.iselectVal}&catalogueIds=`;
      }
      vm.$refs.ProductSearchBar.validate().then(result => {
        if (result) {
          DataService["a" /* default */].GetCompanyAssestCatalogsDetalis(url).then(response => {
            if (response.data.length > 0) {
              vm.searchResult = true;
              vm.isLoading = false;
              vm.ProductData = response.data;
              let isValidation = true;
              let count = 1;
              vm.ProductData.map(ele => {
                ele.isValidation = isValidation;
                ele.count = count;
              });
            } else {
              vm.searchResult = true;
              vm.NoRecordLength = 0;
              vm.isLoading = false;
              vm.ProductData = [];
            }
          });
          if (vm.iselectVal != '') {
            vm.SuniqueItemData.forEach(item => {
              if (item.Value != vm.iselectVal) {
                vm.UniqueData.push(item);
              }
            });
          }
        } else {
          vm.isLoading = false;
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/AddRelationPopup.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_AddRelationPopupvue_type_script_lang_js_ = (AddRelationPopupvue_type_script_lang_js_); 
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetCatalog/ProductListing.vue?vue&type=template&id=04e10fd9&
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
          staticClass: "form-control p-0 border-0 text-center"
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
            "title": "Name"
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
  }) : _vm._e(), _vm.ShowCheckAvailablity ? _c('CheckAvailablity') : _vm._e(), _vm.ShowAddProduct ? _c('AddProduct', {
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

// CONCATENATED MODULE: ./src/views/AssetCatalog/ProductListing.vue?vue&type=template&id=04e10fd9&

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
  checkPrivilege: true
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
  fieldIcon: "fa-user",
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
  fieldIcon: "fa-server",
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
          obj2 = {
            name: item.STATUS,
            value: item.STATUS_ID
          };
          TagData.push(obj2);
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/CloneProduct.vue?vue&type=template&id=4b5dfaaf&
var CloneProductvue_type_template_id_4b5dfaaf_render = function render() {
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
var CloneProductvue_type_template_id_4b5dfaaf_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Modal/CloneProduct.vue?vue&type=template&id=4b5dfaaf&

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
      myObj.ProductName = formfields.Title;
      var dataval = JSON.stringify(myObj);
      DataService["a" /* default */].CloneProductSave(dataval).then(response => {
        if (response != "") {
          if (response.data == 'ALREADYEXIST') {
            vm.ShowAlert(vm.$t("Product name already exist"), "warning", vm.$t('Alert'));
          } else if (response.data == 'CLONE') {
            vm.ShowAlert(vm.$t("Product Clone successfully"), "success", vm.$t('Alert'));
            vm.ClosePopup();
            vm.$parent.FetchData();
          } else {
            vm.ShowAlert(vm.$t("Product Clone failed"), "failure", vm.$t('Alert'));
          }
        } else {
          vm.ShowAlert(vm.$t("Product Clone failed"), "failure", vm.$t('Alert'));
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
  CloneProductvue_type_template_id_4b5dfaaf_render,
  CloneProductvue_type_template_id_4b5dfaaf_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CloneProduct = (component.exports);
// EXTERNAL MODULE: ./src/components/Modal/checkAvailablity.vue + 14 modules
var checkAvailablity = __webpack_require__("55a7");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/RelatedProductsPopup.vue?vue&type=template&id=703af960&
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/ViewattachfilePopup.vue?vue&type=template&id=7a811725&
var ViewattachfilePopupvue_type_template_id_7a811725_render = function render() {
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
    }, [_vm._v(_vm._s(item.ATTACHMENT_NAME))])]), _c('td', [_c('span', {
      staticClass: "text-overflow-dynamic-container w-auto"
    }, [_vm._v(_vm._s(item.IS_FOR_TERMS_CONDITION))])]), _c('td', [_c('span', {
      staticClass: "text-overflow-dynamic-container w-auto"
    }, [_vm._v(_vm._s(_vm.$options.filters.formatDateTimeMMDDYYY(item.TERMS_CONDITION_STARTS_AT)))])]), _c('td', {
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
var ViewattachfilePopupvue_type_template_id_7a811725_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Modal/ViewattachfilePopup.vue?vue&type=template&id=7a811725&

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
          var url = `fileId=${fileId}&catId=${catId}`;
          DataService["a" /* default */].DeleteViewAttachmentFile(url).then(response => {
            vm.confirmR(vm.$t("ConfirmDelete"), true, vm.$t("Delete") + "  " + vm.$t("REPORT_ID"), function () {
              vm.ShowAlert(vm.$t("FileDeleted"), "success", vm.$t('Alert'));
              vm.$parent.FetchData();
            });
            vm.$parent.CloseViewFilePopup();
          });
        } else {
          vm.ShowAlert(vm.$t('NotAuthorizedSection'), "failure", true, "Alert");
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/ViewattachfilePopup.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_ViewattachfilePopupvue_type_script_lang_js_ = (ViewattachfilePopupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Modal/ViewattachfilePopup.vue





/* normalize component */

var ViewattachfilePopup_component = Object(componentNormalizer["a" /* default */])(
  Modal_ViewattachfilePopupvue_type_script_lang_js_,
  ViewattachfilePopupvue_type_template_id_7a811725_render,
  ViewattachfilePopupvue_type_template_id_7a811725_staticRenderFns,
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
      UserType: null
    };
  },
  created() {
    var vueObj = this;
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
    vueObj.CheckPrivilege();
    //vueObj.GetUserType();
  },

  methods: {
    CheckPrivilege() {
      var vueObj = this;
      DataService["a" /* default */].CheckPrivilege(vueObj.privilegeParams + 'Index').then(response => {
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
    FetchData() {
      var vm = this;
      vm.isLoading = true;
      var prams = `pageSize=${vm.PageSize}&pageNum=${vm.PageNumber}&sortBy=${vm.SortBy}&sortExp=${vm.SortExp}&${vm.searchCondition}`;
      DataService["a" /* default */].AssetCatalogueListing(prams).then(response => {
        if (response.data != null) {
          if (response.data.length > 0) {
            vm.ProductData = response.data;
            vm.ProductData.forEach(row => {
              row.rowDetailsUrl = '';
              row.additionalClass = '';
              if (row.IS_SAMPLE_DATA == true) {
                row.additionalClass = 'sample-bar';
              }
              if (row.HAS_UNIUQE_NAMES) {
                row.additionalClass = 'low-bar odd';
              }
            });
            vm.TotalRecords = response.data[0].TOTAL;
            vm.TotalPages = Math.ceil(vm.TotalRecords / vm.PageSize);
            $("[id^='chkAll']").prop("checked", false).removeAttr('checked');
            $('.chkItems:checkbox:checked').prop("checked", false).removeAttr('checked');
            $("[id^='DeleteMultiple']").removeClass('enable').addClass('disabled');
            vm.CurrentPage = vm.PageNumber;
            vm.noRecord = false;
            vm.isLoading = false;
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
          });
          if (val.length > 0) {
            vm.confirmR(vm.$t("ConfirmDelete"), true, vm.$t("Delete") + "  " + vm.$t("ASSET_CATALOGUE_ID"), function () {
              let url = `ids=${val}&tableName=TALYGEN_asset_catalogue&primaryKey=asset_catalogue_id`;
              DataService["a" /* default */].Delete(url).then(response => {
                if (response.data) {
                  $("[id^='chkAll']").prop("checked", false).removeAttr('checked');
                  $('.chkItems:checkbox:checked').prop("checked", false).removeAttr('checked');
                  $("[id^='DeleteMultiple']").removeClass('enable').addClass('disabled');
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
          vm.$router.push({
            path: '/AssetCatalog/TransferItem'
          });
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
// EXTERNAL MODULE: ./src/views/AssetCatalog/ProductListing.vue?vue&type=style&index=0&id=04e10fd9&prod&lang=css&
var ProductListingvue_type_style_index_0_id_04e10fd9_prod_lang_css_ = __webpack_require__("2f89");

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
//# sourceMappingURL=chunk-3508dbc0.js.map