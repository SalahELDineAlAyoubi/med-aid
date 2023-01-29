import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchMedecines } from '../Redux/Medecines/medecineActions';
import CardDisplay from './CardDisplay';

const Search = (  { medData, fetchMedecines } ) => {
  const location = useLocation();
  const state = location.state;
  const serachItem = state.serachItem;
  let navigate =useNavigate()
useEffect(() => {
       fetchMedecines ();
   
      }, []);

    const filteredItems = medData.medecines.filter((item,index) => {
      if (serachItem == "") {
       return item;
      } else if (item.name.toLocalLowerCase().startsWith(serachItem)) {
       return item ;
      }
   }); 

  return <div>{     console.log(medData.medecines)  
      
  
    } </div>;
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
export default connect(mapStateToProps, mapDispatchToProps)(Search);
//export default Search
