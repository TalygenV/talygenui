(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d22d938"],{

/***/ "f7a2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetReport/Index.vue?vue&type=template&id=3eab84c9&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "padding-t_10",
    attrs: {
      "id": "reportstabsdata"
    }
  }, [_c('div', {
    staticClass: "left-menu-tab new_tab"
  }, [_c('div', {
    staticClass: "col-md-12 p-0"
  }, [_c('div', {
    staticClass: "theme-primary partition"
  }, [_c('span', {
    staticClass: "p-name text-white"
  }, [_vm._v(_vm._s(_vm.$t("ProductTypeReport")))])])]), _c('div', {
    staticClass: "pt-2 mb-1 w-100 d-none d-lg-block"
  }, [_c('div', {
    staticClass: "input-group customsearchbox"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.searchQuery,
      expression: "searchQuery"
    }],
    staticClass: "form-control searchcustomfilter border-right-0",
    attrs: {
      "type": "text",
      "maxlength": "50",
      "placeholder": _vm.Search,
      "autocomplete": "off"
    },
    domProps: {
      "value": _vm.searchQuery
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.searchQuery = $event.target.value;
      }
    }
  }), _vm._m(0)])]), _c('div', {
    staticClass: "mt-2",
    staticStyle: {
      "max-height": "700px"
    },
    attrs: {
      "id": "divscrollsetuptabs"
    }
  }, [_c('ul', {
    staticClass: "nav nav-pills flex-column left-tab responivecustomtab lefttabiconfix lefttabflexible",
    attrs: {
      "id": "upper",
      "role": "tablist"
    }
  }, _vm._l(_vm.filteredTabs, function (tab, index) {
    return _c('li', {
      key: index
    }, [_c('a', {
      staticClass: "nav-link left-menu",
      class: {
        active: _vm.activeKey === tab.index
      },
      attrs: {
        "data-toggle": '#' + tab.id
      },
      on: {
        "click": function ($event) {
          return _vm.activateTab(tab.index);
        }
      }
    }, [_c('i', {
      class: tab.icon,
      attrs: {
        "aria-hidden": "true"
      }
    }), _vm._v("  " + _vm._s(_vm.$t(tab.name)) + " ")])]);
  }), 0)])]), _c('div', {
    staticClass: "right-content"
  }, [_c('div', {
    staticClass: "col-md-12 p-0"
  }, [_c('div', {
    staticClass: "theme-primary partition p-actions-expand",
    staticStyle: {
      "overflow": "visible"
    }
  }, [_c('span', {
    staticClass: "p-name text-white",
    attrs: {
      "id": "spnreporttext"
    }
  }, [_vm._v(_vm._s(this.$t(_vm.activeTabName)))]), _c('span', {
    staticClass: "p-actions float-right"
  }, [_c('a', {
    staticClass: "p-action-btn text-white",
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "href": "javascript:;",
      "id": "ancshowmorefilter",
      "title": _vm.$t('Show') + ' ' + _vm.$t('More') + ' ' + _vm.$t('Filter')
    }
  }, [_c('i', {
    staticClass: "fa fa-filter",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('br'), _vm._v(_vm._s(_vm.$t("Show")) + " " + _vm._s(_vm.$t("More")) + " " + _vm._s(_vm.$t("Filter")))])]), _c('span', {
    staticClass: "p-actions float-right p-2",
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "id": "showDaterange"
    }
  }), _vm._m(1)])]), _c('div', {
    staticClass: "col-md-12 p-0"
  }, [_c('div', {
    staticClass: "tab-content",
    attrs: {
      "id": "myTabContent"
    }
  }, [_vm._m(2), _vm.activeKey == 0 ? _c('div', {
    staticClass: "tab-pane",
    class: {
      'active show': _vm.activeKey == 0
    },
    attrs: {
      "id": "ProductAssignmentReport"
    }
  }, [_c('ProductAssignmentReports')], 1) : _vm._e(), _vm.activeKey == 1 ? _c('div', {
    staticClass: "tab-pane",
    class: {
      'active show': _vm.activeKey == 1
    },
    attrs: {
      "id": "AuditLogReport"
    }
  }, [_c('AuditLogReport')], 1) : _vm._e(), _vm.activeKey == 2 ? _c('div', {
    staticClass: "tab-pane",
    class: {
      'active show': _vm.activeKey == 2
    },
    attrs: {
      "id": "ProductBarcodeReport"
    }
  }, [_c('ProductBarcodeReport')], 1) : _vm._e(), _vm.activeKey == 3 ? _c('div', {
    staticClass: "tab-pane",
    class: {
      'active show': _vm.activeKey == 3
    },
    attrs: {
      "id": "ItemLogHistoryReport"
    }
  }, [_c('ItemLogHistoryReport')], 1) : _vm._e(), _vm.activeKey == 4 ? _c('div', {
    staticClass: "tab-pane",
    class: {
      'active show': _vm.activeKey == 4
    },
    attrs: {
      "id": "ProductCountReport"
    }
  }, [_c('ProductCountReport')], 1) : _vm._e(), _vm.activeKey == 5 ? _c('div', {
    staticClass: "tab-pane",
    class: {
      'active show': _vm.activeKey == 5
    },
    attrs: {
      "id": "ProductReport"
    }
  }, [_c('ProductReport')], 1) : _vm._e()])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "input-group-append"
  }, [_c('span', {
    staticClass: "input-group-text bg-transparent bg-white border-left-0"
  }, [_c('i', {
    staticClass: "fa fa-search"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', {
    staticClass: "collapse-head-btns"
  }, [_c('a', {
    staticClass: "collapse-btns",
    attrs: {
      "href": "javascript:;"
    }
  }, [_c('i', {
    staticClass: "fa fa-angle-up text-white"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "expand-list"
  }, [_c('a', {
    staticClass: "expand-list-btn justify-content-center align-items-center",
    attrs: {
      "href": "javascript:;"
    }
  }, [_c('i', {
    staticClass: "icon-solid arrow-solid-left text-white",
    staticStyle: {
      "font-size": "9pt"
    }
  })])]);
}];

// CONCATENATED MODULE: ./src/views/AssetReport/Index.vue?vue&type=template&id=3eab84c9&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetReport/ProductAssignmentReports.vue?vue&type=template&id=5ff17d19&
var ProductAssignmentReportsvue_type_template_id_5ff17d19_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.DataLoaded ? _c('dynamic-form', {
    attrs: {
      "lang": "en",
      "buttons": _vm.buttons,
      "schema": _vm.FormSchema
    },
    on: {
      "OnSubmit": _vm.onSubmit
    }
  }) : _vm._e(), _c('div', {
    staticClass: "row placeholder"
  }, [_c('div', {
    staticClass: "col-md-12 p-0"
  }, [_vm.parameter.length > 0 ? _c('ReportViewer', {
    attrs: {
      "parameter": _vm.parameter,
      "reportPath": _vm.reportPath
    }
  }) : _vm._e()], 1)])], 1);
};
var ProductAssignmentReportsvue_type_template_id_5ff17d19_staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/AssetReport/ProductAssignmentReports.vue?vue&type=template&id=5ff17d19&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetReport/ReportViewer.vue?vue&type=template&id=43a9ab8f&
var ReportViewervue_type_template_id_43a9ab8f_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm._m(0);
};
var ReportViewervue_type_template_id_43a9ab8f_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticStyle: {
      "height": "600px"
    }
  }, [_c('div', {
    staticStyle: {
      "width": "100%",
      "min-height": "650px",
      "margin-bottom": "0%",
      "height": "auto"
    },
    attrs: {
      "id": "viewer"
    }
  })]);
}];

// CONCATENATED MODULE: ./src/views/AssetReport/ReportViewer.vue?vue&type=template&id=43a9ab8f&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetReport/ReportViewer.vue?vue&type=script&lang=js&

/* harmony default export */ var ReportViewervue_type_script_lang_js_ = ({
  props: {
    reportPath: null,
    parameter: null
  },
  data: function () {
    return {
      Token: null
    };
  },
  created: function () {
    this.Token = this.GetUserInfo.Token;
  },
  mounted() {
    var vm = this;
    setTimeout(function () {
      $("#viewer").boldReportViewer({
        reportServiceUrl: 'http://localhost:12597/api/ReportViewer',
        reportPath: vm.reportPath,
        processingMode: "Remote",
        parameters: vm.parameter,
        reportServerUrl: 'http://192.168.0.200/ReportServer',
        ajaxBeforeLoad: vm.setReportToken
      });
    }, 2000);
  },
  methods: {
    setReportToken: function (args) {
      args.headers.push({
        Key: 'content-type',
        Value: 'application/json;charset=UTF-8'
      });
      args.headers.push({
        Key: 'Authorization',
        Value: `Bearer ${this.Token}`
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/AssetReport/ReportViewer.vue?vue&type=script&lang=js&
 /* harmony default export */ var AssetReport_ReportViewervue_type_script_lang_js_ = (ReportViewervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/AssetReport/ReportViewer.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  AssetReport_ReportViewervue_type_script_lang_js_,
  ReportViewervue_type_template_id_43a9ab8f_render,
  ReportViewervue_type_template_id_43a9ab8f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ReportViewer = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetReport/ProductAssignmentReports.vue?vue&type=script&lang=js&



/* harmony default export */ var ProductAssignmentReportsvue_type_script_lang_js_ = ({
  components: {
    ReportViewer: ReportViewer
  },
  data() {
    return {
      IsuuedArray: [],
      reportPath: null,
      parameter: [],
      FormSchema: [{
        layoutType: "triple",
        Data: [{
          astype: "TreeSelectField",
          label: this.$t("Location"),
          name: "Location",
          value: null,
          placeholder: "Select Location",
          validationRules: {
            required: true,
            max: 250
          },
          config: {
            options: []
          }
        }, {
          astype: "SelectField",
          label: this.$t("ProductType"),
          name: "ProductType",
          value: "",
          placeholder: "",
          config: {
            options: [],
            onChange: this.onChangeDropdown
          }
        }, {
          astype: "SelectField",
          label: this.$t("ProductName"),
          name: "ProductName",
          value: "",
          placeholder: "",
          config: {
            options: []
          }
        }, {
          astype: "SelectField",
          label: this.$t("Status"),
          name: "Status",
          value: "",
          placeholder: "",
          config: {
            options: [{
              name: "Not Returned",
              value: '0'
            }, {
              name: "Returned",
              value: '1'
            }],
            onChange: () => {}
          }
        }, {
          astype: "SelectField",
          label: this.$t("IssuedTo"),
          name: "IssuedTo",
          value: "",
          placeholder: "",
          config: {
            options: []
          }
        }, {
          astype: "TextField",
          label: this.$t("IssuedBy"),
          name: "IssuedBy",
          value: "",
          placeholder: "",
          config: {}
        }, {
          astype: "DateField",
          label: this.$t("IssueDate"),
          name: "IssueDate",
          value: "",
          placeholder: "10/12/2022 12:AM",
          config: {
            format: "M/D/YYYY"
          }
        }, {
          astype: "DateField",
          label: this.$t("IssueDateEnd"),
          name: "IssueDateEnd",
          value: "",
          placeholder: "10/12/2022 12:AM",
          config: {
            format: "M/D/YYYY"
          }
        }, {
          astype: "DateField",
          label: this.$t("ReturnDate"),
          name: "ReturnDate",
          value: "",
          placeholder: "10/12/2022 12:AM",
          config: {
            format: "M/D/YYYY"
          }
        }, {
          astype: "DateField",
          label: this.$t("ReturnDateEnd"),
          name: "ReturnDateEnd",
          value: "",
          placeholder: "10/12/2022 12:AM",
          config: {
            format: "M/D/YYYY"
          }
        }]
      }],
      buttons: [{
        type: "submit",
        class: "btn btn-success",
        text: "<i class='fa fa-search pr-2'></i>Search"
      }, {
        type: "button",
        class: "btn btn-danger",
        text: "<i class='fa fa-close pr-2'></i>Clear all"
      }],
      DataLoaded: 0
    };
  },
  created: async function () {
    var vm = this;
    await vm.GetLocationByCompanyId();
    await vm.BindItemTypeByUserId();
    await vm.GetIssuedDetails();
    vm.DataLoaded = 1;
  },
  methods: {
    async GetLocationByCompanyId() {
      var vm = this;
      var params = `reqForm=`;
      await DataService["a" /* default */].GetLocationByCompanyId(params).then(function (response) {
        vm.LocationData = JSON.parse(response.data).data;
        var json = vm.MakeNormalArray(response.data).data;
        $.each(json, $.proxy(function (index, item) {
          var groupId = item.PARENT_LOCATION_ID;
          var chkGroup = $.grep(vm.LocationData, function (element, index) {
            return element.id == groupId;
          });
          if (chkGroup.length == 0) {
            var returnedData = $.grep(json, function (element, index) {
              return element.PARENT_LOCATION_ID == groupId;
            });
            if (returnedData.length > 0 && returnedData[0].LOCATION_NAME) {
              var objGroup = {
                id: groupId,
                label: returnedData[0].LOCATION_NAME,
                children: returnedData.map(item => {
                  return {
                    id: item.COMPANY_LOCATION_ID,
                    label: item.LOCATION_NAME
                  };
                })
              };
              vm.FormSchema[0].Data[0].config.options.push(objGroup);
            }
          }
        }));
      });
    },
    async BindItemTypeByUserId() {
      let url = `type=&issueTo=&locationId=&requestType=ASSIGN&requestFrom=`;
      var vm = this;
      await DataService["a" /* default */].AssignGetAssetType(url).then(response => {
        response.data.forEach((itm, index) => {
          vm.FormSchema[0].Data[1].config.options.push({
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
          vm.FormSchema[0].Data[2].config.options.push({
            name: itm.NAME,
            value: itm.ASSETID
          });
        });
      });
    },
    async GetIssuedDetails() {
      debugger;
      var vm = this;
      await DataService["a" /* default */].GetIssuedUser().then(response => {
        debugger;
        console.log(response);
        vm.IsuuedArray = response.data.result;
        vm.IsuuedArray.forEach((itm, index) => {
          vm.FormSchema[0].Data[4].config.options.push({
            name: itm.text,
            value: itm.value
          });
        });
      });
    },
    async onSubmit(e) {
      debugger;
      var vm = this;
      //var ArrayData = {};
      let myObj = {
        reportName: "assetmanagementreport",
        Location: e.Location,
        AssetTypesIds: e.ProductType,
        CatalogueIds: e.ProductName,
        StatusIds: e.Status,
        IssuedToUserIds: e.IssuedTo,
        IssuedByUserIds: e.IssuedBy,
        IsssuedFromDate: e.IssueDate,
        IsssuedToDate: e.IssueDateEnd,
        ReturnFromDate: e.ReturnDate,
        ReturnToDate: e.ReturnDateEnd
      };
      // ArrayData=myObj;
      //var jsonObj = JSON.stringify(myObj);
      await DataService["a" /* default */].ReportMain(myObj).then(function (response) {
        debugger;
        console.log(response);
        vm.reportPath = response.data.reportpath;
        vm.parameter = response.data.parameters;
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/AssetReport/ProductAssignmentReports.vue?vue&type=script&lang=js&
 /* harmony default export */ var AssetReport_ProductAssignmentReportsvue_type_script_lang_js_ = (ProductAssignmentReportsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/AssetReport/ProductAssignmentReports.vue





/* normalize component */

var ProductAssignmentReports_component = Object(componentNormalizer["a" /* default */])(
  AssetReport_ProductAssignmentReportsvue_type_script_lang_js_,
  ProductAssignmentReportsvue_type_template_id_5ff17d19_render,
  ProductAssignmentReportsvue_type_template_id_5ff17d19_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ProductAssignmentReports = (ProductAssignmentReports_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetReport/AuditLogReport.vue?vue&type=template&id=bf5d5a5e&
var AuditLogReportvue_type_template_id_bf5d5a5e_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.DataLoaded ? _c('dynamic-form', {
    attrs: {
      "lang": "en",
      "buttons": _vm.buttons,
      "schema": _vm.FormSchema
    },
    on: {
      "OnSubmit": _vm.onSubmit
    }
  }) : _vm._e(), _c('div', {
    staticClass: "row placeholder"
  }, [_c('div', {
    staticClass: "col-md-12 p-0"
  }, [_vm.parameter.length > 0 ? _c('ReportViewer', {
    attrs: {
      "parameter": _vm.parameter,
      "reportPath": _vm.reportPath
    }
  }) : _vm._e()], 1)])], 1);
};
var AuditLogReportvue_type_template_id_bf5d5a5e_staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/AssetReport/AuditLogReport.vue?vue&type=template&id=bf5d5a5e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetReport/AuditLogReport.vue?vue&type=script&lang=js&



/* harmony default export */ var AuditLogReportvue_type_script_lang_js_ = ({
  components: {
    ReportViewer: ReportViewer
  },
  data() {
    return {
      reportPath: null,
      parameter: [],
      FormSchema: [{
        layoutType: "triple",
        Data: [{
          astype: "TreeSelectField",
          label: this.$t("Location"),
          name: "Location",
          value: null,
          placeholder: "Select Location",
          validationRules: {
            required: true,
            max: 250
          },
          config: {
            options: []
          }
        }, {
          astype: "SelectField",
          label: this.$t("ProductName"),
          name: "Product Name",
          value: "",
          placeholder: "",
          config: {
            options: [],
            onChange: this.onChangeDropdown
          }
        }, {
          astype: "SelectField",
          label: this.$t("UniqueName"),
          name: "Unique Name",
          value: "",
          placeholder: "",
          config: {
            options: []
          }
        }, {
          astype: "SelectField",
          label: this.$t("Type"),
          name: "Type ",
          value: "",
          placeholder: "",
          config: {
            options: [{
              name: "Calibration",
              value: 'CALIBRATION'
            }, {
              name: "Audit",
              value: 'AUDIT'
            }, {
              name: "Image Capturing",
              value: 'IMAGEHISTORY'
            }]
          }
        }, {
          astype: "DateField",
          label: this.$t("Date"),
          name: "Date",
          value: "",
          placeholder: "10/12/2022 12:AM",
          config: {
            format: "M/D/YYYY"
          }
        }, {
          astype: "DateField",
          label: this.$t("DateEnd"),
          name: "Date End",
          value: "",
          placeholder: "10/12/2022 12:AM",
          config: {
            format: "M/D/YYYY"
          }
        }]
      }],
      buttons: [{
        type: "submit",
        class: "btn btn-success",
        text: "<i class='fa fa-search pr-2'></i>Search"
      }, {
        type: "button",
        class: "btn btn-danger",
        text: "<i class='fa fa-close pr-2'></i>Clear all"
      }],
      DataLoaded: 0
    };
  },
  created: async function () {
    var vm = this;
    await vm.GetLocationByCompanyId();
    await vm.getProductName();
    vm.DataLoaded = 1;
  },
  methods: {
    async GetLocationByCompanyId() {
      var vm = this;
      var params = `reqForm=`;
      await DataService["a" /* default */].GetLocationByCompanyId(params).then(function (response) {
        vm.LocationData = JSON.parse(response.data).data;
        var json = vm.MakeNormalArray(response.data).data;
        $.each(json, $.proxy(function (index, item) {
          var groupId = item.PARENT_LOCATION_ID;
          var chkGroup = $.grep(vm.LocationData, function (element, index) {
            return element.id == groupId;
          });
          if (chkGroup.length == 0) {
            var returnedData = $.grep(json, function (element, index) {
              return element.PARENT_LOCATION_ID == groupId;
            });
            if (returnedData.length > 0 && returnedData[0].LOCATION_NAME) {
              var objGroup = {
                id: groupId,
                label: returnedData[0].LOCATION_NAME,
                children: returnedData.map(item => {
                  return {
                    id: item.COMPANY_LOCATION_ID,
                    label: item.LOCATION_NAME
                  };
                })
              };
              vm.FormSchema[0].Data[0].config.options.push(objGroup);
            }
          }
        }));
      });
    },
    async getProductName() {
      ;
      let url = `type=&issueTo=&locationId=&requestType=ASSIGN&requestFrom=`;
      var vm = this;
      await DataService["a" /* default */].GetAssetCatalogueType(url).then(response => {
        response.data.forEach((itm, index) => {
          vm.FormSchema[0].Data[1].config.options.push({
            name: itm.NAME,
            value: itm.ASSETID
          });
        });
      });
    },
    async onChangeDropdown(evt) {
      ;
      var vm = this;
      var params = `catalogId=${evt.target.value}`;
      vm.FormSchema[0].Data[2].config.options = [];
      await DataService["a" /* default */].GetRelatedCatalogues(params).then(function (response) {
        response.data.forEach((itm, index) => {
          vm.FormSchema[0].Data[2].config.options.push({
            name: itm.text,
            value: itm.value
          });
        });
      });
    },
    async onSubmit() {
      ;
      var vm = this;
      var ArrayData = {};
      let myObj = {
        reportName: "assetauditlogreport",
        Location: vm.FormSchema[0].Data[0].value,
        CatalogueIds: vm.FormSchema[0].Data[1].value,
        UniqueNameAuditLog: vm.FormSchema[0].Data[2].value,
        AssetCalibrationAuditImageCapture: vm.FormSchema[0].Data[3].value,
        dateFrom: vm.FormSchema[0].Data[4].value,
        dateTo: vm.FormSchema[0].Data[5].value
      };
      ArrayData = myObj;
      var jsonObj = JSON.stringify(myObj);
      await DataService["a" /* default */].ReportMain(myObj).then(function (response) {
        console.log(response);
        vm.reportPath = response.data.reportpath;
        vm.parameter = response.data.parameters;
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/AssetReport/AuditLogReport.vue?vue&type=script&lang=js&
 /* harmony default export */ var AssetReport_AuditLogReportvue_type_script_lang_js_ = (AuditLogReportvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/AssetReport/AuditLogReport.vue





/* normalize component */

var AuditLogReport_component = Object(componentNormalizer["a" /* default */])(
  AssetReport_AuditLogReportvue_type_script_lang_js_,
  AuditLogReportvue_type_template_id_bf5d5a5e_render,
  AuditLogReportvue_type_template_id_bf5d5a5e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AuditLogReport = (AuditLogReport_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetReport/ProductBarcodeReport.vue?vue&type=template&id=1b6ba787&
var ProductBarcodeReportvue_type_template_id_1b6ba787_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.DataLoaded ? _c('dynamic-form', {
    attrs: {
      "lang": "en",
      "buttons": _vm.buttons,
      "schema": _vm.FormSchema
    },
    on: {
      "OnSubmit": _vm.onSubmit
    }
  }) : _vm._e(), _c('div', {
    staticClass: "row placeholder"
  }, [_c('div', {
    staticClass: "col-md-12 p-0"
  }, [_vm.parameter.length > 0 ? _c('ReportViewer', {
    attrs: {
      "parameter": _vm.parameter,
      "reportPath": _vm.reportPath
    }
  }) : _vm._e()], 1)])], 1);
};
var ProductBarcodeReportvue_type_template_id_1b6ba787_staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/AssetReport/ProductBarcodeReport.vue?vue&type=template&id=1b6ba787&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetReport/ProductBarcodeReport.vue?vue&type=script&lang=js&



/* harmony default export */ var ProductBarcodeReportvue_type_script_lang_js_ = ({
  components: {
    ReportViewer: ReportViewer
  },
  data() {
    return {
      reportPath: null,
      parameter: [],
      FormSchema: [{
        layoutType: "triple",
        Data: [{
          astype: "TreeSelectField",
          label: this.$t("Location"),
          name: "Location",
          value: null,
          placeholder: "Select Location",
          validationRules: {
            required: true,
            max: 250
          },
          config: {
            options: [],
            onChange: () => {}
          }
        }, {
          astype: "SelectField",
          label: this.$t("ProductName"),
          name: "Product Name",
          value: "",
          placeholder: "",
          config: {
            options: [],
            onChange: this.onChangeDropdown
          }
        }, {
          astype: "SelectField",
          label: this.$t("UniqueName"),
          name: "Unique Name",
          value: "",
          placeholder: "",
          config: {
            options: []
          }
        }, {
          astype: "SelectField",
          label: this.$t("Status"),
          name: "Status ",
          value: "",
          placeholder: "",
          config: {
            options: [{
              name: "Active",
              value: 1001
            }, {
              name: "In Stock",
              value: 1002
            }, {
              name: "In Use",
              value: 1003
            }, {
              name: "Inactive",
              value: 1004
            }, {
              name: "Retired",
              value: 1005
            }]
          }
        }]
      }],
      buttons: [{
        type: "submit",
        class: "btn btn-success",
        text: "<i class='fa fa-search pr-2'></i>Search"
      }, {
        type: "button",
        class: "btn btn-danger",
        text: "<i class='fa fa-close pr-2'></i>Clear all"
      }],
      DataLoaded: 0
    };
  },
  created: async function () {
    var vm = this;
    await vm.GetLocationByCompanyId();
    await vm.getProductName();
    vm.DataLoaded = 1;
  },
  methods: {
    async GetLocationByCompanyId() {
      var vm = this;
      var params = `reqForm=`;
      await DataService["a" /* default */].GetLocationByCompanyId(params).then(function (response) {
        vm.LocationData = JSON.parse(response.data).data;
        var json = vm.MakeNormalArray(response.data).data;
        $.each(json, $.proxy(function (index, item) {
          var groupId = item.PARENT_LOCATION_ID;
          var chkGroup = $.grep(vm.LocationData, function (element, index) {
            return element.id == groupId;
          });
          if (chkGroup.length == 0) {
            var returnedData = $.grep(json, function (element, index) {
              return element.PARENT_LOCATION_ID == groupId;
            });
            if (returnedData.length > 0 && returnedData[0].LOCATION_NAME) {
              var objGroup = {
                id: groupId,
                label: returnedData[0].LOCATION_NAME,
                children: returnedData.map(item => {
                  return {
                    id: item.COMPANY_LOCATION_ID,
                    label: item.LOCATION_NAME
                  };
                })
              };
              vm.FormSchema[0].Data[0].config.options.push(objGroup);
            }
          }
        }));
      });
    },
    async getProductName() {
      ;
      let url = `type=&issueTo=&locationId=&requestType=ASSIGN&requestFrom=`;
      var vm = this;
      await DataService["a" /* default */].GetAssetCatalogueType(url).then(response => {
        response.data.forEach((itm, index) => {
          vm.FormSchema[0].Data[1].config.options.push({
            name: itm.NAME,
            value: itm.ASSETID
          });
        });
      });
    },
    async onChangeDropdown(evt) {
      ;
      var vm = this;
      var params = `catalogId=${evt.target.value}`;
      vm.FormSchema[0].Data[2].config.options = [];
      await DataService["a" /* default */].GetRelatedCatalogues(params).then(function (response) {
        response.data.forEach((itm, index) => {
          vm.FormSchema[0].Data[2].config.options.push({
            name: itm.text,
            value: itm.value
          });
        });
      });
    },
    async onSubmit() {
      ;
      var vm = this;
      var ArrayData = {};
      let myObj = {
        reportName: "assetbarcodereport",
        Location: vm.FormSchema[0].Data[0].value,
        AssetCatalogueAssetBarcodes: vm.FormSchema[0].Data[1].value,
        UniqueNameAssetBarcodes: vm.FormSchema[0].Data[2].value,
        StatusAssetBarcodes: vm.FormSchema[0].Data[3].value
      };
      ArrayData = myObj;
      var jsonObj = JSON.stringify(myObj);
      await DataService["a" /* default */].ReportMain(myObj).then(function (response) {
        console.log(response);
        vm.reportPath = response.data.reportpath;
        vm.parameter = response.data.parameters;
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/AssetReport/ProductBarcodeReport.vue?vue&type=script&lang=js&
 /* harmony default export */ var AssetReport_ProductBarcodeReportvue_type_script_lang_js_ = (ProductBarcodeReportvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/AssetReport/ProductBarcodeReport.vue





/* normalize component */

var ProductBarcodeReport_component = Object(componentNormalizer["a" /* default */])(
  AssetReport_ProductBarcodeReportvue_type_script_lang_js_,
  ProductBarcodeReportvue_type_template_id_1b6ba787_render,
  ProductBarcodeReportvue_type_template_id_1b6ba787_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ProductBarcodeReport = (ProductBarcodeReport_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetReport/ItemLogHistoryReport.vue?vue&type=template&id=1baa6c18&
var ItemLogHistoryReportvue_type_template_id_1baa6c18_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.DataLoaded ? _c('dynamic-form', {
    attrs: {
      "lang": "en",
      "buttons": _vm.buttons,
      "schema": _vm.FormSchema
    },
    on: {
      "OnSubmit": _vm.onSubmit
    }
  }) : _vm._e(), _c('div', {
    staticClass: "row placeholder"
  }, [_c('div', {
    staticClass: "col-md-12 p-0"
  }, [_vm.parameter.length > 0 ? _c('ReportViewer', {
    attrs: {
      "parameter": _vm.parameter,
      "reportPath": _vm.reportPath
    }
  }) : _vm._e()], 1)])], 1);
};
var ItemLogHistoryReportvue_type_template_id_1baa6c18_staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/AssetReport/ItemLogHistoryReport.vue?vue&type=template&id=1baa6c18&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetReport/ItemLogHistoryReport.vue?vue&type=script&lang=js&



/* harmony default export */ var ItemLogHistoryReportvue_type_script_lang_js_ = ({
  components: {
    ReportViewer: ReportViewer
  },
  data() {
    return {
      reportPath: null,
      parameter: [],
      ItemLogStatusData: [],
      FormSchema: [{
        layoutType: "triple",
        Data: [{
          astype: "TreeSelectField",
          label: this.$t("Location"),
          name: "Location",
          value: null,
          placeholder: "Select Location",
          validationRules: {
            required: true,
            max: 250
          },
          config: {
            options: [],
            onChange: () => {}
          }
        }, {
          astype: "SelectField",
          label: this.$t("ProductName"),
          name: "Product Name",
          value: "",
          placeholder: "",
          config: {
            options: [],
            onChange: this.onChangeDropdown
          }
        }, {
          astype: "SelectField",
          label: this.$t("UniqueName"),
          name: "Unique Name",
          value: "",
          placeholder: "",
          config: {
            options: [],
            onChange: () => {}
          }
        }, {
          astype: "SelectField",
          label: this.$t("Status"),
          name: "Status",
          value: "",
          placeholder: "",
          config: {
            options: []
          }
        }, {
          astype: "DateField",
          label: this.$t("Date"),
          name: "Date",
          value: "",
          placeholder: "10/12/2022 12:AM",
          config: {
            format: "M/D/YYYY"
          }
        }, {
          astype: "DateField",
          label: this.$t("DateEnd"),
          name: "Date End",
          value: "",
          placeholder: "10/12/2022 12:AM",
          config: {
            format: "M/D/YYYY"
          }
        }]
      }],
      buttons: [{
        type: "submit",
        class: "btn btn-success",
        text: "<i class='fa fa-search pr-2'></i>Search"
      }, {
        type: "button",
        class: "btn btn-danger",
        text: "<i class='fa fa-close pr-2'></i>Clear all"
      }],
      DataLoaded: 0
    };
  },
  created: async function () {
    var vm = this;
    await vm.GetLocationByCompanyId();
    await vm.getProductName();
    await vm.GetItemLogStatus();
    vm.DataLoaded = 1;
  },
  methods: {
    async GetLocationByCompanyId() {
      var vm = this;
      var params = `reqForm=`;
      await DataService["a" /* default */].GetLocationByCompanyId(params).then(function (response) {
        vm.LocationData = JSON.parse(response.data).data;
        var json = vm.MakeNormalArray(response.data).data;
        $.each(json, $.proxy(function (index, item) {
          var groupId = item.PARENT_LOCATION_ID;
          var chkGroup = $.grep(vm.LocationData, function (element, index) {
            return element.id == groupId;
          });
          if (chkGroup.length == 0) {
            var returnedData = $.grep(json, function (element, index) {
              return element.PARENT_LOCATION_ID == groupId;
            });
            if (returnedData.length > 0 && returnedData[0].LOCATION_NAME) {
              var objGroup = {
                id: groupId,
                label: returnedData[0].LOCATION_NAME,
                children: returnedData.map(item => {
                  return {
                    id: item.COMPANY_LOCATION_ID,
                    label: item.LOCATION_NAME
                  };
                })
              };
              vm.FormSchema[0].Data[0].config.options.push(objGroup);
            }
          }
        }));
      });
    },
    async getProductName() {
      ;
      let url = `type=&issueTo=&locationId=&requestType=ASSIGN&requestFrom=`;
      var vm = this;
      await DataService["a" /* default */].GetAssetCatalogueType(url).then(response => {
        response.data.forEach((itm, index) => {
          vm.FormSchema[0].Data[1].config.options.push({
            name: itm.NAME,
            value: itm.ASSETID
          });
        });
      });
    },
    async onChangeDropdown(evt) {
      ;
      var vm = this;
      var params = `catalogId=${evt.target.value}`;
      vm.FormSchema[0].Data[2].config.options = [];
      await DataService["a" /* default */].GetRelatedCatalogues(params).then(function (response) {
        response.data.forEach((itm, index) => {
          vm.FormSchema[0].Data[2].config.options.push({
            name: itm.text,
            value: itm.value
          });
        });
      });
    },
    async GetItemLogStatus() {
      var vm = this;
      await DataService["a" /* default */].GetUserStatusitemlog().then(response => {
        vm.ItemLogStatusData = response.data;
        vm.ItemLogStatusData.forEach((item, index) => {
          vm.FormSchema[0].Data[3].config.options.push({
            name: item.text,
            value: item.value
          });
        });
      });
    },
    async onSubmit() {
      ;
      var vm = this;
      var ArrayData = {};
      let myObj = {
        reportName: "itemloghistoryreport",
        Location: vm.FormSchema[0].Data[0].value,
        AssetCatalogueLogHistory: vm.FormSchema[0].Data[1].value,
        UniqueNameLogHistory: vm.FormSchema[0].Data[2].value,
        AssetOperationCode: vm.FormSchema[0].Data[3].value,
        dateFrom: vm.FormSchema[0].Data[4].value,
        dateTo: vm.FormSchema[0].Data[5].value
      };
      ArrayData = myObj;
      var jsonObj = JSON.stringify(myObj);
      await DataService["a" /* default */].ReportMain(myObj).then(function (response) {
        console.log(response);
        vm.reportPath = response.data.reportpath;
        vm.parameter = response.data.parameters;
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/AssetReport/ItemLogHistoryReport.vue?vue&type=script&lang=js&
 /* harmony default export */ var AssetReport_ItemLogHistoryReportvue_type_script_lang_js_ = (ItemLogHistoryReportvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/AssetReport/ItemLogHistoryReport.vue





/* normalize component */

var ItemLogHistoryReport_component = Object(componentNormalizer["a" /* default */])(
  AssetReport_ItemLogHistoryReportvue_type_script_lang_js_,
  ItemLogHistoryReportvue_type_template_id_1baa6c18_render,
  ItemLogHistoryReportvue_type_template_id_1baa6c18_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ItemLogHistoryReport = (ItemLogHistoryReport_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetReport/ProductCountReport.vue?vue&type=template&id=070c0d28&
var ProductCountReportvue_type_template_id_070c0d28_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.DataLoaded ? _c('dynamic-form', {
    attrs: {
      "lang": "en",
      "buttons": _vm.buttons,
      "schema": _vm.FormSchema
    },
    on: {
      "OnSubmit": _vm.onSubmit
    }
  }) : _vm._e(), _c('div', {
    staticClass: "row placeholder"
  }, [_c('div', {
    staticClass: "col-md-12 p-0"
  }, [_vm.parameter.length > 0 ? _c('ReportViewer', {
    attrs: {
      "parameter": _vm.parameter,
      "reportPath": _vm.reportPath
    }
  }) : _vm._e()], 1)])], 1);
};
var ProductCountReportvue_type_template_id_070c0d28_staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/AssetReport/ProductCountReport.vue?vue&type=template&id=070c0d28&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetReport/ProductCountReport.vue?vue&type=script&lang=js&



/* harmony default export */ var ProductCountReportvue_type_script_lang_js_ = ({
  components: {
    ReportViewer: ReportViewer
  },
  data() {
    return {
      reportPath: null,
      parameter: [],
      FormSchema: [{
        layoutType: "triple",
        Data: [{
          astype: "TreeSelectField",
          label: this.$t('Location'),
          name: "Location",
          value: null,
          placeholder: "Select Location",
          validationRules: {
            "required": true,
            max: 250
          },
          config: {
            options: [],
            onChange: () => {}
          }
        }, {
          astype: "SelectField",
          label: this.$t('ProductType'),
          name: "Product Type",
          value: "",
          placeholder: "",
          config: {
            options: []
          }
        }, {
          astype: "SelectField",
          label: this.$t('Status'),
          name: "Status",
          value: "",
          placeholder: "",
          config: {
            options: [{
              name: 'Active',
              value: 1001
            }, {
              name: 'InActive',
              value: 1002
            }, {
              name: 'On Hold  ',
              value: 1003
            }, {
              name: 'Reserved',
              value: 1004
            }, {
              name: 'Retired',
              value: 1005
            }, {
              name: 'Sold',
              value: 1006
            }],
            onChange: () => {}
          }
        }, {
          astype: "DateField",
          label: this.$t('DeployDate'),
          name: "Deploy Date",
          value: '',
          placeholder: "10/12/2022 12:AM",
          config: {
            format: "M/D/YYYY"
          }
        }, {
          astype: "DateField",
          label: this.$t('DeployDateEnd'),
          name: "Date Date End",
          value: '',
          placeholder: "10/12/2022 12:AM",
          config: {
            format: "M/D/YYYY"
          }
        }]
      }],
      buttons: [{
        type: "submit",
        class: "btn btn-success",
        text: "<i class='fa fa-search pr-2'></i>Search"
      }, {
        type: "button",
        class: "btn btn-danger",
        text: "<i class='fa fa-close pr-2'></i>Clear all"
      }],
      DataLoaded: 0
    };
  },
  created: async function () {
    var vm = this;
    await vm.GetLocationByCompanyId();
    await vm.BindItemTypeByUserId();
    vm.DataLoaded = 1;
  },
  methods: {
    async GetLocationByCompanyId() {
      var vm = this;
      var params = `reqForm=`;
      await DataService["a" /* default */].GetLocationByCompanyId(params).then(function (response) {
        vm.LocationData = JSON.parse(response.data).data;
        var json = vm.MakeNormalArray(response.data).data;
        $.each(json, $.proxy(function (index, item) {
          var groupId = item.PARENT_LOCATION_ID;
          var chkGroup = $.grep(vm.LocationData, function (element, index) {
            return element.id == groupId;
          });
          if (chkGroup.length == 0) {
            var returnedData = $.grep(json, function (element, index) {
              return element.PARENT_LOCATION_ID == groupId;
            });
            if (returnedData.length > 0 && returnedData[0].LOCATION_NAME) {
              var objGroup = {
                id: groupId,
                label: returnedData[0].LOCATION_NAME,
                children: returnedData.map(item => {
                  return {
                    id: item.COMPANY_LOCATION_ID,
                    label: item.LOCATION_NAME
                  };
                })
              };
              vm.FormSchema[0].Data[0].config.options.push(objGroup);
            }
          }
        }));
      });
    },
    async BindItemTypeByUserId() {
      let url = `type=&issueTo=&locationId=&requestType=ASSIGN&requestFrom=`;
      var vm = this;
      await DataService["a" /* default */].AssignGetAssetType(url).then(response => {
        response.data.forEach((itm, index) => {
          vm.FormSchema[0].Data[1].config.options.push({
            name: itm.ASSETTYPE,
            value: itm.ASSETID
          });
        });
      });
    },
    async onSubmit() {
      ;
      var vm = this;
      var ArrayData = {};
      let myObj = {
        reportName: "assetcountreport",
        Location: vm.FormSchema[0].Data[0].value,
        AssetTypesIds: vm.FormSchema[0].Data[1].value,
        AssetStatus: vm.FormSchema[0].Data[2].value,
        dateFrom: vm.FormSchema[0].Data[3].value,
        dateTo: vm.FormSchema[0].Data[4].value
      };
      ArrayData = myObj;
      var jsonObj = JSON.stringify(myObj);
      await DataService["a" /* default */].ReportMain(myObj).then(function (response) {
        console.log(response);
        vm.reportPath = response.data.reportpath;
        vm.parameter = response.data.parameters;
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/AssetReport/ProductCountReport.vue?vue&type=script&lang=js&
 /* harmony default export */ var AssetReport_ProductCountReportvue_type_script_lang_js_ = (ProductCountReportvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/AssetReport/ProductCountReport.vue





/* normalize component */

var ProductCountReport_component = Object(componentNormalizer["a" /* default */])(
  AssetReport_ProductCountReportvue_type_script_lang_js_,
  ProductCountReportvue_type_template_id_070c0d28_render,
  ProductCountReportvue_type_template_id_070c0d28_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ProductCountReport = (ProductCountReport_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetReport/ProductReport.vue?vue&type=template&id=11ceb1f4&
var ProductReportvue_type_template_id_11ceb1f4_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.DataLoaded ? _c('dynamic-form', {
    attrs: {
      "lang": "en",
      "buttons": _vm.buttons,
      "schema": _vm.FormSchema
    },
    on: {
      "OnSubmit": _vm.onSubmit
    }
  }) : _vm._e(), _c('div', {
    staticClass: "row placeholder"
  }, [_c('div', {
    staticClass: "col-md-12 p-0"
  }, [_vm.parameter.length > 0 ? _c('ReportViewer', {
    attrs: {
      "parameter": _vm.parameter,
      "reportPath": _vm.reportPath
    }
  }) : _vm._e()], 1)])], 1);
};
var ProductReportvue_type_template_id_11ceb1f4_staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/AssetReport/ProductReport.vue?vue&type=template&id=11ceb1f4&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetReport/ProductReport.vue?vue&type=script&lang=js&



/* harmony default export */ var ProductReportvue_type_script_lang_js_ = ({
  components: {
    ReportViewer: ReportViewer
  },
  data() {
    return {
      reportPath: null,
      parameter: [],
      FormSchema: [{
        layoutType: "triple",
        Data: [{
          astype: "SelectField",
          label: this.$t('TagType'),
          name: "Tag Type",
          value: "",
          placeholder: "",
          validationRules: {
            "required": true,
            max: 250
          },
          config: {
            options: [],
            onChange: () => {}
          }
        }, {
          astype: "SelectField",
          label: this.$t('ProductType'),
          name: "Product Type",
          value: "",
          placeholder: "",
          config: {
            options: []
          }
        }, {
          astype: "TreeSelectField",
          label: this.$t('Location'),
          name: "Location",
          value: null,
          placeholder: "Select Location",
          config: {
            options: []
          }
        }, {
          astype: "SelectField",
          label: this.$t('Status'),
          name: "Status ",
          value: "",
          placeholder: "",
          config: {
            options: [{
              name: 'Active',
              value: 1001
            }, {
              name: 'InActive',
              value: 1002
            }, {
              name: 'On Hold  ',
              value: 1003
            }, {
              name: 'Reserved',
              value: 1004
            }, {
              name: 'Retired',
              value: 1005
            }, {
              name: 'Sold',
              value: 1006
            }],
            onChange: () => {}
          }
        }, {
          astype: "DateField",
          label: this.$t('DeployDate'),
          name: "Deploy Date",
          value: '',
          placeholder: "10/12/2022 12:AM",
          config: {
            format: "M/D/YYYY"
          }
        }, {
          astype: "DateField",
          label: this.$t('DeployDateEnd'),
          name: "Date Date End",
          value: '',
          placeholder: "10/12/2022 12:AM",
          config: {
            format: "M/D/YYYY"
          }
        }]
      }],
      buttons: [{
        type: "submit",
        class: "btn btn-success",
        text: "<i class='fa fa-search pr-2'></i>Search"
      }, {
        type: "button",
        class: "btn btn-danger",
        text: "<i class='fa fa-close pr-2'></i>Clear all"
      }],
      DataLoaded: 0
    };
  },
  created: async function () {
    var vm = this;
    await vm.GetLocationByCompanyId();
    await vm.BindItemTypeByUserId();
    await vm.GetTagsByModuleId();
    vm.DataLoaded = 1;
  },
  methods: {
    async GetLocationByCompanyId() {
      var vm = this;
      var params = `reqForm=`;
      await DataService["a" /* default */].GetLocationByCompanyId(params).then(function (response) {
        vm.LocationData = JSON.parse(response.data).data;
        var json = vm.MakeNormalArray(response.data).data;
        $.each(json, $.proxy(function (index, item) {
          var groupId = item.PARENT_LOCATION_ID;
          var chkGroup = $.grep(vm.LocationData, function (element, index) {
            return element.id == groupId;
          });
          if (chkGroup.length == 0) {
            var returnedData = $.grep(json, function (element, index) {
              return element.PARENT_LOCATION_ID == groupId;
            });
            if (returnedData.length > 0 && returnedData[0].LOCATION_NAME) {
              var objGroup = {
                id: groupId,
                label: returnedData[0].LOCATION_NAME,
                children: returnedData.map(item => {
                  return {
                    id: item.COMPANY_LOCATION_ID,
                    label: item.LOCATION_NAME
                  };
                })
              };
              vm.FormSchema[0].Data[2].config.options.push(objGroup);
            }
          }
        }));
      });
    },
    //add product type
    async BindItemTypeByUserId() {
      let url = `type=&issueTo=&locationId=&requestType=ASSIGN&requestFrom=`;
      var vm = this;
      await DataService["a" /* default */].AssignGetAssetType(url).then(response => {
        response.data.forEach((itm, index) => {
          vm.FormSchema[0].Data[1].config.options.push({
            name: itm.ASSETTYPE,
            value: itm.ASSETID
          });
        });
      });
    },
    async GetTagsByModuleId() {
      var vm = this;
      var params = `modulename=Asset`;
      await DataService["a" /* default */].GetTagsByModuleId(params).then(function (response) {
        vm.TagData = JSON.parse(response.data);
        vm.TagData.data.forEach((item, index) => {
          vm.FormSchema[0].Data[0].config.options.push({
            name: item.TAG_NAME,
            value: `${item.TAG_ID}`
          });
        });
      });
    },
    async onSubmit() {
      ;
      var vm = this;
      var ArrayData = {};
      let myObj = {
        reportName: "productreport",
        TagTypes: vm.FormSchema[0].Data[0].value,
        AssetTypesIds: vm.FormSchema[0].Data[1].value,
        Location: vm.FormSchema[0].Data[2].value,
        StatusIds: vm.FormSchema[0].Data[3].value,
        dateFrom: vm.FormSchema[0].Data[4].value,
        dateTo: vm.FormSchema[0].Data[5].value
      };
      ArrayData = myObj;
      var jsonObj = JSON.stringify(myObj);
      await DataService["a" /* default */].ReportMain(myObj).then(function (response) {
        console.log(response);
        vm.reportPath = response.data.reportpath;
        vm.parameter = response.data.parameters;
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/AssetReport/ProductReport.vue?vue&type=script&lang=js&
 /* harmony default export */ var AssetReport_ProductReportvue_type_script_lang_js_ = (ProductReportvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/AssetReport/ProductReport.vue





/* normalize component */

var ProductReport_component = Object(componentNormalizer["a" /* default */])(
  AssetReport_ProductReportvue_type_script_lang_js_,
  ProductReportvue_type_template_id_11ceb1f4_render,
  ProductReportvue_type_template_id_11ceb1f4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ProductReport = (ProductReport_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetReport/Index.vue?vue&type=script&lang=js&






/* harmony default export */ var Indexvue_type_script_lang_js_ = ({
  components: {
    ProductAssignmentReports: ProductAssignmentReports,
    AuditLogReport: AuditLogReport,
    ProductBarcodeReport: ProductBarcodeReport,
    ItemLogHistoryReport: ItemLogHistoryReport,
    ProductCountReport: ProductCountReport,
    ProductReport: ProductReport
  },
  data() {
    return {
      activeKey: 0,
      tabNames: ["ProductAssignmentReport", "AuditLogReport", "ProductBarcodeReport", "ItemLogHistoryReport", "ProductCountReport", "ProductReport"],
      searchQuery: ""
    };
  },
  mounted() {
    this.activateTab(0);
  },
  computed: {
    filteredTabs() {
      if (!this.searchQuery) {
        return this.tabNames.map((name, index) => ({
          name,
          index,
          icon: this.getTabIcon(name)
        }));
      }
      const query = this.searchQuery.toLowerCase();
      return this.tabNames.map((name, index) => ({
        name,
        index,
        icon: this.getTabIcon(name)
      })).filter(tab => this.$t(tab.name).toLowerCase().includes(query));
    },
    activeTabName() {
      return this.tabNames[this.activeKey];
    }
  },
  methods: {
    getTabIcon(name) {
      switch (name) {
        case "ProductAssignmentReport":
          return "fa fa-list";
        case "AuditLogReport":
          return "fa fa-list-alt";
        case "ProductBarcodeReport":
          return "fa fa-money";
        case "ItemLogHistoryReport":
          return "fa fa-file-text";
        case "ProductCountReport":
          return "fa fa-file-text";
        case "ProductReport":
          return "fa fa-file-text";
        default:
          return "";
      }
    },
    activateTab(index) {
      this.activeKey = index;
    }
  }
});
// CONCATENATED MODULE: ./src/views/AssetReport/Index.vue?vue&type=script&lang=js&
 /* harmony default export */ var AssetReport_Indexvue_type_script_lang_js_ = (Indexvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/AssetReport/Index.vue





/* normalize component */

var Index_component = Object(componentNormalizer["a" /* default */])(
  AssetReport_Indexvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Index = __webpack_exports__["default"] = (Index_component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d22d938.js.map