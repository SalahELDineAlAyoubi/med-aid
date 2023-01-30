import axios from "axios";
import React, { useState } from "react";
import "./Sign.css";
//import axios from 'axios';
import { useLocalStorage } from "react-use-storage";
import { useNavigate } from "react-router-dom";
export function Login(props) {
  const [islogin, setislogin, removeislogin] = useLocalStorage(
    "islogin",
    false
  );
  const [name, setName, removeName] = useLocalStorage("name", '');
  /*const [memberId, setMemberId, removeMemberId] = useLocalStorage( "MemberId",
  "");*/
  let navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post("/members/login", {
        email,
        password,
      })
      .then(function (response) {
        if (response.data.ok) 
        {setislogin(true);
       //setMemberId(response.data._id);
       setName(response.data.name)
         console.log(response);
         navigate("/account");}
      });

 
  };

  return (
    <div className="bodySign">
      <div className="containerSign">
        <div className="form-box">
          <div className="header-form">
            <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/null/external-user-internet-security-vitaliy-gorbachev-lineal-vitaly-gorbachev.png" />
          </div>

          <div className="body-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="btnGrp">
                <button type="submit" className="btn btn-secondary btn-block">
                  LOGIN
                </button>
                <a className="signUplink" href=".\SignUp">
                  don't have an account? Sign Up
                </a>
                {/* <button type="button" className="btn btn-secondary btn-block" onclick="link ='Components\SignUp.js'">SignUp</button> */}
              </div>

              <div className="messageSign">
                <div>
                  <input type="checkbox" /> Remember ME
                </div>
                <div>
                  <a href="#">Forgot your password</a>
                </div>
              </div>
            </form>

            <div className="socialSign">
              <a href="#">
                <img src="https://img.icons8.com/office/30/null/google-logo.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
