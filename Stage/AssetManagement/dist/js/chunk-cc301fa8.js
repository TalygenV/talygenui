(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-cc301fa8"],{

/***/ "019b":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".c100.green .bar,.c100.green .fill{border-color:#8bc34a!important}.clr-1{color:#da9c49}.box-inner1{width:50px;height:45px;background:#da9c49}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "38f3":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("019b");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("ed12847e", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "65b2":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".EnableSections .green{color:green;margin-right:5px}.conversation-date .slider.round{border-radius:34px;border:none!important}.conversation-date .slider.round span{border:none}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "8c76":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AdvancedSetup/AdvancedSetting.vue?vue&type=template&id=786bae2a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "page-action"
  }, [_c('div', {
    staticClass: "container-fluid mb-4 p-0"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12 padding-t_8"
  }, [_c('div', {
    staticClass: "theme-primary partition p-actions-expand tablehead"
  }, [_c('span', {
    staticClass: "p-name text-white"
  }, [_vm._v(_vm._s(_vm.$t('AdvanceSetup')))]), _c('span', {
    staticClass: "p-actions float-right"
  }, [_c('RouterLink', {
    staticClass: "p-action-btn text-white float-right",
    attrs: {
      "to": '/File/Dashboard',
      "title": "",
      "id": "backtolist",
      "data-original-title": _vm.$t('BacktoList')
    }
  }, [_c('em', {
    staticClass: "fa fa-angle-double-left pr-2"
  }), _c('br'), _vm._v(_vm._s(_vm.$t('BacktoList')) + " ")])], 1)])])])]), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12 col-md-10 mx-auto"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12 col-lg-6"
  }, [_c('a', {
    staticClass: "doc-setup short-menu-item bg-white px-0 py-4 my-2 position-relative",
    attrs: {
      "onmousedown": "return false;",
      "href": "javascript:void(0)",
      "data-toggle-tooltip": "tooltip",
      "data-original-title": "Work Diary"
    },
    on: {
      "click": function ($event) {
        return _vm.showadvancesettingpopup('setup');
      }
    }
  }, [_vm._m(0), _c('div', {
    staticClass: "col-md-9 col-lg-8 col-xl-9 col-sm-9 col-9"
  }, [_c('h5', {
    staticClass: "card-title font-16 mb-0"
  }, [_vm._v(_vm._s(_vm.$t('SetupAssetManagement')))]), _c('p', {
    staticClass: "card-text font-12 pr-5"
  }, [_vm._v(_vm._s(_vm.$t('SetTheModuleSimpleStep')))]), _vm.windowHeight <= 568 ? _c('div', {
    staticClass: "progress smaller mr-5 my-2"
  }, [_c('div', {
    staticClass: "progress-bar progress-bar-primary progress-bar px-0 text-center memoryused",
    class: `${_vm.progressColor}`,
    style: `width: ${_vm.SetupProgress}%; font-weight:500; font-size:14px`,
    attrs: {
      "s": "",
      "id": "divConsumendStorage",
      "title": _vm.SetupProgress
    }
  }, [_vm._v(_vm._s(_vm.SetupProgress) + "% ")])]) : _vm._e()]), _c('div', {
    staticClass: "col-md-2"
  }, [_c('span', {
    staticClass: "barprogress"
  }, [_c('div', {
    staticClass: "Task mt-2"
  }, [_vm.windowHeight > 568 ? _c('div', {
    staticClass: "c100 small",
    class: [_vm.progressColor, 'p' + _vm.SetupProgress]
  }, [_c('span', [_vm._v(_vm._s(_vm.SetupProgress) + "%")]), _vm._m(1)]) : _vm._e()])])]), _vm._m(2)])]), _c('div', {
    staticClass: "col-md-12 col-lg-6"
  }, [_c('a', {
    staticClass: "doc-setup short-menu-item bg-white px-0 py-4 my-2 position-relative",
    attrs: {
      "onmousedown": "return false;",
      "href": "javascript:void(0)",
      "data-toggle-tooltip": "tooltip",
      "data-original-title": "Work Diary"
    },
    on: {
      "click": function ($event) {
        return _vm.showadvancesettingpopup('Configuration');
      }
    }
  }, [_vm._m(3), _c('div', {
    staticClass: "col-md-9 col-lg-8 col-xl-9 col-sm-9 col-9",
    attrs: {
      "id": "Userlist"
    },
    on: {
      "click": function ($event) {
        return _vm.showadvancesettingpopup('Configuration');
      }
    }
  }, [_c('h5', {
    staticClass: "card-title font-16 mb-0"
  }, [_vm._v(_vm._s(_vm.$t('Configuration')))]), _c('p', {
    staticClass: "card-text font-12 pr-5"
  }, [_vm._v(_vm._s(_vm.$t('ConfigureModulePerTheRequirements')))])]), _vm._m(4)])]), _c('div', {
    staticClass: "col-md-12 col-lg-6",
    on: {
      "click": function ($event) {
        return _vm.openenablesectionpopup('EnableSections');
      }
    }
  }, [_c('a', {
    staticClass: "doc-setup short-menu-item bg-white px-0 py-4 my-2 position-relative",
    attrs: {
      "onmousedown": "return false;",
      "href": "javascript:void(0)"
    },
    on: {
      "click": function ($event) {
        return _vm.showadvancesettingpopup('EnableDisableSection');
      }
    }
  }, [_vm._m(5), _c('div', {
    staticClass: "col-md-9 col-lg-8 col-xl-9 col-sm-9 col-9"
  }, [_c('h5', {
    staticClass: "card-title font-16 mb-0"
  }, [_vm._v(_vm._s(_vm.$t('EnableDisableSections')))]), _c('p', {
    staticClass: "card-text font-12 pr-5"
  }, [_vm._v(_vm._s(_vm.$t('EnableSections.')))])]), _vm._m(6)])])])])]), _vm._m(7), _c('div', {
    staticClass: "col-12 col-md-10 m-auto"
  }, [_c('div', {
    staticClass: "listing"
  }, [_vm._m(8), _c('div', {
    staticClass: "row card-view bg-border custom-box-width"
  }, [_c('div', {
    staticClass: "col-sm-12 col-lg-3 col-xl-2 col-md-12 div-cardView",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_c('div', {
    staticClass: "box docattachment py-5 my-3 border",
    attrs: {
      "role": "button",
      "data-v-3630b19d": ""
    }
  }, [_c('i', {
    staticClass: "nxt-page-icon fa fa-share-square-o",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._m(9), _c('div', {
    staticClass: "row mx-0 align-items-end",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_c('div', {
    staticClass: "col-md-12 font-14 mt-2 text-center",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('ManageTags')))])])])]), _vm._m(10), _c('div', {
    staticClass: "col-sm-12 col-lg-3 col-xl-2 col-md-12 div-cardView",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_c('div', {
    staticClass: "box docattachment py-5 my-3 border",
    attrs: {
      "role": "button",
      "data-v-3630b19d": ""
    }
  }, [_c('i', {
    staticClass: "nxt-page-icon fa fa-share-square-o",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._m(11), _c('div', {
    staticClass: "row mx-0 align-items-end",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_c('div', {
    staticClass: "col-md-12 font-14 mt-2 text-center",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('Tags')))])])])]), _vm._m(12), _c('div', {
    staticClass: "col-sm-12 col-lg-3 col-xl-2 col-md-12 div-cardView",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_c('div', {
    staticClass: "box docattachment py-5 my-3 border",
    attrs: {
      "role": "button",
      "data-v-3630b19d": ""
    }
  }, [_c('i', {
    staticClass: "nxt-page-icon fa fa-share-square-o",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._m(13), _c('div', {
    staticClass: "row mx-0 align-items-end",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_c('div', {
    staticClass: "col-md-12 font-14 mt-2 text-center",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('Location')))])])])]), _vm._m(14), _c('div', {
    staticClass: "col-sm-12 col-lg-3 col-xl-2 col-md-12 div-cardView",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_c('div', {
    staticClass: "box docattachment py-5 my-3 border",
    attrs: {
      "role": "button",
      "data-v-3630b19d": ""
    }
  }, [_c('i', {
    staticClass: "nxt-page-icon fa fa-share-square-o",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._m(15), _c('div', {
    staticClass: "row mx-0 align-items-end",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_c('div', {
    staticClass: "col-md-12 font-14 mt-2 text-center",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('Product Type')))])])])]), _c('div', {
    staticClass: "col-sm-12 col-lg-3 col-xl-2 col-md-12 div-cardView",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_c('div', {
    staticClass: "box docattachment py-5 my-3 border",
    attrs: {
      "role": "button",
      "data-v-3630b19d": ""
    }
  }, [_c('i', {
    staticClass: "nxt-page-icon fa fa-share-square-o",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._m(16), _c('div', {
    staticClass: "row mx-0 align-items-end",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_c('div', {
    staticClass: "col-md-12 font-14 mt-2 text-center",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('Status')))])])])])])])]), _vm.IsshowConfiguration == true ? _c('AdvanceSettingModal', {
    attrs: {
      "popupCondition": _vm.popupConfiguration,
      "IsVisible": _vm.IsshowConfiguration
    }
  }) : _vm._e(), _vm.showpopup == true ? _c('addProduct', {
    attrs: {
      "popupCondition": _vm.popupCondition,
      "IsVisible": _vm.showpopup
    }
  }) : _vm._e(), _vm.EnableSectionspop ? _c('EnableSections', {
    on: {
      "closeenablesectionpopup": _vm.closeenablesectionpopup
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-md-1 col-lg-2 col-xl-1 col-sm-1 col-2"
  }, [_c('span', {
    staticClass: "px-2"
  }, [_c('i', {
    staticClass: "fa fa fa-cog clr-4 font-30",
    attrs: {
      "aria-hidden": "true"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "slice"
  }, [_c('div', {
    staticClass: "bar"
  }), _c('div', {
    staticClass: "fill"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', {
    staticClass: "tickarrowposition d-flex align-items-center"
  }, [_c('i', {
    staticClass: "fa fa-angle-right m-auto text-dark font-20",
    attrs: {
      "aria-hidden": "true"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-md-1 col-lg-2 col-xl-1 col-sm-1 col-2"
  }, [_c('span', {
    staticClass: "px-2"
  }, [_c('i', {
    staticClass: "fa fa fa-cog clr-1 font-30",
    attrs: {
      "aria-hidden": "true"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', {
    staticClass: "tickarrowposition d-flex align-items-center"
  }, [_c('i', {
    staticClass: "fa fa-angle-right m-auto text-dark font-20",
    attrs: {
      "aria-hidden": "true"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-md-1 col-lg-2 col-xl-1 col-sm-1 col-2"
  }, [_c('span', {
    staticClass: "px-2"
  }, [_c('i', {
    staticClass: "fa fa-puzzle-piece font-28",
    attrs: {
      "aria-hidden": "true"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', {
    staticClass: "tickarrowposition d-flex align-items-center"
  }, [_c('i', {
    staticClass: "fa fa-angle-right m-auto text-dark font-20",
    attrs: {
      "aria-hidden": "true"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-12 text-center float-left"
  }, [_c('h5', {
    staticClass: "my-4"
  }, [_vm._v("More Settings")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "row"
  }, [_c('h6', {
    staticClass: "ml-3 mb-0"
  }, [_vm._v("Asset Management Setting")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "box-inner4 d-flex align-items-center m-auto",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_c('i', {
    staticClass: "fa fa-tags font-20 m-auto text-white",
    attrs: {
      "aria-hidden": "true"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-sm-12 col-lg-3 col-xl-2 col-md-12 div-cardView",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_c('div', {
    staticClass: "box docattachment py-5 border my-3",
    attrs: {
      "role": "button",
      "data-v-3630b19d": ""
    }
  }, [_c('i', {
    staticClass: "nxt-page-icon fa fa-share-square-o",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('div', {
    staticClass: "box-inner2 d-flex align-items-center m-auto",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_c('i', {
    staticClass: "fa fa-cog font-20 m-auto text-white",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _c('div', {
    staticClass: "row mx-0 align-items-end",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_c('div', {
    staticClass: "col-md-12 font-14 mt-2 text-center",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_vm._v("Rile Engine")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "box-inner4 d-flex align-items-center m-auto",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_c('i', {
    staticClass: "fa fa-tags font-20 m-auto text-white",
    attrs: {
      "aria-hidden": "true"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-sm-12 col-lg-3 col-xl-2 col-md-12 div-cardView",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_c('div', {
    staticClass: "box docattachment py-5 my-3 border",
    attrs: {
      "role": "button",
      "data-v-3630b19d": ""
    }
  }, [_c('i', {
    staticClass: "nxt-page-icon fa fa-share-square-o",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('div', {
    staticClass: "box-inner4 d-flex align-items-center m-auto",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_c('i', {
    staticClass: "fa fa-envelope font-20 m-auto text-white",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _c('div', {
    staticClass: "row mx-0 align-items-end",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_c('div', {
    staticClass: "col-md-12 font-14 mt-2 text-center",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_vm._v("Email Template")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "box-inner4 d-flex align-items-center m-auto",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_c('i', {
    staticClass: "fa fa-map-marker font-20 m-auto text-white",
    attrs: {
      "aria-hidden": "true"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-sm-12 col-lg-3 col-xl-2 col-md-12 div-cardView",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_c('div', {
    staticClass: "box docattachment py-5 my-3 border",
    attrs: {
      "role": "button",
      "data-v-3630b19d": ""
    }
  }, [_c('i', {
    staticClass: "nxt-page-icon fa fa-share-square-o",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('div', {
    staticClass: "box-inner4 d-flex align-items-center m-auto",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_c('i', {
    staticClass: "fa fa-tags font-20 m-auto text-white",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _c('div', {
    staticClass: "row mx-0 align-items-end",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_c('div', {
    staticClass: "col-md-12 font-14 mt-2 text-center",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_vm._v("Product Container List")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "box-inner4 d-flex align-items-center m-auto",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_c('i', {
    staticClass: "fa fa-tags font-20 m-auto text-white",
    attrs: {
      "aria-hidden": "true"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "box-inner4 d-flex align-items-center m-auto",
    attrs: {
      "data-v-3630b19d": ""
    }
  }, [_c('i', {
    staticClass: "fa fa-tags font-20 m-auto text-white",
    attrs: {
      "aria-hidden": "true"
    }
  })]);
}];

// CONCATENATED MODULE: ./src/views/AdvancedSetup/AdvancedSetting.vue?vue&type=template&id=786bae2a&

// EXTERNAL MODULE: ./src/components/Modal/AddProduct.vue + 9 modules
var AddProduct = __webpack_require__("191f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AdvancedSetup/MoadalAdvanceSetup.vue?vue&type=template&id=5c56bf65&
var MoadalAdvanceSetupvue_type_template_id_5c56bf65_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "my-popups modal right fade show",
    staticStyle: {
      "display": "block"
    },
    attrs: {
      "role": "dialog"
    }
  }, [_c('div', {
    staticClass: "modal d-block",
    attrs: {
      "tabindex": "-1",
      "role": "dialog"
    }
  }, [_c('div', {
    staticClass: "modal-dialog doc-setup-slide"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('div', {
    staticClass: "modal-header mheader-user py-0"
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function ($event) {
        return _vm.close();
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-times",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _c('h4', {
    staticClass: "modal-title py-3"
  }, [_vm._v(_vm._s(_vm.$t('Configuration')))])]), _c('div', {
    staticClass: "modal-body bg-white"
  }, [_c('section', {
    staticClass: "container-fluid p-0"
  }, [_c('div', {
    staticClass: "left-menu-tab new_tab"
  }, [_c('div', {
    staticClass: "mt-0",
    staticStyle: {
      "max-height": "calc(100vh - 2px)"
    },
    attrs: {
      "id": "divscrollsetuptabs"
    }
  }, [_vm.popupCondition == 'Configuration' ? _c('ul', {
    staticClass: "nav nav-pills flex-column left-tab responivecustomtab lefttabiconfix newtab_des"
  }, [_c('li', {
    staticClass: "nav-item FourthScreen",
    on: {
      "click": function ($event) {
        return _vm.SkipTab(1);
      }
    }
  }, [_c('a', {
    staticClass: "nav-link left-menu",
    class: {
      'active': _vm.step == 1
    },
    staticStyle: {
      "cursor": "pointer"
    }
  }, [_c('i', {
    staticClass: "fa fa-user pr-2 text-muted",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "font-14"
  }, [_vm._v(_vm._s(_vm.$t('General')))])])]), _c('li', {
    staticClass: "nav-item SecondScreen",
    on: {
      "click": function ($event) {
        return _vm.SkipTab(2);
      }
    }
  }, [_c('a', {
    staticClass: "nav-link left-menu",
    class: {
      'active': _vm.step == 2
    },
    staticStyle: {
      "cursor": "pointer"
    }
  }, [_c('i', {
    staticClass: "fa fa-check pr-2 text-muted",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "font-14"
  }, [_vm._v(_vm._s(_vm.$t('Approval')))])])]), _c('li', {
    staticClass: "nav-item ThirdScreen",
    on: {
      "click": function ($event) {
        return _vm.SkipTab(3);
      }
    }
  }, [_c('a', {
    staticClass: "nav-link left-menu",
    class: {
      'active': _vm.step == 3
    },
    staticStyle: {
      "cursor": "pointer"
    }
  }, [_c('i', {
    staticClass: "fa fa-plus pr-2 text-muted",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm.IsClientStoragesCopmleted == true ? _c('i', {
    staticClass: "fa fa-check-circle font-18 pr-2 text-success",
    attrs: {
      "aria-hidden": "true"
    }
  }) : _vm._e(), _c('span', {
    staticClass: "font-14"
  }, [_vm._v(_vm._s(_vm.$t('ProductManagement')))])])])]) : _vm._e()])]), _c('div', {
    staticClass: "right-content"
  }, [_vm.popupCondition == 'Configuration' ? _c('div', {
    staticClass: "col-md-12 p-0"
  }, [_vm.popupCondition == 'Configuration' ? _c('Configuration', {
    attrs: {
      "CurrentTab": _vm.CurrentTab
    }
  }) : _vm._e()], 1) : _vm._e()])])])])])])]);
};
var MoadalAdvanceSetupvue_type_template_id_5c56bf65_staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/AdvancedSetup/MoadalAdvanceSetup.vue?vue&type=template&id=5c56bf65&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AdvancedSetup/Configuration.vue?vue&type=template&id=1a53f894&
var Configurationvue_type_template_id_1a53f894_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-md-12 p-0"
  }, [_c('div', {
    staticClass: "tab-content"
  }, [_vm.CurrentTab == 1 ? _c('div', {
    staticClass: "tab-pane call-detail fade p-0 border pb-3 active show",
    attrs: {
      "id": "step1"
    }
  }, [_c('section', {
    staticClass: "page-action w-100"
  }, [_c('div', {
    staticClass: "container-fluid p-0"
  }, [_c('div', {
    staticClass: "col-md-12 p-0 mt-3"
  }, [_c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 prof_control float-left",
    attrs: {
      "id": "ulKeysContainer"
    }
  }, [_c('div', {
    staticClass: "container-fluid p-0"
  }, [_c('div', {
    staticClass: "col-md-12 p-0"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('Form', {
    ref: "form",
    staticClass: "col-12 p-0",
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        values,
        errors
      }) {
        return [_vm._l(_vm.allConfigData, function (item, allConfigDataIndex) {
          return _c('div', {
            key: 'configdata-1' + allConfigDataIndex,
            staticClass: "col-sm-12 col-md-12 float-left col-lg-6 col-xl-6"
          }, [item.CORE_CONFIG_TYPE == 'dropdown' && item.CORE_CONFIG_KEY != 'TimeZone' && item.CORE_CONFIG_KEY != 'Currency' ? _c('div', {
            staticClass: "form-group projectConfig"
          }, [_c('label', [_c('span', [_vm._v(" " + _vm._s(item.CORE_CONFIG_DESC) + " ")]), _c('span', {
            staticClass: "text-danger"
          }, [_vm._v("*")]), _c('a', {
            attrs: {
              "href": "javascript:;",
              "data-toggle": "popoveruserguide",
              "data-content": item.CORE_CONFIG_DESC
            }
          }, [_c('i', {
            staticClass: "fa fa-question-circle-o text-popover"
          })])]), _c('Field', {
            attrs: {
              "rules": {
                'required': true
              },
              "name": "item.CORE_CONFIG_DESC"
            },
            scopedSlots: _vm._u([{
              key: "default",
              fn: function ({
                errors
              }) {
                return [item.CORE_CONFIG_KEY != 'Currency' ? _c('select', {
                  directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: item.CORE_CONFIG_VALUE,
                    expression: "item.CORE_CONFIG_VALUE"
                  }],
                  staticClass: "select form-control",
                  attrs: {
                    "keys": item.CORE_CONFIG_ID,
                    "name": "EnableLocationTrackingModule"
                  },
                  on: {
                    "change": function ($event) {
                      var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                        return o.selected;
                      }).map(function (o) {
                        var val = "_value" in o ? o._value : o.value;
                        return val;
                      });
                      _vm.$set(item, "CORE_CONFIG_VALUE", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
                    }
                  }
                }, _vm._l(_vm.Getoption(item.CORE_CONFIG_OPTIONS), function (items, GetoptionIndex) {
                  return _c('option', {
                    key: GetoptionIndex,
                    domProps: {
                      "value": items
                    }
                  }, [_vm._v(" " + _vm._s(items) + " ")]);
                }), 0) : _vm._e(), _c('span', {
                  staticClass: "invalid-feedback d-block",
                  attrs: {
                    "name": "EnableLocationTrackingModule",
                    "id": "EnableLocationTrackingModule"
                  }
                }, [_vm._v(_vm._s(errors[0]))])];
              }
            }], null, true)
          })], 1) : _vm._e()]);
        }), _vm._l(_vm.allConfigData, function (item, allConfigIndex) {
          return _c('div', {
            key: 'configdata-2' + allConfigIndex,
            staticClass: "col-sm-12 col-md-12 float-left col-lg-6 col-xl-6"
          }, [item.CORE_CONFIG_TYPE == 'text' ? _c('div', {
            staticClass: "form-group projectConfig"
          }, [_c('label', [_c('span', [_vm._v(" " + _vm._s(item.CORE_CONFIG_DESC) + " ")]), _c('span', {
            staticClass: "text-danger"
          }, [_vm._v("*")]), _c('a', {
            attrs: {
              "href": "javascript:;",
              "data-content": item.CORE_CONFIG_DESC,
              "data-toggle": "popoveruserguide"
            }
          }, [_c('i', {
            staticClass: "fa fa-question-circle-o text-popover",
            staticStyle: {
              "font-size": "14px"
            }
          })])]), _c('input', {
            staticClass: "textfield form-control",
            attrs: {
              "keys": item.CORE_CONFIG_ID,
              "type": "text",
              "name": item.CORE_CONFIG_DESC
            },
            domProps: {
              "value": item.CORE_CONFIG_VALUE
            }
          }), _c('span', {
            staticClass: "invalid-feedback d-block",
            attrs: {
              "name": "LocationTracking",
              "id": "LocationTracking"
            }
          })]) : _vm._e()]);
        }), _c('div', {
          staticClass: "col-sm-12 col-md-12 float-left col-lg-6 col-xl-6"
        }, [_c('div', {
          staticClass: "form-group projectConfig"
        }, [_c('label', [_c('span', [_vm._v("Company Time Zone:")]), _c('span', {
          staticClass: "text-danger"
        }, [_vm._v("*")]), _c('a', {
          attrs: {
            "href": "javascript:;",
            "data-toggle": "popoveruserguide",
            "data-content": "Company Time Zone"
          }
        }, [_c('i', {
          staticClass: "fa fa-question-circle-o text-popover"
        })])]), _c('Field', {
          attrs: {
            "name": "TimeZone",
            "rules": {
              'required': true
            },
            "label": "TimeZone"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              errors
            }) {
              return [_c('select', {
                staticClass: "select form-control",
                attrs: {
                  "keys": _vm.timeZoneKeys
                },
                domProps: {
                  "value": _vm.getTimeZone
                }
              }, _vm._l(_vm.timeZone, function (item, timeZoneIndex) {
                return _c('option', {
                  key: timeZoneIndex,
                  domProps: {
                    "value": item.code
                  }
                }, [_vm._v(" " + _vm._s(item.value) + " ")]);
              }), 0), _c('span', {
                staticClass: "invalid-feedback d-block",
                attrs: {
                  "name": "TimeZone",
                  "id": "TimeZone"
                }
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true),
          model: {
            value: _vm.getTimeZone,
            callback: function ($$v) {
              _vm.getTimeZone = $$v;
            },
            expression: "getTimeZone"
          }
        })], 1)]), _c('div', {
          staticClass: "col-sm-12 col-md-12 float-left col-lg-6 col-xl-6"
        }, [_c('div', {
          staticClass: "form-group projectConfig"
        }, [_c('label', [_c('span', [_vm._v("Company Logo:")]), _c('span', {
          staticClass: "text-danger"
        }, [_vm._v("*")]), _c('a', {
          attrs: {
            "href": "javascript:;",
            "data-toggle": "popoveruserguide",
            "data-content": "Company Logo"
          }
        }, [_c('i', {
          staticClass: "fa fa-question-circle-o text-popover",
          staticStyle: {
            "font-size": "14px"
          }
        })])]), _c('div', {
          staticClass: "row"
        }, [_c('div', {
          staticClass: "col-lg-12 col-md-12 mb-1 mt-0 custom-file uploadimg",
          attrs: {
            "id": "divFiles"
          }
        }, [_c('input', {
          staticClass: "form-control",
          staticStyle: {
            "position": "absolute",
            "clip": "rect(0px, 0px, 0px, 0px)"
          },
          attrs: {
            "type": "file",
            "name": "attach",
            "id": "flFile",
            "tabindex": "-1"
          },
          on: {
            "change": function ($event) {
              return _vm.setFile(values, _vm.meta, $event);
            }
          }
        }), _c('div', {
          staticClass: "bootstrap-filestyle input-group"
        }, [_c('Field', {
          attrs: {
            "rules": {
              required: true
            },
            "name": "Company Logo"
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
                  value: _vm.attachmentDiv,
                  expression: "attachmentDiv"
                }],
                staticClass: "form-control disabled",
                attrs: {
                  "type": "text",
                  "id": "CompanyLogoCoreConfigId",
                  "disabled": ""
                },
                domProps: {
                  "value": _vm.attachmentDiv
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.attachmentDiv = $event.target.value;
                  }
                }
              }), errors[0] ? _c('span', {
                staticClass: "invalid-feedback",
                attrs: {
                  "name": "CompanyLogo",
                  "id": "CompanyLogoId"
                }
              }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
            }
          }], null, true)
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
            "for": "flFile"
          }
        }, [_vm._v("Choose File")])]), _c('span', {
          staticClass: "input-group-text border-0 bg-transparent p-0 pl-2"
        }, [_c('a', {
          staticClass: "round-icon-small btn-danger-light clsattclear",
          attrs: {
            "href": "javascript:;",
            "title": "Clear"
          },
          on: {
            "click": _vm.Clearimagevalue
          }
        }, [_c('i', {
          staticClass: "fa fa-undo"
        })]), _c('a', {
          staticClass: "round-icon-small btn-danger-light clsattremove d-none",
          attrs: {
            "href": "javascript:;",
            "title": "Remove"
          }
        }, [_c('i', {
          staticClass: "fa fa-times"
        })])])])], 1), _c('span', {
          staticClass: "field-validation-valid",
          attrs: {
            "id": "spnFile",
            "data-valmsg-for": "FileSrc"
          }
        })]), _c('div', {
          staticClass: "col-lg-5 col-md-12 mt-0 position-relative displayimg",
          staticStyle: {
            "max-width": "300px",
            "min-width": "300px"
          }
        }, [_c('div', {
          staticClass: "float-left",
          staticStyle: {
            "border": "1px solid #f2f2f2",
            "padding": "2px 14px"
          }
        }, [_c('img', {
          key: "29",
          staticStyle: {
            "max-height": "70px"
          },
          attrs: {
            "id": "CompanyLogo",
            "src": _vm.blobUrl,
            "width": "200",
            "alt": "Image"
          }
        })]), _c('div', {
          staticClass: "float-left"
        }, [_c('a', {
          staticClass: "remove round-icon-small btn-dark",
          attrs: {
            "href": "javascript:;"
          },
          on: {
            "click": _vm.ClearImage
          }
        }, [_c('i', {
          staticClass: "fa fa-times",
          attrs: {
            "title": "Remove",
            "alt": "Remove"
          }
        })])])])])])]), _c('div', {
          staticClass: "col-sm-12 col-md-12 float-left col-lg-6 col-xl-6"
        }, [_c('div', {
          staticClass: "form-group projectConfig"
        }, [_c('label', [_c('span', [_vm._v("Currency:")]), _c('span', {
          staticClass: "text-danger"
        }, [_vm._v("*")]), _c('a', {
          attrs: {
            "href": "javascript:;",
            "data-toggle": "popoveruserguide",
            "data-content": "Currency"
          }
        }, [_c('i', {
          staticClass: "fa fa-question-circle-o text-popover"
        })])]), _c('Field', {
          attrs: {
            "rules": {
              'required': true
            },
            "name": "Currency Value"
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
                  value: _vm.getCurrencyValue,
                  expression: "getCurrencyValue"
                }],
                staticClass: "select form-control",
                attrs: {
                  "keys": _vm.getCurrencyValueCoreConfigId
                },
                domProps: {
                  "value": _vm.getCurrencyValue
                },
                on: {
                  "change": function ($event) {
                    var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                      return o.selected;
                    }).map(function (o) {
                      var val = "_value" in o ? o._value : o.value;
                      return val;
                    });
                    _vm.getCurrencyValue = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
                  }
                }
              }, _vm._l(_vm.currency, function (item, currencyIndex) {
                return _c('option', {
                  key: currencyIndex,
                  domProps: {
                    "value": item.CurrencyId
                  }
                }, [_vm._v(" " + _vm._s(item.Currency) + " ")]);
              }), 0), _c('span', {
                staticClass: "invalid-feedback d-block",
                attrs: {
                  "name": "Currency",
                  "id": "Currency"
                }
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        })], 1)]), _vm._l(_vm.allConfigData, function (item, index) {
          return _c('div', {
            staticClass: "col-sm-12 col-md-12 float-left col-lg-6 col-xl-6",
            attrs: {
              "id": "radios",
              "type": "radiobutton"
            }
          }, [item.CORE_CONFIG_TYPE == 'radiobutton' ? _c('label', [_c('span', [_vm._v(" " + _vm._s(item.CORE_CONFIG_DESC) + " ")]), _c('span', {
            staticClass: "text-danger"
          }, [_vm._v("*")]), _c('a', {
            attrs: {
              "href": "javascript:;",
              "data-toggle": "popoveruserguide",
              "data-content": item.CORE_CONFIG_DESC,
              "data-original-title": "",
              "title": ""
            }
          }, [_c('i', {
            staticClass: "fa fa-question-circle-o text-popover",
            staticStyle: {
              "font-size": "14px"
            }
          })])]) : _vm._e(), item.CORE_CONFIG_TYPE == 'radiobutton' ? _c('div', {
            staticClass: "rad_value",
            attrs: {
              "type": "radiobutton",
              "keys": item.CORE_CONFIG_ID
            }
          }, _vm._l(_vm.Getoption(item.CORE_CONFIG_OPTIONS), function (items) {
            return _c('label', {
              staticClass: "cogfiglbl form-check form-check-inline"
            }, [_c('div', {
              staticClass: "custom-control custom-radio custom-control-inline"
            }, [_c('input', {
              directives: [{
                name: "model",
                rawName: "v-model",
                value: item.CORE_CONFIG_VALUE,
                expression: "item.CORE_CONFIG_VALUE"
              }],
              staticClass: "custom-control-input",
              attrs: {
                "type": "radio",
                "name": item.CORE_CONFIG_DESC
              },
              domProps: {
                "value": items,
                "checked": _vm._q(item.CORE_CONFIG_VALUE, items)
              },
              on: {
                "change": function ($event) {
                  return _vm.$set(item, "CORE_CONFIG_VALUE", items);
                }
              }
            }), _c('label', {
              staticClass: "custom-control-label",
              attrs: {
                "for": 'rdo_' + index
              }
            })]), _vm._v(_vm._s(items == 'no' ? 'No' : 'Yes') + " ")]);
          }), 0) : _vm._e()]);
        }), _c('div', {
          staticClass: "col-sm-12 col-md-12 float-left col-lg-12 col-xl-12"
        }, [_c('div', {
          staticClass: "row flex-row-reverse"
        }, [_c('div', {
          staticClass: "col-lg-6 text-right"
        }, [_c('a', {
          staticClass: "btn btn-secondary formbtn",
          attrs: {
            "id": "hlkCancel",
            "href": "javascript:;",
            "title": "Cancel"
          },
          on: {
            "click": function ($event) {
              return _vm.closePopup();
            }
          }
        }, [_c('i', {
          staticClass: "fa fa-save pr-2"
        }), _vm._v("Cancel")]), _vm._v("   "), _c('a', {
          staticClass: "btn btn-success formbtn",
          attrs: {
            "id": "hlkSave",
            "issecurityprompt": "IsSecurityPrompt",
            "href": "javascript:;",
            "title": "Save"
          },
          on: {
            "click": function ($event) {
              return _vm.SaveConfiguration(values, errors);
            }
          }
        }, [_c('i', {
          staticClass: "fa fa-save pr-2"
        }), _vm._v("Save")])])])])];
      }
    }], null, false, 3074132448)
  })], 1)])])]), _vm._m(0)])])])]) : _vm._e(), _vm.CurrentTab == 2 ? _c('div', {
    staticClass: "tab-pane call-detail fade border pb-3 active show",
    attrs: {
      "id": "step2"
    }
  }, [_c('section', {
    staticClass: "page-action w-100"
  }, [_c('div', {
    staticClass: "container-fluid"
  }, [_c('div', {
    staticClass: "col-md-12 p-0"
  }, [_c('div', {
    staticClass: "col-12 float-left p-0"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "form-group projectConfig"
  }, [_vm._m(1), _c('div', {
    staticClass: "rad_value",
    attrs: {
      "type": "radiobutton"
    }
  }, [_c('label', {
    staticClass: "cogfiglbl form-check form-check-inline"
  }, [_c('div', {
    staticClass: "custom-control custom-radio custom-control-inline"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.IsClientAutoActivated,
      expression: "IsClientAutoActivated"
    }],
    staticClass: "custom-control-input",
    attrs: {
      "type": "radio",
      "name": "SendNotificationsToClient",
      "value": "Yes",
      "id": "rdo_0"
    },
    domProps: {
      "checked": _vm._q(_vm.IsClientAutoActivated, "Yes")
    },
    on: {
      "change": function ($event) {
        _vm.IsClientAutoActivated = "Yes";
      }
    }
  }), _c('label', {
    staticClass: "custom-control-label",
    attrs: {
      "for": "rdo_0"
    }
  })]), _vm._v("Yes ")]), _c('label', {
    staticClass: "cogfiglbl form-check form-check-inline"
  }, [_c('div', {
    staticClass: "custom-control custom-radio custom-control-inline"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.IsClientAutoActivated,
      expression: "IsClientAutoActivated"
    }],
    staticClass: "custom-control-input",
    attrs: {
      "type": "radio",
      "name": "SendNotificationsToClient",
      "value": "No",
      "id": "rdo_1"
    },
    domProps: {
      "checked": _vm._q(_vm.IsClientAutoActivated, "No")
    },
    on: {
      "change": function ($event) {
        _vm.IsClientAutoActivated = "No";
      }
    }
  }), _c('label', {
    staticClass: "custom-control-label",
    attrs: {
      "for": "rdo_1"
    }
  })]), _vm._v("No ")])])])]), _c('div', {
    staticClass: "col-12 mt-3 p-0"
  }, [_c('div', {
    staticClass: "col-lg-6 text-right float-right"
  }, [_c('a', {
    staticClass: "btn btn-secondary formbtn",
    attrs: {
      "id": "hlkCancel",
      "href": "javascript:;",
      "title": "Cancel"
    },
    on: {
      "click": function ($event) {
        return _vm.closePopup();
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-save pr-2"
  }), _vm._v("Cancel")]), _vm._v("   "), _c('a', {
    staticClass: "btn btn-success formbtn",
    attrs: {
      "href": "javascript:;",
      "title": "Save"
    },
    on: {
      "click": function ($event) {
        return _vm.saveClientConfiguration();
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-save pr-2"
  }), _vm._v("Save")])]), _vm._m(2)])])])])])])]) : _vm._e(), _vm.CurrentTab == 3 ? _c('div', {
    staticClass: "tab-pane call-detail fade p-0 border pb-3 active show",
    attrs: {
      "id": "step1"
    }
  }, [_c('section', {
    staticClass: "page-action w-100"
  }, [_c('div', {
    staticClass: "container-fluid p-0"
  }, [_c('div', {
    staticClass: "col-md-12 p-0 mt-3"
  }, [_c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 prof_control float-left",
    attrs: {
      "id": "ulKeysContainer"
    }
  }, [_c('div', {
    staticClass: "container-fluid p-0"
  }, [_c('div', {
    staticClass: "col-md-12 p-0"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('Form', {
    ref: "form",
    staticClass: "col-12 p-0",
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        values,
        errors
      }) {
        return [_vm._l(_vm.allProductConfigData, function (item, allConfigDataIndex) {
          return _c('div', {
            key: 'configdata-1' + allConfigDataIndex,
            staticClass: "col-sm-12 col-md-12 float-left col-lg-6 col-xl-6"
          }, [item.CORE_CONFIG_TYPE == 'dropdown' && item.CORE_CONFIG_KEY != 'TimeZone' && item.CORE_CONFIG_KEY != 'Currency' ? _c('div', {
            staticClass: "form-group projectConfig"
          }, [_c('label', [_c('span', [_vm._v(" " + _vm._s(item.CORE_CONFIG_DESC) + " ")]), _c('span', {
            staticClass: "text-danger"
          }, [_vm._v("*")]), _c('a', {
            attrs: {
              "href": "javascript:;",
              "data-toggle": "popoveruserguide",
              "data-content": item.CORE_CONFIG_DESC
            }
          }, [_c('i', {
            staticClass: "fa fa-question-circle-o text-popover"
          })])]), _c('Field', {
            attrs: {
              "rules": {
                'required': true
              },
              "name": "item.CORE_CONFIG_DESC"
            },
            scopedSlots: _vm._u([{
              key: "default",
              fn: function ({
                errors
              }) {
                return [item.CORE_CONFIG_KEY != 'Currency' ? _c('select', {
                  directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: item.CORE_CONFIG_VALUE,
                    expression: "item.CORE_CONFIG_VALUE"
                  }],
                  staticClass: "select form-control",
                  attrs: {
                    "keys": item.CORE_CONFIG_ID,
                    "name": "EnableLocationTrackingModule"
                  },
                  on: {
                    "change": function ($event) {
                      var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                        return o.selected;
                      }).map(function (o) {
                        var val = "_value" in o ? o._value : o.value;
                        return val;
                      });
                      _vm.$set(item, "CORE_CONFIG_VALUE", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
                    }
                  }
                }, _vm._l(_vm.Getoption(item.CORE_CONFIG_OPTIONS), function (items, GetoptionIndex) {
                  return _c('option', {
                    key: GetoptionIndex,
                    domProps: {
                      "value": items
                    }
                  }, [_vm._v(" " + _vm._s(items) + " ")]);
                }), 0) : _vm._e(), _c('span', {
                  staticClass: "invalid-feedback d-block",
                  attrs: {
                    "name": "EnableLocationTrackingModule",
                    "id": "EnableLocationTrackingModule"
                  }
                }, [_vm._v(_vm._s(errors[0]))])];
              }
            }], null, true)
          })], 1) : _vm._e()]);
        }), _vm._l(_vm.allProductConfigData, function (item, allConfigIndex) {
          return _c('div', {
            key: 'configdata-2' + allConfigIndex,
            staticClass: "col-sm-12 col-md-12 float-left col-lg-6 col-xl-6"
          }, [item.CORE_CONFIG_TYPE == 'text' ? _c('div', {
            staticClass: "form-group projectConfig"
          }, [_c('label', [_c('span', [_vm._v(" " + _vm._s(item.CORE_CONFIG_DESC) + " ")]), _c('span', {
            staticClass: "text-danger"
          }, [_vm._v("*")]), _c('a', {
            attrs: {
              "href": "javascript:;",
              "data-content": item.CORE_CONFIG_DESC,
              "data-toggle": "popoveruserguide"
            }
          }, [_c('i', {
            staticClass: "fa fa-question-circle-o text-popover",
            staticStyle: {
              "font-size": "14px"
            }
          })])]), _c('input', {
            staticClass: "textfield form-control",
            attrs: {
              "keys": item.CORE_CONFIG_ID,
              "type": "text",
              "name": item.CORE_CONFIG_DESC
            },
            domProps: {
              "value": item.CORE_CONFIG_VALUE
            }
          }), _c('span', {
            staticClass: "invalid-feedback d-block",
            attrs: {
              "name": "LocationTracking",
              "id": "LocationTracking"
            }
          })]) : _vm._e()]);
        }), _vm._l(_vm.allProductConfigData, function (item, index) {
          return _c('div', {
            staticClass: "col-sm-12 col-md-12 float-left col-lg-6 col-xl-6",
            attrs: {
              "id": "radios",
              "type": "radiobutton"
            }
          }, [item.CORE_CONFIG_TYPE == 'radiobutton' ? _c('label', [_c('span', [_vm._v(" " + _vm._s(item.CORE_CONFIG_DESC) + " ")]), _c('span', {
            staticClass: "text-danger"
          }, [_vm._v("*")]), _c('a', {
            attrs: {
              "href": "javascript:;",
              "data-toggle": "popoveruserguide",
              "data-content": item.CORE_CONFIG_DESC,
              "data-original-title": "",
              "title": ""
            }
          }, [_c('i', {
            staticClass: "fa fa-question-circle-o text-popover",
            staticStyle: {
              "font-size": "14px"
            }
          })])]) : _vm._e(), item.CORE_CONFIG_TYPE == 'radiobutton' ? _c('div', {
            staticClass: "rad_value",
            attrs: {
              "type": "radiobutton",
              "keys": item.CORE_CONFIG_ID
            }
          }, _vm._l(_vm.Getoption(item.CORE_CONFIG_OPTIONS), function (items) {
            return _c('label', {
              staticClass: "cogfiglbl form-check form-check-inline"
            }, [_c('div', {
              staticClass: "custom-control custom-radio custom-control-inline"
            }, [_c('input', {
              directives: [{
                name: "model",
                rawName: "v-model",
                value: item.CORE_CONFIG_VALUE,
                expression: "item.CORE_CONFIG_VALUE"
              }],
              staticClass: "custom-control-input",
              attrs: {
                "type": "radio",
                "name": item.CORE_CONFIG_DESC
              },
              domProps: {
                "value": items,
                "checked": _vm._q(item.CORE_CONFIG_VALUE, items)
              },
              on: {
                "change": function ($event) {
                  return _vm.$set(item, "CORE_CONFIG_VALUE", items);
                }
              }
            }), _c('label', {
              staticClass: "custom-control-label",
              attrs: {
                "for": 'rdo_' + index
              }
            })]), _vm._v(_vm._s(items == 'no' ? 'No' : 'Yes') + " ")]);
          }), 0) : _vm._e()]);
        }), _c('div', {
          staticClass: "col-sm-12 col-md-12 float-left col-lg-12 col-xl-12"
        }, [_c('div', {
          staticClass: "row flex-row-reverse"
        }, [_c('div', {
          staticClass: "col-lg-6 text-right"
        }, [_c('a', {
          staticClass: "btn btn-secondary formbtn",
          attrs: {
            "id": "hlkSave",
            "href": "javascript:;",
            "title": "Cancel"
          },
          on: {
            "click": function ($event) {
              return _vm.closePopup();
            }
          }
        }, [_c('i', {
          staticClass: "fa fa-save pr-2"
        }), _vm._v("Cancel")]), _vm._v("   "), _c('a', {
          staticClass: "btn btn-success formbtn",
          attrs: {
            "id": "hlkSave",
            "issecurityprompt": "IsSecurityPrompt",
            "href": "javascript:;",
            "title": "Save"
          },
          on: {
            "click": function ($event) {
              return _vm.SaveConfiguration(values, errors);
            }
          }
        }, [_c('i', {
          staticClass: "fa fa-save pr-2"
        }), _vm._v("Save")])])])])];
      }
    }], null, false, 1657576251)
  })], 1)])])]), _vm._m(3)])])])]) : _vm._e()])]);
};
var Configurationvue_type_template_id_1a53f894_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-12 mt-4 float-left"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12 mt-3"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('label', [_c('span', [_vm._v(" Approver Receipt Notification ")]), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")]), _c('a', {
    attrs: {
      "href": "javascript:;",
      "data-toggle": "popoveruserguide",
      "data-content": " Auto-Activate the client at the time of Creation.",
      "data-original-title": "",
      "title": ""
    }
  }, [_c('i', {
    staticClass: "fa fa-question-circle-o text-popover",
    staticStyle: {
      "font-size": "14px"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-lg-6"
  }, [_c('div', {
    staticClass: "py-2"
  }, [_c('span', {
    staticClass: "mandatory"
  }, [_vm._v("Fields marked with an asterisk (*) are mandatory.")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-12 mt-4 float-left"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12 mt-3"
  })])]);
}];

// CONCATENATED MODULE: ./src/views/AdvancedSetup/Configuration.vue?vue&type=template&id=1a53f894&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AdvancedSetup/Configuration.vue?vue&type=script&lang=js&


/* harmony default export */ var Configurationvue_type_script_lang_js_ = ({
  props: {
    popupConditions: {
      type: String,
      required: false
    },
    // view: {
    //   type: String,
    //   required: true,
    // },
    CurrentTab: {
      type: Number,
      required: false
    }
  },
  data() {
    return {
      SizeDocStorage: null,
      RetentionValue: null,
      FileTypeVaule: "",
      SizeConfigDataId: null,
      RetentionConfigDataId: null,
      FileCongfigDataId: null,
      userStrogaeConfigId: null,
      clientStorageConfigId: null,
      SelectedValue: [],
      FileTypeValues: "",
      Options: [],
      FileTypeData: [],
      IsClientAutoActivated: '',
      ClientAutoActivationConfigId: null,
      lockRecord: [],
      roundingOff: [],
      timeFormat: [],
      defaultPageSize: [],
      EnablelocationTracking: [],
      locationTracking: null,
      timeZone: [],
      currency: [],
      getTimeZone: 0,
      getLocationTrackInterval: 0,
      paymentLink: '',
      getCurrencyValue: 0,
      getTimeFormatValue: 0,
      getTalygenTips: '',
      getPastRecordValue: 0,
      newlyAddUserValue: '',
      locationTrackingCoreConfigId: 0,
      defaultPageSizeValue: 0,
      newlyAddUserValueoption: [],
      talygenTipsOption: [],
      attachmentDiv: '',
      blobUrl: '',
      imgPath: '',
      containerName: '',
      arrayGetFileDetails: [],
      UserType: 'CA',
      fileName: '',
      allConfigData: [],
      objData: [],
      timeZoneKeys: 0,
      allConfigObject: [],
      isLoading: false,
      defaultCompanyLogo: null,
      StorageAllocatedPerUser: null,
      StorageAllocatedPerClient: null,
      jsonObj: [],
      getCurrencyValueCoreConfigId: null,
      SelectValue: [],
      allProductConfigData: []
    };
  },
  created: function () {
    debugger;
    var vm = this;
    vm.GetConfigurationData();
    vm.GetTimeZone();
    vm.GetCurrency();
    vm.GetProductConfigData();
    vm.getClientConfigValue();
  },
  methods: {
    closePopup() {
      var vm = this;
      vm.$parent.close();
    },
    saveStorageConfiguration: function () {
      debugger;
      var vm = this;
      if (vm.SelectedValue.length == 0) {
        vm.FileTypeValues = "'" + vm.FileTypeData.map(x => x.value).join("','") + "'";
      } else {
        vm.SelectedValue.forEach((item, index) => {
          vm.SelectValue.push(item.value);
        });
        vm.FileTypeValues = vm.SelectValue.join(',');
      }
      let objStorageConfigData = [{
        configData: [{
          DataId: vm.SizeConfigDataId,
          DataValue: vm.SizeDocStorage
        }, {
          DataId: vm.RetentionConfigDataId,
          DataValue: vm.RetentionValue
        }, {
          DataId: vm.FileCongfigDataId,
          DataValue: vm.FileTypeValues
        }, {
          DataId: vm.userStrogaeConfigId,
          DataValue: vm.StorageAllocatedPerUser
        }, {
          DataId: vm.clientStorageConfigId,
          DataValue: vm.StorageAllocatedPerClient
        }]
      }, {
        conditionData: {
          refCode: 'AssetSetting',
          moduleName: 'AssetManagement'
        }
      }];
      var ParentData = JSON.stringify(objStorageConfigData);
      if (parseInt(vm.SizeDocStorage) > parseInt(vm.StorageAllocatedPerUser) || parseInt(vm.SizeDocStorage) > parseInt(vm.StorageAllocatedPerClient)) {
        $('#SizeDocStorage').addClass('is-invalid');
        vm.ShowAlert(vm.$t("Size of per file cannot be more than " + vm.StorageAllocatedPerUser), "failure", true);
      } else {
        $('#SizeDocStorage').removeClass('is-invalid');
        vm.$refs.Storageform.validate().then(result => {
          if (result) {
            DataService["a" /* default */].ManageAssetSettingData(JSON.stringify(ParentData)).then(response => {
              if (response.data == 0) {
                vm.ShowAlert("Storage Configuration Data Updated Successfully");
                vm.getfileTypes();
              } else {
                vm.ShowAlert(vm.$t("UnknownErrorOccur"), "failure", true, vm.$t("Alert"));
              }
            });
          }
        });
      }
    },
    removeSpecialCharacters(charactersString) {
      if (charactersString == 0) {
        this.SizeDocStorage = parseInt(charactersString.replace(0, 1));
      }
    },
    BindFileTypeDDL: function () {
      debugger;
      var vm = this;
      vm.Options = [];
      var params = `moduleName=DocStorage`;
      DataService["a" /* default */].GetFileType(params).then(response => {
        vm.FileTypeData = response.data;
        vm.FileTypeData.forEach((item, index) => {
          vm.Options.push({
            value: item.MimeTypes,
            label: item.FileType
          });
        });
      });
    },
    getfileTypes: function () {
      debugger;
      var vm = this;
      var params = `moduleName=DocStorage&keyValue=SizePerDoc,RetentionDays,DocStorageAllowedFileTypes,DefaultUserSpaceAllocation,DefaultClientSpaceAllocation`;
      DataService["a" /* default */].GetConfigDataValue(params).then(response => {
        vm.isLoading = true;
        var ConfigList = JSON.parse(response.data.ConfigValue);
        vm.SizeDocStorage = ConfigList.filter(v => v.CONFIG_DATA_KEY === 'SizePerDoc')[0].CONFIG_DATA_VALUE;
        vm.SizeConfigDataId = ConfigList.filter(v => v.CONFIG_DATA_KEY === 'SizePerDoc')[0].core_config_id;
        vm.RetentionValue = ConfigList.filter(v => v.CONFIG_DATA_KEY === 'RetentionDays')[0].CONFIG_DATA_VALUE;
        vm.RetentionConfigDataId = ConfigList.filter(v => v.CONFIG_DATA_KEY === 'RetentionDays')[0].core_config_id;
        vm.FileTypeVaule = ConfigList.filter(v => v.CONFIG_DATA_KEY === 'DocStorageAllowedFileTypes')[0].CONFIG_DATA_VALUE;
        vm.FileCongfigDataId = ConfigList.filter(v => v.CONFIG_DATA_KEY === 'DocStorageAllowedFileTypes')[0].core_config_id;
        vm.StorageAllocatedPerUser = ConfigList.filter(v => v.CONFIG_DATA_KEY === 'DefaultUserSpaceAllocation')[0].CONFIG_DATA_VALUE;
        vm.userStrogaeConfigId = ConfigList.filter(v => v.CONFIG_DATA_KEY === 'DefaultUserSpaceAllocation')[0].core_config_id;
        vm.StorageAllocatedPerClient = ConfigList.filter(v => v.CONFIG_DATA_KEY === 'DefaultClientSpaceAllocation')[0].CONFIG_DATA_VALUE;
        vm.clientStorageConfigId = ConfigList.filter(v => v.CONFIG_DATA_KEY === 'DefaultClientSpaceAllocation')[0].core_config_id;
        // vm.SelectedValue = vm.FileTypeVaule.replace(/\'/g, "").split(',');
        var SelectedValue = vm.FileTypeVaule.replace(/\'/g, "").split(',');
        if (SelectedValue != null) {
          var selectedValues = vm.Options.filter(x => {
            return SelectedValue.some(y => {
              return x.value.indexOf(y) != -1;
            });
          });
          vm.SelectedValue = selectedValues.map(x => x);
        } else {
          vm.SelectedValue = vm.Options.map(x => x.value);
        }
        vm.isLoading = false;
      });
    },
    redirectLink: function (params) {
      var envLink = Object({"NODE_ENV":"production","VUE_APP_API_URL":"https://newcrmapi.talygen.com/api/asset","VUE_APP_COMMON_API":"https://newcrmapi.talygen.com/api","VUE_APP_CURRENT_SITE_ROOT_URL":"https://stagespa.talygen.com","VUE_APP_DEFAULT_APP_URL":"http://stage.talygen.com","VUE_APP_FULL_MENU_APP_REDIRECTION":"true","VUE_APP_NODE_ENV":"staging","BASE_URL":"/"});
      if (params == "General") {
        window.open(envLink.VITE_General);
        return false;
      } else if (params == "Storage") {
        window.open(envLink.VITE_Storage);
        return false;
      } else if (params == "Clients") {
        window.open(envLink.VITE_Clients);
        return false;
      }
    },
    getClientConfigValue: function () {
      var vm = this;
      var params = `moduleName=Client&keyValue=SendNotificationsToClient`;
      DataService["a" /* default */].GetConfigDataValue(params).then(response => {
        vm.isLoading = true;
        vm.IsClientAutoActivated = JSON.parse(response.data.ConfigValue)[0].CONFIG_DATA_VALUE;
        vm.ClientAutoActivationConfigId = JSON.parse(response.data.ConfigValue)[0].core_config_id;
        vm.isLoading = false;
      });
    },
    saveClientConfiguration: function () {
      var vm = this;
      let objStorageConfigData = [{
        configData: [{
          DataId: vm.ClientAutoActivationConfigId,
          DataValue: vm.IsClientAutoActivated == 'Yes' ? 'Yes' : 'No'
        }]
      }, {
        conditionData: {
          refCode: 'DocSetting',
          moduleName: 'DocStorage'
        }
      }];
      var jsonStorageConfigObj = JSON.stringify(objStorageConfigData);
      //var params = `jsonData=${jsonStorageConfigObj}&refCode=DocSetting&moduleName=DocStorage`;
      DataService["a" /* default */].ManageDocUserStorageSettingData(jsonStorageConfigObj).then(response => {
        if (response.data == 0) {
          this.ShowAlert("Client Configuration Data Updated Successfully");
          this.getClientConfigValue();
        } else {
          vm.ShowAlert(vm.$t("UnknownErrorOccur"), "failure", true, vm.$t("Alert"));
        }
      });
    },
    GetConfigurationData: function () {
      var vm = this;
      var myObj = `moduleId=1`;
      DataService["a" /* default */].GetConfigurationData(myObj).then(function (response) {
        vm.allConfigData = response.data.StorageKeys;
        vm.EnablelocationTracking = response.data.StorageKeys[0].CORE_CONFIG_OPTIONS.split("^");
        vm.locationTrackingCoreConfigId = response.data.StorageKeys[1].CORE_CONFIG_ID;
        vm.getTimeZone = response.data.StorageKeys[2].CORE_CONFIG_VALUE;
        vm.getTimeZoneCoreConfigId = response.data.StorageKeys[2].CORE_CONFIG_ID;
        vm.defaultPageSize = response.data.StorageKeys[3].CORE_CONFIG_OPTIONS.split("^");
        vm.getCurrencyValue = response.data.StorageKeys[7].CORE_CONFIG_VALUE;
        vm.getCurrencyValueCoreConfigId = response.data.StorageKeys[7].CORE_CONFIG_ID;
        vm.getTalygenTipsCoreConfigId = response.data.StorageKeys[9].CORE_CONFIG_ID;
        vm.lockRecord = response.data.StorageKeys[10].CORE_CONFIG_OPTIONS.split("^");
        vm.lockRecordCoreConfigId = response.data.StorageKeys[10].CORE_CONFIG_ID;
        vm.getPastRecordValue = response.data.StorageKeys[10].CORE_CONFIG_VALUE;
        vm.newlyAddUserValueoption = response.data.StorageKeys[11].CORE_CONFIG_OPTIONS.split("^");
        vm.newlyAddUserValue = response.data.StorageKeys[11].CORE_CONFIG_VALUE;
        vm.newlyAddUserValueCoreConfigId = response.data.StorageKeys[11].CORE_CONFIG_ID;
        vm.talygenTipsOption = response.data.StorageKeys[9].CORE_CONFIG_OPTIONS.split("^");
        vm.imgPath = response.data.StorageKeys[5].CORE_CONFIG_VALUE;
        vm.CompanyLogoCoreConfigId = response.data.StorageKeys[5].CORE_CONFIG_ID;
        vm.timeZoneKeys = response.data.StorageKeys[2].CORE_CONFIG_ID;
        vm.GetBlobUrl();
      });
    },
    GetProductConfigData: function () {
      var vm = this;
      var myObj = `moduleId=4118`;
      DataService["a" /* default */].GetConfigurationData(myObj).then(function (response) {
        vm.allProductConfigData = response.data.StorageKeys;
      });
    },
    GetTimeZone: function () {
      var vm = this;
      DataService["a" /* default */].GetTimeZone().then(function (response) {
        vm.timeZone = response.data;
      });
    },
    GetCurrency: function () {
      var vm = this;
      DataService["a" /* default */].GetCurrency().then(function (response) {
        vm.currency = response.data;
      });
    },
    SaveConfiguration: async function (values, error) {
      var vm = this;
      vm.objData = [];
      let imgObj = {};
      var textValues = $('div#ulKeysContainer input:text,div#ulKeysContainer select,div#ulKeysContainer textarea,div#ulKeysContainer input:password'); //get all textboxes,textarea and drop down list from config list
      //var checkBoxValues = $('div#radios').find("input[type='radio']"); //get all div contains checkboxes from config list
      // var checkBoxValues = $('div#ulKeysContainer div[type="checkbox"], div#ulKeysContainer div[type="radiobutton"]');
      var imageControl = $('#flFile').val();
      if (imageControl != undefined) {
        var splitimage = imageControl.split('\\')[2];
      }
      if (splitimage != undefined && vm.defaultCompanyLogo == null) {
        imgObj = {
          DataId: vm.CompanyLogoCoreConfigId,
          DataValue: splitimage == undefined ? this.imgPath : splitimage
        };
        vm.objData.push(imgObj);
      } else if (vm.defaultCompanyLogo != null) {
        imgObj = {
          DataId: vm.CompanyLogoCoreConfigId,
          DataValue: 'COMPANY-LOGO.JPG'
        };
        vm.objData.push(imgObj);
      }
      for (var i = 0; i < textValues.length; i++) {
        if ($(textValues[i]).attr('keys') != undefined) {
          var textValue = $(textValues[i]).val().trim();
          if ($(textValues[i]).val().trim() == '') {
            if ($(textValues[i]).attr("class").indexOf("notrequired") == -1) {
              $(textValues[i]).addClass('is-invalid');
              $(textValues[i] + 'span#LocationTracking').html('Required');
            }
          } else {
            $(textValues[i]).removeClass('is-invalid');
          }
          let objStorageConfigData = {
            DataId: $(textValues[i]).attr('keys'),
            DataValue: textValue
          };
          vm.objData.push(objStorageConfigData);
        }
      }
      // for (var i = 0; i < checkBoxValues.length; i++) {
      //   var getSelectedvalues = '';
      //   if ($(checkBoxValues[i]).attr('keys') != undefined && $(checkBoxValues[i]).attr('keys') != 'undefined') {
      //     if ($(checkBoxValues[i]).attr('type') == 'radiobutton') {
      //       var combinedName = ("config" + i);
      //       //getSelectedvalues = $("input[name='"+combinedName+"']:checked").val();
      //       getSelectedvalues = $(checkBoxValues[i]).find('input:radio:checked').val();
      //     }
      //     let radioConfigDatas = {
      //       DataId: $(checkBoxValues[i]).attr('keys'),
      //       DataValue: getSelectedvalues
      //     }
      //     vm.objData.push(radioConfigDatas);
      //     let jsonObject = vm.objData.map(JSON.stringify);
      //     let uniqueSet = new Set(jsonObject);
      //   }
      //   
      // }
      vm.allConfigObject = JSON.stringify(vm.objData);
      var error = $('.is-invalid');
      const formdata = new FormData();
      formdata.append("files", vm.arrayGetFileDetails);
      if (splitimage != undefined) {
        await DataService["a" /* default */].UploadFile2(formdata).then(response => {
          debugger;
        });
      }
      let userset = [{
        refCode: 'AssetSetting',
        moduleName: 'Asset'
      }];
      var configData = "configData";
      var conditionData = "conditionData";
      var params = "[{" + JSON.stringify(configData) + ":" + vm.allConfigObject + ", " + JSON.stringify(conditionData) + ":" + JSON.stringify(userset) + "}]";
      var jsonStorageConfigObj = JSON.stringify(vm.allConfigObject);
      //var params = `jsonData=${jsonStorageConfigObj}&refCode=DocSetting&moduleName=DocStorage`;
      if ($(error).length <= 0) {
        await DataService["a" /* default */].ManageAssetSettingData(params).then(response => {
          vm.isLoading = true;
          if (response.data == 1) {
            vm.ShowAlert("Record(s) has been successfully saved.");
            vm.attachmentDiv = '';
            vm.isLoading = false;
            vm.GetConfigurationData();
          } else {
            vm.ShowAlert(vm.$t("UnknownErrorOccur"), "failure", true, vm.$t("Alert"));
            vm.isLoading = false;
          }
        });
      } else {
        vm.ShowAlert(vm.$t("PleaseCorrectHighlightedErrors"), "failure", true);
      }
    },
    setFile: function (values, meta, e) {
      this.attachmentDiv = e.target.files[0].name;
      this.fileName = e.target.files[0];
      this.arrayGetFileDetails = e.target.files[0];
    },
    GetBlobUrl: function () {
      DataService["a" /* default */].GetBlobUrl().then(response => {
        var url = response.data[0].CONFIG_DATA_VALUE;
        var usertype = this.UserType;
        if (this.imgPath == "COMPANY-LOGO.JPG") {
          this.blobUrl = "/Content/images/DefaultImages/company-logo.jpg";
        }
        if (usertype == "CA" && this.imgPath != "COMPANY-LOGO.JPG") {
          this.blobUrl = url + '/' + this.containerName + '/' + 'Upload' + '/' + 'CompanyLogo' + '/' + this.imgPath;
        }
      });
    },
    Getoption: function (params) {
      params = params == null ? '' : params;
      var options = [];
      $.each(params.split('^'), function (i, v) {
        options.push(v);
      });
      return options;
    },
    ClearImage: function () {
      this.blobUrl = "/Content/images/DefaultImages/company-logo.jpg";
      this.defaultCompanyLogo = 'COMPANY-LOGO.JPG';
    },
    Clearimagevalue: function () {
      var vm = this;
      vm.attachmentDiv = '';
    }
  }
});
// CONCATENATED MODULE: ./src/views/AdvancedSetup/Configuration.vue?vue&type=script&lang=js&
 /* harmony default export */ var AdvancedSetup_Configurationvue_type_script_lang_js_ = (Configurationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/AdvancedSetup/Configuration.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  AdvancedSetup_Configurationvue_type_script_lang_js_,
  Configurationvue_type_template_id_1a53f894_render,
  Configurationvue_type_template_id_1a53f894_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Configuration = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AdvancedSetup/MoadalAdvanceSetup.vue?vue&type=script&lang=js&

/* harmony default export */ var MoadalAdvanceSetupvue_type_script_lang_js_ = ({
  components: {
    Configuration: Configuration
  },
  data() {
    return {
      step: 1,
      click: 'SetupAsset',
      CurrentTab: 1,
      IsClientStoragesCopmleted: false
    };
  },
  mounted: function () {
    var vm = this;
    $('#modalManageView').on('blur', function () {
      this.IsVisible = false;
    });
  },
  props: {
    IsVisible: {
      type: Boolean,
      required: true
    },
    popupCondition: {
      type: String,
      required: false
    }
  },
  watch: {
    IsVisible: {
      handler(val, older) {
        if (val) {
          this.IsVisible = val;
        }
      }
    }
  },
  methods: {
    close: function () {
      this.$parent.IsshowConfiguration = false;
    },
    SkipTab: function (s) {
      debugger;
      var vm = this;
      vm.step = s;
      vm.CurrentTab = s;
    },
    BackToStep: function (s) {
      var vm = this;
      vm.step = s;
    }
  }
});
// CONCATENATED MODULE: ./src/views/AdvancedSetup/MoadalAdvanceSetup.vue?vue&type=script&lang=js&
 /* harmony default export */ var AdvancedSetup_MoadalAdvanceSetupvue_type_script_lang_js_ = (MoadalAdvanceSetupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/AdvancedSetup/MoadalAdvanceSetup.vue





/* normalize component */

var MoadalAdvanceSetup_component = Object(componentNormalizer["a" /* default */])(
  AdvancedSetup_MoadalAdvanceSetupvue_type_script_lang_js_,
  MoadalAdvanceSetupvue_type_template_id_5c56bf65_render,
  MoadalAdvanceSetupvue_type_template_id_5c56bf65_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MoadalAdvanceSetup = (MoadalAdvanceSetup_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AdvancedSetup/EnableSections.vue?vue&type=template&id=26df1f0a&lang=en&
var EnableSectionsvue_type_template_id_26df1f0a_lang_en_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('Section', [_c('div', {
    staticClass: "modal my-popups right fade show",
    staticStyle: {
      "display": "block"
    },
    attrs: {
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
      "click": _vm.OpenPopup
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
  }, [_vm._v(_vm._s(_vm.$t('EnableSections')))])]), _c('div', {
    staticClass: "modal-body"
  }, [_c('h5', [_vm._v("Select what you want to use:")]), _c('div', {
    staticClass: "row mt-3 EnableSections",
    staticStyle: {
      "min-height": "300px"
    }
  }, _vm._l(_vm.GroupName, function (ParentItem, ParentIndex) {
    return _c('div', {
      key: ParentIndex,
      staticClass: "col-md-6 mb-4",
      attrs: {
        "value": ParentItem.enable_disable_sections_id
      }
    }, [_c('div', {
      staticClass: "conversation-date heading-border d-flex justify-content-between"
    }, [_c('span', [_c('em', {
      staticClass: "pr-1",
      attrs: {
        "aria-hidden": "true"
      }
    }), _vm._v(_vm._s(ParentItem.groupKey))]), _c('div', {
      attrs: {
        "isChecked": "true"
      }
    }, [_c('label', {
      staticClass: "switch"
    }, [_c('input', {
      staticClass: "form-check-input rdoticketfor custom-control-input dynamic",
      attrs: {
        "id": "isCheck_" + ParentItem.groupData[0].enable_disable_sections_id,
        "type": "checkbox"
      },
      domProps: {
        "checked": ParentItem.groupData[0].is_enable == 1
      },
      on: {
        "change": function ($event) {
          return _vm.SaveSliderButton(ParentItem.groupData[0].enable_disable_sections_id);
        }
      }
    }), _c('span', {
      staticClass: "slider round"
    }, [_c('span', {
      staticClass: "slider-yes",
      attrs: {
        "value": "1"
      }
    }, [_vm._v("Yes")]), _c('span', {
      staticClass: "slider-no",
      attrs: {
        "value": "0"
      }
    }, [_vm._v("No")])])])])]), _vm._l(ParentItem.groupData, function (ChildItem, ChildIndex) {
      return _c('div', {
        key: ChildIndex,
        staticClass: "col-12 p-0"
      }, [_c('span', {
        staticClass: "mb-2"
      }, [_c('i', {
        staticClass: "green fa fa-check-circle"
      }), _vm._v(" " + _vm._s(ChildItem.enable_disable_sections_name))])]);
    })], 2);
  }), 0), _c('div', {
    staticClass: "text-right"
  }, [_c('a', {
    staticClass: "btn btn-success formbtn",
    attrs: {
      "id": "hlkSave",
      "href": "javascript:;",
      "title": "Save"
    },
    on: {
      "click": function ($event) {
        return _vm.SaveEnableDisable();
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-save pr-2"
  }), _vm._v("Save")]), _vm._v("   "), _c('a', {
    staticClass: "btn btn-danger",
    attrs: {
      "id": "hlkCancel",
      "href": "javascript:;",
      "title": "Cancel"
    },
    on: {
      "click": function ($event) {
        return _vm.closepopup();
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-close pr-2"
  }), _vm._v("Cancel")])])])])])]), _c('EnableSections', {
    on: {
      "closepopup": _vm.closepopup
    }
  })], 1);
};
var EnableSectionsvue_type_template_id_26df1f0a_lang_en_staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/AdvancedSetup/EnableSections.vue?vue&type=template&id=26df1f0a&lang=en&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AdvancedSetup/EnableSections.vue?vue&type=script&lang=js&


/* harmony default export */ var EnableSectionsvue_type_script_lang_js_ = ({
  data() {
    return {
      ModuleEnableDisableList: [],
      sortBy: '',
      sortExp: '',
      TotalRecords: 0,
      pageNumber: 1,
      pageSize: 100,
      CurrentPage: 1,
      enable: null,
      jsonData: [],
      GroupName: []
    };
  },
  async created() {
    await this.FetchData();
    this.EnableDisableButton();
  },
  methods: {
    OpenPopup() {
      var vm = this;
      vm.$parent.closeenablesectionpopup();
    },
    closepopup() {
      var vm = this;
      vm.$parent.closeenablesectionpopup();
    },
    async FetchData() {
      var vueObj = this;
      vueObj.isLoading = true;
      var url = `moduleName=Asset&feature_id=&sortBy=${vueObj.sortBy}&sortExp=${vueObj.sortExp}&pageSize=${vueObj.pageSize}&pageNumber=${vueObj.pageNumber}`;
      await DataService["a" /* default */].GetEnableDisableFeature(url).then(response => {
        vueObj.isLoading = false;
        if (response.data != null && response.data != 0) {
          if (response.data.length > 0) {
            vueObj.GroupName = [];
            vueObj.ModuleEnableDisableList = response.data;
            var gruopBy = "";
            $.each(vueObj.ModuleEnableDisableList, $.proxy(function (index, item) {
              gruopBy = item.group_name;
              var chkGroup = $.grep(vueObj.GroupName, function (element, index) {
                return element.groupKey == gruopBy;
              });
              if (chkGroup.length == 0) {
                var returnedData = $.grep(vueObj.ModuleEnableDisableList, function (element, index) {
                  return element.group_name == gruopBy;
                });
                if (returnedData.length > 0) {
                  var objGroup = {
                    groupKey: gruopBy,
                    groupData: returnedData
                  };
                  vueObj.GroupName.push(objGroup);
                }
              }
            }, this));
            vueObj.TotalRecords = response.data[0].TOTAL;
            vueObj.TotalPages = Math.ceil(vueObj.TotalRecords / vueObj.pageSize);
            vueObj.CurrentPage = vueObj.pageNumber;
            vueObj.noRecord = false;
          } else {
            vueObj.noRecord = true;
            vueObj.ModuleEnableDisableList = [];
            vueObj.TotalRecords = 0;
          }
        }
      });
    },
    SaveEnableDisable() {
      var vm = this;
      var params = JSON.stringify(vm.jsonData);
      DataService["a" /* default */].SaveEnableDisableFeature(params).then(response => {
        if (response.data == 1) {
          vm.ShowAlert("Record Saved Successfully"), "success", 'Alert';
          vm.closepopup();
        } else {
          vm.ShowAlert("No Record Saved"), "success", 'Alert';
          vm.closepopup();
        }
      });
    },
    SaveSliderButton: function (ss) {
      var vm = this;
      var isChecked = $("#isCheck_" + ss).is(":checked");
      const Index = vm.ModuleEnableDisableList.find(x => x.enable_disable_sections_id === ss);
      Index.is_enable = isChecked;
      var postjSON = {
        enable_disable_sections_id: ss,
        is_enable: Index.is_enable == true ? 1 : 0
      };
      vm.jsonData.push(postjSON);
    }
  }
});
// CONCATENATED MODULE: ./src/views/AdvancedSetup/EnableSections.vue?vue&type=script&lang=js&
 /* harmony default export */ var AdvancedSetup_EnableSectionsvue_type_script_lang_js_ = (EnableSectionsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/AdvancedSetup/EnableSections.vue?vue&type=style&index=0&id=26df1f0a&prod&lang=css&
var EnableSectionsvue_type_style_index_0_id_26df1f0a_prod_lang_css_ = __webpack_require__("aaf8");

// CONCATENATED MODULE: ./src/views/AdvancedSetup/EnableSections.vue






/* normalize component */

var EnableSections_component = Object(componentNormalizer["a" /* default */])(
  AdvancedSetup_EnableSectionsvue_type_script_lang_js_,
  EnableSectionsvue_type_template_id_26df1f0a_lang_en_render,
  EnableSectionsvue_type_template_id_26df1f0a_lang_en_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var EnableSections = (EnableSections_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AdvancedSetup/AdvancedSetting.vue?vue&type=script&lang=js&



//import AdvanceSettingModal from "../../views/AdvancedSetup/MoadalAdvanceSetup.vue"
/* harmony default export */ var AdvancedSettingvue_type_script_lang_js_ = ({
  components: {
    AdvanceSettingModal: MoadalAdvanceSetup,
    addProduct: AddProduct["a" /* default */],
    EnableSections: EnableSections
  },
  data() {
    return {
      showpopup: false,
      popupCondition: "",
      IsshowConfiguration: false,
      popupConfiguration: "",
      EnableSectionspop: false
    };
  },
  methods: {
    showadvancesettingpopup: function (param) {
      var vm = this;
      if (param == 'Configuration') {
        vm.popupConfiguration = param;
        vm.IsshowConfiguration = true;
        $("#modalManageView").modal('show');
        setTimeout(function () {
          $("#modalManageView").modal('show');
          setTimeout(function () {}, 200);
        }, 1000);
      } else if (param == 'setup') {
        vm.popupCondition = param;
        vm.showpopup = true;
        $("#modelAddProduct").modal('show');
        setTimeout(function () {
          $("#modelAddProduct").modal('show');
          setTimeout(function () {}, 200);
        }, 1000);
      }
    },
    openenablesectionpopup: function () {
      var vm = this;
      vm.EnableSectionspop = true;
    },
    closeenablesectionpopup: function () {
      var vm = this;
      vm.EnableSectionspop = false;
    }
  }
});
// CONCATENATED MODULE: ./src/views/AdvancedSetup/AdvancedSetting.vue?vue&type=script&lang=js&
 /* harmony default export */ var AdvancedSetup_AdvancedSettingvue_type_script_lang_js_ = (AdvancedSettingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/AdvancedSetup/AdvancedSetting.vue?vue&type=style&index=0&id=786bae2a&prod&lang=css&
var AdvancedSettingvue_type_style_index_0_id_786bae2a_prod_lang_css_ = __webpack_require__("b0c3");

// CONCATENATED MODULE: ./src/views/AdvancedSetup/AdvancedSetting.vue






/* normalize component */

var AdvancedSetting_component = Object(componentNormalizer["a" /* default */])(
  AdvancedSetup_AdvancedSettingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AdvancedSetting = __webpack_exports__["default"] = (AdvancedSetting_component.exports);

/***/ }),

/***/ "aaf8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EnableSections_vue_vue_type_style_index_0_id_26df1f0a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c9b1");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EnableSections_vue_vue_type_style_index_0_id_26df1f0a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EnableSections_vue_vue_type_style_index_0_id_26df1f0a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "b0c3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdvancedSetting_vue_vue_type_style_index_0_id_786bae2a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("38f3");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdvancedSetting_vue_vue_type_style_index_0_id_786bae2a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdvancedSetting_vue_vue_type_style_index_0_id_786bae2a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "c9b1":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("65b2");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("3f00eca3", content, true, {"sourceMap":false,"shadowMode":false});

/***/ })

}]);
//# sourceMappingURL=chunk-cc301fa8.js.map