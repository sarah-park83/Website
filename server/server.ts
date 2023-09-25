import express from 'express'
import { join, resolve } from 'node:path'

const server = express()

server.get('*.ts', (req, res, next) => {
  res.type('application/javascript')
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

export default server
