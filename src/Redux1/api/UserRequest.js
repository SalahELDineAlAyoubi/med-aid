import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });

export const getUsers = () => API.get("/user");
export const getUser = (userId) => API.get(`/user/${userId}`);
export const updateUser = (id, formData) => API.put(`/user/${id}`, formData);
