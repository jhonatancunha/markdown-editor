const { join } = require('path')

const express = require('express')
const app = express();
const compression = require('compression')


app.use(compression())
app.use(express.static(join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'build', 'index.html'))
}) 

app.listen(3000, () => console.log("Listening on localhost:3000"))