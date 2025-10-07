"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_handlebars_1 = require("express-handlebars");
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 3003;
//Static file
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
//Middleware: Giup đọc dữ liệu Form và Json
app.use(express_1.default.urlencoded()); // Giup người dùng đọc dữ liệu từ form có method=POST
app.use(express_1.default.json());
// Config HandleBars
app.engine('.hbs', (0, express_handlebars_1.engine)({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path_1.default.join(__dirname, 'resources/views/layouts'),
    partialsDir: path_1.default.join(__dirname, 'resources/views/partials'),
}));
app.set('view engine', '.hbs');
app.set('views', path_1.default.join(__dirname, 'resources/views'));
//HTTP Logger
app.use((0, morgan_1.default)('dev'));
app.get('/', (req, res) => {
    res.render('home');
});
app.use((0, morgan_1.default)('dev'));
app.get('/blog', (req, res) => {
    res.render('blog');
});
app.get('/search', (req, res) => {
    res.render('search');
});
app.post('/search', (req, res) => {
    res.send('Data');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
