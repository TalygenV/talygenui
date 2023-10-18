(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-7a9cabd8"],{

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

/***/ "ff55":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetRequisition/NewAssetRequisitionListing.vue?vue&type=template&id=3c2e0a2b&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_c('tg-list', {
    attrs: {
      "IsShowAction": false,
      "listType": ['List'],
      "ModuleName": "Asset",
      "SubModuleCode": "Asset",
      "showCheckBox": true,
      "IdentityColumn": "AssetRequisitionId",
      "HeaderText": _vm.$t('NEW_ASSET_REQUISITION'),
      "ListData": _vm.ProductData,
      "HeaderData": _vm.Headers,
      "widgets": _vm.widgets,
      "callbackfunction": _vm.FetchData,
      "HeaderButtons": _vm.listheaderbuttons,
      "TotalRecords": _vm.TotalRecord,
      "SearchFields": _vm.leftSearchFields,
      "RenderRowActionMethod": _vm.renderActions,
      "ListDataCallBackFunction": _vm.FetchData,
      "LegendArray": _vm.LegendArray,
      "SortExp": _vm.SortExp,
      "NorecordfoundText": _vm.$t('NoRecordfound'),
      "SortBy": _vm.SortBy
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
        return [data.column.COLUMN_NAME == 'CreatedAt' ? [_c('span', [_vm._v(_vm._s(_vm.$options.filters.formatDateTime(data.row.CreatedAt)))])] : _vm._e(), data.column.COLUMN_NAME == 'View' ? [_c('a', {
          staticClass: "aViewRequisitionQuote",
          attrs: {
            "title": "",
            "data-toggle-tooltip": "tooltip",
            "data-original-title": "View"
          }
        }, [data.row.HasQuoteNewRequisitionList == true || data.row.HasPurchaseNewRequisitionList == true ? _c('span', [_c('i', {
          staticClass: "fa fa-eye text-info action-icon"
        })]) : _c('span', [_c('i', {
          staticClass: "fa fa-eye text-info action-icon disabled"
        })])])] : _vm._e()];
      }
    }])
  }), _vm.IsShowRelation ? _c('RelationPopup') : _vm._e()], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/AssetRequisition/NewAssetRequisitionListing.vue?vue&type=template&id=3c2e0a2b&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// CONCATENATED MODULE: ./src/views/AssetRequisition/NewAssetRequisitionListingSchema.js


let buttons = [{
  title: 'Request New Product Type',
  iconClass: 'fa fa-plus',
  callbackfunction: 'RequestNewProductType',
  href: '',
  additionalClass: '',
  isdisabled: false,
  isvisible: true,
  checkPrivilege: false
}, {
  title: 'Delete',
  iconClass: 'fa fa-trash',
  callbackfunction: 'deleteItem',
  additionalClass: '',
  isdisabled: true,
  isvisible: true,
  checkPrivilege: false
}];
let leftsearchSchema = [{
  fieldName: "Product Name",
  fieldType: "text",
  fieldIcon: "fa-file",
  paramName: "search",
  fieldSearchConditionName: [''],
  isSearch: false,
  value: "",
  listOptions: []
}, {
  fieldName: 'Product Type',
  fieldType: "ddl-check",
  fieldIcon: "fa-user",
  fieldSearchConditionName: [''],
  isSearch: false,
  value: "",
  listOptions: []
}];
function bindleftCommonSearchdropdown(instance, modulename, filtername) {
  var vm = instance;
  if (filtername == "Product_Type") {
    vm.isLoading = true;
    var url = `type=ITEMCODE&issueTo=&locationId=`;
    DataService["a" /* default */].GetAssetTypeCustom(url).then(response => {
      vm.AssetType = JSON.parse(response.data);
      if (vm.AssetType != null) {
        vm.AssetType.forEach(item => {
          let obj = {
            name: item.ASSETTYPE,
            value: item.ASSETID
          };
          vm.leftSearchFields[1].listOptions.push(obj);
        });
        return;
      }
    });
  }
}
/* harmony default export */ var NewAssetRequisitionListingSchema = ({
  buttons,
  leftsearchSchema,
  bindleftCommonSearchdropdown
});
// EXTERNAL MODULE: ./src/components/Modal/AddRelationPopup.vue + 9 modules
var AddRelationPopup = __webpack_require__("f9bd");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetRequisition/NewAssetRequisitionListing.vue?vue&type=script&lang=js&




/* harmony default export */ var NewAssetRequisitionListingvue_type_script_lang_js_ = ({
  components: {
    RelationPopup: AddRelationPopup["a" /* default */]
  },
  data() {
    return {
      listheaderbuttons: NewAssetRequisitionListingSchema.buttons,
      leftSearchFields: NewAssetRequisitionListingSchema.leftsearchSchema,
      listActions: NewAssetRequisitionListingSchema.listActions,
      LegendArray: [],
      ProductData: [],
      PageSize: 10,
      PageNumber: 1,
      PageSizeOption: null,
      StatusListForListing: [],
      Headers: [{
        "COLUMN_NAME": "ProductName",
        "DATA_TYPE": "image",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Product Name'),
        "DISPLAY_ORDER": 1,
        settings: {
          clickEvent: this.clickEventOfColumn,
          formatter: this.columnDataFormatter
        }
      }, {
        "COLUMN_NAME": "AssetType",
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Product Type'),
        "DISPLAY_ORDER": 2
      }, {
        "COLUMN_NAME": "Quantity",
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Requested Quantity'),
        "DISPLAY_ORDER": 3
      }, {
        "COLUMN_NAME": "Description",
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Description'),
        "DISPLAY_ORDER": 4
      }, {
        "COLUMN_NAME": "CreatedBy",
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Created By'),
        "DISPLAY_ORDER": 5
      }, {
        "COLUMN_NAME": "CreatedAt",
        "DATA_TYPE": "Date",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('CreatedAt'),
        "DISPLAY_ORDER": 6,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "View",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('View'),
        "DISPLAY_ORDER": 7,
        settings: {
          isInSlot: true
        }
      }],
      noRecord: true,
      TotalRecord: 0,
      CurrentPage: 1,
      TotalPages: 0,
      LocationId: '',
      SortBy: '',
      SortExp: '',
      isPaged: 1,
      searchCondition: "",
      widgets: [],
      legendProgress: [],
      IsShowRelation: false
    };
  },
  created() {
    var vm = this;
    NewAssetRequisitionListingSchema.bindleftCommonSearchdropdown(vm, 'AssetRequisition', 'Product_Type');
    vm.FetchData();
  },
  methods: {
    columnDataFormatter: function (row, column) {
      return row[column.COLUMN_NAME];
    },
    FetchData: function () {
      debugger;
      var vm = this;
      vm.isLoading = true;
      var params = `pageSize=${vm.PageSize}&pageNumber=${vm.PageNumber}&sortBy=${vm.SortBy}&sortExp=${this.SortExp}&search=${vm.searchCondition}`;
      DataService["a" /* default */].NewAssetRequisitionListing(params).then(response => {
        debugger;
        if (response.data != null) {
          debugger;
          if (response.data.length > 0) {
            vm.ProductData = response.data;
            vm.TotalRecord = response.data[0].Total;
            vm.TotalPage = Math.ceil(vm.TotalRecord / vm.PageSize);
            vm.CurrentPage = vm.PageNumber;
            vm.noRecord = false;
            vm.isLoading = false;
          } else {
            vm.noRecord = true;
            vm.ProductData = [];
            vm.TotalRecord = 0;
            vm.isLoading = false;
          }
        }
        setTimeout(function () {
          vm.CheckBoxBootstrap();
        }, 100);
      });
    },
    clickEventOfColumn: function (row, column) {},
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
        case "RequestNewProductType":
          this.RequestNewProductType();
          break;
        case "deleteItem":
          this.deleteItem();
          break;
      }
    },
    deleteItem(event) {
      debugger;
    },
    RequestNewProductType() {
      this.$router.push({
        path: '/AssetRequisition/AddNewRequisition'
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/AssetRequisition/NewAssetRequisitionListing.vue?vue&type=script&lang=js&
 /* harmony default export */ var AssetRequisition_NewAssetRequisitionListingvue_type_script_lang_js_ = (NewAssetRequisitionListingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/AssetRequisition/NewAssetRequisitionListing.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  AssetRequisition_NewAssetRequisitionListingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NewAssetRequisitionListing = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-7a9cabd8.js.map