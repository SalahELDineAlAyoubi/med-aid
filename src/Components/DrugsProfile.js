import React, { useState ,useEffect} from "react";
import "./DrugsProfile.css";
import medecines from "../tmpComponents/medecine.json"
import { fetchMedecines } from '../Redux/Medecines/medecineActions';
import { connect } from 'react-redux';
import MedecineModal from "./Medecine Model/MedecineModel";
//import axios from 'axios';
 import { UilPen } from "@iconscout/react-unicons";

const DrugsProfile = ({id})=> {
  // const item= medecines.find(item => item.id === id);

  //   useEffect(() => {
  //   fetchMedecines();
  //  }, []);
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <>
      {medecines.slice(0, 3).map((item) => (
        // <DrugsProfile key={item.id}/>
        <div className="ProfileDRugs" key={item.id}>
          <div className="profileCover">
            <div className="ProfileDRugsCover">
              <div className="profileInfo">
                <div className="penMed">
                  <UilPen onClick={() => setModalOpened(true)} />

                  <MedecineModal
                    modalOpened={modalOpened}
                    setModalOpened={setModalOpened}
                  />
                </div>
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

}

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
