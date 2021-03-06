import express from 'express';
import colors from 'colors';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js';
dotenv.config();

const app = express();

app.get('/', (req, resp) => {
  resp.send('API is running....');
});

app.use('/api/products/', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `app is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

connectDB();
