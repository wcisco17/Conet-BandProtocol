webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/models/Home.tsx":
/*!*****************************!*\
  !*** ./src/models/Home.tsx ***!
  \*****************************/
/*! exports provided: OnBoardOne, OnBoardTwo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnBoardOne", function() { return OnBoardOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnBoardTwo", function() { return OnBoardTwo; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Box */ "./src/components/Box.tsx");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Form */ "./src/components/Form.tsx");

var _jsxFileName = "/Users/wcisco17/Documents/romeo/conet-finished-filed/frontend/src/models/Home.tsx";




var OnBoardOne = function OnBoardOne(_ref) {
  var onClick = _ref.onClick;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      communityName = _useState2[0],
      setcommunityName = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Create a community name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Enter community name",
    onSubmit: function onSubmit(text) {
      setcommunityName(text);
    },
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })));
};
var OnBoardTwo = function OnBoardTwo(_ref2) {
  var onClick = _ref2.onClick;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      communitySymbol = _useState4[0],
      setcommunitySymbol = _useState4[1];

  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Create a community Symbol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Enter community Symbol",
    onSubmit: function onSubmit(text) {
      setcommunitySymbol(text);
    },
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })));
};

/***/ })

})
//# sourceMappingURL=index.js.839e2631cbd77c6ef028.hot-update.js.map