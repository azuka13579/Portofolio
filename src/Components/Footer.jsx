import React from "react";

export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-cyan-400 to-sky-700 text-white text-center py-5 px-10 flex justify-between items-center">
      <div className="">
        <p className="">&copy; 2025 Samudra Wirakarsa</p>
      </div>
      <ol className="flex gap-6">
        <a
          href="https://www.instagram.com"
          class="text-white hover:text-cyan-100 transition"
        >
          <i class="fab fa-instagram text-4xl"></i>
        </a>
        <a
          href="https://www.twitter.com"
          class="text-white hover:text-cyan-100 transition"
        >
          <i class="fab fa-twitter text-4xl"></i>
        </a>
        <a
          href="https://www.youtube.com"
          class="text-white hover:text-cyan-100 transition"
        >
          <i class="fab fa-youtube text-4xl"></i>
        </a>
        <a
          href="https://www.facebook.com"
          class="text-white hover:text-cyan-100 transition"
        >
          <i class="fab fa-facebook text-4xl"></i>
        </a>
      </ol>
    </div>
  );
}
