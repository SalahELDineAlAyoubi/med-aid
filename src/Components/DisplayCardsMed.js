import { useState } from "react";
import { FaRegBookmark, FaInfoCircle} from "react-icons/fa";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import DisplayModel from "./Display Model/DisplayModel";
import "./DisplayCardsMed.css";
 

const DisplayCardsMed = ({ medData }) => {
  const [modalOpened, setModalOpened] = useState(false);

 //const { user } = useSelector((state) => state.authReducer.authData);
 
 

 
      
  
 
  const [available, setAvailable] = useState(false);

  const toggleAvailability = (id) => {
    setAvailable(medData.map(item => {
      if (item.id === id) {
        return { ...item, available: !item.available };
      }
      return item;
    }));
  };

  return (
    <div className="App0">
       <div className="App1">
        {   medData.map((item) => (
          <div key={item.id} className="medList">
            <div className="medCard">
              <div className="medUsername">  user.name </div>
              <div className="img">
                <img src={item.image} alt="med-img" className="medImage"></img>
                {available ? (
                  <div className="book">
                    feel free to book this for 24hrs!
                    <br />
                    <button
                      onClick={() => toggleAvailability(item.id)}
                      className="btn btn-outline-light"
                      style={{ width: "50%" }}
                    >
                      book now!
                    </button>
                  </div>
                ) : (
                  <div className="book">
                    <span style={{ color: "red" }}>Unavailable</span>
                    <br />
                  </div>
                )}
              </div>

              <FaRegBookmark className={"medCard__wishlist"} />
              <div  >
                <FaInfoCircle
                  onClick={() => setModalOpened(true)}
                  className={"medCard__info"}
                />
                <DisplayModel
                  modalOpened={modalOpened}
                  setModalOpened={setModalOpened}
                />
              </div>
              <div className="medCard__content">
                <h1 className="medName">{item.name}</h1>
                <div className="displayStack__1">
                  <div className="medLocation"> {item.location}</div>
                  <div className="medOpDate">
                    <span className="openExp">Op Date: </span>
                    {item.openDate}
                  </div>
                </div>
                <div className="displayStack__2">
                  <div className="medNumber"> {item.number}</div>
                  <div className="medExp">
                    <span className="openExp">Exp: </span>
                    {item.expDate}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div> 
    </div>
  );
};
 
 
 export default DisplayCardsMed;
