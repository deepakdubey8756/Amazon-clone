import React from "react";
import "./Footer.css";
import {  useNavigate, useLocation } from "react-router-dom";
function Footer() {
  const location = useLocation();
  const navigation = useNavigate();
  const handleLogo = () =>{
        navigation("/");
  }
  return  (
    <div className="footer">
      {/* ********************************footer top **************************************/}
      <div className="footer-top">
          <div className="footer-top-options">
              
              <div className="footer-top-heading">
                  Get To Know Us
              </div>
              <div className="footer-top-rest">
                <a href="/">About Us</a>
              </div>
              <div className="footer-top-rest">
              <a href="/">Careers</a>
              </div>
              <div className="footer-top-rest">
              <a href="/">Press Releases</a>
              </div>
              <div className="footer-top-rest">
              <a href="/">Amazon Cares</a>
              </div>
              <div className="footer-top-rest">
              <a href="/">Gift a smile</a>
              </div>
              </div>

              <div className="footer-top-options">

              <div className="footer-top-heading">
                  Connect With Us
              </div>
              <div className="footer-top-rest">
              <a href="/">Facebook</a>
              </div>
              <div className="footer-top-rest">
              <a href="/">Twitter</a>
              </div>
              <div className="footer-top-rest">
              <a href="/">Instagram</a>
              </div>
           
              </div>

              <div className="footer-top-options">
              <div className="footer-top-heading">
                  Make Money With Us
              </div>
              <div className="footer-top-rest">
              <a href="/">Sell on Amazon</a>
              </div>
              <div className="footer-top-rest">
              <a href="/">Sell under Amazon Accelerator</a>
              </div>
              <div className="footer-top-rest">
              <a href="/">Amazon Global Selling</a>
              </div>
              <div className="footer-top-rest">
              <a href="/">Become an Affiliate</a>
              </div>
              <div className="footer-top-rest">
              <a href="/">Advertise Your products</a>
              </div>
              <div className="footer-top-rest">
              <a href="/">Amazon pay Merchents</a>
          </div>
          </div>
      </div>

      {/***************************** footer bottom  ************************************/}
      <div
        className="footer-bottom"
      >
          <img
            src="https://www.doorwaysva.org/wp-content/uploads/2019/06/amazon-logo.png"
            className="header_logo"
            alt="amazon logo"
            onClick={handleLogo}
          ></img>
           <div className="copyright-footer">
              &copy; 2022, Amazon.com, Inc or its affliates
        </div>
      </div>
    </div>
  )
}

export default Footer;
