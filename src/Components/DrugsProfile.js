import React, { useState ,useEffect} from "react";
import "./DrugsProfile.css";
// import medecines from "../tmpComponents/medecine.json"
// import { fetchMedecines } from '../Redux/Medecines/medecineActions';
// import { connect } from 'react-redux';
//import axios from 'axios';

const DrugsProfile = ({id})=> {
  // const item= medecines.find(item => item.id === id);

  //   useEffect(() => {
  //   fetchMedecines();
  //  }, []);

  return (
    <div className="ProfileDRugs">
      <div className="profileCover">
        <div className="ProfileDRugsCover">
          <div className="profileInfo">
            <h4 className="profileDrugsInfo">
              Medication
              {/* {item.name} */}
            </h4>
            <span className="profileInfoDesc">
              dosage
              {/* {item.dosage} */}
            </span>
          </div>
        </div>

        <img className="profileDrugImg" 
        // src={item.image}
        />
      </div>
    </div>
  );
}

export default DrugsProfile;
