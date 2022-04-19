const { Product } = require('../../models')
// const axios = require('axios')

const homepage = async (req, res) => {
    res.render('index')
}

const dataPage = async (req, res) => {
    // const products = await axios.get('localhost:3000/api/product')
    // console.log(products.data)
    const items = await Product.findAll()
    res.render('data', {
        items
    })
}

const createPage = async (req, res) => {
    res.render('new')
}

const createProduct = async (req, res) => {
    const { name, price, stock } = req.body
    // req.body.name, req.body.price, req.body.quantity
    const newProduct = await Product.create({
        name,
        price,
        stock
    })
    res.redirect('/admin/product')
}

const editPage = async (req, res) => {
    const item = await Product.findByPk(req.params.id)
    res.render('edit', {
        item
    })
}

const editProduct = async (req, res) => {
    const { name, price, stock } = req.body
    const id = req.params.id
    await Product.update({
        name,
        price,
        stock
    }, {
        where: {
            id
        }
    })
    res.redirect('/admin/product')
}

const deleteProduct = async (req, res) => {
    const id = req.params.id
    await Product.destroy({
        where: {
            id
        }
    })
    res.redirect('/admin/product')
}

module.exports = {
    homepage,
    dataPage,
    createPage,
    createProduct,
    editPage,
    editProduct,
    deleteProduct,
}