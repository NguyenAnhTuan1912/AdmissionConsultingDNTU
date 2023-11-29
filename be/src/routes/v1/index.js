import express from 'express'

// Import from utils
import { HttpStatusCode } from '~/utilities/constants'

// Import from routes
import { chatbotRoutes } from './chatbot.route'
import { webhookRoutes } from './webhook.route'

const router = express.Router()

router.get('/status', (req, res) => res.status(HttpStatusCode.OK).json({ status: 'OK!' }))

/** Chat APIs */
router.use('/chatbot', chatbotRoutes)

router.use(webhookRoutes)

export const apiV1 = router
