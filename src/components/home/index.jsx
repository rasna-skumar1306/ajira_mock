import React from "react";

//importing all custom made components
import Collections from "./Collections.component";
import Contact from "./Contact.component";
import LatestCollections from "./LatestCollections.component";
import Testimonials from "./Testimonials.component";

// this is a funcional component which contains all other components that are present in the home page
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
