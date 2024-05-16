const express = require('express');

const router = express.Router();

const ProductController = require('../Controllers/Product.Controller');


router.get('/', ProductController.getAllProducts);

router.post('/', ProductController.createNewProduct);


router.get('/:id', ProductController.getProductById);

router.delete('/:id', ProductController.deleteProduct);

router.patch('/:id', ProductController.updateProduct);

module.exports = router;