import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });
 

export const getPosts = () => API.get(`/posts/`);
export const updatePost = (id, formData) => API.put(`/posts/${id}`, formData);
export const deletePost = (id, userId) => API.delete(`/posts/${id}`,{data:{userId}});
export const bookMed = (id, userId) =>API.put(`/posts/book/${id}`,  userId );

