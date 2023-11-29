import { env } from '~/config/environment'


const _baseURL_ = 'https://bot.fpt.ai'
const _channel_ = 'api'
const _api_ = {
  chatbot: '/api/get_answer/'
}
const _type_ = 'text'

const URL = _baseURL_ + _api_.chatbot

/**
 * __Local function__
 *
 * Use this function to create a request body for bot's answer request.
 * @param {string} content
 * @param {string} type
 * @returns
 */
function getRequestBody(content, type = _type_) {
  return {
    'channel': _channel_,
    'app_code': env.FPT_BOT_CODE,
    'sender_id': env.FPT_SENDER_ID,
    'type': _type_,
    'message': {
      'content': content,
      'type': type
    }
  }
}

/**
 * Use this function to get FPT Bot's answer from FPT BOT.
 * @param {string} content
 * @param {string} type
 */
async function getAnswer(content, type = _type_) {
  return fetch(URL, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + env.FPT_API_KEY
    },
    method: 'post',
    body: JSON.stringify(getRequestBody(content, type))
  })
}

export const FPTBotServices = {
  getAnswer
}