import server from './server'

const PORT = process.env.PORT || 3000

try {
  server.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log('Listening on port', PORT)
  })
} catch (error) {
  console.error('Error starting the server:', error)
}
