import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Sports from "./pages/Sports";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import './App.css'
import MobNav from "./components/MobNav";

function App() {

  
  return (

    

    <>

    <div style={{ background: "#19191aff" }}></div>
   
    
      {/* <Navbar /> */}
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects  />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      

      <Footer />
      <MobNav />
   
    
    

    </>
    
  );
}

export default App;
