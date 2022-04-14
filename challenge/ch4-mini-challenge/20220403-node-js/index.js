const express = require('express');
const items = require("./person.json");

const app = express();

app.get('/', (req, res) => {
    res.render('persons.ejs', {
        data: items
    })
})

app.listen(8000);
