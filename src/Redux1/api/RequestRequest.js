import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });

export const getRequests = () => API.get(`/request/`);
export const getBookedPost = (userId) => API.post(`/posts/mybookepost`, { userId });
 //export const deletePost = (id, userId) =>API.delete(`/posts/${id}`, { data: { userId } });
 
