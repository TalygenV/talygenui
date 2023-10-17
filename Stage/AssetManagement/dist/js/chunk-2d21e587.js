(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d21e587"],{

/***/ "d4bc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Asset/ImportItemType.vue?vue&type=template&id=002eaf91&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "main-content",
    attrs: {
      "id": "main-content"
    }
  }, [_c('loader', {
    attrs: {
      "is-visible": _vm.isLoading
    }
  }), _c('section', {
    staticClass: "page-action"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12 padding-t_8"
  }, [_c('div', {
    staticClass: "theme-primary partition-full"
  }, [_c('span', {
    staticClass: "p-name text-white"
  }, [_vm._v(_vm._s(_vm.$t('Import Product Type')))])])])])]), _c('div', {
    staticClass: "user-guide-custom d-none"
  }, [_vm._v(" " + _vm._s(_vm.$t('User_Guide_ProductTypeSampleImport')) + " ")]), _c('div', {
    staticClass: "border p-3"
  }, [_c('Form', {
    ref: "ItemTypeForm"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Sample File')) + ":")]), _c('div', {
    staticClass: "input-group mb-3"
  }, [_c('div', {
    staticClass: "form-control"
  }, [_c('i', {
    staticClass: "fa fa-file-excel-o pr-1 text-success"
  }), _vm._v(_vm._s(_vm.$t('ProductTypeSample')) + ".xls ")]), _c('div', {
    staticClass: "input-group-append downloadProductSample"
  }, [_c('span', {
    staticClass: "input-group-text",
    attrs: {
      "id": "basic-addon2"
    }
  }, [_c('a', {
    attrs: {
      "href": "/Content/files/ProductTypeSample.xls",
      "download": ""
    }
  }, [_c('i', {
    staticClass: "fa fa-download text-primary"
  })])])])])])]), _c('div', {
    staticClass: "col-lg-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t('Upload a File')) + ":"), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _c('Field', {
    attrs: {
      "rules": {
        'required': true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        errors
      }) {
        return [_c('div', {
          staticClass: "input-group"
        }, [_c('div', {
          staticClass: "custom-file ProductTypeSampleFile align-items-start"
        }, [_c('input', {
          staticStyle: {
            "position": "absolute",
            "clip": "rect(0px, 0px, 0px, 0px)"
          },
          attrs: {
            "type": "file",
            "name": "FileSrc",
            "id": "flAvatar",
            "tabindex": "-1"
          },
          on: {
            "change": function ($event) {
              return _vm.setFile($event);
            }
          }
        }), _c('div', {
          staticClass: "bootstrap-filestyle input-group"
        }, [_c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.attachmentName,
            expression: "attachmentName"
          }],
          class: {
            'form-control disabled': true,
            'is-invalid': errors[0]
          },
          attrs: {
            "type": "text",
            "disabled": ""
          },
          domProps: {
            "value": _vm.attachmentName
          },
          on: {
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.attachmentName = $event.target.value;
            }
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
            "for": "flAvatar"
          }
        }, [_vm._v(_vm._s(_vm.$t('FileControlText')))])]), _c('span', {
          staticClass: "input-group-text border-0 bg-transparent p-0 pl-2"
        }, [_c('a', {
          staticClass: "round-icon-small btn-danger-light",
          attrs: {
            "href": "javascript:;",
            "title": "Clear"
          },
          on: {
            "click": _vm.Clear
          }
        }, [_c('i', {
          staticClass: "fa fa-undo"
        })])])]), errors[0] ? _c('span', {
          staticClass: "invalid-feedback",
          attrs: {
            "name": "FileSrc"
          }
        }, [_vm._v("Upload a File Field is Required.")]) : _vm._e()])])])];
      }
    }])
  })], 1)])]), _c('div', {
    staticClass: "row flex-row-reverse"
  }, [_c('div', {
    staticClass: "col-lg-6 text-right"
  }, [_c('a', {
    staticClass: "btn btn-info formbtn mr-1",
    attrs: {
      "href": "javascript:void(0);",
      "title": _vm.$t('ImportFromExcelFile')
    },
    on: {
      "click": function ($event) {
        return _vm.UploadProductSampleFile();
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-download pr-2"
  }), _vm._v(_vm._s(_vm.$t('Import From Excel File')))]), _c('a', {
    staticClass: "btn btn-danger formbtn my-2",
    attrs: {
      "title": "",
      "data-toggle-tooltip": "tooltip",
      "data-original-title": "Cancel"
    },
    on: {
      "click": function ($event) {
        return _vm.onCancel();
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-close mr-2"
  }), _vm._v("Cancel")])])])])], 1), _vm.ShowImportProduct ? _c('ProductTypeSample', {
    ref: "myChild",
    attrs: {
      "filepath": _vm.filepath
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/Asset/ImportItemType.vue?vue&type=template&id=002eaf91&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"fb182154-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/ProductTypeSample.vue?vue&type=template&id=4855b9c0&
var ProductTypeSamplevue_type_template_id_4855b9c0_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm._m(0);
};
var ProductTypeSamplevue_type_template_id_4855b9c0_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_c('div', {
    staticClass: "listing mt-2"
  }, [_c('div', {
    staticClass: "table-responsive mb-3 table-fix-header"
  }, [_c('table', {
    staticClass: "table table-bordered dt-responsive nowrap mt-0",
    attrs: {
      "id": "tblExpList"
    }
  }, [_c('thead', {
    staticClass: "thead-bg"
  }, [_c('tr', [_c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "156px",
      "min-width": "156px",
      "max-width": "156px"
    },
    attrs: {
      "id": "th-PRODUCTTYPE"
    }
  }, [_c('span', {
    staticClass: "d-inline-block",
    staticStyle: {
      "min-width": "138px"
    }
  }, [_vm._v("Product Type"), _c('span', {
    staticClass: "d-inline-block"
  }, [_c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])])]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-PRODUCTTYPE-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "85px",
      "min-width": "85px",
      "max-width": "85px"
    },
    attrs: {
      "id": "th-STATUS"
    }
  }, [_c('span', {
    staticClass: "d-inline-block",
    staticStyle: {
      "min-width": "67px"
    }
  }, [_vm._v("Status"), _c('span', {
    staticClass: "d-inline-block"
  }, [_c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])])]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-STATUS-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "204px",
      "min-width": "204px",
      "max-width": "204px"
    },
    attrs: {
      "id": "th-PRODUCTTYPECODE"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "186px"
    }
  }, [_vm._v("Product Type Code")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-PRODUCTTYPECODE-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "132px",
      "min-width": "132px",
      "max-width": "132px"
    },
    attrs: {
      "id": "th-DESCRIPTION"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "114px"
    }
  }, [_vm._v("Description")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-DESCRIPTION-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "108px",
      "min-width": "108px",
      "max-width": "108px"
    },
    attrs: {
      "id": "th-CONTAINER"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "90px"
    }
  }, [_vm._v("Container")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-CONTAINER-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "948px",
      "min-width": "948px",
      "max-width": "948px"
    },
    attrs: {
      "id": "th-COMPARTMENTIFINCONTAINERPLEASEWRITECOMPARTMENTNAMESSEPARATEDBYACOMMA"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "930px"
    }
  }, [_vm._v("Compartment")]), _c('small', {
    staticClass: "form-text text-muted"
  }, [_vm._v("If in container, please write compartment names separated by a comma")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-COMPARTMENTIFINCONTAINERPLEASEWRITECOMPARTMENTNAMESSEPARATEDBYACOMMA-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "85px",
      "min-width": "85px",
      "max-width": "85px"
    },
    attrs: {
      "id": "th-PRODUCT"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "67px"
    }
  }, [_vm._v("Product")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-PRODUCT-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "120px",
      "min-width": "120px",
      "max-width": "120px"
    },
    attrs: {
      "id": "th-CONSUMABLE"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "102px"
    }
  }, [_vm._v("Consumable ")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-CONSUMABLE-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "120px",
      "min-width": "120px",
      "max-width": "120px"
    },
    attrs: {
      "id": "th-LICENSES"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "102px"
    }
  }, [_vm._v("License(s)")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-LICENSES-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "240px",
      "min-width": "240px",
      "max-width": "240px"
    },
    attrs: {
      "id": "th-MATERIALSPAREPARTS"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "222px"
    }
  }, [_vm._v("Material/Spare Parts")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-MATERIALSPAREPARTS-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "180px",
      "min-width": "180px",
      "max-width": "180px"
    },
    attrs: {
      "id": "th-ISTRANSFERABLE"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "162px"
    }
  }, [_vm._v("Is Transferable")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-ISTRANSFERABLE-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "156px",
      "min-width": "156px",
      "max-width": "156px"
    },
    attrs: {
      "id": "th-SELFCHECKOUT"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "138px"
    }
  }, [_vm._v("Self Checkout")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-SELFCHECKOUT-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "204px",
      "min-width": "204px",
      "max-width": "204px"
    },
    attrs: {
      "id": "th-PENALTYONSTATUS"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "186px"
    }
  }, [_vm._v("Penalty On Status")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-PENALTYONSTATUS-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "clsFixSize ui-resizable",
    staticStyle: {
      "width": "168px",
      "min-width": "168px",
      "max-width": "168px"
    },
    attrs: {
      "id": "th-PENALTYSTATUS"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("Penalty Status")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-PENALTYSTATUS-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "300px",
      "min-width": "300px",
      "max-width": "300px"
    },
    attrs: {
      "id": "th-PENALTYONRETURNOVERDUE"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "282px"
    }
  }, [_vm._v("Penalty On Return Overdue")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-PENALTYONRETURNOVERDUE-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "144px",
      "min-width": "144px",
      "max-width": "144px"
    },
    attrs: {
      "id": "th-GRACEPERIOD"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "126px"
    }
  }, [_vm._v("Grace Period")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-GRACEPERIOD-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "324px",
      "min-width": "324px",
      "max-width": "324px"
    },
    attrs: {
      "id": "th-ENABLETERMSANDCONDITIONS"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "306px"
    }
  }, [_vm._v("Enable Terms and Conditions")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-ENABLETERMSANDCONDITIONS-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "228px",
      "min-width": "228px",
      "max-width": "228px"
    },
    attrs: {
      "id": "th-EMPLOYEEACCEPTANCE"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "210px"
    }
  }, [_vm._v("Employee Acceptance")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-EMPLOYEEACCEPTANCE-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "192px",
      "min-width": "192px",
      "max-width": "192px"
    },
    attrs: {
      "id": "th-INSURANCEPOLICY"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "174px"
    }
  }, [_vm._v("Insurance Policy")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-INSURANCEPOLICY-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "132px",
      "min-width": "132px",
      "max-width": "132px"
    },
    attrs: {
      "id": "th-CALIBRATION"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "114px"
    }
  }, [_vm._v("Calibration")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-CALIBRATION-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "144px",
      "min-width": "144px",
      "max-width": "144px"
    },
    attrs: {
      "id": "th-PRODUCTCOST"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "126px"
    }
  }, [_vm._v("Product Cost")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-PRODUCTCOST-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "96px",
      "min-width": "96px",
      "max-width": "96px"
    },
    attrs: {
      "id": "th-WARRANTY"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "78px"
    }
  }, [_vm._v("Warranty")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-WARRANTY-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "132px",
      "min-width": "132px",
      "max-width": "132px"
    },
    attrs: {
      "id": "th-DEPRECIABLE"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "114px"
    }
  }, [_vm._v("Depreciable")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-DEPRECIABLE-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "144px",
      "min-width": "144px",
      "max-width": "144px"
    },
    attrs: {
      "id": "th-GPSTRACKING"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "126px"
    }
  }, [_vm._v("GPS Tracking")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-GPSTRACKING-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })]), _c('th', {
    staticClass: "ui-resizable",
    staticStyle: {
      "width": "192px",
      "min-width": "192px",
      "max-width": "192px"
    },
    attrs: {
      "id": "th-FLEETMANAGEMENT"
    }
  }, [_c('span', {
    staticStyle: {
      "min-width": "174px"
    }
  }, [_vm._v("Fleet Management")]), _c('div', {
    staticClass: "sizer",
    attrs: {
      "id": "th-FLEETMANAGEMENT-sizer"
    }
  }), _c('div', {
    staticClass: "ui-resizable-handle ui-resizable-e",
    staticStyle: {
      "z-index": "90"
    }
  })])])])])]), _c('div', {
    staticClass: "row flex-row-reverse"
  }, [_c('div', {
    staticClass: "col-lg-6 text-right"
  }, [_c('div', {
    staticClass: "search-btm-btn"
  }, [_c('a', {
    staticClass: "btn btn-success formbtn widthhalf",
    attrs: {
      "id": "aSubmit",
      "href": "javascript:;",
      "title": "",
      "data-toggle-tooltip": "tooltip",
      "data-original-title": "Submit"
    }
  }, [_c('i', {
    staticClass: "fa fa-save pr-2"
  }), _vm._v("Submit")]), _c('a', {
    staticClass: "btn btn-danger",
    attrs: {
      "id": "aCancel",
      "href": "javascript:;",
      "title": "",
      "data-toggle-tooltip": "tooltip",
      "data-original-title": "Cancel"
    }
  }, [_c('i', {
    staticClass: "fa fa-close pr-2"
  }), _vm._v("Cancel")])])])])])]);
}];

// CONCATENATED MODULE: ./src/components/Modal/ProductTypeSample.vue?vue&type=template&id=4855b9c0&

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/ProductTypeSample.vue?vue&type=script&lang=js&


/* harmony default export */ var ProductTypeSamplevue_type_script_lang_js_ = ({
  props: {
    filepath: {
      type: String
    }
  },
  data() {
    return {
      Xdata: []
    };
  },
  created() {
    debugger;
    var vm = this;
    vm.ProductTypeSample();
  },
  methods: {
    onCancel: function () {
      this.$router.push({
        name: 'Product Type'
      });
    },
    ProductTypeSample: function () {
      debugger;
      var vm = this;
      var url = `filepath=${vm.filepath}`;
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/ProductTypeSample.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_ProductTypeSamplevue_type_script_lang_js_ = (ProductTypeSamplevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Modal/ProductTypeSample.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Modal_ProductTypeSamplevue_type_script_lang_js_,
  ProductTypeSamplevue_type_template_id_4855b9c0_render,
  ProductTypeSamplevue_type_template_id_4855b9c0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ProductTypeSample = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Asset/ImportItemType.vue?vue&type=script&lang=js&



/* harmony default export */ var ImportItemTypevue_type_script_lang_js_ = ({
  components: {
    ProductTypeSample: ProductTypeSample
  },
  data: function () {
    return {
      isLoading: false,
      file: null,
      filepath: '',
      excelFileName: null,
      reqfrom: null,
      expListing: null,
      trips: [],
      categories: [],
      projects: [],
      currencies: [],
      tasks: [],
      expLimitJsonBack: [],
      check_EXPENSE_LIMIT: false,
      userDateFormat: null,
      files: new FormData(),
      value: null,
      attachmentName: '',
      ShowImportProduct: false,
      Xdata: ''
    };
  },
  methods: {
    onCancel: function () {
      this.$router.push({
        name: 'Product Type'
      });
    },
    setFile: function (e) {
      this.attachmentName = e.target.files[0].name;
      this.file = e.target.files[0];
      this.excelFileName = e.target.files[0].name;
    },
    Clear: function () {
      this.attachmentName = '';
    },
    UploadProductSampleFile() {
      var vm = this;
      vm.$refs.ItemTypeForm.validate().then(result => {
        debugger;
        if (result) {
          if ($("#flAvatar").val() != "") {
            var file = $("#flAvatar").val().split('\\').pop();
            var allowFileTypesExt = '.xls,.xlsx';
            var extension = file.replace(/^.*\./, '');
            if (!allowFileTypesExt.includes(extension)) {
              vm.ShowAlert(vm.$t('InvalidSampleFileUploadMsg', [file, allowFileTypesExt]), "warning", true, vm.$t('Alert'));
            } else {
              vm.confirmR(vm.$t("bulkImportConfirmationMsg"), true, vm.$t("Delete") + "  " + vm.$t("REPORT_ID"), function () {
                const formdata = new FormData();
                formdata.append("file", vm.file);
                vm.isLoading = true;
                DataService["a" /* default */].ImportProductSamplePost(formdata).then(function (response) {
                  vm.isLoading = false;
                  var data = response.data;
                  if (data.Status == 0) {
                    vm.filepath = data.Msg;
                    vm.ShowImportProduct = vm.filepath != '' ? true : false;
                  } else {
                    vm.ShowAlert(data.Msg, "warning", true, vm.$t("Alert"));
                  }
                });
                vm.isLoading = false;
              });
            }
          } else {
            vm.ShowAlert(vm.$t("PleaseUploadExcelFile"), "warning", true, vm.$t("Alert"));
          }
        }
      });
      vm.$emit('ImportProduct');
    }
  }
});
// CONCATENATED MODULE: ./src/views/Asset/ImportItemType.vue?vue&type=script&lang=js&
 /* harmony default export */ var Asset_ImportItemTypevue_type_script_lang_js_ = (ImportItemTypevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/Asset/ImportItemType.vue





/* normalize component */

var ImportItemType_component = Object(componentNormalizer["a" /* default */])(
  Asset_ImportItemTypevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ImportItemType = __webpack_exports__["default"] = (ImportItemType_component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d21e587.js.map