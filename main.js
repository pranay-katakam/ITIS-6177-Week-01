const port=8080;

console.log("ITIS week 1 Assignment");

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Hello World`)
})