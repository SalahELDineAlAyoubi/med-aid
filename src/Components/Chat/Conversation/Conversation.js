  import React, { useEffect, useState } from 'react'
import { getUser } from '../../../Redux1/api/UserRequest';
import "../Chat.css";

const Conversation = ({ data, currentUser, online }) => {
  const [userData, setUserData] = useState(null);
 
  useEffect(() => {
    const userId = data.members.find((id) => id !== currentUser); //li manou id tab3i bikounn id lal sender
 
      
      const getUserData = async () => {
      try {
        const { data } = await getUser(userId);
 setUserData(data); 
       } catch (error) {
        console.log(error);
      }
    };

    getUserData();
  }, []);
  return (
    <>
      <div className="users conversation">
        <div className="usser">
          <div className="imginfo">
            <img
              src={
                userData?.profilePicture
                  ? process.env.REACT_APP_PUBLIC_FOLDER +
                    userData.profilePicture
                  : process.env.REACT_APP_PUBLIC_FOLDER + "defaultProfile.png"
              }
              alt="Profile"
              className="userImage"
              style={{ width: "50px", height: "50px" }}
            /> 
            {online && <div className="online-dot"></div>}
          </div>
          <div
            className="name"
            style={{
              fontSize: "0.8rem",
              fontWeight: "600",
              fontFamily: "sans-serif",
            }}
          >
            <div>{userData?.name}</div>
            <div style={{ color: online ? "#51e200" : "" }}>
              {online ? "Online" : "Offline"}
            </div>
          </div>
        </div>
      </div>
      <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
    </>
  );
};

export default Conversation;
