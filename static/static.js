const express = require('express')
const app = express()
const PORT = process.argv[2]
const index = process.argv[3]

app.use( express.static(index))

app.listen(PORT)