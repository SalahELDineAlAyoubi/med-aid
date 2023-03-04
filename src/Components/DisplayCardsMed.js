import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import AddMedModal from "./AddMedModal/AddMedModal";
import "./DisplayCardsMed.css";
 
import CardMed from "./CardMed/CardMed";
import { useEffect } from "react";
import { getUsers } from "../Redux1/actions/UserActions";
 
const DisplayCardsMed = ({ medData }) => {


  const [modalAddOpened, setModaladdOpened] = useState(false);

const user  = useSelector((state) => state.authReducer.authData);
  const {users, loading } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
 
  const navigate=useNavigate()
const handlelogin =() => {
  navigate("/login") 
}
 
useEffect(() => {
   dispatch(getUsers());
  
 
}, []); 

 


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
          <CardMed
            item={item}
            usero={users.filter((user) => user._id === item.userId)[0]}
            loading={loading}
          />
        ))}
      </div>
    </div>
  );
};

export default DisplayCardsMed;
