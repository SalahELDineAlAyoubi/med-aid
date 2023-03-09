 

// import React, { useEffect, useState } from "react";
// import { connect } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";
//  import DisplayCardsMed from "./DisplayCardsMed";
  import  "./Search.css";
//  import { useLocalStorage } from "react-use-storage";
// import { Button } from "@mui/material";
// import { searchPosts } from "../Redux1/api/PostsRequests";

// const Search = ({ medData, fetchMedecines }) => {
//   // const location = useLocation();
//   // const state = location.state;
//   // const serachItem = state.serachItem;
//   let navigate = useNavigate();

 
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState(null);

//    useEffect(() => {
//     /*if (!searchResults) setSearchResults(medData);
//     else {
//       console.log(searchTerm);

//       const resultsArray = medData.filter((item) =>
//         item.name.toLowerCase().startsWith(searchTerm.toLowerCase())
//       );

//       setSearchResults(resultsArray);
//       console.log(searchResults);
//       navigate("/searchedItems", {
//         state: {
//           medData: searchResults,
//         },
//       }) ;
//     }*/
//   }, [searchTerm]);

  
//  const handleSubmitSearch = async (e) => {
//    e.preventDefault();
//    console.log(searchTerm);
//    const searchTermMed = await searchPosts(searchTerm);
//     console.log(searchTermMed.data);
//   setSearchResults(searchTermMed.data);
//   navigate("/searchedItems", {
//         state: {
//           medData: searchTermMed.data,
//         },  })
//  };

//   const handleChangeSearch =  (event) => {
//     setSearchTerm(event.target.value);
 
    
//   };

//   return (
//     <div>
//       {/* <input
//           className="form-control me-2"
//           type="search"
//           placeholder="Search..."
           
           
//           onChange={handleChangeSearch}
//         /> */}
//       <form className="example" onSubmit={handleSubmitSearch}>
//         <input
//           type="text"
//           onChange={(e) => setSearchTerm(e.target.value)}
//           placeholder="Search.."
//           name="search"
//         />
//         <button className="btn btn-info" type="submit">
//           <i className="fa fa-search"></i>
//         </button>
//       </form>
//     </div>
//   );
// };

 
//  export default Search
 