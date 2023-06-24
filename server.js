const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'src/pngvalt')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'src/pngvalt', 'index.html'));
});

const port = 4000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
