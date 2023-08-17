import {Router} from 'express';
import security from '../middleware/ValidateToke.js';
import { AllQuiz, CreateQuiz, MyQuiz, ViewQuiz, Answer } from '../controllers/Quiz.controllers.js';

const router = Router();

router.get('/quiz', security, AllQuiz);
router.get('/quiz/:id', security, ViewQuiz); // => ver titulo, preguntas y opciones
router.get('/myquiz', security, MyQuiz);
router.post('/quiz', security ,CreateQuiz); // son para crear un quiz
router.post('/answer/:idquiz/:idquestion', security, Answer);

export default router