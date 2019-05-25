window["vTranslitSchemeIast"] =
/******/ (function(modules) { // webpackBootstrap
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
  about: {
    code: 'Iast',
    name: 'IAST',
    type: 'roman',
    unicodeBlock: '1E00—1EFF' //Latin Extended Additional //Include: Basic Latin
  },
  data: {
    ayogavaha: [['ṃ', 'Ṃ'], ['ḥ', 'Ḥ']],
    consonants: [['ka', 'Ka'], ['kha', 'Kha'], ['ga', 'Ga'], ['gha', 'Gha'], ['ṅa', 'Ṅa'], ['ca', 'Ca'], ['cha', 'Cha'], ['ja', 'Ja'], ['jha', 'Jha'], ['ña', 'Ña'], ['ṭa', 'Ṭa'], ['ṭha', 'Ṭha'], ['ḍa', 'Ḍa'], ['ḍha', 'Ḍha'], ['ṇa', 'Ṇa'], ['ta', 'Ta'], ['tha', 'Tha'], ['da', 'Da'], ['dha', 'Dha'], ['na', 'Na'], ['ṉa', 'Ṉa'], ['pa', 'Pa'], ['pha', 'Pha'], ['ba', 'Ba'], ['bha', 'Bha'], ['ma', 'Ma'], ['ya', 'Ya'], ['ra', 'Ra'], ['ṟa', 'Ṟa'], ['la', 'La'], ['ḷa', 'Ḷa'], ['ḻa', 'Ḻa'], ['va', 'Va'], ['śa', 'Śa'], ['ṣa', 'Ṣa'], ['sa', 'Sa'], ['ha', 'Ha']],
    deadConsonants: [['k', 'K'], ['kh', 'Kh'], ['g', 'G'], ['gh', 'Gh'], ['ṅ', 'Ṅ'], ['c', 'C'], ['ch', 'Ch'], ['j', 'J'], ['jh', 'Jh'], ['ñ', 'Ñ'], ['ṭ', 'Ṭ'], ['ṭh', 'Ṭh'], ['ḍ', 'Ḍ'], ['ḍh', 'Ḍh'], ['ṇ', 'Ṇ'], ['t', 'T'], ['th', 'Th'], ['d', 'D'], ['dh', 'Dh'], ['n', 'N'], ['ṉ', 'Ṉ'], ['p', 'P'], ['ph', 'Ph'], ['b', 'B'], ['bh', 'Bh'], ['m', 'M'], ['y', 'Y'], ['r', 'R'], ['ṟ', 'Ṟ'], ['l', 'L'], ['ḷ', 'Ḷ'], ['ḻ', 'Ḻ'], ['v', 'V'], ['ś', 'Ś'], ['ṣ', 'Ṣ'], ['s', 'S'], ['h', 'H']],
    symbols: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '|', '||', ['o\u1E43', 'O\u1E43'], '\'', ['m\u0310', 'M\u0310']],
    vowelMarks: ['a', ['\u0101', '\u0100'], ['i', 'I'], ['\u012B', '\u012A'], ['u', 'U'], ['\u016B', '\u016A'], ['\u1E5B', '\u1E5A'], ['\u1E5D', '\u1E5C'], ['\u1E37', '\u1E36'], ['\u1E39', '\u1E38'], '', ['e', 'E'], ['ai', 'Ai'], '', ['o', 'O'], ['au', 'Au']],
    vowels: ['a', ['\u0101', '\u0100'], ['i', 'I'], ['\u012B', '\u012A'], ['u', 'U'], ['\u016B', '\u016A'], ['\u1E5B', '\u1E5A'], ['\u1E5D', '\u1E5C'], ['\u1E37', '\u1E36'], ['\u1E39', '\u1E38'], '', ['e', 'E'], ['ai', 'Ai'], '', ['o', 'O'], ['au', 'Au']]
  }
};

/***/ })
/******/ ])["vTranslitSchemeIast"];