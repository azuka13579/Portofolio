import React from "react";
import gambar from "../assets/bg-utama.jpg";

export default function Cardlaut({ delay }) {
  return (
    <div
      className=""
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay={delay}
    >
      <div
        class="max-w-sm bg-white rounded-lg shadow-md overflow-hidden border-transparent 
      hover:border-sky-500 border-2 transition duration-400 hover:-translate-y-1 hover:scale-[1.02]"
      >
        {/* <!-- Gambar --> */}
        <img src={gambar} alt="Ocean" class="w-full h-40 object-cover" />

        {/* <!-- Konten --> */}
        <div class="p-6">
          <h2 class="text-2xl font-bold text-sky-700">Explore the Ocean</h2>
          <p class="text-gray-600 mt-3">
            Discover the mysteries of the deep blue sea and experience the
            serenity of the ocean.
          </p>
          <a
            href="/proker/detailproker"
            class="mt-5 inline-block px-4 py-2 bg-sky-600 text-white font-semibold rounded-md hover:bg-sky-800 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
