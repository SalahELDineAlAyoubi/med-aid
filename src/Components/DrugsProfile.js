import React, { useState, useEffect } from "react";
import "./DrugsProfile.css";
 import {  useDispatch, useSelector } from 'react-redux';
//import axios from 'axios';
 import { UilPen,  UilTrashAlt } from "@iconscout/react-unicons";
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
  const [available, setAvailable] = useState(true);
    const [data, setData] = useState(
      posts.filter((post) => post.userId === user._id)
    );

   

  useEffect(() => {
    dispatch(getPosts());
  }, []);


useEffect(() => {
//  console.log(selectedDrug);
}, [selectedDrug]);


     useEffect(() => {
       const fetchProfileUser = async () => {
         setMedDis(posts);
       };
       fetchProfileUser();
     }, [posts]);
   

  const handleDrugSelect =  (drug) => {
       setSelectedDrug(drug);
    // console.log(drug);
// console.log(selectedDrug);

    setModalOpened(true);
  };
  const handleDelete = (drug) => {

 setSelectedDrug(drug);
  setModalDeleteOpened(true);
   
  };
  const handleDeleteConfirm = async () => {
 

   dispatch(getPosts());
   setMedDis(posts);
   setSelectedDrug(null); // Reset selectedDrug state
  };
 
  return (
    <>
      {medDis
        .filter((post) => post.userId === user._id)
        .map((item) => (
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
                        handleDeleteConfirm={handleDeleteConfirm}
                      />
                    )}
                    {selectedDrug && (
                      <MedecineModal
                        modalOpened={modalOpened}
                        setModalOpened={setModalOpened}
                        data={selectedDrug}
                      />
                    )}
                    <div className="availableBox">
                      {user && item.taken == 0 && (
                        <img
                          style={{ cursor: "pointer" }}
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACdklEQVR4nO2WyWsUQRSHv2gQV4y4kXRVtYlgQDToyYOQiFGzqHHBi4fkIAoes+JMLdZBQUGjxslf4T8ZebPE2aeTzDAQfPCgu6q73lfvV6+q4L912yKDieOecqwrx4+yr6vAlPTRS0sjQ9qT157tpu7IyTe9iR4ZbBu8CmLfmbgeOaYck8rxseyT0iZ9kvZWQRPLnHK8rryrPFN7Cnwxcjr1zBvH1/rBpc3kOKc8Gy1mvDW+wRnjibsAnrVMgYcjF4znlSykdmlVK5xQns2mfZY3I57xmjbPZtvAxjFqPG+1o9BRU892GjleDWAci6nntvZsSXCBqMvK98aoOwwkkQntWM0StEbjiKqRwLGV5JkYyXFN0i/vdRlolCCNDMlCUZ6fewYIzEmd12ufWm4lnvkGWZotQm1ZVnlujH3grPYsaMu3rACyEM+XZprLVIZ/ONoI4Hc/ckngznDkpHHc155PGSHeSTW0hWi3Een6NDk+mzzTl9c4JUA6YFsOHLAVaClZSbHoLAuz7GvFtDebecVaDl6SYkGkEYlEqqq+BtmU54tyzCpLIptUcfOyJHQy3TnFv2SRjkUuFcvUMSrP0iZ9nf4/MID+p2PBBO6KZ90nugvgS2VnLI/38k93ASxzJvQRQDlmjedJ/wACM9rytH8Alhkd+gigHY+KdX/YAFYyDxh4qC3PMn9vWe4IwA4DynOz5dWqyo3jgfI8z5CpnJwRRI50Bqgy7biqA+/3DeBYlckAAxzEkojSniXt+V0DEJhWlhd1QQsCfcWR0m0brlxOy7clOaZVKAGUD6IlOZjotaWRocTzUg4i2YxkO5bzv+eBOcz2F+oqf+fil22mAAAAAElFTkSuQmCC"
                          title="Available"
                          alt="icon"
                        />
                      )}

                      {user && (item.taken ==1) && (
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABvUlEQVR4nO2WUUsbQRSFP41FY0sVLBWfmj4JEtE2Wq0U+9CHlr6kRlbpg6Big/n/P+DIkLNlWDebTXYXofXCgdmZ2Tln5s69d+DZajZBS7ArGAjujIH7Wk2TvxRcCEYTkIQ5Te78whjkkA88lsx9EoIlQVfw2wjtJY/tRkRtQT8i77vv3N/dWYnbgkPBTc7OQt+raPGYsJ9p/z2NssRrglPBnwK/Biz7ssV9KXGWPOBuGvGm4LvgfgpxiheVBQgWBO8FZyVJY7yp7AKNQ+irYDiHgIPKl1DjSe8Eq4Ijwe0MAq5NkDjU4tNIEfouPWcxT8DICJO2fbH2BFclRfxwNCRzJSI9nnxlASsWdFmwcCy67fyQTcXd3J2nVrD4rV2yahdlfZt1W3BHT7DhxBWwwTTT9CMe+pKuO0w33S51cesQMDJCbtgxyuaJWgWMHHaHs/xTt4Ce4NOzAD2hCz467P5fAR8Ex3UL+NWggH4ZAQuCzoRKNq+AxDVicg3IM8GW4GfBwvuCzwXj4VHToapp/NL5lpNy8wTcW/TbysRZE7wWfImKTijTJ24PLXKdpk3jB8eJC1GajtuNE/Mv2wMh9hQJBFvbKgAAAABJRU5ErkJggg=="
                          title="Booked!"
                          alt="icon"
                          style={{ cursor: "pointer" }}
                        />
                      )}
                    </div>
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
