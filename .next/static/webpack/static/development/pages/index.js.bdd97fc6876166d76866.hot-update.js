webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Form.tsx":
/*!*********************************!*\
  !*** ./src/components/Form.tsx ***!
  \*********************************/
/*! exports provided: Input, Form, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/styles */ "./src/assets/styles/index.tsx");
/* harmony import */ var _assets_styles_mainStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/styles/mainStyles */ "./src/assets/styles/mainStyles.ts");
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Buttons */ "./src/components/Buttons.tsx");




var _jsxFileName = "/Users/wcisco17/Documents/romeo/conet-finished-filed/frontend/src/components/Form.tsx";


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n    ", ";\n    flex-direction: column;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n    /* position: absolute; */\n    width: 258px;\n    height: 36px;\n    margin: 20px 0px;\n    background: #FFFFFF;\n    border: 1px solid rgba(0, 0, 0, 0.11);\n    box-sizing: border-box;\n    border-radius: 5px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Input = _assets_styles__WEBPACK_IMPORTED_MODULE_5__["default"].input(_templateObject());
var Form = _assets_styles__WEBPACK_IMPORTED_MODULE_5__["default"].form(_templateObject2(), _assets_styles_mainStyles__WEBPACK_IMPORTED_MODULE_6__["theme"].flex);

var useInputValue = function useInputValue(initialValue) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(initialValue),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  return {
    value: value,
    onChange: function onChange(e) {
      return setValue(e.target.value);
    },
    resetValue: function resetValue() {
      return setValue('');
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var title = _ref.title,
      onSubmit = _ref.onSubmit,
      onClick = _ref.onClick;

  var _useInputValue = useInputValue(""),
      resetValue = _useInputValue.resetValue,
      text = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInputValue, ["resetValue"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Form, {
    onSubmit: function (_onSubmit) {
      function onSubmit(_x) {
        return _onSubmit.apply(this, arguments);
      }

      onSubmit.toString = function () {
        return _onSubmit.toString();
      };

      return onSubmit;
    }(function (e) {
      e.preventDefault();
      onSubmit(text.value);
      resetValue();
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Input, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    placeholder: title
  }, text, {
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Buttons__WEBPACK_IMPORTED_MODULE_7__["SendButton"], {
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Send")));
});

/***/ })

})
//# sourceMappingURL=index.js.bdd97fc6876166d76866.hot-update.js.map