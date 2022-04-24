const router = require('express').Router()
const Admin = require('../controllers/admin/carsControllers')
const uploader = require('../middlewares/uploader')
const Cars = require('../controllers/carsControllers')

// API server side
router.post('/api/cars', uploader.single('foto'), Cars.createCars)
router.get('/api/cars/', Cars.findCars)
router.delete('/api/cars/:id', Cars.deleteCars)
router.put('/api/cars/:id', Cars.updateCars)
router.get('/api/cars/:id', Cars.findCarsById)

//Admin Client side
router.get('/admin', Admin.homepage)
router.get('/admin/add', Admin.createPage)
router.post('/admin/add', uploader.single('foto'), Admin.createCars)
router.post('/admin/edit/:id', uploader.single('foto'), Admin.updateCars)
router.get('/admin/edit/:id', Admin.updatePage)
router.get('/admin/filter', Admin.filterPage)
router.post('/admin/delete/:id', Admin.deleteCars)
router.get('/admin/search', Admin.searchCars)

module.exports = router