/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

:root {
    --ratio: 3.74;
    --cta-color: rgb(0, 102, 254);
    --light-color-bg: rgb(238, 241, 247);
    --dark-color-bg: rgb(55, 65, 81);
    --grey-color: rgb(107, 114, 128);
    --leading: 0.025em;
  }

.roboto-regular {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

body {
    background: rgb(92,87,179);
    background: linear-gradient(90deg, rgba(92,87,179,1) 0%, rgba(134,53,156,1) 49%, rgba(121,9,111,1) 100%, rgba(0,212,255,1) 100%);

    width: 100vw;
    height: 100vh;
    
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding-top: 30%;
    align-items: center;

    font-family: "Roboto", sans-serif;
}

.container {
    width:90%;
    display: flex;
    justify-content: center;
    gap:10px;
}

.container nav {
    width: 30%;
    border: 2px solid black;
    border-radius: 10px;

}

nav {
    padding: 20px;
}

.todo-display {
    padding: 20px;
}

.sidebar {
    line-height: 30px;
}

.sidebar > span{
    font-size: 1.5rem;
}

ul li {
    list-style-type: none;
    cursor: pointer;
}

.project span {
    font-size: 1.2rem;
}

.selected-project span {
    font-weight: 700;
}

.container .todo-display {
    width:60%;
    border: 2px solid black;
    border-radius: 10px;
}

.todo-title {
    font-size: 1.5rem;
    margin-bottom: 20px;
}

.todo-item {
    font-size: 1rem;
}

.todo-container .todo-item label {
    font-size: 1.3rem;
}

.todo-details {
    margin-top: 20px;;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}


button {
    display: block;
    margin-top: 2rem;
    width: calc(44px * var(--ratio));
    height: 34px;
    border-radius: calc(3px * var(--ratio));
    border: none;
    letter-spacing: ccalc(3 * var(--leading, 0.025em));
    font-family: inherit;
    color: var(--grey-color);
    background-color: var(--light-color-bg);
    font-size: medium;
    font-weight: 700;
  }

  button:focus {
    outline: none;
    border: 0.0625rem solid transparent;
    box-shadow: 0 0 0 0.125rem #fff, 0 0 0 0.2rem var(--dark-color-bg);
  }

  dialog {
  border: none !important;
  border-radius: calc(5px * var(--ratio));
  box-shadow: 0 0 #0000, 0 0 #0000, 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  padding: 1.6rem;
  max-width: 400px;
  top: 40%;
  left: 40%;
}

#todo-prompt form {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 10px;
    align-items: center;
}

#todo-prompt form label {
    text-align: right;
}

#todo-prompt form input[type="text"],
#todo-prompt form input[type="date"],
#todo-prompt form input[type="radio"],
#todo-prompt form button {
    width: 100%;
    box-sizing: border-box; /* Ensure padding doesn't affect width */
}

#todo-prompt form button {
    grid-column: span 2; /* Make the submit button span both columns */
    margin-top: 10px; /* Adjust spacing */
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,oCAAoC;IACpC,gCAAgC;IAChC,gCAAgC;IAChC,kBAAkB;EACpB;;AAEF;IACI,iCAAiC;IACjC,gBAAgB;IAChB,kBAAkB;EACpB;;AAEF;IACI,0BAA0B;IAC1B,gIAAgI;;IAEhI,YAAY;IACZ,aAAa;;IAEb,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,mBAAmB;;IAEnB,iCAAiC;AACrC;;AAEA;IACI,SAAS;IACT,aAAa;IACb,uBAAuB;IACvB,QAAQ;AACZ;;AAEA;IACI,UAAU;IACV,uBAAuB;IACvB,mBAAmB;;AAEvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,SAAS;IACT,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;;AAGA;IACI,cAAc;IACd,gBAAgB;IAChB,gCAAgC;IAChC,YAAY;IACZ,uCAAuC;IACvC,YAAY;IACZ,kDAAkD;IAClD,oBAAoB;IACpB,wBAAwB;IACxB,uCAAuC;IACvC,iBAAiB;IACjB,gBAAgB;EAClB;;EAEA;IACE,aAAa;IACb,mCAAmC;IACnC,kEAAkE;EACpE;;EAEA;EACA,uBAAuB;EACvB,uCAAuC;EACvC,uEAAuE;EACvE,eAAe;EACf,gBAAgB;EAChB,QAAQ;EACR,SAAS;AACX;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;;;;IAII,WAAW;IACX,sBAAsB,EAAE,wCAAwC;AACpE;;AAEA;IACI,mBAAmB,EAAE,6CAA6C;IAClE,gBAAgB,EAAE,mBAAmB;AACzC","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --ratio: 3.74;\n    --cta-color: rgb(0, 102, 254);\n    --light-color-bg: rgb(238, 241, 247);\n    --dark-color-bg: rgb(55, 65, 81);\n    --grey-color: rgb(107, 114, 128);\n    --leading: 0.025em;\n  }\n\n.roboto-regular {\n    font-family: \"Roboto\", sans-serif;\n    font-weight: 400;\n    font-style: normal;\n  }\n\nbody {\n    background: rgb(92,87,179);\n    background: linear-gradient(90deg, rgba(92,87,179,1) 0%, rgba(134,53,156,1) 49%, rgba(121,9,111,1) 100%, rgba(0,212,255,1) 100%);\n\n    width: 100vw;\n    height: 100vh;\n    \n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    padding-top: 30%;\n    align-items: center;\n\n    font-family: \"Roboto\", sans-serif;\n}\n\n.container {\n    width:90%;\n    display: flex;\n    justify-content: center;\n    gap:10px;\n}\n\n.container nav {\n    width: 30%;\n    border: 2px solid black;\n    border-radius: 10px;\n\n}\n\nnav {\n    padding: 20px;\n}\n\n.todo-display {\n    padding: 20px;\n}\n\n.sidebar {\n    line-height: 30px;\n}\n\n.sidebar > span{\n    font-size: 1.5rem;\n}\n\nul li {\n    list-style-type: none;\n    cursor: pointer;\n}\n\n.project span {\n    font-size: 1.2rem;\n}\n\n.selected-project span {\n    font-weight: 700;\n}\n\n.container .todo-display {\n    width:60%;\n    border: 2px solid black;\n    border-radius: 10px;\n}\n\n.todo-title {\n    font-size: 1.5rem;\n    margin-bottom: 20px;\n}\n\n.todo-item {\n    font-size: 1rem;\n}\n\n.todo-container .todo-item label {\n    font-size: 1.3rem;\n}\n\n.todo-details {\n    margin-top: 20px;;\n    padding-left: 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n\nbutton {\n    display: block;\n    margin-top: 2rem;\n    width: calc(44px * var(--ratio));\n    height: 34px;\n    border-radius: calc(3px * var(--ratio));\n    border: none;\n    letter-spacing: ccalc(3 * var(--leading, 0.025em));\n    font-family: inherit;\n    color: var(--grey-color);\n    background-color: var(--light-color-bg);\n    font-size: medium;\n    font-weight: 700;\n  }\n\n  button:focus {\n    outline: none;\n    border: 0.0625rem solid transparent;\n    box-shadow: 0 0 0 0.125rem #fff, 0 0 0 0.2rem var(--dark-color-bg);\n  }\n\n  dialog {\n  border: none !important;\n  border-radius: calc(5px * var(--ratio));\n  box-shadow: 0 0 #0000, 0 0 #0000, 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  padding: 1.6rem;\n  max-width: 400px;\n  top: 40%;\n  left: 40%;\n}\n\n#todo-prompt form {\n    display: grid;\n    grid-template-columns: auto 1fr;\n    column-gap: 10px;\n    align-items: center;\n}\n\n#todo-prompt form label {\n    text-align: right;\n}\n\n#todo-prompt form input[type=\"text\"],\n#todo-prompt form input[type=\"date\"],\n#todo-prompt form input[type=\"radio\"],\n#todo-prompt form button {\n    width: 100%;\n    box-sizing: border-box; /* Ensure padding doesn't affect width */\n}\n\n#todo-prompt form button {\n    grid-column: span 2; /* Make the submit button span both columns */\n    margin-top: 10px; /* Adjust spacing */\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/handlers.js":
/*!*************************!*\
  !*** ./src/handlers.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectHandler: () => (/* binding */ projectHandler)
/* harmony export */ });


const render = function () {
    const projectContainer = document.querySelector('[data-project-container]');
    const todoDisplay = document.querySelector('[data-project-todo-container]')
    const todoTemplate = document.getElementById('todo-template');
    const projectTodoTemplate = document.getElementById('project-todo-template');
    
    const clearElement = (element) => {
        while (element.firstChild) {
            element.removeChild(element.firstChild)
        }
    }

    const renderProjects = (projects) => {
        clearElement(projectContainer);
        projects.forEach((project) => {
            const newProject = document.createElement("ul");
            const newProjectTitle = document.createElement("span");
            newProject.dataset.projectId = project.id;
            newProject.classList.add("project");
            newProjectTitle.innerText = project.name;
            newProject.appendChild(newProjectTitle)

            project.tasks.forEach(task => {
                const todoElement = document.importNode(projectTodoTemplate.content, true);
                const checkBox = todoElement.querySelector("input");
                const label = todoElement.querySelector("label");
                checkBox.id = `project-${task.id}`
                checkBox.htmlFor = checkBox.id
                label.append(task.name)
                checkBox.addEventListener('change', (event) => {
                    checkStyling(event, label, task);
                    syncCheckboxes(task.id,event.target.checked)
                })
                newProject.appendChild(todoElement);
            })


            projectContainer.appendChild(newProject);
        })
    }

    const renderTodos = (projects, currentProjectId) => {
        clearElement(todoDisplay);
        const currentProject = projects.find(project => project.id === currentProjectId);
        const projectTitle = document.createElement('div');
        projectTitle.classList.add('todo-title');
        projectTitle.innerText = currentProject.name
        todoDisplay.appendChild(projectTitle)
        const todoContainer = document.querySelector('.todo-container')

        currentProject.tasks.forEach(task => {
            const todoElement = document.importNode(todoTemplate.content, true);
            const checkBox = todoElement.querySelector("input");
            const label = todoElement.querySelector("label");
            checkBox.id = `todo-${task.id}`
            checkBox.htmlFor = checkBox.id
            label.append(task.name)
            const details = todoElement.querySelector(".todo-details");
            const due = todoElement.querySelector(".todo-due")
            const description = todoElement.querySelector(".todo-description");
            const priority = todoElement.querySelector(".todo-priority");
            due.innerText = task.dueDate
            description.innerText = task.description
            priority.innerText = task.priority
            checkBox.checked = task.complete
            checkBox.addEventListener('change', (event) => {
                checkStyling(event, label, task)
                syncCheckboxes(task.id,event.target.checked)
            })
            todoDisplay.appendChild(todoElement);
        })


    }

    const checkStyling = (event, label, currentTask) => {
        if (event.target.checked) {
            label.style.textDecoration = 'line-through'
        } else {
            label.style.textDecoration = 'none';
        }
        currentTask.complete = event.target.checked;
    }

    const syncCheckboxes = (taskId, isChecked) => {
        // Sync the checkbox and styling in the project list
        const projectCheckbox = document.getElementById(`project-${taskId}`);
        const projectLabel = projectCheckbox ? projectCheckbox.closest('label') : null;
        if (projectCheckbox) {
            projectCheckbox.checked = isChecked;
            if (projectLabel) {
                projectLabel.style.textDecoration = isChecked ? 'line-through' : 'none';
            }
        }

        // Sync the checkbox and styling in the todo display
        const todoCheckbox = document.getElementById(`todo-${taskId}`);
        const todoLabel = todoCheckbox ? todoCheckbox.closest('label') : null;
        if (todoCheckbox) {
            todoCheckbox.checked = isChecked;
            if (todoLabel) {
                todoLabel.style.textDecoration = isChecked ? 'line-through' : 'none';
            }
        }
    };

    return { renderProjects, renderTodos }
}

const projectHandler = function () {
    const projectContainer = document.querySelector('[data-project-container]');
    const newProjectDialog = document.querySelector('[data-new-project-button]')
    const projectSubmit = document.querySelector('#project-name + button');
    const projectDialog = document.querySelector('#project-prompt');
    let selectedProjectId
    const todoDialog = document.querySelector('#todo-prompt');
    const newTodoButton = document.querySelector('[data-new-todo-button]');
    const todoSubmit = document.querySelector('[data-submit-todo]');
    const todoDelete = document.querySelector('[data-delete-todo-button]');
    const LOCAL_STORAGE_PROJECTS_KEY = 'projects.lists'

    const projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY)) || [];
    render().renderProjects(projects)
    newProjectDialog.addEventListener("click", () => {
        projectDialog.showModal();
    })

    projectSubmit.addEventListener("click", (event) => {
        event.preventDefault()
        const projectName = document.querySelector('#project-name').value;
        if (projectName == null || projectName === '') return;
        const newProject = createProject(projectName);
        projects.push(newProject);
        projectDialog.close();
        document.querySelector('#project-prompt form').reset();
        save();
        render().renderProjects(projects);
    })

    projectContainer.addEventListener("click", (event) => {
        if (event.target.tagName.toLowerCase() === 'span') {
            let selectedElement = event.target.closest('ul');
            if (selectedElement) {
                const allProjects = projectContainer.querySelectorAll('ul');
                allProjects.forEach(project => project.classList.remove('selected-project'));
                selectedElement.classList.toggle("selected-project");
                selectedProjectId = selectedElement.dataset.projectId;
            }
        }
        render().renderTodos(projects, selectedProjectId);
        
    })

    const createProject = (name) => {
        return { id: Date.now().toString(), name: name, tasks: [] }
    };

    newTodoButton.addEventListener("click", () => {
        todoDialog.showModal();
    })

    todoSubmit.addEventListener("click", (event) => {
        todoHandler().submitNewTodo(event, projects, selectedProjectId);
        save();
        render().renderTodos(projects, selectedProjectId);
        render().renderProjects(projects);
    })

    todoDelete.addEventListener("click", (event) => {
        const currentProject = projects.find(project => project.id === selectedProjectId);
        if (currentProject.tasks){
            currentProject.tasks.splice(0,1);
        }
        save();
        render().renderTodos(projects, selectedProjectId);
        render().renderProjects(projects);
    })

    const save = () => {
        localStorage.setItem(LOCAL_STORAGE_PROJECTS_KEY, JSON.stringify(projects))
    }


}

const todoHandler = function () {
    const projectDialog = document.querySelector('#todo-prompt');

    const submitNewTodo = (event, projects, currentProjectId) => {
        event.preventDefault()
        const title = document.querySelector('#title').value;
        const desc = document.querySelector('#description').value;
        const dueDate = document.querySelector('#due-date').value;
        const priority = document.querySelector('input[name="priority"]:checked').value;
        if (title == null || title === '') return;
        const newTodo = createTodo(title, desc, dueDate, priority);
        const currentProject = projects.find(project => project.id === currentProjectId);
        if (currentProject) {
            currentProject.tasks.push(newTodo);
        }
        projectDialog.close();
        document.querySelector('#todo-prompt form').reset();
    };

    const createTodo = (name, desc, due, prio) => {
        return { id: Date.now().toString(), name: name, description: desc, dueDate: due, priority: prio, complete: false }
    }

    return { submitNewTodo }
}

// {
//     id: '1',
//     name: "some project",
//     tasks: [{
//         id: "fdwafda",
//         name: "test",
//         description: "some desc",
//         dueDate: "8/2/2024",
//         priority: 'high',
//         complete: false,
//     }]
// }, {
//     id: '2',
//     name: "some other project",
//     tasks: [{
//         id: "fdwafda",
//         name: "test",
//         description: "some other desc",
//         dueDate: "8/3/2024",
//         priority: 'high',
//         complete: false,
//     }]
// }

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers */ "./src/handlers.js");
 


_handlers__WEBPACK_IMPORTED_MODULE_1__.projectHandler();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCOztBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCLHNCQUFzQjtBQUN0QixDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksY0FBYyxXQUFXLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sUUFBUSxVQUFVLHdCQUF3QixPQUFPLEtBQUssd0JBQXdCLHlCQUF5Qiw2QkFBNkIsaUJBQWlCLGdCQUFnQiw2QkFBNkIsR0FBRyxXQUFXLG9CQUFvQixvQ0FBb0MsMkNBQTJDLHVDQUF1Qyx1Q0FBdUMseUJBQXlCLEtBQUsscUJBQXFCLDBDQUEwQyx1QkFBdUIseUJBQXlCLEtBQUssVUFBVSxpQ0FBaUMsdUlBQXVJLHFCQUFxQixvQkFBb0IsNkJBQTZCLG9CQUFvQiw2QkFBNkIsdUJBQXVCLDBCQUEwQiw0Q0FBNEMsR0FBRyxnQkFBZ0IsZ0JBQWdCLG9CQUFvQiw4QkFBOEIsZUFBZSxHQUFHLG9CQUFvQixpQkFBaUIsOEJBQThCLDBCQUEwQixLQUFLLFNBQVMsb0JBQW9CLEdBQUcsbUJBQW1CLG9CQUFvQixHQUFHLGNBQWMsd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLFdBQVcsNEJBQTRCLHNCQUFzQixHQUFHLG1CQUFtQix3QkFBd0IsR0FBRyw0QkFBNEIsdUJBQXVCLEdBQUcsOEJBQThCLGdCQUFnQiw4QkFBOEIsMEJBQTBCLEdBQUcsaUJBQWlCLHdCQUF3QiwwQkFBMEIsR0FBRyxnQkFBZ0Isc0JBQXNCLEdBQUcsc0NBQXNDLHdCQUF3QixHQUFHLG1CQUFtQix3QkFBd0IseUJBQXlCLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLEdBQUcsY0FBYyxxQkFBcUIsdUJBQXVCLHVDQUF1QyxtQkFBbUIsOENBQThDLG1CQUFtQix5REFBeUQsMkJBQTJCLCtCQUErQiw4Q0FBOEMsd0JBQXdCLHVCQUF1QixLQUFLLG9CQUFvQixvQkFBb0IsMENBQTBDLHlFQUF5RSxLQUFLLGNBQWMsNEJBQTRCLDRDQUE0Qyw0RUFBNEUsb0JBQW9CLHFCQUFxQixhQUFhLGNBQWMsR0FBRyx1QkFBdUIsb0JBQW9CLHNDQUFzQyx1QkFBdUIsMEJBQTBCLEdBQUcsNkJBQTZCLHdCQUF3QixHQUFHLDBKQUEwSixrQkFBa0IsOEJBQThCLDRDQUE0Qyw4QkFBOEIsMkJBQTJCLHNFQUFzRSx1QkFBdUIsbUJBQW1CO0FBQ2w2STtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ3hLMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7QUFDckMsaUJBQWlCLHVHQUFhO0FBQzlCLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDeEJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxRQUFRO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhOzs7QUFHYjtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFFBQVE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTOzs7QUFHVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1FQUFtRSxPQUFPO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkRBQTZELE9BQU87QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7Ozs7O1VDM09BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7OztBQ0FxQjtBQUNpQjs7QUFFdEMscURBQXVCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9oYW5kbGVycy5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuOnJvb3Qge1xuICAgIC0tcmF0aW86IDMuNzQ7XG4gICAgLS1jdGEtY29sb3I6IHJnYigwLCAxMDIsIDI1NCk7XG4gICAgLS1saWdodC1jb2xvci1iZzogcmdiKDIzOCwgMjQxLCAyNDcpO1xuICAgIC0tZGFyay1jb2xvci1iZzogcmdiKDU1LCA2NSwgODEpO1xuICAgIC0tZ3JleS1jb2xvcjogcmdiKDEwNywgMTE0LCAxMjgpO1xuICAgIC0tbGVhZGluZzogMC4wMjVlbTtcbiAgfVxuXG4ucm9ib3RvLXJlZ3VsYXIge1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQ6IHJnYig5Miw4NywxNzkpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg5Miw4NywxNzksMSkgMCUsIHJnYmEoMTM0LDUzLDE1NiwxKSA0OSUsIHJnYmEoMTIxLDksMTExLDEpIDEwMCUsIHJnYmEoMCwyMTIsMjU1LDEpIDEwMCUpO1xuXG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZy10b3A6IDMwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5jb250YWluZXIge1xuICAgIHdpZHRoOjkwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDoxMHB4O1xufVxuXG4uY29udGFpbmVyIG5hdiB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG59XG5cbm5hdiB7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLnRvZG8tZGlzcGxheSB7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLnNpZGViYXIge1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuXG4uc2lkZWJhciA+IHNwYW57XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbnVsIGxpIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvamVjdCBzcGFuIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLnNlbGVjdGVkLXByb2plY3Qgc3BhbiB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmNvbnRhaW5lciAudG9kby1kaXNwbGF5IHtcbiAgICB3aWR0aDo2MCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnRvZG8tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi50b2RvLWl0ZW0ge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLnRvZG8tY29udGFpbmVyIC50b2RvLWl0ZW0gbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4udG9kby1kZXRhaWxzIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4OztcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbn1cblxuXG5idXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgd2lkdGg6IGNhbGMoNDRweCAqIHZhcigtLXJhdGlvKSk7XG4gICAgaGVpZ2h0OiAzNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IGNhbGMoM3B4ICogdmFyKC0tcmF0aW8pKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IGNjYWxjKDMgKiB2YXIoLS1sZWFkaW5nLCAwLjAyNWVtKSk7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgY29sb3I6IHZhcigtLWdyZXktY29sb3IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yLWJnKTtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG5cbiAgYnV0dG9uOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMTI1cmVtICNmZmYsIDAgMCAwIDAuMnJlbSB2YXIoLS1kYXJrLWNvbG9yLWJnKTtcbiAgfVxuXG4gIGRpYWxvZyB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiBjYWxjKDVweCAqIHZhcigtLXJhdGlvKSk7XG4gIGJveC1zaGFkb3c6IDAgMCAjMDAwMCwgMCAwICMwMDAwLCAwIDI1cHggNTBweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBwYWRkaW5nOiAxLjZyZW07XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIHRvcDogNDAlO1xuICBsZWZ0OiA0MCU7XG59XG5cbiN0b2RvLXByb21wdCBmb3JtIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XG4gICAgY29sdW1uLWdhcDogMTBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jdG9kby1wcm9tcHQgZm9ybSBsYWJlbCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbiN0b2RvLXByb21wdCBmb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuI3RvZG8tcHJvbXB0IGZvcm0gaW5wdXRbdHlwZT1cImRhdGVcIl0sXG4jdG9kby1wcm9tcHQgZm9ybSBpbnB1dFt0eXBlPVwicmFkaW9cIl0sXG4jdG9kby1wcm9tcHQgZm9ybSBidXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIEVuc3VyZSBwYWRkaW5nIGRvZXNuJ3QgYWZmZWN0IHdpZHRoICovXG59XG5cbiN0b2RvLXByb21wdCBmb3JtIGJ1dHRvbiB7XG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjsgLyogTWFrZSB0aGUgc3VibWl0IGJ1dHRvbiBzcGFuIGJvdGggY29sdW1ucyAqL1xuICAgIG1hcmdpbi10b3A6IDEwcHg7IC8qIEFkanVzdCBzcGFjaW5nICovXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG9DQUFvQztJQUNwQyxnQ0FBZ0M7SUFDaEMsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtFQUNwQjs7QUFFRjtJQUNJLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztBQUVGO0lBQ0ksMEJBQTBCO0lBQzFCLGdJQUFnSTs7SUFFaEksWUFBWTtJQUNaLGFBQWE7O0lBRWIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjs7SUFFbkIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksU0FBUztJQUNULGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOzs7QUFHQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWix1Q0FBdUM7SUFDdkMsWUFBWTtJQUNaLGtEQUFrRDtJQUNsRCxvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLHVDQUF1QztJQUN2QyxpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxrRUFBa0U7RUFDcEU7O0VBRUE7RUFDQSx1QkFBdUI7RUFDdkIsdUNBQXVDO0VBQ3ZDLHVFQUF1RTtFQUN2RSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFFBQVE7RUFDUixTQUFTO0FBQ1g7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7Ozs7SUFJSSxXQUFXO0lBQ1gsc0JBQXNCLEVBQUUsd0NBQXdDO0FBQ3BFOztBQUVBO0lBQ0ksbUJBQW1CLEVBQUUsNkNBQTZDO0lBQ2xFLGdCQUFnQixFQUFFLG1CQUFtQjtBQUN6Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tcmF0aW86IDMuNzQ7XFxuICAgIC0tY3RhLWNvbG9yOiByZ2IoMCwgMTAyLCAyNTQpO1xcbiAgICAtLWxpZ2h0LWNvbG9yLWJnOiByZ2IoMjM4LCAyNDEsIDI0Nyk7XFxuICAgIC0tZGFyay1jb2xvci1iZzogcmdiKDU1LCA2NSwgODEpO1xcbiAgICAtLWdyZXktY29sb3I6IHJnYigxMDcsIDExNCwgMTI4KTtcXG4gICAgLS1sZWFkaW5nOiAwLjAyNWVtO1xcbiAgfVxcblxcbi5yb2JvdG8tcmVndWxhciB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgfVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoOTIsODcsMTc5KTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDkyLDg3LDE3OSwxKSAwJSwgcmdiYSgxMzQsNTMsMTU2LDEpIDQ5JSwgcmdiYSgxMjEsOSwxMTEsMSkgMTAwJSwgcmdiYSgwLDIxMiwyNTUsMSkgMTAwJSk7XFxuXFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmctdG9wOiAzMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOjkwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDoxMHB4O1xcbn1cXG5cXG4uY29udGFpbmVyIG5hdiB7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcbn1cXG5cXG5uYXYge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4udG9kby1kaXNwbGF5IHtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXG59XFxuXFxuLnNpZGViYXIgPiBzcGFue1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxudWwgbGkge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3Qgc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uc2VsZWN0ZWQtcHJvamVjdCBzcGFuIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmNvbnRhaW5lciAudG9kby1kaXNwbGF5IHtcXG4gICAgd2lkdGg6NjAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnRvZG8tdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnRvZG8taXRlbSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIC50b2RvLWl0ZW0gbGFiZWwge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLnRvZG8tZGV0YWlscyB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuXFxuYnV0dG9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIHdpZHRoOiBjYWxjKDQ0cHggKiB2YXIoLS1yYXRpbykpO1xcbiAgICBoZWlnaHQ6IDM0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IGNhbGMoM3B4ICogdmFyKC0tcmF0aW8pKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBsZXR0ZXItc3BhY2luZzogY2NhbGMoMyAqIHZhcigtLWxlYWRpbmcsIDAuMDI1ZW0pKTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmV5LWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtY29sb3ItYmcpO1xcbiAgICBmb250LXNpemU6IG1lZGl1bTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIH1cXG5cXG4gIGJ1dHRvbjpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjEyNXJlbSAjZmZmLCAwIDAgMCAwLjJyZW0gdmFyKC0tZGFyay1jb2xvci1iZyk7XFxuICB9XFxuXFxuICBkaWFsb2cge1xcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XFxuICBib3JkZXItcmFkaXVzOiBjYWxjKDVweCAqIHZhcigtLXJhdGlvKSk7XFxuICBib3gtc2hhZG93OiAwIDAgIzAwMDAsIDAgMCAjMDAwMCwgMCAyNXB4IDUwcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIHBhZGRpbmc6IDEuNnJlbTtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICB0b3A6IDQwJTtcXG4gIGxlZnQ6IDQwJTtcXG59XFxuXFxuI3RvZG8tcHJvbXB0IGZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jdG9kby1wcm9tcHQgZm9ybSBsYWJlbCB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4jdG9kby1wcm9tcHQgZm9ybSBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxuI3RvZG8tcHJvbXB0IGZvcm0gaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdLFxcbiN0b2RvLXByb21wdCBmb3JtIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0sXFxuI3RvZG8tcHJvbXB0IGZvcm0gYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIEVuc3VyZSBwYWRkaW5nIGRvZXNuJ3QgYWZmZWN0IHdpZHRoICovXFxufVxcblxcbiN0b2RvLXByb21wdCBmb3JtIGJ1dHRvbiB7XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7IC8qIE1ha2UgdGhlIHN1Ym1pdCBidXR0b24gc3BhbiBib3RoIGNvbHVtbnMgKi9cXG4gICAgbWFyZ2luLXRvcDogMTBweDsgLyogQWRqdXN0IHNwYWNpbmcgKi9cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcblxuY29uc3QgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wcm9qZWN0LWNvbnRhaW5lcl0nKTtcbiAgICBjb25zdCB0b2RvRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXByb2plY3QtdG9kby1jb250YWluZXJdJylcbiAgICBjb25zdCB0b2RvVGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby10ZW1wbGF0ZScpO1xuICAgIGNvbnN0IHByb2plY3RUb2RvVGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10b2RvLXRlbXBsYXRlJyk7XG4gICAgXG4gICAgY29uc3QgY2xlYXJFbGVtZW50ID0gKGVsZW1lbnQpID0+IHtcbiAgICAgICAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJQcm9qZWN0cyA9IChwcm9qZWN0cykgPT4ge1xuICAgICAgICBjbGVhckVsZW1lbnQocHJvamVjdENvbnRhaW5lcik7XG4gICAgICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgIG5ld1Byb2plY3QuZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmlkO1xuICAgICAgICAgICAgbmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgICAgICAgICAgIG5ld1Byb2plY3RUaXRsZS5pbm5lclRleHQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgICAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKG5ld1Byb2plY3RUaXRsZSlcblxuICAgICAgICAgICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9FbGVtZW50ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZShwcm9qZWN0VG9kb1RlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrQm94ID0gdG9kb0VsZW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gdG9kb0VsZW1lbnQucXVlcnlTZWxlY3RvcihcImxhYmVsXCIpO1xuICAgICAgICAgICAgICAgIGNoZWNrQm94LmlkID0gYHByb2plY3QtJHt0YXNrLmlkfWBcbiAgICAgICAgICAgICAgICBjaGVja0JveC5odG1sRm9yID0gY2hlY2tCb3guaWRcbiAgICAgICAgICAgICAgICBsYWJlbC5hcHBlbmQodGFzay5uYW1lKVxuICAgICAgICAgICAgICAgIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjaGVja1N0eWxpbmcoZXZlbnQsIGxhYmVsLCB0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgc3luY0NoZWNrYm94ZXModGFzay5pZCxldmVudC50YXJnZXQuY2hlY2tlZClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQodG9kb0VsZW1lbnQpO1xuICAgICAgICAgICAgfSlcblxuXG4gICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclRvZG9zID0gKHByb2plY3RzLCBjdXJyZW50UHJvamVjdElkKSA9PiB7XG4gICAgICAgIGNsZWFyRWxlbWVudCh0b2RvRGlzcGxheSk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QuaWQgPT09IGN1cnJlbnRQcm9qZWN0SWQpO1xuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdGl0bGUnKTtcbiAgICAgICAgcHJvamVjdFRpdGxlLmlubmVyVGV4dCA9IGN1cnJlbnRQcm9qZWN0Lm5hbWVcbiAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKVxuICAgICAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY29udGFpbmVyJylcblxuICAgICAgICBjdXJyZW50UHJvamVjdC50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgY29uc3QgdG9kb0VsZW1lbnQgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRvZG9UZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrQm94ID0gdG9kb0VsZW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSB0b2RvRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwibGFiZWxcIik7XG4gICAgICAgICAgICBjaGVja0JveC5pZCA9IGB0b2RvLSR7dGFzay5pZH1gXG4gICAgICAgICAgICBjaGVja0JveC5odG1sRm9yID0gY2hlY2tCb3guaWRcbiAgICAgICAgICAgIGxhYmVsLmFwcGVuZCh0YXNrLm5hbWUpXG4gICAgICAgICAgICBjb25zdCBkZXRhaWxzID0gdG9kb0VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWRldGFpbHNcIik7XG4gICAgICAgICAgICBjb25zdCBkdWUgPSB0b2RvRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZHVlXCIpXG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRvZG9FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1kZXNjcmlwdGlvblwiKTtcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gdG9kb0VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXByaW9yaXR5XCIpO1xuICAgICAgICAgICAgZHVlLmlubmVyVGV4dCA9IHRhc2suZHVlRGF0ZVxuICAgICAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gdGFzay5kZXNjcmlwdGlvblxuICAgICAgICAgICAgcHJpb3JpdHkuaW5uZXJUZXh0ID0gdGFzay5wcmlvcml0eVxuICAgICAgICAgICAgY2hlY2tCb3guY2hlY2tlZCA9IHRhc2suY29tcGxldGVcbiAgICAgICAgICAgIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNoZWNrU3R5bGluZyhldmVudCwgbGFiZWwsIHRhc2spXG4gICAgICAgICAgICAgICAgc3luY0NoZWNrYm94ZXModGFzay5pZCxldmVudC50YXJnZXQuY2hlY2tlZClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmRDaGlsZCh0b2RvRWxlbWVudCk7XG4gICAgICAgIH0pXG5cblxuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrU3R5bGluZyA9IChldmVudCwgbGFiZWwsIGN1cnJlbnRUYXNrKSA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgbGFiZWwuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGFiZWwuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudFRhc2suY29tcGxldGUgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICB9XG5cbiAgICBjb25zdCBzeW5jQ2hlY2tib3hlcyA9ICh0YXNrSWQsIGlzQ2hlY2tlZCkgPT4ge1xuICAgICAgICAvLyBTeW5jIHRoZSBjaGVja2JveCBhbmQgc3R5bGluZyBpbiB0aGUgcHJvamVjdCBsaXN0XG4gICAgICAgIGNvbnN0IHByb2plY3RDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcm9qZWN0LSR7dGFza0lkfWApO1xuICAgICAgICBjb25zdCBwcm9qZWN0TGFiZWwgPSBwcm9qZWN0Q2hlY2tib3ggPyBwcm9qZWN0Q2hlY2tib3guY2xvc2VzdCgnbGFiZWwnKSA6IG51bGw7XG4gICAgICAgIGlmIChwcm9qZWN0Q2hlY2tib3gpIHtcbiAgICAgICAgICAgIHByb2plY3RDaGVja2JveC5jaGVja2VkID0gaXNDaGVja2VkO1xuICAgICAgICAgICAgaWYgKHByb2plY3RMYWJlbCkge1xuICAgICAgICAgICAgICAgIHByb2plY3RMYWJlbC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IGlzQ2hlY2tlZCA/ICdsaW5lLXRocm91Z2gnIDogJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU3luYyB0aGUgY2hlY2tib3ggYW5kIHN0eWxpbmcgaW4gdGhlIHRvZG8gZGlzcGxheVxuICAgICAgICBjb25zdCB0b2RvQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdG9kby0ke3Rhc2tJZH1gKTtcbiAgICAgICAgY29uc3QgdG9kb0xhYmVsID0gdG9kb0NoZWNrYm94ID8gdG9kb0NoZWNrYm94LmNsb3Nlc3QoJ2xhYmVsJykgOiBudWxsO1xuICAgICAgICBpZiAodG9kb0NoZWNrYm94KSB7XG4gICAgICAgICAgICB0b2RvQ2hlY2tib3guY2hlY2tlZCA9IGlzQ2hlY2tlZDtcbiAgICAgICAgICAgIGlmICh0b2RvTGFiZWwpIHtcbiAgICAgICAgICAgICAgICB0b2RvTGFiZWwuc3R5bGUudGV4dERlY29yYXRpb24gPSBpc0NoZWNrZWQgPyAnbGluZS10aHJvdWdoJyA6ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4geyByZW5kZXJQcm9qZWN0cywgcmVuZGVyVG9kb3MgfVxufVxuXG5leHBvcnQgY29uc3QgcHJvamVjdEhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXByb2plY3QtY29udGFpbmVyXScpO1xuICAgIGNvbnN0IG5ld1Byb2plY3REaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1uZXctcHJvamVjdC1idXR0b25dJylcbiAgICBjb25zdCBwcm9qZWN0U3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZSArIGJ1dHRvbicpO1xuICAgIGNvbnN0IHByb2plY3REaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1wcm9tcHQnKTtcbiAgICBsZXQgc2VsZWN0ZWRQcm9qZWN0SWRcbiAgICBjb25zdCB0b2RvRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tcHJvbXB0Jyk7XG4gICAgY29uc3QgbmV3VG9kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5ldy10b2RvLWJ1dHRvbl0nKTtcbiAgICBjb25zdCB0b2RvU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtc3VibWl0LXRvZG9dJyk7XG4gICAgY29uc3QgdG9kb0RlbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWRlbGV0ZS10b2RvLWJ1dHRvbl0nKTtcbiAgICBjb25zdCBMT0NBTF9TVE9SQUdFX1BST0pFQ1RTX0tFWSA9ICdwcm9qZWN0cy5saXN0cydcblxuICAgIGNvbnN0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9TVE9SQUdFX1BST0pFQ1RTX0tFWSkpIHx8IFtdO1xuICAgIHJlbmRlcigpLnJlbmRlclByb2plY3RzKHByb2plY3RzKVxuICAgIG5ld1Byb2plY3REaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcHJvamVjdERpYWxvZy5zaG93TW9kYWwoKTtcbiAgICB9KVxuXG4gICAgcHJvamVjdFN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lJykudmFsdWU7XG4gICAgICAgIGlmIChwcm9qZWN0TmFtZSA9PSBudWxsIHx8IHByb2plY3ROYW1lID09PSAnJykgcmV0dXJuO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgIHByb2plY3REaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtcHJvbXB0IGZvcm0nKS5yZXNldCgpO1xuICAgICAgICBzYXZlKCk7XG4gICAgICAgIHJlbmRlcigpLnJlbmRlclByb2plY3RzKHByb2plY3RzKTtcbiAgICB9KVxuXG4gICAgcHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc3BhbicpIHtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZEVsZW1lbnQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgndWwnKTtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbGxQcm9qZWN0cyA9IHByb2plY3RDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgndWwnKTtcbiAgICAgICAgICAgICAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4gcHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC1wcm9qZWN0JykpO1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwic2VsZWN0ZWQtcHJvamVjdFwiKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFByb2plY3RJZCA9IHNlbGVjdGVkRWxlbWVudC5kYXRhc2V0LnByb2plY3RJZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZW5kZXIoKS5yZW5kZXJUb2Rvcyhwcm9qZWN0cywgc2VsZWN0ZWRQcm9qZWN0SWQpO1xuICAgICAgICBcbiAgICB9KVxuXG4gICAgY29uc3QgY3JlYXRlUHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiB7IGlkOiBEYXRlLm5vdygpLnRvU3RyaW5nKCksIG5hbWU6IG5hbWUsIHRhc2tzOiBbXSB9XG4gICAgfTtcblxuICAgIG5ld1RvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdG9kb0RpYWxvZy5zaG93TW9kYWwoKTtcbiAgICB9KVxuXG4gICAgdG9kb1N1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIHRvZG9IYW5kbGVyKCkuc3VibWl0TmV3VG9kbyhldmVudCwgcHJvamVjdHMsIHNlbGVjdGVkUHJvamVjdElkKTtcbiAgICAgICAgc2F2ZSgpO1xuICAgICAgICByZW5kZXIoKS5yZW5kZXJUb2Rvcyhwcm9qZWN0cywgc2VsZWN0ZWRQcm9qZWN0SWQpO1xuICAgICAgICByZW5kZXIoKS5yZW5kZXJQcm9qZWN0cyhwcm9qZWN0cyk7XG4gICAgfSlcblxuICAgIHRvZG9EZWxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmlkID09PSBzZWxlY3RlZFByb2plY3RJZCk7XG4gICAgICAgIGlmIChjdXJyZW50UHJvamVjdC50YXNrcyl7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdC50YXNrcy5zcGxpY2UoMCwxKTtcbiAgICAgICAgfVxuICAgICAgICBzYXZlKCk7XG4gICAgICAgIHJlbmRlcigpLnJlbmRlclRvZG9zKHByb2plY3RzLCBzZWxlY3RlZFByb2plY3RJZCk7XG4gICAgICAgIHJlbmRlcigpLnJlbmRlclByb2plY3RzKHByb2plY3RzKTtcbiAgICB9KVxuXG4gICAgY29uc3Qgc2F2ZSA9ICgpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTE9DQUxfU1RPUkFHRV9QUk9KRUNUU19LRVksIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSlcbiAgICB9XG5cblxufVxuXG5jb25zdCB0b2RvSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBwcm9qZWN0RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tcHJvbXB0Jyk7XG5cbiAgICBjb25zdCBzdWJtaXROZXdUb2RvID0gKGV2ZW50LCBwcm9qZWN0cywgY3VycmVudFByb2plY3RJZCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUtZGF0ZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJykudmFsdWU7XG4gICAgICAgIGlmICh0aXRsZSA9PSBudWxsIHx8IHRpdGxlID09PSAnJykgcmV0dXJuO1xuICAgICAgICBjb25zdCBuZXdUb2RvID0gY3JlYXRlVG9kbyh0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmlkID09PSBjdXJyZW50UHJvamVjdElkKTtcbiAgICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdC50YXNrcy5wdXNoKG5ld1RvZG8pO1xuICAgICAgICB9XG4gICAgICAgIHByb2plY3REaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tcHJvbXB0IGZvcm0nKS5yZXNldCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVUb2RvID0gKG5hbWUsIGRlc2MsIGR1ZSwgcHJpbykgPT4ge1xuICAgICAgICByZXR1cm4geyBpZDogRGF0ZS5ub3coKS50b1N0cmluZygpLCBuYW1lOiBuYW1lLCBkZXNjcmlwdGlvbjogZGVzYywgZHVlRGF0ZTogZHVlLCBwcmlvcml0eTogcHJpbywgY29tcGxldGU6IGZhbHNlIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBzdWJtaXROZXdUb2RvIH1cbn1cblxuLy8ge1xuLy8gICAgIGlkOiAnMScsXG4vLyAgICAgbmFtZTogXCJzb21lIHByb2plY3RcIixcbi8vICAgICB0YXNrczogW3tcbi8vICAgICAgICAgaWQ6IFwiZmR3YWZkYVwiLFxuLy8gICAgICAgICBuYW1lOiBcInRlc3RcIixcbi8vICAgICAgICAgZGVzY3JpcHRpb246IFwic29tZSBkZXNjXCIsXG4vLyAgICAgICAgIGR1ZURhdGU6IFwiOC8yLzIwMjRcIixcbi8vICAgICAgICAgcHJpb3JpdHk6ICdoaWdoJyxcbi8vICAgICAgICAgY29tcGxldGU6IGZhbHNlLFxuLy8gICAgIH1dXG4vLyB9LCB7XG4vLyAgICAgaWQ6ICcyJyxcbi8vICAgICBuYW1lOiBcInNvbWUgb3RoZXIgcHJvamVjdFwiLFxuLy8gICAgIHRhc2tzOiBbe1xuLy8gICAgICAgICBpZDogXCJmZHdhZmRhXCIsXG4vLyAgICAgICAgIG5hbWU6IFwidGVzdFwiLFxuLy8gICAgICAgICBkZXNjcmlwdGlvbjogXCJzb21lIG90aGVyIGRlc2NcIixcbi8vICAgICAgICAgZHVlRGF0ZTogXCI4LzMvMjAyNFwiLFxuLy8gICAgICAgICBwcmlvcml0eTogJ2hpZ2gnLFxuLy8gICAgICAgICBjb21wbGV0ZTogZmFsc2UsXG4vLyAgICAgfV1cbi8vIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJzsgXG5pbXBvcnQgKiBhcyBoYW5kbGVycyBmcm9tICcuL2hhbmRsZXJzJ1xuXG5oYW5kbGVycy5wcm9qZWN0SGFuZGxlcigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==