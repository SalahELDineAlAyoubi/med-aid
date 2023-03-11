import * as UserApi from "../api/UserRequest";

export const updateUser = (id, formData) => async (dispatch) => {
  dispatch({ type: "UPDATING_START" });
  try {
    const { data } = await UserApi.updateUser(id, formData);
    //console.log("Action ko receive hoa hy ye : ", data);
    dispatch({ type: "UPDATING_SUCCESS", data: data });
  } catch (error) {
    dispatch({ type: "UPDATING_FAIL" });
  }
};
 
 
 
export const getUsers = () => async (dispatch) => {
  dispatch({ type: "GETING_START" });
  try {
    const { data } = await UserApi.getUsers();
    //console.log("Users Action : ", data);
    dispatch({ type: "GETING_SUCCESS", data: data });
  } catch (error) {
    dispatch({ type: "GETING_FAIL" });
        console.log("Faillll" );

  }
};
 