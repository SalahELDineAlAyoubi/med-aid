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
import { useLocalStorage } from "react-use-storage";
import { Button } from "@mui/material";

const Search = ({ medData, fetchMedecines }) => {
  // const location = useLocation();
  // const state = location.state;
  // const serachItem = state.serachItem;
  let navigate = useNavigate();

  const [medItems, setMedItems] = useState( []);
  const [searchResults, setSearchResults] = useLocalStorage("medecines");
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchMedecines();
    setMedItems(medecines);
    // setSearchResults(medecines);
    //setSearchTerm(searchTerm);
 
  }, []);

  const handleSubmit = (e) => e.preventDefault();
  const click = () =>  {
    if (!searchTerm) setSearchResults(medecines);
    else {
      const resultsArray = medecines.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.location.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setSearchResults(resultsArray);
    }

     navigate("/searchedItems", {
      state: {
        medData: searchResults,
      },
    }); 
  }

  const handleChangeSearch = (e) => {
     setSearchTerm(e.target.value);
 
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="d-flex">
        <Button onClick={click} variant="outlined" style={{marginRight:"5px"}}>
          Search
        </Button>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search..."
          aria-label="Search"
          value={searchTerm}
          onChange={handleChangeSearch}
        />{" "}
      </form>
      {console.log(searchResults)}{" "}
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
