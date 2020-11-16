import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import controllers from '../controllers'
import { dbUrl } from './config'

const app = express()

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
const db = mongoose.connection
db.on('error', (err) => console.log('dbError::', err))
db.once('open', () => console.log('DB Connected!'))

app.use(cors())
app.use(express.json())

app.use('/api', controllers)

export default app
