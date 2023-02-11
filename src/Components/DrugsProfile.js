import React, { useState, useEffect } from "react";
import "./DrugsProfile.css";
import medecines from "../tmpComponents/medecine.json";
import { fetchMedecines } from "../Redux/Medecines/medecineActions";
import { connect } from "react-redux";
//import axios from 'axios';

const DrugsProfile = ({ id }) => {
  // const item= medecines.find(item => item.id === id);

  //   useEffect(() => {
  //   fetchMedecines();
  //  }, []);

  return (
    <>
      {medecines.slice(0, 3).map((item) => (
        // <DrugsProfile key={item.id}/>
        <div className="ProfileDRugs">
          <div className="dateDrugs">
            posted on 9 feb 2023
          </div>
          <div className="profileCover">
            <div className="ProfileDRugsCover">
              <div className="profileInfo">
                <h4 className="profileDrugsInfo">{item.name}</h4>
                <span className="profileInfoDesc">{item.dosage}</span>
              </div>
            </div>

            <img className="profileDrugImg" src={item.image} />
          </div>
        </div>
      ))}
    </>
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
export default connect(mapStateToProps, mapDispatchToProps)(DrugsProfile);

// export default DrugsProfile;
