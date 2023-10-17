(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0b6e78"],{

/***/ "1ec1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetCatalog/ItemWriteOff.vue?vue&type=template&id=50c22d68&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "comapny-setup"
  }, [_c('input', {
    attrs: {
      "type": "hidden"
    }
  }), _c('div', {
    staticClass: "tab-content fsmtabcontrolMobileView",
    attrs: {
      "id": "myTabContent"
    }
  }, [_c('div', {
    staticClass: "tab-pane call-detail show active border-0 p-0",
    attrs: {
      "id": "tabs-1",
      "role": "tabpanel",
      "aria-labelledby": "CreateProduct-tab"
    }
  }, [_vm._m(0), _c('div', {
    staticClass: "container-fluid border pt-2 mb-2"
  }, [_c('div', {
    staticClass: "col-lg-12 mt-3 p-0"
  }, [_c('div', {
    staticClass: "heading-border mb-2"
  }, [_c('h5', {
    staticClass: "h5"
  }, [_c('span', {
    attrs: {
      "id": "TabHeading1"
    }
  }, [_vm._v(_vm._s(_vm.$t('Search')))])])])])])])]), _c('div', {
    staticClass: "form--group mt-1"
  }, [_c('div', {
    staticClass: "custom-control p-0 custom-radio mr-4 custom-control-inline"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.Case,
      expression: "Case"
    }],
    staticClass: "m-2",
    attrs: {
      "type": "radio",
      "name": "IsDocs",
      "value": "0"
    },
    domProps: {
      "checked": _vm._q(_vm.Case, "0")
    },
    on: {
      "change": [function ($event) {
        _vm.Case = "0";
      }, function ($event) {
        return _vm.TextfiledType(0);
      }]
    }
  }), _vm._v("Search By Product Type ")]), _c('div', {
    staticClass: "custom-control p-0 custom-radio mr-4 custom-control-inline"
  }, [_vm._v(" Or ")]), _c('div', {
    staticClass: "custom-contol p-0 custom-radio mr-4 custom-control-inline"
  }, [_c('input', {
    staticClass: "m-2",
    attrs: {
      "type": "radio",
      "name": "IsDocs",
      "value": "1"
    },
    on: {
      "change": function ($event) {
        return _vm.TextfiledType(1);
      }
    }
  }), _vm._v(" Search by Barcode/Serial Number/RFID ")])]), _c('div', {
    staticClass: "row mt-2"
  }, [_c('div', {
    staticClass: "col-12 d-flex align-items-center",
    attrs: {
      "id": "itemsearch"
    }
  }, [_vm.ProductType ? _c('div', {
    staticClass: "col-sm-12 col-md-6 col-lg-3 col-xl-2 float-left location"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_vm._m(1), _c('Field', {
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
            "placeholder": "Select Location"
          },
          on: {
            "input": function ($event) {
              return _vm.BindItemTypeByUserId(_vm.txtLocation);
            }
          },
          model: {
            value: _vm.txtLocation,
            callback: function ($$v) {
              _vm.txtLocation = $$v;
            },
            expression: "txtLocation"
          }
        }), errors[0] ? _c('span', {
          staticClass: "invalid-feedback d-block",
          attrs: {
            "name": "Location"
          }
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
      }
    }], null, false, 3792694169)
  })], 1)]) : _vm._e(), _vm.ProductType ? _c('div', {
    staticClass: "col-sm-12 col-md-6 col-lg-3 col-xl-2 float-left location"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_vm._m(2), _c('Field', {
    staticClass: "w-100",
    attrs: {
      "name": "AssetTypeData",
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
            "name": "AssetTypeData"
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
        }, [_vm._v("Select")]), _vm._l(_vm.AssetTypeData, function (item, itemIndex) {
          return _c('option', {
            key: itemIndex,
            domProps: {
              "value": item.ASSETID
            }
          }, [_vm._v(_vm._s(item.ASSETTYPE))]);
        })], 2), errors[0] ? _c('span', {
          staticClass: "invalid-feedback d-block",
          attrs: {
            "name": "AssetTypeData"
          }
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
      }
    }], null, false, 3418187290)
  })], 1)]) : _vm._e(), _vm.ProductType ? _c('div', {
    staticClass: "col-sm-12 col-md-6 col-lg-3 col-xl-2 float-left location"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_vm._m(3), _c('Field', {
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
        }, [_vm._v("Select")]), _vm._l(_vm.ProducttData, function (item, itemIndex) {
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
    }], null, false, 1003284460)
  })], 1)]) : _vm._e(), _vm.ProductType ? _c('div', {
    staticClass: "col-sm-12 col-md-6 col-lg-3 col-xl-2 float-left location"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Item Name:")]), _c('Field', {
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
        }), 0), _c('a', {
          staticClass: "btn float-left",
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
        })])])];
      }
    }], null, false, 2806992119)
  })], 1)]) : _vm._e(), _vm.BarCodeSerailNoRFID ? _c('div', {
    staticClass: "col-sm-12 col-md-6 col-lg-3 col-xl-2 float-left location"
  }, [_vm._m(4)]) : _vm._e(), _c('div', {
    staticClass: "input-group-text border-0 bg-transparent pl-2 pb-0"
  }, [_c('a', {
    staticClass: "btn btn-success",
    attrs: {
      "href": "javascript:;",
      "id": "btnSave",
      "title": "Save",
      "name": "btnSave",
      "isclicked": "No"
    }
  }, [_vm._v("Add Product ")]), _vm.BarCodeSerailNoRFID ? _c('a', {
    staticClass: "btn btn-primary m-1",
    attrs: {
      "href": "javascript:;",
      "id": "btnSearch",
      "title": "Save",
      "name": "btnsearch",
      "isclicked": "No"
    }
  }, [_c('i', {
    staticClass: "fa fa-barcode text-white float-left mt-1 mr-2"
  }), _vm._v("RFID Scanned ")]) : _vm._e()])])]), _vm._m(5), _c('div', {
    staticClass: "col-lg-12 mt-3 mb-3"
  }, [_c('div', {
    staticClass: "heading-border mb-2"
  }, [_c('h5', {
    staticClass: "h5"
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('Product Write-Off')))])])]), _c('tg-list', {
    attrs: {
      "IsShowAction": true,
      "listType": ['List'],
      "ModuleName": "Asset",
      "SubModuleCode": "Asset",
      "IdentityColumn": "ASSET_CATALOGUE_ID",
      "HeaderText": "Asset Management",
      "ListData": _vm.ProductData,
      "HeaderData": _vm.Headers,
      "callbackfunction": _vm.FetchData,
      "HeaderButtons": _vm.listheaderbuttons,
      "TotalRecords": _vm.TotalRecords,
      "SearchFields": _vm.leftSearchFields
    },
    on: {
      "SortdataButtonClick": _vm.sortdata
    }
  })], 1), _c('div', {
    staticClass: "col-lg-12 text-right mt-3 float-left"
  }, [_vm._m(6), _c('a', {
    staticClass: "btn btn-danger HideTab m-1",
    attrs: {
      "id": "btnCancel",
      "href": "/AssetCatalog/ItemWriteOffList",
      "title": "Cancel"
    },
    on: {
      "click": _vm.onCancel
    }
  }, [_c('i', {
    staticClass: "fa fa-close pr-2"
  }), _vm._v("Cancel")])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "theme-primary partition-full"
  }, [_c('span', {
    staticClass: "p-name text-white"
  }, [_vm._v(" Add Product Write-Off ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('label', [_vm._v("Location:"), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('label', [_vm._v(" Product Type:"), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('label', [_vm._v("Product Name:"), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "form-group mb-0 pt-2"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Enter BarCode"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left my-3 Add_To_List_Button p-0"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "search-btm-btn"
  }, [_c('a', {
    staticClass: "btn btn-info formbtn float-right",
    attrs: {
      "id": "btn_AddRow",
      "href": "javascript:;",
      "value": "Add to List",
      "title": "",
      "name": "btn_AddRow",
      "data-toggle-tooltip": "tooltip",
      "data-original-title": "Add To List"
    }
  }, [_c('i', {
    staticClass: "fa fa-plus pr-2"
  }), _vm._v("Add To List")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('a', {
    staticClass: "btn btn-success",
    attrs: {
      "href": "javascript:;",
      "id": "btnSave",
      "title": "Save",
      "name": "btnSave",
      "isclicked": "No"
    }
  }, [_c('i', {
    staticClass: "fa fa-save pr-2"
  }), _vm._v("Save ")]);
}];

// CONCATENATED MODULE: ./src/views/AssetCatalog/ItemWriteOff.vue?vue&type=template&id=50c22d68&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// EXTERNAL MODULE: ./src/components/Modal/SearchAsset.vue + 9 modules
var SearchAsset = __webpack_require__("b25f");

// EXTERNAL MODULE: ./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.cjs.js
var vue_treeselect_cjs = __webpack_require__("ca17");
var vue_treeselect_cjs_default = /*#__PURE__*/__webpack_require__.n(vue_treeselect_cjs);

// EXTERNAL MODULE: ./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.css
var vue_treeselect = __webpack_require__("542c");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetCatalog/ItemWriteOff.vue?vue&type=script&lang=js&





/* harmony default export */ var ItemWriteOffvue_type_script_lang_js_ = ({
  components: {
    Search: SearchAsset["a" /* default */],
    'tree-view': vue_treeselect_cjs_default.a
  },
  data() {
    return {
      Case: 0,
      ProductType: true,
      BarCodeSerailNoRFID: false,
      Headers: [{
        "COLUMN_NAME": "Product Code",
        "DATA_TYPE": "Text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Product Code",
        "DISPLAY_ORDER": 1
      }, {
        "COLUMN_NAME": "Product Name",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Product Name",
        "DISPLAY_ORDER": 2
      }, {
        "COLUMN_NAME": "Unique Name",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Unique Name",
        "DISPLAY_ORDER": 3
      }, {
        "COLUMN_NAME": "Location",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Location",
        "DISPLAY_ORDER": 4
      }, {
        "COLUMN_NAME": "Available Quantity",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Available Quantity",
        "DISPLAY_ORDER": 5
      }, {
        "COLUMN_NAME": "Purchase Value",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Purchase Value",
        "DISPLAY_ORDER": 6
      }, {
        "COLUMN_NAME": "Current book Value",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Current book Value",
        "DISPLAY_ORDER": 7
      }, {
        "COLUMN_NAME": "Salvage Cost",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Salvage Cost",
        "DISPLAY_ORDER": 8
      }, {
        "COLUMN_NAME": "Write-Off Value",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Write-Off Value",
        "DISPLAY_ORDER": 9
      }],
      LegendArray: [],
      ProductData: [],
      PageSize: 10,
      PageNumber: 1,
      PageSizeOption: null,
      txtLocation: null,
      ProducttData: [],
      Groupname: '',
      LocationData: [],
      AssetTypeData: [],
      txtAssetType: '',
      UserId: null,
      txtProductt: '',
      txtItemName: '',
      UserId: null,
      itemname: '',
      ProductsArray: [],
      showProductDropdown: false,
      iselectVal: '',
      options: []
    };
  },
  created: function () {
    this.GetLocationByuserId();
    this.BindItemTypeByUserId();
    this.GetCompanyAssestCatalogs();
    this.UserId = this.GetUserInfo.ID;
  },
  methods: {
    // 1. Dropdowns start
    GetLocationByuserId: function () {
      var vm = this;
      DataService["a" /* default */].GetLocationByuserId().then(response => {
        // this.LocationData = response.data.data;

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
    BindItemTypeByUserId: function (ths) {
      let url = `type=ITEMCODE&issueTo=${this.UserId}&locationId=${ths}&requestType=ASSIGN&requestFrom=WriteOff`;
      DataService["a" /* default */].AssignGetAssetType(url).then(response => {
        this.AssetTypeData = response.data;
      });
    },
    GetCompanyAssestCatalogs: function (ths) {
      let url = `id=${ths}&issueTo=${this.UserId}&locationId=${this.txtLocation}&requestFrom=assetassignment`;
      DataService["a" /* default */].GetCompanyAssestCatalogs(url).then(response => {
        debugger;
        this.ProducttData = response.data;
      });
    },
    setProductsName: function (event) {
      debugger;
      var vm = this;
      vm.iselectVal = event.Value;
      vm.itemname = event.Name;
      vm.showProductDropdown = false;
    },
    ItemListOnclick: function () {
      var url = `assetCatalogId=${this.txtProduct}&name=&issueTo=${this.UserId}&locationId=${this.txtLocation}&requestFrom=assetassignment&assetType=`;
      DataService["a" /* default */].GetUniqueAssetItems(url).then(response => {
        debugger;
        this.ProductsArray = response.data;
        this.showProductDropdown = true;
      });
    },
    //Dropdown End

    TextfiledType(IsActive) {
      if (IsActive == 1) {
        this.ProductType = false;
        this.BarCodeSerailNoRFID = true;
      } else if (IsActive == 0) {
        this.ProductType = true;
        this.BarCodeSerailNoRFID = false;
      }
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
    onCancel: function () {
      this.$router.push({
        name: 'ItemWriteOffList'
      });
      //this.$router.push({ path: '/AssetCatalog/ItemWriteOffList' })
    }
  }
});
// CONCATENATED MODULE: ./src/views/AssetCatalog/ItemWriteOff.vue?vue&type=script&lang=js&
 /* harmony default export */ var AssetCatalog_ItemWriteOffvue_type_script_lang_js_ = (ItemWriteOffvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/AssetCatalog/ItemWriteOff.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  AssetCatalog_ItemWriteOffvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ItemWriteOff = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d0b6e78.js.map