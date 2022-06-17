const router = require('express').Router()
// Controller
const Product = require('../controller/productController')
const Warehouse = require('../controller/warehouseController')
const Auth = require('../controller/authController')

const Admin = require('../controller/admin/productController')
const Upload =  require('../controller/uploadController')

// middleware
const uploader = require('../middlewares/uploader')
const Authentication = require('../middlewares/authenticate')

// API server
router.post('/api/products', Authentication, uploader.single('image'), Product.createProduct)
router.get('/api/products', Product.findProducts)
router.get('/api/products/:id', Product.findProductById)
router.put('/api/products/:id', Product.updateProduct)
router.delete('/api/products/:id', Product.deleteProduct)

router.post('/api/warehouses', Warehouse.createWarehouse)
router.get('/api/warehouses/:id', Warehouse.findWarehouseById)

// API auth
router.post('/api/auth/register', Auth.register)
router.post('/api/auth/login', Auth.login)
router.get('/api/auth/user', Authentication, Auth.user)

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

// test upload image 
router.post('/api/upload', uploader.single('image'), Upload.uploadImage)

module.exports = router
