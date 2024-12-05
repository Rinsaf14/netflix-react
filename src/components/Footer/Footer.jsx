/* eslint-disable no-unused-vars */
import React from "react";
import "./Footer.css";
import facebook_icon from "../../assets/assets/facebook_icon.png";
import youtube_icon from "../../assets/assets/youtube_icon.png";
import twitter_icon from "../../assets/assets/twitter_icon.png";
import instagram_icon from "../../assets/assets/instagram_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={youtube_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={instagram_icon} alt="" />
      </div>
      <ul className="footer-list">
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Term of User</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Prefrences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright-text">© 1997-2022 Netflix, Inc</p>
    </div>
  );
};

export default Footer;