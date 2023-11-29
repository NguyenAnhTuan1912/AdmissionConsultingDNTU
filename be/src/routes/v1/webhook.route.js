import express from 'express'

// Import from config
import { env } from '~/config/environment'

// Import from utils
import { HttpStatusCode } from '~/utilities/constants'

const router = express.Router()

router
  .route('/')
  .get(function(req, res) {
    try {
      if (req.headers.token !== env.FPT_WEBHOOK_TOKEN) {
        return res.status(HttpStatusCode.UNAUTHORIZED).json({
          errors: 'Unauthorized'
        })
      }

      return res.status(HttpStatusCode.OK).json({
        status: 'Ok',
        errors: ''
      })
    } catch (error) {
      return res.status(HttpStatusCode.INTERNAL_SERVER).json({
        errors: error.message
      })
    }
  })

export const webhookRoutes = router