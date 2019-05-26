webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/models/index.tsx":
/*!******************************!*\
  !*** ./src/models/index.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var band_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! band.js */ "./node_modules/band.js/dist/index.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Home */ "./src/models/Home.tsx");



var _jsxFileName = "/Users/wcisco17/Documents/romeo/conet-finished-filed/frontend/src/models/index.tsx";





var useBandClient = function useBandClient(clients) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(clients),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      client = _useState2[0],
      setClient = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      community = _useState4[0],
      setCommunity = _useState4[1];

  var loadBandProtocolCreateCommunity =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var bandClient, communityClient;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return band_js__WEBPACK_IMPORTED_MODULE_3__["BandProtocolClient"].make({
                provider: window.web3.currentProvider
              });

            case 2:
              bandClient = _context.sent;
              _context.next = 5;
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

            case 5:
              communityClient = _context.sent;
              setCommunity(communityClient);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function loadBandProtocolCreateCommunity() {
      return _ref.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    loadBandProtocolCreateCommunity();
  }, []);
  return {
    community: community
  };
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(1),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      boarding = _useState6[0],
      setOnboarding = _useState6[1];

  var _useBandClient = useBandClient({}),
      community = _useBandClient.community;

  console.log(community);
  return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, boarding === 1 && react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Home__WEBPACK_IMPORTED_MODULE_5__["OnBoardOne"], {
    onClick: function onClick() {
      setOnboarding(2);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), boarding === 2 && react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Home__WEBPACK_IMPORTED_MODULE_5__["OnBoardTwo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.2beb6743537546c89783.hot-update.js.map