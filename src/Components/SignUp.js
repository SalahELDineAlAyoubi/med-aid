import React, { useState } from "react";
import './Sign.css';
//import axios from 'axios';

export function SignUp(props){
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState('');

    const phoneRegex =  /^\(?([0-9]{3})\)?[- .]?([0-9]{3})[- .]?([0-9]{4})$/;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !password || !phone) {
            setError('All fields are required');
          } else if (!emailRegex.test(email)) {
            setError('Invalid email address');
          } else if (password.length < 8) {
            setError('Password must be at least 8 characters');
          }else if (!phoneRegex.test(phone)) {
            setError('Password must be at least 8 characters');
          } else {
            // Clear the error message
            setError('');
        // try {
        //   await axios.post('', { name, email, password , phone);
        //   props.history.push('/login');
        // } catch (err) {
        //   setError(err.response.data.error);
        // }
          }
        
    };

    return(
        <div className="bodySign">
        <div className="containerSign">
            <div className="form-box"> 

                <div className="header-form">
                  <div> <img src="https://img.icons8.com/external-parzival-1997-flat-parzival-1997/64/null/external-user-human-networking-parzival-1997-flat-parzival-1997.png"/> </div> 
                  <div> <h4 className="WelcomeSign"> Welcome to our Family!</h4></div> 
                </div>

                <div className="body-form">
                    <form onSubmit={handleSubmit}>

                        <div className="form-group mb-3">
                            <input type="text" className="form-control" placeholder="Name" 
                             value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>

                        <div className="form-group mb-3">
                            <input type="text" className="form-control" placeholder="Email" 
                             value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="form-group mb-3">
                            <input type="password" className="form-control" placeholder="Password" 
                             value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>

                        <div className="form-group mb-3">
                            <input type="tel" className="form-control" placeholder="Phone Number"  
                             value={phone} onChange={(e) => setPhone(e.target.value)}/>
                        </div>

                        <div className="btnGrp">
                            <button type="submit" className="btn btn-secondary btn-block">Sign Up</button>
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                        </div>
                      
                        <div className="messageSign">
                            <div><input type="checkbox" /> Remember ME</div>
                            <div><a href="#">Forgot your password</a></div>
                        </div>

                    </form>

                    <div className="socialSign">
                        <a href="#"><img src="https://img.icons8.com/office/30/null/google-logo.png"/></a>
                    </div>

                </div>
            </div>
        </div>
        </div>
    )
}

export default SignUp;