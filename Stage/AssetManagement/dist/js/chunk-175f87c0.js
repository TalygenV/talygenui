(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-175f87c0"],{

/***/ "7a51":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchAsset_vue_vue_type_style_index_0_id_0d3edb90_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a354");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchAsset_vue_vue_type_style_index_0_id_0d3edb90_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchAsset_vue_vue_type_style_index_0_id_0d3edb90_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "97c9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/RelatedProductPopup.vue?vue&type=template&id=82cb6220&
var render = function render() {
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
  }, [_vm._v(" " + _vm._s(_vm.$t('RelatedProduct')) + " ")]), _c('button', {
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
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "listing"
  }, [_c('div', {
    staticClass: "table-responsive table-fix-header"
  }, [_c('table', {
    staticClass: "table table-bordered dt-responsive nowrap my-0",
    attrs: {
      "id": "tblRelatedDataItems"
    }
  }, [_c('thead', {
    staticClass: "thead-bg"
  }, [_c('tr', [_vm._m(0), _c('th', [_c('span', [_vm._v(_vm._s(_vm.$t('AssetId')))])]), _c('th', {
    staticStyle: {
      "min-width": "300px"
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('AvailableItems')))])]), _c('th', [_c('span', [_vm._v(_vm._s(_vm.$t('RequiredQuantity')))])])])]), _c('tbody', _vm._l(_vm.GetRelatedProductData, function (item, index) {
    return _c('tr', {
      key: index
    }, [_c('td', [_c('div', {
      staticClass: "custom-control custom-checkbox"
    }, [_c('input', {
      ref: "theCheckbox",
      refInFor: true,
      staticClass: "custom-control-input",
      attrs: {
        "for": "chk_" + index,
        "data-catalogid": item.ID,
        "data-parentid": item.ID,
        "type": "checkbox",
        "id": "chk_" + index
      },
      domProps: {
        "value": item.ID
      },
      on: {
        "click": _vm.handleClick
      }
    }), _c('label', {
      staticClass: "custom-control-label universal-custom-control-label pt-1",
      attrs: {
        "for": "chk_" + index
      }
    })])]), _c('td', {
      attrs: {
        "data-catalogid": item.ID,
        "data-itemsavailable": item.AVAILIABLE_ITEM,
        "data-parentid": item.ID,
        "data-id": item.ID,
        "data-itemname": item.NAME
      }
    }, [_vm._v(_vm._s(item.NAME))]), _c('td', {
      attrs: {
        "data-catalogid": item.ID,
        "data-itemsavailable": item.AVAILIABLE_ITEM,
        "data-parentid": item.ID,
        "data-id": item.ID,
        "data-itemname": item.NAME
      }
    }, [_vm._v(" " + _vm._s(item.AVAILIABLE_ITEM))]), _c('td', [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.txtAssetQuentity,
        expression: "txtAssetQuentity"
      }],
      staticClass: "form-control align-middle txtAssetQuentity",
      attrs: {
        "type": "text",
        "name": "record"
      },
      domProps: {
        "value": _vm.txtAssetQuentity
      },
      on: {
        "input": function ($event) {
          if ($event.target.composing) return;
          _vm.txtAssetQuentity = $event.target.value;
        }
      }
    })])]);
  }), 0)])])]), _c('div', {
    staticClass: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-danger",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.ClosePopup
    }
  }, [_vm._v(_vm._s(_vm.$t('Close')))]), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "button",
      "id": "relatedprdct"
    },
    on: {
      "click": _vm.SaveChanges
    }
  }, [_vm._v(_vm._s(_vm.$t('SaveChanges')))])])])])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('th', [_c('span', {
    staticStyle: {
      "max-width": "7px"
    }
  }, [_vm._v("#")])]);
}];

// CONCATENATED MODULE: ./src/components/Modal/RelatedProductPopup.vue?vue&type=template&id=82cb6220&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/RelatedProductPopup.vue?vue&type=script&lang=js&


/* harmony default export */ var RelatedProductPopupvue_type_script_lang_js_ = ({
  props: {
    RelatedProductDaata: {
      type: Array,
      required: true
    },
    AssetListData: {
      type: Array,
      required: true
    },
    GetRelatedProduct: {
      type: Array
    }
  },
  data() {
    return {
      GetRelatedProductData: [],
      IsChecked: false,
      txtAssetQuentity: 1,
      RelatedProduct: []
    };
  },
  created: function () {
    var vm = this;
    vm.FetchData();
    if (vm.GetRelatedProduct != null && vm.GetRelatedProduct.length > 0) {
      return vm.GetRelatedProductData = vm.GetRelatedProduct;
    }
  },
  methods: {
    FetchData: function () {
      var url = `catId=${this.RelatedProductDaata[0].AssetCatalogueId}&type=ProductName`;
      DataService["a" /* default */].GetRelatedProduct(url).then(response => {
        this.GetRelatedProductData = JSON.parse(JSON.parse(response.data.result).RESULT);
      });
    },
    SaveChanges: function () {
      var vm = this;
      var locationId = vm.RelatedProductDaata[0].LocationId;
      var selectedProductArray = [];
      vm.AssetListData.forEach(item => {
        selectedProductArray.push({
          catalogueId: item.AssetCatalogueId,
          uniqueId: item.ParentUniqueId
        });
      });
      vm.GetRelatedProductData.forEach((item, index) => {
        if (vm.IsChecked) {
          var relationType = item.ID == '0' ? 'Product' : 'ProductName';
          var id = relationType == 'ProductName' ? item.ID : vm.RelatedProductDaata[0].ParentUniqueId;
          var isMandatory = item.Mandatory;
          var relatedCatalogueId = vm.RelatedProductDaata[0].AssetCatalogueId;
          var relatedUniqueId = vm.RelatedProductDaata[0].ParentUniqueId;
          var AssetQuentity = vm.txtAssetQuentity;
          if (selectedProductArray.some(x => x.catalogueId == vm.RelatedProductDaata[0].AssetCatalogueId && vm.RelatedProductDaata[0].ParentUniqueId)) {
            var catalogueIds = relationType == 'ProductName' ? id : null;
            var uniqueIds = relationType == 'Product' ? id : null;
            var assignedFrom = this.$options.filters.formatDate(vm.$parent.$parent.$parent.$parent.DateofAssignment);
            var assignedTill = this.$options.filters.formatDate(vm.$parent.$parent.$parent.$parent.DateofAssignmentTill);
            var IssueTo = vm.$parent.$parent.$parent.$parent.Users == undefined ? this.$options.filters.formatDate(vm.$parent.$parent.$parent.$parent.Users) : 0;
            var startTime = this.$options.filters.formatTime(assignedFrom);
            var endTime = this.$options.filters.formatTime(assignedTill);
            var url = `id=&isView=1&barcode=&assetType=&assetUniqueId=&selfCheckout=&reqFrom=assetassignment&isFor=&isuniqueSearch=&issueTo=${IssueTo}&assignedFrom=${assignedFrom}&assignedTill=${assignedTill}&startTime=${startTime}&endTime=${endTime}&locationId=${locationId}&RFID=&pageSize=&pageNum=&assignedFromDateTime=&assignedTillDateTime=&uniqueIds=${uniqueIds}&catalogueIds=${catalogueIds}`;
            DataService["a" /* default */].GetCompanyAssestCatalogsDetalis(url).then(response => {
              vm.RelatedProduct = response.data;
              vm.$emit('RelatedProduct', vm.RelatedProduct);
              vm.ClosePopup();
            });
          }
        } else {
          vm.$parent.Isrelatedproduct = false;
        }
      });
    },
    ClosePopup: function () {
      this.$emit('CloseRelatedPopup');
    },
    handleClick() {
      if (this.$refs.theCheckbox[0].checked) {
        this.IsChecked = true;
      } else {
        this.IsChecked = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/RelatedProductPopup.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_RelatedProductPopupvue_type_script_lang_js_ = (RelatedProductPopupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Modal/RelatedProductPopup.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Modal_RelatedProductPopupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RelatedProductPopup = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "a354":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("c241");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("61f0b8b6", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "b25f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/SearchAsset.vue?vue&type=template&id=0d3edb90&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_c('div', {
    staticClass: "col-lg-12 px-0"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "heading-border"
  }, [_c('h5', {
    staticClass: "h5"
  }, [_c('span', [_vm._v(" " + _vm._s(_vm.$t('Search')))])])]), _c('div', {
    staticClass: "search-content mt-2"
  }, [_c('div', {
    staticClass: "col-lg-12 float-left px-0",
    attrs: {
      "id": "search-content"
    }
  }, [_c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left p-0 px-3 bg-grey border"
  }, [_c('div', {
    staticClass: "row mt-2"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('Field', {
    attrs: {
      "rules": {
        'required': true
      }
    }
  }, [_c('div', {
    staticClass: "custom-control custom-radio custom-control-inline"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.FirstfolderShareOption,
      expression: "FirstfolderShareOption"
    }],
    attrs: {
      "type": "radio",
      "value": "searchproduct",
      "checked": "checked"
    },
    domProps: {
      "checked": _vm._q(_vm.FirstfolderShareOption, "searchproduct")
    },
    on: {
      "change": [function ($event) {
        _vm.FirstfolderShareOption = "searchproduct";
      }, _vm.SearchProducts]
    }
  }), _c('label', {
    staticClass: "pl-2",
    attrs: {
      "for": "search"
    }
  }, [_vm._v(" " + _vm._s(_vm.$t('SearchByProductType')))]), _c('div', {
    staticClass: "custom-control ml-4 p-0 custom-radio mr-4 custom-control-inline"
  }, [_vm._v(" Or")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.FirstfolderShareOption,
      expression: "FirstfolderShareOption"
    }],
    attrs: {
      "type": "radio",
      "value": "Barcode"
    },
    domProps: {
      "checked": _vm._q(_vm.FirstfolderShareOption, "Barcode")
    },
    on: {
      "change": [function ($event) {
        _vm.FirstfolderShareOption = "Barcode";
      }, _vm.SearchProducts]
    }
  }), _c('label', {
    staticClass: "pl-2",
    attrs: {
      "for": "Barcode"
    }
  }, [_vm._v(" " + _vm._s(_vm.$t('SearchbyBarcodeSerialNumberRFID')) + " ")])])])], 1)])]), _vm.Isbarcodediv ? _c('div', {
    staticClass: "col-sm-12 col-md-6 col-lg-4 col-xl-3 float-left"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.txtBarcode,
      expression: "txtBarcode"
    }],
    staticClass: "form-control mb-2",
    attrs: {
      "name": "Barcode",
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
  }), _c('div', {
    staticClass: "input-group-append"
  }, [_c('span', {
    staticClass: "input-group-text border-0 bg-transparent p-0 pl-2 mb-2"
  }, [_c('a', {
    staticClass: "btn btn-success float-left mr-2",
    attrs: {
      "href": "javascript:;",
      "title": "ClickHereToSearch"
    },
    on: {
      "click": _vm.SearchProductList
    }
  }, [_vm._v(_vm._s(_vm.$t('AddProduct')))]), _vm.RFIDSetupButton ? _c('a', {
    staticClass: "pullleft mx-1 green btn btn-info",
    attrs: {
      "title": "ClickHereToSearch"
    },
    on: {
      "click": _vm.RFIDProductList
    }
  }, [_c('em', {
    staticClass: "fa fa-barcode text-white float-left mt-1 mr-2"
  }), _c('span', {
    staticClass: "text-white"
  }, [_vm._v(_vm._s(_vm.$t('RFIDScanned')))])]) : _vm._e()])])])])]) : _vm._e(), !_vm.Isbarcodediv ? _c('Form', {
    ref: "SearchAssetform",
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        valid,
        errors
      }) {
        return [_c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-3 col-xl-2 float-left"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', [_vm._v(_vm._s(_vm.$t('Location'))), _c('span', {
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
          }], null, true)
        })], 1)]), _c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-3 col-xl-2 float-left"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', [_vm._v(_vm._s(_vm.$t('ItemType'))), _c('span', {
          staticClass: "text-danger"
        }, [_vm._v("*")])]), _c('Field', {
          staticClass: "w-100",
          attrs: {
            "name": "ItemType",
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
                  'form-control w-100': true,
                  'is-invalid': errors[0]
                },
                attrs: {
                  "name": "ItemType"
                },
                on: {
                  "change": [function ($event) {
                    var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                      return o.selected;
                    }).map(function (o) {
                      var val = "_value" in o ? o._value : o.value;
                      return val;
                    });
                    _vm.txtAssetType = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
                  }, function ($event) {
                    return _vm.GetCompanyAssestCatalogs(_vm.txtAssetType);
                  }]
                }
              }, [_c('option', {
                attrs: {
                  "value": ""
                }
              }, [_vm._v(_vm._s(_vm.$t('Select')))]), _vm._l(_vm.AssetTypeData, function (item, itemIndex) {
                return _c('option', {
                  key: itemIndex,
                  domProps: {
                    "value": item.ASSETID
                  }
                }, [_vm._v(_vm._s(item.ASSETTYPE))]);
              })], 2), errors[0] ? _c('span', {
                staticClass: "invalid-feedback d-block",
                attrs: {
                  "name": "ItemType"
                }
              }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
            }
          }], null, true)
        })], 1)]), _c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-3 col-xl-2 float-left"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', [_vm._v(" " + _vm._s(_vm.$t('ProductName'))), _c('span', {
          staticClass: "text-danger"
        }, [_vm._v("*")])]), _c('Field', {
          staticClass: "w-100",
          attrs: {
            "name": "ProductName",
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
                  value: _vm.txtProduct,
                  expression: "txtProduct"
                }],
                class: {
                  'form-control w-100': true,
                  'is-invalid': errors[0]
                },
                attrs: {
                  "name": "ProductName"
                },
                on: {
                  "change": function ($event) {
                    var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                      return o.selected;
                    }).map(function (o) {
                      var val = "_value" in o ? o._value : o.value;
                      return val;
                    });
                    _vm.txtProduct = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
                  }
                }
              }, [_c('option', {
                attrs: {
                  "value": ""
                }
              }, [_vm._v(_vm._s(_vm.$t('Select')))]), _vm._l(_vm.ProducttData, function (item, itemIndex) {
                return _c('option', {
                  key: itemIndex,
                  domProps: {
                    "value": item.ASSET_CATALOGUE_ID
                  }
                }, [_vm._v(_vm._s(item.NAME))]);
              })], 2), errors[0] ? _c('span', {
                staticClass: "invalid-feedback d-block",
                attrs: {
                  "name": "ProductName"
                }
              }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
            }
          }], null, true)
        })], 1)]), _c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-3 col-xl-2 float-left"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', [_vm._v(" " + _vm._s(_vm.$t('ItemName'))), _c('span', {
          staticClass: "text-danger"
        }, [_vm._v("*")])]), _c('Field', {
          staticClass: "d-flex",
          attrs: {
            "name": "Products",
            "rules": {
              'required': true
            },
            "label": "ItemName"
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
                  value: _vm.itemname,
                  expression: "itemname"
                }],
                class: {
                  'form-control': true,
                  'is-invalid': errors[0]
                },
                attrs: {
                  "name": "Products",
                  "id": "Products",
                  "type": "text",
                  "value": "iselectVal"
                },
                domProps: {
                  "value": _vm.itemname
                },
                on: {
                  "keyup": _vm.Filterditems,
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.itemname = $event.target.value;
                  }
                }
              }), errors[0] ? _c('span', {
                staticClass: "invalid-feedback d-block",
                attrs: {
                  "name": "Products"
                }
              }, [_vm._v(_vm._s(errors[0]))]) : _vm._e(), _c('div', {
                staticClass: "unique_dynamicdatalist"
              }, _vm._l(_vm.ProductsArray, function (item, index) {
                return _c('ul', {
                  key: index,
                  staticStyle: {
                    "z-index": "auto"
                  },
                  on: {
                    "click": function ($event) {
                      return _vm.setProductsName(item);
                    }
                  }
                }, [_vm.showProductDropdown ? _c('li', {
                  staticStyle: {
                    "text-transform": "capitalize"
                  },
                  attrs: {
                    "value": item.Value
                  }
                }, [_vm._v(_vm._s(item.Name))]) : _vm._e()]);
              }), 0)]), _c('a', {
                staticClass: "btn float-left align-self-start",
                staticStyle: {
                  "background-color": "#fff",
                  "color": "#303030",
                  "border-color": "#abb5bf",
                  "border-left": "none"
                },
                attrs: {
                  "href": "javascript:;"
                },
                on: {
                  "click": _vm.ItemListOnclick
                }
              }, [_c('em', {
                staticClass: "dropdown-toggle float-right"
              })])];
            }
          }], null, true)
        })], 1)]), _c('div', {
          staticClass: "input-group-append"
        }, [_c('span', {
          staticClass: "input-group-text border-0 bg-transparent p-0 pl-2 mt-4"
        }, [_c('a', {
          staticClass: "btn btn-success float-left",
          attrs: {
            "id": "Searchassest",
            "href": "javascript:;",
            "title": "ClickHereToSearch"
          },
          on: {
            "click": function ($event) {
              return _vm.searchfilter(valid, errors);
            }
          }
        }, [_vm._v("Add Product")])])])];
      }
    }], null, false, 2818541666)
  }) : _vm._e()], 1)])])])]), _vm.ShowProducttbl ? _c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "listing tblassestgroupinfodetails px-1 mt-3"
  }, [_c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-bordered dt-responsive nowrap mt-0",
    attrs: {
      "id": "tblassestgroupinfodetails"
    }
  }, [_c('thead', {
    staticClass: "thead-bg"
  }, [_c('tr', [_c('th', {
    staticClass: "text-center"
  }, [_c('span', [_vm._v(" " + _vm._s(_vm.$t('SerialNumbering')))])]), _c('th', [_c('span', [_vm._v(" " + _vm._s(_vm.$t('ItemCode')))])]), _c('th', [_c('span', [_vm._v(" " + _vm._s(_vm.$t('ItemName')))])]), _c('th', [_c('span', [_vm._v(" " + _vm._s(_vm.$t('LocationName')))])]), _c('th', [_c('span', [_vm._v(" " + _vm._s(_vm.$t('UniqueName')))])]), _c('th', [_c('span', [_vm._v(" " + _vm._s(_vm.$t('TermsAndConditions')))])]), _c('th', {
    staticClass: "text-center"
  }, [_c('span', [_vm._v(" " + _vm._s(_vm.$t('AvailableItems')))])]), _c('th', {
    staticClass: "text-center"
  }, [_c('span', [_vm._v(" " + _vm._s(_vm.$t('PendingAvailableQuantity')))])]), _c('th', {
    staticClass: "text-center"
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('RequestQuantity')))])]), _c('th', [_c('span', [_vm._v(" " + _vm._s(_vm.$t('Compartment')))])]), _c('th', {
    staticClass: "d-none"
  }, [_c('span', [_vm._v(" " + _vm._s(_vm.$t('Quantity')))])]), _c('th', {
    staticClass: "d-none"
  }, [_c('span', [_vm._v(" " + _vm._s(_vm.$t('Compartment')))])]), _c('th', {
    staticClass: "text-center"
  }, [_c('span', [_vm._v(" " + _vm._s(_vm.$t('Action')))])])])]), _vm.GroupData.length > 0 ? _c('tbody', [_vm._l(_vm.GroupData, function (item, index) {
    return [_c('tr', {
      key: index,
      class: {
        'showassetcataloguegroup': true,
        'insertedrow bg-gold': item.AssetCatalogueGroup.length > 0,
        '': item.AssetCatalogueGroup.length <= 0
      },
      attrs: {
        "isselfcheckout": item.IsSelfCheckout,
        "isselfie": item.SelfieEnabled,
        "id": item.AssetCatalogueId,
        "assetcatalogid": item.AssetCatalogueId,
        "isunique": item.CreateUniqueNameListing,
        "isgroup": 1
      }
    }, [_c('td', {
      staticClass: "text-center"
    }, [item.AssetCatalogueGroup.length > 0 ? _c('span', {
      staticClass: "togglearrow arrowwhitecollapse_roles fa fa-caret-right fa-2x showcatalog showassetcatalog",
      attrs: {
        "id": "cataloguegroup_id",
        "data-catalogid": item.CatalogueId,
        "data-parentid": item.AssetCatalogueId,
        "data-itemsavailable": item.AvailableItems,
        "data-uniqueid": item.AssetCatalogueId,
        "data-id": item.AssetCatalogueId,
        "isExpanded": "0"
      }
    }) : _c('span', {
      staticClass: "showcatalog hidden showassetcatalog",
      attrs: {
        "id": "cataloguegroup_id",
        "data-catalogid": item.CatalogueId,
        "data-parentid": item.AssetCatalogueId,
        "data-itemsavailable": item.AvailableItems,
        "data-uniqueid": item.AssetCatalogueId,
        "data-id": item.AssetCatalogueId
      }
    }), _vm._v(_vm._s(index + 1) + " ")]), _vm.GetParentDetails.isUsedFor != 'search' ? _c('td', {
      staticClass: "text-center",
      attrs: {
        "data-assetgroupid": item.AssetGroupId,
        "data-assettype": item.AssetType
      }
    }, [_vm._v(" " + _vm._s(item.AssetType) + " ")]) : _vm._e(), _c('td', {
      staticClass: "text-center",
      attrs: {
        "data-itemcode": item.ItemCode
      }
    }, [_vm._v(_vm._s(item.ItemCode))]), _c('td', {
      staticClass: "text-center",
      attrs: {
        "data-catalogname": item.AssetCatalogName
      }
    }, [_vm._v(_vm._s(item.AssetCatalogName))]), _c('td', {
      staticClass: "text-center",
      attrs: {
        "data-locationname": item.LocationName
      }
    }, [_vm._v(_vm._s(item.LocationName) + " ")]), _c('td', {
      attrs: {
        "data-Name": item.AssetUniqueName,
        "data-assetuniqueid": item.ParentUniqueId
      }
    }, [item.ParentUniqueId.length > 0 ? _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.AssetUniqueName,
        expression: "item.AssetUniqueName"
      }],
      staticClass: "form-control txtcsUniqueName",
      attrs: {
        "name": "txtcsUniqueName",
        "disabled": "disabled",
        "datacatalogid": item.AssetCatalogueId,
        "datalocationid": _vm.TreeValue
      },
      domProps: {
        "value": item.AssetUniqueName
      },
      on: {
        "input": function ($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "AssetUniqueName", $event.target.value);
        }
      }
    }) : _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.AssetUniqueName,
        expression: "item.AssetUniqueName"
      }],
      staticClass: "form-control txtcsUniqueName",
      attrs: {
        "type": "text",
        "name": "txtcsUniqueName",
        "disabled": "disabled",
        "datacatalogid": item.AssetCatalogueId,
        "datalocationid": _vm.TreeValue
      },
      domProps: {
        "value": item.AssetUniqueName
      },
      on: {
        "input": function ($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "AssetUniqueName", $event.target.value);
        }
      }
    })]), _c('td', {
      staticClass: "text-center",
      staticStyle: {
        "min-width": "400px"
      },
      attrs: {
        "data-termscondition": item.IsEnableTerms
      }
    }, [item.IsEnableTerms == 1 && (_vm.GetParentDetails.RequestFrom == 'assetassignment' || item.IsSelfCheckout == 1 && _vm.GetParentDetails.SelfCheckout == 'yes') ? _c('div', {
      staticClass: "form-group custom-control custom-checkbox mb-0",
      on: {
        "click": function ($event) {
          return _vm.handleClick();
        }
      }
    }, [_c('a', {
      attrs: {
        "href": "javascript:;"
      }
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.chkvalue,
        expression: "chkvalue"
      }],
      ref: "theCheckbox",
      refInFor: true,
      staticClass: "assertermscondition custom-control-input bb",
      attrs: {
        "for": "chk_" + index,
        "type": "checkbox",
        "name": "example" + index,
        "id": item.AssetCatalogueId
      },
      domProps: {
        "checked": Array.isArray(_vm.chkvalue) ? _vm._i(_vm.chkvalue, null) > -1 : _vm.chkvalue
      },
      on: {
        "change": function ($event) {
          var $$a = _vm.chkvalue,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = null,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && (_vm.chkvalue = $$a.concat([$$v]));
            } else {
              $$i > -1 && (_vm.chkvalue = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.chkvalue = $$c;
          }
        }
      }
    }), _c('label', {
      staticClass: "custom-control-label universal-custom-control-label pt-1",
      attrs: {
        "for": "chk_" + index,
        "name": "example" + index
      }
    }, [_vm._v(_vm._s(_vm.$t('AgreeToTermsConditions')) + " "), !item.IsEnableTerms ? _c('a', {
      staticClass: "downloadtermfile ml-1",
      staticStyle: {
        "display": "initial",
        "position": "relative",
        "top": "3px"
      },
      attrs: {
        "href": "javascript:;",
        "data-path": item.AttachmentPath,
        "data-name": item.AttachmentName,
        "title": "ClickToView"
      }
    }, [_vm._v(_vm._s(_vm.$t('ClickToView')) + " ")]) : _vm._e()])])]) : _c('span', [_vm._v(" " + _vm._s(_vm.$t('NA')) + " ")])]), _vm.GetParentDetails.isUsedFor == 'search' ? [_c('td', {
      staticClass: "text-center",
      attrs: {
        "data-availableitems": item.AvailableItems
      }
    }, [_vm._v(" " + _vm._s(item.AvailableItems) + " ")]), _c('td', {
      staticClass: "text-center",
      attrs: {
        "data-requestquantity": item.AsseetGroupQuantity
      }
    }, [item.CreateUniqueNameListing == true ? _c('span', [_vm._v(_vm._s(item.AvailableItems))]) : _c('span', [_vm._v(_vm._s(item.AsseetGroupQuantity))])]), _c('td', {
      staticClass: "text-center",
      attrs: {
        "data-createuniquenamelisting": item.AssetCatalogName
      }
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.AvailableItems,
        expression: "item.AvailableItems"
      }],
      staticClass: "txtitems form-control text-right align-middle",
      attrs: {
        "type": "text",
        "data-availableitems": item.AvailableItems,
        "data-requestquantity": item.AsseetGroupQuantity,
        "maxlength": "4",
        "data-numberonly": "yes"
      },
      domProps: {
        "value": item.AvailableItems
      },
      on: {
        "input": function ($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "AvailableItems", $event.target.value);
        }
      }
    })]), _c('td', {
      staticClass: "text-center",
      attrs: {
        "data-containerlist": item.ChildContainerList
      }
    }, [_c('span', [_vm._v(_vm._s(_vm.$t('NA')))])])] : _vm._e(), _vm.GetParentDetails.isUsedFor != 'search' ? [_c('td', {
      staticClass: "text-center"
    }, [_vm._v(" " + _vm._s(item.AvailableItems) + " ")]), _c('td', {
      staticClass: "text-center"
    }, [item.AssetGroupId > 0 ? _c('span', [_vm._v(" " + _vm._s(Boolean(item.CreateUniqueNameListing) == true ? 1 : item.AsseetGroupQuantity))]) : _c('span', [_vm._v(_vm._s(Boolean(item.CreateUniqueNameListing) == true ? 1 : item.AsseetGroupQuantity))])]), _c('td', {
      staticClass: "textalignright text-center"
    }, [item.AssetGroupId > 0 ? _c('input', {
      staticClass: "txtitems form-control txtAssetQuentity text-right align-middle",
      attrs: {
        "data-isgriup": "0",
        "type": "text",
        "data-requestquantity": item.AsseetGroupQuantity,
        "data-availableitems": item.AvailableItems
      },
      domProps: {
        "value": Boolean(item.CreateUniqueNameListing) == true ? 1 : item.AsseetGroupQuantity
      }
    }) : _c('input', {
      staticClass: "txtitems form-control txtAssetQuentity text-right align-middle",
      attrs: {
        "data-isgriup": "1",
        "type": "text",
        "data-requestquantity": item.AsseetGroupQuantity,
        "data-availableitems": item.AvailableItems
      },
      domProps: {
        "value": Boolean(item.CreateUniqueNameListing) == true ? 1 : item.AsseetGroupQuantity
      }
    })]), _c('td', {
      staticClass: "text-center",
      attrs: {
        "id": "lastrow"
      }
    }, [_c('span', [_vm._v(_vm._s(_vm.$t('NA')))])])] : _vm._e(), _c('td', {
      staticClass: "text-center single-action",
      attrs: {
        "id": "lastrow1"
      }
    }, [_vm.GetParentDetails.SelfCheckout == 'yes' ? _c('a', {
      staticClass: "ancaddtodata",
      attrs: {
        "href": "javascript:;",
        "data-selfcheckout": "yes",
        "data-assetuniqueid": item.ParentUniqueId,
        "data-cataloghdnid": item.CatalogueId,
        "data-name": item.Name,
        "data-catalogid": item.CatalogueId,
        "data-uniqueid": item.AssetCatalogueId,
        "title": "SelfCheckout"
      },
      on: {
        "click": _vm.OpenAssetOfList
      }
    }, [_c('em', {
      staticClass: "fa fa-user-plus text-dark action-icon",
      attrs: {
        "title": "SelfCheckout"
      }
    })]) : _vm.GetParentDetails.RequestFrom == 'assetassignment' ? _c('a', {
      staticClass: "ancaddtodata",
      attrs: {
        "href": "javascript:;",
        "data-selfcheckout": "no",
        "data-assetuniqueid": item.ParentUniqueId,
        "data-cataloghdnid": item.CatalogueId,
        "data-name": item.Name,
        "data-catalogid": item.CatalogueId,
        "data-uniqueid": item.AssetCatalogueId
      },
      on: {
        "click": _vm.OpenAssetOfList
      }
    }, [_c('em', {
      staticClass: "fa fa-user-plus text-dark action-icon",
      attrs: {
        "title": "Add to item"
      }
    })]) : _c('a', {
      staticClass: "ancaddtodata",
      attrs: {
        "href": "javascript:;",
        "data-selfcheckout": "no",
        "data-assetuniqueid": item.ParentUniqueId,
        "data-cataloghdnid": item.CatalogueId,
        "data-name": item.Name,
        "data-catalogid": item.CatalogueId,
        "data-uniqueid": item.AssetCatalogueId
      },
      on: {
        "click": _vm.OpenAssetOfList
      }
    }, [_c('em', {
      staticClass: "fa fa-user-plus text-dark action-icon",
      attrs: {
        "title": "Add to requisition"
      }
    })]), _vm.GetParentDetails.isUsedFor != 'search' ? _c('a', {
      staticClass: "ancremoveData recyclebin enable",
      attrs: {
        "href": "javascript:;",
        "data-batchid": "",
        "data-uniqueid": item.AssetCatalogueId,
        "title": "Delete"
      }
    }, [_c('i', {
      staticClass: "fa fa-trash text-danger action-icon"
    })]) : _vm._e()])], 2), _vm._l(item.AssetCatalogueGroup, function (child, cindex) {
      return _c('tr', {
        key: cindex,
        staticClass: "insertedrowchild parentmid",
        staticStyle: {
          "display": "none"
        },
        attrs: {
          "data-id": item.AssetCatalogueId,
          "data-isgroup": "0",
          "data-assetcatalogid": child.AssetCatalogueId
        }
      }, [_c('td', {}, [_c('span', {
        staticClass: "hidden showcatalog",
        attrs: {
          "id": "cataloguegroup_id",
          "data-catalogid": child.ChildCatalogueId,
          "data-parentid": child.AssetCatalogueId,
          "data-uniqueid": child.ChildUniqueId,
          "data-id": child.ChildUniqueId,
          "data-availableitems": child.AvailableItems,
          "data-requestquantity": "",
          "data-batchid": "",
          "data-request_from_requisition": "1",
          "data-ChildUniqueName": child.Name
        }
      })]), _vm.GetParentDetails.isUsedFor != 'search' ? _c('td', {
        staticClass: "text-center",
        attrs: {
          "data-assetgroupid": child.AssetGroupId,
          "data-assettype": child.AssetType
        }
      }, [_vm._v(" " + _vm._s(child.AssetType))]) : _vm._e(), _c('td', {
        staticClass: "text-center",
        attrs: {
          "data-itemcode": child.ItemCode
        }
      }, [_vm._v(_vm._s(child.ItemCode))]), _c('td', {
        staticClass: "text-center",
        attrs: {
          "data-catalogname": child.AssetCatalogName
        }
      }, [_vm._v(" " + _vm._s(child.AssetCatalogName))]), _c('td', {
        staticClass: "text-center",
        attrs: {
          "data-locationname": child.LocationName
        }
      }, [_vm._v(_vm._s(child.LocationName) + " ")]), _c('td', {
        staticClass: "align-middle overflow-visible",
        attrs: {
          "data-Name": child.Name
        }
      }, [child.ChildUniqueId > 0 ? _c('input', {
        staticClass: "form-control txtcsUniqueName",
        attrs: {
          "type": "text",
          "name": "txtcsUniqueName",
          "placeholder": "Enter Name",
          "datacatalogid": child.AssetCatalogueId,
          "datalocationid": _vm.TreeValue
        }
      }) : _c('input', {
        staticClass: "form-control txtcsUniqueName",
        attrs: {
          "type": "text",
          "name": "txtcsUniqueName",
          "placeholder": "Enter Name",
          "datacatalogid": child.AssetCatalogueId,
          "datalocationid": _vm.TreeValue
        }
      })]), _c('td', {
        staticClass: "text-center form-group",
        staticStyle: {
          "width": "30%"
        },
        attrs: {
          "data-termscondition": child.IsEnableTerms
        }
      }, [child.IsEnableTerms == 1 ? _c('div', {
        staticClass: "form-group custom-control custom-checkbox",
        on: {
          "click": function ($event) {
            return _vm.handleClick();
          }
        }
      }, [_c('a', {
        attrs: {
          "href": "javascript:;",
          "data-path": item.AttachmentPath,
          "data-name": item.AttachmentName
        }
      }, [_c('input', {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: _vm.chkvalue,
          expression: "chkvalue"
        }],
        ref: "theCheckbox",
        refInFor: true,
        staticClass: "assertermscondition custom-control-input bb",
        attrs: {
          "type": "checkbox",
          "id": item.AssetCatalogueId,
          "name": "example" + index,
          "for": "chk_" + index
        },
        domProps: {
          "checked": Array.isArray(_vm.chkvalue) ? _vm._i(_vm.chkvalue, null) > -1 : _vm.chkvalue
        },
        on: {
          "click": function ($event) {
            return _vm.handleClick();
          },
          "change": function ($event) {
            var $$a = _vm.chkvalue,
              $$el = $event.target,
              $$c = $$el.checked ? true : false;
            if (Array.isArray($$a)) {
              var $$v = null,
                $$i = _vm._i($$a, $$v);
              if ($$el.checked) {
                $$i < 0 && (_vm.chkvalue = $$a.concat([$$v]));
              } else {
                $$i > -1 && (_vm.chkvalue = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
              }
            } else {
              _vm.chkvalue = $$c;
            }
          }
        }
      }), _c('label', {
        staticClass: "custom-control-label universal-custom-control-label mt-1",
        attrs: {
          "for": "chk_" + index,
          "name": "example" + index
        }
      }, [_vm._v(" " + _vm._s(_vm.$t('AgreeToTermsConditions')) + " "), !child.IsEnableTerms ? _c('a', {
        staticClass: "downloadtermfile ml-1",
        attrs: {
          "href": "javascript:;",
          "data-path": item.AttachmentPath,
          "data-name": item.AttachmentName,
          "title": "ClickToView"
        }
      }, [_vm._v(_vm._s(_vm.$t('ClickToView')))]) : _vm._e()])])]) : _c('span', [_vm._v(_vm._s(_vm.$t('NA')))])]), _vm.GetParentDetails.isUsedFor == 'search' ? [_c('td', {
        staticClass: "text-center",
        attrs: {
          "data-availableitems": child.AvailableItems
        }
      }, [_vm._v(" " + _vm._s(child.AvailableItems) + " ")]), _c('td', {
        staticClass: "text-center",
        attrs: {
          "data-requestquantity": child.AsseetGroupQuantity
        }
      }, [child.CreateUniqueNameListing == true ? _c('span', [_vm._v(_vm._s(child.AvailableItems))]) : _c('span', [_vm._v(_vm._s(child.AsseetGroupQuantity))])]), _c('td', {
        attrs: {
          "data-createuniquenamelisting": child.Name
        }
      }, [_c('input', {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: child.AsseetGroupQuantity,
          expression: "child.AsseetGroupQuantity"
        }],
        staticClass: "txtitems textfield textalignright text-center",
        attrs: {
          "type": "text",
          "data-availableitems": child.AvailableItems,
          "data-requestquantity": child.AsseetGroupQuantity,
          "maxlength": "4",
          "data-numberonly": "yes"
        },
        domProps: {
          "value": child.AsseetGroupQuantity
        },
        on: {
          "input": function ($event) {
            if ($event.target.composing) return;
            _vm.$set(child, "AsseetGroupQuantity", $event.target.value);
          }
        }
      })]), _c('td', {
        attrs: {
          "data-containerlist": "@child.ChildContainerList"
        }
      }, [child.ContainerList != null && Boolean(child.ChildContainerList.Text) == false ? _c('select', {
        staticClass: "disabled_grey"
      }, [_c('option', [_vm._v(_vm._s(child.ChildContainerList.Text))])]) : _c('span', [_vm._v(_vm._s(_vm.$t('NA')))])])] : _vm._e(), _vm.GetParentDetails.isUsedFor != 'search' ? [_c('td', {
        staticClass: "text-center"
      }, [_vm._v(" " + _vm._s(child.AvailableItems) + " ")]), _vm.GetParentDetails.isUsedFor != 'search' ? _c('td', {
        staticClass: "text-center"
      }, [item.AssetGroupId > 0 ? _c('span', [_vm._v(_vm._s(Boolean(child.CreateUniqueNameListing) == true ? 1 : child.AsseetGroupQuantity))]) : _c('span', [_vm._v(_vm._s(Boolean(child.CreateUniqueNameListing) == true ? 1 : child.AsseetGroupQuantity))])]) : _vm._e(), _vm.GetParentDetails.isUsedFor != 'search' ? _c('td', [item.AssetGroupId > 0 ? _c('input', {
        staticClass: "txtitems textfield text-right form-control align-middle",
        attrs: {
          "data-requestquantity": child.AvailableItems,
          "data-availableitems": child.AvailableItems,
          "type": "text"
        },
        domProps: {
          "value": Boolean(child.CreateUniqueNameListing) == true ? 1 : child.AsseetGroupQuantity
        }
      }) : _c('input', {
        staticClass: "txtitems textfield text-right form-control align-middle",
        attrs: {
          "data-requestquantity": child.AvailableItems,
          "data-availableitems": child.AvailableItems,
          "type": "text"
        },
        domProps: {
          "value": Boolean(child.CreateUniqueNameListing) == true ? 1 : child.AsseetGroupQuantity
        }
      })]) : _vm._e(), _vm.GetParentDetails.isUsedFor != 'search' ? _c('td', {
        staticClass: "lastrow"
      }, [_c('select', {
        staticClass: "disabled_grey form-control text-secondary disabled",
        attrs: {
          "disabled": "disabled"
        }
      }, [_c('option', {
        attrs: {
          "value": ""
        }
      }, [_vm._v(_vm._s(_vm.$t('Select')))]), _c('option', {
        attrs: {
          "selected": "selected"
        },
        domProps: {
          "value": _vm.items.Value
        }
      }, [_vm._v(_vm._s(_vm.items.Text))]), _c('option', {
        domProps: {
          "value": _vm.items.Value
        }
      }, [_vm._v(_vm._s(_vm.items.Text))])])]) : _vm._e()] : _vm._e(), _c('td', {
        staticClass: "text-center"
      }, [_c('a', {
        staticClass: "ancremoveData recyclebin enable",
        attrs: {
          "href": "javascript:;",
          "data-batchid": "",
          "data-uniqueid": child.AssetCatalogueId,
          "title": "Delete"
        }
      }, [_c('i', {
        staticClass: "fa fa-trash text-danger action-icon"
      })])])], 2);
    })];
  })], 2) : _c('tbody', [_c('tr', [_c('td', {
    staticClass: "text-center text-danger align-middle no_records",
    attrs: {
      "colspan": "11"
    }
  }, [_vm._v(_vm._s(_vm.$t('NoItemAvailable')) + " ")])])])])])])]) : _vm._e(), _vm.IsAssetOfList ? _c('ModelAssetOfList', {
    attrs: {
      "ListData": _vm.GroupData,
      "issueTo": _vm.issueTo
    },
    on: {
      "AssestArray": _vm.AssestArray
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Modal/SearchAsset.vue?vue&type=template&id=0d3edb90&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/ListOfAssest.vue?vue&type=template&id=470275dc&
var ListOfAssestvue_type_template_id_470275dc_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0 float-left"
  }, [_c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-4 float-left",
    attrs: {
      "id": "divRequestionItemsData"
    }
  }, [_c('div', {
    staticClass: "heading-border"
  }, [_c('h5', {
    staticClass: "h5"
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('ListOfAssest')))])])]), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12 mb-2 mt-2"
  }, [_c('div', {
    staticClass: "mr-2 d-inline-block"
  }, [_c('span', {
    staticClass: "legend-Progress colorboxsquare"
  }), _vm._v(_vm._s(_vm.$t('ContainerProducts')) + " ")]), _c('div', {
    staticClass: "mr-2 d-inline-block"
  }, [_c('span', {
    staticClass: "legend-ovrdue colorboxsquare"
  }), _vm._v(_vm._s(_vm.$t('NotAvailable')) + " ")]), _c('div', {
    staticClass: "mr-2 d-inline-block"
  }, [_c('span', {
    staticClass: "text-danger font-weight-bold"
  }, [_vm._v("*")]), _vm._v(_vm._s(_vm.$t('MandatoryItems')) + " ")])])]), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left listing"
  }, [_c('div', {
    staticClass: "table-responsive tableborder"
  }, [_c('table', {
    staticClass: "table table-bordered dt-responsive nowrap my-0",
    attrs: {
      "id": "tblassestassignmentinfo"
    }
  }, [_c('thead', {
    staticClass: "thead-bg"
  }, [_c('tr', [_c('th', {
    staticClass: "text-center",
    staticStyle: {
      "min-width": "50px"
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('hash')))])]), _c('th', {
    staticClass: "text-center",
    staticStyle: {
      "min-width": "50px"
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('ItemType')))])]), _c('th', {
    staticClass: "text-center",
    staticStyle: {
      "min-width": "50px"
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('ItemCode')))])]), _c('th', {
    staticClass: "text-center",
    staticStyle: {
      "min-width": "50px"
    }
  }, [_c('span', [_vm._v(" " + _vm._s(_vm.$t('ItemName')))])]), _c('th', {
    staticClass: "text-center",
    staticStyle: {
      "min-width": "50px"
    }
  }, [_c('span', [_vm._v(" " + _vm._s(_vm.$t('LocationName')))])]), _c('th', {
    staticStyle: {
      "min-width": "285px"
    }
  }, [_c('span', [_vm._v(" " + _vm._s(_vm.$t('UniqueName')))])]), _c('th', {
    staticClass: "text-center",
    staticStyle: {
      "min-width": "50px"
    }
  }, [_c('span', [_vm._v(" " + _vm._s(_vm.$t('TermsAndConditions')))])]), _c('th', {
    staticClass: "text-center",
    staticStyle: {
      "min-width": "50px"
    }
  }, [_c('span', [_vm._v(" " + _vm._s(_vm.$t('AvailableItems')))])]), _c('th', {
    staticClass: "text-center",
    staticStyle: {
      "min-width": "50px"
    }
  }, [_c('span', [_vm._v(" " + _vm._s(_vm.$t('PendingAvailableQuantity')))])]), _c('th', {
    staticClass: "text-center",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('RequestQuantity')) + " ")])]), _c('th', {
    staticClass: "text-center",
    staticStyle: {
      "min-width": "200px"
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('Compartment')))])]), _c('th', {
    staticClass: "text-center",
    staticStyle: {
      "min-width": "100px"
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('Action')))])])])]), _c('tbody', [_vm._l(_vm.AssetListData, function (item, index) {
    return [_c('tr', {
      key: index,
      staticClass: "parentmain insertedrow bg-gold showassetcataloguegroup",
      class: _vm.clsColor
    }, [_c('td', [item.AssetCatalogueGroup.length > 0 ? _c('span', {
      staticClass: "togglearrow arrowwhitecollapse_roles fa fa-caret-right fa-2x showcatalog showassetcatalog"
    }) : _c('span', {
      staticClass: "showcatalog hidden showassetcatalog"
    })]), _c('td', {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(item.AssetType))]), _c('td', {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(item.ItemCode))]), _c('td', {
      staticClass: "text-center item-name"
    }, [_vm._v(_vm._s(item.AssetCatalogName))]), _c('td', {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(item.LocationName))]), _c('td', {
      staticClass: "text-center"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.AssetUniqueName,
        expression: "item.AssetUniqueName"
      }],
      class: item.ParentUniqueId > 0 ? 'form-control txtcsUniqueName disabled' : 'form-control txtcsUniqueName',
      attrs: {
        "type": "text",
        "name": "txtcsUniqueName"
      },
      domProps: {
        "value": item.AssetUniqueName
      },
      on: {
        "input": function ($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "AssetUniqueName", $event.target.value);
        }
      }
    }), item.ParentUniqueId <= 0 ? [_c('div', {
      staticClass: "d-block py-2 text-center"
    }, [_vm._v(" " + _vm._s(_vm.$t('OR')))]), _c('input', {
      staticClass: "form-control txtBarcodesearch col-10 text-center float-left",
      attrs: {
        "type": "text",
        "placeholder": "Enter Barcode"
      }
    }), _vm._m(0, true)] : _vm._e()], 2), _c('td', {
      staticClass: "text-center"
    }, [item.IsEnableTerms == 1 ? _c('input', {
      staticClass: "assertermscondition",
      attrs: {
        "type": "checkbox",
        "value": "1",
        "disabled": "disabled",
        "checked": "checked"
      }
    }) : _c('span', [_vm._v(_vm._s(_vm.$t('NA')))])]), _c('td', {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(item.AvailableItems))]), _c('td', {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(item.PendingAvailableQuantity))]), _c('td', {
      staticClass: "text-center"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.RequestQuantity,
        expression: "RequestQuantity"
      }],
      staticClass: "txtitems form-control txtAssetQuentity",
      class: _vm.clsQtyDisabled,
      attrs: {
        "type": "text",
        "value": "1"
      },
      domProps: {
        "value": _vm.RequestQuantity
      },
      on: {
        "input": function ($event) {
          if ($event.target.composing) return;
          _vm.RequestQuantity = $event.target.value;
        }
      }
    })]), _c('td', {
      staticClass: "text-center"
    }, [item.ContainerList != null && item.ContainerList.Count > 0 && !(item.ContainerList.Text == '' || item.ContainerList.Text == null) ? _c('select', {
      staticClass: "disabled form-control",
      attrs: {
        "readonly": "readonly"
      }
    }, [_c('option', [_vm._v(_vm._s(item.ContainerList.Text))])]) : _c('span', [_vm._v(_vm._s(_vm.$t('NA')))])]), _c('td', {
      staticClass: "text-center",
      attrs: {
        "id": "lastrow1"
      }
    }, [item.HasRelatedProducts ? _c('a', {
      staticClass: "relatedproduct",
      attrs: {
        "href": "javascript:;",
        "title": "Relateditem"
      },
      on: {
        "click": function ($event) {
          return _vm.relatedproduct(item);
        }
      }
    }, [_c('em', {
      staticClass: "fa fa-sitemap text-primary",
      attrs: {
        "aria-hidden": "true"
      }
    })]) : _vm._e(), _c('a', {
      attrs: {
        "href": "javascript:;",
        "title": "Remove"
      },
      on: {
        "click": function ($event) {
          return _vm.deleteItem(item.AssetCatalogueId);
        }
      }
    }, [_c('em', {
      staticClass: "fa fa-trash text-danger action-icon"
    })]), _vm._v("' ")])]), _vm._l(item.AssetCatalogueGroup, function (child, cindex) {
      return _c('tr', {
        key: cindex,
        class: _vm.clsColor
      }, [_vm._m(1, true), _c('td', {
        staticClass: "text-center"
      }, [_vm._v(_vm._s(child.AssetType))]), _c('td', {
        staticClass: "text-center"
      }, [_vm._v(_vm._s(child.ItemCode))]), _c('td', {
        staticClass: "text-center item-name"
      }, [_vm._v(_vm._s(child.AssetCatalogName))]), _c('td', {
        staticClass: "text-center"
      }, [_vm._v(_vm._s(child.LocationName))]), _c('td', {
        staticClass: "text-center"
      }, [_c('input', {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: child.AssetUniqueName,
          expression: "child.AssetUniqueName"
        }],
        staticClass: "form-control txtcsUniqueName",
        attrs: {
          "type": "text",
          "name": "txtcsUniqueName"
        },
        domProps: {
          "value": child.AssetUniqueName
        },
        on: {
          "input": function ($event) {
            if ($event.target.composing) return;
            _vm.$set(child, "AssetUniqueName", $event.target.value);
          }
        }
      }), item.ParentUniqueId <= 0 ? [_c('div', {
        staticClass: "d-block py-2 text-center"
      }, [_vm._v(" " + _vm._s(_vm.$t('OR')))]), _c('input', {
        staticClass: "form-control txtBarcodesearch col-10 text-center float-left",
        attrs: {
          "type": "text",
          "placeholder": "Enter Barcode"
        }
      }), _vm._m(2, true)] : _vm._e()], 2), _c('td', {
        staticClass: "text-center"
      }, [item.IsEnableTerms == 1 ? _c('input', {
        staticClass: "assertermscondition",
        attrs: {
          "type": "checkbox",
          "value": "1",
          "disabled": "disabled",
          "checked": "checked"
        }
      }) : _c('span', [_vm._v(_vm._s(_vm.$t('NA')))])]), _c('td', {
        staticClass: "text-center"
      }, [_vm._v(_vm._s(child.AvailableItems))]), _c('td', {
        staticClass: "text-center"
      }, [_vm._v(_vm._s(child.PendingAvailableQuantity))]), _c('td', {
        staticClass: "text-center"
      }, [_c('input', {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: _vm.RequestQuantity,
          expression: "RequestQuantity"
        }],
        staticClass: "txtitems form-control txtAssetQuentity",
        class: _vm.clsQtyDisabled,
        attrs: {
          "type": "text",
          "value": "1"
        },
        domProps: {
          "value": _vm.RequestQuantity
        },
        on: {
          "input": function ($event) {
            if ($event.target.composing) return;
            _vm.RequestQuantity = $event.target.value;
          }
        }
      })]), _c('td', {
        staticClass: "text-center"
      }, [child.ContainerList != null && child.ContainerList.Count > 0 && !(child.ContainerList.Text == '' || child.ContainerList.Text == null) ? _c('select', {
        staticClass: "disabled form-control",
        attrs: {
          "readonly": "readonly"
        }
      }, [_c('option', [_vm._v(_vm._s(child.ContainerList.Text))])]) : _c('span', [_vm._v(_vm._s(_vm.$t('NA')) + " ")])]), _c('td', {
        staticClass: "text-center",
        attrs: {
          "id": "lastrow1"
        }
      }, [child.HasRelatedProducts ? _c('a', {
        staticClass: "relatedproduct",
        attrs: {
          "href": "javascript:;",
          "title": "Relateditem"
        },
        on: {
          "click": function ($event) {
            return _vm.relatedproduct(child);
          }
        }
      }, [_c('em', {
        staticClass: "fa fa-sitemap text-primary",
        attrs: {
          "aria-hidden": "true"
        }
      })]) : _vm._e(), _vm._m(3, true), _vm._v("' ")])]);
    })];
  })], 2)])])])])])]), _vm.Isrelatedproduct ? _c('RelatedProrduct', {
    attrs: {
      "RelatedProductDaata": _vm.RelatedProductDaata,
      "AssetListData": _vm.AssetListData
    },
    on: {
      "CloseRelatedPopup": _vm.CloseRelatedPopup,
      "RelatedProduct": _vm.RelatedProduct
    }
  }) : _vm._e()], 1);
};
var ListOfAssestvue_type_template_id_470275dc_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('a', {
    staticClass: "float-left green ancsearchbrcode m-2",
    attrs: {
      "href": "javascript:;",
      "title": "ClickHereToSearch"
    }
  }, [_c('em', {
    staticClass: "searchicon enable fa fa-search action-icon text-success"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('td', {}, [_c('span', {
    staticClass: "hidden showcatalog",
    attrs: {
      "id": "cataloguegroup_id"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('a', {
    staticClass: "float-left green ancsearchbrcode m-2",
    attrs: {
      "href": "javascript:;",
      "title": "ClickHereToSearch"
    }
  }, [_c('i', {
    staticClass: "searchicon enable fa fa-search action-icon text-success"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('a', {
    attrs: {
      "href": "javascript:;",
      "title": "Remove"
    }
  }, [_c('em', {
    staticClass: "fa fa-trash text-danger action-icon"
  })]);
}];

// CONCATENATED MODULE: ./src/components/Modal/ListOfAssest.vue?vue&type=template&id=470275dc&

// EXTERNAL MODULE: ./src/components/Modal/RelatedProductPopup.vue + 4 modules
var RelatedProductPopup = __webpack_require__("97c9");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/ListOfAssest.vue?vue&type=script&lang=js&



/* harmony default export */ var ListOfAssestvue_type_script_lang_js_ = ({
  components: {
    RelatedProrduct: RelatedProductPopup["a" /* default */]
  },
  props: {
    ListData: {
      type: Array,
      required: true
    },
    issueTo: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      AssetListData: [],
      clsColor: '',
      clsQtyDisabled: '',
      UserId: null,
      RequestQuantity: 1,
      AssestArray: [],
      Isrelatedproduct: false,
      RelatedProductDaata: []
    };
  },
  created: function () {
    this.GetCompanyAssestCatalogs();
    this.UserId = this.GetUserInfo.ID;
  },
  methods: {
    RelatedProduct: function (ths) {
      this.AssetListData.push(ths[0]);
    },
    GetCompanyAssestCatalogs: function () {
      var url = `id=${this.ListData[0].AssetCatalogueId}&isView=1&barcode=&assetType=&assetUniqueId=${this.ListData[0].ParentUniqueId}&selfCheckout=no&reqFrom=assetassignment&isFor=search&isuniqueSearch=1&issueTo=${this.issueTo}&assignedFrom=&assignedTill=&&startTime=&endTime=&locationId=${this.ListData[0].LocationId}&RFID=0&pageSize=&pageNum=&assignedFromDateTime=&assignedTillDateTime=&uniqueIds=${this.ListData[0].ParentUniqueId}&catalogueIds=${this.ListData[0].AssetCatalogueId}`;
      DataService["a" /* default */].GetCompanyAssestCatalogsDetalis(url).then(response => {
        this.AssetListData = response.data;
        this.GetDataFromAsset();
        this.AssetListData.forEach(ele => {
          if (ele.IsContainer == 1) {
            this.clsColor = "low-bar";
          }
          this.clsQtyDisabled = ele.CreateUniqueNameListing && ele.ParentUniqueId > 0 ? "disabled" : "";
          ele.AssetCatalogueGroup.forEach(child => {
            if (child.CreateUniqueNameListing == true) {
              child.AvailableItems = 1;
              child.AsseetGroupQuantity = 1;
            }
            if (child.IsContainer == 1) {
              this.clsColor = "low-bar";
            }
          });
        });
      });
    },
    GetDataFromAsset() {
      var vm = this;
      debugger;
      vm.AssetListData.forEach(item => {
        let obj = {
          AssetCatalogUniqueId: item.ParentUniqueId,
          RequestFromRequsition: 1,
          AssetQuantity: this.RequestQuantity,
          RequestQuantity: 1,
          BatchId: '',
          AssetUniqueName: item.Name,
          IsGroup: null,
          ParentAssetCatalogUniqueId: item.AssetCatalogueId
        };
        vm.AssestArray.push(obj);
      });
      vm.$emit('AssestArray', this.AssestArray);
    },
    relatedproduct: function (ths) {
      this.Isrelatedproduct = true;
      this.RelatedProductDaata.push(ths);
    },
    CloseRelatedPopup: function () {
      this.Isrelatedproduct = false;
    },
    deleteItem: function (value) {
      var vm = this;
      vm.confirmR(vm.$t('Please verify that you want to delete this record'), true, false, function (result) {
        const index = vm.AssetListData.findIndex(x => x.AssetCatalogueId === value);
        if (index !== -1) {
          vm.AssetListData.splice(index, 1);
          vm.$parent.IsAssetOfList = false;
        }
        return vm.ShowAlert(vm.$t("Product has been deleted Successfully "), "success", vm.$t("Alert"));
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/ListOfAssest.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_ListOfAssestvue_type_script_lang_js_ = (ListOfAssestvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Modal/ListOfAssest.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Modal_ListOfAssestvue_type_script_lang_js_,
  ListOfAssestvue_type_template_id_470275dc_render,
  ListOfAssestvue_type_template_id_470275dc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ListOfAssest = (component.exports);
// EXTERNAL MODULE: ./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.cjs.js
var vue_treeselect_cjs = __webpack_require__("ca17");
var vue_treeselect_cjs_default = /*#__PURE__*/__webpack_require__.n(vue_treeselect_cjs);

// EXTERNAL MODULE: ./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.css
var vue_treeselect = __webpack_require__("542c");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/SearchAsset.vue?vue&type=script&lang=js&





/* harmony default export */ var SearchAssetvue_type_script_lang_js_ = ({
  components: {
    ModelAssetOfList: ListOfAssest,
    'tree-view': vue_treeselect_cjs_default.a
  },
  data() {
    return {
      ProducttData: [],
      Groupname: '',
      LocationData: [],
      AssetTypeData: [],
      popover: {
        visibility: 'click'
      },
      txtAssetType: '',
      UserId: null,
      txtProduct: '',
      txtItemName: '',
      itemname: '',
      ProductsArray: [],
      showProductDropdown: false,
      iselectVal: '',
      ShowProducttbl: false,
      GetParentDetails: null,
      containerCls: '',
      IsAssetOfList: false,
      issueTo: null,
      txtBarcode: '',
      FirstfolderShareOption: 'searchproduct',
      Isbarcodediv: false,
      Rfid: 0,
      chkvalue: 0,
      IsChecked: false,
      count: 0,
      options: [],
      TreeValue: null,
      RFIDSetupButton: true
    };
  },
  created: async function () {
    this.UserId = this.GetUserInfo.ID;
    await this.GetLocationByuserId();
    this.isLoaded = true;
    this.EnableDisableButton();
  },
  methods: {
    handleClick() {
      this.count = 0;
      if (!this.$refs.theCheckbox[0].checked) {
        this.IsChecked = true;
        this.chkvalue = 1;
        this.count = 1;
      } else {
        this.IsChecked = false;
        this.chkvalue = 0;
      }
    },
    GetLocationByuserId: async function () {
      var vm = this;
      var url = `reqForm=assetassignment`;
      await DataService["a" /* default */].GetLocationByuserId(url).then(response => {
        vm.FindalLocationArray = [];
        vm.TreeValue = response.data.data[0].COMPANY_LOCATION_ID;
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
    BindItemTypeByUserId: function (ths) {
      let url = `type=ITEMCODE&issueTo=&locationId=${ths}&requestType=ASSIGN&requestFrom=TRANSFER`;
      DataService["a" /* default */].AssignGetAssetType(url).then(response => {
        this.AssetTypeData = response.data;
      });
    },
    GetCompanyAssestCatalogs: async function (ths) {
      let url = `id=${ths}&issueTo=${this.UserId}&locationId=${this.TreeValue}&requestFrom=assetassignment`;
      await DataService["a" /* default */].GetCompanyAssestCatalogs(url).then(response => {
        this.ProducttData = response.data;
      });
    },
    setProductsName: function (event) {
      var vm = this;
      vm.iselectVal = event.Value;
      vm.itemname = event.Name;
      vm.showProductDropdown = false;
    },
    Filterditems: async function ($event) {
      let vm = this;
      console.log($event);
      vm.filterRecodes = null;
      if (vm.itemname !== "") {
        await vm.ItemListOnclick();
        const searchTerm = vm.itemname.toLowerCase();
        vm.filterRecodes = vm.ProductsArray.filter(x => x.Name.toLowerCase().includes(searchTerm));
        vm.ProductsArray = vm.filterRecodes;
        this.showProductDropdown = true;
      } else {
        this.showProductDropdown = false;
      }
    },
    ItemListOnclick: async function () {
      var url = `assetCatalogId=${this.txtProduct}&name=&issueTo=${this.UserId}&locationId=${this.TreeValue}&requestFrom=assetassignment&assetType=`;
      await DataService["a" /* default */].GetUniqueAssetItems(url).then(response => {
        this.ProductsArray = response.data;
        this.showProductDropdown = true;
      });
    },
    searchfilter: function () {
      var vm = this;
      vm.$emit('GetDetailsofParent');
      vm.GetParentDetails = JSON.parse(sessionStorage.getItem("GetParentDetails"));
      sessionStorage.removeItem("GetParentDetails");
      vm.$refs.SearchAssetform.validate().then(result => {
        if (result) {
          vm.DateofAssignment = vm.GetParentDetails.FromDate == "" ? null : vm.$options.filters.formatDate(vm.GetParentDetails.FromDate);
          vm.DateofAssignmentTillDate = vm.GetParentDetails.TillDate == "" ? null : vm.$options.filters.formatDate(vm.GetParentDetails.TillDate);
          vm.issueTo = vm.GetParentDetails.UserID == '' ? vm.UserId : vm.GetParentDetails.UserID;
          var url = `id=${vm.txtProduct}&isView=3&barcode=&assetType=${vm.txtAssetType}&assetUniqueId=${vm.iselectVal}&selfCheckout=&reqFrom=assetassignment&isFor=search&isuniqueSearch=&issueTo=${vm.issueTo}&assignedFrom=&assignedTill=&&startTime=&endTime=&locationId=${vm.TreeValue}&RFID=0&pageSize=&pageNum=&assignedFromDateTime=${vm.DateofAssignment}&assignedTillDateTime=${vm.DateofAssignmentTillDate}&uniqueIds=${vm.iselectVal}&catalogueIds=${vm.txtProduct}`;
          DataService["a" /* default */].GetCompanyAssestCatalogsDetalis(url).then(response => {
            vm.GroupData = response.data;
            vm.ShowProducttbl = true;
            vm.GroupData.forEach(ele => {
              if (ele.CreateUniqueNameListing == true) {
                ele.AvailableItems = 1;
                ele.AsseetGroupQuantity = 1;
              } else {
                ele.AsseetGroupQuantity = parseInt(ele.AvailableItems);
              }
              if (ele.IsContainer == 1) {
                vm.containerCls = "low-bar";
              }
              if (ele.AssetCatalogueGroup.length > 0) {
                if (item.AssetCatalogueGroup.IsContainer == 1) {
                  vm.containerCls = "low-bar";
                }
              }
              ele.AssetCatalogueGroup.forEach(child => {
                if (child.CreateUniqueNameListing == true) {
                  child.AvailableItems = 1;
                  child.AsseetGroupQuantity = 1;
                } else {
                  child.AsseetGroupQuantity = parseInt(child.AvailableItems);
                }
                if (child.IsContainer == 1) {
                  containerCls = "low-bar";
                }
              });
            });
          });
        } else {
          vm.ShowAlert(vm.$t("CorrectHighlightedErrors"), "warning", vm.$t('Alert'));
        }
      });
    },
    OpenAssetOfList: function () {
      if (this.IsChecked || this.$refs.theCheckbox == undefined) {
        this.IsAssetOfList = true;
        this.ShowProducttbl = false;
      } else {
        this.ShowAlert(this.$t("TermsAndConditionsCheck"), "warning", this.$t('Alert'));
      }
    },
    SearchProducts: function () {
      this.FirstfolderShareOption == 'Barcode' ? this.Isbarcodediv = true : this.Isbarcodediv = false;
    },
    AssestArray(AssestArray) {
      this.$emit('AssestArrayData', AssestArray);
    },
    CallListofAssestMethod() {
      var vm = this;
      vm.$refs.ListAssest.GetDataFromAsset();
      vm.AssestArrayData();
    },
    SearchProductList: function () {
      this.ShowsearchData('Searchassest_barcode');
    },
    RFIDProductList: function () {
      this.Rfid = 1;
      this.ShowsearchData('Searchassest_barcode');
    },
    ShowsearchData: function (btn) {
      var vm = this;
      vm.$emit('GetDetailsofParent');
      vm.GetParentDetails = JSON.parse(sessionStorage.getItem("GetParentDetails"));
      sessionStorage.removeItem("GetParentDetails");
      var assetType = btn != 'Searchassest_barcode' ? vm.txtAssetType : 0;
      var assetCatalog = btn != 'Searchassest_barcode' ? vm.txtProduct : 0;
      var assestUniqueId = btn != 'Searchassest_barcode' ? vm.iselectVal : 0;
      var locationId = btn != 'Searchassest_barcode' ? vm.TreeValue : 0;
      vm.issueTo = vm.GetParentDetails.UserID == '' ? vm.UserId : vm.GetParentDetails.UserID;
      var url = `id=${assetCatalog}&isView=3&barcode=${vm.txtBarcode}&assetType=${assetType}&assetUniqueId=${assestUniqueId}&selfCheckout=&reqFrom=assetassignment&isFor=search&isuniqueSearch=&issueTo=${vm.issueTo}&assignedFrom=&assignedTill=&startTime=&endTime=&locationId=${locationId}&RFID=${vm.Rfid}&pageSize=&pageNum=&assignedFromDateTime=&assignedTillDateTime=&uniqueIds=&catalogueIds=`;
      DataService["a" /* default */].GetCompanyAssestCatalogsDetalis(url).then(response => {
        vm.GroupData = response.data;
        vm.ShowProducttbl = true;
        vm.GroupData.forEach(ele => {
          if (ele.CreateUniqueNameListing == true) {
            ele.AvailableItems = 1;
            ele.AsseetGroupQuantity = 1;
          } else {
            ele.AsseetGroupQuantity = parseInt(ele.AvailableItems);
          }
          if (ele.IsContainer == 1) {
            vm.containerCls = "low-bar";
          }
          if (ele.AssetCatalogueGroup.length > 0) {
            if (item.AssetCatalogueGroup.IsContainer == 1) {
              vm.containerCls = "low-bar";
            }
          }
          ele.AssetCatalogueGroup.forEach(child => {
            if (child.CreateUniqueNameListing == true) {
              child.AvailableItems = 1;
              child.AsseetGroupQuantity = 1;
            } else {
              child.AsseetGroupQuantity = parseInt(child.AvailableItems);
            }
            if (child.IsContainer == 1) {
              containerCls = "low-bar";
            }
          });
        });
      });
    },
    EnableDisableButton() {
      var vueObj = this;
      vueObj.isLoading = true;
      DataService["a" /* default */].GetEnableDisableGroupCode().then(response => {
        if (response.data.length > 0) {
          if (response.data[0].IS_ENABLE == 0) {
            this.RFIDSetupButton = false;
          } else {
            this.RFIDSetupButton = true;
          }
        } else {
          this.RFIDSetupButton = true;
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/SearchAsset.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_SearchAssetvue_type_script_lang_js_ = (SearchAssetvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Modal/SearchAsset.vue?vue&type=style&index=0&id=0d3edb90&prod&lang=css&
var SearchAssetvue_type_style_index_0_id_0d3edb90_prod_lang_css_ = __webpack_require__("7a51");

// CONCATENATED MODULE: ./src/components/Modal/SearchAsset.vue






/* normalize component */

var SearchAsset_component = Object(componentNormalizer["a" /* default */])(
  Modal_SearchAssetvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SearchAsset = __webpack_exports__["a"] = (SearchAsset_component.exports);

/***/ }),

/***/ "c241":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vue-treeselect__control{border:none;height:24px;padding:0}.vue-treeselect--searchable .vue-treeselect__input-container{padding:0!important}.vue-treeselect__placeholder{color:#303030!important}.vue-treeselect__control-arrow{color:#000}.vue-treeselect__placeholder{line-height:24px}", ""]);
// Exports
module.exports = exports;


/***/ })

}]);
//# sourceMappingURL=chunk-175f87c0.js.map