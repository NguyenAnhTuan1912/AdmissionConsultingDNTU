"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FPTBotServices = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _environment = require("../config/environment");
// Import from config

var _baseURL_ = 'https://bot.fpt.ai';
var _channel_ = 'api';
var _api_ = {
  chatbot: '/api/get_answer/'
};
var _type_ = 'text';
var URL = _baseURL_ + _api_.chatbot;

/**
 * __Local function__
 *
 * Use this function to create a request body for bot's answer request.
 * @param {string} content
 * @param {string} type
 * @returns
 */
function getRequestBody(content) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _type_;
  return {
    'channel': _channel_,
    'app_code': _environment.env.FPT_BOT_CODE,
    'sender_id': _environment.env.FPT_SENDER_ID,
    'type': _type_,
    'message': {
      'content': content,
      'type': type
    }
  };
}

/**
 * Use this function to get FPT Bot's answer from FPT BOT.
 * @param {string} content
 * @param {string} type
 */
function getAnswer(_x) {
  return _getAnswer.apply(this, arguments);
}
function _getAnswer() {
  _getAnswer = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(content) {
    var type,
      _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          type = _args.length > 1 && _args[1] !== undefined ? _args[1] : _type_;
          return _context.abrupt("return", fetch(URL, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + _environment.env.FPT_API_KEY
            },
            method: 'post',
            body: JSON.stringify(getRequestBody(content, type))
          }));
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _getAnswer.apply(this, arguments);
}
var FPTBotServices = {
  getAnswer: getAnswer
};
exports.FPTBotServices = FPTBotServices;