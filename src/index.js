const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3003;

//Static file
app.use(express.static(path.join(__dirname, 'public')))

//Middleware: Giup đọc dữ liệu Form và Json
app.use(express.urlencoded()) // Giup người dùng đọc dữ liệu từ form có method=POST
app.use(express.json())

// Config HandleBars
app.engine(
  '.hbs',
  engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'resources/views/layouts'),
    partialsDir: path.join(__dirname, 'resources/views/partials'),
  })
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//HTTP Logger
app.use(morgan('dev'));
app.get('/', (req, res) => {
  res.render('home');
});

app.use(morgan('dev'));
app.get('/blog', (req, res) => {
  res.render('blog');
});

app.get('/search', (req, res) => {
  res.render('search');
})

app.post('/search', (req, res) => {
  res.send('Data');
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
