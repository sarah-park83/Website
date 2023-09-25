import express from 'express'
import { join, resolve } from 'node:path'

const server = express()

// Serve TypeScript files as JavaScript modules
server.get('*.ts', (req, res, next) => {
  res.type('application/javascript')
  next()
})

// Serve JavaScript files as JavaScript modules
server.use('*.js', (req, res, next) => {
  res.type('application/javascript')
  next()
})

// Serve static files from the 'public' directory
server.use(express.static(join(__dirname, 'public')))

if (process.env.NODE_ENV === 'production') {
  // Serve assets and images in production
  server.use('/assets', express.static(resolve(__dirname, '../assets')))
  server.use('/images', express.static(resolve(__dirname, './public/images')))

  // Handle all other routes by serving 'index.html'
  server.get('*', (req, res) => {
    res.sendFile(resolve(__dirname, '../index.html'))
  })
}

// Start the server
const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
