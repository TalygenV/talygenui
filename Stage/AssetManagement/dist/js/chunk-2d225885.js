(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d225885"],{

/***/ "e598":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetCatalog/CustomEditProducts.vue?vue&type=template&id=4153b047&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "main-content"
  }, [_c('div', {
    attrs: {
      "id": "divMainproductData"
    }
  }, [_c('div', {
    staticClass: "container-fluid tab-style"
  }, [_c('div', {
    staticClass: "tab_container"
  }, [_c('div', {
    staticClass: "responsive-tabs-container accordion-xs accordion-sm"
  }, [_c('ul', {
    staticClass: "nav nav-tabs all-tabs responsive-tabs mt-2 responivecustomtab HideTab",
    attrs: {
      "id": "myTab",
      "role": "tablist"
    }
  }, [_c('li', {
    staticClass: "nav-item"
  }, [_c('a', {
    staticClass: "nav-link active productCreateTab1",
    attrs: {
      "href": "#tabs-1",
      "data-toggle": "tab",
      "role": "tab",
      "id": "tab-Details"
    },
    on: {
      "click": function ($event) {
        return _vm.UserGuideTabChange('User_Guide_Asset_Catalogue_Add');
      }
    }
  }, [_c('span', {
    staticClass: "tab-no"
  }, [_vm._v("1")]), _vm._v(" " + _vm._s(_vm.$t('CreateItem')))])]), _c('li', {
    staticClass: "nav-item"
  }, [_c('a', {
    staticClass: "nav-link gen_icon productDeployTab2",
    attrs: {
      "href": "#tabs-2",
      "data-toggle": "tab",
      "role": "tab",
      "id": "tab-timeline"
    },
    on: {
      "click": function ($event) {
        return _vm.UserGuideTabChange('User_Guide_Asset_Catalogue_DeployProduct_Tab');
      }
    }
  }, [_c('span', {
    staticClass: "tab-no"
  }, [_vm._v("2")]), _vm._v(" " + _vm._s(_vm.$t('DeployItem')))])]), _c('li', {
    staticClass: "nav-item"
  }, [_c('a', {
    staticClass: "nav-link gen_icon_1",
    attrs: {
      "href": "#tabs-3",
      "data-toggle": "tab",
      "role": "tab",
      "id": "tab-timeline"
    },
    on: {
      "click": function ($event) {
        return _vm.UserGuideTabChange('User_Guide_Asset_Catalogue_RelatedInfo_Tab');
      }
    }
  }, [_c('span', {
    staticClass: "tab-no"
  }, [_vm._v("3")]), _vm._v(" " + _vm._s(_vm.$t('RelatedInformation')) + " ")])]), _c('li', {
    staticClass: "nav-item"
  }, [_c('a', {
    staticClass: "nav-link gen_icon_2",
    attrs: {
      "href": "#tabs-4",
      "data-toggle": "tab",
      "role": "tab",
      "id": "tab-timeline"
    },
    on: {
      "click": function ($event) {
        return _vm.UserGuideTabChange('User_Guide_Asset_Catalogue_Attachments_Tab');
      }
    }
  }, [_c('span', {
    staticClass: "tab-no"
  }, [_vm._v("4")]), _vm._v(" " + _vm._s(_vm.$t('Attachments')) + " ")])])])])])]), _vm.IsShowCreateProduct ? _c('div', {
    staticClass: "border p-3"
  }, [_vm.FormSchema.length > 0 ? _c('dynamic-form', {
    attrs: {
      "lang": "en",
      "buttons": _vm.buttons,
      "schema": _vm.FormSchema
    },
    on: {
      "OnSubmit": _vm.onSubmit
    }
  }) : _vm._e(), _c('div', {
    staticClass: "col-lg-6"
  }, [_c('div', {
    staticClass: "py-2"
  }, [_c('small', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.$t('MandatoryString')))])])])], 1) : _vm._e(), _vm.IsShowDeployProducts ? _c('DeployProduct') : _vm._e(), _vm.IsShowRelatedInformation ? _c('RelatedInformation') : _vm._e(), _vm.IsShowAttachmentTab ? _c('ShowAttachmentTab') : _vm._e()], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/AssetCatalog/CustomEditProducts.vue?vue&type=template&id=4153b047&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// EXTERNAL MODULE: ./src/views/AssetCatalog/RelatedInformation.vue + 30 modules
var RelatedInformation = __webpack_require__("a888");

// EXTERNAL MODULE: ./src/views/AssetCatalog/AttachmentsTab.vue + 4 modules
var AttachmentsTab = __webpack_require__("3ab7");

// EXTERNAL MODULE: ./src/views/AssetCatalog/DeployProducts.vue + 9 modules
var DeployProducts = __webpack_require__("41ac");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetCatalog/CustomEditProducts.vue?vue&type=script&lang=js&






/* harmony default export */ var CustomEditProductsvue_type_script_lang_js_ = ({
  components: {
    DeployProduct: DeployProducts["a" /* default */],
    RelatedInformation: RelatedInformation["default"],
    ShowAttachmentTab: AttachmentsTab["a" /* default */],
    CustomEditProducts: CustomEditProducts
  },
  data() {
    return {
      // isLoading:false,
      value: "",
      productId: this.$route.params.id,
      // CustomFields New form
      ProductData: null,
      IsShowDeployProducts: false,
      IsShowCreateProduct: true,
      IsShowRelatedInformation: false,
      IsShowAttachmentTab: false,
      IsShowbtnPrevious: false,
      IsShowbtnNext: true,
      IsShowbtnSave: true,
      IsShowbtnCancel: true,
      FormSchema: [],
      FieldObj: {},
      FieldObjArray: [],
      buttons: [{
        type: "submit",
        class: "btn btn-warning HideTab",
        text: "Previous <i class='fa fa-angle-double-left pr-2'></i>",
        isVisible: false,
        onClick: this.btnPreviousTab
      }, {
        type: "submit",
        class: "btn btn-primary HideTab",
        text: "Next<i class='fa fa-angle-double-right pl-2'></i>",
        isVisible: true,
        onClick: this.btnNextTab
      }, {
        type: "submit",
        class: "btn btn-success",
        text: "<i class='fa fa-save pr-2'></i>Save ",
        isVisible: true
      }, {
        type: "button",
        class: "btn btn-danger",
        text: "<i class='fa fa-close pr-2'></i>Cancel",
        isVisible: true,
        onClick: this.onCancel
      }],
      AssetCatalogId: window.location.href.split('/')[5],
      AssetCatalogDataByID: []
    };
  },
  created: function () {
    var vm = this;
    vm.userid = vm.GetUserInfo.ID;
    vm.username = vm.GetUserInfo.Name;
    vm.FetchData();
  },
  updated: function () {
    var vm = this;
    vm.GetAssetCatalogById();
  },
  methods: {
    BtnNextClick() {
      var vm = this;
      vm.btnNextTab();
    },
    BtnPreviousClick() {
      var vm = this;
      vm.btnPreviousTab();
    },
    onCancel: function () {
      this.$router.push({
        name: 'ProductListing'
      });
    },
    onSubmit: function (formfields, val) {
      debugger;
      var vm = this;
      var datafields = formfields;
      let myObj = {};
      myObj.AssetCatalogueId = vm.AssetCatalogId;
      myObj.AssetTypeId = datafields.asset_type_id;
      myObj.Name = datafields.name;
      myObj.BarcodeTypeId = datafields.barcode_type_id;
      myObj.StatusId = datafields.status_id;
      myObj.AuditFrequency = datafields.audit_frequency;
      myObj.ImageCaptureFrequency = datafields.image_capture_frequency;
      myObj.CalibrationFrequency = datafields.calibration_frequency;
      myObj.ItemCode = datafields.item_code;
      myObj.Description = datafields.description;
      myObj.ForCompany = datafields.min_cmp_quantity;
      myObj.ForEmployee = datafields.min_emp_quantity;
      var formData = new FormData();
      var postString = {
        "postString": myObj
      };
      formData.append("postString", JSON.stringify(myObj));
      formData.append("Files", vm.fileUploaded);
      DataService["a" /* default */].AddAssetWizard(formData).then(function (response) {});
    },
    // Used  this method to generate dynamiclly using custom layout.
    FetchData: function () {
      var vm = this;
      const params = `id=0&CustomLayoutId=95&moduleName=Asset&subModuleCode=Manage_Products&langCode=en`;
      DataService["a" /* default */].getFormLayout(params).then(response => {
        //  vm.isLoading=false;
        if (response.data != "" && response.data != null) {
          vm.ProductData = response.data.data;
          if (vm.ProductData != null && vm.ProductData.length > 0) {
            var groupId = vm.ProductData[0].group_id;
            vm.ProductData.forEach((item, indx) => {
              groupId = item.group_id;
              var chkGroup = $.grep(vm.FormSchema, function (element, index) {
                return element.group_id == groupId;
              });
              if (chkGroup.length == 0) {
                var returnedData = $.grep(vm.ProductData, function (element, index) {
                  return element.group_id == groupId;
                });
                if (returnedData.length > 0) {
                  //  var config = {};
                  //  returnedData = returnedData.map(obj => ({ ...obj,config, validationRules: { "required": obj.is_required } }));
                  returnedData = returnedData.map(obj => ({
                    ...obj,
                    validationRules: {
                      "required": obj.is_required
                    }
                  }));
                  var objGroup = {
                    group_id: groupId,
                    layoutType: returnedData[0].layout_type,
                    group_name: returnedData[0].group_name,
                    group_display_name: returnedData[0].group_display_name,
                    Data: returnedData
                  };
                  vm.FormSchema.push(objGroup);
                }
              }
              // if (vm.FormSchema[0].Data[0].name == 'asset_type_id') {
              //     var config = {
              //         options: []
              //     }
              //     var DDLData = JSON.parse(vm.FormSchema[0].Data[0].select_options);
              //     DDLData.forEach((itm, index) => {

              //         config.options.push({
              //             value: itm.value,
              //             name: itm.name
              //         })

              //     })
              //     vm.FormSchema[0].Data[0].config = config;
              //     DDLData = [];
              // }
              // if (vm.FormSchema[0].Data[3].name == 'status_id') {

              //     var config = {
              //         options: []
              //     }
              //     var DDLData = JSON.parse(vm.FormSchema[0].Data[3].select_options);
              //     DDLData.forEach((item, index) => {
              //         config.options.push({
              //             value: item.value,
              //             name: item.name
              //         })

              //     })
              //     vm.FormSchema[0].Data[3].config = config;
              //     DDLData = [];
              // }
            });
          }
        }
      });
    },

    // Used this method to bind field values in edit case.
    GetAssetCatalogById() {
      var vm = this;
      var url = `id=${vm.AssetCatalogId}`;
      DataService["a" /* default */].GetById(url).then(response => {
        var vm = this;
        vm.AssetCatalogDataByID = JSON.parse(response.data.result).data[0];
        vm.FormSchema[0].Data[0].value = vm.AssetCatalogDataByID.ASSET_TYPE_ID;
        vm.FormSchema[0].Data[1].value = vm.AssetCatalogDataByID.NAME;
        vm.FormSchema[0].Data[2].value = vm.AssetCatalogDataByID.BARCODE_TYPE_ID;
        vm.FormSchema[0].Data[3].value = vm.AssetCatalogDataByID.STATUS_ID;
        vm.FormSchema[0].Data[4].value = vm.AssetCatalogDataByID.AUDIT_FREQUENCY;
        vm.FormSchema[0].Data[5].value = vm.AssetCatalogDataByID.IMAGE_CAPTURE_FREQUENCY;
        vm.FormSchema[0].Data[6].value = vm.AssetCatalogDataByID.CALIBRATION_FREQUENCY;
        vm.FormSchema[0].Data[7].value = vm.AssetCatalogDataByID.ITEM_CODE;
        vm.FormSchema[1].Data[0].value = vm.AssetCatalogDataByIDDESCRIPTION;
        vm.FormSchema[2].Data[0].value = vm.AssetCatalogDataByID.MIN_CMP_QUANTITY;
        vm.FormSchema[2].Data[1].value = vm.AssetCatalogDataByID.MIN_EMP_QUANTITY;
      });
    },
    UserGuideTabChange(item) {
      var vm = this;
      if (item == 'User_Guide_Asset_Catalogue_Add') {
        vm.IsShowCreateProduct = true;
        vm.IsShowDeployProducts = false;
        vm.IsShowRelatedInformation = false;
        vm.IsShowAttachmentTab = false;
        vm.IsShowbtnPrevious = false;
        vm.IsShowbtnNext = true;
        vm.IsShowbtnSave = true;
        vm.IsShowbtnCancel = true;
      }
      if (item == 'User_Guide_Asset_Catalogue_DeployProduct_Tab') {
        vm.IsShowDeployProducts = true;
        var buttons = vm.buttons;
        vm.IsShowCreateProduct = false;
        vm.IsShowRelatedInformation = false;
        vm.IsShowAttachmentTab = false;
        vm.IsShowbtnPrevious = true;
        vm.IsShowbtnNext = true;
        vm.IsShowbtnSave = false;
        vm.IsShowbtnCancel = false;
      }
      if (item == 'User_Guide_Asset_Catalogue_RelatedInfo_Tab') {
        vm.IsShowDeployProducts = false;
        vm.IsShowCreateProduct = false;
        vm.IsShowRelatedInformation = true;
        var buttons = vm.buttons;
        vm.IsShowAttachmentTab = false;
        vm.IsShowbtnPrevious = true;
        vm.IsShowbtnNext = true;
        vm.IsShowbtnSave = false;
        vm.IsShowbtnCancel = false;
      }
      if (item == 'User_Guide_Asset_Catalogue_Attachments_Tab') {
        vm.IsShowDeployProducts = false;
        vm.IsShowCreateProduct = false;
        vm.IsShowRelatedInformation = false;
        vm.IsShowAttachmentTab = true;
        var buttons = vm.buttons;
        vm.IsShowbtnNext = false, vm.IsShowbtnSave = true, vm.IsShowbtnCancel = true, vm.IsShowbtnPrevious = true;
      }
    },
    btnNextTab() {
      var vm = this;
      var res = vm.getSelectedTabIndex();
      if (res == "#tabs-1") {
        $('.responivecustomtab a[href="#tabs-2"]').trigger('click');
        vm.IsShowDeployProducts = true;
        vm.IsShowCreateProduct = false;
        vm.IsShowRelatedInformation = false;
        vm.IsShowAttachmentTab = false;
        vm.IsShowbtnPrevious = true;
        vm.IsShowbtnNext = true;
        vm.IsShowbtnSave = false;
        vm.IsShowbtnCancel = false;
      }
      if (res == "#tabs-2") {
        $('.responivecustomtab a[href="#tabs-3"]').trigger('click');
        vm.IsShowDeployProducts = false;
        vm.IsShowCreateProduct = false;
        vm.IsShowRelatedInformation = true;
        vm.IsShowAttachmentTab = false;
        vm.IsShowbtnPrevious = true;
        vm.IsShowbtnNext = true;
        vm.IsShowbtnSave = false;
        vm.IsShowbtnCancel = false;
      }
      if (res == "#tabs-3") {
        $('.responivecustomtab a[href="#tabs-4"]').trigger('click');
        vm.IsShowDeployProducts = false;
        vm.IsShowCreateProduct = false;
        vm.IsShowRelatedInformation = false;
        vm.IsShowAttachmentTab = true;
        vm.IsShowbtnNext = false, vm.IsShowbtnSave = true, vm.IsShowbtnCancel = true, vm.IsShowbtnPrevious = true;
      }
    },
    btnPreviousTab() {
      debugger;
      var vm = this;
      var res = vm.getSelectedTabIndex();
      if (res == "#tabs-4") {
        $('.responivecustomtab a[href="#tabs-3"]').trigger('click');
        vm.IsShowDeployProducts = false;
        vm.IsShowCreateProduct = false;
        vm.IsShowRelatedInformation = true;
        vm.IsShowAttachmentTab = false;
        vm.IsShowbtnPrevious = true;
        vm.IsShowbtnNext = true;
        vm.IsShowbtnSave = false;
        vm.IsShowbtnCancel = false;
      }
      if (res == "#tabs-3") {
        $('.responivecustomtab a[href="#tabs-2"]').trigger('click');
        vm.IsShowDeployProducts = true;
        vm.IsShowCreateProduct = false;
        vm.IsShowRelatedInformation = false;
        vm.IsShowAttachmentTab = false;
        vm.IsShowbtnPrevious = true;
        vm.IsShowbtnNext = true;
        vm.IsShowbtnSave = false;
        vm.IsShowbtnCancel = false;
      }
      if (res == "#tabs-2") {
        $('.responivecustomtab a[href="#tabs-1"]').trigger('click');
        vm.IsShowCreateProduct = true;
        vm.IsShowDeployProducts = false;
        vm.IsShowRelatedInformation = false;
        vm.IsShowAttachmentTab = false;
        vm.IsShowbtnPrevious = false;
        vm.IsShowbtnNext = true;
        vm.IsShowbtnSave = true;
        vm.IsShowbtnCancel = true;
      }
    },
    getSelectedTabIndex() {
      var selectedTab = "";
      $('.responivecustomtab a').each(function (index) {
        if ($(this).hasClass("active")) {
          selectedTab = $(this).attr('href');
        }
      });
      return selectedTab;
    }
  }
});
// CONCATENATED MODULE: ./src/views/AssetCatalog/CustomEditProducts.vue?vue&type=script&lang=js&
 /* harmony default export */ var AssetCatalog_CustomEditProductsvue_type_script_lang_js_ = (CustomEditProductsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/AssetCatalog/CustomEditProducts.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  AssetCatalog_CustomEditProductsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CustomEditProducts = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d225885.js.map