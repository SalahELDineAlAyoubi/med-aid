// import React, { useState, useEffect } from "react";
// import "./DrugsProfile.css";
// import medecines from "../tmpComponents/medecine.json";
// import { fetchMedecines } from "../Redux/Medecines/medecineActions";
// import { connect } from "react-redux";
// //import axios from 'axios';

// const DrugsProfile = ({ id }) => {
//   return (
//     <>
//       {medecines.slice(1, 3).map((item) => (
//         // <DrugsProfile key={item.id}/>
//         <div className="ProfileDRugs">
//           <div className="dateDrugs">
//             posted on 23.04.2022
//             {/* {item.date} */}
//           </div>
//           <div className="profileCover">
//             <div className="ProfileDRugsCover">
//               <div className="profileInfo">
//                 <h4 className="profileDrugsInfo">{item.name}</h4>
//                 <span className="profileInfoDesc">{item.dosage}</span>
//               </div>
//             </div>

//             <img className="profileDrugImg" src={item.image} />
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     medData: state.medecine,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchMedecines: () => dispatch(fetchMedecines()),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(DrugsProfile);
