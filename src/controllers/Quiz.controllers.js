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
        const ID = genID(30);
        const title = req.body.title;

        await sql.query('insert into quiz (id, title, iduser) values (?,?,?)',[ID, title, id]);

        res.status(200).json({message:'Quiz creado con exito', id:ID});
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
export const CreateQuestion = async (req, res) =>{
    try {
        const id = req.params.id;
        const question = req.body.question;

        const result = await sql.query('insert into question (question, idquiz) values (?,?)',[question, id]);

        res.status(200).json({message:'Pregunta creada con exito', id:result[0].insertId});
    } catch (error) {
        res.status(500).json({message:'Ocurrio un error, '+error});
    }
}
export const CreateOpcion = async (req, res) =>{
    try {
        const answer = req.body.answer;
        const qualification = req.body.qualification;
        const idquestion = req.params.id;

        const [valid] = await sql.query('select * from option where idquestion = ?',[req.params.id]);

        switch (valid.length) {
            case 0:
                    const A = 'A';
                    const [result1] = await sql.query('insert into option (option, answer, qualification, idquestion) values (?,?,?,?)',[A, answer, qualification, idquestion]);
                    
                    res.status(200).json({message:'Opcion creada con exito', id:result1.insertId});
                break;
            case 1:
                    const B = 'B';
                    const [result2] = await sql.query('insert into option (option, answer, qualification, idquestion) values (?,?,?,?)',[B, answer, qualification, idquestion]);
                    
                    res.status(200).json({message:'Opcion creada con exito', id:result2.insertId});
                break;
            case 2:
                    const C = 'C';
                    const [result3] = await sql.query('insert into option (option, answer, qualification, idquestion) values (?,?,?,?)',[C, answer, qualification, idquestion]);
                    
                    res.status(200).json({message:'Opcion creada con exito', id:result3.insertId});
                break;
            case 3:
                    const D = 'D';
                    const [result4] = await sql.query('insert into option (option, answer, qualification, idquestion) values (?,?,?,?)',[D, answer, qualification, idquestion]);
                    
                    res.status(200).json({message:'Opcion creada con exito', id:result4.insertId});
                break;
            default:
                res.status(400).json({message:'No se puede crear mas opciones'});
                break;
        }
    } catch (error) {
        res.status(500).json({message:'Ocurrio un error, '+error});   
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
        const idquestion = req.params.idquestion;
        const id = req.user.id;
        const ID = await genID(30);

        const option = req.body.option;
        const answer = req.body.answer;
        const qualification = req.body.qualification;

        const [result] = await sql.query('select * from answer where iduser = ? and idquestion = ?', [id, idquestion]);

        if(result.length > 0) return res.status(500).json({message: 'no puedes responder 2 veces la misma pregunta'});

        await sql.query('insert into answer (id, option, answer, qualification, idquiz, idquestion, iduser) values (?, ?, ?, ?, ?, ?, ?);',[ID, option, answer, qualification, idquiz, idquestion, id]);

        res.status(200).json({message: 'Tu respuesta a sido publicada', id: ID})
    } catch (error) {
        res.status(500).json('Ocurrio un error, '+ error);
    }
}
/*
CREATE TABLE answer(
    id VARCHAR(30) NOT NULL PRIMARY KEY,
    option VARCHAR(1) NOT NULL,
    answer VARCHAR(100) NOT NULL,
    qualification int NOT NULL,  
    idquiz VARCHAR(30) NOT NULL,
    idquestion int NOT NULL,
    iduser VARCHAR(30) NOT NULL,
    FOREIGN KEY(idquiz) REFERENCES quiz (id),
    FOREIGN KEY(idquestion) REFERENCES question (id),
    FOREIGN KEY(iduser) REFERENCES user (id)
);
*/