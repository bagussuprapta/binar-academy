require('dotenv').config()

const express = require('express')
const path = require('path')

// morgan itu logger
const morgan = require('morgan')
// import routing
const router = require('./routes')

const cors = require('cors')

const port = process.env.PORT
// inisialisasi setelah import statement
const app = express()
// basic express configurasi YGY
app.locals.moment = require('moment')
// Middleware to Parse JSON
app.use(express.json())
app.use(cors())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended:false }))
// set view engine yg kita pakai di project ini
app.set('view engine', 'ejs')


app.use(morgan('dev'))
app.use(router)
// untuk biar folder public static, nanti utk tampilan jg ini
// app.use(express.static('public'))
app.use(express.static(path.join(__dirname,'public')));
app.listen(port, () => {
    console.log(`Server running on ${Date(Date.now)}`)
    console.log(`Server listening on PORT: ${port}`)
})