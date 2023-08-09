import axios from "./axios.js";

export const login = async (data) => axios.post("/login", data);

export const register = async (data) => axios.post("/register", data);

export const logout = async () => axios.post("/logout");

export const profile = async () => axios.get("/profile");