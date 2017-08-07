const express = require('express')
const app = express()
const path = require('path')
const PORT = process.argv[2]
const pug = process.argv[3]


app.set('views', path.join(__dirname, 'templates'))
app.set('view engine', 'pug')

app.get('/home', function (req, res) {
  res.render(pug, { date: new Date().toDateString()});
});

app.listen(PORT)



