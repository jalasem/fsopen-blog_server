import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import { dbUrl, port } from './utils/config'
import controllers from './controllers'

const app = express()

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})

app.use(cors())
app.use(express.json())

app.use('/api', controllers)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
