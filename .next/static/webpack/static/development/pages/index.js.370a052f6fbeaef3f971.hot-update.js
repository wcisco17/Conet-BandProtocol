webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/Container */ "./src/components/Container.tsx");
/* harmony import */ var _src_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/models */ "./src/models/index.tsx");
var _jsxFileName = "/Users/wcisco17/Documents/romeo/conet-finished-filed/frontend/pages/index.tsx";


 // const a = async () => {
//     let bandClient = await BandProtocolClient.make({ provider: window.web3.currentProvider, })
//     const a = await bandClient.createCommunity({
//         name: "Example Community", // ERC-20 community token name
//         symbol: "XEC", // ERC-20 community token symbol
//         bonding: {
//             collateralEquation: ["8", "1", "0", "2"], // x^2
//             liquiditySpread: "30000000000000000" // 3%
//         },
//         params: {
//             expirationTime: "300", // 5 minutes
//             minParticipationPct: "10000000000000000", // 1%
//             supportRequiredPct: "800000000000000000" // 80%
//         }
//     })
//     return a
// }
// a().then((r) => {
//     console.log('INSIDE R: ', r.parameter())
// }).then((re) => {
//     console.log('DEEP INSIDE RR', re);
// })

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_src_components_Container__WEBPACK_IMPORTED_MODULE_1__["Wrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_src_models__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }));
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

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    loadBandProtocol();
  }, []);

  var loadBandProtocol =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var bandClient;
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
              setClient(bandClient);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function loadBandProtocol() {
      return _ref.apply(this, arguments);
    };
  }();

  return {
    client: client
  };
};

var useCreateCommunity = function useCreateCommunity(communies) {
  var _useBandClient = useBandClient({}),
      client = _useBandClient.client;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(communies),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      community = _useState4[0],
      setCommunity = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    loadBandProtocol().then(function (res) {
      setCommunity(res);
    });
  }, []);

  var loadBandProtocol =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var communityClient;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return client.createCommunity({
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

            case 2:
              communityClient = _context2.sent;
              return _context2.abrupt("return", communityClient);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function loadBandProtocol() {
      return _ref2.apply(this, arguments);
    };
  }();

  return {
    community: community
  };
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(1),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      boarding = _useState6[0],
      setOnboarding = _useState6[1];

  var _useCreateCommunity = useCreateCommunity({}),
      community = _useCreateCommunity.community;

  console.log(community);
  return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, boarding === 1 && react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Home__WEBPACK_IMPORTED_MODULE_5__["OnBoardOne"], {
    onClick: function onClick() {
      setOnboarding(2);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), boarding === 2 && react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Home__WEBPACK_IMPORTED_MODULE_5__["OnBoardTwo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.370a052f6fbeaef3f971.hot-update.js.map