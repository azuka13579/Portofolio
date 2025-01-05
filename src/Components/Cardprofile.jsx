import React from "react";
import gambar from "../assets/bg-kapal.png";
// import ReactCardFlip from "react-card-flip";

export default function Cardprofile({ delay, transition }) {
  return (
    <div
      className="card"
      data-aos={transition}
      data-aos-duration="800"
      data-aos-delay={delay}
      data-aos-anchor-placement="center-bottom"
    >
      <div className="card">
        <div className="overflow-hidden group hover:scale-105 hover:-translate-y-2 transition duration-300 ">
          <img
            src={gambar}
            alt=""
            className="w-[200px] h-[300px] object-cover border-2 bg-white border-white rounded-lg "
          />
          <div
            className="w-full h-full bg-white absolute top-0 right-0 opacity-0 group-hover:opacity-80
          transition duration-300 flex justify-center items-center border-4 border-sky-600 p-4 rounded-lg"
          >
            <h1 className="text-2xl font-serif text-center text-sky-600">
              tiada aksi tanpa adanya kontribusi kenapa saya ingin tidur ya
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
