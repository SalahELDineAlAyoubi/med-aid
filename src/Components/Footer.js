import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer style={{ backgroundColor: "rgb(242, 242, 253)" }}><br></br>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h4>About Us</h4>
                        <p>Learn more about our company and our mission.</p>
                        <Link to="/about" className="btn btn-primary">Learn More</Link>
                    </div>
                    <div className="col-md-4">
                        <h4>Contact Us</h4>
                        <p>Have a question or want to work with us?</p>
                        <Link to="/contact" className="btn btn-primary" >Contact Us</Link>
                    </div>
                    <div className="col-md-4">
                        <h4>Social Media</h4>
                        <p>Follow us on social media to stay updated.</p>
                        <div className="social-icons">
                            <a href="#">
                                Facebook
                            </a><br></br>
                            <a href="#">
                                Twitter
                            </a><br></br>
                            <a href="#">
                                Instagram
                            </a>
                        </div>
                    </div>
                </div><br></br>
                <p className="copyright">Copyright © {new Date().getFullYear()} All Rights Reserved | MedAid</p>
            </div><br></br>
        </footer>
    );
}

export default Footer;
