import express from 'express'
import { join, resolve } from 'path' // Correct path import

const server = express()

// Middleware to set correct MIME type for .js and .mjs files
server.use((req, res, next) => {
  if (req.path.endsWith('.js') || req.path.endsWith('.mjs')) {
    res.type('application/javascript')
  }
  next()
})

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

if (process.env.NODE_ENV === 'production') {
  server.use('/assets', express.static(resolve(__dirname, '../assets')))
  server.use('/images', express.static(resolve(__dirname, './public/images')))
  server.get('*', (req, res) => {
    res.sendFile(resolve(__dirname, '../index.html'))
  })
}

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log('Listening on port', PORT)
})

export default server
