(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vTranslitSchemeIast"] = factory();
	else
		root["vTranslitSchemeIast"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var vTranslitSchemeIast = exports.vTranslitSchemeIast = {
  'about': {
    'code': 'Iast',
    'name': 'IAST',
    'type': 'roman',
    'unicodeBlock': '0020-007F'
  },
  'data': {
    'ayogavaha': ['ṁ', 'ḥ'],
    'consonants': ['ka', 'kha', 'ga', 'gha', 'ṅa', 'ca', 'cha', 'ja', 'jha', 'ña', 'ṭa', 'ṭha', 'ḍa', 'ḍha', 'ṇa', 'ta', 'tha', 'da', 'dha', 'na', 'ṉa', 'pa', 'pha', 'ba', 'bha', 'ma', 'ya', 'ra', 'ṟa', 'la', 'ḷa', 'ḻa', 'va', 'śa', 'ṣa', 'sa', 'ha'],
    'deadConsonants': ['k', 'kh', 'g', 'gh', '\x1E45', 'c', 'ch', 'j', 'jh', '\xF1', '\x1E6D', '\x1E6Dh', '\x1E0D', '\x1E0Dh', '\x1E47', 't', 'th', 'd', 'dh', 'n', '\x1E49', 'p', 'ph', 'b', 'bh', 'm', 'y', 'r', '\x1E5F', 'l', '\x1E37', '\x1E3B', 'v', '\x15B', '\x1E63', 's', 'h'],
    'symbols': ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '|', '||', ['o\u1E43', 'O\u1E43'], '\'', 'm,\u0310'],
    'vowelMarks': ['\u0101', 'i', '\u012B', 'u', '\u016B', '\u01E5B', '\u01E5D', '\u01E37', '\u01E39', 'e', 'ai', 'o', 'au'],
    'vowels': [['\u0101', '\u0100'], ['i', 'I'], ['\u012B', '\u012A'], ['u', 'U'], ['\u016B', '\u016A'], ['\u01E5B', '\u01E5A'], ['\u01E5D', '\u01E5C'], ['\u01E37', '\u01E36'], ['\u01E39', '\u01E38'], ['e', 'E'], ['ai', 'Ai'], ['o', 'O'], ['au', 'Au']]
  }
};

/***/ })
/******/ ])["vTranslitSchemeIast"];
});