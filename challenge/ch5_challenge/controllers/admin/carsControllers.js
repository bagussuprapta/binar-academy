const { Cars } = require('../../models')
const { Op } = require('sequelize')
const sequelize = require('sequelize')
const imagekit = require('../../lib/imageKit')

const homepage = async(req, res) => {
    try {
        const items = await Cars.findAll()
        res.status(200)
        res.render('index', {
            title: 'Halaman Index',
            items,
            message: req.flash('message'),
            carsTitle: 'Cars > List Cars'
        })
    } catch(error) {
        res.status(404).json({
            message: error.message,
        })
    }
}

const createPage = async(req, res) => {
    try {
        res.render('add', {
            title: 'Halaman Tambah Cars',
            carsTitle: 'Car > Edit Car'
        })
    }catch(error) {
        res.status(404).json({
            message: error.message,
        })
    }
}

const createCars = async(req, res) => {
    try {
        var { nama, harga, ukuran, } = req.body
        nama = nama.toLowerCase()

        // untuk dapat extension file nya
        const split = req.file.originalname.split('.')
        const ext = split[split.length - 1]

        // upload file ke imagekit
        const img = await imagekit.upload({
            file: req.file.buffer, //required
            fileName: `${req.file.originalname}.${ext}`, //required
        })

        const newCars = await Cars.create({
            nama,
            harga,
            ukuran,
            foto: img.url
        })
        req.flash('message', 'Data Berhasil Disimpan')
        res.redirect('/admin')
    } catch(error) {
        res.status(400).json({
            message: error.message,
        })
    }
}

const updateCars = async(req, res) => {
    try {
        var { nama, harga, ukuran } = req.body
        nama = nama.toLowerCase()
        harga = harga.toLowerCase()
        const id = req.params.id

        // untuk dapat extension file nya
        const split = req.file.originalname.split('.')
        const ext = split[split.length - 1]

        // upload file ke imagekit
        const img = await imagekit.upload({
            file: req.file.buffer, //required
            fileName: `${req.file.originalname}.${ext}`, //required
        })

        const newCars = await Cars.update({
            nama,
            harga,
            ukuran,
            foto: img.url
        }, {
            where: {
                id
            }
        })
        res.redirect('/admin')
    } catch(error) {
        res.status(400).json({
            message: error.message,
        })
    }
}

const updatePage = async(req, res) => {
    try {
        const item = await Cars.findByPk(req.params.id)
        res.render('edit', {
            item,
            carsTitle: 'Cars > Update Car'
        })
    } catch(error) {
        res.status(400).json({
            message: error.message,
        })
    }
}

const filterPage = async(req, res) => {
    try {
        let size = req.query.ukuran;
        if (size == 'all') {
            const items = await Cars.findAll({
                where: {
                    [Op.or]: [
                        { ukuran: 'small' },
                        { ukuran: 'medium' },
                        { ukuran: 'large' }
                    ]
                }
            })
            res.render('filter', {
                items,
                carsTitle: 'Cars > Filter Car'
            })
        }else {
            const items = await Cars.findAll({
                where: {
                    ukuran: size
                }
            })
            res.render('filter', {
                items,
                carsTitle: 'Cars > Filter Car'
            })
        }
    } catch(error) {
        res.status(404).json({
            message: error.message,
        })
    }
}

const deleteCars = async(req, res) => {
    try {
        const id = req.params.id;
        await Cars.destroy({
            where: {
                id
            }
        });
        res.redirect('/admin/');
        req.flash('message', 'Data Berhasil Dihapus')
    } catch(error) {
        res.redirect('/admin');
        res.status(400).json({
            message: error.message
        })
    }
}

const searchCars = async(req, res) => {
    let query = req.query.nama;
    await Cars.findAll({
        where: {
            nama: {
                [Op.like]: `%${query}%`
            }
        }
    })
    .then(items => res.render('search', {
        title: 'Search',
        items,
        carsTitle: 'Cars > Search Cars'
    }))
}

module.exports = {
    homepage,
    createPage,
    createCars,
    filterPage,
    deleteCars,
    updateCars,
    updatePage,
    searchCars,
}