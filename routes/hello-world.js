const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
  res.send('hello world');
})
// define the about route
router.post('/', (req, res) => {
  res.send({msg: "Hello world!"});
})

module.exports = router;