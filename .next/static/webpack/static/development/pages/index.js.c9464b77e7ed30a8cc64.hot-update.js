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





var useBandClient = function useBandClient(clients, communityTitle, communitySymbol) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(clients),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      community = _useState2[0],
      setCommunity = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      title = _useState4[0],
      setTitle = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      symbol = _useState6[0],
      setSymbol = _useState6[1];

  var bandProtocolCreateCommunity =
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
                name: title,
                symbol: symbol,
                bonding: {
                  collateralEquation: ["8", "1", "0", "2"],
                  liquiditySpread: "30000000000000000"
                },
                params: {
                  expirationTime: "300",
                  minParticipationPct: "10000000000000000",
                  supportRequiredPct: "800000000000000000"
                }
              });

            case 5:
              communityClient = _context.sent;
              setTitle(communityTitle);
              setSymbol(communitySymbol);
              setCommunity(communityClient);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function bandProtocolCreateCommunity() {
      return _ref.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    bandProtocolCreateCommunity();
  }, []);
  return {
    community: community
  };
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(1),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
      boarding = _useState8[0],
      setOnboarding = _useState8[1];

  var _useBandClient = useBandClient({}, "My title", "MP"),
      community = _useBandClient.community;

  console.log(community.parameter());
  return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, boarding === 1 && react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Home__WEBPACK_IMPORTED_MODULE_5__["OnBoardOne"], {
    onClick: function onClick() {
      setOnboarding(2);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), boarding === 2 && react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Home__WEBPACK_IMPORTED_MODULE_5__["OnBoardTwo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.c9464b77e7ed30a8cc64.hot-update.js.map