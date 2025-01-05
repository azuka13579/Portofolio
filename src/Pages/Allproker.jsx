import React from "react";
import Navbar from "../Components/Navbar";
import Landing from "../Components/Landing";
import Card2 from "../Components/Card2";
import Footer from "../Components/Footer";
import Cardlaut from "../Components/Cardlaut";

export default function Project() {
  return (
    <div>
      <Landing
        judul="Proker Sakarsa"
        subjudul="Arungi Samudra, Gapai Cakrawala, Wujudkan Cita"
      ></Landing>
      {/* Section 2 */}
      <div className="py-5">
        <h1
          className="bg-clip-text text-transparent
        text-center border-b-2 border-sky-500 font-bold text-6xl p-6 bg-gradient-to-r from-sky-800 to-cyan-300"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          Press Release Sakarsa
        </h1>
        <div className="flex flex-wrap justify-center gap-4 py-10 px-5">
          <Cardlaut delay={0}></Cardlaut>
          <Cardlaut delay={50}></Cardlaut>
          <Cardlaut delay={100}></Cardlaut>
          <Cardlaut delay={0}></Cardlaut>
          <Cardlaut delay={50}></Cardlaut>
          <Cardlaut delay={100}></Cardlaut>
          <Cardlaut delay={0}></Cardlaut>
          <Cardlaut delay={50}></Cardlaut>
          <Cardlaut delay={100}></Cardlaut>
          <Cardlaut delay={0}></Cardlaut>
          <Cardlaut delay={50}></Cardlaut>
          <Cardlaut delay={100}></Cardlaut>
        </div>
      </div>

      {/* <Cardlaut></Cardlaut> */}

      <Footer></Footer>
    </div>
  );
}
