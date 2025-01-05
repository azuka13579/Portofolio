import React from "react";
import profile from "../assets/bg-kapal.png";

export default function Divisi({ link }) {
  return (
    <div>
      <div class="relative pb-1 bg-gradient-to-r from-cyan-400 to-sky-700">
        <div class="bg-white flex p-4 pb-6">
          <div className="kiri flex-1 pl-8">
            <h1
              className="bg-clip-text text-transparent
            text-left font-bold text-8xl bg-gradient-to-r from-sky-600 to-cyan-400 inline-block"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Divisi
            </h1>
            <p
              className="text-justify text-md mt-2 indent-4"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
              dolorem, ut fugit a velit modi voluptates cumque eligendi,
              expedita veritatis doloribus non ab rem quibusdam omnis commodi
              quo incidunt molestiae! Laboriosam omnis saepe deserunt! Quis
              itaque earum adipisci architecto praesentium assumenda nisi?
              Aspernatur debitis ullam eos voluptatibus corporis, recusandae
              accusantium!
            </p>
            <p
              className="text-justify text-md mt-2 indent-4"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
              dolorem, ut fugit a velit modi voluptates cumque eligendi,
              expedita veritatis doloribus non ab rem quibusdam omnis commodi
              quo incidunt molestiae! Laboriosam omnis saepe deserunt! Quis
              itaque earum adipisci architecto praesentium assumenda nisi?
              Aspernatur debitis ullam eos voluptatibus corporis, recusandae
              accusantium!
            </p>
            <p
              className="text-justify text-md mt-2 indent-4"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
              dolorem, ut fugit a velit modi voluptates cumque eligendi,
              expedita veritatis doloribus non ab rem quibusdam omnis commodi
              quo incidunt molestiae! Laboriosam omnis saepe deserunt! Quis
              itaque earum adipisci architecto praesentium assumenda nisi?
              Aspernatur debitis ullam eos voluptatibus corporis, recusandae
              accusantium!
            </p>
            <div
              className="div"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-anchor-placement="bottom-bottom"
            >
              <a
                href={link}
                class="mt-4 mb-2 inline-block px-4 py-2 bg-sky-500 text-white font-semibold rounded-md hover:bg-sky-600 transition"
              >
                Lihat Proker
              </a>
            </div>
          </div>
          <div
            className="kanan w-2/5 flex items-center justify-center"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <img src={profile} alt="" className="w-4/5 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
