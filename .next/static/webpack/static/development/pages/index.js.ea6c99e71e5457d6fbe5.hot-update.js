webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Container */ "./src/components/Container.tsx");
/* harmony import */ var _src_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/models */ "./src/models/index.tsx");

var _jsxFileName = "/Users/wcisco17/Documents/romeo/conet-finished-filed/frontend/pages/index.tsx";




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var title = _ref.title,
      symbol = _ref.symbol;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(title),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      communityName = _useState2[0],
      setcommunityName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(symbol),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      communitySymbol = _useState4[0],
      setcommunitySymbol = _useState4[1];

  console.log('HOME PROPS', title, 'HERE', communityName);
  console.log('HOME PROPS', symbol), 'HERE', communitySymbol;
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_src_components_Container__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_src_models__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setcommunityName: setcommunityName,
    setcommunitySymbol: setcommunitySymbol,
    title: title,
    symbol: symbol,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.ea6c99e71e5457d6fbe5.hot-update.js.map