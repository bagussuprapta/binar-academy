const express = require('express');
const app = express();
const body_parser = require('body-parser');
const mysql = require('mysql');

// set view engine
app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());
app.set('view engine', 'ejs');

//set connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_crud'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Connected to the MySQL server.');
});

app.get('/', (req, res) => {
    const sql = 'SELECT * FROM books';
    connection.query(sql, (err, results) => {
        if (err) throw err;
        res.render('books_index', {
            title: 'CRUD NODE JS, EXPRESS, and MYSQL',
            books: results
        });
    });
});

app.get('/book_insert', (req, res) => {
    res.render('book_insert', { title: 'Add Book' });
});

app.post('/book_insert', (req, res) => {
    const title_book = req.body.title_book;
    const writer = req.body.writer;
    const year_publish = req.body.year_publish;
    const sql = `insert into books(judul, penulis, tahun_terbit) values('${title_book}', '${writer}', '${year_publish}')`;

    connection.query(sql, function(err, result) {
        if (err) throw err;
        res.redirect('/');
    });
});

app.get('/book_edit/:id', (req, res) => {
    const id = req.params.id;
    const sql = `select * from books where id = '${id}'`;

    connection.query(sql, function(err, result) {
        if (err) throw err;
        res.render('book_edit', { books: result, title: 'Update Book' });
    });
});

app.post('/book_edit/:id', (req, res) => {
    const id = req.params.id;
    const title_book = req.body.title_book;
    const writer = req.body.writer;
    const year_publish = req.body.year_publish;

    connection.query('UPDATE books SET judul=?, penulis=?, tahun_terbit=? WHERE id=?', [title_book, writer, year_publish, id],
        (error, results) => {
            res.redirect('/');
        }
    );
});

app.get('/delete/:id', (req, res) => {
    const bookId = req.params.id;
    const sql = `DELETE FROM books WHERE id = '${bookId}'`;

    connection.query(sql, function(err, results) {
        if (err) throw err;
        res.redirect('/');
    })
});

app.listen(8080, () => {
    console.log('Server is Running at http://localhost:8080');
});