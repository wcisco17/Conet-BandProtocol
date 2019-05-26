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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_assets_styles_mainStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/assets/styles/mainStyles */ "./src/assets/styles/mainStyles.ts");
/* harmony import */ var _src_components_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/components/Container */ "./src/components/Container.tsx");
/* harmony import */ var _src_models_Community__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/models/Community */ "./src/models/Community.tsx");







var _jsxFileName = "/Users/wcisco17/Documents/romeo/conet-finished-filed/frontend/pages/public.tsx";






var _default =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(_default, _React$PureComponent);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "isUndefined", function () {
      return react__WEBPACK_IMPORTED_MODULE_8__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("h3", {
        style: {
          color: _src_assets_styles_mainStyles__WEBPACK_IMPORTED_MODULE_9__["theme"].colors.primary,
          cursor: 'pointer'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "Go back Home to create a community"));
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_default, [{
    key: "render",
    value: function render() {
      var _this$props$query = this.props.query,
          title = _this$props$query.title,
          symbol = _this$props$query.symbol;

      if (typeof title === 'undefined' || typeof symbol === 'undefined') {
        return react__WEBPACK_IMPORTED_MODULE_8__["createElement"](_src_components_Container__WEBPACK_IMPORTED_MODULE_10__["Wrapper"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, this.isUndefined());
      } else {
        return react__WEBPACK_IMPORTED_MODULE_8__["createElement"](_src_components_Container__WEBPACK_IMPORTED_MODULE_10__["Wrapper"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, title.length <= 0 || symbol.length <= 0 ? this.isUndefined() : react__WEBPACK_IMPORTED_MODULE_8__["createElement"](_src_models_Community__WEBPACK_IMPORTED_MODULE_11__["Community"], {
          title: title,
          symbol: symbol,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }));
      }
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
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);



/***/ }),

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

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Community Name: ".concat(title),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
    style: {
      color: 'black'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Community Symbol: ", symbol)));
};

/***/ })

})
//# sourceMappingURL=public.js.9a2cb9914e70cd273389.hot-update.js.map