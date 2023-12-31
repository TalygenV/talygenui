(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-dde9fa2c"],{

/***/ "1ec1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"55cbdea1-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetCatalog/ItemWriteOff.vue?vue&type=template&id=7b3cd694&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_c('loader', {
    attrs: {
      "is-visible": _vm.isLoading
    }
  }), _c('div', {
    staticClass: "comapny-setup col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left border px-0 pb-2"
  }, [_c('Form', {
    ref: "form",
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        values,
        meta
      }) {
        return [_c('input', {
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
        }, [_c('div', {
          staticClass: "theme-primary partition-full"
        }, [_c('span', {
          staticClass: "p-name text-white"
        }, [_vm._v(" Add Product Write-Off ")])]), _c('div', {
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
        }, [_c('label', [_vm._v("Location:"), _c('span', {
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
                  'is-invalid': _vm.isLocationInvalid
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
              }), _vm.isLocationInvalid ? _c('span', {
                staticClass: "invalid-feedback d-block",
                attrs: {
                  "name": "Location"
                }
              }, [_vm._v(_vm._s(_vm.GetLocalizedValue(_vm.$t("LocationRequired"))) + " ")]) : _vm._e()];
            }
          }], null, true)
        })], 1)]) : _vm._e(), _vm.ProductType ? _c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-3 col-xl-2 float-left location"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', [_vm._v(" Product Type:"), _c('span', {
          staticClass: "text-danger"
        }, [_vm._v("*")])]), _c('Field', {
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
                  'is-invalid': _vm.isAssetTypeInvalid
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
              })], 2), _vm.isAssetTypeInvalid ? _c('span', {
                staticClass: "invalid-feedback d-block",
                attrs: {
                  "name": "AssetTypeData"
                }
              }, [_vm._v(" " + _vm._s(_vm.GetLocalizedValue(_vm.$t("AssetTypeDataRequired"))) + " ")]) : _vm._e()];
            }
          }], null, true)
        })], 1)]) : _vm._e(), _vm.ProductType ? _c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-3 col-xl-2 float-left location"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', [_vm._v("Product Name:"), _c('span', {
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
                  'is-invalid': _vm.istxtProductInvalid
                },
                attrs: {
                  "name": "ProductName"
                },
                on: {
                  "change": [function ($event) {
                    var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                      return o.selected;
                    }).map(function (o) {
                      var val = "_value" in o ? o._value : o.value;
                      return val;
                    });
                    _vm.txtProduct = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
                  }, _vm.productNameDDLChange]
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
              })], 2), _vm.istxtProductInvalid ? _c('span', {
                staticClass: "invalid-feedback d-block",
                attrs: {
                  "name": "ProductName"
                }
              }, [_vm._v(" " + _vm._s(_vm.GetLocalizedValue(_vm.$t("ProductNameRequired"))) + " ")]) : _vm._e()];
            }
          }], null, true)
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
          }], null, true)
        })], 1)]) : _vm._e(), _vm.BarCodeSerailNoRFID ? _c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-3 col-xl-2 float-left location"
        }, [_c('div', {
          staticClass: "form-group mb-0 pt-2"
        }, [_c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.txtBarcode,
            expression: "txtBarcode"
          }],
          class: {
            'form-control': true,
            'is-invalid': _vm.isBarcodeInvalid
          },
          attrs: {
            "type": "text",
            "placeholder": "Enter BarCode"
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
        }), _vm.isBarcodeInvalid ? _c('span', {
          staticClass: "invalid-feedback d-block",
          attrs: {
            "name": "ProductName"
          }
        }, [_vm._v(" " + _vm._s(_vm.GetLocalizedValue(_vm.$t("BarCodeRequired"))) + " ")]) : _vm._e()])]) : _vm._e(), _c('div', {
          staticClass: "input-group-text border-0 bg-transparent pl-2 pb-0"
        }, [_c('a', {
          staticClass: "btn btn-success",
          attrs: {
            "href": "javascript:;",
            "id": "btnSave",
            "title": "Save",
            "name": "btnSave",
            "isclicked": "No"
          },
          on: {
            "click": function ($event) {
              return _vm.ShowsearchData();
            }
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
        }), _vm._v("RFID Scanned ")]) : _vm._e()])])]), _c('div', {
          staticClass: "col-sm-12"
        }, [_c('div', {
          staticClass: "table-responsive mt-2 tblWriteoffItems border"
        }, [_c('table', {
          staticClass: "table table-bordered dt-responsive nowrap mt-0",
          attrs: {
            "id": "tblWriteoffItems"
          }
        }, [_c('thead', {
          staticClass: "thead-bg"
        }, [_c('tr', [_c('th', [_c('div', {
          staticClass: "custom-control custom-checkbox"
        }, [_c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.searchcheck_all,
            expression: "searchcheck_all"
          }],
          staticClass: "chkItems custom-control-input",
          staticStyle: {
            "display": "none"
          },
          attrs: {
            "type": "checkbox",
            "id": "chkAll_1",
            "name": "checkbox"
          },
          domProps: {
            "checked": Array.isArray(_vm.searchcheck_all) ? _vm._i(_vm.searchcheck_all, null) > -1 : _vm.searchcheck_all
          },
          on: {
            "click": function ($event) {
              return _vm.checkboxChecked(null, 'all');
            },
            "change": function ($event) {
              var $$a = _vm.searchcheck_all,
                $$el = $event.target,
                $$c = $$el.checked ? true : false;
              if (Array.isArray($$a)) {
                var $$v = null,
                  $$i = _vm._i($$a, $$v);
                if ($$el.checked) {
                  $$i < 0 && (_vm.searchcheck_all = $$a.concat([$$v]));
                } else {
                  $$i > -1 && (_vm.searchcheck_all = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
                }
              } else {
                _vm.searchcheck_all = $$c;
              }
            }
          }
        }), _c('label', {
          staticClass: "custom-control-label universal-custom-control-label pt-1",
          attrs: {
            "for": "chkAll_1"
          }
        })])]), _c('th', [_c('span', [_vm._v(" " + _vm._s(_vm.$t('ItemCode')))])]), _c('th', [_c('span', [_vm._v(" " + _vm._s(_vm.$t('ItemName')))])]), _c('th', [_c('span', [_vm._v(" " + _vm._s(_vm.$t('UniqueName')))])]), _c('th', [_c('span', [_vm._v(" " + _vm._s(_vm.$t('LocationName')))])]), _c('th', {
          staticClass: "text-center"
        }, [_c('span', [_vm._v(" " + _vm._s(_vm.$t('AvailableItems')))])]), _c('th', {
          staticClass: "text-center"
        }, [_c('span', [_vm._v(" " + _vm._s(_vm.$t('PurchageValue')))])]), _c('th', [_c('span', [_vm._v(" " + _vm._s(_vm.$t('CurrentbookValue')))])]), _c('th', [_c('span', [_vm._v(" " + _vm._s(_vm.$t('SalavageCoast')))])]), _c('th', [_c('span', [_vm._v(" " + _vm._s(_vm.$t('WriteOffValue')))])])])]), _c('tbody', {
          staticClass: "gridRowsBodyItems"
        }, [_c('tr', {
          staticClass: "trctrl"
        }, [_c('td', {
          staticClass: "text-center"
        }), _c('td', {
          staticClass: "text-center"
        }, [_c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.itemCodeAutoSearch,
            expression: "itemCodeAutoSearch"
          }],
          staticClass: "form-control",
          attrs: {
            "id": "itemCodeAutoSearch"
          },
          domProps: {
            "value": _vm.itemCodeAutoSearch
          },
          on: {
            "input": [function ($event) {
              if ($event.target.composing) return;
              _vm.itemCodeAutoSearch = $event.target.value;
            }, function ($event) {
              return _vm.SearchRecord('code');
            }]
          }
        })]), _c('td', {
          staticClass: "text-center"
        }, [_c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.itemNameAutoSearch,
            expression: "itemNameAutoSearch"
          }],
          staticClass: "form-control",
          attrs: {
            "id": "itemNameAutoSearch"
          },
          domProps: {
            "value": _vm.itemNameAutoSearch
          },
          on: {
            "input": [function ($event) {
              if ($event.target.composing) return;
              _vm.itemNameAutoSearch = $event.target.value;
            }, function ($event) {
              return _vm.SearchRecord('name');
            }]
          }
        })]), _c('td', {
          staticClass: "align-middle"
        }, [_c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.uniqueNameAutoSearch,
            expression: "uniqueNameAutoSearch"
          }],
          staticClass: "form-control",
          attrs: {
            "id": "uniqueNameAutoSearch"
          },
          domProps: {
            "value": _vm.uniqueNameAutoSearch
          },
          on: {
            "input": [function ($event) {
              if ($event.target.composing) return;
              _vm.uniqueNameAutoSearch = $event.target.value;
            }, function ($event) {
              return _vm.SearchRecord('unique');
            }]
          }
        })]), _c('td', {
          staticClass: "text-center"
        }, [_c('a', {
          staticClass: "clearAll btn btn-danger float-left mx-1",
          attrs: {
            "href": "javascript:;",
            "title": "Clear All"
          },
          on: {
            "click": _vm.ClearFilter
          }
        }, [_c('i', {
          staticClass: "fa fa-refresh"
        })])]), _c('td', {
          staticClass: "text-center"
        }), _c('td', {
          staticClass: "text-center"
        }), _c('td', {
          staticClass: "text-center"
        }), _c('td', {
          staticClass: "text-center"
        }), _c('td', {
          staticClass: "text-center"
        })]), _vm.searchData.length == 0 ? _c('tr', {
          staticClass: "NoRecordsFound no_Search_Records_Found trctrl text-center text-danger"
        }, [_c('td', {
          staticClass: "text-center text-middle text-danger no-record",
          attrs: {
            "colspan": "10"
          }
        }, [_vm._v(" " + _vm._s(_vm.$t('NoRecordfound')) + " ")])]) : _vm._e(), _vm._l(_vm.searchData, function (item, index) {
          return _c('tr', {
            key: item,
            staticClass: "itemAddlist"
          }, [_c('td', {
            staticClass: "text-center"
          }, [_c('input', {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: item.ischecked,
              expression: "item.ischecked"
            }],
            attrs: {
              "type": "checkbox",
              "name": "checkbox"
            },
            domProps: {
              "checked": Array.isArray(item.ischecked) ? _vm._i(item.ischecked, null) > -1 : item.ischecked
            },
            on: {
              "click": function ($event) {
                return _vm.checkboxChecked(item, 'single');
              },
              "change": function ($event) {
                var $$a = item.ischecked,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false;
                if (Array.isArray($$a)) {
                  var $$v = null,
                    $$i = _vm._i($$a, $$v);
                  if ($$el.checked) {
                    $$i < 0 && _vm.$set(item, "ischecked", $$a.concat([$$v]));
                  } else {
                    $$i > -1 && _vm.$set(item, "ischecked", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
                  }
                } else {
                  _vm.$set(item, "ischecked", $$c);
                }
              }
            }
          })]), _c('td', {
            staticClass: "text-center"
          }, [_vm._v(_vm._s(item.ItemCode))]), _c('td', {
            staticClass: "text-center"
          }, [_vm._v(_vm._s(item.AssetCatalogName))]), _c('td', {
            staticClass: "text-center"
          }, [_vm._v(_vm._s(item.AssetUniqueName))]), _c('td', {
            staticClass: "text-center"
          }, [_vm._v(_vm._s(item.LocationName))]), _c('td', {
            staticClass: "text-center single-action"
          }, [_c('span', {
            staticClass: "text-dark"
          }, [_c('i', {
            staticClass: "fa fa-shopping-basket",
            attrs: {
              "aria-hidden": "true"
            }
          }), _c('span', {
            staticClass: "noti-circle noti-blue"
          }, [_vm._v(_vm._s(item.AvailableItems))])])]), _c('td', {
            staticClass: "text-center"
          }, [_vm._v(_vm._s(item.PurchaseValue))]), _c('td', {
            staticClass: "text-center"
          }, [_vm._v(_vm._s(item.CurrentBookValue))]), _c('td', {
            staticClass: "text-center"
          }, [_vm._v(_vm._s(item.SalvageValue))]), _c('td', [_c('input', {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: item.qty,
              expression: "item.qty"
            }],
            class: {
              'txtitems form-control transferQuantity': true,
              'is-invalid': item.qty == ''
            },
            attrs: {
              "type": "text",
              "value": "",
              "onpaste": "return false;",
              "data-numberonly": "no",
              "onchange": "myfun(this);"
            },
            domProps: {
              "value": item.qty
            },
            on: {
              "keypress": _vm.NumbersOnly,
              "input": function ($event) {
                if ($event.target.composing) return;
                _vm.$set(item, "qty", $event.target.value);
              }
            }
          })])]);
        })], 2)])])]), _c('div', {
          staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left my-3 Add_To_List_Button p-0"
        }, [_c('div', {
          staticClass: "form-group p-3"
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
          },
          on: {
            "click": function ($event) {
              return _vm.AddToList(values, meta);
            }
          }
        }, [_c('i', {
          staticClass: "fa fa-plus pr-2"
        }), _vm._v("Add To List")])])])]), _c('div', {
          staticStyle: {
            "clear": "both"
          }
        }), _vm.AddToListArray.length > 0 ? _c('div', {
          staticClass: "col-lg-12 mt-3 mb-3"
        }, [_c('div', {
          staticClass: "heading-border mb-2"
        }, [_c('h5', {
          staticClass: "h5"
        }, [_c('span', [_vm._v(_vm._s(_vm.$t('Product Write-Off')))])])]), _c('div', {
          staticClass: "listing px-2"
        }, [_c('div', {
          staticClass: "table-responsive table-fix-header mt-3"
        }, [_c('table', {
          staticClass: "table table-bordered dt-responsive nowrap mt-0",
          attrs: {
            "id": "tbltransferiteminfoList"
          }
        }, [_c('thead', {
          staticClass: "thead-bg"
        }, [_c('tr', [_c('th', {
          staticClass: "text-center",
          staticStyle: {
            "width": "50px !important"
          }
        }, [_c('input', {
          staticClass: "chkItems",
          attrs: {
            "type": "checkbox",
            "id": "chkAll",
            "name": "checkbox"
          },
          on: {
            "click": function ($event) {
              return _vm.checkboxAddToList(null, 'all');
            }
          }
        })]), _c('th', [_c('span', [_vm._v(" " + _vm._s(_vm.$t('ItemCode')))])]), _c('th', [_c('span', [_vm._v(" " + _vm._s(_vm.$t('ItemName')))])]), _c('th', [_c('span', [_vm._v(" " + _vm._s(_vm.$t('UniqueName')))])]), _c('th', [_c('span', [_vm._v(" " + _vm._s(_vm.$t('LocationName')))])]), _c('th', {
          staticClass: "text-center"
        }, [_c('span', [_vm._v(" " + _vm._s(_vm.$t('AvailableItems')))])]), _c('th', {
          staticClass: "text-center"
        }, [_c('span', [_vm._v(" " + _vm._s(_vm.$t('PurchageValue')))])]), _c('th', [_c('span', [_vm._v(" " + _vm._s(_vm.$t('CurrentbookValue')))])]), _c('th', [_c('span', [_vm._v(" " + _vm._s(_vm.$t('SalavageCoast')))])]), _c('th', [_c('span', [_vm._v(" " + _vm._s(_vm.$t('WriteOffValue')))])]), _c('th', {
          staticClass: "text-center"
        }, [_c('span', [_vm._v("Action")])])])]), _c('tbody', {
          staticClass: "gridRowsBodyItems"
        }, [_vm.AddToListArray.length == 0 ? _c('tr', {
          staticClass: "NoRecordsFound"
        }, [_c('td', {
          staticClass: "no_records text-center text-middle text-danger no-record",
          attrs: {
            "colspan": "15"
          }
        }, [_vm._v(" " + _vm._s(_vm.$t('NoRecordfound')))])]) : _vm._e(), _vm._l(_vm.AddToListArray, function (item, index) {
          return _c('tr', {
            key: item,
            staticClass: "itemAddlist"
          }, [_c('td', {
            staticClass: "text-center"
          }, [_c('input', {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: item.ischecked,
              expression: "item.ischecked"
            }],
            attrs: {
              "type": "checkbox",
              "name": "checkbox"
            },
            domProps: {
              "checked": Array.isArray(item.ischecked) ? _vm._i(item.ischecked, null) > -1 : item.ischecked
            },
            on: {
              "click": function ($event) {
                return _vm.checkboxAddToList(item, 'single');
              },
              "change": function ($event) {
                var $$a = item.ischecked,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false;
                if (Array.isArray($$a)) {
                  var $$v = null,
                    $$i = _vm._i($$a, $$v);
                  if ($$el.checked) {
                    $$i < 0 && _vm.$set(item, "ischecked", $$a.concat([$$v]));
                  } else {
                    $$i > -1 && _vm.$set(item, "ischecked", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
                  }
                } else {
                  _vm.$set(item, "ischecked", $$c);
                }
              }
            }
          })]), _c('td', {
            staticClass: "text-center"
          }, [_vm._v(_vm._s(item.ItemCode))]), _c('td', {
            staticClass: "text-center"
          }, [_vm._v(_vm._s(item.AssetCatalogName))]), _c('td', {
            staticClass: "text-center"
          }, [_vm._v(_vm._s(item.AssetUniqueName))]), _c('td', {
            staticClass: "text-center"
          }, [_vm._v(_vm._s(item.LocationName))]), _c('td', {
            staticClass: "text-center single-action"
          }, [_c('span', {
            staticClass: "text-dark"
          }, [_c('i', {
            staticClass: "fa fa-shopping-basket",
            attrs: {
              "aria-hidden": "true"
            }
          }), _c('span', {
            staticClass: "noti-circle noti-blue"
          }, [_vm._v(_vm._s(item.AvailableItems))])])]), _c('td', {
            staticClass: "text-center"
          }, [_vm._v(_vm._s(item.PurchaseValue))]), _c('td', {
            staticClass: "text-center"
          }, [_vm._v(_vm._s(item.CurrentBookValue))]), _c('td', {
            staticClass: "text-center"
          }, [_vm._v(_vm._s(item.SalvageValue))]), _c('td', [_c('input', {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: item.qty,
              expression: "item.qty"
            }],
            class: {
              'txtitems form-control transferQuantity': true,
              'is-invalid': item.qty == ''
            },
            attrs: {
              "type": "text",
              "value": "",
              "onpaste": "return false;",
              "data-numberonly": "no"
            },
            domProps: {
              "value": item.qty
            },
            on: {
              "keypress": _vm.NumbersOnly,
              "input": function ($event) {
                if ($event.target.composing) return;
                _vm.$set(item, "qty", $event.target.value);
              }
            }
          })]), _c('td', {
            staticClass: "text-center single-action"
          }, [_c('a', {
            attrs: {
              "href": "javascript:;",
              "title": "Delete"
            },
            on: {
              "click": function ($event) {
                return _vm.DeleteRow(index);
              }
            }
          }, [_c('i', {
            staticClass: "fa fa-trash text-danger action-icon"
          })])])]);
        })], 2)])])]), _c('div', {
          staticClass: "col-md-12 col-lg-12 col-xl-12 float-left mt-3 mb-2 text-right p-0"
        }, [_c('a', {
          staticClass: "btn btn-success",
          attrs: {
            "href": "javascript:;",
            "id": "btnSave",
            "title": "Save",
            "name": "btnSave",
            "isclicked": "No"
          },
          on: {
            "click": _vm.onSubmit
          }
        }, [_c('i', {
          staticClass: "fa fa-save pr-2"
        }), _vm._v("Save ")]), _c('a', {
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
        }), _vm._v("Cancel")])])]) : _vm._e(), _c('div', {
          staticClass: "col-lg-12 text-right mt-3 float-left"
        })];
      }
    }])
  })], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/AssetCatalog/ItemWriteOff.vue?vue&type=template&id=7b3cd694&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// EXTERNAL MODULE: ./src/components/Modal/SearchAsset.vue + 9 modules
var SearchAsset = __webpack_require__("b25f");

// EXTERNAL MODULE: ./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.cjs.js
var vue_treeselect_cjs = __webpack_require__("ca17");
var vue_treeselect_cjs_default = /*#__PURE__*/__webpack_require__.n(vue_treeselect_cjs);

// EXTERNAL MODULE: ./src/components/Common/Pager.vue + 4 modules
var Pager = __webpack_require__("4555");

// EXTERNAL MODULE: ./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.css
var vue_treeselect = __webpack_require__("542c");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetCatalog/ItemWriteOff.vue?vue&type=script&lang=js&






/* harmony default export */ var ItemWriteOffvue_type_script_lang_js_ = ({
  components: {
    Search: SearchAsset["a" /* default */],
    Pager: Pager["a" /* default */],
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
        "DISPLAY_NAME": this.$t('ProductName'),
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
      isLocationInvalid: false,
      isAssetTypeInvalid: false,
      istxtProductInvalid: false,
      UserId: null,
      txtProduct: '',
      txtItemName: '',
      UserId: null,
      itemname: '',
      ProductsArray: [],
      showProductDropdown: false,
      iselectVal: '',
      options: [],
      searchData: [],
      barcode: null,
      searchcheck_all: false,
      finalcheck_all: false,
      //TotalRecords: null,
      TotalRecord: 0,
      AddToListArray: [],
      itemCodeAutoSearch: '',
      itemNameAutoSearch: '',
      uniqueNameAutoSearch: '',
      firstListArray: [],
      txtBarcode: '',
      isBarcodeInvalid: false,
      isLoading: false,
      writeOffSelect: [],
      selectAll: false,
      CurrentPage: 1,
      TotalPage: 0,
      noRecord: false
    };
  },
  created: function () {
    var vm = this;
    this.GetLocationByuserId();
    this.BindItemTypeByUserId();
    this.GetCompanyAssestCatalogs();
    this.UserId = this.GetUserInfo.ID;
    vm.isLocationInvalid = false;
    vm.isAssetTypeInvalid = false;
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
    checkboxAddToList: function (itm, type) {
      debugger;
      var vm = this;
      if (type == 'all') {
        if ($('#chkAll_0').prop('checked')) {
          vm.AddToListArray.forEach(itm => {
            itm.ischecked = true;
          });
        } else {
          vm.AddToListArray.forEach(itm => {
            itm.ischecked = false;
          });
        }
      } else {
        itm.ischecked = !itm.ischecked;
        if (itm.ischecked) {
          $('#chkAll_1').prop('checked', true);
          vm.AddToListArray.forEach(item => {
            if (!item.ischecked) {
              $('#chkAll_1').prop('checked', false);
            }
          });
        } else {
          $('#chkAll_1').prop('checked', true);
          vm.AddToListArray.forEach(item => {
            if (!item.ischecked) {
              $('#chkAll_1').prop('checked', false);
            }
          });
        }
      }
    },
    checkboxChecked: function (itm, type) {
      debugger;
      var vm = this;
      if (type == 'all') {
        if ($('#chkAll_0').prop('checked')) {
          vm.searchData.forEach(itm => {
            itm.ischecked = true;
          });
        } else {
          vm.searchData.forEach(itm => {
            itm.ischecked = false;
          });
        }
      } else {
        itm.ischecked = !itm.ischecked;
        if (itm.ischecked) {
          $('#chkAll_0').prop('checked', true);
          vm.searchData.forEach(item => {
            if (!item.ischecked) {
              $('#chkAll_0').prop('checked', false);
            }
          });
        } else {
          vm.searchData.forEach(item => {
            if (!item.ischecked) {
              $('#chkAll_0').prop('checked', false);
            }
          });
        }
      }
    },
    NumbersOnly(evt) {
      //debugger
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
        evt.preventDefault();
        ;
      } else {
        return true;
      }
    },
    async AddToList() {
      debugger;
      var vm = this;
      var msg = "";
      var count = 1;
      var chk = true;
      var chkExistName = "";
      var tempArray = [];
      ////debugger
      var isItem = vm.searchData.filter(x => x.ischecked);
      if (isItem.length > 0) {
        vm.searchData.forEach(value => {
          //RelatedInfoId
          vm.AddToListArray.forEach(itm => {
            if (itm.RelatedInfoId == value.RelatedInfoId) {
              chkExistName += itm.AssetUniqueName;
            }
          });
          if (value.ischecked) {
            if (value.qty == '') {
              vm.ShowAlert(vm.$t('CorrectHighlightedErrors'), "warning", true, vm.$t('Alert'));
              chk = false;
            } else {
              // value.isCheckedAddtolist = false;
              //value.qtyAddtolist = '';
              tempArray.push(value);
            }
          }
        });
      } else {
        vm.ShowAlert(vm.$t('MinimumOneSelect'), "warning", true, vm.$t('Alert'));
        chk = false;
      }
      if (chkExistName.length > 0) {
        vm.ShowAlert(chkExistName + ' Already Exist', "warning", true, vm.$t('Alert'));
        chk = false;
      }
      if (chk) {
        vm.searchData = [];
        tempArray.forEach(value => {
          vm.AddToListArray.push(value);
          vm.txtLocation = null;
          vm.txtAssetType = '';
          vm.txtProduct = '';
          vm.itemname = '';
          $('#chkAll_0').prop('checked', false);
          vm.$refs.form.reset();
        });
        setTimeout(function () {
          vm.ResponsiveDataTable('tbltransferiteminfoList');
        }, 500);
      }
    },
    async DeleteRow(index) {
      //debugger
      var vm = this;
      vm.confirmR(vm.$t("ConfirmDelete"), true, vm.$t("Delete") + "  " + vm.$t("ASSET_CATALOGUE_ID"), function () {
        vm.AddToListArray.splice(index, 1);
      });
    },
    async ShowsearchData() {
      debugger;
      let vm = this;
      var url = null;
      vm.isLoading = true;
      if (!vm.BarCodeSerailNoRFID) {
        if (vm.txtProduct == '' || vm.txtAssetType == '' || vm.txtLocation == '') {
          vm.isLocationInvalid = vm.txtLocation == '' || vm.txtLocation == null ? true : false;
          vm.isAssetTypeInvalid = vm.txtAssetType == '' ? true : false;
          vm.istxtProductInvalid = vm.txtProduct == '' ? true : false;
          vm.ShowAlert(vm.$t("CorrectHighlightedErrors"), "warning", vm.$t('Alert'));
          vm.isLoading = false;
          return;
        } else {
          vm.isLocationInvalid = false;
          vm.isAssetTypeInvalid = false;
          vm.istxtProductInvalid = false;
        }
        url = `id=${vm.txtProduct}&isView=1&assetType=${vm.txtAssetType}&barcode=&assetUniqueId=${vm.iselectVal}&selfCheckout=&reqFrom=writeoff&isFor=search&assignedFrom=&assignedTill=&startTime=&endTime=&locationId=${vm.txtLocation}&pageNum=1`;
      } else {
        if (vm.txtBarcode == '') {
          vm.isBarcodeInvalid = vm.txtBarcode == '' || vm.txtBarcode == null ? true : false;
          vm.ShowAlert(vm.$t("CorrectHighlightedErrors"), "warning", vm.$t('Alert'));
          vm.isLoading = false;
          return;
        } else {
          vm.isBarcodeInvalid = false;
        }
        url = `id=&isView=1&assetType=&barcode=${vm.txtBarcode}&assetUniqueId=&selfCheckout=&reqFrom=writeoff&isFor=search&assignedFrom=&assignedTill=&startTime=&endTime=&locationId=0&pageNum=1`;
      }
      await DataService["a" /* default */].GetCompanyAssestCatalogsDetalis(url).then(response => {
        vm.searchData = [];
        if (response.data.length > 0) {
          vm.firstListArray = [];
          vm.searchData = [];
          vm.ClearFilter();
          response.data.forEach(value => {
            value.ischecked = false;
            value.qty = '';
            vm.searchData.push(value);
            vm.firstListArray.push(value);
            vm.isLoading = false;
          });
          vm.isLoading = false;
          setTimeout(function () {
            vm.ResponsiveDataTable('tblWriteoffItems');
          }, 300);
          setTimeout(function () {
            vm.CheckBoxBootstrap();
          }, 100);
          vm.isLoading = false;
        }
        vm.isLoading = false;
      });
    },
    async SearchRecord(type) {
      var vm = this;
      var tempArrayList = [];
      debugger;
      if (type == 'code') {
        vm.searchData = vm.firstListArray.filter(item => {
          return item.ItemCode.toLowerCase().indexOf(vm.itemCodeAutoSearch.toLowerCase()) > -1;
        });
      } else if (type == 'name') {
        vm.searchData = vm.firstListArray.filter(item => {
          return item.AssetCatalogName.toLowerCase().indexOf(vm.itemNameAutoSearch.toLowerCase()) > -1;
        });
      } else {
        //unique name
        vm.searchData = vm.firstListArray.filter(item => {
          return item.AssetUniqueName.toLowerCase().indexOf(vm.uniqueNameAutoSearch.toLowerCase()) > -1;
        });
      }
      setTimeout(function () {
        vm.ResponsiveDataTable('tblWriteoffItems');
      }, 300);
      setTimeout(function () {
        vm.CheckBoxBootstrap();
      }, 100);
    },
    async ClearFilter() {
      // debugger
      var vm = this;
      vm.itemCodeAutoSearch = '';
      vm.itemNameAutoSearch = '';
      vm.uniqueNameAutoSearch = '';
      vm.SearchRecord();
    },
    onSubmit: async function (formfields) {
      debugger;
      var vm = this;
      vm.isLoading = true;
      var msg = "";
      var MoveToInfo = "";
      var count = 1;
      var chk = false;
      var totalSelectedQuantity = 0;
      var i = 0;
      var assetCatId = 0;
      vm.AddToListArray.forEach(value => {
        if (value != null) {
          if (value.ischecked) {
            chk = true;
            if (i == 0) {
              assetCatId = value.AssetCatalogueId;
            }
            var rid = value.RelatedInfoId;
            var qty = value.qty; // item.qtyAddtolist;
            //validation
            if (qty == 0) {
              msg += "no";
            }
            MoveToInfo += rid + ',' + qty + '|';
            totalSelectedQuantity += qty;
            i++;
          }
        }
      });
      if (chk && msg.length == 0) {
        const RaiseData = {
          AssetCatalogueId: parseInt(assetCatId),
          ItemName: '',
          ItemGroupName: '',
          ItemType: '',
          Quantity: 0,
          RelatedInfoId: 0,
          LocationId: 0,
          LocationName: '',
          NumberOfItems: 0,
          UniqueName: '',
          Description: '',
          AvailableItems: 0,
          CreateUniqueNameListing: 0,
          ItemCode: '',
          MoveToInfo: MoveToInfo,
          ParentLocationId: 0
        };
        var Jsondata = JSON.stringify(RaiseData);
        await DataService["a" /* default */].UpdateWriteOffSave(RaiseData).then(response => {
          if (response.data.result == 'success') {
            vm.ShowAlert(vm.$t('WriteOffSuccessfully'), "success", vm.$t('Alert'));
            vm.searchData = [];
            vm.AddToListArray = [];
            vm.isLoading = false;
          } else {
            vm.ShowAlert(vm.$t('WriteOffError'), "warning", vm.$t('Alert'));
            vm.isLoading = false;
          }
        });
      } else {
        if (!chk) {
          vm.ShowAlert(vm.$t('MinimumOneSelect'), "warning", true, vm.$t('Alert'));
          vm.isLoading = false;
        } else if (msg.length > 0) {
          vm.ShowAlert(vm.$t('CorrectHighlightedErrors'), "warning", true, vm.$t('Alert'));
          vm.isLoading = false;
        }
      }
    },
    async checkBoxClick(singleItem, type, searchcheck_all, tabletype) {
      var vm = this;
      //debugger
      if (tabletype == 'searchtbl') {
        //singleItem.ischecked = !singleItem.ischecked;
        if (type == "single") {
          vm.searchData.forEach(value => {
            if (!value.ischecked) {
              vm.searchcheck_all = false;
            }
          });
        } else {
          if (!searchcheck_all) {
            vm.searchData.forEach(value => {
              value.ischecked = true;
            });
          } else {
            vm.searchData.forEach(value => {
              value.ischecked = false;
            });
          }
        }
      } else {
        //debugger
        //singleItem.ischecked = !singleItem.ischecked;
        if (type == "single") {
          vm.AddToListArray.forEach(value => {
            if (!value.ischecked) {
              vm.finalcheck_all = false;
            }
          });
        } else {
          if (!finalcheck_all) {
            vm.AddToListArray.forEach(value => {
              value.ischecked = true;
            });
          } else {
            vm.AddToListArray.forEach(value => {
              value.ischecked = false;
            });
          }
        }
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
    BindItemTypeByUserId: function (ths) {
      this.isLoading = true;
      let url = `type=ITEMCODE&issueTo=${this.UserId}&locationId=${ths}&requestType=ASSIGN&requestFrom=WriteOff`;
      DataService["a" /* default */].AssignGetAssetType(url).then(response => {
        this.AssetTypeData = response.data;
        this.isLoading = false;
        this.isLocationInvalid = this.txtLocation == '' || this.txtLocation == null ? true : false;
      });
      this.isLocationInvalid = this.txtLocation == '' || this.txtLocation == null ? true : false;
      this.isLoading = false;
    },
    GetCompanyAssestCatalogs: function (ths) {
      //debugger
      this.isLoading = true;
      let url = `id=${ths}&issueTo=${this.UserId}&locationId=${this.txtLocation}&requestFrom=assetassignment`;
      DataService["a" /* default */].GetCompanyAssestCatalogs(url).then(response => {
        //debugger
        this.ProducttData = response.data;
        this.isLoading = false;
        this.isAssetTypeInvalid = this.txtAssetType == '' ? true : false;
      });
      this.isAssetTypeInvalid = this.txtAssetType == '' ? true : false;
      this.isLoading = false;
    },
    productNameDDLChange: function () {
      //debugger
      var vm = this;
      setTimeout(() => {
        vm.istxtProductInvalid = vm.txtProduct == '' ? true : false;
      }, 200);
    },
    setProductsName: function (event) {
      //debugger
      var vm = this;
      vm.iselectVal = event.Value;
      vm.itemname = event.Name;
      vm.showProductDropdown = false;
    },
    ItemListOnclick: function () {
      var url = `assetCatalogId=${this.txtProduct}&name=&issueTo=${this.UserId}&locationId=${this.txtLocation}&requestFrom=assetassignment&assetType=`;
      DataService["a" /* default */].GetUniqueAssetItems(url).then(response => {
        //debugger
        this.ProductsArray = response.data;
        this.showProductDropdown = true;
      });
    },
    //Dropdown End

    TextfiledType(IsActive) {
      //debugger
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

/***/ }),

/***/ "4555":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"55cbdea1-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Common/Pager.vue?vue&type=template&id=39f52799&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.TotalPages > 0 ? _c('div', {
    staticClass: "nu-paging"
  }, [_c('nav', {
    attrs: {
      "aria-label": "Page navigation example col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left"
    }
  }, [_c('ul', {
    staticClass: "pagination row"
  }, [_c('li', {
    staticClass: "col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left choose-page"
  }, [_c('span', {
    staticClass: "mr-2"
  }, [_vm._v("Show")]), _c('span', {
    staticClass: "select"
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.PageSize,
      expression: "PageSize"
    }],
    staticClass: "form-control form-control-sm",
    attrs: {
      "id": "pageSize",
      "name": "pageSize"
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.PageSize = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.SetPageSize]
    }
  }, _vm._l(_vm.PageSizeOption, function (item, itemIndex) {
    return _c('option', {
      key: itemIndex,
      domProps: {
        "value": item
      }
    }, [_vm._v(_vm._s(item) + " ")]);
  }), 0)]), _c('span', {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.$t('PagingText', [(_vm.CurrentPage - 1) * _vm.PageSize + 1, _vm.PageSize * _vm.CurrentPage > _vm.TotalRecords ? _vm.TotalRecords : _vm.PageSize * _vm.CurrentPage, _vm.TotalRecords])))])]), _c('li', {
    staticClass: "col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"
  }, [_vm.TotalPages > 1 ? _c('ul', {
    staticClass: "paging-count"
  }, [_c('li', {
    staticClass: "page-item"
  }, [_vm.CurrentPage != 1 ? _c('a', {
    staticClass: "page-link first",
    attrs: {
      "title": _vm.firstText,
      "href": "javascript:;",
      "val": "1"
    },
    on: {
      "click": function ($event) {
        return _vm.SetCurrentPage(1);
      }
    }
  }, [_vm._v(_vm._s(_vm.firstText))]) : _vm._e(), _vm.CurrentPage == 1 ? _c('a', {
    staticClass: "page-link first disabled",
    attrs: {
      "title": _vm.firstText,
      "val": "1"
    }
  }, [_vm._v(_vm._s(_vm.firstText))]) : _vm._e()]), _c('li', {
    staticClass: "page-item"
  }, [_vm.CurrentPage != 1 ? _c('a', {
    staticClass: "page-link previous",
    attrs: {
      "title": _vm.prevText,
      "href": "javascript:;"
    },
    on: {
      "click": function ($event) {
        return _vm.SetCurrentPage(_vm.CurrentPage - 1);
      }
    }
  }, [_vm._v(_vm._s(_vm.prevText))]) : _vm._e(), _vm.CurrentPage == 1 ? _c('a', {
    staticClass: "page-link previous disabled",
    attrs: {
      "title": _vm.prevText
    }
  }, [_vm._v(_vm._s(_vm.prevText))]) : _vm._e()]), _vm._l(_vm.TotalPages, function (data, index) {
    return [data >= _vm.GroupStart && data <= _vm.GroupEnd ? _c('li', {
      key: index,
      staticClass: "page-item"
    }, [index + 1 == _vm.CurrentPage ? _c('a', {
      staticClass: "page-link active",
      attrs: {
        "href": "javascript:;"
      }
    }, [_vm._v(_vm._s(index + 1))]) : _vm._e(), index + 1 != _vm.CurrentPage ? _c('a', {
      staticClass: "page-link",
      attrs: {
        "href": "javascript:;",
        "val": index
      },
      on: {
        "click": function ($event) {
          return _vm.SetCurrentPage(index + 1);
        }
      }
    }, [_vm._v(_vm._s(index + 1))]) : _vm._e()]) : _vm._e()];
  }), _c('li', {
    staticClass: "page-item"
  }, [_vm.CurrentPage < _vm.TotalPages ? _c('a', {
    staticClass: "page-link next",
    attrs: {
      "title": _vm.nextText,
      "href": "javascript:;"
    },
    on: {
      "click": function ($event) {
        return _vm.SetCurrentPage(_vm.CurrentPage + 1);
      }
    }
  }, [_vm._v(_vm._s(_vm.nextText))]) : _vm._e(), _vm.CurrentPage >= _vm.TotalPages ? _c('a', {
    staticClass: "page-link disabled next",
    attrs: {
      "title": _vm.nextText
    }
  }, [_vm._v(_vm._s(_vm.nextText))]) : _vm._e()]), _c('li', {
    staticClass: "page-item"
  }, [_vm.CurrentPage != _vm.TotalPages ? _c('a', {
    staticClass: "page-link next",
    attrs: {
      "title": _vm.lastText,
      "href": "javascript:;",
      "val": _vm.TotalPages
    },
    on: {
      "click": function ($event) {
        return _vm.SetCurrentPage(_vm.TotalPages);
      }
    }
  }, [_vm._v(_vm._s(_vm.lastText))]) : _vm._e(), _vm.CurrentPage == _vm.TotalPages ? _c('a', {
    staticClass: "page-link next disabled",
    attrs: {
      "title": _vm.lastText,
      "val": _vm.TotalPages
    }
  }, [_vm._v(_vm._s(_vm.lastText))]) : _vm._e()])], 2) : _vm._e()])])])]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Common/Pager.vue?vue&type=template&id=39f52799&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Common/Pager.vue?vue&type=script&lang=js&

/* harmony default export */ var Pagervue_type_script_lang_js_ = ({
  props: {
    numberofrecords: {
      type: Number,
      required: true
    },
    prevText: {
      type: String,
      required: true
    },
    nextText: {
      type: String,
      required: true
    },
    firstText: {
      type: String,
      required: true
    },
    lastText: {
      type: String,
      required: true
    },
    callbackfunction: {
      type: Function
    },
    CurrentPageNumber: {
      type: Number
    }
  },
  data: function () {
    return {
      TotalRecords: 0,
      PageNumber: 1,
      PageSize: 10,
      PageSizeOption: null,
      CurrentPage: 1,
      TotalPages: 10,
      GroupStart: 1,
      GroupEnd: 3,
      LastPage: false
    };
  },
  watch: {
    numberofrecords: function (value) {
      if (this.CurrentPage > this.PageNumber) {
        this.CurrentPage = this.PageNumber;
      }
      this.TotalRecords = value;
      this.TotalPages = Math.ceil(this.TotalRecords / this.PageSize);
      if (this.TotalPages == this.PageNumber && this.PageNumber > 3) {
        this.GroupStart = this.PageNumber - 2;
        this.GroupEnd = this.PageNumber;
      } else if (this.TotalPages > this.PageNumber && this.PageNumber >= 3) {
        this.GroupStart = this.PageNumber - 1;
        this.GroupEnd = this.PageNumber + 1;
      } else {
        this.GroupStart = 1;
        this.GroupEnd = 3;
      }
    },
    CurrentPageNumber: function (value) {
      var vm = this;
      vm.CurrentPage = value;
      if (value == 1) {
        vm.SetCurrentPage(value);
      }
    }
  },
  created: function () {
    this.TotalRecords = this.numberofrecords;
    this.TotalPages = Math.ceil(this.TotalRecords / this.PageSize);
    this.GetPageSizeOption();
  },
  methods: {
    GetData: function () {
      this.$emit('SetCurrentPage', {
        'PageNumber': this.PageNumber,
        "PageSize": this.PageSize
      });
      if (typeof this.callbackfunction != 'undefined' && this.callbackfunction != null) {
        this.callbackfunction();
      }
    },
    SetPageSize: function (event) {
      this.PageSize = event.target.value;
      this.PageNumber = 1;
      this.CurrentPage = this.PageNumber;
      this.GroupStart = this.PageNumber;
      this.GroupEnd = this.PageNumber + 2;
      this.TotalPages = Math.ceil(this.TotalRecords / this.PageSize);
      this.GetData();
    },
    SetCurrentPage: function (pageNumber) {
      this.PageNumber = pageNumber;
      this.CurrentPage = pageNumber;
      if (this.TotalPages == this.PageNumber && this.PageNumber > 3) {
        this.GroupStart = this.PageNumber - 2;
        this.GroupEnd = this.PageNumber;
      } else if (this.TotalPages > this.PageNumber && this.PageNumber >= 3) {
        this.GroupStart = this.PageNumber - 1;
        this.GroupEnd = this.PageNumber + 1;
      } else {
        this.GroupStart = 1;
        this.GroupEnd = 3;
      }
      this.GetData();
    },
    GetPageSizeOption: function () {
      var list = [];
      var defaultPageSize = 10;
      for (var i = defaultPageSize; i < defaultPageSize + 95; i += 5) {
        list.push(i);
      }
      this.PageSizeOption = list;
    }
  }
});
// CONCATENATED MODULE: ./src/components/Common/Pager.vue?vue&type=script&lang=js&
 /* harmony default export */ var Common_Pagervue_type_script_lang_js_ = (Pagervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Common/Pager.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Common_Pagervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Pager = __webpack_exports__["a"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-dde9fa2c.js.map