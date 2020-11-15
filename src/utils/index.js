/* eslint-disable default-param-last */
export const handleServerResponse = (res, data, status = 200, err) => {
  if (err) console.log(JSON.stringify({ err }, null, 2))

  if (status >= 400) {
    if (err && err.name && err.name === 'MongoError') {
      if (err.code === 11000 || err.code === 11001) return res.status(400).send('duplicate detected')
    }

    return res.status(status).send(data)
  }

  res.status(status).json(data)
}
