import {Router} from 'express';
import security from '../middleware/ValidateToke.js';
import { AllQuiz, CreateQuiz, MyQuiz, ViewQuiz, Answer, MyAnswers } from '../controllers/Quiz.controllers.js';

const router = Router();

router.get('/quiz', security, AllQuiz);
router.get('/quiz/:id', security, ViewQuiz); // => ver titulo, preguntas y opciones
router.get('/myquiz', security, MyQuiz); // => ver mis quiz Creados
router.post('/quiz', security ,CreateQuiz);  // => Crear Quiz
router.post('/answer/:idquiz', security ,Answer);
router.get('/answer', security , MyAnswers);

export default router