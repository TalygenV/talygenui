(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-6350c3cd"],{

/***/ "36db":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vue-treeselect__control{border:none;height:24px;padding:0}.vue-treeselect--searchable .vue-treeselect__input-container{padding:0!important}.vue-treeselect__placeholder{color:#303030!important}.vue-treeselect__control-arrow{color:#000}.vue-treeselect__placeholder{line-height:24px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "6d9a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNewRequisition_vue_vue_type_style_index_0_id_1599253a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b1c4");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNewRequisition_vue_vue_type_style_index_0_id_1599253a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNewRequisition_vue_vue_type_style_index_0_id_1599253a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "924b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0406b7ca-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetRequisition/AddNewRequisition.vue?vue&type=template&id=1599253a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "main-content"
  }, [_c('div', {
    staticClass: "theme-primary partition"
  }, [_c('span', {
    staticClass: "p-name text-white"
  }, [_vm._v(" " + _vm._s(_vm.$t("NewProductTypeRequest")) + " ")]), _c('span', {
    staticClass: "p-actions float-right"
  }, [_c('a', {
    staticClass: "p-action-btn text-white",
    attrs: {
      "href": "/AssetRequisition/NewAssetRequisitionListing",
      "data-toggle-tooltip": "tooltip",
      "data-original-title": "Back to list"
    }
  }, [_c('i', {
    staticClass: "fa fa-angle-double-left pr-2"
  }), _c('br'), _c('span', [_vm._v(_vm._s(_vm.$t("Backtolist")))])])])]), _c('div', {
    staticClass: "border p-3"
  }, [_c('Form', {
    ref: "AddReqForm"
  }, [_c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-3"
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
            'form-control': true,
            'is-invalid': errors[0]
          },
          attrs: {
            "options": _vm.options,
            "placeholder": "Select Location",
            "show-count": true
          },
          model: {
            value: _vm.LocationValue,
            callback: function ($$v) {
              _vm.LocationValue = $$v;
            },
            expression: "LocationValue"
          }
        }), errors[0] ? _c('span', {
          staticClass: "invalid-feedback d-block",
          attrs: {
            "name": "Location"
          }
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
      }
    }])
  })], 1)]), _c('div', {
    staticClass: "col-lg-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t("ProductName"))), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _c('Field', {
    attrs: {
      "name": "Product Name",
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
            value: _vm.txtproductName,
            expression: "txtproductName"
          }],
          class: {
            'form-control': true,
            'is-invalid': errors[0]
          },
          attrs: {
            "maxlength": "100",
            "type": "text"
          },
          domProps: {
            "value": _vm.txtproductName
          },
          on: {
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.txtproductName = $event.target.value;
            }
          }
        }), errors[0] ? _c('span', {
          staticClass: "invalid-feedback d-block",
          attrs: {
            "name": "Product Name"
          }
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
      }
    }])
  })], 1)]), _c('div', {
    staticClass: "col-lg-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t("ProductType")))]), _c('Field', {
    staticClass: "w-100",
    attrs: {
      "name": "AssetTypeId"
    }
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedProductValue,
      expression: "selectedProductValue"
    }],
    staticClass: "form-control",
    attrs: {
      "name": "AssetTypeId"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.selectedProductValue = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('Select')))]), _vm._l(_vm.AssetType, function (item) {
    return _c('option', {
      key: item,
      domProps: {
        "value": item.ASSETID
      }
    }, [_vm._v(" " + _vm._s(item.ASSETTYPE) + " ")]);
  })], 2)])], 1)]), _c('div', {
    staticClass: "col-lg-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t("RequestedQuantity"))), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _c('Field', {
    attrs: {
      "name": "Quantity",
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
            value: _vm.txtrequestQuantity,
            expression: "txtrequestQuantity"
          }],
          class: {
            'form-control': true,
            'is-invalid': errors[0]
          },
          attrs: {
            "type": "number",
            "min": "1",
            "maxlength": "8"
          },
          domProps: {
            "value": _vm.txtrequestQuantity
          },
          on: {
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.txtrequestQuantity = $event.target.value;
            }
          }
        }), errors[0] ? _c('span', {
          staticClass: "invalid-feedback d-block",
          attrs: {
            "name": "Quantity"
          }
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
      }
    }])
  })], 1)])])]), _c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "Description"
    }
  }, [_vm._v(_vm._s(_vm.$t('Description'))), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _c('Field', {
    staticClass: "w-100",
    attrs: {
      "name": "description",
      "rules": {
        'required': true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        errors
      }) {
        return [_c('textarea', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.txtDescription,
            expression: "txtDescription"
          }],
          staticClass: "form-control",
          class: {
            'form-control': true,
            'is-invalid': errors[0]
          },
          attrs: {
            "name": "description",
            "type": "text",
            "placeholder": "Description",
            "rows": "5",
            "maxlength": "250"
          },
          domProps: {
            "value": _vm.txtDescription
          },
          on: {
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.txtDescription = $event.target.value;
            }
          }
        }), errors[0] ? _c('span', {
          staticClass: "invalid-feedback d-block",
          attrs: {
            "name": "description"
          }
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
      }
    }])
  })], 1)]), _c('AddQuotes', {
    on: {
      "quotes": _vm.quotes
    }
  })], 1), _c('OnlinePurchase', {
    on: {
      "purchases": _vm.purchases
    }
  }), _c('div', {
    staticClass: "col-lg-12 mb-3"
  }, [_c('div', {
    staticClass: "row flex-row-reverse"
  }, [_c('div', {
    staticClass: "col-lg-6 text-right"
  }, [_c('a', {
    staticClass: "btn btn-success pr-2 mr-2",
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": function ($event) {
        return _vm.saveNewRequisition(_vm.values, _vm.errors, 'ACT');
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-save pr-2"
  }), _vm._v(_vm._s(_vm.$t("Save")))]), _c('a', {
    staticClass: "btn btn-success pr-2 mr-2",
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": function ($event) {
        return _vm.saveNewRequisitionAsDraft('Draft');
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-save pr-2"
  }), _vm._v(" Save As Draft ")]), _c('a', {
    staticClass: "btn btn-danger mr-2",
    attrs: {
      "href": "/AssetRequisition/NewAssetRequisitionListing",
      "data-original-title": "Cancel"
    }
  }, [_c('i', {
    staticClass: "fa fa-close pr-2"
  }), _vm._v(_vm._s(_vm.$t("Cancel")))])]), _c('div', {
    staticClass: "col-lg-6 py-2"
  }, [_c('span', {
    staticClass: "mandatory"
  }, [_vm._v(_vm._s(_vm.$t("Required")))])])])])], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/AssetRequisition/AddNewRequisition.vue?vue&type=template&id=1599253a&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0406b7ca-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetRequisition/AddQuotes.vue?vue&type=template&id=45d2b250&
var AddQuotesvue_type_template_id_45d2b250_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_c('loader', {
    attrs: {
      "is-visible": _vm.isLoading
    }
  }), _c('div', {
    staticClass: "col-lg-12 mt-3 px-0"
  }, [_c('div', {
    staticClass: "heading-border mb-2"
  }, [_c('h5', {
    staticClass: "h5"
  }, [_c('span', [_vm._v("Add Quotes")]), _c('small', {
    staticClass: "float-right"
  }, [_c('a', {
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": function ($event) {
        return _vm.addRow();
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-plus pr-1"
  }), _vm._v("Add Row ")])])])]), _c('Form', {
    ref: "AddQuoteForm"
  }, _vm._l(_vm.newDynamicField, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-3 px-0"
    }, [_c('div', {
      staticClass: "row addQuoteRows"
    }, [_c('div', {
      staticClass: "col-lg-2"
    }, [_c('div', {
      staticClass: "form-group"
    }, [_c('label', [_vm._v("Vendor:"), _c('span', {
      staticClass: "text-danger"
    }, [_vm._v("*")])]), _c('div', {
      staticClass: "input-group"
    }, [_c('Field', {
      staticClass: "w-100",
      attrs: {
        "name": 'Vendor' + (index + 1),
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
              value: item.getVenderValue,
              expression: "item.getVenderValue"
            }],
            class: {
              'Vendor form-control w-100': true,
              'is-invalid': errors[0]
            },
            attrs: {
              "name": "Vendor"
            },
            on: {
              "change": function ($event) {
                var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                  return o.selected;
                }).map(function (o) {
                  var val = "_value" in o ? o._value : o.value;
                  return val;
                });
                _vm.$set(item, "getVenderValue", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
              }
            }
          }, [_c('option', {
            attrs: {
              "value": ""
            }
          }, [_vm._v("Select")]), _vm._l(_vm.venderList, function (item) {
            return _c('option', {
              key: item,
              domProps: {
                "value": item.Value
              }
            }, [_vm._v(" " + _vm._s(item.Text) + " ")]);
          })], 2)];
        }
      }], null, true)
    }), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.quoteId,
        expression: "item.quoteId"
      }],
      staticClass: "hdnquoteId",
      attrs: {
        "type": "hidden",
        "value": "0"
      },
      domProps: {
        "value": item.quoteId
      },
      on: {
        "input": function ($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "quoteId", $event.target.value);
        }
      }
    })], 1)])]), _c('div', {
      staticClass: "input-group-append",
      staticStyle: {
        "cursor": "pointer"
      }
    }, [_c('span', {
      staticClass: "input-group-text border-0 bg-transparent p-0 pl-2"
    }, [_c('a', {
      staticClass: "round-icon-small btn-dark theme-primary round-icon-small AddQuoteVendor",
      on: {
        "click": _vm.Addvendor
      }
    }, [_c('i', {
      staticClass: "fa fa-plus pt-7 AddQuoteVendor",
      attrs: {
        "id": "AddQuoteVendor",
        "title": "Add Vendor",
        "onclick": "AddVendor('quote');"
      }
    })])])]), _c('div', {
      staticClass: "col-md-2"
    }, [_c('div', {
      staticClass: "form-group"
    }, [_c('label', [_vm._v("Requested Quantity:"), _c('span', {
      staticClass: "text-danger"
    }, [_vm._v("*")])]), _c('div', {
      staticClass: "input-group"
    }, [_c('Field', {
      attrs: {
        "name": 'RequestQuantity' + (index + 1),
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
              value: item.txtrequestQuantity,
              expression: "item.txtrequestQuantity"
            }],
            class: {
              'RequestQuantity form-control': true,
              'is-invalid': errors[0]
            },
            attrs: {
              "type": "text"
            },
            domProps: {
              "value": item.txtrequestQuantity
            },
            on: {
              "input": function ($event) {
                if ($event.target.composing) return;
                _vm.$set(item, "txtrequestQuantity", $event.target.value);
              }
            }
          })];
        }
      }], null, true)
    })], 1)])]), _c('div', {
      staticClass: "col-md-1"
    }, [_c('div', {
      staticClass: "form-group"
    }, [_c('label', [_vm._v("Currency:"), _c('span', {
      staticClass: "text-danger"
    }, [_vm._v("*")])]), _c('div', {
      staticClass: "input-group"
    }, [_c('Field', {
      staticClass: "w-100",
      attrs: {
        "name": 'Currency' + (index + 1),
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
              value: item.getCurrencyValue,
              expression: "item.getCurrencyValue"
            }],
            class: {
              'Currency form-control w-100': true,
              'is-invalid': errors[0]
            },
            attrs: {
              "name": 'Currency' + (index + 1)
            },
            on: {
              "change": function ($event) {
                var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                  return o.selected;
                }).map(function (o) {
                  var val = "_value" in o ? o._value : o.value;
                  return val;
                });
                _vm.$set(item, "getCurrencyValue", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
              }
            }
          }, [_c('option', {
            attrs: {
              "value": ""
            }
          }, [_vm._v("Select")]), _vm._l(_vm.currencyList, function (item, currencyIndex) {
            return _c('option', {
              key: currencyIndex,
              domProps: {
                "value": item.CurrencyId
              }
            }, [_vm._v(" " + _vm._s(item.Currency) + " ")]);
          })], 2)];
        }
      }], null, true)
    })], 1)])]), _c('div', {
      staticClass: "col-lg-1 pl-0"
    }, [_c('div', {
      staticClass: "form-group"
    }, [_c('label', [_vm._v("Unit Price:"), _c('span', {
      staticClass: "text-danger"
    }, [_vm._v("*")])]), _c('Field', {
      attrs: {
        "name": 'UnitPrice' + (index + 1),
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
              value: item.txtUnitPrice,
              expression: "item.txtUnitPrice"
            }],
            class: {
              'UnitPrice form-control': true,
              'is-invalid': errors[0]
            },
            attrs: {
              "type": "text"
            },
            domProps: {
              "value": item.txtUnitPrice
            },
            on: {
              "keyup": function ($event) {
                return _vm.calculateTotalQuantity(item);
              },
              "input": function ($event) {
                if ($event.target.composing) return;
                _vm.$set(item, "txtUnitPrice", $event.target.value);
              }
            }
          })];
        }
      }], null, true)
    })], 1)]), _c('div', {
      staticClass: "col-lg-1 pl-0"
    }, [_c('div', {
      staticClass: "form-group"
    }, [_c('label', [_vm._v("Total Price:"), _c('span', {
      staticClass: "text-danger"
    }, [_vm._v("*")])]), _c('input', {
      staticClass: "totalPrice form-control",
      attrs: {
        "name": 'totalPrice' + (index + 1),
        "id": 'totalPrice' + (index + 1),
        "type": "text",
        "disabled": ""
      },
      domProps: {
        "value": item.txtTotalPrice
      }
    })])]), _c('div', {
      staticClass: "col-lg-3"
    }, [_c('div', {
      staticClass: "form-group"
    }, [_c('label', [_vm._v("Upload Quote:")]), _c('div', {
      staticClass: "input-group"
    }, [_c('div', {
      staticClass: "input-group"
    }, [_c('div', {
      staticClass: "custom-file"
    }, [_c('input', {
      staticStyle: {
        "position": "absolute",
        "clip": "rect(0px, 0px, 0px, 0px)"
      },
      attrs: {
        "type": "file",
        "name": 'FileSrc' + (index + 1),
        "id": 'flFile' + (index + 1),
        "data-file": "multi",
        "tabindex": "-1"
      },
      on: {
        "change": function ($event) {
          return _vm.setFile($event, index);
        }
      }
    }), _c('div', {
      staticClass: "bootstrap-filestyle input-group"
    }, [_c('input', {
      staticClass: "form-control disabled",
      attrs: {
        "type": "text",
        "disabled": ""
      },
      domProps: {
        "value": item.fileName
      }
    }), _c('div', {
      staticClass: "input-group-append",
      staticStyle: {
        "cursor": "pointer"
      }
    }, [_c('span', {
      staticClass: "group-span-filestyle input-group-btn input-group-text bg-white",
      attrs: {
        "tabindex": "0"
      }
    }, [_c('label', {
      staticClass: "mb-0 font-weight-normal",
      attrs: {
        "title": "Click here to select a file.",
        "for": 'flFile' + (index + 1)
      }
    }, [_vm._v("Choose File")])]), _c('span', {
      staticClass: "input-group-text border-0 bg-transparent p-0 pl-2"
    }, [_c('a', {
      staticClass: "round-icon-small btn-danger-light",
      attrs: {
        "href": "javascript:;",
        "title": "Clear"
      },
      on: {
        "click": function ($event) {
          return _vm.Clear(item.count);
        }
      }
    }, [_c('i', {
      staticClass: "fa fa-undo"
    })]), _c('a', {
      staticClass: "btn btn-danger theme-primary removefield ml-1",
      attrs: {
        "href": "javascript:void;"
      },
      on: {
        "click": function ($event) {
          return _vm.removeRow(item.count);
        }
      }
    }, [_c('i', {
      staticClass: "fa fa-times pt-7",
      attrs: {
        "title": ""
      }
    })])])])])])])])])])])]);
  }), 0), _vm.isShowvendor ? _c('AddVendorPopUp') : _vm._e()], 1)], 1);
};
var AddQuotesvue_type_template_id_45d2b250_staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/AssetRequisition/AddQuotes.vue?vue&type=template&id=45d2b250&

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0406b7ca-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/AddVendorModel.vue?vue&type=template&id=04cbb0c2&
var AddVendorModelvue_type_template_id_04cbb0c2_render = function render() {
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
  }, [_c('div', {
    staticClass: "modal-header"
  }, [_c('h5', {
    staticClass: "modal-title"
  }, [_vm._v(" " + _vm._s(_vm.$t('Add vendor')) + " ")]), _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "title": "Close"
    },
    on: {
      "click": function ($event) {
        return _vm.closePopup();
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-times"
  })])]), _c('div', {
    staticClass: "modal-body"
  }, [_c('dynamic-form', {
    attrs: {
      "lang": "en",
      "buttons": _vm.buttons,
      "schema": _vm.FormSchema
    },
    on: {
      "OnSubmit": _vm.Addvendor
    }
  })], 1)])])])])]);
};
var AddVendorModelvue_type_template_id_04cbb0c2_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Modal/AddVendorModel.vue?vue&type=template&id=04cbb0c2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/AddVendorModel.vue?vue&type=script&lang=js&



/* harmony default export */ var AddVendorModelvue_type_script_lang_js_ = ({
  components: {
    AddQuotes: AddQuotes
  },
  data() {
    return {
      CountryData: [],
      FormSchema: [{
        layoutType: "double",
        Data: [{
          astype: "TextField",
          label: this.$t("Vendor"),
          name: "Vendor",
          value: '',
          placeholder: "",
          validationRules: {
            "required": true
          }
        }, {
          astype: "TextField",
          label: this.$t('Contact Person'),
          name: "ContactPerson",
          value: "",
          validationRules: {
            "required": false
          },
          placeholder: ""
        }]
      }, {
        layoutType: "Single",
        Data: [{
          astype: "TextAreaField",
          label: this.$t("Description"),
          name: "Description",
          value: '',
          placeholder: "",
          validationRules: {
            "required": false
          }
        }]
      }, {
        layoutType: "double",
        group_name: 'Product Type',
        Data: [{
          astype: "TextField",
          label: this.$t("Street"),
          name: "Street",
          value: '',
          placeholder: "",
          validationRules: {
            "required": false
          }
        }, {
          astype: "TextField",
          label: this.$t('State'),
          name: "State",
          value: "",
          validationRules: {
            "required": false
          },
          placeholder: ""
        }]
      }, {
        layoutType: "double",
        Data: [{
          astype: "TextField",
          label: this.$t("City"),
          name: "City",
          value: '',
          placeholder: "",
          validationRules: {
            "required": false
          }
        }, {
          astype: "SelectField",
          label: this.$t('Country'),
          name: "Country",
          value: "",
          placeholder: "",
          validationRules: {
            "required": false
          },
          config: {
            options: []
          }
        }]
      }, {
        layoutType: "double",
        Data: [{
          astype: "TextField",
          label: this.$t("Zip code"),
          name: "Zipcode",
          value: '',
          placeholder: "",
          validationRules: {
            "required": false
          }
        }, {
          astype: "TextField",
          label: this.$t('Phone Number'),
          name: "Phonenumber",
          value: "",
          validationRules: {
            "required": false
          },
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
        onClick: this.closePopup
      }]
    };
  },
  created() {
    this.GetCountryDDL();
  },
  methods: {
    Addvendor: function (formfields) {
      debugger;
      var vm = this;
      var jsonobj = {
        Vendor: formfields.Vendor,
        vendorOwner: formfields.ContactPerson,
        Description: formfields.Description,
        Street: formfields.Street,
        state: formfields.State,
        city: formfields.City,
        country: formfields.Country,
        zipcode: formfields.Zipcode,
        phone_number: formfields.Phonenumber
      };
      var poststring = JSON.stringify(jsonobj);
      DataService["a" /* default */].Addvendor(poststring).then(response => {
        debugger;
        if (response.data.data.status == 'insert') {
          vm.ShowAlert(vm.$t('AddedSuccessvendor', [vm.$t('Group_Item')]), "success", true, vm.$t("Alert"));
          vm.closePopup();
        } else {
          vm.ShowAlert(vm.$t("Vendorexist"), "failure", true, vm.$t('Alert'));
          vm.closePopup();
        }
        vm.$parent.getVendorlist();
      });
    },
    closePopup() {
      var vm = this;
      vm.$parent.CloseAddVendorModel();
    },
    GetCountryDDL: function () {
      debugger;
      var url = `moduleName=CRM&type=COUNTRIES`;
      DataService["a" /* default */].GetCountryDDL(url).then(result => {
        debugger;
        this.CountryData = result.data.DATA;
        //var obj={};
        this.CountryData.forEach(item => {
          var obj = {
            name: item.name,
            value: item.value
          };
          this.FormSchema[3].Data[1].config.options.push(obj);
        });
        debugger;
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/AddVendorModel.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_AddVendorModelvue_type_script_lang_js_ = (AddVendorModelvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Modal/AddVendorModel.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Modal_AddVendorModelvue_type_script_lang_js_,
  AddVendorModelvue_type_template_id_04cbb0c2_render,
  AddVendorModelvue_type_template_id_04cbb0c2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AddVendorModel = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetRequisition/AddQuotes.vue?vue&type=script&lang=js&



/* harmony default export */ var AddQuotesvue_type_script_lang_js_ = ({
  components: {
    AddVendorPopUp: AddVendorModel
  },
  data() {
    return {
      newDynamicField: [{
        quoteId: 0,
        getVenderValue: '',
        txtrequestQuantity: '',
        getCurrencyValue: '',
        txtUnitPrice: '',
        txtTotalPrice: '',
        uploadQuote: '',
        fileName: '',
        count: 1
      }],
      quotes: {},
      specificCount: null,
      venderList: [],
      currencyList: [],
      purchases: [],
      isShowvendor: false,
      isLoading: false
    };
  },
  created() {
    var vm = this;
    //debugger
    vm.getVendorlist();
    vm.getCurrencylist();
    if (this.$route.params.reqForm == 'ProductTypeList') {
      this.productItem = this.$route.params.items;
      if (this.productItem != null && this.productItem != '' && this.productItem != 'undefined') {
        // debugger         
        vm.UpdateRequisition(this.productItem.AssetRequisitionId);
      }
    }
  },
  methods: {
    UpdateRequisition: async function (id) {
      // debugger
      var vm = this;
      vm.isLoading = true;
      var params = `id=${id}`;
      await DataService["a" /* default */].UpdateRequisition(params).then(response => {
        //debugger
        if (response.data != null) {
          vm.newDynamicField = [];
          JSON.parse(response.data.QuoteNewRequisitionList).forEach(value => {
            var obj = {
              quoteId: value.quoteId,
              getVenderValue: value.vendorId,
              txtrequestQuantity: value.quantity,
              getCurrencyValue: value.currencyId,
              txtUnitPrice: value.price,
              txtTotalPrice: value.totalPrice,
              uploadQuote: value.quote,
              fileName: value.quote_file_name,
              count: 1
            };
            vm.newDynamicField.push(obj);
          });
          vm.isLoading = false;
        }
        vm.isLoading = false;
      });
    },
    CloseAddVendorModel() {
      var vm = this;
      vm.isShowvendor = false;
    },
    Addvendor() {
      this.isShowvendor = true;
    },
    setFile: function (e, item) {
      var vm = this;
      //debugger
      vm.isLoading = true;
      var formData = new FormData();
      formData.append("Files", e.target.files[0]);
      vm.newDynamicField.forEach(element => {
        const specificRecord = vm.newDynamicField.find(x => x.count === item + 1);
        if (specificRecord != null) {
          DataService["a" /* default */].UploadNewAssetTypeQuoteFiles(formData).then(response => {
            if (response.data != null) {
              vm.isLoading = false;
              specificRecord.uploadQuote = response.data.filepath;
              specificRecord.fileName = response.data.fileName;
            } else {
              vm.isLoading = false;
              vm.ShowAlert(vm.$t("Something Went Wrong"), "failure", vm.$t('Alert'));
            }
          });
          vm.quotes = {
            quoteId: 0,
            quoteVendor: specificRecord.getVenderValue,
            quoteQuantity: specificRecord.txtrequestQuantity,
            quoteAmount: specificRecord.txtUnitPrice,
            quotePrice: specificRecord.getCurrencyValue,
            quoteTotalPrice: specificRecord.txtTotalPrice,
            uploadQuote: specificRecord.uploadQuote,
            fileName: specificRecord.fileName
          };
        }
      });
      vm.$emit('quotes', vm.quotes);
    },
    Clear(count) {
      var vm = this;
      vm.newDynamicField.forEach(element => {
        if (element.count == count) {
          element.fileName = '';
        }
      });
    },
    getVendorlist() {
      DataService["a" /* default */].GetCrmVendor().then(response => {
        if (response.data != null) {
          this.venderList = response.data;
        }
      });
    },
    getCurrencylist() {
      DataService["a" /* default */].GetCurrency().then(response => {
        if (response.data != null) {
          this.currencyList = response.data;
        }
      });
    },
    calculateTotalQuantity(item) {
      var vm = this;
      vm.specificCount = item.count;
      vm.newDynamicField.forEach(element => {
        if (element.count == vm.specificCount) {
          element.txtTotalPrice = item.txtrequestQuantity * item.txtUnitPrice;
        }
      });
      const specificRecord = vm.newDynamicField.find(x => x.count == vm.specificCount);
      if (specificRecord != null) {
        vm.quotes = {
          quoteId: 0,
          quoteVendor: specificRecord.getVenderValue,
          quoteQuantity: specificRecord.txtrequestQuantity,
          quoteAmount: specificRecord.txtUnitPrice,
          quotePrice: specificRecord.getCurrencyValue,
          quoteTotalPrice: specificRecord.txtTotalPrice,
          uploadQuote: specificRecord.uploadQuote,
          fileName: specificRecord.fileName
        };
      }
      vm.$emit('quotes', vm.quotes);
    },
    addRow() {
      var vm = this;
      vm.quotes = {};
      vm.$refs.AddQuoteForm.validate().then(result => {
        if (result) {
          let singleDynamicRow = {
            getVenderValue: '',
            txtrequestQuantity: '',
            getCurrencyValue: '',
            txtUnitPrice: '',
            txtTotalPrice: '',
            uploadQuote: '',
            fileName: '',
            count: 1
          };
          singleDynamicRow.count = vm.newDynamicField.length + 1;
          vm.newDynamicField.push(singleDynamicRow);
        } else {
          vm.ShowAlert(vm.$t("Please correct the highlighted errors"), "failure", vm.$t('Alert'));
        }
      });
    },
    removeRow(event) {
      var vm = this;
      const index = vm.newDynamicField.findIndex(x => x.count === event);
      if (index !== -1) {
        vm.newDynamicField.splice(index, 1);
      }
      return true;
    }
  }
});
// CONCATENATED MODULE: ./src/views/AssetRequisition/AddQuotes.vue?vue&type=script&lang=js&
 /* harmony default export */ var AssetRequisition_AddQuotesvue_type_script_lang_js_ = (AddQuotesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/AssetRequisition/AddQuotes.vue





/* normalize component */

var AddQuotes_component = Object(componentNormalizer["a" /* default */])(
  AssetRequisition_AddQuotesvue_type_script_lang_js_,
  AddQuotesvue_type_template_id_45d2b250_render,
  AddQuotesvue_type_template_id_45d2b250_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AddQuotes = (AddQuotes_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0406b7ca-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetRequisition/OnlinePurchase.vue?vue&type=template&id=0e4dd12f&
var OnlinePurchasevue_type_template_id_0e4dd12f_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-lg-12 mt-3 px-0"
  }, [_c('div', {
    staticClass: "heading-border mb-2"
  }, [_c('h5', {
    staticClass: "h5"
  }, [_c('span', {
    attrs: {
      "id": "TabHeading2"
    }
  }, [_vm._v("Online Purchase")]), _c('small', {
    staticClass: "float-right"
  }, [_c('a', {
    staticClass: "addPurchaseLinkRows",
    attrs: {
      "href": "javascript:;",
      "title": ""
    },
    on: {
      "click": _vm.showRow
    }
  }, [_c('i', {
    staticClass: "fa fa-plus pr-1"
  }), _vm._v("Add Row ")])])])]), _c('Form', {
    ref: "AddOnlineForm"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isVisible,
      expression: "isVisible"
    }],
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-3"
  }, _vm._l(_vm.newDynamicField, function (item, id) {
    return _c('div', {
      key: id.count,
      staticClass: "row addOnlinePurchaseRows"
    }, [_c('div', {
      staticClass: "col-lg-2"
    }, [_c('div', {
      staticClass: "form-group"
    }, [_c('label', [_vm._v("Vendor:"), _c('span', {
      staticClass: "text-danger"
    }, [_vm._v("*")])]), _c('div', {
      staticClass: "input-group"
    }, [_c('Field', {
      staticClass: "w-100",
      attrs: {
        "name": 'Vendor' + (_vm.index + 1),
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
              value: item.purchase_vendor,
              expression: "item.purchase_vendor"
            }],
            class: {
              'Vendor form-control w-100': true,
              'is-invalid': errors[0]
            },
            attrs: {
              "name": "Vendor"
            },
            on: {
              "change": function ($event) {
                var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                  return o.selected;
                }).map(function (o) {
                  var val = "_value" in o ? o._value : o.value;
                  return val;
                });
                _vm.$set(item, "purchase_vendor", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
              }
            }
          }, [_c('option', {
            attrs: {
              "value": ""
            }
          }, [_vm._v("Select")]), _vm._l(_vm.venderList, function (item) {
            return _c('option', {
              key: item,
              domProps: {
                "value": item.Value
              }
            }, [_vm._v(" " + _vm._s(item.Text) + " ")]);
          })], 2), _c('input', {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: item.purchase_id,
              expression: "item.purchase_id"
            }],
            staticClass: "hdnpurchase_id",
            attrs: {
              "type": "hidden",
              "value": "0"
            },
            domProps: {
              "value": item.purchase_id
            },
            on: {
              "input": function ($event) {
                if ($event.target.composing) return;
                _vm.$set(item, "purchase_id", $event.target.value);
              }
            }
          })];
        }
      }], null, true)
    })], 1)])]), _c('div', {
      staticClass: "input-group-append",
      staticStyle: {
        "cursor": "pointer"
      }
    }, [_c('span', {
      staticClass: "input-group-text border-0 bg-transparent p-0 pl-2"
    }, [_c('a', {
      staticClass: "round-icon-small btn-dark theme-primary round-icon-small AddQuoteVendor",
      on: {
        "click": _vm.Addvendor
      }
    }, [_c('i', {
      staticClass: "fa fa-plus pt-7 AddQuoteVendor",
      attrs: {
        "id": "AddQuoteVendor",
        "title": "Add Vendor",
        "onclick": "AddVendor('quote');"
      }
    })])])]), _c('div', {
      staticClass: "col-lg-2"
    }, [_c('div', {
      staticClass: "form-group"
    }, [_c('label', [_vm._v("Requested Quantity:"), _c('span', {
      staticClass: "text-danger"
    }, [_vm._v("*")])]), _c('div', {
      staticClass: "input-group"
    }, [_c('Field', {
      attrs: {
        "name": "Request Quantity",
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
              value: item.txtpurchaseQuantity,
              expression: "item.txtpurchaseQuantity"
            }],
            class: {
              'RequestQuantity form-control': true,
              'is-invalid': errors[0]
            },
            attrs: {
              "type": "text"
            },
            domProps: {
              "value": item.txtpurchaseQuantity
            },
            on: {
              "input": function ($event) {
                if ($event.target.composing) return;
                _vm.$set(item, "txtpurchaseQuantity", $event.target.value);
              }
            }
          })];
        }
      }], null, true)
    })], 1)])]), _c('div', {
      staticClass: "col-md-1"
    }, [_c('div', {
      staticClass: "form-group"
    }, [_c('label', [_vm._v("Currency:"), _c('span', {
      staticClass: "text-danger"
    }, [_vm._v("*")])]), _c('div', {
      staticClass: "input-group"
    }, [_c('Field', {
      staticClass: "w-100",
      attrs: {
        "name": "Currency",
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
              value: item.getCurrencyValue,
              expression: "item.getCurrencyValue"
            }],
            class: {
              'Currency form-control w-100': true,
              'is-invalid': errors[0]
            },
            attrs: {
              "name": "Currency"
            },
            on: {
              "change": function ($event) {
                var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                  return o.selected;
                }).map(function (o) {
                  var val = "_value" in o ? o._value : o.value;
                  return val;
                });
                _vm.$set(item, "getCurrencyValue", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
              }
            }
          }, [_c('option', {
            attrs: {
              "value": ""
            }
          }, [_vm._v("Select")]), _vm._l(_vm.currencyList, function (item, currencyIndex) {
            return _c('option', {
              key: currencyIndex,
              domProps: {
                "value": item.CurrencyId
              }
            }, [_vm._v(" " + _vm._s(item.Currency) + " ")]);
          })], 2)];
        }
      }], null, true)
    })], 1)])]), _c('div', {
      staticClass: "col-lg-1 pl-0"
    }, [_c('div', {
      staticClass: "form-group"
    }, [_c('label', [_vm._v("Unit Price:"), _c('span', {
      staticClass: "text-danger"
    }, [_vm._v("*")])]), _c('Field', {
      attrs: {
        "name": "Unit Price",
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
              value: item.priceAmount,
              expression: "item.priceAmount"
            }],
            class: {
              'UnitPrice form-control': true,
              'is-invalid': errors[0]
            },
            attrs: {
              "type": "text"
            },
            domProps: {
              "value": item.priceAmount
            },
            on: {
              "keyup": function ($event) {
                return _vm.calculateTotalQuantity(item);
              },
              "input": function ($event) {
                if ($event.target.composing) return;
                _vm.$set(item, "priceAmount", $event.target.value);
              }
            }
          })];
        }
      }], null, true)
    })], 1)]), _c('div', {
      staticClass: "col-lg-1 pl-0"
    }, [_c('div', {
      staticClass: "form-group"
    }, [_c('label', [_vm._v("Total Price:"), _c('span', {
      staticClass: "text-danger"
    }, [_vm._v("*")])]), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.purchasePrice,
        expression: "item.purchasePrice"
      }],
      staticClass: "totalPrice form-control TotalPrice",
      attrs: {
        "type": "text",
        "disabled": ""
      },
      domProps: {
        "value": item.purchasePrice
      },
      on: {
        "input": function ($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "purchasePrice", $event.target.value);
        }
      }
    })])]), _vm._l(item.purchaseDynamicField, function (purchase, index) {
      return _c('div', {
        key: 'A' + index,
        staticClass: "purchaseDynamicField col-lg-3"
      }, [_c('div', {
        staticClass: "form-group"
      }, [_c('label', [_vm._v("Purchase Link"), _c('span', {
        staticClass: "text-danger"
      })]), _c('div', {
        staticClass: "input-group"
      }, [_c('input', {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: purchase.purchase_link,
          expression: "purchase.purchase_link"
        }],
        staticClass: "purchaseLink form-control",
        attrs: {
          "type": "text",
          "name": "purchaseLink"
        },
        domProps: {
          "value": purchase.purchase_link
        },
        on: {
          "keyup": function ($event) {
            return _vm.purchaseUrlData(item, purchase);
          },
          "input": function ($event) {
            if ($event.target.composing) return;
            _vm.$set(purchase, "purchase_link", $event.target.value);
          }
        }
      }), _c('input', {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: purchase.purchase_link_id,
          expression: "purchase.purchase_link_id"
        }],
        staticClass: "purchase_link_id",
        attrs: {
          "type": "hidden"
        },
        domProps: {
          "value": purchase.purchase_link_id
        },
        on: {
          "input": function ($event) {
            if ($event.target.composing) return;
            _vm.$set(purchase, "purchase_link_id", $event.target.value);
          }
        }
      }), _c('div', {
        staticClass: "input-group-append",
        staticStyle: {
          "cursor": "pointer"
        }
      }, [_c('span', {
        staticClass: "group-span-filestyle input-group-btn input-group-text bg-grey"
      }, [_c('a', {
        staticClass: "mb-0 font-weight-normal",
        attrs: {
          "title": "Click here to copy link."
        }
      }, [_c('i', {
        staticClass: "fa fa-copy"
      })])]), _c('span', {
        staticClass: "input-group-text border-0 bg-transparent p-0 pl-2"
      }, [0 == parseInt(index) ? _c('a', {
        staticClass: "round-icon-small btn-dark theme-primary round-icon-small",
        attrs: {
          "href": "javascript:void(0);"
        },
        on: {
          "click": function ($event) {
            return _vm.addLinkRow(item.count);
          }
        }
      }, [_c('i', {
        staticClass: "fa fa-plus pt-7"
      })]) : _vm._e(), _vm._v("   "), _c('a', {
        staticClass: "btn btn-danger theme-primary removefield",
        attrs: {
          "href": "javascript:void;"
        },
        on: {
          "click": function ($event) {
            return _vm.removeRow(item, purchase);
          }
        }
      }, [_c('i', {
        staticClass: "fa fa-times pt-7",
        attrs: {
          "title": ""
        }
      })])])])])])]);
    })], 2);
  }), 0)]), _vm.isShowvendor ? _c('AddVendorPopUp') : _vm._e()], 1);
};
var OnlinePurchasevue_type_template_id_0e4dd12f_staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/AssetRequisition/OnlinePurchase.vue?vue&type=template&id=0e4dd12f&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetRequisition/OnlinePurchase.vue?vue&type=script&lang=js&



/* harmony default export */ var OnlinePurchasevue_type_script_lang_js_ = ({
  components: {
    AddVendorPopUp: AddVendorModel
  },
  data() {
    return {
      isShowvendor: false,
      isVisible: false,
      newDynamicField: [{
        purchase_id: 0,
        purchase_vendor: '',
        txtpurchaseQuantity: '',
        getCurrencyValue: '',
        purchasePrice: '',
        priceAmount: '',
        count: 1,
        purchaseDynamicField: [{
          purchase_link_id: 0,
          purchase_link: '',
          pcount: 1
        }]
      }],
      specificCount: null,
      venderList: [],
      currencyList: [],
      purchaseData: {}
    };
  },
  created() {
    //debugger
    var vm = this;
    vm.getVendorlist();
    vm.getCurrencylist();
    if (this.$route.params.reqForm == 'ProductTypeList') {
      this.productItem = this.$route.params.items;
      if (this.productItem != null && this.productItem != '' && this.productItem != 'undefined') {
        //debugger         
        vm.UpdateRequisition(this.productItem.AssetRequisitionId);
      }
    }
  },
  methods: {
    UpdateRequisition: async function (id) {
      //debugger
      var vm = this;
      vm.isLoading = true;
      var params = `id=${id}`;
      await DataService["a" /* default */].UpdateRequisition(params).then(response => {
        //debugger
        if (response.data != null) {
          vm.newDynamicField = [];
          JSON.parse(response.data.PurchaseNewRequisitionList).forEach(value => {
            var obj = {
              purchase_id: 0,
              purchase_vendor: '',
              txtpurchaseQuantity: '',
              getCurrencyValue: '',
              purchasePrice: '',
              priceAmount: '',
              count: 1,
              purchaseDynamicField: []
            };
            obj.purchase_id = value.purchaseId;
            obj.purchase_vendor = value.vendorId;
            obj.txtpurchaseQuantity = value.quantity;
            obj.getCurrencyValue = value.currencyId;
            obj.purchasePrice = value.totalPrice;
            obj.priceAmount = value.price;
            obj.count = 1;
            JSON.parse(value.links).forEach(link => {
              obj.purchaseDynamicField.push({
                purchase_link_id: link.purchaseLinkId,
                purchase_link: link.purchaseLink
              });
            });
            vm.newDynamicField.push(obj);
            vm.isVisible = true;
          });
          vm.isLoading = false;
        }
        vm.isLoading = false;
      });
    },
    getVendorlist() {
      DataService["a" /* default */].GetCrmVendor().then(response => {
        if (response.data != null) {
          this.venderList = response.data;
        }
      });
    },
    getCurrencylist() {
      DataService["a" /* default */].GetCurrency().then(response => {
        if (response.data != null) {
          this.currencyList = response.data;
        }
      });
    },
    Addvendor() {
      this.isShowvendor = true;
    },
    CloseAddVendorModel() {
      var vm = this;
      vm.isShowvendor = false;
    },
    calculateTotalQuantity(item) {
      var vm = this;
      vm.specificCount = item.count;
      vm.newDynamicField.forEach(element => {
        if (element.count == vm.specificCount) {
          element.purchasePrice = item.txtpurchaseQuantity * item.priceAmount;
        }
      });
      const getRecordInformation = vm.newDynamicField.find(x => x.count === vm.specificCount);
      if (getRecordInformation != null) {
        vm.purchaseData = {
          purchase_id: 0,
          purchase_vendor: getRecordInformation.purchase_vendor,
          purchaseQuantity: getRecordInformation.txtpurchaseQuantity,
          purchasePrice: getRecordInformation.getCurrencyValue,
          ppriceAmount: getRecordInformation.priceAmount,
          purchaseTotalPrice: getRecordInformation.purchasePrice,
          purchaselinks: getRecordInformation.purchaseDynamicField
        };
        vm.$emit('purchases', vm.purchaseData);
      }
    },
    purchaseUrlData(item, purchase) {
      var vm = this;
      const getRecordInformation = vm.newDynamicField.find(x => x.count === item.count);
      if (getRecordInformation != null) {
        vm.purchaseData = {
          purchase_id: 0,
          purchase_vendor: getRecordInformation.purchase_vendor,
          purchaseQuantity: getRecordInformation.txtpurchaseQuantity,
          purchasePrice: getRecordInformation.getCurrencyValue,
          ppriceAmount: getRecordInformation.priceAmount,
          purchaseTotalPrice: getRecordInformation.purchasePrice,
          purchaselinks: getRecordInformation.purchaseDynamicField
        };
        vm.$emit('purchases', vm.purchaseData);
      }
    },
    showRow() {
      debugger;
      var vm = this;
      vm.$refs.AddOnlineForm.validate().then(result => {
        if (vm.isVisible == false) {
          return vm.isVisible = true;
        }
        if (result) {
          let singleDynamicRow = {
            purchase_vendor: '',
            txtpurchaseQuantity: '',
            getCurrencyValue: '',
            purchasePrice: '',
            priceAmount: '',
            count: 1,
            purchaseDynamicField: [{
              purchase_link_id: 0,
              purchase_link: '',
              pcount: 1
            }]
          };
          singleDynamicRow.count = vm.newDynamicField.length + 1;
          vm.newDynamicField.push(singleDynamicRow);
        } else {
          vm.ShowAlert(vm.$t("Please correct the highlighted errors"), "failure", vm.$t('Alert'));
        }
      });
    },
    addLinkRow(count) {
      debugger;
      var vm = this;
      vm.specificCount = count;
      vm.isVisible = true;
      let purchase = {};
      const getRecordInformation = vm.newDynamicField.find(x => x.count === vm.specificCount);
      if (getRecordInformation != null) {
        purchase = {
          purchase_link_id: 0,
          purchase_link: '',
          pcount: vm.newDynamicField[0].purchaseDynamicField.length + 1
        };
        vm.newDynamicField.forEach(ele => {
          if (ele.count == vm.specificCount) {
            ele.purchaseDynamicField.push(purchase);
          }
        });
      }
      vm.purchaseData = {
        purchase_id: 0,
        purchase_vendor: getRecordInformation.purchase_vendor,
        purchaseQuantity: getRecordInformation.txtpurchaseQuantity,
        purchasePrice: getRecordInformation.getCurrencyValue,
        ppriceAmount: getRecordInformation.priceAmount,
        purchaseTotalPrice: getRecordInformation.purchasePrice,
        purchaselinks: getRecordInformation.purchaseDynamicField
      };
      vm.$emit('purchases', vm.purchaseData);
    },
    removeRow(item, purchase) {
      var vm = this;
      let newDynamicArrayCount = item.count;
      vm.newDynamicField.forEach(item => item.purchaseDynamicField.forEach((subItem, index) => {
        if (item.purchaseDynamicField.length === 1) {
          const index = vm.newDynamicField.findIndex(x => x.count === newDynamicArrayCount);
          if (index !== -1) {
            vm.newDynamicField.splice(index, 1);
          }
        } else if (subItem.pcount === purchase.pcount) {
          return item.purchaseDynamicField.splice(index, 1);
        }
      }));
    }
  }
});
// CONCATENATED MODULE: ./src/views/AssetRequisition/OnlinePurchase.vue?vue&type=script&lang=js&
 /* harmony default export */ var AssetRequisition_OnlinePurchasevue_type_script_lang_js_ = (OnlinePurchasevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/AssetRequisition/OnlinePurchase.vue





/* normalize component */

var OnlinePurchase_component = Object(componentNormalizer["a" /* default */])(
  AssetRequisition_OnlinePurchasevue_type_script_lang_js_,
  OnlinePurchasevue_type_template_id_0e4dd12f_render,
  OnlinePurchasevue_type_template_id_0e4dd12f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var OnlinePurchase = (OnlinePurchase_component.exports);
// EXTERNAL MODULE: ./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.cjs.js
var vue_treeselect_cjs = __webpack_require__("ca17");
var vue_treeselect_cjs_default = /*#__PURE__*/__webpack_require__.n(vue_treeselect_cjs);

// EXTERNAL MODULE: ./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.css
var vue_treeselect = __webpack_require__("542c");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetRequisition/AddNewRequisition.vue?vue&type=script&lang=js&






/* harmony default export */ var AddNewRequisitionvue_type_script_lang_js_ = ({
  components: {
    AddQuotes: AddQuotes,
    OnlinePurchase: OnlinePurchase,
    'tree-view': vue_treeselect_cjs_default.a
  },
  data() {
    return {
      options: [],
      LocationValue: null,
      txtDescription: '',
      txtrequestQuantity: null,
      txtproductName: '',
      AssetType: [],
      selectedProductValue: null,
      isLoading: false,
      qoutesArray: [],
      purchaseArray: [],
      productItem: '',
      updateItemArray: [],
      updateRequistionId: 0
    };
  },
  async created() {
    debugger;
    var vm = this;
    await vm.GetLocationByCompanyId();
    await vm.GetAssetType();
    if (this.$route.params.reqForm == 'ProductTypeList') {
      this.productItem = this.$route.params.items;
      if (this.productItem != null && this.productItem != '' && this.productItem != 'undefined') {
        vm.txtrequestQuantity = this.productItem.Quantity;
        vm.txtproductName = this.productItem.ProductName;
        vm.txtDescription = this.productItem.Description;
        vm.selectedProductValue = this.productItem.AssetTypeId;
        vm.updateRequistionId = this.productItem.AssetRequisitionId;
        vm.UpdateRequisition(this.productItem.AssetRequisitionId);
      }
    }
  },
  methods: {
    UpdateRequisition: async function (id) {
      debugger;
      var vm = this;
      vm.isLoading = true;
      var params = `id=${id}`;
      await DataService["a" /* default */].UpdateRequisition(params).then(response => {
        debugger;
        if (response.data != null) {
          vm.updateItemArray = response.data;
          vm.LocationValue = vm.updateItemArray.location_id;
        }
        vm.isLoading = false;
      });
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
    async GetAssetType() {
      var vm = this;
      vm.isLoading = true;
      var url = `type=ITEMCODE&issueTo=&locationId=`;
      await DataService["a" /* default */].GetAssetTypeCustom(url).then(response => {
        vm.AssetType = JSON.parse(response.data);
        vm.isLoading = false;
      });
    },
    quotes: function (quotes) {
      //debugger
      var vm = this;
      if (vm.qoutesArray.length == 0) {
        vm.qoutesArray.push(quotes);
        return;
      } else {
        // debugger;
        const index = vm.qoutesArray.findIndex(x => x.quoteVendor == quotes.quoteVendor);
        if (index !== -1) {
          vm.qoutesArray.splice(index, 1);
        }
        vm.qoutesArray.push(quotes);
        return;
      }
    },
    purchases: function (purchases) {
      // debugger
      var vm = this;
      if (vm.purchaseArray.length == 0) {
        vm.purchaseArray.push(purchases);
      } else {
        const index = vm.purchaseArray.findIndex(x => x.purchase_vendor == purchases.purchase_vendor);
        if (index !== -1) {
          vm.purchaseArray.splice(index, 1);
        }
        vm.purchaseArray.push(purchases);
        return;
      }
    },
    saveNewRequisition(values, errors, ACT) {
      debugger;
      let status = ACT;
      var vm = this;
      vm.isLoading = true;
      var formData = new FormData();
      vm.$refs.AddReqForm.validate().then(result => {
        if (result) {
          // var qoutesArrayList = [];
          // var purchaseArrayList = [];

          // $('.addQuoteRows').each(function () {
          //     //debugger
          //     var obj = {
          //         quoteId: $(this).find('.hdnquoteId').val() == '' ? 0 : $(this).find('.hdnquoteId').val(),
          //         quoteVendor: $(this).find('.Vendor').val(),
          //         quoteQuantity: $(this).find('.RequestQuantity').val(),
          //         quoteAmount: $(this).find('.Currency').val(),
          //         quotePrice: $(this).find('.UnitPrice').val(),
          //         quoteTotalPrice: $(this).find('.totalPrice').val(),
          //         uploadQuote: '',
          //         fileName: ''
          //     }
          //     qoutesArrayList.push(obj);
          // })

          // $('.addOnlinePurchaseRows').each(function () {
          //     // debugger
          //     var obj = {
          //         purchase_id: $(this).find('.hdnpurchase_id').val() == '' ? 0 : $(this).find('.hdnpurchase_id').val(),
          //         purchase_vendor: $(this).find('.Vendor').val(),
          //         purchaseQuantity: $(this).find('.RequestQuantity').val(),
          //         purchasePrice: $(this).find('.Currency').val(),
          //         ppriceAmount: $(this).find('.UnitPrice').val(),
          //         purchaseTotalPrice: $(this).find('.totalPrice').val(),
          //         purchaselinks: []
          //     }
          //     $('.addOnlinePurchaseRows').find('.purchaseDynamicField').each(function () {

          //         var modl = { purchase_link_id: $(this).find('.purchase_link_id').val() == '' ? 0 : $(this).find('.purchase_link_id').val(), purchase_link: $(this).find('.purchaseLink').val() };

          //         obj.purchaselinks.push(modl);

          //     })
          //     purchaseArrayList.push(obj);
          // })

          let obj = {
            RequisitionId: vm.updateRequistionId ? vm.updateRequistionId : 0,
            location: vm.LocationValue,
            productname: vm.txtproductName,
            productType: vm.selectedProductValue,
            quantity: vm.txtrequestQuantity,
            description: vm.txtDescription,
            status: status,
            quotes: vm.qoutesArray,
            purchases: vm.purchaseArray
          };
          formData.append("postString", JSON.stringify(obj));
          DataService["a" /* default */].AddUpdateNewRequisition(formData).then(response => {
            if (response.data.msg == 'add') {
              vm.isLoading = false;
              vm.ShowAlert(vm.$t("New Product type Request successfully Added"), "Success", vm.$t('Alert'));
              return vm.$router.push({
                path: '/AssetRequisition/NewAssetRequisitionListing'
              });
            } else if (response.data.msg == 'update') {
              vm.isLoading = false;
              vm.ShowAlert(vm.$t("New Product type Request successfully Updated"), "Success", vm.$t('Alert'));
              return vm.$router.push({
                path: '/AssetRequisition/NewAssetRequisitionListing'
              });
            } else {
              vm.isLoading = false;
              return vm.ShowAlert(vm.$t("New Product type Request failed"), "failure", vm.$t('Alert'));
            }
          });
        } else {
          vm.ShowAlert(vm.$t("Please correct the highlighted errors"), "failure", vm.$t('Alert'));
        }
      });
    },
    saveNewRequisitionAsDraft(event) {
      debugger;
      let status = event;
      var vm = this;
      vm.isLoading = true;
      var formData = new FormData();
      vm.$refs.AddReqForm.validate().then(result => {
        if (result) {
          // var qoutesArrayList = [];
          // var purchaseArrayList = [];

          // $('.addQuoteRows').each(function () {
          //     //debugger
          //     var obj = {
          //         quoteId: $(this).find('.hdnquoteId').val() == '' ? 0 : $(this).find('.hdnquoteId').val(),
          //         quoteVendor: $(this).find('.Vendor').val(),
          //         quoteQuantity: $(this).find('.RequestQuantity').val(),
          //         quoteAmount: $(this).find('.Currency').val(),
          //         quotePrice: $(this).find('.UnitPrice').val(),
          //         quoteTotalPrice: $(this).find('.totalPrice').val(),
          //         uploadQuote: '',
          //         fileName: ''
          //     }
          //     qoutesArrayList.push(obj);
          // })

          // $('.addOnlinePurchaseRows').each(function () {
          //     //debugger
          //     var obj = {
          //         purchase_id: $(this).find('.hdnpurchase_id').val() == '' ? 0 : $(this).find('.hdnpurchase_id').val(),
          //         purchase_vendor: $(this).find('.Vendor').val(),
          //         purchaseQuantity: $(this).find('.RequestQuantity').val(),
          //         purchasePrice: $(this).find('.Currency').val(),
          //         ppriceAmount: $(this).find('.UnitPrice').val(),
          //         purchaseTotalPrice: $(this).find('.totalPrice').val(),
          //         purchaselinks: []
          //     }
          //     $('.addOnlinePurchaseRows').find('.purchaseDynamicField').each(function () {

          //         var modl = { purchase_link_id: $(this).find('.purchase_link_id').val() == '' ? 0 : $(this).find('.purchase_link_id').val(), purchase_link: $(this).find('.purchaseLink').val() };

          //         obj.purchaselinks.push(modl);

          //     })
          //     purchaseArrayList.push(obj);
          // })

          let obj = {
            RequisitionId: vm.updateRequistionId ? vm.updateRequistionId : 0,
            location: vm.LocationValue,
            productname: vm.txtproductName,
            productType: vm.selectedProductValue,
            quantity: vm.txtrequestQuantity,
            description: vm.txtDescription,
            status: status,
            purchases: vm.purchaseArray,
            quotes: vm.qoutesArray
          };
          formData.append("postString", JSON.stringify(obj));
          DataService["a" /* default */].AddUpdateNewRequisition(formData).then(response => {
            if (response.data.msg == 'add') {
              vm.isLoading = false;
              vm.ShowAlert(vm.$t("New Product type Request Add as draft "), "Success", vm.$t('Alert'));
              return vm.$router.push({
                path: '/AssetRequisition/NewAssetRequisitionListing'
              });
            } else if (response.data.msg == 'update') {
              vm.isLoading = false;
              vm.ShowAlert(vm.$t("New Product type Request update as draft "), "Success", vm.$t('Alert'));
              return vm.$router.push({
                path: '/AssetRequisition/NewAssetRequisitionListing'
              });
            } else {
              vm.isLoading = false;
              return vm.ShowAlert(vm.$t("New Product type Request failed"), "failure", vm.$t('Alert'));
            }
          });
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/AssetRequisition/AddNewRequisition.vue?vue&type=script&lang=js&
 /* harmony default export */ var AssetRequisition_AddNewRequisitionvue_type_script_lang_js_ = (AddNewRequisitionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/AssetRequisition/AddNewRequisition.vue?vue&type=style&index=0&id=1599253a&prod&lang=css&
var AddNewRequisitionvue_type_style_index_0_id_1599253a_prod_lang_css_ = __webpack_require__("6d9a");

// CONCATENATED MODULE: ./src/views/AssetRequisition/AddNewRequisition.vue






/* normalize component */

var AddNewRequisition_component = Object(componentNormalizer["a" /* default */])(
  AssetRequisition_AddNewRequisitionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AddNewRequisition = __webpack_exports__["default"] = (AddNewRequisition_component.exports);

/***/ }),

/***/ "b1c4":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("36db");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("542e3fa9", content, true, {"sourceMap":false,"shadowMode":false});

/***/ })

}]);
//# sourceMappingURL=chunk-6350c3cd.js.map