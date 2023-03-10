import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });
 

export const getPosts = () => API.get(`/posts/`) ;
export const getPost = (id) => API.get(`/posts/${id}`); ;
export const updatePost = (id, formData) => API.put(`/posts/${id}`, formData);
//export const getBookedPost = (userId) => API.post(`/posts/mybookepost`,  { userId } );
export const searchPosts = ( searchTermMed) => API.post(`/posts/filter`, { searchTermMed });
export const deletePost = (id, userId) => API.delete(`/posts/${id}`,{data:{userId}});
export const bookMed = (id, userId) =>API.put(`/posts/book/${id}`,  {userId}  );
export const unbookMed = (id, userId) =>API.put(`/posts/unbook/${id}`,  {userId}  );

