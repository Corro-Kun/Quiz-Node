import axios from "./axios.js";

export const login = async (data) => axios.post("/login", data);
