const express = require('express')
const app = express()
const PORT = process.argv[2]
var bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({ extended: false }))

app.post('/form', (req, res) => {
   var str = req.body.str.split('').reverse().join('')
   console.log(str)
   res.send(str)
})
app.listen(PORT)