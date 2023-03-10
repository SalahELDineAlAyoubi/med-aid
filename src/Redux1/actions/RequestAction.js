import * as RequestsApi from "../api/RequestRequest";

export const getRequests = () => async (dispatch) => {
  dispatch({ type: "RETREIVING_REQUEST_START" });
  try {
    const { data } = await RequestsApi.getRequests();
    console.log("Action ko receive hoa hy ye : ", data);

    dispatch({ type: "RETREIVING_REQUEST_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "RETREIVING_REQUEST_FAIL" });
  }
};


export const getBookedPost = (userId) => async (dispatch) => {
  dispatch({ type: "RETREIVING_ALL_START" });
  try {
    const { data } = await RequestsApi.getBookedPost(userId);
    console.log("Action ko receive hoa hy ye : ", data);

    dispatch({ type: "RETREIVING_ALL_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "RETREIVING_ALL_FAIL" });
  }
};

 

/*
 export const deletePost = (id, userId) => async (dispatch) => {
   dispatch({ type: "DELETE_POST_START" });
   try {
     await PostsApi.deletePost(id, { userId: userId });
     dispatch({ type: "DELETE_POST_SUCCESS", payload: id });
   } catch (error) {
     dispatch({ type: "DELETE_POST_FAIL" });
   }
 };
*/
