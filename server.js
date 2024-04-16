const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api/:date', (req, res) => {
  const date = req.params.date
  console.log('type =', typeof (new Date(date).valueOf()))
  res.json({unix: new Date(date).valueOf()})
})

app.listen(PORT, () => {
  console.log('app listening on port:', PORT)
})