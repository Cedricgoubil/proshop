import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel.js'

// @description Fetch all products
// @route Get/api/products
// @access Public
router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({})
    // To test errors
    // throw new Error('You fucked up')
  res.json(products)
}))

// @description Fetch single product
// @route Get/api/product/:id
// @access Public
router.get('/:id', asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if(product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
  res.json(product)
}))

export default router