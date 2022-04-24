const { Books } = require('../../models')
const sequelize = require('sequelize')
const imagekit = require('../../lib/imageKit')

const { Op } = require('sequelize')

const homepage = async(req, res) => {
    const items = await Books.findAll()
    res.render('index', {
        title: 'Halaman Index',
        items
    })
}
const bookView = async(req, res, next) => {
    const items = await Books.findAll()
    res.render('book_list', {
        title: 'Halaman Book List',
        items
    })
}
const dashboardView = async(req, res, next) => {
    res.render('dashboard', {
        title: 'Halaman Dashboard'
    })
}
const createPage = async(req, res) => {
    res.render('add', {
        title: 'Halaman Tambah Buku'
    })
}
const createBooks = async(req, res) => {
    let { judul, penulis, tahun } = req.body
    judul = judul.toLowerCase()
    penulis = penulis.toLowerCase()


    // req.body.name, req.body.price, req.body.quantity
    // untuk dapat extension file nya
    const split = req.file.originalname.split('.')
    const ext = split[split.length - 1]

    // upload file ke imagekit
    const img = await imagekit.upload({
        file: req.file.buffer, //required
        fileName: `${req.file.originalname}.${ext}`, //required
    })
    console.log(img.url)

    const newBooks = await Books.create({
        judul,
        penulis,
        tahun,
        foto: img.url
    })
    res.redirect('/admin/books')
}

const deleteBooks = async(req, res) => {
    const id = req.params.id
    await Books.destroy({
        where: {
            id
        }
    })
    res.redirect('/admin/books')
}

const updateBook = async(req, res) => {
    let { judul, penulis, tahun } = req.body
    judul = judul.toLowerCase()
    penulis = penulis.toLowerCase()
    const id = req.params.id

    const split = req.file.originalname.split('.')
    const ext = split[split.length - 1]

    const img = await imagekit.upload({
        file: req.file.buffer, //required
        fileName: `${req.file.originalname}.${ext}`, //required
    })

    const newBooks = await Books.update({
        judul,
        penulis,
        tahun,
        foto: img.url
    }, {
        where: {
            id
        }
    })
    res.redirect('/admin/books')
}

const updatePage = async(req, res) => {
    const item = await Books.findByPk(req.params.id)
    res.render('edit', {
        item,
        title: 'Halaman Edit Buku',
    })
}

const searchBook = async(req, res) => {

    let query = req.query.judul
    query = query.toLowerCase();

    // console.log(query)
    await Books.findAll({
            where: {
                judul: {
                    [Op.like]: `%${query}%`
                }
            }
        })
        .then(items => res.render('search', {
            title: 'Search',
            items
        }))

}

module.exports = {
    homepage,
    bookView,
    dashboardView,
    createPage,
    createBooks,
    deleteBooks,
    updateBook,
    updatePage,
    searchBook
}