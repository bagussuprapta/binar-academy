const { Warehouse, Product } = require("../models");

const createWarehouse = async (req, res) => {
  const { name, address, owner } = req.body;
  // req.body.name, req.body.price, req.body.quantity
  try {
    const newWarehouse = await Warehouse.create({
      name,
      address,
      owner,
    });

    res.status(201).json({
      status: "success",
      data: {
        newWarehouse,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      errors: [err.message],
    });
  }
};

// const findProducts = async (req, res) => {
//     try {
//         const products = await Product.findAll()
//         res.status(200).json({
//             status: 'Success',
//             data: {
//                 products
//             }
//         })
//     } catch (err) {
//         res.status(400).json({
//             status: 'fail',
//             errors: [err.message]
//         })
//     }
// }

const findWarehouseById = async (req, res) => {
  try {
    const warehouse = await Warehouse.findOne({
      where: {
        id: req.params.id,
      },
      include: {
        model: Product,
        attributes: ["id", ["name", "namaToko"], "stock"], // name = nama colomnya, namaToko = new value as nama colomn name
      },
    });
    res.status(200).json({
      status: "Success",
      data: {
        warehouse,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      errors: [err.message],
    });
  }
};

// const updateProduct = async (req, res) => {
//     try {
//         const { name, price, stock } = req.body
//         const id = req.params.id
//         const product = await Product.update({
//             name,
//             price,
//             stock
//         }, {
//             where: {
//                 id
//             }
//         })
//         res.status(200).json({
//             status: 'Success',
//             data: {
//                 id, name, price, stock
//             }
//         })
//     } catch (err) {
//         res.status(400).json({
//             status: 'fail',
//             errors: [err.message]
//         })
//     }
// }

// const deleteProduct = async (req, res) => {
//     try {
//         const id = req.params.id
//         await Product.destroy({
//             where: {
//                 id
//             }
//         })

//         res.status(200).json({
//             status: 'success',
//             message: `Product dengan id ${id} terhapus`
//         })
//     } catch (err) {
//         res.status(400).json({
//             status: 'fail',
//             errors: [err.message]
//         })
//     }
// }

module.exports = {
  createWarehouse,
  // findProducts,
  findWarehouseById,
  // updateProduct,
  // deleteProduct,
};