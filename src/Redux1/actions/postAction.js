 import * as PostsApi from "../api/PostsRequests";

 export const getPosts = (id) => async (dispatch) => {
   dispatch({ type: "RETREIVING_START" });
   try {
     const { data } = await PostsApi.getPosts();
     dispatch({ type: "RETREIVING_SUCCESS", data: data });
   } catch (error) {
     console.log(error);
     dispatch({ type: "RETREIVING_FAIL" });
   }
 };