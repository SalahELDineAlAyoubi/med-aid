 import * as PostsApi from "../api/PostsRequests";

 export const getPosts = (id) => async (dispatch) => {
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