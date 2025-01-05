import React from "react";
import Landing from "../Components/Landing";
import Footer from "../Components/Footer";
import Divisi from "../Components/Divisi";
import profile from "../assets/bg-kapal.png";
import Cardgallery from "../Components/Cardgallery";

export default function Detailproker() {
  return (
    <div>
      <Landing
        judul="ini adalah judul proker"
        subjudul="lorem sdfjslk fjsd fskdjf lakjf ksajfd sajlfkds jf dskajf lskdjf akljdf klsadjf lksaj fklsajlfk dsjaklf "
      ></Landing>

      {/* main */}
      <div className="div">
        <Divisi></Divisi>
      </div>

      {/* dokumentasi */}
      <h1 className="text-6xl text-sky-500 font-bold text-center my-4">
        Dokumentasi
      </h1>
      <div className="dokumentasi flex flex-wrap justify-center gap-4 p-3">
        <Cardgallery profile={profile}></Cardgallery>
        <Cardgallery profile={profile}></Cardgallery>
        <Cardgallery profile={profile}></Cardgallery>
        <Cardgallery profile={profile}></Cardgallery>
        <Cardgallery profile={profile}></Cardgallery>
        <Cardgallery profile={profile}></Cardgallery>
        <Cardgallery profile={profile}></Cardgallery>
        <Cardgallery profile={profile}></Cardgallery>
      </div>

      <Footer></Footer>
    </div>
  );
}
