import React from "react";
import "./footer.css";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="footer1">
        <h1>CONNECT WITH US</h1>
        <div className="social-media">
          <FaLinkedinIn className="icon-footer" />
          <FaTwitter className="icon-footer" />
          <FaFacebookF className="icon-footer" />
          <FaYoutube className="icon-footer" />
          <FaInstagram className="icon-footer" />
        </div>

        <p>© 2022 SGS SA</p>
      </div>
      <div className="footer2">
        <ul className="footer-list">
          <li>Terms and Conditions</li>
          <li>Terms of Access</li>
          <li>Privacy</li>
          <li>Cookies</li>
          <li>Office Directory</li>
          <li>Sitemap</li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
