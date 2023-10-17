(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0e5713"],{

/***/ "9501":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Asset/DepreciationList.vue?vue&type=template&id=c4382c68&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_c('tg-list', {
    attrs: {
      "IsShowAction": false,
      "listType": ['List'],
      "ModuleName": "Asset",
      "SubModuleCode": "Asset",
      "IdentityColumn": "assetCatalogueId",
      "HeaderText": _vm.$t('DepreciationList'),
      "ListData": _vm.DepreciationListData,
      "HeaderData": _vm.Headers,
      "widgets": _vm.widgets,
      "callbackfunction": _vm.GetDepreciationList,
      "HeaderButtons": _vm.listheaderbuttons,
      "TotalRecords": _vm.TotalRecords,
      "SearchFields": _vm.leftSearchFields,
      "RenderRowActionMethod": _vm.renderActions,
      "ListDataCallBackFunction": _vm.GetDepreciationList,
      "LegendArray": _vm.LegendArray,
      "SortExp": _vm.SortExp,
      "SortBy": _vm.SortBy,
      "NorecordfoundText": _vm.$t('NorecordfoundText')
    },
    on: {
      "LeftsearchButtonClick": _vm.leftCommonSearch,
      "PagerButtonClick": _vm.pagerMethod,
      "HeaderButtonClick": _vm.commonHeaderButtonClick,
      "ActionButtonClick": _vm.actionButtonClick,
      "SortdataButtonClick": _vm.sortdata
    }
  })], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/Asset/DepreciationList.vue?vue&type=template&id=c4382c68&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// CONCATENATED MODULE: ./src/views/Asset/DepreciationListSchema.js


let buttons = [{
  title: 'Back to list',
  iconClass: 'fa fa-angle-double-left pr-2',
  callbackfunction: 'BacktoList',
  additionalClass: '',
  isdisabled: false,
  isvisible: true,
  checkPrivilege: false
}];
let leftsearchSchema = [{
  fieldName: 'Product Name',
  fieldType: "text",
  fieldIcon: "fa-user",
  paramName: "search",
  fieldSearchConditionName: [''],
  isSearch: false,
  value: ""
}, {
  fieldName: 'ProductType',
  fieldType: "ddl-check",
  fieldIcon: "fa-server",
  paramName: "ProductTypeId",
  fieldSearchConditionName: [''],
  isSearch: false,
  value: "",
  listOptions: []
}, {
  fieldName: "Location",
  fieldType: "ddl-multilevel",
  fieldIcon: "fa-file",
  paramName: "LocationId",
  fieldSearchConditionName: [''],
  isSearch: false,
  value: "",
  listOptions: []
}, {
  fieldName: 'DepreciationDate',
  fieldType: "ddl-check",
  fieldIcon: "fa-server",
  paramName: "DepreciationDate ",
  fieldSearchConditionName: [''],
  isSearch: false,
  value: "",
  listOptions: []
}];
async function bindleftCommonSearchdropdown(instance, modulename, filtername) {
  var vm = instance;
  var LocationData = [];
  var ProductType = [];
  if (filtername == "Location") {
    debugger;
    var params = `reqForm=`;
    await DataService["a" /* default */].GetLocationByCompanyId(params).then(function (response) {
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
      vm.leftSearchFields[2].listOptions = LocationData;
    });
  }
  if (filtername == "ProductType") {
    var params = `langCode=en&statusType=AssetManagement&hasglobal=true`;
    DataService["a" /* default */].GetStatusList(params).then(function (response) {
      if (filtername == "ProductType") {
        let obj2 = {};
        JSON.parse(response.data).forEach(item => {
          obj2 = {
            name: item.STATUS,
            value: `${item.STATUS_ID}`
          };
          ProductType.push(obj2);
        });
        vm.leftSearchFields[1].listOptions = ProductType;
      }
    });
  }
  if (filtername == "DepreciationDate") {
    var params = `modulename=${modulename}`;
    DataService["a" /* default */].GetTagsByModuleId(params).then(function (response) {
      if (filtername == "Depreciation Date") {
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
}
/* harmony default export */ var DepreciationListSchema = ({
  buttons,
  leftsearchSchema,
  bindleftCommonSearchdropdown
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Asset/DepreciationList.vue?vue&type=script&lang=js&



/* harmony default export */ var DepreciationListvue_type_script_lang_js_ = ({
  name: 'Depreciation',
  components: {},
  data() {
    return {
      leftSearchFields: DepreciationListSchema.leftsearchSchema,
      listheaderbuttons: DepreciationListSchema.buttons,
      LegendArray: [],
      noRecordForTab: false,
      isLoading: false,
      DepreciationListData: [],
      widgets: [],
      Headers: [{
        "COLUMN_NAME": "itemTypeName",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Item Type",
        "DISPLAY_ORDER": 1
      }, {
        "COLUMN_NAME": "itemCode",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Item Code",
        "DISPLAY_ORDER": 2
      }, {
        "COLUMN_NAME": "itemName",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Item Name",
        "DISPLAY_ORDER": 3
      }, {
        "COLUMN_NAME": "uniqueName",
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": "Product Name",
        "DISPLAY_ORDER": 4
      }, {
        "COLUMN_NAME": "locationName",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Location",
        "DISPLAY_ORDER": 5
      }, {
        "COLUMN_NAME": "usefulLife",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Useful Life In Year",
        "DISPLAY_ORDER": 6
      }, {
        "COLUMN_NAME": "percentageOfAssetLife",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Percentage Of Assets Life",
        "DISPLAY_ORDER": 7
      }, {
        "COLUMN_NAME": "depreciationMethodName",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Depreciation Rule",
        "DISPLAY_ORDER": 8
      }, {
        "COLUMN_NAME": "deploymentDate",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Install Date",
        "DISPLAY_ORDER": 9
      }, {
        "COLUMN_NAME": "quantityOpening",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Opening Quantity",
        "DISPLAY_ORDER": 10
      }, {
        "COLUMN_NAME": "quantityAddition",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Addition Quantity",
        "DISPLAY_ORDER": 11
      }, {
        "COLUMN_NAME": "QuantityDeletion",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Deletion Quantity",
        "DISPLAY_ORDER": 12
      }, {
        "COLUMN_NAME": "quantityClosing",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Closing Quantity",
        "DISPLAY_ORDER": 13
      }, {
        "COLUMN_NAME": "grossBlockOpening",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Opening",
        "DISPLAY_ORDER": 14
      }, {
        "COLUMN_NAME": "grossBlockAddition",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Addition",
        "DISPLAY_ORDER": 15
      }, {
        "COLUMN_NAME": "grossBlockDeletion",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Deletion",
        "DISPLAY_ORDER": 16
      }, {
        "COLUMN_NAME": "grossBlockClosing",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Closing",
        "DISPLAY_ORDER": 17
      }, {
        "COLUMN_NAME": "balanceValue",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Balance Value",
        "DISPLAY_ORDER": 18
      }, {
        "COLUMN_NAME": "depreciationUptoPreviousMonth",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Depreciation Upto PreviousMonth",
        "DISPLAY_ORDER": 19
      }, {
        "COLUMN_NAME": "depreciationOnYTD",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Accumulated Depricationon YTD",
        "DISPLAY_ORDER": 20
      }, {
        "COLUMN_NAME": "currentBookValue",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Current Book Value",
        "DISPLAY_ORDER": 21
      }],
      productName: '',
      LocationId: '',
      search: '',
      ProductTypeId: '',
      FromDate: '',
      ToDate: '',
      SortBy: '',
      SortExp: '',
      PageSize: 10,
      PageNumber: 1,
      TotalRecords: 0,
      CurrentPage: 1,
      TotalPages: 0,
      privilegeParams: null,
      UserType: null
    };
  },
  created: async function () {
    var vm = this;
    vm.privilegeParams = `controller=Asset&action=`;
    await vm.CheckPrivilege();
    DepreciationListSchema.bindleftCommonSearchdropdown(vm, "Asset", "ProductType");
    DepreciationListSchema.bindleftCommonSearchdropdown(vm, "Asset", "Location");
    DepreciationListSchema.bindleftCommonSearchdropdown(vm, "Asset", "DepreciationDate");
    vm.UserType = vm.GetUserInfo.UserType;
  },
  methods: {
    CheckPrivilege() {
      var vueObj = this;
      if (vueObj.UserType == 'CA') {
        DataService["a" /* default */].CheckPrivilege(vueObj.privilegeParams + 'Depreciation').then(response => {
          if (response.data) {
            vueObj.GetDepreciationList();
          } else {
            vueObj.ShowAlert(vueObj.$t('NotAuthorizedSection'), "failure", true, "Alert");
          }
        });
      } else {
        vueObj.GetDepreciationList();
      }
    },
    async GetDepreciationList() {
      debugger;
      var url = `productName=${this.productName}&searchCondition=${this.search}&fromDate=${this.FromDate}&toDate=${this.ToDate}&pageSize=${this.PageSize}&pageNum=${this.PageNumber}&sortBy=${this.SortBy}&sortExp=${this.SortExp}&location_id=${this.LocationId}&productTypeIds=${this.ProductTypeId}`;
      await DataService["a" /* default */].GetDepreciationList(url).then(response => {
        if (response.data != null) {
          if (response.data.length > 0) {
            this.DepreciationListData = response.data;
            this.TotalRecords = response.data[0].totalrecords;
            this.TotalPages = Math.ceil(this.TotalRecords / this.PageSize);
            this.CurrentPage = this.PageNumber;
            this.noRecord = false;
          } else {
            this.noRecord = true;
            this.DepreciationList = [];
            this.TotalRecorded = 0;
          }
        }
      });
    },
    pagerMethod: function (value) {
      debugger;
      this.PageSize = value.PageSize;
      this.PageNumber = value.PageNumber;
      this.GetDepreciationList();
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
    renderActions(row) {
      var self = this;
      let rtnActionArray = [];
      self.listActions.forEach(actionItem => {
        let action = {
          ...actionItem
        };
        // switch (action.title) {
        //     case 'Edit':
        //         action.isVisible = true;
        //         break;
        // }
        rtnActionArray.push(action);
      });
      return rtnActionArray;
    },
    commonHeaderButtonClick(event) {
      debugger;
      switch (event.callbackfunction) {
        case "BacktoList":
          this.OpenBacktoList();
          break;
      }
    },
    actionButtonClick() {},
    OpenBacktoList() {
      debugger;
      var vm = this;
      vm.$router.push({
        path: '/AssetCatalog/Index'
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/Asset/DepreciationList.vue?vue&type=script&lang=js&
 /* harmony default export */ var Asset_DepreciationListvue_type_script_lang_js_ = (DepreciationListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/Asset/DepreciationList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Asset_DepreciationListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DepreciationList = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d0e5713.js.map