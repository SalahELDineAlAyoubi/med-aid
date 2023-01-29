import React, { useEffect, useState } from 'react'
   import medecines from "../tmpComponents/medecine.json"
import { FaRegBookmark, FaInfoCircle } from "react-icons/fa";
  import "./CardDisplay.css";
//import axios from 'axios';
 
import { fetchMedecines } from '../Redux/Medecines/medecineActions';
import { connect } from 'react-redux';
  
const CardDisplay = ({ medData, fetchMedecines }) => {
   useEffect(() => {
   fetchMedecines();
  }, []);
  return (
    <div className="App0">
      <div className="App1">
        {medecines.map((item) => (
          <div key={item.id} className="medList">
            <div className="medCard">
              <div className="img">
                <img src={item.image} alt="med-img" className="medImage"></img>
              </div>

              <FaRegBookmark className={"medCard__wishlist"} />

              <FaInfoCircle className={"medCard__info"} />

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
const mapStateToProps = (state) => {
  return {
    medData: state.medecine,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMedecines: () => dispatch(fetchMedecines()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CardDisplay);
//export default  CardDisplay 