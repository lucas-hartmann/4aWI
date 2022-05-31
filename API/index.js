const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Where we will keep books
let books = [{"isbn":"1234", "name":"Harry Potter"},{"isbn":"187", "name":"I am Zlatan"}];


app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/books', (req, res) => {
    res.json(books);
});

app.get('/', (req, res) => {
    res.json(books);
});

app.get('/books/:id', (req, res) => {
    // Reading isbn from the URL
    const isbn = req.params.id;

        if (books.isbn === isbn) {
            res.json(books);
            return;
        }

});

app.post('/books/:id/:title', (req, res) => {
    const isbn = req.params.id;
    const title = req.params.title;

    const newBook = {"isbn":isbn, "name":title};

    books.push(newBook);

    res.send('Book is added to the database');
});

app.delete('/books/:id', (req, res) => {
    // Reading isbn from the URL
    const isbn = req.params.id;

    // Remove item from the books array
    books = books.filter(i => {
        if (i.isbn !== isbn) {
            return true;
        }
        return false;
    });

    res.send('Book is deleted');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));