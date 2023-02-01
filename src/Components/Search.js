/* import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchMedecines } from '../Redux/Medecines/medecineActions';
import DisplayCardsMed from './DisplayCardsMed';
    import medecines from "../tmpComponents/medecine.json";

const Search = (  { medData, fetchMedecines } ) => {
  const location = useLocation();
  const state = location.state;
  const serachItem = state.serachItem;
  const [medItems, setMedItems] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  let navigate = useNavigate();
  useEffect(() => {
    fetchMedecines();
    setMedItems(medecines);
    setSearchResults(medecines);
  }, []);

  const filteredItems = () => {
    if (serachItem == "") {
  return setSearchResults(medItems);
} else {
  const resultsArray = medItems.filter((item) =>
    item.name.toLocaleLowerCase().includes(serachItem.toLocaleLowerCase())
  );
  return setSearchResults(resultsArray);
} 
  };

  return <div>{<DisplayCardsMed medData={searchResults} />} </div>;
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
 */

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchMedecines } from "../Redux/Medecines/medecineActions";
import DisplayCardsMed from "./DisplayCardsMed";
import medecines from "../tmpComponents/medecine.json";

const Search = ({ medData, fetchMedecines }) => {
  // const location = useLocation();
  // const state = location.state;
  // const serachItem = state.serachItem;
  let navigate = useNavigate();

  const [medItems, setMedItems] = useState([]);
  const [searchResults, setSearchResults] = useState([]); 

  useEffect(() => {
    fetchMedecines();
    setMedItems(medecines);
    setSearchResults(medecines);
  }, []);

  const handleSubmit = (e) => e.preventDefault();

  const handleChangeSearch = (e) => {
  if (!e.target.value ) setSearchResults(medItems);
  else {
    const resultsArray = medItems.filter(
      (item) =>
        item.name.toUpperCase().includes(e.target.value.toUpperCase()) ||
        item.location.toUpperCase().includes(e.target.value.toUpperCase())
    );

    setSearchResults(resultsArray);
  }  
  
  navigate("/searchedItems", {
    state: {
      medData: searchResults,  
    },
  }); 
  

  };
  
  
 
  return (
    <div>
      <form onSubmit={handleSubmit} className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search..."
          aria-label="Search"
          onChange={handleChangeSearch}
        />
      </form> 
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
export default connect(mapStateToProps, mapDispatchToProps)(Search);
//export default Search
