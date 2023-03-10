 import React, { useEffect, useState } from 'react'
     
 import {  useDispatch, useSelector } from 'react-redux';
 import DisplayCardsMed from './DisplayCardsMed';
import { getPosts } from '../Redux1/actions/postAction';
  
const DisplayAllCardsMed = ({ medData, fetchMedecines }) => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.postReducer);

 useEffect(() => {
   dispatch(getPosts());
 }, []);
 

  return (
    <div>
      {loading ? (
        <div style={{ background: "white" }}>
          <span style={{ color: "grey", fontSize: "60px" }}>Fetching</span>
          <div
            class="spinner-border"
            style={{
              width: "50px",
              height: "50px",
              fontSize: "20px",
              marginLeft: "10px",
              marginTop: "250px",
            }}
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <DisplayCardsMed medData={posts} />
      )}
    </div>
  );
};
 
 export default DisplayAllCardsMed; 