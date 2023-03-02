import React, { useState, useEffect } from "react";
import "./DrugsProfile.css";
import medecines from "../tmpComponents/medecine.json"
import { fetchMedecines } from '../Redux/Medecines/medecineActions';
import { connect, useDispatch, useSelector } from 'react-redux';
//import axios from 'axios';
 import { UilPen } from "@iconscout/react-unicons";
import MedecineModal from "./Medecine Model/MedecineModel";
import { getPosts } from "../Redux1/actions/postAction";
 
const DrugsProfile = ({ id }) => {
    const [modalOpened, setModalOpened] = useState(false);
  const { posts, loading } = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();
const {user} = useSelector((state) => state.authReducer.authData);

  // const item= medecines.find(item => item.id === id);

     useEffect(() => {
    dispatch(getPosts());

     }, []);

  return (
    <>
      {posts
        .filter((post) => post.userId === user._id)
        .map(
          (item) => (
             (
              // <DrugsProfile key={item.id}/>
              <div className="ProfileDRugs" key={item._id}>
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

                  <img
                    className="profileDrugImg"
                    src={
                      item.image
                        ? process.env.REACT_APP_PUBLIC_FOLDER + item.image
                        : ""
                    }
                  />
                </div>
              </div>
            )
          )
        )}
    </>
  );
};

 
  export default DrugsProfile;
