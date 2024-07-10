import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/portfolio-webapp">
        <Header message="header" />
        <Main />
        <Footer message="footer" />
      </BrowserRouter>
    </div>
  );
}

export default App;
