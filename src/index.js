import express,{json} from 'express'
import morgan from 'morgan';
import auth from './routers/auth.routes.js';
import quiz from './routers/Quiz.routes.js';
import {PORT} from './config.js'
import cookieParent from 'cookie-parser';

const App = express();

App.use(morgan('dev'));
App.use(json());
App.use(cookieParent());
App.use(auth);
App.use(quiz);

App.listen(PORT);
console.log("serve listen in port", PORT);