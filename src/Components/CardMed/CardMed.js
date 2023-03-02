import React from 'react'
  import { FaRegBookmark, FaInfoCircle } from "react-icons/fa";
import DisplayModel from "../Display Model/DisplayModel";
import { format } from "timeago.js";
import { useState } from "react";
import { useEffect } from 'react';
import { getUser } from '../../Redux1/api/UserRequest';
 
const CardMed = ({item}) => {
      const [modalOpened, setModalOpened] = useState(false);
const [available, setAvailable] = useState(true);
  const [userData, setUserData] = useState({});

/*
const toggleAvailability = (id) => {
  setAvailable(
    medData.map((item) => {
      if (item.id === id) {
        return { ...item, available: !item.available };
      }
      return item;
    })
  );
};*/
  useEffect(() => {
    const getUserData = async () => {
      try {
        const { data } = await getUser(item.userId);
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (item !== null) getUserData();
  }, []);
  return (
    <div className="medList">
      <div className="medCard">
        <div className="medUsername">{userData.name} </div>
        <div className="date"> {format(item.createdAt)}</div>
        <div className="img">
          <img
            src={
              item.image ? process.env.REACT_APP_PUBLIC_FOLDER + item.image : ""
            }
            alt="med-img"
            className="medImage"
          ></img>
          {available ? (
            <div className="book">
              feel free to book this for 24hrs!
              <br />
              <button
                //   onClick={() => toggleAvailability(item.id)}
                className="btn btn-outline-light"
                style={{ width: "50%" }}
              >
                book now!
              </button>
            </div>
          ) : (
            <div className="book">
              <span style={{ color: "red" }}>Unavailable</span>
              <br />
            </div>
          )}
        </div>

        <FaRegBookmark className={"medCard__wishlist"} />
        <div>
          <FaInfoCircle
            onClick={() => setModalOpened(true)}
            className={"medCard__info"}
          />
          <DisplayModel
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
        <div className="medCard__content">
          <h1 className="medName">{item.name}</h1>

          {available ? (
            <div className="state" style={{ color: "green" }}>
              Available
            </div>
          ) : (
            <div className="state" style={{ color: "red" }}>
              Unavailable
            </div>
          )}
          <div className="displayStack__1">
            <div className="medLocation"> {item.location}</div>
            <div className="medOpDate">
              <span className="openExp">Op Date: </span>
              {item.opendate}
            </div>
          </div>
          <div className="displayStack__2">
            <div className="medNumber"> {userData.phone}</div>
            <div className="medExp">
              <span className="openExp">Exp: </span>
              {item.expirydate}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardMed
