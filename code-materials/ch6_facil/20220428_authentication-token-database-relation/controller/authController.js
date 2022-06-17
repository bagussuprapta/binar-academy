const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { User, Warehouse } = require('../models')

const register = async (req, res) => {
    const { name, username, password, warehouseId } = req.body
    try {
        // enkripsi password
        const hashedPassword = bcrypt.hashSync(password, 10)

        // cari atau buat baru warehouse
        const [warehouse, newWarehouse] = await Warehouse.findOrCreate({
            where: {
                id: warehouseId,
            },
            defaults: { name: `Toko ${name}` },
        })

        // validasi kalau warehouse id nya sudah terpakai, maka gagal melanjutkan
        if (!newWarehouse) {
            res.status(400).json({
                status: 'fail',
                message: 'warehouse ID already taken yeah !'
            })
        }

        // register user baru
        const newUser = await User.create({
            name,
            username,
            password: hashedPassword,
            warehouseId
        })

        res.status(201).json({
            status: 'success',
            data: {
                newUser,
                warehouse,
                newWarehouse
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            errors: [err.message]
        })
    }
}

const login = async (req, res) => {
    try {
        // cari user berdasarkan username
        const user = await User.findOne({
            where: {
                username: req.body.username
            }
        })

        // gagal melanjutkan karena username nya tidak ada 
        if (!user) {
            res.status(400).json({
                status: "failed",
                message: "user doesn't exist"
            })
        }

        // generate token utk user yg success login
        const token = jwt.sign({
            id: user.id,
            username: user.username,
            warehouseId: user.warehouseId
        }, 'rahasia')

        // check password user, jika success login dapat response intinya TOKEN
        if (user && bcrypt.compareSync(req.body.password, user.password)) {
            res.status(200).json({
                status: 'Success',
                data: {
                    username: user.username,
                    warehouseId: user.warehouseId,
                    token
                }
            })
        } else {
            res.status(400).json({
                status: "failed",
                message: "wrong password"
            })
        }
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            errors: [err.message]
        })
    }
}

const user = async (req, res) => {
    res.status(200).json({
        status: 'Success',
        data: {
            userId: req.user.id,
            username: req.user.username,
            warehouseId: req.user.warehouseId,
        }
    })
}

module.exports = {
    register,
    login,
    user,
}
