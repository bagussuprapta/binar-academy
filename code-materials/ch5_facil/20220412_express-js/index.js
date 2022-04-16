const express = require('express');
const items = require("./cars.json");

// import module postgresql nya
const Pool = require('pg').Pool

// connection to database
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '',
    port: 5432
})

const port = 3000;

const app = express();

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/item', (req, res) => {
    res.render('item.ejs', {
        data: items
    })
})

app.get('/check', (req, res) => {
    pool.query('SELECT name FROM transaction', (error, results) => {
        console.log(results)
        console.log(error)
        res.render('check.ejs')   
    })    
})

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));

