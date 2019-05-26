webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var band_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! band.js */ "./node_modules/band.js/dist/index.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Container */ "./src/components/Container.tsx");
/* harmony import */ var _src_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/models */ "./src/models/index.tsx");


var _jsxFileName = "/Users/wcisco17/Documents/romeo/conet-finished-filed/frontend/pages/index.tsx";





var a =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var pro, bandClient, a;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            pro = window.web3.setProvider('http://127.0.0.1:7545');
            _context.next = 3;
            return band_js__WEBPACK_IMPORTED_MODULE_2__["BandProtocolClient"].make({
              provider: 'http://127.0.0.1:7545'
            });

          case 3:
            bandClient = _context.sent;
            _context.next = 6;
            return bandClient.createCommunity({
              name: "Example Community",
              // ERC-20 community token name
              symbol: "XEC",
              // ERC-20 community token symbol
              bonding: {
                collateralEquation: ["8", "1", "0", "2"],
                // x^2
                liquiditySpread: "30000000000000000" // 3%

              },
              params: {
                expirationTime: "300",
                // 5 minutes
                minParticipationPct: "10000000000000000",
                // 1%
                supportRequiredPct: "800000000000000000" // 80%

              }
            });

          case 6:
            a = _context.sent;
            console.log(a);
            return _context.abrupt("return", a);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function a() {
    return _ref.apply(this, arguments);
  };
}();

console.log(a());
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_src_components_Container__WEBPACK_IMPORTED_MODULE_4__["Wrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_src_models__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.a894c3409151c9f230bd.hot-update.js.map