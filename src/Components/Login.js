import axios from "axios";
import React, { useState } from "react";
import "./Sign.css";
//import axios from 'axios';
//import { useLocalStorage } from "react-use-storage";
import { Link, useNavigate } from "react-router-dom";
import { logIn } from "../Redux1/actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";

export function Login(props) {
  let navigate = useNavigate();
      const dispatch = useDispatch();
const loading = useSelector((state) => state.authReducer.loading);

  /* const [islogin, setislogin, removeislogin] = useLocalStorage(
    "islogin",
    false
  );*/
  //const [name, setName, removeName] = useLocalStorage("name", '');
  //const [number, setNumber, removeNumber] = useLocalStorage("number", "");
  //const [_uviid, set_uviid, remove_uviid] = useLocalStorage("_uviid", "");

  /*const [memberId, setMemberId, removeMemberId] = useLocalStorage( "MemberId",
  "");*/
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const user = useSelector((state) => state.authReducer.authData);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

const handleChange = (e) => {
  setData({ ...data, [e.target.name]: e.target.value });
};

  const handleSubmit = async (e) => {
    e.preventDefault();
     if (  !data.email || !data.password  ) {
       setError("All fields are required");
     }  else {
      dispatch(logIn(data));
      
     }
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
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your Password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                />
              </div>

              <div className="btnGrp">
                <button disabled={loading} type="submit" className="btn btn-secondary btn-block">
                  {loading ? "Loading..." : "LOGIN"}
                </button>
                {error && <p style={{ color: "red" }}>{error}</p>}

                {/* <button type="button" className="btn btn-secondary btn-block" onclick="link ='Components\SignUp.js'">SignUp</button> */}
              </div>
              <Link className="signUplink" to="/signUp">
                don't have an account? Sign Up
              </Link>
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
