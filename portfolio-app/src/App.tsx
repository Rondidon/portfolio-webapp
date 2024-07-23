import { BrowserRouter } from "react-router-dom";
import "./css/app.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="app">
      <BrowserRouter basename="/portfolio-webapp">
        <Header message="header" />
        <Main />
        <Footer message="footer" />
      </BrowserRouter>
    </div>
  );
}

export default App;
