webpackHotUpdate("static/development/pages/public.js",{

/***/ "./pages/public.tsx":
/*!**************************!*\
  !*** ./pages/public.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_assets_helper_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/assets/helper/index */ "./src/assets/helper/index.tsx");
/* harmony import */ var _src_assets_styles_mainStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/assets/styles/mainStyles */ "./src/assets/styles/mainStyles.ts");
/* harmony import */ var _src_components_Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/components/Box */ "./src/components/Box.tsx");
/* harmony import */ var _src_components_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/components/Container */ "./src/components/Container.tsx");





var _jsxFileName = "/Users/wcisco17/Documents/romeo/conet-finished-filed/frontend/pages/public.tsx";







var _default =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(_default, _React$PureComponent);

  function _default() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _default);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_default).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_default, [{
    key: "render",
    value: function render() {
      var _this$props$query = this.props.query,
          title = _this$props$query.title,
          symbol = _this$props$query.symbol;
      return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_src_components_Container__WEBPACK_IMPORTED_MODULE_10__["Wrapper"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, title.length <= 0 || symbol.length <= 0 ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("h3", {
        style: {
          color: _src_assets_styles_mainStyles__WEBPACK_IMPORTED_MODULE_8__["theme"].colors.primary,
          cursor: 'pointer'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Go back Home to create a community")) : react__WEBPACK_IMPORTED_MODULE_6__["createElement"](Community, {
        title: title,
        symbol: symbol,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var query = _ref.query;
      return {
        query: query
      };
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);



var Community = function Community(_ref2) {
  var title = _ref2.title,
      symbol = _ref2.symbol;

  var _useCreateCommunity = Object(_src_assets_helper_index__WEBPACK_IMPORTED_MODULE_7__["useCreateCommunity"])({}, title, symbol),
      community = _useCreateCommunity.community;

  alert("Created Community!!");
  console.log('COMM', community);
  return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_src_components_Box__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "Community Name: ".concat(title),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("h3", {
    style: {
      color: 'black'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Community Symbol: ", symbol)));
};

/***/ })

})
//# sourceMappingURL=public.js.e56efd94c1a4af21e999.hot-update.js.map