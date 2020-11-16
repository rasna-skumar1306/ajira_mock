import React from "react";
import Collections from "./Collections.component";
import Contact from "./Contact.component";
import LatestCollections from "./LatestCollections.component";
import Testimonials from "./Testimonials.component";

const Home = () => {
  return (
    <div>
      <Collections />
      <LatestCollections />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
