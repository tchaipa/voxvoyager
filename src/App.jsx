import "./App.css";
import Navbar from "./Navbar.jsx";
import Banner from "./Banner.jsx";
import Destinations from "./Destinations.jsx";
import Services from "./Services.jsx";
import { FloatingWhatsApp } from "react-floating-whatsapp";

function App() {
  return (
    <div className="App container-fluid">
      <Navbar />
      <Banner />
      <FloatingWhatsApp />
      <Destinations />
      <Services />
    </div>
  );
}

export default App;
