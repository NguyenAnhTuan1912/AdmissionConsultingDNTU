"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiV1 = void 0;
var _express = _interopRequireDefault(require("express"));
var _constants = require("../../utilities/constants");
var _chatbot = require("./chatbot.route");
var _webhook = require("./webhook.route");
// Import from utils

// Import from routes

var router = _express["default"].Router();
router.get('/status', function (req, res) {
  return res.status(_constants.HttpStatusCode.OK).json({
    status: 'OK!'
  });
});

/** Chat APIs */
router.use('/chatbot', _chatbot.chatbotRoutes);
router.use(_webhook.webhookRoutes);
var apiV1 = router;
exports.apiV1 = apiV1;