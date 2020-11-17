import "./App.css";
import Header from "./components/Header/Header.component";
import Footer from "./components/footer/footer.component";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home /> {/* contains the contents of the home page */}
      <Footer />
    </div>
  );
}

export default App;
