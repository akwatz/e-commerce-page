import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();

import Product from '../models/productModel.js';

// @desc Fetch all products
// @route GET /api/products
// @access Public
router.get(
  '/',
  asyncHandler(async (req, resp) => {
    const products = await Product.find({});
    resp.json(products);
  })
);

// @desc Fetch a single product
// @route GET /api/products/:id
// @access Public
router.get(
  '/:id',
  asyncHandler(async (req, resp) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      resp.json(product);
    } else {
      resp.status(404).json({ message: 'Product not found' });
    }
  })
);

export default router;
