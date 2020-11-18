import React from "react";
import "./footer.styles.css";
import {
  MailOutlined,
  PhoneOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
} from "@ant-design/icons"; //here I have imported only the icons from the ant design icons pack

import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../actions";

const Footer = () => {
  //the below is a style which is being applied to the social media logos in the footer
  const socialLogoStyles = {
    fontSize: "2.2rem",
    color: "#bbbbbb",
  };

  const dispatch = useDispatch();

  //changes the page
  const changePage = (e) => {
    const page = e.target.id;
    dispatch(setCurrentPage(page));
  };

  return (
    <div className="footer">
      {/* The below ul contains the list of links that you see in the footer */}
      {/* I have only made static footer links which just change the url and doesnot change the pages */}
      <ul className="footer__links">
        <li className="footer__link">
          <a href="https://www.linkedin.com/in/rasswanth-senthilkumar-2bb01b184/">
            About Us
          </a>
        </li>
        <li className="footer__link">
          <a href="https://github.com/rasna-skumar1306">Delivery Information</a>
        </li>
        <li className="footer__link">
          <a href="#ReturnsAndExchange">Returns & Exchange</a>
        </li>
        <li className="footer__link">
          <a href="https://github.com/rasna-skumar1306">Technical & Privacy</a>
        </li>
        <li className="footer__link">
          <a href="#Status">Order Status</a>
        </li>
      </ul>

      {/* The below div consist of the middle part of the footer i.e the logo and social media links */}
      <div className="footer__social">
        <div className="footer__logo">
          <li className="footer__logoItem">
            <a
              href="/"
              id="/"
              onClick={(e) => changePage(e)}
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              MADE UP
            </a>
          </li>
        </div>
        <p className="stay">Stay in touch with us</p>
        <div className="footer__logosSocial">
          <div className="footer__logoSocial">
            <a href="https://www.facebook.com/rasna5202">
              {/*This is my facebook link  */}
              <FacebookOutlined style={socialLogoStyles} />
            </a>
          </div>
          <div className="footer__logoSocial">
            <a href="https://www.linkedin.com/in/rasswanth-senthilkumar-2bb01b184/">
              {/*This is my linkedin link  */}
              <LinkedinOutlined style={socialLogoStyles} />
            </a>
          </div>
          <div className="footer__logoSocial">
            <a href="https://www.youtube.com/channel/UCWd-LUdoLTjwgS5R7L_bv9A">
              {/*This is my youtube channel link  */}
              <YoutubeOutlined style={socialLogoStyles} />
            </a>
          </div>
        </div>
      </div>
      {/* The below div contains the address that you see in the footer */}
      <div className="footer__address">
        <h4 className="footer__addressHead">Our Corporate Office</h4>
        <p>
          No: 7,A2B road, Adayar Rajpuram, T-Nagar,
          <br /> Chennai - 642002.
        </p>
        <div className="footer__contacts">
          <p>
            <MailOutlined />
            <span className="footer__contactContent">
              <a
                href="mailto:rasna5202@gmail.com"
                style={{ textDecoration: "none", color: "#bbbbbb" }}
              >
                {/*this is my email*/} rasna5202@gmail.com
              </a>
            </span>
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
