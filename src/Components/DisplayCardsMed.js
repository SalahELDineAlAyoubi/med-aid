import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import AddMedModal from "./AddMedModal/AddMedModal";
import "./DisplayCardsMed.css";
 import "./Search.css";
import CardMed from "./CardMed/CardMed";
import { useEffect } from "react";
import { getUsers } from "../Redux1/actions/UserActions";
//import Search from "./Search";
import { searchPosts } from "../Redux1/api/PostsRequests";
 
const DisplayCardsMed = ({ medData }) => {
const [searchTerm, setSearchTerm] = useState("");
 
 
  const [modalAddOpened, setModaladdOpened] = useState(false);
  const [dispalyedItems, setDispalyedItems] = useState(medData);

const user  = useSelector((state) => state.authReducer.authData);
  const {users, loading } = useSelector((state) => state.userReducer) ;
  const dispatch = useDispatch();
 
  const navigate=useNavigate()
const handlelogin =() => {
  navigate("/login") 
}
 
useEffect(() => {
   dispatch(getUsers());
   

}, []); 

   
 const handleSubmitSearch = async (e) => {

 e.preventDefault();
   console.log(searchTerm);
   const searchTermMed = await searchPosts(searchTerm);
   console.log(searchTermMed.data);
   setDispalyedItems(searchTermMed.data);
     console.log(dispalyedItems);
       // console.log(medData);
      
 };

 const handleChangeSearch = (event) => {
   setSearchTerm(event.target.value);
 };


  return (
    <div className="App0">
      <div className="firstrow ">
        <div className="row dis">
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
          <div className=" col-11  col-md-4 search mx-auto ">
            {/* <Search medData={medData} /> */}

            <form className="example" onSubmit={handleSubmitSearch}>
              <input
                type="text"
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search.."
                name="search"
              />
              <button className="btn btn-info" type="submit">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
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
        {dispalyedItems.map(
          (item) => (
             
             
              <CardMed
                item={item}
                usero={users.filter((user) => user._id === item.userId)[0]}
                loading={loading}
              /> 
          
          )
        )}
      </div>
    </div>
  );
};

export default DisplayCardsMed;
