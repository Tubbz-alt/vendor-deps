"use strict";

exports.__esModule = true;
exports.default = void 0;

var _compute = _interopRequireDefault(require("./compute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isOptionsObject(options) {
  return options === Object(options) && Object.keys(options).length !== 0;
}

function defaultBehavior(actions, behavior) {
  if (behavior === void 0) {
    behavior = 'auto';
  }

  var canSmoothScroll = 'scrollBehavior' in document.body.style;
  actions.forEach(function (_ref) {
    var el = _ref.el,
        top = _ref.top,
        left = _ref.left;

    if (el.scroll && canSmoothScroll) {
      el.scroll({
        top: top,
        left: left,
        behavior: behavior
      });
    } else {
      el.scrollTop = top;
      el.scrollLeft = left;
    }
  });
}

function getOptions(options) {
  if (options === false) {
    return {
      block: 'end',
      inline: 'nearest'
    };
  }

  if (isOptionsObject(options)) {
    return options;
  }

  return {
    block: 'start',
    inline: 'nearest'
  };
}

function scrollIntoView(target, options) {
  if (isOptionsObject(options) && typeof options.behavior === 'function') {
    return options.behavior((0, _compute.default)(target, options));
  }

  var computeOptions = getOptions(options);
  return defaultBehavior((0, _compute.default)(target, computeOptions), computeOptions.behavior);
}

var _default = scrollIntoView;
exports.default = _default;
module.exports = exports["default"];