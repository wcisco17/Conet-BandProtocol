webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/models/index.tsx":
/*!******************************!*\
  !*** ./src/models/index.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Box */ "./src/components/Box.tsx");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Form */ "./src/components/Form.tsx");

var _jsxFileName = "/Users/wcisco17/Documents/romeo/conet-finished-filed/frontend/src/models/index.tsx";

 // import { useCreateCommunity } from '../assets/helper/index';



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var title = _ref.title,
      symbol = _ref.symbol;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      boarding = _useState2[0],
      setOnboarding = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(title),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      communityName = _useState4[0],
      setcommunityName = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(symbol),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      communitySymbol = _useState6[0],
      setcommunitySymbol = _useState6[1];

  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, boarding === 1 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Create a community name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Enter community name",
    onSubmit: function onSubmit(text) {
      setcommunityName(title);
      setOnboarding(2);
    },
    onClick: function onClick() {
      return console.log('hello');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }))), boarding === 2 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Create a community Symbol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Enter community Symbol",
    onSubmit: function onSubmit(text) {
      setcommunitySymbol(symbol);
      setOnboarding(3);
    },
    onClick: function onClick() {
      return console.log('hello');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }))), boarding === 3 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Community Name: ".concat(communityName),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", {
    style: {
      color: 'black'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Community Symbol: ", communitySymbol))));
});

/***/ })

})
//# sourceMappingURL=index.js.80443915286249cb5ad1.hot-update.js.map