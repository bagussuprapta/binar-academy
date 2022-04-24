const { Books } = require('../models')

const deleteBooks = async (req, res) => {
    try {
        const id = req.params.id
        await Books.destroy({
            where: {
                id
            }
        })

        res.status(200).json({
            status: 'success',
            message: `Buku dengan id ${id} terhapus`
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            errors: [err.message]
        })
    }
}

module.exports = {
    deleteBooks,
}