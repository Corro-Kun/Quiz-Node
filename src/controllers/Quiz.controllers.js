import sql from '../database/sql.js';
import genID from '../lib/generate_id.js';

export const AllQuiz = async (req,res)=>{
    try {
        const result = await sql.query('SELECT * FROM quiz');

        const data = result[0];

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message:'Ocurrio un error'});
    }
}
export const CreateQuiz = async (req, res) =>{
    try {
        const id = req.user.id;
        const IDquiz = genID(30);
        const title = req.body.title;
        const questions = req.body.questions;

        // crear el quiz        
        const result = await sql.query('insert into quiz (id, title, iduser) values (?,?,?)',[IDquiz, title, id]);

        for(let i = 0; i < questions.length; i++){
            // crear la pregunta
            const question = questions[i].question;
            const result = await sql.query('insert into question (question, idquiz) values (?,?)',[question, IDquiz]);
            const idQuestion = result[0].insertId;
            // crea las opciones
            const options = questions[i].options;
            for(let a = 0; a < options.length; a++){

                switch (a) {
                    case 0:
                            const A = 'A';
                            await sql.query('insert into option (option, answer, qualification, idquestion) values (?,?,?,?)',[A, options[a].option, options[a].qualification, idQuestion]);
                        break;
                    case 1:
                            const B = 'B';
                            await sql.query('insert into option (option, answer, qualification, idquestion) values (?,?,?,?)',[B, options[a].option, options[a].qualification, idQuestion]);
                        break;
                    case 2:
                            const C = 'C';
                            await sql.query('insert into option (option, answer, qualification, idquestion) values (?,?,?,?)',[C, options[a].option, options[a].qualification, idQuestion]);
                        break;
                    case 3:
                            const D = 'D';
                            await sql.query('insert into option (option, answer, qualification, idquestion) values (?,?,?,?)',[D, options[a].option, options[a].qualification, idQuestion]);
                        break;
                    default:
                        res.status(400).json({message:'No se puede crear mas opciones'});
                        break;
                }
            }

        }

        res.status(200).json({message: 'Quiz creado con exito'});
    } catch (error) {
        res.status(500).json({message:'Ocurrio un error, '+error});
    }
}
export const MyQuiz = async (req, res) =>{
    try {
        const id = req.user.id;

        const [result] = await sql.query('select * from quiz where iduser = ?',[id]);

        res.status(200).json(result);

    } catch (error) {
        res.satatus(500).json({message:'Ocurrio un error, '+error});
    }   
}

export const ViewQuiz = async (req, res) =>{
    try {
        const id = req.params.id;

        const [value1] = await sql.query('select * from quiz where id = ?',[id]);

        const title = value1[0].title;

        const [user] = await sql.query('select * from user where id = ?',[value1[0].iduser]);

        const author = user[0].name;

        const [questions] = await sql.query('select * from question where idquiz = ?',[value1[0].id]);

        for (let i = 0; i < questions.length; i++) {
            const [options] = await sql.query('select * from option where idquestion = ?',[questions[i].id]);
            questions[i].options = options;
        }

        res.status(200).json({title, author, questions}); 
    } catch (error) {
        res.status(500).json({message:'Ocurrio un error, '+error}) 
    }
}

export const Answer = async (req, res)=>{
    try {
        const idquiz = req.params.idquiz;
        const id = req.user.id;
        let Questions = 0;
        let AnswersCorrects = 0;

        const answer = req.body.Answers;

        const [result] = await sql.query('select * from answer where iduser = ? and idquiz = ?', [id, idquiz]);

        if(result.length > 0) return res.status(500).json({message: 'no puedes responder 2 veces la misma pregunta'});

        for(let i = 0; i < answer.length; i++){
            const ID = genID(30);
            await sql.query('insert into answer (id, option, answer, qualification, idquiz, idquestion, iduser) values (?, ?, ?, ?, ?, ?, ?);',[ID, answer[i].option, answer[i].answer, answer[i].qualification, answer[i].idquiz, answer[i].idquestion, id]);
            Questions++;
            AnswersCorrects = AnswersCorrects + answer[i].qualification;
        }

        const qualification = (AnswersCorrects/Questions)*100;

        const idQuali = genID(30);

        await sql.query('insert into qualification(id, questions, answers, qualification, idquiz, iduser) values(?,?,?,?,?,?);',[idQuali, Questions, AnswersCorrects, qualification, idquiz, id]);

        res.status(200).json({message: 'Respuestas enviadas con exito'});

    } catch (error) {
        res.status(500).json('Ocurrio un error, '+ error);
    }
}

export const MyAnswers = async (req, res) =>{
    try {
        const id = req.user.id;
        
        const result = await sql.query('select * from qualification JOIN quiz ON quiz.id = qualification.idquiz where qualification.iduser = ?;',[id]);

        res.status(200).json(result[0]);
    } catch (error) {
        res.status(500).json({message:'Ocurrio un error, '+ error});        
    }
}

/*
    id VARCHAR(30) NOT NULL PRIMARY KEY,
    questions int NOT NULL,
    answers int NOT NULL,
    qualification FLOAT NOT NULL,
    idquiz VARCHAR(30) NOT NULL,
    iduser VARCHAR(30) NOT NULL,
 
*/