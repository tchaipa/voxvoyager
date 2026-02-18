import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarr from "./Navbar.jsx";
import Banner from "./Banner.jsx";
import Destinations from "./Destinations.jsx";
import Testimonials from "./Testimonials.jsx";
import Services from "./Services.jsx";
import AboutUs from "./AboutUs.jsx";
import Footer from "./Footer.jsx";
import Blog from "./Blog.jsx";
// import { FloatingWhatsApp } from "react-floating-whatsapp";

function App() {
  return (
    <div className="App ">
      <Navbarr />
      <Banner />
      <AboutUs />
      <Services />
      <Destinations />
      <Testimonials />
      <Blog />
      <Footer />
            {/* <FloatingWhatsApp /> */}
    </div>
  );
}

export default App;
