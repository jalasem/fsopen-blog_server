import { Router } from 'express'

import blogController from './blog.controller'

const router = Router()

router.use('/blogs', blogController)

export default router
