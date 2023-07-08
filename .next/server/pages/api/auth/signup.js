module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/auth/signup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/*! exports provided: hashPassword, verifyPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hashPassword\", function() { return hashPassword; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"verifyPassword\", function() { return verifyPassword; });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function hashPassword(password) {\n  const hashedPassword = await Object(bcryptjs__WEBPACK_IMPORTED_MODULE_0__[\"hash\"])(password, 12);\n  return hashedPassword;\n}\nasync function verifyPassword(password, hashedPassword) {\n  const isValid = await Object(bcryptjs__WEBPACK_IMPORTED_MODULE_0__[\"compare\"])(password, hashedPassword);\n  return isValid;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvYXV0aC5qcz8zMjRmIl0sIm5hbWVzIjpbImhhc2hQYXNzd29yZCIsInBhc3N3b3JkIiwiaGFzaGVkUGFzc3dvcmQiLCJoYXNoIiwidmVyaWZ5UGFzc3dvcmQiLCJpc1ZhbGlkIiwiY29tcGFyZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sZUFBZUEsWUFBZixDQUE0QkMsUUFBNUIsRUFBc0M7QUFDM0MsUUFBTUMsY0FBYyxHQUFHLE1BQU1DLHFEQUFJLENBQUNGLFFBQUQsRUFBVyxFQUFYLENBQWpDO0FBQ0EsU0FBT0MsY0FBUDtBQUNEO0FBRU0sZUFBZUUsY0FBZixDQUE4QkgsUUFBOUIsRUFBd0NDLGNBQXhDLEVBQXdEO0FBQzdELFFBQU1HLE9BQU8sR0FBRyxNQUFNQyx3REFBTyxDQUFDTCxRQUFELEVBQVdDLGNBQVgsQ0FBN0I7QUFDQSxTQUFPRyxPQUFQO0FBQ0QiLCJmaWxlIjoiLi9saWIvYXV0aC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhc2gsIGNvbXBhcmUgfSBmcm9tICdiY3J5cHRqcyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYXNoUGFzc3dvcmQocGFzc3dvcmQpIHtcbiAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBoYXNoKHBhc3N3b3JkLCAxMik7XG4gIHJldHVybiBoYXNoZWRQYXNzd29yZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeVBhc3N3b3JkKHBhc3N3b3JkLCBoYXNoZWRQYXNzd29yZCkge1xuICBjb25zdCBpc1ZhbGlkID0gYXdhaXQgY29tcGFyZShwYXNzd29yZCwgaGFzaGVkUGFzc3dvcmQpO1xuICByZXR1cm4gaXNWYWxpZDtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/auth.js\n");

/***/ }),

/***/ "./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/*! exports provided: connectToDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"connectToDatabase\", function() { return connectToDatabase; });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connectToDatabase() {\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"].connect('mongodb+srv://Divya:gxD8ovk3mvTPUsRh@cluster0.mawuoby.mongodb.net/auth-demo'); //   MongoClient.connect('mongodb+srv://Divya:C8Fj4bBw8ieCsdPD@cluster0.mawuoby.mongodb.net/auth_demo?retryWrites=true&w=majority',\n  // { useNewUrlParser: true , useUnifiedTopology: true })\n  // .then(()=>{ return console.log(\"Connected to MongoDB Localhost...\");\n  //  })\n  // .catch(err => console.log(\"Could not connect\",err))\n  // console.log(client);\n\n  return client;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZGIuanM/YmI1MSJdLCJuYW1lcyI6WyJjb25uZWN0VG9EYXRhYmFzZSIsImNsaWVudCIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLGVBQWVBLGlCQUFmLEdBQW1DO0FBQ3hDLFFBQU1DLE1BQU0sR0FBRyxNQUFNQyxtREFBVyxDQUFDQyxPQUFaLENBQW9CLDZFQUFwQixDQUFyQixDQUR3QyxDQUkxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0U7O0FBQ0EsU0FBT0YsTUFBUDtBQUNEIiwiZmlsZSI6Ii4vbGliL2RiLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RUb0RhdGFiYXNlKCkge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KCdtb25nb2RiK3NydjovL0RpdnlhOmd4RDhvdmszbXZUUFVzUmhAY2x1c3RlcjAubWF3dW9ieS5tb25nb2RiLm5ldC9hdXRoLWRlbW8nKVxuICAgIFxuXG4vLyAgIE1vbmdvQ2xpZW50LmNvbm5lY3QoJ21vbmdvZGIrc3J2Oi8vRGl2eWE6QzhGajRiQnc4aWVDc2RQREBjbHVzdGVyMC5tYXd1b2J5Lm1vbmdvZGIubmV0L2F1dGhfZGVtbz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknLFxuLy8geyB1c2VOZXdVcmxQYXJzZXI6IHRydWUgLCB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUgfSlcbi8vIC50aGVuKCgpPT57IHJldHVybiBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZCB0byBNb25nb0RCIExvY2FsaG9zdC4uLlwiKTtcbi8vICB9KVxuLy8gLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhcIkNvdWxkIG5vdCBjb25uZWN0XCIsZXJyKSlcbiAgLy8gY29uc29sZS5sb2coY2xpZW50KTtcbiAgcmV0dXJuIGNsaWVudDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/db.js\n");

/***/ }),

/***/ "./pages/api/auth/signup.js":
/*!**********************************!*\
  !*** ./pages/api/auth/signup.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/auth */ \"./lib/auth.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/db */ \"./lib/db.js\");\n\n\n\nasync function handler(req, res) {\n  // console.log(req)\n  if (req.method !== 'POST') {\n    return;\n  }\n\n  const data = req.body;\n  const {\n    email,\n    password\n  } = data;\n\n  if (!email || !email.includes('@') || !password || password.trim().length < 7) {\n    res.status(422).json({\n      message: 'Invalid input - password should also be at least 7 characters long.'\n    });\n    return;\n  }\n\n  const client = await Object(_lib_db__WEBPACK_IMPORTED_MODULE_1__[\"connectToDatabase\"])();\n  const db = client.db();\n  const existingUser = await db.collection('users').findOne({\n    email: email\n  });\n\n  if (existingUser) {\n    res.status(422).json({\n      message: 'User exists already!'\n    });\n    client.close();\n    return;\n  }\n\n  const hashedPassword = await Object(_lib_auth__WEBPACK_IMPORTED_MODULE_0__[\"hashPassword\"])(password);\n  const result = await db.collection('users').insertOne({\n    email: email,\n    password: hashedPassword\n  });\n  res.status(201).json({\n    message: 'Created user!'\n  });\n  client.close();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9zaWdudXAuanM/YzUyZiJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZGF0YSIsImJvZHkiLCJlbWFpbCIsInBhc3N3b3JkIiwiaW5jbHVkZXMiLCJ0cmltIiwibGVuZ3RoIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJjbGllbnQiLCJjb25uZWN0VG9EYXRhYmFzZSIsImRiIiwiZXhpc3RpbmdVc2VyIiwiY29sbGVjdGlvbiIsImZpbmRPbmUiLCJjbG9zZSIsImhhc2hlZFBhc3N3b3JkIiwiaGFzaFBhc3N3b3JkIiwicmVzdWx0IiwiaW5zZXJ0T25lIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBLGVBQWVBLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztBQUMvQjtBQUNBLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3pCO0FBQ0Q7O0FBRUQsUUFBTUMsSUFBSSxHQUFHSCxHQUFHLENBQUNJLElBQWpCO0FBRUEsUUFBTTtBQUFFQyxTQUFGO0FBQVNDO0FBQVQsTUFBc0JILElBQTVCOztBQUVBLE1BQ0UsQ0FBQ0UsS0FBRCxJQUNBLENBQUNBLEtBQUssQ0FBQ0UsUUFBTixDQUFlLEdBQWYsQ0FERCxJQUVBLENBQUNELFFBRkQsSUFHQUEsUUFBUSxDQUFDRSxJQUFULEdBQWdCQyxNQUFoQixHQUF5QixDQUozQixFQUtFO0FBQ0FSLE9BQUcsQ0FBQ1MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ25CQyxhQUFPLEVBQ0w7QUFGaUIsS0FBckI7QUFJQTtBQUNEOztBQUVELFFBQU1DLE1BQU0sR0FBRyxNQUFNQyxpRUFBaUIsRUFBdEM7QUFFQSxRQUFNQyxFQUFFLEdBQUdGLE1BQU0sQ0FBQ0UsRUFBUCxFQUFYO0FBR0EsUUFBTUMsWUFBWSxHQUFHLE1BQU1ELEVBQUUsQ0FBQ0UsVUFBSCxDQUFjLE9BQWQsRUFBdUJDLE9BQXZCLENBQStCO0FBQUViLFNBQUssRUFBRUE7QUFBVCxHQUEvQixDQUEzQjs7QUFFQSxNQUFJVyxZQUFKLEVBQWtCO0FBQ2hCZixPQUFHLENBQUNTLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxhQUFPLEVBQUU7QUFBWCxLQUFyQjtBQUNBQyxVQUFNLENBQUNNLEtBQVA7QUFDQTtBQUNEOztBQUVELFFBQU1DLGNBQWMsR0FBRyxNQUFNQyw4REFBWSxDQUFDZixRQUFELENBQXpDO0FBRUEsUUFBTWdCLE1BQU0sR0FBRyxNQUFNUCxFQUFFLENBQUNFLFVBQUgsQ0FBYyxPQUFkLEVBQXVCTSxTQUF2QixDQUFpQztBQUNwRGxCLFNBQUssRUFBRUEsS0FENkM7QUFFcERDLFlBQVEsRUFBRWM7QUFGMEMsR0FBakMsQ0FBckI7QUFLQW5CLEtBQUcsQ0FBQ1MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLFdBQU8sRUFBRTtBQUFYLEdBQXJCO0FBQ0FDLFFBQU0sQ0FBQ00sS0FBUDtBQUNEOztBQUVjcEIsc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9zaWdudXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYXNoUGFzc3dvcmQgfSBmcm9tICcuLi8uLi8uLi9saWIvYXV0aCc7XG5pbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYic7XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgLy8gY29uc29sZS5sb2cocmVxKVxuICBpZiAocmVxLm1ldGhvZCAhPT0gJ1BPU1QnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xuXG4gIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSBkYXRhO1xuXG4gIGlmIChcbiAgICAhZW1haWwgfHxcbiAgICAhZW1haWwuaW5jbHVkZXMoJ0AnKSB8fFxuICAgICFwYXNzd29yZCB8fFxuICAgIHBhc3N3b3JkLnRyaW0oKS5sZW5ndGggPCA3XG4gICkge1xuICAgIHJlcy5zdGF0dXMoNDIyKS5qc29uKHtcbiAgICAgIG1lc3NhZ2U6XG4gICAgICAgICdJbnZhbGlkIGlucHV0IC0gcGFzc3dvcmQgc2hvdWxkIGFsc28gYmUgYXQgbGVhc3QgNyBjaGFyYWN0ZXJzIGxvbmcuJyxcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG4gIFxuXG4gIGNvbnN0IGV4aXN0aW5nVXNlciA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3VzZXJzJykuZmluZE9uZSh7IGVtYWlsOiBlbWFpbCB9KTtcblxuICBpZiAoZXhpc3RpbmdVc2VyKSB7XG4gICAgcmVzLnN0YXR1cyg0MjIpLmpzb24oeyBtZXNzYWdlOiAnVXNlciBleGlzdHMgYWxyZWFkeSEnIH0pO1xuICAgIGNsaWVudC5jbG9zZSgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgaGFzaFBhc3N3b3JkKHBhc3N3b3JkKTtcblxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCd1c2VycycpLmluc2VydE9uZSh7XG4gICAgZW1haWw6IGVtYWlsLFxuICAgIHBhc3N3b3JkOiBoYXNoZWRQYXNzd29yZFxuICB9KTtcblxuICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6ICdDcmVhdGVkIHVzZXIhJyB9KTtcbiAgY2xpZW50LmNsb3NlKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/auth/signup.js\n");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcryptjs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRqc1wiP2NlNTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYmNyeXB0anMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRqc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///bcryptjs\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ })

/******/ });