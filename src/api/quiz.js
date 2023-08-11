import axios from "./axios.js";

export const getQuizzes = async () => axios.get("/quiz");

export const getQuiz = async (id) => axios.get(`/quiz/${id}`);