import React, { useState, useEffect } from "react";
import { useLocalStorage } from "react-use-storage";
import DrugsProfile from "./DrugsProfile";
import UnavailableDrugs from "./UnavailableDrugs";
import "./Account.css";
import { Link } from "@mui/material";
 import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "./Profile Model/ProfileModel";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as UserApi from "../Redux1/api/UserRequest";

const Account = () => {
 

  const [activeTab, setActiveTab] = useState("available");
  const [modalOpened, setModalOpened] = useState(false);
   const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
const dispatch = useDispatch();
const params = useParams();
const profileUserId = params.id;
const [profileUser, setProfileUser] = useState({});
const { user } = useSelector((state) => state.authReducer.authData);
   useEffect(() => {
    const fetchProfileUser = async () => {
       setProfileUser(user);
    };
    fetchProfileUser();
  
   
    
  }, [user]);   
 
  return (
    <div className="bodyAccount">
      <div className="profile">
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <div className="pen">
                <UilPen onClick={() => setModalOpened(true)} />
                <ProfileModal
                  modalOpened={modalOpened}
                  setModalOpened={setModalOpened}
                  data={user}
                />
              </div>
              <img className="profileCoverImg" />
              <img
                className="profileUserImg"
                src={
                  user.profilePicture
                    ? serverPublic + user.profilePicture
                    : serverPublic + "defaultProfile.png"
                }
                alt="ProfileImage"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">@{profileUser.name}</h4>
              <div className="info" >
                <div className="profileInfoDesc" style={{ color: "#999999" }}>
                  +961 {profileUser.phone}
                </div>
                <div className="profileInfoDesc" style={{ color: "#999999" }}>
                  {profileUser.location}
                </div>
               
              </div>
            </div>
          </div>
          <div className="profileRightBottom">
            <div className="navDrugs">
              <nav>
                <ul className="navDrugsUl">
                  <li className="navDrugsLi">
                    <Link
                      to="#"
                      style={{ color: "#000", textDecoration: "none" }}
                      className={activeTab === "available" ? "active" : ""}
                      onClick={() => setActiveTab("available")}
                    >
                      My Medecines
                    </Link>
                  </li>
                  {/* <li className="navDrugsLi">
                    <Link
                      to="#"
                      style={{ color: "#000", textDecoration: "none" }}
                      className={activeTab === "taken" ? "active" : ""}
                      onClick={() => setActiveTab("taken")}
                    >
                      Saved Medecines
                    </Link>
                  </li> */}
                </ul>
              </nav>
              {activeTab === "available" && <DrugsProfile />}
              {activeTab === "taken" && <UnavailableDrugs />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Account;
