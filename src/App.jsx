import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Sports from "./pages/Sports";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import './App.css'

function App() {

  
  return (

    

    <>

    <div style={{ background: "#19191aff" }}></div>
   
    
      <Navbar />
      <h1>welcome</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects  />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    
    
    

    </>
    
  );
}

export default App;
