import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarr from "./Navbar.jsx";
import Banner from "./Banner.jsx";
import Destinations from "./Destinations.jsx";
// import Services from "./Services.jsx";
import Packages from "./Packages.jsx";
import AboutUs from "./AboutUs.jsx";
// import { FloatingWhatsApp } from "react-floating-whatsapp";

function App() {
  return (
    <div className="App ">
      <Navbarr />
      <Banner />
      {/* <FloatingWhatsApp /> */}
      <Destinations />
      <Packages />
      <AboutUs />
      {/* <Services /> */}
    </div>
  );
}

export default App;
