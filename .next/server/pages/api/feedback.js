"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/feedback";
exports.ids = ["pages/api/feedback"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/feedback.js":
/*!*******************************!*\
  !*** ./pages/api/feedback.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildFeedbackPath: () => (/* binding */ buildFeedbackPath),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   extractFeedback: () => (/* binding */ extractFeedback)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction buildFeedbackPath() {\n    return path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"data\", \"feedback.json\");\n}\nfunction extractFeedback(filePath) {\n    const fileData = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath);\n    const data = JSON.parse(fileData);\n    return data;\n}\nfunction handler(req, res) {\n    if (req.method === \"POST\") {\n        const email = req.body.email;\n        const feedbackText = req.body.text;\n        const newFeedback = {\n            id: new Date().toISOString(),\n            email: email,\n            text: feedbackText\n        };\n        // store that in a database or in a file\n        const filePath = buildFeedbackPath();\n        const data = extractFeedback(filePath);\n        data.push(newFeedback);\n        fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(filePath, JSON.stringify(data));\n        res.status(201).json({\n            message: \"Success!\",\n            feedback: newFeedback\n        });\n    } else {\n        const filePath = buildFeedbackPath();\n        const data = extractFeedback(filePath);\n        res.status(200).json({\n            feedback: data\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZmVlZGJhY2suanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFvQjtBQUNJO0FBRWpCLFNBQVNFO0lBQ2QsT0FBT0QsZ0RBQVNFLENBQUNDLFFBQVFDLE9BQU8sUUFBUTtBQUMxQztBQUVPLFNBQVNDLGdCQUFnQkMsUUFBUTtJQUN0QyxNQUFNQyxXQUFXUixzREFBZVMsQ0FBQ0Y7SUFDakMsTUFBTUcsT0FBT0MsS0FBS0MsTUFBTUo7SUFDeEIsT0FBT0U7QUFDVDtBQUVBLFNBQVNHLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUN2QixJQUFJRCxJQUFJRSxXQUFXLFFBQVE7UUFDekIsTUFBTUMsUUFBUUgsSUFBSUksS0FBS0Q7UUFDdkIsTUFBTUUsZUFBZUwsSUFBSUksS0FBS0U7UUFFOUIsTUFBTUMsY0FBYztZQUNsQkMsSUFBSSxJQUFJQyxPQUFPQztZQUNmUCxPQUFPQTtZQUNQRyxNQUFNRDtRQUNSO1FBRUEsd0NBQXdDO1FBQ3hDLE1BQU1aLFdBQVdMO1FBQ2pCLE1BQU1RLE9BQU9KLGdCQUFnQkM7UUFDN0JHLEtBQUtlLEtBQUtKO1FBQ1ZyQix1REFBZ0IwQixDQUFDbkIsVUFBVUksS0FBS2dCLFVBQVVqQjtRQUMxQ0ssSUFBSWEsT0FBTyxLQUFLQyxLQUFLO1lBQUVDLFNBQVM7WUFBWUMsVUFBVVY7UUFBWTtJQUNwRSxPQUFPO1FBQ0wsTUFBTWQsV0FBV0w7UUFDakIsTUFBTVEsT0FBT0osZ0JBQWdCQztRQUM3QlEsSUFBSWEsT0FBTyxLQUFLQyxLQUFLO1lBQUVFLFVBQVVyQjtRQUFLO0lBQ3hDO0FBQ0Y7QUFFQSxpRUFBZUcsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9wYWdlcy9hcGkvZmVlZGJhY2suanM/ZjdjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEZlZWRiYWNrUGF0aCgpIHtcbiAgcmV0dXJuIHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZGF0YScsICdmZWVkYmFjay5qc29uJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0RmVlZGJhY2soZmlsZVBhdGgpIHtcbiAgY29uc3QgZmlsZURhdGEgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpO1xuICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShmaWxlRGF0YSk7XG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICBjb25zdCBlbWFpbCA9IHJlcS5ib2R5LmVtYWlsO1xuICAgIGNvbnN0IGZlZWRiYWNrVGV4dCA9IHJlcS5ib2R5LnRleHQ7XG5cbiAgICBjb25zdCBuZXdGZWVkYmFjayA9IHtcbiAgICAgIGlkOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICBlbWFpbDogZW1haWwsXG4gICAgICB0ZXh0OiBmZWVkYmFja1RleHQsXG4gICAgfTtcblxuICAgIC8vIHN0b3JlIHRoYXQgaW4gYSBkYXRhYmFzZSBvciBpbiBhIGZpbGVcbiAgICBjb25zdCBmaWxlUGF0aCA9IGJ1aWxkRmVlZGJhY2tQYXRoKCk7XG4gICAgY29uc3QgZGF0YSA9IGV4dHJhY3RGZWVkYmFjayhmaWxlUGF0aCk7XG4gICAgZGF0YS5wdXNoKG5ld0ZlZWRiYWNrKTtcbiAgICBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiAnU3VjY2VzcyEnLCBmZWVkYmFjazogbmV3RmVlZGJhY2sgfSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSBidWlsZEZlZWRiYWNrUGF0aCgpO1xuICAgIGNvbnN0IGRhdGEgPSBleHRyYWN0RmVlZGJhY2soZmlsZVBhdGgpO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZmVlZGJhY2s6IGRhdGEgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjsiXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwiYnVpbGRGZWVkYmFja1BhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImV4dHJhY3RGZWVkYmFjayIsImZpbGVQYXRoIiwiZmlsZURhdGEiLCJyZWFkRmlsZVN5bmMiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImVtYWlsIiwiYm9keSIsImZlZWRiYWNrVGV4dCIsInRleHQiLCJuZXdGZWVkYmFjayIsImlkIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwicHVzaCIsIndyaXRlRmlsZVN5bmMiLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImZlZWRiYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/feedback.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/feedback.js"));
module.exports = __webpack_exports__;

})();