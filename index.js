const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("Hola mi server en express");
});

app.get('/products', (req, res) => {
  res.json({
    name: 'Producto 1',
    price: '2000'
  });
});

app.listen(port, () => {
  console.log('Mi port ' + port);
});
