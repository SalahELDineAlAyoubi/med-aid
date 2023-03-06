import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import AddMedModal from "./AddMedModal/AddMedModal";
import "./DisplayCardsMed.css";
 
import CardMed from "./CardMed/CardMed";
import { useEffect } from "react";
import { getUsers } from "../Redux1/actions/UserActions";
import Search from "./Search";
 
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
      <div className="firstrow ">
        <div className="row dis">
          <div className=" col-11  col-md-4 search mx-auto ">
            <Search medData={medData} />
          </div>

          {user ? (
            <div className=" col-11   col-md-4 mx-auto ">
              <button
                title="Request what you need "
                className="btn btn-info addMedbtn "
                type="button"
              >
                Request medecine
              </button>
            </div>
          ) : (
            <div className=" col-11   col-md-4 mx-auto ">
              <button
                onClick={handlelogin}
                title="Login is required to Request medecine "
                className="btn btn-info addMedbtn "
                type="button"
              >
                Login to Request medecine
              </button>
            </div>
          )}
          {user ? (
            <div className="  col-11   col-md-4 mx-auto">
              <button
                title="Add your unused medecine "
                className="btn btn-info addMedbtn"
                type="button"
                onClick={() => setModaladdOpened(true)}
              >
                Add medecine
              </button>

              <AddMedModal
                modalOpened={modalAddOpened}
                setModalOpened={setModaladdOpened}
              />
            </div>
          ) : (
            <div className="  col-11   col-md-4 mx-auto">
              <button
                onClick={handlelogin}
                className="btn btn-info addMedbtn"
                type="button"
                title="Login to add your unused medecine"
              >
                Login to add your unused medecine
              </button>
            </div>
          )}
        </div>
      </div>
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
