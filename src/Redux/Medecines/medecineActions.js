import axios from "axios";
import * as actions from "./actionTypes";
  

export const fetchMedecinesRequest = () => {
  return {
    type: actions.FETCH_MEDECINES_REQUEST,
  };
};

export const fetchMedecinesSuccess = (medecines) => {
  return {
    type: actions.FETCH_MEDECINES_SUCCES,
    payload: medecines,
  };
};
export const fetchMedecinessFailure = (error) => {
  return {
    type: actions.FETCH_MEDECINES_FAILURE,
    payload: error,
  };
};

export const fetchMedecines = () => {
  return (dispatch) => {
    dispatch(fetchMedecinesRequest());
   
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const medecines = res.data;
        dispatch(fetchMedecinesSuccess(medecines));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchMedecinessFailure(errorMsg));
      });
  };
};
