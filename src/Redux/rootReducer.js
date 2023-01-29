import { combineReducers } from "redux";
import MedecineReducer from "./Medecines/MedecineReducer"



export const rootReducer = combineReducers({
  medecine :MedecineReducer,
});
