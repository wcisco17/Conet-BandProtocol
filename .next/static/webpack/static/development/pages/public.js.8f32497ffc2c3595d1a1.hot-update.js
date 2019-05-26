webpackHotUpdate("static/development/pages/public.js",{

/***/ "./src/models/Community.tsx":
/*!**********************************!*\
  !*** ./src/models/Community.tsx ***!
  \**********************************/
/*! exports provided: Community */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Community", function() { return Community; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_helper_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/helper/index */ "./src/assets/helper/index.tsx");
/* harmony import */ var _components_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Box */ "./src/components/Box.tsx");
var _jsxFileName = "/Users/wcisco17/Documents/romeo/conet-finished-filed/frontend/src/models/Community.tsx";



var Community = function Community(_ref) {
  var title = _ref.title,
      symbol = _ref.symbol;

  var _useCreateCommunity = Object(_assets_helper_index__WEBPACK_IMPORTED_MODULE_1__["useCreateCommunity"])({}, title, symbol),
      community = _useCreateCommunity.community;

  if (!community.parameter()) {
    console.log('undefined');
  } else {
    console.log(community.parameter);
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "Community Name: ".concat(title),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
      style: {
        color: 'black'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "Community Symbol: ", symbol)));
  }
};

/***/ })

})
//# sourceMappingURL=public.js.8f32497ffc2c3595d1a1.hot-update.js.map