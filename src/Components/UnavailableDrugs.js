import React, { useState, useEffect } from "react";
import "./DrugsProfile.css";
  import {    useDispatch, useSelector } from "react-redux";
import { getPosts } from "../Redux1/actions/postAction";

const DrugsProfile = ({ id }) => {
     const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

     const { posts, loading } = useSelector((state) => state.postReducer);
     const dispatch = useDispatch();
    useEffect(() => {
  dispatch(getPosts());
}, []);
  return (
    <>
      {posts.slice(1, 3).map((item) => (
        <div className="ProfileDRugs">
          <div className="dateDrugs">posted on 23.04.2022</div>
          <div className="profileCover">
            <div className="ProfileDRugsCover">
              <div className="profileInfo">
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

 
export default  DrugsProfile 
