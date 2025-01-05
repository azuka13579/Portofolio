import React from "react";
import Landing from "../Components/Landing";
import Divisi from "../Components/Divisi";
import Divisikanan from "../Components/Divisikanan";
import Footer from "../Components/Footer";

export default function Proker() {
  return (
    <div>
      <Landing
        judul="Biro dan Departemen"
        subjudul="lorem ipsum dolor sir amet, you are the best person i have ever met"
      ></Landing>
      <div className="">
        <Divisi link="/divisi"></Divisi>
        <Divisikanan link="/divisi"></Divisikanan>
        <Divisi link="/divisi"></Divisi>
        <Divisikanan link="/divisi"></Divisikanan>
        <Divisi link="/divisi"></Divisi>
        <Divisikanan link="/divisi"></Divisikanan>
        <Divisi link="/divisi"></Divisi>
        <Divisikanan link="/divisi"></Divisikanan>
        <Divisi link="/divisi"></Divisi>
        <Divisikanan link="/divisi"></Divisikanan>
        <Divisi link="/divisi"></Divisi>
        <Divisikanan link="/divisi"></Divisikanan>
      </div>
      <Footer></Footer>
    </div>
  );
}
