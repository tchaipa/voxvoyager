import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarr from "./Navbar.jsx";
import Banner from "./Banner.jsx";
import Destinations from "./Destinations.jsx";
// import Services from "./Services.jsx";
import Packages from "./Packages.jsx";
import AboutUs from "./AboutUs.jsx";
import { BrowserRouter } from "react-router-dom";
// import { FloatingWhatsApp } from "react-floating-whatsapp";

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Navbarr />
        <Banner />
        {/* <FloatingWhatsApp /> */}
        <Destinations />
        <Packages />
        <AboutUs />
        {/* <Services /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
