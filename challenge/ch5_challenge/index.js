require('dotenv').config()

const express = require('express')
const path = require('path')

// morgan itu logger
const morgan = require('morgan')

// import routing
const router = require('./routes')
const flash = require('connect-flash')
const cors = require('cors')
const session = require('express-session')

const port = process.env.PORT
// inisialisasi setelah import statement
const app = express()
//express configurasi
app.locals.moment = require('moment')

// Middleware to Parse JSON
app.use(express.json())
app.use(flash());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 60000 }
}))

app.use(cors())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// set view engine
app.set('view engine', 'ejs')

app.use(morgan('dev'))
app.use(router)

// membuat folder public static
app.use('/admin', express.static(path.join(__dirname, 'public')));
app.use('/admin/edit', express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

//cek server 
app.listen(port, () => {
    console.log(`Server running on ${Date(Date.now)}`)
    console.log(`Server listening on PORT: ${port}`)
})