(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-02a6fd2e"],{

/***/ "3ab7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2101b2d3-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetCatalog/AttachmentsTab.vue?vue&type=template&id=1f03cdc7&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "tab-pane call-detail border-0 p-0",
    attrs: {
      "id": "tabs-4",
      "role": "tabpanel",
      "aria-labelledby": "Attachment-tab"
    }
  }, [_c('div', {
    staticClass: "DivFullDetail col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left p-0"
  }, [_c('div', {
    staticClass: "col-lg-12 mt-3 p-0"
  }, [_c('div', {
    staticClass: "heading-border mb-2"
  }, [_c('h5', {
    staticClass: "h5"
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('Attachments')))])])]), _vm._l(_vm.AttachmentDivData, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-3 px-0"
    }, [_c('div', {
      staticClass: "col-sm-12 col-md-6 col-lg-4 col-xl-4 float-left",
      attrs: {
        "id": "attach"
      }
    }, [_c('div', {
      staticClass: "form-group",
      attrs: {
        "id": "attachName"
      }
    }, [_c('label', [_vm._v(_vm._s(_vm.$t('AttachmentName')))]), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.AttachmentName,
        expression: "item.AttachmentName"
      }],
      staticClass: "form-control",
      attrs: {
        "type": "text",
        "id": 'attachName' + index,
        "maxlength": "50"
      },
      domProps: {
        "value": item.AttachmentName
      },
      on: {
        "input": function ($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "AttachmentName", $event.target.value);
        }
      }
    })])]), _c('div', {
      staticClass: "col-sm-12 col-md-6 col-lg-4 col-xl-4 float-left",
      attrs: {
        "id": "divchkIsTermsAndCondition"
      }
    }, [_c('div', {
      staticClass: "form-group"
    }, [_c('label', [_vm._v(_vm._s(_vm.$t('TERM_AND_CONDITIONS')) + ":")]), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.IsTermsAndCondition,
        expression: "item.IsTermsAndCondition"
      }],
      staticClass: "custom-control custom-checkbox",
      attrs: {
        "type": "checkbox",
        "id": 'IsTermsAndCondition' + index
      },
      domProps: {
        "checked": Array.isArray(item.IsTermsAndCondition) ? _vm._i(item.IsTermsAndCondition, null) > -1 : item.IsTermsAndCondition
      },
      on: {
        "change": function ($event) {
          var $$a = item.IsTermsAndCondition,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = null,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && _vm.$set(item, "IsTermsAndCondition", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(item, "IsTermsAndCondition", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(item, "IsTermsAndCondition", $$c);
          }
        }
      }
    })])]), _c('div', {
      staticClass: "col-sm-12 col-md-12 col-lg-4 col-xl-4 float-left"
    }, [_c('div', {
      staticClass: "form-group"
    }, [_c('label', [_vm._v(_vm._s(_vm.$t('Attachment')) + ":")]), _c('a', {
      attrs: {
        "href": "javascript:;",
        "data-toggle-tooltip": "tooltip",
        "title": 'Maximum upload size per file: ' + _vm.FileSizeAllowedToolTip + 'MB Allowed File Types: ' + _vm.FileTypeAllowedToolTip
      }
    }, [_c('i', {
      staticClass: "fa fa-question-circle-o text-popover",
      staticStyle: {
        "font-size": "14px"
      }
    })]), _c('div', {
      staticClass: "input-group"
    }, [_c('div', {
      staticClass: "input-group"
    }, [_c('div', {
      staticClass: "custom-file"
    }, [_c('input', {
      staticStyle: {
        "position": "absolute",
        "clip": "rect(0px, 0px, 0px, 0px)"
      },
      attrs: {
        "type": "file",
        "name": 'FileSrc' + (index + 1),
        "id": 'flFile' + (index + 1),
        "data-file": "multi",
        "tabindex": "-1"
      },
      on: {
        "change": function ($event) {
          return _vm.setFile($event, index);
        }
      }
    }), _c('div', {
      staticClass: "bootstrap-filestyle input-group"
    }, [_c('input', {
      staticClass: "form-control disabled",
      attrs: {
        "type": "text",
        "disabled": ""
      },
      domProps: {
        "value": item.fileName
      }
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
        "for": 'flFile' + (index + 1)
      }
    }, [_vm._v("Choose File")])]), _c('span', {
      staticClass: "input-group-text border-0 bg-transparent p-0 pl-2"
    }, [_c('a', {
      staticClass: "round-icon-small btn-danger-light",
      attrs: {
        "href": "javascript:;",
        "title": "Clear"
      },
      on: {
        "click": function ($event) {
          return _vm.Clear(item.count, index);
        }
      }
    }, [_c('i', {
      staticClass: "fa fa-undo"
    })]), index == 0 ? _c('a', {
      staticClass: "actionicons",
      attrs: {
        "href": "javascript:void(0) ",
        "title": "Add More",
        "id": "addMore"
      },
      on: {
        "click": function ($event) {
          return _vm.addMore(item, _vm.AttachmentDivData);
        }
      }
    }, [_c('i', {
      staticClass: "fa fa-plus-circle text-success",
      staticStyle: {
        "font-size": "36px"
      }
    })]) : _vm._e(), index != 0 ? _c('a', {
      staticClass: "round-icon-small btn-danger-light float-none d-inline-block",
      attrs: {
        "href": "javascript:;",
        "title": "Delete"
      },
      on: {
        "click": function ($event) {
          return _vm.removeRow(item.count);
        }
      }
    }, [_c('i', {
      staticClass: "recyclebin fa fa-trash"
    })]) : _vm._e()])])])])])])])]), _c('div', {
      staticStyle: {
        "clear": "both"
      }
    })]);
  }), _c('tg-list', {
    attrs: {
      "SearchPosition": "none",
      "IsShowAction": false,
      "showCheckBox": false,
      "listType": ['List'],
      "ModuleName": "Asset",
      "SubModuleCode": "Asset",
      "IdentityColumn": "ASSET_CATALOGUE_ID",
      "HeaderText": "Asset Management",
      "ListData": _vm.AttachmentList,
      "HeaderData": _vm.Headers,
      "callbackfunction": _vm.FetchData,
      "TotalRecords": _vm.TotalRecords,
      "widgets": _vm.widgets,
      "LegendArray": _vm.LegendArray,
      "RenderRowActionMethod": _vm.renderActions,
      "NorecordfoundText": _vm.$t('NoRecordfound'),
      "ListDataCallBackFunction": _vm.FetchData
    },
    on: {
      "PagerButtonClick": _vm.pagerMethod
    },
    scopedSlots: _vm._u([{
      key: "slotdata",
      fn: function ({
        data
      }) {
        return [data.column.COLUMN_NAME == 'Action' ? [_c('span', {
          staticClass: "text-dark",
          attrs: {
            "title": data.row.Action
          }
        }, [_c('a', {
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
          staticClass: "fa fa-download text-primary action-icon",
          attrs: {
            "title": "Download Attachment"
          }
        })]), _vm._v("  "), _c('a', {
          staticClass: "deletefile",
          attrs: {
            "href": "javascript:;",
            "title": "Delete",
            "value": "",
            "filePath": data.row.FilePath,
            "fileType": data.row.FileType
          },
          on: {
            "click": function ($event) {
              return _vm.DeleteFile(data.row);
            }
          }
        }, [_c('em', {
          staticClass: "fa fa-trash text-danger action-icon",
          attrs: {
            "title": "Remove Attachment"
          }
        })])])] : _vm._e(), data.column.COLUMN_NAME == 'IS_FOR_TERMS_CONDITION' ? [_c('span', {
          staticClass: "text-dark",
          attrs: {
            "title": data.row.IS_FOR_TERMS_CONDITION == true ? 'YES' : 'NO'
          }
        }, [_c('label', [_vm._v(_vm._s(data.row.IS_FOR_TERMS_CONDITION == true ? 'YES' : 'NO'))])])] : _vm._e(), data.column.COLUMN_NAME == 'TERMS_CONDITION_STARTS_AT' ? [_c('span', {
          staticClass: "text-dark",
          attrs: {
            "title": _vm.formatTimeToCustomFormat(data.row.TERMS_CONDITION_STARTS_AT)
          }
        }, [_c('label', [_vm._v(_vm._s(_vm.formatTimeToCustomFormat(data.row.TERMS_CONDITION_STARTS_AT)))])])] : _vm._e(), data.column.COLUMN_NAME == 'SERIAL_NUMBER' ? [_c('span', {
          staticClass: "text-dark",
          attrs: {
            "title": data.row.SERIAL_NUMBER
          }
        }, [_c('label', [_vm._v(_vm._s(data.row.SERIAL_NUMBER))])])] : _vm._e()];
      }
    }])
  })], 2), _vm._v("  "), _c('div', {
    staticClass: "p-3"
  }, [_c('dynamic-form', {
    attrs: {
      "lang": "en",
      "buttons": _vm.buttons,
      "schema": _vm.FormSchema
    },
    on: {
      "OnSubmit": _vm.onSubmit
    }
  })], 1)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/AssetCatalog/AttachmentsTab.vue?vue&type=template&id=1f03cdc7&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// EXTERNAL MODULE: ./node_modules/luxon/build/cjs-browser/luxon.js
var luxon = __webpack_require__("1315");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetCatalog/AttachmentsTab.vue?vue&type=script&lang=js&



/* harmony default export */ var AttachmentsTabvue_type_script_lang_js_ = ({
  data() {
    return {
      LegendArray: [],
      widgets: [],
      FormSchema: [],
      Headers: [{
        "COLUMN_NAME": "SERIAL_NUMBER",
        "DATA_TYPE": "image",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('SerialNumber'),
        "DISPLAY_ORDER": 1,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "ATTACHMENT_TITLE",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('AttachmentName'),
        "DISPLAY_ORDER": 2
      }, {
        "COLUMN_NAME": "ATTACHMENT_NAME",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('FileName'),
        "DISPLAY_ORDER": 3
      }, {
        "COLUMN_NAME": "IS_FOR_TERMS_CONDITION",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('ForTermCondition'),
        "DISPLAY_ORDER": 4,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "TERMS_CONDITION_STARTS_AT",
        "DATA_TYPE": "Date",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('TermConditionStartDate'),
        "DISPLAY_ORDER": 5,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "Action",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": "Action",
        "DISPLAY_ORDER": 5,
        settings: {
          isInSlot: true
        }
      }],
      AttachmentList: [],
      PageSize: 10,
      PageNumber: 1,
      PageSizeOption: null,
      noRecord: true,
      TotalRecords: 0,
      CurrentPage: 1,
      TotalPages: 0,
      SortBy: '',
      SortExp: '',
      flag: '',
      buttons: [{
        type: "submit",
        class: "btn btn-warning HideTab",
        text: "Previous <i class='fa fa-angle-double-left pr-2'></i>",
        onClick: this.onPreviousClick
      }, {
        type: "submit",
        class: "btn btn-primary HideTab",
        text: "Next<i class='fa fa-angle-double-right pl-2'></i>",
        isVisible: false,
        onClick: this.onNextClick
      }, {
        type: "submit",
        class: "btn btn-success",
        text: "<i class='fa fa-save pr-2'></i>Save "
      }, {
        type: "button",
        class: "btn btn-danger",
        text: "<i class='fa fa-close pr-2'></i>Cancel",
        onClick: this.onCancelClick
      }],
      AttachmentDivData: [{
        AttachmentName: '',
        IsTermsAndCondition: '',
        Is_DisplayImage: '',
        fileName: '',
        fileUploaded: '',
        count: 1
      }],
      fileUploaded: [],
      fileInputKey: 0,
      AssetCatalogId: window.location.href.split('/')[5],
      AssetCatalogData: [],
      IsEnableAssetManagement: false,
      TypeFileArr: [],
      allProductConfigData: [],
      FileTypeAllowedToolTip: '',
      FileSizeAllowedToolTip: ''
      // AttachmentName:[],
      // IsTermsAndCondition:[],
      // Is_DisplayImage:[]
    };
  },

  created() {
    var vm = this;
    vm.FetchData();
    vm.GetAssetCatalogById();
    vm.EnableAssetManagement();
    vm.GetProductConfigData();
  },
  methods: {
    GetProductConfigData: function () {
      var vm = this;
      var myObj = `moduleId=4118`;
      DataService["a" /* default */].GetConfigurationData(myObj).then(function (response) {
        vm.allProductConfigData = response.data.StorageKeys;
        var test = vm.allProductConfigData[3].CORE_CONFIG_VALUE.split(',');
        console.log(test);
        vm.FileTypeAllowedToolTip = vm.allProductConfigData[3].CORE_CONFIG_VALUE;
        vm.FileSizeAllowedToolTip = vm.allProductConfigData[0].CORE_CONFIG_VALUE;
      });
    },
    setFile: function (e, item) {
      var vm = this;
      // var formData = new FormData();
      // formData.append("Files", e.target.files[0]);
      vm.AttachmentDivData[item].fileName = e.target.files[0].name;
      vm.AttachmentDivData[item].fileUploaded = e.target.files[0];
      // vm.fileUploaded.push(e.target.files[item]);
    },

    Clear(count, indx) {
      var vm = this;
      vm.AttachmentDivData.forEach(element => {
        if (element.count == count) {
          element.fileName = '';
        }
      });
    },
    removeRow(event) {
      var vm = this;
      const index = vm.AttachmentDivData.findIndex(x => x.count === event);
      if (index !== -1) {
        vm.AttachmentDivData.splice(index, 1);
      }
      return true;
    },
    renderActions(row) {
      var self = this;
      let rtnActionArray = [];
    },
    GetAssetCatalogById() {
      var vm = this;
      vm.isLoading = true;
      var url = `id=${vm.AssetCatalogId}`;
      DataService["a" /* default */].GetById(url).then(response => {
        vm.AssetCatalogData = JSON.parse(response.data.result).data[0];
        vm.isLoading = false;
      });
    },
    DeleteFile(e) {
      var vm = this;
      var params = `attachmentId=${e.ASSET_ATTACHMENT_ID}&statusId=1003`;
      vm.confirmR(vm.$t("ConfirmDelete"), true, vm.$t("Delete") + "  " + vm.$t("File"), function () {
        DataService["a" /* default */].DeleteFile(params).then(response => {
          if (response.data == true) {
            vm.ShowAlert(vm.$t("FileDeleted"), "success", vm.$t('Alert'));
            vm.FetchData();
          } else {
            vm.ShowAlert(vm.$t("Unknown  Error"), "failure", vm.$t('Alert'));
          }
        });
      });
    },
    onCancelClick() {
      var vm = this;
      vm.$parent.btnCancel();
    },
    onPreviousClick() {
      var vm = this;
      vm.$parent.btnPreviousTab();
    },
    // UploadFile(event,indx) {
    //     var vm = this;
    //     vm.fileUploaded.splice(indx,1);
    //     vm.fileUploaded.push(event.target.files[0]);

    // },
    // RefreshField(indx, field)
    // {
    //     debugger
    //     var vm=this;
    //     vm.fileUploaded.splice(indx, 1)
    //     debugger
    // },
    addMore(value, fieldType) {
      var vm = this;
      if (vm.AttachmentDivData.length + vm.AttachmentList.length < 5) {
        let singleDynamicRow = {
          AttachmentName: '',
          IsTermsAndCondition: '',
          Is_DisplayImage: '',
          fileName: '',
          fileUploaded: '',
          count: 1
        };
        singleDynamicRow.count = vm.AttachmentDivData.length + 1;
        vm.AttachmentDivData.push(singleDynamicRow);
      } else {
        vm.ShowAlert(vm.$t("Max limit reached (Only five attachments are allowed)"), "Warning", vm.$t('Alert'));
      }
      setTimeout(function () {
        vm.CheckBoxBootstrap();
      }, 100);
    },
    removeField(index, fieldType) {
      fieldType.splice(index, 1);
    },
    EnableAssetManagement: function () {
      let url = `moduleName=Asset&configkey=CanSeeAssetManagement`;
      DataService["a" /* default */].EnableAssetManagement(url).then(response => {
        this.IsEnableAssetManagement = response.data;
      });
    },
    onSubmit: function () {
      var vm = this;
      //     if(vm.AttachmentDivData.length >=0)
      //    {
      //     vm.fileUploaded.forEach((item,index) => {
      //         vm.AttachmentDivData[index].fileUploaded=item;
      //     });
      //    }

      if (vm.IsEnableAssetManagement) {
        // vm.isLoading = true
        let myObj = {};
        myObj.AttachmentName = Array.prototype.map.call(vm.AttachmentDivData, function (item) {
          return item.AttachmentName;
        }).join(",");
        // myObj.Is_DisplayImage = Array.prototype.map.call(vm.AttachmentDivData, function(item) { return item.fileUploaded })
        myObj.IsTermsAndCondition = Array.prototype.map.call(vm.AttachmentDivData, function (item) {
          return item.IsTermsAndCondition == true ? true : false;
        }).join(",");
        myObj.DeployProduct = false;
        myObj.AssetCatalogueId = vm.AssetCatalogId;
        myObj.Name = vm.AssetCatalogData.NAME, myObj.LocationId = vm.AssetCatalogData.LOCATION_ID;
        myObj.AssetTypeId = vm.AssetCatalogData.ASSET_TYPE_ID, myObj.BarcodeTypeId = vm.AssetCatalogData.BARCODE_TYPE_ID, myObj.StatusId = vm.AssetCatalogData.STATUS_ID.toString(), myObj.CreateUniqueNameListing = vm.AssetCatalogData.CREATE_UNIQUE_NAME_LIST, myObj.TotalCost = 0, myObj.AssetCost = 0, myObj.DeployId = 0;
        myObj.Quantity = 0;
        myObj.UnitPrice = 0;
        myObj.ParentUniqueId = "", myObj.ChildUniqueId = "", myObj.ChildCatalogueId = "", myObj.CatalogueId = "", myObj.CatalogHdnId = "", myObj.SelfieEnabled = "", myObj.ChildCategoryName = "", myObj.AssetUniqueName = "", myObj.AssetCatalogName = "", myObj.Description = vm.AssetCatalogData.DESCRIPTION, myObj.AssetTagIdsWizard = "", myObj.AssetTypeTagIdsWizard = "", myObj.Manufacturer = "", myObj.NumberOfItems = "0", myObj.AsseetGroupQuantity = "", myObj.ItemCode = "", myObj.ChildItemCode = "", myObj.ChildCatalogName = "", myObj.ChildRequestQuantity = "", myObj.ChildAssetType = "", myObj.AssetType = "", myObj.StandardTypeId = "", myObj.AssetCompartmentId = "", myObj.AssetGroupId = "", myObj.IsSelfCheckout = "", myObj.IsEnableTerms = "", myObj.SubLocationId = "", myObj.Attachment = "", myObj.CreatedAt = "", myObj.CreatedBy = "", myObj.ModifiedAt = "", myObj.ModifiedBy = "", myObj.Asset_Type = "", myObj.Status = "", myObj.ForCompany = vm.AssetCatalogData.MIN_CMP_QUANTITY, myObj.ForEmployee = vm.AssetCatalogData.MIN_EMP_QUANTITY, myObj.MoveToInTransitInfo = "", myObj.AvailableItems = "", myObj.PendingAvailableQuantity = "", myObj.PendingTotalAvailableItems = "", myObj.TotalQuantity = "", myObj.ChildAvailableItems = "", myObj.TotalFilesCount = "", myObj.AssetTypeCategory = "", myObj.AssetTypeCategoryName = "", myObj.AssetTypeCategoryCode = "",
        // myObj.AttachmentName = "",
        myObj.DisplayImage = "",
        // myObj.IsTermsAndCondition = "",
        myObj.TotalTermsConditionFilesCount = "", myObj.RelatedInfoId = "", myObj.UniqueName = "", myObj.AssetCatalogueGroup = "", myObj.ChildCreateUniqueNameListing = "", myObj.IsTransitItems = "", myObj.AttachmentPath = "", myObj.LocationName = "", myObj.SubLocationName = "", myObj.AuditFrequency = vm.AssetCatalogData.AUDIT_FREQUENCY == "" ? "" : vm.AssetCatalogData.AUDIT_FREQUENCY, myObj.ImageCaptureFrequency = vm.AssetCatalogData.IMAGE_CAPTURE_FREQUENCY == "" ? "" : vm.AssetCatalogData.IMAGE_CAPTURE_FREQUENCY, myObj.CalibrationFrequency = vm.AssetCatalogData.CALIBRATION_FREQUENCY == "" ? "" : vm.AssetCatalogData.CALIBRATION_FREQUENCY, myObj.CR = "", myObj.DR = "", myObj.IsDisplayImage = "", myObj.PurchaseValue = "", myObj.CurrentBookValue = "", myObj.SalvageValue = "", myObj.Unit = "", myObj.ReqFrom = "", myObj.IsContainer = "", myObj.IsSampleData = "", myObj.Model = "", myObj.Vendor = "", myObj.ManufacturerId = "", myObj.PurchaseOrder = "", myObj.WarrantyDuration = "", myObj.DepreciationRuleId = "", myObj.OrderDate = "", myObj.SalvageCost = "", myObj.ItemLife = "", myObj.InvoiceNumber = "", myObj.InvoiceDate = "", myObj.InsurerName = "", myObj.InsuranceRefNumber = "", myObj.InsuranceTo = "", myObj.DeployedBy = "", myObj.DeployedAt = "", myObj.EnableWarranty = "", myObj.EnableInsurance = "", myObj.EnableItemCost = "", myObj.EnableCalibration = "", myObj.EnableDepreciation = "";
        var formData = new FormData();
        var postString = {
          "postString": myObj
        };
        formData.append("postString", JSON.stringify(myObj));
        var fileTypeValue = [];
        if (vm.AttachmentDivData.length >= 0) {
          vm.AttachmentDivData.forEach((item, index) => {
            if (item.fileUploaded != '') {
              var uploadFile = item.fileUploaded;
              formData.append('File' + index, uploadFile, item.fileName);
              var test = vm.allProductConfigData[3].CORE_CONFIG_VALUE.split(',');
              var fileType = item.fileName.split('.')[1].toLowerCase();
              var allowedFileTypes = new Set(test.map(type => type.substring(1).toLowerCase()));
              if (!allowedFileTypes.has(fileType)) {
                vm.TypeFileArr.push(item.fileName);
              }
            }
          });
        }
        formData.append("AttachmentName", myObj.AttachmentName);
        formData.append("IsTermsAndCondition", myObj.IsTermsAndCondition);
        formData.append("Is_DisplayImage", 'No');
        DataService["a" /* default */].UpdateCatalog(formData).then(function (response) {
          if (response.data.msg == "size_exceed" || response.data.msg == "FileSizeExceeded" || response.data.msg == "ExceedAllowedSize") {
            vm.ShowAlert((vm.$t('size_exceed', [vm.$t('Asset')]), "falure", true, vm.$t("Alert")));
          } else if (response.data.msg == 'ValidFileUploadMsg') {
            vm.ShowAlert(vm.TypeFileArr[0] + vm.$t('InvalidFileUploadMsg') + vm.FileTypeAllowedToolTip, "falure", true, vm.$t("Alert"));
          } else if (response.data.msg == "update") {
            vm.ShowAlert(vm.$t("Product has been updated Successfully"), "success", vm.$t('Alert'));
            vm.$router.push({
              path: '/AssetCatalog/Index'
            });
          }
          // vm.isLoading = false;
        });
      } else {
        // vm.isLoading = false;
        vm.ShowAlert((vm.$t('UnauthorizedAccess'), "faliure", true, vm.$t("Alert")));
      }
    },
    DownLoadFile(item) {
      var vm = this;
      var param = `filePath=${item.ATTACHMENT_PATH}`;
      DataService["a" /* default */].DownloadAttachment(param).then(function (response) {
        const byteData = response.data;
        const fileURL = `data:${item.ATTACHMENT_TYPE};base64,${byteData}`;
        var fileLink = document.createElement('a');
        fileLink.href = fileURL;
        fileLink.setAttribute('download', item.ATTACHMENT_NAME);
        document.body.appendChild(fileLink);
        fileLink.click();
      });
    },
    FetchData() {
      var vm = this;
      var url = `catalogueId=${this.$route.params.id}&isDelete=1&flag=`;
      DataService["a" /* default */].ViewFiles(url).then(response => {
        // if (JSON.parse(response.data ).data  != null) {
        if (JSON.parse(response.data).data.length > 0) {
          vm.AttachmentList = JSON.parse(response.data).data;
          vm.TotalRecords = vm.AttachmentList.length;
          vm.TotalPages = Math.ceil(vm.TotalRecords / vm.PageSize);
          vm.CurrentPage = vm.PageNumber;
          vm.noRecord = false;
        } else {
          vm.noRecord = true;
          vm.AttachmentList = [];
          vm.TotalRecords = 0;
        }
        // }
        setTimeout(function () {
          vm.ResponsiveDataTable('tablelistingdata');
        }, 500);
      });
    },
    clickEventOfColumn: function (row, column) {
      if (column.COLUMN_NAME == 'LOCATION_NAME') {
        this.$router.push({
          name: 'ManageProducts',
          params: {
            id: row.ASSET_CATALOGUE_ID
          }
        });
      }
    },
    columnDataFormatter: function (row, column) {
      return row[column.COLUMN_NAME];
    },
    pagerMethod: function (value) {
      this.PageSize = value.PageSize;
      this.PageNumber = value.PageNumber;
      this.FetchData();
    },
    formatTimeToCustomFormat(inputTime) {
      const inputLuxonDateTime = luxon["DateTime"].fromISO(inputTime, {
        zone: 'utc'
      }); // Assume the input time is in UTC
      const targetTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const outputLuxonDateTime = inputLuxonDateTime.setZone(targetTimeZone);
      const formattedDateTime = outputLuxonDateTime.toFormat("MM/dd/yyyy h:mm a");
      return formattedDateTime;
    }
  }
});
// CONCATENATED MODULE: ./src/views/AssetCatalog/AttachmentsTab.vue?vue&type=script&lang=js&
 /* harmony default export */ var AssetCatalog_AttachmentsTabvue_type_script_lang_js_ = (AttachmentsTabvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/AssetCatalog/AttachmentsTab.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  AssetCatalog_AttachmentsTabvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AttachmentsTab = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "41ac":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2101b2d3-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetCatalog/DeployProducts.vue?vue&type=template&id=25259c00&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-fluid"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12 mt-2"
  }, [_c('div', {
    staticClass: "heading-border mb-2"
  }, [_c('h5', {
    staticClass: "h5"
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('DeployItem')))]), _c('small', {
    staticClass: "float-right mt-2"
  }, [_c('a', {
    staticClass: "AddDeployItem",
    attrs: {
      "id": "ancDeployItems",
      "title": "Add"
    },
    on: {
      "click": _vm.addDeployProduct
    }
  }, [_c('i', {
    staticClass: "fa fa-plus pr-2"
  }), _vm._v("Add ")])])])])])]), _c('div', {
    staticClass: "container-fluid d-flex flex-wrap py-2"
  }, [_c('div', {
    staticClass: "right-content"
  }, [_c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 Search-panel float-left pb-2 p-0"
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
      value: _vm.txtSearchByLocation,
      expression: "txtSearchByLocation"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "assetSearch",
      "type": "text",
      "placeholder": "Search by Location"
    },
    domProps: {
      "value": _vm.txtSearchByLocation
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.txtSearchByLocation = $event.target.value;
      }
    }
  })])]), _c('div', {
    staticClass: "col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 float-left pl-0"
  }, [_c('div', {
    staticClass: "search-btm-btn background-0 text-left form-check-inline"
  }, [_c('a', {
    staticClass: "btn btn-success float-left",
    attrs: {
      "id": "aSearchAsset",
      "title": "Search"
    },
    on: {
      "click": function ($event) {
        return _vm.SearchByLocation();
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-search"
  })]), _c('a', {
    staticClass: "btn btn-danger ml-1 float-left",
    attrs: {
      "id": "aUN_ClearSearch",
      "href": "javascript:;",
      "title": "Clear"
    },
    on: {
      "click": _vm.ClearSearch
    }
  }, [_c('i', {
    staticClass: "fa fa-refresh"
  })])])])])])])])]), _c('tg-list', {
    attrs: {
      "IsShowAction": false,
      "SearchPosition": "none",
      "showCheckBox": false,
      "listType": ['List'],
      "ModuleName": "Asset",
      "SubModuleCode": "Asset",
      "IdentityColumn": "ASSET_CATALOGUE_ID",
      "HeaderText": "Asset Management",
      "ListData": _vm.DeployItemData,
      "HeaderData": _vm.Headers,
      "callbackfunction": _vm.FetchData,
      "TotalRecords": _vm.TotalRecords,
      "NorecordfoundText": _vm.$t('NoRecordfound'),
      "ListDataCallBackFunction": _vm.FetchData
    },
    on: {
      "PagerButtonClick": _vm.pagerMethod
    },
    scopedSlots: _vm._u([{
      key: "slotdata",
      fn: function ({
        data
      }) {
        return [data.column.COLUMN_NAME == 'DEPLOYEMENT_TYPE' ? [_c('span', {
          staticClass: "text-dark",
          attrs: {
            "title": data.row.NUMBER_OF_ITEM
          }
        }, [_c('span', {}, [_vm._v(_vm._s(data.row.DEPLOYEMENT_TYPE == 1 ? 'Product' : 'Inventory'))])])] : _vm._e(), data.column.COLUMN_NAME == 'ORDER_DATE' ? [_c('span', {
          staticClass: "text-dark",
          attrs: {
            "title": _vm.$options.filters.formatDate(data.row.ORDER_DATE)
          }
        }, [_c('span', {}, [_vm._v(" " + _vm._s(_vm.$options.filters.formatDate(data.row.ORDER_DATE)))])])] : _vm._e(), data.column.COLUMN_NAME == 'QUANTITY' ? [_c('span', {
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
        }, [_vm._v(_vm._s(data.row.QUANTITY > 0 ? data.row.QUANTITY : 0))])])] : _vm._e(), data.column.COLUMN_NAME == 'MODIFIED_AT' ? [_c('span', {
          staticClass: "text-dark",
          attrs: {
            "title": data.row.QUANTITY
          }
        }, [_vm._v(" " + _vm._s(_vm.$options.filters.formatDate(data.row.MODIFIED_AT)) + " ")])] : _vm._e()];
      }
    }])
  }), _vm._v("   "), _c('div', {
    staticClass: "p-3"
  }, [_c('dynamic-form', {
    attrs: {
      "lang": "en",
      "buttons": _vm.buttons
    }
  })], 1), _vm.IscheckAddDeployProduct ? _c('AddDeployProductpop', {
    attrs: {
      "DeployItemId": _vm.DeployItemId,
      "ClickType": _vm.ClickType
    },
    on: {
      "DeployClosePOp": _vm.DeployClosePOp
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/AssetCatalog/DeployProducts.vue?vue&type=template&id=25259c00&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2101b2d3-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/AddDeployProductpop.vue?vue&type=template&id=62f775d6&
var AddDeployProductpopvue_type_template_id_62f775d6_render = function render() {
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
    staticClass: "modal-header theme-primary partition-full"
  }, [_c('h4', {
    staticClass: "modal-title"
  }, [_vm._v(_vm._s(_vm.$t('DeployProductLocationWise')))]), _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.ClosePopup
    }
  }, [_c('em', {
    staticClass: "fa fa-times",
    attrs: {
      "aria-hidden": "true"
    }
  })])]), _c('div', {
    staticClass: "modal-body"
  }, [_c('Form', {
    ref: "tagForm",
    attrs: {
      "autocomplete": "off"
    }
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "listing OuterMainDiv"
  }, [_c('div', {
    staticClass: "row"
  }, [_vm.DataLoaded ? _c('dynamic-form', {
    ref: "tagForm1",
    attrs: {
      "lang": "en",
      "buttons": _vm.buttons,
      "schema": _vm.FormSchema
    },
    on: {
      "OnSubmit": _vm.onSubmitDeploy
    }
  }) : _vm._e()], 1)])])])])], 1), _vm.ClickType == 'ADD' ? _c('div', {
    staticClass: "modal-header theme-primary partition-full"
  }, [_c('h4', {
    staticClass: "modal-title"
  }, [_vm._v(_vm._s(_vm.$t('Deploy List')))])]) : _vm._e(), _vm.ClickType == 'ADD' ? _c('div', {
    staticClass: "listing tblassestgroupinfodetails px-1 mt-3"
  }, [_c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-bordered dt-responsive nowrap mt-0",
    attrs: {
      "id": "tblassestgroupinfodetails"
    }
  }, [_c('thead', {
    staticClass: "thead-bg"
  }, [_c('tr', [_c('th', {
    staticClass: "text-center"
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('LOCATION')))])]), _c('th', {
    staticClass: "text-center"
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('Quantity')))])]), _c('th', {
    staticClass: "text-center"
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('UnitPrice')))])]), _c('th', [_c('span', [_vm._v(_vm._s(_vm.$t('Model')))])]), _c('th', [_c('span', [_vm._v(_vm._s(_vm.$t('Manufacturer')))])]), _c('th', [_c('span', [_vm._v(_vm._s(_vm.$t('Vendor')))])]), _c('th', {
    staticClass: "text-center"
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('ProductCostQty')))])]), _c('th', {
    staticClass: "text-center"
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('RefPurchaseOrder')))])]), _c('th', {
    staticClass: "text-center"
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('OrderDate')) + " ")])]), _c('th', [_c('span', [_vm._v(_vm._s(_vm.$t('InvoiceNumber')))])]), _c('th', [_c('span', [_vm._v(_vm._s(_vm.$t('InvoiceDate')))])]), _c('th', [_c('span', [_vm._v(_vm._s(_vm.$t('NameOfInsurer')))])]), _c('th', [_c('span', [_vm._v(_vm._s(_vm.$t('InsuranceReferenceNumber')))])]), _c('th', [_c('span', [_vm._v(_vm._s(_vm.$t('InsuranceTo')))])]), _c('th', [_c('span', [_vm._v(_vm._s(_vm.$t('WarrantyDuration')))])]), _c('th', [_c('span', [_vm._v(_vm._s(_vm.$t('DepreciationRule')))])]), _c('th', [_c('span', [_vm._v(_vm._s(_vm.$t('SalvageCost')))])]), _c('th', [_c('span', [_vm._v(_vm._s(_vm.$t('ItemLife')))])]), _c('th', [_c('span', [_vm._v(_vm._s(_vm.$t('Action')))])]), _c('th', [_c('span', [_vm._v(_vm._s(_vm.$t('CalibrationFrequency')))])])])]), _c('tbody', [_vm._l(_vm.arryaofData, function (item, index) {
    return _c('tr', {
      key: index
    }, [_c('td', [_c('span', {
      staticClass: "text-overflow-dynamic-container"
    }, [_vm._v(_vm._s(item.LocationName))])]), _c('td', [_c('span', {
      staticClass: "text-overflow-dynamic-container"
    }, [_vm._v(_vm._s(item.Quantity))])]), _c('td', [_c('span', {
      staticClass: "text-overflow-dynamic-container"
    }, [_vm._v(_vm._s(item.UnitPrice))])]), _c('td', [_c('span', {
      staticClass: "text-overflow-dynamic-container"
    }, [_vm._v(_vm._s(item.Model))])]), _c('td', [_c('span', {
      staticClass: "text-overflow-dynamic-container"
    }, [_vm._v(_vm._s(item.Manufacture))])]), _c('td', [_c('span', {
      staticClass: "text-overflow-dynamic-container"
    }, [_vm._v(_vm._s(item.Vendor))])]), _c('td', [_c('span', {
      staticClass: "text-overflow-dynamic-container"
    }, [_vm._v(_vm._s(item.ProductCostQty))])]), _c('td', [_c('span', {
      staticClass: "text-overflow-dynamic-container"
    }, [_vm._v(_vm._s(item.RefPurchaseOrder))])]), _c('td', [_c('span', {
      staticClass: "text-overflow-dynamic-container"
    }, [_vm._v(" " + _vm._s(_vm.$options.filters.formatDateTime(item.OrderDaTe)) + " ")])]), _c('td', [_c('span', {
      staticClass: "text-overflow-dynamic-container"
    }, [_vm._v(_vm._s(item.InvoiceNumber))])]), _c('td', [_c('span', {
      staticClass: "text-overflow-dynamic-container"
    }, [_vm._v(" " + _vm._s(_vm.$options.filters.formatDateTime(item.InvoiceDate)) + " ")])]), _c('td', [_c('span', {
      staticClass: "text-overflow-dynamic-container"
    }, [_vm._v(_vm._s(item.NameofInsurer))])]), _c('td', [_c('span', {
      staticClass: "text-overflow-dynamic-container"
    }, [_vm._v(_vm._s(item.InsuranceReferenceNumber))])]), _c('td', [_c('span', {
      staticClass: "text-overflow-dynamic-container"
    }, [_vm._v(" " + _vm._s(_vm.$options.filters.formatDateTime(item.InsuranceValidUpto)) + " ")])]), _c('td', [_c('span', {
      staticClass: "text-overflow-dynamic-container"
    }, [_vm._v(" " + _vm._s(_vm.$options.filters.formatDateTime(item.WarrantyDuration)) + " ")])]), _c('td', [_c('span', {
      staticClass: "text-overflow-dynamic-container"
    }, [_vm._v(_vm._s(item.DepreciationRule))])]), _c('td', [_c('span', {
      staticClass: "text-overflow-dynamic-container"
    }, [_vm._v(_vm._s(item.SalvageCost))])]), _c('td', [_c('span', {
      staticClass: "text-overflow-dynamic-container"
    }, [_vm._v(_vm._s(item.ProductLifeInYears))])]), _c('td', {
      staticClass: "single-action text-center",
      attrs: {
        "id": "action_1"
      }
    }, [_c('a', {
      staticClass: "deleteDataRow",
      attrs: {
        "href": "javascript:;",
        "title": "Delete"
      }
    }, [_c('em', {
      staticClass: "fa fa-trash action-icon text-danger",
      on: {
        "click": function ($event) {
          return _vm.DeleteRow(index);
        }
      }
    })])])]);
  }), _vm.noRecord == true ? _c('tr', [_c('td', {
    staticClass: "text-center text-danger no-record",
    attrs: {
      "colspan": "20"
    }
  }, [_vm._v(_vm._s(_vm.$t('NoRecordfound')) + " ")])]) : _vm._e()], 2)])])]) : _vm._e(), _vm.arryaofData.length > 0 ? _c('div', {
    staticClass: "col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left px-0 m-2"
  }, [_c('div', {
    staticClass: "row flex-row-reverse m-0"
  }, [_c('div', {
    staticClass: "col-lg-4 text-right"
  }, [_c('a', {
    staticClass: "btn btn-success formbtn text-white mr-1",
    attrs: {
      "href": "javascript:;",
      "title": _vm.$t('Save')
    },
    on: {
      "~click": function ($event) {
        return _vm.SubmitData();
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-save pr-2"
  }), _c('span', [_vm._v(_vm._s(_vm.$t('Save')))])]), _c('a', {
    staticClass: "btn btn-danger formbtn text-white",
    attrs: {
      "href": "javascript:;",
      "title": _vm.$t('Cancel')
    },
    on: {
      "click": function ($event) {
        return _vm.ClosePopup();
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-close pr-2"
  }), _c('span', [_vm._v(_vm._s(_vm.$t('Cancel')))])])])])]) : _vm._e()])])])]);
};
var AddDeployProductpopvue_type_template_id_62f775d6_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Modal/AddDeployProductpop.vue?vue&type=template&id=62f775d6&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// EXTERNAL MODULE: ./node_modules/tg-controls_cli/dist/myLib.common.js
var myLib_common = __webpack_require__("240d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/AddDeployProductpop.vue?vue&type=script&lang=js&



/* harmony default export */ var AddDeployProductpopvue_type_script_lang_js_ = ({
  components: {
    'tree-view': myLib_common["TreeSelectField"]
  },
  props: {
    ClickType: {
      type: String
    },
    AsseCatalogtId: {
      type: String
    },
    DeployItemId: {
      type: String
    }
  },
  data() {
    return {
      arryaofData: [],
      LocationData: [],
      FormSchema: [{
        layoutType: "double",
        Data: [{
          astype: "TreeSelectField",
          label: this.$t('Location'),
          name: "Location",
          value: null,
          placeholder: "Select Location",
          disabled: true,
          config: {
            options: []
          },
          validationRules: {
            "required": true
          }
        }, {
          astype: "RadioField",
          label: this.$t('DeploymentType'),
          name: "DeployMentType",
          value: "1",
          placeholder: "",
          config: {
            options: [{
              value: "1",
              name: "Product"
            }, {
              value: "2",
              name: "Inventory"
            }],
            onChange: this.OnDeplymentType
            //CallBackFunction: null
          },

          validationRules: {
            "required": false
          }
        }, {
          astype: "NumericField",
          label: this.$t('Quantity'),
          name: "Quantity",
          value: "",
          placeholder: "",
          validationRules: {
            "required": true,
            max: 7,
            "min_value": 1
          },
          config: {
            onKeyUp: this.calcSum
          }
        }, {
          astype: "NumericField",
          label: this.$t('Unit Price'),
          name: "UnitPrice",
          value: '',
          placeholder: "",
          validationRules: {
            "required": true,
            max: 5,
            "min_value": 1
          },
          // onchange: this.calcSum
          config: {
            onKeyUp: this.calcSum
          }
        }, {
          astype: "TextField",
          label: this.$t('Model'),
          name: "Model",
          value: '',
          placeholder: ""

          // config: { format: "MM/DD/YYYY" }
        }, {
          astype: "TextField",
          label: this.$t('Manufacture'),
          name: "Manufacture",
          value: '',
          placeholder: ""
        }, {
          astype: "TextField",
          label: this.$t('Vendor'),
          name: "Vendor",
          value: "",
          placeholder: ""
        }, {
          astype: "NumericField",
          label: this.$t('ProductCostQty'),
          name: "ProductCostQty",
          value: "",
          placeholder: "",
          disabled: true,
          validationRules: "required"
        }, {
          astype: "TextField",
          label: this.$t('RefPurchaseOrder'),
          name: "RefPurchaseOrder",
          value: "",
          placeholder: ""
        }, {
          astype: "DateField",
          label: this.$t('OrderDate'),
          name: "OrderDaTe",
          value: '',
          placeholder: "10/12/2022 12:AM",
          config: {
            //format: "YYYY-MM-DD",maxDate: (new Date())
            format: "M/D/YYYY",
            maxDate: new Date()
          }
        }, {
          astype: "TextField",
          label: this.$t('InvoiceNumber'),
          name: "InvoiceNumber",
          value: "",
          placeholder: ""
        }, {
          astype: "DateField",
          label: this.$t('InvoiceDate'),
          name: "InvoiceDate",
          value: '',
          placeholder: "10/12/2022 12:AM",
          config: {
            //format: "YYYY-MM-DD",maxDate: (new Date())
            format: "M/D/YYYY",
            maxDate: new Date()
          }
        }, {
          astype: "TextField",
          label: this.$t('InsuranceReferenceNumber'),
          name: "InsuranceReferenceNumber",
          value: "",
          placeholder: "",
          disabled: true
        }, {
          astype: "TextField",
          label: this.$t('Name of Insurer'),
          name: "NameofInsurer",
          value: "",
          placeholder: "",
          disabled: true
        }, {
          astype: "DateField",
          label: this.$t('InsuranceValidUpto'),
          name: "InsuranceValidUpto",
          value: '',
          placeholder: "10/12/2022 12:AM",
          disabled: true,
          config: {
            format: "M/D/YYYY"
          }
        }, {
          astype: "DateField",
          label: this.$t('WarrantyDuration'),
          name: "WarrantyDuration",
          value: '',
          placeholder: "10/12/2022 12:AM",
          config: {
            format: "M/D/YYYY",
            minDate: new Date()
          }
        }, {
          astype: "SelectField",
          label: this.$t('DepreciationRule'),
          name: "DepreciationRule",
          value: "",
          placeholder: "",
          disabled: true,
          config: {
            options: []
          }
        }, {
          astype: "TextField",
          label: this.$t('ProductLifeInYears'),
          name: "ProductLifeInYears",
          value: "",
          placeholder: "",
          disabled: true
        }, {
          astype: "NumericField",
          label: this.$t('Salvage Cost'),
          name: "SalvageCost",
          value: "",
          placeholder: "",
          validationRules: {
            "required": false,
            max: 5
          }
        }]
      }],
      buttons: [{
        type: "submit",
        class: "btn btn-Primary",
        text: "<i class='fa fa-plus pr-2'></i>Add To List",
        isVisible: true
      }, {
        type: "button",
        class: "btn btn-success",
        text: "<i class='fa fa-save pr-2'></i>Save ",
        isVisible: false,
        onClick: this.SubmitData
      }, {
        type: "button",
        class: "btn btn-danger",
        text: "<i class='fa fa-close pr-2'></i>Cancel",
        isVisible: false,
        onClick: this.ClosePopup
      }],
      DataLoaded: 0,
      LocationName: '',
      noRecord: false
    };
  },
  created: async function () {
    var vm = this;
    if (vm.ClickType == 'UPDATE') {
      vm.BindDataFileds();
      vm.buttons[0].isVisible = false;
      vm.buttons[1].isVisible = true;
      vm.buttons[2].isVisible = true;
    } else if (vm.ClickType == 'ADD') {
      vm.buttons[0].isVisible = true;
      if (vm.arryaofData.length <= 0) {
        vm.noRecord = true;
      }
    }
    await vm.GetLocation();
    vm.DataLoaded = 1;
  },
  methods: {
    DeleteRow(index) {
      var vm = this;
      vm.confirmR(vm.$t("ConfirmDelete"), true, vm.$t("Delete") + "  " + vm.$t("ASSET_CATALOGUE_ID"), function () {
        vm.arryaofData.splice(index, 1);
      });
    },
    OnDeplymentType(event, field) {
      field.value = event.target.getAttribute('data-value');
    },
    ClosePopup() {
      var vm = this;
      //   vm.$parent.;
      vm.$parent.DeployClosePOp();
    },
    async GetLocation() {
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
        vm.FormSchema[0].Data[0].config.options = vm.FindalLocationArray;
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
    calcSum(val) {
      var vm = this;
      let ProductCost = 0;
      ProductCost = vm.FormSchema[0].Data[2].value * vm.FormSchema[0].Data[3].value;
      vm.FormSchema[0].Data[7].value = ProductCost;
    },
    onSubmitDeploy: function (formfields, val) {
      var vm = this;
      vm.noRecord = false;
      let LocationObj = vm.LocationData.filter(item => {
        return item.COMPANY_LOCATION_ID == formfields.Location;
      });
      var DataObject = {
        LocationName: LocationObj[0].LOCATION_NAME,
        DeployMentType: formfields.DeployMentType,
        DepreciationRule: formfields.DepreciationRule,
        InsuranceReferenceNumber: formfields.InsuranceReferenceNumber,
        InsuranceValidUpto: formfields.InsuranceValidUpto,
        InvoiceDate: formfields.InvoiceDate,
        InvoiceNumber: formfields.InvoiceNumber,
        Location: formfields.Location,
        Manufacture: formfields.Manufacture,
        Model: formfields.Model,
        NameofInsurer: formfields.NameofInsurer,
        OrderDaTe: formfields.OrderDaTe,
        ProductCostQty: formfields.ProductCostQty,
        ProductLifeInYears: formfields.ProductLifeInYears,
        Quantity: formfields.Quantity,
        RefPurchaseOrder: formfields.RefPurchaseOrder,
        SalvageCost: formfields.SalvageCost,
        UnitPrice: formfields.UnitPrice,
        Vendor: formfields.Vendor,
        WarrantyDuration: formfields.WarrantyDuration
      };
      vm.arryaofData.push(DataObject);
      vm.LocationName = LocationObj[0].LOCATION_NAME;
      vm.FormSchema[0].Data[0].value = null;
      vm.FormSchema[0].Data[2].value = 0;
      vm.FormSchema[0].Data[3].value = 0;
      vm.FormSchema[0].Data[4].value = "";
      vm.FormSchema[0].Data[5].value = "";
      vm.FormSchema[0].Data[6].value = "";
      vm.FormSchema[0].Data[7].value = 0;
      vm.FormSchema[0].Data[8].value = "";
      vm.FormSchema[0].Data[9].value = null;
      vm.FormSchema[0].Data[10].value = "";
      vm.FormSchema[0].Data[11].value = null;
      vm.FormSchema[0].Data[15].value = null;
      vm.FormSchema[0].Data[16].value = null;
      vm.FormSchema[0].Data[17].value = null;
      vm.FormSchema[0].Data[18].value = null;
    },
    // resetinput() {
    //     this.Quantity = "";
    // },

    async SubmitData() {
      var vm = this;
      var ArrayData = [];
      let myObj = {};
      if (vm.arryaofData.length > 0) {
        vm.arryaofData.forEach((item, index) => {
          myObj = {
            DeployId: vm.ClickType == "UPDATE" ? vm.DeployItemId : 0,
            AssetCatalogueId: parseInt(vm.$route.params.id),
            LocationId: item.Location,
            //(vm.FormSchema)[0].Data[0].value,
            Quantity: item.Quantity,
            //(vm.FormSchema)[0].Data[2].value,
            UnitPrice: item.UnitPrice,
            //(vm.FormSchema)[0].Data[3].value,
            Model: item.Model,
            //(vm.FormSchema)[0].Data[4].value,
            Manufacturer: item.Manufacture,
            //(vm.FormSchema)[0].Data[5].value,
            Vendor: item.Vendor,
            PurchaseOrder: item.RefPurchaseOrder,
            //(vm.FormSchema)[0].Data[8].value,
            WarrantyDuration: item.WarrantyDuration,
            //(vm.FormSchema)[0].Data[15].value,
            DepreciationRuleId: 0,
            OrderDate: item.OrderDaTe,
            //(vm.FormSchema)[0].Data[9].value,
            AssetCost: item.ProductCostQty,
            //(vm.FormSchema)[0].Data[7].value,
            SalvageCost: item.SalvageCost,
            //(vm.FormSchema)[0].Data[18].value,
            ItemLife: null,
            InvoiceNumber: item.InvoiceNumber,
            //(vm.FormSchema)[0].Data[10].value,
            InvoiceDate: item.InvoiceDate,
            //(vm.FormSchema)[0].Data[11].value,
            InsurerName: item.NameofInsurer,
            InsuranceRefNumber: item.InsuranceReferenceNumber,
            InsuranceTo: item.InsuranceValidUpto,
            DeploymentType: item.DeployMentType //(vm.FormSchema)[0].Data[1].value,
          };

          ArrayData.push(myObj);
        });
      } else {
        myObj = {
          AssetCatalogueId: parseInt(vm.$route.params.id),
          LocationId: vm.FormSchema[0].Data[0].value,
          DeploymentType: vm.FormSchema[0].Data[1].value,
          DeployId: vm.ClickType == "UPDATE" ? vm.DeployItemId : 0,
          Quantity: vm.FormSchema[0].Data[2].value,
          UnitPrice: vm.FormSchema[0].Data[3].value,
          Model: vm.FormSchema[0].Data[4].value,
          Manufacturer: vm.FormSchema[0].Data[5].value,
          Vendor: vm.FormSchema[0].Data[6].value,
          AssetCost: vm.FormSchema[0].Data[7].value,
          PurchaseOrder: vm.FormSchema[0].Data[8].value,
          OrderDate: vm.FormSchema[0].Data[9].value,
          InvoiceNumber: vm.FormSchema[0].Data[10].value,
          InvoiceDate: vm.FormSchema[0].Data[11].value,
          InsuranceRefNumber: vm.FormSchema[0].Data[12].value,
          InsurerName: vm.FormSchema[0].Data[13].value,
          InsuranceTo: vm.FormSchema[0].Data[14].value,
          WarrantyDuration: vm.FormSchema[0].Data[15].value,
          DepreciationRuleId: vm.FormSchema[0].Data[16].value,
          ItemLife: vm.FormSchema[0].Data[17].value,
          SalvageCost: vm.FormSchema[0].Data[18].value
        };
        ArrayData.push(myObj);
      }
      var JsonObj = JSON.stringify(ArrayData);
      await DataService["a" /* default */].SaveDeploy(ArrayData).then(function (response) {
        if (response.data.msg == 'DeployedSuccessfully') {
          vm.ClosePopup();
          vm.$parent.FetchData();
          vm.ShowAlert(vm.$t('ProductDeployAdd'), "success", true, vm.$t("Alert"));
        } else if (response.data.msg = "DeployItem") {
          vm.ClosePopup();
          vm.$parent.FetchData();
          vm.ShowAlert(vm.$t('ProductDeployUpdated'), "success", true, vm.$t("Alert"));
        } else {
          vm.ShowAlert(vm.$t("UnknownError"), "failure", vm.$t('Alert'));
        }
      });
    },
    async BindDataFileds() {
      debugger;
      var vm = this;
      var url = `DeployItemId=${vm.DeployItemId}&AssetCatalogId=${this.$route.params.id}`;
      await DataService["a" /* default */].GetDeployItems(url).then(response => {
        if (JSON.parse(response.data.result) != null) {
          var fieldDataValues = JSON.parse(response.data.result);
          if (JSON.parse(response.data.result).length > 0) {
            vm.FormSchema[0].Data[0].value = fieldDataValues[0].location;
            vm.FormSchema[0].Data[0].disabled = true;
            vm.FormSchema[0].Data[2].disabled = true;
            vm.FormSchema[0].Data[1].value = fieldDataValues[0].deployement_type == "1" ? '1' : '2';
            ;
            vm.FormSchema[0].Data[2].value = fieldDataValues[0].quantity;
            vm.FormSchema[0].Data[3].value = fieldDataValues[0].unit_price;
            vm.FormSchema[0].Data[4].value = fieldDataValues[0].model;
            vm.FormSchema[0].Data[5].value = fieldDataValues[0].manufacturer;
            vm.FormSchema[0].Data[6].value = fieldDataValues[0].vendor;
            vm.FormSchema[0].Data[7].value = fieldDataValues[0].asset_cost;
            vm.FormSchema[0].Data[8].value = fieldDataValues[0].purchase_order;
            vm.FormSchema[0].Data[9].value = fieldDataValues[0].order_date;
            vm.FormSchema[0].Data[10].value = fieldDataValues[0].invoice_number;
            vm.FormSchema[0].Data[11].value = fieldDataValues[0].invoice_date;
            vm.FormSchema[0].Data[12].value = fieldDataValues[0].insurance_ref_number;
            vm.FormSchema[0].Data[13].value = fieldDataValues[0].insurer_name;
            vm.FormSchema[0].Data[14].value = fieldDataValues[0].insurance_valid_upto;
            vm.FormSchema[0].Data[15].value = fieldDataValues[0].warranty_duration;
            vm.FormSchema[0].Data[16].value = fieldDataValues[0].depreciation_rule;
            vm.FormSchema[0].Data[17].value = fieldDataValues[0].item_life;
            vm.FormSchema[0].Data[18].value = fieldDataValues[0].salvage_cost;
          }
        }
        setTimeout(function () {
          vm.ResponsiveDataTable('tablelistingdata');
        }, 500);
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/AddDeployProductpop.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_AddDeployProductpopvue_type_script_lang_js_ = (AddDeployProductpopvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Modal/AddDeployProductpop.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Modal_AddDeployProductpopvue_type_script_lang_js_,
  AddDeployProductpopvue_type_template_id_62f775d6_render,
  AddDeployProductpopvue_type_template_id_62f775d6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AddDeployProductpop = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetCatalog/DeployProducts.vue?vue&type=script&lang=js&


/* harmony default export */ var DeployProductsvue_type_script_lang_js_ = ({
  props: {
    CatID: {
      type: String
    }
  },
  components: {
    AddDeployProductpop: AddDeployProductpop
  },
  data() {
    return {
      Headers: [{
        "COLUMN_NAME": "LOCATION_NAME",
        "DATA_TYPE": "image",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Location'),
        "DISPLAY_ORDER": 1,
        settings: {
          clickEvent: this.clickEventOfColumn,
          formatter: this.columnDataFormatter
        }
      }, {
        "COLUMN_NAME": "MODEL",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('model'),
        "DISPLAY_ORDER": 2
      }, {
        "COLUMN_NAME": "PURCHASE_ORDER",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('PurchaseOrder'),
        "DISPLAY_ORDER": 3
      }, {
        "COLUMN_NAME": "MANUFACTURER",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Manufacturer'),
        "DISPLAY_ORDER": 4
      }, {
        "COLUMN_NAME": "INVOICE_NUMBER",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('BillNumber'),
        "DISPLAY_ORDER": 5
      }, {
        "COLUMN_NAME": "ORDER_DATE",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('order_date'),
        "DISPLAY_ORDER": 4,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "DEPLOYEMENT_TYPE",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('DeploymentType'),
        "DISPLAY_ORDER": 6,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "DEPLOYED_BY",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('DeployedBy'),
        "DISPLAY_ORDER": 7
      }, {
        "COLUMN_NAME": "MODIFIED_AT",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('DeployedAt'),
        "DISPLAY_ORDER": 8,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "QUANTITY",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('Quantity'),
        "DISPLAY_ORDER": 9,
        settings: {
          isInSlot: true
        }
      }, {
        "COLUMN_NAME": "ASSET_COST",
        "DATA_TYPE": "text",
        "SORTABLE": false,
        "VISIBLE": true,
        "DISPLAY_NAME": this.$t('AssetCost'),
        "DISPLAY_ORDER": 10
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
      IscheckAddDeployProduct: false,
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
      ClickType: '',
      AsseCatalogtId: '',
      DeployItemId: '',
      txtSearchByLocation: '',
      idCatalog: ''
    };
  },
  created() {
    var vm = this;
    vm.idCatalog = vm.$route.params.id == undefined ? vm.CatID : vm.$route.params.id;
    vm.FetchData();
  },
  methods: {
    onCancel() {
      var vm = this;
      vm.$parent.btnCancel();
    },
    onNextClick() {
      var vm = this;
      vm.$parent.btnNextTab(vm.idCatalog);
    },
    onPreviousClick() {
      debugger;
      var vm = this;
      vm.$parent.btnPreviousTab();
    },
    DeployClosePOp: function () {
      var vm = this;
      vm.IscheckAddDeployProduct = false;
    },
    addDeployProduct: function () {
      var vm = this;
      vm.ClickType = 'ADD';
      vm.IscheckAddDeployProduct = true;
    },
    SearchByLocation() {
      var vm = this;
      vm.searchBy = vm.txtSearchByLocation == '' ? '' : vm.txtSearchByLocation;
      vm.FetchData();
    },
    ClearSearch() {
      var vm = this;
      vm.searchBy = '';
      vm.txtSearchByLocation = '';
      vm.FetchData();
    },
    FetchData() {
      var vm = this;
      var url = `search=${vm.searchBy == '' ? '' : vm.txtSearchByLocation}&pageSize=${vm.PageSize}&pageNum=${vm.PageNumber}&sortBy=${vm.SortBy}&sortExp=${vm.SortExp}&reqstatus=&LocationId=&catalogId=${vm.idCatalog}`;
      DataService["a" /* default */].ShowDeployItems(url).then(response => {
        if (JSON.parse(response.data).data != null) {
          if (JSON.parse(response.data).data.length > 0) {
            vm.DeployItemData = JSON.parse(response.data).data;
            vm.TotalRecords = vm.DeployItemData[0].TOTALRECORDS;
            vm.TotalPages = Math.ceil(vm.TotalRecords / vm.PageSize);
            vm.CurrentPage = vm.PageNumber;
            vm.noRecord = false;
          } else {
            vm.noRecord = true;
            vm.DeployItemData = [];
            vm.TotalRecords = 0;
          }
        }
        setTimeout(function () {
          vm.ResponsiveDataTable('tablelistingdata');
        }, 500);
      });
    },
    clickEventOfColumn: function (row, column) {
      var vm = this;
      if (column.COLUMN_NAME == 'LOCATION_NAME') {
        vm.ClickType = 'UPDATE';
        vm.AsseCatalogtId = row.ASSET_CATALOGUE_ID;
        vm.DeployItemId = row.DEPLOY_ITEM_ID;
        vm.IscheckAddDeployProduct = true;
      }
    },
    columnDataFormatter: function (row, column) {
      return row[column.COLUMN_NAME];
    },
    pagerMethod: function (value) {
      this.PageSize = value.PageSize;
      this.PageNumber = value.PageNumber;
      this.FetchData();
    }
  }
});
// CONCATENATED MODULE: ./src/views/AssetCatalog/DeployProducts.vue?vue&type=script&lang=js&
 /* harmony default export */ var AssetCatalog_DeployProductsvue_type_script_lang_js_ = (DeployProductsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/AssetCatalog/DeployProducts.vue





/* normalize component */

var DeployProducts_component = Object(componentNormalizer["a" /* default */])(
  AssetCatalog_DeployProductsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DeployProducts = __webpack_exports__["a"] = (DeployProducts_component.exports);

/***/ }),

/***/ "e598":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2101b2d3-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AssetCatalog/CustomEditProducts.vue?vue&type=template&id=4153b047&
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

// EXTERNAL MODULE: ./src/views/AssetCatalog/RelatedInformation.vue + 40 modules
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
//# sourceMappingURL=chunk-02a6fd2e.js.map