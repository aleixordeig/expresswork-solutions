var express = require('express')
var app = express()
var port = process.argv[2]

app.get('/home', (req,res) => {
	res.send('Hello World!')
})

app.listen(port)