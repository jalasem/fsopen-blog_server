import { Router } from 'express'
import { Blog } from '../models'
import { handleServerResponse } from '../utils'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find()
    handleServerResponse(res, blogs)
  } catch (err) {
    handleServerResponse(res, 'error fetching blogs', 500, err)
  }
})

router.post('/', async (req, res) => {
  const blog = new Blog(req.body)

  blog
    .save()
    .then((result) => {
      handleServerResponse(res, result, 201)
    })
    .catch((err) => {
      handleServerResponse(res, 'error posting blog', 500, err)
    })
})

export default router
