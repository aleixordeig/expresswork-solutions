const express = require('express')
const app = express()
const crypto = require('crypto')



const content = (req,res) => {
var id = req.params.id
var hashedId = crypto
.createHash('sha1')
      .update(new Date().toDateString() + id)
      .digest('hex')
      
 res.send(hashedId)
}


app.put('/message/:id', content)

app.listen(process.argv[2])