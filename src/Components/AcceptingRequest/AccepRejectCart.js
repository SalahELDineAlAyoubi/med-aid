import React, { useEffect, useState } from 'react'
import { Button, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../Redux1/actions/UserActions';
import DisplayModel from '../Display Model/DisplayModel';
import AcceptModal from './AcceptModal';
import "./AcceptRejectCart.css"


const AccepRejectCart = ({item}) => {
  const [modalOpened, setModalOpened] = useState(false);
  const [acceptModalOpened, setAcceptModalOpened] = useState(false);
  const { user } = useSelector((state) => state.authReducer.authData) || {};
const { users, loading } = useSelector((state) => state.userReducer);
const dispatch = useDispatch();
useEffect(() => {
  dispatch(getUsers());
}, []); 

const handleDisplay = () => {
  setModalOpened(true);
};
const handleAccept =()=> {
    setAcceptModalOpened(true);
}
const handleReject =()=> {
  
}

    
  return (
    <div className="row product">
      <div className="col-md-2">
        <img
          src={
            item.image ? process.env.REACT_APP_PUBLIC_FOLDER + item.image : ""
          }
          height="150"
        />
      </div>
      <div className="col-md-6 product-detail">
        <div className="nameofbookpers">
          {users.filter((user) => user._id === item.userIdBook)[0].name}
        </div>
        <div>has booked this medicine. Will you accept giving it to him?</div>
      </div>
      <div className="col-md-4">
        <div className="row butotons">
          <div className="col-md-4">
            <Button
              variant="outline-primary "
              size="sm"
              onClick={handleDisplay}
            >
              Display
            </Button>
            <DisplayModel
              setModalOpened={setModalOpened}
              modalOpened={modalOpened}
              item={item}
            />
          </div>
          <div className="col-md-4">
            <Button variant="outline-success " size="sm" onClick={handleAccept}>
              Accept
            </Button>
            <AcceptModal
              setModalOpened={setAcceptModalOpened}
              modalOpened={acceptModalOpened}
              item={item}
              user={user}
            />
          </div>
          <div className="col-md-4">
            <Button variant="outline-danger" size="sm" onClick={handleReject}>
              Reject
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccepRejectCart
