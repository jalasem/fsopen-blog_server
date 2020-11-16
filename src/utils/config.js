require('dotenv').config()

const nodeEnv = process.env.NODE_ENV || 'development'
export const port = process.env.PORT
export const dbUrl = nodeEnv === 'test'
  ? process.env.TEST_DB_URL
  : process.env.DB_URL
