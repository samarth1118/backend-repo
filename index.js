
const express = require('express')
const app = express()
const port = 3000
const helloWorld = require('./routes/hello-world')


app.use('/hello', helloWorld);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})