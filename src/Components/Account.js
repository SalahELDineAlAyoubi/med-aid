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
 
  const [name, setName] = useLocalStorage("name");
  const [number, setNumber] = useLocalStorage("number");
  const [activeTab, setActiveTab] = useState("available");
  const [modalOpened, setModalOpened] = useState(false);
   const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
const dispatch = useDispatch();
const params = useParams();
const profileUserId = params.id;
const [profileUser, setProfileUser] = useState({});
const { user } = useSelector((state) => state.authReducer.authData);
 
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
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">@{user.name}</h4>
              <span className="profileInfoDesc" style={{ color: "#999999" }}>
                +961 {user.phone}
              </span>
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
                      Available Drugs
                    </Link>
                  </li>
                  <li className="navDrugsLi">
                    <Link
                      to="#"
                      style={{ color: "#000", textDecoration: "none" }}
                      className={activeTab === "taken" ? "active" : ""}
                      onClick={() => setActiveTab("taken")}
                    >
                      Taken Drugs
                    </Link>
                  </li>
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
