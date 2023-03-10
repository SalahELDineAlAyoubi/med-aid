import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRequests } from '../../Redux1/actions/RequestAction';
import RequestPost from '../RequestPost/RequestPost';
   

const RequestsMedecines = () => {
      const { requests, loading } = useSelector(
        (state) => state.requestReducer
      );
  const dispatch = useDispatch();

   useEffect(() => {
     dispatch(getRequests());
   }, []);
 
  return (
    <div style={{ background: "white" }}>
      <div className="row" style={{ marginLeft: "10px" }}>
        {requests.map((req) => (
          <div
            className="col-12 col-sm-6 col-md-4  col-lg-3   "
            style={{ marginTop: "10px" }}
            key={req._id}
          >
            {console.log(req)}
            <RequestPost item={req} loading={loading} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RequestsMedecines
