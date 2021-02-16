import express from 'express';
import products from './data/products.js';
import colors from 'colors';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
dotenv.config();

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

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `app is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

connectDB();
