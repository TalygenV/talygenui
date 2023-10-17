(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-1923ca1e"],{

/***/ "2285":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".custom-calendar.vc-container{--day-border:1px solid #b8c2cc;--day-border-highlight:1px solid #b8c2cc;--day-width:90px;--day-height:90px;--weekday-bg:#f8fafc;--weekday-border:1px solid #eaeaea;border-radius:0;width:100%}.vc-title[data-v-74ad501d]{font-size:24px!important;font-weight:400!important}.vc-header{background-color:#d4d4d4;padding:10px 18px 10px 18px!important}.vc-weeks{padding:0!important}.vc-weekday{background-color:#e5e5e5;color:#5a5a5a!important;border-bottom:1px solid #c9c9c9;border-top:var(--weekday-border);padding:10px 0!important;font-weight:400!important;font-size:16px!important;line-height:24px!important}.vc-day{padding:0 5px 3px 5px;text-align:left;height:var(--day-height);min-width:var(--day-width);background-color:#f7f7f7;border-right:1px solid #ddd;border-bottom:1px solid #ddd;min-height:226px!important}.day-label{font-size:25px;font-weight:400}.weekday-1,.weekday-7{background-color:#f7f7f7}.on-bottom{border-bottom:var(--day-border)}.weekday-1{border-bottom:var(--day-border-highlight)}.on-right{border-right:var(--day-border)}.vc-day-dots{margin-bottom:5px}.r-calendar-available{background-color:#a6cdb2!important;color:#fff!important;padding:2px 5px!important;text-transform:capitalize;margin:2px 0;font-size:12px;font-weight:500}.r-calendar-audit{background-color:#a5c63b!important}.r-calendar-audit,.r-calendar-grey{color:#fff!important;padding:2px!important;text-transform:capitalize;font-size:12px;font-weight:500;margin:2px 0}.r-calendar-grey{background-color:#737373!important}.vc-pane-container .vc-day-content{font-size:30px!important;font-family:OpenSansRegular,Arial;margin:5px 0;display:flex;margin-top:5px;margin-left:auto}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "7093":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetCatalog/Calendar.vue?vue&type=template&id=6b8fafbc&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_c('div', [_c('div', {
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
  }, [_c('b', [_vm._v(_vm._s(_vm.$t('CALocation')) + " :")]), _c('span', {
    staticClass: "lighttext"
  }, [_vm._v(" " + _vm._s(this.AssetCalendarData[0].locatioN_NAME))])])]), _c('div', {
    staticClass: "col-lg-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('b', [_vm._v(_vm._s(_vm.$t('CRM_PRODUCTS')) + " : ")]), _c('span', {
    staticClass: "lighttext"
  }, [_vm._v(" " + _vm._s(this.AssetCalendarData[0].name))])])]), _c('div', {
    staticClass: "col-lg-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('b', [_vm._v(_vm._s(_vm.$t('Total')) + " : ")]), _c('span', {
    staticClass: "lighttext"
  }, [_vm._v(" " + _vm._s(this.AssetCalendarData[0].totaL_QUANTITY))])])]), _c('div', {
    staticClass: "col-lg-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('b', [_vm._v(_vm._s(_vm.$t('UniqueName')) + " : ")]), _c('span', {
    staticClass: "lighttext"
  }, [_vm._v(" " + _vm._s(this.AssetCalendarData[0].uniquE_NAME))])])])])])])]), _c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left px-0 mt-2"
  }, [_c('div', {
    staticClass: "table-responsive"
  }, [_c('VCalendar', {
    staticClass: "custom-calendar max-w-full",
    attrs: {
      "masks": _vm.masks,
      "attributes": _vm.attributes,
      "is-expanded": ""
    },
    scopedSlots: _vm._u([{
      key: "day-content",
      fn: function ({
        attributes
      }) {
        return _vm._l(attributes, function (attr) {
          return _c('div', {
            key: attr.key,
            staticClass: "flex flex-col h-full z-10 overflow-hidden"
          }, [_c('div', {
            staticClass: "flex-grow overflow-y-auto overflow-x-auto d-block w-100",
            class: attr.customData.class
          }, [_vm.$options.filters.formatDate(attr.start) <= attr.end ? _c('p', {
            staticClass: "text-xs leading-tight rounded-sm p-1 mt-0 mb-1 text-primary"
          }) : _vm._e(), _c('span', [_vm._v(_vm._s(attr.customData.title))])])]);
        });
      }
    }])
  })], 1)])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/AssetCatalog/Calendar.vue?vue&type=template&id=6b8fafbc&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// EXTERNAL MODULE: ./node_modules/v-calendar/lib/components/calendar.umd.js
var calendar_umd = __webpack_require__("86e3");
var calendar_umd_default = /*#__PURE__*/__webpack_require__.n(calendar_umd);

// EXTERNAL MODULE: ./node_modules/v-calendar/lib/v-calendar.umd.min.js
var v_calendar_umd_min = __webpack_require__("5887");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetCatalog/Calendar.vue?vue&type=script&lang=js&




/* harmony default export */ var Calendarvue_type_script_lang_js_ = ({
  components: {
    VCalendar: calendar_umd_default.a
  },
  data() {
    return {
      AssetCalendarData: [],
      masks: {
        weekdays: 'WWW'
      },
      attributes: []
    };
  },
  created: function () {
    this.LoadAssetCalendar();
  },
  updated: {
    pages: function () {
      debugger;
    }
  },
  methods: {
    LoadAssetCalendar: function () {
      var url = `userId=0&&locationId=${this.$route.params.lid}&assetCatId=${this.$route.params.aid}&rid=${this.$route.params.rid}&start=&end=&requestedEventType=`;
      DataService["a" /* default */].LoadAssetCalendar(url).then(response => {
        this.AssetCalendarData = response.data;
        this.AssetCalendarData.forEach((item, index) => {
          console.log(item);
          if (item.title == 'AVAILABLE') {
            this.attributes.push({
              key: index + 1,
              customData: {
                title: `${item.title} (${item.quantity})`
                // class: 'r-calendar-available text-white',
              },

              highlight: 'green',
              dates: [{
                start: new Date(item.start),
                end: new Date(item.end)
              }]
            });
          } else if (item.title == 'RESERVED') {
            this.attributes.push({
              key: index + 1,
              customData: {
                title: `${item.title} (${item.quantity})`
                // class: 'r-calendar-reserved text-white',
              },

              highlight: 'Yellow',
              dates: [{
                start: new Date(item.start),
                end: new Date(item.end)
              }]
            });
          } else if (item.title == 'ASSIGNED') {
            this.attributes.push({
              key: index + 1,
              customData: {
                title: `${item.title} (${item.quantity})`
                //class: 'r-calendar-assigned text-white',
              },

              highlight: 'Black',
              dates: [{
                start: new Date(item.start),
                end: new Date(item.end)
              }]
            });
          } else if (item.title == 'IN-TRANSIT') {
            this.attributes.push({
              key: index + 1,
              customData: {
                title: `${item.title} (${item.quantity})`
                //class: 'r-calendar-intransit text-white',
              },

              highlight: 'Pink',
              dates: [{
                start: new Date(item.start),
                end: new Date(item.end)
              }]
            });
          } else if (item.title == 'AUDIT (annual )') {
            this.attributes.push({
              key: index + 1,
              customData: {
                title: `${item.title} (${item.quantity})`
                //class: 'r-calendar-audit text-white',
              },

              highlight: 'blue',
              dates: [{
                start: new Date(item.start),
                end: new Date(item.end)
              }]
            });
          } else if (item.title == 'CALIBRATION (quarterly )') {
            this.attributes.push({
              key: index + 1,
              customData: {
                title: `${item.title} (${item.quantity})`
                //class: 'r-calendar-grey text-white',
              },

              highlight: true,
              dates: [{
                start: new Date(item.start),
                end: new Date(item.end)
              }]
            });
          } else {
            this.attributes.push({
              key: index + 1,
              customData: {
                title: `${item.title} (${item.quantity})`
                //class: 'editable text-white',
              },

              highlight: 'purple',
              dates: [{
                start: new Date(item.start),
                end: new Date(item.end)
              }]
            });
          }
        });
      });
      console.log(this.attributes);
    }
  }
});
// CONCATENATED MODULE: ./src/views/AssetCatalog/Calendar.vue?vue&type=script&lang=js&
 /* harmony default export */ var AssetCatalog_Calendarvue_type_script_lang_js_ = (Calendarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/AssetCatalog/Calendar.vue?vue&type=style&index=0&id=6b8fafbc&prod&lang=css&
var Calendarvue_type_style_index_0_id_6b8fafbc_prod_lang_css_ = __webpack_require__("d7aa");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/AssetCatalog/Calendar.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  AssetCatalog_Calendarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Calendar = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "d7aa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_id_6b8fafbc_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dfb1");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_id_6b8fafbc_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_id_6b8fafbc_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "dfb1":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("2285");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("44fbc4a2", content, true, {"sourceMap":false,"shadowMode":false});

/***/ })

}]);
//# sourceMappingURL=chunk-1923ca1e.js.map