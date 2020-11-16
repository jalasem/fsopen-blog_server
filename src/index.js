import app from './utils/app'
import { createServer } from 'http'
import { port } from './utils/config'

const server = createServer(app)

server.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
