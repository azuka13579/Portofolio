import React, { Children } from "react";
import Navbar from "../Components/Navbar";
import Profile from "../assets/Profile.jpg";
import Visimisi from "../Components/Visimisi";
import Card2 from "../Components/Card2";
import Landing from "../Components/Landing";
import Footer from "../Components/Footer";
import Buttonlanding from "../Components/Buttonlanding";

export default function About() {
  return (
    <div>
      <Landing
        judul="Narapati Bimantara"
        subjudul="Arungi Samudra, Gapai Cakrawala, Wujudkan Cita"
        button={<Buttonlanding></Buttonlanding>}
      ></Landing>
      {/* section kedua */}
      <div className="min-h-screen bg-white p-10 flex flex-col items-center justify-center">
        <div className="avatar" data-aos="fade-up" data-aos-duration="500">
          <div className="w-40 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <h1
          className="font-extrabold tracking-wider text-5xl mt-8 text-sky-500"
          data-aos="fade-up"
          data-aos-duration="700"
          delay="30"
        >
          Ormawa Eksekutif PKU
        </h1>
        <h4
          className="font-extralight text-xl tracking-widest text-sky-700"
          data-aos="fade-up"
          data-aos-duration="700"
          delay="60"
        >
          Kabinet Samudra Wirakarsa
        </h4>
        <p
          className="font-normal text-lg mt-8 w-[800px] text-center text-slate-600"
          data-aos="fade-up"
          data-aos-duration="700"
          delay="100"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
          debitis saepe nesciunt perspiciatis culpa provident odit eaque
          aliquid! Minus recusandae vitae nobis assumenda esse ea alias, aliquid
          quos mollitia odit.
        </p>
      </div>

      {/* section ketiga */}
      <Visimisi></Visimisi>

      {/* section keempat */}
      <div className="h-screen bg-white flex flex-col items-center justify-center gap-10">
        <div
          className="text-left w-full px-10"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h1 className="bg-clip-text text-transparent font-bold text-6xl p-6 bg-gradient-to-r from-sky-600 to-cyan-300 border-b-2 border-sky-500">
            Press Release Proker
          </h1>
        </div>
        <div className="flex flex-col gap-4">
          <div className="self-end" data-aos="fade-up" data-aos-duration="800">
            <a
              href="/allproker"
              className="text-blue-400 hover:text-blue-700 hover:bg-cyan-400 hover:bg-opacity-40 py-1 px-2 rounded-md transition-all duration-300 text-xl font-bold lihat-semua"
            >
              Lihat Semua Proker
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Card2 delay="0"></Card2>
            <Card2 delay="150"></Card2>
            <Card2 delay="300"></Card2>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer></Footer>
    </div>
  );
}
