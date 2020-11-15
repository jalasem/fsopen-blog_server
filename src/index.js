import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { dbUrl, port } from './utils/config'
import { Blog } from './models'

const app = express()

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})

app.use(cors())
app.use(express.json())

app.get('/api/blogs', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
})

app.post('/api/blogs', (request, response) => {
  const blog = new Blog(request.body)

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
