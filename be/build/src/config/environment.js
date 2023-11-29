"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.env = void 0;
require('dotenv').config();
var env = {
  APP_HOST: process.env.APP_HOST,
  APP_PORT: process.env.APP_PORT,
  BUILD_MODE: process.env.BUILD_MODE,
  CHATGPT_API_KEY: process.env.CHATGPT_API_KEY,
  FPT_BOT_CODE: process.env.FPT_BOT_CODE,
  FPT_SENDER_ID: process.env.FPT_SENDER_ID,
  FPT_API_KEY: process.env.FPT_API_KEY
};
exports.env = env;