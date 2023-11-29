import express from 'express'

// Import from env
import { env } from '~/config/environment'

// Import from controllers
import { ChatbotController } from '../../controllers/chatbot.controller'
import { FPTController } from '~/controllers/fptbot.controller'

// Import from validations
import { ChatbotValidation } from '../../validations/chatbot.validation'

// Import from utils
import { HttpStatusCode } from '~/utilities/constants'

const router = express.Router()

router.route('/consult')
  .post(ChatbotValidation.getTextConsulting, ChatbotController.getTextConsulting)

// Được sử dụng để cho dự án cô Thi
router.route('/generate-text-gpt')
  .post(ChatbotValidation.generateTextGPT, ChatbotController.generateTextGPT)

router.route('/translate-text-gpt')
  .post(ChatbotValidation.translateTextGPT, ChatbotController.translateTextGPT)

router
  .route('/fptbot-answer-text')
  .get(function(req, res) {
    try {
      if (req.query.token !== env.FPT_WEBHOOK_TOKEN) {
        return res.status(HttpStatusCode.UNAUTHORIZED).json({
          errors: 'Invalid token'
        })
      }

      return res.status(HttpStatusCode.OK).send(env.FPT_WEBHOOK_TOKEN)
    } catch (error) {
      return res.status(HttpStatusCode.INTERNAL_SERVER).json({
        errors: error.message
      })
    }
  })

router
  .route('/fptbot-answer-text')
  .post(
    function(req, res, next) {
      try {
        if (req.query.token !== env.FPT_WEBHOOK_TOKEN) {
          return res.status(HttpStatusCode.UNAUTHORIZED).json({
            errors: 'Invalid token'
          })
        }

        return next()
      } catch (error) {
        return res.status(HttpStatusCode.INTERNAL_SERVER).json({
          errors: error.message
        })
      }
    },
    FPTController.getAnswer
  )

export const chatbotRoutes = router
