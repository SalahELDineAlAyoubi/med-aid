import React, { useState, useEffect } from "react";
import "./DrugsProfile.css";
 import { connect, useDispatch, useSelector } from 'react-redux';
//import axios from 'axios';
 import { UilPen, UilTrash, UilTrashAlt } from "@iconscout/react-unicons";
import MedecineModal from "./Medecine Model/MedecineModel";
import { getPosts } from "../Redux1/actions/postAction";
import DeleteMedModal from "./DeleteMedModal/DeleteMedModal";
 
const DrugsProfile = () => {
    const [modalOpened, setModalOpened] = useState(false);
    const [modalDeleteOpened, setModalDeleteOpened] = useState(false);
  const { posts, loading } = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();
const {user} = useSelector((state) => state.authReducer.authData);
  const [selectedDrug, setSelectedDrug] = useState(null);
const [medDis, setMedDis] = useState([]);
   const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  // const item= medecines.find(item => item.id === id);
/*useEffect(() => {
  const fetchProfileUser = async () => {
    setMedDis(posts);
  };
  fetchProfileUser();
}, [posts]);*/
  useEffect(() => {
    dispatch(getPosts());
  }, []);

     useEffect(() => {
       const fetchProfileUser = async () => {
         setMedDis(posts);
       };
       fetchProfileUser();
     }, [posts]);
   

  const handleDrugSelect = (drug) => {
    setSelectedDrug(drug);
    
    setModalOpened(true);
  };
  const handleDelete = (drug) => {
 console.log(drug);
 setSelectedDrug(drug);
  setModalDeleteOpened(true);
  };
  return (
    <>
      {medDis
        .filter((post) => post.userId === user._id)
        .map((item, id) => (
          // <DrugsProfile key={item.id}/>
          <div className="ProfileDRugs" key={item._id}>
            <div className="profileCover">
              <div className="ProfileDRugsCover">
                <div className="profileInfo">
                  <div className="penMed">
                    <UilPen onClick={() => handleDrugSelect(item)} />

                    <UilTrashAlt
                      className="trash"
                      onClick={() => handleDelete(item)}
                    />
                    {selectedDrug && (
                      <DeleteMedModal
                        modalOpened={modalDeleteOpened}
                        setModalOpened={setModalDeleteOpened}
                        data={selectedDrug}
                      />
                    )}
                    {selectedDrug && (
                      <MedecineModal
                        modalOpened={modalOpened}
                        setModalOpened={setModalOpened}
                        data={selectedDrug}
                      />
                    )}
                  </div>
                  <h4 className="profileDrugsInfo">{item.name}</h4>
                  <span className="profileInfoDesc">{item.dosage}</span>
                </div>
              </div>

              <img
                className="profileDrugImg"
                src={item.image ? serverPublic + item.image : ""}
              />
            </div>
          </div>
        ))}
    </>
  );
};

 
  export default DrugsProfile;
