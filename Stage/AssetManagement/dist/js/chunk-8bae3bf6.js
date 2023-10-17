(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-8bae3bf6"],{

/***/ "0366":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("4625");
var aCallable = __webpack_require__("59ed");
var NATIVE_BIND = __webpack_require__("40d5");

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "1354":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_id_5daeceda_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1cfb");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_id_5daeceda_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_id_5daeceda_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "15a7":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".expand-list{z-index:-86}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "182d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPositiveInteger = __webpack_require__("f8cd");

var $RangeError = RangeError;

module.exports = function (it, BYTES) {
  var offset = toPositiveInteger(it);
  if (offset % BYTES) throw $RangeError('Wrong offset');
  return offset;
};


/***/ }),

/***/ "1cfb":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("eb1f");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("7ab474b3", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "1d02":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var $findLastIndex = __webpack_require__("a258").findLastIndex;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.findLastIndex` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findlastindex
exportTypedArrayMethod('findLastIndex', function findLastIndex(predicate /* , thisArg */) {
  return $findLastIndex(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "2834":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var uncurryThis = __webpack_require__("e330");
var aCallable = __webpack_require__("59ed");
var arrayFromConstructorAndList = __webpack_require__("dfb9");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var sort = uncurryThis(ArrayBufferViewCore.TypedArrayPrototype.sort);

// `%TypedArray%.prototype.toSorted` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tosorted
exportTypedArrayMethod('toSorted', function toSorted(compareFn) {
  if (compareFn !== undefined) aCallable(compareFn);
  var O = aTypedArray(this);
  var A = arrayFromConstructorAndList(getTypedArrayConstructor(O), O);
  return sort(A, compareFn);
});


/***/ }),

/***/ "2ca5":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("15a7");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("0d225eba", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "3c5d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("da84");
var call = __webpack_require__("c65b");
var ArrayBufferViewCore = __webpack_require__("ebb5");
var lengthOfArrayLike = __webpack_require__("07fa");
var toOffset = __webpack_require__("182d");
var toIndexedObject = __webpack_require__("7b0b");
var fails = __webpack_require__("d039");

var RangeError = global.RangeError;
var Int8Array = global.Int8Array;
var Int8ArrayPrototype = Int8Array && Int8Array.prototype;
var $set = Int8ArrayPrototype && Int8ArrayPrototype.set;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

var WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS = !fails(function () {
  // eslint-disable-next-line es/no-typed-arrays -- required for testing
  var array = new Uint8ClampedArray(2);
  call($set, array, { length: 1, 0: 3 }, 1);
  return array[1] !== 3;
});

// https://bugs.chromium.org/p/v8/issues/detail?id=11294 and other
var TO_OBJECT_BUG = WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS && ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS && fails(function () {
  var array = new Int8Array(2);
  array.set(1);
  array.set('2', 1);
  return array[0] !== 0 || array[1] !== 2;
});

// `%TypedArray%.prototype.set` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
exportTypedArrayMethod('set', function set(arrayLike /* , offset */) {
  aTypedArray(this);
  var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
  var src = toIndexedObject(arrayLike);
  if (WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS) return call($set, this, src, offset);
  var length = this.length;
  var len = lengthOfArrayLike(src);
  var index = 0;
  if (len + offset > length) throw RangeError('Wrong length');
  while (index < len) this[offset + index] = src[index++];
}, !WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS || TO_OBJECT_BUG);


/***/ }),

/***/ "4625":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var classofRaw = __webpack_require__("c6b6");
var uncurryThis = __webpack_require__("e330");

module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};


/***/ }),

/***/ "4b11":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// eslint-disable-next-line es/no-typed-arrays -- safe
module.exports = typeof ArrayBuffer != 'undefined' && typeof DataView != 'undefined';


/***/ }),

/***/ "4ea1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var arrayWith = __webpack_require__("d429");
var ArrayBufferViewCore = __webpack_require__("ebb5");
var isBigIntArray = __webpack_require__("bcbf");
var toIntegerOrInfinity = __webpack_require__("5926");
var toBigInt = __webpack_require__("f495");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

var PROPER_ORDER = !!function () {
  try {
    // eslint-disable-next-line no-throw-literal, es/no-typed-arrays, es/no-array-prototype-with -- required for testing
    new Int8Array(1)['with'](2, { valueOf: function () { throw 8; } });
  } catch (error) {
    // some early implementations, like WebKit, does not follow the final semantic
    // https://github.com/tc39/proposal-change-array-by-copy/pull/86
    return error === 8;
  }
}();

// `%TypedArray%.prototype.with` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.with
exportTypedArrayMethod('with', { 'with': function (index, value) {
  var O = aTypedArray(this);
  var relativeIndex = toIntegerOrInfinity(index);
  var actualValue = isBigIntArray(O) ? toBigInt(value) : +value;
  return arrayWith(O, getTypedArrayConstructor(O), relativeIndex, actualValue);
} }['with'], !PROPER_ORDER);


/***/ }),

/***/ "5b16":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".center-icon{display:flex;justify-content:center;align-items:center}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "6ce5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var arrayToReversed = __webpack_require__("df7e");
var ArrayBufferViewCore = __webpack_require__("ebb5");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;

// `%TypedArray%.prototype.toReversed` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.toreversed
exportTypedArrayMethod('toReversed', function toReversed() {
  return arrayToReversed(aTypedArray(this), getTypedArrayConstructor(this));
});


/***/ }),

/***/ "7697":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditHistory_vue_vue_type_style_index_0_id_93f99f18_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2ca5");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditHistory_vue_vue_type_style_index_0_id_93f99f18_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditHistory_vue_vue_type_style_index_0_id_93f99f18_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "907a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var lengthOfArrayLike = __webpack_require__("07fa");
var toIntegerOrInfinity = __webpack_require__("5926");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.at` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.at
exportTypedArrayMethod('at', function at(index) {
  var O = aTypedArray(this);
  var len = lengthOfArrayLike(O);
  var relativeIndex = toIntegerOrInfinity(index);
  var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
  return (k < 0 || k >= len) ? undefined : O[k];
});


/***/ }),

/***/ "986a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var $findLast = __webpack_require__("a258").findLast;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.findLast` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findlast
exportTypedArrayMethod('findLast', function findLast(predicate /* , thisArg */) {
  return $findLast(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "9dfe":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("5b16");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("110db764", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "a258":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__("0366");
var IndexedObject = __webpack_require__("44ad");
var toObject = __webpack_require__("7b0b");
var lengthOfArrayLike = __webpack_require__("07fa");

// `Array.prototype.{ findLast, findLastIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_FIND_LAST_INDEX = TYPE == 1;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var index = lengthOfArrayLike(self);
    var value, result;
    while (index-- > 0) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (result) switch (TYPE) {
        case 0: return value; // findLast
        case 1: return index; // findLastIndex
      }
    }
    return IS_FIND_LAST_INDEX ? -1 : undefined;
  };
};

module.exports = {
  // `Array.prototype.findLast` method
  // https://github.com/tc39/proposal-array-find-from-last
  findLast: createMethod(0),
  // `Array.prototype.findLastIndex` method
  // https://github.com/tc39/proposal-array-find-from-last
  findLastIndex: createMethod(1)
};


/***/ }),

/***/ "a888":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetCatalog/RelatedInformation.vue?vue&type=template&id=41f92ce5&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    class: {
      'main-content': true,
      'no-left-bar': _vm.catalogId != '' && _vm.catalogId != null
    }
  }, [_c('loader', {
    attrs: {
      "is-visible": _vm.isLoading
    }
  }), _c('loader', {
    attrs: {
      "is-visible": _vm.isLoadings
    }
  }), _c('section', {
    staticClass: "page-action"
  }, [_vm.catalogId != '' && _vm.catalogId != null ? _c('div', {}, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12 mt-2"
  }, [_c('div', {
    staticClass: "heading-border mb-2"
  }, [_c('h5', {
    staticClass: "h5"
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('RelatedInformation')))]), _vm.RelatedInformationData.length == 0 ? _c('small', {
    staticClass: "float-right mt-2"
  }, [_vm._m(0), _vm._m(1)]) : _vm._e(), _vm.RelatedInformationData.length != 0 ? _c('small', {
    staticClass: "float-right mt-2"
  }, [_c('a', {
    staticClass: "mr-2",
    attrs: {
      "id": "btnBarCode",
      "href": "javascript:void(0);",
      "title": "Download Barcode"
    },
    on: {
      "click": _vm.DownloadAllBarcode
    }
  }, [_c('i', {
    staticClass: "fa fa-barcode pr-2"
  }), _vm._v("Barcode")]), _c('a', {
    staticClass: "barCodePDF",
    attrs: {
      "id": "btnBarCodePDF",
      "href": "javascript:void(0);",
      "title": "Barcode Print"
    },
    on: {
      "click": _vm.DownloadAllBarcodePrint
    }
  }, [_c('i', {
    staticClass: "fa fa-print pr-2"
  }), _vm._v("Barcode Print")])]) : _vm._e()])])])])]) : _vm._e(), _c('div', {
    staticClass: "d-flex flex-wrap py-2"
  }, [_vm.catalogId != '' && _vm.catalogId != null ? _c('div', {
    staticClass: "right-content"
  }, [_c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 Search-panel float-left p-0"
  }, [_c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-6 col-xl-6 float-left"
  }, [_c('div', {
    staticClass: "row mt-0"
  }, [_c('div', {
    staticClass: "col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 float-left pr-1 pl-0"
  }, [_c('div', {
    staticClass: "form-group mb-0"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.txtUniqueNameCode,
      expression: "txtUniqueNameCode"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "relatedAssetSearch",
      "type": "text",
      "placeholder": "Search by Unique Name Code"
    },
    domProps: {
      "value": _vm.txtUniqueNameCode
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.txtUniqueNameCode = $event.target.value;
      }
    }
  })])]), _c('div', {
    staticClass: "col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 float-left pl-0"
  }, [_c('div', {
    staticClass: "search-btm-btn background-0 text-left form-check-inline"
  }, [_c('a', {
    staticClass: "btn btn-success float-left",
    attrs: {
      "id": "aRelatedSearchAsset",
      "title": "Search"
    },
    on: {
      "click": _vm.SearchByuniqueNameCode
    }
  }, [_c('i', {
    staticClass: "fa fa-search"
  })]), _c('a', {
    staticClass: "btn btn-danger ml-1 float-left",
    attrs: {
      "id": "aUN_ClearSearch",
      "title": "Clear"
    },
    on: {
      "click": _vm.ClearSearch
    }
  }, [_c('i', {
    staticClass: "fa fa-refresh"
  })])])])])])])]) : _vm._e(), _c('tg-list', {
    attrs: {
      "showCheckBox": true,
      "IsShowAction": false,
      "listType": ['List'],
      "ModuleName": "Asset",
      "SubModuleCode": "Asset",
      "IdentityColumn": "RelatedInfoId",
      "HeaderText": "Asset Management",
      "widgets": _vm.widgets,
      "ListData": _vm.RelatedInformationData,
      "HeaderData": _vm.Headers,
      "callbackfunction": _vm.FetchData,
      "LegendArray": _vm.LegendArray,
      "SortExp": _vm.SortExp,
      "SortBy": _vm.SortBy,
      "NorecordfoundText": _vm.$t('NoRecordfound'),
      "HeaderButtons": _vm.listheaderbuttons,
      "TotalRecords": _vm.TotalRecords,
      "SearchFields": _vm.leftSearchFields,
      "RenderRowActionMethod": _vm.renderActions,
      "ListDataCallBackFunction": _vm.FetchData
    },
    on: {
      "LeftsearchButtonClick": _vm.leftCommonSearch,
      "PagerButtonClick": _vm.pagerMethod,
      "HeaderButtonClick": _vm.commonHeaderButtonClick,
      "SortdataButtonClick": _vm.sortdata
    },
    scopedSlots: _vm._u([{
      key: "slotdata",
      fn: function ({
        data
      }) {
        return [data.column.COLUMN_NAME == 'UniqueName' ? [_c('span', {
          staticClass: "text-dark",
          attrs: {
            "title": data.row.UNIQUE_NAME
          }
        }, [_c('em', {
          staticClass: "text-primary",
          staticStyle: {
            "cursor": "pointer"
          },
          on: {
            "click": function ($event) {
              return _vm.UniqueNameclick(data.row.RelatedInfoId);
            }
          }
        }, [_vm._v(_vm._s(data.row.UniqueName))])])] : _vm._e(), data.column.COLUMN_NAME == 'TotalItems' ? [_c('span', {
          staticClass: "text-dark",
          attrs: {
            "title": data.row.QUANTITY
          }
        }, [_c('i', {
          staticClass: "fa fa-list",
          attrs: {
            "aria-hidden": "true"
          }
        }), _c('span', {
          staticClass: "noti-circle noti-blue"
        }, [_vm._v(_vm._s(data.row.TotalItems > 0 ? data.row.TotalItems : 0))])])] : _vm._e(), data.column.COLUMN_NAME == 'BarcodeImageUrl' ? [_c('div', {
          staticClass: "input-group mb-3 flex-wrap",
          staticStyle: {
            "min-width": "360px"
          },
          attrs: {
            "title": ""
          }
        }, [_c('div', {
          staticClass: "text-center pt-0 pb-2 w-100",
          attrs: {
            "title": ""
          }
        }, [_vm._v(_vm._s(data.row.UniqueName))]), _c('div', {
          staticClass: "form-control p-0 border-0 text-center"
        }, [_c('img', {
          staticStyle: {
            "max-height": "40px"
          },
          attrs: {
            "src": data.row.BarcodeImageUrl,
            "title": ""
          }
        }), _c('span', {
          staticClass: "d-block w-100 text-center"
        }, [_vm._v(_vm._s(data.row.BARCODE_NUMBER))]), _c('div', {
          staticClass: "text-center pt-0 pb-2 w-100",
          attrs: {
            "title": ""
          }
        }, [_vm._v(_vm._s(data.row.BarcodeNumber))])]), _c('div', {
          staticClass: "input-group-append",
          staticStyle: {
            "font-size": "50px"
          }
        }, [_c('span', {
          staticClass: "mx-1 input-group-text border-0 bg-info",
          staticStyle: {
            "width": "40px",
            "height": "40px",
            "border-radius": "100%",
            "padding": "0px",
            "text-align": "center",
            "display": "flex",
            "justify-content": "center"
          },
          attrs: {
            "id": "basic-addon2",
            "title": ""
          }
        }, [_c('a', {
          staticStyle: {
            "font-size": "19px"
          },
          attrs: {
            "catalogId": data.row.RelatedInfoId,
            "title": "Download Barcode"
          },
          on: {
            "click": function ($event) {
              return _vm.DownloadBarcode(data.row.RelatedInfoId);
            }
          }
        }, [_c('i', {
          staticClass: "fa fa-download text-white action-icon enable"
        })])])])])] : _vm._e(), data.column.COLUMN_NAME == 'STATUS_CODE' ? [_c('a', {
          staticClass: "inactive-disabled"
        }, [_c('span', {
          staticClass: "btn d-inline-block text-center text-truncate btn-success"
        }, [_vm._v(" " + _vm._s(data.row[data.column.COLUMN_NAME]) + " ")])])] : _vm._e(), data.column.COLUMN_NAME == 'CalibrationDate' ? [_c('a', {
          staticClass: "table-head-btn viewcomment",
          attrs: {
            "id": data.row.CalibrationDate
          },
          on: {
            "click": function ($event) {
              return _vm.AuditHistoryClick(data.row, 'Calibration');
            }
          }
        }, [_c('em', {
          staticClass: "fa fa-comment text-info action-icon center-icon"
        }, [_c('sup', [_vm._v(" " + _vm._s(data.row.CalibrateHistories) + " ")])])]), _c('span', [_vm._v(" " + _vm._s(data.row.CalibrationDate))])] : _vm._e(), data.column.COLUMN_NAME == 'LastAuditDate' ? [_c('a', {
          staticClass: "table-head-btn viewcomment",
          attrs: {
            "id": data.row.RelatedInfoId
          },
          on: {
            "click": function ($event) {
              return _vm.AuditHistoryClick(data.row, 'Audit');
            }
          }
        }, [_c('em', {
          staticClass: "fa fa-comment text-info action-icon center-icon"
        }, [_c('sup', [_vm._v(" " + _vm._s(data.row.AuditHistories) + " ")])])]), _c('span', [_vm._v(" " + _vm._s(data.row.LastAuditDate))])] : _vm._e(), data.column.COLUMN_NAME == 'AvailableItems' ? [_c('span', {
          staticClass: "text-dark",
          attrs: {
            "title": data.row.QUANTITY
          }
        }, [_c('i', {
          staticClass: "fa fa-list",
          attrs: {
            "aria-hidden": "true"
          }
        }), _c('span', {
          staticClass: "noti-circle noti-blue"
        }, [_vm._v(_vm._s(data.row.AvailableItems > 0 ? data.row.AvailableItems : 0))])])] : _vm._e(), data.column.COLUMN_NAME == 'Calendar' ? [_c('a', {
          staticStyle: {
            "cursor": "pointer"
          },
          attrs: {
            "title": "Calendar",
            "rid": "RelatedInfoId",
            "value": ""
          },
          on: {
            "click": function ($event) {
              return _vm.ShowCalender(data.row);
            }
          }
        }, [_c('em', {
          staticClass: "fa fa-calendar text-primary action-icon center-icon"
        })])] : _vm._e(), data.column.COLUMN_NAME == 'HISTORY' ? [_c('em', {
          staticClass: "updateBarcode",
          staticStyle: {
            "cursor": "pointer"
          },
          attrs: {
            "title": "View History",
            "data-placement": "left",
            "data-barcode": data.row.BARCODE_NUMBER,
            "data-serialnumber": data.row.SERIAL_NUMBER,
            "data-uniqueName": data.row.UNIQUE_NAME,
            "value": ""
          },
          on: {
            "click": function ($event) {
              return _vm.ViewHistory(data.row);
            }
          }
        }, [_c('i', {
          staticClass: "fa fa-file text-warning action-icon center-icon"
        })])] : _vm._e(), data.column.COLUMN_NAME == 'FileType' ? [data.row.FileType == null ? _c('span', {
          staticClass: "center-icon mx-1 input-group-text border-0 bg-secondary",
          staticStyle: {
            "width": "40px",
            "height": "40px",
            "border-radius": "100%",
            "padding": "0px",
            "text-align": "center",
            "display": "flex",
            "justify-content": "center"
          },
          attrs: {
            "id": "basic-addon2"
          }
        }, [_c('em', {
          staticClass: "downloadfilenofile disabled",
          attrs: {
            "title": "Download Attachment",
            "fileType": data.row.FileType
          }
        }, [_c('i', {
          staticClass: "fa fa-download text-white action-icon disable center-icon",
          attrs: {
            "title": "Download Attachment"
          }
        })])]) : _c('span', {
          staticClass: "center-icon mx-1 input-group-text border-0 bg-info",
          staticStyle: {
            "width": "40px",
            "height": "40px",
            "border-radius": "100%",
            "padding": "0px",
            "text-align": "center",
            "display": "flex",
            "justify-content": "center"
          },
          attrs: {
            "id": "basic-addon2"
          }
        }, [_c('em', {
          staticClass: "downloadfile",
          attrs: {
            "title": "Download Attachment",
            "fileType": data.row.FileType,
            "fileType": "FileType"
          },
          on: {
            "click": function ($event) {
              return _vm.DownLoadFile(data.row);
            }
          }
        }, [_c('i', {
          staticClass: "fa fa-download text-white action-icon enable center-icon",
          attrs: {
            "title": "Download Attachment"
          }
        })])])] : _vm._e(), data.column.COLUMN_NAME == 'Action' ? [_c('em', {
          staticClass: "updateBarcode",
          staticStyle: {
            "cursor": "pointer"
          },
          attrs: {
            "title": "Edit",
            "data-placement": "left",
            "data-barcode": data.row.BARCODE_NUMBER,
            "data-serialnumber": data.row.SERIAL_NUMBER,
            "data-uniqueName": data.row.UNIQUE_NAME,
            "value": ""
          },
          on: {
            "click": function ($event) {
              return _vm.UpdateBarcode(data.row);
            }
          }
        }, [_c('i', {
          staticClass: "fa fa-pencil text-primary action-icon center-icon"
        })])] : _vm._e(), data.column.COLUMN_NAME == 'StatusName' ? [_c('td', {
          staticClass: "text-center single-action"
        }, [_c('span', {
          staticClass: "cstm-drop-btn"
        }, [_c('select', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: data.row.StatusId,
            expression: "data.row.StatusId"
          }],
          class: {
            'ddlupdatestatus w-80 btn-success': data.row.StatusName == 'ACT',
            'ddlupdatestatus w-80 btn-danger': data.row.StatusName == 'INACT',
            'float-left w-100 btn-info valid': data.row.StatusName == 'CATALOGUE_STOCK',
            'UpdateItemStatus float-left  btn-warning': data.row.StatusName == 'CATALOGUE_USE',
            'UpdateItemStatus float-left w-100 btn-primary': data.row.StatusName == 'ASSET_TRANSIT',
            'UpdateItemStatus float-left w-100 btn-danger valid': data.row.StatusName == 'CATALOGUE_RETIRED'
          },
          attrs: {
            "name": "Reader"
          },
          on: {
            "change": [function ($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.$set(data.row, "StatusId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
            }, function ($event) {
              return _vm.changeStatus(data.row.RelatedInfoId, data.row.StatusId);
            }]
          }
        }, _vm._l(_vm.StatusListData, function (item, itemIndex) {
          return _c('option', {
            key: itemIndex,
            domProps: {
              "value": item.STATUS_ID
            }
          }, [_vm._v(_vm._s(item.STATUS))]);
        }), 0)])])] : _vm._e()];
      }
    }])
  })], 1), _vm._v("   "), _c('div', {
    staticClass: "p-3"
  }, [_vm.chkRelatedInfo ? _c('dynamic-form', {
    attrs: {
      "lang": "en",
      "buttons": _vm.buttons
    }
  }) : _vm._e()], 1), _vm.IscheckInfromation ? _c('RelatedInformationModel', {
    attrs: {
      "RelatedInfoId": _vm.RelatedInfoId
    },
    on: {
      "ClosePOPuP": _vm.ClosePOPuP
    }
  }) : _vm._e(), _vm.IscheckDeployProduct ? _c('DeployProductpopup', {
    attrs: {
      "RelatedInfoId": _vm.RelatedInfoId
    },
    on: {
      "ClosePOp": _vm.ClosePOp
    }
  }) : _vm._e(), _vm.IsUpdateBarCode ? _c('UpdateBarCodeModel', {
    attrs: {
      "BarcodeArray": _vm.BarcodeArray
    },
    on: {
      "ClosePOP": _vm.ClosePOP
    }
  }) : _vm._e(), _vm.ShowAddProduct ? _c('AddProduct') : _vm._e(), _vm.Calenderpopup ? _c('Calendar', {
    on: {
      "CloseCalendarpopup": _vm.CloseCalendarpopup
    }
  }) : _vm._e(), _vm.isHistoryModel ? _c('AuditHistoryModel', {
    attrs: {
      "TabName": _vm.TabName,
      "HistoryItems": _vm.HistoryItems
    },
    on: {
      "CloseAuditpopup": _vm.CloseAuditpopup
    }
  }) : _vm._e()], 1)], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('a', {
    staticClass: "disabled pr-2",
    attrs: {
      "id": "DisablebtnBarCode",
      "href": "javascript:void(0);",
      "title": "Download Barcode"
    }
  }, [_c('i', {
    staticClass: "fa fa-barcode pr-2"
  }), _vm._v("Barcode")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('a', {
    staticClass: "barCodePDF",
    attrs: {
      "id": "DisablebtnBarCodePDF",
      "href": "javascript:void(0);",
      "title": "Barcode Print"
    }
  }, [_c('i', {
    staticClass: "fa fa-print pr-2"
  }), _vm._v("Barcode Print")]);
}];

// CONCATENATED MODULE: ./src/views/AssetCatalog/RelatedInformation.vue?vue&type=template&id=41f92ce5&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-exception.stack.js
var web_dom_exception_stack = __webpack_require__("b7ef");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.at.js
var es_typed_array_at = __webpack_require__("907a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.find-last.js
var es_typed_array_find_last = __webpack_require__("986a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.find-last-index.js
var es_typed_array_find_last_index = __webpack_require__("1d02");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.set.js
var es_typed_array_set = __webpack_require__("3c5d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.to-reversed.js
var es_typed_array_to_reversed = __webpack_require__("6ce5");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.to-sorted.js
var es_typed_array_to_sorted = __webpack_require__("2834");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.with.js
var es_typed_array_with = __webpack_require__("4ea1");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.delete.js
var web_url_search_params_delete = __webpack_require__("88a7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.has.js
var web_url_search_params_has = __webpack_require__("271a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.size.js
var web_url_search_params_size = __webpack_require__("5494");

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("bc3a");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ./src/stores/UserInfo.js
var UserInfo = __webpack_require__("b0ac");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// CONCATENATED MODULE: ./src/views/AssetCatalog/RelatedInformationSchema.js


let buttons = [{
  title: "Add Product",
  iconClass: "fa fa-plus",
  callbackfunction: "OpenModelAddProduct",
  additionalClass: "",
  isdisabled: false,
  isvisible: true,
  checkPrivilege: false
}, {
  title: "Deploy Product",
  iconClass: "fa fa-plus",
  callbackfunction: "OpenDeployProduct",
  additionalClass: "",
  isdisabled: false,
  isvisible: true,
  checkPrivilege: false
}, {
  title: "Barcode",
  iconClass: "fa fa-barcode",
  callbackfunction: "DownloadAllBarcode",
  additionalClass: "",
  isdisabled: false,
  isvisible: true,
  checkPrivilege: false
}, {
  title: "Barcode Print",
  iconClass: "fa fa-print",
  callbackfunction: "PrintAllBarcode",
  additionalClass: "",
  isdisabled: false,
  isvisible: true,
  checkPrivilege: false
}, {
  title: "Back to list",
  iconClass: "fa fa-angle-double-left",
  callbackfunction: "BackToProductList",
  additionalClass: "",
  isdisabled: false,
  isvisible: true,
  checkPrivilege: false
}];
let leftsearchSchema = [{
  fieldName: "Location",
  fieldType: "ddl-multilevel",
  fieldIcon: "fa-file",
  paramName: "location_id",
  fieldSearchConditionName: ["location_id"],
  isSearch: false,
  value: null,
  listOptions: []
}, {
  fieldName: "Product Name/Code",
  fieldType: "text",
  fieldIcon: "fa-user",
  paramName: "search",
  fieldSearchConditionName: [""],
  isSearch: false,
  value: ""
  // listOptions: []
}, {
  fieldName: "Status",
  fieldType: "radio",
  fieldIcon: "fa fa-file-text-o",
  paramName: "statusId",
  fieldSearchConditionName: ["statusId"],
  isSearch: false,
  value: "",
  listOptions: []
}, {
  fieldName: "Tag",
  fieldType: "ddl-check",
  fieldIcon: "fa-server",
  paramName: "typeIds",
  fieldSearchConditionName: ["typeIds"],
  isSearch: false,
  value: "",
  listOptions: []
}];
let listActions = [{
  title: "Edit",
  href: "/AssetCatalog/Update/{ASSET_CATALOGUE_ID}",
  icon: "fa fa-pencil text-success action-icon",
  additionalSpan: "",
  isVisible: true
}, {
  title: "Clone",
  href: "javascript:void(0)",
  callbackfunction: "OpenClonePopup",
  icon: "fa fa-clone text-success action-icon",
  additionalSpan: "",
  isVisible: true
}, {
  title: "Detail Products History",
  href: "/AssetAssignment/Index",
  icon: "fa fa-file text-warning action-icon",
  additionalSpan: "",
  isVisible: true
}, {
  title: "View attached file(s)",
  callbackfunction: "",
  href: "javascript:void(0)",
  icon: "fa fa-download text-secondary action-icon",
  additionalSpan: "",
  isVisible: true
}];
function bindleftCommonSearchdropdown(instance, modulename, filtername) {
  var vm = instance;
  var LocationData = [];
  var TagData = [];
  if (filtername == "Location") {
    var params = `reqForm=`;
    DataService["a" /* default */].GetLocationByCompanyId(params).then(function (response) {
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
            value: `${item.STATUS_ID}`
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
/* harmony default export */ var RelatedInformationSchema = ({
  buttons,
  leftsearchSchema,
  listActions,
  bindleftCommonSearchdropdown
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/DeployProductpopup.vue?vue&type=template&id=3ec6f6a6&
var DeployProductpopupvue_type_template_id_3ec6f6a6_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_c('section', [_c('div', {
    staticClass: "modal my-popups right fade show",
    staticStyle: {
      "display": "block"
    },
    attrs: {
      "id": "manageProjectModal",
      "role": "dialog"
    }
  }, [_c('div', {
    staticClass: "modal-dialog mw-1100",
    attrs: {
      "role": "document"
    }
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('div', {
    staticClass: "modal-header mheader-user"
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.ClosePOp
    }
  }, [_c('i', {
    staticClass: "fa fa-times",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _c('h4', {
    staticClass: "modal-title",
    attrs: {
      "id": "myModalLabel"
    }
  }, [_vm._v(_vm._s(_vm.$t("AddItem")))]), _c('span', {
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
      "innerHTML": _vm._s(_vm.$t('UserGuideAddDeployProduct'))
    }
  })])])])]), _c('div', {
    staticClass: "modal-body"
  }, [_c('div', {
    staticClass: "border p-3"
  }, [_vm.DataLoaded ? _c('dynamic-form', {
    attrs: {
      "lang": "en",
      "buttons": _vm.buttons,
      "schema": _vm.FormSchema
    },
    on: {
      "OnSubmit": _vm.onSubmit
    },
    scopedSlots: _vm._u([{
      key: "tgslot-UnitPrice",
      fn: function ({
        data
      }) {
        return [_c('div', {
          staticClass: "input-group"
        }, [_c('span', {
          staticClass: "input-group-append"
        }, [_c('span', {
          staticClass: "input-group-text",
          attrs: {
            "id": "spnOutOF"
          }
        }, [_vm._v("(USD)")])]), _c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: data.fieldInfo.value,
            expression: "data.fieldInfo.value"
          }],
          staticClass: "form-control",
          attrs: {
            "type": "number",
            "maxlength": "10"
          },
          domProps: {
            "value": data.fieldInfo.value
          },
          on: {
            "keyup": function ($event) {
              return _vm.GetAssetCost(data.fieldInfo.value, 'Quantity');
            },
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.$set(data.fieldInfo, "value", $event.target.value);
            }
          }
        })])];
      }
    }, {
      key: "tgslot-TotalCost",
      fn: function ({
        data
      }) {
        return [_c('div', {
          staticClass: "input-group"
        }, [_c('span', {
          staticClass: "input-group-append"
        }, [_c('span', {
          staticClass: "input-group-text",
          attrs: {
            "id": "spnOutOF"
          }
        }, [_vm._v("(USD)")])]), _c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: data.fieldInfo.value,
            expression: "data.fieldInfo.value"
          }],
          staticClass: "form-control",
          attrs: {
            "type": "number"
          },
          domProps: {
            "value": data.fieldInfo.value
          },
          on: {
            "keyup": function ($event) {
              return _vm.GetUnitPrice(data.fieldInfo.value);
            },
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.$set(data.fieldInfo, "value", $event.target.value);
            }
          }
        })])];
      }
    }], null, false, 1084319603)
  }) : _vm._e()], 1), _vm._m(1)])])]), _vm.Addlocation ? _c('AddproducLocation', {
    on: {
      "closepopup": _vm.closepopup
    }
  }) : _vm._e()], 1)])]);
};
var DeployProductpopupvue_type_template_id_3ec6f6a6_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('a', {
    staticClass: "ancuserguide",
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
    staticClass: "modal-footer"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('small', {
    staticClass: "text-danger"
  }, [_vm._v("Fields marked with an asterisk (*) are mandatory.")])])]);
}];

// CONCATENATED MODULE: ./src/components/Modal/DeployProductpopup.vue?vue&type=template&id=3ec6f6a6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/AddproducLocation.vue?vue&type=template&id=721a6e14&
var AddproducLocationvue_type_template_id_721a6e14_render = function render() {
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
  }, [_vm._v(" " + _vm._s(_vm.$t('Location')) + " ")]), _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('closepopup');
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-times",
    attrs: {
      "aria-hidden": "true"
    }
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
  }) : _vm._e()], 1)])])])]);
};
var AddproducLocationvue_type_template_id_721a6e14_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Modal/AddproducLocation.vue?vue&type=template&id=721a6e14&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/AddproducLocation.vue?vue&type=script&lang=js&


/* harmony default export */ var AddproducLocationvue_type_script_lang_js_ = ({
  components: {},
  data() {
    return {
      FormSchema: [{
        layoutType: "triple",
        Data: [{
          astype: "SelectField",
          label: this.$t('ParentLocation'),
          name: "ParentLocation",
          value: "",
          placeholder: "",
          config: {
            options: []
          }
        }, {
          astype: "TextField",
          label: this.$t('LocationName'),
          name: "LocationName",
          value: "",
          placeholder: "",
          validationRules: {
            "required": true,
            max: 250
          },
          config: {
            option_request_url: "https://newcrmapi.talygen.com/api/Common" + '/Common/GetDDLData?moduleName=CRM&type=COUNTRIES',
            token: this.GetUserInfo.Token,
            onChange: this.onChangeDropdown
          }
        }, {
          astype: "SelectField",
          label: this.$t('Status'),
          name: "Status",
          value: "",
          placeholder: "",
          config: {
            options: []
          }
        }, {
          astype: "TextField",
          label: this.$t('AddressLine1'),
          name: "AddressLine1",
          value: "",
          placeholder: "",
          validationRules: {
            "required": true,
            max: 250
          }
        }, {
          astype: "TextField",
          label: this.$t('City'),
          name: "City",
          value: "",
          placeholder: "",
          validationRules: {
            "required": true,
            max: 250
          }
        }, {
          astype: "SelectField",
          label: this.$t('Country'),
          name: "Country",
          value: "",
          placeholder: "",
          validationRules: {
            "required": true,
            max: 250
          },
          config: {
            options: [],
            onChange: this.onChangeDropdown
          }
        }, {
          astype: "SelectField",
          label: this.$t('State'),
          name: "State",
          value: "",
          placeholder: "",
          config: {
            options: []
          }
        }, {
          astype: "TextField",
          label: this.$t('PostalCode'),
          name: "PostalCode",
          value: "",
          placeholder: ""
        }, {
          astype: "TextField",
          label: this.$t('Email'),
          name: "Email",
          value: "",
          placeholder: ""
        }, {
          astype: "TextField",
          label: this.$t('Phone1'),
          name: "Phone1",
          value: "",
          placeholder: ""
        }, {
          astype: "TextField",
          label: this.$t('Phone2'),
          name: "Phone2",
          value: "",
          placeholder: ""
        }, {
          astype: "TextField",
          label: this.$t('LocationCode'),
          name: "LocationCode",
          value: "",
          placeholder: ""
        }, {
          astype: "SelectField",
          label: this.$t('Tag'),
          name: "Tag",
          value: "",
          placeholder: "",
          config: {
            options: []
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
      }],
      myObj: [],
      LocationData: [],
      StatusData: [{
        name: 'Active',
        value: 1001
      }, {
        name: 'Inactive',
        value: 1002
      }],
      StateData: [],
      TagData: [],
      CreatedAt: "",
      CreatedBy: "",
      ModifiedAt: "",
      ModifiedBy: "",
      DataLoaded: 0,
      UserId: ''
    };
  },
  created: function () {
    var vm = this;
    vm.GetLocationByCompanyId();
    vm.GetStatusDDL();
    vm.GetCountry();
    vm.GetTagsByModuleId();
    vm.UserId = vm.GetUserInfo.ID;
    vm.DataLoaded = 1;
  },
  methods: {
    async GetTagsByModuleId() {
      var vm = this;
      var params = `modulename=Asset`;
      await DataService["a" /* default */].GetTagsByModuleId(params).then(function (response) {
        vm.TagData = JSON.parse(response.data);
        vm.TagData.data.forEach((item, index) => {
          vm.FormSchema[0].Data[12].config.options.push({
            name: item.TAG_NAME,
            value: `${item.TAG_ID}`
          });
        });
      });
    },
    async onChangeDropdown(evt) {
      debugger;
      var vm = this;
      var params = `countryId=${evt.target.value}`;
      await DataService["a" /* default */].GetStateListwithIDByCountryId(params).then(function (response) {
        vm.StateData = JSON.parse(response.data).data;
        vm.StateData.forEach((item, index) => {
          vm.FormSchema[0].Data[6].config.options.push({
            name: item.name,
            value: `${item.state_id}`
          });
        });
      });
    },
    async GetCountry() {
      debugger;
      var vm = this;
      var params = `langCode=EN`;
      await DataService["a" /* default */].GetCountry(params).then(function (response) {
        vm.CountryData = JSON.parse(response.data);
        vm.CountryData.forEach((item, index) => {
          vm.FormSchema[0].Data[5].config.options.push({
            name: item.COUNTRYNAME,
            value: `${item.ID}`
          });
        });
      });
    },
    async GetLocationByCompanyId() {
      var vm = this;
      var params = `reqForm=`;
      await DataService["a" /* default */].GetLocationByCompanyId(params).then(function (response) {
        vm.LocationData = JSON.parse(response.data).data;
        vm.LocationData.forEach((item, index) => {
          vm.FormSchema[0].Data[0].config.options.push({
            name: item.LOCATION_NAME,
            value: `${item.COMPANY_LOCATION_ID}`
          });
        });
      });
    },
    GetStatusDDL() {
      var vm = this;
      vm.StatusData.forEach((item, index) => {
        vm.FormSchema[0].Data[2].config.options.push({
          name: item.name,
          value: item.value
        });
      });
    },
    ClosePopup() {
      var vm = this;
      vm.$parent.closepopup();
    },
    onSubmit(e) {
      debugger;
      var vm = this;
      var propValues = e;
      var url = `LocationName=${e.LocationName}&LocationId=0`;
      DataService["a" /* default */].LocationExist(url).then(function (response) {
        vm.LocationId = response.data.result;
        if (response.data.result > 0) {
          vm.ShowAlert(vm.$t('Location already exist', [vm.$t('Location')]), "success", true, vm.$t("Alert"));
        } else {
          let myObj = {
            LocationId: vm.LocationId,
            LocationName: e.LocationName,
            Country: parseInt(e.Country),
            State: e.State,
            Address1: e.AddressLine1,
            Address2: "",
            City: e.City,
            PinCode: e.PostalCode,
            Email: e.Email,
            Phone1: e.Phone1,
            Phone2: e.Phone2,
            CreatedAt: null,
            CreatedBy: vm.UserId,
            ModifiedAt: null,
            ModifiedBy: vm.UserId,
            StatusId: e.Status,
            State_id: e.State == "" ? null : e.State,
            LocationCode: e.LocationCode,
            ParentLocationId: e.ParentLocation == "" ? null : e.ParentLocation,
            TagId: e.Tag.length <= 0 ? null : Array.prototype.map.call(e.Tag, function (item) {
              return item.value;
            }).join(","),
            CampusId: "",
            ClientId: 1
          };
          var jsonObj = JSON.stringify(myObj);
          DataService["a" /* default */].SaveUpdateLocation(myObj).then(function (response) {
            debugger;
            if (response.data == '1') {
              vm.ShowAlert(vm.$t('Location has been added successfully', [vm.$t('Location')]), "success", true, vm.$t("Alert"));
            } else if (response.data == '2') {
              vm.ShowAlert(vm.$t('Location has been updated successfully', [vm.$t('Location')]), "success", true, vm.$t("Alert"));
            } else if (response.data == '0') {
              vm.ShowAlert(vm.$t('unknown error', [vm.$t('Location')]), "success", true, vm.$t("Alert"));
            }
            vm.$parent.closepopup();
          });
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/AddproducLocation.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_AddproducLocationvue_type_script_lang_js_ = (AddproducLocationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Modal/AddproducLocation.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Modal_AddproducLocationvue_type_script_lang_js_,
  AddproducLocationvue_type_template_id_721a6e14_render,
  AddproducLocationvue_type_template_id_721a6e14_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AddproducLocation = (component.exports);
// EXTERNAL MODULE: ./node_modules/tg-controls_cli/dist/myLib.common.js
var myLib_common = __webpack_require__("240d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/DeployProductpopup.vue?vue&type=script&lang=js&




/* harmony default export */ var DeployProductpopupvue_type_script_lang_js_ = ({
  components: {
    AddproducLocation: AddproducLocation,
    'tree-view': myLib_common["TreeSelectField"]
  },
  data() {
    return {
      FormSchema: [{
        layoutType: "double",
        Data: [{
          astype: "RadioField",
          label: this.$t('DeploymentType'),
          name: "DeployMentType",
          value: "1",
          placeholder: "",
          config: {
            options: [{
              value: 1,
              name: "Product"
            }, {
              value: 2,
              name: "Inventory"
            }]

            //CallBackFunction: null
          },

          validationRules: {
            "required": false
          }
        }]
      }, {
        layoutType: "double",
        Data: [{
          astype: "SelectField",
          label: this.$t('ProductType'),
          name: "ProductType",
          value: "",
          placeholder: "Select",
          config: {
            options: [],
            //  option_request_url:process.env.VUE_APP_API_URL+'/AssetAssignment/GetAssetType?type=&issueTo=&locationId=&requestType=ASSIGN&requestFrom=',
            //  token:this.GetUserInfo.Token,
            showAddIcon: false,
            onChange: this.onChangeDropdown
          },
          validationRules: "required",
          dependent_show_type: 0
        }, {
          astype: "SelectField",
          label: this.$t('ProductName'),
          name: "ProductName",
          value: "",
          placeholder: "",
          config: {
            options: [],
            showAddIcon: false,
            onAddButtonClick: function (e, field) {}
          }
        }, {
          astype: "TreeSelectField",
          label: this.$t('Location'),
          name: "Location",
          value: null,
          placeholder: "Select Location",
          config: {
            options: []
            //showAddIcon: true
          },

          onAddButtonClick: this.OpenPopup,
          validationRules: {
            "required": true
          }
        }, {
          astype: "NumericField",
          label: this.$t('Quantity'),
          name: "Quantity",
          value: "0",
          placeholder: "",
          visibility: true,
          config: {
            onKeyUp: this.GetAssetCost
          },
          validationRules: {
            "required": true,
            max: 7,
            "min_value": 1
          }
        }, {
          astype: "SlotField",
          label: this.$t('UnitPrice'),
          name: "UnitPrice",
          value: "0",
          placeholder: "",
          validationRules: {
            max: 10
          },
          visibility: true,
          config: {
            onKeyUp: this.GetAssetCost
          }
        }, {
          astype: "SlotField",
          label: this.$t('TotalCost'),
          name: "TotalCost",
          value: "0",
          placeholder: "",
          visibility: true,
          config: {
            onKeyUp: this.GetUnitPrice
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
        onClick: this.ClosePOp
      }],
      LocationData: [],
      myObj: [],
      ProductypeID: '',
      UserId: null,
      Addlocation: false,
      DataLoaded: 0
    };
  },
  async created() {
    var vm = this;
    await vm.GetLocation();
    vm.FormSchema[0].Data[0].value = 1;
    await vm.BindItemTypeByUserId();
    // vm.GetCompanyAssestCatalogs();
    // vm.onChangeDropdown();
    // vm.submit();
    this.UserId = this.GetUserInfo.ID;
    vm.DataLoaded = 1;
  },
  methods: {
    GetAssetCost(evt, val) {
      var vm = this;
      if (val.label == 'Quantity') {
        vm.FormSchema[1].Data[3].value = vm.FormSchema[1].Data[3].value.replace(/[^0-9]/g, "");
      }
      var quantity = vm.FormSchema[1].Data[3].value;
      var unitPrice = vm.FormSchema[1].Data[4].value;
      if (unitPrice == "") {
        unitPrice = 0;
        $('#UnitPrice').val(unitPrice);
      }
      var assetCost = parseFloat(unitPrice) * parseFloat(quantity);
      if (quantity == 0) assetCost = 0;
      vm.FormSchema[1].Data[5].value = assetCost.toFixed(2);
    },
    GetUnitPrice(evt, val) {
      var vm = this;
      var quantity = vm.FormSchema[1].Data[3].value;
      var totalCost = vm.FormSchema[1].Data[4].value;
      var unitPrice = 0;
      if (totalCost == "") {
        totalCost = 0;
        vm.FormSchema[1].Data[4].value = unitPrice;
      }
      unitPrice = parseFloat(totalCost) / parseFloat(quantity);
      if (quantity == 0) unitPrice = 0;
      vm.FormSchema[1].Data[4].value = unitPrice.toFixed(2);
    },
    async GetLocation() {
      debugger;
      var vm = this;
      vm.isLoading = true;
      var params = `reqForm=`;
      await DataService["a" /* default */].GetLocationByuserId(params).then(response => {
        vm.LocationData = response.data.data;
        vm.FindalLocationArray = [];
        vm.LocationData.forEach(value => {
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
        vm.FormSchema[1].Data[2].config.options = vm.FindalLocationArray;
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
    // GetCompanyAssestCatalogs: function (ths) {
    //   let url = `id=${ths}&issueTo=${this.UserId}&locationId=${this.txtLocation}&requestFrom=assetassignment`;
    //   DataService.GetCompanyAssestCatalogs(url).then(response => {
    //     this.ProducttData = response.data;
    //   });
    // },
    calcSum(val) {
      var vm = this;
      let totalcost = 0;
      totalcost = vm.FormSchema[1].Data[3].value * vm.FormSchema[1].Data[4].value;
      vm.FormSchema[1].Data[5].value = totalcost;
    },
    async BindItemTypeByUserId() {
      let url = `type=&issueTo=&locationId=&requestType=ASSIGN&requestFrom=`;
      var vm = this;
      await DataService["a" /* default */].AssignGetAssetType(url).then(response => {
        response.data.forEach((itm, index) => {
          vm.FormSchema[1].Data[0].config.options.push({
            name: itm.ASSETTYPE,
            value: itm.ASSETID
          });
        });
      });
    },
    async onChangeDropdown(evt) {
      debugger;
      var vm = this;
      var params = `assetTypeid=${evt.target.value}`;
      await DataService["a" /* default */].GetAssetCatalogueType(params).then(function (response) {
        response.data.forEach((itm, index) => {
          vm.FormSchema[1].Data[1].config.options.push({
            name: itm.NAME,
            value: itm.ASSETID
          });
        });
      });
    },
    OpenPopup: function () {
      var vm = this;
      vm.Addlocation = true;
    },
    ClosePOp() {
      var vm = this;
      vm.$parent.ClosePOp();
    },
    closepopup() {
      var vm = this;
      vm.Addlocation = false;
    },
    onSubmit(formfields, e) {
      var vm = this;
      debugger;
      var ArrayData = [];
      let myObj = {
        DeployId: 0,
        AssetCatalogueId: vm.$route.params.id == undefined ? 0 : parseInt(vm.$route.params.id),
        AssetTypeId: formfields.ProductType,
        LocationId: formfields.Location,
        LocationName: null,
        Quantity: formfields.Quantity,
        UnitPrice: formfields.UnitPrice,
        Model: null,
        Manufacturer: null,
        Vendor: null,
        PurchaseOrder: null,
        WarrantyDuration: null,
        DepreciationRuleId: 0,
        OrderDate: null,
        CalibrationFrequency: null,
        AssetCost: formfields.TotalCost,
        SalvageCost: null,
        ItemLife: null,
        InvoiceNumber: null,
        InvoiceDate: null,
        InsurerName: null,
        InsuranceRefNumber: null,
        InsuranceTo: null,
        DeployedBy: null,
        DeployedAt: "0001-01-01T00:00:00",
        EnableWarranty: false,
        EnableInsurance: false,
        EnableItemCost: false,
        EnableCalibration: false,
        EnableDepreciation: false,
        DeploymentType: formfields.RadioField
      };
      ArrayData.push(myObj);
      DataService["a" /* default */].SaveDeploy(ArrayData).then(function (response) {
        debugger;
        if (response.data.result == "success") {
          vm.ShowAlert(vm.$t("AddProductDeploy"), "success", vm.$t('Alert'));
          vm.ClosePOp();
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/DeployProductpopup.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_DeployProductpopupvue_type_script_lang_js_ = (DeployProductpopupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Modal/DeployProductpopup.vue





/* normalize component */

var DeployProductpopup_component = Object(componentNormalizer["a" /* default */])(
  Modal_DeployProductpopupvue_type_script_lang_js_,
  DeployProductpopupvue_type_template_id_3ec6f6a6_render,
  DeployProductpopupvue_type_template_id_3ec6f6a6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DeployProductpopup = (DeployProductpopup_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/RelatedInformationPopup.vue?vue&type=template&id=bdbfe5b0&
var RelatedInformationPopupvue_type_template_id_bdbfe5b0_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    class: _vm.main - _vm.content
  }, [_c('div', {
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
  }, [_vm._v(" " + _vm._s(_vm.$t("RelatedInformation")) + " ")]), _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-original-title": "Close"
    },
    on: {
      "click": function ($event) {
        return _vm.ClosePOPuP($event);
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-times"
  })])]), _c('div', {
    staticClass: "modal-body"
  }, [_c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0"
  }, [_c('Form', {
    ref: "RejectForm",
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        valid,
        errors
      }) {
        return [_c('div', {
          staticClass: "row"
        }, [_c('div', {
          staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0 float-left step1fixer d-flex flex-wrap"
        }, [_c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', [_vm._v(_vm._s(_vm.$t("UniqueName")) + ":")]), _c('span', {
          staticClass: "text-danger"
        }), _c('Field', {
          staticClass: "w-100",
          attrs: {
            "rules": {
              'required': false
            },
            "name": "UniqueName"
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
                  value: _vm.InfoData.UniqueName,
                  expression: "InfoData.UniqueName"
                }],
                class: {
                  'form-control': true,
                  'is-invalid': errors[0]
                },
                attrs: {
                  "type": "text",
                  "placeholder": "Enter UniqueName",
                  "name": "UniqueName",
                  "autocomplete": "off"
                },
                domProps: {
                  "value": _vm.InfoData.UniqueName
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.$set(_vm.InfoData, "UniqueName", $event.target.value);
                  }
                }
              })];
            }
          }], null, true)
        }), errors[0] ? _c('span', {
          staticClass: "invalid-feedback d-block",
          attrs: {
            "name": "UniqueName"
          }
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()], 1)]), _c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', [_vm._v(_vm._s(_vm.$t("WarrantyDuration")) + ":")]), _c('span', {
          staticClass: "text-danger"
        }), _c('Field', {
          staticClass: "w-100",
          attrs: {
            "rules": {
              'required': false
            },
            "name": "WarrantyDuration"
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
                  value: _vm.InfoData.WarrantyDuration,
                  expression: "InfoData.WarrantyDuration"
                }],
                class: {
                  'form-control': true,
                  'is-invalid': errors[0]
                },
                attrs: {
                  "type": "text",
                  "placeholder": "Enter Warranty Duration",
                  "maxlength": "500",
                  "name": "WarrantyDuration",
                  "autocomplete": "off"
                },
                domProps: {
                  "value": _vm.InfoData.WarrantyDuration
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.$set(_vm.InfoData, "WarrantyDuration", $event.target.value);
                  }
                }
              })];
            }
          }], null, true)
        }), errors[0] ? _c('span', {
          staticClass: "invalid-feedback d-block",
          attrs: {
            "name": "WarrantyDuration"
          }
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()], 1)]), _c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"
        }, [_c('div', {
          staticClass: "input-group"
        }, [_c('label', [_vm._v(" " + _vm._s(_vm.$t("AcquisitionDate")) + ":")]), _c('span', {
          staticClass: "text-danger"
        }), _c('v-date-picker', {
          staticClass: "timedate input-group",
          attrs: {
            "popover": _vm.popover,
            "name": _vm.AcquisitionDate,
            "minute-increment": 5
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              inputValue,
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
                  "click": function ($event) {
                    return togglePopover();
                  }
                }
              }, _vm.inputEvents)), _c('div', {
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
          }], null, true),
          model: {
            value: _vm.InfoData.AcquisitionDate,
            callback: function ($$v) {
              _vm.$set(_vm.InfoData, "AcquisitionDate", $$v);
            },
            expression: "InfoData.AcquisitionDate"
          }
        })], 1)]), _c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"
        }, [_c('div', {
          staticClass: "input-group"
        }, [_c('label', [_vm._v(_vm._s(_vm.$t("WarrantyExpirationDate")) + ":")]), _c('span', {
          staticClass: "text-danger"
        }), _c('v-date-picker', {
          staticClass: "timedate input-group",
          attrs: {
            "popover": _vm.popover,
            "name": _vm.WarrantyExpirationDate,
            "minute-increment": 5
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              inputValue,
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
                  "click": function ($event) {
                    return togglePopover();
                  }
                }
              }, _vm.inputEvents)), _c('div', {
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
          }], null, true),
          model: {
            value: _vm.InfoData.WarrantyExpirationDate,
            callback: function ($$v) {
              _vm.$set(_vm.InfoData, "WarrantyExpirationDate", $$v);
            },
            expression: "InfoData.WarrantyExpirationDate"
          }
        })], 1)]), _c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', [_vm._v(_vm._s(_vm.$t("Cost")) + ":")]), _c('span', {
          staticClass: "text-danger"
        }), _c('Field', {
          staticClass: "w-100",
          attrs: {
            "rules": {
              'required': false
            },
            "name": "Cost"
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
                  value: _vm.InfoData.Cost,
                  expression: "InfoData.Cost"
                }],
                class: {
                  'form-control': true,
                  'is-invalid': errors[0]
                },
                attrs: {
                  "type": "text",
                  "placeholder": "Enter Cost",
                  "maxlength": "500",
                  "name": "Cost",
                  "autocomplete": "off"
                },
                domProps: {
                  "value": _vm.InfoData.Cost
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.$set(_vm.InfoData, "Cost", $event.target.value);
                  }
                }
              })];
            }
          }], null, true)
        }), errors[0] ? _c('span', {
          staticClass: "invalid-feedback d-block",
          attrs: {
            "name": "Cost"
          }
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()], 1)]), _c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', [_vm._v(_vm._s(_vm.$t("SerialNumber")) + ":")]), _c('span', {
          staticClass: "text-danger"
        }), _c('Field', {
          staticClass: "w-100",
          attrs: {
            "rules": {
              'required': false
            },
            "name": "SerialNumber"
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
                  value: _vm.InfoData.SerialNumber,
                  expression: "InfoData.SerialNumber"
                }],
                class: {
                  'form-control': true,
                  'is-invalid': errors[0]
                },
                attrs: {
                  "type": "text",
                  "placeholder": "Enter Serial Number",
                  "maxlength": "500",
                  "name": "SerialNumber",
                  "autocomplete": "off"
                },
                domProps: {
                  "value": _vm.InfoData.SerialNumber
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.$set(_vm.InfoData, "SerialNumber", $event.target.value);
                  }
                }
              })];
            }
          }], null, true)
        }), errors[0] ? _c('span', {
          staticClass: "invalid-feedback d-block",
          attrs: {
            "name": "SerialNumber"
          }
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()], 1)]), _c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', [_vm._v(_vm._s(_vm.$t("LicenseKey")) + ":")]), _c('span', {
          staticClass: "text-danger"
        }), _c('Field', {
          staticClass: "w-100",
          attrs: {
            "rules": {
              'required': false
            },
            "name": "LicenseKey"
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
                  value: _vm.InfoData.LicenseKey,
                  expression: "InfoData.LicenseKey"
                }],
                class: {
                  'form-control': true,
                  'is-invalid': errors[0]
                },
                attrs: {
                  "type": "text",
                  "placeholder": "Enter License Key",
                  "maxlength": "500",
                  "name": "LicenseKey",
                  "autocomplete": "off"
                },
                domProps: {
                  "value": _vm.InfoData.LicenseKey
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.$set(_vm.InfoData, "LicenseKey", $event.target.value);
                  }
                }
              })];
            }
          }], null, true)
        }), errors[0] ? _c('span', {
          staticClass: "invalid-feedback d-block",
          attrs: {
            "name": "LicenseKey"
          }
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()], 1)]), _c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', [_vm._v(_vm._s(_vm.$t("LicenseType")) + ":")]), _c('span', {
          staticClass: "text-danger"
        }), _c('Field', {
          staticClass: "w-100",
          attrs: {
            "rules": {
              'required': false
            },
            "name": "LicenseType"
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
                  value: _vm.InfoData.LicenseType,
                  expression: "InfoData.LicenseType"
                }],
                class: {
                  'form-control': true,
                  'is-invalid': errors[0]
                },
                attrs: {
                  "type": "text",
                  "placeholder": "Enter License Type",
                  "maxlength": "500",
                  "name": "LicenseType",
                  "autocomplete": "off"
                },
                domProps: {
                  "value": _vm.InfoData.LicenseType
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.$set(_vm.InfoData, "LicenseType", $event.target.value);
                  }
                }
              })];
            }
          }], null, true)
        }), errors[0] ? _c('span', {
          staticClass: "invalid-feedback d-block",
          attrs: {
            "name": "LicenseType"
          }
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()], 1)]), _c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', [_vm._v(_vm._s(_vm.$t("Version")) + ":")]), _c('span', {
          staticClass: "text-danger"
        }), _c('Field', {
          staticClass: "w-100",
          attrs: {
            "rules": {
              'required': false
            },
            "name": "Version"
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
                  value: _vm.InfoData.Version,
                  expression: "InfoData.Version"
                }],
                class: {
                  'form-control': true,
                  'is-invalid': errors[0]
                },
                attrs: {
                  "type": "text",
                  "placeholder": "Enter Version",
                  "maxlength": "500",
                  "name": "Version",
                  "autocomplete": "off"
                },
                domProps: {
                  "value": _vm.InfoData.Version
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.$set(_vm.InfoData, "Version", $event.target.value);
                  }
                }
              })];
            }
          }], null, true)
        }), errors[0] ? _c('span', {
          staticClass: "invalid-feedback d-block",
          attrs: {
            "name": "Version"
          }
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()], 1)]), _c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', [_vm._v(_vm._s(_vm.$t("InstalledMachine")) + ":")]), _c('span', {
          staticClass: "text-danger"
        }), _c('Field', {
          staticClass: "w-100",
          attrs: {
            "rules": {
              'required': false
            },
            "name": "InstalledMachine"
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
                  value: _vm.InfoData.InstalledMachine,
                  expression: "InfoData.InstalledMachine"
                }],
                class: {
                  'form-control': true,
                  'is-invalid': errors[0]
                },
                attrs: {
                  "type": "text",
                  "placeholder": "Enter Installed Machine",
                  "maxlength": "500",
                  "name": "InstalledMachine",
                  "autocomplete": "off"
                },
                domProps: {
                  "value": _vm.InfoData.InstalledMachine
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.$set(_vm.InfoData, "InstalledMachine", $event.target.value);
                  }
                }
              })];
            }
          }], null, true)
        }), errors[0] ? _c('span', {
          staticClass: "invalid-feedback d-block",
          attrs: {
            "name": "InstalledMachine"
          }
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()], 1)]), _c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', [_vm._v(" " + _vm._s(_vm.$t("InstalledPath")) + ":")]), _c('span', {
          staticClass: "text-danger"
        }), _c('Field', {
          staticClass: "w-100",
          attrs: {
            "rules": {
              'required': false
            },
            "name": "InstalledPath"
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
                  value: _vm.InfoData.InstalledPath,
                  expression: "InfoData.InstalledPath"
                }],
                class: {
                  'form-control': true,
                  'is-invalid': errors[0]
                },
                attrs: {
                  "type": "text",
                  "placeholder": "Enter Installed Path",
                  "maxlength": "500",
                  "name": "InstalledPath",
                  "autocomplete": "off"
                },
                domProps: {
                  "value": _vm.InfoData.InstalledPath
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.$set(_vm.InfoData, "InstalledPath", $event.target.value);
                  }
                }
              })];
            }
          }], null, true)
        }), errors[0] ? _c('span', {
          staticClass: "invalid-feedback d-block",
          attrs: {
            "name": "InstalledPath"
          }
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()], 1)]), _c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"
        }, [_c('div', {
          staticClass: "input-group"
        }, [_c('label', [_vm._v(_vm._s(_vm.$t("NextAuditDate")) + ":")]), _c('span', {
          staticClass: "text-danger"
        }), _c('v-date-picker', {
          staticClass: "timedate input-group",
          attrs: {
            "popover": _vm.popover,
            "name": _vm.LastAuditDate,
            "minute-increment": 5
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              inputValue,
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
                  "click": function ($event) {
                    return togglePopover();
                  }
                }
              }, _vm.inputEvents)), _c('div', {
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
          }], null, true),
          model: {
            value: _vm.InfoData.LastAuditDate,
            callback: function ($$v) {
              _vm.$set(_vm.InfoData, "LastAuditDate", $$v);
            },
            expression: "InfoData.LastAuditDate"
          }
        })], 1)]), _c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"
        }, [_c('div', {
          staticClass: "input-group"
        }, [_c('label', [_vm._v(_vm._s(_vm.$t("CalibrationDate")) + ":")]), _c('span', {
          staticClass: "text-danger"
        }), _c('v-date-picker', {
          staticClass: "timedate input-group",
          attrs: {
            "popover": _vm.popover,
            "name": _vm.CalibrationDate,
            "minute-increment": 5
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              inputValue,
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
                  "click": function ($event) {
                    return togglePopover();
                  }
                }
              }, _vm.inputEvents)), _c('div', {
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
          }], null, true),
          model: {
            value: _vm.InfoData.CalibrationDate,
            callback: function ($$v) {
              _vm.$set(_vm.InfoData, "CalibrationDate", $$v);
            },
            expression: "InfoData.CalibrationDate"
          }
        })], 1)]), _c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"
        }, [_c('div', {
          staticClass: "input-group"
        }, [_c('label', [_vm._v(_vm._s(_vm.$t("ImageDate")) + ":")]), _c('v-date-picker', {
          staticClass: "timedate input-group",
          attrs: {
            "popover": _vm.popover,
            "name": _vm.ImageDate,
            "minute-increment": 5
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              inputValue,
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
                  "click": function ($event) {
                    return togglePopover();
                  }
                }
              }, _vm.inputEvents)), _c('div', {
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
          }], null, true),
          model: {
            value: _vm.InfoData.ImageDate,
            callback: function ($$v) {
              _vm.$set(_vm.InfoData, "ImageDate", $$v);
            },
            expression: "InfoData.ImageDate"
          }
        })], 1)]), _c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', [_vm._v(_vm._s(_vm.$t("ModelName")) + ":")]), _c('span', {
          staticClass: "text-danger"
        }), _c('Field', {
          staticClass: "w-100",
          attrs: {
            "rules": {
              'required': false
            },
            "name": "ModelName"
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
                  value: _vm.InfoData.ModelName,
                  expression: "InfoData.ModelName"
                }],
                class: {
                  'form-control': true,
                  'is-invalid': errors[0]
                },
                attrs: {
                  "type": "text",
                  "placeholder": "Enter Model Name",
                  "maxlength": "500",
                  "name": "ModelName",
                  "autocomplete": "off"
                },
                domProps: {
                  "value": _vm.InfoData.ModelName
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.$set(_vm.InfoData, "ModelName", $event.target.value);
                  }
                }
              })];
            }
          }], null, true)
        }), errors[0] ? _c('span', {
          staticClass: "invalid-feedback d-block",
          attrs: {
            "name": "ModelName"
          }
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()], 1)]), _c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', [_vm._v(_vm._s(_vm.$t("ModelNumber")) + ":")]), _c('span', {
          staticClass: "text-danger"
        }), _c('Field', {
          staticClass: "w-100",
          attrs: {
            "rules": {
              'required': false
            },
            "name": "ModelNumber"
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
                  value: _vm.InfoData.ModelNumber,
                  expression: "InfoData.ModelNumber"
                }],
                class: {
                  'form-control': true,
                  'is-invalid': errors[0]
                },
                attrs: {
                  "type": "text",
                  "placeholder": "Enter Model Number",
                  "maxlength": "500",
                  "name": "ModelNumber",
                  "autocomplete": "off"
                },
                domProps: {
                  "value": _vm.InfoData.ModelNumber
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.$set(_vm.InfoData, "ModelNumber", $event.target.value);
                  }
                }
              })];
            }
          }], null, true)
        }), errors[0] ? _c('span', {
          staticClass: "invalid-feedback d-block",
          attrs: {
            "name": "ModelNumber"
          }
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()], 1)]), _c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', [_vm._v(_vm._s(_vm.$t("Brand")) + ":")]), _c('span', {
          staticClass: "text-danger"
        }), _c('Field', {
          staticClass: "w-100",
          attrs: {
            "rules": {
              'required': false
            },
            "name": "Brand"
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
                  value: _vm.InfoData.Brand,
                  expression: "InfoData.Brand"
                }],
                class: {
                  'form-control': true,
                  'is-invalid': errors[0]
                },
                attrs: {
                  "type": "text",
                  "placeholder": "Enter Brand",
                  "maxlength": "500",
                  "name": "Brand",
                  "autocomplete": "off"
                },
                domProps: {
                  "value": _vm.InfoData.Brand
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.$set(_vm.InfoData, "Brand", $event.target.value);
                  }
                }
              })];
            }
          }], null, true)
        }), errors[0] ? _c('span', {
          staticClass: "invalid-feedback d-block",
          attrs: {
            "name": "Brand"
          }
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()], 1)]), _c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', [_vm._v(_vm._s(_vm.$t("BillNumber")) + ":")]), _c('span', {
          staticClass: "text-danger"
        }), _c('Field', {
          staticClass: "w-100",
          attrs: {
            "rules": {
              'required': false
            },
            "name": "BillNumber"
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
                  value: _vm.InfoData.BillNumber,
                  expression: "InfoData.BillNumber"
                }],
                class: {
                  'form-control': true,
                  'is-invalid': errors[0]
                },
                attrs: {
                  "type": "text",
                  "placeholder": "Enter Bill Number",
                  "maxlength": "500",
                  "name": "BillNumber",
                  "autocomplete": "off"
                },
                domProps: {
                  "value": _vm.InfoData.BillNumber
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.$set(_vm.InfoData, "BillNumber", $event.target.value);
                  }
                }
              })];
            }
          }], null, true)
        }), errors[0] ? _c('span', {
          staticClass: "invalid-feedback d-block",
          attrs: {
            "name": "BillNumber"
          }
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()], 1)]), _c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', [_vm._v(_vm._s(_vm.$t("ImeiNumber")) + ":")]), _c('span', {
          staticClass: "text-danger"
        }), _c('Field', {
          staticClass: "w-100",
          attrs: {
            "rules": {
              'required': false
            },
            "name": "ImeiNumber"
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
                  value: _vm.InfoData.ImeiNumber,
                  expression: "InfoData.ImeiNumber"
                }],
                class: {
                  'form-control': true,
                  'is-invalid': errors[0]
                },
                attrs: {
                  "type": "text",
                  "placeholder": "Enter Imei Number",
                  "maxlength": "500",
                  "name": "ImeiNumber",
                  "autocomplete": "off"
                },
                domProps: {
                  "value": _vm.InfoData.ImeiNumber
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.$set(_vm.InfoData, "ImeiNumber", $event.target.value);
                  }
                }
              })];
            }
          }], null, true)
        }), errors[0] ? _c('span', {
          staticClass: "invalid-feedback d-block",
          attrs: {
            "name": "ImeiNumber"
          }
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()], 1)]), _c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', [_vm._v(_vm._s(_vm.$t("SimNumber")) + ":")]), _c('span', {
          staticClass: "text-danger"
        }), _c('Field', {
          staticClass: "w-100",
          attrs: {
            "rules": {
              'required': false
            },
            "name": "SimNumber"
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
                  value: _vm.InfoData.SimNumber,
                  expression: "InfoData.SimNumber"
                }],
                class: {
                  'form-control': true,
                  'is-invalid': errors[0]
                },
                attrs: {
                  "type": "text",
                  "placeholder": "Enter Sim Number",
                  "maxlength": "500",
                  "name": "SimNumber",
                  "autocomplete": "off"
                },
                domProps: {
                  "value": _vm.InfoData.SimNumber
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.$set(_vm.InfoData, "SimNumber", $event.target.value);
                  }
                }
              })];
            }
          }], null, true)
        }), errors[0] ? _c('span', {
          staticClass: "invalid-feedback d-block",
          attrs: {
            "name": "SimNumber"
          }
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()], 1)]), _c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', [_vm._v(_vm._s(_vm.$t("PhoneNumber")) + ":")]), _c('span', {
          staticClass: "text-danger"
        }), _c('Field', {
          staticClass: "w-100",
          attrs: {
            "rules": {
              'required': false
            },
            "name": "phonenumber"
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
                  value: _vm.InfoData.phonenumber,
                  expression: "InfoData.phonenumber"
                }],
                class: {
                  'form-control': true,
                  'is-invalid': errors[0]
                },
                attrs: {
                  "type": "text",
                  "placeholder": "Enter phone number",
                  "maxlength": "500",
                  "name": "phonenumber",
                  "autocomplete": "off"
                },
                domProps: {
                  "value": _vm.InfoData.phonenumber
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.$set(_vm.InfoData, "phonenumber", $event.target.value);
                  }
                }
              })];
            }
          }], null, true)
        }), errors[0] ? _c('span', {
          staticClass: "invalid-feedback d-block",
          attrs: {
            "name": "phonenumber"
          }
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()], 1)]), _c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', [_vm._v(_vm._s(_vm.$t("mobileironredsetup")) + ":")]), _c('span', {
          staticClass: "text-danger"
        }), _c('Field', {
          staticClass: "w-100",
          attrs: {
            "rules": {
              'required': false
            },
            "name": "mobileironredsetup"
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
                  value: _vm.InfoData.mobileironredsetup,
                  expression: "InfoData.mobileironredsetup"
                }],
                class: {
                  'form-control': true,
                  'is-invalid': errors[0]
                },
                attrs: {
                  "type": "text",
                  "placeholder": "Enter mobile iron red setup",
                  "maxlength": "500",
                  "name": "mobileironredsetup",
                  "autocomplete": "off"
                },
                domProps: {
                  "value": _vm.InfoData.mobileironredsetup
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.$set(_vm.InfoData, "mobileironredsetup", $event.target.value);
                  }
                }
              })];
            }
          }], null, true)
        }), errors[0] ? _c('span', {
          staticClass: "invalid-feedback d-block",
          attrs: {
            "name": "mobileironredsetup"
          }
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', [_vm._v(_vm._s(_vm.$t("accessoryon")) + ":")]), _c('span', {
          staticClass: "text-danger"
        }), _c('Field', {
          staticClass: "w-100",
          attrs: {
            "rules": {
              'required': false
            },
            "name": "accessoryon"
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
                  value: _vm.InfoData.accessoryon,
                  expression: "InfoData.accessoryon"
                }],
                class: {
                  'form-control': true,
                  'is-invalid': errors[0]
                },
                attrs: {
                  "type": "text",
                  "placeholder": "Enter accessory on",
                  "maxlength": "500",
                  "name": "accessoryon",
                  "autocomplete": "off"
                },
                domProps: {
                  "value": _vm.InfoData.accessoryon
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.$set(_vm.InfoData, "accessoryon", $event.target.value);
                  }
                }
              })];
            }
          }], null, true)
        }), errors[0] ? _c('span', {
          staticClass: "invalid-feedback d-block",
          attrs: {
            "name": "accessoryon"
          }
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()], 1)]), _c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', [_vm._v(_vm._s(_vm.$t("machinename")) + ":")]), _c('span', {
          staticClass: "text-danger"
        }), _c('Field', {
          staticClass: "w-100",
          attrs: {
            "rules": {
              'required': false
            },
            "name": "machinename"
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
                  value: _vm.InfoData.machinename,
                  expression: "InfoData.machinename"
                }],
                class: {
                  'form-control': true,
                  'is-invalid': errors[0]
                },
                attrs: {
                  "type": "text",
                  "placeholder": "Enter machine name",
                  "maxlength": "500",
                  "name": "machinename",
                  "autocomplete": "off"
                },
                domProps: {
                  "value": _vm.InfoData.machinename
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.$set(_vm.InfoData, "machinename", $event.target.value);
                  }
                }
              })];
            }
          }], null, true)
        }), errors[0] ? _c('span', {
          staticClass: "invalid-feedback d-block",
          attrs: {
            "name": "machinename"
          }
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()], 1)]), _c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', [_vm._v(_vm._s(_vm.$t("divisionname")) + ":")]), _c('span', {
          staticClass: "text-danger"
        }), _c('Field', {
          staticClass: "w-100",
          attrs: {
            "rules": {
              'required': false
            },
            "name": "divisionname"
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
                  value: _vm.InfoData.divisionname,
                  expression: "InfoData.divisionname"
                }],
                class: {
                  'form-control': true,
                  'is-invalid': errors[0]
                },
                attrs: {
                  "type": "text",
                  "placeholder": "Enter division name",
                  "maxlength": "500",
                  "name": "divisionname",
                  "autocomplete": "off"
                },
                domProps: {
                  "value": _vm.InfoData.divisionname
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.$set(_vm.InfoData, "divisionname", $event.target.value);
                  }
                }
              })];
            }
          }], null, true)
        }), errors[0] ? _c('span', {
          staticClass: "invalid-feedback d-block",
          attrs: {
            "name": "divisionname"
          }
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()], 1)]), _c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"
        }, [true ? _c('div', {
          staticClass: "form-group"
        }, [_c('label', {
          attrs: {
            "for": "Subject"
          }
        }, [_vm._v(_vm._s(_vm.$t("Status")) + ":"), _c('span', {
          staticClass: "text-danger"
        }, [_vm._v("*")])]), _c('select', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.InfoData.StatusId,
            expression: "InfoData.StatusId"
          }],
          class: {
            'form-control': true
          },
          attrs: {
            "name": "Status"
          },
          on: {
            "change": function ($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.$set(_vm.InfoData, "StatusId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
            }
          }
        }, [_c('option', {
          attrs: {
            "value": ""
          }
        }, [_vm._v("Select")]), _vm._l(_vm.StatusData, function (item, index) {
          return _c('option', {
            key: index,
            domProps: {
              "value": item.STATUS_ID
            }
          }, [_vm._v(_vm._s(item.STATUS))]);
        })], 2)]) : undefined]), !_vm.choice ? _c('div', {
          staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left",
          attrs: {
            "id": "fileName"
          }
        }, [_c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left pl-0"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', [_vm._v(_vm._s(_vm.$t("Attachment")) + ":")]), _c('span', {
          staticClass: "text-danger"
        }), _c('Field', {
          staticClass: "w-100",
          attrs: {
            "rules": {
              'required': false
            },
            "name": "Attachment"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              errors
            }) {
              return [_c('input', {
                class: {
                  'form-control': true,
                  'is-invalid': errors[0]
                },
                attrs: {
                  "type": "file",
                  "name": "Attachment"
                },
                on: {
                  "change": _vm.handleFileUpload
                }
              })];
            }
          }], null, true)
        }), errors[0] ? _c('span', {
          staticClass: "invalid-feedback d-block",
          attrs: {
            "name": "Attachment"
          }
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()], 1)])]) : _vm._e(), _c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', [_vm._v(_vm._s(_vm.$t("Barcode")) + ":")]), _c('span', {
          staticClass: "text-danger"
        }), _c('div', {
          staticClass: "form-group"
        }, [_c('img', {
          staticClass: "col-sm-12 col-md-10 col-lg-10 col-xl-10 p-0",
          attrs: {
            "src": _vm.InfoData.BarcodeImageUrl
          }
        })])])]), _c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', [_vm._v(_vm._s(_vm.$t("laptopcarrying_bag")) + ":")]), _c('span', {
          staticClass: "text-danger"
        }), _c('div', {
          staticClass: "form-group"
        }, [_c('label', {
          staticClass: "switch"
        }, [_c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.InfoData.laptopcarrying_bag,
            expression: "InfoData.laptopcarrying_bag"
          }],
          staticClass: "form-check-input rdoticketfor custom-control-input dynamic",
          attrs: {
            "id": "isCheck",
            "type": "checkbox"
          },
          domProps: {
            "checked": Array.isArray(_vm.InfoData.laptopcarrying_bag) ? _vm._i(_vm.InfoData.laptopcarrying_bag, null) > -1 : _vm.InfoData.laptopcarrying_bag
          },
          on: {
            "click": function ($event) {
              _vm.userLoggedIn2 = !_vm.userLoggedIn2;
            },
            "change": function ($event) {
              var $$a = _vm.InfoData.laptopcarrying_bag,
                $$el = $event.target,
                $$c = $$el.checked ? true : false;
              if (Array.isArray($$a)) {
                var $$v = null,
                  $$i = _vm._i($$a, $$v);
                if ($$el.checked) {
                  $$i < 0 && _vm.$set(_vm.InfoData, "laptopcarrying_bag", $$a.concat([$$v]));
                } else {
                  $$i > -1 && _vm.$set(_vm.InfoData, "laptopcarrying_bag", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
                }
              } else {
                _vm.$set(_vm.InfoData, "laptopcarrying_bag", $$c);
              }
            }
          }
        }), _c('span', {
          staticClass: "slider round"
        }, [_c('span', {
          staticClass: "slider-yes"
        }, [_vm._v("Yes")]), _c('span', {
          staticClass: "slider-no"
        }, [_vm._v("No")])])])])])]), _c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', [_vm._v(_vm._s(_vm.$t("GPSTracking")) + ":")]), _c('span', {
          staticClass: "text-danger"
        }), _c('Field', {
          staticClass: "w-100",
          attrs: {
            "rules": {
              'required': false
            },
            "name": "GPS_Tracking"
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
                  value: _vm.InfoData.GPS,
                  expression: "InfoData.GPS"
                }],
                class: {
                  'form-control': true,
                  'is-invalid': errors[0]
                },
                attrs: {
                  "type": "text",
                  "placeholder": "Enter GPS",
                  "maxlength": "500",
                  "name": "GPS_Tracking",
                  "autocomplete": "off"
                },
                domProps: {
                  "value": _vm.InfoData.GPS
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.$set(_vm.InfoData, "GPS", $event.target.value);
                  }
                }
              })];
            }
          }], null, true)
        }), errors[0] ? _c('span', {
          staticClass: "invalid-feedback d-block",
          attrs: {
            "name": "GPS_Tracking"
          }
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()], 1)]), _c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', [_vm._v(_vm._s(_vm.$t("RFIDTags")) + ":")]), _c('span', {
          staticClass: "text-danger"
        }), _c('Field', {
          staticClass: "w-100",
          attrs: {
            "rules": {
              'required': false
            },
            "name": "RFID"
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
                  value: _vm.InfoData.RFID,
                  expression: "InfoData.RFID"
                }],
                class: {
                  'form-control': true,
                  'is-invalid': errors[0]
                },
                attrs: {
                  "type": "text",
                  "placeholder": "Enter RFID",
                  "maxlength": "500",
                  "name": "RFID",
                  "autocomplete": "off"
                },
                domProps: {
                  "value": _vm.InfoData.RFID
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.$set(_vm.InfoData, "RFID", $event.target.value);
                  }
                }
              })];
            }
          }], null, true)
        }), errors[0] ? _c('span', {
          staticClass: "invalid-feedback d-block",
          attrs: {
            "name": "RFIDTags"
          }
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()], 1)])]), _c('div', {
          staticClass: "col-12"
        }, [_c('div', {
          staticClass: "row flex-row-reverse"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('div', {
          staticClass: "search-btm-btn"
        }, [_c('a', {
          staticClass: "btn btn-success text-white mr-2",
          staticStyle: {
            "cursor": "pointer"
          },
          attrs: {
            "title": "Save"
          },
          on: {
            "click": function ($event) {
              return _vm.SaveRelatedInfo();
            }
          }
        }, [_c('i', {
          staticClass: "fa fa-save pr-2"
        }), _vm._v(_vm._s(_vm.$t("Save")))]), _c('a', {
          staticClass: "btn btn-danger text-white mr-3",
          staticStyle: {
            "cursor": "pointer"
          },
          attrs: {
            "title": "Cancel"
          },
          on: {
            "click": function ($event) {
              return _vm.Cancel($event);
            }
          }
        }, [_c('i', {
          staticClass: "fa fa-close pr-2"
        }), _vm._v(_vm._s(_vm.$t("Cancel")))])])])])])])];
      }
    }])
  })], 1)])])])])], 1)]);
};
var RelatedInformationPopupvue_type_template_id_bdbfe5b0_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Modal/RelatedInformationPopup.vue?vue&type=template&id=bdbfe5b0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/RelatedInformationPopup.vue?vue&type=script&lang=js&

/* harmony default export */ var RelatedInformationPopupvue_type_script_lang_js_ = ({
  props: {
    RelatedInfoId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      Remarks: '',
      StatusValue: '',
      InfoData: [],
      StatusData: [],
      choice: false,
      selectedFile: [],
      OptionNames: '',
      isLoading: false,
      allProductConfigData: [],
      FileTypeAllowed: '',
      FileSizeAllowed: '',
      // FormSchema: [
      //           { layoutType: "four",
      //         Data: [                                
      //             {
      //                 astype: "TextField",
      //                 label: this.$t('UniqueName'),
      //                 name: "UniqueName",
      //                 value: "",
      //                 placeholder: "",
      //                 validationRules: { "required": false, max: 250 },                            
      //             },
      //             {
      //                 astype: "TextField",
      //                 label: this.$t('WarrantyDuration'),
      //                 name: "WarrantyDuration",
      //                 value: "",
      //                 placeholder: "",
      //                 validationRules: { "required": false, max: 250 },                            
      //             },
      //             {
      //                 astype: "DateField",
      //                 label: this.$t('AcquisitionDate'),
      //                 name: "AcquisitionDate",
      //                 value: '',
      //                 placeholder: "M/D/YYYY",
      //                 validationRules: "required",
      //                 config: {
      //                     format: "MM/DD/YYYY"                                
      //                 }
      //             },                        
      //             {
      //                 astype: "DateField",
      //                 label: this.$t('WarrantyExpirationDate'),
      //                 name: "WarrantyExpirationDate",
      //                 value: '',
      //                 placeholder: "M/D/YYYY",
      //                 validationRules: "required",
      //                 config: {
      //                     format: "MM/DD/YYYY"                                
      //                 }
      //             },
      //             {
      //                 astype: "TextField",
      //                 label: this.$t('Cost'),
      //                 name: "Cost",
      //                 value: "",
      //                 placeholder: "",                            
      //                 validationRules: { "required": false, max: 250 }, 
      //             },
      //             {
      //                 astype: "TextField",
      //                 label: this.$t('SerialNumber'),
      //                 name: "SerialNumber",
      //                 value: "",
      //                 placeholder: "",
      //                 validationRules: { "required": false, max: 250 }, 
      //             },
      //             {
      //                 astype: "TextField",
      //                 label: "License Key",
      //                 name: "LicenseKey",
      //                 value: "",
      //                 placeholder: "",
      //                 validationRules: { "required": false, max: 250 }
      //             },
      //             {
      //                 astype: "TextField",
      //                 label: "License Type",
      //                 name: "LicenseType",
      //                 value: "",
      //                 placeholder: "",
      //                 validationRules: { "required": false, max: 250 }
      //             },
      //             {
      //                 astype: "NumericField",
      //                 label: this.$t('Version'),
      //                 name: "Version",
      //                 value: "",
      //                 placeholder: "",
      //                 validationRules: { "required": false, max: 250 }
      //                 // config: {
      //                 //     onkeypress: this.ExpenseAmount
      //                 // }
      //             },
      //             {
      //                 astype: "TextField",
      //                 label: this.$t('InstalledMachine'),
      //                 name: "InstalledMachine",
      //                 value: "",
      //                 placeholder: "",
      //                 validationRules: { "required": false, max: 250 }
      //             },
      //             {
      //                 astype: "TextField",
      //                 label: this.$t('InstalledPath'),
      //                 name: "InstalledPath",
      //                 value: "",
      //                 placeholder: "",
      //                 validationRules: { "required": false, max: 250 }
      //             },                        
      //             {
      //                 astype: "DateField",
      //                 label: this.$t('NextAuditDate'),
      //                 name: "NextAuditDate",
      //                 value: "",
      //                 placeholder: "M/D/YYYY",
      //                 validationRules: "required",
      //                 config: {
      //                     format: "MM/DD/YYYY"                                
      //                 }
      //             },
      //             {
      //                 astype: "DateField",
      //                 label: this.$t('CalibrationDate'),
      //                 name: "CalibrationDate",
      //                 value: '',
      //                 placeholder: "M/D/YYYY",
      //                 validationRules: "required",
      //                 config: {
      //                     format: "MM/DD/YYYY"                                
      //                 }
      //             },
      //             {
      //                 astype: "DateField",
      //                 label: this.$t('ImageDate'),
      //                 name: "ImageDate",
      //                 value: '',
      //                 placeholder: "M/D/YYYY",
      //                 validationRules: "required",
      //                 config: {
      //                     format: "MM/DD/YYYY"                                
      //                 }
      //             },
      //             {
      //                 astype: "TextField",
      //                 label: this.$t('ModelName'),
      //                 name: "ModelName",
      //                 value: "",
      //                 placeholder: "",
      //                 validationRules: { "required": false, max: 250 }
      //             },
      //             {
      //                 astype: "NumericField",
      //                 label: this.$t('ModelNumber'),
      //                 name: "ModelNumber",
      //                 value: "",
      //                 placeholder: "",
      //                 validationRules: { "required": false, max: 250 }
      //             },
      //             {
      //                 astype: "TextField",
      //                 label: this.$t('Brand'),
      //                 name: "Brand",
      //                 value: "",
      //                 placeholder: "",
      //                 validationRules: { "required": false, max: 250 }
      //             },
      //             {
      //                 astype: "NumericField",
      //                 label: this.$t('BillNumber'),
      //                 name: "BillNumber",
      //                 value: "",
      //                 placeholder: "",
      //                 validationRules: { "required": false, max: 250 }
      //             },
      //             {
      //                 astype: "NumericField",
      //                 label: this.$t('ImeiNumber'),
      //                 name: "ImeiNumber",
      //                 value: "",
      //                 placeholder: "",
      //                 validationRules: { "required": false, max: 250 }
      //             },
      //             {
      //                 astype: "NumericField",
      //                 label: this.$t('SimNumber'),
      //                 name: "SimNumber",
      //                 value: "",
      //                 placeholder: "",
      //                 validationRules: { "required": false, max: 250 }
      //             },
      //             {
      //                 astype: "NumericField",
      //                 label: this.$t('phonenumber'),
      //                 name: "phonenumber",
      //                 value: "",
      //                 placeholder: "",
      //                 validationRules: { "required": false, max: 250 }
      //             },
      //             {
      //                 astype: "TextField",
      //                 label: this.$t('mobileironredsetup'),
      //                 name: "mobileironredsetup",
      //                 value: "",
      //                 placeholder: "",
      //                 validationRules: { "required": false, max: 250 }
      //             },
      //             {
      //                 astype: "TextField",
      //                 label: this.$t('accessoryon'),
      //                 name: "accessoryon",
      //                 value: "",
      //                 placeholder: "",
      //                 validationRules: { "required": false, max: 250 }
      //             },
      //             {
      //                 astype: "TextField",
      //                 label: this.$t('machinename'),
      //                 name: "machinename",
      //                 value: "",
      //                 placeholder: "",
      //                 validationRules: { "required": false, max: 250 }
      //             },
      //             {
      //                 astype: "TextField",
      //                 label: this.$t('divisionname'),
      //                 name: "divisionname",
      //                 value: "",
      //                 placeholder: "",
      //                 validationRules: { "required": false, max: 250 }
      //             },
      //             {
      //                 astype: "TextField",
      //                 label: this.$t('productDDLData'),
      //                 name: "productDDLData",
      //                 value: "",
      //                 placeholder: "",
      //                 validationRules: { "required": false, max: 250 }
      //             },                     

      //             {
      //                 astype: "FileField",                        
      //                 showLabel:"Attachment",
      //                 name: "Attachment",
      //                 visibility: choice,
      //                 value: "",
      //                 placeholder: "",
      //                 validationRules: "",
      //                 FieldIndex: 0,
      //                 config: {
      //                     onChange: this.setFile,
      //                     showAddIcon: true,
      //                     onAddButtonClick: this.AddFileMore
      //                 },
      //             },
      //             {
      //                 astype: "TextField",
      //                 label: this.$t('GPSTracking'),
      //                 name: "GPSTracking",
      //                 value: "",
      //                 placeholder: "",
      //                 validationRules: { "required": false, max: 250 }
      //             },
      //             {
      //                 astype: "TextField",
      //                 label: this.$t('RFIDTags'),
      //                 name: "RFIDTags",
      //                 value: "",
      //                 placeholder: "",
      //                 validationRules: { "required": false, max: 250 }
      //             },

      //             // {
      //             //     astype: "SelectField",
      //             //     label: this.$t('Tag'),
      //             //     name: "ExpenseTag",
      //             //     value: "",
      //             //     placeholder: "",
      //             //     config: {
      //             //         options: [],
      //             //         showAddIcon: true,
      //             //         onAddButtonClick: this.OpenPopup
      //             //     },
      //             //     validationRules: "",
      //             // },

      //         ],
      //     }],
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
    this.FetchData();
    this.GetStatusList();
    this.GetProductConfigData();
  },
  methods: {
    GetProductConfigData: function () {
      var vm = this;
      var myObj = `moduleId=4118`;
      DataService["a" /* default */].GetConfigurationData(myObj).then(function (response) {
        vm.allProductConfigData = response.data.StorageKeys;
        var test = vm.allProductConfigData[3].CORE_CONFIG_VALUE.split(',');
        console.log(test);
        vm.FileTypeAllowed = vm.allProductConfigData[3].CORE_CONFIG_VALUE;
        vm.FileSizeAllowed = vm.allProductConfigData[0].CORE_CONFIG_VALUE;
      });
    },
    FetchData() {
      debugger;
      var vm = this;
      vm.isLoading = true;
      var param = `relatedInfoId=${vm.RelatedInfoId}`;
      DataService["a" /* default */].GetRelatedInfo(param).then(response => {
        if (response.data != null) {
          vm.InfoData = response.data.RelatedInformation;
          vm.choice = response.data.FileUploaded;
          vm.isLoading = false;

          //  (vm.FormSchema)[0].Data[1].value=vm.InfoData.WarrantyDuration;                 
          //  (vm.FormSchema)[0].Data[2].value=vm.InfoData.AcquisitionDate;                 
          //  (vm.FormSchema)[0].Data[3].value=vm.InfoData.WarrantyExpirationDate;                 
          //  (vm.FormSchema)[0].Data[4].value=vm.InfoData.Cost;                 
          //  (vm.FormSchema)[0].Data[5].value=vm.InfoData.SerialNumber;                 
          //  (vm.FormSchema)[0].Data[6].value=vm.InfoData.LicenseKey;                 
          //  (vm.FormSchema)[0].Data[7].value=vm.InfoData.LicenseType;                 
          //  (vm.FormSchema)[0].Data[8].value=vm.InfoData.Version;                 
          //  (vm.FormSchema)[0].Data[9].value=vm.InfoData.InstalledMachine;                 
          //  (vm.FormSchema)[0].Data[10].value=vm.InfoData.InstalledPath;                 
          //  (vm.FormSchema)[0].Data[11].value=vm.InfoData.LastAuditDate;                 
          //  (vm.FormSchema)[0].Data[12].value=vm.InfoData.CalibrationDate;                 
          //  (vm.FormSchema)[0].Data[13].value=vm.InfoData.ImageDate;                 
          //  (vm.FormSchema)[0].Data[14].value=vm.InfoData.ModelName;                 
          //  (vm.FormSchema)[0].Data[15].value=vm.InfoData.ModelNumber;                 
          //  (vm.FormSchema)[0].Data[16].value=vm.InfoData.Brand;                 
          //  (vm.FormSchema)[0].Data[17].value=vm.InfoData.BillNumber;                 
          //  (vm.FormSchema)[0].Data[18].value=vm.InfoData.ImeiNumber;                 
          //  (vm.FormSchema)[0].Data[19].value=vm.InfoData.SimNumber;                 
          //  (vm.FormSchema)[0].Data[20].value=vm.InfoData.phonenumber;                 
          //  (vm.FormSchema)[0].Data[21].value=vm.InfoData.mobileironredsetup;                 
          //  (vm.FormSchema)[0].Data[22].value=vm.InfoData.accessoryon;                 
          //  (vm.FormSchema)[0].Data[23].value=vm.InfoData.machinename;                 
          //  (vm.FormSchema)[0].Data[24].value=vm.InfoData.divisionname;                 
          //  (vm.FormSchema)[0].Data[25].value=vm.InfoData.productDDLData;                 
          //  (vm.FormSchema)[0].Data[26].value=vm.InfoData.Attachment;                 
          //  (vm.FormSchema)[0].Data[27].value=vm.InfoData.GPS_Tracking;                 
          //  (vm.FormSchema)[0].Data[28].value=vm.InfoData.RFIDTags;                 
        } else {
          vm.InfoData = [];
          vm.isLoading = false;
        }
      });
    },
    GetStatusList() {
      var vm = this;
      vm.isLoading = true;
      var param = `statusType=AssetManagement`;
      DataService["a" /* default */].GetStatusList(param).then(response => {
        vm.StatusData = JSON.parse(response.data).filter(x => x.STATUS === 'Active' || x.STATUS === 'Inactive');
      });
    },
    SaveRelatedInfo: function () {
      var vm = this;
      vm.isLoading = true;
      var formData = new FormData();
      // vm.selectedFile= vm.selectedFile==null ? null :vm.selectedFile;
      formData.append("postString", JSON.stringify(vm.InfoData));
      formData.append("Files", vm.selectedFile.length == 0 ? 0 : vm.selectedFile);
      DataService["a" /* default */].SaveRelatedInfo(formData).then(response => {
        if (response.data != null) {
          if (response.data.error == '100') {
            vm.ShowAlert(vm.$t("RelatedInformationUpdate"), "success", vm.$t('Alert'));
            // vm.FetchData();
            // response.data.RelatedInformation=vm.InfoData
            vm.$parent.FetchData();
            vm.ClosePOPuP();
            vm.isLoading = false;
          } else if (response.data.error == '110') {
            vm.ShowAlert(vm.$t("AllowedFiles") + vm.FileTypeAllowed, "failure", true, vm.$t('Alert'));
            vm.isLoading = false;
          } else if (response.data.error == '121') {
            vm.ShowAlert(vm.$t("Storage Size Exceeded than Limit"), "failure", true, vm.$t('Alert'));
            vm.isLoading = false;
            this.ClosePopup();
          } else if (response.data.error == '99') {
            vm.ShowAlert(vm.$t("File Uploading Failed"), "failure", true, vm.$t('Alert'));
            vm.ClosePOPuP();
            vm.isLoading = false;
          } else {
            vm.ShowAlert(vm.$t("Unknown Error Occur"), "failure", true, vm.$t('Alert'));
            vm.ClosePOPuP();
            vm.isLoading = false;
          }
        }
      });
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        // Store the selected file in the Vue data property
        this.selectedFile = file;

        //console.log("Selected File:", this.selectedFile);
        // You can perform any additional logic or operations with the file here
      }
    },

    formatDate(dateString) {
      if (dateString) {
        const date = new Date(dateString);
        if (!isNaN(date.getTime())) {
          // Customize the date format using the appropriate format string
          const formatted = date.toLocaleDateString('en-US', {
            month: 'numeric',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
          });
          return formatted;
        }
      }
      return '';
    },
    formatDateString(value) {
      return value;
    },
    Cancel: function (item) {
      this.$emit('ClosePOPuP', item);
      vm.$parent.FetchData();
    },
    ClosePOPuP: function (item) {
      this.$emit('ClosePOPuP', item);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/RelatedInformationPopup.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_RelatedInformationPopupvue_type_script_lang_js_ = (RelatedInformationPopupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Modal/RelatedInformationPopup.vue





/* normalize component */

var RelatedInformationPopup_component = Object(componentNormalizer["a" /* default */])(
  Modal_RelatedInformationPopupvue_type_script_lang_js_,
  RelatedInformationPopupvue_type_template_id_bdbfe5b0_render,
  RelatedInformationPopupvue_type_template_id_bdbfe5b0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RelatedInformationPopup = (RelatedInformationPopup_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/UpdateBarCode.vue?vue&type=template&id=3ad7b972&
var UpdateBarCodevue_type_template_id_3ad7b972_render = function render() {
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
  }, [_vm._v(" Update Barcode: ")]), _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-original-title": "Close"
    },
    on: {
      "click": function ($event) {
        return _vm.ClosePOP($event);
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-times"
  })])]), _c('div', {
    staticClass: "modal-body"
  }, [_c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0"
  }, [_c('Form', {
    ref: "BarcodeUpdate",
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        valid,
        errors
      }) {
        return [_c('div', {
          staticClass: "row"
        }, [_c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', [_vm._v("Barcode:")]), _c('span', {
          staticClass: "text-danger"
        }), _c('Field', {
          staticClass: "w-100",
          attrs: {
            "rules": {
              'required': true
            },
            "name": "Barcode"
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
                  value: _vm.BarcodeArray[0].BarcodeNumber,
                  expression: "BarcodeArray[0].BarcodeNumber"
                }],
                class: {
                  'form-control': true,
                  'is-invalid': errors[0]
                },
                attrs: {
                  "type": "text",
                  "placeholder": "Enter Barcode",
                  "maxlength": "200",
                  "name": "Barcode",
                  "autocomplete": "off"
                },
                domProps: {
                  "value": _vm.BarcodeArray[0].BarcodeNumber
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.$set(_vm.BarcodeArray[0], "BarcodeNumber", $event.target.value);
                  }
                }
              })];
            }
          }], null, true)
        }), errors[0] ? _c('span', {
          staticClass: "invalid-feedback d-block",
          attrs: {
            "name": "Barcode"
          }
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()], 1)]), _c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', [_vm._v("Serial Number:")]), _c('span', {
          staticClass: "text-danger"
        }), _c('Field', {
          staticClass: "w-100",
          attrs: {
            "rules": {
              'required': false
            },
            "name": "Serial Number"
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
                  value: _vm.BarcodeArray[0].SerialNumber,
                  expression: "BarcodeArray[0].SerialNumber"
                }],
                class: {
                  'form-control': true,
                  'is-invalid': errors[0]
                },
                attrs: {
                  "type": "text",
                  "placeholder": "Enter Serial Number",
                  "maxlength": "200",
                  "name": "Serial Number",
                  "autocomplete": "off"
                },
                domProps: {
                  "value": _vm.BarcodeArray[0].SerialNumber
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.$set(_vm.BarcodeArray[0], "SerialNumber", $event.target.value);
                  }
                }
              })];
            }
          }], null, true)
        }), errors[0] ? _c('span', {
          staticClass: "invalid-feedback d-block",
          attrs: {
            "name": "Serial Number"
          }
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()], 1)]), _c('div', {
          staticClass: "col-sm-12 col-md-6 col-lg-6 col-xl-6 float-left d-none"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('label', [_vm._v("UniqueName:")]), _c('span', {
          staticClass: "text-danger"
        }), _c('Field', {
          staticClass: "w-100",
          attrs: {
            "rules": {
              'required': false
            },
            "name": "UniqueName"
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
                  value: _vm.BarcodeArray[0].UniqueName,
                  expression: "BarcodeArray[0].UniqueName"
                }],
                class: {
                  'form-control': true,
                  'is-invalid': errors[0]
                },
                attrs: {
                  "type": "text",
                  "placeholder": "Enter UniqueName",
                  "maxlength": "200",
                  "name": "UniqueName",
                  "autocomplete": "off"
                },
                domProps: {
                  "value": _vm.BarcodeArray[0].UniqueName
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.$set(_vm.BarcodeArray[0], "UniqueName", $event.target.value);
                  }
                }
              })];
            }
          }], null, true)
        }), errors[0] ? _c('span', {
          staticClass: "invalid-feedback d-block",
          attrs: {
            "name": "UniqueName"
          }
        }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()], 1)]), _c('div', {
          staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left my-2"
        }, [_c('div', {
          staticClass: "form-group"
        }, [_c('div', {
          staticClass: "search-btm-btn"
        }, [_c('a', {
          staticClass: "btn btn-success text-white mr-2",
          staticStyle: {
            "cursor": "pointer"
          },
          attrs: {
            "title": "Save"
          },
          on: {
            "click": function ($event) {
              return _vm.Save();
            }
          }
        }, [_c('i', {
          staticClass: "fa fa-save pr-2"
        }), _vm._v("Save")]), _c('a', {
          staticClass: "btn btn-danger text-white",
          staticStyle: {
            "cursor": "pointer"
          },
          attrs: {
            "title": "Cancel"
          },
          on: {
            "click": function ($event) {
              return _vm.Cancel($event);
            }
          }
        }, [_c('i', {
          staticClass: "fa fa-close pr-2"
        }), _vm._v("Cancel")])])])])])];
      }
    }])
  })], 1)])])])])]);
};
var UpdateBarCodevue_type_template_id_3ad7b972_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Modal/UpdateBarCode.vue?vue&type=template&id=3ad7b972&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/UpdateBarCode.vue?vue&type=script&lang=js&

/* harmony default export */ var UpdateBarCodevue_type_script_lang_js_ = ({
  props: {
    BarcodeArray: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      Remarks: ''
    };
  },
  created: function () {
    debugger;
    console.log(this.BarcodeArray);
  },
  methods: {
    Save: function () {
      var vm = this;
      debugger;
      vm.$refs.BarcodeUpdate.validate().then(result => {
        if (result) {
          var url = `AssetCatalogId=${vm.BarcodeArray[0].AssetCatalogueId}&Barcode=${vm.BarcodeArray[0].BarcodeNumber}&Serialnumber=${vm.BarcodeArray[0].SerialNumber}&Uniquename=${vm.BarcodeArray[0].UniqueName}`;
          debugger;
          DataService["a" /* default */].UpdateBarcode(url).then(response => {
            debugger;
            if (response.data != null) {
              if (response.data == true) {
                vm.ShowAlert("Barcode is Updated Successfuly", "success", vm.$t('Alert'));
                vm.$parent.FetchData();
                vm.$parent.ClosePOP();
              } else {
                vm.ShowAlert(vm.$t('Bar_Code_Already_Exist'), "failure", true, vm.$t('Alert'));
                vm.$parent.ClosePOP();
              }
            }
            setTimeout(function () {
              vm.CheckBoxBootstrap();
            }, 100);
          });
        }
      });
    },
    Cancel: function (item) {
      this.$emit('ClosePOP', item);
    },
    ClosePOP: function (item) {
      debugger;
      this.$emit('ClosePOP', item);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/UpdateBarCode.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_UpdateBarCodevue_type_script_lang_js_ = (UpdateBarCodevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Modal/UpdateBarCode.vue





/* normalize component */

var UpdateBarCode_component = Object(componentNormalizer["a" /* default */])(
  Modal_UpdateBarCodevue_type_script_lang_js_,
  UpdateBarCodevue_type_template_id_3ad7b972_render,
  UpdateBarCodevue_type_template_id_3ad7b972_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var UpdateBarCode = (UpdateBarCode_component.exports);
// EXTERNAL MODULE: ./src/components/Common/ListingStatus.vue + 4 modules
var ListingStatus = __webpack_require__("df17");

// EXTERNAL MODULE: ./src/components/Modal/AddProduct.vue + 9 modules
var AddProduct = __webpack_require__("191f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/Calendar.vue?vue&type=template&id=5daeceda&
var Calendarvue_type_template_id_5daeceda_render = function render() {
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
  }, [_vm._v(" Calendar ")]), _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-original-title": "Close"
    },
    on: {
      "click": function ($event) {
        return _vm.CloseCalendarpopup($event);
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-times"
  })])]), _vm._m(0)])])])]);
};
var Calendarvue_type_template_id_5daeceda_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "modal-body"
  }, [_c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0"
  }, [_c('div', {
    staticClass: "container-fluid"
  }, [_c('div', {
    staticClass: "col-lg-12 border p-2 float-left"
  }, [_c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left px-0"
  }, [_c('div', {
    staticClass: "row cal_iconsbase",
    attrs: {
      "id": "divHeader"
    }
  }, [_c('div', {
    staticClass: "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left"
  }, [_c('div', {
    staticClass: "row label_group"
  }, [_c('div', {
    staticClass: "col-lg-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_vm._v("Location:"), _c('span', {
    staticClass: "lighttext",
    attrs: {
      "id": "LOCATION_NAME"
    }
  })])]), _c('div', {
    staticClass: "col-lg-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_vm._v("Item "), _c('span', {
    staticClass: "lighttext",
    attrs: {
      "id": "itemname"
    }
  })])]), _c('div', {
    staticClass: "col-lg-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_vm._v("Total "), _c('span', {
    staticClass: "lighttext",
    attrs: {
      "id": "totalname"
    }
  })])]), _c('div', {
    staticClass: "col-lg-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_vm._v("UniqueName "), _c('span', {
    staticClass: "lighttext",
    attrs: {
      "id": "uniquename"
    }
  })])])])])])]), _c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left px-0 mt-2"
  }, [_c('div', {
    staticClass: "table-responsive"
  }, [_c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0 float-left",
    attrs: {
      "id": "calendar"
    }
  })])])])])])]);
}];

// CONCATENATED MODULE: ./src/components/Modal/Calendar.vue?vue&type=template&id=5daeceda&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/Calendar.vue?vue&type=script&lang=js&
/* harmony default export */ var Calendarvue_type_script_lang_js_ = ({
  data() {
    return {
      showLoader: true
    };
  },
  methods: {
    CloseCalendarpopup() {
      this.$emit('CloseCalendarpopup');
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/Calendar.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_Calendarvue_type_script_lang_js_ = (Calendarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Modal/Calendar.vue?vue&type=style&index=0&id=5daeceda&prod&lang=css&
var Calendarvue_type_style_index_0_id_5daeceda_prod_lang_css_ = __webpack_require__("1354");

// CONCATENATED MODULE: ./src/components/Modal/Calendar.vue






/* normalize component */

var Calendar_component = Object(componentNormalizer["a" /* default */])(
  Modal_Calendarvue_type_script_lang_js_,
  Calendarvue_type_template_id_5daeceda_render,
  Calendarvue_type_template_id_5daeceda_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Calendar = (Calendar_component.exports);
// EXTERNAL MODULE: ./src/components/Modal/AuditHistory.vue + 4 modules
var AuditHistory = __webpack_require__("db6e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetCatalog/RelatedInformation.vue?vue&type=script&lang=js&























/* harmony default export */ var RelatedInformationvue_type_script_lang_js_ = ({
  props: {
    chkRelatedInfo: {
      type: Boolean
    }
  },
  components: {
    RelatedInformationModel: RelatedInformationPopup,
    DeployProductpopup: DeployProductpopup,
    StatusList: ListingStatus["a" /* default */],
    UpdateBarCodeModel: UpdateBarCode,
    AddProduct: AddProduct["a" /* default */],
    Calendar: Calendar,
    AuditHistoryModel: AuditHistory["a" /* default */]
  },
  data() {
    return {
      RelatedInformationData: [],
      renderActions: [],
      BarcodeArray: [],
      Headers: [{
        "COLUMN_NAME": "LocationName",
        "DATA_TYPE": "image",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Location'),
        "DISPLAY_ORDER": 1
      }, {
        "COLUMN_NAME": "UniqueName",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('UniqueNameProductCode'),
        "DISPLAY_ORDER": 1,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "TotalItems",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('TotalItems'),
        "DISPLAY_ORDER": 3,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "AvailableItems",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('AvailableQuantity'),
        "DISPLAY_ORDER": 4,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "BarcodeImageUrl",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Barcode'),
        "DISPLAY_ORDER": 9,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "SerialNumber",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('SerialNumber'),
        "DISPLAY_ORDER": 10
      }, {
        "COLUMN_NAME": "Calendar",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Calendar'),
        "DISPLAY_ORDER": 5,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "phonenumber",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('PHONE_NUMBER'),
        "DISPLAY_ORDER": 11
      }, {
        "COLUMN_NAME": "Cost",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Cost'),
        "DISPLAY_ORDER": 12
      }, {
        "COLUMN_NAME": "WarrantyExpirationDate",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('WarrantyExpirationDate'),
        "DISPLAY_ORDER": 13
      }, {
        "COLUMN_NAME": "CalibrationDate",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('CalibrationDate'),
        "DISPLAY_ORDER": 14,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "LastAuditDate",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('AuditDate'),
        "DISPLAY_ORDER": 15,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "FileType",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('ATTACHMENT_PATH'),
        "DISPLAY_ORDER": 16,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "StatusName",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('STATUS_NAME'),
        "DISPLAY_ORDER": 8,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "HISTORY",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('ViewHistory'),
        "DISPLAY_ORDER": 17,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "Action",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('UpdateBarcode'),
        "DISPLAY_ORDER": 18,
        settings: {
          isInSlot: true
        }
      }],
      DeployItemData: [],
      PageSize: 10,
      PageNumber: 1,
      PageSizeOption: null,
      noRecord: true,
      TotalRecords: 0,
      CurrentPage: 1,
      TotalPages: 0,
      SortBy: '',
      SortExp: '',
      isLoading: false,
      isLoadings: false,
      IscheckInfromation: false,
      IscheckDeployProduct: false,
      IsUpdateBarCode: false,
      isHistoryModel: false,
      catalogId: '',
      RelatedInfoId: '',
      leftSearchFields: RelatedInformationSchema.leftsearchSchema,
      listheaderbuttons: RelatedInformationSchema.buttons,
      widgets: [],
      LegendArray: [],
      ShowAddProduct: false,
      buttons: [{
        type: "submit",
        class: "btn btn-warning HideTab",
        text: "Previous <i class='fa fa-angle-double-left pr-2'></i>",
        isVisible: true,
        onClick: this.onPreviousClick
      }, {
        type: "submit",
        class: "btn btn-primary HideTab",
        text: "Next<i class='fa fa-angle-double-right pl-2'></i>",
        isVisible: true,
        onClick: this.onNextClick
      }, {
        type: "submit",
        class: "btn btn-success",
        text: "<i class='fa fa-save pr-2'></i>Save ",
        isVisible: false,
        onClick: this.onSubmit
      }, {
        type: "button",
        class: "btn btn-danger",
        text: "<i class='fa fa-close pr-2'></i>Cancel",
        isVisible: false,
        onClick: this.onCancel
      }],
      InfoData: [],
      pdfData: [],
      FileData: [],
      HistoryItems: [],
      Calenderpopup: false,
      txtUniqueNameCode: '',
      searchBy: '',
      StatusListData: [],
      privilegeParams: null
    };
  },
  created() {
    var vm = this;
    vm.catalogId = window.location.href.split('/')[5] === undefined ? '' : window.location.href.split('/')[5];
    vm.GetStatusList();
    vm.privilegeParams = `controller=AssetCatalog&action=`;
    if (vm.catalogId != null && vm.catalogId != '') {
      vm.leftSearchFields = '';
      vm.listheaderbuttons = '';
      vm.buttons[0].isVisible = true;
      vm.buttons[1].isVisible = true;
    } else {
      RelatedInformationSchema.bindleftCommonSearchdropdown(vm, "Asset", "Location");
      RelatedInformationSchema.bindleftCommonSearchdropdown(vm, "Asset", "Tag");
      RelatedInformationSchema.bindleftCommonSearchdropdown(vm, "Asset", "Status");
    }
    vm.FetchData();
  },
  methods: {
    changeStatus(rid, statusId) {
      debugger;
      var vm = this;
      vm.confirmR(vm.$t("Are you sure you want to change the status?"), true, vm.$t("Update") + "  " + vm.$t("Group_Item"), function () {
        var url = `rId=${rid}&statusId=${statusId}`;
        DataService["a" /* default */].UpdateCatalogStatus(url).then(response => {
          debugger;
          if (response.data.status == true) {
            vm.ShowAlert(vm.$t('Related Information has been successfully updated.'), "success", true, vm.$t("Alert"));
            vm.FetchData();
          } else {
            vm.ShowAlert(vm.$t('An error has occurred while updating Related Information. Please retry.'), "success", true, vm.$t("Alert"));
          }
          vm.isLoading = false;
        });
      });
    },
    GetStatusList() {
      var vm = this;
      vm.isLoading = true;
      var url = `langCode=en&statusType=AssetManagement&hasglobal=true`;
      DataService["a" /* default */].GetStatusList(url).then(response => {
        vm.StatusListData = JSON.parse(response.data);
        vm.isLoading = false;
      });
    },
    DownloadAllBarcodePrint() {
      var vm = this;
      var url = `catalogId=${vm.catalogId}&relatedinfoIds=`;
      DataService["a" /* default */].DownloadAllBarcode(url).then(response => {});
    },
    onCancel() {
      var vm = this;
      vm.$parent.btnCancel();
    },
    onNextClick() {
      var vm = this;
      vm.$parent.btnNextTab();
    },
    renderRowActionMethod() {},
    onPreviousClick() {
      var vm = this;
      vm.$parent.btnPreviousTab();
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
    renderActions() {},
    commonHeaderButtonClick: function (event) {
      switch (event.callbackfunction) {
        case "OpenDeployProduct":
          this.DeployProduct();
          break;
        case "OpenModelAddProduct":
          this.OpenModelAddProduct();
          break;
        case "DownloadAllBarcode":
          this.DownloadAllBarcode();
          break;
        case "PrintAllBarcode":
          this.PrintAllBarcode();
          break;
        case "BackToProductList":
          this.BackToProductList();
          break;
      }
    },
    BackToProductList() {
      var vm = this;
      vm.$router.push({
        name: 'ProductListing'
      });
    },
    OpenModelAddProduct() {
      var vm = this;
      vm.ShowAddProduct = true;
      $("#modelAddProduct").modal('show');
      setTimeout(function () {
        $("#modelAddProduct").modal('show');
        setTimeout(function () {
          vm.SetBootstraptoolTip();
        }, 200);
      }, 1000);
    },
    SearchByuniqueNameCode() {
      var vm = this;
      vm.searchBy = this.txtUniqueNameCode == '' ? '' : this.txtUniqueNameCode;
      vm.FetchData();
    },
    ClearSearch() {
      var vm = this;
      vm.searchBy = '';
      vm.txtUniqueNameCode = '';
      vm.FetchData();
    },
    FetchData() {
      var vm = this;
      vm.isLoadings = true;
      //  if(vm.searchBy!="" || vm.searchBy !=undefined || vm.txtUniqueNameCode !='')
      if (vm.searchCondition == '' || vm.searchCondition == undefined) {
        var prams = `search=${vm.searchBy == '' ? '' : vm.txtUniqueNameCode}&pageSize=${vm.PageSize}&pageNum=${vm.PageNumber}&sortBy=&sortExp=&catalogId=${vm.catalogId}&statusIds=&location_id=&statusId=&typeIds=`;
      } else {
        var prams = `pageSize=${vm.PageSize}&pageNum=${vm.PageNumber}&sortBy=${vm.SortBy}&sortExp=${vm.SortExp}&catalogId=${vm.catalogId}&${vm.searchCondition}`;
      }
      DataService["a" /* default */].ShowRelatedInformationListing(prams).then(response => {
        if (response.data != null) {
          if (response.data.length > 2) {
            vm.RelatedInformationData = JSON.parse(response.data);
            vm.TotalRecords = vm.RelatedInformationData[0].TOTAL;
            vm.TotalPages = Math.ceil(vm.TotalRecords / vm.PageSize);
            vm.CurrentPage = vm.PageNumber;
            vm.noRecord = false;
            vm.isLoadings = false;
          } else {
            vm.noRecord = true;
            vm.RelatedInformationData = [];
            vm.TotalRecords = 0;
            vm.isLoadings = false;
          }
        } else {
          vm.isLoadings = false;
        }
        setTimeout(function () {
          vm.CheckBoxBootstrap();
        }, 100);
        setTimeout(function () {
          vm.ResponsiveDataTable('tablelistingdata');
        }, 500);
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
      $("#" + s + '  span:first-child').attr("class", SortDir);
    },
    UniqueNameclick: function (id) {
      var vm = this;
      vm.RelatedInfoId = id;
      vm.IscheckInfromation = true;
    },
    columnDataFormatter: function (row, column) {
      return row[column.COLUMN_NAME];
    },
    DownloadBarcode(RelatedInfoId) {
      var vm = this;
      vm.isLoading = true;
      vm.InfoData = [];
      var url = `relatedInfoId=${RelatedInfoId}`;
      DataService["a" /* default */].GetRelatedInfo(url).then(response => {
        if (response.data != null) {
          vm.InfoData = response.data.RelatedInformation;
          if (vm.InfoData.Barcode != null) {
            // Convert the Base64 string to a byte array
            const byteCharacters = atob(vm.InfoData.Barcode);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
              byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);

            // Create a Blob from the byte array
            const blob = new Blob([byteArray], {
              type: 'image/png'
            });

            // Create a temporary URL and trigger the download
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', vm.InfoData.UniqueName + '.png');
            link.click();
            URL.revokeObjectURL(url);
          } else {
            console.error('File not found');
          }
          vm.isLoading = false;
        } else {
          vm.InfoData = [];
          vm.isLoading = false;
        }
      });
    },
    DownloadAllBarcode: function (id, fileName) {
      debugger;
      var vm = this;
      fileName = "download";
      vm.isLoading = true;
      var checkedValues = "";
      $('.chkItems:checkbox:checked').not("[id^='chkAll']").each(function () {
        if (checkedValues.length > 0) {
          checkedValues += ',';
        }
        checkedValues += $(this).val();
      });
      if (checkedValues != '') {
        const token = Object(UserInfo["b" /* useloggedUserInfo */])().GetUserInfo.Token;
        //config.headers["Authorization"] = `Bearer ${token}`;    
        var url = `?catalogId=${vm.catalogId}&relatedinfoIds=${checkedValues}`;
        axios_default()({
          method: 'get',
          url: "https://newcrmapi.talygen.com/api/asset" + `/DownloadAllBarcode/${url}`,
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          responseType: 'blob'
        }).then(function (response) {
          const a = document.createElement('a');
          a.href = window.URL.createObjectURL(response.data);
          a.download = `${fileName}.pdf`;
          document.body.appendChild(a);
          a.click();
          a.remove();
          vm.isLoading = false;
        });
      } else {
        vm.ShowAlert(vm.$t('Please select atlest one Barcode'), "success", vm.$t('Alert'));
        vm.isLoading = false;
      }
    },
    // PrintAllBarcode:function(){
    //     var vm=this;
    //     vm.isLoading=true;                  
    //     var checkedValues = "";
    //     $('.chkItems:checkbox:checked').not("[id^='chkAll']").each(function () {
    //         if (checkedValues.length > 0) {
    //             checkedValues += ',';
    //         }
    //         checkedValues += $(this).val();
    //     });       
    //     var url = `?catalogId=${vm.catalogId}&relatedinfoIds=${checkedValues}`;          
    //     DataService.DownloadAllBarcode(url).then(response => {                
    //         if (response.data != null) {                  
    //             if (response.data.length > 0) {
    //                 vm.RelatedInformationData = JSON.parse(response.data);                                        
    //                  vm.isLoading=false;
    //             }
    //             else {                        
    //                  vm.isLoading=false;
    //             }
    //         }
    //         else {
    //              vm.isLoading=false;
    //         }               
    //     });

    // },

    PrintAllBarcode: function (id, fileName) {
      debugger;
      var vm = this;
      fileName = "download";
      vm.isLoading = true;
      var checkedValues = "";
      $('.chkItems:checkbox:checked').not("[id^='chkAll']").each(function () {
        if (checkedValues.length > 0) {
          checkedValues += ',';
        }
        checkedValues += $(this).val();
      });
      if (checkedValues != '') {
        const token = Object(UserInfo["b" /* useloggedUserInfo */])().GetUserInfo.Token;
        //config.headers["Authorization"] = `Bearer ${token}`;    
        var url = `?catalogId=${vm.catalogId}&relatedinfoIds=${checkedValues}`;
        axios_default()({
          method: 'get',
          url: "https://newcrmapi.talygen.com/api/asset" + `/DownloadAllBarcode/${url}`,
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          responseType: 'blob'
        }).then(function (response) {
          // const a = document.createElement('a');
          // a.href = window.URL.createObjectURL(response.data);
          // a.download = `${fileName}.pdf`;
          // document.body.appendChild(a);
          // a.click();
          // a.remove();
          debugger;
          let url = URL.createObjectURL(response.data);
          window.open(url); //opens the pdf in a new tab
          vm.isLoading = false;
        });
      } else {
        vm.ShowAlert(vm.$t('Please select atlest one Barcode'), "success", vm.$t('Alert'));
        vm.isLoading = false;
      }
    },
    pagerMethod: function (value) {
      this.PageSize = value.PageSize;
      this.PageNumber = value.PageNumber;
      this.FetchData();
    },
    ClosePOPuP: function () {
      var vm = this;
      vm.IscheckInfromation = false;
    },
    OpenPopup: function () {
      var vm = this;
      vm.IscheckInfromation = true;
    },
    ClosePOp: function () {
      var vm = this;
      vm.IscheckDeployProduct = false;
    },
    DeployProduct: function () {
      var vm = this;
      vm.IscheckDeployProduct = true;
    },
    AuditHistoryClick: function (item, tabname) {
      var vm = this;
      vm.TabName = tabname;
      vm.HistoryItems = item;
      vm.isHistoryModel = true;
    },
    CloseAuditpopup: function () {
      var vm = this;
      vm.isHistoryModel = false;
    },
    UpdateBarcode: function (item) {
      var vm = this;
      vm.BarcodeArray = [];
      const obj = {
        BarcodeNumber: item.BarcodeNumber,
        SerialNumber: item.SerialNumber == null ? "" : item.SerialNumber,
        UniqueName: item.UniqueName,
        AssetCatalogueId: item.AssetCatalogueId
      };
      vm.BarcodeArray.push(obj);
      vm.IsUpdateBarCode = true;
    },
    DownLoadFile: function (item) {
      var vm = this;
      vm.isLoading = true;
      var param = `filePath=${item.FilePath}`;
      // var url = `?fileId=${item.RelatedInfoId}&filePath=${item.FilePath}&fileName=${item.AttachmentName}&FileType=${item.FileType}`;
      DataService["a" /* default */].DownloadAttachment(param).then(response => {
        if (response.data != null && response.status === 200) {
          const byteData = response.data;
          const fileURL = `data:${item.FileType};base64,${byteData}`;
          var fileLink = document.createElement('a');
          fileLink.href = fileURL;
          fileLink.setAttribute('download', item.AttachmentName);
          document.body.appendChild(fileLink);
          fileLink.click();
          vm.isLoading = false;
        } else {
          vm.isLoading = false;
        }
      });
    },
    ViewHistory: function (item) {
      this.$router.push({
        name: 'BarcodeSearch',
        params: {
          Id: item.RelatedInfoId
        }
      });
    },
    ClosePOP: function () {
      var vm = this;
      vm.IsUpdateBarCode = false;
    },
    ShowCalender: function (value) {
      this.$router.push({
        name: "Calendar",
        params: {
          rid: value.RelatedInfoId,
          lid: value.RelatedInfoLocationId,
          aid: value.AssetCatalogueId == null ? 0 : value.AssetCatalogueId
        }
      });
    },
    CloseCalendarpopup: function () {
      var vm = this;
      vm.Calenderpopup = false;
    }
  }
});
// CONCATENATED MODULE: ./src/views/AssetCatalog/RelatedInformation.vue?vue&type=script&lang=js&
 /* harmony default export */ var AssetCatalog_RelatedInformationvue_type_script_lang_js_ = (RelatedInformationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/AssetCatalog/RelatedInformation.vue?vue&type=style&index=0&id=41f92ce5&prod&lang=css&
var RelatedInformationvue_type_style_index_0_id_41f92ce5_prod_lang_css_ = __webpack_require__("a904");

// CONCATENATED MODULE: ./src/views/AssetCatalog/RelatedInformation.vue






/* normalize component */

var RelatedInformation_component = Object(componentNormalizer["a" /* default */])(
  AssetCatalog_RelatedInformationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RelatedInformation = __webpack_exports__["default"] = (RelatedInformation_component.exports);

/***/ }),

/***/ "a904":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedInformation_vue_vue_type_style_index_0_id_41f92ce5_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9dfe");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedInformation_vue_vue_type_style_index_0_id_41f92ce5_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedInformation_vue_vue_type_style_index_0_id_41f92ce5_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "bcbf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__("f5df");

module.exports = function (it) {
  var klass = classof(it);
  return klass == 'BigInt64Array' || klass == 'BigUint64Array';
};


/***/ }),

/***/ "d429":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var lengthOfArrayLike = __webpack_require__("07fa");
var toIntegerOrInfinity = __webpack_require__("5926");

var $RangeError = RangeError;

// https://tc39.es/proposal-change-array-by-copy/#sec-array.prototype.with
// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.with
module.exports = function (O, C, index, value) {
  var len = lengthOfArrayLike(O);
  var relativeIndex = toIntegerOrInfinity(index);
  var actualIndex = relativeIndex < 0 ? len + relativeIndex : relativeIndex;
  if (actualIndex >= len || actualIndex < 0) throw $RangeError('Incorrect index');
  var A = new C(len);
  var k = 0;
  for (; k < len; k++) A[k] = k === actualIndex ? value : O[k];
  return A;
};


/***/ }),

/***/ "db6e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/AuditHistory.vue?vue&type=template&id=93f99f18&
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
  }, [_vm._v(" " + _vm._s(_vm.TabName) + " : " + _vm._s(_vm.HistoryItems.UniqueName) + " ")]), _c('button', {
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
  }, [_c('dynamic-form', {
    attrs: {
      "lang": "en",
      "buttons": _vm.buttons,
      "schema": _vm.FormSchema
    },
    on: {
      "OnSubmit": _vm.onSubmit
    }
  }), _c('tg-list', {
    attrs: {
      "showCheckBox": false,
      "IsShowAction": false,
      "listType": ['List'],
      "ModuleName": "Asset",
      "SubModuleCode": "Asset",
      "IdentityColumn": "RelatedinfoID",
      "HeaderText": "Asset Management",
      "widgets": _vm.widgets,
      "ListData": _vm.viewHistroyData,
      "HeaderData": _vm.Header,
      "callbackfunction": _vm.FetchData,
      "LegendArray": _vm.LegendArray,
      "SearchFields": _vm.leftSearchFields,
      "SortExp": _vm.SortExp,
      "SortBy": _vm.SortBy,
      "NorecordfoundText": _vm.$t('NorecordfoundText'),
      "TotalRecords": _vm.TotalRecord,
      "RenderRowActionMethod": _vm.renderActions,
      "ListDataCallBackFunction": _vm.FetchData
    },
    on: {
      "PagerButtonClick": _vm.pagerMethod,
      "HeaderButtonClick": _vm.commonHeaderButtonClick,
      "SortdataButtonClick": _vm.sortdata
    },
    scopedSlots: _vm._u([{
      key: "slotdata",
      fn: function ({
        data
      }) {
        return [data.column.COLUMN_NAME == 'audit_date' ? [_c('span', {
          staticClass: "text-dark center-icon",
          attrs: {
            "title": data.column.COLUMN_NAME
          }
        }, [_vm._v(" " + _vm._s(_vm.$options.filters.formatDateTime(data.row.audit_date)) + " ")])] : _vm._e(), data.column.COLUMN_NAME == 'StatusId' ? [data.row.StatusId == 1 ? _c('em', {
          staticClass: "active-disabled"
        }, [_c('span', {
          staticClass: "btn d-inline-block w-80 text-center text-truncate"
        }, [_vm._v(_vm._s(_vm.$t('Pass')))])]) : _vm._e(), data.row.StatusId == 0 ? _c('em', {
          staticClass: "active-disabled"
        }, [_c('span', {
          staticClass: "btn d-inline-block w-80 text-center text-truncate"
        }, [_vm._v(_vm._s(_vm.$t('Fail')))])]) : _vm._e()] : _vm._e()];
      }
    }])
  })], 1)])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Modal/AuditHistory.vue?vue&type=template&id=93f99f18&

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/AuditHistory.vue?vue&type=script&lang=js&

/* harmony default export */ var AuditHistoryvue_type_script_lang_js_ = ({
  props: {
    HistoryItems: {
      type: Array,
      required: true
    },
    TabName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      widgets: [],
      viewHistroyData: [],
      listheaderbuttons: [],
      renderActions: [],
      LegendArray: [],
      SortBy: '',
      SortExp: '',
      TotalRecord: 0,
      PageNumber: 1,
      PageSize: 10,
      Header: [{
        "COLUMN_NAME": "Audit_Name",
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("AuditorName"),
        "DISPLAY_ORDER": 1
      }, {
        "COLUMN_NAME": "audit_date",
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("AuditDate"),
        "DISPLAY_ORDER": 2,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "comment",
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t("Comment"),
        "DISPLAY_ORDER": 3
      }, {
        "COLUMN_NAME": "StatusId",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Status",
        "DISPLAY_ORDER": 4,
        settings: {
          isInSlot: true
        }
      }],
      FormSchema: [{
        layoutType: "double",
        Data: [{
          astype: "DateField",
          label: "",
          name: "AuditDate",
          value: '',
          placeholder: "10/12/2022 12:AM",
          validationRules: {
            "required": true
          },
          config: {
            format: "MM/DD/YYYY",
            maxDate: new Date()
          }
        }, {
          astype: "DateField",
          label: "",
          name: "NextAuditDate",
          value: '',
          placeholder: "10/12/2022 12:AM",
          validationRules: {
            "required": true
          },
          config: {
            format: "MM/DD/YYYY",
            minDate: new Date()
          }
        }]
      }, {
        layoutType: "single",
        Data: [{
          astype: "RadioField",
          label: "Status",
          name: "Status",
          value: '1',
          placeholder: "",
          validationRules: {
            "required": false
          },
          config: {
            options: [{
              value: "1",
              name: "Pass"
            }, {
              value: "0",
              name: "Fail"
            }],
            onChange: this.OnChangeStatus
          }
        }, {
          astype: "TextAreaField",
          label: this.$t('Comment'),
          name: "Comment",
          value: "",
          validationRules: {
            "required": true,
            max: 1000
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
        onClick: this.ClosePopup
      }]
    };
  },
  created: function () {
    var vm = this;
    vm.SetLabel();
    vm.FetchData();
    vm.$parent.FetchData();
  },
  methods: {
    OnChangeStatus(event, field) {
      field.value = event.target.getAttribute('data-value');
    },
    SetLabel() {
      this.FormSchema[0].Data[0].label = `${this.TabName} Date (M/D/YYYY)`;
      this.FormSchema[0].Data[1].label = `Next ${this.TabName} Date (M/D/YYYY)`;
    },
    onSubmit(formfields, val) {
      var vm = this;
      let myObj = {
        AuditDate: formfields.AuditDate,
        NextAuditDate: formfields.NextAuditDate,
        Status: formfields.Status,
        Comment: formfields.Comment,
        Historytype: vm.TabName,
        RelatedInfoID: vm.HistoryItems.RelatedInfoId
      };
      DataService["a" /* default */].UpdateAuditHistory(myObj).then(response => {
        if (response.data != null) {
          if (response.data.length > 0) {
            vm.ShowAlert(vm.$t(vm.TabName + 'Date successfully added.'), "success", vm.$t('Alert'));
            vm.FetchData();
            vm.$parent.FetchData();

            // vm.FormSchema[0].Data[0].value='';
            // vm.FormSchema[0].Data[1].value='';
            // vm.FormSchema[1].Data[1].value='';
          } else {
            vm.ShowAlert(vm.$t("Unknown Error Occur"), "failure", true, vm.$t('Alert'));
            vm.$parent.CloseAuditpopup();
          }
        }
        setTimeout(function () {
          vm.CheckBoxBootstrap();
        }, 100);
      });
    },
    FetchData() {
      var vm = this;
      // var params=`RelatedInfoId=${vm.HistoryItems.RELATED_INFO_ID}&HistoryType=${vm.TabName}`;
      var params = `RelatedInfoId=${vm.HistoryItems.RelatedInfoId}&HistoryType=${vm.TabName}`;
      DataService["a" /* default */].GetAuditHistory(params).then(response => {
        if (response.data != null) {
          if (response.data.data.length > 0) {
            console.log(response.data.data);
            vm.viewHistroyData = response.data.data;
            vm.TotalRecord = response.data.data[0].TOTAL;
            vm.TotalPage = Math.ceil(vm.TotalRecord / vm.PageSize);
            vm.CurrentPage = vm.PageNumber;
            vm.noRecord = false;
            vm.isLoading = false;
          } else {
            vm.noRecord = true;
            vm.viewHistroyData = [];
            vm.TotalRecord = 0;
            vm.isLoading = false;
          }
        }
      });
    },
    ClosePopup() {
      var vm = this;
      vm.TabName = '';
      vm.HistoryItems = [];
      vm.$parent.isHistoryModel = false;
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
      $("#" + s + '  span:first-child').attr("class", SortDir);
    },
    pagerMethod: function (value) {
      this.PageSize = value.PageSize;
      this.PageNum = value.PageNumber;
      this.FetchData();
    },
    commonHeaderButtonClick: function () {},
    renderActions() {},
    renderRowActionMethod() {}
  }
});
// CONCATENATED MODULE: ./src/components/Modal/AuditHistory.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_AuditHistoryvue_type_script_lang_js_ = (AuditHistoryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Modal/AuditHistory.vue?vue&type=style&index=0&id=93f99f18&prod&lang=css&
var AuditHistoryvue_type_style_index_0_id_93f99f18_prod_lang_css_ = __webpack_require__("7697");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Modal/AuditHistory.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Modal_AuditHistoryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AuditHistory = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "df17":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Common/ListingStatus.vue?vue&type=template&id=24bdefb2&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "cstm-drop-btn"
  }, [_vm.isShowLoader ? _c('button', {
    staticClass: "btn btn-dark w-100",
    staticStyle: {
      "padding": "2px 10px 2px 2px"
    },
    attrs: {
      "type": "button",
      "disabled": ""
    }
  }, [_c('span', {
    staticClass: "spinner-border spinner-border-sm",
    attrs: {
      "role": "status",
      "aria-hidden": "true"
    }
  }), _vm._v(" Loading...")]) : _vm._e(), !_vm.isShowLoader ? _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.StatusId,
      expression: "StatusId"
    }],
    staticClass: "w-100",
    class: {
      'ddlchangestatus': _vm.IsReponsive
    },
    style: {
      backgroundColor: _vm.StatusBgColor,
      color: _vm.StatusColor
    },
    attrs: {
      "id": "crmlistingStatus_span",
      "disabled": _vm.StatusCode == _vm.StatusId,
      "oldstatus": _vm.PrevStatus,
      "checkPrivilege": "yes",
      "data-id": _vm.IsReponsive ? _vm.dataid : null,
      "data-status": _vm.IsReponsive ? _vm.StatusId : null
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.StatusId = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, function ($event) {
        return _vm.ChangeStatus(_vm.dataid, $event);
      }]
    }
  }, _vm._l(_vm.StatusList, function (s, index) {
    return _c('option', {
      key: index,
      domProps: {
        "value": s.STATUS_ID
      }
    }, [_vm._v(" " + _vm._s(s.STATUS) + " ")]);
  }), 0) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Common/ListingStatus.vue?vue&type=template&id=24bdefb2&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Common/ListingStatus.vue?vue&type=script&lang=js&


/* harmony default export */ var ListingStatusvue_type_script_lang_js_ = ({
  name: 'listing-status',
  props: {
    dataid: {
      type: Number,
      required: true
    },
    dataselected: {
      type: String,
      required: true
    },
    dataController: {
      type: String,
      required: true
    },
    dataAction: {
      type: String,
      required: true
    },
    isfor: {
      type: String,
      required: true
    },
    callbackfunction: {
      type: Function
    },
    statuslist: {
      type: Array,
      required: true
    },
    isselectedvaluestring: {
      type: Boolean
    },
    parentid: {
      type: Number
    },
    haschild: {
      type: Boolean
    },
    hasglobal: {
      type: Boolean,
      required: false
    }
  },
  data: function () {
    return {
      StatusId: this.dataselected,
      StatusCode: "",
      PrevStatus: this.dataselected,
      IsReponsive: false,
      StatusList: this.statuslist,
      item: this.item,
      StatusColor: '#ffffff',
      StatusBgColor: '#525f65',
      isShowLoader: true
    };
  },
  created: function () {
    var vueCom = this;
    if (vueCom.hasglobal == true || vueCom.hasglobal == "true") {
      vueCom.StatusList = this.GetStatusList();
    }
    $.each(vueCom.statuslist, function (filedIndex, fieldItem) {
      if (vueCom.statuslist[filedIndex].STATUS == "Closed") {
        vueCom.StatusCode = vueCom.statuslist[filedIndex].STATUS_ID;
      }
    });
    try {
      this.isShowLoader = !(this.statuslist.length > 0);
    } catch (ex) {
      this.isShowLoader = false;
    }
    var ths = this;
    if (this.isselectedvaluestring == true) {
      var itm = this.StatusList.filter(function (entry) {
        return entry.STATUS == ths.dataselected;
      });
      if (itm.length > 0) {
        this.StatusId = itm[0].STATUS_ID;
        this.PrevStatus = itm[0].STATUS_ID;
        this.GetColor();
      } else {
        this.StatusId = "";
        this.PrevStatus = "";
      }
    } else {
      this.StatusId = this.dataselected;
      this.PrevStatus = this.dataselected;
      this.GetColor();
    }
    this.GetColor();
  },
  mounted: function () {
    var vm = this;
    $("body").on("change", ".ddlchangestatus", function (event) {
      event.stopImmediatePropagation();
      vm.ChangeStatus($(this).attr("data-id"), event, event.target.value);
    });
  },
  watch: {
    dataselected: function (value) {
      if (this.isselectedvaluestring == true) {
        var itm = this.StatusList.filter(function (entry) {
          return entry.STATUS == value;
        });
        if (itm.length > 0) {
          this.StatusId = itm[0].STATUS_ID;
          this.PrevStatus = itm[0].STATUS_ID;
          this.GetColor();
        } else {
          this.StatusId = "";
          this.PrevStatus = "";
        }
      } else {
        this.StatusId = value;
        this.PrevStatus = value;
        this.GetColor();
      }
      this.GetColor();
    },
    statuslist: function (value) {
      this.isShowLoader = false;
      this.StatusList = value;
      var ths = this;
      if (ths.isselectedvaluestring == true) {
        var itm = ths.StatusList.filter(function (entry) {
          return entry.STATUS == ths.dataselected;
        });
        if (itm.length > 0) {
          ths.StatusId = itm[0].STATUS_ID;
          ths.PrevStatus = itm[0].STATUS_ID;
          ths.GetColor();
        } else {
          ths.StatusId = "";
          ths.PrevStatus = "";
          this.GetColor();
        }
      } else {
        this.StatusId = value;
        ths.PrevStatus = value;
        this.GetColor();
      }
    }
  },
  methods: {
    GetColor: function () {
      var vm = this;
      //vm.$forceUpdate();
      if (vm.StatusList != null && vm.StatusList.length > 0) {
        var returnedData = $.grep(vm.StatusList, function (element, index) {
          return element.STATUS_ID == vm.StatusId;
        });
        if (returnedData != null && returnedData.length > 0) {
          vm.StatusColor = returnedData[0].STATUS_COLOR;
          vm.StatusBgColor = returnedData[0].STATUS_BG_COLOR;
          if (vm.StatusColor == null || vm.StatusColor == '') {
            vm.StatusColor = '#ffffff';
            vm.StatusBgColor = '#525f65';
          } else {
            vm.StatusId = returnedData[0].STATUS_ID;
          }
        }
        //else {
        //    var itm = vm.StatusList.filter(function (entry) { return entry.STATUS == vm.dataselected; });
        //    ths.StatusId = itm[0].STATUS_ID;
        //}
      }
    },

    GetStatusList: function () {
      var list = [];
      var obj = {
        STATUS_ID: 1001,
        STATUS: Globalize.localize("Active"),
        STATUS_COLOR: '#ffffff',
        STATUS_BG_COLOR: '#28a745'
      };
      list.push(obj);
      obj = {
        STATUS_ID: 1002,
        STATUS: Globalize.localize("Inactive"),
        STATUS_COLOR: '#ffffff',
        STATUS_BG_COLOR: '#d72435'
      };
      list.push(obj);
      return list;
    },
    ChangeStatus: function (id, event, statusId) {
      var StatusName = event.target.selectedOptions[0].text;
      var vm = this;
      if (true) {
        var urlval = "";
        if (StatusName == "Closed" && vm.dataController + '/' + vm.isfor == "Crm/CRM_LEADS") {
          urlval = '/' + vm.dataController + '/CloseLeads';
        } else {
          urlval = '/' + vm.dataController + '/' + vm.dataAction;
        }
        if (vm.PrevStatus != $(event.target).attr("oldstatus")) {
          vm.PrevStatus = $(event.target).attr("oldstatus");
        }
        var msg = this.$t("ConfirmUpdateStatusRecord");
        var isFor = vm.isfor;
        if (vm.isfor == "TASKLISTING") {
          msg = vm.$t("ConfirmUpdateTaskStatus");
          if (vm.haschild == true) {
            msg = this.$t("ConfirmUpdateTaskStatus");
          } else if (vm.haschild == false && Number(vm.parentid) > 0) {
            msg = this.$t("ConfirmUpdateChildTaskStatus");
          } else {
            msg = this.$t("ConfirmUpdateStatusRecord");
          }
        }
        var isStatusChange = false;
        var inprogressStatusId = 0;
        var pendingStatusId = 0;
        $.each(vm.statuslist, function (filedIndex, fieldItem) {
          if (fieldItem.STATUS_CODE == "REFPEN") {
            pendingStatusId = fieldItem.STATUS_ID;
          } else if (fieldItem.STATUS_CODE == "PNPGRS") {
            InprogressStatusId = fieldItem.STATUS_ID;
          }
        });
        if (Number(vm.parentid) > 0 && vm.PrevStatus == "1002" && vm.StatusId == "1001") {
          isStatusChange = true;
        } else if (Number(vm.parentid) > 0 && vm.PrevStatus != "1002" && vm.StatusId == 1001) {
          isStatusChange = true;
        } else if (Number(vm.parentid) > 0 && vm.StatusId == Number(pendingStatusId)) {
          isStatusChange = true;
        } else if (Number(vm.parentid) > 0 && vm.StatusId == Number(InprogressStatusId)) {
          isStatusChange = true;
        }
        if (isStatusChange) {
          //msg = Globalize.localize("ConfirmUpdateChildTaskStatus");
          isFor = "TASKCHILDLISTING";
        }
        if (vm.isfor == "TASKLISTING") {
          if (isStatusChange) {
            msg = this.$t("ConfirmUpdateChildTaskStatus");
          } else {
            msg = this.$t("ConfirmUpdateTaskStatus");
          }
        }
        if ( /*GetPrivilege('/Project/UpdateProjectStatus', true, false)*/true) {
          vm.confirmR(msg, true, this.$t('UpdateCommonStatus'), function (result) {
            if (statusId) {
              vm.StatusId = statusId;
            }
            var VarObject = {
              ID: id,
              StatusId: vm.StatusId,
              IsFor: isFor
            };
            var objectPostString = JSON.stringify(VarObject);
            DataService["a" /* default */].CommonUpdateStatus(objectPostString).then(function (response) {
              if (response.data != null) {
                if (response.data.status === 'Success') {
                  vm.ShowAlert(vm.$t("RecordUpdatedSuccessfully"), "success", vm.$t('Alert'));
                  vm.PrevStatus = vm.StatusId;
                  if (typeof vm.callbackfunction != 'undefined' && vm.callbackfunction != null) {
                    vm.callbackfunction();
                  }
                } else {
                  vm.ShowAlert(vm.$t("UnknownErrorOccur"), "failure", true, vm.$t('Alert'));
                }
              } else {
                vm.ShowAlert(vm.$t("UnknownErrorOccur"), "failure", true, vm.$t('Alert'));
              }
            }, function (response) {});
          }, function (result) {
            vm.StatusId = vm.PrevStatus;
          });
        } else {}
        // }
        // else {
        //     vm.StatusId = vm.PrevStatus;
        // }
      } else {}
      //}
    }
  }
});
// CONCATENATED MODULE: ./src/components/Common/ListingStatus.vue?vue&type=script&lang=js&
 /* harmony default export */ var Common_ListingStatusvue_type_script_lang_js_ = (ListingStatusvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Common/ListingStatus.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Common_ListingStatusvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ListingStatus = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "df7e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var lengthOfArrayLike = __webpack_require__("07fa");

// https://tc39.es/proposal-change-array-by-copy/#sec-array.prototype.toReversed
// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.toReversed
module.exports = function (O, C) {
  var len = lengthOfArrayLike(O);
  var A = new C(len);
  var k = 0;
  for (; k < len; k++) A[k] = O[len - k - 1];
  return A;
};


/***/ }),

/***/ "dfb9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var lengthOfArrayLike = __webpack_require__("07fa");

module.exports = function (Constructor, list) {
  var index = 0;
  var length = lengthOfArrayLike(list);
  var result = new Constructor(length);
  while (length > index) result[index] = list[index++];
  return result;
};


/***/ }),

/***/ "e163":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hasOwn = __webpack_require__("1a2d");
var isCallable = __webpack_require__("1626");
var toObject = __webpack_require__("7b0b");
var sharedKey = __webpack_require__("f772");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "e177":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "eb1f":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".label_group .form-group{font-weight:500}.label_group .form-group span{font-weight:300;color:#777}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "ebb5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NATIVE_ARRAY_BUFFER = __webpack_require__("4b11");
var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");
var hasOwn = __webpack_require__("1a2d");
var classof = __webpack_require__("f5df");
var tryToString = __webpack_require__("0d51");
var createNonEnumerableProperty = __webpack_require__("9112");
var defineBuiltIn = __webpack_require__("cb2d");
var defineBuiltInAccessor = __webpack_require__("edd0");
var isPrototypeOf = __webpack_require__("3a9b");
var getPrototypeOf = __webpack_require__("e163");
var setPrototypeOf = __webpack_require__("d2bb");
var wellKnownSymbol = __webpack_require__("b622");
var uid = __webpack_require__("90e3");
var InternalStateModule = __webpack_require__("69f3");

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var Int8Array = global.Int8Array;
var Int8ArrayPrototype = Int8Array && Int8Array.prototype;
var Uint8ClampedArray = global.Uint8ClampedArray;
var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
var TypedArray = Int8Array && getPrototypeOf(Int8Array);
var TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);
var ObjectPrototype = Object.prototype;
var TypeError = global.TypeError;

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');
var TYPED_ARRAY_CONSTRUCTOR = 'TypedArrayConstructor';
// Fixing native typed arrays in Opera Presto crashes the browser, see #595
var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof(global.opera) !== 'Opera';
var TYPED_ARRAY_TAG_REQUIRED = false;
var NAME, Constructor, Prototype;

var TypedArrayConstructorsList = {
  Int8Array: 1,
  Uint8Array: 1,
  Uint8ClampedArray: 1,
  Int16Array: 2,
  Uint16Array: 2,
  Int32Array: 4,
  Uint32Array: 4,
  Float32Array: 4,
  Float64Array: 8
};

var BigIntArrayConstructorsList = {
  BigInt64Array: 8,
  BigUint64Array: 8
};

var isView = function isView(it) {
  if (!isObject(it)) return false;
  var klass = classof(it);
  return klass === 'DataView'
    || hasOwn(TypedArrayConstructorsList, klass)
    || hasOwn(BigIntArrayConstructorsList, klass);
};

var getTypedArrayConstructor = function (it) {
  var proto = getPrototypeOf(it);
  if (!isObject(proto)) return;
  var state = getInternalState(proto);
  return (state && hasOwn(state, TYPED_ARRAY_CONSTRUCTOR)) ? state[TYPED_ARRAY_CONSTRUCTOR] : getTypedArrayConstructor(proto);
};

var isTypedArray = function (it) {
  if (!isObject(it)) return false;
  var klass = classof(it);
  return hasOwn(TypedArrayConstructorsList, klass)
    || hasOwn(BigIntArrayConstructorsList, klass);
};

var aTypedArray = function (it) {
  if (isTypedArray(it)) return it;
  throw TypeError('Target is not a typed array');
};

var aTypedArrayConstructor = function (C) {
  if (isCallable(C) && (!setPrototypeOf || isPrototypeOf(TypedArray, C))) return C;
  throw TypeError(tryToString(C) + ' is not a typed array constructor');
};

var exportTypedArrayMethod = function (KEY, property, forced, options) {
  if (!DESCRIPTORS) return;
  if (forced) for (var ARRAY in TypedArrayConstructorsList) {
    var TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && hasOwn(TypedArrayConstructor.prototype, KEY)) try {
      delete TypedArrayConstructor.prototype[KEY];
    } catch (error) {
      // old WebKit bug - some methods are non-configurable
      try {
        TypedArrayConstructor.prototype[KEY] = property;
      } catch (error2) { /* empty */ }
    }
  }
  if (!TypedArrayPrototype[KEY] || forced) {
    defineBuiltIn(TypedArrayPrototype, KEY, forced ? property
      : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property, options);
  }
};

var exportTypedArrayStaticMethod = function (KEY, property, forced) {
  var ARRAY, TypedArrayConstructor;
  if (!DESCRIPTORS) return;
  if (setPrototypeOf) {
    if (forced) for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = global[ARRAY];
      if (TypedArrayConstructor && hasOwn(TypedArrayConstructor, KEY)) try {
        delete TypedArrayConstructor[KEY];
      } catch (error) { /* empty */ }
    }
    if (!TypedArray[KEY] || forced) {
      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
      try {
        return defineBuiltIn(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[KEY] || property);
      } catch (error) { /* empty */ }
    } else return;
  }
  for (ARRAY in TypedArrayConstructorsList) {
    TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
      defineBuiltIn(TypedArrayConstructor, KEY, property);
    }
  }
};

for (NAME in TypedArrayConstructorsList) {
  Constructor = global[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
  else NATIVE_ARRAY_BUFFER_VIEWS = false;
}

for (NAME in BigIntArrayConstructorsList) {
  Constructor = global[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
}

// WebKit bug - typed arrays constructors prototype is Object.prototype
if (!NATIVE_ARRAY_BUFFER_VIEWS || !isCallable(TypedArray) || TypedArray === Function.prototype) {
  // eslint-disable-next-line no-shadow -- safe
  TypedArray = function TypedArray() {
    throw TypeError('Incorrect invocation');
  };
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global[NAME]) setPrototypeOf(global[NAME], TypedArray);
  }
}

if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
  TypedArrayPrototype = TypedArray.prototype;
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global[NAME]) setPrototypeOf(global[NAME].prototype, TypedArrayPrototype);
  }
}

// WebKit bug - one more object in Uint8ClampedArray prototype chain
if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
  setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
}

if (DESCRIPTORS && !hasOwn(TypedArrayPrototype, TO_STRING_TAG)) {
  TYPED_ARRAY_TAG_REQUIRED = true;
  defineBuiltInAccessor(TypedArrayPrototype, TO_STRING_TAG, {
    configurable: true,
    get: function () {
      return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
    }
  });
  for (NAME in TypedArrayConstructorsList) if (global[NAME]) {
    createNonEnumerableProperty(global[NAME], TYPED_ARRAY_TAG, NAME);
  }
}

module.exports = {
  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQUIRED && TYPED_ARRAY_TAG,
  aTypedArray: aTypedArray,
  aTypedArrayConstructor: aTypedArrayConstructor,
  exportTypedArrayMethod: exportTypedArrayMethod,
  exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
  getTypedArrayConstructor: getTypedArrayConstructor,
  isView: isView,
  isTypedArray: isTypedArray,
  TypedArray: TypedArray,
  TypedArrayPrototype: TypedArrayPrototype
};


/***/ }),

/***/ "f495":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("c04e");

var $TypeError = TypeError;

// `ToBigInt` abstract operation
// https://tc39.es/ecma262/#sec-tobigint
module.exports = function (argument) {
  var prim = toPrimitive(argument, 'number');
  if (typeof prim == 'number') throw $TypeError("Can't convert number to bigint");
  // eslint-disable-next-line es/no-bigint -- safe
  return BigInt(prim);
};


/***/ }),

/***/ "f8cd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__("5926");

var $RangeError = RangeError;

module.exports = function (it) {
  var result = toIntegerOrInfinity(it);
  if (result < 0) throw $RangeError("The argument can't be less than 0");
  return result;
};


/***/ })

}]);
//# sourceMappingURL=chunk-8bae3bf6.js.map