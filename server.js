const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api/:date', (req, res) => {
  const date = req.params.date
  res.json({unix: Math.floor(new Date(date).getTime() / 1000)})
})

app.listen(PORT, () => {
  console.log('app listening on port:', PORT)
})