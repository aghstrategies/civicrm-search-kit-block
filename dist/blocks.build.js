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
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/**\n * BLOCK: civicrm-search-kit-block\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar InspectorControls = wp.editor.InspectorControls;\nvar PanelBody = wp.components.PanelBody;\nvar PanelRow = wp.components.PanelRow;\nvar SelectControl = wp.components.SelectControl;\nvar _wp = wp,\n    ServerSideRender = _wp.serverSideRender;\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\nregisterBlockType('cgb/block-civicrm-search-kit-block', {\n  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n  title: __('civicrm-search-kit-block'), // Block title.\n  icon: 'list-view', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n  category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n  keywords: [],\n  attributes: {\n    savedSearchId: {\n      type: 'string'\n    },\n    templateId: {\n      type: 'string'\n    }\n  },\n\n  /**\n   * The edit function describes the structure of your block in the context of the editor.\n   * This represents what the editor will render when the block is used.\n   *\n   * The \"edit\" property must be a valid function.\n   *\n   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n   *\n   * @param {Object} props Props.\n   * @returns {Mixed} JSX Component.\n   */\n  edit: function edit(props) {\n    var attributes = props.attributes,\n        setAttributes = props.setAttributes;\n    // Creates a <p class='wp-block-cgb-block-test-block'></p>.\n\n    return wp.element.createElement(\n      'div',\n      { className: props.className },\n      wp.element.createElement(\n        InspectorControls,\n        null,\n        wp.element.createElement(\n          PanelBody,\n          {\n            title: 'CiviCRM Saved Search Options',\n            initialOpen: true\n          },\n          wp.element.createElement(\n            PanelRow,\n            null,\n            wp.element.createElement(SelectControl, {\n              label: 'Search Display',\n              value: attributes.savedSearchId,\n              options: savedSearchesPHP,\n              onChange: function onChange(newval) {\n                return setAttributes({ savedSearchId: newval });\n              }\n            })\n          ),\n          wp.element.createElement(\n            PanelRow,\n            null,\n            wp.element.createElement(SelectControl, {\n              label: 'Template',\n              value: attributes.templateId,\n              options: availableTemplates,\n              onChange: function onChange(newval) {\n                return setAttributes({ templateId: newval });\n              }\n            })\n          )\n        )\n      ),\n      wp.element.createElement(ServerSideRender, {\n        block: props.name,\n        attributes: {\n          savedSearchId: attributes.savedSearchId,\n          templateId: attributes.templateId\n        }\n      })\n    );\n  },\n\n  /**\n   * The save function defines the way in which the different attributes should be combined\n   * into the final markup, which is then serialized by Gutenberg into post_content.\n   *\n   * The \"save\" property must be specified and must be a valid function.\n   *\n   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n   *\n   * @param {Object} props Props.\n   * @returns {Mixed} JSX Frontend HTML.\n   */\n  save: function save(props) {\n    return null;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IGNpdmljcm0tc2VhcmNoLWtpdC1ibG9ja1xuICpcbiAqIFJlZ2lzdGVyaW5nIGEgYmFzaWMgYmxvY2sgd2l0aCBHdXRlbmJlcmcuXG4gKiBTaW1wbGUgYmxvY2ssIHJlbmRlcnMgYW5kIHNhdmVzIHRoZSBzYW1lIGNvbnRlbnQgd2l0aG91dCBhbnkgaW50ZXJhY3Rpdml0eS5cbiAqL1xuXG4vLyAgSW1wb3J0IENTUy5cbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbnZhciBfXyA9IHdwLmkxOG4uX187IC8vIEltcG9ydCBfXygpIGZyb20gd3AuaTE4blxuXG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7IC8vIEltcG9ydCByZWdpc3RlckJsb2NrVHlwZSgpIGZyb20gd3AuYmxvY2tzXG5cbnZhciBJbnNwZWN0b3JDb250cm9scyA9IHdwLmVkaXRvci5JbnNwZWN0b3JDb250cm9scztcbnZhciBQYW5lbEJvZHkgPSB3cC5jb21wb25lbnRzLlBhbmVsQm9keTtcbnZhciBQYW5lbFJvdyA9IHdwLmNvbXBvbmVudHMuUGFuZWxSb3c7XG52YXIgU2VsZWN0Q29udHJvbCA9IHdwLmNvbXBvbmVudHMuU2VsZWN0Q29udHJvbDtcbnZhciBfd3AgPSB3cCxcbiAgICBTZXJ2ZXJTaWRlUmVuZGVyID0gX3dwLnNlcnZlclNpZGVSZW5kZXI7XG5cbi8qKlxuICogUmVnaXN0ZXI6IGFhIEd1dGVuYmVyZyBCbG9jay5cbiAqXG4gKiBSZWdpc3RlcnMgYSBuZXcgYmxvY2sgcHJvdmlkZWQgYSB1bmlxdWUgbmFtZSBhbmQgYW4gb2JqZWN0IGRlZmluaW5nIGl0c1xuICogYmVoYXZpb3IuIE9uY2UgcmVnaXN0ZXJlZCwgdGhlIGJsb2NrIGlzIG1hZGUgZWRpdG9yIGFzIGFuIG9wdGlvbiB0byBhbnlcbiAqIGVkaXRvciBpbnRlcmZhY2Ugd2hlcmUgYmxvY2tzIGFyZSBpbXBsZW1lbnRlZC5cbiAqXG4gKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9cbiAqIEBwYXJhbSAge3N0cmluZ30gICBuYW1lICAgICBCbG9jayBuYW1lLlxuICogQHBhcmFtICB7T2JqZWN0fSAgIHNldHRpbmdzIEJsb2NrIHNldHRpbmdzLlxuICogQHJldHVybiB7P1dQQmxvY2t9ICAgICAgICAgIFRoZSBibG9jaywgaWYgaXQgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJlZDsgb3RoZXJ3aXNlIGB1bmRlZmluZWRgLlxuICovXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdjZ2IvYmxvY2stY2l2aWNybS1zZWFyY2gta2l0LWJsb2NrJywge1xuICAvLyBCbG9jayBuYW1lLiBCbG9jayBuYW1lcyBtdXN0IGJlIHN0cmluZyB0aGF0IGNvbnRhaW5zIGEgbmFtZXNwYWNlIHByZWZpeC4gRXhhbXBsZTogbXktcGx1Z2luL215LWN1c3RvbS1ibG9jay5cbiAgdGl0bGU6IF9fKCdjaXZpY3JtLXNlYXJjaC1raXQtYmxvY2snKSwgLy8gQmxvY2sgdGl0bGUuXG4gIGljb246ICdsaXN0LXZpZXcnLCAvLyBCbG9jayBpY29uIGZyb20gRGFzaGljb25zIOKGkiBodHRwczovL2RldmVsb3Blci53b3JkcHJlc3Mub3JnL3Jlc291cmNlL2Rhc2hpY29ucy8uXG4gIGNhdGVnb3J5OiAnY29tbW9uJywgLy8gQmxvY2sgY2F0ZWdvcnkg4oCUIEdyb3VwIGJsb2NrcyB0b2dldGhlciBiYXNlZCBvbiBjb21tb24gdHJhaXRzIEUuZy4gY29tbW9uLCBmb3JtYXR0aW5nLCBsYXlvdXQgd2lkZ2V0cywgZW1iZWQuXG4gIGtleXdvcmRzOiBbXSxcbiAgYXR0cmlidXRlczoge1xuICAgIHNhdmVkU2VhcmNoSWQ6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgfSxcbiAgICB0ZW1wbGF0ZUlkOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogVGhlIGVkaXQgZnVuY3Rpb24gZGVzY3JpYmVzIHRoZSBzdHJ1Y3R1cmUgb2YgeW91ciBibG9jayBpbiB0aGUgY29udGV4dCBvZiB0aGUgZWRpdG9yLlxuICAgKiBUaGlzIHJlcHJlc2VudHMgd2hhdCB0aGUgZWRpdG9yIHdpbGwgcmVuZGVyIHdoZW4gdGhlIGJsb2NrIGlzIHVzZWQuXG4gICAqXG4gICAqIFRoZSBcImVkaXRcIiBwcm9wZXJ0eSBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXG4gICAqXG4gICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzIFByb3BzLlxuICAgKiBAcmV0dXJucyB7TWl4ZWR9IEpTWCBDb21wb25lbnQuXG4gICAqL1xuICBlZGl0OiBmdW5jdGlvbiBlZGl0KHByb3BzKSB7XG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBwcm9wcy5hdHRyaWJ1dGVzLFxuICAgICAgICBzZXRBdHRyaWJ1dGVzID0gcHJvcHMuc2V0QXR0cmlidXRlcztcbiAgICAvLyBDcmVhdGVzIGEgPHAgY2xhc3M9J3dwLWJsb2NrLWNnYi1ibG9jay10ZXN0LWJsb2NrJz48L3A+LlxuXG4gICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSB9LFxuICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBJbnNwZWN0b3JDb250cm9scyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFBhbmVsQm9keSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0NpdmlDUk0gU2F2ZWQgU2VhcmNoIE9wdGlvbnMnLFxuICAgICAgICAgICAgaW5pdGlhbE9wZW46IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIFBhbmVsUm93LFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChTZWxlY3RDb250cm9sLCB7XG4gICAgICAgICAgICAgIGxhYmVsOiAnU2VhcmNoIERpc3BsYXknLFxuICAgICAgICAgICAgICB2YWx1ZTogYXR0cmlidXRlcy5zYXZlZFNlYXJjaElkLFxuICAgICAgICAgICAgICBvcHRpb25zOiBzYXZlZFNlYXJjaGVzUEhQLFxuICAgICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UobmV3dmFsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldEF0dHJpYnV0ZXMoeyBzYXZlZFNlYXJjaElkOiBuZXd2YWwgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKSxcbiAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBQYW5lbFJvdyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoU2VsZWN0Q29udHJvbCwge1xuICAgICAgICAgICAgICBsYWJlbDogJ1RlbXBsYXRlJyxcbiAgICAgICAgICAgICAgdmFsdWU6IGF0dHJpYnV0ZXMudGVtcGxhdGVJZCxcbiAgICAgICAgICAgICAgb3B0aW9uczogYXZhaWxhYmxlVGVtcGxhdGVzLFxuICAgICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UobmV3dmFsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldEF0dHJpYnV0ZXMoeyB0ZW1wbGF0ZUlkOiBuZXd2YWwgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApLFxuICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFNlcnZlclNpZGVSZW5kZXIsIHtcbiAgICAgICAgYmxvY2s6IHByb3BzLm5hbWUsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBzYXZlZFNlYXJjaElkOiBhdHRyaWJ1dGVzLnNhdmVkU2VhcmNoSWQsXG4gICAgICAgICAgdGVtcGxhdGVJZDogYXR0cmlidXRlcy50ZW1wbGF0ZUlkXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfSxcblxuICAvKipcbiAgICogVGhlIHNhdmUgZnVuY3Rpb24gZGVmaW5lcyB0aGUgd2F5IGluIHdoaWNoIHRoZSBkaWZmZXJlbnQgYXR0cmlidXRlcyBzaG91bGQgYmUgY29tYmluZWRcbiAgICogaW50byB0aGUgZmluYWwgbWFya3VwLCB3aGljaCBpcyB0aGVuIHNlcmlhbGl6ZWQgYnkgR3V0ZW5iZXJnIGludG8gcG9zdF9jb250ZW50LlxuICAgKlxuICAgKiBUaGUgXCJzYXZlXCIgcHJvcGVydHkgbXVzdCBiZSBzcGVjaWZpZWQgYW5kIG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cbiAgICpcbiAgICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgUHJvcHMuXG4gICAqIEByZXR1cm5zIHtNaXhlZH0gSlNYIEZyb250ZW5kIEhUTUwuXG4gICAqL1xuICBzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);