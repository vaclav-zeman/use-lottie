"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var createUseLottie = function createUseLottie(lottieInstance) {
  return function (options) {
    var container = (0, _react.useRef)(null);

    var _useState = (0, _react.useState)(null),
        _useState2 = _slicedToArray(_useState, 2),
        animationInstance = _useState2[0],
        setInstance = _useState2[1];

    (0, _react.useEffect)(function () {
      if (!container) {
        return null;
      }

      setInstance(lottieInstance.loadAnimation(options));
      return function () {
        return animationInstance.destroy();
      };
    }, [container]);
    return [animationInstance, containerRef];
  };
};

var _default = createUseLottie;
exports.default = _default;