const express = require('express')
const app = express()
const path = require('node:path')

const messages = [
  {
    text: 'Hi there!',
    user: 'Amanda',
    added: new Date()
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date()
  }
]

app.set('views', path.join(__dirname, "views"))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messageboard',messages: messages})
})

app.get('/new', (req, res) => {
  res.render('form')
})

app.get(`/Amanda`, (req, res) => {
  res.send({user: messages[0].user, text: messages[0].text})
})

app.post('/new', (req, res) => {
  
  messages.push({ text: req.body.messageText, user: req.body.messageUser, added: new Date() })
  res.redirect('/')
})


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Mini-message board - listening on Port:${PORT}`)
})