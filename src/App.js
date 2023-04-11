import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route Component={<Home />} path="/" />
          <Route Component={<AboutUs />} path="/about-us" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
