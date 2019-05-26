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
/* harmony import */ var _assets_helper_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/helper/index */ "./src/assets/helper/index.tsx");
/* harmony import */ var _components_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Box */ "./src/components/Box.tsx");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Form */ "./src/components/Form.tsx");

var _jsxFileName = "/Users/wcisco17/Documents/romeo/conet-finished-filed/frontend/src/models/index.tsx";





/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      boarding = _useState2[0],
      setOnboarding = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      communityName = _useState4[0],
      setcommunityName = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      communitySymbol = _useState6[0],
      setcommunitySymbol = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return function () {
      if (boarding === 3) {
        var _useCreateCommunity = Object(_assets_helper_index__WEBPACK_IMPORTED_MODULE_2__["useCreateCommunity"])({}, communityName, communitySymbol),
            community = _useCreateCommunity.community;

        return community;
      }
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, boarding === 1 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Create a community name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Enter community name",
    onSubmit: function onSubmit(text) {
      setcommunityName(text);
      setOnboarding(2);
    },
    onClick: function onClick() {
      return console.log('hello');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }))), boarding === 2 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Create a community Symbol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Enter community Symbol",
    onSubmit: function onSubmit(text) {
      setcommunitySymbol(text);
      setOnboarding(3);
    },
    onClick: function onClick() {
      return console.log('hello');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }))), boarding === 3 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Community Name: ".concat(communityName),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", {
    style: {
      color: 'black'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Community Symbol: ", communitySymbol))));
});

/***/ })

})
//# sourceMappingURL=index.js.2074098753803f942529.hot-update.js.map