import express,{json} from 'express'
import morgan from 'morgan';
import auth from './routers/auth.routes.js';
import quiz from './routers/Quiz.routes.js';
import {PORT} from './config.js'
import cookieParent from 'cookie-parser';
import cors from 'cors';

const App = express();

App.use(morgan('dev'));
App.use(json());
App.use(cookieParent());
App.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))
App.disable('x-powered-by');
App.use(auth);
App.use(quiz);

App.listen(PORT);
console.log("serve listen in port", PORT);