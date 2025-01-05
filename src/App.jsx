import { useState } from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Proker from "./Pages/Proker";
import Allproker from "./Pages/Allproker";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact";
import Detailproker from "./Pages/Detailproker";
import Divisi from "./Pages/Divisi";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/proker" element={<Proker />} />
          <Route path="/allproker" element={<Allproker />} />
          <Route path="/proker/detailproker" element={<Detailproker />} />
          <Route path="/divisi" element={<Divisi />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
