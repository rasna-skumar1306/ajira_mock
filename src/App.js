import "./App.css";
import Header from "./components/Header/Header.component";
import Footer from "./components/footer/footer.component";
import Home from "./components/home";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const currentPage = useSelector((state) => state.currentPage); // getting the currentpage from the redux global store

  //function that displays pages dynamically
  const displayPage = () => {
    switch (currentPage) {
      case "/":
        return <Home />; //contains the home page contents
      case currentPage:
        return (
          <div>
            <h1>Welcome to {currentPage}</h1>
            <h3>This page is under development</h3>
            <p style={{ margin: "2rem auto 14rem" }}>
              I have done the router for the Header links from scratch simply
              just by using redux.
              <br /> The only link that work are the navbar links, some links in
              the footer, mail address in the footer and social media icons in
              the footer.
            </p>
          </div>
        );
      default:
        return <Home />;
    }
  };

  useEffect(() => {}, [currentPage]);
  return (
    <div className="App">
      <Header />
      {displayPage()}
      <Footer />
    </div>
  );
}

export default App;
