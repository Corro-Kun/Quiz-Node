import axios from "./axios.js";

export const getQuizzes = async () => axios.get("/quiz");