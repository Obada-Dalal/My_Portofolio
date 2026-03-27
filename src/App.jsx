import "./App.css";
import Home from "./Components/home/Home";
import Navbar from "./Components/navbar/Navbar";
import Resume from "./Components/resume/Resume";
import MainProjects from "./Components/projects/MainProjects";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    // , offset: 0
  }, []);
  return (
    <>
      <Navbar />
      <Home />
      <Resume />
      <MainProjects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
