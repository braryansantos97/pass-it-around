const express = require('express');
const app = express();
const PORT = 3000;
const links = require('./models/links')

app.get('/', (req, res) => {
  res.send('<h1>99 Bottles of beer on the wall</h1>' +
  '<a href="/98">TAKE ONE DOWN, PASS IT AROUND</a')
})


app.get('/:number_of_bottles', (req, res) => {
  const nextLink = parseInt(req.params.number_of_bottles) - 1
  if (nextLink == 0) {
    res.send(`No More beer! OK! here it is =><a href="/">start over</a>`)
  } else {
    res.send(`${req.params.number_of_bottles} bottles of beer on the wall.
    <a href="/${nextLink}">TAKE ONE DOWN, PASS IT AROUND</a>`);
  }
})


app.listen(PORT, () => {
  console.log('We are here', PORT)
});
