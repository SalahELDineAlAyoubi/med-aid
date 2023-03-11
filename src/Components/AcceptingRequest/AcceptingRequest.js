import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBookedPost } from '../../Redux1/actions/RequestAction';
import AccepRejectCart from './AccepRejectCart';
 import './AcceptingRequest.css'
const AcceptingRequest = () => {
  const { user } = useSelector((state) => state.authReducer.authData) || {};
  const { myRequests, getting } = useSelector((state) => state.requestReducer);

  const dispatch = useDispatch();

  useEffect(() => {
 
     dispatch(getBookedPost(user._id));
    // console.log(myRequests);
  }, []);

  return (
    <div className="backgroung">
      {getting && myRequests && (
        <div>
          <span style={{ color: "grey", fontSize: "80px" }}></span>
          <div
            class="spinner-border"
            style={{
              width: "50px",
              height: "50px",
              fontSize: "20px",
              marginLeft: "10px",
              marginTop: "200px",
            }}
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {!getting &&
        myRequests &&
        myRequests.map((item) => <AccepRejectCart key={item._id} item={item} />)}
      {!getting && myRequests.length === 0 && (
        <div className="noRequest">No requests !</div>
      )}
    </div>
  );
}

export default AcceptingRequest
