import express from 'express';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
import path from 'path';
import methodOverride from 'method-override';

import router from './routers';
import db from './config/db';
import SortMiddleware from './app/middleware/SortMiddleware';

db.Connect();
const app = express();
const port = 3003;

//Static file
app.use(express.static(path.join(__dirname, 'public')));

//Cho phép override lại method
app.use(methodOverride('_method'));

//Middleware: Giup đọc dữ liệu Form và Json
app.use(express.urlencoded({ extended: true })); // Giup người dùng đọc dữ liệu từ form có method=POST
app.use(express.json());

//Custom Middleware
app.use(SortMiddleware);

// Config HandleBars
app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
        defaultLayout: 'main',
        layoutsDir: path.join(__dirname, 'resources/views/layouts'),
        partialsDir: path.join(__dirname, 'resources/views/partials'),
        //Nơi đăng ký các hàm trợ giúp
        helpers: {
            sum(a: number, b: number) {
                return a + b;
            },
            sortable(
                field: string,
                sort: {
                    type: 'default' | 'asc' | 'desc';
                    enable: boolean;
                    column?: string;
                },
            ) {
                interface Icon {
                    default: string;
                    asc: string;
                    desc: string;
                }

                const checkType = field === sort.column ? sort.type : 'default';

                const icon: Icon = {
                    default: 'bi bi-stack',
                    asc: 'bi bi-sort-alpha-up',
                    desc: 'bi bi-sort-alpha-down',
                };

                const type = {
                    default: 'desc',
                    asc: 'desc',
                    desc: 'asc',
                };

                const types = type[checkType];
                const icons = icon[checkType];
                return `<a href="?_sort&column=${field}&type=${types}">
                        <i class="${icons}"></i>
                    </a>`;
            },
        },
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//HTTP Logger
app.use(morgan('dev'));
router(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
