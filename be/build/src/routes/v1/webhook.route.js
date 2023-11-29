"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.webhookRoutes = void 0;
var _express = _interopRequireDefault(require("express"));
var _environment = require("../../config/environment");
var _constants = require("../../utilities/constants");
// Import from config

// Import from utils

var router = _express["default"].Router();
router.route('/').get(function (req, res) {
  try {
    if (req.query.token !== _environment.env.FPT_WEBHOOK_TOKEN) {
      return res.status(_constants.HttpStatusCode.UNAUTHORIZED).json({
        errors: 'Unauthorized'
      });
    }
    return res.status(_constants.HttpStatusCode.OK).json({
      status: 'Ok',
      errors: ''
    });
  } catch (error) {
    return res.status(_constants.HttpStatusCode.INTERNAL_SERVER).json({
      errors: error.message
    });
  }
});
router.route('/').post(function (req, res) {
  try {
    var token = req.body['secret_key'];
    if (token !== _environment.env.FPT_WEBHOOK_TOKEN) {
      return res.status(_constants.HttpStatusCode.UNAUTHORIZED).json({
        errors: 'Unauthorized'
      });
    }
    return res.status(_constants.HttpStatusCode.OK).json({
      status: 'Ok',
      errors: ''
    });
  } catch (error) {
    return res.status(_constants.HttpStatusCode.INTERNAL_SERVER).json({
      errors: error.message
    });
  }
});
var webhookRoutes = router;
exports.webhookRoutes = webhookRoutes;