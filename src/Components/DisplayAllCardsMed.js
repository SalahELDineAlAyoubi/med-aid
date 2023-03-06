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
        <span style={{color:"grey",fontSize:'80px'}}>Fetching Medecines...</span>
      ) : (
        <DisplayCardsMed medData={posts} />
      )}
    </div>
  );
};
 
 export default DisplayAllCardsMed; 