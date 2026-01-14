import AboutMe from "./components/AboutMe";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ContactMe from "./components/ContactMe";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";


function App() {
 

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
