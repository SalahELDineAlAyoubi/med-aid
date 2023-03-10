import React, { useEffect, useState } from "react";
import "./Sign.css";

import { Link } from "react-router-dom";
import { logIn } from "../Redux1/actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";
import { useLocalStorage } from "react-use-storage";

export function Login(props) {

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);
  const errorMessage = useSelector((state) => state.authReducer.errorMessage);

 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [islogin, setislogin, removeislogin] = useLocalStorage(
    "islogin",
    false
  );

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setError("");
  }, []);
  useEffect(() => {
    return () => {
      dispatch({ type: "CLEAR_ERROR_MESSAGE" }); // Clear the error message when the component unmounts
    };
  }, [dispatch]); // bas dispatch function tet8ayar mounted or unmounted components
  useEffect(() => {
    setError(errorMessage);
  }, [errorMessage]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.email || !data.password) {
      setError("All fields are required");
    } else {
      setislogin(true);
      setError("");

      dispatch(logIn(data));
      console.log(errorMessage);
      // setError(errorMessage);
    }
  };
  useEffect(() => {
    setError(errorMessage);
  }, [errorMessage]);
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
                <button
                  disabled={loading}
                  type="submit"
                  className="btn btn-secondary btn-block"
                >
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
