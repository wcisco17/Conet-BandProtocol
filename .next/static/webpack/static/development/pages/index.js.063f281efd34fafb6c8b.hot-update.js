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
/* harmony import */ var _src_components_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Box */ "./src/components/Box.tsx");
/* harmony import */ var _src_components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Container */ "./src/components/Container.tsx");
/* harmony import */ var _src_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/models */ "./src/models/index.tsx");

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

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      boarding = _useState6[0],
      setOnboarding = _useState6[1];

  console.log('HOME PROPS', title, 'HERE', communityName);
  console.log('HOME PROPS', symbol), 'HERE', communitySymbol;
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_src_components_Container__WEBPACK_IMPORTED_MODULE_3__["Wrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_src_models__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setOnboarding: setOnboarding,
    boarding: boarding,
    setcommunityName: setcommunityName,
    setcommunitySymbol: setcommunitySymbol,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), boarding === 3 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_src_components_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Community Name: ".concat(title),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", {
    style: {
      color: 'black'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Community Symbol: ", symbol))));
});

/***/ }),

/***/ "./src/models/index.tsx":
/*!******************************!*\
  !*** ./src/models/index.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Box */ "./src/components/Box.tsx");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Form */ "./src/components/Form.tsx");
var _jsxFileName = "/Users/wcisco17/Documents/romeo/conet-finished-filed/frontend/src/models/index.tsx";

 // import { useCreateCommunity } from '../assets/helper/index';



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var setcommunityName = _ref.setcommunityName,
      setcommunitySymbol = _ref.setcommunitySymbol,
      boarding = _ref.boarding,
      setOnboarding = _ref.setOnboarding;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, boarding === 1 && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Create a community name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Form__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
      lineNumber: 22
    },
    __self: this
  }))), boarding === 2 && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Create a community Symbol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Form__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
      lineNumber: 39
    },
    __self: this
  }))));
});

/***/ })

})
//# sourceMappingURL=index.js.063f281efd34fafb6c8b.hot-update.js.map