import React from "react";
import Profile from "../assets/bg-utama.jpg";

export default function Card2({ delay }) {
  return (
    <div
      className="card w-[350px] h-[300px] transition-all overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay={delay}
    >
      <div className="h-1/2 overflow-hidden">
        <img src={Profile} alt="" className="w-full" />
      </div>
      <div className="p-4 ">
        <h1 className="text-xl font-bold text-gray-800 mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, vel!
        </h1>
        <a href="" className="text-blue-500 hover:underline">
          baca selengkapnya
        </a>
      </div>
    </div>
  );
}
