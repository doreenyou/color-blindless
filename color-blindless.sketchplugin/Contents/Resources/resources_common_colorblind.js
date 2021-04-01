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
/******/ 	return __webpack_require__(__webpack_require__.s = "./resources/common/colorblind.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/common/colorblind.js":
/*!****************************************!*\
  !*** ./resources/common/colorblind.js ***!
  \****************************************/
/*! exports provided: getFilteredImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilteredImage", function() { return getFilteredImage; });
function _readOnlyError(name) {
  throw new TypeError("\"" + name + "\" is read-only");
} // Source: http://web.archive.org/web/20081014161121/http://www.colorjack.com/labs/colormatrix/
// Another Source: https://www.reddit.com/r/gamedev/comments/2i9edg/code_to_create_filters_for_colorblind/
//

/* Comment on http://kaioa.com/node/75#comment-247 states that:

ColorMatrix? Nope, won't work.
You're right, the ColorMatrix version is very simplified, and not accurate. I created that color matrix one night (http://www.colorjack.com/labs/colormatrix/)
and since then it's shown up many places... I should probably take that page down before it spreads more! Anyways, it gives you an idea of what it might look
like, but for the real thing...

As far as a simple script to simulate color blindness, this one does the best job:

http://www.nofunc.com/Color_Blindness_Library/ — It uses "confusion lines" within the XYZ color space to calculate values (this one is in Javascript, and should be easy to convert to python).

There are a few other methods, and no one really knows exactly what it would look like... these are all generalizations of a small sample, set against the masses.
*/


var ColorMatrixMatrixes = {
  Normal: {
    R: [100, 0, 0],
    G: [0, 100, 0],
    B: [0, 0, 100
    /*Fixed: was in the wrong spot in the original version*/
    ]
  },
  Protanopia: {
    R: [56.667, 43.333, 0],
    G: [55.833, 44.167, 0],
    B: [0, 24.167, 75.833]
  },
  Protanomaly: {
    R: [81.667, 18.333, 0],
    G: [33.333, 66.667, 0],
    B: [0, 12.5, 87.5]
  },
  Deuteranopia: {
    R: [62.5, 37.5, 0],
    G: [70, 30, 0],
    B: [0, 30, 70]
  },
  Deuteranomaly: {
    R: [80, 20, 0],
    G: [25.833, 74.167, 0],
    B: [0, 14.167, 85.833]
  },
  Tritanopia: {
    R: [95, 5, 0],
    G: [0, 43.333, 56.667],
    B: [0, 47.5, 52.5]
  },
  Tritanomaly: {
    R: [96.667, 3.333, 0],
    G: [0, 73.333, 26.667],
    B: [0, 18.333, 81.667]
  },
  Achromatopsia: {
    R: [29.9, 58.7, 11.4],
    G: [29.9, 58.7, 11.4],
    B: [29.9, 58.7, 11.4]
  },
  Achromatomaly: {
    R: [61.8, 32, 6.2],
    G: [16.3, 77.5, 6.2],
    B: [16.3, 32.0, 51.6]
  }
};
var imageCache = {},
    urlCache = {},
    colorMatrixFilterFunctions = {};

function matrixFunction(matrix) {
  return function (rgb) {
    var r = rgb[0];
    var g = rgb[1];
    var b = rgb[2];
    return [r * matrix.R[0] / 100.0 + g * matrix.R[1] / 100.0 + b * matrix.R[2] / 100.0, r * matrix.G[0] / 100.0 + g * matrix.G[1] / 100.0 + b * matrix.G[2] / 100.0, r * matrix.B[0] / 100.0 + g * matrix.B[1] / 100.0 + b * matrix.B[2] / 100.0];
  };
}

for (var t in ColorMatrixMatrixes) {
  if (ColorMatrixMatrixes.hasOwnProperty(t)) {
    colorMatrixFilterFunctions[t] = matrixFunction(ColorMatrixMatrixes[t]);
  }
}

function getFilterFunction(type) {
  var lib = colorMatrixFilterFunctions;
  type = type.substring(5);

  if (type in lib) {
    return lib[type];
  } else {
    throw 'Library does not support Filter Type: ' + type;
  }
}

var getFilteredImage = function getFilteredImage(img, type, containerWidth) {
  var filterFunction = getFilterFunction(type);
  var canvas = document.createElement('canvas');
  var w = img.naturalWidth,
      h = img.naturalHeight;
  var scale = containerWidth / w;

  if (scale > 1) {
    scale = (_readOnlyError("scale"), 1);
  } // 要设置 canvas 的画布大小，使用的是canvas.width和 canvas.height；
  // 要设置画布的实际渲染大小，使用的 style 属性或 CSS 设置的 width 和height，只是简单的对画布进行缩放。
  // <canvas width="640" height="800" style="width:320px; height:400px"></canvas>


  var ratio = window.devicePixelRatio;
  canvas.style.width = w * scale;
  canvas.style.height = h * scale;
  canvas.width = w * scale * ratio;
  canvas.height = h * scale * ratio;
  var ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, w * scale * ratio, h * scale * ratio);
  var pixels = ctx.getImageData(0, 0, w * scale * ratio, h * scale * ratio);

  for (var i = 0; i < pixels.data.length; i += 4) {
    var rgb = [pixels.data[i], pixels.data[i + 1], pixels.data[i + 2]];
    var filteredRGB = filterFunction(rgb);
    pixels.data[i] = filteredRGB[0];
    pixels.data[i + 1] = filteredRGB[1];
    pixels.data[i + 2] = filteredRGB[2];
  }

  ctx.putImageData(pixels, 0, 0);
  var url = canvas.toDataURL();
  return url;
};

/***/ })

/******/ });
//# sourceMappingURL=resources_common_colorblind.js.map