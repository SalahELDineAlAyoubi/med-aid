import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import AddMedModal from "./AddMedModal/AddMedModal";
import "./DisplayCardsMed.css";
 
import CardMed from "./CardMed/CardMed";

const DisplayCardsMed = ({ medData }) => {

  const [modalAddOpened, setModaladdOpened] = useState(false);

const user  = useSelector((state) => state.authReducer.authData);
 
 

 
      
  
 
  
  const navigate=useNavigate()
const handlelogin =() => {
  navigate("/login")
}
  return (
    <div className="App0">
      {user ? (
        <div className="d-grid gap-2 col-6 mx-auto">
          <button
            className="btn btn-info addMedbtn"
            type="button"
            onClick={() => setModaladdOpened(true)}
          >
            Add your unused medecine
          </button>
          <AddMedModal
            modalOpened={modalAddOpened}
            setModalOpened={setModaladdOpened}
          />
        </div>
      ) : (
        <div className="d-grid gap-2 col-6 mx-auto">
          <button
            onClick={handlelogin}
            className="btn btn-info addMedbtn"
            type="button"
          >
            Login to add your unused medecine
          </button>
        </div>
      )}

      <div className="App1">
        {medData.map((item) => (
          <CardMed item={item} />
        ))}
      </div>
    </div>
  );
};
 
 
 export default DisplayCardsMed;
