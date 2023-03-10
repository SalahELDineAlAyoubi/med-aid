import React, { useEffect, useState } from "react";
import "./Sign.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../Redux1/actions/AuthAction";
import { useLocalStorage } from "react-use-storage";

export function SignUp(props) {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);
  const errorMessage = useSelector((state) => state.authReducer.errorMessage);
  const [islogin, setislogin, removeislogin] = useLocalStorage("islogin");

  const phoneRegex = /^([0-9]{2})[- .]?([0-9]{6})$/;
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpass: "",
    phone: "",
  });


  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setErrorMsg(""); // Set the error state to an empty string when the component is first rendered
  }, []);
 console.log("hiiii");
  useEffect(() => {
    return () => {
      dispatch({ type: "CLEAR_ERROR_MESSAGE" });  
    };
  }, [dispatch]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.name || !data.email || !data.password || !data.phone) {
      setErrorMsg("All fields are required");
    } else if (!emailRegex.test(data.email)) {
      setErrorMsg("Invalid email address");
    } else if (data.password.length < 8) {
      setErrorMsg("Password must be at least 8 characters");
    } else if (!phoneRegex.test(data.phone)) {
      setErrorMsg("Invalid Phone number ");
    } else if (data.password !== data.confirmpass) {
      setErrorMsg("Confirm Password is not same ");
    } else {
    setErrorMsg(" ");
 
  setislogin(true);

  dispatch(signUp(data));
  console.log(errorMsg);
 
    }
  };
useEffect(() => {
  setErrorMsg(errorMessage);
}, [errorMessage]);
  return (
    <div className="bodySign">
      <div className="containerSign">
        <div className="form-box">
          <div className="header-form">
            <div>
              <img src="https://img.icons8.com/external-parzival-1997-flat-parzival-1997/64/null/external-user-human-networking-parzival-1997-flat-parzival-1997.png" />{" "}
            </div>
            <div>
              <h4 className="WelcomeSign"> Welcome to our Family!</h4>
            </div>
          </div>

          <div className="body-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  name="confirmpass"
                  placeholder="Confirm Password"
                  value={data.confirmpass}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group mb-3">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                  value={data.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="btnGrp">
                <button
                  disabled={loading}
                  type="submit"
                  className="btn btn-secondary btn-block"
                >
                  {loading ? "Loading..." : "Sign Up"}
                </button>

                {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
              </div>
              <Link className="signUplink" to="/login">
                Already have an account? Log In
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

export default SignUp;
