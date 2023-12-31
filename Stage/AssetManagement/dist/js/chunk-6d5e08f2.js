(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-6d5e08f2"],{

/***/ "56f6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"55cbdea1-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/TagNamePopup.vue?vue&type=template&id=1f448b04&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('transition', {
    attrs: {
      "name": "modal"
    }
  }, [_c('div', {
    staticClass: "my-popups"
  }, [_c('div', {
    staticClass: "modal d-block"
  }, [_c('div', {
    staticClass: "modal-dialog modal-dialog-centered",
    staticStyle: {
      "max-width": "900px !important"
    }
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('div', {
    staticClass: "modal-header theme-primary partition-full"
  }, [_c('h4', {
    staticClass: "modal-title"
  }, [_vm._v(_vm._s(_vm.$t('Tag')) + " " + _vm._s(_vm.$t('Name')))]), _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "title": "Close"
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
    staticClass: "col-md-12 float-left px-0"
  }, [_c('div', {
    staticClass: "row",
    staticStyle: {
      "max-height": "450px"
    }
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', [_c('span', {
    attrs: {
      "id": ""
    }
  }, [_vm._v("Title :")])]), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")]), _c('Field', {
    attrs: {
      "name": "TagName",
      "rules": {
        'required': true
      },
      "label": "Title"
    }
  }, [_c('div', {
    staticClass: "input-group mb-3",
    staticStyle: {
      "position": "relative"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.tagname,
      expression: "tagname"
    }],
    class: {
      'form-control': true
    },
    attrs: {
      "name": "TagName",
      "id": "TagName",
      "type": "text"
    },
    domProps: {
      "value": _vm.tagname
    },
    on: {
      "keyup": _vm.searchTag,
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.tagname = $event.target.value;
      }
    }
  }), _c('div', {
    staticClass: "unique_dynamicdatalist"
  }, _vm._l(_vm.TagsArray, function (item) {
    return _c('ul', {
      key: item,
      staticStyle: {
        "z-index": "auto"
      },
      on: {
        "click": function ($event) {
          return _vm.setTagName(item);
        }
      }
    }, [_vm.showTagDropdown ? _c('li', {
      staticStyle: {
        "text-transform": "capitalize"
      },
      attrs: {
        "value": item.TAG_ID
      }
    }, [_vm._v(" " + _vm._s(item.TAG_NAME))]) : _vm._e()]);
  }), 0), !_vm.FromAddProduct ? _c('a', {
    staticClass: "btn float-left",
    staticStyle: {
      "background-color": "#fff",
      "color": "#303030",
      "border-color": "#abb5bf",
      "border-left": "none"
    },
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": _vm.showTagList
    }
  }, [_c('em', {
    staticClass: "dropdown-toggle float-right"
  })]) : _vm._e()])])], 1)])])])])], 1), _c('div', {
    staticClass: "modal-footer"
  }, [_c('div', {
    staticClass: "col-md-12 p-0"
  }, [_c('div', {
    staticClass: "row flex-row-reverse"
  }, [_c('div', {
    staticClass: "col-lg-6 text-right"
  }, [_c('a', {
    staticClass: "btn btn-success save-btn mr-1",
    attrs: {
      "href": "javascript:;",
      "title": "Save"
    },
    on: {
      "click": function ($event) {
        return _vm.SaveTag();
      }
    }
  }, [_c('em', {
    staticClass: "fa fa-save pr-2"
  }), _vm._v(_vm._s(_vm.$t('Save')))]), _c('a', {
    staticClass: "btn btn-danger delete-btn",
    attrs: {
      "href": "javascript:;",
      "title": "Cancel"
    },
    on: {
      "click": _vm.ClosePopup
    }
  }, [_c('em', {
    staticClass: "fa fa-times"
  }), _vm._v(_vm._s(_vm.$t('Cancel')) + " ")])]), _c('div', {
    staticClass: "col-lg-6"
  }, [_c('div', {
    staticClass: "py-2"
  }, [_c('small', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.$t("MandatoryString")) + " ")])])])])])])])])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Modal/TagNamePopup.vue?vue&type=template&id=1f448b04&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// EXTERNAL MODULE: ./node_modules/vue-multiselect/dist/vue-multiselect.min.js
var vue_multiselect_min = __webpack_require__("8e5f");
var vue_multiselect_min_default = /*#__PURE__*/__webpack_require__.n(vue_multiselect_min);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/TagNamePopup.vue?vue&type=script&lang=js&



/* harmony default export */ var TagNamePopupvue_type_script_lang_js_ = ({
  components: {
    Multiselect: vue_multiselect_min_default.a
  },
  props: {
    FromAddProduct: {
      type: Boolean
    }
  },
  data() {
    return {
      tagname: "",
      tagId: "",
      TagsArray: [],
      showTagDropdown: false,
      options: []
    };
  },
  created: function () {
    var vm = this;
    vm.GetTagsByModuleId();
  },
  methods: {
    ClosePopup() {
      var vm = this;
      vm.$parent.CloseTagPopup();
    },
    SaveTag: function () {
      var vm = this;
      if (vm.tagname.length > 0) {
        var jsonobj = {
          TagId: vm.tagId == '' ? '' : vm.tagId,
          tagStatusId: 1001,
          tagName: vm.tagname.toLowerCase(),
          tagDesc: '',
          moduleName: 'Asset'
        };
        var objectPostString = JSON.stringify(jsonobj);
        DataService["a" /* default */].SaveTag(objectPostString).then(function (response) {
          if (response.data[0].Status == "Success" && response.data[0].Value > "0") {
            vm.ShowAlert(vm.$t('Tag has been saved successfully!'), "success", true, vm.$t('Alert'));
            vm.$parent.CloseTagPopup();
            vm.$parent.GetTagsByModuleI();
          }
          if (response.data[0].Status == "Success" && response.data[0].Value == "0") {
            vm.ShowAlert(vm.$t('Tag has been updated successfully!'), "success", true, vm.$t('Alert'));
            vm.$parent.CloseTagPopup();
            vm.$parent.GetTagsByModuleI();
          } else if (response.data[0].Status == "Exist") {
            vm.ShowAlert(vm.$t('Tag Already Exist'), "failure", true, vm.$t('Alert'));
            vm.$parent.CloseTagPopup();
          }
        });
      } else {
        vm.ShowAlert(vm.$t('TagNameIsRequired'), "failure", true, vm.$t('Alert'));
      }
    },
    setTagName: function (event) {
      var vm = this;
      vm.tagname = event.TAG_NAME;
      vm.tagId = event.TAG_ID;
      vm.showTagDropdown = false;
    },
    GetTagsByModuleId: function () {
      debugger;
      var vm = this;
      DataService["a" /* default */].GetTagsByModuleId('moduleName=Asset').then(function (response) {
        vm.TagsArray = JSON.parse(response.data).data;
        vm.TagsArray.forEach((itm, index) => {
          vm.options.push({
            name: itm.TAG_NAME,
            value: itm.TAG_ID
          });
        });
      });
    },
    showTagList: function () {
      var vm = this;
      vm.showTagDropdown ? vm.showTagDropdown = false : vm.showTagDropdown = true;
    },
    searchTag() {
      var vm = this;
      // vm.GetTagsByModuleId();
      vm.showTagDropdown = true;
      setTimeout(function () {
        vm.TagsArray = vm.TagsArray.filter(x => x.TAG_NAME.toLowerCase().includes(vm.tagname.toLowerCase()));
      }, 300);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/TagNamePopup.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_TagNamePopupvue_type_script_lang_js_ = (TagNamePopupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Modal/TagNamePopup.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Modal_TagNamePopupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TagNamePopup = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "879c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProductType_vue_vue_type_style_index_0_id_181d36c3_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("de8e");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProductType_vue_vue_type_style_index_0_id_181d36c3_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProductType_vue_vue_type_style_index_0_id_181d36c3_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "cda2":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#ProductTypeCode .form-group a{position:absolute;top:-24px;left:144px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "de8e":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("cda2");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("2a540ba8", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "f6fa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"55cbdea1-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/AddProductType.vue?vue&type=template&id=181d36c3&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_c('loader', {
    attrs: {
      "is-visible": _vm.isLoading
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
    },
    scopedSlots: _vm._u([{
      key: "tgslot-GracePeriod",
      fn: function ({
        data
      }) {
        return [_c('div', {
          staticClass: "form-group"
        }, [_c('Field', {
          staticClass: "w-100",
          attrs: {
            "rules": {
              'required': true
            },
            "name": "Grace Period"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              errors
            }) {
              return [_c('div', {
                staticClass: "d-flex"
              }, [_c('input', {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.GracePeriod,
                  expression: "GracePeriod"
                }],
                class: {
                  'form-control': true,
                  'is-invalid': errors[0]
                },
                attrs: {
                  "type": "text",
                  "name": "GracePeriod"
                },
                domProps: {
                  "value": _vm.GracePeriod
                },
                on: {
                  "keyup": function ($event) {
                    return _vm.handleChange(_vm.GracePeriod);
                  },
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.GracePeriod = $event.target.value;
                  }
                }
              }), _c('span', {
                staticClass: "input-group-append"
              }, [_c('span', {
                staticClass: "input-group-text",
                attrs: {
                  "id": "spnOutOF"
                }
              }, [_vm._v("Days")])])]), errors[0] ? _c('span', {
                staticClass: "invalid-feedback d-block",
                attrs: {
                  "name": "GracePeriod"
                }
              }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
            }
          }], null, true)
        })], 1)];
      }
    }, {
      key: "tgslot-ProductTypeCode",
      fn: function ({
        data
      }) {
        return [_c('div', {
          staticClass: "form-group"
        }, [_c('div', {
          staticClass: "d-flex"
        }, [_c('a', {
          attrs: {
            "href": "javascript:;",
            "data-toggle": "tooltip",
            "data-trigger": "click",
            "title": "Please enter the product type code. Else four digit product type code will be generated by system."
          },
          on: {
            "click": _vm.toggleTip
          }
        }, [_c('i', {
          staticClass: "fa fa-question-circle-o text-popover",
          staticStyle: {
            "font-size": "14px"
          }
        })]), _c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.ProductTypeCode,
            expression: "ProductTypeCode"
          }],
          staticClass: "form-control",
          attrs: {
            "type": "text",
            "name": "ProductTypeCode",
            "maxlength": 4
          },
          domProps: {
            "value": _vm.ProductTypeCode
          },
          on: {
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.ProductTypeCode = $event.target.value;
            }
          }
        })])])];
      }
    }, {
      key: "tgslot-tblContainer",
      fn: function ({
        data
      }) {
        return [_vm.IsShowCompartments ? _c('div', {
          staticClass: "table-responsive"
        }, [_c('Form', {
          ref: "AddProductType"
        }, [_c('table', {
          staticClass: "table table-bordered dt-responsive nowrap mt-0 m-0",
          attrs: {
            "id": "tblContainerList"
          }
        }, [_c('thead', {
          staticClass: "thead-bg",
          attrs: {
            "id": "divgrid"
          }
        }, [_c('th', [_c('span', {
          staticClass: "float-left"
        }, [_vm._v("Compartments")]), _c('span', {
          staticClass: "text-danger float-left"
        }, [_vm._v("*")])]), _c('th', {
          staticClass: "text-center",
          staticStyle: {
            "min-width": "100px"
          }
        }, [_c('span', [_vm._v("Action")])])]), _c('tbody', _vm._l(_vm.tableRows, function (item, index) {
          return _c('tr', {
            attrs: {
              "id": "datarow"
            }
          }, [_c('td', [_c('Field', {
            attrs: {
              "name": "CompartmentName",
              "rules": {
                'required': true
              }
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
                    value: item.InputContainervalue,
                    expression: "item.InputContainervalue"
                  }],
                  class: {
                    'form-control': true,
                    'is-invalid': errors[0]
                  },
                  attrs: {
                    "id": 'container_name_' + index,
                    "type": "text",
                    "maxlength": "200",
                    "placeholder": "Fill the compartment name"
                  },
                  domProps: {
                    "value": item.InputContainervalue
                  },
                  on: {
                    "change": function ($event) {
                      return _vm.onChangeContainer(data.fieldInfo, index, $event);
                    },
                    "input": function ($event) {
                      if ($event.target.composing) return;
                      _vm.$set(item, "InputContainervalue", $event.target.value);
                    }
                  }
                }), errors[0] ? _c('span', {
                  staticClass: "invalid-feedback d-block",
                  attrs: {
                    "name": "CompartmentName"
                  }
                }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
              }
            }], null, true)
          })], 1), _c('td', [_c('a', {
            staticClass: "round-icon-small btn-danger-light float-none d-inline-block",
            attrs: {
              "href": "javascript:;",
              "title": "Delete"
            }
          }, [_c('em', {
            staticClass: "recyclebin fa fa-trash",
            on: {
              "click": function ($event) {
                return _vm.RemoveContainerRow(index);
              }
            }
          })]), _c('a', {
            staticClass: "add round-icon-small btn-success-light float-none d-inline-block",
            attrs: {
              "href": "javascript:;",
              "title": "Add"
            },
            on: {
              "click": function ($event) {
                return _vm.AddContainerRow();
              }
            }
          }, [_c('em', {
            staticClass: "fa fa-plus"
          })])])]);
        }), 0)])])], 1) : _vm._e()];
      }
    }], null, false, 801660012)
  }) : _vm._e(), _c('div', {
    staticClass: "left-content row flex-row-reverse mt-3"
  }, [_c('div', {
    staticClass: "col-lg-12 text-left"
  }, [_c('div', {
    staticClass: "py-2 mandatory"
  }, [_vm._v(" " + _vm._s(_vm.$t('MandatoryString')) + " ")])])])], 1), _vm.IsTagNamePopup ? _c('TagNamePopup', {
    attrs: {
      "FromAddProduct": _vm.FromAddProduct
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Modal/AddProductType.vue?vue&type=template&id=181d36c3&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./src/service/DataService.js + 1 modules
var DataService = __webpack_require__("1115");

// EXTERNAL MODULE: ./src/components/Modal/TagNamePopup.vue + 4 modules
var TagNamePopup = __webpack_require__("56f6");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal/AddProductType.vue?vue&type=script&lang=js&



/* harmony default export */ var AddProductTypevue_type_script_lang_js_ = ({
  props: {
    popupCondition: {
      type: Boolean,
      required: true
    },
    AseetTypeIde: {
      type: Number,
      required: false
    },
    FromPage: {
      type: String,
      required: false
    }
  },
  components: {
    TagNamePopup: TagNamePopup["a" /* default */]
  },
  data() {
    return {
      isLoading: false,
      FormSchema: [{
        layoutType: "triple",
        group_name: 'Product Type',
        group_display_name: this.$t('ItemType'),
        Data: [{
          astype: "TextField",
          label: this.$t('ItemNameType'),
          name: "ItemNameType",
          value: "",
          placeholder: "",
          validationRules: {
            "required": true
          }
        }, {
          astype: "SelectField",
          label: this.$t('Status'),
          name: "Status",
          value: "",
          placeholder: "",
          validationRules: {
            "required": true
          },
          config: {
            options: []
          }
        }, {
          astype: "SlotField",
          label: this.$t('ProductTypeCode'),
          name: "ProductTypeCode",
          value: "",
          placeholder: "",
          validationRules: {
            max: 4
          }
        }, {
          astype: "toggleField",
          label: this.$t('Container'),
          name: "Container",
          value: "",
          placeholder: "",
          config: {
            onChange: this.ShowCompartments
          }
        }, {
          astype: "SlotField",
          showLabel: false,
          label: this.$t('Container'),
          name: "tblContainer",
          value: "",
          placeholder: "",
          config: {
            options: []
          },
          visibility: true
        }]
      }, {
        layoutType: "triple",
        Data: [{
          astype: "FileField",
          showLabel: true,
          label: this.$t('AttachItemImage'),
          name: "AttachItemImage",
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
            }
            // {
            //     fileType: 'pdf',
            //     iconClass: 'fa-file-archive-o'
            // }
            ],

            showSelectedFiles: [{
              attachmentId: "1",
              attachmentName: "",
              attachmentPath: ""
            }],
            onClickSelectedFiles: this.onClickSelectedFile,
            onDeleteSelectedFiles: this.onDeleteSelectedFiles,
            onChange: this.setFile1,
            showAddIcon: false,
            onAddButtonClick: this.AddFileMore,
            multiple: false
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
        layoutType: "four",
        group_name: 'Product Categories',
        group_display_name: this.$t('ProductCategories'),
        Data: [{
          astype: "toggleField",
          label: this.$t('Asset_No'),
          name: "Asset_No",
          value: "",
          placeholder: ""
        }, {
          astype: "toggleField",
          label: this.$t('Consumable'),
          name: "Consumable",
          value: "",
          placeholder: ""
        }, {
          astype: "toggleField",
          label: this.$t('License'),
          name: "License",
          value: "",
          placeholder: ""
        }, {
          astype: "toggleField",
          label: this.$t('MaterialSpareParts'),
          name: "MaterialSpareParts",
          value: "",
          placeholder: ""
        }]
      }, {
        layoutType: "single",
        Data: [{
          astype: "MultiSelectField",
          label: this.$t('Tags'),
          name: "Tags",
          value: "",
          mode: "tag",
          placeholder: "",
          config: {
            options: [],
            showAddIcon: true,
            onAddButtonClick: this.OpenAddTagPopup
          }
        }]
      }, {
        layoutType: "four",
        group_name: 'Hardware Integration Type',
        group_display_name: this.$t('HardwareIntegrationType'),
        Data: [{
          astype: "toggleField",
          label: this.$t('Time_n_Attendance'),
          name: "Time_n_Attendance",
          value: "",
          placeholder: ""
        }, {
          astype: "toggleField",
          label: this.$t('Camera'),
          name: "Camera",
          value: "",
          placeholder: ""
        }, {
          astype: "toggleField",
          label: this.$t('RFID'),
          name: "RFID",
          value: "",
          placeholder: ""
        }, {
          astype: "toggleField",
          label: this.$t('GPSTracking'),
          name: "GPSTracking",
          value: "",
          placeholder: ""
        }]
      }, {
        layoutType: "four",
        group_name: 'Action Based Properties',
        group_display_name: this.$t('ActionBasedProperties'),
        Data: [{
          astype: "toggleField",
          label: this.$t('IsTransferable'),
          name: "IsTransferable",
          value: "",
          placeholder: ""
        }, {
          astype: "toggleField",
          label: this.$t('IsSelfCheckOut'),
          name: "IsSelfCheckOut",
          value: "",
          placeholder: "",
          config: {
            onChange: this.OnIsSelfCheckOut
          }
        }, {
          astype: "toggleField",
          label: this.$t('SelfieEnable'),
          name: "SelfieEnable",
          value: "",
          placeholder: "",
          visibility: false
        }, {
          astype: "toggleField",
          label: this.$t('EmployeeAcceptance'),
          name: "EmployeeAcceptance",
          value: "",
          placeholder: ""
        }, {
          astype: "toggleField",
          label: this.$t('EnableTerms'),
          name: "EnableTerms",
          value: "",
          placeholder: ""
        }, {
          astype: "toggleField",
          label: this.$t('GPS_Enable'),
          name: "GPS_Enable",
          value: "",
          placeholder: ""
        }, {
          astype: "toggleField",
          label: this.$t('Fleet_Management'),
          name: "Fleet_Management",
          value: "",
          placeholder: ""
        }, {
          astype: "toggleField",
          label: this.$t('PenaltyOnStatus'),
          name: "PenaltyOnStatus",
          value: "",
          placeholder: "",
          config: {
            onChange: this.OnPenaltyOnStatus
          }
        }, {
          astype: "SelectField",
          label: this.$t('Status'),
          name: "AssetReplacementType",
          value: "",
          placeholder: "",
          visibility: false,
          config: {
            options: []
          },
          validationRules: {
            "required": true
          }
        }, {
          astype: "toggleField",
          label: this.$t('PenaltyOnReturnOverdue'),
          name: "PenaltyOnReturnOverdue",
          value: "",
          placeholder: "",
          config: {
            onChange: this.OnPenaltyOnReturnOverdue
          }
        }, {
          astype: "SlotField",
          label: this.$t('GracePeriod'),
          name: "GracePeriod",
          value: "",
          placeholder: "",
          config: {
            options: []
          },
          visibility: false,
          validationRules: {
            "required": true
          }
        }

        // {
        //     astype: "NumericField",
        //     label: this.$t('GracePeriod'),
        //     name: "GracePeriod",
        //     value: "",
        //     placeholder: "",
        //     visibility:false,
        //     validationRules: { "required": true, max: 250 },
        // },
        ]
      }, {
        layoutType: "four",
        group_name: 'Deployment Properties',
        group_display_name: this.$t('DeploymentProperties'),
        Data: [{
          astype: "toggleField",
          label: this.$t('InsurancePolicy'),
          name: "InsurancePolicy",
          value: "",
          placeholder: ""
        }, {
          astype: "toggleField",
          label: this.$t('Calibration'),
          name: "Calibration",
          value: "",
          placeholder: ""
        }, {
          astype: "toggleField",
          label: this.$t('ItemCost'),
          name: "ItemCost",
          value: "",
          placeholder: ""
        }, {
          astype: "toggleField",
          label: this.$t('IsWarranty'),
          name: "IsWarranty",
          value: "",
          placeholder: ""
        }, {
          astype: "toggleField",
          label: this.$t('Depreciable'),
          name: "Depreciable",
          value: "",
          placeholder: ""
        }]
      }],
      buttons: [{
        type: "button",
        class: "btn btn-secondary",
        text: "Skip",
        onClick: this.Skip,
        isVisible: false
      }, {
        type: "submit",
        class: "btn btn-success",
        text: "<i class='fa fa-save pr-2'></i>Save",
        value: "Save"
      }, {
        type: "submit",
        class: "btn btn-success",
        text: "<i class='fa fa-save pr-2'></i>Save & New",
        isVisible: false
      }, {
        type: "submit",
        class: "btn btn-success",
        text: "<i class='fa fa-save pr-2'></i>Save & Next",
        isVisible: false
      }, {
        type: "button",
        class: "btn btn-danger",
        text: "<i class='fa fa-close pr-2'></i>Cancel",
        onClick: this.CancelButton,
        isVisible: true
      }],
      StatusDDL: [{
        label: 'Active',
        value: 1001
      }, {
        label: 'Inactive',
        value: 1002
      }],
      AssetReplacementTypeDDL: [{
        label: 'Damaged',
        value: 12396
      }, {
        label: 'In Stocck',
        value: 12696
      }, {
        label: 'Lost',
        value: 2171
      }, {
        label: 'Stolen',
        value: 12398
      }],
      IsTagNamePopup: false,
      FromAddProduct: false,
      IsShowCompartments: false,
      lbl: false,
      tableRows: [],
      currentInputIndex: 0,
      //inputs: [],
      //AssetType:'',
      AssetTypeCode: '',
      userId: null,
      companyId: null,
      DataLoaded: 0,
      TagsArray: [],
      file: [],
      file1: [],
      ShowAddProduct: false,
      CompartmentListData: [],
      Count: 0,
      checkFieldsvalue: false,
      TypeData: [],
      TagsSelectedArray: [],
      ProductTypeCode: ''
    };
  },
  created: async function () {
    var vm = this;
    vm.userId = vm.GetUserInfo.ID;
    vm.companyId = vm.GetUserInfo.Name;
    await vm.GetTagsByModuleI();
    await vm.BindStatus();
    await vm.AdvancedSetupFields();
    if (vm.AseetTypeIde > 0) {
      await vm.GetAssetTagsById();
      await vm.FetchData();
    } else {
      delete vm.FormSchema[1].Data[0].config.showSelectedFiles;
    }
    vm.DataLoaded = 1;
  },
  methods: {
    onDeleteSelectedFiles: function (itm) {
      this.$delete(this.FormSchema[1].Data[0].config, 'showSelectedFiles');
    },
    onClickSelectedFile(itm) {
      var vm = this;
      vm.isLoading = true;
      var attachmentFilePath = vm.TypeData[0].ATTACHMENT_PATH.split('/')[4] + '/' + vm.TypeData[0].ATTACHMENT_PATH.split('/')[5] + '/' + vm.TypeData[0].ATTACHMENT_PATH.split('/')[6] + '/' + vm.TypeData[0].ATTACHMENT_PATH.split('/')[7];
      var fileType = vm.TypeData[0].ATTACHMENT_PATH.split('.')[5];
      var attachmentName = vm.TypeData[0].ATTACHMENT_NAME;
      var param = `filePath=${attachmentFilePath}`;
      // var url = `?fileId=${item.RelatedInfoId}&filePath=${item.FilePath}&fileName=${item.AttachmentName}&FileType=${item.FileType}`;
      DataService["a" /* default */].DownloadAttachment(param).then(response => {
        if (response.data != null && response.status === 200) {
          const byteData = response.data;
          const fileURL = `data:${fileType};base64,${byteData}`;
          var fileLink = document.createElement('a');
          fileLink.href = fileURL;
          fileLink.setAttribute('download', attachmentName);
          document.body.appendChild(fileLink);
          fileLink.click();
          vm.isLoading = false;
        } else {
          vm.isLoading = false;
        }
      });
    },
    toggleTip() {
      $('[data-toggle="tooltip"]').tooltip({
        trigger: 'click'
      }).on('shown.bs.tooltip', function () {
        var $this = $(this);
        setTimeout(function () {
          $this.tooltip('hide');
        }, 2000);
      });
    },
    onChangeContainer(fieldInfo, index, e) {
      var vm = this;
      vm.FormSchema[0].Data[4].value = e.target._value;
    },
    handleChange(input) {
      debugger;
      if (input.value < 1) input.value = 1;
      if (input.value > 365) input.value = 365;
    },
    OnPenaltyOnStatus(ev) {
      var vm = this;
      vm.FormSchema[6].Data[8].config.options = [];
      if (ev == true) {
        vm.FormSchema[6].Data[8].visibility = true;
        vm.AssetReplacementTypeDDL.forEach(itm => {
          vm.FormSchema[6].Data[8].config.options.push({
            name: itm.label,
            value: itm.value
          });
        });
      } else if (ev == false) {
        vm.FormSchema[6].Data[8].visibility = false;
      }
    },
    OnIsSelfCheckOut(ev) {
      var vm = this;
      if (ev == true) {
        vm.FormSchema[6].Data[2].visibility = true;
      } else if (ev == false) {
        vm.FormSchema[6].Data[2].visibility = false;
      }
    },
    OnPenaltyOnReturnOverdue(ev) {
      var vm = this;
      if (ev == true) {
        vm.FormSchema[6].Data[10].visibility = true;
      } else if (ev == false) {
        vm.FormSchema[6].Data[10].visibility = false;
      }
    },
    Skip: function () {
      var vm = this;
      vm.$parent.SkipTab(3);
    },
    AdvancedSetupFields() {
      var vm = this;
      if (vm.popupCondition == 'setup') {
        vm.buttons[0].isVisible = true;
        vm.buttons[1].isVisible = false;
        vm.buttons[2].isVisible = true;
        vm.buttons[3].isVisible = true;
        vm.buttons[4].isVisible = false;
      }
    },
    async GetTagsByModuleI() {
      var vm = this;
      await DataService["a" /* default */].GetTagsByModuleId('moduleName=Asset').then(function (response) {
        vm.TagsArray = JSON.parse(response.data).data;
        vm.TagsArray.forEach((itm, index) => {
          vm.FormSchema[4].Data[0].config.options.push({
            name: itm.TAG_NAME,
            value: itm.TAG_ID
          });
        });
      });
    },
    OpenAddTagPopup() {
      var vm = this;
      vm.IsTagNamePopup = true;
    },
    setFile1: function (e) {
      var vm = this;
      for (let index = 0; index < e.target.files.length; index++) {
        const element = e.target.files[index];
        vm.file1.push(element);
      }
    },
    BindStatus() {
      var vm = this;
      vm.StatusDDL.forEach(itm => {
        vm.FormSchema[0].Data[1].config.options.push({
          name: itm.label,
          value: itm.value
        });
      });
    },
    onSubmit: function (formfields, val) {
      var vm = this;
      vm.isLoading = true;
      vm.Count = 0;
      if (formfields.Asset_No == false && formfields.Consumable == false && formfields.License == false && formfields.MaterialSpareParts == false) {
        vm.ShowAlert(vm.$t("At least one Product category must be selected!"), "failure", vm.$t('Alert'));
        vm.Count = 1;
      } else if (vm.IsShowCompartments == true) {
        vm.tableRows.forEach((item, index) => {
          if (item.InputContainervalue == '') {
            vm.checkFieldsvalue == true;
            vm.Count = 1;
          }
        });
      }
      if (vm.Count == 0) {
        let objCompartmentList = {};
        vm.tableRows.forEach((item, index) => {
          objCompartmentList = {
            container_Id: 0,
            asset_type_id: vm.AseetTypeIde > 0 ? vm.AseetTypeIde : 0,
            container_name: item.InputContainervalue,
            status_id: 1001,
            modified_by: vm.userId
          };
          vm.CompartmentListData.push(objCompartmentList);
        });
        let objAssets = {};
        if (vm.AseetTypeIde > 0) {
          objAssets.AssetTypeId = vm.AseetTypeIde;
        } else {
          objAssets.AssetTypeId = 0;
        }
        objAssets.AssetType = formfields.ItemNameType;
        objAssets.status_id = formfields.Status;
        objAssets.Description = formfields.Description;
        objAssets.created_at = null;
        objAssets.modified_at = null;
        objAssets.modified_by = vm.userId;
        objAssets.company_id = vm.companyId, objAssets.AssetTypeCategory = formfields.Asset_No == true ? 1 : 0;
        objAssets.IsContainer = formfields.Container == true ? 1 : 0;
        objAssets.IsSelfCheckOut = formfields.IsSelfCheckOut == true ? 1 : 0;
        objAssets.IsTransferable = formfields.IsTransferable == true ? 1 : 0;
        objAssets.IsEnableTerms = formfields.EnableTerms == true ? 1 : 0;
        objAssets.InsurancePolicy = formfields.InsurancePolicy == true ? 1 : 0;
        objAssets.AssetTypeCode = vm.AssetTypeCode;
        objAssets.IsAsset = formfields.Asset_No == true ? 1 : 0;
        objAssets.IsConsumable = formfields.Consumable == true ? 1 : 0;
        objAssets.IsLicense = formfields.License == true ? 1 : 0;
        objAssets.IsSpare = formfields.MaterialSpareParts == true ? 1 : 0;
        objAssets.IsItemCost = formfields.ItemCost == true ? 1 : 0;
        objAssets.IsDepreciable = formfields.Depreciable == true ? 1 : 0;
        objAssets.IsCalibration = formfields.Calibration == true ? 1 : 0;
        objAssets.IsWarranty = formfields.IsWarranty == true ? 1 : 0;
        objAssets.IsEmployeeAcceptance = formfields.EmployeeAcceptance == true ? 1 : 0;
        objAssets.IsPenalty = formfields.PenaltyOnStatus == true ? 1 : 0;
        var penalty = formfields.PenaltyOnStatus == true ? 1 : 0;
        objAssets.penalty_type = penalty == 0 ? null : formfields.AssetReplacementType;
        objAssets.IsPenaltyOnReturnOverdue = formfields.PenaltyOnReturnOverdue == true ? 1 : 0;
        var penalty_on_overdue = formfields.PenaltyOnReturnOverdue == true ? 1 : 0;
        objAssets.GracePeriod = penalty_on_overdue == 0 ? null : vm.GracePeriod;
        objAssets.IsGPSTracking = formfields.GPSTracking == true ? 1 : 0;
        objAssets.IsFleetManagement = formfields.Fleet_Management == true ? 1 : 0;
        objAssets.IsTimeAttendance = formfields.Time_n_Attendance == true ? 1 : 0;
        objAssets.IsCamera = formfields.Camera == true ? 1 : 0;
        objAssets.IsRFID = formfields.RFID == true ? 1 : 0;
        objAssets.IsGPS = formfields.GPS_Enable == true ? 1 : 0;
        objAssets.IsSelfieEnable = 1;
        objAssets.IsSampleData = 1;
        objAssets.container_name = '';
        objAssets.BatchId = '';
        objAssets.AssetTagIds = Array.prototype.map.call(formfields.Tags, function (item) {
          return item.value;
        }).join(",");
        objAssets.CompartmentList = vm.CompartmentListData;
        var formData = new FormData();
        var postString = {
          "postString": objAssets
        };
        formData.append("postString", JSON.stringify(objAssets));
        formData.append("Files", vm.file1[0]);
        DataService["a" /* default */].AddProductType(formData).then(function (response) {
          if (response.data.msg == "size_exceed" || response.data.msg == "FileSizeExceeded" || response.data.msg == "ExceedAllowedSize") {
            vm.ShowAlert((vm.$t('size_exceed', [vm.$t('Asset')]), "warning", true, vm.$t("Alert")));
          } else if (response.data.status == '1') {
            vm.ShowAlert(vm.$t("AddProductType"), "success", vm.$t('Alert'));
            vm.CancelButton();
            if (vm.FromPage == 'EditProduct') {
              vm.$parent.FetchData();
            }
          } else if (response.data.status == '2') {
            vm.ShowAlert(vm.$t("UpdatedProductType"), "success", vm.$t('Alert'));
            vm.$parent.ClosePopupProductType();
            vm.$parent.FetchData();
          } else if (response.data.status == '3') {
            vm.ShowAlert(vm.$t('ProductTypeExist'), "success", vm.$t('Alert'));
            vm.$parent.ClosePopupProductType();
            vm.$parent.FetchData();
          } else if (response.data.status == "AlreadyExists") {
            vm.ShowAlert(vm.$t("ProductTypeExist"), "warning", vm.$t('Alert'));
            vm.CancelButton();
          } else {
            vm.ShowAlert(vm.$t("UnknownError"), "failure", vm.$t('Alert'));
            vm.CancelButton();
          }
        });
      }
      vm.isLoading = false;
    },
    AddContainerRow() {
      var vm = this;
      vm.$refs.AddProductType.validate().then(result => {
        if (result) {
          this.tableRows.push({
            InputContainervalue: ''
          });
        }
      });
    },
    RemoveContainerRow(index) {
      var vm = this;
      if (vm.tableRows.length == 1) {
        vm.lbl = true;
        vm.ShowCompartments();
        vm.FormSchema[0].Data[3].value = false;
        vm.tableRows = [];
      } else {
        vm.tableRows.splice(index, 1);
      }
    },
    ShowCompartments() {
      var vm = this;
      if (this.tableRows.length > 0) {
        vm.lbl = true;
      } else {
        vm.lbl = false;
      }
      if (vm.lbl == false) {
        vm.IsShowCompartments = true;
        this.tableRows.push({
          InputContainervalue: ''
        });
        vm.lbl = true;
      } else if (vm.lbl == true) {
        vm.IsShowCompartments = false;
        vm.tableRows = [];
        vm.lbl = false;
      }
    },
    CancelButton() {
      debugger;
      var vm = this;
      if (vm.FromPage == 'EditProduct') {
        vm.$parent.ClosePopupProductType();
      } else if (vm.FromPage == 'AddProduct') {
        vm.$parent.GetAssetType();
        vm.$parent.ShowAddProductType = false;
      }
    },
    divDialogAddTags() {
      var vm = this;
      vm.FromAddProduct = false;
      vm.IsTagNamePopup = true;
    },
    CloseTagPopup() {
      var vm = this;
      vm.IsTagNamePopup = false;
    },
    async GetTagsByModuleI() {
      var vm = this;
      await DataService["a" /* default */].GetTagsByModuleId('moduleName=Asset').then(function (response) {
        vm.TagsArray = JSON.parse(response.data).data;
        vm.TagsArray.forEach((itm, index) => {
          vm.FormSchema[4].Data[0].config.options.push({
            name: itm.TAG_NAME,
            value: itm.TAG_ID
          });
        });
      });
    },
    async GetAssetTagsById() {
      debugger;
      var vm = this;
      var params = `id=${vm.AseetTypeIde}&is_for=ASSET_TYPE`;
      await DataService["a" /* default */].GetAssetTagsById(params).then(response => {
        vm.tagsData = JSON.parse(response.data);
        vm.tagsData.forEach((item, index) => {
          vm.TagsSelectedArray.push({
            label: item.TAG_NAME,
            value: item.TAG_ID
          });
        });
        vm.FormSchema[4].Data[0].value = vm.TagsSelectedArray;
      });
    },
    FetchData() {
      debugger;
      var vm = this;
      vm.isLoading = true;
      var params = `Id=${vm.AseetTypeIde}`;
      DataService["a" /* default */].AssetGetById(params).then(response => {
        if (response.data != null) {
          if (response.data.length > 0) {
            vm.TypeData = response.data;
            vm.FormSchema[0].Data[0].value = vm.TypeData[0].ASSET_TYPE;
            vm.FormSchema[0].Data[1].value = vm.TypeData[0].STATUS_ID;
            vm.ProductTypeCode = vm.TypeData[0].TYPE_CODE;
            vm.FormSchema[0].Data[3].value = vm.TypeData[0].IS_CONTAINER == 1 ? true : false;
            if (vm.TypeData[0].IS_CONTAINER == 1) {
              vm.IsShowCompartments = true;
              vm.TypeData.forEach((item, indx) => {
                vm.tableRows.push({
                  InputContainervalue: item.CONTAINER_NAME
                });
                // vm.tableRows[indx].InputContainervalue=item.CONTAINER_NAME;
              });
            }

            if (vm.TypeData[0].ATTACHMENT_PATH != null && vm.TypeData[0].ATTACHMENT_PATH != '') {
              vm.FormSchema[1].Data[0].config.showSelectedFiles[0].attachmentPath = vm.TypeData[0].ATTACHMENT_PATH;
              vm.FormSchema[1].Data[0].config.showSelectedFiles[0].attachmentName = vm.TypeData[0].ATTACHMENT_PATH.split('/')[7];
            } else {
              delete vm.FormSchema[1].Data[0].config.showSelectedFiles;
            }
            vm.FormSchema[2].Data[0].value = vm.TypeData[0].DESCRIPTION;
            vm.FormSchema[3].Data[0].value = vm.TypeData[0].IS_ASSET == 1 ? true : false;
            vm.FormSchema[3].Data[1].value = vm.TypeData[0].IS_CONSUMABLE == 1 ? true : false;
            vm.FormSchema[3].Data[2].value = vm.TypeData[0].IS_LICENSE == 1 ? true : false;
            vm.FormSchema[3].Data[3].value = vm.TypeData[0].IS_SPARE == 1 ? true : false;
            vm.FormSchema[5].Data[0].value = vm.TypeData[0].IS_TIME_N_ATTENDANCE == 1 ? true : false;
            vm.FormSchema[5].Data[1].value = vm.TypeData[0].IS_CAMERA == 1 ? true : false;
            vm.FormSchema[5].Data[2].value = vm.TypeData[0].IS_RFID == 1 ? true : false;
            vm.FormSchema[5].Data[3].value = vm.TypeData[0].IS_GPS_TRACKING == 1 ? true : false;
            vm.FormSchema[6].Data[0].value = vm.TypeData[0].IS_TRANSFERABLE == 1 ? true : false;
            vm.FormSchema[6].Data[1].value = vm.TypeData[0].IS_SELF_CHECKOUT == 1 ? true : false;
            var selfieEnable = vm.TypeData[0].IS_SELF_CHECKOUT == 1 ? true : false;
            if (selfieEnable == true) {
              vm.FormSchema[6].Data[2].visibility = true;
              vm.FormSchema[6].Data[2].value = vm.TypeData[0].is_selfie_enable;
            } else {
              vm.FormSchema[6].Data[2].visibility = false;
            }
            vm.FormSchema[6].Data[3].value = vm.TypeData[0].IS_EMPLOYEE_ACCEPTANCE == 1 ? true : false;
            vm.FormSchema[6].Data[4].value = vm.TypeData[0].IS_ENABLE_TERMS == 1 ? true : false;
            vm.FormSchema[6].Data[5].value = vm.TypeData[0].IS_GPS == 1 ? true : false;
            vm.FormSchema[6].Data[6].value = vm.TypeData[0].IS_FLEET_MANAGEMENT == 1 ? true : false;
            vm.FormSchema[6].Data[7].value = vm.TypeData[0].IS_PENALTY == 1 ? true : false;
            var statusEnable = vm.TypeData[0].IS_PENALTY == 1 ? true : false;
            debugger;
            if (statusEnable == true) {
              vm.FormSchema[6].Data[8].visibility = true;
              vm.OnPenaltyOnStatus(true);
              vm.FormSchema[6].Data[8].value = vm.TypeData[0].PENALTY_TYPE;
            } else {
              vm.FormSchema[6].Data[8].visibility = false;
            }
            vm.FormSchema[6].Data[9].value = vm.TypeData[0].IS_PENALTY_ON_OVERDUE == 1 ? true : false;
            var grace = vm.TypeData[0].IS_PENALTY_ON_OVERDUE == 1 ? true : false;
            if (grace == true) {
              vm.FormSchema[6].Data[10].visibility = true;
              vm.GracePeriod = vm.TypeData[0].GRACE_PERIOD;
            } else {
              vm.FormSchema[6].Data[10].visibility = false;
            }
            vm.FormSchema[7].Data[0].value = vm.TypeData[0].IS_INSURANCE_POLICY == 1 ? true : false;
            vm.FormSchema[7].Data[1].value = vm.TypeData[0].IS_CALIBRATION == 1 ? true : false;
            vm.FormSchema[7].Data[2].value = vm.TypeData[0].IS_ITEM_COST == 1 ? true : false;
            vm.FormSchema[7].Data[3].value = vm.TypeData[0].IS_WARRANTY == 1 ? true : false;
            vm.FormSchema[7].Data[4].value = vm.TypeData[0].IS_DEPRECIABLE == 1 ? true : false;
            vm.isLoading = false;
          } else {
            vm.TypeData = [];
            vm.isLoading = false;
          }
        } else {
          vm.isLoading = false;
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/Modal/AddProductType.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modal_AddProductTypevue_type_script_lang_js_ = (AddProductTypevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Modal/AddProductType.vue?vue&type=style&index=0&id=181d36c3&prod&lang=css&
var AddProductTypevue_type_style_index_0_id_181d36c3_prod_lang_css_ = __webpack_require__("879c");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Modal/AddProductType.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Modal_AddProductTypevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AddProductType = __webpack_exports__["a"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-6d5e08f2.js.map