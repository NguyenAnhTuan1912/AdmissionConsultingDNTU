"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chatbotRoutes = void 0;
var _express = _interopRequireDefault(require("express"));
var _chatbot = require("../../controllers/chatbot.controller");
var _fptbot = require("../../controllers/fptbot.controller");
var _chatbot2 = require("../../validations/chatbot.validation");
// Import from controllers

// Import from validations

var router = _express["default"].Router();
router.route('/consult').post(_chatbot2.ChatbotValidation.getTextConsulting, _chatbot.ChatbotController.getTextConsulting);

// Được sử dụng để cho dự án cô Thi
router.route('/generate-text-gpt').post(_chatbot2.ChatbotValidation.generateTextGPT, _chatbot.ChatbotController.generateTextGPT);
router.route('/translate-text-gpt').post(_chatbot2.ChatbotValidation.translateTextGPT, _chatbot.ChatbotController.translateTextGPT);
router.route('/fptbot-answer-text').post(_fptbot.FPTController.getAnswerAsText);
var chatbotRoutes = router;
exports.chatbotRoutes = chatbotRoutes;