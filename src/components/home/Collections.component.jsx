import React from "react";
import "./home.styles.css";

//this is a functional component which display the first 4 pictures in the home page
const Collections = () => {
  return (
    <div className="collections">
      <div className="collections__one">
        <div className="contents">
          <h2 style={{ marginTop: "405px" }}>
            Clothes that <span className="highlight">respire</span>
          </h2>
          <h2>
            For Men Who <span className="highlight">Aspire</span>
          </h2>
          <button>BROWSE COLLECTIONS</button>
        </div>
      </div>
      <div className="collections__grid">
        <div className="collections__two">
          <div className="contents">
            <h2 className="first">
              <span className="highlight">Summer </span>is here andrespire
            </h2>
            <h2>
              So is our <span className="highlight">Collection</span>
            </h2>
          </div>
        </div>
        <div className="collections__gridTwo">
          <div className="collections__three">
            <div className="contents">
              <h2 style={{ marginTop: "200px" }}>
                <span className="highlight">Wrinkle-free </span>t-shirts
              </h2>
            </div>
          </div>
          <div className="collections__four">
            <div className="contents">
              <h2 style={{ marginTop: "200px" }}>
                <span className="highlight">Stain-free </span>Denim Shirts
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
