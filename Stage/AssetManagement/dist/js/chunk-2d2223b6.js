(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d2223b6"],{

/***/ "ce75":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetCatalog/ItemWriteOffList.vue?vue&type=template&id=f1f812c6&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_c('tg-list', {
    attrs: {
      "IsShowAction": false,
      "listType": ['List'],
      "ModuleName": "Asset",
      "SubModuleCode": "Asset",
      "IdentityColumn": "ASSET_CATALOGUE_ID",
      "HeaderText": "Product Write-Off",
      "ListData": _vm.ItemWriteOffData,
      "HeaderData": _vm.Headers,
      "widgets": _vm.widgets,
      "showCheckBox": false,
      "callbackfunction": _vm.FetchData,
      "HeaderButtons": _vm.listheaderbuttons,
      "NorecordfoundText": _vm.$t('NorecordfoundText'),
      "TotalRecords": _vm.TotalRecords,
      "SearchFields": _vm.leftSearchFields,
      "RenderRowActionMethod": _vm.renderActions,
      "ListDataCallBackFunction": _vm.FetchData,
      "LegendArray": _vm.LegendArray,
      "SortExp": _vm.SortExp,
      "SortBy": _vm.SortBy
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

// CONCATENATED MODULE: ./src/views/AssetCatalog/ItemWriteOffList.vue?vue&type=template&id=f1f812c6&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// CONCATENATED MODULE: ./src/views/AssetCatalog/ItemWriteOffListSchema.js


let buttons = [{
  title: 'Add New',
  iconClass: 'fa fa-plus',
  callbackfunction: 'addnew',
  additionalClass: '',
  isdisabled: false,
  isvisible: true,
  checkPrivilege: false
}];
let leftsearchSchema = [{
  fieldName: "Location",
  fieldType: "ddl-multilevel",
  fieldIcon: "fa-map-marker",
  paramName: "LocationId",
  fieldSearchConditionName: [''],
  isSearch: false,
  value: null,
  listOptions: []
}, {
  fieldName: 'Product Name/Code',
  fieldType: "text",
  fieldIcon: "fa-user",
  paramName: "ProductName ",
  fieldSearchConditionName: [''],
  isSearch: false,
  value: "",
  listOptions: []
}];
async function bindleftCommonSearchdropdown(instance, modulename, filtername) {
  var vm = instance;
  var LocationData = [];
  if (filtername == "Location") {
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
      vm.leftSearchFields[0].listOptions = LocationData;
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
/* harmony default export */ var ItemWriteOffListSchema = ({
  buttons,
  leftsearchSchema,
  bindleftCommonSearchdropdown
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetCatalog/ItemWriteOffList.vue?vue&type=script&lang=js&



/* harmony default export */ var ItemWriteOffListvue_type_script_lang_js_ = ({
  components: {},
  data() {
    return {
      listheaderbuttons: ItemWriteOffListSchema.buttons,
      leftSearchFields: ItemWriteOffListSchema.leftsearchSchema,
      listActions: ItemWriteOffListSchema.listActions,
      LegendArray: [],
      ItemWriteOffData: [],
      PageSize: 10,
      PageNumber: 1,
      isPaged: 1,
      PageSizeOption: null,
      StatusListForListing: [],
      searchCondition: "",
      Headers: [{
        "COLUMN_NAME": "ItemCode",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Product Code",
        "DISPLAY_ORDER": 1
      }, {
        "COLUMN_NAME": "ItemName",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Product Name",
        "DISPLAY_ORDER": 2
      }, {
        "COLUMN_NAME": "UniqueName",
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": "Unique Name",
        "DISPLAY_ORDER": 3
      }, {
        "COLUMN_NAME": "LocationName",
        "DATA_TYPE": "text",
        "SORTABLE": true,
        "VISIBLE": true,
        "DISPLAY_NAME": "Location",
        "DISPLAY_ORDER": 4
      }, {
        "COLUMN_NAME": "Writeoffqty",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Available Quantity",
        "DISPLAY_ORDER": 5
      }, {
        "COLUMN_NAME": "PurchaseCost",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Purchase Value",
        "DISPLAY_ORDER": 6
      }, {
        "COLUMN_NAME": "BookCurrentCost",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Current book Value",
        "DISPLAY_ORDER": 7
      }, {
        "COLUMN_NAME": "SalvageCost",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Salvage Cost",
        "DISPLAY_ORDER": 8
      }, {
        "COLUMN_NAME": "WriteoffCost",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Write-Off Value",
        "DISPLAY_ORDER": 9
      }],
      noRecord: true,
      TotalRecords: 0,
      CurrentPage: 1,
      TotalPages: 0,
      SortBy: "",
      SortExp: "",
      legendProgress: [{
        class: '',
        backgroundColor: '#17a2b8',
        name: 'Draft'
      }, {
        class: 'legend-Progress',
        backgroundColor: '',
        name: 'Approved'
      }, {
        class: 'legend-pending',
        backgroundColor: '',
        name: 'Pending'
      }, {
        class: '',
        backgroundColor: '#fe6847',
        name: 'SendForCorrection'
      }, {
        class: '',
        backgroundColor: '#ee1313',
        name: 'Rejected'
      }]
    };
  },
  created() {
    var vm = this;
    ItemWriteOffListSchema.bindleftCommonSearchdropdown(vm, "Asset", "Location");
    ItemWriteOffListSchema.bindleftCommonSearchdropdown(vm, "Asset", "Product Name/Code");
    vm.FetchData();
  },
  methods: {
    columnDataFormatter: function (row, column) {
      return row[column.COLUMN_NAME];
    },
    FetchData() {
      debugger;
      var vm = this;
      var url = `pageSize=${vm.PageSize}&pageNum=${vm.PageNumber}&sortBy=${vm.SortBy}&sortExp=${vm.SortExp}&statusIds=&LocationId=&${vm.searchCondition}`;
      DataService["a" /* default */].ItemWriteOffList(url).then(response => {
        if (response.data != null) {
          if (response.data.length > 0) {
            vm.ItemWriteOffData = response.data;
            vm.TotalRecords = 50;
            vm.TotalPages = Math.ceil(vm.TotalRecords / vm.PageSize);
            vm.CurrentPage = vm.PageNumber;
            vm.noRecord = false;
          } else {
            vm.noRecord = true;
            vm.ItemWriteOffData = [];
            vm.TotalRecords = 0;
          }
        }
        setTimeout(function () {
          vm.ResponsiveDataTable('tablelistingdata');
        }, 500);
      });
    },
    leftCommonSearch: function (value) {
      debugger;
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
      // debugger
      switch (event.callbackfunction) {
        case "addnew":
          this.OpenItemWriteOff();
          break;
      }
    },
    OpenItemWriteOff() {
      var vm = this;
      //  debugger
      vm.$router.push({
        path: 'ItemWriteOff'
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
    }
  }
});
// CONCATENATED MODULE: ./src/views/AssetCatalog/ItemWriteOffList.vue?vue&type=script&lang=js&
 /* harmony default export */ var AssetCatalog_ItemWriteOffListvue_type_script_lang_js_ = (ItemWriteOffListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/AssetCatalog/ItemWriteOffList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  AssetCatalog_ItemWriteOffListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ItemWriteOffList = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d2223b6.js.map