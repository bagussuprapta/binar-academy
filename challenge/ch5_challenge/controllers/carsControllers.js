const { Cars } = require('../models')
const imagekit = require('../lib/imageKit')

const createCars = async(req, res) => {
    const { nama, harga, ukuran } = req.body
    try {
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
        res.status(201).json({
            status: 'success',
            data: {
                newCars
            }
        })
    }catch(err) {
        res.status(400).json({
            status: 'fail',
            errors: [err.message]
        })
    }
}

const findCars = async(req, res) => {
    try {
        const cars = await Cars.findAll()
        res.status(200).json({
            status: 'Success',
            data: {
                cars
            }
        })
    }catch(err){
        res.status(400).json({
            status: 'Fail',
            errors: [err.message]
        })
    }
}

const findCarsById = async(req, res) => {
    try {
        const cars = await Cars.findOne({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            status: 'Success',
            data: {
                cars
            }
        })
    } catch(err) {
        res.status(400).json({
            status: 'fail',
            errors: [err.message]
        })
    }
}

const deleteCars = async(req, res) => {
    try {
        const id = req.params.id
        await Cars.destroy({
            where: {
                id
            }
        })
        res.status(200).json({
            status: 'success',
            message: `Cars dengan id ${id} terhapus`
        })
    } catch(err) {
        res.status(400).json({
            status: 'fail',
            errors: [err.message]
        })
    }
}

const updateCars = async(req, res) => {
    try{
        const {nama, harga, ukuran} = req.query;
        const id = req.params.id

        const cars = await Cars.update({
            nama,
            harga,
            ukuran
        }, {
            where: {
                id
            }
        })
        res.status(200).json({
            status: 'success',
            data: {
                id: id, 
                name: nama,
                harga: harga,
                ukuran: ukuran
            }
        })
    } catch(err) {
        res.status(400).json({
            status: 'fail',
            errors: [err.message]
        })
    }
}

module.exports = {
    createCars,
    findCars,
    findCarsById,
    deleteCars,
    updateCars,
}