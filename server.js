import express from 'express'
import path from 'path'

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('*', (req, res) => {
  res.send(`<!DOCTYPE html><body>yes!<script src="/bundle.js"></script></body>`)
})

const PORT = process.env.PORT || 9900
app.listen(PORT, () => {
  console.log('Production Express server running at localhost:' + PORT)
})
