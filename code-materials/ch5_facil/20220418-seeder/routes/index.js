const router = require('express').Router()
const Product = require('../controller/productController')
const Admin = require('../controller/admin/productController')

// API server
router.post('/api/product', Product.createProduct)
router.get('/api/product', Product.findProducts)
router.get('/api/product/:id', Product.findProductById)
router.put('/api/product/:id', Product.updateProduct)
router.delete('/api/product/:id', Product.deleteProduct)

// admin client side
router.get('/admin', Admin.homepage)
router.get('/admin/product', Admin.dataPage)
router.get('/admin/new', Admin.createPage)
router.post('/admin/new', Admin.createProduct)
router.get('/admin/edit/:id', Admin.editPage)
router.post('/admin/update/:id', Admin.editProduct)
router.post('/admin/delete/:id', Admin.deleteProduct)

// detail/search page
router.get('/admin/product/:name/:id', Admin.detailPage)

module.exports = router
