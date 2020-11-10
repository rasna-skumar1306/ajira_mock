import React from "react";
import "./footer.styles.css";
import {
  MailOutlined,
  PhoneOutlined,
  FacebookFilled,
  InstagramFilled,
  YoutubeFilled,
} from "@ant-design/icons";

const Footer = () => {
  const socialLogoStyles = {
    fontSize: "2.2rem",
    borderRadius: "100%",
  };

  return (
    <div className="footer">
      <ul className="footer__links">
        <li className="footer__link">About Us</li>
        <li className="footer__link">Delivery Information</li>
        <li className="footer__link">Returns & Exchange</li>
        <li className="footer__link">Technical & Privacy</li>
        <li className="footer__link">Order Status</li>
      </ul>
      <div>
        <div className="footer__logo">
          <li className="footer__logoItem">MADE UP</li>
        </div>
        <p>Stay in touch with us</p>
        <div className="footer__logoSocial">
          <FacebookFilled style={socialLogoStyles} />
          <InstagramFilled style={socialLogoStyles} />
          <YoutubeFilled style={socialLogoStyles} />
        </div>
      </div>
      <div className="footer__address">
        <h4 className="footer__addressHead">Our Corporate Office</h4>
        <p>
          No: 7,A2B road, Adayar Rajpuram, T-Nagar,
          <br /> Chennai - 642002.
        </p>
        <div className="footer__contacts">
          <p>
            <MailOutlined />
            <span className="footer__contactContent"> sales@derbymen.com</span>
          </p>
          <p>
            <PhoneOutlined />
            <span className="footer__contactContent"> 044 5566 6889</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
