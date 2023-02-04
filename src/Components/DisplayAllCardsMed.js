 import React, { useEffect, useState } from 'react'
   import medecines from "../tmpComponents/medecine.json"
    
import { fetchMedecines } from '../Redux/Medecines/medecineActions';
import { connect } from 'react-redux';
 import DisplayCardsMed from './DisplayCardsMed';
  
const DisplayAllCardsMed = ({ medData, fetchMedecines }) => {
  useEffect(() => {
    fetchMedecines();
  }, []);

  return (
    <div>
      <DisplayCardsMed medData={medecines} />
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
export default connect(mapStateToProps, mapDispatchToProps)(DisplayAllCardsMed);
//export default  CardDisplay 