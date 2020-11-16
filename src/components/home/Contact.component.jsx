import React from "react";
import { EnvironmentOutlined } from "@ant-design/icons";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__content">
        <h2 style={{ marginTop: "130px" }}>GET COUPONS & STYLE GUIDES</h2>
        <h3>Subscribe to our Newsletter</h3>
        <div className="contact__form">
          <input type="text" placeholder="Email-Id" />
          <button> Subscribe</button>
        </div>
        <div className="contact__locateUs">
          <h2 style={{ fontSize: "16px" }}>
            <EnvironmentOutlined />
            <span> Locate Us</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
