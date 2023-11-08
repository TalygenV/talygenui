(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-46b11c22"],{

/***/ "07ed":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddAssetGrouping_vue_vue_type_style_index_0_id_3c950e38_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8f87");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddAssetGrouping_vue_vue_type_style_index_0_id_3c950e38_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddAssetGrouping_vue_vue_type_style_index_0_id_3c950e38_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8f87":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("b6fc");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("6f5ee330", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "8fc4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Asset/AddAssetGrouping.vue?vue&type=template&id=3c950e38&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "main-content"
  }, [_c('div', [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12 padding-t_8"
  }, [_c('div', {
    staticClass: "theme-primary partition-full"
  }, [_c('span', {
    staticClass: "p-name text-white"
  }, [_vm._v(_vm._s(_vm.$t('AddProductContainerList')))]), _c('span', {
    staticClass: "p-actions float-right"
  }, [_c('RouterLink', {
    staticClass: "p-action-btn text-white float-right px-2 w-100",
    attrs: {
      "to": '/Asset/AssetGrouping'
    }
  }, [_c('em', {
    staticClass: "fa fa-angle-double-left"
  }), _c('br'), _vm._v(_vm._s(_vm.$t('BacktoList')) + " ")])], 1)])])])]), _c('div', {
    staticClass: "border p-3"
  }, [_c('div', {
    staticClass: "col-md-12 p-0",
    attrs: {
      "id": "dynmicForm"
    }
  }, [_c('Form', {
    ref: "AssetAddGroupform",
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        values,
        meta
      }) {
        return [_c('div', {
          staticClass: "row"
        }, [_c('div', {
          staticClass: "col-lg-4"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', [_vm._v(_vm._s(_vm.$t('ConsumableItemType')))]), _c('Field', {
          attrs: {
            "name": _vm.$t('ConsumableItemType'),
            "rules": {
              'required': true
            },
            "label": "Select Product Type"
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
                  value: _vm.AssetTypeId,
                  expression: "AssetTypeId"
                }],
                class: {
                  'form-control': true,
                  'is-invalid': errors[0]
                },
                on: {
                  "change": [function ($event) {
                    var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                      return o.selected;
                    }).map(function (o) {
                      var val = "_value" in o ? o._value : o.value;
                      return val;
                    });
                    _vm.AssetTypeId = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
                  }, function ($event) {
                    return _vm.GetCompanyAssestCatalogs();
                  }]
                }
              }, [_c('option', {
                attrs: {
                  "value": "null"
                }
              }, [_vm._v(_vm._s(_vm.$t('Select')))]), _vm._l(_vm.ProductTypelist, function (item) {
                return _c('option', {
                  key: item.value,
                  domProps: {
                    "value": item.Value
                  }
                }, [_vm._v(" " + _vm._s(item.Text))]);
              })], 2), errors[0] ? _c('span', {
                staticClass: "invalid-feedback d-block",
                attrs: {
                  "name": _vm.$t('ConsumableItemType')
                }
              }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
            }
          }], null, true)
        })], 1)]), _c('div', {
          staticClass: "col-lg-4"
        }, [_c('label', [_vm._v(_vm._s(_vm.$t('Location'))), _c('span', {
          staticClass: "text-danger"
        }, [_vm._v("*")])]), _c('Field', {
          attrs: {
            "name": _vm.$t('Location'),
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
                    return _vm.GetCompanyAssestCatalogs();
                  }
                },
                model: {
                  value: _vm.LocationId,
                  callback: function ($$v) {
                    _vm.LocationId = $$v;
                  },
                  expression: "LocationId"
                }
              }), errors[0] ? _c('span', {
                staticClass: "invalid-feedback d-block",
                attrs: {
                  "name": _vm.$t('Location')
                }
              }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
            }
          }], null, true)
        })], 1), _c('div', {
          staticClass: "col-lg-4"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', {}, [_vm._v(_vm._s(_vm.$t('SelectContainer')))]), _vm._v(":"), _c('span', {
          staticClass: "mandatory"
        }, [_vm._v("*")]), _c('Field', {
          attrs: {
            "name": _vm.$t('SelectContainer'),
            "rules": {
              'required': true
            },
            "label": "Select Container"
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
                  value: _vm.ContainerId,
                  expression: "ContainerId"
                }],
                class: {
                  'form-control': true,
                  'is-invalid': errors[0]
                },
                on: {
                  "change": function ($event) {
                    var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                      return o.selected;
                    }).map(function (o) {
                      var val = "_value" in o ? o._value : o.value;
                      return val;
                    });
                    _vm.ContainerId = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
                  }
                }
              }, [_c('option', {
                attrs: {
                  "value": "null"
                }
              }, [_vm._v(_vm._s(_vm.$t('Select')))]), _vm._l(_vm.ContainerData, function (item) {
                return _c('option', {
                  key: item.value,
                  domProps: {
                    "value": item.Value
                  }
                }, [_vm._v(" " + _vm._s(item.Text))]);
              })], 2), errors[0] ? _c('span', {
                staticClass: "invalid-feedback d-block",
                attrs: {
                  "name": _vm.$t('SelectContainer')
                }
              }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
            }
          }], null, true)
        })], 1)]), _c('div', {
          staticClass: "listing px-3"
        }, [_c('div', {
          staticClass: "table-responsive catalog_Row_MainBox",
          staticStyle: {
            "min-height": "auto"
          }
        }, [_c('table', {
          staticClass: "table table-bordered dt-responsive nowrap mt-0",
          staticStyle: {
            "width": "100%"
          },
          attrs: {
            "id": "tbContainer"
          }
        }, [_c('thead', {
          staticClass: "thead-bg"
        }, [_c('tr', [_c('th', {
          staticClass: "ui-resizable",
          staticStyle: {
            "width": "168px",
            "min-width": "168px",
            "max-width": "168px"
          },
          attrs: {
            "id": "th-PRODUCTNAME"
          }
        }, [_c('span', {
          staticStyle: {
            "min-width": "150px"
          },
          attrs: {
            "href": "javascript:;"
          }
        }, [_vm._v(" " + _vm._s(_vm.$t('AssetId')) + ":"), _c('span', {
          staticClass: "mandatory d-inline-block"
        }, [_vm._v("*")])]), _c('div', {
          staticClass: "sizer",
          attrs: {
            "id": "th-PRODUCTNAME-sizer"
          }
        }), _c('div', {
          staticClass: "ui-resizable-handle ui-resizable-e",
          staticStyle: {
            "z-index": "90"
          }
        })]), _c('th', {
          staticClass: "ui-resizable",
          staticStyle: {
            "width": "156px",
            "min-width": "156px",
            "max-width": "156px"
          },
          attrs: {
            "id": "th-COMPARTMENT"
          }
        }, [_c('span', {
          staticStyle: {
            "min-width": "138px"
          },
          attrs: {
            "href": "javascript:;"
          }
        }, [_vm._v(_vm._s(_vm.$t('Compartment')) + ":"), _c('span', {
          staticClass: "mandatory d-inline-block"
        }, [_vm._v("*")])]), _c('div', {
          staticClass: "sizer",
          attrs: {
            "id": "th-COMPARTMENT-sizer"
          }
        }), _c('div', {
          staticClass: "ui-resizable-handle ui-resizable-e",
          staticStyle: {
            "z-index": "90"
          }
        })])])]), _c('tbody', _vm._l(_vm.NewDynamicField, function (item, index) {
          return _c('tr', {
            key: item.Compartment,
            staticClass: "catalog_Row"
          }, [_c('td', {
            staticClass: "overflow-visible"
          }, [_c('Field', {
            attrs: {
              "name": 'ProductName' + (index + 1),
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
                    value: item.ProductName,
                    expression: "item.ProductName"
                  }],
                  class: {
                    'form-control tdcm ddlCompartmentId': true,
                    'is-invalid': errors[0]
                  },
                  attrs: {
                    "name": 'ProductName' + (index + 1)
                  },
                  on: {
                    "change": [function ($event) {
                      var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                        return o.selected;
                      }).map(function (o) {
                        var val = "_value" in o ? o._value : o.value;
                        return val;
                      });
                      _vm.$set(item, "ProductName", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
                    }, function ($event) {
                      return _vm.CheckProductType($event, index, item);
                    }]
                  }
                }, [_c('option', {
                  attrs: {
                    "value": "null"
                  }
                }, [_vm._v(_vm._s(_vm.$t('Select')))]), _vm._l(_vm.ItemNamelist, function (item, index1) {
                  return _c('option', {
                    key: index1,
                    domProps: {
                      "value": item.Value
                    }
                  }, [_vm._v(" " + _vm._s(item.Text))]);
                })], 2), errors[0] ? _c('span', {
                  staticClass: "invalid-feedback d-block",
                  attrs: {
                    "name": 'ProductName' + (index + 1)
                  }
                }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
              }
            }], null, true)
          })], 1), _c('td', {
            staticClass: "overflow-visible"
          }, [_c('Field', {
            staticClass: "d-flex",
            attrs: {
              "name": 'Compartment' + (index + 1),
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
                    value: item.Compartment,
                    expression: "item.Compartment"
                  }],
                  class: {
                    'form-control tdcm ddlCompartmentId': true,
                    'is-invalid': errors[0]
                  },
                  attrs: {
                    "name": 'Compartment' + (index + 1)
                  },
                  on: {
                    "change": function ($event) {
                      var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                        return o.selected;
                      }).map(function (o) {
                        var val = "_value" in o ? o._value : o.value;
                        return val;
                      });
                      _vm.$set(item, "Compartment", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
                    }
                  }
                }, [_c('option', {
                  attrs: {
                    "value": "null"
                  }
                }, [_vm._v(_vm._s(_vm.$t('Select')))]), _vm._l(_vm.CompartmentData, function (item, index) {
                  return _c('option', {
                    key: index,
                    domProps: {
                      "value": item.Value
                    }
                  }, [_vm._v(" " + _vm._s(item.Text))]);
                })], 2), errors[0] ? _c('span', {
                  staticClass: "invalid-feedback d-block",
                  attrs: {
                    "name": 'Compartment' + (index + 1)
                  }
                }, [_vm._v(_vm._s(errors[0]))]) : _vm._e(), _c('span', {
                  staticClass: "input-group-text border-0 bg-transparent p-0 pl-2"
                }, [0 == parseInt(index) ? _c('a', {
                  staticClass: "plupload_button plupload_add add_asset_group_item_box round-icon-small btn-success-light",
                  attrs: {
                    "href": "javascript:;",
                    "title": "",
                    "data-original-title": "Add New Row"
                  },
                  on: {
                    "click": _vm.addRow
                  }
                }, [_c('i', {
                  staticClass: "fa fa-plus pt-7 font-18"
                })]) : _vm._e(), 0 != parseInt(index) ? _c('a', {
                  staticClass: "round-icon-small btn-danger-light delete_asset_group_item_box float-left",
                  attrs: {
                    "href": "javascript:;",
                    "title": "",
                    "checkprivilege": "yes",
                    "data-groupid": "0",
                    "data-toggle-tooltip": "tooltip",
                    "data-original-title": "Delete"
                  },
                  on: {
                    "click": function ($event) {
                      return _vm.deleteRow(item);
                    }
                  }
                }, [_c('i', {
                  staticClass: "fa fa-trash"
                })]) : _vm._e()])];
              }
            }], null, true)
          })], 1)]);
        }), 0)]), _c('div')])])]), _c('div', {
          staticClass: "row flex-row-reverse my-3"
        }, [_c('div', {
          staticClass: "col-lg-6 text-right"
        }, [_vm.IsVisibleSave ? _c('button', {
          staticClass: "btn btn-success text-white mr-2",
          on: {
            "click": function ($event) {
              return _vm.Save(values, meta);
            }
          }
        }, [_c('em', {
          staticClass: "fa fa-save pr-2"
        }), _vm._v(_vm._s(_vm.$t('Save')))]) : _vm._e(), _c('a', {
          staticClass: "btn btn-danger",
          attrs: {
            "href": "javascript:;",
            "title": "",
            "data-toggle-tooltip": "tooltip",
            "data-original-title": "Cancel"
          },
          on: {
            "click": _vm.CancelButton
          }
        }, [_c('em', {
          staticClass: "fa fa-close pr-2"
        }), _vm._v(_vm._s(_vm.$t('Cancel')))])]), _c('div', {
          staticClass: "col-lg-6"
        }, [_c('div', {
          staticClass: "py-2"
        }, [_c('span', {
          staticClass: "mandatory"
        }, [_vm._v(_vm._s(_vm.$t('MandatoryString')))])])])])];
      }
    }])
  })], 1)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/Asset/AddAssetGrouping.vue?vue&type=template&id=3c950e38&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// EXTERNAL MODULE: ./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.cjs.js
var vue_treeselect_cjs = __webpack_require__("ca17");
var vue_treeselect_cjs_default = /*#__PURE__*/__webpack_require__.n(vue_treeselect_cjs);

// EXTERNAL MODULE: ./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.css
var vue_treeselect = __webpack_require__("542c");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Asset/AddAssetGrouping.vue?vue&type=script&lang=js&




/* harmony default export */ var AddAssetGroupingvue_type_script_lang_js_ = ({
  components: {
    'tree-view': vue_treeselect_cjs_default.a
  },
  data() {
    return {
      AssetTypeId: null,
      LocationId: null,
      ContainerName: '',
      ContainerId: null,
      AssetGroupId: 0,
      ChildRelatedInfoId: null,
      AssetCatalogQuantity: null,
      CompartmentId: 0,
      AssetCategoryId: 0,
      AssetCategoryName: null,
      ProductTypelist: [],
      ItemNamelist: [],
      LocationData: [],
      ContainerData: [],
      CompartmentData: [],
      NewDynamicField: [{
        Compartment: 0,
        ProductName: 0
      }],
      AssetsGroupItemsList: [],
      options: [],
      IsVisibleSave: true,
      isLoading: false
    };
  },
  async created() {
    await this.GetProductTypeDropdown();
    await this.GetLocationByCompanyId();
  },
  methods: {
    async GetProductTypeDropdown() {
      var vm = this;
      await DataService["a" /* default */].GetAssetContainer().then(response => {
        vm.ProductTypelist = response.data.Result;
      });
    },
    async GetLocationByCompanyId() {
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
    async GetCompanyAssestCatalogs() {
      var vm = this;
      vm.isLoading = true;
      if (vm.AssetTypeId != null) {
        vm.GetCompartmentName(vm.AssetTypeId);
      }
      if (vm.LocationId != null && vm.LocationId != null) {
        vm.GetItemNamesLocationwise(vm.LocationId);
      }
      if (vm.LocationId != null && vm.AssetTypeId != null && vm.LocationId != null) {
        var url = `asset_type_id=${vm.AssetTypeId}&related_info_id=&location_id=${vm.LocationId}`;
        DataService["a" /* default */].GetCompanyAssestCatalogsDDL(url).then(function (response) {
          vm.ContainerData = response.data.Result;
        });
      }
    },
    GetItemNamesLocationwise(LocationId) {
      var vm = this;
      var url = `related_info_id=&location_id=${LocationId}`;
      DataService["a" /* default */].GetItemNameDropdown(url).then(response => {
        vm.ItemNamelist = response.data.Result;
      });
    },
    GetCompartmentName(asset_type_id) {
      var vm = this;
      var url = `asset_type_id=${asset_type_id}`;
      DataService["a" /* default */].GetCompartmentName(url).then(response => {
        vm.CompartmentData = response.data.Result;
      });
    },
    Save(values, meta) {
      var vm = this;
      vm.isLoading = true;
      var filterName = '';
      var ContainerList = [];
      vm.$refs.AssetAddGroupform.validate().then(result => {
        if (result) {
          filterName = vm.ContainerData.find(x => x.Value == vm.ContainerId);
          vm.ContainerName = filterName.Text;
          vm.NewDynamicField.forEach(item => {
            ContainerList.push({
              AssetGroupId: 0,
              ChildRelatedInfoId: item.ProductName,
              AssetCatalogQuantity: 0,
              CompartmentId: item.Compartment,
              AssetCategoryId: item.ProductName,
              AssetCategoryName: null
            });
          });
          var obj = {
            AssetTypeId: vm.AssetTypeId,
            LocationId: vm.LocationId,
            ParentRelatedInfoId: vm.ContainerId,
            AssetContainerName: vm.ContainerName,
            StatusId: 0,
            CreatedAt: null,
            ModifiedAt: null,
            CreatedBy: 0,
            ModifiedBy: 0,
            CompartmentId: 0,
            IsUsed: null,
            ContainerList: null,
            ItemList: null,
            AssetsGroupItemsList: ContainerList
          };
          DataService["a" /* default */].AddAssetGrouping(obj).then(response => {
            vm.isLoading = false;
            if (response.data.status == 0) {
              vm.ShowAlert(vm.$t('AddedSuccess', [vm.$t('Product_Container')]), "success", true, vm.$t("Alert"));
              vm.CancelButton();
            } else {
              vm.IsVisibleSave = false;
            }
          });
        }
      });
    },
    addRow() {
      var vm = this;
      vm.$refs.AssetAddGroupform.validate().then(result => {
        if (result) {
          var vm = this;
          let PDynamicRow = {
            ProductName: 0,
            Compartment: 0
          };
          vm.NewDynamicField.push(PDynamicRow);
          console.log(vm.NewDynamicField);
          return true;
        }
      });
    },
    deleteRow(index) {
      var vm = this;
      vm.confirmR(vm.$t('Please verify that you want to delete this record?'), true, false, function (result) {
        vm.NewDynamicField.splice(index, 1);
        return true;
      });
    },
    CancelButton() {
      this.$router.push({
        name: 'AssetGrouping'
      });
    },
    CheckProductType: function (ths) {
      debugger;
    }
  }
});
// CONCATENATED MODULE: ./src/views/Asset/AddAssetGrouping.vue?vue&type=script&lang=js&
 /* harmony default export */ var Asset_AddAssetGroupingvue_type_script_lang_js_ = (AddAssetGroupingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/Asset/AddAssetGrouping.vue?vue&type=style&index=0&id=3c950e38&prod&lang=css&
var AddAssetGroupingvue_type_style_index_0_id_3c950e38_prod_lang_css_ = __webpack_require__("07ed");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/Asset/AddAssetGrouping.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Asset_AddAssetGroupingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AddAssetGrouping = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "b6fc":
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
//# sourceMappingURL=chunk-46b11c22.js.map