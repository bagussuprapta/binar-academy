const router = require('express').Router()
const Admin = require('../controllers/admin/booksController')
const uploader = require('../middlewares/uploader')
const Books = require('../controllers/booksController')

//API Server Side
router.delete('/api/books/:id', Books.deleteBooks)

// admin client side
router.get('/admin', Admin.homepage)
router.get('/book_list', Admin.bookView)
router.get('/dashboard', Admin.dashboardView)
router.get('/admin/books', Admin.bookView)
router.post('/admin/add', uploader.single('foto'), Admin.createBooks)
router.get('/admin/add', Admin.createPage)
router.post('/admin/delete/:id', Admin.deleteBooks)
router.post('/admin/edit/:id', uploader.single('foto'), Admin.updateBook)
router.get('/admin/edit/:id', Admin.updatePage)

router.get('/admin/search',Admin.searchBook)

module.exports = router