/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/feedback"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fmac%2FDocuments%2FNextJs-Course%2Fapi-routes%2Fpages%2Ffeedback%2Findex.js&page=%2Ffeedback!":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fmac%2FDocuments%2FNextJs-Course%2Fapi-routes%2Fpages%2Ffeedback%2Findex.js&page=%2Ffeedback! ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/feedback\",\n      function () {\n        return __webpack_require__(/*! ./pages/feedback/index.js */ \"./pages/feedback/index.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/feedback\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRm1hYyUyRkRvY3VtZW50cyUyRk5leHRKcy1Db3Vyc2UlMkZhcGktcm91dGVzJTJGcGFnZXMlMkZmZWVkYmFjayUyRmluZGV4LmpzJnBhZ2U9JTJGZmVlZGJhY2shIiwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsNERBQTJCO0FBQ2xEO0FBQ0E7QUFDQSxPQUFPLElBQVU7QUFDakIsTUFBTSxVQUFVO0FBQ2hCO0FBQ0EsT0FBTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLz85YzQ3Il0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvZmVlZGJhY2tcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCIuL3BhZ2VzL2ZlZWRiYWNrL2luZGV4LmpzXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfUC5wdXNoKFtcIi9mZWVkYmFja1wiXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fmac%2FDocuments%2FNextJs-Course%2Fapi-routes%2Fpages%2Ffeedback%2Findex.js&page=%2Ffeedback!\n"));

/***/ }),

/***/ "./pages/feedback/index.js":
/*!*********************************!*\
  !*** ./pages/feedback/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction FeedbackPage(props) {\n    _s();\n    const [feedbackData, setFeedbackData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const loadFeedbackHandler = (id)=>{\n        fetch(\"/api/feedback/\".concat(id)).then((response)=>response.json()).then((data)=>{\n            setFeedbackData(data.feedback);\n        }); // /api/some-feedback-id\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            feedbackData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: feedbackData.email\n            }, void 0, false, {\n                fileName: \"/Users/mac/Documents/NextJs-Course/api-routes/pages/feedback/index.js\",\n                lineNumber: 14,\n                columnNumber: 28\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: props.feedbackItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            item.text,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>loadFeedbackHandler(item.id),\n                                children: \"Show Details\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/NextJs-Course/api-routes/pages/feedback/index.js\",\n                                lineNumber: 17,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, item.id, true, {\n                        fileName: \"/Users/mac/Documents/NextJs-Course/api-routes/pages/feedback/index.js\",\n                        lineNumber: 16,\n                        columnNumber: 39\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/mac/Documents/NextJs-Course/api-routes/pages/feedback/index.js\",\n                lineNumber: 15,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(FeedbackPage, \"BwOV5us4vG60hlJRAywhcZUWCo4=\");\n_c = FeedbackPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FeedbackPage);\nvar _c;\n$RefreshReg$(_c, \"FeedbackPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mZWVkYmFjay9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlDO0FBRWpDLFNBQVNDLGFBQWFDLEtBQUs7O0lBQ3ZCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdKLCtDQUFRQTtJQUNoRCxNQUFNSyxzQkFBc0IsQ0FBQ0M7UUFDekJDLE1BQU0saUJBQW9CLE9BQUhELEtBQ3RCRSxLQUFLLENBQUNDLFdBQWFBLFNBQVNDLFFBQzVCRixLQUFLLENBQUNHO1lBQ0xQLGdCQUFnQk8sS0FBS0M7UUFDdkIsSUFBSSx3QkFBd0I7SUFDaEM7SUFDQSxxQkFDSTs7WUFDR1QsOEJBQWdCLDhEQUFDVTswQkFBR1YsYUFBYVc7Ozs7OzswQkFDeEMsOERBQUNDOzBCQUNDYixNQUFNYyxjQUFjQyxJQUFJQyxDQUFBQSxxQkFBUSw4REFBQ0M7OzRCQUFrQkQsS0FBS0U7MENBQ3RELDhEQUFDQztnQ0FBT0MsU0FBUyxJQUFJakIsb0JBQW9CYSxLQUFLWjswQ0FBSzs7Ozs7Ozt1QkFEWlksS0FBS1o7Ozs7Ozs7Ozs7OztBQU9wRDtHQXBCU0w7S0FBQUE7O0FBK0JULCtEQUFlQSxZQUFZQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2ZlZWRiYWNrL2luZGV4LmpzPzI0YmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2J1aWxkRmVlZGJhY2tQYXRoLCBleHRyYWN0RmVlZGJhY2t9IGZyb20gJy4uL2FwaS9mZWVkYmFjay9pbmRleCdcbmZ1bmN0aW9uIEZlZWRiYWNrUGFnZShwcm9wcyl7XG4gICAgY29uc3QgW2ZlZWRiYWNrRGF0YSwgc2V0RmVlZGJhY2tEYXRhXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgbG9hZEZlZWRiYWNrSGFuZGxlciA9IChpZCk9PntcbiAgICAgICAgZmV0Y2goYC9hcGkvZmVlZGJhY2svJHtpZH1gKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBzZXRGZWVkYmFja0RhdGEoZGF0YS5mZWVkYmFjayk7XG4gICAgICAgIH0pOyAvLyAvYXBpL3NvbWUtZmVlZGJhY2staWRcbiAgICB9XG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICAgIHtmZWVkYmFja0RhdGEgJiYgPHA+e2ZlZWRiYWNrRGF0YS5lbWFpbH08L3A+fVxuICAgIDx1bD5cbiAgICAge3Byb3BzLmZlZWRiYWNrSXRlbXMubWFwKGl0ZW0gPT4gPGxpIGtleT17aXRlbS5pZH0+e2l0ZW0udGV4dH1cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+bG9hZEZlZWRiYWNrSGFuZGxlcihpdGVtLmlkKX0+XG4gICAgICAgICAgICAgIFNob3cgRGV0YWlsc1xuICAgICAgICAgICAgPC9idXR0b24+PC9saT4pfVxuICAgIDwvdWw+XG4gICAgPC8+XG4gICAgKVxufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCl7XG4gIGNvbnN0IGZpbGVQYXRoID0gYnVpbGRGZWVkYmFja1BhdGgoKTtcbiAgY29uc3QgZGF0YSA9IGV4dHJhY3RGZWVkYmFjayhmaWxlUGF0aCk7XG4gIHJldHVybntcbiAgICBwcm9wczp7XG4gICAgIGZlZWRiYWNrSXRlbXM6IGRhdGFcbiAgICB9XG4gIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgRmVlZGJhY2tQYWdlIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRmVlZGJhY2tQYWdlIiwicHJvcHMiLCJmZWVkYmFja0RhdGEiLCJzZXRGZWVkYmFja0RhdGEiLCJsb2FkRmVlZGJhY2tIYW5kbGVyIiwiaWQiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZmVlZGJhY2siLCJwIiwiZW1haWwiLCJ1bCIsImZlZWRiYWNrSXRlbXMiLCJtYXAiLCJpdGVtIiwibGkiLCJ0ZXh0IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/feedback/index.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fmac%2FDocuments%2FNextJs-Course%2Fapi-routes%2Fpages%2Ffeedback%2Findex.js&page=%2Ffeedback!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);