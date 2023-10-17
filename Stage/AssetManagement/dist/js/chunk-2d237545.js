(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d237545"],{

/***/ "fb3f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetCatalog/ManageProducts.vue?vue&type=template&id=14a7528d&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "tab padding-t_8",
    attrs: {
      "id": "tabs"
    }
  }, [_c('loader', {
    attrs: {
      "is-visible": _vm.isLoading
    }
  }), _c('div', {
    staticClass: "container-fluid tab-style"
  }, [_c('input', {
    attrs: {
      "type": "hidden",
      "id": "AttachmentName",
      "name": "AttachmentName"
    }
  }), _c('div', {
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
        return _vm.UserGuideChange('User_Guide_Asset_Catalogue_Add');
      }
    }
  }, [_c('span', {
    staticClass: "tab-no"
  }, [_vm._v("1")]), _vm._v(" " + _vm._s(_vm.$t('CreateItem')))])]), _c('li', {
    class: {
      'nav-item disabled': _vm.AssetCatalogId == 0
    }
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
        return _vm.UserGuideChange('User_Guide_Asset_Catalogue_DeployProduct_Tab');
      }
    }
  }, [_c('span', {
    staticClass: "tab-no"
  }, [_vm._v("2")]), _vm._v(" " + _vm._s(_vm.$t('DeployItem')))])]), _c('li', {
    class: {
      'nav-item disabled': _vm.AssetCatalogId == 0
    }
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
        return _vm.UserGuideChange('User_Guide_Asset_Catalogue_RelatedInfo_Tab');
      }
    }
  }, [_c('span', {
    staticClass: "tab-no"
  }, [_vm._v("3")]), _vm._v(" " + _vm._s(_vm.$t('RelatedInformation')) + " ")])]), _c('li', {
    class: {
      'nav-item disabled': _vm.AssetCatalogId == 0
    }
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
        return _vm.UserGuideChange('User_Guide_Asset_Catalogue_Attachments_Tab');
      }
    }
  }, [_c('span', {
    staticClass: "tab-no"
  }, [_vm._v("4")]), _vm._v(" " + _vm._s(_vm.$t('Attachments')) + " ")])])])])])]), _vm.IsShowDeployProducts ? _c('DeployProduct', {
    attrs: {
      "CatID": _vm.CatID
    }
  }) : _vm._e(), _vm.IsShowCreateProduct ? _c('CreateProduct', {
    ref: "UpdateProduct",
    attrs: {
      "AssetCatalogId": _vm.AssetCatalogId
    }
  }) : _vm._e(), _vm.IsShowRelatedInformation ? _c('RelatedInformation', {
    attrs: {
      "chkRelatedInfo": _vm.chkRelatedInfo
    }
  }) : _vm._e(), _vm.IsShowAttachmentTab ? _c('ShowAttachmentTab', {
    ref: "UpdateProduct"
  }) : _vm._e(), _c('div', {
    staticClass: "col-lg-6 text-right mt-3 float-right"
  })], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/AssetCatalog/ManageProducts.vue?vue&type=template&id=14a7528d&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/views/AssetCatalog/DeployProducts.vue + 9 modules
var DeployProducts = __webpack_require__("41ac");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetCatalog/CreateProducts.vue?vue&type=template&id=4a37a275&
var CreateProductsvue_type_template_id_4a37a275_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_c('loader', {
    attrs: {
      "is-visible": _vm.isLoading
    }
  }), _c('div', {
    staticClass: "comapny-setup"
  }, [_c('input', {
    attrs: {
      "type": "hidden",
      "asp-for": "AssetCatalogueId"
    }
  }), _c('div', {
    staticClass: "border p-3"
  }, [_vm.DataLoaded ? _c('dynamic-form', {
    attrs: {
      "buttons": _vm.buttons,
      "schema": _vm.FormSchema
    },
    on: {
      "OnSubmit": _vm.onSubmit
    }
  }) : _vm._e()], 1)]), _vm.IsShowAddNamePopup ? _c('TagNamePopup') : _vm._e()], 1);
};
var CreateProductsvue_type_template_id_4a37a275_staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/AssetCatalog/CreateProducts.vue?vue&type=template&id=4a37a275&

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// EXTERNAL MODULE: ./src/components/Modal/TagNamePopup.vue + 4 modules
var TagNamePopup = __webpack_require__("56f6");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetCatalog/CreateProducts.vue?vue&type=script&lang=js&



/* harmony default export */ var CreateProductsvue_type_script_lang_js_ = ({
  props: {
    AssetCatalogId: {
      type: String,
      required: true
    }
  },
  components: {
    TagNamePopup: TagNamePopup["a" /* default */]
  },
  data() {
    return {
      FormSchema: [{
        group_name: 'Create Product',
        group_display_name: this.$t('CreateItem'),
        layoutType: "four",
        Data: [{
          astype: "SelectField",
          label: this.$t('ProductType'),
          name: "ProductType",
          value: "",
          placeholder: "",
          config: {
            options: [],
            showAddIcon: false
          },
          validationRules: {
            "required": true
          }
        }, {
          astype: "TextField",
          label: this.$t('ProductName'),
          name: "ProductName",
          value: "",
          placeholder: "",
          validationRules: {
            "required": true,
            max: 250
          }
        }, {
          astype: "SelectField",
          label: this.$t('BarcodeType'),
          name: "BarcodeType",
          value: "",
          placeholder: "",
          config: {
            options: []
          },
          validationRules: {
            "required": true
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
          astype: "SelectField",
          label: this.$t('Audit'),
          name: "Audit",
          value: "",
          placeholder: "",
          config: {
            options: []
          }
        }, {
          astype: "SelectField",
          label: this.$t('ImageCapture'),
          name: "ImageCapture",
          value: "",
          placeholder: "",
          config: {
            options: []
          }
        }, {
          astype: "SelectField",
          label: this.$t('Calibration'),
          name: "Calibration",
          value: "",
          placeholder: "",
          config: {
            options: []
          }
        }, {
          astype: "TextField",
          label: this.$t('ItemCode'),
          name: "ItemCode",
          value: "",
          placeholder: "",
          disabled: true
        }, {
          astype: "FileField",
          showLabel: true,
          label: this.$t('DisplayImage'),
          name: "DisplayImage",
          value: "",
          placeholder: "",
          validationRules: "",
          FieldIndex: 0,
          config: {
            maxSize: 5,
            accept: [{
              fileType: 'png',
              iconClass: 'fa-file-image-o'
            }, {
              fileType: 'jpg',
              iconClass: 'fa-file-image-o'
            }, {
              fileType: 'jpeg',
              iconClass: 'fa-file-image-o'
            }, {
              fileType: 'pdf',
              iconClass: 'fa-file-archive-o'
            }],
            showSelectedFiles: [{
              attachmentId: "1",
              attachmentName: "",
              attachmentPath: ""
            }],
            onChange: this.setFile,
            showAddIcon: false,
            onAddButtonClick: this.AddFileMore,
            multiple: false
          }
        }, {
          astype: "CustomSelectField",
          label: this.$t('Tags'),
          name: "Tags",
          value: "",
          mode: "tag",
          placeholder: "",
          config: {
            options: [],
            showAddIcon: true,
            onAddButtonClick: this.OpenAddTagNamePopup
          }
        }]
      }, {
        layoutType: "Single",
        Data: [{
          astype: "TextAreaField",
          label: this.$t('Description'),
          name: "Description",
          value: "",
          placeholder: ""
        }]
      }, {
        layoutType: "Single",
        Data: [{
          astype: "toggleField",
          label: this.$t('CreateUniqueNameListing'),
          name: "CreateUniqueNameListing",
          value: "",
          placeholder: "",
          visibility: false
        }]
      }, {
        layoutType: "double",
        group_name: 'Minimum Stock For Alert/Location',
        group_display_name: this.$t('Minimum_Stock_For_Alert'),
        Data: [{
          astype: "NumericField",
          label: this.$t('ForCompany'),
          name: "ForCompany",
          value: "",
          placeholder: ""
        }, {
          astype: "NumericField",
          label: this.$t('ForEmployee'),
          name: "ForEmployee",
          value: "",
          placeholder: ""
        }]
      }],
      buttons: [{
        type: "submit",
        class: "btn btn-primary HideTab",
        text: "Next<i class='fa fa-angle-double-right pl-2'></i>",
        name: 'Next'
        //onClick:this.btnNextClick
      }, {
        type: "submit",
        class: "btn btn-success",
        text: "<i class='fa fa-save pr-2'></i>Save",
        name: 'Save',
        isVisible: true
      }, {
        type: "button",
        class: "btn btn-danger",
        text: "<i class='fa fa-close pr-2'></i>Cancel",
        isVisible: true,
        onClick: this.btnCancelClick
      }],
      AssetType: [],
      BarcodeType: [],
      StatusList: [],
      AssetFrequencyList: [],
      IsShowAddNamePopup: false,
      AssetCatalogDataByID: [],
      isLoading: false,
      IsEnableAssetManagement: false,
      fileUploaded: '',
      TagsArray: [],
      DataLoaded: 0,
      TagsSelectedArray: [],
      tagsData: [],
      TagValues: [],
      file: []
    };
  },
  async created() {
    var vm = this;
    await vm.GetAssetType();
    await vm.GetBarcodeType();
    await vm.GetStatusList();
    await vm.GetAssetFrequency();
    await vm.EnableAssetManagement();
    await vm.GetTagsByModuleI();
    await vm.GetAssetTagsById();
    if (window.location.href.split('/')[5] != undefined) {
      vm.AssetCatalogId = window.location.href.split('/')[5];
      vm.FormSchema[2].Data[0].visibility = false;
      await vm.GetAssetCatalogById();
    } else {
      vm.AssetCatalogId = 0;
      vm.FormSchema[2].Data[0].visibility = true;
    }
    vm.DataLoaded = 1;
  },
  methods: {
    btnNextClick() {
      debugger;
      var vm = this;
      vm.$parent.btnNextTab();
    },
    btnCancelClick() {
      var vm = this;
      vm.$parent.btnCancel();
    },
    setFile: function (e) {
      var vm = this;
      for (let index = 0; index < e.target.files.length; index++) {
        const element = e.target.files[index];
        vm.file.push(element);
      }
    },
    onSubmit: function (formfields, val) {
      debugger;
      var vm = this;
      if (vm.IsEnableAssetManagement) {
        let myObj = {};
        let obj1 = {};
        myObj.AssetCatalogueId = vm.AssetCatalogId;
        myObj.Name = formfields.ProductName, myObj.LocationId = vm.LocationId == undefined ? '-1' : vm.LocationId;
        myObj.AssetTypeId = formfields.ProductType.toString(), myObj.BarcodeTypeId = formfields.BarcodeType, myObj.StatusId = formfields.Status.toString(), myObj.AssetTagIdsWizard = Array.prototype.map.call(formfields.Tags, function (item) {
          return item.value;
        }).join(",");
        myObj.CreateUniqueNameListing = formfields.CreateUniqueNameListing == true ? 1 : 0, myObj.TotalCost = "0", myObj.AssetCost = "0", myObj.DeployId = "0";
        myObj.DeployProduct = false;
        myObj.Quantity = "0";
        myObj.UnitPrice = "0";
        myObj.ParentUniqueId = "", myObj.ChildUniqueId = "", myObj.ChildCatalogueId = "", myObj.CatalogueId = "", myObj.CatalogHdnId = "", myObj.SelfieEnabled = "", myObj.ChildCategoryName = "", myObj.AssetUniqueName = "", myObj.AssetCatalogName = "", myObj.Description = formfields.Description, myObj.AssetTypeTagIdsWizard = "", myObj.Manufacturer = "", myObj.NumberOfItems = "0", myObj.AsseetGroupQuantity = "", myObj.ItemCode = "", myObj.ChildItemCode = "", myObj.ChildCatalogName = "", myObj.ChildRequestQuantity = "", myObj.ChildAssetType = "", myObj.AssetType = "", myObj.StandardTypeId = "", myObj.AssetCompartmentId = "", myObj.AssetGroupId = "", myObj.IsSelfCheckout = "", myObj.IsEnableTerms = "", myObj.SubLocationId = "", myObj.Attachment = "", myObj.CreatedAt = "", myObj.CreatedBy = "", myObj.ModifiedAt = "", myObj.ModifiedBy = "", myObj.Asset_Type = "", myObj.Status = "", myObj.ForCompany = formfields.ForCompany, myObj.ForEmployee = formfields.ForEmployee, myObj.MoveToInTransitInfo = "", myObj.AvailableItems = "", myObj.PendingAvailableQuantity = "", myObj.PendingTotalAvailableItems = "", myObj.TotalQuantity = "", myObj.ChildAvailableItems = "", myObj.TotalFilesCount = "", myObj.AssetTypeCategory = "", myObj.AssetTypeCategoryName = "", myObj.AssetTypeCategoryCode = "", myObj.AttachmentName = "", myObj.DisplayImage = "", myObj.IsTermsAndCondition = "", myObj.TotalTermsConditionFilesCount = "", myObj.RelatedInfoId = "", myObj.UniqueName = formfields.CreateUniqueNameListing == true ? 1 : 0, myObj.AssetCatalogueGroup = "", myObj.ChildCreateUniqueNameListing = "", myObj.IsTransitItems = "", myObj.AttachmentPath = "", myObj.LocationName = "", myObj.SubLocationName = "", myObj.AuditFrequency = formfields.Audit == "" ? "" : formfields.Audit, myObj.ImageCaptureFrequency = formfields.ImageCapture == "" ? "" : formfields.ImageCapture, myObj.CalibrationFrequency = formfields.Calibration == "" ? "" : formfields.Calibration, myObj.CR = "", myObj.DR = "", myObj.IsDisplayImage = "", myObj.PurchaseValue = "", myObj.CurrentBookValue = "", myObj.SalvageValue = "", myObj.Unit = "", myObj.ReqFrom = "", myObj.IsContainer = "", myObj.IsSampleData = "", myObj.Model = "", myObj.Vendor = "", myObj.ManufacturerId = "", myObj.PurchaseOrder = "", myObj.WarrantyDuration = "", myObj.DepreciationRuleId = "", myObj.OrderDate = "", myObj.SalvageCost = "", myObj.ItemLife = "", myObj.InvoiceNumber = "", myObj.InvoiceDate = "", myObj.InsurerName = "", myObj.InsuranceRefNumber = "", myObj.InsuranceTo = "", myObj.DeployedBy = "", myObj.DeployedAt = "", myObj.EnableWarranty = "", myObj.EnableInsurance = "", myObj.EnableItemCost = "", myObj.EnableCalibration = "", myObj.EnableDepreciation = "";
        var formData = new FormData();
        var postString = {
          "postString": myObj
        };
        formData.append("postString", JSON.stringify(myObj));
        if (formfields.DisplayImage != null) {
          formData.append("Files", formfields.DisplayImage[0]);
        }
        formData.append("IsTermsAndCondition", false);
        formData.append("Is_DisplayImage", 'Yes');
        DataService["a" /* default */].AddAssetWizard(formData).then(function (response) {
          if (response.data.msg == "size_exceed" || response.data.msg == "FileSizeExceeded" || response.data.msg == "ExceedAllowedSize") {
            vm.ShowAlert(vm.$t('FileSizeExceedMsg'), "failure", true, vm.$t("Alert"));
          } else if (response.data.msg == 'alreadyexist') {
            vm.ShowAlert(vm.$t("Already exist record!"), "warning", vm.$t('Alert'));
          } else if (response.data.msg == 'ValidFileUploadMsg') {
            vm.ShowAlert(vm.$t("Please upload valid file!"), "warning", vm.$t('Alert'));
          } else if (response.data.msg == 'add') {
            if (val == "Next") {
              var recId = response.data.recId;
              vm.$router.push({
                path: '/AssetCatalog/Update/' + recId
              });
              vm.$parent.btnNextTab(recId);
            } else {
              vm.ShowAlert(vm.$t("Product has been updated Successfully"), "success", vm.$t('Alert'));
              vm.$router.push({
                path: '/AssetCatalog/Index'
              });
            }
          } else {
            vm.ShowAlert((vm.$t('Unknown Error'), "faliure", vm.$t("Alert")));
          }
        });
      } else {
        vm.ShowAlert((vm.$t('UnauthorizedAccess'), "faliure", true, vm.$t("Alert")));
      }
    },
    async GetTagsByModuleI() {
      var vm = this;
      await DataService["a" /* default */].GetTagsByModuleId('moduleName=Asset').then(function (response) {
        vm.TagsArray = JSON.parse(response.data).data;
        vm.TagsArray.forEach((itm, index) => {
          vm.FormSchema[0].Data[9].config.options.push({
            name: itm.TAG_NAME,
            value: itm.TAG_ID
          });
        });
      });
    },
    // UploadFile(event) {

    //     var vm = this;
    //     vm.fileUploaded = event.target.files[0];
    // },
    EnableAssetManagement: function () {
      let url = `moduleName=Asset&configkey=CanSeeAssetManagement`;
      DataService["a" /* default */].EnableAssetManagement(url).then(response => {
        this.IsEnableAssetManagement = response.data;
      });
    },
    async GetAssetTagsById() {
      var vm = this;
      var params = `id=${vm.AssetCatalogId}&is_for=ASSET_CATALOGUE`;
      await DataService["a" /* default */].GetAssetTagsById(params).then(response => {
        vm.tagsData = JSON.parse(response.data);
        vm.tagsData.forEach((item, index) => {
          vm.TagsSelectedArray.push({
            label: item.TAG_NAME,
            value: item.TAG_ID
          });
        });
        vm.FormSchema[0].Data[9].value = vm.TagsSelectedArray;
      });
    },
    GetAssetCatalogById() {
      debugger;
      debugger;
      var vm = this;
      vm.isLoading = true;
      var url = `id=${vm.AssetCatalogId}`;
      DataService["a" /* default */].GetById(url).then(response => {
        vm.AssetCatalogDataByID = JSON.parse(response.data.result).data[0];
        vm.FormSchema[0].Data[0].value = vm.AssetCatalogDataByID.ASSET_TYPE_ID;
        vm.FormSchema[0].Data[1].value = vm.AssetCatalogDataByID.NAME;
        vm.FormSchema[0].Data[2].value = vm.AssetCatalogDataByID.BARCODE_TYPE_ID;
        vm.FormSchema[0].Data[7].value = vm.AssetCatalogDataByID.ITEM_CODE;
        vm.FormSchema[0].Data[6].value = vm.AssetCatalogDataByID.CALIBRATION_FREQUENCY == null ? "" : vm.AssetCatalogDataByID.CALIBRATION_FREQUENCY;
        vm.FormSchema[0].Data[5].value = vm.AssetCatalogDataByID.IMAGE_CAPTURE_FREQUENCY == null ? "" : vm.AssetCatalogDataByID.IMAGE_CAPTURE_FREQUENCY;
        vm.FormSchema[0].Data[4].value = vm.AssetCatalogDataByID.AUDIT_FREQUENCY == null ? "" : vm.AssetCatalogDataByID.AUDIT_FREQUENCY;
        vm.FormSchema[0].Data[3].value = vm.AssetCatalogDataByID.STATUS_ID;
        vm.LocationId = vm.AssetCatalogDataByID.LOCATION_ID;
        vm.FormSchema[1].Data[0].value = vm.AssetCatalogDataByID.DESCRIPTION;
        vm.FormSchema[3].Data[0].value = vm.AssetCatalogDataByID.MIN_CMP_QUANTITY;
        vm.FormSchema[3].Data[1].value = vm.AssetCatalogDataByID.MIN_EMP_QUANTITY;
        vm.FormSchema[0].Data[8].config.showSelectedFiles[0].attachmentPath = vm.AssetCatalogDataByID.ATTACHMENT_PATH;
        if (vm.AssetCatalogDataByID.ATTACHMENT_PATH != null && vm.AssetCatalogDataByID.ATTACHMENT_PATH != '') {
          vm.FormSchema[0].Data[8].config.showSelectedFiles[0].attachmentName = vm.AssetCatalogDataByID.ATTACHMENT_PATH.split('/')[7];
        }
        vm.isLoading = false;
      });
    },
    async GetAssetType() {
      var vm = this;
      vm.isLoading = true;
      var url = `type=ITEMCODE&issueTo=&locationId=`;
      await DataService["a" /* default */].GetAssetTypeCustom(url).then(response => {
        vm.AssetType = JSON.parse(response.data);
        vm.AssetType.forEach(itm => {
          vm.FormSchema[0].Data[0].config.options.push({
            name: itm.ASSETTYPE,
            value: itm.ASSETID
          });
        });
        vm.isLoading = false;
      });
    },
    async GetBarcodeType() {
      var vm = this;
      vm.isLoading = true;
      var url = `BarcodeTypeId=`;
      await DataService["a" /* default */].GetBarcodetype(url).then(response => {
        vm.BarcodeType = JSON.parse(response.data.result);
        vm.BarcodeType.forEach((itm, index) => {
          vm.FormSchema[0].Data[2].config.options.push({
            name: itm.BARCODE_TYPE,
            value: itm.BARCODE_TYPE_ID
          });
        });
        vm.isLoading = false;
      });
    },
    async GetStatusList() {
      var vm = this;
      vm.isLoading = true;
      var url = `langCode=en&statusType=AssetManagement&hasglobal=true`;
      await DataService["a" /* default */].GetStatusList(url).then(response => {
        vm.StatusList = JSON.parse(response.data);
        vm.StatusList.forEach(item => {
          vm.FormSchema[0].Data[3].config.options.push({
            name: item.STATUS,
            value: item.STATUS_ID
          });
        });
        vm.isLoading = false;
      });
    },
    GetAssetFrequency() {
      var vm = this;
      let obj1 = [{
        name: 'Annually',
        value: 'annual'
      }, {
        name: 'Half yearly',
        value: 'halfyear'
      }, {
        name: 'Quarterly',
        value: 'quarterly'
      }, {
        name: 'Monthly',
        value: 'month'
      }, {
        name: 'Bi-Weekly',
        value: 'Bi-Weekly'
      }, {
        name: 'Weekly',
        value: 'week'
      }, {
        name: 'Daily',
        value: 'daily'
      }];
      vm.AssetFrequencyList.push(obj1);
      vm.AssetFrequencyList[0].forEach((item, index) => {
        vm.FormSchema[0].Data[4].config.options.push({
          name: item.name,
          value: item.value
        });
        vm.FormSchema[0].Data[5].config.options.push({
          name: item.name,
          value: item.value
        });
        vm.FormSchema[0].Data[6].config.options.push({
          name: item.name,
          value: item.value
        });
      });
    },
    OpenAddTagNamePopup() {
      var vm = this;
      vm.IsShowAddNamePopup = true;
    },
    CloseTagPopup() {
      debugger;
      var vm = this;
      vm.IsShowAddNamePopup = false;
    }
  }
});
// CONCATENATED MODULE: ./src/views/AssetCatalog/CreateProducts.vue?vue&type=script&lang=js&
 /* harmony default export */ var AssetCatalog_CreateProductsvue_type_script_lang_js_ = (CreateProductsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/AssetCatalog/CreateProducts.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  AssetCatalog_CreateProductsvue_type_script_lang_js_,
  CreateProductsvue_type_template_id_4a37a275_render,
  CreateProductsvue_type_template_id_4a37a275_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CreateProducts = (component.exports);
// EXTERNAL MODULE: ./src/views/AssetCatalog/RelatedInformation.vue + 30 modules
var RelatedInformation = __webpack_require__("a888");

// EXTERNAL MODULE: ./src/views/AssetCatalog/AttachmentsTab.vue + 4 modules
var AttachmentsTab = __webpack_require__("3ab7");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetCatalog/ManageProducts.vue?vue&type=script&lang=js&






/* harmony default export */ var ManageProductsvue_type_script_lang_js_ = ({
  components: {
    DeployProduct: DeployProducts["a" /* default */],
    CreateProduct: CreateProducts,
    RelatedInformation: RelatedInformation["default"],
    ShowAttachmentTab: AttachmentsTab["a" /* default */]
  },
  data() {
    return {
      IsShowDeployProducts: false,
      IsShowCreateProduct: true,
      IsShowRelatedInformation: false,
      IsShowAttachmentTab: false,
      IsShowbtnPrevious: false,
      IsShowbtnNext: true,
      IsShowbtnSave: true,
      IsShowbtnCancel: true,
      AssetCatalogId: 0,
      chkRelatedInfo: false,
      CatID: '',
      ret: false
    };
  },
  created() {
    debugger;
    var vm = this;
    if (window.location.href.split('/')[5] != undefined) {
      vm.AssetCatalogId = window.location.href.split('/')[5];
    } else {
      vm.AssetCatalogId = 0;
      //$(".productCreateTab1").addClass('disabled');
      // $('#tabs_3').addClass('disabled');
      // $('#tabs_4').addClass('disabled');
    }
  },

  methods: {
    btnCancel() {
      debugger;
      var vm = this;
      vm.$router.push({
        path: '/AssetCatalog/Index'
      });
    },
    UserGuideChange(item) {
      var vm = this;
      if (item == 'User_Guide_Asset_Catalogue_Add') {
        vm.IsShowCreateProduct = true;
        vm.IsShowDeployProducts = false;
        vm.IsShowRelatedInformation = false;
        vm.IsShowAttachmentTab = false;
      }
      if (item == 'User_Guide_Asset_Catalogue_DeployProduct_Tab') {
        //vm.ret = vm.$refs.UpdateProduct.onSubmit1();
        vm.IsShowDeployProducts = true;
        vm.IsShowCreateProduct = false;
        vm.IsShowRelatedInformation = false;
        vm.IsShowAttachmentTab = false;
      }
      if (item == 'User_Guide_Asset_Catalogue_RelatedInfo_Tab') {
        vm.IsShowDeployProducts = false;
        vm.IsShowCreateProduct = false;
        vm.chkRelatedInfo = true;
        vm.IsShowRelatedInformation = true;
        vm.IsShowAttachmentTab = false;
      }
      if (item == 'User_Guide_Asset_Catalogue_Attachments_Tab') {
        vm.IsShowDeployProducts = false;
        vm.IsShowCreateProduct = false;
        vm.IsShowRelatedInformation = false;
        vm.IsShowAttachmentTab = true;
      }
    },
    btnNextTab(recid) {
      debugger;
      var vm = this;
      var res = vm.getSelectedTabIndex();
      if (res == "#tabs-1") {
        $('.responivecustomtab a[href="#tabs-2"]').trigger('click');
        vm.CatID = recid;
        vm.AssetCatalogId = recid;
        vm.IsShowDeployProducts = true;
        vm.IsShowCreateProduct = false;
        vm.IsShowRelatedInformation = false;
        vm.IsShowAttachmentTab = false;
      }
      if (res == "#tabs-2") {
        $('.responivecustomtab a[href="#tabs-3"]').trigger('click');
        vm.chkRelatedInfo = true;
        vm.IsShowDeployProducts = false;
        vm.IsShowCreateProduct = false;
        vm.IsShowRelatedInformation = true;
        vm.IsShowAttachmentTab = false;
      }
      if (res == "#tabs-3") {
        $('.responivecustomtab a[href="#tabs-4"]').trigger('click');
        vm.IsShowDeployProducts = false;
        vm.IsShowCreateProduct = false;
        vm.IsShowRelatedInformation = false;
        vm.IsShowAttachmentTab = true;
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
      }
      if (res == "#tabs-3") {
        $('.responivecustomtab a[href="#tabs-2"]').trigger('click');
        vm.IsShowDeployProducts = true;
        vm.IsShowCreateProduct = false;
        vm.IsShowRelatedInformation = false;
        vm.IsShowAttachmentTab = false;
      }
      if (res == "#tabs-2") {
        $('.responivecustomtab a[href="#tabs-1"]').trigger('click');
        vm.IsShowCreateProduct = true;
        vm.IsShowDeployProducts = false;
        vm.IsShowRelatedInformation = false;
        vm.IsShowAttachmentTab = false;
      }
    },
    getSelectedTabIndex() {
      debugger;
      var selectedTab = "";
      $('.responivecustomtab a').each(function (index) {
        if ($(this).hasClass("active")) {
          selectedTab = $(this).attr('href');
        }
      });
      return selectedTab;
    },
    btnSave() {
      debugger;
      var vm = this;
      vm.$refs.UpdateProduct.UpdateProduct();
    }
  }
});
// CONCATENATED MODULE: ./src/views/AssetCatalog/ManageProducts.vue?vue&type=script&lang=js&
 /* harmony default export */ var AssetCatalog_ManageProductsvue_type_script_lang_js_ = (ManageProductsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/AssetCatalog/ManageProducts.vue





/* normalize component */

var ManageProducts_component = Object(componentNormalizer["a" /* default */])(
  AssetCatalog_ManageProductsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ManageProducts = __webpack_exports__["default"] = (ManageProducts_component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d237545.js.map