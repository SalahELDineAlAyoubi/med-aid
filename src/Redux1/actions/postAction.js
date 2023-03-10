 import * as PostsApi from "../api/PostsRequests";

 export const getPosts = () => async (dispatch) => {
   dispatch({ type: "RETREIVING_START" });
   try {
     const { data } = await PostsApi.getPosts();
          //console.log("Action ko receive hoa hy ye : ", data);

     dispatch({ type: "RETREIVING_SUCCESS", data: data });
   } catch (error) {
     console.log(error);
     dispatch({ type: "RETREIVING_FAIL" });
   }
 };
 
 export const updatePost = (id, formData) => async (dispatch) => {
   dispatch({ type: "UPDATE_POST_START" });
   try {
     const { data } = await PostsApi.updatePost(id, formData);
     // console.log("Action ko receive hoa hy ye : ", data);
     dispatch({ type: "UPDATE_POST_SUCCESS", data: data });
   } catch (error) {
         console.log(error);

     dispatch({ type: "UPDATE_POST_FAIL" });
   }
 }; 
 

