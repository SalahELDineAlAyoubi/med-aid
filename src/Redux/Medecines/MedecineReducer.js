    //import medecines from "../../tmpComponents/medecine.json"
import * as actions from "./actionTypes";

  
const initialState = {
  loading: false,
  medecines: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_MEDECINES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.FETCH_MEDECINES_SUCCES:
      return {
        ...state,
        loading: false,
        medecines: action.payload,
        error: "",
      };
    case actions.FETCH_MEDECINES_FAILURE:
      return {
        ...state,
        loading: false,
        medecines: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer; 