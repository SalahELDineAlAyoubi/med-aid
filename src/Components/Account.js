import React , { useState ,useEffect} from 'react';
import DrugsProfile from "./DrugsProfile";
import medecines from "../tmpComponents/medecine.json";
import { fetchMedecines } from '../Redux/Medecines/medecineActions';
import { useLocalStorage } from "react-use-storage";
//import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import "./Account.css";
import axios from 'axios';

const Account = () => {

  const [name, setName] = useLocalStorage("name");
  const [phone, setPhone]=  useState(null);
  //let history = useHistory();

  useEffect(() => {
    fetchMedecines();
    axios.get(`/members`)
      .then(res => setPhone(res.phone))
      .catch(error => console.error(error));
   }, []);

 

  // const handleClick = () => {
  //   history.push('../details.js');
  // };

  return (
    <div className="bodyAccount">
      <div className="profile">
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" />
              <img
                className="profileUserImg"
                src="https://img.icons8.com/stickers/100/null/user-male-circle.png"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">
                {name}
              </h4>
              <span className="profileInfoDesc">
                {phone}
              </span>
            </div>
          </div>
          <div className="profileRightBottom">
            {medecines.slice(0, 3).map((item) => (
              // <DrugsProfile key={item.id}/>
              <div className="ProfileDRugs">
                <div className="profileCover" 
                  // onClick={handleClick}
                >
                  <div className="ProfileDRugsCover">
                    <div className="profileInfo">
                      <h4 className="profileDrugsInfo">
                        {item.name}
                      </h4>
                      <span className="profileInfoDesc">
                        {item.dosage}
                      </span>
                    </div>
                  </div>

                  <img
                    className="profileDrugImg"
                    src={item.image}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Account);
{/* export default Account; */}
