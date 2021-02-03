const express = require('express');
const products = require('./data/products');

const app = express();

app.get('/', (req, resp) => {
  resp.send('API is running....');
});

app.get('/api/products/', (req, resp) => {
  resp.json(products);
});

app.get('/api/products/:id', (req, resp) => {
  const product = products.find((product) => product._id === req.params.id);
  resp.json(product);
});

app.listen(5000, console.log('app is running on port 5000'));
